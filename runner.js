var h;
h || (h = typeof Module !== 'undefined' ? Module : {});
h.Jl || (h.Jl = 0);
h.Jl++;
(function(a) {
    function b(n, p, q, t) {
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node)
            require("fs").readFile(n, function(r, x) {
                r ? t(r) : q(x.buffer)
            });
        else {
            var v = new XMLHttpRequest;
            v.open("GET", n, !0);
            v.responseType = "arraybuffer";
            v.onprogress = function(r) {
                var x = p;
                r.total && (x = r.total);
                if (r.loaded) {
                    v.mi ? h.Rk[n].loaded = r.loaded : (v.mi = !0,
                    h.Rk || (h.Rk = {}),
                    h.Rk[n] = {
                        loaded: r.loaded,
                        total: x
                    });
                    var z = x = r = 0, J;
                    for (J in h.Rk) {
                        var Q = h.Rk[J];
                        r += Q.total;
                        x += Q.loaded;
                        z++
                    }
                    r = Math.ceil(r * h.Jl / z);
                    h.setStatus && h.setStatus("Downloading data... (" + x + "/" + r + ")")
                } else
                    !h.Rk && h.setStatus && h.setStatus("Downloading data...")
            }
            ;
            v.onerror = function() {
                throw Error("NetworkError for: " + n);
            }
            ;
            v.onload = function() {
                if (200 == v.status || 304 == v.status || 206 == v.status || 0 == v.status && v.response)
                    q(v.response);
                else
                    throw Error(v.statusText + " : " + v.responseURL);
            }
            ;
            v.send(null)
        }
    }
    function c(n) {
        console.error("package error:", n)
    }
    function d() {
        function n(v, r, x) {
            this.start = v;
            this.end = r;
            this.audio = x
        }
        function p(v) {
            if (!v)
                throw "Loading data file failed." + Error().stack;
            if (!(v instanceof ArrayBuffer))
                throw "bad input to processPackageData" + Error().stack;
            v = new Uint8Array(v);
            n.prototype.gk = v;
            v = a.files;
            for (var r = 0; r < v.length; ++r)
                n.prototype.mi[v[r].filename].onload();
            h.removeRunDependency("datafile_runner.data")
        }
        h.FS_createPath("/", "assets", !0, !0);
        n.prototype = {
            mi: {},
            open: function(v, r) {
                this.name = r;
                this.mi[r] = this;
                h.addRunDependency("fp " + this.name)
            },
            send: function() {},
            onload: function() {
                this.Zj(this.gk.subarray(this.start, this.end))
            },
            Zj: function(v) {
                h.FS_createDataFile(this.name, null, v, !0, !0, !0);
                h.removeRunDependency("fp " + this.name);
                this.mi[this.name] = null
            }
        };
        for (var q = a.files, t = 0; t < q.length; ++t)
            (new n(q[t].start,q[t].end,q[t].audio || 0)).open("GET", q[t].filename);
        h.addRunDependency("datafile_runner.data");
        h.Km || (h.Km = {});
        h.Km["runner.data"] = {
            fo: !1
        };
        m ? (p(m),
        m = null) : g = p
    }
    "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    "function" !== typeof h.locateFilePackage || h.locateFile || (h.locateFile = h.locateFilePackage,
    k("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
    var e = h.locateFile ? h.locateFile("runner.data", "") : "runner.data"
      , f = a.remote_package_size
      , g = null
      , m = h.getPreloadedPackage ? h.getPreloadedPackage(e, f) : null;
    m || b(e, f, function(n) {
        g ? (g(n),
        g = null) : m = n
    }, c);
    h.calledRun ? d() : (h.preRun || (h.preRun = []),
    h.preRun.push(d))
}
)({
    "files": [{
        "filename": "/assets/options.ini",
        "start": 0,
        "end": 184,
        "audio": 0
    }, {
        "filename": "/assets/gxc_library_documentation.pdf",
        "start": 184,
        "end": 210593,
        "audio": 0
    }],
    "remote_package_size": 210593,
    "package_uuid": "cdf1141d-d3bd-4d55-85e5-7b405f7df290"
});
this.doGMLCallback = function(a, b) {
    b = JSON.stringify(b);
    var c = aa(b) + 1
      , d = l(c);
    u(b, d, c);
    console.log("AddAsyncMethod=" + g_pAddAsyncMethod + ", methodToCall=" + a + ", stringOnWasmHeap=" + d + ", argsAsJSON=" + b);
    h.dynCall("vii", g_pAddAsyncMethod, [a, d])
}
;
this.triggerAdPrefix = function(a, b, c, d, e) {
    var f = l(80)
      , g = f + 16
      , m = f + 32
      , n = f + 48
      , p = f + 64;
    da(f + 0, a, 16);
    da(g, b, 16);
    da(m, c, 16);
    da(n, d, 16);
    da(p, e, 16);
    return f
}
;
this.triggerAdPostfix = function(a) {
    ea(a)
}
;
var w = null
  , fa = []
  , ha = null
  , ja = null
  , ka = null
  , la = null
  , ma = null;
function na() {
    w && ("visible" === document.visibilityState ? w.resume() : w.suspend())
}
var oa = []
  , pa = !1
  , qa = !1;
this.activate_clipboard = function() {
    pa || !navigator.clipboard || qa || (qa = !0,
    navigator.permissions.query({
        name: "clipboard-read",
        Un: !0
    }).then(function(a) {
        if ("granted" == a.state || "prompt" == a.state) {
            pa = !0;
            qa = !1;
            for (a = 0; a < oa.length; ++a)
                navigator.clipboard.writeText(oa[a]);
            oa = [];
            navigator.clipboard.readText().then(b => {
                "" != b && oa.push(b)
            }
            ).catch( () => {}
            )
        }
    }))
}
;
this.clipboard_has_text = function() {
    if (!pa)
        return activate_clipboard(),
        !1;
    navigator.clipboard.readText().then(a => {
        "" != a && oa.push(a)
    }
    ).catch( () => {}
    );
    return 0 < oa.length
}
;
this.clipboard_get_text = function() {
    var a = "";
    pa ? 0 < oa.length && (a = oa.pop()) : activate_clipboard();
    return a
}
;
this.clipboard_set_text = function(a) {
    pa ? navigator.clipboard && navigator.clipboard.writeText(a) : (activate_clipboard(),
    oa.push(a))
}
;
var ra = {}
  , sa = {}
  , ta = "";
this.__gx_cache_file = function(a) {
    if (window.oprt && window.oprt.gameFiles) {
        var b = new Request(window.origin + "/" + a.name);
        let c = a.name + ":" + a.md5;
        return window.oprt.gameFiles.fetchAndCache(c, ta, b).then( () => {
            sa[a.name] = {
                name: a.name,
                md5: a.md5,
                fileId: c,
                version: ta
            }
        }
        )
    }
    return Promise.resolve()
}
;
this.__gx_check_cache = function(a) {
    var b = void 0 != sa[a];
    b || void 0 == ra[a] || this.__gx_cache_file(ra[a]);
    return b
}
;
this.__gx_prepare_cache = function(a) {
    ta = a;
    return new Promise(function(b, c) {
        if (window.oprt && window.oprt.gameFiles) {
            let e = manifestFiles().split(";");
            var d = manifestFilesMD5();
            window.oprt.gameFiles.keys().then(f => {
                console.log("current cache entries are " + JSON.stringify(f));
                var g = {};
                let m = [];
                for (var n = 0; n < f.length; ++n) {
                    var p = f[n]
                      , q = p.fileId
                      , t = ""
                      , v = q.indexOf(":");
                    0 <= v && (t = q.substring(v + 1),
                    q = q.substring(0, v));
                    v = e.indexOf(q);
                    console.log("considering file " + q + " for deleting, indexOf is " + v + " cached MD5 is " + t + " manifest md5 is " + (0 > v ? " not present" : d[v]));
                    0 > v || d[v] != t ? m.push(window.oprt.gameFiles.delete(p.fileId, p.version)) : g[q] = {
                        name: q,
                        md5: t,
                        fileId: p.fileId,
                        version: p.version
                    }
                }
                console.log("current cache files are " + JSON.stringify(g));
                sa = g;
                f = {};
                for (n = 0; n < e.length; ++n)
                    f[e[n]] = {
                        name: e[n],
                        md5: d[n]
                    };
                ra = f;
                void 0 == sa["game.unx"] ? (console.log("caching game.unx"),
                this.__gx_cache_file(ra["game.unx"]).then( () => {
                    b({
                        cachedFiles: sa,
                        allFiles: e
                    })
                }
                )) : b({
                    cachedFiles: sa,
                    allFiles: e
                })
            }
            ).catch(f => {
                c(Error("error trying to enumerate cache keys - " + JSON.stringify(f)))
            }
            )
        } else
            c(Error("unable to cache, API not found"))
    }
    )
}
;
this.__gx_async_wget2 = function(a, b, c, d, e, f, g) {
    if (window.oprt && window.oprt.gameFiles) {
        let m = sa[a];
        b = window.oprt.gameFiles.match(m.fileId, m.version);
        b.catch(n => {
            console.log("__gx_async_wget2 : catch : " + JSON.stringify(n));
            n = "Error while loading from cache " + a;
            var p = aa(n) + 1
              , q = ua(p);
            u(n, q, p);
            h.dynCall("viii", g, [4294967295, d, 404, q])
        }
        );
        b.then(n => {
            console.log("__gx_async_wget2 : then : " + JSON.stringify(n));
            return n.arrayBuffer()
        }
        ).then(n => {
            console.log("load " + a + " loaded " + n.byteLength + " bytes");
            n = new Uint8Array(n);
            console.log("expected md5 = " + m.md5);
            var p = l(n.length);
            y.set(n, p);
            console.log("calling the onload function");
            f && h.dynCall("viiii", f, [4294967295, d, p, n.length]);
            e && e(p);
            console.log("finished calling the onload function")
        }
        )
    }
}
;
GXMFS = {
    Tk: {},
    ak: function(a) {
        return B.ak.apply(null, arguments)
    },
    cm: (a, b, c) => {
        GXMFS.Kl(a, (d, e) => {
            if (d)
                return c(d);
            GXMFS.Ll(a, (f, g) => {
                if (f)
                    return c(f);
                GXMFS.Ul(b ? g : e, b ? e : g, c)
            }
            )
        }
        )
    }
    ,
    oo: () => {
        GXMFS.Tk = {}
    }
    ,
    kn: (a, b) => {
        var c = GXMFS.Tk[a];
        c || (c = window.oprt.gameStorage.open(a),
        GXMFS.Tk[a] = c);
        return b(null, c)
    }
    ,
    Kl: (a, b) => {
        function c(m) {
            return "." !== m && ".." !== m
        }
        function d(m) {
            return n => va(m + "/" + n)
        }
        var e = {};
        for (a = wa(a.Fk).filter(c).map(d(a.Fk)); a.length; ) {
            var f = a.pop();
            try {
                var g = xa(f)
            } catch (m) {
                return b(m)
            }
            C(g.mode) && a.push.apply(a, wa(f).filter(c).map(d(f)));
            e[f] = {
                timestamp: g.mtime
            }
        }
        return b(null, {
            type: "local",
            entries: e
        })
    }
    ,
    Ll: (a, b) => {
        GXMFS.kn(a.Fk, (c, d) => {
            if (c)
                return b(c);
            d.list().then(e => {
                b(null, {
                    type: "remote",
                    storage: d,
                    entries: e
                })
            }
            ).catch(b)
        }
        )
    }
    ,
    Pl: (a, b) => {
        try {
            var c = D(a).node;
            var d = xa(a)
        } catch (e) {
            return b(e)
        }
        return C(d.mode) ? b(null, {
            timestamp: d.mtime,
            mode: d.mode
        }) : ya(d.mode) ? (c.Uj = B.um(c),
        b(null, {
            timestamp: d.mtime,
            mode: d.mode,
            contents: c.Uj
        })) : b(Error("node type not supported"))
    }
    ,
    am: (a, b, c) => {
        try {
            if (C(b.mode))
                za(a, b.mode);
            else if (ya(b.mode))
                Aa(a, b.contents);
            else
                return c(Error("node type not supported"));
            Ba(a, b.mode);
            Ca(a, b.timestamp, b.timestamp)
        } catch (d) {
            return c(d)
        }
        c(null)
    }
    ,
    Wl: (a, b) => {
        try {
            var c = xa(a);
            C(c.mode) ? Da(a) : ya(c.mode) && Ea(a)
        } catch (d) {
            return b(d)
        }
        b(null)
    }
    ,
    Ql: (a, b, c) => {
        a.get(b).then(d => {
            c(null, d)
        }
        ).catch(c)
    }
    ,
    bm: (a, b, c, d) => {
        a.put(c, b).then( () => {
            d(null)
        }
        ).catch(d)
    }
    ,
    Xl: (a, b, c) => {
        a.delete(b).then( () => {
            c(null)
        }
        ).catch(c)
    }
    ,
    Ul: (a, b, c) => {
        function d(p) {
            e--;
            if (p && !m)
                return m = !0,
                console.error("Reconcile failed"),
                c(p);
            if (0 === e && !m)
                return console.info("Reconcile finished successfully"),
                c(null)
        }
        console.info("Starting reconcile");
        var e = 0
          , f = [];
        Object.keys(a.entries).forEach(function(p) {
            var q = a.entries[p]
              , t = b.entries[p];
            t && q.timestamp.getTime() == t.timestamp.getTime() || (f.push(p),
            e++)
        });
        console.debug(`${f.length} entries to create/update on the ${"local" === b.type ? "local filesystem" : "remote filesystem"}`);
        var g = [];
        Object.keys(b.entries).forEach(function(p) {
            a.entries[p] || (g.push(p),
            e++)
        });
        console.debug(`${g.length} entries to remove from the ${"local" === b.type ? "local filesystem" : "remote filesystem"}`);
        if (0 == e)
            return c(null);
        var m = !1
          , n = "remote" === a.type ? a.storage : b.storage;
        f.sort().forEach(p => {
            "local" === b.type ? GXMFS.Ql(n, p, (q, t) => {
                if (q)
                    return d(q);
                GXMFS.am(p, t, d)
            }
            ) : GXMFS.Pl(p, (q, t) => {
                if (q)
                    return d(q);
                GXMFS.bm(n, p, t, d)
            }
            )
        }
        );
        g.sort().reverse().forEach(p => {
            "local" === b.type ? GXMFS.Wl(p, d) : GXMFS.Xl(n, p, d)
        }
        )
    }
};
var Fa = {}, Ga;
for (Ga in h)
    h.hasOwnProperty(Ga) && (Fa[Ga] = h[Ga]);
var Ha = []
  , Ia = "./this.program";
function Ja(a, b) {
    throw b;
}
var Ka = "object" === typeof window, La = "function" === typeof importScripts, Ma = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node, Na = "", Oa, Pa, Qa, Ra, Sa, Ta;
if (Ma)
    Na = La ? require("path").dirname(Na) + "/" : __dirname + "/",
    Oa = function(a, b) {
        Sa || (Sa = require("fs"));
        Ta || (Ta = require("path"));
        a = Ta.normalize(a);
        return Sa.readFileSync(a, b ? null : "utf8")
    }
    ,
    Qa = function(a) {
        a = Oa(a, !0);
        a.buffer || (a = new Uint8Array(a));
        assert(a.buffer);
        return a
    }
    ,
    Pa = function(a, b, c) {
        Sa || (Sa = require("fs"));
        Ta || (Ta = require("path"));
        a = Ta.normalize(a);
        Sa.readFile(a, function(d, e) {
            d ? c(d) : b(e.buffer)
        })
    }
    ,
    1 < process.argv.length && (Ia = process.argv[1].replace(/\\/g, "/")),
    Ha = process.argv.slice(2),
    "undefined" !== typeof module && (module.exports = h),
    process.on("uncaughtException", function(a) {
        if (!(a instanceof Ua))
            throw a;
    }),
    process.on("unhandledRejection", function(a) {
        throw a;
    }),
    Ja = function(a, b) {
        if (noExitRuntime || 0 < Va)
            throw process.exitCode = a,
            b;
        b instanceof Ua || k("exiting due to exception: " + b);
        process.exit(a)
    }
    ,
    h.inspect = function() {
        return "[Emscripten Module object]"
    }
    ;
else if (Ka || La)
    La ? Na = self.location.href : "undefined" !== typeof document && document.currentScript && (Na = document.currentScript.src),
    Na = 0 !== Na.indexOf("blob:") ? Na.substr(0, Na.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
    Oa = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    }
    ,
    La && (Qa = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response)
    }
    ),
    Pa = function(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        }
        ;
        d.onerror = c;
        d.send(null)
    }
    ,
    Ra = function(a) {
        document.title = a
    }
    ;
var Wa = h.print || console.log.bind(console)
  , k = h.printErr || console.warn.bind(console);
for (Ga in Fa)
    Fa.hasOwnProperty(Ga) && (h[Ga] = Fa[Ga]);
Fa = null;
h.arguments && (Ha = h.arguments);
h.thisProgram && (Ia = h.thisProgram);
h.quit && (Ja = h.quit);
function Xa(a) {
    Ya || (Ya = {});
    Ya[a] || (Ya[a] = 1,
    k(a))
}
var Ya, Za = 0, ab;
h.wasmBinary && (ab = h.wasmBinary);
var noExitRuntime = h.noExitRuntime || !0;
"object" !== typeof WebAssembly && E("no native wasm support detected");
function bb(a, b, c) {
    c = c || "i8";
    "*" === c.charAt(c.length - 1) && (c = "i32");
    switch (c) {
    case "i1":
        F[a >> 0] = b;
        break;
    case "i8":
        F[a >> 0] = b;
        break;
    case "i16":
        cb[a >> 1] = b;
        break;
    case "i32":
        G[a >> 2] = b;
        break;
    case "i64":
        db = [b >>> 0, (H = b,
        1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
        G[a >> 2] = db[0];
        G[a + 4 >> 2] = db[1];
        break;
    case "float":
        I[a >> 2] = b;
        break;
    case "double":
        eb[a >> 3] = b;
        break;
    default:
        E("invalid type for setValue: " + c)
    }
}
function fb(a) {
    var b = "float";
    "*" === b.charAt(b.length - 1) && (b = "i32");
    switch (b) {
    case "i1":
        return F[a >> 0];
    case "i8":
        return F[a >> 0];
    case "i16":
        return cb[a >> 1];
    case "i32":
        return G[a >> 2];
    case "i64":
        return G[a >> 2];
    case "float":
        return I[a >> 2];
    case "double":
        return Number(eb[a >> 3]);
    default:
        E("invalid type for getValue: " + b)
    }
    return null
}
var gb, hb = !1, ib;
function assert(a, b) {
    a || E("Assertion failed: " + b)
}
function jb(a) {
    var b = h["_" + a];
    assert(b, "Cannot call unknown function " + a + ", make sure it is exported");
    return b
}
function kb(a, b, c, d, e) {
    function f(t) {
        --Va;
        0 !== n && lb(n);
        return "string" === b ? K(t) : "boolean" === b ? !!t : t
    }
    var g = {
        string: function(t) {
            var v = 0;
            if (null !== t && void 0 !== t && 0 !== t) {
                var r = (t.length << 2) + 1;
                v = ua(r);
                u(t, v, r)
            }
            return v
        },
        array: function(t) {
            var v = ua(t.length);
            F.set(t, v);
            return v
        }
    };
    a = jb(a);
    var m = []
      , n = 0;
    if (d)
        for (var p = 0; p < d.length; p++) {
            var q = g[c[p]];
            q ? (0 === n && (n = mb()),
            m[p] = q(d[p])) : m[p] = d[p]
        }
    c = a.apply(null, m);
    Va += 1;
    e = e && e.async;
    if (nb)
        return ob().then(f);
    c = f(c);
    return e ? Promise.resolve(c) : c
}
var pb = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function qb(a, b, c) {
    var d = b + c;
    for (c = b; a[c] && !(c >= d); )
        ++c;
    if (16 < c - b && a.subarray && pb)
        return pb.decode(a.subarray(b, c));
    for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224))
                d += String.fromCharCode((e & 31) << 6 | f);
            else {
                var g = a[b++] & 63;
                e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                65536 > e ? d += String.fromCharCode(e) : (e -= 65536,
                d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
            }
        } else
            d += String.fromCharCode(e)
    }
    return d
}
function K(a, b) {
    return a ? qb(y, a, b) : ""
}
function rb(a, b, c, d) {
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var m = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | m & 1023
        }
        if (127 >= g) {
            if (c >= d)
                break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d)
                    break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d)
                        break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d)
                        break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}
function u(a, b, c) {
    return rb(a, y, b, c)
}
function aa(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
    }
    return b
}
function sb(a) {
    var b = aa(a) + 1
      , c = l(b);
    c && rb(a, F, c, b);
    return c
}
function tb(a) {
    var b = aa(a) + 1
      , c = ua(b);
    rb(a, F, c, b);
    return c
}
var ub, F, y, cb, L, G, M, I, eb;
function vb() {
    var a = gb.buffer;
    ub = a;
    h.HEAP8 = F = new Int8Array(a);
    h.HEAP16 = cb = new Int16Array(a);
    h.HEAP32 = G = new Int32Array(a);
    h.HEAPU8 = y = new Uint8Array(a);
    h.HEAPU16 = L = new Uint16Array(a);
    h.HEAPU32 = M = new Uint32Array(a);
    h.HEAPF32 = I = new Float32Array(a);
    h.HEAPF64 = eb = new Float64Array(a)
}
var wb = []
  , xb = []
  , yb = []
  , zb = []
  , Ab = []
  , Bb = !1
  , Va = 0;
function Cb() {
    var a = h.preRun.shift();
    wb.unshift(a)
}
var Db = 0
  , Eb = null
  , Fb = null;
