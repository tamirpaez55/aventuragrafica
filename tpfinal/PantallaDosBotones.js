class PantallaDosBotones {
  constructor(fondo, lineas, decision1, decision2, aventura) {
    this.decision1 = decision1;
    this.decision2 = decision2;
    this.fondo = fondo;
    this.lineas = lineas;
    this.aventura = aventura;
    this.botonA = new BotonA();
    this.botonB = new BotonB();
  }


  mostrar() {

    background(255);
    image(this.fondo, 0, 0, 600, 600);
    fill(0, 0, 0, 200);
    rect(10, 25, 580, 130);
    fill(255);
    text(this.lineas, 13, 35, 580, 110);
    this.botonA.dibujar();
    this.botonB.dibujar();
  }
  
  click() {
    if (this.botonA.huboClick()) {
      
      this.aventura.cambiarPantalla(this.decision1);
      console.log("Se hizo click en el Boton A");
      
    } else if (this.botonB.huboClick()) {
      
      this.aventura.cambiarPantalla(this.decision2);
      console.log("Se hizo click en el Boton B");
    }
  }
}
