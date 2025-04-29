let input;

function setup() {
  createCanvas(600, 600);
  background(255);
  input = createInput('30-60-90');
  input.position(0, 600);
  input.input(generateDrawing);
  
  describe('input box takes format r-g-b where each letter corresponds to the angle of those lines');
  
  noLoop();
  generateDrawing();
}


function generateDrawing() {
  clear();
  
  let anglesStr = input.value();
  let angleStrings = anglesStr.split('-');
  
  // Parse each angle, ignore if not a valid number
  let angles = [];
  for (let s of angleStrings) {
    let a = parseFloat(s);
    if (!isNaN(a)) {
      angles.push(a);
    }
  }
  
  stroke(0);
  strokeWeight(1);
  
  let spacing = 5;
  
  // RED
  stroke('rgba(255, 0, 0, 0.7)');
  
  let rangleDeg = float(angles[0]);
  let rangle = radians(rangleDeg);

  // Calculate the vector direction of the lines
  let rdx = cos(rangle);
  let rdy = sin(rangle);

  // Find perpendicular vector (normalized)
  let rpdx = -rdy;
  let rpdy = rdx;

  let rdiagonal = sqrt(sq(width) + sq(height));
  let rsteps = int(rdiagonal / spacing) + 2;

  // Find center of canvas
  let rcx = width / 2;
  let rcy = height / 2;

  for (let i = -rsteps; i <= rsteps; i++) {
    let roffsetX = i * spacing * rpdx;
    let roffsetY = i * spacing * rpdy;

    let rx1 = rcx + roffsetX - rdx * rdiagonal;
    let ry1 = rcy + roffsetY - rdy * rdiagonal;
    let rx2 = rcx + roffsetX + rdx * rdiagonal;
    let ry2 = rcy + roffsetY + rdy * rdiagonal;

    line(rx1, ry1, rx2, ry2);
  }
  
  // GREEN
  stroke('rgba(100, 255, 0, 0.7)');

  let gangleDeg = float(angles[1]);
  let gangle = radians(gangleDeg);

  // Calculate the vector direction of the lines
  let gdx = cos(gangle);
  let gdy = sin(gangle);

  // Find perpendicular vector (normalized)
  let gpdx = -gdy;
  let gpdy = gdx;

  let gdiagonal = sqrt(sq(width) + sq(height));
  let gsteps = int(gdiagonal / spacing) + 2;

  // Find center of canvas
  let gcx = width / 2;
  let gcy = height / 2;

  for (let i = -gsteps; i <= gsteps; i++) {
    let goffsetX = i * spacing * gpdx;
    let goffsetY = i * spacing * gpdy;

    let gx1 = gcx + goffsetX - gdx * gdiagonal;
    let gy1 = gcy + goffsetY - gdy * gdiagonal;
    let gx2 = gcx + goffsetX + gdx * gdiagonal;
    let gy2 = gcy + goffsetY + gdy * gdiagonal;

    line(gx1, gy1, gx2, gy2);
  }
  
  // BLUE
  stroke('rgba(0, 0, 255, 0.5)');

  let bangleDeg = float(angles[2]);
  let bangle = radians(bangleDeg);

  // Calculate the vector direction of the lines
  let bdx = cos(bangle);
  let bdy = sin(bangle);

  // Find perpendicular vector (normalized)
  let bpdx = -bdy;
  let bpdy = bdx;

  let bdiagonal = sqrt(sq(width) + sq(height));
  let bsteps = int(bdiagonal / spacing) + 2;

  // Find center of canvas
  let bcx = width / 2;
  let bcy = height / 2;

  for (let i = -bsteps; i <= bsteps; i++) {
    let boffsetX = i * spacing * bpdx;
    let boffsetY = i * spacing * bpdy;

    let bx1 = bcx + boffsetX - bdx * bdiagonal;
    let by1 = bcy + boffsetY - bdy * bdiagonal;
    let bx2 = bcx + boffsetX + bdx * bdiagonal;
    let by2 = bcy + boffsetY + bdy * bdiagonal;

    line(bx1, by1, bx2, by2);
  }
}