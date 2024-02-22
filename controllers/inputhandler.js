class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      const allowedKeys = [
        "ArrowDown",
        "ArrowUp",
        "ArrowLeft",
        "ArrowRight",
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
      ];

      if (allowedKeys.includes(e.code) && this.keys.indexOf(e.code) === -1) {
        this.keys.push(e.code);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}

export default InputHandler;
