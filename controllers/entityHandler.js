import RedBat from "../models/entities/enemies/RedBat.js";
import PurpleBat from "../models/entities/enemies/PurpleBat.js";
import Spike from "../models/entities/obstacles/Spike.js";

class EntityHandler {
  constructor(gameWidth, gameHeight) {
    this.bats = [];
    this.obstacles = [];
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.enemyTimer = 0;
    this.enemyInterval = 2000;
    this.randomEnemyInterval = Math.random() * 500 + 500;
    this.obstacleTimer = 0;
    this.obstacleInterval = 3000;
    this.randomObstacleInterval = Math.random() * 1000 + 800;
  }

  spawnEnemy(gameSpeed) {
    const isPurple = Math.random() < 0.5;
    const enemy = isPurple
      ? new PurpleBat(this.gameWidth, this.gameHeight, gameSpeed)
      : new RedBat(this.gameWidth, this.gameHeight, gameSpeed);

    this.bats.push(enemy);

    //Adjust spawn interval dynamically based on game speed
    if (gameSpeed < 7) {
      this.randomEnemyInterval = Math.random() * 2000 + 600 - gameSpeed * 500;
    } else {
      this.randomEnemyInterval = Math.random() * 2000 + 2500 - gameSpeed * 500;
    }
  }

  spawnObstacle() {
    const Y = 480;
    const spike = new Spike(this.gameWidth, Y);
    this.obstacles.push(spike);
  }

  handleBats(ctx, deltaTime, gameSpeed) {
    // Check if it's time to spawn a new enemy
    if (this.enemyTimer > this.enemyInterval + this.randomEnemyInterval) {
      this.spawnEnemy(gameSpeed);
      this.enemyTimer = 0;
    } else {
      // Check if it's time to spawn a new obstacle
      if (
        this.obstacleTimer >
        this.obstacleInterval + this.randomObstacleInterval
      ) {
        this.spawnObstacle(gameSpeed);
        this.obstacleTimer = 0;
      } else {
        this.obstacleTimer += deltaTime;
      }

      // Update & draw each obstacle
      this.obstacles.forEach((obstacle) => {
        obstacle.update();
        obstacle.draw(ctx);
      });

      // Remove obstacles marked for deletion
      this.obstacles = this.obstacles.filter(
        (obstacle) => !obstacle.markedForDeletion,
      );
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
export const entityHandler = new EntityHandler(1200, 700);
