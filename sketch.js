class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 25; 
    this.colour=color(255,random(100,200),random(150,255));
  }

  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1); 
    this.checkEdges(); 
  }

  checkEdges() {
    if (this.x < this.radius) {
      this.x = this.radius;
    } else if (this.x > width - this.radius) {
      this.x = width - this.radius;
    }
    if (this.y < this.radius) {
      this.y = this.radius;
    } else if (this.y > height - this.radius) {
      this.y = height - this.radius;
    }
  }

  show() {
    strokeWeight(5);
    stroke(this.colour);
    point(this.x, this.y);
  }
}

let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(38,28,100, 100);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    walkers.push(new Walker(x, y));
  }
}

function draw() {
  for (let walker of walkers) {
    walker.step();
    walker.show();
  }
}
