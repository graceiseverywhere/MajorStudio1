/*
Tree Census for 2015 Project 1 

*/
// Make variables for Health Cateory Function  and for Status Category Function 


// Initializing variables for counting Health Category
var fairCount=0;
var goodCount=0; 
var poorCount=0; 
var naCount=0;

// make variables for percentages that will go on the right side with bar chart for health category 
var percentGood;
var percentFair;
var percentPoor;
var percentNa;

// Initializing variables for counting Status Category
var aliveCount=0;
var deadCount=0; 
var stumpCount=0; 

// make variables for percentages that will go on the right side with bar chart for health category 
var percentAlive;
var percentDead;
var percentStump;

var table;
var	x = 300; 
var	y = 100; 

function preload() {
	table = loadTable("2015_street_tree_census_CambriaHeights.csv","csv", "header");
}

function setup() { 
	createCanvas(windowWidth, 1500);
	background(255);



//header style, font, and text 
	fill(0); 
	textSize(24); 
	textFont("Helvetica");
	textStyle(BOLD);
	text("Trees Census in Cambria Heights, Queens, 2015", 55, 70);

// dek style, font, and text
	textFont("Helvetica");
	fill("#a5a4a4");
	textStyle(NORMAL);
	text("A data visualization breakdown of their Health and Status", 55, 100);

	 displayStatus();

}
// Shows this Health Category by default 
function displayHealth() { 

//Making the circles 

	for (var i=0; i <265; i++)
	{
		if (i%17 == 0)
		{ x = 65; 
		 y = y+45; }; 

		noStroke();

		//table for health 
	
		var health = table.getColumn("health"); 
		if(health[i] == "Fair")
			{fill(255, 216, 0);
				fairCount++}
		else if(health[i] == "Good")
			{fill('#3ae83a');
			goodCount++}
		else if(health[i] == "Poor")
			{fill('#a54208');
				poorCount++}
		else if(health[i] == " ")
			{fill('#c4c6c4');
	            naCount++}
		ellipse(x,y, 25, 25) 
		x = x + 45; 

}
}

// /*var healthClick = 0; 
// mouseClicked(); {
// 	if(healthClick = 0){
// 		// load Health Category

// 		healthClick = 1; 
// 	}
// 	else {
// 		//load Status Category, 
// } 

// }
// */

// // Health Category black bar that goes on the right 
	

// 	fill(0); 
// 	rect (900, 135, 240, 40);

// // Health Category white bar 
// 	fill(255); 
// 	rect (906, 165, 228, 2);
// 	fill(255); 

// // Health Category text 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	text("Health", 906, 160);

// // Bar Length for "Good" Status 
// 	noStroke(); 
// 	fill('#3ae83a'); 
// 	rect(900, 190, goodCount*1.5, 20);

// // Text for "Good" Status 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Good", 906, 206);

// // Text for "Good" Percentage
// 	// percentGood = Math.round((goodCount/265) *100);
// 	// fill('#999491'); 
// 	// text(percentGood+"%",850, 206);

// // Bar Length for "Fair" Status 
// 	noStroke(); 
// 	fill(255, 216, 0); 
// 	rect(900, 220, fairCount*1.5, 20);

// // Text for "Fair" Status 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Fair", 906, 236);

// // Text for "Fair" Percentage
// 	// percentFair = Math.round((fairCount/265) *100);
// 	// fill('#999491'); 
// 	// text(percentFair +"%", 850, 236);

// // Bar Length for "Poor" Status 
// 	noStroke(); 
// 	fill('#a54208'); 
// 	rect(900, 250, poorCount*1.5, 20);

// // Text for "Poor" Status 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Poor", 906, 266);

// // Text for "Poor" Percentage
// 	// percentPoor = Math.round((poorCount/265) *100);
// 	// fill('#999491'); 
// 	// text(percentPoor + "%", 850, 266);


// // Bar Length for "NA" Status 
// 	noStroke(); 
// 	fill('#c4c6c4'); 
// 	rect(900, 280, naCount*1.5, 20);

// // Text for "NA" Status 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Not Available", 906, 296);

// // Text for "Not Available" Percentage
// 	// percentNa = Math.round((naCount/265) *100);
// 	// fill('#999491'); 
// 	// text(percentNa + "%", 850, 296);


// // Status Header black rule when Health Category is displayed
// 	fill(0); 
// 	rect (906, 370, 228, 2);
// 	fill(255); 

// // Status Header black text when Health Category is displayed
// 	fill (0);
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(BOLD);
// 	text("Status", 906, 365);

// // Text for "Alive" Status when Health Category is displayed
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Alive", 906, 411);


// // Text for "Dead" Status when Health Category is displayed
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Dead", 906, 441);

// // Text for "Stump" Status 
// 	textSize(20); 
// 	textFont("Courier New");
// 	textStyle(NORMAL);
// 	fill(0);
// 	text("Stump", 906, 471);


// //To make the bar charts use either fairCount*1.5 or map(fairCount, 0, 265, 900, width-80), 

