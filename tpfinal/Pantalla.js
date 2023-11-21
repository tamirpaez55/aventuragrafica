class Pantalla {
  constructor(numero, fondo, lineas, aventura) {
    this.numero = numero;
    this.fondo = fondo;
    this.lineas = lineas;
    this.aventura = aventura;
    this.boton = new BotonContinuar(450, 500, 100, 40, "Continuar");
    this.clickeado = false
  }


  mostrar() {

    background(255);
    image(this.fondo[this.numero], 0, 0, 600, 600);
    fill(0, 0, 0, 200);
    rect(10, 25, 580, 130);
    fill(255);
    text(this.lineas[this.numero], 13, 35, 580, 110);
    this.boton.dibujar();
  }

  click() {
    if (this.boton.huboClick() && !this.clickeado) 
    {
      this.aventura.cambiarPantalla(this.numero + 1);
      this.clickeado = true;
    }
  }
}
