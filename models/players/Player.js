import Entity from "../Entity.js";

class Player extends Entity {
  constructor(gameWidth, gameHeight, image) {
    super(gameWidth, gameHeight, image);
    this.vy = 0;
    this.weight = 1;
    this.gameOver = false;
  }

  update(input) {
    this.updateHitBox(30, 20, 70, 50);

    if (this.rate % this.frameRate === 0) {
      this.frameX = (this.frameX + 1) % 2;
    }
    this.rate = (this.rate + 1) % 500;

    switch (true) {
      case input.keys.some((key) => ["ArrowUp", "W", "w", " "].includes(key)) &&
        this.onGround():
        this.vy = -20;
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

    //Movement
    this.x = Math.max(
      0,
      Math.min(this.x + this.speed, this.gameWidth - this.width),
    );
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
  }

  onGround() {
    return this.y + this.groundHeight >= this.gameHeight - this.height;
  }
}

export default Player;
