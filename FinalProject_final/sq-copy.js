var width;
var height;
var svgContainer;
var data, totalPopulation=10000, populationSquare=300000, sideSquare;

//Setup function to:
// 1. create svg container
// 2. load json
// 3. define total population
// 4. population in one square

var setup = function(popBurough,callback){
    width = window.innerWidth*(popBurough/totalPopulation);
    height = window.innerHeight*.8;
    svgContainer = d3.select("body").append("svg")
                     .attr("width",width)
                     .attr("height",height);
    sideSquare = parseInt(Math.sqrt(populationSquare/(popBurough/(width*height))));
    console.log(popBurough +"--"+populationSquare);
    callback();
}
var x=0,y=0;
// Drawing population
// 1. append group element
// 2. loop over till population count
// 3. append rect for number of square for a particular population
// 4. return group element
var drawPopulation = function(pop,color){
    d3.range(parseInt(pop/populationSquare)).forEach(function(i){
        if(y>height){
            y=0;
            x=x+sideSquare;
        }
         svgContainer.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill",color)
                     .style("fill-opacity",0)
                     .transition()
                     .delay(i*1)
                     .duration(1)
                     .style("fill-opacity",1)
         y=y+sideSquare;
    })
}
   

// Start
// 1. call setup
// 2. draw initial total population
// 3. assign click events
// 4. in click event draw burough population 
// for(){

// }
console.log("test");
d3.json("squares.json",function(resp){
    data = resp;
    for(var bur in data){
        var popBurough = parseInt(data[bur]["total"]);
        setup(popBurough,function(){
            //When setup is complete
            drawPopulation(popBurough,"#888888");
            x=0;
            y=0;
            d3.selectAll(".btn").on("click",function(){

                d3.select("#check").text("There are 775749364 square feet of Residental Living Space in Manhattan");
                //alert("hey");
                var val = d3.select(event.target).html();
                if(val=="1"){
                    drawPopulation(data["manhattan"]["total"],data["manhattan"]["color"]);
                }else if(val=="2"){
                    drawPopulation(data["bronx"]["total"],data["bronx"]["color"]);
                }
                else if(val==3){
                    drawPopulation(data["queens"]["total"],data["queens"]["color"]);
                }
            })
        });
    }  
});  
   


