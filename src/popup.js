import { isValidInput } from "./CommandLineHandler.js";

class Terminal {
  inputer = document.createElement('input');
  prompt = document.createElement('span'); 

  constructor(){
    this.standby_input();
    this.get_input();
    this.counter = 0;
  }
  standby_input() {
    this.prompt.innerText = "Chrome > "; // テキストを設定
    this.prompt.style = "color: #87c3ff";
    this.inputer.style = "color: #f8c762; border:none; background: #1f1f1f; caret-color: white; outline: 0;";
    this.prompt.id = "${this.counter}";
    this.inputer.id = "${this.counter}"
    document.body.appendChild(this.prompt); // テキストを追加
    document.body.appendChild(this.inputer); // 入力フィールドを追加

    this.inputer.focus(); // 入力フィールドにフォーカス
  }

  get_input(){
    this.inputer.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

        // 現在の入力値をコンソールに出力（デバッグ用）
        console.log(this.inputer.value);

        isValidInput(this.inputer.value);

        // 新しい行を作成する
        this.add_new_prompt();
      }
    });
  }
  add_new_prompt(){
    const newPrompt = document.createElement('div');
    newPrompt.innerHTML = `<span style="color:white">Chrome > ${this.inputer.value}</span>`;
    
    document.body.appendChild(newPrompt); // 新しい行を追加

    // 新しい入力フィールドを作成してフォーカスする
    this.inputer.value = ''; // 現在の入力フィールドをリセット
    this.counter += 1;
    this.standby_input();
  }
}

var terminal = new Terminal();





