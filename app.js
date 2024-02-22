import { Ground, Sky, Clouds, City } from "./models/Layer.js";
import InputHandler from "./controllers/inputHandler.js";
import andrew from "./models/Player.js";
import enemyHandler from "./controllers/enemyHandler.js";
import scoreHandler from "./controllers/scoreHandler.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
const gameObjects = [Sky, Clouds, City, Ground];
const input = new InputHandler();
let lastTime = 0;
let score = 0;

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
  enemyHandler.handleBats(ctx, deltaTime);
  scoreHandler.displayStatusText(ctx, score);
  score = scoreHandler.update(score);
  requestAnimationFrame(animate);
}

animate(0);
