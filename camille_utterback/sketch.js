let video;
let x, y;
let threshold;
let alphabet = ["홍", "시", "연"];
let textRain = [];
let num = 50;

class Letter {
  constructor(x,y) {
    this.t = random(alphabet);
    this.x = x;
    this.y = y;
    this.dy = 1;
  }
  
  update() {
    let color = video.get(this.x,this.y);
    let exp = brightness(color);
    
    if (exp > threshold * 100) {
      this.y += this.dy;
    } else {
      if (this.y > 0 && exp < threshold * 100) {
        this.y -= this.dy;
        color = video.get(this.x,this.y);
        exp = brightness(color);
      }
    }
    if (this.y >= height) {
      this.y = 1;
    }
  }
  
  display() {
    fill(255, 0, 0);
    text(this.t, this.x, this.y);
  }
}

function setup() {
  createCanvas(640, 480);

  video = createCapture(video);
  video.size(640, 480);
  video.hide();
  
  for (let i=0; i<num; i++) {
    let x = (width/num) * i;
    let y = 1;
    textRain[i] = new Letter(x,y);
  }
  
  threshold = 0.3; //filter threshold
}



function draw() {
  background(255);
  image(video, 0, 0, width, height);
  //filter(THRESHOLD, threshold);
  
  for (let i=0; i<num; i++) {
    textRain[i].update();
    textRain[i].display();
  }
}

