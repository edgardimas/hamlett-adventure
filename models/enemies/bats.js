import Enemy from "./Enemy.js";

const redBatPict = new Image();
redBatPict.src = "../../views/assets/enemies/red-bat.png";

class RedBat {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.bats = [];
    this.batTimer = 0;
    this.batInterval = 1000; // Adjust as needed
    this.randomBatInterval = Math.random() * 500 + 500;

    // ✅ Ensure image is loaded before using
    this.imageLoaded = false;
    redBatPict.onload = () => {
      this.imageLoaded = true;
    };
  }

  spawnBat(gameSpeed) {
    if (this.imageLoaded) {
      this.bats.push(
        new Enemy(this.gameWidth, this.gameHeight, redBatPict, gameSpeed)
      );
    }
  }

  update(deltaTime, gameSpeed) {
    this.batTimer += deltaTime;
    if (this.batTimer > this.batInterval + this.randomBatInterval) {
      this.spawnBat(gameSpeed);
      this.batTimer = 0;
      this.randomBatInterval = Math.random() * 500 + 500; // Adjust interval
    }

    this.bats.forEach((bat) => bat.update());
    this.bats = this.bats.filter((bat) => !bat.markedForDeletion);
  }

  draw(ctx) {
    this.bats.forEach((bat) => bat.draw(ctx));
  }
}

export default RedBat;
