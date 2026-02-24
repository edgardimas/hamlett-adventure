import Entity from "../Entity.js";

class Enemy extends Entity {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image);
    this.x = gameWidth;
    this.y = this.gameHeight - this.height - this.groundHeight - 30;
    this.rate = 11;
    this.gameSpeed = gameSpeed;
    this.speed = 2 + gameSpeed;
    this.markedForDeletion = false;
  }

  draw(context) {
    super.draw(context);
    //Debug Draw hitBox (in red)
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
    this.updateHitBox(10, 20, 20, 50);
    this.updateAnimation();
    this.x -= this.speed;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
  }
}

export default Enemy;
