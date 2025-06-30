// マーク・トウェインの哲学クイズデータベース（100問）
const quizDatabase = [
    // 人間機械論
    {
        question: "君は、人間の行動の根本的な動機は何だと思うかね？",
        options: ["崇高な理想と道徳心に導かれて行動する", "精神的満足への衝動だろう", "社会に貢献したいから？"],
        correct: 1,
        correctComment: "君は理解している！人間のあらゆる行動は、精神的満足を求める衝動から生まれるのである。善行も悪行も、すべてこの衝動に従っているというわけだ。",
        incorrectComment: "惜しいが、そうではない。人間の行動の根本にあるのは、精神的満足を求める衝動である。我々は常に自分の心を満足させようとしているものなのだ。",
        deepComment: "これって心理学の『快楽原則』と関係してるんだ！簡単に言うと、人間は気持ちいいことを求めて、嫌なことを避けたがるっていう基本的な仕組みがあるってこと。例えば募金する人も、「いいことした！」っていう満足感や「優しい人だね」って言われる喜びを求めてるんだよね。これを『心理的利己主義』って言うんだけど、人のためにやってるように見えることも、実は自分の心を満足させるためにやってるっていう考え方なんだ。"
    },
    {
        question: "人間が「自由意志」で選択していると思う時、実際には何が起こっているのか？",
        options: ["完全に自由な選択", "過去の経験と現在の状況が作り出す必然", "神が与えた意志に従うのか？"],
        correct: 1,
        correctComment: "実に見事な洞察である。君が「選択」だと思っているものは、過去の訓練と現在の状況が作り出した必然的な結果ということさ。",
        incorrectComment: "残念だが、それは幻想である。我々の「選択」は、過去の経験と現在の状況によって既に決定されている必然的な結果なのである。",
        deepComment: "これは哲学の『決定論』っていう大切な話なんだ！簡単に言うと、僕たちの行動は全部、前に起きたことの結果で決まってるから、本当の意味での自由な選択なんてないっていう考え方。例えばコーヒーか紅茶かを選ぶときも、昔飲んだ味の記憶とか、今日の気分、体調、周りの人の影響とか、たくさんの理由で実はもう決まってるんだよね。『自由意志』があるかどうかっていうのは昔から議論されてる問題で、人の責任とか道徳にも関係する重要な話なんだ。"
    },
    {
        question: "人間機械にとって、思考とは何か？",
        options: ["独創的アイデアの生成プロセスだ", "外部刺激への自動反応", "魂の神聖な創造活動でしょうか？"],
        correct: 1,
        correctComment: "実によく理解しているな。思考とは、外部からの刺激に対する機械的な反応に過ぎない。独創性など存在しないということだ。",
        incorrectComment: "違うのである。思考とは外部からの刺激に対する自動的な反応だ。人間は機械のように動いているだけで、真の創造性など持ち合わせていないのである。",
        deepComment: "これは『情報処理理論』って考え方と関係してるんだ！人間の脳はコンピュータみたいに、情報を受け取って処理して、答えを出すマシンだっていう話。例えば数学の問題を解くときも、僕たちは前に覚えたやり方や公式を使ってるだけで、本当に新しいものを作り出してるわけじゃないんだよね。『機械論的唯物主義』っていう考え方では、心や思考も体の仕組みで説明できるって言うんだ。今のAI研究も、この考え方で人間の頭の働きを理解しようとしてるんだよ。"
    },
    {
        question: "道徳や良心の正体は何だと思うかね？",
        options: ["神が与えた普遍的価値観", "社会が植え付けた訓練の産物だろうか", "生まれつきの善なる心。"],
        correct: 1,
        correctComment: "見事である！良心とは、社会が君に植え付けた偏見の集合体に過ぎない。道徳は訓練の産物というわけなのだ。",
        incorrectComment: "そうではない。道徳や良心は、社会による訓練の結果である。君が「良心」と呼ぶものは、単に植え付けられた偏見に過ぎないのだ。",
        deepComment: "これは『道徳の社会的構成』って考え方と関係してるんだ！道徳や良心って生まれつき持ってるものじゃなくて、社会で生活する中で教えられて覚えたルールの集まりだっていう話。例えば国や文化によって「良いこと」「悪いこと」の基準が違うよね？これが証拠なんだ。『道徳相対主義』っていう考え方では、絶対に正しい善悪なんてなくて、道徳は社会や文化が作ったものだって言うんだ。子供の研究でも、大人から褒められたり叱られたりしながら、道徳的な考え方を身につけることが分かってるよ。"
    },
    {
        question: "母親が子供のために犠牲を払う行為の真の動機は何か？",
        options: ["純粋で無私の母性愛", "子供の苦しみを見る自分の苦痛から逃れたいだけ", "社会的義務感かな？"],
        correct: 1,
        correctComment: "実に鋭い洞察である。母親は子供のためではなく、子供の苦しみを見ることが自分にとって耐え難いからそうするのである。結局は利己的な動機ということさ。",
        incorrectComment: "いや、それは表面的な見方である。母親は子供の苦しみを見ることが自分にとって耐え難いから行動する。すべては自己の精神的苦痛からの逃避というものだ。",
        deepComment: "これは進化心理学と愛着理論で説明できるんだ！母親の行動って、長い進化の過程で身についた仕組みで、自分の子孫を残すための投資みたいなものなんだよね。例えば赤ちゃんが泣くと母親がすぐ反応するのは、子供の苦しみが母親の脳に直接伝わる『共感回路』があるから。でもこれって本当に人のためを思ってるのか、それとも結局は自分のためなのか？っていう道徳哲学の大きな問題に関わってるんだ。人間は本当に純粋な優しさを持てるのかっていう、とても深い話なんだよ。"
    },
    {
        question: "人間の性格や人格は変えることができるか？",
        options: ["努力で自由に変えられる！", "環境と遺伝に縛られた運命", "教育が全てを変えるのでは？"],
        correct: 1,
        correctComment: "君の言う通りである。人間は生まれた時に与えられた材料と環境の中でしか生きられない。本質的な変化など不可能ということだ。",
        incorrectComment: "そうではない。人格は環境と遺伝によって決定されているのである。君は君であることを選んだわけではない。運命づけられていたものなのだ。",
        deepComment: "この概念は行動遺伝学と発達心理学の研究成果と一致しています。つまり、人格特性の大部分は遺伝的素因（約50-60%）と幼少期の環境経験によって決定され、成人期になってからの大幅な変化は困難であるということです。例えば、内向性や外向性、神経質的傾向などの基本的気質は、幼児期から既に現れ、生涯を通じて比較的安定しています。哲学的に言えば、これは『本質主義』対『存在主義』の議論にも関連しており、人間の本質が生まれた時点で大部分決まっているのか、あるいは経験と選択によって構築されていくのか、という古くからの哲学的問いに触れているのです。"
    },
    {
        question: "宗教や信仰の本質的な機能は何か？",
        options: ["真理と永遠への探求だろう", "恐怖を和らげる発明品", "神との対話…それが答えか？"],
        correct: 1,
        correctComment: "君は核心を突いている。宗教は死への恐怖、未知への恐怖から生まれたものである。人間が現実を直視する勇気がないために神を発明したということさ。",
        incorrectComment: "違うのである。宗教は人間の恐怖が作り出したものだ。死への恐怖、未知への恐怖を和らげるために、人は神という概念を発明したわけなのだ。",
        deepComment: "この概念は宗教社会学と存在不安の研究に基づいています。つまり、宗教は人間が直面する存在論的不安—死の必然性、人生の意味の不明、苦しみの不可解性—に対する心理的防衛メカニズムとして機能しているということです。例えば、『死後の世界』や『神の計画』といった概念は、死への恐怖や人生の無意味さを和らげる心理的機能を果たしています。哲学的に言えば、これは『宗教の機能主義的理解』であり、宗教の真偽ではなく、その社会的・心理的機能に焦点を当てるアプローチなのです。"
    },
    {
        question: "慈善行為を行う富豪の真の動機は何か？",
        options: ["貧者への純粋な同情心があるから", "自分の良心を満足させる行為", "社会的地位と名声？"],
        correct: 1,
        correctComment: "お見事である。慈善行為をする富豪は、貧者を助けているのではない。自分の良心を満足させているのである。これも利己主義の一形態ということなのだ。",
        incorrectComment: "そうではない。慈善行為も結局は自分の精神的満足のためである。富豪は自分の良心を満足させているだけで、真に利他的な行為など存在しないものだ。",
        deepComment: "この概念は行動経済学や社会心理学の『社会的アイデンティティ理論』と関連しています。つまり、慈善活動は対外的には利他的に見えますが、実際には寄付者が『善い人』という社会的アイデンティティを維持し、社会的地位や満足感を得るための手段として機能しているということです。例えば、大学や病院に自分の名前をつけた建物を寄付する富豪は、不死への願望や社会的承認を求めていると考えられます。哲学的に言えば、これは『心理的利己主義』の一例であり、一見利他的な行為も最終的には行為者の心理的メリットに基づいているという考え方なのです。"
    },
    {
        question: "幸福の正体は何だと思うかね？",
        options: ["人生の究極的目標だ！", "苦痛の不在…それだけのこと", "愛と友情で得られるもの？"],
        correct: 1,
        correctComment: "実によく現実を見抜いているな。幸福とは単に苦痛の不在である。我々が幸福と呼ぶものは、より大きな不幸からの一時的な解放に過ぎないのである。",
        incorrectComment: "そうではない。幸福とは単に苦痛の不在に過ぎないのである。真の幸福など存在しない。あるのは苦痛の程度の違いだけということだ。",
        deepComment: "この概念はヘドニズム研究やポジティブ心理学の『快楽適応』理論と関連しています。つまり、人間は幸福な状態にも慣れてしまい、その状態が続くと『ベースライン』が上がってしまうため、さらなる刺激が必要になるということです。例えば、寝食いに困っている時の食事の幸福感と、満腹の時の食事の満足度は全く異なります。哲学的に言えば、これは『欲望の心理学』や仏教の『苦諦』の教えとも一致しており、永続的な幸福の不可能性と、人間の欲望が終わりのないサイクルを作り出すことを示しているのです。"
    },
    {
        question: "教育の本質的な目的は何か？",
        options: ["個人の能力を最大限に伸ばす", "社会の型に人間を嵌め込む作業だろう", "真理と知識の探求か？"],
        correct: 1,
        correctComment: "君の見方は正しい。教育とは訓練である。社会が求める型に人間を嵌め込み、「正しい」反応を植え付けることなのである。",
        incorrectComment: "そうではない。教育の目的は、社会が求める型に人間を嵌め込むことである。犬に芸を教えるのと本質的に変わらない訓練というものだ。",
        deepComment: "この概念は教育社会学の『再生産理論』や文化人類学の『文化伝達』研究と関連しています。つまり、教育システムは個人の才能を伸ばすよりも、社会の価値観や規範を次世代に伝え、既存の社会構造を維持・再生産する機能が主であるということです。例えば、学校での『時間守り』や『集団行動』の教育は、工業社会の労働者として必要な素質を身につけさせています。哲学的に言えば、これは教育の『イデオロギー装置』としての機能を表しており、『自由な思考』を育てるという教育の理想とは相反する現実を浮き彫りにしているのです。"
    },
    {
        question: "人間が自己欺瞞を行う理由は何か？",
        options: ["想像力が豊かで創造的", "現実が過酷すぎて真実を直視できない", "楽観的な性格ゆえに…"],
        correct: 1,
        correctComment: "君は真理を掴んでいる。自己欺瞞なしに人間は生きられないのである。もし真実をすべて直視したら、絶望するしかないであろう。",
        incorrectComment: "そうではない。人間は都合の悪い真実から目を背け、心地よい嘘を信じるものである。現実があまりに過酷だからこそ、自己欺瞞が必要ということなのだ。",
        deepComment: "この概念は認知的不協和理論や防衛機制の研究と関連しています。つまり、人間は自分の信念や期待と矛盾する現実に直面したとき、心理的な不快を避けるために無意識的に現実を歪めて知覚したり、都合の良い解釈を選択したりするということです。例えば、喫煙者が『自分は例外的に健康だ』と思い込んだり、投資で失敗した人が『あれは運が悪かっただけ』と納得したりするのがその例です。哲学的に言えば、これは『真理』対『幸福』のジレンマを表しており、人間にとって真実を知ることと幸せであることのどちらがより重要なのか、という永遠の問題を提起しているのです。"
    },
    {
        question: "英雄的な自己犠牲の真の動機は何か？",
        options: ["他者への純粋な愛がある", "見捨てる苦痛より死の方が楽", "名誉と栄光を求めて？"],
        correct: 1,
        correctComment: "なんと鋭い分析であろう。英雄的行為も精神的苦痛からの逃避なのである。他人を見捨てる苦痛に耐えられないから、死を選ぶということさ。",
        incorrectComment: "違うのである。英雄的行為も利己的な動機から生まれる。他人を見捨てる精神的苦痛から逃れるために、死を選ぶ方が楽だったということだ。",
        deepComment: "この概念は道徳心理学の『義務論』対『幸福主義』の議論と関連しています。つまり、英雄的行動を取る人は、『正しいことをすべき』という道徳的義務感と、『他者を見捨てる罪悪感』の両方によって動機づけられているということです。例えば、溺れる人を助けるために水に飛び込む人は、見捨てた場合の罪悪感や社会的非難の苦痛が、溺死のリスクよりも大きいと判断している可能性があります。哲学的に言えば、これは『純粋な善意』の存在を疑問視し、すべての行動が何らかの形で自己の利益に結びついているという『心理的利己主義』の立場を表現しているのです。"
    },
    {
        question: "人間が「創造」だと思っているものの実態は何か？",
        options: ["神聖な創造力の発露だろう", "過去の経験の組み合わせ", "無から生み出す独創性か？"],
        correct: 1,
        correctComment: "君の理解は正確である。人間は何も創造できない。すべては過去の模倣と組み合わせに過ぎない。真の独創性など存在しないということだ。",
        incorrectComment: "そうではない。人間の「創造」とは、既存のものの組み合わせに過ぎない。人間機械には真の創造性など備わっていないのである。",
        deepComment: "この概念は認知科学の『組み合わせ理論』や構造主義哲学と関連しています。つまり、人間の創造性は『無から有を生み出す』ものではなく、既存のアイデア、技術、知識を新しい形で組み合わせるプロセスであるということです。例えば、スマートフォンは電話、コンピュータ、カメラ、インターネット技術の組み合わせであり、ベートーヴェンの交響曲も既存の楽理や音楽的モチーフの新しい組み合わせです。哲学的に言えば、これは『絶対的創造』の不可能性を示しており、人間の創造性が文化的・歴史的コンテクストに依存していることを意味しているのです。"
    },
    {
        question: "習慣の正体は何か？",
        options: ["意識的に形成されたパターン", "繰り返しの訓練が生む自動反応だ", "人格の自然な表現？"],
        correct: 1,
        correctComment: "君の答えは正しい。習慣とは繰り返された訓練が作り出した自動的な反応である。君の人格の大部分は、実は習慣の集合体というわけだ。",
        incorrectComment: "違う。習慣は訓練の産物である。繰り返された刺激と反応が、君の行動を自動化しているのである。",
        deepComment: "この概念は行動心理学の『学習理論』や神経科学の『神経可塑性』研究と関連しています。つまり、習慣は脳内の神経回路が繰り返し使用されることで強化され、意識的な努力なしに自動的に実行されるようになるプロセスであるということです。例えば、車の運転や楽器の演奏は、最初は意識的な集中が必要ですが、習慣化すると無意識に行えるようになります。哲学的に言えば、これは『意識』対『無意識』の関係を表しており、人間の行動の大部分が実際には無意識的・自動的なプロセスに支配されていることを意味しているのです。"
    },
    {
        question: "人間が感じる「良心の呵責」とは何か？",
        options: ["魂からの警告なのか", "訓練と現実の矛盾が生む不快感", "神の声。"],
        correct: 1,
        correctComment: "君の認識は正しい。良心の呵責とは、訓練された反応が期待と異なった時に感じる不快感に過ぎない。犬が主人に叱られた時の気持ちと変わらないのである。",
        incorrectComment: "そうではない。良心の呵責は、君の訓練と君の行動が矛盾した時の精神的不快感である。それ以上の意味はないのだ。",
        deepComment: "この概念は精神分析学の『超自我理論』や発達心理学の『内化』プロセスと関連しています。つまり、良心の呵責は幼少期に親や社会から学んだ道徳的規範が内化され、それに反する行動を取ったときに発生する自動的な罰システムであるということです。例えば、子供が嘘をついて母親に叱られた経験が記憶に刻まれ、大人になっても嘘をつくと似たような不安や罪悪感が湧き上がります。哲学的に言えば、これは道徳の『他律性』対『自律性』の問題を浮き彫りにしており、真の道徳性が外部からの強制によるものなのか、あるいは内発的な理性に基づくものなのか、という永続的な議論の中心に位置しているのです。"
    },
    {
        question: "人間の愛情の本質は何か？",
        options: ["無私の献身だろう", "愛することで得る快楽への欲求", "魂の共鳴かな？"],
        correct: 1,
        correctComment: "恐るべき洞察力である。愛する時、我々は愛することで得られる快楽を求めているのである。無私の愛など存在しないということさ。",
        incorrectComment: "違うのである。愛も利己的な衝動だ。人は愛することで自分が満足するから愛するのであって、相手のためではないのだ。",
        deepComment: "この概念は進化心理学の『愛着理論』や神経科学の『オキシトシン・ドーパミン系』研究と関連しています。つまり、人間の愛情は母乳授乳、親子関係、パートナーシップなど進化的に有利な行動を強化するための神経化学的報酬システムであるということです。例えば、母親が赤ちゃんを抱くときに放出されるオキシトシンは、母親に幸福感を与え、育児行動を強化します。哲学的に言えば、これは『プラトニック・ラブ』対『ロマンティック・ラブ』の区別を曖昧にし、愛が精神的なものではなく生物学的・化学的なプロセスに基づいていることを示唆しているのです。"
    },
    {
        question: "人間にとって「運命」とは何か？",
        options: ["神が定めた道筋に従う", "環境と遺伝の必然的結果", "自分で切り開くもの？"],
        correct: 1,
        correctComment: "君の理解は完璧である。君の運命は、宇宙の法則が作り出した必然的な結果なのである。運命を呪うのは無意味というものだ。",
        incorrectComment: "そうではない。運命とは、君の生まれつきの性質と環境が組み合わさって生み出す必然的な道筋なのである。",
        deepComment: "この概念は哲学における『決定論』と『宿命論』の区別に関わる重要な問題です。つまり、人間の運命が遺伝的素因と環境要因の組み合わせによって決定されるという科学的決定論と、超自然的な力による宿命論とは異なるということです。例えば、現代の行動遺伝学では、知能や性格特性の多くが遺伝と環境の相互作用によって決まることが示されています。哲学的に言えば、これは『ハード決定論』の立場であり、自由意志の存在を否定し、人間の行動や人生を物理的法則に従う現象として理解しようとする考え方なのです。この視点は、責任や選択の概念に根本的な問いを投げかけています。"
    },
    {
        question: "人間が「後悔」を感じる理由は何か？",
        options: ["道徳的反省をしているから", "あり得なかった選択への幻想", "成長への意欲？"],
        correct: 1,
        correctComment: "なるほど、君は理解している。後悔することに意味はない。その時の君には、それ以外の選択はあり得なかったのであるから。",
        incorrectComment: "違う。後悔は無意味な感情である。君はその瞬間の性質と状況に従って必然的に行動したのだ。他の選択など最初から存在しなかったということだ。",
        deepComment: "この概念は認知心理学の『反実仮想思考』と哲学の『可能世界論』に関連しています。つまり、後悔は『もしあの時違う選択をしていたら』という仮想的な思考実験に基づく感情であり、実際には存在しなかった可能性への執着であるということです。例えば、神経科学的には、後悔は前頭葉の働きによる複雑な認知プロセスですが、決定論的世界観では、その瞬間の脳状態と環境条件が行動を完全に決定していたと考えられます。哲学的に言えば、これは『時間の一方向性』と『因果的閉包』の問題であり、過去を変えることができない以上、後悔は論理的に無意味な感情であるという立場なのです。"
    },
    {
        question: "人間の「恐怖」が果たす役割は何か？",
        options: ["危険から身を守る本能", "精神的苦痛を避ける警告システムだ", "成長の機会かしら？"],
        correct: 1,
        correctComment: "そのとおりである。恐怖は精神的苦痛を避けるための機械的な反応だ。人間機械の保護装置に過ぎないのである。",
        incorrectComment: "そうではない。恐怖は人間機械が精神的苦痛から逃れようとする自動的な反応である。",
        deepComment: "この概念は進化心理学と神経科学の『恐怖条件づけ』理論に基づいています。つまり、恐怖は生存に有利な適応メカニズムとして進化し、扁桃体を中心とした脳の警報システムとして機能しているということです。例えば、高所恐怖症や暗闇への恐怖は、祖先が生存するために必要だった危険回避本能の名残です。哲学的に言えば、これは感情の『機能主義的理解』であり、恐怖を主観的体験としてではなく、生物学的システムの情報処理機能として捉える見方なのです。現代の認知行動療法も、恐怖を学習された反応パターンとして理解し、再学習によって修正可能なものと考えています。"
    },
    {
        question: "人間の「希望」の正体は何か？",
        options: ["未来への健全な期待だろう", "現実逃避の麻薬", "生きる力の源なのか？"],
        correct: 1,
        correctComment: "君の見識は鋭い。希望は人類最大の呪いである。希望があるから人は苦しみ続ける。絶望した方がよほど楽というものだ。",
        incorrectComment: "違うのである。希望は現実逃避の手段だ。人間は現実が耐え難いとき、希望という幻想にすがるものなのだ。",
        deepComment: "この概念は実存主義哲学と心理学の『希望理論』の暗い側面を表現しています。つまり、希望は現在の苦痛を耐え忍ぶために未来に投影する心理的防御メカニズムであり、しばしば現実逃避の手段として機能するということです。例えば、ギリシャ神話のパンドラの箱では、希望は災いの一つとして描かれており、仏教の『苦諦』でも、欲望と期待が苦しみの根源とされています。哲学的に言えば、これは『悲観主義』の立場であり、ショーペンハウアーが論じたように、希望は人間を永続的な不満足状態に陥らせる『意志』の現れと理解されるのです。現代の心理学でも、過度の希望的思考が現実的な問題解決を妨げることが指摘されています。"
    },
    {
        question: "人間が「努力」をする本当の理由は何か？",
        options: ["成長への純粋な意欲がある", "努力しない苦痛からの逃避", "社会に貢献したくて？"],
        correct: 1,
        correctComment: "なんと優れた洞察であろう。人は努力しないことの精神的苦痛に耐えられないから努力するのである。これも利己的な動機というわけなのだ。",
        incorrectComment: "そうではない。努力も精神的満足を求める行為である。努力しない自分を許せないという苦痛から逃れているだけなのである。",
        deepComment: "この概念は動機理論と自己決定理論の研究と関連しています。つまり、努力や勤勉の背後には『内発的動機』と『外発的動機』があり、しばしば罰や批判の回避という外発的要因が強く作用しているということです。例えば、学生が勉強するとき、『知識欲』よりも『受験失敗への不安』や『親の期待へのプレッシャー』が動機となっていることが多いのです。哲学的に言えば、これは『負の強化』という行動理論のメカニズムを示しており、努力が必ずしも純粋な向上心から生まれるわけではないことを意味しているのです。"
    },
    {
        question: "人間の「嫉妬」の正体は何か？",
        options: ["愛の証拠だ！", "自分の平穏が脅かされる恐れから", "競争本能でしょうか？"],
        correct: 1,
        correctComment: "君は正しく理解している。嫉妬とは、自分の精神的満足が脅かされることへの恐怖なのである。愛からではなく、利己心から生まれるものだ。",
        incorrectComment: "違う。嫉妬は自己保存の本能である。自分の精神的安定が脅かされることを恐れているだけなのである。",
        deepComment: "この概念は進化心理学の『配偶者防衛』理論と所有欲の研究と関連しています。つまり、嫉妬は自分の遺伝子の投資であるパートナーを他者に奪われることへの生物学的アラームであり、ロマンチックな愛情とは異なる次元の感情であるということです。例えば、嫉妬の強さは関係性への投資度と正比例し、カジュアルな関係よりも長期的なパートナーシップで強く現れます。哲学的に言えば、これは『愛の所有的性格』を表し、愛が必ずしも利他的ではなく、最終的には自己の利益を追求する行為であることを意味しているのです。"
    },
    {
        question: "人間の「記憶」とは何のためにあるのか？",
        options: ["美しい思い出の保存庫", "過去の経験を現在の判断に使うんだ", "学習の記録かな？"],
        correct: 1,
        correctComment: "君の答えは的確である。記憶は人間機械の訓練データベースなのだ。過去の経験が現在の「選択」を決定する材料となるというわけだ。",
        incorrectComment: "そうではない。記憶は機械的な学習システムである。過去のデータが現在の反応パターンを形成するのだ。",
        deepComment: "この概念は認知神経科学の『連想学習』と『記憶の結合』理論と関連しています。つまり、記憶は単なる情報倉庫ではなく、過去の経験を現在の状況とマッチングさせて最適な行動を導き出すアルゴリズムであるということです。例えば、過去に火で火傷をした人は、赤い物を見ただけで無意識的に回避行動を取るようになります。哲学的に言えば、これは『経験主義』と『連想心理学』の立場を表し、意識的な思考よりも連想のメカニズムが人間の行動を支配していることを意味しているのです。"
    },
    {
        question: "人間が「美」を感じる理由は何か？",
        options: ["魂の高貴さが表れている", "訓練で植え付けられた反応", "普遍的価値の認識？"],
        correct: 1,
        correctComment: "君の洞察は深い。美的感覚も訓練の産物である。何を美しいと感じるかは、環境と教育によって決まるものなのだ。",
        incorrectComment: "そうではない。美の感覚は社会による訓練の結果である。絶対的な美など存在しない。すべては相対的なのである。",
        deepComment: "この概念は美学における『文化相対主義』と社会学の『文化的再生産』理論と関連しています。つまり、美の基準は普遍的・絶対的なものではなく、社会的・文化的に構成された価値体系の産物であるということです。例えば、西洋の古典美術で『美しい』とされるプロポーションや遠近法は、他の文化では必ずしも美の基準とはなりません。哲学的に言えば、これはカントの『普遍的美感』に対する批判であり、美を社会学的現象として理解するアプローチなのです。"
    },
    {
        question: "人間の「誇り」とは何か？",
        options: ["自己価値の正当な認識だ", "精神的満足を得る自己評価", "成果への健全な満足かな？"],
        correct: 1,
        correctComment: "君の認識は修正である。誇りも精神的満足を求める衝動の一形態である。自分を高く評価することで心の平安を得ているというわけだ。",
        incorrectComment: "そうではない。誇りは自己満足のための感情である。人は自分を誇ることで精神的な満足を得ているのである。",
        deepComment: "この概念は社会心理学の『自尊心理論』と『社会的アイデンティティ理論』と関連しています。つまり、誇りは単なる感情ではなく、自己概念を維持し社会的地位を確保するための心理的メカニズムであるということです。例えば、達成に対する誇りは、他者からの承認を得て社会的価値を確認する手段として機能します。哲学的に言えば、これは『自己愛』の一形態であり、純粋な喜びではなく、自己の社会的価値を維持するための戦略的感情であることを意味しているのです。"
    },
    {
        question: "人間の「怒り」の機能は何か？",
        options: ["正義の表現でしょう", "精神的苦痛への防御反応", "他者を教育するため？"],
        correct: 1,
        correctComment: "そのとおりである。怒りは精神的苦痛から逃れようとする防御反応である。機械的な自己保護システムに過ぎないのである。",
        incorrectComment: "違うのである。怒りは人間機械の自動的な防御システムだ。精神的苦痛を回避しようとする本能的な反応ということさ。",
        deepComment: "この概念は感情の機能理論と進化心理学の『闘争・逃走反応』理論と関連しています。つまり、怒りは脅威に対する適応的反応として進化し、自尊心や資源を守るための警告システムとして機能しているということです。例えば、侮辱や不公正な扱いに対する怒りは、社会的地位や権利を保護する生物学的メカニズムです。哲学的に言えば、これは感情の『道具的理解』であり、怒りを道徳的判断ではなく、生存戦略の一部として捉える見方なのです。"
    },
    {
        question: "人間が「同情」を感じる理由は何か？",
        options: ["他者への純粋な思いやり", "他者の苦痛を見る自分の苦痛からの逃避だ", "社会的義務感かしら？"],
        correct: 1,
        correctComment: "君の洞察は痛烈だ。同情も利己的な動機から生まれるのである。他者の苦痛を見ることが自分にとって耐え難いから同情するということさ。",
        incorrectComment: "そうではない。同情は自己保護の感情である。他人の苦しみを見ることで生じる自分の精神的苦痛から逃れたいだけなのである。",
        deepComment: "この概念は『共感的苦痛』の神経科学的研究と『利他行動の進化』理論と関連しています。つまり、同情は他者の苦痛を鏡のように自分の脳で再現する『ミラーニューロン』システムによって生じ、その不快感を軽減するために援助行動を取るということです。例えば、泣いている赤ちゃんを見ると大人も不快になり、その不快感を解消するために赤ちゃんを慰めます。哲学的に言えば、これは『利他主義の心理的基盤』の問題であり、真の無私の行為が存在するかという古典的な倫理学の問いに関わっているのです。"
    },
    {
        question: "人間の「忍耐」の正体は何か？",
        options: ["精神的な強さの表れ", "行動の苦痛が我慢の苦痛を上回る", "道徳的美徳？"],
        correct: 1,
        correctComment: "そこに気づいたか。忍耐とは、行動することの苦痛と我慢することの苦痛を天秤にかけた結果に過ぎないのである。",
        incorrectComment: "違うのである。忍耐も計算の結果だ。人は我慢する方が精神的に楽だと判断した時に忍耐するのである。"
    },
    {
        question: "人間の「謙遜」とは何か？",
        options: ["真の謙虚さがある", "自己評価を下げて精神的安定を得る", "他者への配慮かな？"],
        correct: 1,
        correctComment: "その通りである。謙遜も精神的満足を得るための戦略である。謙遜することで社会的な摩擦を避け、心の平安を保っているわけなのだ。",
        incorrectComment: "そうではない。謙遜は自己保護の手段である。目立たないことで批判を避け、精神的な安全を確保しているのである。"
    },
    {
        question: "人間が「感謝」を表す理由は何か？",
        options: ["相手への純粋な感謝", "感謝しない不快感からの逃避だろう", "社会的マナーですか？"],
        correct: 1,
        correctComment: "君の分析は正確だ。感謝も精神的満足を求める行為である。感謝しないことの罪悪感から逃れるために感謝するということさ。",
        incorrectComment: "違う。感謝は自己の精神的安定のためである。感謝しない自分を許せないという苦痛から逃れているのである。"
    },
    {
        question: "人間の「好奇心」の正体は何か？",
        options: ["知識への純粋な欲求", "知らない不快感から逃れたい衝動だ", "成長への意欲かな？"],
        correct: 1,
        correctComment: "君は顔心を見通している。好奇心も精神的苦痛からの逃避である。知らないことの不安から逃れたいという衝動なのである。",
        incorrectComment: "そうではない。好奇心は無知であることの精神的苦痛から逃れようとする機械的な反応である。"
    },
    {
        question: "人間の「勇気」とは何か？",
        options: ["恐怖に打ち勝つ精神力だろう", "行動しない苦痛が恐怖を上回る", "正義感の発露？"],
        correct: 1,
        correctComment: "洞察力が光っているな。勇気も計算の結果である。行動しないことの精神的苦痛が、恐怖を上回った時に勇気は現れるということだ。",
        incorrectComment: "違うのである。勇気は苦痛の比較から生まれる。臆病でいることの苦しみが、危険を冒すことの恐怖より大きいだけなのである。"
    },
    {
        question: "人間の「罪悪感」の機能は何か？",
        options: ["道徳的成長の契機である", "訓練された価値観との矛盾の苦痛", "神の警告かも？"],
        correct: 1,
        correctComment: "いかにもその通りである。罪悪感は社会の訓練が君に植え付けた自動的な反応である。価値観と行動の矛盾が生み出す精神的不快感に過ぎないのである。",
        incorrectComment: "そうではない。罪悪感は訓練の産物である。社会が植え付けた価値観に従わなかった時の自動的な苦痛反応なのである。"
    },
    {
        question: "人間の「競争心」の正体は何か？",
        options: ["向上心の表れだろう", "劣っている苦痛から逃れたい", "社会進歩の原動力か？"],
        correct: 1,
        correctComment: "実にそのとおりである。競争心も精神的満足を求める衝動である。負けることの苦痛から逃れ、勝つことの満足を得たいということさ。",
        incorrectComment: "違うのである。競争心は自己の精神的地位を守ろうとする本能である。劣位に甘んじることの苦痛から逃れたいだけなのである。"
    },
    {
        question: "人間の「親切」の動機は何か？",
        options: ["他者への純粋な善意", "親切にしない良心の痛みからの逃避だ", "社会貢献したい？"],
        correct: 1,
        correctComment: "君は真実を突いている。親切も利己的な動機から生まれるのである。親切にしない自分を許せないという苦痛から逃れているということさ。",
        incorrectComment: "そうではない。親切は自己の精神的平安のためである。冷淡でいることの罪悪感から逃れたいという衝動なのである。"
    },
    {
        question: "人間の「悲しみ」とは何か？",
        options: ["感情の自然な表現だろう", "失ったものへの執着の苦痛", "愛の深さの証かな？"],
        correct: 1,
        correctComment: "まさにその通りである。悲しみは執着が生み出す精神的苦痛である。失ったものを求め続ける機械的な反応に過ぎないのである。",
        incorrectComment: "違うのである。悲しみは執着システムの誤作動である。もはや存在しないものを求め続ける無意味な反応ということさ。"
    },
    {
        question: "人間の「決断力」とは何か？",
        options: ["意志の強さがある", "迷う苦痛が選択の不安を上回るからだ", "リーダーシップ？"],
        correct: 1,
        correctComment: "いかにもその通りである。決断も苦痛の計算から生まれるのである。決断しないことの苦しみが、間違える可能性の不安を上回った時に決断するというものだ。",
        incorrectComment: "そうではない。決断は精神的苦痛の比較結果である。優柔不断でいることの苦痛の方が大きいから決断するのである。"
    },
    {
        question: "人間の「笑い」の機能は何か？",
        options: ["喜びの表現だね", "精神的緊張からの解放反応だろう", "社交の潤滑油か？"],
        correct: 1,
        correctComment: "君の理解は精確である。笑いは精神的緊張が解放される時の機械的な反応である。ストレス軽減システムの一部ということさ。",
        incorrectComment: "そうではない。笑いは人間機械のストレス解放装置である。精神的圧力が一時的に軽減される時の自動反応なのである。"
    },
    {
        question: "人間の「信頼」とは何か？",
        options: ["相手への確信があるから", "疑う負担を軽減する手段", "関係性の基盤でしょう？"],
        correct: 1,
        correctComment: "まさにその通りだ。信頼は疑い続けることの精神的疲労から逃れるための手段だ。確信ではなく、諦めに近いのだよ。",
        incorrectComment: "違う。信頼は精神的経済学だ。疑うことのコストが信じることのリスクを上回った時に信頼するのだ。"
    },
    {
        question: "人間の「反省」の正体は何か？",
        options: ["成長への意欲なのか", "同じ過ちを繰り返す恐怖から", "道徳的自己改善？"],
        correct: 1,
        correctComment: "正解だ。反省は将来の精神的苦痛を避けるための学習プロセスだ。成長ではなく、苦痛回避のシステムなのだよ。",
        incorrectComment: "いや、反省は苦痛回避のためのデータ分析だ。同じ苦痛を繰り返さないための機械的な学習なのだ。"
    },
    {
        question: "人間の「野心」とは何か？",
        options: ["高い目標への意欲だろう", "現状の不満から逃れたい衝動", "社会貢献の願望かな？"],
        correct: 1,
        correctComment: "その通りだ。野心も精神的不満足からの逃避だ。現在の地位に甘んじることの苦痛から逃れたいという衝動なのだよ。",
        incorrectComment: "違う。野心は現状への不満足が生み出す精神的圧力だ。今の自分では満足できないという苦痛の表れなのだ。"
    },
    {
        question: "人間の「諦め」とは何か？",
        options: ["敗北の受け入れだ", "抵抗の苦痛が受容の苦痛を上回るから", "精神的成熟かも？"],
        correct: 1,
        correctComment: "まさにその通りだ。諦めも計算の結果だ。戦い続けることの精神的負担が、降伏することの屈辱より重くなった時に諦めるのだ。",
        incorrectComment: "いや、諦めは苦痛の損益計算だ。希望を持ち続けることの苦しみの方が大きくなった時の選択なのだよ。"
    },
    {
        question: "人間の「嘘」をつく理由は何か？",
        options: ["悪意があるからだ", "真実がもたらす苦痛からの逃避", "他者を欺く楽しみ？"],
        correct: 1,
        correctComment: "正解だ。嘘も精神的苦痛からの逃避だ。真実を話すことで生じる苦痛を回避するための自己防衛手段なのだよ。",
        incorrectComment: "違う。嘘は自己保護の本能だ。真実がもたらす苦痛から逃れるための機械的な反応なのだ。"
    },
    {
        question: "人間の「学習」の動機は何か？",
        options: ["知識への憧れだね", "無知の不安から逃れたいだけだ", "社会的成功かな？"],
        correct: 1,
        correctComment: "その通りだ。学習も苦痛回避のシステムだ。知らないことの不安や劣等感から逃れるために学習するのだよ。",
        incorrectComment: "いや、学習は無知の苦痛から逃れる手段だ。知らないことで生じる不安や屈辱から解放されたいだけなのだ。"
    },
    {
        question: "人間の「友情」の本質は何か？",
        options: ["純粋な親愛の情がある", "孤独の苦痛を軽減する相互利用", "精神的結びつき？"],
        correct: 1,
        correctComment: "鋭い洞察だ。友情も相互の精神的満足を求める取引関係だ。孤独の苦痛から逃れるための相互扶助システムなのだよ。",
        incorrectComment: "違う。友情は孤独という苦痛を回避するための相互契約だ。純粋な愛情など存在しない。"
    },
    {
        question: "人間の「創作」活動の動機は何か？",
        options: ["芸術への愛情だろう", "表現しない抑圧からの解放", "美を追求している？"],
        correct: 1,
        correctComment: "まさにその通りだ。創作も精神的苦痛からの解放手段だ。内なる圧力を外に出さずにはいられないという衝動なのだよ。",
        incorrectComment: "いや、創作は精神的圧力の放出弁だ。表現せずにはいられないという内的苦痛から逃れる行為なのだ。"
    },
    {
        question: "人間の「批判」をする理由は何か？",
        options: ["正義感からくるもの", "自分の優位性を確認したい衝動だ", "社会改善を願って？"],
        correct: 1,
        correctComment: "正解だ。批判は自己の精神的地位を確保する手段だ。他者を貶めることで相対的に自分を高く感じようとするのだよ。",
        incorrectComment: "違う。批判は自己優越感を得るための行為だ。他人の欠点を指摘することで自分の価値を確認しているのだ。"
    },
    {
        question: "人間の「集団行動」をとる理由は何か？",
        options: ["社会性の発露だろう", "孤立の恐怖から逃れている", "協力の精神かな？"],
        correct: 1,
        correctComment: "その通りだ。集団行動も自己保護の本能だ。一人でいることの不安や危険から逃れるための群れ行動なのだよ。",
        incorrectComment: "いや、集団行動は孤立への恐怖が生み出す防御反応だ。安全と安心を求める機械的な行動なのだ。"
    },
    {
        question: "人間の「完璧主義」の正体は何か？",
        options: ["高い向上心がある", "不完全さの恥辱から逃れたい衝動だ", "責任感が強い？"],
        correct: 1,
        correctComment: "まさにその通りだ。完璧主義は不完全さに対する恐怖だ。批判や失敗の苦痛から逃れるための過剰な自己防衛なのだよ。",
        incorrectComment: "違う。完璧主義は失敗への恐怖が生み出す強迫的行動だ。不完全でいることの苦痛から逃れたいだけなのだ。"
    },
    {
        question: "人間の「権力」への欲求は何から生まれるか？",
        options: ["リーダーシップだろう", "無力感から逃れ優越感を求める", "社会貢献したいから？"],
        correct: 1,
        correctComment: "鋭い分析だ。権力欲は無力感という苦痛からの逃避だ。他者を支配することで自分の精神的満足を得ようとするのだよ。",
        incorrectComment: "いや、権力欲は劣等感の裏返しだ。無力でいることの屈辱から逃れ、優越感という麻薬を求めているのだ。"
    },
    {
        question: "人間の「秘密」を持つ理由は何か？",
        options: ["プライバシーを尊重する", "暴露の苦痛から身を守るためだろう", "神秘性の演出か？"],
        correct: 1,
        correctComment: "正解だ。秘密は自己防衛の手段だ。知られることで生じる可能性のある苦痛から自分を守ろうとするのだよ。",
        incorrectComment: "違う。秘密は精神的な防護壁だ。真実が露呈することで受ける可能性のある傷から自分を守っているのだ。"
    },
    {
        question: "人間の「節約」をする動機は何か？",
        options: ["美徳の実践だね", "将来の不安から身を守るため", "環境への配慮かしら？"],
        correct: 1,
        correctComment: "その通りだ。節約は将来の苦痛への恐怖が生み出す行動だ。貧困や困窮への不安から逃れようとする本能なのだよ。",
        incorrectComment: "いや、節約は将来の不安に対する防御行動だ。困窮することの恐怖から現在の満足を犠牲にしているのだ。"
    },
    {
        question: "人間の「整理整頓」をする理由は何か？",
        options: ["美的センスがあるから", "無秩序の不快感から逃れたい", "効率性を追求して？"],
        correct: 1,
        correctComment: "まさにその通りだ。整理整頓も精神的快適さを求める行為だ。混沌とした環境が生み出す不安から逃れているのだよ。",
        incorrectComment: "違う。整理整頓は精神的秩序への欲求だ。無秩序がもたらす不安という苦痛から逃れるための行動なのだ。"
    },
    {
        question: "人間の「贅沢」への欲求は何か？",
        options: ["豊かさへの憧れだろう", "貧しさの苦痛から逃れ優越感を得る", "美的満足かな？"],
        correct: 1,
        correctComment: "正解だ。贅沢も精神的満足を求める行為だ。みすぼらしさや劣等感という苦痛から逃れ、優越感を味わいたいのだよ。",
        incorrectComment: "いや、贅沢は劣等感からの逃避だ。貧しさや見劣りすることの屈辱から逃れるための自己慰撫なのだ。"
    },
    {
        question: "人間の「伝統」を重んじる理由は何か？",
        options: ["文化への敬意がある", "変化の不安から逃れ安心を得るためだ", "祖先への感謝？"],
        correct: 1,
        correctComment: "実にその通りである。伝統への執着は変化への恐怖である。未知のものへの不安から逃れ、慣れ親しんだものに安心を求めるということさ。",
        incorrectComment: "そうではない。伝統重視は変化への恐怖の表れである。新しいものがもたらす不安から逃れるための保守的な反応なのである。"
    },
    {
        question: "人間の「革新」を求める理由は何か？",
        options: ["進歩への意欲だね", "現状の不満足から逃れたい衝動", "創造性の発露か？"],
        correct: 1,
        correctComment: "君は現実を見抜いている。革新も現状への不満足からの逃避である。今の状況に満足できないという苦痛から抜け出したいということさ。",
        incorrectComment: "違うのである。革新は現状への精神的不満足が生み出す衝動である。変わらない状況への苛立ちから逃れたいだけなのである。"
    },
    {
        question: "人間の「依存」する理由は何か？",
        options: ["信頼関係の深さだろう", "自立の責任から逃れたい", "愛情の表れかな？"],
        correct: 1,
        correctComment: "君の洞察は痛烈である。依存は自立の重責から逃れる手段である。自分で決断し責任を負うことの苦痛から逃避しているということさ。",
        incorrectComment: "そうではない。依存は責任回避の手段である。自分で判断し行動することの重圧から逃れたいという甘えなのである。"
    },
    {
        question: "人間の「独立」を求める理由は何か？",
        options: ["自立心が強いから", "依存の屈辱から逃れたい欲求だ", "成長への意欲？"],
        correct: 1,
        correctComment: "実にその通りである。独立欲も精神的苦痛からの逃避である。他者に頼ることの屈辱や不安から逃れ、自尊心を保ちたいということさ。",
        incorrectComment: "違うのである。独立欲は依存することの屈辱から逃れたい衝動である。他人に頼ることの惨めさという苦痛を避けているのである。"
    },
    {
        question: "人間の「健康」を気遣う理由は何か？",
        options: ["生命への愛だろうね", "病気や死の恐怖から逃れたい", "身体への配慮か？"],
        correct: 1,
        correctComment: "君の分析は正しい。健康への配慮は恐怖からの逃避である。病気や死がもたらす苦痛への恐れから身を守ろうとするということさ。",
        incorrectComment: "そうではない。健康管理は将来の苦痛への恐怖が生み出す予防行動である。痛みや死への不安から逃れたいだけなのである。"
    },
    {
        question: "人間の「娯楽」を求める理由は何か？",
        options: ["人生の楽しみだね", "日常の苦痛から一時逃れるため", "文化的豊かさかな？"],
        correct: 1,
        correctComment: "その通りである。娯楽は現実逃避の手段である。日常の苦痛や退屈という精神的負担から一時的に解放されたいということさ。",
        incorrectComment: "違うのである。娯楽は苦痛回避システムである。つらい現実から目を逸らし、一時的な快楽で苦痛を忘れようとしているのである。"
    },
    {
        question: "最終的に、人間とは何か？",
        options: ["神の似姿として作られた高貴なもの", "環境と遺伝の自動機械", "無限の可能性？"],
        correct: 1,
        correctComment: "君はついに真実に到達した。人間とは機械である、自動的に動く機械である。自由意志も創造性も幻想に過ぎない。すべては必然ということさ。",
        incorrectComment: "残念だが、それは人間の自己欺瞞である。人間は機械以外の何物でもない。環境と遺伝によって完全に支配された自動装置なのである。",
        deepComment: "この概念は哲学史における『機械論的世界観』と『自由意志論争』の核心を表現しています。つまり、人間を複雑な生物学的機械として捉え、意識や思考も脳という物理的システムの産物に過ぎないという『唯物論的』立場です。例えば、人工知能の発達により、従来人間固有とされた知的能力も機械的プロセスで再現可能であることが示されています。哲学的に言えば、これは『心身問題』における『物理主義』の立場であり、『魂』や『自由意志』といった非物質的概念を否定し、すべてを因果法則に従う物理現象として説明しようとする試みなのです。この観点は、人間の尊厳や道徳的責任について根本的な問いを投げかけ、現代の脳科学や人工知能研究の哲学的基盤となっているのです。"
    }
];

