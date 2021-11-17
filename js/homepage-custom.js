/* Homepage Custom JS Code */
var timeoutHandle = '';
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-1", {
    y: "-500%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6  > .polygon-b-2", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-3", {
    y: "-100%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-5", {
    y: "-1200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-6", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-7", {
    y: "-300%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-6"
}).setTween("#landing-sec-6 .polygon-b-9", {
    y: "300%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: "#landing-sec-4"
}).setTween("#landing-sec-4 > .layer1", {
    x: "80%",
    ease: Linear.easeNone
}).addTo(controller), new ScrollMagic.Scene({
    triggerElement: "#landing-sec-4"
}).setTween("#landing-sec-4 > .layer2", {
    x: "-80%",
    ease: Linear.easeNone
}).addTo(controller), jQuery(document).ready(function() {
    jQuery("#grouploop_2").grouploop({
        velocity: 1,
        forward: !0,
        pauseOnHover: !1,
        childNode: ".item",
        childWrapper: ".item_wrap"
    }), jQuery("#grouploop_4").grouploop({
        velocity: 1,
        forward: !1,
        pauseOnHover: !1,
        childNode: ".item",
        childWrapper: ".item_wrap"
    }), 
    

    jQuery('.testimonials').slick({
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<button class="slick-next"><img src="images/btn-arrow-white.svg" /></button>',
        prevArrow: '<button class="slick-prev"><img src="images/btn-arrow-white.svg" /></button>',
      });
          
});
var a = 0;
jQuery(window).scroll(function() {
    var e = jQuery("#counter").offset().top - window.innerHeight;
    0 == a && jQuery(window).scrollTop() > e && (jQuery(".counter-value").each(function() {
        var e = jQuery(this),
            o = e.attr("data-count");
        jQuery({
            countNum: e.text()
        }).animate({
            countNum: o
        }, {
            duration: 2e3,
            easing: "swing",
            step: function() {
                e.text(Math.floor(this.countNum))
            },
            complete: function() {
                e.text(this.countNum)
            }
        })
    }), a = 1)
});

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-1", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-2", {
    y: "-100%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-4", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-5", {
    y: "-1200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-6", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-7", {
    y: "-200%",
    ease: Linear.easeNone
}).addTo(controller);
controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
    }
});
new ScrollMagic.Scene({
    triggerElement: ".polygon-shape"
}).setTween(".polygon-shape > .polygon-a-9", {
    y: "100%",
    ease: Linear.easeNone
}).addTo(controller);

/* Custom JS Code */
function thememenu() {
    jQuery(".overlay-menu-block nav > ul").each(function() {
        0 < jQuery(this).find("ul.sub-menu").length && jQuery(this).find(".menu-item-has-children").append('<span class="has-btn"></span>')
    }), jQuery(".has-btn").click(function() {
        jQuery(this).parent().hasClass("open") ? (jQuery(".sub-menu").slideUp(), jQuery(".overlay-menu-block nav .menu-item-has-children").removeClass("open")) : (jQuery(".sub-menu").slideUp(), jQuery(this).prev("ul").slideDown(), jQuery(".overlay-menu-block nav .menu-item-has-children").removeClass("open"), jQuery(this).parent().addClass("open"))
    })
}
jQuery(document).ready(function() {
    jQuery(".custom-table-filter ul li a").click(function() {
        jQuery(".custom-table-filter ul li a").removeClass("active"), jQuery(this).addClass("active")
    }), jQuery(".advanced-title").click(function() {
        jQuery(".advanced-block-m").slideToggle(), jQuery(".advanced-title").toggleClass("open-advanced-form")
    })
}), 
jQuery(window).on("load", function() {
    jQuery(".se-pre-con").fadeOut("slow"), AOS.init({
        duration: 1e3,
        once: !0
    }), thememenu(), AOS.init({}), jQuery(window).scroll(function() {
        jQuery(".scroll-line").css("opacity", 1 - jQuery(window).scrollTop() / jQuery(".landing-slider-sec").height()), jQuery(window).scrollTop() >= .65 * jQuery(window).height() ? (jQuery(".social-icons").addClass("social-icons-black"), jQuery(".scroll-line").fadeOut(1e3)) : (jQuery(".social-icons").removeClass("social-icons-black"), jQuery(".scroll-line").fadeIn(1e3))
    })
}), 

