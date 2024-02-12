import bat from "../models/Enemy.js";
let bats = [];
let i = 0;
let lastTime = 0;

class EnemyHandler {
  constructor() {
    this.count = 5;
  }
  bats(context) {
    for (i = 0; i <= this.count; i++) {
      bats.push(bat);
    }

    bats.forEach((e) => {
      e.draw(context);
      e.update();
    });
  }
}

const enemyHandler = new EnemyHandler();

export default enemyHandler;
