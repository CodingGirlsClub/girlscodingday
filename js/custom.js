$(document).ready(function() {
    'use strict';
    /*----------- Preloader -----------*/
    jQuery(window).load(function() {
        jQuery('.pulse').fadeOut();
        jQuery('.preloader').delay(1000).fadeOut('slow');
    });
    //smooth scroll
    $(function() {
        $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 700);
                    return false;
                }
            }
        });
    });
    //auto close navbar
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navlink a').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });
        } else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    //parallax
    $.stellar();
    //navbar scroll for small devices
    $(window).resize(function() {
        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    });
    //sticky navbar
    $(".navbar-sticky").sticky({ topSpacing: 0 });
    //countDown js
    $('#countdown').countdown('2018/01/13 9:00:00', function(event) {
        var $this = $(this).html(event.strftime('' +
            '<span class="countdown-unit"><span class="countdown-unit__digit">%D</span><br><span>Days</span></span>' +
            '<span class="countdown-unit"><span class="countdown-unit__digit">%H</span><br><span>Hours</span></span>' +
            '<span class="countdown-unit"><span class="countdown-unit__digit">%M</span><br><span>Minutes</span></span>' +
            '<span class="countdown-unit"><span class="countdown-unit__digit">%S</span><br><span>Seconds</span></span>'));
    });
    //testominals
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    var sync3 = $("#sync3");
    var sync4 = $("#sync4");

    setSync(sync1, sync2);
    setSync(sync3, sync4);

    function setSync(sync1, sync2) {
        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            transitionStyle: "backSlide",
            afterAction: syncPosition,
            responsiveRefreshRate: 200
        });

        sync2.owlCarousel({
            items: 8,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [979, 6],
            itemsTablet: [768, 6],
            itemsMobile: [479, 4],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            sync2
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
            if (sync2.data("owlCarousel") !== undefined) {
                center(current);
            }
        }

        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });

        function center(number) {
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for (var i in sync2visible) {
                if (num === sync2visible[i]) {
                    var found = true;
                }
            }

            if (found === false) {
                if (num > sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", num - sync2visible.length + 2);
                } else {
                    if (num - 1 === -1) {
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if (num === sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", sync2visible[1]);
            } else if (num === sync2visible[0]) {
                sync2.trigger("owl.goTo", num - 1);
            }
        }
    }

    //counter up
    $('.counter-digit').counterUp({
        delay: 10,
        time: 3000
    });
});
