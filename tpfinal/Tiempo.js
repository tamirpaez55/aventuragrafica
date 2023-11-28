class Reloj {
  constructor(contador) {
    this.contador = contador;
    this.contadorInicial = 0;
    this.record = 0;
  }
  mostrar() {
    this.contador = round(millis() / 1000) - this.contadorInicial;
    fill(255);
    text(this.contador, 400, 378);
  }

  guardarRecord() {
    this.record = this.contador;
  }
  reiniciar() {
    this.contadorInicial = 0;
    this.contador = 0;
  }
}
