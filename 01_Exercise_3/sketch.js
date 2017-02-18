/*
	Draw 25 circles, along a vertical line in the center of the 
	screen, evenly spaced. Make each circle larger than the previous one, 
	and have each of them have a different color.

*/



function setup() {
	createCanvas(600,1200);
}

function draw() {
  background (255);
	noStroke();
  var y = 0;
  for(var j=0; j<25; j++){
          var h = 25 + j * 5; 
          y = y + h/2; 
        
          var col = map(j, 0, 25, 0, 255);
          fill(random(255), 0, random (255));;
          ellipse(width/2, y, h,h);
          y = y + h/2 + 20; 
          
       }
   } 
	



