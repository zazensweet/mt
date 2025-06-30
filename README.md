# マーク・トウェインの哲学クイズ - 動的版

マーク・トウェインの「人間とは何か」に基づいた哲学的対話型クイズアプリケーション。

## 機能

### 静的版から動的版への改良点
- **データ永続化**: SQLiteデータベースによるクイズデータと進捗の保存
- **セッション管理**: ブラウザを閉じても進捗が保存される
- **統計機能**: 全体の正答率、個人の回答履歴を確認可能
- **マルチユーザー対応**: 複数のユーザーが同時に利用可能

## セットアップ

1. 依存関係のインストール
```bash
npm install
```

2. データベースの初期化
```bash
npm run init-db
```

3. サーバーの起動
```bash
npm start
# または開発モード
npm run dev
```

4. ブラウザでアクセス
```
http://localhost:3000
```

## 技術スタック

- **フロントエンド**: Vanilla JavaScript, HTML5, CSS3
- **バックエンド**: Node.js, Express
- **データベース**: SQLite3
- **セッション管理**: express-session

## ディレクトリ構造

```
MT3/
├── backend/              # バックエンドコード
│   ├── server.js        # Expressサーバー
│   ├── database.js      # データベース接続
│   ├── init-database.js # DB初期化スクリプト
│   └── routes/          # APIルート
│       ├── quiz.js      # クイズ関連API
│       └── progress.js  # 進捗関連API
├── index.html           # メインHTML
├── script.js            # 静的版スクリプト（オリジナル）
├── script-dynamic.js    # 動的版スクリプト
├── styles.css           # スタイルシート
└── package.json         # 依存関係定義
```

## API エンドポイント

- `GET /api/quiz/next` - 次の問題を取得
- `POST /api/quiz/answer` - 回答を送信
- `GET /api/progress` - 進捗状況を取得
- `POST /api/progress/reset` - 進捗をリセット
- `GET /api/progress/statistics` - 統計情報を取得

## 静的版への切り替え

`index.html`の40-42行目を編集して、読み込むスクリプトを変更：

```html
<!-- 動的版 -->
<script src="script-dynamic.js"></script>

<!-- 静的版に戻す場合 -->
<script src="script.js"></script>
```