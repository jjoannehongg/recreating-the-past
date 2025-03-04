function setup() {
  createCanvas(600, 600);
  background(30);
  textSize(80);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  textStyle(BOLD);
  noLoop();
}

function draw() {

  function drawText(words, colors, offsetX, offsetY) {
    let col_random = Math.floor(Math.random() * 6);
    let col = colors[col_random];

    for (let i = 0; i < 2; i ++) {
      let word = words[i];
      fill(col);
      text(word, offsetX, -80*i + offsetY);
    }
    
  }


  let words = [ 'MESSAGES','MEANS'];
  let colors = [
    color(255,20,147, 200), // Pink
    color(255, 0, 0, 150),   // Red
    color(255, 165, 0, 200), // Orange
    color(255, 255, 0, 200), // Yellow
    color(0,128,0, 200),   // Green
    color(75, 0, 130, 1500)   // Indigo
  ];
  
  push();
  translate(width / 2, height / 2);
  rotate(PI / 4);
  drawText(words, colors, -150, 0);
  pop();
  
  push();
  translate(width / 2, height / 2);
  rotate(-PI / 4);
  drawText(words, colors, 200, 50);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(-PI / 4 + PI);
  drawText(words, colors, 200, 120);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(PI/ 4);
  drawText(words, colors, 200, 80);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(PI/ 4 + PI);
  drawText(words, colors, 200, 80);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(-PI / 4);
  drawText(words, colors, -180, -30);
  pop();
}
