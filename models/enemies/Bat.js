import Enemy from "./Enemy.js";

class Bat extends Enemy {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.amplitude = 50; // Max height deviation for sine wave
    this.frequency = 0.05; // Adjust wave speed
    this.baseY = this.y; //Store initial Y position.
  }
}

export default Bat;
