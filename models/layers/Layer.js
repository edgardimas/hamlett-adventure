class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 1200;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
  }

  update(gameSpeed) {
    const speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - speed;
    }
    this.x = Math.floor(this.x - speed);
    this.x2 = Math.floor(this.x2 - speed);
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

export default Layer;
