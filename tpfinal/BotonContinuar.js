class BotonContinuar {
  constructor(x, y, width, height, texto) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.textoBoton = texto;
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