jQuery(document).ready(function() {
    var e;
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
    }), 
    jQuery('.popup-model').click(function(e){
        var tabId = jQuery(e.currentTarget).data('tabId');
        jQuery('#' + tabId).addClass("open-modal");
        jQuery(".dark_back_modal").addClass("open-overlay");
    });
    jQuery(".close_modal").click(function() {
        jQuery(".contact_side_modal").removeClass("open-modal"), jQuery(".dark_back_modal").removeClass("open-overlay")
    }), 
    jQuery(".dark_back_modal").click(function() {
        jQuery(this).removeClass("open-overlay"), jQuery(".contact_side_modal").removeClass("open-modal")
    }), 
    jQuery(".scroll-label").click(function(e) {
        e.preventDefault(), (e = jQuery(jQuery(this).attr("href"))).length && (e = e.offset().top, jQuery("body, html").animate({
            scrollTop: e + "px"
        }, 800))
    }), -1 != navigator.userAgent.indexOf("Mac OS X") ? jQuery("body").addClass("mac") : jQuery("body").addClass("pc"), jQuery("#toggle").click(function() {
        jQuery(this).toggleClass("menu-open"), jQuery(".main-menu ul").slideToggle()
    }), 
    jQuery(".tabs-dropdown .select-tab a").click(function() {
        jQuery(".tabs-dropdown .tabs-options ul").toggle()
    }), jQuery(".tabs-dropdown .tabs-options ul li a").click(function() {
        var e = jQuery(this).attr("data-tab");
        jQuery(".tabs-options ul li").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery("#" + e).addClass("current"), e = jQuery(this).html(), jQuery(".tabs-dropdown .select-tab a span").html(e), jQuery(".tabs-dropdown .tabs-options ul").hide()
    }), jQuery(document).bind("click", function(e) {
        jQuery(e.target).parents().hasClass("tabs-dropdown") || jQuery(".tabs-dropdown .tabs-options ul").hide()
    }), jQuery("ul.tabs li").click(function() {
        var e = jQuery(this).attr("data-tab");
        jQuery("ul.tabs li").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery(this).addClass("current"), jQuery("#" + e).addClass("current"), window.history.pushState("", "", "#" + e), AOS.refresh()
    }); window.location.hash && (e = window.location.hash.substr(1), jQuery("ul.tabs li").removeClass("current"), jQuery(".tab-content").removeClass("current"), jQuery('[data-tab="' + e + '"]').addClass("current"), jQuery("#" + e).addClass("current"), window.history.pushState("", "", "#" + e), window.scrollTo(0, 0), AOS.refresh()), jQuery(".apply-now-btn").click(function() {
        jQuery("#apply-now-btn").addClass("open-modal"), jQuery(".dark_back_modal").addClass("open-overlay")
    }); 
});
jQuery(document).ready(function() {
    width_counter();
}); 
jQuery(window).on("load", function() {
    width_counter();
}); 
jQuery(window).on("resize", function() {
    width_counter();
}); 
    width_counter = function() {
    var e = jQuery(window).width(),
        o = jQuery(".container").width(),
        a = e - jQuery(".container-1554").width(),
        o = parseInt((e - o) / 2) - parseInt(15),
        a = parseInt(a / 2) - parseInt(15);
    jQuery(".container-left").css("padding-left", o), jQuery(".container-right").css("padding-right", o), jQuery(".container-right-margin").css("margin-right", o), jQuery(".container-left-margin").css("margin-left", o), jQuery(".container-left-1554").css("margin-right", a), jQuery(".container-right-1554").css("margin-left", a), jQuery(".container-right-margin-1554").css("margin-right", a), jQuery(".container-left-margin-1554").css("margin-left", a)
    }
jQuery(".js-menu-trigger").click(function() {
    jQuery(".js-navigation").toggleClass("is-opened")
});