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
      Math.min(this.x + this.speed, this.gameWidth - this.width)
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
