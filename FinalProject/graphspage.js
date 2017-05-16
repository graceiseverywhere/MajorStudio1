 $.get('graphspage.svg', function(data) {

    $(document.body).append(data.documentElement);


		$('#activateda').hide();
    $('#activatedb').hide();
    $('#activatedc').hide();
    $('#activatedd').hide();
    $('#activatede').hide();
             
    // $('#buttona').click(function() {
    // $('#activateda').show();
    // });

 

});