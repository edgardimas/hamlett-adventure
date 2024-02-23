const andrewPict = new Image();
andrewPict.src = "./views/assets/player/andrew.png";
import enemyHandler from "../controllers/enemyHandler.js";

class Player {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 100;
    this.groundHeight = 150;
    this.x = 0;
    this.y = this.gameHeight - this.height - this.groundHeight;
    this.image = image;
    this.frameX = 0;
    this.speed = 0;
    this.vy = 0;
    this.weight = 1;
    this.rate = 0;
    this.frameRate = 10;
    this.gameOver = false;
    this.hitBox = {};
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(input) {
    this.hitBox = {
      x: this.x + 30,
      y: this.y + 20,
      width: this.width - 70,
      height: this.height - 50,
    };

    enemyHandler.bats.forEach((enemy) => {
      if (
        this.hitBox.x < enemy.hitBox.x + enemy.hitBox.width &&
        this.hitBox.x + this.hitBox.width > enemy.hitBox.x &&
        this.hitBox.y + this.hitBox.height > enemy.hitBox.y
      ) {
        this.gameOver = true;
      } else {
      }
    });
    if (this.rate % this.frameRate === 0) {
      this.frameX++;
      if (this.frameX == 2) this.frameX = 0;
    }
    this.rate++;
    if (this.rate > 500) this.rate = 0;

    switch (true) {
      case input.keys.some((key) => ["ArrowUp", "W", "w", " "].includes(key)) &&
        this.onGround():
        this.vy = -20;
        break;

      case input.keys.some((key) => ["ArrowUp", "W", "w", " "].includes(key)) &&
        this.onGround():
        if (input.keys.some((key) => ["ArrowRight", "D", "d"].includes(key))) {
          this.vy -= 20;
        } else if (
          input.keys.some((key) => ["ArrowLeft", "A", "a"].includes(key))
        ) {
          this.vy -= 20;
        }
        break;

      case input.keys.some((key) => ["ArrowRight", "D", "d"].includes(key)):
        this.speed = 5;
        break;

      case input.keys.some((key) => ["ArrowLeft", "A", "a"].includes(key)):
        this.speed = -5;
        break;

      default:
        this.speed = 0;
    }
    // horizontal movement
    this.x += this.speed;
    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width)
      this.x = this.gameWidth - this.width;
    // vertical movement
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
    if (this.y > this.gameHeight - this.height)
      this.y = this.gameHeight - this.height;
  }
  onGround() {
    return this.y + this.groundHeight >= this.gameHeight - this.height;
  }
  gameOver() {
    return this.gameOver;
  }
}

const andrew = new Player(800, 700, andrewPict);

export default andrew;
