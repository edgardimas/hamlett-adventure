import Layer from "../models/layers/Layer.js";

const groundImage = new Image();
const cityImage = new Image();
const cloudsImage = new Image();
const skyImage = new Image();

groundImage.src = "./views/assets/ground.png";
skyImage.src = "./views/assets/sky.png";
cloudsImage.src = "./views/assets/clouds.png";
cityImage.src = "./views/assets/city.png";

// ✅ Create instances of layers
const Ground = new Layer(groundImage, 0.5);
const Sky = new Layer(skyImage, 0.5);
const Clouds = new Layer(cloudsImage, 0.2);
const City = new Layer(cityImage, 0.3);

export const layerController = {
  layers: [Sky, Clouds, City, Ground], // Store layers for easy access

  update(gameSpeed) {
    this.layers.forEach((layer) => layer.update(gameSpeed));
  },

  draw(ctx) {
    this.layers.forEach((layer) => layer.draw(ctx));
  },
};
