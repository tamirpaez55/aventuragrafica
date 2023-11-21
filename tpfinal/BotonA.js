class BotonA {
  constructor() {
    this.x = 140;
    this.y = 520;
    this.width = 60;
    this.height = 60;
    this.textoBoton = "A";
    this.clicked = false;
  }

  dibujar() {

    fill(200);
    rect(this.x, this.y, this.width, this.height);


    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.textoBoton, this.x + this.width / 2, this.y + this.height / 2);
  }

  huboClick() {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height && mousePressed) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
    return this.clicked;
  }
}
