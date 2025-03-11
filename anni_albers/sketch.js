function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  let cols = 30; 
  let rows = 30; 
  let w = width / cols;
  let h = height / rows;
  
  background(220);
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let choice = int(random(4)); 

      noStroke();

      fill(255, 72, 0); // Orange
      beginShape();
      if (choice === 0) {
        vertex(x, y);
        vertex(x + w, y);
        vertex(x, y + h);
      } else if (choice === 1) {
        vertex(x + w, y);
        vertex(x + w, y + h);
        vertex(x, y);
      } else if (choice === 2) {
        vertex(x, y);
        vertex(x + w, y);
        vertex(x + w, y + h);
      } else {
        vertex(x, y);
        vertex(x + w, y + h);
        vertex(x, y + h);
      }
      endShape(CLOSE);

      fill(89, 184, 222); // Blue
      beginShape();
      if (choice === 0) {
        vertex(x + w, y);
        vertex(x + w, y + h);
        vertex(x, y + h);
      } else if (choice === 1) {
        vertex(x, y);
        vertex(x, y + h);
        vertex(x + w, y + h);
      } else if (choice === 2) {
        vertex(x, y + h);
        vertex(x + w, y + h);
        vertex(x, y);
      } else {
        vertex(x + w, y);
        vertex(x + w, y + h);
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
