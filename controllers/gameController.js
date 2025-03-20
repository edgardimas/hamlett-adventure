import hamlett from "../models/players/hamlett.js";
import enemyHandler from "./enemyHandler.js";

const gameController = {
  update(input) {
    hamlett.update(input);

    enemyHandler.bats.forEach((enemy) => {
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

export default gameController;
