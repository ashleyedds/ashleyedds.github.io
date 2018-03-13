
$(document).ready(function () {
    $(".button-collapse").sideNav();
    
    $("nav").css("background", "transparent");
    $('.collapsible').collapsible();

    $('.carousel').carousel();

    $('#textarea1').val('');
    $('#textarea1').trigger('autoresize');
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $("nav").css("background", "#443e41");
    } else {
        $("nav").css("background", "transparent");
    }

});
