function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON("colors.json", showData);
  console.log("hello world");

}

function showData(colors){
  console.log(colors.red);
  fill(colors.green);
  textSize(50);
  text(colors.green, width/2, height/2);

  //console.log("data has been loaded");
}
