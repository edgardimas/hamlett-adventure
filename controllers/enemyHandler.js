class EnemyHandler {
  handleBats(ctx, deltaTime, gameSpeed) {
    if (
      redBat.enemyTimer >
      redBat.enemyInterval + redBat.randmonEnemyInterval
    ) {
      // ✅ Only create enemies when image is fully loaded
      if (redBat.imageLoaded) {
        redBat.bats.push(new Enemy(1200, 700, redBat.batPict, gameSpeed));
      }

      // ✅ Adjust interval based on speed
      redBat.randmonEnemyInterval =
        gameSpeed < 7
          ? Math.random() * 2000 + 600 - gameSpeed * 500
          : Math.random() * 2000 + 2500 - gameSpeed * 500;

      redBat.enemyTimer = 0;
    } else {
      redBat.enemyTimer += deltaTime;
    }

    redBat.bats.forEach((bat) => {
      if (bat.image) {
        bat.draw(ctx);
        bat.update();
      }
    });

    // ✅ Remove deleted enemies
    redBat.bats = redBat.bats.filter((bat) => !bat.markedForDeletion);
  }
}

export const enemyHandler = new EnemyHandler();
