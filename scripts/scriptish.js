jQuery(document).ready(function($) {

// Smooth scroll to header
    $('.tothetop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
        $(this).unbind("mouseenter mouseleave");
        return false;
    });

});