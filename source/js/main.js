/* =Modernizer replace SVG with PNG
============================================================================== */


if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}




/* =Home specialty fade
============================================================================== */

$(document).ready(function() {
    var width = $(window).width();
    
        $("#content-trigger").addClass("is-visible");

    
});



/* =apply height
============================================================================== */
// var headerHeight = $('.header').height();

$(document).ready(function() {
    var height = $(window).height();
    
        $("#flex-wrap").css("min-height", height);
});

$(window).resize(function() {
    var height = $(window).height();

        $("#flex-wrap").css("min-height", height);
});