function Gb() {
    Db++;
    h.monitorRunDependencies && h.monitorRunDependencies(Db)
}
function Hb() {
    Db--;
    h.monitorRunDependencies && h.monitorRunDependencies(Db);
    if (0 == Db && (null !== Eb && (clearInterval(Eb),
    Eb = null),
    Fb)) {
        var a = Fb;
        Fb = null;
        a()
    }
}
h.preloadedImages = {};
h.preloadedAudios = {};
function E(a) {
    if (h.onAbort)
        h.onAbort(a);
    a = "Aborted(" + a + ")";
    k(a);
    hb = !0;
    ib = 1;
    throw new WebAssembly.RuntimeError(a + ". Build with -s ASSERTIONS=1 for more info.");
}
function Ib() {
    return Jb.startsWith("data:application/octet-stream;base64,")
}
var Jb;
Jb = "runner.wasm";
if (!Ib()) {
    var Kb = Jb;
    Jb = h.locateFile ? h.locateFile(Kb, Na) : Na + Kb
}
function Lb() {
    var a = Jb;
    try {
        if (a == Jb && ab)
            return new Uint8Array(ab);
        if (Qa)
            return Qa(a);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        E(b)
    }
}
function Mb() {
    if (!ab && (Ka || La)) {
        if ("function" === typeof fetch && !Jb.startsWith("file://"))
            return fetch(Jb, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok)
                    throw "failed to load wasm binary file at '" + Jb + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return Lb()
            });
        if (Pa)
            return new Promise(function(a, b) {
                Pa(Jb, function(c) {
                    a(new Uint8Array(c))
                }, b)
            }
            )
    }
    return Promise.resolve().then(function() {
        return Lb()
    })
}
var H, db, Sb = {
    1496608: function() {
        return hasJSExceptionHandler()
    },
    1496673: function(a) {
        doJSExceptionHandler(K(a))
    },
    1496717: function(a, b, c, d, e) {
        gxc_request_room(K(a), K(b), c, K(d), K(e))
    },
    1496815: function(a, b, c, d) {
        gxc_join_room(K(a), K(b), K(c), K(d))
    },
    1496906: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "visible"
    },
    1497155: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "visible"
    },
    1497404: function(a) {
        var b = document.getElementById("multiplayer-stats");
        b && "visible" == b.style.visibility && (b.innerHTML = K(a))
    },
    1497572: function(a) {
        "function" == typeof showRollbackMessage && showRollbackMessage(K(a))
    },
    1497665: function() {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "hidden");
        if (a = document.getElementById("share-button"))
            a.style.visibility = "hidden";
        if (a = document.getElementById("log-state-button"))
            a.style.visibility = "hidden"
    },
    1498027: function(a, b) {
        gxc_set_player_status(a, K(b))
    },
    1498078: function(a, b, c) {
        gxc_get_player_info(K(a), K(b), K(c))
    },
    1498157: function(a, b) {
        gxc_set_room_info(a, b)
    },
    1498188: function(a, b, c) {
        gxc_get_player_info(K(a), K(b), K(c))
    },
    1498267: function(a, b) {
        return webtransport_set_relay(K(a), b)
    },
    1498324: function(a) {
        webtransport_destroy(a)
    },
    1498354: function(a, b, c) {
        webtransport_send(a, b, c)
    },
    1498389: function(a, b, c) {
        return webtransport_receive(a, b, c)
    },
    1498434: function(a) {
        alert(K(a))
    },
    1498464: function(a) {
        alert(K(a))
    },
    1498493: function() {
        return clipboard_has_text()
    },
    1498541: function() {
        var a = clipboard_get_text()
          , b = aa(a) + 1
          , c = l(b);
        u(a, c, b + 1);
        return c
    },
    1498717: function(a) {
        clipboard_set_text(K(a))
    },
    1498760: function() {
        var a = -1;
        window.matchMedia("(orientation:portrait)").matches ? a = 1 : window.matchMedia("(orientation:landscape)").matches && (a = 0);
        return a
    },
    1498938: function(a) {
        window.open(K(a), "_blank").focus()
    },
    1498993: function() {
        var a = document.querySelector("canvas");
        null != a.mi && (a.mi.pause(),
        console.log("Pausing video player"),
        a.mi.removeAttribute("src"),
        a.mi.load())
    },
    1499243: function(a, b, c) {
        var d = document.querySelector("canvas");
        if (null != d.il)
            return b = d.il.getImageData(0, 0, b, c),
            b = new Uint8Array(b.data.buffer),
            F.set(b, a),
            1;
        console.log("Not rendering video as context is null");
        return 0
    },
    1499580: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.videoWidth : 0
    },
    1499727: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.videoHeight : 0
    },
    1499875: function() {
        var a = document.querySelector("canvas");
        if (null != a.mi) {
            if (a.mi.paused)
                return -1;
            if (!a.mi.ended)
                return 0
        }
        return -1
    },
    1500078: function(a) {
        var b = document.querySelector("canvas");
        null != b.mi && (b.mi.volume = a)
    },
    1500211: function(a) {
        function b() {
            function m() {
                const q = document.querySelector("canvas").mi;
                null != q && (q.muted = !1)
            }
            var n = "mousedown"
              , p = "mouseup";
            "ontouchstart"in window && (n = "touchstart",
            p = "touchend");
            if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled)
                n = "pointerdown",
                p = "pointerup";
            document.body.addEventListener(n, m, {
                once: !0
            });
            document.body.addEventListener(p, m, {
                once: !0
            })
        }
        var c = document.querySelector("canvas");
        null == c.mi ? c.mi = document.createElement("video") : c.mi.pause();
        const d = c.mi;
        a = K(a);
        d.muted = !1;
        d.src = a;
        const e = {
            Qn: h.cwrap("video_playback_ended", "", "")
        }
          , f = {
            Rn: h.cwrap("video_playback_started", "", "")
        };
        d.addEventListener("ended", function() {
            e.Qn()
        });
        d.addEventListener("playing", function() {
            console.log("Video playing event called");
            f.Rn()
        }, !0);
        const g = () => {
            var m = document.querySelector("canvas");
            null == m.gk ? (m.gk = document.createElement("canvas"),
            m.gk.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px",
            m.gk.width = d.videoWidth,
            m.gk.height = d.videoHeight,
            document.body.appendChild(m.gk),
            m.il = m.gk.getContext("2d", {
                alpha: !1,
                Vn: !1,
                powerPreference: "low-power",
                desynchronized: !0,
                preserveDrawingBuffer: !0
            })) : (d.videoWidth != m.gk.width && (m.gk.width = d.videoWidth),
            m.gk.height != d.videoHeight && (m.gk.height = d.videoHeight));
            null != m.mi && null != m.il && m.il.drawImage(m.mi, 0, 0);
            null != m.mi && (null != m.mi.src ? m.mi.requestVideoFrameCallback(g) : console.log("stopping video player callback check"))
        }
        ;
        d.requestVideoFrameCallback(g);
        d.load();
        a = d.play();
        void 0 !== a && a.then( () => {}
        ).catch( () => {
            console.log("video_open failed. User must interact with the page before video with audio can be played. Attempting to play the video muted");
            d.muted = !0;
            d.play();
            b()
        }
        )
    },
    1503281: function() {
        var a = document.querySelector("canvas");
        null != a.mi && a.mi.pause()
    },
    1503412: function() {
        var a = document.querySelector("canvas");
        null != a.mi && a.mi.play()
    },
    1503542: function(a) {
        var b = document.querySelector("canvas");
        null != b.mi && (b.mi.loop = .5 < a ? !0 : !1)
    },
    1503735: function(a) {
        var b = document.querySelector("canvas");
        null != b.mi && (b.mi.currentTime = a)
    },
    1503875: function() {
        var a = document.querySelector("canvas");
        return null == a.mi || isNaN(a.mi.duration) ? 0 : a.mi.duration
    },
    1504070: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.currentTime : 0
    },
    1504222: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.ended ? 0 : a.mi.paused ? 3 : a.mi.readyState < a.mi.HAVE_CURRENT_DATA ? 1 : 2 : 0
    },
    1504742: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.loop : 0
    },
    1504887: function() {
        var a = document.querySelector("canvas");
        return null != a.mi ? a.mi.volume : 0
    },
    1505034: function(a, b, c, d) {
        var e = document.querySelector("canvas");
        if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
            console.log("CheckMediaRecorder::vp9 supported");
            var f = {
                mimeType: "video/webm; codecs=vp9"
            }
        } else
            MediaRecorder.isTypeSupported("video/webm;codecs=vp8") ? (f = {
                mimeType: "video/webm; codecs=vp8"
            },
            console.log("CheckMediaRecorder::vp8 supported")) : console.log("CheckMediaRecorder::No vp8 or vp9 support");
        e.em = e.captureStream(c);
        e.em.getVideoTracks().find(g => g.enabled);
        null == e.sk && (e.sk = document.createElement("canvas"),
        e.sk.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px",
        e.sk.width = a,
        e.sk.height = b,
        document.body.appendChild(e.sk),
        console.log("Game Canvas width:" + e.width + " height:" + e.height),
        e.Xm = e.sk.getContext("2d", {
            alpha: !1,
            desynchronized: !0,
            antialias: !0,
            powerPreference: "low-power",
            preserveDrawingBuffer: !0
        }),
        e.Jk = document.createElement("video"),
        e.Jk.autoplay = !0,
        e.Jk.Yn = !0,
        e.Jk.muted = !0,
        e.Jk.style.cssText = "position:fixed;top:1px;left:1px;width:1px;height:1px",
        document.body.appendChild(e.Jk),
        e.Jk.srcObject = e.em,
        a = e.sk.captureStream(c),
        0 < d && (d = w.createMediaStreamDestination().stream.getAudioTracks().find(g => g.enabled),
        a.addTrack(d)),
        f = new MediaRecorder(a,f),
        e.Dk = [],
        f.ondataavailable = function(g) {
            e.Dk.push(g.data)
        }
        ,
        e.Zj = f);
        null == e.El && (e.El = setInterval( () => e.Xm.drawImage(e.Jk, 0, 0, e.width, e.height, 0, 0, e.sk.width, e.sk.height), 1E3 / c));
        e.Zj && "recording" != e.Zj.state && e.Zj.start()
    },
    1507530: function(a) {
        var b = document.querySelector("canvas");
        if (b.Zj && ("recording" == b.Zj.state || "paused" == b.Zj.state)) {
            var c = K(a);
            b.Zj.onstop = function() {
                var d = new Blob(b.Dk,{
                    type: "video/webm"
                });
                b.Dk = [];
                clearInterval(b.El);
                b.El = null;
                const e = {
                    Sl: h.cwrap("post_video_upload_callback", "", ["string"])
                };
                if (c.startsWith("http"))
                    fetch(c, {
                        method: "PUT",
                        body: d
                    }).then( () => {
                        e.Sl("upload completed")
                    }
                    ).catch(g => {
                        e.Sl("Error uploading: " + g)
                    }
                    );
                else if ("" != c) {
                    d = URL.createObjectURL(d);
                    var f = document.createElement("a");
                    document.body.appendChild(f);
                    f.style = "display: none";
                    f.href = d;
                    f.download = c;
                    f.click();
                    window.URL.revokeObjectURL(d);
                    e.Sl("filesaved")
                }
            }
            ;
            b.Zj.stop();
            console.log("saving chunks to movie")
        }
    },
    1508674: function() {
        var a = document.querySelector("canvas");
        a.Zj && "recording" == a.Zj.state && a.Zj.pause()
    },
    1508844: function() {
        var a = document.querySelector("canvas");
        a.Zj && "paused" == a.Zj.state && a.Zj.resume()
    },
    1509012: function(a, b, c, d, e, f) {
        triggerAd(K(a), b, c, d, e, f)
    },
    1509065: function(a, b, c, d) {
        var e = -1;
        if (void 0 != window.oprt) {
            var f = window.oprt.unlockOrientation
              , g = window.oprt.lockPortraitOrientation
              , m = window.oprt.lockLandscapeOrientation;
            a = (a ? 1 : 0) | (b ? 2 : 0) | (c ? 4 : 0);
            a |= d ? 8 : 0;
            15 != (a & 15) && 0 != a || void 0 == f || "function" != typeof f || (f(),
            console.log("unlocking all orientations"));
            0 != (a & 5) && void 0 != m && "function" == typeof m ? (m(),
            console.log("Locking to Landscape"),
            e = 0) : 0 != (a & 10) && void 0 != g && "function" == typeof g && (g(),
            console.log("Locking to Portrait"),
            e = 0)
        }
        return e
    },
    1510053: function(a) {
        a ? void 0 != window.oprt && void 0 != window.oprt.enterFullscreen ? (console.log("enterFullscreen"),
        window.oprt.enterFullscreen()) : (console.log("canvas requesting enterFullscreen"),
        document.querySelector("canvas").requestFullscreen()) : void 0 != window.oprt && void 0 != window.oprt.exitFullscreen ? (console.log("exitFullscreen"),
        window.oprt.exitFullscreen()) : (console.log("exitFullscreen via document"),
        document.exitFullscreen())
    },
    1510581: function() {
        return screen.width
    },
    1510606: function() {
        return screen.height
    },
    1510632: function(a) {
        document.title = K(a)
    },
    1510671: function(a, b) {
        this.onGameSetWindowSize && onGameSetWindowSize(a, b)
    },
    1510740: function(a) {
        document.querySelector("canvas").style.cursor = K(a)
    },
    1510839: function() {
        w = new AudioContext;
        document.addEventListener("visibilitychange", na)
    },
    1510961: function() {
        w.close().then(function() {
            w = null;
            document.removeEventListener("visibilitychange", na)
        })
    },
    1511120: function() {
        function a() {
            w.resume().then(function() {
                document.body.removeEventListener(b, a);
                document.body.removeEventListener(c, a)
            })
        }
        let b = "mousedown"
          , c = "mouseup";
        "ontouchstart"in window && (b = "touchstart",
        c = "touchend");
        if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled)
            b = "pointerdown",
            c = "pointerup";
        document.body.addEventListener(b, a);
        document.body.addEventListener(c, a)
    },
    1511824: function() {
        w.suspend()
    },
    1511857: function() {
        if (null == w)
            return 4;
        switch (w.state) {
        case "suspended":
            return 0;
        case "running":
            return 1;
        case "closed":
            return 2;
        case "interrupted":
            return 3
        }
    },
    1512051: function() {
        return null == w ? 0 : w.currentTime
    },
    1512129: function() {
        return null == w ? 0 : w.sampleRate
    },
    1512206: function() {
        return null == w ? 0 : w.destination.channelCount
    },
    1512295: function(a, b, c, d, e, f) {
        e = w.createBuffer(b, d, e);
        for (let g = 0; g < b; ++g) {
            const m = e.getChannelData(g);
            for (let n = 0; n < d; ++n)
                m[n] = fb(a + c * (g + n * b))
        }
        a = w.createBufferSource();
        a.buffer = e;
        a.connect(w.destination);
        0 == f && (f = w.currentTime);
        a.start(f);
        return f + e.duration
    },
    1513020: function(a) {
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia({
            audio: !0
        }).then(b => {
            const c = d => {
                d = d.getAudioTracks();
                if (0 < d.length)
                    return d[0].getSettings().channelCount
            }
            ;
            ja = b;
            ka = new AudioContext({
                sampleRate: a
            });
            ka.audioWorklet.addModule("audio-worklet.js").then( () => {
                la = new AudioWorkletNode(ka,"audio-worklet");
                la.port.onmessage = e => {
                    fa.push(e.data)
                }
                ;
                ha = new MediaStreamAudioSourceNode(ka,{
                    mediaStream: b
                });
                const d = c(b);
                1 < d ? (ma = new ChannelMergerNode(ka,{
                    numberOfInputs: d
                }),
                ha.connect(ma),
                ma.connect(la)) : ha.connect(la);
                ka.resume()
            }
            ).catch(d => {
                console.error(d);
                ja && ja.getTracks().forEach(e => {
                    e.stop()
                }
                );
                ma = ha = la = ja = ka = null
            }
            )
        }
        ).catch(b => {
            console.error(b)
        }
        )
    },
    1514797: function() {
        fa = [];
        ja.getTracks().forEach(a => {
            a.stop()
        }
        );
        la.port.postMessage(!0);
        ha.disconnect();
        ha = null;
        null != ma && (ma.disconnect(),
        ma = null);
        la.disconnect();
        la = null;
        ka.close().then( () => {
            ka = null
        }
        ).catch(a => {
            console.error(a)
        }
        )
    },
    1515389: function(a, b, c) {
        b /= c;
        for (let d = 0; d < b; ++d) {
            const e = fa.shift();
            for (let f = 0; f < c; ++f)
                bb(a + 2 * (d * c + f), e[f], "i16")
        }
    },
    1515733: function(a) {
        return fa.length * a
    },
    1515819: function() {
        return null != ha && null != la ? 1 : 0
    },
    1515932: function() {
        var a = document.getElementById("canvas");
        const b = a.style.visibility;
        a.style.visibility = "hidden";
        a.offsetHeight;
        a.style.visibility = b
    },
    1516170: function(a, b) {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1516230: function() {
        var a = manifestFiles()
          , b = aa(a) + 1
          , c = l(b);
        u(a, c, b);
        return c
    },
    1516386: function(a) {
        return __gx_check_cache(K(a)) ? 1 : 0
    },
    1516443: function(a, b, c, d, e, f, g, m) {
        __gx_async_wget2(K(a), K(b), K(c), d, e, f, g, m)
    },
    1516540: function(a) {
        setAddAsyncMethod(a)
    },
    1516567: function(a, b, c) {
        __gx_prepare_cache(K(c)).then( () => {
            h.dynCall("vi", a, [b])
        }
        ).catch( () => {
            h.dynCall("vi", a, [b])
        }
        )
    },
    1516736: function(a, b) {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1516796: function(a) {
        window.location.replace(K(a))
    },
    1516843: function() {
        this.onFirstFrameRendered && onFirstFrameRendered()
    },
    1516906: function(a, b) {
        chrome.runtime.sendMessage(K(a), {
            command: K(b)
        })
    },
    1516990: function(a, b, c, d, e) {
        function f(m) {
            if (m.hash) {
                var n = 0;
                (new Uint8Array(m.hash)).every(p => {
                    n = n + p & 255;
                    return !0
                }
                );
                g.Tm(n, b)
            }
        }
        const g = {
            Tm: h.cwrap("YYSum", "", ["number", "number"])
        };
        this.chrome && this.chrome.runtime && (e = y.subarray(e, e + 20),
        a = K(a),
        chrome.runtime.sendMessage(K(c), {
            command: K(d),
            randomString: a,
            hash: e
        }, f))
    },
    1517550: function() {
        return window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: hover) and (pointer: coarse)").matches || "undefined" != typeof window.oprt
    },
    1517723: function(a, b) {
        a = prompt(K(a), K(b));
        b = aa(a) + 1;
        var c = l(b);
        u(a, c, b + 1);
        return c
    },
    1517919: function(a) {
        return confirm(K(a)) ? 1 : 0
    },
    1517966: function(a, b) {
        a = prompt(K(a), K(b));
        b = 1;
        a ? b += aa(a) : a = "";
        var c = l(b);
        u(a, c, b + 1);
        return c
    },
    1518197: function(a) {
        return confirm(K(a)) ? 1 : 0
    },
    1518244: function(a) {
        alert(K(a))
    },
    1518274: function() {
        Nb("/_savedata");
        window.oprt && window.oprt.gameStorage ? Ob(GXMFS, "/_savedata") : Ob(N, "/_savedata");
        Pb(!0, function() {
            kb("FSSyncCompleted", "void")
        })
    },
    1518496: function() {
        Pb(!1, function() {})
    },
    1518534: function() {
        Pb(!1, function() {})
    },
    1518571: function() {
        Pb(!1, function() {})
    },
    1518609: function(a, b, c) {
        h.SDL2 || (h.SDL2 = {});
        var d = h.SDL2;
        d.Zm !== h.canvas && (d.tk = h.createContext(h.canvas, !1, !0),
        d.Zm = h.canvas);
        if (d.w !== a || d.rn !== b || d.vn !== d.tk)
            d.image = d.tk.createImageData(a, b),
            d.w = a,
            d.rn = b,
            d.vn = d.tk;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c; ) {
                var f = G[b];
                a[e] = f & 255;
                a[e + 1] = f >> 8 & 255;
                a[e + 2] = f >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            }
        else if (d.ao !== a && (d.$m = new Int32Array(a.buffer),
        d.an = new Uint8Array(a.buffer)),
        a = d.$m,
        c = a.length,
        a.set(G.subarray(b, b + c)),
        a = d.an,
        b = 3,
        e = b + 4 * c,
        0 == c % 8)
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0,
                a[b] = 255,
                b = b + 4 | 0;
        else
            for (; b < e; )
                a[b] = 255,
                b = b + 4 | 0;
        d.tk.putImageData(d.image, 0, 0);
        return 0
    },
    1520064: function(a, b, c, d, e) {
        var f = document.createElement("canvas");
        f.width = a;
        f.height = b;
        var g = f.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var m = 0, n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; m < n; ) {
                var p = G[e];
                b[m] = p & 255;
                b[m + 1] = p >> 8 & 255;
                b[m + 2] = p >> 16 & 255;
                b[m + 3] = p >> 24 & 255;
                e++;
                m += 4
            }
        else
            b = new Int32Array(b.buffer),
            n = b.length,
            b.set(G.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
        d = l(c.length + 1);
        u(c, d, c.length + 1);
        return d
    },
    1521053: function(a) {
        h.canvas && (h.canvas.style.cursor = K(a));
        return 0
    },
    1521146: function() {
        h.canvas && (h.canvas.style.cursor = "none")
    },
    1521215: function() {
        return screen.width
    },
    1521240: function() {
        return screen.height
    },
    1521266: function() {
        return window.innerWidth
    },
    1521296: function() {
        return window.innerHeight
    },
    1521327: function(a) {
        "undefined" !== typeof Ra && Ra(K(a));
        return 0
    },
    1521422: function() {
        return "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? 1 : 0
    },
    1521559: function() {
        return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? 1 : 0
    },
    1521783: function(a) {
        "undefined" === typeof h.SDL2 && (h.SDL2 = {});
        var b = h.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.$j || ("undefined" !== typeof AudioContext ? b.$j = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.$j = new webkitAudioContext),
        b.$j && Qb(b.$j));
        return void 0 === b.$j ? -1 : 0
    },
    1522276: function() {
        return h.SDL2.$j.sampleRate
    },
    1522344: function(a, b, c, d) {
        function e() {}
        function f(m) {
            void 0 !== g.capture.el && (clearTimeout(g.capture.el),
            g.capture.el = void 0);
            g.capture.ql = g.$j.createMediaStreamSource(m);
            g.capture.ik = g.$j.createScriptProcessor(b, a, 1);
            g.capture.ik.onaudioprocess = function(n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                g.capture.Hl = n.inputBuffer,
                Rb("vi", c, [d]))
            }
            ;
            g.capture.ql.connect(g.capture.ik);
            g.capture.ik.connect(g.$j.destination);
            g.capture.stream = m
        }
        var g = h.SDL2;
        g.capture.wl = g.$j.createBuffer(a, b, g.$j.sampleRate);
        g.capture.wl.getChannelData(0).fill(0);
        g.capture.el = setTimeout(function() {
            g.capture.Hl = g.capture.wl;
            Rb("vi", c, [d])
        }, b / g.$j.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(f).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, f, e)
    },
    1523996: function(a, b, c, d) {
        var e = h.SDL2;
        e.audio.ik = e.$j.createScriptProcessor(b, 0, a);
        e.audio.ik.onaudioprocess = function(f) {
            void 0 !== e && void 0 !== e.audio && (e.audio.nm = f.outputBuffer,
            Rb("vi", c, [d]))
        }
        ;
        e.audio.ik.connect(e.$j.destination)
    },
    1524406: function(a, b) {
        for (var c = h.SDL2, d = c.capture.Hl.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.capture.Hl.getChannelData(e);
            if (f.length != b)
                throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g)
                    bb(a + 4 * g, f[g], "float");
            else
                for (g = 0; g < b; ++g)
                    bb(a + 4 * (g * d + e), f[g], "float")
        }
    },
    1525011: function(a, b) {
        for (var c = h.SDL2, d = c.audio.nm.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.audio.nm.getChannelData(e);
            if (f.length != b)
                throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g)
                f[g] = I[a + (g * d + e << 2) >> 2]
        }
    },
    1525491: function(a) {
        var b = h.SDL2;
        if (a) {
            void 0 !== b.capture.el && clearTimeout(b.capture.el);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++)
                    b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.ik && (b.capture.ik.onaudioprocess = function() {}
            ,
            b.capture.ik.disconnect(),
            b.capture.ik = void 0);
            void 0 !== b.capture.ql && (b.capture.ql.disconnect(),
            b.capture.ql = void 0);
            void 0 !== b.capture.wl && (b.capture.wl = void 0);
            b.capture = void 0
        } else
            void 0 != b.audio.ik && (b.audio.ik.disconnect(),
            b.audio.ik = void 0),
            b.audio = void 0;
        void 0 !== b.$j && void 0 === b.audio && void 0 === b.capture && (b.$j.close(),
        b.$j = void 0)
    }
};
function Tb(a, b, c) {
    a.addEventListener(b, c, {
        once: !0
    })
}
function Qb(a) {
    var b;
    b || (b = [document, document.getElementById("canvas")]);
    ["keydown", "mousedown", "touchstart"].forEach(function(c) {
        b.forEach(function(d) {
            d && Tb(d, c, function() {
                "suspended" === a.state && a.resume()
            })
        })
    })
}
function Ub(a) {
    for (; 0 < a.length; ) {
        var b = a.shift();
        if ("function" == typeof b)
            b(h);
        else {
            var c = b.gn;
            "number" === typeof c ? void 0 === b.jl ? dynCall_v.call(null, c) : dynCall_vi.apply(null, [c, b.jl]) : c(void 0 === b.jl ? null : b.jl)
        }
    }
}
function Vb(a) {
    var b = mb();
    a = a();
    lb(b);
    return a
}
function Rb(a, b, c) {
    a = h["dynCall_" + a];
    return c && c.length ? a.apply(null, [b].concat(c)) : a.call(null, b)
}
function Wb(a) {
    a instanceof Ua || "unwind" == a || Ja(1, a)
}
var Xb;
Xb = Ma ? function() {
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
}
: function() {
    return performance.now()
}
;
function Yb(a, b) {
    if (0 === a)
        a = Date.now();
    else if (1 === a || 4 === a)
        a = Xb();
    else
        return G[Zb() >> 2] = 28,
        -1;
    G[b >> 2] = a / 1E3 | 0;
    G[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
    return 0
}
function $b(a) {
    this.pm = a;
    this.Wj = a - 16;
    this.In = function(b) {
        G[this.Wj + 4 >> 2] = b
    }
    ;
    this.Nl = function() {
        return G[this.Wj + 4 >> 2]
    }
    ;
    this.Gn = function(b) {
        G[this.Wj + 8 >> 2] = b
    }
    ;
    this.nn = function() {
        return G[this.Wj + 8 >> 2]
    }
    ;
    this.Hn = function() {
        G[this.Wj >> 2] = 0
    }
    ;
    this.Pm = function(b) {
        F[this.Wj + 12 >> 0] = b ? 1 : 0
    }
    ;
    this.mn = function() {
        return 0 != F[this.Wj + 12 >> 0]
    }
    ;
    this.Qm = function() {
        F[this.Wj + 13 >> 0] = 0
    }
    ;
    this.qn = function() {
        return 0 != F[this.Wj + 13 >> 0]
    }
    ;
    this.wn = function(b, c) {
        this.In(b);
        this.Gn(c);
        this.Hn();
        this.Pm(!1);
        this.Qm()
    }
    ;
    this.Wm = function() {
        G[this.Wj >> 2] = G[this.Wj >> 2] + 1
    }
    ;
    this.Dn = function() {
        var b = G[this.Wj >> 2];
        G[this.Wj >> 2] = b - 1;
        return 1 === b
    }
}
function ac(a) {
    this.sm = function() {
        ea(this.Wj);
        this.Wj = 0
    }
    ;
    this.Om = function(b) {
        G[this.Wj >> 2] = b
    }
    ;
    this.ol = function() {
        return G[this.Wj >> 2]
    }
    ;
    this.$l = function(b) {
        G[this.Wj + 4 >> 2] = b
    }
    ;
    this.wm = function() {
        return this.Wj + 4
    }
    ;
    this.ln = function() {
        return G[this.Wj + 4 >> 2]
    }
    ;
    this.pn = function() {
        if (bc(this.Ml().Nl()))
            return G[this.ol() >> 2];
        var b = this.ln();
        return 0 !== b ? b : this.ol()
    }
    ;
    this.Ml = function() {
        return new $b(this.ol())
    }
    ;
    void 0 === a ? (this.Wj = l(8),
    this.$l(0)) : this.Wj = a
}
var cc = [], dc = 0, ec = 0, fc;
function gc() {
    function a(g) {
        return (g = g.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? g[1] : "GMT"
    }
    var b = (new Date).getFullYear()
      , c = new Date(b,0,1)
      , d = new Date(b,6,1);
    b = c.getTimezoneOffset();
    var e = d.getTimezoneOffset()
      , f = Math.max(b, e);
    G[hc() >> 2] = 60 * f;
    G[ic() >> 2] = Number(b != e);
    c = a(c);
    d = a(d);
    c = sb(c);
    d = sb(d);
    e < b ? (G[jc() >> 2] = c,
    G[jc() + 4 >> 2] = d) : (G[jc() >> 2] = d,
    G[jc() + 4 >> 2] = c)
}
function kc() {
    lc || (lc = !0,
    gc())
}
var lc;
function mc() {
    if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);
        return function() {
            crypto.getRandomValues(a);
            return a[0]
        }
    }
    if (Ma)
        try {
            var b = require("crypto");
            return function() {
                return b.randomBytes(1)[0]
            }
        } catch (c) {}
    return function() {
        E("randomDevice")
    }
}
function nc(a, b) {
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1),
        c++) : c && (a.splice(d, 1),
        c--)
    }
    if (b)
        for (; c; c--)
            a.unshift("..");
    return a
}
function va(a) {
    var b = "/" === a.charAt(0)
      , c = "/" === a.substr(-1);
    (a = nc(a.split("/").filter(function(d) {
        return !!d
    }), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
function oc(a) {
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b && (b = b.substr(0, b.length - 1));
    return a + b
}
function pc(a) {
    if ("/" === a)
        return "/";
    a = va(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
function qc() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : sc;
        if ("string" !== typeof b)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!b)
            return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = nc(a.split("/").filter(function(d) {
        return !!d
    }), !b).join("/");
    return (b ? "/" : "") + a || "."
}
function tc(a, b) {
    function c(g) {
        for (var m = 0; m < g.length && "" === g[m]; m++)
            ;
        for (var n = g.length - 1; 0 <= n && "" === g[n]; n--)
            ;
        return m > n ? [] : g.slice(m, n - m + 1)
    }
    a = qc(a).substr(1);
    b = qc(b).substr(1);
    a = c(a.split("/"));
    b = c(b.split("/"));
    for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
        if (a[f] !== b[f]) {
            e = f;
            break
        }
    d = [];
    for (f = e; f < a.length; f++)
        d.push("..");
    d = d.concat(b.slice(e));
    return d.join("/")
}
var uc = [];
function vc(a, b) {
    uc[a] = {
        input: [],
        output: [],
        Vk: b
    };
    wc(a, xc)
}
var xc = {
    open: function(a) {
        var b = uc[a.node.rdev];
        if (!b)
            throw new O(43);
        a.tty = b;
        a.seekable = !1
    },
    close: function(a) {
        a.tty.Vk.flush(a.tty)
    },
    flush: function(a) {
        a.tty.Vk.flush(a.tty)
    },
    read: function(a, b, c, d) {
        if (!a.tty || !a.tty.Vk.xm)
            throw new O(60);
        for (var e = 0, f = 0; f < d; f++) {
            try {
                var g = a.tty.Vk.xm(a.tty)
            } catch (m) {
                throw new O(29);
            }
            if (void 0 === g && 0 === e)
                throw new O(6);
            if (null === g || void 0 === g)
                break;
            e++;
            b[c + f] = g
        }
        e && (a.node.timestamp = Date.now());
        return e
    },
    write: function(a, b, c, d) {
        if (!a.tty || !a.tty.Vk.Tl)
            throw new O(60);
        try {
            for (var e = 0; e < d; e++)
                a.tty.Vk.Tl(a.tty, b[c + e])
        } catch (f) {
            throw new O(29);
        }
        d && (a.node.timestamp = Date.now());
        return e
    }
}
  , zc = {
    xm: function(a) {
        if (!a.input.length) {
            var b = null;
            if (Ma) {
                var c = Buffer.alloc(256)
                  , d = 0;
                try {
                    d = Sa.readSync(process.stdin.fd, c, 0, 256, null)
                } catch (e) {
                    if (e.toString().includes("EOF"))
                        d = 0;
                    else
                        throw e;
                }
                0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
            } else
                "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(),
                null !== b && (b += "\n"));
            if (!b)
                return null;
            a.input = yc(b, !0)
        }
        return a.input.shift()
    },
    Tl: function(a, b) {
        null === b || 10 === b ? (Wa(qb(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    flush: function(a) {
        a.output && 0 < a.output.length && (Wa(qb(a.output, 0)),
        a.output = [])
    }
}
  , Ac = {
    Tl: function(a, b) {
        null === b || 10 === b ? (k(qb(a.output, 0)),
        a.output = []) : 0 != b && a.output.push(b)
    },
    flush: function(a) {
        a.output && 0 < a.output.length && (k(qb(a.output, 0)),
        a.output = [])
    }
}
  , B = {
    vk: null,
    ak: function() {
        return B.createNode(null, "/", 16895, 0)
    },
    createNode: function(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440))
            throw new O(63);
        B.vk || (B.vk = {
            dir: {
                node: {
                    uk: B.Tj.uk,
                    jk: B.Tj.jk,
                    lookup: B.Tj.lookup,
                    rl: B.Tj.rl,
                    rename: B.Tj.rename,
                    unlink: B.Tj.unlink,
                    rmdir: B.Tj.rmdir,
                    readdir: B.Tj.readdir,
                    symlink: B.Tj.symlink
                },
                stream: {
                    Pk: B.Vj.Pk
                }
            },
            file: {
                node: {
                    uk: B.Tj.uk,
                    jk: B.Tj.jk
                },
                stream: {
                    Pk: B.Vj.Pk,
                    read: B.Vj.read,
                    write: B.Vj.write,
                    hm: B.Vj.hm,
                    Dm: B.Vj.Dm,
                    Fm: B.Vj.Fm
                }
            },
            link: {
                node: {
                    uk: B.Tj.uk,
                    jk: B.Tj.jk,
                    readlink: B.Tj.readlink
                },
                stream: {}
            },
            mm: {
                node: {
                    uk: B.Tj.uk,
                    jk: B.Tj.jk
                },
                stream: Bc
            }
        });
        c = Cc(a, b, c, d);
        C(c.mode) ? (c.Tj = B.vk.dir.node,
        c.Vj = B.vk.dir.stream,
        c.Uj = {}) : ya(c.mode) ? (c.Tj = B.vk.file.node,
        c.Vj = B.vk.file.stream,
        c.Yj = 0,
        c.Uj = null) : 40960 === (c.mode & 61440) ? (c.Tj = B.vk.link.node,
        c.Vj = B.vk.link.stream) : 8192 === (c.mode & 61440) && (c.Tj = B.vk.mm.node,
        c.Vj = B.vk.mm.stream);
        c.timestamp = Date.now();
        a && (a.Uj[b] = c,
        a.timestamp = c.timestamp);
        return c
    },
    um: function(a) {
        return a.Uj ? a.Uj.subarray ? a.Uj.subarray(0, a.Yj) : new Uint8Array(a.Uj) : new Uint8Array(0)
    },
    qm: function(a, b) {
        var c = a.Uj ? a.Uj.length : 0;
        c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0),
        0 != c && (b = Math.max(b, 256)),
        c = a.Uj,
        a.Uj = new Uint8Array(b),
        0 < a.Yj && a.Uj.set(c.subarray(0, a.Yj), 0))
    },
    En: function(a, b) {
        if (a.Yj != b)
            if (0 == b)
                a.Uj = null,
                a.Yj = 0;
            else {
                var c = a.Uj;
                a.Uj = new Uint8Array(b);
                c && a.Uj.set(c.subarray(0, Math.min(b, a.Yj)));
                a.Yj = b
            }
    },
    Tj: {
        uk: function(a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            C(a.mode) ? b.size = 4096 : ya(a.mode) ? b.size = a.Yj : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.Ym = 4096;
            b.blocks = Math.ceil(b.size / b.Ym);
            return b
        },
        jk: function(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            void 0 !== b.size && B.En(a, b.size)
        },
        lookup: function() {
            throw Dc[44];
        },
        rl: function(a, b, c, d) {
            return B.createNode(a, b, c, d)
        },
        rename: function(a, b, c) {
            if (C(a.mode)) {
                try {
                    var d = Ec(b, c)
                } catch (f) {}
                if (d)
                    for (var e in d.Uj)
                        throw new O(55);
            }
            delete a.parent.Uj[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Uj[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b
        },
        unlink: function(a, b) {
            delete a.Uj[b];
            a.timestamp = Date.now()
        },
        rmdir: function(a, b) {
            var c = Ec(a, b), d;
            for (d in c.Uj)
                throw new O(55);
            delete a.Uj[b];
            a.timestamp = Date.now()
        },
        readdir: function(a) {
            var b = [".", ".."], c;
            for (c in a.Uj)
                a.Uj.hasOwnProperty(c) && b.push(c);
            return b
        },
        symlink: function(a, b, c) {
            a = B.createNode(a, b, 41471, 0);
            a.link = c;
            return a
        },
        readlink: function(a) {
            if (40960 !== (a.mode & 61440))
                throw new O(28);
            return a.link
        }
    },
    Vj: {
        read: function(a, b, c, d, e) {
            var f = a.node.Uj;
            if (e >= a.node.Yj)
                return 0;
            a = Math.min(a.node.Yj - e, d);
            if (8 < a && f.subarray)
                b.set(f.subarray(e, e + a), c);
            else
                for (d = 0; d < a; d++)
                    b[c + d] = f[e + d];
            return a
        },
        write: function(a, b, c, d, e, f) {
            b.buffer === F.buffer && (f = !1);
            if (!d)
                return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.Uj || a.Uj.subarray)) {
                if (f)
                    return a.Uj = b.subarray(c, c + d),
                    a.Yj = d;
                if (0 === a.Yj && 0 === e)
                    return a.Uj = b.slice(c, c + d),
                    a.Yj = d;
                if (e + d <= a.Yj)
                    return a.Uj.set(b.subarray(c, c + d), e),
                    d
            }
            B.qm(a, e + d);
            if (a.Uj.subarray && b.subarray)
                a.Uj.set(b.subarray(c, c + d), e);
            else
                for (f = 0; f < d; f++)
                    a.Uj[e + f] = b[c + f];
            a.Yj = Math.max(a.Yj, e + d);
            return d
        },
        Pk: function(a, b, c) {
            1 === c ? b += a.position : 2 === c && ya(a.node.mode) && (b += a.node.Yj);
            if (0 > b)
                throw new O(28);
            return b
        },
        hm: function(a, b, c) {
            B.qm(a.node, b + c);
            a.node.Yj = Math.max(a.node.Yj, b + c)
        },
        Dm: function(a, b, c, d, e, f) {
            if (0 !== b)
                throw new O(28);
            if (!ya(a.node.mode))
                throw new O(43);
            a = a.node.Uj;
            if (f & 2 || a.buffer !== ub) {
                if (0 < d || d + c < a.length)
                    a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                d = !0;
                E();
                c = void 0;
                if (!c)
                    throw new O(48);
                F.set(a, c)
            } else
                d = !1,
                c = a.byteOffset;
            return {
                Wj: c,
                Tn: d
            }
        },
        Fm: function(a, b, c, d, e) {
            if (!ya(a.node.mode))
                throw new O(43);
            if (e & 2)
                return 0;
            B.Vj.write(a, b, 0, d, c, !1);
            return 0
        }
    }
};
function Fc(a, b, c) {
    var d = "al " + a;
    Pa(a, function(e) {
        assert(e, 'Loading data file "' + a + '" failed (no arrayBuffer).');
        b(new Uint8Array(e));
        d && Hb(d)
    }, function() {
        if (c)
            c();
        else
            throw 'Loading data file "' + a + '" failed.';
    });
    d && Gb(d)
}
var N = {
    Tk: {},
    indexedDB: function() {
        if ("undefined" !== typeof indexedDB)
            return indexedDB;
        var a = null;
        "object" === typeof window && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
        assert(a, "IDBFS used, but indexedDB not supported");
        return a
    },
    Sm: 21,
    Ik: "FILE_DATA",
    ak: function(a) {
        return B.ak.apply(null, arguments)
    },
    cm: function(a, b, c) {
        N.Kl(a, function(d, e) {
            if (d)
                return c(d);
            N.Ll(a, function(f, g) {
                if (f)
                    return c(f);
                N.Ul(b ? g : e, b ? e : g, c)
            })
        })
    },
    hn: function(a, b) {
        var c = N.Tk[a];
        if (c)
            return b(null, c);
        try {
            var d = N.indexedDB().open(a, N.Sm)
        } catch (e) {
            return b(e)
        }
        if (!d)
            return b("Unable to connect to IndexedDB");
        d.onupgradeneeded = function(e) {
            var f = e.target.result;
            e = e.target.transaction;
            f = f.objectStoreNames.contains(N.Ik) ? e.objectStore(N.Ik) : f.createObjectStore(N.Ik);
            f.indexNames.contains("timestamp") || f.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
        ;
        d.onsuccess = function() {
            c = d.result;
            N.Tk[a] = c;
            b(null, c)
        }
        ;
        d.onerror = function(e) {
            b(this.error);
            e.preventDefault()
        }
    },
    Kl: function(a, b) {
        function c(m) {
            return "." !== m && ".." !== m
        }
        function d(m) {
            return function(n) {
                return va(m + "/" + n)
            }
        }
        var e = {};
        for (a = wa(a.Fk).filter(c).map(d(a.Fk)); a.length; ) {
            var f = a.pop();
            try {
                var g = xa(f)
            } catch (m) {
                return b(m)
            }
            C(g.mode) && a.push.apply(a, wa(f).filter(c).map(d(f)));
            e[f] = {
                timestamp: g.mtime
            }
        }
        return b(null, {
            type: "local",
            entries: e
        })
    },
    Ll: function(a, b) {
        var c = {};
        N.hn(a.Fk, function(d, e) {
            if (d)
                return b(d);
            try {
                var f = e.transaction([N.Ik], "readonly");
                f.onerror = function(g) {
                    b(this.error);
                    g.preventDefault()
                }
                ;
                f.objectStore(N.Ik).index("timestamp").openKeyCursor().onsuccess = function(g) {
                    g = g.target.result;
                    if (!g)
                        return b(null, {
                            type: "remote",
                            db: e,
                            entries: c
                        });
                    c[g.primaryKey] = {
                        timestamp: g.key
                    };
                    g.continue()
                }
            } catch (g) {
                return b(g)
            }
        })
    },
    Pl: function(a, b) {
        try {
            var c = D(a).node;
            var d = xa(a)
        } catch (e) {
            return b(e)
        }
        return C(d.mode) ? b(null, {
            timestamp: d.mtime,
            mode: d.mode
        }) : ya(d.mode) ? (c.Uj = B.um(c),
        b(null, {
            timestamp: d.mtime,
            mode: d.mode,
            contents: c.Uj
        })) : b(Error("node type not supported"))
    },
    am: function(a, b, c) {
        try {
            if (C(b.mode))
                za(a, b.mode);
            else if (ya(b.mode))
                Aa(a, b.contents);
            else
                return c(Error("node type not supported"));
            Ba(a, b.mode);
            Ca(a, b.timestamp, b.timestamp)
        } catch (d) {
            return c(d)
        }
        c(null)
    },
    Wl: function(a, b) {
        try {
            D(a);
            var c = xa(a);
            C(c.mode) ? Da(a) : ya(c.mode) && Ea(a)
        } catch (d) {
            return b(d)
        }
        b(null)
    },
    Ql: function(a, b, c) {
        a = a.get(b);
        a.onsuccess = function(d) {
            c(null, d.target.result)
        }
        ;
        a.onerror = function(d) {
            c(this.error);
            d.preventDefault()
        }
    },
    bm: function(a, b, c, d) {
        try {
            var e = a.put(c, b)
        } catch (f) {
            d(f);
            return
        }
        e.onsuccess = function() {
            d(null)
        }
        ;
        e.onerror = function(f) {
            d(this.error);
            f.preventDefault()
        }
    },
    Xl: function(a, b, c) {
        a = a.delete(b);
        a.onsuccess = function() {
            c(null)
        }
        ;
        a.onerror = function(d) {
            c(this.error);
            d.preventDefault()
        }
    },
    Ul: function(a, b, c) {
        function d(q) {
            if (q && !m)
                return m = !0,
                c(q)
        }
        var e = 0
          , f = [];
        Object.keys(a.entries).forEach(function(q) {
            var t = a.entries[q]
              , v = b.entries[q];
            v && t.timestamp.getTime() == v.timestamp.getTime() || (f.push(q),
            e++)
        });
        var g = [];
        Object.keys(b.entries).forEach(function(q) {
            a.entries[q] || (g.push(q),
            e++)
        });
        if (!e)
            return c(null);
        var m = !1
          , n = ("remote" === a.type ? a.db : b.db).transaction([N.Ik], "readwrite")
          , p = n.objectStore(N.Ik);
        n.onerror = function(q) {
            d(this.error);
            q.preventDefault()
        }
        ;
        n.oncomplete = function() {
            m || c(null)
        }
        ;
        f.sort().forEach(function(q) {
            "local" === b.type ? N.Ql(p, q, function(t, v) {
                if (t)
                    return d(t);
                N.am(q, v, d)
            }) : N.Pl(q, function(t, v) {
                if (t)
                    return d(t);
                N.bm(p, q, v, d)
            })
        });
        g.sort().reverse().forEach(function(q) {
            "local" === b.type ? N.Wl(q, d) : N.Xl(p, q, d)
        })
    }
}
  , Gc = null
  , Hc = {}
  , Ic = []
  , Jc = 1
  , Kc = null
  , sc = "/"
  , Lc = !0
  , O = null
  , Dc = {}
  , Mc = 0;
function D(a, b) {
    a = qc(sc, a);
    b = b || {};
    if (!a)
        return {
            path: "",
            node: null
        };
    var c = {
        rm: !0,
        Vl: 0
    }, d;
    for (d in c)
        void 0 === b[d] && (b[d] = c[d]);
    if (8 < b.Vl)
        throw new O(32);
    a = nc(a.split("/").filter(function(g) {
        return !!g
    }), !1);
    var e = Gc;
    c = "/";
    for (d = 0; d < a.length; d++) {
        var f = d === a.length - 1;
        if (f && b.parent)
            break;
        e = Ec(e, a[d]);
        c = va(c + "/" + a[d]);
        e.Ek && (!f || f && b.rm) && (e = e.Ek.root);
        if (!f || b.Nk)
            for (f = 0; 40960 === (e.mode & 61440); )
                if (e = Nc(c),
                c = qc(oc(c), e),
                e = D(c, {
                    Vl: b.Vl
                }).node,
                40 < f++)
                    throw new O(32);
    }
    return {
        path: c,
        node: e
    }
}
function Oc(a) {
    for (var b; ; ) {
        if (a === a.parent)
            return a = a.ak.Fk,
            b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent
    }
}
function Pc(a, b) {
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % Kc.length
}
function Qc(a) {
    var b = Pc(a.parent.id, a.name);
    a.Uk = Kc[b];
    Kc[b] = a
}
function Rc(a) {
    var b = Pc(a.parent.id, a.name);
    if (Kc[b] === a)
        Kc[b] = a.Uk;
    else
        for (b = Kc[b]; b; ) {
            if (b.Uk === a) {
                b.Uk = a.Uk;
                break
            }
            b = b.Uk
        }
}
function Ec(a, b) {
    var c;
    if (c = (c = Sc(a, "x")) ? c : a.Tj.lookup ? 0 : 2)
        throw new O(c,a);
    for (c = Kc[Pc(a.id, b)]; c; c = c.Uk) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.Tj.lookup(a, b)
}
function Cc(a, b, c, d) {
    a = new Tc(a,b,c,d);
    Qc(a);
    return a
}
function ya(a) {
    return 32768 === (a & 61440)
}
function C(a) {
    return 16384 === (a & 61440)
}
var Uc = {
    r: 0,
    "r+": 2,
    w: 577,
    "w+": 578,
    a: 1089,
    "a+": 1090
};
function Vc(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
function Sc(a, b) {
    if (Lc)
        return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
function Wc(a, b) {
    try {
        return Ec(a, b),
        20
    } catch (c) {}
    return Sc(a, "wx")
}
function Xc(a, b, c) {
    try {
        var d = Ec(a, b)
    } catch (e) {
        return e.Xj
    }
    if (a = Sc(a, "wx"))
        return a;
    if (c) {
        if (!C(d.mode))
            return 54;
        if (d === d.parent || Oc(d) === sc)
            return 10
    } else if (C(d.mode))
        return 31;
    return 0
}
function Yc(a, b) {
    b = b || 4096;
    for (a = a || 0; a <= b; a++)
        if (!Ic[a])
            return a;
    throw new O(33);
}
function Zc(a, b, c) {
    $c || ($c = function() {}
    ,
    $c.prototype = {});
    var d = new $c, e;
    for (e in a)
        d[e] = a[e];
    a = d;
    b = Yc(b, c);
    a.fd = b;
    return Ic[b] = a
}
var Bc = {
    open: function(a) {
        a.Vj = Hc[a.node.rdev].Vj;
        a.Vj.open && a.Vj.open(a)
    },
    Pk: function() {
        throw new O(70);
    }
};
function wc(a, b) {
    Hc[a] = {
        Vj: b
    }
}
function ad() {
    for (var a = [], b = [Gc.ak]; b.length; ) {
        var c = b.pop();
        a.push(c);
        b.push.apply(b, c.Em)
    }
    return a
}
function Pb(a, b) {
    function c(g) {
        Mc--;
        return b(g)
    }
    function d(g) {
        if (g) {
            if (!d.cn)
                return d.cn = !0,
                c(g)
        } else
            ++f >= e.length && c(null)
    }
    "function" === typeof a && (b = a,
    a = !1);
    Mc++;
    1 < Mc && k("warning: " + Mc + " FS.syncfs operations in flight at once, probably just doing extra work");
    var e = ad()
      , f = 0;
    e.forEach(function(g) {
        if (!g.type.cm)
            return d(null);
        g.type.cm(g, a, d)
    })
}
function Ob(a, b) {
    var c = "/" === b
      , d = !b;
    if (c && Gc)
        throw new O(10);
    if (!c && !d) {
        var e = D(b, {
            rm: !1
        });
        b = e.path;
        e = e.node;
        if (e.Ek)
            throw new O(10);
        if (!C(e.mode))
            throw new O(54);
    }
    b = {
        type: a,
        mo: {},
        Fk: b,
        Em: []
    };
    a = a.ak(b);
    a.ak = b;
    b.root = a;
    c ? Gc = a : e && (e.Ek = b,
    e.ak && e.ak.Em.push(b));
    return a
}
function bd(a, b, c) {
    var d = D(a, {
        parent: !0
    }).node;
    a = pc(a);
    if (!a || "." === a || ".." === a)
        throw new O(28);
    var e = Wc(d, a);
    if (e)
        throw new O(e);
    if (!d.Tj.rl)
        throw new O(63);
    return d.Tj.rl(d, a, b, c)
}
function Nb(a, b) {
    return bd(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0)
}
function za(a, b) {
    a = a.split("/");
    for (var c = "", d = 0; d < a.length; ++d)
        if (a[d]) {
            c += "/" + a[d];
            try {
                Nb(c, b)
            } catch (e) {
                if (20 != e.Xj)
                    throw e;
            }
        }
}
function cd(a, b, c) {
    "undefined" === typeof c && (c = b,
    b = 438);
    return bd(a, b | 8192, c)
}
function dd(a, b) {
    if (!qc(a))
        throw new O(44);
    var c = D(b, {
        parent: !0
    }).node;
    if (!c)
        throw new O(44);
    b = pc(b);
    var d = Wc(c, b);
    if (d)
        throw new O(d);
    if (!c.Tj.symlink)
        throw new O(63);
    c.Tj.symlink(c, b, a)
}
function Da(a) {
    var b = D(a, {
        parent: !0
    }).node;
    a = pc(a);
    var c = Ec(b, a)
      , d = Xc(b, a, !0);
    if (d)
        throw new O(d);
    if (!b.Tj.rmdir)
        throw new O(63);
    if (c.Ek)
        throw new O(10);
    b.Tj.rmdir(b, a);
    Rc(c)
}
function wa(a) {
    a = D(a, {
        Nk: !0
    }).node;
    if (!a.Tj.readdir)
        throw new O(54);
    return a.Tj.readdir(a)
}
function Ea(a) {
    var b = D(a, {
        parent: !0
    }).node;
    a = pc(a);
    var c = Ec(b, a)
      , d = Xc(b, a, !1);
    if (d)
        throw new O(d);
    if (!b.Tj.unlink)
        throw new O(63);
    if (c.Ek)
        throw new O(10);
    b.Tj.unlink(b, a);
    Rc(c)
}
function Nc(a) {
    a = D(a).node;
    if (!a)
        throw new O(44);
    if (!a.Tj.readlink)
        throw new O(28);
    return qc(Oc(a.parent), a.Tj.readlink(a))
}
function xa(a, b) {
    a = D(a, {
        Nk: !b
    }).node;
    if (!a)
        throw new O(44);
    if (!a.Tj.uk)
        throw new O(63);
    return a.Tj.uk(a)
}
function Ba(a, b) {
    a = "string" === typeof a ? D(a, {
        Nk: !0
    }).node : a;
    if (!a.Tj.jk)
        throw new O(63);
    a.Tj.jk(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}
function Ca(a, b, c) {
    a = D(a, {
        Nk: !0
    }).node;
    a.Tj.jk(a, {
        timestamp: Math.max(b, c)
    })
}
function ed(a, b, c, d) {
    if ("" === a)
        throw new O(44);
    if ("string" === typeof b) {
        var e = Uc[b];
        if ("undefined" === typeof e)
            throw Error("Unknown file open mode: " + b);
        b = e
    }
    c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" === typeof a)
        var f = a;
    else {
        a = va(a);
        try {
            f = D(a, {
                Nk: !(b & 131072)
            }).node
        } catch (g) {}
    }
    e = !1;
    if (b & 64)
        if (f) {
            if (b & 128)
                throw new O(20);
        } else
            f = bd(a, c, 0),
            e = !0;
    if (!f)
        throw new O(44);
    8192 === (f.mode & 61440) && (b &= -513);
    if (b & 65536 && !C(f.mode))
        throw new O(54);
    if (!e && (c = f ? 40960 === (f.mode & 61440) ? 32 : C(f.mode) && ("r" !== Vc(b) || b & 512) ? 31 : Sc(f, Vc(b)) : 44))
        throw new O(c);
    if (b & 512) {
        c = f;
        c = "string" === typeof c ? D(c, {
            Nk: !0
        }).node : c;
        if (!c.Tj.jk)
            throw new O(63);
        if (C(c.mode))
            throw new O(31);
        if (!ya(c.mode))
            throw new O(28);
        if (e = Sc(c, "w"))
            throw new O(e);
        c.Tj.jk(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    d = Zc({
        node: f,
        path: Oc(f),
        id: f.id,
        flags: b,
        mode: f.mode,
        seekable: !0,
        position: 0,
        Vj: f.Vj,
        Tj: f.Tj,
        On: [],
        error: !1
    }, d, void 0);
    d.Vj.open && d.Vj.open(d);
    !h.logReadFiles || b & 1 || (fd || (fd = {}),
    a in fd || (fd[a] = 1));
    return d
}
function gd(a) {
    if (null === a.fd)
        throw new O(8);
    a.Ok && (a.Ok = null);
    try {
        a.Vj.close && a.Vj.close(a)
    } catch (b) {
        throw b;
    } finally {
        Ic[a.fd] = null
    }
    a.fd = null
}
function hd(a, b, c) {
    if (null === a.fd)
        throw new O(8);
    if (!a.seekable || !a.Vj.Pk)
        throw new O(70);
    if (0 != c && 1 != c && 2 != c)
        throw new O(28);
    a.position = a.Vj.Pk(a, b, c);
    a.On = [];
    return a.position
}
function jd(a, b, c, d, e, f) {
    if (0 > d || 0 > e)
        throw new O(28);
    if (null === a.fd)
        throw new O(8);
    if (0 === (a.flags & 2097155))
        throw new O(8);
    if (C(a.node.mode))
        throw new O(31);
    if (!a.Vj.write)
        throw new O(28);
    a.seekable && a.flags & 1024 && hd(a, 0, 2);
    var g = "undefined" !== typeof e;
    if (!g)
        e = a.position;
    else if (!a.seekable)
        throw new O(70);
    b = a.Vj.write(a, b, c, d, e, f);
    g || (a.position += b);
    return b
}
function Aa(a, b) {
    var c = {
        km: !0
    };
    c = c || {};
    c.flags = c.flags || 577;
    a = ed(a, c.flags, c.mode);
    if ("string" === typeof b) {
        var d = new Uint8Array(aa(b) + 1);
        b = rb(b, d, 0, d.length);
        jd(a, d, 0, b, void 0, c.km)
    } else if (ArrayBuffer.isView(b))
        jd(a, b, 0, b.byteLength, void 0, c.km);
    else
        throw Error("Unsupported data type");
    gd(a)
}
function kd() {
    O || (O = function(a, b) {
        this.node = b;
        this.Fn = function(c) {
            this.Xj = c
        }
        ;
        this.Fn(a);
        this.message = "FS error"
    }
    ,
    O.prototype = Error(),
    O.prototype.constructor = O,
    [44].forEach(function(a) {
        Dc[a] = new O(a);
        Dc[a].stack = "<generic error, no stack>"
    }))
}
var ld;
function md(a, b) {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
function nd(a, b) {
    a = "string" === typeof a ? a : Oc(a);
    for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
            var d = va(a + "/" + c);
            try {
                Nb(d)
            } catch (e) {}
            a = d
        }
    }
    return d
}
function od(a, b, c, d) {
    a = va(("string" === typeof a ? a : Oc(a)) + "/" + b);
    c = md(c, d);
    return bd(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}
function pd(a, b, c, d, e, f) {
    a = b ? va(("string" === typeof a ? a : Oc(a)) + "/" + b) : a;
    d = md(d, e);
    e = bd(a, (void 0 !== d ? d : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" === typeof c) {
            a = Array(c.length);
            b = 0;
            for (var g = c.length; b < g; ++b)
                a[b] = c.charCodeAt(b);
            c = a
        }
        Ba(e, d | 146);
        a = ed(e, 577);
        jd(a, c, 0, c.length, 0, f);
        gd(a);
        Ba(e, d)
    }
    return e
}
function qd(a, b, c, d) {
    a = va(("string" === typeof a ? a : Oc(a)) + "/" + b);
    b = md(!!c, !!d);
    qd.Bm || (qd.Bm = 64);
    var e = qd.Bm++ << 8 | 0;
    wc(e, {
        open: function(f) {
            f.seekable = !1
        },
        close: function() {
            d && d.buffer && d.buffer.length && d(10)
        },
        read: function(f, g, m, n) {
            for (var p = 0, q = 0; q < n; q++) {
                try {
                    var t = c()
                } catch (v) {
                    throw new O(29);
                }
                if (void 0 === t && 0 === p)
                    throw new O(6);
                if (null === t || void 0 === t)
                    break;
                p++;
                g[m + q] = t
            }
            p && (f.node.timestamp = Date.now());
            return p
        },
        write: function(f, g, m, n) {
            for (var p = 0; p < n; p++)
                try {
                    d(g[m + p])
                } catch (q) {
                    throw new O(29);
                }
            n && (f.node.timestamp = Date.now());
            return p
        }
    });
    return cd(a, b, e)
}
function rd(a) {
    if (!(a.yn || a.zn || a.link || a.Uj)) {
        if ("undefined" !== typeof XMLHttpRequest)
            throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (Oa)
            try {
                a.Uj = yc(Oa(a.url), !0),
                a.Yj = a.Uj.length
            } catch (b) {
                throw new O(29);
            }
        else
            throw Error("Cannot load without read() or XMLHttpRequest.");
    }
}
function sd(a, b, c, d, e) {
    function f() {
        this.Ol = !1;
        this.Dk = []
    }
    f.prototype.get = function(q) {
        if (!(q > this.length - 1 || 0 > q)) {
            var t = q % this.chunkSize;
            return this.ym(q / this.chunkSize | 0)[t]
        }
    }
    ;
    f.prototype.mi = function(q) {
        this.ym = q
    }
    ;
    f.prototype.jm = function() {
        var q = new XMLHttpRequest;
        q.open("HEAD", c, !1);
        q.send(null);
        if (!(200 <= q.status && 300 > q.status || 304 === q.status))
            throw Error("Couldn't load " + c + ". Status: " + q.status);
        var t = Number(q.getResponseHeader("Content-length")), v, r = (v = q.getResponseHeader("Accept-Ranges")) && "bytes" === v;
        q = (v = q.getResponseHeader("Content-Encoding")) && "gzip" === v;
        var x = 1048576;
        r || (x = t);
        var z = this;
        z.mi(function(J) {
            var Q = J * x
              , ia = (J + 1) * x - 1;
            ia = Math.min(ia, t - 1);
            if ("undefined" === typeof z.Dk[J]) {
                var $a = z.Dk;
                if (Q > ia)
                    throw Error("invalid range (" + Q + ", " + ia + ") or no bytes requested!");
                if (ia > t - 1)
                    throw Error("only " + t + " bytes available! programmer error!");
                var A = new XMLHttpRequest;
                A.open("GET", c, !1);
                t !== x && A.setRequestHeader("Range", "bytes=" + Q + "-" + ia);
                "undefined" != typeof Uint8Array && (A.responseType = "arraybuffer");
                A.overrideMimeType && A.overrideMimeType("text/plain; charset=x-user-defined");
                A.send(null);
                if (!(200 <= A.status && 300 > A.status || 304 === A.status))
                    throw Error("Couldn't load " + c + ". Status: " + A.status);
                Q = void 0 !== A.response ? new Uint8Array(A.response || []) : yc(A.responseText || "", !0);
                $a[J] = Q
            }
            if ("undefined" === typeof z.Dk[J])
                throw Error("doXHR failed!");
            return z.Dk[J]
        });
        if (q || !t)
            x = t = 1,
            x = t = this.ym(0).length,
            Wa("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.Vm = t;
        this.Um = x;
        this.Ol = !0
    }
    ;
    if ("undefined" !== typeof XMLHttpRequest) {
        if (!La)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g = new f;
        Object.defineProperties(g, {
            length: {
                get: function() {
                    this.Ol || this.jm();
                    return this.Vm
                }
            },
            chunkSize: {
                get: function() {
                    this.Ol || this.jm();
                    return this.Um
                }
            }
        });
        var m = void 0
    } else
        m = c,
        g = void 0;
    var n = od(a, b, d, e);
    g ? n.Uj = g : m && (n.Uj = null,
    n.url = m);
    Object.defineProperties(n, {
        Yj: {
            get: function() {
                return this.Uj.length
            }
        }
    });
    var p = {};
    Object.keys(n.Vj).forEach(function(q) {
        var t = n.Vj[q];
        p[q] = function() {
            rd(n);
            return t.apply(null, arguments)
        }
    });
    p.read = function(q, t, v, r, x) {
        rd(n);
        q = q.node.Uj;
        if (x >= q.length)
            return 0;
        r = Math.min(q.length - x, r);
        if (q.slice)
            for (var z = 0; z < r; z++)
                t[v + z] = q[x + z];
        else
            for (z = 0; z < r; z++)
                t[v + z] = q.get(x + z);
        return r
    }
    ;
    n.Vj = p;
    return n
}
function td(a, b, c, d, e, f, g, m, n, p) {
    function q(r) {
        function x(J) {
            p && p();
            m || pd(a, b, J, d, e, n);
            f && f();
            Hb(v)
        }
        var z = !1;
        h.preloadPlugins.forEach(function(J) {
            !z && J.canHandle(t) && (J.handle(r, t, x, function() {
                g && g();
                Hb(v)
            }),
            z = !0)
        });
        z || x(r)
    }
    ud();
    var t = b ? qc(va(a + "/" + b)) : a
      , v = "cp " + t;
    Gb(v);
    "string" == typeof c ? Fc(c, function(r) {
        q(r)
    }, g) : q(c)
}
var vd = {}, $c, fd, R = {
    ak: function() {
        h.websocket = h.websocket && "object" === typeof h.websocket ? h.websocket : {};
        h.websocket.Fl = {};
        h.websocket.on = function(a, b) {
            "function" === typeof b && (this.Fl[a] = b);
            return this
        }
        ;
        h.websocket.emit = function(a, b) {
            "function" === typeof this.Fl[a] && this.Fl[a].call(this, b)
        }
        ;
        return Cc(null, "/", 16895, 0)
    },
    createSocket: function(a, b, c) {
        b &= -526337;
        c && assert(1 == b == (6 == c));
        a = {
            family: a,
            type: b,
            protocol: c,
            bk: null,
            error: null,
            dl: {},
            pending: [],
            Wk: [],
            Gk: R.fk
        };
        b = R.tl();
        c = Cc(R.root, b, 49152, 0);
        c.Xk = a;
        b = Zc({
            path: b,
            node: c,
            flags: 2,
            seekable: !1,
            Vj: R.Vj
        });
        a.stream = b;
        return a
    },
    jn: function(a) {
        return (a = Ic[a]) && 49152 === (a.node.mode & 49152) ? a.node.Xk : null
    },
    Vj: {
        Im: function(a) {
            a = a.node.Xk;
            return a.Gk.Im(a)
        },
        pl: function(a, b, c) {
            a = a.node.Xk;
            return a.Gk.pl(a, b, c)
        },
        read: function(a, b, c, d) {
            a = a.node.Xk;
            d = a.Gk.Lm(a, d);
            if (!d)
                return 0;
            b.set(d.buffer, c);
            return d.buffer.length
        },
        write: function(a, b, c, d) {
            a = a.node.Xk;
            return a.Gk.Nm(a, b, c, d)
        },
        close: function(a) {
            a = a.node.Xk;
            a.Gk.close(a)
        }
    },
    tl: function() {
        R.tl.current || (R.tl.current = 0);
        return "socket[" + R.tl.current++ + "]"
    },
    fk: {
        ll: function(a, b, c) {
            if ("object" === typeof b) {
                var d = b;
                c = b = null
            }
            if (d)
                if (d._socket)
                    b = d._socket.remoteAddress,
                    c = d._socket.remotePort;
                else {
                    c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
                    if (!c)
                        throw Error("WebSocket URL must be in the format ws(s)://address:port");
                    b = c[1];
                    c = parseInt(c[2], 10)
                }
            else
                try {
                    var e = h.websocket && "object" === typeof h.websocket
                      , f = "ws://";
                    e && "string" === typeof h.websocket.url && (f = h.websocket.url);
                    if ("ws://" === f || "wss://" === f) {
                        var g = b.split("/");
                        f = f + g[0] + ":" + c + "/" + g.slice(1).join("/")
                    }
                    g = "binary";
                    e && "string" === typeof h.websocket.subprotocol && (g = h.websocket.subprotocol);
                    var m = void 0;
                    "null" !== g && (g = g.replace(/^ +| +$/g, "").split(/ *, */),
                    m = Ma ? {
                        protocol: g.toString()
                    } : g);
                    e && null === h.websocket.subprotocol && (m = void 0);
                    d = new (Ma ? require("ws") : WebSocket)(f,m);
                    d.binaryType = "arraybuffer"
                } catch (n) {
                    throw new O(23);
                }
            b = {
                ck: b,
                port: c,
                socket: d,
                ml: []
            };
            R.fk.gm(a, b);
            R.fk.tn(a, b);
            2 === a.type && "undefined" !== typeof a.Yk && b.ml.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.Yk & 65280) >> 8, a.Yk & 255]));
            return b
        },
        nl: function(a, b, c) {
            return a.dl[b + ":" + c]
        },
        gm: function(a, b) {
            a.dl[b.ck + ":" + b.port] = b
        },
        Mm: function(a, b) {
            delete a.dl[b.ck + ":" + b.port]
        },
        tn: function(a, b) {
            function c() {
                h.websocket.emit("open", a.stream.fd);
                try {
                    for (var f = b.ml.shift(); f; )
                        b.socket.send(f),
                        f = b.ml.shift()
                } catch (g) {
                    b.socket.close()
                }
            }
            function d(f) {
                if ("string" === typeof f)
                    f = (new TextEncoder).encode(f);
                else {
                    assert(void 0 !== f.byteLength);
                    if (0 == f.byteLength)
                        return;
                    f = new Uint8Array(f)
                }
                var g = e;
                e = !1;
                g && 10 === f.length && 255 === f[0] && 255 === f[1] && 255 === f[2] && 255 === f[3] && 112 === f[4] && 111 === f[5] && 114 === f[6] && 116 === f[7] ? (f = f[8] << 8 | f[9],
                R.fk.Mm(a, b),
                b.port = f,
                R.fk.gm(a, b)) : (a.Wk.push({
                    ck: b.ck,
                    port: b.port,
                    data: f
                }),
                h.websocket.emit("message", a.stream.fd))
            }
            var e = !0;
            Ma ? (b.socket.on("open", c),
            b.socket.on("message", function(f, g) {
                g.Wn && d((new Uint8Array(f)).buffer)
            }),
            b.socket.on("close", function() {
                h.websocket.emit("close", a.stream.fd)
            }),
            b.socket.on("error", function() {
                a.error = 14;
                h.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"])
            })) : (b.socket.onopen = c,
            b.socket.onclose = function() {
                h.websocket.emit("close", a.stream.fd)
            }
            ,
            b.socket.onmessage = function(f) {
                d(f.data)
            }
            ,
            b.socket.onerror = function() {
                a.error = 14;
                h.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"])
            }
            )
        },
        Im: function(a) {
            if (1 === a.type && a.bk)
                return a.pending.length ? 65 : 0;
            var b = 0
              , c = 1 === a.type ? R.fk.nl(a, a.yk, a.zk) : null;
            if (a.Wk.length || !c || c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED)
                b |= 65;
            if (!c || c && c.socket.readyState === c.socket.OPEN)
                b |= 4;
            if (c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED)
                b |= 16;
            return b
        },
        pl: function(a, b, c) {
            switch (b) {
            case 21531:
                return b = 0,
                a.Wk.length && (b = a.Wk[0].data.length),
                G[c >> 2] = b,
                0;
            default:
                return 28
            }
        },
        close: function(a) {
            if (a.bk) {
                try {
                    a.bk.close()
                } catch (e) {}
                a.bk = null
            }
            for (var b = Object.keys(a.dl), c = 0; c < b.length; c++) {
                var d = a.dl[b[c]];
                try {
                    d.socket.close()
                } catch (e) {}
                R.fk.Mm(a, d)
            }
            return 0
        },
        bind: function(a, b, c) {
            if ("undefined" !== typeof a.Yl || "undefined" !== typeof a.Yk)
                throw new O(28);
            a.Yl = b;
            a.Yk = c;
            if (2 === a.type) {
                a.bk && (a.bk.close(),
                a.bk = null);
                try {
                    a.Gk.listen(a, 0)
                } catch (d) {
                    if (!(d instanceof O))
                        throw d;
                    if (138 !== d.Xj)
                        throw d;
                }
            }
        },
        connect: function(a, b, c) {
            if (a.bk)
                throw new O(138);
            if ("undefined" !== typeof a.yk && "undefined" !== typeof a.zk) {
                var d = R.fk.nl(a, a.yk, a.zk);
                if (d) {
                    if (d.socket.readyState === d.socket.CONNECTING)
                        throw new O(7);
                    throw new O(30);
                }
            }
            b = R.fk.ll(a, b, c);
            a.yk = b.ck;
            a.zk = b.port;
            throw new O(26);
        },
        listen: function(a) {
            if (!Ma)
                throw new O(138);
            if (a.bk)
                throw new O(28);
            var b = require("ws").Server;
            a.bk = new b({
                host: a.Yl,
                port: a.Yk
            });
            h.websocket.emit("listen", a.stream.fd);
            a.bk.on("connection", function(c) {
                if (1 === a.type) {
                    var d = R.createSocket(a.family, a.type, a.protocol);
                    c = R.fk.ll(d, c);
                    d.yk = c.ck;
                    d.zk = c.port;
                    a.pending.push(d);
                    h.websocket.emit("connection", d.stream.fd)
                } else
                    R.fk.ll(a, c),
                    h.websocket.emit("connection", a.stream.fd)
            });
            a.bk.on("closed", function() {
                h.websocket.emit("close", a.stream.fd);
                a.bk = null
            });
            a.bk.on("error", function() {
                a.error = 23;
                h.websocket.emit("error", [a.stream.fd, a.error, "EHOSTUNREACH: Host is unreachable"])
            })
        },
        accept: function(a) {
            if (!a.bk)
                throw new O(28);
            var b = a.pending.shift();
            b.stream.flags = a.stream.flags;
            return b
        },
        ho: function(a, b) {
            if (b) {
                if (void 0 === a.yk || void 0 === a.zk)
                    throw new O(53);
                b = a.yk;
                a = a.zk
            } else
                b = a.Yl || 0,
                a = a.Yk || 0;
            return {
                ck: b,
                port: a
            }
        },
        Nm: function(a, b, c, d, e, f) {
            if (2 === a.type) {
                if (void 0 === e || void 0 === f)
                    e = a.yk,
                    f = a.zk;
                if (void 0 === e || void 0 === f)
                    throw new O(17);
            } else
                e = a.yk,
                f = a.zk;
            var g = R.fk.nl(a, e, f);
            if (1 === a.type) {
                if (!g || g.socket.readyState === g.socket.CLOSING || g.socket.readyState === g.socket.CLOSED)
                    throw new O(53);
                if (g.socket.readyState === g.socket.CONNECTING)
                    throw new O(6);
            }
            ArrayBuffer.isView(b) && (c += b.byteOffset,
            b = b.buffer);
            b = b.slice(c, c + d);
            if (2 === a.type && (!g || g.socket.readyState !== g.socket.OPEN))
                return g && g.socket.readyState !== g.socket.CLOSING && g.socket.readyState !== g.socket.CLOSED || (g = R.fk.ll(a, e, f)),
                g.ml.push(b),
                d;
            try {
                return g.socket.send(b),
                d
            } catch (m) {
                throw new O(28);
            }
        },
        Lm: function(a, b) {
            if (1 === a.type && a.bk)
                throw new O(53);
            var c = a.Wk.shift();
            if (!c) {
                if (1 === a.type) {
                    if (a = R.fk.nl(a, a.yk, a.zk)) {
                        if (a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED)
                            return null;
                        throw new O(6);
                    }
                    throw new O(53);
                }
                throw new O(6);
            }
            var d = c.data.byteLength || c.data.length
              , e = c.data.byteOffset || 0
              , f = c.data.buffer || c.data;
            b = Math.min(b, d);
            var g = {
                buffer: new Uint8Array(f,e,b),
                ck: c.ck,
                port: c.port
            };
            1 === a.type && b < d && (c.data = new Uint8Array(f,e + b,d - b),
            a.Wk.unshift(c));
            return g
        }
    }
};
function wd(a) {
    a = R.jn(a);
    if (!a)
        throw new O(8);
    return a
}
function xd(a) {
    return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255)
}
function yd(a) {
    var b = "", c, d = 0, e = 0, f = 0, g = 0;
    a = [a[0] & 65535, a[0] >> 16, a[1] & 65535, a[1] >> 16, a[2] & 65535, a[2] >> 16, a[3] & 65535, a[3] >> 16];
    var m = !0;
    for (c = 0; 5 > c; c++)
        if (0 !== a[c]) {
            m = !1;
            break
        }
    if (m) {
        c = xd(a[6] | a[7] << 16);
        if (-1 === a[5])
            return "::ffff:" + c;
        if (0 === a[5])
            return "0.0.0.0" === c && (c = ""),
            "0.0.0.1" === c && (c = "1"),
            "::" + c
    }
    for (c = 0; 8 > c; c++)
        0 === a[c] && (1 < c - e && (g = 0),
        e = c,
        g++),
        g > d && (d = g,
        f = c - d + 1);
    for (c = 0; 8 > c; c++)
        1 < d && 0 === a[c] && c >= f && c < f + d ? c === f && (b += ":",
        0 === f && (b += ":")) : (b += Number(zd(a[c] & 65535)).toString(16),
        b += 7 > c ? ":" : "");
    return b
}
function Ad(a, b) {
    var c = cb[a >> 1]
      , d = zd(L[a + 2 >> 1]);
    switch (c) {
    case 2:
        if (16 !== b)
            return {
                Xj: 28
            };
        a = G[a + 4 >> 2];
        a = xd(a);
        break;
    case 10:
        if (28 !== b)
            return {
                Xj: 28
            };
        a = [G[a + 8 >> 2], G[a + 12 >> 2], G[a + 16 >> 2], G[a + 20 >> 2]];
        a = yd(a);
        break;
    default:
        return {
            Xj: 5
        }
    }
    return {
        family: c,
        ck: a,
        port: d
    }
}
function Bd(a) {
    a = a.split(".");
    for (var b = 0; 4 > b; b++) {
        var c = Number(a[b]);
        if (isNaN(c))
            return null;
        a[b] = c
    }
    return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0
}
function Cd(a) {
    var b, c, d = [];
    if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a))
        return null;
    if ("::" === a)
        return [0, 0, 0, 0, 0, 0, 0, 0];
    a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
    0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"),
    a = a.split(":"),
    a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]),
    a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]),
    a = a.slice(0, a.length - 2)) : a = a.split(":");
    for (b = c = 0; b < a.length; b++)
        if ("string" === typeof a[b])
            if ("Z" === a[b]) {
                for (c = 0; c < 8 - a.length + 1; c++)
                    d[b + c] = 0;
                --c
            } else
                d[b + c] = Dd(parseInt(a[b], 16));
        else
            d[b + c] = a[b];
    return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]]
}
var Ed = 1
  , Fd = {}
  , Gd = {};