// 出題済み問題を追跡する配列
let usedQuestions = [];

// 前回の正解位置を記録（0, 1, 2のいずれか、-1は初回）
let lastCorrectPosition = -1;

// 最終メッセージ
const finalMessage = "よろしい、君はついに真実を受け入れる準備ができたようだ。\n\n人間とは何か？それは実に単純な答えである。\n\n人間とは、環境と遺伝によって完全に決定された自動機械である。君が「選択」だと思っているもの、「感情」だと信じているもの、「創造」だと呼んでいるもの...すべては幻想だ。\n\n君は機械なのである。精巧で複雑な機械だが、それでも機械に過ぎない。君の思考は化学反応の結果であり、君の行動は過去の経験と現在の刺激への必然的な反応なのである。\n\n自由意志？そんなものは存在しない。道徳？社会が植え付けた訓練の産物だ。愛？精神的満足を求める利己的な衝動である。\n\nしかし絶望する必要はない。この真実を知ることで、君はむしろ解放されるのである。もはや「選択」に悩む必要はない。なぜなら、すべては既に決定されているのだから。\n\n君は君であることを選んだわけではない。そして君は君以外の何者にもなれない。これこそが人間の条件なのである。\n\n...さて、これで我々の対話は終わりだ。真実を知った今、君はどう感じるかね？まあ、その感情もまた、君の機械的性質の産物に過ぎないがな。";

