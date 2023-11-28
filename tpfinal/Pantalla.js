class Pantalla {
  constructor(fondo, lineas, pSiguiente, aventura) {
    this.pSiguiente = pSiguiente;
    this.fondo = fondo;
    this.lineas = lineas;
    this.aventura = aventura;
    this.boton = new BotonContinuar(450, 500, 100, 40, "Continuar");
    this.clickeado = false;
  }


  mostrar() {

    background(255);
    image(this.fondo, 0, 0, 600, 600);
    fill(0, 0, 0, 200);
    rect(10, 25, 580, 130);
    fill(255);
    text(this.lineas, 13, 35, 580, 110);
    this.boton.dibujar();
  }

  click() {
    if (this.boton.huboClick() && !this.clickeado) 
    {
      this.aventura.cambiarPantalla(this.pSiguiente);
      this.clickeado = true;
    }
  }
}
