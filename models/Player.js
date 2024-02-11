const andrewPict = new Image();
andrewPict.src = "../views/assets/player/andrew.png";
class Player {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 200;
    this.x = 0;
    this.y = 0;
    this.image = image;
  }

  draw(context) {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y);
  }
  update(input) {
    if (input.keys.indexOf("ArrowRight") > -1) {
      this.speed = 5;
    } else if (input.keys.indexOf("ArrowLeft")) {
      this.speed = -5;
    } else if (input.keys.indexOf("ArrowUp")) {
      this.vy -= 30;
    } else {
      this.speed = 0;
    }
    // horizontal movement
    this.x += this.speed;
    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidth - this.width) this.x - this.width;
    //vertical movement
    this.y += this.vy;
  }
}

const andrew = new Player(100, 100, andrewPict);

export default andrew;
