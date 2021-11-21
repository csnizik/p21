/* Homepage Main Slider */
function indexInParent(idPageTopBanner) {
    for (var childNodes = idPageTopBanner.parentNode.childNodes, n = 0, i = 0; i < childNodes.length; i++) {
        if (childNodes[i] == idPageTopBanner) return n;
        childNodes[i].nodeType == 1 && n++
    }
    return -1
}

function eq(e) {
    return 0 <= e && e < this.length ? this[e] : -1
}

function q_animate(e, t, n) {
    if ("stagTop" === t && TweenMax.staggerFromTo(e, 1, {
        alpha: 0,
        y: 130
    }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: n
    }, .15), "fadeOut" === t && TweenMax.to(e, .3, {
        alpha: 0,
        ease: Power1.easeOut,
        delay: n
    }, .15), "stagLeft" === t && TweenMax.staggerFromTo(e, 1.5, {
        alpha: 0,
        x: 200
    }, {
        alpha: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: n
    }, .1), "stagRight" === t && TweenMax.staggerFromTo(e, 1.5, {
        alpha: 0,
        x: -200
    }, {
        alpha: 1,
        x: 0,
        ease: Power4.easeOut,
        delay: n
    }, .1), "slideTop" === t && TweenMax.fromTo(e, 1.5, {
        alpha: 0,
        y: 50
    }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: n
    }), "slideLeft" === t) TweenMax.fromTo(e, 1.5, {
        alpha: 0,
        xPercent: -100
    }, {
        alpha: 1,
        xPercent: 0,
        ease: Expo.easeOut,
        delay: n
    });
    else if ("sideLeft" === t) TweenMax.staggerFromTo(e, 1.5, {
        alpha: 0,
        x: 120
    }, {
        alpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: n
    }, .2);
    else if ("clientLeft" === t) TweenMax.staggerFromTo(e, 1.5, {
        alpha: 0,
        x: 180
    }, {
        alpha: .6,
        x: 0,
        ease: Expo.easeOut,
        delay: n
    }, .05);
    else if ("sideRight" === t) TweenMax.staggerFromTo(e, 1.5, {
        alpha: 0,
        x: -120
    }, {
        alpha: 1,
        x: 0,
        ease: Expo.easeOut,
        delay: n
    }, .2);
    else if ("clipRight" === t) TweenMax.staggerTo(e, 1, {
        clipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut,
        delay: n
    }, .1);
    else if ("splitLeft" === t) {
        var i = e.textContent.split("");
        e.innerHTML = "";
        for (var o = 0; o < i.length; o++) e.innerHTML += "<span>" + i[o] + "</span>";
        var r = e.querySelectorAll("span");
        TweenMax.set(r, {
            x: 110,
            alpha: 0
        }), setTimeout(function() {
            TweenMax.staggerTo(r, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, .03)
        }, n)
    } else if ("splitRight" === t) {
        i = e.textContent.split("");
        e.innerHTML = "";
        for (o = 0; o < i.length; o++) e.innerHTML += "<span>" + i[o] + "</span>";
        r = e.querySelectorAll("span");
        TweenMax.set(r, {
            x: -110,
            alpha: 0
        }), setTimeout(function() {
            TweenMax.staggerTo(r, 1.5, {
                x: 0,
                alpha: 1,
                ease: Power4.easeInOut
            }, -.02)
        }, n)
    }
}

function qMagnet(classQMagnet) {
    if (540 < window.innerWidth)
    for (var t = classQMagnet.length - 1; 0 <= t; t--) {
        var n = classQMagnet[t],
        i = n.getAttribute("friction") || .3;
        n.addEventListener("mouseover", function() {
            this.classList.add("hovered")
        }), n.addEventListener("mouseout", function() {
            this.classList.remove("hovered"), this.style.transform = "translate(0px, 0px)"
        }), n.addEventListener("mousemove", function(e) {
            var t = this.getBoundingClientRect(),
            n = t.left + t.width / 2,
            t = t.top + t.height / 2,
            n = Math.floor(n - e.clientX) * i * -1,
            e = Math.floor(t - e.clientY) * i * -1;
            TweenMax.to(this, 0, {
                x: n,
                y: e
            })
        })
    }
}

function qReveal(e, t, n, i, o) {
    var classRevItem = document.querySelectorAll(".rev_item");
    if (TweenMax.set(classRevItem, {
        alpha: 0
    }), 0 < e.length) {
        for (var s = e.length - 1; 0 <= s; s--) {
            var a = e[s];
            a.querySelectorAll(".rev_item");
            new MutationObserver(function(e) {
                animateReveal(e)
            }).observe(a, {
                attributes: !0,
                attributeFilter: ["class"],
                childList: !1,
                characterData: !1
            })
        }
        window.addEventListener("scroll", function() {
            qRevealScroll(e, t, n, i, o)
        })
    }
}

