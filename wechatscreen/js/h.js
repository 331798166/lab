(function() {
    var c = {
        id: "cbc479ac4119d55c0b8a663cd1ccbdec",
        dm: ["wxscreen.com"],
        etrk: [],
        js: "tongji.baidu.com/hm-web/js/",
        icon: '',
        br: false,
        ctrk: true,
        align: 1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: 0,
        rs: 0,
        trust: 0,
        vcard: 0,
        se: [[1, 'baidu.com', 'word|wd|w', 1, 'news,tieba,zhidao,,image,video,hi,baike,wenku,opendata,jingyan'], [2, 'google.com', 'q', 0, 'tbm=isch,tbm=vid,tbm=nws|source=newssearch,tbm=blg,tbm=frm'], [4, 'sogou.com', 'query|keyword', 1, 'news,mp3,pic,v,gouwu,zhishi,blogsearch'], [6, 'search.yahoo.com', 'p', 1, 'news,images,video'], [7, 'yahoo.cn', 'q', 1, 'news,image,music'], [8, 'soso.com', 'w|key', 1, 'image,video,music,sobar,wenwen,news,baike'], [11, 'youdao.com', 'q', 1, 'image,news,,mp3,video'], [12, 'gougou.com', 'search', 1, ',movie,,,,,video'], [13, 'bing.com', 'q', 2, 'images,videos,news'], [14, 'so.com', 'q', 1, 'video,news'], [15, 'jike.com', 'q', 1, 'news,image,video'], [16, 'qihoo.com', 'kw', 0, ''], [17, 'etao.com', 'q', 1, 's,8'], [18, 'soku.com', 'keyword', 2, 'a'], [19, 'easou.com', 'q', 0, ''], [20, 'glb.uc.cn', 'keyword|word|q', 0, '']]
    };
    var l = !0,
    n = null,
    p = !1;
    function r(a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b,
        function(b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, p)
    };
    var ca; (ca = function() {
        function a() {
            if (!a.d) {
                a.d = l;
                for (var b = 0,
                d = e.length; b < d; b++) e[b]()
            }
        }
        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch(d) {
                setTimeout(b, 1);
                return
            }
            a()
        }
        var d = p,
        e = [],
        f;
        document.addEventListener ? f = function() {
            document.removeEventListener("DOMContentLoaded", f, p);
            a()
        }: document.attachEvent && (f = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
        }); (function() {
            if (!d) if (d = l, "complete" === document.readyState) a.d = l;
            else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, p),
            window.addEventListener("load", a, p);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", f);
                window.attachEvent("onload", a);
                var e = p;
                try {
                    e = window.frameElement == n
                } catch(k) {}
                document.documentElement.doScroll && e && b()
            }
        })();
        return function(b) {
            a.d ? b() : e.push(b)
        }
    } ()).d = p;
    function s(a, b) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(a, b)
        } catch(d) {}
    }
    function t(a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : n
    };
    function da(a, b, d) {
        var e;
        d.h && (e = new Date, e.setTime(e.getTime() + d.h));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain: "") + (d.path ? "; path=" + d.path: "") + (e ? "; expires=" + e.toGMTString() : "") + (d.r ? "; secure": "")
    };
    function u(a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : n
    }
    function v(a) {
        return (a = (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : n) ? a.replace(/:\d+$/, "") : a
    };
    function A(a, b) {
        var d = new Image,
        e = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = d;
        d.onload = d.onerror = d.onabort = function() {
            d.onload = d.onerror = d.onabort = n;
            d = window[e] = n;
            b && b(a)
        };
        d.src = a
    };
    function C(a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    var D = function() {
        function a(a) { / ["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00 - \x1f] / g,
            function(a) {
                var b = d[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }
        function b(a) {
            return 10 > a ? "0" + a: a
        }
        var d = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(d) {
            switch (typeof d) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "string":
                return a(d);
            case "boolean":
                return String(d);
            default:
                if (d === n) return "null";
                if (d instanceof Array) {
                    var f = ["["],
                    h = d.length,
                    k,
                    g,
                    m;
                    for (g = 0; g < h; g++) switch (m = d[g], typeof m) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        k && f.push(","),
                        f.push(D(m)),
                        k = 1
                    }
                    f.push("]");
                    return f.join("")
                }
                if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                k = ["{"];
                for (h in d) if (Object.prototype.hasOwnProperty.call(d, h)) switch (g = d[h], typeof g) {
                case "undefined":
                case "unknown":
                case "function":
                    break;
                default:
                    f && k.push(","),
                    f = 1,
                    k.push(D(h) + ":" + D(g))
                }
                k.push("}");
                return k.join("")
            }
        }
    } ();
    var ea = /msie (\d+\.\d+)/i.test(navigator.userAgent),
    fa = navigator.cookieEnabled,
    ga = navigator.javaEnabled(),
    ha = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "",
    ia = window.screen.width + "x" + window.screen.height,
    ja = window.screen.colorDepth;
    var F;
    function H() {
        if (!F) try {
            F = document.createElement("input"),
            F.type = "hidden",
            F.style.display = "none",
            F.addBehavior("#default#userData"),
            document.getElementsByTagName("head")[0].appendChild(F)
        } catch(a) {
            return p
        }
        return l
    }
    function pa(a, b, d) {
        var e = new Date;
        e.setTime(e.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(a, b)) : H() && (F.expires = e.toUTCString(), F.load(document.location.hostname), F.setAttribute(a, b), F.save(document.location.hostname))
        } catch(f) {}
    }
    function qa(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"),
                d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (H()) try {
            return F.load(document.location.hostname),
            F.getAttribute(a)
        } catch(e) {}
        return n
    };
    c.se.push([14, "so.360.cn", "q", 1, ",news"]);
    c.se.push([14, "v.360.cn", "q", 1, "so"]);
    var I = 0,
    J = Math.round( + new Date / 1E3),
    L = "https:" == document.location.protocol ? "https:": "http:",
    ra = "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd sb se si st su sw sse v cv lv u api tt".split(" ");
    function R() {
        if ("undefined" == typeof window["_bdhm_loaded_" + c.id]) {
            window["_bdhm_loaded_" + c.id] = l;
            var a = this;
            a.a = {};
            a.b = [];
            a.q = {
                push: function() {
                    a.p.apply(a, arguments)
                }
            };
            a.e = 0;
            a.i = p;
            sa(a)
        }
    }
    R.prototype = {
        getData: function(a) {
            try {
                var b = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie);
                return (b ? b[2] : n) || t(a) || qa(a)
            } catch(d) {}
        },
        setData: function(a, b, d) {
            try {
                da(a, b, {
                    domain: ta(),
                    path: ua(),
                    h: d
                }),
                d ? pa(a, b, d) : s(a, b)
            } catch(e) {}
        },
        p: function(a) {
            if (C(a, "Array")) {
                var b = function(a) {
                    return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
                };
                switch (a[0]) {
                case "_trackPageview":
                    if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                        this.a.api |= 4;
                        this.a.et = 0;
                        this.a.ep = "";
                        this.i ? (this.a.nv = 0, this.a.st = 4) : this.i = l;
                        var b = this.a.u,
                        d = this.a.su;
                        this.a.u = L + "//" + document.location.host + a[1];
                        this.a.su = document.location.href;
                        S(this);
                        this.a.u = b;
                        this.a.su = d
                    }
                    break;
                case "_trackEvent":
                    2 < a.length && (this.a.api |= 8, this.a.nv = 0, this.a.st = 4, this.a.et = 4, this.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), S(this));
                    break;
                case "_setCustomVar":
                    if (4 > a.length) break;
                    var d = a[1],
                    e = a[4] || 3;
                    if (0 < d && 6 > d && 0 < e && 4 > e) {
                        this.e++;
                        for (var f = (this.a.cv || "*").split("!"), h = f.length; h < d - 1; h++) f.push("*");
                        f[d - 1] = e + "*" + b(a[2]) + "*" + b(a[3]);
                        this.a.cv = f.join("!");
                        a = this.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? this.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : va()
                    }
                    break;
                case "_trackOrder":
                    if (a = a[1], C(a, "Object")) {
                        var k = function(a) {
                            for (var b in a) if ({}.hasOwnProperty.call(a, b)) {
                                var d = a[b];
                                C(d, "Object") || C(d, "Array") ? k(d) : a[b] = String(d)
                            }
                        };
                        k(a);
                        this.a.api |= 16;
                        this.a.nv = 0;
                        this.a.st = 4;
                        this.a.et = 94;
                        this.a.ep = D(a);
                        S(this)
                    }
                }
            }
        }
    };
    function wa() {
        var a = t("Hm_unsent_" + c.id);
        if (a) for (var a = a.split(","), b = 0, d = a.length; b < d; b++) A(L + "//" + decodeURIComponent(a[b]).replace(/^https?:\/\//, ""),
        function(a) {
            T(a)
        })
    }
    function T(a) {
        var b = t("Hm_unsent_" + c.id) || "";
        b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? s("Hm_unsent_" + c.id, b) : window.sessionStorage && window.sessionStorage.removeItem("Hm_unsent_" + c.id))
    }
    function xa(a, b) {
        var d = t("Hm_unsent_" + c.id) || "",
        e = a.a.u ? "": "&u=" + encodeURIComponent(document.location.href),
        d = encodeURIComponent(b.replace(/^https?:\/\//, "") + e) + (d ? "," + d: "");
        s("Hm_unsent_" + c.id, d)
    }
    function S(a) {
        a.a.rnd = Math.round(2147483647 * Math.random());
        a.a.api = a.a.api || a.e ? a.a.api + "_" + a.e: "";
        var b = L + "//hm.baidu.com/hm.gif?" + za(a);
        a.a.api = 0;
        a.e = 0;
        xa(a, b);
        A(b,
        function(a) {
            T(a)
        })
    }
    function Aa(a) {
        return function() {
            a.a.nv = 0;
            a.a.st = 4;
            a.a.et = 3;
            a.a.ep = (new Date).getTime() - a.g.o + "," + ((new Date).getTime() - a.g.f + a.g.j);
            S(a)
        }
    }
    function sa(a) {
        try {
            var b, d, e, f, h, k, g;
            I = a.getData("Hm_lpvt_" + c.id) || 0;
            13 == I.length && (I = Math.round(I / 1E3));
            a: if (document.referrer) {
                for (var m = 0,
                ya = c.se.length; m < ya; m++) if (RegExp("(^|\\.)" + c.se[m][1].replace(/\./g, "\\.")).test(v(document.referrer))) {
                    var B = u(document.referrer, c.se[m][2]) || "";
                    if (B || !(2 != c.se[m][0] && 14 != c.se[m][0] && 17 != c.se[m][0])) {
                        1 == c.se[m][0] && -1 < document.referrer.indexOf("cpro.baidu.com") && (B = "");
                        a.a.se = c.se[m][0];
                        for (var Ca = a.a,
                        q = c.se[m], K = 0, Da = 2 == q[3] ? q[1] + "\\/": "", Ea = 1 == q[3] ? "\\." + q[1] : "", X = q[4].split(","), q = 0, Fa = X.length; q < Fa; q++) if ("" !== X[q] && RegExp(Da + X[q] + Ea).test(document.referrer)) {
                            K = q + 1;
                            break
                        }
                        Ca.sse = K;
                        a.a.sw = B;
                        d = 2;
                        break a
                    }
                }
                B = p;
                U(document.referrer) && U(document.location.href) ? B = l: (K = v(document.referrer), B = V(K || "", document.location.hostname));
                d = B ? J - I > c.vdur ? 1 : 4 : 3
            } else d = J - I > c.vdur ? 1 : 4;
            b = 4 != d ? 1 : 0;
            if (k = a.getData("Hm_lvt_" + c.id)) {
                g = k.split(",");
                for (var G = g.length - 1; 0 <= G; G--) 13 == g[G].length && (g[G] = "" + Math.round(g[G] / 1E3));
                for (; 2592E3 < J - g[0];) g.shift();
                h = 4 > g.length ? 2 : 3;
                for (1 === b && g.push(J); 4 < g.length;) g.shift();
                k = g.join(",");
                f = g[g.length - 1]
            } else k = J,
            f = "",
            h = 1;
            a.setData("Hm_lvt_" + c.id, k, c.age);
            a.setData("Hm_lpvt_" + c.id, J);
            e = J == a.getData("Hm_lpvt_" + c.id) ? "1": "0";
            if (0 == c.nv && U(document.location.href) && ("" == document.referrer || U(document.referrer))) b = 0,
            d = 4;
            a.a.nv = b;
            a.a.st = d;
            a.a.cc = e;
            a.a.lt = f;
            a.a.lv = h;
            a.a.si = c.id;
            a.a.su = document.referrer;
            a.a.ds = ia;
            a.a.cl = ja + "-bit";
            a.a.ln = ha;
            a.a.ja = ga ? 1 : 0;
            a.a.ck = fa ? 1 : 0;
            a.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
            var M = a.a;
            b = "";
            if (navigator.plugins && navigator.mimeTypes.length) {
                var Z = navigator.plugins["Shockwave Flash"];
                Z && Z.description && (b = Z.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
            } else if (window.ActiveXObject) try {
                var ka = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                ka && (b = ka.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
            } catch(Na) {}
            M.fl = b;
            var N = a.a,
            M = "";
            try {
                external.twGetVersion(external.twGetSecurityID(window)) && -1 < external.twGetRunPath.toLowerCase().indexOf("360se") && (M = 17)
            } catch(Oa) {}
            N.sb = M;
            a.a.v = "1.0.53";
            a.a.cv = decodeURIComponent(a.getData("Hm_cv_" + c.id) || "");
            1 == a.a.nv && (a.a.tt = document.title || "");
            a.a.api = 0;
            var w = document.location.href;
            a.a.cm = u(w, "hmmd") || "";
            a.a.cp = u(w, "hmpl") || "";
            a.a.cw = u(w, "hmkw") || "";
            a.a.ci = u(w, "hmci") || "";
            a.a.cf = u(w, "hmsr") || "";
            0 == a.a.nv ? wa() : T(".*");
            if ("" != c.icon) {
                var x, y = c.icon.split("|"),
                $ = "http://tongji.baidu.com/hm-web/welcome/ico?s=" + c.id,
                aa = ("http:" == L ? "http://eiv": "https://bs") + ".baidu.com" + y[0] + "." + y[1];
                switch (y[1]) {
                case "swf":
                    var la = y[2],
                    ma = y[3],
                    N = "s=" + $,
                    w = "HolmesIcon" + J;
                    x = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + w + '" width="' + la + '" height="' + ma + '"><param name="movie" value="' + aa + '" /><param name="flashvars" value="' + (N || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + w + '" width="' + la + '" height="' + ma + '" src="' + aa + '" flashvars="' + (N || "") + '" allowscriptaccess="always" /></object>';
                    break;
                case "gif":
                    x = '<a href="' + $ + '" target="_blank"><img border="0" src="' + aa + '" width="' + y[2] + '" height="' + y[3] + '"></a>';
                    break;
                default:
                    x = '<a href="' + $ + '" target="_blank">' + y[0] + "</a>"
                }
                document.write(x)
            }
            var O = document.location.hash.substring(1),
            Ga = RegExp(c.id),
            Ha = -1 < document.referrer.indexOf("baidu.com") ? l: p;
            if (O && Ga.test(O) && Ha) {
                var P = document.createElement("script");
                P.setAttribute("type", "text/javascript");
                P.setAttribute("charset", "utf-8");
                P.setAttribute("src", L + "//" + c.js + u(O, "jn") + "." + u(O, "sx") + "?" + a.a.rnd);
                var na = document.getElementsByTagName("script")[0];
                na.parentNode.insertBefore(P, na)
            }
            a.l && a.l();
            a.k && a.k();
            if (c.rec || c.trust) a.a.nv ? (a.c = encodeURIComponent(document.referrer), window.sessionStorage ? s("Hm_from_" + c.id, a.c) : pa("Hm_from_" + c.id, a.c, 864E5)) : a.c = (window.sessionStorage ? t("Hm_from_" + c.id) : qa("Hm_from_" + c.id)) || "";
            a.m && a.m();
            a.n && a.n();
            a.g = new Ba;
            r(window, "beforeunload", Aa(a));
            var z = window._hmt;
            if (z && z.length) for (x = 0; x < z.length; x++) {
                var E = z[x];
                switch (E[0]) {
                case "_setAccount":
                    1 < E.length && /^[0-9a-z]{32}$/.test(E[1]) && (a.a.api |= 1, window._bdhm_account = E[1]);
                    break;
                case "_setAutoPageview":
                    if (1 < E.length) {
                        var ba = E[1];
                        if (p === ba || l === ba) a.a.api |= 2,
                        window._bdhm_autoPageview = ba
                    }
                }
            }
            if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                window._bdhm_account = c.id;
                var Q = window._hmt;
                if (Q && Q.length) for (var z = 0,
                Ja = Q.length; z < Ja; z++) a.p(Q[z]);
                window._hmt = a.q
            }
            if ("undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === l) a.i = l,
            a.a.et = 0,
            a.a.ep = "",
            S(a)
        } catch(oa) {
            a = [],
            a.push("si=" + c.id),
            a.push("n=" + encodeURIComponent(oa.name)),
            a.push("m=" + encodeURIComponent(oa.message)),
            a.push("r=" + encodeURIComponent(document.referrer)),
            A(L + "//hm.baidu.com/hm.gif?" + a.join("&"))
        }
    }
    function za(a) {
        for (var b = [], d = 0, e = ra.length; d < e; d++) {
            var f = ra[d],
            h = a.a[f];
            "undefined" != typeof h && "" !== h && b.push(f + "=" + encodeURIComponent(h))
        }
        return b.join("&")
    }
    function va() {
        var a = "Hm_cv_" + c.id;
        try {
            if (da(a, "", {
                domain: ta(),
                path: ua(),
                h: -1
            }), window.sessionStorage && window.sessionStorage.removeItem(a), window.localStorage) window.localStorage.removeItem(a);
            else if (H()) try {
                F.load(document.location.hostname),
                F.removeAttribute(a),
                F.save(document.location.hostname)
            } catch(b) {}
        } catch(d) {}
    }
    function ua() {
        for (var a = 0,
        b = c.dm.length; a < b; a++) {
            var d = c.dm[a];
            if ( - 1 < d.indexOf("/") && Ia(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
        }
        return "/"
    }
    function ta() {
        for (var a = document.location.hostname,
        b = 0,
        d = c.dm.length; b < d; b++) if (V(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
        return a
    }
    function U(a) {
        for (var b = 0; b < c.dm.length; b++) if ( - 1 < c.dm[b].indexOf("/")) {
            if (Ia(a, c.dm[b])) return l
        } else {
            var d = v(a);
            if (d && V(d, c.dm[b])) return l
        }
        return p
    }
    function Ia(a, b) {
        a = a.replace(/^https?:\/\//, "");
        return 0 == a.indexOf(b)
    }
    function V(a, b) {
        a = "." + a.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var d = a.indexOf(b);
        return - 1 < d && d + b.length == a.length
    }
    R.prototype.l = function() {
        r(document, "click", Ka(this));
        for (var a = c.etrk.length,
        b = 0; b < a; b++) {
            var d = c.etrk[b],
            e = document.getElementById(d.id);
            e && r(e, d.eventType, La(this))
        }
    };
    function La(a) {
        return function(b) { (b.target || b.srcElement).setAttribute("HM_fix", b.clientX + ":" + b.clientY);
            a.a.et = 1;
            a.a.ep = "{id:" + this.id + ",eventType:" + b.type + "}";
            S(a)
        }
    }
    function Ka(a) {

        return function(b) {
            var d = b.target || b.srcElement,
            e = d.getAttribute("HM_fix"),
            f = b.clientX + ":" + b.clientY;
            if (e && e == f) d.removeAttribute("HM_fix");
            else if (e = c.etrk.length, 0 < e) {
                for (f = {}; d && d != document.body;) d.id && (f[d.id] = ""),
                d = d.parentNode;
                for (d = 0; d < e; d++) {
                    var h = c.etrk[d];
                    f.hasOwnProperty(h.id) && (a.a.et = 1, a.a.ep = "{id:" + h.id + ",eventType:" + b.type + "}", S(a))
                }
            }
        }
    }
    R.prototype.k = function() {
        var a = this;
        c.ctrk && (r(document, "mouseup", Ma(this)), r(window, "beforeunload",
        function() {
            W(a)
        }), setInterval(function() {
            W(a)
        },
        6E5))
    };
    function Ma(a) {
        return function(b) {
            var d, e;
            ea ? (e = Math.max(document.documentElement.scrollTop, document.body.scrollTop), d = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), d = b.clientX + d, e = b.clientY + e) : (d = b.pageX, e = b.pageY);
            var f = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
            switch (c.align) {
            case 1:
                d -= f / 2;
                break;
            case 2:
                d -= f
            }
            d = "{x:" + d + ",y:" + e + ",";
            b = b.target || b.srcElement;
            if ("a" != b.tagName.toLowerCase()) a: {
                for (e = "A"; (b = b.parentNode) && 1 == b.nodeType;) if (b.tagName == e) break a;
                b = n
            }
            b = d = b ? d + ("t:a,u:" + encodeURIComponent(b.href) + "}") : d + "t:b}";
            "" != b && (d = (L + "//hm.baidu.com/hm.gif?" + za(a).replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + b + "]"))).length, 1024 < d + 10 || (1024 < d + encodeURIComponent(a.b.join(",") + (a.b.length ? ",": "")).length + 10 && W(a), a.b.push(b), (10 <= a.b.length || /t:a/.test(b)) && W(a)))
        }
    }
    function W(a) {
        0 != a.b.length && (a.a.et = 2, a.a.ep = "[" + a.b.join(",") + "]", S(a), a.b = [])
    }
    R.prototype.m = function() {
        var a = this;
        c.rec && ca(function() {
            if (c.rp && c.rs && (!(2 == c.rs || 4 == c.rs) || document.getElementById("hm_t_" + c.rp))) {
                var b = document.createElement("script");
                b.charset = "utf-8";
                b.src = "http://crs.baidu.com/t.js?" + ["siteId=" + c.id, "planId=" + c.rp, "from=" + a.c, "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" + Math.round(2147483647 * Math.random())].join("&");
                var d = document.getElementsByTagName("script")[0];
                d.parentNode.appendChild(b, d)
            }
        })
    };
    R.prototype.n = function() {
        if (c.trust && c.vcard) {
            var a = document.createElement("script");
            a.charset = "utf-8";
            a.src = "http://trust.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + this.c, "rnd=" + Math.round(2147483647 * Math.random())].join("&");
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.appendChild(a, b)
        }
    };
    function Ba() {
        this.f = this.o = (new Date).getTime();
        this.j = 0;
        "object" == typeof document.onfocusin ? (r(document, "focusin", Y(this)), r(document, "focusout", Y(this))) : (r(window, "focus", Y(this)), r(window, "blur", Y(this)))
    }
    function Y(a) {
        return function(b) {
            if (! (b.target && b.target != window)) {
                if ("blur" == b.type || "focusout" == b.type) a.j += (new Date).getTime() - a.f;
                a.f = (new Date).getTime()
            }
        }
    }
    new R;
    
})();