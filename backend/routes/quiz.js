const express = require('express');
const router = express.Router();
const db = require('../database');

// 次の問題を取得
router.get('/next', (req, res) => {
    const sessionId = req.session.userId;
    
    // セッションの存在確認と作成
    db.get("SELECT * FROM sessions WHERE id = ?", [sessionId], (err, session) => {
        if (err) {
            return res.status(500).json({ error: 'データベースエラー' });
        }
        
        if (!session) {
            // 新規セッション作成
            db.run("INSERT INTO sessions (id) VALUES (?)", [sessionId], (err) => {
                if (err) {
                    return res.status(500).json({ error: 'セッション作成エラー' });
                }
                // 進捗レコードも作成
                db.run("INSERT INTO progress (session_id) VALUES (?)", [sessionId]);
            });
        } else {
            // 最終アクセス時刻を更新
            db.run("UPDATE sessions SET last_accessed = CURRENT_TIMESTAMP WHERE id = ?", [sessionId]);
        }
    });
    
    // 進捗状況を取得
    db.get("SELECT * FROM progress WHERE session_id = ?", [sessionId], (err, progress) => {
        if (err) {
            return res.status(500).json({ error: 'データベースエラー' });
        }
        
        // 終了フラグが立っている場合
        if (progress && progress.is_finished) {
            return res.json({ finished: true });
        }
        
        // 既に回答済みの問題IDを取得
        const completedIds = progress ? JSON.parse(progress.completed_quiz_ids || '[]') : [];
        
        // 未回答の問題を取得
        const placeholders = completedIds.length > 0 
            ? completedIds.map(() => '?').join(',')
            : '0';
        
        const query = `SELECT * FROM quizzes WHERE id NOT IN (${placeholders}) ORDER BY RANDOM() LIMIT 1`;
        const params = completedIds.length > 0 ? completedIds : [];
        
        db.get(query, params, (err, quiz) => {
            if (err) {
                return res.status(500).json({ error: 'データベースエラー' });
            }
            
            if (!quiz) {
                // すべての問題に回答済み
                return res.json({ 
                    allCompleted: true,
                    totalQuestions: completedIds.length
                });
            }
            
            // クイズデータを整形して返す
            res.json({
                id: quiz.id,
                question: quiz.question,
                options: [quiz.option1, quiz.option2, quiz.option3],
                totalQuestions: 100,
                answeredQuestions: completedIds.length
            });
        });
    });
});

// 回答を記録
router.post('/answer', (req, res) => {
    const sessionId = req.session.userId;
    const { quizId, selectedIndex } = req.body;
    
    if (selectedIndex === 4) {
        // 「もう勘弁してください」を選択
        db.run("UPDATE progress SET is_finished = TRUE WHERE session_id = ?", [sessionId], (err) => {
            if (err) {
                return res.status(500).json({ error: 'データベースエラー' });
            }
            res.json({ finished: true });
        });
        return;
    }
    
    // クイズ情報を取得
    db.get("SELECT * FROM quizzes WHERE id = ?", [quizId], (err, quiz) => {
        if (err || !quiz) {
            return res.status(400).json({ error: '無効なクイズID' });
        }
        
        const isCorrect = selectedIndex === quiz.correct_index;
        
        // 回答を記録
        db.run(
            "INSERT INTO answers (session_id, quiz_id, selected_index, is_correct) VALUES (?, ?, ?, ?)",
            [sessionId, quizId, selectedIndex, isCorrect ? 1 : 0],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: 'データベースエラー' });
                }
                
                // 進捗を更新
                db.get("SELECT * FROM progress WHERE session_id = ?", [sessionId], (err, progress) => {
                    if (!progress) {
                        // 進捗レコードがない場合は作成
                        db.run(
                            "INSERT INTO progress (session_id, total_questions, correct_answers, completed_quiz_ids, last_quiz_id) VALUES (?, ?, ?, ?, ?)",
                            [sessionId, 1, isCorrect ? 1 : 0, JSON.stringify([quizId]), quizId]
                        );
                    } else {
                        // 既存の進捗を更新
                        const completedIds = JSON.parse(progress.completed_quiz_ids || '[]');
                        completedIds.push(quizId);
                        
                        db.run(
                            "UPDATE progress SET total_questions = ?, correct_answers = ?, completed_quiz_ids = ?, last_quiz_id = ? WHERE session_id = ?",
                            [
                                progress.total_questions + 1,
                                progress.correct_answers + (isCorrect ? 1 : 0),
                                JSON.stringify(completedIds),
                                quizId,
                                sessionId
                            ]
                        );
                    }
                    
                    // レスポンスを返す
                    res.json({
                        correct: isCorrect,
                        correctIndex: quiz.correct_index,
                        correctComment: quiz.correct_comment,
                        incorrectComment: quiz.incorrect_comment,
                        deepComment: quiz.deep_comment,
                        selectedIndex: selectedIndex === 3 ? 3 : selectedIndex
                    });
                });
            }
        );
    });
});

// クイズ統計を取得
router.get('/stats/:quizId', (req, res) => {
    const { quizId } = req.params;
    
    db.all(
        "SELECT selected_index, COUNT(*) as count FROM answers WHERE quiz_id = ? GROUP BY selected_index",
        [quizId],
        (err, stats) => {
            if (err) {
                return res.status(500).json({ error: 'データベースエラー' });
            }
            
            res.json({ stats });
        }
    );
});

module.exports = router;