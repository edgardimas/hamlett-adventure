import Enemy from "../models/Enemy.js";
class EnemyHandler {
  constructor() {
    this.bats = [];
    this.batPict = new Image();
    this.batPict.src = "../views/assets/enemies/red-bat.png";
    this.lastTime = 0;
    this.enemyTimer = 0;
    this.enemyInterval = 2000;
    this.randmonEnemyInterval = Math.random() * 1000 + 500;
  }
  handleBats(ctx, deltaTime) {
    if (this.enemyTimer > this.enemyInterval + this.randmonEnemyInterval) {
      this.bats.push(new Enemy(800, 700, this.batPict));
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
    this.bats.forEach((x) => {
      x.draw(ctx);
      x.update();
    });
  }
}

const enemyHandler = new EnemyHandler();

export default enemyHandler;
