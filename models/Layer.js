const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const ground = new Image();
const city = new Image();
const clouds = new Image();
const sky = new Image();

ground.src = "../views/assets/ground.png";
sky.src = "../views/assets/sky.png";
clouds.src = "../views/assets/clouds.png";
city.src = "../views/assets/city.png";

let gameSpeed = 10;

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

export { Ground, Sky, Clouds, City };

export default Layer;
