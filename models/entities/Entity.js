class Entity {
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
    this.rate = 0;
    this.frameRate = 10;
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
      this.height,
    );
  }

  updateHitBox(offsetX, offsetY, widthReduction, heightReduction) {
    this.hitBox = {
      x: this.x + offsetX,
      y: this.y + offsetY,
      width: this.width - widthReduction,
      height: this.height - heightReduction,
    };
  }

  updateAnimation() {
    if (this.rate % this.frameRate < 1) {
      this.frameX++;
      if (this.frameX >= 2) this.frameX = 0;
    }
    this.rate++;
  }
}

export default Entity;
