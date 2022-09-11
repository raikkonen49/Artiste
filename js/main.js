$(document).foundation();

$(document).ready(function() {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        },
        beforeShow: function() {
            $(".fancybox-skin").css("backgroundColor", "transparent");
            $(".fancybox-skin").css("padding", "0px");
        }
    });

    var HH = $('.header').outerHeight();
    $('.intro-hold').css('margin-top', -HH);

    // popups

    $(".trigger").click(function() {
        $(".header").toggleClass("close");
        $(".nav").toggleClass("close");
        $(".trigger").toggleClass("close");
    });


    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        gutter: 60,
    });

    $(".single-img img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        easing: true
    });

    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#image").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 +80;
        var newvalueY = height * pageY * -1 -15;
        $('#image').css("background-position", newvalueX + "px " + newvalueY + "px ");
    });

    // #ScrollToTop

    // $("a[href='#top']").click(function() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // });


    // #href scroll //

    $('a.scroll-to[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function() {
            window.location.hash = target;
        });
    });



});