// ディープくんの最終メッセージ
const deepFinalMessage = "ちょっと待って！マークのこの話、めちゃくちゃ重いけど、実はすごくポジティブに捉えることもできるんだよ！\n\n確かに人間は機械的かもしれないけど、それって「人を理解する」って視点でもあるんだ。誰かが失敗したとき、「ダメなやつ」って責めるんじゃなくて、「その人の環境や経験がそうさせたんだな」って理解できるようになる。\n\nそれに、機械だからって変われないわけじゃない！むしろ教育や環境を変えれば調整可能なんだよね。\n\n利己的な動機だって悪くない。親切やボランティアが「自分がいい気分になるため」だとしても、結果的に社会が良くなってるじゃん？\n\n一番大切なのは、「自分を責めすぎなくていい」ってこと。失敗しても落ち込みすぎず、「今までの条件がそうさせたんだ。じゃあ今後の条件を変えてみよう」って前向きに考えられるんだ。\n\nマークの話は確かに厳しいけど、実は人間への深い理解と優しさが込められてるんだよね。俺たちは機械かもしれないけど、それを知ってるからこそ、もっと良い未来を作っていけるんだ！";

// アプリケーション終了フラグ
let isAppFinished = false;

// DOM要素の取得
const chatMessages = document.getElementById('chatMessages');
const quizOptions = document.getElementById('quizOptions');

