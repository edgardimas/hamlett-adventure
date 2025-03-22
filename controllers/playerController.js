import Hamlett from "../models/players/hamlett.js";

const canvas = document.getElementById("canvas1");
const CANVAS_WIDTH = (canvas.width = 1200);
const CANVAS_HEIGHT = (canvas.height = 700);

class PlayerController {
  constructor() {
    this.player = new Hamlett(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  resetPlayer() {
    this.player = new Hamlett(CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

// ✅ Export a singleton instance
const playerController = new PlayerController();
export default playerController;
