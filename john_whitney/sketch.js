function setup() {
  createCanvas(800, 800);

  noFill();
  strokeWeight(8);
}

function draw() {
  background(0);

  stroke(240, 201, 100, 100);

  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(255, 118, 232);

  width1 = 160 * sin(frameCount * 0.01);
  ellipse(400, 400, width1, 500);
  ellipse(400, 400, width1, 500);
  ellipse(400, 400, width1, 500);
  ellipse(400, 400, width1, 500);
  ellipse(400, 400, width1, 500);

  stroke(143, 180, 255, 100 );
  drawingContext.shadowColor = color(86, 142, 255);

  width2 = 160 * sin((frameCount + 100) * 0.01);
  ellipse(400, 400, width2, 500);
  ellipse(400, 400, width2, 500);
  ellipse(400, 400, width2, 500);
  ellipse(400, 400, width2, 500);
  ellipse(400, 400, width2, 500);

  stroke(251, 255, 90, 100);
  drawingContext.shadowColor = color(251, 255, 90);

  width3 = 160 * sin((frameCount) * 0.01);
  ellipse(400, 350, width3, 500);
  ellipse(400, 350, width3, 500);
  ellipse(400, 350, width3, 500);
  ellipse(400, 350, width3, 500);
  ellipse(400, 350, width3, 500);

  stroke(210, 218, 234, 100);
  drawingContext.shadowColor = color(210, 218, 234);
  
  width4 = 160 * sin((frameCount + 200) * 0.01);
  ellipse(400, 450, width4, 500);
  ellipse(400, 450, width4, 500);
  ellipse(400, 450, width4, 500);
  ellipse(400, 450, width4, 500);
  ellipse(400, 450, width4, 500);

  stroke(255, 86, 247, 100);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(255, 86, 247);

  width5 = 220 * sin((frameCount + 250) * 0.01);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  ellipse(400, 400, width5, 600);
  

}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