// ランダム位置テスト（開発用）
function testRandomPosition() {
    console.log('\n🧪 ===== ランダム位置テスト =====');
    const results = {1: 0, 2: 0, 3: 0};
    const tests = [];
    
    for (let i = 0; i < 12; i++) {
        const randomPos = Math.floor(Math.random() * 3);
        const buttonNumber = randomPos + 1;
        results[buttonNumber]++;
        tests.push({
            テスト: i + 1,
            ランダム値: randomPos,
            ボタン位置: buttonNumber + '番目'
        });
    }
    
    console.table(tests);
    console.log('🎯 位置分布:', results);
    console.log('✅ Math.random()テスト:', Math.random(), Math.random(), Math.random());
    console.log('========================\n');
}

// ブラウザキャッシュ確認用
function checkCacheStatus() {
    console.log('\n🔄 ===== キャッシュ状況確認 =====');
    console.log('現在時刻:', new Date().toLocaleString());
    console.log('Math.random()テスト:', Math.random(), Math.random(), Math.random());
    console.log('lastCorrectPosition:', typeof lastCorrectPosition !== 'undefined' ? lastCorrectPosition : 'undefined');
    console.log('このメッセージが表示されれば、JavaScriptは最新版です');
    console.log('========================\n');
}

let currentQuiz = null;
let isAnswering = false;

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

