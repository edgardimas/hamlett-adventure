class Entity {
  constructor(gameWidth, gameHeight, image, gameSpeed, groundOffset = 0) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 100;
    this.groundHeight = 150;
    this.image = image;
    this.x = gameWidth;
    this.y = this.gameHeight - this.height - this.groundHeight - groundOffset;
    this.frameX = 0;
    this.speed = 2 + gameSpeed;
    this.rate = 11;
    this.frameRate = 10;
    this.markedForDeletion = false;
    this.hitBox = {};
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    context.strokStyle = "red";
    context.lineWidth = 2;
    context.strokeRect(
      this.hitBox.x,
      this.hitBox.y,
      this.hitBox.width,
      this.hitBox.height
    );
  }

  update() {
    this.hitBox = {
      x: this.x + 10,
      y: this.y + 20,
      width: this.width - 20,
      height: this.height - 50,
    };

    if (this.rate % this.frameRate < 1) {
      this.frameX = (this.frameX + 1) % 2;
    }
    this.rate++;
    this.x -= this.speed;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
  }
}

class Obstacle extends Entity {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed, 0);
  }
}

class Enemy extends Entity {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    super(gameWidth, gameHeight, image, gameSpeed, 30);
  }
}

export { Obstacle, Enemy };
