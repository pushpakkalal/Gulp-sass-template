(function ($) {
	"use strict";

	var App = function () {
		var o = this; // Create reference to this instance
		$(document).ready(function () {
			o.initialize();
		}); // Initialize app when document is ready
	};
	var p = App.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		// Init events
		this._initmegamenu();
		this._initmobilemenu();
	};

	// =========================================================================
	// First Function
	// =========================================================================
	p._initmegamenu = function () {
		if ($('.megamenu').length > 0) {
			$(document).on('mouseenter click', '.megamenu-first-level > li > a', function (event) {
				$(this).parent('li').siblings('li').removeClass('selected');
				$(this).parent('li').addClass('selected');
			});
			$(document).on('mouseenter', '.megamenu > a', function (event) {
				$('.megamenu-first-level li').removeClass('selected');
				$(this).parent('.megamenu').find('.megamenu-first-level li').eq(0).addClass('selected');
			});
		}
	};

	p._initbacktotop = function() { 
	 	if ($('#back-to-top').length > 0) { 
	 			var scrollTrigger = 100,
                backToTop = function() { 
                	var scrollTop = $(window).scrollTop(); 
                	if (scrollTop > scrollTrigger) { 
                		$('#back-to-top').addClass('show'); 
                	} else { 
                		$('#back-to-top').removeClass('show'); 
                	} 
                };
            backToTop();
            $(window).on('scroll', function() { 
            	backToTop(); 
            });
            $('#back-to-top').on('click', function(e) { 
            	e.preventDefault();
                $('html,body').animate({ scrollTop: 0 }, 700); 
            }); 
        } 
    };

    p._initmobilemenu = function() {
    	if (window.matchMedia("(max-width: 767px)").matches) {
	     	$( '#navbar' ).mobileMegaMenu({
	          changeToggleText: true,
	          enableWidgetRegion: true,
	          prependCloseButton: true,
	          stayOnActive: false,
	          toogleTextOnClose: '<i class="fa fa-times" aria-hidden="true"></i>',
	          menuToggle: 'navbar-toggle'
	        });
     	}
    };
	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.myApp = window.myApp || {};
	window.myApp.App = new App();
})(jQuery); 