const andrewPict = new Image();
andrewPict.src = "../views/assets/player/andrew.png";
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
  update(input) {
    if (this.rate % this.frameRate < 1) {
      console.log(this.rate % 2);
      this.frameX++;
      if (this.frameX == 2) this.frameX = 0;
    }
    this.rate++;
    if (input.keys.indexOf("ArrowRight") > -1) {
      this.speed = 5;
    } else if (input.keys.indexOf("ArrowLeft") > -1) {
      this.speed = -5;
    } else if (input.keys.indexOf("ArrowUp") > -1 && this.onGround()) {
      this.vy -= 10;
    } else {
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
}

const andrew = new Player(800, 700, andrewPict);

export default andrew;
