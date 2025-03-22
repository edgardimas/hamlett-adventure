import RedBat from "../models/enemies/RedBat.js";
import PurpleBat from "../models/enemies/PurpleBat.js";

class EnemyHandler {
  constructor(gameWidth, gameHeight) {
    this.bats = [];
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    // Load images asynchronously
    this.redBatImage = new Image();
    this.redBatImage.src = "./views/assets/enemies/red-bat.png";
    this.purpleBatImage = new Image();
    this.purpleBatImage.src = "./views/assets/enemies/purple-bat.png";
    this.enemyTimer = 0;
    this.enemyInterval = 2000;
    this.randomEnemyInterval = Math.random() * 500 + 500;
  }

  spawnEnemy(gameSpeed) {
    const isPurple = Math.random() < 0.5;
    const enemy = isPurple
      ? new PurpleBat(
          this.gameWidth,
          this.gameHeight,
          this.purpleBatImage,
          gameSpeed
        )
      : new RedBat(
          this.gameWidth,
          this.gameHeight,
          this.redBatImage,
          gameSpeed
        );

    this.bats.push(enemy);

    //Adjust spawn interval dynamically based on game speed
    if (gameSpeed < 7) {
      this.randomEnemyInterval = Math.random() * 2000 + 600 - gameSpeed * 500;
    } else {
      this.randomEnemyInterval = Math.random() * 2000 + 2500 - gameSpeed * 500;
    }
  }

  handleBats(ctx, deltaTime, gameSpeed) {
    // Check if it's time to spawn a new enemy
    if (this.enemyTimer > this.enemyInterval + this.randomEnemyInterval) {
      this.spawnEnemy(gameSpeed);
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }

    // Update & draw each enemy
    this.bats.forEach((bat) => {
      bat.update();
      bat.draw(ctx);
    });

    // Remove enemies marked for deletion
    this.bats = this.bats.filter((bat) => !bat.markedForDeletion);
  }
}

// Export a singleton instance
export const enemyHandler = new EnemyHandler(1200, 700);
