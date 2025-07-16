var bd = Object.defineProperty;
var Sd = (r, e, t) =>
  e in r
    ? bd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var V = (r, e, t) => Sd(r, typeof e != "symbol" ? e + "" : e, t);
function Mi(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function pu(r, e) {
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
 */ var Ut = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Zr = { duration: 0.5, overwrite: !1, delay: 0 },
  fa,
  nt,
  Te,
  ii = 1e8,
  ve = 1 / ii,
  ko = Math.PI * 2,
  Td = ko / 4,
  xd = 0,
  hu = Math.sqrt,
  Cd = Math.cos,
  Ed = Math.sin,
  Je = function (e) {
    return typeof e == "string";
  },
  De = function (e) {
    return typeof e == "function";
  },
  Ni = function (e) {
    return typeof e == "number";
  },
  pa = function (e) {
    return typeof e > "u";
  },
  Li = function (e) {
    return typeof e == "object";
  },
  Mt = function (e) {
    return e !== !1;
  },
  ha = function () {
    return typeof window < "u";
  },
  ns = function (e) {
    return De(e) || Je(e);
  },
  mu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  vt = Array.isArray,
  Io = /(?:-?\.?\d|\.)+/gi,
  gu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Hr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  no = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  vu = /[+-]=-?[.\d]+/,
  _u = /[^,'"\[\]\s]+/gi,
  Ad = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ae,
  wi,
  Ro,
  ma,
  Kt = {},
  ks = {},
  yu,
  wu = function (e) {
    return (ks = Qr(e, Kt)) && zt;
  },
  ga = function (e, t) {},
  Vn = function (e, t) {
    return !t && void 0;
  },
  bu = function (e, t) {
    return (e && (Kt[e] = t) && ks && (ks[e] = t)) || Kt;
  },
  qn = function () {
    return 0;
  },
  Pd = { suppressEvents: !0, isStart: !0, kill: !1 },
  bs = { suppressEvents: !0, kill: !1 },
  Ld = { suppressEvents: !0 },
  va = {},
  Ki = [],
  No = {},
  Su,
  $t = {},
  so = {},
  Ua = 30,
  Ss = [],
  _a = "",
  ya = function (e) {
    var t = e[0],
      i,
      n;
    if ((Li(t) || De(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (n = Ss.length; n-- && !Ss[n].targetTest(t); );
      i = Ss[n];
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new Xu(e[n], i)))) ||
        e.splice(n, 1);
    return e;
  },
  vr = function (e) {
    return e._gsap || ya(ri(e))[0]._gsap;
  },
  Tu = function (e, t, i) {
    return (i = e[t]) && De(i)
      ? e[t]()
      : (pa(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  Dt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Ie = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Fe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Gr = function (e, t) {
    var i = t.charAt(0),
      n = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
    );
  },
  Od = function (e, t) {
    for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
    return n < i;
  },
  Is = function () {
    var e = Ki.length,
      t = Ki.slice(0),
      i,
      n;
    for (No = {}, Ki.length = 0, i = 0; i < e; i++)
      (n = t[i]),
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
  },
  wa = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  xu = function (e, t, i, n) {
    Ki.length && !nt && Is(),
      e.render(t, i, !!(nt && t < 0 && wa(e))),
      Ki.length && !nt && Is();
  },
  Cu = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(_u).length < 2
      ? t
      : Je(e)
      ? e.trim()
      : e;
  },
  Eu = function (e) {
    return e;
  },
  Zt = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  Md = function (e) {
    return function (t, i) {
      for (var n in i)
        n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
    };
  },
  Qr = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Ka = function r(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = Li(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  Rs = function (e, t) {
    var i = {},
      n;
    for (n in e) n in t || (i[n] = e[n]);
    return i;
  },
  Cn = function (e) {
    var t = e.parent || Ae,
      i = e.keyframes ? Md(vt(e.keyframes)) : Zt;
    if (Mt(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Dd = function (e, t) {
    for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
    return i < 0;
  },
  Au = function (e, t, i, n, s) {
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
  Zs = function (e, t, i, n) {
    i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[n] === t && (e[n] = s),
      (t._next = t._prev = t.parent = null);
  },
  Ji = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  _r = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  kd = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  zo = function (e, t, i, n) {
    return (
      e._startAt &&
      (nt
        ? e._startAt.revert(bs)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, n))
    );
  },
  Id = function r(e) {
    return !e || (e._ts && r(e.parent));
  },
  Za = function (e) {
    return e._repeat ? Jr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Jr = function (e, t) {
    var i = Math.floor((e = Fe(e / t)));
    return e && i === e ? i - 1 : i;
  },
  Ns = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Qs = function (e) {
    return (e._end = Fe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ve) || 0)
    ));
  },
  Js = function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Fe(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Qs(e),
        i._dirty || _r(i, e)),
      e
    );
  },
  Pu = function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = Ns(e.rawTime(), t)),
        (!t._dur || Qn(0, t.totalDuration(), i) - t._tTime > ve) &&
          t.render(i, !0)),
      _r(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -ve;
    }
  },
  Ti = function (e, t, i, n) {
    return (
      t.parent && Ji(t),
      (t._start = Fe(
        (Ni(i) ? i : i || e !== Ae ? Jt(e, i, t) : e._time) + t._delay
      )),
      (t._end = Fe(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Au(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Bo(t) || (e._recent = t),
      n || Pu(e, t),
      e._ts < 0 && Js(e, e._tTime),
      e
    );
  },
  Lu = function (e, t) {
    return (
      (Kt.ScrollTrigger || ga("scrollTrigger", t)) &&
      Kt.ScrollTrigger.create(t, e)
    );
  },
  Ou = function (e, t, i, n, s) {
    if ((Sa(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !nt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Su !== Xt.frame
    )
      return Ki.push(e), (e._lazy = [s, n]), 1;
  },
  Rd = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  },
  Bo = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Nd = function (e, t, i, n) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Rd(e) && !(!e._initted && Bo(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Bo(e))))
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
        ((l = Qn(0, e._tDur, t)),
        (c = Jr(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== Jr(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || nt || n || e._zTime === ve || (!t && e._zTime))
    ) {
      if (!e._initted && Ou(e, t, n, i, l)) return;
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
      t < 0 && zo(e, t, i, !0),
        e._onUpdate && !i && jt(e, "onUpdate"),
        l && e._repeat && !i && e.parent && jt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Ji(e, 1),
          !i &&
            !nt &&
            (jt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  zd = function (e, t, i) {
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
  en = function (e, t, i, n) {
    var s = e._repeat,
      o = Fe(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !n && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Fe(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !n && Js(e, (e._tTime = e._tDur * a)),
      e.parent && Qs(e),
      i || _r(e.parent, e),
      e
    );
  },
  Qa = function (e) {
    return e instanceof Ct ? _r(e) : en(e, e._dur);
  },
  Bd = { _start: 0, endTime: qn, totalDuration: qn },
  Jt = function r(e, t, i) {
    var n = e.labels,
      s = e._recent || Bd,
      o = e.duration() >= ii ? s.endTime(!1) : e._dur,
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
  En = function (e, t, i) {
    var n = Ni(t[1]),
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
    return new Be(t[0], o, t[s + 1]);
  },
  ir = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Qn = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  ht = function (e, t) {
    return !Je(e) || !(t = Ad.exec(e)) ? "" : t[1];
  },
  Fd = function (e, t, i) {
    return ir(i, function (n) {
      return Qn(e, t, n);
    });
  },
  Fo = [].slice,
  Mu = function (e, t) {
    return (
      e &&
      Li(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Li(e[0]))) &&
      !e.nodeType &&
      e !== wi
    );
  },
  Vd = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (n) {
        var s;
        return (Je(n) && !t) || Mu(n, 1)
          ? (s = i).push.apply(s, ri(n))
          : i.push(n);
      }) || i
    );
  },
  ri = function (e, t, i) {
    return Te && !t && Te.selector
      ? Te.selector(e)
      : Je(e) && !i && (Ro || !tn())
      ? Fo.call((t || ma).querySelectorAll(e), 0)
      : vt(e)
      ? Vd(e, i)
      : Mu(e)
      ? Fo.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Vo = function (e) {
    return (
      (e = ri(e)[0] || Vn("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return ri(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? Vn("Invalid scope") || ma.createElement("div")
            : e
        );
      }
    );
  },
  Du = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  ku = function (e) {
    if (De(e)) return e;
    var t = Li(e) ? e : { each: e },
      i = yr(t.ease),
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
      function (m, f, h) {
        var p = (h || t).length,
          v = o[p],
          _,
          y,
          x,
          g,
          S,
          T,
          P,
          O,
          k;
        if (!v) {
          if (((k = t.grid === "auto" ? 0 : (t.grid || [1, ii])[1]), !k)) {
            for (
              P = -ii;
              P < (P = h[k++].getBoundingClientRect().left) && k < p;

            );
            k < p && k--;
          }
          for (
            v = o[p] = [],
              _ = l ? Math.min(k, p) * c - 0.5 : n % k,
              y = k === ii ? 0 : l ? (p * d) / k - 0.5 : (n / k) | 0,
              P = 0,
              O = ii,
              T = 0;
            T < p;
            T++
          )
            (x = (T % k) - _),
              (g = y - ((T / k) | 0)),
              (v[T] = S = u ? Math.abs(u === "y" ? g : x) : hu(x * x + g * g)),
              S > P && (P = S),
              S < O && (O = S);
          n === "random" && Du(v),
            (v.max = P - O),
            (v.min = O),
            (v.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (k > p
                    ? p - 1
                    : u
                    ? u === "y"
                      ? p / k
                      : k
                    : Math.max(k, p / k)) ||
                0) * (n === "edges" ? -1 : 1)),
            (v.b = p < 0 ? s - p : s),
            (v.u = ht(t.amount || t.each) || 0),
            (i = i && p < 0 ? $u(i) : i);
        }
        return (
          (p = (v[m] - v.min) / v.max || 0),
          Fe(v.b + (i ? i(p) : p) * v.v) + v.u
        );
      }
    );
  },
  qo = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var n = Fe(Math.round(parseFloat(i) / e) * e * t);
      return (n - (n % 1)) / t + (Ni(i) ? 0 : ht(i));
    };
  },
  Iu = function (e, t) {
    var i = vt(e),
      n,
      s;
    return (
      !i &&
        Li(e) &&
        ((n = i = e.radius || ii),
        e.values
          ? ((e = ri(e.values)), (s = !Ni(e[0])) && (n *= n))
          : (e = qo(e.increment))),
      ir(
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
                    u = ii,
                    c = 0,
                    d = e.length,
                    m,
                    f;
                  d--;

                )
                  s
                    ? ((m = e[d].x - a), (f = e[d].y - l), (m = m * m + f * f))
                    : (m = Math.abs(e[d] - a)),
                    m < u && ((u = m), (c = d));
                return (
                  (c = !n || u <= n ? e[c] : o),
                  s || c === o || Ni(o) ? c : c + ht(o)
                );
              }
          : qo(e)
      )
    );
  },
  Ru = function (e, t, i, n) {
    return ir(vt(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
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
  qd = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (n) {
      return t.reduce(function (s, o) {
        return o(s);
      }, n);
    };
  },
  Hd = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || ht(i));
    };
  },
  $d = function (e, t, i) {
    return zu(e, t, 0, 1, i);
  },
  Nu = function (e, t, i) {
    return ir(i, function (n) {
      return e[~~t(n)];
    });
  },
  Wd = function r(e, t, i) {
    var n = t - e;
    return vt(e)
      ? Nu(e, r(0, e.length), t)
      : ir(i, function (s) {
          return ((n + ((s - e) % n)) % n) + e;
        });
  },
  Gd = function r(e, t, i) {
    var n = t - e,
      s = n * 2;
    return vt(e)
      ? Nu(e, r(0, e.length - 1), t)
      : ir(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
        });
  },
  Hn = function (e) {
    for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
      (o = e.indexOf(")", n)),
        (a = e.charAt(n + 7) === "["),
        (s = e.substr(n + 7, o - n - 7).match(a ? _u : Io)),
        (i +=
          e.substr(t, n - t) + Ru(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  },
  zu = function (e, t, i, n, s) {
    var o = t - e,
      a = n - i;
    return ir(s, function (l) {
      return i + (((l - e) / o) * a || 0);
    });
  },
  Xd = function r(e, t, i, n) {
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
        m;
      if ((i === !0 && (n = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (vt(e) && !vt(t)) {
        for (c = [], d = e.length, m = d - 2, u = 1; u < d; u++)
          c.push(r(e[u - 1], e[u]));
        d--,
          (s = function (h) {
            h *= d;
            var p = Math.min(m, ~~h);
            return c[p](h - p);
          }),
          (i = t);
      } else n || (e = Qr(vt(e) ? [] : {}, e));
      if (!c) {
        for (l in t) ba.call(a, e, l, "get", t[l]);
        s = function (h) {
          return Ca(h, a) || (o ? e.p : e);
        };
      }
    }
    return ir(i, s);
  },
  Ja = function (e, t, i) {
    var n = e.labels,
      s = ii,
      o,
      a,
      l;
    for (o in n)
      (a = n[o] - t),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  jt = function (e, t, i) {
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
        i && Ki.length && Is(),
        a && (Te = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (Te = o),
        c
      );
  },
  _n = function (e) {
    return (
      Ji(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!nt),
      e.progress() < 1 && jt(e, "onInterrupt"),
      e
    );
  },
  $r,
  Bu = [],
  Fu = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), ha() || e.headless)) {
        var t = e.name,
          i = De(e),
          n =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: qn,
            render: Ca,
            add: ba,
            kill: uf,
            modifier: lf,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: xa,
            aliases: {},
            register: 0,
          };
        if ((tn(), e !== n)) {
          if ($t[t]) return;
          Zt(n, Zt(Rs(e, s), o)),
            Qr(n.prototype, Qr(s, Rs(e, o))),
            ($t[(n.prop = t)] = n),
            e.targetTest && (Ss.push(n), (va[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        bu(t, n), e.register && e.register(zt, n, kt);
      } else Bu.push(e);
  },
  ge = 255,
  yn = {
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
  oo = function (e, t, i) {
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
  Vu = function (e, t, i) {
    var n = e ? (Ni(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : yn.black,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      m,
      f,
      h;
    if (!n) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), yn[e]))
        n = yn[e];
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
        if (((n = h = e.match(Io)), !t))
          (l = (+n[0] % 360) / 360),
            (u = +n[1] / 100),
            (c = +n[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            n.length > 3 && (n[3] *= 1),
            (n[0] = oo(l + 1 / 3, s, o)),
            (n[1] = oo(l, s, o)),
            (n[2] = oo(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (n = e.match(gu)), i && n.length < 4 && (n[3] = 1), n;
      } else n = e.match(Io) || yn.transparent;
      n = n.map(Number);
    }
    return (
      t &&
        !h &&
        ((s = n[0] / ge),
        (o = n[1] / ge),
        (a = n[2] / ge),
        (d = Math.max(s, o, a)),
        (m = Math.min(s, o, a)),
        (c = (d + m) / 2),
        d === m
          ? (l = u = 0)
          : ((f = d - m),
            (u = c > 0.5 ? f / (2 - d - m) : f / (d + m)),
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
  qu = function (e) {
    var t = [],
      i = [],
      n = -1;
    return (
      e.split(Zi).forEach(function (s) {
        var o = s.match(Hr) || [];
        t.push.apply(t, o), i.push((n += o.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  el = function (e, t, i) {
    var n = "",
      s = (e + n).match(Zi),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (m) {
        return (
          (m = Vu(m, t, 1)) &&
          o +
            (t ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3] : m.join(",")) +
            ")"
        );
      })),
      i && ((c = qu(e)), (l = i.c), l.join(n) !== c.c.join(n)))
    )
      for (u = e.replace(Zi, "1").split(Hr), d = u.length - 1; a < d; a++)
        n +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : i).shift());
    if (!u)
      for (u = e.split(Zi), d = u.length - 1; a < d; a++) n += u[a] + s[a];
    return n + u[d];
  },
  Zi = (function () {
    var r =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in yn) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  })(),
  Yd = /hsl[a]?\(/,
  Hu = function (e) {
    var t = e.join(" "),
      i;
    if (((Zi.lastIndex = 0), Zi.test(t)))
      return (
        (i = Yd.test(t)),
        (e[1] = el(e[1], i)),
        (e[0] = el(e[0], i, qu(e[1]))),
        !0
      );
  },
  $n,
  Xt = (function () {
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
      m,
      f,
      h = function p(v) {
        var _ = r() - n,
          y = v === !0,
          x,
          g,
          S,
          T;
        if (
          ((_ > e || _ < 0) && (i += _ - t),
          (n += _),
          (S = n - i),
          (x = S - o),
          (x > 0 || y) &&
            ((T = ++d.frame),
            (m = S - d.time * 1e3),
            (d.time = S = S / 1e3),
            (o += x + (x >= s ? 4 : s - x)),
            (g = 1)),
          y || (l = u(p)),
          g)
        )
          for (f = 0; f < a.length; f++) a[f](S, m, T, v);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          h(!0);
        },
        deltaRatio: function (v) {
          return m / (1e3 / (v || 60));
        },
        wake: function () {
          yu &&
            (!Ro &&
              ha() &&
              ((wi = Ro = window),
              (ma = wi.document || {}),
              (Kt.gsap = zt),
              (wi.gsapVersions || (wi.gsapVersions = [])).push(zt.version),
              wu(ks || wi.GreenSockGlobals || (!wi.gsap && wi) || {}),
              Bu.forEach(Fu)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (u =
              c ||
              function (v) {
                return setTimeout(v, (o - d.time * 1e3 + 1) | 0);
              }),
            ($n = 1),
            h(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(l), ($n = 0), (u = qn);
        },
        lagSmoothing: function (v, _) {
          (e = v || 1 / 0), (t = Math.min(_ || 33, e));
        },
        fps: function (v) {
          (s = 1e3 / (v || 240)), (o = d.time * 1e3 + s);
        },
        add: function (v, _, y) {
          var x = _
            ? function (g, S, T, P) {
                v(g, S, T, P), d.remove(x);
              }
            : v;
          return d.remove(v), a[y ? "unshift" : "push"](x), tn(), x;
        },
        remove: function (v, _) {
          ~(_ = a.indexOf(v)) && a.splice(_, 1) && f >= _ && f--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  tn = function () {
    return !$n && Xt.wake();
  },
  rt = {},
  jd = /^[\d.\-M][\d.\-,\s]/,
  Ud = /["']/g,
  Kd = function (e) {
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
        (t[n] = isNaN(u) ? u.replace(Ud, "").trim() : +u),
        (n = l.substr(a + 1).trim());
    return t;
  },
  Zd = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      n = e.indexOf("(", t);
    return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
  },
  Qd = function (e) {
    var t = (e + "").split("("),
      i = rt[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [Kd(t[1])] : Zd(e).split(",").map(Cu)
        )
      : rt._CE && jd.test(e)
      ? rt._CE("", e)
      : i;
  },
  $u = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Wu = function r(e, t) {
    for (var i = e._first, n; i; )
      i instanceof Ct
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
  yr = function (e, t) {
    return (e && (De(e) ? e : rt[e] || Qd(e))) || t;
  },
  Or = function (e, t, i, n) {
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
      Dt(e, function (a) {
        (rt[a] = Kt[a] = s), (rt[(o = a.toLowerCase())] = i);
        for (var l in s)
          rt[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = rt[a + "." + l] = s[l];
      }),
      s
    );
  },
  Gu = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ao = function r(e, t, i) {
    var n = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / ko) * (Math.asin(1 / n) || 0),
      a = function (c) {
        return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Ed((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : Gu(a);
    return (
      (s = ko / s),
      (l.config = function (u, c) {
        return r(e, u, c);
      }),
      l
    );
  },
  lo = function r(e, t) {
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
          : Gu(i);
    return (
      (n.config = function (s) {
        return r(e, s);
      }),
      n
    );
  };
Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
  var t = e < 5 ? e + 1 : e;
  Or(
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
Or("Elastic", ao("in"), ao("out"), ao());
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
  Or(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Or("Expo", function (r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
Or("Circ", function (r) {
  return -(hu(1 - r * r) - 1);
});
Or("Sine", function (r) {
  return r === 1 ? 1 : -Cd(r * Td) + 1;
});
Or("Back", lo("in"), lo("out"), lo());
rt.SteppedEase =
  rt.steps =
  Kt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          n = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - ve;
        return function (a) {
          return (((n * Qn(0, o, a)) | 0) + s) * i;
        };
      },
    };
Zr.ease = rt["quad.out"];
Dt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (r) {
    return (_a += r + "," + r + "Params,");
  }
);
var Xu = function (e, t) {
    (this.id = xd++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Tu),
      (this.set = t ? t.getSetter : xa);
  },
  Wn = (function () {
    function r(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        en(this, +t.duration, 1, 1),
        (this.data = t.data),
        Te && ((this._ctx = Te), Te.data.push(this)),
        $n || Xt.wake();
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
            en(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, n) {
        if ((tn(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Js(this, i), !s._dp || s.parent || Pu(s, this); s && s.parent; )
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
            Ti(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !n) ||
            (this._initted && Math.abs(this._zTime) === ve) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), xu(this, i, n)),
          this
        );
      }),
      (e.time = function (i, n) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Za(this)) %
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
                Za(this),
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
          ? Jr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (i, n) {
        if (!arguments.length) return this._rts === -ve ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? Ns(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -ve ? 0 : this._rts),
          this.totalTime(
            Qn(-Math.abs(this._delay), this.totalDuration(), s),
            n !== !1
          ),
          Qs(this),
          kd(this)
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
                : (tn(),
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
            n && (n._sort || !this.parent) && Ti(n, this, i - this._delay), this
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
            ? Ns(n.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = Ld);
        var n = nt;
        return (
          (nt = i),
          wa(this) &&
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
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Qa(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var n = this._time;
          return (this._rDelay = i), Qa(this), n ? this.time(n) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, n) {
        return this.totalTime(Jt(this, i), Mt(n));
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
          var o = De(i) ? i : Eu,
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
        _n(this);
      }),
      r
    );
  })();
Zt(Wn.prototype, {
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
var Ct = (function (r) {
  pu(e, r);
  function e(i, n) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = r.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = Mt(i.sortChildren)),
      Ae && Ti(i.parent || Ae, Mi(s), n),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && Lu(Mi(s), i.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (n, s, o) {
      return En(0, arguments, this), this;
    }),
    (t.from = function (n, s, o) {
      return En(1, arguments, this), this;
    }),
    (t.fromTo = function (n, s, o, a) {
      return En(2, arguments, this), this;
    }),
    (t.set = function (n, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Cn(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Be(n, s, Jt(this, o), 1),
        this
      );
    }),
    (t.call = function (n, s, o) {
      return Ti(this, Be.delayedCall(0, n, s), o);
    }),
    (t.staggerTo = function (n, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Be(n, o, Jt(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (n, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (Cn(o).immediateRender = Mt(o.immediateRender)),
        this.staggerTo(n, s, o, a, l, u, c)
      );
    }),
    (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        (Cn(a).immediateRender = Mt(a.immediateRender)),
        this.staggerTo(n, s, a, l, u, c, d)
      );
    }),
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = n <= 0 ? 0 : Fe(n),
        d = this._zTime < 0 != n < 0 && (this._initted || !u),
        m,
        f,
        h,
        p,
        v,
        _,
        y,
        x,
        g,
        S,
        T,
        P;
      if (
        (this !== Ae && c > l && n >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (n += this._time - a)),
          (m = c),
          (g = this._start),
          (x = this._ts),
          (_ = !x),
          d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (v = u + this._rDelay),
            this._repeat < -1 && n < 0)
          )
            return this.totalTime(v * 100 + n, s, o);
          if (
            ((m = Fe(c % v)),
            c === l
              ? ((p = this._repeat), (m = u))
              : ((S = Fe(c / v)),
                (p = ~~S),
                p && p === S && ((m = u), p--),
                m > u && (m = u)),
            (S = Jr(this._tTime, v)),
            !a &&
              this._tTime &&
              S !== p &&
              this._tTime - S * v - this._dur <= 0 &&
              (S = p),
            T && p & 1 && ((m = u - m), (P = 1)),
            p !== S && !this._lock)
          ) {
            var O = T && S & 1,
              k = O === (T && p & 1);
            if (
              (p < S && (O = !O),
              (a = O ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (P ? 0 : Fe(p * v)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && jt(this, "onRepeat"),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              k &&
                ((this._lock = 2),
                (a = O ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Wu(this, P);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = zd(this, Fe(a), Fe(m))), y && (c -= m - (m = y._start))),
          (this._tTime = c),
          (this._time = m),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = n),
            (a = 0)),
          !a && c && !s && !S && (jt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (m >= a && n >= 0)
          for (f = this._first; f; ) {
            if (
              ((h = f._next), (f._act || m >= f._start) && f._ts && y !== f)
            ) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (m - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (m - f._start) * f._ts,
                  s,
                  o
                ),
                m !== this._time || (!this._ts && !_))
              ) {
                (y = 0), h && (c += this._zTime = -ve);
                break;
              }
            }
            f = h;
          }
        else {
          f = this._last;
          for (var M = n < 0 ? n : m; f; ) {
            if (((h = f._prev), (f._act || M <= f._end) && f._ts && y !== f)) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (M - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (M - f._start) * f._ts,
                  s,
                  o || (nt && wa(f))
                ),
                m !== this._time || (!this._ts && !_))
              ) {
                (y = 0), h && (c += this._zTime = M ? -ve : ve);
                break;
              }
            }
            f = h;
          }
        }
        if (
          y &&
          !s &&
          (this.pause(),
          (y.render(m >= a ? 0 : -ve)._zTime = m >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = g), Qs(this), this.render(n, s, o);
        this._onUpdate && !s && jt(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (g === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((n || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Ji(this, 1),
              !s &&
                !(n < 0 && !a) &&
                (c || a || !l) &&
                (jt(
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
      if ((Ni(s) || (s = Jt(this, s, n)), !(n instanceof Wn))) {
        if (vt(n))
          return (
            n.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Je(n)) return this.addLabel(n, s);
        if (De(n)) n = Be.delayedCall(0, n);
        else return this;
      }
      return this !== n ? Ti(this, n, s) : this;
    }),
    (t.getChildren = function (n, s, o, a) {
      n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -ii);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Be
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
        : De(n)
        ? this.killTweensOf(n)
        : (n.parent === this && Zs(this, n),
          n === this._recent && (this._recent = this._last),
          _r(this));
    }),
    (t.totalTime = function (n, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Fe(
              Xt.time -
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
      return (this.labels[n] = Jt(this, s)), this;
    }),
    (t.removeLabel = function (n) {
      return delete this.labels[n], this;
    }),
    (t.addPause = function (n, s, o) {
      var a = Be.delayedCall(0, s || qn, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), Ti(this, a, Jt(this, n))
      );
    }),
    (t.removePause = function (n) {
      var s = this._first;
      for (n = Jt(this, n); s; )
        s._start === n && s.data === "isPause" && Ji(s), (s = s._next);
    }),
    (t.killTweensOf = function (n, s, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; )
        Wi !== a[l] && a[l].kill(n, s);
      return this;
    }),
    (t.getTweensOf = function (n, s) {
      for (var o = [], a = ri(n), l = this._first, u = Ni(s), c; l; )
        l instanceof Be
          ? Od(l._targets, a) &&
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
        a = Jt(o, n),
        l = s,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        m = l.immediateRender,
        f,
        h = Be.to(
          o,
          Zt(
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
                  var v =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  h._dur !== v && en(h, v, 0, 1).render(h._time, !0, !0),
                    (f = 1);
                }
                c && c.apply(h, d || []);
              },
            },
            s
          )
        );
      return m ? h.render(0) : h;
    }),
    (t.tweenFromTo = function (n, s, o) {
      return this.tweenTo(s, Zt({ startAt: { time: Jt(this, n) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (n) {
      return n === void 0 && (n = this._time), Ja(this, Jt(this, n));
    }),
    (t.previousLabel = function (n) {
      return n === void 0 && (n = this._time), Ja(this, Jt(this, n), 1);
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
      return _r(this);
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
        _r(this)
      );
    }),
    (t.totalDuration = function (n) {
      var s = 0,
        o = this,
        a = o._last,
        l = ii,
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
              ? ((o._lock = 1), (Ti(o, a, c - a._delay, 1)._lock = 0))
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
        en(o, o === Ae && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (n) {
      if ((Ae._ts && (xu(Ae, Ns(n, Ae)), (Su = Xt.frame)), Xt.frame >= Ua)) {
        Ua += Ut.autoSleep || 120;
        var s = Ae._first;
        if ((!s || !s._ts) && Ut.autoSleep && Xt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Xt.sleep();
        }
      }
    }),
    e
  );
})(Wn);
Zt(Ct.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Jd = function (e, t, i, n, s, o, a) {
    var l = new kt(this._pt, e, t, 0, 1, Qu, null, s),
      u = 0,
      c = 0,
      d,
      m,
      f,
      h,
      p,
      v,
      _,
      y;
    for (
      l.b = i,
        l.e = n,
        i += "",
        n += "",
        (_ = ~n.indexOf("random(")) && (n = Hn(n)),
        o && ((y = [i, n]), o(y, e, t), (i = y[0]), (n = y[1])),
        m = i.match(no) || [];
      (d = no.exec(n));

    )
      (h = d[0]),
        (p = n.substring(u, d.index)),
        f ? (f = (f + 1) % 5) : p.substr(-5) === "rgba(" && (f = 1),
        h !== m[c++] &&
          ((v = parseFloat(m[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: v,
            c: h.charAt(1) === "=" ? Gr(v, h) - v : parseFloat(h) - v,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = no.lastIndex));
    return (
      (l.c = u < n.length ? n.substring(u, n.length) : ""),
      (l.fp = a),
      (vu.test(n) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  ba = function (e, t, i, n, s, o, a, l, u, c) {
    De(n) && (n = n(s || 0, e, o));
    var d = e[t],
      m =
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
      f = De(d) ? (u ? sf : Ku) : Ta,
      h;
    if (
      (Je(n) &&
        (~n.indexOf("random(") && (n = Hn(n)),
        n.charAt(1) === "=" &&
          ((h = Gr(m, n) + (ht(m) || 0)), (h || h === 0) && (n = h))),
      !c || m !== n || Ho)
    )
      return !isNaN(m * n) && n !== ""
        ? ((h = new kt(
            this._pt,
            e,
            t,
            +m || 0,
            n - (m || 0),
            typeof d == "boolean" ? af : Zu,
            0,
            f
          )),
          u && (h.fp = u),
          a && h.modifier(a, this, e),
          (this._pt = h))
        : (!d && !(t in e) && ga(t, n),
          Jd.call(this, e, t, m, n, f, l || Ut.stringFilter, u));
  },
  ef = function (e, t, i, n, s) {
    if (
      (De(e) && (e = An(e, s, t, i, n)),
      !Li(e) || (e.style && e.nodeType) || vt(e) || mu(e))
    )
      return Je(e) ? An(e, s, t, i, n) : e;
    var o = {},
      a;
    for (a in e) o[a] = An(e[a], s, t, i, n);
    return o;
  },
  Yu = function (e, t, i, n, s, o) {
    var a, l, u, c;
    if (
      $t[e] &&
      (a = new $t[e]()).init(
        s,
        a.rawVars ? t[e] : ef(t[e], n, s, o, i),
        i,
        n,
        o
      ) !== !1 &&
      ((i._pt = l = new kt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== $r)
    )
      for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  Wi,
  Ho,
  Sa = function r(e, t, i) {
    var n = e.vars,
      s = n.ease,
      o = n.startAt,
      a = n.immediateRender,
      l = n.lazy,
      u = n.onUpdate,
      c = n.runBackwards,
      d = n.yoyoEase,
      m = n.keyframes,
      f = n.autoRevert,
      h = e._dur,
      p = e._startAt,
      v = e._targets,
      _ = e.parent,
      y = _ && _.data === "nested" ? _.vars.targets : v,
      x = e._overwrite === "auto" && !fa,
      g = e.timeline,
      S,
      T,
      P,
      O,
      k,
      M,
      R,
      A,
      N,
      b,
      w,
      C,
      L;
    if (
      (g && (!m || !s) && (s = "none"),
      (e._ease = yr(s, Zr.ease)),
      (e._yEase = d ? $u(yr(d === !0 ? s : d, Zr.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !g && !!n.runBackwards),
      !g || (m && !n.stagger))
    ) {
      if (
        ((A = v[0] ? vr(v[0]).harness : 0),
        (C = A && n[A.prop]),
        (S = Rs(n, va)),
        p &&
          (p._zTime < 0 && p.progress(1),
          t < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && h ? bs : Pd),
          (p._lazy = 0)),
        o)
      ) {
        if (
          (Ji(
            (e._startAt = Be.set(
              v,
              Zt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !p && Mt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return jt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (nt || (!a && !f)) && e._startAt.revert(bs),
          a && h && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (c && h && !p) {
        if (
          (t && (a = !1),
          (P = Zt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !p && Mt(l),
              immediateRender: a,
              stagger: 0,
              parent: _,
            },
            S
          )),
          C && (P[A.prop] = C),
          Ji((e._startAt = Be.set(v, P))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (nt ? e._startAt.revert(bs) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          r(e._startAt, ve, ve);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (h && Mt(l)) || (l && !h), T = 0;
        T < v.length;
        T++
      ) {
        if (
          ((k = v[T]),
          (R = k._gsap || ya(v)[T]._gsap),
          (e._ptLookup[T] = b = {}),
          No[R.id] && Ki.length && Is(),
          (w = y === v ? T : y.indexOf(k)),
          A &&
            (N = new A()).init(k, C || S, e, w, y) !== !1 &&
            ((e._pt = O =
              new kt(e._pt, k, N.name, 0, 1, N.render, N, 0, N.priority)),
            N._props.forEach(function (D) {
              b[D] = O;
            }),
            N.priority && (M = 1)),
          !A || C)
        )
          for (P in S)
            $t[P] && (N = Yu(P, S, e, w, k, y))
              ? N.priority && (M = 1)
              : (b[P] = O =
                  ba.call(e, k, P, "get", S[P], w, y, 0, n.stringFilter));
        e._op && e._op[T] && e.kill(k, e._op[T]),
          x &&
            e._pt &&
            ((Wi = e),
            Ae.killTweensOf(k, b, e.globalTime(t)),
            (L = !e.parent),
            (Wi = 0)),
          e._pt && l && (No[R.id] = 1);
      }
      M && Ju(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !L),
      m && t <= 0 && g.render(ii, !0, !0);
  },
  tf = function (e, t, i, n, s, o, a, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      d,
      m,
      f;
    if (!u)
      for (
        u = e._ptCache[t] = [], m = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((c = m[f][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c)
          return (
            (Ho = 1),
            (e.vars[t] = "+=0"),
            Sa(e, a),
            (Ho = 0),
            l ? Vn(t + " not eligible for reset") : 1
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
  rf = function (e, t) {
    var i = e[0] ? vr(e[0]).harness : 0,
      n = i && i.aliases,
      s,
      o,
      a,
      l;
    if (!n) return t;
    s = Qr({}, t);
    for (o in n)
      if (o in s) for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  nf = function (e, t, i, n) {
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
  An = function (e, t, i, n, s) {
    return De(e)
      ? e.call(t, i, n, s)
      : Je(e) && ~e.indexOf("random(")
      ? Hn(e)
      : e;
  },
  ju = _a + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Uu = {};
Dt(ju + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
  return (Uu[r] = 1);
});
var Be = (function (r) {
  pu(e, r);
  function e(i, n, s, o) {
    var a;
    typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
      (a = r.call(this, o ? n : Cn(n)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      m = l.stagger,
      f = l.overwrite,
      h = l.keyframes,
      p = l.defaults,
      v = l.scrollTrigger,
      _ = l.yoyoEase,
      y = n.parent || Ae,
      x = (vt(i) || mu(i) ? Ni(i[0]) : "length" in n) ? [i] : ri(i),
      g,
      S,
      T,
      P,
      O,
      k,
      M,
      R;
    if (
      ((a._targets = x.length
        ? ya(x)
        : Vn(
            "GSAP target " + i + " not found. https://gsap.com",
            !Ut.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      h || m || ns(u) || ns(c))
    ) {
      if (
        ((n = a.vars),
        (g = a.timeline =
          new Ct({
            data: "nested",
            defaults: p || {},
            targets: y && y.data === "nested" ? y.vars.targets : x,
          })),
        g.kill(),
        (g.parent = g._dp = Mi(a)),
        (g._start = 0),
        m || ns(u) || ns(c))
      ) {
        if (((P = x.length), (M = m && ku(m)), Li(m)))
          for (O in m) ~ju.indexOf(O) && (R || (R = {}), (R[O] = m[O]));
        for (S = 0; S < P; S++)
          (T = Rs(n, Uu)),
            (T.stagger = 0),
            _ && (T.yoyoEase = _),
            R && Qr(T, R),
            (k = x[S]),
            (T.duration = +An(u, Mi(a), S, k, x)),
            (T.delay = (+An(c, Mi(a), S, k, x) || 0) - a._delay),
            !m &&
              P === 1 &&
              T.delay &&
              ((a._delay = c = T.delay), (a._start += c), (T.delay = 0)),
            g.to(k, T, M ? M(S, k, x) : 0),
            (g._ease = rt.none);
        g.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (h) {
        Cn(Zt(g.vars.defaults, { ease: "none" })),
          (g._ease = yr(h.ease || n.ease || "none"));
        var A = 0,
          N,
          b,
          w;
        if (vt(h))
          h.forEach(function (C) {
            return g.to(x, C, ">");
          }),
            g.duration();
        else {
          T = {};
          for (O in h)
            O === "ease" || O === "easeEach" || nf(O, h[O], T, h.easeEach);
          for (O in T)
            for (
              N = T[O].sort(function (C, L) {
                return C.t - L.t;
              }),
                A = 0,
                S = 0;
              S < N.length;
              S++
            )
              (b = N[S]),
                (w = {
                  ease: b.e,
                  duration: ((b.t - (S ? N[S - 1].t : 0)) / 100) * u,
                }),
                (w[O] = b.v),
                g.to(x, w, A),
                (A += w.duration);
          g.duration() < u && g.to({}, { duration: u - g.duration() });
        }
      }
      u || a.duration((u = g.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !fa && ((Wi = Mi(a)), Ae.killTweensOf(x), (Wi = 0)),
      Ti(y, Mi(a), s),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (d ||
        (!u &&
          !h &&
          a._start === Fe(y._time) &&
          Mt(d) &&
          Id(Mi(a)) &&
          y.data !== "nested")) &&
        ((a._tTime = -ve), a.render(Math.max(0, -c) || 0)),
      v && Lu(Mi(a), v),
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
        m,
        f,
        h,
        p,
        v,
        _,
        y,
        x,
        g;
      if (!u) Nd(this, n, s, o);
      else if (
        d !== this._tTime ||
        !n ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((m = d), (x = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(p * 100 + n, s, o);
          if (
            ((m = Fe(d % p)),
            d === l
              ? ((h = this._repeat), (m = u))
              : ((v = Fe(d / p)),
                (h = ~~v),
                h && h === v ? ((m = u), h--) : m > u && (m = u)),
            (_ = this._yoyo && h & 1),
            _ && ((g = this._yEase), (m = u - m)),
            (v = Jr(this._tTime, p)),
            m === a && !o && this._initted && h === v)
          )
            return (this._tTime = d), this;
          h !== v &&
            (x && this._yEase && Wu(x, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              m !== p &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Fe(p * h), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ou(this, c ? n : m, o, s, d)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && h !== v))
            return this;
          if (u !== this._dur) return this.render(n, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = m),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (g || this._ease)(m / u)),
          this._from && (this.ratio = y = 1 - y),
          !a && d && !s && !v && (jt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (f = this._pt; f; ) f.r(y, f.d), (f = f._next);
        (x && x.render(n < 0 ? n : x._dur * x._ease(m / this._dur), s, o)) ||
          (this._startAt && (this._zTime = n)),
          this._onUpdate &&
            !s &&
            (c && zo(this, n, s, o), jt(this, "onUpdate")),
          this._repeat &&
            h !== v &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            jt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && zo(this, n, !0, !0),
            (n || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Ji(this, 1),
            !s &&
              !(c && !a) &&
              (d || a || _) &&
              (jt(this, d === l ? "onComplete" : "onReverseComplete", !0),
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
      $n || Xt.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Sa(this, u),
        (c = this._ease(u / this._dur)),
        tf(this, n, s, o, a, c, u, l)
          ? this.resetTo(n, s, o, a, 1)
          : (Js(this, 0),
            this.parent ||
              Au(
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
            ? _n(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!nt),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(n, s, Wi && Wi.vars.overwrite !== !0)
            ._first || _n(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            en(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = n ? ri(n) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        m,
        f,
        h,
        p,
        v,
        _;
      if ((!s || s === "all") && Dd(a, l))
        return s === "all" && (this._pt = 0), _n(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (Je(s) &&
              ((p = {}),
              Dt(s, function (y) {
                return (p[y] = 1);
              }),
              (s = p)),
            (s = rf(a, s))),
          _ = a.length;
        _--;

      )
        if (~l.indexOf(a[_])) {
          (m = u[_]),
            s === "all"
              ? ((d[_] = s), (h = m), (f = {}))
              : ((f = d[_] = d[_] || {}), (h = s));
          for (p in h)
            (v = m && m[p]),
              v &&
                ((!("kill" in v.d) || v.d.kill(p) === !0) && Zs(this, v, "_pt"),
                delete m[p]),
              f !== "all" && (f[p] = 1);
        }
      return this._initted && !this._pt && c && _n(this), this;
    }),
    (e.to = function (n, s) {
      return new e(n, s, arguments[2]);
    }),
    (e.from = function (n, s) {
      return En(1, arguments);
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
      return En(2, arguments);
    }),
    (e.set = function (n, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
    }),
    (e.killTweensOf = function (n, s, o) {
      return Ae.killTweensOf(n, s, o);
    }),
    e
  );
})(Wn);
Zt(Be.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Dt("staggerTo,staggerFrom,staggerFromTo", function (r) {
  Be[r] = function () {
    var e = new Ct(),
      t = Fo.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Ta = function (e, t, i) {
    return (e[t] = i);
  },
  Ku = function (e, t, i) {
    return e[t](i);
  },
  sf = function (e, t, i, n) {
    return e[t](n.fp, i);
  },
  of = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  xa = function (e, t) {
    return De(e[t]) ? Ku : pa(e[t]) && e.setAttribute ? of : Ta;
  },
  Zu = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  af = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Qu = function (e, t) {
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
  Ca = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  lf = function (e, t, i, n) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
  },
  uf = function (e) {
    for (var t = this._pt, i, n; t; )
      (n = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Zs(this, t, "_pt")
          : t.dep || (i = 1),
        (t = n);
    return !i;
  },
  cf = function (e, t, i, n) {
    n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
  },
  Ju = function (e) {
    for (var t = e._pt, i, n, s, o; t; ) {
      for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
      (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = n) ? (n._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  },
  kt = (function () {
    function r(t, i, n, s, o, a, l, u, c) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = n),
        (this.r = a || Zu),
        (this.d = l || this),
        (this.set = u || Ta),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = r.prototype;
    return (
      (e.modifier = function (i, n, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = cf),
          (this.m = i),
          (this.mt = s),
          (this.tween = n);
      }),
      r
    );
  })();
Dt(
  _a +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (r) {
    return (va[r] = 1);
  }
);
Kt.TweenMax = Kt.TweenLite = Be;
Kt.TimelineLite = Kt.TimelineMax = Ct;
Ae = new Ct({
  sortChildren: !1,
  defaults: Zr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Ut.stringFilter = Hu;
var wr = [],
  Ts = {},
  df = [],
  tl = 0,
  ff = 0,
  uo = function (e) {
    return (Ts[e] || df).map(function (t) {
      return t();
    });
  },
  $o = function () {
    var e = Date.now(),
      t = [];
    e - tl > 2 &&
      (uo("matchMediaInit"),
      wr.forEach(function (i) {
        var n = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          u;
        for (a in n)
          (o = wi.matchMedia(n[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (i.revert(), l && t.push(i));
      }),
      uo("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (n) {
          return i.add(null, n);
        });
      }),
      (tl = e),
      uo("matchMedia"));
  },
  ec = (function () {
    function r(t, i) {
      (this.selector = i && Vo(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = ff++),
        t && this.add(t);
    }
    var e = r.prototype;
    return (
      (e.add = function (i, n, s) {
        De(i) && ((s = n), (n = i), (i = De));
        var o = this,
          a = function () {
            var u = Te,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = Vo(s)),
              (Te = o),
              (d = n.apply(o, arguments)),
              De(d) && o._r.push(d),
              (Te = u),
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
        var n = Te;
        (Te = null), i(this), (Te = n);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof r
              ? i.push.apply(i, n.getTweens())
              : n instanceof Be &&
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
                    u instanceof Ct
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Be) && u.revert && u.revert(i);
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
          for (var o = wr.length; o--; )
            wr[o].id === this.id && wr.splice(o, 1);
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      r
    );
  })(),
  pf = (function () {
    function r(t) {
      (this.contexts = []), (this.scope = t), Te && Te.data.push(this);
    }
    var e = r.prototype;
    return (
      (e.add = function (i, n, s) {
        Li(i) || (i = { matches: i });
        var o = new ec(0, s || this.scope),
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
            : ((l = wi.matchMedia(i[u])),
              l &&
                (wr.indexOf(o) < 0 && wr.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener($o)
                  : l.addEventListener("change", $o)));
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
  zs = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (n) {
        return Fu(n);
      });
    },
    timeline: function (e) {
      return new Ct(e);
    },
    getTweensOf: function (e, t) {
      return Ae.getTweensOf(e, t);
    },
    getProperty: function (e, t, i, n) {
      Je(e) && (e = ri(e)[0]);
      var s = vr(e || {}).get,
        o = i ? Eu : Cu;
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
            return zt.quickSetter(c, t, i);
          }),
          s = n.length;
        return function (c) {
          for (var d = s; d--; ) n[d](c);
        };
      }
      e = e[0] || {};
      var o = $t[t],
        a = vr(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = o
          ? function (c) {
              var d = new o();
              ($r._pt = 0),
                d.init(e, i ? c + i : c, $r, 0, [e]),
                d.render(1, d),
                $r._pt && Ca(1, $r);
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
        s = zt.to(
          e,
          Zt(
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
      return e && e.ease && (e.ease = yr(e.ease, Zr.ease)), Ka(Zr, e || {});
    },
    config: function (e) {
      return Ka(Ut, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        n = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (n || "").split(",").forEach(function (a) {
        return (
          a && !$t[a] && !Kt[a] && Vn(t + " effect requires " + a + " plugin.")
        );
      }),
        (so[t] = function (a, l, u) {
          return i(ri(a), Zt(l || {}, s), u);
        }),
        o &&
          (Ct.prototype[t] = function (a, l, u) {
            return this.add(so[t](a, Li(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      rt[e] = yr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? yr(e, t) : rt;
    },
    getById: function (e) {
      return Ae.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var i = new Ct(e),
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
              n instanceof Be &&
              n.vars.onComplete === n._targets[0]
            )) &&
            Ti(i, n, n._start - n._delay),
          (n = s);
      return Ti(Ae, i, 0), i;
    },
    context: function (e, t) {
      return e ? new ec(e, t) : Te;
    },
    matchMedia: function (e) {
      return new pf(e);
    },
    matchMediaRefresh: function () {
      return (
        wr.forEach(function (e) {
          var t = e.conditions,
            i,
            n;
          for (n in t) t[n] && ((t[n] = !1), (i = 1));
          i && e.revert();
        }) || $o()
      );
    },
    addEventListener: function (e, t) {
      var i = Ts[e] || (Ts[e] = []);
      ~i.indexOf(t) || i.push(t);
    },
    removeEventListener: function (e, t) {
      var i = Ts[e],
        n = i && i.indexOf(t);
      n >= 0 && i.splice(n, 1);
    },
    utils: {
      wrap: Wd,
      wrapYoyo: Gd,
      distribute: ku,
      random: Ru,
      snap: Iu,
      normalize: $d,
      getUnit: ht,
      clamp: Fd,
      splitColor: Vu,
      toArray: ri,
      selector: Vo,
      mapRange: zu,
      pipe: qd,
      unitize: Hd,
      interpolate: Xd,
      shuffle: Du,
    },
    install: wu,
    effects: so,
    ticker: Xt,
    updateRoot: Ct.updateRoot,
    plugins: $t,
    globalTimeline: Ae,
    core: {
      PropTween: kt,
      globals: bu,
      Tween: Be,
      Timeline: Ct,
      Animation: Wn,
      getCache: vr,
      _removeLinkedListItem: Zs,
      reverting: function () {
        return nt;
      },
      context: function (e) {
        return e && Te && (Te.data.push(e), (e._ctx = Te)), Te;
      },
      suppressOverwrites: function (e) {
        return (fa = e);
      },
    },
  };
Dt("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
  return (zs[r] = Be[r]);
});
Xt.add(Ct.updateRoot);
$r = zs.to({}, { duration: 0 });
var hf = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  mf = function (e, t) {
    var i = e._targets,
      n,
      s,
      o;
    for (n in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][n]),
          o &&
            (o = o.d) &&
            (o._pt && (o = hf(o, n)),
            o && o.modifier && o.modifier(t[n], e, i[s], n));
  },
  co = function (e, t) {
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
              Dt(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (u in s) l[u] = t(s[u]);
            s = l;
          }
          mf(a, s);
        };
      },
    };
  },
  zt =
    zs.registerPlugin(
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
      co("roundProps", qo),
      co("modifiers"),
      co("snap", Iu)
    ) || zs;
Be.version = Ct.version = zt.version = "3.13.0";
yu = 1;
ha() && tn();
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var il,
  Gi,
  Xr,
  Ea,
  mr,
  rl,
  Aa,
  gf = function () {
    return typeof window < "u";
  },
  zi = {},
  dr = 180 / Math.PI,
  Yr = Math.PI / 180,
  Dr = Math.atan2,
  nl = 1e8,
  Pa = /([A-Z])/g,
  vf = /(left|right|width|margin|padding|x)/i,
  _f = /[\s,\(]\S/,
  xi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Wo = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  yf = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  wf = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  bf = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  tc = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  ic = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Sf = function (e, t, i) {
    return (e.style[t] = i);
  },
  Tf = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  xf = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  Cf = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  Ef = function (e, t, i, n, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  },
  Af = function (e, t, i, n, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  },
  Pe = "transform",
  It = Pe + "Origin",
  Pf = function r(e, t) {
    var i = this,
      n = this.target,
      s = n.style,
      o = n._gsap;
    if (e in zi && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = xi[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (i.tfm[a] = Di(n, a));
              })
            : (this.tfm[e] = o.x ? o[e] : Di(n, e)),
          e === It && (this.tfm.zOrigin = o.zOrigin);
      else
        return xi.transform.split(",").forEach(function (a) {
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
  rc = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Lf = function () {
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
              : e[s].replace(Pa, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o];
      n.svg &&
        (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Aa()),
        (!s || !s.isStart) &&
          !i[Pe] &&
          (rc(i),
          n.zOrigin &&
            i[It] &&
            ((i[It] += " " + n.zOrigin + "px"),
            (n.zOrigin = 0),
            n.renderTransform()),
          (n.uncache = 1));
    }
  },
  nc = function (e, t) {
    var i = { target: e, props: [], revert: Lf, save: Pf };
    return (
      e._gsap || zt.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (n) {
          return i.save(n);
        }),
      i
    );
  },
  sc,
  Go = function (e, t) {
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
      n.getPropertyValue(t.replace(Pa, "-$1").toLowerCase()) ||
      n.getPropertyValue(t) ||
      (!i && r(e, rn(t) || t, 1)) ||
      ""
    );
  },
  sl = "O,Moz,ms,Ms,Webkit".split(","),
  rn = function (e, t, i) {
    var n = t || mr,
      s = n.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(sl[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? sl[o] : "") + e;
  },
  Xo = function () {
    gf() &&
      window.document &&
      ((il = window),
      (Gi = il.document),
      (Xr = Gi.documentElement),
      (mr = Go("div") || { style: {} }),
      Go("div"),
      (Pe = rn(Pe)),
      (It = Pe + "Origin"),
      (mr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (sc = !!rn("perspective")),
      (Aa = zt.core.reverting),
      (Ea = 1));
  },
  ol = function (e) {
    var t = e.ownerSVGElement,
      i = Go(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      n = e.cloneNode(!0),
      s;
    (n.style.display = "block"), i.appendChild(n), Xr.appendChild(i);
    try {
      s = n.getBBox();
    } catch {}
    return i.removeChild(n), Xr.removeChild(i), s;
  },
  al = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  oc = function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = ol(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = ol(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +al(e, ["x", "cx", "x1"]) || 0,
            y: +al(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  ac = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && oc(e));
  },
  Cr = function (e, t) {
    if (t) {
      var i = e.style,
        n;
      t in zi && t !== It && (t = Pe),
        i.removeProperty
          ? ((n = t.substr(0, 2)),
            (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              n === "--" ? t : t.replace(Pa, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  },
  Xi = function (e, t, i, n, s, o) {
    var a = new kt(e._pt, t, i, 0, 1, o ? ic : tc);
    return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
  },
  ll = { deg: 1, rad: 1, turn: 1 },
  Of = { grid: 1, flex: 1 },
  er = function r(e, t, i, n) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      a = mr.style,
      l = vf.test(t),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      m = n === "px",
      f = n === "%",
      h,
      p,
      v,
      _;
    if (n === o || !s || ll[n] || ll[o]) return s;
    if (
      (o !== "px" && !m && (s = r(e, t, i, "px")),
      (_ = e.getCTM && ac(e)),
      (f || o === "%") && (zi[t] || ~t.indexOf("adius")))
    )
      return (
        (h = _ ? e.getBBox()[l ? "width" : "height"] : e[c]),
        Ie(f ? (s / h) * d : (s / 100) * h)
      );
    if (
      ((a[l ? "width" : "height"] = d + (m ? o : n)),
      (p =
        (n !== "rem" && ~t.indexOf("adius")) ||
        (n === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      _ && (p = (e.ownerSVGElement || {}).parentNode),
      (!p || p === Gi || !p.appendChild) && (p = Gi.body),
      (v = p._gsap),
      v && f && v.width && l && v.time === Xt.time && !v.uncache)
    )
      return Ie((s / v.width) * d);
    if (f && (t === "height" || t === "width")) {
      var y = e.style[t];
      (e.style[t] = d + n), (h = e[c]), y ? (e.style[t] = y) : Cr(e, t);
    } else
      (f || o === "%") &&
        !Of[ni(p, "display")] &&
        (a.position = ni(e, "position")),
        p === e && (a.position = "static"),
        p.appendChild(mr),
        (h = mr[c]),
        p.removeChild(mr),
        (a.position = "absolute");
    return (
      l && f && ((v = vr(p)), (v.time = Xt.time), (v.width = p[c])),
      Ie(m ? (h * s) / d : h && s ? (d / h) * s : 0)
    );
  },
  Di = function (e, t, i, n) {
    var s;
    return (
      Ea || Xo(),
      t in xi &&
        t !== "transform" &&
        ((t = xi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      zi[t] && t !== "transform"
        ? ((s = Xn(e, n)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : Fs(ni(e, It)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
            (s =
              (Bs[t] && Bs[t](e, t, i)) ||
              ni(e, t) ||
              Tu(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? er(e, t, s, i) + i : s
    );
  },
  Mf = function (e, t, i, n) {
    if (!i || i === "none") {
      var s = rn(t, e, 1),
        o = s && ni(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = ni(e, "borderTopColor"));
    }
    var a = new kt(this._pt, e.style, t, 0, 1, Qu),
      l = 0,
      u = 0,
      c,
      d,
      m,
      f,
      h,
      p,
      v,
      _,
      y,
      x,
      g,
      S;
    if (
      ((a.b = i),
      (a.e = n),
      (i += ""),
      (n += ""),
      n.substring(0, 6) === "var(--" &&
        (n = ni(e, n.substring(4, n.indexOf(")")))),
      n === "auto" &&
        ((p = e.style[t]),
        (e.style[t] = n),
        (n = ni(e, t) || n),
        p ? (e.style[t] = p) : Cr(e, t)),
      (c = [i, n]),
      Hu(c),
      (i = c[0]),
      (n = c[1]),
      (m = i.match(Hr) || []),
      (S = n.match(Hr) || []),
      S.length)
    ) {
      for (; (d = Hr.exec(n)); )
        (v = d[0]),
          (y = n.substring(l, d.index)),
          h
            ? (h = (h + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (h = 1),
          v !== (p = m[u++] || "") &&
            ((f = parseFloat(p) || 0),
            (g = p.substr((f + "").length)),
            v.charAt(1) === "=" && (v = Gr(f, v) + g),
            (_ = parseFloat(v)),
            (x = v.substr((_ + "").length)),
            (l = Hr.lastIndex - x.length),
            x ||
              ((x = x || Ut.units[t] || g),
              l === n.length && ((n += x), (a.e += x))),
            g !== x && (f = er(e, t, p, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: y || u === 1 ? y : ",",
              s: f,
              c: _ - f,
              m: (h && h < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < n.length ? n.substring(l, n.length) : "";
    } else a.r = t === "display" && n === "none" ? ic : tc;
    return vu.test(n) && (a.e = 0), (this._pt = a), a;
  },
  ul = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Df = function (e) {
    var t = e.split(" "),
      i = t[0],
      n = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || n === "left" || n === "right") &&
        ((e = i), (i = n), (n = e)),
      (t[0] = ul[i] || i),
      (t[1] = ul[n] || n),
      t.join(" ")
    );
  },
  kf = function (e, t) {
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
            zi[a] && ((l = 1), (a = a === "transformOrigin" ? It : Pe)),
            Cr(i, a);
      l &&
        (Cr(i, Pe),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (n.scale = n.rotate = n.translate = "none"),
          Xn(i, 1),
          (o.uncache = 1),
          rc(n)));
    }
  },
  Bs = {
    clearProps: function (e, t, i, n, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new kt(e._pt, t, i, 0, 0, kf));
        return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    },
  },
  Gn = [1, 0, 0, 1, 0, 0],
  lc = {},
  uc = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  cl = function (e) {
    var t = ni(e, Pe);
    return uc(t) ? Gn : t.substr(7).match(gu).map(Ie);
  },
  La = function (e, t) {
    var i = e._gsap || vr(e),
      n = e.style,
      s = cl(e),
      o,
      a,
      l,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? Gn : s)
      : (s === Gn &&
          !e.offsetParent &&
          e !== Xr &&
          !i.svg &&
          ((l = n.display),
          (n.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (a = e.nextElementSibling), Xr.appendChild(e)),
          (s = cl(e)),
          l ? (n.display = l) : Cr(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Xr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Yo = function (e, t, i, n, s, o) {
    var a = e._gsap,
      l = s || La(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      m = a.yOffset || 0,
      f = l[0],
      h = l[1],
      p = l[2],
      v = l[3],
      _ = l[4],
      y = l[5],
      x = t.split(" "),
      g = parseFloat(x[0]) || 0,
      S = parseFloat(x[1]) || 0,
      T,
      P,
      O,
      k;
    i
      ? l !== Gn &&
        (P = f * v - h * p) &&
        ((O = g * (v / P) + S * (-p / P) + (p * y - v * _) / P),
        (k = g * (-h / P) + S * (f / P) - (f * y - h * _) / P),
        (g = O),
        (S = k))
      : ((T = oc(e)),
        (g = T.x + (~x[0].indexOf("%") ? (g / 100) * T.width : g)),
        (S = T.y + (~(x[1] || x[0]).indexOf("%") ? (S / 100) * T.height : S))),
      n || (n !== !1 && a.smooth)
        ? ((_ = g - u),
          (y = S - c),
          (a.xOffset = d + (_ * f + y * p) - _),
          (a.yOffset = m + (_ * h + y * v) - y))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = g),
      (a.yOrigin = S),
      (a.smooth = !!n),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[It] = "0px 0px"),
      o &&
        (Xi(o, a, "xOrigin", u, g),
        Xi(o, a, "yOrigin", c, S),
        Xi(o, a, "xOffset", d, a.xOffset),
        Xi(o, a, "yOffset", m, a.yOffset)),
      e.setAttribute("data-svg-origin", g + " " + S);
  },
  Xn = function (e, t) {
    var i = e._gsap || new Xu(e);
    if ("x" in i && !t && !i.uncache) return i;
    var n = e.style,
      s = i.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = ni(e, It) || "0",
      c,
      d,
      m,
      f,
      h,
      p,
      v,
      _,
      y,
      x,
      g,
      S,
      T,
      P,
      O,
      k,
      M,
      R,
      A,
      N,
      b,
      w,
      C,
      L,
      D,
      I,
      E,
      F,
      q,
      Q,
      X,
      ie;
    return (
      (c = d = m = p = v = _ = y = x = g = 0),
      (f = h = 1),
      (i.svg = !!(e.getCTM && ac(e))),
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
      (P = La(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((D = e.getBBox()),
            (u = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px"),
            (L = ""))
          : (L = !t && e.getAttribute("data-svg-origin")),
        Yo(e, L || u, !!L || i.originIsAbsolute, i.smooth !== !1, P)),
      (S = i.xOrigin || 0),
      (T = i.yOrigin || 0),
      P !== Gn &&
        ((R = P[0]),
        (A = P[1]),
        (N = P[2]),
        (b = P[3]),
        (c = w = P[4]),
        (d = C = P[5]),
        P.length === 6
          ? ((f = Math.sqrt(R * R + A * A)),
            (h = Math.sqrt(b * b + N * N)),
            (p = R || A ? Dr(A, R) * dr : 0),
            (y = N || b ? Dr(N, b) * dr + p : 0),
            y && (h *= Math.abs(Math.cos(y * Yr))),
            i.svg && ((c -= S - (S * R + T * N)), (d -= T - (S * A + T * b))))
          : ((ie = P[6]),
            (Q = P[7]),
            (E = P[8]),
            (F = P[9]),
            (q = P[10]),
            (X = P[11]),
            (c = P[12]),
            (d = P[13]),
            (m = P[14]),
            (O = Dr(ie, q)),
            (v = O * dr),
            O &&
              ((k = Math.cos(-O)),
              (M = Math.sin(-O)),
              (L = w * k + E * M),
              (D = C * k + F * M),
              (I = ie * k + q * M),
              (E = w * -M + E * k),
              (F = C * -M + F * k),
              (q = ie * -M + q * k),
              (X = Q * -M + X * k),
              (w = L),
              (C = D),
              (ie = I)),
            (O = Dr(-N, q)),
            (_ = O * dr),
            O &&
              ((k = Math.cos(-O)),
              (M = Math.sin(-O)),
              (L = R * k - E * M),
              (D = A * k - F * M),
              (I = N * k - q * M),
              (X = b * M + X * k),
              (R = L),
              (A = D),
              (N = I)),
            (O = Dr(A, R)),
            (p = O * dr),
            O &&
              ((k = Math.cos(O)),
              (M = Math.sin(O)),
              (L = R * k + A * M),
              (D = w * k + C * M),
              (A = A * k - R * M),
              (C = C * k - w * M),
              (R = L),
              (w = D)),
            v &&
              Math.abs(v) + Math.abs(p) > 359.9 &&
              ((v = p = 0), (_ = 180 - _)),
            (f = Ie(Math.sqrt(R * R + A * A + N * N))),
            (h = Ie(Math.sqrt(C * C + ie * ie))),
            (O = Dr(w, C)),
            (y = Math.abs(O) > 2e-4 ? O * dr : 0),
            (g = X ? 1 / (X < 0 ? -X : X) : 0)),
        i.svg &&
          ((L = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !uc(ni(e, Pe))),
          L && e.setAttribute("transform", L))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((f *= -1), (y += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((h *= -1), (y += y <= 0 ? 180 : -180))),
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
      (i.z = m + o),
      (i.scaleX = Ie(f)),
      (i.scaleY = Ie(h)),
      (i.rotation = Ie(p) + a),
      (i.rotationX = Ie(v) + a),
      (i.rotationY = Ie(_) + a),
      (i.skewX = y + a),
      (i.skewY = x + a),
      (i.transformPerspective = g + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (n[It] = Fs(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Ut.force3D),
      (i.renderTransform = i.svg ? Rf : sc ? cc : If),
      (i.uncache = 0),
      i
    );
  },
  Fs = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  fo = function (e, t, i) {
    var n = ht(t);
    return Ie(parseFloat(t) + parseFloat(er(e, "x", i + "px", n))) + n;
  },
  If = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      cc(e, t);
  },
  lr = "0deg",
  pn = "0px",
  ur = ") ",
  cc = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      u = i.rotation,
      c = i.rotationY,
      d = i.rotationX,
      m = i.skewX,
      f = i.skewY,
      h = i.scaleX,
      p = i.scaleY,
      v = i.transformPerspective,
      _ = i.force3D,
      y = i.target,
      x = i.zOrigin,
      g = "",
      S = (_ === "auto" && e && e !== 1) || _ === !0;
    if (x && (d !== lr || c !== lr)) {
      var T = parseFloat(c) * Yr,
        P = Math.sin(T),
        O = Math.cos(T),
        k;
      (T = parseFloat(d) * Yr),
        (k = Math.cos(T)),
        (o = fo(y, o, P * k * -x)),
        (a = fo(y, a, -Math.sin(T) * -x)),
        (l = fo(y, l, O * k * -x + x));
    }
    v !== pn && (g += "perspective(" + v + ur),
      (n || s) && (g += "translate(" + n + "%, " + s + "%) "),
      (S || o !== pn || a !== pn || l !== pn) &&
        (g +=
          l !== pn || S
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + ur),
      u !== lr && (g += "rotate(" + u + ur),
      c !== lr && (g += "rotateY(" + c + ur),
      d !== lr && (g += "rotateX(" + d + ur),
      (m !== lr || f !== lr) && (g += "skew(" + m + ", " + f + ur),
      (h !== 1 || p !== 1) && (g += "scale(" + h + ", " + p + ur),
      (y.style[Pe] = g || "translate(0, 0)");
  },
  Rf = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      u = i.skewX,
      c = i.skewY,
      d = i.scaleX,
      m = i.scaleY,
      f = i.target,
      h = i.xOrigin,
      p = i.yOrigin,
      v = i.xOffset,
      _ = i.yOffset,
      y = i.forceCSS,
      x = parseFloat(o),
      g = parseFloat(a),
      S,
      T,
      P,
      O,
      k;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= Yr),
          (u *= Yr),
          (S = Math.cos(l) * d),
          (T = Math.sin(l) * d),
          (P = Math.sin(l - u) * -m),
          (O = Math.cos(l - u) * m),
          u &&
            ((c *= Yr),
            (k = Math.tan(u - c)),
            (k = Math.sqrt(1 + k * k)),
            (P *= k),
            (O *= k),
            c &&
              ((k = Math.tan(c)),
              (k = Math.sqrt(1 + k * k)),
              (S *= k),
              (T *= k))),
          (S = Ie(S)),
          (T = Ie(T)),
          (P = Ie(P)),
          (O = Ie(O)))
        : ((S = d), (O = m), (T = P = 0)),
      ((x && !~(o + "").indexOf("px")) || (g && !~(a + "").indexOf("px"))) &&
        ((x = er(f, "x", o, "px")), (g = er(f, "y", a, "px"))),
      (h || p || v || _) &&
        ((x = Ie(x + h - (h * S + p * P) + v)),
        (g = Ie(g + p - (h * T + p * O) + _))),
      (n || s) &&
        ((k = f.getBBox()),
        (x = Ie(x + (n / 100) * k.width)),
        (g = Ie(g + (s / 100) * k.height))),
      (k =
        "matrix(" + S + "," + T + "," + P + "," + O + "," + x + "," + g + ")"),
      f.setAttribute("transform", k),
      y && (f.style[Pe] = k);
  },
  Nf = function (e, t, i, n, s) {
    var o = 360,
      a = Je(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? dr : 1),
      u = l - n,
      c = n + u + "deg",
      d,
      m;
    return (
      a &&
        ((d = s.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * nl) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * nl) % o) - ~~(u / o) * o)),
      (e._pt = m = new kt(e._pt, t, i, n, u, yf)),
      (m.e = c),
      (m.u = "deg"),
      e._props.push(i),
      m
    );
  },
  dl = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  zf = function (e, t, i) {
    var n = dl({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      a,
      l,
      u,
      c,
      d,
      m,
      f,
      h;
    n.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Pe] = t),
        (a = Xn(i, 1)),
        Cr(i, Pe),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[Pe]),
        (o[Pe] = t),
        (a = Xn(i, 1)),
        (o[Pe] = u));
    for (l in zi)
      (u = n[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((f = ht(u)),
          (h = ht(c)),
          (d = f !== h ? er(i, l, u, h) : parseFloat(u)),
          (m = parseFloat(c)),
          (e._pt = new kt(e._pt, a, l, d, m - d, Wo)),
          (e._pt.u = h || 0),
          e._props.push(l));
    dl(a, n);
  };
Dt("padding,margin,Width,Radius", function (r, e) {
  var t = "Top",
    i = "Right",
    n = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (a) {
      return e < 2 ? r + a : "border" + a + r;
    });
  Bs[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
    var m, f;
    if (arguments.length < 4)
      return (
        (m = o.map(function (h) {
          return Di(a, h, u);
        })),
        (f = m.join(" ")),
        f.split(m[0]).length === 5 ? m[0] : f
      );
    (m = (c + "").split(" ")),
      (f = {}),
      o.forEach(function (h, p) {
        return (f[h] = m[p] = m[p] || m[((p - 1) / 2) | 0]);
      }),
      a.init(l, f, d);
  };
});
var dc = {
  name: "css",
  register: Xo,
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
      m,
      f,
      h,
      p,
      v,
      _,
      y,
      x,
      g,
      S,
      T,
      P,
      O;
    Ea || Xo(),
      (this.styles = this.styles || nc(e)),
      (O = this.styles.props),
      (this.tween = i);
    for (p in t)
      if (p !== "autoRound" && ((c = t[p]), !($t[p] && Yu(p, t, i, n, e, s)))) {
        if (
          ((f = typeof c),
          (h = Bs[p]),
          f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
          f === "string" && ~c.indexOf("random(") && (c = Hn(c)),
          h)
        )
          h(this, e, p, c, i) && (P = 1);
        else if (p.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (c += ""),
            (Zi.lastIndex = 0),
            Zi.test(u) || ((v = ht(u)), (_ = ht(c))),
            _ ? v !== _ && (u = er(e, p, u, _) + _) : v && (c += v),
            this.add(a, "setProperty", u, c, n, s, 0, 0, p),
            o.push(p),
            O.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (
            (l && p in l
              ? ((u = typeof l[p] == "function" ? l[p].call(i, n, e, s) : l[p]),
                Je(u) && ~u.indexOf("random(") && (u = Hn(u)),
                ht(u + "") ||
                  u === "auto" ||
                  (u += Ut.units[p] || ht(Di(e, p)) || ""),
                (u + "").charAt(1) === "=" && (u = Di(e, p)))
              : (u = Di(e, p)),
            (m = parseFloat(u)),
            (y = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            y && (c = c.substr(2)),
            (d = parseFloat(c)),
            p in xi &&
              (p === "autoAlpha" &&
                (m === 1 && Di(e, "visibility") === "hidden" && d && (m = 0),
                O.push("visibility", 0, a.visibility),
                Xi(
                  this,
                  a,
                  "visibility",
                  m ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = xi[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (x = p in zi),
            x)
          ) {
            if (
              (this.styles.save(p),
              f === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = ni(e, c.substring(4, c.indexOf(")")))),
                (d = parseFloat(c))),
              g ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  Xn(e, t.parseTransform),
                (T = t.smoothOrigin !== !1 && S.smooth),
                (g = this._pt =
                  new kt(this._pt, a, Pe, 0, 1, S.renderTransform, S, 0, -1)),
                (g.dep = 1)),
              p === "scale")
            )
              (this._pt = new kt(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (y ? Gr(S.scaleY, y + d) : d) - S.scaleY || 0,
                Wo
              )),
                (this._pt.u = 0),
                o.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              O.push(It, 0, a[It]),
                (c = Df(c)),
                S.svg
                  ? Yo(e, c, 0, T, 0, this)
                  : ((_ = parseFloat(c.split(" ")[2]) || 0),
                    _ !== S.zOrigin && Xi(this, S, "zOrigin", S.zOrigin, _),
                    Xi(this, a, p, Fs(u), Fs(c)));
              continue;
            } else if (p === "svgOrigin") {
              Yo(e, c, 1, T, 0, this);
              continue;
            } else if (p in lc) {
              Nf(this, S, p, m, y ? Gr(m, y + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              Xi(this, S, "smooth", S.smooth, c);
              continue;
            } else if (p === "force3D") {
              S[p] = c;
              continue;
            } else if (p === "transform") {
              zf(this, c, e);
              continue;
            }
          } else p in a || (p = rn(p) || p);
          if (x || ((d || d === 0) && (m || m === 0) && !_f.test(c) && p in a))
            (v = (u + "").substr((m + "").length)),
              d || (d = 0),
              (_ = ht(c) || (p in Ut.units ? Ut.units[p] : v)),
              v !== _ && (m = er(e, p, u, _)),
              (this._pt = new kt(
                this._pt,
                x ? S : a,
                p,
                m,
                (y ? Gr(m, y + d) : d) - m,
                !x && (_ === "px" || p === "zIndex") && t.autoRound !== !1
                  ? bf
                  : Wo
              )),
              (this._pt.u = _ || 0),
              v !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = wf));
          else if (p in a) Mf.call(this, e, p, u, y ? y + c : c);
          else if (p in e) this.add(e, p, u || e[p], y ? y + c : c, n, s);
          else if (p !== "parseTransform") {
            ga(p, c);
            continue;
          }
          x ||
            (p in a
              ? O.push(p, 0, a[p])
              : typeof e[p] == "function"
              ? O.push(p, 2, e[p]())
              : O.push(p, 1, u || e[p])),
            o.push(p);
        }
      }
    P && Ju(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Aa())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  },
  get: Di,
  aliases: xi,
  getSetter: function (e, t, i) {
    var n = xi[t];
    return (
      n && n.indexOf(",") < 0 && (t = n),
      t in zi && t !== It && (e._gsap.x || Di(e, "x"))
        ? i && rl === i
          ? t === "scale"
            ? Cf
            : xf
          : (rl = i || {}) && (t === "scale" ? Ef : Af)
        : e.style && !pa(e.style[t])
        ? Sf
        : ~t.indexOf("-")
        ? Tf
        : xa(e, t)
    );
  },
  core: { _removeProperty: Cr, _getMatrix: La },
};
zt.utils.checkPrefix = rn;
zt.core.getStyleSaver = nc;
(function (r, e, t, i) {
  var n = Dt(r + "," + e + "," + t, function (s) {
    zi[s] = 1;
  });
  Dt(e, function (s) {
    (Ut.units[s] = "deg"), (lc[s] = 1);
  }),
    (xi[n[13]] = r + "," + e),
    Dt(i, function (s) {
      var o = s.split(":");
      xi[o[1]] = n[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Dt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (r) {
    Ut.units[r] = "px";
  }
);
zt.registerPlugin(dc);
var $ = zt.registerPlugin(dc) || zt;
function Bf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(r, i.key, i);
  }
}
function Ff(r, e, t) {
  return e && Bf(r.prototype, e), r;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var gt,
  xs,
  Yt,
  Yi,
  ji,
  jr,
  fc,
  fr,
  Pn,
  pc,
  Ii,
  hi,
  hc,
  mc = function () {
    return (
      gt ||
      (typeof window < "u" && (gt = window.gsap) && gt.registerPlugin && gt)
    );
  },
  gc = 1,
  Wr = [],
  le = [],
  Ai = [],
  Ln = Date.now,
  jo = function (e, t) {
    return t;
  },
  Vf = function () {
    var e = Pn.core,
      t = e.bridge || {},
      i = e._scrollers,
      n = e._proxies;
    i.push.apply(i, le),
      n.push.apply(n, Ai),
      (le = i),
      (Ai = n),
      (jo = function (o, a) {
        return t[o](a);
      });
  },
  Qi = function (e, t) {
    return ~Ai.indexOf(e) && Ai[Ai.indexOf(e) + 1][t];
  },
  On = function (e) {
    return !!~pc.indexOf(e);
  },
  bt = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
  },
  wt = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n);
  },
  ss = "scrollLeft",
  os = "scrollTop",
  Uo = function () {
    return (Ii && Ii.isPressed) || le.cache++;
  },
  Vs = function (e, t) {
    var i = function n(s) {
      if (s || s === 0) {
        gc && (Yt.history.scrollRestoration = "manual");
        var o = Ii && Ii.isPressed;
        (s = n.v = Math.round(s) || (Ii && Ii.iOS ? 1 : 0)),
          e(s),
          (n.cacheID = le.cache),
          o && jo("ss", s);
      } else
        (t || le.cache !== n.cacheID || jo("ref")) &&
          ((n.cacheID = le.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (i.offset = 0), e && i;
  },
  Et = {
    s: ss,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Vs(function (r) {
      return arguments.length
        ? Yt.scrollTo(r, Xe.sc())
        : Yt.pageXOffset || Yi[ss] || ji[ss] || jr[ss] || 0;
    }),
  },
  Xe = {
    s: os,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Et,
    sc: Vs(function (r) {
      return arguments.length
        ? Yt.scrollTo(Et.sc(), r)
        : Yt.pageYOffset || Yi[os] || ji[os] || jr[os] || 0;
    }),
  },
  Ot = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || gt.utils.toArray)(e)[0] ||
      (typeof e == "string" && gt.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  },
  qf = function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  },
  tr = function (e, t) {
    var i = t.s,
      n = t.sc;
    On(e) && (e = Yi.scrollingElement || ji);
    var s = le.indexOf(e),
      o = n === Xe.sc ? 1 : 2;
    !~s && (s = le.push(e) - 1), le[s + o] || bt(e, "scroll", Uo);
    var a = le[s + o],
      l =
        a ||
        (le[s + o] =
          Vs(Qi(e, i), !0) ||
          (On(e)
            ? n
            : Vs(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (l.target = e),
      a || (l.smooth = gt.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Ko = function (e, t, i) {
    var n = e,
      s = e,
      o = Ln(),
      a = o,
      l = t || 50,
      u = Math.max(500, l * 3),
      c = function (h, p) {
        var v = Ln();
        p || v - o > l
          ? ((s = n), (n = h), (a = o), (o = v))
          : i
          ? (n += h)
          : (n = s + ((h - s) / (v - a)) * (o - a));
      },
      d = function () {
        (s = n = i ? 0 : n), (a = o = 0);
      },
      m = function (h) {
        var p = a,
          v = s,
          _ = Ln();
        return (
          (h || h === 0) && h !== n && c(h),
          o === a || _ - a > u
            ? 0
            : ((n + (i ? v : -v)) / ((i ? _ : o) - p)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: m };
  },
  hn = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  fl = function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  },
  vc = function () {
    (Pn = gt.core.globals().ScrollTrigger), Pn && Pn.core && Vf();
  },
  _c = function (e) {
    return (
      (gt = e || mc()),
      !xs &&
        gt &&
        typeof document < "u" &&
        document.body &&
        ((Yt = window),
        (Yi = document),
        (ji = Yi.documentElement),
        (jr = Yi.body),
        (pc = [Yt, Yi, ji, jr]),
        (hc = gt.core.context || function () {}),
        (fr = "onpointerenter" in jr ? "pointer" : "mouse"),
        (fc = Re.isTouch =
          Yt.matchMedia &&
          Yt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Yt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (hi = Re.eventTypes =
          (
            "ontouchstart" in ji
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ji
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (gc = 0);
        }, 500),
        vc(),
        (xs = 1)),
      xs
    );
  };
Et.op = Xe;
le.cache = 0;
var Re = (function () {
  function r(t) {
    this.init(t);
  }
  var e = r.prototype;
  return (
    (e.init = function (i) {
      xs || _c(gt), Pn || vc();
      var n = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        u = i.debounce,
        c = i.preventDefault,
        d = i.onStop,
        m = i.onStopDelay,
        f = i.ignore,
        h = i.wheelSpeed,
        p = i.event,
        v = i.onDragStart,
        _ = i.onDragEnd,
        y = i.onDrag,
        x = i.onPress,
        g = i.onRelease,
        S = i.onRight,
        T = i.onLeft,
        P = i.onUp,
        O = i.onDown,
        k = i.onChangeX,
        M = i.onChangeY,
        R = i.onChange,
        A = i.onToggleX,
        N = i.onToggleY,
        b = i.onHover,
        w = i.onHoverEnd,
        C = i.onMove,
        L = i.ignoreCheck,
        D = i.isNormalizer,
        I = i.onGestureStart,
        E = i.onGestureEnd,
        F = i.onWheel,
        q = i.onEnable,
        Q = i.onDisable,
        X = i.onClick,
        ie = i.scrollSpeed,
        ue = i.capture,
        de = i.allowClicks,
        be = i.lockAxis,
        xe = i.onLockAxis;
      (this.target = a = Ot(a) || ji),
        (this.vars = i),
        f && (f = gt.utils.toArray(f)),
        (n = n || 1e-9),
        (s = s || 0),
        (h = h || 1),
        (ie = ie || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Yt.getComputedStyle(jr).lineHeight) || 22);
      var et,
        Le,
        Ve,
        ne,
        _e,
        qe,
        He,
        z = this,
        Ye = 0,
        At = 0,
        je = i.passive || (!c && i.passive !== !1),
        fe = tr(a, Et),
        yt = tr(a, Xe),
        st = fe(),
        Bt = yt(),
        Ce =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          hi[0] === "pointerdown",
        Ft = On(a),
        ye = a.ownerDocument || Yi,
        ot = [0, 0, 0],
        Pt = [0, 0, 0],
        ci = 0,
        sr = function () {
          return (ci = Ln());
        },
        Oe = function (Y, pe) {
          return (
            ((z.event = Y) && f && qf(Y.target, f)) ||
            (pe && Ce && Y.pointerType !== "touch") ||
            (L && L(Y, pe))
          );
        },
        Mr = function () {
          z._vx.reset(), z._vy.reset(), Le.pause(), d && d(z);
        },
        B = function () {
          var Y = (z.deltaX = fl(ot)),
            pe = (z.deltaY = fl(Pt)),
            H = Math.abs(Y) >= n,
            ee = Math.abs(pe) >= n;
          R && (H || ee) && R(z, Y, pe, ot, Pt),
            H &&
              (S && z.deltaX > 0 && S(z),
              T && z.deltaX < 0 && T(z),
              k && k(z),
              A && z.deltaX < 0 != Ye < 0 && A(z),
              (Ye = z.deltaX),
              (ot[0] = ot[1] = ot[2] = 0)),
            ee &&
              (O && z.deltaY > 0 && O(z),
              P && z.deltaY < 0 && P(z),
              M && M(z),
              N && z.deltaY < 0 != At < 0 && N(z),
              (At = z.deltaY),
              (Pt[0] = Pt[1] = Pt[2] = 0)),
            (ne || Ve) &&
              (C && C(z),
              Ve && (v && Ve === 1 && v(z), y && y(z), (Ve = 0)),
              (ne = !1)),
            qe && !(qe = !1) && xe && xe(z),
            _e && (F(z), (_e = !1)),
            (et = 0);
        },
        W = function (Y, pe, H) {
          (ot[H] += Y),
            (Pt[H] += pe),
            z._vx.update(Y),
            z._vy.update(pe),
            u ? et || (et = requestAnimationFrame(B)) : B();
        },
        j = function (Y, pe) {
          be &&
            !He &&
            ((z.axis = He = Math.abs(Y) > Math.abs(pe) ? "x" : "y"), (qe = !0)),
            He !== "y" && ((ot[2] += Y), z._vx.update(Y, !0)),
            He !== "x" && ((Pt[2] += pe), z._vy.update(pe, !0)),
            u ? et || (et = requestAnimationFrame(B)) : B();
        },
        oe = function (Y) {
          if (!Oe(Y, 1)) {
            Y = hn(Y, c);
            var pe = Y.clientX,
              H = Y.clientY,
              ee = pe - z.x,
              K = H - z.y,
              te = z.isDragging;
            (z.x = pe),
              (z.y = H),
              (te ||
                ((ee || K) &&
                  (Math.abs(z.startX - pe) >= s ||
                    Math.abs(z.startY - H) >= s))) &&
                ((Ve = te ? 2 : 1), te || (z.isDragging = !0), j(ee, K));
          }
        },
        re = (z.onPress = function (J) {
          Oe(J, 1) ||
            (J && J.button) ||
            ((z.axis = He = null),
            Le.pause(),
            (z.isPressed = !0),
            (J = hn(J)),
            (Ye = At = 0),
            (z.startX = z.x = J.clientX),
            (z.startY = z.y = J.clientY),
            z._vx.reset(),
            z._vy.reset(),
            bt(D ? a : ye, hi[1], oe, je, !0),
            (z.deltaX = z.deltaY = 0),
            x && x(z));
        }),
        U = (z.onRelease = function (J) {
          if (!Oe(J, 1)) {
            wt(D ? a : ye, hi[1], oe, !0);
            var Y = !isNaN(z.y - z.startY),
              pe = z.isDragging,
              H =
                pe &&
                (Math.abs(z.x - z.startX) > 3 || Math.abs(z.y - z.startY) > 3),
              ee = hn(J);
            !H &&
              Y &&
              (z._vx.reset(),
              z._vy.reset(),
              c &&
                de &&
                gt.delayedCall(0.08, function () {
                  if (Ln() - ci > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (ye.createEvent) {
                      var K = ye.createEvent("MouseEvents");
                      K.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Yt,
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
                        J.target.dispatchEvent(K);
                    }
                  }
                })),
              (z.isDragging = z.isGesturing = z.isPressed = !1),
              d && pe && !D && Le.restart(!0),
              Ve && B(),
              _ && pe && _(z),
              g && g(z, H);
          }
        }),
        Ne = function (Y) {
          return (
            Y.touches &&
            Y.touches.length > 1 &&
            (z.isGesturing = !0) &&
            I(Y, z.isDragging)
          );
        },
        Ue = function () {
          return (z.isGesturing = !1) || E(z);
        },
        Lt = function (Y) {
          if (!Oe(Y)) {
            var pe = fe(),
              H = yt();
            W((pe - st) * ie, (H - Bt) * ie, 1),
              (st = pe),
              (Bt = H),
              d && Le.restart(!0);
          }
        },
        $e = function (Y) {
          if (!Oe(Y)) {
            (Y = hn(Y, c)), F && (_e = !0);
            var pe =
              (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? Yt.innerHeight : 1) *
              h;
            W(Y.deltaX * pe, Y.deltaY * pe, 0), d && !D && Le.restart(!0);
          }
        },
        di = function (Y) {
          if (!Oe(Y)) {
            var pe = Y.clientX,
              H = Y.clientY,
              ee = pe - z.x,
              K = H - z.y;
            (z.x = pe),
              (z.y = H),
              (ne = !0),
              d && Le.restart(!0),
              (ee || K) && j(ee, K);
          }
        },
        fi = function (Y) {
          (z.event = Y), b(z);
        },
        at = function (Y) {
          (z.event = Y), w(z);
        },
        or = function (Y) {
          return Oe(Y) || (hn(Y, c) && X(z));
        };
      (Le = z._dc = gt.delayedCall(m || 0.25, Mr).pause()),
        (z.deltaX = z.deltaY = 0),
        (z._vx = Ko(0, 50, !0)),
        (z._vy = Ko(0, 50, !0)),
        (z.scrollX = fe),
        (z.scrollY = yt),
        (z.isDragging = z.isGesturing = z.isPressed = !1),
        hc(this),
        (z.enable = function (J) {
          return (
            z.isEnabled ||
              (bt(Ft ? ye : a, "scroll", Uo),
              o.indexOf("scroll") >= 0 && bt(Ft ? ye : a, "scroll", Lt, je, ue),
              o.indexOf("wheel") >= 0 && bt(a, "wheel", $e, je, ue),
              ((o.indexOf("touch") >= 0 && fc) || o.indexOf("pointer") >= 0) &&
                (bt(a, hi[0], re, je, ue),
                bt(ye, hi[2], U),
                bt(ye, hi[3], U),
                de && bt(a, "click", sr, !0, !0),
                X && bt(a, "click", or),
                I && bt(ye, "gesturestart", Ne),
                E && bt(ye, "gestureend", Ue),
                b && bt(a, fr + "enter", fi),
                w && bt(a, fr + "leave", at),
                C && bt(a, fr + "move", di)),
              (z.isEnabled = !0),
              (z.isDragging = z.isGesturing = z.isPressed = ne = Ve = !1),
              z._vx.reset(),
              z._vy.reset(),
              (st = fe()),
              (Bt = yt()),
              J && J.type && re(J),
              q && q(z)),
            z
          );
        }),
        (z.disable = function () {
          z.isEnabled &&
            (Wr.filter(function (J) {
              return J !== z && On(J.target);
            }).length || wt(Ft ? ye : a, "scroll", Uo),
            z.isPressed &&
              (z._vx.reset(), z._vy.reset(), wt(D ? a : ye, hi[1], oe, !0)),
            wt(Ft ? ye : a, "scroll", Lt, ue),
            wt(a, "wheel", $e, ue),
            wt(a, hi[0], re, ue),
            wt(ye, hi[2], U),
            wt(ye, hi[3], U),
            wt(a, "click", sr, !0),
            wt(a, "click", or),
            wt(ye, "gesturestart", Ne),
            wt(ye, "gestureend", Ue),
            wt(a, fr + "enter", fi),
            wt(a, fr + "leave", at),
            wt(a, fr + "move", di),
            (z.isEnabled = z.isPressed = z.isDragging = !1),
            Q && Q(z));
        }),
        (z.kill = z.revert =
          function () {
            z.disable();
            var J = Wr.indexOf(z);
            J >= 0 && Wr.splice(J, 1), Ii === z && (Ii = 0);
          }),
        Wr.push(z),
        D && On(a) && (Ii = z),
        z.enable(p);
    }),
    Ff(r, [
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
Re.register = _c;
Re.getAll = function () {
  return Wr.slice();
};
Re.getById = function (r) {
  return Wr.filter(function (e) {
    return e.vars.id === r;
  })[0];
};
mc() && gt.registerPlugin(Re);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var G,
  Fr,
  ae,
  we,
  Gt,
  he,
  Oa,
  qs,
  Yn,
  Mn,
  wn,
  as,
  dt,
  eo,
  Zo,
  Tt,
  pl,
  hl,
  Vr,
  yc,
  po,
  wc,
  St,
  Qo,
  bc,
  Sc,
  Hi,
  Jo,
  Ma,
  Ur,
  Da,
  Hs,
  ea,
  ho,
  ls = 1,
  ft = Date.now,
  mo = ft(),
  si = 0,
  bn = 0,
  ml = function (e, t, i) {
    var n = Ht(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
  },
  gl = function (e, t) {
    return t && (!Ht(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Hf = function r() {
    return bn && requestAnimationFrame(r);
  },
  vl = function () {
    return (eo = 1);
  },
  _l = function () {
    return (eo = 0);
  },
  bi = function (e) {
    return e;
  },
  Sn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Tc = function () {
    return typeof window < "u";
  },
  xc = function () {
    return G || (Tc() && (G = window.gsap) && G.registerPlugin && G);
  },
  Er = function (e) {
    return !!~Oa.indexOf(e);
  },
  Cc = function (e) {
    return (
      (e === "Height" ? Da : ae["inner" + e]) ||
      Gt["client" + e] ||
      he["client" + e]
    );
  },
  Ec = function (e) {
    return (
      Qi(e, "getBoundingClientRect") ||
      (Er(e)
        ? function () {
            return (Ls.width = ae.innerWidth), (Ls.height = Da), Ls;
          }
        : function () {
            return ki(e);
          })
    );
  },
  $f = function (e, t, i) {
    var n = i.d,
      s = i.d2,
      o = i.a;
    return (o = Qi(e, "getBoundingClientRect"))
      ? function () {
          return o()[n];
        }
      : function () {
          return (t ? Cc(s) : e["client" + s]) || 0;
        };
  },
  Wf = function (e, t) {
    return !t || ~Ai.indexOf(e)
      ? Ec(e)
      : function () {
          return Ls;
        };
  },
  Ci = function (e, t) {
    var i = t.s,
      n = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + n) && (o = Qi(e, i))
        ? o() - Ec(e)()[s]
        : Er(e)
        ? (Gt[i] || he[i]) - Cc(n)
        : e[i] - e["offset" + n]
    );
  },
  us = function (e, t) {
    for (var i = 0; i < Vr.length; i += 3)
      (!t || ~t.indexOf(Vr[i + 1])) && e(Vr[i], Vr[i + 1], Vr[i + 2]);
  },
  Ht = function (e) {
    return typeof e == "string";
  },
  mt = function (e) {
    return typeof e == "function";
  },
  Tn = function (e) {
    return typeof e == "number";
  },
  pr = function (e) {
    return typeof e == "object";
  },
  mn = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  },
  go = function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  kr = Math.abs,
  Ac = "left",
  Pc = "top",
  ka = "right",
  Ia = "bottom",
  br = "width",
  Sr = "height",
  Dn = "Right",
  kn = "Left",
  In = "Top",
  Rn = "Bottom",
  ze = "padding",
  ei = "margin",
  nn = "Width",
  Ra = "Height",
  Ge = "px",
  ti = function (e) {
    return ae.getComputedStyle(e);
  },
  Gf = function (e) {
    var t = ti(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  yl = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  ki = function (e, t) {
    var i =
        t &&
        ti(e)[Zo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        G.to(e, {
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
        }).progress(1),
      n = e.getBoundingClientRect();
    return i && i.progress(0).kill(), n;
  },
  $s = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  Lc = function (e) {
    var t = [],
      i = e.labels,
      n = e.duration(),
      s;
    for (s in i) t.push(i[s] / n);
    return t;
  },
  Xf = function (e) {
    return function (t) {
      return G.utils.snap(Lc(e), t);
    };
  },
  Na = function (e) {
    var t = G.utils.snap(e),
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
  Yf = function (e) {
    return function (t, i) {
      return Na(Lc(e))(t, i.direction);
    };
  },
  cs = function (e, t, i, n) {
    return i.split(",").forEach(function (s) {
      return e(t, s, n);
    });
  },
  Qe = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: !n, capture: !!s });
  },
  Ze = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n);
  },
  ds = function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  },
  wl = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  fs = { toggleActions: "play", anticipatePin: 0 },
  Ws = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Cs = function (e, t) {
    if (Ht(e)) {
      var i = e.indexOf("="),
        n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          n +
          (e in Ws
            ? Ws[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  ps = function (e, t, i, n, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      d = s.fontSize,
      m = s.indent,
      f = s.fontWeight,
      h = we.createElement("div"),
      p = Er(i) || Qi(i, "pinType") === "fixed",
      v = e.indexOf("scroller") !== -1,
      _ = p ? he : i,
      y = e.indexOf("start") !== -1,
      x = y ? u : c,
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
      (g += "position:" + ((v || l) && p ? "fixed;" : "absolute;")),
      (v || l || !p) &&
        (g += (n === Xe ? ka : Ia) + ":" + (o + parseFloat(m)) + "px;"),
      a &&
        (g +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (h._isStart = y),
      h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (h.style.cssText = g),
      (h.innerText = t || t === 0 ? e + "-" + t : e),
      _.children[0] ? _.insertBefore(h, _.children[0]) : _.appendChild(h),
      (h._offset = h["offset" + n.op.d2]),
      Es(h, 0, n, y),
      h
    );
  },
  Es = function (e, t, i, n) {
    var s = { display: "block" },
      o = i[n ? "os2" : "p2"],
      a = i[n ? "p2" : "os2"];
    (e._isFlipped = n),
      (s[i.a + "Percent"] = n ? -100 : 0),
      (s[i.a] = n ? "1px" : 0),
      (s["border" + o + nn] = 1),
      (s["border" + a + nn] = 0),
      (s[i.p] = t + "px"),
      G.set(e, s);
  },
  se = [],
  ta = {},
  jn,
  bl = function () {
    return ft() - si > 34 && (jn || (jn = requestAnimationFrame(Ri)));
  },
  Ir = function () {
    (!St || !St.isPressed || St.startX > he.clientWidth) &&
      (le.cache++,
      St ? jn || (jn = requestAnimationFrame(Ri)) : Ri(),
      si || Pr("scrollStart"),
      (si = ft()));
  },
  vo = function () {
    (Sc = ae.innerWidth), (bc = ae.innerHeight);
  },
  xn = function (e) {
    le.cache++,
      (e === !0 ||
        (!dt &&
          !wc &&
          !we.fullscreenElement &&
          !we.webkitFullscreenElement &&
          (!Qo ||
            Sc !== ae.innerWidth ||
            Math.abs(ae.innerHeight - bc) > ae.innerHeight * 0.25))) &&
        qs.restart(!0);
  },
  Ar = {},
  jf = [],
  Oc = function r() {
    return Ze(Z, "scrollEnd", r) || gr(!0);
  },
  Pr = function (e) {
    return (
      (Ar[e] &&
        Ar[e].map(function (t) {
          return t();
        })) ||
      jf
    );
  },
  qt = [],
  Mc = function (e) {
    for (var t = 0; t < qt.length; t += 5)
      (!e || (qt[t + 4] && qt[t + 4].query === e)) &&
        ((qt[t].style.cssText = qt[t + 1]),
        qt[t].getBBox && qt[t].setAttribute("transform", qt[t + 2] || ""),
        (qt[t + 3].uncache = 1));
  },
  za = function (e, t) {
    var i;
    for (Tt = 0; Tt < se.length; Tt++)
      (i = se[Tt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (Hs = !0), t && Mc(t), t || Pr("revert");
  },
  Dc = function (e, t) {
    le.cache++,
      (t || !xt) &&
        le.forEach(function (i) {
          return mt(i) && i.cacheID++ && (i.rec = 0);
        }),
      Ht(e) && (ae.history.scrollRestoration = Ma = e);
  },
  xt,
  Tr = 0,
  Sl,
  Uf = function () {
    if (Sl !== Tr) {
      var e = (Sl = Tr);
      requestAnimationFrame(function () {
        return e === Tr && gr(!0);
      });
    }
  },
  kc = function () {
    he.appendChild(Ur),
      (Da = (!St && Ur.offsetHeight) || ae.innerHeight),
      he.removeChild(Ur);
  },
  Tl = function (e) {
    return Yn(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  gr = function (e, t) {
    if (
      ((Gt = we.documentElement),
      (he = we.body),
      (Oa = [ae, we, Gt, he]),
      si && !e && !Hs)
    ) {
      Qe(Z, "scrollEnd", Oc);
      return;
    }
    kc(),
      (xt = Z.isRefreshing = !0),
      le.forEach(function (n) {
        return mt(n) && ++n.cacheID && (n.rec = n());
      });
    var i = Pr("refreshInit");
    yc && Z.sort(),
      t || za(),
      le.forEach(function (n) {
        mt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
      }),
      se.slice(0).forEach(function (n) {
        return n.refresh();
      }),
      (Hs = !1),
      se.forEach(function (n) {
        if (n._subPinOffset && n.pin) {
          var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = n.pin[s];
          n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
        }
      }),
      (ea = 1),
      Tl(!0),
      se.forEach(function (n) {
        var s = Ci(n.scroller, n._dir),
          o = n.vars.end === "max" || (n._endClamp && n.end > s),
          a = n._startClamp && n.start >= s;
        (o || a) &&
          n.setPositions(
            a ? s - 1 : n.start,
            o ? Math.max(a ? s : n.start + 1, s) : n.end,
            !0
          );
      }),
      Tl(!1),
      (ea = 0),
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
      Dc(Ma, 1),
      qs.pause(),
      Tr++,
      (xt = 2),
      Ri(2),
      se.forEach(function (n) {
        return mt(n.vars.onRefresh) && n.vars.onRefresh(n);
      }),
      (xt = Z.isRefreshing = !1),
      Pr("refresh");
  },
  ia = 0,
  As = 1,
  Nn,
  Ri = function (e) {
    if (e === 2 || (!xt && !Hs)) {
      (Z.isUpdating = !0), Nn && Nn.update(0);
      var t = se.length,
        i = ft(),
        n = i - mo >= 50,
        s = t && se[0].scroll();
      if (
        ((As = ia > s ? -1 : 1),
        xt || (ia = s),
        n &&
          (si && !eo && i - si > 200 && ((si = 0), Pr("scrollEnd")),
          (wn = mo),
          (mo = i)),
        As < 0)
      ) {
        for (Tt = t; Tt-- > 0; ) se[Tt] && se[Tt].update(0, n);
        As = 1;
      } else for (Tt = 0; Tt < t; Tt++) se[Tt] && se[Tt].update(0, n);
      Z.isUpdating = !1;
    }
    jn = 0;
  },
  ra = [
    Ac,
    Pc,
    Ia,
    ka,
    ei + Rn,
    ei + Dn,
    ei + In,
    ei + kn,
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
  Ps = ra.concat([
    br,
    Sr,
    "boxSizing",
    "max" + nn,
    "max" + Ra,
    "position",
    ei,
    ze,
    ze + In,
    ze + Dn,
    ze + Rn,
    ze + kn,
  ]),
  Kf = function (e, t, i) {
    Kr(i);
    var n = e._gsap;
    if (n.spacerIsNative) Kr(n.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  _o = function (e, t, i, n) {
    if (!e._gsap.swappedIn) {
      for (var s = ra.length, o = t.style, a = e.style, l; s--; )
        (l = ra[s]), (o[l] = i[l]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (a[Ia] = a[ka] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[br] = $s(e, Et) + Ge),
        (o[Sr] = $s(e, Xe) + Ge),
        (o[ze] = a[ei] = a[Pc] = a[Ac] = "0"),
        Kr(n),
        (a[br] = a["max" + nn] = i[br]),
        (a[Sr] = a["max" + Ra] = i[Sr]),
        (a[ze] = i[ze]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Zf = /([A-Z])/g,
  Kr = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        n = 0,
        s,
        o;
      for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; n < i; n += 2)
        (o = e[n + 1]),
          (s = e[n]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(Zf, "-$1").toLowerCase());
    }
  },
  hs = function (e) {
    for (var t = Ps.length, i = e.style, n = [], s = 0; s < t; s++)
      n.push(Ps[s], i[Ps[s]]);
    return (n.t = e), n;
  },
  Qf = function (e, t, i) {
    for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
    return (n.t = e.t), n;
  },
  Ls = { left: 0, top: 0 },
  xl = function (e, t, i, n, s, o, a, l, u, c, d, m, f, h) {
    mt(e) && (e = e(l)),
      Ht(e) &&
        e.substr(0, 3) === "max" &&
        (e = m + (e.charAt(4) === "=" ? Cs("0" + e.substr(3), i) : 0));
    var p = f ? f.time() : 0,
      v,
      _,
      y;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Tn(e)))
      f &&
        (e = G.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          m,
          e
        )),
        a && Es(a, i, n, !0);
    else {
      mt(t) && (t = t(l));
      var x = (e || "0").split(" "),
        g,
        S,
        T,
        P;
      (y = Ot(t, l) || he),
        (g = ki(y) || {}),
        (!g || (!g.left && !g.top)) &&
          ti(y).display === "none" &&
          ((P = y.style.display),
          (y.style.display = "block"),
          (g = ki(y)),
          P ? (y.style.display = P) : y.style.removeProperty("display")),
        (S = Cs(x[0], g[n.d])),
        (T = Cs(x[1] || "0", i)),
        (e = g[n.p] - u[n.p] - c + S + s - T),
        a && Es(a, T, n, i - T < 20 || (a._isStart && T > 20)),
        (i -= i - T);
    }
    if ((h && ((l[h] = e || -0.001), e < 0 && (e = 0)), o)) {
      var O = e + i,
        k = o._isStart;
      (v = "scroll" + n.d2),
        Es(
          o,
          O,
          n,
          (k && O > 20) ||
            (!k && (d ? Math.max(he[v], Gt[v]) : o.parentNode[v]) <= O + 1)
        ),
        d &&
          ((u = ki(a)),
          d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Ge));
    }
    return (
      f &&
        y &&
        ((v = ki(y)),
        f.seek(m),
        (_ = ki(y)),
        (f._caScrollDist = v[n.p] - _[n.p]),
        (e = (e / f._caScrollDist) * m)),
      f && f.seek(p),
      f ? e : Math.round(e)
    );
  },
  Jf = /(webkit|moz|length|cssText|inset)/i,
  Cl = function (e, t, i, n) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === he) {
        (e._stOrig = s.cssText), (a = ti(e));
        for (o in a)
          !+o &&
            !Jf.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = i), (s.left = n);
      } else s.cssText = e._stOrig;
      (G.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Ic = function (e, t, i) {
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
  ms = function (e, t, i) {
    var n = {};
    (n[t.p] = "+=" + i), G.set(e, n);
  },
  El = function (e, t) {
    var i = tr(e, t),
      n = "_scroll" + t.p2,
      s = function o(a, l, u, c, d) {
        var m = o.tween,
          f = l.onComplete,
          h = {};
        u = u || i();
        var p = Ic(i, u, function () {
          m.kill(), (o.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          m && m.kill(),
          (l[n] = a),
          (l.inherit = !1),
          (l.modifiers = h),
          (h[n] = function () {
            return p(u + c * m.ratio + d * m.ratio * m.ratio);
          }),
          (l.onUpdate = function () {
            le.cache++, o.tween && Ri();
          }),
          (l.onComplete = function () {
            (o.tween = 0), f && f.call(m);
          }),
          (m = o.tween = G.to(e, l)),
          m
        );
      };
    return (
      (e[n] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Qe(e, "wheel", i.wheelHandler),
      Z.isTouch && Qe(e, "touchmove", i.wheelHandler),
      s
    );
  },
  Z = (function () {
    function r(t, i) {
      Fr || r.register(G), Jo(this), this.init(t, i);
    }
    var e = r.prototype;
    return (
      (e.init = function (i, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !bn)
        ) {
          this.update = this.refresh = this.kill = bi;
          return;
        }
        i = yl(Ht(i) || Tn(i) || i.nodeType ? { trigger: i } : i, fs);
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          d = s.scrub,
          m = s.trigger,
          f = s.pin,
          h = s.pinSpacing,
          p = s.invalidateOnRefresh,
          v = s.anticipatePin,
          _ = s.onScrubComplete,
          y = s.onSnapComplete,
          x = s.once,
          g = s.snap,
          S = s.pinReparent,
          T = s.pinSpacer,
          P = s.containerAnimation,
          O = s.fastScrollEnd,
          k = s.preventOverlaps,
          M =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Et
              : Xe,
          R = !d && d !== 0,
          A = Ot(i.scroller || ae),
          N = G.core.getCache(A),
          b = Er(A),
          w =
            ("pinType" in i
              ? i.pinType
              : Qi(A, "pinType") || (b && "fixed")) === "fixed",
          C = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          L = R && i.toggleActions.split(" "),
          D = "markers" in i ? i.markers : fs.markers,
          I = b ? 0 : parseFloat(ti(A)["border" + M.p2 + nn]) || 0,
          E = this,
          F =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(E);
            },
          q = $f(A, b, M),
          Q = Wf(A, b),
          X = 0,
          ie = 0,
          ue = 0,
          de = tr(A, M),
          be,
          xe,
          et,
          Le,
          Ve,
          ne,
          _e,
          qe,
          He,
          z,
          Ye,
          At,
          je,
          fe,
          yt,
          st,
          Bt,
          Ce,
          Ft,
          ye,
          ot,
          Pt,
          ci,
          sr,
          Oe,
          Mr,
          B,
          W,
          j,
          oe,
          re,
          U,
          Ne,
          Ue,
          Lt,
          $e,
          di,
          fi,
          at;
        if (
          ((E._startClamp = E._endClamp = !1),
          (E._dir = M),
          (v *= 45),
          (E.scroller = A),
          (E.scroll = P ? P.time.bind(P) : de),
          (Le = de()),
          (E.vars = i),
          (n = n || i.animation),
          "refreshPriority" in i &&
            ((yc = 1), i.refreshPriority === -9999 && (Nn = E)),
          (N.tweenScroll = N.tweenScroll || {
            top: El(A, Xe),
            left: El(A, Et),
          }),
          (E.tweenTo = be = N.tweenScroll[M.p]),
          (E.scrubDuration = function (H) {
            (Ne = Tn(H) && H),
              Ne
                ? U
                  ? U.duration(H)
                  : (U = G.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Ne,
                      paused: !0,
                      onComplete: function () {
                        return _ && _(E);
                      },
                    }))
                : (U && U.progress(1).kill(), (U = 0));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !E.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (E.animation = n.pause()),
            (n.scrollTrigger = E),
            E.scrubDuration(d),
            (oe = 0),
            l || (l = n.vars.id)),
          g &&
            ((!pr(g) || g.push) && (g = { snapTo: g }),
            "scrollBehavior" in he.style &&
              G.set(b ? [he, Gt] : A, { scrollBehavior: "auto" }),
            le.forEach(function (H) {
              return (
                mt(H) &&
                H.target === (b ? we.scrollingElement || Gt : A) &&
                (H.smooth = !1)
              );
            }),
            (et = mt(g.snapTo)
              ? g.snapTo
              : g.snapTo === "labels"
              ? Xf(n)
              : g.snapTo === "labelsDirectional"
              ? Yf(n)
              : g.directional !== !1
              ? function (H, ee) {
                  return Na(g.snapTo)(H, ft() - ie < 500 ? 0 : ee.direction);
                }
              : G.utils.snap(g.snapTo)),
            (Ue = g.duration || { min: 0.1, max: 2 }),
            (Ue = pr(Ue) ? Mn(Ue.min, Ue.max) : Mn(Ue, Ue)),
            (Lt = G.delayedCall(g.delay || Ne / 2 || 0.1, function () {
              var H = de(),
                ee = ft() - ie < 500,
                K = be.tween;
              if (
                (ee || Math.abs(E.getVelocity()) < 10) &&
                !K &&
                !eo &&
                X !== H
              ) {
                var te = (H - ne) / fe,
                  Ke = n && !R ? n.totalProgress() : te,
                  ce = ee ? 0 : ((Ke - re) / (ft() - wn)) * 1e3 || 0,
                  ke = G.utils.clamp(-te, 1 - te, (kr(ce / 2) * ce) / 0.185),
                  lt = te + (g.inertia === !1 ? 0 : ke),
                  Me,
                  Se,
                  me = g,
                  pi = me.onStart,
                  Ee = me.onInterrupt,
                  Vt = me.onComplete;
                if (
                  ((Me = et(lt, E)),
                  Tn(Me) || (Me = lt),
                  (Se = Math.max(0, Math.round(ne + Me * fe))),
                  H <= _e && H >= ne && Se !== H)
                ) {
                  if (K && !K._initted && K.data <= kr(Se - H)) return;
                  g.inertia === !1 && (ke = Me - te),
                    be(
                      Se,
                      {
                        duration: Ue(
                          kr(
                            (Math.max(kr(lt - Ke), kr(Me - Ke)) * 0.185) /
                              ce /
                              0.05 || 0
                          )
                        ),
                        ease: g.ease || "power3",
                        data: kr(Se - H),
                        onInterrupt: function () {
                          return Lt.restart(!0) && Ee && Ee(E);
                        },
                        onComplete: function () {
                          E.update(),
                            (X = de()),
                            n &&
                              !R &&
                              (U
                                ? U.resetTo(
                                    "totalProgress",
                                    Me,
                                    n._tTime / n._tDur
                                  )
                                : n.progress(Me)),
                            (oe = re =
                              n && !R ? n.totalProgress() : E.progress),
                            y && y(E),
                            Vt && Vt(E);
                        },
                      },
                      H,
                      ke * fe,
                      Se - H - ke * fe
                    ),
                    pi && pi(E, be.tween);
                }
              } else E.isActive && X !== H && Lt.restart(!0);
            }).pause())),
          l && (ta[l] = E),
          (m = E.trigger = Ot(m || (f !== !0 && f))),
          (at = m && m._gsap && m._gsap.stRevert),
          at && (at = at(E)),
          (f = f === !0 ? m : Ot(f)),
          Ht(a) && (a = { targets: m, className: a }),
          f &&
            (h === !1 ||
              h === ei ||
              (h =
                !h &&
                f.parentNode &&
                f.parentNode.style &&
                ti(f.parentNode).display === "flex"
                  ? !1
                  : ze),
            (E.pin = f),
            (xe = G.core.getCache(f)),
            xe.spacer
              ? (yt = xe.pinState)
              : (T &&
                  ((T = Ot(T)),
                  T && !T.nodeType && (T = T.current || T.nativeElement),
                  (xe.spacerIsNative = !!T),
                  T && (xe.spacerState = hs(T))),
                (xe.spacer = Ce = T || we.createElement("div")),
                Ce.classList.add("pin-spacer"),
                l && Ce.classList.add("pin-spacer-" + l),
                (xe.pinState = yt = hs(f))),
            i.force3D !== !1 && G.set(f, { force3D: !0 }),
            (E.spacer = Ce = xe.spacer),
            (j = ti(f)),
            (sr = j[h + M.os2]),
            (ye = G.getProperty(f)),
            (ot = G.quickSetter(f, M.a, Ge)),
            _o(f, Ce, j),
            (Bt = hs(f))),
          D)
        ) {
          (At = pr(D) ? yl(D, wl) : wl),
            (z = ps("scroller-start", l, A, M, At, 0)),
            (Ye = ps("scroller-end", l, A, M, At, 0, z)),
            (Ft = z["offset" + M.op.d2]);
          var or = Ot(Qi(A, "content") || A);
          (qe = this.markerStart = ps("start", l, or, M, At, Ft, 0, P)),
            (He = this.markerEnd = ps("end", l, or, M, At, Ft, 0, P)),
            P && (fi = G.quickSetter([qe, He], M.a, Ge)),
            !w &&
              !(Ai.length && Qi(A, "fixedMarkers") === !0) &&
              (Gf(b ? he : A),
              G.set([z, Ye], { force3D: !0 }),
              (Mr = G.quickSetter(z, M.a, Ge)),
              (W = G.quickSetter(Ye, M.a, Ge)));
        }
        if (P) {
          var J = P.vars.onUpdate,
            Y = P.vars.onUpdateParams;
          P.eventCallback("onUpdate", function () {
            E.update(0, 0, 1), J && J.apply(P, Y || []);
          });
        }
        if (
          ((E.previous = function () {
            return se[se.indexOf(E) - 1];
          }),
          (E.next = function () {
            return se[se.indexOf(E) + 1];
          }),
          (E.revert = function (H, ee) {
            if (!ee) return E.kill(!0);
            var K = H !== !1 || !E.enabled,
              te = dt;
            K !== E.isReverted &&
              (K &&
                (($e = Math.max(de(), E.scroll.rec || 0)),
                (ue = E.progress),
                (di = n && n.progress())),
              qe &&
                [qe, He, z, Ye].forEach(function (Ke) {
                  return (Ke.style.display = K ? "none" : "block");
                }),
              K && ((dt = E), E.update(K)),
              f &&
                (!S || !E.isActive) &&
                (K ? Kf(f, Ce, yt) : _o(f, Ce, ti(f), Oe)),
              K || E.update(K),
              (dt = te),
              (E.isReverted = K));
          }),
          (E.refresh = function (H, ee, K, te) {
            if (!((dt || !E.enabled) && !ee)) {
              if (f && H && si) {
                Qe(r, "scrollEnd", Oc);
                return;
              }
              !xt && F && F(E),
                (dt = E),
                be.tween && !K && (be.tween.kill(), (be.tween = 0)),
                U && U.pause(),
                p &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren &&
                    n.getChildren(!0, !0, !1).forEach(function (Vi) {
                      return Vi.vars.immediateRender && Vi.render(0, !0, !0);
                    })),
                E.isReverted || E.revert(!0, !0),
                (E._subPinOffset = !1);
              var Ke = q(),
                ce = Q(),
                ke = P ? P.duration() : Ci(A, M),
                lt = fe <= 0.01 || !fe,
                Me = 0,
                Se = te || 0,
                me = pr(K) ? K.end : i.end,
                pi = i.endTrigger || m,
                Ee = pr(K)
                  ? K.start
                  : i.start || (i.start === 0 || !m ? 0 : f ? "0 0" : "0 100%"),
                Vt = (E.pinnedContainer =
                  i.pinnedContainer && Ot(i.pinnedContainer, E)),
                gi = (m && Math.max(0, se.indexOf(E))) || 0,
                tt = gi,
                it,
                ut,
                ar,
                is,
                ct,
                We,
                vi,
                ro,
                ja,
                dn,
                _i,
                fn,
                rs;
              for (
                D &&
                pr(K) &&
                ((fn = G.getProperty(z, M.p)), (rs = G.getProperty(Ye, M.p)));
                tt-- > 0;

              )
                (We = se[tt]),
                  We.end || We.refresh(0, 1) || (dt = E),
                  (vi = We.pin),
                  vi &&
                    (vi === m || vi === f || vi === Vt) &&
                    !We.isReverted &&
                    (dn || (dn = []), dn.unshift(We), We.revert(!0, !0)),
                  We !== se[tt] && (gi--, tt--);
              for (
                mt(Ee) && (Ee = Ee(E)),
                  Ee = ml(Ee, "start", E),
                  ne =
                    xl(
                      Ee,
                      m,
                      Ke,
                      M,
                      de(),
                      qe,
                      z,
                      E,
                      ce,
                      I,
                      w,
                      ke,
                      P,
                      E._startClamp && "_startClamp"
                    ) || (f ? -0.001 : 0),
                  mt(me) && (me = me(E)),
                  Ht(me) &&
                    !me.indexOf("+=") &&
                    (~me.indexOf(" ")
                      ? (me = (Ht(Ee) ? Ee.split(" ")[0] : "") + me)
                      : ((Me = Cs(me.substr(2), Ke)),
                        (me = Ht(Ee)
                          ? Ee
                          : (P
                              ? G.utils.mapRange(
                                  0,
                                  P.duration(),
                                  P.scrollTrigger.start,
                                  P.scrollTrigger.end,
                                  ne
                                )
                              : ne) + Me),
                        (pi = m))),
                  me = ml(me, "end", E),
                  _e =
                    Math.max(
                      ne,
                      xl(
                        me || (pi ? "100% 0" : ke),
                        pi,
                        Ke,
                        M,
                        de() + Me,
                        He,
                        Ye,
                        E,
                        ce,
                        I,
                        w,
                        ke,
                        P,
                        E._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Me = 0,
                  tt = gi;
                tt--;

              )
                (We = se[tt]),
                  (vi = We.pin),
                  vi &&
                    We.start - We._pinPush <= ne &&
                    !P &&
                    We.end > 0 &&
                    ((it =
                      We.end -
                      (E._startClamp ? Math.max(0, We.start) : We.start)),
                    ((vi === m && We.start - We._pinPush < ne) || vi === Vt) &&
                      isNaN(Ee) &&
                      (Me += it * (1 - We.progress)),
                    vi === f && (Se += it));
              if (
                ((ne += Me),
                (_e += Me),
                E._startClamp && (E._startClamp += Me),
                E._endClamp &&
                  !xt &&
                  ((E._endClamp = _e || -0.001), (_e = Math.min(_e, Ci(A, M)))),
                (fe = _e - ne || ((ne -= 0.01) && 0.001)),
                lt && (ue = G.utils.clamp(0, 1, G.utils.normalize(ne, _e, $e))),
                (E._pinPush = Se),
                qe &&
                  Me &&
                  ((it = {}),
                  (it[M.a] = "+=" + Me),
                  Vt && (it[M.p] = "-=" + de()),
                  G.set([qe, He], it)),
                f && !(ea && E.end >= Ci(A, M)))
              )
                (it = ti(f)),
                  (is = M === Xe),
                  (ar = de()),
                  (Pt = parseFloat(ye(M.a)) + Se),
                  !ke &&
                    _e > 1 &&
                    ((_i = (b ? we.scrollingElement || Gt : A).style),
                    (_i = {
                      style: _i,
                      value: _i["overflow" + M.a.toUpperCase()],
                    }),
                    b &&
                      ti(he)["overflow" + M.a.toUpperCase()] !== "scroll" &&
                      (_i.style["overflow" + M.a.toUpperCase()] = "scroll")),
                  _o(f, Ce, it),
                  (Bt = hs(f)),
                  (ut = ki(f, !0)),
                  (ro = w && tr(A, is ? Et : Xe)()),
                  h
                    ? ((Oe = [h + M.os2, fe + Se + Ge]),
                      (Oe.t = Ce),
                      (tt = h === ze ? $s(f, M) + fe + Se : 0),
                      tt &&
                        (Oe.push(M.d, tt + Ge),
                        Ce.style.flexBasis !== "auto" &&
                          (Ce.style.flexBasis = tt + Ge)),
                      Kr(Oe),
                      Vt &&
                        se.forEach(function (Vi) {
                          Vi.pin === Vt &&
                            Vi.vars.pinSpacing !== !1 &&
                            (Vi._subPinOffset = !0);
                        }),
                      w && de($e))
                    : ((tt = $s(f, M)),
                      tt &&
                        Ce.style.flexBasis !== "auto" &&
                        (Ce.style.flexBasis = tt + Ge)),
                  w &&
                    ((ct = {
                      top: ut.top + (is ? ar - ne : ro) + Ge,
                      left: ut.left + (is ? ro : ar - ne) + Ge,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ct[br] = ct["max" + nn] = Math.ceil(ut.width) + Ge),
                    (ct[Sr] = ct["max" + Ra] = Math.ceil(ut.height) + Ge),
                    (ct[ei] =
                      ct[ei + In] =
                      ct[ei + Dn] =
                      ct[ei + Rn] =
                      ct[ei + kn] =
                        "0"),
                    (ct[ze] = it[ze]),
                    (ct[ze + In] = it[ze + In]),
                    (ct[ze + Dn] = it[ze + Dn]),
                    (ct[ze + Rn] = it[ze + Rn]),
                    (ct[ze + kn] = it[ze + kn]),
                    (st = Qf(yt, ct, S)),
                    xt && de(0)),
                  n
                    ? ((ja = n._initted),
                      po(1),
                      n.render(n.duration(), !0, !0),
                      (ci = ye(M.a) - Pt + fe + Se),
                      (B = Math.abs(fe - ci) > 1),
                      w && B && st.splice(st.length - 2, 2),
                      n.render(0, !0, !0),
                      ja || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      po(0))
                    : (ci = fe),
                  _i &&
                    (_i.value
                      ? (_i.style["overflow" + M.a.toUpperCase()] = _i.value)
                      : _i.style.removeProperty("overflow-" + M.a));
              else if (m && de() && !P)
                for (ut = m.parentNode; ut && ut !== he; )
                  ut._pinOffset &&
                    ((ne -= ut._pinOffset), (_e -= ut._pinOffset)),
                    (ut = ut.parentNode);
              dn &&
                dn.forEach(function (Vi) {
                  return Vi.revert(!1, !0);
                }),
                (E.start = ne),
                (E.end = _e),
                (Le = Ve = xt ? $e : de()),
                !P && !xt && (Le < $e && de($e), (E.scroll.rec = 0)),
                E.revert(!1, !0),
                (ie = ft()),
                Lt && ((X = -1), Lt.restart(!0)),
                (dt = 0),
                n &&
                  R &&
                  (n._initted || di) &&
                  n.progress() !== di &&
                  n.progress(di || 0, !0).render(n.time(), !0, !0),
                (lt || ue !== E.progress || P || p || (n && !n._initted)) &&
                  (n &&
                    !R &&
                    (n._initted || ue || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      P && ne < -0.001 && !ue
                        ? G.utils.normalize(ne, _e, 0)
                        : ue,
                      !0
                    ),
                  (E.progress = lt || (Le - ne) / fe === ue ? 0 : ue)),
                f && h && (Ce._pinOffset = Math.round(E.progress * ci)),
                U && U.invalidate(),
                isNaN(fn) ||
                  ((fn -= G.getProperty(z, M.p)),
                  (rs -= G.getProperty(Ye, M.p)),
                  ms(z, M, fn),
                  ms(qe, M, fn - (te || 0)),
                  ms(Ye, M, rs),
                  ms(He, M, rs - (te || 0))),
                lt && !xt && E.update(),
                c && !xt && !je && ((je = !0), c(E), (je = !1));
            }
          }),
          (E.getVelocity = function () {
            return ((de() - Ve) / (ft() - wn)) * 1e3 || 0;
          }),
          (E.endAnimation = function () {
            mn(E.callbackAnimation),
              n &&
                (U
                  ? U.progress(1)
                  : n.paused()
                  ? R || mn(n, E.direction < 0, 1)
                  : mn(n, n.reversed()));
          }),
          (E.labelToScroll = function (H) {
            return (
              (n &&
                n.labels &&
                (ne || E.refresh() || ne) +
                  (n.labels[H] / n.duration()) * fe) ||
              0
            );
          }),
          (E.getTrailing = function (H) {
            var ee = se.indexOf(E),
              K =
                E.direction > 0 ? se.slice(0, ee).reverse() : se.slice(ee + 1);
            return (
              Ht(H)
                ? K.filter(function (te) {
                    return te.vars.preventOverlaps === H;
                  })
                : K
            ).filter(function (te) {
              return E.direction > 0 ? te.end <= ne : te.start >= _e;
            });
          }),
          (E.update = function (H, ee, K) {
            if (!(P && !K && !H)) {
              var te = xt === !0 ? $e : E.scroll(),
                Ke = H ? 0 : (te - ne) / fe,
                ce = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0,
                ke = E.progress,
                lt,
                Me,
                Se,
                me,
                pi,
                Ee,
                Vt,
                gi;
              if (
                (ee &&
                  ((Ve = Le),
                  (Le = P ? de() : te),
                  g && ((re = oe), (oe = n && !R ? n.totalProgress() : ce))),
                v &&
                  f &&
                  !dt &&
                  !ls &&
                  si &&
                  (!ce && ne < te + ((te - Ve) / (ft() - wn)) * v
                    ? (ce = 1e-4)
                    : ce === 1 &&
                      _e > te + ((te - Ve) / (ft() - wn)) * v &&
                      (ce = 0.9999)),
                ce !== ke && E.enabled)
              ) {
                if (
                  ((lt = E.isActive = !!ce && ce < 1),
                  (Me = !!ke && ke < 1),
                  (Ee = lt !== Me),
                  (pi = Ee || !!ce != !!ke),
                  (E.direction = ce > ke ? 1 : -1),
                  (E.progress = ce),
                  pi &&
                    !dt &&
                    ((Se = ce && !ke ? 0 : ce === 1 ? 1 : ke === 1 ? 2 : 3),
                    R &&
                      ((me =
                        (!Ee && L[Se + 1] !== "none" && L[Se + 1]) || L[Se]),
                      (gi =
                        n &&
                        (me === "complete" || me === "reset" || me in n)))),
                  k &&
                    (Ee || gi) &&
                    (gi || d || !n) &&
                    (mt(k)
                      ? k(E)
                      : E.getTrailing(k).forEach(function (ar) {
                          return ar.endAnimation();
                        })),
                  R ||
                    (U && !dt && !ls
                      ? (U._dp._time - U._start !== U._time &&
                          U.render(U._dp._time - U._start),
                        U.resetTo
                          ? U.resetTo("totalProgress", ce, n._tTime / n._tDur)
                          : ((U.vars.totalProgress = ce),
                            U.invalidate().restart()))
                      : n && n.totalProgress(ce, !!(dt && (ie || H)))),
                  f)
                ) {
                  if ((H && h && (Ce.style[h + M.os2] = sr), !w))
                    ot(Sn(Pt + ci * ce));
                  else if (pi) {
                    if (
                      ((Vt =
                        !H && ce > ke && _e + 1 > te && te + 1 >= Ci(A, M)),
                      S)
                    )
                      if (!H && (lt || Vt)) {
                        var tt = ki(f, !0),
                          it = te - ne;
                        Cl(
                          f,
                          he,
                          tt.top + (M === Xe ? it : 0) + Ge,
                          tt.left + (M === Xe ? 0 : it) + Ge
                        );
                      } else Cl(f, Ce);
                    Kr(lt || Vt ? st : Bt),
                      (B && ce < 1 && lt) ||
                        ot(Pt + (ce === 1 && !Vt ? ci : 0));
                  }
                }
                g && !be.tween && !dt && !ls && Lt.restart(!0),
                  a &&
                    (Ee || (x && ce && (ce < 1 || !ho))) &&
                    Yn(a.targets).forEach(function (ar) {
                      return ar.classList[lt || x ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !R && !H && o(E),
                  pi && !dt
                    ? (R &&
                        (gi &&
                          (me === "complete"
                            ? n.pause().totalProgress(1)
                            : me === "reset"
                            ? n.restart(!0).pause()
                            : me === "restart"
                            ? n.restart(!0)
                            : n[me]()),
                        o && o(E)),
                      (Ee || !ho) &&
                        (u && Ee && go(E, u),
                        C[Se] && go(E, C[Se]),
                        x && (ce === 1 ? E.kill(!1, 1) : (C[Se] = 0)),
                        Ee || ((Se = ce === 1 ? 1 : 3), C[Se] && go(E, C[Se]))),
                      O &&
                        !lt &&
                        Math.abs(E.getVelocity()) > (Tn(O) ? O : 2500) &&
                        (mn(E.callbackAnimation),
                        U
                          ? U.progress(1)
                          : mn(n, me === "reverse" ? 1 : !ce, 1)))
                    : R && o && !dt && o(E);
              }
              if (W) {
                var ut = P ? (te / P.duration()) * (P._caScrollDist || 0) : te;
                Mr(ut + (z._isFlipped ? 1 : 0)), W(ut);
              }
              fi && fi((-te / P.duration()) * (P._caScrollDist || 0));
            }
          }),
          (E.enable = function (H, ee) {
            E.enabled ||
              ((E.enabled = !0),
              Qe(A, "resize", xn),
              b || Qe(A, "scroll", Ir),
              F && Qe(r, "refreshInit", F),
              H !== !1 && ((E.progress = ue = 0), (Le = Ve = X = de())),
              ee !== !1 && E.refresh());
          }),
          (E.getTween = function (H) {
            return H && be ? be.tween : U;
          }),
          (E.setPositions = function (H, ee, K, te) {
            if (P) {
              var Ke = P.scrollTrigger,
                ce = P.duration(),
                ke = Ke.end - Ke.start;
              (H = Ke.start + (ke * H) / ce), (ee = Ke.start + (ke * ee) / ce);
            }
            E.refresh(
              !1,
              !1,
              {
                start: gl(H, K && !!E._startClamp),
                end: gl(ee, K && !!E._endClamp),
              },
              te
            ),
              E.update();
          }),
          (E.adjustPinSpacing = function (H) {
            if (Oe && H) {
              var ee = Oe.indexOf(M.d) + 1;
              (Oe[ee] = parseFloat(Oe[ee]) + H + Ge),
                (Oe[1] = parseFloat(Oe[1]) + H + Ge),
                Kr(Oe);
            }
          }),
          (E.disable = function (H, ee) {
            if (
              E.enabled &&
              (H !== !1 && E.revert(!0, !0),
              (E.enabled = E.isActive = !1),
              ee || (U && U.pause()),
              ($e = 0),
              xe && (xe.uncache = 1),
              F && Ze(r, "refreshInit", F),
              Lt && (Lt.pause(), be.tween && be.tween.kill() && (be.tween = 0)),
              !b)
            ) {
              for (var K = se.length; K--; )
                if (se[K].scroller === A && se[K] !== E) return;
              Ze(A, "resize", xn), b || Ze(A, "scroll", Ir);
            }
          }),
          (E.kill = function (H, ee) {
            E.disable(H, ee), U && !ee && U.kill(), l && delete ta[l];
            var K = se.indexOf(E);
            K >= 0 && se.splice(K, 1),
              K === Tt && As > 0 && Tt--,
              (K = 0),
              se.forEach(function (te) {
                return te.scroller === E.scroller && (K = 1);
              }),
              K || xt || (E.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                H && n.revert({ kill: !1 }),
                ee || n.kill()),
              qe &&
                [qe, He, z, Ye].forEach(function (te) {
                  return te.parentNode && te.parentNode.removeChild(te);
                }),
              Nn === E && (Nn = 0),
              f &&
                (xe && (xe.uncache = 1),
                (K = 0),
                se.forEach(function (te) {
                  return te.pin === f && K++;
                }),
                K || (xe.spacer = 0)),
              i.onKill && i.onKill(E);
          }),
          se.push(E),
          E.enable(!1, !1),
          at && at(E),
          n && n.add && !fe)
        ) {
          var pe = E.update;
          (E.update = function () {
            (E.update = pe), le.cache++, ne || _e || E.refresh();
          }),
            G.delayedCall(0.01, E.update),
            (fe = 0.01),
            (ne = _e = 0);
        } else E.refresh();
        f && Uf();
      }),
      (r.register = function (i) {
        return (
          Fr ||
            ((G = i || xc()), Tc() && window.document && r.enable(), (Fr = bn)),
          Fr
        );
      }),
      (r.defaults = function (i) {
        if (i) for (var n in i) fs[n] = i[n];
        return fs;
      }),
      (r.disable = function (i, n) {
        (bn = 0),
          se.forEach(function (o) {
            return o[n ? "kill" : "disable"](i);
          }),
          Ze(ae, "wheel", Ir),
          Ze(we, "scroll", Ir),
          clearInterval(as),
          Ze(we, "touchcancel", bi),
          Ze(he, "touchstart", bi),
          cs(Ze, we, "pointerdown,touchstart,mousedown", vl),
          cs(Ze, we, "pointerup,touchend,mouseup", _l),
          qs.kill(),
          us(Ze);
        for (var s = 0; s < le.length; s += 3)
          ds(Ze, le[s], le[s + 1]), ds(Ze, le[s], le[s + 2]);
      }),
      (r.enable = function () {
        if (
          ((ae = window),
          (we = document),
          (Gt = we.documentElement),
          (he = we.body),
          G &&
            ((Yn = G.utils.toArray),
            (Mn = G.utils.clamp),
            (Jo = G.core.context || bi),
            (po = G.core.suppressOverwrites || bi),
            (Ma = ae.history.scrollRestoration || "auto"),
            (ia = ae.pageYOffset || 0),
            G.core.globals("ScrollTrigger", r),
            he))
        ) {
          (bn = 1),
            (Ur = document.createElement("div")),
            (Ur.style.height = "100vh"),
            (Ur.style.position = "absolute"),
            kc(),
            Hf(),
            Re.register(G),
            (r.isTouch = Re.isTouch),
            (Hi =
              Re.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Qo = Re.isTouch === 1),
            Qe(ae, "wheel", Ir),
            (Oa = [ae, we, Gt, he]),
            G.matchMedia &&
              ((r.matchMedia = function (u) {
                var c = G.matchMedia(),
                  d;
                for (d in u) c.add(d, u[d]);
                return c;
              }),
              G.addEventListener("matchMediaInit", function () {
                return za();
              }),
              G.addEventListener("matchMediaRevert", function () {
                return Mc();
              }),
              G.addEventListener("matchMedia", function () {
                gr(0, 1), Pr("matchMedia");
              }),
              G.matchMedia().add("(orientation: portrait)", function () {
                return vo(), vo;
              })),
            vo(),
            Qe(we, "scroll", Ir);
          var i = he.hasAttribute("style"),
            n = he.style,
            s = n.borderTopStyle,
            o = G.core.Animation.prototype,
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
              a = ki(he),
              Xe.m = Math.round(a.top + Xe.sc()) || 0,
              Et.m = Math.round(a.left + Et.sc()) || 0,
              s ? (n.borderTopStyle = s) : n.removeProperty("border-top-style"),
              i || (he.setAttribute("style", ""), he.removeAttribute("style")),
              as = setInterval(bl, 250),
              G.delayedCall(0.5, function () {
                return (ls = 0);
              }),
              Qe(we, "touchcancel", bi),
              Qe(he, "touchstart", bi),
              cs(Qe, we, "pointerdown,touchstart,mousedown", vl),
              cs(Qe, we, "pointerup,touchend,mouseup", _l),
              Zo = G.utils.checkPrefix("transform"),
              Ps.push(Zo),
              Fr = ft(),
              qs = G.delayedCall(0.2, gr).pause(),
              Vr = [
                we,
                "visibilitychange",
                function () {
                  var u = ae.innerWidth,
                    c = ae.innerHeight;
                  we.hidden
                    ? ((pl = u), (hl = c))
                    : (pl !== u || hl !== c) && xn();
                },
                we,
                "DOMContentLoaded",
                gr,
                ae,
                "load",
                gr,
                ae,
                "resize",
                xn,
              ],
              us(Qe),
              se.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < le.length;
            l += 3
          )
            ds(Ze, le[l], le[l + 1]), ds(Ze, le[l], le[l + 2]);
        }
      }),
      (r.config = function (i) {
        "limitCallbacks" in i && (ho = !!i.limitCallbacks);
        var n = i.syncInterval;
        (n && clearInterval(as)) || ((as = n) && setInterval(bl, n)),
          "ignoreMobileResize" in i &&
            (Qo = r.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (us(Ze) || us(Qe, i.autoRefreshEvents || "none"),
            (wc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (r.scrollerProxy = function (i, n) {
        var s = Ot(i),
          o = le.indexOf(s),
          a = Er(s);
        ~o && le.splice(o, a ? 6 : 2),
          n && (a ? Ai.unshift(ae, n, he, n, Gt, n) : Ai.unshift(s, n));
      }),
      (r.clearMatchMedia = function (i) {
        se.forEach(function (n) {
          return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
        });
      }),
      (r.isInViewport = function (i, n, s) {
        var o = (Ht(i) ? Ot(i) : i).getBoundingClientRect(),
          a = o[s ? br : Sr] * n || 0;
        return s
          ? o.right - a > 0 && o.left + a < ae.innerWidth
          : o.bottom - a > 0 && o.top + a < ae.innerHeight;
      }),
      (r.positionInViewport = function (i, n, s) {
        Ht(i) && (i = Ot(i));
        var o = i.getBoundingClientRect(),
          a = o[s ? br : Sr],
          l =
            n == null
              ? a / 2
              : n in Ws
              ? Ws[n] * a
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
          var n = Ar.killAll || [];
          (Ar = {}),
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
    ? Yn(r).forEach(function (e) {
        if (e && e.style) {
          var t = qt.indexOf(e);
          t >= 0 && qt.splice(t, 5),
            qt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              G.core.getCache(e),
              Jo()
            );
        }
      })
    : qt;
};
Z.revert = function (r, e) {
  return za(!r, e);
};
Z.create = function (r, e) {
  return new Z(r, e);
};
Z.refresh = function (r) {
  return r ? xn(!0) : (Fr || Z.register()) && gr(!0);
};
Z.update = function (r) {
  return ++le.cache && Ri(r === !0 ? 2 : 0);
};
Z.clearScrollMemory = Dc;
Z.maxScroll = function (r, e) {
  return Ci(r, e ? Et : Xe);
};
Z.getScrollFunc = function (r, e) {
  return tr(Ot(r), e ? Et : Xe);
};
Z.getById = function (r) {
  return ta[r];
};
Z.getAll = function () {
  return se.filter(function (r) {
    return r.vars.id !== "ScrollSmoother";
  });
};
Z.isScrolling = function () {
  return !!si;
};
Z.snapDirectional = Na;
Z.addEventListener = function (r, e) {
  var t = Ar[r] || (Ar[r] = []);
  ~t.indexOf(e) || t.push(e);
};
Z.removeEventListener = function (r, e) {
  var t = Ar[r],
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
        m = [],
        f = G.delayedCall(n, function () {
          c(d, m), (d = []), (m = []);
        }).pause();
      return function (h) {
        d.length || f.restart(!0),
          d.push(h.trigger),
          m.push(h),
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
      Qe(Z, "refresh", function () {
        return (s = e.batchMax());
      })),
    Yn(r).forEach(function (l) {
      var u = {};
      for (a in i) u[a] = i[a];
      (u.trigger = l), t.push(Z.create(u));
    }),
    t
  );
};
var Al = function (e, t, i, n) {
    return (
      t > n ? e(n) : t < 0 && e(0),
      i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  },
  yo = function r(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Re.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Gt && r(he, t);
  },
  gs = { auto: 1, scroll: 1 },
  ep = function (e) {
    var t = e.event,
      i = e.target,
      n = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || G.core.getCache(s),
      a = ft(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== he &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(gs[(l = ti(s)).overflowY] || gs[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !Er(s) &&
        (gs[(l = ti(s)).overflowY] || gs[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Rc = function (e, t, i, n) {
    return Re.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && ep),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return i && Qe(we, Re.eventTypes[0], Ll, !1, !0);
      },
      onDisable: function () {
        return Ze(we, Re.eventTypes[0], Ll, !0);
      },
    });
  },
  tp = /(input|label|select|textarea)/i,
  Pl,
  Ll = function (e) {
    var t = tp.test(e.target.tagName);
    (t || Pl) && ((e._gsapAllow = !0), (Pl = t));
  },
  ip = function (e) {
    pr(e) || (e = {}),
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
      u = Ot(e.target) || Gt,
      c = G.core.globals().ScrollSmoother,
      d = c && c.get(),
      m =
        Hi &&
        ((e.content && Ot(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      f = tr(u, Xe),
      h = tr(u, Et),
      p = 1,
      v =
        (Re.isTouch && ae.visualViewport
          ? ae.visualViewport.scale * ae.visualViewport.width
          : ae.outerWidth) / ae.innerWidth,
      _ = 0,
      y = mt(n)
        ? function () {
            return n(a);
          }
        : function () {
            return n || 2.8;
          },
      x,
      g,
      S = Rc(u, e.type, !0, s),
      T = function () {
        return (g = !1);
      },
      P = bi,
      O = bi,
      k = function () {
        (l = Ci(u, Xe)),
          (O = Mn(Hi ? 1 : 0, l)),
          i && (P = Mn(0, Ci(u, Et))),
          (x = Tr);
      },
      M = function () {
        (m._gsap.y = Sn(parseFloat(m._gsap.y) + f.offset) + "px"),
          (m.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(m._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0);
      },
      R = function () {
        if (g) {
          requestAnimationFrame(T);
          var D = Sn(a.deltaY / 2),
            I = O(f.v - D);
          if (m && I !== f.v + f.offset) {
            f.offset = I - f.v;
            var E = Sn((parseFloat(m && m._gsap.y) || 0) - f.offset);
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              E +
              ", 0, 1)"),
              (m._gsap.y = E + "px"),
              (f.cacheID = le.cache),
              Ri();
          }
          return !0;
        }
        f.offset && M(), (g = !0);
      },
      A,
      N,
      b,
      w,
      C = function () {
        k(),
          A.isActive() &&
            A.vars.scrollY > l &&
            (f() > l ? A.progress(1) && f(l) : A.resetTo("scrollY", l));
      };
    return (
      m && G.set(m, { y: "+=0" }),
      (e.ignoreCheck = function (L) {
        return (
          (Hi && L.type === "touchmove" && R()) ||
          (p > 1.05 && L.type !== "touchstart") ||
          a.isGesturing ||
          (L.touches && L.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        g = !1;
        var L = p;
        (p = Sn(((ae.visualViewport && ae.visualViewport.scale) || 1) / v)),
          A.pause(),
          L !== p && yo(u, p > 1.01 ? !0 : i ? !1 : "x"),
          (N = h()),
          (b = f()),
          k(),
          (x = Tr);
      }),
      (e.onRelease = e.onGestureStart =
        function (L, D) {
          if ((f.offset && M(), !D)) w.restart(!0);
          else {
            le.cache++;
            var I = y(),
              E,
              F;
            i &&
              ((E = h()),
              (F = E + (I * 0.05 * -L.velocityX) / 0.227),
              (I *= Al(h, E, F, Ci(u, Et))),
              (A.vars.scrollX = P(F))),
              (E = f()),
              (F = E + (I * 0.05 * -L.velocityY) / 0.227),
              (I *= Al(f, E, F, Ci(u, Xe))),
              (A.vars.scrollY = O(F)),
              A.invalidate().duration(I).play(0.01),
              ((Hi && A.vars.scrollY >= l) || E >= l - 1) &&
                G.to({}, { onUpdate: C, duration: I });
          }
          o && o(L);
        }),
      (e.onWheel = function () {
        A._ts && A.pause(), ft() - _ > 1e3 && ((x = 0), (_ = ft()));
      }),
      (e.onChange = function (L, D, I, E, F) {
        if (
          (Tr !== x && k(),
          D && i && h(P(E[2] === D ? N + (L.startX - L.x) : h() + D - E[1])),
          I)
        ) {
          f.offset && M();
          var q = F[2] === I,
            Q = q ? b + L.startY - L.y : f() + I - F[1],
            X = O(Q);
          q && Q !== X && (b += X - Q), f(X);
        }
        (I || D) && Ri();
      }),
      (e.onEnable = function () {
        yo(u, i ? !1 : "x"),
          Z.addEventListener("refresh", C),
          Qe(ae, "resize", C),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = h.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        yo(u, !0),
          Ze(ae, "resize", C),
          Z.removeEventListener("refresh", C),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Re(e)),
      (a.iOS = Hi),
      Hi && !f() && f(1),
      Hi && G.ticker.add(bi),
      (w = a._dc),
      (A = G.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Ic(f, f(), function () {
            return A.pause();
          }),
        },
        onUpdate: Ri,
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
  if (typeof r > "u") return St;
  if (r === !0 && St) return St.enable();
  if (r === !1) {
    St && St.kill(), (St = r);
    return;
  }
  var e = r instanceof Re ? r : ip(r);
  return St && St.target === e.target && St.kill(), Er(e.target) && (St = e), e;
};
Z.core = {
  _getVelocityProp: Ko,
  _inputObserver: Rc,
  _scrollers: le,
  _proxies: Ai,
  bridge: {
    ss: function () {
      si || Pr("scrollStart"), (si = ft());
    },
    ref: function () {
      return dt;
    },
  },
};
xc() && G.registerPlugin(Z);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let gn,
  Rr,
  na,
  rp = () => na || un.register(window.gsap),
  Ol = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  Gs = (r) =>
    typeof r == "string"
      ? Gs(document.querySelectorAll(r))
      : "length" in r
      ? Array.from(r)
      : [r],
  Ml = (r) => Gs(r).filter((e) => e instanceof HTMLElement),
  sa = [],
  wo = function () {},
  np = /\s+/g,
  Dl = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  kl = { left: 0, top: 0, width: 0, height: 0 },
  Il = (r, e) => {
    if (e) {
      let t = new Set(r.join("").match(e) || sa),
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
  Rl = (r) =>
    window.getComputedStyle(r).display === "inline" &&
    (r.style.display = "inline-block"),
  Nr = (r, e, t) =>
    e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
  oa = (r, e, t) => {
    let i = e[r + "sClass"] || "",
      { tag: n = "div", aria: s = "auto", propIndex: o = !1 } = e,
      a = r === "line" ? "block" : "inline-block",
      l = i.indexOf("++") > -1,
      u = (c) => {
        let d = document.createElement(n),
          m = t.length + 1;
        return (
          i && (d.className = i + (l ? " " + i + m : "")),
          o && d.style.setProperty("--" + r, m + ""),
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
  sp = (r, e, t, i) => {
    let n = oa("line", t, i),
      s = window.getComputedStyle(r).textAlign || "left";
    return (o, a) => {
      let l = n("");
      for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
        l.appendChild(e[o]);
      l.normalize();
    };
  },
  Nc = (r, e, t, i, n, s, o, a, l, u) => {
    var c;
    let d = Array.from(r.childNodes),
      m = 0,
      { wordDelimiter: f, reduceWhiteSpace: h = !0, prepareText: p } = e,
      v = r.getBoundingClientRect(),
      _ = v,
      y = !h && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
      x = 0,
      g = t.collection,
      S,
      T,
      P,
      O,
      k,
      M,
      R,
      A,
      N,
      b,
      w,
      C,
      L,
      D,
      I,
      E,
      F,
      q;
    for (
      typeof f == "object"
        ? ((P = f.delimiter || f), (T = f.replaceWith || ""))
        : (T = f === "" ? "" : f || " "),
        S = T !== " ";
      m < d.length;
      m++
    )
      if (((O = d[m]), O.nodeType === 3)) {
        for (
          I = O.textContent || "",
            h
              ? (I = I.replace(np, " "))
              : y &&
                (I = I.replace(
                  /\n/g,
                  T +
                    `
`
                )),
            p && (I = p(I, r)),
            O.textContent = I,
            k = T || P ? I.split(P || T) : I.match(a) || sa,
            F = k[k.length - 1],
            A = S ? F.slice(-1) === " " : !F,
            F || k.pop(),
            _ = v,
            R = S ? k[0].charAt(0) === " " : !k[0],
            R && Nr(" ", r, O),
            k[0] || k.shift(),
            Il(k, l),
            (s && u) || (O.textContent = ""),
            N = 1;
          N <= k.length;
          N++
        )
          if (
            ((E = k[N - 1]),
            !h &&
              y &&
              E.charAt(0) ===
                `
` &&
              ((c = O.previousSibling) == null || c.remove(),
              Nr(document.createElement("br"), r, O),
              (E = E.slice(1))),
            !h && E === "")
          )
            Nr(T, r, O);
          else if (E === " ") r.insertBefore(document.createTextNode(" "), O);
          else {
            if (
              (S && E.charAt(0) === " " && Nr(" ", r, O),
              x && N === 1 && !R && g.indexOf(x.parentNode) > -1
                ? ((M = g[g.length - 1]),
                  M.appendChild(document.createTextNode(i ? "" : E)))
                : ((M = t(i ? "" : E)),
                  Nr(M, r, O),
                  x && N === 1 && !R && M.insertBefore(x, M.firstChild)),
              i)
            )
              for (
                w = Ol
                  ? Il(
                      [...Ol.segment(E)].map((Q) => Q.segment),
                      l
                    )
                  : E.match(a) || sa,
                  q = 0;
                q < w.length;
                q++
              )
                M.appendChild(
                  w[q] === " " ? document.createTextNode(" ") : i(w[q])
                );
            if (s && u) {
              if (
                ((I = O.textContent = I.substring(E.length + 1, I.length)),
                (b = M.getBoundingClientRect()),
                b.top > _.top && b.left <= _.left)
              ) {
                for (C = r.cloneNode(), L = r.childNodes[0]; L && L !== M; )
                  (D = L), (L = L.nextSibling), C.appendChild(D);
                r.parentNode.insertBefore(C, r), n && Rl(C);
              }
              _ = b;
            }
            (N < k.length || A) &&
              Nr(
                N >= k.length ? " " : S && E.slice(-1) === " " ? " " + T : T,
                r,
                O
              );
          }
        r.removeChild(O), (x = 0);
      } else
        O.nodeType === 1 &&
          (o && o.indexOf(O) > -1
            ? (g.indexOf(O.previousSibling) > -1 &&
                g[g.length - 1].appendChild(O),
              (x = O))
            : (Nc(O, e, t, i, n, s, o, a, l, !0), (x = 0)),
          n && Rl(O));
  };
const zc = class Bc {
  constructor(e, t) {
    (this.isSplit = !1),
      rp(),
      (this.elements = Ml(e)),
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
      wo(this),
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
      m = t.indexOf("words") > -1,
      f = d && !m && !c,
      h = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
      p = h ? new RegExp(h.source + "|" + Dl.source, "gu") : Dl,
      v = !!e.ignore && Ml(e.ignore),
      { orig: _, animTime: y, obs: x } = this._data,
      g;
    return (
      (d || m || c) &&
        (this.elements.forEach((S, T) => {
          (_[T] = {
            element: S,
            html: S.innerHTML,
            ariaL: S.getAttribute("aria-label"),
            ariaH: S.getAttribute("aria-hidden"),
          }),
            i === "auto"
              ? S.setAttribute("aria-label", (S.textContent || "").trim())
              : i === "hidden" && S.setAttribute("aria-hidden", "true");
          let P = [],
            O = [],
            k = [],
            M = d ? oa("char", e, P) : null,
            R = oa("word", e, O),
            A,
            N,
            b,
            w;
          if ((Nc(S, e, R, M, f, n && (c || f), v, p, h, !1), c)) {
            let C = Gs(S.childNodes),
              L = sp(S, C, e, k),
              D,
              I = [],
              E = 0,
              F = C.map((Q) =>
                Q.nodeType === 1 ? Q.getBoundingClientRect() : kl
              ),
              q = kl;
            for (A = 0; A < C.length; A++)
              (D = C[A]),
                D.nodeType === 1 &&
                  (D.nodeName === "BR"
                    ? (I.push(D), L(E, A + 1), (E = A + 1), (q = F[E]))
                    : (A &&
                        F[A].top > q.top &&
                        F[A].left <= q.left &&
                        (L(E, A), (E = A)),
                      (q = F[A])));
            E < A && L(E, A),
              I.forEach((Q) => {
                var X;
                return (X = Q.parentNode) == null ? void 0 : X.removeChild(Q);
              });
          }
          if (!m) {
            for (A = 0; A < O.length; A++)
              if (
                ((N = O[A]),
                d || !N.nextSibling || N.nextSibling.nodeType !== 3)
              )
                if (s && !c) {
                  for (
                    b = document.createElement("span"),
                      b.style.whiteSpace = "nowrap";
                    N.firstChild;

                  )
                    b.appendChild(N.firstChild);
                  N.replaceWith(b);
                } else N.replaceWith(...N.childNodes);
              else
                (w = N.nextSibling),
                  w &&
                    w.nodeType === 3 &&
                    ((w.textContent =
                      (N.textContent || "") + (w.textContent || "")),
                    N.remove());
            (O.length = 0), S.normalize();
          }
          this.lines.push(...k), this.words.push(...O), this.chars.push(...P);
        }),
        u &&
          this[u] &&
          this.masks.push(
            ...this[u].map((S) => {
              let T = S.cloneNode();
              return (
                S.replaceWith(T),
                T.appendChild(S),
                S.className &&
                  (T.className = S.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (T.style.overflow = "clip"),
                T
              );
            })
          )),
      (this.isSplit = !0),
      Rr && (a ? Rr.addEventListener("loadingdone", this._split) : Rr.status),
      (g = o && o(this)) &&
        g.totalTime &&
        (this._data.anim = y ? g.totalTime(y) : g),
      c &&
        a &&
        this.elements.forEach((S, T) => {
          (_[T].width = S.offsetWidth), x && x.observe(S);
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
      Rr?.removeEventListener("loadingdone", this._split),
      n && ((this._data.animTime = n.totalTime()), n.revert()),
      (t = (e = this.vars).onRevert) == null || t.call(e, this),
      this
    );
  }
  static create(e, t) {
    return new Bc(e, t);
  }
  static register(e) {
    (gn = gn || e || window.gsap),
      gn && ((Gs = gn.utils.toArray), (wo = gn.core.context || wo)),
      !na && window.innerWidth > 0 && ((Rr = document.fonts), (na = !0));
  }
};
zc.version = "3.13.0";
let un = zc;
$.registerPlugin(Z, un);
const op = () => {
    document.querySelectorAll("[data-highlight-text]").forEach((e) => {
      const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
        i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
        n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
        s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
      new un(e, {
        type: "words, chars",
        onSplit(o) {
          const a = $.context(() => {
            $.timeline({
              scrollTrigger: { scrub: !0, trigger: e, start: t, end: i },
            }).from(o.chars, { autoAlpha: n, stagger: s, ease: "linear" });
          });
          e._gsapContext = a;
        },
      });
    });
  },
  Fi = () => {
    op();
  },
  ap = () => {
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
      function d(h) {
        c && c.kill();
        const p = t[h].querySelector('[data-tabs="item-progress"]');
        p &&
          ($.set(p, { scaleX: 0, transformOrigin: "left center" }),
          (c = $.to(p, {
            scaleX: 1,
            duration: s / 1e3,
            ease: "power1.inOut",
            onComplete: () => {
              if (!u) {
                const v = (h + 1) % t.length;
                m(v);
              }
            },
          })));
      }
      function m(h) {
        if (u || t[h] === o) return;
        (u = !0), c && c.kill();
        const p = o,
          v = a,
          _ = p?.querySelector('[data-tabs="item-progress"]'),
          y = t[h],
          x = i[h],
          g = y.querySelector('[data-tabs="item-progress"]'),
          S = $.timeline({
            defaults: { duration: 0.65, ease: "power3" },
            onComplete: () => {
              (o = y), (a = x), (l = h), (u = !1), n && d(h);
            },
          });
        p &&
          (p.classList.remove("active"),
          p.setAttribute("aria-selected", "false"),
          v?.classList.remove("active"),
          S.set(_, { transformOrigin: "right center" })
            .to(_, { scaleX: 0, duration: 0.3 }, 0)
            .to(v, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
          y.classList.add("active"),
          y.setAttribute("aria-selected", "true"),
          x.classList.add("active"),
          S.fromTo(
            x,
            { autoAlpha: 0, yPercent: 5, scale: 0.99 },
            { autoAlpha: 1, yPercent: 0, scale: 1 },
            0.3
          ).set(g, { scaleX: 0, transformOrigin: "left center" }, 0);
      }
      if (
        (t.forEach((h, p) => {
          h.setAttribute("tabindex", p === 0 ? "0" : "-1"),
            h.setAttribute("role", "tab"),
            h.setAttribute("aria-selected", p === 0 ? "true" : "false"),
            h.setAttribute("id", `tab-${p}`),
            i[p] &&
              (i[p].setAttribute("role", "tabpanel"),
              i[p].setAttribute("aria-labelledby", `tab-${p}`)),
            h.addEventListener("keydown", (v) => {
              let _;
              switch (v.key) {
                case "ArrowRight":
                  v.preventDefault(), (_ = (p + 1) % t.length);
                  break;
                case "ArrowLeft":
                  v.preventDefault(), (_ = (p - 1 + t.length) % t.length);
                  break;
                case "Home":
                  v.preventDefault(), (_ = 0);
                  break;
                case "End":
                  v.preventDefault(), (_ = t.length - 1);
                  break;
                default:
                  return;
              }
              t.forEach((y, x) => {
                y.setAttribute("tabindex", x === _ ? "0" : "-1");
              }),
                t[_].focus(),
                m(_);
            }),
            h.addEventListener("click", () => {
              h !== o &&
                (t.forEach((v, _) => {
                  v.setAttribute("tabindex", _ === p ? "0" : "-1");
                }),
                m(p));
            });
        }),
        e.setAttribute("role", "tablist"),
        e.setAttribute("aria-label", "Hero content tabs"),
        "ontouchstart" in window || navigator.maxTouchPoints > 0)
      ) {
        let h = 0,
          p = 0,
          v = 0,
          _ = 0;
        const y = 50,
          x = 100;
        e.addEventListener(
          "touchstart",
          (g) => {
            (h = g.touches[0].clientX), (p = g.touches[0].clientY);
          },
          { passive: !0 }
        ),
          e.addEventListener(
            "touchend",
            (g) => {
              (v = g.changedTouches[0].clientX),
                (_ = g.changedTouches[0].clientY);
              const S = v - h,
                T = Math.abs(_ - p);
              if (Math.abs(S) > y && T < x)
                if (S > 0) {
                  const P = (l - 1 + t.length) % t.length;
                  m(P);
                } else {
                  const P = (l + 1) % t.length;
                  m(P);
                }
            },
            { passive: !0 }
          );
      }
      m(0);
    });
  },
  lp = () => {
    ap();
  };
$.registerPlugin(Z);
const up = () => {
    const r = document.querySelector(".home_hero_tab_component"),
      e = r.querySelector(".home_hero_tab_visual_wrap");
    $.to(e, {
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
  cp = () => {
    up();
  };
$.registerPlugin(Z, un);
const dp = () => {
    const r = document.querySelectorAll('[form-dropdown="component"]'),
      e = "inactive",
      t = "active",
      i = "aria-expanded",
      n = "aria-hidden";
    let s = !1,
      o = null;
    const a = "#f7f7f7",
      l = "#4aa5fe",
      u = (h) => {
        if (!s || !o) return;
        if (!o.contains(h.target)) {
          const v = o.querySelector('[form-dropdown="trigger"]'),
            _ = o.querySelector('[form-dropdown="content"]'),
            y = o.querySelector('[form-dropdown="trigger-icon"]'),
            x = o.querySelectorAll('[form-dropdown="answer"]');
          d(v, _, y), f(v, _, y, x), (s = !1), (o = null);
        }
      };
    document.addEventListener("click", u);
    const c = (h, p, v, _) => {
        h.classList.remove(e),
          h.classList.add(t),
          h.setAttribute(i, "true"),
          p.setAttribute(n, "false"),
          v && v.classList.add(t);
      },
      d = (h, p, v, _) => {
        h.classList.remove(t),
          h.classList.add(e),
          h.setAttribute(i, "false"),
          p.setAttribute(n, "true"),
          v && v.classList.remove(t);
      },
      m = (h, p, v, _) => {
        $.to(v, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
          $.fromTo(
            p,
            { autoAlpha: 0, pointerEvents: "none", y: 40 },
            {
              autoAlpha: 1,
              duration: 0.4,
              ease: "expo.out",
              y: 0,
              pointerEvents: "auto",
            }
          ),
          $.fromTo(
            _,
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
      f = (h, p, v, _) => {
        $.to(v, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
          $.to(p, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
          $.to(_, {
            autoAlpha: 0,
            duration: 0.01,
            ease: "expo.out",
            stagger: 0.05,
            pointerEvents: "none",
          });
      };
    r.forEach((h) => {
      const p = h.querySelector('[form-dropdown="trigger"]'),
        v = h.querySelector('[form-dropdown="content"]'),
        _ = h.querySelector('[form-dropdown="trigger-icon"]'),
        y = h.querySelectorAll('[form-dropdown="answer"]'),
        x = () => {
          d(p, v, _), f(p, v, _, y), (s = !1), (o = null);
        };
      p.addEventListener("click", () => {
        const g = p.classList.contains(t);
        if (s && o && o !== h) {
          const S = o.querySelector('[form-dropdown="trigger"]'),
            T = o.querySelector('[form-dropdown="content"]'),
            P = o.querySelector('[form-dropdown="trigger-icon"]'),
            O = o.querySelectorAll('[form-dropdown="answer"]');
          d(S, T, P), f(S, T, P, O);
        }
        g ? x() : (c(p, v, _), m(p, v, _, y), (s = !0), (o = h));
      }),
        y.forEach((g) => {
          g.addEventListener("click", () => {
            if (o === h) {
              const S = g.querySelector("p[answer-value]"),
                T = p.querySelector('[form-dropdown="value"]');
              if (S && T) {
                const P =
                    S.getAttribute("answer-value") || S.textContent.trim(),
                  O = g.getAttribute("calc-value");
                if (((T.textContent = P), O)) {
                  T.setAttribute("final-value", O);
                  const k = T.parentElement;
                  k && k.classList.add("is--active"),
                    p.classList.add("is--active"),
                    _ && _.classList.add("is--active"),
                    h.classList.add("is--active"),
                    T.classList.add("is--active");
                }
              }
              x();
            }
          });
        });
    });
  },
  fp = () => {
    dp();
  };
var Rt = "top",
  li = "bottom",
  ui = "right",
  Nt = "left",
  Ba = "auto",
  Jn = [Rt, li, ui, Nt],
  sn = "start",
  Un = "end",
  pp = "clippingParents",
  Fc = "viewport",
  vn = "popper",
  hp = "reference",
  Nl = Jn.reduce(function (r, e) {
    return r.concat([e + "-" + sn, e + "-" + Un]);
  }, []),
  Vc = [].concat(Jn, [Ba]).reduce(function (r, e) {
    return r.concat([e, e + "-" + sn, e + "-" + Un]);
  }, []),
  mp = "beforeRead",
  gp = "read",
  vp = "afterRead",
  _p = "beforeMain",
  yp = "main",
  wp = "afterMain",
  bp = "beforeWrite",
  Sp = "write",
  Tp = "afterWrite",
  xp = [mp, gp, vp, _p, yp, wp, bp, Sp, Tp];
function Oi(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
function Qt(r) {
  if (r == null) return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return r;
}
function Lr(r) {
  var e = Qt(r).Element;
  return r instanceof e || r instanceof Element;
}
function oi(r) {
  var e = Qt(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
function Fa(r) {
  if (typeof ShadowRoot > "u") return !1;
  var e = Qt(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
function Cp(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function (t) {
    var i = e.styles[t] || {},
      n = e.attributes[t] || {},
      s = e.elements[t];
    !oi(s) ||
      !Oi(s) ||
      (Object.assign(s.style, i),
      Object.keys(n).forEach(function (o) {
        var a = n[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function Ep(r) {
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
        !oi(n) ||
          !Oi(n) ||
          (Object.assign(n.style, a),
          Object.keys(s).forEach(function (l) {
            n.removeAttribute(l);
          }));
      });
    }
  );
}
const qc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cp,
  effect: Ep,
  requires: ["computeStyles"],
};
function Pi(r) {
  return r.split("-")[0];
}
var xr = Math.max,
  Xs = Math.min,
  on = Math.round;
function aa() {
  var r = navigator.userAgentData;
  return r != null && r.brands && Array.isArray(r.brands)
    ? r.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Hc() {
  return !/^((?!chrome|android).)*safari/i.test(aa());
}
function an(r, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var i = r.getBoundingClientRect(),
    n = 1,
    s = 1;
  e &&
    oi(r) &&
    ((n = (r.offsetWidth > 0 && on(i.width) / r.offsetWidth) || 1),
    (s = (r.offsetHeight > 0 && on(i.height) / r.offsetHeight) || 1));
  var o = Lr(r) ? Qt(r) : window,
    a = o.visualViewport,
    l = !Hc() && t,
    u = (i.left + (l && a ? a.offsetLeft : 0)) / n,
    c = (i.top + (l && a ? a.offsetTop : 0)) / s,
    d = i.width / n,
    m = i.height / s;
  return {
    width: d,
    height: m,
    top: c,
    right: u + d,
    bottom: c + m,
    left: u,
    x: u,
    y: c,
  };
}
function Va(r) {
  var e = an(r),
    t = r.offsetWidth,
    i = r.offsetHeight;
  return (
    Math.abs(e.width - t) <= 1 && (t = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
  );
}
function $c(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e)) return !0;
  if (t && Fa(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Bi(r) {
  return Qt(r).getComputedStyle(r);
}
function Ap(r) {
  return ["table", "td", "th"].indexOf(Oi(r)) >= 0;
}
function rr(r) {
  return ((Lr(r) ? r.ownerDocument : r.document) || window.document)
    .documentElement;
}
function to(r) {
  return Oi(r) === "html"
    ? r
    : r.assignedSlot || r.parentNode || (Fa(r) ? r.host : null) || rr(r);
}
function zl(r) {
  return !oi(r) || Bi(r).position === "fixed" ? null : r.offsetParent;
}
function Pp(r) {
  var e = /firefox/i.test(aa()),
    t = /Trident/i.test(aa());
  if (t && oi(r)) {
    var i = Bi(r);
    if (i.position === "fixed") return null;
  }
  var n = to(r);
  for (Fa(n) && (n = n.host); oi(n) && ["html", "body"].indexOf(Oi(n)) < 0; ) {
    var s = Bi(n);
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
function es(r) {
  for (var e = Qt(r), t = zl(r); t && Ap(t) && Bi(t).position === "static"; )
    t = zl(t);
  return t &&
    (Oi(t) === "html" || (Oi(t) === "body" && Bi(t).position === "static"))
    ? e
    : t || Pp(r) || e;
}
function qa(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
function zn(r, e, t) {
  return xr(r, Xs(e, t));
}
function Lp(r, e, t) {
  var i = zn(r, e, t);
  return i > t ? t : i;
}
function Wc() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Gc(r) {
  return Object.assign({}, Wc(), r);
}
function Xc(r, e) {
  return e.reduce(function (t, i) {
    return (t[i] = r), t;
  }, {});
}
var Op = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Gc(typeof e != "number" ? e : Xc(e, Jn))
  );
};
function Mp(r) {
  var e,
    t = r.state,
    i = r.name,
    n = r.options,
    s = t.elements.arrow,
    o = t.modifiersData.popperOffsets,
    a = Pi(t.placement),
    l = qa(a),
    u = [Nt, ui].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!s || !o)) {
    var d = Op(n.padding, t),
      m = Va(s),
      f = l === "y" ? Rt : Nt,
      h = l === "y" ? li : ui,
      p =
        t.rects.reference[c] + t.rects.reference[l] - o[l] - t.rects.popper[c],
      v = o[l] - t.rects.reference[l],
      _ = es(s),
      y = _ ? (l === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
      x = p / 2 - v / 2,
      g = d[f],
      S = y - m[c] - d[h],
      T = y / 2 - m[c] / 2 + x,
      P = zn(g, T, S),
      O = l;
    t.modifiersData[i] = ((e = {}), (e[O] = P), (e.centerOffset = P - T), e);
  }
}
function Dp(r) {
  var e = r.state,
    t = r.options,
    i = t.element,
    n = i === void 0 ? "[data-popper-arrow]" : i;
  n != null &&
    ((typeof n == "string" && ((n = e.elements.popper.querySelector(n)), !n)) ||
      ($c(e.elements.popper, n) && (e.elements.arrow = n)));
}
const kp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mp,
  effect: Dp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ln(r) {
  return r.split("-")[1];
}
var Ip = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rp(r, e) {
  var t = r.x,
    i = r.y,
    n = e.devicePixelRatio || 1;
  return { x: on(t * n) / n || 0, y: on(i * n) / n || 0 };
}
function Bl(r) {
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
    m = o.x,
    f = m === void 0 ? 0 : m,
    h = o.y,
    p = h === void 0 ? 0 : h,
    v = typeof c == "function" ? c({ x: f, y: p }) : { x: f, y: p };
  (f = v.x), (p = v.y);
  var _ = o.hasOwnProperty("x"),
    y = o.hasOwnProperty("y"),
    x = Nt,
    g = Rt,
    S = window;
  if (u) {
    var T = es(t),
      P = "clientHeight",
      O = "clientWidth";
    if (
      (T === Qt(t) &&
        ((T = rr(t)),
        Bi(T).position !== "static" &&
          a === "absolute" &&
          ((P = "scrollHeight"), (O = "scrollWidth"))),
      (T = T),
      n === Rt || ((n === Nt || n === ui) && s === Un))
    ) {
      g = li;
      var k = d && T === S && S.visualViewport ? S.visualViewport.height : T[P];
      (p -= k - i.height), (p *= l ? 1 : -1);
    }
    if (n === Nt || ((n === Rt || n === li) && s === Un)) {
      x = ui;
      var M = d && T === S && S.visualViewport ? S.visualViewport.width : T[O];
      (f -= M - i.width), (f *= l ? 1 : -1);
    }
  }
  var R = Object.assign({ position: a }, u && Ip),
    A = c === !0 ? Rp({ x: f, y: p }, Qt(t)) : { x: f, y: p };
  if (((f = A.x), (p = A.y), l)) {
    var N;
    return Object.assign(
      {},
      R,
      ((N = {}),
      (N[g] = y ? "0" : ""),
      (N[x] = _ ? "0" : ""),
      (N.transform =
        (S.devicePixelRatio || 1) <= 1
          ? "translate(" + f + "px, " + p + "px)"
          : "translate3d(" + f + "px, " + p + "px, 0)"),
      N)
    );
  }
  return Object.assign(
    {},
    R,
    ((e = {}),
    (e[g] = y ? p + "px" : ""),
    (e[x] = _ ? f + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function Np(r) {
  var e = r.state,
    t = r.options,
    i = t.gpuAcceleration,
    n = i === void 0 ? !0 : i,
    s = t.adaptive,
    o = s === void 0 ? !0 : s,
    a = t.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: Pi(e.placement),
      variation: ln(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: n,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      Bl(
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
        Bl(
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
const zp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Np,
  data: {},
};
var vs = { passive: !0 };
function Bp(r) {
  var e = r.state,
    t = r.instance,
    i = r.options,
    n = i.scroll,
    s = n === void 0 ? !0 : n,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = Qt(e.elements.popper),
    u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    s &&
      u.forEach(function (c) {
        c.addEventListener("scroll", t.update, vs);
      }),
    a && l.addEventListener("resize", t.update, vs),
    function () {
      s &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", t.update, vs);
        }),
        a && l.removeEventListener("resize", t.update, vs);
    }
  );
}
const Fp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Bp,
  data: {},
};
var Vp = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Os(r) {
  return r.replace(/left|right|bottom|top/g, function (e) {
    return Vp[e];
  });
}
var qp = { start: "end", end: "start" };
function Fl(r) {
  return r.replace(/start|end/g, function (e) {
    return qp[e];
  });
}
function Ha(r) {
  var e = Qt(r),
    t = e.pageXOffset,
    i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
function $a(r) {
  return an(rr(r)).left + Ha(r).scrollLeft;
}
function Hp(r, e) {
  var t = Qt(r),
    i = rr(r),
    n = t.visualViewport,
    s = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0;
  if (n) {
    (s = n.width), (o = n.height);
    var u = Hc();
    (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: s, height: o, x: a + $a(r), y: l };
}
function $p(r) {
  var e,
    t = rr(r),
    i = Ha(r),
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
    a = -i.scrollLeft + $a(r),
    l = -i.scrollTop;
  return (
    Bi(n || t).direction === "rtl" &&
      (a += xr(t.clientWidth, n ? n.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function Wa(r) {
  var e = Bi(r),
    t = e.overflow,
    i = e.overflowX,
    n = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + n + i);
}
function Yc(r) {
  return ["html", "body", "#document"].indexOf(Oi(r)) >= 0
    ? r.ownerDocument.body
    : oi(r) && Wa(r)
    ? r
    : Yc(to(r));
}
function Bn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Yc(r),
    n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
    s = Qt(i),
    o = n ? [s].concat(s.visualViewport || [], Wa(i) ? i : []) : i,
    a = e.concat(o);
  return n ? a : a.concat(Bn(to(o)));
}
function la(r) {
  return Object.assign({}, r, {
    left: r.x,
    top: r.y,
    right: r.x + r.width,
    bottom: r.y + r.height,
  });
}
function Wp(r, e) {
  var t = an(r, !1, e === "fixed");
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
function Vl(r, e, t) {
  return e === Fc ? la(Hp(r, t)) : Lr(e) ? Wp(e, t) : la($p(rr(r)));
}
function Gp(r) {
  var e = Bn(to(r)),
    t = ["absolute", "fixed"].indexOf(Bi(r).position) >= 0,
    i = t && oi(r) ? es(r) : r;
  return Lr(i)
    ? e.filter(function (n) {
        return Lr(n) && $c(n, i) && Oi(n) !== "body";
      })
    : [];
}
function Xp(r, e, t, i) {
  var n = e === "clippingParents" ? Gp(r) : [].concat(e),
    s = [].concat(n, [t]),
    o = s[0],
    a = s.reduce(function (l, u) {
      var c = Vl(r, u, i);
      return (
        (l.top = xr(c.top, l.top)),
        (l.right = Xs(c.right, l.right)),
        (l.bottom = Xs(c.bottom, l.bottom)),
        (l.left = xr(c.left, l.left)),
        l
      );
    }, Vl(r, o, i));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function jc(r) {
  var e = r.reference,
    t = r.element,
    i = r.placement,
    n = i ? Pi(i) : null,
    s = i ? ln(i) : null,
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
    case Nt:
      l = { x: e.x - t.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var u = n ? qa(n) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case sn:
        l[u] = l[u] - (e[c] / 2 - t[c] / 2);
        break;
      case Un:
        l[u] = l[u] + (e[c] / 2 - t[c] / 2);
        break;
    }
  }
  return l;
}
function Kn(r, e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.placement,
    n = i === void 0 ? r.placement : i,
    s = t.strategy,
    o = s === void 0 ? r.strategy : s,
    a = t.boundary,
    l = a === void 0 ? pp : a,
    u = t.rootBoundary,
    c = u === void 0 ? Fc : u,
    d = t.elementContext,
    m = d === void 0 ? vn : d,
    f = t.altBoundary,
    h = f === void 0 ? !1 : f,
    p = t.padding,
    v = p === void 0 ? 0 : p,
    _ = Gc(typeof v != "number" ? v : Xc(v, Jn)),
    y = m === vn ? hp : vn,
    x = r.rects.popper,
    g = r.elements[h ? y : m],
    S = Xp(Lr(g) ? g : g.contextElement || rr(r.elements.popper), l, c, o),
    T = an(r.elements.reference),
    P = jc({ reference: T, element: x, strategy: "absolute", placement: n }),
    O = la(Object.assign({}, x, P)),
    k = m === vn ? O : T,
    M = {
      top: S.top - k.top + _.top,
      bottom: k.bottom - S.bottom + _.bottom,
      left: S.left - k.left + _.left,
      right: k.right - S.right + _.right,
    },
    R = r.modifiersData.offset;
  if (m === vn && R) {
    var A = R[n];
    Object.keys(M).forEach(function (N) {
      var b = [ui, li].indexOf(N) >= 0 ? 1 : -1,
        w = [Rt, li].indexOf(N) >= 0 ? "y" : "x";
      M[N] += A[w] * b;
    });
  }
  return M;
}
function Yp(r, e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.placement,
    n = t.boundary,
    s = t.rootBoundary,
    o = t.padding,
    a = t.flipVariations,
    l = t.allowedAutoPlacements,
    u = l === void 0 ? Vc : l,
    c = ln(i),
    d = c
      ? a
        ? Nl
        : Nl.filter(function (h) {
            return ln(h) === c;
          })
      : Jn,
    m = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  m.length === 0 && (m = d);
  var f = m.reduce(function (h, p) {
    return (
      (h[p] = Kn(r, { placement: p, boundary: n, rootBoundary: s, padding: o })[
        Pi(p)
      ]),
      h
    );
  }, {});
  return Object.keys(f).sort(function (h, p) {
    return f[h] - f[p];
  });
}
function jp(r) {
  if (Pi(r) === Ba) return [];
  var e = Os(r);
  return [Fl(r), e, Fl(e)];
}
function Up(r) {
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
        m = t.altBoundary,
        f = t.flipVariations,
        h = f === void 0 ? !0 : f,
        p = t.allowedAutoPlacements,
        v = e.options.placement,
        _ = Pi(v),
        y = _ === v,
        x = l || (y || !h ? [Os(v)] : jp(v)),
        g = [v].concat(x).reduce(function (X, ie) {
          return X.concat(
            Pi(ie) === Ba
              ? Yp(e, {
                  placement: ie,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: p,
                })
              : ie
          );
        }, []),
        S = e.rects.reference,
        T = e.rects.popper,
        P = new Map(),
        O = !0,
        k = g[0],
        M = 0;
      M < g.length;
      M++
    ) {
      var R = g[M],
        A = Pi(R),
        N = ln(R) === sn,
        b = [Rt, li].indexOf(A) >= 0,
        w = b ? "width" : "height",
        C = Kn(e, {
          placement: R,
          boundary: c,
          rootBoundary: d,
          altBoundary: m,
          padding: u,
        }),
        L = b ? (N ? ui : Nt) : N ? li : Rt;
      S[w] > T[w] && (L = Os(L));
      var D = Os(L),
        I = [];
      if (
        (s && I.push(C[A] <= 0),
        a && I.push(C[L] <= 0, C[D] <= 0),
        I.every(function (X) {
          return X;
        }))
      ) {
        (k = R), (O = !1);
        break;
      }
      P.set(R, I);
    }
    if (O)
      for (
        var E = h ? 3 : 1,
          F = function (ie) {
            var ue = g.find(function (de) {
              var be = P.get(de);
              if (be)
                return be.slice(0, ie).every(function (xe) {
                  return xe;
                });
            });
            if (ue) return (k = ue), "break";
          },
          q = E;
        q > 0;
        q--
      ) {
        var Q = F(q);
        if (Q === "break") break;
      }
    e.placement !== k &&
      ((e.modifiersData[i]._skip = !0), (e.placement = k), (e.reset = !0));
  }
}
const Kp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Up,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ql(r, e, t) {
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
function Hl(r) {
  return [Rt, ui, li, Nt].some(function (e) {
    return r[e] >= 0;
  });
}
function Zp(r) {
  var e = r.state,
    t = r.name,
    i = e.rects.reference,
    n = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = Kn(e, { elementContext: "reference" }),
    a = Kn(e, { altBoundary: !0 }),
    l = ql(o, i),
    u = ql(a, n, s),
    c = Hl(l),
    d = Hl(u);
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
const Qp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Zp,
};
function Jp(r, e, t) {
  var i = Pi(r),
    n = [Nt, Rt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * n),
    [Nt, ui].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function eh(r) {
  var e = r.state,
    t = r.options,
    i = r.name,
    n = t.offset,
    s = n === void 0 ? [0, 0] : n,
    o = Vc.reduce(function (c, d) {
      return (c[d] = Jp(d, e.rects, s)), c;
    }, {}),
    a = o[e.placement],
    l = a.x,
    u = a.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += u)),
    (e.modifiersData[i] = o);
}
const th = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eh,
};
function ih(r) {
  var e = r.state,
    t = r.name;
  e.modifiersData[t] = jc({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const rh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ih,
  data: {},
};
function nh(r) {
  return r === "x" ? "y" : "x";
}
function sh(r) {
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
    m = t.tether,
    f = m === void 0 ? !0 : m,
    h = t.tetherOffset,
    p = h === void 0 ? 0 : h,
    v = Kn(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    _ = Pi(e.placement),
    y = ln(e.placement),
    x = !y,
    g = qa(_),
    S = nh(g),
    T = e.modifiersData.popperOffsets,
    P = e.rects.reference,
    O = e.rects.popper,
    k =
      typeof p == "function"
        ? p(Object.assign({}, e.rects, { placement: e.placement }))
        : p,
    M =
      typeof k == "number"
        ? { mainAxis: k, altAxis: k }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
    R = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    A = { x: 0, y: 0 };
  if (T) {
    if (s) {
      var N,
        b = g === "y" ? Rt : Nt,
        w = g === "y" ? li : ui,
        C = g === "y" ? "height" : "width",
        L = T[g],
        D = L + v[b],
        I = L - v[w],
        E = f ? -O[C] / 2 : 0,
        F = y === sn ? P[C] : O[C],
        q = y === sn ? -O[C] : -P[C],
        Q = e.elements.arrow,
        X = f && Q ? Va(Q) : { width: 0, height: 0 },
        ie = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Wc(),
        ue = ie[b],
        de = ie[w],
        be = zn(0, P[C], X[C]),
        xe = x ? P[C] / 2 - E - be - ue - M.mainAxis : F - be - ue - M.mainAxis,
        et = x
          ? -P[C] / 2 + E + be + de + M.mainAxis
          : q + be + de + M.mainAxis,
        Le = e.elements.arrow && es(e.elements.arrow),
        Ve = Le ? (g === "y" ? Le.clientTop || 0 : Le.clientLeft || 0) : 0,
        ne = (N = R?.[g]) != null ? N : 0,
        _e = L + xe - ne - Ve,
        qe = L + et - ne,
        He = zn(f ? Xs(D, _e) : D, L, f ? xr(I, qe) : I);
      (T[g] = He), (A[g] = He - L);
    }
    if (a) {
      var z,
        Ye = g === "x" ? Rt : Nt,
        At = g === "x" ? li : ui,
        je = T[S],
        fe = S === "y" ? "height" : "width",
        yt = je + v[Ye],
        st = je - v[At],
        Bt = [Rt, Nt].indexOf(_) !== -1,
        Ce = (z = R?.[S]) != null ? z : 0,
        Ft = Bt ? yt : je - P[fe] - O[fe] - Ce + M.altAxis,
        ye = Bt ? je + P[fe] + O[fe] - Ce - M.altAxis : st,
        ot = f && Bt ? Lp(Ft, je, ye) : zn(f ? Ft : yt, je, f ? ye : st);
      (T[S] = ot), (A[S] = ot - je);
    }
    e.modifiersData[i] = A;
  }
}
const oh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sh,
  requiresIfExists: ["offset"],
};
function ah(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
function lh(r) {
  return r === Qt(r) || !oi(r) ? Ha(r) : ah(r);
}
function uh(r) {
  var e = r.getBoundingClientRect(),
    t = on(e.width) / r.offsetWidth || 1,
    i = on(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
function ch(r, e, t) {
  t === void 0 && (t = !1);
  var i = oi(e),
    n = oi(e) && uh(e),
    s = rr(e),
    o = an(r, n, t),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (i || (!i && !t)) &&
      ((Oi(e) !== "body" || Wa(s)) && (a = lh(e)),
      oi(e)
        ? ((l = an(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = $a(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function dh(r) {
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
function fh(r) {
  var e = dh(r);
  return xp.reduce(function (t, i) {
    return t.concat(
      e.filter(function (n) {
        return n.phase === i;
      })
    );
  }, []);
}
function ph(r) {
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
function hh(r) {
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
var $l = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Wl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function mh(r) {
  r === void 0 && (r = {});
  var e = r,
    t = e.defaultModifiers,
    i = t === void 0 ? [] : t,
    n = e.defaultOptions,
    s = n === void 0 ? $l : n;
  return function (a, l, u) {
    u === void 0 && (u = s);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $l, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      m = !1,
      f = {
        state: c,
        setOptions: function (_) {
          var y = typeof _ == "function" ? _(c.options) : _;
          p(),
            (c.options = Object.assign({}, s, c.options, y)),
            (c.scrollParents = {
              reference: Lr(a)
                ? Bn(a)
                : a.contextElement
                ? Bn(a.contextElement)
                : [],
              popper: Bn(l),
            });
          var x = fh(hh([].concat(i, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (g) {
              return g.enabled;
            })),
            h(),
            f.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var _ = c.elements,
              y = _.reference,
              x = _.popper;
            if (Wl(y, x)) {
              (c.rects = {
                reference: ch(y, es(x), c.options.strategy === "fixed"),
                popper: Va(x),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (M) {
                  return (c.modifiersData[M.name] = Object.assign({}, M.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var S = c.orderedModifiers[g],
                  T = S.fn,
                  P = S.options,
                  O = P === void 0 ? {} : P,
                  k = S.name;
                typeof T == "function" &&
                  (c = T({ state: c, options: O, name: k, instance: f }) || c);
              }
            }
          }
        },
        update: ph(function () {
          return new Promise(function (v) {
            f.forceUpdate(), v(c);
          });
        }),
        destroy: function () {
          p(), (m = !0);
        },
      };
    if (!Wl(a, l)) return f;
    f.setOptions(u).then(function (v) {
      !m && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function h() {
      c.orderedModifiers.forEach(function (v) {
        var _ = v.name,
          y = v.options,
          x = y === void 0 ? {} : y,
          g = v.effect;
        if (typeof g == "function") {
          var S = g({ state: c, name: _, instance: f, options: x }),
            T = function () {};
          d.push(S || T);
        }
      });
    }
    function p() {
      d.forEach(function (v) {
        return v();
      }),
        (d = []);
    }
    return f;
  };
}
var gh = [Fp, rh, zp, qc, th, Kp, oh, kp, Qp],
  vh = mh({ defaultModifiers: gh }),
  _h = "tippy-box",
  Uc = "tippy-content",
  yh = "tippy-backdrop",
  Kc = "tippy-arrow",
  Zc = "tippy-svg-arrow",
  hr = { passive: !0, capture: !0 },
  Qc = function () {
    return document.body;
  };
function bo(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i ?? (Array.isArray(t) ? t[e] : t);
  }
  return r;
}
function Ga(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Jc(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
function Gl(r, e) {
  if (e === 0) return r;
  var t;
  return function (i) {
    clearTimeout(t),
      (t = setTimeout(function () {
        r(i);
      }, e));
  };
}
function wh(r) {
  return r.split(/\s+/).filter(Boolean);
}
function qr(r) {
  return [].concat(r);
}
function Xl(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
function bh(r) {
  return r.filter(function (e, t) {
    return r.indexOf(e) === t;
  });
}
function Sh(r) {
  return r.split("-")[0];
}
function Ys(r) {
  return [].slice.call(r);
}
function Yl(r) {
  return Object.keys(r).reduce(function (e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
function Fn() {
  return document.createElement("div");
}
function io(r) {
  return ["Element", "Fragment"].some(function (e) {
    return Ga(r, e);
  });
}
function Th(r) {
  return Ga(r, "NodeList");
}
function xh(r) {
  return Ga(r, "MouseEvent");
}
function Ch(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
function Eh(r) {
  return io(r)
    ? [r]
    : Th(r)
    ? Ys(r)
    : Array.isArray(r)
    ? r
    : Ys(document.querySelectorAll(r));
}
function So(r, e) {
  r.forEach(function (t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function jl(r, e) {
  r.forEach(function (t) {
    t && t.setAttribute("data-state", e);
  });
}
function Ah(r) {
  var e,
    t = qr(r),
    i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body
    ? i.ownerDocument
    : document;
}
function Ph(r, e) {
  var t = e.clientX,
    i = e.clientY;
  return r.every(function (n) {
    var s = n.popperRect,
      o = n.popperState,
      a = n.props,
      l = a.interactiveBorder,
      u = Sh(o.placement),
      c = o.modifiersData.offset;
    if (!c) return !0;
    var d = u === "bottom" ? c.top.y : 0,
      m = u === "top" ? c.bottom.y : 0,
      f = u === "right" ? c.left.x : 0,
      h = u === "left" ? c.right.x : 0,
      p = s.top - i + d > l,
      v = i - s.bottom - m > l,
      _ = s.left - t + f > l,
      y = t - s.right - h > l;
    return p || v || _ || y;
  });
}
function To(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
    r[i](n, t);
  });
}
function Ul(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t)) return !0;
    t =
      t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var Si = { isTouch: !1 },
  Kl = 0;
function Lh() {
  Si.isTouch ||
    ((Si.isTouch = !0),
    window.performance && document.addEventListener("mousemove", ed));
}
function ed() {
  var r = performance.now();
  r - Kl < 20 &&
    ((Si.isTouch = !1), document.removeEventListener("mousemove", ed)),
    (Kl = r);
}
function Oh() {
  var r = document.activeElement;
  if (Ch(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
function Mh() {
  document.addEventListener("touchstart", Lh, hr),
    window.addEventListener("blur", Oh);
}
var Dh = typeof window < "u" && typeof document < "u",
  kh = Dh ? !!window.msCrypto : !1,
  Ih = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  Rh = {
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
  mi = Object.assign(
    {
      appendTo: Qc,
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
    Ih,
    Rh
  ),
  Nh = Object.keys(mi),
  zh = function (e) {
    var t = Object.keys(e);
    t.forEach(function (i) {
      mi[i] = e[i];
    });
  };
function td(r) {
  var e = r.plugins || [],
    t = e.reduce(function (i, n) {
      var s = n.name,
        o = n.defaultValue;
      if (s) {
        var a;
        i[s] = r[s] !== void 0 ? r[s] : (a = mi[s]) != null ? a : o;
      }
      return i;
    }, {});
  return Object.assign({}, r, t);
}
function Bh(r, e) {
  var t = e ? Object.keys(td(Object.assign({}, mi, { plugins: e }))) : Nh,
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
function Zl(r, e) {
  var t = Object.assign(
    {},
    e,
    { content: Jc(e.content, [r]) },
    e.ignoreAttributes ? {} : Bh(r, e.plugins)
  );
  return (
    (t.aria = Object.assign({}, mi.aria, t.aria)),
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
var Fh = function () {
  return "innerHTML";
};
function ua(r, e) {
  r[Fh()] = e;
}
function Ql(r) {
  var e = Fn();
  return (
    r === !0
      ? (e.className = Kc)
      : ((e.className = Zc), io(r) ? e.appendChild(r) : ua(e, r)),
    e
  );
}
function Jl(r, e) {
  io(e.content)
    ? (ua(r, ""), r.appendChild(e.content))
    : typeof e.content != "function" &&
      (e.allowHTML ? ua(r, e.content) : (r.textContent = e.content));
}
function ca(r) {
  var e = r.firstElementChild,
    t = Ys(e.children);
  return {
    box: e,
    content: t.find(function (i) {
      return i.classList.contains(Uc);
    }),
    arrow: t.find(function (i) {
      return i.classList.contains(Kc) || i.classList.contains(Zc);
    }),
    backdrop: t.find(function (i) {
      return i.classList.contains(yh);
    }),
  };
}
function id(r) {
  var e = Fn(),
    t = Fn();
  (t.className = _h),
    t.setAttribute("data-state", "hidden"),
    t.setAttribute("tabindex", "-1");
  var i = Fn();
  (i.className = Uc),
    i.setAttribute("data-state", "hidden"),
    Jl(i, r.props),
    e.appendChild(t),
    t.appendChild(i),
    n(r.props, r.props);
  function n(s, o) {
    var a = ca(e),
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
        Jl(u, r.props),
      o.arrow
        ? c
          ? s.arrow !== o.arrow &&
            (l.removeChild(c), l.appendChild(Ql(o.arrow)))
          : l.appendChild(Ql(o.arrow))
        : c && l.removeChild(c);
  }
  return { popper: e, onUpdate: n };
}
id.$$tippy = !0;
var Vh = 1,
  _s = [],
  xo = [];
function qh(r, e) {
  var t = Zl(r, Object.assign({}, mi, td(Yl(e)))),
    i,
    n,
    s,
    o = !1,
    a = !1,
    l = !1,
    u = !1,
    c,
    d,
    m,
    f = [],
    h = Gl(_e, t.interactiveDebounce),
    p,
    v = Vh++,
    _ = null,
    y = bh(t.plugins),
    x = {
      isEnabled: !0,
      isVisible: !1,
      isDestroyed: !1,
      isMounted: !1,
      isShown: !1,
    },
    g = {
      id: v,
      reference: r,
      popper: Fn(),
      popperInstance: _,
      props: t,
      state: x,
      plugins: y,
      clearDelayTimeouts: Ft,
      setProps: ye,
      setContent: ot,
      show: Pt,
      hide: ci,
      hideWithInteractivity: sr,
      enable: Bt,
      disable: Ce,
      unmount: Oe,
      destroy: Mr,
    };
  if (!t.render) return g;
  var S = t.render(g),
    T = S.popper,
    P = S.onUpdate;
  T.setAttribute("data-tippy-root", ""),
    (T.id = "tippy-" + g.id),
    (g.popper = T),
    (r._tippy = g),
    (T._tippy = g);
  var O = y.map(function (B) {
      return B.fn(g);
    }),
    k = r.hasAttribute("aria-expanded");
  return (
    Le(),
    E(),
    L(),
    D("onCreate", [g]),
    t.showOnCreate && yt(),
    T.addEventListener("mouseenter", function () {
      g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
    }),
    T.addEventListener("mouseleave", function () {
      g.props.interactive &&
        g.props.trigger.indexOf("mouseenter") >= 0 &&
        b().addEventListener("mousemove", h);
    }),
    g
  );
  function M() {
    var B = g.props.touch;
    return Array.isArray(B) ? B : [B, 0];
  }
  function R() {
    return M()[0] === "hold";
  }
  function A() {
    var B;
    return !!((B = g.props.render) != null && B.$$tippy);
  }
  function N() {
    return p || r;
  }
  function b() {
    var B = N().parentNode;
    return B ? Ah(B) : document;
  }
  function w() {
    return ca(T);
  }
  function C(B) {
    return (g.state.isMounted && !g.state.isVisible) ||
      Si.isTouch ||
      (c && c.type === "focus")
      ? 0
      : bo(g.props.delay, B ? 0 : 1, mi.delay);
  }
  function L(B) {
    B === void 0 && (B = !1),
      (T.style.pointerEvents = g.props.interactive && !B ? "" : "none"),
      (T.style.zIndex = "" + g.props.zIndex);
  }
  function D(B, W, j) {
    if (
      (j === void 0 && (j = !0),
      O.forEach(function (re) {
        re[B] && re[B].apply(re, W);
      }),
      j)
    ) {
      var oe;
      (oe = g.props)[B].apply(oe, W);
    }
  }
  function I() {
    var B = g.props.aria;
    if (B.content) {
      var W = "aria-" + B.content,
        j = T.id,
        oe = qr(g.props.triggerTarget || r);
      oe.forEach(function (re) {
        var U = re.getAttribute(W);
        if (g.state.isVisible) re.setAttribute(W, U ? U + " " + j : j);
        else {
          var Ne = U && U.replace(j, "").trim();
          Ne ? re.setAttribute(W, Ne) : re.removeAttribute(W);
        }
      });
    }
  }
  function E() {
    if (!(k || !g.props.aria.expanded)) {
      var B = qr(g.props.triggerTarget || r);
      B.forEach(function (W) {
        g.props.interactive
          ? W.setAttribute(
              "aria-expanded",
              g.state.isVisible && W === N() ? "true" : "false"
            )
          : W.removeAttribute("aria-expanded");
      });
    }
  }
  function F() {
    b().removeEventListener("mousemove", h),
      (_s = _s.filter(function (B) {
        return B !== h;
      }));
  }
  function q(B) {
    if (!(Si.isTouch && (l || B.type === "mousedown"))) {
      var W = (B.composedPath && B.composedPath()[0]) || B.target;
      if (!(g.props.interactive && Ul(T, W))) {
        if (
          qr(g.props.triggerTarget || r).some(function (j) {
            return Ul(j, W);
          })
        ) {
          if (
            Si.isTouch ||
            (g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
          )
            return;
        } else D("onClickOutside", [g, B]);
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
  function Q() {
    l = !0;
  }
  function X() {
    l = !1;
  }
  function ie() {
    var B = b();
    B.addEventListener("mousedown", q, !0),
      B.addEventListener("touchend", q, hr),
      B.addEventListener("touchstart", X, hr),
      B.addEventListener("touchmove", Q, hr);
  }
  function ue() {
    var B = b();
    B.removeEventListener("mousedown", q, !0),
      B.removeEventListener("touchend", q, hr),
      B.removeEventListener("touchstart", X, hr),
      B.removeEventListener("touchmove", Q, hr);
  }
  function de(B, W) {
    xe(B, function () {
      !g.state.isVisible && T.parentNode && T.parentNode.contains(T) && W();
    });
  }
  function be(B, W) {
    xe(B, W);
  }
  function xe(B, W) {
    var j = w().box;
    function oe(re) {
      re.target === j && (To(j, "remove", oe), W());
    }
    if (B === 0) return W();
    To(j, "remove", d), To(j, "add", oe), (d = oe);
  }
  function et(B, W, j) {
    j === void 0 && (j = !1);
    var oe = qr(g.props.triggerTarget || r);
    oe.forEach(function (re) {
      re.addEventListener(B, W, j),
        f.push({ node: re, eventType: B, handler: W, options: j });
    });
  }
  function Le() {
    R() &&
      (et("touchstart", ne, { passive: !0 }),
      et("touchend", qe, { passive: !0 })),
      wh(g.props.trigger).forEach(function (B) {
        if (B !== "manual")
          switch ((et(B, ne), B)) {
            case "mouseenter":
              et("mouseleave", qe);
              break;
            case "focus":
              et(kh ? "focusout" : "blur", He);
              break;
            case "focusin":
              et("focusout", He);
              break;
          }
      });
  }
  function Ve() {
    f.forEach(function (B) {
      var W = B.node,
        j = B.eventType,
        oe = B.handler,
        re = B.options;
      W.removeEventListener(j, oe, re);
    }),
      (f = []);
  }
  function ne(B) {
    var W,
      j = !1;
    if (!(!g.state.isEnabled || z(B) || a)) {
      var oe = ((W = c) == null ? void 0 : W.type) === "focus";
      (c = B),
        (p = B.currentTarget),
        E(),
        !g.state.isVisible &&
          xh(B) &&
          _s.forEach(function (re) {
            return re(B);
          }),
        B.type === "click" &&
        (g.props.trigger.indexOf("mouseenter") < 0 || o) &&
        g.props.hideOnClick !== !1 &&
        g.state.isVisible
          ? (j = !0)
          : yt(B),
        B.type === "click" && (o = !j),
        j && !oe && st(B);
    }
  }
  function _e(B) {
    var W = B.target,
      j = N().contains(W) || T.contains(W);
    if (!(B.type === "mousemove" && j)) {
      var oe = fe()
        .concat(T)
        .map(function (re) {
          var U,
            Ne = re._tippy,
            Ue = (U = Ne.popperInstance) == null ? void 0 : U.state;
          return Ue
            ? {
                popperRect: re.getBoundingClientRect(),
                popperState: Ue,
                props: t,
              }
            : null;
        })
        .filter(Boolean);
      Ph(oe, B) && (F(), st(B));
    }
  }
  function qe(B) {
    var W = z(B) || (g.props.trigger.indexOf("click") >= 0 && o);
    if (!W) {
      if (g.props.interactive) {
        g.hideWithInteractivity(B);
        return;
      }
      st(B);
    }
  }
  function He(B) {
    (g.props.trigger.indexOf("focusin") < 0 && B.target !== N()) ||
      (g.props.interactive && B.relatedTarget && T.contains(B.relatedTarget)) ||
      st(B);
  }
  function z(B) {
    return Si.isTouch ? R() !== B.type.indexOf("touch") >= 0 : !1;
  }
  function Ye() {
    At();
    var B = g.props,
      W = B.popperOptions,
      j = B.placement,
      oe = B.offset,
      re = B.getReferenceClientRect,
      U = B.moveTransition,
      Ne = A() ? ca(T).arrow : null,
      Ue = re
        ? {
            getBoundingClientRect: re,
            contextElement: re.contextElement || N(),
          }
        : r,
      Lt = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function (fi) {
          var at = fi.state;
          if (A()) {
            var or = w(),
              J = or.box;
            ["placement", "reference-hidden", "escaped"].forEach(function (Y) {
              Y === "placement"
                ? J.setAttribute("data-placement", at.placement)
                : at.attributes.popper["data-popper-" + Y]
                ? J.setAttribute("data-" + Y, "")
                : J.removeAttribute("data-" + Y);
            }),
              (at.attributes.popper = {});
          }
        },
      },
      $e = [
        { name: "offset", options: { offset: oe } },
        {
          name: "preventOverflow",
          options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
        },
        { name: "flip", options: { padding: 5 } },
        { name: "computeStyles", options: { adaptive: !U } },
        Lt,
      ];
    A() &&
      Ne &&
      $e.push({ name: "arrow", options: { element: Ne, padding: 3 } }),
      $e.push.apply($e, W?.modifiers || []),
      (g.popperInstance = vh(
        Ue,
        T,
        Object.assign({}, W, { placement: j, onFirstUpdate: m, modifiers: $e })
      ));
  }
  function At() {
    g.popperInstance && (g.popperInstance.destroy(), (g.popperInstance = null));
  }
  function je() {
    var B = g.props.appendTo,
      W,
      j = N();
    (g.props.interactive && B === Qc) || B === "parent"
      ? (W = j.parentNode)
      : (W = Jc(B, [j])),
      W.contains(T) || W.appendChild(T),
      (g.state.isMounted = !0),
      Ye();
  }
  function fe() {
    return Ys(T.querySelectorAll("[data-tippy-root]"));
  }
  function yt(B) {
    g.clearDelayTimeouts(), B && D("onTrigger", [g, B]), ie();
    var W = C(!0),
      j = M(),
      oe = j[0],
      re = j[1];
    Si.isTouch && oe === "hold" && re && (W = re),
      W
        ? (i = setTimeout(function () {
            g.show();
          }, W))
        : g.show();
  }
  function st(B) {
    if (
      (g.clearDelayTimeouts(), D("onUntrigger", [g, B]), !g.state.isVisible)
    ) {
      ue();
      return;
    }
    if (
      !(
        g.props.trigger.indexOf("mouseenter") >= 0 &&
        g.props.trigger.indexOf("click") >= 0 &&
        ["mouseleave", "mousemove"].indexOf(B.type) >= 0 &&
        o
      )
    ) {
      var W = C(!1);
      W
        ? (n = setTimeout(function () {
            g.state.isVisible && g.hide();
          }, W))
        : (s = requestAnimationFrame(function () {
            g.hide();
          }));
    }
  }
  function Bt() {
    g.state.isEnabled = !0;
  }
  function Ce() {
    g.hide(), (g.state.isEnabled = !1);
  }
  function Ft() {
    clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
  }
  function ye(B) {
    if (!g.state.isDestroyed) {
      D("onBeforeUpdate", [g, B]), Ve();
      var W = g.props,
        j = Zl(r, Object.assign({}, W, Yl(B), { ignoreAttributes: !0 }));
      (g.props = j),
        Le(),
        W.interactiveDebounce !== j.interactiveDebounce &&
          (F(), (h = Gl(_e, j.interactiveDebounce))),
        W.triggerTarget && !j.triggerTarget
          ? qr(W.triggerTarget).forEach(function (oe) {
              oe.removeAttribute("aria-expanded");
            })
          : j.triggerTarget && r.removeAttribute("aria-expanded"),
        E(),
        L(),
        P && P(W, j),
        g.popperInstance &&
          (Ye(),
          fe().forEach(function (oe) {
            requestAnimationFrame(oe._tippy.popperInstance.forceUpdate);
          })),
        D("onAfterUpdate", [g, B]);
    }
  }
  function ot(B) {
    g.setProps({ content: B });
  }
  function Pt() {
    var B = g.state.isVisible,
      W = g.state.isDestroyed,
      j = !g.state.isEnabled,
      oe = Si.isTouch && !g.props.touch,
      re = bo(g.props.duration, 0, mi.duration);
    if (
      !(B || W || j || oe) &&
      !N().hasAttribute("disabled") &&
      (D("onShow", [g], !1), g.props.onShow(g) !== !1)
    ) {
      if (
        ((g.state.isVisible = !0),
        A() && (T.style.visibility = "visible"),
        L(),
        ie(),
        g.state.isMounted || (T.style.transition = "none"),
        A())
      ) {
        var U = w(),
          Ne = U.box,
          Ue = U.content;
        So([Ne, Ue], 0);
      }
      (m = function () {
        var $e;
        if (!(!g.state.isVisible || u)) {
          if (
            ((u = !0),
            (T.style.transition = g.props.moveTransition),
            A() && g.props.animation)
          ) {
            var di = w(),
              fi = di.box,
              at = di.content;
            So([fi, at], re), jl([fi, at], "visible");
          }
          I(),
            E(),
            Xl(xo, g),
            ($e = g.popperInstance) == null || $e.forceUpdate(),
            D("onMount", [g]),
            g.props.animation &&
              A() &&
              be(re, function () {
                (g.state.isShown = !0), D("onShown", [g]);
              });
        }
      }),
        je();
    }
  }
  function ci() {
    var B = !g.state.isVisible,
      W = g.state.isDestroyed,
      j = !g.state.isEnabled,
      oe = bo(g.props.duration, 1, mi.duration);
    if (!(B || W || j) && (D("onHide", [g], !1), g.props.onHide(g) !== !1)) {
      if (
        ((g.state.isVisible = !1),
        (g.state.isShown = !1),
        (u = !1),
        (o = !1),
        A() && (T.style.visibility = "hidden"),
        F(),
        ue(),
        L(!0),
        A())
      ) {
        var re = w(),
          U = re.box,
          Ne = re.content;
        g.props.animation && (So([U, Ne], oe), jl([U, Ne], "hidden"));
      }
      I(), E(), g.props.animation ? A() && de(oe, g.unmount) : g.unmount();
    }
  }
  function sr(B) {
    b().addEventListener("mousemove", h), Xl(_s, h), h(B);
  }
  function Oe() {
    g.state.isVisible && g.hide(),
      g.state.isMounted &&
        (At(),
        fe().forEach(function (B) {
          B._tippy.unmount();
        }),
        T.parentNode && T.parentNode.removeChild(T),
        (xo = xo.filter(function (B) {
          return B !== g;
        })),
        (g.state.isMounted = !1),
        D("onHidden", [g]));
  }
  function Mr() {
    g.state.isDestroyed ||
      (g.clearDelayTimeouts(),
      g.unmount(),
      Ve(),
      delete r._tippy,
      (g.state.isDestroyed = !0),
      D("onDestroy", [g]));
  }
}
function ts(r, e) {
  e === void 0 && (e = {});
  var t = mi.plugins.concat(e.plugins || []);
  Mh();
  var i = Object.assign({}, e, { plugins: t }),
    n = Eh(r),
    s = n.reduce(function (o, a) {
      var l = a && qh(a, i);
      return l && o.push(l), o;
    }, []);
  return io(r) ? s[0] : s;
}
ts.defaultProps = mi;
ts.setDefaultProps = zh;
ts.currentInput = Si;
Object.assign({}, qc, {
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
ts.setDefaultProps({ render: id });
const Hh = () => {
    const r = document.querySelectorAll("[data-tooltip]"),
      e = window.innerWidth < 768;
    r.forEach((t) => {
      ts(t, {
        content: t.getAttribute("data-tooltip"),
        placement: e ? "top" : "right",
        animation: "shift-away",
        arrow: !1,
        theme: "hm-tooltip",
        interactive: !0,
      });
    });
  },
  $h = () => {
    Hh();
  };
$.registerPlugin(Z);
let Co = [],
  eu;
const tu = () => {
    Co.forEach((t) => t.kill()), (Co = []);
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
        c = $.timeline({
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
        Co.push(c.scrollTrigger);
    });
  },
  Wh = () => {
    tu(),
      window.addEventListener("resize", () => {
        clearTimeout(eu),
          (eu = setTimeout(() => {
            tu(), Z.refresh();
          }, 150));
      });
  };
function iu(r) {
  return (
    r !== null &&
    typeof r == "object" &&
    "constructor" in r &&
    r.constructor === Object
  );
}
function Xa(r, e) {
  r === void 0 && (r = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => t.indexOf(i) < 0)
    .forEach((i) => {
      typeof r[i] > "u"
        ? (r[i] = e[i])
        : iu(e[i]) &&
          iu(r[i]) &&
          Object.keys(e[i]).length > 0 &&
          Xa(r[i], e[i]);
    });
}
const rd = {
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
function ai() {
  const r = typeof document < "u" ? document : {};
  return Xa(r, rd), r;
}
const Gh = {
  document: rd,
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
function _t() {
  const r = typeof window < "u" ? window : {};
  return Xa(r, Gh), r;
}
function $i(r) {
  return (
    r === void 0 && (r = ""),
    r
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function Xh(r) {
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
function js(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e);
}
function Us() {
  return Date.now();
}
function Yh(r) {
  const e = _t();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(r, null)),
    !t && r.currentStyle && (t = r.currentStyle),
    t || (t = r.style),
    t
  );
}
function jh(r, e) {
  e === void 0 && (e = "x");
  const t = _t();
  let i, n, s;
  const o = Yh(r);
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
function ys(r) {
  return (
    typeof r == "object" &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === "Object"
  );
}
function Uh(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function Wt() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !Uh(i)) {
      const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = n.length; s < o; s += 1) {
        const a = n[s],
          l = Object.getOwnPropertyDescriptor(i, a);
        l !== void 0 &&
          l.enumerable &&
          (ys(r[a]) && ys(i[a])
            ? i[a].__swiper__
              ? (r[a] = i[a])
              : Wt(r[a], i[a])
            : !ys(r[a]) && ys(i[a])
            ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Wt(r[a], i[a]))
            : (r[a] = i[a]));
      }
    }
  }
  return r;
}
function ws(r, e, t) {
  r.style.setProperty(e, t);
}
function nd(r) {
  let { swiper: e, targetPosition: t, side: i } = r;
  const n = _t(),
    s = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > s ? "next" : "prev",
    c = (m, f) => (u === "next" && m >= f) || (u === "prev" && m <= f),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const m = Math.max(Math.min((a - o) / l, 1), 0),
        f = 0.5 - Math.cos(m * Math.PI) / 2;
      let h = s + f * (t - s);
      if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), c(h, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: h });
          }),
          n.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = n.requestAnimationFrame(d);
    };
  d();
}
function Ei(r, e) {
  e === void 0 && (e = "");
  const t = _t(),
    i = [...r.children];
  return (
    t.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      i.push(...r.assignedElements()),
    e ? i.filter((n) => n.matches(e)) : i
  );
}
function Kh(r, e) {
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
function Zh(r, e) {
  const t = _t();
  let i = e.contains(r);
  return (
    !i &&
      t.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      ((i = [...e.assignedElements()].includes(r)), i || (i = Kh(r, e))),
    i
  );
}
function Ks(r) {
  try {
    return;
  } catch {}
}
function Zn(r, e) {
  e === void 0 && (e = []);
  const t = document.createElement(r);
  return t.classList.add(...(Array.isArray(e) ? e : $i(e))), t;
}
function Qh(r) {
  const e = _t(),
    t = ai(),
    i = r.getBoundingClientRect(),
    n = t.body,
    s = r.clientTop || n.clientTop || 0,
    o = r.clientLeft || n.clientLeft || 0,
    a = r === e ? e.scrollY : r.scrollTop,
    l = r === e ? e.scrollX : r.scrollLeft;
  return { top: i.top + a - s, left: i.left + l - o };
}
function Jh(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const i = r.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
  }
  return t;
}
function em(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const i = r.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
  }
  return t;
}
function Ui(r, e) {
  return _t().getComputedStyle(r, null).getPropertyValue(e);
}
function ru(r) {
  let e = r,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function tm(r, e) {
  const t = [];
  let i = r.parentElement;
  for (; i; ) t.push(i), (i = i.parentElement);
  return t;
}
function nu(r, e, t) {
  const i = _t();
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
function yi(r) {
  return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
}
let Eo;
function im() {
  const r = _t(),
    e = ai();
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
function sd() {
  return Eo || (Eo = im()), Eo;
}
let Ao;
function rm(r) {
  let { userAgent: e } = r === void 0 ? {} : r;
  const t = sd(),
    i = _t(),
    n = i.navigator.platform,
    s = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = i.screen.width,
    l = i.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = n === "Win32";
  let h = n === "MacIntel";
  const p = [
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
      h &&
      t.touch &&
      p.indexOf(`${a}x${l}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (h = !1)),
    u && !f && ((o.os = "android"), (o.android = !0)),
    (c || m || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function od(r) {
  return r === void 0 && (r = {}), Ao || (Ao = rm(r)), Ao;
}
let Po;
function nm() {
  const r = _t(),
    e = od();
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
function ad() {
  return Po || (Po = nm()), Po;
}
function sm(r) {
  let { swiper: e, on: t, emit: i } = r;
  const n = _t();
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
            const { width: m, height: f } = e;
            let h = m,
              p = f;
            d.forEach((v) => {
              let { contentBoxSize: _, contentRect: y, target: x } = v;
              (x && x !== e.el) ||
                ((h = y ? y.width : (_[0] || _).inlineSize),
                (p = y ? y.height : (_[0] || _).blockSize));
            }),
              (h !== m || p !== f) && a();
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
function om(r) {
  let { swiper: e, extendParams: t, on: i, emit: n } = r;
  const s = [],
    o = _t(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const m = o.MutationObserver || o.WebkitMutationObserver,
        f = new m((h) => {
          if (e.__preventObserver__) return;
          if (h.length === 1) {
            n("observerUpdate", h[0]);
            return;
          }
          const p = function () {
            n("observerUpdate", h[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(p)
            : o.setTimeout(p, 0);
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
          const c = tm(e.hostEl);
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
var am = {
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
function lm() {
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
        parseInt(Ui(i, "padding-left") || 0, 10) -
        parseInt(Ui(i, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(Ui(i, "padding-top") || 0, 10) -
        parseInt(Ui(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(r, {
        width: e,
        height: t,
        size: r.isHorizontal() ? e : t,
      }));
}
function um() {
  const r = this;
  function e(M, R) {
    return parseFloat(M.getPropertyValue(r.getDirectionLabel(R)) || 0);
  }
  const t = r.params,
    { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
    l = r.virtual && t.virtual.enabled,
    u = l ? r.virtual.slides.length : r.slides.length,
    c = Ei(n, `.${r.params.slideClass}, swiper-slide`),
    d = l ? r.virtual.slides.length : c.length;
  let m = [];
  const f = [],
    h = [];
  let p = t.slidesOffsetBefore;
  typeof p == "function" && (p = t.slidesOffsetBefore.call(r));
  let v = t.slidesOffsetAfter;
  typeof v == "function" && (v = t.slidesOffsetAfter.call(r));
  const _ = r.snapGrid.length,
    y = r.slidesGrid.length;
  let x = t.spaceBetween,
    g = -p,
    S = 0,
    T = 0;
  if (typeof s > "u") return;
  typeof x == "string" && x.indexOf("%") >= 0
    ? (x = (parseFloat(x.replace("%", "")) / 100) * s)
    : typeof x == "string" && (x = parseFloat(x)),
    (r.virtualSize = -x),
    c.forEach((M) => {
      o ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = "");
    }),
    t.centeredSlides &&
      t.cssMode &&
      (ws(i, "--swiper-centered-offset-before", ""),
      ws(i, "--swiper-centered-offset-after", ""));
  const P = t.grid && t.grid.rows > 1 && r.grid;
  P ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
  let O;
  const k =
    t.slidesPerView === "auto" &&
    t.breakpoints &&
    Object.keys(t.breakpoints).filter(
      (M) => typeof t.breakpoints[M].slidesPerView < "u"
    ).length > 0;
  for (let M = 0; M < d; M += 1) {
    O = 0;
    let R;
    if (
      (c[M] && (R = c[M]),
      P && r.grid.updateSlide(M, R, c),
      !(c[M] && Ui(R, "display") === "none"))
    ) {
      if (t.slidesPerView === "auto") {
        k && (c[M].style[r.getDirectionLabel("width")] = "");
        const A = getComputedStyle(R),
          N = R.style.transform,
          b = R.style.webkitTransform;
        if (
          (N && (R.style.transform = "none"),
          b && (R.style.webkitTransform = "none"),
          t.roundLengths)
        )
          O = r.isHorizontal() ? nu(R, "width") : nu(R, "height");
        else {
          const w = e(A, "width"),
            C = e(A, "padding-left"),
            L = e(A, "padding-right"),
            D = e(A, "margin-left"),
            I = e(A, "margin-right"),
            E = A.getPropertyValue("box-sizing");
          if (E && E === "border-box") O = w + D + I;
          else {
            const { clientWidth: F, offsetWidth: q } = R;
            O = w + C + L + D + I + (q - F);
          }
        }
        N && (R.style.transform = N),
          b && (R.style.webkitTransform = b),
          t.roundLengths && (O = Math.floor(O));
      } else
        (O = (s - (t.slidesPerView - 1) * x) / t.slidesPerView),
          t.roundLengths && (O = Math.floor(O)),
          c[M] && (c[M].style[r.getDirectionLabel("width")] = `${O}px`);
      c[M] && (c[M].swiperSlideSize = O),
        h.push(O),
        t.centeredSlides
          ? ((g = g + O / 2 + S / 2 + x),
            S === 0 && M !== 0 && (g = g - s / 2 - x),
            M === 0 && (g = g - s / 2 - x),
            Math.abs(g) < 1 / 1e3 && (g = 0),
            t.roundLengths && (g = Math.floor(g)),
            T % t.slidesPerGroup === 0 && m.push(g),
            f.push(g))
          : (t.roundLengths && (g = Math.floor(g)),
            (T - Math.min(r.params.slidesPerGroupSkip, T)) %
              r.params.slidesPerGroup ===
              0 && m.push(g),
            f.push(g),
            (g = g + O + x)),
        (r.virtualSize += O + x),
        (S = O),
        (T += 1);
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, s) + v),
    o &&
      a &&
      (t.effect === "slide" || t.effect === "coverflow") &&
      (i.style.width = `${r.virtualSize + x}px`),
    t.setWrapperSize &&
      (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + x}px`),
    P && r.grid.updateWrapperSize(O, m),
    !t.centeredSlides)
  ) {
    const M = [];
    for (let R = 0; R < m.length; R += 1) {
      let A = m[R];
      t.roundLengths && (A = Math.floor(A)),
        m[R] <= r.virtualSize - s && M.push(A);
    }
    (m = M),
      Math.floor(r.virtualSize - s) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(r.virtualSize - s);
  }
  if (l && t.loop) {
    const M = h[0] + x;
    if (t.slidesPerGroup > 1) {
      const R = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
        ),
        A = M * t.slidesPerGroup;
      for (let N = 0; N < R; N += 1) m.push(m[m.length - 1] + A);
    }
    for (let R = 0; R < r.virtual.slidesBefore + r.virtual.slidesAfter; R += 1)
      t.slidesPerGroup === 1 && m.push(m[m.length - 1] + M),
        f.push(f[f.length - 1] + M),
        (r.virtualSize += M);
  }
  if ((m.length === 0 && (m = [0]), x !== 0)) {
    const M =
      r.isHorizontal() && o ? "marginLeft" : r.getDirectionLabel("marginRight");
    c.filter((R, A) =>
      !t.cssMode || t.loop ? !0 : A !== c.length - 1
    ).forEach((R) => {
      R.style[M] = `${x}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let M = 0;
    h.forEach((A) => {
      M += A + (x || 0);
    }),
      (M -= x);
    const R = M > s ? M - s : 0;
    m = m.map((A) => (A <= 0 ? -p : A > R ? R + v : A));
  }
  if (t.centerInsufficientSlides) {
    let M = 0;
    h.forEach((A) => {
      M += A + (x || 0);
    }),
      (M -= x);
    const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (M + R < s) {
      const A = (s - M - R) / 2;
      m.forEach((N, b) => {
        m[b] = N - A;
      }),
        f.forEach((N, b) => {
          f[b] = N + A;
        });
    }
  }
  if (
    (Object.assign(r, {
      slides: c,
      snapGrid: m,
      slidesGrid: f,
      slidesSizesGrid: h,
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
  ) {
    ws(i, "--swiper-centered-offset-before", `${-m[0]}px`),
      ws(
        i,
        "--swiper-centered-offset-after",
        `${r.size / 2 - h[h.length - 1] / 2}px`
      );
    const M = -r.snapGrid[0],
      R = -r.slidesGrid[0];
    (r.snapGrid = r.snapGrid.map((A) => A + M)),
      (r.slidesGrid = r.slidesGrid.map((A) => A + R));
  }
  if (
    (d !== u && r.emit("slidesLengthChange"),
    m.length !== _ &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit("snapGridLengthChange")),
    f.length !== y && r.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
  ) {
    const M = `${t.containerModifierClass}backface-hidden`,
      R = r.el.classList.contains(M);
    d <= t.maxBackfaceHiddenSlides
      ? R || r.el.classList.add(M)
      : R && r.el.classList.remove(M);
  }
}
function cm(r) {
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
function dm() {
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
const su = (r, e, t) => {
  e && !r.classList.contains(t)
    ? r.classList.add(t)
    : !e && r.classList.contains(t) && r.classList.remove(t);
};
function fm(r) {
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
      m =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      f = -(o - c),
      h = f + e.slidesSizesGrid[l],
      p = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
      v =
        (f >= 0 && f < e.size - 1) ||
        (h > 1 && h <= e.size) ||
        (f <= 0 && h >= e.size);
    v && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
      su(u, v, t.slideVisibleClass),
      su(u, p, t.slideFullyVisibleClass),
      (u.progress = n ? -d : d),
      (u.originalProgress = n ? -m : m);
  }
}
function pm(r) {
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
      m = e.slidesGrid[c],
      f = e.slidesGrid[d],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      p = Math.abs(r);
    p >= m ? (a = (p - m) / h) : (a = (p + h - f) / h), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: a, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(r),
    s && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", n);
}
const Lo = (r, e, t) => {
  e && !r.classList.contains(t)
    ? r.classList.add(t)
    : !e && r.classList.contains(t) && r.classList.remove(t);
};
function hm() {
  const r = this,
    { slides: e, params: t, slidesEl: i, activeIndex: n } = r,
    s = r.virtual && t.virtual.enabled,
    o = r.grid && t.grid && t.grid.rows > 1,
    a = (d) => Ei(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
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
      ((c = em(l, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !c && (c = e[0]),
      (u = Jh(l, `.${t.slideClass}, swiper-slide`)[0]),
      t.loop && !u === 0 && (u = e[e.length - 1]))),
    e.forEach((d) => {
      Lo(d, d === l, t.slideActiveClass),
        Lo(d, d === c, t.slideNextClass),
        Lo(d, d === u, t.slidePrevClass);
    }),
    r.emitSlidesClasses();
}
const Ms = (r, e) => {
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
  Oo = (r, e) => {
    if (!r.slides[e]) return;
    const t = r.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  da = (r) => {
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
          a.includes(l.column) && Oo(r, u);
        });
      return;
    }
    const s = n + i - 1;
    if (r.params.rewind || r.params.loop)
      for (let o = n - e; o <= s + e; o += 1) {
        const a = ((o % t) + t) % t;
        (a < n || a > s) && Oo(r, a);
      }
    else
      for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
        o !== n && (o > s || o < n) && Oo(r, o);
  };
function mm(r) {
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
function gm(r) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: n, activeIndex: s, realIndex: o, snapIndex: a } = e;
  let l = r,
    u;
  const c = (f) => {
    let h = f - e.virtual.slidesBefore;
    return (
      h < 0 && (h = e.virtual.slides.length + h),
      h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
      h
    );
  };
  if ((typeof l > "u" && (l = mm(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
  let m;
  if (e.virtual && n.virtual.enabled && n.loop) m = c(l);
  else if (d) {
    const f = e.slides.find((p) => p.column === l);
    let h = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(h) && (h = Math.max(e.slides.indexOf(f), 0)),
      (m = Math.floor(h / n.grid.rows));
  } else if (e.slides[l]) {
    const f = e.slides[l].getAttribute("data-swiper-slide-index");
    f ? (m = parseInt(f, 10)) : (m = l);
  } else m = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: m,
    previousIndex: s,
    activeIndex: l,
  }),
    e.initialized && da(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== m && e.emit("realIndexChange"), e.emit("slideChange"));
}
function vm(r, e) {
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
var _m = {
  updateSize: lm,
  updateSlides: um,
  updateAutoHeight: cm,
  updateSlidesOffset: dm,
  updateSlidesProgress: fm,
  updateProgress: pm,
  updateSlidesClasses: hm,
  updateActiveIndex: gm,
  updateClickedSlide: vm,
};
function ym(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -n : n;
  if (t.cssMode) return n;
  let o = jh(s, r);
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
}
function wm(r, e) {
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
function bm() {
  return -this.snapGrid[0];
}
function Sm() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Tm(r, e, t, i, n) {
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
          nd({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
            (s.onTranslateToWrapperTransitionEnd = function (m) {
              !s ||
                s.destroyed ||
                (m.target === this &&
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
var xm = {
  getTranslate: ym,
  setTranslate: wm,
  minTranslate: bm,
  maxTranslate: Sm,
  translateTo: Tm,
};
function Cm(r, e) {
  const t = this;
  t.params.cssMode ||
    ((t.wrapperEl.style.transitionDuration = `${r}ms`),
    (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
    t.emit("setTransition", r, e);
}
function ld(r) {
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
function Em(r, e) {
  r === void 0 && (r = !0);
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    ld({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
}
function Am(r, e) {
  r === void 0 && (r = !0);
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      ld({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
}
var Pm = { setTransition: Cm, transitionStart: Em, transitionEnd: Am };
function Lm(r, e, t, i, n) {
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
    rtlTranslate: m,
    wrapperEl: f,
    enabled: h,
  } = s;
  if (
    (!h && !i && !n) ||
    s.destroyed ||
    (s.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof e > "u" && (e = s.params.speed);
  const p = Math.min(s.params.slidesPerGroupSkip, o);
  let v = p + Math.floor((o - p) / s.params.slidesPerGroup);
  v >= l.length && (v = l.length - 1);
  const _ = -l[v];
  if (a.normalizeSlideIndex)
    for (let P = 0; P < u.length; P += 1) {
      const O = -Math.floor(_ * 100),
        k = Math.floor(u[P] * 100),
        M = Math.floor(u[P + 1] * 100);
      typeof u[P + 1] < "u"
        ? O >= k && O < M - (M - k) / 2
          ? (o = P)
          : O >= k && O < M && (o = P + 1)
        : O >= k && (o = P);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (m
        ? _ > s.translate && _ > s.minTranslate()
        : _ < s.translate && _ < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        _ > s.translate &&
        _ > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(_);
  let y;
  o > d ? (y = "next") : o < d ? (y = "prev") : (y = "reset");
  const x = s.virtual && s.params.virtual.enabled;
  if (!(x && n) && ((m && -_ === s.translate) || (!m && _ === s.translate)))
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(_),
      y !== "reset" && (s.transitionStart(t, y), s.transitionEnd(t, y)),
      !1
    );
  if (a.cssMode) {
    const P = s.isHorizontal(),
      O = m ? _ : -_;
    if (e === 0)
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[P ? "scrollLeft" : "scrollTop"] = O;
            }))
          : (f[P ? "scrollLeft" : "scrollTop"] = O),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    else {
      if (!s.support.smoothScroll)
        return (
          nd({ swiper: s, targetPosition: O, side: P ? "left" : "top" }), !0
        );
      f.scrollTo({ [P ? "left" : "top"]: O, behavior: "smooth" });
    }
    return !0;
  }
  const T = ad().isSafari;
  return (
    x && !n && T && s.isElement && s.virtual.update(!1, !1, o),
    s.setTransition(e),
    s.setTranslate(_),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, y),
    e === 0
      ? s.transitionEnd(t, y)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (O) {
            !s ||
              s.destroyed ||
              (O.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(t, y)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Om(r, e, t, i) {
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
        const m = o * n.params.grid.rows;
        a = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === m
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
        const m = u
          ? a < n.activeIndex
            ? "prev"
            : "next"
          : a - n.activeIndex - 1 < n.params.slidesPerView
          ? "next"
          : "prev";
        n.loopFix({
          direction: m,
          slideTo: !0,
          activeSlideIndex: m === "next" ? a + 1 : a - l + 1,
          slideRealIndex: m === "next" ? n.realIndex : void 0,
        });
      }
      if (s) {
        const m = o * n.params.grid.rows;
        o = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === m
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
function Mm(r, e, t) {
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
function Dm(r, e, t) {
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
  function m(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const f = m(d),
    h = s.map((y) => m(y)),
    p = n.freeMode && n.freeMode.enabled;
  let v = s[h.indexOf(f) - 1];
  if (typeof v > "u" && (n.cssMode || p)) {
    let y;
    s.forEach((x, g) => {
      f >= x && (y = g);
    }),
      typeof y < "u" && (v = p ? s[y] : s[y > 0 ? y - 1 : y]);
  }
  let _ = 0;
  if (
    (typeof v < "u" &&
      ((_ = o.indexOf(v)),
      _ < 0 && (_ = i.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((_ = _ - i.slidesPerViewDynamic("previous", !0) + 1),
        (_ = Math.max(_, 0)))),
    n.rewind && i.isBeginning)
  ) {
    const y =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(y, r, e, t);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(_, r, e, t);
      }),
      !0
    );
  return i.slideTo(_, r, e, t);
}
function km(r, e, t) {
  e === void 0 && (e = !0);
  const i = this;
  if (!i.destroyed)
    return (
      typeof r > "u" && (r = i.params.speed), i.slideTo(i.activeIndex, r, e, t)
    );
}
function Im(r, e, t, i) {
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
function Rm() {
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
              Ei(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            js(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n)
        : n > r.slides.length - i
        ? (r.loopFix(),
          (n = r.getSlideIndex(
            Ei(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          js(() => {
            r.slideTo(n);
          }))
        : r.slideTo(n);
  } else r.slideTo(n);
}
var Nm = {
  slideTo: Lm,
  slideToLoop: Om,
  slideNext: Mm,
  slidePrev: Dm,
  slideReset: km,
  slideToClosest: Im,
  slideToClickedSlide: Rm,
};
function zm(r, e) {
  const t = this,
    { params: i, slidesEl: n } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  const s = () => {
      Ei(n, `.${i.slideClass}, swiper-slide`).forEach((m, f) => {
        m.setAttribute("data-swiper-slide-index", f);
      });
    },
    o = t.grid && i.grid && i.grid.rows > 1,
    a = i.slidesPerGroup * (o ? i.grid.rows : 1),
    l = t.slides.length % a !== 0,
    u = o && t.slides.length % i.grid.rows !== 0,
    c = (d) => {
      for (let m = 0; m < d; m += 1) {
        const f = t.isElement
          ? Zn("swiper-slide", [i.slideBlankClass])
          : Zn("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (l) {
    if (i.loopAddBlankSlides) {
      const d = a - (t.slides.length % a);
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      Ks(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    s();
  } else if (u) {
    if (i.loopAddBlankSlides) {
      const d = i.grid.rows - (t.slides.length % i.grid.rows);
      c(d), t.recalcSlides(), t.updateSlides();
    } else
      Ks(
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
function Bm(r) {
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
      allowSlideNext: m,
      slidesEl: f,
      params: h,
    } = u,
    { centeredSlides: p, initialSlide: v } = h;
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && h.virtual.enabled)
  ) {
    t &&
      (!h.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && u.snapIndex < h.slidesPerView
        ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
        : u.snapIndex === u.snapGrid.length - 1 &&
          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = d),
      (u.allowSlideNext = m),
      u.emit("loopFix");
    return;
  }
  let _ = h.slidesPerView;
  _ === "auto"
    ? (_ = u.slidesPerViewDynamic())
    : ((_ = Math.ceil(parseFloat(h.slidesPerView, 10))),
      p && _ % 2 === 0 && (_ = _ + 1));
  const y = h.slidesPerGroupAuto ? _ : h.slidesPerGroup;
  let x = y;
  x % y !== 0 && (x += y - (x % y)),
    (x += h.loopAdditionalSlides),
    (u.loopedSlides = x);
  const g = u.grid && h.grid && h.grid.rows > 1;
  c.length < _ + x || (u.params.effect === "cards" && c.length < _ + x * 2)
    ? Ks(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : g &&
      h.grid.fill === "row" &&
      Ks(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const S = [],
    T = [],
    P = g ? Math.ceil(c.length / h.grid.rows) : c.length,
    O = o && P - v < _ && !p;
  let k = O ? v : u.activeIndex;
  typeof s > "u"
    ? (s = u.getSlideIndex(
        c.find((C) => C.classList.contains(h.slideActiveClass))
      ))
    : (k = s);
  const M = i === "next" || !i,
    R = i === "prev" || !i;
  let A = 0,
    N = 0;
  const w = (g ? c[s].column : s) + (p && typeof n > "u" ? -_ / 2 + 0.5 : 0);
  if (w < x) {
    A = Math.max(x - w, y);
    for (let C = 0; C < x - w; C += 1) {
      const L = C - Math.floor(C / P) * P;
      if (g) {
        const D = P - L - 1;
        for (let I = c.length - 1; I >= 0; I -= 1)
          c[I].column === D && S.push(I);
      } else S.push(P - L - 1);
    }
  } else if (w + _ > P - x) {
    (N = Math.max(w - (P - x * 2), y)), O && (N = Math.max(N, _ - P + v + 1));
    for (let C = 0; C < N; C += 1) {
      const L = C - Math.floor(C / P) * P;
      g
        ? c.forEach((D, I) => {
            D.column === L && T.push(I);
          })
        : T.push(L);
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1;
    }),
    u.params.effect === "cards" &&
      c.length < _ + x * 2 &&
      (T.includes(s) && T.splice(T.indexOf(s), 1),
      S.includes(s) && S.splice(S.indexOf(s), 1)),
    R &&
      S.forEach((C) => {
        (c[C].swiperLoopMoveDOM = !0),
          f.prepend(c[C]),
          (c[C].swiperLoopMoveDOM = !1);
      }),
    M &&
      T.forEach((C) => {
        (c[C].swiperLoopMoveDOM = !0),
          f.append(c[C]),
          (c[C].swiperLoopMoveDOM = !1);
      }),
    u.recalcSlides(),
    h.slidesPerView === "auto"
      ? u.updateSlides()
      : g &&
        ((S.length > 0 && R) || (T.length > 0 && M)) &&
        u.slides.forEach((C, L) => {
          u.grid.updateSlide(L, C, u.slides);
        }),
    h.watchSlidesProgress && u.updateSlidesOffset(),
    t)
  ) {
    if (S.length > 0 && R) {
      if (typeof e > "u") {
        const C = u.slidesGrid[k],
          D = u.slidesGrid[k + A] - C;
        l
          ? u.setTranslate(u.translate - D)
          : (u.slideTo(k + Math.ceil(A), 0, !1, !0),
            n &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - D),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - D)));
      } else if (n) {
        const C = g ? S.length / h.grid.rows : S.length;
        u.slideTo(u.activeIndex + C, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate);
      }
    } else if (T.length > 0 && M)
      if (typeof e > "u") {
        const C = u.slidesGrid[k],
          D = u.slidesGrid[k - N] - C;
        l
          ? u.setTranslate(u.translate - D)
          : (u.slideTo(k - N, 0, !1, !0),
            n &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - D),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - D)));
      } else {
        const C = g ? T.length / h.grid.rows : T.length;
        u.slideTo(u.activeIndex - C, 0, !1, !0);
      }
  }
  if (
    ((u.allowSlidePrev = d),
    (u.allowSlideNext = m),
    u.controller && u.controller.control && !a)
  ) {
    const C = {
      slideRealIndex: e,
      direction: i,
      setTranslate: n,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((L) => {
          !L.destroyed &&
            L.params.loop &&
            L.loopFix({
              ...C,
              slideTo: L.params.slidesPerView === h.slidesPerView ? t : !1,
            });
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...C,
          slideTo:
            u.controller.control.params.slidesPerView === h.slidesPerView
              ? t
              : !1,
        });
  }
  u.emit("loopFix");
}
function Fm() {
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
var Vm = { loopCreate: zm, loopFix: Bm, loopDestroy: Fm };
function qm(r) {
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
function Hm() {
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
var $m = { setGrabCursor: qm, unsetGrabCursor: Hm };
function Wm(r, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === ai() || i === _t()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(r);
    return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
  }
  return t(e);
}
function ou(r, e, t) {
  const i = _t(),
    { params: n } = r,
    s = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return s && (t <= o || t >= i.innerWidth - o)
    ? s === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function Gm(r) {
  const e = this,
    t = ai();
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
    ou(e, i, i.targetTouches[0].pageX);
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
    (s.touchEventsTarget === "wrapper" && !Zh(l, e.wrapperEl)) ||
    ("which" in i && i.which === 3) ||
    ("button" in i && i.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    m = !!(i.target && i.target.shadowRoot);
  if (s.noSwiping && (m ? Wm(d, l) : l.closest(d))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = i.pageX), (o.currentY = i.pageY);
  const f = o.currentX,
    h = o.currentY;
  if (!ou(e, i, f)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = f),
    (o.startY = h),
    (n.touchStartTime = Us()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (n.allowThresholdMove = !1);
  let p = !0;
  l.matches(n.focusableElements) &&
    ((p = !1), l.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(n.focusableElements) &&
      t.activeElement !== l &&
      (i.pointerType === "mouse" ||
        (i.pointerType !== "mouse" && !l.matches(n.focusableElements))) &&
      t.activeElement.blur();
  const v = p && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || v) &&
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
function Xm(r) {
  const e = ai(),
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
      ((u = [...l.changedTouches].find((T) => T.identifier === i.touchId)),
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
        (i.touchStartTime = Us()));
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
  const m = s.currentX - s.startX,
    f = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(m ** 2 + f ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let T;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : m * m + f * f >= 25 &&
        ((T = (Math.atan2(Math.abs(f), Math.abs(m)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? T > n.touchAngle
          : 90 - T > n.touchAngle));
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
  let h = t.isHorizontal() ? m : f,
    p = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement &&
    ((h = Math.abs(h) * (o ? 1 : -1)), (p = Math.abs(p) * (o ? 1 : -1))),
    (s.diff = h),
    (h *= n.touchRatio),
    o && ((h = -h), (p = -p));
  const v = t.touchesDirection;
  (t.swipeDirection = h > 0 ? "prev" : "next"),
    (t.touchesDirection = p > 0 ? "prev" : "next");
  const _ = t.params.loop && !n.cssMode,
    y =
      (t.touchesDirection === "next" && t.allowSlideNext) ||
      (t.touchesDirection === "prev" && t.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (_ && y && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      t.wrapperEl.dispatchEvent(T);
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
      v !== t.touchesDirection &&
      _ &&
      y &&
      Math.abs(h) >= 1)
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
    (i.currentTranslate = h + i.startTranslate);
  let g = !0,
    S = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (S = 0),
    h > 0
      ? (_ &&
          y &&
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
              (-t.minTranslate() + i.startTranslate + h) ** S)))
      : h < 0 &&
        (_ &&
          y &&
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
              (t.maxTranslate() - i.startTranslate - h) ** S))),
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
    if (Math.abs(h) > n.threshold || i.allowThresholdMove) {
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
function Ym(r) {
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
  const d = Us(),
    m = d - t.touchStartTime;
  if (e.allowClick) {
    const S = i.path || (i.composedPath && i.composedPath());
    e.updateClickedSlide((S && S[0]) || i.target, S),
      e.emit("tap click", i),
      m < 300 &&
        d - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", i);
  }
  if (
    ((t.lastClickTime = Us()),
    js(() => {
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
  const h = f >= -e.maxTranslate() && !e.params.loop;
  let p = 0,
    v = e.slidesSizesGrid[0];
  for (
    let S = 0;
    S < u.length;
    S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const T = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[S + T] < "u"
      ? (h || (f >= u[S] && f < u[S + T])) && ((p = S), (v = u[S + T] - u[S]))
      : (h || f >= u[S]) && ((p = S), (v = u[u.length - 1] - u[u.length - 2]));
  }
  let _ = null,
    y = null;
  o.rewind &&
    (e.isBeginning
      ? (y =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (_ = 0));
  const x = (f - u[p]) / v,
    g = p < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (m > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (x >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? _ : p + g)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (x > 1 - o.longSwipesRatio
          ? e.slideTo(p + g)
          : y !== null && x < 0 && Math.abs(x) > o.longSwipesRatio
          ? e.slideTo(y)
          : e.slideTo(p));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
      ? i.target === e.navigation.nextEl
        ? e.slideTo(p + g)
        : e.slideTo(p)
      : (e.swipeDirection === "next" && e.slideTo(_ !== null ? _ : p + g),
        e.swipeDirection === "prev" && e.slideTo(y !== null ? y : p));
  }
}
function au() {
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
function jm(r) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && r.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function Um() {
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
function Km(r) {
  const e = this;
  Ms(e, r.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function Zm() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const ud = (r, e) => {
  const t = ai(),
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
          au,
          !0
        )
      : r[u]("observerUpdate", au, !0),
    n[l]("load", r.onLoad, { capture: !0 }));
};
function Qm() {
  const r = this,
    { params: e } = r;
  (r.onTouchStart = Gm.bind(r)),
    (r.onTouchMove = Xm.bind(r)),
    (r.onTouchEnd = Ym.bind(r)),
    (r.onDocumentTouchStart = Zm.bind(r)),
    e.cssMode && (r.onScroll = Um.bind(r)),
    (r.onClick = jm.bind(r)),
    (r.onLoad = Km.bind(r)),
    ud(r, "on");
}
function Jm() {
  ud(this, "off");
}
var eg = { attachEvents: Qm, detachEvents: Jm };
const lu = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function tg() {
  const r = this,
    { realIndex: e, initialized: t, params: i, el: n } = r,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = ai(),
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
    m = lu(r, i),
    f = lu(r, d),
    h = r.params.grabCursor,
    p = d.grabCursor,
    v = i.enabled;
  m && !f
    ? (n.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !m &&
      f &&
      (n.classList.add(`${i.containerModifierClass}grid`),
      ((d.grid.fill && d.grid.fill === "column") ||
        (!d.grid.fill && i.grid.fill === "column")) &&
        n.classList.add(`${i.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    h && !p ? r.unsetGrabCursor() : !h && p && r.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((T) => {
      if (typeof d[T] > "u") return;
      const P = i[T] && i[T].enabled,
        O = d[T] && d[T].enabled;
      P && !O && r[T].disable(), !P && O && r[T].enable();
    });
  const _ = d.direction && d.direction !== i.direction,
    y = i.loop && (d.slidesPerView !== i.slidesPerView || _),
    x = i.loop;
  _ && t && r.changeDirection(), Wt(r.params, d);
  const g = r.params.enabled,
    S = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    v && !g ? r.disable() : !v && g && r.enable(),
    (r.currentBreakpoint = u),
    r.emit("_beforeBreakpoint", d),
    t &&
      (y
        ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
        : !x && S
        ? (r.loopCreate(e), r.updateSlides())
        : x && !S && r.loopDestroy()),
    r.emit("breakpoint", d);
}
function ig(r, e, t) {
  if ((e === void 0 && (e = "window"), !r || (e === "container" && !t))) return;
  let i = !1;
  const n = _t(),
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
var rg = { setBreakpoint: tg, getBreakpoint: ig };
function ng(r, e) {
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
function sg() {
  const r = this,
    { classNames: e, params: t, rtl: i, el: n, device: s } = r,
    o = ng(
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
function og() {
  const r = this,
    { el: e, classNames: t } = r;
  !e ||
    typeof e == "string" ||
    (e.classList.remove(...t), r.emitContainerClasses());
}
var ag = { addClasses: sg, removeClasses: og };
function lg() {
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
var ug = { checkOverflow: lg },
  uu = {
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
function cg(r, e) {
  return function (i) {
    i === void 0 && (i = {});
    const n = Object.keys(i)[0],
      s = i[n];
    if (typeof s != "object" || s === null) {
      Wt(e, i);
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
      Wt(e, i);
      return;
    }
    typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
      r[n] || (r[n] = { enabled: !1 }),
      Wt(e, i);
  };
}
const Mo = {
    eventsEmitter: am,
    update: _m,
    translate: xm,
    transition: Pm,
    slide: Nm,
    loop: Vm,
    grabCursor: $m,
    events: eg,
    breakpoints: rg,
    checkOverflow: ug,
    classes: ag,
  },
  Do = {};
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
      (t = Wt({}, t)),
      e && !t.el && (t.el = e);
    const o = ai();
    if (
      t.el &&
      typeof t.el == "string" &&
      o.querySelectorAll(t.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(t.el).forEach((d) => {
          const m = Wt({}, t, { el: d });
          c.push(new pt(m));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = sd()),
      (a.device = od({ userAgent: t.userAgent })),
      (a.browser = ad()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: t,
        swiper: a,
        extendParams: cg(t, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = Wt({}, uu, l);
    return (
      (a.params = Wt({}, u, Do, t)),
      (a.originalParams = Wt({}, a.params)),
      (a.passedParams = Wt({}, t)),
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
      n = Ei(t, `.${i.slideClass}, swiper-slide`),
      s = ru(n[0]);
    return ru(e) - s;
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
    e.slides = Ei(t, `.${i.slideClass}, swiper-slide`);
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
        m;
      for (let f = u + 1; f < s.length; f += 1)
        s[f] &&
          !m &&
          ((d += Math.ceil(s[f].swiperSlideSize)), (c += 1), d > l && (m = !0));
      for (let f = u - 1; f >= 0; f -= 1)
        s[f] &&
          !m &&
          ((d += s[f].swiperSlideSize), (c += 1), d > l && (m = !0));
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
        o.complete && Ms(e, o);
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
        : Ei(i, n())[0];
    return (
      !o &&
        t.params.createElements &&
        ((o = Zn("div", t.params.wrapperClass)),
        i.append(o),
        Ei(i, `.${t.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(t, {
        el: i,
        wrapperEl: o,
        slidesEl:
          t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
        hostEl: t.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Ui(i, "direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || Ui(i, "direction") === "rtl"),
        wrongRTL: Ui(o, "display") === "-webkit-box",
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
          ? Ms(t, s)
          : s.addEventListener("load", (o) => {
              Ms(t, o.target);
            });
      }),
      da(t),
      (t.initialized = !0),
      da(t),
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
          (i.el && typeof i.el != "string" && (i.el.swiper = null), Xh(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Wt(Do, e);
  }
  static get extendedDefaults() {
    return Do;
  }
  static get defaults() {
    return uu;
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
Object.keys(Mo).forEach((r) => {
  Object.keys(Mo[r]).forEach((e) => {
    pt.prototype[e] = Mo[r][e];
  });
});
pt.use([sm, om]);
function cd(r, e, t, i) {
  return (
    r.params.createElements &&
      Object.keys(i).forEach((n) => {
        if (!t[n] && t.auto === !0) {
          let s = Ei(r.el, `.${i[n]}`)[0];
          s || ((s = Zn("div", i[n])), (s.className = i[n]), r.el.append(s)),
            (t[n] = s),
            (e[n] = s);
        }
      }),
    t
  );
}
function dg(r) {
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
  function s(h) {
    let p;
    return h &&
      typeof h == "string" &&
      e.isElement &&
      ((p = e.el.querySelector(h) || e.hostEl.querySelector(h)), p)
      ? p
      : (h &&
          (typeof h == "string" && (p = [...document.querySelectorAll(h)]),
          e.params.uniqueNavElements &&
          typeof h == "string" &&
          p &&
          p.length > 1 &&
          e.el.querySelectorAll(h).length === 1
            ? (p = e.el.querySelector(h))
            : p && p.length === 1 && (p = p[0])),
        h && !p ? h : p);
  }
  function o(h, p) {
    const v = e.params.navigation;
    (h = yi(h)),
      h.forEach((_) => {
        _ &&
          (_.classList[p ? "add" : "remove"](...v.disabledClass.split(" ")),
          _.tagName === "BUTTON" && (_.disabled = p),
          e.params.watchOverflow &&
            e.enabled &&
            _.classList[e.isLocked ? "add" : "remove"](v.lockClass));
      });
  }
  function a() {
    const { nextEl: h, prevEl: p } = e.navigation;
    if (e.params.loop) {
      o(p, !1), o(h, !1);
      return;
    }
    o(p, e.isBeginning && !e.params.rewind), o(h, e.isEnd && !e.params.rewind);
  }
  function l(h) {
    h.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), n("navigationPrev"));
  }
  function u(h) {
    h.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), n("navigationNext"));
  }
  function c() {
    const h = e.params.navigation;
    if (
      ((e.params.navigation = cd(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(h.nextEl || h.prevEl))
    )
      return;
    let p = s(h.nextEl),
      v = s(h.prevEl);
    Object.assign(e.navigation, { nextEl: p, prevEl: v }),
      (p = yi(p)),
      (v = yi(v));
    const _ = (y, x) => {
      y && y.addEventListener("click", x === "next" ? u : l),
        !e.enabled && y && y.classList.add(...h.lockClass.split(" "));
    };
    p.forEach((y) => _(y, "next")), v.forEach((y) => _(y, "prev"));
  }
  function d() {
    let { nextEl: h, prevEl: p } = e.navigation;
    (h = yi(h)), (p = yi(p));
    const v = (_, y) => {
      _.removeEventListener("click", y === "next" ? u : l),
        _.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    h.forEach((_) => v(_, "next")), p.forEach((_) => v(_, "prev"));
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
      let { nextEl: h, prevEl: p } = e.navigation;
      if (((h = yi(h)), (p = yi(p)), e.enabled)) {
        a();
        return;
      }
      [...h, ...p]
        .filter((v) => !!v)
        .forEach((v) => v.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (h, p) => {
      let { nextEl: v, prevEl: _ } = e.navigation;
      (v = yi(v)), (_ = yi(_));
      const y = p.target;
      let x = _.includes(y) || v.includes(y);
      if (e.isElement && !x) {
        const g = p.path || (p.composedPath && p.composedPath());
        g && (x = g.find((S) => v.includes(S) || _.includes(S)));
      }
      if (e.params.navigation.hideOnClick && !x) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === y || e.pagination.el.contains(y))
        )
          return;
        let g;
        v.length
          ? (g = v[0].classList.contains(e.params.navigation.hiddenClass))
          : _.length &&
            (g = _[0].classList.contains(e.params.navigation.hiddenClass)),
          n(g === !0 ? "navigationShow" : "navigationHide"),
          [...v, ..._]
            .filter((S) => !!S)
            .forEach((S) =>
              S.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const m = () => {
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
    enable: m,
    disable: f,
    update: a,
    init: c,
    destroy: d,
  });
}
function fg(r) {
  return (
    r === void 0 && (r = ""),
    `.${r
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function dd(r) {
  let { swiper: e, extendParams: t, on: i, emit: n } = r;
  const s = ai();
  let o = !1,
    a = null,
    l = null,
    u,
    c,
    d,
    m;
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
    const { scrollbar: A, rtlTranslate: N } = e,
      { dragEl: b, el: w } = A,
      C = e.params.scrollbar,
      L = e.params.loop ? e.progressLoop : e.progress;
    let D = c,
      I = (d - c) * L;
    N
      ? ((I = -I), I > 0 ? ((D = c - I), (I = 0)) : -I + c > d && (D = d + I))
      : I < 0
      ? ((D = c + I), (I = 0))
      : I + c > d && (D = d - I),
      e.isHorizontal()
        ? ((b.style.transform = `translate3d(${I}px, 0, 0)`),
          (b.style.width = `${D}px`))
        : ((b.style.transform = `translate3d(0px, ${I}px, 0)`),
          (b.style.height = `${D}px`)),
      C.hide &&
        (clearTimeout(a),
        (w.style.opacity = 1),
        (a = setTimeout(() => {
          (w.style.opacity = 0), (w.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function h(A) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${A}ms`);
  }
  function p() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: A } = e,
      { dragEl: N, el: b } = A;
    (N.style.width = ""),
      (N.style.height = ""),
      (d = e.isHorizontal() ? b.offsetWidth : b.offsetHeight),
      (m =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (c = d * m)
        : (c = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (N.style.width = `${c}px`)
        : (N.style.height = `${c}px`),
      m >= 1 ? (b.style.display = "none") : (b.style.display = ""),
      e.params.scrollbar.hide && (b.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        A.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function v(A) {
    return e.isHorizontal() ? A.clientX : A.clientY;
  }
  function _(A) {
    const { scrollbar: N, rtlTranslate: b } = e,
      { el: w } = N;
    let C;
    (C =
      (v(A) -
        Qh(w)[e.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : c / 2)) /
      (d - c)),
      (C = Math.max(Math.min(C, 1), 0)),
      b && (C = 1 - C);
    const L = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * C;
    e.updateProgress(L),
      e.setTranslate(L),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function y(A) {
    const N = e.params.scrollbar,
      { scrollbar: b, wrapperEl: w } = e,
      { el: C, dragEl: L } = b;
    (o = !0),
      (u =
        A.target === L
          ? v(A) -
            A.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      A.preventDefault(),
      A.stopPropagation(),
      (w.style.transitionDuration = "100ms"),
      (L.style.transitionDuration = "100ms"),
      _(A),
      clearTimeout(l),
      (C.style.transitionDuration = "0ms"),
      N.hide && (C.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      n("scrollbarDragStart", A);
  }
  function x(A) {
    const { scrollbar: N, wrapperEl: b } = e,
      { el: w, dragEl: C } = N;
    o &&
      (A.preventDefault && A.cancelable
        ? A.preventDefault()
        : (A.returnValue = !1),
      _(A),
      (b.style.transitionDuration = "0ms"),
      (w.style.transitionDuration = "0ms"),
      (C.style.transitionDuration = "0ms"),
      n("scrollbarDragMove", A));
  }
  function g(A) {
    const N = e.params.scrollbar,
      { scrollbar: b, wrapperEl: w } = e,
      { el: C } = b;
    o &&
      ((o = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (w.style.transitionDuration = "")),
      N.hide &&
        (clearTimeout(l),
        (l = js(() => {
          (C.style.opacity = 0), (C.style.transitionDuration = "400ms");
        }, 1e3))),
      n("scrollbarDragEnd", A),
      N.snapOnRelease && e.slideToClosest());
  }
  function S(A) {
    const { scrollbar: N, params: b } = e,
      w = N.el;
    if (!w) return;
    const C = w,
      L = b.passiveListeners ? { passive: !1, capture: !1 } : !1,
      D = b.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!C) return;
    const I = A === "on" ? "addEventListener" : "removeEventListener";
    C[I]("pointerdown", y, L),
      s[I]("pointermove", x, L),
      s[I]("pointerup", g, D);
  }
  function T() {
    !e.params.scrollbar.el || !e.scrollbar.el || S("on");
  }
  function P() {
    !e.params.scrollbar.el || !e.scrollbar.el || S("off");
  }
  function O() {
    const { scrollbar: A, el: N } = e;
    e.params.scrollbar = cd(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const b = e.params.scrollbar;
    if (!b.el) return;
    let w;
    if (
      (typeof b.el == "string" && e.isElement && (w = e.el.querySelector(b.el)),
      !w && typeof b.el == "string")
    ) {
      if (((w = s.querySelectorAll(b.el)), !w.length)) return;
    } else w || (w = b.el);
    e.params.uniqueNavElements &&
      typeof b.el == "string" &&
      w.length > 1 &&
      N.querySelectorAll(b.el).length === 1 &&
      (w = N.querySelector(b.el)),
      w.length > 0 && (w = w[0]),
      w.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
    let C;
    w &&
      ((C = w.querySelector(fg(e.params.scrollbar.dragClass))),
      C || ((C = Zn("div", e.params.scrollbar.dragClass)), w.append(C))),
      Object.assign(A, { el: w, dragEl: C }),
      b.draggable && T(),
      w &&
        w.classList[e.enabled ? "remove" : "add"](
          ...$i(e.params.scrollbar.lockClass)
        );
  }
  function k() {
    const A = e.params.scrollbar,
      N = e.scrollbar.el;
    N &&
      N.classList.remove(
        ...$i(e.isHorizontal() ? A.horizontalClass : A.verticalClass)
      ),
      P();
  }
  i("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const A = e.params.scrollbar;
    let { el: N } = e.scrollbar;
    (N = yi(N)),
      N.forEach((b) => {
        b.classList.remove(A.horizontalClass, A.verticalClass),
          b.classList.add(
            e.isHorizontal() ? A.horizontalClass : A.verticalClass
          );
      });
  }),
    i("init", () => {
      e.params.scrollbar.enabled === !1 ? R() : (O(), p(), f());
    }),
    i("update resize observerUpdate lock unlock changeDirection", () => {
      p();
    }),
    i("setTranslate", () => {
      f();
    }),
    i("setTransition", (A, N) => {
      h(N);
    }),
    i("enable disable", () => {
      const { el: A } = e.scrollbar;
      A &&
        A.classList[e.enabled ? "remove" : "add"](
          ...$i(e.params.scrollbar.lockClass)
        );
    }),
    i("destroy", () => {
      k();
    });
  const M = () => {
      e.el.classList.remove(...$i(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...$i(e.params.scrollbar.scrollbarDisabledClass)
          ),
        O(),
        p(),
        f();
    },
    R = () => {
      e.el.classList.add(...$i(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...$i(e.params.scrollbar.scrollbarDisabledClass)
          ),
        k();
    };
  Object.assign(e.scrollbar, {
    enable: M,
    disable: R,
    updateSize: p,
    setTranslate: f,
    init: O,
    destroy: k,
  });
}
function fd(r) {
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
    m,
    f,
    h,
    p,
    v,
    _,
    y;
  function x(D) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (D.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", x),
        !(y || (D.detail && D.detail.bySwiperTouchMove)) && M()));
  }
  const g = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1));
      const D = e.autoplay.paused ? c : d + u - new Date().getTime();
      (e.autoplay.timeLeft = D),
        n("autoplayTimeLeft", D, D / l),
        (a = requestAnimationFrame(() => {
          g();
        }));
    },
    S = () => {
      let D;
      return (
        e.virtual && e.params.virtual.enabled
          ? (D = e.slides.find((E) =>
              E.classList.contains("swiper-slide-active")
            ))
          : (D = e.slides[e.activeIndex]),
        D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    T = (D) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), g();
      let I = typeof D > "u" ? e.params.autoplay.delay : D;
      (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
      const E = S();
      !Number.isNaN(E) &&
        E > 0 &&
        typeof D > "u" &&
        ((I = E), (l = E), (u = E)),
        (c = I);
      const F = e.params.speed,
        q = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(F, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, F, !0, !0), n("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(F, !0, !0), n("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, F, !0, !0), n("autoplay")),
            e.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                T();
              })));
        };
      return (
        I > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              q();
            }, I)))
          : requestAnimationFrame(() => {
              q();
            }),
        I
      );
    },
    P = () => {
      (d = new Date().getTime()),
        (e.autoplay.running = !0),
        T(),
        n("autoplayStart");
    },
    O = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        n("autoplayStop");
    },
    k = (D, I) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), D || (_ = !0);
      const E = () => {
        n("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", x)
            : M();
      };
      if (((e.autoplay.paused = !0), I)) {
        v && (c = e.params.autoplay.delay), (v = !1), E();
        return;
      }
      (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), E());
    },
    M = () => {
      (e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((d = new Date().getTime()),
        _ ? ((_ = !1), T(c)) : T(),
        (e.autoplay.paused = !1),
        n("autoplayResume"));
    },
    R = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const D = ai();
      D.visibilityState === "hidden" && ((_ = !0), k(!0)),
        D.visibilityState === "visible" && M();
    },
    A = (D) => {
      D.pointerType === "mouse" &&
        ((_ = !0), (y = !0), !(e.animating || e.autoplay.paused) && k(!0));
    },
    N = (D) => {
      D.pointerType === "mouse" && ((y = !1), e.autoplay.paused && M());
    },
    b = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", A),
        e.el.addEventListener("pointerleave", N));
    },
    w = () => {
      e.el &&
        typeof e.el != "string" &&
        (e.el.removeEventListener("pointerenter", A),
        e.el.removeEventListener("pointerleave", N));
    },
    C = () => {
      ai().addEventListener("visibilitychange", R);
    },
    L = () => {
      ai().removeEventListener("visibilitychange", R);
    };
  i("init", () => {
    e.params.autoplay.enabled && (b(), C(), P());
  }),
    i("destroy", () => {
      w(), L(), e.autoplay.running && O();
    }),
    i("_freeModeStaticRelease", () => {
      (h || _) && M();
    }),
    i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? O() : k(!0, !0);
    }),
    i("beforeTransitionStart", (D, I, E) => {
      e.destroyed ||
        !e.autoplay.running ||
        (E || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : O());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          O();
          return;
        }
        (f = !0),
          (h = !1),
          (_ = !1),
          (p = setTimeout(() => {
            (_ = !0), (h = !0), k(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !f)) {
        if (
          (clearTimeout(p),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (h = !1), (f = !1);
          return;
        }
        h && e.params.cssMode && M(), (h = !1), (f = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (v = !0);
    }),
    Object.assign(e.autoplay, { start: P, stop: O, pause: k, resume: M });
}
pt.use([dd, fd]);
const pg = () => {
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
  pd = () => {
    pg();
  };
$.registerPlugin(Z);
const hg = () => {
    const r = document.querySelector("[results-wrap]"),
      e = document.querySelectorAll("[result-card]"),
      t = window.innerWidth < 768,
      i = $.timeline({
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
  hd = () => {
    hg();
  };
function mg(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var md = { exports: {} };
(function (r) {
  (function (e) {
    r.exports ? (r.exports = e()) : (window.intlTelInput = e());
  })(() => {
    var e = (() => {
      var t = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        s = Object.prototype.hasOwnProperty,
        o = (b, w) => {
          for (var C in w) t(b, C, { get: w[C], enumerable: !0 });
        },
        a = (b, w, C, L) => {
          if ((w && typeof w == "object") || typeof w == "function")
            for (let D of n(w))
              !s.call(b, D) &&
                D !== C &&
                t(b, D, {
                  get: () => w[D],
                  enumerable: !(L = i(w, D)) || L.enumerable,
                });
          return b;
        },
        l = (b) => a(t({}, "__esModule", { value: !0 }), b),
        u = {};
      o(u, { Iti: () => k, default: () => N });
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
      for (let b = 0; b < c.length; b++) {
        const w = c[b];
        d[b] = {
          name: "",
          iso2: w[0],
          dialCode: w[1],
          priority: w[2] || 0,
          areaCodes: w[3] || null,
          nodeById: {},
        };
      }
      var m = d,
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
        h = {
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
        p = { ...f, ...h },
        v = 0,
        _ = {
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
        y = [
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
        x = (b) => b.replace(/\D/g, ""),
        g = (b = "") =>
          b
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase(),
        S = (b) => {
          const w = x(b);
          if (w.charAt(0) === "1") {
            const C = w.substr(1, 3);
            return y.indexOf(C) !== -1;
          }
          return !1;
        },
        T = (b, w, C, L) => {
          if (C === 0 && !L) return 0;
          let D = 0;
          for (let I = 0; I < w.length; I++) {
            if ((/[+0-9]/.test(w[I]) && D++, D === b && !L)) return I + 1;
            if (L && D === b + 1) return I;
          }
          return w.length;
        },
        P = (b, w, C) => {
          const L = document.createElement(b);
          return (
            w && Object.entries(w).forEach(([D, I]) => L.setAttribute(D, I)),
            C && C.appendChild(L),
            L
          );
        },
        O = (b) => {
          const { instances: w } = A;
          Object.values(w).forEach((C) => C[b]());
        },
        k = class {
          constructor(b, w = {}) {
            V(this, "id");
            V(this, "promise");
            V(this, "telInput");
            V(this, "highlightedItem");
            V(this, "options");
            V(this, "hadInitialPlaceholder");
            V(this, "isRTL");
            V(this, "selectedCountryData");
            V(this, "countries");
            V(this, "dialCodeMaxLen");
            V(this, "dialCodeToIso2Map");
            V(this, "dialCodes");
            V(this, "countryContainer");
            V(this, "selectedCountry");
            V(this, "selectedCountryInner");
            V(this, "selectedCountryA11yText");
            V(this, "selectedDialCode");
            V(this, "dropdownArrow");
            V(this, "dropdownContent");
            V(this, "searchInput");
            V(this, "searchResultsA11yText");
            V(this, "countryList");
            V(this, "dropdown");
            V(this, "hiddenInput");
            V(this, "hiddenInputCountry");
            V(this, "maxCoreNumberLength");
            V(this, "defaultCountry");
            V(this, "_handleHiddenInputSubmit");
            V(this, "_handleLabelClick");
            V(this, "_handleClickSelectedCountry");
            V(this, "_handleCountryContainerKeydown");
            V(this, "_handleInputEvent");
            V(this, "_handleKeydownEvent");
            V(this, "_handleWindowScroll");
            V(this, "_handleMouseoverCountryList");
            V(this, "_handleClickCountryList");
            V(this, "_handleClickOffToClose");
            V(this, "_handleKeydownOnDropdown");
            V(this, "_handleSearchChange");
            V(this, "resolveAutoCountryPromise");
            V(this, "rejectAutoCountryPromise");
            V(this, "resolveUtilsScriptPromise");
            V(this, "rejectUtilsScriptPromise");
            (this.id = v++),
              (this.telInput = b),
              (this.highlightedItem = null),
              (this.options = Object.assign({}, _, w)),
              (this.hadInitialPlaceholder = !!b.getAttribute("placeholder"));
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
              (this.options.i18n = { ...p, ...this.options.i18n });
            const b = new Promise((C, L) => {
                (this.resolveAutoCountryPromise = C),
                  (this.rejectAutoCountryPromise = L);
              }),
              w = new Promise((C, L) => {
                (this.resolveUtilsScriptPromise = C),
                  (this.rejectUtilsScriptPromise = L);
              });
            (this.promise = Promise.all([b, w])),
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
                  (b) => b.toLowerCase()
                )),
              this._sortCountries();
          }
          _sortCountries() {
            this.countries.sort((b, w) => {
              const { countryOrder: C } = this.options;
              if (C) {
                const L = C.indexOf(b.iso2),
                  D = C.indexOf(w.iso2),
                  I = L > -1,
                  E = D > -1;
                if (I || E) return I && E ? L - D : I ? -1 : 1;
              }
              return b.name < w.name ? -1 : b.name > w.name ? 1 : 0;
            });
          }
          _addToDialCodeMap(b, w, C) {
            w.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = w.length),
              this.dialCodeToIso2Map.hasOwnProperty(w) ||
                (this.dialCodeToIso2Map[w] = []);
            for (let D = 0; D < this.dialCodeToIso2Map[w].length; D++)
              if (this.dialCodeToIso2Map[w][D] === b) return;
            const L = C !== void 0 ? C : this.dialCodeToIso2Map[w].length;
            this.dialCodeToIso2Map[w][L] = b;
          }
          _processAllCountries() {
            const { onlyCountries: b, excludeCountries: w } = this.options;
            if (b.length) {
              const C = b.map((L) => L.toLowerCase());
              this.countries = m.filter((L) => C.indexOf(L.iso2) > -1);
            } else if (w.length) {
              const C = w.map((L) => L.toLowerCase());
              this.countries = m.filter((L) => C.indexOf(L.iso2) === -1);
            } else this.countries = m;
          }
          _translateCountryNames() {
            for (let b = 0; b < this.countries.length; b++) {
              const w = this.countries[b].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(w) &&
                (this.countries[b].name = this.options.i18n[w]);
            }
          }
          _processDialCodes() {
            (this.dialCodes = {}),
              (this.dialCodeMaxLen = 0),
              (this.dialCodeToIso2Map = {});
            for (let b = 0; b < this.countries.length; b++) {
              const w = this.countries[b];
              this.dialCodes[w.dialCode] || (this.dialCodes[w.dialCode] = !0),
                this._addToDialCodeMap(w.iso2, w.dialCode, w.priority);
            }
            for (let b = 0; b < this.countries.length; b++) {
              const w = this.countries[b];
              if (w.areaCodes) {
                const C = this.dialCodeToIso2Map[w.dialCode][0];
                for (let L = 0; L < w.areaCodes.length; L++) {
                  const D = w.areaCodes[L];
                  for (let I = 1; I < D.length; I++) {
                    const E = w.dialCode + D.substr(0, I);
                    this._addToDialCodeMap(C, E),
                      this._addToDialCodeMap(w.iso2, E);
                  }
                  this._addToDialCodeMap(w.iso2, w.dialCode + D);
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
              allowDropdown: b,
              separateDialCode: w,
              showFlags: C,
              containerClass: L,
              hiddenInput: D,
              dropdownContainer: I,
              fixDropdownWidth: E,
              useFullscreenPopup: F,
              i18n: q,
            } = this.options;
            let Q = "iti";
            b && (Q += " iti--allow-dropdown"),
              C && (Q += " iti--show-flags"),
              L && (Q += ` ${L}`),
              F || (Q += " iti--inline-dropdown");
            const X = P("div", { class: Q });
            if (
              (this.telInput.parentNode?.insertBefore(X, this.telInput), b || C)
            ) {
              (this.countryContainer = P(
                "div",
                { class: "iti__country-container" },
                X
              )),
                (this.selectedCountry = P(
                  "button",
                  {
                    type: "button",
                    class: "iti__selected-country",
                    ...(b && {
                      "aria-expanded": "false",
                      "aria-label": this.options.i18n.selectedCountryAriaLabel,
                      "aria-haspopup": "true",
                      "aria-controls": `iti-${this.id}__dropdown-content`,
                      role: "combobox",
                    }),
                  },
                  this.countryContainer
                ));
              const ie = P(
                "div",
                { class: "iti__selected-country-primary" },
                this.selectedCountry
              );
              if (
                ((this.selectedCountryInner = P("div", null, ie)),
                (this.selectedCountryA11yText = P(
                  "span",
                  { class: "iti__a11y-text" },
                  this.selectedCountryInner
                )),
                this.telInput.disabled
                  ? this.selectedCountry.setAttribute("aria-disabled", "true")
                  : this.selectedCountry.setAttribute("tabindex", "0"),
                b &&
                  (this.dropdownArrow = P(
                    "div",
                    { class: "iti__arrow", "aria-hidden": "true" },
                    ie
                  )),
                w &&
                  (this.selectedDialCode = P(
                    "div",
                    { class: "iti__selected-dial-code" },
                    this.selectedCountry
                  )),
                b)
              ) {
                const ue = E ? "" : "iti--flexible-dropdown-width";
                if (
                  ((this.dropdownContent = P("div", {
                    id: `iti-${this.id}__dropdown-content`,
                    class: `iti__dropdown-content iti__hide ${ue}`,
                  })),
                  (this.searchInput = P(
                    "input",
                    {
                      type: "text",
                      class: "iti__search-input",
                      placeholder: q.searchPlaceholder,
                      role: "combobox",
                      "aria-expanded": "true",
                      "aria-label": q.searchPlaceholder,
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
                      "aria-label": q.countryListAriaLabel,
                    },
                    this.dropdownContent
                  )),
                  this._appendListItems(this.countries, "iti__standard"),
                  this._updateSearchResultsText(),
                  I)
                ) {
                  let de = "iti iti--container";
                  F
                    ? (de += " iti--fullscreen-popup")
                    : (de += " iti--inline-dropdown"),
                    (this.dropdown = P("div", { class: de })),
                    this.dropdown.appendChild(this.dropdownContent);
                } else this.countryContainer.appendChild(this.dropdownContent);
              }
            }
            if ((X.appendChild(this.telInput), D)) {
              const ie = this.telInput.getAttribute("name") || "",
                ue = D(ie);
              ue.phone &&
                ((this.hiddenInput = P("input", {
                  type: "hidden",
                  name: ue.phone,
                })),
                X.appendChild(this.hiddenInput)),
                ue.country &&
                  ((this.hiddenInputCountry = P("input", {
                    type: "hidden",
                    name: ue.country,
                  })),
                  X.appendChild(this.hiddenInputCountry));
            }
          }
          _appendListItems(b, w) {
            for (let C = 0; C < b.length; C++) {
              const L = b[C],
                D = P(
                  "li",
                  {
                    id: `iti-${this.id}__item-${L.iso2}`,
                    class: `iti__country ${w}`,
                    tabindex: "-1",
                    role: "option",
                    "data-dial-code": L.dialCode,
                    "data-country-code": L.iso2,
                    "aria-selected": "false",
                  },
                  this.countryList
                );
              L.nodeById[this.id] = D;
              let I = "";
              this.options.showFlags &&
                (I += `<div class='iti__flag-box'><div class='iti__flag iti__${L.iso2}'></div></div>`),
                (I += `<span class='iti__country-name'>${L.name}</span>`),
                (I += `<span class='iti__dial-code'>+${L.dialCode}</span>`),
                D.insertAdjacentHTML("beforeend", I);
            }
          }
          _setInitialState(b = !1) {
            const w = this.telInput.getAttribute("value"),
              C = this.telInput.value,
              D =
                w && w.charAt(0) === "+" && (!C || C.charAt(0) !== "+") ? w : C,
              I = this._getDialCode(D),
              E = S(D),
              { initialCountry: F } = this.options;
            if (I && !E) this._updateCountryFromNumber(D);
            else if (F !== "auto" || b) {
              const q = F ? F.toLowerCase() : "";
              q && this._getCountryData(q, !0)
                ? this._setCountry(q)
                : I && E
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
            const b = this.telInput.closest("label");
            b && b.addEventListener("click", this._handleLabelClick),
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
            this.options.utilsScript && !A.utils
              ? A.documentReady()
                ? A.loadUtils(this.options.utilsScript)
                : window.addEventListener("load", () => {
                    A.loadUtils(this.options.utilsScript);
                  })
              : this.resolveUtilsScriptPromise(),
              this.options.initialCountry === "auto" &&
              !this.selectedCountryData.iso2
                ? this._loadAutoCountry()
                : this.resolveAutoCountryPromise();
          }
          _loadAutoCountry() {
            A.autoCountry
              ? this.handleAutoCountry()
              : A.startedLoadingAutoCountry ||
                ((A.startedLoadingAutoCountry = !0),
                typeof this.options.geoIpLookup == "function" &&
                  this.options.geoIpLookup(
                    (b = "") => {
                      const w = b.toLowerCase();
                      w && this._getCountryData(w, !0)
                        ? ((A.autoCountry = w),
                          setTimeout(() => O("handleAutoCountry")))
                        : (this._setInitialState(!0),
                          O("rejectAutoCountryPromise"));
                    },
                    () => {
                      this._setInitialState(!0), O("rejectAutoCountryPromise");
                    }
                  ));
          }
          _initTelInputListeners() {
            const {
              strictMode: b,
              formatAsYouType: w,
              separateDialCode: C,
            } = this.options;
            let L = !1;
            (this._handleInputEvent = (D) => {
              this._updateCountryFromNumber(this.telInput.value) &&
                this._triggerCountryChange();
              const I = D && D.data && /[^+0-9]/.test(D.data),
                E =
                  D && D.inputType === "insertFromPaste" && this.telInput.value;
              if (
                (I || (E && !b)
                  ? (L = !0)
                  : /[^+0-9]/.test(this.telInput.value) || (L = !1),
                w && !L)
              ) {
                const F = this.telInput.selectionStart || 0,
                  Q = this.telInput.value
                    .substring(0, F)
                    .replace(/[^+0-9]/g, "").length,
                  X = D && D.inputType === "deleteContentForward",
                  ie = this._formatNumberAsYouType(),
                  ue = T(Q, ie, F, X);
                (this.telInput.value = ie),
                  this.telInput.setSelectionRange(ue, ue);
              }
            }),
              this.telInput.addEventListener("input", this._handleInputEvent),
              (b || C) &&
                ((this._handleKeydownEvent = (D) => {
                  if (
                    D.key &&
                    D.key.length === 1 &&
                    !D.altKey &&
                    !D.ctrlKey &&
                    !D.metaKey
                  ) {
                    if (C && D.key === "+") {
                      D.preventDefault(),
                        this._openDropdown(),
                        (this.searchInput.value = "+"),
                        this._filterCountries("", !0);
                      return;
                    }
                    if (b) {
                      const I =
                          this.telInput.selectionStart === 0 && D.key === "+",
                        E = /^[0-9]$/.test(D.key),
                        F = I || E,
                        q = this._getFullNumber(),
                        Q = A.utils.getCoreNumber(
                          q,
                          this.selectedCountryData.iso2
                        ),
                        X =
                          this.maxCoreNumberLength &&
                          Q.length >= this.maxCoreNumberLength;
                      (!F || X) && D.preventDefault();
                    }
                  }
                }),
                this.telInput.addEventListener(
                  "keydown",
                  this._handleKeydownEvent
                ));
          }
          _cap(b) {
            const w = parseInt(
              this.telInput.getAttribute("maxlength") || "",
              10
            );
            return w && b.length > w ? b.substr(0, w) : b;
          }
          _trigger(b) {
            const w = new Event(b, { bubbles: !0, cancelable: !0 });
            this.telInput.dispatchEvent(w);
          }
          _openDropdown() {
            const { fixDropdownWidth: b } = this.options;
            b &&
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
              const b = this.telInput.getBoundingClientRect(),
                w = this.telInput.offsetHeight;
              this.options.dropdownContainer &&
                ((this.dropdown.style.top = `${b.top + w}px`),
                (this.dropdown.style.left = `${b.left}px`),
                (this._handleWindowScroll = () => this._closeDropdown()),
                window.addEventListener("scroll", this._handleWindowScroll));
            }
          }
          _bindDropdownListeners() {
            (this._handleMouseoverCountryList = (L) => {
              const D = L.target?.closest(".iti__country");
              D && this._highlightListItem(D, !1);
            }),
              this.countryList.addEventListener(
                "mouseover",
                this._handleMouseoverCountryList
              ),
              (this._handleClickCountryList = (L) => {
                const D = L.target?.closest(".iti__country");
                D && this._selectListItem(D);
              }),
              this.countryList.addEventListener(
                "click",
                this._handleClickCountryList
              );
            let b = !0;
            (this._handleClickOffToClose = () => {
              b || this._closeDropdown(), (b = !1);
            }),
              document.documentElement.addEventListener(
                "click",
                this._handleClickOffToClose
              ),
              (this._handleKeydownOnDropdown = (L) => {
                ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(L.key) &&
                  (L.preventDefault(),
                  L.stopPropagation(),
                  L.key === "ArrowUp" || L.key === "ArrowDown"
                    ? this._handleUpDownKey(L.key)
                    : L.key === "Enter"
                    ? this._handleEnterKey()
                    : L.key === "Escape" && this._closeDropdown());
              }),
              document.addEventListener(
                "keydown",
                this._handleKeydownOnDropdown
              );
            const w = () => {
              const L = this.searchInput.value.trim();
              L ? this._filterCountries(L) : this._filterCountries("", !0);
            };
            let C = null;
            (this._handleSearchChange = () => {
              C && clearTimeout(C),
                (C = setTimeout(() => {
                  w(), (C = null);
                }, 100));
            }),
              this.searchInput.addEventListener(
                "input",
                this._handleSearchChange
              ),
              this.searchInput.addEventListener("click", (L) =>
                L.stopPropagation()
              );
          }
          _filterCountries(b, w = !1) {
            let C = !0;
            this.countryList.innerHTML = "";
            const L = g(b);
            for (let D = 0; D < this.countries.length; D++) {
              const I = this.countries[D],
                E = g(I.name),
                F = `+${I.dialCode}`;
              if (w || E.includes(L) || F.includes(L) || I.iso2.includes(L)) {
                const q = I.nodeById[this.id];
                q && this.countryList.appendChild(q),
                  C && (this._highlightListItem(q, !1), (C = !1));
              }
            }
            (this.countryList.scrollTop = 0), this._updateSearchResultsText();
          }
          _updateSearchResultsText() {
            const { i18n: b } = this.options,
              w = this.countryList.childElementCount;
            let C;
            w === 0
              ? (C = b.zeroSearchResults)
              : w === 1
              ? (C = b.oneSearchResult)
              : (C = b.multipleSearchResults.replace("${count}", w.toString())),
              (this.searchResultsA11yText.textContent = C);
          }
          _handleUpDownKey(b) {
            let w =
              b === "ArrowUp"
                ? this.highlightedItem?.previousElementSibling
                : this.highlightedItem?.nextElementSibling;
            !w &&
              this.countryList.childElementCount > 1 &&
              (w =
                b === "ArrowUp"
                  ? this.countryList.lastElementChild
                  : this.countryList.firstElementChild),
              w && (this._scrollTo(w), this._highlightListItem(w, !1));
          }
          _handleEnterKey() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
          _updateValFromNumber(b) {
            let w = b;
            if (
              this.options.formatOnDisplay &&
              A.utils &&
              this.selectedCountryData
            ) {
              const C =
                  this.options.nationalMode ||
                  (w.charAt(0) !== "+" && !this.options.separateDialCode),
                { NATIONAL: L, INTERNATIONAL: D } = A.utils.numberFormat,
                I = C ? L : D;
              w = A.utils.formatNumber(w, this.selectedCountryData.iso2, I);
            }
            (w = this._beforeSetNumber(w)), (this.telInput.value = w);
          }
          _updateCountryFromNumber(b) {
            const w = b.indexOf("+");
            let C = w ? b.substring(w) : b;
            const L = this.selectedCountryData.dialCode;
            C &&
              L === "1" &&
              C.charAt(0) !== "+" &&
              (C.charAt(0) !== "1" && (C = `1${C}`), (C = `+${C}`)),
              this.options.separateDialCode &&
                L &&
                C.charAt(0) !== "+" &&
                (C = `+${L}${C}`);
            const I = this._getDialCode(C, !0),
              E = x(C);
            let F = null;
            if (I) {
              const q = this.dialCodeToIso2Map[x(I)],
                Q =
                  q.indexOf(this.selectedCountryData.iso2) !== -1 &&
                  E.length <= I.length - 1;
              if (!(L === "1" && S(E)) && !Q) {
                for (let ie = 0; ie < q.length; ie++)
                  if (q[ie]) {
                    F = q[ie];
                    break;
                  }
              }
            } else
              C.charAt(0) === "+" && E.length
                ? (F = "")
                : (!C || C === "+") &&
                  !this.selectedCountryData.iso2 &&
                  (F = this.defaultCountry);
            return F !== null ? this._setCountry(F) : !1;
          }
          _highlightListItem(b, w) {
            const C = this.highlightedItem;
            C &&
              (C.classList.remove("iti__highlight"),
              C.setAttribute("aria-selected", "false")),
              (this.highlightedItem = b),
              this.highlightedItem.classList.add("iti__highlight"),
              this.highlightedItem.setAttribute("aria-selected", "true"),
              this.selectedCountry.setAttribute(
                "aria-activedescendant",
                b.getAttribute("id") || ""
              ),
              this.searchInput.setAttribute(
                "aria-activedescendant",
                b.getAttribute("id") || ""
              ),
              w && this.highlightedItem.focus();
          }
          _getCountryData(b, w) {
            for (let C = 0; C < this.countries.length; C++)
              if (this.countries[C].iso2 === b) return this.countries[C];
            if (w) return null;
            throw new Error(`No country data for '${b}'`);
          }
          _setCountry(b) {
            const { separateDialCode: w, showFlags: C, i18n: L } = this.options,
              D = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (
              ((this.selectedCountryData = b
                ? this._getCountryData(b, !1) || {}
                : {}),
              this.selectedCountryData.iso2 &&
                (this.defaultCountry = this.selectedCountryData.iso2),
              this.selectedCountryInner)
            ) {
              let I = "",
                E = "";
              b && C
                ? ((I = `iti__flag iti__${b}`),
                  (E = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                : ((I = "iti__flag iti__globe"), (E = L.noCountrySelected)),
                (this.selectedCountryInner.className = I),
                (this.selectedCountryA11yText.textContent = E);
            }
            if ((this._setSelectedCountryTitleAttribute(b, w), w)) {
              const I = this.selectedCountryData.dialCode
                ? `+${this.selectedCountryData.dialCode}`
                : "";
              this.selectedDialCode.innerHTML = I;
              const F =
                (this.selectedCountry.offsetWidth ||
                  this._getHiddenSelectedCountryWidth()) + 8;
              this.isRTL
                ? (this.telInput.style.paddingRight = `${F}px`)
                : (this.telInput.style.paddingLeft = `${F}px`);
            }
            return (
              this._updatePlaceholder(), this._updateMaxLength(), D.iso2 !== b
            );
          }
          _updateMaxLength() {
            if (this.options.strictMode && A.utils)
              if (this.selectedCountryData.iso2) {
                const b =
                  A.utils.numberType[this.options.placeholderNumberType];
                let w = A.utils.getExampleNumber(
                    this.selectedCountryData.iso2,
                    !1,
                    b,
                    !0
                  ),
                  C = w;
                for (
                  ;
                  A.utils.isPossibleNumber(w, this.selectedCountryData.iso2);

                )
                  (C = w), (w += "0");
                const L = A.utils.getCoreNumber(
                  C,
                  this.selectedCountryData.iso2
                );
                this.maxCoreNumberLength = L.length;
              } else this.maxCoreNumberLength = null;
          }
          _setSelectedCountryTitleAttribute(b = null, w) {
            if (!this.selectedCountry) return;
            let C;
            b && !w
              ? (C = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
              : b
              ? (C = this.selectedCountryData.name)
              : (C = "Unknown"),
              this.selectedCountry.setAttribute("title", C);
          }
          _getHiddenSelectedCountryWidth() {
            if (this.telInput.parentNode) {
              const b = this.telInput.parentNode.cloneNode(!1);
              (b.style.visibility = "hidden"), document.body.appendChild(b);
              const w = this.countryContainer.cloneNode();
              b.appendChild(w);
              const C = this.selectedCountry.cloneNode(!0);
              w.appendChild(C);
              const L = C.offsetWidth;
              return document.body.removeChild(b), L;
            }
            return 0;
          }
          _updatePlaceholder() {
            const {
                autoPlaceholder: b,
                placeholderNumberType: w,
                nationalMode: C,
                customPlaceholder: L,
              } = this.options,
              D =
                b === "aggressive" ||
                (!this.hadInitialPlaceholder && b === "polite");
            if (A.utils && D) {
              const I = A.utils.numberType[w];
              let E = this.selectedCountryData.iso2
                ? A.utils.getExampleNumber(this.selectedCountryData.iso2, C, I)
                : "";
              (E = this._beforeSetNumber(E)),
                typeof L == "function" && (E = L(E, this.selectedCountryData)),
                this.telInput.setAttribute("placeholder", E);
            }
          }
          _selectListItem(b) {
            const w = this._setCountry(b.getAttribute("data-country-code"));
            this._closeDropdown(),
              this._updateDialCode(b.getAttribute("data-dial-code")),
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
          _scrollTo(b) {
            const w = this.countryList,
              C = document.documentElement.scrollTop,
              L = w.offsetHeight,
              D = w.getBoundingClientRect().top + C,
              I = D + L,
              E = b.offsetHeight,
              F = b.getBoundingClientRect().top + C,
              q = F + E,
              Q = F - D + w.scrollTop;
            if (F < D) w.scrollTop = Q;
            else if (q > I) {
              const X = L - E;
              w.scrollTop = Q - X;
            }
          }
          _updateDialCode(b) {
            const w = this.telInput.value,
              C = `+${b}`;
            let L;
            if (w.charAt(0) === "+") {
              const D = this._getDialCode(w);
              D ? (L = w.replace(D, C)) : (L = C), (this.telInput.value = L);
            }
          }
          _getDialCode(b, w) {
            let C = "";
            if (b.charAt(0) === "+") {
              let L = "";
              for (let D = 0; D < b.length; D++) {
                const I = b.charAt(D);
                if (!isNaN(parseInt(I, 10))) {
                  if (((L += I), w))
                    this.dialCodeToIso2Map[L] && (C = b.substr(0, D + 1));
                  else if (this.dialCodes[L]) {
                    C = b.substr(0, D + 1);
                    break;
                  }
                  if (L.length === this.dialCodeMaxLen) break;
                }
              }
            }
            return C;
          }
          _getFullNumber() {
            const b = this.telInput.value.trim(),
              { dialCode: w } = this.selectedCountryData;
            let C;
            const L = x(b);
            return (
              this.options.separateDialCode && b.charAt(0) !== "+" && w && L
                ? (C = `+${w}`)
                : (C = ""),
              C + b
            );
          }
          _beforeSetNumber(b) {
            let w = b;
            if (this.options.separateDialCode) {
              let C = this._getDialCode(w);
              if (C) {
                C = `+${this.selectedCountryData.dialCode}`;
                const L =
                  w[C.length] === " " || w[C.length] === "-"
                    ? C.length + 1
                    : C.length;
                w = w.substr(L);
              }
            }
            return this._cap(w);
          }
          _triggerCountryChange() {
            this._trigger("countrychange");
          }
          _formatNumberAsYouType() {
            const b = this._getFullNumber(),
              w = A.utils
                ? A.utils.formatNumberAsYouType(
                    b,
                    this.selectedCountryData.iso2
                  )
                : b,
              { dialCode: C } = this.selectedCountryData;
            return this.options.separateDialCode &&
              this.telInput.value.charAt(0) !== "+" &&
              w.includes(`+${C}`)
              ? (w.split(`+${C}`)[1] || "").trim()
              : w;
          }
          handleAutoCountry() {
            this.options.initialCountry === "auto" &&
              A.autoCountry &&
              ((this.defaultCountry = A.autoCountry),
              this.telInput.value || this.setCountry(this.defaultCountry),
              this.resolveAutoCountryPromise());
          }
          handleUtils() {
            A.utils &&
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
              const C = this.telInput.closest("label");
              C && C.removeEventListener("click", this._handleLabelClick);
            }
            const { form: b } = this.telInput;
            this._handleHiddenInputSubmit &&
              b &&
              b.removeEventListener("submit", this._handleHiddenInputSubmit),
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
              delete A.instances[this.id];
          }
          getExtension() {
            return A.utils
              ? A.utils.getExtension(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : "";
          }
          getNumber(b) {
            if (A.utils) {
              const { iso2: w } = this.selectedCountryData;
              return A.utils.formatNumber(this._getFullNumber(), w, b);
            }
            return "";
          }
          getNumberType() {
            return A.utils
              ? A.utils.getNumberType(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : -99;
          }
          getSelectedCountryData() {
            return this.selectedCountryData;
          }
          getValidationError() {
            if (A.utils) {
              const { iso2: b } = this.selectedCountryData;
              return A.utils.getValidationError(this._getFullNumber(), b);
            }
            return -99;
          }
          isValidNumber(b = !0) {
            const w = this._getFullNumber();
            return /\p{L}/u.test(w)
              ? !1
              : A.utils
              ? A.utils.isPossibleNumber(w, this.selectedCountryData.iso2, b)
              : null;
          }
          isValidNumberPrecise() {
            const b = this._getFullNumber();
            return /\p{L}/u.test(b)
              ? !1
              : A.utils
              ? A.utils.isValidNumber(b, this.selectedCountryData.iso2)
              : null;
          }
          setCountry(b) {
            const w = b.toLowerCase();
            this.selectedCountryData.iso2 !== w &&
              (this._setCountry(w),
              this._updateDialCode(this.selectedCountryData.dialCode),
              this._triggerCountryChange());
          }
          setNumber(b) {
            const w = this._updateCountryFromNumber(b);
            this._updateValFromNumber(b), w && this._triggerCountryChange();
          }
          setPlaceholderNumberType(b) {
            (this.options.placeholderNumberType = b), this._updatePlaceholder();
          }
        },
        M = (b, w, C) => {
          const L = document.createElement("script");
          (L.onload = () => {
            window.intlTelInputUtils &&
              ((A.utils = window.intlTelInputUtils),
              delete window.intlTelInputUtils,
              window.intlTelInputUtilsBackup &&
                ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                delete window.intlTelInputUtilsBackup)),
              O("handleUtils"),
              w && w();
          }),
            (L.onerror = () => {
              O("rejectUtilsScriptPromise"), C && C();
            }),
            (L.className = "iti-load-utils"),
            (L.async = !0),
            (L.src = b),
            document.body.appendChild(L);
        },
        R = (b) =>
          !A.utils && !A.startedLoadingUtilsScript
            ? ((A.startedLoadingUtilsScript = !0),
              new Promise((w, C) => M(b, w, C)))
            : null,
        A = Object.assign(
          (b, w) => {
            const C = new k(b, w);
            return (
              C._init(),
              b.setAttribute("data-intl-tel-input-id", C.id.toString()),
              (A.instances[C.id] = C),
              C
            );
          },
          {
            defaults: _,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => m,
            getInstance: (b) => {
              const w = b.getAttribute("data-intl-tel-input-id");
              return w ? A.instances[w] : null;
            },
            instances: {},
            loadUtils: R,
            version: "22.0.0",
          }
        ),
        N = A;
      return l(u);
    })();
    return e.default;
  });
})(md);
var gg = md.exports;
const vg = mg(gg),
  _g = () => {
    function r(i) {
      const n = document.querySelector(`[calc-phone="${i}"]`),
        s = document.querySelector(`[dial-code="${i}"]`),
        o = document.querySelector(`[hidden-country-name="${i}"]`),
        a = document.querySelector(`[hidden-full-phone="${i}"]`);
      if (!n || !s || !o || !a) return;
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
  nr = () => {
    _g();
  };
var yg = "1.3.4";
function gd(r, e, t) {
  return Math.max(r, Math.min(e, t));
}
function wg(r, e, t) {
  return (1 - t) * r + t * e;
}
function bg(r, e, t, i) {
  return wg(r, e, 1 - Math.exp(-t * i));
}
function Sg(r, e) {
  return ((r % e) + e) % e;
}
var Tg = class {
  constructor() {
    V(this, "isRunning", !1);
    V(this, "value", 0);
    V(this, "from", 0);
    V(this, "to", 0);
    V(this, "currentTime", 0);
    V(this, "lerp");
    V(this, "duration");
    V(this, "easing");
    V(this, "onUpdate");
  }
  advance(r) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += r;
      const t = gd(0, this.currentTime / this.duration, 1);
      e = t >= 1;
      const i = e ? 1 : this.easing(t);
      this.value = this.from + (this.to - this.from) * i;
    } else
      this.lerp
        ? ((this.value = bg(this.value, this.to, this.lerp * 60, r)),
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
function xg(r, e) {
  let t;
  return function (...i) {
    let n = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), r.apply(n, i);
      }, e));
  };
}
var Cg = class {
    constructor(r, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
      V(this, "width", 0);
      V(this, "height", 0);
      V(this, "scrollHeight", 0);
      V(this, "scrollWidth", 0);
      V(this, "debouncedResize");
      V(this, "wrapperResizeObserver");
      V(this, "contentResizeObserver");
      V(this, "resize", () => {
        this.onWrapperResize(), this.onContentResize();
      });
      V(this, "onWrapperResize", () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      });
      V(this, "onContentResize", () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      });
      (this.wrapper = r),
        (this.content = e),
        t &&
          ((this.debouncedResize = xg(this.resize, i)),
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
  vd = class {
    constructor() {
      V(this, "events", {});
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
  cu = 100 / 6,
  qi = { passive: !1 },
  Eg = class {
    constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      V(this, "touchStart", { x: 0, y: 0 });
      V(this, "lastDelta", { x: 0, y: 0 });
      V(this, "window", { width: 0, height: 0 });
      V(this, "emitter", new vd());
      V(this, "onTouchStart", (r) => {
        const { clientX: e, clientY: t } = r.targetTouches
          ? r.targetTouches[0]
          : r;
        (this.touchStart.x = e),
          (this.touchStart.y = t),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: r });
      });
      V(this, "onTouchMove", (r) => {
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
      V(this, "onTouchEnd", (r) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: r,
        });
      });
      V(this, "onWheel", (r) => {
        let { deltaX: e, deltaY: t, deltaMode: i } = r;
        const n = i === 1 ? cu : i === 2 ? this.window.width : 1,
          s = i === 1 ? cu : i === 2 ? this.window.height : 1;
        (e *= n),
          (t *= s),
          (e *= this.options.wheelMultiplier),
          (t *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: r });
      });
      V(this, "onWindowResize", () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      });
      (this.element = r),
        (this.options = e),
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, qi),
        this.element.addEventListener("touchstart", this.onTouchStart, qi),
        this.element.addEventListener("touchmove", this.onTouchMove, qi),
        this.element.addEventListener("touchend", this.onTouchEnd, qi);
    }
    on(r, e) {
      return this.emitter.on(r, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, qi),
        this.element.removeEventListener("touchstart", this.onTouchStart, qi),
        this.element.removeEventListener("touchmove", this.onTouchMove, qi),
        this.element.removeEventListener("touchend", this.onTouchEnd, qi);
    }
  },
  du = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
  Ag = class {
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
      gestureOrientation: m = "vertical",
      touchMultiplier: f = 1,
      wheelMultiplier: h = 1,
      autoResize: p = !0,
      prevent: v,
      virtualScroll: _,
      overscroll: y = !0,
      autoRaf: x = !1,
      anchors: g = !1,
      autoToggle: S = !1,
      allowNestedScroll: T = !1,
      __experimental__naiveDimensions: P = !1,
    } = {}) {
      V(this, "_isScrolling", !1);
      V(this, "_isStopped", !1);
      V(this, "_isLocked", !1);
      V(this, "_preventNextNativeScrollEvent", !1);
      V(this, "_resetVelocityTimeout", null);
      V(this, "__rafID", null);
      V(this, "isTouching");
      V(this, "time", 0);
      V(this, "userData", {});
      V(this, "lastVelocity", 0);
      V(this, "velocity", 0);
      V(this, "direction", 0);
      V(this, "options");
      V(this, "targetScroll");
      V(this, "animatedScroll");
      V(this, "animate", new Tg());
      V(this, "emitter", new vd());
      V(this, "dimensions");
      V(this, "virtualScroll");
      V(this, "onScrollEnd", (r) => {
        r instanceof CustomEvent ||
          ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
            r.stopPropagation());
      });
      V(this, "dispatchScrollendEvent", () => {
        this.options.wrapper.dispatchEvent(
          new CustomEvent("scrollend", {
            bubbles: this.options.wrapper === window,
            detail: { lenisScrollEnd: !0 },
          })
        );
      });
      V(this, "onTransitionEnd", (r) => {
        if (r.propertyName.includes("overflow")) {
          const e = this.isHorizontal ? "overflow-x" : "overflow-y",
            t = getComputedStyle(this.rootElement)[e];
          ["hidden", "clip"].includes(t) ? this.stop() : this.start();
        }
      });
      V(this, "onClick", (r) => {
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
      V(this, "onPointerDown", (r) => {
        r.button === 1 && this.reset();
      });
      V(this, "onVirtualScroll", (r) => {
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
            (v) =>
              v instanceof HTMLElement &&
              ((typeof c == "function" && c?.(v)) ||
                v.hasAttribute?.("data-lenis-prevent") ||
                (n && v.hasAttribute?.("data-lenis-prevent-touch")) ||
                (s && v.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll &&
                  this.checkNestedScroll(v, { deltaX: e, deltaY: t })))
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
        let m = t;
        this.options.gestureOrientation === "both"
          ? (m = Math.abs(t) > Math.abs(e) ? t : e)
          : this.options.gestureOrientation === "horizontal" && (m = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (this.animatedScroll === 0 && t > 0) ||
                (this.animatedScroll === this.limit && t < 0)))) &&
            (i.lenisStopPropagation = !0),
          i.preventDefault();
        const f = n && this.options.syncTouch,
          p = n && i.type === "touchend" && Math.abs(m) > 5;
        p && (m = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(this.targetScroll + m, {
            programmatic: !1,
            ...(f
              ? { lerp: p ? this.options.syncTouchLerp : 1 }
              : {
                  lerp: this.options.lerp,
                  duration: this.options.duration,
                  easing: this.options.easing,
                }),
          });
      });
      V(this, "onNativeScroll", () => {
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
      V(this, "raf", (r) => {
        const e = r - (this.time || r);
        (this.time = r),
          this.animate.advance(e * 0.001),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      });
      (window.lenisVersion = yg),
        (!r || r === document.documentElement) && (r = window),
        typeof a == "number" && typeof l != "function"
          ? (l = du)
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
          gestureOrientation: m,
          orientation: d,
          touchMultiplier: f,
          wheelMultiplier: h,
          autoResize: p,
          prevent: v,
          virtualScroll: _,
          overscroll: y,
          autoRaf: x,
          anchors: g,
          autoToggle: S,
          allowNestedScroll: T,
          __experimental__naiveDimensions: P,
        }),
        (this.dimensions = new Cg(r, e, { autoResize: p })),
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
        (this.virtualScroll = new Eg(t, {
          touchMultiplier: f,
          wheelMultiplier: h,
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
          let m;
          if (
            (typeof r == "string"
              ? (m = document.querySelector(r))
              : r instanceof HTMLElement && r?.nodeType && (m = r),
            m)
          ) {
            if (this.options.wrapper !== window) {
              const h = this.rootElement.getBoundingClientRect();
              e -= this.isHorizontal ? h.left : h.top;
            }
            const f = m.getBoundingClientRect();
            r = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
          }
        }
        if (typeof r == "number") {
          if (((r += e), (r = Math.round(r)), this.options.infinite)) {
            if (c) {
              this.targetScroll = this.animatedScroll = this.scroll;
              const m = r - this.animatedScroll;
              m > this.limit / 2
                ? (r = r - this.limit)
                : m < -this.limit / 2 && (r = r + this.limit);
            }
          } else r = gd(0, r, this.limit);
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
              ? (s = du)
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
              onUpdate: (m, f) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = m - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = m),
                  this.setScroll(this.scroll),
                  c && (this.targetScroll = m),
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
      let s, o, a, l, u, c, d, m;
      const f = this.options.gestureOrientation;
      if (i - (n.time ?? 0) > 2e3) {
        n.time = Date.now();
        const S = window.getComputedStyle(r);
        n.computedStyle = S;
        const T = S.overflowX,
          P = S.overflowY;
        if (
          ((s = ["auto", "overlay", "scroll"].includes(T)),
          (o = ["auto", "overlay", "scroll"].includes(P)),
          (n.hasOverflowX = s),
          (n.hasOverflowY = o),
          (!s && !o) || (f === "vertical" && !o) || (f === "horizontal" && !s))
        )
          return !1;
        (u = r.scrollWidth),
          (c = r.scrollHeight),
          (d = r.clientWidth),
          (m = r.clientHeight),
          (a = u > d),
          (l = c > m),
          (n.isScrollableX = a),
          (n.isScrollableY = l),
          (n.scrollWidth = u),
          (n.scrollHeight = c),
          (n.clientWidth = d),
          (n.clientHeight = m);
      } else
        (a = n.isScrollableX),
          (l = n.isScrollableY),
          (s = n.hasOverflowX),
          (o = n.hasOverflowY),
          (u = n.scrollWidth),
          (c = n.scrollHeight),
          (d = n.clientWidth),
          (m = n.clientHeight);
      if (
        (!s && !o) ||
        (!a && !l) ||
        (f === "vertical" && (!o || !l)) ||
        (f === "horizontal" && (!s || !a))
      )
        return !1;
      let h;
      if (f === "horizontal") h = "x";
      else if (f === "vertical") h = "y";
      else {
        const S = e !== 0,
          T = t !== 0;
        S && s && a && (h = "x"), T && o && l && (h = "y");
      }
      if (!h) return !1;
      let p, v, _, y, x;
      if (h === "x") (p = r.scrollLeft), (v = u - d), (_ = e), (y = s), (x = a);
      else if (h === "y")
        (p = r.scrollTop), (v = c - m), (_ = t), (y = o), (x = l);
      else return !1;
      return (_ > 0 ? p < v : p > 0) && y && x;
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
        ? Sg(this.animatedScroll, this.limit)
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
$.registerPlugin(Z);
let Ds;
const Pg = () => {
    (Ds = new Ag({
      autoRaf: !0,
      lerp: 0.1,
      duration: 1.2,
      easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
      autoRaf: !0,
    })),
      Ds.on("scroll", Z.update),
      $.ticker.add((r) => {
        Ds.raf(r * 1e3);
      }),
      $.ticker.lagSmoothing(0);
  },
  Lg = () => {
    Pg();
  },
  fu = () => Ds;
let cr,
  zr,
  Br = !1;
const Og = () => {
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
      m = document.querySelector('[hidden-final-result="rev-opportunity"]'),
      f = document.querySelector('[hidden-final-result="conversion-rate"]'),
      h = () => {
        const R = e.getAttribute("final-value"),
          A = i.getAttribute("final-value"),
          N = R * A,
          b = `$${N.toLocaleString()}`;
        (u.textContent = b), (m.value = N);
      },
      p = () => {
        const R = t.getAttribute("final-value");
        (c.textContent = R), (f.value = R);
      },
      v = () =>
        e.getAttribute("final-value") &&
        t.getAttribute("final-value") &&
        i.getAttribute("final-value"),
      _ = () => {
        if (v() && !Br) {
          (Br = !0),
            n.classList.add("is--active"),
            r.classList.remove("is--active"),
            h(),
            p();
          const R = fu();
          R && R.stop(), S();
        } else v() || r.classList.add("is--active");
      },
      y = () => {
        if (Br) {
          (Br = !1),
            n.classList.remove("is--active"),
            cr && cr.isActive() && cr.pause(),
            zr && zr.isActive() && zr.pause();
          const R = fu();
          R && R.start(), T();
        }
      },
      x = () => {
        r.classList.contains("is--active") &&
          v() &&
          r.classList.remove("is--active");
      },
      g = () => {
        [e, t, i].forEach((A) => {
          new MutationObserver(x).observe(A, {
            attributes: !0,
            attributeFilter: ["final-value"],
          });
        }),
          new MutationObserver(_).observe(r, {
            attributes: !0,
            attributeFilter: ["final-value"],
          });
      },
      S = () => {
        (cr = $.timeline()),
          $.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
          cr.fromTo(
            a,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "expo.out" }
          ),
          cr.fromTo(
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
          cr.fromTo(
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
      T = () => {
        (zr = $.timeline()),
          zr.to(l, {
            autoAlpha: 0,
            scale: 0.9,
            rotate: 10,
            y: "100%",
            transformOrigin: "top center",
            duration: 1.25,
            ease: "elastic.out(0.4,0.3)",
          }),
          zr.to(
            a,
            {
              opacity: 0,
              duration: 0.5,
              ease: "expo.out",
              onComplete: () => {
                $.set(n, { display: "none", visibility: "hidden" });
              },
            },
            "-=1"
          );
      },
      P = (R) => {
        R.key === "Escape" && Br && y();
      },
      O = () => {
        o.addEventListener("click", () => {
          _();
        }),
          s.forEach((R) => {
            R.addEventListener("click", () => {
              y();
            });
          }),
          a.addEventListener("click", (R) => {
            R.target === a && Br && y();
          }),
          document.addEventListener("keydown", P);
      },
      k = () => {
        document.removeEventListener("keydown", P);
      };
    return g(), O(), k;
  },
  Mg = () => Og(),
  Dg = () => {
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
              const m = d.querySelector('[rev-tab-trigger="line"]');
              m && m.classList.remove("is--active");
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
  kg = () => {
    Dg();
  };
$.registerPlugin(un);
const Ig = () => {
    const r = document.querySelector('[lead-scroll="wrap"]'),
      e = r.querySelector('[lead-scroll="visual-component"]'),
      t = e.querySelectorAll('[lead-scroll="visual-item"]'),
      i = Array.from(t).map((I) => I.querySelector('[scroll-img="lg"]')),
      n = Array.from(t).map((I) => I.querySelectorAll('[scroll-img="sm"]')),
      s = r.querySelector('[lead-scroll="content-component"]'),
      o = s.querySelectorAll('[lead-scroll="content-header-item"]'),
      a = s.querySelectorAll('[lead-scroll="content-header-item"] p'),
      l = s.querySelectorAll('[lead-scroll="content-info-item"]'),
      u = Array.from(l).map((I) => Array.from(I.querySelectorAll("p"))),
      d = document
        .querySelector('[lead-scroll="progress-wrap"]')
        .querySelectorAll('[lead-scroll="progress-item"]'),
      m = Array.from(d).map((I) =>
        I.querySelector('[lead-scroll="progress-move"]')
      ),
      f = document.querySelector('[lead-scroll="arrow-left"]'),
      h = document.querySelector('[lead-scroll="arrow-right"]');
    let p = 0,
      v = !1,
      _ = null,
      y = !1,
      x = null;
    const g = t.length,
      S = 6e3;
    if (!r || !e || t.length === 0) return;
    $.set(i, { autoAlpha: 0 }),
      $.set(n, { autoAlpha: 0 }),
      $.set(i, { scale: 0.8 }),
      $.set(n, { scale: 0.8 });
    const T = (I) => {
        const E = i[I],
          F = n[I];
        E &&
          $.fromTo(
            E,
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
          F &&
            F.length > 0 &&
            $.fromTo(
              F,
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
      P = (I) => {
        const E = i[I],
          F = n[I];
        E &&
          $.to(E, {
            scale: 0.8,
            rotateX: -120,
            y: "100%",
            autoAlpha: 0,
            duration: 0.6,
            ease: "expo.inOut",
          }),
          F &&
            F.length > 0 &&
            $.to(F, {
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
      O = (I) => {
        const E = a[I];
        if (E) {
          const F = new un(E, {
            type: "lines",
            mask: "lines",
            autoSplit: !0,
            linesClass: "line",
          });
          F &&
            F.lines &&
            $.from(F.lines, {
              yPercent: 110,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        }
      },
      k = (I) => {
        const E = u[I];
        E &&
          E.length > 0 &&
          $.from(E, {
            y: 100,
            autoAlpha: 0,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.1,
          });
      },
      M = () => {
        _ && (clearTimeout(_), (_ = null)), x && (clearTimeout(x), (x = null));
      },
      R = (I) => {
        $.killTweensOf(m),
          m.forEach((E, F) => {
            F === I
              ? $.fromTo(
                  E,
                  { scaleX: 0 },
                  { scaleX: 1, duration: S / 1e3, ease: "none" }
                )
              : F < I
              ? $.set(E, { scaleX: 1 })
              : $.set(E, { scaleX: 0 });
          });
      },
      A = (I, E = !0) => {
        const F = Math.min(Math.max(I, 0), g - 1);
        if (F !== p && !v) {
          v = !0;
          const q = p;
          M();
          const Q = () => {
            d.forEach((X) => {
              X.classList.remove("is--active", "is--outgoing", "is--incoming");
            }),
              t.forEach((X) => {
                X.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              }),
              o.forEach((X) => {
                X.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              }),
              l.forEach((X) => {
                X.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              });
          };
          Q(),
            q >= 0 &&
              q < t.length &&
              (d[q] && d[q].classList.add("is--outgoing"),
              t[q] && t[q].classList.add("is--outgoing"),
              o[q] && o[q].classList.add("is--outgoing"),
              l[q] && l[q].classList.add("is--outgoing"),
              P(q)),
            d[F] && d[F].classList.add("is--incoming"),
            t[F] && t[F].classList.add("is--incoming"),
            o[F] && o[F].classList.add("is--incoming"),
            l[F] && l[F].classList.add("is--incoming"),
            T(F),
            O(F),
            k(F),
            $.delayedCall(0.2, () => {
              Q(),
                d[F] && d[F].classList.add("is--active"),
                t[F] && t[F].classList.add("is--active"),
                o[F] && o[F].classList.add("is--active"),
                l[F] && l[F].classList.add("is--active"),
                (p = F),
                (v = !1),
                R(F),
                E && !y && w();
            });
        }
      },
      N = () => {
        const I = (p + 1) % g;
        A(I);
      },
      b = () => {
        const I = p === 0 ? g - 1 : p - 1;
        A(I);
      },
      w = () => {
        M(),
          (_ = setTimeout(() => {
            !y && !v && N();
          }, S));
      },
      C = () => {
        M();
      },
      L = () => {
        C(),
          (y = !0),
          x && clearTimeout(x),
          (x = setTimeout(() => {
            (y = !1), w();
          }, 1e4));
      };
    d[0] && d[0].classList.add("is--active"),
      t[0] && t[0].classList.add("is--active"),
      o[0] && o[0].classList.add("is--active"),
      l[0] && l[0].classList.add("is--active"),
      T(0),
      O(0),
      k(0),
      f &&
        f.addEventListener("click", () => {
          L(), b();
        }),
      h &&
        h.addEventListener("click", () => {
          L(), N();
        }),
      R(0),
      w();
    const D = () => {
      M(),
        $.delayedCall(0.1, () => {
          y || w();
        });
    };
    return (
      window.addEventListener("resize", D),
      () => {
        M(), window.removeEventListener("resize", D), $.killTweensOf([i, n, m]);
      }
    );
  },
  _d = () => {
    Ig();
  },
  Rg = () => {
    Fi(), lp(), cp(), _d(), fp(), $h(), Wh(), pd(), hd(), nr(), Mg(), kg();
  },
  Ng = () => {
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
  yd = () => {
    Ng();
  },
  zg = () => {
    document.querySelectorAll('[team="card"]').forEach((e) => {
      const t = e.querySelector('[team="trigger"]'),
        i = e.querySelector('[team="content"]'),
        n = e.querySelector('[team="overlay"]'),
        s = e.querySelector('[team="trigger-line"]');
      let o = !1;
      const a = 1,
        l = i.scrollHeight,
        u = () => {
          $.timeline().to(i, { height: l, duration: a, ease: "expo.out" }),
            $.to(n, { opacity: 1, duration: a, ease: "expo.out" }),
            $.to(s, { rotate: 90, duration: a, ease: "expo.out" });
        },
        c = () => {
          $.timeline().to(i, { height: 0, duration: a, ease: "expo.out" }),
            $.to(n, { opacity: 0, duration: a, ease: "expo.out" }),
            $.to(s, { rotate: 0, duration: a, ease: "expo.out" });
        },
        d = () => {
          o ? (c(), (o = !1)) : (u(), (o = !0));
        };
      t.addEventListener("click", d);
    });
  },
  Bg = () => {
    zg();
  },
  Fg = () => {
    Fi(), nr(), yd(), Bg();
  },
  wd = (r) => document.querySelector(r),
  Vg = (r, e) => r.classList.add(e),
  qg = () => {
    const r = wd(".contact-form");
    r &&
      r.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  };
$.registerPlugin(Z);
const Hg = () => {
    const r = document.querySelector(".product_hero_tab_component"),
      e = r.querySelector(".product_hero_tab_visual_wrap");
    $.to(e, {
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
  cn = () => {
    Hg();
  };
pt.use([dd, fd, dg]);
const $g = () => {
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
  Ya = () => {
    $g();
  },
  Wg = () => {
    Fi(), cn(), nr(), Ya();
  },
  Gg = () => {
    Fi(), cn(), nr(), Ya();
  },
  Xg = () => {
    Fi(), cn(), nr(), Ya();
  },
  Yg = () => {
    Fi(), cn(), nr();
  },
  jg = () => {
    Fi(), cn(), nr(), _d();
  },
  Ug = () => {
    document.querySelectorAll("[toast-wrap]").forEach(function (r) {
      const e = r.querySelectorAll("[toast-item]"),
        t = 0.5,
        n = t + 0.8,
        s = 3,
        o = 6;
      let a = 99999,
        l = [...e];
      if (e.length < o) {
        const f = Math.ceil(o / e.length);
        for (let h = 0; h < f; h++)
          e.forEach((p) => {
            const v = p.cloneNode(!0);
            v.setAttribute("data-duplicate", "true"),
              r.appendChild(v),
              l.push(v);
          });
      }
      const u = l;
      let c = -1;
      const d = $.timeline({ defaults: { duration: t, ease: "power1.inOut" } });
      for (let f = 0; f < u.length + s; f++) {
        c++, c === u.length && (c = 0);
        const h = u[c];
        a--,
          d.set(
            h,
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
            f * n
          ),
          d.to(
            h,
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
          d.to(
            h,
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
          d.to(
            h,
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
      $.timeline({
        repeat: -1,
        onUpdate: () => {
          const f = n * s,
            h = d.duration() - n * s;
          d.time() >= h && d.time(f);
        },
      }).to(d, { duration: d.duration(), ease: "none" });
    });
  },
  Kg = () => {
    Ug();
  },
  Zg = () => {
    nr(), pd(), hd(), Kg();
  },
  Qg = () => {
    Fi(), cn();
  },
  Jg = () => {
    Fi(), yd();
  },
  ev = {
    home: Rg,
    about: Fg,
    contact: qg,
    crm: Wg,
    broker: Gg,
    quoting: Xg,
    demand: Yg,
    markets: jg,
    operators: Zg,
    inbound: Qg,
    careers: Jg,
  },
  tv = () => {
    const r = document.body.dataset.route,
      e = ev[r];
    e && e();
  },
  iv = () => {
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
    t.forEach((v) => {
      const _ = v.getBoundingClientRect();
      s.set(v, { width: _.width, height: _.height });
    }),
      (() => {
        const v = e[0];
        if (v) {
          const _ = v.getAttribute("nav-menu-dropdown"),
            y = document.querySelector(`[nav-menu-item='${_}']`);
          if (y) {
            const x = v.getBoundingClientRect(),
              g = i.getBoundingClientRect(),
              S = s.get(y);
            if (S) {
              const T = g.left + g.width / 2,
                O = x.left + x.width / 2 - T,
                k = S.height + 20,
                M = S.width + 20;
              n.style.setProperty("--siteMenuTranslateX", `${O}px`),
                n.style.setProperty("--siteMenuHeight", `${k}px`),
                n.style.setProperty("--siteMenuWidth", `${M}px`);
            }
          }
        }
      })();
    const a = 25;
    let l = null,
      u = null;
    const c = (v) => {
        const _ = Array.from(t),
          y = _.indexOf(v);
        _.forEach((x, g) => {
          g < y
            ? x.setAttribute("pos", "left")
            : g === y
            ? x.setAttribute("pos", "active")
            : x.setAttribute("pos", "right"),
            x === v
              ? x.setAttribute("status", "active")
              : x.setAttribute("status", "inactive");
        });
      },
      d = (v, _) => {
        l && (clearTimeout(l), (l = null)), u !== v && ((u = v), h(v, _));
      },
      m = () => {
        l = setTimeout(() => {
          r.setAttribute("dropdown-vis", "non-visible"),
            n.setAttribute("vis", "non-visible"),
            (u = null),
            (l = null);
        }, 100);
      },
      f = (v, _) => {
        const y = _.bottom;
        return v >= y && v <= y + a;
      },
      h = (v, _) => {
        const y = i.getBoundingClientRect(),
          x = v.getBoundingClientRect(),
          g = s.get(_);
        if (!g) return;
        const S = y.left + y.width / 2,
          T = x.left + x.width / 2,
          P = g.height + 20,
          O = g.width + 20,
          k = T - S;
        n.style.setProperty("--siteMenuTranslateX", `${k}px`),
          n.style.setProperty("--siteMenuHeight", `${P}px`),
          n.style.setProperty("--siteMenuWidth", `${O}px`),
          n.setAttribute("vis", "visible"),
          r.setAttribute("dropdown-vis", "visible"),
          c(_);
      },
      p = (v) => {
        if (!u) return;
        const _ = u.getBoundingClientRect(),
          y = n.getBoundingClientRect(),
          x = v.clientX,
          g = v.clientY,
          S = x >= _.left && x <= _.right && g >= _.top && g <= _.bottom,
          T = x >= y.left && x <= y.right && g >= y.top && g <= y.bottom,
          P =
            f(g, _) &&
            x >= Math.min(_.left, y.left) &&
            x <= Math.max(_.right, y.right);
        S || T || P ? l && (clearTimeout(l), (l = null)) : l || m();
      };
    document.addEventListener("mousemove", p),
      e.forEach((v) => {
        const _ = v.getAttribute("nav-menu-dropdown"),
          y = document.querySelector(`[nav-menu-item='${_}']`);
        y &&
          v.addEventListener("mouseenter", () => {
            d(v, y);
          });
      }),
      n.addEventListener("mouseenter", () => {
        l && (clearTimeout(l), (l = null));
      }),
      n.addEventListener("mouseleave", () => {
        m();
      });
  },
  rv = () => {
    iv();
  },
  nv = () => {
    const r = document.querySelector(".page_nav_size"),
      e = document.querySelector(".page_nav_main");
    window.addEventListener("scroll", () => {
      window.scrollY > 50
        ? (r.classList.add("is--active"), e.classList.add("is--active"))
        : (r.classList.remove("is--active"), e.classList.remove("is--active"));
    });
  },
  sv = () => {
    nv();
  },
  ov = () => {
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
              links: m,
              trigger: f,
              line: h,
            }) => {
              u.classList.remove("is--open"),
                d.classList.remove("is--open"),
                f.classList.remove("is--open"),
                $.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                $.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                $.to(h, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                m.forEach((p) => p.classList.remove("is--open")),
                $.to(m, {
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
              $.to(n, { height: "auto", duration: 0.5, ease: "power3.out" }),
              $.to(s, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
              $.to(a, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
              o.forEach((u) => u.classList.add("is--open")),
              $.fromTo(
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
  av = () => ov(),
  lv = () => {
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
        r.forEach((y) => {
          y.setAttribute("aria-controls", "main-nav-menu"),
            y.setAttribute("aria-expanded", "false");
        }),
          e.forEach((y) => {
            y.setAttribute("aria-label", "Open navigation menu");
          }),
          t.forEach((y) => {
            y.setAttribute("aria-label", "Close navigation menu");
          }),
          n &&
            (n.setAttribute("id", "main-nav-menu"),
            n.setAttribute("aria-label", "Main navigation menu")),
          s && s.setAttribute("role", "navigation");
      },
      m = (y, x) => {
        [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((S) => {
          S.classList.add(y), S.classList.remove(x);
        });
      },
      f = (y) => {
        r.forEach((x) => {
          x.setAttribute("aria-expanded", y ? "true" : "false");
        });
      },
      h = () => {
        m(u, c),
          f(!0),
          $.timeline()
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
      p = () => {
        m(c, u),
          f(!1),
          $.timeline()
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
          $.to(
            n,
            {
              clipPath: "inset(0% 100% 0% 0%)",
              duration: 1.2,
              ease: "expo.inOut",
            },
            "<0.05"
          );
      },
      v = () => {
        l ? (p(), (l = !1)) : (h(), (l = !0));
      };
    (() => {
      d(),
        r.forEach((y) => {
          y.addEventListener("click", v);
        });
    })();
  },
  uv = () => {
    lv();
  };
$.registerPlugin(Z);
const cv = () => {
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
          m = r(!1, s.getAttribute("tr-marquee-reverse")),
          f = r(!1, s.getAttribute("tr-marquee-scrolldirection")),
          h = r(!1, s.getAttribute("tr-marquee-scrollscrub")),
          p = -100,
          v = 1,
          _ = !1;
        m && (p = 100);
        let y = $.timeline({
          repeat: -1,
          onReverseComplete: () => y.progress(1),
        });
        d
          ? ((c = a[0].offsetHeight / c),
            y.fromTo(
              a,
              { yPercent: 0 },
              { yPercent: p, ease: "none", duration: c }
            ))
          : ((c = a[0].offsetWidth / c),
            y.fromTo(
              a,
              { xPercent: 0 },
              { xPercent: p, ease: "none", duration: c }
            ));
        let x = { value: 1 };
        const g = Z.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          onUpdate: (T) => {
            if (
              !_ &&
              (f &&
                v !== T.direction &&
                ((v = T.direction), y.timeScale(T.direction)),
              h)
            ) {
              let P = T.getVelocity() * 0.006;
              (P = $.utils.clamp(-60, 60, P)),
                $.timeline({ onUpdate: () => y.timeScale(x.value) }).fromTo(
                  x,
                  { value: P },
                  { value: v, duration: 0.5 }
                );
            }
          },
        });
        function S(T) {
          _ = T;
          let P = { value: 1 },
            O = $.timeline({ onUpdate: () => y.timeScale(P.value) });
          T
            ? (O.fromTo(P, { value: v }, { value: 0, duration: 0.5 }),
              u.forEach((k) => e(k, "is-paused")))
            : (O.fromTo(P, { value: 0 }, { value: v, duration: 0.5 }),
              u.forEach((k) => t(k, "is-paused")));
        }
        window.matchMedia("(pointer: fine)").matches &&
          l.forEach((T) => {
            T.addEventListener("mouseenter", () => S(!0)),
              T.addEventListener("mouseleave", () => S(!1));
          }),
          u.forEach((T) => {
            T.addEventListener("click", function () {
              const P = i(this, "is-paused");
              S(!P);
            });
          }),
          (s._marqueeCleanup = () => {
            g.kill(),
              y.kill(),
              l.forEach((T) => {
                T.removeEventListener("mouseenter", () => S(!0)),
                  T.removeEventListener("mouseleave", () => S(!1));
              }),
              u.forEach((T) => {
                T.removeEventListener("click", function () {
                  const P = i(this, "is-paused");
                  S(!P);
                });
              });
          });
      });
  },
  dv = () => {
    cv();
  },
  fv = () => {
    const r = document.querySelector(".page_header"),
      e = document.querySelectorAll(".page_nav_btn_item"),
      t = document.querySelector("[page-hero]");
    if (!r || !t) return;
    const i = "data-wf--header-nav-header--variant",
      n = "data-wf--btn-main--style",
      s = r.getAttribute(i),
      o = r.className,
      a = Array.from(e).map((d) => {
        const m = d.querySelector("[data-wf--btn-main--style]");
        return { element: m, theme: m?.getAttribute(n), classes: m?.className };
      }),
      l = {
        header: { dark: "base", base: "dark" },
        button: {
          "alt-dark": {
            theme: "alt",
            addVariant: "w-variant-14d45cb6-5c1e-e490-5671-bd7652c22d56",
          },
          alt: "alt-dark",
          primary: "primary",
        },
      },
      u = (d) => {
        if (d)
          r.setAttribute(i, s),
            (r.className = o),
            a.forEach((m) => {
              m.element &&
                (m.element.setAttribute(n, m.theme),
                (m.element.className = m.classes));
            });
        else {
          const m = l.header[s] || "base";
          r.setAttribute(i, m);
          const f = r.className,
            h = f.match(/w-variant-[a-f0-9-]+/);
          h && (r.className = f.replace(h[0], "")),
            a.forEach((p) => {
              if (p.element && p.theme) {
                const v = l.button[p.theme];
                if (typeof v == "object") {
                  const _ = v.theme;
                  p.element.setAttribute(n, _);
                  const y = p.element.className,
                    x = y.match(/w-variant-[a-f0-9-]+/g);
                  let g = y;
                  x &&
                    x.forEach((T) => {
                      g = g.replace(T, "");
                    }),
                    v.addVariant && (g += ` ${v.addVariant}`),
                    (p.element.className = g.trim()),
                    p.element
                      .querySelectorAll('[class*="w-variant-"]')
                      .forEach((T) => {
                        const P = T.className,
                          O = P.match(/w-variant-[a-f0-9-]+/g);
                        let k = P;
                        O &&
                          O.forEach((M) => {
                            k = k.replace(M, "");
                          }),
                          v.addVariant && (k += ` ${v.addVariant}`),
                          (T.className = k.trim());
                      });
                } else {
                  const _ = v || p.theme;
                  p.element.setAttribute(n, _);
                  const y = p.element.className,
                    x = y.match(/w-variant-[a-f0-9-]+/g);
                  if (x) {
                    let S = y;
                    x.forEach((T) => {
                      S = S.replace(T, "");
                    }),
                      (p.element.className = S.trim());
                  }
                  p.element
                    .querySelectorAll('[class*="w-variant-"]')
                    .forEach((S) => {
                      const T = S.className,
                        P = T.match(/w-variant-[a-f0-9-]+/g);
                      if (P) {
                        let O = T;
                        P.forEach((k) => {
                          O = O.replace(k, "");
                        }),
                          (S.className = O.trim());
                      }
                    });
                }
              }
            });
        }
      },
      c = () => {
        t.getBoundingClientRect().bottom <= 0 ? u(!1) : u(!0);
      };
    return (
      window.addEventListener("scroll", c),
      c(),
      () => {
        window.removeEventListener("scroll", c);
      }
    );
  },
  pv = () =>
    document
      .querySelector(".page_header")
      ?.getAttribute("data-wf--header-nav-header--variant") === "dark"
      ? fv()
      : null,
  hv = () => {
    rv(), sv(), av(), uv(), dv(), pv();
  },
  mv = () => {
    const r = wd(".example-component");
    r && (Vg(r, "is-initialized"), r.addEventListener("click", () => {}));
  },
  gv = () => {
    mv();
  };
document.addEventListener("DOMContentLoaded", () => {
  hv(), gv(), tv(), Lg();
});
document.addEventListener("visibilitychange", () => {
  document.hidden
    ? ($.globalTimeline.pause(), window.lenis && window.lenis.stop())
    : ($.globalTimeline.resume(), window.lenis && window.lenis.start());
});
