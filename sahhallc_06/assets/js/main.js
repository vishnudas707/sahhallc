(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        
		// Home Slides
        $('.home-slides').owlCarousel({
			loop: true,
			nav: true,
            dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 750,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='fal fa-angle-right'></i>",
                "<i class='fal fa-angle-left'></i>"
            ],
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".main-banner-content span").removeClass("animated fadeInDown").css("opacity", "0");
            $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner-content .btn-box").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-banner-content span").addClass("animated fadeInDown").css("opacity", "1");
            $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner-content .btn-box").addClass("animated fadeInUp").css("opacity", "1");
        });
		
		// Video Popup JS
		$('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

       

        // Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });
        
        // Doctor Slides
		$('.doctor-slides').owlCarousel({
			loop: false,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: false,
            margin: 30,
            navText: [
                "<i class='far fa-angle-left'></i>",
                "<i class='far fa-angle-right'></i>",
            ],
			responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 2,
				}
            }
        });

      
        
        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

    });
    
    /* ------------------------------------------------------------------------ */
						/* ACCORDIAN ACTIVE CLASS
						/* ------------------------------------------------------------------------ */
						
						jQuery('#accordion2 .panel-title').click(function(e) { 
							jQuery(this).toggleClass('active');
							jQuery(this).parent(".panel-heading").parent(".panel-default").siblings(".panel-default").find('.panel-title').removeClass('active');
                        });
                        
                        /* ------------------------------------------------------------------------ */
						/* FOR ACCORDIAN2 UP AND DOWN ARROW
						/* ------------------------------------------------------------------------ */
						jQuery('#accordion2 .panel-title a').click(function(e) { 
							jQuery(this).toggleClass('active');
							jQuery(this).parent().find('i.float-right').toggleClass('fa-angle-up');
							jQuery(this).parent().find('i.float-right').toggleClass('fa-angle-down');
							jQuery(this).parent(".panel-title").parent(".panel-heading").parent(".panel-default").siblings(".panel-default").find('.panel-title a i.pull-right').removeClass('fa-angle-up');
							jQuery(this).parent(".panel-title").parent(".panel-heading").parent(".panel-default").siblings(".panel-default").find('.panel-title a i.pull-right').addClass('fa-angle-down');
						});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
    });
    


}(jQuery));