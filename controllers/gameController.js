import Hamlett from "../models/entities/players/Hamlett.js";
import { entityHandler } from "./entityHandler.js";
const canvas = document.getElementById("canvas1");
const CANVAS_WIDTH = (canvas.width = 1200); // the same width in the css
const CANVAS_HEIGHT = (canvas.height = 700);

export const hamlett = new Hamlett(CANVAS_WIDTH, CANVAS_HEIGHT);

export const gameController = {
  update(input) {
    hamlett.update(input);

    entityHandler.bats.forEach((enemy) => {
      if (
        hamlett.hitBox.x < enemy.hitBox.x + enemy.hitBox.width &&
        hamlett.hitBox.x + hamlett.hitBox.width > enemy.hitBox.x &&
        hamlett.hitBox.y + hamlett.hitBox.height > enemy.hitBox.y &&
        hamlett.hitBox.y < enemy.hitBox.y + enemy.hitBox.height
      ) {
        hamlett.gameOver = true;
      }
    });
  },
};
