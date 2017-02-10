$(document).ready(function () {
    'use strict';
    /*----------- Preloader -----------*/
    jQuery(window).load(function () {
        jQuery('.pulse').fadeOut();
        jQuery('.preloader').delay(1000).fadeOut('slow');
    });
    //smooth scroll
    $(function () {
        $('.smooth-scroll a[href*="#"]:not([href="#"])').click(function () {
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
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    //parallax
    $.stellar();
    //navbar scroll for small devices
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });
    //sticky navbar
    $(".navbar-sticky").sticky({topSpacing: 0});
    //countDown js
    $("#countdown").countDown({
        targetDate: {
            "day": 25,
            "month": 12,
            "year": 2017,
            "hour": 0,
            "min": 0,
            "sec": 0
        },
        omitWeeks: true
    });
//testominals
var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    transitionStyle : "backSlide",
    afterAction : syncPosition,
    responsiveRefreshRate : 200
  });
 
  sync2.owlCarousel({
    items : 8,
    itemsDesktop      : [1199,10],
    itemsDesktopSmall     : [979,10],
    itemsTablet       : [768,8],
    itemsMobile       : [479,4],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced");
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current);
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2);
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1]);
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1);
    } 
  }
  //counter up
    $('.counter-digit').counterUp({
        delay: 10,
        time: 3000
    });
});