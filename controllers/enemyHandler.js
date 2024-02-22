import Enemy from "../models/Enemy.js";
class EnemyHandler {
  constructor() {
    this.bats = [];
    this.batPict = new Image();
    this.batPict.src = "../views/assets/enemies/red-bat.png";
    this.lastTime = 0;
    this.enemyTimer = 0;
    this.enemyInterval = 2000;
    this.randmonEnemyInterval = Math.random() * 500 + 500;
  }
  handleBats(ctx, deltaTime, gameSpeed) {
    if (this.enemyTimer > this.enemyInterval + this.randmonEnemyInterval) {
      this.bats.push(new Enemy(800, 700, this.batPict, gameSpeed));
      if (gameSpeed < 7) {
        this.randmonEnemyInterval =
          Math.random() * 2000 + 600 - gameSpeed * 500;
      } else {
        this.randmonEnemyInterval =
          Math.random() * 2000 + 2500 - gameSpeed * 500;
      }

      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
    this.bats.forEach((x) => {
      x.draw(ctx);
      x.update();
    });
    this.bats = this.bats.filter((bat) => !bat.markedForDeletion);
  }
}

const enemyHandler = new EnemyHandler();

export default enemyHandler;
