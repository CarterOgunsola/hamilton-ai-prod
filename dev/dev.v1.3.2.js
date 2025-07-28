var df = Object.defineProperty;
var ff = (r, e, t) =>
  e in r
    ? df(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var B = (r, e, t) => ff(r, typeof e != "symbol" ? e + "" : e, t);
function Ii(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function Yu(r, e) {
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
 */ var Qt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  fn = { duration: 0.5, overwrite: !1, delay: 0 },
  Ba,
  nt,
  Te,
  si = 1e8,
  ve = 1 / si,
  sa = Math.PI * 2,
  pf = sa / 4,
  hf = 0,
  Uu = Math.sqrt,
  mf = Math.cos,
  gf = Math.sin,
  Je = function (e) {
    return typeof e == "string";
  },
  Le = function (e) {
    return typeof e == "function";
  },
  Vi = function (e) {
    return typeof e == "number";
  },
  qa = function (e) {
    return typeof e > "u";
  },
  Li = function (e) {
    return typeof e == "object";
  },
  Dt = function (e) {
    return e !== !1;
  },
  Va = function () {
    return typeof window < "u";
  },
  Ss = function (e) {
    return Le(e) || Je(e);
  },
  Ku =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  vt = Array.isArray,
  oa = /(?:-?\.?\d|\.)+/gi,
  Qu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  tn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Oo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Zu = /[+-]=-?[.\d]+/,
  Ju = /[^,'"\[\]\s]+/gi,
  vf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Pe,
  Ti,
  aa,
  $a,
  Zt = {},
  eo = {},
  ec,
  tc = function (e) {
    return (eo = pn(e, Zt)) && Bt;
  },
  Ha = function (e, t) {},
  ts = function (e, t) {
    return !t && void 0;
  },
  ic = function (e, t) {
    return (e && (Zt[e] = t) && eo && (eo[e] = t)) || Zt;
  },
  is = function () {
    return 0;
  },
  yf = { suppressEvents: !0, isStart: !0, kill: !1 },
  Bs = { suppressEvents: !0, kill: !1 },
  wf = { suppressEvents: !0 },
  Wa = {},
  ir = [],
  la = {},
  rc,
  jt = {},
  Mo = {},
  xl = 30,
  qs = [],
  ja = "",
  Ga = function (e) {
    var t = e[0],
      i,
      n;
    if ((Li(t) || Le(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (n = qs.length; n-- && !qs[n].targetTest(t); );
      i = qs[n];
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new Pc(e[n], i)))) ||
        e.splice(n, 1);
    return e;
  },
  Pr = function (e) {
    return e._gsap || Ga(oi(e))[0]._gsap;
  },
  nc = function (e, t, i) {
    return (i = e[t]) && Le(i)
      ? e[t]()
      : (qa(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  It = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Ie = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Be = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  sn = function (e, t) {
    var i = t.charAt(0),
      n = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
    );
  },
  _f = function (e, t) {
    for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
    return n < i;
  },
  to = function () {
    var e = ir.length,
      t = ir.slice(0),
      i,
      n;
    for (la = {}, ir.length = 0, i = 0; i < e; i++)
      (n = t[i]),
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
  },
  Xa = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  sc = function (e, t, i, n) {
    ir.length && !nt && to(),
      e.render(t, i, !!(nt && t < 0 && Xa(e))),
      ir.length && !nt && to();
  },
  oc = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Ju).length < 2
      ? t
      : Je(e)
      ? e.trim()
      : e;
  },
  ac = function (e) {
    return e;
  },
  Jt = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  bf = function (e) {
    return function (t, i) {
      for (var n in i)
        n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
    };
  },
  pn = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Cl = function r(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = Li(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  io = function (e, t) {
    var i = {},
      n;
    for (n in e) n in t || (i[n] = e[n]);
    return i;
  },
  qn = function (e) {
    var t = e.parent || Pe,
      i = e.keyframes ? bf(vt(e.keyframes)) : Jt;
    if (Dt(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Sf = function (e, t) {
    for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
    return i < 0;
  },
  lc = function (e, t, i, n, s) {
    var o = e[n],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[n] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  So = function (e, t, i, n) {
    i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[n] === t && (e[n] = s),
      (t._next = t._prev = t.parent = null);
  },
  sr = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  Ar = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  Tf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  ua = function (e, t, i, n) {
    return (
      e._startAt &&
      (nt
        ? e._startAt.revert(Bs)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, n))
    );
  },
  xf = function r(e) {
    return !e || (e._ts && r(e.parent));
  },
  El = function (e) {
    return e._repeat ? hn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  hn = function (e, t) {
    var i = Math.floor((e = Be(e / t)));
    return e && i === e ? i - 1 : i;
  },
  ro = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  To = function (e) {
    return (e._end = Be(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0)
    ));
  },
  xo = function (e, t) {
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
        To(e),
        i._dirty || Ar(i, e)),
      e
    );
  },
  uc = function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = ro(e.rawTime(), t)),
        (!t._dur || ms(0, t.totalDuration(), i) - t._tTime > ve) &&
          t.render(i, !0)),
      Ar(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -ve;
    }
  },
  Ei = function (e, t, i, n) {
    return (
      t.parent && sr(t),
      (t._start = Be(
        (Vi(i) ? i : i || e !== Pe ? ii(e, i, t) : e._time) + t._delay
      )),
      (t._end = Be(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      lc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      ca(t) || (e._recent = t),
      n || uc(e, t),
      e._ts < 0 && xo(e, e._tTime),
      e
    );
  },
  cc = function (e, t) {
    return (
      (Zt.ScrollTrigger || Ha("scrollTrigger", t)) &&
      Zt.ScrollTrigger.create(t, e)
    );
  },
  dc = function (e, t, i, n, s) {
    if ((Ua(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !nt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      rc !== Yt.frame
    )
      return ir.push(e), (e._lazy = [s, n]), 1;
  },
  Cf = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  },
  ca = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Ef = function (e, t, i, n) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Cf(e) && !(!e._initted && ca(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !ca(e))))
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
        ((l = ms(0, e._tDur, t)),
        (c = hn(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== hn(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || nt || n || e._zTime === ve || (!t && e._zTime))
    ) {
      if (!e._initted && dc(e, t, n, i, l)) return;
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
      t < 0 && ua(e, t, i, !0),
        e._onUpdate && !i && Kt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && Kt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && sr(e, 1),
          !i &&
            !nt &&
            (Kt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Pf = function (e, t, i) {
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
  mn = function (e, t, i, n) {
    var s = e._repeat,
      o = Be(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !n && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Be(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !n && xo(e, (e._tTime = e._tDur * a)),
      e.parent && To(e),
      i || Ar(e.parent, e),
      e
    );
  },
  Pl = function (e) {
    return e instanceof Et ? Ar(e) : mn(e, e._dur);
  },
  Af = { _start: 0, endTime: is, totalDuration: is },
  ii = function r(e, t, i) {
    var n = e.labels,
      s = e._recent || Af,
      o = e.duration() >= si ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Je(t) && (isNaN(t) || t in n)
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
            u && i && (l = (l / 100) * (vt(i) ? i[0] : i).totalDuration()),
            a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  Vn = function (e, t, i) {
    var n = Vi(t[1]),
      s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((n && (o.duration = t[1]), (o.parent = i), e)) {
      for (a = o, l = i; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = Dt(l.vars.inherit) && l.parent);
      (o.immediateRender = Dt(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new Fe(t[0], o, t[s + 1]);
  },
  lr = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  ms = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  ht = function (e, t) {
    return !Je(e) || !(t = vf.exec(e)) ? "" : t[1];
  },
  kf = function (e, t, i) {
    return lr(i, function (n) {
      return ms(e, t, n);
    });
  },
  da = [].slice,
  fc = function (e, t) {
    return (
      e &&
      Li(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Li(e[0]))) &&
      !e.nodeType &&
      e !== Ti
    );
  },
  Of = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (n) {
        var s;
        return (Je(n) && !t) || fc(n, 1)
          ? (s = i).push.apply(s, oi(n))
          : i.push(n);
      }) || i
    );
  },
  oi = function (e, t, i) {
    return Te && !t && Te.selector
      ? Te.selector(e)
      : Je(e) && !i && (aa || !gn())
      ? da.call((t || $a).querySelectorAll(e), 0)
      : vt(e)
      ? Of(e, i)
      : fc(e)
      ? da.call(e, 0)
      : e
      ? [e]
      : [];
  },
  fa = function (e) {
    return (
      (e = oi(e)[0] || ts("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return oi(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? ts("Invalid scope") || $a.createElement("div")
            : e
        );
      }
    );
  },
  pc = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  hc = function (e) {
    if (Le(e)) return e;
    var t = Li(e) ? e : { each: e },
      i = kr(t.ease),
      n = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = n > 0 && n < 1,
      l = isNaN(n) || a,
      u = t.axis,
      c = n,
      d = n;
    return (
      Je(n)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && l && ((c = n[0]), (d = n[1])),
      function (h, f, p) {
        var m = (p || t).length,
          y = o[m],
          T,
          _,
          x,
          g,
          C,
          E,
          A,
          M,
          I;
        if (!y) {
          if (((I = t.grid === "auto" ? 0 : (t.grid || [1, si])[1]), !I)) {
            for (
              A = -si;
              A < (A = p[I++].getBoundingClientRect().left) && I < m;

            );
            I < m && I--;
          }
          for (
            y = o[m] = [],
              T = l ? Math.min(I, m) * c - 0.5 : n % I,
              _ = I === si ? 0 : l ? (m * d) / I - 0.5 : (n / I) | 0,
              A = 0,
              M = si,
              E = 0;
            E < m;
            E++
          )
            (x = (E % I) - T),
              (g = _ - ((E / I) | 0)),
              (y[E] = C = u ? Math.abs(u === "y" ? g : x) : Uu(x * x + g * g)),
              C > A && (A = C),
              C < M && (M = C);
          n === "random" && pc(y),
            (y.max = A - M),
            (y.min = M),
            (y.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (I > m
                    ? m - 1
                    : u
                    ? u === "y"
                      ? m / I
                      : I
                    : Math.max(I, m / I)) ||
                0) * (n === "edges" ? -1 : 1)),
            (y.b = m < 0 ? s - m : s),
            (y.u = ht(t.amount || t.each) || 0),
            (i = i && m < 0 ? xc(i) : i);
        }
        return (
          (m = (y[h] - y.min) / y.max || 0),
          Be(y.b + (i ? i(m) : m) * y.v) + y.u
        );
      }
    );
  },
  pa = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var n = Be(Math.round(parseFloat(i) / e) * e * t);
      return (n - (n % 1)) / t + (Vi(i) ? 0 : ht(i));
    };
  },
  mc = function (e, t) {
    var i = vt(e),
      n,
      s;
    return (
      !i &&
        Li(e) &&
        ((n = i = e.radius || si),
        e.values
          ? ((e = oi(e.values)), (s = !Vi(e[0])) && (n *= n))
          : (e = pa(e.increment))),
      lr(
        t,
        i
          ? Le(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= n ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = si,
                    c = 0,
                    d = e.length,
                    h,
                    f;
                  d--;

                )
                  s
                    ? ((h = e[d].x - a), (f = e[d].y - l), (h = h * h + f * f))
                    : (h = Math.abs(e[d] - a)),
                    h < u && ((u = h), (c = d));
                return (
                  (c = !n || u <= n ? e[c] : o),
                  s || c === o || Vi(o) ? c : c + ht(o)
                );
              }
          : pa(e)
      )
    );
  },
  gc = function (e, t, i, n) {
    return lr(vt(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
      return vt(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                n
            ) / n;
    });
  },
  Mf = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (n) {
      return t.reduce(function (s, o) {
        return o(s);
      }, n);
    };
  },
  Lf = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || ht(i));
    };
  },
  Df = function (e, t, i) {
    return yc(e, t, 0, 1, i);
  },
  vc = function (e, t, i) {
    return lr(i, function (n) {
      return e[~~t(n)];
    });
  },
  If = function r(e, t, i) {
    var n = t - e;
    return vt(e)
      ? vc(e, r(0, e.length), t)
      : lr(i, function (s) {
          return ((n + ((s - e) % n)) % n) + e;
        });
  },
  Rf = function r(e, t, i) {
    var n = t - e,
      s = n * 2;
    return vt(e)
      ? vc(e, r(0, e.length - 1), t)
      : lr(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
        });
  },
  rs = function (e) {
    for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
      (o = e.indexOf(")", n)),
        (a = e.charAt(n + 7) === "["),
        (s = e.substr(n + 7, o - n - 7).match(a ? Ju : oa)),
        (i +=
          e.substr(t, n - t) + gc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  },
  yc = function (e, t, i, n, s) {
    var o = t - e,
      a = n - i;
    return lr(s, function (l) {
      return i + (((l - e) / o) * a || 0);
    });
  },
  Nf = function r(e, t, i, n) {
    var s = isNaN(e + t)
      ? 0
      : function (f) {
          return (1 - f) * e + f * t;
        };
    if (!s) {
      var o = Je(e),
        a = {},
        l,
        u,
        c,
        d,
        h;
      if ((i === !0 && (n = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (vt(e) && !vt(t)) {
        for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
          c.push(r(e[u - 1], e[u]));
        d--,
          (s = function (p) {
            p *= d;
            var m = Math.min(h, ~~p);
            return c[m](p - m);
          }),
          (i = t);
      } else n || (e = pn(vt(e) ? [] : {}, e));
      if (!c) {
        for (l in t) Ya.call(a, e, l, "get", t[l]);
        s = function (p) {
          return Za(p, a) || (o ? e.p : e);
        };
      }
    }
    return lr(i, s);
  },
  Al = function (e, t, i) {
    var n = e.labels,
      s = si,
      o,
      a,
      l;
    for (o in n)
      (a = n[o] - t),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Kt = function (e, t, i) {
    var n = e.vars,
      s = n[t],
      o = Te,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = n[t + "Params"]),
        (u = n.callbackScope || e),
        i && ir.length && to(),
        a && (Te = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (Te = o),
        c
      );
  },
  Dn = function (e) {
    return (
      sr(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!nt),
      e.progress() < 1 && Kt(e, "onInterrupt"),
      e
    );
  },
  rn,
  wc = [],
  _c = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Va() || e.headless)) {
        var t = e.name,
          i = Le(e),
          n =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: is,
            render: Za,
            add: Ya,
            kill: Zf,
            modifier: Qf,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Qa,
            aliases: {},
            register: 0,
          };
        if ((gn(), e !== n)) {
          if (jt[t]) return;
          Jt(n, Jt(io(e, s), o)),
            pn(n.prototype, pn(s, io(e, o))),
            (jt[(n.prop = t)] = n),
            e.targetTest && (qs.push(n), (Wa[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        ic(t, n), e.register && e.register(Bt, n, Rt);
      } else wc.push(e);
  },
  ge = 255,
  In = {
    aqua: [0, ge, ge],
    lime: [0, ge, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ge],
    navy: [0, 0, 128],
    white: [ge, ge, ge],
    olive: [128, 128, 0],
    yellow: [ge, ge, 0],
    orange: [ge, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ge, 0, 0],
    pink: [ge, 192, 203],
    cyan: [0, ge, ge],
    transparent: [ge, ge, ge, 0],
  },
  Lo = function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        ge +
        0.5) |
        0
    );
  },
  bc = function (e, t, i) {
    var n = e ? (Vi(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : In.black,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      p;
    if (!n) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), In[e]))
        n = In[e];
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
            [n >> 16, (n >> 8) & ge, n & ge, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (n = [e >> 16, (e >> 8) & ge, e & ge]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((n = p = e.match(oa)), !t))
          (l = (+n[0] % 360) / 360),
            (u = +n[1] / 100),
            (c = +n[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            n.length > 3 && (n[3] *= 1),
            (n[0] = Lo(l + 1 / 3, s, o)),
            (n[1] = Lo(l, s, o)),
            (n[2] = Lo(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (n = e.match(Qu)), i && n.length < 4 && (n[3] = 1), n;
      } else n = e.match(oa) || In.transparent;
      n = n.map(Number);
    }
    return (
      t &&
        !p &&
        ((s = n[0] / ge),
        (o = n[1] / ge),
        (a = n[2] / ge),
        (d = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (c = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((f = d - h),
            (u = c > 0.5 ? f / (2 - d - h) : f / (d + h)),
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
  Sc = function (e) {
    var t = [],
      i = [],
      n = -1;
    return (
      e.split(rr).forEach(function (s) {
        var o = s.match(tn) || [];
        t.push.apply(t, o), i.push((n += o.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  kl = function (e, t, i) {
    var n = "",
      s = (e + n).match(rr),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = bc(h, t, 1)) &&
          o +
            (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      i && ((c = Sc(e)), (l = i.c), l.join(n) !== c.c.join(n)))
    )
      for (u = e.replace(rr, "1").split(tn), d = u.length - 1; a < d; a++)
        n +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : i).shift());
    if (!u)
      for (u = e.split(rr), d = u.length - 1; a < d; a++) n += u[a] + s[a];
    return n + u[d];
  },
  rr = (function () {
    var r =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in In) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  })(),
  zf = /hsl[a]?\(/,
  Tc = function (e) {
    var t = e.join(" "),
      i;
    if (((rr.lastIndex = 0), rr.test(t)))
      return (
        (i = zf.test(t)),
        (e[1] = kl(e[1], i)),
        (e[0] = kl(e[0], i, Sc(e[1]))),
        !0
      );
  },
  ns,
  Yt = (function () {
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
      h,
      f,
      p = function m(y) {
        var T = r() - n,
          _ = y === !0,
          x,
          g,
          C,
          E;
        if (
          ((T > e || T < 0) && (i += T - t),
          (n += T),
          (C = n - i),
          (x = C - o),
          (x > 0 || _) &&
            ((E = ++d.frame),
            (h = C - d.time * 1e3),
            (d.time = C = C / 1e3),
            (o += x + (x >= s ? 4 : s - x)),
            (g = 1)),
          _ || (l = u(m)),
          g)
        )
          for (f = 0; f < a.length; f++) a[f](C, h, E, y);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (y) {
          return h / (1e3 / (y || 60));
        },
        wake: function () {
          ec &&
            (!aa &&
              Va() &&
              ((Ti = aa = window),
              ($a = Ti.document || {}),
              (Zt.gsap = Bt),
              (Ti.gsapVersions || (Ti.gsapVersions = [])).push(Bt.version),
              tc(eo || Ti.GreenSockGlobals || (!Ti.gsap && Ti) || {}),
              wc.forEach(_c)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (u =
              c ||
              function (y) {
                return setTimeout(y, (o - d.time * 1e3 + 1) | 0);
              }),
            (ns = 1),
            p(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(l), (ns = 0), (u = is);
        },
        lagSmoothing: function (y, T) {
          (e = y || 1 / 0), (t = Math.min(T || 33, e));
        },
        fps: function (y) {
          (s = 1e3 / (y || 240)), (o = d.time * 1e3 + s);
        },
        add: function (y, T, _) {
          var x = T
            ? function (g, C, E, A) {
                y(g, C, E, A), d.remove(x);
              }
            : y;
          return d.remove(y), a[_ ? "unshift" : "push"](x), gn(), x;
        },
        remove: function (y, T) {
          ~(T = a.indexOf(y)) && a.splice(T, 1) && f >= T && f--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  gn = function () {
    return !ns && Yt.wake();
  },
  rt = {},
  Ff = /^[\d.\-M][\d.\-,\s]/,
  Bf = /["']/g,
  qf = function (e) {
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
        (t[n] = isNaN(u) ? u.replace(Bf, "").trim() : +u),
        (n = l.substr(a + 1).trim());
    return t;
  },
  Vf = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      n = e.indexOf("(", t);
    return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
  },
  $f = function (e) {
    var t = (e + "").split("("),
      i = rt[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [qf(t[1])] : Vf(e).split(",").map(oc)
        )
      : rt._CE && Ff.test(e)
      ? rt._CE("", e)
      : i;
  },
  xc = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Cc = function r(e, t) {
    for (var i = e._first, n; i; )
      i instanceof Et
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
  kr = function (e, t) {
    return (e && (Le(e) ? e : rt[e] || $f(e))) || t;
  },
  qr = function (e, t, i, n) {
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
      It(e, function (a) {
        (rt[a] = Zt[a] = s), (rt[(o = a.toLowerCase())] = i);
        for (var l in s)
          rt[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = rt[a + "." + l] = s[l];
      }),
      s
    );
  },
  Ec = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Do = function r(e, t, i) {
    var n = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / sa) * (Math.asin(1 / n) || 0),
      a = function (c) {
        return c === 1 ? 1 : n * Math.pow(2, -10 * c) * gf((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : Ec(a);
    return (
      (s = sa / s),
      (l.config = function (u, c) {
        return r(e, u, c);
      }),
      l
    );
  },
  Io = function r(e, t) {
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
          : Ec(i);
    return (
      (n.config = function (s) {
        return r(e, s);
      }),
      n
    );
  };
It("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
  var t = e < 5 ? e + 1 : e;
  qr(
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
});
rt.Linear.easeNone = rt.none = rt.Linear.easeIn;
qr("Elastic", Do("in"), Do("out"), Do());
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
  qr(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
qr("Expo", function (r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
qr("Circ", function (r) {
  return -(Uu(1 - r * r) - 1);
});
qr("Sine", function (r) {
  return r === 1 ? 1 : -mf(r * pf) + 1;
});
qr("Back", Io("in"), Io("out"), Io());
rt.SteppedEase =
  rt.steps =
  Zt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          n = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - ve;
        return function (a) {
          return (((n * ms(0, o, a)) | 0) + s) * i;
        };
      },
    };
fn.ease = rt["quad.out"];
It(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (r) {
    return (ja += r + "," + r + "Params,");
  }
);
var Pc = function (e, t) {
    (this.id = hf++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : nc),
      (this.set = t ? t.getSetter : Qa);
  },
  ss = (function () {
    function r(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        mn(this, +t.duration, 1, 1),
        (this.data = t.data),
        Te && ((this._ctx = Te), Te.data.push(this)),
        ns || Yt.wake();
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
            mn(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, n) {
        if ((gn(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (xo(this, i), !s._dp || s.parent || uc(s, this); s && s.parent; )
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
            Ei(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !n) ||
            (this._initted && Math.abs(this._zTime) === ve) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), sc(this, i, n)),
          this
        );
      }),
      (e.time = function (i, n) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + El(this)) %
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
                El(this),
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
          ? hn(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (i, n) {
        if (!arguments.length) return this._rts === -ve ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? ro(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -ve ? 0 : this._rts),
          this.totalTime(
            ms(-Math.abs(this._delay), this.totalDuration(), s),
            n !== !1
          ),
          To(this),
          Tf(this)
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
                : (gn(),
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
            n && (n._sort || !this.parent) && Ei(n, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (Dt(i) ? this.totalDuration() : this.duration()) /
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
            ? ro(n.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = wf);
        var n = nt;
        return (
          (nt = i),
          Xa(this) &&
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
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Pl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var n = this._time;
          return (this._rDelay = i), Pl(this), n ? this.time(n) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, n) {
        return this.totalTime(ii(this, i), Dt(n));
      }),
      (e.restart = function (i, n) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Dt(n)),
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
          var o = Le(i) ? i : ac,
            a = function () {
              var u = n.then;
              (n.then = null),
                Le(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
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
        Dn(this);
      }),
      r
    );
  })();
Jt(ss.prototype, {
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
var Et = (function (r) {
  Yu(e, r);
  function e(i, n) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = r.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = Dt(i.sortChildren)),
      Pe && Ei(i.parent || Pe, Ii(s), n),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && cc(Ii(s), i.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (n, s, o) {
      return Vn(0, arguments, this), this;
    }),
    (t.from = function (n, s, o) {
      return Vn(1, arguments, this), this;
    }),
    (t.fromTo = function (n, s, o, a) {
      return Vn(2, arguments, this), this;
    }),
    (t.set = function (n, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        qn(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Fe(n, s, ii(this, o), 1),
        this
      );
    }),
    (t.call = function (n, s, o) {
      return Ei(this, Fe.delayedCall(0, n, s), o);
    }),
    (t.staggerTo = function (n, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Fe(n, o, ii(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (n, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (qn(o).immediateRender = Dt(o.immediateRender)),
        this.staggerTo(n, s, o, a, l, u, c)
      );
    }),
    (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        (qn(a).immediateRender = Dt(a.immediateRender)),
        this.staggerTo(n, s, a, l, u, c, d)
      );
    }),
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = n <= 0 ? 0 : Be(n),
        d = this._zTime < 0 != n < 0 && (this._initted || !u),
        h,
        f,
        p,
        m,
        y,
        T,
        _,
        x,
        g,
        C,
        E,
        A;
      if (
        (this !== Pe && c > l && n >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (n += this._time - a)),
          (h = c),
          (g = this._start),
          (x = this._ts),
          (T = !x),
          d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (y = u + this._rDelay),
            this._repeat < -1 && n < 0)
          )
            return this.totalTime(y * 100 + n, s, o);
          if (
            ((h = Be(c % y)),
            c === l
              ? ((m = this._repeat), (h = u))
              : ((C = Be(c / y)),
                (m = ~~C),
                m && m === C && ((h = u), m--),
                h > u && (h = u)),
            (C = hn(this._tTime, y)),
            !a &&
              this._tTime &&
              C !== m &&
              this._tTime - C * y - this._dur <= 0 &&
              (C = m),
            E && m & 1 && ((h = u - h), (A = 1)),
            m !== C && !this._lock)
          ) {
            var M = E && C & 1,
              I = M === (E && m & 1);
            if (
              (m < C && (M = !M),
              (a = M ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (A ? 0 : Be(m * y)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && Kt(this, "onRepeat"),
              this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                T !== !this._ts ||
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
                this.vars.repeatRefresh && !A && this.invalidate()),
              (this._lock = 0),
              !this._ts && !T)
            )
              return this;
            Cc(this, A);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((_ = Pf(this, Be(a), Be(h))), _ && (c -= h - (h = _._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = n),
            (a = 0)),
          !a && c && !s && !C && (Kt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && n >= 0)
          for (f = this._first; f; ) {
            if (
              ((p = f._next), (f._act || h >= f._start) && f._ts && _ !== f)
            ) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (h - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (h - f._start) * f._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !T))
              ) {
                (_ = 0), p && (c += this._zTime = -ve);
                break;
              }
            }
            f = p;
          }
        else {
          f = this._last;
          for (var D = n < 0 ? n : h; f; ) {
            if (((p = f._prev), (f._act || D <= f._end) && f._ts && _ !== f)) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (D - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (D - f._start) * f._ts,
                  s,
                  o || (nt && Xa(f))
                ),
                h !== this._time || (!this._ts && !T))
              ) {
                (_ = 0), p && (c += this._zTime = D ? -ve : ve);
                break;
              }
            }
            f = p;
          }
        }
        if (
          _ &&
          !s &&
          (this.pause(),
          (_.render(h >= a ? 0 : -ve)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = g), To(this), this.render(n, s, o);
        this._onUpdate && !s && Kt(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (g === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((n || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                sr(this, 1),
              !s &&
                !(n < 0 && !a) &&
                (c || a || !l) &&
                (Kt(
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
      if ((Vi(s) || (s = ii(this, s, n)), !(n instanceof ss))) {
        if (vt(n))
          return (
            n.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Je(n)) return this.addLabel(n, s);
        if (Le(n)) n = Fe.delayedCall(0, n);
        else return this;
      }
      return this !== n ? Ei(this, n, s) : this;
    }),
    (t.getChildren = function (n, s, o, a) {
      n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -si);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Fe
            ? s && l.push(u)
            : (o && l.push(u), n && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (n) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === n) return s[o];
    }),
    (t.remove = function (n) {
      return Je(n)
        ? this.removeLabel(n)
        : Le(n)
        ? this.killTweensOf(n)
        : (n.parent === this && So(this, n),
          n === this._recent && (this._recent = this._last),
          Ar(this));
    }),
    (t.totalTime = function (n, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Be(
              Yt.time -
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
      var a = Fe.delayedCall(0, s || is, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), Ei(this, a, ii(this, n))
      );
    }),
    (t.removePause = function (n) {
      var s = this._first;
      for (n = ii(this, n); s; )
        s._start === n && s.data === "isPause" && sr(s), (s = s._next);
    }),
    (t.killTweensOf = function (n, s, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; )
        Ki !== a[l] && a[l].kill(n, s);
      return this;
    }),
    (t.getTweensOf = function (n, s) {
      for (var o = [], a = oi(n), l = this._first, u = Vi(s), c; l; )
        l instanceof Fe
          ? _f(l._targets, a) &&
            (u
              ? (!Ki || (l._initted && l._ts)) &&
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
        h = l.immediateRender,
        f,
        p = Fe.to(
          o,
          Jt(
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
                  p._dur !== y && mn(p, y, 0, 1).render(p._time, !0, !0),
                    (f = 1);
                }
                c && c.apply(p, d || []);
              },
            },
            s
          )
        );
      return h ? p.render(0) : p;
    }),
    (t.tweenFromTo = function (n, s, o) {
      return this.tweenTo(s, Jt({ startAt: { time: ii(this, n) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (n) {
      return n === void 0 && (n = this._time), Al(this, ii(this, n));
    }),
    (t.previousLabel = function (n) {
      return n === void 0 && (n = this._time), Al(this, ii(this, n), 1);
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
      return Ar(this);
    }),
    (t.invalidate = function (n) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
      return r.prototype.invalidate.call(this, n);
    }),
    (t.clear = function (n) {
      n === void 0 && (n = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        Ar(this)
      );
    }),
    (t.totalDuration = function (n) {
      var s = 0,
        o = this,
        a = o._last,
        l = si,
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
              ? ((o._lock = 1), (Ei(o, a, c - a._delay, 1)._lock = 0))
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
        mn(o, o === Pe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (n) {
      if ((Pe._ts && (sc(Pe, ro(n, Pe)), (rc = Yt.frame)), Yt.frame >= xl)) {
        xl += Qt.autoSleep || 120;
        var s = Pe._first;
        if ((!s || !s._ts) && Qt.autoSleep && Yt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Yt.sleep();
        }
      }
    }),
    e
  );
})(ss);
Jt(Et.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Hf = function (e, t, i, n, s, o, a) {
    var l = new Rt(this._pt, e, t, 0, 1, Dc, null, s),
      u = 0,
      c = 0,
      d,
      h,
      f,
      p,
      m,
      y,
      T,
      _;
    for (
      l.b = i,
        l.e = n,
        i += "",
        n += "",
        (T = ~n.indexOf("random(")) && (n = rs(n)),
        o && ((_ = [i, n]), o(_, e, t), (i = _[0]), (n = _[1])),
        h = i.match(Oo) || [];
      (d = Oo.exec(n));

    )
      (p = d[0]),
        (m = n.substring(u, d.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === "rgba(" && (f = 1),
        p !== h[c++] &&
          ((y = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: m || c === 1 ? m : ",",
            s: y,
            c: p.charAt(1) === "=" ? sn(y, p) - y : parseFloat(p) - y,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = Oo.lastIndex));
    return (
      (l.c = u < n.length ? n.substring(u, n.length) : ""),
      (l.fp = a),
      (Zu.test(n) || T) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Ya = function (e, t, i, n, s, o, a, l, u, c) {
    Le(n) && (n = n(s || 0, e, o));
    var d = e[t],
      h =
        i !== "get"
          ? i
          : Le(d)
          ? u
            ? e[
                t.indexOf("set") || !Le(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : d,
      f = Le(d) ? (u ? Yf : Mc) : Ka,
      p;
    if (
      (Je(n) &&
        (~n.indexOf("random(") && (n = rs(n)),
        n.charAt(1) === "=" &&
          ((p = sn(h, n) + (ht(h) || 0)), (p || p === 0) && (n = p))),
      !c || h !== n || ha)
    )
      return !isNaN(h * n) && n !== ""
        ? ((p = new Rt(
            this._pt,
            e,
            t,
            +h || 0,
            n - (h || 0),
            typeof d == "boolean" ? Kf : Lc,
            0,
            f
          )),
          u && (p.fp = u),
          a && p.modifier(a, this, e),
          (this._pt = p))
        : (!d && !(t in e) && Ha(t, n),
          Hf.call(this, e, t, h, n, f, l || Qt.stringFilter, u));
  },
  Wf = function (e, t, i, n, s) {
    if (
      (Le(e) && (e = $n(e, s, t, i, n)),
      !Li(e) || (e.style && e.nodeType) || vt(e) || Ku(e))
    )
      return Je(e) ? $n(e, s, t, i, n) : e;
    var o = {},
      a;
    for (a in e) o[a] = $n(e[a], s, t, i, n);
    return o;
  },
  Ac = function (e, t, i, n, s, o) {
    var a, l, u, c;
    if (
      jt[e] &&
      (a = new jt[e]()).init(
        s,
        a.rawVars ? t[e] : Wf(t[e], n, s, o, i),
        i,
        n,
        o
      ) !== !1 &&
      ((i._pt = l = new Rt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== rn)
    )
      for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  Ki,
  ha,
  Ua = function r(e, t, i) {
    var n = e.vars,
      s = n.ease,
      o = n.startAt,
      a = n.immediateRender,
      l = n.lazy,
      u = n.onUpdate,
      c = n.runBackwards,
      d = n.yoyoEase,
      h = n.keyframes,
      f = n.autoRevert,
      p = e._dur,
      m = e._startAt,
      y = e._targets,
      T = e.parent,
      _ = T && T.data === "nested" ? T.vars.targets : y,
      x = e._overwrite === "auto" && !Ba,
      g = e.timeline,
      C,
      E,
      A,
      M,
      I,
      D,
      z,
      S,
      P,
      v,
      w,
      b,
      k;
    if (
      (g && (!h || !s) && (s = "none"),
      (e._ease = kr(s, fn.ease)),
      (e._yEase = d ? xc(kr(d === !0 ? s : d, fn.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !g && !!n.runBackwards),
      !g || (h && !n.stagger))
    ) {
      if (
        ((S = y[0] ? Pr(y[0]).harness : 0),
        (b = S && n[S.prop]),
        (C = io(n, Wa)),
        m &&
          (m._zTime < 0 && m.progress(1),
          t < 0 && c && a && !f ? m.render(-1, !0) : m.revert(c && p ? Bs : yf),
          (m._lazy = 0)),
        o)
      ) {
        if (
          (sr(
            (e._startAt = Fe.set(
              y,
              Jt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: T,
                  immediateRender: !0,
                  lazy: !m && Dt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Kt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (nt || (!a && !f)) && e._startAt.revert(Bs),
          a && p && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (c && p && !m) {
        if (
          (t && (a = !1),
          (A = Jt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !m && Dt(l),
              immediateRender: a,
              stagger: 0,
              parent: T,
            },
            C
          )),
          b && (A[S.prop] = b),
          sr((e._startAt = Fe.set(y, A))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (nt ? e._startAt.revert(Bs) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          r(e._startAt, ve, ve);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (p && Dt(l)) || (l && !p), E = 0;
        E < y.length;
        E++
      ) {
        if (
          ((I = y[E]),
          (z = I._gsap || Ga(y)[E]._gsap),
          (e._ptLookup[E] = v = {}),
          la[z.id] && ir.length && to(),
          (w = _ === y ? E : _.indexOf(I)),
          S &&
            (P = new S()).init(I, b || C, e, w, _) !== !1 &&
            ((e._pt = M =
              new Rt(e._pt, I, P.name, 0, 1, P.render, P, 0, P.priority)),
            P._props.forEach(function (L) {
              v[L] = M;
            }),
            P.priority && (D = 1)),
          !S || b)
        )
          for (A in C)
            jt[A] && (P = Ac(A, C, e, w, I, _))
              ? P.priority && (D = 1)
              : (v[A] = M =
                  Ya.call(e, I, A, "get", C[A], w, _, 0, n.stringFilter));
        e._op && e._op[E] && e.kill(I, e._op[E]),
          x &&
            e._pt &&
            ((Ki = e),
            Pe.killTweensOf(I, v, e.globalTime(t)),
            (k = !e.parent),
            (Ki = 0)),
          e._pt && l && (la[z.id] = 1);
      }
      D && Ic(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !k),
      h && t <= 0 && g.render(si, !0, !0);
  },
  jf = function (e, t, i, n, s, o, a, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      d,
      h,
      f;
    if (!u)
      for (
        u = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((c = h[f][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c)
          return (
            (ha = 1),
            (e.vars[t] = "+=0"),
            Ua(e, a),
            (ha = 0),
            l ? ts(t + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (f = u.length; f--; )
      (d = u[f]),
        (c = d._pt || d),
        (c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c),
        (c.c = i - c.s),
        d.e && (d.e = Ie(i) + ht(d.e)),
        d.b && (d.b = c.s + ht(d.b));
  },
  Gf = function (e, t) {
    var i = e[0] ? Pr(e[0]).harness : 0,
      n = i && i.aliases,
      s,
      o,
      a,
      l;
    if (!n) return t;
    s = pn({}, t);
    for (o in n)
      if (o in s) for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  Xf = function (e, t, i, n) {
    var s = t.ease || n || "power1.inOut",
      o,
      a;
    if (vt(t))
      (a = i[e] || (i[e] = [])),
        t.forEach(function (l, u) {
          return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = i[o] || (i[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  $n = function (e, t, i, n, s) {
    return Le(e)
      ? e.call(t, i, n, s)
      : Je(e) && ~e.indexOf("random(")
      ? rs(e)
      : e;
  },
  kc = ja + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Oc = {};
It(kc + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
  return (Oc[r] = 1);
});
var Fe = (function (r) {
  Yu(e, r);
  function e(i, n, s, o) {
    var a;
    typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
      (a = r.call(this, o ? n : qn(n)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      p = l.keyframes,
      m = l.defaults,
      y = l.scrollTrigger,
      T = l.yoyoEase,
      _ = n.parent || Pe,
      x = (vt(i) || Ku(i) ? Vi(i[0]) : "length" in n) ? [i] : oi(i),
      g,
      C,
      E,
      A,
      M,
      I,
      D,
      z;
    if (
      ((a._targets = x.length
        ? Ga(x)
        : ts(
            "GSAP target " + i + " not found. https://gsap.com",
            !Qt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      p || h || Ss(u) || Ss(c))
    ) {
      if (
        ((n = a.vars),
        (g = a.timeline =
          new Et({
            data: "nested",
            defaults: m || {},
            targets: _ && _.data === "nested" ? _.vars.targets : x,
          })),
        g.kill(),
        (g.parent = g._dp = Ii(a)),
        (g._start = 0),
        h || Ss(u) || Ss(c))
      ) {
        if (((A = x.length), (D = h && hc(h)), Li(h)))
          for (M in h) ~kc.indexOf(M) && (z || (z = {}), (z[M] = h[M]));
        for (C = 0; C < A; C++)
          (E = io(n, Oc)),
            (E.stagger = 0),
            T && (E.yoyoEase = T),
            z && pn(E, z),
            (I = x[C]),
            (E.duration = +$n(u, Ii(a), C, I, x)),
            (E.delay = (+$n(c, Ii(a), C, I, x) || 0) - a._delay),
            !h &&
              A === 1 &&
              E.delay &&
              ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
            g.to(I, E, D ? D(C, I, x) : 0),
            (g._ease = rt.none);
        g.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (p) {
        qn(Jt(g.vars.defaults, { ease: "none" })),
          (g._ease = kr(p.ease || n.ease || "none"));
        var S = 0,
          P,
          v,
          w;
        if (vt(p))
          p.forEach(function (b) {
            return g.to(x, b, ">");
          }),
            g.duration();
        else {
          E = {};
          for (M in p)
            M === "ease" || M === "easeEach" || Xf(M, p[M], E, p.easeEach);
          for (M in E)
            for (
              P = E[M].sort(function (b, k) {
                return b.t - k.t;
              }),
                S = 0,
                C = 0;
              C < P.length;
              C++
            )
              (v = P[C]),
                (w = {
                  ease: v.e,
                  duration: ((v.t - (C ? P[C - 1].t : 0)) / 100) * u,
                }),
                (w[M] = v.v),
                g.to(x, w, S),
                (S += w.duration);
          g.duration() < u && g.to({}, { duration: u - g.duration() });
        }
      }
      u || a.duration((u = g.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !Ba && ((Ki = Ii(a)), Pe.killTweensOf(x), (Ki = 0)),
      Ei(_, Ii(a), s),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (d ||
        (!u &&
          !p &&
          a._start === Be(_._time) &&
          Dt(d) &&
          xf(Ii(a)) &&
          _.data !== "nested")) &&
        ((a._tTime = -ve), a.render(Math.max(0, -c) || 0)),
      y && cc(Ii(a), y),
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
        h,
        f,
        p,
        m,
        y,
        T,
        _,
        x,
        g;
      if (!u) Ef(this, n, s, o);
      else if (
        d !== this._tTime ||
        !n ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((h = d), (x = this.timeline), this._repeat)) {
          if (((m = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(m * 100 + n, s, o);
          if (
            ((h = Be(d % m)),
            d === l
              ? ((p = this._repeat), (h = u))
              : ((y = Be(d / m)),
                (p = ~~y),
                p && p === y ? ((h = u), p--) : h > u && (h = u)),
            (T = this._yoyo && p & 1),
            T && ((g = this._yEase), (h = u - h)),
            (y = hn(this._tTime, m)),
            h === a && !o && this._initted && p === y)
          )
            return (this._tTime = d), this;
          p !== y &&
            (x && this._yEase && Cc(x, T),
            this.vars.repeatRefresh &&
              !T &&
              !this._lock &&
              h !== m &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Be(m * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (dc(this, c ? n : h, o, s, d)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && p !== y))
            return this;
          if (u !== this._dur) return this.render(n, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = _ = (g || this._ease)(h / u)),
          this._from && (this.ratio = _ = 1 - _),
          !a && d && !s && !y && (Kt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (f = this._pt; f; ) f.r(_, f.d), (f = f._next);
        (x && x.render(n < 0 ? n : x._dur * x._ease(h / this._dur), s, o)) ||
          (this._startAt && (this._zTime = n)),
          this._onUpdate &&
            !s &&
            (c && ua(this, n, s, o), Kt(this, "onUpdate")),
          this._repeat &&
            p !== y &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Kt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && ua(this, n, !0, !0),
            (n || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              sr(this, 1),
            !s &&
              !(c && !a) &&
              (d || a || T) &&
              (Kt(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
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
      ns || Yt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ua(this, u),
        (c = this._ease(u / this._dur)),
        jf(this, n, s, o, a, c, u, l)
          ? this.resetTo(n, s, o, a, 1)
          : (xo(this, 0),
            this.parent ||
              lc(
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
            ? Dn(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!nt),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(n, s, Ki && Ki.vars.overwrite !== !0)
            ._first || Dn(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            mn(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = n ? oi(n) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        h,
        f,
        p,
        m,
        y,
        T;
      if ((!s || s === "all") && Sf(a, l))
        return s === "all" && (this._pt = 0), Dn(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Je(s) &&
              ((m = {}),
              It(s, function (_) {
                return (m[_] = 1);
              }),
              (s = m)),
            (s = Gf(a, s))),
          T = a.length;
        T--;

      )
        if (~l.indexOf(a[T])) {
          (h = u[T]),
            s === "all"
              ? ((d[T] = s), (p = h), (f = {}))
              : ((f = d[T] = d[T] || {}), (p = s));
          for (m in p)
            (y = h && h[m]),
              y &&
                ((!("kill" in y.d) || y.d.kill(m) === !0) && So(this, y, "_pt"),
                delete h[m]),
              f !== "all" && (f[m] = 1);
        }
      return this._initted && !this._pt && c && Dn(this), this;
    }),
    (e.to = function (n, s) {
      return new e(n, s, arguments[2]);
    }),
    (e.from = function (n, s) {
      return Vn(1, arguments);
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
      return Vn(2, arguments);
    }),
    (e.set = function (n, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
    }),
    (e.killTweensOf = function (n, s, o) {
      return Pe.killTweensOf(n, s, o);
    }),
    e
  );
})(ss);
Jt(Fe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
It("staggerTo,staggerFrom,staggerFromTo", function (r) {
  Fe[r] = function () {
    var e = new Et(),
      t = da.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Ka = function (e, t, i) {
    return (e[t] = i);
  },
  Mc = function (e, t, i) {
    return e[t](i);
  },
  Yf = function (e, t, i, n) {
    return e[t](n.fp, i);
  },
  Uf = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  Qa = function (e, t) {
    return Le(e[t]) ? Mc : qa(e[t]) && e.setAttribute ? Uf : Ka;
  },
  Lc = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Kf = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Dc = function (e, t) {
    var i = t._pt,
      n = "";
    if (!e && t.b) n = t.b;
    else if (e === 1 && t.e) n = t.e;
    else {
      for (; i; )
        (n =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          n),
          (i = i._next);
      n += t.c;
    }
    t.set(t.t, t.p, n, t);
  },
  Za = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  Qf = function (e, t, i, n) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
  },
  Zf = function (e) {
    for (var t = this._pt, i, n; t; )
      (n = t._next),
        (t.p === e && !t.op) || t.op === e
          ? So(this, t, "_pt")
          : t.dep || (i = 1),
        (t = n);
    return !i;
  },
  Jf = function (e, t, i, n) {
    n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
  },
  Ic = function (e) {
    for (var t = e._pt, i, n, s, o; t; ) {
      for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
      (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = n) ? (n._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  },
  Rt = (function () {
    function r(t, i, n, s, o, a, l, u, c) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = n),
        (this.r = a || Lc),
        (this.d = l || this),
        (this.set = u || Ka),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = r.prototype;
    return (
      (e.modifier = function (i, n, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = Jf),
          (this.m = i),
          (this.mt = s),
          (this.tween = n);
      }),
      r
    );
  })();
It(
  ja +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (r) {
    return (Wa[r] = 1);
  }
);
Zt.TweenMax = Zt.TweenLite = Fe;
Zt.TimelineLite = Zt.TimelineMax = Et;
Pe = new Et({
  sortChildren: !1,
  defaults: fn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Qt.stringFilter = Tc;
var Or = [],
  Vs = {},
  ep = [],
  Ol = 0,
  tp = 0,
  Ro = function (e) {
    return (Vs[e] || ep).map(function (t) {
      return t();
    });
  },
  ma = function () {
    var e = Date.now(),
      t = [];
    e - Ol > 2 &&
      (Ro("matchMediaInit"),
      Or.forEach(function (i) {
        var n = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          u;
        for (a in n)
          (o = Ti.matchMedia(n[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (i.revert(), l && t.push(i));
      }),
      Ro("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (n) {
          return i.add(null, n);
        });
      }),
      (Ol = e),
      Ro("matchMedia"));
  },
  Rc = (function () {
    function r(t, i) {
      (this.selector = i && fa(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = tp++),
        t && this.add(t);
    }
    var e = r.prototype;
    return (
      (e.add = function (i, n, s) {
        Le(i) && ((s = n), (n = i), (i = Le));
        var o = this,
          a = function () {
            var u = Te,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = fa(s)),
              (Te = o),
              (d = n.apply(o, arguments)),
              Le(d) && o._r.push(d),
              (Te = u),
              (o.selector = c),
              (o.isReverted = !1),
              d
            );
          };
        return (
          (o.last = a),
          i === Le
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : i
            ? (o[i] = a)
            : a
        );
      }),
      (e.ignore = function (i) {
        var n = Te;
        (Te = null), i(this), (Te = n);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof r
              ? i.push.apply(i, n.getTweens())
              : n instanceof Fe &&
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
                    u instanceof Et
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Fe) && u.revert && u.revert(i);
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
          for (var o = Or.length; o--; )
            Or[o].id === this.id && Or.splice(o, 1);
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      r
    );
  })(),
  ip = (function () {
    function r(t) {
      (this.contexts = []), (this.scope = t), Te && Te.data.push(this);
    }
    var e = r.prototype;
    return (
      (e.add = function (i, n, s) {
        Li(i) || (i = { matches: i });
        var o = new Rc(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        Te && !o.selector && (o.selector = Te.selector),
          this.contexts.push(o),
          (n = o.add("onMatch", n)),
          (o.queries = i);
        for (u in i)
          u === "all"
            ? (c = 1)
            : ((l = Ti.matchMedia(i[u])),
              l &&
                (Or.indexOf(o) < 0 && Or.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(ma)
                  : l.addEventListener("change", ma)));
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
  no = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (n) {
        return _c(n);
      });
    },
    timeline: function (e) {
      return new Et(e);
    },
    getTweensOf: function (e, t) {
      return Pe.getTweensOf(e, t);
    },
    getProperty: function (e, t, i, n) {
      Je(e) && (e = oi(e)[0]);
      var s = Pr(e || {}).get,
        o = i ? ac : oc;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o(((jt[t] && jt[t].get) || s)(e, t, i, n))
            : function (a, l, u) {
                return o(((jt[a] && jt[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, t, i) {
      if (((e = oi(e)), e.length > 1)) {
        var n = e.map(function (c) {
            return Bt.quickSetter(c, t, i);
          }),
          s = n.length;
        return function (c) {
          for (var d = s; d--; ) n[d](c);
        };
      }
      e = e[0] || {};
      var o = jt[t],
        a = Pr(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = o
          ? function (c) {
              var d = new o();
              (rn._pt = 0),
                d.init(e, i ? c + i : c, rn, 0, [e]),
                d.render(1, d),
                rn._pt && Za(1, rn);
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
        s = Bt.to(
          e,
          Jt(
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
      return Pe.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = kr(e.ease, fn.ease)), Cl(fn, e || {});
    },
    config: function (e) {
      return Cl(Qt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        n = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (n || "").split(",").forEach(function (a) {
        return (
          a && !jt[a] && !Zt[a] && ts(t + " effect requires " + a + " plugin.")
        );
      }),
        (Mo[t] = function (a, l, u) {
          return i(oi(a), Jt(l || {}, s), u);
        }),
        o &&
          (Et.prototype[t] = function (a, l, u) {
            return this.add(Mo[t](a, Li(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      rt[e] = kr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? kr(e, t) : rt;
    },
    getById: function (e) {
      return Pe.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var i = new Et(e),
        n,
        s;
      for (
        i.smoothChildTiming = Dt(e.smoothChildTiming),
          Pe.remove(i),
          i._dp = 0,
          i._time = i._tTime = Pe._time,
          n = Pe._first;
        n;

      )
        (s = n._next),
          (t ||
            !(
              !n._dur &&
              n instanceof Fe &&
              n.vars.onComplete === n._targets[0]
            )) &&
            Ei(i, n, n._start - n._delay),
          (n = s);
      return Ei(Pe, i, 0), i;
    },
    context: function (e, t) {
      return e ? new Rc(e, t) : Te;
    },
    matchMedia: function (e) {
      return new ip(e);
    },
    matchMediaRefresh: function () {
      return (
        Or.forEach(function (e) {
          var t = e.conditions,
            i,
            n;
          for (n in t) t[n] && ((t[n] = !1), (i = 1));
          i && e.revert();
        }) || ma()
      );
    },
    addEventListener: function (e, t) {
      var i = Vs[e] || (Vs[e] = []);
      ~i.indexOf(t) || i.push(t);
    },
    removeEventListener: function (e, t) {
      var i = Vs[e],
        n = i && i.indexOf(t);
      n >= 0 && i.splice(n, 1);
    },
    utils: {
      wrap: If,
      wrapYoyo: Rf,
      distribute: hc,
      random: gc,
      snap: mc,
      normalize: Df,
      getUnit: ht,
      clamp: kf,
      splitColor: bc,
      toArray: oi,
      selector: fa,
      mapRange: yc,
      pipe: Mf,
      unitize: Lf,
      interpolate: Nf,
      shuffle: pc,
    },
    install: tc,
    effects: Mo,
    ticker: Yt,
    updateRoot: Et.updateRoot,
    plugins: jt,
    globalTimeline: Pe,
    core: {
      PropTween: Rt,
      globals: ic,
      Tween: Fe,
      Timeline: Et,
      Animation: ss,
      getCache: Pr,
      _removeLinkedListItem: So,
      reverting: function () {
        return nt;
      },
      context: function (e) {
        return e && Te && (Te.data.push(e), (e._ctx = Te)), Te;
      },
      suppressOverwrites: function (e) {
        return (Ba = e);
      },
    },
  };
It("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
  return (no[r] = Fe[r]);
});
Yt.add(Et.updateRoot);
rn = no.to({}, { duration: 0 });
var rp = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  np = function (e, t) {
    var i = e._targets,
      n,
      s,
      o;
    for (n in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][n]),
          o &&
            (o = o.d) &&
            (o._pt && (o = rp(o, n)),
            o && o.modifier && o.modifier(t[n], e, i[s], n));
  },
  No = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (n, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Je(s) &&
              ((l = {}),
              It(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (u in s) l[u] = t(s[u]);
            s = l;
          }
          np(a, s);
        };
      },
    };
  },
  Bt =
    no.registerPlugin(
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
      No("roundProps", pa),
      No("modifiers"),
      No("snap", mc)
    ) || no;
Fe.version = Et.version = Bt.version = "3.13.0";
ec = 1;
Va() && gn();
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ml,
  Qi,
  on,
  Ja,
  Cr,
  Ll,
  el,
  sp = function () {
    return typeof window < "u";
  },
  $i = {},
  _r = 180 / Math.PI,
  an = Math.PI / 180,
  $r = Math.atan2,
  Dl = 1e8,
  tl = /([A-Z])/g,
  op = /(left|right|width|margin|padding|x)/i,
  ap = /[\s,\(]\S/,
  Pi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  ga = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  lp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  up = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  cp = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Nc = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  zc = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  dp = function (e, t, i) {
    return (e.style[t] = i);
  },
  fp = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  pp = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  hp = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  mp = function (e, t, i, n, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  },
  gp = function (e, t, i, n, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  },
  Ae = "transform",
  Nt = Ae + "Origin",
  vp = function r(e, t) {
    var i = this,
      n = this.target,
      s = n.style,
      o = n._gsap;
    if (e in $i && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Pi[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (i.tfm[a] = Ri(n, a));
              })
            : (this.tfm[e] = o.x ? o[e] : Ri(n, e)),
          e === Nt && (this.tfm.zOrigin = o.zOrigin);
      else
        return Pi.transform.split(",").forEach(function (a) {
          return r.call(i, a, t);
        });
      if (this.props.indexOf(Ae) >= 0) return;
      o.svg &&
        ((this.svgo = n.getAttribute("data-svg-origin")),
        this.props.push(Nt, t, "")),
        (e = Ae);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Fc = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  yp = function () {
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
              : e[s].replace(tl, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o];
      n.svg &&
        (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = el()),
        (!s || !s.isStart) &&
          !i[Ae] &&
          (Fc(i),
          n.zOrigin &&
            i[Nt] &&
            ((i[Nt] += " " + n.zOrigin + "px"),
            (n.zOrigin = 0),
            n.renderTransform()),
          (n.uncache = 1));
    }
  },
  Bc = function (e, t) {
    var i = { target: e, props: [], revert: yp, save: vp };
    return (
      e._gsap || Bt.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (n) {
          return i.save(n);
        }),
      i
    );
  },
  qc,
  va = function (e, t) {
    var i = Qi.createElementNS
      ? Qi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Qi.createElement(e);
    return i && i.style ? i : Qi.createElement(e);
  },
  ai = function r(e, t, i) {
    var n = getComputedStyle(e);
    return (
      n[t] ||
      n.getPropertyValue(t.replace(tl, "-$1").toLowerCase()) ||
      n.getPropertyValue(t) ||
      (!i && r(e, vn(t) || t, 1)) ||
      ""
    );
  },
  Il = "O,Moz,ms,Ms,Webkit".split(","),
  vn = function (e, t, i) {
    var n = t || Cr,
      s = n.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Il[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Il[o] : "") + e;
  },
  ya = function () {
    sp() &&
      window.document &&
      ((Ml = window),
      (Qi = Ml.document),
      (on = Qi.documentElement),
      (Cr = va("div") || { style: {} }),
      va("div"),
      (Ae = vn(Ae)),
      (Nt = Ae + "Origin"),
      (Cr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (qc = !!vn("perspective")),
      (el = Bt.core.reverting),
      (Ja = 1));
  },
  Rl = function (e) {
    var t = e.ownerSVGElement,
      i = va(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      n = e.cloneNode(!0),
      s;
    (n.style.display = "block"), i.appendChild(n), on.appendChild(i);
    try {
      s = n.getBBox();
    } catch {}
    return i.removeChild(n), on.removeChild(i), s;
  },
  Nl = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  Vc = function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = Rl(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = Rl(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Nl(e, ["x", "cx", "x1"]) || 0,
            y: +Nl(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  $c = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Vc(e));
  },
  Rr = function (e, t) {
    if (t) {
      var i = e.style,
        n;
      t in $i && t !== Nt && (t = Ae),
        i.removeProperty
          ? ((n = t.substr(0, 2)),
            (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              n === "--" ? t : t.replace(tl, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  },
  Zi = function (e, t, i, n, s, o) {
    var a = new Rt(e._pt, t, i, 0, 1, o ? zc : Nc);
    return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
  },
  zl = { deg: 1, rad: 1, turn: 1 },
  wp = { grid: 1, flex: 1 },
  or = function r(e, t, i, n) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      a = Cr.style,
      l = op.test(t),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = n === "px",
      f = n === "%",
      p,
      m,
      y,
      T;
    if (n === o || !s || zl[n] || zl[o]) return s;
    if (
      (o !== "px" && !h && (s = r(e, t, i, "px")),
      (T = e.getCTM && $c(e)),
      (f || o === "%") && ($i[t] || ~t.indexOf("adius")))
    )
      return (
        (p = T ? e.getBBox()[l ? "width" : "height"] : e[c]),
        Ie(f ? (s / p) * d : (s / 100) * p)
      );
    if (
      ((a[l ? "width" : "height"] = d + (h ? o : n)),
      (m =
        (n !== "rem" && ~t.indexOf("adius")) ||
        (n === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      T && (m = (e.ownerSVGElement || {}).parentNode),
      (!m || m === Qi || !m.appendChild) && (m = Qi.body),
      (y = m._gsap),
      y && f && y.width && l && y.time === Yt.time && !y.uncache)
    )
      return Ie((s / y.width) * d);
    if (f && (t === "height" || t === "width")) {
      var _ = e.style[t];
      (e.style[t] = d + n), (p = e[c]), _ ? (e.style[t] = _) : Rr(e, t);
    } else
      (f || o === "%") &&
        !wp[ai(m, "display")] &&
        (a.position = ai(e, "position")),
        m === e && (a.position = "static"),
        m.appendChild(Cr),
        (p = Cr[c]),
        m.removeChild(Cr),
        (a.position = "absolute");
    return (
      l && f && ((y = Pr(m)), (y.time = Yt.time), (y.width = m[c])),
      Ie(h ? (p * s) / d : p && s ? (d / p) * s : 0)
    );
  },
  Ri = function (e, t, i, n) {
    var s;
    return (
      Ja || ya(),
      t in Pi &&
        t !== "transform" &&
        ((t = Pi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      $i[t] && t !== "transform"
        ? ((s = as(e, n)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : oo(ai(e, Nt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
            (s =
              (so[t] && so[t](e, t, i)) ||
              ai(e, t) ||
              nc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? or(e, t, s, i) + i : s
    );
  },
  _p = function (e, t, i, n) {
    if (!i || i === "none") {
      var s = vn(t, e, 1),
        o = s && ai(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = ai(e, "borderTopColor"));
    }
    var a = new Rt(this._pt, e.style, t, 0, 1, Dc),
      l = 0,
      u = 0,
      c,
      d,
      h,
      f,
      p,
      m,
      y,
      T,
      _,
      x,
      g,
      C;
    if (
      ((a.b = i),
      (a.e = n),
      (i += ""),
      (n += ""),
      n.substring(0, 6) === "var(--" &&
        (n = ai(e, n.substring(4, n.indexOf(")")))),
      n === "auto" &&
        ((m = e.style[t]),
        (e.style[t] = n),
        (n = ai(e, t) || n),
        m ? (e.style[t] = m) : Rr(e, t)),
      (c = [i, n]),
      Tc(c),
      (i = c[0]),
      (n = c[1]),
      (h = i.match(tn) || []),
      (C = n.match(tn) || []),
      C.length)
    ) {
      for (; (d = tn.exec(n)); )
        (y = d[0]),
          (_ = n.substring(l, d.index)),
          p
            ? (p = (p + 1) % 5)
            : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1),
          y !== (m = h[u++] || "") &&
            ((f = parseFloat(m) || 0),
            (g = m.substr((f + "").length)),
            y.charAt(1) === "=" && (y = sn(f, y) + g),
            (T = parseFloat(y)),
            (x = y.substr((T + "").length)),
            (l = tn.lastIndex - x.length),
            x ||
              ((x = x || Qt.units[t] || g),
              l === n.length && ((n += x), (a.e += x))),
            g !== x && (f = or(e, t, m, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: _ || u === 1 ? _ : ",",
              s: f,
              c: T - f,
              m: (p && p < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < n.length ? n.substring(l, n.length) : "";
    } else a.r = t === "display" && n === "none" ? zc : Nc;
    return Zu.test(n) && (a.e = 0), (this._pt = a), a;
  },
  Fl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  bp = function (e) {
    var t = e.split(" "),
      i = t[0],
      n = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || n === "left" || n === "right") &&
        ((e = i), (i = n), (n = e)),
      (t[0] = Fl[i] || i),
      (t[1] = Fl[n] || n),
      t.join(" ")
    );
  },
  Sp = function (e, t) {
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
            $i[a] && ((l = 1), (a = a === "transformOrigin" ? Nt : Ae)),
            Rr(i, a);
      l &&
        (Rr(i, Ae),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (n.scale = n.rotate = n.translate = "none"),
          as(i, 1),
          (o.uncache = 1),
          Fc(n)));
    }
  },
  so = {
    clearProps: function (e, t, i, n, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Rt(e._pt, t, i, 0, 0, Sp));
        return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    },
  },
  os = [1, 0, 0, 1, 0, 0],
  Hc = {},
  Wc = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Bl = function (e) {
    var t = ai(e, Ae);
    return Wc(t) ? os : t.substr(7).match(Qu).map(Ie);
  },
  il = function (e, t) {
    var i = e._gsap || Pr(e),
      n = e.style,
      s = Bl(e),
      o,
      a,
      l,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? os : s)
      : (s === os &&
          !e.offsetParent &&
          e !== on &&
          !i.svg &&
          ((l = n.display),
          (n.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (a = e.nextElementSibling), on.appendChild(e)),
          (s = Bl(e)),
          l ? (n.display = l) : Rr(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : on.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  wa = function (e, t, i, n, s, o) {
    var a = e._gsap,
      l = s || il(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      p = l[1],
      m = l[2],
      y = l[3],
      T = l[4],
      _ = l[5],
      x = t.split(" "),
      g = parseFloat(x[0]) || 0,
      C = parseFloat(x[1]) || 0,
      E,
      A,
      M,
      I;
    i
      ? l !== os &&
        (A = f * y - p * m) &&
        ((M = g * (y / A) + C * (-m / A) + (m * _ - y * T) / A),
        (I = g * (-p / A) + C * (f / A) - (f * _ - p * T) / A),
        (g = M),
        (C = I))
      : ((E = Vc(e)),
        (g = E.x + (~x[0].indexOf("%") ? (g / 100) * E.width : g)),
        (C = E.y + (~(x[1] || x[0]).indexOf("%") ? (C / 100) * E.height : C))),
      n || (n !== !1 && a.smooth)
        ? ((T = g - u),
          (_ = C - c),
          (a.xOffset = d + (T * f + _ * m) - T),
          (a.yOffset = h + (T * p + _ * y) - _))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = g),
      (a.yOrigin = C),
      (a.smooth = !!n),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[Nt] = "0px 0px"),
      o &&
        (Zi(o, a, "xOrigin", u, g),
        Zi(o, a, "yOrigin", c, C),
        Zi(o, a, "xOffset", d, a.xOffset),
        Zi(o, a, "yOffset", h, a.yOffset)),
      e.setAttribute("data-svg-origin", g + " " + C);
  },
  as = function (e, t) {
    var i = e._gsap || new Pc(e);
    if ("x" in i && !t && !i.uncache) return i;
    var n = e.style,
      s = i.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = ai(e, Nt) || "0",
      c,
      d,
      h,
      f,
      p,
      m,
      y,
      T,
      _,
      x,
      g,
      C,
      E,
      A,
      M,
      I,
      D,
      z,
      S,
      P,
      v,
      w,
      b,
      k,
      L,
      R,
      O,
      q,
      H,
      K,
      Q,
      ie;
    return (
      (c = d = h = m = y = T = _ = x = g = 0),
      (f = p = 1),
      (i.svg = !!(e.getCTM && $c(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (n[Ae] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Ae] !== "none" ? l[Ae] : "")),
        (n.scale = n.rotate = n.translate = "none")),
      (A = il(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((L = e.getBBox()),
            (u = i.xOrigin - L.x + "px " + (i.yOrigin - L.y) + "px"),
            (k = ""))
          : (k = !t && e.getAttribute("data-svg-origin")),
        wa(e, k || u, !!k || i.originIsAbsolute, i.smooth !== !1, A)),
      (C = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      A !== os &&
        ((z = A[0]),
        (S = A[1]),
        (P = A[2]),
        (v = A[3]),
        (c = w = A[4]),
        (d = b = A[5]),
        A.length === 6
          ? ((f = Math.sqrt(z * z + S * S)),
            (p = Math.sqrt(v * v + P * P)),
            (m = z || S ? $r(S, z) * _r : 0),
            (_ = P || v ? $r(P, v) * _r + m : 0),
            _ && (p *= Math.abs(Math.cos(_ * an))),
            i.svg && ((c -= C - (C * z + E * P)), (d -= E - (C * S + E * v))))
          : ((ie = A[6]),
            (K = A[7]),
            (O = A[8]),
            (q = A[9]),
            (H = A[10]),
            (Q = A[11]),
            (c = A[12]),
            (d = A[13]),
            (h = A[14]),
            (M = $r(ie, H)),
            (y = M * _r),
            M &&
              ((I = Math.cos(-M)),
              (D = Math.sin(-M)),
              (k = w * I + O * D),
              (L = b * I + q * D),
              (R = ie * I + H * D),
              (O = w * -D + O * I),
              (q = b * -D + q * I),
              (H = ie * -D + H * I),
              (Q = K * -D + Q * I),
              (w = k),
              (b = L),
              (ie = R)),
            (M = $r(-P, H)),
            (T = M * _r),
            M &&
              ((I = Math.cos(-M)),
              (D = Math.sin(-M)),
              (k = z * I - O * D),
              (L = S * I - q * D),
              (R = P * I - H * D),
              (Q = v * D + Q * I),
              (z = k),
              (S = L),
              (P = R)),
            (M = $r(S, z)),
            (m = M * _r),
            M &&
              ((I = Math.cos(M)),
              (D = Math.sin(M)),
              (k = z * I + S * D),
              (L = w * I + b * D),
              (S = S * I - z * D),
              (b = b * I - w * D),
              (z = k),
              (w = L)),
            y &&
              Math.abs(y) + Math.abs(m) > 359.9 &&
              ((y = m = 0), (T = 180 - T)),
            (f = Ie(Math.sqrt(z * z + S * S + P * P))),
            (p = Ie(Math.sqrt(b * b + ie * ie))),
            (M = $r(w, b)),
            (_ = Math.abs(M) > 2e-4 ? M * _r : 0),
            (g = Q ? 1 / (Q < 0 ? -Q : Q) : 0)),
        i.svg &&
          ((k = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !Wc(ai(e, Ae))),
          k && e.setAttribute("transform", k))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (s
          ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
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
      (i.z = h + o),
      (i.scaleX = Ie(f)),
      (i.scaleY = Ie(p)),
      (i.rotation = Ie(m) + a),
      (i.rotationX = Ie(y) + a),
      (i.rotationY = Ie(T) + a),
      (i.skewX = _ + a),
      (i.skewY = x + a),
      (i.transformPerspective = g + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (n[Nt] = oo(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Qt.force3D),
      (i.renderTransform = i.svg ? xp : qc ? jc : Tp),
      (i.uncache = 0),
      i
    );
  },
  oo = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  zo = function (e, t, i) {
    var n = ht(t);
    return Ie(parseFloat(t) + parseFloat(or(e, "x", i + "px", n))) + n;
  },
  Tp = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      jc(e, t);
  },
  mr = "0deg",
  Pn = "0px",
  gr = ") ",
  jc = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      u = i.rotation,
      c = i.rotationY,
      d = i.rotationX,
      h = i.skewX,
      f = i.skewY,
      p = i.scaleX,
      m = i.scaleY,
      y = i.transformPerspective,
      T = i.force3D,
      _ = i.target,
      x = i.zOrigin,
      g = "",
      C = (T === "auto" && e && e !== 1) || T === !0;
    if (x && (d !== mr || c !== mr)) {
      var E = parseFloat(c) * an,
        A = Math.sin(E),
        M = Math.cos(E),
        I;
      (E = parseFloat(d) * an),
        (I = Math.cos(E)),
        (o = zo(_, o, A * I * -x)),
        (a = zo(_, a, -Math.sin(E) * -x)),
        (l = zo(_, l, M * I * -x + x));
    }
    y !== Pn && (g += "perspective(" + y + gr),
      (n || s) && (g += "translate(" + n + "%, " + s + "%) "),
      (C || o !== Pn || a !== Pn || l !== Pn) &&
        (g +=
          l !== Pn || C
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + gr),
      u !== mr && (g += "rotate(" + u + gr),
      c !== mr && (g += "rotateY(" + c + gr),
      d !== mr && (g += "rotateX(" + d + gr),
      (h !== mr || f !== mr) && (g += "skew(" + h + ", " + f + gr),
      (p !== 1 || m !== 1) && (g += "scale(" + p + ", " + m + gr),
      (_.style[Ae] = g || "translate(0, 0)");
  },
  xp = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      u = i.skewX,
      c = i.skewY,
      d = i.scaleX,
      h = i.scaleY,
      f = i.target,
      p = i.xOrigin,
      m = i.yOrigin,
      y = i.xOffset,
      T = i.yOffset,
      _ = i.forceCSS,
      x = parseFloat(o),
      g = parseFloat(a),
      C,
      E,
      A,
      M,
      I;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= an),
          (u *= an),
          (C = Math.cos(l) * d),
          (E = Math.sin(l) * d),
          (A = Math.sin(l - u) * -h),
          (M = Math.cos(l - u) * h),
          u &&
            ((c *= an),
            (I = Math.tan(u - c)),
            (I = Math.sqrt(1 + I * I)),
            (A *= I),
            (M *= I),
            c &&
              ((I = Math.tan(c)),
              (I = Math.sqrt(1 + I * I)),
              (C *= I),
              (E *= I))),
          (C = Ie(C)),
          (E = Ie(E)),
          (A = Ie(A)),
          (M = Ie(M)))
        : ((C = d), (M = h), (E = A = 0)),
      ((x && !~(o + "").indexOf("px")) || (g && !~(a + "").indexOf("px"))) &&
        ((x = or(f, "x", o, "px")), (g = or(f, "y", a, "px"))),
      (p || m || y || T) &&
        ((x = Ie(x + p - (p * C + m * A) + y)),
        (g = Ie(g + m - (p * E + m * M) + T))),
      (n || s) &&
        ((I = f.getBBox()),
        (x = Ie(x + (n / 100) * I.width)),
        (g = Ie(g + (s / 100) * I.height))),
      (I =
        "matrix(" + C + "," + E + "," + A + "," + M + "," + x + "," + g + ")"),
      f.setAttribute("transform", I),
      _ && (f.style[Ae] = I);
  },
  Cp = function (e, t, i, n, s) {
    var o = 360,
      a = Je(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? _r : 1),
      u = l - n,
      c = n + u + "deg",
      d,
      h;
    return (
      a &&
        ((d = s.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * Dl) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * Dl) % o) - ~~(u / o) * o)),
      (e._pt = h = new Rt(e._pt, t, i, n, u, lp)),
      (h.e = c),
      (h.u = "deg"),
      e._props.push(i),
      h
    );
  },
  ql = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Ep = function (e, t, i) {
    var n = ql({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      p;
    n.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Ae] = t),
        (a = as(i, 1)),
        Rr(i, Ae),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[Ae]),
        (o[Ae] = t),
        (a = as(i, 1)),
        (o[Ae] = u));
    for (l in $i)
      (u = n[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((f = ht(u)),
          (p = ht(c)),
          (d = f !== p ? or(i, l, u, p) : parseFloat(u)),
          (h = parseFloat(c)),
          (e._pt = new Rt(e._pt, a, l, d, h - d, ga)),
          (e._pt.u = p || 0),
          e._props.push(l));
    ql(a, n);
  };
It("padding,margin,Width,Radius", function (r, e) {
  var t = "Top",
    i = "Right",
    n = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (a) {
      return e < 2 ? r + a : "border" + a + r;
    });
  so[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return (
        (h = o.map(function (p) {
          return Ri(a, p, u);
        })),
        (f = h.join(" ")),
        f.split(h[0]).length === 5 ? h[0] : f
      );
    (h = (c + "").split(" ")),
      (f = {}),
      o.forEach(function (p, m) {
        return (f[p] = h[m] = h[m] || h[((m - 1) / 2) | 0]);
      }),
      a.init(l, f, d);
  };
});
var Gc = {
  name: "css",
  register: ya,
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
      h,
      f,
      p,
      m,
      y,
      T,
      _,
      x,
      g,
      C,
      E,
      A,
      M;
    Ja || ya(),
      (this.styles = this.styles || Bc(e)),
      (M = this.styles.props),
      (this.tween = i);
    for (m in t)
      if (m !== "autoRound" && ((c = t[m]), !(jt[m] && Ac(m, t, i, n, e, s)))) {
        if (
          ((f = typeof c),
          (p = so[m]),
          f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
          f === "string" && ~c.indexOf("random(") && (c = rs(c)),
          p)
        )
          p(this, e, m, c, i) && (A = 1);
        else if (m.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (c += ""),
            (rr.lastIndex = 0),
            rr.test(u) || ((y = ht(u)), (T = ht(c))),
            T ? y !== T && (u = or(e, m, u, T) + T) : y && (c += y),
            this.add(a, "setProperty", u, c, n, s, 0, 0, m),
            o.push(m),
            M.push(m, 0, a[m]);
        else if (f !== "undefined") {
          if (
            (l && m in l
              ? ((u = typeof l[m] == "function" ? l[m].call(i, n, e, s) : l[m]),
                Je(u) && ~u.indexOf("random(") && (u = rs(u)),
                ht(u + "") ||
                  u === "auto" ||
                  (u += Qt.units[m] || ht(Ri(e, m)) || ""),
                (u + "").charAt(1) === "=" && (u = Ri(e, m)))
              : (u = Ri(e, m)),
            (h = parseFloat(u)),
            (_ = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            _ && (c = c.substr(2)),
            (d = parseFloat(c)),
            m in Pi &&
              (m === "autoAlpha" &&
                (h === 1 && Ri(e, "visibility") === "hidden" && d && (h = 0),
                M.push("visibility", 0, a.visibility),
                Zi(
                  this,
                  a,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = Pi[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (x = m in $i),
            x)
          ) {
            if (
              (this.styles.save(m),
              f === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = ai(e, c.substring(4, c.indexOf(")")))),
                (d = parseFloat(c))),
              g ||
                ((C = e._gsap),
                (C.renderTransform && !t.parseTransform) ||
                  as(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && C.smooth),
                (g = this._pt =
                  new Rt(this._pt, a, Ae, 0, 1, C.renderTransform, C, 0, -1)),
                (g.dep = 1)),
              m === "scale")
            )
              (this._pt = new Rt(
                this._pt,
                C,
                "scaleY",
                C.scaleY,
                (_ ? sn(C.scaleY, _ + d) : d) - C.scaleY || 0,
                ga
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              M.push(Nt, 0, a[Nt]),
                (c = bp(c)),
                C.svg
                  ? wa(e, c, 0, E, 0, this)
                  : ((T = parseFloat(c.split(" ")[2]) || 0),
                    T !== C.zOrigin && Zi(this, C, "zOrigin", C.zOrigin, T),
                    Zi(this, a, m, oo(u), oo(c)));
              continue;
            } else if (m === "svgOrigin") {
              wa(e, c, 1, E, 0, this);
              continue;
            } else if (m in Hc) {
              Cp(this, C, m, h, _ ? sn(h, _ + c) : c);
              continue;
            } else if (m === "smoothOrigin") {
              Zi(this, C, "smooth", C.smooth, c);
              continue;
            } else if (m === "force3D") {
              C[m] = c;
              continue;
            } else if (m === "transform") {
              Ep(this, c, e);
              continue;
            }
          } else m in a || (m = vn(m) || m);
          if (x || ((d || d === 0) && (h || h === 0) && !ap.test(c) && m in a))
            (y = (u + "").substr((h + "").length)),
              d || (d = 0),
              (T = ht(c) || (m in Qt.units ? Qt.units[m] : y)),
              y !== T && (h = or(e, m, u, T)),
              (this._pt = new Rt(
                this._pt,
                x ? C : a,
                m,
                h,
                (_ ? sn(h, _ + d) : d) - h,
                !x && (T === "px" || m === "zIndex") && t.autoRound !== !1
                  ? cp
                  : ga
              )),
              (this._pt.u = T || 0),
              y !== T && T !== "%" && ((this._pt.b = u), (this._pt.r = up));
          else if (m in a) _p.call(this, e, m, u, _ ? _ + c : c);
          else if (m in e) this.add(e, m, u || e[m], _ ? _ + c : c, n, s);
          else if (m !== "parseTransform") {
            Ha(m, c);
            continue;
          }
          x ||
            (m in a
              ? M.push(m, 0, a[m])
              : typeof e[m] == "function"
              ? M.push(m, 2, e[m]())
              : M.push(m, 1, u || e[m])),
            o.push(m);
        }
      }
    A && Ic(this);
  },
  render: function (e, t) {
    if (t.tween._time || !el())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  },
  get: Ri,
  aliases: Pi,
  getSetter: function (e, t, i) {
    var n = Pi[t];
    return (
      n && n.indexOf(",") < 0 && (t = n),
      t in $i && t !== Nt && (e._gsap.x || Ri(e, "x"))
        ? i && Ll === i
          ? t === "scale"
            ? hp
            : pp
          : (Ll = i || {}) && (t === "scale" ? mp : gp)
        : e.style && !qa(e.style[t])
        ? dp
        : ~t.indexOf("-")
        ? fp
        : Qa(e, t)
    );
  },
  core: { _removeProperty: Rr, _getMatrix: il },
};
Bt.utils.checkPrefix = vn;
Bt.core.getStyleSaver = Bc;
(function (r, e, t, i) {
  var n = It(r + "," + e + "," + t, function (s) {
    $i[s] = 1;
  });
  It(e, function (s) {
    (Qt.units[s] = "deg"), (Hc[s] = 1);
  }),
    (Pi[n[13]] = r + "," + e),
    It(i, function (s) {
      var o = s.split(":");
      Pi[o[1]] = n[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
It(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (r) {
    Qt.units[r] = "px";
  }
);
Bt.registerPlugin(Gc);
var V = Bt.registerPlugin(Gc) || Bt;
function Pp(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(r, i.key, i);
  }
}
function Ap(r, e, t) {
  return e && Pp(r.prototype, e), r;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var gt,
  $s,
  Ut,
  Ji,
  er,
  ln,
  Xc,
  br,
  Hn,
  Yc,
  zi,
  vi,
  Uc,
  Kc = function () {
    return (
      gt ||
      (typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt)
    );
  },
  Qc = 1,
  nn = [],
  le = [],
  Oi = [],
  Wn = Date.now,
  _a = function (e, t) {
    return t;
  },
  kp = function () {
    var e = Hn.core,
      t = e.bridge || {},
      i = e._scrollers,
      n = e._proxies;
    i.push.apply(i, le),
      n.push.apply(n, Oi),
      (le = i),
      (Oi = n),
      (_a = function (o, a) {
        return t[o](a);
      });
  },
  nr = function (e, t) {
    return ~Oi.indexOf(e) && Oi[Oi.indexOf(e) + 1][t];
  },
  jn = function (e) {
    return !!~Yc.indexOf(e);
  },
  bt = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
  },
  _t = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n);
  },
  Ts = "scrollLeft",
  xs = "scrollTop",
  ba = function () {
    return (zi && zi.isPressed) || le.cache++;
  },
  ao = function (e, t) {
    var i = function n(s) {
      if (s || s === 0) {
        Qc && (Ut.history.scrollRestoration = "manual");
        var o = zi && zi.isPressed;
        (s = n.v = Math.round(s) || (zi && zi.iOS ? 1 : 0)),
          e(s),
          (n.cacheID = le.cache),
          o && _a("ss", s);
      } else
        (t || le.cache !== n.cacheID || _a("ref")) &&
          ((n.cacheID = le.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (i.offset = 0), e && i;
  },
  Pt = {
    s: Ts,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ao(function (r) {
      return arguments.length
        ? Ut.scrollTo(r, Ge.sc())
        : Ut.pageXOffset || Ji[Ts] || er[Ts] || ln[Ts] || 0;
    }),
  },
  Ge = {
    s: xs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Pt,
    sc: ao(function (r) {
      return arguments.length
        ? Ut.scrollTo(Pt.sc(), r)
        : Ut.pageYOffset || Ji[xs] || er[xs] || ln[xs] || 0;
    }),
  },
  Lt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || gt.utils.toArray)(e)[0] ||
      (typeof e == "string" && gt.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  },
  Op = function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  },
  ar = function (e, t) {
    var i = t.s,
      n = t.sc;
    jn(e) && (e = Ji.scrollingElement || er);
    var s = le.indexOf(e),
      o = n === Ge.sc ? 1 : 2;
    !~s && (s = le.push(e) - 1), le[s + o] || bt(e, "scroll", ba);
    var a = le[s + o],
      l =
        a ||
        (le[s + o] =
          ao(nr(e, i), !0) ||
          (jn(e)
            ? n
            : ao(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (l.target = e),
      a || (l.smooth = gt.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Sa = function (e, t, i) {
    var n = e,
      s = e,
      o = Wn(),
      a = o,
      l = t || 50,
      u = Math.max(500, l * 3),
      c = function (p, m) {
        var y = Wn();
        m || y - o > l
          ? ((s = n), (n = p), (a = o), (o = y))
          : i
          ? (n += p)
          : (n = s + ((p - s) / (y - a)) * (o - a));
      },
      d = function () {
        (s = n = i ? 0 : n), (a = o = 0);
      },
      h = function (p) {
        var m = a,
          y = s,
          T = Wn();
        return (
          (p || p === 0) && p !== n && c(p),
          o === a || T - a > u
            ? 0
            : ((n + (i ? y : -y)) / ((i ? T : o) - m)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: h };
  },
  An = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Vl = function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  },
  Zc = function () {
    (Hn = gt.core.globals().ScrollTrigger), Hn && Hn.core && kp();
  },
  Jc = function (e) {
    return (
      (gt = e || Kc()),
      !$s &&
        gt &&
        typeof document < "u" &&
        document.body &&
        ((Ut = window),
        (Ji = document),
        (er = Ji.documentElement),
        (ln = Ji.body),
        (Yc = [Ut, Ji, er, ln]),
        (Uc = gt.core.context || function () {}),
        (br = "onpointerenter" in ln ? "pointer" : "mouse"),
        (Xc = Re.isTouch =
          Ut.matchMedia &&
          Ut.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ut ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (vi = Re.eventTypes =
          (
            "ontouchstart" in er
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in er
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Qc = 0);
        }, 500),
        Zc(),
        ($s = 1)),
      $s
    );
  };
Pt.op = Ge;
le.cache = 0;
var Re = (function () {
  function r(t) {
    this.init(t);
  }
  var e = r.prototype;
  return (
    (e.init = function (i) {
      $s || Jc(gt), Hn || Zc();
      var n = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        u = i.debounce,
        c = i.preventDefault,
        d = i.onStop,
        h = i.onStopDelay,
        f = i.ignore,
        p = i.wheelSpeed,
        m = i.event,
        y = i.onDragStart,
        T = i.onDragEnd,
        _ = i.onDrag,
        x = i.onPress,
        g = i.onRelease,
        C = i.onRight,
        E = i.onLeft,
        A = i.onUp,
        M = i.onDown,
        I = i.onChangeX,
        D = i.onChangeY,
        z = i.onChange,
        S = i.onToggleX,
        P = i.onToggleY,
        v = i.onHover,
        w = i.onHoverEnd,
        b = i.onMove,
        k = i.ignoreCheck,
        L = i.isNormalizer,
        R = i.onGestureStart,
        O = i.onGestureEnd,
        q = i.onWheel,
        H = i.onEnable,
        K = i.onDisable,
        Q = i.onClick,
        ie = i.scrollSpeed,
        ue = i.capture,
        de = i.allowClicks,
        be = i.lockAxis,
        xe = i.onLockAxis;
      (this.target = a = Lt(a) || er),
        (this.vars = i),
        f && (f = gt.utils.toArray(f)),
        (n = n || 1e-9),
        (s = s || 0),
        (p = p || 1),
        (ie = ie || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Ut.getComputedStyle(ln).lineHeight) || 22);
      var et,
        ke,
        qe,
        ne,
        ye,
        Ve,
        $e,
        N = this,
        Xe = 0,
        At = 0,
        Ye = i.passive || (!c && i.passive !== !1),
        fe = ar(a, Pt),
        wt = ar(a, Ge),
        st = fe(),
        qt = wt(),
        Ce =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          vi[0] === "pointerdown",
        Vt = jn(a),
        we = a.ownerDocument || Ji,
        ot = [0, 0, 0],
        kt = [0, 0, 0],
        pi = 0,
        fr = function () {
          return (pi = Wn());
        },
        Oe = function (G, pe) {
          return (
            ((N.event = G) && f && Op(G.target, f)) ||
            (pe && Ce && G.pointerType !== "touch") ||
            (k && k(G, pe))
          );
        },
        Vr = function () {
          N._vx.reset(), N._vy.reset(), ke.pause(), d && d(N);
        },
        F = function () {
          var G = (N.deltaX = Vl(ot)),
            pe = (N.deltaY = Vl(kt)),
            $ = Math.abs(G) >= n,
            ee = Math.abs(pe) >= n;
          z && ($ || ee) && z(N, G, pe, ot, kt),
            $ &&
              (C && N.deltaX > 0 && C(N),
              E && N.deltaX < 0 && E(N),
              I && I(N),
              S && N.deltaX < 0 != Xe < 0 && S(N),
              (Xe = N.deltaX),
              (ot[0] = ot[1] = ot[2] = 0)),
            ee &&
              (M && N.deltaY > 0 && M(N),
              A && N.deltaY < 0 && A(N),
              D && D(N),
              P && N.deltaY < 0 != At < 0 && P(N),
              (At = N.deltaY),
              (kt[0] = kt[1] = kt[2] = 0)),
            (ne || qe) &&
              (b && b(N),
              qe && (y && qe === 1 && y(N), _ && _(N), (qe = 0)),
              (ne = !1)),
            Ve && !(Ve = !1) && xe && xe(N),
            ye && (q(N), (ye = !1)),
            (et = 0);
        },
        W = function (G, pe, $) {
          (ot[$] += G),
            (kt[$] += pe),
            N._vx.update(G),
            N._vy.update(pe),
            u ? et || (et = requestAnimationFrame(F)) : F();
        },
        X = function (G, pe) {
          be &&
            !$e &&
            ((N.axis = $e = Math.abs(G) > Math.abs(pe) ? "x" : "y"), (Ve = !0)),
            $e !== "y" && ((ot[2] += G), N._vx.update(G, !0)),
            $e !== "x" && ((kt[2] += pe), N._vy.update(pe, !0)),
            u ? et || (et = requestAnimationFrame(F)) : F();
        },
        oe = function (G) {
          if (!Oe(G, 1)) {
            G = An(G, c);
            var pe = G.clientX,
              $ = G.clientY,
              ee = pe - N.x,
              U = $ - N.y,
              te = N.isDragging;
            (N.x = pe),
              (N.y = $),
              (te ||
                ((ee || U) &&
                  (Math.abs(N.startX - pe) >= s ||
                    Math.abs(N.startY - $) >= s))) &&
                ((qe = te ? 2 : 1), te || (N.isDragging = !0), X(ee, U));
          }
        },
        re = (N.onPress = function (J) {
          Oe(J, 1) ||
            (J && J.button) ||
            ((N.axis = $e = null),
            ke.pause(),
            (N.isPressed = !0),
            (J = An(J)),
            (Xe = At = 0),
            (N.startX = N.x = J.clientX),
            (N.startY = N.y = J.clientY),
            N._vx.reset(),
            N._vy.reset(),
            bt(L ? a : we, vi[1], oe, Ye, !0),
            (N.deltaX = N.deltaY = 0),
            x && x(N));
        }),
        Y = (N.onRelease = function (J) {
          if (!Oe(J, 1)) {
            _t(L ? a : we, vi[1], oe, !0);
            var G = !isNaN(N.y - N.startY),
              pe = N.isDragging,
              $ =
                pe &&
                (Math.abs(N.x - N.startX) > 3 || Math.abs(N.y - N.startY) > 3),
              ee = An(J);
            !$ &&
              G &&
              (N._vx.reset(),
              N._vy.reset(),
              c &&
                de &&
                gt.delayedCall(0.08, function () {
                  if (Wn() - pi > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (we.createEvent) {
                      var U = we.createEvent("MouseEvents");
                      U.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ut,
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
                        J.target.dispatchEvent(U);
                    }
                  }
                })),
              (N.isDragging = N.isGesturing = N.isPressed = !1),
              d && pe && !L && ke.restart(!0),
              qe && F(),
              T && pe && T(N),
              g && g(N, $);
          }
        }),
        Ne = function (G) {
          return (
            G.touches &&
            G.touches.length > 1 &&
            (N.isGesturing = !0) &&
            R(G, N.isDragging)
          );
        },
        Ue = function () {
          return (N.isGesturing = !1) || O(N);
        },
        Ot = function (G) {
          if (!Oe(G)) {
            var pe = fe(),
              $ = wt();
            W((pe - st) * ie, ($ - qt) * ie, 1),
              (st = pe),
              (qt = $),
              d && ke.restart(!0);
          }
        },
        He = function (G) {
          if (!Oe(G)) {
            (G = An(G, c)), q && (ye = !0);
            var pe =
              (G.deltaMode === 1 ? l : G.deltaMode === 2 ? Ut.innerHeight : 1) *
              p;
            W(G.deltaX * pe, G.deltaY * pe, 0), d && !L && ke.restart(!0);
          }
        },
        hi = function (G) {
          if (!Oe(G)) {
            var pe = G.clientX,
              $ = G.clientY,
              ee = pe - N.x,
              U = $ - N.y;
            (N.x = pe),
              (N.y = $),
              (ne = !0),
              d && ke.restart(!0),
              (ee || U) && X(ee, U);
          }
        },
        mi = function (G) {
          (N.event = G), v(N);
        },
        at = function (G) {
          (N.event = G), w(N);
        },
        pr = function (G) {
          return Oe(G) || (An(G, c) && Q(N));
        };
      (ke = N._dc = gt.delayedCall(h || 0.25, Vr).pause()),
        (N.deltaX = N.deltaY = 0),
        (N._vx = Sa(0, 50, !0)),
        (N._vy = Sa(0, 50, !0)),
        (N.scrollX = fe),
        (N.scrollY = wt),
        (N.isDragging = N.isGesturing = N.isPressed = !1),
        Uc(this),
        (N.enable = function (J) {
          return (
            N.isEnabled ||
              (bt(Vt ? we : a, "scroll", ba),
              o.indexOf("scroll") >= 0 && bt(Vt ? we : a, "scroll", Ot, Ye, ue),
              o.indexOf("wheel") >= 0 && bt(a, "wheel", He, Ye, ue),
              ((o.indexOf("touch") >= 0 && Xc) || o.indexOf("pointer") >= 0) &&
                (bt(a, vi[0], re, Ye, ue),
                bt(we, vi[2], Y),
                bt(we, vi[3], Y),
                de && bt(a, "click", fr, !0, !0),
                Q && bt(a, "click", pr),
                R && bt(we, "gesturestart", Ne),
                O && bt(we, "gestureend", Ue),
                v && bt(a, br + "enter", mi),
                w && bt(a, br + "leave", at),
                b && bt(a, br + "move", hi)),
              (N.isEnabled = !0),
              (N.isDragging = N.isGesturing = N.isPressed = ne = qe = !1),
              N._vx.reset(),
              N._vy.reset(),
              (st = fe()),
              (qt = wt()),
              J && J.type && re(J),
              H && H(N)),
            N
          );
        }),
        (N.disable = function () {
          N.isEnabled &&
            (nn.filter(function (J) {
              return J !== N && jn(J.target);
            }).length || _t(Vt ? we : a, "scroll", ba),
            N.isPressed &&
              (N._vx.reset(), N._vy.reset(), _t(L ? a : we, vi[1], oe, !0)),
            _t(Vt ? we : a, "scroll", Ot, ue),
            _t(a, "wheel", He, ue),
            _t(a, vi[0], re, ue),
            _t(we, vi[2], Y),
            _t(we, vi[3], Y),
            _t(a, "click", fr, !0),
            _t(a, "click", pr),
            _t(we, "gesturestart", Ne),
            _t(we, "gestureend", Ue),
            _t(a, br + "enter", mi),
            _t(a, br + "leave", at),
            _t(a, br + "move", hi),
            (N.isEnabled = N.isPressed = N.isDragging = !1),
            K && K(N));
        }),
        (N.kill = N.revert =
          function () {
            N.disable();
            var J = nn.indexOf(N);
            J >= 0 && nn.splice(J, 1), zi === N && (zi = 0);
          }),
        nn.push(N),
        L && jn(a) && (zi = N),
        N.enable(m);
    }),
    Ap(r, [
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
Re.version = "3.13.0";
Re.create = function (r) {
  return new Re(r);
};
Re.register = Jc;
Re.getAll = function () {
  return nn.slice();
};
Re.getById = function (r) {
  return nn.filter(function (e) {
    return e.vars.id === r;
  })[0];
};
Kc() && gt.registerPlugin(Re);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var j,
  Zr,
  ae,
  _e,
  Xt,
  he,
  rl,
  lo,
  ls,
  Gn,
  Rn,
  Cs,
  dt,
  Co,
  Ta,
  xt,
  $l,
  Hl,
  Jr,
  ed,
  Fo,
  td,
  Tt,
  xa,
  id,
  rd,
  Yi,
  Ca,
  nl,
  un,
  sl,
  uo,
  Ea,
  Bo,
  Es = 1,
  ft = Date.now,
  qo = ft(),
  li = 0,
  Nn = 0,
  Wl = function (e, t, i) {
    var n = Wt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
  },
  jl = function (e, t) {
    return t && (!Wt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Mp = function r() {
    return Nn && requestAnimationFrame(r);
  },
  Gl = function () {
    return (Co = 1);
  },
  Xl = function () {
    return (Co = 0);
  },
  xi = function (e) {
    return e;
  },
  zn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  nd = function () {
    return typeof window < "u";
  },
  sd = function () {
    return j || (nd() && (j = window.gsap) && j.registerPlugin && j);
  },
  Nr = function (e) {
    return !!~rl.indexOf(e);
  },
  od = function (e) {
    return (
      (e === "Height" ? sl : ae["inner" + e]) ||
      Xt["client" + e] ||
      he["client" + e]
    );
  },
  ad = function (e) {
    return (
      nr(e, "getBoundingClientRect") ||
      (Nr(e)
        ? function () {
            return (Xs.width = ae.innerWidth), (Xs.height = sl), Xs;
          }
        : function () {
            return Ni(e);
          })
    );
  },
  Lp = function (e, t, i) {
    var n = i.d,
      s = i.d2,
      o = i.a;
    return (o = nr(e, "getBoundingClientRect"))
      ? function () {
          return o()[n];
        }
      : function () {
          return (t ? od(s) : e["client" + s]) || 0;
        };
  },
  Dp = function (e, t) {
    return !t || ~Oi.indexOf(e)
      ? ad(e)
      : function () {
          return Xs;
        };
  },
  Ai = function (e, t) {
    var i = t.s,
      n = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + n) && (o = nr(e, i))
        ? o() - ad(e)()[s]
        : Nr(e)
        ? (Xt[i] || he[i]) - od(n)
        : e[i] - e["offset" + n]
    );
  },
  Ps = function (e, t) {
    for (var i = 0; i < Jr.length; i += 3)
      (!t || ~t.indexOf(Jr[i + 1])) && e(Jr[i], Jr[i + 1], Jr[i + 2]);
  },
  Wt = function (e) {
    return typeof e == "string";
  },
  mt = function (e) {
    return typeof e == "function";
  },
  Fn = function (e) {
    return typeof e == "number";
  },
  Sr = function (e) {
    return typeof e == "object";
  },
  kn = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  },
  Vo = function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  Hr = Math.abs,
  ld = "left",
  ud = "top",
  ol = "right",
  al = "bottom",
  Mr = "width",
  Lr = "height",
  Xn = "Right",
  Yn = "Left",
  Un = "Top",
  Kn = "Bottom",
  ze = "padding",
  ri = "margin",
  yn = "Width",
  ll = "Height",
  je = "px",
  ni = function (e) {
    return ae.getComputedStyle(e);
  },
  Ip = function (e) {
    var t = ni(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Yl = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  Ni = function (e, t) {
    var i =
        t &&
        ni(e)[Ta] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        j
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
  co = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  cd = function (e) {
    var t = [],
      i = e.labels,
      n = e.duration(),
      s;
    for (s in i) t.push(i[s] / n);
    return t;
  },
  Rp = function (e) {
    return function (t) {
      return j.utils.snap(cd(e), t);
    };
  },
  ul = function (e) {
    var t = j.utils.snap(e),
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
  Np = function (e) {
    return function (t, i) {
      return ul(cd(e))(t, i.direction);
    };
  },
  As = function (e, t, i, n) {
    return i.split(",").forEach(function (s) {
      return e(t, s, n);
    });
  },
  Ze = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: !n, capture: !!s });
  },
  Qe = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n);
  },
  ks = function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  },
  Ul = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Os = { toggleActions: "play", anticipatePin: 0 },
  fo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Hs = function (e, t) {
    if (Wt(e)) {
      var i = e.indexOf("="),
        n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          n +
          (e in fo
            ? fo[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Ms = function (e, t, i, n, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      d = s.fontSize,
      h = s.indent,
      f = s.fontWeight,
      p = _e.createElement("div"),
      m = Nr(i) || nr(i, "pinType") === "fixed",
      y = e.indexOf("scroller") !== -1,
      T = m ? he : i,
      _ = e.indexOf("start") !== -1,
      x = _ ? u : c,
      g =
        "border-color:" +
        x +
        ";font-size:" +
        d +
        ";color:" +
        x +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (g += "position:" + ((y || l) && m ? "fixed;" : "absolute;")),
      (y || l || !m) &&
        (g += (n === Ge ? ol : al) + ":" + (o + parseFloat(h)) + "px;"),
      a &&
        (g +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = _),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = g),
      (p.innerText = t || t === 0 ? e + "-" + t : e),
      T.children[0] ? T.insertBefore(p, T.children[0]) : T.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      Ws(p, 0, n, _),
      p
    );
  },
  Ws = function (e, t, i, n) {
    var s = { display: "block" },
      o = i[n ? "os2" : "p2"],
      a = i[n ? "p2" : "os2"];
    (e._isFlipped = n),
      (s[i.a + "Percent"] = n ? -100 : 0),
      (s[i.a] = n ? "1px" : 0),
      (s["border" + o + yn] = 1),
      (s["border" + a + yn] = 0),
      (s[i.p] = t + "px"),
      j.set(e, s);
  },
  se = [],
  Pa = {},
  us,
  Kl = function () {
    return ft() - li > 34 && (us || (us = requestAnimationFrame(Fi)));
  },
  Wr = function () {
    (!Tt || !Tt.isPressed || Tt.startX > he.clientWidth) &&
      (le.cache++,
      Tt ? us || (us = requestAnimationFrame(Fi)) : Fi(),
      li || Fr("scrollStart"),
      (li = ft()));
  },
  $o = function () {
    (rd = ae.innerWidth), (id = ae.innerHeight);
  },
  Bn = function (e) {
    le.cache++,
      (e === !0 ||
        (!dt &&
          !td &&
          !_e.fullscreenElement &&
          !_e.webkitFullscreenElement &&
          (!xa ||
            rd !== ae.innerWidth ||
            Math.abs(ae.innerHeight - id) > ae.innerHeight * 0.25))) &&
        lo.restart(!0);
  },
  zr = {},
  zp = [],
  dd = function r() {
    return Qe(Z, "scrollEnd", r) || Er(!0);
  },
  Fr = function (e) {
    return (
      (zr[e] &&
        zr[e].map(function (t) {
          return t();
        })) ||
      zp
    );
  },
  Ht = [],
  fd = function (e) {
    for (var t = 0; t < Ht.length; t += 5)
      (!e || (Ht[t + 4] && Ht[t + 4].query === e)) &&
        ((Ht[t].style.cssText = Ht[t + 1]),
        Ht[t].getBBox && Ht[t].setAttribute("transform", Ht[t + 2] || ""),
        (Ht[t + 3].uncache = 1));
  },
  cl = function (e, t) {
    var i;
    for (xt = 0; xt < se.length; xt++)
      (i = se[xt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (uo = !0), t && fd(t), t || Fr("revert");
  },
  pd = function (e, t) {
    le.cache++,
      (t || !Ct) &&
        le.forEach(function (i) {
          return mt(i) && i.cacheID++ && (i.rec = 0);
        }),
      Wt(e) && (ae.history.scrollRestoration = nl = e);
  },
  Ct,
  Dr = 0,
  Ql,
  Fp = function () {
    if (Ql !== Dr) {
      var e = (Ql = Dr);
      requestAnimationFrame(function () {
        return e === Dr && Er(!0);
      });
    }
  },
  hd = function () {
    he.appendChild(un),
      (sl = (!Tt && un.offsetHeight) || ae.innerHeight),
      he.removeChild(un);
  },
  Zl = function (e) {
    return ls(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  Er = function (e, t) {
    if (
      ((Xt = _e.documentElement),
      (he = _e.body),
      (rl = [ae, _e, Xt, he]),
      li && !e && !uo)
    ) {
      Ze(Z, "scrollEnd", dd);
      return;
    }
    hd(),
      (Ct = Z.isRefreshing = !0),
      le.forEach(function (n) {
        return mt(n) && ++n.cacheID && (n.rec = n());
      });
    var i = Fr("refreshInit");
    ed && Z.sort(),
      t || cl(),
      le.forEach(function (n) {
        mt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
      }),
      se.slice(0).forEach(function (n) {
        return n.refresh();
      }),
      (uo = !1),
      se.forEach(function (n) {
        if (n._subPinOffset && n.pin) {
          var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = n.pin[s];
          n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
        }
      }),
      (Ea = 1),
      Zl(!0),
      se.forEach(function (n) {
        var s = Ai(n.scroller, n._dir),
          o = n.vars.end === "max" || (n._endClamp && n.end > s),
          a = n._startClamp && n.start >= s;
        (o || a) &&
          n.setPositions(
            a ? s - 1 : n.start,
            o ? Math.max(a ? s : n.start + 1, s) : n.end,
            !0
          );
      }),
      Zl(!1),
      (Ea = 0),
      i.forEach(function (n) {
        return n && n.render && n.render(-1);
      }),
      le.forEach(function (n) {
        mt(n) &&
          (n.smooth &&
            requestAnimationFrame(function () {
              return (n.target.style.scrollBehavior = "smooth");
            }),
          n.rec && n(n.rec));
      }),
      pd(nl, 1),
      lo.pause(),
      Dr++,
      (Ct = 2),
      Fi(2),
      se.forEach(function (n) {
        return mt(n.vars.onRefresh) && n.vars.onRefresh(n);
      }),
      (Ct = Z.isRefreshing = !1),
      Fr("refresh");
  },
  Aa = 0,
  js = 1,
  Qn,
  Fi = function (e) {
    if (e === 2 || (!Ct && !uo)) {
      (Z.isUpdating = !0), Qn && Qn.update(0);
      var t = se.length,
        i = ft(),
        n = i - qo >= 50,
        s = t && se[0].scroll();
      if (
        ((js = Aa > s ? -1 : 1),
        Ct || (Aa = s),
        n &&
          (li && !Co && i - li > 200 && ((li = 0), Fr("scrollEnd")),
          (Rn = qo),
          (qo = i)),
        js < 0)
      ) {
        for (xt = t; xt-- > 0; ) se[xt] && se[xt].update(0, n);
        js = 1;
      } else for (xt = 0; xt < t; xt++) se[xt] && se[xt].update(0, n);
      Z.isUpdating = !1;
    }
    us = 0;
  },
  ka = [
    ld,
    ud,
    al,
    ol,
    ri + Kn,
    ri + Xn,
    ri + Un,
    ri + Yn,
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
  Gs = ka.concat([
    Mr,
    Lr,
    "boxSizing",
    "max" + yn,
    "max" + ll,
    "position",
    ri,
    ze,
    ze + Un,
    ze + Xn,
    ze + Kn,
    ze + Yn,
  ]),
  Bp = function (e, t, i) {
    cn(i);
    var n = e._gsap;
    if (n.spacerIsNative) cn(n.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Ho = function (e, t, i, n) {
    if (!e._gsap.swappedIn) {
      for (var s = ka.length, o = t.style, a = e.style, l; s--; )
        (l = ka[s]), (o[l] = i[l]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (a[al] = a[ol] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Mr] = co(e, Pt) + je),
        (o[Lr] = co(e, Ge) + je),
        (o[ze] = a[ri] = a[ud] = a[ld] = "0"),
        cn(n),
        (a[Mr] = a["max" + yn] = i[Mr]),
        (a[Lr] = a["max" + ll] = i[Lr]),
        (a[ze] = i[ze]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  qp = /([A-Z])/g,
  cn = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        n = 0,
        s,
        o;
      for ((e.t._gsap || j.core.getCache(e.t)).uncache = 1; n < i; n += 2)
        (o = e[n + 1]),
          (s = e[n]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(qp, "-$1").toLowerCase());
    }
  },
  Ls = function (e) {
    for (var t = Gs.length, i = e.style, n = [], s = 0; s < t; s++)
      n.push(Gs[s], i[Gs[s]]);
    return (n.t = e), n;
  },
  Vp = function (e, t, i) {
    for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
    return (n.t = e.t), n;
  },
  Xs = { left: 0, top: 0 },
  Jl = function (e, t, i, n, s, o, a, l, u, c, d, h, f, p) {
    mt(e) && (e = e(l)),
      Wt(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? Hs("0" + e.substr(3), i) : 0));
    var m = f ? f.time() : 0,
      y,
      T,
      _;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Fn(e)))
      f &&
        (e = j.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          h,
          e
        )),
        a && Ws(a, i, n, !0);
    else {
      mt(t) && (t = t(l));
      var x = (e || "0").split(" "),
        g,
        C,
        E,
        A;
      (_ = Lt(t, l) || he),
        (g = Ni(_) || {}),
        (!g || (!g.left && !g.top)) &&
          ni(_).display === "none" &&
          ((A = _.style.display),
          (_.style.display = "block"),
          (g = Ni(_)),
          A ? (_.style.display = A) : _.style.removeProperty("display")),
        (C = Hs(x[0], g[n.d])),
        (E = Hs(x[1] || "0", i)),
        (e = g[n.p] - u[n.p] - c + C + s - E),
        a && Ws(a, E, n, i - E < 20 || (a._isStart && E > 20)),
        (i -= i - E);
    }
    if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), o)) {
      var M = e + i,
        I = o._isStart;
      (y = "scroll" + n.d2),
        Ws(
          o,
          M,
          n,
          (I && M > 20) ||
            (!I && (d ? Math.max(he[y], Xt[y]) : o.parentNode[y]) <= M + 1)
        ),
        d &&
          ((u = Ni(a)),
          d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + je));
    }
    return (
      f &&
        _ &&
        ((y = Ni(_)),
        f.seek(h),
        (T = Ni(_)),
        (f._caScrollDist = y[n.p] - T[n.p]),
        (e = (e / f._caScrollDist) * h)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  $p = /(webkit|moz|length|cssText|inset)/i,
  eu = function (e, t, i, n) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === he) {
        (e._stOrig = s.cssText), (a = ni(e));
        for (o in a)
          !+o &&
            !$p.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = i), (s.left = n);
      } else s.cssText = e._stOrig;
      (j.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  md = function (e, t, i) {
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
  Ds = function (e, t, i) {
    var n = {};
    (n[t.p] = "+=" + i), j.set(e, n);
  },
  tu = function (e, t) {
    var i = ar(e, t),
      n = "_scroll" + t.p2,
      s = function o(a, l, u, c, d) {
        var h = o.tween,
          f = l.onComplete,
          p = {};
        u = u || i();
        var m = md(i, u, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          h && h.kill(),
          (l[n] = a),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[n] = function () {
            return m(u + c * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            le.cache++, o.tween && Fi();
          }),
          (l.onComplete = function () {
            (o.tween = 0), f && f.call(h);
          }),
          (h = o.tween = j.to(e, l)),
          h
        );
      };
    return (
      (e[n] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Ze(e, "wheel", i.wheelHandler),
      Z.isTouch && Ze(e, "touchmove", i.wheelHandler),
      s
    );
  },
  Z = (function () {
    function r(t, i) {
      Zr || r.register(j), Ca(this), this.init(t, i);
    }
    var e = r.prototype;
    return (
      (e.init = function (i, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Nn)
        ) {
          this.update = this.refresh = this.kill = xi;
          return;
        }
        i = Yl(Wt(i) || Fn(i) || i.nodeType ? { trigger: i } : i, Os);
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          d = s.scrub,
          h = s.trigger,
          f = s.pin,
          p = s.pinSpacing,
          m = s.invalidateOnRefresh,
          y = s.anticipatePin,
          T = s.onScrubComplete,
          _ = s.onSnapComplete,
          x = s.once,
          g = s.snap,
          C = s.pinReparent,
          E = s.pinSpacer,
          A = s.containerAnimation,
          M = s.fastScrollEnd,
          I = s.preventOverlaps,
          D =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Pt
              : Ge,
          z = !d && d !== 0,
          S = Lt(i.scroller || ae),
          P = j.core.getCache(S),
          v = Nr(S),
          w =
            ("pinType" in i
              ? i.pinType
              : nr(S, "pinType") || (v && "fixed")) === "fixed",
          b = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          k = z && i.toggleActions.split(" "),
          L = "markers" in i ? i.markers : Os.markers,
          R = v ? 0 : parseFloat(ni(S)["border" + D.p2 + yn]) || 0,
          O = this,
          q =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(O);
            },
          H = Lp(S, v, D),
          K = Dp(S, v),
          Q = 0,
          ie = 0,
          ue = 0,
          de = ar(S, D),
          be,
          xe,
          et,
          ke,
          qe,
          ne,
          ye,
          Ve,
          $e,
          N,
          Xe,
          At,
          Ye,
          fe,
          wt,
          st,
          qt,
          Ce,
          Vt,
          we,
          ot,
          kt,
          pi,
          fr,
          Oe,
          Vr,
          F,
          W,
          X,
          oe,
          re,
          Y,
          Ne,
          Ue,
          Ot,
          He,
          hi,
          mi,
          at;
        if (
          ((O._startClamp = O._endClamp = !1),
          (O._dir = D),
          (y *= 45),
          (O.scroller = S),
          (O.scroll = A ? A.time.bind(A) : de),
          (ke = de()),
          (O.vars = i),
          (n = n || i.animation),
          "refreshPriority" in i &&
            ((ed = 1), i.refreshPriority === -9999 && (Qn = O)),
          (P.tweenScroll = P.tweenScroll || {
            top: tu(S, Ge),
            left: tu(S, Pt),
          }),
          (O.tweenTo = be = P.tweenScroll[D.p]),
          (O.scrubDuration = function ($) {
            (Ne = Fn($) && $),
              Ne
                ? Y
                  ? Y.duration($)
                  : (Y = j.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Ne,
                      paused: !0,
                      onComplete: function () {
                        return T && T(O);
                      },
                    }))
                : (Y && Y.progress(1).kill(), (Y = 0));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !O.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (O.animation = n.pause()),
            (n.scrollTrigger = O),
            O.scrubDuration(d),
            (oe = 0),
            l || (l = n.vars.id)),
          g &&
            ((!Sr(g) || g.push) && (g = { snapTo: g }),
            "scrollBehavior" in he.style &&
              j.set(v ? [he, Xt] : S, { scrollBehavior: "auto" }),
            le.forEach(function ($) {
              return (
                mt($) &&
                $.target === (v ? _e.scrollingElement || Xt : S) &&
                ($.smooth = !1)
              );
            }),
            (et = mt(g.snapTo)
              ? g.snapTo
              : g.snapTo === "labels"
              ? Rp(n)
              : g.snapTo === "labelsDirectional"
              ? Np(n)
              : g.directional !== !1
              ? function ($, ee) {
                  return ul(g.snapTo)($, ft() - ie < 500 ? 0 : ee.direction);
                }
              : j.utils.snap(g.snapTo)),
            (Ue = g.duration || { min: 0.1, max: 2 }),
            (Ue = Sr(Ue) ? Gn(Ue.min, Ue.max) : Gn(Ue, Ue)),
            (Ot = j
              .delayedCall(g.delay || Ne / 2 || 0.1, function () {
                var $ = de(),
                  ee = ft() - ie < 500,
                  U = be.tween;
                if (
                  (ee || Math.abs(O.getVelocity()) < 10) &&
                  !U &&
                  !Co &&
                  Q !== $
                ) {
                  var te = ($ - ne) / fe,
                    Ke = n && !z ? n.totalProgress() : te,
                    ce = ee ? 0 : ((Ke - re) / (ft() - Rn)) * 1e3 || 0,
                    De = j.utils.clamp(-te, 1 - te, (Hr(ce / 2) * ce) / 0.185),
                    lt = te + (g.inertia === !1 ? 0 : De),
                    Me,
                    Se,
                    me = g,
                    gi = me.onStart,
                    Ee = me.onInterrupt,
                    $t = me.onComplete;
                  if (
                    ((Me = et(lt, O)),
                    Fn(Me) || (Me = lt),
                    (Se = Math.max(0, Math.round(ne + Me * fe))),
                    $ <= ye && $ >= ne && Se !== $)
                  ) {
                    if (U && !U._initted && U.data <= Hr(Se - $)) return;
                    g.inertia === !1 && (De = Me - te),
                      be(
                        Se,
                        {
                          duration: Ue(
                            Hr(
                              (Math.max(Hr(lt - Ke), Hr(Me - Ke)) * 0.185) /
                                ce /
                                0.05 || 0
                            )
                          ),
                          ease: g.ease || "power3",
                          data: Hr(Se - $),
                          onInterrupt: function () {
                            return Ot.restart(!0) && Ee && Ee(O);
                          },
                          onComplete: function () {
                            O.update(),
                              (Q = de()),
                              n &&
                                !z &&
                                (Y
                                  ? Y.resetTo(
                                      "totalProgress",
                                      Me,
                                      n._tTime / n._tDur
                                    )
                                  : n.progress(Me)),
                              (oe = re =
                                n && !z ? n.totalProgress() : O.progress),
                              _ && _(O),
                              $t && $t(O);
                          },
                        },
                        $,
                        De * fe,
                        Se - $ - De * fe
                      ),
                      gi && gi(O, be.tween);
                  }
                } else O.isActive && Q !== $ && Ot.restart(!0);
              })
              .pause())),
          l && (Pa[l] = O),
          (h = O.trigger = Lt(h || (f !== !0 && f))),
          (at = h && h._gsap && h._gsap.stRevert),
          at && (at = at(O)),
          (f = f === !0 ? h : Lt(f)),
          Wt(a) && (a = { targets: h, className: a }),
          f &&
            (p === !1 ||
              p === ri ||
              (p =
                !p &&
                f.parentNode &&
                f.parentNode.style &&
                ni(f.parentNode).display === "flex"
                  ? !1
                  : ze),
            (O.pin = f),
            (xe = j.core.getCache(f)),
            xe.spacer
              ? (wt = xe.pinState)
              : (E &&
                  ((E = Lt(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (xe.spacerIsNative = !!E),
                  E && (xe.spacerState = Ls(E))),
                (xe.spacer = Ce = E || _e.createElement("div")),
                Ce.classList.add("pin-spacer"),
                l && Ce.classList.add("pin-spacer-" + l),
                (xe.pinState = wt = Ls(f))),
            i.force3D !== !1 && j.set(f, { force3D: !0 }),
            (O.spacer = Ce = xe.spacer),
            (X = ni(f)),
            (fr = X[p + D.os2]),
            (we = j.getProperty(f)),
            (ot = j.quickSetter(f, D.a, je)),
            Ho(f, Ce, X),
            (qt = Ls(f))),
          L)
        ) {
          (At = Sr(L) ? Yl(L, Ul) : Ul),
            (N = Ms("scroller-start", l, S, D, At, 0)),
            (Xe = Ms("scroller-end", l, S, D, At, 0, N)),
            (Vt = N["offset" + D.op.d2]);
          var pr = Lt(nr(S, "content") || S);
          (Ve = this.markerStart = Ms("start", l, pr, D, At, Vt, 0, A)),
            ($e = this.markerEnd = Ms("end", l, pr, D, At, Vt, 0, A)),
            A && (mi = j.quickSetter([Ve, $e], D.a, je)),
            !w &&
              !(Oi.length && nr(S, "fixedMarkers") === !0) &&
              (Ip(v ? he : S),
              j.set([N, Xe], { force3D: !0 }),
              (Vr = j.quickSetter(N, D.a, je)),
              (W = j.quickSetter(Xe, D.a, je)));
        }
        if (A) {
          var J = A.vars.onUpdate,
            G = A.vars.onUpdateParams;
          A.eventCallback("onUpdate", function () {
            O.update(0, 0, 1), J && J.apply(A, G || []);
          });
        }
        if (
          ((O.previous = function () {
            return se[se.indexOf(O) - 1];
          }),
          (O.next = function () {
            return se[se.indexOf(O) + 1];
          }),
          (O.revert = function ($, ee) {
            if (!ee) return O.kill(!0);
            var U = $ !== !1 || !O.enabled,
              te = dt;
            U !== O.isReverted &&
              (U &&
                ((He = Math.max(de(), O.scroll.rec || 0)),
                (ue = O.progress),
                (hi = n && n.progress())),
              Ve &&
                [Ve, $e, N, Xe].forEach(function (Ke) {
                  return (Ke.style.display = U ? "none" : "block");
                }),
              U && ((dt = O), O.update(U)),
              f &&
                (!C || !O.isActive) &&
                (U ? Bp(f, Ce, wt) : Ho(f, Ce, ni(f), Oe)),
              U || O.update(U),
              (dt = te),
              (O.isReverted = U));
          }),
          (O.refresh = function ($, ee, U, te) {
            if (!((dt || !O.enabled) && !ee)) {
              if (f && $ && li) {
                Ze(r, "scrollEnd", dd);
                return;
              }
              !Ct && q && q(O),
                (dt = O),
                be.tween && !U && (be.tween.kill(), (be.tween = 0)),
                Y && Y.pause(),
                m &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren &&
                    n.getChildren(!0, !0, !1).forEach(function (ji) {
                      return ji.vars.immediateRender && ji.render(0, !0, !0);
                    })),
                O.isReverted || O.revert(!0, !0),
                (O._subPinOffset = !1);
              var Ke = H(),
                ce = K(),
                De = A ? A.duration() : Ai(S, D),
                lt = fe <= 0.01 || !fe,
                Me = 0,
                Se = te || 0,
                me = Sr(U) ? U.end : i.end,
                gi = i.endTrigger || h,
                Ee = Sr(U)
                  ? U.start
                  : i.start || (i.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                $t = (O.pinnedContainer =
                  i.pinnedContainer && Lt(i.pinnedContainer, O)),
                wi = (h && Math.max(0, se.indexOf(O))) || 0,
                tt = wi,
                it,
                ut,
                hr,
                _s,
                ct,
                We,
                _i,
                ko,
                Tl,
                Cn,
                bi,
                En,
                bs;
              for (
                L &&
                Sr(U) &&
                ((En = j.getProperty(N, D.p)), (bs = j.getProperty(Xe, D.p)));
                tt-- > 0;

              )
                (We = se[tt]),
                  We.end || We.refresh(0, 1) || (dt = O),
                  (_i = We.pin),
                  _i &&
                    (_i === h || _i === f || _i === $t) &&
                    !We.isReverted &&
                    (Cn || (Cn = []), Cn.unshift(We), We.revert(!0, !0)),
                  We !== se[tt] && (wi--, tt--);
              for (
                mt(Ee) && (Ee = Ee(O)),
                  Ee = Wl(Ee, "start", O),
                  ne =
                    Jl(
                      Ee,
                      h,
                      Ke,
                      D,
                      de(),
                      Ve,
                      N,
                      O,
                      ce,
                      R,
                      w,
                      De,
                      A,
                      O._startClamp && "_startClamp"
                    ) || (f ? -0.001 : 0),
                  mt(me) && (me = me(O)),
                  Wt(me) &&
                    !me.indexOf("+=") &&
                    (~me.indexOf(" ")
                      ? (me = (Wt(Ee) ? Ee.split(" ")[0] : "") + me)
                      : ((Me = Hs(me.substr(2), Ke)),
                        (me = Wt(Ee)
                          ? Ee
                          : (A
                              ? j.utils.mapRange(
                                  0,
                                  A.duration(),
                                  A.scrollTrigger.start,
                                  A.scrollTrigger.end,
                                  ne
                                )
                              : ne) + Me),
                        (gi = h))),
                  me = Wl(me, "end", O),
                  ye =
                    Math.max(
                      ne,
                      Jl(
                        me || (gi ? "100% 0" : De),
                        gi,
                        Ke,
                        D,
                        de() + Me,
                        $e,
                        Xe,
                        O,
                        ce,
                        R,
                        w,
                        De,
                        A,
                        O._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Me = 0,
                  tt = wi;
                tt--;

              )
                (We = se[tt]),
                  (_i = We.pin),
                  _i &&
                    We.start - We._pinPush <= ne &&
                    !A &&
                    We.end > 0 &&
                    ((it =
                      We.end -
                      (O._startClamp ? Math.max(0, We.start) : We.start)),
                    ((_i === h && We.start - We._pinPush < ne) || _i === $t) &&
                      isNaN(Ee) &&
                      (Me += it * (1 - We.progress)),
                    _i === f && (Se += it));
              if (
                ((ne += Me),
                (ye += Me),
                O._startClamp && (O._startClamp += Me),
                O._endClamp &&
                  !Ct &&
                  ((O._endClamp = ye || -0.001), (ye = Math.min(ye, Ai(S, D)))),
                (fe = ye - ne || ((ne -= 0.01) && 0.001)),
                lt && (ue = j.utils.clamp(0, 1, j.utils.normalize(ne, ye, He))),
                (O._pinPush = Se),
                Ve &&
                  Me &&
                  ((it = {}),
                  (it[D.a] = "+=" + Me),
                  $t && (it[D.p] = "-=" + de()),
                  j.set([Ve, $e], it)),
                f && !(Ea && O.end >= Ai(S, D)))
              )
                (it = ni(f)),
                  (_s = D === Ge),
                  (hr = de()),
                  (kt = parseFloat(we(D.a)) + Se),
                  !De &&
                    ye > 1 &&
                    ((bi = (v ? _e.scrollingElement || Xt : S).style),
                    (bi = {
                      style: bi,
                      value: bi["overflow" + D.a.toUpperCase()],
                    }),
                    v &&
                      ni(he)["overflow" + D.a.toUpperCase()] !== "scroll" &&
                      (bi.style["overflow" + D.a.toUpperCase()] = "scroll")),
                  Ho(f, Ce, it),
                  (qt = Ls(f)),
                  (ut = Ni(f, !0)),
                  (ko = w && ar(S, _s ? Pt : Ge)()),
                  p
                    ? ((Oe = [p + D.os2, fe + Se + je]),
                      (Oe.t = Ce),
                      (tt = p === ze ? co(f, D) + fe + Se : 0),
                      tt &&
                        (Oe.push(D.d, tt + je),
                        Ce.style.flexBasis !== "auto" &&
                          (Ce.style.flexBasis = tt + je)),
                      cn(Oe),
                      $t &&
                        se.forEach(function (ji) {
                          ji.pin === $t &&
                            ji.vars.pinSpacing !== !1 &&
                            (ji._subPinOffset = !0);
                        }),
                      w && de(He))
                    : ((tt = co(f, D)),
                      tt &&
                        Ce.style.flexBasis !== "auto" &&
                        (Ce.style.flexBasis = tt + je)),
                  w &&
                    ((ct = {
                      top: ut.top + (_s ? hr - ne : ko) + je,
                      left: ut.left + (_s ? ko : hr - ne) + je,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ct[Mr] = ct["max" + yn] = Math.ceil(ut.width) + je),
                    (ct[Lr] = ct["max" + ll] = Math.ceil(ut.height) + je),
                    (ct[ri] =
                      ct[ri + Un] =
                      ct[ri + Xn] =
                      ct[ri + Kn] =
                      ct[ri + Yn] =
                        "0"),
                    (ct[ze] = it[ze]),
                    (ct[ze + Un] = it[ze + Un]),
                    (ct[ze + Xn] = it[ze + Xn]),
                    (ct[ze + Kn] = it[ze + Kn]),
                    (ct[ze + Yn] = it[ze + Yn]),
                    (st = Vp(wt, ct, C)),
                    Ct && de(0)),
                  n
                    ? ((Tl = n._initted),
                      Fo(1),
                      n.render(n.duration(), !0, !0),
                      (pi = we(D.a) - kt + fe + Se),
                      (F = Math.abs(fe - pi) > 1),
                      w && F && st.splice(st.length - 2, 2),
                      n.render(0, !0, !0),
                      Tl || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Fo(0))
                    : (pi = fe),
                  bi &&
                    (bi.value
                      ? (bi.style["overflow" + D.a.toUpperCase()] = bi.value)
                      : bi.style.removeProperty("overflow-" + D.a));
              else if (h && de() && !A)
                for (ut = h.parentNode; ut && ut !== he; )
                  ut._pinOffset &&
                    ((ne -= ut._pinOffset), (ye -= ut._pinOffset)),
                    (ut = ut.parentNode);
              Cn &&
                Cn.forEach(function (ji) {
                  return ji.revert(!1, !0);
                }),
                (O.start = ne),
                (O.end = ye),
                (ke = qe = Ct ? He : de()),
                !A && !Ct && (ke < He && de(He), (O.scroll.rec = 0)),
                O.revert(!1, !0),
                (ie = ft()),
                Ot && ((Q = -1), Ot.restart(!0)),
                (dt = 0),
                n &&
                  z &&
                  (n._initted || hi) &&
                  n.progress() !== hi &&
                  n.progress(hi || 0, !0).render(n.time(), !0, !0),
                (lt || ue !== O.progress || A || m || (n && !n._initted)) &&
                  (n &&
                    !z &&
                    (n._initted || ue || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      A && ne < -0.001 && !ue
                        ? j.utils.normalize(ne, ye, 0)
                        : ue,
                      !0
                    ),
                  (O.progress = lt || (ke - ne) / fe === ue ? 0 : ue)),
                f && p && (Ce._pinOffset = Math.round(O.progress * pi)),
                Y && Y.invalidate(),
                isNaN(En) ||
                  ((En -= j.getProperty(N, D.p)),
                  (bs -= j.getProperty(Xe, D.p)),
                  Ds(N, D, En),
                  Ds(Ve, D, En - (te || 0)),
                  Ds(Xe, D, bs),
                  Ds($e, D, bs - (te || 0))),
                lt && !Ct && O.update(),
                c && !Ct && !Ye && ((Ye = !0), c(O), (Ye = !1));
            }
          }),
          (O.getVelocity = function () {
            return ((de() - qe) / (ft() - Rn)) * 1e3 || 0;
          }),
          (O.endAnimation = function () {
            kn(O.callbackAnimation),
              n &&
                (Y
                  ? Y.progress(1)
                  : n.paused()
                  ? z || kn(n, O.direction < 0, 1)
                  : kn(n, n.reversed()));
          }),
          (O.labelToScroll = function ($) {
            return (
              (n &&
                n.labels &&
                (ne || O.refresh() || ne) +
                  (n.labels[$] / n.duration()) * fe) ||
              0
            );
          }),
          (O.getTrailing = function ($) {
            var ee = se.indexOf(O),
              U =
                O.direction > 0 ? se.slice(0, ee).reverse() : se.slice(ee + 1);
            return (
              Wt($)
                ? U.filter(function (te) {
                    return te.vars.preventOverlaps === $;
                  })
                : U
            ).filter(function (te) {
              return O.direction > 0 ? te.end <= ne : te.start >= ye;
            });
          }),
          (O.update = function ($, ee, U) {
            if (!(A && !U && !$)) {
              var te = Ct === !0 ? He : O.scroll(),
                Ke = $ ? 0 : (te - ne) / fe,
                ce = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0,
                De = O.progress,
                lt,
                Me,
                Se,
                me,
                gi,
                Ee,
                $t,
                wi;
              if (
                (ee &&
                  ((qe = ke),
                  (ke = A ? de() : te),
                  g && ((re = oe), (oe = n && !z ? n.totalProgress() : ce))),
                y &&
                  f &&
                  !dt &&
                  !Es &&
                  li &&
                  (!ce && ne < te + ((te - qe) / (ft() - Rn)) * y
                    ? (ce = 1e-4)
                    : ce === 1 &&
                      ye > te + ((te - qe) / (ft() - Rn)) * y &&
                      (ce = 0.9999)),
                ce !== De && O.enabled)
              ) {
                if (
                  ((lt = O.isActive = !!ce && ce < 1),
                  (Me = !!De && De < 1),
                  (Ee = lt !== Me),
                  (gi = Ee || !!ce != !!De),
                  (O.direction = ce > De ? 1 : -1),
                  (O.progress = ce),
                  gi &&
                    !dt &&
                    ((Se = ce && !De ? 0 : ce === 1 ? 1 : De === 1 ? 2 : 3),
                    z &&
                      ((me =
                        (!Ee && k[Se + 1] !== "none" && k[Se + 1]) || k[Se]),
                      (wi =
                        n &&
                        (me === "complete" || me === "reset" || me in n)))),
                  I &&
                    (Ee || wi) &&
                    (wi || d || !n) &&
                    (mt(I)
                      ? I(O)
                      : O.getTrailing(I).forEach(function (hr) {
                          return hr.endAnimation();
                        })),
                  z ||
                    (Y && !dt && !Es
                      ? (Y._dp._time - Y._start !== Y._time &&
                          Y.render(Y._dp._time - Y._start),
                        Y.resetTo
                          ? Y.resetTo("totalProgress", ce, n._tTime / n._tDur)
                          : ((Y.vars.totalProgress = ce),
                            Y.invalidate().restart()))
                      : n && n.totalProgress(ce, !!(dt && (ie || $)))),
                  f)
                ) {
                  if (($ && p && (Ce.style[p + D.os2] = fr), !w))
                    ot(zn(kt + pi * ce));
                  else if (gi) {
                    if (
                      (($t =
                        !$ && ce > De && ye + 1 > te && te + 1 >= Ai(S, D)),
                      C)
                    )
                      if (!$ && (lt || $t)) {
                        var tt = Ni(f, !0),
                          it = te - ne;
                        eu(
                          f,
                          he,
                          tt.top + (D === Ge ? it : 0) + je,
                          tt.left + (D === Ge ? 0 : it) + je
                        );
                      } else eu(f, Ce);
                    cn(lt || $t ? st : qt),
                      (F && ce < 1 && lt) ||
                        ot(kt + (ce === 1 && !$t ? pi : 0));
                  }
                }
                g && !be.tween && !dt && !Es && Ot.restart(!0),
                  a &&
                    (Ee || (x && ce && (ce < 1 || !Bo))) &&
                    ls(a.targets).forEach(function (hr) {
                      return hr.classList[lt || x ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !z && !$ && o(O),
                  gi && !dt
                    ? (z &&
                        (wi &&
                          (me === "complete"
                            ? n.pause().totalProgress(1)
                            : me === "reset"
                            ? n.restart(!0).pause()
                            : me === "restart"
                            ? n.restart(!0)
                            : n[me]()),
                        o && o(O)),
                      (Ee || !Bo) &&
                        (u && Ee && Vo(O, u),
                        b[Se] && Vo(O, b[Se]),
                        x && (ce === 1 ? O.kill(!1, 1) : (b[Se] = 0)),
                        Ee || ((Se = ce === 1 ? 1 : 3), b[Se] && Vo(O, b[Se]))),
                      M &&
                        !lt &&
                        Math.abs(O.getVelocity()) > (Fn(M) ? M : 2500) &&
                        (kn(O.callbackAnimation),
                        Y
                          ? Y.progress(1)
                          : kn(n, me === "reverse" ? 1 : !ce, 1)))
                    : z && o && !dt && o(O);
              }
              if (W) {
                var ut = A ? (te / A.duration()) * (A._caScrollDist || 0) : te;
                Vr(ut + (N._isFlipped ? 1 : 0)), W(ut);
              }
              mi && mi((-te / A.duration()) * (A._caScrollDist || 0));
            }
          }),
          (O.enable = function ($, ee) {
            O.enabled ||
              ((O.enabled = !0),
              Ze(S, "resize", Bn),
              v || Ze(S, "scroll", Wr),
              q && Ze(r, "refreshInit", q),
              $ !== !1 && ((O.progress = ue = 0), (ke = qe = Q = de())),
              ee !== !1 && O.refresh());
          }),
          (O.getTween = function ($) {
            return $ && be ? be.tween : Y;
          }),
          (O.setPositions = function ($, ee, U, te) {
            if (A) {
              var Ke = A.scrollTrigger,
                ce = A.duration(),
                De = Ke.end - Ke.start;
              ($ = Ke.start + (De * $) / ce), (ee = Ke.start + (De * ee) / ce);
            }
            O.refresh(
              !1,
              !1,
              {
                start: jl($, U && !!O._startClamp),
                end: jl(ee, U && !!O._endClamp),
              },
              te
            ),
              O.update();
          }),
          (O.adjustPinSpacing = function ($) {
            if (Oe && $) {
              var ee = Oe.indexOf(D.d) + 1;
              (Oe[ee] = parseFloat(Oe[ee]) + $ + je),
                (Oe[1] = parseFloat(Oe[1]) + $ + je),
                cn(Oe);
            }
          }),
          (O.disable = function ($, ee) {
            if (
              O.enabled &&
              ($ !== !1 && O.revert(!0, !0),
              (O.enabled = O.isActive = !1),
              ee || (Y && Y.pause()),
              (He = 0),
              xe && (xe.uncache = 1),
              q && Qe(r, "refreshInit", q),
              Ot && (Ot.pause(), be.tween && be.tween.kill() && (be.tween = 0)),
              !v)
            ) {
              for (var U = se.length; U--; )
                if (se[U].scroller === S && se[U] !== O) return;
              Qe(S, "resize", Bn), v || Qe(S, "scroll", Wr);
            }
          }),
          (O.kill = function ($, ee) {
            O.disable($, ee), Y && !ee && Y.kill(), l && delete Pa[l];
            var U = se.indexOf(O);
            U >= 0 && se.splice(U, 1),
              U === xt && js > 0 && xt--,
              (U = 0),
              se.forEach(function (te) {
                return te.scroller === O.scroller && (U = 1);
              }),
              U || Ct || (O.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                $ && n.revert({ kill: !1 }),
                ee || n.kill()),
              Ve &&
                [Ve, $e, N, Xe].forEach(function (te) {
                  return te.parentNode && te.parentNode.removeChild(te);
                }),
              Qn === O && (Qn = 0),
              f &&
                (xe && (xe.uncache = 1),
                (U = 0),
                se.forEach(function (te) {
                  return te.pin === f && U++;
                }),
                U || (xe.spacer = 0)),
              i.onKill && i.onKill(O);
          }),
          se.push(O),
          O.enable(!1, !1),
          at && at(O),
          n && n.add && !fe)
        ) {
          var pe = O.update;
          (O.update = function () {
            (O.update = pe), le.cache++, ne || ye || O.refresh();
          }),
            j.delayedCall(0.01, O.update),
            (fe = 0.01),
            (ne = ye = 0);
        } else O.refresh();
        f && Fp();
      }),
      (r.register = function (i) {
        return (
          Zr ||
            ((j = i || sd()), nd() && window.document && r.enable(), (Zr = Nn)),
          Zr
        );
      }),
      (r.defaults = function (i) {
        if (i) for (var n in i) Os[n] = i[n];
        return Os;
      }),
      (r.disable = function (i, n) {
        (Nn = 0),
          se.forEach(function (o) {
            return o[n ? "kill" : "disable"](i);
          }),
          Qe(ae, "wheel", Wr),
          Qe(_e, "scroll", Wr),
          clearInterval(Cs),
          Qe(_e, "touchcancel", xi),
          Qe(he, "touchstart", xi),
          As(Qe, _e, "pointerdown,touchstart,mousedown", Gl),
          As(Qe, _e, "pointerup,touchend,mouseup", Xl),
          lo.kill(),
          Ps(Qe);
        for (var s = 0; s < le.length; s += 3)
          ks(Qe, le[s], le[s + 1]), ks(Qe, le[s], le[s + 2]);
      }),
      (r.enable = function () {
        if (
          ((ae = window),
          (_e = document),
          (Xt = _e.documentElement),
          (he = _e.body),
          j &&
            ((ls = j.utils.toArray),
            (Gn = j.utils.clamp),
            (Ca = j.core.context || xi),
            (Fo = j.core.suppressOverwrites || xi),
            (nl = ae.history.scrollRestoration || "auto"),
            (Aa = ae.pageYOffset || 0),
            j.core.globals("ScrollTrigger", r),
            he))
        ) {
          (Nn = 1),
            (un = document.createElement("div")),
            (un.style.height = "100vh"),
            (un.style.position = "absolute"),
            hd(),
            Mp(),
            Re.register(j),
            (r.isTouch = Re.isTouch),
            (Yi =
              Re.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (xa = Re.isTouch === 1),
            Ze(ae, "wheel", Wr),
            (rl = [ae, _e, Xt, he]),
            j.matchMedia &&
              ((r.matchMedia = function (u) {
                var c = j.matchMedia(),
                  d;
                for (d in u) c.add(d, u[d]);
                return c;
              }),
              j.addEventListener("matchMediaInit", function () {
                return cl();
              }),
              j.addEventListener("matchMediaRevert", function () {
                return fd();
              }),
              j.addEventListener("matchMedia", function () {
                Er(0, 1), Fr("matchMedia");
              }),
              j.matchMedia().add("(orientation: portrait)", function () {
                return $o(), $o;
              })),
            $o(),
            Ze(_e, "scroll", Wr);
          var i = he.hasAttribute("style"),
            n = he.style,
            s = n.borderTopStyle,
            o = j.core.Animation.prototype,
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
              a = Ni(he),
              Ge.m = Math.round(a.top + Ge.sc()) || 0,
              Pt.m = Math.round(a.left + Pt.sc()) || 0,
              s ? (n.borderTopStyle = s) : n.removeProperty("border-top-style"),
              i || (he.setAttribute("style", ""), he.removeAttribute("style")),
              Cs = setInterval(Kl, 250),
              j.delayedCall(0.5, function () {
                return (Es = 0);
              }),
              Ze(_e, "touchcancel", xi),
              Ze(he, "touchstart", xi),
              As(Ze, _e, "pointerdown,touchstart,mousedown", Gl),
              As(Ze, _e, "pointerup,touchend,mouseup", Xl),
              Ta = j.utils.checkPrefix("transform"),
              Gs.push(Ta),
              Zr = ft(),
              lo = j.delayedCall(0.2, Er).pause(),
              Jr = [
                _e,
                "visibilitychange",
                function () {
                  var u = ae.innerWidth,
                    c = ae.innerHeight;
                  _e.hidden
                    ? (($l = u), (Hl = c))
                    : ($l !== u || Hl !== c) && Bn();
                },
                _e,
                "DOMContentLoaded",
                Er,
                ae,
                "load",
                Er,
                ae,
                "resize",
                Bn,
              ],
              Ps(Ze),
              se.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < le.length;
            l += 3
          )
            ks(Qe, le[l], le[l + 1]), ks(Qe, le[l], le[l + 2]);
        }
      }),
      (r.config = function (i) {
        "limitCallbacks" in i && (Bo = !!i.limitCallbacks);
        var n = i.syncInterval;
        (n && clearInterval(Cs)) || ((Cs = n) && setInterval(Kl, n)),
          "ignoreMobileResize" in i &&
            (xa = r.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Ps(Qe) || Ps(Ze, i.autoRefreshEvents || "none"),
            (td = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (r.scrollerProxy = function (i, n) {
        var s = Lt(i),
          o = le.indexOf(s),
          a = Nr(s);
        ~o && le.splice(o, a ? 6 : 2),
          n && (a ? Oi.unshift(ae, n, he, n, Xt, n) : Oi.unshift(s, n));
      }),
      (r.clearMatchMedia = function (i) {
        se.forEach(function (n) {
          return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
        });
      }),
      (r.isInViewport = function (i, n, s) {
        var o = (Wt(i) ? Lt(i) : i).getBoundingClientRect(),
          a = o[s ? Mr : Lr] * n || 0;
        return s
          ? o.right - a > 0 && o.left + a < ae.innerWidth
          : o.bottom - a > 0 && o.top + a < ae.innerHeight;
      }),
      (r.positionInViewport = function (i, n, s) {
        Wt(i) && (i = Lt(i));
        var o = i.getBoundingClientRect(),
          a = o[s ? Mr : Lr],
          l =
            n == null
              ? a / 2
              : n in fo
              ? fo[n] * a
              : ~n.indexOf("%")
              ? (parseFloat(n) * a) / 100
              : parseFloat(n) || 0;
        return s ? (o.left + l) / ae.innerWidth : (o.top + l) / ae.innerHeight;
      }),
      (r.killAll = function (i) {
        if (
          (se.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var n = zr.killAll || [];
          (zr = {}),
            n.forEach(function (s) {
              return s();
            });
        }
      }),
      r
    );
  })();
Z.version = "3.13.0";
Z.saveStyles = function (r) {
  return r
    ? ls(r).forEach(function (e) {
        if (e && e.style) {
          var t = Ht.indexOf(e);
          t >= 0 && Ht.splice(t, 5),
            Ht.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              j.core.getCache(e),
              Ca()
            );
        }
      })
    : Ht;
};
Z.revert = function (r, e) {
  return cl(!r, e);
};
Z.create = function (r, e) {
  return new Z(r, e);
};
Z.refresh = function (r) {
  return r ? Bn(!0) : (Zr || Z.register()) && Er(!0);
};
Z.update = function (r) {
  return ++le.cache && Fi(r === !0 ? 2 : 0);
};
Z.clearScrollMemory = pd;
Z.maxScroll = function (r, e) {
  return Ai(r, e ? Pt : Ge);
};
Z.getScrollFunc = function (r, e) {
  return ar(Lt(r), e ? Pt : Ge);
};
Z.getById = function (r) {
  return Pa[r];
};
Z.getAll = function () {
  return se.filter(function (r) {
    return r.vars.id !== "ScrollSmoother";
  });
};
Z.isScrolling = function () {
  return !!li;
};
Z.snapDirectional = ul;
Z.addEventListener = function (r, e) {
  var t = zr[r] || (zr[r] = []);
  ~t.indexOf(e) || t.push(e);
};
Z.removeEventListener = function (r, e) {
  var t = zr[r],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
Z.batch = function (r, e) {
  var t = [],
    i = {},
    n = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var d = [],
        h = [],
        f = j
          .delayedCall(n, function () {
            c(d, h), (d = []), (h = []);
          })
          .pause();
      return function (p) {
        d.length || f.restart(!0),
          d.push(p.trigger),
          h.push(p),
          s <= d.length && f.progress(1);
      };
    },
    a;
  for (a in e)
    i[a] =
      a.substr(0, 2) === "on" && mt(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    mt(s) &&
      ((s = s()),
      Ze(Z, "refresh", function () {
        return (s = e.batchMax());
      })),
    ls(r).forEach(function (l) {
      var u = {};
      for (a in i) u[a] = i[a];
      (u.trigger = l), t.push(Z.create(u));
    }),
    t
  );
};
var iu = function (e, t, i, n) {
    return (
      t > n ? e(n) : t < 0 && e(0),
      i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  },
  Wo = function r(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Re.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Xt && r(he, t);
  },
  Is = { auto: 1, scroll: 1 },
  Hp = function (e) {
    var t = e.event,
      i = e.target,
      n = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || j.core.getCache(s),
      a = ft(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== he &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Is[(l = ni(s)).overflowY] || Is[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !Nr(s) &&
        (Is[(l = ni(s)).overflowY] || Is[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  gd = function (e, t, i, n) {
    return Re.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && Hp),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return i && Ze(_e, Re.eventTypes[0], nu, !1, !0);
      },
      onDisable: function () {
        return Qe(_e, Re.eventTypes[0], nu, !0);
      },
    });
  },
  Wp = /(input|label|select|textarea)/i,
  ru,
  nu = function (e) {
    var t = Wp.test(e.target.tagName);
    (t || ru) && ((e._gsapAllow = !0), (ru = t));
  },
  jp = function (e) {
    Sr(e) || (e = {}),
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
      u = Lt(e.target) || Xt,
      c = j.core.globals().ScrollSmoother,
      d = c && c.get(),
      h =
        Yi &&
        ((e.content && Lt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      f = ar(u, Ge),
      p = ar(u, Pt),
      m = 1,
      y =
        (Re.isTouch && ae.visualViewport
          ? ae.visualViewport.scale * ae.visualViewport.width
          : ae.outerWidth) / ae.innerWidth,
      T = 0,
      _ = mt(n)
        ? function () {
            return n(a);
          }
        : function () {
            return n || 2.8;
          },
      x,
      g,
      C = gd(u, e.type, !0, s),
      E = function () {
        return (g = !1);
      },
      A = xi,
      M = xi,
      I = function () {
        (l = Ai(u, Ge)),
          (M = Gn(Yi ? 1 : 0, l)),
          i && (A = Gn(0, Ai(u, Pt))),
          (x = Dr);
      },
      D = function () {
        (h._gsap.y = zn(parseFloat(h._gsap.y) + f.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0);
      },
      z = function () {
        if (g) {
          requestAnimationFrame(E);
          var L = zn(a.deltaY / 2),
            R = M(f.v - L);
          if (h && R !== f.v + f.offset) {
            f.offset = R - f.v;
            var O = zn((parseFloat(h && h._gsap.y) || 0) - f.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              O +
              ", 0, 1)"),
              (h._gsap.y = O + "px"),
              (f.cacheID = le.cache),
              Fi();
          }
          return !0;
        }
        f.offset && D(), (g = !0);
      },
      S,
      P,
      v,
      w,
      b = function () {
        I(),
          S.isActive() &&
            S.vars.scrollY > l &&
            (f() > l ? S.progress(1) && f(l) : S.resetTo("scrollY", l));
      };
    return (
      h && j.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (k) {
        return (
          (Yi && k.type === "touchmove" && z()) ||
          (m > 1.05 && k.type !== "touchstart") ||
          a.isGesturing ||
          (k.touches && k.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        g = !1;
        var k = m;
        (m = zn(((ae.visualViewport && ae.visualViewport.scale) || 1) / y)),
          S.pause(),
          k !== m && Wo(u, m > 1.01 ? !0 : i ? !1 : "x"),
          (P = p()),
          (v = f()),
          I(),
          (x = Dr);
      }),
      (e.onRelease = e.onGestureStart =
        function (k, L) {
          if ((f.offset && D(), !L)) w.restart(!0);
          else {
            le.cache++;
            var R = _(),
              O,
              q;
            i &&
              ((O = p()),
              (q = O + (R * 0.05 * -k.velocityX) / 0.227),
              (R *= iu(p, O, q, Ai(u, Pt))),
              (S.vars.scrollX = A(q))),
              (O = f()),
              (q = O + (R * 0.05 * -k.velocityY) / 0.227),
              (R *= iu(f, O, q, Ai(u, Ge))),
              (S.vars.scrollY = M(q)),
              S.invalidate().duration(R).play(0.01),
              ((Yi && S.vars.scrollY >= l) || O >= l - 1) &&
                j.to({}, { onUpdate: b, duration: R });
          }
          o && o(k);
        }),
      (e.onWheel = function () {
        S._ts && S.pause(), ft() - T > 1e3 && ((x = 0), (T = ft()));
      }),
      (e.onChange = function (k, L, R, O, q) {
        if (
          (Dr !== x && I(),
          L && i && p(A(O[2] === L ? P + (k.startX - k.x) : p() + L - O[1])),
          R)
        ) {
          f.offset && D();
          var H = q[2] === R,
            K = H ? v + k.startY - k.y : f() + R - q[1],
            Q = M(K);
          H && K !== Q && (v += Q - K), f(Q);
        }
        (R || L) && Fi();
      }),
      (e.onEnable = function () {
        Wo(u, i ? !1 : "x"),
          Z.addEventListener("refresh", b),
          Ze(ae, "resize", b),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = p.smooth = !1)),
          C.enable();
      }),
      (e.onDisable = function () {
        Wo(u, !0),
          Qe(ae, "resize", b),
          Z.removeEventListener("refresh", b),
          C.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Re(e)),
      (a.iOS = Yi),
      Yi && !f() && f(1),
      Yi && j.ticker.add(xi),
      (w = a._dc),
      (S = j.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: md(f, f(), function () {
            return S.pause();
          }),
        },
        onUpdate: Fi,
        onComplete: w.vars.onComplete,
      })),
      a
    );
  };
Z.sort = function (r) {
  if (mt(r)) return se.sort(r);
  var e = ae.pageYOffset || 0;
  return (
    Z.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + ae.innerHeight);
    }),
    se.sort(
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
};
Z.observe = function (r) {
  return new Re(r);
};
Z.normalizeScroll = function (r) {
  if (typeof r > "u") return Tt;
  if (r === !0 && Tt) return Tt.enable();
  if (r === !1) {
    Tt && Tt.kill(), (Tt = r);
    return;
  }
  var e = r instanceof Re ? r : jp(r);
  return Tt && Tt.target === e.target && Tt.kill(), Nr(e.target) && (Tt = e), e;
};
Z.core = {
  _getVelocityProp: Sa,
  _inputObserver: gd,
  _scrollers: le,
  _proxies: Oi,
  bridge: {
    ss: function () {
      li || Fr("scrollStart"), (li = ft());
    },
    ref: function () {
      return dt;
    },
  },
};
sd() && j.registerPlugin(Z);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let On,
  jr,
  Oa,
  Gp = () => Oa || Tn.register(window.gsap),
  su = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  po = (r) =>
    typeof r == "string"
      ? po(document.querySelectorAll(r))
      : "length" in r
      ? Array.from(r)
      : [r],
  ou = (r) => po(r).filter((e) => e instanceof HTMLElement),
  Ma = [],
  jo = function () {},
  Xp = /\s+/g,
  au = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  lu = { left: 0, top: 0, width: 0, height: 0 },
  uu = (r, e) => {
    if (e) {
      let t = new Set(r.join("").match(e) || Ma),
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
  cu = (r) =>
    window.getComputedStyle(r).display === "inline" &&
    (r.style.display = "inline-block"),
  Gr = (r, e, t) =>
    e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
  La = (r, e, t) => {
    let i = e[r + "sClass"] || "",
      { tag: n = "div", aria: s = "auto", propIndex: o = !1 } = e,
      a = r === "line" ? "block" : "inline-block",
      l = i.indexOf("++") > -1,
      u = (c) => {
        let d = document.createElement(n),
          h = t.length + 1;
        return (
          i && (d.className = i + (l ? " " + i + h : "")),
          o && d.style.setProperty("--" + r, h + ""),
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
  Yp = (r, e, t, i) => {
    let n = La("line", t, i),
      s = window.getComputedStyle(r).textAlign || "left";
    return (o, a) => {
      let l = n("");
      for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
        l.appendChild(e[o]);
      l.normalize();
    };
  },
  vd = (r, e, t, i, n, s, o, a, l, u) => {
    var c;
    let d = Array.from(r.childNodes),
      h = 0,
      { wordDelimiter: f, reduceWhiteSpace: p = !0, prepareText: m } = e,
      y = r.getBoundingClientRect(),
      T = y,
      _ = !p && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
      x = 0,
      g = t.collection,
      C,
      E,
      A,
      M,
      I,
      D,
      z,
      S,
      P,
      v,
      w,
      b,
      k,
      L,
      R,
      O,
      q,
      H;
    for (
      typeof f == "object"
        ? ((A = f.delimiter || f), (E = f.replaceWith || ""))
        : (E = f === "" ? "" : f || " "),
        C = E !== " ";
      h < d.length;
      h++
    )
      if (((M = d[h]), M.nodeType === 3)) {
        for (
          R = M.textContent || "",
            p
              ? (R = R.replace(Xp, " "))
              : _ &&
                (R = R.replace(
                  /\n/g,
                  E +
                    `
`
                )),
            m && (R = m(R, r)),
            M.textContent = R,
            I = E || A ? R.split(A || E) : R.match(a) || Ma,
            q = I[I.length - 1],
            S = C ? q.slice(-1) === " " : !q,
            q || I.pop(),
            T = y,
            z = C ? I[0].charAt(0) === " " : !I[0],
            z && Gr(" ", r, M),
            I[0] || I.shift(),
            uu(I, l),
            (s && u) || (M.textContent = ""),
            P = 1;
          P <= I.length;
          P++
        )
          if (
            ((O = I[P - 1]),
            !p &&
              _ &&
              O.charAt(0) ===
                `
` &&
              ((c = M.previousSibling) == null || c.remove(),
              Gr(document.createElement("br"), r, M),
              (O = O.slice(1))),
            !p && O === "")
          )
            Gr(E, r, M);
          else if (O === " ") r.insertBefore(document.createTextNode(" "), M);
          else {
            if (
              (C && O.charAt(0) === " " && Gr(" ", r, M),
              x && P === 1 && !z && g.indexOf(x.parentNode) > -1
                ? ((D = g[g.length - 1]),
                  D.appendChild(document.createTextNode(i ? "" : O)))
                : ((D = t(i ? "" : O)),
                  Gr(D, r, M),
                  x && P === 1 && !z && D.insertBefore(x, D.firstChild)),
              i)
            )
              for (
                w = su
                  ? uu(
                      [...su.segment(O)].map((K) => K.segment),
                      l
                    )
                  : O.match(a) || Ma,
                  H = 0;
                H < w.length;
                H++
              )
                D.appendChild(
                  w[H] === " " ? document.createTextNode(" ") : i(w[H])
                );
            if (s && u) {
              if (
                ((R = M.textContent = R.substring(O.length + 1, R.length)),
                (v = D.getBoundingClientRect()),
                v.top > T.top && v.left <= T.left)
              ) {
                for (b = r.cloneNode(), k = r.childNodes[0]; k && k !== D; )
                  (L = k), (k = k.nextSibling), b.appendChild(L);
                r.parentNode.insertBefore(b, r), n && cu(b);
              }
              T = v;
            }
            (P < I.length || S) &&
              Gr(
                P >= I.length ? " " : C && O.slice(-1) === " " ? " " + E : E,
                r,
                M
              );
          }
        r.removeChild(M), (x = 0);
      } else
        M.nodeType === 1 &&
          (o && o.indexOf(M) > -1
            ? (g.indexOf(M.previousSibling) > -1 &&
                g[g.length - 1].appendChild(M),
              (x = M))
            : (vd(M, e, t, i, n, s, o, a, l, !0), (x = 0)),
          n && cu(M));
  };
const yd = class wd {
  constructor(e, t) {
    (this.isSplit = !1),
      Gp(),
      (this.elements = ou(e)),
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
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          clearTimeout(n), (n = setTimeout(s, 200));
        }),
    }),
      jo(this),
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
      h = t.indexOf("words") > -1,
      f = d && !h && !c,
      p = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
      m = p ? new RegExp(p.source + "|" + au.source, "gu") : au,
      y = !!e.ignore && ou(e.ignore),
      { orig: T, animTime: _, obs: x } = this._data,
      g;
    return (
      (d || h || c) &&
        (this.elements.forEach((C, E) => {
          (T[E] = {
            element: C,
            html: C.innerHTML,
            ariaL: C.getAttribute("aria-label"),
            ariaH: C.getAttribute("aria-hidden"),
          }),
            i === "auto"
              ? C.setAttribute("aria-label", (C.textContent || "").trim())
              : i === "hidden" && C.setAttribute("aria-hidden", "true");
          let A = [],
            M = [],
            I = [],
            D = d ? La("char", e, A) : null,
            z = La("word", e, M),
            S,
            P,
            v,
            w;
          if ((vd(C, e, z, D, f, n && (c || f), y, m, p, !1), c)) {
            let b = po(C.childNodes),
              k = Yp(C, b, e, I),
              L,
              R = [],
              O = 0,
              q = b.map((K) =>
                K.nodeType === 1 ? K.getBoundingClientRect() : lu
              ),
              H = lu;
            for (S = 0; S < b.length; S++)
              (L = b[S]),
                L.nodeType === 1 &&
                  (L.nodeName === "BR"
                    ? (R.push(L), k(O, S + 1), (O = S + 1), (H = q[O]))
                    : (S &&
                        q[S].top > H.top &&
                        q[S].left <= H.left &&
                        (k(O, S), (O = S)),
                      (H = q[S])));
            O < S && k(O, S),
              R.forEach((K) => {
                var Q;
                return (Q = K.parentNode) == null ? void 0 : Q.removeChild(K);
              });
          }
          if (!h) {
            for (S = 0; S < M.length; S++)
              if (
                ((P = M[S]),
                d || !P.nextSibling || P.nextSibling.nodeType !== 3)
              )
                if (s && !c) {
                  for (
                    v = document.createElement("span"),
                      v.style.whiteSpace = "nowrap";
                    P.firstChild;

                  )
                    v.appendChild(P.firstChild);
                  P.replaceWith(v);
                } else P.replaceWith(...P.childNodes);
              else
                (w = P.nextSibling),
                  w &&
                    w.nodeType === 3 &&
                    ((w.textContent =
                      (P.textContent || "") + (w.textContent || "")),
                    P.remove());
            (M.length = 0), C.normalize();
          }
          this.lines.push(...I), this.words.push(...M), this.chars.push(...A);
        }),
        u &&
          this[u] &&
          this.masks.push(
            ...this[u].map((C) => {
              let E = C.cloneNode();
              return (
                C.replaceWith(E),
                E.appendChild(C),
                C.className &&
                  (E.className = C.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (E.style.overflow = "clip"),
                E
              );
            })
          )),
      (this.isSplit = !0),
      jr && (a ? jr.addEventListener("loadingdone", this._split) : jr.status),
      (g = o && o(this)) &&
        g.totalTime &&
        (this._data.anim = _ ? g.totalTime(_) : g),
      c &&
        a &&
        this.elements.forEach((C, E) => {
          (T[E].width = C.offsetWidth), x && x.observe(C);
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
          l ? o.setAttribute("aria-label", l) : o.removeAttribute("aria-label"),
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
      jr?.removeEventListener("loadingdone", this._split),
      n && ((this._data.animTime = n.totalTime()), n.revert()),
      (t = (e = this.vars).onRevert) == null || t.call(e, this),
      this
    );
  }
  static create(e, t) {
    return new wd(e, t);
  }
  static register(e) {
    (On = On || e || window.gsap),
      On && ((po = On.utils.toArray), (jo = On.core.context || jo)),
      !Oa && window.innerWidth > 0 && ((jr = document.fonts), (Oa = !0));
  }
};
yd.version = "3.13.0";
let Tn = yd;
V.registerPlugin(Z, Tn);
const Up = () => {
    document.querySelectorAll("[data-highlight-text]").forEach((e) => {
      const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
        i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
        n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
        s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
      new Tn(e, {
        type: "words, chars",
        onSplit(o) {
          const a = V.context(() => {
            V.timeline({
              scrollTrigger: { scrub: !0, trigger: e, start: t, end: i },
            }).from(o.chars, { autoAlpha: n, stagger: s, ease: "linear" });
          });
          e._gsapContext = a;
        },
      });
    });
  },
  Wi = () => {
    Up();
  },
  Kp = () => {
    document.querySelectorAll('[data-tabs="wrapper"]').forEach((e) => {
      const t = e.querySelectorAll('[data-tabs="content"]'),
        i = e.querySelectorAll('[data-tabs="visual"]'),
        n = e.dataset.tabsAutoplay === "true",
        s = parseInt(e.dataset.tabsAutoplayDuration) || 5e3;
      let o = null,
        a = null,
        l = 0,
        u = !1,
        c = null;
      function d(p) {
        c && c.kill();
        const m = t[p].querySelector('[data-tabs="item-progress"]');
        m &&
          (V.set(m, { scaleX: 0, transformOrigin: "left center" }),
          (c = V.to(m, {
            scaleX: 1,
            duration: s / 1e3,
            ease: "power1.inOut",
            onComplete: () => {
              if (!u) {
                const y = (p + 1) % t.length;
                h(y);
              }
            },
          })));
      }
      function h(p) {
        if (u || t[p] === o) return;
        (u = !0), c && c.kill();
        const m = o,
          y = a,
          T = m?.querySelector('[data-tabs="item-progress"]'),
          _ = t[p],
          x = i[p],
          g = _.querySelector('[data-tabs="item-progress"]'),
          C = V.timeline({
            defaults: { duration: 0.65, ease: "power3" },
            onComplete: () => {
              (o = _), (a = x), (l = p), (u = !1), n && d(p);
            },
          });
        m &&
          (m.classList.remove("active"),
          m.setAttribute("aria-selected", "false"),
          y?.classList.remove("active"),
          C.set(T, { transformOrigin: "right center" })
            .to(T, { scaleX: 0, duration: 0.3 }, 0)
            .to(y, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
          _.classList.add("active"),
          _.setAttribute("aria-selected", "true"),
          x.classList.add("active"),
          C.fromTo(
            x,
            { autoAlpha: 0, yPercent: 5, scale: 0.99 },
            { autoAlpha: 1, yPercent: 0, scale: 1 },
            0.3
          ).set(g, { scaleX: 0, transformOrigin: "left center" }, 0);
      }
      if (
        (t.forEach((p, m) => {
          p.setAttribute("tabindex", m === 0 ? "0" : "-1"),
            p.setAttribute("role", "tab"),
            p.setAttribute("aria-selected", m === 0 ? "true" : "false"),
            p.setAttribute("id", `tab-${m}`),
            i[m] &&
              (i[m].setAttribute("role", "tabpanel"),
              i[m].setAttribute("aria-labelledby", `tab-${m}`)),
            p.addEventListener("keydown", (y) => {
              let T;
              switch (y.key) {
                case "ArrowRight":
                  y.preventDefault(), (T = (m + 1) % t.length);
                  break;
                case "ArrowLeft":
                  y.preventDefault(), (T = (m - 1 + t.length) % t.length);
                  break;
                case "Home":
                  y.preventDefault(), (T = 0);
                  break;
                case "End":
                  y.preventDefault(), (T = t.length - 1);
                  break;
                default:
                  return;
              }
              t.forEach((_, x) => {
                _.setAttribute("tabindex", x === T ? "0" : "-1");
              }),
                t[T].focus(),
                h(T);
            }),
            p.addEventListener("click", () => {
              p !== o &&
                (t.forEach((y, T) => {
                  y.setAttribute("tabindex", T === m ? "0" : "-1");
                }),
                h(m));
            });
        }),
        e.setAttribute("role", "tablist"),
        e.setAttribute("aria-label", "Hero content tabs"),
        "ontouchstart" in window || navigator.maxTouchPoints > 0)
      ) {
        let p = 0,
          m = 0,
          y = 0,
          T = 0;
        const _ = 50,
          x = 100;
        e.addEventListener(
          "touchstart",
          (g) => {
            (p = g.touches[0].clientX), (m = g.touches[0].clientY);
          },
          { passive: !0 }
        ),
          e.addEventListener(
            "touchend",
            (g) => {
              (y = g.changedTouches[0].clientX),
                (T = g.changedTouches[0].clientY);
              const C = y - p,
                E = Math.abs(T - m);
              if (Math.abs(C) > _ && E < x)
                if (C > 0) {
                  const A = (l - 1 + t.length) % t.length;
                  h(A);
                } else {
                  const A = (l + 1) % t.length;
                  h(A);
                }
            },
            { passive: !0 }
          );
      }
      h(0);
    });
  },
  Qp = () => {
    Kp();
  };
V.registerPlugin(Z);
const Zp = () => {
    const r = document.querySelector(".home_hero_tab_component"),
      e = r.querySelector(".home_hero_tab_visual_wrap");
    V.to(e, {
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
  Jp = () => {
    Zp();
  };
V.registerPlugin(Z, Tn);
const eh = () => {
    const r = document.querySelectorAll('[form-dropdown="component"]'),
      e = "inactive",
      t = "active",
      i = "aria-expanded",
      n = "aria-hidden";
    let s = !1,
      o = null;
    const a = "#f7f7f7",
      l = "#4aa5fe",
      u = (p) => {
        if (!s || !o) return;
        if (!o.contains(p.target)) {
          const y = o.querySelector('[form-dropdown="trigger"]'),
            T = o.querySelector('[form-dropdown="content"]'),
            _ = o.querySelector('[form-dropdown="trigger-icon"]'),
            x = o.querySelectorAll('[form-dropdown="answer"]');
          d(y, T, _), f(y, T, _, x), (s = !1), (o = null);
        }
      };
    document.addEventListener("click", u);
    const c = (p, m, y, T) => {
        p.classList.remove(e),
          p.classList.add(t),
          p.setAttribute(i, "true"),
          m.setAttribute(n, "false"),
          y && y.classList.add(t);
      },
      d = (p, m, y, T) => {
        p.classList.remove(t),
          p.classList.add(e),
          p.setAttribute(i, "false"),
          m.setAttribute(n, "true"),
          y && y.classList.remove(t);
      },
      h = (p, m, y, T) => {
        V.to(y, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
          V.fromTo(
            m,
            { autoAlpha: 0, pointerEvents: "none", y: 40 },
            {
              autoAlpha: 1,
              duration: 0.4,
              ease: "expo.out",
              y: 0,
              pointerEvents: "auto",
            }
          ),
          V.fromTo(
            T,
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
      f = (p, m, y, T) => {
        V.to(y, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
          V.to(m, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
          V.to(T, {
            autoAlpha: 0,
            duration: 0.01,
            ease: "expo.out",
            stagger: 0.05,
            pointerEvents: "none",
          });
      };
    r.forEach((p) => {
      const m = p.querySelector('[form-dropdown="trigger"]'),
        y = p.querySelector('[form-dropdown="content"]'),
        T = p.querySelector('[form-dropdown="trigger-icon"]'),
        _ = p.querySelectorAll('[form-dropdown="answer"]'),
        x = () => {
          d(m, y, T), f(m, y, T, _), (s = !1), (o = null);
        };
      m.addEventListener("click", () => {
        const g = m.classList.contains(t);
        if (s && o && o !== p) {
          const C = o.querySelector('[form-dropdown="trigger"]'),
            E = o.querySelector('[form-dropdown="content"]'),
            A = o.querySelector('[form-dropdown="trigger-icon"]'),
            M = o.querySelectorAll('[form-dropdown="answer"]');
          d(C, E, A), f(C, E, A, M);
        }
        g ? x() : (c(m, y, T), h(m, y, T, _), (s = !0), (o = p));
      }),
        _.forEach((g) => {
          g.addEventListener("click", () => {
            if (o === p) {
              const C = g.querySelector("p[answer-value]"),
                E = m.querySelector('[form-dropdown="value"]');
              if (C && E) {
                const A =
                    C.getAttribute("answer-value") || C.textContent.trim(),
                  M = g.getAttribute("calc-value");
                if (((E.textContent = A), M)) {
                  E.setAttribute("final-value", M);
                  const I = E.parentElement;
                  I && I.classList.add("is--active"),
                    m.classList.add("is--active"),
                    T && T.classList.add("is--active"),
                    p.classList.add("is--active"),
                    E.classList.add("is--active");
                }
              }
              x();
            }
          });
        });
    });
  },
  th = () => {
    eh();
  };
var zt = "top",
  di = "bottom",
  fi = "right",
  Ft = "left",
  dl = "auto",
  gs = [zt, di, fi, Ft],
  wn = "start",
  cs = "end",
  ih = "clippingParents",
  _d = "viewport",
  Mn = "popper",
  rh = "reference",
  du = gs.reduce(function (r, e) {
    return r.concat([e + "-" + wn, e + "-" + cs]);
  }, []),
  bd = [].concat(gs, [dl]).reduce(function (r, e) {
    return r.concat([e, e + "-" + wn, e + "-" + cs]);
  }, []),
  nh = "beforeRead",
  sh = "read",
  oh = "afterRead",
  ah = "beforeMain",
  lh = "main",
  uh = "afterMain",
  ch = "beforeWrite",
  dh = "write",
  fh = "afterWrite",
  ph = [nh, sh, oh, ah, lh, uh, ch, dh, fh];
function Di(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
function ei(r) {
  if (r == null) return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return r;
}
function Br(r) {
  var e = ei(r).Element;
  return r instanceof e || r instanceof Element;
}
function ui(r) {
  var e = ei(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
function fl(r) {
  if (typeof ShadowRoot > "u") return !1;
  var e = ei(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
function hh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function (t) {
    var i = e.styles[t] || {},
      n = e.attributes[t] || {},
      s = e.elements[t];
    !ui(s) ||
      !Di(s) ||
      (Object.assign(s.style, i),
      Object.keys(n).forEach(function (o) {
        var a = n[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function mh(r) {
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
        !ui(n) ||
          !Di(n) ||
          (Object.assign(n.style, a),
          Object.keys(s).forEach(function (l) {
            n.removeAttribute(l);
          }));
      });
    }
  );
}
const Sd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: hh,
  effect: mh,
  requires: ["computeStyles"],
};
function Mi(r) {
  return r.split("-")[0];
}
var Ir = Math.max,
  ho = Math.min,
  _n = Math.round;
function Da() {
  var r = navigator.userAgentData;
  return r != null && r.brands && Array.isArray(r.brands)
    ? r.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Td() {
  return !/^((?!chrome|android).)*safari/i.test(Da());
}
function bn(r, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var i = r.getBoundingClientRect(),
    n = 1,
    s = 1;
  e &&
    ui(r) &&
    ((n = (r.offsetWidth > 0 && _n(i.width) / r.offsetWidth) || 1),
    (s = (r.offsetHeight > 0 && _n(i.height) / r.offsetHeight) || 1));
  var o = Br(r) ? ei(r) : window,
    a = o.visualViewport,
    l = !Td() && t,
    u = (i.left + (l && a ? a.offsetLeft : 0)) / n,
    c = (i.top + (l && a ? a.offsetTop : 0)) / s,
    d = i.width / n,
    h = i.height / s;
  return {
    width: d,
    height: h,
    top: c,
    right: u + d,
    bottom: c + h,
    left: u,
    x: u,
    y: c,
  };
}
function pl(r) {
  var e = bn(r),
    t = r.offsetWidth,
    i = r.offsetHeight;
  return (
    Math.abs(e.width - t) <= 1 && (t = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
  );
}
function xd(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e)) return !0;
  if (t && fl(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Hi(r) {
  return ei(r).getComputedStyle(r);
}
function gh(r) {
  return ["table", "td", "th"].indexOf(Di(r)) >= 0;
}
function ur(r) {
  return ((Br(r) ? r.ownerDocument : r.document) || window.document)
    .documentElement;
}
function Eo(r) {
  return Di(r) === "html"
    ? r
    : r.assignedSlot || r.parentNode || (fl(r) ? r.host : null) || ur(r);
}
function fu(r) {
  return !ui(r) || Hi(r).position === "fixed" ? null : r.offsetParent;
}
function vh(r) {
  var e = /firefox/i.test(Da()),
    t = /Trident/i.test(Da());
  if (t && ui(r)) {
    var i = Hi(r);
    if (i.position === "fixed") return null;
  }
  var n = Eo(r);
  for (fl(n) && (n = n.host); ui(n) && ["html", "body"].indexOf(Di(n)) < 0; ) {
    var s = Hi(n);
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
function vs(r) {
  for (var e = ei(r), t = fu(r); t && gh(t) && Hi(t).position === "static"; )
    t = fu(t);
  return t &&
    (Di(t) === "html" || (Di(t) === "body" && Hi(t).position === "static"))
    ? e
    : t || vh(r) || e;
}
function hl(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
function Zn(r, e, t) {
  return Ir(r, ho(e, t));
}
function yh(r, e, t) {
  var i = Zn(r, e, t);
  return i > t ? t : i;
}
function Cd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ed(r) {
  return Object.assign({}, Cd(), r);
}
function Pd(r, e) {
  return e.reduce(function (t, i) {
    return (t[i] = r), t;
  }, {});
}
var wh = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Ed(typeof e != "number" ? e : Pd(e, gs))
  );
};
function _h(r) {
  var e,
    t = r.state,
    i = r.name,
    n = r.options,
    s = t.elements.arrow,
    o = t.modifiersData.popperOffsets,
    a = Mi(t.placement),
    l = hl(a),
    u = [Ft, fi].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!s || !o)) {
    var d = wh(n.padding, t),
      h = pl(s),
      f = l === "y" ? zt : Ft,
      p = l === "y" ? di : fi,
      m =
        t.rects.reference[c] + t.rects.reference[l] - o[l] - t.rects.popper[c],
      y = o[l] - t.rects.reference[l],
      T = vs(s),
      _ = T ? (l === "y" ? T.clientHeight || 0 : T.clientWidth || 0) : 0,
      x = m / 2 - y / 2,
      g = d[f],
      C = _ - h[c] - d[p],
      E = _ / 2 - h[c] / 2 + x,
      A = Zn(g, E, C),
      M = l;
    t.modifiersData[i] = ((e = {}), (e[M] = A), (e.centerOffset = A - E), e);
  }
}
function bh(r) {
  var e = r.state,
    t = r.options,
    i = t.element,
    n = i === void 0 ? "[data-popper-arrow]" : i;
  n != null &&
    ((typeof n == "string" && ((n = e.elements.popper.querySelector(n)), !n)) ||
      (xd(e.elements.popper, n) && (e.elements.arrow = n)));
}
const Sh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: _h,
  effect: bh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Sn(r) {
  return r.split("-")[1];
}
var Th = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function xh(r, e) {
  var t = r.x,
    i = r.y,
    n = e.devicePixelRatio || 1;
  return { x: _n(t * n) / n || 0, y: _n(i * n) / n || 0 };
}
function pu(r) {
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
    h = o.x,
    f = h === void 0 ? 0 : h,
    p = o.y,
    m = p === void 0 ? 0 : p,
    y = typeof c == "function" ? c({ x: f, y: m }) : { x: f, y: m };
  (f = y.x), (m = y.y);
  var T = o.hasOwnProperty("x"),
    _ = o.hasOwnProperty("y"),
    x = Ft,
    g = zt,
    C = window;
  if (u) {
    var E = vs(t),
      A = "clientHeight",
      M = "clientWidth";
    if (
      (E === ei(t) &&
        ((E = ur(t)),
        Hi(E).position !== "static" &&
          a === "absolute" &&
          ((A = "scrollHeight"), (M = "scrollWidth"))),
      (E = E),
      n === zt || ((n === Ft || n === fi) && s === cs))
    ) {
      g = di;
      var I = d && E === C && C.visualViewport ? C.visualViewport.height : E[A];
      (m -= I - i.height), (m *= l ? 1 : -1);
    }
    if (n === Ft || ((n === zt || n === di) && s === cs)) {
      x = fi;
      var D = d && E === C && C.visualViewport ? C.visualViewport.width : E[M];
      (f -= D - i.width), (f *= l ? 1 : -1);
    }
  }
  var z = Object.assign({ position: a }, u && Th),
    S = c === !0 ? xh({ x: f, y: m }, ei(t)) : { x: f, y: m };
  if (((f = S.x), (m = S.y), l)) {
    var P;
    return Object.assign(
      {},
      z,
      ((P = {}),
      (P[g] = _ ? "0" : ""),
      (P[x] = T ? "0" : ""),
      (P.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + f + "px, " + m + "px)"
          : "translate3d(" + f + "px, " + m + "px, 0)"),
      P)
    );
  }
  return Object.assign(
    {},
    z,
    ((e = {}),
    (e[g] = _ ? m + "px" : ""),
    (e[x] = T ? f + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function Ch(r) {
  var e = r.state,
    t = r.options,
    i = t.gpuAcceleration,
    n = i === void 0 ? !0 : i,
    s = t.adaptive,
    o = s === void 0 ? !0 : s,
    a = t.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: Mi(e.placement),
      variation: Sn(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: n,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      pu(
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
        pu(
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
const Eh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ch,
  data: {},
};
var Rs = { passive: !0 };
function Ph(r) {
  var e = r.state,
    t = r.instance,
    i = r.options,
    n = i.scroll,
    s = n === void 0 ? !0 : n,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = ei(e.elements.popper),
    u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    s &&
      u.forEach(function (c) {
        c.addEventListener("scroll", t.update, Rs);
      }),
    a && l.addEventListener("resize", t.update, Rs),
    function () {
      s &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", t.update, Rs);
        }),
        a && l.removeEventListener("resize", t.update, Rs);
    }
  );
}
const Ah = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Ph,
  data: {},
};
var kh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ys(r) {
  return r.replace(/left|right|bottom|top/g, function (e) {
    return kh[e];
  });
}
var Oh = { start: "end", end: "start" };
function hu(r) {
  return r.replace(/start|end/g, function (e) {
    return Oh[e];
  });
}
function ml(r) {
  var e = ei(r),
    t = e.pageXOffset,
    i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
function gl(r) {
  return bn(ur(r)).left + ml(r).scrollLeft;
}
function Mh(r, e) {
  var t = ei(r),
    i = ur(r),
    n = t.visualViewport,
    s = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0;
  if (n) {
    (s = n.width), (o = n.height);
    var u = Td();
    (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: s, height: o, x: a + gl(r), y: l };
}
function Lh(r) {
  var e,
    t = ur(r),
    i = ml(r),
    n = (e = r.ownerDocument) == null ? void 0 : e.body,
    s = Ir(
      t.scrollWidth,
      t.clientWidth,
      n ? n.scrollWidth : 0,
      n ? n.clientWidth : 0
    ),
    o = Ir(
      t.scrollHeight,
      t.clientHeight,
      n ? n.scrollHeight : 0,
      n ? n.clientHeight : 0
    ),
    a = -i.scrollLeft + gl(r),
    l = -i.scrollTop;
  return (
    Hi(n || t).direction === "rtl" &&
      (a += Ir(t.clientWidth, n ? n.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function vl(r) {
  var e = Hi(r),
    t = e.overflow,
    i = e.overflowX,
    n = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + n + i);
}
function Ad(r) {
  return ["html", "body", "#document"].indexOf(Di(r)) >= 0
    ? r.ownerDocument.body
    : ui(r) && vl(r)
    ? r
    : Ad(Eo(r));
}
function Jn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Ad(r),
    n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
    s = ei(i),
    o = n ? [s].concat(s.visualViewport || [], vl(i) ? i : []) : i,
    a = e.concat(o);
  return n ? a : a.concat(Jn(Eo(o)));
}
function Ia(r) {
  return Object.assign({}, r, {
    left: r.x,
    top: r.y,
    right: r.x + r.width,
    bottom: r.y + r.height,
  });
}
function Dh(r, e) {
  var t = bn(r, !1, e === "fixed");
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
function mu(r, e, t) {
  return e === _d ? Ia(Mh(r, t)) : Br(e) ? Dh(e, t) : Ia(Lh(ur(r)));
}
function Ih(r) {
  var e = Jn(Eo(r)),
    t = ["absolute", "fixed"].indexOf(Hi(r).position) >= 0,
    i = t && ui(r) ? vs(r) : r;
  return Br(i)
    ? e.filter(function (n) {
        return Br(n) && xd(n, i) && Di(n) !== "body";
      })
    : [];
}
function Rh(r, e, t, i) {
  var n = e === "clippingParents" ? Ih(r) : [].concat(e),
    s = [].concat(n, [t]),
    o = s[0],
    a = s.reduce(function (l, u) {
      var c = mu(r, u, i);
      return (
        (l.top = Ir(c.top, l.top)),
        (l.right = ho(c.right, l.right)),
        (l.bottom = ho(c.bottom, l.bottom)),
        (l.left = Ir(c.left, l.left)),
        l
      );
    }, mu(r, o, i));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function kd(r) {
  var e = r.reference,
    t = r.element,
    i = r.placement,
    n = i ? Mi(i) : null,
    s = i ? Sn(i) : null,
    o = e.x + e.width / 2 - t.width / 2,
    a = e.y + e.height / 2 - t.height / 2,
    l;
  switch (n) {
    case zt:
      l = { x: o, y: e.y - t.height };
      break;
    case di:
      l = { x: o, y: e.y + e.height };
      break;
    case fi:
      l = { x: e.x + e.width, y: a };
      break;
    case Ft:
      l = { x: e.x - t.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var u = n ? hl(n) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case wn:
        l[u] = l[u] - (e[c] / 2 - t[c] / 2);
        break;
      case cs:
        l[u] = l[u] + (e[c] / 2 - t[c] / 2);
        break;
    }
  }
  return l;
}
function ds(r, e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.placement,
    n = i === void 0 ? r.placement : i,
    s = t.strategy,
    o = s === void 0 ? r.strategy : s,
    a = t.boundary,
    l = a === void 0 ? ih : a,
    u = t.rootBoundary,
    c = u === void 0 ? _d : u,
    d = t.elementContext,
    h = d === void 0 ? Mn : d,
    f = t.altBoundary,
    p = f === void 0 ? !1 : f,
    m = t.padding,
    y = m === void 0 ? 0 : m,
    T = Ed(typeof y != "number" ? y : Pd(y, gs)),
    _ = h === Mn ? rh : Mn,
    x = r.rects.popper,
    g = r.elements[p ? _ : h],
    C = Rh(Br(g) ? g : g.contextElement || ur(r.elements.popper), l, c, o),
    E = bn(r.elements.reference),
    A = kd({ reference: E, element: x, strategy: "absolute", placement: n }),
    M = Ia(Object.assign({}, x, A)),
    I = h === Mn ? M : E,
    D = {
      top: C.top - I.top + T.top,
      bottom: I.bottom - C.bottom + T.bottom,
      left: C.left - I.left + T.left,
      right: I.right - C.right + T.right,
    },
    z = r.modifiersData.offset;
  if (h === Mn && z) {
    var S = z[n];
    Object.keys(D).forEach(function (P) {
      var v = [fi, di].indexOf(P) >= 0 ? 1 : -1,
        w = [zt, di].indexOf(P) >= 0 ? "y" : "x";
      D[P] += S[w] * v;
    });
  }
  return D;
}
function Nh(r, e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.placement,
    n = t.boundary,
    s = t.rootBoundary,
    o = t.padding,
    a = t.flipVariations,
    l = t.allowedAutoPlacements,
    u = l === void 0 ? bd : l,
    c = Sn(i),
    d = c
      ? a
        ? du
        : du.filter(function (p) {
            return Sn(p) === c;
          })
      : gs,
    h = d.filter(function (p) {
      return u.indexOf(p) >= 0;
    });
  h.length === 0 && (h = d);
  var f = h.reduce(function (p, m) {
    return (
      (p[m] = ds(r, { placement: m, boundary: n, rootBoundary: s, padding: o })[
        Mi(m)
      ]),
      p
    );
  }, {});
  return Object.keys(f).sort(function (p, m) {
    return f[p] - f[m];
  });
}
function zh(r) {
  if (Mi(r) === dl) return [];
  var e = Ys(r);
  return [hu(r), e, hu(e)];
}
function Fh(r) {
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
        h = t.altBoundary,
        f = t.flipVariations,
        p = f === void 0 ? !0 : f,
        m = t.allowedAutoPlacements,
        y = e.options.placement,
        T = Mi(y),
        _ = T === y,
        x = l || (_ || !p ? [Ys(y)] : zh(y)),
        g = [y].concat(x).reduce(function (Q, ie) {
          return Q.concat(
            Mi(ie) === dl
              ? Nh(e, {
                  placement: ie,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: p,
                  allowedAutoPlacements: m,
                })
              : ie
          );
        }, []),
        C = e.rects.reference,
        E = e.rects.popper,
        A = new Map(),
        M = !0,
        I = g[0],
        D = 0;
      D < g.length;
      D++
    ) {
      var z = g[D],
        S = Mi(z),
        P = Sn(z) === wn,
        v = [zt, di].indexOf(S) >= 0,
        w = v ? "width" : "height",
        b = ds(e, {
          placement: z,
          boundary: c,
          rootBoundary: d,
          altBoundary: h,
          padding: u,
        }),
        k = v ? (P ? fi : Ft) : P ? di : zt;
      C[w] > E[w] && (k = Ys(k));
      var L = Ys(k),
        R = [];
      if (
        (s && R.push(b[S] <= 0),
        a && R.push(b[k] <= 0, b[L] <= 0),
        R.every(function (Q) {
          return Q;
        }))
      ) {
        (I = z), (M = !1);
        break;
      }
      A.set(z, R);
    }
    if (M)
      for (
        var O = p ? 3 : 1,
          q = function (ie) {
            var ue = g.find(function (de) {
              var be = A.get(de);
              if (be)
                return be.slice(0, ie).every(function (xe) {
                  return xe;
                });
            });
            if (ue) return (I = ue), "break";
          },
          H = O;
        H > 0;
        H--
      ) {
        var K = q(H);
        if (K === "break") break;
      }
    e.placement !== I &&
      ((e.modifiersData[i]._skip = !0), (e.placement = I), (e.reset = !0));
  }
}
const Bh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fh,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function gu(r, e, t) {
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
function vu(r) {
  return [zt, fi, di, Ft].some(function (e) {
    return r[e] >= 0;
  });
}
function qh(r) {
  var e = r.state,
    t = r.name,
    i = e.rects.reference,
    n = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = ds(e, { elementContext: "reference" }),
    a = ds(e, { altBoundary: !0 }),
    l = gu(o, i),
    u = gu(a, n, s),
    c = vu(l),
    d = vu(u);
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
const Vh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: qh,
};
function $h(r, e, t) {
  var i = Mi(r),
    n = [Ft, zt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * n),
    [Ft, fi].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function Hh(r) {
  var e = r.state,
    t = r.options,
    i = r.name,
    n = t.offset,
    s = n === void 0 ? [0, 0] : n,
    o = bd.reduce(function (c, d) {
      return (c[d] = $h(d, e.rects, s)), c;
    }, {}),
    a = o[e.placement],
    l = a.x,
    u = a.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += u)),
    (e.modifiersData[i] = o);
}
const Wh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Hh,
};
function jh(r) {
  var e = r.state,
    t = r.name;
  e.modifiersData[t] = kd({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const Gh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jh,
  data: {},
};
function Xh(r) {
  return r === "x" ? "y" : "x";
}
function Yh(r) {
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
    h = t.tether,
    f = h === void 0 ? !0 : h,
    p = t.tetherOffset,
    m = p === void 0 ? 0 : p,
    y = ds(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    T = Mi(e.placement),
    _ = Sn(e.placement),
    x = !_,
    g = hl(T),
    C = Xh(g),
    E = e.modifiersData.popperOffsets,
    A = e.rects.reference,
    M = e.rects.popper,
    I =
      typeof m == "function"
        ? m(Object.assign({}, e.rects, { placement: e.placement }))
        : m,
    D =
      typeof I == "number"
        ? { mainAxis: I, altAxis: I }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
    z = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    S = { x: 0, y: 0 };
  if (E) {
    if (s) {
      var P,
        v = g === "y" ? zt : Ft,
        w = g === "y" ? di : fi,
        b = g === "y" ? "height" : "width",
        k = E[g],
        L = k + y[v],
        R = k - y[w],
        O = f ? -M[b] / 2 : 0,
        q = _ === wn ? A[b] : M[b],
        H = _ === wn ? -M[b] : -A[b],
        K = e.elements.arrow,
        Q = f && K ? pl(K) : { width: 0, height: 0 },
        ie = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Cd(),
        ue = ie[v],
        de = ie[w],
        be = Zn(0, A[b], Q[b]),
        xe = x ? A[b] / 2 - O - be - ue - D.mainAxis : q - be - ue - D.mainAxis,
        et = x
          ? -A[b] / 2 + O + be + de + D.mainAxis
          : H + be + de + D.mainAxis,
        ke = e.elements.arrow && vs(e.elements.arrow),
        qe = ke ? (g === "y" ? ke.clientTop || 0 : ke.clientLeft || 0) : 0,
        ne = (P = z?.[g]) != null ? P : 0,
        ye = k + xe - ne - qe,
        Ve = k + et - ne,
        $e = Zn(f ? ho(L, ye) : L, k, f ? Ir(R, Ve) : R);
      (E[g] = $e), (S[g] = $e - k);
    }
    if (a) {
      var N,
        Xe = g === "x" ? zt : Ft,
        At = g === "x" ? di : fi,
        Ye = E[C],
        fe = C === "y" ? "height" : "width",
        wt = Ye + y[Xe],
        st = Ye - y[At],
        qt = [zt, Ft].indexOf(T) !== -1,
        Ce = (N = z?.[C]) != null ? N : 0,
        Vt = qt ? wt : Ye - A[fe] - M[fe] - Ce + D.altAxis,
        we = qt ? Ye + A[fe] + M[fe] - Ce - D.altAxis : st,
        ot = f && qt ? yh(Vt, Ye, we) : Zn(f ? Vt : wt, Ye, f ? we : st);
      (E[C] = ot), (S[C] = ot - Ye);
    }
    e.modifiersData[i] = S;
  }
}
const Uh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yh,
  requiresIfExists: ["offset"],
};
function Kh(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
function Qh(r) {
  return r === ei(r) || !ui(r) ? ml(r) : Kh(r);
}
function Zh(r) {
  var e = r.getBoundingClientRect(),
    t = _n(e.width) / r.offsetWidth || 1,
    i = _n(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
function Jh(r, e, t) {
  t === void 0 && (t = !1);
  var i = ui(e),
    n = ui(e) && Zh(e),
    s = ur(e),
    o = bn(r, n, t),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (i || (!i && !t)) &&
      ((Di(e) !== "body" || vl(s)) && (a = Qh(e)),
      ui(e)
        ? ((l = bn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = gl(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function em(r) {
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
function tm(r) {
  var e = em(r);
  return ph.reduce(function (t, i) {
    return t.concat(
      e.filter(function (n) {
        return n.phase === i;
      })
    );
  }, []);
}
function im(r) {
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
function rm(r) {
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
var yu = { placement: "bottom", modifiers: [], strategy: "absolute" };
function wu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function nm(r) {
  r === void 0 && (r = {});
  var e = r,
    t = e.defaultModifiers,
    i = t === void 0 ? [] : t,
    n = e.defaultOptions,
    s = n === void 0 ? yu : n;
  return function (a, l, u) {
    u === void 0 && (u = s);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, yu, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      h = !1,
      f = {
        state: c,
        setOptions: function (T) {
          var _ = typeof T == "function" ? T(c.options) : T;
          m(),
            (c.options = Object.assign({}, s, c.options, _)),
            (c.scrollParents = {
              reference: Br(a)
                ? Jn(a)
                : a.contextElement
                ? Jn(a.contextElement)
                : [],
              popper: Jn(l),
            });
          var x = tm(rm([].concat(i, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (g) {
              return g.enabled;
            })),
            p(),
            f.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var T = c.elements,
              _ = T.reference,
              x = T.popper;
            if (wu(_, x)) {
              (c.rects = {
                reference: Jh(_, vs(x), c.options.strategy === "fixed"),
                popper: pl(x),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (D) {
                  return (c.modifiersData[D.name] = Object.assign({}, D.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var C = c.orderedModifiers[g],
                  E = C.fn,
                  A = C.options,
                  M = A === void 0 ? {} : A,
                  I = C.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: M, name: I, instance: f }) || c);
              }
            }
          }
        },
        update: im(function () {
          return new Promise(function (y) {
            f.forceUpdate(), y(c);
          });
        }),
        destroy: function () {
          m(), (h = !0);
        },
      };
    if (!wu(a, l)) return f;
    f.setOptions(u).then(function (y) {
      !h && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function p() {
      c.orderedModifiers.forEach(function (y) {
        var T = y.name,
          _ = y.options,
          x = _ === void 0 ? {} : _,
          g = y.effect;
        if (typeof g == "function") {
          var C = g({ state: c, name: T, instance: f, options: x }),
            E = function () {};
          d.push(C || E);
        }
      });
    }
    function m() {
      d.forEach(function (y) {
        return y();
      }),
        (d = []);
    }
    return f;
  };
}
var sm = [Ah, Gh, Eh, Sd, Wh, Bh, Uh, Sh, Vh],
  om = nm({ defaultModifiers: sm }),
  am = "tippy-box",
  Od = "tippy-content",
  lm = "tippy-backdrop",
  Md = "tippy-arrow",
  Ld = "tippy-svg-arrow",
  Tr = { passive: !0, capture: !0 },
  Dd = function () {
    return document.body;
  };
function Go(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i ?? (Array.isArray(t) ? t[e] : t);
  }
  return r;
}
function yl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Id(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
function _u(r, e) {
  if (e === 0) return r;
  var t;
  return function (i) {
    clearTimeout(t),
      (t = setTimeout(function () {
        r(i);
      }, e));
  };
}
function um(r) {
  return r.split(/\s+/).filter(Boolean);
}
function en(r) {
  return [].concat(r);
}
function bu(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
function cm(r) {
  return r.filter(function (e, t) {
    return r.indexOf(e) === t;
  });
}
function dm(r) {
  return r.split("-")[0];
}
function mo(r) {
  return [].slice.call(r);
}
function Su(r) {
  return Object.keys(r).reduce(function (e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
function es() {
  return document.createElement("div");
}
function Po(r) {
  return ["Element", "Fragment"].some(function (e) {
    return yl(r, e);
  });
}
function fm(r) {
  return yl(r, "NodeList");
}
function pm(r) {
  return yl(r, "MouseEvent");
}
function hm(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
function mm(r) {
  return Po(r)
    ? [r]
    : fm(r)
    ? mo(r)
    : Array.isArray(r)
    ? r
    : mo(document.querySelectorAll(r));
}
function Xo(r, e) {
  r.forEach(function (t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Tu(r, e) {
  r.forEach(function (t) {
    t && t.setAttribute("data-state", e);
  });
}
function gm(r) {
  var e,
    t = en(r),
    i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body
    ? i.ownerDocument
    : document;
}
function vm(r, e) {
  var t = e.clientX,
    i = e.clientY;
  return r.every(function (n) {
    var s = n.popperRect,
      o = n.popperState,
      a = n.props,
      l = a.interactiveBorder,
      u = dm(o.placement),
      c = o.modifiersData.offset;
    if (!c) return !0;
    var d = u === "bottom" ? c.top.y : 0,
      h = u === "top" ? c.bottom.y : 0,
      f = u === "right" ? c.left.x : 0,
      p = u === "left" ? c.right.x : 0,
      m = s.top - i + d > l,
      y = i - s.bottom - h > l,
      T = s.left - t + f > l,
      _ = t - s.right - p > l;
    return m || y || T || _;
  });
}
function Yo(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
    r[i](n, t);
  });
}
function xu(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t)) return !0;
    t =
      t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var Ci = { isTouch: !1 },
  Cu = 0;
function ym() {
  Ci.isTouch ||
    ((Ci.isTouch = !0),
    window.performance && document.addEventListener("mousemove", Rd));
}
function Rd() {
  var r = performance.now();
  r - Cu < 20 &&
    ((Ci.isTouch = !1), document.removeEventListener("mousemove", Rd)),
    (Cu = r);
}
function wm() {
  var r = document.activeElement;
  if (hm(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
function _m() {
  document.addEventListener("touchstart", ym, Tr),
    window.addEventListener("blur", wm);
}
var bm = typeof window < "u" && typeof document < "u",
  Sm = bm ? !!window.msCrypto : !1,
  Tm = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  xm = {
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
  yi = Object.assign(
    {
      appendTo: Dd,
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
    Tm,
    xm
  ),
  Cm = Object.keys(yi),
  Em = function (e) {
    var t = Object.keys(e);
    t.forEach(function (i) {
      yi[i] = e[i];
    });
  };
function Nd(r) {
  var e = r.plugins || [],
    t = e.reduce(function (i, n) {
      var s = n.name,
        o = n.defaultValue;
      if (s) {
        var a;
        i[s] = r[s] !== void 0 ? r[s] : (a = yi[s]) != null ? a : o;
      }
      return i;
    }, {});
  return Object.assign({}, r, t);
}
function Pm(r, e) {
  var t = e ? Object.keys(Nd(Object.assign({}, yi, { plugins: e }))) : Cm,
    i = t.reduce(function (n, s) {
      var o = (r.getAttribute("data-tippy-" + s) || "").trim();
      if (!o) return n;
      if (s === "content") n[s] = o;
      else
        try {
          n[s] = JSON.parse(o);
        } catch {
          n[s] = o;
        }
      return n;
    }, {});
  return i;
}
function Eu(r, e) {
  var t = Object.assign(
    {},
    e,
    { content: Id(e.content, [r]) },
    e.ignoreAttributes ? {} : Pm(r, e.plugins)
  );
  return (
    (t.aria = Object.assign({}, yi.aria, t.aria)),
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
var Am = function () {
  return "innerHTML";
};
function Ra(r, e) {
  r[Am()] = e;
}
function Pu(r) {
  var e = es();
  return (
    r === !0
      ? (e.className = Md)
      : ((e.className = Ld), Po(r) ? e.appendChild(r) : Ra(e, r)),
    e
  );
}
function Au(r, e) {
  Po(e.content)
    ? (Ra(r, ""), r.appendChild(e.content))
    : typeof e.content != "function" &&
      (e.allowHTML ? Ra(r, e.content) : (r.textContent = e.content));
}
function Na(r) {
  var e = r.firstElementChild,
    t = mo(e.children);
  return {
    box: e,
    content: t.find(function (i) {
      return i.classList.contains(Od);
    }),
    arrow: t.find(function (i) {
      return i.classList.contains(Md) || i.classList.contains(Ld);
    }),
    backdrop: t.find(function (i) {
      return i.classList.contains(lm);
    }),
  };
}
function zd(r) {
  var e = es(),
    t = es();
  (t.className = am),
    t.setAttribute("data-state", "hidden"),
    t.setAttribute("tabindex", "-1");
  var i = es();
  (i.className = Od),
    i.setAttribute("data-state", "hidden"),
    Au(i, r.props),
    e.appendChild(t),
    t.appendChild(i),
    n(r.props, r.props);
  function n(s, o) {
    var a = Na(e),
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
        Au(u, r.props),
      o.arrow
        ? c
          ? s.arrow !== o.arrow &&
            (l.removeChild(c), l.appendChild(Pu(o.arrow)))
          : l.appendChild(Pu(o.arrow))
        : c && l.removeChild(c);
  }
  return { popper: e, onUpdate: n };
}
zd.$$tippy = !0;
var km = 1,
  Ns = [],
  Uo = [];
function Om(r, e) {
  var t = Eu(r, Object.assign({}, yi, Nd(Su(e)))),
    i,
    n,
    s,
    o = !1,
    a = !1,
    l = !1,
    u = !1,
    c,
    d,
    h,
    f = [],
    p = _u(ye, t.interactiveDebounce),
    m,
    y = km++,
    T = null,
    _ = cm(t.plugins),
    x = {
      isEnabled: !0,
      isVisible: !1,
      isDestroyed: !1,
      isMounted: !1,
      isShown: !1,
    },
    g = {
      id: y,
      reference: r,
      popper: es(),
      popperInstance: T,
      props: t,
      state: x,
      plugins: _,
      clearDelayTimeouts: Vt,
      setProps: we,
      setContent: ot,
      show: kt,
      hide: pi,
      hideWithInteractivity: fr,
      enable: qt,
      disable: Ce,
      unmount: Oe,
      destroy: Vr,
    };
  if (!t.render) return g;
  var C = t.render(g),
    E = C.popper,
    A = C.onUpdate;
  E.setAttribute("data-tippy-root", ""),
    (E.id = "tippy-" + g.id),
    (g.popper = E),
    (r._tippy = g),
    (E._tippy = g);
  var M = _.map(function (F) {
      return F.fn(g);
    }),
    I = r.hasAttribute("aria-expanded");
  return (
    ke(),
    O(),
    k(),
    L("onCreate", [g]),
    t.showOnCreate && wt(),
    E.addEventListener("mouseenter", function () {
      g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
    }),
    E.addEventListener("mouseleave", function () {
      g.props.interactive &&
        g.props.trigger.indexOf("mouseenter") >= 0 &&
        v().addEventListener("mousemove", p);
    }),
    g
  );
  function D() {
    var F = g.props.touch;
    return Array.isArray(F) ? F : [F, 0];
  }
  function z() {
    return D()[0] === "hold";
  }
  function S() {
    var F;
    return !!((F = g.props.render) != null && F.$$tippy);
  }
  function P() {
    return m || r;
  }
  function v() {
    var F = P().parentNode;
    return F ? gm(F) : document;
  }
  function w() {
    return Na(E);
  }
  function b(F) {
    return (g.state.isMounted && !g.state.isVisible) ||
      Ci.isTouch ||
      (c && c.type === "focus")
      ? 0
      : Go(g.props.delay, F ? 0 : 1, yi.delay);
  }
  function k(F) {
    F === void 0 && (F = !1),
      (E.style.pointerEvents = g.props.interactive && !F ? "" : "none"),
      (E.style.zIndex = "" + g.props.zIndex);
  }
  function L(F, W, X) {
    if (
      (X === void 0 && (X = !0),
      M.forEach(function (re) {
        re[F] && re[F].apply(re, W);
      }),
      X)
    ) {
      var oe;
      (oe = g.props)[F].apply(oe, W);
    }
  }
  function R() {
    var F = g.props.aria;
    if (F.content) {
      var W = "aria-" + F.content,
        X = E.id,
        oe = en(g.props.triggerTarget || r);
      oe.forEach(function (re) {
        var Y = re.getAttribute(W);
        if (g.state.isVisible) re.setAttribute(W, Y ? Y + " " + X : X);
        else {
          var Ne = Y && Y.replace(X, "").trim();
          Ne ? re.setAttribute(W, Ne) : re.removeAttribute(W);
        }
      });
    }
  }
  function O() {
    if (!(I || !g.props.aria.expanded)) {
      var F = en(g.props.triggerTarget || r);
      F.forEach(function (W) {
        g.props.interactive
          ? W.setAttribute(
              "aria-expanded",
              g.state.isVisible && W === P() ? "true" : "false"
            )
          : W.removeAttribute("aria-expanded");
      });
    }
  }
  function q() {
    v().removeEventListener("mousemove", p),
      (Ns = Ns.filter(function (F) {
        return F !== p;
      }));
  }
  function H(F) {
    if (!(Ci.isTouch && (l || F.type === "mousedown"))) {
      var W = (F.composedPath && F.composedPath()[0]) || F.target;
      if (!(g.props.interactive && xu(E, W))) {
        if (
          en(g.props.triggerTarget || r).some(function (X) {
            return xu(X, W);
          })
        ) {
          if (
            Ci.isTouch ||
            (g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
          )
            return;
        } else L("onClickOutside", [g, F]);
        g.props.hideOnClick === !0 &&
          (g.clearDelayTimeouts(),
          g.hide(),
          (a = !0),
          setTimeout(function () {
            a = !1;
          }),
          g.state.isMounted || ue());
      }
    }
  }
  function K() {
    l = !0;
  }
  function Q() {
    l = !1;
  }
  function ie() {
    var F = v();
    F.addEventListener("mousedown", H, !0),
      F.addEventListener("touchend", H, Tr),
      F.addEventListener("touchstart", Q, Tr),
      F.addEventListener("touchmove", K, Tr);
  }
  function ue() {
    var F = v();
    F.removeEventListener("mousedown", H, !0),
      F.removeEventListener("touchend", H, Tr),
      F.removeEventListener("touchstart", Q, Tr),
      F.removeEventListener("touchmove", K, Tr);
  }
  function de(F, W) {
    xe(F, function () {
      !g.state.isVisible && E.parentNode && E.parentNode.contains(E) && W();
    });
  }
  function be(F, W) {
    xe(F, W);
  }
  function xe(F, W) {
    var X = w().box;
    function oe(re) {
      re.target === X && (Yo(X, "remove", oe), W());
    }
    if (F === 0) return W();
    Yo(X, "remove", d), Yo(X, "add", oe), (d = oe);
  }
  function et(F, W, X) {
    X === void 0 && (X = !1);
    var oe = en(g.props.triggerTarget || r);
    oe.forEach(function (re) {
      re.addEventListener(F, W, X),
        f.push({ node: re, eventType: F, handler: W, options: X });
    });
  }
  function ke() {
    z() &&
      (et("touchstart", ne, { passive: !0 }),
      et("touchend", Ve, { passive: !0 })),
      um(g.props.trigger).forEach(function (F) {
        if (F !== "manual")
          switch ((et(F, ne), F)) {
            case "mouseenter":
              et("mouseleave", Ve);
              break;
            case "focus":
              et(Sm ? "focusout" : "blur", $e);
              break;
            case "focusin":
              et("focusout", $e);
              break;
          }
      });
  }
  function qe() {
    f.forEach(function (F) {
      var W = F.node,
        X = F.eventType,
        oe = F.handler,
        re = F.options;
      W.removeEventListener(X, oe, re);
    }),
      (f = []);
  }
  function ne(F) {
    var W,
      X = !1;
    if (!(!g.state.isEnabled || N(F) || a)) {
      var oe = ((W = c) == null ? void 0 : W.type) === "focus";
      (c = F),
        (m = F.currentTarget),
        O(),
        !g.state.isVisible &&
          pm(F) &&
          Ns.forEach(function (re) {
            return re(F);
          }),
        F.type === "click" &&
        (g.props.trigger.indexOf("mouseenter") < 0 || o) &&
        g.props.hideOnClick !== !1 &&
        g.state.isVisible
          ? (X = !0)
          : wt(F),
        F.type === "click" && (o = !X),
        X && !oe && st(F);
    }
  }
  function ye(F) {
    var W = F.target,
      X = P().contains(W) || E.contains(W);
    if (!(F.type === "mousemove" && X)) {
      var oe = fe()
        .concat(E)
        .map(function (re) {
          var Y,
            Ne = re._tippy,
            Ue = (Y = Ne.popperInstance) == null ? void 0 : Y.state;
          return Ue
            ? {
                popperRect: re.getBoundingClientRect(),
                popperState: Ue,
                props: t,
              }
            : null;
        })
        .filter(Boolean);
      vm(oe, F) && (q(), st(F));
    }
  }
  function Ve(F) {
    var W = N(F) || (g.props.trigger.indexOf("click") >= 0 && o);
    if (!W) {
      if (g.props.interactive) {
        g.hideWithInteractivity(F);
        return;
      }
      st(F);
    }
  }
  function $e(F) {
    (g.props.trigger.indexOf("focusin") < 0 && F.target !== P()) ||
      (g.props.interactive && F.relatedTarget && E.contains(F.relatedTarget)) ||
      st(F);
  }
  function N(F) {
    return Ci.isTouch ? z() !== F.type.indexOf("touch") >= 0 : !1;
  }
  function Xe() {
    At();
    var F = g.props,
      W = F.popperOptions,
      X = F.placement,
      oe = F.offset,
      re = F.getReferenceClientRect,
      Y = F.moveTransition,
      Ne = S() ? Na(E).arrow : null,
      Ue = re
        ? {
            getBoundingClientRect: re,
            contextElement: re.contextElement || P(),
          }
        : r,
      Ot = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function (mi) {
          var at = mi.state;
          if (S()) {
            var pr = w(),
              J = pr.box;
            ["placement", "reference-hidden", "escaped"].forEach(function (G) {
              G === "placement"
                ? J.setAttribute("data-placement", at.placement)
                : at.attributes.popper["data-popper-" + G]
                ? J.setAttribute("data-" + G, "")
                : J.removeAttribute("data-" + G);
            }),
              (at.attributes.popper = {});
          }
        },
      },
      He = [
        { name: "offset", options: { offset: oe } },
        {
          name: "preventOverflow",
          options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
        },
        { name: "flip", options: { padding: 5 } },
        { name: "computeStyles", options: { adaptive: !Y } },
        Ot,
      ];
    S() &&
      Ne &&
      He.push({ name: "arrow", options: { element: Ne, padding: 3 } }),
      He.push.apply(He, W?.modifiers || []),
      (g.popperInstance = om(
        Ue,
        E,
        Object.assign({}, W, { placement: X, onFirstUpdate: h, modifiers: He })
      ));
  }
  function At() {
    g.popperInstance && (g.popperInstance.destroy(), (g.popperInstance = null));
  }
  function Ye() {
    var F = g.props.appendTo,
      W,
      X = P();
    (g.props.interactive && F === Dd) || F === "parent"
      ? (W = X.parentNode)
      : (W = Id(F, [X])),
      W.contains(E) || W.appendChild(E),
      (g.state.isMounted = !0),
      Xe();
  }
  function fe() {
    return mo(E.querySelectorAll("[data-tippy-root]"));
  }
  function wt(F) {
    g.clearDelayTimeouts(), F && L("onTrigger", [g, F]), ie();
    var W = b(!0),
      X = D(),
      oe = X[0],
      re = X[1];
    Ci.isTouch && oe === "hold" && re && (W = re),
      W
        ? (i = setTimeout(function () {
            g.show();
          }, W))
        : g.show();
  }
  function st(F) {
    if (
      (g.clearDelayTimeouts(), L("onUntrigger", [g, F]), !g.state.isVisible)
    ) {
      ue();
      return;
    }
    if (
      !(
        g.props.trigger.indexOf("mouseenter") >= 0 &&
        g.props.trigger.indexOf("click") >= 0 &&
        ["mouseleave", "mousemove"].indexOf(F.type) >= 0 &&
        o
      )
    ) {
      var W = b(!1);
      W
        ? (n = setTimeout(function () {
            g.state.isVisible && g.hide();
          }, W))
        : (s = requestAnimationFrame(function () {
            g.hide();
          }));
    }
  }
  function qt() {
    g.state.isEnabled = !0;
  }
  function Ce() {
    g.hide(), (g.state.isEnabled = !1);
  }
  function Vt() {
    clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
  }
  function we(F) {
    if (!g.state.isDestroyed) {
      L("onBeforeUpdate", [g, F]), qe();
      var W = g.props,
        X = Eu(r, Object.assign({}, W, Su(F), { ignoreAttributes: !0 }));
      (g.props = X),
        ke(),
        W.interactiveDebounce !== X.interactiveDebounce &&
          (q(), (p = _u(ye, X.interactiveDebounce))),
        W.triggerTarget && !X.triggerTarget
          ? en(W.triggerTarget).forEach(function (oe) {
              oe.removeAttribute("aria-expanded");
            })
          : X.triggerTarget && r.removeAttribute("aria-expanded"),
        O(),
        k(),
        A && A(W, X),
        g.popperInstance &&
          (Xe(),
          fe().forEach(function (oe) {
            requestAnimationFrame(oe._tippy.popperInstance.forceUpdate);
          })),
        L("onAfterUpdate", [g, F]);
    }
  }
  function ot(F) {
    g.setProps({ content: F });
  }
  function kt() {
    var F = g.state.isVisible,
      W = g.state.isDestroyed,
      X = !g.state.isEnabled,
      oe = Ci.isTouch && !g.props.touch,
      re = Go(g.props.duration, 0, yi.duration);
    if (
      !(F || W || X || oe) &&
      !P().hasAttribute("disabled") &&
      (L("onShow", [g], !1), g.props.onShow(g) !== !1)
    ) {
      if (
        ((g.state.isVisible = !0),
        S() && (E.style.visibility = "visible"),
        k(),
        ie(),
        g.state.isMounted || (E.style.transition = "none"),
        S())
      ) {
        var Y = w(),
          Ne = Y.box,
          Ue = Y.content;
        Xo([Ne, Ue], 0);
      }
      (h = function () {
        var He;
        if (!(!g.state.isVisible || u)) {
          if (
            ((u = !0),
            (E.style.transition = g.props.moveTransition),
            S() && g.props.animation)
          ) {
            var hi = w(),
              mi = hi.box,
              at = hi.content;
            Xo([mi, at], re), Tu([mi, at], "visible");
          }
          R(),
            O(),
            bu(Uo, g),
            (He = g.popperInstance) == null || He.forceUpdate(),
            L("onMount", [g]),
            g.props.animation &&
              S() &&
              be(re, function () {
                (g.state.isShown = !0), L("onShown", [g]);
              });
        }
      }),
        Ye();
    }
  }
  function pi() {
    var F = !g.state.isVisible,
      W = g.state.isDestroyed,
      X = !g.state.isEnabled,
      oe = Go(g.props.duration, 1, yi.duration);
    if (!(F || W || X) && (L("onHide", [g], !1), g.props.onHide(g) !== !1)) {
      if (
        ((g.state.isVisible = !1),
        (g.state.isShown = !1),
        (u = !1),
        (o = !1),
        S() && (E.style.visibility = "hidden"),
        q(),
        ue(),
        k(!0),
        S())
      ) {
        var re = w(),
          Y = re.box,
          Ne = re.content;
        g.props.animation && (Xo([Y, Ne], oe), Tu([Y, Ne], "hidden"));
      }
      R(), O(), g.props.animation ? S() && de(oe, g.unmount) : g.unmount();
    }
  }
  function fr(F) {
    v().addEventListener("mousemove", p), bu(Ns, p), p(F);
  }
  function Oe() {
    g.state.isVisible && g.hide(),
      g.state.isMounted &&
        (At(),
        fe().forEach(function (F) {
          F._tippy.unmount();
        }),
        E.parentNode && E.parentNode.removeChild(E),
        (Uo = Uo.filter(function (F) {
          return F !== g;
        })),
        (g.state.isMounted = !1),
        L("onHidden", [g]));
  }
  function Vr() {
    g.state.isDestroyed ||
      (g.clearDelayTimeouts(),
      g.unmount(),
      qe(),
      delete r._tippy,
      (g.state.isDestroyed = !0),
      L("onDestroy", [g]));
  }
}
function ys(r, e) {
  e === void 0 && (e = {});
  var t = yi.plugins.concat(e.plugins || []);
  _m();
  var i = Object.assign({}, e, { plugins: t }),
    n = mm(r),
    s = n.reduce(function (o, a) {
      var l = a && Om(a, i);
      return l && o.push(l), o;
    }, []);
  return Po(r) ? s[0] : s;
}
ys.defaultProps = yi;
ys.setDefaultProps = Em;
ys.currentInput = Ci;
Object.assign({}, Sd, {
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
});
ys.setDefaultProps({ render: zd });
const Mm = () => {
    const r = document.querySelectorAll("[data-tooltip]"),
      e = window.innerWidth < 768;
    r.forEach((t) => {
      ys(t, {
        content: t.getAttribute("data-tooltip"),
        placement: e ? "top" : "right",
        animation: "shift-away",
        arrow: !1,
        theme: "hm-tooltip",
        interactive: !0,
      });
    });
  },
  Lm = () => {
    Mm();
  };
V.registerPlugin(Z);
let Ko = [],
  ku;
const Ou = () => {
    Ko.forEach((t) => t.kill()), (Ko = []);
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
        c = V.timeline({
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
        Ko.push(c.scrollTrigger);
    });
  },
  Dm = () => {
    Ou(),
      window.addEventListener("resize", () => {
        clearTimeout(ku),
          (ku = setTimeout(() => {
            Ou(), Z.refresh();
          }, 150));
      });
  };
function Mu(r) {
  return (
    r !== null &&
    typeof r == "object" &&
    "constructor" in r &&
    r.constructor === Object
  );
}
function wl(r, e) {
  r === void 0 && (r = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => t.indexOf(i) < 0)
    .forEach((i) => {
      typeof r[i] > "u"
        ? (r[i] = e[i])
        : Mu(e[i]) &&
          Mu(r[i]) &&
          Object.keys(e[i]).length > 0 &&
          wl(r[i], e[i]);
    });
}
const Fd = {
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
function ci() {
  const r = typeof document < "u" ? document : {};
  return wl(r, Fd), r;
}
const Im = {
  document: Fd,
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
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  },
};
function yt() {
  const r = typeof window < "u" ? window : {};
  return wl(r, Im), r;
}
function Ui(r) {
  return (
    r === void 0 && (r = ""),
    r
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function Rm(r) {
  const e = r;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function go(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e);
}
function vo() {
  return Date.now();
}
function Nm(r) {
  const e = yt();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(r, null)),
    !t && r.currentStyle && (t = r.currentStyle),
    t || (t = r.style),
    t
  );
}
function zm(r, e) {
  e === void 0 && (e = "x");
  const t = yt();
  let i, n, s;
  const o = Nm(r);
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
function zs(r) {
  return (
    typeof r == "object" &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === "Object"
  );
}
function Fm(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function Gt() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !Fm(i)) {
      const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = n.length; s < o; s += 1) {
        const a = n[s],
          l = Object.getOwnPropertyDescriptor(i, a);
        l !== void 0 &&
          l.enumerable &&
          (zs(r[a]) && zs(i[a])
            ? i[a].__swiper__
              ? (r[a] = i[a])
              : Gt(r[a], i[a])
            : !zs(r[a]) && zs(i[a])
            ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Gt(r[a], i[a]))
            : (r[a] = i[a]));
      }
    }
  }
  return r;
}
function Fs(r, e, t) {
  r.style.setProperty(e, t);
}
function Bd(r) {
  let { swiper: e, targetPosition: t, side: i } = r;
  const n = yt(),
    s = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > s ? "next" : "prev",
    c = (h, f) => (u === "next" && h >= f) || (u === "prev" && h <= f),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const h = Math.max(Math.min((a - o) / l, 1), 0),
        f = 0.5 - Math.cos(h * Math.PI) / 2;
      let p = s + f * (t - s);
      if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [i]: p }), c(p, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: p });
          }),
          n.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = n.requestAnimationFrame(d);
    };
  d();
}
function ki(r, e) {
  e === void 0 && (e = "");
  const t = yt(),
    i = [...r.children];
  return (
    t.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      i.push(...r.assignedElements()),
    e ? i.filter((n) => n.matches(e)) : i
  );
}
function Bm(r, e) {
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
function qm(r, e) {
  const t = yt();
  let i = e.contains(r);
  return (
    !i &&
      t.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      ((i = [...e.assignedElements()].includes(r)), i || (i = Bm(r, e))),
    i
  );
}
function yo(r) {
  try {
    return;
  } catch {}
}
function fs(r, e) {
  e === void 0 && (e = []);
  const t = document.createElement(r);
  return t.classList.add(...(Array.isArray(e) ? e : Ui(e))), t;
}
function Vm(r) {
  const e = yt(),
    t = ci(),
    i = r.getBoundingClientRect(),
    n = t.body,
    s = r.clientTop || n.clientTop || 0,
    o = r.clientLeft || n.clientLeft || 0,
    a = r === e ? e.scrollY : r.scrollTop,
    l = r === e ? e.scrollX : r.scrollLeft;
  return { top: i.top + a - s, left: i.left + l - o };
}
function $m(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const i = r.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
  }
  return t;
}
function Hm(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const i = r.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
  }
  return t;
}
function tr(r, e) {
  return yt().getComputedStyle(r, null).getPropertyValue(e);
}
function Lu(r) {
  let e = r,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function Wm(r, e) {
  const t = [];
  let i = r.parentElement;
  for (; i; ) t.push(i), (i = i.parentElement);
  return t;
}
function Du(r, e, t) {
  const i = yt();
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
function Si(r) {
  return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
}
let Qo;
function jm() {
  const r = yt(),
    e = ci();
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
function qd() {
  return Qo || (Qo = jm()), Qo;
}
let Zo;
function Gm(r) {
  let { userAgent: e } = r === void 0 ? {} : r;
  const t = qd(),
    i = yt(),
    n = i.navigator.platform,
    s = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = i.screen.width,
    l = i.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = n === "Win32";
  let p = n === "MacIntel";
  const m = [
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
      p &&
      t.touch &&
      m.indexOf(`${a}x${l}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (p = !1)),
    u && !f && ((o.os = "android"), (o.android = !0)),
    (c || h || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Vd(r) {
  return r === void 0 && (r = {}), Zo || (Zo = Gm(r)), Zo;
}
let Jo;
function Xm() {
  const r = yt(),
    e = Vd();
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
function $d() {
  return Jo || (Jo = Xm()), Jo;
}
function Ym(r) {
  let { swiper: e, on: t, emit: i } = r;
  const n = yt();
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
            const { width: h, height: f } = e;
            let p = h,
              m = f;
            d.forEach((y) => {
              let { contentBoxSize: T, contentRect: _, target: x } = y;
              (x && x !== e.el) ||
                ((p = _ ? _.width : (T[0] || T).inlineSize),
                (m = _ ? _.height : (T[0] || T).blockSize));
            }),
              (p !== h || m !== f) && a();
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
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      l();
      return;
    }
    n.addEventListener("resize", a), n.addEventListener("orientationchange", c);
  }),
    t("destroy", () => {
      u(),
        n.removeEventListener("resize", a),
        n.removeEventListener("orientationchange", c);
    });
}
function Um(r) {
  let { swiper: e, extendParams: t, on: i, emit: n } = r;
  const s = [],
    o = yt(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        f = new h((p) => {
          if (e.__preventObserver__) return;
          if (p.length === 1) {
            n("observerUpdate", p[0]);
            return;
          }
          const m = function () {
            n("observerUpdate", p[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(m)
            : o.setTimeout(m, 0);
        });
      f.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(f);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = Wm(e.hostEl);
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
var Km = {
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
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[i](r), t;
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
          typeof e > "u"
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
function Qm() {
  const r = this;
  let e, t;
  const i = r.el;
  typeof r.params.width < "u" && r.params.width !== null
    ? (e = r.params.width)
    : (e = i.clientWidth),
    typeof r.params.height < "u" && r.params.height !== null
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
function Zm() {
  const r = this;
  function e(D, z) {
    return parseFloat(D.getPropertyValue(r.getDirectionLabel(z)) || 0);
  }
  const t = r.params,
    { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
    l = r.virtual && t.virtual.enabled,
    u = l ? r.virtual.slides.length : r.slides.length,
    c = ki(n, `.${r.params.slideClass}, swiper-slide`),
    d = l ? r.virtual.slides.length : c.length;
  let h = [];
  const f = [],
    p = [];
  let m = t.slidesOffsetBefore;
  typeof m == "function" && (m = t.slidesOffsetBefore.call(r));
  let y = t.slidesOffsetAfter;
  typeof y == "function" && (y = t.slidesOffsetAfter.call(r));
  const T = r.snapGrid.length,
    _ = r.slidesGrid.length;
  let x = t.spaceBetween,
    g = -m,
    C = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof x == "string" && x.indexOf("%") >= 0
    ? (x = (parseFloat(x.replace("%", "")) / 100) * s)
    : typeof x == "string" && (x = parseFloat(x)),
    (r.virtualSize = -x),
    c.forEach((D) => {
      o ? (D.style.marginLeft = "") : (D.style.marginRight = ""),
        (D.style.marginBottom = ""),
        (D.style.marginTop = "");
    }),
    t.centeredSlides &&
      t.cssMode &&
      (Fs(i, "--swiper-centered-offset-before", ""),
      Fs(i, "--swiper-centered-offset-after", ""));
  const A = t.grid && t.grid.rows > 1 && r.grid;
  A ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
  let M;
  const I =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (D) => typeof t.breakpoints[D].slidesPerView < "u"
    ).length > 0;
  for (let D = 0; D < d; D += 1) {
    M = 0;
    let z;
    if (
      (c[D] && (z = c[D]),
      A && r.grid.updateSlide(D, z, c),
      !(c[D] && tr(z, "display") === "none"))
    ) {
      if (t.slidesPerView === "auto") {
        I && (c[D].style[r.getDirectionLabel("width")] = "");
        const S = getComputedStyle(z),
          P = z.style.transform,
          v = z.style.webkitTransform;
        if (
          (P && (z.style.transform = "none"),
          v && (z.style.webkitTransform = "none"),
          t.roundLengths)
        )
          M = r.isHorizontal() ? Du(z, "width") : Du(z, "height");
        else {
          const w = e(S, "width"),
            b = e(S, "padding-left"),
            k = e(S, "padding-right"),
            L = e(S, "margin-left"),
            R = e(S, "margin-right"),
            O = S.getPropertyValue("box-sizing");
          if (O && O === "border-box") M = w + L + R;
          else {
            const { clientWidth: q, offsetWidth: H } = z;
            M = w + b + k + L + R + (H - q);
          }
        }
        P && (z.style.transform = P),
          v && (z.style.webkitTransform = v),
          t.roundLengths && (M = Math.floor(M));
      } else
        (M = (s - (t.slidesPerView - 1) * x) / t.slidesPerView),
          t.roundLengths && (M = Math.floor(M)),
          c[D] && (c[D].style[r.getDirectionLabel("width")] = `${M}px`);
      c[D] && (c[D].swiperSlideSize = M),
        p.push(M),
        t.centeredSlides
          ? ((g = g + M / 2 + C / 2 + x),
            C === 0 && D !== 0 && (g = g - s / 2 - x),
            D === 0 && (g = g - s / 2 - x),
            Math.abs(g) < 1 / 1e3 && (g = 0),
            t.roundLengths && (g = Math.floor(g)),
            E % t.slidesPerGroup === 0 && h.push(g),
            f.push(g))
          : (t.roundLengths && (g = Math.floor(g)),
            (E - Math.min(r.params.slidesPerGroupSkip, E)) %
              r.params.slidesPerGroup ===
              0 && h.push(g),
            f.push(g),
            (g = g + M + x)),
        (r.virtualSize += M + x),
        (C = M),
        (E += 1);
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, s) + y),
    o &&
      a &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (i.style.width = `${r.virtualSize + x}px`),
    t.setWrapperSize &&
      (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + x}px`),
    A && r.grid.updateWrapperSize(M, h),
    !t.centeredSlides)
  ) {
    const D = [];
    for (let z = 0; z < h.length; z += 1) {
      let S = h[z];
      t.roundLengths && (S = Math.floor(S)),
        h[z] <= r.virtualSize - s && D.push(S);
    }
    (h = D),
      Math.floor(r.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(r.virtualSize - s);
  }
  if (l && t.loop) {
    const D = p[0] + x;
    if (t.slidesPerGroup > 1) {
      const z = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
        ),
        S = D * t.slidesPerGroup;
      for (let P = 0; P < z; P += 1) h.push(h[h.length - 1] + S);
    }
    for (let z = 0; z < r.virtual.slidesBefore + r.virtual.slidesAfter; z += 1)
      t.slidesPerGroup === 1 && h.push(h[h.length - 1] + D),
        f.push(f[f.length - 1] + D),
        (r.virtualSize += D);
  }
  if ((h.length === 0 && (h = [0]), x !== 0)) {
    const D =
      r.isHorizontal() && o ? "marginLeft" : r.getDirectionLabel("marginRight");
    c.filter((z, S) =>
      !t.cssMode || t.loop ? !0 : S !== c.length - 1
    ).forEach((z) => {
      z.style[D] = `${x}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let D = 0;
    p.forEach((S) => {
      D += S + (x || 0);
    }),
      (D -= x);
    const z = D > s ? D - s : 0;
    h = h.map((S) => (S <= 0 ? -m : S > z ? z + y : S));
  }
  if (t.centerInsufficientSlides) {
    let D = 0;
    p.forEach((S) => {
      D += S + (x || 0);
    }),
      (D -= x);
    const z = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (D + z < s) {
      const S = (s - D - z) / 2;
      h.forEach((P, v) => {
        h[v] = P - S;
      }),
        f.forEach((P, v) => {
          f[v] = P + S;
        });
    }
  }
  if (
    (Object.assign(r, {
      slides: c,
      snapGrid: h,
      slidesGrid: f,
      slidesSizesGrid: p,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    Fs(i, "--swiper-centered-offset-before", `${-h[0]}px`),
      Fs(
        i,
        "--swiper-centered-offset-after",
        `${r.size / 2 - p[p.length - 1] / 2}px`
      );
    const D = -r.snapGrid[0],
      z = -r.slidesGrid[0];
    (r.snapGrid = r.snapGrid.map((S) => S + D)),
      (r.slidesGrid = r.slidesGrid.map((S) => S + z));
  }
  if (
    (d !== u && r.emit("slidesLengthChange"),
    h.length !== T &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit("snapGridLengthChange")),
    f.length !== _ && r.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const D = `${t.containerModifierClass}backface-hidden`,
      z = r.el.classList.contains(D);
    d <= t.maxBackfaceHiddenSlides
      ? z || r.el.classList.add(D)
      : z && r.el.classList.remove(D);
  }
}
function Jm(r) {
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
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      n = a > n ? a : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function eg() {
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
const Iu = (r, e, t) => {
  e && !r.classList.contains(t)
    ? r.classList.add(t)
    : !e && r.classList.contains(t) && r.classList.remove(t);
};
function tg(r) {
  r === void 0 && (r = (this && this.translate) || 0);
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: n, snapGrid: s } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
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
      h =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f = -(o - c),
      p = f + e.slidesSizesGrid[l],
      m = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
      y =
        (f >= 0 && f < e.size - 1) ||
        (p > 1 && p <= e.size) ||
        (f <= 0 && p >= e.size);
    y && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
      Iu(u, y, t.slideVisibleClass),
      Iu(u, m, t.slideFullyVisibleClass),
      (u.progress = n ? -d : d),
      (u.originalProgress = n ? -h : h);
  }
}
function ig(r) {
  const e = this;
  if (typeof r > "u") {
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
      h = e.slidesGrid[c],
      f = e.slidesGrid[d],
      p = e.slidesGrid[e.slidesGrid.length - 1],
      m = Math.abs(r);
    m >= h ? (a = (m - h) / p) : (a = (m + p - f) / p), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: a, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(r),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", n);
}
const ea = (r, e, t) => {
  e && !r.classList.contains(t)
    ? r.classList.add(t)
    : !e && r.classList.contains(t) && r.classList.remove(t);
};
function rg() {
  const r = this,
    { slides: e, params: t, slidesEl: i, activeIndex: n } = r,
    s = r.virtual && t.virtual.enabled,
    o = r.grid && t.grid && t.grid.rows > 1,
    a = (d) => ki(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
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
      ((c = Hm(l, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !c && (c = e[0]),
      (u = $m(l, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !u === 0 && (u = e[e.length - 1]))),
    e.forEach((d) => {
      ea(d, d === l, t.slideActiveClass),
        ea(d, d === c, t.slideNextClass),
        ea(d, d === u, t.slidePrevClass);
    }),
    r.emitSlidesClasses();
}
const Us = (r, e) => {
    if (!r || r.destroyed || !r.params) return;
    const t = () => (r.isElement ? "swiper-slide" : `.${r.params.slideClass}`),
      i = e.closest(t());
    if (i) {
      let n = i.querySelector(`.${r.params.lazyPreloaderClass}`);
      !n &&
        r.isElement &&
        (i.shadowRoot
          ? (n = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`))
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
  ta = (r, e) => {
    if (!r.slides[e]) return;
    const t = r.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  za = (r) => {
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
          a.includes(l.column) && ta(r, u);
        });
      return;
    }
    const s = n + i - 1;
    if (r.params.rewind || r.params.loop)
      for (let o = n - e; o <= s + e; o += 1) {
        const a = ((o % t) + t) % t;
        (a < n || a > s) && ta(r, a);
      }
    else
      for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
        o !== n && (o > s || o < n) && ta(r, o);
  };
function ng(r) {
  const { slidesGrid: e, params: t } = r,
    i = r.rtlTranslate ? r.translate : -r.translate;
  let n;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < "u"
      ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
        ? (n = s)
        : i >= e[s] && i < e[s + 1] && (n = s + 1)
      : i >= e[s] && (n = s);
  return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function sg(r) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: n, activeIndex: s, realIndex: o, snapIndex: a } = e;
  let l = r,
    u;
  const c = (f) => {
    let p = f - e.virtual.slidesBefore;
    return (
      p < 0 && (p = e.virtual.slides.length + p),
      p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
      p
    );
  };
  if ((typeof l > "u" && (l = ng(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
  let h;
  if (e.virtual && n.virtual.enabled && n.loop) h = c(l);
  else if (d) {
    const f = e.slides.find((m) => m.column === l);
    let p = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(p) && (p = Math.max(e.slides.indexOf(f), 0)),
      (h = Math.floor(p / n.grid.rows));
  } else if (e.slides[l]) {
    const f = e.slides[l].getAttribute("data-swiper-slide-index");
    f ? (h = parseInt(f, 10)) : (h = l);
  } else h = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: s,
    activeIndex: l,
  }),
    e.initialized && za(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
}
function og(r, e) {
  const t = this,
    i = t.params;
  let n = r.closest(`.${i.slideClass}, swiper-slide`);
  !n &&
    t.isElement &&
    e &&
    e.length > 1 &&
    e.includes(r) &&
    [...e.slice(e.indexOf(r) + 1, e.length)].forEach((a) => {
      !n && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (n = a);
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
var ag = {
  updateSize: Qm,
  updateSlides: Zm,
  updateAutoHeight: Jm,
  updateSlidesOffset: eg,
  updateSlidesProgress: tg,
  updateProgress: ig,
  updateSlidesClasses: rg,
  updateActiveIndex: sg,
  updateClickedSlide: og,
};
function lg(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -n : n;
  if (t.cssMode) return n;
  let o = zm(s, r);
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function ug(r, e) {
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
function cg() {
  return -this.snapGrid[0];
}
function dg() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function fg(r, e, t, i, n) {
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
          Bd({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
        t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
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
var pg = {
  getTranslate: lg,
  setTranslate: ug,
  minTranslate: cg,
  maxTranslate: dg,
  translateTo: fg,
};
function hg(r, e) {
  const t = this;
  t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${r}ms`),
    (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
    t.emit("setTransition", r, e);
}
function Hd(r) {
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
function mg(r, e) {
  r === void 0 && (r = !0);
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    Hd({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
}
function gg(r, e) {
  r === void 0 && (r = !0);
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      Hd({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
}
var vg = { setTransition: hg, transitionStart: mg, transitionEnd: gg };
function yg(r, e, t, i, n) {
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
    rtlTranslate: h,
    wrapperEl: f,
    enabled: p,
  } = s;
  if (
    (!p && !i && !n) ||
    s.destroyed ||
    (s.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const m = Math.min(s.params.slidesPerGroupSkip, o);
  let y = m + Math.floor((o - m) / s.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1);
  const T = -l[y];
  if (a.normalizeSlideIndex)
    for (let A = 0; A < u.length; A += 1) {
      const M = -Math.floor(T * 100),
        I = Math.floor(u[A] * 100),
        D = Math.floor(u[A + 1] * 100);
      typeof u[A + 1] < "u"
        ? M >= I && M < D - (D - I) / 2
          ? (o = A)
          : M >= I && M < D && (o = A + 1)
        : M >= I && (o = A);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (h
        ? T > s.translate && T > s.minTranslate()
        : T < s.translate && T < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        T > s.translate &&
        T > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(T);
  let _;
  o > d ? (_ = "next") : o < d ? (_ = "prev") : (_ = "reset");
  const x = s.virtual && s.params.virtual.enabled;
  if (!(x && n) && ((h && -T === s.translate) || (!h && T === s.translate)))
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(T),
      _ !== "reset" && (s.transitionStart(t, _), s.transitionEnd(t, _)),
      !1
    );
  if (a.cssMode) {
    const A = s.isHorizontal(),
      M = h ? T : -T;
    if (e === 0)
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[A ? "scrollLeft" : "scrollTop"] = M;
            }))
          : (f[A ? "scrollLeft" : "scrollTop"] = M),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    else {
      if (!s.support.smoothScroll)
        return (
          Bd({ swiper: s, targetPosition: M, side: A ? "left" : "top" }), !0
        );
      f.scrollTo({ [A ? "left" : "top"]: M, behavior: "smooth" });
    }
    return !0;
  }
  const E = $d().isSafari;
  return (
    x && !n && E && s.isElement && s.virtual.update(!1, !1, o),
    s.setTransition(e),
    s.setTranslate(T),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, _),
    e === 0
      ? s.transitionEnd(t, _)
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
                s.transitionEnd(t, _)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function wg(r, e, t, i) {
  r === void 0 && (r = 0),
    t === void 0 && (t = !0),
    typeof r == "string" && (r = parseInt(r, 10));
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  const s = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = r;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const h = o * n.params.grid.rows;
        a = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === h
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
        const h = u
          ? a < n.activeIndex
            ? "prev"
            : "next"
          : a - n.activeIndex - 1 < n.params.slidesPerView
          ? "next"
          : "prev";
        n.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? a + 1 : a - l + 1,
          slideRealIndex: h === "next" ? n.realIndex : void 0,
        });
      }
      if (s) {
        const h = o * n.params.grid.rows;
        o = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === h
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
function _g(r, e, t) {
  e === void 0 && (e = !0);
  const i = this,
    { enabled: n, params: s, animating: o } = i;
  if (!n || i.destroyed) return i;
  typeof r > "u" && (r = i.params.speed);
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
function bg(r, e, t) {
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
  typeof r > "u" && (r = i.params.speed);
  const c = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (u && !c && n.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const d = a ? i.translate : -i.translate;
  function h(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  const f = h(d),
    p = s.map((_) => h(_)),
    m = n.freeMode && n.freeMode.enabled;
  let y = s[p.indexOf(f) - 1];
  if (typeof y > "u" && (n.cssMode || m)) {
    let _;
    s.forEach((x, g) => {
      f >= x && (_ = g);
    }),
      typeof _ < "u" && (y = m ? s[_] : s[_ > 0 ? _ - 1 : _]);
  }
  let T = 0;
  if (
    (typeof y < "u" &&
      ((T = o.indexOf(y)),
      T < 0 && (T = i.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((T = T - i.slidesPerViewDynamic("previous", !0) + 1),
        (T = Math.max(T, 0)))),
    n.rewind && i.isBeginning)
  ) {
    const _ =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(_, r, e, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(T, r, e, t);
      }),
      !0
    );
  return i.slideTo(T, r, e, t);
}
function Sg(r, e, t) {
  e === void 0 && (e = !0);
  const i = this;
  if (!i.destroyed)
    return (
      typeof r > "u" && (r = i.params.speed), i.slideTo(i.activeIndex, r, e, t)
    );
}
function Tg(r, e, t, i) {
  e === void 0 && (e = !0), i === void 0 && (i = 0.5);
  const n = this;
  if (n.destroyed) return;
  typeof r > "u" && (r = n.params.speed);
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
function xg() {
  const r = this;
  if (r.destroyed) return;
  const { params: e, slidesEl: t } = r,
    i = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let n = r.clickedIndex,
    s;
  const o = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (r.animating) return;
    (s = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? n < r.loopedSlides - i / 2 ||
          n > r.slides.length - r.loopedSlides + i / 2
          ? (r.loopFix(),
            (n = r.getSlideIndex(
              ki(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            go(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n)
        : n > r.slides.length - i
        ? (r.loopFix(),
          (n = r.getSlideIndex(
            ki(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          go(() => {
            r.slideTo(n);
          }))
        : r.slideTo(n);
  } else r.slideTo(n);
}
var Cg = {
  slideTo: yg,
  slideToLoop: wg,
  slideNext: _g,
  slidePrev: bg,
  slideReset: Sg,
  slideToClosest: Tg,
  slideToClickedSlide: xg,
};
function Eg(r, e) {
  const t = this,
    { params: i, slidesEl: n } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  const s = () => {
      ki(n, `.${i.slideClass}, swiper-slide`).forEach((h, f) => {
        h.setAttribute("data-swiper-slide-index", f);
      });
    },
    o = t.grid && i.grid && i.grid.rows > 1,
    a = i.slidesPerGroup * (o ? i.grid.rows : 1),
    l = t.slides.length % a !== 0,
    u = o && t.slides.length % i.grid.rows !== 0,
    c = (d) => {
      for (let h = 0; h < d; h += 1) {
        const f = t.isElement
          ? fs("swiper-slide", [i.slideBlankClass])
          : fs("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (l) {
    if (i.loopAddBlankSlides) {
      const d = a - (t.slides.length % a);
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      yo(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    s();
  } else if (u) {
    if (i.loopAddBlankSlides) {
      const d = i.grid.rows - (t.slides.length % i.grid.rows);
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      yo(
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
function Pg(r) {
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
      allowSlideNext: h,
      slidesEl: f,
      params: p,
    } = u,
    { centeredSlides: m, initialSlide: y } = p;
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && p.virtual.enabled)
  ) {
    t &&
      (!p.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && u.snapIndex < p.slidesPerView
        ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
        : u.snapIndex === u.snapGrid.length - 1 &&
          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = d),
      (u.allowSlideNext = h),
      u.emit("loopFix");
    return;
  }
  let T = p.slidesPerView;
  T === "auto"
    ? (T = u.slidesPerViewDynamic())
    : ((T = Math.ceil(parseFloat(p.slidesPerView, 10))),
      m && T % 2 === 0 && (T = T + 1));
  const _ = p.slidesPerGroupAuto ? T : p.slidesPerGroup;
  let x = _;
  x % _ !== 0 && (x += _ - (x % _)),
    (x += p.loopAdditionalSlides),
    (u.loopedSlides = x);
  const g = u.grid && p.grid && p.grid.rows > 1;
  c.length < T + x || (u.params.effect === "cards" && c.length < T + x * 2)
    ? yo(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : g &&
      p.grid.fill === "row" &&
      yo(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const C = [],
    E = [],
    A = g ? Math.ceil(c.length / p.grid.rows) : c.length,
    M = o && A - y < T && !m;
  let I = M ? y : u.activeIndex;
  typeof s > "u"
    ? (s = u.getSlideIndex(
        c.find((b) => b.classList.contains(p.slideActiveClass))
      ))
    : (I = s);
  const D = i === "next" || !i,
    z = i === "prev" || !i;
  let S = 0,
    P = 0;
  const w = (g ? c[s].column : s) + (m && typeof n > "u" ? -T / 2 + 0.5 : 0);
  if (w < x) {
    S = Math.max(x - w, _);
    for (let b = 0; b < x - w; b += 1) {
      const k = b - Math.floor(b / A) * A;
      if (g) {
        const L = A - k - 1;
        for (let R = c.length - 1; R >= 0; R -= 1)
          c[R].column === L && C.push(R);
      } else C.push(A - k - 1);
    }
  } else if (w + T > A - x) {
    (P = Math.max(w - (A - x * 2), _)), M && (P = Math.max(P, T - A + y + 1));
    for (let b = 0; b < P; b += 1) {
      const k = b - Math.floor(b / A) * A;
      g
        ? c.forEach((L, R) => {
            L.column === k && E.push(R);
          })
        : E.push(k);
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1;
    }),
    u.params.effect === "cards" &&
      c.length < T + x * 2 &&
      (E.includes(s) && E.splice(E.indexOf(s), 1),
      C.includes(s) && C.splice(C.indexOf(s), 1)),
    z &&
      C.forEach((b) => {
        (c[b].swiperLoopMoveDOM = !0),
          f.prepend(c[b]),
          (c[b].swiperLoopMoveDOM = !1);
      }),
    D &&
      E.forEach((b) => {
        (c[b].swiperLoopMoveDOM = !0),
          f.append(c[b]),
          (c[b].swiperLoopMoveDOM = !1);
      }),
    u.recalcSlides(),
    p.slidesPerView === "auto"
      ? u.updateSlides()
      : g &&
        ((C.length > 0 && z) || (E.length > 0 && D)) &&
        u.slides.forEach((b, k) => {
          u.grid.updateSlide(k, b, u.slides);
        }),
    p.watchSlidesProgress && u.updateSlidesOffset(),
    t)
  ) {
    if (C.length > 0 && z) {
      if (typeof e > "u") {
        const b = u.slidesGrid[I],
          L = u.slidesGrid[I + S] - b;
        l
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(I + Math.ceil(S), 0, !1, !0),
            n &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)));
      } else if (n) {
        const b = g ? C.length / p.grid.rows : C.length;
        u.slideTo(u.activeIndex + b, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate);
      }
    } else if (E.length > 0 && D)
      if (typeof e > "u") {
        const b = u.slidesGrid[I],
          L = u.slidesGrid[I - P] - b;
        l
          ? u.setTranslate(u.translate - L)
          : (u.slideTo(I - P, 0, !1, !0),
            n &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - L),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - L)));
      } else {
        const b = g ? E.length / p.grid.rows : E.length;
        u.slideTo(u.activeIndex - b, 0, !1, !0);
      }
  }
  if (
    ((u.allowSlidePrev = d),
    (u.allowSlideNext = h),
    u.controller && u.controller.control && !a)
  ) {
    const b = {
      slideRealIndex: e,
      direction: i,
      setTranslate: n,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((k) => {
          !k.destroyed &&
            k.params.loop &&
            k.loopFix({
              ...b,
              slideTo: k.params.slidesPerView === p.slidesPerView ? t : !1,
            });
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...b,
          slideTo:
            u.controller.control.params.slidesPerView === p.slidesPerView
              ? t
              : !1,
        });
  }
  u.emit("loopFix");
}
function Ag() {
  const r = this,
    { params: e, slidesEl: t } = r;
  if (!e.loop || !t || (r.virtual && r.params.virtual.enabled)) return;
  r.recalcSlides();
  const i = [];
  r.slides.forEach((n) => {
    const s =
      typeof n.swiperSlideIndex > "u"
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
var kg = { loopCreate: Eg, loopFix: Pg, loopDestroy: Ag };
function Og(r) {
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
function Mg() {
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
var Lg = { setGrabCursor: Og, unsetGrabCursor: Mg };
function Dg(r, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === ci() || i === yt()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(r);
    return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
  }
  return t(e);
}
function Ru(r, e, t) {
  const i = yt(),
    { params: n } = r,
    s = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return s && (t <= o || t >= i.innerWidth - o)
    ? s === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function Ig(r) {
  const e = this,
    t = ci();
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  const n = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== i.pointerId) return;
    n.pointerId = i.pointerId;
  } else
    i.type === "touchstart" &&
      i.targetTouches.length === 1 &&
      (n.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    Ru(e, i, i.targetTouches[0].pageX);
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
    (s.touchEventsTarget === "wrapper" && !qm(l, e.wrapperEl)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(i.target && i.target.shadowRoot);
  if (s.noSwiping && (h ? Dg(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = i.pageX), (o.currentY = i.pageY);
  const f = o.currentX,
    p = o.currentY;
  if (!Ru(e, i, f)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = f),
    (o.startY = p),
    (n.touchStartTime = vo()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (n.allowThresholdMove = !1);
  let m = !0;
  l.matches(n.focusableElements) &&
    ((m = !1), l.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(n.focusableElements) &&
      t.activeElement !== l &&
      (i.pointerType === "mouse" ||
        (i.pointerType !== "mouse" && !l.matches(n.focusableElements))) &&
      t.activeElement.blur();
  const y = m && e.allowTouchMove && s.touchStartPreventDefault;
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
function Rg(r) {
  const e = ci(),
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
      ((u = [...l.changedTouches].find((E) => E.identifier === i.touchId)),
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
        (i.touchStartTime = vo()));
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
  const h = s.currentX - s.startX,
    f = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(h ** 2 + f ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let E;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : h * h + f * f >= 25 &&
        ((E = (Math.atan2(Math.abs(f), Math.abs(h)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? E > n.touchAngle
          : 90 - E > n.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" &&
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
  let p = t.isHorizontal() ? h : f,
    m = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement &&
    ((p = Math.abs(p) * (o ? 1 : -1)), (m = Math.abs(m) * (o ? 1 : -1))),
    (s.diff = p),
    (p *= n.touchRatio),
    o && ((p = -p), (m = -m));
  const y = t.touchesDirection;
  (t.swipeDirection = p > 0 ? "prev" : "next"),
    (t.touchesDirection = m > 0 ? "prev" : "next");
  const T = t.params.loop && !n.cssMode,
    _ =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (T && _ && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      t.wrapperEl.dispatchEvent(E);
    }
    (i.allowMomentumBounce = !1),
      n.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l);
  }
  let x;
  if (
    (new Date().getTime(),
    n._loopSwapReset !== !1 &&
      i.isMoved &&
      i.allowThresholdMove &&
      y !== t.touchesDirection &&
      T &&
      _ &&
      Math.abs(p) >= 1)
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
    (i.currentTranslate = p + i.startTranslate);
  let g = !0,
    C = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (C = 0),
    p > 0
      ? (T &&
          _ &&
          !x &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (n.centeredSlides
              ? t.minTranslate() -
                t.slidesSizesGrid[t.activeIndex + 1] -
                (n.slidesPerView !== "auto" &&
                t.slides.length - n.slidesPerView >= 2
                  ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween
                  : 0) -
                t.params.spaceBetween
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > t.minTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + i.startTranslate + p) ** C)))
      : p < 0 &&
        (T &&
          _ &&
          !x &&
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
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - i.startTranslate - p) ** C))),
    g && (l.preventedByNestedSwiper = !0),
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
    if (Math.abs(p) > n.threshold || i.allowThresholdMove) {
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
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function Ng(r) {
  const e = this,
    t = e.touchEventsData;
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  let n;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (
      ((n = [...i.changedTouches].find((C) => C.identifier === t.touchId)),
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
  const d = vo(),
    h = d - t.touchStartTime;
  if (e.allowClick) {
    const C = i.path || (i.composedPath && i.composedPath());
    e.updateClickedSlide((C && C[0]) || i.target, C),
      e.emit("tap click", i),
      h < 300 &&
        d - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", i);
  }
  if (
    ((t.lastClickTime = vo()),
    go(() => {
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
  const p = f >= -e.maxTranslate() && !e.params.loop;
  let m = 0,
    y = e.slidesSizesGrid[0];
  for (
    let C = 0;
    C < u.length;
    C += C < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const E = C < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[C + E] < "u"
      ? (p || (f >= u[C] && f < u[C + E])) && ((m = C), (y = u[C + E] - u[C]))
      : (p || f >= u[C]) && ((m = C), (y = u[u.length - 1] - u[u.length - 2]));
  }
  let T = null,
    _ = null;
  o.rewind &&
    (e.isBeginning
      ? (_ =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (T = 0));
  const x = (f - u[m]) / y,
    g = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (x >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? T : m + g)
        : e.slideTo(m)),
      e.swipeDirection === "prev" &&
        (x > 1 - o.longSwipesRatio
          ? e.slideTo(m + g)
          : _ !== null && x < 0 && Math.abs(x) > o.longSwipesRatio
          ? e.slideTo(_)
          : e.slideTo(m));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
      ? i.target === e.navigation.nextEl
        ? e.slideTo(m + g)
        : e.slideTo(m)
      : (e.swipeDirection === "next" && e.slideTo(T !== null ? T : m + g),
        e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : m));
  }
}
function Nu() {
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
function zg(r) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && r.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function Fg() {
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
function Bg(r) {
  const e = this;
  Us(e, r.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function qg() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const Wd = (r, e) => {
  const t = ci(),
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
          Nu,
          !0
        )
      : r[u]("observerUpdate", Nu, !0),
    n[l]("load", r.onLoad, { capture: !0 }));
};
function Vg() {
  const r = this,
    { params: e } = r;
  (r.onTouchStart = Ig.bind(r)),
    (r.onTouchMove = Rg.bind(r)),
    (r.onTouchEnd = Ng.bind(r)),
    (r.onDocumentTouchStart = qg.bind(r)),
    e.cssMode && (r.onScroll = Fg.bind(r)),
    (r.onClick = zg.bind(r)),
    (r.onLoad = Bg.bind(r)),
    Wd(r, "on");
}
function $g() {
  Wd(this, "off");
}
var Hg = { attachEvents: Vg, detachEvents: $g };
const zu = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function Wg() {
  const r = this,
    { realIndex: e, initialized: t, params: i, el: n } = r,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = ci(),
    a =
      i.breakpointsBase === "window" || !i.breakpointsBase
        ? i.breakpointsBase
        : "container",
    l =
      ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase
        ? r.el
        : o.querySelector(i.breakpointsBase),
    u = r.getBreakpoint(s, a, l);
  if (!u || r.currentBreakpoint === u) return;
  const d = (u in s ? s[u] : void 0) || r.originalParams,
    h = zu(r, i),
    f = zu(r, d),
    p = r.params.grabCursor,
    m = d.grabCursor,
    y = i.enabled;
  h && !f
    ? (n.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !h &&
      f &&
      (n.classList.add(`${i.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && i.grid.fill === "column")) &&
        n.classList.add(`${i.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    p && !m ? r.unsetGrabCursor() : !p && m && r.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((E) => {
      if (typeof d[E] > "u") return;
      const A = i[E] && i[E].enabled,
        M = d[E] && d[E].enabled;
      A && !M && r[E].disable(), !A && M && r[E].enable();
    });
  const T = d.direction && d.direction !== i.direction,
    _ = i.loop && (d.slidesPerView !== i.slidesPerView || T),
    x = i.loop;
  T && t && r.changeDirection(), Gt(r.params, d);
  const g = r.params.enabled,
    C = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    y && !g ? r.disable() : !y && g && r.enable(),
    (r.currentBreakpoint = u),
    r.emit("_beforeBreakpoint", d),
    t &&
      (_
        ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
        : !x && C
        ? (r.loopCreate(e), r.updateSlides())
        : x && !C && r.loopDestroy()),
    r.emit("breakpoint", d);
}
function jg(r, e, t) {
  if ((e === void 0 && (e = "window"), !r || (e === "container" && !t))) return;
  let i = !1;
  const n = yt(),
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
var Gg = { setBreakpoint: Wg, getBreakpoint: jg };
function Xg(r, e) {
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
function Yg() {
  const r = this,
    { classNames: e, params: t, rtl: i, el: n, device: s } = r,
    o = Xg(
      [
        "initialized",
        t.direction,
        { "free-mode": r.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
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
function Ug() {
  const r = this,
    { el: e, classNames: t } = r;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...t), r.emitContainerClasses());
}
var Kg = { addClasses: Yg, removeClasses: Ug };
function Qg() {
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
var Zg = { checkOverflow: Qg },
  Fu = {
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
    focusableElements: "input, select, option, textarea, button, video, label",
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
function Jg(r, e) {
  return function (i) {
    i === void 0 && (i = {});
    const n = Object.keys(i)[0],
      s = i[n];
    if (typeof s != "object" || s === null) {
      Gt(e, i);
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
      Gt(e, i);
      return;
    }
    typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
      r[n] || (r[n] = { enabled: !1 }),
      Gt(e, i);
  };
}
const ia = {
    eventsEmitter: Km,
    update: ag,
    translate: pg,
    transition: vg,
    slide: Cg,
    loop: kg,
    grabCursor: Lg,
    events: Hg,
    breakpoints: Gg,
    checkOverflow: Zg,
    classes: Kg,
  },
  ra = {};
class pt {
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
      (t = Gt({}, t)),
      e && !t.el && (t.el = e);
    const o = ci();
    if (
      t.el &&
      typeof t.el == "string" &&
      o.querySelectorAll(t.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(t.el).forEach((d) => {
          const h = Gt({}, t, { el: d });
          c.push(new pt(h));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = qd()),
      (a.device = Vd({ userAgent: t.userAgent })),
      (a.browser = $d()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: t,
        swiper: a,
        extendParams: Jg(t, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Gt({}, Fu, l);
    return (
      (a.params = Gt({}, u, ra, t)),
      (a.originalParams = Gt({}, a.params)),
      (a.passedParams = Gt({}, t)),
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
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
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
      n = ki(t, `.${i.slideClass}, swiper-slide`),
      s = Lu(n[0]);
    return Lu(e) - s;
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
    e.slides = ki(t, `.${i.slideClass}, swiper-slide`);
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
    i.translateTo(o, typeof t > "u" ? 0 : t),
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
        h;
      for (let f = u + 1; f < s.length; f += 1)
        s[f] &&
          !h &&
          ((d += Math.ceil(s[f].swiperSlideSize)), (c += 1), d > l && (h = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        s[f] &&
          !h &&
          ((d += s[f].swiperSlideSize), (c += 1), d > l && (h = !0));
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
        o.complete && Us(e, o);
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
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(o.length - 1, 0, !1, !0);
      } else s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || n();
    }
    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
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
        : ki(i, n())[0];
    return (
      !o &&
        t.params.createElements &&
        ((o = fs("div", t.params.wrapperClass)),
        i.append(o),
        ki(i, `.${t.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(t, {
        el: i,
        wrapperEl: o,
        slidesEl:
          t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
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
          ? Us(t, s)
          : s.addEventListener("load", (o) => {
              Us(t, o.target);
            });
      }),
      za(t),
      (t.initialized = !0),
      za(t),
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
      typeof i.params > "u" ||
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
          (i.el && typeof i.el != "string" && (i.el.swiper = null), Rm(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Gt(ra, e);
  }
  static get extendedDefaults() {
    return ra;
  }
  static get defaults() {
    return Fu;
  }
  static installModule(e) {
    pt.prototype.__modules__ || (pt.prototype.__modules__ = []);
    const t = pt.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => pt.installModule(t)), pt)
      : (pt.installModule(e), pt);
  }
}
Object.keys(ia).forEach((r) => {
  Object.keys(ia[r]).forEach((e) => {
    pt.prototype[e] = ia[r][e];
  });
});
pt.use([Ym, Um]);
function jd(r, e, t, i) {
  return (
    r.params.createElements &&
      Object.keys(i).forEach((n) => {
        if (!t[n] && t.auto === !0) {
          let s = ki(r.el, `.${i[n]}`)[0];
          s || ((s = fs("div", i[n])), (s.className = i[n]), r.el.append(s)),
            (t[n] = s),
            (e[n] = s);
        }
      }),
    t
  );
}
function ev(r) {
  let { swiper: e, extendParams: t, on: i, emit: n } = r;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  function s(p) {
    let m;
    return p &&
      typeof p == "string" &&
      e.isElement &&
      ((m = e.el.querySelector(p) || e.hostEl.querySelector(p)), m)
      ? m
      : (p &&
          (typeof p == "string" && (m = [...document.querySelectorAll(p)]),
          e.params.uniqueNavElements &&
          typeof p == "string" &&
          m &&
          m.length > 1 &&
          e.el.querySelectorAll(p).length === 1
            ? (m = e.el.querySelector(p))
            : m && m.length === 1 && (m = m[0])),
        p && !m ? p : m);
  }
  function o(p, m) {
    const y = e.params.navigation;
    (p = Si(p)),
      p.forEach((T) => {
        T &&
          (T.classList[m ? "add" : "remove"](...y.disabledClass.split(" ")),
          T.tagName === "BUTTON" && (T.disabled = m),
          e.params.watchOverflow &&
            e.enabled &&
            T.classList[e.isLocked ? "add" : "remove"](y.lockClass));
      });
  }
  function a() {
    const { nextEl: p, prevEl: m } = e.navigation;
    if (e.params.loop) {
      o(m, !1), o(p, !1);
      return;
    }
    o(m, e.isBeginning && !e.params.rewind), o(p, e.isEnd && !e.params.rewind);
  }
  function l(p) {
    p.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), n("navigationPrev"));
  }
  function u(p) {
    p.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), n("navigationNext"));
  }
  function c() {
    const p = e.params.navigation;
    if (
      ((e.params.navigation = jd(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(p.nextEl || p.prevEl))
    )
      return;
    let m = s(p.nextEl),
      y = s(p.prevEl);
    Object.assign(e.navigation, { nextEl: m, prevEl: y }),
      (m = Si(m)),
      (y = Si(y));
    const T = (_, x) => {
      _ && _.addEventListener("click", x === "next" ? u : l),
        !e.enabled && _ && _.classList.add(...p.lockClass.split(" "));
    };
    m.forEach((_) => T(_, "next")), y.forEach((_) => T(_, "prev"));
  }
  function d() {
    let { nextEl: p, prevEl: m } = e.navigation;
    (p = Si(p)), (m = Si(m));
    const y = (T, _) => {
      T.removeEventListener("click", _ === "next" ? u : l),
        T.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    p.forEach((T) => y(T, "next")), m.forEach((T) => y(T, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? f() : (c(), a());
  }),
    i("toEdge fromEdge lock unlock", () => {
      a();
    }),
    i("destroy", () => {
      d();
    }),
    i("enable disable", () => {
      let { nextEl: p, prevEl: m } = e.navigation;
      if (((p = Si(p)), (m = Si(m)), e.enabled)) {
        a();
        return;
      }
      [...p, ...m]
        .filter((y) => !!y)
        .forEach((y) => y.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (p, m) => {
      let { nextEl: y, prevEl: T } = e.navigation;
      (y = Si(y)), (T = Si(T));
      const _ = m.target;
      let x = T.includes(_) || y.includes(_);
      if (e.isElement && !x) {
        const g = m.path || (m.composedPath && m.composedPath());
        g && (x = g.find((C) => y.includes(C) || T.includes(C)));
      }
      if (e.params.navigation.hideOnClick && !x) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === _ || e.pagination.el.contains(_))
        )
          return;
        let g;
        y.length
          ? (g = y[0].classList.contains(e.params.navigation.hiddenClass))
          : T.length &&
            (g = T[0].classList.contains(e.params.navigation.hiddenClass)),
          n(g === !0 ? "navigationShow" : "navigationHide"),
          [...y, ...T]
            .filter((C) => !!C)
            .forEach((C) =>
              C.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        c(),
        a();
    },
    f = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        d();
    };
  Object.assign(e.navigation, {
    enable: h,
    disable: f,
    update: a,
    init: c,
    destroy: d,
  });
}
function tv(r) {
  return (
    r === void 0 && (r = ""),
    `.${r
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Gd(r) {
  let { swiper: e, extendParams: t, on: i, emit: n } = r;
  const s = ci();
  let o = !1,
    a = null,
    l = null,
    u,
    c,
    d,
    h;
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
    const { scrollbar: S, rtlTranslate: P } = e,
      { dragEl: v, el: w } = S,
      b = e.params.scrollbar,
      k = e.params.loop ? e.progressLoop : e.progress;
    let L = c,
      R = (d - c) * k;
    P
      ? ((R = -R), R > 0 ? ((L = c - R), (R = 0)) : -R + c > d && (L = d + R))
      : R < 0
      ? ((L = c + R), (R = 0))
      : R + c > d && (L = d - R),
      e.isHorizontal()
        ? ((v.style.transform = `translate3d(${R}px, 0, 0)`),
          (v.style.width = `${L}px`))
        : ((v.style.transform = `translate3d(0px, ${R}px, 0)`),
          (v.style.height = `${L}px`)),
      b.hide &&
        (clearTimeout(a),
        (w.style.opacity = 1),
        (a = setTimeout(() => {
          (w.style.opacity = 0), (w.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function p(S) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${S}ms`);
  }
  function m() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: S } = e,
      { dragEl: P, el: v } = S;
    (P.style.width = ""),
      (P.style.height = ""),
      (d = e.isHorizontal() ? v.offsetWidth : v.offsetHeight),
      (h =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (c = d * h)
        : (c = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (P.style.width = `${c}px`)
        : (P.style.height = `${c}px`),
      h >= 1 ? (v.style.display = "none") : (v.style.display = ""),
      e.params.scrollbar.hide && (v.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        S.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function y(S) {
    return e.isHorizontal() ? S.clientX : S.clientY;
  }
  function T(S) {
    const { scrollbar: P, rtlTranslate: v } = e,
      { el: w } = P;
    let b;
    (b =
      (y(S) -
        Vm(w)[e.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : c / 2)) /
      (d - c)),
      (b = Math.max(Math.min(b, 1), 0)),
      v && (b = 1 - b);
    const k = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * b;
    e.updateProgress(k),
      e.setTranslate(k),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function _(S) {
    const P = e.params.scrollbar,
      { scrollbar: v, wrapperEl: w } = e,
      { el: b, dragEl: k } = v;
    (o = !0),
      (u =
        S.target === k
          ? y(S) -
            S.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      S.preventDefault(),
      S.stopPropagation(),
      (w.style.transitionDuration = "100ms"),
      (k.style.transitionDuration = "100ms"),
      T(S),
      clearTimeout(l),
      (b.style.transitionDuration = "0ms"),
      P.hide && (b.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      n("scrollbarDragStart", S);
  }
  function x(S) {
    const { scrollbar: P, wrapperEl: v } = e,
      { el: w, dragEl: b } = P;
    o &&
      (S.preventDefault && S.cancelable
        ? S.preventDefault()
        : (S.returnValue = !1),
      T(S),
      (v.style.transitionDuration = "0ms"),
      (w.style.transitionDuration = "0ms"),
      (b.style.transitionDuration = "0ms"),
      n("scrollbarDragMove", S));
  }
  function g(S) {
    const P = e.params.scrollbar,
      { scrollbar: v, wrapperEl: w } = e,
      { el: b } = v;
    o &&
      ((o = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (w.style.transitionDuration = "")),
      P.hide &&
        (clearTimeout(l),
        (l = go(() => {
          (b.style.opacity = 0), (b.style.transitionDuration = "400ms");
        }, 1e3))),
      n("scrollbarDragEnd", S),
      P.snapOnRelease && e.slideToClosest());
  }
  function C(S) {
    const { scrollbar: P, params: v } = e,
      w = P.el;
    if (!w) return;
    const b = w,
      k = v.passiveListeners ? { passive: !1, capture: !1 } : !1,
      L = v.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!b) return;
    const R = S === "on" ? "addEventListener" : "removeEventListener";
    b[R]("pointerdown", _, k),
      s[R]("pointermove", x, k),
      s[R]("pointerup", g, L);
  }
  function E() {
    !e.params.scrollbar.el || !e.scrollbar.el || C("on");
  }
  function A() {
    !e.params.scrollbar.el || !e.scrollbar.el || C("off");
  }
  function M() {
    const { scrollbar: S, el: P } = e;
    e.params.scrollbar = jd(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const v = e.params.scrollbar;
    if (!v.el) return;
    let w;
    if (
      (typeof v.el == "string" && e.isElement && (w = e.el.querySelector(v.el)),
      !w && typeof v.el == "string")
    ) {
      if (((w = s.querySelectorAll(v.el)), !w.length)) return;
    } else w || (w = v.el);
    e.params.uniqueNavElements &&
      typeof v.el == "string" &&
      w.length > 1 &&
      P.querySelectorAll(v.el).length === 1 &&
      (w = P.querySelector(v.el)),
      w.length > 0 && (w = w[0]),
      w.classList.add(e.isHorizontal() ? v.horizontalClass : v.verticalClass);
    let b;
    w &&
      ((b = w.querySelector(tv(e.params.scrollbar.dragClass))),
      b || ((b = fs("div", e.params.scrollbar.dragClass)), w.append(b))),
      Object.assign(S, { el: w, dragEl: b }),
      v.draggable && E(),
      w &&
        w.classList[e.enabled ? "remove" : "add"](
          ...Ui(e.params.scrollbar.lockClass)
        );
  }
  function I() {
    const S = e.params.scrollbar,
      P = e.scrollbar.el;
    P &&
      P.classList.remove(
        ...Ui(e.isHorizontal() ? S.horizontalClass : S.verticalClass)
      ),
      A();
  }
  i("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const S = e.params.scrollbar;
    let { el: P } = e.scrollbar;
    (P = Si(P)),
      P.forEach((v) => {
        v.classList.remove(S.horizontalClass, S.verticalClass),
          v.classList.add(
            e.isHorizontal() ? S.horizontalClass : S.verticalClass
          );
      });
  }),
    i("init", () => {
      e.params.scrollbar.enabled === !1 ? z() : (M(), m(), f());
    }),
    i("update resize observerUpdate lock unlock changeDirection", () => {
      m();
    }),
    i("setTranslate", () => {
      f();
    }),
    i("setTransition", (S, P) => {
      p(P);
    }),
    i("enable disable", () => {
      const { el: S } = e.scrollbar;
      S &&
        S.classList[e.enabled ? "remove" : "add"](
          ...Ui(e.params.scrollbar.lockClass)
        );
    }),
    i("destroy", () => {
      I();
    });
  const D = () => {
      e.el.classList.remove(...Ui(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...Ui(e.params.scrollbar.scrollbarDisabledClass)
          ),
        M(),
        m(),
        f();
    },
    z = () => {
      e.el.classList.add(...Ui(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...Ui(e.params.scrollbar.scrollbarDisabledClass)
          ),
        I();
    };
  Object.assign(e.scrollbar, {
    enable: D,
    disable: z,
    updateSize: m,
    setTranslate: f,
    init: M,
    destroy: I,
  });
}
function Xd(r) {
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
    h,
    f,
    p,
    m,
    y,
    T,
    _;
  function x(L) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (L.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", x),
        !(_ || (L.detail && L.detail.bySwiperTouchMove)) && D()));
  }
  const g = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (h = !0) : h && ((u = c), (h = !1));
      const L = e.autoplay.paused ? c : d + u - new Date().getTime();
      (e.autoplay.timeLeft = L),
        n("autoplayTimeLeft", L, L / l),
        (a = requestAnimationFrame(() => {
          g();
        }));
    },
    C = () => {
      let L;
      return (
        e.virtual && e.params.virtual.enabled
          ? (L = e.slides.find((O) =>
              O.classList.contains("swiper-slide-active")
            ))
          : (L = e.slides[e.activeIndex]),
        L ? parseInt(L.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    E = (L) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), g();
      let R = typeof L > "u" ? e.params.autoplay.delay : L;
      (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const O = C();
      !Number.isNaN(O) &&
        O > 0 &&
        typeof L > "u" &&
        ((R = O), (l = O), (u = O)),
        (c = R);
      const q = e.params.speed,
        H = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(q, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, q, !0, !0), n("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(q, !0, !0), n("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, q, !0, !0), n("autoplay")),
            e.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                E();
              })));
        };
      return (
        R > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              H();
            }, R)))
          : requestAnimationFrame(() => {
              H();
            }),
        R
      );
    },
    A = () => {
      (d = new Date().getTime()),
        (e.autoplay.running = !0),
        E(),
        n("autoplayStart");
    },
    M = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        n("autoplayStop");
    },
    I = (L, R) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), L || (T = !0);
      const O = () => {
        n("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", x)
            : D();
      };
      if (((e.autoplay.paused = !0), R)) {
        y && (c = e.params.autoplay.delay), (y = !1), O();
        return;
      }
      (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), O());
    },
    D = () => {
      (e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((d = new Date().getTime()),
        T ? ((T = !1), E(c)) : E(),
        (e.autoplay.paused = !1),
        n("autoplayResume"));
    },
    z = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const L = ci();
      L.visibilityState === "hidden" && ((T = !0), I(!0)),
        L.visibilityState === "visible" && D();
    },
    S = (L) => {
      L.pointerType === "mouse" &&
        ((T = !0), (_ = !0), !(e.animating || e.autoplay.paused) && I(!0));
    },
    P = (L) => {
      L.pointerType === "mouse" && ((_ = !1), e.autoplay.paused && D());
    },
    v = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", S),
        e.el.addEventListener("pointerleave", P));
    },
    w = () => {
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("pointerenter", S),
        e.el.removeEventListener("pointerleave", P));
    },
    b = () => {
      ci().addEventListener("visibilitychange", z);
    },
    k = () => {
      ci().removeEventListener("visibilitychange", z);
    };
  i("init", () => {
    e.params.autoplay.enabled && (v(), b(), A());
  }),
    i("destroy", () => {
      w(), k(), e.autoplay.running && M();
    }),
    i("_freeModeStaticRelease", () => {
      (p || T) && D();
    }),
    i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? M() : I(!0, !0);
    }),
    i("beforeTransitionStart", (L, R, O) => {
      e.destroyed ||
        !e.autoplay.running ||
        (O || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : M());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M();
          return;
        }
        (f = !0),
          (p = !1),
          (T = !1),
          (m = setTimeout(() => {
            (T = !0), (p = !0), I(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !f)) {
        if (
          (clearTimeout(m),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (p = !1), (f = !1);
          return;
        }
        p && e.params.cssMode && D(), (p = !1), (f = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (y = !0);
    }),
    Object.assign(e.autoplay, { start: A, stop: M, pause: I, resume: D });
}
pt.use([Gd, Xd]);
const iv = () => {
    new pt(".result_swiper", {
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
  Yd = () => {
    iv();
  };
V.registerPlugin(Z);
const rv = () => {
    const r = document.querySelector("[results-wrap]"),
      e = document.querySelectorAll("[result-card]"),
      t = window.innerWidth < 768,
      i = V.timeline({
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
  cr = () => {
    rv();
  };
function nv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var Ud = { exports: {} };
(function (r) {
  (function (e) {
    r.exports ? (r.exports = e()) : (window.intlTelInput = e());
  })(() => {
    var e = (() => {
      var t = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        s = Object.prototype.hasOwnProperty,
        o = (v, w) => {
          for (var b in w) t(v, b, { get: w[b], enumerable: !0 });
        },
        a = (v, w, b, k) => {
          if ((w && typeof w == "object") || typeof w == "function")
            for (let L of n(w))
              !s.call(v, L) &&
                L !== b &&
                t(v, L, {
                  get: () => w[L],
                  enumerable: !(k = i(w, L)) || k.enumerable,
                });
          return v;
        },
        l = (v) => a(t({}, "__esModule", { value: !0 }), v),
        u = {};
      o(u, { Iti: () => I, default: () => P });
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
      for (let v = 0; v < c.length; v++) {
        const w = c[v];
        d[v] = {
          name: "",
          iso2: w[0],
          dialCode: w[1],
          priority: w[2] || 0,
          areaCodes: w[3] || null,
          nodeById: {},
        };
      }
      var h = d,
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
        p = {
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
        m = { ...f, ...p },
        y = 0,
        T = {
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
            typeof navigator < "u" && typeof window < "u"
              ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) || window.innerWidth <= 500
              : !1,
          utilsScript: "",
        },
        _ = [
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
        x = (v) => v.replace(/\D/g, ""),
        g = (v = "") =>
          v
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase(),
        C = (v) => {
          const w = x(v);
          if (w.charAt(0) === "1") {
            const b = w.substr(1, 3);
            return _.indexOf(b) !== -1;
          }
          return !1;
        },
        E = (v, w, b, k) => {
          if (b === 0 && !k) return 0;
          let L = 0;
          for (let R = 0; R < w.length; R++) {
            if ((/[+0-9]/.test(w[R]) && L++, L === v && !k)) return R + 1;
            if (k && L === v + 1) return R;
          }
          return w.length;
        },
        A = (v, w, b) => {
          const k = document.createElement(v);
          return (
            w && Object.entries(w).forEach(([L, R]) => k.setAttribute(L, R)),
            b && b.appendChild(k),
            k
          );
        },
        M = (v) => {
          const { instances: w } = S;
          Object.values(w).forEach((b) => b[v]());
        },
        I = class {
          constructor(v, w = {}) {
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
              (this.telInput = v),
              (this.highlightedItem = null),
              (this.options = Object.assign({}, T, w)),
              (this.hadInitialPlaceholder = !!v.getAttribute("placeholder"));
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
              (this.options.i18n = { ...m, ...this.options.i18n });
            const v = new Promise((b, k) => {
                (this.resolveAutoCountryPromise = b),
                  (this.rejectAutoCountryPromise = k);
              }),
              w = new Promise((b, k) => {
                (this.resolveUtilsScriptPromise = b),
                  (this.rejectUtilsScriptPromise = k);
              });
            (this.promise = Promise.all([v, w])),
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
                  (v) => v.toLowerCase()
                )),
              this._sortCountries();
          }
          _sortCountries() {
            this.countries.sort((v, w) => {
              const { countryOrder: b } = this.options;
              if (b) {
                const k = b.indexOf(v.iso2),
                  L = b.indexOf(w.iso2),
                  R = k > -1,
                  O = L > -1;
                if (R || O) return R && O ? k - L : R ? -1 : 1;
              }
              return v.name < w.name ? -1 : v.name > w.name ? 1 : 0;
            });
          }
          _addToDialCodeMap(v, w, b) {
            w.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = w.length),
              this.dialCodeToIso2Map.hasOwnProperty(w) ||
                (this.dialCodeToIso2Map[w] = []);
            for (let L = 0; L < this.dialCodeToIso2Map[w].length; L++)
              if (this.dialCodeToIso2Map[w][L] === v) return;
            const k = b !== void 0 ? b : this.dialCodeToIso2Map[w].length;
            this.dialCodeToIso2Map[w][k] = v;
          }
          _processAllCountries() {
            const { onlyCountries: v, excludeCountries: w } = this.options;
            if (v.length) {
              const b = v.map((k) => k.toLowerCase());
              this.countries = h.filter((k) => b.indexOf(k.iso2) > -1);
            } else if (w.length) {
              const b = w.map((k) => k.toLowerCase());
              this.countries = h.filter((k) => b.indexOf(k.iso2) === -1);
            } else this.countries = h;
          }
          _translateCountryNames() {
            for (let v = 0; v < this.countries.length; v++) {
              const w = this.countries[v].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(w) &&
                (this.countries[v].name = this.options.i18n[w]);
            }
          }
          _processDialCodes() {
            (this.dialCodes = {}),
              (this.dialCodeMaxLen = 0),
              (this.dialCodeToIso2Map = {});
            for (let v = 0; v < this.countries.length; v++) {
              const w = this.countries[v];
              this.dialCodes[w.dialCode] || (this.dialCodes[w.dialCode] = !0),
                this._addToDialCodeMap(w.iso2, w.dialCode, w.priority);
            }
            for (let v = 0; v < this.countries.length; v++) {
              const w = this.countries[v];
              if (w.areaCodes) {
                const b = this.dialCodeToIso2Map[w.dialCode][0];
                for (let k = 0; k < w.areaCodes.length; k++) {
                  const L = w.areaCodes[k];
                  for (let R = 1; R < L.length; R++) {
                    const O = w.dialCode + L.substr(0, R);
                    this._addToDialCodeMap(b, O),
                      this._addToDialCodeMap(w.iso2, O);
                  }
                  this._addToDialCodeMap(w.iso2, w.dialCode + L);
                }
              }
            }
          }
          _generateMarkup() {
            this.telInput.classList.add("iti__tel-input"),
              !this.telInput.hasAttribute("autocomplete") &&
                !(
                  this.telInput.form &&
                  this.telInput.form.hasAttribute("autocomplete")
                ) &&
                this.telInput.setAttribute("autocomplete", "off");
            const {
              allowDropdown: v,
              separateDialCode: w,
              showFlags: b,
              containerClass: k,
              hiddenInput: L,
              dropdownContainer: R,
              fixDropdownWidth: O,
              useFullscreenPopup: q,
              i18n: H,
            } = this.options;
            let K = "iti";
            v && (K += " iti--allow-dropdown"),
              b && (K += " iti--show-flags"),
              k && (K += ` ${k}`),
              q || (K += " iti--inline-dropdown");
            const Q = A("div", { class: K });
            if (
              (this.telInput.parentNode?.insertBefore(Q, this.telInput), v || b)
            ) {
              (this.countryContainer = A(
                "div",
                { class: "iti__country-container" },
                Q
              )),
                (this.selectedCountry = A(
                  "button",
                  {
                    type: "button",
                    class: "iti__selected-country",
                    ...(v && {
                      "aria-expanded": "false",
                      "aria-label": this.options.i18n.selectedCountryAriaLabel,
                      "aria-haspopup": "true",
                      "aria-controls": `iti-${this.id}__dropdown-content`,
                      role: "combobox",
                    }),
                  },
                  this.countryContainer
                ));
              const ie = A(
                "div",
                { class: "iti__selected-country-primary" },
                this.selectedCountry
              );
              if (
                ((this.selectedCountryInner = A("div", null, ie)),
                (this.selectedCountryA11yText = A(
                  "span",
                  { class: "iti__a11y-text" },
                  this.selectedCountryInner
                )),
                this.telInput.disabled
                  ? this.selectedCountry.setAttribute("aria-disabled", "true")
                  : this.selectedCountry.setAttribute("tabindex", "0"),
                v &&
                  (this.dropdownArrow = A(
                    "div",
                    { class: "iti__arrow", "aria-hidden": "true" },
                    ie
                  )),
                w &&
                  (this.selectedDialCode = A(
                    "div",
                    { class: "iti__selected-dial-code" },
                    this.selectedCountry
                  )),
                v)
              ) {
                const ue = O ? "" : "iti--flexible-dropdown-width";
                if (
                  ((this.dropdownContent = A("div", {
                    id: `iti-${this.id}__dropdown-content`,
                    class: `iti__dropdown-content iti__hide ${ue}`,
                  })),
                  (this.searchInput = A(
                    "input",
                    {
                      type: "text",
                      class: "iti__search-input",
                      placeholder: H.searchPlaceholder,
                      role: "combobox",
                      "aria-expanded": "true",
                      "aria-label": H.searchPlaceholder,
                      "aria-controls": `iti-${this.id}__country-listbox`,
                      "aria-autocomplete": "list",
                      autocomplete: "off",
                    },
                    this.dropdownContent
                  )),
                  (this.searchResultsA11yText = A(
                    "span",
                    { class: "iti__a11y-text" },
                    this.dropdownContent
                  )),
                  (this.countryList = A(
                    "ul",
                    {
                      class: "iti__country-list",
                      id: `iti-${this.id}__country-listbox`,
                      role: "listbox",
                      "aria-label": H.countryListAriaLabel,
                    },
                    this.dropdownContent
                  )),
                  this._appendListItems(this.countries, "iti__standard"),
                  this._updateSearchResultsText(),
                  R)
                ) {
                  let de = "iti iti--container";
                  q
                    ? (de += " iti--fullscreen-popup")
                    : (de += " iti--inline-dropdown"),
                    (this.dropdown = A("div", { class: de })),
                    this.dropdown.appendChild(this.dropdownContent);
                } else this.countryContainer.appendChild(this.dropdownContent);
              }
            }
            if ((Q.appendChild(this.telInput), L)) {
              const ie = this.telInput.getAttribute("name") || "",
                ue = L(ie);
              ue.phone &&
                ((this.hiddenInput = A("input", {
                  type: "hidden",
                  name: ue.phone,
                })),
                Q.appendChild(this.hiddenInput)),
                ue.country &&
                  ((this.hiddenInputCountry = A("input", {
                    type: "hidden",
                    name: ue.country,
                  })),
                  Q.appendChild(this.hiddenInputCountry));
            }
          }
          _appendListItems(v, w) {
            for (let b = 0; b < v.length; b++) {
              const k = v[b],
                L = A(
                  "li",
                  {
                    id: `iti-${this.id}__item-${k.iso2}`,
                    class: `iti__country ${w}`,
                    tabindex: "-1",
                    role: "option",
                    "data-dial-code": k.dialCode,
                    "data-country-code": k.iso2,
                    "aria-selected": "false",
                  },
                  this.countryList
                );
              k.nodeById[this.id] = L;
              let R = "";
              this.options.showFlags &&
                (R += `<div class='iti__flag-box'><div class='iti__flag iti__${k.iso2}'></div></div>`),
                (R += `<span class='iti__country-name'>${k.name}</span>`),
                (R += `<span class='iti__dial-code'>+${k.dialCode}</span>`),
                L.insertAdjacentHTML("beforeend", R);
            }
          }
          _setInitialState(v = !1) {
            const w = this.telInput.getAttribute("value"),
              b = this.telInput.value,
              L =
                w && w.charAt(0) === "+" && (!b || b.charAt(0) !== "+") ? w : b,
              R = this._getDialCode(L),
              O = C(L),
              { initialCountry: q } = this.options;
            if (R && !O) this._updateCountryFromNumber(L);
            else if (q !== "auto" || v) {
              const H = q ? q.toLowerCase() : "";
              H && this._getCountryData(H, !0)
                ? this._setCountry(H)
                : R && O
                ? this._setCountry("us")
                : this._setCountry();
            }
            L && this._updateValFromNumber(L);
          }
          _initListeners() {
            this._initTelInputListeners(),
              this.options.allowDropdown && this._initDropdownListeners(),
              (this.hiddenInput || this.hiddenInputCountry) &&
                this.telInput.form &&
                this._initHiddenInputListener();
          }
          _initHiddenInputListener() {
            (this._handleHiddenInputSubmit = () => {
              this.hiddenInput && (this.hiddenInput.value = this.getNumber()),
                this.hiddenInputCountry &&
                  (this.hiddenInputCountry.value =
                    this.getSelectedCountryData().iso2 || "");
            }),
              this.telInput.form?.addEventListener(
                "submit",
                this._handleHiddenInputSubmit
              );
          }
          _initDropdownListeners() {
            this._handleLabelClick = (w) => {
              this.dropdownContent.classList.contains("iti__hide")
                ? this.telInput.focus()
                : w.preventDefault();
            };
            const v = this.telInput.closest("label");
            v && v.addEventListener("click", this._handleLabelClick),
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
              (this._handleCountryContainerKeydown = (w) => {
                this.dropdownContent.classList.contains("iti__hide") &&
                  ["ArrowUp", "ArrowDown", " ", "Enter"].includes(w.key) &&
                  (w.preventDefault(),
                  w.stopPropagation(),
                  this._openDropdown()),
                  w.key === "Tab" && this._closeDropdown();
              }),
              this.countryContainer.addEventListener(
                "keydown",
                this._handleCountryContainerKeydown
              );
          }
          _initRequests() {
            this.options.utilsScript && !S.utils
              ? S.documentReady()
                ? S.loadUtils(this.options.utilsScript)
                : window.addEventListener("load", () => {
                    S.loadUtils(this.options.utilsScript);
                  })
              : this.resolveUtilsScriptPromise(),
              this.options.initialCountry === "auto" &&
              !this.selectedCountryData.iso2
                ? this._loadAutoCountry()
                : this.resolveAutoCountryPromise();
          }
          _loadAutoCountry() {
            S.autoCountry
              ? this.handleAutoCountry()
              : S.startedLoadingAutoCountry ||
                ((S.startedLoadingAutoCountry = !0),
                typeof this.options.geoIpLookup == "function" &&
                  this.options.geoIpLookup(
                    (v = "") => {
                      const w = v.toLowerCase();
                      w && this._getCountryData(w, !0)
                        ? ((S.autoCountry = w),
                          setTimeout(() => M("handleAutoCountry")))
                        : (this._setInitialState(!0),
                          M("rejectAutoCountryPromise"));
                    },
                    () => {
                      this._setInitialState(!0), M("rejectAutoCountryPromise");
                    }
                  ));
          }
          _initTelInputListeners() {
            const {
              strictMode: v,
              formatAsYouType: w,
              separateDialCode: b,
            } = this.options;
            let k = !1;
            (this._handleInputEvent = (L) => {
              this._updateCountryFromNumber(this.telInput.value) &&
                this._triggerCountryChange();
              const R = L && L.data && /[^+0-9]/.test(L.data),
                O =
                  L && L.inputType === "insertFromPaste" && this.telInput.value;
              if (
                (R || (O && !v)
                  ? (k = !0)
                  : /[^+0-9]/.test(this.telInput.value) || (k = !1),
                w && !k)
              ) {
                const q = this.telInput.selectionStart || 0,
                  K = this.telInput.value
                    .substring(0, q)
                    .replace(/[^+0-9]/g, "").length,
                  Q = L && L.inputType === "deleteContentForward",
                  ie = this._formatNumberAsYouType(),
                  ue = E(K, ie, q, Q);
                (this.telInput.value = ie),
                  this.telInput.setSelectionRange(ue, ue);
              }
            }),
              this.telInput.addEventListener("input", this._handleInputEvent),
              (v || b) &&
                ((this._handleKeydownEvent = (L) => {
                  if (
                    L.key &&
                    L.key.length === 1 &&
                    !L.altKey &&
                    !L.ctrlKey &&
                    !L.metaKey
                  ) {
                    if (b && L.key === "+") {
                      L.preventDefault(),
                        this._openDropdown(),
                        (this.searchInput.value = "+"),
                        this._filterCountries("", !0);
                      return;
                    }
                    if (v) {
                      const R =
                          this.telInput.selectionStart === 0 && L.key === "+",
                        O = /^[0-9]$/.test(L.key),
                        q = R || O,
                        H = this._getFullNumber(),
                        K = S.utils.getCoreNumber(
                          H,
                          this.selectedCountryData.iso2
                        ),
                        Q =
                          this.maxCoreNumberLength &&
                          K.length >= this.maxCoreNumberLength;
                      (!q || Q) && L.preventDefault();
                    }
                  }
                }),
                this.telInput.addEventListener(
                  "keydown",
                  this._handleKeydownEvent
                ));
          }
          _cap(v) {
            const w = parseInt(
              this.telInput.getAttribute("maxlength") || "",
              10
            );
            return w && v.length > w ? v.substr(0, w) : v;
          }
          _trigger(v) {
            const w = new Event(v, { bubbles: !0, cancelable: !0 });
            this.telInput.dispatchEvent(w);
          }
          _openDropdown() {
            const { fixDropdownWidth: v } = this.options;
            v &&
              (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
              this.dropdownContent.classList.remove("iti__hide"),
              this.selectedCountry.setAttribute("aria-expanded", "true"),
              this._setDropdownPosition();
            const w = this.countryList.firstElementChild;
            w &&
              (this._highlightListItem(w, !1),
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
              const v = this.telInput.getBoundingClientRect(),
                w = this.telInput.offsetHeight;
              this.options.dropdownContainer &&
                ((this.dropdown.style.top = `${v.top + w}px`),
                (this.dropdown.style.left = `${v.left}px`),
                (this._handleWindowScroll = () => this._closeDropdown()),
                window.addEventListener("scroll", this._handleWindowScroll));
            }
          }
          _bindDropdownListeners() {
            (this._handleMouseoverCountryList = (k) => {
              const L = k.target?.closest(".iti__country");
              L && this._highlightListItem(L, !1);
            }),
              this.countryList.addEventListener(
                "mouseover",
                this._handleMouseoverCountryList
              ),
              (this._handleClickCountryList = (k) => {
                const L = k.target?.closest(".iti__country");
                L && this._selectListItem(L);
              }),
              this.countryList.addEventListener(
                "click",
                this._handleClickCountryList
              );
            let v = !0;
            (this._handleClickOffToClose = () => {
              v || this._closeDropdown(), (v = !1);
            }),
              document.documentElement.addEventListener(
                "click",
                this._handleClickOffToClose
              ),
              (this._handleKeydownOnDropdown = (k) => {
                ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(k.key) &&
                  (k.preventDefault(),
                  k.stopPropagation(),
                  k.key === "ArrowUp" || k.key === "ArrowDown"
                    ? this._handleUpDownKey(k.key)
                    : k.key === "Enter"
                    ? this._handleEnterKey()
                    : k.key === "Escape" && this._closeDropdown());
              }),
              document.addEventListener(
                "keydown",
                this._handleKeydownOnDropdown
              );
            const w = () => {
              const k = this.searchInput.value.trim();
              k ? this._filterCountries(k) : this._filterCountries("", !0);
            };
            let b = null;
            (this._handleSearchChange = () => {
              b && clearTimeout(b),
                (b = setTimeout(() => {
                  w(), (b = null);
                }, 100));
            }),
              this.searchInput.addEventListener(
                "input",
                this._handleSearchChange
              ),
              this.searchInput.addEventListener("click", (k) =>
                k.stopPropagation()
              );
          }
          _filterCountries(v, w = !1) {
            let b = !0;
            this.countryList.innerHTML = "";
            const k = g(v);
            for (let L = 0; L < this.countries.length; L++) {
              const R = this.countries[L],
                O = g(R.name),
                q = `+${R.dialCode}`;
              if (w || O.includes(k) || q.includes(k) || R.iso2.includes(k)) {
                const H = R.nodeById[this.id];
                H && this.countryList.appendChild(H),
                  b && (this._highlightListItem(H, !1), (b = !1));
              }
            }
            (this.countryList.scrollTop = 0), this._updateSearchResultsText();
          }
          _updateSearchResultsText() {
            const { i18n: v } = this.options,
              w = this.countryList.childElementCount;
            let b;
            w === 0
              ? (b = v.zeroSearchResults)
              : w === 1
              ? (b = v.oneSearchResult)
              : (b = v.multipleSearchResults.replace("${count}", w.toString())),
              (this.searchResultsA11yText.textContent = b);
          }
          _handleUpDownKey(v) {
            let w =
              v === "ArrowUp"
                ? this.highlightedItem?.previousElementSibling
                : this.highlightedItem?.nextElementSibling;
            !w &&
              this.countryList.childElementCount > 1 &&
              (w =
                v === "ArrowUp"
                  ? this.countryList.lastElementChild
                  : this.countryList.firstElementChild),
              w && (this._scrollTo(w), this._highlightListItem(w, !1));
          }
          _handleEnterKey() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
          _updateValFromNumber(v) {
            let w = v;
            if (
              this.options.formatOnDisplay &&
              S.utils &&
              this.selectedCountryData
            ) {
              const b =
                  this.options.nationalMode ||
                  (w.charAt(0) !== "+" && !this.options.separateDialCode),
                { NATIONAL: k, INTERNATIONAL: L } = S.utils.numberFormat,
                R = b ? k : L;
              w = S.utils.formatNumber(w, this.selectedCountryData.iso2, R);
            }
            (w = this._beforeSetNumber(w)), (this.telInput.value = w);
          }
          _updateCountryFromNumber(v) {
            const w = v.indexOf("+");
            let b = w ? v.substring(w) : v;
            const k = this.selectedCountryData.dialCode;
            b &&
              k === "1" &&
              b.charAt(0) !== "+" &&
              (b.charAt(0) !== "1" && (b = `1${b}`), (b = `+${b}`)),
              this.options.separateDialCode &&
                k &&
                b.charAt(0) !== "+" &&
                (b = `+${k}${b}`);
            const R = this._getDialCode(b, !0),
              O = x(b);
            let q = null;
            if (R) {
              const H = this.dialCodeToIso2Map[x(R)],
                K =
                  H.indexOf(this.selectedCountryData.iso2) !== -1 &&
                  O.length <= R.length - 1;
              if (!(k === "1" && C(O)) && !K) {
                for (let ie = 0; ie < H.length; ie++)
                  if (H[ie]) {
                    q = H[ie];
                    break;
                  }
              }
            } else
              b.charAt(0) === "+" && O.length
                ? (q = "")
                : (!b || b === "+") &&
                  !this.selectedCountryData.iso2 &&
                  (q = this.defaultCountry);
            return q !== null ? this._setCountry(q) : !1;
          }
          _highlightListItem(v, w) {
            const b = this.highlightedItem;
            b &&
              (b.classList.remove("iti__highlight"),
              b.setAttribute("aria-selected", "false")),
              (this.highlightedItem = v),
              this.highlightedItem.classList.add("iti__highlight"),
              this.highlightedItem.setAttribute("aria-selected", "true"),
              this.selectedCountry.setAttribute(
                "aria-activedescendant",
                v.getAttribute("id") || ""
              ),
              this.searchInput.setAttribute(
                "aria-activedescendant",
                v.getAttribute("id") || ""
              ),
              w && this.highlightedItem.focus();
          }
          _getCountryData(v, w) {
            for (let b = 0; b < this.countries.length; b++)
              if (this.countries[b].iso2 === v) return this.countries[b];
            if (w) return null;
            throw new Error(`No country data for '${v}'`);
          }
          _setCountry(v) {
            const { separateDialCode: w, showFlags: b, i18n: k } = this.options,
              L = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (
              ((this.selectedCountryData = v
                ? this._getCountryData(v, !1) || {}
                : {}),
              this.selectedCountryData.iso2 &&
                (this.defaultCountry = this.selectedCountryData.iso2),
              this.selectedCountryInner)
            ) {
              let R = "",
                O = "";
              v && b
                ? ((R = `iti__flag iti__${v}`),
                  (O = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                : ((R = "iti__flag iti__globe"), (O = k.noCountrySelected)),
                (this.selectedCountryInner.className = R),
                (this.selectedCountryA11yText.textContent = O);
            }
            if ((this._setSelectedCountryTitleAttribute(v, w), w)) {
              const R = this.selectedCountryData.dialCode
                ? `+${this.selectedCountryData.dialCode}`
                : "";
              this.selectedDialCode.innerHTML = R;
              const q =
                (this.selectedCountry.offsetWidth ||
                  this._getHiddenSelectedCountryWidth()) + 8;
              this.isRTL
                ? (this.telInput.style.paddingRight = `${q}px`)
                : (this.telInput.style.paddingLeft = `${q}px`);
            }
            return (
              this._updatePlaceholder(), this._updateMaxLength(), L.iso2 !== v
            );
          }
          _updateMaxLength() {
            if (this.options.strictMode && S.utils)
              if (this.selectedCountryData.iso2) {
                const v =
                  S.utils.numberType[this.options.placeholderNumberType];
                let w = S.utils.getExampleNumber(
                    this.selectedCountryData.iso2,
                    !1,
                    v,
                    !0
                  ),
                  b = w;
                for (
                  ;
                  S.utils.isPossibleNumber(w, this.selectedCountryData.iso2);

                )
                  (b = w), (w += "0");
                const k = S.utils.getCoreNumber(
                  b,
                  this.selectedCountryData.iso2
                );
                this.maxCoreNumberLength = k.length;
              } else this.maxCoreNumberLength = null;
          }
          _setSelectedCountryTitleAttribute(v = null, w) {
            if (!this.selectedCountry) return;
            let b;
            v && !w
              ? (b = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
              : v
              ? (b = this.selectedCountryData.name)
              : (b = "Unknown"),
              this.selectedCountry.setAttribute("title", b);
          }
          _getHiddenSelectedCountryWidth() {
            if (this.telInput.parentNode) {
              const v = this.telInput.parentNode.cloneNode(!1);
              (v.style.visibility = "hidden"), document.body.appendChild(v);
              const w = this.countryContainer.cloneNode();
              v.appendChild(w);
              const b = this.selectedCountry.cloneNode(!0);
              w.appendChild(b);
              const k = b.offsetWidth;
              return document.body.removeChild(v), k;
            }
            return 0;
          }
          _updatePlaceholder() {
            const {
                autoPlaceholder: v,
                placeholderNumberType: w,
                nationalMode: b,
                customPlaceholder: k,
              } = this.options,
              L =
                v === "aggressive" ||
                (!this.hadInitialPlaceholder && v === "polite");
            if (S.utils && L) {
              const R = S.utils.numberType[w];
              let O = this.selectedCountryData.iso2
                ? S.utils.getExampleNumber(this.selectedCountryData.iso2, b, R)
                : "";
              (O = this._beforeSetNumber(O)),
                typeof k == "function" && (O = k(O, this.selectedCountryData)),
                this.telInput.setAttribute("placeholder", O);
            }
          }
          _selectListItem(v) {
            const w = this._setCountry(v.getAttribute("data-country-code"));
            this._closeDropdown(),
              this._updateDialCode(v.getAttribute("data-dial-code")),
              this.telInput.focus(),
              w && this._triggerCountryChange();
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
          _scrollTo(v) {
            const w = this.countryList,
              b = document.documentElement.scrollTop,
              k = w.offsetHeight,
              L = w.getBoundingClientRect().top + b,
              R = L + k,
              O = v.offsetHeight,
              q = v.getBoundingClientRect().top + b,
              H = q + O,
              K = q - L + w.scrollTop;
            if (q < L) w.scrollTop = K;
            else if (H > R) {
              const Q = k - O;
              w.scrollTop = K - Q;
            }
          }
          _updateDialCode(v) {
            const w = this.telInput.value,
              b = `+${v}`;
            let k;
            if (w.charAt(0) === "+") {
              const L = this._getDialCode(w);
              L ? (k = w.replace(L, b)) : (k = b), (this.telInput.value = k);
            }
          }
          _getDialCode(v, w) {
            let b = "";
            if (v.charAt(0) === "+") {
              let k = "";
              for (let L = 0; L < v.length; L++) {
                const R = v.charAt(L);
                if (!isNaN(parseInt(R, 10))) {
                  if (((k += R), w))
                    this.dialCodeToIso2Map[k] && (b = v.substr(0, L + 1));
                  else if (this.dialCodes[k]) {
                    b = v.substr(0, L + 1);
                    break;
                  }
                  if (k.length === this.dialCodeMaxLen) break;
                }
              }
            }
            return b;
          }
          _getFullNumber() {
            const v = this.telInput.value.trim(),
              { dialCode: w } = this.selectedCountryData;
            let b;
            const k = x(v);
            return (
              this.options.separateDialCode && v.charAt(0) !== "+" && w && k
                ? (b = `+${w}`)
                : (b = ""),
              b + v
            );
          }
          _beforeSetNumber(v) {
            let w = v;
            if (this.options.separateDialCode) {
              let b = this._getDialCode(w);
              if (b) {
                b = `+${this.selectedCountryData.dialCode}`;
                const k =
                  w[b.length] === " " || w[b.length] === "-"
                    ? b.length + 1
                    : b.length;
                w = w.substr(k);
              }
            }
            return this._cap(w);
          }
          _triggerCountryChange() {
            this._trigger("countrychange");
          }
          _formatNumberAsYouType() {
            const v = this._getFullNumber(),
              w = S.utils
                ? S.utils.formatNumberAsYouType(
                    v,
                    this.selectedCountryData.iso2
                  )
                : v,
              { dialCode: b } = this.selectedCountryData;
            return this.options.separateDialCode &&
              this.telInput.value.charAt(0) !== "+" &&
              w.includes(`+${b}`)
              ? (w.split(`+${b}`)[1] || "").trim()
              : w;
          }
          handleAutoCountry() {
            this.options.initialCountry === "auto" &&
              S.autoCountry &&
              ((this.defaultCountry = S.autoCountry),
              this.telInput.value || this.setCountry(this.defaultCountry),
              this.resolveAutoCountryPromise());
          }
          handleUtils() {
            S.utils &&
              (this.telInput.value &&
                this._updateValFromNumber(this.telInput.value),
              this.selectedCountryData.iso2 &&
                (this._updatePlaceholder(), this._updateMaxLength())),
              this.resolveUtilsScriptPromise();
          }
          destroy() {
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
              const b = this.telInput.closest("label");
              b && b.removeEventListener("click", this._handleLabelClick);
            }
            const { form: v } = this.telInput;
            this._handleHiddenInputSubmit &&
              v &&
              v.removeEventListener("submit", this._handleHiddenInputSubmit),
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
            const w = this.telInput.parentNode;
            w?.parentNode?.insertBefore(this.telInput, w),
              w?.parentNode?.removeChild(w),
              delete S.instances[this.id];
          }
          getExtension() {
            return S.utils
              ? S.utils.getExtension(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : "";
          }
          getNumber(v) {
            if (S.utils) {
              const { iso2: w } = this.selectedCountryData;
              return S.utils.formatNumber(this._getFullNumber(), w, v);
            }
            return "";
          }
          getNumberType() {
            return S.utils
              ? S.utils.getNumberType(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : -99;
          }
          getSelectedCountryData() {
            return this.selectedCountryData;
          }
          getValidationError() {
            if (S.utils) {
              const { iso2: v } = this.selectedCountryData;
              return S.utils.getValidationError(this._getFullNumber(), v);
            }
            return -99;
          }
          isValidNumber(v = !0) {
            const w = this._getFullNumber();
            return /\p{L}/u.test(w)
              ? !1
              : S.utils
              ? S.utils.isPossibleNumber(w, this.selectedCountryData.iso2, v)
              : null;
          }
          isValidNumberPrecise() {
            const v = this._getFullNumber();
            return /\p{L}/u.test(v)
              ? !1
              : S.utils
              ? S.utils.isValidNumber(v, this.selectedCountryData.iso2)
              : null;
          }
          setCountry(v) {
            const w = v.toLowerCase();
            this.selectedCountryData.iso2 !== w &&
              (this._setCountry(w),
              this._updateDialCode(this.selectedCountryData.dialCode),
              this._triggerCountryChange());
          }
          setNumber(v) {
            const w = this._updateCountryFromNumber(v);
            this._updateValFromNumber(v), w && this._triggerCountryChange();
          }
          setPlaceholderNumberType(v) {
            (this.options.placeholderNumberType = v), this._updatePlaceholder();
          }
        },
        D = (v, w, b) => {
          const k = document.createElement("script");
          (k.onload = () => {
            window.intlTelInputUtils &&
              ((S.utils = window.intlTelInputUtils),
              delete window.intlTelInputUtils,
              window.intlTelInputUtilsBackup &&
                ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                delete window.intlTelInputUtilsBackup)),
              M("handleUtils"),
              w && w();
          }),
            (k.onerror = () => {
              M("rejectUtilsScriptPromise"), b && b();
            }),
            (k.className = "iti-load-utils"),
            (k.async = !0),
            (k.src = v),
            document.body.appendChild(k);
        },
        z = (v) =>
          !S.utils && !S.startedLoadingUtilsScript
            ? ((S.startedLoadingUtilsScript = !0),
              new Promise((w, b) => D(v, w, b)))
            : null,
        S = Object.assign(
          (v, w) => {
            const b = new I(v, w);
            return (
              b._init(),
              v.setAttribute("data-intl-tel-input-id", b.id.toString()),
              (S.instances[b.id] = b),
              b
            );
          },
          {
            defaults: T,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => h,
            getInstance: (v) => {
              const w = v.getAttribute("data-intl-tel-input-id");
              return w ? S.instances[w] : null;
            },
            instances: {},
            loadUtils: z,
            version: "22.0.0",
          }
        ),
        P = S;
      return l(u);
    })();
    return e.default;
  });
})(Ud);
var sv = Ud.exports;
const ov = nv(sv),
  av = () => {
    function r(i) {
      const n = document.querySelector(`[calc-phone="${i}"]`),
        s = document.querySelector(`[dial-code="${i}"]`),
        o = document.querySelector(`[hidden-country-name="${i}"]`),
        a = document.querySelector(`[hidden-full-phone="${i}"]`);
      if (!n || !s || !o || !a) return;
      const l = ov(n, {
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
  dr = () => {
    av();
  };
var lv = "1.3.4";
function Kd(r, e, t) {
  return Math.max(r, Math.min(e, t));
}
function uv(r, e, t) {
  return (1 - t) * r + t * e;
}
function cv(r, e, t, i) {
  return uv(r, e, 1 - Math.exp(-t * i));
}
function dv(r, e) {
  return ((r % e) + e) % e;
}
var fv = class {
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
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += r;
      const t = Kd(0, this.currentTime / this.duration, 1);
      e = t >= 1;
      const i = e ? 1 : this.easing(t);
      this.value = this.from + (this.to - this.from) * i;
    } else
      this.lerp
        ? ((this.value = cv(this.value, this.to, this.lerp * 60, r)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (e = !0)))
        : ((this.value = this.to), (e = !0));
    e && this.stop(), this.onUpdate?.(this.value, e);
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
      s?.(),
      (this.onUpdate = o);
  }
};
function pv(r, e) {
  let t;
  return function (...i) {
    let n = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), r.apply(n, i);
      }, e));
  };
}
var hv = class {
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
          ((this.debouncedResize = pv(this.resize, i)),
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
      this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
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
  Qd = class {
    constructor() {
      B(this, "events", {});
    }
    emit(r, ...e) {
      let t = this.events[r] || [];
      for (let i = 0, n = t.length; i < n; i++) t[i]?.(...e);
    }
    on(r, e) {
      return (
        this.events[r]?.push(e) || (this.events[r] = [e]),
        () => {
          this.events[r] = this.events[r]?.filter((t) => e !== t);
        }
      );
    }
    off(r, e) {
      this.events[r] = this.events[r]?.filter((t) => e !== t);
    }
    destroy() {
      this.events = {};
    }
  },
  Bu = 100 / 6,
  Gi = { passive: !1 },
  mv = class {
    constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      B(this, "touchStart", { x: 0, y: 0 });
      B(this, "lastDelta", { x: 0, y: 0 });
      B(this, "window", { width: 0, height: 0 });
      B(this, "emitter", new Qd());
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
        const n = i === 1 ? Bu : i === 2 ? this.window.width : 1,
          s = i === 1 ? Bu : i === 2 ? this.window.height : 1;
        (e *= n),
          (t *= s),
          (e *= this.options.wheelMultiplier),
          (t *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: r });
      });
      B(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      (this.element = r),
        (this.options = e),
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, Gi),
        this.element.addEventListener("touchstart", this.onTouchStart, Gi),
        this.element.addEventListener("touchmove", this.onTouchMove, Gi),
        this.element.addEventListener("touchend", this.onTouchEnd, Gi);
    }
    on(r, e) {
      return this.emitter.on(r, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, Gi),
        this.element.removeEventListener("touchstart", this.onTouchStart, Gi),
        this.element.removeEventListener("touchmove", this.onTouchMove, Gi),
        this.element.removeEventListener("touchend", this.onTouchEnd, Gi);
    }
  },
  qu = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
  gv = class {
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
      gestureOrientation: h = "vertical",
      touchMultiplier: f = 1,
      wheelMultiplier: p = 1,
      autoResize: m = !0,
      prevent: y,
      virtualScroll: T,
      overscroll: _ = !0,
      autoRaf: x = !1,
      anchors: g = !1,
      autoToggle: C = !1,
      allowNestedScroll: E = !1,
      __experimental__naiveDimensions: A = !1,
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
      B(this, "animate", new fv());
      B(this, "emitter", new Qd());
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
        const t = r
          .composedPath()
          .find(
            (i) =>
              i instanceof HTMLAnchorElement &&
              (i.getAttribute("href")?.startsWith("#") ||
                i.getAttribute("href")?.startsWith("/#") ||
                i.getAttribute("href")?.startsWith("./#"))
          );
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
          u.find(
            (y) =>
              y instanceof HTMLElement &&
              ((typeof c == "function" && c?.(y)) ||
                y.hasAttribute?.("data-lenis-prevent") ||
                (n && y.hasAttribute?.("data-lenis-prevent-touch")) ||
                (s && y.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll &&
                  this.checkNestedScroll(y, { deltaX: e, deltaY: t })))
          )
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
        let h = t;
        this.options.gestureOrientation === "both"
          ? (h = Math.abs(t) > Math.abs(e) ? t : e)
          : this.options.gestureOrientation === "horizontal" && (h = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (this.animatedScroll === 0 && t > 0) ||
                (this.animatedScroll === this.limit && t < 0)))) &&
            (i.lenisStopPropagation = !0),
          i.preventDefault();
        const f = n && this.options.syncTouch,
          m = n && i.type === "touchend" && Math.abs(h) > 5;
        m && (h = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(this.targetScroll + h, {
            programmatic: !1,
            ...(f
              ? { lerp: m ? this.options.syncTouchLerp : 1 }
              : {
                  lerp: this.options.lerp,
                  duration: this.options.duration,
                  easing: this.options.easing,
                }),
          });
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
      (window.lenisVersion = lv),
        (!r || r === document.documentElement) && (r = window),
        typeof a == "number" && typeof l != "function"
          ? (l = qu)
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
          gestureOrientation: h,
          orientation: d,
          touchMultiplier: f,
          wheelMultiplier: p,
          autoResize: m,
          prevent: y,
          virtualScroll: T,
          overscroll: _,
          autoRaf: x,
          anchors: g,
          autoToggle: C,
          allowNestedScroll: E,
          __experimental__naiveDimensions: A,
        }),
        (this.dimensions = new hv(r, e, { autoResize: m })),
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
        (this.virtualScroll = new mv(t, {
          touchMultiplier: f,
          wheelMultiplier: p,
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
        if (typeof r == "string" && ["top", "left", "start"].includes(r)) r = 0;
        else if (typeof r == "string" && ["bottom", "right", "end"].includes(r))
          r = this.limit;
        else {
          let h;
          if (
            (typeof r == "string"
              ? (h = document.querySelector(r))
              : r instanceof HTMLElement && r?.nodeType && (h = r),
            h)
          ) {
            if (this.options.wrapper !== window) {
              const p = this.rootElement.getBoundingClientRect();
              e -= this.isHorizontal ? p.left : p.top;
            }
            const f = h.getBoundingClientRect();
            r = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
          }
        }
        if (typeof r == "number") {
          if (((r += e), (r = Math.round(r)), this.options.infinite)) {
            if (c) {
              this.targetScroll = this.animatedScroll = this.scroll;
              const h = r - this.animatedScroll;
              h > this.limit / 2
                ? (r = r - this.limit)
                : h < -this.limit / 2 && (r = r + this.limit);
            }
          } else r = Kd(0, r, this.limit);
          if (r === this.targetScroll) {
            a?.(this), l?.(this);
            return;
          }
          if (((this.userData = d ?? {}), t)) {
            (this.animatedScroll = this.targetScroll = r),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              l?.(this),
              (this.userData = {}),
              requestAnimationFrame(() => {
                this.dispatchScrollendEvent();
              });
            return;
          }
          c || (this.targetScroll = r),
            typeof n == "number" && typeof s != "function"
              ? (s = qu)
              : typeof s == "function" && typeof n != "number" && (n = 1),
            this.animate.fromTo(this.animatedScroll, r, {
              duration: n,
              easing: s,
              lerp: o,
              onStart: () => {
                i && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  a?.(this);
              },
              onUpdate: (h, f) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = h - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = h),
                  this.setScroll(this.scroll),
                  c && (this.targetScroll = h),
                  f || this.emit(),
                  f &&
                    (this.reset(),
                    this.emit(),
                    l?.(this),
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
      const i = Date.now(),
        n = r._lenis ?? (r._lenis = {});
      let s, o, a, l, u, c, d, h;
      const f = this.options.gestureOrientation;
      if (i - (n.time ?? 0) > 2e3) {
        n.time = Date.now();
        const C = window.getComputedStyle(r);
        n.computedStyle = C;
        const E = C.overflowX,
          A = C.overflowY;
        if (
          ((s = ["auto", "overlay", "scroll"].includes(E)),
          (o = ["auto", "overlay", "scroll"].includes(A)),
          (n.hasOverflowX = s),
          (n.hasOverflowY = o),
          (!s && !o) || (f === "vertical" && !o) || (f === "horizontal" && !s))
        )
          return !1;
        (u = r.scrollWidth),
          (c = r.scrollHeight),
          (d = r.clientWidth),
          (h = r.clientHeight),
          (a = u > d),
          (l = c > h),
          (n.isScrollableX = a),
          (n.isScrollableY = l),
          (n.scrollWidth = u),
          (n.scrollHeight = c),
          (n.clientWidth = d),
          (n.clientHeight = h);
      } else
        (a = n.isScrollableX),
          (l = n.isScrollableY),
          (s = n.hasOverflowX),
          (o = n.hasOverflowY),
          (u = n.scrollWidth),
          (c = n.scrollHeight),
          (d = n.clientWidth),
          (h = n.clientHeight);
      if (
        (!s && !o) ||
        (!a && !l) ||
        (f === "vertical" && (!o || !l)) ||
        (f === "horizontal" && (!s || !a))
      )
        return !1;
      let p;
      if (f === "horizontal") p = "x";
      else if (f === "vertical") p = "y";
      else {
        const C = e !== 0,
          E = t !== 0;
        C && s && a && (p = "x"), E && o && l && (p = "y");
      }
      if (!p) return !1;
      let m, y, T, _, x;
      if (p === "x") (m = r.scrollLeft), (y = u - d), (T = e), (_ = s), (x = a);
      else if (p === "y")
        (m = r.scrollTop), (y = c - h), (T = t), (_ = o), (x = l);
      else return !1;
      return (T > 0 ? m < y : m > 0) && _ && x;
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
      const r = this.options.wrapper;
      return this.isHorizontal
        ? r.scrollX ?? r.scrollLeft
        : r.scrollY ?? r.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? dv(this.animatedScroll, this.limit)
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
      this._isStopped !== r && ((this._isStopped = r), this.updateClassName());
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
V.registerPlugin(Z);
let Ks;
const vv = () => {
    (Ks = new gv({
      autoRaf: !0,
      lerp: 0.1,
      duration: 1.2,
      easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
      autoRaf: !0,
    })),
      Ks.on("scroll", Z.update),
      V.ticker.add((r) => {
        Ks.raf(r * 1e3);
      }),
      V.ticker.lagSmoothing(0);
  },
  yv = () => {
    vv();
  },
  wo = () => Ks;
let vr,
  Xr,
  Yr = !1;
const wv = () => {
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
      h = document.querySelector('[hidden-final-result="rev-opportunity"]'),
      f = document.querySelector('[hidden-final-result="conversion-rate"]'),
      p = document.querySelector('[hidden-input="volume"]'),
      m = document.querySelector('[hidden-input="ratio"]'),
      y = document.querySelector('[hidden-input="trip-price"]'),
      T = () => {
        const v = e.getAttribute("final-value"),
          w = i.getAttribute("final-value"),
          b = v * w,
          k = `$${b.toLocaleString()}`;
        (u.textContent = k),
          (h.value = b),
          p && (p.value = v),
          y && (y.value = w);
      },
      _ = () => {
        const v = t.getAttribute("final-value");
        (c.textContent = v), (f.value = v), m && (m.value = v);
      },
      x = () =>
        e.getAttribute("final-value") &&
        t.getAttribute("final-value") &&
        i.getAttribute("final-value"),
      g = () => {
        if (x() && !Yr) {
          (Yr = !0),
            n.classList.add("is--active"),
            r.classList.remove("is--active"),
            T(),
            _();
          const v = wo();
          v && v.stop(), M();
        } else x() || r.classList.add("is--active");
      },
      C = () => {
        if (Yr) {
          (Yr = !1),
            n.classList.remove("is--active"),
            vr && vr.isActive() && vr.pause(),
            Xr && Xr.isActive() && Xr.pause();
          const v = wo();
          v && v.start(), I();
        }
      },
      E = () => {
        r.classList.contains("is--active") &&
          x() &&
          r.classList.remove("is--active");
      },
      A = () => {
        [e, t, i].forEach((w) => {
          new MutationObserver(E).observe(w, {
            attributes: !0,
            attributeFilter: ["final-value"],
          });
        }),
          new MutationObserver(g).observe(r, {
            attributes: !0,
            attributeFilter: ["final-value"],
          });
      },
      M = () => {
        (vr = V.timeline()),
          V.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
          vr.fromTo(
            a,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "expo.out" }
          ),
          vr.fromTo(
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
          vr.fromTo(
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
      I = () => {
        (Xr = V.timeline()),
          Xr.to(l, {
            autoAlpha: 0,
            scale: 0.9,
            rotate: 10,
            y: "100%",
            transformOrigin: "top center",
            duration: 1.25,
            ease: "elastic.out(0.4,0.3)",
          }),
          Xr.to(
            a,
            {
              opacity: 0,
              duration: 0.5,
              ease: "expo.out",
              onComplete: () => {
                V.set(n, { display: "none", visibility: "hidden" });
              },
            },
            "-=1"
          );
      },
      D = (v) => {
        v.key === "Escape" && Yr && C();
      },
      z = () => {
        o.addEventListener("click", () => {
          g();
        }),
          s.forEach((v) => {
            v.addEventListener("click", () => {
              C();
            });
          }),
          a.addEventListener("click", (v) => {
            v.target === a && Yr && C();
          }),
          document.addEventListener("keydown", D);
      },
      S = () => {
        document.removeEventListener("keydown", D);
      };
    return A(), z(), S;
  },
  _v = () => wv(),
  bv = () => {
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
              const h = d.querySelector('[rev-tab-trigger="line"]');
              h && h.classList.remove("is--active");
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
    const i = document.querySelector('[rev-tab-btn-group="estimates"] button');
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
  Sv = () => {
    bv();
  };
V.registerPlugin(Tn);
const Tv = () => {
    const r = document.querySelector('[lead-scroll="wrap"]'),
      e = r.querySelector('[lead-scroll="visual-component"]'),
      t = e.querySelectorAll('[lead-scroll="visual-item"]'),
      i = Array.from(t).map((b) => b.querySelector('[scroll-img="lg"]')),
      n = Array.from(t).map((b) => b.querySelectorAll('[scroll-img="sm"]')),
      s = r.querySelector('[lead-scroll="content-component"]'),
      o = s.querySelectorAll('[lead-scroll="content-header-item"]'),
      a = s.querySelectorAll('[lead-scroll="content-header-item"] p'),
      l = s.querySelectorAll('[lead-scroll="content-info-item"]'),
      u = Array.from(l).map((b) => Array.from(b.querySelectorAll("p"))),
      d = document
        .querySelector('[lead-scroll="progress-wrap"]')
        .querySelectorAll('[lead-scroll="progress-item"]'),
      h = Array.from(d).map((b) =>
        b.querySelector('[lead-scroll="progress-move"]')
      ),
      f = document.querySelector('[lead-scroll="arrow-left"]'),
      p = document.querySelector('[lead-scroll="arrow-right"]');
    let m = 0,
      y = !1,
      T = null,
      _ = !1;
    const x = t.length,
      g = 6e3;
    if (!r || !e || t.length === 0) return;
    V.set(i, { autoAlpha: 0 }),
      V.set(n, { autoAlpha: 0 }),
      V.set(i, { scale: 0.8 }),
      V.set(n, { scale: 0.8 });
    const C = (b) => {
        const k = i[b],
          L = n[b];
        k &&
          V.fromTo(
            k,
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
          L &&
            L.length > 0 &&
            V.fromTo(
              L,
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
      E = (b) => {
        const k = i[b],
          L = n[b];
        k &&
          V.to(k, {
            scale: 0.8,
            rotateX: -120,
            y: "100%",
            autoAlpha: 0,
            duration: 0.6,
            ease: "expo.inOut",
          }),
          L &&
            L.length > 0 &&
            V.to(L, {
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
      A = (b) => {
        const k = a[b];
        if (k) {
          const L = new Tn(k, {
            type: "lines",
            mask: "lines",
            autoSplit: !0,
            linesClass: "line",
          });
          L &&
            L.lines &&
            V.from(L.lines, {
              yPercent: 110,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        }
      },
      M = (b) => {
        const k = u[b];
        k &&
          k.length > 0 &&
          V.from(k, {
            y: 100,
            autoAlpha: 0,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.1,
          });
      },
      I = () => {
        T && (clearTimeout(T), (T = null));
      },
      D = (b) => {
        V.killTweensOf(h),
          h.forEach((k, L) => {
            L === b
              ? V.fromTo(
                  k,
                  { scaleX: 0 },
                  { scaleX: 1, duration: g / 1e3, ease: "none" }
                )
              : L < b
              ? V.set(k, { scaleX: 1 })
              : V.set(k, { scaleX: 0 });
          });
      },
      z = (b, k = !0) => {
        const L = Math.min(Math.max(b, 0), x - 1);
        if (L !== m && !y) {
          y = !0;
          const R = m;
          I();
          const O = () => {
            d.forEach((q) => {
              q.classList.remove("is--active", "is--outgoing", "is--incoming");
            }),
              t.forEach((q) => {
                q.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              }),
              o.forEach((q) => {
                q.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              }),
              l.forEach((q) => {
                q.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              });
          };
          O(),
            R >= 0 &&
              R < t.length &&
              (d[R] && d[R].classList.add("is--outgoing"),
              t[R] && t[R].classList.add("is--outgoing"),
              o[R] && o[R].classList.add("is--outgoing"),
              l[R] && l[R].classList.add("is--outgoing"),
              E(R)),
            d[L] && d[L].classList.add("is--incoming"),
            t[L] && t[L].classList.add("is--incoming"),
            o[L] && o[L].classList.add("is--incoming"),
            l[L] && l[L].classList.add("is--incoming"),
            C(L),
            A(L),
            M(L),
            V.delayedCall(0.2, () => {
              O(),
                d[L] && d[L].classList.add("is--active"),
                t[L] && t[L].classList.add("is--active"),
                o[L] && o[L].classList.add("is--active"),
                l[L] && l[L].classList.add("is--active"),
                (m = L),
                (y = !1),
                D(L),
                k && !_ && v();
            });
        }
      },
      S = () => {
        const b = (m + 1) % x;
        z(b);
      },
      P = () => {
        const b = m === 0 ? x - 1 : m - 1;
        z(b);
      },
      v = () => {
        I(),
          (T = setTimeout(() => {
            y || S();
          }, g));
      };
    d[0] && d[0].classList.add("is--active"),
      t[0] && t[0].classList.add("is--active"),
      o[0] && o[0].classList.add("is--active"),
      l[0] && l[0].classList.add("is--active"),
      C(0),
      A(0),
      M(0),
      f &&
        f.addEventListener("click", () => {
          P();
        }),
      p &&
        p.addEventListener("click", () => {
          S();
        }),
      D(0),
      v();
    const w = () => {
      I(),
        V.delayedCall(0.1, () => {
          v();
        });
    };
    return (
      window.addEventListener("resize", w),
      () => {
        I(), window.removeEventListener("resize", w), V.killTweensOf([i, n, h]);
      }
    );
  },
  Zd = () => {
    Tv();
  },
  xv = () => {
    Wi(), Qp(), Jp(), Zd(), th(), Lm(), Dm(), Yd(), cr(), dr(), _v(), Sv();
  },
  Cv = () => {
    new pt(".about_team_swiper", {
      slidesPerView: 3.2,
      breakpoints: {
        1440: { slidesPerView: 3.2 },
        1024: { slidesPerView: 2.5 },
        768: { slidesPerView: 2.2 },
        480: { slidesPerView: 1.2, spaceBetween: 14 },
        320: { slidesPerView: 1.2, spaceBetween: 14 },
        280: { slidesPerView: 1.2, spaceBetween: 14 },
      },
      spaceBetween: 20,
      parallax: !0,
      speed: 800,
      slideActiveClass: "is--active",
      slideNextClass: "is--next",
      slidePrevClass: "is--prev",
      centeredSlides: !1,
      loop: !0,
      grabCursor: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
      navigation: {
        nextEl: '[team="arrow-right"]',
        prevEl: '[team="arrow-left"]',
      },
      on: {
        init: function () {
          r(this);
        },
        slideChange: function () {
          r(this);
        },
      },
    });
    function r(e) {
      e.slides.forEach((o) => {
        o.classList.remove("is--after--next");
      });
      const t = e.activeIndex,
        i = e.slides.length,
        n = (t + 2) % i,
        s = e.slides[n];
      s &&
        !s.classList.contains("is--active") &&
        !s.classList.contains("is--next") &&
        !s.classList.contains("is--prev") &&
        s.classList.add("is--after--next");
    }
  },
  Jd = () => {
    Cv();
  },
  Ev = () => {
    document.querySelectorAll('[team="card"]').forEach((e) => {
      const t = e.querySelector('[team="trigger"]'),
        i = e.querySelector('[team="content"]'),
        n = e.querySelector('[team="overlay"]'),
        s = e.querySelector('[team="trigger-line"]');
      let o = !1;
      const a = 1,
        l = i.scrollHeight,
        u = () => {
          V.timeline().to(i, { height: l, duration: a, ease: "expo.out" }),
            V.to(n, { opacity: 1, duration: a, ease: "expo.out" }),
            V.to(s, { rotate: 90, duration: a, ease: "expo.out" });
        },
        c = () => {
          V.timeline().to(i, { height: 0, duration: a, ease: "expo.out" }),
            V.to(n, { opacity: 0, duration: a, ease: "expo.out" }),
            V.to(s, { rotate: 0, duration: a, ease: "expo.out" });
        },
        d = () => {
          o ? (c(), (o = !1)) : (u(), (o = !0));
        };
      t.addEventListener("click", d);
    });
  },
  Pv = () => {
    Ev();
  },
  Av = () => {
    Wi(), dr(), Jd(), Pv();
  },
  ef = (r) => document.querySelector(r),
  kv = (r, e) => r.classList.add(e),
  Ov = () => {
    const r = ef(".contact-form");
    r &&
      r.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  };
V.registerPlugin(Z);
const Mv = () => {
    const r = document.querySelector(".product_hero_tab_component"),
      e = r.querySelector(".product_hero_tab_visual_wrap");
    V.to(e, {
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
  xn = () => {
    Mv();
  };
pt.use([Gd, Xd, ev]);
const Lv = () => {
    new pt(".product_img_swiper", {
      direction: "horizontal",
      loop: !1,
      slidesPerView: 2.3,
      speed: 600,
      spaceBetween: 20,
      rewind: !0,
      navigation: {
        nextEl: '[product-img="arrow-next"]',
        prevEl: '[product-img="arrow-prev"]',
      },
    });
  },
  _l = () => {
    Lv();
  },
  Dv = () => {
    Wi(), xn(), dr(), _l(), cr();
  },
  Iv = () => {
    Wi(), xn(), dr(), _l(), cr();
  },
  Rv = () => {
    Wi(), xn(), dr(), _l(), cr();
  },
  Nv = () => {
    Wi(), xn(), dr(), cr();
  },
  zv = () => {
    Wi(), xn(), dr(), Zd(), cr();
  },
  Fv = () => {
    document.querySelectorAll("[toast-wrap]").forEach(function (r) {
      const e = r.querySelectorAll("[toast-item]"),
        t = 0.5,
        i = 0.8,
        n = t + i,
        s = 3;
      let o = -1,
        a = 99999;
      const l = V.timeline({ defaults: { duration: t, ease: "power1.inOut" } });
      for (let c = 0; c < e.length + s; c++) {
        o++, o === e.length && (o = 0);
        const d = e[o];
        a--,
          l.set(
            d,
            {
              scale: 1,
              yPercent: 0,
              xPercent: 0,
              rotationX: 0,
              rotationY: 0,
              "--background-opacity": 0.2,
              opacity: 1,
              filter: "blur(0rem)",
              delay: 0,
              zIndex: a,
            },
            c * n
          ),
          l.to(
            d,
            {
              scale: 1.08,
              yPercent: 20,
              xPercent: -8,
              rotationX: 0,
              rotationY: 0,
              "--background-opacity": 0.1,
            },
            "<" + n
          ),
          l.to(
            d,
            {
              scale: 1.12,
              yPercent: 40,
              xPercent: -16,
              rotationX: 0,
              rotationY: 0,
              "--background-opacity": 0,
            },
            "<" + n
          ),
          l.to(
            d,
            {
              scale: 1.16,
              yPercent: 60,
              xPercent: -24,
              rotationX: 0,
              rotationY: 0,
              opacity: 0,
              filter: "blur(0.5rem)",
            },
            "<" + n
          );
      }
      V.timeline({
        repeat: -1,
        onUpdate: () => {
          const c = n * s;
          (l.time() < c - i || l.time() > l.duration() - c) && l.time(c - i);
        },
      }).to(l, { duration: l.duration(), ease: "none" });
    });
  },
  Bv = () => {
    Fv();
  },
  qv = () => {
    dr(), Yd(), cr(), Bv();
  },
  Vv = () => {
    Wi(), xn(), cr();
  },
  $v = () => {
    Wi(), Jd();
  },
  Hv = {
    home: xv,
    about: Av,
    contact: Ov,
    crm: Dv,
    broker: Iv,
    quoting: Rv,
    demand: Nv,
    markets: zv,
    operators: qv,
    inbound: Vv,
    careers: $v,
  },
  Wv = () => {
    const r = document.body.dataset.route,
      e = Hv[r];
    e && e();
  },
  jv = () => {
    const r = document.querySelector(".page_header");
    document.querySelector(".page_navigation"),
      document.querySelector(".page_nav_contain"),
      document.querySelector("[page-nav='size']"),
      document.querySelector("[page-nav='main']"),
      document.querySelector("[page-nav='brand']");
    const e = document.querySelectorAll("[nav-menu-dropdown]"),
      t = document.querySelectorAll("[nav-menu-item]");
    document.querySelector("[nav-menu='shadow-main']"),
      document.querySelector("[nav-menu='shadow-wrap']");
    const i = document.querySelector("[nav-menu='shadow-menu']"),
      n = document.querySelector("[nav-menu='shadow-card']"),
      s = new Map();
    t.forEach((y) => {
      const T = y.getBoundingClientRect();
      s.set(y, { width: T.width, height: T.height });
    }),
      (() => {
        const y = e[0];
        if (y) {
          const T = y.getAttribute("nav-menu-dropdown"),
            _ = document.querySelector(`[nav-menu-item='${T}']`);
          if (_) {
            const x = y.getBoundingClientRect(),
              g = i.getBoundingClientRect(),
              C = s.get(_);
            if (C) {
              const E = g.left + g.width / 2,
                M = x.left + x.width / 2 - E,
                I = C.height + 20,
                D = C.width + 20;
              n.style.setProperty("--siteMenuTranslateX", `${M}px`),
                n.style.setProperty("--siteMenuHeight", `${I}px`),
                n.style.setProperty("--siteMenuWidth", `${D}px`);
            }
          }
        }
      })();
    const a = 25;
    let l = null,
      u = null;
    const c = (y) => {
        const T = Array.from(t),
          _ = T.indexOf(y);
        T.forEach((x, g) => {
          g < _
            ? x.setAttribute("pos", "left")
            : g === _
            ? x.setAttribute("pos", "active")
            : x.setAttribute("pos", "right"),
            x === y
              ? x.setAttribute("status", "active")
              : x.setAttribute("status", "inactive");
        });
      },
      d = (y, T) => {
        l && (clearTimeout(l), (l = null)), u !== y && ((u = y), p(y, T));
      },
      h = () => {
        l = setTimeout(() => {
          r.setAttribute("dropdown-vis", "non-visible"),
            n.setAttribute("vis", "non-visible"),
            (u = null),
            (l = null);
        }, 100);
      },
      f = (y, T) => {
        const _ = T.bottom;
        return y >= _ && y <= _ + a;
      },
      p = (y, T) => {
        const _ = i.getBoundingClientRect(),
          x = y.getBoundingClientRect(),
          g = s.get(T);
        if (!g) return;
        const C = _.left + _.width / 2,
          E = x.left + x.width / 2,
          A = g.height + 20,
          M = g.width + 20,
          I = E - C;
        n.style.setProperty("--siteMenuTranslateX", `${I}px`),
          n.style.setProperty("--siteMenuHeight", `${A}px`),
          n.style.setProperty("--siteMenuWidth", `${M}px`),
          n.setAttribute("vis", "visible"),
          r.setAttribute("dropdown-vis", "visible"),
          c(T);
      },
      m = (y) => {
        if (!u) return;
        const T = u.getBoundingClientRect(),
          _ = n.getBoundingClientRect(),
          x = y.clientX,
          g = y.clientY,
          C = x >= T.left && x <= T.right && g >= T.top && g <= T.bottom,
          E = x >= _.left && x <= _.right && g >= _.top && g <= _.bottom,
          A =
            f(g, T) &&
            x >= Math.min(T.left, _.left) &&
            x <= Math.max(T.right, _.right);
        C || E || A ? l && (clearTimeout(l), (l = null)) : l || h();
      };
    document.addEventListener("mousemove", m),
      e.forEach((y) => {
        const T = y.getAttribute("nav-menu-dropdown"),
          _ = document.querySelector(`[nav-menu-item='${T}']`);
        _ &&
          y.addEventListener("mouseenter", () => {
            d(y, _);
          });
      }),
      n.addEventListener("mouseenter", () => {
        l && (clearTimeout(l), (l = null));
      }),
      n.addEventListener("mouseleave", () => {
        h();
      });
  },
  Gv = () => {
    jv();
  },
  Xv = () => {
    const r = document.querySelector(".page_nav_size"),
      e = document.querySelector(".page_nav_main");
    window.addEventListener("scroll", () => {
      window.scrollY > 50
        ? (r.classList.add("is--active"), e.classList.add("is--active"))
        : (r.classList.remove("is--active"), e.classList.remove("is--active"));
    });
  },
  Yv = () => {
    Xv();
  },
  Uv = () => {
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
              links: h,
              trigger: f,
              line: p,
            }) => {
              u.classList.remove("is--open"),
                d.classList.remove("is--open"),
                f.classList.remove("is--open"),
                V.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                V.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                V.to(p, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                h.forEach((m) => m.classList.remove("is--open")),
                V.to(h, {
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
              V.to(n, { height: "auto", duration: 0.5, ease: "power3.out" }),
              V.to(s, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
              V.to(a, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
              o.forEach((u) => u.classList.add("is--open")),
              V.fromTo(
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
  Kv = () => Uv(),
  Qv = () => {
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
        r.forEach((_) => {
          _.setAttribute("aria-controls", "main-nav-menu"),
            _.setAttribute("aria-expanded", "false");
        }),
          e.forEach((_) => {
            _.setAttribute("aria-label", "Open navigation menu");
          }),
          t.forEach((_) => {
            _.setAttribute("aria-label", "Close navigation menu");
          }),
          n &&
            (n.setAttribute("id", "main-nav-menu"),
            n.setAttribute("aria-label", "Main navigation menu")),
          s && s.setAttribute("role", "navigation");
      },
      h = (_, x) => {
        [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((C) => {
          C.classList.add(_), C.classList.remove(x);
        });
      },
      f = (_) => {
        r.forEach((x) => {
          x.setAttribute("aria-expanded", _ ? "true" : "false");
        });
      },
      p = () => {
        h(u, c),
          f(!0),
          V.timeline()
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
            .to(a, { color: "#121227", duration: 1.2, ease: "expo.inOut" }, "<")
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
      m = () => {
        h(c, u),
          f(!1),
          V.timeline()
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
          V.to(
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
        l ? (m(), (l = !1)) : (p(), (l = !0));
      };
    (() => {
      d(),
        r.forEach((_) => {
          _.addEventListener("click", y);
        });
    })();
  },
  Zv = () => {
    Qv();
  };
V.registerPlugin(Z);
const Jv = () => {
    function r(s, o) {
      const a = typeof s;
      return typeof o != "string" || o.trim() === ""
        ? s
        : o === "true" && a === "boolean"
        ? !0
        : o === "false" && a === "boolean"
        ? !1
        : isNaN(o) && a === "string"
        ? o
        : !isNaN(o) && a === "number"
        ? +o
        : s;
    }
    function e(s, o) {
      s && s.classList && s.classList.add(o);
    }
    function t(s, o) {
      s && s.classList && s.classList.remove(o);
    }
    function i(s, o) {
      return s && s.classList ? s.classList.contains(o) : !1;
    }
    document
      .querySelectorAll("[tr-marquee-element='component']")
      .forEach((s, o) => {
        if (!s) return;
        const a = s.querySelectorAll("[tr-marquee-element='panel']"),
          l = s.querySelectorAll("[tr-marquee-element='triggerhover']"),
          u = s.querySelectorAll("[tr-marquee-element='triggerclick']");
        if (!a.length) return;
        let c = r(100, s.getAttribute("tr-marquee-speed")),
          d = r(!1, s.getAttribute("tr-marquee-vertical")),
          h = r(!1, s.getAttribute("tr-marquee-reverse")),
          f = r(!1, s.getAttribute("tr-marquee-scrolldirection")),
          p = r(!1, s.getAttribute("tr-marquee-scrollscrub")),
          m = -100,
          y = 1,
          T = !1;
        h && (m = 100);
        let _ = V.timeline({
          repeat: -1,
          onReverseComplete: () => _.progress(1),
        });
        d
          ? ((c = a[0].offsetHeight / c),
            _.fromTo(
              a,
              { yPercent: 0 },
              { yPercent: m, ease: "none", duration: c }
            ))
          : ((c = a[0].offsetWidth / c),
            _.fromTo(
              a,
              { xPercent: 0 },
              { xPercent: m, ease: "none", duration: c }
            ));
        let x = { value: 1 };
        const g = Z.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          onUpdate: (E) => {
            if (
              !T &&
              (f &&
                y !== E.direction &&
                ((y = E.direction), _.timeScale(E.direction)),
              p)
            ) {
              let A = E.getVelocity() * 0.006;
              (A = V.utils.clamp(-60, 60, A)),
                V.timeline({ onUpdate: () => _.timeScale(x.value) }).fromTo(
                  x,
                  { value: A },
                  { value: y, duration: 0.5 }
                );
            }
          },
        });
        function C(E) {
          T = E;
          let A = { value: 1 },
            M = V.timeline({ onUpdate: () => _.timeScale(A.value) });
          E
            ? (M.fromTo(A, { value: y }, { value: 0, duration: 0.5 }),
              u.forEach((I) => e(I, "is-paused")))
            : (M.fromTo(A, { value: 0 }, { value: y, duration: 0.5 }),
              u.forEach((I) => t(I, "is-paused")));
        }
        window.matchMedia("(pointer: fine)").matches &&
          l.forEach((E) => {
            E.addEventListener("mouseenter", () => C(!0)),
              E.addEventListener("mouseleave", () => C(!1));
          }),
          u.forEach((E) => {
            E.addEventListener("click", function () {
              const A = i(this, "is-paused");
              C(!A);
            });
          }),
          (s._marqueeCleanup = () => {
            g.kill(),
              _.kill(),
              l.forEach((E) => {
                E.removeEventListener("mouseenter", () => C(!0)),
                  E.removeEventListener("mouseleave", () => C(!1));
              }),
              u.forEach((E) => {
                E.removeEventListener("click", function () {
                  const A = i(this, "is-paused");
                  C(!A);
                });
              });
          });
      });
  },
  ey = () => {
    Jv();
  },
  ty = () => {
    const r = document.querySelector(".page_header"),
      e = document.querySelectorAll(".page_nav_btn_item");
    if (!r) return;
    const t = document.querySelectorAll("[section-white], [section-dark]");
    if (t.length === 0) return;
    t.forEach((d, h) => {
      const f = d.hasAttribute("section-white");
      d.hasAttribute("section-dark");
    });
    const i = "data-wf--header-nav-header--variant",
      n = "data-wf--btn-main--style",
      s = Array.from(e).map((d) => {
        const h = d.querySelector("[data-wf--btn-main--style]");
        return {
          element: h,
          originalTheme: h?.getAttribute(n),
          originalClasses: h?.className,
        };
      });
    let o = null;
    const a = () => {
        r.setAttribute(i, "dark"),
          (r.className =
            r.className.replace(/w-variant-[a-f0-9-]+/g, "").trim() +
            " w-variant-94aca3a3-612a-76ff-5f40-21ae9f4d4bd2"),
          s.forEach((d) => {
            d.element &&
              d.originalTheme &&
              (d.originalTheme === "alt-dark"
                ? (d.element.setAttribute(n, "alt-dark"),
                  (d.element.className =
                    d.element.className
                      .replace(/w-variant-[a-f0-9-]+/g, "")
                      .trim() +
                    " w-variant-a211e645-d42e-c73e-2068-2776203c5fb9"),
                  d.element
                    .querySelectorAll('[class*="w-variant-"]')
                    .forEach((f) => {
                      f.className =
                        f.className
                          .replace(/w-variant-[a-f0-9-]+/g, "")
                          .trim() +
                        " w-variant-a211e645-d42e-c73e-2068-2776203c5fb9";
                    }))
                : d.originalTheme === "alt" &&
                  (d.element.setAttribute(n, "alt-dark"),
                  (d.element.className =
                    d.element.className
                      .replace(/w-variant-[a-f0-9-]+/g, "")
                      .trim() +
                    " w-variant-a211e645-d42e-c73e-2068-2776203c5fb9"),
                  d.element
                    .querySelectorAll('[class*="w-variant-"]')
                    .forEach((f) => {
                      f.className =
                        f.className
                          .replace(/w-variant-[a-f0-9-]+/g, "")
                          .trim() +
                        " w-variant-a211e645-d42e-c73e-2068-2776203c5fb9";
                    })));
          });
      },
      l = () => {
        r.setAttribute(i, "base"),
          (r.className = r.className
            .replace(/w-variant-[a-f0-9-]+/g, "")
            .trim()),
          s.forEach((d) => {
            d.element &&
              d.originalTheme &&
              (d.originalTheme === "alt-dark"
                ? (d.element.setAttribute(n, "alt"),
                  (d.element.className =
                    d.element.className
                      .replace(/w-variant-[a-f0-9-]+/g, "")
                      .trim() +
                    " w-variant-14d45cb6-5c1e-e490-5671-bd7652c22d56"),
                  d.element
                    .querySelectorAll('[class*="w-variant-"]')
                    .forEach((f) => {
                      f.className =
                        f.className
                          .replace(/w-variant-[a-f0-9-]+/g, "")
                          .trim() +
                        " w-variant-14d45cb6-5c1e-e490-5671-bd7652c22d56";
                    }))
                : d.originalTheme === "alt" &&
                  (d.element.setAttribute(n, "alt"),
                  (d.element.className =
                    d.element.className
                      .replace(/w-variant-[a-f0-9-]+/g, "")
                      .trim() +
                    " w-variant-14d45cb6-5c1e-e490-5671-bd7652c22d56"),
                  d.element
                    .querySelectorAll('[class*="w-variant-"]')
                    .forEach((f) => {
                      f.className =
                        f.className
                          .replace(/w-variant-[a-f0-9-]+/g, "")
                          .trim() +
                        " w-variant-14d45cb6-5c1e-e490-5671-bd7652c22d56";
                    })));
          });
      },
      u = () => {
        let h = null;
        for (const f of t) {
          const p = f.getBoundingClientRect();
          if (p.top <= 80 && p.bottom > 80) {
            h = f;
            break;
          }
        }
        if (h) {
          const f = h.hasAttribute("section-white"),
            p = h.hasAttribute("section-dark");
          let m = null;
          f ? (m = "white") : p && (m = "dark"),
            m &&
              m !== o &&
              ((o = m), m === "white" ? a() : m === "dark" && l());
        }
      },
      c = () => {
        u();
      };
    return (
      window.addEventListener("scroll", c),
      u(),
      () => {
        window.removeEventListener("scroll", c);
      }
    );
  },
  iy = () => (document.querySelector(".page_header") ? ty() : null);
/*! @vimeo/player v2.29.1 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function ry(
  r,
  e
) {
  var t =
    r == null
      ? null
      : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
  if (t != null) {
    var i,
      n,
      s,
      o,
      a = [],
      l = !0,
      u = !1;
    try {
      if (((s = (t = t.call(r)).next), e !== 0))
        for (
          ;
          !(l = (i = s.call(t)).done) && (a.push(i.value), a.length !== e);
          l = !0
        );
    } catch (c) {
      (u = !0), (n = c);
    } finally {
      try {
        if (!l && t.return != null && ((o = t.return()), Object(o) !== o))
          return;
      } finally {
        if (u) throw n;
      }
    }
    return a;
  }
}
function Vu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e &&
      (i = i.filter(function (n) {
        return Object.getOwnPropertyDescriptor(r, n).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
function $u(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vu(Object(t), !0).forEach(function (i) {
          Qs(r, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
      : Vu(Object(t)).forEach(function (i) {
          Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return r;
}
function St() {
  St = function () {
    return r;
  };
  var r = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (S, P, v) {
        S[P] = v.value;
      },
    n = typeof Symbol == "function" ? Symbol : {},
    s = n.iterator || "@@iterator",
    o = n.asyncIterator || "@@asyncIterator",
    a = n.toStringTag || "@@toStringTag";
  function l(S, P, v) {
    return (
      Object.defineProperty(S, P, {
        value: v,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      S[P]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (P, v, w) {
      return (P[v] = w);
    };
  }
  function u(S, P, v, w) {
    var b = P && P.prototype instanceof h ? P : h,
      k = Object.create(b.prototype),
      L = new I(w || []);
    return i(k, "_invoke", { value: C(S, v, L) }), k;
  }
  function c(S, P, v) {
    try {
      return { type: "normal", arg: S.call(P, v) };
    } catch (w) {
      return { type: "throw", arg: w };
    }
  }
  r.wrap = u;
  var d = {};
  function h() {}
  function f() {}
  function p() {}
  var m = {};
  l(m, s, function () {
    return this;
  });
  var y = Object.getPrototypeOf,
    T = y && y(y(D([])));
  T && T !== e && t.call(T, s) && (m = T);
  var _ = (p.prototype = h.prototype = Object.create(m));
  function x(S) {
    ["next", "throw", "return"].forEach(function (P) {
      l(S, P, function (v) {
        return this._invoke(P, v);
      });
    });
  }
  function g(S, P) {
    function v(b, k, L, R) {
      var O = c(S[b], S, k);
      if (O.type !== "throw") {
        var q = O.arg,
          H = q.value;
        return H && typeof H == "object" && t.call(H, "__await")
          ? P.resolve(H.__await).then(
              function (K) {
                v("next", K, L, R);
              },
              function (K) {
                v("throw", K, L, R);
              }
            )
          : P.resolve(H).then(
              function (K) {
                (q.value = K), L(q);
              },
              function (K) {
                return v("throw", K, L, R);
              }
            );
      }
      R(O.arg);
    }
    var w;
    i(this, "_invoke", {
      value: function (b, k) {
        function L() {
          return new P(function (R, O) {
            v(b, k, R, O);
          });
        }
        return (w = w ? w.then(L, L) : L());
      },
    });
  }
  function C(S, P, v) {
    var w = "suspendedStart";
    return function (b, k) {
      if (w === "executing") throw new Error("Generator is already running");
      if (w === "completed") {
        if (b === "throw") throw k;
        return z();
      }
      for (v.method = b, v.arg = k; ; ) {
        var L = v.delegate;
        if (L) {
          var R = E(L, v);
          if (R) {
            if (R === d) continue;
            return R;
          }
        }
        if (v.method === "next") v.sent = v._sent = v.arg;
        else if (v.method === "throw") {
          if (w === "suspendedStart") throw ((w = "completed"), v.arg);
          v.dispatchException(v.arg);
        } else v.method === "return" && v.abrupt("return", v.arg);
        w = "executing";
        var O = c(S, P, v);
        if (O.type === "normal") {
          if (((w = v.done ? "completed" : "suspendedYield"), O.arg === d))
            continue;
          return { value: O.arg, done: v.done };
        }
        O.type === "throw" &&
          ((w = "completed"), (v.method = "throw"), (v.arg = O.arg));
      }
    };
  }
  function E(S, P) {
    var v = P.method,
      w = S.iterator[v];
    if (w === void 0)
      return (
        (P.delegate = null),
        (v === "throw" &&
          S.iterator.return &&
          ((P.method = "return"),
          (P.arg = void 0),
          E(S, P),
          P.method === "throw")) ||
          (v !== "return" &&
            ((P.method = "throw"),
            (P.arg = new TypeError(
              "The iterator does not provide a '" + v + "' method"
            )))),
        d
      );
    var b = c(w, S.iterator, P.arg);
    if (b.type === "throw")
      return (P.method = "throw"), (P.arg = b.arg), (P.delegate = null), d;
    var k = b.arg;
    return k
      ? k.done
        ? ((P[S.resultName] = k.value),
          (P.next = S.nextLoc),
          P.method !== "return" && ((P.method = "next"), (P.arg = void 0)),
          (P.delegate = null),
          d)
        : k
      : ((P.method = "throw"),
        (P.arg = new TypeError("iterator result is not an object")),
        (P.delegate = null),
        d);
  }
  function A(S) {
    var P = { tryLoc: S[0] };
    1 in S && (P.catchLoc = S[1]),
      2 in S && ((P.finallyLoc = S[2]), (P.afterLoc = S[3])),
      this.tryEntries.push(P);
  }
  function M(S) {
    var P = S.completion || {};
    (P.type = "normal"), delete P.arg, (S.completion = P);
  }
  function I(S) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      S.forEach(A, this),
      this.reset(!0);
  }
  function D(S) {
    if (S) {
      var P = S[s];
      if (P) return P.call(S);
      if (typeof S.next == "function") return S;
      if (!isNaN(S.length)) {
        var v = -1,
          w = function b() {
            for (; ++v < S.length; )
              if (t.call(S, v)) return (b.value = S[v]), (b.done = !1), b;
            return (b.value = void 0), (b.done = !0), b;
          };
        return (w.next = w);
      }
    }
    return { next: z };
  }
  function z() {
    return { value: void 0, done: !0 };
  }
  return (
    (f.prototype = p),
    i(_, "constructor", { value: p, configurable: !0 }),
    i(p, "constructor", { value: f, configurable: !0 }),
    (f.displayName = l(p, a, "GeneratorFunction")),
    (r.isGeneratorFunction = function (S) {
      var P = typeof S == "function" && S.constructor;
      return (
        !!P && (P === f || (P.displayName || P.name) === "GeneratorFunction")
      );
    }),
    (r.mark = function (S) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(S, p)
          : ((S.__proto__ = p), l(S, a, "GeneratorFunction")),
        (S.prototype = Object.create(_)),
        S
      );
    }),
    (r.awrap = function (S) {
      return { __await: S };
    }),
    x(g.prototype),
    l(g.prototype, o, function () {
      return this;
    }),
    (r.AsyncIterator = g),
    (r.async = function (S, P, v, w, b) {
      b === void 0 && (b = Promise);
      var k = new g(u(S, P, v, w), b);
      return r.isGeneratorFunction(P)
        ? k
        : k.next().then(function (L) {
            return L.done ? L.value : k.next();
          });
    }),
    x(_),
    l(_, a, "Generator"),
    l(_, s, function () {
      return this;
    }),
    l(_, "toString", function () {
      return "[object Generator]";
    }),
    (r.keys = function (S) {
      var P = Object(S),
        v = [];
      for (var w in P) v.push(w);
      return (
        v.reverse(),
        function b() {
          for (; v.length; ) {
            var k = v.pop();
            if (k in P) return (b.value = k), (b.done = !1), b;
          }
          return (b.done = !0), b;
        }
      );
    }),
    (r.values = D),
    (I.prototype = {
      constructor: I,
      reset: function (S) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(M),
          !S)
        )
          for (var P in this)
            P.charAt(0) === "t" &&
              t.call(this, P) &&
              !isNaN(+P.slice(1)) &&
              (this[P] = void 0);
      },
      stop: function () {
        this.done = !0;
        var S = this.tryEntries[0].completion;
        if (S.type === "throw") throw S.arg;
        return this.rval;
      },
      dispatchException: function (S) {
        if (this.done) throw S;
        var P = this;
        function v(O, q) {
          return (
            (k.type = "throw"),
            (k.arg = S),
            (P.next = O),
            q && ((P.method = "next"), (P.arg = void 0)),
            !!q
          );
        }
        for (var w = this.tryEntries.length - 1; w >= 0; --w) {
          var b = this.tryEntries[w],
            k = b.completion;
          if (b.tryLoc === "root") return v("end");
          if (b.tryLoc <= this.prev) {
            var L = t.call(b, "catchLoc"),
              R = t.call(b, "finallyLoc");
            if (L && R) {
              if (this.prev < b.catchLoc) return v(b.catchLoc, !0);
              if (this.prev < b.finallyLoc) return v(b.finallyLoc);
            } else if (L) {
              if (this.prev < b.catchLoc) return v(b.catchLoc, !0);
            } else {
              if (!R) throw new Error("try statement without catch or finally");
              if (this.prev < b.finallyLoc) return v(b.finallyLoc);
            }
          }
        }
      },
      abrupt: function (S, P) {
        for (var v = this.tryEntries.length - 1; v >= 0; --v) {
          var w = this.tryEntries[v];
          if (
            w.tryLoc <= this.prev &&
            t.call(w, "finallyLoc") &&
            this.prev < w.finallyLoc
          ) {
            var b = w;
            break;
          }
        }
        b &&
          (S === "break" || S === "continue") &&
          b.tryLoc <= P &&
          P <= b.finallyLoc &&
          (b = null);
        var k = b ? b.completion : {};
        return (
          (k.type = S),
          (k.arg = P),
          b
            ? ((this.method = "next"), (this.next = b.finallyLoc), d)
            : this.complete(k)
        );
      },
      complete: function (S, P) {
        if (S.type === "throw") throw S.arg;
        return (
          S.type === "break" || S.type === "continue"
            ? (this.next = S.arg)
            : S.type === "return"
            ? ((this.rval = this.arg = S.arg),
              (this.method = "return"),
              (this.next = "end"))
            : S.type === "normal" && P && (this.next = P),
          d
        );
      },
      finish: function (S) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var v = this.tryEntries[P];
          if (v.finallyLoc === S)
            return this.complete(v.completion, v.afterLoc), M(v), d;
        }
      },
      catch: function (S) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var v = this.tryEntries[P];
          if (v.tryLoc === S) {
            var w = v.completion;
            if (w.type === "throw") {
              var b = w.arg;
              M(v);
            }
            return b;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (S, P, v) {
        return (
          (this.delegate = { iterator: D(S), resultName: P, nextLoc: v }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      },
    }),
    r
  );
}
function Hu(r, e, t, i, n, s, o) {
  try {
    var a = r[s](o),
      l = a.value;
  } catch (u) {
    t(u);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, n);
}
function xr(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, n) {
      var s = r.apply(e, t);
      function o(l) {
        Hu(s, i, n, o, a, "next", l);
      }
      function a(l) {
        Hu(s, i, n, o, a, "throw", l);
      }
      o(void 0);
    });
  };
}
function tf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wu(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(r, sf(i.key), i);
  }
}
function rf(r, e, t) {
  return (
    e && Wu(r.prototype, e),
    t && Wu(r, t),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r
  );
}
function Qs(r, e, t) {
  return (
    (e = sf(e)),
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function ny(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (r.prototype = Object.create(e && e.prototype, {
    constructor: { value: r, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    e && hs(r, e);
}
function ps(r) {
  return (
    (ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ps(r)
  );
}
function hs(r, e) {
  return (
    (hs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, n) {
          return (i.__proto__ = n), i;
        }),
    hs(r, e)
  );
}
function nf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Zs(r, e, t) {
  return (
    nf()
      ? (Zs = Reflect.construct.bind())
      : (Zs = function (n, s, o) {
          var a = [null];
          a.push.apply(a, s);
          var l = Function.bind.apply(n, a),
            u = new l();
          return o && hs(u, o.prototype), u;
        }),
    Zs.apply(null, arguments)
  );
}
function sy(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function Fa(r) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (Fa = function (i) {
      if (i === null || !sy(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, n);
      }
      function n() {
        return Zs(i, arguments, ps(this).constructor);
      }
      return (
        (n.prototype = Object.create(i.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        hs(n, i)
      );
    }),
    Fa(r)
  );
}
function Js(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function oy(r, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Js(r);
}
function ay(r) {
  var e = nf();
  return function () {
    var i = ps(r),
      n;
    if (e) {
      var s = ps(this).constructor;
      n = Reflect.construct(i, arguments, s);
    } else n = i.apply(this, arguments);
    return oy(this, n);
  };
}
function ly(r, e) {
  return uy(r) || ry(r, e) || cy(r, e) || dy();
}
function uy(r) {
  if (Array.isArray(r)) return r;
}
function cy(r, e) {
  if (r) {
    if (typeof r == "string") return ju(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (t === "Object" && r.constructor && (t = r.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ju(r, e);
  }
}
function ju(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function dy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fy(r, e) {
  if (typeof r != "object" || r === null) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function sf(r) {
  var e = fy(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
var py = typeof global < "u" && {}.toString.call(global) === "[object global]",
  hy = typeof Bun < "u",
  my = typeof Deno < "u",
  of = py || hy || my;
function Gu(r, e) {
  return r.indexOf(e.toLowerCase()) === 0
    ? r
    : ""
        .concat(e.toLowerCase())
        .concat(r.substr(0, 1).toUpperCase())
        .concat(r.substr(1));
}
function gy(r) {
  return !!(
    r &&
    r.nodeType === 1 &&
    "nodeName" in r &&
    r.ownerDocument &&
    r.ownerDocument.defaultView
  );
}
function vy(r) {
  return !isNaN(parseFloat(r)) && isFinite(r) && Math.floor(r) == r;
}
function Bi(r) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    r
  );
}
function af(r) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(r);
}
function yy(r) {
  for (
    var e = (r || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
      t = ((e && e[1]) || "").replace("player.", ""),
      i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
      n = 0,
      s = i;
    n < s.length;
    n++
  ) {
    var o = s[n];
    if (t.endsWith(o)) return t;
  }
  return "vimeo.com";
}
function lf() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = r.id,
    t = r.url,
    i = e || t;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (vy(i)) return "https://vimeo.com/".concat(i);
  if (Bi(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
var Xu = function (e, t, i) {
    var n =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : "addEventListener",
      s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : "removeEventListener",
      o = typeof t == "string" ? [t] : t;
    return (
      o.forEach(function (a) {
        e[n](a, i);
      }),
      {
        cancel: function () {
          return o.forEach(function (l) {
            return e[s](l, i);
          });
        },
      }
    );
  },
  wy = function () {};
function Ao(r) {
  var e =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
  if (!r || !e || typeof e.querySelectorAll != "function") return null;
  for (var t = e.querySelectorAll("iframe"), i = 0; i < t.length; i++)
    if (t[i] && t[i].contentWindow === r) return t[i];
  return null;
}
var _y = typeof Array.prototype.indexOf < "u",
  by = typeof window < "u" && typeof window.postMessage < "u";
if (!of && (!_y || !by))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var dn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Sy(r, e) {
  return (e = { exports: {} }), r(e, e.exports), e.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function (r) {
  if (r.WeakMap) return;
  var e = Object.prototype.hasOwnProperty,
    t =
      Object.defineProperty &&
      (function () {
        try {
          return Object.defineProperty({}, "x", { value: 1 }).x === 1;
        } catch {}
      })(),
    i = function (s, o, a) {
      t
        ? Object.defineProperty(s, o, {
            configurable: !0,
            writable: !0,
            value: a,
          })
        : (s[o] = a);
    };
  r.WeakMap = (function () {
    function s() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if ((i(this, "_id", a("_WeakMap")), arguments.length > 0))
        throw new TypeError("WeakMap iterable is not supported");
    }
    i(s.prototype, "delete", function (u) {
      if ((o(this, "delete"), !n(u))) return !1;
      var c = u[this._id];
      return c && c[0] === u ? (delete u[this._id], !0) : !1;
    }),
      i(s.prototype, "get", function (u) {
        if ((o(this, "get"), !!n(u))) {
          var c = u[this._id];
          if (c && c[0] === u) return c[1];
        }
      }),
      i(s.prototype, "has", function (u) {
        if ((o(this, "has"), !n(u))) return !1;
        var c = u[this._id];
        return !!(c && c[0] === u);
      }),
      i(s.prototype, "set", function (u, c) {
        if ((o(this, "set"), !n(u)))
          throw new TypeError("Invalid value used as weak map key");
        var d = u[this._id];
        return d && d[0] === u
          ? ((d[1] = c), this)
          : (i(u, this._id, [u, c]), this);
      });
    function o(u, c) {
      if (!n(u) || !e.call(u, "_id"))
        throw new TypeError(
          c + " method called on incompatible receiver " + typeof u
        );
    }
    function a(u) {
      return u + "_" + l() + "." + l();
    }
    function l() {
      return Math.random().toString().substring(2);
    }
    return i(s, "_polyfill", !0), s;
  })();
  function n(s) {
    return Object(s) === s;
  }
})(
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : dn
);
var ti = Sy(function (r) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (t, i, n) {
      (i[t] = i[t] || n()), r.exports && (r.exports = i[t]);
    })("Promise", dn, function () {
      var t,
        i,
        n,
        s = Object.prototype.toString,
        o =
          typeof setImmediate < "u"
            ? function (x) {
                return setImmediate(x);
              }
            : setTimeout;
      try {
        t = function (x, g, C, E) {
          return Object.defineProperty(x, g, {
            value: C,
            writable: !0,
            configurable: E !== !1,
          });
        };
      } catch {
        t = function (g, C, E) {
          return (g[C] = E), g;
        };
      }
      n = (function () {
        var x, g, C;
        function E(A, M) {
          (this.fn = A), (this.self = M), (this.next = void 0);
        }
        return {
          add: function (M, I) {
            (C = new E(M, I)),
              g ? (g.next = C) : (x = C),
              (g = C),
              (C = void 0);
          },
          drain: function () {
            var M = x;
            for (x = g = i = void 0; M; ) M.fn.call(M.self), (M = M.next);
          },
        };
      })();
      function a(_, x) {
        n.add(_, x), i || (i = o(n.drain));
      }
      function l(_) {
        var x,
          g = typeof _;
        return (
          _ != null && (g == "object" || g == "function") && (x = _.then),
          typeof x == "function" ? x : !1
        );
      }
      function u() {
        for (var _ = 0; _ < this.chain.length; _++)
          c(
            this,
            this.state === 1 ? this.chain[_].success : this.chain[_].failure,
            this.chain[_]
          );
        this.chain.length = 0;
      }
      function c(_, x, g) {
        var C, E;
        try {
          x === !1
            ? g.reject(_.msg)
            : (x === !0 ? (C = _.msg) : (C = x.call(void 0, _.msg)),
              C === g.promise
                ? g.reject(TypeError("Promise-chain cycle"))
                : (E = l(C))
                ? E.call(C, g.resolve, g.reject)
                : g.resolve(C));
        } catch (A) {
          g.reject(A);
        }
      }
      function d(_) {
        var x,
          g = this;
        if (!g.triggered) {
          (g.triggered = !0), g.def && (g = g.def);
          try {
            (x = l(_))
              ? a(function () {
                  var C = new p(g);
                  try {
                    x.call(
                      _,
                      function () {
                        d.apply(C, arguments);
                      },
                      function () {
                        h.apply(C, arguments);
                      }
                    );
                  } catch (E) {
                    h.call(C, E);
                  }
                })
              : ((g.msg = _), (g.state = 1), g.chain.length > 0 && a(u, g));
          } catch (C) {
            h.call(new p(g), C);
          }
        }
      }
      function h(_) {
        var x = this;
        x.triggered ||
          ((x.triggered = !0),
          x.def && (x = x.def),
          (x.msg = _),
          (x.state = 2),
          x.chain.length > 0 && a(u, x));
      }
      function f(_, x, g, C) {
        for (var E = 0; E < x.length; E++)
          (function (M) {
            _.resolve(x[M]).then(function (D) {
              g(M, D);
            }, C);
          })(E);
      }
      function p(_) {
        (this.def = _), (this.triggered = !1);
      }
      function m(_) {
        (this.promise = _),
          (this.state = 0),
          (this.triggered = !1),
          (this.chain = []),
          (this.msg = void 0);
      }
      function y(_) {
        if (typeof _ != "function") throw TypeError("Not a function");
        if (this.__NPO__ !== 0) throw TypeError("Not a promise");
        this.__NPO__ = 1;
        var x = new m(this);
        (this.then = function (C, E) {
          var A = {
            success: typeof C == "function" ? C : !0,
            failure: typeof E == "function" ? E : !1,
          };
          return (
            (A.promise = new this.constructor(function (I, D) {
              if (typeof I != "function" || typeof D != "function")
                throw TypeError("Not a function");
              (A.resolve = I), (A.reject = D);
            })),
            x.chain.push(A),
            x.state !== 0 && a(u, x),
            A.promise
          );
        }),
          (this.catch = function (C) {
            return this.then(void 0, C);
          });
        try {
          _.call(
            void 0,
            function (C) {
              d.call(x, C);
            },
            function (C) {
              h.call(x, C);
            }
          );
        } catch (g) {
          h.call(x, g);
        }
      }
      var T = t({}, "constructor", y, !1);
      return (
        (y.prototype = T),
        t(T, "__NPO__", 0, !1),
        t(y, "resolve", function (x) {
          var g = this;
          return x && typeof x == "object" && x.__NPO__ === 1
            ? x
            : new g(function (E, A) {
                if (typeof E != "function" || typeof A != "function")
                  throw TypeError("Not a function");
                E(x);
              });
        }),
        t(y, "reject", function (x) {
          return new this(function (C, E) {
            if (typeof C != "function" || typeof E != "function")
              throw TypeError("Not a function");
            E(x);
          });
        }),
        t(y, "all", function (x) {
          var g = this;
          return s.call(x) != "[object Array]"
            ? g.reject(TypeError("Not an array"))
            : x.length === 0
            ? g.resolve([])
            : new g(function (E, A) {
                if (typeof E != "function" || typeof A != "function")
                  throw TypeError("Not a function");
                var M = x.length,
                  I = Array(M),
                  D = 0;
                f(
                  g,
                  x,
                  function (S, P) {
                    (I[S] = P), ++D === M && E(I);
                  },
                  A
                );
              });
        }),
        t(y, "race", function (x) {
          var g = this;
          return s.call(x) != "[object Array]"
            ? g.reject(TypeError("Not an array"))
            : new g(function (E, A) {
                if (typeof E != "function" || typeof A != "function")
                  throw TypeError("Not a function");
                f(
                  g,
                  x,
                  function (I, D) {
                    E(D);
                  },
                  A
                );
              });
        }),
        y
      );
    });
  }),
  qi = new WeakMap();
function Ln(r, e, t) {
  var i = qi.get(r.element) || {};
  e in i || (i[e] = []), i[e].push(t), qi.set(r.element, i);
}
function _o(r, e) {
  var t = qi.get(r.element) || {};
  return t[e] || [];
}
function bo(r, e, t) {
  var i = qi.get(r.element) || {};
  if (!i[e]) return !0;
  if (!t) return (i[e] = []), qi.set(r.element, i), !0;
  var n = i[e].indexOf(t);
  return (
    n !== -1 && i[e].splice(n, 1),
    qi.set(r.element, i),
    i[e] && i[e].length === 0
  );
}
function Ty(r, e) {
  var t = _o(r, e);
  if (t.length < 1) return !1;
  var i = t.shift();
  return bo(r, e, i), i;
}
function xy(r, e) {
  var t = qi.get(r);
  qi.set(e, t), qi.delete(r);
}
function ws(r) {
  if (typeof r == "string")
    try {
      r = JSON.parse(r);
    } catch {
      return {};
    }
  return r;
}
function yr(r, e, t) {
  if (!(!r.element.contentWindow || !r.element.contentWindow.postMessage)) {
    var i = { method: e };
    t !== void 0 && (i.value = t);
    var n = parseFloat(
      navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
    );
    n >= 8 && n < 10 && (i = JSON.stringify(i)),
      r.element.contentWindow.postMessage(i, r.origin);
  }
}
function Cy(r, e) {
  e = ws(e);
  var t = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var n = _o(r, e.data.method);
      n.forEach(function (o) {
        var a = new Error(e.data.message);
        (a.name = e.data.name), o.reject(a), bo(r, e.data.method, o);
      });
    }
    (t = _o(r, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var s = Ty(r, e.method);
    s && (t.push(s), (i = e.value));
  }
  t.forEach(function (o) {
    try {
      if (typeof o == "function") {
        o.call(r, i);
        return;
      }
      o.resolve(i);
    } catch {}
  });
}
var Ey = [
  "airplay",
  "audio_tracks",
  "audiotrack",
  "autopause",
  "autoplay",
  "background",
  "byline",
  "cc",
  "chapter_id",
  "chapters",
  "chromecast",
  "color",
  "colors",
  "controls",
  "dnt",
  "end_time",
  "fullscreen",
  "height",
  "id",
  "initial_quality",
  "interactive_params",
  "keyboard",
  "loop",
  "maxheight",
  "max_quality",
  "maxwidth",
  "min_quality",
  "muted",
  "play_button_position",
  "playsinline",
  "portrait",
  "preload",
  "progress_bar",
  "quality",
  "quality_selector",
  "responsive",
  "skipping_forward",
  "speed",
  "start_time",
  "texttrack",
  "thumbnail_id",
  "title",
  "transcript",
  "transparent",
  "unmute_button",
  "url",
  "vimeo_logo",
  "volume",
  "watch_full_video",
  "width",
];
function uf(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Ey.reduce(function (t, i) {
    var n = r.getAttribute("data-vimeo-".concat(i));
    return (n || n === "") && (t[i] = n === "" ? 1 : n), t;
  }, e);
}
function bl(r, e) {
  var t = r.html;
  if (!e) throw new TypeError("An element must be provided");
  if (e.getAttribute("data-vimeo-initialized") !== null)
    return e.querySelector("iframe");
  var i = document.createElement("div");
  return (
    (i.innerHTML = t),
    e.appendChild(i.firstChild),
    e.setAttribute("data-vimeo-initialized", "true"),
    e.querySelector("iframe")
  );
}
function cf(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, n) {
    if (!Bi(r)) throw new TypeError("“".concat(r, "” is not a vimeo.com url."));
    var s = yy(r),
      o = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(r));
    for (var a in e)
      e.hasOwnProperty(a) &&
        (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
    var l =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    l.open("GET", o, !0),
      (l.onload = function () {
        if (l.status === 404) {
          n(new Error("“".concat(r, "” was not found.")));
          return;
        }
        if (l.status === 403) {
          n(new Error("“".concat(r, "” is not embeddable.")));
          return;
        }
        try {
          var u = JSON.parse(l.responseText);
          if (u.domain_status_code === 403) {
            bl(u, t), n(new Error("“".concat(r, "” is not embeddable.")));
            return;
          }
          i(u);
        } catch (c) {
          n(c);
        }
      }),
      (l.onerror = function () {
        var u = l.status ? " (".concat(l.status, ")") : "";
        n(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              u,
              "."
            )
          )
        );
      }),
      l.send();
  });
}
function Py() {
  var r =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = function (n) {
      "console" in window;
    };
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var n = uf(i),
        s = lf(n);
      cf(s, n, i)
        .then(function (o) {
          return bl(o, i);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
function Ay() {
  var r =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = function (i) {
      if (Bi(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
        var n = i.source ? Ao(i.source, r) : null;
        if (n) {
          var s = n.parentElement;
          s.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
        }
      }
    };
    window.addEventListener("message", e);
  }
}
function ky() {
  var r =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = function (i) {
      if (Bi(i.origin)) {
        var n = ws(i.data);
        if (!(!n || n.event !== "ready")) {
          var s = i.source ? Ao(i.source, r) : null;
          if (s && af(s.src)) {
            var o = new Sl(s);
            o.callMethod("appendVideoMetadata", window.location.href);
          }
        }
      }
    };
    window.addEventListener("message", e);
  }
}
function Oy() {
  var r =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = function (n) {
        "console" in window;
      },
      t = function (n) {
        if (Bi(n.origin)) {
          var s = ws(n.data);
          if (!(!s || s.event !== "ready")) {
            var o = n.source ? Ao(n.source, r) : null;
            if (o && af(o.src)) {
              var a = new Sl(o);
              a.getVideoId()
                .then(function (l) {
                  var u = new RegExp(
                    "[?&]vimeo_t_".concat(l, "=([^&#]*)")
                  ).exec(window.location.href);
                  if (u && u[1]) {
                    var c = decodeURI(u[1]);
                    a.setCurrentTime(c);
                  }
                })
                .catch(e);
            }
          }
        }
      };
    window.addEventListener("message", t);
  }
}
function My() {
  if (!window.VimeoDRMEmbedsUpdated) {
    window.VimeoDRMEmbedsUpdated = !0;
    var r = function (t) {
      if (Bi(t.origin)) {
        var i = ws(t.data);
        if (!(!i || i.event !== "drminitfailed")) {
          var n = t.source ? Ao(t.source) : null;
          if (n) {
            var s = n.getAttribute("allow") || "",
              o = s.includes("encrypted-media");
            if (!o) {
              n.setAttribute("allow", "".concat(s, "; encrypted-media"));
              var a = new URL(n.getAttribute("src"));
              a.searchParams.set("forcereload", "drm"),
                n.setAttribute("src", a.toString());
              return;
            }
          }
        }
      }
    };
    window.addEventListener("message", r);
  }
}
function Ly() {
  var r = (function () {
      for (
        var i,
          n = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          s = 0,
          o = n.length,
          a = {};
        s < o;
        s++
      )
        if (((i = n[s]), i && i[1] in document)) {
          for (s = 0; s < i.length; s++) a[n[0][s]] = i[s];
          return a;
        }
      return !1;
    })(),
    e = {
      fullscreenchange: r.fullscreenchange,
      fullscreenerror: r.fullscreenerror,
    },
    t = {
      request: function (n) {
        return new Promise(function (s, o) {
          var a = function u() {
            t.off("fullscreenchange", u), s();
          };
          t.on("fullscreenchange", a), (n = n || document.documentElement);
          var l = n[r.requestFullscreen]();
          l instanceof Promise && l.then(a).catch(o);
        });
      },
      exit: function () {
        return new Promise(function (n, s) {
          if (!t.isFullscreen) {
            n();
            return;
          }
          var o = function l() {
            t.off("fullscreenchange", l), n();
          };
          t.on("fullscreenchange", o);
          var a = document[r.exitFullscreen]();
          a instanceof Promise && a.then(o).catch(s);
        });
      },
      on: function (n, s) {
        var o = e[n];
        o && document.addEventListener(o, s);
      },
      off: function (n, s) {
        var o = e[n];
        o && document.removeEventListener(o, s);
      },
    };
  return (
    Object.defineProperties(t, {
      isFullscreen: {
        get: function () {
          return !!document[r.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return document[r.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!document[r.fullscreenEnabled];
        },
      },
    }),
    t
  );
}
var Dy = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  Iy = (function (r) {
    ny(t, r);
    var e = ay(t);
    function t(i, n) {
      var s,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0;
      return (
        tf(this, t),
        (s = e.call(this)),
        Qs(Js(s), "logger", void 0),
        Qs(Js(s), "speedAdjustment", 0),
        Qs(
          Js(s),
          "adjustSpeed",
          (function () {
            var l = xr(
              St().mark(function u(c, d) {
                var h;
                return St().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (s.speedAdjustment !== d) {
                          p.next = 2;
                          break;
                        }
                        return p.abrupt("return");
                      case 2:
                        return (p.next = 4), c.getPlaybackRate();
                      case 4:
                        return (
                          (p.t0 = p.sent),
                          (p.t1 = s.speedAdjustment),
                          (p.t2 = p.t0 - p.t1),
                          (p.t3 = d),
                          (h = p.t2 + p.t3),
                          s.log("New playbackRate:  ".concat(h)),
                          (p.next = 12),
                          c.setPlaybackRate(h)
                        );
                      case 12:
                        s.speedAdjustment = d;
                      case 13:
                      case "end":
                        return p.stop();
                    }
                }, u);
              })
            );
            return function (u, c) {
              return l.apply(this, arguments);
            };
          })()
        ),
        (s.logger = a),
        s.init(n, i, $u($u({}, Dy), o)),
        s
      );
    }
    return (
      rf(t, [
        {
          key: "disconnect",
          value: function () {
            this.dispatchEvent(new Event("disconnect"));
          },
        },
        {
          key: "init",
          value: (function () {
            var i = xr(
              St().mark(function s(o, a, l) {
                var u = this,
                  c,
                  d,
                  h;
                return St().wrap(
                  function (p) {
                    for (;;)
                      switch ((p.prev = p.next)) {
                        case 0:
                          return (
                            (p.next = 2), this.waitForTOReadyState(o, "open")
                          );
                        case 2:
                          if (l.role !== "viewer") {
                            p.next = 10;
                            break;
                          }
                          return (p.next = 5), this.updatePlayer(o, a, l);
                        case 5:
                          (c = Xu(o, "change", function () {
                            return u.updatePlayer(o, a, l);
                          })),
                            (d = this.maintainPlaybackPosition(o, a, l)),
                            this.addEventListener("disconnect", function () {
                              d.cancel(), c.cancel();
                            }),
                            (p.next = 14);
                          break;
                        case 10:
                          return (p.next = 12), this.updateTimingObject(o, a);
                        case 12:
                          (h = Xu(
                            a,
                            ["seeked", "play", "pause", "ratechange"],
                            function () {
                              return u.updateTimingObject(o, a);
                            },
                            "on",
                            "off"
                          )),
                            this.addEventListener("disconnect", function () {
                              return h.cancel();
                            });
                        case 14:
                        case "end":
                          return p.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
            function n(s, o, a) {
              return i.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "updateTimingObject",
          value: (function () {
            var i = xr(
              St().mark(function s(o, a) {
                var l, u, c, d, h;
                return St().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        return (
                          (p.next = 2),
                          Promise.all([
                            a.getCurrentTime(),
                            a.getPaused(),
                            a.getPlaybackRate(),
                          ])
                        );
                      case 2:
                        (l = p.sent),
                          (u = ly(l, 3)),
                          (c = u[0]),
                          (d = u[1]),
                          (h = u[2]),
                          o.update({ position: c, velocity: d ? 0 : h });
                      case 8:
                      case "end":
                        return p.stop();
                    }
                }, s);
              })
            );
            function n(s, o) {
              return i.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "updatePlayer",
          value: (function () {
            var i = xr(
              St().mark(function s(o, a, l) {
                var u, c, d;
                return St().wrap(
                  function (f) {
                    for (;;)
                      switch ((f.prev = f.next)) {
                        case 0:
                          if (
                            ((u = o.query()),
                            (c = u.position),
                            (d = u.velocity),
                            typeof c == "number" && a.setCurrentTime(c),
                            typeof d != "number")
                          ) {
                            f.next = 25;
                            break;
                          }
                          if (d !== 0) {
                            f.next = 11;
                            break;
                          }
                          return (f.next = 6), a.getPaused();
                        case 6:
                          if (((f.t0 = f.sent), f.t0 !== !1)) {
                            f.next = 9;
                            break;
                          }
                          a.pause();
                        case 9:
                          f.next = 25;
                          break;
                        case 11:
                          if (!(d > 0)) {
                            f.next = 25;
                            break;
                          }
                          return (f.next = 14), a.getPaused();
                        case 14:
                          if (((f.t1 = f.sent), f.t1 !== !0)) {
                            f.next = 19;
                            break;
                          }
                          return (
                            (f.next = 18),
                            a.play().catch(
                              (function () {
                                var p = xr(
                                  St().mark(function m(y) {
                                    return St().wrap(function (_) {
                                      for (;;)
                                        switch ((_.prev = _.next)) {
                                          case 0:
                                            if (
                                              !(
                                                y.name === "NotAllowedError" &&
                                                l.autoPlayMuted
                                              )
                                            ) {
                                              _.next = 5;
                                              break;
                                            }
                                            return (_.next = 3), a.setMuted(!0);
                                          case 3:
                                            return (
                                              (_.next = 5),
                                              a.play().catch(function (x) {})
                                            );
                                          case 5:
                                          case "end":
                                            return _.stop();
                                        }
                                    }, m);
                                  })
                                );
                                return function (m) {
                                  return p.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 18:
                          this.updatePlayer(o, a, l);
                        case 19:
                          return (f.next = 21), a.getPlaybackRate();
                        case 21:
                          if (((f.t2 = f.sent), (f.t3 = d), f.t2 === f.t3)) {
                            f.next = 25;
                            break;
                          }
                          a.setPlaybackRate(d);
                        case 25:
                        case "end":
                          return f.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
            function n(s, o, a) {
              return i.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "maintainPlaybackPosition",
          value: function (n, s, o) {
            var a = this,
              l = o.allowedDrift,
              u = o.maxAllowedDrift,
              c = o.minCheckInterval,
              d = o.maxRateAdjustment,
              h = o.maxTimeToCatchUp,
              f = Math.min(h, Math.max(c, u)) * 1e3,
              p = (function () {
                var y = xr(
                  St().mark(function T() {
                    var _, x, g, C, E;
                    return St().wrap(function (M) {
                      for (;;)
                        switch ((M.prev = M.next)) {
                          case 0:
                            if (((M.t0 = n.query().velocity === 0), M.t0)) {
                              M.next = 6;
                              break;
                            }
                            return (M.next = 4), s.getPaused();
                          case 4:
                            (M.t1 = M.sent), (M.t0 = M.t1 === !0);
                          case 6:
                            if (!M.t0) {
                              M.next = 8;
                              break;
                            }
                            return M.abrupt("return");
                          case 8:
                            return (
                              (M.t2 = n.query().position),
                              (M.next = 11),
                              s.getCurrentTime()
                            );
                          case 11:
                            if (
                              ((M.t3 = M.sent),
                              (_ = M.t2 - M.t3),
                              (x = Math.abs(_)),
                              a.log("Drift: ".concat(_)),
                              !(x > u))
                            ) {
                              M.next = 22;
                              break;
                            }
                            return (M.next = 18), a.adjustSpeed(s, 0);
                          case 18:
                            s.setCurrentTime(n.query().position),
                              a.log("Resync by currentTime"),
                              (M.next = 29);
                            break;
                          case 22:
                            if (!(x > l)) {
                              M.next = 29;
                              break;
                            }
                            return (
                              (g = x / h),
                              (C = d),
                              (E = g < C ? (C - g) / 2 : C),
                              (M.next = 28),
                              a.adjustSpeed(s, E * Math.sign(_))
                            );
                          case 28:
                            a.log("Resync by playbackRate");
                          case 29:
                          case "end":
                            return M.stop();
                        }
                    }, T);
                  })
                );
                return function () {
                  return y.apply(this, arguments);
                };
              })(),
              m = setInterval(function () {
                return p();
              }, f);
            return {
              cancel: function () {
                return clearInterval(m);
              },
            };
          },
        },
        {
          key: "log",
          value: function (n) {
            var s;
            (s = this.logger) === null ||
              s === void 0 ||
              s.call(this, "TimingSrcConnector: ".concat(n));
          },
        },
        {
          key: "waitForTOReadyState",
          value: function (n, s) {
            return new Promise(function (o) {
              var a = function l() {
                n.readyState === s
                  ? o()
                  : n.addEventListener("readystatechange", l, { once: !0 });
              };
              a();
            });
          },
        },
      ]),
      t
    );
  })(Fa(EventTarget)),
  Ur = new WeakMap(),
  na = new WeakMap(),
  Mt = {},
  Sl = (function () {
    function r(e) {
      var t = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (tf(this, r),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 && window.console, (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !gy(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var n = e.querySelector("iframe");
        n && (e = n);
      }
      if (e.nodeName === "IFRAME" && !Bi(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (Ur.has(e)) return Ur.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new ti(function (a, l) {
        if (
          ((t._onMessage = function (d) {
            if (!(!Bi(d.origin) || t.element.contentWindow !== d.source)) {
              t.origin === "*" && (t.origin = d.origin);
              var h = ws(d.data),
                f = h && h.event === "error",
                p = f && h.data && h.data.method === "ready";
              if (p) {
                var m = new Error(h.data.message);
                (m.name = h.data.name), l(m);
                return;
              }
              var y = h && h.event === "ready",
                T = h && h.method === "ping";
              if (y || T) {
                t.element.setAttribute("data-ready", "true"), a();
                return;
              }
              Cy(t, h);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var u = uf(e, i),
            c = lf(u);
          cf(c, u, e)
            .then(function (d) {
              var h = bl(d, e);
              return (
                (t.element = h),
                (t._originalElement = e),
                xy(e, h),
                Ur.set(t.element, t),
                d
              );
            })
            .catch(l);
        }
      });
      if (
        (na.set(this, s),
        Ur.set(this.element, this),
        this.element.nodeName === "IFRAME" && yr(this, "ping"),
        Mt.isEnabled)
      ) {
        var o = function () {
          return Mt.exit();
        };
        (this.fullscreenchangeHandler = function () {
          Mt.isFullscreen
            ? Ln(t, "event:exitFullscreen", o)
            : bo(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              yr(t, "fullscreenchange", Mt.isFullscreen);
            });
        }),
          Mt.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      rf(
        r,
        [
          {
            key: "callMethod",
            value: function (t) {
              for (
                var i = this,
                  n = arguments.length,
                  s = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                s[o - 1] = arguments[o];
              if (t == null)
                throw new TypeError("You must pass a method name.");
              return new ti(function (a, l) {
                return i
                  .ready()
                  .then(function () {
                    Ln(i, t, { resolve: a, reject: l }),
                      s.length === 0 ? (s = {}) : s.length === 1 && (s = s[0]),
                      yr(i, t, s);
                  })
                  .catch(l);
              });
            },
          },
          {
            key: "get",
            value: function (t) {
              var i = this;
              return new ti(function (n, s) {
                return (
                  (t = Gu(t, "get")),
                  i
                    .ready()
                    .then(function () {
                      Ln(i, t, { resolve: n, reject: s }), yr(i, t);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (t, i) {
              var n = this;
              return new ti(function (s, o) {
                if (((t = Gu(t, "set")), i == null))
                  throw new TypeError("There must be a value to set.");
                return n
                  .ready()
                  .then(function () {
                    Ln(n, t, { resolve: s, reject: o }), yr(n, t, i);
                  })
                  .catch(o);
              });
            },
          },
          {
            key: "on",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (!i) throw new TypeError("You must pass a callback function.");
              if (typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var n = _o(this, "event:".concat(t));
              n.length === 0 &&
                this.callMethod("addEventListener", t).catch(function () {}),
                Ln(this, "event:".concat(t), i);
            },
          },
          {
            key: "off",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (i && typeof i != "function")
                throw new TypeError("The callback must be a function.");
              var n = bo(this, "event:".concat(t), i);
              n &&
                this.callMethod("removeEventListener", t).catch(function (
                  s
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (t) {
              return this.callMethod("loadVideo", t);
            },
          },
          {
            key: "ready",
            value: function () {
              var t =
                na.get(this) ||
                new ti(function (i, n) {
                  n(new Error("Unknown player. Probably unloaded."));
                });
              return ti.resolve(t);
            },
          },
          {
            key: "addCuePoint",
            value: function (t) {
              var i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: t, data: i });
            },
          },
          {
            key: "removeCuePoint",
            value: function (t) {
              return this.callMethod("removeCuePoint", t);
            },
          },
          {
            key: "enableTextTrack",
            value: function (t, i) {
              if (!t) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: t,
                kind: i,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "requestFullscreen",
            value: function () {
              return Mt.isEnabled
                ? Mt.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return Mt.isEnabled
                ? Mt.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return Mt.isEnabled
                ? ti.resolve(Mt.isFullscreen)
                : this.get("fullscreen");
            },
          },
          {
            key: "requestPictureInPicture",
            value: function () {
              return this.callMethod("requestPictureInPicture");
            },
          },
          {
            key: "exitPictureInPicture",
            value: function () {
              return this.callMethod("exitPictureInPicture");
            },
          },
          {
            key: "getPictureInPicture",
            value: function () {
              return this.get("pictureInPicture");
            },
          },
          {
            key: "remotePlaybackPrompt",
            value: function () {
              return this.callMethod("remotePlaybackPrompt");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              return new ti(function (i) {
                if (
                  (na.delete(t),
                  Ur.delete(t.element),
                  t._originalElement &&
                    (Ur.delete(t._originalElement),
                    t._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  t.element &&
                    t.element.nodeName === "IFRAME" &&
                    t.element.parentNode &&
                    (t.element.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== t.element.parentNode
                      ? t.element.parentNode.parentNode.removeChild(
                          t.element.parentNode
                        )
                      : t.element.parentNode.removeChild(t.element)),
                  t.element &&
                    t.element.nodeName === "DIV" &&
                    t.element.parentNode)
                ) {
                  t.element.removeAttribute("data-vimeo-initialized");
                  var n = t.element.querySelector("iframe");
                  n &&
                    n.parentNode &&
                    (n.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== n.parentNode
                      ? n.parentNode.parentNode.removeChild(n.parentNode)
                      : n.parentNode.removeChild(n));
                }
                t._window.removeEventListener("message", t._onMessage),
                  Mt.isEnabled &&
                    Mt.off("fullscreenchange", t.fullscreenchangeHandler),
                  i();
              });
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (t) {
              return this.set("autopause", t);
            },
          },
          {
            key: "getBuffered",
            value: function () {
              return this.get("buffered");
            },
          },
          {
            key: "getCameraProps",
            value: function () {
              return this.get("cameraProps");
            },
          },
          {
            key: "setCameraProps",
            value: function (t) {
              return this.set("cameraProps", t);
            },
          },
          {
            key: "getChapters",
            value: function () {
              return this.get("chapters");
            },
          },
          {
            key: "getCurrentChapter",
            value: function () {
              return this.get("currentChapter");
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "getColors",
            value: function () {
              return ti.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (t) {
              return this.set("color", t);
            },
          },
          {
            key: "setColors",
            value: function (t) {
              if (!Array.isArray(t))
                return new ti(function (s, o) {
                  return o(new TypeError("Argument must be an array."));
                });
              var i = new ti(function (s) {
                  return s(null);
                }),
                n = [
                  t[0] ? this.set("colorOne", t[0]) : i,
                  t[1] ? this.set("colorTwo", t[1]) : i,
                  t[2] ? this.set("colorThree", t[2]) : i,
                  t[3] ? this.set("colorFour", t[3]) : i,
                ];
              return ti.all(n);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (t) {
              return this.set("currentTime", t);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (t) {
              return this.set("loop", t);
            },
          },
          {
            key: "setMuted",
            value: function (t) {
              return this.set("muted", t);
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.get("muted");
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getPlaybackRate",
            value: function () {
              return this.get("playbackRate");
            },
          },
          {
            key: "setPlaybackRate",
            value: function (t) {
              return this.set("playbackRate", t);
            },
          },
          {
            key: "getPlayed",
            value: function () {
              return this.get("played");
            },
          },
          {
            key: "getQualities",
            value: function () {
              return this.get("qualities");
            },
          },
          {
            key: "getQuality",
            value: function () {
              return this.get("quality");
            },
          },
          {
            key: "setQuality",
            value: function (t) {
              return this.set("quality", t);
            },
          },
          {
            key: "getRemotePlaybackAvailability",
            value: function () {
              return this.get("remotePlaybackAvailability");
            },
          },
          {
            key: "getRemotePlaybackState",
            value: function () {
              return this.get("remotePlaybackState");
            },
          },
          {
            key: "getSeekable",
            value: function () {
              return this.get("seekable");
            },
          },
          {
            key: "getSeeking",
            value: function () {
              return this.get("seeking");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (t) {
              return this.set("volume", t);
            },
          },
          {
            key: "setTimingSrc",
            value: (function () {
              var e = xr(
                St().mark(function i(n, s) {
                  var o = this,
                    a;
                  return St().wrap(
                    function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            if (n) {
                              u.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (u.next = 4), this.ready();
                          case 4:
                            return (
                              (a = new Iy(this, n, s)),
                              yr(this, "notifyTimingObjectConnect"),
                              a.addEventListener("disconnect", function () {
                                return yr(o, "notifyTimingObjectDisconnect");
                              }),
                              u.abrupt("return", a)
                            );
                          case 8:
                          case "end":
                            return u.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
              function t(i, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ],
        [
          {
            key: "isVimeoUrl",
            value: function (t) {
              return Bi(t);
            },
          },
        ]
      ),
      r
    );
  })();
of || ((Mt = Ly()), Py(), Ay(), ky(), Oy(), wy(), My());
const Ry = () => {
    document
      .querySelectorAll("[data-vimeo-player-init]")
      .forEach(function (e, t) {
        const i = e.getAttribute("data-vimeo-video-id"),
          n = e.getAttribute("data-vimeo-hash");
        if (!i) return;
        let s = `https://player.vimeo.com/video/${i}`;
        const o = new URLSearchParams();
        if (n)
          if (n.includes("?")) {
            const [P, v] = n.split("?");
            o.set("h", P),
              new URLSearchParams(v).forEach((b, k) => {
                o.set(k, b);
              });
          } else o.set("h", n);
        o.set("api", "1"),
          o.set("background", "1"),
          o.set("autoplay", "0"),
          o.set("loop", "0"),
          o.set("muted", "1"),
          (s += "?" + o.toString()),
          e.querySelector("iframe").setAttribute("src", s);
        const a = "vimeo-player-advanced-index-" + t;
        e.setAttribute("id", a);
        const l = e.id,
          u = new Sl(l);
        e.getAttribute("data-vimeo-update-size") === "true" &&
          u.getVideoWidth().then(function (P) {
            u.getVideoHeight().then(function (v) {
              const w = e.querySelector(".vimeo-player__before");
              w && (w.style.paddingTop = (v / P) * 100 + "%");
            });
          });
        let c;
        e.getAttribute("data-vimeo-update-size") === "cover" &&
          u.getVideoWidth().then(function (P) {
            u.getVideoHeight().then(function (v) {
              c = v / P;
              const w = e.querySelector(".vimeo-player__before");
              w && (w.style.paddingTop = "0%"), d();
            });
          });
        function d() {
          const P = e.offsetHeight / e.offsetWidth,
            v = e.querySelector(".vimeo-player__iframe");
          if (v && c)
            if (P > c) {
              const w = P / c;
              (v.style.width = w * 100 + "%"), (v.style.height = "100%");
            } else {
              const w = c / P;
              (v.style.height = w * 100 + "%"), (v.style.width = "100%");
            }
        }
        if (
          (e.getAttribute("data-vimeo-update-size") === "cover" &&
            window.addEventListener("resize", d),
          u.on("play", function () {
            e.setAttribute("data-vimeo-loaded", "true"),
              e.setAttribute("data-vimeo-playing", "true");
          }),
          e.getAttribute("data-vimeo-autoplay") === "false")
        )
          u.setVolume(1), u.pause();
        else if (
          (u.setVolume(0),
          e.setAttribute("data-vimeo-muted", "true"),
          e.getAttribute("data-vimeo-paused-by-user") === "false")
        ) {
          let P = function () {
            const v = e.getBoundingClientRect();
            v.top < window.innerHeight && v.bottom > 0 ? h() : f();
          };
          var S = P;
          P(), window.addEventListener("scroll", P);
        }
        function h() {
          e.setAttribute("data-vimeo-activated", "true"),
            e.setAttribute("data-vimeo-playing", "true"),
            u.play();
        }
        function f() {
          u.pause();
        }
        u.on("pause", function () {
          e.setAttribute("data-vimeo-playing", "false");
        });
        const p = e.querySelector('[data-vimeo-control="play"]');
        p &&
          p.addEventListener("click", function () {
            u.setVolume(0),
              h(),
              e.getAttribute("data-vimeo-muted") === "true"
                ? u.setVolume(0)
                : u.setVolume(1);
          });
        const m = e.querySelector('[data-vimeo-control="pause"]');
        m &&
          m.addEventListener("click", function () {
            f(),
              e.getAttribute("data-vimeo-autoplay") === "true" &&
                (e.setAttribute("data-vimeo-paused-by-user", "true"),
                window.removeEventListener("scroll", S));
          });
        const y = e.querySelector('[data-vimeo-control="mute"]');
        y &&
          y.addEventListener("click", function () {
            e.getAttribute("data-vimeo-muted") === "false"
              ? (u.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
              : (u.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
          });
        const T = !!(
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
          ),
          _ = e.querySelector('[data-vimeo-control="fullscreen"]');
        !T && _ && (_.style.display = "none"),
          _ &&
            _.addEventListener("click", () => {
              const P = document.getElementById(l);
              if (!P) return;
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement
                ? (e.setAttribute("data-vimeo-fullscreen", "false"),
                  (
                    document.exitFullscreen ||
                    document.webkitExitFullscreen ||
                    document.mozCancelFullScreen ||
                    document.msExitFullscreen
                  ).call(document))
                : (e.setAttribute("data-vimeo-fullscreen", "true"),
                  (
                    P.requestFullscreen ||
                    P.webkitRequestFullscreen ||
                    P.mozRequestFullScreen ||
                    P.msRequestFullscreen
                  ).call(P));
            });
        const x = () => {
          const P =
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement;
          e.setAttribute("data-vimeo-fullscreen", P ? "true" : "false");
        };
        [
          "fullscreenchange",
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "msfullscreenchange",
        ].forEach((P) => {
          document.addEventListener(P, x);
        });
        function g(P) {
          let v = Math.floor(P / 3600);
          P -= v * 3600;
          let w = Math.floor(P / 60);
          return (P -= w * 60), w + ":" + (P < 10 ? "0" + P : P);
        }
        const C = e.querySelector("[data-vimeo-duration]");
        u.getDuration().then(function (P) {
          C && (C.textContent = g(P)),
            e
              .querySelectorAll('[data-vimeo-control="timeline"], progress')
              .forEach((w) => {
                w.setAttribute("max", P);
              });
        });
        const E = e.querySelector('[data-vimeo-control="timeline"]'),
          A = e.querySelector("progress");
        function M() {
          u.getDuration().then(function () {
            const P = E.value;
            u.setCurrentTime(P), A && (A.value = P);
          });
        }
        E &&
          ["input", "change"].forEach((P) => {
            E.addEventListener(P, M);
          }),
          u.on("timeupdate", function (P) {
            E && (E.value = P.seconds),
              A && (A.value = P.seconds),
              C && (C.textContent = g(Math.trunc(P.seconds)));
          });
        let I;
        e.addEventListener("mousemove", function () {
          e.getAttribute("data-vimeo-hover") === "false" &&
            e.setAttribute("data-vimeo-hover", "true"),
            clearTimeout(I),
            (I = setTimeout(D, 3e3));
        });
        function D() {
          e.setAttribute("data-vimeo-hover", "false");
        }
        function z() {
          e.getAttribute("data-vimeo-autoplay") === "false"
            ? (e.setAttribute("data-vimeo-activated", "false"),
              e.setAttribute("data-vimeo-playing", "false"),
              u.unload())
            : u.play();
        }
        u.on("ended", z);
      });
  },
  Ny = () => {
    Ry();
  };
let Kr,
  Qr,
  wr = !1;
const Xi = {
    background: { duration: 0.5, ease: "expo.out" },
    content: {
      initial: {
        autoAlpha: 0,
        scale: 0.9,
        rotate: 5,
        y: "100%",
        transformOrigin: "top center",
      },
      final: { autoAlpha: 1, scale: 1, rotate: 0, y: "0%" },
      open: { duration: 0.9, ease: "elastic.out(0.3,0.4)" },
      close: { duration: 1, ease: "elastic.out(0.4,0.4)" },
    },
  },
  zy = () => {
    const r = document.querySelector('[demo-modal="component"]'),
      e = document.querySelectorAll('[demo-modal="close"]'),
      t = document.querySelectorAll('[demo-modal="open"]'),
      i = document.querySelector('[demo-modal="bg"]'),
      n = document.querySelector('[demo-modal="content"]');
    if (!r) return;
    const s = () => {
        if (wr) return;
        (wr = !0), r.classList.add("is--active");
        const m = wo();
        m && m.stop(), a();
      },
      o = () => {
        if (!wr) return;
        (wr = !1),
          r.classList.remove("is--active"),
          Kr && Kr.isActive() && Kr.pause(),
          Qr && Qr.isActive() && Qr.pause();
        const m = wo();
        m && m.start(), l();
      },
      a = () => {
        (Kr = V.timeline()),
          V.set(r, { display: "block", visibility: "visible", autoAlpha: 1 }),
          Kr.fromTo(i, { opacity: 0 }, { opacity: 1, ...Xi.background }),
          Kr.fromTo(
            n,
            Xi.content.initial,
            { ...Xi.content.final, ...Xi.content.open },
            "-=0.4"
          );
      },
      l = () => {
        (Qr = V.timeline()),
          Qr.to(n, { ...Xi.content.initial, ...Xi.content.close }),
          Qr.to(
            i,
            {
              opacity: 0,
              ...Xi.background,
              onComplete: () => {
                V.set(r, { display: "none", visibility: "hidden" });
              },
            },
            "-=1"
          );
      },
      u = (m) => {
        m.key === "Escape" && wr && o();
      },
      c = () => {
        t.forEach((m) => {
          m.addEventListener("click", (y) => {
            y.preventDefault(), s();
          });
        }),
          e.forEach((m) => {
            m.addEventListener("click", (y) => {
              y.preventDefault(), o();
            });
          }),
          i &&
            i.addEventListener("click", (m) => {
              m.target === i && wr && o();
            }),
          document.addEventListener("keydown", u);
      },
      h = {
        open: s,
        close: o,
        isOpen: () => wr,
        cleanup: () => {
          document.removeEventListener("keydown", u);
        },
      },
      f = () => {
        V.set(r, { display: "none", visibility: "hidden" }),
          V.set(i, { opacity: 0 }),
          V.set(n, Xi.content.initial);
      };
    return f(), c(), h;
  },
  Fy = () => zy(),
  By = () => {
    Gv(), Yv(), Kv(), Zv(), ey(), iy(), Ny(), Fy();
  },
  qy = () => {
    const r = ef(".example-component");
    r && (kv(r, "is-initialized"), r.addEventListener("click", () => {}));
  },
  Vy = () => {
    qy();
  };
document.addEventListener("DOMContentLoaded", () => {
  By(), Vy(), Wv(), yv();
});
document.addEventListener("visibilitychange", () => {
  document.hidden
    ? (V.globalTimeline.pause(), window.lenis && window.lenis.stop())
    : (V.globalTimeline.resume(), window.lenis && window.lenis.start());
});
