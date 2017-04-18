$("document").ready(function(){
    
    var fixNavBar = $('#header-navbar').offset().top;       
    console.log(fixNavBar);
    
    $(window).scroll(function() {                  
    
        var currentScroll = $(window).scrollTop(); 
    
        if (currentScroll >= fixNavBar) {          
            $('#header-navbar').css({  
                position: 'fixed',
                margin: '0 auto',
                left: '0',
                right: '0',
                top: '0'
            });
        } else {                                 
            $('#header-navbar').css({            
                position: 'static'
            });
        }
    });
    
})