let SIZE = 150;
let NUMBER_OF_CIRCLES = 200;
let AMPLITUDE = 150;
let time = 0;

function setup() {
  createCanvas(800, 800);
  
  noStroke();
}

function draw() {
  time += deltaTime / 1000;
  
  background(0);

  // for (Valore di partenza; condizione per cui il for va avanti; come camia il valore ad ogni ciclo)
  for (let count = 0; count < NUMBER_OF_CIRCLES; count += 1) {
    // Operazioni
    let progress = count / NUMBER_OF_CIRCLES; // Valore normalizzato (0 - 1)

    // Posizione
    let centralX = width / 2;
    let x = sin(progress * 10 + time * 1) * AMPLITUDE + centralX;
    let y = height * map(progress, 0, 1, 0.2, 0.8);

    // Colore
    let r = 127 + sin(progress * 3) * 127;
    let g = 127 + sin(progress * 10) * 127;
    let b = 127 + sin(progress * 13) * 127;
    fill(r, g, b);

    // Disegna il cerchio
    let multiplier = sizeMultiplier(time, progress); // 0 - 1
    multiplier = map(multiplier, 0, 1, 0.5, 1.5); // 0.5 - 1.5

    circle(x, y, SIZE * multiplier);
  }
}


// La funzione restituisce un valore tra 0 e 1 che varia in modo sinusoidale e fluido basandosi su tempo e progress.
function sizeMultiplier(time, progress) {
  return 0.5 + 0.5 * sin(time * 2 + progress * 10);
}