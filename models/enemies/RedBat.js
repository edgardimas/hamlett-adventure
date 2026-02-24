import Bat from "./Bat.js";

class RedBat extends Bat {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
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

export default RedBat;
