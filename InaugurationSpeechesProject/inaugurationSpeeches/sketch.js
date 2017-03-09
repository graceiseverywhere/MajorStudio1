/*	
*/
 
var counter = [],check;
var txt = [];
var sentiment = new Sentimood();

function preload () {

	for (var i=0; i<58; i++) {
		txt[i] = loadStrings("PresidentSpeeches/"+ i + ".txt");
	}


}

function setup (){
	createCanvas(windowWidth*10, windowHeight*5);
	background(255);
	
	for (var i=0; i<txt.length; i++) {
		  var fulltext = "";
		  for(var k=0;k<txt[i].length;k++){
		  	fulltext += txt[i][k];
		  }
		  fulltext = fulltext.replace(/[0-9]/g,"")
		  var words = fulltext.split(" ");
			var analysis = []; 


	// analyze each of the words for positive, negative, or by default neutral 
	for (k =0; k<words.length; k++) 
		{
			// if(i==0){
				var pos = (RiTa.getPosTags(words[k])[0]);
				var tags = ["jj", "jjr", "jjs", "rb", "rbr","rbs", "vb", "vbd"];
				if(tags.indexOf(pos)> -1 ){
					analysis.push(sentiment.analyze(words[k])) 
					noStroke();
					var wordc=analysis.length-1;
					if(analysis[wordc].positive.score>0){
						fill(150,255,70); 
						rect(280+1*wordc,220+i*30,2,15);
					} 
					else if(analysis[wordc].negative.score >0) {
						fill(255,0,80);
						rect(280+1*wordc,220+i*30,2,15);
					}
					else {
						fill(128,128,128); 
						rect(280+1*wordc,220+i*30,.3,15);
					}
			}
	}


		txt[i] = {
			 "count" : words.length,
			  "analysis" : analysis
			  };
			  		//print out the word lengths 

			textSize(32);
			fill(50);
			textSize(16);
			textStyle(NORMAL); 
			textFont("Big Caslon");
		  	text(txt[i].count, 180,200+ 30*(i+1));


			textSize(20);
			fill(50);
			textSize(12);
			textStyle(BOLD); 
			textFont("Big Caslon");
		  	text(presiNames[i], 40,200+ 30*(i+1));


		}; 

	//headers 
		textSize(13);
		textStyle(BOLD); 
		textFont("Big Caslon");
		text("PRESIDENT", 40, 190); 
		text("# OF WORDS", 180, 190); 
		text("USE OF POSITIVE, NEUTRAL, AND NEGATIVE WORDS USED THROUGHOUT THE SPEECH", 280, 190); 

		

fill(0); 
	textSize(28); 
	textFont("Big Caslon");
	// textStyle(BOLD);
	text("How do Inauguration Speeches Compare to Each Other?", 40, 40);

// dek style, font, and text
	textSize(16); 
	textFont("Helvetica");
	fill("#a5a4a4");
	textStyle(NORMAL);
	text("A comparative look into each president's speech lengths and the use of positive and negative words throughout. Adjectives, nouns, verbs and adverbs were evaluated using sentiment analysis from Sentimood.",  40, 55, 800, 200);
	// text(",40, 90);

	// key text
	textSize(12); 
	text (BOLD);
	text ("Positive", 50, 130);
	text ("Negative", 150, 130);
	text ("Neutral", 250, 130);
	// positive rect key box
	fill(150,255,70); 
	rect(40, 110, 5, 20);

	// negative rect key box
	fill(255,0,80); 
	rect(140, 110, 5, 20);

	// neutral rect key box
	fill(128,128,128); 
	rect(240, 110, 5, 20);



	}




function draw (){

}