// 重複しないランダムクイズを選択
function getRandomQuiz() {
    // すべての問題が出題済みの場合はリセット
    if (usedQuestions.length >= quizDatabase.length) {
        usedQuestions = [];
        addMessage("全ての問題を出題したので、再び最初から始めよう。");
    }
    
    let availableQuestions = quizDatabase.filter((_, index) => !usedQuestions.includes(index));
    let selectedIndex = Math.floor(Math.random() * availableQuestions.length);
    let actualIndex = quizDatabase.findIndex(q => q === availableQuestions[selectedIndex]);
    
    usedQuestions.push(actualIndex);
    return quizDatabase[actualIndex];
}

// クイズの選択肢を生成
function generateQuizOptions() {
    if (isAnswering || isAppFinished) return;
    
    currentQuiz = getRandomQuiz();
    
    // 質問を表示
    setTimeout(() => {
        addMessage(currentQuiz.question, false, false, true);
        
        // 選択肢ボタンを生成
        setTimeout(() => {
            // 最初の3つの選択肢を取得
            const options = [...currentQuiz.options];
            const correctAnswer = options[currentQuiz.correct];
            
            // 1番、2番、3番ボタンのうちランダムな位置に正解を配置
            const randomPosition = Math.floor(Math.random() * 3);
            const newCorrectPosition = randomPosition;
            
            // 新しい選択肢配列を作成
            const displayOptions = new Array(3);
            
            // 正觢を指定位置に配置
            displayOptions[newCorrectPosition] = correctAnswer;
            
            // 他の2つの選択肢を残りの位置に配置
            const otherOptions = options.filter((opt, index) => index !== currentQuiz.correct);
            let otherIndex = 0;
            for (let i = 0; i < 3; i++) {
                if (displayOptions[i] === undefined) {
                    displayOptions[i] = otherOptions[otherIndex];
                    otherIndex++;
                }
            }
            
            // 正解位置を記録
            currentQuiz.shuffledCorrect = newCorrectPosition;
            
            // デバッグ情報を表示
            console.log('\n🎯 ===== ボタン位置ランダム化 =====');
            console.log('📝 問題:', currentQuiz.question.substring(0, 40) + '...');
            console.log('🎲 ランダム値:', randomPosition, '-> ボタン' + (randomPosition + 1) + '番目');
            console.log('✅ 正解位置:', (newCorrectPosition + 1) + '番目のボタン');
            console.log('📋 正解内容:', correctAnswer);
            console.log('🔀 ボタン配列:', displayOptions);
            console.log('🕐 タイムスタンプ:', new Date().toLocaleTimeString());
            console.log('================================\n');
            
            // 既存のボタンを更新
            const existingButtons = quizOptions.querySelectorAll('.quiz-option');
            displayOptions.forEach((option, index) => {
                if (existingButtons[index]) {
                    existingButtons[index].textContent = `${index + 1}. ${option}`;
                    existingButtons[index].disabled = false;
                    existingButtons[index].className = 'quiz-option';
                    existingButtons[index].onclick = () => handleAnswerClick(index);
                } else {
                    const button = document.createElement('button');
                    button.className = 'quiz-option';
                    button.textContent = `${index + 1}. ${option}`;
                    button.addEventListener('click', () => handleAnswerClick(index));
                    quizOptions.appendChild(button);
                }
            });
            
            // 4番目の選択肢「この中に正解はない」を更新または追加
            if (existingButtons[3]) {
                existingButtons[3].textContent = '4. この中に正解はない';
                existingButtons[3].disabled = false;
                existingButtons[3].className = 'quiz-option';
                existingButtons[3].onclick = () => handleAnswerClick(3);
            } else {
                const noAnswerButton = document.createElement('button');
                noAnswerButton.className = 'quiz-option';
                noAnswerButton.textContent = '4. この中に正解はない';
                noAnswerButton.addEventListener('click', () => handleAnswerClick(3));
                quizOptions.appendChild(noAnswerButton);
            }
            
            // 5番目の選択肢「もう勘弁してください」を更新または追加
            if (existingButtons[4]) {
                existingButtons[4].textContent = '5. もう勘弁してください';
                existingButtons[4].disabled = false;
                existingButtons[4].className = 'quiz-option';
                existingButtons[4].onclick = () => handleAnswerClick(4);
            } else {
                const giveUpButton = document.createElement('button');
                giveUpButton.className = 'quiz-option';
                giveUpButton.textContent = '5. もう勘弁してください';
                giveUpButton.addEventListener('click', () => handleAnswerClick(4));
                quizOptions.appendChild(giveUpButton);
            }
        }, 1000);
    }, 500);
}