// }


// function draw(){

// }

// var rectHealth = (900, 135, 240, 40);


// function mouseOver () {
// 	 if (mouseX = rectHealth) {
// 		displayStatus();

// }

//  else if (mouseX < 300){
// 	 	displayHealth();
// 	void displayStatus
// }

// }


function displayStatus() {
		for (var i=0; i <265; i++)
	{
		if (i%17 == 0)
		{ x = 65; 
		 y = y+45; }; 

		noStroke();

		//table for status 
	
		var status = table.getColumn("status"); 
		if(status[i] == "Alive")
			{fill('#3ae83a');
				aliveCount++}
		else if(status[i] == "Dead")
			{fill("red");
			deadCount++}
		else if(status[i] == "Stump")
			{fill('#8823ed');
				stumpCount++}
		else if(status[i] == " ")
			{fill('#c4c6c4');
	            naCount++}
		ellipse(x,y, 25, 25) 
		x = x + 45; 

}
// How Health Categories will show when Status is fully displayed 
// Health Category white bar that goes on the right 
	fill(255); 
	rect (900, 135, 240, 40);

// Health Category black bar rule
	fill(0); 
	rect (906, 165, 228, 2);
	fill(255); 

// Health Category text 
	fill(0); 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	text("Health", 906, 160);

// // Bar Length for "Good" Status 
// 	noStroke(); 
// 	fill('#3ae83a'); 
// 	rect(900, 190, goodCount*1.5, 20);

// Text for "Good" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Good", 906, 206);

// Text for "Good" Percentage
	// percentGood = Math.round((goodCount/265) *100);
	// fill('#999491'); 
	// text(percentGood+"%",850, 206);

// // Bar Length for "Fair" Status 
// 	noStroke(); 
// 	fill(255, 216, 0); 
// 	rect(900, 220, fairCount*1.5, 20);

// Text for "Fair" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Fair", 906, 236);

// Text for "Fair" Percentage
	// percentFair = Math.round((fairCount/265) *100);
	// fill('#999491'); 
	// text(percentFair +"%", 850, 236);

// Bar Length for "Poor" Status 
	noStroke(); 
	fill('#a54208'); 
	rect(900, 250, poorCount*1.5, 20);

// Text for "Poor" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Poor", 906, 266);

// Text for "Poor" Percentage
	// percentPoor = Math.round((poorCount/265) *100);
	// fill('#999491'); 
	// text(percentPoor + "%", 850, 266);


// Bar Length for "NA" Status 
	noStroke(); 
	fill('#c4c6c4'); 
	rect(900, 280, naCount*1.5, 20);

// Text for "NA" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Not Available", 906, 296);

// Text for "Not Available" Percentage
	// percentNa = Math.round((naCount/265) *100);
	// fill('#999491'); 
	// text(percentNa + "%", 850, 296);

// Status Header black rule when Health Category is displayed
	fill(0); 
	rect (906, 370, 228, 2);
	fill(255); 


// Category Status // black bar 
	fill(0); 
	rect (900, 341, 240, 40);

 // Status Header white rule When Status is moused over 
	fill(255); 
	rect (906, 370, 228, 2);

 // Status Header text When Status is moused over 

	fill (255);
	textSize(20); 
	textFont("Courier New");
	textStyle(BOLD);
	text("Status", 906, 365);

// Bar Length for "Alive" Status 
	noStroke(); 
	fill('#3ae83a'); 
	rect(900, 395, aliveCount*1.0, 20);

// Text for "Alive" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Alive", 906, 411);

// Text for "Alive" Percentage
	percentAlive = Math.round((aliveCount/265) *97);
	fill('#999491'); 
	text(percentAlive+"%",850, 411);

// Bar Length for "Dead" Status 
	noStroke(); 
	fill("red"); 
	rect(900, 425, deadCount*1.0, 20);

// Text for "Dead" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Dead", 906, 441);

// Text for "Dead" Percentage
	percentDead = Math.round((deadCount/265) *97);
	fill('#999491'); 
	text(percentDead +"%", 850, 441);

// Bar Length for "Stump" Status 
	noStroke(); 
	fill('#8823ed'); 
	rect(900, 455, stumpCount*1.0, 20);

// Text for "Stump" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Stump", 906, 471);

// Text for "Stump" Percentage
	percentStump = Math.round((stumpCount/265) *97);
	fill('#999491'); 
	text(percentStump + "%", 850, 471);

/*
// Bar Length for "Not Available" Status 
	noStroke(); 
	fill('#c4c6c4'); 
	rect(900, 485, naCount*1.2, 20);

// Text for "Not Available" Status 
	textSize(20); 
	textFont("Courier New");
	textStyle(NORMAL);
	fill(0);
	text("Not Available", 906, 501);

// Text for "Not Available" Percentage
	percentNa = Math.round((naCount/265) *100);
	fill('#999491'); 
	text(percentNa + "%", 850, 501);
*/

}

 /*


	}


/*
function draw() {

*/