

// // var setup = function(squaresBorough, burName,white, hispanic, black, asian, callback){
// //     //width = window.innerWidth*(popBurough/totalPopulation);

// //     var w = 1060, h = 460;
// //     width = (w*squaresBorough)/totalSquares; 
// //     x=0,y=0;
// //     var numberofsquare = Math.ceil((width*h)/(sideSquare*sideSquare));
    
// //     if(d3.select("svg."+burName).node()){
// //         var svg = d3.select("svg."+burName);
// //     }else{
// //         var svg=d3.select(".boroughsContainer").append("svg")
// //          .attr("width",width)
// //          .attr("height",h)
// //          .attr("class",burName);    
// //     }
// //     numberofsquare = drawSquares(numberofsquare,svg, "#ccc",true,burName,squaresBorough);
// //     x=0,y=0;
// //     var whitesq = numberofsquare*white; 
// //     var hispanicsq = numberofsquare*hispanic;
// //     var blacksq = numberofsquare*black;  
// //     var asiansq = (numberofsquare - whitesq-hispanicsq-blacksq); 
// //     drawSquares(whitesq, svg, "#ffff66",undefined,undefined,white*squaresBorough);
// //     drawSquares(hispanicsq, svg, "#ccff66",undefined,undefined,hispanic*squaresBorough);
// //     drawSquares(blacksq, svg, "#ff6600",undefined,undefined,black*squaresBorough);
// //     drawSquares(asiansq, svg, "#ccffff",undefined,undefined,asian*squaresBorough);
    
// // }

// var projectTitle = function(){

// }
   


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
 $('.displaytext3').css('display','none');


