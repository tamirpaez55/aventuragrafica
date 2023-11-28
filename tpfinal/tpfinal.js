let aventura;

function preload() {
  aventura = new Aventura();
  aventura.preload();
}

function setup() {
  createCanvas(600, 600);
  aventura.setup();
}

function draw() {
  aventura.draw();
}

function mousePressed() {
  aventura.mousePressed();
}
