let SIZE = 150;
let NUMBER_OF_CIRCLES = 400;
let AMPLITUDE = 150;

function setup() {
  createCanvas(800, 800);
  background(0);
  
  noStroke();
  
  // for (Valore di partenza; condizione per cui il for va avanti; come camia il valore ad ogni ciclo)
  for (let count = 0; count < NUMBER_OF_CIRCLES; count += 1) {
    // Operazioni
    let progress = count / NUMBER_OF_CIRCLES; // Valore normalizzato (0 - 1)

    // Posizione
    let centralX = width / 2;
    let x = sin(progress * 10) * AMPLITUDE + centralX;
    let y = height * progress;

    // Colore
    let r = 127 + sin(progress * 3) * 127;
    let g = 127 + sin(progress * 10) * 127;
    let b = 127 + sin(progress * 13) * 127;
    fill(r, g, b);

    circle(x, y, SIZE);
  }
}