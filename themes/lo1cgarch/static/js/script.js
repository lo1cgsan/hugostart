// różne deklaracje pluginów
function owlInitialize() {
	if ($(window).width() < 768) {
    	$('div.certyfikaty-carousel').owlCarousel('destroy');
   	}else{
   	  	var $owl = $('.owl-carousel').owlCarousel({
			autoplay:false,
	    	loop:false,
	    	margin:15,
	    	nav:true,
	    	navText:['<i class="fa fa-angle-left" aria-label="Poprzedni"></i>','<i class="fa fa-angle-right" aria-label="Następny"></i>'],
	    	dots:false,
	    	items:4,
	    	autoWidth:true
	  	});
      	$('div.certyfikaty-carousel').owlCarousel();
   	}
}

$(document).ready(function ($) {
	"use strict";
	// var headerEle = function () {
	// 	var $headerHeight = $('header').height();
	// 	$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
	// };

	// $(window).load(function () {
	//     headerEle();
	// });

	// $(window).resize(function () {
	//     headerEle();
	// });


	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});


	var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          	$('.back-to-top').fadeIn(400);
        } else {
        	$('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })



	/*----------------------------------------------------*/
	/*	Change Slider Nav Icons
	/*----------------------------------------------------*/

	// $('.touch-slider').find('.owl-prev').html('<i class="bi-chevron-left"></i>');
	// $('.touch-slider').find('.owl-next').html('<i class="bi-chevron-right"></i>');
	// $('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	// $('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.read-more').append('<i class="bi-chevron-right"></i>');

	$('.itl-tooltip').tooltip();

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'header' );

		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$('.top-bar').slideUp(300);
				$("header").addClass("fixed-header");
				// $('.navbar-brand').css({ 'padding-top' : 19 + "px", 'padding-bottom' : 19 + "px" });

				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 20 + "px", 'padding-bottom' : 20 + "px" })
					$('.search-side').css({ 'margin-top' : -7 + "px" });
				};

			}
			else {
				$('.top-bar').slideDown(300);
				$("header").removeClass("fixed-header");
				//$('.navbar-brand').css({ 'padding-top' : 27 + "px", 'padding-bottom' : 27 + "px" });

				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 28 + "px", 'padding-bottom' : 28 + "px" })
					$('.search-side').css({ 'margin-top' : 0  + "px" });
				};

			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();

	// rb
	$(".post-row:odd").css("clear", "right");
	$(".post-content img").addClass("img-thumbnail");

	$(".faq .faq-item .faq-title").click(function(){
        var item = $(this).parent('.faq-item');
        var item2 = $(this).find('.fa');

        if(item.hasClass("active")) {
        	if (!item2.hasClass("fa-angle-right")) {
            item2.removeClass("fa-angle-up").addClass("fa-angle-down");
            item.toggleClass("active");
          }
        } else {
        	if (!item2.hasClass("fa-angle-right")) {
            item2.removeClass("fa-angle-down").addClass("fa-angle-up");
            item.toggleClass("active");
          }
        }
        // onresize(300);
    });

	owlInitialize();

});

$(window).resize(function() {
   owlInitialize();
});
