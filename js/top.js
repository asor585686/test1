!function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }
    function o(e) {
        var n = b.className
          , t = S._config.classPrefix || "";
        if (P && (n = n.baseVal),
        S._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        S._config.enableClasses && (n += " " + t + e.join(" " + t),
        P ? b.className.baseVal = n : b.className = n)
    }
    function i(e, n) {
        if ("object" == typeof e)
            for (var t in e)
                T(e, t) && i(t, e[t]);
        else {
            e = e.toLowerCase();
            var r = e.split(".")
              , s = S[r[0]];
            if (2 == r.length && (s = s[r[1]]),
            void 0 !== s)
                return S;
            n = "function" == typeof n ? n() : n,
            1 == r.length ? S[r[0]] = n : (!S[r[0]] || S[r[0]]instanceof Boolean || (S[r[0]] = new Boolean(S[r[0]])),
            S[r[0]][r[1]] = n),
            o([(n && 0 != n ? "" : "no-") + r.join("-")]),
            S._trigger(e, n)
        }
        return S
    }
    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }
    function l(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function a(e, n) {
        return !!~("" + e).indexOf(n)
    }
    function f() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : P ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function u() {
        var e = n.body;
        return e || (e = f(P ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function c(e, t, r, o) {
        var i, s, l, a, c = "modernizr", p = f("div"), d = u();
        if (parseInt(r, 10))
            for (; r--; )
                l = f("div"),
                l.id = o ? o[r] : c + (r + 1),
                p.appendChild(l);
        return i = f("style"),
        i.type = "text/css",
        i.id = "s" + c,
        (d.fake ? d : p).appendChild(i),
        d.appendChild(p),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)),
        p.id = c,
        d.fake && (d.style.background = "",
        d.style.overflow = "hidden",
        a = b.style.overflow,
        b.style.overflow = "hidden",
        b.appendChild(d)),
        s = t(p, e),
        d.fake ? (d.parentNode.removeChild(d),
        b.style.overflow = a,
        b.offsetHeight) : p.parentNode.removeChild(p),
        !!s
    }
    function p(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }
    function d(e, n, t) {
        var o;
        for (var i in e)
            if (e[i]in n)
                return !1 === t ? e[i] : (o = n[e[i]],
                r(o, "function") ? p(o, t || n) : o);
        return !1
    }
    function v(n, t, r) {
        var o;
        if ("getComputedStyle"in e) {
            o = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== o)
                r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }
    function h(n, r) {
        var o = n.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(l(n[o]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var i = []; o--; )
                i.push("(" + l(n[o]) + ":" + r + ")");
            return i = i.join(" or "),
            c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == v(e, null, "position")
            })
        }
        return t
    }
    function m(e, n, o, i) {
        function l() {
            c && (delete k.style,
            delete k.modElem)
        }
        if (i = !r(i, "undefined") && i,
        !r(o, "undefined")) {
            var u = h(e, o);
            if (!r(u, "undefined"))
                return u
        }
        for (var c, p, d, v, m, y = ["modernizr", "tspan", "samp"]; !k.style && y.length; )
            c = !0,
            k.modElem = f(y.shift()),
            k.style = k.modElem.style;
        for (d = e.length,
        p = 0; p < d; p++)
            if (v = e[p],
            m = k.style[v],
            a(v, "-") && (v = s(v)),
            k.style[v] !== t) {
                if (i || r(o, "undefined"))
                    return l(),
                    "pfx" != n || v;
                try {
                    k.style[v] = o
                } catch (e) {}
                if (k.style[v] != m)
                    return l(),
                    "pfx" != n || v
            }
        return l(),
        !1
    }
    function y(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , l = (e + " " + j.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? m(l, n, o, i) : (l = (e + " " + E.join(s + " ") + s).split(" "),
        d(l, n, t))
    }
    function g(e, n, r) {
        return y(e, t, t, n, r)
    }
    var C = []
      , _ = []
      , w = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e])
            }, 0)
        },
        addTest: function(e, n, t) {
            _.push({
                name: e,
                fn: n,
                options: t
            })
        },
        addAsyncTest: function(e) {
            _.push({
                name: null,
                fn: e
            })
        }
    }
      , S = function() {};
    S.prototype = w,
    S = new S;
    var x = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = x;
    var b = n.documentElement
      , P = "svg" === b.nodeName.toLowerCase()
      , z = "Moz O ms Webkit"
      , E = w._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    w._domPrefixes = E;
    var T;
    !function() {
        var e = {}.hasOwnProperty;
        T = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined")
        }
        : function(n, t) {
            return e.call(n, t)
        }
    }(),
    w._l = {},
    w.on = function(e, n) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        S.hasOwnProperty(e) && setTimeout(function() {
            S._trigger(e, S[e])
        }, 0)
    }
    ,
    w._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() {
                var e;
                for (e = 0; e < t.length; e++)
                    (0,
                    t[e])(n)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    S._q.push(function() {
        w.addTest = i
    });
    var j = w._config.usePrefixes ? z.split(" ") : [];
    w._cssomPrefixes = j;
    var L = function(n) {
        var r, o = x.length, i = e.CSSRule;
        if (void 0 === i)
            return t;
        if (!n)
            return !1;
        if (n = n.replace(/^@/, ""),
        (r = n.replace(/-/g, "_").toUpperCase() + "_RULE")in i)
            return "@" + n;
        for (var s = 0; s < o; s++) {
            var l = x[s];
            if (l.toUpperCase() + "_" + r in i)
                return "@-" + l.toLowerCase() + "-" + n
        }
        return !1
    };
    w.atRule = L;
    var N = (w.testStyles = c,
    {
        elem: f("modernizr")
    });
    S._q.push(function() {
        delete N.elem
    });
    var k = {
        style: N.elem.style
    };
    S._q.unshift(function() {
        delete k.style
    });
    w.testProp = function(e, n, r) {
        return m([e], t, n, r)
    }
    ;
    w.testAllProps = y;
    var O = w.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? L(e) : (-1 != e.indexOf("-") && (e = s(e)),
        n ? y(e, n, t) : y(e, "pfx"))
    }
    ;
    w.prefixedCSS = function(e) {
        var n = O(e);
        return n && l(n)
    }
    ;
    w.testAllProps = g,
    function() {
        var e, n, t, o, i, s, l;
        for (var a in _)
            if (_.hasOwnProperty(a)) {
                if (e = [],
                n = _[a],
                n.name && (e.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn,
                i = 0; i < e.length; i++)
                    s = e[i],
                    l = s.split("."),
                    1 === l.length ? S[l[0]] = o : (!S[l[0]] || S[l[0]]instanceof Boolean || (S[l[0]] = new Boolean(S[l[0]])),
                    S[l[0]][l[1]] = o),
                    C.push((o ? "" : "no-") + l.join("-"))
            }
    }(),
    o(C),
    delete w.addTest,
    delete w.addAsyncTest;
    for (var q = 0; q < S._q.length; q++)
        S._q[q]();
    e.Modernizr = S
}(window, document);
