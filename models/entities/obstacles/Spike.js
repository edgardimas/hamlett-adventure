import { Obstacle } from "../Entity.js";

class Spike extends Obstacle {
  constructor(gameWidth, gameHeight, image, gameSpeed, damage = 10) {
    super(gameWidth, gameHeight, image, gameSpeed);
    this.damage = damage;
  }
}

export default Spike;
