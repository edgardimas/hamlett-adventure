import Player from "./Player.js";
import enemyHandler from "../../controllers/enemyHandler.js";

const hamlettPict = new Image();
hamlettPict.src = "./views/assets/player/hamlett.png";

class Hamlett extends Player {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight, hamlettPict);
  }
  update(input) {
    super.update(input);
    enemyHandler.bats.forEach((enemy) => {
      if (
        this.hitBox.x < enemy.hitBox.x + enemy.hitBox.width &&
        this.hitBox.x + this.hitBox.width > enemy.hitBox.x &&
        this.hitBox.y + this.hitBox.height > enemy.hitBox.y &&
        this.hitBox.y < enemy.hitBox.y + enemy.hitBox.height
      ) {
        this.gameOver = true;
      }
    });
  }
}

const hamlett = new Hamlett(1200, 700);
export default hamlett;
