import { Ground, Sky, Clouds, City } from "./models/Layer.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);
const gameObjects = [Sky, Clouds, City, Ground];
// const ground = new Image();
// const input = new InputHandler();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((x) => {
    x.update();
    x.draw();
  });
  requestAnimationFrame(animate);
}

animate();
