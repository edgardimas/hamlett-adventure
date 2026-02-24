import Player from "./Player.js";

const hamlettPict = new Image();
hamlettPict.src = "./views/assets/player/hamlett.png";

class Hamlett extends Player {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight, hamlettPict);
  }

  update(input) {
    super.update(input);
  }
}

export default Hamlett;