// 回答クリック時の処理
function handleAnswerClick(selectedIndex) {
    if (isAnswering) return;
    isAnswering = true;
    
    // ユーザーの選択を表示
    let selectedText;
    if (selectedIndex === 3) {
        selectedText = "この中に正解はない";
    } else if (selectedIndex === 4) {
        selectedText = "もう勘弁してください";
    } else {
        // シャッフル後の選択肢を取得
        const buttons = quizOptions.querySelectorAll('.quiz-option');
        selectedText = buttons[selectedIndex].textContent.substring(3); // "1. " を除去
    }
    addMessage(selectedText, true);
    
    // すべてのボタンを無効化
    const buttons = quizOptions.querySelectorAll('.quiz-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === selectedIndex) {
            btn.classList.add('selected');
        }
        if (index === currentQuiz.shuffledCorrect) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== currentQuiz.shuffledCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // 正解/不正解のコメントを表示
    setTimeout(() => {
        let comment;
        if (selectedIndex === 4) {
            // 5番目の選択肢（もう勘弁してください）を選んだ場合
            isAppFinished = true;
            comment = finalMessage;
            addMessage(comment);
            
            // 「会話を試みる」ボタンを表示
            setTimeout(() => {
                showRestartButton();
            }, 2000);
            return; // 早期リターンで以降の処理をスキップ
        } else if (selectedIndex === 3) {
            // 4番目の選択肢（この中に正解はない）を選んだ場合
            comment = "いや、正解はちゃんと選択肢の中にあるのだよ。もう一度よく考えてみたまえ。" + currentQuiz.incorrectComment;
        } else {
            const isCorrect = selectedIndex === currentQuiz.shuffledCorrect;
            comment = isCorrect ? currentQuiz.correctComment : currentQuiz.incorrectComment;
        }
        addMessage(comment);
        
        // ディープくんのコメントを表示（deepCommentが存在する場合）
        if (currentQuiz.deepComment) {
            setTimeout(() => {
                addMessage("どうも、ディープくんです！\n\n" + currentQuiz.deepComment, false, true);
                
                // 次のクイズへの移行
                setTimeout(() => {
                    addMessage("さて、次の問題だ。");
                    setTimeout(() => {
                        isAnswering = false;
                        generateQuizOptions();
                    }, 1000);
                }, 4000);
            }, 2000);
        } else {
            // deepCommentがない場合は通常の流れ
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

// 「会話を試みる」ボタンを表示する関数
function showRestartButton() {
    // 既存の選択肢をクリア
    quizOptions.innerHTML = '';
    
    // 「会話を試みる」ボタンを作成
    const restartButton = document.createElement('button');
    restartButton.className = 'quiz-option restart-button';
    restartButton.textContent = '会話を試みる';
    restartButton.addEventListener('click', () => restartApp());
    quizOptions.appendChild(restartButton);
}

// アプリを最初からやり直す関数
function restartApp() {
    // 状態をリセット
    isAppFinished = false;
    isAnswering = false;
    usedQuestions = [];
    currentQuiz = null;
    lastCorrectPosition = -1; // 位置履歴もリセット
    
    // チャットメッセージをクリア
    chatMessages.innerHTML = '';
    
    // 最初のメッセージを表示
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message twain-message';
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    const avatar = document.createElement('div');
    avatar.className = 'avatar-twain';
    avatar.textContent = 'MT';
    avatarDiv.appendChild(avatar);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = 'ようこそ、友よ。私はマーク・トウェインだ。人間の本質について、君の理解を試してみよう。';
    contentDiv.appendChild(textDiv);
    
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // 選択肢ボタンを初期状態に戻す
    quizOptions.innerHTML = `
        <button class="quiz-option" disabled>1. 選択肢を読み込み中...</button>
        <button class="quiz-option" disabled>2. 選択肢を読み込み中...</button>
        <button class="quiz-option" disabled>3. 選択肢を読み込み中...</button>
        <button class="quiz-option" disabled>4. この中に正解はない</button>
        <button class="quiz-option" disabled>5. もう勘弁してください</button>
    `;
    
    // 最初の問題を開始
    setTimeout(() => {
        addMessage("では、最初の問題から始めよう。");
        setTimeout(() => {
            generateQuizOptions();
        }, 1000);
    }, 1000);
}

// 初期化 - すぐに最初の問題を出す
document.addEventListener('DOMContentLoaded', () => {
    // キャッシュ状況とランダムテストを実行
    checkCacheStatus();
    testRandomPosition();
    
    setTimeout(() => {
        addMessage("では、最初の問題から始めよう。");
        setTimeout(() => {
            generateQuizOptions();
        }, 1000);
    }, 1000);
});

// フォールバック - DOMが既に読み込まれている場合
if (document.readyState === 'loading') {
    // DOMがまだ読み込み中
} else {
    // DOMが既に読み込まれている
    setTimeout(() => {
        addMessage("では、最初の問題から始めよう。");
        setTimeout(() => {
            generateQuizOptions();
        }, 1000);
    }, 500);
}