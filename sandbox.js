/**
 * ==============================================================
 * sudah tidak dipakai karena terlalu redundant
 *
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
// I want to make a variable to control the speed
let gameSpeed = 10;
//lets try to import the image into the canvas:
// kind of the same as document.createElement("img");
//please learn more about append.child() later
// var background = new Image();
const backgroundLayer1 = new Image();
let x = 0;
let x2 = 1000;
// background.src = "/assets/sky.png";
backgroundLayer1.src = "/assets/ground.png";

// background.onload = function () {
//   ctx.drawImage(background, 0, 0);
// }; --> tidak bisa diterapkan karena

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer1, x, 0);
  ctx.drawImage(backgroundLayer1, x2, 0);
  if (x < -1000) {
    x = 1000 - 20;
  } else {
    x = x - gameSpeed;
  }
  if (x2 < -1000) {
    x2 = 1000 - 20;
  } else {
    x2 = x2 - gameSpeed;
  }
  requestAnimationFrame(animate);
  console.log("x = ", x, "x2 = ", x2, "gap = ", Math.abs(x - x2));
} // terjadi error drawImage is not defined

animate();

/**
 * why using class?
 */

//javascript classes to create a blueprint for a layer object
// then i create five instances of that layer class
//javascript classes are used when you want to make many similiar object
// cycling in array
// we will create 5 image layer object
// similar = shared properties (diff values) and methods.
// width 1000 pixels each layer object will
// each have different speed and image

class Layer {
  constructor(image, speedModifier) {
    this.x = 0; // each object will have horizontal x coordinate that starts at position 0
    this.y = 0; // each object will have y coordinate 0
    this.width = 1000; //each object will have the same width of 1000
    this.height = 700;
    this.x2 = this.width; // the second image of the layer
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
    /**
     * this declaration  telling my constructor create property
     * called image on this new object you are creating
     * right now and set it to image we pass as argument.
     * argument to the class constructor
     */
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
    /**
     * if you want your game to have a constant speed you dont need
     * to do this
     */
  }
  /* 
      its job will be to move layers horizontally 
      by changing ther this.x and this.x2 and it will reset them
      when the layers move off screen
      just as before but wrap itu in reusable class syntax.
    */
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
  /**
   * its job will be to take information about this layer object
   * and draw it on canvas every time update method runs to change
   * horizontal x position, draw will run again to redraw the image
   * after the new position to make sure the game speed is dynamic
   * and always reacting to the current value of my global game speeed
   * variable from line 10 i need to recalculate this dot speed.
   */
}

//draw(context) {
// context.strokeStyle = "white";
// context.strokeRect(
//   this.x + 30,
//   this.y + 20,
//   this.width - 70,
//   this.height - 50
// );

class Enemy {
  constructor(gameWidth, gameHeight, image, gameSpeed) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 100;
    this.groundHeight = 150;
    this.image = image;
    this.x = gameWidth;
    this.y = this.gameHeight - this.height - this.groundHeight - 30;
    this.frameX = 0;
    this.speed = 0;
    this.rate = 11;
    this.frameRate = 10;
    this.gameSpeed = gameSpeed;
    this.speed = 2 + gameSpeed;
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
    //Debug Draw hitBox (in red)
    context.strokeStyle = "red";
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
      this.frameX++;
      if (this.frameX == 2) this.frameX = 0;
    }
    this.rate++;
    this.x -= this.speed;
    if (this.x < 0 - this.width) this.markedForDeletion = true;
    // this.speed = this.speed;
  }
}

export default Enemy;
