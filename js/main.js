$("document").ready(function(){
    
    // Functionality to make que nav bar stick to the top when scrolling
    var fixNavBar = $("#header-navbar").offset().top;       
    console.log(fixNavBar);
    
    $(window).scroll(function() {                  
    
        var currentScroll = $(window).scrollTop(); 
    
        if (currentScroll >= fixNavBar) {          
            $("#header-navbar").addClass("fixed-navbar");
            $("#main").css("margin-top", "75px")
        } else {                                 
           $("#header-navbar").removeClass("fixed-navbar");
           $("#main").css("margin-top", "0")
        }
    });
    
})