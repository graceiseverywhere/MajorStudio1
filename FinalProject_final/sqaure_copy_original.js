var data, totalSquares=3408391323, sideSquare=5;
var totalPopulation= 8184899; 
var x=0,y=0;

var setup = function(squaresBorough, white, hispanic, black, asian, callback){
    //width = window.innerWidth*(popBurough/totalPopulation);
    var w = 1060, h = 460;
    width = (w*squaresBorough)/totalSquares; 

    var svg=d3.select("body").append("svg")
         .attr("width",width)
         .attr("height",h);
    x=0,y=0;
    var numberofsquare = Math.ceil((width*h)/(sideSquare*sideSquare));
    numberofsquare =  drawSquares(numberofsquare,svg, "#ccc",true);
    x=0,y=0;
    var whitesq = numberofsquare*white; 
    var hispanicsq = numberofsquare*hispanic;
    var blacksq = numberofsquare*black;  
    var asiansq = (numberofsquare - whitesq-hispanicsq-blacksq); 
    drawSquares(whitesq, svg, "#ffff66");
    drawSquares(hispanicsq, svg, "#ccff66");
    drawSquares(blacksq, svg, "#ff6600");
    drawSquares(asiansq, svg, "#ccffff");
    callback();
}


 var drawSquares = function(squarenumber,svgContainer, color, drawFull){
    var g = svgContainer.append("g");
    var sqCt = 0;
    d3.range(squarenumber).forEach(function(i){
        if(y>460){
            y=0;
            x=x+sideSquare;
        }
         g.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill", color)
                     .style("fill-opacity",0)
                     .transition()
                     .delay(i*1)
                     .duration(1)
                     .style("fill-opacity",1)
         y=y+sideSquare;
         sqCt = i;
    });
    if(drawFull){
        while(y<460){
            g.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill", color)
                     .style("fill-opacity",0)
                     .transition()
                     .delay((++sqCt)*1)
                     .duration(1)
                     .style("fill-opacity",1)
            y=y+sideSquare;
        }
        return sqCt;
    }
}
   

d3.json("squares.json",function(resp){
    data = resp;
    data.forEach(function(bur,i){
        var popBurough = parseInt(bur["squares"]);
        var whiteborough = bur["white"];
        var hispanicborough = bur["hispanic"]; 
        var blackborough = bur["black"]; 
        var asianborough = bur["asian"]; 


        setup(popBurough,whiteborough,hispanicborough, blackborough, asianborough,function(){
            
        });
    })  
});  
   


