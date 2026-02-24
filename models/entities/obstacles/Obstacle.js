import Entity from "../Entity.js";

class Obstacle extends Entity {
  constructor(x, y, width, height) {
    super(0, 0, null);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;
    this.markedForDeletion = false;
  }

  draw(context) {
    // Draw the obstacle (spike)
    context.fillStyle = "gray";
    context.fillRect(this.x, this.y, this.width, this.height);

    // Debug Draw hitBox (in blue)
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.strokeRect(
      this.hitBox.x,
      this.hitBox.y,
      this.hitBox.width,
      this.hitBox.height,
    );
  }

  update() {
    this.hitBox = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
    this.x -= this.speed;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
  }
}

export default Obstacle;
