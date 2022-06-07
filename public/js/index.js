$(document).ready(function () {

    // Owl Slider
    $("#team_slider").owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    $("#testimony_slider").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1440: {
                items: 4,
            }
        }
    });



    $('#menu_bar').click(function () {
        $('.menu_con').css('width', '100vw');
    });
    $('#menu_close').click(function () {
        $('.menu_con').css('width', '0');
    });
    $('.menu_cont').click(function (e) {
        e.stopPropagation()
    });
    $('.menu_con').click(function () {
        $('.menu_con').css('width', '0');
    });


    /*scroll button*/
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 800) {
            $('.top_btn').css("display", "inline");
        }
        else if ($(document).scrollTop() <= 800) {
            $('.top_btn').css("display", "none");
        }
    });
    $('.top_btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 2000);
    });


});