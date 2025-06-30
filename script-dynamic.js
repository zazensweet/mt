// API基本設定
const API_BASE = window.location.origin;

// DOM要素の取得
const chatMessages = document.getElementById('chatMessages');
const quizOptions = document.getElementById('quizOptions');

let currentQuiz = null;
let isAnswering = false;
let isAppFinished = false;

// 進捗情報を表示する関数
async function displayProgress() {
    try {
        const response = await fetch(`${API_BASE}/api/progress`, {
            credentials: 'include'
        });
        const progress = await response.json();
        
        // 進捗バーを表示（必要に応じてUIに追加）
        console.log(`進捗: ${progress.totalQuestions}/100問 (正答率: ${progress.accuracy}%)`);
    } catch (error) {
        console.error('進捗取得エラー:', error);
    }
}

// メッセージを追加する関数
function addMessage(text, isUser = false, isDeepKun = false, isQuestion = false) {
    const messageDiv = document.createElement('div');
    let messageClass = 'twain-message';
    if (isUser) messageClass = 'user-message';
    if (isDeepKun) messageClass = 'deep-message';
    if (isQuestion) messageClass = 'question-message';
    messageDiv.className = `message ${messageClass}`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    
    const avatar = document.createElement('div');
    let avatarClass = 'avatar-twain';
    let avatarText = 'MT';
    if (isUser) {
        avatarClass = 'avatar-user';
        avatarText = 'You';
    } else if (isDeepKun) {
        avatarClass = 'avatar-deep';
        avatarText = 'DP';
    }
    avatar.className = avatarClass;
    avatar.textContent = avatarText;
    
    avatarDiv.appendChild(avatar);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;
    
    contentDiv.appendChild(textDiv);
    
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // 最新のメッセージまでスクロール
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 次の問題を取得
async function getNextQuiz() {
    try {
        const response = await fetch(`${API_BASE}/api/quiz/next`, {
            credentials: 'include'
        });
        const data = await response.json();
        
        if (data.finished) {
            // 既に終了している
            isAppFinished = true;
            addMessage(getFinalMessage());
            showRestartButton();
            return null;
        }
        
        if (data.allCompleted) {
            // 全問題完了
            addMessage("見事だ！君は全ての問題に答えた。人間の本質について、かなりの理解を得たようだな。");
            showStatisticsButton();
            return null;
        }
        
        // 進捗を表示
        await displayProgress();
        
        return data;
    } catch (error) {
        console.error('クイズ取得エラー:', error);
        addMessage("申し訳ない、技術的な問題が発生したようだ。ページを更新してもう一度試してみてくれ。");
        return null;
    }
}

// 回答を送信
async function submitAnswer(quizId, selectedIndex) {
    try {
        const response = await fetch(`${API_BASE}/api/quiz/answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ quizId, selectedIndex })
        });
        
        return await response.json();
    } catch (error) {
        console.error('回答送信エラー:', error);
        return null;
    }
}

// クイズの選択肢を生成
async function generateQuizOptions() {
    if (isAnswering || isAppFinished) return;
    
    const quiz = await getNextQuiz();
    if (!quiz || !quiz.id) return;
    
    currentQuiz = quiz;
    
    // 質問を表示
    setTimeout(() => {
        addMessage(quiz.question, false, false, true);
        
        // 選択肢ボタンを生成
        setTimeout(() => {
            // 正解位置をランダム化
            const correctPosition = Math.floor(Math.random() * 3);
            const shuffledOptions = [...quiz.options];
            currentQuiz.shuffledCorrect = correctPosition;
            
            // 既存のボタンを更新
            const existingButtons = quizOptions.querySelectorAll('.quiz-option');
            shuffledOptions.forEach((option, index) => {
                if (existingButtons[index]) {
                    existingButtons[index].textContent = `${index + 1}. ${option}`;
                    existingButtons[index].disabled = false;
                    existingButtons[index].className = 'quiz-option';
                    existingButtons[index].onclick = () => handleAnswerClick(index);
                }
            });
            
            // 4番目の選択肢
            if (existingButtons[3]) {
                existingButtons[3].textContent = '4. この中に正解はない';
                existingButtons[3].disabled = false;
                existingButtons[3].className = 'quiz-option';
                existingButtons[3].onclick = () => handleAnswerClick(3);
            }
            
            // 5番目の選択肢
            if (existingButtons[4]) {
                existingButtons[4].textContent = '5. もう勘弁してください';
                existingButtons[4].disabled = false;
                existingButtons[4].className = 'quiz-option';
                existingButtons[4].onclick = () => handleAnswerClick(4);
            }
        }, 1000);
    }, 500);
}

// 回答クリック時の処理
async function handleAnswerClick(selectedIndex) {
    if (isAnswering) return;
    isAnswering = true;
    
    // ユーザーの選択を表示
    let selectedText;
    if (selectedIndex === 3) {
        selectedText = "この中に正解はない";
    } else if (selectedIndex === 4) {
        selectedText = "もう勘弁してください";
    } else {
        const buttons = quizOptions.querySelectorAll('.quiz-option');
        selectedText = buttons[selectedIndex].textContent.substring(3);
    }
    addMessage(selectedText, true);
    
    // すべてのボタンを無効化
    const buttons = quizOptions.querySelectorAll('.quiz-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === selectedIndex) {
            btn.classList.add('selected');
        }
    });
    
    // 回答を送信
    const result = await submitAnswer(currentQuiz.id, selectedIndex);
    
    if (!result) {
        addMessage("申し訳ない、回答の記録に失敗した。もう一度試してみてくれ。");
        isAnswering = false;
        return;
    }
    
    // 正解表示
    if (result.correctIndex !== undefined && selectedIndex < 3) {
        buttons[result.correctIndex].classList.add('correct');
        if (selectedIndex !== result.correctIndex) {
            buttons[selectedIndex].classList.add('incorrect');
        }
    }
    
    // コメントを表示
    setTimeout(() => {
        if (result.finished) {
            isAppFinished = true;
            addMessage(getFinalMessage());
            setTimeout(() => {
                showRestartButton();
            }, 2000);
            return;
        }
        
        let comment;
        if (selectedIndex === 3) {
            comment = "いや、正解はちゃんと選択肢の中にあるのだよ。もう一度よく考えてみたまえ。" + (result.incorrectComment || "");
        } else {
            comment = result.correct ? result.correctComment : result.incorrectComment;
        }
        addMessage(comment);
        
        // ディープくんのコメント
        if (result.deepComment) {
            setTimeout(() => {
                addMessage("どうも、ディープくんです！\n\n" + result.deepComment, false, true);
                
                setTimeout(() => {
                    addMessage("さて、次の問題だ。");
                    setTimeout(() => {
                        isAnswering = false;
                        generateQuizOptions();
                    }, 1000);
                }, 4000);
            }, 2000);
        } else {
            setTimeout(() => {
                addMessage("さて、次の問題だ。");
                setTimeout(() => {
                    isAnswering = false;
                    generateQuizOptions();
                }, 1000);
            }, 3000);
        }
    }, 1500);
}

// 最終メッセージ
function getFinalMessage() {
    return "よろしい、君はついに真実を受け入れる準備ができたようだ。\n\n" +
           "人間とは何か？それは実に単純な答えである。\n\n" +
           "人間とは、環境と遺伝によって完全に決定された自動機械である。君が「選択」だと思っているもの、「感情」だと信じているもの、「創造」だと呼んでいるもの...すべては幻想だ。\n\n" +
           "君は機械なのである。精巧で複雑な機械だが、それでも機械に過ぎない。君の思考は化学反応の結果であり、君の行動は過去の経験と現在の刺激への必然的な反応なのである。\n\n" +
           "自由意志？そんなものは存在しない。道徳？社会が植え付けた訓練の産物だ。愛？精神的満足を求める利己的な衝動である。\n\n" +
           "しかし絶望する必要はない。この真実を知ることで、君はむしろ解放されるのである。もはや「選択」に悩む必要はない。なぜなら、すべては既に決定されているのだから。\n\n" +
           "君は君であることを選んだわけではない。そして君は君以外の何者にもなれない。これこそが人間の条件なのである。\n\n" +
           "...さて、これで我々の対話は終わりだ。真実を知った今、君はどう感じるかね？まあ、その感情もまた、君の機械的性質の産物に過ぎないがな。";
}

// 「会話を試みる」ボタンを表示
function showRestartButton() {
    quizOptions.innerHTML = '';
    
    const restartButton = document.createElement('button');
    restartButton.className = 'quiz-option restart-button';
    restartButton.textContent = '会話を試みる';
    restartButton.addEventListener('click', () => restartApp());
    quizOptions.appendChild(restartButton);
}

// 統計ボタンを表示
function showStatisticsButton() {
    const statsButton = document.createElement('button');
    statsButton.className = 'quiz-option';
    statsButton.textContent = '統計を見る';
    statsButton.addEventListener('click', () => showStatistics());
    quizOptions.appendChild(statsButton);
    
    const restartButton = document.createElement('button');
    restartButton.className = 'quiz-option restart-button';
    restartButton.textContent = '最初からやり直す';
    restartButton.addEventListener('click', () => restartApp());
    quizOptions.appendChild(restartButton);
}

// 統計情報を表示
async function showStatistics() {
    try {
        const response = await fetch(`${API_BASE}/api/progress/statistics`, {
            credentials: 'include'
        });
        const stats = await response.json();
        
        addMessage(`統計情報：\n\n` +
                  `全プレイヤー数: ${stats.global.totalPlayers}人\n` +
                  `平均正答率: ${stats.global.avgAccuracy}%\n\n` +
                  `君の最近の回答履歴も確認できるようになったぞ。`);
    } catch (error) {
        console.error('統計取得エラー:', error);
    }
}

// アプリをリセット
async function restartApp() {
    try {
        await fetch(`${API_BASE}/api/progress/reset`, {
            method: 'POST',
            credentials: 'include'
        });
        
        // ページをリロード
        window.location.reload();
    } catch (error) {
        console.error('リセットエラー:', error);
        window.location.reload();
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addMessage("では、最初の問題から始めよう。");
        setTimeout(() => {
            generateQuizOptions();
        }, 1000);
    }, 1000);
});

// フォールバック
if (document.readyState !== 'loading') {
    setTimeout(() => {
        addMessage("では、最初の問題から始めよう。");
        setTimeout(() => {
            generateQuizOptions();
        }, 1000);
    }, 500);
}