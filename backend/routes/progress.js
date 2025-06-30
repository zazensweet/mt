const express = require('express');
const router = express.Router();
const db = require('../database');

// 進捗状況を取得
router.get('/', (req, res) => {
    const sessionId = req.session.userId;
    
    db.get("SELECT * FROM progress WHERE session_id = ?", [sessionId], (err, progress) => {
        if (err) {
            return res.status(500).json({ error: 'データベースエラー' });
        }
        
        if (!progress) {
            return res.json({
                totalQuestions: 0,
                correctAnswers: 0,
                accuracy: 0,
                isFinished: false
            });
        }
        
        const accuracy = progress.total_questions > 0 
            ? Math.round((progress.correct_answers / progress.total_questions) * 100)
            : 0;
        
        res.json({
            totalQuestions: progress.total_questions,
            correctAnswers: progress.correct_answers,
            accuracy: accuracy,
            isFinished: progress.is_finished,
            completedQuizIds: JSON.parse(progress.completed_quiz_ids || '[]')
        });
    });
});

// 進捗をリセット
router.post('/reset', (req, res) => {
    const sessionId = req.session.userId;
    
    // 新しいセッションIDを生成
    const newSessionId = require('uuid').v4();
    req.session.userId = newSessionId;
    req.session.save();
    
    // 新規セッションを作成
    db.run("INSERT INTO sessions (id) VALUES (?)", [newSessionId], (err) => {
        if (err) {
            return res.status(500).json({ error: 'セッション作成エラー' });
        }
        
        // 進捗レコードも作成
        db.run("INSERT INTO progress (session_id) VALUES (?)", [newSessionId], (err) => {
            if (err) {
                return res.status(500).json({ error: '進捗作成エラー' });
            }
            
            res.json({ success: true, newSessionId });
        });
    });
});

// 統計情報を取得
router.get('/statistics', (req, res) => {
    const sessionId = req.session.userId;
    
    // 全体の統計
    db.get(
        "SELECT COUNT(DISTINCT session_id) as totalPlayers, AVG(correct_answers * 1.0 / total_questions) as avgAccuracy FROM progress WHERE total_questions > 0",
        (err, globalStats) => {
            if (err) {
                return res.status(500).json({ error: 'データベースエラー' });
            }
            
            // 個人の回答履歴
            db.all(
                `SELECT q.question, a.selected_index, a.is_correct, a.answered_at 
                 FROM answers a 
                 JOIN quizzes q ON a.quiz_id = q.id 
                 WHERE a.session_id = ? 
                 ORDER BY a.answered_at DESC 
                 LIMIT 10`,
                [sessionId],
                (err, recentAnswers) => {
                    if (err) {
                        return res.status(500).json({ error: 'データベースエラー' });
                    }
                    
                    res.json({
                        global: {
                            totalPlayers: globalStats.totalPlayers || 0,
                            avgAccuracy: Math.round((globalStats.avgAccuracy || 0) * 100)
                        },
                        personal: {
                            recentAnswers: recentAnswers || []
                        }
                    });
                }
            );
        }
    );
});

module.exports = router;