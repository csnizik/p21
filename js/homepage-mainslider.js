/* Homepage Main Slider */
function indexInParent(e) {
    for (var t = e.parentNode.childNodes, n = 0, i = 0; i < t.length; i++) {
        if (t[i] == e) return n;
        1 == t[i].nodeType && n++
    }
    return -1
}

function eq(e) {
    return 0 <= e && e < this.length ? this[e] : -1
}

function preventDefault(e) {
    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) return preventDefault(e), !1
}

function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function runDynamicLoad(e) {
    var t = document.getElementById("dynamicLoad").querySelector(".bar"),
        n = e.querySelectorAll("img"),
        i = 0,
        o = n.length;

    function r() {
        var e = 100 / o * (i += 1) << 0;
        t.style.width = e + "%", i === o && setTimeout(function() {
            l()
        }, 200)
    }
    0 == o && setTimeout(function() {
        l()
    }, 100);
    for (var s = 0; s < o; s++) {
        var a = new Image;
        a.onload = r, a.onerror = r, a.src = n[s].src
    }

    function l() {
        setTimeout(function() {
            init(), TweenMax.to({
                alpha: 1
            })
        }, 500)
    }
}

function init() {
    var e = document.querySelectorAll(".q_magnet"),
        t = document.getElementById("q_slide"),
        n = document.querySelectorAll(".reveal"),
        i = document.getElementById("logo-wrap"),
        o = document.getElementById("logo-box"),
        r = (document.getElementById("footer"), document.getElementById("head")),
        s = document.getElementById("year_copy");
    qReveal(n, i, o, r), t && qSlide(t), 0 < e.length && qMagnet(e), window.scroll(0, 0), s && (e = new Date, s.innerHTML = e.getFullYear())
}! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Barba", [], t) : "object" == typeof exports ? exports.Barba = t() : e.Barba = t()
}(this, function() {
    return o = {}, n.m = i = [function(e, t, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        n = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5)
        };
        e.exports = n
    }, function(f, e, t) {
        (function(e) {
            function i() {}

            function r(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
            }

            function o(n, i) {
                for (; 3 === n._state;) n = n._value;
                return 0 === n._state ? void n._deferreds.push(i) : (n._handled = !0, void h(function() {
                    var e, t = 1 === n._state ? i.onFulfilled : i.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void a(i.promise, e)
                        }
                        s(i.promise, e)
                    } else(1 === n._state ? s : a)(i.promise, n._value)
                }))
            }

            function s(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof r) return e._state = 3, e._value = t, void l(e);
                        if ("function" == typeof n) return void u((i = n, o = t, function() {
                            i.apply(o, arguments)
                        }), e)
                    }
                    e._state = 1, e._value = t, l(e)
                } catch (t) {
                    a(e, t)
                }
                var i, o
            }

            function a(e, t) {
                e._state = 2, e._value = t, l(e)
            }

            function l(e) {
                2 === e._state && 0 === e._deferreds.length && h(function() {
                    e._handled || d(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                e._deferreds = null
            }

            function c(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function u(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, s(t, e))
                    }, function(e) {
                        n || (n = !0, a(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, a(t, e)
                }
            }
            var t, n, h, d;
            t = this, n = setTimeout, h = "function" == typeof e && e || function(e) {
                n(e, 0)
            }, d = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, r.prototype.catch = function(e) {
                return this.then(null, e)
            }, r.prototype.then = function(e, t) {
                var n = new this.constructor(i);
                return o(this, new c(e, t, n)), n
            }, r.all = function(e) {
                var a = Array.prototype.slice.call(e);
                return new r(function(o, r) {
                    if (0 === a.length) return o([]);
                    for (var s = a.length, e = 0; e < a.length; e++) ! function t(n, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var i = e.then;
                                if ("function" == typeof i) return i.call(e, function(e) {
                                    t(n, e)
                                }, r), 0
                            }
                            a[n] = e, 0 == --s && o(a)
                        } catch (e) {
                            r(e)
                        }
                    }(e, a[e])
                })
            }, r.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
                    e(t)
                })
            }, r.reject = function(n) {
                return new r(function(e, t) {
                    t(n)
                })
            }, r.race = function(o) {
                return new r(function(e, t) {
                    for (var n = 0, i = o.length; n < i; n++) o[n].then(e, t)
                })
            }, r._setImmediateFn = function(e) {
                h = e
            }, r._setUnhandledRejectionFn = function(e) {
                d = e
            }, void 0 !== f && f.exports ? f.exports = r : t.Promise || (t.Promise = r)
        }).call(e, t(2).setImmediate)
    }, function(e, l, c) {
        (function(e, t) {
            function n(e, t) {
                this._id = e, this._clearFn = t
            }
            var i = c(3).nextTick,
                o = Function.prototype.apply,
                r = Array.prototype.slice,
                s = {},
                a = 0;
            l.setTimeout = function() {
                return new n(o.call(setTimeout, window, arguments), clearTimeout)
            }, l.setInterval = function() {
                return new n(o.call(setInterval, window, arguments), clearInterval)
            }, l.clearTimeout = l.clearInterval = function(e) {
                e.close()
            }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, l.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, l.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, l._unrefActive = l.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                0 <= t && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, l.setImmediate = "function" == typeof e ? e : function(e) {
                var t = a++,
                    n = !(arguments.length < 2) && r.call(arguments, 1);
                return s[t] = !0, i(function() {
                    s[t] && (n ? e.apply(null, n) : e.call(null), l.clearImmediate(t))
                }), t
            }, l.clearImmediate = "function" == typeof t ? t : function(e) {
                delete s[e]
            }
        }).call(l, c(2).setImmediate, c(2).clearImmediate)
    }, function(e, t) {
        function n() {
            u && l && (u = !1, l.length ? c = l.concat(c) : h = -1, c.length && i())
        }

        function i() {
            if (!u) {
                var e = s(n);
                u = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++h < t;) l && l[h].run();
                    h = -1, t = c.length
                }
                l = null, u = !1, a(e)
            }
        }

        function o(e, t) {
            this.fun = e, this.array = t
        }

        function r() {}
        var s, a, e = e.exports = {};
        ! function() {
            try {
                s = setTimeout
            } catch (e) {
                s = function() {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                a = clearTimeout
            } catch (e) {
                a = function() {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var l, c = [],
            u = !1,
            h = -1;
        e.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new o(e, t)), 1 !== c.length || u || s(i, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = r, e.addListener = r, e.once = r, e.off = r, e.removeListener = r, e.removeAllListeners = r, e.emit = r, e.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, e.cwd = function() {
            return "/"
        }, e.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, e.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        var i = n(5),
            n = {
                oldContainer: void 0,
                newContainer: void 0,
                newContainerLoading: void 0,
                extend: function(e) {
                    return i.extend(this, e)
                },
                init: function(e, t) {
                    var n = this;
                    return this.oldContainer = e, this._newContainerPromise = t, this.deferred = i.deferred(), this.newContainerReady = i.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(e) {
                        n.newContainer = e, n.newContainerReady.resolve()
                    }), this.deferred.promise
                },
                done: function() {
                    this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                },
                start: function() {}
            };
        e.exports = n
    }, function(e, t) {
        var n = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(e) {
                return e.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(e) {
                var t = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function() {
                    if (4 === n.readyState) return 200 === n.status ? t.resolve(n.responseText) : t.reject(new Error("xhr: HTTP code is not 200"))
                }, n.ontimeout = function() {
                    return t.reject(new Error("xhr: Timeout exceeded"))
                }, n.open("GET", e), n.timeout = this.xhrTimeout, n.setRequestHeader("x-barba", "yes"), n.send(), t.promise
            },
            extend: function(e, t) {
                var n, i = Object.create(e);
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                return i
            },
            deferred: function() {
                return new function() {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function(e, t) {
                        this.resolve = e, this.reject = t
                    }.bind(this))
                }
            },
            getPort: function(e) {
                var t = void 0 !== e ? e : window.location.port,
                    e = window.location.protocol;
                return "" != t ? parseInt(t) : "http:" === e ? 80 : "https:" === e ? 443 : void 0
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var o = n(7),
            i = n(5),
            n = {
                namespace: null,
                extend: function(e) {
                    return i.extend(this, e)
                },
                init: function() {
                    var i = this;
                    o.on("initStateChange", function(e, t) {
                        t && t.namespace === i.namespace && i.onLeave()
                    }), o.on("newPageReady", function(e, t, n) {
                        i.container = n, e.namespace === i.namespace && i.onEnter()
                    }), o.on("transitionCompleted", function(e, t) {
                        e.namespace === i.namespace && i.onEnterCompleted(), t && t.namespace === i.namespace && i.onLeaveCompleted()
                    })
                },
                onEnter: function() {},
                onEnterCompleted: function() {},
                onLeave: function() {},
                onLeaveCompleted: function() {}
            };
        e.exports = n
    }, function(e, t) {
        var n = {
            events: {},
            on: function(e, t) {
                this.events[e] = this.events[e] || [], this.events[e].push(t)
            },
            off: function(e, t) {
                e in this.events != 0 && this.events[e].splice(this.events[e].indexOf(t), 1)
            },
            trigger: function(e) {
                if (e in this.events != 0)
                    for (var t = 0; t < this.events[e].length; t++) this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            n = {
                data: {},
                extend: function(e) {
                    return i.extend(this, e)
                },
                set: function(e, t) {
                    this.data[e] = t
                },
                get: function(e) {
                    return this.data[e]
                },
                reset: function() {
                    this.data = {}
                }
            };
        e.exports = n
    }, function(e, t) {
        e.exports = {
            history: [],
            add: function(e, t) {
                t = t || void 0, this.history.push({
                    url: e,
                    namespace: t
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var e = this.history;
                return e.length < 2 ? null : e[e.length - 2]
            }
        }
    }, function(e, t, n) {
        var o = n(5),
            i = n(7),
            r = n(11),
            s = n(8),
            a = n(9),
            s = {
                Dom: n(12),
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function() {
                    this.init()
                },
                init: function() {
                    var e = this.Dom.getContainer();
                    this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(e)), i.trigger("initStateChange", this.History.currentStatus()), i.trigger("newPageReady", this.History.currentStatus(), {}, e, this.Dom.currentHTML), i.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                },
                bindEvents: function() {
                    document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                },
                getCurrentUrl: function() {
                    return o.cleanLink(o.getCurrentUrl())
                },
                goTo: function(e) {},
                forceGoTo: function(e) {
                    window.location = e
                },
                load: function(e) {
                    var t = o.deferred(),
                        n = this,
                        i = this.Cache.get(e);
                    return i || (i = o.xhr(e), this.Cache.set(e, i)), i.then(function(e) {
                        e = n.Dom.parseResponse(e);
                        n.Dom.putContainer(e), n.cacheEnabled || n.Cache.reset(), t.resolve(e)
                    }, function() {
                        n.forceGoTo(e), t.reject()
                    }), t.promise
                },
                getHref: function(e) {
                    if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0
                },
                onLinkClick: function(e) {
                    for (var t = e.target; t && !this.getHref(t);) t = t.parentNode;
                    this.preventCheck(e, t)
                },
                preventCheck: function(e, t) {},
                getTransition: function() {
                    return r
                },
                onStateChange: function() {
                    var e = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(e), this.History.currentStatus().url === e) return !1;
                    this.History.add(e);
                    var t = this.load(e),
                        e = Object.create(this.getTransition());
                    this.transitionProgress = !0, i.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    e = e.init(this.Dom.getContainer(), t);
                    t.then(this.onNewContainerLoaded.bind(this)), e.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function(e) {
                    this.History.currentStatus().namespace = this.Dom.getNamespace(e), i.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), e, this.Dom.currentHTML)
                },
                onTransitionEnd: function() {
                    this.transitionProgress = !1, i.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                }
            };
        e.exports = s
    }, function(e, t, n) {
        n = n(4).extend({
            start: function() {
                this.newContainerLoading.then(this.finish.bind(this))
            },
            finish: function() {
                document.body.scrollTop = 0, this.done()
            }
        });
        e.exports = n
    }, function(e, t) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper-1",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(e) {
                this.currentHTML = e;
                var t = document.createElement("div");
                t.innerHTML = e;
                e = t.querySelector("title");
                return e && (document.title = e.textContent), this.getContainer(t)
            },
            getWrapper: function() {
                var e = document.getElementById(this.wrapperId);
                if (!e) throw new Error("Barba.js: wrapper not found!");
                return e
            },
            getContainer: function(e) {
                if (!(e = e || document.body)) throw new Error("Barba.js: DOM not ready!");
                e = this.parseContainer(e);
                if (e && e.jquery && (e = e[0]), !e) throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function(e) {
                return e && e.dataset ? e.dataset[this.dataNamespace] : e ? e.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(e) {
                e.style.visibility = "hidden", this.getWrapper().appendChild(e)
            },
            parseContainer: function(e) {
                return e.querySelector("." + this.containerClass)
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            o = n(10),
            n = {
                ignoreClassLink: "no-barba-prefetch",
                init: function() {},
                onLinkEnter: function(e) {
                    for (var t, n = e.target; n && !o.getHref(n);) n = n.parentNode;
                    n && !n.classList.contains(this.ignoreClassLink) && (t = o.getHref(n), o.preventCheck(e, n) && !o.Cache.get(t) && (e = i.xhr(t), o.Cache.set(t, e)))
                }
            };
        e.exports = n
    }], n.c = o, n.p = "", n(0);

    function n(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
    }
    var i, o
}), document.addEventListener("DOMContentLoaded", function() {
    Barba.Pjax.start()
}), Barba.Dispatcher.on("initStateChange", function() {
    "function" == typeof ga && ga("send", "pageview", location.pathname)
}), Barba.Dispatcher.on("newPageReady", function(e, t, n) {
    runDynamicLoad(n)
}), Barba.Dispatcher.on("transitionCompleted", function(e, t) {});
var HideShowTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.finish.bind(this))
    },
    fadeOut: function() {},
    finish: function() {
        this.newContainer.style.opacity = 0, this.done()
    }
});

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