function qSlide(sectionQSlide) {
    sectionQSlide.classList.add("q_slide");
    var classSlide = sectionQSlide.querySelectorAll(".slide"),
    classPagination = sectionQSlide.querySelector(".pagination"),
    idBar = document.getElementById("bar");
    
    function m() {
        var e, t;
        null != sectionQSlide.getAttribute("autoplay") && (e = sectionQSlide.getAttribute("autoplay") || 4e3, idBar && (t = sectionQSlide.getAttribute("autoplay") || 4e3, TweenMax.fromTo(idBar, t / 1e3, {
            height: "0%"
        }, {
            height: "100%"
        })), setTimeout(function() {
            n(sectionQSlide, !1, !0)
        }, e))
    }
    var g, w = 1;
    
    function o(sectionQSlide, slideIndex, n) {
        var i, o, r, s, a, l, c, u, h;
        "true" !== sectionQSlide.getAttribute("wait") && (l = sectionQSlide.querySelectorAll(".slide-content"), i = sectionQSlide.querySelector(".q_current"), o = i.querySelector(".image-container"), slideIndex = indexInParent(r = eq.call(classSlide, slideIndex)), s = r.querySelector(".image-container"), a = r.querySelector(".slide-content") || l[slideIndex], l = sectionQSlide.querySelectorAll(".q_split_wrap"), a && (c = a.querySelectorAll(".q_split_wrap")), r !== i && (r.classList.add("is-new"), clearTimeout(0), classPagination && (u = classPagination.querySelectorAll(".item"), slideIndex = classPagination.querySelector(".q_current"), h = indexInParent(sectionQSlide.querySelector(".is-new")), slideIndex.classList.remove("q_current"), u[h].classList.add("q_current")), sectionQSlide.setAttribute("wait", "true"), u = -sectionQSlide.clientWidth * w + "px", h = sectionQSlide.clientWidth * w + "px", r.style.display = "block", r.style.width = 0, r.style.right = "", r.style.left = 0, r.style.zIndex = 2, s.style.width = sectionQSlide.clientWidth + "px", o.style.transform = "translateX(0)", TweenMax.set(s, {
            x: u
        }), g && (s.style.opacity = g), a && (a.style.width = sectionQSlide.clientWidth + "px", a.style.right = "auto", a.style.left = 0), g ? TweenMax.to(o, 1.5, {
            x: h,
            opacity: g,
            ease: Expo.easeInOut
        }) : TweenMax.to(o, 1.5, {
            x: h,
            ease: Expo.easeInOut
        }), TweenMax.to(r, 1.5, {
            width: sectionQSlide.clientWidth,
            ease: Expo.easeInOut
        }), idBar && setTimeout(function() {
            TweenMax.set(idBar, {
                height: "0%"
            })
        }, 800), TweenMax.to(s, 1.5, {
            x: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            onComplete: function() {
                r.classList.add("q_current"), r.classList.remove("is-new"), i.classList.remove("q_current"), r.removeAttribute("style"), s.removeAttribute("style"), a && a.removeAttribute("style"), o.removeAttribute("style"), sectionQSlide.setAttribute("wait", "false"), n && m()
            }
        }), null != sectionQSlide.getAttribute("animate") && (h = sectionQSlide.getAttribute("animate") || "stagTop", q_animate(l, "fadeOut", .5), q_animate(c, h, .6))))
    }
    
    function n(e, t, n) {
        var i = e.querySelector(".q_current");
        o(e, indexInParent(t ? i.previousElementSibling || classSlide[classSlide.length - 1] : i.nextElementSibling || classSlide[0]), n)
    }
    null != sectionQSlide.getAttribute("parallax") && (w = sectionQSlide.getAttribute("parallax") || .25), null != sectionQSlide.getAttribute("opacity") && (g = sectionQSlide.getAttribute("opacity") || .6);
    for (var e = classSlide.length - 1; 0 <= e; e--)(s = classSlide[e]).classList.add("is-loaded");
    var t, i = sectionQSlide.querySelector(".arrows");
    if (i && (t = i.querySelector(".next"), i = i.querySelector(".prev"), t.addEventListener("click", function(e) {
        n(sectionQSlide, !1)
    }), i.addEventListener("click", function(e) {
        n(sectionQSlide, !0)
    })), classPagination)
    for (var r = classPagination.querySelectorAll(".item"), e = r.length - 1; 0 <= e; e--) r[e].addEventListener("click", function(e) {
        o(sectionQSlide, indexInParent(e.target))
    });
    if (m(), null != sectionQSlide.getAttribute("mousefollow") && 540 < window.innerWidth) {
        for (e = classSlide.length - 1; 0 <= e; e--) {
            var s = classSlide[e].querySelector(".image-wrapper");
            TweenMax.set(s, {
                scale: 1.1
            })
        }
        sectionQSlide.onmousemove = function(e) {
            ! function(e) {
                var t = Math.max(-100, Math.min(100, sectionQSlide.clientWidth / 2 - e.clientX)),
                e = Math.max(-100, Math.min(100, sectionQSlide.clientHeight / 2 - e.clientY));
                x = 25 * t / 100, y = 15 * e / 100;
                for (var n = classSlide.length - 1; 0 <= n; n--) {
                    var i = classSlide[n].querySelector(".image-wrapper");
                    TweenMax.to(i, 3, {
                        autoAlpha: 1,
                        x: x,
                        y: y,
                        ease: Power1.easeOut
                    })
                }
            }(e)
        }
    }
}
function init() {
    var classQMagnet = document.querySelectorAll(".q_magnet"),
        idQSlide = document.getElementById("q_slide"),
        classReveal = document.querySelectorAll(".reveal"),
        idLogoWrap = document.getElementById("logo-wrap"),
        idLogoBox = document.getElementById("logo-box"),
        tagHead = (document.getElementById("footer"), document.getElementById("head")),
        idYearCopy = document.getElementById("year_copy");
    qReveal(classReveal, idLogoWrap, idLogoBox, tagHead), idQSlide && qSlide(idQSlide), 0 < classQMagnet.length && qMagnet(classQMagnet), window.scroll(0, 0), idYearCopy && (classQMagnet = new Date, idYearCopy.innerHTML = 'classQMagnet.getFullYear()')
}

init();



