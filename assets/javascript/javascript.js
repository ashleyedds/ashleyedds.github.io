
$(document).ready(function () {
    $("nav").css("background", "transparent");
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $("nav").css("background", "#443e41");
    } else {
        $("nav").css("background", "transparent");
    }

    $(".button-collapse").sideNav();

    $('.carousel').carousel();

    $('#textarea1').val('');
    $('#textarea1').trigger('autoresize');

});
