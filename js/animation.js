$(document).ready(function(){
    
    function removeLogo(){
        $('#loading-img').animate({
        opacity: '0'
        }, 800, function(){ $('#loading-img').css('width', '0'); } ); // removing the element so it does not get in the middle );
    }
    
    setTimeout(function(){
        document.getElementById('load').classList.add('no-scale');
        removeLogo();
    }, 600);
    
    // Loading screen on click 
    $('nav a, .js-footer-nav a, .js-btn-load').click(function(e){
        
        $('#loading-img').animate({
        opacity: '1'
        }, 400 );
        
        $('#loading-img').css('width', '100%'); // reseting the state for the next click
    
        e.preventDefault();
        
        var url = $(this).attr('href');
        
        $('#load').removeClass('no-scale',2000);
        
        setTimeout(function(){ 
            window.location.href = url; ;
        }, 1000);
    });
});