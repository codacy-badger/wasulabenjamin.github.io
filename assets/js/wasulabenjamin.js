! function (e) {
	"use strict";
	var t = e("header").height() + 50;
	if (e(".header_area").length && e(window).scroll(function () {
		e(window).scrollTop() >= t ?
			e(".header_area").addClass("navbar_fixed") : e(".header_area").removeClass("navbar_fixed")
	}), e(window).on("load", function () {
		if (e(".portfolio-filter ul li").on("click", function () {
			e(".portfolio-filter ul li").removeClass("active"), e(this).addClass("active");
			var l = e(this).attr("data-filter");
			t.isotope({
				filter: l
			})
		}), document.getElementById("portfolio")) var t = e(".portfolio-grid").isotope({
			itemSelector: ".latest",
			percentPosition: !0,
			masonry: {
				columnWidth: ".grid-sizer"
			}
		})
	})
	);
}(jQuery);