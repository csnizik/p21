/* Rellax Function */
var rellax = new Rellax(".rellax"),
    elementHeight = jQuery(".dim").height(),
    hash, tab_id, hash1, herfID;

function thememenu() {
    jQuery(".overlay-menu-block nav > ul").each(function() {
        0 < jQuery(this).find("ul.sub-menu").length && jQuery(this).find(".menu-item-has-children").append('<span class="has-btn"></span>')
    }), jQuery(".has-btn").click(function() {
        jQuery(this).parent().hasClass("open") ? (jQuery(".sub-menu").slideUp(), jQuery(".overlay-menu-block nav .menu-item-has-children").removeClass("open")) : (jQuery(".sub-menu").slideUp(), jQuery(this).prev("ul").slideDown(), jQuery(".overlay-menu-block nav .menu-item-has-children").removeClass("open"), jQuery(this).parent().addClass("open"))
    })
}
jQuery(window).scroll(function() {
        var t = jQuery(this).scrollTop();
        jQuery(".dim").css({
            opacity: function() {
                return opacity = .8 * (1 - (elementHeight - t) / elementHeight) + .3, opacity
            }
        }), jQuery(".pageTitle").css({
            opacity: function() {
                return opacity = 3 * (1 - (elementHeight + t) / elementHeight) + 1, opacity
            }
        })
}),



