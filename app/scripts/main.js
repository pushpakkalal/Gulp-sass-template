// for footer fix
$(window).on('load', function () {
  $('.main-wrap-section').css("height", "auto");
  setTimeout(function () {
    footerfix();
  }, 600);
});
$(window).on('resize', function () {
  setTimeout(function () {
    $('.main-wrap-section').css("height", "auto");
    footerfix();
  }, 600);
});

$(document).on('click', function () {
  setTimeout(function () {
    $('.main-wrap-section').css("height", "auto");
    footerfix();
  }, 600);
});
$('.dash-usermenu').on('click', function () {
  setTimeout(function () {
    $('.main-wrap-section').css("height", "auto");
    footerfix();
  }, 600);
});
function footerfix() {
  var winHeight = $(window).height();
  var sidebarHeight = $('.dash-prof-cont').outerHeight();
  var mainwrapheight = $('.main-wrap-section').outerHeight();
  var footer2Height = $('.footer2').outerHeight() - 2;

  var calwinH = winHeight - footer2Height;
  var calmainwrapheight = mainwrapheight;
  //alert( $('.main-wrap-section').outerHeight());

  if (winHeight > sidebarHeight && winHeight > mainwrapheight) {
    $('.main-wrap-section').css("height", calwinH);
  } else if (mainwrapheight > winHeight && mainwrapheight > sidebarHeight) {
    $('.main-wrap-section').css("height", calmainwrapheight);
  } else if (sidebarHeight > winHeight && sidebarHeight > mainwrapheight) {
    $('.main-wrap-section').css("height", sidebarHeight);
  } else {}
}

// for material button
$(document).ready(function () {
  var isOpen = false;
  $('.material-button-toggle').click(function () {
    $('.srchsidebar').removeClass('searchbox-open');
    $('.srchsidebar input[type="text"]').css({ "padding-left": 0 + "px", "padding-right": 0 + "px" }).focusout();
    isOpen = false;
    $(this).toggleClass('open');
    $(this).parents('.material-button-anim').find('.option').toggleClass('scale-on');
  });
  $('.material-button-toggle2').click(function () {
    $('.srchsidebar').removeClass('searchbox-open');
    $('.srchsidebar input[type="text"]').css({ "padding-left": 0 + "px", "padding-right": 0 + "px" }).focusout();
    isOpen = false;
    $(this).toggleClass('open');
    $(this).parents('.material-button-anim').find('.option').toggleClass('scale-on');
  });
  $('.list-inline .option1').click(function () {
    if (isOpen == false) {
      $('.srchsidebar').addClass('searchbox-open');
      $('.srchsidebar input[type="text"]').css({ "padding-left": 15 + "px", "padding-right": 65 + "px" }).focus();
      isOpen = true;
    } else {
      $('.srchsidebar').removeClass('searchbox-open');
      $('.srchsidebar input[type="text"]').css({ "padding-left": 0 + "px", "padding-right": 0 + "px" }).focusout();
      isOpen = false;
    }
  });
});

// script for sidebar panel
$(document).ready(function () {
  var trigger = $('.hamburger'),
      isClosed = true;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('dash_toggled');
  });
});

// script for custome sidebar scroller 
// function sidebarscroll(){
// var theme = {
//       touchbehavior:true,
//       cursorcolor:"#0076a4",
//       cursorwidth:"5px",
//       autohidemode:true
// }
// var nice = $(".dash-usermenu").niceScroll(theme);
// $(".dash-usermenu").getNiceScroll().resize();
// }
// $(document).on("click", function(){
//   	var wrapper = $('#wrapper');
//   	if(wrapper.hasClass('dash_toggled')){
//   		setTimeout(function(){ 
//        	sidebarscroll();
//         }, 400);
//   	}else{
//   		$(".dash-usermenu").getNiceScroll().remove();
//   	}
// });
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
