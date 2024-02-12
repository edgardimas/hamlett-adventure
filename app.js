import { Ground, Sky, Clouds, City } from "./models/Layer.js";
import InputHandler from "./controllers/inputHandler.js";
import Enemy from "./models/Enemy.js";
import andrew from "./models/Player.js";
const batPict = new Image();
batPict.src = "../views/assets/enemies/red-bat.png";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
const gameObjects = [Sky, Clouds, City, Ground];
const input = new InputHandler();

let lastTime = 0;
let enemyTimer = 0;
let enemyInterval = 2000;
let bats = [];
let randmonEnemyInterval = Math.random() * 1000 + 500;

function handleEnemies(deltaTime) {
  if (enemyTimer > enemyInterval + randmonEnemyInterval) {
    bats.push(new Enemy(800, 700, batPict));
    enemyTimer = 0;
  } else {
    enemyTimer += deltaTime;
  }
  bats.forEach((x) => {
    x.draw(ctx);
    x.update();
  });
}

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((x) => {
    x.update();
    x.draw();
  });
  andrew.draw(ctx);
  andrew.update(input);
  handleEnemies(deltaTime);
  requestAnimationFrame(animate);
}

animate(0);
