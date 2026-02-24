import Bat from "./Bat.js";

class RedBat extends Bat {
  static image = new Image();

  constructor(gameWidth, gameHeight, gameSpeed) {
    super(gameWidth, gameHeight, RedBat.image, gameSpeed);
    this.hitBoxOffSetX = 20;
    this.hitBoxOffsetY = 20;
    this.hitBoxWidth = this.width - 30;
    this.hitBoxHeight = this.height - 50;
  }

  update() {
    super.update();
    //update hitbox according to new size
    this.hitBox = {
      x: this.x + this.hitBoxOffSetX,
      y: this.y + this.hitBoxOffsetY,
      width: this.hitBoxWidth,
      height: this.hitBoxHeight,
    };
  }
}

// Load image
RedBat.image.src = "./views/assets/enemies/red-bat.png";

export default RedBat;
