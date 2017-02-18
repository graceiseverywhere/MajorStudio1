/*	Draw a rectangle if the user clicks in the left side 
of the screen, 
	draw a circle when the user clicks in the right 
	side of the screen.

*/
 

function setup (){
	createCanvas(600, 300);
	background(255, 20, 147);

}

function draw (){

}

function mousePressed() {
 if (mouseX > 300) {
	fill(100, 30, 45);
	rect(20, 100, 100, 50);
	
} else {(mouseX < 300)
	fill(50, 35, 40);
	ellipse(450, 100, 50, 50);

}
function mousePressed() {}
}