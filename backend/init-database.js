const db = require('./database');
const quizData = require('./quiz-data');

if (!quizData || quizData.length === 0) {
    console.error('クイズデータが見つかりませんでした');
    process.exit(1);
}

// データベースに挿入
db.serialize(() => {
    // 既存のデータをクリア
    db.run("DELETE FROM quizzes", (err) => {
        if (err) {
            console.error('既存データのクリアに失敗:', err);
        }
    });
    
    const stmt = db.prepare(`INSERT INTO quizzes 
        (question, option1, option2, option3, correct_index, correct_comment, incorrect_comment, deep_comment) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    
    quizData.forEach((quiz, index) => {
        stmt.run(
            quiz.question,
            quiz.options[0],
            quiz.options[1],
            quiz.options[2],
            quiz.correct,
            quiz.correctComment,
            quiz.incorrectComment,
            quiz.deepComment || null,
            (err) => {
                if (err) {
                    console.error(`クイズ ${index + 1} の挿入エラー:`, err);
                } else {
                    console.log(`クイズ ${index + 1} を挿入しました`);
                }
            }
        );
    });
    
    stmt.finalize(() => {
        console.log(`\n合計 ${quizData.length} 個のクイズを登録しました`);
        db.close();
    });
});