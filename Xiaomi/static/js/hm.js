(function () {
    var h = {}, mt = {}, c = {
        id: "025702dcecee57b18ed6fb366754c1b8",
        dm: ["xiaomiyoupin.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        cetrk: [],
        icon: '',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        aet: '',
        hca: '9E8D10BAAFD99165',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var s = void 0, t = !0, u = null, v = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, a, e) {
        var d;
        e.J && (d = new Date, d.setTime(d.getTime() + e.J));
        document.cookie = b + "=" + a + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.Zb ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : u
    };
    mt.cookie.wb = function (b, a) {
        try {
            var e = "Hm_ck_" + +new Date;
            mt.cookie.set(e, "is-cookie-enabled", {domain: b, path: a, J: s});
            var d = "is-cookie-enabled" === mt.cookie.get(e) ? "1" : "0";
            mt.cookie.set(e, "", {domain: b, path: a, J: -1});
            return d
        } catch (g) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.e = function (b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.Da = function (b) {
        return mt.lang.e(b, "Number") && isFinite(b)
    };
    mt.lang.ia = function () {
        return mt.lang.e(c.aet, "String")
    };
    mt.lang.g = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.H = function (b, a) {
        var e = v;
        if (b == u || !mt.lang.e(b, "Array") || a === s) return e;
        if (Array.prototype.indexOf) e = -1 !== b.indexOf(a); else for (var d = 0; d < b.length; d++) if (b[d] === a) {
            e = t;
            break
        }
        return e
    };
    (function () {
        var b = mt.lang;
        mt.f = {};
        mt.f.xa = function (a) {
            return document.getElementById(a)
        };
        mt.f.cb = function (a) {
            if (!a) return u;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var b = a.split(">"), d = document.body, g = b.length - 1; 0 <= g; g--) if (-1 < b[g].indexOf("#")) {
                    var f = b[g].split("#")[1];
                    (d = document.getElementById(f)) || (d = document.getElementById(decodeURIComponent(f)));
                    b = b.splice(g + 1, b.length - (g + 1));
                    break
                }
                for (a = 0; d && a < b.length;) {
                    var m = String(b[a]).toLowerCase();
                    if (!("html" === m || "body" === m)) {
                        var g = 0, p = b[a].match(/\[(\d+)\]/i), f = [];
                        if (p) g = p[1] - 1, m = m.split("[")[0]; else if (1 !== d.childNodes.length) {
                            for (var n = 0, w = 0, l = d.childNodes.length; w < l; w++) {
                                var k = d.childNodes[w];
                                1 === k.nodeType && k.nodeName.toLowerCase() === m && n++;
                                if (1 < n) return u
                            }
                            if (1 !== n) return u
                        }
                        for (n = 0; n < d.childNodes.length; n++) 1 === d.childNodes[n].nodeType && d.childNodes[n].nodeName.toLowerCase() === m && f.push(d.childNodes[n]);
                        if (!f[g]) return u;
                        d = f[g]
                    }
                    a++
                }
                return d
            } catch (r) {
                return u
            }
        };
        mt.f.ga = function (a, b) {
            var d =
                [], g = [];
            if (!a) return g;
            for (; a.parentNode != u;) {
                for (var f = 0, m = 0, p = a.parentNode.childNodes.length, n = 0; n < p; n++) {
                    var w = a.parentNode.childNodes[n];
                    if (w.nodeName === a.nodeName && (f++, w === a && (m = f), 0 < m && 1 < f)) break
                }
                if ((p = "" !== a.id) && b) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else p && (p = "#" + encodeURIComponent(a.id), p = 0 < d.length ? p + ">" + d.join(">") : p, g.push(p)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            g.push(d.join(">"));
            return g
        };
        mt.f.ib = function (a) {
            return (a =
                mt.f.ga(a, t)) && a.length ? String(a[0]) : ""
        };
        mt.f.hb = function (a) {
            return mt.f.ga(a, v)
        };
        mt.f.Tb = function (a, b) {
            for (b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
            return u
        };
        mt.f.bb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.Ub = function (a) {
            var b = {top: 0, left: 0};
            if (!a) return b;
            var d = mt.f.bb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: b.left +
                (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, b) {
            var d = a.getAttribute && a.getAttribute(b) || u;
            if (!d && a.attributes && a.attributes.length) for (var g = a.attributes, f = g.length, m = 0; m < f; m++) g[m].nodeName === b && (d = g[m].nodeValue);
            return d
        };
        mt.f.R = function (a) {
            var b = "document";
            a.tagName !== s && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.f.lb = function (a) {
            var e = "";
            a.textContent ? e = b.trim(a.textContent) : a.innerText && (e = b.trim(a.innerText));
            e && (e = e.replace(/\s+/g, " ").substring(0, 255));
            return e
        };
        mt.f.ya = function (a, e) {
            var d = mt.f.R(a);
            "input" === d && e && ("button" === a.type || "submit" === a.type) ? d = b.trim(a.value) || "" : "input" === d && !e && "password" !== a.type ? d = b.trim(a.value) || "" : "img" === d ? (d = mt.f.getAttribute, d = d(a, "alt") || d(a, "title") || d(a, "src")) : d = "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.f.lb(a);
            return String(d).substring(0, 255)
        };
        (function () {
            (mt.f.zb = function () {
                function a() {
                    if (!a.U) {
                        a.U = t;
                        for (var d = 0, b = g.length; d < b; d++) g[d]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b,
                            1);
                        return
                    }
                    a()
                }

                var d = v, g = [], f;
                document.addEventListener ? f = function () {
                    document.removeEventListener("DOMContentLoaded", f, v);
                    a()
                } : document.attachEvent && (f = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                });
                (function () {
                    if (!d) if (d = t, "complete" === document.readyState) a.U = t; else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, v), window.addEventListener("load", a, v); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange",
                            f);
                        window.attachEvent("onload", a);
                        var g = v;
                        try {
                            g = window.frameElement == u
                        } catch (p) {
                        }
                        document.documentElement.doScroll && g && b()
                    }
                })();
                return function (d) {
                    a.U ? d() : g.push(d)
                }
            }()).U = v
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.d = function (b, a, e) {
        b.attachEvent ? b.attachEvent("on" + a, function (a) {
            e.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, e, v)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = v
    };
    (function () {
        var b = mt.event;
        mt.i = {};
        mt.i.Ca = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.i.ub = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : s;
        mt.i.cookieEnabled = navigator.cookieEnabled;
        mt.i.javaEnabled = navigator.javaEnabled();
        mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.i.Cb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.i.colorDepth = window.screen.colorDepth || 0;
        mt.i.S = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.i.L = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.i.orientation = 0;
        (function () {
            function a() {
                var a = 0;
                window.orientation !== s && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== s) && (a = screen.orientation.angle);
                mt.i.orientation = a
            }

            a();
            b.d(window, "orientationchange", a)
        })();
        return mt.i
    })();
    mt.o = {};
    mt.o.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.o.stringify = function () {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var d = e[a];
                if (d) return d;
                d = a.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }

        var e = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return b(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === u) return "null";
                    if (d instanceof Array) {
                        var g = ["["], f = d.length, m, e, n;
                        for (e = 0; e < f; e++) switch (n = d[e], typeof n) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                m && g.push(","), g.push(mt.o.stringify(n)), m = 1
                        }
                        g.push("]");
                        return g.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + a(d.getMonth() + 1) + "-" + a(d.getDate()) + "T" + a(d.getHours()) + ":" + a(d.getMinutes()) + ":" + a(d.getSeconds()) + '"';
                    m = ["{"];
                    e = mt.o.stringify;
                    for (f in d) if (Object.prototype.hasOwnProperty.call(d, f)) switch (n =
                        d[f], typeof n) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && m.push(","), g = 1, m.push(e(f) + ":" + e(n))
                    }
                    m.push("}");
                    return m.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.Y = function () {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (b) {
            return v
        }
        return t
    };
    mt.localStorage.set = function (b, a, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (a = d.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.Y() && (mt.localStorage.l.expires = d.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(b, a), mt.localStorage.l.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"), e = b.substring(0, a) - 0;
                if (e && e > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.Y()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(b)
        } catch (d) {
        }
        return u
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b); else if (mt.localStorage.Y()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(b), mt.localStorage.l.save(document.location.hostname)
        } catch (a) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, a) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, a)
        } catch (e) {
        }
    };
    mt.sessionStorage.get = function (b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : u
        } catch (a) {
            return u
        }
    };
    mt.sessionStorage.remove = function (b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (a) {
        }
    };
    mt.Ka = {};
    mt.Ka.log = function (b, a) {
        var e = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = function () {
            e.onload = u;
            e = window[d] = u;
            a && a(b)
        };
        e.src = b
    };
    mt.oa = {};
    mt.oa.mb = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {
        }
        return b
    };
    mt.oa.Sb = function (b, a, e, d, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + e + '" height="' + d + '" src="' + a + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.m = function (b, a) {
        var e = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : u
    };
    mt.url.Vb = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : u
    };
    mt.url.fb = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : u
    };
    mt.url.K = function (b) {
        return (b = mt.url.fb(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.ga = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : u
    };
    (function () {
        function b() {
            for (var a = v, b = document.getElementsByTagName("script"), d = b.length, d = 100 < d ? 100 : d, g = 0; g < d; g++) {
                var f = b[g].src;
                if (f && 0 === f.indexOf("https://hm.baidu.com/h")) {
                    a = t;
                    break
                }
            }
            return a
        }

        return h.ab = b
    })();
    var A = h.ab;
    h.z = {
        Wb: "http://tongji.baidu.com/hm-web/welcome/ico",
        Ha: "hm.baidu.com/hm.gif",
        Ra: /^(tongji|hmcdn).baidu.com$/,
        Ma: "tongji.baidu.com",
        qb: "hmmd",
        rb: "hmpl",
        Mb: "utm_medium",
        pb: "hmkw",
        Ob: "utm_term",
        nb: "hmci",
        Lb: "utm_content",
        tb: "hmsr",
        Nb: "utm_source",
        ob: "hmcu",
        Kb: "utm_campaign",
        I: 0,
        D: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        la: A() || "https:" === document.location.protocol ? "https:" : "http:",
        Xb: 0,
        Qb: 6E5,
        xb: 6E5,
        Yb: 5E3,
        Rb: 5,
        ba: 1024,
        Pb: 1,
        V: 2147483647,
        La: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
        M: t,
        ua: ["a", "input", "button"],
        Ta: {
            id: "data-hm-id",
            aa: "data-hm-class",
            ra: "data-hm-xpath",
            content: "data-hm-content",
            pa: "data-hm-tag",
            link: "data-hm-link"
        },
        ta: "data-hm-enabled",
        sa: "data-hm-disabled",
        yb: "https://hmcdn.baidu.com/static/tongji/plugins/",
        Ga: ["UrlChangeTracker"]
    };
    (function () {
        var b = {
            A: {}, d: function (a, b) {
                this.A[a] = this.A[a] || [];
                this.A[a].push(b)
            }, F: function (a, b) {
                this.A[a] = this.A[a] || [];
                for (var d = this.A[a].length, g = 0; g < d; g++) this.A[a][g](b)
            }
        };
        return h.G = b
    })();
    (function () {
        function b(b, d) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            a.e(d, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = u, d()
            } : g.onload = function () {
                d()
            });
            g.src = b;
            var f = document.getElementsByTagName("script")[0];
            f.parentNode.insertBefore(g, f)
        }

        var a = mt.lang;
        return h.load = b
    })();
    (function () {
        var b = mt.lang, a = mt.f, e = {
            P: function (b, g) {
                return function (f) {
                    var m = f.target || f.srcElement;
                    if (m) {
                        var p = m.getAttribute(b.X);
                        f = f.clientX + ":" + f.clientY;
                        if (p && p === f) m.removeAttribute(b.X); else if (g && 0 < g.length && (m = a.hb(m)) && m.length) if (p = m.length, f = m[m.length - 1], 1E4 > p * f.split(">").length) for (f = 0; f < p; f++) e.Ja(b, m[f]); else e.Ja(b, f)
                    }
                }
            }, Ja: function (a, g) {
                for (var f = {}, m = String(g).split(">").length, e = 0; e < m; e++) f[g] = "", g = g.substring(0, g.lastIndexOf(">"));
                a && (b.e(a, "Object") && a.va) && a.va(f)
            }, Ab: function (a,
                             b) {
                return function (f) {
                    (f.target || f.srcElement).setAttribute(a.X, f.clientX + ":" + f.clientY);
                    a && a.r && (b ? a.r(b) : a.r("#" + encodeURIComponent(this.id), f.type))
                }
            }
        };
        return h.da = e
    })();
    (function () {
        var b = mt.f, a = mt.o, e = mt.event, d = mt.lang, g = h.da, f = {
            X: "HM_ce", Na: function () {
                if (c.cetrk && c.cetrk.length) {
                    e.d(document, "click", g.P(f, c.cetrk));
                    for (var d = 0, p = c.cetrk.length; d < p; d++) {
                        var n;
                        try {
                            n = a.parse(decodeURIComponent(String(c.cetrk[d])))
                        } catch (w) {
                            n = {}
                        }
                        var l = n.p || "";
                        -1 === l.indexOf(">") && (0 === l.indexOf("#") && (l = l.substring(1)), (l = b.xa(l)) && e.d(l, "click", g.Ab(f, n)))
                    }
                }
            }, va: function (b) {
                if (c.cetrk && c.cetrk.length) for (var d = 0, g = c.cetrk.length; d < g; d++) {
                    var e;
                    try {
                        e = a.parse(decodeURIComponent(String(c.cetrk[d])))
                    } catch (l) {
                        e =
                            {}
                    }
                    b.hasOwnProperty(e.p) && f.r(e)
                }
            }, r: function (a) {
                h.b.c.et = 7;
                var g = a && a.k || "", g = d.g(g), e = [];
                if (a && a.a && d.e(a.a, "Object")) for (var f in a.a) if (a.a.hasOwnProperty(f)) {
                    e.push(d.g(f));
                    var l = b.cb(a.a[f] || ""), l = l ? b.ya(l, v) : "";
                    e.push(d.g(l))
                }
                a = "";
                e.length && (a = "*" + e.join("*"));
                h.b.c.ep = "ce!_iden*" + g + a;
                h.b.j()
            }
        };
        h.G.d("pv-b", f.Na);
        return f
    })();
    (function () {
        var b = mt.lang, a = mt.f, e = mt.event, d = mt.i, g = h.z, f = h.G, m = +new Date, p = [], n = {
            P: function () {
                return function (d) {
                    if (h.b && h.b.M && c.aet && c.aet.length) {
                        var e = d.target || d.srcElement;
                        if (e) {
                            var k = h.b.ua, r = a.getAttribute(e, g.ta) != u ? t : v;
                            if (a.getAttribute(e, g.sa) == u) if (r) n.Z(n.fa(e, d)); else {
                                var f = a.R(e);
                                if (b.H(k, "*") || b.H(k, f)) n.Z(n.fa(e, d)); else for (; e.parentNode != u;) {
                                    var r = e.parentNode, f = a.R(r), q = "a" === f && b.H(k, "a") ? t : v,
                                        f = "button" === f && b.H(k, "button") ? t : v,
                                        x = a.getAttribute(r, g.ta) != u ? t : v;
                                    if (a.getAttribute(r,
                                        g.sa) == u && (q || f || x)) {
                                        n.Z(n.fa(r, d));
                                        break
                                    }
                                    e = e.parentNode
                                }
                            }
                        }
                    }
                }
            }, fa: function (e, f) {
                var k = {}, r = g.Ta;
                k.id = a.getAttribute(e, r.id) || a.getAttribute(e, "id") || "";
                k.aa = a.getAttribute(e, r.aa) || a.getAttribute(e, "class") || "";
                k.ra = a.getAttribute(e, r.ra) || a.ib(e);
                k.content = a.getAttribute(e, r.content) || a.ya(e, t);
                k.pa = a.getAttribute(e, r.pa) || a.R(e);
                k.link = a.getAttribute(e, r.link) || a.getAttribute(e, "href") || "";
                k.type = f.type || "click";
                r = b.Da(e.offsetTop) ? e.offsetTop : 0;
                "click" === f.type ? r = d.Ca ? f.clientY + Math.max(document.documentElement.scrollTop,
                    document.body.scrollTop) : f.pageY : "touchend" === f.type && (f.ma && b.e(f.ma.changedTouches, "Array") && f.ma.changedTouches.length) && (r = f.ma.changedTouches[0].pageY);
                k.Jb = r;
                return k
            }, Z: function (a) {
                var d = b.g;
                a = [+new Date - (h.b.B !== s ? h.b.B : m), d(a.id), d(a.aa), d(a.pa), d(a.ra), d(a.link), d(a.content), a.type, a.Jb].join("*");
                n.$(a);
                b.e(this.O(), "Function") && this.O()()
            }, $: function (a) {
                a.length > g.ba || (encodeURIComponent(p.join("!") + a).length > g.ba && (n.r(p.join("!")), p = []), p.push(a))
            }, r: function (a) {
                h.b.c.et = 5;
                h.b.c.ep =
                    a;
                h.b.j()
            }, O: function () {
                return function () {
                    p && p.length && (n.r(p.join("!")), p = [])
                }
            }
        };
        b.ia() && "" !== c.aet && f.d("pv-b", function () {
            e.d(document, "click", n.P());
            "ontouchend" in document && e.d(window, "touchend", n.P());
            e.d(window, "unload", n.O())
        });
        return n
    })();
    (function () {
        var b = mt.event, a = mt.i, e = h.z, d = h.G, g = +new Date, f = [], m = u, p = {
            Ya: function () {
                return function () {
                    h.b && (h.b.M && c.aet && c.aet.length) && (window.clearTimeout(m), m = window.setTimeout(function () {
                        p.Pa(a.S() + a.L())
                    }, 150))
                }
            }, Pa: function (a) {
                p.$([+new Date - (h.b.B !== s ? h.b.B : g), a].join("*"))
            }, $: function (a) {
                if (encodeURIComponent(f.join("!") + a).length > e.ba || 3 < f.length) p.r(f.join("!")), f = [];
                f.push(a)
            }, r: function (b) {
                h.b.c.et = 6;
                h.b.c.vh = a.L();
                h.b.c.ep = b;
                h.b.j()
            }, O: function () {
                return function () {
                    f && f.length && (p.r(f.join("!")),
                        f = [])
                }
            }
        };
        mt.lang.ia() && "" !== c.aet && d.d("pv-b", function () {
            b.d(window, "scroll", p.Ya());
            b.d(window, "unload", p.O())
        });
        return p
    })();
    (function () {
        function b() {
            return function () {
                h.b.c.nv = 0;
                h.b.c.st = 4;
                h.b.c.et = 3;
                h.b.c.ep = h.ca.gb() + "," + h.ca.eb();
                h.b.j()
            }
        }

        function a() {
            clearTimeout(z);
            var b;
            q && (b = "visible" == document[q]);
            x && (b = !document[x]);
            p = "undefined" == typeof b ? t : b;
            if ((!m || !n) && p && w) y = t, k = +new Date; else if (m && n && (!p || !w)) y = v, r += +new Date - k;
            m = p;
            n = w;
            z = setTimeout(a, 100)
        }

        function e(a) {
            var k = document, b = "";
            if (a in k) b = a; else for (var d = ["webkit", "ms", "moz", "o"], q = 0; q < d.length; q++) {
                var x = d[q] + a.charAt(0).toUpperCase() + a.slice(1);
                if (x in k) {
                    b =
                        x;
                    break
                }
            }
            return b
        }

        function d(k) {
            if (!("focus" == k.type || "blur" == k.type) || !(k.target && k.target != window)) w = "focus" == k.type || "focusin" == k.type ? t : v, a()
        }

        var g = mt.event, f = h.G, m = t, p = t, n = t, w = t, l = +new Date, k = l, r = 0, y = t,
            q = e("visibilityState"), x = e("hidden"), z;
        a();
        (function () {
            var k = q.replace(/[vV]isibilityState/, "visibilitychange");
            g.d(document, k, a);
            g.d(window, "pageshow", a);
            g.d(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (g.d(document, "focusin", d), g.d(document, "focusout", d)) : (g.d(window, "focus", d),
                g.d(window, "blur", d))
        })();
        h.ca = {
            gb: function () {
                return +new Date - l
            }, eb: function () {
                return y ? +new Date - k + r : r
            }
        };
        f.d("pv-b", function () {
            g.d(window, "unload", b())
        });
        f.d("duration-send", b());
        f.d("duration-done", function () {
            k = l = +new Date;
            r = 0
        });
        return h.ca
    })();
    (function () {
        var b = mt.lang, a = h.z, e = h.load, d = {
            vb: function (d) {
                if ((window._dxt === s || b.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var f = h.b.Q();
                    e([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(f)].join(""), d)
                }
            }, Ib: function (a) {
                if (b.e(a, "String") || b.e(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
            }
        };
        return h.Wa = d
    })();
    (function () {
        function b(a, b, d, q) {
            if (!(a === s || b === s || q === s)) {
                if ("" === a) return [b, d, q].join("*");
                a = String(a).split("!");
                for (var x, e = v, f = 0; f < a.length; f++) if (x = a[f].split("*"), String(b) === x[0]) {
                    x[1] = d;
                    x[2] = q;
                    a[f] = x.join("*");
                    e = t;
                    break
                }
                e || a.push([b, d, q].join("*"));
                return a.join("!")
            }
        }

        function a(k) {
            for (var b in k) if ({}.hasOwnProperty.call(k, b)) {
                var e = k[b];
                d.e(e, "Object") || d.e(e, "Array") ? a(e) : k[b] = String(e)
            }
        }

        var e = mt.url, d = mt.lang, g = mt.o, f = mt.i, m = h.z, p = h.G, n = h.Wa, w = h.load, l = {
            N: [], W: 0, Ea: v, w: {qa: "", page: ""},
            init: function () {
                l.h = 0;
                p.d("pv-b", function () {
                    l.Xa();
                    l.Za()
                });
                p.d("pv-d", function () {
                    l.$a();
                    l.w.page = ""
                });
                p.d("stag-b", function () {
                    h.b.c.api = l.h || l.W ? l.h + "_" + l.W : "";
                    h.b.c.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), l.w.qa, l.w.page].join("!")
                });
                p.d("stag-d", function () {
                    h.b.c.api = 0;
                    l.h = 0;
                    l.W = 0
                })
            }, Xa: function () {
                var a = window._hmt || [];
                if (!a || d.e(a, "Array")) window._hmt = {
                    id: c.id, cmd: {}, push: function () {
                        for (var a = window._hmt, k = 0; k < arguments.length; k++) {
                            var b = arguments[k];
                            d.e(b, "Array") && (a.cmd[a.id].push(b),
                            "_setAccount" === b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
                        }
                    }
                }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
            }, Za: function () {
                var a = window._hmt;
                if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, q = 0, x = b.length; q < x; q++) {
                    var e = b[q];
                    d.test(e[0]) ? l.N.push(e) : l.na(e)
                }
                a.cmd[c.id] = {push: l.na}
            }, $a: function () {
                if (0 < l.N.length) for (var a = 0, b = l.N.length; a < b; a++) l.na(l.N[a]);
                l.N = u
            }, na: function (a) {
                var b = a[0];
                if (l.hasOwnProperty(b) &&
                    d.e(l[b], "Function")) l[b](a)
            }, _setAccount: function (a) {
                1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (l.h |= 1)
            }, _setAutoPageview: function (a) {
                if (1 < a.length && (a = a[1], v === a || t === a)) l.h |= 2, h.b.Aa = a
            }, _trackPageview: function (a) {
                if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                    l.h |= 4;
                    h.b.c.sn = h.b.za();
                    h.b.c.et = 0;
                    h.b.c.ep = "";
                    h.b.c.vl = f.S() + f.L();
                    h.b.c.kb = 0;
                    h.b.ha ? (h.b.c.nv = 0, h.b.c.st = 4) : h.b.ha = t;
                    var b = h.b.c.u, d = h.b.c.su;
                    h.b.c.u = m.protocol + "//" + document.location.host + a[1];
                    l.Ea || (h.b.c.su = document.location.href);
                    h.b.j();
                    h.b.c.u = b;
                    h.b.c.su = d;
                    h.b.B = +new Date
                }
            }, _trackEvent: function (a) {
                2 < a.length && (l.h |= 8, h.b.c.nv = 0, h.b.c.st = 4, h.b.c.et = 4, h.b.c.ep = d.g(a[1]) + "*" + d.g(a[2]) + (a[3] ? "*" + d.g(a[3]) : "") + (a[4] ? "*" + d.g(a[4]) : ""), h.b.j())
            }, _setCustomVar: function (a) {
                if (!(4 > a.length)) {
                    var b = a[1], e = a[4] || 3;
                    if (0 < b && 6 > b && 0 < e && 4 > e) {
                        l.W++;
                        for (var q = (h.b.c.cv || "*").split("!"), x = q.length; x < b - 1; x++) q.push("*");
                        q[b - 1] = e + "*" + d.g(a[2]) + "*" + d.g(a[3]);
                        h.b.c.cv = q.join("!");
                        a = h.b.c.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g,
                            "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Bb("Hm_cv_" + c.id)
                    }
                }
            }, _setUserTag: function (a) {
                if (!(3 > a.length)) {
                    var e = d.g(a[1]);
                    a = d.g(a[2]);
                    if (e !== s && a !== s) {
                        var f = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), f = b(f, e, 1, a);
                        h.b.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                    }
                }
            }, _setVisitTag: function (a) {
                if (!(3 > a.length)) {
                    var e = d.g(a[1]);
                    a = d.g(a[2]);
                    if (e !== s && a !== s) {
                        var f = l.w.qa, f = b(f, e, 2, a);
                        l.w.qa = f
                    }
                }
            }, _setPageTag: function (a) {
                if (!(3 > a.length)) {
                    var e = d.g(a[1]);
                    a = d.g(a[2]);
                    if (e !== s && a !== s) {
                        var f = l.w.page, f = b(f, e, 3, a);
                        l.w.page = f
                    }
                }
            }, _setReferrerOverride: function (a) {
                1 < a.length && (h.b.c.su = a[1].charAt && "/" === a[1].charAt(0) ? m.protocol + "//" + window.location.host + a[1] : a[1], l.Ea = t)
            }, _trackOrder: function (b) {
                b = b[1];
                d.e(b, "Object") && (a(b), l.h |= 16, h.b.c.nv = 0, h.b.c.st = 4, h.b.c.et = 94, h.b.c.ep = g.stringify(b), h.b.j())
            }, _trackMobConv: function (a) {
                if (a = {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                }[a[1]]) l.h |= 32, h.b.c.et = 93, h.b.c.ep = a, h.b.j()
            }, _trackRTPageview: function (b) {
                b = b[1];
                d.e(b, "Object") &&
                (a(b), b = g.stringify(b), 512 >= encodeURIComponent(b).length && (l.h |= 64, h.b.c.rt = b))
            }, _trackRTEvent: function (b) {
                b = b[1];
                if (d.e(b, "Object")) {
                    a(b);
                    b = encodeURIComponent(g.stringify(b));
                    var e = function (a) {
                        var b = h.b.c.rt;
                        l.h |= 128;
                        h.b.c.et = 90;
                        h.b.c.rt = a;
                        h.b.j();
                        h.b.c.rt = b
                    }, f = b.length;
                    if (900 >= f) e.call(this, b); else for (var f = Math.ceil(f / 900), q = "block|" + Math.round(Math.random() * m.V).toString(16) + "|" + f + "|", x = [], z = 0; z < f; z++) x.push(z), x.push(b.substring(900 * z, 900 * z + 900)), e.call(this, q + x.join("|")), x = []
                }
            }, _setDataxId: function (a) {
                a =
                    a[1];
                n.vb();
                n.Ib(a)
            }, _setUserId: function (a) {
                a = d.g(a[1]);
                if (a !== s) {
                    var b = h.b.c.p, e = h.b.c.ep;
                    h.b.c.et = 8;
                    h.b.c.ep = "";
                    h.b.c.p = "uid_*" + a;
                    h.b.j();
                    h.b.c.p = b;
                    h.b.c.ep = e
                }
            }, _setAutoTracking: function (a) {
                if (1 < a.length && (a = a[1], v === a || t === a)) h.b.Ba = a
            }, _setAutoEventTracking: function (a) {
                if (1 < a.length && (a = a[1], v === a || t === a)) h.b.M = a
            }, _trackPageDuration: function (a) {
                1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.b.c.et = 3, h.b.c.ep = a, h.b.j())) : p.F("duration-send");
                p.F("duration-done")
            }, _require: function (a) {
                1 <
                a.length && (a = a[1], m.Ra.test(e.K(a)) && w(a))
            }, _providePlugin: function (a) {
                if (1 < a.length) {
                    var b = window._hmt, e = a[1];
                    a = a[2];
                    if (d.H(m.Ga, e) && d.e(a, "Function") && (b.plugins = b.plugins || {}, b.C = b.C || {}, b.plugins[e] = a, b.s = b.s || [], a = b.s.slice(), e && a.length && a[0][1] === e)) for (var q = 0, f = a.length; q < f; q++) {
                        var g = a[q][2] || {};
                        if (b.plugins[e] && !b.C[e]) b.C[e] = new b.plugins[e](g), b.s.shift(); else break
                    }
                }
            }, _requirePlugin: function (a) {
                if (1 < a.length) {
                    var b = window._hmt, e = a[1], q = a[2] || {};
                    if (d.H(m.Ga, e)) if (b.plugins = b.plugins ||
                        {}, b.C = b.C || {}, b.plugins[e] && !b.C[e]) b.C[e] = new b.plugins[e](q); else {
                        b.s = b.s || [];
                        for (var q = 0, f = b.s.length; q < f; q++) if (b.s[q][1] === e) return;
                        b.s.push(a);
                        l._require([u, m.yb + e + ".js"])
                    }
                }
            }, _trackCustomEvent: function (a) {
                if (1 < a.length) {
                    var b = d.g(a[1]), e = "";
                    a = a[2];
                    if (d.e(a, "Object")) {
                        var e = [], q;
                        for (q in a) a.hasOwnProperty(q) && (e.push(d.g(q)), d.e(a[q], "Object") ? e.push(d.g(g.stringify(a[q]))) : e.push(d.g(String(a[q]))));
                        e = "*" + e.join("*")
                    }
                    h.b.c.et = 7;
                    h.b.c.ep = "ce!_iden*" + b + e;
                    h.b.j()
                }
            }
        };
        l.init();
        h.Sa = l;
        return h.Sa
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = t, this.c = {}, this.Ba = this.Aa = t, this.M = k.M, this.ua = g.ia() && 0 < c.aet.length ? c.aet.split(",") : "", this.ha = v, this.init())
        }

        var a = mt.url, e = mt.Ka, d = mt.oa, g = mt.lang, f = mt.cookie, m = mt.i, p = mt.localStorage,
            n = mt.sessionStorage, w = mt.o, l = mt.event, k = h.z, r = h.load, y = h.G;
        b.prototype = {
            ka: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, Fa: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, T: function (b) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.Fa(b, c.dm[d])) return t
                } else {
                    var e = a.K(b);
                    if (e && this.ka(e, c.dm[d])) return t
                }
                return v
            }, Q: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.ka(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, ea: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.Fa(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, jb: function () {
                if (!document.referrer) return k.D - k.I > c.vdur ? 1 : 4;
                var b = v;
                this.T(document.referrer) && this.T(document.location.href) ? b = t : (b = a.K(document.referrer), b = this.ka(b || "", document.location.hostname));
                return b ? k.D - k.I > c.vdur ? 1 : 4 : 3
            }, getData: function (a) {
                try {
                    return f.get(a) || n.get(a) || p.get(a)
                } catch (b) {
                }
            }, setData: function (a, b, d) {
                try {
                    f.set(a, b, {domain: this.Q(), path: this.ea(), J: d}), d ? p.set(a, b, d) : n.set(a, b)
                } catch (e) {
                }
            }, Bb: function (a) {
                try {
                    f.set(a, "", {
                        domain: this.Q(), path: this.ea(),
                        J: -1
                    }), n.remove(a), p.remove(a)
                } catch (b) {
                }
            }, Gb: function () {
                var a, b, d, e, g;
                k.I = this.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.I.length && (k.I = Math.round(k.I / 1E3));
                b = this.jb();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (g = e.length - 1; 0 <= g; g--) 13 === e[g].length && (e[g] = "" + Math.round(e[g] / 1E3));
                    for (; 2592E3 < k.D - e[0];) e.shift();
                    g = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.D); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.D, e = "", g = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" +
                    c.id, k.D);
                d = f.wb(this.Q(), this.ea());
                if (0 === c.nv && this.T(document.location.href) && ("" === document.referrer || this.T(document.referrer))) a = 0, b = 4;
                this.c.nv = a;
                this.c.st = b;
                this.c.cc = d;
                this.c.lt = e;
                this.c.lv = g
            }, Fb: function () {
                for (var a = [], b = this.c.et, d = +new Date, e = 0, f = k.La.length; e < f; e++) {
                    var g = k.La[e], m = this.c[g];
                    "undefined" !== typeof m && "" !== m && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(m))
                }
                switch (b) {
                    case 0:
                        this.c.rt && a.push("rt=" +
                            encodeURIComponent(this.c.rt));
                        break;
                    case 5:
                        a.push("_lpt=" + this.B);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("_lpt=" + this.B);
                        a.push("_ct=" + d);
                        break;
                    case 90:
                        this.c.rt && a.push("rt=" + this.c.rt)
                }
                return a.join("&")
            }, Hb: function () {
                this.Gb();
                this.c.si = c.id;
                this.c.sn = this.za();
                this.c.su = document.referrer;
                this.c.hh = window.location.hash;
                this.c.ds = m.Cb;
                this.c.cl = m.colorDepth + "-bit";
                this.c.ln = String(m.language).toLowerCase();
                this.c.ja = m.javaEnabled ? 1 : 0;
                this.c.ck = m.cookieEnabled ? 1 : 0;
                this.c.lo = "number" === typeof _bdhm_top ?
                    1 : 0;
                this.c.fl = d.mb();
                this.c.v = "1.2.56";
                this.c.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.c.tt = document.title || "";
                this.c.vl = m.S() + m.L();
                var b = document.location.href;
                this.c.cm = a.m(b, k.qb) || "";
                this.c.cp = a.m(b, k.rb) || a.m(b, k.Mb) || "";
                this.c.cw = a.m(b, k.pb) || a.m(b, k.Ob) || "";
                this.c.ci = a.m(b, k.nb) || a.m(b, k.Lb) || "";
                this.c.cf = a.m(b, k.tb) || a.m(b, k.Nb) || "";
                this.c.cu = a.m(b, k.ob) || a.m(b, k.Kb) || ""
            }, init: function () {
                try {
                    this.Hb(), 0 === this.c.nv ? this.Eb() : this.wa(), h.b = this, this.Va(), this.Ua(), y.F("pv-b"),
                        this.Db()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(k.la + "//" + k.Ha + "?" + b.join("&"))
                }
            }, Db: function () {
                function a() {
                    y.F("pv-d")
                }

                this.Aa ? (this.ha = t, this.c.et = 0, this.c.ep = "", this.c.vl = m.S() + m.L(), this.j(a)) : a();
                this.B = +new Date
            }, j: function (a) {
                if (this.Ba) {
                    var b = this;
                    b.c.rnd = Math.round(Math.random() * k.V);
                    y.F("stag-b");
                    var d = k.la + "//" + k.Ha + "?" + b.Fb();
                    y.F("stag-d");
                    b.Qa(d);
                    e.log(d, function (d) {
                        b.Ia(d);
                        g.e(a, "Function") && a.call(b)
                    })
                }
            }, Va: function () {
                var b = document.location.hash.substring(1), d = RegExp(c.id),
                    e = a.K(document.referrer) === k.Ma ? 1 : 0, f = a.m(b, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e && g) && (this.c.rnd = Math.round(Math.random() * k.V), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.c.rnd), f = document.getElementsByTagName("script")[0],
                    f.parentNode.insertBefore(b, f))
            }, Ua: function () {
                if (window.postMessage && window.self !== window.parent) {
                    var b = this;
                    l.d(window, "message", function (d) {
                        if (a.K(d.origin) === k.Ma) {
                            var e = d.data || {};
                            d = e.sd || "";
                            var e = e.jn || "", f = /^customevent$/.test(e);
                            RegExp(c.id).test(d) && f && (b.c.rnd = Math.round(Math.random() * k.V), r(k.protocol + "//" + c.js + e + ".js?" + b.c.rnd))
                        }
                    });
                    window.parent.postMessage({
                        id: c.id,
                        url: document.location.href,
                        status: "__Messenger__hmLoaded"
                    }, "*")
                }
            }, Qa: function (a) {
                var b;
                try {
                    b = w.parse(n.get("Hm_unsent_" +
                        c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.c.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                n.set("Hm_unsent_" + c.id, w.stringify(b))
            }, Ia: function (a) {
                var b;
                try {
                    b = w.parse(n.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? n.set("Hm_unsent_" + c.id, w.stringify(b)) : this.wa()
                }
            }, wa: function () {
                n.remove("Hm_unsent_" +
                    c.id)
            }, Eb: function () {
                var a = this, b;
                try {
                    b = w.parse(n.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) for (var f = function (b) {
                    e.log(k.la + "//" + b, function (b) {
                        a.Ia(b)
                    })
                }, g = 0; g < b.length; g++) f(b[g])
            }, za: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    (function () {
        var b = mt.event, a = mt.lang, e = h.z;
        if (c.kbtrk && "undefined" !== typeof h.b) {
            h.b.c.kb = a.Da(h.b.c.kb) ? h.b.c.kb : 0;
            var d = function () {
                h.b.c.et = 85;
                h.b.c.ep = h.b.c.kb;
                h.b.j()
            };
            b.d(document, "keyup", function () {
                h.b.c.kb++
            });
            b.d(window, "unload", function () {
                d()
            });
            setInterval(d, e.xb)
        }
    })();
    var B = h.z, C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.i, a = mt.lang, e = mt.event, d = mt.o;
        if ("undefined" !== typeof h.b && (c.med || (!b.Ca || 7 < b.ub) && c.cvcc)) {
            var g, f, m, p, n = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, w = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === v) return v
            }, l = function (b, e) {
                var f = {};
                f.n = g;
                f.t = "clk";
                f.v = b;
                if (e) {
                    var k = e.getAttribute("href"), l = e.getAttribute("onclick") ? "" + e.getAttribute("onclick") : u,
                        n = e.getAttribute("id") || "";
                    m.test(k) ? (f.sn = "mediate",
                        f.snv = k) : a.e(l, "String") && m.test(l) && (f.sn = "wrap", f.snv = l);
                    f.id = n
                }
                h.b.c.et = 86;
                h.b.c.ep = d.stringify(f);
                h.b.j();
                for (f = +new Date; 400 >= +new Date - f;) ;
            };
            if (c.med) f = "/zoosnet", g = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
                click: function () {
                    for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, f = 0, g = b.length; f < g; f++) d = b[f], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[f]);
                    return a
                }
            }; else if (c.cvcc) {
                f = "/other-comm";
                g = "other";
                m = c.cvcc.q || s;
                var k = c.cvcc.id || s;
                p = {
                    click: function () {
                        for (var a = [], b = n(document.getElementsByTagName("a")), b = [].concat.apply(b, n(document.getElementsByTagName("area"))), b = [].concat.apply(b, n(document.getElementsByTagName("img"))), d, e, f, g = 0, l = b.length; g < l; g++) d = b[g], m !== s ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), k ? (d = d.getAttribute("id"), (m.test(e) || m.test(f) || k.test(d)) &&
                        a.push(b[g])) : (m.test(e) || m.test(f)) && a.push(b[g])) : k !== s && (d = d.getAttribute("id"), k.test(d) && a.push(b[g]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof p && "undefined" !== typeof m) {
                var r;
                f += /\/$/.test(f) ? "" : "/";
                var y = function (b, d) {
                    if (r === d) return l(f + b, d), v;
                    if (a.e(d, "Array") || a.e(d, "NodeList")) for (var e = 0, g = d.length; e < g; e++) if (r === d[e]) return l(f + b + "/" + (e + 1), d[e]), v
                };
                e.d(document, "mousedown", function (b) {
                    b = b || window.event;
                    r = b.target || b.srcElement;
                    var d = {};
                    for (w(p, function (b, e) {
                        d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
                    }); r &&
                         r !== document && w(d, y) !== v;) r = r.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.f, a = mt.lang, e = mt.event, d = mt.o;
        if ("undefined" !== typeof h.b && a.e(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var g = {
                Oa: function () {
                    for (var a = c.cvcf.length, d, p = 0; p < a; p++) (d = b.xa(decodeURIComponent(c.cvcf[p]))) && e.d(d, "click", g.da())
                }, da: function () {
                    return function () {
                        h.b.c.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.b.c.ep = d.stringify(a);
                        h.b.j()
                    }
                }
            };
            b.zb(function () {
                g.Oa()
            })
        }
    })();
    (function () {
        var b = mt.event, a = mt.o;
        if (c.med && "undefined" !== typeof h.b) {
            var e = {n: "anti", sb: 0, kb: 0, clk: 0}, d = function () {
                h.b.c.et = 86;
                h.b.c.ep = a.stringify(e);
                h.b.j()
            };
            b.d(document, "click", function () {
                e.clk++
            });
            b.d(document, "keyup", function () {
                e.kb = 1
            });
            b.d(window, "scroll", function () {
                e.sb++
            });
            b.d(window, "load", function () {
                setTimeout(d, 5E3)
            })
        }
    })();
    c.spa !== s && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]));
})();
