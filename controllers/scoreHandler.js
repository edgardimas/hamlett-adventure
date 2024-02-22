class ScoreHandler {
  constructor() {
    this.count = 0;
  }
  displayStatusText(context, score) {
    context.fillStyle = "black";
    context.font = "40px Helvetica";
    context.fillText("Score: " + score, 20, 50);
  }
  update(score) {
    this.count = this.count + 1;
    if (this.count === 10) {
      this.count = 0;
    }
    if (this.count % 10 === 0) {
      return score + 1;
    } else {
      return score;
    }
  }
}

const scoreHandler = new ScoreHandler();

export default scoreHandler;
