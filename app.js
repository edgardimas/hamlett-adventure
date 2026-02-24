import { Ground, Sky, Clouds, City } from "./models/layers/Layer.js";
import Hamlett from "./models/entities/players/Hamlett.js";
import { entityHandler } from "./controllers/entityHandler.js";
import scoreHandler from "./controllers/scoreHandler.js";
import inputHandler from "./controllers/inputHandler.js";
import { gameController, hamlett } from "./controllers/gameController.js";

//coba 4

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1200); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
const gameObjects = [Sky, Clouds, City, Ground];

let lastTime = 0;
let score = 0;
let gameSpeed = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((x) => {
    x.update();
    x.draw();
  });
  hamlett.draw(ctx);
  gameController.update(inputHandler);
  entityHandler.handleBats(ctx, deltaTime, gameSpeed);
  scoreHandler.displayStatusText(ctx, score, hamlett.gameOver);
  score = scoreHandler.update(score);
  if (gameSpeed <= 10) {
    gameSpeed = gameSpeed + 0.003;
  }
  if (!hamlett.gameOver) requestAnimationFrame(animate);
}

animate(0);
