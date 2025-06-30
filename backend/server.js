const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェア
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// セッション設定
app.use(session({
    secret: process.env.SESSION_SECRET || 'mt3-quiz-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30日
        httpOnly: true
    }
}));

// セッションミドルウェア
app.use((req, res, next) => {
    if (!req.session.userId) {
        req.session.userId = uuidv4();
        req.session.save();
    }
    next();
});

// ルート読み込み
const quizRoutes = require('./routes/quiz');
const progressRoutes = require('./routes/progress');

// APIルート
app.use('/api/quiz', quizRoutes);
app.use('/api/progress', progressRoutes);

// 静的ファイルのフォールバック
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`サーバーがポート ${PORT} で起動しました`);
    console.log(`http://localhost:${PORT} でアクセスできます`);
});