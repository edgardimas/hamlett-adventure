const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 10;
const ground = new Image();
const city = new Image();
const clouds = new Image();
const sky = new Image();

ground.src = "/assets/ground.png";
city.src = "/assets/city.png";
clouds.src = "/assets/clouds.png";
sky.src = "/assets/sky.png";

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
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const Ground = new Layer(ground, 0.5); // this is instance
const Sky = new Layer(sky, 0.5);
const Clouds = new Layer(clouds, 0.2);
const City = new Layer(city, 0.3);

const gameObjects = [Sky, Clouds, City, Ground];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((x) => {
    x.update();
    x.draw();
  });
  requestAnimationFrame(animate);
}

animate();
