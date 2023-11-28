class Enemigo {
  constructor(x, y, imagenes, velx, vely, tX, tY) {
    this.x = x;
    this.y = y;
    this.imagenes = imagenes;
    this.spriteActual = 0;
    this.vida = 50;
    this.tamañoX = 15;
    this.tamañoY = 10;
    this.velX = velx;
    this.velY = vely;
    this.incrementoTamañoX = tX;
    this.incrementoTamañoY = tY;
  }

  mostrar() {

    image(this.imagenes[round(this.spriteActual)], this.x, this.y, this.tamañoX, this.tamañoY);
  }

  calcularSiguienteSprite() {
    if (this.spriteActual >= this.imagenes.length - 1) {
      this.spriteActual = 0;
    } else {
      this.spriteActual += 1;
    }
  }

  mover() {
    this.y += this.velY;
    this.x += this.velX;
    this.tamañoX += this.incrementoTamañoX;
    this.tamañoY += this.incrementoTamañoY;
  }
  reiniciar(velx, vely, tX, tY) {
    this.x = 295;
    this.y = 100;
    this.tamañoX = 15;
    this.tamañoY = 10;
    this.spriteActual = 0;
    this.vida = 50;
    this.velX = velx;
    this.velY = vely;
    this.incrementoTamañoX = tX;
    this.incrementoTamañoY = tY;
  }
}
