import playerController from "./playerController.js";
import { enemyHandler } from "./enemyHandler.js";
const hamlett = playerController.player; // Access player instance

export const gameController = {
  update(input) {
    hamlett.update(input);

    // Collision detection with all enemies
    enemyHandler.enemies.forEach((enemy) => {
      if (
        hamlett.hitBox.x < enemy.hitBox.x + enemy.hitBox.width &&
        hamlett.hitBox.x + hamlett.hitBox.width > enemy.hitBox.x &&
        hamlett.hitBox.y + hamlett.hitBox.height > enemy.hitBox.y &&
        hamlett.hitBox.y < enemy.hitBox.y + enemy.hitBox.height
      ) {
        hamlett.gameOver = true;
      }
    });
  },
};
