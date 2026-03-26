let SIZE = 150;
let NUMBER_OF_CIRCLES = 200;

function setup() {
  createCanvas(800, 800);
  background(0);
  
  noStroke();
  
  // for (Valore di partenza; condizione per cui il for va avanti; come camia il valore ad ogni ciclo)
  for (let count = 0; count < NUMBER_OF_CIRCLES; count += 1) {
    // Operazioni
    let progress = count / NUMBER_OF_CIRCLES; // Valore normalizzato (0 - 1)
    
    let x = width * progress;
    let y = height / 2;
    circle(x, y, SIZE);
  }
}