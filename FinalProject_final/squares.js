var data, totalSquares=3408391323, sideSquare=5;
var totalPopulation= 8184899; 
var x=0,y=0;
// displaytext = function(){
//    document.getElementById("charttext").innerHTML = "Hello Dolly.";
// }

var setup = function(squaresBorough, burName,white, hispanic, black, asian, callback){
    //width = window.innerWidth*(popBurough/totalPopulation);

    var w = 1060, h = 460;
    width = (w*squaresBorough)/totalSquares; 
    x=0,y=0;
    var numberofsquare = Math.ceil((width*h)/(sideSquare*sideSquare));
    
    if(d3.select("svg."+burName).node()){
        var svg = d3.select("svg."+burName);
    }else{
        var svg=d3.select(".boroughsContainer").append("svg")
         .attr("width",width)
         .attr("height",h)
         .attr("class",burName);    
    }
    numberofsquare = drawSquares(numberofsquare,svg, "#ccc",true,burName,squaresBorough);
    x=0,y=0;
    var whitesq = numberofsquare*white; 
    var hispanicsq = numberofsquare*hispanic;
    var blacksq = numberofsquare*black;  
    var asiansq = (numberofsquare - whitesq-hispanicsq-blacksq); 
    drawSquares(whitesq, svg, "#ffff66",undefined,undefined,white*squaresBorough);
    drawSquares(hispanicsq, svg, "#ccff66",undefined,undefined,hispanic*squaresBorough);
    drawSquares(blacksq, svg, "#ff6600",undefined,undefined,black*squaresBorough);
    drawSquares(asiansq, svg, "#ccffff",undefined,undefined,asian*squaresBorough);
    
}

var projectTitle = function(){

}


 var drawSquares = function(squarenumber,svgContainer, color, drawFull,burName,pop){
    var g = svgContainer.append("g");
    var sqCt = 0;
    
    d3.range(squarenumber).forEach(function(i){
        if(y>460){
            y=0;
            x=x+sideSquare;
        }
         var temp = g.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1);

                     temp.style("fill", color)
                     .style("fill-opacity",0)
                     .attr("val",pop)
                     .transition()
                     .delay(i)
                     .duration(1)
                     .style("fill-opacity",1);

         temp.on('mouseover',function(){

            d3.select('.text_for_tooltipss').remove();
            // var for_text;
            // data.forEach(function(d){
            //         if(d.borough == burName){
            //             for_text = d.squares;
            //         }
            //     })
            // //  if(d3.select(this).style('fill') == "#ffff66"){
            // //     // for_text =  d.white; 
            // //     .text ("white");
            // // }
            
            g.append('text')
                .attr('class','text_for_tooltipss')
                .attr('x',d3.select(this).attr('x'))
                .attr('y',d3.select(this).attr('y'))
                .text(parseInt(parseInt(d3.select(this).attr("val"))/1000000) + "ml sq")
         });


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
   
var drawBuroughs = function(){
    d3.json("squares.json",function(resp){
        data = resp;
        data.forEach(function(bur,i){
            var popBurough = parseInt(bur["squares"]);
            setup(popBurough,bur["borough"]);
            d3.select( ".boroughsContainer")
                .append('p')
                .attr('class',"text_"+bur["borough"])
                // .attr('x',15)
                // .attr('y',10)    
                .style('fill','white')
                .style('position','absolute')
                .style('top','16.1%')
                .style('font-size','10px')
                .text(bur["borough"])
        })  
    });  
}

var drawRaces = function(){
    d3.json("squares.json",function(resp){
        data = resp;
        data.forEach(function(bur,i){
            var popBurough = parseInt(bur["squares"]);
            var whiteborough = bur["white"];
            var hispanicborough = bur["hispanic"]; 
            var blackborough = bur["black"]; 
            var asianborough = bur["asian"]; 
            setup(popBurough,bur["borough"],whiteborough,hispanicborough, blackborough, asianborough);

        })  
    });  
}
function hide_stuff(hide_01,hide_02){
    if(hide_01){
        $(".displaytext1").hide(); 
    }
    if(hide_02){
        $(".displaytext2").hide(); 
    }
};
hide_stuff(true,true);

$(".key").hide(); 

d3.selectAll(".btn").on("click",function(){
    // d3.select("check").text("There are 775749364 square feet of Residental Living Space in Manhattan");
    //alert("hey");
    var val = d3.select(event.target).html();
    if(val=="1" || val=="CLICK"){
        $('#chartgraphs').css('display','none');
        drawBuroughs(); 
        setInterval(function(){ $(".chart1").css("display","block")}, 3000);
        $(".intro").css("display","none");
        $(".displaytext1").show(); 
        hide_stuff(false,true);
        $(".key").hide(); 



    }else if(val=="2"){
        $('#chartgraphs').css('display','none');
        $('.displaytext1').css('display','none');
         $(".displaytext2").show(); 
        $(".key").show(); 

        drawRaces();
        hide_stuff(true,false);
    }

    else if(val=="3"){
        drawRaces();
        $('.boroughsContainer').css('display','none')
        $(".intro").css("display","none");
        $('.displaytext1').css('display','none');
        $('.displaytext2').css('display','none');
        // $('#chartgraphs').css('display','block');

         //////////////////
$.get('graphspage.svg', function(data) {

    var svg=$(document.body).append(data.documentElement);
    // svg.style("border","0");

    $('#activateda').hide();
    $('#activatedb').hide();
    $('#activatedc').hide();
    $('#activatedd').hide();
    $('#activatede').hide();
             
    // $('#buttona').click(function() {
    // $('#activateda').show();
    // });

    $('#buttona').hover(
        function mouseover() {
    $('#activateda').show();
    }, 
        
        function mouseleave() {
        $('#activateda').hide();
    });

    $('#buttonb').hover(
        function mouseover() {
    $('#activatedb').show();
    }, 
        
        function mouseleave() {
        $('#activatedb').hide();
    });

    $('#buttonc').hover(
        function mouseover() {
    $('#activatedc').show();
    }, 
        
        function mouseleave() {
        $('#activatedc').hide();
    });

$('#buttond').hover(
        function mouseover() {
    $('#activatedd').show();
    }, 
        
        function mouseleave() {
        $('#activatedd').hide();
    });

    $('#buttone').hover(
        function mouseover() {
    $('#activatede').show();
    }, 
        
        function mouseleave() {
        $('#activatede').hide();
    });

  

});
/////////////
        $(".key").hide(); 

    }
     else if(val=="4"){

        drawRaces();
        $('.boroughsContainer').css('display','none')
        $(".intro").css("display","none");
        $('.displaytext1').css('display','none');
        $('.displaytext2').css('display','none');


        $('#chartgraphs').css("display","none");
        $('#methods').css('display','block');
        $(".key").hide(); 

    };
})


   


