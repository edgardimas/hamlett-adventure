const batPict = new Image();
batPict.src = "../views/assets/enemies/red-bat.png";
class Enemy {
  constructor(gameWidth, gameHeight, image) {
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
  }
}

const bat = new Enemy(800, 700, batPict);

export default bat;
