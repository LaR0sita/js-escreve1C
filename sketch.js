function setup() {
    createCanvas(600, 600);
  background("gray");
  }
  function draw() {
    stroke("black")
    fill("red")
    
    // console.log(mouseIsPressed)
    
    if(mouseIsPressed) {
        rect(mouseX, mouseY, 10, 10)
    } 
  }
  