let balls = []

function spawn() {
  for (var i = 0; i < 200; i++) {
    ball = new Ball();
    balls.push(ball);
  }
}

function setup() {
  var width = displayWidth;
  var height = displayHeight;
  createCanvas(width, height)
  background(50, 50, 50)
  spawn()
  cursor(HAND);

}

class Ball {
  constructor(mass, x, y) {
    this.mass = (Math.random() * 50);
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    var mousedir = mouseX - width / 2;

  }
}

function tick(ball) {
  ball.x -= (xmove * ball.mass * 0.001);
  ball.y -= (ymove * ball.mass * 0.001);
  
  if (ball.y <= height * 1.5){
    strokeWeight(0);
    fill(256, ball.y / 5);
    ellipse(ball.x, ball.y, ball.mass, ball.mass)
  }
  
}

function keyPressed() {
  balls = []
  spawn();
}

function draw() {
  background(50, 50, 50);

  var mousedirx = mouseX - width / 2;
  var mousediry = mouseY - height / 2;  
  xmove = (mousedirx);
  ymove = ( mousediry);

  balls.forEach(tick);

}