function animateText() {
    for (var e = document.getElementById("lettr").querySelectorAll("font"), t = e.length - 1; 0 <= t; t--) ! function(e) {
        var t = e.textContent.split("");
        for (e.innerHTML = "", w = 0; w < t.length; w++) e.innerHTML += "<span>" + t[w] + "</span>";
        chars = e.querySelectorAll("span");
        for (var n = chars.length - 1; 0 <= n; n--) {
            var i = chars[n];
            !void(i.style.transitionDelay = .1 * n + "s")
        }
    }(e[t])
}

function qMagnet(e) {
    if (540 < window.innerWidth)
        for (var t = e.length - 1; 0 <= t; t--) {
            var n = e[t],
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

function animateReveal(e) {
    var t = e[0].target,
        n = t.querySelectorAll(".rev_item");
    0 < n.length && (t.classList.contains("q_active") ? q_animate(n, "stagTop", .3) : TweenMax.to(n, .5, {
        alpha: 0
    }));
    e = t.querySelectorAll(".rev_line");
    0 < e.length && (t.classList.contains("q_active") ? TweenMax.to(e[0], 1.2, {
        x: 0,
        width: 72,
        ease: Expo.easeInOut
    }) : TweenMax.to(e[0], 1.2, {
        x: 100,
        width: 0,
        ease: Expo.easeInOut
    }));
    n = t.querySelectorAll(".rev_item_delay");
    0 < n.length && (t.classList.contains("q_active") ? q_animate(n, "stagTop", .5) : TweenMax.to(n, .5, {
        alpha: 0
    }));
    e = t.querySelectorAll(".rev_clip");
    0 < e.length && (n = e[0].clientWidth, t.classList.contains("q_active") ? e[0].classList.contains("delay") ? TweenMax.fromTo(e, 1.2, {
        x: -100,
        alpha: 1,
        clipPath: "inset(0px " + n + "px 0px 0px)",
        webkitClipPath: "inset(0px " + n + "px 0px 0px)"
    }, {
        x: 0,
        alpha: 1,
        clipPath: "inset(0px 0px 0px 0px)",
        webkitClipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut,
        delay: .15
    }) : TweenMax.fromTo(e, 1.8, {
        x: -100,
        alpha: 1,
        clipPath: "inset(0px " + n + "px 0px 0px)",
        webkitClipPath: "inset(0px " + n + "px 0px 0px)"
    }, {
        x: 0,
        alpha: 1,
        clipPath: "inset(0px 0px 0px 0px)",
        webkitClipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut
    }) : TweenMax.to(e, 1, {
        alpha: 0,
        x: -50,
        ease: Power4.easeInOut
    }));
    e = t.querySelectorAll(".rev_scale");
    0 < e.length && (i = e[0], t.classList.contains("q_active") ? TweenMax.fromTo(i, 2.8, {
        css: {
            scale: 1.3,
            opacity: .5
        }
    }, {
        css: {
            scale: 1,
            opacity: 1
        },
        ease: Power3.easeOut
    }) : TweenMax.to(i, 1, {
        css: {
            scale: 1.3,
            opacity: .5
        },
        ease: Power3.easeIn
    }));
    e = t.querySelectorAll(".rev_letter");
    0 < e.length && (i = e[0], t.classList.contains("q_active") && q_animate(i, "splitLeft", .6));
    var i = t.querySelectorAll(".rev_client");
    0 < i.length && t.classList.contains("q_active") && q_animate(i, "clientLeft", .6)
}

function qReveal(e, t, n, i, o) {
    var r = document.querySelectorAll(".rev_item");
    if (TweenMax.set(r, {
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

function qRevealScroll(e, i, o, r) {
    for (var t = window.scrollY, n = e.length - 1; 0 <= n; n--) ! function(e, t) {
        var n = e.offsetTop - window.innerHeight / 1.2 + 100;
        if (e.clientHeight, e.querySelectorAll(".rev_item"), 100 < t ? (i.classList.add("active"), o.classList.add("active")) : t < 100 && (i.classList.remove("active"), o.classList.remove("active")), t < 10) e.classList.contains("q_active") && e.classList.remove("q_active");
        else {
            if (n < t) {
                if (e.classList.contains("q_active")) return;
                e.classList.add("q_active")
            }
            e = document.getElementById("footer");
            e && ((e = e.offsetTop - window.innerHeight / 2) < t ? menu.classList.contains("active") || r.classList.add("hide") : t < e && r.classList.remove("hide"))
        }
    }(e[n], t)
}

function qSlide(d) {
    d.classList.add("q_slide");
    var f = d.querySelectorAll(".slide"),
        v = d.querySelector(".pagination"),
        p = document.getElementById("bar");

    function m() {
        var e, t;
        null != d.getAttribute("autoplay") && (e = d.getAttribute("autoplay") || 4e3, p && (t = d.getAttribute("autoplay") || 4e3, TweenMax.fromTo(p, t / 1e3, {
            height: "0%"
        }, {
            height: "100%"
        })), setTimeout(function() {
            n(d, !1, !0)
        }, e))
    }
    var g, w = 1;

    function o(e, t, n) {
        var i, o, r, s, a, l, c, u, h;
        "true" !== e.getAttribute("wait") && (l = e.querySelectorAll(".slide-content"), i = e.querySelector(".q_current"), o = i.querySelector(".image-container"), t = indexInParent(r = eq.call(f, t)), s = r.querySelector(".image-container"), a = r.querySelector(".slide-content") || l[t], l = e.querySelectorAll(".q_split_wrap"), a && (c = a.querySelectorAll(".q_split_wrap")), r !== i && (r.classList.add("is-new"), clearTimeout(0), v && (u = v.querySelectorAll(".item"), t = v.querySelector(".q_current"), h = indexInParent(d.querySelector(".is-new")), t.classList.remove("q_current"), u[h].classList.add("q_current")), e.setAttribute("wait", "true"), u = -e.clientWidth * w + "px", h = e.clientWidth * w + "px", r.style.display = "block", r.style.width = 0, r.style.right = "", r.style.left = 0, r.style.zIndex = 2, s.style.width = e.clientWidth + "px", o.style.transform = "translateX(0)", TweenMax.set(s, {
            x: u
        }), g && (s.style.opacity = g), a && (a.style.width = e.clientWidth + "px", a.style.right = "auto", a.style.left = 0), g ? TweenMax.to(o, 1.5, {
            x: h,
            opacity: g,
            ease: Expo.easeInOut
        }) : TweenMax.to(o, 1.5, {
            x: h,
            ease: Expo.easeInOut
        }), TweenMax.to(r, 1.5, {
            width: e.clientWidth,
            ease: Expo.easeInOut
        }), p && setTimeout(function() {
            TweenMax.set(p, {
                height: "0%"
            })
        }, 800), TweenMax.to(s, 1.5, {
            x: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            onComplete: function() {
                r.classList.add("q_current"), r.classList.remove("is-new"), i.classList.remove("q_current"), r.removeAttribute("style"), s.removeAttribute("style"), a && a.removeAttribute("style"), o.removeAttribute("style"), e.setAttribute("wait", "false"), n && m()
            }
        }), null != e.getAttribute("animate") && (h = e.getAttribute("animate") || "stagTop", q_animate(l, "fadeOut", .5), q_animate(c, h, .6))))
    }

    function n(e, t, n) {
        var i = e.querySelector(".q_current");
        o(e, indexInParent(t ? i.previousElementSibling || f[f.length - 1] : i.nextElementSibling || f[0]), n)
    }
    null != d.getAttribute("parallax") && (w = d.getAttribute("parallax") || .25), null != d.getAttribute("opacity") && (g = d.getAttribute("opacity") || .6);
    for (var e = f.length - 1; 0 <= e; e--)(s = f[e]).classList.add("is-loaded");
    var t, i = d.querySelector(".arrows");
    if (i && (t = i.querySelector(".next"), i = i.querySelector(".prev"), t.addEventListener("click", function(e) {
            n(d, !1)
        }), i.addEventListener("click", function(e) {
            n(d, !0)
        })), v)
        for (var r = v.querySelectorAll(".item"), e = r.length - 1; 0 <= e; e--) r[e].addEventListener("click", function(e) {
            o(d, indexInParent(e.target))
        });
    if (m(), null != d.getAttribute("mousefollow") && 540 < window.innerWidth) {
        for (e = f.length - 1; 0 <= e; e--) {
            var s = f[e].querySelector(".image-wrapper");
            TweenMax.set(s, {
                scale: 1.1
            })
        }
        d.onmousemove = function(e) {
            ! function(e) {
                var t = Math.max(-100, Math.min(100, d.clientWidth / 2 - e.clientX)),
                    e = Math.max(-100, Math.min(100, d.clientHeight / 2 - e.clientY));
                x = 25 * t / 100, y = 15 * e / 100;
                for (var n = f.length - 1; 0 <= n; n--) {
                    var i = f[n].querySelector(".image-wrapper");
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
Barba.Pjax.getTransition = function() {
        return HideShowTransition
    },
    function i(o, r, s) {
        function a(t, e) {
            if (!r[t]) {
                if (!o[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n) return n(t, !0);
                    if (l) return l(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n
                }
                n = r[t] = {
                    exports: {}
                }, o[t][0].call(n.exports, function(e) {
                    return a(o[t][1][e] || e)
                }, n, n.exports, i, o, r, s)
            }
            return r[t].exports
        }
        for (var l = "function" == typeof require && require, e = 0; e < s.length; e++) a(s[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            };

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var r = u(e("dom-classes")),
                s = u(e("dom-create-element")),
                a = u(e("prefix")),
                l = u(e("virtual-scroll")),
                c = u(e("dom-events"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h, d, i = (i(f, [{
                key: "createBound",
                value: function() {
                    var t = this;
                    ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function(e) {
                        return t[e] = t[e].bind(t)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.addClasses(), this.vars.preload && this.preloadImages(), this.vars.native ? this.addFakeScrollHeight() : this.options.noscrollbar || this.addFakeScrollBar(), this.addEvents(), this.resize()
                }
            }, {
                key: "addClasses",
                value: function() {
                    var e = this.vars.native ? "native" : "virtual",
                        t = "vertical" === this.vars.direction ? "y" : "x";
                    r.default.add(this.dom.listener, "is-" + e + "-scroll"), r.default.add(this.dom.listener, t + "-scroll")
                }
            }, {
                key: "preloadImages",
                value: function() {
                    var n = this,
                        i = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
                    i.forEach(function(e) {
                        var t = document.createElement("img");
                        c.default.once(t, "load", function() {
                            i.splice(i.indexOf(e), 1), 0 === i.length && n.resize()
                        }), t.src = e.getAttribute("src")
                    })
                }
            }, {
                key: "calc",
                value: function(e) {
                    e = e.deltaY;
                    this.vars.target += -1 * e, this.clampTarget()
                }
            }, {
                key: "debounce",
                value: function() {
                    var e = this,
                        t = this.dom.listener === document.body;
                    this.vars.target = "vertical" === this.vars.direction ? t ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : t ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft, clearTimeout(this.vars.timer), this.vars.ticking || (this.vars.ticking = !0, r.default.add(this.dom.listener, "is-scrolling")), this.vars.timer = setTimeout(function() {
                        e.vars.ticking = !1, r.default.remove(e.dom.listener, "is-scrolling")
                    }, 200)
                }
            }, {
                key: "run",
                value: function() {
                    var e, t;
                    this.isRAFCanceled || (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.requestAnimationFrame(), this.extends || (this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))), this.vars.native || this.options.noscrollbar || (t = this.dom.scrollbar.drag.height, e = "vertical" === this.vars.direction ? this.vars.height : this.vars.width, e = Math.abs(this.vars.current) / (this.vars.bounding / (e - t)) + t / .5 - t, t = Math.max(0, Math.min(e - t, e + t)), this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(t.toFixed(2))), this.callback && this.vars.current !== this.vars.last && this.callback(this.vars.current), this.vars.last = this.vars.current)
                }
            }, {
                key: "getTransform",
                value: function(e) {
                    return "vertical" === this.vars.direction ? "translate3d(0," + e + "px,0)" : "translate3d(" + e + "px,0,0)"
                }
            }, {
                key: "on",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.isRAFCanceled && (this.isRAFCanceled = !1);
                    var t = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? c.default.on(t, "scroll", this.debounce) : this.vs && this.vs.on(this.calc), e && this.requestAnimationFrame()
                }
            }, {
                key: "off",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? c.default.off(t, "scroll", this.debounce) : this.vs && this.vs.off(this.calc), e && this.cancelAnimationFrame()
                }
            }, {
                key: "requestAnimationFrame",
                value: (d = function() {
                    this.rAF = requestAnimationFrame(this.run)
                }, p.toString = function() {
                    return d.toString()
                }, p)
            }, {
                key: "cancelAnimationFrame",
                value: (h = function() {
                    this.isRAFCanceled = !0, cancelAnimationFrame(this.rAF)
                }, v.toString = function() {
                    return h.toString()
                }, v)
            }, {
                key: "addEvents",
                value: function() {
                    this.on(), c.default.on(window, "resize", this.resize)
                }
            }, {
                key: "removeEvents",
                value: function() {
                    this.off(), c.default.off(window, "resize", this.resize)
                }
            }, {
                key: "addFakeScrollBar",
                value: function() {
                    this.dom.listener.appendChild(this.dom.scrollbar.el), this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el), c.default.on(this.dom.scrollbar.el, "click", this.calcScroll), c.default.on(this.dom.scrollbar.el, "mousedown", this.mouseDown), c.default.on(document, "mousemove", this.mouseMove), c.default.on(document, "mouseup", this.mouseUp)
                }
            }, {
                key: "removeFakeScrollBar",
                value: function() {
                    c.default.off(this.dom.scrollbar.el, "click", this.calcScroll), c.default.off(this.dom.scrollbar.el, "mousedown", this.mouseDown), c.default.off(document, "mousemove", this.mouseMove), c.default.off(document, "mouseup", this.mouseUp), this.dom.listener.removeChild(this.dom.scrollbar.el)
                }
            }, {
                key: "mouseDown",
                value: function(e) {
                    e.preventDefault(), 1 == e.which && (this.dom.scrollbar.state.clicked = !0)
                }
            }, {
                key: "mouseUp",
                value: function(e) {
                    this.dom.scrollbar.state.clicked = !1, r.default.remove(this.dom.listener, "is-dragging")
                }
            }, {
                key: "mouseMove",
                value: function(e) {
                    this.dom.scrollbar.state.clicked && this.calcScroll(e)
                }
            }, {
                key: "addFakeScrollHeight",
                value: function() {
                    this.dom.scroll = (0, s.default)({
                        selector: "div",
                        styles: "vs-scroll-view"
                    }), this.dom.listener.appendChild(this.dom.scroll)
                }
            }, {
                key: "removeFakeScrollHeight",
                value: function() {
                    this.dom.listener.removeChild(this.dom.scroll)
                }
            }, {
                key: "calcScroll",
                value: function(e) {
                    var t = "vertical" == this.vars.direction ? e.clientY : e.clientX,
                        e = "vertical" == this.vars.direction ? this.vars.height : this.vars.width,
                        e = t * (this.vars.bounding / e);
                    r.default.add(this.dom.listener, "is-dragging"), this.vars.target = e, this.clampTarget(), this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
                }
            }, {
                key: "scrollTo",
                value: function(e) {
                    this.vars.native ? "vertical" == this.vars.direction ? window.scrollTo(0, e) : window.scrollTo(e, 0) : (this.vars.target = e, this.clampTarget())
                }
            }, {
                key: "resize",
                value: function() {
                    var e, t = "vertical" === this.vars.direction ? "height" : "width";
                    this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, this.extends || (e = this.dom.section.getBoundingClientRect(), this.vars.bounding = "vertical" === this.vars.direction ? e.height - (this.vars.native ? 0 : this.vars.height) : e.right - (this.vars.native ? 0 : this.vars.width)), this.vars.native || this.options.noscrollbar ? this.vars.native && (this.dom.scroll.style[t] = this.vars.bounding + "px") : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[t] = this.dom.scrollbar.drag.height + "px"), this.vars.native || this.clampTarget()
                }
            }, {
                key: "clampTarget",
                value: function() {
                    this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.vars.native ? (r.default.remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (r.default.remove(this.dom.listener, "is-virtual-scroll"), this.options.noscrollbar || this.removeFakeScrollBar()), "vertical" === this.vars.direction ? r.default.remove(this.dom.listener, "y-scroll") : r.default.remove(this.dom.listener, "x-scroll"), this.vars.current = 0, this.vs && (this.vs.destroy(), this.vs = null), this.removeEvents()
                }
            }]), f);

            function f() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(e) {
                    if (!(e instanceof f)) throw new TypeError("Cannot call a class as a function")
                }(this), this.createBound(), this.options = e, this.prefix = (0, a.default)("transform"), this.rAF = void 0, this.isRAFCanceled = !1;
                var t = this.constructor.name || "Smooth";
                this.extends = void 0 === e.extends ? this.constructor !== f : e.extends, this.callback = this.options.callback || null, this.vars = {
                    direction: this.options.direction || "vertical",
                    native: this.options.native || !1,
                    ease: this.options.ease || .075,
                    preload: this.options.preload || !1,
                    current: 0,
                    last: 0,
                    target: 0,
                    height: window.innerHeight,
                    width: window.innerWidth,
                    bounding: 0,
                    timer: null,
                    ticking: !1
                }, this.vs = this.vars.native ? null : new l.default({
                    limitInertia: this.options.vs && this.options.vs.limitInertia || !1,
                    mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
                    touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
                    firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
                    preventTouch: this.options.vs && this.options.vs.preventTouch || !0
                }), this.dom = {
                    listener: this.options.listener || document.body,
                    section: this.options.section || document.querySelector(".vs-section") || null,
                    scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                        state: {
                            clicked: !1,
                            x: 0
                        },
                        el: (0, s.default)({
                            selector: "div",
                            styles: "vs-scrollbar vs-" + this.vars.direction + " vs-scrollbar-" + t.toLowerCase()
                        }),
                        drag: {
                            el: (0, s.default)({
                                selector: "div",
                                styles: "vs-scrolldrag"
                            }),
                            delta: 0,
                            height: 50
                        }
                    }
                }
            }

            function v() {
                return h.apply(this, arguments)
            }

            function p() {
                return d.apply(this, arguments)
            }
            n.default = i, window.Smooth = i
        }, {
            "dom-classes": 3,
            "dom-create-element": 4,
            "dom-events": 5,
            prefix: 9,
            "virtual-scroll": 15
        }],
        2: [function(e, t, n) {
            "use strict";
            var r = Object.prototype.toString,
                s = Object.prototype.hasOwnProperty;
            t.exports = function(e) {
                if (!e) return console.warn("bindAll requires at least one argument.");
                var t = Array.prototype.slice.call(arguments, 1);
                if (0 === t.length)
                    for (var n in e) s.call(e, n) && "function" == typeof e[n] && "[object Function]" == r.call(e[n]) && t.push(n);
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    e[o] = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }(e[o], e)
                }
            }
        }, {}],
        3: [function(e, t, n) {
            var i = e("indexof"),
                o = /\s+/,
                r = Object.prototype.toString;

            function s(e) {
                if (e.classList) return e.classList;
                e = e.className.replace(/^\s+|\s+$/g, "").split(o);
                return "" === e[0] && e.shift(), e
            }

            function a(e, t) {
                var n;
                e.classList ? e.classList.add(t) : (n = s(e), ~i(n, t) || n.push(t), e.className = n.join(" "))
            }

            function l(e, t) {
                return e.classList ? e.classList.contains(t) : !!~i(s(e), t)
            }

            function c(e, t) {
                if ("[object RegExp]" == r.call(t)) return u(e, t);
                var n;
                e.classList ? e.classList.remove(t) : (n = s(e), ~(t = i(n, t)) && n.splice(t, 1), e.className = n.join(" "))
            }

            function u(e, t, n) {
                for (var i = Array.prototype.slice.call(s(e)), o = 0; o < i.length; o++) t.test(i[o]) && c(e, i[o])
            }
            t.exports = s, t.exports.add = a, t.exports.contains = l, t.exports.has = l, t.exports.toggle = function(e, t) {
                if (e.classList) return e.classList.toggle(t);
                (l(e, t) ? c : a)(e, t)
            }, t.exports.remove = c, t.exports.removeMatching = u
        }, {
            indexof: 6
        }],
        4: [function(e, t, n) {
            t.exports = function(e) {
                e = e || {};
                var t = document.createElement(e.selector);
                if (e.attr)
                    for (var n in e.attr) e.attr.hasOwnProperty(n) && t.setAttribute(n, e.attr[n]);
                return "a" == e.selector && e.link && (t.href = e.link, e.target && t.setAttribute("target", e.target)), "img" == e.selector && e.src && (t.src = e.src, e.lazyload && (t.style.opacity = 0, t.onload = function() {
                    t.style.opacity = 1
                })), e.id && (t.id = e.id), e.styles && (t.className = e.styles), e.html && (t.innerHTML = e.html), e.children && t.appendChild(e.children), t
            }
        }, {}],
        5: [function(e, t, n) {
            var i = e("synthetic-dom-events"),
                s = function(e, t, n, i) {
                    return e.addEventListener(t, n, i || !1)
                },
                a = function(e, t, n, i) {
                    return e.removeEventListener(t, n, i || !1)
                },
                e = function(e, t, n) {
                    n = i(t, n);
                    e.dispatchEvent(n)
                };
            document.addEventListener || (s = function(e, t, n) {
                return e.attachEvent("on" + t, n)
            }), document.removeEventListener || (a = function(e, t, n) {
                return e.detachEvent("on" + t, n)
            }), document.dispatchEvent || (e = function(e, t, n) {
                n = i(t, n);
                return e.fireEvent("on" + n.type, n)
            }), t.exports = {
                on: s,
                off: a,
                once: function(n, i, o, r) {
                    s(n, i, function e(t) {
                        a(n, i, e, r), o(t)
                    }, r)
                },
                emit: e
            }
        }, {
            "synthetic-dom-events": 10
        }],
        6: [function(e, t, n) {
            var i = [].indexOf;
            t.exports = function(e, t) {
                if (i) return e.indexOf(t);
                for (var n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return -1
            }
        }, {}],
        7: [function(e, t, n) {
            (function() {
                function e(e, t, n, i) {
                    this.stability = null != e ? Math.abs(e) : 8, this.sensitivity = null != t ? 1 + Math.abs(t) : 100, this.tolerance = null != n ? 1 + Math.abs(n) : 1.1, this.delay = null != i ? i : 150, this.lastUpDeltas = function() {
                        for (var e = [], t = 1, n = 2 * this.stability; 1 <= n ? t <= n : n <= t; 1 <= n ? t++ : t--) e.push(null);
                        return e
                    }.call(this), this.lastDownDeltas = function() {
                        for (var e = [], t = 1, n = 2 * this.stability; 1 <= n ? t <= n : n <= t; 1 <= n ? t++ : t--) e.push(null);
                        return e
                    }.call(this), this.deltasTimestamp = function() {
                        for (var e = [], t = 1, n = 2 * this.stability; 1 <= n ? t <= n : n <= t; 1 <= n ? t++ : t--) e.push(null);
                        return e
                    }.call(this)
                }(null != n ? n : this).Lethargy = (e.prototype.check = function(e) {
                    var t;
                    return null != (e = e.originalEvent || e).wheelDelta ? t = e.wheelDelta : null != e.deltaY ? t = -40 * e.deltaY : null == e.detail && 0 !== e.detail || (t = -40 * e.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < t ? (this.lastUpDeltas.push(t), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(t), this.lastDownDeltas.shift(), this.isInertia(-1))
                }, e.prototype.isInertia = function(e) {
                    var t, n, i, o = -1 === e ? this.lastDownDeltas : this.lastUpDeltas;
                    return null === o[0] ? e : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && o[0] === o[2 * this.stability - 1]) && (n = o.slice(0, this.stability), t = o.slice(this.stability, 2 * this.stability), i = n.reduce(function(e, t) {
                        return e + t
                    }), o = t.reduce(function(e, t) {
                        return e + t
                    }), n = i / n.length, t = o / t.length, Math.abs(n) < Math.abs(t * this.tolerance) && this.sensitivity < Math.abs(t) && e)
                }, e.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }, e.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }, e)
            }).call(this)
        }, {}],
        8: [function(e, t, n) {
            "use strict";
            Object.prototype.hasOwnProperty
        }, {}],
        9: [function(e, t, n) {
            var o = "undefined" != typeof document ? document.createElement("p").style : {},
                r = ["O", "ms", "Moz", "Webkit"],
                i = /([A-Z])/g,
                s = {};

            function a(e) {
                if (e = e.replace(/-([a-z])/g, function(e, t) {
                        return t.toUpperCase()
                    }), void 0 !== o[e]) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = r.length; n--;) {
                    var i = r[n] + t;
                    if (void 0 !== o[i]) return i
                }
                return e
            }
            t.exports = function(e) {
                return e in s ? s[e] : s[e] = a(e)
            }, t.exports.dash = function(e) {
                return e = a(e), i.test(e) && (e = "-" + e.replace(i, "-$1"), i.lastIndex = 0), e.toLowerCase()
            }
        }, {}],
        10: [function(e, t, n) {
            window;
            var h = document || {},
                d = (h.documentElement, !0);
            try {
                h.createEvent("KeyEvents")
            } catch (e) {
                d = !1
            }
            t.exports = h.createEvent ? function(e, t) {
                t = t || {};
                var n = v(e),
                    i = n;
                "KeyboardEvent" === n && d && (n = "KeyEvents", i = "KeyEvent");
                var o = h.createEvent(n),
                    i = "init" + i,
                    i = "function" == typeof o[i] ? i : "initEvent",
                    r = f[i],
                    s = [],
                    a = {};
                t.type = e;
                for (var l = 0; l < r.length; ++l) {
                    var c, u = t[c = r[l]];
                    void 0 === u && (u = o[c]), a[c] = !0, s.push(u)
                }
                for (c in o[i].apply(o, s), "KeyboardEvent" === n && (i = t, (n = o).ctrlKey == (i.ctrlKey || !1) && n.altKey == (i.altKey || !1) && n.shiftKey == (i.shiftKey || !1) && n.metaKey == (i.metaKey || !1) && n.keyCode == (i.keyCode || 0) && n.charCode == (i.charCode || 0) || ((n = document.createEvent("Event")).initEvent(i.type, i.bubbles, i.cancelable), n.ctrlKey = i.ctrlKey || !1, n.altKey = i.altKey || !1, n.shiftKey = i.shiftKey || !1, n.metaKey = i.metaKey || !1, n.keyCode = i.keyCode || 0, n.charCode = i.charCode || 0), o = n), t) a[c] || (o[c] = t[c]);
                return o
            } : function(e, t) {
                t = t || {};
                var n, i = h.createEventObject();
                for (n in i.type = e, t) void 0 !== t[n] && (i[n] = t[n]);
                return i
            };
            var f = e("./init.json"),
                o = e("./types.json"),
                v = function() {
                    var e, t = {};
                    for (e in o)
                        for (var n = o[e], i = 0; i < n.length; i++) t[n[i]] = e;
                    return function(e) {
                        return t[e] || "Event"
                    }
                }()
        }, {
            "./init.json": 11,
            "./types.json": 12
        }],
        11: [function(e, t, n) {
            t.exports = {
                initEvent: ["type", "bubbles", "cancelable"],
                initUIEvent: ["type", "bubbles", "cancelable", "view", "detail"],
                initMouseEvent: ["type", "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                initMutationEvent: ["type", "bubbles", "cancelable", "relatedNode", "prevValue", "newValue", "attrName", "attrChange"],
                initKeyboardEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                initKeyEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"]
            }
        }, {}],
        12: [function(e, t, n) {
            t.exports = {
                MouseEvent: ["click", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"],
                KeyboardEvent: ["keydown", "keyup", "keypress"],
                MutationEvent: ["DOMSubtreeModified", "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMAttrModified", "DOMCharacterDataModified"],
                HTMLEvents: ["load", "unload", "abort", "error", "select", "change", "submit", "reset", "focus", "blur", "resize", "scroll"],
                UIEvent: ["DOMFocusIn", "DOMFocusOut", "DOMActivate"]
            }
        }, {}],
        13: [function(e, t, n) {
            function i() {}
            i.prototype = {
                on: function(e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    var i = this;

                    function o() {
                        i.off(e, o), t.apply(n, arguments)
                    }
                    return o._ = t, this.on(e, o, n)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        i = n[e],
                        o = [];
                    if (i && t)
                        for (var r = 0, s = i.length; r < s; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                    return o.length ? n[e] = o : delete n[e], this
                }
            }, t.exports = i
        }, {}],
        14: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }, {}],
        15: [function(e, t, n) {
            "use strict";
            var i = e("object-assign"),
                o = e("tiny-emitter"),
                r = e("lethargy").Lethargy,
                s = e("./support"),
                a = (e("./clone"), e("bindall-standalone")),
                l = "virtualscroll";
            t.exports = v;
            var c = 37,
                u = 38,
                h = 39,
                d = 40,
                f = 32;

            function v(e) {
                a(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, e && e.el && (this.el = e.el, delete e.el), this.options = i({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1
                }, e), this.options.limitInertia && (this._lethargy = new r), this._emitter = new o, this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                    passive: this.options.passive
                })
            }
            v.prototype._notify = function(e) {
                var t = this._event;
                t.x += t.deltaX, t.y += t.deltaY, this._emitter.emit(l, {
                    x: t.x,
                    y: t.y,
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                    originalEvent: e
                })
            }, v.prototype._onWheel = function(e) {
                var t, n = this.options;
                this._lethargy && !1 === this._lethargy.check(e) || ((t = this._event).deltaX = e.wheelDeltaX || -1 * e.deltaX, t.deltaY = e.wheelDeltaY || -1 * e.deltaY, s.isFirefox && 1 == e.deltaMode && (t.deltaX *= n.firefoxMultiplier, t.deltaY *= n.firefoxMultiplier), t.deltaX *= n.mouseMultiplier, t.deltaY *= n.mouseMultiplier, this._notify(e))
            }, v.prototype._onMouseWheel = function(e) {
                var t;
                this.options.limitInertia && !1 === this._lethargy.check(e) || ((t = this._event).deltaX = e.wheelDeltaX || 0, t.deltaY = e.wheelDeltaY || e.wheelDelta, this._notify(e))
            }, v.prototype._onTouchStart = function(e) {
                e = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStartX = e.pageX, this.touchStartY = e.pageY
            }, v.prototype._onTouchMove = function(e) {
                var t = this.options;
                t.preventTouch && !e.target.classList.contains(t.unpreventTouchClass) && e.preventDefault();
                var n = this._event,
                    i = e.targetTouches ? e.targetTouches[0] : e;
                n.deltaX = (i.pageX - this.touchStartX) * t.touchMultiplier, n.deltaY = (i.pageY - this.touchStartY) * t.touchMultiplier, this.touchStartX = i.pageX, this.touchStartY = i.pageY, this._notify(e)
            }, v.prototype._onKeyDown = function(e) {
                var t = this._event;
                t.deltaX = t.deltaY = 0;
                var n = window.innerHeight - 40;
                switch (e.keyCode) {
                    case c:
                    case u:
                        t.deltaY = this.options.keyStep;
                        break;
                    case h:
                    case d:
                        t.deltaY = -this.options.keyStep;
                        break;
                    case f && e.shiftKey:
                        t.deltaY = n;
                        break;
                    case f:
                        t.deltaY = -n;
                        break;
                    default:
                        return
                }
                this._notify(e)
            }, v.prototype._bind = function() {
                s.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
            }, v.prototype._unbind = function() {
                s.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
            }, v.prototype.on = function(e, t) {
                this._emitter.on(l, e, t);
                t = this._emitter.e;
                t && t[l] && 1 === t[l].length && this._bind()
            }, v.prototype.off = function(e, t) {
                this._emitter.off(l, e, t);
                t = this._emitter.e;
                (!t[l] || t[l].length <= 0) && this._unbind()
            }, v.prototype.reset = function() {
                var e = this._event;
                e.x = 0, e.y = 0
            }, v.prototype.destroy = function() {
                this._emitter.off(), this._unbind()
            }
        }, {
            "./clone": 14,
            "./support": 16,
            "bindall-standalone": 2,
            lethargy: 7,
            "object-assign": 8,
            "tiny-emitter": 13
        }],
        16: [function(e, t, n) {
            "use strict";
            t.exports = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in document,
                hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
            }
        }, {}]
    }, {}, [1]);


