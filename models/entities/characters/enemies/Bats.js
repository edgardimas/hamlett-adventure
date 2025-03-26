import { Enemy } from "../../Entity.js";

class Bat extends Enemy {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.amplitude = 50; // Mas height deviation for sine wave
    this.frequency = 0.05; // Adjust wave speed
    this.baseY = this.y; //Store initial Y position.
  }
}

class PurpleBat extends Bat {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.time = 0;
    this.hitBoxOffsetX = 20;
    this.hitBoxOffsetY = 20;
    this.hitBoxWidth = this.width - 30;
    this.hitBoxHeight = this.height - 50;
  }

  update() {
    super.update();
    this.time += this.frequency;
    this.y = this.baseY + Math.sin(this.time) * this.amplitude;
    //update hitbox according to a new size
    this.hitBox = {
      x: this.x + this.hitBoxOffsetX,
      y: this.y + this.hitBoxOffsetY,
      width: this.hitBoxWidth,
      height: this.hitBoxHeight,
    };
  }
}

class RedBat extends Bat {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
  }
  update() {
    super.update();
  }
}

export { RedBat, PurpleBat };
