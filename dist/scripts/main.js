function footerfix(){var t=$(window).height(),i=$(".dash-prof-cont").outerHeight(),o=$(".main-wrap-section").outerHeight(),e=$(".footer2").outerHeight()-2,s=t-e,n=o;t>i&&t>o?$(".main-wrap-section").css("height",s):o>t&&o>i?$(".main-wrap-section").css("height",n):i>t&&i>o&&$(".main-wrap-section").css("height",i)}$(window).on("load",function(){$(".main-wrap-section").css("height","auto"),setTimeout(function(){footerfix()},600)}),$(window).on("resize",function(){setTimeout(function(){$(".main-wrap-section").css("height","auto"),footerfix()},600)}),$(document).on("click",function(){setTimeout(function(){$(".main-wrap-section").css("height","auto"),footerfix()},600)}),$(".dash-usermenu").on("click",function(){setTimeout(function(){$(".main-wrap-section").css("height","auto"),footerfix()},600)}),$(document).ready(function(){var t=!1;$(".material-button-toggle").click(function(){$(".srchsidebar").removeClass("searchbox-open"),$('.srchsidebar input[type="text"]').css({"padding-left":"0px","padding-right":"0px"}).focusout(),t=!1,$(this).toggleClass("open"),$(this).parents(".material-button-anim").find(".option").toggleClass("scale-on")}),$(".material-button-toggle2").click(function(){$(".srchsidebar").removeClass("searchbox-open"),$('.srchsidebar input[type="text"]').css({"padding-left":"0px","padding-right":"0px"}).focusout(),t=!1,$(this).toggleClass("open"),$(this).parents(".material-button-anim").find(".option").toggleClass("scale-on")}),$(".list-inline .option1").click(function(){0==t?($(".srchsidebar").addClass("searchbox-open"),$('.srchsidebar input[type="text"]').css({"padding-left":"15px","padding-right":"65px"}).focus(),t=!0):($(".srchsidebar").removeClass("searchbox-open"),$('.srchsidebar input[type="text"]').css({"padding-left":"0px","padding-right":"0px"}).focusout(),t=!1)})}),$(document).ready(function(){function t(){1==o?(i.removeClass("is-open"),i.addClass("is-closed"),o=!1):(i.removeClass("is-closed"),i.addClass("is-open"),o=!0)}var i=$(".hamburger"),o=!0;i.click(function(){t()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("dash_toggled")})}),$(window).on("load",function(){$(".pushpak").hide()});