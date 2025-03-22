// models/enemies/PurpleBat.js
import Bat from "./Bat.js";

class PurpleBat extends Bat {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.time = 0;
  }

  update() {
    super.update();
    this.time += this.frequency; // Increment time for sine wave
    this.y = this.baseY + Math.sin(this.time) * this.amplitude; // Sinusoidal motion
  }
}

export default PurpleBat;
