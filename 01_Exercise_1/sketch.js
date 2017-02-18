/*
	Draw a rectangle, an ellipse and a triangle, each with 
	different colors for outlines and fill.
*/

function setup() {
createCanvas(windowWidth, windowHeight);
}	

function draw() {
	background(255, 20, 147);	
		//draw a rectangle
	stroke('red');
	strokeWeight(7);
	fill(127, 255, 0);
	rect(150, 70, 100, 40);

	// draw an ellipse 
	stroke(255);
	strokeWeight(10);
	fill(255, 204, 0); 
	ellipse(350, 70, 100,100);

	// draw a triangle 
	stroke(127, 255, 0);
	strokeWeight(4);
	fill(0, 0, 255);
	triangle(50, 140, 75, 50, 100, 140); 
	}
	console.log()


