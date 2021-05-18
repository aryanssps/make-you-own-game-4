var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("bg.jpg");
  bg2 = loadImage("stadium.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill(0);
  text("Score: " + score, 450, 50);

  if(score === 5) {
    clear()
    background(bg2)
    fill("red")
    textSize(40);
    text("STADIUM UNLOCKED",250, 200);
  }

  drawSprites()
}