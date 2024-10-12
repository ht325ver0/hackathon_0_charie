<h1>k3ハッカソンcharie成果物発表</h1>
<p1>我々charieチームはchromeの拡張機能を開発しました！その名も</p1>
<h3>Command Operation For Chrome</h3>
<p1>です！</p1>

<p2>この拡張機能はターミナルのような操作感でGoogleChromeを操作できたら便利なのではないかと考え制作されました。</p2>

<p1>制作した機能を紹介します！</p1>

<h3>説明</h3>
<p1>コマンドによるGoogleサービスへアクセス</p1>
<h3>操作方法</h3>
<ol>
  <li>mac：Command+Shift+P　win:Alt+Qでコマンド入力用のpopupが表示される。</li>
  <li>あとは任意のコマンドを入力すればOK！</li>
</ol>
<h3>コマンド一覧</h3>
<ul>
  <li>home: googleのホーム画面が開く</li>
  <li>mail: Gmailが開く</li>
  <li>tr: 翻訳を開く</li>
  <li>map: マップを開く</li>
  <li>drive : ドライブを開く<li>
  <li>docs : Googleドキュメントを開く</li>
  <li>sheets : Googleスプレットシートを開く</li>
  <li>slides : Googleスライドを開く</li>
  <li>cal : Googleカレンダーを開く</li>
  <li>yt : Youtubeを開く</li>
  <li>gemini : geminiを開く</li>
  <li>dino : dinoを開く</li>
</ul>

<h1>更新情報</h1>
<h2>version:1.1</h2>
<h3>概要</h3>
<p1>コマンドの改良を行いました.以下のコマンドを入力することで、翻訳された文書をすぐに表示される。</p1>
<ul>
  <li>`tr [翻訳したい言語のドメイン] [翻訳したい文書]` </li>
</ul>
<h3>例</h3>
<ul>
  <li>`tr ja I'm fine` </li>
</ul>
I'm fine という文が自動的に日本語に翻訳され、翻訳結果が表示される。

<h2>version:1.2(10/12)</h2>
<h3>概要</h3>
<p1>コマンドの追加、およびUIの改善をしました！</p1>
<ul>
  <li>`help` : 登録されてるコマンド一覧が表示される</li>
  <li>`make [任意のコマンド名] [URL]` : 任意のコマンドを登録できる</li>
  <li>`rm [任意のコマンド名]` : 任意のコマンドを削除できる</li>
</ul>
<h3>例</h3>
<ul>
  <li>`make mygit https://github.com/ht325ver0/hackathon_0_charie/edit/main/README.md#L44C38` </li>
</ul>
mygitというコマンドが追加され、このコマンドを打つことで登録したURLに飛ぶことができる。
<ul>
  <li>`rm mygit` </li>
</ul>
mygitというコマンドが削除され、呼び出せなくなる。


  
