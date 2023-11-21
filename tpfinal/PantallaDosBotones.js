class PantallaDosBotones {
  constructor(numero, fondo, lineas) {
    this.numero = numero;
    this.fondo = fondo;
    this.lineas = lineas;
    this.aventura = aventura;
    this.botonA = new BotonA();
    this.botonB = new BotonB();
  }


  mostrar() {

    background(255);
    image(this.fondo[this.numero], 0, 0, 600, 600);
    fill(0, 0, 0, 200);
    rect(10, 25, 580, 130);
    fill(255);
    text(this.lineas[this.numero], 13, 35, 580, 110);
    this.botonA.dibujar();
    this.botonB.dibujar();
  }
  
  click() {
    if (this.botonA.huboClick()) {
      this.aventura.cambiarPantalla(this.numero + 1);
    } else if (this.botonB.huboClick()) {
      this.aventura.cambiarPantalla(11);
    }
  }
