$(document).ready(function () {

    function fullscreen() {
        jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

    fullscreen();

    jQuery(window).resize(function () {
        fullscreen();
    });

    $("#scrollToHome").click(function () {
        $('html, body').animate({
            scrollTop: $("#hero").offset().top
        }, 2000);
    });

    $("#scrollToAboutMe").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top
        }, 2000);
    });

    $("#scrollToProjects").click(function () {
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 2000);
    });

    $("#scrollToFooter").click(function () {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });

    $(window).scroll(function () {
        $('#aboutMeHeader img').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.aboutMeText').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideLeft");
            }
        });
    });

})