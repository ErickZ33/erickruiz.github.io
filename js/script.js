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

    
    var words = ["building", "solving", "innovating"],
        el = document.getElementById('magic'),
        word_counter = 0,
        character_counter = 0;
    function updateText() {
        if (words[word_counter][character_counter] == ' ') {
            el.innerHTML = el.innerHTML + '&nbsp';
            character_counter++;
        } else {
            el.innerHTML = el.innerHTML + words[word_counter][character_counter++];
        }
        if (character_counter == words[word_counter].length + 1) {
            word_counter++; 	//choose a different word
            character_counter = 0;	//start over with the first character of the word
            el.innerHTML = '';  //set the html to be blank
            //if we're displaying the last word, go back to the first word
            if (word_counter == words.length)
                word_counter = 0;
        }
    }
    setInterval(updateText, 250);

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

    $(window).scroll(function() {
        $('#aboutMeHeader img').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("slideRight");
            }
        });
    });

    $(window).scroll(function() {
        $('.aboutMeText').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("slideLeft");
            }
        });
    });

})