class Enemy {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 100;
    this.groundHeight = 150;
    this.image = image;
    this.x = gameWidth - 100;
    this.y = this.gameHeight - this.height - this.groundHeight;
    this.frameX = 0;
    this.speed = 0;
    this.rate = 11;
    this.frameRate = 10;
    this.gameSpeed = gameSpeed;
    this.speed = 2 + gameSpeed;
    this.markedForDeletion = false;
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
  update() {
    if (this.rate % this.frameRate < 1) {
      this.frameX++;
      if (this.frameX == 2) this.frameX = 0;
    }
    this.rate++;
    this.x -= this.speed;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
    this.speed = this.speed;
  }
}

export default Enemy;
