var Kg = Object.defineProperty,
  Zg = Object.defineProperties;
var Qg = Object.getOwnPropertyDescriptors;
var pd = Object.getOwnPropertySymbols;
var Jg = Object.prototype.hasOwnProperty,
  ev = Object.prototype.propertyIsEnumerable;
var Or = Math.pow,
  Xa = (xe, qe, we) =>
    qe in xe
      ? Kg(xe, qe, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: we,
        })
      : (xe[qe] = we),
  Bi = (xe, qe) => {
    for (var we in qe || (qe = {})) Jg.call(qe, we) && Xa(xe, we, qe[we]);
    if (pd) for (var we of pd(qe)) ev.call(qe, we) && Xa(xe, we, qe[we]);
    return xe;
  },
  Ya = (xe, qe) => Zg(xe, Qg(qe));
var B = (xe, qe, we) => Xa(xe, typeof qe != "symbol" ? qe + "" : qe, we);
(function (xe) {
  typeof define == "function" && define.amd ? define(xe) : xe();
})(function () {
  "use strict";
  function xe(r) {
    if (r === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r;
  }
  function qe(r, e) {
    (r.prototype = Object.create(e.prototype)),
      (r.prototype.constructor = r),
      (r.__proto__ = e);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var we = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Lr = { duration: 0.5, overwrite: !1, delay: 0 },
    io,
    nt,
    Ce,
    ti = 1e8,
    ve = 1 / ti,
    ro = Math.PI * 2,
    md = ro / 4,
    gd = 0,
    ja = Math.sqrt,
    vd = Math.cos,
    _d = Math.sin,
    Ze = function (e) {
      return typeof e == "string";
    },
    De = function (e) {
      return typeof e == "function";
    },
    Di = function (e) {
      return typeof e == "number";
    },
    no = function (e) {
      return typeof e == "undefined";
    },
    _i = function (e) {
      return typeof e == "object";
    },
    Mt = function (e) {
      return e !== !1;
    },
    so = function () {
      return typeof window != "undefined";
    },
    ts = function (e) {
      return De(e) || Ze(e);
    },
    Ua =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    ut = Array.isArray,
    oo = /(?:-?\.?\d|\.)+/gi,
    Ka = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Dr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ao = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Za = /[+-]=-?[.\d]+/,
    Qa = /[^,'"\[\]\s]+/gi,
    yd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ae,
    yi,
    lo,
    uo,
    Vt = {},
    is = {},
    Ja,
    el = function (e) {
      return (is = kr(e, Vt)) && Dt;
    },
    co = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    un = function (e, t) {
      return !t && console.warn(e);
    },
    tl = function (e, t) {
      return (e && (Vt[e] = t) && is && (is[e] = t)) || Vt;
    },
    cn = function () {
      return 0;
    },
    wd = { suppressEvents: !0, isStart: !0, kill: !1 },
    rs = { suppressEvents: !0, kill: !1 },
    bd = { suppressEvents: !0 },
    fo = {},
    Vi = [],
    po = {},
    il,
    $t = {},
    ho = {},
    rl = 30,
    ns = [],
    mo = "",
    go = function (e) {
      var t = e[0],
        i,
        n;
      if ((_i(t) || De(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (n = ns.length; n-- && !ns[n].targetTest(t); );
        i = ns[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new Dl(e[n], i)))) ||
          e.splice(n, 1);
      return e;
    },
    nr = function (e) {
      return e._gsap || go(ri(e))[0]._gsap;
    },
    nl = function (e, t, i) {
      return (i = e[t]) && De(i)
        ? e[t]()
        : (no(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Ot = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ze = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Be = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ir = function (e, t) {
      var i = t.charAt(0),
        n = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
      );
    },
    Sd = function (e, t) {
      for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
      return n < i;
    },
    ss = function () {
      var e = Vi.length,
        t = Vi.slice(0),
        i,
        n;
      for (po = {}, Vi.length = 0, i = 0; i < e; i++)
        (n = t[i]),
          n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
    },
    vo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    sl = function (e, t, i, n) {
      Vi.length && !nt && ss(),
        e.render(t, i, !!(nt && t < 0 && vo(e))),
        Vi.length && !nt && ss();
    },
    ol = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Qa).length < 2
        ? t
        : Ze(e)
        ? e.trim()
        : e;
    },
    al = function (e) {
      return e;
    },
    Ht = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Td = function (e) {
      return function (t, i) {
        for (var n in i)
          n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
      };
    },
    kr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    ll = function r(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = _i(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    os = function (e, t) {
      var i = {},
        n;
      for (n in e) n in t || (i[n] = e[n]);
      return i;
    },
    dn = function (e) {
      var t = e.parent || Ae,
        i = e.keyframes ? Td(ut(e.keyframes)) : Ht;
      if (Mt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    xd = function (e, t) {
      for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
      return i < 0;
    },
    ul = function (e, t, i, n, s) {
      var o = e[n],
        a;
      if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[n] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    as = function (e, t, i, n) {
      i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = s) : e[n] === t && (e[n] = s),
        (t._next = t._prev = t.parent = null);
    },
    $i = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    sr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Cd = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    _o = function (e, t, i, n) {
      return (
        e._startAt &&
        (nt
          ? e._startAt.revert(rs)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, n))
      );
    },
    Ed = function r(e) {
      return !e || (e._ts && r(e.parent));
    },
    cl = function (e) {
      return e._repeat ? Rr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Rr = function (e, t) {
      var i = Math.floor((e = Be(e / t)));
      return e && i === e ? i - 1 : i;
    },
    ls = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    us = function (e) {
      return (e._end = Be(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0)
      ));
    },
    cs = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Be(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          us(e),
          i._dirty || sr(i, e)),
        e
      );
    },
    dl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = ls(e.rawTime(), t)),
          (!t._dur || pn(0, t.totalDuration(), i) - t._tTime > ve) &&
            t.render(i, !0)),
        sr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -ve;
      }
    },
    wi = function (e, t, i, n) {
      return (
        t.parent && $i(t),
        (t._start = Be(
          (Di(i) ? i : i || e !== Ae ? ii(e, i, t) : e._time) + t._delay
        )),
        (t._end = Be(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ul(e, t, "_first", "_last", e._sort ? "_start" : 0),
        yo(t) || (e._recent = t),
        n || dl(e, t),
        e._ts < 0 && cs(e, e._tTime),
        e
      );
    },
    fl = function (e, t) {
      return (
        (Vt.ScrollTrigger || co("scrollTrigger", t)) &&
        Vt.ScrollTrigger.create(t, e)
      );
    },
    pl = function (e, t, i, n, s) {
      if ((Po(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !nt &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        il !== Wt.frame
      )
        return Vi.push(e), (e._lazy = [s, n]), 1;
    },
    Ad = function r(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
    },
    yo = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Pd = function (e, t, i, n) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && Ad(e) && !(!e._initted && yo(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !yo(e))))
            ? 0
            : 1,
        a = e._rDelay,
        l = 0,
        u,
        c,
        d;
      if (
        (a &&
          e._repeat &&
          ((l = pn(0, e._tDur, t)),
          (c = Rr(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== Rr(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || nt || n || e._zTime === ve || (!t && e._zTime))
      ) {
        if (!e._initted && pl(e, t, n, i, l)) return;
        for (
          d = e._zTime,
            e._zTime = t || (i ? ve : 0),
            i || (i = t && !d),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && _o(e, t, i, !0),
          e._onUpdate && !i && qt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && qt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && $i(e, 1),
            !i &&
              !nt &&
              (qt(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Md = function (e, t, i) {
      var n;
      if (i > t)
        for (n = e._first; n && n._start <= i; ) {
          if (n.data === "isPause" && n._start > t) return n;
          n = n._next;
        }
      else
        for (n = e._last; n && n._start >= i; ) {
          if (n.data === "isPause" && n._start < t) return n;
          n = n._prev;
        }
    },
    zr = function (e, t, i, n) {
      var s = e._repeat,
        o = Be(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !n && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : Be(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !n && cs(e, (e._tTime = e._tDur * a)),
        e.parent && us(e),
        i || sr(e.parent, e),
        e
      );
    },
    hl = function (e) {
      return e instanceof bt ? sr(e) : zr(e, e._dur);
    },
    Od = { _start: 0, endTime: cn, totalDuration: cn },
    ii = function r(e, t, i) {
      var n = e.labels,
        s = e._recent || Od,
        o = e.duration() >= ti ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return Ze(t) && (isNaN(t) || t in n)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
            : a < 0
            ? (t in n || (n[t] = o), n[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              u && i && (l = (l / 100) * (ut(i) ? i[0] : i).totalDuration()),
              a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    fn = function (e, t, i) {
      var n = Di(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = Mt(l.vars.inherit) && l.parent);
        (o.immediateRender = Mt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Ve(t[0], o, t[s + 1]);
    },
    Hi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    pn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    ct = function (e, t) {
      return !Ze(e) || !(t = yd.exec(e)) ? "" : t[1];
    },
    Ld = function (e, t, i) {
      return Hi(i, function (n) {
        return pn(e, t, n);
      });
    },
    wo = [].slice,
    ml = function (e, t) {
      return (
        e &&
        _i(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && _i(e[0]))) &&
        !e.nodeType &&
        e !== yi
      );
    },
    Dd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (n) {
          var s;
          return (Ze(n) && !t) || ml(n, 1)
            ? (s = i).push.apply(s, ri(n))
            : i.push(n);
        }) || i
      );
    },
    ri = function (e, t, i) {
      return Ce && !t && Ce.selector
        ? Ce.selector(e)
        : Ze(e) && !i && (lo || !Fr())
        ? wo.call((t || uo).querySelectorAll(e), 0)
        : ut(e)
        ? Dd(e, i)
        : ml(e)
        ? wo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    bo = function (e) {
      return (
        (e = ri(e)[0] || un("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ri(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? un("Invalid scope") || uo.createElement("div")
              : e
          );
        }
      );
    },
    gl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    vl = function (e) {
      if (De(e)) return e;
      var t = _i(e) ? e : { each: e },
        i = or(t.ease),
        n = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = n > 0 && n < 1,
        l = isNaN(n) || a,
        u = t.axis,
        c = n,
        d = n;
      return (
        Ze(n)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !a && l && ((c = n[0]), (d = n[1])),
        function (p, f, m) {
          var g = (m || t).length,
            y = o[g],
            w,
            b,
            C,
            h,
            S,
            x,
            P,
            M,
            I;
          if (!y) {
            if (((I = t.grid === "auto" ? 0 : (t.grid || [1, ti])[1]), !I)) {
              for (
                P = -ti;
                P < (P = m[I++].getBoundingClientRect().left) && I < g;

              );
              I < g && I--;
            }
            for (
              y = o[g] = [],
                w = l ? Math.min(I, g) * c - 0.5 : n % I,
                b = I === ti ? 0 : l ? (g * d) / I - 0.5 : (n / I) | 0,
                P = 0,
                M = ti,
                x = 0;
              x < g;
              x++
            )
              (C = (x % I) - w),
                (h = b - ((x / I) | 0)),
                (y[x] = S =
                  u ? Math.abs(u === "y" ? h : C) : ja(C * C + h * h)),
                S > P && (P = S),
                S < M && (M = S);
            n === "random" && gl(y),
              (y.max = P - M),
              (y.min = M),
              (y.v = g =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (I > g
                      ? g - 1
                      : u
                      ? u === "y"
                        ? g / I
                        : I
                      : Math.max(I, g / I)) ||
                  0) * (n === "edges" ? -1 : 1)),
              (y.b = g < 0 ? s - g : s),
              (y.u = ct(t.amount || t.each) || 0),
              (i = i && g < 0 ? Ml(i) : i);
          }
          return (
            (g = (y[p] - y.min) / y.max || 0),
            Be(y.b + (i ? i(g) : g) * y.v) + y.u
          );
        }
      );
    },
    So = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var n = Be(Math.round(parseFloat(i) / e) * e * t);
        return (n - (n % 1)) / t + (Di(i) ? 0 : ct(i));
      };
    },
    _l = function (e, t) {
      var i = ut(e),
        n,
        s;
      return (
        !i &&
          _i(e) &&
          ((n = i = e.radius || ti),
          e.values
            ? ((e = ri(e.values)), (s = !Di(e[0])) && (n *= n))
            : (e = So(e.increment))),
        Hi(
          t,
          i
            ? De(e)
              ? function (o) {
                  return (s = e(o)), Math.abs(s - o) <= n ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = ti,
                      c = 0,
                      d = e.length,
                      p,
                      f;
                    d--;

                  )
                    s
                      ? ((p = e[d].x - a),
                        (f = e[d].y - l),
                        (p = p * p + f * f))
                      : (p = Math.abs(e[d] - a)),
                      p < u && ((u = p), (c = d));
                  return (
                    (c = !n || u <= n ? e[c] : o),
                    s || c === o || Di(o) ? c : c + ct(o)
                  );
                }
            : So(e)
        )
      );
    },
    yl = function (e, t, i, n) {
      return Hi(ut(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
        return ut(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  n
              ) / n;
      });
    },
    Id = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (n) {
        return t.reduce(function (s, o) {
          return o(s);
        }, n);
      };
    },
    kd = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || ct(i));
      };
    },
    Rd = function (e, t, i) {
      return bl(e, t, 0, 1, i);
    },
    wl = function (e, t, i) {
      return Hi(i, function (n) {
        return e[~~t(n)];
      });
    },
    zd = function r(e, t, i) {
      var n = t - e;
      return ut(e)
        ? wl(e, r(0, e.length), t)
        : Hi(i, function (s) {
            return ((n + ((s - e) % n)) % n) + e;
          });
    },
    Nd = function r(e, t, i) {
      var n = t - e,
        s = n * 2;
      return ut(e)
        ? wl(e, r(0, e.length - 1), t)
        : Hi(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
          });
    },
    hn = function (e) {
      for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
        (o = e.indexOf(")", n)),
          (a = e.charAt(n + 7) === "["),
          (s = e.substr(n + 7, o - n - 7).match(a ? Qa : oo)),
          (i +=
            e.substr(t, n - t) +
            yl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    bl = function (e, t, i, n, s) {
      var o = t - e,
        a = n - i;
      return Hi(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    Fd = function r(e, t, i, n) {
      var s = isNaN(e + t)
        ? 0
        : function (f) {
            return (1 - f) * e + f * t;
          };
      if (!s) {
        var o = Ze(e),
          a = {},
          l,
          u,
          c,
          d,
          p;
        if ((i === !0 && (n = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (ut(e) && !ut(t)) {
          for (c = [], d = e.length, p = d - 2, u = 1; u < d; u++)
            c.push(r(e[u - 1], e[u]));
          d--,
            (s = function (m) {
              m *= d;
              var g = Math.min(p, ~~m);
              return c[g](m - g);
            }),
            (i = t);
        } else n || (e = kr(ut(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Eo.call(a, e, l, "get", t[l]);
          s = function (m) {
            return Lo(m, a) || (o ? e.p : e);
          };
        }
      }
      return Hi(i, s);
    },
    Sl = function (e, t, i) {
      var n = e.labels,
        s = ti,
        o,
        a,
        l;
      for (o in n)
        (a = n[o] - t),
          a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    qt = function (e, t, i) {
      var n = e.vars,
        s = n[t],
        o = Ce,
        a = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = n[t + "Params"]),
          (u = n.callbackScope || e),
          i && Vi.length && ss(),
          a && (Ce = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (Ce = o),
          c
        );
    },
    mn = function (e) {
      return (
        $i(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!nt),
        e.progress() < 1 && qt(e, "onInterrupt"),
        e
      );
    },
    Nr,
    Tl = [],
    xl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), so() || e.headless)) {
          var t = e.name,
            i = De(e),
            n =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: cn,
              render: Lo,
              add: Eo,
              kill: ef,
              modifier: Jd,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Oo,
              aliases: {},
              register: 0,
            };
          if ((Fr(), e !== n)) {
            if ($t[t]) return;
            Ht(n, Ht(os(e, s), o)),
              kr(n.prototype, kr(s, os(e, o))),
              ($t[(n.prop = t)] = n),
              e.targetTest && (ns.push(n), (fo[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          tl(t, n), e.register && e.register(Dt, n, Lt);
        } else Tl.push(e);
    },
    _e = 255,
    gn = {
      aqua: [0, _e, _e],
      lime: [0, _e, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _e],
      navy: [0, 0, 128],
      white: [_e, _e, _e],
      olive: [128, 128, 0],
      yellow: [_e, _e, 0],
      orange: [_e, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_e, 0, 0],
      pink: [_e, 192, 203],
      cyan: [0, _e, _e],
      transparent: [_e, _e, _e, 0],
    },
    To = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          _e +
          0.5) |
          0
      );
    },
    Cl = function (e, t, i) {
      var n = e ? (Di(e) ? [e >> 16, (e >> 8) & _e, e & _e] : 0) : gn.black,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        m;
      if (!n) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), gn[e]))
          n = gn[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (n = parseInt(e.substr(1, 6), 16)),
              [n >> 16, (n >> 8) & _e, n & _e, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (n = [e >> 16, (e >> 8) & _e, e & _e]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((n = m = e.match(oo)), !t))
            (l = (+n[0] % 360) / 360),
              (u = +n[1] / 100),
              (c = +n[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              n.length > 3 && (n[3] *= 1),
              (n[0] = To(l + 1 / 3, s, o)),
              (n[1] = To(l, s, o)),
              (n[2] = To(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (n = e.match(Ka)), i && n.length < 4 && (n[3] = 1), n;
        } else n = e.match(oo) || gn.transparent;
        n = n.map(Number);
      }
      return (
        t &&
          !m &&
          ((s = n[0] / _e),
          (o = n[1] / _e),
          (a = n[2] / _e),
          (d = Math.max(s, o, a)),
          (p = Math.min(s, o, a)),
          (c = (d + p) / 2),
          d === p
            ? (l = u = 0)
            : ((f = d - p),
              (u = c > 0.5 ? f / (2 - d - p) : f / (d + p)),
              (l =
                d === s
                  ? (o - a) / f + (o < a ? 6 : 0)
                  : d === o
                  ? (a - s) / f + 2
                  : (s - o) / f + 4),
              (l *= 60)),
          (n[0] = ~~(l + 0.5)),
          (n[1] = ~~(u * 100 + 0.5)),
          (n[2] = ~~(c * 100 + 0.5))),
        i && n.length < 4 && (n[3] = 1),
        n
      );
    },
    El = function (e) {
      var t = [],
        i = [],
        n = -1;
      return (
        e.split(qi).forEach(function (s) {
          var o = s.match(Dr) || [];
          t.push.apply(t, o), i.push((n += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Al = function (e, t, i) {
      var n = "",
        s = (e + n).match(qi),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        d;
      if (!s) return e;
      if (
        ((s = s.map(function (p) {
          return (
            (p = Cl(p, t, 1)) &&
            o +
              (t
                ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3]
                : p.join(",")) +
              ")"
          );
        })),
        i && ((c = El(e)), (l = i.c), l.join(n) !== c.c.join(n)))
      )
        for (u = e.replace(qi, "1").split(Dr), d = u.length - 1; a < d; a++)
          n +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(qi), d = u.length - 1; a < d; a++) n += u[a] + s[a];
      return n + u[d];
    },
    qi = (function () {
      var r =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in gn) r += "|" + e + "\\b";
      return new RegExp(r + ")", "gi");
    })(),
    Bd = /hsl[a]?\(/,
    Pl = function (e) {
      var t = e.join(" "),
        i;
      if (((qi.lastIndex = 0), qi.test(t)))
        return (
          (i = Bd.test(t)),
          (e[1] = Al(e[1], i)),
          (e[0] = Al(e[0], i, El(e[1]))),
          !0
        );
    },
    vn,
    Wt = (function () {
      var r = Date.now,
        e = 500,
        t = 33,
        i = r(),
        n = i,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        u,
        c,
        d,
        p,
        f,
        m = function g(y) {
          var w = r() - n,
            b = y === !0,
            C,
            h,
            S,
            x;
          if (
            ((w > e || w < 0) && (i += w - t),
            (n += w),
            (S = n - i),
            (C = S - o),
            (C > 0 || b) &&
              ((x = ++d.frame),
              (p = S - d.time * 1e3),
              (d.time = S = S / 1e3),
              (o += C + (C >= s ? 4 : s - C)),
              (h = 1)),
            b || (l = u(g)),
            h)
          )
            for (f = 0; f < a.length; f++) a[f](S, p, x, y);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (y) {
            return p / (1e3 / (y || 60));
          },
          wake: function () {
            Ja &&
              (!lo &&
                so() &&
                ((yi = lo = window),
                (uo = yi.document || {}),
                (Vt.gsap = Dt),
                (yi.gsapVersions || (yi.gsapVersions = [])).push(Dt.version),
                el(is || yi.GreenSockGlobals || (!yi.gsap && yi) || {}),
                Tl.forEach(xl)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (y) {
                  return setTimeout(y, (o - d.time * 1e3 + 1) | 0);
                }),
              (vn = 1),
              m(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (vn = 0), (u = cn);
          },
          lagSmoothing: function (y, w) {
            (e = y || 1 / 0), (t = Math.min(w || 33, e));
          },
          fps: function (y) {
            (s = 1e3 / (y || 240)), (o = d.time * 1e3 + s);
          },
          add: function (y, w, b) {
            var C = w
              ? function (h, S, x, P) {
                  y(h, S, x, P), d.remove(C);
                }
              : y;
            return d.remove(y), a[b ? "unshift" : "push"](C), Fr(), C;
          },
          remove: function (y, w) {
            ~(w = a.indexOf(y)) && a.splice(w, 1) && f >= w && f--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    Fr = function () {
      return !vn && Wt.wake();
    },
    ue = {},
    Vd = /^[\d.\-M][\d.\-,\s]/,
    $d = /["']/g,
    Hd = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          n = i[0],
          s = 1,
          o = i.length,
          a,
          l,
          u;
        s < o;
        s++
      )
        (l = i[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (t[n] = isNaN(u) ? u.replace($d, "").trim() : +u),
          (n = l.substr(a + 1).trim());
      return t;
    },
    qd = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        n = e.indexOf("(", t);
      return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
    },
    Wd = function (e) {
      var t = (e + "").split("("),
        i = ue[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Hd(t[1])] : qd(e).split(",").map(ol)
          )
        : ue._CE && Vd.test(e)
        ? ue._CE("", e)
        : i;
    },
    Ml = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ol = function r(e, t) {
      for (var i = e._first, n; i; )
        i instanceof bt
          ? r(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? r(i.timeline, t)
              : ((n = i._ease),
                (i._ease = i._yEase),
                (i._yEase = n),
                (i._yoyo = t))),
          (i = i._next);
    },
    or = function (e, t) {
      return (e && (De(e) ? e : ue[e] || Wd(e))) || t;
    },
    ar = function (e, t, i, n) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        n === void 0 &&
          (n = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: n },
        o;
      return (
        Ot(e, function (a) {
          (ue[a] = Vt[a] = s), (ue[(o = a.toLowerCase())] = i);
          for (var l in s)
            ue[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = ue[a + "." + l] = s[l];
        }),
        s
      );
    },
    Ll = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    xo = function r(e, t, i) {
      var n = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / ro) * (Math.asin(1 / n) || 0),
        a = function (c) {
          return c === 1 ? 1 : n * Math.pow(2, -10 * c) * _d((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Ll(a);
      return (
        (s = ro / s),
        (l.config = function (u, c) {
          return r(e, u, c);
        }),
        l
      );
    },
    Co = function r(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        n =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : Ll(i);
      return (
        (n.config = function (s) {
          return r(e, s);
        }),
        n
      );
    };
  Ot("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
    var t = e < 5 ? e + 1 : e;
    ar(
      r + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (ue.Linear.easeNone = ue.none = ue.Linear.easeIn),
    ar("Elastic", xo("in"), xo("out"), xo()),
    (function (r, e) {
      var t = 1 / e,
        i = 2 * t,
        n = 2.5 * t,
        s = function (a) {
          return a < t
            ? r * a * a
            : a < i
            ? r * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < n
            ? r * (a -= 2.25 / e) * a + 0.9375
            : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      ar(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    ar("Expo", function (r) {
      return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
    }),
    ar("Circ", function (r) {
      return -(ja(1 - r * r) - 1);
    }),
    ar("Sine", function (r) {
      return r === 1 ? 1 : -vd(r * md) + 1;
    }),
    ar("Back", Co("in"), Co("out"), Co()),
    (ue.SteppedEase =
      ue.steps =
      Vt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              n = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - ve;
            return function (a) {
              return (((n * pn(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Lr.ease = ue["quad.out"]),
    Ot(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (r) {
        return (mo += r + "," + r + "Params,");
      }
    );
  var Dl = function (e, t) {
      (this.id = gd++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : nl),
        (this.set = t ? t.getSetter : Oo);
    },
    _n = (function () {
      function r(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          zr(this, +t.duration, 1, 1),
          (this.data = t.data),
          Ce && ((this._ctx = Ce), Ce.data.push(this)),
          vn || Wt.wake();
      }
      var e = r.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              zr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, n) {
          if ((Fr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              cs(this, i), !s._dp || s.parent || dl(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              wi(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !n) ||
              (this._initted && Math.abs(this._zTime) === ve) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), sl(this, i, n)),
            this
          );
        }),
        (e.time = function (i, n) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + cl(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                n
              )
            : this._time;
        }),
        (e.totalProgress = function (i, n) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, n)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (i, n) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  cl(this),
                n
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, n) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, n)
            : this._repeat
            ? Rr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, n) {
          if (!arguments.length) return this._rts === -ve ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? ls(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -ve ? 0 : this._rts),
            this.totalTime(
              pn(-Math.abs(this._delay), this.totalDuration(), s),
              n !== !1
            ),
            us(this),
            Cd(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Fr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== ve &&
                        (this._tTime -= ve)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var n = this.parent || this._dp;
            return (
              n && (n._sort || !this.parent) && wi(n, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (Mt(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var n = this.parent || this._dp;
          return n
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? ls(n.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = bd);
          var n = nt;
          return (
            (nt = i),
            vo(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (nt = n),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
            (s = n._start + s / (Math.abs(n._ts) || 1)), (n = n._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), hl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var n = this._time;
            return (this._rDelay = i), hl(this), n ? this.time(n) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, n) {
          return this.totalTime(ii(this, i), Mt(n));
        }),
        (e.restart = function (i, n) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Mt(n)),
            this._dur || (this._zTime = -ve),
            this
          );
        }),
        (e.play = function (i, n) {
          return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, n) {
          return (
            i != null && this.seek(i || this.totalDuration(), n),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, n) {
          return i != null && this.seek(i, n), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -ve : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -ve), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            n = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= n &&
              s < this.endTime(!0) - ve)
          );
        }),
        (e.eventCallback = function (i, n, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (n
                ? ((o[i] = n),
                  s && (o[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = n))
                : delete o[i],
              this)
            : o[i];
        }),
        (e.then = function (i) {
          var n = this;
          return new Promise(function (s) {
            var o = De(i) ? i : al,
              a = function () {
                var u = n.then;
                (n.then = null),
                  De(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
                  s(o),
                  (n.then = u);
              };
            (n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
            (!n._tTime && n._ts < 0)
              ? a()
              : (n._prom = a);
          });
        }),
        (e.kill = function () {
          mn(this);
        }),
        r
      );
    })();
  Ht(_n.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ve,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var bt = (function (r) {
    qe(e, r);
    function e(i, n) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = r.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = Mt(i.sortChildren)),
        Ae && wi(i.parent || Ae, xe(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && fl(xe(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (n, s, o) {
        return fn(0, arguments, this), this;
      }),
      (t.from = function (n, s, o) {
        return fn(1, arguments, this), this;
      }),
      (t.fromTo = function (n, s, o, a) {
        return fn(2, arguments, this), this;
      }),
      (t.set = function (n, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          dn(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Ve(n, s, ii(this, o), 1),
          this
        );
      }),
      (t.call = function (n, s, o) {
        return wi(this, Ve.delayedCall(0, n, s), o);
      }),
      (t.staggerTo = function (n, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Ve(n, o, ii(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (n, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (dn(o).immediateRender = Mt(o.immediateRender)),
          this.staggerTo(n, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (dn(a).immediateRender = Mt(a.immediateRender)),
          this.staggerTo(n, s, a, l, u, c, d)
        );
      }),
      (t.render = function (n, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = n <= 0 ? 0 : Be(n),
          d = this._zTime < 0 != n < 0 && (this._initted || !u),
          p,
          f,
          m,
          g,
          y,
          w,
          b,
          C,
          h,
          S,
          x,
          P;
        if (
          (this !== Ae && c > l && n >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (n += this._time - a)),
            (p = c),
            (h = this._start),
            (C = this._ts),
            (w = !C),
            d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
            this._repeat)
          ) {
            if (
              ((x = this._yoyo),
              (y = u + this._rDelay),
              this._repeat < -1 && n < 0)
            )
              return this.totalTime(y * 100 + n, s, o);
            if (
              ((p = Be(c % y)),
              c === l
                ? ((g = this._repeat), (p = u))
                : ((S = Be(c / y)),
                  (g = ~~S),
                  g && g === S && ((p = u), g--),
                  p > u && (p = u)),
              (S = Rr(this._tTime, y)),
              !a &&
                this._tTime &&
                S !== g &&
                this._tTime - S * y - this._dur <= 0 &&
                (S = g),
              x && g & 1 && ((p = u - p), (P = 1)),
              g !== S && !this._lock)
            ) {
              var M = x && S & 1,
                I = M === (x && g & 1);
              if (
                (g < S && (M = !M),
                (a = M ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (P ? 0 : Be(g * y)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && qt(this, "onRepeat"),
                this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  w !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                I &&
                  ((this._lock = 2),
                  (a = M ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !P && this.invalidate()),
                (this._lock = 0),
                !this._ts && !w)
              )
                return this;
              Ol(this, P);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((b = Md(this, Be(a), Be(p))), b && (c -= p - (p = b._start))),
            (this._tTime = c),
            (this._time = p),
            (this._act = !C),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = n),
              (a = 0)),
            !a && c && !s && !S && (qt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (p >= a && n >= 0)
            for (f = this._first; f; ) {
              if (
                ((m = f._next), (f._act || p >= f._start) && f._ts && b !== f)
              ) {
                if (f.parent !== this) return this.render(n, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (p - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (p - f._start) * f._ts,
                    s,
                    o
                  ),
                  p !== this._time || (!this._ts && !w))
                ) {
                  (b = 0), m && (c += this._zTime = -ve);
                  break;
                }
              }
              f = m;
            }
          else {
            f = this._last;
            for (var L = n < 0 ? n : p; f; ) {
              if (
                ((m = f._prev), (f._act || L <= f._end) && f._ts && b !== f)
              ) {
                if (f.parent !== this) return this.render(n, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (L - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (L - f._start) * f._ts,
                    s,
                    o || (nt && vo(f))
                  ),
                  p !== this._time || (!this._ts && !w))
                ) {
                  (b = 0), m && (c += this._zTime = L ? -ve : ve);
                  break;
                }
              }
              f = m;
            }
          }
          if (
            b &&
            !s &&
            (this.pause(),
            (b.render(p >= a ? 0 : -ve)._zTime = p >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = h), us(this), this.render(n, s, o);
          this._onUpdate && !s && qt(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (h === this._start || Math.abs(C) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((n || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  $i(this, 1),
                !s &&
                  !(n < 0 && !a) &&
                  (c || a || !l) &&
                  (qt(
                    this,
                    c === l && n >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (n, s) {
        var o = this;
        if ((Di(s) || (s = ii(this, s, n)), !(n instanceof _n))) {
          if (ut(n))
            return (
              n.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ze(n)) return this.addLabel(n, s);
          if (De(n)) n = Ve.delayedCall(0, n);
          else return this;
        }
        return this !== n ? wi(this, n, s) : this;
      }),
      (t.getChildren = function (n, s, o, a) {
        n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -ti);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Ve
              ? s && l.push(u)
              : (o && l.push(u),
                n && l.push.apply(l, u.getChildren(!0, s, o)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (n) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === n) return s[o];
      }),
      (t.remove = function (n) {
        return Ze(n)
          ? this.removeLabel(n)
          : De(n)
          ? this.killTweensOf(n)
          : (n.parent === this && as(this, n),
            n === this._recent && (this._recent = this._last),
            sr(this));
      }),
      (t.totalTime = function (n, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Be(
                Wt.time -
                  (this._ts > 0
                    ? n / this._ts
                    : (this.totalDuration() - n) / -this._ts)
              )),
            r.prototype.totalTime.call(this, n, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (n, s) {
        return (this.labels[n] = ii(this, s)), this;
      }),
      (t.removeLabel = function (n) {
        return delete this.labels[n], this;
      }),
      (t.addPause = function (n, s, o) {
        var a = Ve.delayedCall(0, s || cn, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), wi(this, a, ii(this, n))
        );
      }),
      (t.removePause = function (n) {
        var s = this._first;
        for (n = ii(this, n); s; )
          s._start === n && s.data === "isPause" && $i(s), (s = s._next);
      }),
      (t.killTweensOf = function (n, s, o) {
        for (var a = this.getTweensOf(n, o), l = a.length; l--; )
          Wi !== a[l] && a[l].kill(n, s);
        return this;
      }),
      (t.getTweensOf = function (n, s) {
        for (var o = [], a = ri(n), l = this._first, u = Di(s), c; l; )
          l instanceof Ve
            ? Sd(l._targets, a) &&
              (u
                ? (!Wi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (n, s) {
        s = s || {};
        var o = this,
          a = ii(o, n),
          l = s,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          p = l.immediateRender,
          f,
          m = Ve.to(
            o,
            Ht(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  ve,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var y =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    m._dur !== y && zr(m, y, 0, 1).render(m._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(m, d || []);
                },
              },
              s
            )
          );
        return p ? m.render(0) : m;
      }),
      (t.tweenFromTo = function (n, s, o) {
        return this.tweenTo(s, Ht({ startAt: { time: ii(this, n) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (n) {
        return n === void 0 && (n = this._time), Sl(this, ii(this, n));
      }),
      (t.previousLabel = function (n) {
        return n === void 0 && (n = this._time), Sl(this, ii(this, n), 1);
      }),
      (t.currentLabel = function (n) {
        return arguments.length
          ? this.seek(n, !0)
          : this.previousLabel(this._time + ve);
      }),
      (t.shiftChildren = function (n, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += n), (a._end += n)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += n);
        return sr(this);
      }),
      (t.invalidate = function (n) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
        return r.prototype.invalidate.call(this, n);
      }),
      (t.clear = function (n) {
        n === void 0 && (n = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          n && (this.labels = {}),
          sr(this)
        );
      }),
      (t.totalDuration = function (n) {
        var s = 0,
          o = this,
          a = o._last,
          l = ti,
          u,
          c,
          d;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -n : n)
          );
        if (o._dirty) {
          for (d = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (wi(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((s -= c),
                ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = u);
          zr(o, o === Ae && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (n) {
        if ((Ae._ts && (sl(Ae, ls(n, Ae)), (il = Wt.frame)), Wt.frame >= rl)) {
          rl += we.autoSleep || 120;
          var s = Ae._first;
          if ((!s || !s._ts) && we.autoSleep && Wt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Wt.sleep();
          }
        }
      }),
      e
    );
  })(_n);
  Ht(bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Gd = function (e, t, i, n, s, o, a) {
      var l = new Lt(this._pt, e, t, 0, 1, Fl, null, s),
        u = 0,
        c = 0,
        d,
        p,
        f,
        m,
        g,
        y,
        w,
        b;
      for (
        l.b = i,
          l.e = n,
          i += "",
          n += "",
          (w = ~n.indexOf("random(")) && (n = hn(n)),
          o && ((b = [i, n]), o(b, e, t), (i = b[0]), (n = b[1])),
          p = i.match(ao) || [];
        (d = ao.exec(n));

      )
        (m = d[0]),
          (g = n.substring(u, d.index)),
          f ? (f = (f + 1) % 5) : g.substr(-5) === "rgba(" && (f = 1),
          m !== p[c++] &&
            ((y = parseFloat(p[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: g || c === 1 ? g : ",",
              s: y,
              c: m.charAt(1) === "=" ? Ir(y, m) - y : parseFloat(m) - y,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = ao.lastIndex));
      return (
        (l.c = u < n.length ? n.substring(u, n.length) : ""),
        (l.fp = a),
        (Za.test(n) || w) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Eo = function (e, t, i, n, s, o, a, l, u, c) {
      De(n) && (n = n(s || 0, e, o));
      var d = e[t],
        p =
          i !== "get"
            ? i
            : De(d)
            ? u
              ? e[
                  t.indexOf("set") || !De(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : d,
        f = De(d) ? (u ? Kd : zl) : Mo,
        m;
      if (
        (Ze(n) &&
          (~n.indexOf("random(") && (n = hn(n)),
          n.charAt(1) === "=" &&
            ((m = Ir(p, n) + (ct(p) || 0)), (m || m === 0) && (n = m))),
        !c || p !== n || Ao)
      )
        return !isNaN(p * n) && n !== ""
          ? ((m = new Lt(
              this._pt,
              e,
              t,
              +p || 0,
              n - (p || 0),
              typeof d == "boolean" ? Qd : Nl,
              0,
              f
            )),
            u && (m.fp = u),
            a && m.modifier(a, this, e),
            (this._pt = m))
          : (!d && !(t in e) && co(t, n),
            Gd.call(this, e, t, p, n, f, l || we.stringFilter, u));
    },
    Xd = function (e, t, i, n, s) {
      if (
        (De(e) && (e = yn(e, s, t, i, n)),
        !_i(e) || (e.style && e.nodeType) || ut(e) || Ua(e))
      )
        return Ze(e) ? yn(e, s, t, i, n) : e;
      var o = {},
        a;
      for (a in e) o[a] = yn(e[a], s, t, i, n);
      return o;
    },
    Il = function (e, t, i, n, s, o) {
      var a, l, u, c;
      if (
        $t[e] &&
        (a = new $t[e]()).init(
          s,
          a.rawVars ? t[e] : Xd(t[e], n, s, o, i),
          i,
          n,
          o
        ) !== !1 &&
        ((i._pt = l = new Lt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== Nr)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Wi,
    Ao,
    Po = function r(e, t, i) {
      var n = e.vars,
        s = n.ease,
        o = n.startAt,
        a = n.immediateRender,
        l = n.lazy,
        u = n.onUpdate,
        c = n.runBackwards,
        d = n.yoyoEase,
        p = n.keyframes,
        f = n.autoRevert,
        m = e._dur,
        g = e._startAt,
        y = e._targets,
        w = e.parent,
        b = w && w.data === "nested" ? w.vars.targets : y,
        C = e._overwrite === "auto" && !io,
        h = e.timeline,
        S,
        x,
        P,
        M,
        I,
        L,
        R,
        E,
        N,
        _,
        v,
        T,
        O;
      if (
        (h && (!p || !s) && (s = "none"),
        (e._ease = or(s, Lr.ease)),
        (e._yEase = d ? Ml(or(d === !0 ? s : d, Lr.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !h && !!n.runBackwards),
        !h || (p && !n.stagger))
      ) {
        if (
          ((E = y[0] ? nr(y[0]).harness : 0),
          (T = E && n[E.prop]),
          (S = os(n, fo)),
          g &&
            (g._zTime < 0 && g.progress(1),
            t < 0 && c && a && !f
              ? g.render(-1, !0)
              : g.revert(c && m ? rs : wd),
            (g._lazy = 0)),
          o)
        ) {
          if (
            ($i(
              (e._startAt = Ve.set(
                y,
                Ht(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: w,
                    immediateRender: !0,
                    lazy: !g && Mt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return qt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (nt || (!a && !f)) && e._startAt.revert(rs),
            a && m && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && m && !g) {
          if (
            (t && (a = !1),
            (P = Ht(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !g && Mt(l),
                immediateRender: a,
                stagger: 0,
                parent: w,
              },
              S
            )),
            T && (P[E.prop] = T),
            $i((e._startAt = Ve.set(y, P))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (nt ? e._startAt.revert(rs) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            r(e._startAt, ve, ve);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && Mt(l)) || (l && !m), x = 0;
          x < y.length;
          x++
        ) {
          if (
            ((I = y[x]),
            (R = I._gsap || go(y)[x]._gsap),
            (e._ptLookup[x] = _ = {}),
            po[R.id] && Vi.length && ss(),
            (v = b === y ? x : b.indexOf(I)),
            E &&
              (N = new E()).init(I, T || S, e, v, b) !== !1 &&
              ((e._pt = M =
                new Lt(e._pt, I, N.name, 0, 1, N.render, N, 0, N.priority)),
              N._props.forEach(function (D) {
                _[D] = M;
              }),
              N.priority && (L = 1)),
            !E || T)
          )
            for (P in S)
              $t[P] && (N = Il(P, S, e, v, I, b))
                ? N.priority && (L = 1)
                : (_[P] = M =
                    Eo.call(e, I, P, "get", S[P], v, b, 0, n.stringFilter));
          e._op && e._op[x] && e.kill(I, e._op[x]),
            C &&
              e._pt &&
              ((Wi = e),
              Ae.killTweensOf(I, _, e.globalTime(t)),
              (O = !e.parent),
              (Wi = 0)),
            e._pt && l && (po[R.id] = 1);
        }
        L && Bl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !O),
        p && t <= 0 && h.render(ti, !0, !0);
    },
    Yd = function (e, t, i, n, s, o, a, l) {
      var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        d,
        p,
        f;
      if (!u)
        for (
          u = e._ptCache[t] = [], p = e._ptLookup, f = e._targets.length;
          f--;

        ) {
          if (((c = p[f][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (Ao = 1),
              (e.vars[t] = "+=0"),
              Po(e, a),
              (Ao = 0),
              l ? un(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (d = u[f]),
          (c = d._pt || d),
          (c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c),
          (c.c = i - c.s),
          d.e && (d.e = ze(i) + ct(d.e)),
          d.b && (d.b = c.s + ct(d.b));
    },
    jd = function (e, t) {
      var i = e[0] ? nr(e[0]).harness : 0,
        n = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!n) return t;
      s = kr({}, t);
      for (o in n)
        if (o in s)
          for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    Ud = function (e, t, i, n) {
      var s = t.ease || n || "power1.inOut",
        o,
        a;
      if (ut(t))
        (a = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in t)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    yn = function (e, t, i, n, s) {
      return De(e)
        ? e.call(t, i, n, s)
        : Ze(e) && ~e.indexOf("random(")
        ? hn(e)
        : e;
    },
    kl = mo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Rl = {};
  Ot(kl + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
    return (Rl[r] = 1);
  });
  var Ve = (function (r) {
    qe(e, r);
    function e(i, n, s, o) {
      var a;
      typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
        (a = r.call(this, o ? n : dn(n)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        p = l.stagger,
        f = l.overwrite,
        m = l.keyframes,
        g = l.defaults,
        y = l.scrollTrigger,
        w = l.yoyoEase,
        b = n.parent || Ae,
        C = (ut(i) || Ua(i) ? Di(i[0]) : "length" in n) ? [i] : ri(i),
        h,
        S,
        x,
        P,
        M,
        I,
        L,
        R;
      if (
        ((a._targets = C.length
          ? go(C)
          : un(
              "GSAP target " + i + " not found. https://gsap.com",
              !we.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        m || p || ts(u) || ts(c))
      ) {
        if (
          ((n = a.vars),
          (h = a.timeline =
            new bt({
              data: "nested",
              defaults: g || {},
              targets: b && b.data === "nested" ? b.vars.targets : C,
            })),
          h.kill(),
          (h.parent = h._dp = xe(a)),
          (h._start = 0),
          p || ts(u) || ts(c))
        ) {
          if (((P = C.length), (L = p && vl(p)), _i(p)))
            for (M in p) ~kl.indexOf(M) && (R || (R = {}), (R[M] = p[M]));
          for (S = 0; S < P; S++)
            (x = os(n, Rl)),
              (x.stagger = 0),
              w && (x.yoyoEase = w),
              R && kr(x, R),
              (I = C[S]),
              (x.duration = +yn(u, xe(a), S, I, C)),
              (x.delay = (+yn(c, xe(a), S, I, C) || 0) - a._delay),
              !p &&
                P === 1 &&
                x.delay &&
                ((a._delay = c = x.delay), (a._start += c), (x.delay = 0)),
              h.to(I, x, L ? L(S, I, C) : 0),
              (h._ease = ue.none);
          h.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (m) {
          dn(Ht(h.vars.defaults, { ease: "none" })),
            (h._ease = or(m.ease || n.ease || "none"));
          var E = 0,
            N,
            _,
            v;
          if (ut(m))
            m.forEach(function (T) {
              return h.to(C, T, ">");
            }),
              h.duration();
          else {
            x = {};
            for (M in m)
              M === "ease" || M === "easeEach" || Ud(M, m[M], x, m.easeEach);
            for (M in x)
              for (
                N = x[M].sort(function (T, O) {
                  return T.t - O.t;
                }),
                  E = 0,
                  S = 0;
                S < N.length;
                S++
              )
                (_ = N[S]),
                  (v = {
                    ease: _.e,
                    duration: ((_.t - (S ? N[S - 1].t : 0)) / 100) * u,
                  }),
                  (v[M] = _.v),
                  h.to(C, v, E),
                  (E += v.duration);
            h.duration() < u && h.to({}, { duration: u - h.duration() });
          }
        }
        u || a.duration((u = h.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !io && ((Wi = xe(a)), Ae.killTweensOf(C), (Wi = 0)),
        wi(b, xe(a), s),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (d ||
          (!u &&
            !m &&
            a._start === Be(b._time) &&
            Mt(d) &&
            Ed(xe(a)) &&
            b.data !== "nested")) &&
          ((a._tTime = -ve), a.render(Math.max(0, -c) || 0)),
        y && fl(xe(a), y),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (n, s, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = n < 0,
          d = n > l - ve && !c ? l : n < ve ? 0 : n,
          p,
          f,
          m,
          g,
          y,
          w,
          b,
          C,
          h;
        if (!u) Pd(this, n, s, o);
        else if (
          d !== this._tTime ||
          !n ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((p = d), (C = this.timeline), this._repeat)) {
            if (((g = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(g * 100 + n, s, o);
            if (
              ((p = Be(d % g)),
              d === l
                ? ((m = this._repeat), (p = u))
                : ((y = Be(d / g)),
                  (m = ~~y),
                  m && m === y ? ((p = u), m--) : p > u && (p = u)),
              (w = this._yoyo && m & 1),
              w && ((h = this._yEase), (p = u - p)),
              (y = Rr(this._tTime, g)),
              p === a && !o && this._initted && m === y)
            )
              return (this._tTime = d), this;
            m !== y &&
              (C && this._yEase && Ol(C, w),
              this.vars.repeatRefresh &&
                !w &&
                !this._lock &&
                p !== g &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Be(g * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (pl(this, c ? n : p, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && m !== y))
              return this;
            if (u !== this._dur) return this.render(n, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = b = (h || this._ease)(p / u)),
            this._from && (this.ratio = b = 1 - b),
            !a && d && !s && !y && (qt(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(b, f.d), (f = f._next);
          (C && C.render(n < 0 ? n : C._dur * C._ease(p / this._dur), s, o)) ||
            (this._startAt && (this._zTime = n)),
            this._onUpdate &&
              !s &&
              (c && _o(this, n, s, o), qt(this, "onUpdate")),
            this._repeat &&
              m !== y &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              qt(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && _o(this, n, !0, !0),
              (n || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                $i(this, 1),
              !s &&
                !(c && !a) &&
                (d || a || w) &&
                (qt(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (n) {
        return (
          (!n || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(n),
          r.prototype.invalidate.call(this, n)
        );
      }),
      (t.resetTo = function (n, s, o, a, l) {
        vn || Wt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Po(this, u),
          (c = this._ease(u / this._dur)),
          Yd(this, n, s, o, a, c, u, l)
            ? this.resetTo(n, s, o, a, 1)
            : (cs(this, 0),
              this.parent ||
                ul(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (n, s) {
        if ((s === void 0 && (s = "all"), !n && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? mn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!nt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(n, s, Wi && Wi.vars.overwrite !== !0)
              ._first || mn(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              zr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = n ? ri(n) : a,
          u = this._ptLookup,
          c = this._pt,
          d,
          p,
          f,
          m,
          g,
          y,
          w;
        if ((!s || s === "all") && xd(a, l))
          return s === "all" && (this._pt = 0), mn(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Ze(s) &&
                ((g = {}),
                Ot(s, function (b) {
                  return (g[b] = 1);
                }),
                (s = g)),
              (s = jd(a, s))),
            w = a.length;
          w--;

        )
          if (~l.indexOf(a[w])) {
            (p = u[w]),
              s === "all"
                ? ((d[w] = s), (m = p), (f = {}))
                : ((f = d[w] = d[w] || {}), (m = s));
            for (g in m)
              (y = p && p[g]),
                y &&
                  ((!("kill" in y.d) || y.d.kill(g) === !0) &&
                    as(this, y, "_pt"),
                  delete p[g]),
                f !== "all" && (f[g] = 1);
          }
        return this._initted && !this._pt && c && mn(this), this;
      }),
      (e.to = function (n, s) {
        return new e(n, s, arguments[2]);
      }),
      (e.from = function (n, s) {
        return fn(1, arguments);
      }),
      (e.delayedCall = function (n, s, o, a) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: n,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (n, s, o) {
        return fn(2, arguments);
      }),
      (e.set = function (n, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
      }),
      (e.killTweensOf = function (n, s, o) {
        return Ae.killTweensOf(n, s, o);
      }),
      e
    );
  })(_n);
  Ht(Ve.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Ot("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Ve[r] = function () {
        var e = new bt(),
          t = wo.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
      };
    });
  var Mo = function (e, t, i) {
      return (e[t] = i);
    },
    zl = function (e, t, i) {
      return e[t](i);
    },
    Kd = function (e, t, i, n) {
      return e[t](n.fp, i);
    },
    Zd = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Oo = function (e, t) {
      return De(e[t]) ? zl : no(e[t]) && e.setAttribute ? Zd : Mo;
    },
    Nl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Qd = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Fl = function (e, t) {
      var i = t._pt,
        n = "";
      if (!e && t.b) n = t.b;
      else if (e === 1 && t.e) n = t.e;
      else {
        for (; i; )
          (n =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            n),
            (i = i._next);
        n += t.c;
      }
      t.set(t.t, t.p, n, t);
    },
    Lo = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Jd = function (e, t, i, n) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
    },
    ef = function (e) {
      for (var t = this._pt, i, n; t; )
        (n = t._next),
          (t.p === e && !t.op) || t.op === e
            ? as(this, t, "_pt")
            : t.dep || (i = 1),
          (t = n);
      return !i;
    },
    tf = function (e, t, i, n) {
      n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
    },
    Bl = function (e) {
      for (var t = e._pt, i, n, s, o; t; ) {
        for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
        (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = n) ? (n._prev = t) : (o = t),
          (t = i);
      }
      e._pt = s;
    },
    Lt = (function () {
      function r(t, i, n, s, o, a, l, u, c) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = n),
          (this.r = a || Nl),
          (this.d = l || this),
          (this.set = u || Mo),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = r.prototype;
      return (
        (e.modifier = function (i, n, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = tf),
            (this.m = i),
            (this.mt = s),
            (this.tween = n);
        }),
        r
      );
    })();
  Ot(
    mo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (r) {
      return (fo[r] = 1);
    }
  ),
    (Vt.TweenMax = Vt.TweenLite = Ve),
    (Vt.TimelineLite = Vt.TimelineMax = bt),
    (Ae = new bt({
      sortChildren: !1,
      defaults: Lr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (we.stringFilter = Pl);
  var lr = [],
    ds = {},
    rf = [],
    Vl = 0,
    nf = 0,
    Do = function (e) {
      return (ds[e] || rf).map(function (t) {
        return t();
      });
    },
    Io = function () {
      var e = Date.now(),
        t = [];
      e - Vl > 2 &&
        (Do("matchMediaInit"),
        lr.forEach(function (i) {
          var n = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            u;
          for (a in n)
            (o = yi.matchMedia(n[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        Do("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (n) {
            return i.add(null, n);
          });
        }),
        (Vl = e),
        Do("matchMedia"));
    },
    $l = (function () {
      function r(t, i) {
        (this.selector = i && bo(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = nf++),
          t && this.add(t);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          De(i) && ((s = n), (n = i), (i = De));
          var o = this,
            a = function () {
              var u = Ce,
                c = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = bo(s)),
                (Ce = o),
                (d = n.apply(o, arguments)),
                De(d) && o._r.push(d),
                (Ce = u),
                (o.selector = c),
                (o.isReverted = !1),
                d
              );
            };
          return (
            (o.last = a),
            i === De
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : i
              ? (o[i] = a)
              : a
          );
        }),
        (e.ignore = function (i) {
          var n = Ce;
          (Ce = null), i(this), (Ce = n);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (n) {
              return n instanceof r
                ? i.push.apply(i, n.getTweens())
                : n instanceof Ve &&
                    !(n.parent && n.parent.data === "nested") &&
                    i.push(n);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, n) {
          var s = this;
          if (
            (i
              ? (function () {
                  for (var a = s.getTweens(), l = s.data.length, u; l--; )
                    (u = s.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (c) {
                          return a.splice(a.indexOf(c), 1);
                        }));
                  for (
                    a
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, d) {
                        return d.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (u = s.data[l]),
                      u instanceof bt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Ve) && u.revert && u.revert(i);
                  s._r.forEach(function (c) {
                    return c(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            n)
          )
            for (var o = lr.length; o--; )
              lr[o].id === this.id && lr.splice(o, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        r
      );
    })(),
    sf = (function () {
      function r(t) {
        (this.contexts = []), (this.scope = t), Ce && Ce.data.push(this);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          _i(i) || (i = { matches: i });
          var o = new $l(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          Ce && !o.selector && (o.selector = Ce.selector),
            this.contexts.push(o),
            (n = o.add("onMatch", n)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = yi.matchMedia(i[u])),
                l &&
                  (lr.indexOf(o) < 0 && lr.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Io)
                    : l.addEventListener("change", Io)));
          return (
            c &&
              n(o, function (d) {
                return o.add(null, d);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (n) {
            return n.kill(i, !0);
          });
        }),
        r
      );
    })(),
    fs = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (n) {
          return xl(n);
        });
      },
      timeline: function (e) {
        return new bt(e);
      },
      getTweensOf: function (e, t) {
        return Ae.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, n) {
        Ze(e) && (e = ri(e)[0]);
        var s = nr(e || {}).get,
          o = i ? al : ol;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o((($t[t] && $t[t].get) || s)(e, t, i, n))
              : function (a, l, u) {
                  return o((($t[a] && $t[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = ri(e)), e.length > 1)) {
          var n = e.map(function (c) {
              return Dt.quickSetter(c, t, i);
            }),
            s = n.length;
          return function (c) {
            for (var d = s; d--; ) n[d](c);
          };
        }
        e = e[0] || {};
        var o = $t[t],
          a = nr(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var d = new o();
                (Nr._pt = 0),
                  d.init(e, i ? c + i : c, Nr, 0, [e]),
                  d.render(1, d),
                  Nr._pt && Lo(1, Nr);
              }
            : a.set(e, l);
        return o
          ? u
          : function (c) {
              return u(e, l, i ? c + i : c, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var n,
          s = Dt.to(
            e,
            Ht(
              ((n = {}), (n[t] = "+=0.1"), (n.paused = !0), (n.stagger = 0), n),
              i || {}
            )
          ),
          o = function (l, u, c) {
            return s.resetTo(t, l, u, c);
          };
        return (o.tween = s), o;
      },
      isTweening: function (e) {
        return Ae.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = or(e.ease, Lr.ease)), ll(Lr, e || {});
      },
      config: function (e) {
        return ll(we, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          n = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        (n || "").split(",").forEach(function (a) {
          return (
            a &&
            !$t[a] &&
            !Vt[a] &&
            un(t + " effect requires " + a + " plugin.")
          );
        }),
          (ho[t] = function (a, l, u) {
            return i(ri(a), Ht(l || {}, s), u);
          }),
          o &&
            (bt.prototype[t] = function (a, l, u) {
              return this.add(ho[t](a, _i(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        ue[e] = or(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? or(e, t) : ue;
      },
      getById: function (e) {
        return Ae.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new bt(e),
          n,
          s;
        for (
          i.smoothChildTiming = Mt(e.smoothChildTiming),
            Ae.remove(i),
            i._dp = 0,
            i._time = i._tTime = Ae._time,
            n = Ae._first;
          n;

        )
          (s = n._next),
            (t ||
              !(
                !n._dur &&
                n instanceof Ve &&
                n.vars.onComplete === n._targets[0]
              )) &&
              wi(i, n, n._start - n._delay),
            (n = s);
        return wi(Ae, i, 0), i;
      },
      context: function (e, t) {
        return e ? new $l(e, t) : Ce;
      },
      matchMedia: function (e) {
        return new sf(e);
      },
      matchMediaRefresh: function () {
        return (
          lr.forEach(function (e) {
            var t = e.conditions,
              i,
              n;
            for (n in t) t[n] && ((t[n] = !1), (i = 1));
            i && e.revert();
          }) || Io()
        );
      },
      addEventListener: function (e, t) {
        var i = ds[e] || (ds[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = ds[e],
          n = i && i.indexOf(t);
        n >= 0 && i.splice(n, 1);
      },
      utils: {
        wrap: zd,
        wrapYoyo: Nd,
        distribute: vl,
        random: yl,
        snap: _l,
        normalize: Rd,
        getUnit: ct,
        clamp: Ld,
        splitColor: Cl,
        toArray: ri,
        selector: bo,
        mapRange: bl,
        pipe: Id,
        unitize: kd,
        interpolate: Fd,
        shuffle: gl,
      },
      install: el,
      effects: ho,
      ticker: Wt,
      updateRoot: bt.updateRoot,
      plugins: $t,
      globalTimeline: Ae,
      core: {
        PropTween: Lt,
        globals: tl,
        Tween: Ve,
        Timeline: bt,
        Animation: _n,
        getCache: nr,
        _removeLinkedListItem: as,
        reverting: function () {
          return nt;
        },
        context: function (e) {
          return e && Ce && (Ce.data.push(e), (e._ctx = Ce)), Ce;
        },
        suppressOverwrites: function (e) {
          return (io = e);
        },
      },
    };
  Ot("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
    return (fs[r] = Ve[r]);
  }),
    Wt.add(bt.updateRoot),
    (Nr = fs.to({}, { duration: 0 }));
  var of = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    af = function (e, t) {
      var i = e._targets,
        n,
        s,
        o;
      for (n in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][n]),
            o &&
              (o = o.d) &&
              (o._pt && (o = of(o, n)),
              o && o.modifier && o.modifier(t[n], e, i[s], n));
    },
    ko = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (n, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Ze(s) &&
                ((l = {}),
                Ot(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            af(a, s);
          };
        },
      };
    },
    Dt =
      fs.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, n, s) {
            var o, a, l;
            this.tween = i;
            for (o in t)
              (l = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[o],
                  n,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              nt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        ko("roundProps", So),
        ko("modifiers"),
        ko("snap", _l)
      ) || fs;
  (Ve.version = bt.version = Dt.version = "3.13.0"),
    (Ja = 1),
    so() && Fr(),
    ue.Power0,
    ue.Power1,
    ue.Power2,
    ue.Power3,
    ue.Power4,
    ue.Linear,
    ue.Quad,
    ue.Cubic,
    ue.Quart,
    ue.Quint,
    ue.Strong,
    ue.Elastic,
    ue.Back,
    ue.SteppedEase,
    ue.Bounce,
    ue.Sine,
    ue.Expo,
    ue.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Hl,
    Gi,
    Br,
    Ro,
    ur,
    ql,
    zo,
    lf = function () {
      return typeof window != "undefined";
    },
    Ii = {},
    cr = 180 / Math.PI,
    Vr = Math.PI / 180,
    $r = Math.atan2,
    Wl = 1e8,
    No = /([A-Z])/g,
    uf = /(left|right|width|margin|padding|x)/i,
    cf = /[\s,\(]\S/,
    bi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Fo = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    df = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    ff = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    pf = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Gl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Xl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    hf = function (e, t, i) {
      return (e.style[t] = i);
    },
    mf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    gf = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    vf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    _f = function (e, t, i, n, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    yf = function (e, t, i, n, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    Pe = "transform",
    It = Pe + "Origin",
    wf = function r(e, t) {
      var i = this,
        n = this.target,
        s = n.style,
        o = n._gsap;
      if (e in Ii && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = bi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = ki(n, a));
                })
              : (this.tfm[e] = o.x ? o[e] : ki(n, e)),
            e === It && (this.tfm.zOrigin = o.zOrigin);
        else
          return bi.transform.split(",").forEach(function (a) {
            return r.call(i, a, t);
          });
        if (this.props.indexOf(Pe) >= 0) return;
        o.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(It, t, "")),
          (e = Pe);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Yl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    bf = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        n = t._gsap,
        s,
        o;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? t[e[s]](e[s + 2])
            : (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(No, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) n[o] = this.tfm[o];
        n.svg &&
          (n.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = zo()),
          (!s || !s.isStart) &&
            !i[Pe] &&
            (Yl(i),
            n.zOrigin &&
              i[It] &&
              ((i[It] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    },
    jl = function (e, t) {
      var i = { target: e, props: [], revert: bf, save: wf };
      return (
        e._gsap || Dt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (n) {
            return i.save(n);
          }),
        i
      );
    },
    Ul,
    Bo = function (e, t) {
      var i = Gi.createElementNS
        ? Gi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Gi.createElement(e);
      return i && i.style ? i : Gi.createElement(e);
    },
    ni = function r(e, t, i) {
      var n = getComputedStyle(e);
      return (
        n[t] ||
        n.getPropertyValue(t.replace(No, "-$1").toLowerCase()) ||
        n.getPropertyValue(t) ||
        (!i && r(e, Hr(t) || t, 1)) ||
        ""
      );
    },
    Kl = "O,Moz,ms,Ms,Webkit".split(","),
    Hr = function (e, t, i) {
      var n = t || ur,
        s = n.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Kl[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Kl[o] : "") + e;
    },
    Vo = function () {
      lf() &&
        window.document &&
        ((Hl = window),
        (Gi = Hl.document),
        (Br = Gi.documentElement),
        (ur = Bo("div") || { style: {} }),
        Bo("div"),
        (Pe = Hr(Pe)),
        (It = Pe + "Origin"),
        (ur.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ul = !!Hr("perspective")),
        (zo = Dt.core.reverting),
        (Ro = 1));
    },
    Zl = function (e) {
      var t = e.ownerSVGElement,
        i = Bo(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        n = e.cloneNode(!0),
        s;
      (n.style.display = "block"), i.appendChild(n), Br.appendChild(i);
      try {
        s = n.getBBox();
      } catch (o) {}
      return i.removeChild(n), Br.removeChild(i), s;
    },
    Ql = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Jl = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch (n) {
        (t = Zl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Zl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Ql(e, ["x", "cx", "x1"]) || 0,
              y: +Ql(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    eu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Jl(e));
    },
    dr = function (e, t) {
      if (t) {
        var i = e.style,
          n;
        t in Ii && t !== It && (t = Pe),
          i.removeProperty
            ? ((n = t.substr(0, 2)),
              (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                n === "--" ? t : t.replace(No, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Xi = function (e, t, i, n, s, o) {
      var a = new Lt(e._pt, t, i, 0, 1, o ? Xl : Gl);
      return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
    },
    tu = { deg: 1, rad: 1, turn: 1 },
    Sf = { grid: 1, flex: 1 },
    Yi = function r(e, t, i, n) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = ur.style,
        l = uf.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        p = n === "px",
        f = n === "%",
        m,
        g,
        y,
        w;
      if (n === o || !s || tu[n] || tu[o]) return s;
      if (
        (o !== "px" && !p && (s = r(e, t, i, "px")),
        (w = e.getCTM && eu(e)),
        (f || o === "%") && (Ii[t] || ~t.indexOf("adius")))
      )
        return (
          (m = w ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ze(f ? (s / m) * d : (s / 100) * m)
        );
      if (
        ((a[l ? "width" : "height"] = d + (p ? o : n)),
        (g =
          (n !== "rem" && ~t.indexOf("adius")) ||
          (n === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        w && (g = (e.ownerSVGElement || {}).parentNode),
        (!g || g === Gi || !g.appendChild) && (g = Gi.body),
        (y = g._gsap),
        y && f && y.width && l && y.time === Wt.time && !y.uncache)
      )
        return ze((s / y.width) * d);
      if (f && (t === "height" || t === "width")) {
        var b = e.style[t];
        (e.style[t] = d + n), (m = e[c]), b ? (e.style[t] = b) : dr(e, t);
      } else
        (f || o === "%") &&
          !Sf[ni(g, "display")] &&
          (a.position = ni(e, "position")),
          g === e && (a.position = "static"),
          g.appendChild(ur),
          (m = ur[c]),
          g.removeChild(ur),
          (a.position = "absolute");
      return (
        l && f && ((y = nr(g)), (y.time = Wt.time), (y.width = g[c])),
        ze(p ? (m * s) / d : m && s ? (d / m) * s : 0)
      );
    },
    ki = function (e, t, i, n) {
      var s;
      return (
        Ro || Vo(),
        t in bi &&
          t !== "transform" &&
          ((t = bi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Ii[t] && t !== "transform"
          ? ((s = bn(e, n)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : hs(ni(e, It)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
              (s =
                (ps[t] && ps[t](e, t, i)) ||
                ni(e, t) ||
                nl(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Yi(e, t, s, i) + i : s
      );
    },
    Tf = function (e, t, i, n) {
      if (!i || i === "none") {
        var s = Hr(t, e, 1),
          o = s && ni(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = ni(e, "borderTopColor"));
      }
      var a = new Lt(this._pt, e.style, t, 0, 1, Fl),
        l = 0,
        u = 0,
        c,
        d,
        p,
        f,
        m,
        g,
        y,
        w,
        b,
        C,
        h,
        S;
      if (
        ((a.b = i),
        (a.e = n),
        (i += ""),
        (n += ""),
        n.substring(0, 6) === "var(--" &&
          (n = ni(e, n.substring(4, n.indexOf(")")))),
        n === "auto" &&
          ((g = e.style[t]),
          (e.style[t] = n),
          (n = ni(e, t) || n),
          g ? (e.style[t] = g) : dr(e, t)),
        (c = [i, n]),
        Pl(c),
        (i = c[0]),
        (n = c[1]),
        (p = i.match(Dr) || []),
        (S = n.match(Dr) || []),
        S.length)
      ) {
        for (; (d = Dr.exec(n)); )
          (y = d[0]),
            (b = n.substring(l, d.index)),
            m
              ? (m = (m + 1) % 5)
              : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") &&
                (m = 1),
            y !== (g = p[u++] || "") &&
              ((f = parseFloat(g) || 0),
              (h = g.substr((f + "").length)),
              y.charAt(1) === "=" && (y = Ir(f, y) + h),
              (w = parseFloat(y)),
              (C = y.substr((w + "").length)),
              (l = Dr.lastIndex - C.length),
              C ||
                ((C = C || we.units[t] || h),
                l === n.length && ((n += C), (a.e += C))),
              h !== C && (f = Yi(e, t, g, C) || 0),
              (a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: f,
                c: w - f,
                m: (m && m < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < n.length ? n.substring(l, n.length) : "";
      } else a.r = t === "display" && n === "none" ? Xl : Gl;
      return Za.test(n) && (a.e = 0), (this._pt = a), a;
    },
    iu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    xf = function (e) {
      var t = e.split(" "),
        i = t[0],
        n = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || n === "left" || n === "right") &&
          ((e = i), (i = n), (n = e)),
        (t[0] = iu[i] || i),
        (t[1] = iu[n] || n),
        t.join(" ")
      );
    },
    Cf = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          n = i.style,
          s = t.u,
          o = i._gsap,
          a,
          l,
          u;
        if (s === "all" || s === !0) (n.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (a = s[u]),
              Ii[a] && ((l = 1), (a = a === "transformOrigin" ? It : Pe)),
              dr(i, a);
        l &&
          (dr(i, Pe),
          o &&
            (o.svg && i.removeAttribute("transform"),
            (n.scale = n.rotate = n.translate = "none"),
            bn(i, 1),
            (o.uncache = 1),
            Yl(n)));
      }
    },
    ps = {
      clearProps: function (e, t, i, n, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Lt(e._pt, t, i, 0, 0, Cf));
          return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    wn = [1, 0, 0, 1, 0, 0],
    ru = {},
    nu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    su = function (e) {
      var t = ni(e, Pe);
      return nu(t) ? wn : t.substr(7).match(Ka).map(ze);
    },
    $o = function (e, t) {
      var i = e._gsap || nr(e),
        n = e.style,
        s = su(e),
        o,
        a,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? wn : s)
        : (s === wn &&
            !e.offsetParent &&
            e !== Br &&
            !i.svg &&
            ((l = n.display),
            (n.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (a = e.nextElementSibling), Br.appendChild(e)),
            (s = su(e)),
            l ? (n.display = l) : dr(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Br.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Ho = function (e, t, i, n, s, o) {
      var a = e._gsap,
        l = s || $o(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        d = a.xOffset || 0,
        p = a.yOffset || 0,
        f = l[0],
        m = l[1],
        g = l[2],
        y = l[3],
        w = l[4],
        b = l[5],
        C = t.split(" "),
        h = parseFloat(C[0]) || 0,
        S = parseFloat(C[1]) || 0,
        x,
        P,
        M,
        I;
      i
        ? l !== wn &&
          (P = f * y - m * g) &&
          ((M = h * (y / P) + S * (-g / P) + (g * b - y * w) / P),
          (I = h * (-m / P) + S * (f / P) - (f * b - m * w) / P),
          (h = M),
          (S = I))
        : ((x = Jl(e)),
          (h = x.x + (~C[0].indexOf("%") ? (h / 100) * x.width : h)),
          (S =
            x.y + (~(C[1] || C[0]).indexOf("%") ? (S / 100) * x.height : S))),
        n || (n !== !1 && a.smooth)
          ? ((w = h - u),
            (b = S - c),
            (a.xOffset = d + (w * f + b * g) - w),
            (a.yOffset = p + (w * m + b * y) - b))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = h),
        (a.yOrigin = S),
        (a.smooth = !!n),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[It] = "0px 0px"),
        o &&
          (Xi(o, a, "xOrigin", u, h),
          Xi(o, a, "yOrigin", c, S),
          Xi(o, a, "xOffset", d, a.xOffset),
          Xi(o, a, "yOffset", p, a.yOffset)),
        e.setAttribute("data-svg-origin", h + " " + S);
    },
    bn = function (e, t) {
      var i = e._gsap || new Dl(e);
      if ("x" in i && !t && !i.uncache) return i;
      var n = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = ni(e, It) || "0",
        c,
        d,
        p,
        f,
        m,
        g,
        y,
        w,
        b,
        C,
        h,
        S,
        x,
        P,
        M,
        I,
        L,
        R,
        E,
        N,
        _,
        v,
        T,
        O,
        D,
        k,
        A,
        V,
        W,
        J,
        K,
        re;
      return (
        (c = d = p = g = y = w = b = C = h = 0),
        (f = m = 1),
        (i.svg = !!(e.getCTM && eu(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (n[Pe] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Pe] !== "none" ? l[Pe] : "")),
          (n.scale = n.rotate = n.translate = "none")),
        (P = $o(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((D = e.getBBox()),
              (u = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px"),
              (O = ""))
            : (O = !t && e.getAttribute("data-svg-origin")),
          Ho(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, P)),
        (S = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        P !== wn &&
          ((R = P[0]),
          (E = P[1]),
          (N = P[2]),
          (_ = P[3]),
          (c = v = P[4]),
          (d = T = P[5]),
          P.length === 6
            ? ((f = Math.sqrt(R * R + E * E)),
              (m = Math.sqrt(_ * _ + N * N)),
              (g = R || E ? $r(E, R) * cr : 0),
              (b = N || _ ? $r(N, _) * cr + g : 0),
              b && (m *= Math.abs(Math.cos(b * Vr))),
              i.svg && ((c -= S - (S * R + x * N)), (d -= x - (S * E + x * _))))
            : ((re = P[6]),
              (J = P[7]),
              (A = P[8]),
              (V = P[9]),
              (W = P[10]),
              (K = P[11]),
              (c = P[12]),
              (d = P[13]),
              (p = P[14]),
              (M = $r(re, W)),
              (y = M * cr),
              M &&
                ((I = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = v * I + A * L),
                (D = T * I + V * L),
                (k = re * I + W * L),
                (A = v * -L + A * I),
                (V = T * -L + V * I),
                (W = re * -L + W * I),
                (K = J * -L + K * I),
                (v = O),
                (T = D),
                (re = k)),
              (M = $r(-N, W)),
              (w = M * cr),
              M &&
                ((I = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = R * I - A * L),
                (D = E * I - V * L),
                (k = N * I - W * L),
                (K = _ * L + K * I),
                (R = O),
                (E = D),
                (N = k)),
              (M = $r(E, R)),
              (g = M * cr),
              M &&
                ((I = Math.cos(M)),
                (L = Math.sin(M)),
                (O = R * I + E * L),
                (D = v * I + T * L),
                (E = E * I - R * L),
                (T = T * I - v * L),
                (R = O),
                (v = D)),
              y &&
                Math.abs(y) + Math.abs(g) > 359.9 &&
                ((y = g = 0), (w = 180 - w)),
              (f = ze(Math.sqrt(R * R + E * E + N * N))),
              (m = ze(Math.sqrt(T * T + re * re))),
              (M = $r(v, T)),
              (b = Math.abs(M) > 2e-4 ? M * cr : 0),
              (h = K ? 1 / (K < 0 ? -K : K) : 0)),
          i.svg &&
            ((O = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !nu(ni(e, Pe))),
            O && e.setAttribute("transform", O))),
        Math.abs(b) > 90 &&
          Math.abs(b) < 270 &&
          (s
            ? ((f *= -1),
              (b += g <= 0 ? 180 : -180),
              (g += g <= 0 ? 180 : -180))
            : ((m *= -1), (b += b <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          d -
          ((i.yPercent =
            d &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = p + o),
        (i.scaleX = ze(f)),
        (i.scaleY = ze(m)),
        (i.rotation = ze(g) + a),
        (i.rotationX = ze(y) + a),
        (i.rotationY = ze(w) + a),
        (i.skewX = b + a),
        (i.skewY = C + a),
        (i.transformPerspective = h + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (n[It] = hs(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = we.force3D),
        (i.renderTransform = i.svg ? Af : Ul ? ou : Ef),
        (i.uncache = 0),
        i
      );
    },
    hs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    qo = function (e, t, i) {
      var n = ct(t);
      return ze(parseFloat(t) + parseFloat(Yi(e, "x", i + "px", n))) + n;
    },
    Ef = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        ou(e, t);
    },
    fr = "0deg",
    Sn = "0px",
    pr = ") ",
    ou = function (e, t) {
      var i = t || this,
        n = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        u = i.rotation,
        c = i.rotationY,
        d = i.rotationX,
        p = i.skewX,
        f = i.skewY,
        m = i.scaleX,
        g = i.scaleY,
        y = i.transformPerspective,
        w = i.force3D,
        b = i.target,
        C = i.zOrigin,
        h = "",
        S = (w === "auto" && e && e !== 1) || w === !0;
      if (C && (d !== fr || c !== fr)) {
        var x = parseFloat(c) * Vr,
          P = Math.sin(x),
          M = Math.cos(x),
          I;
        (x = parseFloat(d) * Vr),
          (I = Math.cos(x)),
          (o = qo(b, o, P * I * -C)),
          (a = qo(b, a, -Math.sin(x) * -C)),
          (l = qo(b, l, M * I * -C + C));
      }
      y !== Sn && (h += "perspective(" + y + pr),
        (n || s) && (h += "translate(" + n + "%, " + s + "%) "),
        (S || o !== Sn || a !== Sn || l !== Sn) &&
          (h +=
            l !== Sn || S
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + pr),
        u !== fr && (h += "rotate(" + u + pr),
        c !== fr && (h += "rotateY(" + c + pr),
        d !== fr && (h += "rotateX(" + d + pr),
        (p !== fr || f !== fr) && (h += "skew(" + p + ", " + f + pr),
        (m !== 1 || g !== 1) && (h += "scale(" + m + ", " + g + pr),
        (b.style[Pe] = h || "translate(0, 0)");
    },
    Af = function (e, t) {
      var i = t || this,
        n = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        u = i.skewX,
        c = i.skewY,
        d = i.scaleX,
        p = i.scaleY,
        f = i.target,
        m = i.xOrigin,
        g = i.yOrigin,
        y = i.xOffset,
        w = i.yOffset,
        b = i.forceCSS,
        C = parseFloat(o),
        h = parseFloat(a),
        S,
        x,
        P,
        M,
        I;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Vr),
            (u *= Vr),
            (S = Math.cos(l) * d),
            (x = Math.sin(l) * d),
            (P = Math.sin(l - u) * -p),
            (M = Math.cos(l - u) * p),
            u &&
              ((c *= Vr),
              (I = Math.tan(u - c)),
              (I = Math.sqrt(1 + I * I)),
              (P *= I),
              (M *= I),
              c &&
                ((I = Math.tan(c)),
                (I = Math.sqrt(1 + I * I)),
                (S *= I),
                (x *= I))),
            (S = ze(S)),
            (x = ze(x)),
            (P = ze(P)),
            (M = ze(M)))
          : ((S = d), (M = p), (x = P = 0)),
        ((C && !~(o + "").indexOf("px")) || (h && !~(a + "").indexOf("px"))) &&
          ((C = Yi(f, "x", o, "px")), (h = Yi(f, "y", a, "px"))),
        (m || g || y || w) &&
          ((C = ze(C + m - (m * S + g * P) + y)),
          (h = ze(h + g - (m * x + g * M) + w))),
        (n || s) &&
          ((I = f.getBBox()),
          (C = ze(C + (n / 100) * I.width)),
          (h = ze(h + (s / 100) * I.height))),
        (I =
          "matrix(" +
          S +
          "," +
          x +
          "," +
          P +
          "," +
          M +
          "," +
          C +
          "," +
          h +
          ")"),
        f.setAttribute("transform", I),
        b && (f.style[Pe] = I);
    },
    Pf = function (e, t, i, n, s) {
      var o = 360,
        a = Ze(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? cr : 1),
        u = l - n,
        c = n + u + "deg",
        d,
        p;
      return (
        a &&
          ((d = s.split("_")[1]),
          d === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          d === "cw" && u < 0
            ? (u = ((u + o * Wl) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * Wl) % o) - ~~(u / o) * o)),
        (e._pt = p = new Lt(e._pt, t, i, n, u, df)),
        (p.e = c),
        (p.u = "deg"),
        e._props.push(i),
        p
      );
    },
    au = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Mf = function (e, t, i) {
      var n = au({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        m;
      n.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[Pe] = t),
          (a = bn(i, 1)),
          dr(i, Pe),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Pe]),
          (o[Pe] = t),
          (a = bn(i, 1)),
          (o[Pe] = u));
      for (l in Ii)
        (u = n[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = ct(u)),
            (m = ct(c)),
            (d = f !== m ? Yi(i, l, u, m) : parseFloat(u)),
            (p = parseFloat(c)),
            (e._pt = new Lt(e._pt, a, l, d, p - d, Fo)),
            (e._pt.u = m || 0),
            e._props.push(l));
      au(a, n);
    };
  Ot("padding,margin,Width,Radius", function (r, e) {
    var t = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (
        a
      ) {
        return e < 2 ? r + a : "border" + a + r;
      });
    ps[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
      var p, f;
      if (arguments.length < 4)
        return (
          (p = o.map(function (m) {
            return ki(a, m, u);
          })),
          (f = p.join(" ")),
          f.split(p[0]).length === 5 ? p[0] : f
        );
      (p = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (m, g) {
          return (f[m] = p[g] = p[g] || p[((g - 1) / 2) | 0]);
        }),
        a.init(l, f, d);
    };
  });
  var lu = {
    name: "css",
    register: Vo,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, n, s) {
      var o = this._props,
        a = e.style,
        l = i.vars.startAt,
        u,
        c,
        d,
        p,
        f,
        m,
        g,
        y,
        w,
        b,
        C,
        h,
        S,
        x,
        P,
        M;
      Ro || Vo(),
        (this.styles = this.styles || jl(e)),
        (M = this.styles.props),
        (this.tween = i);
      for (g in t)
        if (
          g !== "autoRound" &&
          ((c = t[g]), !($t[g] && Il(g, t, i, n, e, s)))
        ) {
          if (
            ((f = typeof c),
            (m = ps[g]),
            f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = hn(c)),
            m)
          )
            m(this, e, g, c, i) && (P = 1);
          else if (g.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
              (c += ""),
              (qi.lastIndex = 0),
              qi.test(u) || ((y = ct(u)), (w = ct(c))),
              w ? y !== w && (u = Yi(e, g, u, w) + w) : y && (c += y),
              this.add(a, "setProperty", u, c, n, s, 0, 0, g),
              o.push(g),
              M.push(g, 0, a[g]);
          else if (f !== "undefined") {
            if (
              (l && g in l
                ? ((u =
                    typeof l[g] == "function" ? l[g].call(i, n, e, s) : l[g]),
                  Ze(u) && ~u.indexOf("random(") && (u = hn(u)),
                  ct(u + "") ||
                    u === "auto" ||
                    (u += we.units[g] || ct(ki(e, g)) || ""),
                  (u + "").charAt(1) === "=" && (u = ki(e, g)))
                : (u = ki(e, g)),
              (p = parseFloat(u)),
              (b = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              b && (c = c.substr(2)),
              (d = parseFloat(c)),
              g in bi &&
                (g === "autoAlpha" &&
                  (p === 1 && ki(e, "visibility") === "hidden" && d && (p = 0),
                  M.push("visibility", 0, a.visibility),
                  Xi(
                    this,
                    a,
                    "visibility",
                    p ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                g !== "scale" &&
                  g !== "transform" &&
                  ((g = bi[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
              (C = g in Ii),
              C)
            ) {
              if (
                (this.styles.save(g),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = ni(e, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                h ||
                  ((S = e._gsap),
                  (S.renderTransform && !t.parseTransform) ||
                    bn(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && S.smooth),
                  (h = this._pt =
                    new Lt(this._pt, a, Pe, 0, 1, S.renderTransform, S, 0, -1)),
                  (h.dep = 1)),
                g === "scale")
              )
                (this._pt = new Lt(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (b ? Ir(S.scaleY, b + d) : d) - S.scaleY || 0,
                  Fo
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", g),
                  (g += "X");
              else if (g === "transformOrigin") {
                M.push(It, 0, a[It]),
                  (c = xf(c)),
                  S.svg
                    ? Ho(e, c, 0, x, 0, this)
                    : ((w = parseFloat(c.split(" ")[2]) || 0),
                      w !== S.zOrigin && Xi(this, S, "zOrigin", S.zOrigin, w),
                      Xi(this, a, g, hs(u), hs(c)));
                continue;
              } else if (g === "svgOrigin") {
                Ho(e, c, 1, x, 0, this);
                continue;
              } else if (g in ru) {
                Pf(this, S, g, p, b ? Ir(p, b + c) : c);
                continue;
              } else if (g === "smoothOrigin") {
                Xi(this, S, "smooth", S.smooth, c);
                continue;
              } else if (g === "force3D") {
                S[g] = c;
                continue;
              } else if (g === "transform") {
                Mf(this, c, e);
                continue;
              }
            } else g in a || (g = Hr(g) || g);
            if (
              C ||
              ((d || d === 0) && (p || p === 0) && !cf.test(c) && g in a)
            )
              (y = (u + "").substr((p + "").length)),
                d || (d = 0),
                (w = ct(c) || (g in we.units ? we.units[g] : y)),
                y !== w && (p = Yi(e, g, u, w)),
                (this._pt = new Lt(
                  this._pt,
                  C ? S : a,
                  g,
                  p,
                  (b ? Ir(p, b + d) : d) - p,
                  !C && (w === "px" || g === "zIndex") && t.autoRound !== !1
                    ? pf
                    : Fo
                )),
                (this._pt.u = w || 0),
                y !== w && w !== "%" && ((this._pt.b = u), (this._pt.r = ff));
            else if (g in a) Tf.call(this, e, g, u, b ? b + c : c);
            else if (g in e) this.add(e, g, u || e[g], b ? b + c : c, n, s);
            else if (g !== "parseTransform") {
              co(g, c);
              continue;
            }
            C ||
              (g in a
                ? M.push(g, 0, a[g])
                : typeof e[g] == "function"
                ? M.push(g, 2, e[g]())
                : M.push(g, 1, u || e[g])),
              o.push(g);
          }
        }
      P && Bl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !zo())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: ki,
    aliases: bi,
    getSetter: function (e, t, i) {
      var n = bi[t];
      return (
        n && n.indexOf(",") < 0 && (t = n),
        t in Ii && t !== It && (e._gsap.x || ki(e, "x"))
          ? i && ql === i
            ? t === "scale"
              ? vf
              : gf
            : (ql = i || {}) && (t === "scale" ? _f : yf)
          : e.style && !no(e.style[t])
          ? hf
          : ~t.indexOf("-")
          ? mf
          : Oo(e, t)
      );
    },
    core: { _removeProperty: dr, _getMatrix: $o },
  };
  (Dt.utils.checkPrefix = Hr),
    (Dt.core.getStyleSaver = jl),
    (function (r, e, t, i) {
      var n = Ot(r + "," + e + "," + t, function (s) {
        Ii[s] = 1;
      });
      Ot(e, function (s) {
        (we.units[s] = "deg"), (ru[s] = 1);
      }),
        (bi[n[13]] = r + "," + e),
        Ot(i, function (s) {
          var o = s.split(":");
          bi[o[1]] = n[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Ot(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (r) {
        we.units[r] = "px";
      }
    ),
    Dt.registerPlugin(lu);
  var j = Dt.registerPlugin(lu) || Dt;
  j.core.Tween;
  function Of(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i);
    }
  }
  function Lf(r, e, t) {
    return e && Of(r.prototype, e), r;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var st,
    ms,
    Gt,
    ji,
    Ui,
    qr,
    uu,
    hr,
    Tn,
    cu,
    Ri,
    fi,
    du,
    fu = function () {
      return (
        st ||
        (typeof window != "undefined" &&
          (st = window.gsap) &&
          st.registerPlugin &&
          st)
      );
    },
    pu = 1,
    Wr = [],
    oe = [],
    Si = [],
    xn = Date.now,
    Wo = function (e, t) {
      return t;
    },
    Df = function () {
      var e = Tn.core,
        t = e.bridge || {},
        i = e._scrollers,
        n = e._proxies;
      i.push.apply(i, oe),
        n.push.apply(n, Si),
        (oe = i),
        (Si = n),
        (Wo = function (o, a) {
          return t[o](a);
        });
    },
    Ki = function (e, t) {
      return ~Si.indexOf(e) && Si[Si.indexOf(e) + 1][t];
    },
    Cn = function (e) {
      return !!~cu.indexOf(e);
    },
    St = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
    },
    Tt = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    gs = "scrollLeft",
    vs = "scrollTop",
    Go = function () {
      return (Ri && Ri.isPressed) || oe.cache++;
    },
    _s = function (e, t) {
      var i = function n(s) {
        if (s || s === 0) {
          pu && (Gt.history.scrollRestoration = "manual");
          var o = Ri && Ri.isPressed;
          (s = n.v = Math.round(s) || (Ri && Ri.iOS ? 1 : 0)),
            e(s),
            (n.cacheID = oe.cache),
            o && Wo("ss", s);
        } else
          (t || oe.cache !== n.cacheID || Wo("ref")) &&
            ((n.cacheID = oe.cache), (n.v = e()));
        return n.v + n.offset;
      };
      return (i.offset = 0), e && i;
    },
    xt = {
      s: gs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _s(function (r) {
        return arguments.length
          ? Gt.scrollTo(r, We.sc())
          : Gt.pageXOffset || ji[gs] || Ui[gs] || qr[gs] || 0;
      }),
    },
    We = {
      s: vs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: xt,
      sc: _s(function (r) {
        return arguments.length
          ? Gt.scrollTo(xt.sc(), r)
          : Gt.pageYOffset || ji[vs] || Ui[vs] || qr[vs] || 0;
      }),
    },
    kt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || st.utils.toArray)(e)[0] ||
        (typeof e == "string" && st.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    If = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Zi = function (e, t) {
      var i = t.s,
        n = t.sc;
      Cn(e) && (e = ji.scrollingElement || Ui);
      var s = oe.indexOf(e),
        o = n === We.sc ? 1 : 2;
      !~s && (s = oe.push(e) - 1), oe[s + o] || St(e, "scroll", Go);
      var a = oe[s + o],
        l =
          a ||
          (oe[s + o] =
            _s(Ki(e, i), !0) ||
            (Cn(e)
              ? n
              : _s(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = st.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Xo = function (e, t, i) {
      var n = e,
        s = e,
        o = xn(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (m, g) {
          var y = xn();
          g || y - o > l
            ? ((s = n), (n = m), (a = o), (o = y))
            : i
            ? (n += m)
            : (n = s + ((m - s) / (y - a)) * (o - a));
        },
        d = function () {
          (s = n = i ? 0 : n), (a = o = 0);
        },
        p = function (m) {
          var g = a,
            y = s,
            w = xn();
          return (
            (m || m === 0) && m !== n && c(m),
            o === a || w - a > u
              ? 0
              : ((n + (i ? y : -y)) / ((i ? w : o) - g)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: p };
    },
    En = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    hu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    mu = function () {
      (Tn = st.core.globals().ScrollTrigger), Tn && Tn.core && Df();
    },
    gu = function (e) {
      return (
        (st = e || fu()),
        !ms &&
          st &&
          typeof document != "undefined" &&
          document.body &&
          ((Gt = window),
          (ji = document),
          (Ui = ji.documentElement),
          (qr = ji.body),
          (cu = [Gt, ji, Ui, qr]),
          st.utils.clamp,
          (du = st.core.context || function () {}),
          (hr = "onpointerenter" in qr ? "pointer" : "mouse"),
          (uu = Ne.isTouch =
            Gt.matchMedia &&
            Gt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Gt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (fi = Ne.eventTypes =
            (
              "ontouchstart" in Ui
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ui
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (pu = 0);
          }, 500),
          mu(),
          (ms = 1)),
        ms
      );
    };
  (xt.op = We), (oe.cache = 0);
  var Ne = (function () {
    function r(t) {
      this.init(t);
    }
    var e = r.prototype;
    return (
      (e.init = function (i) {
        ms || gu(st) || console.warn("Please gsap.registerPlugin(Observer)"),
          Tn || mu();
        var n = i.tolerance,
          s = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          u = i.debounce,
          c = i.preventDefault,
          d = i.onStop,
          p = i.onStopDelay,
          f = i.ignore,
          m = i.wheelSpeed,
          g = i.event,
          y = i.onDragStart,
          w = i.onDragEnd,
          b = i.onDrag,
          C = i.onPress,
          h = i.onRelease,
          S = i.onRight,
          x = i.onLeft,
          P = i.onUp,
          M = i.onDown,
          I = i.onChangeX,
          L = i.onChangeY,
          R = i.onChange,
          E = i.onToggleX,
          N = i.onToggleY,
          _ = i.onHover,
          v = i.onHoverEnd,
          T = i.onMove,
          O = i.ignoreCheck,
          D = i.isNormalizer,
          k = i.onGestureStart,
          A = i.onGestureEnd,
          V = i.onWheel,
          W = i.onEnable,
          J = i.onDisable,
          K = i.onClick,
          re = i.scrollSpeed,
          de = i.capture,
          fe = i.allowClicks,
          ge = i.lockAxis,
          Me = i.onLockAxis;
        (this.target = a = kt(a) || Ui),
          (this.vars = i),
          f && (f = st.utils.toArray(f)),
          (n = n || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (re = re || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Gt.getComputedStyle(qr).lineHeight) || 22);
        var ot,
          Ie,
          Xe,
          se,
          Se,
          Ye,
          je,
          z = this,
          et = 0,
          Nt = 0,
          tt = i.passive || (!c && i.passive !== !1),
          pe = Zi(a, xt),
          Pt = Zi(a, We),
          mt = pe(),
          Qt = Pt(),
          Oe =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            fi[0] === "pointerdown",
          Jt = Cn(a),
          Te = a.ownerDocument || ji,
          gt = [0, 0, 0],
          Ft = [0, 0, 0],
          hi = 0,
          Ar = function () {
            return (hi = xn());
          },
          ke = function (G, he) {
            return (
              ((z.event = G) && f && If(G.target, f)) ||
              (he && Oe && G.pointerType !== "touch") ||
              (O && O(G, he))
            );
          },
          ln = function () {
            z._vx.reset(), z._vy.reset(), Ie.pause(), d && d(z);
          },
          F = function () {
            var G = (z.deltaX = hu(gt)),
              he = (z.deltaY = hu(Ft)),
              $ = Math.abs(G) >= n,
              ee = Math.abs(he) >= n;
            R && ($ || ee) && R(z, G, he, gt, Ft),
              $ &&
                (S && z.deltaX > 0 && S(z),
                x && z.deltaX < 0 && x(z),
                I && I(z),
                E && z.deltaX < 0 != et < 0 && E(z),
                (et = z.deltaX),
                (gt[0] = gt[1] = gt[2] = 0)),
              ee &&
                (M && z.deltaY > 0 && M(z),
                P && z.deltaY < 0 && P(z),
                L && L(z),
                N && z.deltaY < 0 != Nt < 0 && N(z),
                (Nt = z.deltaY),
                (Ft[0] = Ft[1] = Ft[2] = 0)),
              (se || Xe) &&
                (T && T(z),
                Xe && (y && Xe === 1 && y(z), b && b(z), (Xe = 0)),
                (se = !1)),
              Ye && !(Ye = !1) && Me && Me(z),
              Se && (V(z), (Se = !1)),
              (ot = 0);
          },
          H = function (G, he, $) {
            (gt[$] += G),
              (Ft[$] += he),
              z._vx.update(G),
              z._vy.update(he),
              u ? ot || (ot = requestAnimationFrame(F)) : F();
          },
          X = function (G, he) {
            ge &&
              !je &&
              ((z.axis = je = Math.abs(G) > Math.abs(he) ? "x" : "y"),
              (Ye = !0)),
              je !== "y" && ((gt[2] += G), z._vx.update(G, !0)),
              je !== "x" && ((Ft[2] += he), z._vy.update(he, !0)),
              u ? ot || (ot = requestAnimationFrame(F)) : F();
          },
          le = function (G) {
            if (!ke(G, 1)) {
              G = En(G, c);
              var he = G.clientX,
                $ = G.clientY,
                ee = he - z.x,
                U = $ - z.y,
                te = z.isDragging;
              (z.x = he),
                (z.y = $),
                (te ||
                  ((ee || U) &&
                    (Math.abs(z.startX - he) >= s ||
                      Math.abs(z.startY - $) >= s))) &&
                  ((Xe = te ? 2 : 1), te || (z.isDragging = !0), X(ee, U));
            }
          },
          ie = (z.onPress = function (Z) {
            ke(Z, 1) ||
              (Z && Z.button) ||
              ((z.axis = je = null),
              Ie.pause(),
              (z.isPressed = !0),
              (Z = En(Z)),
              (et = Nt = 0),
              (z.startX = z.x = Z.clientX),
              (z.startY = z.y = Z.clientY),
              z._vx.reset(),
              z._vy.reset(),
              St(D ? a : Te, fi[1], le, tt, !0),
              (z.deltaX = z.deltaY = 0),
              C && C(z));
          }),
          Y = (z.onRelease = function (Z) {
            if (!ke(Z, 1)) {
              Tt(D ? a : Te, fi[1], le, !0);
              var G = !isNaN(z.y - z.startY),
                he = z.isDragging,
                $ =
                  he &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                ee = En(Z);
              !$ &&
                G &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  fe &&
                  st.delayedCall(0.08, function () {
                    if (xn() - hi > 300 && !Z.defaultPrevented) {
                      if (Z.target.click) Z.target.click();
                      else if (Te.createEvent) {
                        var U = Te.createEvent("MouseEvents");
                        U.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Gt,
                          1,
                          ee.screenX,
                          ee.screenY,
                          ee.clientX,
                          ee.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          Z.target.dispatchEvent(U);
                      }
                    }
                  })),
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                d && he && !D && Ie.restart(!0),
                Xe && F(),
                w && he && w(z),
                h && h(z, $);
            }
          }),
          He = function (G) {
            return (
              G.touches &&
              G.touches.length > 1 &&
              (z.isGesturing = !0) &&
              k(G, z.isDragging)
            );
          },
          it = function () {
            return (z.isGesturing = !1) || A(z);
          },
          Bt = function (G) {
            if (!ke(G)) {
              var he = pe(),
                $ = Pt();
              H((he - mt) * re, ($ - Qt) * re, 1),
                (mt = he),
                (Qt = $),
                d && Ie.restart(!0);
            }
          },
          Ue = function (G) {
            if (!ke(G)) {
              (G = En(G, c)), V && (Se = !0);
              var he =
                (G.deltaMode === 1
                  ? l
                  : G.deltaMode === 2
                  ? Gt.innerHeight
                  : 1) * m;
              H(G.deltaX * he, G.deltaY * he, 0), d && !D && Ie.restart(!0);
            }
          },
          mi = function (G) {
            if (!ke(G)) {
              var he = G.clientX,
                $ = G.clientY,
                ee = he - z.x,
                U = $ - z.y;
              (z.x = he),
                (z.y = $),
                (se = !0),
                d && Ie.restart(!0),
                (ee || U) && X(ee, U);
            }
          },
          gi = function (G) {
            (z.event = G), _(z);
          },
          vt = function (G) {
            (z.event = G), v(z);
          },
          Pr = function (G) {
            return ke(G) || (En(G, c) && K(z));
          };
        (Ie = z._dc = st.delayedCall(p || 0.25, ln).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Xo(0, 50, !0)),
          (z._vy = Xo(0, 50, !0)),
          (z.scrollX = pe),
          (z.scrollY = Pt),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          du(this),
          (z.enable = function (Z) {
            return (
              z.isEnabled ||
                (St(Jt ? Te : a, "scroll", Go),
                o.indexOf("scroll") >= 0 &&
                  St(Jt ? Te : a, "scroll", Bt, tt, de),
                o.indexOf("wheel") >= 0 && St(a, "wheel", Ue, tt, de),
                ((o.indexOf("touch") >= 0 && uu) ||
                  o.indexOf("pointer") >= 0) &&
                  (St(a, fi[0], ie, tt, de),
                  St(Te, fi[2], Y),
                  St(Te, fi[3], Y),
                  fe && St(a, "click", Ar, !0, !0),
                  K && St(a, "click", Pr),
                  k && St(Te, "gesturestart", He),
                  A && St(Te, "gestureend", it),
                  _ && St(a, hr + "enter", gi),
                  v && St(a, hr + "leave", vt),
                  T && St(a, hr + "move", mi)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = se = Xe = !1),
                z._vx.reset(),
                z._vy.reset(),
                (mt = pe()),
                (Qt = Pt()),
                Z && Z.type && ie(Z),
                W && W(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Wr.filter(function (Z) {
                return Z !== z && Cn(Z.target);
              }).length || Tt(Jt ? Te : a, "scroll", Go),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), Tt(D ? a : Te, fi[1], le, !0)),
              Tt(Jt ? Te : a, "scroll", Bt, de),
              Tt(a, "wheel", Ue, de),
              Tt(a, fi[0], ie, de),
              Tt(Te, fi[2], Y),
              Tt(Te, fi[3], Y),
              Tt(a, "click", Ar, !0),
              Tt(a, "click", Pr),
              Tt(Te, "gesturestart", He),
              Tt(Te, "gestureend", it),
              Tt(a, hr + "enter", gi),
              Tt(a, hr + "leave", vt),
              Tt(a, hr + "move", mi),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              J && J(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var Z = Wr.indexOf(z);
              Z >= 0 && Wr.splice(Z, 1), Ri === z && (Ri = 0);
            }),
          Wr.push(z),
          D && Cn(a) && (Ri = z),
          z.enable(g);
      }),
      Lf(r, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      r
    );
  })();
  (Ne.version = "3.13.0"),
    (Ne.create = function (r) {
      return new Ne(r);
    }),
    (Ne.register = gu),
    (Ne.getAll = function () {
      return Wr.slice();
    }),
    (Ne.getById = function (r) {
      return Wr.filter(function (e) {
        return e.vars.id === r;
      })[0];
    }),
    fu() && st.registerPlugin(Ne);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var q,
    Gr,
    ae,
    be,
    Xt,
    me,
    Yo,
    ys,
    An,
    Pn,
    Mn,
    ws,
    dt,
    bs,
    jo,
    Ct,
    vu,
    _u,
    Xr,
    yu,
    Uo,
    wu,
    Et,
    Ko,
    bu,
    Su,
    Qi,
    Zo,
    Qo,
    Yr,
    Jo,
    Ss,
    ea,
    ta,
    Ts = 1,
    ft = Date.now,
    ia = ft(),
    si = 0,
    On = 0,
    Tu = function (e, t, i) {
      var n = Yt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
    },
    xu = function (e, t) {
      return t && (!Yt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    kf = function r() {
      return On && requestAnimationFrame(r);
    },
    Cu = function () {
      return (bs = 1);
    },
    Eu = function () {
      return (bs = 0);
    },
    Ti = function (e) {
      return e;
    },
    Ln = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Au = function () {
      return typeof window != "undefined";
    },
    Pu = function () {
      return q || (Au() && (q = window.gsap) && q.registerPlugin && q);
    },
    mr = function (e) {
      return !!~Yo.indexOf(e);
    },
    Mu = function (e) {
      return (
        (e === "Height" ? Jo : ae["inner" + e]) ||
        Xt["client" + e] ||
        me["client" + e]
      );
    },
    Ou = function (e) {
      return (
        Ki(e, "getBoundingClientRect") ||
        (mr(e)
          ? function () {
              return (zs.width = ae.innerWidth), (zs.height = Jo), zs;
            }
          : function () {
              return zi(e);
            })
      );
    },
    Rf = function (e, t, i) {
      var n = i.d,
        s = i.d2,
        o = i.a;
      return (o = Ki(e, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (t ? Mu(s) : e["client" + s]) || 0;
          };
    },
    zf = function (e, t) {
      return !t || ~Si.indexOf(e)
        ? Ou(e)
        : function () {
            return zs;
          };
    },
    xi = function (e, t) {
      var i = t.s,
        n = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + n) && (o = Ki(e, i))
          ? o() - Ou(e)()[s]
          : mr(e)
          ? (Xt[i] || me[i]) - Mu(n)
          : e[i] - e["offset" + n]
      );
    },
    xs = function (e, t) {
      for (var i = 0; i < Xr.length; i += 3)
        (!t || ~t.indexOf(Xr[i + 1])) && e(Xr[i], Xr[i + 1], Xr[i + 2]);
    },
    Yt = function (e) {
      return typeof e == "string";
    },
    pt = function (e) {
      return typeof e == "function";
    },
    Dn = function (e) {
      return typeof e == "number";
    },
    gr = function (e) {
      return typeof e == "object";
    },
    In = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    ra = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    jr = Math.abs,
    Lu = "left",
    Du = "top",
    na = "right",
    sa = "bottom",
    vr = "width",
    _r = "height",
    kn = "Right",
    Rn = "Left",
    zn = "Top",
    Nn = "Bottom",
    $e = "padding",
    oi = "margin",
    Ur = "Width",
    oa = "Height",
    Ge = "px",
    ai = function (e) {
      return ae.getComputedStyle(e);
    },
    Nf = function (e) {
      var t = ai(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Iu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    zi = function (e, t) {
      var i =
          t &&
          ai(e)[jo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          q
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        n = e.getBoundingClientRect();
      return i && i.progress(0).kill(), n;
    },
    Cs = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    ku = function (e) {
      var t = [],
        i = e.labels,
        n = e.duration(),
        s;
      for (s in i) t.push(i[s] / n);
      return t;
    },
    Ff = function (e) {
      return function (t) {
        return q.utils.snap(ku(e), t);
      };
    },
    aa = function (e) {
      var t = q.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (n, s) {
            return n - s;
          });
      return i
        ? function (n, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return t(n);
            if (s > 0) {
              for (n -= o, a = 0; a < i.length; a++) if (i[a] >= n) return i[a];
              return i[a - 1];
            } else for (a = i.length, n += o; a--; ) if (i[a] <= n) return i[a];
            return i[0];
          }
        : function (n, s, o) {
            o === void 0 && (o = 0.001);
            var a = t(n);
            return !s || Math.abs(a - n) < o || a - n < 0 == s < 0
              ? a
              : t(s < 0 ? n - e : n + e);
          };
    },
    Bf = function (e) {
      return function (t, i) {
        return aa(ku(e))(t, i.direction);
      };
    },
    Es = function (e, t, i, n) {
      return i.split(",").forEach(function (s) {
        return e(t, s, n);
      });
    },
    Qe = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: !n, capture: !!s });
    },
    Je = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    As = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Ru = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ps = { toggleActions: "play", anticipatePin: 0 },
    Ms = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Os = function (e, t) {
      if (Yt(e)) {
        var i = e.indexOf("="),
          n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            n +
            (e in Ms
              ? Ms[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ls = function (e, t, i, n, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        d = s.fontSize,
        p = s.indent,
        f = s.fontWeight,
        m = be.createElement("div"),
        g = mr(i) || Ki(i, "pinType") === "fixed",
        y = e.indexOf("scroller") !== -1,
        w = g ? me : i,
        b = e.indexOf("start") !== -1,
        C = b ? u : c,
        h =
          "border-color:" +
          C +
          ";font-size:" +
          d +
          ";color:" +
          C +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (h += "position:" + ((y || l) && g ? "fixed;" : "absolute;")),
        (y || l || !g) &&
          (h += (n === We ? na : sa) + ":" + (o + parseFloat(p)) + "px;"),
        a &&
          (h +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (m._isStart = b),
        m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (m.style.cssText = h),
        (m.innerText = t || t === 0 ? e + "-" + t : e),
        w.children[0] ? w.insertBefore(m, w.children[0]) : w.appendChild(m),
        (m._offset = m["offset" + n.op.d2]),
        Ds(m, 0, n, b),
        m
      );
    },
    Ds = function (e, t, i, n) {
      var s = { display: "block" },
        o = i[n ? "os2" : "p2"],
        a = i[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (s[i.a + "Percent"] = n ? -100 : 0),
        (s[i.a] = n ? "1px" : 0),
        (s["border" + o + Ur] = 1),
        (s["border" + a + Ur] = 0),
        (s[i.p] = t + "px"),
        q.set(e, s);
    },
    ne = [],
    la = {},
    Fn,
    zu = function () {
      return ft() - si > 34 && (Fn || (Fn = requestAnimationFrame(Ni)));
    },
    Kr = function () {
      (!Et || !Et.isPressed || Et.startX > me.clientWidth) &&
        (oe.cache++,
        Et ? Fn || (Fn = requestAnimationFrame(Ni)) : Ni(),
        si || wr("scrollStart"),
        (si = ft()));
    },
    ua = function () {
      (Su = ae.innerWidth), (bu = ae.innerHeight);
    },
    Bn = function (e) {
      oe.cache++,
        (e === !0 ||
          (!dt &&
            !wu &&
            !be.fullscreenElement &&
            !be.webkitFullscreenElement &&
            (!Ko ||
              Su !== ae.innerWidth ||
              Math.abs(ae.innerHeight - bu) > ae.innerHeight * 0.25))) &&
          ys.restart(!0);
    },
    yr = {},
    Vf = [],
    Nu = function r() {
      return Je(Q, "scrollEnd", r) || Sr(!0);
    },
    wr = function (e) {
      return (
        (yr[e] &&
          yr[e].map(function (t) {
            return t();
          })) ||
        Vf
      );
    },
    jt = [],
    Fu = function (e) {
      for (var t = 0; t < jt.length; t += 5)
        (!e || (jt[t + 4] && jt[t + 4].query === e)) &&
          ((jt[t].style.cssText = jt[t + 1]),
          jt[t].getBBox && jt[t].setAttribute("transform", jt[t + 2] || ""),
          (jt[t + 3].uncache = 1));
    },
    ca = function (e, t) {
      var i;
      for (Ct = 0; Ct < ne.length; Ct++)
        (i = ne[Ct]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Ss = !0), t && Fu(t), t || wr("revert");
    },
    Bu = function (e, t) {
      oe.cache++,
        (t || !At) &&
          oe.forEach(function (i) {
            return pt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Yt(e) && (ae.history.scrollRestoration = Qo = e);
    },
    At,
    br = 0,
    Vu,
    $f = function () {
      if (Vu !== br) {
        var e = (Vu = br);
        requestAnimationFrame(function () {
          return e === br && Sr(!0);
        });
      }
    },
    $u = function () {
      me.appendChild(Yr),
        (Jo = (!Et && Yr.offsetHeight) || ae.innerHeight),
        me.removeChild(Yr);
    },
    Hu = function (e) {
      return An(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    Sr = function (e, t) {
      if (
        ((Xt = be.documentElement),
        (me = be.body),
        (Yo = [ae, be, Xt, me]),
        si && !e && !Ss)
      ) {
        Qe(Q, "scrollEnd", Nu);
        return;
      }
      $u(),
        (At = Q.isRefreshing = !0),
        oe.forEach(function (n) {
          return pt(n) && ++n.cacheID && (n.rec = n());
        });
      var i = wr("refreshInit");
      yu && Q.sort(),
        t || ca(),
        oe.forEach(function (n) {
          pt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
        }),
        ne.slice(0).forEach(function (n) {
          return n.refresh();
        }),
        (Ss = !1),
        ne.forEach(function (n) {
          if (n._subPinOffset && n.pin) {
            var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = n.pin[s];
            n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
          }
        }),
        (ea = 1),
        Hu(!0),
        ne.forEach(function (n) {
          var s = xi(n.scroller, n._dir),
            o = n.vars.end === "max" || (n._endClamp && n.end > s),
            a = n._startClamp && n.start >= s;
          (o || a) &&
            n.setPositions(
              a ? s - 1 : n.start,
              o ? Math.max(a ? s : n.start + 1, s) : n.end,
              !0
            );
        }),
        Hu(!1),
        (ea = 0),
        i.forEach(function (n) {
          return n && n.render && n.render(-1);
        }),
        oe.forEach(function (n) {
          pt(n) &&
            (n.smooth &&
              requestAnimationFrame(function () {
                return (n.target.style.scrollBehavior = "smooth");
              }),
            n.rec && n(n.rec));
        }),
        Bu(Qo, 1),
        ys.pause(),
        br++,
        (At = 2),
        Ni(2),
        ne.forEach(function (n) {
          return pt(n.vars.onRefresh) && n.vars.onRefresh(n);
        }),
        (At = Q.isRefreshing = !1),
        wr("refresh");
    },
    da = 0,
    Is = 1,
    Vn,
    Ni = function (e) {
      if (e === 2 || (!At && !Ss)) {
        (Q.isUpdating = !0), Vn && Vn.update(0);
        var t = ne.length,
          i = ft(),
          n = i - ia >= 50,
          s = t && ne[0].scroll();
        if (
          ((Is = da > s ? -1 : 1),
          At || (da = s),
          n &&
            (si && !bs && i - si > 200 && ((si = 0), wr("scrollEnd")),
            (Mn = ia),
            (ia = i)),
          Is < 0)
        ) {
          for (Ct = t; Ct-- > 0; ) ne[Ct] && ne[Ct].update(0, n);
          Is = 1;
        } else for (Ct = 0; Ct < t; Ct++) ne[Ct] && ne[Ct].update(0, n);
        Q.isUpdating = !1;
      }
      Fn = 0;
    },
    fa = [
      Lu,
      Du,
      sa,
      na,
      oi + Nn,
      oi + kn,
      oi + zn,
      oi + Rn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ks = fa.concat([
      vr,
      _r,
      "boxSizing",
      "max" + Ur,
      "max" + oa,
      "position",
      oi,
      $e,
      $e + zn,
      $e + kn,
      $e + Nn,
      $e + Rn,
    ]),
    Hf = function (e, t, i) {
      Zr(i);
      var n = e._gsap;
      if (n.spacerIsNative) Zr(n.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    pa = function (e, t, i, n) {
      if (!e._gsap.swappedIn) {
        for (var s = fa.length, o = t.style, a = e.style, l; s--; )
          (l = fa[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[sa] = a[na] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[vr] = Cs(e, xt) + Ge),
          (o[_r] = Cs(e, We) + Ge),
          (o[$e] = a[oi] = a[Du] = a[Lu] = "0"),
          Zr(n),
          (a[vr] = a["max" + Ur] = i[vr]),
          (a[_r] = a["max" + oa] = i[_r]),
          (a[$e] = i[$e]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    qf = /([A-Z])/g,
    Zr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          n = 0,
          s,
          o;
        for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; n < i; n += 2)
          (o = e[n + 1]),
            (s = e[n]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(qf, "-$1").toLowerCase());
      }
    },
    Rs = function (e) {
      for (var t = ks.length, i = e.style, n = [], s = 0; s < t; s++)
        n.push(ks[s], i[ks[s]]);
      return (n.t = e), n;
    },
    Wf = function (e, t, i) {
      for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
      return (n.t = e.t), n;
    },
    zs = { left: 0, top: 0 },
    qu = function (e, t, i, n, s, o, a, l, u, c, d, p, f, m) {
      pt(e) && (e = e(l)),
        Yt(e) &&
          e.substr(0, 3) === "max" &&
          (e = p + (e.charAt(4) === "=" ? Os("0" + e.substr(3), i) : 0));
      var g = f ? f.time() : 0,
        y,
        w,
        b;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Dn(e)))
        f &&
          (e = q.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            p,
            e
          )),
          a && Ds(a, i, n, !0);
      else {
        pt(t) && (t = t(l));
        var C = (e || "0").split(" "),
          h,
          S,
          x,
          P;
        (b = kt(t, l) || me),
          (h = zi(b) || {}),
          (!h || (!h.left && !h.top)) &&
            ai(b).display === "none" &&
            ((P = b.style.display),
            (b.style.display = "block"),
            (h = zi(b)),
            P ? (b.style.display = P) : b.style.removeProperty("display")),
          (S = Os(C[0], h[n.d])),
          (x = Os(C[1] || "0", i)),
          (e = h[n.p] - u[n.p] - c + S + s - x),
          a && Ds(a, x, n, i - x < 20 || (a._isStart && x > 20)),
          (i -= i - x);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
        var M = e + i,
          I = o._isStart;
        (y = "scroll" + n.d2),
          Ds(
            o,
            M,
            n,
            (I && M > 20) ||
              (!I && (d ? Math.max(me[y], Xt[y]) : o.parentNode[y]) <= M + 1)
          ),
          d &&
            ((u = zi(a)),
            d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Ge));
      }
      return (
        f &&
          b &&
          ((y = zi(b)),
          f.seek(p),
          (w = zi(b)),
          (f._caScrollDist = y[n.p] - w[n.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(g),
        f ? e : Math.round(e)
      );
    },
    Gf = /(webkit|moz|length|cssText|inset)/i,
    Wu = function (e, t, i, n) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === me) {
          (e._stOrig = s.cssText), (a = ai(e));
          for (o in a)
            !+o &&
              !Gf.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = n);
        } else s.cssText = e._stOrig;
        (q.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Gu = function (e, t, i) {
      var n = t,
        s = n;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== n &&
            a !== s &&
            Math.abs(a - n) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), i && i()),
          (s = n),
          (n = Math.round(o)),
          n
        );
      };
    },
    Ns = function (e, t, i) {
      var n = {};
      (n[t.p] = "+=" + i), q.set(e, n);
    },
    Xu = function (e, t) {
      var i = Zi(e, t),
        n = "_scroll" + t.p2,
        s = function o(a, l, u, c, d) {
          var p = o.tween,
            f = l.onComplete,
            m = {};
          u = u || i();
          var g = Gu(i, u, function () {
            p.kill(), (o.tween = 0);
          });
          return (
            (d = (c && d) || 0),
            (c = c || a - u),
            p && p.kill(),
            (l[n] = a),
            (l.inherit = !1),
            (l.modifiers = m),
            (m[n] = function () {
              return g(u + c * p.ratio + d * p.ratio * p.ratio);
            }),
            (l.onUpdate = function () {
              oe.cache++, o.tween && Ni();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(p);
            }),
            (p = o.tween = q.to(e, l)),
            p
          );
        };
      return (
        (e[n] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Qe(e, "wheel", i.wheelHandler),
        Q.isTouch && Qe(e, "touchmove", i.wheelHandler),
        s
      );
    },
    Q = (function () {
      function r(t, i) {
        Gr ||
          r.register(q) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Zo(this),
          this.init(t, i);
      }
      var e = r.prototype;
      return (
        (e.init = function (i, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !On)
          ) {
            this.update = this.refresh = this.kill = Ti;
            return;
          }
          i = Iu(Yt(i) || Dn(i) || i.nodeType ? { trigger: i } : i, Ps);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            d = s.scrub,
            p = s.trigger,
            f = s.pin,
            m = s.pinSpacing,
            g = s.invalidateOnRefresh,
            y = s.anticipatePin,
            w = s.onScrubComplete,
            b = s.onSnapComplete,
            C = s.once,
            h = s.snap,
            S = s.pinReparent,
            x = s.pinSpacer,
            P = s.containerAnimation,
            M = s.fastScrollEnd,
            I = s.preventOverlaps,
            L =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? xt
                : We,
            R = !d && d !== 0,
            E = kt(i.scroller || ae),
            N = q.core.getCache(E),
            _ = mr(E),
            v =
              ("pinType" in i
                ? i.pinType
                : Ki(E, "pinType") || (_ && "fixed")) === "fixed",
            T = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            O = R && i.toggleActions.split(" "),
            D = "markers" in i ? i.markers : Ps.markers,
            k = _ ? 0 : parseFloat(ai(E)["border" + L.p2 + Ur]) || 0,
            A = this,
            V =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(A);
              },
            W = Rf(E, _, L),
            J = zf(E, _),
            K = 0,
            re = 0,
            de = 0,
            fe = Zi(E, L),
            ge,
            Me,
            ot,
            Ie,
            Xe,
            se,
            Se,
            Ye,
            je,
            z,
            et,
            Nt,
            tt,
            pe,
            Pt,
            mt,
            Qt,
            Oe,
            Jt,
            Te,
            gt,
            Ft,
            hi,
            Ar,
            ke,
            ln,
            F,
            H,
            X,
            le,
            ie,
            Y,
            He,
            it,
            Bt,
            Ue,
            mi,
            gi,
            vt;
          if (
            ((A._startClamp = A._endClamp = !1),
            (A._dir = L),
            (y *= 45),
            (A.scroller = E),
            (A.scroll = P ? P.time.bind(P) : fe),
            (Ie = fe()),
            (A.vars = i),
            (n = n || i.animation),
            "refreshPriority" in i &&
              ((yu = 1), i.refreshPriority === -9999 && (Vn = A)),
            (N.tweenScroll = N.tweenScroll || {
              top: Xu(E, We),
              left: Xu(E, xt),
            }),
            (A.tweenTo = ge = N.tweenScroll[L.p]),
            (A.scrubDuration = function ($) {
              (He = Dn($) && $),
                He
                  ? Y
                    ? Y.duration($)
                    : (Y = q.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: He,
                        paused: !0,
                        onComplete: function () {
                          return w && w(A);
                        },
                      }))
                  : (Y && Y.progress(1).kill(), (Y = 0));
            }),
            n &&
              ((n.vars.lazy = !1),
              (n._initted && !A.isReverted) ||
                (n.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  n.duration() &&
                  n.render(0, !0, !0)),
              (A.animation = n.pause()),
              (n.scrollTrigger = A),
              A.scrubDuration(d),
              (le = 0),
              l || (l = n.vars.id)),
            h &&
              ((!gr(h) || h.push) && (h = { snapTo: h }),
              "scrollBehavior" in me.style &&
                q.set(_ ? [me, Xt] : E, { scrollBehavior: "auto" }),
              oe.forEach(function ($) {
                return (
                  pt($) &&
                  $.target === (_ ? be.scrollingElement || Xt : E) &&
                  ($.smooth = !1)
                );
              }),
              (ot = pt(h.snapTo)
                ? h.snapTo
                : h.snapTo === "labels"
                ? Ff(n)
                : h.snapTo === "labelsDirectional"
                ? Bf(n)
                : h.directional !== !1
                ? function ($, ee) {
                    return aa(h.snapTo)($, ft() - re < 500 ? 0 : ee.direction);
                  }
                : q.utils.snap(h.snapTo)),
              (it = h.duration || { min: 0.1, max: 2 }),
              (it = gr(it) ? Pn(it.min, it.max) : Pn(it, it)),
              (Bt = q
                .delayedCall(h.delay || He / 2 || 0.1, function () {
                  var $ = fe(),
                    ee = ft() - re < 500,
                    U = ge.tween;
                  if (
                    (ee || Math.abs(A.getVelocity()) < 10) &&
                    !U &&
                    !bs &&
                    K !== $
                  ) {
                    var te = ($ - se) / pe,
                      rt = n && !R ? n.totalProgress() : te,
                      ce = ee ? 0 : ((rt - ie) / (ft() - Mn)) * 1e3 || 0,
                      Fe = q.utils.clamp(
                        -te,
                        1 - te,
                        (jr(ce / 2) * ce) / 0.185
                      ),
                      _t = te + (h.inertia === !1 ? 0 : Fe),
                      Re,
                      Ee,
                      ye = h,
                      vi = ye.onStart,
                      Le = ye.onInterrupt,
                      ei = ye.onComplete;
                    if (
                      ((Re = ot(_t, A)),
                      Dn(Re) || (Re = _t),
                      (Ee = Math.max(0, Math.round(se + Re * pe))),
                      $ <= Se && $ >= se && Ee !== $)
                    ) {
                      if (U && !U._initted && U.data <= jr(Ee - $)) return;
                      h.inertia === !1 && (Fe = Re - te),
                        ge(
                          Ee,
                          {
                            duration: it(
                              jr(
                                (Math.max(jr(_t - rt), jr(Re - rt)) * 0.185) /
                                  ce /
                                  0.05 || 0
                              )
                            ),
                            ease: h.ease || "power3",
                            data: jr(Ee - $),
                            onInterrupt: function () {
                              return Bt.restart(!0) && Le && Le(A);
                            },
                            onComplete: function () {
                              A.update(),
                                (K = fe()),
                                n &&
                                  !R &&
                                  (Y
                                    ? Y.resetTo(
                                        "totalProgress",
                                        Re,
                                        n._tTime / n._tDur
                                      )
                                    : n.progress(Re)),
                                (le = ie =
                                  n && !R ? n.totalProgress() : A.progress),
                                b && b(A),
                                ei && ei(A);
                            },
                          },
                          $,
                          Fe * pe,
                          Ee - $ - Fe * pe
                        ),
                        vi && vi(A, ge.tween);
                    }
                  } else A.isActive && K !== $ && Bt.restart(!0);
                })
                .pause())),
            l && (la[l] = A),
            (p = A.trigger = kt(p || (f !== !0 && f))),
            (vt = p && p._gsap && p._gsap.stRevert),
            vt && (vt = vt(A)),
            (f = f === !0 ? p : kt(f)),
            Yt(a) && (a = { targets: p, className: a }),
            f &&
              (m === !1 ||
                m === oi ||
                (m =
                  !m &&
                  f.parentNode &&
                  f.parentNode.style &&
                  ai(f.parentNode).display === "flex"
                    ? !1
                    : $e),
              (A.pin = f),
              (Me = q.core.getCache(f)),
              Me.spacer
                ? (Pt = Me.pinState)
                : (x &&
                    ((x = kt(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (Me.spacerIsNative = !!x),
                    x && (Me.spacerState = Rs(x))),
                  (Me.spacer = Oe = x || be.createElement("div")),
                  Oe.classList.add("pin-spacer"),
                  l && Oe.classList.add("pin-spacer-" + l),
                  (Me.pinState = Pt = Rs(f))),
              i.force3D !== !1 && q.set(f, { force3D: !0 }),
              (A.spacer = Oe = Me.spacer),
              (X = ai(f)),
              (Ar = X[m + L.os2]),
              (Te = q.getProperty(f)),
              (gt = q.quickSetter(f, L.a, Ge)),
              pa(f, Oe, X),
              (Qt = Rs(f))),
            D)
          ) {
            (Nt = gr(D) ? Iu(D, Ru) : Ru),
              (z = Ls("scroller-start", l, E, L, Nt, 0)),
              (et = Ls("scroller-end", l, E, L, Nt, 0, z)),
              (Jt = z["offset" + L.op.d2]);
            var Pr = kt(Ki(E, "content") || E);
            (Ye = this.markerStart = Ls("start", l, Pr, L, Nt, Jt, 0, P)),
              (je = this.markerEnd = Ls("end", l, Pr, L, Nt, Jt, 0, P)),
              P && (gi = q.quickSetter([Ye, je], L.a, Ge)),
              !v &&
                !(Si.length && Ki(E, "fixedMarkers") === !0) &&
                (Nf(_ ? me : E),
                q.set([z, et], { force3D: !0 }),
                (ln = q.quickSetter(z, L.a, Ge)),
                (H = q.quickSetter(et, L.a, Ge)));
          }
          if (P) {
            var Z = P.vars.onUpdate,
              G = P.vars.onUpdateParams;
            P.eventCallback("onUpdate", function () {
              A.update(0, 0, 1), Z && Z.apply(P, G || []);
            });
          }
          if (
            ((A.previous = function () {
              return ne[ne.indexOf(A) - 1];
            }),
            (A.next = function () {
              return ne[ne.indexOf(A) + 1];
            }),
            (A.revert = function ($, ee) {
              if (!ee) return A.kill(!0);
              var U = $ !== !1 || !A.enabled,
                te = dt;
              U !== A.isReverted &&
                (U &&
                  ((Ue = Math.max(fe(), A.scroll.rec || 0)),
                  (de = A.progress),
                  (mi = n && n.progress())),
                Ye &&
                  [Ye, je, z, et].forEach(function (rt) {
                    return (rt.style.display = U ? "none" : "block");
                  }),
                U && ((dt = A), A.update(U)),
                f &&
                  (!S || !A.isActive) &&
                  (U ? Hf(f, Oe, Pt) : pa(f, Oe, ai(f), ke)),
                U || A.update(U),
                (dt = te),
                (A.isReverted = U));
            }),
            (A.refresh = function ($, ee, U, te) {
              if (!((dt || !A.enabled) && !ee)) {
                if (f && $ && si) {
                  Qe(r, "scrollEnd", Nu);
                  return;
                }
                !At && V && V(A),
                  (dt = A),
                  ge.tween && !U && (ge.tween.kill(), (ge.tween = 0)),
                  Y && Y.pause(),
                  g &&
                    n &&
                    (n.revert({ kill: !1 }).invalidate(),
                    n.getChildren &&
                      n.getChildren(!0, !0, !1).forEach(function (rr) {
                        return rr.vars.immediateRender && rr.render(0, !0, !0);
                      })),
                  A.isReverted || A.revert(!0, !0),
                  (A._subPinOffset = !1);
                var rt = W(),
                  ce = J(),
                  Fe = P ? P.duration() : xi(E, L),
                  _t = pe <= 0.01 || !pe,
                  Re = 0,
                  Ee = te || 0,
                  ye = gr(U) ? U.end : i.end,
                  vi = i.endTrigger || p,
                  Le = gr(U)
                    ? U.start
                    : i.start ||
                      (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                  ei = (A.pinnedContainer =
                    i.pinnedContainer && kt(i.pinnedContainer, A)),
                  Mi = (p && Math.max(0, ne.indexOf(A))) || 0,
                  at = Mi,
                  lt,
                  yt,
                  Mr,
                  eo,
                  wt,
                  Ke,
                  Oi,
                  Ga,
                  fd,
                  Jn,
                  Li,
                  es,
                  to;
                for (
                  D &&
                  gr(U) &&
                  ((es = q.getProperty(z, L.p)), (to = q.getProperty(et, L.p)));
                  at-- > 0;

                )
                  (Ke = ne[at]),
                    Ke.end || Ke.refresh(0, 1) || (dt = A),
                    (Oi = Ke.pin),
                    Oi &&
                      (Oi === p || Oi === f || Oi === ei) &&
                      !Ke.isReverted &&
                      (Jn || (Jn = []), Jn.unshift(Ke), Ke.revert(!0, !0)),
                    Ke !== ne[at] && (Mi--, at--);
                for (
                  pt(Le) && (Le = Le(A)),
                    Le = Tu(Le, "start", A),
                    se =
                      qu(
                        Le,
                        p,
                        rt,
                        L,
                        fe(),
                        Ye,
                        z,
                        A,
                        ce,
                        k,
                        v,
                        Fe,
                        P,
                        A._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    pt(ye) && (ye = ye(A)),
                    Yt(ye) &&
                      !ye.indexOf("+=") &&
                      (~ye.indexOf(" ")
                        ? (ye = (Yt(Le) ? Le.split(" ")[0] : "") + ye)
                        : ((Re = Os(ye.substr(2), rt)),
                          (ye = Yt(Le)
                            ? Le
                            : (P
                                ? q.utils.mapRange(
                                    0,
                                    P.duration(),
                                    P.scrollTrigger.start,
                                    P.scrollTrigger.end,
                                    se
                                  )
                                : se) + Re),
                          (vi = p))),
                    ye = Tu(ye, "end", A),
                    Se =
                      Math.max(
                        se,
                        qu(
                          ye || (vi ? "100% 0" : Fe),
                          vi,
                          rt,
                          L,
                          fe() + Re,
                          je,
                          et,
                          A,
                          ce,
                          k,
                          v,
                          Fe,
                          P,
                          A._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Re = 0,
                    at = Mi;
                  at--;

                )
                  (Ke = ne[at]),
                    (Oi = Ke.pin),
                    Oi &&
                      Ke.start - Ke._pinPush <= se &&
                      !P &&
                      Ke.end > 0 &&
                      ((lt =
                        Ke.end -
                        (A._startClamp ? Math.max(0, Ke.start) : Ke.start)),
                      ((Oi === p && Ke.start - Ke._pinPush < se) ||
                        Oi === ei) &&
                        isNaN(Le) &&
                        (Re += lt * (1 - Ke.progress)),
                      Oi === f && (Ee += lt));
                if (
                  ((se += Re),
                  (Se += Re),
                  A._startClamp && (A._startClamp += Re),
                  A._endClamp &&
                    !At &&
                    ((A._endClamp = Se || -0.001),
                    (Se = Math.min(Se, xi(E, L)))),
                  (pe = Se - se || ((se -= 0.01) && 0.001)),
                  _t &&
                    (de = q.utils.clamp(0, 1, q.utils.normalize(se, Se, Ue))),
                  (A._pinPush = Ee),
                  Ye &&
                    Re &&
                    ((lt = {}),
                    (lt[L.a] = "+=" + Re),
                    ei && (lt[L.p] = "-=" + fe()),
                    q.set([Ye, je], lt)),
                  f && !(ea && A.end >= xi(E, L)))
                )
                  (lt = ai(f)),
                    (eo = L === We),
                    (Mr = fe()),
                    (Ft = parseFloat(Te(L.a)) + Ee),
                    !Fe &&
                      Se > 1 &&
                      ((Li = (_ ? be.scrollingElement || Xt : E).style),
                      (Li = {
                        style: Li,
                        value: Li["overflow" + L.a.toUpperCase()],
                      }),
                      _ &&
                        ai(me)["overflow" + L.a.toUpperCase()] !== "scroll" &&
                        (Li.style["overflow" + L.a.toUpperCase()] = "scroll")),
                    pa(f, Oe, lt),
                    (Qt = Rs(f)),
                    (yt = zi(f, !0)),
                    (Ga = v && Zi(E, eo ? xt : We)()),
                    m
                      ? ((ke = [m + L.os2, pe + Ee + Ge]),
                        (ke.t = Oe),
                        (at = m === $e ? Cs(f, L) + pe + Ee : 0),
                        at &&
                          (ke.push(L.d, at + Ge),
                          Oe.style.flexBasis !== "auto" &&
                            (Oe.style.flexBasis = at + Ge)),
                        Zr(ke),
                        ei &&
                          ne.forEach(function (rr) {
                            rr.pin === ei &&
                              rr.vars.pinSpacing !== !1 &&
                              (rr._subPinOffset = !0);
                          }),
                        v && fe(Ue))
                      : ((at = Cs(f, L)),
                        at &&
                          Oe.style.flexBasis !== "auto" &&
                          (Oe.style.flexBasis = at + Ge)),
                    v &&
                      ((wt = {
                        top: yt.top + (eo ? Mr - se : Ga) + Ge,
                        left: yt.left + (eo ? Ga : Mr - se) + Ge,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (wt[vr] = wt["max" + Ur] = Math.ceil(yt.width) + Ge),
                      (wt[_r] = wt["max" + oa] = Math.ceil(yt.height) + Ge),
                      (wt[oi] =
                        wt[oi + zn] =
                        wt[oi + kn] =
                        wt[oi + Nn] =
                        wt[oi + Rn] =
                          "0"),
                      (wt[$e] = lt[$e]),
                      (wt[$e + zn] = lt[$e + zn]),
                      (wt[$e + kn] = lt[$e + kn]),
                      (wt[$e + Nn] = lt[$e + Nn]),
                      (wt[$e + Rn] = lt[$e + Rn]),
                      (mt = Wf(Pt, wt, S)),
                      At && fe(0)),
                    n
                      ? ((fd = n._initted),
                        Uo(1),
                        n.render(n.duration(), !0, !0),
                        (hi = Te(L.a) - Ft + pe + Ee),
                        (F = Math.abs(pe - hi) > 1),
                        v && F && mt.splice(mt.length - 2, 2),
                        n.render(0, !0, !0),
                        fd || n.invalidate(!0),
                        n.parent || n.totalTime(n.totalTime()),
                        Uo(0))
                      : (hi = pe),
                    Li &&
                      (Li.value
                        ? (Li.style["overflow" + L.a.toUpperCase()] = Li.value)
                        : Li.style.removeProperty("overflow-" + L.a));
                else if (p && fe() && !P)
                  for (yt = p.parentNode; yt && yt !== me; )
                    yt._pinOffset &&
                      ((se -= yt._pinOffset), (Se -= yt._pinOffset)),
                      (yt = yt.parentNode);
                Jn &&
                  Jn.forEach(function (rr) {
                    return rr.revert(!1, !0);
                  }),
                  (A.start = se),
                  (A.end = Se),
                  (Ie = Xe = At ? Ue : fe()),
                  !P && !At && (Ie < Ue && fe(Ue), (A.scroll.rec = 0)),
                  A.revert(!1, !0),
                  (re = ft()),
                  Bt && ((K = -1), Bt.restart(!0)),
                  (dt = 0),
                  n &&
                    R &&
                    (n._initted || mi) &&
                    n.progress() !== mi &&
                    n.progress(mi || 0, !0).render(n.time(), !0, !0),
                  (_t || de !== A.progress || P || g || (n && !n._initted)) &&
                    (n &&
                      !R &&
                      (n._initted || de || n.vars.immediateRender !== !1) &&
                      n.totalProgress(
                        P && se < -0.001 && !de
                          ? q.utils.normalize(se, Se, 0)
                          : de,
                        !0
                      ),
                    (A.progress = _t || (Ie - se) / pe === de ? 0 : de)),
                  f && m && (Oe._pinOffset = Math.round(A.progress * hi)),
                  Y && Y.invalidate(),
                  isNaN(es) ||
                    ((es -= q.getProperty(z, L.p)),
                    (to -= q.getProperty(et, L.p)),
                    Ns(z, L, es),
                    Ns(Ye, L, es - (te || 0)),
                    Ns(et, L, to),
                    Ns(je, L, to - (te || 0))),
                  _t && !At && A.update(),
                  c && !At && !tt && ((tt = !0), c(A), (tt = !1));
              }
            }),
            (A.getVelocity = function () {
              return ((fe() - Xe) / (ft() - Mn)) * 1e3 || 0;
            }),
            (A.endAnimation = function () {
              In(A.callbackAnimation),
                n &&
                  (Y
                    ? Y.progress(1)
                    : n.paused()
                    ? R || In(n, A.direction < 0, 1)
                    : In(n, n.reversed()));
            }),
            (A.labelToScroll = function ($) {
              return (
                (n &&
                  n.labels &&
                  (se || A.refresh() || se) +
                    (n.labels[$] / n.duration()) * pe) ||
                0
              );
            }),
            (A.getTrailing = function ($) {
              var ee = ne.indexOf(A),
                U =
                  A.direction > 0
                    ? ne.slice(0, ee).reverse()
                    : ne.slice(ee + 1);
              return (
                Yt($)
                  ? U.filter(function (te) {
                      return te.vars.preventOverlaps === $;
                    })
                  : U
              ).filter(function (te) {
                return A.direction > 0 ? te.end <= se : te.start >= Se;
              });
            }),
            (A.update = function ($, ee, U) {
              if (!(P && !U && !$)) {
                var te = At === !0 ? Ue : A.scroll(),
                  rt = $ ? 0 : (te - se) / pe,
                  ce = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0,
                  Fe = A.progress,
                  _t,
                  Re,
                  Ee,
                  ye,
                  vi,
                  Le,
                  ei,
                  Mi;
                if (
                  (ee &&
                    ((Xe = Ie),
                    (Ie = P ? fe() : te),
                    h && ((ie = le), (le = n && !R ? n.totalProgress() : ce))),
                  y &&
                    f &&
                    !dt &&
                    !Ts &&
                    si &&
                    (!ce && se < te + ((te - Xe) / (ft() - Mn)) * y
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        Se > te + ((te - Xe) / (ft() - Mn)) * y &&
                        (ce = 0.9999)),
                  ce !== Fe && A.enabled)
                ) {
                  if (
                    ((_t = A.isActive = !!ce && ce < 1),
                    (Re = !!Fe && Fe < 1),
                    (Le = _t !== Re),
                    (vi = Le || !!ce != !!Fe),
                    (A.direction = ce > Fe ? 1 : -1),
                    (A.progress = ce),
                    vi &&
                      !dt &&
                      ((Ee = ce && !Fe ? 0 : ce === 1 ? 1 : Fe === 1 ? 2 : 3),
                      R &&
                        ((ye =
                          (!Le && O[Ee + 1] !== "none" && O[Ee + 1]) || O[Ee]),
                        (Mi =
                          n &&
                          (ye === "complete" || ye === "reset" || ye in n)))),
                    I &&
                      (Le || Mi) &&
                      (Mi || d || !n) &&
                      (pt(I)
                        ? I(A)
                        : A.getTrailing(I).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    R ||
                      (Y && !dt && !Ts
                        ? (Y._dp._time - Y._start !== Y._time &&
                            Y.render(Y._dp._time - Y._start),
                          Y.resetTo
                            ? Y.resetTo("totalProgress", ce, n._tTime / n._tDur)
                            : ((Y.vars.totalProgress = ce),
                              Y.invalidate().restart()))
                        : n && n.totalProgress(ce, !!(dt && (re || $)))),
                    f)
                  ) {
                    if (($ && m && (Oe.style[m + L.os2] = Ar), !v))
                      gt(Ln(Ft + hi * ce));
                    else if (vi) {
                      if (
                        ((ei =
                          !$ && ce > Fe && Se + 1 > te && te + 1 >= xi(E, L)),
                        S)
                      )
                        if (!$ && (_t || ei)) {
                          var at = zi(f, !0),
                            lt = te - se;
                          Wu(
                            f,
                            me,
                            at.top + (L === We ? lt : 0) + Ge,
                            at.left + (L === We ? 0 : lt) + Ge
                          );
                        } else Wu(f, Oe);
                      Zr(_t || ei ? mt : Qt),
                        (F && ce < 1 && _t) ||
                          gt(Ft + (ce === 1 && !ei ? hi : 0));
                    }
                  }
                  h && !ge.tween && !dt && !Ts && Bt.restart(!0),
                    a &&
                      (Le || (C && ce && (ce < 1 || !ta))) &&
                      An(a.targets).forEach(function (Mr) {
                        return Mr.classList[_t || C ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !$ && o(A),
                    vi && !dt
                      ? (R &&
                          (Mi &&
                            (ye === "complete"
                              ? n.pause().totalProgress(1)
                              : ye === "reset"
                              ? n.restart(!0).pause()
                              : ye === "restart"
                              ? n.restart(!0)
                              : n[ye]()),
                          o && o(A)),
                        (Le || !ta) &&
                          (u && Le && ra(A, u),
                          T[Ee] && ra(A, T[Ee]),
                          C && (ce === 1 ? A.kill(!1, 1) : (T[Ee] = 0)),
                          Le ||
                            ((Ee = ce === 1 ? 1 : 3), T[Ee] && ra(A, T[Ee]))),
                        M &&
                          !_t &&
                          Math.abs(A.getVelocity()) > (Dn(M) ? M : 2500) &&
                          (In(A.callbackAnimation),
                          Y
                            ? Y.progress(1)
                            : In(n, ye === "reverse" ? 1 : !ce, 1)))
                      : R && o && !dt && o(A);
                }
                if (H) {
                  var yt = P
                    ? (te / P.duration()) * (P._caScrollDist || 0)
                    : te;
                  ln(yt + (z._isFlipped ? 1 : 0)), H(yt);
                }
                gi && gi((-te / P.duration()) * (P._caScrollDist || 0));
              }
            }),
            (A.enable = function ($, ee) {
              A.enabled ||
                ((A.enabled = !0),
                Qe(E, "resize", Bn),
                _ || Qe(E, "scroll", Kr),
                V && Qe(r, "refreshInit", V),
                $ !== !1 && ((A.progress = de = 0), (Ie = Xe = K = fe())),
                ee !== !1 && A.refresh());
            }),
            (A.getTween = function ($) {
              return $ && ge ? ge.tween : Y;
            }),
            (A.setPositions = function ($, ee, U, te) {
              if (P) {
                var rt = P.scrollTrigger,
                  ce = P.duration(),
                  Fe = rt.end - rt.start;
                ($ = rt.start + (Fe * $) / ce),
                  (ee = rt.start + (Fe * ee) / ce);
              }
              A.refresh(
                !1,
                !1,
                {
                  start: xu($, U && !!A._startClamp),
                  end: xu(ee, U && !!A._endClamp),
                },
                te
              ),
                A.update();
            }),
            (A.adjustPinSpacing = function ($) {
              if (ke && $) {
                var ee = ke.indexOf(L.d) + 1;
                (ke[ee] = parseFloat(ke[ee]) + $ + Ge),
                  (ke[1] = parseFloat(ke[1]) + $ + Ge),
                  Zr(ke);
              }
            }),
            (A.disable = function ($, ee) {
              if (
                A.enabled &&
                ($ !== !1 && A.revert(!0, !0),
                (A.enabled = A.isActive = !1),
                ee || (Y && Y.pause()),
                (Ue = 0),
                Me && (Me.uncache = 1),
                V && Je(r, "refreshInit", V),
                Bt &&
                  (Bt.pause(), ge.tween && ge.tween.kill() && (ge.tween = 0)),
                !_)
              ) {
                for (var U = ne.length; U--; )
                  if (ne[U].scroller === E && ne[U] !== A) return;
                Je(E, "resize", Bn), _ || Je(E, "scroll", Kr);
              }
            }),
            (A.kill = function ($, ee) {
              A.disable($, ee), Y && !ee && Y.kill(), l && delete la[l];
              var U = ne.indexOf(A);
              U >= 0 && ne.splice(U, 1),
                U === Ct && Is > 0 && Ct--,
                (U = 0),
                ne.forEach(function (te) {
                  return te.scroller === A.scroller && (U = 1);
                }),
                U || At || (A.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  $ && n.revert({ kill: !1 }),
                  ee || n.kill()),
                Ye &&
                  [Ye, je, z, et].forEach(function (te) {
                    return te.parentNode && te.parentNode.removeChild(te);
                  }),
                Vn === A && (Vn = 0),
                f &&
                  (Me && (Me.uncache = 1),
                  (U = 0),
                  ne.forEach(function (te) {
                    return te.pin === f && U++;
                  }),
                  U || (Me.spacer = 0)),
                i.onKill && i.onKill(A);
            }),
            ne.push(A),
            A.enable(!1, !1),
            vt && vt(A),
            n && n.add && !pe)
          ) {
            var he = A.update;
            (A.update = function () {
              (A.update = he), oe.cache++, se || Se || A.refresh();
            }),
              q.delayedCall(0.01, A.update),
              (pe = 0.01),
              (se = Se = 0);
          } else A.refresh();
          f && $f();
        }),
        (r.register = function (i) {
          return (
            Gr ||
              ((q = i || Pu()),
              Au() && window.document && r.enable(),
              (Gr = On)),
            Gr
          );
        }),
        (r.defaults = function (i) {
          if (i) for (var n in i) Ps[n] = i[n];
          return Ps;
        }),
        (r.disable = function (i, n) {
          (On = 0),
            ne.forEach(function (o) {
              return o[n ? "kill" : "disable"](i);
            }),
            Je(ae, "wheel", Kr),
            Je(be, "scroll", Kr),
            clearInterval(ws),
            Je(be, "touchcancel", Ti),
            Je(me, "touchstart", Ti),
            Es(Je, be, "pointerdown,touchstart,mousedown", Cu),
            Es(Je, be, "pointerup,touchend,mouseup", Eu),
            ys.kill(),
            xs(Je);
          for (var s = 0; s < oe.length; s += 3)
            As(Je, oe[s], oe[s + 1]), As(Je, oe[s], oe[s + 2]);
        }),
        (r.enable = function () {
          if (
            ((ae = window),
            (be = document),
            (Xt = be.documentElement),
            (me = be.body),
            q &&
              ((An = q.utils.toArray),
              (Pn = q.utils.clamp),
              (Zo = q.core.context || Ti),
              (Uo = q.core.suppressOverwrites || Ti),
              (Qo = ae.history.scrollRestoration || "auto"),
              (da = ae.pageYOffset || 0),
              q.core.globals("ScrollTrigger", r),
              me))
          ) {
            (On = 1),
              (Yr = document.createElement("div")),
              (Yr.style.height = "100vh"),
              (Yr.style.position = "absolute"),
              $u(),
              kf(),
              Ne.register(q),
              (r.isTouch = Ne.isTouch),
              (Qi =
                Ne.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ko = Ne.isTouch === 1),
              Qe(ae, "wheel", Kr),
              (Yo = [ae, be, Xt, me]),
              q.matchMedia
                ? ((r.matchMedia = function (u) {
                    var c = q.matchMedia(),
                      d;
                    for (d in u) c.add(d, u[d]);
                    return c;
                  }),
                  q.addEventListener("matchMediaInit", function () {
                    return ca();
                  }),
                  q.addEventListener("matchMediaRevert", function () {
                    return Fu();
                  }),
                  q.addEventListener("matchMedia", function () {
                    Sr(0, 1), wr("matchMedia");
                  }),
                  q.matchMedia().add("(orientation: portrait)", function () {
                    return ua(), ua;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ua(),
              Qe(be, "scroll", Kr);
            var i = me.hasAttribute("style"),
              n = me.style,
              s = n.borderTopStyle,
              o = q.core.Animation.prototype,
              a,
              l;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = "solid",
                a = zi(me),
                We.m = Math.round(a.top + We.sc()) || 0,
                xt.m = Math.round(a.left + xt.sc()) || 0,
                s
                  ? (n.borderTopStyle = s)
                  : n.removeProperty("border-top-style"),
                i ||
                  (me.setAttribute("style", ""), me.removeAttribute("style")),
                ws = setInterval(zu, 250),
                q.delayedCall(0.5, function () {
                  return (Ts = 0);
                }),
                Qe(be, "touchcancel", Ti),
                Qe(me, "touchstart", Ti),
                Es(Qe, be, "pointerdown,touchstart,mousedown", Cu),
                Es(Qe, be, "pointerup,touchend,mouseup", Eu),
                jo = q.utils.checkPrefix("transform"),
                ks.push(jo),
                Gr = ft(),
                ys = q.delayedCall(0.2, Sr).pause(),
                Xr = [
                  be,
                  "visibilitychange",
                  function () {
                    var u = ae.innerWidth,
                      c = ae.innerHeight;
                    be.hidden
                      ? ((vu = u), (_u = c))
                      : (vu !== u || _u !== c) && Bn();
                  },
                  be,
                  "DOMContentLoaded",
                  Sr,
                  ae,
                  "load",
                  Sr,
                  ae,
                  "resize",
                  Bn,
                ],
                xs(Qe),
                ne.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < oe.length;
              l += 3
            )
              As(Je, oe[l], oe[l + 1]), As(Je, oe[l], oe[l + 2]);
          }
        }),
        (r.config = function (i) {
          "limitCallbacks" in i && (ta = !!i.limitCallbacks);
          var n = i.syncInterval;
          (n && clearInterval(ws)) || ((ws = n) && setInterval(zu, n)),
            "ignoreMobileResize" in i &&
              (Ko = r.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (xs(Je) || xs(Qe, i.autoRefreshEvents || "none"),
              (wu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (r.scrollerProxy = function (i, n) {
          var s = kt(i),
            o = oe.indexOf(s),
            a = mr(s);
          ~o && oe.splice(o, a ? 6 : 2),
            n && (a ? Si.unshift(ae, n, me, n, Xt, n) : Si.unshift(s, n));
        }),
        (r.clearMatchMedia = function (i) {
          ne.forEach(function (n) {
            return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
          });
        }),
        (r.isInViewport = function (i, n, s) {
          var o = (Yt(i) ? kt(i) : i).getBoundingClientRect(),
            a = o[s ? vr : _r] * n || 0;
          return s
            ? o.right - a > 0 && o.left + a < ae.innerWidth
            : o.bottom - a > 0 && o.top + a < ae.innerHeight;
        }),
        (r.positionInViewport = function (i, n, s) {
          Yt(i) && (i = kt(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? vr : _r],
            l =
              n == null
                ? a / 2
                : n in Ms
                ? Ms[n] * a
                : ~n.indexOf("%")
                ? (parseFloat(n) * a) / 100
                : parseFloat(n) || 0;
          return s
            ? (o.left + l) / ae.innerWidth
            : (o.top + l) / ae.innerHeight;
        }),
        (r.killAll = function (i) {
          if (
            (ne.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var n = yr.killAll || [];
            (yr = {}),
              n.forEach(function (s) {
                return s();
              });
          }
        }),
        r
      );
    })();
  (Q.version = "3.13.0"),
    (Q.saveStyles = function (r) {
      return r
        ? An(r).forEach(function (e) {
            if (e && e.style) {
              var t = jt.indexOf(e);
              t >= 0 && jt.splice(t, 5),
                jt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  q.core.getCache(e),
                  Zo()
                );
            }
          })
        : jt;
    }),
    (Q.revert = function (r, e) {
      return ca(!r, e);
    }),
    (Q.create = function (r, e) {
      return new Q(r, e);
    }),
    (Q.refresh = function (r) {
      return r ? Bn(!0) : (Gr || Q.register()) && Sr(!0);
    }),
    (Q.update = function (r) {
      return ++oe.cache && Ni(r === !0 ? 2 : 0);
    }),
    (Q.clearScrollMemory = Bu),
    (Q.maxScroll = function (r, e) {
      return xi(r, e ? xt : We);
    }),
    (Q.getScrollFunc = function (r, e) {
      return Zi(kt(r), e ? xt : We);
    }),
    (Q.getById = function (r) {
      return la[r];
    }),
    (Q.getAll = function () {
      return ne.filter(function (r) {
        return r.vars.id !== "ScrollSmoother";
      });
    }),
    (Q.isScrolling = function () {
      return !!si;
    }),
    (Q.snapDirectional = aa),
    (Q.addEventListener = function (r, e) {
      var t = yr[r] || (yr[r] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Q.removeEventListener = function (r, e) {
      var t = yr[r],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (Q.batch = function (r, e) {
      var t = [],
        i = {},
        n = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, c) {
          var d = [],
            p = [],
            f = q
              .delayedCall(n, function () {
                c(d, p), (d = []), (p = []);
              })
              .pause();
          return function (m) {
            d.length || f.restart(!0),
              d.push(m.trigger),
              p.push(m),
              s <= d.length && f.progress(1);
          };
        },
        a;
      for (a in e)
        i[a] =
          a.substr(0, 2) === "on" && pt(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        pt(s) &&
          ((s = s()),
          Qe(Q, "refresh", function () {
            return (s = e.batchMax());
          })),
        An(r).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push(Q.create(u));
        }),
        t
      );
    });
  var Yu = function (e, t, i, n) {
      return (
        t > n ? e(n) : t < 0 && e(0),
        i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    ha = function r(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Ne.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Xt && r(me, t);
    },
    Fs = { auto: 1, scroll: 1 },
    Xf = function (e) {
      var t = e.event,
        i = e.target,
        n = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || q.core.getCache(s),
        a = ft(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== me &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Fs[(l = ai(s)).overflowY] || Fs[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !mr(s) &&
          (Fs[(l = ai(s)).overflowY] || Fs[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    ju = function (e, t, i, n) {
      return Ne.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (n = n && Xf),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return i && Qe(be, Ne.eventTypes[0], Ku, !1, !0);
        },
        onDisable: function () {
          return Je(be, Ne.eventTypes[0], Ku, !0);
        },
      });
    },
    Yf = /(input|label|select|textarea)/i,
    Uu,
    Ku = function (e) {
      var t = Yf.test(e.target.tagName);
      (t || Uu) && ((e._gsapAllow = !0), (Uu = t));
    },
    jf = function (e) {
      gr(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        n = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a,
        l,
        u = kt(e.target) || Xt,
        c = q.core.globals().ScrollSmoother,
        d = c && c.get(),
        p =
          Qi &&
          ((e.content && kt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = Zi(u, We),
        m = Zi(u, xt),
        g = 1,
        y =
          (Ne.isTouch && ae.visualViewport
            ? ae.visualViewport.scale * ae.visualViewport.width
            : ae.outerWidth) / ae.innerWidth,
        w = 0,
        b = pt(n)
          ? function () {
              return n(a);
            }
          : function () {
              return n || 2.8;
            },
        C,
        h,
        S = ju(u, e.type, !0, s),
        x = function () {
          return (h = !1);
        },
        P = Ti,
        M = Ti,
        I = function () {
          (l = xi(u, We)),
            (M = Pn(Qi ? 1 : 0, l)),
            i && (P = Pn(0, xi(u, xt))),
            (C = br);
        },
        L = function () {
          (p._gsap.y = Ln(parseFloat(p._gsap.y) + f.offset) + "px"),
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(p._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        R = function () {
          if (h) {
            requestAnimationFrame(x);
            var D = Ln(a.deltaY / 2),
              k = M(f.v - D);
            if (p && k !== f.v + f.offset) {
              f.offset = k - f.v;
              var A = Ln((parseFloat(p && p._gsap.y) || 0) - f.offset);
              (p.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                A +
                ", 0, 1)"),
                (p._gsap.y = A + "px"),
                (f.cacheID = oe.cache),
                Ni();
            }
            return !0;
          }
          f.offset && L(), (h = !0);
        },
        E,
        N,
        _,
        v,
        T = function () {
          I(),
            E.isActive() &&
              E.vars.scrollY > l &&
              (f() > l ? E.progress(1) && f(l) : E.resetTo("scrollY", l));
        };
      return (
        p && q.set(p, { y: "+=0" }),
        (e.ignoreCheck = function (O) {
          return (
            (Qi && O.type === "touchmove" && R()) ||
            (g > 1.05 && O.type !== "touchstart") ||
            a.isGesturing ||
            (O.touches && O.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          h = !1;
          var O = g;
          (g = Ln(((ae.visualViewport && ae.visualViewport.scale) || 1) / y)),
            E.pause(),
            O !== g && ha(u, g > 1.01 ? !0 : i ? !1 : "x"),
            (N = m()),
            (_ = f()),
            I(),
            (C = br);
        }),
        (e.onRelease = e.onGestureStart =
          function (O, D) {
            if ((f.offset && L(), !D)) v.restart(!0);
            else {
              oe.cache++;
              var k = b(),
                A,
                V;
              i &&
                ((A = m()),
                (V = A + (k * 0.05 * -O.velocityX) / 0.227),
                (k *= Yu(m, A, V, xi(u, xt))),
                (E.vars.scrollX = P(V))),
                (A = f()),
                (V = A + (k * 0.05 * -O.velocityY) / 0.227),
                (k *= Yu(f, A, V, xi(u, We))),
                (E.vars.scrollY = M(V)),
                E.invalidate().duration(k).play(0.01),
                ((Qi && E.vars.scrollY >= l) || A >= l - 1) &&
                  q.to({}, { onUpdate: T, duration: k });
            }
            o && o(O);
          }),
        (e.onWheel = function () {
          E._ts && E.pause(), ft() - w > 1e3 && ((C = 0), (w = ft()));
        }),
        (e.onChange = function (O, D, k, A, V) {
          if (
            (br !== C && I(),
            D && i && m(P(A[2] === D ? N + (O.startX - O.x) : m() + D - A[1])),
            k)
          ) {
            f.offset && L();
            var W = V[2] === k,
              J = W ? _ + O.startY - O.y : f() + k - V[1],
              K = M(J);
            W && J !== K && (_ += K - J), f(K);
          }
          (k || D) && Ni();
        }),
        (e.onEnable = function () {
          ha(u, i ? !1 : "x"),
            Q.addEventListener("refresh", T),
            Qe(ae, "resize", T),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = m.smooth = !1)),
            S.enable();
        }),
        (e.onDisable = function () {
          ha(u, !0),
            Je(ae, "resize", T),
            Q.removeEventListener("refresh", T),
            S.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Ne(e)),
        (a.iOS = Qi),
        Qi && !f() && f(1),
        Qi && q.ticker.add(Ti),
        (v = a._dc),
        (E = q.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Gu(f, f(), function () {
              return E.pause();
            }),
          },
          onUpdate: Ni,
          onComplete: v.vars.onComplete,
        })),
        a
      );
    };
  (Q.sort = function (r) {
    if (pt(r)) return ne.sort(r);
    var e = ae.pageYOffset || 0;
    return (
      Q.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ae.innerHeight);
      }),
      ne.sort(
        r ||
          function (t, i) {
            return (
              (t.vars.refreshPriority || 0) * -1e6 +
              (t.vars.containerAnimation ? 1e6 : t._sortY) -
              ((i.vars.containerAnimation ? 1e6 : i._sortY) +
                (i.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Q.observe = function (r) {
      return new Ne(r);
    }),
    (Q.normalizeScroll = function (r) {
      if (typeof r == "undefined") return Et;
      if (r === !0 && Et) return Et.enable();
      if (r === !1) {
        Et && Et.kill(), (Et = r);
        return;
      }
      var e = r instanceof Ne ? r : jf(r);
      return (
        Et && Et.target === e.target && Et.kill(), mr(e.target) && (Et = e), e
      );
    }),
    (Q.core = {
      _getVelocityProp: Xo,
      _inputObserver: ju,
      _scrollers: oe,
      _proxies: Si,
      bridge: {
        ss: function () {
          si || wr("scrollStart"), (si = ft());
        },
        ref: function () {
          return dt;
        },
      },
    }),
    Pu() && q.registerPlugin(Q);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let $n,
    Qr,
    ma,
    Uf = () => ma || Hn.register(window.gsap),
    Zu = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Bs = (r) =>
      typeof r == "string"
        ? Bs(document.querySelectorAll(r))
        : "length" in r
        ? Array.from(r)
        : [r],
    Qu = (r) => Bs(r).filter((e) => e instanceof HTMLElement),
    ga = [],
    va = function () {},
    Kf = /\s+/g,
    Ju = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    ec = { left: 0, top: 0, width: 0, height: 0 },
    tc = (r, e) => {
      if (e) {
        let t = new Set(r.join("").match(e) || ga),
          i = r.length,
          n,
          s,
          o,
          a;
        if (t.size)
          for (; --i > -1; ) {
            s = r[i];
            for (o of t)
              if (o.startsWith(s) && o.length > s.length) {
                for (
                  n = 0, a = s;
                  o.startsWith((a += r[i + ++n])) && a.length < o.length;

                );
                if (n && a.length === o.length) {
                  (r[i] = o), r.splice(i + 1, n);
                  break;
                }
              }
          }
      }
      return r;
    },
    ic = (r) =>
      window.getComputedStyle(r).display === "inline" &&
      (r.style.display = "inline-block"),
    Jr = (r, e, t) =>
      e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
    _a = (r, e, t) => {
      let i = e[r + "sClass"] || "",
        { tag: n = "div", aria: s = "auto", propIndex: o = !1 } = e,
        a = r === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        u = (c) => {
          let d = document.createElement(n),
            p = t.length + 1;
          return (
            i && (d.className = i + (l ? " " + i + p : "")),
            o && d.style.setProperty("--" + r, p + ""),
            s !== "none" && d.setAttribute("aria-hidden", "true"),
            n !== "span" &&
              ((d.style.position = "relative"), (d.style.display = a)),
            (d.textContent = c),
            t.push(d),
            d
          );
        };
      return l && (i = i.replace("++", "")), (u.collection = t), u;
    },
    Zf = (r, e, t, i) => {
      let n = _a("line", t, i),
        s = window.getComputedStyle(r).textAlign || "left";
      return (o, a) => {
        let l = n("");
        for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
          l.appendChild(e[o]);
        l.normalize();
      };
    },
    rc = (r, e, t, i, n, s, o, a, l, u) => {
      var c;
      let d = Array.from(r.childNodes),
        p = 0,
        { wordDelimiter: f, reduceWhiteSpace: m = !0, prepareText: g } = e,
        y = r.getBoundingClientRect(),
        w = y,
        b =
          !m && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
        C = 0,
        h = t.collection,
        S,
        x,
        P,
        M,
        I,
        L,
        R,
        E,
        N,
        _,
        v,
        T,
        O,
        D,
        k,
        A,
        V,
        W;
      for (
        typeof f == "object"
          ? ((P = f.delimiter || f), (x = f.replaceWith || ""))
          : (x = f === "" ? "" : f || " "),
          S = x !== " ";
        p < d.length;
        p++
      )
        if (((M = d[p]), M.nodeType === 3)) {
          for (
            k = M.textContent || "",
              m
                ? (k = k.replace(Kf, " "))
                : b &&
                  (k = k.replace(
                    /\n/g,
                    x +
                      `
`
                  )),
              g && (k = g(k, r)),
              M.textContent = k,
              I = x || P ? k.split(P || x) : k.match(a) || ga,
              V = I[I.length - 1],
              E = S ? V.slice(-1) === " " : !V,
              V || I.pop(),
              w = y,
              R = S ? I[0].charAt(0) === " " : !I[0],
              R && Jr(" ", r, M),
              I[0] || I.shift(),
              tc(I, l),
              (s && u) || (M.textContent = ""),
              N = 1;
            N <= I.length;
            N++
          )
            if (
              ((A = I[N - 1]),
              !m &&
                b &&
                A.charAt(0) ===
                  `
` &&
                ((c = M.previousSibling) == null || c.remove(),
                Jr(document.createElement("br"), r, M),
                (A = A.slice(1))),
              !m && A === "")
            )
              Jr(x, r, M);
            else if (A === " ") r.insertBefore(document.createTextNode(" "), M);
            else {
              if (
                (S && A.charAt(0) === " " && Jr(" ", r, M),
                C && N === 1 && !R && h.indexOf(C.parentNode) > -1
                  ? ((L = h[h.length - 1]),
                    L.appendChild(document.createTextNode(i ? "" : A)))
                  : ((L = t(i ? "" : A)),
                    Jr(L, r, M),
                    C && N === 1 && !R && L.insertBefore(C, L.firstChild)),
                i)
              )
                for (
                  v = Zu
                    ? tc(
                        [...Zu.segment(A)].map((J) => J.segment),
                        l
                      )
                    : A.match(a) || ga,
                    W = 0;
                  W < v.length;
                  W++
                )
                  L.appendChild(
                    v[W] === " " ? document.createTextNode(" ") : i(v[W])
                  );
              if (s && u) {
                if (
                  ((k = M.textContent = k.substring(A.length + 1, k.length)),
                  (_ = L.getBoundingClientRect()),
                  _.top > w.top && _.left <= w.left)
                ) {
                  for (T = r.cloneNode(), O = r.childNodes[0]; O && O !== L; )
                    (D = O), (O = O.nextSibling), T.appendChild(D);
                  r.parentNode.insertBefore(T, r), n && ic(T);
                }
                w = _;
              }
              (N < I.length || E) &&
                Jr(
                  N >= I.length ? " " : S && A.slice(-1) === " " ? " " + x : x,
                  r,
                  M
                );
            }
          r.removeChild(M), (C = 0);
        } else
          M.nodeType === 1 &&
            (o && o.indexOf(M) > -1
              ? (h.indexOf(M.previousSibling) > -1 &&
                  h[h.length - 1].appendChild(M),
                (C = M))
              : (rc(M, e, t, i, n, s, o, a, l, !0), (C = 0)),
            n && ic(M));
    };
  const nc = class hd {
    constructor(e, t) {
      (this.isSplit = !1),
        Uf(),
        (this.elements = Qu(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        n,
        s = () => {
          let o = i.length,
            a;
          for (; o--; ) {
            a = i[o];
            let l = a.element.offsetWidth;
            if (l !== a.width) {
              (a.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(n), (n = setTimeout(s, 200));
          }),
      }),
        va(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: t = "chars,words,lines",
          aria: i = "auto",
          deepSlice: n = !0,
          smartWrap: s,
          onSplit: o,
          autoSplit: a = !1,
          specialChars: l,
          mask: u,
        } = this.vars,
        c = t.indexOf("lines") > -1,
        d = t.indexOf("chars") > -1,
        p = t.indexOf("words") > -1,
        f = d && !p && !c,
        m =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        g = m ? new RegExp(m.source + "|" + Ju.source, "gu") : Ju,
        y = !!e.ignore && Qu(e.ignore),
        { orig: w, animTime: b, obs: C } = this._data,
        h;
      return (
        (d || p || c) &&
          (this.elements.forEach((S, x) => {
            (w[x] = {
              element: S,
              html: S.innerHTML,
              ariaL: S.getAttribute("aria-label"),
              ariaH: S.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : i === "hidden" && S.setAttribute("aria-hidden", "true");
            let P = [],
              M = [],
              I = [],
              L = d ? _a("char", e, P) : null,
              R = _a("word", e, M),
              E,
              N,
              _,
              v;
            if ((rc(S, e, R, L, f, n && (c || f), y, g, m, !1), c)) {
              let T = Bs(S.childNodes),
                O = Zf(S, T, e, I),
                D,
                k = [],
                A = 0,
                V = T.map((J) =>
                  J.nodeType === 1 ? J.getBoundingClientRect() : ec
                ),
                W = ec;
              for (E = 0; E < T.length; E++)
                (D = T[E]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (k.push(D), O(A, E + 1), (A = E + 1), (W = V[A]))
                      : (E &&
                          V[E].top > W.top &&
                          V[E].left <= W.left &&
                          (O(A, E), (A = E)),
                        (W = V[E])));
              A < E && O(A, E),
                k.forEach((J) => {
                  var K;
                  return (K = J.parentNode) == null ? void 0 : K.removeChild(J);
                });
            }
            if (!p) {
              for (E = 0; E < M.length; E++)
                if (
                  ((N = M[E]),
                  d || !N.nextSibling || N.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
                    for (
                      _ = document.createElement("span"),
                        _.style.whiteSpace = "nowrap";
                      N.firstChild;

                    )
                      _.appendChild(N.firstChild);
                    N.replaceWith(_);
                  } else N.replaceWith(...N.childNodes);
                else
                  (v = N.nextSibling),
                    v &&
                      v.nodeType === 3 &&
                      ((v.textContent =
                        (N.textContent || "") + (v.textContent || "")),
                      N.remove());
              (M.length = 0), S.normalize();
            }
            this.lines.push(...I), this.words.push(...M), this.chars.push(...P);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((S) => {
                let x = S.cloneNode();
                return (
                  S.replaceWith(x),
                  x.appendChild(S),
                  S.className &&
                    (x.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (x.style.overflow = "clip"),
                  x
                );
              })
            )),
        (this.isSplit = !0),
        Qr &&
          (a
            ? Qr.addEventListener("loadingdone", this._split)
            : Qr.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (h = o && o(this)) &&
          h.totalTime &&
          (this._data.anim = b ? h.totalTime(b) : h),
        c &&
          a &&
          this.elements.forEach((S, x) => {
            (w[x].width = S.offsetWidth), C && C.observe(S);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: n, obs: s } = this._data;
      return (
        s && s.disconnect(),
        i.forEach(({ element: o, html: a, ariaL: l, ariaH: u }) => {
          (o.innerHTML = a),
            l
              ? o.setAttribute("aria-label", l)
              : o.removeAttribute("aria-label"),
            u
              ? o.setAttribute("aria-hidden", u)
              : o.removeAttribute("aria-hidden");
        }),
        (this.chars.length =
          this.words.length =
          this.lines.length =
          i.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        Qr == null || Qr.removeEventListener("loadingdone", this._split),
        n && ((this._data.animTime = n.totalTime()), n.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new hd(e, t);
    }
    static register(e) {
      ($n = $n || e || window.gsap),
        $n && ((Bs = $n.utils.toArray), (va = $n.core.context || va)),
        !ma && window.innerWidth > 0 && ((Qr = document.fonts), (ma = !0));
    }
  };
  nc.version = "3.13.0";
  let Hn = nc;
  j.registerPlugin(Q, Hn);
  const Qf = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((e) => {
        const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
          n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
        new Hn(e, {
          type: "words, chars",
          onSplit(o) {
            const a = j.context(() => {
              j.timeline({
                scrollTrigger: { scrub: !0, trigger: e, start: t, end: i },
              }).from(o.chars, { autoAlpha: n, stagger: s, ease: "linear" });
            });
            e._gsapContext = a;
          },
        });
      });
    },
    Jf = () => {
      Qf();
    },
    ep = () => {
      document.querySelectorAll('[data-tabs="wrapper"]').forEach((e) => {
        const t = e.querySelectorAll('[data-tabs="content"]'),
          i = e.querySelectorAll('[data-tabs="visual"]'),
          n = e.dataset.tabsAutoplay === "true",
          s = parseInt(e.dataset.tabsAutoplayDuration) || 5e3;
        let o = null,
          a = null,
          l = !1,
          u = null;
        function c(p) {
          u && u.kill();
          const f = t[p].querySelector('[data-tabs="item-progress"]');
          f &&
            (j.set(f, { scaleX: 0, transformOrigin: "left center" }),
            (u = j.to(f, {
              scaleX: 1,
              duration: s / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!l) {
                  const m = (p + 1) % t.length;
                  d(m);
                }
              },
            })));
        }
        function d(p) {
          if (l || t[p] === o) return;
          (l = !0), u && u.kill();
          const f = o,
            m = a,
            g =
              f == null
                ? void 0
                : f.querySelector('[data-tabs="item-progress"]'),
            y = t[p],
            w = i[p],
            b = y.querySelector('[data-tabs="item-progress"]'),
            C = j.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = y), (a = w), (l = !1), n && c(p);
              },
            });
          f &&
            (f.classList.remove("active"),
            f.setAttribute("aria-selected", "false"),
            m == null || m.classList.remove("active"),
            C.set(g, { transformOrigin: "right center" })
              .to(g, { scaleX: 0, duration: 0.3 }, 0)
              .to(m, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            y.classList.add("active"),
            y.setAttribute("aria-selected", "true"),
            w.classList.add("active"),
            C.fromTo(
              w,
              { autoAlpha: 0, yPercent: 5, scale: 0.99 },
              { autoAlpha: 1, yPercent: 0, scale: 1 },
              0.3
            ).set(b, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        t.forEach((p, f) => {
          p.setAttribute("tabindex", f === 0 ? "0" : "-1"),
            p.setAttribute("role", "tab"),
            p.setAttribute("aria-selected", f === 0 ? "true" : "false"),
            p.setAttribute("id", `tab-${f}`),
            i[f] &&
              (i[f].setAttribute("role", "tabpanel"),
              i[f].setAttribute("aria-labelledby", `tab-${f}`)),
            p.addEventListener("keydown", (m) => {
              let g;
              switch (m.key) {
                case "ArrowRight":
                  m.preventDefault(), (g = (f + 1) % t.length);
                  break;
                case "ArrowLeft":
                  m.preventDefault(), (g = (f - 1 + t.length) % t.length);
                  break;
                case "Home":
                  m.preventDefault(), (g = 0);
                  break;
                case "End":
                  m.preventDefault(), (g = t.length - 1);
                  break;
                default:
                  return;
              }
              t.forEach((y, w) => {
                y.setAttribute("tabindex", w === g ? "0" : "-1");
              }),
                t[g].focus(),
                d(g);
            }),
            p.addEventListener("click", () => {
              p !== o &&
                (t.forEach((m, g) => {
                  m.setAttribute("tabindex", g === f ? "0" : "-1");
                }),
                d(f));
            });
        }),
          e.setAttribute("role", "tablist"),
          e.setAttribute("aria-label", "Hero content tabs"),
          d(0);
      });
    },
    tp = () => {
      ep();
    };
  j.registerPlugin(Q);
  const ip = () => {
      const r = document.querySelector(".home_hero_tab_component"),
        e = r.querySelector(".home_hero_tab_visual_wrap");
      j.to(e, {
        scrollTrigger: {
          trigger: r,
          start: "top 75%",
          end: "bottom 95%",
          scrub: 1.4,
        },
        rotateX: 0,
        y: 0,
      });
    },
    rp = () => {
      ip();
    };
  j.registerPlugin(Q, Hn);
  const np = () => {
      const r = document.querySelector('[lead-scroll="wrap"]'),
        t = r
          .querySelector('[lead-scroll="visual-component"]')
          .querySelectorAll('[lead-scroll="visual-item"]'),
        i = Array.from(t).map((h) => h.querySelector('[scroll-img="lg"]')),
        n = Array.from(t).map((h) => h.querySelectorAll('[scroll-img="sm"]')),
        s = r.querySelector('[lead-scroll="content-component"]'),
        o = s.querySelectorAll('[lead-scroll="content-header-item"]'),
        a = s.querySelectorAll('[lead-scroll="content-header-item"] p'),
        l = s.querySelectorAll('[lead-scroll="content-info-item"]'),
        u = Array.from(l).map((h) => Array.from(h.querySelectorAll("p"))),
        d = document
          .querySelector('[lead-scroll="progress-wrap"]')
          .querySelectorAll('[lead-scroll="progress-item"]'),
        p = Array.from(d).map((h) =>
          h.querySelector('[lead-scroll="progress-move"]')
        );
      let f = 0,
        m = !1;
      j.set(i, { autoAlpha: 0 }),
        j.set(n, { autoAlpha: 0 }),
        j.set(i, { scale: 0.8 }),
        j.set(n, { scale: 0.8 });
      const g = (h) => {
          const S = i[h],
            x = n[h];
          S &&
            j.fromTo(
              S,
              { scale: 0, autoAlpha: 0, y: "100%", rotateX: -120 },
              {
                scale: 1,
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                duration: 1.2,
                ease: "expo.out",
              }
            ),
            x &&
              x.length > 0 &&
              j.fromTo(
                x,
                {
                  scale: 0,
                  autoAlpha: 0,
                  y: "-50%",
                  x: "20%",
                  rotateX: 120,
                  rotateY: -45,
                },
                {
                  scale: 1,
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  rotateY: 0,
                  duration: 1.2,
                  ease: "expo.out",
                  delay: 0.1,
                  stagger: 0.12,
                }
              );
        },
        y = (h) => {
          const S = i[h],
            x = n[h];
          S &&
            j.to(S, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            x &&
              x.length > 0 &&
              j.to(x, {
                scale: 0.8,
                rotateX: 120,
                rotateY: -45,
                y: "-50%",
                x: "20%",
                autoAlpha: 0,
                duration: 0.6,
                ease: "expo.inOut",
                stagger: 0.05,
              });
        },
        w = (h) => {
          const S = a[h],
            x = new Hn(S, { type: "lines", mask: "lines" });
          x &&
            j.from(x.lines, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        },
        b = (h) => {
          const S = u[h];
          S &&
            S.length > 0 &&
            j.from(S, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        C = (h) => {
          const S = Math.floor(h * 4),
            x = Math.min(Math.max(S, 0), 3);
          if (x !== f && !m) {
            m = !0;
            const P = f,
              M = x,
              I = () => {
                d.forEach((L) => {
                  L.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                  t.forEach((L) => {
                    L.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  o.forEach((L) => {
                    L.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  l.forEach((L) => {
                    L.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  });
              };
            I(),
              P >= 0 &&
                P < t.length &&
                (d[P] && d[P].classList.add("is--outgoing"),
                t[P] && t[P].classList.add("is--outgoing"),
                o[P] && o[P].classList.add("is--outgoing"),
                l[P] && l[P].classList.add("is--outgoing"),
                y(P)),
              d[M] && d[M].classList.add("is--incoming"),
              t[M] && t[M].classList.add("is--incoming"),
              o[M] && o[M].classList.add("is--incoming"),
              l[M] && l[M].classList.add("is--incoming"),
              g(M),
              w(M),
              b(M),
              j.delayedCall(0.2, () => {
                I(),
                  d[M] && (d[M].classList.add("is--active"), d[M]),
                  t[M] && (t[M].classList.add("is--active"), t[M]),
                  o[M] && (o[M].classList.add("is--active"), o[M]),
                  l[M] && l[M].classList.add("is--active"),
                  (f = M),
                  (m = !1);
              });
          }
        };
      d[0] && (d[0].classList.add("is--active"), d[0]),
        t[0] && (t[0].classList.add("is--active"), t[0]),
        o[0] && (o[0].classList.add("is--active"), o[0]),
        l[0] && l[0].classList.add("is--active"),
        g(0),
        w(0),
        b(0),
        j.to(r, {
          scrollTrigger: {
            trigger: r,
            start: "top top",
            end: "+=400%",
            pin: !0,
            scrub: !0,
            markers: !1,
            onUpdate: (h) => {
              C(h.progress);
            },
          },
        }),
        p.forEach((h, S) => {
          j.fromTo(
            h,
            { scaleX: 0 },
            {
              scaleX: 1,
              scrollTrigger: {
                trigger: r,
                start: "top top",
                end: "+=400%",
                scrub: !0,
                onUpdate: (x) => {
                  const M = x.progress * 4 - S,
                    I = Math.min(Math.max(M, 0), 1);
                  j.set(h, { scaleX: I });
                },
              },
            }
          );
        });
    },
    sp = () => {
      np();
    },
    op = () => {
      const r = document.querySelectorAll('[form-dropdown="component"]'),
        e = "inactive",
        t = "active",
        i = "aria-expanded",
        n = "aria-hidden";
      let s = !1,
        o = null;
      const a = "#f7f7f7",
        l = "#4aa5fe",
        u = (m) => {
          if (!s || !o) return;
          if (!o.contains(m.target)) {
            const y = o.querySelector('[form-dropdown="trigger"]'),
              w = o.querySelector('[form-dropdown="content"]'),
              b = o.querySelector('[form-dropdown="trigger-icon"]'),
              C = o.querySelectorAll('[form-dropdown="answer"]');
            d(y, w, b), f(y, w, b, C), (s = !1), (o = null);
          }
        };
      document.addEventListener("click", u);
      const c = (m, g, y, w) => {
          m.classList.remove(e),
            m.classList.add(t),
            m.setAttribute(i, "true"),
            g.setAttribute(n, "false"),
            y && y.classList.add(t);
        },
        d = (m, g, y, w) => {
          m.classList.remove(t),
            m.classList.add(e),
            m.setAttribute(i, "false"),
            g.setAttribute(n, "true"),
            y && y.classList.remove(t);
        },
        p = (m, g, y, w) => {
          j.to(y, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
            j.fromTo(
              g,
              { autoAlpha: 0, pointerEvents: "none", y: 40 },
              {
                autoAlpha: 1,
                duration: 0.4,
                ease: "expo.out",
                y: 0,
                pointerEvents: "auto",
              }
            ),
            j.fromTo(
              w,
              { autoAlpha: 0, y: 60, pointerEvents: "none" },
              {
                autoAlpha: 1,
                duration: 0.6,
                ease: "expo.out",
                y: 0,
                stagger: 0.05,
                pointerEvents: "auto",
              }
            );
        },
        f = (m, g, y, w) => {
          j.to(y, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            j.to(g, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            j.to(w, {
              autoAlpha: 0,
              duration: 0.01,
              ease: "expo.out",
              stagger: 0.05,
              pointerEvents: "none",
            });
        };
      r.forEach((m) => {
        const g = m.querySelector('[form-dropdown="trigger"]'),
          y = m.querySelector('[form-dropdown="content"]'),
          w = m.querySelector('[form-dropdown="trigger-icon"]'),
          b = m.querySelectorAll('[form-dropdown="answer"]'),
          C = () => {
            d(g, y, w), f(g, y, w, b), (s = !1), (o = null);
          };
        g.addEventListener("click", () => {
          const h = g.classList.contains(t);
          if (s && o && o !== m) {
            const S = o.querySelector('[form-dropdown="trigger"]'),
              x = o.querySelector('[form-dropdown="content"]'),
              P = o.querySelector('[form-dropdown="trigger-icon"]'),
              M = o.querySelectorAll('[form-dropdown="answer"]');
            d(S, x, P), f(S, x, P, M);
          }
          h ? C() : (c(g, y, w), p(g, y, w, b), (s = !0), (o = m));
        }),
          b.forEach((h) => {
            h.addEventListener("click", () => {
              if (o === m) {
                const S = h.querySelector("p[answer-value]"),
                  x = g.querySelector('[form-dropdown="value"]');
                if (S && x) {
                  const P =
                      S.getAttribute("answer-value") || S.textContent.trim(),
                    M = h.getAttribute("calc-value");
                  if (((x.textContent = P), M)) {
                    x.setAttribute("final-value", M);
                    const I = x.parentElement;
                    I && I.classList.add("is--active"),
                      g.classList.add("is--active"),
                      w && w.classList.add("is--active"),
                      m.classList.add("is--active"),
                      x.classList.add("is--active");
                  }
                }
                C();
              }
            });
          });
      });
    },
    ap = () => {
      op();
    };
  var Rt = "top",
    li = "bottom",
    ui = "right",
    zt = "left",
    ya = "auto",
    qn = [Rt, li, ui, zt],
    en = "start",
    Wn = "end",
    lp = "clippingParents",
    sc = "viewport",
    Gn = "popper",
    up = "reference",
    oc = qn.reduce(function (r, e) {
      return r.concat([e + "-" + en, e + "-" + Wn]);
    }, []),
    ac = [].concat(qn, [ya]).reduce(function (r, e) {
      return r.concat([e, e + "-" + en, e + "-" + Wn]);
    }, []),
    cp = "beforeRead",
    dp = "read",
    fp = "afterRead",
    pp = "beforeMain",
    hp = "main",
    mp = "afterMain",
    gp = "beforeWrite",
    vp = "write",
    _p = "afterWrite",
    yp = [cp, dp, fp, pp, hp, mp, gp, vp, _p];
  function Ci(r) {
    return r ? (r.nodeName || "").toLowerCase() : null;
  }
  function Ut(r) {
    if (r == null) return window;
    if (r.toString() !== "[object Window]") {
      var e = r.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return r;
  }
  function Tr(r) {
    var e = Ut(r).Element;
    return r instanceof e || r instanceof Element;
  }
  function ci(r) {
    var e = Ut(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement;
  }
  function wa(r) {
    if (typeof ShadowRoot == "undefined") return !1;
    var e = Ut(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot;
  }
  function wp(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function (t) {
      var i = e.styles[t] || {},
        n = e.attributes[t] || {},
        s = e.elements[t];
      !ci(s) ||
        !Ci(s) ||
        (Object.assign(s.style, i),
        Object.keys(n).forEach(function (o) {
          var a = n[o];
          a === !1
            ? s.removeAttribute(o)
            : s.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function bp(r) {
    var e = r.state,
      t = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(e.elements.popper.style, t.popper),
      (e.styles = t),
      e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
      function () {
        Object.keys(e.elements).forEach(function (i) {
          var n = e.elements[i],
            s = e.attributes[i] || {},
            o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]),
            a = o.reduce(function (l, u) {
              return (l[u] = ""), l;
            }, {});
          !ci(n) ||
            !Ci(n) ||
            (Object.assign(n.style, a),
            Object.keys(s).forEach(function (l) {
              n.removeAttribute(l);
            }));
        });
      }
    );
  }
  const lc = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: wp,
    effect: bp,
    requires: ["computeStyles"],
  };
  function Ei(r) {
    return r.split("-")[0];
  }
  var xr = Math.max,
    Vs = Math.min,
    tn = Math.round;
  function ba() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands)
      ? r.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function uc() {
    return !/^((?!chrome|android).)*safari/i.test(ba());
  }
  function rn(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var i = r.getBoundingClientRect(),
      n = 1,
      s = 1;
    e &&
      ci(r) &&
      ((n = (r.offsetWidth > 0 && tn(i.width) / r.offsetWidth) || 1),
      (s = (r.offsetHeight > 0 && tn(i.height) / r.offsetHeight) || 1));
    var o = Tr(r) ? Ut(r) : window,
      a = o.visualViewport,
      l = !uc() && t,
      u = (i.left + (l && a ? a.offsetLeft : 0)) / n,
      c = (i.top + (l && a ? a.offsetTop : 0)) / s,
      d = i.width / n,
      p = i.height / s;
    return {
      width: d,
      height: p,
      top: c,
      right: u + d,
      bottom: c + p,
      left: u,
      x: u,
      y: c,
    };
  }
  function Sa(r) {
    var e = rn(r),
      t = r.offsetWidth,
      i = r.offsetHeight;
    return (
      Math.abs(e.width - t) <= 1 && (t = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
    );
  }
  function cc(r, e) {
    var t = e.getRootNode && e.getRootNode();
    if (r.contains(e)) return !0;
    if (t && wa(t)) {
      var i = e;
      do {
        if (i && r.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function Fi(r) {
    return Ut(r).getComputedStyle(r);
  }
  function Sp(r) {
    return ["table", "td", "th"].indexOf(Ci(r)) >= 0;
  }
  function Ji(r) {
    return (
      (Tr(r) ? r.ownerDocument : r.document) || window.document
    ).documentElement;
  }
  function $s(r) {
    return Ci(r) === "html"
      ? r
      : r.assignedSlot || r.parentNode || (wa(r) ? r.host : null) || Ji(r);
  }
  function dc(r) {
    return !ci(r) || Fi(r).position === "fixed" ? null : r.offsetParent;
  }
  function Tp(r) {
    var e = /firefox/i.test(ba()),
      t = /Trident/i.test(ba());
    if (t && ci(r)) {
      var i = Fi(r);
      if (i.position === "fixed") return null;
    }
    var n = $s(r);
    for (
      wa(n) && (n = n.host);
      ci(n) && ["html", "body"].indexOf(Ci(n)) < 0;

    ) {
      var s = Fi(n);
      if (
        s.transform !== "none" ||
        s.perspective !== "none" ||
        s.contain === "paint" ||
        ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
        (e && s.willChange === "filter") ||
        (e && s.filter && s.filter !== "none")
      )
        return n;
      n = n.parentNode;
    }
    return null;
  }
  function Xn(r) {
    for (var e = Ut(r), t = dc(r); t && Sp(t) && Fi(t).position === "static"; )
      t = dc(t);
    return t &&
      (Ci(t) === "html" || (Ci(t) === "body" && Fi(t).position === "static"))
      ? e
      : t || Tp(r) || e;
  }
  function Ta(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
  }
  function Yn(r, e, t) {
    return xr(r, Vs(e, t));
  }
  function xp(r, e, t) {
    var i = Yn(r, e, t);
    return i > t ? t : i;
  }
  function fc() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function pc(r) {
    return Object.assign({}, fc(), r);
  }
  function hc(r, e) {
    return e.reduce(function (t, i) {
      return (t[i] = r), t;
    }, {});
  }
  var Cp = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      pc(typeof e != "number" ? e : hc(e, qn))
    );
  };
  function Ep(r) {
    var e,
      t = r.state,
      i = r.name,
      n = r.options,
      s = t.elements.arrow,
      o = t.modifiersData.popperOffsets,
      a = Ei(t.placement),
      l = Ta(a),
      u = [zt, ui].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!s || !o)) {
      var d = Cp(n.padding, t),
        p = Sa(s),
        f = l === "y" ? Rt : zt,
        m = l === "y" ? li : ui,
        g =
          t.rects.reference[c] +
          t.rects.reference[l] -
          o[l] -
          t.rects.popper[c],
        y = o[l] - t.rects.reference[l],
        w = Xn(s),
        b = w ? (l === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
        C = g / 2 - y / 2,
        h = d[f],
        S = b - p[c] - d[m],
        x = b / 2 - p[c] / 2 + C,
        P = Yn(h, x, S),
        M = l;
      t.modifiersData[i] = ((e = {}), (e[M] = P), (e.centerOffset = P - x), e);
    }
  }
  function Ap(r) {
    var e = r.state,
      t = r.options,
      i = t.element,
      n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null &&
      ((typeof n == "string" &&
        ((n = e.elements.popper.querySelector(n)), !n)) ||
        (cc(e.elements.popper, n) && (e.elements.arrow = n)));
  }
  const Pp = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Ep,
    effect: Ap,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function nn(r) {
    return r.split("-")[1];
  }
  var Mp = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Op(r, e) {
    var t = r.x,
      i = r.y,
      n = e.devicePixelRatio || 1;
    return { x: tn(t * n) / n || 0, y: tn(i * n) / n || 0 };
  }
  function mc(r) {
    var e,
      t = r.popper,
      i = r.popperRect,
      n = r.placement,
      s = r.variation,
      o = r.offsets,
      a = r.position,
      l = r.gpuAcceleration,
      u = r.adaptive,
      c = r.roundOffsets,
      d = r.isFixed,
      p = o.x,
      f = p === void 0 ? 0 : p,
      m = o.y,
      g = m === void 0 ? 0 : m,
      y = typeof c == "function" ? c({ x: f, y: g }) : { x: f, y: g };
    (f = y.x), (g = y.y);
    var w = o.hasOwnProperty("x"),
      b = o.hasOwnProperty("y"),
      C = zt,
      h = Rt,
      S = window;
    if (u) {
      var x = Xn(t),
        P = "clientHeight",
        M = "clientWidth";
      if (
        (x === Ut(t) &&
          ((x = Ji(t)),
          Fi(x).position !== "static" &&
            a === "absolute" &&
            ((P = "scrollHeight"), (M = "scrollWidth"))),
        (x = x),
        n === Rt || ((n === zt || n === ui) && s === Wn))
      ) {
        h = li;
        var I =
          d && x === S && S.visualViewport ? S.visualViewport.height : x[P];
        (g -= I - i.height), (g *= l ? 1 : -1);
      }
      if (n === zt || ((n === Rt || n === li) && s === Wn)) {
        C = ui;
        var L =
          d && x === S && S.visualViewport ? S.visualViewport.width : x[M];
        (f -= L - i.width), (f *= l ? 1 : -1);
      }
    }
    var R = Object.assign({ position: a }, u && Mp),
      E = c === !0 ? Op({ x: f, y: g }, Ut(t)) : { x: f, y: g };
    if (((f = E.x), (g = E.y), l)) {
      var N;
      return Object.assign(
        {},
        R,
        ((N = {}),
        (N[h] = b ? "0" : ""),
        (N[C] = w ? "0" : ""),
        (N.transform =
          (S.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + g + "px)"
            : "translate3d(" + f + "px, " + g + "px, 0)"),
        N)
      );
    }
    return Object.assign(
      {},
      R,
      ((e = {}),
      (e[h] = b ? g + "px" : ""),
      (e[C] = w ? f + "px" : ""),
      (e.transform = ""),
      e)
    );
  }
  function Lp(r) {
    var e = r.state,
      t = r.options,
      i = t.gpuAcceleration,
      n = i === void 0 ? !0 : i,
      s = t.adaptive,
      o = s === void 0 ? !0 : s,
      a = t.roundOffsets,
      l = a === void 0 ? !0 : a,
      u = {
        placement: Ei(e.placement),
        variation: nn(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: n,
        isFixed: e.options.strategy === "fixed",
      };
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        mc(
          Object.assign({}, u, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: o,
            roundOffsets: l,
          })
        )
      )),
      e.modifiersData.arrow != null &&
        (e.styles.arrow = Object.assign(
          {},
          e.styles.arrow,
          mc(
            Object.assign({}, u, {
              offsets: e.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement,
      }));
  }
  const Dp = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Lp,
    data: {},
  };
  var Hs = { passive: !0 };
  function Ip(r) {
    var e = r.state,
      t = r.instance,
      i = r.options,
      n = i.scroll,
      s = n === void 0 ? !0 : n,
      o = i.resize,
      a = o === void 0 ? !0 : o,
      l = Ut(e.elements.popper),
      u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
      s &&
        u.forEach(function (c) {
          c.addEventListener("scroll", t.update, Hs);
        }),
      a && l.addEventListener("resize", t.update, Hs),
      function () {
        s &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", t.update, Hs);
          }),
          a && l.removeEventListener("resize", t.update, Hs);
      }
    );
  }
  const kp = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Ip,
    data: {},
  };
  var Rp = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function qs(r) {
    return r.replace(/left|right|bottom|top/g, function (e) {
      return Rp[e];
    });
  }
  var zp = { start: "end", end: "start" };
  function gc(r) {
    return r.replace(/start|end/g, function (e) {
      return zp[e];
    });
  }
  function xa(r) {
    var e = Ut(r),
      t = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: t, scrollTop: i };
  }
  function Ca(r) {
    return rn(Ji(r)).left + xa(r).scrollLeft;
  }
  function Np(r, e) {
    var t = Ut(r),
      i = Ji(r),
      n = t.visualViewport,
      s = i.clientWidth,
      o = i.clientHeight,
      a = 0,
      l = 0;
    if (n) {
      (s = n.width), (o = n.height);
      var u = uc();
      (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
    }
    return { width: s, height: o, x: a + Ca(r), y: l };
  }
  function Fp(r) {
    var e,
      t = Ji(r),
      i = xa(r),
      n = (e = r.ownerDocument) == null ? void 0 : e.body,
      s = xr(
        t.scrollWidth,
        t.clientWidth,
        n ? n.scrollWidth : 0,
        n ? n.clientWidth : 0
      ),
      o = xr(
        t.scrollHeight,
        t.clientHeight,
        n ? n.scrollHeight : 0,
        n ? n.clientHeight : 0
      ),
      a = -i.scrollLeft + Ca(r),
      l = -i.scrollTop;
    return (
      Fi(n || t).direction === "rtl" &&
        (a += xr(t.clientWidth, n ? n.clientWidth : 0) - s),
      { width: s, height: o, x: a, y: l }
    );
  }
  function Ea(r) {
    var e = Fi(r),
      t = e.overflow,
      i = e.overflowX,
      n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + n + i);
  }
  function vc(r) {
    return ["html", "body", "#document"].indexOf(Ci(r)) >= 0
      ? r.ownerDocument.body
      : ci(r) && Ea(r)
      ? r
      : vc($s(r));
  }
  function jn(r, e) {
    var t;
    e === void 0 && (e = []);
    var i = vc(r),
      n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
      s = Ut(i),
      o = n ? [s].concat(s.visualViewport || [], Ea(i) ? i : []) : i,
      a = e.concat(o);
    return n ? a : a.concat(jn($s(o)));
  }
  function Aa(r) {
    return Object.assign({}, r, {
      left: r.x,
      top: r.y,
      right: r.x + r.width,
      bottom: r.y + r.height,
    });
  }
  function Bp(r, e) {
    var t = rn(r, !1, e === "fixed");
    return (
      (t.top = t.top + r.clientTop),
      (t.left = t.left + r.clientLeft),
      (t.bottom = t.top + r.clientHeight),
      (t.right = t.left + r.clientWidth),
      (t.width = r.clientWidth),
      (t.height = r.clientHeight),
      (t.x = t.left),
      (t.y = t.top),
      t
    );
  }
  function _c(r, e, t) {
    return e === sc ? Aa(Np(r, t)) : Tr(e) ? Bp(e, t) : Aa(Fp(Ji(r)));
  }
  function Vp(r) {
    var e = jn($s(r)),
      t = ["absolute", "fixed"].indexOf(Fi(r).position) >= 0,
      i = t && ci(r) ? Xn(r) : r;
    return Tr(i)
      ? e.filter(function (n) {
          return Tr(n) && cc(n, i) && Ci(n) !== "body";
        })
      : [];
  }
  function $p(r, e, t, i) {
    var n = e === "clippingParents" ? Vp(r) : [].concat(e),
      s = [].concat(n, [t]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = _c(r, u, i);
        return (
          (l.top = xr(c.top, l.top)),
          (l.right = Vs(c.right, l.right)),
          (l.bottom = Vs(c.bottom, l.bottom)),
          (l.left = xr(c.left, l.left)),
          l
        );
      }, _c(r, o, i));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function yc(r) {
    var e = r.reference,
      t = r.element,
      i = r.placement,
      n = i ? Ei(i) : null,
      s = i ? nn(i) : null,
      o = e.x + e.width / 2 - t.width / 2,
      a = e.y + e.height / 2 - t.height / 2,
      l;
    switch (n) {
      case Rt:
        l = { x: o, y: e.y - t.height };
        break;
      case li:
        l = { x: o, y: e.y + e.height };
        break;
      case ui:
        l = { x: e.x + e.width, y: a };
        break;
      case zt:
        l = { x: e.x - t.width, y: a };
        break;
      default:
        l = { x: e.x, y: e.y };
    }
    var u = n ? Ta(n) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (s) {
        case en:
          l[u] = l[u] - (e[c] / 2 - t[c] / 2);
          break;
        case Wn:
          l[u] = l[u] + (e[c] / 2 - t[c] / 2);
          break;
      }
    }
    return l;
  }
  function Un(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = i === void 0 ? r.placement : i,
      s = t.strategy,
      o = s === void 0 ? r.strategy : s,
      a = t.boundary,
      l = a === void 0 ? lp : a,
      u = t.rootBoundary,
      c = u === void 0 ? sc : u,
      d = t.elementContext,
      p = d === void 0 ? Gn : d,
      f = t.altBoundary,
      m = f === void 0 ? !1 : f,
      g = t.padding,
      y = g === void 0 ? 0 : g,
      w = pc(typeof y != "number" ? y : hc(y, qn)),
      b = p === Gn ? up : Gn,
      C = r.rects.popper,
      h = r.elements[m ? b : p],
      S = $p(Tr(h) ? h : h.contextElement || Ji(r.elements.popper), l, c, o),
      x = rn(r.elements.reference),
      P = yc({ reference: x, element: C, strategy: "absolute", placement: n }),
      M = Aa(Object.assign({}, C, P)),
      I = p === Gn ? M : x,
      L = {
        top: S.top - I.top + w.top,
        bottom: I.bottom - S.bottom + w.bottom,
        left: S.left - I.left + w.left,
        right: I.right - S.right + w.right,
      },
      R = r.modifiersData.offset;
    if (p === Gn && R) {
      var E = R[n];
      Object.keys(L).forEach(function (N) {
        var _ = [ui, li].indexOf(N) >= 0 ? 1 : -1,
          v = [Rt, li].indexOf(N) >= 0 ? "y" : "x";
        L[N] += E[v] * _;
      });
    }
    return L;
  }
  function Hp(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = t.boundary,
      s = t.rootBoundary,
      o = t.padding,
      a = t.flipVariations,
      l = t.allowedAutoPlacements,
      u = l === void 0 ? ac : l,
      c = nn(i),
      d = c
        ? a
          ? oc
          : oc.filter(function (m) {
              return nn(m) === c;
            })
        : qn,
      p = d.filter(function (m) {
        return u.indexOf(m) >= 0;
      });
    p.length === 0 && (p = d);
    var f = p.reduce(function (m, g) {
      return (
        (m[g] = Un(r, {
          placement: g,
          boundary: n,
          rootBoundary: s,
          padding: o,
        })[Ei(g)]),
        m
      );
    }, {});
    return Object.keys(f).sort(function (m, g) {
      return f[m] - f[g];
    });
  }
  function qp(r) {
    if (Ei(r) === ya) return [];
    var e = qs(r);
    return [gc(r), e, gc(e)];
  }
  function Wp(r) {
    var e = r.state,
      t = r.options,
      i = r.name;
    if (!e.modifiersData[i]._skip) {
      for (
        var n = t.mainAxis,
          s = n === void 0 ? !0 : n,
          o = t.altAxis,
          a = o === void 0 ? !0 : o,
          l = t.fallbackPlacements,
          u = t.padding,
          c = t.boundary,
          d = t.rootBoundary,
          p = t.altBoundary,
          f = t.flipVariations,
          m = f === void 0 ? !0 : f,
          g = t.allowedAutoPlacements,
          y = e.options.placement,
          w = Ei(y),
          b = w === y,
          C = l || (b || !m ? [qs(y)] : qp(y)),
          h = [y].concat(C).reduce(function (K, re) {
            return K.concat(
              Ei(re) === ya
                ? Hp(e, {
                    placement: re,
                    boundary: c,
                    rootBoundary: d,
                    padding: u,
                    flipVariations: m,
                    allowedAutoPlacements: g,
                  })
                : re
            );
          }, []),
          S = e.rects.reference,
          x = e.rects.popper,
          P = new Map(),
          M = !0,
          I = h[0],
          L = 0;
        L < h.length;
        L++
      ) {
        var R = h[L],
          E = Ei(R),
          N = nn(R) === en,
          _ = [Rt, li].indexOf(E) >= 0,
          v = _ ? "width" : "height",
          T = Un(e, {
            placement: R,
            boundary: c,
            rootBoundary: d,
            altBoundary: p,
            padding: u,
          }),
          O = _ ? (N ? ui : zt) : N ? li : Rt;
        S[v] > x[v] && (O = qs(O));
        var D = qs(O),
          k = [];
        if (
          (s && k.push(T[E] <= 0),
          a && k.push(T[O] <= 0, T[D] <= 0),
          k.every(function (K) {
            return K;
          }))
        ) {
          (I = R), (M = !1);
          break;
        }
        P.set(R, k);
      }
      if (M)
        for (
          var A = m ? 3 : 1,
            V = function (re) {
              var de = h.find(function (fe) {
                var ge = P.get(fe);
                if (ge)
                  return ge.slice(0, re).every(function (Me) {
                    return Me;
                  });
              });
              if (de) return (I = de), "break";
            },
            W = A;
          W > 0;
          W--
        ) {
          var J = V(W);
          if (J === "break") break;
        }
      e.placement !== I &&
        ((e.modifiersData[i]._skip = !0), (e.placement = I), (e.reset = !0));
    }
  }
  const Gp = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Wp,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function wc(r, e, t) {
    return (
      t === void 0 && (t = { x: 0, y: 0 }),
      {
        top: r.top - e.height - t.y,
        right: r.right - e.width + t.x,
        bottom: r.bottom - e.height + t.y,
        left: r.left - e.width - t.x,
      }
    );
  }
  function bc(r) {
    return [Rt, ui, li, zt].some(function (e) {
      return r[e] >= 0;
    });
  }
  function Xp(r) {
    var e = r.state,
      t = r.name,
      i = e.rects.reference,
      n = e.rects.popper,
      s = e.modifiersData.preventOverflow,
      o = Un(e, { elementContext: "reference" }),
      a = Un(e, { altBoundary: !0 }),
      l = wc(o, i),
      u = wc(a, n, s),
      c = bc(l),
      d = bc(u);
    (e.modifiersData[t] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: d,
    }),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": d,
      }));
  }
  const Yp = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Xp,
  };
  function jp(r, e, t) {
    var i = Ei(r),
      n = [zt, Rt].indexOf(i) >= 0 ? -1 : 1,
      s =
        typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
      o = s[0],
      a = s[1];
    return (
      (o = o || 0),
      (a = (a || 0) * n),
      [zt, ui].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function Up(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.offset,
      s = n === void 0 ? [0, 0] : n,
      o = ac.reduce(function (c, d) {
        return (c[d] = jp(d, e.rects, s)), c;
      }, {}),
      a = o[e.placement],
      l = a.x,
      u = a.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += l),
      (e.modifiersData.popperOffsets.y += u)),
      (e.modifiersData[i] = o);
  }
  const Kp = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Up,
  };
  function Zp(r) {
    var e = r.state,
      t = r.name;
    e.modifiersData[t] = yc({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const Qp = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Zp,
    data: {},
  };
  function Jp(r) {
    return r === "x" ? "y" : "x";
  }
  function eh(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.mainAxis,
      s = n === void 0 ? !0 : n,
      o = t.altAxis,
      a = o === void 0 ? !1 : o,
      l = t.boundary,
      u = t.rootBoundary,
      c = t.altBoundary,
      d = t.padding,
      p = t.tether,
      f = p === void 0 ? !0 : p,
      m = t.tetherOffset,
      g = m === void 0 ? 0 : m,
      y = Un(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
      w = Ei(e.placement),
      b = nn(e.placement),
      C = !b,
      h = Ta(w),
      S = Jp(h),
      x = e.modifiersData.popperOffsets,
      P = e.rects.reference,
      M = e.rects.popper,
      I =
        typeof g == "function"
          ? g(Object.assign({}, e.rects, { placement: e.placement }))
          : g,
      L =
        typeof I == "number"
          ? { mainAxis: I, altAxis: I }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
      R = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      E = { x: 0, y: 0 };
    if (x) {
      if (s) {
        var N,
          _ = h === "y" ? Rt : zt,
          v = h === "y" ? li : ui,
          T = h === "y" ? "height" : "width",
          O = x[h],
          D = O + y[_],
          k = O - y[v],
          A = f ? -M[T] / 2 : 0,
          V = b === en ? P[T] : M[T],
          W = b === en ? -M[T] : -P[T],
          J = e.elements.arrow,
          K = f && J ? Sa(J) : { width: 0, height: 0 },
          re = e.modifiersData["arrow#persistent"]
            ? e.modifiersData["arrow#persistent"].padding
            : fc(),
          de = re[_],
          fe = re[v],
          ge = Yn(0, P[T], K[T]),
          Me = C
            ? P[T] / 2 - A - ge - de - L.mainAxis
            : V - ge - de - L.mainAxis,
          ot = C
            ? -P[T] / 2 + A + ge + fe + L.mainAxis
            : W + ge + fe + L.mainAxis,
          Ie = e.elements.arrow && Xn(e.elements.arrow),
          Xe = Ie ? (h === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0) : 0,
          se = (N = R == null ? void 0 : R[h]) != null ? N : 0,
          Se = O + Me - se - Xe,
          Ye = O + ot - se,
          je = Yn(f ? Vs(D, Se) : D, O, f ? xr(k, Ye) : k);
        (x[h] = je), (E[h] = je - O);
      }
      if (a) {
        var z,
          et = h === "x" ? Rt : zt,
          Nt = h === "x" ? li : ui,
          tt = x[S],
          pe = S === "y" ? "height" : "width",
          Pt = tt + y[et],
          mt = tt - y[Nt],
          Qt = [Rt, zt].indexOf(w) !== -1,
          Oe = (z = R == null ? void 0 : R[S]) != null ? z : 0,
          Jt = Qt ? Pt : tt - P[pe] - M[pe] - Oe + L.altAxis,
          Te = Qt ? tt + P[pe] + M[pe] - Oe - L.altAxis : mt,
          gt = f && Qt ? xp(Jt, tt, Te) : Yn(f ? Jt : Pt, tt, f ? Te : mt);
        (x[S] = gt), (E[S] = gt - tt);
      }
      e.modifiersData[i] = E;
    }
  }
  const th = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: eh,
    requiresIfExists: ["offset"],
  };
  function ih(r) {
    return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
  }
  function rh(r) {
    return r === Ut(r) || !ci(r) ? xa(r) : ih(r);
  }
  function nh(r) {
    var e = r.getBoundingClientRect(),
      t = tn(e.width) / r.offsetWidth || 1,
      i = tn(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1;
  }
  function sh(r, e, t) {
    t === void 0 && (t = !1);
    var i = ci(e),
      n = ci(e) && nh(e),
      s = Ji(e),
      o = rn(r, n, t),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !t)) &&
        ((Ci(e) !== "body" || Ea(s)) && (a = rh(e)),
        ci(e)
          ? ((l = rn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
          : s && (l.x = Ca(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function oh(r) {
    var e = new Map(),
      t = new Set(),
      i = [];
    r.forEach(function (s) {
      e.set(s.name, s);
    });
    function n(s) {
      t.add(s.name);
      var o = [].concat(s.requires || [], s.requiresIfExists || []);
      o.forEach(function (a) {
        if (!t.has(a)) {
          var l = e.get(a);
          l && n(l);
        }
      }),
        i.push(s);
    }
    return (
      r.forEach(function (s) {
        t.has(s.name) || n(s);
      }),
      i
    );
  }
  function ah(r) {
    var e = oh(r);
    return yp.reduce(function (t, i) {
      return t.concat(
        e.filter(function (n) {
          return n.phase === i;
        })
      );
    }, []);
  }
  function lh(r) {
    var e;
    return function () {
      return (
        e ||
          (e = new Promise(function (t) {
            Promise.resolve().then(function () {
              (e = void 0), t(r());
            });
          })),
        e
      );
    };
  }
  function uh(r) {
    var e = r.reduce(function (t, i) {
      var n = t[i.name];
      return (
        (t[i.name] = n
          ? Object.assign({}, n, i, {
              options: Object.assign({}, n.options, i.options),
              data: Object.assign({}, n.data, i.data),
            })
          : i),
        t
      );
    }, {});
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }
  var Sc = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Tc() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return !e.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function ch(r) {
    r === void 0 && (r = {});
    var e = r,
      t = e.defaultModifiers,
      i = t === void 0 ? [] : t,
      n = e.defaultOptions,
      s = n === void 0 ? Sc : n;
    return function (a, l, u) {
      u === void 0 && (u = s);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Sc, s),
          modifiersData: {},
          elements: { reference: a, popper: l },
          attributes: {},
          styles: {},
        },
        d = [],
        p = !1,
        f = {
          state: c,
          setOptions: function (w) {
            var b = typeof w == "function" ? w(c.options) : w;
            g(),
              (c.options = Object.assign({}, s, c.options, b)),
              (c.scrollParents = {
                reference: Tr(a)
                  ? jn(a)
                  : a.contextElement
                  ? jn(a.contextElement)
                  : [],
                popper: jn(l),
              });
            var C = ah(uh([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = C.filter(function (h) {
                return h.enabled;
              })),
              m(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var w = c.elements,
                b = w.reference,
                C = w.popper;
              if (Tc(b, C)) {
                (c.rects = {
                  reference: sh(b, Xn(C), c.options.strategy === "fixed"),
                  popper: Sa(C),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (L) {
                    return (c.modifiersData[L.name] = Object.assign(
                      {},
                      L.data
                    ));
                  });
                for (var h = 0; h < c.orderedModifiers.length; h++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (h = -1);
                    continue;
                  }
                  var S = c.orderedModifiers[h],
                    x = S.fn,
                    P = S.options,
                    M = P === void 0 ? {} : P,
                    I = S.name;
                  typeof x == "function" &&
                    (c =
                      x({ state: c, options: M, name: I, instance: f }) || c);
                }
              }
            }
          },
          update: lh(function () {
            return new Promise(function (y) {
              f.forceUpdate(), y(c);
            });
          }),
          destroy: function () {
            g(), (p = !0);
          },
        };
      if (!Tc(a, l)) return f;
      f.setOptions(u).then(function (y) {
        !p && u.onFirstUpdate && u.onFirstUpdate(y);
      });
      function m() {
        c.orderedModifiers.forEach(function (y) {
          var w = y.name,
            b = y.options,
            C = b === void 0 ? {} : b,
            h = y.effect;
          if (typeof h == "function") {
            var S = h({ state: c, name: w, instance: f, options: C }),
              x = function () {};
            d.push(S || x);
          }
        });
      }
      function g() {
        d.forEach(function (y) {
          return y();
        }),
          (d = []);
      }
      return f;
    };
  }
  var dh = [kp, Qp, Dp, lc, Kp, Gp, th, Pp, Yp],
    fh = ch({ defaultModifiers: dh }),
    ph = "tippy-box",
    xc = "tippy-content",
    hh = "tippy-backdrop",
    Cc = "tippy-arrow",
    Ec = "tippy-svg-arrow",
    Cr = { passive: !0, capture: !0 },
    Ac = function () {
      return document.body;
    };
  function Pa(r, e, t) {
    if (Array.isArray(r)) {
      var i = r[e];
      return i == null ? (Array.isArray(t) ? t[e] : t) : i;
    }
    return r;
  }
  function Ma(r, e) {
    var t = {}.toString.call(r);
    return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
  }
  function Pc(r, e) {
    return typeof r == "function" ? r.apply(void 0, e) : r;
  }
  function Mc(r, e) {
    if (e === 0) return r;
    var t;
    return function (i) {
      clearTimeout(t),
        (t = setTimeout(function () {
          r(i);
        }, e));
    };
  }
  function mh(r) {
    return r.split(/\s+/).filter(Boolean);
  }
  function sn(r) {
    return [].concat(r);
  }
  function Oc(r, e) {
    r.indexOf(e) === -1 && r.push(e);
  }
  function gh(r) {
    return r.filter(function (e, t) {
      return r.indexOf(e) === t;
    });
  }
  function vh(r) {
    return r.split("-")[0];
  }
  function Ws(r) {
    return [].slice.call(r);
  }
  function Lc(r) {
    return Object.keys(r).reduce(function (e, t) {
      return r[t] !== void 0 && (e[t] = r[t]), e;
    }, {});
  }
  function Kn() {
    return document.createElement("div");
  }
  function Gs(r) {
    return ["Element", "Fragment"].some(function (e) {
      return Ma(r, e);
    });
  }
  function _h(r) {
    return Ma(r, "NodeList");
  }
  function yh(r) {
    return Ma(r, "MouseEvent");
  }
  function wh(r) {
    return !!(r && r._tippy && r._tippy.reference === r);
  }
  function bh(r) {
    return Gs(r)
      ? [r]
      : _h(r)
      ? Ws(r)
      : Array.isArray(r)
      ? r
      : Ws(document.querySelectorAll(r));
  }
  function Oa(r, e) {
    r.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function Dc(r, e) {
    r.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function Sh(r) {
    var e,
      t = sn(r),
      i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body
      ? i.ownerDocument
      : document;
  }
  function Th(r, e) {
    var t = e.clientX,
      i = e.clientY;
    return r.every(function (n) {
      var s = n.popperRect,
        o = n.popperState,
        a = n.props,
        l = a.interactiveBorder,
        u = vh(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var d = u === "bottom" ? c.top.y : 0,
        p = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        m = u === "left" ? c.right.x : 0,
        g = s.top - i + d > l,
        y = i - s.bottom - p > l,
        w = s.left - t + f > l,
        b = t - s.right - m > l;
      return g || y || w || b;
    });
  }
  function La(r, e, t) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
      r[i](n, t);
    });
  }
  function Ic(r, e) {
    for (var t = e; t; ) {
      var i;
      if (r.contains(t)) return !0;
      t =
        t.getRootNode == null || (i = t.getRootNode()) == null
          ? void 0
          : i.host;
    }
    return !1;
  }
  var Ai = { isTouch: !1 },
    kc = 0;
  function xh() {
    Ai.isTouch ||
      ((Ai.isTouch = !0),
      window.performance && document.addEventListener("mousemove", Rc));
  }
  function Rc() {
    var r = performance.now();
    r - kc < 20 &&
      ((Ai.isTouch = !1), document.removeEventListener("mousemove", Rc)),
      (kc = r);
  }
  function Ch() {
    var r = document.activeElement;
    if (wh(r)) {
      var e = r._tippy;
      r.blur && !e.state.isVisible && r.blur();
    }
  }
  function Eh() {
    document.addEventListener("touchstart", xh, Cr),
      window.addEventListener("blur", Ch);
  }
  var Ah = typeof window != "undefined" && typeof document != "undefined",
    Ph = Ah ? !!window.msCrypto : !1,
    Mh = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Oh = {
      allowHTML: !1,
      animation: "fade",
      arrow: !0,
      content: "",
      inertia: !1,
      maxWidth: 350,
      role: "tooltip",
      theme: "",
      zIndex: 9999,
    },
    pi = Object.assign(
      {
        appendTo: Ac,
        aria: { content: "auto", expanded: "auto" },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
      },
      Mh,
      Oh
    ),
    Lh = Object.keys(pi),
    Dh = function (e) {
      var t = Object.keys(e);
      t.forEach(function (i) {
        pi[i] = e[i];
      });
    };
  function zc(r) {
    var e = r.plugins || [],
      t = e.reduce(function (i, n) {
        var s = n.name,
          o = n.defaultValue;
        if (s) {
          var a;
          i[s] = r[s] !== void 0 ? r[s] : (a = pi[s]) != null ? a : o;
        }
        return i;
      }, {});
    return Object.assign({}, r, t);
  }
  function Ih(r, e) {
    var t = e ? Object.keys(zc(Object.assign({}, pi, { plugins: e }))) : Lh,
      i = t.reduce(function (n, s) {
        var o = (r.getAttribute("data-tippy-" + s) || "").trim();
        if (!o) return n;
        if (s === "content") n[s] = o;
        else
          try {
            n[s] = JSON.parse(o);
          } catch (a) {
            n[s] = o;
          }
        return n;
      }, {});
    return i;
  }
  function Nc(r, e) {
    var t = Object.assign(
      {},
      e,
      { content: Pc(e.content, [r]) },
      e.ignoreAttributes ? {} : Ih(r, e.plugins)
    );
    return (
      (t.aria = Object.assign({}, pi.aria, t.aria)),
      (t.aria = {
        expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
        content:
          t.aria.content === "auto"
            ? e.interactive
              ? null
              : "describedby"
            : t.aria.content,
      }),
      t
    );
  }
  var kh = function () {
    return "innerHTML";
  };
  function Da(r, e) {
    r[kh()] = e;
  }
  function Fc(r) {
    var e = Kn();
    return (
      r === !0
        ? (e.className = Cc)
        : ((e.className = Ec), Gs(r) ? e.appendChild(r) : Da(e, r)),
      e
    );
  }
  function Bc(r, e) {
    Gs(e.content)
      ? (Da(r, ""), r.appendChild(e.content))
      : typeof e.content != "function" &&
        (e.allowHTML ? Da(r, e.content) : (r.textContent = e.content));
  }
  function Ia(r) {
    var e = r.firstElementChild,
      t = Ws(e.children);
    return {
      box: e,
      content: t.find(function (i) {
        return i.classList.contains(xc);
      }),
      arrow: t.find(function (i) {
        return i.classList.contains(Cc) || i.classList.contains(Ec);
      }),
      backdrop: t.find(function (i) {
        return i.classList.contains(hh);
      }),
    };
  }
  function Vc(r) {
    var e = Kn(),
      t = Kn();
    (t.className = ph),
      t.setAttribute("data-state", "hidden"),
      t.setAttribute("tabindex", "-1");
    var i = Kn();
    (i.className = xc),
      i.setAttribute("data-state", "hidden"),
      Bc(i, r.props),
      e.appendChild(t),
      t.appendChild(i),
      n(r.props, r.props);
    function n(s, o) {
      var a = Ia(e),
        l = a.box,
        u = a.content,
        c = a.arrow;
      o.theme
        ? l.setAttribute("data-theme", o.theme)
        : l.removeAttribute("data-theme"),
        typeof o.animation == "string"
          ? l.setAttribute("data-animation", o.animation)
          : l.removeAttribute("data-animation"),
        o.inertia
          ? l.setAttribute("data-inertia", "")
          : l.removeAttribute("data-inertia"),
        (l.style.maxWidth =
          typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth),
        o.role ? l.setAttribute("role", o.role) : l.removeAttribute("role"),
        (s.content !== o.content || s.allowHTML !== o.allowHTML) &&
          Bc(u, r.props),
        o.arrow
          ? c
            ? s.arrow !== o.arrow &&
              (l.removeChild(c), l.appendChild(Fc(o.arrow)))
            : l.appendChild(Fc(o.arrow))
          : c && l.removeChild(c);
    }
    return { popper: e, onUpdate: n };
  }
  Vc.$$tippy = !0;
  var Rh = 1,
    Xs = [],
    ka = [];
  function zh(r, e) {
    var t = Nc(r, Object.assign({}, pi, zc(Lc(e)))),
      i,
      n,
      s,
      o = !1,
      a = !1,
      l = !1,
      u = !1,
      c,
      d,
      p,
      f = [],
      m = Mc(Se, t.interactiveDebounce),
      g,
      y = Rh++,
      w = null,
      b = gh(t.plugins),
      C = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1,
      },
      h = {
        id: y,
        reference: r,
        popper: Kn(),
        popperInstance: w,
        props: t,
        state: C,
        plugins: b,
        clearDelayTimeouts: Jt,
        setProps: Te,
        setContent: gt,
        show: Ft,
        hide: hi,
        hideWithInteractivity: Ar,
        enable: Qt,
        disable: Oe,
        unmount: ke,
        destroy: ln,
      };
    if (!t.render) return h;
    var S = t.render(h),
      x = S.popper,
      P = S.onUpdate;
    x.setAttribute("data-tippy-root", ""),
      (x.id = "tippy-" + h.id),
      (h.popper = x),
      (r._tippy = h),
      (x._tippy = h);
    var M = b.map(function (F) {
        return F.fn(h);
      }),
      I = r.hasAttribute("aria-expanded");
    return (
      Ie(),
      A(),
      O(),
      D("onCreate", [h]),
      t.showOnCreate && Pt(),
      x.addEventListener("mouseenter", function () {
        h.props.interactive && h.state.isVisible && h.clearDelayTimeouts();
      }),
      x.addEventListener("mouseleave", function () {
        h.props.interactive &&
          h.props.trigger.indexOf("mouseenter") >= 0 &&
          _().addEventListener("mousemove", m);
      }),
      h
    );
    function L() {
      var F = h.props.touch;
      return Array.isArray(F) ? F : [F, 0];
    }
    function R() {
      return L()[0] === "hold";
    }
    function E() {
      var F;
      return !!((F = h.props.render) != null && F.$$tippy);
    }
    function N() {
      return g || r;
    }
    function _() {
      var F = N().parentNode;
      return F ? Sh(F) : document;
    }
    function v() {
      return Ia(x);
    }
    function T(F) {
      return (h.state.isMounted && !h.state.isVisible) ||
        Ai.isTouch ||
        (c && c.type === "focus")
        ? 0
        : Pa(h.props.delay, F ? 0 : 1, pi.delay);
    }
    function O(F) {
      F === void 0 && (F = !1),
        (x.style.pointerEvents = h.props.interactive && !F ? "" : "none"),
        (x.style.zIndex = "" + h.props.zIndex);
    }
    function D(F, H, X) {
      if (
        (X === void 0 && (X = !0),
        M.forEach(function (ie) {
          ie[F] && ie[F].apply(ie, H);
        }),
        X)
      ) {
        var le;
        (le = h.props)[F].apply(le, H);
      }
    }
    function k() {
      var F = h.props.aria;
      if (F.content) {
        var H = "aria-" + F.content,
          X = x.id,
          le = sn(h.props.triggerTarget || r);
        le.forEach(function (ie) {
          var Y = ie.getAttribute(H);
          if (h.state.isVisible) ie.setAttribute(H, Y ? Y + " " + X : X);
          else {
            var He = Y && Y.replace(X, "").trim();
            He ? ie.setAttribute(H, He) : ie.removeAttribute(H);
          }
        });
      }
    }
    function A() {
      if (!(I || !h.props.aria.expanded)) {
        var F = sn(h.props.triggerTarget || r);
        F.forEach(function (H) {
          h.props.interactive
            ? H.setAttribute(
                "aria-expanded",
                h.state.isVisible && H === N() ? "true" : "false"
              )
            : H.removeAttribute("aria-expanded");
        });
      }
    }
    function V() {
      _().removeEventListener("mousemove", m),
        (Xs = Xs.filter(function (F) {
          return F !== m;
        }));
    }
    function W(F) {
      if (!(Ai.isTouch && (l || F.type === "mousedown"))) {
        var H = (F.composedPath && F.composedPath()[0]) || F.target;
        if (!(h.props.interactive && Ic(x, H))) {
          if (
            sn(h.props.triggerTarget || r).some(function (X) {
              return Ic(X, H);
            })
          ) {
            if (
              Ai.isTouch ||
              (h.state.isVisible && h.props.trigger.indexOf("click") >= 0)
            )
              return;
          } else D("onClickOutside", [h, F]);
          h.props.hideOnClick === !0 &&
            (h.clearDelayTimeouts(),
            h.hide(),
            (a = !0),
            setTimeout(function () {
              a = !1;
            }),
            h.state.isMounted || de());
        }
      }
    }
    function J() {
      l = !0;
    }
    function K() {
      l = !1;
    }
    function re() {
      var F = _();
      F.addEventListener("mousedown", W, !0),
        F.addEventListener("touchend", W, Cr),
        F.addEventListener("touchstart", K, Cr),
        F.addEventListener("touchmove", J, Cr);
    }
    function de() {
      var F = _();
      F.removeEventListener("mousedown", W, !0),
        F.removeEventListener("touchend", W, Cr),
        F.removeEventListener("touchstart", K, Cr),
        F.removeEventListener("touchmove", J, Cr);
    }
    function fe(F, H) {
      Me(F, function () {
        !h.state.isVisible && x.parentNode && x.parentNode.contains(x) && H();
      });
    }
    function ge(F, H) {
      Me(F, H);
    }
    function Me(F, H) {
      var X = v().box;
      function le(ie) {
        ie.target === X && (La(X, "remove", le), H());
      }
      if (F === 0) return H();
      La(X, "remove", d), La(X, "add", le), (d = le);
    }
    function ot(F, H, X) {
      X === void 0 && (X = !1);
      var le = sn(h.props.triggerTarget || r);
      le.forEach(function (ie) {
        ie.addEventListener(F, H, X),
          f.push({ node: ie, eventType: F, handler: H, options: X });
      });
    }
    function Ie() {
      R() &&
        (ot("touchstart", se, { passive: !0 }),
        ot("touchend", Ye, { passive: !0 })),
        mh(h.props.trigger).forEach(function (F) {
          if (F !== "manual")
            switch ((ot(F, se), F)) {
              case "mouseenter":
                ot("mouseleave", Ye);
                break;
              case "focus":
                ot(Ph ? "focusout" : "blur", je);
                break;
              case "focusin":
                ot("focusout", je);
                break;
            }
        });
    }
    function Xe() {
      f.forEach(function (F) {
        var H = F.node,
          X = F.eventType,
          le = F.handler,
          ie = F.options;
        H.removeEventListener(X, le, ie);
      }),
        (f = []);
    }
    function se(F) {
      var H,
        X = !1;
      if (!(!h.state.isEnabled || z(F) || a)) {
        var le = ((H = c) == null ? void 0 : H.type) === "focus";
        (c = F),
          (g = F.currentTarget),
          A(),
          !h.state.isVisible &&
            yh(F) &&
            Xs.forEach(function (ie) {
              return ie(F);
            }),
          F.type === "click" &&
          (h.props.trigger.indexOf("mouseenter") < 0 || o) &&
          h.props.hideOnClick !== !1 &&
          h.state.isVisible
            ? (X = !0)
            : Pt(F),
          F.type === "click" && (o = !X),
          X && !le && mt(F);
      }
    }
    function Se(F) {
      var H = F.target,
        X = N().contains(H) || x.contains(H);
      if (!(F.type === "mousemove" && X)) {
        var le = pe()
          .concat(x)
          .map(function (ie) {
            var Y,
              He = ie._tippy,
              it = (Y = He.popperInstance) == null ? void 0 : Y.state;
            return it
              ? {
                  popperRect: ie.getBoundingClientRect(),
                  popperState: it,
                  props: t,
                }
              : null;
          })
          .filter(Boolean);
        Th(le, F) && (V(), mt(F));
      }
    }
    function Ye(F) {
      var H = z(F) || (h.props.trigger.indexOf("click") >= 0 && o);
      if (!H) {
        if (h.props.interactive) {
          h.hideWithInteractivity(F);
          return;
        }
        mt(F);
      }
    }
    function je(F) {
      (h.props.trigger.indexOf("focusin") < 0 && F.target !== N()) ||
        (h.props.interactive &&
          F.relatedTarget &&
          x.contains(F.relatedTarget)) ||
        mt(F);
    }
    function z(F) {
      return Ai.isTouch ? R() !== F.type.indexOf("touch") >= 0 : !1;
    }
    function et() {
      Nt();
      var F = h.props,
        H = F.popperOptions,
        X = F.placement,
        le = F.offset,
        ie = F.getReferenceClientRect,
        Y = F.moveTransition,
        He = E() ? Ia(x).arrow : null,
        it = ie
          ? {
              getBoundingClientRect: ie,
              contextElement: ie.contextElement || N(),
            }
          : r,
        Bt = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (gi) {
            var vt = gi.state;
            if (E()) {
              var Pr = v(),
                Z = Pr.box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                G
              ) {
                G === "placement"
                  ? Z.setAttribute("data-placement", vt.placement)
                  : vt.attributes.popper["data-popper-" + G]
                  ? Z.setAttribute("data-" + G, "")
                  : Z.removeAttribute("data-" + G);
              }),
                (vt.attributes.popper = {});
            }
          },
        },
        Ue = [
          { name: "offset", options: { offset: le } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !Y } },
          Bt,
        ];
      E() &&
        He &&
        Ue.push({ name: "arrow", options: { element: He, padding: 3 } }),
        Ue.push.apply(Ue, (H == null ? void 0 : H.modifiers) || []),
        (h.popperInstance = fh(
          it,
          x,
          Object.assign({}, H, {
            placement: X,
            onFirstUpdate: p,
            modifiers: Ue,
          })
        ));
    }
    function Nt() {
      h.popperInstance &&
        (h.popperInstance.destroy(), (h.popperInstance = null));
    }
    function tt() {
      var F = h.props.appendTo,
        H,
        X = N();
      (h.props.interactive && F === Ac) || F === "parent"
        ? (H = X.parentNode)
        : (H = Pc(F, [X])),
        H.contains(x) || H.appendChild(x),
        (h.state.isMounted = !0),
        et();
    }
    function pe() {
      return Ws(x.querySelectorAll("[data-tippy-root]"));
    }
    function Pt(F) {
      h.clearDelayTimeouts(), F && D("onTrigger", [h, F]), re();
      var H = T(!0),
        X = L(),
        le = X[0],
        ie = X[1];
      Ai.isTouch && le === "hold" && ie && (H = ie),
        H
          ? (i = setTimeout(function () {
              h.show();
            }, H))
          : h.show();
    }
    function mt(F) {
      if (
        (h.clearDelayTimeouts(), D("onUntrigger", [h, F]), !h.state.isVisible)
      ) {
        de();
        return;
      }
      if (
        !(
          h.props.trigger.indexOf("mouseenter") >= 0 &&
          h.props.trigger.indexOf("click") >= 0 &&
          ["mouseleave", "mousemove"].indexOf(F.type) >= 0 &&
          o
        )
      ) {
        var H = T(!1);
        H
          ? (n = setTimeout(function () {
              h.state.isVisible && h.hide();
            }, H))
          : (s = requestAnimationFrame(function () {
              h.hide();
            }));
      }
    }
    function Qt() {
      h.state.isEnabled = !0;
    }
    function Oe() {
      h.hide(), (h.state.isEnabled = !1);
    }
    function Jt() {
      clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
    }
    function Te(F) {
      if (!h.state.isDestroyed) {
        D("onBeforeUpdate", [h, F]), Xe();
        var H = h.props,
          X = Nc(r, Object.assign({}, H, Lc(F), { ignoreAttributes: !0 }));
        (h.props = X),
          Ie(),
          H.interactiveDebounce !== X.interactiveDebounce &&
            (V(), (m = Mc(Se, X.interactiveDebounce))),
          H.triggerTarget && !X.triggerTarget
            ? sn(H.triggerTarget).forEach(function (le) {
                le.removeAttribute("aria-expanded");
              })
            : X.triggerTarget && r.removeAttribute("aria-expanded"),
          A(),
          O(),
          P && P(H, X),
          h.popperInstance &&
            (et(),
            pe().forEach(function (le) {
              requestAnimationFrame(le._tippy.popperInstance.forceUpdate);
            })),
          D("onAfterUpdate", [h, F]);
      }
    }
    function gt(F) {
      h.setProps({ content: F });
    }
    function Ft() {
      var F = h.state.isVisible,
        H = h.state.isDestroyed,
        X = !h.state.isEnabled,
        le = Ai.isTouch && !h.props.touch,
        ie = Pa(h.props.duration, 0, pi.duration);
      if (
        !(F || H || X || le) &&
        !N().hasAttribute("disabled") &&
        (D("onShow", [h], !1), h.props.onShow(h) !== !1)
      ) {
        if (
          ((h.state.isVisible = !0),
          E() && (x.style.visibility = "visible"),
          O(),
          re(),
          h.state.isMounted || (x.style.transition = "none"),
          E())
        ) {
          var Y = v(),
            He = Y.box,
            it = Y.content;
          Oa([He, it], 0);
        }
        (p = function () {
          var Ue;
          if (!(!h.state.isVisible || u)) {
            if (
              ((u = !0),
              x.offsetHeight,
              (x.style.transition = h.props.moveTransition),
              E() && h.props.animation)
            ) {
              var mi = v(),
                gi = mi.box,
                vt = mi.content;
              Oa([gi, vt], ie), Dc([gi, vt], "visible");
            }
            k(),
              A(),
              Oc(ka, h),
              (Ue = h.popperInstance) == null || Ue.forceUpdate(),
              D("onMount", [h]),
              h.props.animation &&
                E() &&
                ge(ie, function () {
                  (h.state.isShown = !0), D("onShown", [h]);
                });
          }
        }),
          tt();
      }
    }
    function hi() {
      var F = !h.state.isVisible,
        H = h.state.isDestroyed,
        X = !h.state.isEnabled,
        le = Pa(h.props.duration, 1, pi.duration);
      if (!(F || H || X) && (D("onHide", [h], !1), h.props.onHide(h) !== !1)) {
        if (
          ((h.state.isVisible = !1),
          (h.state.isShown = !1),
          (u = !1),
          (o = !1),
          E() && (x.style.visibility = "hidden"),
          V(),
          de(),
          O(!0),
          E())
        ) {
          var ie = v(),
            Y = ie.box,
            He = ie.content;
          h.props.animation && (Oa([Y, He], le), Dc([Y, He], "hidden"));
        }
        k(), A(), h.props.animation ? E() && fe(le, h.unmount) : h.unmount();
      }
    }
    function Ar(F) {
      _().addEventListener("mousemove", m), Oc(Xs, m), m(F);
    }
    function ke() {
      h.state.isVisible && h.hide(),
        h.state.isMounted &&
          (Nt(),
          pe().forEach(function (F) {
            F._tippy.unmount();
          }),
          x.parentNode && x.parentNode.removeChild(x),
          (ka = ka.filter(function (F) {
            return F !== h;
          })),
          (h.state.isMounted = !1),
          D("onHidden", [h]));
    }
    function ln() {
      h.state.isDestroyed ||
        (h.clearDelayTimeouts(),
        h.unmount(),
        Xe(),
        delete r._tippy,
        (h.state.isDestroyed = !0),
        D("onDestroy", [h]));
    }
  }
  function Zn(r, e) {
    e === void 0 && (e = {});
    var t = pi.plugins.concat(e.plugins || []);
    Eh();
    var i = Object.assign({}, e, { plugins: t }),
      n = bh(r),
      s = n.reduce(function (o, a) {
        var l = a && zh(a, i);
        return l && o.push(l), o;
      }, []);
    return Gs(r) ? s[0] : s;
  }
  (Zn.defaultProps = pi),
    (Zn.setDefaultProps = Dh),
    (Zn.currentInput = Ai),
    Object.assign({}, lc, {
      effect: function (e) {
        var t = e.state,
          i = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, i.popper),
          (t.styles = i),
          t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
      },
    }),
    Zn.setDefaultProps({ render: Vc });
  const Nh = () => {
      const r = document.querySelectorAll("[data-tooltip]"),
        e = window.innerWidth < 768;
      r.forEach((t) => {
        Zn(t, {
          content: t.getAttribute("data-tooltip"),
          placement: e ? "top" : "right",
          animation: "shift-away",
          arrow: !1,
          theme: "hm-tooltip",
          interactive: !0,
        });
      });
    },
    Fh = () => {
      Nh();
    };
  j.registerPlugin(Q);
  let Ra = [],
    $c;
  const Hc = () => {
      Ra.forEach((t) => t.kill()), (Ra = []);
      const r = Array.from(
          document.querySelectorAll('[sticky-card="component"]')
        ),
        e = window.innerWidth < 768;
      r.forEach((t, i) => {
        const s = r.length - 1 - i,
          o = Math.max(0.85, 1 - s * 0.04),
          a = Math.max(0.85, 1 - s * 0.04),
          l = -s * 30,
          u = -s * 10,
          c = j.timeline({
            scrollTrigger: {
              trigger: t,
              start: "top 33%",
              end: "bottom 7%",
              scrub: 0.1,
              markers: !1,
            },
          });
        c.to(t, {
          scale: e ? a : o,
          y: e ? u : l,
          rotateX: s * 1,
          filter: `blur(${s * 0.05}px)`,
          backdropFilter: `blur(${s * 0.05}px)`,
          transformOrigin: "center top",
          ease: "power2.out",
          duration: 4,
        }),
          Ra.push(c.scrollTrigger);
      });
    },
    Bh = () => {
      Hc(),
        window.addEventListener("resize", () => {
          clearTimeout($c),
            ($c = setTimeout(() => {
              Hc(), Q.refresh();
            }, 150));
        });
    };
  function qc(r) {
    return (
      r !== null &&
      typeof r == "object" &&
      "constructor" in r &&
      r.constructor === Object
    );
  }
  function za(r, e) {
    r === void 0 && (r = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof r[i] == "undefined"
          ? (r[i] = e[i])
          : qc(e[i]) &&
            qc(r[i]) &&
            Object.keys(e[i]).length > 0 &&
            za(r[i], e[i]);
      });
  }
  const Wc = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function di() {
    const r = typeof document != "undefined" ? document : {};
    return za(r, Wc), r;
  }
  const Vh = {
    document: Wc,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(r) {
      return typeof setTimeout == "undefined" ? (r(), null) : setTimeout(r, 0);
    },
    cancelAnimationFrame(r) {
      typeof setTimeout != "undefined" && clearTimeout(r);
    },
  };
  function ht() {
    const r = typeof window != "undefined" ? window : {};
    return za(r, Vh), r;
  }
  function er(r) {
    return (
      r === void 0 && (r = ""),
      r
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function $h(r) {
    const e = r;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch (i) {}
      try {
        delete e[t];
      } catch (i) {}
    });
  }
  function Ys(r, e) {
    return e === void 0 && (e = 0), setTimeout(r, e);
  }
  function js() {
    return Date.now();
  }
  function Hh(r) {
    const e = ht();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(r, null)),
      !t && r.currentStyle && (t = r.currentStyle),
      t || (t = r.style),
      t
    );
  }
  function qh(r, e) {
    e === void 0 && (e = "x");
    const t = ht();
    let i, n, s;
    const o = Hh(r);
    return (
      t.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (s = new t.WebKitCSSMatrix(n === "none" ? "" : n)))
        : ((s =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (n = s.m41)
          : i.length === 16
          ? (n = parseFloat(i[12]))
          : (n = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (n = s.m42)
          : i.length === 16
          ? (n = parseFloat(i[13]))
          : (n = parseFloat(i[5]))),
      n || 0
    );
  }
  function Us(r) {
    return (
      typeof r == "object" &&
      r !== null &&
      r.constructor &&
      Object.prototype.toString.call(r).slice(8, -1) === "Object"
    );
  }
  function Wh(r) {
    return typeof window != "undefined" &&
      typeof window.HTMLElement != "undefined"
      ? r instanceof HTMLElement
      : r && (r.nodeType === 1 || r.nodeType === 11);
  }
  function Kt() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Wh(i)) {
        const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = n.length; s < o; s += 1) {
          const a = n[s],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (Us(r[a]) && Us(i[a])
              ? i[a].__swiper__
                ? (r[a] = i[a])
                : Kt(r[a], i[a])
              : !Us(r[a]) && Us(i[a])
              ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Kt(r[a], i[a]))
              : (r[a] = i[a]));
        }
      }
    }
    return r;
  }
  function Ks(r, e, t) {
    r.style.setProperty(e, t);
  }
  function Gc(r) {
    let { swiper: e, targetPosition: t, side: i } = r;
    const n = ht(),
      s = -e.translate;
    let o = null,
      a;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > s ? "next" : "prev",
      c = (p, f) => (u === "next" && p >= f) || (u === "prev" && p <= f),
      d = () => {
        (a = new Date().getTime()), o === null && (o = a);
        const p = Math.max(Math.min((a - o) / l, 1), 0),
          f = 0.5 - Math.cos(p * Math.PI) / 2;
        let m = s + f * (t - s);
        if ((c(m, t) && (m = t), e.wrapperEl.scrollTo({ [i]: m }), c(m, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: m });
            }),
            n.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = n.requestAnimationFrame(d);
      };
    d();
  }
  function Pi(r, e) {
    e === void 0 && (e = "");
    const t = ht(),
      i = [...r.children];
    return (
      t.HTMLSlotElement &&
        r instanceof HTMLSlotElement &&
        i.push(...r.assignedElements()),
      e ? i.filter((n) => n.matches(e)) : i
    );
  }
  function Gh(r, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (r === i) return !0;
      t.push(
        ...i.children,
        ...(i.shadowRoot ? i.shadowRoot.children : []),
        ...(i.assignedElements ? i.assignedElements() : [])
      );
    }
  }
  function Xh(r, e) {
    const t = ht();
    let i = e.contains(r);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(r)), i || (i = Gh(r, e))),
      i
    );
  }
  function Zs(r) {
    try {
      console.warn(r);
      return;
    } catch (e) {}
  }
  function Qn(r, e) {
    e === void 0 && (e = []);
    const t = document.createElement(r);
    return t.classList.add(...(Array.isArray(e) ? e : er(e))), t;
  }
  function Yh(r) {
    const e = ht(),
      t = di(),
      i = r.getBoundingClientRect(),
      n = t.body,
      s = r.clientTop || n.clientTop || 0,
      o = r.clientLeft || n.clientLeft || 0,
      a = r === e ? e.scrollY : r.scrollTop,
      l = r === e ? e.scrollX : r.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  function jh(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
      const i = r.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function Uh(r, e) {
    const t = [];
    for (; r.nextElementSibling; ) {
      const i = r.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function tr(r, e) {
    return ht().getComputedStyle(r, null).getPropertyValue(e);
  }
  function Xc(r) {
    let e = r,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Kh(r, e) {
    const t = [];
    let i = r.parentElement;
    for (; i; ) t.push(i), (i = i.parentElement);
    return t;
  }
  function Yc(r, e, t) {
    const i = ht();
    return (
      r[e === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(r, null)
          .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(r, null)
          .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function Zh(r) {
    return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
  }
  let Na;
  function Qh() {
    const r = ht(),
      e = di();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in r ||
        (r.DocumentTouch && e instanceof r.DocumentTouch)
      ),
    };
  }
  function jc() {
    return Na || (Na = Qh()), Na;
  }
  let Fa;
  function Jh(r) {
    let { userAgent: e } = r === void 0 ? {} : r;
    const t = jc(),
      i = ht(),
      n = i.navigator.platform,
      s = e || i.navigator.userAgent,
      o = { ios: !1, android: !1 },
      a = i.screen.width,
      l = i.screen.height,
      u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      f = n === "Win32";
    let m = n === "MacIntel";
    const g = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        m &&
        t.touch &&
        g.indexOf(`${a}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (m = !1)),
      u && !f && ((o.os = "android"), (o.android = !0)),
      (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function Uc(r) {
    return r === void 0 && (r = {}), Fa || (Fa = Jh(r)), Fa;
  }
  let Ba;
  function em() {
    const r = ht(),
      e = Uc();
    let t = !1;
    function i() {
      const a = r.navigator.userAgent.toLowerCase();
      return (
        a.indexOf("safari") >= 0 &&
        a.indexOf("chrome") < 0 &&
        a.indexOf("android") < 0
      );
    }
    if (i()) {
      const a = String(r.navigator.userAgent);
      if (a.includes("Version/")) {
        const [l, u] = a
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = l < 16 || (l === 16 && u < 2);
      }
    }
    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        r.navigator.userAgent
      ),
      s = i(),
      o = s || (n && e.ios);
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: o,
      isWebView: n,
    };
  }
  function Kc() {
    return Ba || (Ba = em()), Ba;
  }
  function tm(r) {
    let { swiper: e, on: t, emit: i } = r;
    const n = ht();
    let s = null,
      o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((d) => {
            o = n.requestAnimationFrame(() => {
              const { width: p, height: f } = e;
              let m = p,
                g = f;
              d.forEach((y) => {
                let { contentBoxSize: w, contentRect: b, target: C } = y;
                (C && C !== e.el) ||
                  ((m = b ? b.width : (w[0] || w).inlineSize),
                  (g = b ? b.height : (w[0] || w).blockSize));
              }),
                (m !== p || g !== f) && a();
            });
          })),
          s.observe(e.el));
      },
      u = () => {
        o && n.cancelAnimationFrame(o),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof n.ResizeObserver != "undefined") {
        l();
        return;
      }
      n.addEventListener("resize", a),
        n.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          n.removeEventListener("resize", a),
          n.removeEventListener("orientationchange", c);
      });
  }
  function im(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = [],
      o = ht(),
      a = function (c, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver,
          f = new p((m) => {
            if (e.__preventObserver__) return;
            if (m.length === 1) {
              n("observerUpdate", m[0]);
              return;
            }
            const g = function () {
              n("observerUpdate", m[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(g)
              : o.setTimeout(g, 0);
          });
        f.observe(c, {
          attributes: typeof d.attributes == "undefined" ? !0 : d.attributes,
          childList:
            e.isElement ||
            (typeof d.childList == "undefined" ? !0 : d).childList,
          characterData:
            typeof d.characterData == "undefined" ? !0 : d.characterData,
        }),
          s.push(f);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Kh(e.hostEl);
            for (let d = 0; d < c.length; d += 1) a(c[d]);
          }
          a(e.hostEl, { childList: e.params.observeSlideChildren }),
            a(e.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        s.forEach((c) => {
          c.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", u);
  }
  var rm = {
    on(r, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const n = t ? "unshift" : "push";
      return (
        r.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][n](e);
        }),
        i
      );
    },
    once(r, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function n() {
        i.off(r, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
          o[a] = arguments[a];
        e.apply(i, o);
      }
      return (n.__emitterProxy = e), i.on(r, n, t);
    },
    onAny(r, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof r != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[i](r), t
      );
    },
    offAny(r) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(r);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(r, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          r.split(" ").forEach((i) => {
            typeof e == "undefined"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((n, s) => {
                  (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(s, 1);
                });
          }),
        t
      );
    },
    emit() {
      const r = this;
      if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
      let e, t, i;
      for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
        s[o] = arguments[o];
      return (
        typeof s[0] == "string" || Array.isArray(s[0])
          ? ((e = s[0]), (t = s.slice(1, s.length)), (i = r))
          : ((e = s[0].events), (t = s[0].data), (i = s[0].context || r)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          r.eventsAnyListeners &&
            r.eventsAnyListeners.length &&
            r.eventsAnyListeners.forEach((u) => {
              u.apply(i, [l, ...t]);
            }),
            r.eventsListeners &&
              r.eventsListeners[l] &&
              r.eventsListeners[l].forEach((u) => {
                u.apply(i, t);
              });
        }),
        r
      );
    },
  };
  function nm() {
    const r = this;
    let e, t;
    const i = r.el;
    typeof r.params.width != "undefined" && r.params.width !== null
      ? (e = r.params.width)
      : (e = i.clientWidth),
      typeof r.params.height != "undefined" && r.params.height !== null
        ? (t = r.params.height)
        : (t = i.clientHeight),
      !((e === 0 && r.isHorizontal()) || (t === 0 && r.isVertical())) &&
        ((e =
          e -
          parseInt(tr(i, "padding-left") || 0, 10) -
          parseInt(tr(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(tr(i, "padding-top") || 0, 10) -
          parseInt(tr(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(r, {
          width: e,
          height: t,
          size: r.isHorizontal() ? e : t,
        }));
  }
  function sm() {
    const r = this;
    function e(L, R) {
      return parseFloat(L.getPropertyValue(r.getDirectionLabel(R)) || 0);
    }
    const t = r.params,
      { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
      l = r.virtual && t.virtual.enabled,
      u = l ? r.virtual.slides.length : r.slides.length,
      c = Pi(n, `.${r.params.slideClass}, swiper-slide`),
      d = l ? r.virtual.slides.length : c.length;
    let p = [];
    const f = [],
      m = [];
    let g = t.slidesOffsetBefore;
    typeof g == "function" && (g = t.slidesOffsetBefore.call(r));
    let y = t.slidesOffsetAfter;
    typeof y == "function" && (y = t.slidesOffsetAfter.call(r));
    const w = r.snapGrid.length,
      b = r.slidesGrid.length;
    let C = t.spaceBetween,
      h = -g,
      S = 0,
      x = 0;
    if (typeof s == "undefined") return;
    typeof C == "string" && C.indexOf("%") >= 0
      ? (C = (parseFloat(C.replace("%", "")) / 100) * s)
      : typeof C == "string" && (C = parseFloat(C)),
      (r.virtualSize = -C),
      c.forEach((L) => {
        o ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
          (L.style.marginBottom = ""),
          (L.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Ks(i, "--swiper-centered-offset-before", ""),
        Ks(i, "--swiper-centered-offset-after", ""));
    const P = t.grid && t.grid.rows > 1 && r.grid;
    P ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
    let M;
    const I =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (L) => typeof t.breakpoints[L].slidesPerView != "undefined"
      ).length > 0;
    for (let L = 0; L < d; L += 1) {
      M = 0;
      let R;
      if (
        (c[L] && (R = c[L]),
        P && r.grid.updateSlide(L, R, c),
        !(c[L] && tr(R, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          I && (c[L].style[r.getDirectionLabel("width")] = "");
          const E = getComputedStyle(R),
            N = R.style.transform,
            _ = R.style.webkitTransform;
          if (
            (N && (R.style.transform = "none"),
            _ && (R.style.webkitTransform = "none"),
            t.roundLengths)
          )
            M = r.isHorizontal() ? Yc(R, "width") : Yc(R, "height");
          else {
            const v = e(E, "width"),
              T = e(E, "padding-left"),
              O = e(E, "padding-right"),
              D = e(E, "margin-left"),
              k = e(E, "margin-right"),
              A = E.getPropertyValue("box-sizing");
            if (A && A === "border-box") M = v + D + k;
            else {
              const { clientWidth: V, offsetWidth: W } = R;
              M = v + T + O + D + k + (W - V);
            }
          }
          N && (R.style.transform = N),
            _ && (R.style.webkitTransform = _),
            t.roundLengths && (M = Math.floor(M));
        } else
          (M = (s - (t.slidesPerView - 1) * C) / t.slidesPerView),
            t.roundLengths && (M = Math.floor(M)),
            c[L] && (c[L].style[r.getDirectionLabel("width")] = `${M}px`);
        c[L] && (c[L].swiperSlideSize = M),
          m.push(M),
          t.centeredSlides
            ? ((h = h + M / 2 + S / 2 + C),
              S === 0 && L !== 0 && (h = h - s / 2 - C),
              L === 0 && (h = h - s / 2 - C),
              Math.abs(h) < 1 / 1e3 && (h = 0),
              t.roundLengths && (h = Math.floor(h)),
              x % t.slidesPerGroup === 0 && p.push(h),
              f.push(h))
            : (t.roundLengths && (h = Math.floor(h)),
              (x - Math.min(r.params.slidesPerGroupSkip, x)) %
                r.params.slidesPerGroup ===
                0 && p.push(h),
              f.push(h),
              (h = h + M + C)),
          (r.virtualSize += M + C),
          (S = M),
          (x += 1);
      }
    }
    if (
      ((r.virtualSize = Math.max(r.virtualSize, s) + y),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${r.virtualSize + C}px`),
      t.setWrapperSize &&
        (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + C}px`),
      P && r.grid.updateWrapperSize(M, p),
      !t.centeredSlides)
    ) {
      const L = [];
      for (let R = 0; R < p.length; R += 1) {
        let E = p[R];
        t.roundLengths && (E = Math.floor(E)),
          p[R] <= r.virtualSize - s && L.push(E);
      }
      (p = L),
        Math.floor(r.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(r.virtualSize - s);
    }
    if (l && t.loop) {
      const L = m[0] + C;
      if (t.slidesPerGroup > 1) {
        const R = Math.ceil(
            (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
          ),
          E = L * t.slidesPerGroup;
        for (let N = 0; N < R; N += 1) p.push(p[p.length - 1] + E);
      }
      for (
        let R = 0;
        R < r.virtual.slidesBefore + r.virtual.slidesAfter;
        R += 1
      )
        t.slidesPerGroup === 1 && p.push(p[p.length - 1] + L),
          f.push(f[f.length - 1] + L),
          (r.virtualSize += L);
    }
    if ((p.length === 0 && (p = [0]), C !== 0)) {
      const L =
        r.isHorizontal() && o
          ? "marginLeft"
          : r.getDirectionLabel("marginRight");
      c.filter((R, E) =>
        !t.cssMode || t.loop ? !0 : E !== c.length - 1
      ).forEach((R) => {
        R.style[L] = `${C}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let L = 0;
      m.forEach((E) => {
        L += E + (C || 0);
      }),
        (L -= C);
      const R = L > s ? L - s : 0;
      p = p.map((E) => (E <= 0 ? -g : E > R ? R + y : E));
    }
    if (t.centerInsufficientSlides) {
      let L = 0;
      m.forEach((E) => {
        L += E + (C || 0);
      }),
        (L -= C);
      const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (L + R < s) {
        const E = (s - L - R) / 2;
        p.forEach((N, _) => {
          p[_] = N - E;
        }),
          f.forEach((N, _) => {
            f[_] = N + E;
          });
      }
    }
    if (
      (Object.assign(r, {
        slides: c,
        snapGrid: p,
        slidesGrid: f,
        slidesSizesGrid: m,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Ks(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        Ks(
          i,
          "--swiper-centered-offset-after",
          `${r.size / 2 - m[m.length - 1] / 2}px`
        );
      const L = -r.snapGrid[0],
        R = -r.slidesGrid[0];
      (r.snapGrid = r.snapGrid.map((E) => E + L)),
        (r.slidesGrid = r.slidesGrid.map((E) => E + R));
    }
    if (
      (d !== u && r.emit("slidesLengthChange"),
      p.length !== w &&
        (r.params.watchOverflow && r.checkOverflow(),
        r.emit("snapGridLengthChange")),
      f.length !== b && r.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && r.updateSlidesOffset(),
      r.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const L = `${t.containerModifierClass}backface-hidden`,
        R = r.el.classList.contains(L);
      d <= t.maxBackfaceHiddenSlides
        ? R || r.el.classList.add(L)
        : R && r.el.classList.remove(L);
    }
  }
  function om(r) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let n = 0,
      s;
    typeof r == "number"
      ? e.setTransition(r)
      : r === !0 && e.setTransition(e.params.speed);
    const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((a) => {
          t.push(a);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const a = e.activeIndex + s;
          if (a > e.slides.length && !i) break;
          t.push(o(a));
        }
    else t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] != "undefined") {
        const a = t[s].offsetHeight;
        n = a > n ? a : n;
      }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
  }
  function am() {
    const r = this,
      e = r.slides,
      t = r.isElement
        ? r.isHorizontal()
          ? r.wrapperEl.offsetLeft
          : r.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (r.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        r.cssOverflowAdjustment();
  }
  const Zc = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function lm(r) {
    r === void 0 && (r = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: n, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let o = -r;
    n && (o = r), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      let c = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
      const d =
          (o + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + a),
        p =
          (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + a),
        f = -(o - c),
        m = f + e.slidesSizesGrid[l],
        g = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
        y =
          (f >= 0 && f < e.size - 1) ||
          (m > 1 && m <= e.size) ||
          (f <= 0 && m >= e.size);
      y && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        Zc(u, y, t.slideVisibleClass),
        Zc(u, g, t.slideFullyVisibleClass),
        (u.progress = n ? -d : d),
        (u.originalProgress = n ? -p : p);
    }
  }
  function um(r) {
    const e = this;
    if (typeof r == "undefined") {
      const c = e.rtlTranslate ? -1 : 1;
      r = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: n, isBeginning: s, isEnd: o, progressLoop: a } = e;
    const l = s,
      u = o;
    if (i === 0) (n = 0), (s = !0), (o = !0);
    else {
      n = (r - e.minTranslate()) / i;
      const c = Math.abs(r - e.minTranslate()) < 1,
        d = Math.abs(r - e.maxTranslate()) < 1;
      (s = c || n <= 0), (o = d || n >= 1), c && (n = 0), d && (n = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        d = e.getSlideIndexByData(e.slides.length - 1),
        p = e.slidesGrid[c],
        f = e.slidesGrid[d],
        m = e.slidesGrid[e.slidesGrid.length - 1],
        g = Math.abs(r);
      g >= p ? (a = (g - p) / m) : (a = (g + m - f) / m), a > 1 && (a -= 1);
    }
    Object.assign(e, {
      progress: n,
      progressLoop: a,
      isBeginning: s,
      isEnd: o,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(r),
      s && !l && e.emit("reachBeginning toEdge"),
      o && !u && e.emit("reachEnd toEdge"),
      ((l && !s) || (u && !o)) && e.emit("fromEdge"),
      e.emit("progress", n);
  }
  const Va = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function cm() {
    const r = this,
      { slides: e, params: t, slidesEl: i, activeIndex: n } = r,
      s = r.virtual && t.virtual.enabled,
      o = r.grid && t.grid && t.grid.rows > 1,
      a = (d) => Pi(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
    let l, u, c;
    if (s)
      if (t.loop) {
        let d = n - r.virtual.slidesBefore;
        d < 0 && (d = r.virtual.slides.length + d),
          d >= r.virtual.slides.length && (d -= r.virtual.slides.length),
          (l = a(`[data-swiper-slide-index="${d}"]`));
      } else l = a(`[data-swiper-slide-index="${n}"]`);
    else
      o
        ? ((l = e.find((d) => d.column === n)),
          (c = e.find((d) => d.column === n + 1)),
          (u = e.find((d) => d.column === n - 1)))
        : (l = e[n]);
    l &&
      (o ||
        ((c = Uh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = jh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((d) => {
        Va(d, d === l, t.slideActiveClass),
          Va(d, d === c, t.slideNextClass),
          Va(d, d === u, t.slidePrevClass);
      }),
      r.emitSlidesClasses();
  }
  const Qs = (r, e) => {
      if (!r || r.destroyed || !r.params) return;
      const t = () =>
          r.isElement ? "swiper-slide" : `.${r.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let n = i.querySelector(`.${r.params.lazyPreloaderClass}`);
        !n &&
          r.isElement &&
          (i.shadowRoot
            ? (n = i.shadowRoot.querySelector(
                `.${r.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((n = i.shadowRoot.querySelector(
                    `.${r.params.lazyPreloaderClass}`
                  )),
                  n && n.remove());
              })),
          n && n.remove();
      }
    },
    $a = (r, e) => {
      if (!r.slides[e]) return;
      const t = r.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Ha = (r) => {
      if (!r || r.destroyed || !r.params) return;
      let e = r.params.lazyPreloadPrevNext;
      const t = r.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          r.params.slidesPerView === "auto"
            ? r.slidesPerViewDynamic()
            : Math.ceil(r.params.slidesPerView),
        n = r.activeIndex;
      if (r.params.grid && r.params.grid.rows > 1) {
        const o = n,
          a = [o - e];
        a.push(...Array.from({ length: e }).map((l, u) => o + i + u)),
          r.slides.forEach((l, u) => {
            a.includes(l.column) && $a(r, u);
          });
        return;
      }
      const s = n + i - 1;
      if (r.params.rewind || r.params.loop)
        for (let o = n - e; o <= s + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < n || a > s) && $a(r, a);
        }
      else
        for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
          o !== n && (o > s || o < n) && $a(r, o);
    };
  function dm(r) {
    const { slidesGrid: e, params: t } = r,
      i = r.rtlTranslate ? r.translate : -r.translate;
    let n;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] != "undefined"
        ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (n = s)
          : i >= e[s] && i < e[s + 1] && (n = s + 1)
        : i >= e[s] && (n = s);
    return (
      t.normalizeSlideIndex && (n < 0 || typeof n == "undefined") && (n = 0), n
    );
  }
  function fm(r) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: n,
        activeIndex: s,
        realIndex: o,
        snapIndex: a,
      } = e;
    let l = r,
      u;
    const c = (f) => {
      let m = f - e.virtual.slidesBefore;
      return (
        m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        m
      );
    };
    if ((typeof l == "undefined" && (l = dm(e)), i.indexOf(t) >= 0))
      u = i.indexOf(t);
    else {
      const f = Math.min(n.slidesPerGroupSkip, l);
      u = f + Math.floor((l - f) / n.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), l === s && !e.params.loop)) {
      u !== a && ((e.snapIndex = u), e.emit("snapIndexChange"));
      return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(l);
      return;
    }
    const d = e.grid && n.grid && n.grid.rows > 1;
    let p;
    if (e.virtual && n.virtual.enabled && n.loop) p = c(l);
    else if (d) {
      const f = e.slides.find((g) => g.column === l);
      let m = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(m) && (m = Math.max(e.slides.indexOf(f), 0)),
        (p = Math.floor(m / n.grid.rows));
    } else if (e.slides[l]) {
      const f = e.slides[l].getAttribute("data-swiper-slide-index");
      f ? (p = parseInt(f, 10)) : (p = l);
    } else p = l;
    Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: p,
      previousIndex: s,
      activeIndex: l,
    }),
      e.initialized && Ha(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== p && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function pm(r, e) {
    const t = this,
      i = t.params;
    let n = r.closest(`.${i.slideClass}, swiper-slide`);
    !n &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(r) &&
      [...e.slice(e.indexOf(r) + 1, e.length)].forEach((a) => {
        !n &&
          a.matches &&
          a.matches(`.${i.slideClass}, swiper-slide`) &&
          (n = a);
      });
    let s = !1,
      o;
    if (n) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === n) {
          (s = !0), (o = a);
          break;
        }
    }
    if (n && s)
      (t.clickedSlide = n),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              n.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = o);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var hm = {
    updateSize: nm,
    updateSlides: sm,
    updateAutoHeight: om,
    updateSlidesOffset: am,
    updateSlidesProgress: lm,
    updateProgress: um,
    updateSlidesClasses: cm,
    updateActiveIndex: fm,
    updateClickedSlide: pm,
  };
  function mm(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -n : n;
    if (t.cssMode) return n;
    let o = qh(s, r);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function gm(r, e) {
    const t = this,
      { rtlTranslate: i, params: n, wrapperEl: s, progress: o } = t;
    let a = 0,
      l = 0;
    const u = 0;
    t.isHorizontal() ? (a = i ? -r : r) : (l = r),
      n.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? a : l),
      n.cssMode
        ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -a
            : -l)
        : n.virtualTranslate ||
          (t.isHorizontal()
            ? (a -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
    let c;
    const d = t.maxTranslate() - t.minTranslate();
    d === 0 ? (c = 0) : (c = (r - t.minTranslate()) / d),
      c !== o && t.updateProgress(r),
      t.emit("setTranslate", t.translate, e);
  }
  function vm() {
    return -this.snapGrid[0];
  }
  function _m() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function ym(r, e, t, i, n) {
    r === void 0 && (r = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: o, wrapperEl: a } = s;
    if (s.animating && o.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      u = s.maxTranslate();
    let c;
    if (
      (i && r > l ? (c = l) : i && r < u ? (c = u) : (c = r),
      s.updateProgress(c),
      o.cssMode)
    ) {
      const d = s.isHorizontal();
      if (e === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!s.support.smoothScroll)
          return (
            Gc({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
          );
        a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(c),
          t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(c),
          t &&
            (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (p) {
                !s ||
                  s.destroyed ||
                  (p.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    (s.animating = !1),
                    t && s.emit("transitionEnd")));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var wm = {
    getTranslate: mm,
    setTranslate: gm,
    minTranslate: vm,
    maxTranslate: _m,
    translateTo: ym,
  };
  function bm(r, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${r}ms`),
      (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
      t.emit("setTransition", r, e);
  }
  function Qc(r) {
    let { swiper: e, runCallbacks: t, direction: i, step: n } = r;
    const { activeIndex: s, previousIndex: o } = e;
    let a = i;
    a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
      e.emit(`transition${n}`),
      t && a === "reset"
        ? e.emit(`slideResetTransition${n}`)
        : t &&
          s !== o &&
          (e.emit(`slideChangeTransition${n}`),
          a === "next"
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`));
  }
  function Sm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Qc({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
  }
  function Tm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Qc({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
  }
  var xm = { setTransition: bm, transitionStart: Sm, transitionEnd: Tm };
  function Cm(r, e, t, i, n) {
    r === void 0 && (r = 0),
      t === void 0 && (t = !0),
      typeof r == "string" && (r = parseInt(r, 10));
    const s = this;
    let o = r;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: l,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: d,
      rtlTranslate: p,
      wrapperEl: f,
      enabled: m,
    } = s;
    if (
      (!m && !i && !n) ||
      s.destroyed ||
      (s.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e == "undefined" && (e = s.params.speed);
    const g = Math.min(s.params.slidesPerGroupSkip, o);
    let y = g + Math.floor((o - g) / s.params.slidesPerGroup);
    y >= l.length && (y = l.length - 1);
    const w = -l[y];
    if (a.normalizeSlideIndex)
      for (let P = 0; P < u.length; P += 1) {
        const M = -Math.floor(w * 100),
          I = Math.floor(u[P] * 100),
          L = Math.floor(u[P + 1] * 100);
        typeof u[P + 1] != "undefined"
          ? M >= I && M < L - (L - I) / 2
            ? (o = P)
            : M >= I && M < L && (o = P + 1)
          : M >= I && (o = P);
      }
    if (
      s.initialized &&
      o !== d &&
      ((!s.allowSlideNext &&
        (p
          ? w > s.translate && w > s.minTranslate()
          : w < s.translate && w < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          w > s.translate &&
          w > s.maxTranslate() &&
          (d || 0) !== o))
    )
      return !1;
    o !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(w);
    let b;
    o > d ? (b = "next") : o < d ? (b = "prev") : (b = "reset");
    const C = s.virtual && s.params.virtual.enabled;
    if (!(C && n) && ((p && -w === s.translate) || (!p && w === s.translate)))
      return (
        s.updateActiveIndex(o),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== "slide" && s.setTranslate(w),
        b !== "reset" && (s.transitionStart(t, b), s.transitionEnd(t, b)),
        !1
      );
    if (a.cssMode) {
      const P = s.isHorizontal(),
        M = p ? w : -w;
      if (e === 0)
        C &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          C && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                f[P ? "scrollLeft" : "scrollTop"] = M;
              }))
            : (f[P ? "scrollLeft" : "scrollTop"] = M),
          C &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Gc({ swiper: s, targetPosition: M, side: P ? "left" : "top" }), !0
          );
        f.scrollTo({ [P ? "left" : "top"]: M, behavior: "smooth" });
      }
      return !0;
    }
    const x = Kc().isSafari;
    return (
      C && !n && x && s.isElement && s.virtual.update(!1, !1, o),
      s.setTransition(e),
      s.setTranslate(w),
      s.updateActiveIndex(o),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, b),
      e === 0
        ? s.transitionEnd(t, b)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (M) {
              !s ||
                s.destroyed ||
                (M.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(t, b)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Em(r, e, t, i) {
    r === void 0 && (r = 0),
      t === void 0 && (t = !0),
      typeof r == "string" && (r = parseInt(r, 10));
    const n = this;
    if (n.destroyed) return;
    typeof e == "undefined" && (e = n.params.speed);
    const s = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = r;
    if (n.params.loop)
      if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
      else {
        let a;
        if (s) {
          const p = o * n.params.grid.rows;
          a = n.slides.find(
            (f) => f.getAttribute("data-swiper-slide-index") * 1 === p
          ).column;
        } else a = n.getSlideIndexByData(o);
        const l = s
            ? Math.ceil(n.slides.length / n.params.grid.rows)
            : n.slides.length,
          { centeredSlides: u } = n.params;
        let c = n.params.slidesPerView;
        c === "auto"
          ? (c = n.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
            u && c % 2 === 0 && (c = c + 1));
        let d = l - a < c;
        if (
          (u && (d = d || a < Math.ceil(c / 2)),
          i && u && n.params.slidesPerView !== "auto" && !s && (d = !1),
          d)
        ) {
          const p = u
            ? a < n.activeIndex
              ? "prev"
              : "next"
            : a - n.activeIndex - 1 < n.params.slidesPerView
            ? "next"
            : "prev";
          n.loopFix({
            direction: p,
            slideTo: !0,
            activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
            slideRealIndex: p === "next" ? n.realIndex : void 0,
          });
        }
        if (s) {
          const p = o * n.params.grid.rows;
          o = n.slides.find(
            (f) => f.getAttribute("data-swiper-slide-index") * 1 === p
          ).column;
        } else o = n.getSlideIndexByData(o);
      }
    return (
      requestAnimationFrame(() => {
        n.slideTo(o, e, t, i);
      }),
      n
    );
  }
  function Am(r, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: n, params: s, animating: o } = i;
    if (!n || i.destroyed) return i;
    typeof r == "undefined" && (r = i.params.speed);
    let a = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
      u = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (o && !u && s.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && s.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, r, e, t);
          }),
          !0
        );
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, r, e, t)
      : i.slideTo(i.activeIndex + l, r, e, t);
  }
  function Pm(r, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: n,
        snapGrid: s,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: l,
        animating: u,
      } = i;
    if (!l || i.destroyed) return i;
    typeof r == "undefined" && (r = i.params.speed);
    const c = i.virtual && n.virtual.enabled;
    if (n.loop) {
      if (u && !c && n.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const d = a ? i.translate : -i.translate;
    function p(b) {
      return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
    }
    const f = p(d),
      m = s.map((b) => p(b)),
      g = n.freeMode && n.freeMode.enabled;
    let y = s[m.indexOf(f) - 1];
    if (typeof y == "undefined" && (n.cssMode || g)) {
      let b;
      s.forEach((C, h) => {
        f >= C && (b = h);
      }),
        typeof b != "undefined" && (y = g ? s[b] : s[b > 0 ? b - 1 : b]);
    }
    let w = 0;
    if (
      (typeof y != "undefined" &&
        ((w = o.indexOf(y)),
        w < 0 && (w = i.activeIndex - 1),
        n.slidesPerView === "auto" &&
          n.slidesPerGroup === 1 &&
          n.slidesPerGroupAuto &&
          ((w = w - i.slidesPerViewDynamic("previous", !0) + 1),
          (w = Math.max(w, 0)))),
      n.rewind && i.isBeginning)
    ) {
      const b =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(b, r, e, t);
    } else if (n.loop && i.activeIndex === 0 && n.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(w, r, e, t);
        }),
        !0
      );
    return i.slideTo(w, r, e, t);
  }
  function Mm(r, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof r == "undefined" && (r = i.params.speed),
        i.slideTo(i.activeIndex, r, e, t)
      );
  }
  function Om(r, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const n = this;
    if (n.destroyed) return;
    typeof r == "undefined" && (r = n.params.speed);
    let s = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, s),
      a = o + Math.floor((s - o) / n.params.slidesPerGroup),
      l = n.rtlTranslate ? n.translate : -n.translate;
    if (l >= n.snapGrid[a]) {
      const u = n.snapGrid[a],
        c = n.snapGrid[a + 1];
      l - u > (c - u) * i && (s += n.params.slidesPerGroup);
    } else {
      const u = n.snapGrid[a - 1],
        c = n.snapGrid[a];
      l - u <= (c - u) * i && (s -= n.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, n.slidesGrid.length - 1)),
      n.slideTo(s, r, e, t)
    );
  }
  function Lm() {
    const r = this;
    if (r.destroyed) return;
    const { params: e, slidesEl: t } = r,
      i =
        e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
    let n = r.clickedIndex,
      s;
    const o = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (r.animating) return;
      (s = parseInt(
        r.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? n < r.loopedSlides - i / 2 ||
            n > r.slides.length - r.loopedSlides + i / 2
            ? (r.loopFix(),
              (n = r.getSlideIndex(
                Pi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
              )),
              Ys(() => {
                r.slideTo(n);
              }))
            : r.slideTo(n)
          : n > r.slides.length - i
          ? (r.loopFix(),
            (n = r.getSlideIndex(
              Pi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Ys(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n);
    } else r.slideTo(n);
  }
  var Dm = {
    slideTo: Cm,
    slideToLoop: Em,
    slideNext: Am,
    slidePrev: Pm,
    slideReset: Mm,
    slideToClosest: Om,
    slideToClickedSlide: Lm,
  };
  function Im(r, e) {
    const t = this,
      { params: i, slidesEl: n } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        Pi(n, `.${i.slideClass}, swiper-slide`).forEach((p, f) => {
          p.setAttribute("data-swiper-slide-index", f);
        });
      },
      o = t.grid && i.grid && i.grid.rows > 1,
      a = i.slidesPerGroup * (o ? i.grid.rows : 1),
      l = t.slides.length % a !== 0,
      u = o && t.slides.length % i.grid.rows !== 0,
      c = (d) => {
        for (let p = 0; p < d; p += 1) {
          const f = t.isElement
            ? Qn("swiper-slide", [i.slideBlankClass])
            : Qn("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(f);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const d = a - (t.slides.length % a);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        Zs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (u) {
      if (i.loopAddBlankSlides) {
        const d = i.grid.rows - (t.slides.length % i.grid.rows);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        Zs(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else s();
    t.loopFix({
      slideRealIndex: r,
      direction: i.centeredSlides ? void 0 : "next",
      initial: e,
    });
  }
  function km(r) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: n,
      activeSlideIndex: s,
      initial: o,
      byController: a,
      byMousewheel: l,
    } = r === void 0 ? {} : r;
    const u = this;
    if (!u.params.loop) return;
    u.emit("beforeLoopFix");
    const {
        slides: c,
        allowSlidePrev: d,
        allowSlideNext: p,
        slidesEl: f,
        params: m,
      } = u,
      { centeredSlides: g, initialSlide: y } = m;
    if (
      ((u.allowSlidePrev = !0),
      (u.allowSlideNext = !0),
      u.virtual && m.virtual.enabled)
    ) {
      t &&
        (!m.centeredSlides && u.snapIndex === 0
          ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
          : m.centeredSlides && u.snapIndex < m.slidesPerView
          ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
          : u.snapIndex === u.snapGrid.length - 1 &&
            u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
        (u.allowSlidePrev = d),
        (u.allowSlideNext = p),
        u.emit("loopFix");
      return;
    }
    let w = m.slidesPerView;
    w === "auto"
      ? (w = u.slidesPerViewDynamic())
      : ((w = Math.ceil(parseFloat(m.slidesPerView, 10))),
        g && w % 2 === 0 && (w = w + 1));
    const b = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
    let C = b;
    C % b !== 0 && (C += b - (C % b)),
      (C += m.loopAdditionalSlides),
      (u.loopedSlides = C);
    const h = u.grid && m.grid && m.grid.rows > 1;
    c.length < w + C || (u.params.effect === "cards" && c.length < w + C * 2)
      ? Zs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : h &&
        m.grid.fill === "row" &&
        Zs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const S = [],
      x = [],
      P = h ? Math.ceil(c.length / m.grid.rows) : c.length,
      M = o && P - y < w && !g;
    let I = M ? y : u.activeIndex;
    typeof s == "undefined"
      ? (s = u.getSlideIndex(
          c.find((T) => T.classList.contains(m.slideActiveClass))
        ))
      : (I = s);
    const L = i === "next" || !i,
      R = i === "prev" || !i;
    let E = 0,
      N = 0;
    const v =
      (h ? c[s].column : s) + (g && typeof n == "undefined" ? -w / 2 + 0.5 : 0);
    if (v < C) {
      E = Math.max(C - v, b);
      for (let T = 0; T < C - v; T += 1) {
        const O = T - Math.floor(T / P) * P;
        if (h) {
          const D = P - O - 1;
          for (let k = c.length - 1; k >= 0; k -= 1)
            c[k].column === D && S.push(k);
        } else S.push(P - O - 1);
      }
    } else if (v + w > P - C) {
      (N = Math.max(v - (P - C * 2), b)), M && (N = Math.max(N, w - P + y + 1));
      for (let T = 0; T < N; T += 1) {
        const O = T - Math.floor(T / P) * P;
        h
          ? c.forEach((D, k) => {
              D.column === O && x.push(k);
            })
          : x.push(O);
      }
    }
    if (
      ((u.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        u.__preventObserver__ = !1;
      }),
      u.params.effect === "cards" &&
        c.length < w + C * 2 &&
        (x.includes(s) && x.splice(x.indexOf(s), 1),
        S.includes(s) && S.splice(S.indexOf(s), 1)),
      R &&
        S.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.prepend(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      L &&
        x.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.append(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      u.recalcSlides(),
      m.slidesPerView === "auto"
        ? u.updateSlides()
        : h &&
          ((S.length > 0 && R) || (x.length > 0 && L)) &&
          u.slides.forEach((T, O) => {
            u.grid.updateSlide(O, T, u.slides);
          }),
      m.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (S.length > 0 && R) {
        if (typeof e == "undefined") {
          const T = u.slidesGrid[I],
            D = u.slidesGrid[I + E] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(I + Math.ceil(E), 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else if (n) {
          const T = h ? S.length / m.grid.rows : S.length;
          u.slideTo(u.activeIndex + T, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (x.length > 0 && L)
        if (typeof e == "undefined") {
          const T = u.slidesGrid[I],
            D = u.slidesGrid[I - N] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(I - N, 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else {
          const T = h ? x.length / m.grid.rows : x.length;
          u.slideTo(u.activeIndex - T, 0, !1, !0);
        }
    }
    if (
      ((u.allowSlidePrev = d),
      (u.allowSlideNext = p),
      u.controller && u.controller.control && !a)
    ) {
      const T = {
        slideRealIndex: e,
        direction: i,
        setTranslate: n,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(u.controller.control)
        ? u.controller.control.forEach((O) => {
            !O.destroyed &&
              O.params.loop &&
              O.loopFix(
                Ya(Bi({}, T), {
                  slideTo: O.params.slidesPerView === m.slidesPerView ? t : !1,
                })
              );
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix(
            Ya(Bi({}, T), {
              slideTo:
                u.controller.control.params.slidesPerView === m.slidesPerView
                  ? t
                  : !1,
            })
          );
    }
    u.emit("loopFix");
  }
  function Rm() {
    const r = this,
      { params: e, slidesEl: t } = r;
    if (!e.loop || !t || (r.virtual && r.params.virtual.enabled)) return;
    r.recalcSlides();
    const i = [];
    r.slides.forEach((n) => {
      const s =
        typeof n.swiperSlideIndex == "undefined"
          ? n.getAttribute("data-swiper-slide-index") * 1
          : n.swiperSlideIndex;
      i[s] = n;
    }),
      r.slides.forEach((n) => {
        n.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((n) => {
        t.append(n);
      }),
      r.recalcSlides(),
      r.slideTo(r.realIndex, 0);
  }
  var zm = { loopCreate: Im, loopFix: km, loopDestroy: Rm };
  function Nm(r) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = r ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Fm() {
    const r = this;
    (r.params.watchOverflow && r.isLocked) ||
      r.params.cssMode ||
      (r.isElement && (r.__preventObserver__ = !0),
      (r[
        r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      r.isElement &&
        requestAnimationFrame(() => {
          r.__preventObserver__ = !1;
        }));
  }
  var Bm = { setGrabCursor: Nm, unsetGrabCursor: Fm };
  function Vm(r, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === di() || i === ht()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const n = i.closest(r);
      return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Jc(r, e, t) {
    const i = ht(),
      { params: n } = r,
      s = n.edgeSwipeDetection,
      o = n.edgeSwipeThreshold;
    return s && (t <= o || t >= i.innerWidth - o)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function $m(r) {
    const e = this,
      t = di();
    let i = r;
    i.originalEvent && (i = i.originalEvent);
    const n = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (n.pointerId !== null && n.pointerId !== i.pointerId) return;
      n.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (n.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      Jc(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: s, touches: o, enabled: a } = e;
    if (
      !a ||
      (!s.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = i.target;
    if (
      (s.touchEventsTarget === "wrapper" && !Xh(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (n.isTouched && n.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      p = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (p ? Vm(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const f = o.currentX,
      m = o.currentY;
    if (!Jc(e, i, f)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = f),
      (o.startY = m),
      (n.touchStartTime = js()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (n.allowThresholdMove = !1);
    let g = !0;
    l.matches(n.focusableElements) &&
      ((g = !1), l.nodeName === "SELECT" && (n.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(n.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(n.focusableElements))) &&
        t.activeElement.blur();
    const y = g && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || y) &&
      !l.isContentEditable &&
      i.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Hm(r) {
    const e = di(),
      t = this,
      i = t.touchEventsData,
      { params: n, touches: s, rtlTranslate: o, enabled: a } = t;
    if (!a || (!n.simulateTouch && r.pointerType === "mouse")) return;
    let l = r;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let u;
    if (l.type === "touchmove") {
      if (
        ((u = [...l.changedTouches].find((x) => x.identifier === i.touchId)),
        !u || u.identifier !== i.touchId)
      )
        return;
    } else u = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const c = u.pageX,
      d = u.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = c), (s.startY = d);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
          (i.touchStartTime = js()));
      return;
    }
    if (n.touchReleaseOnEdges && !n.loop)
      if (t.isVertical()) {
        if (
          (d < s.startY && t.translate <= t.maxTranslate()) ||
          (d > s.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else {
        if (
          o &&
          ((c > s.startX && -t.translate <= t.maxTranslate()) ||
            (c < s.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !o &&
          ((c < s.startX && t.translate <= t.maxTranslate()) ||
            (c > s.startX && t.translate >= t.minTranslate()))
        )
          return;
      }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (s.previousX = s.currentX),
      (s.previousY = s.currentY),
      (s.currentX = c),
      (s.currentY = d);
    const p = s.currentX - s.startX,
      f = s.currentY - s.startY;
    if (
      t.params.threshold &&
      Math.sqrt(Or(p, 2) + Or(f, 2)) < t.params.threshold
    )
      return;
    if (typeof i.isScrolling == "undefined") {
      let x;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : p * p + f * f >= 25 &&
          ((x = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? x > n.touchAngle
            : 90 - x > n.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving == "undefined" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !n.cssMode && l.cancelable && l.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
    let m = t.isHorizontal() ? p : f,
      g = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((m = Math.abs(m) * (o ? 1 : -1)), (g = Math.abs(g) * (o ? 1 : -1))),
      (s.diff = m),
      (m *= n.touchRatio),
      o && ((m = -m), (g = -g));
    const y = t.touchesDirection;
    (t.swipeDirection = m > 0 ? "prev" : "next"),
      (t.touchesDirection = g > 0 ? "prev" : "next");
    const w = t.params.loop && !n.cssMode,
      b =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (w && b && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const x = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(x);
      }
      (i.allowMomentumBounce = !1),
        n.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    let C;
    if (
      (new Date().getTime(),
      n._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        y !== t.touchesDirection &&
        w &&
        b &&
        Math.abs(m) >= 1)
    ) {
      Object.assign(s, {
        startX: c,
        startY: d,
        currentX: c,
        currentY: d,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = m + i.startTranslate);
    let h = !0,
      S = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (S = 0),
      m > 0
        ? (w &&
            b &&
            !C &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (n.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (n.slidesPerView !== "auto" &&
                  t.slides.length - n.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((h = !1),
            n.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                Or(-t.minTranslate() + i.startTranslate + m, S))))
        : m < 0 &&
          (w &&
            b &&
            !C &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (n.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (n.slidesPerView !== "auto" &&
                  t.slides.length - n.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (n.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          i.currentTranslate < t.maxTranslate() &&
            ((h = !1),
            n.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                Or(t.maxTranslate() - i.startTranslate - m, S)))),
      h && (l.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    )
      if (Math.abs(m) > n.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !n.followFinger ||
      n.cssMode ||
      (((n.freeMode && n.freeMode.enabled && t.freeMode) ||
        n.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      n.freeMode &&
        n.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function qm(r) {
    const e = this,
      t = e.touchEventsData;
    let i = r;
    i.originalEvent && (i = i.originalEvent);
    let n;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((n = [...i.changedTouches].find((S) => S.identifier === t.touchId)),
        !n || n.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      n = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(i.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: o,
      touches: a,
      rtlTranslate: l,
      slidesGrid: u,
      enabled: c,
    } = e;
    if (!c || (!o.simulateTouch && i.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", i),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    o.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const d = js(),
      p = d - t.touchStartTime;
    if (e.allowClick) {
      const S = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((S && S[0]) || i.target, S),
        e.emit("tap click", i),
        p < 300 &&
          d - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = js()),
      Ys(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (a.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let f;
    if (
      (o.followFinger
        ? (f = l ? e.translate : -e.translate)
        : (f = -t.currentTranslate),
      o.cssMode)
    )
      return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: f });
      return;
    }
    const m = f >= -e.maxTranslate() && !e.params.loop;
    let g = 0,
      y = e.slidesSizesGrid[0];
    for (
      let S = 0;
      S < u.length;
      S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const x = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[S + x] != "undefined"
        ? (m || (f >= u[S] && f < u[S + x])) && ((g = S), (y = u[S + x] - u[S]))
        : (m || f >= u[S]) &&
          ((g = S), (y = u[u.length - 1] - u[u.length - 2]));
    }
    let w = null,
      b = null;
    o.rewind &&
      (e.isBeginning
        ? (b =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (w = 0));
    const C = (f - u[g]) / y,
      h = g < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (C >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? w : g + h)
          : e.slideTo(g)),
        e.swipeDirection === "prev" &&
          (C > 1 - o.longSwipesRatio
            ? e.slideTo(g + h)
            : b !== null && C < 0 && Math.abs(C) > o.longSwipesRatio
            ? e.slideTo(b)
            : e.slideTo(g));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(g + h)
          : e.slideTo(g)
        : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : g + h),
          e.swipeDirection === "prev" && e.slideTo(b !== null ? b : g));
    }
  }
  function ed() {
    const r = this,
      { params: e, el: t } = r;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && r.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: s } = r,
      o = r.virtual && r.params.virtual.enabled;
    (r.allowSlideNext = !0),
      (r.allowSlidePrev = !0),
      r.updateSize(),
      r.updateSlides(),
      r.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    r.isEnd &&
    !r.isBeginning &&
    !r.params.centeredSlides &&
    !a
      ? r.slideTo(r.slides.length - 1, 0, !1, !0)
      : r.params.loop && !o
      ? r.slideToLoop(r.realIndex, 0, !1, !0)
      : r.slideTo(r.activeIndex, 0, !1, !0),
      r.autoplay &&
        r.autoplay.running &&
        r.autoplay.paused &&
        (clearTimeout(r.autoplay.resizeTimeout),
        (r.autoplay.resizeTimeout = setTimeout(() => {
          r.autoplay &&
            r.autoplay.running &&
            r.autoplay.paused &&
            r.autoplay.resume();
        }, 500))),
      (r.allowSlidePrev = n),
      (r.allowSlideNext = i),
      r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
  }
  function Wm(r) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && r.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (r.stopPropagation(), r.stopImmediatePropagation())));
  }
  function Gm() {
    const r = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = r;
    if (!i) return;
    (r.previousTranslate = r.translate),
      r.isHorizontal()
        ? (r.translate = -e.scrollLeft)
        : (r.translate = -e.scrollTop),
      r.translate === 0 && (r.translate = 0),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
    let n;
    const s = r.maxTranslate() - r.minTranslate();
    s === 0 ? (n = 0) : (n = (r.translate - r.minTranslate()) / s),
      n !== r.progress && r.updateProgress(t ? -r.translate : r.translate),
      r.emit("setTranslate", r.translate, !1);
  }
  function Xm(r) {
    const e = this;
    Qs(e, r.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Ym() {
    const r = this;
    r.documentTouchHandlerProceeded ||
      ((r.documentTouchHandlerProceeded = !0),
      r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
  }
  const td = (r, e) => {
    const t = di(),
      { params: i, el: n, wrapperEl: s, device: o } = r,
      a = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      u = e;
    !n ||
      typeof n == "string" ||
      (t[l]("touchstart", r.onDocumentTouchStart, { passive: !1, capture: a }),
      n[l]("touchstart", r.onTouchStart, { passive: !1 }),
      n[l]("pointerdown", r.onTouchStart, { passive: !1 }),
      t[l]("touchmove", r.onTouchMove, { passive: !1, capture: a }),
      t[l]("pointermove", r.onTouchMove, { passive: !1, capture: a }),
      t[l]("touchend", r.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", r.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", r.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", r.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", r.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", r.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", r.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        n[l]("click", r.onClick, !0),
      i.cssMode && s[l]("scroll", r.onScroll),
      i.updateOnWindowResize
        ? r[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ed,
            !0
          )
        : r[u]("observerUpdate", ed, !0),
      n[l]("load", r.onLoad, { capture: !0 }));
  };
  function jm() {
    const r = this,
      { params: e } = r;
    (r.onTouchStart = $m.bind(r)),
      (r.onTouchMove = Hm.bind(r)),
      (r.onTouchEnd = qm.bind(r)),
      (r.onDocumentTouchStart = Ym.bind(r)),
      e.cssMode && (r.onScroll = Gm.bind(r)),
      (r.onClick = Wm.bind(r)),
      (r.onLoad = Xm.bind(r)),
      td(r, "on");
  }
  function Um() {
    td(this, "off");
  }
  var Km = { attachEvents: jm, detachEvents: Um };
  const id = (r, e) => r.grid && e.grid && e.grid.rows > 1;
  function Zm() {
    const r = this,
      { realIndex: e, initialized: t, params: i, el: n } = r,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const o = di(),
      a =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? r.el
          : o.querySelector(i.breakpointsBase),
      u = r.getBreakpoint(s, a, l);
    if (!u || r.currentBreakpoint === u) return;
    const d = (u in s ? s[u] : void 0) || r.originalParams,
      p = id(r, i),
      f = id(r, d),
      m = r.params.grabCursor,
      g = d.grabCursor,
      y = i.enabled;
    p && !f
      ? (n.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        r.emitContainerClasses())
      : !p &&
        f &&
        (n.classList.add(`${i.containerModifierClass}grid`),
        ((d.grid.fill && d.grid.fill === "column") ||
          (!d.grid.fill && i.grid.fill === "column")) &&
          n.classList.add(`${i.containerModifierClass}grid-column`),
        r.emitContainerClasses()),
      m && !g ? r.unsetGrabCursor() : !m && g && r.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof d[x] == "undefined") return;
        const P = i[x] && i[x].enabled,
          M = d[x] && d[x].enabled;
        P && !M && r[x].disable(), !P && M && r[x].enable();
      });
    const w = d.direction && d.direction !== i.direction,
      b = i.loop && (d.slidesPerView !== i.slidesPerView || w),
      C = i.loop;
    w && t && r.changeDirection(), Kt(r.params, d);
    const h = r.params.enabled,
      S = r.params.loop;
    Object.assign(r, {
      allowTouchMove: r.params.allowTouchMove,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
    }),
      y && !h ? r.disable() : !y && h && r.enable(),
      (r.currentBreakpoint = u),
      r.emit("_beforeBreakpoint", d),
      t &&
        (b
          ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
          : !C && S
          ? (r.loopCreate(e), r.updateSlides())
          : C && !S && r.loopDestroy()),
      r.emit("breakpoint", d);
  }
  function Qm(r, e, t) {
    if ((e === void 0 && (e = "window"), !r || (e === "container" && !t)))
      return;
    let i = !1;
    const n = ht(),
      s = e === "window" ? n.innerHeight : t.clientHeight,
      o = Object.keys(r).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const l = parseFloat(a.substr(1));
          return { value: s * l, point: a };
        }
        return { value: a, point: a };
      });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: l, value: u } = o[a];
      e === "window"
        ? n.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
        : u <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var Jm = { setBreakpoint: Zm, getBreakpoint: Qm };
  function eg(r, e) {
    const t = [];
    return (
      r.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((n) => {
              i[n] && t.push(e + n);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function tg() {
    const r = this,
      { classNames: e, params: t, rtl: i, el: n, device: s } = r,
      o = eg(
        [
          "initialized",
          t.direction,
          { "free-mode": r.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...o), n.classList.add(...e), r.emitContainerClasses();
  }
  function ig() {
    const r = this,
      { el: e, classNames: t } = r;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), r.emitContainerClasses());
  }
  var rg = { addClasses: tg, removeClasses: ig };
  function ng() {
    const r = this,
      { isLocked: e, params: t } = r,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const n = r.slides.length - 1,
        s = r.slidesGrid[n] + r.slidesSizesGrid[n] + i * 2;
      r.isLocked = r.size > s;
    } else r.isLocked = r.snapGrid.length === 1;
    t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
      t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
      e && e !== r.isLocked && (r.isEnd = !1),
      e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
  }
  var sg = { checkOverflow: ng },
    rd = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function og(r, e) {
    return function (i) {
      i === void 0 && (i = {});
      const n = Object.keys(i)[0],
        s = i[n];
      if (typeof s != "object" || s === null) {
        Kt(e, i);
        return;
      }
      if (
        (r[n] === !0 && (r[n] = { enabled: !0 }),
        n === "navigation" &&
          r[n] &&
          r[n].enabled &&
          !r[n].prevEl &&
          !r[n].nextEl &&
          (r[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 &&
          r[n] &&
          r[n].enabled &&
          !r[n].el &&
          (r[n].auto = !0),
        !(n in r && "enabled" in s))
      ) {
        Kt(e, i);
        return;
      }
      typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
        r[n] || (r[n] = { enabled: !1 }),
        Kt(e, i);
    };
  }
  const qa = {
      eventsEmitter: rm,
      update: hm,
      translate: wm,
      transition: xm,
      slide: Dm,
      loop: zm,
      grabCursor: Bm,
      events: Km,
      breakpoints: Jm,
      checkOverflow: sg,
      classes: rg,
    },
    Wa = {};
  class Zt {
    constructor() {
      let e, t;
      for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++)
        n[s] = arguments[s];
      n.length === 1 &&
      n[0].constructor &&
      Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
        ? (t = n[0])
        : ([e, t] = n),
        t || (t = {}),
        (t = Kt({}, t)),
        e && !t.el && (t.el = e);
      const o = di();
      if (
        t.el &&
        typeof t.el == "string" &&
        o.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          o.querySelectorAll(t.el).forEach((d) => {
            const p = Kt({}, t, { el: d });
            c.push(new Zt(p));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = jc()),
        (a.device = Uc({ userAgent: t.userAgent })),
        (a.browser = Kc()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: og(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const u = Kt({}, rd, l);
      return (
        (a.params = Kt({}, u, Wa, t)),
        (a.originalParams = Kt({}, a.params)),
        (a.passedParams = Kt({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((c) => {
            a.on(c, a.params.on[c]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / Or(2, 23)) * Or(2, 23);
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        n = Pi(t, `.${i.slideClass}, swiper-slide`),
        s = Xc(n[0]);
      return Xc(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = Pi(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const n = i.minTranslate(),
        o = (i.maxTranslate() - n) * e + n;
      i.translateTo(o, typeof t == "undefined" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const n = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: n,
          slides: s,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: l,
          activeIndex: u,
        } = i;
      let c = 1;
      if (typeof n.slidesPerView == "number") return n.slidesPerView;
      if (n.centeredSlides) {
        let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
          p;
        for (let f = u + 1; f < s.length; f += 1)
          s[f] &&
            !p &&
            ((d += Math.ceil(s[f].swiperSlideSize)),
            (c += 1),
            d > l && (p = !0));
        for (let f = u - 1; f >= 0; f -= 1)
          s[f] &&
            !p &&
            ((d += s[f].swiperSlideSize), (c += 1), d > l && (p = !0));
      } else if (e === "current")
        for (let d = u + 1; d < s.length; d += 1)
          (t ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
      else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < l && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
          o.complete && Qs(e, o);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function n() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        n(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const o =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(o.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || n();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        n = i.params.direction;
      return (
        e || (e = n === "horizontal" ? "vertical" : "horizontal"),
        e === n ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const n = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(n())
          : Pi(i, n())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = Qn("div", t.params.wrapperClass)),
          i.append(o),
          Pi(i, `.${t.params.slideClass}`).forEach((a) => {
            o.append(a);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: o,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : o,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || tr(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || tr(i, "direction") === "rtl"),
          wrongRTL: tr(o, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
      const n = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach((s) => {
          s.complete
            ? Qs(t, s)
            : s.addEventListener("load", (o) => {
                Qs(t, o.target);
              });
        }),
        Ha(t),
        (t.initialized = !0),
        Ha(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: n, el: s, wrapperEl: o, slides: a } = i;
      return (
        typeof i.params == "undefined" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          n.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s && typeof s != "string" && s.removeAttribute("style"),
            o && o.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((l) => {
                l.classList.remove(
                  n.slideVisibleClass,
                  n.slideFullyVisibleClass,
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), $h(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Kt(Wa, e);
    }
    static get extendedDefaults() {
      return Wa;
    }
    static get defaults() {
      return rd;
    }
    static installModule(e) {
      Zt.prototype.__modules__ || (Zt.prototype.__modules__ = []);
      const t = Zt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Zt.installModule(t)), Zt)
        : (Zt.installModule(e), Zt);
    }
  }
  Object.keys(qa).forEach((r) => {
    Object.keys(qa[r]).forEach((e) => {
      Zt.prototype[e] = qa[r][e];
    });
  }),
    Zt.use([tm, im]);
  function ag(r, e, t, i) {
    return (
      r.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!t[n] && t.auto === !0) {
            let s = Pi(r.el, `.${i[n]}`)[0];
            s || ((s = Qn("div", i[n])), (s.className = i[n]), r.el.append(s)),
              (t[n] = s),
              (e[n] = s);
          }
        }),
      t
    );
  }
  function lg(r) {
    return (
      r === void 0 && (r = ""),
      `.${r
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ug(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = di();
    let o = !1,
      a = null,
      l = null,
      u,
      c,
      d,
      p;
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (e.scrollbar = { el: null, dragEl: null });
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: E, rtlTranslate: N } = e,
        { dragEl: _, el: v } = E,
        T = e.params.scrollbar,
        O = e.params.loop ? e.progressLoop : e.progress;
      let D = c,
        k = (d - c) * O;
      N
        ? ((k = -k), k > 0 ? ((D = c - k), (k = 0)) : -k + c > d && (D = d + k))
        : k < 0
        ? ((D = c + k), (k = 0))
        : k + c > d && (D = d - k),
        e.isHorizontal()
          ? ((_.style.transform = `translate3d(${k}px, 0, 0)`),
            (_.style.width = `${D}px`))
          : ((_.style.transform = `translate3d(0px, ${k}px, 0)`),
            (_.style.height = `${D}px`)),
        T.hide &&
          (clearTimeout(a),
          (v.style.opacity = 1),
          (a = setTimeout(() => {
            (v.style.opacity = 0), (v.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function m(E) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${E}ms`);
    }
    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: E } = e,
        { dragEl: N, el: _ } = E;
      (N.style.width = ""),
        (N.style.height = ""),
        (d = e.isHorizontal() ? _.offsetWidth : _.offsetHeight),
        (p =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = d * p)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (N.style.width = `${c}px`)
          : (N.style.height = `${c}px`),
        p >= 1 ? (_.style.display = "none") : (_.style.display = ""),
        e.params.scrollbar.hide && (_.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          E.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function y(E) {
      return e.isHorizontal() ? E.clientX : E.clientY;
    }
    function w(E) {
      const { scrollbar: N, rtlTranslate: _ } = e,
        { el: v } = N;
      let T;
      (T =
        (y(E) -
          Yh(v)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (d - c)),
        (T = Math.max(Math.min(T, 1), 0)),
        _ && (T = 1 - T);
      const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * T;
      e.updateProgress(O),
        e.setTranslate(O),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function b(E) {
      const N = e.params.scrollbar,
        { scrollbar: _, wrapperEl: v } = e,
        { el: T, dragEl: O } = _;
      (o = !0),
        (u =
          E.target === O
            ? y(E) -
              E.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        E.preventDefault(),
        E.stopPropagation(),
        (v.style.transitionDuration = "100ms"),
        (O.style.transitionDuration = "100ms"),
        w(E),
        clearTimeout(l),
        (T.style.transitionDuration = "0ms"),
        N.hide && (T.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        n("scrollbarDragStart", E);
    }
    function C(E) {
      const { scrollbar: N, wrapperEl: _ } = e,
        { el: v, dragEl: T } = N;
      o &&
        (E.preventDefault && E.cancelable
          ? E.preventDefault()
          : (E.returnValue = !1),
        w(E),
        (_.style.transitionDuration = "0ms"),
        (v.style.transitionDuration = "0ms"),
        (T.style.transitionDuration = "0ms"),
        n("scrollbarDragMove", E));
    }
    function h(E) {
      const N = e.params.scrollbar,
        { scrollbar: _, wrapperEl: v } = e,
        { el: T } = _;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (v.style.transitionDuration = "")),
        N.hide &&
          (clearTimeout(l),
          (l = Ys(() => {
            (T.style.opacity = 0), (T.style.transitionDuration = "400ms");
          }, 1e3))),
        n("scrollbarDragEnd", E),
        N.snapOnRelease && e.slideToClosest());
    }
    function S(E) {
      const { scrollbar: N, params: _ } = e,
        v = N.el;
      if (!v) return;
      const T = v,
        O = _.passiveListeners ? { passive: !1, capture: !1 } : !1,
        D = _.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!T) return;
      const k = E === "on" ? "addEventListener" : "removeEventListener";
      T[k]("pointerdown", b, O),
        s[k]("pointermove", C, O),
        s[k]("pointerup", h, D);
    }
    function x() {
      !e.params.scrollbar.el || !e.scrollbar.el || S("on");
    }
    function P() {
      !e.params.scrollbar.el || !e.scrollbar.el || S("off");
    }
    function M() {
      const { scrollbar: E, el: N } = e;
      e.params.scrollbar = ag(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const _ = e.params.scrollbar;
      if (!_.el) return;
      let v;
      if (
        (typeof _.el == "string" &&
          e.isElement &&
          (v = e.el.querySelector(_.el)),
        !v && typeof _.el == "string")
      ) {
        if (((v = s.querySelectorAll(_.el)), !v.length)) return;
      } else v || (v = _.el);
      e.params.uniqueNavElements &&
        typeof _.el == "string" &&
        v.length > 1 &&
        N.querySelectorAll(_.el).length === 1 &&
        (v = N.querySelector(_.el)),
        v.length > 0 && (v = v[0]),
        v.classList.add(e.isHorizontal() ? _.horizontalClass : _.verticalClass);
      let T;
      v &&
        ((T = v.querySelector(lg(e.params.scrollbar.dragClass))),
        T || ((T = Qn("div", e.params.scrollbar.dragClass)), v.append(T))),
        Object.assign(E, { el: v, dragEl: T }),
        _.draggable && x(),
        v &&
          v.classList[e.enabled ? "remove" : "add"](
            ...er(e.params.scrollbar.lockClass)
          );
    }
    function I() {
      const E = e.params.scrollbar,
        N = e.scrollbar.el;
      N &&
        N.classList.remove(
          ...er(e.isHorizontal() ? E.horizontalClass : E.verticalClass)
        ),
        P();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const E = e.params.scrollbar;
      let { el: N } = e.scrollbar;
      (N = Zh(N)),
        N.forEach((_) => {
          _.classList.remove(E.horizontalClass, E.verticalClass),
            _.classList.add(
              e.isHorizontal() ? E.horizontalClass : E.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? R() : (M(), g(), f());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        g();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (E, N) => {
        m(N);
      }),
      i("enable disable", () => {
        const { el: E } = e.scrollbar;
        E &&
          E.classList[e.enabled ? "remove" : "add"](
            ...er(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        I();
      });
    const L = () => {
        e.el.classList.remove(...er(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...er(e.params.scrollbar.scrollbarDisabledClass)
            ),
          M(),
          g(),
          f();
      },
      R = () => {
        e.el.classList.add(...er(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...er(e.params.scrollbar.scrollbarDisabledClass)
            ),
          I();
      };
    Object.assign(e.scrollbar, {
      enable: L,
      disable: R,
      updateSize: g,
      setTranslate: f,
      init: M,
      destroy: I,
    });
  }
  function cg(r) {
    let { swiper: e, extendParams: t, on: i, emit: n, params: s } = r;
    (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !1,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    let o,
      a,
      l = s && s.autoplay ? s.autoplay.delay : 3e3,
      u = s && s.autoplay ? s.autoplay.delay : 3e3,
      c,
      d = new Date().getTime(),
      p,
      f,
      m,
      g,
      y,
      w,
      b;
    function C(D) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (D.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", C),
          !(b || (D.detail && D.detail.bySwiperTouchMove)) && L()));
    }
    const h = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (p = !0) : p && ((u = c), (p = !1));
        const D = e.autoplay.paused ? c : d + u - new Date().getTime();
        (e.autoplay.timeLeft = D),
          n("autoplayTimeLeft", D, D / l),
          (a = requestAnimationFrame(() => {
            h();
          }));
      },
      S = () => {
        let D;
        return (
          e.virtual && e.params.virtual.enabled
            ? (D = e.slides.find((A) =>
                A.classList.contains("swiper-slide-active")
              ))
            : (D = e.slides[e.activeIndex]),
          D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      x = (D) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(a), h();
        let k = typeof D == "undefined" ? e.params.autoplay.delay : D;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const A = S();
        !Number.isNaN(A) &&
          A > 0 &&
          typeof D == "undefined" &&
          ((k = A), (l = A), (u = A)),
          (c = k);
        const V = e.params.speed,
          W = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(V, !0, !0), n("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, V, !0, !0), n("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(V, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, V, !0, !0), n("autoplay")),
              e.params.cssMode &&
                ((d = new Date().getTime()),
                requestAnimationFrame(() => {
                  x();
                })));
          };
        return (
          k > 0
            ? (clearTimeout(o),
              (o = setTimeout(() => {
                W();
              }, k)))
            : requestAnimationFrame(() => {
                W();
              }),
          k
        );
      },
      P = () => {
        (d = new Date().getTime()),
          (e.autoplay.running = !0),
          x(),
          n("autoplayStart");
      },
      M = () => {
        (e.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          n("autoplayStop");
      },
      I = (D, k) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(o), D || (w = !0);
        const A = () => {
          n("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", C)
              : L();
        };
        if (((e.autoplay.paused = !0), k)) {
          y && (c = e.params.autoplay.delay), (y = !1), A();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), A());
      },
      L = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((d = new Date().getTime()),
          w ? ((w = !1), x(c)) : x(),
          (e.autoplay.paused = !1),
          n("autoplayResume"));
      },
      R = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const D = di();
        D.visibilityState === "hidden" && ((w = !0), I(!0)),
          D.visibilityState === "visible" && L();
      },
      E = (D) => {
        D.pointerType === "mouse" &&
          ((w = !0), (b = !0), !(e.animating || e.autoplay.paused) && I(!0));
      },
      N = (D) => {
        D.pointerType === "mouse" && ((b = !1), e.autoplay.paused && L());
      },
      _ = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", E),
          e.el.addEventListener("pointerleave", N));
      },
      v = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", E),
          e.el.removeEventListener("pointerleave", N));
      },
      T = () => {
        di().addEventListener("visibilitychange", R);
      },
      O = () => {
        di().removeEventListener("visibilitychange", R);
      };
    i("init", () => {
      e.params.autoplay.enabled && (_(), T(), P());
    }),
      i("destroy", () => {
        v(), O(), e.autoplay.running && M();
      }),
      i("_freeModeStaticRelease", () => {
        (m || w) && L();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : I(!0, !0);
      }),
      i("beforeTransitionStart", (D, k, A) => {
        e.destroyed ||
          !e.autoplay.running ||
          (A || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : M());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            M();
            return;
          }
          (f = !0),
            (m = !1),
            (w = !1),
            (g = setTimeout(() => {
              (w = !0), (m = !0), I(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !f)) {
          if (
            (clearTimeout(g),
            clearTimeout(o),
            e.params.autoplay.disableOnInteraction)
          ) {
            (m = !1), (f = !1);
            return;
          }
          m && e.params.cssMode && L(), (m = !1), (f = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (y = !0);
      }),
      Object.assign(e.autoplay, { start: P, stop: M, pause: I, resume: L });
  }
  Zt.use([ug, cg]);
  const dg = () => {
      new Zt(".result_swiper", {
        direction: "horizontal",
        loop: !1,
        slidesPerView: 1.5,
        speed: 800,
        spaceBetween: 20,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        scrollbar: {
          el: ".result_swiper_scrollbar",
          dragClass: "result_swiper_scrollbar_drag",
          draggable: !0,
          hide: !1,
          snapOnRelease: !0,
        },
        breakpoints: { 480: { slidesPerView: 1.2, spaceBetween: 20 } },
      });
    },
    fg = () => {
      dg();
    };
  j.registerPlugin(Q);
  const pg = () => {
      const r = document.querySelector("[results-wrap]"),
        e = document.querySelectorAll("[result-card]"),
        t = window.innerWidth < 768,
        i = j.timeline({
          scrollTrigger: {
            trigger: r,
            start: t ? "top bottom+=30%" : "top 50%",
            end: "bottom bottom",
            scrub: 1,
            markers: !1,
          },
        });
      i.from(r, {
        rotateX: t ? 10 : 20,
        autoAlpha: 0,
        scale: 1.4,
        y: t ? -100 : -200,
        ease: "power2.out",
        duration: 1,
      }),
        i.from(
          e,
          {
            scale: 0.9,
            rotateX: t ? 2.5 : 5,
            y: 100,
            ease: "power2.out",
            duration: 1,
            stagger: 0.12,
          },
          0
        );
    },
    hg = () => {
      pg();
    };
  function mg(r) {
    return r &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
      ? r.default
      : r;
  }
  var nd = { exports: {} };
  (function (r) {
    (function (e) {
      r.exports ? (r.exports = e()) : (window.intlTelInput = e());
    })(() => {
      var e = (() => {
        var t = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          n = Object.getOwnPropertyNames,
          s = Object.prototype.hasOwnProperty,
          o = (_, v) => {
            for (var T in v) t(_, T, { get: v[T], enumerable: !0 });
          },
          a = (_, v, T, O) => {
            if ((v && typeof v == "object") || typeof v == "function")
              for (let D of n(v))
                !s.call(_, D) &&
                  D !== T &&
                  t(_, D, {
                    get: () => v[D],
                    enumerable: !(O = i(v, D)) || O.enumerable,
                  });
            return _;
          },
          l = (_) => a(t({}, "__esModule", { value: !0 }), _),
          u = {};
        o(u, { Iti: () => I, default: () => N });
        var c = [
            ["af", "93"],
            ["al", "355"],
            ["dz", "213"],
            ["as", "1", 5, ["684"]],
            ["ad", "376"],
            ["ao", "244"],
            ["ai", "1", 6, ["264"]],
            ["ag", "1", 7, ["268"]],
            ["ar", "54"],
            ["am", "374"],
            ["aw", "297"],
            ["ac", "247"],
            ["au", "61", 0],
            ["at", "43"],
            ["az", "994"],
            ["bs", "1", 8, ["242"]],
            ["bh", "973"],
            ["bd", "880"],
            ["bb", "1", 9, ["246"]],
            ["by", "375"],
            ["be", "32"],
            ["bz", "501"],
            ["bj", "229"],
            ["bm", "1", 10, ["441"]],
            ["bt", "975"],
            ["bo", "591"],
            ["ba", "387"],
            ["bw", "267"],
            ["br", "55"],
            ["io", "246"],
            ["vg", "1", 11, ["284"]],
            ["bn", "673"],
            ["bg", "359"],
            ["bf", "226"],
            ["bi", "257"],
            ["kh", "855"],
            ["cm", "237"],
            [
              "ca",
              "1",
              1,
              [
                "204",
                "226",
                "236",
                "249",
                "250",
                "263",
                "289",
                "306",
                "343",
                "354",
                "365",
                "367",
                "368",
                "382",
                "387",
                "403",
                "416",
                "418",
                "428",
                "431",
                "437",
                "438",
                "450",
                "584",
                "468",
                "474",
                "506",
                "514",
                "519",
                "548",
                "579",
                "581",
                "584",
                "587",
                "604",
                "613",
                "639",
                "647",
                "672",
                "683",
                "705",
                "709",
                "742",
                "753",
                "778",
                "780",
                "782",
                "807",
                "819",
                "825",
                "867",
                "873",
                "879",
                "902",
                "905",
              ],
            ],
            ["cv", "238"],
            ["bq", "599", 1, ["3", "4", "7"]],
            ["ky", "1", 12, ["345"]],
            ["cf", "236"],
            ["td", "235"],
            ["cl", "56"],
            ["cn", "86"],
            ["cx", "61", 2, ["89164"]],
            ["cc", "61", 1, ["89162"]],
            ["co", "57"],
            ["km", "269"],
            ["cg", "242"],
            ["cd", "243"],
            ["ck", "682"],
            ["cr", "506"],
            ["ci", "225"],
            ["hr", "385"],
            ["cu", "53"],
            ["cw", "599", 0],
            ["cy", "357"],
            ["cz", "420"],
            ["dk", "45"],
            ["dj", "253"],
            ["dm", "1", 13, ["767"]],
            ["do", "1", 2, ["809", "829", "849"]],
            ["ec", "593"],
            ["eg", "20"],
            ["sv", "503"],
            ["gq", "240"],
            ["er", "291"],
            ["ee", "372"],
            ["sz", "268"],
            ["et", "251"],
            ["fk", "500"],
            ["fo", "298"],
            ["fj", "679"],
            ["fi", "358", 0],
            ["fr", "33"],
            ["gf", "594"],
            ["pf", "689"],
            ["ga", "241"],
            ["gm", "220"],
            ["ge", "995"],
            ["de", "49"],
            ["gh", "233"],
            ["gi", "350"],
            ["gr", "30"],
            ["gl", "299"],
            ["gd", "1", 14, ["473"]],
            ["gp", "590", 0],
            ["gu", "1", 15, ["671"]],
            ["gt", "502"],
            ["gg", "44", 1, ["1481", "7781", "7839", "7911"]],
            ["gn", "224"],
            ["gw", "245"],
            ["gy", "592"],
            ["ht", "509"],
            ["hn", "504"],
            ["hk", "852"],
            ["hu", "36"],
            ["is", "354"],
            ["in", "91"],
            ["id", "62"],
            ["ir", "98"],
            ["iq", "964"],
            ["ie", "353"],
            ["im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
            ["il", "972"],
            ["it", "39", 0],
            ["jm", "1", 4, ["876", "658"]],
            ["jp", "81"],
            ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
            ["jo", "962"],
            ["kz", "7", 1, ["33", "7"]],
            ["ke", "254"],
            ["ki", "686"],
            ["xk", "383"],
            ["kw", "965"],
            ["kg", "996"],
            ["la", "856"],
            ["lv", "371"],
            ["lb", "961"],
            ["ls", "266"],
            ["lr", "231"],
            ["ly", "218"],
            ["li", "423"],
            ["lt", "370"],
            ["lu", "352"],
            ["mo", "853"],
            ["mg", "261"],
            ["mw", "265"],
            ["my", "60"],
            ["mv", "960"],
            ["ml", "223"],
            ["mt", "356"],
            ["mh", "692"],
            ["mq", "596"],
            ["mr", "222"],
            ["mu", "230"],
            ["yt", "262", 1, ["269", "639"]],
            ["mx", "52"],
            ["fm", "691"],
            ["md", "373"],
            ["mc", "377"],
            ["mn", "976"],
            ["me", "382"],
            ["ms", "1", 16, ["664"]],
            ["ma", "212", 0],
            ["mz", "258"],
            ["mm", "95"],
            ["na", "264"],
            ["nr", "674"],
            ["np", "977"],
            ["nl", "31"],
            ["nc", "687"],
            ["nz", "64"],
            ["ni", "505"],
            ["ne", "227"],
            ["ng", "234"],
            ["nu", "683"],
            ["nf", "672"],
            ["kp", "850"],
            ["mk", "389"],
            ["mp", "1", 17, ["670"]],
            ["no", "47", 0],
            ["om", "968"],
            ["pk", "92"],
            ["pw", "680"],
            ["ps", "970"],
            ["pa", "507"],
            ["pg", "675"],
            ["py", "595"],
            ["pe", "51"],
            ["ph", "63"],
            ["pl", "48"],
            ["pt", "351"],
            ["pr", "1", 3, ["787", "939"]],
            ["qa", "974"],
            ["re", "262", 0],
            ["ro", "40"],
            ["ru", "7", 0],
            ["rw", "250"],
            ["ws", "685"],
            ["sm", "378"],
            ["st", "239"],
            ["sa", "966"],
            ["sn", "221"],
            ["rs", "381"],
            ["sc", "248"],
            ["sl", "232"],
            ["sg", "65"],
            ["sx", "1", 21, ["721"]],
            ["sk", "421"],
            ["si", "386"],
            ["sb", "677"],
            ["so", "252"],
            ["za", "27"],
            ["kr", "82"],
            ["ss", "211"],
            ["es", "34"],
            ["lk", "94"],
            ["bl", "590", 1],
            ["sh", "290"],
            ["kn", "1", 18, ["869"]],
            ["lc", "1", 19, ["758"]],
            ["mf", "590", 2],
            ["pm", "508"],
            ["vc", "1", 20, ["784"]],
            ["sd", "249"],
            ["sr", "597"],
            ["sj", "47", 1, ["79"]],
            ["se", "46"],
            ["ch", "41"],
            ["sy", "963"],
            ["tw", "886"],
            ["tj", "992"],
            ["tz", "255"],
            ["th", "66"],
            ["tl", "670"],
            ["tg", "228"],
            ["tk", "690"],
            ["to", "676"],
            ["tt", "1", 22, ["868"]],
            ["tn", "216"],
            ["tr", "90"],
            ["tm", "993"],
            ["tc", "1", 23, ["649"]],
            ["tv", "688"],
            ["ug", "256"],
            ["ua", "380"],
            ["ae", "971"],
            ["gb", "44", 0],
            ["us", "1", 0],
            ["uy", "598"],
            ["vi", "1", 24, ["340"]],
            ["uz", "998"],
            ["vu", "678"],
            ["va", "39", 1, ["06698"]],
            ["ve", "58"],
            ["vn", "84"],
            ["wf", "681"],
            ["eh", "212", 1, ["5288", "5289"]],
            ["ye", "967"],
            ["zm", "260"],
            ["zw", "263"],
            ["ax", "358", 1, ["18"]],
          ],
          d = [];
        for (let _ = 0; _ < c.length; _++) {
          const v = c[_];
          d[_] = {
            name: "",
            iso2: v[0],
            dialCode: v[1],
            priority: v[2] || 0,
            areaCodes: v[3] || null,
            nodeById: {},
          };
        }
        var p = d,
          f = {
            af: "Afghanistan",
            ax: "Åland Islands",
            al: "Albania",
            dz: "Algeria",
            as: "American Samoa",
            ad: "Andorra",
            ao: "Angola",
            ai: "Anguilla",
            aq: "Antarctica",
            ag: "Antigua & Barbuda",
            ar: "Argentina",
            am: "Armenia",
            aw: "Aruba",
            au: "Australia",
            at: "Austria",
            az: "Azerbaijan",
            bs: "Bahamas",
            bh: "Bahrain",
            bd: "Bangladesh",
            bb: "Barbados",
            by: "Belarus",
            be: "Belgium",
            bz: "Belize",
            bj: "Benin",
            bm: "Bermuda",
            bt: "Bhutan",
            bo: "Bolivia",
            ba: "Bosnia & Herzegovina",
            bw: "Botswana",
            bv: "Bouvet Island",
            br: "Brazil",
            io: "British Indian Ocean Territory",
            vg: "British Virgin Islands",
            bn: "Brunei",
            bg: "Bulgaria",
            bf: "Burkina Faso",
            bi: "Burundi",
            kh: "Cambodia",
            cm: "Cameroon",
            ca: "Canada",
            cv: "Cape Verde",
            bq: "Caribbean Netherlands",
            ky: "Cayman Islands",
            cf: "Central African Republic",
            td: "Chad",
            cl: "Chile",
            cn: "China",
            cx: "Christmas Island",
            cc: "Cocos (Keeling) Islands",
            co: "Colombia",
            km: "Comoros",
            cg: "Congo - Brazzaville",
            cd: "Congo - Kinshasa",
            ck: "Cook Islands",
            cr: "Costa Rica",
            ci: "Côte d’Ivoire",
            hr: "Croatia",
            cu: "Cuba",
            cw: "Curaçao",
            cy: "Cyprus",
            cz: "Czechia",
            dk: "Denmark",
            dj: "Djibouti",
            dm: "Dominica",
            do: "Dominican Republic",
            ec: "Ecuador",
            eg: "Egypt",
            sv: "El Salvador",
            gq: "Equatorial Guinea",
            er: "Eritrea",
            ee: "Estonia",
            sz: "Eswatini",
            et: "Ethiopia",
            fk: "Falkland Islands",
            fo: "Faroe Islands",
            fj: "Fiji",
            fi: "Finland",
            fr: "France",
            gf: "French Guiana",
            pf: "French Polynesia",
            tf: "French Southern Territories",
            ga: "Gabon",
            gm: "Gambia",
            ge: "Georgia",
            de: "Germany",
            gh: "Ghana",
            gi: "Gibraltar",
            gr: "Greece",
            gl: "Greenland",
            gd: "Grenada",
            gp: "Guadeloupe",
            gu: "Guam",
            gt: "Guatemala",
            gg: "Guernsey",
            gn: "Guinea",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            ht: "Haiti",
            hm: "Heard & McDonald Islands",
            hn: "Honduras",
            hk: "Hong Kong SAR China",
            hu: "Hungary",
            is: "Iceland",
            in: "India",
            id: "Indonesia",
            ir: "Iran",
            iq: "Iraq",
            ie: "Ireland",
            im: "Isle of Man",
            il: "Israel",
            it: "Italy",
            jm: "Jamaica",
            jp: "Japan",
            je: "Jersey",
            jo: "Jordan",
            kz: "Kazakhstan",
            ke: "Kenya",
            ki: "Kiribati",
            kw: "Kuwait",
            kg: "Kyrgyzstan",
            la: "Laos",
            lv: "Latvia",
            lb: "Lebanon",
            ls: "Lesotho",
            lr: "Liberia",
            ly: "Libya",
            li: "Liechtenstein",
            lt: "Lithuania",
            lu: "Luxembourg",
            mo: "Macao SAR China",
            mg: "Madagascar",
            mw: "Malawi",
            my: "Malaysia",
            mv: "Maldives",
            ml: "Mali",
            mt: "Malta",
            mh: "Marshall Islands",
            mq: "Martinique",
            mr: "Mauritania",
            mu: "Mauritius",
            yt: "Mayotte",
            mx: "Mexico",
            fm: "Micronesia",
            md: "Moldova",
            mc: "Monaco",
            mn: "Mongolia",
            me: "Montenegro",
            ms: "Montserrat",
            ma: "Morocco",
            mz: "Mozambique",
            mm: "Myanmar (Burma)",
            na: "Namibia",
            nr: "Nauru",
            np: "Nepal",
            nl: "Netherlands",
            nc: "New Caledonia",
            nz: "New Zealand",
            ni: "Nicaragua",
            ne: "Niger",
            ng: "Nigeria",
            nu: "Niue",
            nf: "Norfolk Island",
            kp: "North Korea",
            mk: "North Macedonia",
            mp: "Northern Mariana Islands",
            no: "Norway",
            om: "Oman",
            pk: "Pakistan",
            pw: "Palau",
            ps: "Palestinian Territories",
            pa: "Panama",
            pg: "Papua New Guinea",
            py: "Paraguay",
            pe: "Peru",
            ph: "Philippines",
            pn: "Pitcairn Islands",
            pl: "Poland",
            pt: "Portugal",
            pr: "Puerto Rico",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            ru: "Russia",
            rw: "Rwanda",
            ws: "Samoa",
            sm: "San Marino",
            st: "São Tomé & Príncipe",
            sa: "Saudi Arabia",
            sn: "Senegal",
            rs: "Serbia",
            sc: "Seychelles",
            sl: "Sierra Leone",
            sg: "Singapore",
            sx: "Sint Maarten",
            sk: "Slovakia",
            si: "Slovenia",
            sb: "Solomon Islands",
            so: "Somalia",
            za: "South Africa",
            gs: "South Georgia & South Sandwich Islands",
            kr: "South Korea",
            ss: "South Sudan",
            es: "Spain",
            lk: "Sri Lanka",
            bl: "St. Barthélemy",
            sh: "St. Helena",
            kn: "St. Kitts & Nevis",
            lc: "St. Lucia",
            mf: "St. Martin",
            pm: "St. Pierre & Miquelon",
            vc: "St. Vincent & Grenadines",
            sd: "Sudan",
            sr: "Suriname",
            sj: "Svalbard & Jan Mayen",
            se: "Sweden",
            ch: "Switzerland",
            sy: "Syria",
            tw: "Taiwan",
            tj: "Tajikistan",
            tz: "Tanzania",
            th: "Thailand",
            tl: "Timor-Leste",
            tg: "Togo",
            tk: "Tokelau",
            to: "Tonga",
            tt: "Trinidad & Tobago",
            tn: "Tunisia",
            tr: "Turkey",
            tm: "Turkmenistan",
            tc: "Turks & Caicos Islands",
            tv: "Tuvalu",
            um: "U.S. Outlying Islands",
            vi: "U.S. Virgin Islands",
            ug: "Uganda",
            ua: "Ukraine",
            ae: "United Arab Emirates",
            gb: "United Kingdom",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            vu: "Vanuatu",
            va: "Vatican City",
            ve: "Venezuela",
            vn: "Vietnam",
            wf: "Wallis & Futuna",
            eh: "Western Sahara",
            ye: "Yemen",
            zm: "Zambia",
            zw: "Zimbabwe",
          },
          m = {
            selectedCountryAriaLabel: "Selected country",
            noCountrySelected: "No country selected",
            countryListAriaLabel: "List of countries",
            searchPlaceholder: "Search",
            zeroSearchResults: "No results found",
            oneSearchResult: "1 result found",
            multipleSearchResults: "${count} results found",
            ac: "Ascension Island",
            xk: "Kosovo",
          },
          g = Bi(Bi({}, f), m),
          y = 0,
          w = {
            allowDropdown: !0,
            autoPlaceholder: "polite",
            containerClass: "",
            countryOrder: null,
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            fixDropdownWidth: !0,
            formatAsYouType: !0,
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: null,
            i18n: {},
            initialCountry: "",
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            showFlags: !0,
            separateDialCode: !1,
            strictMode: !1,
            useFullscreenPopup:
              typeof navigator != "undefined" && typeof window != "undefined"
                ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) || window.innerWidth <= 500
                : !1,
            utilsScript: "",
          },
          b = [
            "800",
            "822",
            "833",
            "844",
            "855",
            "866",
            "877",
            "880",
            "881",
            "882",
            "883",
            "884",
            "885",
            "886",
            "887",
            "888",
            "889",
          ],
          C = (_) => _.replace(/\D/g, ""),
          h = (_ = "") =>
            _.normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase(),
          S = (_) => {
            const v = C(_);
            if (v.charAt(0) === "1") {
              const T = v.substr(1, 3);
              return b.indexOf(T) !== -1;
            }
            return !1;
          },
          x = (_, v, T, O) => {
            if (T === 0 && !O) return 0;
            let D = 0;
            for (let k = 0; k < v.length; k++) {
              if ((/[+0-9]/.test(v[k]) && D++, D === _ && !O)) return k + 1;
              if (O && D === _ + 1) return k;
            }
            return v.length;
          },
          P = (_, v, T) => {
            const O = document.createElement(_);
            return (
              v && Object.entries(v).forEach(([D, k]) => O.setAttribute(D, k)),
              T && T.appendChild(O),
              O
            );
          },
          M = (_) => {
            const { instances: v } = E;
            Object.values(v).forEach((T) => T[_]());
          },
          I = class {
            constructor(_, v = {}) {
              B(this, "id");
              B(this, "promise");
              B(this, "telInput");
              B(this, "highlightedItem");
              B(this, "options");
              B(this, "hadInitialPlaceholder");
              B(this, "isRTL");
              B(this, "selectedCountryData");
              B(this, "countries");
              B(this, "dialCodeMaxLen");
              B(this, "dialCodeToIso2Map");
              B(this, "dialCodes");
              B(this, "countryContainer");
              B(this, "selectedCountry");
              B(this, "selectedCountryInner");
              B(this, "selectedCountryA11yText");
              B(this, "selectedDialCode");
              B(this, "dropdownArrow");
              B(this, "dropdownContent");
              B(this, "searchInput");
              B(this, "searchResultsA11yText");
              B(this, "countryList");
              B(this, "dropdown");
              B(this, "hiddenInput");
              B(this, "hiddenInputCountry");
              B(this, "maxCoreNumberLength");
              B(this, "defaultCountry");
              B(this, "_handleHiddenInputSubmit");
              B(this, "_handleLabelClick");
              B(this, "_handleClickSelectedCountry");
              B(this, "_handleCountryContainerKeydown");
              B(this, "_handleInputEvent");
              B(this, "_handleKeydownEvent");
              B(this, "_handleWindowScroll");
              B(this, "_handleMouseoverCountryList");
              B(this, "_handleClickCountryList");
              B(this, "_handleClickOffToClose");
              B(this, "_handleKeydownOnDropdown");
              B(this, "_handleSearchChange");
              B(this, "resolveAutoCountryPromise");
              B(this, "rejectAutoCountryPromise");
              B(this, "resolveUtilsScriptPromise");
              B(this, "rejectUtilsScriptPromise");
              (this.id = y++),
                (this.telInput = _),
                (this.highlightedItem = null),
                (this.options = Object.assign({}, w, v)),
                (this.hadInitialPlaceholder = !!_.getAttribute("placeholder"));
            }
            _init() {
              this.options.useFullscreenPopup &&
                (this.options.fixDropdownWidth = !1),
                this.options.separateDialCode &&
                  ((this.options.allowDropdown = !0),
                  (this.options.nationalMode = !1)),
                this.options.useFullscreenPopup &&
                  !this.options.dropdownContainer &&
                  (this.options.dropdownContainer = document.body),
                (this.isRTL = !!this.telInput.closest("[dir=rtl]")),
                (this.options.i18n = Bi(Bi({}, g), this.options.i18n));
              const _ = new Promise((T, O) => {
                  (this.resolveAutoCountryPromise = T),
                    (this.rejectAutoCountryPromise = O);
                }),
                v = new Promise((T, O) => {
                  (this.resolveUtilsScriptPromise = T),
                    (this.rejectUtilsScriptPromise = O);
                });
              (this.promise = Promise.all([_, v])),
                (this.selectedCountryData = {}),
                this._processCountryData(),
                this._generateMarkup(),
                this._setInitialState(),
                this._initListeners(),
                this._initRequests();
            }
            _processCountryData() {
              this._processAllCountries(),
                this._processDialCodes(),
                this._translateCountryNames(),
                this.options.countryOrder &&
                  (this.options.countryOrder = this.options.countryOrder.map(
                    (_) => _.toLowerCase()
                  )),
                this._sortCountries();
            }
            _sortCountries() {
              this.countries.sort((_, v) => {
                const { countryOrder: T } = this.options;
                if (T) {
                  const O = T.indexOf(_.iso2),
                    D = T.indexOf(v.iso2),
                    k = O > -1,
                    A = D > -1;
                  if (k || A) return k && A ? O - D : k ? -1 : 1;
                }
                return _.name < v.name ? -1 : _.name > v.name ? 1 : 0;
              });
            }
            _addToDialCodeMap(_, v, T) {
              v.length > this.dialCodeMaxLen &&
                (this.dialCodeMaxLen = v.length),
                this.dialCodeToIso2Map.hasOwnProperty(v) ||
                  (this.dialCodeToIso2Map[v] = []);
              for (let D = 0; D < this.dialCodeToIso2Map[v].length; D++)
                if (this.dialCodeToIso2Map[v][D] === _) return;
              const O = T !== void 0 ? T : this.dialCodeToIso2Map[v].length;
              this.dialCodeToIso2Map[v][O] = _;
            }
            _processAllCountries() {
              const { onlyCountries: _, excludeCountries: v } = this.options;
              if (_.length) {
                const T = _.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => T.indexOf(O.iso2) > -1);
              } else if (v.length) {
                const T = v.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => T.indexOf(O.iso2) === -1);
              } else this.countries = p;
            }
            _translateCountryNames() {
              for (let _ = 0; _ < this.countries.length; _++) {
                const v = this.countries[_].iso2.toLowerCase();
                this.options.i18n.hasOwnProperty(v) &&
                  (this.countries[_].name = this.options.i18n[v]);
              }
            }
            _processDialCodes() {
              (this.dialCodes = {}),
                (this.dialCodeMaxLen = 0),
                (this.dialCodeToIso2Map = {});
              for (let _ = 0; _ < this.countries.length; _++) {
                const v = this.countries[_];
                this.dialCodes[v.dialCode] || (this.dialCodes[v.dialCode] = !0),
                  this._addToDialCodeMap(v.iso2, v.dialCode, v.priority);
              }
              for (let _ = 0; _ < this.countries.length; _++) {
                const v = this.countries[_];
                if (v.areaCodes) {
                  const T = this.dialCodeToIso2Map[v.dialCode][0];
                  for (let O = 0; O < v.areaCodes.length; O++) {
                    const D = v.areaCodes[O];
                    for (let k = 1; k < D.length; k++) {
                      const A = v.dialCode + D.substr(0, k);
                      this._addToDialCodeMap(T, A),
                        this._addToDialCodeMap(v.iso2, A);
                    }
                    this._addToDialCodeMap(v.iso2, v.dialCode + D);
                  }
                }
              }
            }
            _generateMarkup() {
              var re;
              this.telInput.classList.add("iti__tel-input"),
                !this.telInput.hasAttribute("autocomplete") &&
                  !(
                    this.telInput.form &&
                    this.telInput.form.hasAttribute("autocomplete")
                  ) &&
                  this.telInput.setAttribute("autocomplete", "off");
              const {
                allowDropdown: _,
                separateDialCode: v,
                showFlags: T,
                containerClass: O,
                hiddenInput: D,
                dropdownContainer: k,
                fixDropdownWidth: A,
                useFullscreenPopup: V,
                i18n: W,
              } = this.options;
              let J = "iti";
              _ && (J += " iti--allow-dropdown"),
                T && (J += " iti--show-flags"),
                O && (J += ` ${O}`),
                V || (J += " iti--inline-dropdown");
              const K = P("div", { class: J });
              if (
                ((re = this.telInput.parentNode) == null ||
                  re.insertBefore(K, this.telInput),
                _ || T)
              ) {
                (this.countryContainer = P(
                  "div",
                  { class: "iti__country-container" },
                  K
                )),
                  (this.selectedCountry = P(
                    "button",
                    Bi(
                      { type: "button", class: "iti__selected-country" },
                      _ && {
                        "aria-expanded": "false",
                        "aria-label":
                          this.options.i18n.selectedCountryAriaLabel,
                        "aria-haspopup": "true",
                        "aria-controls": `iti-${this.id}__dropdown-content`,
                        role: "combobox",
                      }
                    ),
                    this.countryContainer
                  ));
                const de = P(
                  "div",
                  { class: "iti__selected-country-primary" },
                  this.selectedCountry
                );
                if (
                  ((this.selectedCountryInner = P("div", null, de)),
                  (this.selectedCountryA11yText = P(
                    "span",
                    { class: "iti__a11y-text" },
                    this.selectedCountryInner
                  )),
                  this.telInput.disabled
                    ? this.selectedCountry.setAttribute("aria-disabled", "true")
                    : this.selectedCountry.setAttribute("tabindex", "0"),
                  _ &&
                    (this.dropdownArrow = P(
                      "div",
                      { class: "iti__arrow", "aria-hidden": "true" },
                      de
                    )),
                  v &&
                    (this.selectedDialCode = P(
                      "div",
                      { class: "iti__selected-dial-code" },
                      this.selectedCountry
                    )),
                  _)
                ) {
                  const fe = A ? "" : "iti--flexible-dropdown-width";
                  if (
                    ((this.dropdownContent = P("div", {
                      id: `iti-${this.id}__dropdown-content`,
                      class: `iti__dropdown-content iti__hide ${fe}`,
                    })),
                    (this.searchInput = P(
                      "input",
                      {
                        type: "text",
                        class: "iti__search-input",
                        placeholder: W.searchPlaceholder,
                        role: "combobox",
                        "aria-expanded": "true",
                        "aria-label": W.searchPlaceholder,
                        "aria-controls": `iti-${this.id}__country-listbox`,
                        "aria-autocomplete": "list",
                        autocomplete: "off",
                      },
                      this.dropdownContent
                    )),
                    (this.searchResultsA11yText = P(
                      "span",
                      { class: "iti__a11y-text" },
                      this.dropdownContent
                    )),
                    (this.countryList = P(
                      "ul",
                      {
                        class: "iti__country-list",
                        id: `iti-${this.id}__country-listbox`,
                        role: "listbox",
                        "aria-label": W.countryListAriaLabel,
                      },
                      this.dropdownContent
                    )),
                    this._appendListItems(this.countries, "iti__standard"),
                    this._updateSearchResultsText(),
                    k)
                  ) {
                    let ge = "iti iti--container";
                    V
                      ? (ge += " iti--fullscreen-popup")
                      : (ge += " iti--inline-dropdown"),
                      (this.dropdown = P("div", { class: ge })),
                      this.dropdown.appendChild(this.dropdownContent);
                  } else
                    this.countryContainer.appendChild(this.dropdownContent);
                }
              }
              if ((K.appendChild(this.telInput), D)) {
                const de = this.telInput.getAttribute("name") || "",
                  fe = D(de);
                fe.phone &&
                  ((this.hiddenInput = P("input", {
                    type: "hidden",
                    name: fe.phone,
                  })),
                  K.appendChild(this.hiddenInput)),
                  fe.country &&
                    ((this.hiddenInputCountry = P("input", {
                      type: "hidden",
                      name: fe.country,
                    })),
                    K.appendChild(this.hiddenInputCountry));
              }
            }
            _appendListItems(_, v) {
              for (let T = 0; T < _.length; T++) {
                const O = _[T],
                  D = P(
                    "li",
                    {
                      id: `iti-${this.id}__item-${O.iso2}`,
                      class: `iti__country ${v}`,
                      tabindex: "-1",
                      role: "option",
                      "data-dial-code": O.dialCode,
                      "data-country-code": O.iso2,
                      "aria-selected": "false",
                    },
                    this.countryList
                  );
                O.nodeById[this.id] = D;
                let k = "";
                this.options.showFlags &&
                  (k += `<div class='iti__flag-box'><div class='iti__flag iti__${O.iso2}'></div></div>`),
                  (k += `<span class='iti__country-name'>${O.name}</span>`),
                  (k += `<span class='iti__dial-code'>+${O.dialCode}</span>`),
                  D.insertAdjacentHTML("beforeend", k);
              }
            }
            _setInitialState(_ = !1) {
              const v = this.telInput.getAttribute("value"),
                T = this.telInput.value,
                D =
                  v && v.charAt(0) === "+" && (!T || T.charAt(0) !== "+")
                    ? v
                    : T,
                k = this._getDialCode(D),
                A = S(D),
                { initialCountry: V } = this.options;
              if (k && !A) this._updateCountryFromNumber(D);
              else if (V !== "auto" || _) {
                const W = V ? V.toLowerCase() : "";
                W && this._getCountryData(W, !0)
                  ? this._setCountry(W)
                  : k && A
                  ? this._setCountry("us")
                  : this._setCountry();
              }
              D && this._updateValFromNumber(D);
            }
            _initListeners() {
              this._initTelInputListeners(),
                this.options.allowDropdown && this._initDropdownListeners(),
                (this.hiddenInput || this.hiddenInputCountry) &&
                  this.telInput.form &&
                  this._initHiddenInputListener();
            }
            _initHiddenInputListener() {
              var _;
              (this._handleHiddenInputSubmit = () => {
                this.hiddenInput && (this.hiddenInput.value = this.getNumber()),
                  this.hiddenInputCountry &&
                    (this.hiddenInputCountry.value =
                      this.getSelectedCountryData().iso2 || "");
              }),
                (_ = this.telInput.form) == null ||
                  _.addEventListener("submit", this._handleHiddenInputSubmit);
            }
            _initDropdownListeners() {
              this._handleLabelClick = (v) => {
                this.dropdownContent.classList.contains("iti__hide")
                  ? this.telInput.focus()
                  : v.preventDefault();
              };
              const _ = this.telInput.closest("label");
              _ && _.addEventListener("click", this._handleLabelClick),
                (this._handleClickSelectedCountry = () => {
                  this.dropdownContent.classList.contains("iti__hide") &&
                    !this.telInput.disabled &&
                    !this.telInput.readOnly &&
                    this._openDropdown();
                }),
                this.selectedCountry.addEventListener(
                  "click",
                  this._handleClickSelectedCountry
                ),
                (this._handleCountryContainerKeydown = (v) => {
                  this.dropdownContent.classList.contains("iti__hide") &&
                    ["ArrowUp", "ArrowDown", " ", "Enter"].includes(v.key) &&
                    (v.preventDefault(),
                    v.stopPropagation(),
                    this._openDropdown()),
                    v.key === "Tab" && this._closeDropdown();
                }),
                this.countryContainer.addEventListener(
                  "keydown",
                  this._handleCountryContainerKeydown
                );
            }
            _initRequests() {
              this.options.utilsScript && !E.utils
                ? E.documentReady()
                  ? E.loadUtils(this.options.utilsScript)
                  : window.addEventListener("load", () => {
                      E.loadUtils(this.options.utilsScript);
                    })
                : this.resolveUtilsScriptPromise(),
                this.options.initialCountry === "auto" &&
                !this.selectedCountryData.iso2
                  ? this._loadAutoCountry()
                  : this.resolveAutoCountryPromise();
            }
            _loadAutoCountry() {
              E.autoCountry
                ? this.handleAutoCountry()
                : E.startedLoadingAutoCountry ||
                  ((E.startedLoadingAutoCountry = !0),
                  typeof this.options.geoIpLookup == "function" &&
                    this.options.geoIpLookup(
                      (_ = "") => {
                        const v = _.toLowerCase();
                        v && this._getCountryData(v, !0)
                          ? ((E.autoCountry = v),
                            setTimeout(() => M("handleAutoCountry")))
                          : (this._setInitialState(!0),
                            M("rejectAutoCountryPromise"));
                      },
                      () => {
                        this._setInitialState(!0),
                          M("rejectAutoCountryPromise");
                      }
                    ));
            }
            _initTelInputListeners() {
              const {
                strictMode: _,
                formatAsYouType: v,
                separateDialCode: T,
              } = this.options;
              let O = !1;
              (this._handleInputEvent = (D) => {
                this._updateCountryFromNumber(this.telInput.value) &&
                  this._triggerCountryChange();
                const k = D && D.data && /[^+0-9]/.test(D.data),
                  A =
                    D &&
                    D.inputType === "insertFromPaste" &&
                    this.telInput.value;
                if (
                  (k || (A && !_)
                    ? (O = !0)
                    : /[^+0-9]/.test(this.telInput.value) || (O = !1),
                  v && !O)
                ) {
                  const V = this.telInput.selectionStart || 0,
                    J = this.telInput.value
                      .substring(0, V)
                      .replace(/[^+0-9]/g, "").length,
                    K = D && D.inputType === "deleteContentForward",
                    re = this._formatNumberAsYouType(),
                    de = x(J, re, V, K);
                  (this.telInput.value = re),
                    this.telInput.setSelectionRange(de, de);
                }
              }),
                this.telInput.addEventListener("input", this._handleInputEvent),
                (_ || T) &&
                  ((this._handleKeydownEvent = (D) => {
                    if (
                      D.key &&
                      D.key.length === 1 &&
                      !D.altKey &&
                      !D.ctrlKey &&
                      !D.metaKey
                    ) {
                      if (T && D.key === "+") {
                        D.preventDefault(),
                          this._openDropdown(),
                          (this.searchInput.value = "+"),
                          this._filterCountries("", !0);
                        return;
                      }
                      if (_) {
                        const k =
                            this.telInput.selectionStart === 0 && D.key === "+",
                          A = /^[0-9]$/.test(D.key),
                          V = k || A,
                          W = this._getFullNumber(),
                          J = E.utils.getCoreNumber(
                            W,
                            this.selectedCountryData.iso2
                          ),
                          K =
                            this.maxCoreNumberLength &&
                            J.length >= this.maxCoreNumberLength;
                        (!V || K) && D.preventDefault();
                      }
                    }
                  }),
                  this.telInput.addEventListener(
                    "keydown",
                    this._handleKeydownEvent
                  ));
            }
            _cap(_) {
              const v = parseInt(
                this.telInput.getAttribute("maxlength") || "",
                10
              );
              return v && _.length > v ? _.substr(0, v) : _;
            }
            _trigger(_) {
              const v = new Event(_, { bubbles: !0, cancelable: !0 });
              this.telInput.dispatchEvent(v);
            }
            _openDropdown() {
              const { fixDropdownWidth: _ } = this.options;
              _ &&
                (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
                this.dropdownContent.classList.remove("iti__hide"),
                this.selectedCountry.setAttribute("aria-expanded", "true"),
                this._setDropdownPosition();
              const v = this.countryList.firstElementChild;
              v &&
                (this._highlightListItem(v, !1),
                (this.countryList.scrollTop = 0)),
                this.searchInput.focus(),
                this._bindDropdownListeners(),
                this.dropdownArrow.classList.add("iti__arrow--up"),
                this._trigger("open:countrydropdown");
            }
            _setDropdownPosition() {
              if (
                (this.options.dropdownContainer &&
                  this.options.dropdownContainer.appendChild(this.dropdown),
                !this.options.useFullscreenPopup)
              ) {
                const _ = this.telInput.getBoundingClientRect(),
                  v = this.telInput.offsetHeight;
                this.options.dropdownContainer &&
                  ((this.dropdown.style.top = `${_.top + v}px`),
                  (this.dropdown.style.left = `${_.left}px`),
                  (this._handleWindowScroll = () => this._closeDropdown()),
                  window.addEventListener("scroll", this._handleWindowScroll));
              }
            }
            _bindDropdownListeners() {
              (this._handleMouseoverCountryList = (O) => {
                var k;
                const D =
                  (k = O.target) == null ? void 0 : k.closest(".iti__country");
                D && this._highlightListItem(D, !1);
              }),
                this.countryList.addEventListener(
                  "mouseover",
                  this._handleMouseoverCountryList
                ),
                (this._handleClickCountryList = (O) => {
                  var k;
                  const D =
                    (k = O.target) == null
                      ? void 0
                      : k.closest(".iti__country");
                  D && this._selectListItem(D);
                }),
                this.countryList.addEventListener(
                  "click",
                  this._handleClickCountryList
                );
              let _ = !0;
              (this._handleClickOffToClose = () => {
                _ || this._closeDropdown(), (_ = !1);
              }),
                document.documentElement.addEventListener(
                  "click",
                  this._handleClickOffToClose
                ),
                (this._handleKeydownOnDropdown = (O) => {
                  ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(O.key) &&
                    (O.preventDefault(),
                    O.stopPropagation(),
                    O.key === "ArrowUp" || O.key === "ArrowDown"
                      ? this._handleUpDownKey(O.key)
                      : O.key === "Enter"
                      ? this._handleEnterKey()
                      : O.key === "Escape" && this._closeDropdown());
                }),
                document.addEventListener(
                  "keydown",
                  this._handleKeydownOnDropdown
                );
              const v = () => {
                const O = this.searchInput.value.trim();
                O ? this._filterCountries(O) : this._filterCountries("", !0);
              };
              let T = null;
              (this._handleSearchChange = () => {
                T && clearTimeout(T),
                  (T = setTimeout(() => {
                    v(), (T = null);
                  }, 100));
              }),
                this.searchInput.addEventListener(
                  "input",
                  this._handleSearchChange
                ),
                this.searchInput.addEventListener("click", (O) =>
                  O.stopPropagation()
                );
            }
            _filterCountries(_, v = !1) {
              let T = !0;
              this.countryList.innerHTML = "";
              const O = h(_);
              for (let D = 0; D < this.countries.length; D++) {
                const k = this.countries[D],
                  A = h(k.name),
                  V = `+${k.dialCode}`;
                if (v || A.includes(O) || V.includes(O) || k.iso2.includes(O)) {
                  const W = k.nodeById[this.id];
                  W && this.countryList.appendChild(W),
                    T && (this._highlightListItem(W, !1), (T = !1));
                }
              }
              (this.countryList.scrollTop = 0), this._updateSearchResultsText();
            }
            _updateSearchResultsText() {
              const { i18n: _ } = this.options,
                v = this.countryList.childElementCount;
              let T;
              v === 0
                ? (T = _.zeroSearchResults)
                : v === 1
                ? (T = _.oneSearchResult)
                : (T = _.multipleSearchResults.replace(
                    "${count}",
                    v.toString()
                  )),
                (this.searchResultsA11yText.textContent = T);
            }
            _handleUpDownKey(_) {
              var T, O;
              let v =
                _ === "ArrowUp"
                  ? (T = this.highlightedItem) == null
                    ? void 0
                    : T.previousElementSibling
                  : (O = this.highlightedItem) == null
                  ? void 0
                  : O.nextElementSibling;
              !v &&
                this.countryList.childElementCount > 1 &&
                (v =
                  _ === "ArrowUp"
                    ? this.countryList.lastElementChild
                    : this.countryList.firstElementChild),
                v && (this._scrollTo(v), this._highlightListItem(v, !1));
            }
            _handleEnterKey() {
              this.highlightedItem &&
                this._selectListItem(this.highlightedItem);
            }
            _updateValFromNumber(_) {
              let v = _;
              if (
                this.options.formatOnDisplay &&
                E.utils &&
                this.selectedCountryData
              ) {
                const T =
                    this.options.nationalMode ||
                    (v.charAt(0) !== "+" && !this.options.separateDialCode),
                  { NATIONAL: O, INTERNATIONAL: D } = E.utils.numberFormat,
                  k = T ? O : D;
                v = E.utils.formatNumber(v, this.selectedCountryData.iso2, k);
              }
              (v = this._beforeSetNumber(v)), (this.telInput.value = v);
            }
            _updateCountryFromNumber(_) {
              const v = _.indexOf("+");
              let T = v ? _.substring(v) : _;
              const O = this.selectedCountryData.dialCode;
              T &&
                O === "1" &&
                T.charAt(0) !== "+" &&
                (T.charAt(0) !== "1" && (T = `1${T}`), (T = `+${T}`)),
                this.options.separateDialCode &&
                  O &&
                  T.charAt(0) !== "+" &&
                  (T = `+${O}${T}`);
              const k = this._getDialCode(T, !0),
                A = C(T);
              let V = null;
              if (k) {
                const W = this.dialCodeToIso2Map[C(k)],
                  J =
                    W.indexOf(this.selectedCountryData.iso2) !== -1 &&
                    A.length <= k.length - 1;
                if (!(O === "1" && S(A)) && !J) {
                  for (let re = 0; re < W.length; re++)
                    if (W[re]) {
                      V = W[re];
                      break;
                    }
                }
              } else
                T.charAt(0) === "+" && A.length
                  ? (V = "")
                  : (!T || T === "+") &&
                    !this.selectedCountryData.iso2 &&
                    (V = this.defaultCountry);
              return V !== null ? this._setCountry(V) : !1;
            }
            _highlightListItem(_, v) {
              const T = this.highlightedItem;
              T &&
                (T.classList.remove("iti__highlight"),
                T.setAttribute("aria-selected", "false")),
                (this.highlightedItem = _),
                this.highlightedItem.classList.add("iti__highlight"),
                this.highlightedItem.setAttribute("aria-selected", "true"),
                this.selectedCountry.setAttribute(
                  "aria-activedescendant",
                  _.getAttribute("id") || ""
                ),
                this.searchInput.setAttribute(
                  "aria-activedescendant",
                  _.getAttribute("id") || ""
                ),
                v && this.highlightedItem.focus();
            }
            _getCountryData(_, v) {
              for (let T = 0; T < this.countries.length; T++)
                if (this.countries[T].iso2 === _) return this.countries[T];
              if (v) return null;
              throw new Error(`No country data for '${_}'`);
            }
            _setCountry(_) {
              const {
                  separateDialCode: v,
                  showFlags: T,
                  i18n: O,
                } = this.options,
                D = this.selectedCountryData.iso2
                  ? this.selectedCountryData
                  : {};
              if (
                ((this.selectedCountryData = _
                  ? this._getCountryData(_, !1) || {}
                  : {}),
                this.selectedCountryData.iso2 &&
                  (this.defaultCountry = this.selectedCountryData.iso2),
                this.selectedCountryInner)
              ) {
                let k = "",
                  A = "";
                _ && T
                  ? ((k = `iti__flag iti__${_}`),
                    (A = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                  : ((k = "iti__flag iti__globe"), (A = O.noCountrySelected)),
                  (this.selectedCountryInner.className = k),
                  (this.selectedCountryA11yText.textContent = A);
              }
              if ((this._setSelectedCountryTitleAttribute(_, v), v)) {
                const k = this.selectedCountryData.dialCode
                  ? `+${this.selectedCountryData.dialCode}`
                  : "";
                this.selectedDialCode.innerHTML = k;
                const V =
                  (this.selectedCountry.offsetWidth ||
                    this._getHiddenSelectedCountryWidth()) + 8;
                this.isRTL
                  ? (this.telInput.style.paddingRight = `${V}px`)
                  : (this.telInput.style.paddingLeft = `${V}px`);
              }
              return (
                this._updatePlaceholder(), this._updateMaxLength(), D.iso2 !== _
              );
            }
            _updateMaxLength() {
              if (this.options.strictMode && E.utils)
                if (this.selectedCountryData.iso2) {
                  const _ =
                    E.utils.numberType[this.options.placeholderNumberType];
                  let v = E.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      !1,
                      _,
                      !0
                    ),
                    T = v;
                  for (
                    ;
                    E.utils.isPossibleNumber(v, this.selectedCountryData.iso2);

                  )
                    (T = v), (v += "0");
                  const O = E.utils.getCoreNumber(
                    T,
                    this.selectedCountryData.iso2
                  );
                  this.maxCoreNumberLength = O.length;
                } else this.maxCoreNumberLength = null;
            }
            _setSelectedCountryTitleAttribute(_ = null, v) {
              if (!this.selectedCountry) return;
              let T;
              _ && !v
                ? (T = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
                : _
                ? (T = this.selectedCountryData.name)
                : (T = "Unknown"),
                this.selectedCountry.setAttribute("title", T);
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                const _ = this.telInput.parentNode.cloneNode(!1);
                (_.style.visibility = "hidden"), document.body.appendChild(_);
                const v = this.countryContainer.cloneNode();
                _.appendChild(v);
                const T = this.selectedCountry.cloneNode(!0);
                v.appendChild(T);
                const O = T.offsetWidth;
                return document.body.removeChild(_), O;
              }
              return 0;
            }
            _updatePlaceholder() {
              const {
                  autoPlaceholder: _,
                  placeholderNumberType: v,
                  nationalMode: T,
                  customPlaceholder: O,
                } = this.options,
                D =
                  _ === "aggressive" ||
                  (!this.hadInitialPlaceholder && _ === "polite");
              if (E.utils && D) {
                const k = E.utils.numberType[v];
                let A = this.selectedCountryData.iso2
                  ? E.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      T,
                      k
                    )
                  : "";
                (A = this._beforeSetNumber(A)),
                  typeof O == "function" &&
                    (A = O(A, this.selectedCountryData)),
                  this.telInput.setAttribute("placeholder", A);
              }
            }
            _selectListItem(_) {
              const v = this._setCountry(_.getAttribute("data-country-code"));
              this._closeDropdown(),
                this._updateDialCode(_.getAttribute("data-dial-code")),
                this.telInput.focus(),
                v && this._triggerCountryChange();
            }
            _closeDropdown() {
              this.dropdownContent.classList.add("iti__hide"),
                this.selectedCountry.setAttribute("aria-expanded", "false"),
                this.selectedCountry.removeAttribute("aria-activedescendant"),
                this.highlightedItem &&
                  this.highlightedItem.setAttribute("aria-selected", "false"),
                this.searchInput.removeAttribute("aria-activedescendant"),
                this.dropdownArrow.classList.remove("iti__arrow--up"),
                document.removeEventListener(
                  "keydown",
                  this._handleKeydownOnDropdown
                ),
                this.searchInput.removeEventListener(
                  "input",
                  this._handleSearchChange
                ),
                document.documentElement.removeEventListener(
                  "click",
                  this._handleClickOffToClose
                ),
                this.countryList.removeEventListener(
                  "mouseover",
                  this._handleMouseoverCountryList
                ),
                this.countryList.removeEventListener(
                  "click",
                  this._handleClickCountryList
                ),
                this.options.dropdownContainer &&
                  (this.options.useFullscreenPopup ||
                    window.removeEventListener(
                      "scroll",
                      this._handleWindowScroll
                    ),
                  this.dropdown.parentNode &&
                    this.dropdown.parentNode.removeChild(this.dropdown)),
                this._trigger("close:countrydropdown");
            }
            _scrollTo(_) {
              const v = this.countryList,
                T = document.documentElement.scrollTop,
                O = v.offsetHeight,
                D = v.getBoundingClientRect().top + T,
                k = D + O,
                A = _.offsetHeight,
                V = _.getBoundingClientRect().top + T,
                W = V + A,
                J = V - D + v.scrollTop;
              if (V < D) v.scrollTop = J;
              else if (W > k) {
                const K = O - A;
                v.scrollTop = J - K;
              }
            }
            _updateDialCode(_) {
              const v = this.telInput.value,
                T = `+${_}`;
              let O;
              if (v.charAt(0) === "+") {
                const D = this._getDialCode(v);
                D ? (O = v.replace(D, T)) : (O = T), (this.telInput.value = O);
              }
            }
            _getDialCode(_, v) {
              let T = "";
              if (_.charAt(0) === "+") {
                let O = "";
                for (let D = 0; D < _.length; D++) {
                  const k = _.charAt(D);
                  if (!isNaN(parseInt(k, 10))) {
                    if (((O += k), v))
                      this.dialCodeToIso2Map[O] && (T = _.substr(0, D + 1));
                    else if (this.dialCodes[O]) {
                      T = _.substr(0, D + 1);
                      break;
                    }
                    if (O.length === this.dialCodeMaxLen) break;
                  }
                }
              }
              return T;
            }
            _getFullNumber() {
              const _ = this.telInput.value.trim(),
                { dialCode: v } = this.selectedCountryData;
              let T;
              const O = C(_);
              return (
                this.options.separateDialCode && _.charAt(0) !== "+" && v && O
                  ? (T = `+${v}`)
                  : (T = ""),
                T + _
              );
            }
            _beforeSetNumber(_) {
              let v = _;
              if (this.options.separateDialCode) {
                let T = this._getDialCode(v);
                if (T) {
                  T = `+${this.selectedCountryData.dialCode}`;
                  const O =
                    v[T.length] === " " || v[T.length] === "-"
                      ? T.length + 1
                      : T.length;
                  v = v.substr(O);
                }
              }
              return this._cap(v);
            }
            _triggerCountryChange() {
              this._trigger("countrychange");
            }
            _formatNumberAsYouType() {
              const _ = this._getFullNumber(),
                v = E.utils
                  ? E.utils.formatNumberAsYouType(
                      _,
                      this.selectedCountryData.iso2
                    )
                  : _,
                { dialCode: T } = this.selectedCountryData;
              return this.options.separateDialCode &&
                this.telInput.value.charAt(0) !== "+" &&
                v.includes(`+${T}`)
                ? (v.split(`+${T}`)[1] || "").trim()
                : v;
            }
            handleAutoCountry() {
              this.options.initialCountry === "auto" &&
                E.autoCountry &&
                ((this.defaultCountry = E.autoCountry),
                this.telInput.value || this.setCountry(this.defaultCountry),
                this.resolveAutoCountryPromise());
            }
            handleUtils() {
              E.utils &&
                (this.telInput.value &&
                  this._updateValFromNumber(this.telInput.value),
                this.selectedCountryData.iso2 &&
                  (this._updatePlaceholder(), this._updateMaxLength())),
                this.resolveUtilsScriptPromise();
            }
            destroy() {
              var T, O;
              if (this.options.allowDropdown) {
                this._closeDropdown(),
                  this.selectedCountry.removeEventListener(
                    "click",
                    this._handleClickSelectedCountry
                  ),
                  this.countryContainer.removeEventListener(
                    "keydown",
                    this._handleCountryContainerKeydown
                  );
                const D = this.telInput.closest("label");
                D && D.removeEventListener("click", this._handleLabelClick);
              }
              const { form: _ } = this.telInput;
              this._handleHiddenInputSubmit &&
                _ &&
                _.removeEventListener("submit", this._handleHiddenInputSubmit),
                this.telInput.removeEventListener(
                  "input",
                  this._handleInputEvent
                ),
                this._handleKeydownEvent &&
                  this.telInput.removeEventListener(
                    "keydown",
                    this._handleKeydownEvent
                  ),
                this.telInput.removeAttribute("data-intl-tel-input-id");
              const v = this.telInput.parentNode;
              (T = v == null ? void 0 : v.parentNode) == null ||
                T.insertBefore(this.telInput, v),
                (O = v == null ? void 0 : v.parentNode) == null ||
                  O.removeChild(v),
                delete E.instances[this.id];
            }
            getExtension() {
              return E.utils
                ? E.utils.getExtension(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : "";
            }
            getNumber(_) {
              if (E.utils) {
                const { iso2: v } = this.selectedCountryData;
                return E.utils.formatNumber(this._getFullNumber(), v, _);
              }
              return "";
            }
            getNumberType() {
              return E.utils
                ? E.utils.getNumberType(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : -99;
            }
            getSelectedCountryData() {
              return this.selectedCountryData;
            }
            getValidationError() {
              if (E.utils) {
                const { iso2: _ } = this.selectedCountryData;
                return E.utils.getValidationError(this._getFullNumber(), _);
              }
              return -99;
            }
            isValidNumber(_ = !0) {
              const v = this._getFullNumber();
              return new RegExp("\\p{L}", "u").test(v)
                ? !1
                : E.utils
                ? E.utils.isPossibleNumber(v, this.selectedCountryData.iso2, _)
                : null;
            }
            isValidNumberPrecise() {
              const _ = this._getFullNumber();
              return new RegExp("\\p{L}", "u").test(_)
                ? !1
                : E.utils
                ? E.utils.isValidNumber(_, this.selectedCountryData.iso2)
                : null;
            }
            setCountry(_) {
              const v = _.toLowerCase();
              this.selectedCountryData.iso2 !== v &&
                (this._setCountry(v),
                this._updateDialCode(this.selectedCountryData.dialCode),
                this._triggerCountryChange());
            }
            setNumber(_) {
              const v = this._updateCountryFromNumber(_);
              this._updateValFromNumber(_), v && this._triggerCountryChange();
            }
            setPlaceholderNumberType(_) {
              (this.options.placeholderNumberType = _),
                this._updatePlaceholder();
            }
          },
          L = (_, v, T) => {
            const O = document.createElement("script");
            (O.onload = () => {
              window.intlTelInputUtils &&
                ((E.utils = window.intlTelInputUtils),
                delete window.intlTelInputUtils,
                window.intlTelInputUtilsBackup &&
                  ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                  delete window.intlTelInputUtilsBackup)),
                M("handleUtils"),
                v && v();
            }),
              (O.onerror = () => {
                M("rejectUtilsScriptPromise"), T && T();
              }),
              (O.className = "iti-load-utils"),
              (O.async = !0),
              (O.src = _),
              document.body.appendChild(O);
          },
          R = (_) =>
            !E.utils && !E.startedLoadingUtilsScript
              ? ((E.startedLoadingUtilsScript = !0),
                new Promise((v, T) => L(_, v, T)))
              : null,
          E = Object.assign(
            (_, v) => {
              const T = new I(_, v);
              return (
                T._init(),
                _.setAttribute("data-intl-tel-input-id", T.id.toString()),
                (E.instances[T.id] = T),
                T
              );
            },
            {
              defaults: w,
              documentReady: () => document.readyState === "complete",
              getCountryData: () => p,
              getInstance: (_) => {
                const v = _.getAttribute("data-intl-tel-input-id");
                return v ? E.instances[v] : null;
              },
              instances: {},
              loadUtils: R,
              version: "22.0.0",
            }
          ),
          N = E;
        return l(u);
      })();
      return e.default;
    });
  })(nd);
  var gg = nd.exports;
  const vg = mg(gg),
    _g = () => {
      function r(i) {
        const n = document.querySelector(`[calc-phone="${i}"]`),
          s = document.querySelector(`[dial-code="${i}"]`),
          o = document.querySelector(`[hidden-country-name="${i}"]`),
          a = document.querySelector(`[hidden-full-phone="${i}"]`);
        if (!n || !s || !o || !a) {
          console.warn(`Phone input elements not found for form: ${i}`);
          return;
        }
        const l = vg(n, {
          utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.0/build/js/utils.js",
          initialCountry: "us",
          strictMode: !0,
          nationalMode: !1,
          autoPlaceholder: "polite",
          separateDialCode: !0,
          countrySearch: !0,
          i18n: { searchPlaceholder: "Search countries" },
        });
        function u() {
          (s.value = "+" + l.getSelectedCountryData().dialCode),
            (o.value = l.getSelectedCountryData().name),
            l.isValidNumber() ? (a.value = l.getNumber()) : (a.value = "");
        }
        u(),
          n.addEventListener("countrychange", u),
          n.addEventListener("input", u);
      }
      function e() {
        document.querySelectorAll("[custom-form]").forEach((n) => {
          const s = n.getAttribute("custom-form");
          document.querySelector(`[calc-phone="${s}"]`) && r(s);
        });
      }
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", e)
        : e(),
        new MutationObserver(() => {
          document.querySelectorAll(".iti__country-list").forEach((n) => {
            n.hasAttribute("data-lenis-prevent") ||
              n.setAttribute("data-lenis-prevent", "");
          });
        }).observe(document.body, { childList: !0, subtree: !0 }),
        (window.initPhoneInputForForm = r);
    },
    yg = () => {
      _g();
    };
  var wg = "1.3.4";
  function sd(r, e, t) {
    return Math.max(r, Math.min(e, t));
  }
  function bg(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function Sg(r, e, t, i) {
    return bg(r, e, 1 - Math.exp(-t * i));
  }
  function Tg(r, e) {
    return ((r % e) + e) % e;
  }
  var xg = class {
    constructor() {
      B(this, "isRunning", !1);
      B(this, "value", 0);
      B(this, "from", 0);
      B(this, "to", 0);
      B(this, "currentTime", 0);
      B(this, "lerp");
      B(this, "duration");
      B(this, "easing");
      B(this, "onUpdate");
    }
    advance(r) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += r;
        const i = sd(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const n = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * n;
      } else
        this.lerp
          ? ((this.value = Sg(this.value, this.to, this.lerp * 60, r)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(r, e, { lerp: t, duration: i, easing: n, onStart: s, onUpdate: o }) {
      (this.from = this.value = r),
        (this.to = e),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = n),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o);
    }
  };
  function Cg(r, e) {
    let t;
    return function (...i) {
      let n = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), r.apply(n, i);
        }, e));
    };
  }
  var Eg = class {
      constructor(r, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        B(this, "width", 0);
        B(this, "height", 0);
        B(this, "scrollHeight", 0);
        B(this, "scrollWidth", 0);
        B(this, "debouncedResize");
        B(this, "wrapperResizeObserver");
        B(this, "contentResizeObserver");
        B(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        B(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        B(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = r),
          (this.content = e),
          t &&
            ((this.debouncedResize = Cg(this.resize, i)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var r, e;
        (r = this.wrapperResizeObserver) == null || r.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    od = class {
      constructor() {
        B(this, "events", {});
      }
      emit(r, ...e) {
        var i;
        let t = this.events[r] || [];
        for (let n = 0, s = t.length; n < s; n++)
          (i = t[n]) == null || i.call(t, ...e);
      }
      on(r, e) {
        var t;
        return (
          ((t = this.events[r]) != null && t.push(e)) || (this.events[r] = [e]),
          () => {
            var i;
            this.events[r] =
              (i = this.events[r]) == null ? void 0 : i.filter((n) => e !== n);
          }
        );
      }
      off(r, e) {
        var t;
        this.events[r] =
          (t = this.events[r]) == null ? void 0 : t.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    ad = 100 / 6,
    ir = { passive: !1 },
    Ag = class {
      constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        B(this, "touchStart", { x: 0, y: 0 });
        B(this, "lastDelta", { x: 0, y: 0 });
        B(this, "window", { width: 0, height: 0 });
        B(this, "emitter", new od());
        B(this, "onTouchStart", (r) => {
          const { clientX: e, clientY: t } = r.targetTouches
            ? r.targetTouches[0]
            : r;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: r });
        });
        B(this, "onTouchMove", (r) => {
          const { clientX: e, clientY: t } = r.targetTouches
              ? r.targetTouches[0]
              : r,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            n = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: i, y: n }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: n, event: r });
        });
        B(this, "onTouchEnd", (r) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: r,
          });
        });
        B(this, "onWheel", (r) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = r;
          const n = i === 1 ? ad : i === 2 ? this.window.width : 1,
            s = i === 1 ? ad : i === 2 ? this.window.height : 1;
          (e *= n),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: r });
        });
        B(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = r),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, ir),
          this.element.addEventListener("touchstart", this.onTouchStart, ir),
          this.element.addEventListener("touchmove", this.onTouchMove, ir),
          this.element.addEventListener("touchend", this.onTouchEnd, ir);
      }
      on(r, e) {
        return this.emitter.on(r, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, ir),
          this.element.removeEventListener("touchstart", this.onTouchStart, ir),
          this.element.removeEventListener("touchmove", this.onTouchMove, ir),
          this.element.removeEventListener("touchend", this.onTouchEnd, ir);
      }
    },
    ld = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
    Pg = class {
      constructor({
        wrapper: r = window,
        content: e = document.documentElement,
        eventsTarget: t = r,
        smoothWheel: i = !0,
        syncTouch: n = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l,
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: d = "vertical",
        gestureOrientation: p = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: m = 1,
        autoResize: g = !0,
        prevent: y,
        virtualScroll: w,
        overscroll: b = !0,
        autoRaf: C = !1,
        anchors: h = !1,
        autoToggle: S = !1,
        allowNestedScroll: x = !1,
        __experimental__naiveDimensions: P = !1,
      } = {}) {
        B(this, "_isScrolling", !1);
        B(this, "_isStopped", !1);
        B(this, "_isLocked", !1);
        B(this, "_preventNextNativeScrollEvent", !1);
        B(this, "_resetVelocityTimeout", null);
        B(this, "__rafID", null);
        B(this, "isTouching");
        B(this, "time", 0);
        B(this, "userData", {});
        B(this, "lastVelocity", 0);
        B(this, "velocity", 0);
        B(this, "direction", 0);
        B(this, "options");
        B(this, "targetScroll");
        B(this, "animatedScroll");
        B(this, "animate", new xg());
        B(this, "emitter", new od());
        B(this, "dimensions");
        B(this, "virtualScroll");
        B(this, "onScrollEnd", (r) => {
          r instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              r.stopPropagation());
        });
        B(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        B(this, "onTransitionEnd", (r) => {
          if (r.propertyName.includes("overflow")) {
            const e = this.isHorizontal ? "overflow-x" : "overflow-y",
              t = getComputedStyle(this.rootElement)[e];
            ["hidden", "clip"].includes(t) ? this.stop() : this.start();
          }
        });
        B(this, "onClick", (r) => {
          const t = r.composedPath().find((i) => {
            var n, s, o;
            return (
              i instanceof HTMLAnchorElement &&
              (((n = i.getAttribute("href")) == null
                ? void 0
                : n.startsWith("#")) ||
                ((s = i.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((o = i.getAttribute("href")) == null
                  ? void 0
                  : o.startsWith("./#")))
            );
          });
          if (t) {
            const i = t.getAttribute("href");
            if (i) {
              const n =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let s = `#${i.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(i) &&
                (s = 0),
                this.scrollTo(s, n);
            }
          }
        });
        B(this, "onPointerDown", (r) => {
          r.button === 1 && this.reset();
        });
        B(this, "onVirtualScroll", (r) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(r) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: i } = r;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const n = i.type.includes("touch"),
            s = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const o = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            n &&
            i.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (o || l) return;
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((y) => {
              var w, b, C;
              return (
                y instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(y))) ||
                  ((w = y.hasAttribute) == null
                    ? void 0
                    : w.call(y, "data-lenis-prevent")) ||
                  (n &&
                    ((b = y.hasAttribute) == null
                      ? void 0
                      : b.call(y, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((C = y.hasAttribute) == null
                      ? void 0
                      : C.call(y, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(y, { deltaX: e, deltaY: t })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && n) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let p = t;
          this.options.gestureOrientation === "both"
            ? (p = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (p = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const f = n && this.options.syncTouch,
            g = n && i.type === "touchend" && Math.abs(p) > 5;
          g && (p = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + p,
              Bi(
                { programmatic: !1 },
                f
                  ? { lerp: g ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        B(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const r = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - r),
              (this.direction = Math.sign(this.animatedScroll - r)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        B(this, "raf", (r) => {
          const e = r - (this.time || r);
          (this.time = r),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = wg),
          (!r || r === document.documentElement) && (r = window),
          typeof a == "number" && typeof l != "function"
            ? (l = ld)
            : typeof l == "function" && typeof a != "number" && (a = 1),
          (this.options = {
            wrapper: r,
            content: e,
            eventsTarget: t,
            smoothWheel: i,
            syncTouch: n,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: p,
            orientation: d,
            touchMultiplier: f,
            wheelMultiplier: m,
            autoResize: g,
            prevent: y,
            virtualScroll: w,
            overscroll: b,
            autoRaf: C,
            anchors: h,
            autoToggle: S,
            allowNestedScroll: x,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new Eg(r, e, { autoResize: g })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new Ag(t, {
            touchMultiplier: f,
            wheelMultiplier: m,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoToggle &&
            this.rootElement.addEventListener(
              "transitionend",
              this.onTransitionEnd,
              { passive: !0 }
            ),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(r, e) {
        return this.emitter.on(r, e);
      }
      off(r, e) {
        return this.emitter.off(r, e);
      }
      setScroll(r) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: r, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: r, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
      }
      scrollTo(
        r,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: i = !1,
          duration: n = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: d,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof r == "string" && ["top", "left", "start"].includes(r))
            r = 0;
          else if (
            typeof r == "string" &&
            ["bottom", "right", "end"].includes(r)
          )
            r = this.limit;
          else {
            let p;
            if (
              (typeof r == "string"
                ? (p = document.querySelector(r))
                : r instanceof HTMLElement &&
                  r != null &&
                  r.nodeType &&
                  (p = r),
              p)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? m.left : m.top;
              }
              const f = p.getBoundingClientRect();
              r = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof r == "number") {
            if (((r += e), (r = Math.round(r)), this.options.infinite)) {
              if (c) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const p = r - this.animatedScroll;
                p > this.limit / 2
                  ? (r = r - this.limit)
                  : p < -this.limit / 2 && (r = r + this.limit);
              }
            } else r = sd(0, r, this.limit);
            if (r === this.targetScroll) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = d != null ? d : {}), t)) {
              (this.animatedScroll = this.targetScroll = r),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            c || (this.targetScroll = r),
              typeof n == "number" && typeof s != "function"
                ? (s = ld)
                : typeof s == "function" && typeof n != "number" && (n = 1),
              this.animate.fromTo(this.animatedScroll, r, {
                duration: n,
                easing: s,
                lerp: o,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (p, f) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = p - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = p),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = p),
                    f || this.emit(),
                    f &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      checkNestedScroll(r, { deltaX: e, deltaY: t }) {
        var S, x;
        const i = Date.now(),
          n = (S = r._lenis) != null ? S : (r._lenis = {});
        let s, o, a, l, u, c, d, p;
        const f = this.options.gestureOrientation;
        if (i - ((x = n.time) != null ? x : 0) > 2e3) {
          n.time = Date.now();
          const P = window.getComputedStyle(r);
          n.computedStyle = P;
          const M = P.overflowX,
            I = P.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(M)),
            (o = ["auto", "overlay", "scroll"].includes(I)),
            (n.hasOverflowX = s),
            (n.hasOverflowY = o),
            (!s && !o) ||
              (f === "vertical" && !o) ||
              (f === "horizontal" && !s))
          )
            return !1;
          (u = r.scrollWidth),
            (c = r.scrollHeight),
            (d = r.clientWidth),
            (p = r.clientHeight),
            (a = u > d),
            (l = c > p),
            (n.isScrollableX = a),
            (n.isScrollableY = l),
            (n.scrollWidth = u),
            (n.scrollHeight = c),
            (n.clientWidth = d),
            (n.clientHeight = p);
        } else
          (a = n.isScrollableX),
            (l = n.isScrollableY),
            (s = n.hasOverflowX),
            (o = n.hasOverflowY),
            (u = n.scrollWidth),
            (c = n.scrollHeight),
            (d = n.clientWidth),
            (p = n.clientHeight);
        if (
          (!s && !o) ||
          (!a && !l) ||
          (f === "vertical" && (!o || !l)) ||
          (f === "horizontal" && (!s || !a))
        )
          return !1;
        let m;
        if (f === "horizontal") m = "x";
        else if (f === "vertical") m = "y";
        else {
          const P = e !== 0,
            M = t !== 0;
          P && s && a && (m = "x"), M && o && l && (m = "y");
        }
        if (!m) return !1;
        let g, y, w, b, C;
        if (m === "x")
          (g = r.scrollLeft), (y = u - d), (w = e), (b = s), (C = a);
        else if (m === "y")
          (g = r.scrollTop), (y = c - p), (w = t), (b = o), (C = l);
        else return !1;
        return (w > 0 ? g < y : g > 0) && b && C;
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        var e, t;
        const r = this.options.wrapper;
        return this.isHorizontal
          ? (e = r.scrollX) != null
            ? e
            : r.scrollLeft
          : (t = r.scrollY) != null
          ? t
          : r.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Tg(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(r) {
        this._isScrolling !== r &&
          ((this._isScrolling = r), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(r) {
        this._isStopped !== r &&
          ((this._isStopped = r), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(r) {
        this._isLocked !== r && ((this._isLocked = r), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let r = "lenis";
        return (
          this.options.autoToggle && (r += " lenis-autoToggle"),
          this.isStopped && (r += " lenis-stopped"),
          this.isLocked && (r += " lenis-locked"),
          this.isScrolling && (r += " lenis-scrolling"),
          this.isScrolling === "smooth" && (r += " lenis-smooth"),
          r
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  j.registerPlugin(Q);
  let Js;
  const Mg = () => {
      (Js = new Pg({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
        autoRaf: !0,
      })),
        Js.on("scroll", Q.update),
        j.ticker.add((r) => {
          Js.raf(r * 1e3);
        }),
        j.ticker.lagSmoothing(0);
    },
    Og = () => {
      Mg();
    },
    ud = () => Js;
  let Er,
    on,
    an = !1;
  const Lg = () => {
      document.querySelector('[rev-calc="start-form"]');
      const r = document.querySelector('[rev-calc="start-alert"]'),
        e = document.querySelector("[calc-volume]"),
        t = document.querySelector("[calc-ratio]"),
        i = document.querySelector("[calc-trip-price]"),
        n = document.querySelector('[rev-modal="component"]'),
        s = document.querySelectorAll('[rev-modal="close"]'),
        o = document.querySelector('[rev-modal="open"]'),
        a = document.querySelector('[rev-modal="bg"]'),
        l = document.querySelector('[rev-result="component"]'),
        u = document.querySelector('[rev-result="opportunity"]'),
        c = document.querySelector('[rev-result="conversion"]'),
        d = document.querySelectorAll(".rev_result_form_modal_est_tag"),
        p = document.querySelector('[hidden-final-result="rev-opportunity"]'),
        f = document.querySelector('[hidden-final-result="conversion-rate"]'),
        m = () => {
          const R = e.getAttribute("final-value"),
            E = i.getAttribute("final-value"),
            N = R * E,
            _ = `$${N.toLocaleString()}`;
          (u.textContent = _), (p.value = N);
        },
        g = () => {
          const R = t.getAttribute("final-value");
          (c.textContent = R), (f.value = R);
        },
        y = () =>
          e.getAttribute("final-value") &&
          t.getAttribute("final-value") &&
          i.getAttribute("final-value"),
        w = () => {
          if (y() && !an) {
            (an = !0),
              n.classList.add("is--active"),
              r.classList.remove("is--active"),
              m(),
              g();
            const R = ud();
            R && R.stop(), S();
          } else y() || r.classList.add("is--active");
        },
        b = () => {
          if (an) {
            (an = !1),
              n.classList.remove("is--active"),
              Er && Er.isActive() && Er.pause(),
              on && on.isActive() && on.pause();
            const R = ud();
            R && R.start(), x();
          }
        },
        C = () => {
          r.classList.contains("is--active") &&
            y() &&
            r.classList.remove("is--active");
        },
        h = () => {
          [e, t, i].forEach((E) => {
            new MutationObserver(C).observe(E, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
          }),
            new MutationObserver(w).observe(r, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
        },
        S = () => {
          (Er = j.timeline()),
            j.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
            Er.fromTo(
              a,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "expo.out" }
            ),
            Er.fromTo(
              l,
              {
                autoAlpha: 0,
                scale: 0.9,
                rotate: 10,
                y: "100%",
                transformOrigin: "top center",
              },
              {
                autoAlpha: 1,
                scale: 1,
                rotate: 0,
                y: "0%",
                duration: 1,
                ease: "elastic.out(0.4,0.3)",
              },
              "-=0.4"
            ),
            Er.fromTo(
              d,
              { autoAlpha: 0, scale: 0.5, rotate: 15 },
              {
                autoAlpha: 1,
                scale: 1,
                rotate: 0,
                duration: 1,
                stagger: 0.05,
                ease: "elastic.out(0.4,0.3)",
              },
              "-=0.75"
            );
        },
        x = () => {
          (on = j.timeline()),
            on.to(l, {
              autoAlpha: 0,
              scale: 0.9,
              rotate: 10,
              y: "100%",
              transformOrigin: "top center",
              duration: 1.25,
              ease: "elastic.out(0.4,0.3)",
            }),
            on.to(
              a,
              {
                opacity: 0,
                duration: 0.5,
                ease: "expo.out",
                onComplete: () => {
                  j.set(n, { display: "none", visibility: "hidden" });
                },
              },
              "-=1"
            );
        },
        P = (R) => {
          R.key === "Escape" && an && b();
        },
        M = () => {
          o.addEventListener("click", () => {
            w();
          }),
            s.forEach((R) => {
              R.addEventListener("click", () => {
                b();
              });
            }),
            a.addEventListener("click", (R) => {
              R.target === a && an && b();
            }),
            document.addEventListener("keydown", P);
        },
        I = () => {
          document.removeEventListener("keydown", P);
        };
      return h(), M(), I;
    },
    Dg = () => Lg(),
    Ig = () => {
      const r = document.querySelectorAll("[rev-tab-trigger]"),
        e = document.querySelectorAll("[rev-tab-content]"),
        t = document.querySelectorAll("[rev-tab-btn-group]");
      r.forEach((s) => {
        s.getAttribute("rev-tab-trigger") !== "line" &&
          s.addEventListener("click", (o) => {
            o.preventDefault();
            const a = s.getAttribute("rev-tab-trigger");
            if (s.classList.contains("is--active")) return;
            r.forEach((d) => {
              if (d.getAttribute("rev-tab-trigger") !== "line") {
                d.classList.remove("is--active");
                const p = d.querySelector('[rev-tab-trigger="line"]');
                p && p.classList.remove("is--active");
              }
            }),
              e.forEach((d) => d.classList.remove("is--active")),
              t.forEach((d) => d.classList.remove("is--active")),
              s.classList.add("is--active");
            const l = s.querySelector('[rev-tab-trigger="line"]');
            l && l.classList.add("is--active");
            const u = document.querySelector(`[rev-tab-content="${a}"]`);
            u && u.classList.add("is--active");
            const c = document.querySelector(`[rev-tab-btn-group="${a}"]`);
            c && c.classList.add("is--active");
          });
      });
      const i = document.querySelector(
        '[rev-tab-btn-group="estimates"] button'
      );
      i &&
        i.addEventListener("click", (s) => {
          s.preventDefault();
          const o = document.querySelector('[rev-tab-trigger="results"]');
          o && o.click();
        });
      const n = document.querySelector(
        '[rev-tab-btn-group="results"] .rev_result_btn_results_back button'
      );
      n &&
        n.addEventListener("click", (s) => {
          s.preventDefault();
          const o = document.querySelector('[rev-tab-trigger="estimates"]');
          o && o.click();
        });
    },
    kg = () => {
      Ig();
    },
    cd = () => {
      Jf(), tp(), rp(), sp(), ap(), Fh(), Bh(), fg(), hg(), yg(), Dg(), kg();
    },
    dd = (r) => document.querySelector(r),
    Rg = (r) => document.querySelectorAll(r),
    zg = (r, e) => r.classList.add(e),
    Ng = {
      home: cd,
      about: () => {
        Rg(".team-member").forEach((e) => {
          e.addEventListener("mouseenter", () => {
            var t;
            (t = e.querySelector(".member-bio")) == null ||
              t.classList.add("is-visible");
          }),
            e.addEventListener("mouseleave", () => {
              var t;
              (t = e.querySelector(".member-bio")) == null ||
                t.classList.remove("is-visible");
            });
        });
      },
      contact: () => {
        const r = dd(".contact-form");
        r &&
          r.addEventListener("submit", (e) => {
            e.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": cd,
    },
    Fg = () => {
      const r = document.body.dataset.route,
        e = Ng[r];
      e ? e() : console.log(`No specific script for route: ${r}`);
    },
    Bg = () => {
      const r = document.querySelector(".page_header");
      document.querySelector(".page_navigation"),
        document.querySelector(".page_nav_contain"),
        document.querySelector("[page-nav='size']"),
        document.querySelector("[page-nav='main']"),
        document.querySelector("[page-nav='brand']");
      const e = document.querySelectorAll("[nav-menu-dropdown]"),
        t = document.querySelectorAll("[nav-menu-item]"),
        i = document.querySelector("[nav-menu='shadow-main']");
      document.querySelector("[nav-menu='shadow-wrap']");
      const n = document.querySelector("[nav-menu='shadow-menu']"),
        s = document.querySelector("[nav-menu='shadow-card']");
      r.offsetWidth, i.offsetWidth;
      const o = new Map();
      t.forEach((w) => {
        const b = w.getBoundingClientRect();
        o.set(w, { width: b.width, height: b.height });
      }),
        (() => {
          const w = e[0];
          if (w) {
            const b = w.getAttribute("nav-menu-dropdown"),
              C = document.querySelector(`[nav-menu-item='${b}']`);
            if (C) {
              const h = w.getBoundingClientRect(),
                S = n.getBoundingClientRect(),
                x = o.get(C);
              if (x) {
                const P = S.left + S.width / 2,
                  I = h.left + h.width / 2 - P,
                  L = x.height + 20,
                  R = x.width + 20;
                s.style.setProperty("--siteMenuTranslateX", `${I}px`),
                  s.style.setProperty("--siteMenuHeight", `${L}px`),
                  s.style.setProperty("--siteMenuWidth", `${R}px`);
              } else
                console.warn(
                  "No original dimensions found for first menu item."
                );
            } else
              console.warn(
                "No corresponding menu item found for first dropdown."
              );
          } else console.warn("No dropdowns found to pre-calculate.");
        })();
      const l = 25;
      let u = null,
        c = null;
      const d = (w) => {
          const b = Array.from(t),
            C = b.indexOf(w);
          b.forEach((h, S) => {
            S < C
              ? h.setAttribute("pos", "left")
              : S === C
              ? h.setAttribute("pos", "active")
              : h.setAttribute("pos", "right"),
              h === w
                ? h.setAttribute("status", "active")
                : h.setAttribute("status", "inactive");
          });
        },
        p = (w, b) => {
          u && (clearTimeout(u), (u = null)), c !== w && ((c = w), g(w, b));
        },
        f = () => {
          u = setTimeout(() => {
            r.setAttribute("dropdown-vis", "non-visible"),
              s.setAttribute("vis", "non-visible"),
              (c = null),
              (u = null);
          }, 100);
        },
        m = (w, b) => {
          const C = b.bottom;
          return w >= C && w <= C + l;
        },
        g = (w, b) => {
          const C = n.getBoundingClientRect(),
            h = w.getBoundingClientRect(),
            S = o.get(b);
          if (!S) {
            console.warn("No original dimensions found for menu item:", b);
            return;
          }
          const x = C.left + C.width / 2,
            P = h.left + h.width / 2,
            M = S.height + 20,
            I = S.width + 20,
            L = P - x;
          s.style.setProperty("--siteMenuTranslateX", `${L}px`),
            s.style.setProperty("--siteMenuHeight", `${M}px`),
            s.style.setProperty("--siteMenuWidth", `${I}px`),
            s.setAttribute("vis", "visible"),
            r.setAttribute("dropdown-vis", "visible"),
            d(b);
        },
        y = (w) => {
          if (!c) return;
          const b = c.getBoundingClientRect(),
            C = s.getBoundingClientRect(),
            h = w.clientX,
            S = w.clientY,
            x = h >= b.left && h <= b.right && S >= b.top && S <= b.bottom,
            P = h >= C.left && h <= C.right && S >= C.top && S <= C.bottom,
            M =
              m(S, b) &&
              h >= Math.min(b.left, C.left) &&
              h <= Math.max(b.right, C.right);
          x || P || M ? u && (clearTimeout(u), (u = null)) : u || f();
        };
      document.addEventListener("mousemove", y),
        e.forEach((w) => {
          const b = w.getAttribute("nav-menu-dropdown"),
            C = document.querySelector(`[nav-menu-item='${b}']`);
          C
            ? w.addEventListener("mouseenter", () => {
                p(w, C);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${b}`
              );
        }),
        s.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        s.addEventListener("mouseleave", () => {
          f();
        });
    },
    Vg = () => {
      Bg();
    },
    $g = () => {
      const r = document.querySelector(".page_nav_size"),
        e = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (r.classList.add("is--active"), e.classList.add("is--active"))
          : (r.classList.remove("is--active"),
            e.classList.remove("is--active"));
      });
    },
    Hg = () => {
      $g();
    },
    qg = () => {
      const r = document.querySelectorAll('[nav-accordion="item"]'),
        e = Array.from(r).map((t) => ({
          item: t,
          trigger: t.querySelector('[nav-accordion="trigger"]'),
          content: t.querySelector('[nav-accordion="content"]'),
          icon: t.querySelector('[nav-accordion="icon"]'),
          links: t.querySelectorAll('[nav-accordion="link"]'),
          line: t.querySelector('[nav-accordion="line"]'),
        }));
      e.forEach(
        ({ item: t, trigger: i, content: n, icon: s, links: o, line: a }) => {
          i.addEventListener("click", () => {
            const l = t.classList.contains("is--open");
            e.forEach(
              ({
                item: u,
                content: c,
                icon: d,
                links: p,
                trigger: f,
                line: m,
              }) => {
                u.classList.remove("is--open"),
                  d.classList.remove("is--open"),
                  f.classList.remove("is--open"),
                  j.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  j.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  j.to(m, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  p.forEach((g) => g.classList.remove("is--open")),
                  j.to(p, {
                    y: 50,
                    rotateX: 20,
                    rotateZ: 2,
                    scale: 0.9,
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.02,
                    delay: 0.05,
                  });
              }
            ),
              l ||
                (t.classList.add("is--open"),
                s.classList.add("is--open"),
                i.classList.add("is--open"),
                j.to(n, { height: "auto", duration: 0.5, ease: "power3.out" }),
                j.to(s, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
                j.to(a, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
                o.forEach((u) => u.classList.add("is--open")),
                j.fromTo(
                  o,
                  { y: 50, rotateX: 20, rotateZ: 2, scale: 0.9, autoAlpha: 0 },
                  {
                    y: 0,
                    rotateX: 0,
                    rotateZ: 0,
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.05,
                    delay: 0.05,
                  }
                ));
          });
        }
      );
    },
    Wg = () => qg(),
    Gg = () => {
      const r = document.querySelectorAll('[nav-menu="trigger"]'),
        e = document.querySelectorAll('[nav-menu="open-icon"]'),
        t = document.querySelectorAll('[nav-menu="close-icon"]'),
        i = document.querySelectorAll('[nav-accordion="item"]'),
        n = document.querySelector('[nav-menu="menu"]'),
        s = document.querySelector('[nav-menu="component"]'),
        o = document.querySelector('[nav-menu="logo"]');
      o.querySelector('[nav-menu="logo-icon"]');
      const a = o.querySelector('[nav-menu="logo-text"]');
      let l = !1;
      const u = "is--active",
        c = "is--inactive",
        d = () => {
          r.forEach((b) => {
            b.setAttribute("aria-controls", "main-nav-menu"),
              b.setAttribute("aria-expanded", "false");
          }),
            e.forEach((b) => {
              b.setAttribute("aria-label", "Open navigation menu");
            }),
            t.forEach((b) => {
              b.setAttribute("aria-label", "Close navigation menu");
            }),
            n &&
              (n.setAttribute("id", "main-nav-menu"),
              n.setAttribute("aria-label", "Main navigation menu")),
            s && s.setAttribute("role", "navigation");
        },
        p = (b, C) => {
          [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((S) => {
            S.classList.add(b), S.classList.remove(C);
          });
        },
        f = (b) => {
          r.forEach((C) => {
            C.setAttribute("aria-expanded", b ? "true" : "false");
          });
        },
        m = () => {
          p(u, c),
            f(!0),
            j
              .timeline()
              .to(n, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut",
              })
              .to(
                e,
                { autoAlpha: 0, scale: 0, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(
                t,
                { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(
                a,
                { color: "#121227", duration: 1.2, ease: "expo.inOut" },
                "<"
              )
              .to(
                s,
                {
                  clipPath: "inset(0% 0% 0% 0% round 0 8px 0 0)",
                  duration: 1.3,
                  ease: "expo.inOut",
                },
                "<"
              )
              .fromTo(
                i,
                { autoAlpha: 0, y: 100 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "expo.out",
                  stagger: 0.1,
                },
                "-=0.4"
              );
        },
        g = () => {
          p(c, u),
            f(!1),
            j
              .timeline()
              .to(e, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.5,
                ease: "expo.inOut",
              })
              .to(
                t,
                { autoAlpha: 0, scale: 0, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(a, { color: "#fff", duration: 1.2, ease: "expo.inOut" }, "<")
              .to(
                s,
                {
                  clipPath: "inset(100% 100% 0% 0% round 0 500px 0 0)",
                  duration: 1,
                  ease: "expo.inOut",
                },
                "<"
              )
              .to(
                i,
                {
                  autoAlpha: 0,
                  y: 100,
                  duration: 1.2,
                  ease: "expo.inOut",
                  stagger: 0.1,
                },
                "<"
              ),
            j.to(
              n,
              {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut",
              },
              "<0.05"
            );
        },
        y = () => {
          l ? (g(), (l = !1)) : (m(), (l = !0));
        };
      (() => {
        d(),
          r.forEach((b) => {
            b.addEventListener("click", y);
          });
      })();
    },
    Xg = () => {
      Gg();
    },
    Yg = () => {
      Vg(), Hg(), Wg(), Xg();
    },
    jg = () => {
      const r = dd(".example-component");
      r &&
        (zg(r, "is-initialized"),
        r.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Ug = () => {
      jg();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Yg(), Ug(), Fg(), Og();
  });
});
