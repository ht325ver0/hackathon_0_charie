class Terminal {
    constructor(){
        this.standby_input();
    }
    standby_input() {
        const inputer = document.createElement('input');
        const prompt = document.createElement('span'); // "Chrome > " 表示用の要素

        prompt.innerText = "Chrome > "; // テキストを設定
        prompt.style= "color:white";
        inputer.style = "border:none; background: #000000; caret-color: white; outline: 0;";
        document.body.appendChild(prompt); // テキストを追加
        document.body.appendChild(inputer); // 入力フィールドを追加

        inputer.focus(); // 入力フィールドにフォーカス
    }
}

var terminal = new Terminal();
