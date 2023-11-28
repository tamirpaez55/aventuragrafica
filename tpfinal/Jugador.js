class Jugador {
  constructor(x, y, imagenes) {
    this.x = x;
    this.y = y;
    this.imagenes = imagenes;
    this.spriteActual = 0;
    this.vida = 200;
  }
  mostrar() {
    image(this.imagenes[round(this.spriteActual)], this.x, this.y, 50, 25);
  }

  calcularSiguienteSprite() {
    if (this.spriteActual >= this.imagenes.length - 1) {
      this.spriteActual = 0;
    } else {
      this.spriteActual += 1;
    }
  }

  mover(direccion) {
    if (direccion === 'DERECHA' && this.x < 380) {
      this.x += 2;
    } else if (direccion === 'IZQUIERDA' && this.x > 180) {
      this.x -= 2;
    }
  }
}
