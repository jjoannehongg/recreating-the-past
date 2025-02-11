// number of rows and columns
let rows = 10;
let cols = 10;

// height and width of rectangles
let height = 50;
let width = 45;

function setup() {
  createCanvas(600, 840);
}

function draw() {
  background(255, 255, 255);
  
  frameRate(2);
 
  // center all rectangles, find start position
  // all rectangles start with a bit of overlap
  let currentXPos = (600 - (width) * cols)/2;
  let currentYPos = (840 - (height) * rows)/2;
  
  // randomization factor
  let randomX = 0
  let randomY = 0

  // create all rectangles
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      // generate random factor for positioning
      randomX = random(-8,8)
      randomY = random(-8,8)
     
      // make all rectangles slightly transparent
      noStroke();
      fill(144, 68, 46, 180);

      // add random factor for positioning
      rect(currentXPos + randomX, currentYPos + randomY, width, height);
      currentXPos += width - 4;
    }

    currentYPos += height - 4;

    //reset horizontal position for new row
    currentXPos = (600 - width * cols)/2;
  }
}