/* Custom JS Code */
jQuery(document).ready(function () {
    // Only used on careers.html
    jQuery(".slick.marquee").slick({
        speed: 2e4,
        autoplay: !0,
        autoplaySpeed: 0,
        centerMode: !0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: !0,
        infinite: !0,
        initialSlide: 1,
        arrows: !1,
        buttons: !1
    })
    // Used on adam.html define-xml.html sdtm.html send.html
    jQuery(".custom-table-filter ul li a").click(function() {
            jQuery(".custom-table-filter ul li a").removeClass("active"), jQuery(this).addClass("active")
        }), jQuery(".advanced-title").click(function() {
            jQuery(".advanced-block-m").slideToggle(), jQuery(".advanced-title").toggleClass("open-advanced-form")
        })
    }), jQuery(window).on("load", function() {
        thememenu(), AOS.init({}), jQuery(window).scroll(function() {
            jQuery(".scroll-line").css("opacity", 1 - jQuery(window).scrollTop() / jQuery(".landing-slider-sec").height()), jQuery(window).scrollTop() >= .65 * jQuery(window).height() ? (jQuery(".social-icons").addClass("social-icons-black"), jQuery(".scroll-line").fadeOut(1e3)) : (jQuery(".social-icons").removeClass("social-icons-black"), jQuery(".scroll-line").fadeIn(1e3))
        })
    }), jQuery(document).ready(function() {
        jQuery(".pagination .item:nth-child(1)").addClass("q_current"), -1 != navigator.userAgent.indexOf("Mac OS X") ? jQuery("body").addClass("mac") : jQuery("body").addClass("pc"), jQuery(".cookies-close, .agree-btn").click(function() {
            jQuery(".cookies-popup-main").addClass("hide-cookies"), setTimeout(function() {
                jQuery(".cookies-popup-main").hide()
            }, 1e3)
        }), jQuery(".menu-icon").click(function() {
            jQuery("html").toggleClass("show-menu")
        }), jQuery(".video-play-ico").click(function() {
            jQuery(".video-popup-main").addClass("show-popup"), jQuery("body").addClass("body-show-popup")
        }), jQuery(".close-icon").click(function() {
            jQuery(".video-popup-main").removeClass("show-popup"), jQuery("body").removeClass("body-show-popup")
        }), jQuery(".close-overlay").click(function() {
            jQuery(".video-popup-main").removeClass("show-popup"), jQuery("body").removeClass("body-show-popup")
        }), jQuery(".popup-model").click(function(t) {
            t = jQuery(t.currentTarget).data("tabId");
            jQuery("#" + t).addClass("open-modal"), jQuery(".dark_back_modal").addClass("open-overlay")
        }), jQuery(".close_modal").click(function() {
            jQuery(".contact_side_modal").removeClass("open-modal"), jQuery(".dark_back_modal").removeClass("open-overlay")
        }), jQuery(".dark_back_modal").click(function() {
            jQuery(this).removeClass("open-overlay"), jQuery(".contact_side_modal").removeClass("open-modal")
        }), jQuery(".scroll-label").click(function(t) {
            t.preventDefault(), (t = jQuery(jQuery(this).attr("href"))).length && (t = t.offset().top, jQuery("body, html").animate({
                scrollTop: t + "px"
            }, 800))
        }), -1 != navigator.userAgent.indexOf("Mac OS X") ? jQuery("body").addClass("mac") : jQuery("body").addClass("pc"), jQuery("#toggle").click(function() {
            jQuery(this).toggleClass("menu-open"), jQuery(".main-menu ul").slideToggle()
        }), jQuery(".apply-now-btn").click(function() {
            jQuery("#apply-now-btn").addClass("open-modal"), jQuery(".dark_back_modal").addClass("open-overlay")
        }), jQuery(".ct-slide").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: false,
            slidesToScroll: 1,
            draggable: false,
            nextArrow: '<button class="slick-next"><img src="images/test-next-arrow.png" /></button>',
            prevArrow: '<button class="slick-prev"><img src="images/test-prev-arrow.png" /></button>',
        }), jQuery("#big").length && (jQuery("#big").on("init", function(t) {
            jQuery("#big").fadeIn(1e3)
        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            autoplay: !0,
            pauseOnHover: !1,
            infinite: !0,
            pauseOnFocus: !1,
            lazyLoad: "ondemand",
            autoplaySpeed: 6e3,
            asNavFor: "#thumbs"
        }), jQuery("#thumbs").on("init", function(t) {
            jQuery("#thumbs").fadeIn(1e3)
        }).slick({
            slidesToShow: 11,
            slidesToScroll: 1,
            lazyLoad: "ondemand",
            asNavFor: "#big",
            dots: !1,
            pauseOnHover: !1,
            pauseOnFocus: !1,
            centerMode: !1,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 6
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8
                }
            }]
        }), jQuery("#thumbs .slick-slide").removeClass("slick-active"), jQuery("#thumbs .slick-slide").eq(0).addClass("slick-active"), jQuery("#big").on("beforeChange", function(t, e, i, n) {
            jQuery("#thumbs .slick-slide").removeClass("slick-active"), jQuery("#thumbs .slick-slide").eq(n).addClass("slick-active")
        }))
    }), 767 < jQuery(window).width() && (height_counter = function() {
        var t = jQuery(window).height() - jQuery(".innerBanner").height();
        jQuery(".inner-header .header .social-icons").css("padding-bottom", t)
    }, jQuery(document).ready(function() {
        height_counter()
    }), jQuery(window).on("load", function() {
        height_counter()
    }), jQuery(window).on("resize", function() {
        height_counter()
    })), width_counter = function() {
        var t = jQuery(window).width(),
            e = jQuery(".container").width(),
            i = t - jQuery(".container-1554").width(),
            e = parseInt((t - e) / 2) - parseInt(15),
            i = parseInt(i / 2) - parseInt(15);
        jQuery(".container-left").css("padding-left", e), jQuery(".container-right").css("padding-right", e), jQuery(".container-right-margin").css("margin-right", e), jQuery(".container-left-margin").css("margin-left", e), jQuery(".container-left-1554").css("margin-right", i), jQuery(".container-right-1554").css("margin-left", i), jQuery(".container-right-margin-1554").css("margin-right", i), jQuery(".container-left-margin-1554").css("margin-left", i)
    }, jQuery(document).ready(function() {
        width_counter()
    }), jQuery(window).on("load", function() {
        width_counter()
    }), jQuery(window).on("resize", function() {
        width_counter()
    }), jQuery(".js-menu-trigger").click(function() {
        jQuery(".js-navigation").toggleClass("is-opened")
    }), jQuery(function() {
        jQuery('.landing-sec-caps a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = jQuery(this.hash);
                if ((t = t.length ? t : jQuery("[name=" + this.hash.slice(1) + "]")).length) return jQuery("html, body").animate({
                    scrollTop: t.offset().top
                }, 1e3), !1
            }
        })
    }), jQuery(".tabs-dropdown .select-tab a").click(function() {
        jQuery(".tabs-dropdown .tabs-options ul").toggle()
    }), jQuery(".tabs-dropdown .tabs-options ul li a").click(function() {
        var t = jQuery(this).attr("data-tab");
        jQuery(".tabs-options ul li").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery("#" + t).addClass("current");
        t = jQuery(this).html();
        jQuery(".tabs-dropdown .select-tab a span").html(t), jQuery(".tabs-dropdown .tabs-options ul").hide()
    }), jQuery(".tab-content a.tab-link").click(function() {
        var t = jQuery(this).attr("href").split("#")[1];
        jQuery("ul.tabs li").removeClass("current"), jQuery(".tabContent-m .tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery('[data-tab="' + t + '"]').addClass("current"), jQuery("#" + t).addClass("current"), window.history.pushState("", "", "#" + t), setTimeout(function() {
            jQuery("body").scrollTop(0), window.scrollTo(0, 0)
        }, 1), AOS.refresh();
        t = jQuery('[data-tab="' + t + '"]').html();
        jQuery(".tabs-dropdown .select-tab a span").html(t), jQuery(".tabs-dropdown .tabs-options ul").hide()
    }), jQuery(document).bind("click", function(t) {
        jQuery(t.target).parents().hasClass("tabs-dropdown") || jQuery(".tabs-dropdown .tabs-options ul").hide()
    }), jQuery("ul.tabs li").click(function() {
        var t = jQuery(this).attr("data-tab");
        jQuery("ul.tabs li").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery("#" + t).addClass("current"), window.history.pushState("", "", "#" + t), AOS.refresh()
    }), window.location.hash && (hash = window.location.hash.substr(1), tab_id = hash, jQuery("ul.tabs li a").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery('[data-tab="' + tab_id + '"]').addClass("current"), jQuery("#" + tab_id).addClass("current"), window.history.pushState("", "", "#" + tab_id), window.scrollTo(0, 0), AOS.refresh()), jQuery(".tab-content a.tab-link").click(function() {
        var t = jQuery(this).attr("href").split("#")[1];
        jQuery("ul.tabs li").removeClass("current"), jQuery(".tabContent-m .tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery('[data-tab="' + t + '"]').addClass("current"), jQuery("#" + t).addClass("current"), window.history.pushState("", "", "#" + t), setTimeout(function() {
            jQuery("body").scrollTop(0), window.scrollTo(0, 0)
        }, 1), AOS.refresh()
    }), window.location.hash && (hash1 = window.location.hash.substr(1), herfID = hash1, jQuery(".tabContent-m .tab-content").removeClass("current"), jQuery('[data-tab="' + herfID + '"]').addClass("current"), jQuery("#" + herfID).addClass("current"), window.history.pushState("", "", "#" + herfID), setTimeout(function() {
        jQuery("body").scrollTop(0), window.scrollTo(0, 0)
    }, 1), AOS.refresh());