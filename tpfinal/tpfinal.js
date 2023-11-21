let aventura;

function preload() {
  aventura = new Aventura();
  aventura.preload();
}

function setup() {
  aventura.setup();
}

function draw() {
  aventura.draw();
}

function mousePressed() {
  aventura.mousePressed();
}
/*let pantallas = [];
 let nFondos = 15;
 let fondo = [];
 let pantalla = 0;
 
 function preload() {
 
 
 for (let i = 0; i < nFondos; i++) {
 fondo[i] = loadImage("data/fondo" + i + ".jpg");
 }
 
 lineas = loadStrings("data/texto.txt");
 
 
 
 
 }
 function setup() {
 createCanvas(600, 600);
 boton = new BotonContinuar(450, 500, 100, 40, "Continuar");
 for (let i = 0; i < nFondos; i++) {
 let nuevaPantalla = new Pantalla(i);
 pantallas.push(nuevaPantalla);
 }
 }
 
 function draw() {
 pantallas[pantalla].mostrar();
 boton.dibujar();
 }
 
 function mousePressed() {
 //el boton solo se tiene encargar de saber que lo tocaron
 if (boton.isMouseOver()) {
 console.log("Botón presionado");
 pantalla += 1;
 pantallas[pantalla].mostrar();
 }
 }*/
