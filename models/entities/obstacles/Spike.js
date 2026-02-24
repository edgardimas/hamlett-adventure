import Obstacle from "./Obstacle.js";

class Spike extends Obstacle {
  static image = new Image();

  constructor(x, y, gameSpeed) {
    super(x, y, 40, 60, gameSpeed);
    this.image = Spike.image;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);

    // Debug Draw hitBox (in red)
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.strokeRect(
      this.hitBox.x,
      this.hitBox.y,
      this.hitBox.width,
      this.hitBox.height,
    );
  }
}

// Load image
Spike.image.src = "../views/assets/obstacles/spike.png";

export default Spike;
