let img;

function preload() {
  img = loadImage('image.JPG');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(38,38,38);

    fill(172,191,164)
    rectMode(CORNER)
    rect(windowWidth/3+20, windowHeight/3-40+50,800,180,15)
    
    fill(38,38,38)
    textAlign(LEFT)
    textStyle(NORMAL)
    textFont('Helvetica', 28)
    text("HELLO! MY NAME IS NAWARAT SAETANG.",windowWidth/3+40, windowHeight/3+50)
    text("MY NICKNAME IS PLOY.",windowWidth/3+40, windowHeight/3+55+50)
    text("I'M STUDYING AT DEPARTMENT OF INDUSTRIAL DESIGN.",windowWidth/3+40, windowHeight/3+110+50)
    
    fill(172,191,164)
    textAlign(CENTER)
    textStyle(BOLD)
    textFont('Helvetica', 45)
    text("PROFILE",windowWidth/2, windowHeight/6)

    fill(172,191,164)
    noStroke()
    rectMode(CENTER)
    rect(windowWidth/5, windowHeight/2-20+50, 320, 420, 15)
    
    imageMode(CENTER)
    image(img, windowWidth/5, windowHeight/2-20+50, 300, 400)
  }