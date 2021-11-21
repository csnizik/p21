/*!
Name: Homepage Auto Rotare Text
Verison: 1.0
Author: Scott Alguire
Repository: https://github.com/scottalguire/grouploop
*/
! function(d) {
    d.fn.extend({
        grouploop: function(n) {
            var i, e, t = d.extend({
                    velocity: 2,
                    forward: !0,
                    childNode: ".item",
                    childWrapper: ".item-wrap",
                    pauseOnHover: !0,
                    complete: null
                }, n),
                r = this,
                o = d(window).width() <= 768 ? 2 * d(window).width() : d(window).width(),
                a = t.velocity;

            function c() {
                t.forward ? i <= 0 ? (i += 1 * a, d(r).find(t.childWrapper).css("transform", "translateX(" + i + "px)")) : (d(r).find(t.childWrapper).css("transform", "translateX(" + -o + ")"), i = -o) : -o <= i ? (i -= 1 * a, d(r).find(t.childWrapper).css("transform", "translateX(" + i + "px)")) : (d(r).find(t.childWrapper).css("transform", "translateX(0)"), i = 0), e = window.requestAnimationFrame(c)
            }
            return window.addEventListener("resize", function() {
                (o = d(window).width()) <= 768 ? (console.log("Small breakpoint. Doubling wrapper width"), o *= 2) : o = d(window).width()
            }), t.forward ? (i = -o, d(r).each(function(n, i) {
                d(i).find(t.childWrapper).each(function(n, i) {
                    d(d(i).find(d(t.childNode).get().reverse())).each(function() {
                        d(this).clone().prependTo(i)
                    })
                })
            })) : (i = d(r).find(t.childWrapper).css("transform").split(/[()]/)[1].split(",")[4], d(r).each(function(n, i) {
                d(i).find(t.childWrapper).each(function(n, i) {
                    d(i).find(t.childNode).each(function() {
                        d(this).clone().appendTo(i)
                    })
                })
            })), e = window.requestAnimationFrame(c), t.pauseOnHover && d(this).hover(function() {
                cancelAnimationFrame(e)
            }, function() {
                e = window.requestAnimationFrame(c)
            }), this.each(function() {
                d.isFunction(t.complete) && t.complete.call(this)
            })
        }
    })
}(jQuery);

