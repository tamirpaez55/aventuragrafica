class Aventura {
  constructor() {
    this.pantallas = [];
    this.nFondos = 14;
    this.fondosHistoria = [];   
    this.pantalla = 0;
  }

  preload() {
    for (let i = 0; i < this.nFondos; i++) {
      this.fondosHistoria[i] = loadImage("data/fondo" + i + ".jpg");
    }
    

    this.lineas = loadStrings("data/texto.txt");
    this.lineasDecisiones = loadStrings("data/textodecisiones.txt");
  }

  setup() {
    createCanvas(600, 600);
    for (let i = 0; i < this.nFondos; i++) {
      let nuevaPantalla = new Pantalla(i, this.fondosHistoria, this.lineas, this);
      this.pantallas.push(nuevaPantalla);
    }
    this.pDecision1 = new PantallaDosBotones(4, this.fondosHistoria, this.lineas);
  }

  draw() {
    if (this.pantalla === 4 || this.pantalla === 8) {
      this.pDecision1.mostrar();
    } else {
      this.pantallas[this.pantalla].mostrar();
      console.log("Valor de this.pantalla" + this.pantalla);
    }
  }

  mousePressed() {
    this.pantallas[this.pantalla].click();
  }

  cambiarPantalla(numero) {
    this.pantalla = numero;
  }
}