function Hd(a) {
    var b = Bd(a);
    if (null !== b)
        return a;
    b = Cd(a);
    if (null !== b)
        return a;
    Fd[a] ? b = Fd[a] : (b = Ed++,
    assert(65535 > b, "exceeded max address mappings of 65535"),
    b = "172.29." + (b & 255) + "." + (b & 65280),
    Gd[b] = a,
    Fd[a] = b);
    return b
}
var Id = void 0;
function Jd() {
    Id += 4;
    return G[Id - 4 >> 2]
}
function Kd(a) {
    a = Ic[a];
    if (!a)
        throw new O(8);
    return a
}
function Ld(a, b, c, d, e) {
    switch (b) {
    case 2:
        c = Bd(c);
        y.fill(0, a, a + 16);
        e && (G[e >> 2] = 16);
        cb[a >> 1] = b;
        G[a + 4 >> 2] = c;
        cb[a + 2 >> 1] = Dd(d);
        break;
    case 10:
        c = Cd(c);
        y.fill(0, a, a + 28);
        e && (G[e >> 2] = 28);
        G[a >> 2] = b;
        G[a + 8 >> 2] = c[0];
        G[a + 12 >> 2] = c[1];
        G[a + 16 >> 2] = c[2];
        G[a + 20 >> 2] = c[3];
        cb[a + 2 >> 1] = Dd(d);
        break;
    default:
        return 5
    }
    return 0
}
function Md(a, b) {
    Nd = a;
    Od = b;
    if (Pd)
        if (Qd || (Qd = !0),
        0 == a)
            Rd = function() {
                var d = Math.max(0, Sd + b - Xb()) | 0;
                setTimeout(Td, d)
            }
            ;
        else if (1 == a)
            Rd = function() {
                Ud(Td)
            }
            ;
        else if (2 == a) {
            if ("undefined" === typeof setImmediate) {
                var c = [];
                addEventListener("message", function(d) {
                    if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                        d.stopPropagation(),
                        c.shift()()
                }, !0);
                setImmediate = function(d) {
                    c.push(d);
                    La ? (void 0 === h.setImmediates && (h.setImmediates = []),
                    h.setImmediates.push(d),
                    postMessage({
                        target: "setimmediate"
                    })) : postMessage("setimmediate", "*")
                }
            }
            Rd = function() {
                setImmediate(Td)
            }
        }
}
function Vd(a) {
    function b() {
        if (c < Wd) {
            if (!(noExitRuntime || 0 < Va))
                try {
                    Xd(ib)
                } catch (d) {
                    Wb(d)
                }
            return !1
        }
        return !0
    }
    assert(!Pd, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    Pd = a;
    var c = Wd;
    Qd = !1;
    Td = function() {
        if (!hb)
            if (0 < Yd.length) {
                var d = Date.now()
                  , e = Yd.shift();
                e.gn(e.jl);
                if (Zd) {
                    var f = Zd
                      , g = 0 == f % 1 ? f - 1 : Math.floor(f);
                    Zd = e.$n ? g : (8 * f + (g + .5)) / 9
                }
                Wa('main loop blocker "' + e.name + '" took ' + (Date.now() - d) + " ms");
                h.setStatus && (d = h.statusMessage || "Please wait...",
                e = Zd,
                f = $d.eo,
                e ? e < f ? h.setStatus(d + " (" + (f - e) + "/" + f + ")") : h.setStatus(d) : h.setStatus(""));
                b() && setTimeout(Td, 0)
            } else if (b())
                if (ae = ae + 1 | 0,
                1 == Nd && 1 < Od && 0 != ae % Od)
                    Rd();
                else {
                    0 == Nd && (Sd = Xb());
                    if (S)
                        for (d = S.$k,
                        S.$k = S.gl,
                        S.gl = d,
                        d = S.Hk,
                        S.Hk = S.xl,
                        S.xl = d,
                        d = be(2097152),
                        e = 0; e <= d; ++e)
                            S.Hk[e] = 0;
                    hb || h.preMainLoop && !1 === h.preMainLoop() || (ce(a),
                    h.postMainLoop && h.postMainLoop());
                    b() && ("object" === typeof SDL && SDL.audio && SDL.audio.Bn && SDL.audio.Bn(),
                    Rd())
                }
    }
}
function ce(a, b) {
    if (!Bb && !hb)
        if (b)
            a();
        else
            try {
                a()
            } catch (c) {
                Wb(c)
            }
}
function de(a, b) {
    setTimeout(function() {
        ce(a)
    }, b)
}
var Qd = !1
  , Rd = null
  , Wd = 0
  , Pd = null
  , Nd = 0
  , Od = 0
  , ae = 0
  , Yd = [];
function ee() {
    Wd++;
    var a = Nd
      , b = Od
      , c = Pd;
    Pd = null;
    Vd(c);
    Md(a, b);
    Rd()
}
var $d = {}, Sd, Td, Zd, fe = !1, ge = !1, he = [];
function ud() {
    function a() {
        ge = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas
    }
    h.preloadPlugins || (h.preloadPlugins = []);
    if (!ie) {
        ie = !0;
        try {
            je = !0
        } catch (c) {
            je = !1,
            Wa("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        ke = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : je ? null : Wa("warning: no BlobBuilder");
        le = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        h.Gm || "undefined" !== typeof le || (Wa("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
        h.Gm = !0);
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.Gm && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, f) {
                var g = null;
                if (je)
                    try {
                        g = new Blob([c],{
                            type: me(d)
                        }),
                        g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer],{
                            type: me(d)
                        }))
                    } catch (p) {
                        Xa("Blob constructor present but fails: " + p + "; falling back to blob builder")
                    }
                g || (g = new ke,
                g.append((new Uint8Array(c)).buffer),
                g = g.getBlob());
                var m = le.createObjectURL(g)
                  , n = new Image;
                n.onload = function() {
                    assert(n.complete, "Image " + d + " could not be decoded");
                    var p = document.createElement("canvas");
                    p.width = n.width;
                    p.height = n.height;
                    p.getContext("2d").drawImage(n, 0, 0);
                    h.preloadedImages[d] = p;
                    le.revokeObjectURL(m);
                    e && e(c)
                }
                ;
                n.onerror = function() {
                    Wa("Image " + m + " could not be decoded");
                    f && f()
                }
                ;
                n.src = m
            }
        });
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.lo && c.substr(-4)in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function(c, d, e, f) {
                function g(t) {
                    n || (n = !0,
                    h.preloadedAudios[d] = t,
                    e && e(c))
                }
                function m() {
                    n || (n = !0,
                    h.preloadedAudios[d] = new Audio,
                    f && f())
                }
                var n = !1;
                if (je) {
                    try {
                        var p = new Blob([c],{
                            type: me(d)
                        })
                    } catch (t) {
                        return m()
                    }
                    p = le.createObjectURL(p);
                    var q = new Audio;
                    q.addEventListener("canplaythrough", function() {
                        g(q)
                    }, !1);
                    q.onerror = function() {
                        if (!n) {
                            Wa("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                            for (var t = "", v = 0, r = 0, x = 0; x < c.length; x++)
                                for (v = v << 8 | c[x],
                                r += 8; 6 <= r; ) {
                                    var z = v >> r - 6 & 63;
                                    r -= 6;
                                    t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[z]
                                }
                            2 == r ? (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(v & 3) << 4],
                            t += "==") : 4 == r && (t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(v & 15) << 2],
                            t += "=");
                            q.src = "data:audio/x-" + d.substr(-3) + ";base64," + t;
                            g(q)
                        }
                    }
                    ;
                    q.src = p;
                    de(function() {
                        g(q)
                    }, 1E4)
                } else
                    return m()
            }
        });
        var b = h.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {}
        ,
        b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}
        ,
        b.exitPointerLock = b.exitPointerLock.bind(document),
        document.addEventListener("pointerlockchange", a, !1),
        document.addEventListener("mozpointerlockchange", a, !1),
        document.addEventListener("webkitpointerlockchange", a, !1),
        document.addEventListener("mspointerlockchange", a, !1),
        h.elementPointerLock && b.addEventListener("click", function(c) {
            !ge && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(),
            c.preventDefault())
        }, !1))
    }
}
function ne(a, b, c, d) {
    if (b && h.tk && a == h.canvas)
        return h.tk;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            Rl: 2
        };
        if (d)
            for (var g in d)
                f[g] = d[g];
        if ("undefined" !== typeof oe && (e = pe(a, f)))
            var m = qe[e].rk
    } else
        m = a.getContext("2d");
    if (!m)
        return null;
    c && (b || assert("undefined" === typeof T, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
    h.tk = m,
    b && re(e),
    h.Pn = b,
    he.forEach(function(n) {
        n()
    }),
    ud());
    return m
}
var se = !1
  , te = void 0
  , ue = void 0;
