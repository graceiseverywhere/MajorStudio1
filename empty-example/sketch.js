
var x = [];
var y = [];


function setup() {
	createCanvas(windowWidth,windowHeight);
}


function draw() {
	background(200);
	stroke(200,0,0);

	//draw a rectangle 
  	fill(255,192,203);
  	// noFill();
  	rect(mouseX-100, mouseY-100, 200, 200, 20);

  	//draw aline
  	line(0,0,mouseX, mouseY);

  	// draw a polygon with values 
  	fill(100);

  		beginShape();
  		for(var i=1; i<x. length; i++){
  			vertex(x[i], y[i]);
  			var coordinateText = x[i] + "," + y[i];
  			text(x[i] + "," + y[i], x[i], y[i]);

  	}
  	endShape(CLOSE);

}

function mouseReleased(){
		console.log("click: " + mouseX + "," + mouseY);

		append(x, mouseX);
		append(y,mouseY);
		console.log(x);
		console.log(y);
		//x, push();


}
