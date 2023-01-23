import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);

    this._beat = new Beat();

    this._beat.on(Beat.events.BIT, () => {

      count += 1;

      if (lyrics.length > count) {

        this._create(lyrics[count]);
      }
    });

    this.emit(Application.events.READY);
  }

  _create(lyric) {

    let message = document.createElement('div');
    message.classList.add('message');
    message.innerText = lyric;

    document.querySelector(".main").appendChild(message);
  }
}