function ve(a, b) {
    function c() {
        fe = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = we,
        te && d.requestPointerLock(),
        fe = !0,
        ue ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = M[SDL.screen >> 2] | 8388608),
        xe(h.canvas),
        ye()) : xe(d)) : (f.parentNode.insertBefore(d, f),
        f.parentNode.removeChild(f),
        ue ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = M[SDL.screen >> 2] & -8388609),
        xe(h.canvas),
        ye()) : xe(d));
        if (h.onFullScreen)
            h.onFullScreen(fe);
        if (h.onFullscreen)
            h.onFullscreen(fe)
    }
    te = a;
    ue = b;
    "undefined" === typeof te && (te = !0);
    "undefined" === typeof ue && (ue = !1);
    var d = h.canvas;
    se || (se = !0,
    document.addEventListener("fullscreenchange", c, !1),
    document.addEventListener("mozfullscreenchange", c, !1),
    document.addEventListener("webkitfullscreenchange", c, !1),
    document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? function() {
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }
    : null) || (e.webkitRequestFullScreen ? function() {
        e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }
    : null);
    e.requestFullscreen()
}
function we() {
    if (!fe)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}
    ).apply(document, []);
    return !0
}
var ze = 0;
function Ud(a) {
    if ("function" === typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === ze)
            ze = b + 1E3 / 60;
        else
            for (; b + 2 >= ze; )
                ze += 1E3 / 60;
        setTimeout(a, Math.max(ze - b, 0))
    }
}
function me(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    }[a.substr(a.lastIndexOf(".") + 1)]
}
var Ae = [];
function ye() {
    var a = h.canvas;
    Ae.forEach(function(b) {
        b(a.width, a.height)
    })
}
function xe(a, b, c) {
    b && c ? (a.Sn = b,
    a.un = c) : (b = a.Sn,
    c = a.un);
    var d = b
      , e = c;
    h.forcedAspectRatio && 0 < h.forcedAspectRatio && (d / e < h.forcedAspectRatio ? d = Math.round(e * h.forcedAspectRatio) : e = Math.round(d / h.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e * f)
    }
    ue ? (a.width != d && (a.width = d),
    a.height != e && (a.height = e),
    "undefined" != typeof a.style && (a.style.removeProperty("width"),
    a.style.removeProperty("height"))) : (a.width != b && (a.width = b),
    a.height != c && (a.height = c),
    "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"),
    a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"),
    a.style.removeProperty("height"))))
}
var Be = {}, ie, je, ke, le, U = 12288, Ce = !1, De = 0, Ee = 0, Fe = 0, Ge = {
    alpha: !1,
    depth: !1,
    stencil: !1,
    antialias: !1
}, He = {}, Ie, Je = 1, Ke = [], Le = {}, V = [], Me = [], Ne = [], Oe = [], W = [], Pe = [], qe = [], Qe = [], Re = [], Se = [], Te = [], Ue = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8], Ve = {}, We = {};
function X(a) {
    Xe || (Xe = a)
}
function Ye(a) {
    for (var b = Je++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
function be(a) {
    return 32 - Math.clz32(0 === a ? 0 : a - 1)
}
function Ze(a) {
    a = be(a);
    var b = S.Zk[a];
    if (b)
        return b;
    b = T.getParameter(34965);
    S.Zk[a] = T.createBuffer();
    T.bindBuffer(34963, S.Zk[a]);
    T.bufferData(34963, 1 << a, 35048);
    T.bindBuffer(34963, b);
    return S.Zk[a]
}
function $e(a, b, c) {
    for (var d = "", e = 0; e < a; ++e) {
        var f = c ? G[c + 4 * e >> 2] : -1;
        d += K(G[b + 4 * e >> 2], 0 > f ? void 0 : f)
    }
    return d
}
function af(a) {
    bf = !1;
    for (var b = 0; b < S.Cm; ++b) {
        var c = S.pk[b];
        if (c.Lk && c.enabled) {
            bf = !0;
            var d = c.fl;
            d = 0 < d ? a * d : c.size * Ue[c.type - 5120] * a;
            var e = be(d);
            var f = S.$k[e]
              , g = S.Hk[e];
            S.Hk[e] = S.Hk[e] + 1 & 63;
            var m = f[g];
            m ? e = m : (m = T.getParameter(34964),
            f[g] = T.createBuffer(),
            T.bindBuffer(34962, f[g]),
            T.bufferData(34962, 1 << e, 35048),
            T.bindBuffer(34962, m),
            e = f[g]);
            T.bindBuffer(34962, e);
            T.bufferSubData(34962, 0, y.subarray(c.Wj, c.Wj + d));
            c.Dl.call(T, b, c.size, c.type, c.ul, c.fl, 0)
        }
    }
}
function cf() {
    bf && T.bindBuffer(34962, Ke[T.xk])
}
function pe(a, b) {
    a.tm || (a.tm = a.getContext,
    a.getContext = function(d, e) {
        e = a.tm(d, e);
        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
    }
    );
    var c = a.getContext("webgl2", b);
    return c ? df(c, b) : 0
}
function df(a, b) {
    var c = Ye(qe)
      , d = {
        sn: c,
        attributes: b,
        version: b.Rl,
        rk: a
    };
    a.canvas && (a.canvas.bl = d);
    qe[c] = d;
    ("undefined" === typeof b.Il || b.Il) && ef(d);
    d.Cm = d.rk.getParameter(34921);
    d.pk = [];
    for (a = 0; a < d.Cm; a++)
        d.pk[a] = {
            enabled: !1,
            Lk: !1,
            size: 0,
            type: 0,
            ul: 0,
            fl: 0,
            Wj: 0,
            Dl: null
        };
    a = be(2097152);
    d.Hk = [];
    d.xl = [];
    d.Hk.length = d.xl.length = a + 1;
    d.$k = [];
    d.gl = [];
    d.$k.length = d.gl.length = a + 1;
    d.Zk = [];
    d.Zk.length = a + 1;
    for (b = 0; b <= a; ++b) {
        d.Zk[b] = null;
        d.Hk[b] = d.xl[b] = 0;
        d.$k[b] = [];
        d.gl[b] = [];
        var e = d.$k[b]
          , f = d.gl[b];
        e.length = f.length = 64;
        for (var g = 0; 64 > g; ++g)
            e[g] = f[g] = null
    }
    return c
}
function re(a) {
    S = qe[a];
    h.tk = T = S && S.rk;
    return !(a && !T)
}
function ef(a) {
    a || (a = S);
    if (!a.xn) {
        a.xn = !0;
        var b = a.rk;
        b.bo = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
        b.jo = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
        2 <= a.version && (b.hk = b.getExtension("EXT_disjoint_timer_query_webgl2"));
        if (2 > a.version || !b.hk)
            b.hk = b.getExtension("EXT_disjoint_timer_query");
        b.ko = b.getExtension("WEBGL_multi_draw");
        (b.getSupportedExtensions() || []).forEach(function(c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
        })
    }
}
var oe = {}, Xe, S, bf, ff = [];
function gf(a, b, c) {
    ff.length = 0;
    var d;
    for (c >>= 2; d = y[b++]; )
        (d = 105 > d) && c & 1 && c++,
        ff.push(d ? eb[c++ >> 1] : G[c]),
        ++c;
    return Sb[a].apply(null, ff)
}
var hf = {}
  , jf = 0;
function kf() {
    var a = jf;
    jf++;
    return a
}
var lf = 0;
function mf() {
    for (var a = nf.length - 1; 0 <= a; --a)
        of(a);
    nf = [];
    pf = []
}
var pf = [];
function qf(a, b, c) {
    function d(g, m) {
        if (g.length != m.length)
            return !1;
        for (var n in g)
            if (g[n] != m[n])
                return !1;
        return !0
    }
    for (var e in pf) {
        var f = pf[e];
        if (f.dm == a && d(f.im, c))
            return
    }
    pf.push({
        dm: a,
        Jm: b,
        im: c
    });
    pf.sort(function(g, m) {
        return g.Jm < m.Jm
    })
}
function rf(a) {
    for (var b = 0; b < pf.length; ++b)
        pf[b].dm == a && (pf.splice(b, 1),
        --b)
}
function sf() {
    if (lf && tf.Kk)
        for (var a = 0; a < pf.length; ++a) {
            var b = pf[a];
            pf.splice(a, 1);
            --a;
            b.dm.apply(null, b.im)
        }
}
var nf = [];
function of(a) {
    var b = nf[a];
    b.target.removeEventListener(b.ek, b.dn, b.lk);
    nf.splice(a, 1)
}
function uf(a) {
    function b(d) {
        ++lf;
        tf = a;
        sf();
        a.nk(d);
        sf();
        --lf
    }
    if (a.mk)
        a.dn = b,
        a.target.addEventListener(a.ek, b, a.lk),
        nf.push(a),
        vf || (zb.push(mf),
        vf = !0);
    else
        for (var c = 0; c < nf.length; ++c)
            nf[c].target == a.target && nf[c].ek == a.ek && of(c--)
}
function wf(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}
function xf() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var yf = {}, vf, tf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf = {}, Mf = [0, "undefined" !== typeof document ? document : 0, "undefined" !== typeof window ? window : 0];
function Nf(a) {
    a = 2 < a ? K(a) : a;
    return Mf[a] || ("undefined" !== typeof document ? document.querySelector(a) : void 0)
}
function Of(a, b, c) {
    a = Nf(a);
    if (!a)
        return -4;
    G[b >> 2] = a.width;
    G[c >> 2] = a.height
}
function Pf(a) {
    return Vb(function() {
        var b = ua(8)
          , c = b + 4
          , d = ua(a.id.length + 1);
        u(a.id, d, a.id.length + 1);
        Of(d, b, c);
        return [G[b >> 2], G[c >> 2]]
    })
}
function Qf(a, b, c) {
    a = Nf(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
function Rf(a, b, c) {
    a.Zn ? Vb(function() {
        var d = ua(a.id.length + 1);
        u(a.id, d, a.id.length + 1);
        Qf(d, b, c)
    }) : (a.width = b,
    a.height = c)
}
function Sf(a) {
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b),
        document.removeEventListener("webkitfullscreenchange", b),
        Rf(a, d, e),
        a.style.width = f,
        a.style.height = g,
        a.style.backgroundColor = m,
        n || (document.body.style.backgroundColor = "white"),
        document.body.style.backgroundColor = n,
        a.style.paddingLeft = p,
        a.style.paddingRight = q,
        a.style.paddingTop = t,
        a.style.paddingBottom = v,
        a.style.marginLeft = r,
        a.style.marginRight = x,
        a.style.marginTop = z,
        a.style.marginBottom = J,
        document.body.style.margin = Q,
        document.documentElement.style.overflow = ia,
        document.body.scroll = $a,
        a.style.zm = A,
        a.bl && a.bl.rk.viewport(0, 0, d, e),
        Lf.kl && Tf.apply(null, [Lf.kl, 37, 0, Lf.lm]))
    }
    var c = Pf(a)
      , d = c[0]
      , e = c[1]
      , f = a.style.width
      , g = a.style.height
      , m = a.style.backgroundColor
      , n = document.body.style.backgroundColor
      , p = a.style.paddingLeft
      , q = a.style.paddingRight
      , t = a.style.paddingTop
      , v = a.style.paddingBottom
      , r = a.style.marginLeft
      , x = a.style.marginRight
      , z = a.style.marginTop
      , J = a.style.marginBottom
      , Q = document.body.style.margin
      , ia = document.documentElement.style.overflow
      , $a = document.body.scroll
      , A = a.style.zm;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
function Uf(a, b, c) {
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
function Vf(a) {
    return 0 > Mf.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}
function Wf(a, b) {
    if (0 != b.Zl || 0 != b.Gl) {
        Sf(a);
        var c = b.Jn ? innerWidth : screen.width
          , d = b.Jn ? innerHeight : screen.height
          , e = Vf(a)
          , f = e.width;
        e = e.height;
        var g = Pf(a)
          , m = g[0];
        g = g[1];
        3 == b.Zl ? (Uf(a, (d - e) / 2, (c - f) / 2),
        c = f,
        d = e) : 2 == b.Zl && (c * g < m * d ? (f = g * c / m,
        Uf(a, (d - f) / 2, 0),
        d = f) : (f = m * d / g,
        Uf(a, 0, (c - f) / 2),
        c = f));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.fn && (a.style.zm = "pixelated");
        f = 2 == b.Gl ? devicePixelRatio : 1;
        0 != b.Gl && (c = c * f | 0,
        d = d * f | 0,
        Rf(a, c, d),
        a.bl && a.bl.rk.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return xf() ? -3 : -1;
    Lf = b;
    b.kl && Tf.apply(null, [b.kl, 37, 0, b.lm]);
    return 0
}
function Xf(a) {
    if (a.requestPointerLock)
        a.requestPointerLock();
    else if (a.sl)
        a.sl();
    else
        return document.body.requestPointerLock || document.body.sl ? -3 : -1;
    return 0
}
function Yf(a, b) {
    eb[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        eb[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        eb[a + 8 * c + 528 >> 3] = "object" === typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        G[a + 4 * c + 1040 >> 2] = "object" === typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    G[a + 1296 >> 2] = b.connected;
    G[a + 1300 >> 2] = b.index;
    G[a + 8 >> 2] = b.axes.length;
    G[a + 12 >> 2] = b.buttons.length;
    u(b.id, a + 1304, 64);
    u(b.mapping, a + 1368, 64)
}
var Zf = [];
function $f(a) {
    switch (a) {
    case 34962:
        a = 34964;
        break;
    case 34963:
        a = 34965;
        break;
    case 35051:
        a = 35053;
        break;
    case 35052:
        a = 35055;
        break;
    case 35982:
        a = 35983;
        break;
    case 36662:
        a = 36662;
        break;
    case 36663:
        a = 36663;
        break;
    case 35345:
        a = 35368
    }
    return (a = T.getParameter(a)) ? a.name | 0 : 0
}
function ag(a) {
    switch (a) {
    case 34962:
    case 34963:
    case 36662:
    case 36663:
    case 35051:
    case 35052:
    case 35882:
    case 35982:
    case 35345:
        return !0;
    default:
        return !1
    }
}
function bg(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var f = T[c]()
          , g = f && Ye(d);
        f ? (f.name = g,
        d[g] = f) : X(1282);
        G[b + 4 * e >> 2] = g
    }
}
function cg(a, b, c, d, e, f, g, m) {
    b = V[b];
    if (a = T[a](b, c))
        d = m && u(a.name, m, d),
        e && (G[e >> 2] = d),
        f && (G[f >> 2] = a.size),
        g && (G[g >> 2] = a.type)
}
function dg(a, b) {
    M[a >> 2] = b;
    M[a + 4 >> 2] = (b - M[a >> 2]) / 4294967296
}
function eg(a, b, c) {
    if (b) {
        var d = void 0;
        switch (a) {
        case 36346:
            d = 1;
            break;
        case 36344:
            0 != c && 1 != c && X(1280);
            return;
        case 34814:
        case 36345:
            d = 0;
            break;
        case 34466:
            var e = T.getParameter(34467);
            d = e ? e.length : 0;
            break;
        case 33309:
            if (2 > S.version) {
                X(1282);
                return
            }
            d = 2 * (T.getSupportedExtensions() || []).length;
            break;
        case 33307:
        case 33308:
            if (2 > S.version) {
                X(1280);
                return
            }
            d = 33307 == a ? 3 : 0
        }
        if (void 0 === d)
            switch (e = T.getParameter(a),
            typeof e) {
            case "number":
                d = e;
                break;
            case "boolean":
                d = e ? 1 : 0;
                break;
            case "string":
                X(1280);
                return;
            case "object":
                if (null === e)
                    switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 36662:
                    case 36663:
                    case 35053:
                    case 35055:
                    case 36010:
                    case 35097:
                    case 35869:
                    case 32874:
                    case 36389:
                    case 35983:
                    case 35368:
                    case 34068:
                        d = 0;
                        break;
                    default:
                        X(1280);
                        return
                    }
                else {
                    if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                        for (a = 0; a < e.length; ++a)
                            switch (c) {
                            case 0:
                                G[b + 4 * a >> 2] = e[a];
                                break;
                            case 2:
                                I[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                F[b + a >> 0] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (f) {
                        X(1280);
                        k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                        return
                    }
                }
                break;
            default:
                X(1280);
                k("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                return
            }
        switch (c) {
        case 1:
            dg(b, d);
            break;
        case 0:
            G[b >> 2] = d;
            break;
        case 2:
            I[b >> 2] = d;
            break;
        case 4:
            F[b >> 0] = d ? 1 : 0
        }
    } else
        X(1281)
}
function fg(a, b, c, d) {
    if (c) {
        b = T.getIndexedParameter(a, b);
        switch (typeof b) {
        case "boolean":
            a = b ? 1 : 0;
            break;
        case "number":
            a = b;
            break;
        case "object":
            if (null === b)
                switch (a) {
                case 35983:
                case 35368:
                    a = 0;
                    break;
                default:
                    X(1280);
                    return
                }
            else if (b instanceof WebGLBuffer)
                a = b.name | 0;
            else {
                X(1280);
                return
            }
            break;
        default:
            X(1280);
            return
        }
        switch (d) {
        case 1:
            dg(c, a);
            break;
        case 0:
            G[c >> 2] = a;
            break;
        case 2:
            I[c >> 2] = a;
            break;
        case 4:
            F[c >> 0] = a ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
        }
    } else
        X(1281)
}
function gg(a) {
    var b = aa(a) + 1
      , c = l(b);
    u(a, c, b);
    return c
}
function hg(a) {
    return "]" == a.slice(-1) && a.lastIndexOf("[")
}
function ig(a) {
    var b = a.Qk, c = a.Cl, d;
    if (!b)
        for (a.Qk = b = {},
        a.Rm = {},
        d = 0; d < T.getProgramParameter(a, 35718); ++d) {
            var e = T.getActiveUniform(a, d);
            var f = e.name;
            e = e.size;
            var g = hg(f);
            g = 0 < g ? f.slice(0, g) : f;
            var m = a.Bl;
            a.Bl += e;
            c[g] = [e, m];
            for (f = 0; f < e; ++f)
                b[m] = f,
                a.Rm[m++] = g
        }
}
function Y(a) {
    var b = T.om;
    if (b) {
        var c = b.Qk[a];
        "number" === typeof c && (b.Qk[a] = c = T.getUniformLocation(b, b.Rm[a] + (0 < c ? "[" + c + "]" : "")));
        return c
    }
    X(1282)
}
function jg(a, b, c, d) {
    if (c)
        if (a = V[a],
        ig(a),
        a = T.getUniform(a, Y(b)),
        "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                G[c >> 2] = a;
                break;
            case 2:
                I[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    G[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    I[c + 4 * b >> 2] = a[b]
                }
    else
        X(1281)
}
function kg(a, b, c, d) {
    if (c)
        if (S.pk[a].enabled && k("glGetVertexAttrib*v on client-side array: not supported, bad data returned"),
        a = T.getVertexAttrib(a, b),
        34975 == b)
            G[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                G[c >> 2] = a;
                break;
            case 2:
                I[c >> 2] = a;
                break;
            case 5:
                G[c >> 2] = Math.fround(a)
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    G[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    I[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    G[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        X(1281)
}
function lg(a) {
    a -= 5120;
    return 0 == a ? F : 1 == a ? y : 2 == a ? cb : 4 == a ? G : 6 == a ? I : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? M : L
}
function mg(a) {
    return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
}
function ng(a, b) {
    if (!xf())
        return -1;
    a = Nf(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? lf && tf.Kk ? Wf(a, b) : b.bn ? (qf(Wf, 1, [a, b]),
    1) : -2 : -3 : -4
}
function og(a, b) {
    var c = {
        target: Nf(2),
        ek: "beforeunload",
        mk: b,
        nk: function(d) {
            d = d || event;
            var e = Tf.apply(null, [b, 28, 0, a]);
            e && (e = K(e));
            if (e)
                return d.preventDefault(),
                d.returnValue = e
        },
        lk: !0
    };
    uf(c)
}
function pg(a, b, c, d, e, f) {
    Af || (Af = l(256));
    a = {
        target: Nf(a),
        ek: f,
        mk: d,
        nk: function(g) {
            g = g || event;
            var m = g.target.id ? g.target.id : ""
              , n = Af;
            u(wf(g.target), n + 0, 128);
            u(m, n + 128, 128);
            Tf.apply(null, [d, e, n, b]) && g.preventDefault()
        },
        lk: c
    };
    uf(a)
}
function qg(a, b, c, d, e) {
    Cf || (Cf = l(280));
    uf({
        target: a,
        ek: e,
        mk: d,
        nk: function(f) {
            f = f || event;
            var g = Cf
              , m = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              , n = !!m;
            G[g >> 2] = n;
            G[g + 4 >> 2] = xf();
            var p = n ? m : Bf
              , q = p && p.id ? p.id : "";
            u(wf(p), g + 8, 128);
            u(q, g + 136, 128);
            G[g + 264 >> 2] = p ? p.clientWidth : 0;
            G[g + 268 >> 2] = p ? p.clientHeight : 0;
            G[g + 272 >> 2] = screen.width;
            G[g + 276 >> 2] = screen.height;
            n && (Bf = m);
            Tf.apply(null, [d, 19, g, b]) && f.preventDefault()
        },
        lk: c
    })
}
function rg(a, b, c, d, e) {
    Df || (Df = l(1432));
    b = {
        target: Nf(2),
        Kk: !0,
        ek: e,
        mk: c,
        nk: function(f) {
            f = f || event;
            var g = Df;
            Yf(g, f.gamepad);
            Tf.apply(null, [c, d, g, a]) && f.preventDefault()
        },
        lk: b
    };
    uf(b)
}
function sg(a, b, c, d, e, f) {
    Ef || (Ef = l(176));
    a = {
        target: Nf(a),
        Kk: !0,
        ek: f,
        mk: d,
        nk: function(g) {
            var m = Ef;
            eb[m >> 3] = g.timeStamp;
            var n = m >> 2;
            G[n + 2] = g.location;
            G[n + 3] = g.ctrlKey;
            G[n + 4] = g.shiftKey;
            G[n + 5] = g.altKey;
            G[n + 6] = g.metaKey;
            G[n + 7] = g.repeat;
            G[n + 8] = g.charCode;
            G[n + 9] = g.keyCode;
            G[n + 10] = g.which;
            u(g.key || "", m + 44, 32);
            u(g.code || "", m + 76, 32);
            u(g.char || "", m + 108, 32);
            u(g.locale || "", m + 140, 32);
            Tf.apply(null, [d, e, m, b]) && g.preventDefault()
        },
        lk: c
    };
    uf(a)
}
function tg(a, b, c) {
    eb[a >> 3] = b.timeStamp;
    a >>= 2;
    G[a + 2] = b.screenX;
    G[a + 3] = b.screenY;
    G[a + 4] = b.clientX;
    G[a + 5] = b.clientY;
    G[a + 6] = b.ctrlKey;
    G[a + 7] = b.shiftKey;
    G[a + 8] = b.altKey;
    G[a + 9] = b.metaKey;
    cb[2 * a + 20] = b.button;
    cb[2 * a + 21] = b.buttons;
    G[a + 11] = b.movementX;
    G[a + 12] = b.movementY;
    c = Vf(c);
    G[a + 13] = b.clientX - c.left;
    G[a + 14] = b.clientY - c.top
}
function ug(a, b, c, d, e, f) {
    Ff || (Ff = l(72));
    a = Nf(a);
    uf({
        target: a,
        Kk: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        ek: f,
        mk: d,
        nk: function(g) {
            g = g || event;
            tg(Ff, g, a);
            Tf.apply(null, [d, e, Ff, b]) && g.preventDefault()
        },
        lk: c
    })
}
function vg(a, b, c, d, e) {
    Gf || (Gf = l(260));
    uf({
        target: a,
        ek: e,
        mk: d,
        nk: function(f) {
            f = f || event;
            var g = Gf
              , m = document.pointerLockElement || document.Zj || document.sk || document.gk;
            G[g >> 2] = !!m;
            var n = m && m.id ? m.id : "";
            u(wf(m), g + 4, 128);
            u(n, g + 132, 128);
            Tf.apply(null, [d, 20, g, b]) && f.preventDefault()
        },
        lk: c
    })
}
function wg(a, b, c, d) {
    Hf || (Hf = l(36));
    a = Nf(a);
    uf({
        target: a,
        ek: "resize",
        mk: d,
        nk: function(e) {
            e = e || event;
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = Hf;
                    G[g >> 2] = e.detail;
                    G[g + 4 >> 2] = f.clientWidth;
                    G[g + 8 >> 2] = f.clientHeight;
                    G[g + 12 >> 2] = innerWidth;
                    G[g + 16 >> 2] = innerHeight;
                    G[g + 20 >> 2] = outerWidth;
                    G[g + 24 >> 2] = outerHeight;
                    G[g + 28 >> 2] = pageXOffset;
                    G[g + 32 >> 2] = pageYOffset;
                    Tf.apply(null, [d, 10, g, b]) && e.preventDefault()
                }
            }
        },
        lk: c
    })
}
function xg(a, b, c, d, e, f) {
    If || (If = l(1696));
    a = Nf(a);
    uf({
        target: a,
        Kk: "touchstart" == f || "touchend" == f,
        ek: f,
        mk: d,
        nk: function(g) {
            for (var m, n = {}, p = g.touches, q = 0; q < p.length; ++q)
                m = p[q],
                m.Am = m.Hm = 0,
                n[m.identifier] = m;
            for (q = 0; q < g.changedTouches.length; ++q)
                m = g.changedTouches[q],
                m.Am = 1,
                n[m.identifier] = m;
            for (q = 0; q < g.targetTouches.length; ++q)
                n[g.targetTouches[q].identifier].Hm = 1;
            p = If;
            eb[p >> 3] = g.timeStamp;
            var t = p >> 2;
            G[t + 3] = g.ctrlKey;
            G[t + 4] = g.shiftKey;
            G[t + 5] = g.altKey;
            G[t + 6] = g.metaKey;
            t += 7;
            var v = Vf(a)
              , r = 0;
            for (q in n)
                if (m = n[q],
                G[t] = m.identifier,
                G[t + 1] = m.screenX,
                G[t + 2] = m.screenY,
                G[t + 3] = m.clientX,
                G[t + 4] = m.clientY,
                G[t + 5] = m.pageX,
                G[t + 6] = m.pageY,
                G[t + 7] = m.Am,
                G[t + 8] = m.Hm,
                G[t + 9] = m.clientX - v.left,
                G[t + 10] = m.clientY - v.top,
                t += 13,
                31 < ++r)
                    break;
            G[p + 8 >> 2] = r;
            Tf.apply(null, [d, e, p, b]) && g.preventDefault()
        },
        lk: c
    })
}
function yg(a, b, c) {
    var d = Mf[1];
    Jf || (Jf = l(8));
    uf({
        target: d,
        ek: "visibilitychange",
        mk: c,
        nk: function(e) {
            e = e || event;
            var f = Jf
              , g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            G[f >> 2] = document.hidden;
            G[f + 4 >> 2] = g;
            Tf.apply(null, [c, 21, f, a]) && e.preventDefault()
        },
        lk: b
    })
}
function zg(a, b, c, d, e, f) {
    a = {
        target: Nf(a),
        ek: f,
        mk: d,
        nk: function(g) {
            g = g || event;
            Tf.apply(null, [d, e, 0, b]) && g.preventDefault()
        },
        lk: c
    };
    uf(a)
}
function Ag(a, b, c, d) {
    Kf || (Kf = l(104));
    uf({
        target: a,
        Kk: !0,
        ek: "wheel",
        mk: d,
        nk: function(e) {
            e = e || event;
            var f = Kf;
            tg(f, e, a);
            eb[f + 72 >> 3] = e.deltaX;
            eb[f + 80 >> 3] = e.deltaY;
            eb[f + 88 >> 3] = e.deltaZ;
            G[f + 96 >> 2] = e.deltaMode;
            Tf.apply(null, [d, 9, f, b]) && e.preventDefault()
        },
        lk: c
    })
}
var Bg = [];
function Cg(a, b) {
    M[a >> 2] = b;
    M[a + 4 >> 2] = b / 4294967296 | 0
}
var Dg;
function Eg(a, b, c, d, e) {
    function f(ba) {
        var ca = 0
          , P = 0;
        ba && (P = A.response ? A.response.byteLength : 0,
        ca = l(P),
        y.set(new Uint8Array(A.response), ca));
        M[a + 12 >> 2] = ca;
        Cg(a + 16, P)
    }
    var g = M[a + 8 >> 2];
    if (g) {
        var m = K(g)
          , n = a + 112
          , p = K(n);
        p || (p = "GET");
        var q = M[n + 52 >> 2]
          , t = M[n + 56 >> 2]
          , v = !!M[n + 60 >> 2]
          , r = M[n + 68 >> 2]
          , x = M[n + 72 >> 2];
        g = M[n + 76 >> 2];
        var z = M[n + 80 >> 2]
          , J = M[n + 84 >> 2];
        n = M[n + 88 >> 2];
        var Q = !!(q & 1)
          , ia = !!(q & 2);
        q = !!(q & 64);
        r = r ? K(r) : void 0;
        x = x ? K(x) : void 0;
        var $a = z ? K(z) : void 0
          , A = new XMLHttpRequest;
        A.withCredentials = v;
        A.open(p, m, !q, r, x);
        q || (A.timeout = t);
        A.Zj = m;
        A.responseType = "arraybuffer";
        z && A.overrideMimeType($a);
        if (g)
            for (; ; ) {
                p = M[g >> 2];
                if (!p)
                    break;
                m = M[g + 4 >> 2];
                if (!m)
                    break;
                g += 8;
                p = K(p);
                m = K(m);
                A.setRequestHeader(p, m)
            }
        Bg.push(A);
        M[a + 0 >> 2] = Bg.length;
        g = J && n ? y.slice(J, J + n) : null;
        A.onload = function(ba) {
            f(Q && !ia);
            var ca = A.response ? A.response.byteLength : 0;
            Cg(a + 24, 0);
            ca && Cg(a + 32, ca);
            L[a + 40 >> 1] = A.readyState;
            L[a + 42 >> 1] = A.status;
            A.statusText && u(A.statusText, a + 44, 64);
            200 <= A.status && 300 > A.status ? b && b(a, A, ba) : c && c(a, A, ba)
        }
        ;
        A.onerror = function(ba) {
            f(Q);
            var ca = A.status;
            Cg(a + 24, 0);
            Cg(a + 32, A.response ? A.response.byteLength : 0);
            L[a + 40 >> 1] = A.readyState;
            L[a + 42 >> 1] = ca;
            c && c(a, A, ba)
        }
        ;
        A.ontimeout = function(ba) {
            c && c(a, A, ba)
        }
        ;
        A.onprogress = function(ba) {
            var ca = Q && ia && A.response ? A.response.byteLength : 0
              , P = 0;
            Q && ia && (P = l(ca),
            y.set(new Uint8Array(A.response), P));
            M[a + 12 >> 2] = P;
            Cg(a + 16, ca);
            Cg(a + 24, ba.loaded - ca);
            Cg(a + 32, ba.total);
            L[a + 40 >> 1] = A.readyState;
            3 <= A.readyState && 0 === A.status && 0 < ba.loaded && (A.status = 200);
            L[a + 42 >> 1] = A.status;
            A.statusText && u(A.statusText, a + 44, 64);
            d && d(a, A, ba);
            P && ea(P)
        }
        ;
        A.onreadystatechange = function(ba) {
            L[a + 40 >> 1] = A.readyState;
            2 <= A.readyState && (L[a + 42 >> 1] = A.status);
            e && e(a, A, ba)
        }
        ;
        try {
            A.send(g)
        } catch (ba) {
            c && c(a, A, ba)
        }
    } else
        c(a, 0, "no url specified!")
}
function Fg(a, b, c, d) {
    var e = Dg;
    if (e) {
        var f = M[a + 112 + 64 >> 2];
        f || (f = M[a + 8 >> 2]);
        var g = K(f);
        try {
            var m = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(b, g);
            m.onsuccess = function() {
                L[a + 40 >> 1] = 4;
                L[a + 42 >> 1] = 200;
                u("OK", a + 44, 64);
                c(a, 0, g)
            }
            ;
            m.onerror = function(n) {
                L[a + 40 >> 1] = 4;
                L[a + 42 >> 1] = 413;
                u("Payload Too Large", a + 44, 64);
                d(a, 0, n)
            }
        } catch (n) {
            d(a, 0, n)
        }
    } else
        d(a, 0, "IndexedDB not available!")
}
function Gg(a, b, c) {
    var d = Dg;
    if (d) {
        var e = M[a + 112 + 64 >> 2];
        e || (e = M[a + 8 >> 2]);
        e = K(e);
        try {
            var f = d.transaction(["FILES"], "readonly").objectStore("FILES").get(e);
            f.onsuccess = function(g) {
                if (g.target.result) {
                    g = g.target.result;
                    var m = g.byteLength || g.length
                      , n = l(m);
                    y.set(new Uint8Array(g), n);
                    M[a + 12 >> 2] = n;
                    Cg(a + 16, m);
                    Cg(a + 24, 0);
                    Cg(a + 32, m);
                    L[a + 40 >> 1] = 4;
                    L[a + 42 >> 1] = 200;
                    u("OK", a + 44, 64);
                    b(a, 0, g)
                } else
                    L[a + 40 >> 1] = 4,
                    L[a + 42 >> 1] = 404,
                    u("Not Found", a + 44, 64),
                    c(a, 0, "no data")
            }
            ;
            f.onerror = function(g) {
                L[a + 40 >> 1] = 4;
                L[a + 42 >> 1] = 404;
                u("Not Found", a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else
        c(a, 0, "IndexedDB not available!")
}
function Hg(a, b, c) {
    var d = Dg;
    if (d) {
        var e = M[a + 112 + 64 >> 2];
        e || (e = M[a + 8 >> 2]);
        e = K(e);
        try {
            var f = d.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
            f.onsuccess = function(g) {
                g = g.target.result;
                M[a + 12 >> 2] = 0;
                Cg(a + 16, 0);
                Cg(a + 24, 0);
                Cg(a + 32, 0);
                L[a + 40 >> 1] = 4;
                L[a + 42 >> 1] = 200;
                u("OK", a + 44, 64);
                b(a, 0, g)
            }
            ;
            f.onerror = function(g) {
                L[a + 40 >> 1] = 4;
                L[a + 42 >> 1] = 404;
                u("Not Found", a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else
        c(a, 0, "IndexedDB not available!")
}
var Ig = ["default", "low-power", "high-performance"]
  , Jg = [null]
  , Z = null
  , Kg = {};
function Lg() {
    if (!Mg) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: Ia || "./this.program"
        }, b;
        for (b in Kg)
            void 0 === Kg[b] ? delete a[b] : a[b] = Kg[b];
        var c = [];
        for (b in a)
            c.push(b + "=" + a[b]);
        Mg = c
    }
    return Mg
}
var Mg;
function Ng(a) {
    return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
}
function Og(a, b) {
    for (var c = 0, d = 0; d <= b; c += a[d++])
        ;
    return c
}
var Pg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , Qg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Rg(a, b) {
    for (a = new Date(a.getTime()); 0 < b; ) {
        var c = a.getMonth()
          , d = (Ng(a.getFullYear()) ? Pg : Qg)[c];
        if (b > d - a.getDate())
            b -= d - a.getDate() + 1,
            a.setDate(1),
            11 > c ? a.setMonth(c + 1) : (a.setMonth(0),
            a.setFullYear(a.getFullYear() + 1));
        else {
            a.setDate(a.getDate() + b);
            break
        }
    }
    return a
}
function Sg(a, b, c, d) {
    function e(r, x, z) {
        for (r = "number" === typeof r ? r.toString() : r || ""; r.length < x; )
            r = z[0] + r;
        return r
    }
    function f(r, x) {
        return e(r, x, "0")
    }
    function g(r, x) {
        function z(Q) {
            return 0 > Q ? -1 : 0 < Q ? 1 : 0
        }
        var J;
        0 === (J = z(r.getFullYear() - x.getFullYear())) && 0 === (J = z(r.getMonth() - x.getMonth())) && (J = z(r.getDate() - x.getDate()));
        return J
    }
    function m(r) {
        switch (r.getDay()) {
        case 0:
            return new Date(r.getFullYear() - 1,11,29);
        case 1:
            return r;
        case 2:
            return new Date(r.getFullYear(),0,3);
        case 3:
            return new Date(r.getFullYear(),0,2);
        case 4:
            return new Date(r.getFullYear(),0,1);
        case 5:
            return new Date(r.getFullYear() - 1,11,31);
        case 6:
            return new Date(r.getFullYear() - 1,11,30)
        }
    }
    function n(r) {
        r = Rg(new Date(r.kk + 1900,0,1), r.Al);
        var x = new Date(r.getFullYear() + 1,0,4)
          , z = m(new Date(r.getFullYear(),0,4));
        x = m(x);
        return 0 >= g(z, r) ? 0 >= g(x, r) ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
    }
    var p = G[d + 40 >> 2];
    d = {
        Mn: G[d >> 2],
        Ln: G[d + 4 >> 2],
        yl: G[d + 8 >> 2],
        hl: G[d + 12 >> 2],
        al: G[d + 16 >> 2],
        kk: G[d + 20 >> 2],
        zl: G[d + 24 >> 2],
        Al: G[d + 28 >> 2],
        qo: G[d + 32 >> 2],
        Kn: G[d + 36 >> 2],
        Nn: p ? K(p) : ""
    };
    c = K(c);
    p = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var q in p)
        c = c.replace(new RegExp(q,"g"), p[q]);
    var t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      , v = "January February March April May June July August September October November December".split(" ");
    p = {
        "%a": function(r) {
            return t[r.zl].substring(0, 3)
        },
        "%A": function(r) {
            return t[r.zl]
        },
        "%b": function(r) {
            return v[r.al].substring(0, 3)
        },
        "%B": function(r) {
            return v[r.al]
        },
        "%C": function(r) {
            return f((r.kk + 1900) / 100 | 0, 2)
        },
        "%d": function(r) {
            return f(r.hl, 2)
        },
        "%e": function(r) {
            return e(r.hl, 2, " ")
        },
        "%g": function(r) {
            return n(r).toString().substring(2)
        },
        "%G": function(r) {
            return n(r)
        },
        "%H": function(r) {
            return f(r.yl, 2)
        },
        "%I": function(r) {
            r = r.yl;
            0 == r ? r = 12 : 12 < r && (r -= 12);
            return f(r, 2)
        },
        "%j": function(r) {
            return f(r.hl + Og(Ng(r.kk + 1900) ? Pg : Qg, r.al - 1), 3)
        },
        "%m": function(r) {
            return f(r.al + 1, 2)
        },
        "%M": function(r) {
            return f(r.Ln, 2)
        },
        "%n": function() {
            return "\n"
        },
        "%p": function(r) {
            return 0 <= r.yl && 12 > r.yl ? "AM" : "PM"
        },
        "%S": function(r) {
            return f(r.Mn, 2)
        },
        "%t": function() {
            return "\t"
        },
        "%u": function(r) {
            return r.zl || 7
        },
        "%U": function(r) {
            var x = new Date(r.kk + 1900,0,1)
              , z = 0 === x.getDay() ? x : Rg(x, 7 - x.getDay());
            r = new Date(r.kk + 1900,r.al,r.hl);
            return 0 > g(z, r) ? f(Math.ceil((31 - z.getDate() + (Og(Ng(r.getFullYear()) ? Pg : Qg, r.getMonth() - 1) - 31) + r.getDate()) / 7), 2) : 0 === g(z, x) ? "01" : "00"
        },
        "%V": function(r) {
            var x = new Date(r.kk + 1901,0,4)
              , z = m(new Date(r.kk + 1900,0,4));
            x = m(x);
            var J = Rg(new Date(r.kk + 1900,0,1), r.Al);
            return 0 > g(J, z) ? "53" : 0 >= g(x, J) ? "01" : f(Math.ceil((z.getFullYear() < r.kk + 1900 ? r.Al + 32 - z.getDate() : r.Al + 1 - z.getDate()) / 7), 2)
        },
        "%w": function(r) {
            return r.zl
        },
        "%W": function(r) {
            var x = new Date(r.kk,0,1)
              , z = 1 === x.getDay() ? x : Rg(x, 0 === x.getDay() ? 1 : 7 - x.getDay() + 1);
            r = new Date(r.kk + 1900,r.al,r.hl);
            return 0 > g(z, r) ? f(Math.ceil((31 - z.getDate() + (Og(Ng(r.getFullYear()) ? Pg : Qg, r.getMonth() - 1) - 31) + r.getDate()) / 7), 2) : 0 === g(z, x) ? "01" : "00"
        },
        "%y": function(r) {
            return (r.kk + 1900).toString().substring(2)
        },
        "%Y": function(r) {
            return r.kk + 1900
        },
        "%z": function(r) {
            r = r.Kn;
            var x = 0 <= r;
            r = Math.abs(r) / 60;
            return (x ? "+" : "-") + String("0000" + (r / 60 * 100 + r % 60)).slice(-4)
        },
        "%Z": function(r) {
            return r.Nn
        },
        "%%": function() {
            return "%"
        }
    };
    for (q in p)
        c.includes(q) && (c = c.replace(new RegExp(q,"g"), p[q](d)));
    q = yc(c, !1);
    if (q.length > b)
        return 0;
    F.set(q, a);
    return q.length - 1
}
function Tg(a) {
    try {
        a()
    } catch (b) {
        E(b)
    }
}
var Ug = 0
  , nb = null
  , Vg = []
  , Wg = {}
  , Xg = {}
  , Yg = 0
  , Zg = null
  , $g = [];
function ah(a) {
    var b = {}, c;
    for (c in a)
        (function(d) {
            var e = a[d];
            b[d] = "function" === typeof e ? function() {
                Vg.push(d);
                try {
                    return e.apply(null, arguments)
                } finally {
                    if (!hb) {
                        var f = Vg.pop();
                        assert(f === d);
                        nb && 1 === Ug && 0 === Vg.length && (Ug = 0,
                        Tg(h._asyncify_stop_unwind),
                        "undefined" !== typeof Fibers && Fibers.ro())
                    }
                }
            }
            : e
        }
        )(c);
    return b
}
function ob() {
    return new Promise(function(a, b) {
        Zg = {
            resolve: a,
            reject: b
        }
    }
    )
}
function bh() {
    var a = l(4108)
      , b = a + 12;
    G[a >> 2] = b;
    G[a + 4 >> 2] = b + 4096;
    b = Vg[0];
    var c = Wg[b];
    void 0 === c && (c = Yg++,
    Wg[b] = c,
    Xg[c] = b);
    G[a + 8 >> 2] = c;
    return a
}
function ch(a) {
    if (!hb)
        if (0 === Ug) {
            var b = !1
              , c = !1;
            a(function() {
                if (!hb && (b = !0,
                c)) {
                    Ug = 2;
                    Tg(function() {
                        h._asyncify_start_rewind(nb)
                    });
                    "undefined" !== typeof Be && Pd && ee();
                    var d = !1;
                    try {
                        var e = (0,
                        h.asm[Xg[G[nb + 8 >> 2]]])()
                    } catch (m) {
                        e = m,
                        d = !0
                    }
                    var f = !1;
                    if (!nb) {
                        var g = Zg;
                        g && (Zg = null,
                        (d ? g.reject : g.resolve)(e),
                        f = !0)
                    }
                    if (d && !f)
                        throw e;
                }
            });
            c = !0;
            b || (Ug = 1,
            nb = bh(),
            Tg(function() {
                h._asyncify_start_unwind(nb)
            }),
            "undefined" !== typeof Be && Pd && (Rd = null,
            Wd++))
        } else
            2 === Ug ? (Ug = 0,
            Tg(h._asyncify_stop_rewind),
            ea(nb),
            nb = null,
            $g.forEach(function(d) {
                ce(d)
            })) : E("invalid state: " + Ug)
}
function Tc(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.ak = a.ak;
    this.Ek = null;
    this.id = Jc++;
    this.name = b;
    this.mode = c;
    this.Tj = {};
    this.Vj = {};
    this.rdev = d
}
Object.defineProperties(Tc.prototype, {
    read: {
        get: function() {
            return 365 === (this.mode & 365)
        },
        set: function(a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function() {
            return 146 === (this.mode & 146)
        },
        set: function(a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    },
    zn: {
        get: function() {
            return C(this.mode)
        }
    },
    yn: {
        get: function() {
            return 8192 === (this.mode & 61440)
        }
    }
});
kd();
Kc = Array(4096);
Ob(B, "/");
Nb("/tmp");
Nb("/home");
Nb("/home/web_user");
(function() {
    Nb("/dev");
    wc(259, {
        read: function() {
            return 0
        },
        write: function(b, c, d, e) {
            return e
        }
    });
    cd("/dev/null", 259);
    vc(1280, zc);
    vc(1536, Ac);
    cd("/dev/tty", 1280);
    cd("/dev/tty1", 1536);
    var a = mc();
    qd("/dev", "random", a);
    qd("/dev", "urandom", a);
    Nb("/dev/shm");
    Nb("/dev/shm/tmp")
}
)();
(function() {
    Nb("/proc");
    var a = Nb("/proc/self");
    Nb("/proc/self/fd");
    Ob({
        ak: function() {
            var b = Cc(a, "fd", 16895, 73);
            b.Tj = {
                lookup: function(c, d) {
                    var e = Ic[+d];
                    if (!e)
                        throw new O(8);
                    c = {
                        parent: null,
                        ak: {
                            Fk: "fake"
                        },
                        Tj: {
                            readlink: function() {
                                return e.path
                            }
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
}
)();
h.FS_createPath = nd;
h.FS_createDataFile = pd;
h.FS_createPreloadedFile = td;
h.FS_createLazyFile = sd;
h.FS_createDevice = qd;
h.FS_unlink = Ea;
h.requestFullscreen = function(a, b) {
    ve(a, b)
}
;
h.requestAnimationFrame = function(a) {
    Ud(a)
}
;
h.setCanvasSize = function(a, b, c) {
    xe(h.canvas, a, b);
    c || ye()
}
;
h.pauseMainLoop = function() {
    Rd = null;
    Wd++
}
;
h.resumeMainLoop = function() {
    ee()
}
;
h.getUserMedia = function() {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
}
;
h.createContext = function(a, b, c, d) {
    return ne(a, b, c, d)
}
;
for (var T, dh = 0; 32 > dh; ++dh)
    Zf.push(Array(dh));
(function(a, b) {
    try {
        var c = indexedDB.open("emscripten_filesystem", 1)
    } catch (d) {
        b(d);
        return
    }
    c.onupgradeneeded = function(d) {
        d = d.target.result;
        d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
        d.createObjectStore("FILES")
    }
    ;
    c.onsuccess = function(d) {
        a(d.target.result)
    }
    ;
    c.onerror = function(d) {
        b(d)
    }
}
)(function(a) {
    Dg = a;
    Hb("library_fetch_init")
}, function() {
    Dg = !1;
    Hb("library_fetch_init")
});
"undefined" !== typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Gb("library_fetch_init");
function yc(a, b) {
    var c = Array(aa(a) + 1);
    a = rb(a, c, 0, c.length);
    b && (c.length = a);
    return c
}
var Ah = {
    Tb: function(a, b) {
        return Yb(a, b)
    },
    g: function(a) {
        return l(a + 16) + 16
    },
    Za: function(a) {
        a = new ac(a);
        var b = a.Ml();
        b.mn() || (b.Pm(!0),
        dc--);
        b.Qm();
        cc.push(a);
        b.Wm();
        return a.pn()
    },
    ja: function() {
        eh(0);
        var a = cc.pop()
          , b = a.Ml();
        if (b.Dn() && !b.qn()) {
            var c = b.nn();
            c && fh.apply(null, [c, b.pm]);
            ea((new $b(b.pm)).Wj)
        }
        a.sm();
        ec = 0
    },
    Ya: function() {
        var a = ec;
        if (!a)
            return Za = 0;
        var b = (new $b(a)).Nl()
          , c = new ac;
        c.Om(a);
        c.$l(a);
        if (!b)
            return Za = 0,
            c.Wj | 0;
        a = Array.prototype.slice.call(arguments);
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (0 === e || e === b)
                break;
            if (gh(e, b, c.wm()))
                return Za = e,
                c.Wj | 0
        }
        Za = b;
        return c.Wj | 0
    },
    q: function() {
        var a = ec;
        if (!a)
            return Za = 0;
        var b = (new $b(a)).Nl()
          , c = new ac;
        c.Om(a);
        c.$l(a);
        if (!b)
            return Za = 0,
            c.Wj | 0;
        a = Array.prototype.slice.call(arguments);
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (0 === e || e === b)
                break;
            if (gh(e, b, c.wm()))
                return Za = e,
                c.Wj | 0
        }
        Za = b;
        return c.Wj | 0
    },
    h: function(a, b, c) {
        (new $b(a)).wn(b, c);
        ec = a;
        dc++;
        throw a;
    },
    Rb: function(a, b) {
        a = new Date(1E3 * G[a >> 2]);
        G[b >> 2] = a.getUTCSeconds();
        G[b + 4 >> 2] = a.getUTCMinutes();
        G[b + 8 >> 2] = a.getUTCHours();
        G[b + 12 >> 2] = a.getUTCDate();
        G[b + 16 >> 2] = a.getUTCMonth();
        G[b + 20 >> 2] = a.getUTCFullYear() - 1900;
        G[b + 24 >> 2] = a.getUTCDay();
        G[b + 36 >> 2] = 0;
        G[b + 32 >> 2] = 0;
        G[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
        fc || (fc = sb("GMT"));
        G[b + 40 >> 2] = fc;
        return b
    },
    Qb: function(a, b) {
        kc();
        a = new Date(1E3 * G[a >> 2]);
        G[b >> 2] = a.getSeconds();
        G[b + 4 >> 2] = a.getMinutes();
        G[b + 8 >> 2] = a.getHours();
        G[b + 12 >> 2] = a.getDate();
        G[b + 16 >> 2] = a.getMonth();
        G[b + 20 >> 2] = a.getFullYear() - 1900;
        G[b + 24 >> 2] = a.getDay();
        var c = new Date(a.getFullYear(),0,1);
        G[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
        G[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
        var d = (new Date(a.getFullYear(),6,1)).getTimezoneOffset();
        c = c.getTimezoneOffset();
        a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0;
        G[b + 32 >> 2] = a;
        a = G[jc() + (a ? 4 : 0) >> 2];
        G[b + 40 >> 2] = a;
        return b
    },
    Xa: function(a) {
        a = new ac(a);
        var b = a.ol();
        ec || (ec = b);
        a.sm();
        throw b;
    },
    Vb: function(a) {
        try {
            a = K(a);
            var b = D(a, {
                Nk: !0
            });
            if (null === b.node)
                throw new O(44);
            if (!C(b.node.mode))
                throw new O(54);
            var c = Sc(b.node, "x");
            if (c)
                throw new O(c);
            sc = b.path;
            return 0
        } catch (d) {
            return "undefined" !== typeof vd && d instanceof O || E(d),
            -d.Xj
        }
    },
    La: function(a, b, c) {
        Id = c;
        try {
            var d = Kd(a);
            switch (b) {
            case 0:
                var e = Jd();
                return 0 > e ? -28 : ed(d.path, d.flags, 0, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = Jd(),
                d.flags |= e,
                0;
            case 12:
                return e = Jd(),
                cb[e + 0 >> 1] = 2,
                0;
            case 13:
            case 14:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return G[Zb() >> 2] = 28,
                -1;
            default:
                return -28
            }
        } catch (f) {
            return "undefined" !== typeof vd && f instanceof O || E(f),
            -f.Xj
        }
    },
    Sb: function(a, b, c) {
        try {
            var d = Kd(a);
            d.Ok || (d.Ok = wa(d.path));
            a = 0;
            for (var e = hd(d, 0, 1), f = Math.floor(e / 280); f < d.Ok.length && a + 280 <= c; ) {
                var g = d.Ok[f];
                if ("." === g) {
                    var m = d.id;
                    var n = 4
                } else if (".." === g)
                    m = D(d.path, {
                        parent: !0
                    }).id,
                    n = 4;
                else {
                    var p = Ec(d, g);
                    m = p.id;
                    n = 8192 === (p.mode & 61440) ? 2 : C(p.mode) ? 4 : 40960 === (p.mode & 61440) ? 10 : 8
                }
                db = [m >>> 0, (H = m,
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + a >> 2] = db[0];
                G[b + a + 4 >> 2] = db[1];
                db = [280 * (f + 1) >>> 0, (H = 280 * (f + 1),
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + a + 8 >> 2] = db[0];
                G[b + a + 12 >> 2] = db[1];
                cb[b + a + 16 >> 1] = 280;
                F[b + a + 18 >> 0] = n;
                u(g, b + a + 19, 256);
                a += 280;
                f += 1
            }
            hd(d, 280 * f, 0);
            return a
        } catch (q) {
            return "undefined" !== typeof vd && q instanceof O || E(q),
            -q.Xj
        }
    },
    Wb: function(a, b, c) {
        Id = c;
        try {
            var d = Kd(a);
            switch (b) {
            case 21509:
            case 21505:
                return d.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
                return d.tty ? 0 : -59;
            case 21519:
                if (!d.tty)
                    return -59;
                var e = Jd();
                return G[e >> 2] = 0;
            case 21520:
                return d.tty ? -28 : -59;
            case 21531:
                a = e = Jd();
                if (!d.Vj.pl)
                    throw new O(59);
                return d.Vj.pl(d, b, a);
            case 21523:
                return d.tty ? 0 : -59;
            case 21524:
                return d.tty ? 0 : -59;
            default:
                E("bad ioctl syscall " + b)
            }
        } catch (f) {
            return "undefined" !== typeof vd && f instanceof O || E(f),
            -f.Xj
        }
    },
    ac: function(a, b) {
        try {
            return a = K(a),
            a = va(a),
            "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1)),
            Nb(a, b),
            0
        } catch (c) {
            return "undefined" !== typeof vd && c instanceof O || E(c),
            -c.Xj
        }
    },
    Na: function(a, b, c) {
        Id = c;
        try {
            var d = K(a)
              , e = c ? Jd() : 0;
            return ed(d, b, e).fd
        } catch (f) {
            return "undefined" !== typeof vd && f instanceof O || E(f),
            -f.Xj
        }
    },
    Ub: function(a, b, c) {
        try {
            a = K(a);
            if (0 >= c)
                var d = -28;
            else {
                var e = Nc(a)
                  , f = Math.min(c, aa(e))
                  , g = F[b + f];
                u(e, b, c + 1);
                F[b + f] = g;
                d = f
            }
            return d
        } catch (m) {
            return "undefined" !== typeof vd && m instanceof O || E(m),
            -m.Xj
        }
    },
    Hb: function(a, b, c, d, e, f) {
        try {
            var g = wd(a)
              , m = g.Gk.Lm(g, c);
            if (!m)
                return 0;
            e && Ld(e, g.family, Hd(m.ck), m.port, f);
            y.set(m.buffer, b);
            return m.buffer.byteLength
        } catch (n) {
            return "undefined" !== typeof vd && n instanceof O || E(n),
            -n.Xj
        }
    },
    Yb: function(a, b) {
        try {
            a = K(a);
            b = K(b);
            var c = oc(a)
              , d = oc(b)
              , e = pc(a)
              , f = pc(b);
            var g = D(a, {
                parent: !0
            });
            var m = g.node;
            g = D(b, {
                parent: !0
            });
            var n = g.node;
            if (!m || !n)
                throw new O(44);
            if (m.ak !== n.ak)
                throw new O(75);
            var p = Ec(m, e)
              , q = tc(a, d);
            if ("." !== q.charAt(0))
                throw new O(28);
            q = tc(b, c);
            if ("." !== q.charAt(0))
                throw new O(55);
            try {
                var t = Ec(n, f)
            } catch (x) {}
            if (p !== t) {
                var v = C(p.mode)
                  , r = Xc(m, e, v);
                if (r)
                    throw new O(r);
                if (r = t ? Xc(n, f, v) : Wc(n, f))
                    throw new O(r);
                if (!m.Tj.rename)
                    throw new O(63);
                if (p.Ek || t && t.Ek)
                    throw new O(10);
                if (n !== m && (r = Sc(m, "w")))
                    throw new O(r);
                Rc(p);
                try {
                    m.Tj.rename(p, n, f)
                } catch (x) {
                    throw x;
                } finally {
                    Qc(p)
                }
            }
            return 0
        } catch (x) {
            return "undefined" !== typeof vd && x instanceof O || E(x),
            -x.Xj
        }
    },
    Zb: function(a) {
        try {
            return a = K(a),
            Da(a),
            0
        } catch (b) {
            return "undefined" !== typeof vd && b instanceof O || E(b),
            -b.Xj
        }
    },
    Ib: function(a, b, c, d, e, f) {
        try {
            var g = wd(a);
            if (0 === e)
                var m = null;
            else {
                var n = Ad(e, f);
                if (n.Xj)
                    throw new O(n.Xj);
                var p = n.ck;
                n.ck = (Gd[p] ? Gd[p] : null) || n.ck;
                m = n
            }
            return m ? g.Gk.Nm(g, F, b, c, m.ck, m.port) : jd(g.stream, F, b, c)
        } catch (q) {
            return "undefined" !== typeof vd && q instanceof O || E(q),
            -q.Xj
        }
    },
    $b: function(a, b) {
        try {
            a = K(a);
            a: {
                var c = xa;
                try {
                    var d = c(a)
                } catch (f) {
                    if (f && f.node && va(a) !== va(Oc(f.node))) {
                        var e = -54;
                        break a
                    }
                    throw f;
                }
                G[b >> 2] = d.dev;
                G[b + 4 >> 2] = 0;
                G[b + 8 >> 2] = d.ino;
                G[b + 12 >> 2] = d.mode;
                G[b + 16 >> 2] = d.nlink;
                G[b + 20 >> 2] = d.uid;
                G[b + 24 >> 2] = d.gid;
                G[b + 28 >> 2] = d.rdev;
                G[b + 32 >> 2] = 0;
                db = [d.size >>> 0, (H = d.size,
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + 40 >> 2] = db[0];
                G[b + 44 >> 2] = db[1];
                G[b + 48 >> 2] = 4096;
                G[b + 52 >> 2] = d.blocks;
                G[b + 56 >> 2] = d.atime.getTime() / 1E3 | 0;
                G[b + 60 >> 2] = 0;
                G[b + 64 >> 2] = d.mtime.getTime() / 1E3 | 0;
                G[b + 68 >> 2] = 0;
                G[b + 72 >> 2] = d.ctime.getTime() / 1E3 | 0;
                G[b + 76 >> 2] = 0;
                db = [d.ino >>> 0, (H = d.ino,
                1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
                G[b + 80 >> 2] = db[0];
                G[b + 84 >> 2] = db[1];
                e = 0
            }
            return e
        } catch (f) {
            return "undefined" !== typeof vd && f instanceof O || E(f),
            -f.Xj
        }
    },
    _b: function(a) {
        try {
            return a = K(a),
            Ea(a),
            0
        } catch (b) {
            return "undefined" !== typeof vd && b instanceof O || E(b),
            -b.Xj
        }
    },
    Nb: function() {
        E("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking")
    },
    lh: function(a) {
        delete Bg[a - 1]
    },
    mh: function(a, b, c) {
        a = Bg[a - 1].getAllResponseHeaders();
        var d = aa(a) + 1;
        u(a, b, c);
        return Math.min(d, c)
    },
    nh: function(a) {
        return aa(Bg[a - 1].getAllResponseHeaders()) + 1
    },
    Mb: function() {
        throw "longjmp";
    },
    U: function() {
        E("")
    },
    E: Yb,
    Gh: function(a) {
        if (12448 == a)
            return U = 12288,
            1;
        U = 12300;
        return 0
    },
    Jh: function(a, b, c, d, e) {
        if (62E3 != a)
            U = 12296,
            c = 0;
        else {
            if (b)
                for (; ; ) {
                    a = G[b >> 2];
                    if (12321 == a)
                        Ge.alpha = 0 < G[b + 4 >> 2];
                    else if (12325 == a)
                        Ge.depth = 0 < G[b + 4 >> 2];
                    else if (12326 == a)
                        Ge.stencil = 0 < G[b + 4 >> 2];
                    else if (12337 == a)
                        a = G[b + 4 >> 2],
                        Ge.antialias = 0 < a;
                    else if (12338 == a)
                        a = G[b + 4 >> 2],
                        Ge.antialias = 1 == a;
                    else if (12544 == a)
                        Ge.io = 12547 != G[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (G[e >> 2] = 1),
            c && 0 < d && (G[c >> 2] = 62002),
            U = 12288,
            c = 1) : (U = 12300,
            c = 0)
        }
        return c
    },
    xh: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        for (a = 1; ; ) {
            b = G[d >> 2];
            if (12440 == b)
                a = G[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return U = 12292,
                0;
            d += 8
        }
        if (2 > a || 3 < a)
            return U = 12293,
            0;
        Ge.Rl = a - 1;
        Ge.An = 0;
        Ie = pe(h.canvas, Ge);
        if (0 != Ie)
            return U = 12288,
            re(Ie),
            h.Pn = !0,
            he.forEach(function(e) {
                e()
            }),
            re(null),
            62004;
        U = 12297;
        return 0
    },
    zh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        U = 12288;
        return 62006
    },
    yh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62004 != b)
            return U = 12294,
            0;
        a = Ie;
        S === qe[a] && (S = null);
        if ("object" === typeof yf)
            for (var c = qe[a].rk.canvas, d = 0; d < nf.length; ++d)
                nf[d].target != c || of(d--);
        qe[a] && qe[a].rk.canvas && (qe[a].rk.canvas.bl = void 0);
        qe[a] = null;
        U = 12288;
        De == b && (De = 0);
        return 1
    },
    Ah: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62006 != b)
            return U = 12301,
            1;
        Ee == b && (Ee = 0);
        Fe == b && (Fe = 0);
        U = 12288;
        return 1
    },
    Kh: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (62002 != b)
            return U = 12293,
            0;
        if (!d)
            return U = 12300,
            0;
        U = 12288;
        switch (c) {
        case 12320:
            return G[d >> 2] = Ge.alpha ? 32 : 24,
            1;
        case 12321:
            return G[d >> 2] = Ge.alpha ? 8 : 0,
            1;
        case 12322:
            return G[d >> 2] = 8,
            1;
        case 12323:
            return G[d >> 2] = 8,
            1;
        case 12324:
            return G[d >> 2] = 8,
            1;
        case 12325:
            return G[d >> 2] = Ge.depth ? 24 : 0,
            1;
        case 12326:
            return G[d >> 2] = Ge.stencil ? 8 : 0,
            1;
        case 12327:
            return G[d >> 2] = 12344,
            1;
        case 12328:
            return G[d >> 2] = 62002,
            1;
        case 12329:
            return G[d >> 2] = 0,
            1;
        case 12330:
            return G[d >> 2] = 4096,
            1;
        case 12331:
            return G[d >> 2] = 16777216,
            1;
        case 12332:
            return G[d >> 2] = 4096,
            1;
        case 12333:
            return G[d >> 2] = 0,
            1;
        case 12334:
            return G[d >> 2] = 0,
            1;
        case 12335:
            return G[d >> 2] = 12344,
            1;
        case 12337:
            return G[d >> 2] = Ge.antialias ? 4 : 0,
            1;
        case 12338:
            return G[d >> 2] = Ge.antialias ? 1 : 0,
            1;
        case 12339:
            return G[d >> 2] = 4,
            1;
        case 12340:
            return G[d >> 2] = 12344,
            1;
        case 12341:
        case 12342:
        case 12343:
            return G[d >> 2] = -1,
            1;
        case 12345:
        case 12346:
            return G[d >> 2] = 0,
            1;
        case 12347:
            return G[d >> 2] = 0,
            1;
        case 12348:
            return G[d >> 2] = 1;
        case 12349:
        case 12350:
            return G[d >> 2] = 0,
            1;
        case 12351:
            return G[d >> 2] = 12430,
            1;
        case 12352:
            return G[d >> 2] = 4,
            1;
        case 12354:
            return G[d >> 2] = 0,
            1;
        default:
            return U = 12292,
            0
        }
    },
    nb: function() {
        U = 12288;
        return 62E3
    },
    wh: function() {
        return U
    },
    Hh: function(a, b, c) {
        if (62E3 == a)
            return b && (G[b >> 2] = 1),
            c && (G[c >> 2] = 4),
            Ce = !0,
            U = 12288,
            1;
        U = 12296;
        return 0
    },
    Bh: function(a, b, c, d) {
        if (62E3 != a)
            return U = 12296,
            0;
        if (0 != d && 62004 != d)
            return U = 12294,
            0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return U = 12301,
            0;
        re(d ? Ie : null);
        De = d;
        Fe = b;
        Ee = c;
        U = 12288;
        return 1
    },
    uh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        U = 12288;
        if (He[b])
            return He[b];
        switch (b) {
        case 12371:
            a = sb("Emscripten");
            break;
        case 12372:
            a = sb("1.4 Emscripten EGL");
            break;
        case 12373:
            a = sb("");
            break;
        case 12429:
            a = sb("OpenGL_ES");
            break;
        default:
            return U = 12300,
            0
        }
        return He[b] = a
    },
    Ch: function() {
        if (Ce)
            if (h.tk)
                if (h.tk.isContextLost())
                    U = 12302;
                else
                    return U = 12288,
                    1;
            else
                U = 12290;
        else
            U = 12289;
        return 0
    },
    Dh: function(a, b) {
        if (62E3 != a)
            return U = 12296,
            0;
        0 == b ? Md(0, 0) : Md(1, b);
        U = 12288;
        return 1
    },
    Ih: function(a) {
        if (62E3 != a)
            return U = 12296,
            0;
        Fe = Ee = De = 0;
        Ce = !1;
        U = 12288;
        return 1
    },
    Fh: function() {
        U = 12288;
        return 1
    },
    Eh: function() {
        U = 12288;
        return 1
    },
    D: function(a, b, c) {
        return gf(a, b, c)
    },
    c: gf,
    Rh: function(a, b, c, d, e, f, g, m) {
        function n() {
            if (g) {
                var v = 0;
                if (q.statusText) {
                    var r = aa(q.statusText) + 1;
                    v = ua(r);
                    u(q.statusText, v, r)
                }
                hh.apply(null, [g, t, d, q.status, v])
            }
        }
        var p = K(a);
        a = K(b);
        c = K(c);
        var q = new XMLHttpRequest;
        q.open(a, p, !0);
        q.responseType = "arraybuffer";
        var t = kf();
        q.onload = function() {
            if (200 <= q.status && 300 > q.status || 0 === q.status && "http" != p.substr(0, 4).toLowerCase()) {
                var v = new Uint8Array(q.response)
                  , r = l(v.length);
                y.set(v, r);
                f && hh.apply(null, [f, t, d, r, v.length]);
                e && ea(r)
            } else
                n();
            delete hf[t]
        }
        ;
        q.onerror = function() {
            n();
            delete hf[t]
        }
        ;
        q.onprogress = function(v) {
            m && hh.apply(null, [m, t, d, v.loaded, v.lengthComputable || void 0 === v.lengthComputable ? v.total : 0])
        }
        ;
        q.onabort = function() {
            delete hf[t]
        }
        ;
        "POST" == a ? (q.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        q.send(c)) : q.send(null);
        hf[t] = q;
        return t
    },
    rh: function() {
        if (!xf())
            return -1;
        rf(Wf);
        var a = Mf[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    },
    th: function() {
        rf(Xf);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else if (document.mi)
            document.mi();
        else
            return -1;
        return 0
    },
    Uh: Of,
    W: function() {
        return "number" === typeof devicePixelRatio && devicePixelRatio || 1
    },
    v: function(a, b, c) {
        a = Nf(a);
        if (!a)
            return -4;
        a = Vf(a);
        eb[b >> 3] = a.width;
        eb[c >> 3] = a.height;
        return 0
    },
    cb: function(a, b) {
        if (0 > a || a >= zf.length)
            return -5;
        if (!zf[a])
            return -7;
        Yf(b, zf[a]);
        return 0
    },
    Oa: Xb,
    qh: function() {
        return zf.length
    },
    Tg: function(a) {
        T.activeTexture(a)
    },
    Sg: function(a, b) {
        T.attachShader(V[a], W[b])
    },
    Xd: function(a, b) {
        T.beginQuery(a, Qe[b])
    },
    hh: function(a, b) {
        T.hk.beginQueryEXT(a, Qe[b])
    },
    zd: function(a) {
        T.beginTransformFeedback(a)
    },
    Rg: function(a, b, c) {
        T.bindAttribLocation(V[a], b, K(c))
    },
    Qg: function(a, b) {
        34962 == a ? T.xk = b : 34963 == a && (T.qk = b);
        35051 == a ? T.Mk = b : 35052 == a && (T.dk = b);
        T.bindBuffer(a, Ke[b])
    },
    wd: function(a, b, c) {
        T.bindBufferBase(a, b, Ke[c])
    },
    xd: function(a, b, c, d, e) {
        T.bindBufferRange(a, b, Ke[c], d, e)
    },
    Pg: function(a, b) {
        T.bindFramebuffer(a, Me[b])
    },
    Og: function(a, b) {
        T.bindRenderbuffer(a, Ne[b])
    },
    Dc: function(a, b) {
        T.bindSampler(a, Re[b])
    },
    Ng: function(a, b) {
        T.bindTexture(a, Oe[b])
    },
    vc: function(a, b) {
        T.bindTransformFeedback(a, Se[b])
    },
    Ed: function(a) {
        T.bindVertexArray(Pe[a]);
        a = T.getParameter(34965);
        T.qk = a ? a.name | 0 : 0
    },
    $g: function(a) {
        T.bindVertexArray(Pe[a]);
        a = T.getParameter(34965);
        T.qk = a ? a.name | 0 : 0
    },
    Mg: function(a, b, c, d) {
        T.blendColor(a, b, c, d)
    },
    Lg: function(a) {
        T.blendEquation(a)
    },
    Kg: function(a, b) {
        T.blendEquationSeparate(a, b)
    },
    Jg: function(a, b) {
        T.blendFunc(a, b)
    },
    Ig: function(a, b, c, d) {
        T.blendFuncSeparate(a, b, c, d)
    },
    Jd: function(a, b, c, d, e, f, g, m, n, p) {
        T.blitFramebuffer(a, b, c, d, e, f, g, m, n, p)
    },
    Hg: function(a, b, c, d) {
        c ? T.bufferData(a, y, d, c, b) : T.bufferData(a, b, d)
    },
    Gg: function(a, b, c, d) {
        T.bufferSubData(a, b, y, d, c)
    },
    Fg: function(a) {
        return T.checkFramebufferStatus(a)
    },
    Eg: function(a) {
        T.clear(a)
    },
    _c: function(a, b, c, d) {
        T.clearBufferfi(a, b, c, d)
    },
    $c: function(a, b, c) {
        T.clearBufferfv(a, b, I, c >> 2)
    },
    bd: function(a, b, c) {
        T.clearBufferiv(a, b, G, c >> 2)
    },
    ad: function(a, b, c) {
        T.clearBufferuiv(a, b, M, c >> 2)
    },
    Dg: function(a, b, c, d) {
        T.clearColor(a, b, c, d)
    },
    Cg: function(a) {
        T.clearDepth(a)
    },
    Bg: function(a) {
        T.clearStencil(a)
    },
    Mc: function(a, b, c, d) {
        return T.clientWaitSync(Te[a], b, (c >>> 0) + 4294967296 * d)
    },
    Ag: function(a, b, c, d) {
        T.colorMask(!!a, !!b, !!c, !!d)
    },
    zg: function(a) {
        T.compileShader(W[a])
    },
    yg: function(a, b, c, d, e, f, g, m) {
        T.dk ? T.compressedTexImage2D(a, b, c, d, e, f, g, m) : T.compressedTexImage2D(a, b, c, d, e, f, y, m, g)
    },
    ae: function(a, b, c, d, e, f, g, m, n) {
        T.dk ? T.compressedTexImage3D(a, b, c, d, e, f, g, m, n) : T.compressedTexImage3D(a, b, c, d, e, f, g, y, n, m)
    },
    xg: function(a, b, c, d, e, f, g, m, n) {
        T.dk ? T.compressedTexSubImage2D(a, b, c, d, e, f, g, m, n) : T.compressedTexSubImage2D(a, b, c, d, e, f, g, y, n, m)
    },
    $d: function(a, b, c, d, e, f, g, m, n, p, q) {
        T.dk ? T.compressedTexSubImage3D(a, b, c, d, e, f, g, m, n, p, q) : T.compressedTexSubImage3D(a, b, c, d, e, f, g, m, n, y, q, p)
    },
    Yc: function(a, b, c, d, e) {
        T.copyBufferSubData(a, b, c, d, e)
    },
    wg: function(a, b, c, d, e, f, g, m) {
        T.copyTexImage2D(a, b, c, d, e, f, g, m)
    },
    vg: function(a, b, c, d, e, f, g, m) {
        T.copyTexSubImage2D(a, b, c, d, e, f, g, m)
    },
    be: function(a, b, c, d, e, f, g, m, n) {
        T.copyTexSubImage3D(a, b, c, d, e, f, g, m, n)
    },
    ug: function() {
        var a = Ye(V)
          , b = T.createProgram();
        b.name = a;
        b.Ck = b.Ak = b.Bk = 0;
        b.Bl = 1;
        V[a] = b;
        return a
    },
    tg: function(a) {
        var b = Ye(W);
        W[b] = T.createShader(a);
        return b
    },
    sg: function(a) {
        T.cullFace(a)
    },
    rg: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Ke[d];
            e && (T.deleteBuffer(e),
            e.name = 0,
            Ke[d] = null,
            d == T.xk && (T.xk = 0),
            d == T.qk && (T.qk = 0),
            d == T.Mk && (T.Mk = 0),
            d == T.dk && (T.dk = 0))
        }
    },
    qg: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = G[b + 4 * c >> 2]
              , e = Me[d];
            e && (T.deleteFramebuffer(e),
            e.name = 0,
            Me[d] = null)
        }
    },
    pg: function(a) {
        if (a) {
            var b = V[a];
            b ? (T.deleteProgram(b),
            b.name = 0,
            V[a] = null) : X(1281)
        }
    },
    Zd: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Qe[d];
            e && (T.deleteQuery(e),
            Qe[d] = null)
        }
    },
    jh: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Qe[d];
            e && (T.hk.deleteQueryEXT(e),
            Qe[d] = null)
        }
    },
    og: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Ne[d];
            e && (T.deleteRenderbuffer(e),
            e.name = 0,
            Ne[d] = null)
        }
    },
    Fc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Re[d];
            e && (T.deleteSampler(e),
            e.name = 0,
            Re[d] = null)
        }
    },
    ng: function(a) {
        if (a) {
            var b = W[a];
            b ? (T.deleteShader(b),
            W[a] = null) : X(1281)
        }
    },
    Nc: function(a) {
        if (a) {
            var b = Te[a];
            b ? (T.deleteSync(b),
            b.name = 0,
            Te[a] = null) : X(1281)
        }
    },
    mg: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Oe[d];
            e && (T.deleteTexture(e),
            e.name = 0,
            Oe[d] = null)
        }
    },
    uc: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Se[d];
            e && (T.deleteTransformFeedback(e),
            e.name = 0,
            Se[d] = null)
        }
    },
    Dd: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2];
            T.deleteVertexArray(Pe[d]);
            Pe[d] = null
        }
    },
    _g: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2];
            T.deleteVertexArray(Pe[d]);
            Pe[d] = null
        }
    },
    lg: function(a) {
        T.depthFunc(a)
    },
    kg: function(a) {
        T.depthMask(!!a)
    },
    jg: function(a, b) {
        T.depthRange(a, b)
    },
    ig: function(a, b) {
        T.detachShader(V[a], W[b])
    },
    hg: function(a) {
        T.disable(a)
    },
    gg: function(a) {
        S.pk[a].enabled = !1;
        T.disableVertexAttribArray(a)
    },
    fg: function(a, b, c) {
        af(b + c);
        T.drawArrays(a, b, c);
        cf()
    },
    Rc: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Wg: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    dc: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    je: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    ec: function(a, b, c, d) {
        T.drawArraysInstanced(a, b, c, d)
    },
    Rd: function(a, b) {
        for (var c = Zf[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    ge: function(a, b) {
        for (var c = Zf[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    Xg: function(a, b) {
        for (var c = Zf[a], d = 0; d < a; d++)
            c[d] = G[b + 4 * d >> 2];
        T.drawBuffers(c)
    },
    eg: function(a, b, c, d) {
        if (!T.qk) {
            var e = 1 * Ue[c - 5120] * b;
            var f = Ze(e);
            T.bindBuffer(34963, f);
            T.bufferSubData(34963, 0, y.subarray(d, d + e));
            d = 0
        }
        af(b);
        T.drawElements(a, b, c, d);
        cf();
        T.qk || T.bindBuffer(34963, null)
    },
    Qc: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    Vg: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    bc: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    cc: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    he: function(a, b, c, d, e) {
        T.drawElementsInstanced(a, b, c, d, e)
    },
    ee: function(a, b, c, d, e, f) {
        b = f;
        T.qk || (f = 1 * Ue[e - 5120] * d,
        c = Ze(f),
        T.bindBuffer(34963, c),
        T.bufferSubData(34963, 0, y.subarray(b, b + f)),
        b = 0);
        af(d);
        T.drawElements(a, d, e, b);
        cf();
        T.qk || T.bindBuffer(34963, null)
    },
    dg: function(a) {
        T.enable(a)
    },
    cg: function(a) {
        S.pk[a].enabled = !0;
        T.enableVertexAttribArray(a)
    },
    Wd: function(a) {
        T.endQuery(a)
    },
    gh: function(a) {
        T.hk.endQueryEXT(a)
    },
    yd: function() {
        T.endTransformFeedback()
    },
    Pc: function(a, b) {
        return (a = T.fenceSync(a, b)) ? (b = Ye(Te),
        a.name = b,
        Te[b] = a,
        b) : 0
    },
    bg: function() {
        T.finish()
    },
    ag: function() {
        T.flush()
    },
    Fd: function(a, b, c) {
        if (ag(a)) {
            var d = Le[$f(a)];
            d ? d.fm & 16 ? 0 > b || 0 > c || b + c > d.length ? (X(1281),
            k("invalid range in glFlushMappedBufferRange")) : T.bufferSubData(a, d.offset, y.subarray(d.cl + b, d.cl + b + c)) : (X(1282),
            k("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange")) : (X(1282),
            k("buffer was never mapped in glFlushMappedBufferRange"))
        } else
            X(1280),
            k("GL_INVALID_ENUM in glFlushMappedBufferRange")
    },
    $f: function(a, b, c, d) {
        T.framebufferRenderbuffer(a, b, c, Ne[d])
    },
    _f: function(a, b, c, d, e) {
        T.framebufferTexture2D(a, b, c, Oe[d], e)
    },
    Hd: function(a, b, c, d, e) {
        T.framebufferTextureLayer(a, b, Oe[c], d, e)
    },
    Zf: function(a) {
        T.frontFace(a)
    },
    Yf: function(a, b) {
        bg(a, b, "createBuffer", Ke)
    },
    Wf: function(a, b) {
        bg(a, b, "createFramebuffer", Me)
    },
    _d: function(a, b) {
        bg(a, b, "createQuery", Qe)
    },
    kh: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = T.hk.createQueryEXT();
            if (!d) {
                for (X(1282); c < a; )
                    G[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = Ye(Qe);
            d.name = e;
            Qe[e] = d;
            G[b + 4 * c >> 2] = e
        }
    },
    Vf: function(a, b) {
        bg(a, b, "createRenderbuffer", Ne)
    },
    Gc: function(a, b) {
        bg(a, b, "createSampler", Re)
    },
    Uf: function(a, b) {
        bg(a, b, "createTexture", Oe)
    },
    tc: function(a, b) {
        bg(a, b, "createTransformFeedback", Se)
    },
    Cd: function(a, b) {
        bg(a, b, "createVertexArray", Pe)
    },
    Zg: function(a, b) {
        bg(a, b, "createVertexArray", Pe)
    },
    Xf: function(a) {
        T.generateMipmap(a)
    },
    Tf: function(a, b, c, d, e, f, g) {
        cg("getActiveAttrib", a, b, c, d, e, f, g)
    },
    Sf: function(a, b, c, d, e, f, g) {
        cg("getActiveUniform", a, b, c, d, e, f, g)
    },
    Tc: function(a, b, c, d, e) {
        a = V[a];
        if (a = T.getActiveUniformBlockName(a, b))
            e && 0 < c ? (c = u(a, e, c),
            d && (G[d >> 2] = c)) : d && (G[d >> 2] = 0)
    },
    Uc: function(a, b, c, d) {
        if (d)
            if (a = V[a],
            35393 == c)
                c = T.getActiveUniformBlockName(a, b),
                G[d >> 2] = c.length + 1;
            else {
                if (a = T.getActiveUniformBlockParameter(a, b, c),
                null !== a)
                    if (35395 == c)
                        for (c = 0; c < a.length; c++)
                            G[d + 4 * c >> 2] = a[c];
                    else
                        G[d >> 2] = a
            }
        else
            X(1281)
    },
    Wc: function(a, b, c, d, e) {
        if (e)
            if (0 < b && 0 == c)
                X(1281);
            else {
                a = V[a];
                for (var f = [], g = 0; g < b; g++)
                    f.push(G[c + 4 * g >> 2]);
                if (a = T.getActiveUniforms(a, f, d))
                    for (b = a.length,
                    g = 0; g < b; g++)
                        G[e + 4 * g >> 2] = a[g]
            }
        else
            X(1281)
    },
    Rf: function(a, b, c, d) {
        a = T.getAttachedShaders(V[a]);
        var e = a.length;
        e > b && (e = b);
        G[c >> 2] = e;
        for (b = 0; b < e; ++b)
            G[d + 4 * b >> 2] = W.indexOf(a[b])
    },
    Qf: function(a, b) {
        return T.getAttribLocation(V[a], K(b))
    },
    Pf: function(a, b) {
        eg(a, b, 4)
    },
    Hc: function(a, b, c) {
        c ? dg(c, T.getBufferParameter(a, b)) : X(1281)
    },
    Of: function(a, b, c) {
        c ? G[c >> 2] = T.getBufferParameter(a, b) : X(1281)
    },
    Sd: function(a, b, c) {
        if (35005 == b) {
            b = 0;
            if (a = Le[$f(a)])
                b = a.cl;
            G[c >> 2] = b
        } else
            X(1280),
            k("GL_INVALID_ENUM in glGetBufferPointerv")
    },
    Nf: function() {
        var a = T.getError() || Xe;
        Xe = 0;
        return a
    },
    Mf: function(a, b) {
        eg(a, b, 2)
    },
    kd: function(a, b) {
        return T.getFragDataLocation(V[a], K(b))
    },
    Lf: function(a, b, c, d) {
        a = T.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        G[d >> 2] = a
    },
    Ic: function(a, b, c) {
        fg(a, b, c, 1)
    },
    Kc: function(a, b) {
        eg(a, b, 1)
    },
    Ad: function(a, b, c) {
        fg(a, b, c, 0)
    },
    Kf: function(a, b) {
        eg(a, b, 0)
    },
    hc: function(a, b, c, d, e) {
        if (0 > d)
            X(1281);
        else if (e) {
            if (a = T.getInternalformatParameter(a, b, c),
            null !== a)
                for (b = 0; b < a.length && b < d; ++b)
                    G[e + b >> 2] = a[b]
        } else
            X(1281)
    },
    pc: function() {
        X(1282)
    },
    If: function(a, b, c, d) {
        a = T.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    Jf: function(a, b, c) {
        if (c)
            if (a >= Je)
                X(1281);
            else if (a = V[a],
            35716 == b)
                a = T.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                G[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.Ck)
                    for (b = 0; b < T.getProgramParameter(a, 35718); ++b)
                        a.Ck = Math.max(a.Ck, T.getActiveUniform(a, b).name.length + 1);
                G[c >> 2] = a.Ck
            } else if (35722 == b) {
                if (!a.Ak)
                    for (b = 0; b < T.getProgramParameter(a, 35721); ++b)
                        a.Ak = Math.max(a.Ak, T.getActiveAttrib(a, b).name.length + 1);
                G[c >> 2] = a.Ak
            } else if (35381 == b) {
                if (!a.Bk)
                    for (b = 0; b < T.getProgramParameter(a, 35382); ++b)
                        a.Bk = Math.max(a.Bk, T.getActiveUniformBlockName(a, b).length + 1);
                G[c >> 2] = a.Bk
            } else
                G[c >> 2] = T.getProgramParameter(a, b);
        else
            X(1281)
    },
    bh: function(a, b, c) {
        if (c) {
            a = Qe[a];
            b = 2 > S.version ? T.hk.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            dg(c, d)
        } else
            X(1281)
    },
    dh: function(a, b, c) {
        if (c) {
            a = T.hk.getQueryObjectEXT(Qe[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    ah: function(a, b, c) {
        if (c) {
            a = Qe[a];
            b = 2 > S.version ? T.hk.getQueryObjectEXT(a, b) : T.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            dg(c, d)
        } else
            X(1281)
    },
    Ud: function(a, b, c) {
        if (c) {
            a = T.getQueryParameter(Qe[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    ch: function(a, b, c) {
        if (c) {
            a = T.hk.getQueryObjectEXT(Qe[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            G[c >> 2] = d
        } else
            X(1281)
    },
    Vd: function(a, b, c) {
        c ? G[c >> 2] = T.getQuery(a, b) : X(1281)
    },
    eh: function(a, b, c) {
        c ? G[c >> 2] = T.hk.getQueryEXT(a, b) : X(1281)
    },
    Hf: function(a, b, c) {
        c ? G[c >> 2] = T.getRenderbufferParameter(a, b) : X(1281)
    },
    xc: function(a, b, c) {
        c ? I[c >> 2] = T.getSamplerParameter(Re[a], b) : X(1281)
    },
    yc: function(a, b, c) {
        c ? G[c >> 2] = T.getSamplerParameter(Re[a], b) : X(1281)
    },
    Ff: function(a, b, c, d) {
        a = T.getShaderInfoLog(W[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    Ef: function(a, b, c, d) {
        a = T.getShaderPrecisionFormat(a, b);
        G[c >> 2] = a.rangeMin;
        G[c + 4 >> 2] = a.rangeMax;
        G[d >> 2] = a.precision
    },
    Df: function(a, b, c, d) {
        if (a = T.getShaderSource(W[a]))
            b = 0 < b && d ? u(a, d, b) : 0,
            c && (G[c >> 2] = b)
    },
    Gf: function(a, b, c) {
        c ? 35716 == b ? (a = T.getShaderInfoLog(W[a]),
        null === a && (a = "(unknown error)"),
        G[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = T.getShaderSource(W[a]),
        G[c >> 2] = a ? a.length + 1 : 0) : G[c >> 2] = T.getShaderParameter(W[a], b) : X(1281)
    },
    Cf: function(a) {
        var b = Ve[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = T.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = gg(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = T.getParameter(a)) || X(1280);
                b = b && gg(b);
                break;
            case 7938:
                b = gg("OpenGL ES 3.0 (" + T.getParameter(7938) + ")");
                break;
            case 35724:
                b = T.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = gg(b);
                break;
            default:
                X(1280)
            }
            Ve[a] = b
        }
        return b
    },
    Zc: function(a, b) {
        if (2 > S.version)
            return X(1282),
            0;
        var c = We[a];
        if (c)
            return 0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        switch (a) {
        case 7939:
            return c = T.getSupportedExtensions() || [],
            c = c.concat(c.map(function(d) {
                return "GL_" + d
            })),
            c = c.map(function(d) {
                return gg(d)
            }),
            c = We[a] = c,
            0 > b || b >= c.length ? (X(1281),
            0) : c[b];
        default:
            return X(1280),
            0
        }
    },
    Jc: function(a, b, c, d, e) {
        0 > c ? X(1281) : e ? (a = T.getSyncParameter(Te[a], b),
        null !== a && (G[e >> 2] = a,
        d && (G[d >> 2] = 1))) : X(1281)
    },
    Bf: function(a, b, c) {
        c ? I[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    Af: function(a, b, c) {
        c ? G[c >> 2] = T.getTexParameter(a, b) : X(1281)
    },
    td: function(a, b, c, d, e, f, g) {
        a = V[a];
        if (a = T.getTransformFeedbackVarying(a, b))
            g && 0 < c ? (c = u(a.name, g, c),
            d && (G[d >> 2] = c)) : d && (G[d >> 2] = 0),
            e && (G[e >> 2] = a.size),
            f && (G[f >> 2] = a.type)
    },
    Vc: function(a, b) {
        return T.getUniformBlockIndex(V[a], K(b))
    },
    Xc: function(a, b, c, d) {
        if (d)
            if (0 < b && (0 == c || 0 == d))
                X(1281);
            else {
                a = V[a];
                for (var e = [], f = 0; f < b; f++)
                    e.push(K(G[c + 4 * f >> 2]));
                if (a = T.getUniformIndices(a, e))
                    for (b = a.length,
                    f = 0; f < b; f++)
                        G[d + 4 * f >> 2] = a[f]
            }
        else
            X(1281)
    },
    xf: function(a, b) {
        b = K(b);
        if (a = V[a]) {
            ig(a);
            var c = a.Qk
              , d = 0
              , e = b
              , f = hg(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.Cl[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || T.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    zf: function(a, b, c) {
        jg(a, b, c, 2)
    },
    yf: function(a, b, c) {
        jg(a, b, c, 0)
    },
    ld: function(a, b, c) {
        jg(a, b, c, 0)
    },
    rd: function(a, b, c) {
        kg(a, b, c, 0)
    },
    qd: function(a, b, c) {
        kg(a, b, c, 0)
    },
    uf: function(a, b, c) {
        c ? (S.pk[a].enabled && k("glGetVertexAttribPointer on client-side array: not supported, bad data returned"),
        G[c >> 2] = T.getVertexAttribOffset(a, b)) : X(1281)
    },
    wf: function(a, b, c) {
        kg(a, b, c, 2)
    },
    vf: function(a, b, c) {
        kg(a, b, c, 5)
    },
    tf: function(a, b) {
        T.hint(a, b)
    },
    lc: function(a, b, c) {
        for (var d = Zf[b], e = 0; e < b; e++)
            d[e] = G[c + 4 * e >> 2];
        T.invalidateFramebuffer(a, d)
    },
    kc: function(a, b, c, d, e, f, g) {
        for (var m = Zf[b], n = 0; n < b; n++)
            m[n] = G[c + 4 * n >> 2];
        T.invalidateSubFramebuffer(a, m, d, e, f, g)
    },
    sf: function(a) {
        return (a = Ke[a]) ? T.isBuffer(a) : 0
    },
    rf: function(a) {
        return T.isEnabled(a)
    },
    qf: function(a) {
        return (a = Me[a]) ? T.isFramebuffer(a) : 0
    },
    pf: function(a) {
        return (a = V[a]) ? T.isProgram(a) : 0
    },
    Yd: function(a) {
        return (a = Qe[a]) ? T.isQuery(a) : 0
    },
    ih: function(a) {
        return (a = Qe[a]) ? T.hk.isQueryEXT(a) : 0
    },
    of: function(a) {
        return (a = Ne[a]) ? T.isRenderbuffer(a) : 0
    },
    Ec: function(a) {
        return (a = Re[a]) ? T.isSampler(a) : 0
    },
    nf: function(a) {
        return (a = W[a]) ? T.isShader(a) : 0
    },
    Oc: function(a) {
        return T.isSync(Te[a])
    },
    mf: function(a) {
        return (a = Oe[a]) ? T.isTexture(a) : 0
    },
    sc: function(a) {
        return T.isTransformFeedback(Se[a])
    },
    Bd: function(a) {
        return (a = Pe[a]) ? T.isVertexArray(a) : 0
    },
    Yg: function(a) {
        return (a = Pe[a]) ? T.isVertexArray(a) : 0
    },
    lf: function(a) {
        T.lineWidth(a)
    },
    kf: function(a) {
        a = V[a];
        T.linkProgram(a);
        a.Qk = 0;
        a.Cl = {}
    },
    Gd: function(a, b, c, d) {
        if (26 != d && 10 != d)
            return k("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER"),
            0;
        if (!ag(a))
            return X(1280),
            k("GL_INVALID_ENUM in glMapBufferRange"),
            0;
        var e = l(c);
        if (!e)
            return 0;
        Le[$f(a)] = {
            offset: b,
            length: c,
            cl: e,
            fm: d
        };
        return e
    },
    rc: function() {
        T.pauseTransformFeedback()
    },
    jf: function(a, b) {
        T.pixelStorei(a, b)
    },
    hf: function(a, b) {
        T.polygonOffset(a, b)
    },
    oc: function() {
        X(1280)
    },
    mc: function() {
        X(1280)
    },
    fh: function(a, b) {
        T.hk.queryCounterEXT(Qe[a], b)
    },
    fe: function(a) {
        T.readBuffer(a)
    },
    gf: function(a, b, c, d, e, f, g) {
        if (T.Mk)
            T.readPixels(a, b, c, d, e, f, g);
        else {
            var m = lg(f);
            T.readPixels(a, b, c, d, e, f, m, g >> mg(m))
        }
    },
    ff: function() {},
    ef: function(a, b, c, d) {
        T.renderbufferStorage(a, b, c, d)
    },
    Id: function(a, b, c, d, e) {
        T.renderbufferStorageMultisample(a, b, c, d, e)
    },
    qc: function() {
        T.resumeTransformFeedback()
    },
    df: function(a, b) {
        T.sampleCoverage(a, !!b)
    },
    Ac: function(a, b, c) {
        T.samplerParameterf(Re[a], b, c)
    },
    zc: function(a, b, c) {
        T.samplerParameterf(Re[a], b, I[c >> 2])
    },
    Cc: function(a, b, c) {
        T.samplerParameteri(Re[a], b, c)
    },
    Bc: function(a, b, c) {
        T.samplerParameteri(Re[a], b, G[c >> 2])
    },
    cf: function(a, b, c, d) {
        T.scissor(a, b, c, d)
    },
    bf: function() {
        X(1280)
    },
    af: function(a, b, c, d) {
        b = $e(b, c, d);
        T.shaderSource(W[a], b)
    },
    $e: function(a, b, c) {
        T.stencilFunc(a, b, c)
    },
    _e: function(a, b, c, d) {
        T.stencilFuncSeparate(a, b, c, d)
    },
    Ze: function(a) {
        T.stencilMask(a)
    },
    Ye: function(a, b) {
        T.stencilMaskSeparate(a, b)
    },
    Xe: function(a, b, c) {
        T.stencilOp(a, b, c)
    },
    We: function(a, b, c, d) {
        T.stencilOpSeparate(a, b, c, d)
    },
    Ve: function(a, b, c, d, e, f, g, m, n) {
        if (T.dk)
            T.texImage2D(a, b, c, d, e, f, g, m, n);
        else if (n) {
            var p = lg(m);
            T.texImage2D(a, b, c, d, e, f, g, m, p, n >> mg(p))
        } else
            T.texImage2D(a, b, c, d, e, f, g, m, null)
    },
    de: function(a, b, c, d, e, f, g, m, n, p) {
        if (T.dk)
            T.texImage3D(a, b, c, d, e, f, g, m, n, p);
        else if (p) {
            var q = lg(n);
            T.texImage3D(a, b, c, d, e, f, g, m, n, q, p >> mg(q))
        } else
            T.texImage3D(a, b, c, d, e, f, g, m, n, null)
    },
    Ue: function(a, b, c) {
        T.texParameterf(a, b, c)
    },
    Te: function(a, b, c) {
        T.texParameterf(a, b, I[c >> 2])
    },
    Se: function(a, b, c) {
        T.texParameteri(a, b, c)
    },
    Re: function(a, b, c) {
        T.texParameteri(a, b, G[c >> 2])
    },
    jc: function(a, b, c, d, e) {
        T.texStorage2D(a, b, c, d, e)
    },
    ic: function(a, b, c, d, e, f) {
        T.texStorage3D(a, b, c, d, e, f)
    },
    Qe: function(a, b, c, d, e, f, g, m, n) {
        if (T.dk)
            T.texSubImage2D(a, b, c, d, e, f, g, m, n);
        else if (n) {
            var p = lg(m);
            T.texSubImage2D(a, b, c, d, e, f, g, m, p, n >> mg(p))
        } else
            T.texSubImage2D(a, b, c, d, e, f, g, m, null)
    },
    ce: function(a, b, c, d, e, f, g, m, n, p, q) {
        if (T.dk)
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, q);
        else if (q) {
            var t = lg(p);
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, t, q >> mg(t))
        } else
            T.texSubImage3D(a, b, c, d, e, f, g, m, n, p, null)
    },
    vd: function(a, b, c, d) {
        a = V[a];
        for (var e = [], f = 0; f < b; f++)
            e.push(K(G[c + 4 * f >> 2]));
        T.transformFeedbackVaryings(a, e, d)
    },
    Pe: function(a, b) {
        T.uniform1f(Y(a), b)
    },
    Oe: function(a, b, c) {
        T.uniform1fv(Y(a), I, c >> 2, b)
    },
    Ne: function(a, b) {
        T.uniform1i(Y(a), b)
    },
    Me: function(a, b, c) {
        T.uniform1iv(Y(a), G, c >> 2, b)
    },
    jd: function(a, b) {
        T.uniform1ui(Y(a), b)
    },
    fd: function(a, b, c) {
        T.uniform1uiv(Y(a), M, c >> 2, b)
    },
    Le: function(a, b, c) {
        T.uniform2f(Y(a), b, c)
    },
    Ke: function(a, b, c) {
        T.uniform2fv(Y(a), I, c >> 2, 2 * b)
    },
    Je: function(a, b, c) {
        T.uniform2i(Y(a), b, c)
    },
    Ie: function(a, b, c) {
        T.uniform2iv(Y(a), G, c >> 2, 2 * b)
    },
    id: function(a, b, c) {
        T.uniform2ui(Y(a), b, c)
    },
    ed: function(a, b, c) {
        T.uniform2uiv(Y(a), M, c >> 2, 2 * b)
    },
    He: function(a, b, c, d) {
        T.uniform3f(Y(a), b, c, d)
    },
    Ge: function(a, b, c) {
        T.uniform3fv(Y(a), I, c >> 2, 3 * b)
    },
    Fe: function(a, b, c, d) {
        T.uniform3i(Y(a), b, c, d)
    },
    Ee: function(a, b, c) {
        T.uniform3iv(Y(a), G, c >> 2, 3 * b)
    },
    hd: function(a, b, c, d) {
        T.uniform3ui(Y(a), b, c, d)
    },
    dd: function(a, b, c) {
        T.uniform3uiv(Y(a), M, c >> 2, 3 * b)
    },
    De: function(a, b, c, d, e) {
        T.uniform4f(Y(a), b, c, d, e)
    },
    Ce: function(a, b, c) {
        T.uniform4fv(Y(a), I, c >> 2, 4 * b)
    },
    Be: function(a, b, c, d, e) {
        T.uniform4i(Y(a), b, c, d, e)
    },
    Ae: function(a, b, c) {
        T.uniform4iv(Y(a), G, c >> 2, 4 * b)
    },
    gd: function(a, b, c, d, e) {
        T.uniform4ui(Y(a), b, c, d, e)
    },
    cd: function(a, b, c) {
        T.uniform4uiv(Y(a), M, c >> 2, 4 * b)
    },
    Sc: function(a, b, c) {
        a = V[a];
        T.uniformBlockBinding(a, b, c)
    },
    ze: function(a, b, c, d) {
        T.uniformMatrix2fv(Y(a), !!c, I, d >> 2, 4 * b)
    },
    Qd: function(a, b, c, d) {
        T.uniformMatrix2x3fv(Y(a), !!c, I, d >> 2, 6 * b)
    },
    Nd: function(a, b, c, d) {
        T.uniformMatrix2x4fv(Y(a), !!c, I, d >> 2, 8 * b)
    },
    ye: function(a, b, c, d) {
        T.uniformMatrix3fv(Y(a), !!c, I, d >> 2, 9 * b)
    },
    Od: function(a, b, c, d) {
        T.uniformMatrix3x2fv(Y(a), !!c, I, d >> 2, 6 * b)
    },
    Ld: function(a, b, c, d) {
        T.uniformMatrix3x4fv(Y(a), !!c, I, d >> 2, 12 * b)
    },
    xe: function(a, b, c, d) {
        T.uniformMatrix4fv(Y(a), !!c, I, d >> 2, 16 * b)
    },
    Md: function(a, b, c, d) {
        T.uniformMatrix4x2fv(Y(a), !!c, I, d >> 2, 8 * b)
    },
    Kd: function(a, b, c, d) {
        T.uniformMatrix4x3fv(Y(a), !!c, I, d >> 2, 12 * b)
    },
    Td: function(a) {
        if (!ag(a))
            return X(1280),
            k("GL_INVALID_ENUM in glUnmapBuffer"),
            0;
        var b = $f(a)
          , c = Le[b];
        if (!c)
            return X(1282),
            k("buffer was never mapped in glUnmapBuffer"),
            0;
        Le[b] = null;
        c.fm & 16 || T.bufferSubData(a, c.offset, y, c.cl, c.length);
        ea(c.cl);
        return 1
    },
    we: function(a) {
        a = V[a];
        T.useProgram(a);
        T.om = a
    },
    ve: function(a) {
        T.validateProgram(V[a])
    },
    ue: function(a, b) {
        T.vertexAttrib1f(a, b)
    },
    te: function(a, b) {
        T.vertexAttrib1f(a, I[b >> 2])
    },
    se: function(a, b, c) {
        T.vertexAttrib2f(a, b, c)
    },
    re: function(a, b) {
        T.vertexAttrib2f(a, I[b >> 2], I[b + 4 >> 2])
    },
    qe: function(a, b, c, d) {
        T.vertexAttrib3f(a, b, c, d)
    },
    pe: function(a, b) {
        T.vertexAttrib3f(a, I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2])
    },
    oe: function(a, b, c, d, e) {
        T.vertexAttrib4f(a, b, c, d, e)
    },
    ne: function(a, b) {
        T.vertexAttrib4f(a, I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2], I[b + 12 >> 2])
    },
    wc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    Ug: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    fc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    ke: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    gc: function(a, b) {
        T.vertexAttribDivisor(a, b)
    },
    pd: function(a, b, c, d, e) {
        T.vertexAttribI4i(a, b, c, d, e)
    },
    nd: function(a, b) {
        T.vertexAttribI4i(a, G[b >> 2], G[b + 4 >> 2], G[b + 8 >> 2], G[b + 12 >> 2])
    },
    od: function(a, b, c, d, e) {
        T.vertexAttribI4ui(a, b, c, d, e)
    },
    md: function(a, b) {
        T.vertexAttribI4ui(a, M[b >> 2], M[b + 4 >> 2], M[b + 8 >> 2], M[b + 12 >> 2])
    },
    sd: function(a, b, c, d, e) {
        var f = S.pk[a];
        T.xk ? (f.Lk = !1,
        T.vertexAttribIPointer(a, b, c, d, e)) : (f.size = b,
        f.type = c,
        f.ul = !1,
        f.fl = d,
        f.Wj = e,
        f.Lk = !0,
        f.Dl = function(g, m, n, p, q, t) {
            this.vertexAttribIPointer(g, m, n, q, t)
        }
        )
    },
    me: function(a, b, c, d, e, f) {
        var g = S.pk[a];
        T.xk ? (g.Lk = !1,
        T.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b,
        g.type = c,
        g.ul = d,
        g.fl = e,
        g.Wj = f,
        g.Lk = !0,
        g.Dl = function(m, n, p, q, t, v) {
            this.vertexAttribPointer(m, n, p, q, t, v)
        }
        )
    },
    le: function(a, b, c, d) {
        T.viewport(a, b, c, d)
    },
    Lc: function(a, b, c, d) {
        T.waitSync(Te[a], b, (c >>> 0) + 4294967296 * d)
    },
    ma: function() {
        return 1
    },
    ph: function() {
        return !La
    },
    Jb: function(a, b, c) {
        y.copyWithin(a, b, b + c)
    },
    Lh: function(a, b) {
        function c(d) {
            ih.apply(null, [a, d, b]) && requestAnimationFrame(c)
        }
        return requestAnimationFrame(c)
    },
    sh: function(a, b, c) {
        return ng(a, {
            Zl: G[c >> 2],
            Gl: G[c + 4 >> 2],
            fn: G[c + 8 >> 2],
            bn: b,
            kl: G[c + 12 >> 2],
            lm: G[c + 16 >> 2]
        })
    },
    mb: function(a, b) {
        a = Nf(a);
        return a ? a.requestPointerLock || a.sl ? lf && tf.Kk ? Xf(a) : b ? (qf(Xf, 2, [a]),
        1) : -2 : -1 : -4
    },
    Kb: function(a) {
        var b = y.length;
        a >>>= 0;
        if (2147483648 < a)
            return !1;
        for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + .2 / c);
            d = Math.min(d, a + 100663296);
            d = Math.max(a, d);
            0 < d % 65536 && (d += 65536 - d % 65536);
            a: {
                try {
                    gb.grow(Math.min(2147483648, d) - ub.byteLength + 65535 >>> 16);
                    vb();
                    var e = 1;
                    break a
                } catch (f) {}
                e = void 0
            }
            if (e)
                return !0
        }
        return !1
    },
    db: function() {
        return (zf = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
    },
    eb: function(a, b, c) {
        if ("undefined" === typeof onbeforeunload)
            return -1;
        if (1 !== c)
            return -5;
        og(a, b);
        return 0
    },
    ib: function(a, b, c, d) {
        pg(a, b, c, d, 12, "blur");
        return 0
    },
    C: Qf,
    la: function(a, b, c) {
        a = Nf(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    },
    jb: function(a, b, c, d) {
        pg(a, b, c, d, 13, "focus");
        return 0
    },
    ya: function(a, b, c, d) {
        if (!xf())
            return -1;
        a = Nf(a);
        if (!a)
            return -4;
        qg(a, b, c, d, "fullscreenchange");
        qg(a, b, c, d, "webkitfullscreenchange");
        return 0
    },
    bb: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        rg(a, b, c, 26, "gamepadconnected");
        return 0
    },
    $a: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        rg(a, b, c, 27, "gamepaddisconnected");
        return 0
    },
    wa: function(a, b, c, d) {
        sg(a, b, c, d, 2, "keydown");
        return 0
    },
    xa: function(a, b, c, d) {
        sg(a, b, c, d, 1, "keypress");
        return 0
    },
    va: function(a, b, c, d) {
        sg(a, b, c, d, 3, "keyup");
        return 0
    },
    ua: function(a, b, c, d) {
        ug(a, b, c, d, 5, "mousedown");
        return 0
    },
    lb: function(a, b, c, d) {
        ug(a, b, c, d, 33, "mouseenter");
        return 0
    },
    kb: function(a, b, c, d) {
        ug(a, b, c, d, 34, "mouseleave");
        return 0
    },
    sa: function(a, b, c, d) {
        ug(a, b, c, d, 8, "mousemove");
        return 0
    },
    Mh: function(a, b, c, d) {
        ug(a, b, c, d, 35, "mouseover");
        return 0
    },
    ta: function(a, b, c, d) {
        ug(a, b, c, d, 6, "mouseup");
        return 0
    },
    hb: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.Xn || document.body.co || document.body.sl))
            return -1;
        a = Nf(a);
        if (!a)
            return -4;
        vg(a, b, c, d, "pointerlockchange");
        vg(a, b, c, d, "mozpointerlockchange");
        vg(a, b, c, d, "webkitpointerlockchange");
        vg(a, b, c, d, "mspointerlockchange");
        return 0
    },
    gb: function(a, b, c, d) {
        wg(a, b, c, d);
        return 0
    },
    na: function(a, b, c, d) {
        xg(a, b, c, d, 25, "touchcancel");
        return 0
    },
    pa: function(a, b, c, d) {
        xg(a, b, c, d, 23, "touchend");
        return 0
    },
    oa: function(a, b, c, d) {
        xg(a, b, c, d, 24, "touchmove");
        return 0
    },
    qa: function(a, b, c, d) {
        xg(a, b, c, d, 22, "touchstart");
        return 0
    },
    fb: function(a, b, c) {
        if (!Mf[1])
            return -4;
        yg(a, b, c);
        return 0
    },
    Qh: function(a, b, c, d) {
        zg(a, b, c, d, 31, "webglcontextlost");
        return 0
    },
    Ph: function(a, b, c, d) {
        zg(a, b, c, d, 32, "webglcontextrestored");
        return 0
    },
    ra: function(a, b, c, d) {
        a = Nf(a);
        return "undefined" !== typeof a.onwheel ? (Ag(a, b, c, d),
        0) : -1
    },
    u: function(a) {
        ch(function(b) {
            de(b, a)
        })
    },
    oh: function(a, b, c, d, e) {
        function f(P) {
            Eg(P, g, p, q, n)
        }
        function g(P, vh) {
            Fg(P, vh.response, function(rc) {
                ce(function() {
                    x ? dynCall_vi.apply(null, [x, rc]) : b && b(rc)
                }, ca)
            }, function(rc) {
                ce(function() {
                    x ? dynCall_vi.apply(null, [x, rc]) : b && b(rc)
                }, ca)
            })
        }
        function m(P) {
            Eg(P, t, p, q, n)
        }
        function n(P) {
            ce(function() {
                Q ? dynCall_vi.apply(null, [Q, P]) : e && e(P)
            }, ca)
        }
        function p(P) {
            ce(function() {
                z ? dynCall_vi.apply(null, [z, P]) : c && c(P)
            }, ca)
        }
        function q(P) {
            ce(function() {
                J ? dynCall_vi.apply(null, [J, P]) : d && d(P)
            }, ca)
        }
        function t(P) {
            ce(function() {
                x ? dynCall_vi.apply(null, [x, P]) : b && b(P)
            }, ca)
        }
        var v = a + 112
          , r = K(v)
          , x = M[v + 36 >> 2]
          , z = M[v + 40 >> 2]
          , J = M[v + 44 >> 2]
          , Q = M[v + 48 >> 2]
          , ia = M[v + 52 >> 2]
          , $a = !!(ia & 4)
          , A = !!(ia & 32)
          , ba = !!(ia & 16)
          , ca = !!(ia & 64);
        if ("EM_IDB_STORE" === r)
            r = M[v + 84 >> 2],
            Fg(a, y.slice(r, r + M[v + 88 >> 2]), t, p);
        else if ("EM_IDB_DELETE" === r)
            Hg(a, t, p);
        else if (ba) {
            if (A)
                return 0;
            Eg(a, $a ? g : t, p, q, n)
        } else
            Gg(a, t, A ? p : $a ? f : m);
        return a
    },
    Th: function(a, b) {
        b >>= 2;
        b = {
            alpha: !!G[b],
            depth: !!G[b + 1],
            stencil: !!G[b + 2],
            antialias: !!G[b + 3],
            premultipliedAlpha: !!G[b + 4],
            preserveDrawingBuffer: !!G[b + 5],
            powerPreference: Ig[G[b + 6]],
            failIfMajorPerformanceCaveat: !!G[b + 7],
            Rl: G[b + 8],
            An: G[b + 9],
            Il: G[b + 10],
            en: G[b + 11],
            no: G[b + 12],
            po: G[b + 13]
        };
        a = Nf(a);
        return !a || b.en ? 0 : pe(a, b)
    },
    Nh: function(a, b) {
        if (!b)
            return -5;
        a = qe[a];
        if (!a)
            return -3;
        var c = a.rk;
        if (!c)
            return -3;
        c = c.getContextAttributes();
        G[b >> 2] = c.alpha;
        G[b + 4 >> 2] = c.depth;
        G[b + 8 >> 2] = c.stencil;
        G[b + 12 >> 2] = c.antialias;
        G[b + 16 >> 2] = c.premultipliedAlpha;
        G[b + 20 >> 2] = c.preserveDrawingBuffer;
        G[b + 24 >> 2] = c.powerPreference && Ig.indexOf(c.powerPreference);
        G[b + 28 >> 2] = c.failIfMajorPerformanceCaveat;
        G[b + 32 >> 2] = a.version;
        G[b + 36 >> 2] = 0;
        G[b + 40 >> 2] = a.attributes.Il;
        return 0
    },
    Oh: function() {
        return S ? S.sn : 0
    },
    Sh: function(a) {
        return re(a) ? 0 : -5
    },
    ia: function(a) {
        a = Jg[a];
        if (!a)
            return -3;
        a.onopen = a.onerror = a.onclose = a.onmessage = null;
        delete Jg[a];
        return 0
    },
    Pd: function() {
        return "undefined" !== typeof WebSocket
    },
    Va: function(a) {
        if ("undefined" === typeof WebSocket)
            return -1;
        if (!a)
            return -5;
        var b = a >> 2;
        a = K(G[b]);
        a = (b = G[b + 1]) ? new WebSocket(a,K(b).split(",")) : new WebSocket(a);
        a.binaryType = "arraybuffer";
        b = Jg.length;
        Jg[b] = a;
        return b
    },
    Qa: function(a, b, c) {
        a = Jg[a];
        if (!a)
            return -3;
        a.send(y.subarray(b, b + c));
        return 0
    },
    ie: function(a, b) {
        a = Jg[a];
        if (!a)
            return -3;
        b = K(b);
        a.send(b);
        return 0
    },
    Ra: function(a, b, c) {
        Z || (Z = l(1024));
        var d = Jg[a];
        if (!d)
            return -3;
        d.onclose = function(e) {
            M[Z >> 2] = a;
            M[Z + 4 >> 2] = e.wasClean;
            M[Z + 8 >> 2] = e.code;
            u(e.reason, Z + 10, 512);
            Tf.apply(null, [c, 0, Z, b])
        }
        ;
        return 0
    },
    Sa: function(a, b, c) {
        Z || (Z = l(1024));
        var d = Jg[a];
        if (!d)
            return -3;
        d.onerror = function() {
            M[Z >> 2] = a;
            Tf.apply(null, [c, 0, Z, b])
        }
        ;
        return 0
    },
    Ta: function(a, b, c) {
        Z || (Z = l(1024));
        var d = Jg[a];
        if (!d)
            return -3;
        d.onmessage = function(e) {
            M[Z >> 2] = a;
            if ("string" === typeof e.data) {
                var f = aa(e.data) + 1
                  , g = l(f);
                u(e.data, g, f);
                M[Z + 12 >> 2] = 1
            } else
                f = e.data.byteLength,
                g = l(f),
                F.set(new Uint8Array(e.data), g),
                M[Z + 12 >> 2] = 0;
            M[Z + 4 >> 2] = g;
            M[Z + 8 >> 2] = f;
            Tf.apply(null, [c, 0, Z, b]);
            ea(g)
        }
        ;
        return 0
    },
    Ua: function(a, b, c) {
        Z || (Z = l(1024));
        var d = Jg[a];
        if (!d)
            return -3;
        d.onopen = function() {
            M[Z >> 2] = a;
            Tf.apply(null, [c, 0, Z, b])
        }
        ;
        return 0
    },
    Ob: function(a, b) {
        var c = 0;
        Lg().forEach(function(d, e) {
            var f = b + c;
            e = G[a + 4 * e >> 2] = f;
            for (f = 0; f < d.length; ++f)
                F[e++ >> 0] = d.charCodeAt(f);
            F[e >> 0] = 0;
            c += d.length + 1
        });
        return 0
    },
    Pb: function(a, b) {
        var c = Lg();
        G[a >> 2] = c.length;
        var d = 0;
        c.forEach(function(e) {
            d += e.length + 1
        });
        G[b >> 2] = d;
        return 0
    },
    d: function(a) {
        Xd(a)
    },
    T: function(a) {
        try {
            var b = Kd(a);
            gd(b);
            return 0
        } catch (c) {
            return "undefined" !== typeof vd && c instanceof O || E(c),
            c.Xj
        }
    },
    Xb: function(a, b, c, d) {
        try {
            a: {
                for (var e = Kd(a), f = a = 0; f < c; f++) {
                    var g = G[b + (8 * f + 4) >> 2]
                      , m = e
                      , n = G[b + 8 * f >> 2]
                      , p = g
                      , q = void 0
                      , t = F;
                    if (0 > p || 0 > q)
                        throw new O(28);
                    if (null === m.fd)
                        throw new O(8);
                    if (1 === (m.flags & 2097155))
                        throw new O(8);
                    if (C(m.node.mode))
                        throw new O(31);
                    if (!m.Vj.read)
                        throw new O(28);
                    var v = "undefined" !== typeof q;
                    if (!v)
                        q = m.position;
                    else if (!m.seekable)
                        throw new O(70);
                    var r = m.Vj.read(m, t, n, p, q);
                    v || (m.position += r);
                    var x = r;
                    if (0 > x) {
                        var z = -1;
                        break a
                    }
                    a += x;
                    if (x < g)
                        break
                }
                z = a
            }
            G[d >> 2] = z;
            return 0
        } catch (J) {
            return "undefined" !== typeof vd && J instanceof O || E(J),
            J.Xj
        }
    },
    Db: function(a, b, c, d, e) {
        try {
            var f = Kd(a);
            a = 4294967296 * c + (b >>> 0);
            if (-9007199254740992 >= a || 9007199254740992 <= a)
                return -61;
            hd(f, a, d);
            db = [f.position >>> 0, (H = f.position,
            1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
            G[e >> 2] = db[0];
            G[e + 4 >> 2] = db[1];
            f.Ok && 0 === a && 0 === d && (f.Ok = null);
            return 0
        } catch (g) {
            return "undefined" !== typeof vd && g instanceof O || E(g),
            g.Xj
        }
    },
    Ma: function(a, b, c, d) {
        try {
            a: {
                for (var e = Kd(a), f = a = 0; f < c; f++) {
                    var g = jd(e, F, G[b + 8 * f >> 2], G[b + (8 * f + 4) >> 2], void 0);
                    if (0 > g) {
                        var m = -1;
                        break a
                    }
                    a += g
                }
                m = a
            }
            G[d >> 2] = m;
            return 0
        } catch (n) {
            return "undefined" !== typeof vd && n instanceof O || E(n),
            n.Xj
        }
    },
    a: function() {
        return Za
    },
    ud: function(a, b, c, d) {
        function e(t, v, r, x, z, J) {
            var Q = 10 === t ? 28 : 16;
            z = 10 === t ? yd(z) : xd(z);
            Q = l(Q);
            z = Ld(Q, t, z, J);
            assert(!z);
            z = l(32);
            G[z + 4 >> 2] = t;
            G[z + 8 >> 2] = v;
            G[z + 12 >> 2] = r;
            G[z + 24 >> 2] = x;
            G[z + 20 >> 2] = Q;
            G[z + 16 >> 2] = 10 === t ? 28 : 16;
            G[z + 28 >> 2] = 0;
            return z
        }
        var f = 0
          , g = 0
          , m = 0
          , n = 0
          , p = 0
          , q = 0;
        c && (m = G[c >> 2],
        n = G[c + 4 >> 2],
        p = G[c + 8 >> 2],
        q = G[c + 12 >> 2]);
        p && !q && (q = 2 === p ? 17 : 6);
        !p && q && (p = 17 === q ? 2 : 1);
        0 === q && (q = 6);
        0 === p && (p = 1);
        if (!a && !b)
            return -2;
        if (m & -1088 || 0 !== c && G[c >> 2] & 2 && !a)
            return -1;
        if (m & 32)
            return -2;
        if (0 !== p && 1 !== p && 2 !== p)
            return -7;
        if (0 !== n && 2 !== n && 10 !== n)
            return -6;
        if (b && (b = K(b),
        g = parseInt(b, 10),
        isNaN(g)))
            return m & 1024 ? -2 : -8;
        if (!a)
            return 0 === n && (n = 2),
            0 === (m & 1) && (2 === n ? f = jh(2130706433) : f = [0, 0, 0, 1]),
            a = e(n, p, q, null, f, g),
            G[d >> 2] = a,
            0;
        a = K(a);
        f = Bd(a);
        if (null !== f)
            if (0 === n || 2 === n)
                n = 2;
            else if (10 === n && m & 8)
                f = [0, 0, jh(65535), f],
                n = 10;
            else
                return -2;
        else if (f = Cd(a),
        null !== f)
            if (0 === n || 10 === n)
                n = 10;
            else
                return -2;
        if (null != f)
            return a = e(n, p, q, a, f, g),
            G[d >> 2] = a,
            0;
        if (m & 4)
            return -2;
        a = Hd(a);
        f = Bd(a);
        0 === n ? n = 2 : 10 === n && (f = [0, 0, jh(65535), f]);
        a = e(n, p, q, null, f, g);
        G[d >> 2] = a;
        return 0
    },
    ka: function(a) {
        var b = Date.now();
        G[a >> 2] = b / 1E3 | 0;
        G[a + 4 >> 2] = b % 1E3 * 1E3 | 0;
        return 0
    },
    ea: function(a) {
        T.activeTexture(a)
    },
    ob: function(a, b) {
        T.attachShader(V[a], W[b])
    },
    O: function(a, b) {
        34962 == a ? T.xk = b : 34963 == a && (T.qk = b);
        35051 == a ? T.Mk = b : 35052 == a && (T.dk = b);
        T.bindBuffer(a, Ke[b])
    },
    sb: function(a, b) {
        T.bindFramebuffer(a, Me[b])
    },
    H: function(a, b) {
        T.bindRenderbuffer(a, Ne[b])
    },
    l: function(a, b) {
        T.bindTexture(a, Oe[b])
    },
    Ea: function(a, b) {
        T.blendFunc(a, b)
    },
    P: function(a, b, c, d) {
        T.blendFuncSeparate(a, b, c, d)
    },
    vb: function(a, b, c, d) {
        c ? T.bufferData(a, y, d, c, b) : T.bufferData(a, b, d)
    },
    aa: function(a) {
        T.clear(a)
    },
    Ha: function(a, b, c, d) {
        T.clearColor(a, b, c, d)
    },
    Ga: function(a) {
        T.clearDepth(a)
    },
    Bb: function(a) {
        T.clearStencil(a)
    },
    zb: function(a, b, c, d) {
        T.colorMask(!!a, !!b, !!c, !!d)
    },
    hi: function(a) {
        T.compileShader(W[a])
    },
    ei: function() {
        var a = Ye(V)
          , b = T.createProgram();
        b.name = a;
        b.Ck = b.Ak = b.Bk = 0;
        b.Bl = 1;
        V[a] = b;
        return a
    },
    rb: function(a) {
        var b = Ye(W);
        W[b] = T.createShader(a);
        return b
    },
    xb: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Ke[d];
            e && (T.deleteBuffer(e),
            e.name = 0,
            Ke[d] = null,
            d == T.xk && (T.xk = 0),
            d == T.qk && (T.qk = 0),
            d == T.Mk && (T.Mk = 0),
            d == T.dk && (T.dk = 0))
        }
    },
    ca: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = G[b + 4 * c >> 2]
              , e = Me[d];
            e && (T.deleteFramebuffer(e),
            e.name = 0,
            Me[d] = null)
        }
    },
    Ba: function(a) {
        if (a) {
            var b = V[a];
            b ? (T.deleteProgram(b),
            b.name = 0,
            V[a] = null) : X(1281)
        }
    },
    L: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Ne[d];
            e && (T.deleteRenderbuffer(e),
            e.name = 0,
            Ne[d] = null)
        }
    },
    F: function(a) {
        if (a) {
            var b = W[a];
            b ? (T.deleteShader(b),
            W[a] = null) : X(1281)
        }
    },
    fa: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = G[b + 4 * c >> 2]
              , e = Oe[d];
            e && (T.deleteTexture(e),
            e.name = 0,
            Oe[d] = null)
        }
    },
    Ka: function(a) {
        T.depthFunc(a)
    },
    Fa: function(a) {
        T.depthMask(!!a)
    },
    Cb: function(a, b) {
        T.depthRange(a, b)
    },
    o: function(a) {
        T.disable(a)
    },
    ub: function(a) {
        S.pk[a].enabled = !1;
        T.disableVertexAttribArray(a)
    },
    tb: function(a, b, c) {
        af(b + c);
        T.drawArrays(a, b, c);
        cf()
    },
    y: function(a) {
        T.enable(a)
    },
    B: function(a) {
        S.pk[a].enabled = !0;
        T.enableVertexAttribArray(a)
    },
    Q: function() {
        T.flush()
    },
    G: function(a, b, c, d) {
        T.framebufferRenderbuffer(a, b, c, Ne[d])
    },
    I: function(a, b, c, d, e) {
        T.framebufferTexture2D(a, b, c, Oe[d], e)
    },
    Ab: function(a) {
        T.frontFace(a)
    },
    wb: function(a, b) {
        bg(a, b, "createBuffer", Ke)
    },
    Ia: function(a, b) {
        bg(a, b, "createFramebuffer", Me)
    },
    Ca: function(a, b) {
        bg(a, b, "createRenderbuffer", Ne)
    },
    z: function(a, b) {
        bg(a, b, "createTexture", Oe)
    },
    za: function(a, b, c, d, e, f, g) {
        cg("getActiveUniform", a, b, c, d, e, f, g)
    },
    K: function(a, b) {
        return T.getAttribLocation(V[a], K(b))
    },
    Pa: function() {
        var a = T.getError() || Xe;
        Xe = 0;
        return a
    },
    nc: function(a, b) {
        eg(a, b, 2)
    },
    ha: function(a, b) {
        eg(a, b, 0)
    },
    ci: function(a, b, c, d) {
        a = T.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    Aa: function(a, b, c) {
        if (c)
            if (a >= Je)
                X(1281);
            else if (a = V[a],
            35716 == b)
                a = T.getProgramInfoLog(a),
                null === a && (a = "(unknown error)"),
                G[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.Ck)
                    for (b = 0; b < T.getProgramParameter(a, 35718); ++b)
                        a.Ck = Math.max(a.Ck, T.getActiveUniform(a, b).name.length + 1);
                G[c >> 2] = a.Ck
            } else if (35722 == b) {
                if (!a.Ak)
                    for (b = 0; b < T.getProgramParameter(a, 35721); ++b)
                        a.Ak = Math.max(a.Ak, T.getActiveAttrib(a, b).name.length + 1);
                G[c >> 2] = a.Ak
            } else if (35381 == b) {
                if (!a.Bk)
                    for (b = 0; b < T.getProgramParameter(a, 35382); ++b)
                        a.Bk = Math.max(a.Bk, T.getActiveUniformBlockName(a, b).length + 1);
                G[c >> 2] = a.Bk
            } else
                G[c >> 2] = T.getProgramParameter(a, b);
        else
            X(1281)
    },
    gi: function(a, b, c, d) {
        a = T.getShaderInfoLog(W[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? u(a, d, b) : 0;
        c && (G[c >> 2] = b)
    },
    pb: function(a, b, c) {
        c ? 35716 == b ? (a = T.getShaderInfoLog(W[a]),
        null === a && (a = "(unknown error)"),
        G[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = T.getShaderSource(W[a]),
        G[c >> 2] = a ? a.length + 1 : 0) : G[c >> 2] = T.getShaderParameter(W[a], b) : X(1281)
    },
    p: function(a) {
        var b = Ve[a];
        if (!b) {
            switch (a) {
            case 7939:
                b = T.getSupportedExtensions() || [];
                b = b.concat(b.map(function(d) {
                    return "GL_" + d
                }));
                b = gg(b.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                (b = T.getParameter(a)) || X(1280);
                b = b && gg(b);
                break;
            case 7938:
                b = gg("OpenGL ES 3.0 (" + T.getParameter(7938) + ")");
                break;
            case 35724:
                b = T.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length && (c[1] += "0"),
                b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = gg(b);
                break;
            default:
                X(1280)
            }
            Ve[a] = b
        }
        return b
    },
    i: function(a, b) {
        b = K(b);
        if (a = V[a]) {
            ig(a);
            var c = a.Qk
              , d = 0
              , e = b
              , f = hg(b);
            0 < f && (d = parseInt(b.slice(f + 1)) >>> 0,
            e = b.slice(0, f));
            if ((e = a.Cl[e]) && d < e[0] && (d += e[1],
            c[d] = c[d] || T.getUniformLocation(a, b)))
                return d
        } else
            X(1281);
        return -1
    },
    di: function(a) {
        a = V[a];
        T.linkProgram(a);
        a.Qk = 0;
        a.Cl = {}
    },
    Ja: function(a, b) {
        T.pixelStorei(a, b)
    },
    da: function(a, b, c, d, e, f, g) {
        if (T.Mk)
            T.readPixels(a, b, c, d, e, f, g);
        else {
            var m = lg(f);
            T.readPixels(a, b, c, d, e, f, m, g >> mg(m))
        }
    },
    X: function(a, b, c, d) {
        T.renderbufferStorage(a, b, c, d)
    },
    R: function(a, b, c, d) {
        T.scissor(a, b, c, d)
    },
    qb: function(a, b, c, d) {
        b = $e(b, c, d);
        T.shaderSource(W[a], b)
    },
    Z: function(a, b, c) {
        T.stencilFunc(a, b, c)
    },
    yb: function(a) {
        T.stencilMask(a)
    },
    _: function(a, b, c) {
        T.stencilOp(a, b, c)
    },
    s: function(a, b, c, d, e, f, g, m, n) {
        if (T.dk)
            T.texImage2D(a, b, c, d, e, f, g, m, n);
        else if (n) {
            var p = lg(m);
            T.texImage2D(a, b, c, d, e, f, g, m, p, n >> mg(p))
        } else
            T.texImage2D(a, b, c, d, e, f, g, m, null)
    },
    k: function(a, b, c) {
        T.texParameterf(a, b, c)
    },
    ba: function(a, b, c, d, e, f, g, m, n) {
        if (T.dk)
            T.texSubImage2D(a, b, c, d, e, f, g, m, n);
        else if (n) {
            var p = lg(m);
            T.texSubImage2D(a, b, c, d, e, f, g, m, p, n >> mg(p))
        } else
            T.texSubImage2D(a, b, c, d, e, f, g, m, null)
    },
    Y: function(a, b) {
        T.uniform1f(Y(a), b)
    },
    bi: function(a, b, c) {
        T.uniform1fv(Y(a), I, c >> 2, b)
    },
    M: function(a, b) {
        T.uniform1i(Y(a), b)
    },
    _h: function(a, b, c) {
        T.uniform1iv(Y(a), G, c >> 2, b)
    },
    ai: function(a, b, c) {
        T.uniform2fv(Y(a), I, c >> 2, 2 * b)
    },
    Zh: function(a, b, c) {
        T.uniform2iv(Y(a), G, c >> 2, 2 * b)
    },
    $h: function(a, b, c) {
        T.uniform3fv(Y(a), I, c >> 2, 3 * b)
    },
    Yh: function(a, b, c) {
        T.uniform3iv(Y(a), G, c >> 2, 3 * b)
    },
    x: function(a, b, c) {
        T.uniform4fv(Y(a), I, c >> 2, 4 * b)
    },
    Xh: function(a, b, c) {
        T.uniform4iv(Y(a), G, c >> 2, 4 * b)
    },
    Wh: function(a, b, c, d) {
        T.uniformMatrix2fv(Y(a), !!c, I, d >> 2, 4 * b)
    },
    Vh: function(a, b, c, d) {
        T.uniformMatrix3fv(Y(a), !!c, I, d >> 2, 9 * b)
    },
    Da: function(a, b, c, d) {
        T.uniformMatrix4fv(Y(a), !!c, I, d >> 2, 16 * b)
    },
    fi: function(a) {
        a = V[a];
        T.useProgram(a);
        T.om = a
    },
    m: function(a, b, c, d, e, f) {
        var g = S.pk[a];
        T.xk ? (g.Lk = !1,
        T.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b,
        g.type = c,
        g.ul = d,
        g.fl = e,
        g.Wj = f,
        g.Lk = !0,
        g.Dl = function(m, n, p, q, t, v) {
            this.vertexAttribPointer(m, n, p, q, t, v)
        }
        )
    },
    S: function(a, b, c, d) {
        T.viewport(a, b, c, d)
    },
    V: kh,
    r: lh,
    N: mh,
    J: nh,
    w: oh,
    Wa: ph,
    Gb: qh,
    Eb: rh,
    n: sh,
    j: th,
    e: uh,
    f: wh,
    ab: xh,
    vh: yh,
    Fb: zh,
    _a: function(a) {
        return a
    },
    ga: function(a) {
        kc();
        var b = new Date(G[a + 20 >> 2] + 1900,G[a + 16 >> 2],G[a + 12 >> 2],G[a + 8 >> 2],G[a + 4 >> 2],G[a >> 2],0)
          , c = G[a + 32 >> 2]
          , d = b.getTimezoneOffset()
          , e = new Date(b.getFullYear(),0,1)
          , f = (new Date(b.getFullYear(),6,1)).getTimezoneOffset()
          , g = e.getTimezoneOffset()
          , m = Math.min(g, f);
        0 > c ? G[a + 32 >> 2] = Number(f != g && m == d) : 0 < c != (m == d) && (f = Math.max(g, f),
        b.setTime(b.getTime() + 6E4 * ((0 < c ? m : f) - d)));
        G[a + 24 >> 2] = b.getDay();
        G[a + 28 >> 2] = (b.getTime() - e.getTime()) / 864E5 | 0;
        G[a >> 2] = b.getSeconds();
        G[a + 4 >> 2] = b.getMinutes();
        G[a + 8 >> 2] = b.getHours();
        G[a + 12 >> 2] = b.getDate();
        G[a + 16 >> 2] = b.getMonth();
        return b.getTime() / 1E3 | 0
    },
    b: function(a) {
        Za = a
    },
    $: Sg,
    Lb: function(a, b, c, d) {
        return Sg(a, b, c, d)
    },
    A: function(a) {
        var b = Date.now() / 1E3 | 0;
        a && (G[a >> 2] = b);
        return b
    },
    t: function(a) {
        kc();
        var b = new Date(Date.UTC(G[a + 20 >> 2] + 1900, G[a + 16 >> 2], G[a + 12 >> 2], G[a + 8 >> 2], G[a + 4 >> 2], G[a >> 2], 0));
        G[a + 24 >> 2] = b.getUTCDay();
        G[a + 28 >> 2] = (b.getTime() - Date.UTC(b.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
        return b.getTime() / 1E3 | 0
    }
};
(function() {
    function a(f) {
        f = f.exports;
        f = ah(f);
        h.asm = f;
        gb = h.asm.ii;
        vb();
        xb.unshift(h.asm.ji);
        Hb("wasm-instantiate")
    }
    function b(f) {
        a(f.instance)
    }
    function c(f) {
        return Mb().then(function(g) {
            return WebAssembly.instantiate(g, d)
        }).then(function(g) {
            return g
        }).then(f, function(g) {
            k("failed to asynchronously prepare wasm: " + g);
            E(g)
        })
    }
    var d = {
        a: Ah
    };
    Gb("wasm-instantiate");
    if (h.instantiateWasm)
        try {
            var e = h.instantiateWasm(d, a);
            return e = ah(e)
        } catch (f) {
            return k("Module.instantiateWasm callback failed with error: " + f),
            !1
        }
    (function() {
        return ab || "function" !== typeof WebAssembly.instantiateStreaming || Ib() || Jb.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(Jb, {
            credentials: "same-origin"
        }).then(function(f) {
            return WebAssembly.instantiateStreaming(f, d).then(b, function(g) {
                k("wasm streaming compile failed: " + g);
                k("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    }
    )();
    return {}
}
)();
h.___wasm_call_ctors = function() {
    return (h.___wasm_call_ctors = h.asm.ji).apply(null, arguments)
}
;
var l = h._malloc = function() {
    return (l = h._malloc = h.asm.ki).apply(null, arguments)
}
  , ea = h._free = function() {
    return (ea = h._free = h.asm.li).apply(null, arguments)
}
  , da = h._memcpy = function() {
    return (da = h._memcpy = h.asm.ni).apply(null, arguments)
}
  , Dd = h._htons = function() {
    return (Dd = h._htons = h.asm.oi).apply(null, arguments)
}
  , jh = h._htonl = function() {
    return (jh = h._htonl = h.asm.pi).apply(null, arguments)
}
  , zd = h._ntohs = function() {
    return (zd = h._ntohs = h.asm.qi).apply(null, arguments)
}
  , Zb = h.___errno_location = function() {
    return (Zb = h.___errno_location = h.asm.ri).apply(null, arguments)
}
;
h._join_game_callback = function() {
    return (h._join_game_callback = h.asm.si).apply(null, arguments)
}
;
h._api_error_callback = function() {
    return (h._api_error_callback = h.asm.ti).apply(null, arguments)
}
;
h._create_game_callback = function() {
    return (h._create_game_callback = h.asm.ui).apply(null, arguments)
}
;
h._player_info_callback = function() {
    return (h._player_info_callback = h.asm.vi).apply(null, arguments)
}
;
h._log_next_game_state = function() {
    return (h._log_next_game_state = h.asm.wi).apply(null, arguments)
}
;
h._start_game = function() {
    return (h._start_game = h.asm.xi).apply(null, arguments)
}
;
h._video_playback_started = function() {
    return (h._video_playback_started = h.asm.yi).apply(null, arguments)
}
;
h._video_playback_ended = function() {
    return (h._video_playback_ended = h.asm.zi).apply(null, arguments)
}
;
h._post_video_upload_callback = function() {
    return (h._post_video_upload_callback = h.asm.Ai).apply(null, arguments)
}
;
h._YYSum = function() {
    return (h._YYSum = h.asm.Bi).apply(null, arguments)
}
;
h._main = function() {
    return (h._main = h.asm.Ci).apply(null, arguments)
}
;
h._FSSyncCompleted = function() {
    return (h._FSSyncCompleted = h.asm.Di).apply(null, arguments)
}
;
var jc = h.__get_tzname = function() {
    return (jc = h.__get_tzname = h.asm.Ei).apply(null, arguments)
}
  , ic = h.__get_daylight = function() {
    return (ic = h.__get_daylight = h.asm.Fi).apply(null, arguments)
}
  , hc = h.__get_timezone = function() {
    return (hc = h.__get_timezone = h.asm.Gi).apply(null, arguments)
}
  , mb = h.stackSave = function() {
    return (mb = h.stackSave = h.asm.Hi).apply(null, arguments)
}
  , lb = h.stackRestore = function() {
    return (lb = h.stackRestore = h.asm.Ii).apply(null, arguments)
}
  , ua = h.stackAlloc = function() {
    return (ua = h.stackAlloc = h.asm.Ji).apply(null, arguments)
}
  , eh = h._setThrew = function() {
    return (eh = h._setThrew = h.asm.Ki).apply(null, arguments)
}
  , gh = h.___cxa_can_catch = function() {
    return (gh = h.___cxa_can_catch = h.asm.Li).apply(null, arguments)
}
  , bc = h.___cxa_is_pointer_type = function() {
    return (bc = h.___cxa_is_pointer_type = h.asm.Mi).apply(null, arguments)
}
  , hh = h.dynCall_viiii = function() {
    return (hh = h.dynCall_viiii = h.asm.Ni).apply(null, arguments)
}
  , Tf = h.dynCall_iiii = function() {
    return (Tf = h.dynCall_iiii = h.asm.Oi).apply(null, arguments)
}
  , dynCall_vii = h.dynCall_vii = function() {
    return (dynCall_vii = h.dynCall_vii = h.asm.Pi).apply(null, arguments)
}
  , dynCall_vi = h.dynCall_vi = function() {
    return (dynCall_vi = h.dynCall_vi = h.asm.Qi).apply(null, arguments)
}
  , fh = h.dynCall_ii = function() {
    return (fh = h.dynCall_ii = h.asm.Ri).apply(null, arguments)
}
  , Bh = h.dynCall_viii = function() {
    return (Bh = h.dynCall_viii = h.asm.Si).apply(null, arguments)
}
  , dynCall_v = h.dynCall_v = function() {
    return (dynCall_v = h.dynCall_v = h.asm.Ti).apply(null, arguments)
}
  , Ch = h.dynCall_iiiii = function() {
    return (Ch = h.dynCall_iiiii = h.asm.Ui).apply(null, arguments)
}
;
h.dynCall_iiiiii = function() {
    return (h.dynCall_iiiiii = h.asm.Vi).apply(null, arguments)
}
;
h.dynCall_viiiii = function() {
    return (h.dynCall_viiiii = h.asm.Wi).apply(null, arguments)
}
;
h.dynCall_viiiiiii = function() {
    return (h.dynCall_viiiiiii = h.asm.Xi).apply(null, arguments)
}
;
var dynCall_iii = h.dynCall_iii = function() {
    return (dynCall_iii = h.dynCall_iii = h.asm.Yi).apply(null, arguments)
}
;
h.dynCall_viij = function() {
    return (h.dynCall_viij = h.asm.Zi).apply(null, arguments)
}
;
h.dynCall_iiifffffiiii = function() {
    return (h.dynCall_iiifffffiiii = h.asm._i).apply(null, arguments)
}
;
var Dh = h.dynCall_viiiiiiiii = function() {
    return (Dh = h.dynCall_viiiiiiiii = h.asm.$i).apply(null, arguments)
}
  , Eh = h.dynCall_vij = function() {
    return (Eh = h.dynCall_vij = h.asm.aj).apply(null, arguments)
}
;
h.dynCall_iiiffi = function() {
    return (h.dynCall_iiiffi = h.asm.bj).apply(null, arguments)
}
;
h.dynCall_viif = function() {
    return (h.dynCall_viif = h.asm.cj).apply(null, arguments)
}
;
var Fh = h.dynCall_i = function() {
    return (Fh = h.dynCall_i = h.asm.dj).apply(null, arguments)
}
  , Gh = h.dynCall_j = function() {
    return (Gh = h.dynCall_j = h.asm.ej).apply(null, arguments)
}
;
h.dynCall_di = function() {
    return (h.dynCall_di = h.asm.fj).apply(null, arguments)
}
;
var Hh = h.dynCall_jj = function() {
    return (Hh = h.dynCall_jj = h.asm.gj).apply(null, arguments)
}
;
h.dynCall_iiiiiij = function() {
    return (h.dynCall_iiiiiij = h.asm.hj).apply(null, arguments)
}
;
h.dynCall_iiji = function() {
    return (h.dynCall_iiji = h.asm.ij).apply(null, arguments)
}
;
var Ih = h.dynCall_iiiiiiiiii = function() {
    return (Ih = h.dynCall_iiiiiiiiii = h.asm.jj).apply(null, arguments)
}
;
h.dynCall_viifi = function() {
    return (h.dynCall_viifi = h.asm.kj).apply(null, arguments)
}
;
h.dynCall_viifii = function() {
    return (h.dynCall_viifii = h.asm.lj).apply(null, arguments)
}
;
h.dynCall_viiiiii = function() {
    return (h.dynCall_viiiiii = h.asm.mj).apply(null, arguments)
}
;
h.dynCall_fif = function() {
    return (h.dynCall_fif = h.asm.nj).apply(null, arguments)
}
;
h.dynCall_iiiiiii = function() {
    return (h.dynCall_iiiiiii = h.asm.oj).apply(null, arguments)
}
;
h.dynCall_viiiiiiii = function() {
    return (h.dynCall_viiiiiiii = h.asm.pj).apply(null, arguments)
}
;
h.dynCall_iiiiiiii = function() {
    return (h.dynCall_iiiiiiii = h.asm.qj).apply(null, arguments)
}
;
h.dynCall_viiffiifii = function() {
    return (h.dynCall_viiffiifii = h.asm.rj).apply(null, arguments)
}
;
h.dynCall_viiifffffffff = function() {
    return (h.dynCall_viiifffffffff = h.asm.sj).apply(null, arguments)
}
;
h.dynCall_iiid = function() {
    return (h.dynCall_iiid = h.asm.tj).apply(null, arguments)
}
;
var ih = h.dynCall_idi = function() {
    return (ih = h.dynCall_idi = h.asm.uj).apply(null, arguments)
}
;
h.dynCall_jiji = function() {
    return (h.dynCall_jiji = h.asm.vj).apply(null, arguments)
}
;
h.dynCall_ji = function() {
    return (h.dynCall_ji = h.asm.wj).apply(null, arguments)
}
;
h.dynCall_iiiiiidii = function() {
    return (h.dynCall_iiiiiidii = h.asm.xj).apply(null, arguments)
}
;
h.dynCall_iiiiiiiii = function() {
    return (h.dynCall_iiiiiiiii = h.asm.yj).apply(null, arguments)
}
;
h.dynCall_viiiiiiiiiii = function() {
    return (h.dynCall_viiiiiiiiiii = h.asm.zj).apply(null, arguments)
}
;
h.dynCall_vffff = function() {
    return (h.dynCall_vffff = h.asm.Aj).apply(null, arguments)
}
;
h.dynCall_vf = function() {
    return (h.dynCall_vf = h.asm.Bj).apply(null, arguments)
}
;
h.dynCall_vff = function() {
    return (h.dynCall_vff = h.asm.Cj).apply(null, arguments)
}
;
h.dynCall_vfi = function() {
    return (h.dynCall_vfi = h.asm.Dj).apply(null, arguments)
}
;
h.dynCall_vif = function() {
    return (h.dynCall_vif = h.asm.Ej).apply(null, arguments)
}
;
h.dynCall_viff = function() {
    return (h.dynCall_viff = h.asm.Fj).apply(null, arguments)
}
;
h.dynCall_vifff = function() {
    return (h.dynCall_vifff = h.asm.Gj).apply(null, arguments)
}
;
h.dynCall_viffff = function() {
    return (h.dynCall_viffff = h.asm.Hj).apply(null, arguments)
}
;
h.dynCall_viiiiiiiiii = function() {
    return (h.dynCall_viiiiiiiiii = h.asm.Ij).apply(null, arguments)
}
;
h.dynCall_iidiiii = function() {
    return (h.dynCall_iidiiii = h.asm.Jj).apply(null, arguments)
}
;
h.dynCall_iiiiij = function() {
    return (h.dynCall_iiiiij = h.asm.Kj).apply(null, arguments)
}
;
h.dynCall_iiiiid = function() {
    return (h.dynCall_iiiiid = h.asm.Lj).apply(null, arguments)
}
;
h.dynCall_iiiiijj = function() {
    return (h.dynCall_iiiiijj = h.asm.Mj).apply(null, arguments)
}
;
h.dynCall_iiiiiijj = function() {
    return (h.dynCall_iiiiiijj = h.asm.Nj).apply(null, arguments)
}
;
h.dynCall_viijii = function() {
    return (h.dynCall_viijii = h.asm.Oj).apply(null, arguments)
}
;
h._asyncify_start_unwind = function() {
    return (h._asyncify_start_unwind = h.asm.Pj).apply(null, arguments)
}
;
h._asyncify_stop_unwind = function() {
    return (h._asyncify_stop_unwind = h.asm.Qj).apply(null, arguments)
}
;
h._asyncify_start_rewind = function() {
    return (h._asyncify_start_rewind = h.asm.Rj).apply(null, arguments)
}
;
h._asyncify_stop_rewind = function() {
    return (h._asyncify_stop_rewind = h.asm.Sj).apply(null, arguments)
}
;
function mh(a, b, c) {
    var d = mb();
    try {
        return dynCall_iii(a, b, c)
    } catch (e) {
        lb(d);
        if (e !== e + 0 && "longjmp" !== e)
            throw e;
        eh(1, 0)
    }
}
function wh(a, b, c, d) {
    var e = mb();
    try {
        Bh(a, b, c, d)
    } catch (f) {
        lb(e);
        if (f !== f + 0 && "longjmp" !== f)
            throw f;
        eh(1, 0)
    }
}
function oh(a, b, c, d, e) {
    var f = mb();
    try {
        return Ch(a, b, c, d, e)
    } catch (g) {
        lb(f);
        if (g !== g + 0 && "longjmp" !== g)
            throw g;
        eh(1, 0)
    }
}
function lh(a, b) {
    var c = mb();
    try {
        return fh(a, b)
    } catch (d) {
        lb(c);
        if (d !== d + 0 && "longjmp" !== d)
            throw d;
        eh(1, 0)
    }
}
function nh(a, b, c, d) {
    var e = mb();
    try {
        return Tf(a, b, c, d)
    } catch (f) {
        lb(e);
        if (f !== f + 0 && "longjmp" !== f)
            throw f;
        eh(1, 0)
    }
}
function uh(a, b, c) {
    var d = mb();
    try {
        dynCall_vii(a, b, c)
    } catch (e) {
        lb(d);
        if (e !== e + 0 && "longjmp" !== e)
            throw e;
        eh(1, 0)
    }
}
function yh(a, b, c, d, e, f, g, m, n, p) {
    var q = mb();
    try {
        Dh(a, b, c, d, e, f, g, m, n, p)
    } catch (t) {
        lb(q);
        if (t !== t + 0 && "longjmp" !== t)
            throw t;
        eh(1, 0)
    }
}
function th(a, b) {
    var c = mb();
    try {
        dynCall_vi(a, b)
    } catch (d) {
        lb(c);
        if (d !== d + 0 && "longjmp" !== d)
            throw d;
        eh(1, 0)
    }
}
function xh(a, b, c, d, e) {
    var f = mb();
    try {
        hh(a, b, c, d, e)
    } catch (g) {
        lb(f);
        if (g !== g + 0 && "longjmp" !== g)
            throw g;
        eh(1, 0)
    }
}
function kh(a) {
    var b = mb();
    try {
        return Fh(a)
    } catch (c) {
        lb(b);
        if (c !== c + 0 && "longjmp" !== c)
            throw c;
        eh(1, 0)
    }
}
function sh(a) {
    var b = mb();
    try {
        dynCall_v(a)
    } catch (c) {
        lb(b);
        if (c !== c + 0 && "longjmp" !== c)
            throw c;
        eh(1, 0)
    }
}
function ph(a, b, c, d, e, f, g, m, n, p) {
    var q = mb();
    try {
        return Ih(a, b, c, d, e, f, g, m, n, p)
    } catch (t) {
        lb(q);
        if (t !== t + 0 && "longjmp" !== t)
            throw t;
        eh(1, 0)
    }
}
function qh(a) {
    var b = mb();
    try {
        return Gh(a)
    } catch (c) {
        lb(b);
        if (c !== c + 0 && "longjmp" !== c)
            throw c;
        eh(1, 0)
    }
}
function zh(a, b, c, d) {
    var e = mb();
    try {
        Eh(a, b, c, d)
    } catch (f) {
        lb(e);
        if (f !== f + 0 && "longjmp" !== f)
            throw f;
        eh(1, 0)
    }
}
function rh(a, b, c) {
    var d = mb();
    try {
        return Hh(a, b, c)
    } catch (e) {
        lb(d);
        if (e !== e + 0 && "longjmp" !== e)
            throw e;
        eh(1, 0)
    }
}
h.cwrap = function(a, b, c, d) {
    c = c || [];
    var e = c.every(function(f) {
        return "number" === f
    });
    return "string" !== b && e && !d ? jb(a) : function() {
        return kb(a, b, c, arguments, d)
    }
}
;
h.addRunDependency = Gb;
h.removeRunDependency = Hb;
h.FS_createPath = nd;
h.FS_createDataFile = pd;
h.FS_createPreloadedFile = td;
h.FS_createLazyFile = sd;
h.FS_createDevice = qd;
h.FS_unlink = Ea;
h.dynCall = Rb;
h.dynCall = Rb;
var Jh;
function Ua(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
Fb = function Kh() {
    Jh || Lh();
    Jh || (Fb = Kh)
}
;
function Lh(a) {
    function b() {
        if (!Jh && (Jh = !0,
        h.calledRun = !0,
        !hb)) {
            R.root = Ob(R, null);
            h.noFSInit || ld || (ld = !0,
            kd(),
            h.stdin = h.stdin,
            h.stdout = h.stdout,
            h.stderr = h.stderr,
            h.stdin ? qd("/dev", "stdin", h.stdin) : dd("/dev/tty", "/dev/stdin"),
            h.stdout ? qd("/dev", "stdout", null, h.stdout) : dd("/dev/tty", "/dev/stdout"),
            h.stderr ? qd("/dev", "stderr", null, h.stderr) : dd("/dev/tty1", "/dev/stderr"),
            ed("/dev/stdin", 0),
            ed("/dev/stdout", 1),
            ed("/dev/stderr", 1));
            Lc = !1;
            Ub(xb);
            Ub(yb);
            if (h.onRuntimeInitialized)
                h.onRuntimeInitialized();
            if (Mh) {
                var c = a
                  , d = h._main;
                c = c || [];
                var e = c.length + 1
                  , f = ua(4 * (e + 1));
                G[f >> 2] = tb(Ia);
                for (var g = 1; g < e; g++)
                    G[(f >> 2) + g] = tb(c[g - 1]);
                G[(f >> 2) + e] = 0;
                try {
                    var m = d(e, f);
                    Xd(m)
                } catch (n) {
                    Wb(n)
                } finally {}
            }
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length; )
                    c = h.postRun.shift(),
                    Ab.unshift(c);
            Ub(Ab)
        }
    }
    a = a || Ha;
    if (!(0 < Db)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length; )
                Cb();
        Ub(wb);
        0 < Db || (h.setStatus ? (h.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                h.setStatus("")
            }, 1);
            b()
        }, 1)) : b())
    }
}
h.run = Lh;
function Xd(a) {
    ib = a;
    noExitRuntime || 0 < Va || (Bb = !0);
    ib = a;
    if (!(noExitRuntime || 0 < Va)) {
        if (h.onExit)
            h.onExit(a);
        hb = !0
    }
    Ja(a, new Ua(a))
}
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
        h.preInit.pop()();
var Mh = !0;
h.noInitialRun && (Mh = !1);
Lh();
(function() {
    if ("undefined" != typeof window && !window.mi) {
        webtransport_async_read = async d => {
            try {
                let g = d.wk.datagrams.readable.getReader();
                for (var e = !1; !e; ) {
                    var f;
                    ({value: f, done: e} = await g.read());
                    d.vl.push(f)
                }
                console.log("Closing WebTransport connection")
            } catch (g) {
                console.error("Could not open channel to read datagrams, " + g)
            }
        }
        ;
        webtransport_async_connect = async (d, e) => {
            try {
                await d.wk.ready;
                console.log("Connected successfully to relay");
                try {
                    d.Sk = d.wk.datagrams.writable.getWriter()
                } catch (f) {
                    console.error("Could not open channel to send datagrams, " + f)
                }
            } catch (f) {
                console.error("Connection failed to " + e + ", " + f)
            }
            d.wk.closed.then( () => {
                d.Sk = null;
                console.log("Connection to " + e + " closed gracefully")
            }
            ).catch( () => {
                d.Sk = null;
                console.error("Connection to " + e + " closed abruptly")
            }
            );
            webtransport_async_read(d)
        }
        ;
        class c {
            constructor() {
                this.Sk = this.wk = null;
                this.vl = [];
                this.url = ""
            }
            destroy() {
                null != this.wk && this.wk && (this.wk.close(),
                this.wk = null);
                this.Sk = null
            }
            connect(d) {
                try {
                    this.wk = new WebTransport(d)
                } catch (e) {
                    console.error("Failed to initialise WebTransport, " + e)
                }
                webtransport_async_connect(this, d)
            }
            send(d, e) {
                null == this.wk && this.connect(this.url);
                if (this.Sk) {
                    d = h.HEAPU8.subarray(d, d + e);
                    for (var f = new ArrayBuffer(e), g = new Uint8Array(f), m = 0; m < e; m++)
                        g[m] = d[m];
                    this.Sk.write(f)
                }
            }
            Cn(d, e) {
                if (0 == this.vl.length)
                    return -1;
                var f = this.vl[0];
                this.vl.shift();
                var g = f.length;
                if (g > e)
                    return -1;
                d = h.HEAPU8.subarray(d, d + g);
                for (e = 0; e < g; e++)
                    d[e] = f[e];
                return g
            }
        }
        var a = []
          , b = 0;
        webtransport_set_relay = (d, e) => {
            const f = b++;
            a[f] = new c;
            a[f].url = d + ":" + e;
            return f
        }
        ;
        webtransport_send = (d, e, f) => {
            a[d].send(e, f)
        }
        ;
        webtransport_receive = (d, e, f) => a[d].Cn(e, f);
        webtransport_destroy = d => {
            a[d].destroy();
            a[d] = null
        }
    }
}
)();
"undefined" != typeof window && (api_error_callback = h.cwrap("api_error_callback", null, ["number", "string"]),
create_game_callback = h.cwrap("create_game_callback", null, ["string", "string", "string"]),
join_game_callback = h.cwrap("join_game_callback", null, ["string"]),
player_info_callback = h.cwrap("player_info_callback", null, "number string string string bool string".split(" ")),
log_next_game_state = h.cwrap("log_next_game_state", null, []),
start_game = h.cwrap("start_game", null, []),
init_request_parameters = a => {
    var b = {
        method: "POST",
        credentials: "include",
        headers: {}
    };
    b.headers["Content-Type"] = "application/json;charset=UTF-8";
    b.headers["Access-Control-Allow-Credentials"] = "true";
    b.body = JSON.stringify(a);
    return b
}
,
gxc_room_size = 4,
gxc_local_player = 0,
gxc_player_info = [],
gxc_set_room_info = (a, b) => {
    gxc_room_size = a;
    gxc_local_player = b
}
,
set_local_share_url = a => {
    window.shareUrl = a;
    if (a = document.getElementById("share-button"))
        a.style.visibility = "visible"
}
,
post_share_url = a => {
    if (window.parent) {
        var b = {
            type: "share_url"
        };
        b.shareUrl = a;
        window.parent.postMessage(b, "*")
    }
}
,
gxc_request_room = (a, b, c, d, e) => {
    var f = location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev");
    f && (d = "debug");
    console.log("Requesting " + c + "-player game with game-id " + d);
    var g = {};
    g.roomSize = c;
    g.region = b;
    b = init_request_parameters(g);
    fetch("https://" + a + "/gg/games/" + d + "/rooms" + (e.length ? "?trackId=" + e : ""), b).then(m => {
        m.ok ? m.json().then(n => {
            var p = n.data.shareUrl
              , q = n.data.roomUrl;
            n = n.data.joinRoomUrl;
            f ? (p = location.protocol + "//" + location.host + location.pathname + "?game=debug&roomUrl=" + q,
            set_local_share_url(p)) : post_share_url(p);
            create_game_callback(n, p, q)
        }
        ) : m.json().then(n => {
            if (window.parent) {
                var p = {
                    type: "api_error"
                };
                p.error = n.errors[0].code;
                window.parent.postMessage(p, "*")
            }
            api_error_callback(m.status, n.errors[0].code)
        }
        )
    }
    )
}
,
gxc_join_room = (a, b, c, d) => {
    console.log("Joining game '" + b + "' with track-id '" + c + "' on environment '" + a + "' using url " + d);
    var e = {};
    "debug" != b && (e.gameId = b,
    e.trackId = c);
    e.roomUrl = d;
    b = init_request_parameters(e);
    fetch("https://" + a + "/gg/rooms", b).then(f => {
        f.ok ? f.json().then(g => {
            join_game_callback(g.data.roomUrl)
        }
        ) : f.json().then(g => {
            if (window.parent) {
                var m = {
                    type: "api_error"
                };
                m.error = g.errors[0].code;
                window.parent.postMessage(m, "*")
            }
            api_error_callback(f.status, g.errors[0].code)
        }
        )
    }
    );
    location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev") ? set_local_share_url(window.location.href) : post_share_url(window.location.href)
}
,
gxc_get_player_info = (a, b, c) => {
    console.log("Requesting player info.");
    var d = {
        method: "GET",
        credentials: "include",
        headers: {}
    };
    d.headers["Content-Type"] = "application/json;charset=UTF-8";
    d.headers["Access-Control-Allow-Credentials"] = "true";
    let e = "https://" + b + "/images/AvatarPlaceholder.png";
    fetch("https://" + a + "/gg/rooms?roomUrl=" + c, d).then(f => {
        f.ok ? f.json().then(g => {
            gxc_player_info = g.data.players;
            gxc_player_info.forEach(m => {
                null !== m.playerId && (null === m.user ? (m.user = {},
                m.user.username = "unknown",
                m.user.avatarUrl = e,
                m.user.userId = "",
                m.user.guest = !0) : (null === m.user.avatarUrl && (m.user.avatarUrl = e),
                m.user.guest = !1))
            }
            );
            window.parent && (g = {
                type: "players"
            },
            g.roomSize = gxc_room_size,
            g.local = gxc_local_player,
            g.players = gxc_player_info,
            window.parent.postMessage(g, "*"));
            gxc_player_info.forEach(m => {
                null !== m.playerId && player_info_callback(m.playerId, m.user.username, m.user.avatarUrl, m.status, m.user.guest, m.user.userId)
            }
            )
        }
        ) : (404 == f.status && [0, 1, 2, 3].forEach(g => player_info_callback(g, "unknown", e, "JOINED", !0, "")),
        f.json().then(g => console.log(g)))
    }
    )
}
,
gxc_set_player_status = (a, b) => {
    gxc_player_info.forEach(d => {
        d.playerId === a && (d.status = b)
    }
    );
    if (window.parent) {
        var c = {
            type: "players"
        };
        c.roomSize = gxc_room_size;
        c.local = gxc_local_player;
        c.players = gxc_player_info;
        window.parent.postMessage(c, "*")
    }
}
);
