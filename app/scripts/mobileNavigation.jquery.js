"use strict";
! function(a) {
    jQuery.fn.extend({
        mobileMegaMenu: function(b) {
            var c = { changeToggleText: !1, enableWidgetRegion: !1, prependCloseButton: !1, stayOnActive: !0, toogleTextOnClose: "Close Menu", menuToggle: "toggle-menu" },
                d = a.extend(c, b);
            return this.each(function() {
                var b = 250,
                    c = '<a class="next-button" href="#"><div class="arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div></a>',
                    e = '<li class="back_btn_list_item"><a class="back-button" href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Back</a></li>',
                    f = '<li class="close_btn_list_item"><a class="close-button ' + d.menuToggle + '" href="#"><i class="fa fa-times" aria-hidden="true"></i></a></li>',
                    g = -1,
                    h = a(this),
                    i = a("a." + d.menuToggle).html();
                h.find("ul a").addClass("menu-item"), h.find("ul ul").before(c).siblings("a:first-of-type").addClass("has-next-button"), h.find("ul ul").prepend(e), d.prependCloseButton && h.find("ul").closest("ul").prepend(f);
                var j = a("a." + d.menuToggle),
                    k = h.find("a.next-button"),
                    l = h.find("a.back-button");
                if (d.enableWidgetRegion) {
                    var m = h.find(".widget-region").detach();
                    h.find("ul:first").append(m)
                }
                var n = h.find("ul");
                if (n.toArray().forEach(function(b) { g = g > a(b).height() ? g : a(b).height() }), h.css("min-height", g + 50), d.stayOnActive) {
                    var o = window.location.href,
                        p = o.replace("#", "");
                    h.find("ul li a").filter(function() {
                        if (a(this).hasClass("menu-item")) {
                            var b = String(this.href).split("/");
                            b.pop(), b.pop();
                            var c = a(this).parents("li").parents("li").children("a.menu-item"),
                                d = String(a(c).attr("href")).split("/");
                            if (d.pop(), !c.length) return this.href === p;
                            if (JSON.stringify(b) === JSON.stringify(d)) return this.href === p
                        }
                    }).addClass("active").css("font-weight", "bold"), h.find("a.active").siblings("ul").length > 0 && h.find("a.active").removeClass("active").css("font-weight", "bold").siblings("ul").find("li:first-of-type").first().find("a").addClass("active"), h.find("a.active").closest("ul").addClass("is-in-view").parents("ul").addClass("has-been-viewed"), h.find("a.active").closest("ul").parents().siblings("li").find("ul").hide()
                }
                j.click(function(b) { b.preventDefault(), h.find("ul:first-child").hasClass("has-been-viewed") || h.find("ul:first-child").toggleClass("is-in-view"), d.changeToggleText && (h.hasClass("open") ? h.hasClass("open") && a("a." + d.menuToggle).html(i) : a("a." + d.menuToggle).html(d.toogleTextOnClose)), h.toggleClass("open") }), k.click(function(c) { c.preventDefault(), setTimeout(function() { a("html, body").animate({ scrollTop: 0 }, b) }, b), a(this).siblings("ul:first-of-type").addClass("is-in-view"), a(this).parents().siblings("li").find("ul").hide(), a(this).siblings("ul").show(), a(this).parents("ul:first-of-type").addClass("has-been-viewed").removeClass("is-in-view") }), l.click(function(b) { b.preventDefault(), a(this).parents("ul.is-in-view").closest("ul.has-been-viewed").toggleClass("has-been-viewed is-in-view").promise().done(function() { h.find("ul.is-in-view ul.is-in-view").toggleClass("is-in-view") }) }), (a("html").hasClass("no-csstransforms") || a("html").hasClass("no-cssanimations")) && (j.click(function(a) { a.preventDefault(), h.css("transform", "none"), h.hasClass("open") ? h.animate({ left: 0 }) : h.animate({ left: "-100%" }) }), k.click(function(a) { a.preventDefault(), h.find(".has-been-viewed").css("transform", "none"), h.find("ul").animate({ right: "+=100%" }, b) }), l.click(function(a) { a.preventDefault(), h.find(".has-been-viewed").css("transform", "none"), h.find("ul").animate({ right: "-=100%" }, b) }))
            })
        }
    })
}(jQuery);