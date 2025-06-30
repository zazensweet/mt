const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// データベース接続
const db = new sqlite3.Database(path.join(__dirname, 'quiz.db'));

// データベース初期化
db.serialize(() => {
    // クイズテーブル
    db.run(`CREATE TABLE IF NOT EXISTS quizzes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        option1 TEXT NOT NULL,
        option2 TEXT NOT NULL,
        option3 TEXT NOT NULL,
        correct_index INTEGER NOT NULL,
        correct_comment TEXT NOT NULL,
        incorrect_comment TEXT NOT NULL,
        deep_comment TEXT
    )`);

    // ユーザーセッションテーブル
    db.run(`CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        last_accessed DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // 回答履歴テーブル
    db.run(`CREATE TABLE IF NOT EXISTS answers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT NOT NULL,
        quiz_id INTEGER NOT NULL,
        selected_index INTEGER NOT NULL,
        is_correct BOOLEAN NOT NULL,
        answered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sessions(id),
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    )`);

    // 進捗テーブル
    db.run(`CREATE TABLE IF NOT EXISTS progress (
        session_id TEXT PRIMARY KEY,
        total_questions INTEGER DEFAULT 0,
        correct_answers INTEGER DEFAULT 0,
        completed_quiz_ids TEXT DEFAULT '[]',
        last_quiz_id INTEGER,
        is_finished BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (session_id) REFERENCES sessions(id)
    )`);
});

module.exports = db;