d3.selectAll(".btn").on("click",function(){

    var val = d3.select(event.target).html();
    if(val=="1" || val=="CLICK"){

        $('#chartgraphs').css('display','none');
        // drawBuroughs(); 
        setInterval(function(){ $(".chart1").css("display","block")}, 3000);
        $(".intro").css("display","none");
        $(".displaytext1").show(); 
        $('.displaytext2').css('display','none');
        $('.displaytext3').css('display','none');
        hide_stuff(false,true, true);
        $(".key").hide(); 

$.get('boroughs.svg', function(data) {
    $('#boroughsSVG').fadeIn("slow");
    console.log("test-get");
        var svg=$(document.body).append(data.documentElement);
// $('#basequares').fadeto("slow",0.25);

    $('#brooklynactivate').hide();
    $('#queensactivate').hide();
    $('#manhattanactivate').hide();
    $('#bronxactivate').hide();
    $('#statenactivate').hide();
            
/*    $('#brooklynbutton').hover(
        function() {
    $('#brooklynactivate').show();
    }, 
        function() {
        $('#brooklynactivate').hide();
    });*/

   $('#brooklynbutton').hover(
        function() {
    $('#brooklynactivate').show();
    }, 
        function() {
        $('#brooklynactivate').hide();
    });


    $('#queensbutton').hover(
        function() {
    $('#queensactivate').show();
    }, 
        function() {
        $('#queensactivate').hide();
    });

    $('#manhattanbutton').hover(
        function mouseover() {
    $('#manhattanactivate').show();
    }, 
        function mouseleave() {
        $('#manhattanactivate').hide();
    });

    $('#bronxbutton').hover(
        function mouseover() {
    $('#bronxactivate').show();
    }, 
        function mouseleave() {
        $('#bronxactivate').hide();
    });

    $('#statenbutton').hover(
        function mouseover() {
    $('#statenactivate').show();
    }, 
        function mouseleave() {
        $('#statenactivate').hide();
     });

  

});
/////////////
        $(".key").hide(); 

    }else if(val=="2"){
        $('#chartgraphs').css('display','none');
        $('.displaytext1').css('display','none');
        $(".displaytext2").show(); 
        $(".key").show(); 
        $('.displaytext3').css('display','none');
        // drawRaces();
        hide_stuff(true,false);
        $('#Layer_1').css('display','none');
        $('#Layer_3').css('display','none');
        $('#boroughsSVG').css('display','none');



        $.get('idealraces.svg', function(data) {
        var svg=$(document.body).append(data.documentElement);
        // $('#idealbase').fadeto("slow",0.25);

        $('#brooklynwhiteactivate').hide();
        $('#brooklynafricanactivate').hide();
        $('#brooklynasianactivate').hide();
        $('#brooklynotheractivate').hide();
        $('#brooklynhispanicactivate').hide();

        $('#queenswhiteactivate').hide();
        $('#queensafricanactivate').hide();
        $('#queensindianactivate').hide();
        $('#queensasianactivate').hide();
        $('#queensotheractivate').hide();
        $('#queenshispanicactivate').hide();


        $('#manhattanwhiteactivate').hide();
        $('#manhattanafricanactivate').hide();
        $('#manhattanasianactivate').hide();
        $('#manhattanotheractivate').hide();
        $('#manhattanhispanicactivate').hide();


        $('#bronxwhiteactivate').hide();
        $('#bronxafricanactivate').hide();
        $('#bronxindianactivate').hide();
        $('#bronxasianactivate').hide();
        $('#bronxotheractivate').hide();
        $('#bronxhispanicactivate').hide();

        $('#statenwhiteactivate').hide();
        $('#statenafricanactivate').hide();
        $('#statenasianactivate').hide();
        $('#statenotheractivate').hide();
        $('#statenhispanicactivate').hide();


//Brooklyn mouse over moves for each race 
        $('#brooklynwhitebutton').hover(
            function mouseover() {
        $('#brooklynwhiteactivate').show();
        }, 
        function mouseleave() {
        $('#brooklynwhiteactivate').hide();
        });

        $('#brooklynafricanbutton').hover(
            function mouseover() {
        $('#brooklynafricanactivate').show();
        }, 
        function mouseleave() {
        $('#brooklynafricanactivate').hide();
        });


        $('#brooklynasianbutton').hover(
            function mouseover() {
        $('#brooklynasianactivate').show();
        }, 
        function mouseleave() {
        $('#brooklynasianactivate').hide();
        });


        $('#brooklynotherbutton').hover(
            function mouseover() {
        $('#brooklynotheractivate').show();
        }, 
        function mouseleave() {
        $('#brooklynotheractivate').hide();
        });


        $('#brooklynhispanicbutton').hover(
        function mouseover() {
        $('#brooklynhispanicactivate').show();
        }, 
        function mouseleave() {
        $('#brooklynhispanicactivate').hide();
           });

        //Queens mouse over moves for each race 
        $('#queenswhitebutton').hover(
            function mouseover() {
        $('#queenswhiteactivate').show();
        }, 
        function mouseleave() {
        $('#queenswhiteactivate').hide();
        });

        $('#queensafricanbutton').hover(
            function mouseover() {
        $('#queensafricanactivate').show();
        }, 
        function mouseleave() {
        $('#queensafricanactivate').hide();
        });

     $('#queensindianbutton').hover(
            function mouseover() {
        $('#queensindianactivate').show();
        }, 
        function mouseleave() {
        $('#queensindianactivate').hide();
        });

        $('#queensasianbutton').hover(
            function mouseover() {
        $('#queensasianactivate').show();
        }, 
        function mouseleave() {
        $('#queensasianactivate').hide();
        });


        $('#queensotherbutton').hover(
            function mouseover() {
        $('#queensotheractivate').show();
        }, 
        function mouseleave() {
        $('#queensotheractivate').hide();
        });


        $('#queenshispanicbutton').hover(
        function mouseover() {
        $('#queenshispanicactivate').show();
        }, 
        function mouseleave() {
        $('#queenshispanicactivate').hide();
           });


 //Manhattan mouse over moves for each race 
        $('#manhattanwhitebutton').hover(
            function mouseover() {
        $('#manhattanwhiteactivate').show();
        }, 
        function mouseleave() {
        $('#manhattanwhiteactivate').hide();
        });

        $('#manhattanafricanbutton').hover(
            function mouseover() {
        $('#manhattanafricanactivate').show();
        }, 
        function mouseleave() {
        $('#manhattanafricanactivate').hide();
        });


        $('#manhattanasianbutton').hover(
            function mouseover() {
        $('#manhattanasianactivate').show();
        }, 
        function mouseleave() {
        $('#manhattanasianactivate').hide();
        });


        $('#manhattanotherbutton').hover(
            function mouseover() {
        $('#manhattanotheractivate').show();
        }, 
        function mouseleave() {
        $('#manhattanotheractivate').hide();
        });


        $('#manhattanhispanicbutton').hover(
        function mouseover() {
        $('#manhattanhispanicactivate').show();
        }, 
        function mouseleave() {
        $('#manhattanhispanicactivate').hide();
           });

 //Bronx mouse over moves for each race 
        $('#bronxwhitebutton').hover(
            function mouseover() {
        $('#bronxwhiteactivate').show();
        }, 
        function mouseleave() {
        $('#bronxwhiteactivate').hide();
        });

        $('#bronxafricanbutton').hover(
            function mouseover() {
        $('#bronxafricanactivate').show();
        }, 
        function mouseleave() {
        $('#bronxafricanactivate').hide();
        });

        $('#bronxindianbutton').hover(
            function mouseover() {
        $('#bronxindianactivate').show();
        }, 
        function mouseleave() {
        $('#bronxindianactivate').hide();
        });


        $('#bronxasianbutton').hover(
            function mouseover() {
        $('#bronxasianactivate').show();
        }, 
        function mouseleave() {
        $('#bronxasianactivate').hide();
        });


        $('#bronxotherbutton').hover(
            function mouseover() {
        $('#bronxotheractivate').show();
        }, 
        function mouseleave() {
        $('#bronxotheractivate').hide();
        });


        $('#bronxhispanicbutton').hover(
        function mouseover() {
        $('#bronxhispanicactivate').show();
        }, 
        function mouseleave() {
        $('#bronxhispanicactivate').hide();
           });

//Staten Island mouse over moves for each race 
        $('#statenwhitebutton').hover(
            function mouseover() {
        $('#statenwhiteactivate').show();
        }, 
        function mouseleave() {
        $('#statenwhiteactivate').hide();
        });

        $('#statenafricanbutton').hover(
            function mouseover() {
        $('#statenafricanactivate').show();
        }, 
        function mouseleave() {
        $('#statenafricanactivate').hide();
        });


        $('#statenasianbutton').hover(
            function mouseover() {
        $('#statenasianactivate').show();
        }, 
        function mouseleave() {
        $('#statenasianactivate').hide();
        });


        $('#statenotherbutton').hover(
            function mouseover() {
        $('#statenotheractivate').show();
        }, 
        function mouseleave() {
        $('#statenotheractivate').hide();
        });


        $('#statenhispanicbutton').hover(
        function mouseover() {
        $('#statenhispanicactivate').show();
        }, 
        function mouseleave() {
        $('#statenhispanicactivate').hide();
           });
      

});
/////////////
        // $(".key").hide(); 

    }else if(val=="3"){
        $('#chartgraphs').css('display','none');
        $('.displaytext1').css('display','none');
        $('.displaytext2').css('display','none');
         $('#Layer_1').css('display','none');
        $('#Layer_3').css('display','none');
        $('#boroughsSVG').css('display','none');
        $('#idealracesSVG').css('display','none');

        $(".key").show(); 
        $(".displaytext3").show(); 

        // drawRaces();
        hide_stuff(true,false);
    
    $.get('realraces_use.svg', function(data) {
      var svg=$(document.body).append(data.documentElement);
        // $('#idealbase').fadeto("slow",0.25);

        $('#brooklynwhiteactivateb').hide();
        $('#brooklynafricanactivateb').hide();
        $('#brooklynasianactivateb').hide();
        $('#brooklynotheractivateb').hide();
        $('#brooklynhispanicactivateb').hide();

        $('#queenswhiteactivateb').hide();
        $('#queensafricanactivateb').hide();
        $('#queensindianactivateb').hide();
        $('#queensasianactivateb').hide();
        $('#queensotheractivateb').hide();
        $('#queenshispanicactivateb').hide();


        $('#manhattanwhiteactivateb').hide();
        $('#manhattanafricanactivateb').hide();
        $('#manhattanasianactivateb').hide();
        $('#manhattanotheractivateb').hide();
        $('#manhattanhispanicactivateb').hide();


        $('#bronxwhiteactivateb').hide();
        $('#bronxafricanactivateb').hide();
        $('#bronxindianactivateb').hide();
        $('#bronxasianactivateb').hide();
        $('#bronxotheractivateb').hide();
        $('#bronxhispanicactivateb').hide();

        $('#statenwhiteactivateb').hide();
        $('#statenafricanactivateb').hide();
        $('#statenasianactivateb').hide();
        $('#statenotheractivateb').hide();
        $('#statenhispanicactivateb').hide();


//Brooklyn mouse over moves for each race 
        $('#brooklynwhitebuttonb').hover(
            function mouseover() {
        $('#brooklynwhiteactivateb').show();
        }, 
        function mouseleave() {
        $('#brooklynwhiteactivateb').hide();
        });

        $('#brooklynafricanbuttonb').hover(
            function mouseover() {
        $('#brooklynafricanactivateb').show();
        }, 
        function mouseleave() {
        $('#brooklynafricanactivateb').hide();
        });


        $('#brooklynasianbuttonb').hover(
            function mouseover() {
        $('#brooklynasianactivateb').show();
        }, 
        function mouseleave() {
        $('#brooklynasianactivateb').hide();
        });


        $('#brooklynotherbuttonb').hover(
            function mouseover() {
        $('#brooklynotheractivateb').show();
        }, 
        function mouseleave() {
        $('#brooklynotheractivateb').hide();
        });


        $('#brooklynhispanicbuttonb').hover(
        function mouseover() {
        $('#brooklynhispanicactivateb').show();
        }, 
        function mouseleave() {
        $('#brooklynhispanicactivateb').hide();
           });

        //Queens mouse over moves for each race 
        $('#queenswhitebuttonb').hover(
            function mouseover() {
        $('#queenswhiteactivateb').show();
        }, 
        function mouseleave() {
        $('#queenswhiteactivateb').hide();
        });

        $('#queensafricanbuttonb').hover(
            function mouseover() {
        $('#queensafricanactivateb').show();
        }, 
        function mouseleave() {
        $('#queensafricanactivateb').hide();
        });

     $('#queensindianbuttonb').hover(
            function mouseover() {
        $('#queensindianactivateb').show();
        }, 
        function mouseleave() {
        $('#queensindianactivateb').hide();
        });

        $('#queensasianbuttonb').hover(
            function mouseover() {
        $('#queensasianactivateb').show();
        }, 
        function mouseleave() {
        $('#queensasianactivateb').hide();
        });


        $('#queensotherbuttonb').hover(
            function mouseover() {
        $('#queensotheractivateb').show();
        }, 
        function mouseleave() {
        $('#queensotheractivateb').hide();
        });


        $('#queenshispanicbuttonb').hover(
        function mouseover() {
        $('#queenshispanicactivateb').show();
        }, 
        function mouseleave() {
        $('#queenshispanicactivateb').hide();
           });


 //Manhattan mouse over moves for each race 
        $('#manhattanwhitebuttonb').hover(
            function mouseover() {
        $('#manhattanwhiteactivateb').show();
        }, 
        function mouseleave() {
        $('#manhattanwhiteactivateb').hide();
        });

        $('#manhattanafricanbuttonb').hover(
            function mouseover() {
        $('#manhattanafricanactivateb').show();
        }, 
        function mouseleave() {
        $('#manhattanafricanactivateb').hide();
        });


        $('#manhattanasianbuttonb').hover(
            function mouseover() {
        $('#manhattanasianactivateb').show();
        }, 
        function mouseleave() {
        $('#manhattanasianactivateb').hide();
        });


        $('#manhattanotherbuttonb').hover(
            function mouseover() {
        $('#manhattanotheractivateb').show();
        }, 
        function mouseleave() {
        $('#manhattanotheractivateb').hide();
        });


        $('#manhattanhispanicbuttonb').hover(
        function mouseover() {
        $('#manhattanhispanicactivateb').show();
        }, 
        function mouseleave() {
        $('#manhattanhispanicactivateb').hide();
           });

 //Bronx mouse over moves for each race 
        $('#bronxwhitebuttonb').hover(
            function mouseover() {
        $('#bronxwhiteactivateb').show();
        }, 
        function mouseleave() {
        $('#bronxwhiteactivateb').hide();
        });

        $('#bronxafricanbuttonb').hover(
            function mouseover() {
        $('#bronxafricanactivateb').show();
        }, 
        function mouseleave() {
        $('#bronxafricanactivateb').hide();
        });

        $('#bronxindianbuttonb').hover(
            function mouseover() {
        $('#bronxindianactivateb').show();
        }, 
        function mouseleave() {
        $('#bronxindianactivateb').hide();
        });


        $('#bronxasianbuttonb').hover(
            function mouseover() {
        $('#bronxasianactivateb').show();
        }, 
        function mouseleave() {
        $('#bronxasianactivateb').hide();
        });


        $('#bronxotherbuttonb').hover(
            function mouseover() {
        $('#bronxotheractivateb').show();
        }, 
        function mouseleave() {
        $('#bronxotheractivateb').hide();
        });


        $('#bronxhispanicbuttonb').hover(
        function mouseover() {
        $('#bronxhispanicactivateb').show();
        }, 
        function mouseleave() {
        $('#bronxhispanicactivateb').hide();
           });

//Staten Island mouse over moves for each race 
        $('#statenwhitebuttonb').hover(
            function mouseover() {
        $('#statenwhiteactivateb').show();
        }, 
        function mouseleave() {
        $('#statenwhiteactivateb').hide();
        });

        $('#statenafricanbuttonb').hover(
            function mouseover() {
        $('#statenafricanactivateb').show();
        }, 
        function mouseleave() {
        $('#statenafricanactivateb').hide();
        });


        $('#statenasianbuttonb').hover(
            function mouseover() {
        $('#statenasianactivateb').show();
        }, 
        function mouseleave() {
        $('#statenasianactivateb').hide();
        });


        $('#statenotherbuttonb').hover(
            function mouseover() {
        $('#statenotheractivateb').show();
        }, 
        function mouseleave() {
        $('#statenotheractivateb').hide();
        });


        $('#statenhispanicbuttonb').hover(
        function mouseover() {
        $('#statenhispanicactivateb').show();
        }, 
        function mouseleave() {
        $('#statenhispanicactivateb').hide();
           });
  

});
/////////////

    }

    else if(val=="4"){

        $('.boroughsContainer').css('display','none')
        $(".intro").css("display","none");
        $('.displaytext1').css('display','none');
        $('.displaytext2').css('display','none');
        $('.displaytext3').css('display','none');
        $(".key").show(); 
        $('#boroughsSVG').css('display','none');
        $('#idealracesSVG').css('display','none');
        $('#realracesSVG').css('display','none');
        $('#Layer_4').css('display','none');
        

        // $('#chartgraphs').css('display','block');

         //////////////////
	$.get('graphspage.svg', function(data) {
	    var svg=$(document.body).append(data.documentElement);

	    $('#activateda').hide();
	    $('#activatedb').hide();
	    $('#activatedc').hide();
	    $('#activatedd').hide();
	    $('#activatede').hide();
            

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
     else if(val=="5"){

        //drawRaces();
        $('.boroughsContainer').css('display','none')
        $(".intro").css("display","none");
        $('.displaytext1').css('display','none');
        $('.displaytext2').css('display','none');
        $('.displaytext3').css('display','none');
        $('#boroughsSVG').css('display','none');
        $('#idealracesSVG').css('display','none');
        $('#realracesSVG').css('display','none');
        $('#graphspageSVG').css('display','none');

        $('#chartgraphs').css("display","none");
        $('#methods').css('display','block');
        $(".key").hide(); 

    };
})


   


