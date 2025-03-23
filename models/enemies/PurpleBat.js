// models/enemies/PurpleBat.js
import Bat from "./Bat.js";

class PurpleBat extends Bat {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.time = 0;
    this.hitBoxOffSetX = 20;
    this.hitBoxOffsetY = 20;
    this.hitBoxWidth = this.width - 30;
    this.hitBoxHeight = this.height - 50;
  }

  update() {
    super.update();
    this.time += this.frequency; // Increment time for sine wave
    this.y = this.baseY + Math.sin(this.time) * this.amplitude; // Sinusoidal motion
    //update hitbox according to new size
    this.hitBox = {
      x: this.x + this.hitBoxOffSetX,
      y: this.y + this.hitBoxOffsetY,
      width: this.hitBoxWidth,
      height: this.hitBoxHeight,
    };
  }
}

export default PurpleBat;
