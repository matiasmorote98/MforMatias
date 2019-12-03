var diameter = 20; //declaring and intitalizing our variable
var beginning = 100;
var space = 50;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(71,25,128);


  stroke(random(255), random(255), random(200, 255));
   strokeWeight(5);
   fill(random(255), random(255), random(255));
   // four ellipses that follows my mouse and wiggle
   ellipse(mouseX + random(-2, 2), mouseY, diameter, diameter);
   ellipse(mouseX + random(-3, 3), mouseY + diameter, diameter, diameter); // uses operations
   ellipse(mouseX + random(-5, 5), mouseY + (diameter * 2), diameter, diameter);
   ellipse(mouseX + random(-10, 10), mouseY + (diameter * 3), diameter, diameter);


   //stroke weight for the "M"
   stroke(random(255), random(255), random(200,255));
    strokeWeight(50);
    fill(random(255), random(255), random(255));


   //expressions - Computer's can do math! - (+, -, *, / ), ellipses shaped to an "M"
  ellipse(beginning + (space * 0), 250, diameter, diameter);
  ellipse(beginning + (space * 1), 100, diameter, diameter);
  ellipse(40, 390, diameter, diameter);
  ellipse(70 , 320, diameter, diameter);
  ellipse(125, 180, diameter, diameter);
  ellipse(200, 200, diameter, diameter);
  ellipse(230, 250, diameter, diameter);
  ellipse(260, 200, diameter, diameter);
  ellipse(300, 100, diameter, diameter);
  ellipse(330, 180, diameter, diameter);
  ellipse(350, 255, diameter, diameter);
  ellipse(370, 335, diameter, diameter);
  ellipse(390, 400, diameter, diameter);
}
