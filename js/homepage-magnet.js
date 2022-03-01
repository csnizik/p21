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

function qSlide(sectionQSlide) {
    sectionQSlide.classList.add("q_slide");
    var classSlide = sectionQSlide.querySelectorAll(".slide")

    if (540 < window.innerWidth) {

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
        idQSlide = document.getElementById("q_slide")
    idQSlide && qSlide(idQSlide), 0 < classQMagnet.length && qMagnet(classQMagnet), window.scroll(0, 0)
}

init();



