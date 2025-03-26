import {
  PurpleBat,
  RedBat,
} from "../models/entities/characters/enemies/Bats.js";

import Spike from "../models/entities/obstacles/Spike.js";

class EntitiyHandler {
  constructor(gameWidth, gameHeight) {
    this.enemies = [];
    this.obstacles = [];
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.enemyTimer = 0;
    this.obstacleTimer = 0;
    this.enemyInterval = 2000;
    this.obstacleInterval = 3000;
    this.randomEnemyInterval = Math.random() * 500 + 500;
    this.randomObstacleInterval = Math.random() * 1000 + 1000;
    // Asset preloading
    this.assets = {
      redBat: new Image(),
      purpleBat: new Image(),
      spike: new Image(),
    };
    this.assets.redBat.src = "../views/assets/enemies/red-bat.png";
    this.assets.purpleBat.src = "../views/assets/enemies/purple-bat.png";
    this.assets.spike.src = "../views/assets/obstacles/Spike.png";
  }

  spawnEnemy(gameSpeed) {
    const isPurple = Math.random() < 0.5;
    const enemy = isPurple
      ? new PurpleBat(
          this.gameWidth,
          this.gameHeight,
          this.assets.purpleBat,
          gameSpeed
        )
      : new RedBat(
          this.gameWidth,
          this.gameHeight,
          this.assets.redBat,
          gameSpeed
        );

    this.enemies.push(enemy);
  }

  spawnObstacle(gameSpeed) {
    const spike = new Spike(
      this.gameWidth,
      this.gameHeight,
      this.assets.spike,
      gameSpeed
    );
    this.obstacles.push(spike);
  }

  handleEnemies(ctx, deltaTime, gameSpeed) {
    if (this.enemyTimer > this.enemyInterval + this.randomEnemyInterval) {
      this.spawnEnemy(gameSpeed);
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }
    this.enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw(ctx);
    });

    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
  }

  handleObstacles(ctx, deltaTime, gameSpeed) {
    if (
      this.obstacleTimer >
      this.obstacleInterval + this.randomObstacleInterval
    ) {
      this.spawnObstacle(gameSpeed);
      this.obstacleTimer = 0;
    } else {
      this.obstacleTimer += deltaTime;
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.update();
      obstacle.draw(ctx);
    });

    this.obstacles = this.obstacles.filter(
      (obstacle) => !obstacle.markedForDeletion
    );
  }

  handleEntities(ctx, deltaTime, gameSpeed) {
    this.handleEnemies(ctx, deltaTime, gameSpeed);
    this.handleObstacles(ctx, deltaTime, gameSpeed);
  }
}

export const entityHandler = new EntitiyHandler(1200, 700);
