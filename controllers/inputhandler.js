class InputHandler {
  constructor() {
    this.keys = [];
    this.allowedKeys = [
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "W",
      "A",
      "S",
      "D",
      "w",
      "a",
      "s",
      "d",
      " ",
    ];
    window.addEventListener("keydown", (e) => {
      if (this.allowedKeys.includes(e.key) && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (this.allowedKeys.includes(e.key)) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}

const inputHandler = new InputHandler();

export default inputHandler;
