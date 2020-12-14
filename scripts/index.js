
$(window).resize(function(){

    if ($(window).width() <= 1180) {  
        
    }     

});

$(window).resize(function(){

    if ($(window).width() > 1180) {  

    }     

});

if($(window).width() > 816){
    $("#dropdownMenu").hide();
}

$(window).resize(function(){

    if ($(window).width() <= 816) {  

        $("#dropdownMenu").show();
        $("#menu").hide();
        $("#dropdownMenu").css("margin-bottom", "4vh");
        $('nav').css("border-bottom", "1px #dadada solid");
        $("#search").addClass("container-fluid")  

    }     

});

$(window).resize(function(){

    if ($(window).width() > 816) {  
        $("#dropdownMenu").hide();
        $("#search").removeClass("container-fluid") 
        $("#dropdownMenu").css("margin-bottom", "");
        $('nav').css("border-bottom", "");
       
        $("#menu").show();
        
         
    }     

});