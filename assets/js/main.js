const authorInput = document.getElementById("author");
const messageInput = document.getElementById("message");
const sendBtn = document.querySelector(".btn");

class Message {
  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
  date = new Date();
  toHtml() {
    return `${this.date.getHours()}:${this.date.getMinutes()} ${this.author}:${this.text}`;
  }
}

class Messenger {
  constructor() {
    this.allmessages = [];
    this.historyMessage = document.querySelector(`.history`);
  }

  send(author, text) {
    const message = new Message(author, text);
    this.allmessages.push(message);
  }
  show_history() {
    const p = document.createElement("p");
    p.innerHTML = this.allmessages.shift().toHtml();
    this.historyMessage.appendChild(p);
  }
}
let messenger = new Messenger();

sendBtn.addEventListener("click", () => {
  const author = authorInput.value;
  const message = messageInput.value;
  authorInput.value = "";
  messageInput.value = "";
  messenger.send(author, message);
  messenger.show_history();
});