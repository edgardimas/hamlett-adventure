import { layerController } from "./controllers/layerController.js";
import playerController from "./controllers/playerController.js";
import { enemyHandler } from "./controllers/enemyHandler.js";
import scoreHandler from "./controllers/scoreHandler.js";
import inputHandler from "./controllers/inputHandler.js";
import { gameController } from "./controllers/gameController.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1200);
const CANVAS_HEIGHT = (canvas.height = 700);

let lastTime = 0;
let score = 0;
let gameSpeed = 0;
const hamlett = playerController.player; // ✅ Get player instance from controller

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // ✅ Update & draw background layers
  layerController.update(gameSpeed);
  layerController.draw(ctx);

  // ✅ Player updates & draws
  hamlett.update(inputHandler); // ✅ Fix: Update before drawing
  hamlett.draw(ctx);

  // ✅ Handle game logic
  gameController.update(inputHandler);

  // ✅ Enemy updates
  enemyHandler.handleBats(ctx, deltaTime, gameSpeed);

  // ✅ Score updates
  scoreHandler.displayStatusText(ctx, score, hamlett.gameOver);
  score = scoreHandler.update(score);

  // ✅ Gradually increase game speed
  if (gameSpeed <= 10) gameSpeed += 0.003;

  if (!hamlett.gameOver) requestAnimationFrame(animate);
}

animate(0);
