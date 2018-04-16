var mic;

function setup() {
  createCanvas(4000, 3000);
  mic = new p5.AudioIn();
  mic.start();
  background(0);
  
}

function draw() {
    var vol = mic.getLevel();
    var volumeC = map(vol, 0, 1, 0, 200);
    var volumeS = map(vol, 0, 1, 0, 400);
	textAlign(CENTER);
    
    stroke(0);
    strokeWeight(10);
    textSize(500 + volumeS);
    fill(0);
    text("THE", 2000, 1000);
	
	stroke(255);
    strokeWeight(2);
	fill(0);
    rect(950, 600, 100 + volumeS, 300);
	
	stroke(255);
    strokeWeight(2);
	fill(0);
    rect(2850, 2000, 350, 300 + volumeS);
	
	
	


	
   
	

	
	
	stroke(255);
    strokeWeight(2);
	fill(0);
    rect(1900, 1200, 1300, 1000);
	
	
   

	
	stroke(255);
    strokeWeight(2);
	fill(0);
    rect(950, 900, 100, 1050);
   
	

	

	
	stroke(255);
    strokeWeight(2);
    textSize(500 + volumeS);
    fill(0);
    text("SEEING", 2000, 1400);
	
	stroke(255);
    strokeWeight(2);
    textSize(500 + volumeS);
    fill(0);
    text("HERTZ", 2000, 1800);

}