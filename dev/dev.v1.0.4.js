var nf = Object.defineProperty;
var Fl = Object.getOwnPropertySymbols;
var sf = Object.prototype.hasOwnProperty,
  of = Object.prototype.propertyIsEnumerable;
var yo = (gt, Xt, at) =>
    Xt in gt
      ? nf(gt, Xt, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: at,
        })
      : (gt[Xt] = at),
  Xl = (gt, Xt) => {
    for (var at in Xt || (Xt = {})) sf.call(Xt, at) && yo(gt, at, Xt[at]);
    if (Fl) for (var at of Fl(Xt)) of.call(Xt, at) && yo(gt, at, Xt[at]);
    return gt;
  };
var L = (gt, Xt, at) => yo(gt, typeof Xt != "symbol" ? Xt + "" : Xt, at);
(function (gt) {
  typeof define == "function" && define.amd ? define(gt) : gt();
})(function () {
  "use strict";
  function gt(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function Xt(s, t) {
    (s.prototype = Object.create(t.prototype)),
      (s.prototype.constructor = s),
      (s.__proto__ = t);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var at = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    er = { duration: 0.5, overwrite: !1, delay: 0 },
    ts,
    Wt,
    ft,
    Me = 1e8,
    nt = 1 / Me,
    es = Math.PI * 2,
    Bl = es / 4,
    Yl = 0,
    wo = Math.sqrt,
    ql = Math.cos,
    Hl = Math.sin,
    Lt = function (t) {
      return typeof t == "string";
    },
    mt = function (t) {
      return typeof t == "function";
    },
    ti = function (t) {
      return typeof t == "number";
    },
    is = function (t) {
      return typeof t == "undefined";
    },
    He = function (t) {
      return typeof t == "object";
    },
    ce = function (t) {
      return t !== !1;
    },
    rs = function () {
      return typeof window != "undefined";
    },
    hn = function (t) {
      return mt(t) || Lt(t);
    },
    xo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Vt = Array.isArray,
    ns = /(?:-?\.?\d|\.)+/gi,
    bo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    So = /[+-]=-?[.\d]+/,
    To = /[^,'"\[\]\s]+/gi,
    Vl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    dt,
    Ve,
    os,
    as,
    ve = {},
    dn = {},
    Co,
    Eo = function (t) {
      return (dn = nr(t, ve)) && de;
    },
    ls = function (t, i) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        i,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Ar = function (t, i) {
      return !i && console.warn(t);
    },
    Ao = function (t, i) {
      return (t && (ve[t] = i) && dn && (dn[t] = i)) || ve;
    },
    kr = function () {
      return 0;
    },
    $l = { suppressEvents: !0, isStart: !0, kill: !1 },
    pn = { suppressEvents: !0, kill: !1 },
    Ul = { suppressEvents: !0 },
    us = {},
    fi = [],
    cs = {},
    ko,
    ye = {},
    fs = {},
    Po = 30,
    _n = [],
    hs = "",
    ds = function (t) {
      var i = t[0],
        e,
        r;
      if ((He(i) || mt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (r = _n.length; r-- && !_n[r].targetTest(i); );
        e = _n[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new na(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    Oi = function (t) {
      return t._gsap || ds(De(t))[0]._gsap;
    },
    Mo = function (t, i, e) {
      return (e = t[i]) && mt(e)
        ? t[i]()
        : (is(e) && t.getAttribute && t.getAttribute(i)) || e;
    },
    fe = function (t, i) {
      return (t = t.split(",")).forEach(i) || t;
    },
    wt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Ct = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    rr = function (t, i) {
      var e = i.charAt(0),
        r = parseFloat(i.substr(2));
      return (
        (t = parseFloat(t)),
        e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r
      );
    },
    Gl = function (t, i) {
      for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; );
      return r < e;
    },
    gn = function () {
      var t = fi.length,
        i = fi.slice(0),
        e,
        r;
      for (cs = {}, fi.length = 0, e = 0; e < t; e++)
        (r = i[e]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ps = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Oo = function (t, i, e, r) {
      fi.length && !Wt && gn(),
        t.render(i, e, !!(Wt && i < 0 && ps(t))),
        fi.length && !Wt && gn();
    },
    Do = function (t) {
      var i = parseFloat(t);
      return (i || i === 0) && (t + "").match(To).length < 2
        ? i
        : Lt(t)
        ? t.trim()
        : t;
    },
    Ro = function (t) {
      return t;
    },
    we = function (t, i) {
      for (var e in i) e in t || (t[e] = i[e]);
      return t;
    },
    Zl = function (t) {
      return function (i, e) {
        for (var r in e)
          r in i || (r === "duration" && t) || r === "ease" || (i[r] = e[r]);
      };
    },
    nr = function (t, i) {
      for (var e in i) t[e] = i[e];
      return t;
    },
    Lo = function s(t, i) {
      for (var e in i)
        e !== "__proto__" &&
          e !== "constructor" &&
          e !== "prototype" &&
          (t[e] = He(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
      return t;
    },
    mn = function (t, i) {
      var e = {},
        r;
      for (r in t) r in i || (e[r] = t[r]);
      return e;
    },
    Pr = function (t) {
      var i = t.parent || dt,
        e = t.keyframes ? Zl(Vt(t.keyframes)) : we;
      if (ce(t.inherit))
        for (; i; ) e(t, i.vars.defaults), (i = i.parent || i._dp);
      return t;
    },
    Kl = function (t, i) {
      for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; );
      return e < 0;
    },
    zo = function (t, i, e, r, n) {
      var o = t[r],
        a;
      if (n) for (a = i[n]; o && o[n] > a; ) o = o._prev;
      return (
        o
          ? ((i._next = o._next), (o._next = i))
          : ((i._next = t[e]), (t[e] = i)),
        i._next ? (i._next._prev = i) : (t[r] = i),
        (i._prev = o),
        (i.parent = i._dp = t),
        i
      );
    },
    vn = function (t, i, e, r) {
      e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
      var n = i._prev,
        o = i._next;
      n ? (n._next = o) : t[e] === i && (t[e] = o),
        o ? (o._prev = n) : t[r] === i && (t[r] = n),
        (i._next = i._prev = i.parent = null);
    },
    hi = function (t, i) {
      t.parent &&
        (!i || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    Di = function (t, i) {
      if (t && (!i || i._end > t._dur || i._start < 0))
        for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
      return t;
    },
    Ql = function (t) {
      for (var i = t.parent; i && i.parent; )
        (i._dirty = 1), i.totalDuration(), (i = i.parent);
      return t;
    },
    _s = function (t, i, e, r) {
      return (
        t._startAt &&
        (Wt
          ? t._startAt.revert(pn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(i, !0, r))
      );
    },
    jl = function s(t) {
      return !t || (t._ts && s(t.parent));
    },
    No = function (t) {
      return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    sr = function (t, i) {
      var e = Math.floor((t = Ct(t / i)));
      return t && e === t ? e - 1 : e;
    },
    yn = function (t, i) {
      return (
        (t - i._start) * i._ts +
        (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
      );
    },
    wn = function (t) {
      return (t._end = Ct(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || nt) || 0)
      ));
    },
    xn = function (t, i) {
      var e = t._dp;
      return (
        e &&
          e.smoothChildTiming &&
          t._ts &&
          ((t._start = Ct(
            e._time -
              (t._ts > 0
                ? i / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)
          )),
          wn(t),
          e._dirty || Di(e, t)),
        t
      );
    },
    Io = function (t, i) {
      var e;
      if (
        ((i._time ||
          (!i._dur && i._initted) ||
          (i._start < t._time && (i._dur || !i.add))) &&
          ((e = yn(t.rawTime(), i)),
          (!i._dur || Or(0, i.totalDuration(), e) - i._tTime > nt) &&
            i.render(e, !0)),
        Di(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (e = t; e._dp; )
            e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
        t._zTime = -nt;
      }
    },
    $e = function (t, i, e, r) {
      return (
        i.parent && hi(i),
        (i._start = Ct(
          (ti(e) ? e : e || t !== dt ? Oe(t, e, i) : t._time) + i._delay
        )),
        (i._end = Ct(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        zo(t, i, "_first", "_last", t._sort ? "_start" : 0),
        gs(i) || (t._recent = i),
        r || Io(t, i),
        t._ts < 0 && xn(t, t._tTime),
        t
      );
    },
    Fo = function (t, i) {
      return (
        (ve.ScrollTrigger || ls("scrollTrigger", i)) &&
        ve.ScrollTrigger.create(i, t)
      );
    },
    Xo = function (t, i, e, r, n) {
      if ((Cs(t, i, n), !t._initted)) return 1;
      if (
        !e &&
        t._pt &&
        !Wt &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        ko !== be.frame
      )
        return fi.push(t), (t._lazy = [n, r]), 1;
    },
    Jl = function s(t) {
      var i = t.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
    },
    gs = function (t) {
      var i = t.data;
      return i === "isFromStart" || i === "isStart";
    },
    tu = function (t, i, e, r) {
      var n = t.ratio,
        o =
          i < 0 ||
          (!i &&
            ((!t._start && Jl(t) && !(!t._initted && gs(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !gs(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        c,
        h;
      if (
        (a &&
          t._repeat &&
          ((l = Or(0, t._tDur, i)),
          (c = sr(l, a)),
          t._yoyo && c & 1 && (o = 1 - o),
          c !== sr(t._tTime, a) &&
            ((n = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== n || Wt || r || t._zTime === nt || (!i && t._zTime))
      ) {
        if (!t._initted && Xo(t, i, r, e, l)) return;
        for (
          h = t._zTime,
            t._zTime = i || (e ? nt : 0),
            e || (e = i && !h),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        i < 0 && _s(t, i, e, !0),
          t._onUpdate && !e && xe(t, "onUpdate"),
          l && t._repeat && !e && t.parent && xe(t, "onRepeat"),
          (i >= t._tDur || i < 0) &&
            t.ratio === o &&
            (o && hi(t, 1),
            !e &&
              !Wt &&
              (xe(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = i);
    },
    eu = function (t, i, e) {
      var r;
      if (e > i)
        for (r = t._first; r && r._start <= e; ) {
          if (r.data === "isPause" && r._start > i) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= e; ) {
          if (r.data === "isPause" && r._start < i) return r;
          r = r._prev;
        }
    },
    or = function (t, i, e, r) {
      var n = t._repeat,
        o = Ct(i) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = n ? (n < 0 ? 1e10 : Ct(o * (n + 1) + t._rDelay * n)) : o),
        a > 0 && !r && xn(t, (t._tTime = t._tDur * a)),
        t.parent && wn(t),
        e || Di(t.parent, t),
        t
      );
    },
    Wo = function (t) {
      return t instanceof ee ? Di(t) : or(t, t._dur);
    },
    iu = { _start: 0, endTime: kr, totalDuration: kr },
    Oe = function s(t, i, e) {
      var r = t.labels,
        n = t._recent || iu,
        o = t.duration() >= Me ? n.endTime(!1) : t._dur,
        a,
        l,
        u;
      return Lt(i) && (isNaN(i) || i in r)
        ? ((l = i.charAt(0)),
          (u = i.substr(-1) === "%"),
          (a = i.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (i = i.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                  (u ? (a < 0 ? n : e).totalDuration() / 100 : 1))
            : a < 0
            ? (i in r || (r[i] = o), r[i])
            : ((l = parseFloat(i.charAt(a - 1) + i.substr(a + 1))),
              u && e && (l = (l / 100) * (Vt(e) ? e[0] : e).totalDuration()),
              a > 1 ? s(t, i.substr(0, a - 1), e) + l : o + l))
        : i == null
        ? o
        : +i;
    },
    Mr = function (t, i, e) {
      var r = ti(i[1]),
        n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        o = i[n],
        a,
        l;
      if ((r && (o.duration = i[1]), (o.parent = e), t)) {
        for (a = o, l = e; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = ce(l.vars.inherit) && l.parent);
        (o.immediateRender = ce(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = i[n - 1]);
      }
      return new Et(i[0], o, i[n + 1]);
    },
    di = function (t, i) {
      return t || t === 0 ? i(t) : i;
    },
    Or = function (t, i, e) {
      return e < t ? t : e > i ? i : e;
    },
    $t = function (t, i) {
      return !Lt(t) || !(i = Vl.exec(t)) ? "" : i[1];
    },
    ru = function (t, i, e) {
      return di(e, function (r) {
        return Or(t, i, r);
      });
    },
    ms = [].slice,
    Bo = function (t, i) {
      return (
        t &&
        He(t) &&
        "length" in t &&
        ((!i && !t.length) || (t.length - 1 in t && He(t[0]))) &&
        !t.nodeType &&
        t !== Ve
      );
    },
    nu = function (t, i, e) {
      return (
        e === void 0 && (e = []),
        t.forEach(function (r) {
          var n;
          return (Lt(r) && !i) || Bo(r, 1)
            ? (n = e).push.apply(n, De(r))
            : e.push(r);
        }) || e
      );
    },
    De = function (t, i, e) {
      return ft && !i && ft.selector
        ? ft.selector(t)
        : Lt(t) && !e && (os || !lr())
        ? ms.call((i || as).querySelectorAll(t), 0)
        : Vt(t)
        ? nu(t, e)
        : Bo(t)
        ? ms.call(t, 0)
        : t
        ? [t]
        : [];
    },
    vs = function (t) {
      return (
        (t = De(t)[0] || Ar("Invalid scope") || {}),
        function (i) {
          var e = t.current || t.nativeElement || t;
          return De(
            i,
            e.querySelectorAll
              ? e
              : e === t
              ? Ar("Invalid scope") || as.createElement("div")
              : t
          );
        }
      );
    },
    Yo = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    qo = function (t) {
      if (mt(t)) return t;
      var i = He(t) ? t : { each: t },
        e = Ri(i.ease),
        r = i.from || 0,
        n = parseFloat(i.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = i.axis,
        c = r,
        h = r;
      return (
        Lt(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((c = r[0]), (h = r[1])),
        function (d, f, _) {
          var p = (_ || i).length,
            g = o[p],
            x,
            y,
            b,
            v,
            w,
            C,
            S,
            T,
            A;
          if (!g) {
            if (((A = i.grid === "auto" ? 0 : (i.grid || [1, Me])[1]), !A)) {
              for (
                S = -Me;
                S < (S = _[A++].getBoundingClientRect().left) && A < p;

              );
              A < p && A--;
            }
            for (
              g = o[p] = [],
                x = l ? Math.min(A, p) * c - 0.5 : r % A,
                y = A === Me ? 0 : l ? (p * h) / A - 0.5 : (r / A) | 0,
                S = 0,
                T = Me,
                C = 0;
              C < p;
              C++
            )
              (b = (C % A) - x),
                (v = y - ((C / A) | 0)),
                (g[C] = w =
                  u ? Math.abs(u === "y" ? v : b) : wo(b * b + v * v)),
                w > S && (S = w),
                w < T && (T = w);
            r === "random" && Yo(g),
              (g.max = S - T),
              (g.min = T),
              (g.v = p =
                (parseFloat(i.amount) ||
                  parseFloat(i.each) *
                    (A > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / A
                        : A
                      : Math.max(A, p / A)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = p < 0 ? n - p : n),
              (g.u = $t(i.amount || i.each) || 0),
              (e = e && p < 0 ? ea(e) : e);
          }
          return (
            (p = (g[d] - g.min) / g.max || 0),
            Ct(g.b + (e ? e(p) : p) * g.v) + g.u
          );
        }
      );
    },
    ys = function (t) {
      var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (e) {
        var r = Ct(Math.round(parseFloat(e) / t) * t * i);
        return (r - (r % 1)) / i + (ti(e) ? 0 : $t(e));
      };
    },
    Ho = function (t, i) {
      var e = Vt(t),
        r,
        n;
      return (
        !e &&
          He(t) &&
          ((r = e = t.radius || Me),
          t.values
            ? ((t = De(t.values)), (n = !ti(t[0])) && (r *= r))
            : (t = ys(t.increment))),
        di(
          i,
          e
            ? mt(t)
              ? function (o) {
                  return (n = t(o)), Math.abs(n - o) <= r ? n : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(n ? o.x : o),
                      l = parseFloat(n ? o.y : 0),
                      u = Me,
                      c = 0,
                      h = t.length,
                      d,
                      f;
                    h--;

                  )
                    n
                      ? ((d = t[h].x - a),
                        (f = t[h].y - l),
                        (d = d * d + f * f))
                      : (d = Math.abs(t[h] - a)),
                      d < u && ((u = d), (c = h));
                  return (
                    (c = !r || u <= r ? t[c] : o),
                    n || c === o || ti(o) ? c : c + $t(o)
                  );
                }
            : ys(t)
        )
      );
    },
    Vo = function (t, i, e, r) {
      return di(Vt(t) ? !i : e === !0 ? !!(e = 0) : !r, function () {
        return Vt(t)
          ? t[~~(Math.random() * t.length)]
          : (e = e || 1e-5) &&
              (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - e / 2 + Math.random() * (i - t + e * 0.99)) / e
                ) *
                  e *
                  r
              ) / r;
      });
    },
    su = function () {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
        i[e] = arguments[e];
      return function (r) {
        return i.reduce(function (n, o) {
          return o(n);
        }, r);
      };
    },
    ou = function (t, i) {
      return function (e) {
        return t(parseFloat(e)) + (i || $t(e));
      };
    },
    au = function (t, i, e) {
      return Uo(t, i, 0, 1, e);
    },
    $o = function (t, i, e) {
      return di(e, function (r) {
        return t[~~i(r)];
      });
    },
    lu = function s(t, i, e) {
      var r = i - t;
      return Vt(t)
        ? $o(t, s(0, t.length), i)
        : di(e, function (n) {
            return ((r + ((n - t) % r)) % r) + t;
          });
    },
    uu = function s(t, i, e) {
      var r = i - t,
        n = r * 2;
      return Vt(t)
        ? $o(t, s(0, t.length - 1), i)
        : di(e, function (o) {
            return (o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o);
          });
    },
    Dr = function (t) {
      for (var i = 0, e = "", r, n, o, a; ~(r = t.indexOf("random(", i)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (n = t.substr(r + 7, o - r - 7).match(a ? To : ns)),
          (e +=
            t.substr(i, r - i) +
            Vo(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (i = o + 1);
      return e + t.substr(i, t.length - i);
    },
    Uo = function (t, i, e, r, n) {
      var o = i - t,
        a = r - e;
      return di(n, function (l) {
        return e + (((l - t) / o) * a || 0);
      });
    },
    cu = function s(t, i, e, r) {
      var n = isNaN(t + i)
        ? 0
        : function (f) {
            return (1 - f) * t + f * i;
          };
      if (!n) {
        var o = Lt(t),
          a = {},
          l,
          u,
          c,
          h,
          d;
        if ((e === !0 && (r = 1) && (e = null), o))
          (t = { p: t }), (i = { p: i });
        else if (Vt(t) && !Vt(i)) {
          for (c = [], h = t.length, d = h - 2, u = 1; u < h; u++)
            c.push(s(t[u - 1], t[u]));
          h--,
            (n = function (_) {
              _ *= h;
              var p = Math.min(d, ~~_);
              return c[p](_ - p);
            }),
            (e = i);
        } else r || (t = nr(Vt(t) ? [] : {}, t));
        if (!c) {
          for (l in i) Ss.call(a, t, l, "get", i[l]);
          n = function (_) {
            return ks(_, a) || (o ? t.p : t);
          };
        }
      }
      return di(e, n);
    },
    Go = function (t, i, e) {
      var r = t.labels,
        n = Me,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - i),
          a < 0 == !!e && a && n > (a = Math.abs(a)) && ((l = o), (n = a));
      return l;
    },
    xe = function (t, i, e) {
      var r = t.vars,
        n = r[i],
        o = ft,
        a = t._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = r[i + "Params"]),
          (u = r.callbackScope || t),
          e && fi.length && gn(),
          a && (ft = a),
          (c = l ? n.apply(u, l) : n.call(u)),
          (ft = o),
          c
        );
    },
    Rr = function (t) {
      return (
        hi(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Wt),
        t.progress() < 1 && xe(t, "onInterrupt"),
        t
      );
    },
    ar,
    Zo = [],
    Ko = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), rs() || t.headless)) {
          var i = t.name,
            e = mt(t),
            r =
              i && !e && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: kr,
              render: ks,
              add: Ss,
              kill: Eu,
              modifier: Cu,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: As,
              aliases: {},
              register: 0,
            };
          if ((lr(), t !== r)) {
            if (ye[i]) return;
            we(r, we(mn(t, n), o)),
              nr(r.prototype, nr(n, mn(t, o))),
              (ye[(r.prop = i)] = r),
              t.targetTest && (_n.push(r), (us[i] = 1)),
              (i =
                (i === "css"
                  ? "CSS"
                  : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin");
          }
          Ao(i, r), t.register && t.register(de, r, he);
        } else Zo.push(t);
    },
    st = 255,
    Lr = {
      aqua: [0, st, st],
      lime: [0, st, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, st],
      navy: [0, 0, 128],
      white: [st, st, st],
      olive: [128, 128, 0],
      yellow: [st, st, 0],
      orange: [st, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [st, 0, 0],
      pink: [st, 192, 203],
      cyan: [0, st, st],
      transparent: [st, st, st, 0],
    },
    ws = function (t, i, e) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? i + (e - i) * t * 6
          : t < 0.5
          ? e
          : t * 3 < 2
          ? i + (e - i) * (2 / 3 - t) * 6
          : i) *
          st +
          0.5) |
          0
      );
    },
    Qo = function (t, i, e) {
      var r = t ? (ti(t) ? [t >> 16, (t >> 8) & st, t & st] : 0) : Lr.black,
        n,
        o,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        _;
      if (!r) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Lr[t]))
          r = Lr[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (o = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                o +
                o +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (r = parseInt(t.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & st, r & st, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (r = [t >> 16, (t >> 8) & st, t & st]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((r = _ = t.match(ns)), !i))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (n = c * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ws(l + 1 / 3, n, o)),
              (r[1] = ws(l, n, o)),
              (r[2] = ws(l - 1 / 3, n, o));
          else if (~t.indexOf("="))
            return (r = t.match(bo)), e && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(ns) || Lr.transparent;
        r = r.map(Number);
      }
      return (
        i &&
          !_ &&
          ((n = r[0] / st),
          (o = r[1] / st),
          (a = r[2] / st),
          (h = Math.max(n, o, a)),
          (d = Math.min(n, o, a)),
          (c = (h + d) / 2),
          h === d
            ? (l = u = 0)
            : ((f = h - d),
              (u = c > 0.5 ? f / (2 - h - d) : f / (h + d)),
              (l =
                h === n
                  ? (o - a) / f + (o < a ? 6 : 0)
                  : h === o
                  ? (a - n) / f + 2
                  : (n - o) / f + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        e && r.length < 4 && (r[3] = 1),
        r
      );
    },
    jo = function (t) {
      var i = [],
        e = [],
        r = -1;
      return (
        t.split(pi).forEach(function (n) {
          var o = n.match(ir) || [];
          i.push.apply(i, o), e.push((r += o.length + 1));
        }),
        (i.c = e),
        i
      );
    },
    Jo = function (t, i, e) {
      var r = "",
        n = (t + r).match(pi),
        o = i ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        h;
      if (!n) return t;
      if (
        ((n = n.map(function (d) {
          return (
            (d = Qo(d, i, 1)) &&
            o +
              (i
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        e && ((c = jo(t)), (l = e.c), l.join(r) !== c.c.join(r)))
      )
        for (u = t.replace(pi, "1").split(ir), h = u.length - 1; a < h; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (c.length ? c : n.length ? n : e).shift());
      if (!u)
        for (u = t.split(pi), h = u.length - 1; a < h; a++) r += u[a] + n[a];
      return r + u[h];
    },
    pi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Lr) s += "|" + t + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    fu = /hsl[a]?\(/,
    ta = function (t) {
      var i = t.join(" "),
        e;
      if (((pi.lastIndex = 0), pi.test(i)))
        return (
          (e = fu.test(i)),
          (t[1] = Jo(t[1], e)),
          (t[0] = Jo(t[0], e, jo(t[1]))),
          !0
        );
    },
    zr,
    be = (function () {
      var s = Date.now,
        t = 500,
        i = 33,
        e = s(),
        r = e,
        n = 1e3 / 240,
        o = n,
        a = [],
        l,
        u,
        c,
        h,
        d,
        f,
        _ = function p(g) {
          var x = s() - r,
            y = g === !0,
            b,
            v,
            w,
            C;
          if (
            ((x > t || x < 0) && (e += x - i),
            (r += x),
            (w = r - e),
            (b = w - o),
            (b > 0 || y) &&
              ((C = ++h.frame),
              (d = w - h.time * 1e3),
              (h.time = w = w / 1e3),
              (o += b + (b >= n ? 4 : n - b)),
              (v = 1)),
            y || (l = u(p)),
            v)
          )
            for (f = 0; f < a.length; f++) a[f](w, d, C, g);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (g) {
            return d / (1e3 / (g || 60));
          },
          wake: function () {
            Co &&
              (!os &&
                rs() &&
                ((Ve = os = window),
                (as = Ve.document || {}),
                (ve.gsap = de),
                (Ve.gsapVersions || (Ve.gsapVersions = [])).push(de.version),
                Eo(dn || Ve.GreenSockGlobals || (!Ve.gsap && Ve) || {}),
                Zo.forEach(Ko)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && h.sleep(),
              (u =
                c ||
                function (g) {
                  return setTimeout(g, (o - h.time * 1e3 + 1) | 0);
                }),
              (zr = 1),
              _(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (zr = 0), (u = kr);
          },
          lagSmoothing: function (g, x) {
            (t = g || 1 / 0), (i = Math.min(x || 33, t));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (o = h.time * 1e3 + n);
          },
          add: function (g, x, y) {
            var b = x
              ? function (v, w, C, S) {
                  g(v, w, C, S), h.remove(b);
                }
              : g;
            return h.remove(g), a[y ? "unshift" : "push"](b), lr(), b;
          },
          remove: function (g, x) {
            ~(x = a.indexOf(g)) && a.splice(x, 1) && f >= x && f--;
          },
          _listeners: a,
        }),
        h
      );
    })(),
    lr = function () {
      return !zr && be.wake();
    },
    j = {},
    hu = /^[\d.\-M][\d.\-,\s]/,
    du = /["']/g,
    pu = function (t) {
      for (
        var i = {},
          e = t.substr(1, t.length - 3).split(":"),
          r = e[0],
          n = 1,
          o = e.length,
          a,
          l,
          u;
        n < o;
        n++
      )
        (l = e[n]),
          (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (i[r] = isNaN(u) ? u.replace(du, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return i;
    },
    _u = function (t) {
      var i = t.indexOf("(") + 1,
        e = t.indexOf(")"),
        r = t.indexOf("(", i);
      return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
    },
    gu = function (t) {
      var i = (t + "").split("("),
        e = j[i[0]];
      return e && i.length > 1 && e.config
        ? e.config.apply(
            null,
            ~t.indexOf("{") ? [pu(i[1])] : _u(t).split(",").map(Do)
          )
        : j._CE && hu.test(t)
        ? j._CE("", t)
        : e;
    },
    ea = function (t) {
      return function (i) {
        return 1 - t(1 - i);
      };
    },
    ia = function s(t, i) {
      for (var e = t._first, r; e; )
        e instanceof ee
          ? s(e, i)
          : e.vars.yoyoEase &&
            (!e._yoyo || !e._repeat) &&
            e._yoyo !== i &&
            (e.timeline
              ? s(e.timeline, i)
              : ((r = e._ease),
                (e._ease = e._yEase),
                (e._yEase = r),
                (e._yoyo = i))),
          (e = e._next);
    },
    Ri = function (t, i) {
      return (t && (mt(t) ? t : j[t] || gu(t))) || i;
    },
    Li = function (t, i, e, r) {
      e === void 0 &&
        (e = function (l) {
          return 1 - i(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
          });
      var n = { easeIn: i, easeOut: e, easeInOut: r },
        o;
      return (
        fe(t, function (a) {
          (j[a] = ve[a] = n), (j[(o = a.toLowerCase())] = e);
          for (var l in n)
            j[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = j[a + "." + l] = n[l];
        }),
        n
      );
    },
    ra = function (t) {
      return function (i) {
        return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
      };
    },
    xs = function s(t, i, e) {
      var r = i >= 1 ? i : 1,
        n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        o = (n / es) * (Math.asin(1 / r) || 0),
        a = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Hl((c - o) * n) + 1;
        },
        l =
          t === "out"
            ? a
            : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : ra(a);
      return (
        (n = es / n),
        (l.config = function (u, c) {
          return s(t, u, c);
        }),
        l
      );
    },
    bs = function s(t, i) {
      i === void 0 && (i = 1.70158);
      var e = function (o) {
          return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
        },
        r =
          t === "out"
            ? e
            : t === "in"
            ? function (n) {
                return 1 - e(1 - n);
              }
            : ra(e);
      return (
        (r.config = function (n) {
          return s(t, n);
        }),
        r
      );
    };
  fe("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
    var i = t < 5 ? t + 1 : t;
    Li(
      s + ",Power" + (i - 1),
      t
        ? function (e) {
            return Math.pow(e, i);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, i);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(e * 2, i) / 2
          : 1 - Math.pow((1 - e) * 2, i) / 2;
      }
    );
  }),
    (j.Linear.easeNone = j.none = j.Linear.easeIn),
    Li("Elastic", xs("in"), xs("out"), xs()),
    (function (s, t) {
      var i = 1 / t,
        e = 2 * i,
        r = 2.5 * i,
        n = function (a) {
          return a < i
            ? s * a * a
            : a < e
            ? s * Math.pow(a - 1.5 / t, 2) + 0.75
            : a < r
            ? s * (a -= 2.25 / t) * a + 0.9375
            : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
        };
      Li(
        "Bounce",
        function (o) {
          return 1 - n(1 - o);
        },
        n
      );
    })(7.5625, 2.75),
    Li("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    Li("Circ", function (s) {
      return -(wo(1 - s * s) - 1);
    }),
    Li("Sine", function (s) {
      return s === 1 ? 1 : -ql(s * Bl) + 1;
    }),
    Li("Back", bs("in"), bs("out"), bs()),
    (j.SteppedEase =
      j.steps =
      ve.SteppedEase =
        {
          config: function (t, i) {
            t === void 0 && (t = 1);
            var e = 1 / t,
              r = t + (i ? 0 : 1),
              n = i ? 1 : 0,
              o = 1 - nt;
            return function (a) {
              return (((r * Or(0, o, a)) | 0) + n) * e;
            };
          },
        }),
    (er.ease = j["quad.out"]),
    fe(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (hs += s + "," + s + "Params,");
      }
    );
  var na = function (t, i) {
      (this.id = Yl++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = i),
        (this.get = i ? i.get : Mo),
        (this.set = i ? i.getSetter : As);
    },
    Nr = (function () {
      function s(i) {
        (this.vars = i),
          (this._delay = +i.delay || 0),
          (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
            ((this._rDelay = i.repeatDelay || 0),
            (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
          (this._ts = 1),
          or(this, +i.duration, 1, 1),
          (this.data = i.data),
          ft && ((this._ctx = ft), ft.data.push(this)),
          zr || be.wake();
      }
      var t = s.prototype;
      return (
        (t.delay = function (e) {
          return e || e === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              or(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, r) {
          if ((lr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              xn(this, e), !n._dp || n.parent || Io(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              $e(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === nt) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), Oo(this, e, r)),
            this
          );
        }),
        (t.time = function (e, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + No(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (t.totalProgress = function (e, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (e, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                  No(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (e, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * n, r)
            : this._repeat
            ? sr(this._tTime, n) + 1
            : 1;
        }),
        (t.timeScale = function (e, r) {
          if (!arguments.length) return this._rts === -nt ? 0 : this._rts;
          if (this._rts === e) return this;
          var n =
            this.parent && this._ts ? yn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -nt ? 0 : this._rts),
            this.totalTime(
              Or(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            wn(this),
            Ql(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (lr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== nt &&
                        (this._tTime -= nt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && $e(r, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (ce(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var r = this.parent || this._dp;
          return r
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? yn(r.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          e === void 0 && (e = Ul);
          var r = Wt;
          return (
            (Wt = e),
            ps(this) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            this.data !== "nested" && e.kill !== !1 && this.kill(),
            (Wt = r),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
            (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(e) : n;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Wo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = e), Wo(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, r) {
          return this.totalTime(Oe(this, e), ce(r));
        }),
        (t.restart = function (e, r) {
          return (
            this.play().totalTime(e ? -this._delay : 0, ce(r)),
            this._dur || (this._zTime = -nt),
            this
          );
        }),
        (t.play = function (e, r) {
          return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, r) {
          return (
            e != null && this.seek(e || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, r) {
          return e != null && this.seek(e, r), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -nt : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -nt), this;
        }),
        (t.isActive = function () {
          var e = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !e ||
            (this._ts &&
              this._initted &&
              e.isActive() &&
              (n = e.rawTime(!0)) >= r &&
              n < this.endTime(!0) - nt)
          );
        }),
        (t.eventCallback = function (e, r, n) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[e] = r),
                  n && (o[e + "Params"] = n),
                  e === "onUpdate" && (this._onUpdate = r))
                : delete o[e],
              this)
            : o[e];
        }),
        (t.then = function (e) {
          var r = this;
          return new Promise(function (n) {
            var o = mt(e) ? e : Ro,
              a = function () {
                var u = r.then;
                (r.then = null),
                  mt(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                  n(o),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (t.kill = function () {
          Rr(this);
        }),
        s
      );
    })();
  we(Nr.prototype, {
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
    _zTime: -nt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var ee = (function (s) {
    Xt(t, s);
    function t(e, r) {
      var n;
      return (
        e === void 0 && (e = {}),
        (n = s.call(this, e) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = ce(e.sortChildren)),
        dt && $e(e.parent || dt, gt(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Fo(gt(n), e.scrollTrigger),
        n
      );
    }
    var i = t.prototype;
    return (
      (i.to = function (r, n, o) {
        return Mr(0, arguments, this), this;
      }),
      (i.from = function (r, n, o) {
        return Mr(1, arguments, this), this;
      }),
      (i.fromTo = function (r, n, o, a) {
        return Mr(2, arguments, this), this;
      }),
      (i.set = function (r, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Pr(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Et(r, n, Oe(this, o), 1),
          this
        );
      }),
      (i.call = function (r, n, o) {
        return $e(this, Et.delayedCall(0, r, n), o);
      }),
      (i.staggerTo = function (r, n, o, a, l, u, c) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Et(r, o, Oe(this, l)),
          this
        );
      }),
      (i.staggerFrom = function (r, n, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (Pr(o).immediateRender = ce(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, u, c)
        );
      }),
      (i.staggerFromTo = function (r, n, o, a, l, u, c, h) {
        return (
          (a.startAt = o),
          (Pr(a).immediateRender = ce(a.immediateRender)),
          this.staggerTo(r, n, a, l, u, c, h)
        );
      }),
      (i.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : Ct(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !u),
          d,
          f,
          _,
          p,
          g,
          x,
          y,
          b,
          v,
          w,
          C,
          S;
        if (
          (this !== dt && c > l && r >= 0 && (c = l),
          c !== this._tTime || o || h)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (r += this._time - a)),
            (d = c),
            (v = this._start),
            (b = this._ts),
            (x = !b),
            h && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (g = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, n, o);
            if (
              ((d = Ct(c % g)),
              c === l
                ? ((p = this._repeat), (d = u))
                : ((w = Ct(c / g)),
                  (p = ~~w),
                  p && p === w && ((d = u), p--),
                  d > u && (d = u)),
              (w = sr(this._tTime, g)),
              !a &&
                this._tTime &&
                w !== p &&
                this._tTime - w * g - this._dur <= 0 &&
                (w = p),
              C && p & 1 && ((d = u - d), (S = 1)),
              p !== w && !this._lock)
            ) {
              var T = C && w & 1,
                A = T === (C && p & 1);
              if (
                (p < w && (T = !T),
                (a = T ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (S ? 0 : Ct(p * g)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && xe(this, "onRepeat"),
                this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  x !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (a = T ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !S && this.invalidate()),
                (this._lock = 0),
                !this._ts && !x)
              )
                return this;
              ia(this, S);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = eu(this, Ct(a), Ct(d))), y && (c -= d - (d = y._start))),
            (this._tTime = c),
            (this._time = d),
            (this._act = !b),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && c && !n && !w && (xe(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (d >= a && r >= 0)
            for (f = this._first; f; ) {
              if (
                ((_ = f._next), (f._act || d >= f._start) && f._ts && y !== f)
              ) {
                if (f.parent !== this) return this.render(r, n, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (d - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (d - f._start) * f._ts,
                    n,
                    o
                  ),
                  d !== this._time || (!this._ts && !x))
                ) {
                  (y = 0), _ && (c += this._zTime = -nt);
                  break;
                }
              }
              f = _;
            }
          else {
            f = this._last;
            for (var k = r < 0 ? r : d; f; ) {
              if (
                ((_ = f._prev), (f._act || k <= f._end) && f._ts && y !== f)
              ) {
                if (f.parent !== this) return this.render(r, n, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (k - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (k - f._start) * f._ts,
                    n,
                    o || (Wt && ps(f))
                  ),
                  d !== this._time || (!this._ts && !x))
                ) {
                  (y = 0), _ && (c += this._zTime = k ? -nt : nt);
                  break;
                }
              }
              f = _;
            }
          }
          if (
            y &&
            !n &&
            (this.pause(),
            (y.render(d >= a ? 0 : -nt)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = v), wn(this), this.render(r, n, o);
          this._onUpdate && !n && xe(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (v === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  hi(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (c || a || !l) &&
                  (xe(
                    this,
                    c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (r, n) {
        var o = this;
        if ((ti(n) || (n = Oe(this, n, r)), !(r instanceof Nr))) {
          if (Vt(r))
            return (
              r.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (Lt(r)) return this.addLabel(r, n);
          if (mt(r)) r = Et.delayedCall(0, r);
          else return this;
        }
        return this !== r ? $e(this, r, n) : this;
      }),
      (i.getChildren = function (r, n, o, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Me);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Et
              ? n && l.push(u)
              : (o && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, n, o)))),
            (u = u._next);
        return l;
      }),
      (i.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
          if (n[o].vars.id === r) return n[o];
      }),
      (i.remove = function (r) {
        return Lt(r)
          ? this.removeLabel(r)
          : mt(r)
          ? this.killTweensOf(r)
          : (r.parent === this && vn(this, r),
            r === this._recent && (this._recent = this._last),
            Di(this));
      }),
      (i.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ct(
                be.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            s.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (r, n) {
        return (this.labels[r] = Oe(this, n)), this;
      }),
      (i.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (i.addPause = function (r, n, o) {
        var a = Et.delayedCall(0, n || kr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), $e(this, a, Oe(this, r))
        );
      }),
      (i.removePause = function (r) {
        var n = this._first;
        for (r = Oe(this, r); n; )
          n._start === r && n.data === "isPause" && hi(n), (n = n._next);
      }),
      (i.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          _i !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (i.getTweensOf = function (r, n) {
        for (var o = [], a = De(r), l = this._first, u = ti(n), c; l; )
          l instanceof Et
            ? Gl(l._targets, a) &&
              (u
                ? (!_i || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              o.push(l)
            : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c),
            (l = l._next);
        return o;
      }),
      (i.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = Oe(o, r),
          l = n,
          u = l.startAt,
          c = l.onStart,
          h = l.onStartParams,
          d = l.immediateRender,
          f,
          _ = Et.to(
            o,
            we(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  nt,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var g =
                      n.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    _._dur !== g && or(_, g, 0, 1).render(_._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(_, h || []);
                },
              },
              n
            )
          );
        return d ? _.render(0) : _;
      }),
      (i.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, we({ startAt: { time: Oe(this, r) } }, o));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Go(this, Oe(this, r));
      }),
      (i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Go(this, Oe(this, r), 1);
      }),
      (i.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + nt);
      }),
      (i.shiftChildren = function (r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (n) for (u in l) l[u] >= o && (l[u] += r);
        return Di(this);
      }),
      (i.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return s.prototype.invalidate.call(this, r);
      }),
      (i.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n; )
          (o = n._next), this.remove(n), (n = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Di(this)
        );
      }),
      (i.totalDuration = function (r) {
        var n = 0,
          o = this,
          a = o._last,
          l = Me,
          u,
          c,
          h;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (h = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), ($e(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((n -= c),
                ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = u);
          or(o, o === dt && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((dt._ts && (Oo(dt, yn(r, dt)), (ko = be.frame)), be.frame >= Po)) {
          Po += at.autoSleep || 120;
          var n = dt._first;
          if ((!n || !n._ts) && at.autoSleep && be._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || be.sleep();
          }
        }
      }),
      t
    );
  })(Nr);
  we(ee.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var mu = function (t, i, e, r, n, o, a) {
      var l = new he(this._pt, t, i, 0, 1, ca, null, n),
        u = 0,
        c = 0,
        h,
        d,
        f,
        _,
        p,
        g,
        x,
        y;
      for (
        l.b = e,
          l.e = r,
          e += "",
          r += "",
          (x = ~r.indexOf("random(")) && (r = Dr(r)),
          o && ((y = [e, r]), o(y, t, i), (e = y[0]), (r = y[1])),
          d = e.match(ss) || [];
        (h = ss.exec(r));

      )
        (_ = h[0]),
          (p = r.substring(u, h.index)),
          f ? (f = (f + 1) % 5) : p.substr(-5) === "rgba(" && (f = 1),
          _ !== d[c++] &&
            ((g = parseFloat(d[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || c === 1 ? p : ",",
              s: g,
              c: _.charAt(1) === "=" ? rr(g, _) - g : parseFloat(_) - g,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = ss.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (So.test(r) || x) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ss = function (t, i, e, r, n, o, a, l, u, c) {
      mt(r) && (r = r(n || 0, t, o));
      var h = t[i],
        d =
          e !== "get"
            ? e
            : mt(h)
            ? u
              ? t[
                  i.indexOf("set") || !mt(t["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : t[i]()
            : h,
        f = mt(h) ? (u ? bu : la) : Es,
        _;
      if (
        (Lt(r) &&
          (~r.indexOf("random(") && (r = Dr(r)),
          r.charAt(1) === "=" &&
            ((_ = rr(d, r) + ($t(d) || 0)), (_ || _ === 0) && (r = _))),
        !c || d !== r || Ts)
      )
        return !isNaN(d * r) && r !== ""
          ? ((_ = new he(
              this._pt,
              t,
              i,
              +d || 0,
              r - (d || 0),
              typeof h == "boolean" ? Tu : ua,
              0,
              f
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, t),
            (this._pt = _))
          : (!h && !(i in t) && ls(i, r),
            mu.call(this, t, i, d, r, f, l || at.stringFilter, u));
    },
    vu = function (t, i, e, r, n) {
      if (
        (mt(t) && (t = Ir(t, n, i, e, r)),
        !He(t) || (t.style && t.nodeType) || Vt(t) || xo(t))
      )
        return Lt(t) ? Ir(t, n, i, e, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Ir(t[a], n, i, e, r);
      return o;
    },
    sa = function (t, i, e, r, n, o) {
      var a, l, u, c;
      if (
        ye[t] &&
        (a = new ye[t]()).init(
          n,
          a.rawVars ? i[t] : vu(i[t], r, n, o, e),
          e,
          r,
          o
        ) !== !1 &&
        ((e._pt = l = new he(e._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        e !== ar)
      )
        for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    _i,
    Ts,
    Cs = function s(t, i, e) {
      var r = t.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        h = r.yoyoEase,
        d = r.keyframes,
        f = r.autoRevert,
        _ = t._dur,
        p = t._startAt,
        g = t._targets,
        x = t.parent,
        y = x && x.data === "nested" ? x.vars.targets : g,
        b = t._overwrite === "auto" && !ts,
        v = t.timeline,
        w,
        C,
        S,
        T,
        A,
        k,
        z,
        P,
        D,
        F,
        W,
        X,
        R;
      if (
        (v && (!d || !n) && (n = "none"),
        (t._ease = Ri(n, er.ease)),
        (t._yEase = h ? ea(Ri(h === !0 ? n : h, er.ease)) : 0),
        h &&
          t._yoyo &&
          !t._repeat &&
          ((h = t._yEase), (t._yEase = t._ease), (t._ease = h)),
        (t._from = !v && !!r.runBackwards),
        !v || (d && !r.stagger))
      ) {
        if (
          ((P = g[0] ? Oi(g[0]).harness : 0),
          (X = P && r[P.prop]),
          (w = mn(r, us)),
          p &&
            (p._zTime < 0 && p.progress(1),
            i < 0 && c && a && !f
              ? p.render(-1, !0)
              : p.revert(c && _ ? pn : $l),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (hi(
              (t._startAt = Et.set(
                g,
                we(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: x,
                    immediateRender: !0,
                    lazy: !p && ce(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return xe(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (Wt || (!a && !f)) && t._startAt.revert(pn),
            a && _ && i <= 0 && e <= 0)
          ) {
            i && (t._zTime = i);
            return;
          }
        } else if (c && _ && !p) {
          if (
            (i && (a = !1),
            (S = we(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && ce(l),
                immediateRender: a,
                stagger: 0,
                parent: x,
              },
              w
            )),
            X && (S[P.prop] = X),
            hi((t._startAt = Et.set(g, S))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (Wt ? t._startAt.revert(pn) : t._startAt.render(-1, !0)),
            (t._zTime = i),
            !a)
          )
            s(t._startAt, nt, nt);
          else if (!i) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (_ && ce(l)) || (l && !_), C = 0;
          C < g.length;
          C++
        ) {
          if (
            ((A = g[C]),
            (z = A._gsap || ds(g)[C]._gsap),
            (t._ptLookup[C] = F = {}),
            cs[z.id] && fi.length && gn(),
            (W = y === g ? C : y.indexOf(A)),
            P &&
              (D = new P()).init(A, X || w, t, W, y) !== !1 &&
              ((t._pt = T =
                new he(t._pt, A, D.name, 0, 1, D.render, D, 0, D.priority)),
              D._props.forEach(function ($) {
                F[$] = T;
              }),
              D.priority && (k = 1)),
            !P || X)
          )
            for (S in w)
              ye[S] && (D = sa(S, w, t, W, A, y))
                ? D.priority && (k = 1)
                : (F[S] = T =
                    Ss.call(t, A, S, "get", w[S], W, y, 0, r.stringFilter));
          t._op && t._op[C] && t.kill(A, t._op[C]),
            b &&
              t._pt &&
              ((_i = t),
              dt.killTweensOf(A, F, t.globalTime(i)),
              (R = !t.parent),
              (_i = 0)),
            t._pt && l && (cs[z.id] = 1);
        }
        k && fa(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !R),
        d && i <= 0 && v.render(Me, !0, !0);
    },
    yu = function (t, i, e, r, n, o, a, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
        c,
        h,
        d,
        f;
      if (!u)
        for (
          u = t._ptCache[i] = [], d = t._ptLookup, f = t._targets.length;
          f--;

        ) {
          if (((c = d[f][i]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== i && c.fp !== i; ) c = c._next;
          if (!c)
            return (
              (Ts = 1),
              (t.vars[i] = "+=0"),
              Cs(t, a),
              (Ts = 0),
              l ? Ar(i + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (h = u[f]),
          (c = h._pt || h),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c),
          (c.c = e - c.s),
          h.e && (h.e = wt(e) + $t(h.e)),
          h.b && (h.b = c.s + $t(h.b));
    },
    wu = function (t, i) {
      var e = t[0] ? Oi(t[0]).harness : 0,
        r = e && e.aliases,
        n,
        o,
        a,
        l;
      if (!r) return i;
      n = nr({}, i);
      for (o in r)
        if (o in n)
          for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
      return n;
    },
    xu = function (t, i, e, r) {
      var n = i.ease || r || "power1.inOut",
        o,
        a;
      if (Vt(i))
        (a = e[t] || (e[t] = [])),
          i.forEach(function (l, u) {
            return a.push({ t: (u / (i.length - 1)) * 100, v: l, e: n });
          });
      else
        for (o in i)
          (a = e[o] || (e[o] = [])),
            o === "ease" || a.push({ t: parseFloat(t), v: i[o], e: n });
    },
    Ir = function (t, i, e, r, n) {
      return mt(t)
        ? t.call(i, e, r, n)
        : Lt(t) && ~t.indexOf("random(")
        ? Dr(t)
        : t;
    },
    oa = hs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    aa = {};
  fe(oa + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (aa[s] = 1);
  });
  var Et = (function (s) {
    Xt(t, s);
    function t(e, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Pr(r)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        h = l.immediateRender,
        d = l.stagger,
        f = l.overwrite,
        _ = l.keyframes,
        p = l.defaults,
        g = l.scrollTrigger,
        x = l.yoyoEase,
        y = r.parent || dt,
        b = (Vt(e) || xo(e) ? ti(e[0]) : "length" in r) ? [e] : De(e),
        v,
        w,
        C,
        S,
        T,
        A,
        k,
        z;
      if (
        ((a._targets = b.length
          ? ds(b)
          : Ar(
              "GSAP target " + e + " not found. https://gsap.com",
              !at.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        _ || d || hn(u) || hn(c))
      ) {
        if (
          ((r = a.vars),
          (v = a.timeline =
            new ee({
              data: "nested",
              defaults: p || {},
              targets: y && y.data === "nested" ? y.vars.targets : b,
            })),
          v.kill(),
          (v.parent = v._dp = gt(a)),
          (v._start = 0),
          d || hn(u) || hn(c))
        ) {
          if (((S = b.length), (k = d && qo(d)), He(d)))
            for (T in d) ~oa.indexOf(T) && (z || (z = {}), (z[T] = d[T]));
          for (w = 0; w < S; w++)
            (C = mn(r, aa)),
              (C.stagger = 0),
              x && (C.yoyoEase = x),
              z && nr(C, z),
              (A = b[w]),
              (C.duration = +Ir(u, gt(a), w, A, b)),
              (C.delay = (+Ir(c, gt(a), w, A, b) || 0) - a._delay),
              !d &&
                S === 1 &&
                C.delay &&
                ((a._delay = c = C.delay), (a._start += c), (C.delay = 0)),
              v.to(A, C, k ? k(w, A, b) : 0),
              (v._ease = j.none);
          v.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (_) {
          Pr(we(v.vars.defaults, { ease: "none" })),
            (v._ease = Ri(_.ease || r.ease || "none"));
          var P = 0,
            D,
            F,
            W;
          if (Vt(_))
            _.forEach(function (X) {
              return v.to(b, X, ">");
            }),
              v.duration();
          else {
            C = {};
            for (T in _)
              T === "ease" || T === "easeEach" || xu(T, _[T], C, _.easeEach);
            for (T in C)
              for (
                D = C[T].sort(function (X, R) {
                  return X.t - R.t;
                }),
                  P = 0,
                  w = 0;
                w < D.length;
                w++
              )
                (F = D[w]),
                  (W = {
                    ease: F.e,
                    duration: ((F.t - (w ? D[w - 1].t : 0)) / 100) * u,
                  }),
                  (W[T] = F.v),
                  v.to(b, W, P),
                  (P += W.duration);
            v.duration() < u && v.to({}, { duration: u - v.duration() });
          }
        }
        u || a.duration((u = v.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !ts && ((_i = gt(a)), dt.killTweensOf(b), (_i = 0)),
        $e(y, gt(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (h ||
          (!u &&
            !_ &&
            a._start === Ct(y._time) &&
            ce(h) &&
            jl(gt(a)) &&
            y.data !== "nested")) &&
          ((a._tTime = -nt), a.render(Math.max(0, -c) || 0)),
        g && Fo(gt(a), g),
        a
      );
    }
    var i = t.prototype;
    return (
      (i.render = function (r, n, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          h = r > l - nt && !c ? l : r < nt ? 0 : r,
          d,
          f,
          _,
          p,
          g,
          x,
          y,
          b,
          v;
        if (!u) tu(this, r, n, o);
        else if (
          h !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((d = h), (b = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(p * 100 + r, n, o);
            if (
              ((d = Ct(h % p)),
              h === l
                ? ((_ = this._repeat), (d = u))
                : ((g = Ct(h / p)),
                  (_ = ~~g),
                  _ && _ === g ? ((d = u), _--) : d > u && (d = u)),
              (x = this._yoyo && _ & 1),
              x && ((v = this._yEase), (d = u - d)),
              (g = sr(this._tTime, p)),
              d === a && !o && this._initted && _ === g)
            )
              return (this._tTime = h), this;
            _ !== g &&
              (b && this._yEase && ia(b, x),
              this.vars.repeatRefresh &&
                !x &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Ct(p * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Xo(this, c ? r : d, o, n, h)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g))
              return this;
            if (u !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = h),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (v || this._ease)(d / u)),
            this._from && (this.ratio = y = 1 - y),
            !a && h && !n && !g && (xe(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (f = this._pt; f; ) f.r(y, f.d), (f = f._next);
          (b && b.render(r < 0 ? r : b._dur * b._ease(d / this._dur), n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && _s(this, r, n, o), xe(this, "onUpdate")),
            this._repeat &&
              _ !== g &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              xe(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && _s(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                hi(this, 1),
              !n &&
                !(c && !a) &&
                (h || a || x) &&
                (xe(this, h === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          s.prototype.invalidate.call(this, r)
        );
      }),
      (i.resetTo = function (r, n, o, a, l) {
        zr || be.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Cs(this, u),
          (c = this._ease(u / this._dur)),
          yu(this, r, n, o, a, c, u, l)
            ? this.resetTo(r, n, o, a, 1)
            : (xn(this, 0),
              this.parent ||
                zo(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (i.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Rr(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Wt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, _i && _i.vars.overwrite !== !0)
              ._first || Rr(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              or(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? De(r) : a,
          u = this._ptLookup,
          c = this._pt,
          h,
          d,
          f,
          _,
          p,
          g,
          x;
        if ((!n || n === "all") && Kl(a, l))
          return n === "all" && (this._pt = 0), Rr(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (Lt(n) &&
                ((p = {}),
                fe(n, function (y) {
                  return (p[y] = 1);
                }),
                (n = p)),
              (n = wu(a, n))),
            x = a.length;
          x--;

        )
          if (~l.indexOf(a[x])) {
            (d = u[x]),
              n === "all"
                ? ((h[x] = n), (_ = d), (f = {}))
                : ((f = h[x] = h[x] || {}), (_ = n));
            for (p in _)
              (g = d && d[p]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(p) === !0) &&
                    vn(this, g, "_pt"),
                  delete d[p]),
                f !== "all" && (f[p] = 1);
          }
        return this._initted && !this._pt && c && Rr(this), this;
      }),
      (t.to = function (r, n) {
        return new t(r, n, arguments[2]);
      }),
      (t.from = function (r, n) {
        return Mr(1, arguments);
      }),
      (t.delayedCall = function (r, n, o, a) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (t.fromTo = function (r, n, o) {
        return Mr(2, arguments);
      }),
      (t.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
      }),
      (t.killTweensOf = function (r, n, o) {
        return dt.killTweensOf(r, n, o);
      }),
      t
    );
  })(Nr);
  we(Et.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    fe("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Et[s] = function () {
        var t = new ee(),
          i = ms.call(arguments, 0);
        return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
      };
    });
  var Es = function (t, i, e) {
      return (t[i] = e);
    },
    la = function (t, i, e) {
      return t[i](e);
    },
    bu = function (t, i, e, r) {
      return t[i](r.fp, e);
    },
    Su = function (t, i, e) {
      return t.setAttribute(i, e);
    },
    As = function (t, i) {
      return mt(t[i]) ? la : is(t[i]) && t.setAttribute ? Su : Es;
    },
    ua = function (t, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
    },
    Tu = function (t, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * t), i);
    },
    ca = function (t, i) {
      var e = i._pt,
        r = "";
      if (!t && i.b) r = i.b;
      else if (t === 1 && i.e) r = i.e;
      else {
        for (; e; )
          (r =
            e.p +
            (e.m
              ? e.m(e.s + e.c * t)
              : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
            r),
            (e = e._next);
        r += i.c;
      }
      i.set(i.t, i.p, r, i);
    },
    ks = function (t, i) {
      for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
    },
    Cu = function (t, i, e, r) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === r && n.modifier(t, i, e), (n = o);
    },
    Eu = function (t) {
      for (var i = this._pt, e, r; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? vn(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    Au = function (t, i, e, r) {
      r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
    },
    fa = function (t) {
      for (var i = t._pt, e, r, n, o; i; ) {
        for (e = i._next, r = n; r && r.pr > i.pr; ) r = r._next;
        (i._prev = r ? r._prev : o) ? (i._prev._next = i) : (n = i),
          (i._next = r) ? (r._prev = i) : (o = i),
          (i = e);
      }
      t._pt = n;
    },
    he = (function () {
      function s(i, e, r, n, o, a, l, u, c) {
        (this.t = e),
          (this.s = n),
          (this.c = o),
          (this.p = r),
          (this.r = a || ua),
          (this.d = l || this),
          (this.set = u || Es),
          (this.pr = c || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var t = s.prototype;
      return (
        (t.modifier = function (e, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Au),
            (this.m = e),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  fe(
    hs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (us[s] = 1);
    }
  ),
    (ve.TweenMax = ve.TweenLite = Et),
    (ve.TimelineLite = ve.TimelineMax = ee),
    (dt = new ee({
      sortChildren: !1,
      defaults: er,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (at.stringFilter = ta);
  var zi = [],
    bn = {},
    ku = [],
    ha = 0,
    Pu = 0,
    Ps = function (t) {
      return (bn[t] || ku).map(function (i) {
        return i();
      });
    },
    Ms = function () {
      var t = Date.now(),
        i = [];
      t - ha > 2 &&
        (Ps("matchMediaInit"),
        zi.forEach(function (e) {
          var r = e.queries,
            n = e.conditions,
            o,
            a,
            l,
            u;
          for (a in r)
            (o = Ve.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== n[a] && ((n[a] = o), (u = 1));
          u && (e.revert(), l && i.push(e));
        }),
        Ps("matchMediaRevert"),
        i.forEach(function (e) {
          return e.onMatch(e, function (r) {
            return e.add(null, r);
          });
        }),
        (ha = t),
        Ps("matchMedia"));
    },
    da = (function () {
      function s(i, e) {
        (this.selector = e && vs(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Pu++),
          i && this.add(i);
      }
      var t = s.prototype;
      return (
        (t.add = function (e, r, n) {
          mt(e) && ((n = r), (r = e), (e = mt));
          var o = this,
            a = function () {
              var u = ft,
                c = o.selector,
                h;
              return (
                u && u !== o && u.data.push(o),
                n && (o.selector = vs(n)),
                (ft = o),
                (h = r.apply(o, arguments)),
                mt(h) && o._r.push(h),
                (ft = u),
                (o.selector = c),
                (o.isReverted = !1),
                h
              );
            };
          return (
            (o.last = a),
            e === mt
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : e
              ? (o[e] = a)
              : a
          );
        }),
        (t.ignore = function (e) {
          var r = ft;
          (ft = null), e(this), (ft = r);
        }),
        (t.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? e.push.apply(e, r.getTweens())
                : r instanceof Et &&
                    !(r.parent && r.parent.data === "nested") &&
                    e.push(r);
            }),
            e
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, r) {
          var n = this;
          if (
            (e
              ? (function () {
                  for (var a = n.getTweens(), l = n.data.length, u; l--; )
                    (u = n.data[l]),
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
                      .sort(function (c, h) {
                        return h.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(e);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (u = n.data[l]),
                      u instanceof ee
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Et) && u.revert && u.revert(e);
                  n._r.forEach(function (c) {
                    return c(e, n);
                  }),
                    (n.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            r)
          )
            for (var o = zi.length; o--; )
              zi[o].id === this.id && zi.splice(o, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        s
      );
    })(),
    Mu = (function () {
      function s(i) {
        (this.contexts = []), (this.scope = i), ft && ft.data.push(this);
      }
      var t = s.prototype;
      return (
        (t.add = function (e, r, n) {
          He(e) || (e = { matches: e });
          var o = new da(0, n || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          ft && !o.selector && (o.selector = ft.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = e);
          for (u in e)
            u === "all"
              ? (c = 1)
              : ((l = Ve.matchMedia(e[u])),
                l &&
                  (zi.indexOf(o) < 0 && zi.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Ms)
                    : l.addEventListener("change", Ms)));
          return (
            c &&
              r(o, function (h) {
                return o.add(null, h);
              }),
            this
          );
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (r) {
            return r.kill(e, !0);
          });
        }),
        s
      );
    })(),
    Sn = {
      registerPlugin: function () {
        for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
          i[e] = arguments[e];
        i.forEach(function (r) {
          return Ko(r);
        });
      },
      timeline: function (t) {
        return new ee(t);
      },
      getTweensOf: function (t, i) {
        return dt.getTweensOf(t, i);
      },
      getProperty: function (t, i, e, r) {
        Lt(t) && (t = De(t)[0]);
        var n = Oi(t || {}).get,
          o = e ? Ro : Do;
        return (
          e === "native" && (e = ""),
          t &&
            (i
              ? o(((ye[i] && ye[i].get) || n)(t, i, e, r))
              : function (a, l, u) {
                  return o(((ye[a] && ye[a].get) || n)(t, a, l, u));
                })
        );
      },
      quickSetter: function (t, i, e) {
        if (((t = De(t)), t.length > 1)) {
          var r = t.map(function (c) {
              return de.quickSetter(c, i, e);
            }),
            n = r.length;
          return function (c) {
            for (var h = n; h--; ) r[h](c);
          };
        }
        t = t[0] || {};
        var o = ye[i],
          a = Oi(t),
          l = (a.harness && (a.harness.aliases || {})[i]) || i,
          u = o
            ? function (c) {
                var h = new o();
                (ar._pt = 0),
                  h.init(t, e ? c + e : c, ar, 0, [t]),
                  h.render(1, h),
                  ar._pt && ks(1, ar);
              }
            : a.set(t, l);
        return o
          ? u
          : function (c) {
              return u(t, l, e ? c + e : c, a, 1);
            };
      },
      quickTo: function (t, i, e) {
        var r,
          n = de.to(
            t,
            we(
              ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              e || {}
            )
          ),
          o = function (l, u, c) {
            return n.resetTo(i, l, u, c);
          };
        return (o.tween = n), o;
      },
      isTweening: function (t) {
        return dt.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ri(t.ease, er.ease)), Lo(er, t || {});
      },
      config: function (t) {
        return Lo(at, t || {});
      },
      registerEffect: function (t) {
        var i = t.name,
          e = t.effect,
          r = t.plugins,
          n = t.defaults,
          o = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !ye[a] &&
            !ve[a] &&
            Ar(i + " effect requires " + a + " plugin.")
          );
        }),
          (fs[i] = function (a, l, u) {
            return e(De(a), we(l || {}, n), u);
          }),
          o &&
            (ee.prototype[i] = function (a, l, u) {
              return this.add(fs[i](a, He(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, i) {
        j[t] = Ri(i);
      },
      parseEase: function (t, i) {
        return arguments.length ? Ri(t, i) : j;
      },
      getById: function (t) {
        return dt.getById(t);
      },
      exportRoot: function (t, i) {
        t === void 0 && (t = {});
        var e = new ee(t),
          r,
          n;
        for (
          e.smoothChildTiming = ce(t.smoothChildTiming),
            dt.remove(e),
            e._dp = 0,
            e._time = e._tTime = dt._time,
            r = dt._first;
          r;

        )
          (n = r._next),
            (i ||
              !(
                !r._dur &&
                r instanceof Et &&
                r.vars.onComplete === r._targets[0]
              )) &&
              $e(e, r, r._start - r._delay),
            (r = n);
        return $e(dt, e, 0), e;
      },
      context: function (t, i) {
        return t ? new da(t, i) : ft;
      },
      matchMedia: function (t) {
        return new Mu(t);
      },
      matchMediaRefresh: function () {
        return (
          zi.forEach(function (t) {
            var i = t.conditions,
              e,
              r;
            for (r in i) i[r] && ((i[r] = !1), (e = 1));
            e && t.revert();
          }) || Ms()
        );
      },
      addEventListener: function (t, i) {
        var e = bn[t] || (bn[t] = []);
        ~e.indexOf(i) || e.push(i);
      },
      removeEventListener: function (t, i) {
        var e = bn[t],
          r = e && e.indexOf(i);
        r >= 0 && e.splice(r, 1);
      },
      utils: {
        wrap: lu,
        wrapYoyo: uu,
        distribute: qo,
        random: Vo,
        snap: Ho,
        normalize: au,
        getUnit: $t,
        clamp: ru,
        splitColor: Qo,
        toArray: De,
        selector: vs,
        mapRange: Uo,
        pipe: su,
        unitize: ou,
        interpolate: cu,
        shuffle: Yo,
      },
      install: Eo,
      effects: fs,
      ticker: be,
      updateRoot: ee.updateRoot,
      plugins: ye,
      globalTimeline: dt,
      core: {
        PropTween: he,
        globals: Ao,
        Tween: Et,
        Timeline: ee,
        Animation: Nr,
        getCache: Oi,
        _removeLinkedListItem: vn,
        reverting: function () {
          return Wt;
        },
        context: function (t) {
          return t && ft && (ft.data.push(t), (t._ctx = ft)), ft;
        },
        suppressOverwrites: function (t) {
          return (ts = t);
        },
      },
    };
  fe("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (Sn[s] = Et[s]);
  }),
    be.add(ee.updateRoot),
    (ar = Sn.to({}, { duration: 0 }));
  var Ou = function (t, i) {
      for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
        e = e._next;
      return e;
    },
    Du = function (t, i) {
      var e = t._targets,
        r,
        n,
        o;
      for (r in i)
        for (n = e.length; n--; )
          (o = t._ptLookup[n][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Ou(o, r)),
              o && o.modifier && o.modifier(i[r], t, e[n], r));
    },
    Os = function (t, i) {
      return {
        name: t,
        headless: 1,
        rawVars: 1,
        init: function (r, n, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Lt(n) &&
                ((l = {}),
                fe(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              i)
            ) {
              l = {};
              for (u in n) l[u] = i(n[u]);
              n = l;
            }
            Du(a, n);
          };
        },
      };
    },
    de =
      Sn.registerPlugin(
        {
          name: "attr",
          init: function (t, i, e, r, n) {
            var o, a, l;
            this.tween = e;
            for (o in i)
              (l = t.getAttribute(o) || ""),
                (a = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  i[o],
                  r,
                  n,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (t, i) {
            for (var e = i._pt; e; )
              Wt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (t, i) {
            for (var e = i.length; e--; )
              this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
          },
        },
        Os("roundProps", ys),
        Os("modifiers"),
        Os("snap", Ho)
      ) || Sn;
  (Et.version = ee.version = de.version = "3.13.0"),
    (Co = 1),
    rs() && lr(),
    j.Power0,
    j.Power1,
    j.Power2,
    j.Power3,
    j.Power4,
    j.Linear,
    j.Quad,
    j.Cubic,
    j.Quart,
    j.Quint,
    j.Strong,
    j.Elastic,
    j.Back,
    j.SteppedEase,
    j.Bounce,
    j.Sine,
    j.Expo,
    j.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var pa,
    gi,
    ur,
    Ds,
    Ni,
    _a,
    Rs,
    Ru = function () {
      return typeof window != "undefined";
    },
    ei = {},
    Ii = 180 / Math.PI,
    cr = Math.PI / 180,
    fr = Math.atan2,
    ga = 1e8,
    Ls = /([A-Z])/g,
    Lu = /(left|right|width|margin|padding|x)/i,
    zu = /[\s,\(]\S/,
    Ue = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    zs = function (t, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
    },
    Nu = function (t, i) {
      return i.set(
        i.t,
        i.p,
        t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
        i
      );
    },
    Iu = function (t, i) {
      return i.set(
        i.t,
        i.p,
        t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    Fu = function (t, i) {
      var e = i.s + i.c * t;
      i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    ma = function (t, i) {
      return i.set(i.t, i.p, t ? i.e : i.b, i);
    },
    va = function (t, i) {
      return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
    },
    Xu = function (t, i, e) {
      return (t.style[i] = e);
    },
    Wu = function (t, i, e) {
      return t.style.setProperty(i, e);
    },
    Bu = function (t, i, e) {
      return (t._gsap[i] = e);
    },
    Yu = function (t, i, e) {
      return (t._gsap.scaleX = t._gsap.scaleY = e);
    },
    qu = function (t, i, e, r, n) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = e), o.renderTransform(n, o);
    },
    Hu = function (t, i, e, r, n) {
      var o = t._gsap;
      (o[i] = e), o.renderTransform(n, o);
    },
    pt = "transform",
    pe = pt + "Origin",
    Vu = function s(t, i) {
      var e = this,
        r = this.target,
        n = r.style,
        o = r._gsap;
      if (t in ei && n) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = Ue[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                  return (e.tfm[a] = ii(r, a));
                })
              : (this.tfm[t] = o.x ? o[t] : ii(r, t)),
            t === pe && (this.tfm.zOrigin = o.zOrigin);
        else
          return Ue.transform.split(",").forEach(function (a) {
            return s.call(e, a, i);
          });
        if (this.props.indexOf(pt) >= 0) return;
        o.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(pe, i, "")),
          (t = pt);
      }
      (n || i) && this.props.push(t, i, n[t]);
    },
    ya = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    $u = function () {
      var t = this.props,
        i = this.target,
        e = i.style,
        r = i._gsap,
        n,
        o;
      for (n = 0; n < t.length; n += 3)
        t[n + 1]
          ? t[n + 1] === 2
            ? i[t[n]](t[n + 2])
            : (i[t[n]] = t[n + 2])
          : t[n + 2]
          ? (e[t[n]] = t[n + 2])
          : e.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(Ls, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Rs()),
          (!n || !n.isStart) &&
            !e[pt] &&
            (ya(e),
            r.zOrigin &&
              e[pe] &&
              ((e[pe] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    wa = function (t, i) {
      var e = { target: t, props: [], revert: $u, save: Vu };
      return (
        t._gsap || de.core.getCache(t),
        i &&
          t.style &&
          t.nodeType &&
          i.split(",").forEach(function (r) {
            return e.save(r);
          }),
        e
      );
    },
    xa,
    Ns = function (t, i) {
      var e = gi.createElementNS
        ? gi.createElementNS(
            (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : gi.createElement(t);
      return e && e.style ? e : gi.createElement(t);
    },
    Re = function s(t, i, e) {
      var r = getComputedStyle(t);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(Ls, "-$1").toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!e && s(t, hr(i) || i, 1)) ||
        ""
      );
    },
    ba = "O,Moz,ms,Ms,Webkit".split(","),
    hr = function (t, i, e) {
      var r = i || Ni,
        n = r.style,
        o = 5;
      if (t in n && !e) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(ba[o] + t in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ba[o] : "") + t;
    },
    Is = function () {
      Ru() &&
        window.document &&
        ((pa = window),
        (gi = pa.document),
        (ur = gi.documentElement),
        (Ni = Ns("div") || { style: {} }),
        Ns("div"),
        (pt = hr(pt)),
        (pe = pt + "Origin"),
        (Ni.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (xa = !!hr("perspective")),
        (Rs = de.core.reverting),
        (Ds = 1));
    },
    Sa = function (t) {
      var i = t.ownerSVGElement,
        e = Ns(
          "svg",
          (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = t.cloneNode(!0),
        n;
      (r.style.display = "block"), e.appendChild(r), ur.appendChild(e);
      try {
        n = r.getBBox();
      } catch (o) {}
      return e.removeChild(r), ur.removeChild(e), n;
    },
    Ta = function (t, i) {
      for (var e = i.length; e--; )
        if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
    },
    Ca = function (t) {
      var i, e;
      try {
        i = t.getBBox();
      } catch (r) {
        (i = Sa(t)), (e = 1);
      }
      return (
        (i && (i.width || i.height)) || e || (i = Sa(t)),
        i && !i.width && !i.x && !i.y
          ? {
              x: +Ta(t, ["x", "cx", "x1"]) || 0,
              y: +Ta(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : i
      );
    },
    Ea = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ca(t));
    },
    Fi = function (t, i) {
      if (i) {
        var e = t.style,
          r;
        i in ei && i !== pe && (i = pt),
          e.removeProperty
            ? ((r = i.substr(0, 2)),
              (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
              e.removeProperty(
                r === "--" ? i : i.replace(Ls, "-$1").toLowerCase()
              ))
            : e.removeAttribute(i);
      }
    },
    mi = function (t, i, e, r, n, o) {
      var a = new he(t._pt, i, e, 0, 1, o ? va : ma);
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(e), a;
    },
    Aa = { deg: 1, rad: 1, turn: 1 },
    Uu = { grid: 1, flex: 1 },
    vi = function s(t, i, e, r) {
      var n = parseFloat(e) || 0,
        o = (e + "").trim().substr((n + "").length) || "px",
        a = Ni.style,
        l = Lu.test(i),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        d = r === "px",
        f = r === "%",
        _,
        p,
        g,
        x;
      if (r === o || !n || Aa[r] || Aa[o]) return n;
      if (
        (o !== "px" && !d && (n = s(t, i, e, "px")),
        (x = t.getCTM && Ea(t)),
        (f || o === "%") && (ei[i] || ~i.indexOf("adius")))
      )
        return (
          (_ = x ? t.getBBox()[l ? "width" : "height"] : t[c]),
          wt(f ? (n / _) * h : (n / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = h + (d ? o : r)),
        (p =
          (r !== "rem" && ~i.indexOf("adius")) ||
          (r === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        x && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === gi || !p.appendChild) && (p = gi.body),
        (g = p._gsap),
        g && f && g.width && l && g.time === be.time && !g.uncache)
      )
        return wt((n / g.width) * h);
      if (f && (i === "height" || i === "width")) {
        var y = t.style[i];
        (t.style[i] = h + r), (_ = t[c]), y ? (t.style[i] = y) : Fi(t, i);
      } else
        (f || o === "%") &&
          !Uu[Re(p, "display")] &&
          (a.position = Re(t, "position")),
          p === t && (a.position = "static"),
          p.appendChild(Ni),
          (_ = Ni[c]),
          p.removeChild(Ni),
          (a.position = "absolute");
      return (
        l && f && ((g = Oi(p)), (g.time = be.time), (g.width = p[c])),
        wt(d ? (_ * n) / h : _ && n ? (h / _) * n : 0)
      );
    },
    ii = function (t, i, e, r) {
      var n;
      return (
        Ds || Is(),
        i in Ue &&
          i !== "transform" &&
          ((i = Ue[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
        ei[i] && i !== "transform"
          ? ((n = Xr(t, r)),
            (n =
              i !== "transformOrigin"
                ? n[i]
                : n.svg
                ? n.origin
                : Cn(Re(t, pe)) + " " + n.zOrigin + "px"))
          : ((n = t.style[i]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Tn[i] && Tn[i](t, i, e)) ||
                Re(t, i) ||
                Mo(t, i) ||
                (i === "opacity" ? 1 : 0))),
        e && !~(n + "").trim().indexOf(" ") ? vi(t, i, n, e) + e : n
      );
    },
    Gu = function (t, i, e, r) {
      if (!e || e === "none") {
        var n = hr(i, t, 1),
          o = n && Re(t, n, 1);
        o && o !== e
          ? ((i = n), (e = o))
          : i === "borderColor" && (e = Re(t, "borderTopColor"));
      }
      var a = new he(this._pt, t.style, i, 0, 1, ca),
        l = 0,
        u = 0,
        c,
        h,
        d,
        f,
        _,
        p,
        g,
        x,
        y,
        b,
        v,
        w;
      if (
        ((a.b = e),
        (a.e = r),
        (e += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Re(t, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = t.style[i]),
          (t.style[i] = r),
          (r = Re(t, i) || r),
          p ? (t.style[i] = p) : Fi(t, i)),
        (c = [e, r]),
        ta(c),
        (e = c[0]),
        (r = c[1]),
        (d = e.match(ir) || []),
        (w = r.match(ir) || []),
        w.length)
      ) {
        for (; (h = ir.exec(r)); )
          (g = h[0]),
            (y = r.substring(l, h.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (_ = 1),
            g !== (p = d[u++] || "") &&
              ((f = parseFloat(p) || 0),
              (v = p.substr((f + "").length)),
              g.charAt(1) === "=" && (g = rr(f, g) + v),
              (x = parseFloat(g)),
              (b = g.substr((x + "").length)),
              (l = ir.lastIndex - b.length),
              b ||
                ((b = b || at.units[i] || v),
                l === r.length && ((r += b), (a.e += b))),
              v !== b && (f = vi(t, i, p, b) || 0),
              (a._pt = {
                _next: a._pt,
                p: y || u === 1 ? y : ",",
                s: f,
                c: x - f,
                m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = i === "display" && r === "none" ? va : ma;
      return So.test(r) && (a.e = 0), (this._pt = a), a;
    },
    ka = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Zu = function (t) {
      var i = t.split(" "),
        e = i[0],
        r = i[1] || "50%";
      return (
        (e === "top" || e === "bottom" || r === "left" || r === "right") &&
          ((t = e), (e = r), (r = t)),
        (i[0] = ka[e] || e),
        (i[1] = ka[r] || r),
        i.join(" ")
      );
    },
    Ku = function (t, i) {
      if (i.tween && i.tween._time === i.tween._dur) {
        var e = i.t,
          r = e.style,
          n = i.u,
          o = e._gsap,
          a,
          l,
          u;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), u = n.length; --u > -1; )
            (a = n[u]),
              ei[a] && ((l = 1), (a = a === "transformOrigin" ? pe : pt)),
              Fi(e, a);
        l &&
          (Fi(e, pt),
          o &&
            (o.svg && e.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Xr(e, 1),
            (o.uncache = 1),
            ya(r)));
      }
    },
    Tn = {
      clearProps: function (t, i, e, r, n) {
        if (n.data !== "isFromStart") {
          var o = (t._pt = new he(t._pt, i, e, 0, 0, Ku));
          return (o.u = r), (o.pr = -10), (o.tween = n), t._props.push(e), 1;
        }
      },
    },
    Fr = [1, 0, 0, 1, 0, 0],
    Pa = {},
    Ma = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Oa = function (t) {
      var i = Re(t, pt);
      return Ma(i) ? Fr : i.substr(7).match(bo).map(wt);
    },
    Fs = function (t, i) {
      var e = t._gsap || Oi(t),
        r = t.style,
        n = Oa(t),
        o,
        a,
        l,
        u;
      return e.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Fr : n)
        : (n === Fr &&
            !t.offsetParent &&
            t !== ur &&
            !e.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = t.parentNode),
            (!o || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((u = 1), (a = t.nextElementSibling), ur.appendChild(t)),
            (n = Oa(t)),
            l ? (r.display = l) : Fi(t, "display"),
            u &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : ur.removeChild(t))),
          i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Xs = function (t, i, e, r, n, o) {
      var a = t._gsap,
        l = n || Fs(t, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        h = a.xOffset || 0,
        d = a.yOffset || 0,
        f = l[0],
        _ = l[1],
        p = l[2],
        g = l[3],
        x = l[4],
        y = l[5],
        b = i.split(" "),
        v = parseFloat(b[0]) || 0,
        w = parseFloat(b[1]) || 0,
        C,
        S,
        T,
        A;
      e
        ? l !== Fr &&
          (S = f * g - _ * p) &&
          ((T = v * (g / S) + w * (-p / S) + (p * y - g * x) / S),
          (A = v * (-_ / S) + w * (f / S) - (f * y - _ * x) / S),
          (v = T),
          (w = A))
        : ((C = Ca(t)),
          (v = C.x + (~b[0].indexOf("%") ? (v / 100) * C.width : v)),
          (w =
            C.y + (~(b[1] || b[0]).indexOf("%") ? (w / 100) * C.height : w))),
        r || (r !== !1 && a.smooth)
          ? ((x = v - u),
            (y = w - c),
            (a.xOffset = h + (x * f + y * p) - x),
            (a.yOffset = d + (x * _ + y * g) - y))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = v),
        (a.yOrigin = w),
        (a.smooth = !!r),
        (a.origin = i),
        (a.originIsAbsolute = !!e),
        (t.style[pe] = "0px 0px"),
        o &&
          (mi(o, a, "xOrigin", u, v),
          mi(o, a, "yOrigin", c, w),
          mi(o, a, "xOffset", h, a.xOffset),
          mi(o, a, "yOffset", d, a.yOffset)),
        t.setAttribute("data-svg-origin", v + " " + w);
    },
    Xr = function (t, i) {
      var e = t._gsap || new na(t);
      if ("x" in e && !i && !e.uncache) return e;
      var r = t.style,
        n = e.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = Re(t, pe) || "0",
        c,
        h,
        d,
        f,
        _,
        p,
        g,
        x,
        y,
        b,
        v,
        w,
        C,
        S,
        T,
        A,
        k,
        z,
        P,
        D,
        F,
        W,
        X,
        R,
        $,
        q,
        m,
        J,
        ut,
        Dt,
        ct,
        Yt;
      return (
        (c = h = d = p = g = x = y = b = v = 0),
        (f = _ = 1),
        (e.svg = !!(t.getCTM && Ea(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[pt] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[pt] !== "none" ? l[pt] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (S = Fs(t, e.svg)),
        e.svg &&
          (e.uncache
            ? (($ = t.getBBox()),
              (u = e.xOrigin - $.x + "px " + (e.yOrigin - $.y) + "px"),
              (R = ""))
            : (R = !i && t.getAttribute("data-svg-origin")),
          Xs(t, R || u, !!R || e.originIsAbsolute, e.smooth !== !1, S)),
        (w = e.xOrigin || 0),
        (C = e.yOrigin || 0),
        S !== Fr &&
          ((z = S[0]),
          (P = S[1]),
          (D = S[2]),
          (F = S[3]),
          (c = W = S[4]),
          (h = X = S[5]),
          S.length === 6
            ? ((f = Math.sqrt(z * z + P * P)),
              (_ = Math.sqrt(F * F + D * D)),
              (p = z || P ? fr(P, z) * Ii : 0),
              (y = D || F ? fr(D, F) * Ii + p : 0),
              y && (_ *= Math.abs(Math.cos(y * cr))),
              e.svg && ((c -= w - (w * z + C * D)), (h -= C - (w * P + C * F))))
            : ((Yt = S[6]),
              (Dt = S[7]),
              (m = S[8]),
              (J = S[9]),
              (ut = S[10]),
              (ct = S[11]),
              (c = S[12]),
              (h = S[13]),
              (d = S[14]),
              (T = fr(Yt, ut)),
              (g = T * Ii),
              T &&
                ((A = Math.cos(-T)),
                (k = Math.sin(-T)),
                (R = W * A + m * k),
                ($ = X * A + J * k),
                (q = Yt * A + ut * k),
                (m = W * -k + m * A),
                (J = X * -k + J * A),
                (ut = Yt * -k + ut * A),
                (ct = Dt * -k + ct * A),
                (W = R),
                (X = $),
                (Yt = q)),
              (T = fr(-D, ut)),
              (x = T * Ii),
              T &&
                ((A = Math.cos(-T)),
                (k = Math.sin(-T)),
                (R = z * A - m * k),
                ($ = P * A - J * k),
                (q = D * A - ut * k),
                (ct = F * k + ct * A),
                (z = R),
                (P = $),
                (D = q)),
              (T = fr(P, z)),
              (p = T * Ii),
              T &&
                ((A = Math.cos(T)),
                (k = Math.sin(T)),
                (R = z * A + P * k),
                ($ = W * A + X * k),
                (P = P * A - z * k),
                (X = X * A - W * k),
                (z = R),
                (W = $)),
              g &&
                Math.abs(g) + Math.abs(p) > 359.9 &&
                ((g = p = 0), (x = 180 - x)),
              (f = wt(Math.sqrt(z * z + P * P + D * D))),
              (_ = wt(Math.sqrt(X * X + Yt * Yt))),
              (T = fr(W, X)),
              (y = Math.abs(T) > 2e-4 ? T * Ii : 0),
              (v = ct ? 1 / (ct < 0 ? -ct : ct) : 0)),
          e.svg &&
            ((R = t.getAttribute("transform")),
            (e.forceCSS = t.setAttribute("transform", "") || !Ma(Re(t, pt))),
            R && t.setAttribute("transform", R))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (n
            ? ((f *= -1),
              (y += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((_ *= -1), (y += y <= 0 ? 180 : -180))),
        (i = i || e.uncache),
        (e.x =
          c -
          ((e.xPercent =
            c &&
            ((!i && e.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetWidth * e.xPercent) / 100
            : 0) +
          o),
        (e.y =
          h -
          ((e.yPercent =
            h &&
            ((!i && e.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (t.offsetHeight * e.yPercent) / 100
            : 0) +
          o),
        (e.z = d + o),
        (e.scaleX = wt(f)),
        (e.scaleY = wt(_)),
        (e.rotation = wt(p) + a),
        (e.rotationX = wt(g) + a),
        (e.rotationY = wt(x) + a),
        (e.skewX = y + a),
        (e.skewY = b + a),
        (e.transformPerspective = v + o),
        (e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
          (r[pe] = Cn(u)),
        (e.xOffset = e.yOffset = 0),
        (e.force3D = at.force3D),
        (e.renderTransform = e.svg ? ju : xa ? Da : Qu),
        (e.uncache = 0),
        e
      );
    },
    Cn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ws = function (t, i, e) {
      var r = $t(i);
      return wt(parseFloat(i) + parseFloat(vi(t, "x", e + "px", r))) + r;
    },
    Qu = function (t, i) {
      (i.z = "0px"),
        (i.rotationY = i.rotationX = "0deg"),
        (i.force3D = 0),
        Da(t, i);
    },
    Xi = "0deg",
    Wr = "0px",
    Wi = ") ",
    Da = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.z,
        u = e.rotation,
        c = e.rotationY,
        h = e.rotationX,
        d = e.skewX,
        f = e.skewY,
        _ = e.scaleX,
        p = e.scaleY,
        g = e.transformPerspective,
        x = e.force3D,
        y = e.target,
        b = e.zOrigin,
        v = "",
        w = (x === "auto" && t && t !== 1) || x === !0;
      if (b && (h !== Xi || c !== Xi)) {
        var C = parseFloat(c) * cr,
          S = Math.sin(C),
          T = Math.cos(C),
          A;
        (C = parseFloat(h) * cr),
          (A = Math.cos(C)),
          (o = Ws(y, o, S * A * -b)),
          (a = Ws(y, a, -Math.sin(C) * -b)),
          (l = Ws(y, l, T * A * -b + b));
      }
      g !== Wr && (v += "perspective(" + g + Wi),
        (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
        (w || o !== Wr || a !== Wr || l !== Wr) &&
          (v +=
            l !== Wr || w
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Wi),
        u !== Xi && (v += "rotate(" + u + Wi),
        c !== Xi && (v += "rotateY(" + c + Wi),
        h !== Xi && (v += "rotateX(" + h + Wi),
        (d !== Xi || f !== Xi) && (v += "skew(" + d + ", " + f + Wi),
        (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Wi),
        (y.style[pt] = v || "translate(0, 0)");
    },
    ju = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.rotation,
        u = e.skewX,
        c = e.skewY,
        h = e.scaleX,
        d = e.scaleY,
        f = e.target,
        _ = e.xOrigin,
        p = e.yOrigin,
        g = e.xOffset,
        x = e.yOffset,
        y = e.forceCSS,
        b = parseFloat(o),
        v = parseFloat(a),
        w,
        C,
        S,
        T,
        A;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= cr),
            (u *= cr),
            (w = Math.cos(l) * h),
            (C = Math.sin(l) * h),
            (S = Math.sin(l - u) * -d),
            (T = Math.cos(l - u) * d),
            u &&
              ((c *= cr),
              (A = Math.tan(u - c)),
              (A = Math.sqrt(1 + A * A)),
              (S *= A),
              (T *= A),
              c &&
                ((A = Math.tan(c)),
                (A = Math.sqrt(1 + A * A)),
                (w *= A),
                (C *= A))),
            (w = wt(w)),
            (C = wt(C)),
            (S = wt(S)),
            (T = wt(T)))
          : ((w = h), (T = d), (C = S = 0)),
        ((b && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
          ((b = vi(f, "x", o, "px")), (v = vi(f, "y", a, "px"))),
        (_ || p || g || x) &&
          ((b = wt(b + _ - (_ * w + p * S) + g)),
          (v = wt(v + p - (_ * C + p * T) + x))),
        (r || n) &&
          ((A = f.getBBox()),
          (b = wt(b + (r / 100) * A.width)),
          (v = wt(v + (n / 100) * A.height))),
        (A =
          "matrix(" +
          w +
          "," +
          C +
          "," +
          S +
          "," +
          T +
          "," +
          b +
          "," +
          v +
          ")"),
        f.setAttribute("transform", A),
        y && (f.style[pt] = A);
    },
    Ju = function (t, i, e, r, n) {
      var o = 360,
        a = Lt(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1),
        u = l - r,
        c = r + u + "deg",
        h,
        d;
      return (
        a &&
          ((h = n.split("_")[1]),
          h === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          h === "cw" && u < 0
            ? (u = ((u + o * ga) % o) - ~~(u / o) * o)
            : h === "ccw" && u > 0 && (u = ((u - o * ga) % o) - ~~(u / o) * o)),
        (t._pt = d = new he(t._pt, i, e, r, u, Nu)),
        (d.e = c),
        (d.u = "deg"),
        t._props.push(e),
        d
      );
    },
    Ra = function (t, i) {
      for (var e in i) t[e] = i[e];
      return t;
    },
    tc = function (t, i, e) {
      var r = Ra({}, e._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = e.style,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        _;
      r.svg
        ? ((u = e.getAttribute("transform")),
          e.setAttribute("transform", ""),
          (o[pt] = i),
          (a = Xr(e, 1)),
          Fi(e, pt),
          e.setAttribute("transform", u))
        : ((u = getComputedStyle(e)[pt]),
          (o[pt] = i),
          (a = Xr(e, 1)),
          (o[pt] = u));
      for (l in ei)
        (u = r[l]),
          (c = a[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((f = $t(u)),
            (_ = $t(c)),
            (h = f !== _ ? vi(e, l, u, _) : parseFloat(u)),
            (d = parseFloat(c)),
            (t._pt = new he(t._pt, a, l, h, d - h, zs)),
            (t._pt.u = _ || 0),
            t._props.push(l));
      Ra(a, r);
    };
  fe("padding,margin,Width,Radius", function (s, t) {
    var i = "Top",
      e = "Right",
      r = "Bottom",
      n = "Left",
      o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function (
        a
      ) {
        return t < 2 ? s + a : "border" + a + s;
      });
    Tn[t > 1 ? "border" + s : s] = function (a, l, u, c, h) {
      var d, f;
      if (arguments.length < 4)
        return (
          (d = o.map(function (_) {
            return ii(a, _, u);
          })),
          (f = d.join(" ")),
          f.split(d[0]).length === 5 ? d[0] : f
        );
      (d = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (_, p) {
          return (f[_] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        a.init(l, f, h);
    };
  });
  var La = {
    name: "css",
    register: Is,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, i, e, r, n) {
      var o = this._props,
        a = t.style,
        l = e.vars.startAt,
        u,
        c,
        h,
        d,
        f,
        _,
        p,
        g,
        x,
        y,
        b,
        v,
        w,
        C,
        S,
        T;
      Ds || Is(),
        (this.styles = this.styles || wa(t)),
        (T = this.styles.props),
        (this.tween = e);
      for (p in i)
        if (
          p !== "autoRound" &&
          ((c = i[p]), !(ye[p] && sa(p, i, e, r, t, n)))
        ) {
          if (
            ((f = typeof c),
            (_ = Tn[p]),
            f === "function" && ((c = c.call(e, r, t, n)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = Dr(c)),
            _)
          )
            _(this, t, p, c, e) && (S = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (c += ""),
              (pi.lastIndex = 0),
              pi.test(u) || ((g = $t(u)), (x = $t(c))),
              x ? g !== x && (u = vi(t, p, u, x) + x) : g && (c += g),
              this.add(a, "setProperty", u, c, r, n, 0, 0, p),
              o.push(p),
              T.push(p, 0, a[p]);
          else if (f !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(e, r, t, n) : l[p]),
                  Lt(u) && ~u.indexOf("random(") && (u = Dr(u)),
                  $t(u + "") ||
                    u === "auto" ||
                    (u += at.units[p] || $t(ii(t, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = ii(t, p)))
                : (u = ii(t, p)),
              (d = parseFloat(u)),
              (y = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (h = parseFloat(c)),
              p in Ue &&
                (p === "autoAlpha" &&
                  (d === 1 && ii(t, "visibility") === "hidden" && h && (d = 0),
                  T.push("visibility", 0, a.visibility),
                  mi(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = Ue[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (b = p in ei),
              b)
            ) {
              if (
                (this.styles.save(p),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = Re(t, c.substring(4, c.indexOf(")")))),
                  (h = parseFloat(c))),
                v ||
                  ((w = t._gsap),
                  (w.renderTransform && !i.parseTransform) ||
                    Xr(t, i.parseTransform),
                  (C = i.smoothOrigin !== !1 && w.smooth),
                  (v = this._pt =
                    new he(this._pt, a, pt, 0, 1, w.renderTransform, w, 0, -1)),
                  (v.dep = 1)),
                p === "scale")
              )
                (this._pt = new he(
                  this._pt,
                  w,
                  "scaleY",
                  w.scaleY,
                  (y ? rr(w.scaleY, y + h) : h) - w.scaleY || 0,
                  zs
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                T.push(pe, 0, a[pe]),
                  (c = Zu(c)),
                  w.svg
                    ? Xs(t, c, 0, C, 0, this)
                    : ((x = parseFloat(c.split(" ")[2]) || 0),
                      x !== w.zOrigin && mi(this, w, "zOrigin", w.zOrigin, x),
                      mi(this, a, p, Cn(u), Cn(c)));
                continue;
              } else if (p === "svgOrigin") {
                Xs(t, c, 1, C, 0, this);
                continue;
              } else if (p in Pa) {
                Ju(this, w, p, d, y ? rr(d, y + c) : c);
                continue;
              } else if (p === "smoothOrigin") {
                mi(this, w, "smooth", w.smooth, c);
                continue;
              } else if (p === "force3D") {
                w[p] = c;
                continue;
              } else if (p === "transform") {
                tc(this, c, t);
                continue;
              }
            } else p in a || (p = hr(p) || p);
            if (
              b ||
              ((h || h === 0) && (d || d === 0) && !zu.test(c) && p in a)
            )
              (g = (u + "").substr((d + "").length)),
                h || (h = 0),
                (x = $t(c) || (p in at.units ? at.units[p] : g)),
                g !== x && (d = vi(t, p, u, x)),
                (this._pt = new he(
                  this._pt,
                  b ? w : a,
                  p,
                  d,
                  (y ? rr(d, y + h) : h) - d,
                  !b && (x === "px" || p === "zIndex") && i.autoRound !== !1
                    ? Fu
                    : zs
                )),
                (this._pt.u = x || 0),
                g !== x && x !== "%" && ((this._pt.b = u), (this._pt.r = Iu));
            else if (p in a) Gu.call(this, t, p, u, y ? y + c : c);
            else if (p in t) this.add(t, p, u || t[p], y ? y + c : c, r, n);
            else if (p !== "parseTransform") {
              ls(p, c);
              continue;
            }
            b ||
              (p in a
                ? T.push(p, 0, a[p])
                : typeof t[p] == "function"
                ? T.push(p, 2, t[p]())
                : T.push(p, 1, u || t[p])),
              o.push(p);
          }
        }
      S && fa(this);
    },
    render: function (t, i) {
      if (i.tween._time || !Rs())
        for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
      else i.styles.revert();
    },
    get: ii,
    aliases: Ue,
    getSetter: function (t, i, e) {
      var r = Ue[i];
      return (
        r && r.indexOf(",") < 0 && (i = r),
        i in ei && i !== pe && (t._gsap.x || ii(t, "x"))
          ? e && _a === e
            ? i === "scale"
              ? Yu
              : Bu
            : (_a = e || {}) && (i === "scale" ? qu : Hu)
          : t.style && !is(t.style[i])
          ? Xu
          : ~i.indexOf("-")
          ? Wu
          : As(t, i)
      );
    },
    core: { _removeProperty: Fi, _getMatrix: Fs },
  };
  (de.utils.checkPrefix = hr),
    (de.core.getStyleSaver = wa),
    (function (s, t, i, e) {
      var r = fe(s + "," + t + "," + i, function (n) {
        ei[n] = 1;
      });
      fe(t, function (n) {
        (at.units[n] = "deg"), (Pa[n] = 1);
      }),
        (Ue[r[13]] = s + "," + t),
        fe(e, function (n) {
          var o = n.split(":");
          Ue[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    fe(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        at.units[s] = "px";
      }
    ),
    de.registerPlugin(La);
  var G = de.registerPlugin(La) || de;
  G.core.Tween;
  function ec(s, t) {
    for (var i = 0; i < t.length; i++) {
      var e = t[i];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(s, e.key, e);
    }
  }
  function ic(s, t, i) {
    return t && ec(s.prototype, t), s;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Bt,
    En,
    Se,
    yi,
    wi,
    dr,
    za,
    Bi,
    Br,
    Na,
    ri,
    Fe,
    Ia,
    Fa = function () {
      return (
        Bt ||
        (typeof window != "undefined" &&
          (Bt = window.gsap) &&
          Bt.registerPlugin &&
          Bt)
      );
    },
    Xa = 1,
    pr = [],
    Z = [],
    Ge = [],
    Yr = Date.now,
    Bs = function (t, i) {
      return i;
    },
    rc = function () {
      var t = Br.core,
        i = t.bridge || {},
        e = t._scrollers,
        r = t._proxies;
      e.push.apply(e, Z),
        r.push.apply(r, Ge),
        (Z = e),
        (Ge = r),
        (Bs = function (o, a) {
          return i[o](a);
        });
    },
    xi = function (t, i) {
      return ~Ge.indexOf(t) && Ge[Ge.indexOf(t) + 1][i];
    },
    qr = function (t) {
      return !!~Na.indexOf(t);
    },
    ie = function (t, i, e, r, n) {
      return t.addEventListener(i, e, { passive: r !== !1, capture: !!n });
    },
    re = function (t, i, e, r) {
      return t.removeEventListener(i, e, !!r);
    },
    An = "scrollLeft",
    kn = "scrollTop",
    Ys = function () {
      return (ri && ri.isPressed) || Z.cache++;
    },
    Pn = function (t, i) {
      var e = function r(n) {
        if (n || n === 0) {
          Xa && (Se.history.scrollRestoration = "manual");
          var o = ri && ri.isPressed;
          (n = r.v = Math.round(n) || (ri && ri.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = Z.cache),
            o && Bs("ss", n);
        } else
          (i || Z.cache !== r.cacheID || Bs("ref")) &&
            ((r.cacheID = Z.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (e.offset = 0), t && e;
    },
    ne = {
      s: An,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Pn(function (s) {
        return arguments.length
          ? Se.scrollTo(s, Mt.sc())
          : Se.pageXOffset || yi[An] || wi[An] || dr[An] || 0;
      }),
    },
    Mt = {
      s: kn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: ne,
      sc: Pn(function (s) {
        return arguments.length
          ? Se.scrollTo(ne.sc(), s)
          : Se.pageYOffset || yi[kn] || wi[kn] || dr[kn] || 0;
      }),
    },
    _e = function (t, i) {
      return (
        ((i && i._ctx && i._ctx.selector) || Bt.utils.toArray)(t)[0] ||
        (typeof t == "string" && Bt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    nc = function (t, i) {
      for (var e = i.length; e--; )
        if (i[e] === t || i[e].contains(t)) return !0;
      return !1;
    },
    bi = function (t, i) {
      var e = i.s,
        r = i.sc;
      qr(t) && (t = yi.scrollingElement || wi);
      var n = Z.indexOf(t),
        o = r === Mt.sc ? 1 : 2;
      !~n && (n = Z.push(t) - 1), Z[n + o] || ie(t, "scroll", Ys);
      var a = Z[n + o],
        l =
          a ||
          (Z[n + o] =
            Pn(xi(t, e), !0) ||
            (qr(t)
              ? r
              : Pn(function (u) {
                  return arguments.length ? (t[e] = u) : t[e];
                })));
      return (
        (l.target = t),
        a || (l.smooth = Bt.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    qs = function (t, i, e) {
      var r = t,
        n = t,
        o = Yr(),
        a = o,
        l = i || 50,
        u = Math.max(500, l * 3),
        c = function (_, p) {
          var g = Yr();
          p || g - o > l
            ? ((n = r), (r = _), (a = o), (o = g))
            : e
            ? (r += _)
            : (r = n + ((_ - n) / (g - a)) * (o - a));
        },
        h = function () {
          (n = r = e ? 0 : r), (a = o = 0);
        },
        d = function (_) {
          var p = a,
            g = n,
            x = Yr();
          return (
            (_ || _ === 0) && _ !== r && c(_),
            o === a || x - a > u
              ? 0
              : ((r + (e ? g : -g)) / ((e ? x : o) - p)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: d };
    },
    Hr = function (t, i) {
      return (
        i && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Wa = function (t) {
      var i = Math.max.apply(Math, t),
        e = Math.min.apply(Math, t);
      return Math.abs(i) >= Math.abs(e) ? i : e;
    },
    Ba = function () {
      (Br = Bt.core.globals().ScrollTrigger), Br && Br.core && rc();
    },
    Ya = function (t) {
      return (
        (Bt = t || Fa()),
        !En &&
          Bt &&
          typeof document != "undefined" &&
          document.body &&
          ((Se = window),
          (yi = document),
          (wi = yi.documentElement),
          (dr = yi.body),
          (Na = [Se, yi, wi, dr]),
          Bt.utils.clamp,
          (Ia = Bt.core.context || function () {}),
          (Bi = "onpointerenter" in dr ? "pointer" : "mouse"),
          (za = xt.isTouch =
            Se.matchMedia &&
            Se.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Se ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Fe = xt.eventTypes =
            (
              "ontouchstart" in wi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in wi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Xa = 0);
          }, 500),
          Ba(),
          (En = 1)),
        En
      );
    };
  (ne.op = Mt), (Z.cache = 0);
  var xt = (function () {
    function s(i) {
      this.init(i);
    }
    var t = s.prototype;
    return (
      (t.init = function (e) {
        En || Ya(Bt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Br || Ba();
        var r = e.tolerance,
          n = e.dragMinimum,
          o = e.type,
          a = e.target,
          l = e.lineHeight,
          u = e.debounce,
          c = e.preventDefault,
          h = e.onStop,
          d = e.onStopDelay,
          f = e.ignore,
          _ = e.wheelSpeed,
          p = e.event,
          g = e.onDragStart,
          x = e.onDragEnd,
          y = e.onDrag,
          b = e.onPress,
          v = e.onRelease,
          w = e.onRight,
          C = e.onLeft,
          S = e.onUp,
          T = e.onDown,
          A = e.onChangeX,
          k = e.onChangeY,
          z = e.onChange,
          P = e.onToggleX,
          D = e.onToggleY,
          F = e.onHover,
          W = e.onHoverEnd,
          X = e.onMove,
          R = e.ignoreCheck,
          $ = e.isNormalizer,
          q = e.onGestureStart,
          m = e.onGestureEnd,
          J = e.onWheel,
          ut = e.onEnable,
          Dt = e.onDisable,
          ct = e.onClick,
          Yt = e.scrollSpeed,
          Kt = e.capture,
          kt = e.allowClicks,
          le = e.lockAxis,
          Qt = e.onLockAxis;
        (this.target = a = _e(a) || wi),
          (this.vars = e),
          f && (f = Bt.utils.toArray(f)),
          (r = r || 1e-9),
          (n = n || 0),
          (_ = _ || 1),
          (Yt = Yt || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Se.getComputedStyle(dr).lineHeight) || 22);
        var Ci,
          ue,
          ge,
          et,
          bt,
          me,
          Ae,
          E = this,
          ke = 0,
          oi = 0,
          Ei = e.passive || (!c && e.passive !== !1),
          vt = bi(a, ne),
          ai = bi(a, Mt),
          Ai = vt(),
          Ki = ai(),
          It =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Fe[0] === "pointerdown",
          ki = qr(a),
          St = a.ownerDocument || yi,
          Xe = [0, 0, 0],
          Ie = [0, 0, 0],
          li = 0,
          ln = function () {
            return (li = Yr());
          },
          Pt = function (I, it) {
            return (
              ((E.event = I) && f && nc(I.target, f)) ||
              (it && It && I.pointerType !== "touch") ||
              (R && R(I, it))
            );
          },
          Qn = function () {
            E._vx.reset(), E._vy.reset(), ue.pause(), h && h(E);
          },
          ui = function () {
            var I = (E.deltaX = Wa(Xe)),
              it = (E.deltaY = Wa(Ie)),
              M = Math.abs(I) >= r,
              B = Math.abs(it) >= r;
            z && (M || B) && z(E, I, it, Xe, Ie),
              M &&
                (w && E.deltaX > 0 && w(E),
                C && E.deltaX < 0 && C(E),
                A && A(E),
                P && E.deltaX < 0 != ke < 0 && P(E),
                (ke = E.deltaX),
                (Xe[0] = Xe[1] = Xe[2] = 0)),
              B &&
                (T && E.deltaY > 0 && T(E),
                S && E.deltaY < 0 && S(E),
                k && k(E),
                D && E.deltaY < 0 != oi < 0 && D(E),
                (oi = E.deltaY),
                (Ie[0] = Ie[1] = Ie[2] = 0)),
              (et || ge) &&
                (X && X(E),
                ge && (g && ge === 1 && g(E), y && y(E), (ge = 0)),
                (et = !1)),
              me && !(me = !1) && Qt && Qt(E),
              bt && (J(E), (bt = !1)),
              (Ci = 0);
          },
          Tr = function (I, it, M) {
            (Xe[M] += I),
              (Ie[M] += it),
              E._vx.update(I),
              E._vy.update(it),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Cr = function (I, it) {
            le &&
              !Ae &&
              ((E.axis = Ae = Math.abs(I) > Math.abs(it) ? "x" : "y"),
              (me = !0)),
              Ae !== "y" && ((Xe[2] += I), E._vx.update(I, !0)),
              Ae !== "x" && ((Ie[2] += it), E._vy.update(it, !0)),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Pi = function (I) {
            if (!Pt(I, 1)) {
              I = Hr(I, c);
              var it = I.clientX,
                M = I.clientY,
                B = it - E.x,
                N = M - E.y,
                Y = E.isDragging;
              (E.x = it),
                (E.y = M),
                (Y ||
                  ((B || N) &&
                    (Math.abs(E.startX - it) >= n ||
                      Math.abs(E.startY - M) >= n))) &&
                  ((ge = Y ? 2 : 1), Y || (E.isDragging = !0), Cr(B, N));
            }
          },
          Qi = (E.onPress = function (H) {
            Pt(H, 1) ||
              (H && H.button) ||
              ((E.axis = Ae = null),
              ue.pause(),
              (E.isPressed = !0),
              (H = Hr(H)),
              (ke = oi = 0),
              (E.startX = E.x = H.clientX),
              (E.startY = E.y = H.clientY),
              E._vx.reset(),
              E._vy.reset(),
              ie($ ? a : St, Fe[1], Pi, Ei, !0),
              (E.deltaX = E.deltaY = 0),
              b && b(E));
          }),
          Q = (E.onRelease = function (H) {
            if (!Pt(H, 1)) {
              re($ ? a : St, Fe[1], Pi, !0);
              var I = !isNaN(E.y - E.startY),
                it = E.isDragging,
                M =
                  it &&
                  (Math.abs(E.x - E.startX) > 3 ||
                    Math.abs(E.y - E.startY) > 3),
                B = Hr(H);
              !M &&
                I &&
                (E._vx.reset(),
                E._vy.reset(),
                c &&
                  kt &&
                  Bt.delayedCall(0.08, function () {
                    if (Yr() - li > 300 && !H.defaultPrevented) {
                      if (H.target.click) H.target.click();
                      else if (St.createEvent) {
                        var N = St.createEvent("MouseEvents");
                        N.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Se,
                          1,
                          B.screenX,
                          B.screenY,
                          B.clientX,
                          B.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          H.target.dispatchEvent(N);
                      }
                    }
                  })),
                (E.isDragging = E.isGesturing = E.isPressed = !1),
                h && it && !$ && ue.restart(!0),
                ge && ui(),
                x && it && x(E),
                v && v(E, M);
            }
          }),
          ji = function (I) {
            return (
              I.touches &&
              I.touches.length > 1 &&
              (E.isGesturing = !0) &&
              q(I, E.isDragging)
            );
          },
          We = function () {
            return (E.isGesturing = !1) || m(E);
          },
          Be = function (I) {
            if (!Pt(I)) {
              var it = vt(),
                M = ai();
              Tr((it - Ai) * Yt, (M - Ki) * Yt, 1),
                (Ai = it),
                (Ki = M),
                h && ue.restart(!0);
            }
          },
          Ye = function (I) {
            if (!Pt(I)) {
              (I = Hr(I, c)), J && (bt = !0);
              var it =
                (I.deltaMode === 1
                  ? l
                  : I.deltaMode === 2
                  ? Se.innerHeight
                  : 1) * _;
              Tr(I.deltaX * it, I.deltaY * it, 0), h && !$ && ue.restart(!0);
            }
          },
          Ji = function (I) {
            if (!Pt(I)) {
              var it = I.clientX,
                M = I.clientY,
                B = it - E.x,
                N = M - E.y;
              (E.x = it),
                (E.y = M),
                (et = !0),
                h && ue.restart(!0),
                (B || N) && Cr(B, N);
            }
          },
          Er = function (I) {
            (E.event = I), F(E);
          },
          ci = function (I) {
            (E.event = I), W(E);
          },
          un = function (I) {
            return Pt(I) || (Hr(I, c) && ct(E));
          };
        (ue = E._dc = Bt.delayedCall(d || 0.25, Qn).pause()),
          (E.deltaX = E.deltaY = 0),
          (E._vx = qs(0, 50, !0)),
          (E._vy = qs(0, 50, !0)),
          (E.scrollX = vt),
          (E.scrollY = ai),
          (E.isDragging = E.isGesturing = E.isPressed = !1),
          Ia(this),
          (E.enable = function (H) {
            return (
              E.isEnabled ||
                (ie(ki ? St : a, "scroll", Ys),
                o.indexOf("scroll") >= 0 &&
                  ie(ki ? St : a, "scroll", Be, Ei, Kt),
                o.indexOf("wheel") >= 0 && ie(a, "wheel", Ye, Ei, Kt),
                ((o.indexOf("touch") >= 0 && za) ||
                  o.indexOf("pointer") >= 0) &&
                  (ie(a, Fe[0], Qi, Ei, Kt),
                  ie(St, Fe[2], Q),
                  ie(St, Fe[3], Q),
                  kt && ie(a, "click", ln, !0, !0),
                  ct && ie(a, "click", un),
                  q && ie(St, "gesturestart", ji),
                  m && ie(St, "gestureend", We),
                  F && ie(a, Bi + "enter", Er),
                  W && ie(a, Bi + "leave", ci),
                  X && ie(a, Bi + "move", Ji)),
                (E.isEnabled = !0),
                (E.isDragging = E.isGesturing = E.isPressed = et = ge = !1),
                E._vx.reset(),
                E._vy.reset(),
                (Ai = vt()),
                (Ki = ai()),
                H && H.type && Qi(H),
                ut && ut(E)),
              E
            );
          }),
          (E.disable = function () {
            E.isEnabled &&
              (pr.filter(function (H) {
                return H !== E && qr(H.target);
              }).length || re(ki ? St : a, "scroll", Ys),
              E.isPressed &&
                (E._vx.reset(), E._vy.reset(), re($ ? a : St, Fe[1], Pi, !0)),
              re(ki ? St : a, "scroll", Be, Kt),
              re(a, "wheel", Ye, Kt),
              re(a, Fe[0], Qi, Kt),
              re(St, Fe[2], Q),
              re(St, Fe[3], Q),
              re(a, "click", ln, !0),
              re(a, "click", un),
              re(St, "gesturestart", ji),
              re(St, "gestureend", We),
              re(a, Bi + "enter", Er),
              re(a, Bi + "leave", ci),
              re(a, Bi + "move", Ji),
              (E.isEnabled = E.isPressed = E.isDragging = !1),
              Dt && Dt(E));
          }),
          (E.kill = E.revert =
            function () {
              E.disable();
              var H = pr.indexOf(E);
              H >= 0 && pr.splice(H, 1), ri === E && (ri = 0);
            }),
          pr.push(E),
          $ && qr(a) && (ri = E),
          E.enable(p);
      }),
      ic(s, [
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
      s
    );
  })();
  (xt.version = "3.13.0"),
    (xt.create = function (s) {
      return new xt(s);
    }),
    (xt.register = Ya),
    (xt.getAll = function () {
      return pr.slice();
    }),
    (xt.getById = function (s) {
      return pr.filter(function (t) {
        return t.vars.id === s;
      })[0];
    }),
    Fa() && Bt.registerPlugin(xt);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var O,
    _r,
    K,
    lt,
    Te,
    rt,
    Hs,
    Mn,
    Vr,
    $r,
    Ur,
    On,
    Ut,
    Dn,
    Vs,
    se,
    qa,
    Ha,
    gr,
    Va,
    $s,
    $a,
    oe,
    Us,
    Ua,
    Ga,
    Si,
    Gs,
    Zs,
    mr,
    Ks,
    Rn,
    Qs,
    js,
    Ln = 1,
    Gt = Date.now,
    Js = Gt(),
    Le = 0,
    Gr = 0,
    Za = function (t, i, e) {
      var r = Ce(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (e["_" + i + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
    },
    Ka = function (t, i) {
      return i && (!Ce(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    sc = function s() {
      return Gr && requestAnimationFrame(s);
    },
    Qa = function () {
      return (Dn = 1);
    },
    ja = function () {
      return (Dn = 0);
    },
    Ze = function (t) {
      return t;
    },
    Zr = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Ja = function () {
      return typeof window != "undefined";
    },
    tl = function () {
      return O || (Ja() && (O = window.gsap) && O.registerPlugin && O);
    },
    Yi = function (t) {
      return !!~Hs.indexOf(t);
    },
    el = function (t) {
      return (
        (t === "Height" ? Ks : K["inner" + t]) ||
        Te["client" + t] ||
        rt["client" + t]
      );
    },
    il = function (t) {
      return (
        xi(t, "getBoundingClientRect") ||
        (Yi(t)
          ? function () {
              return (Un.width = K.innerWidth), (Un.height = Ks), Un;
            }
          : function () {
              return ni(t);
            })
      );
    },
    oc = function (t, i, e) {
      var r = e.d,
        n = e.d2,
        o = e.a;
      return (o = xi(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (i ? el(n) : t["client" + n]) || 0;
          };
    },
    ac = function (t, i) {
      return !i || ~Ge.indexOf(t)
        ? il(t)
        : function () {
            return Un;
          };
    },
    Ke = function (t, i) {
      var e = i.s,
        r = i.d2,
        n = i.d,
        o = i.a;
      return Math.max(
        0,
        (e = "scroll" + r) && (o = xi(t, e))
          ? o() - il(t)()[n]
          : Yi(t)
          ? (Te[e] || rt[e]) - el(r)
          : t[e] - t["offset" + r]
      );
    },
    zn = function (t, i) {
      for (var e = 0; e < gr.length; e += 3)
        (!i || ~i.indexOf(gr[e + 1])) && t(gr[e], gr[e + 1], gr[e + 2]);
    },
    Ce = function (t) {
      return typeof t == "string";
    },
    Zt = function (t) {
      return typeof t == "function";
    },
    Kr = function (t) {
      return typeof t == "number";
    },
    qi = function (t) {
      return typeof t == "object";
    },
    Qr = function (t, i, e) {
      return t && t.progress(i ? 0 : 1) && e && t.pause();
    },
    to = function (t, i) {
      if (t.enabled) {
        var e = t._ctx
          ? t._ctx.add(function () {
              return i(t);
            })
          : i(t);
        e && e.totalTime && (t.callbackAnimation = e);
      }
    },
    vr = Math.abs,
    rl = "left",
    nl = "top",
    eo = "right",
    io = "bottom",
    Hi = "width",
    Vi = "height",
    jr = "Right",
    Jr = "Left",
    tn = "Top",
    en = "Bottom",
    At = "padding",
    ze = "margin",
    yr = "Width",
    ro = "Height",
    Ot = "px",
    Ne = function (t) {
      return K.getComputedStyle(t);
    },
    lc = function (t) {
      var i = Ne(t).position;
      t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
    },
    sl = function (t, i) {
      for (var e in i) e in t || (t[e] = i[e]);
      return t;
    },
    ni = function (t, i) {
      var e =
          i &&
          Ne(t)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          O.to(t, {
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
        r = t.getBoundingClientRect();
      return e && e.progress(0).kill(), r;
    },
    Nn = function (t, i) {
      var e = i.d2;
      return t["offset" + e] || t["client" + e] || 0;
    },
    ol = function (t) {
      var i = [],
        e = t.labels,
        r = t.duration(),
        n;
      for (n in e) i.push(e[n] / r);
      return i;
    },
    uc = function (t) {
      return function (i) {
        return O.utils.snap(ol(t), i);
      };
    },
    no = function (t) {
      var i = O.utils.snap(t),
        e =
          Array.isArray(t) &&
          t.slice(0).sort(function (r, n) {
            return r - n;
          });
      return e
        ? function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!n) return i(r);
            if (n > 0) {
              for (r -= o, a = 0; a < e.length; a++) if (e[a] >= r) return e[a];
              return e[a - 1];
            } else for (a = e.length, r += o; a--; ) if (e[a] <= r) return e[a];
            return e[0];
          }
        : function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a = i(r);
            return !n || Math.abs(a - r) < o || a - r < 0 == n < 0
              ? a
              : i(n < 0 ? r - t : r + t);
          };
    },
    cc = function (t) {
      return function (i, e) {
        return no(ol(t))(i, e.direction);
      };
    },
    In = function (t, i, e, r) {
      return e.split(",").forEach(function (n) {
        return t(i, n, r);
      });
    },
    zt = function (t, i, e, r, n) {
      return t.addEventListener(i, e, { passive: !r, capture: !!n });
    },
    Nt = function (t, i, e, r) {
      return t.removeEventListener(i, e, !!r);
    },
    Fn = function (t, i, e) {
      (e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e));
    },
    al = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Xn = { toggleActions: "play", anticipatePin: 0 },
    Wn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bn = function (t, i) {
      if (Ce(t)) {
        var e = t.indexOf("="),
          r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
        ~e && (t.indexOf("%") > e && (r *= i / 100), (t = t.substr(0, e - 1))),
          (t =
            r +
            (t in Wn
              ? Wn[t] * i
              : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Yn = function (t, i, e, r, n, o, a, l) {
      var u = n.startColor,
        c = n.endColor,
        h = n.fontSize,
        d = n.indent,
        f = n.fontWeight,
        _ = lt.createElement("div"),
        p = Yi(e) || xi(e, "pinType") === "fixed",
        g = t.indexOf("scroller") !== -1,
        x = p ? rt : e,
        y = t.indexOf("start") !== -1,
        b = y ? u : c,
        v =
          "border-color:" +
          b +
          ";font-size:" +
          h +
          ";color:" +
          b +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
        (g || l || !p) &&
          (v += (r === Mt ? eo : io) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = y),
        _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
        (_.style.cssText = v),
        (_.innerText = i || i === 0 ? t + "-" + i : t),
        x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_),
        (_._offset = _["offset" + r.op.d2]),
        qn(_, 0, r, y),
        _
      );
    },
    qn = function (t, i, e, r) {
      var n = { display: "block" },
        o = e[r ? "os2" : "p2"],
        a = e[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[e.a + "Percent"] = r ? -100 : 0),
        (n[e.a] = r ? "1px" : 0),
        (n["border" + o + yr] = 1),
        (n["border" + a + yr] = 0),
        (n[e.p] = i + "px"),
        O.set(t, n);
    },
    U = [],
    so = {},
    rn,
    ll = function () {
      return Gt() - Le > 34 && (rn || (rn = requestAnimationFrame(si)));
    },
    wr = function () {
      (!oe || !oe.isPressed || oe.startX > rt.clientWidth) &&
        (Z.cache++,
        oe ? rn || (rn = requestAnimationFrame(si)) : si(),
        Le || Ui("scrollStart"),
        (Le = Gt()));
    },
    oo = function () {
      (Ga = K.innerWidth), (Ua = K.innerHeight);
    },
    nn = function (t) {
      Z.cache++,
        (t === !0 ||
          (!Ut &&
            !$a &&
            !lt.fullscreenElement &&
            !lt.webkitFullscreenElement &&
            (!Us ||
              Ga !== K.innerWidth ||
              Math.abs(K.innerHeight - Ua) > K.innerHeight * 0.25))) &&
          Mn.restart(!0);
    },
    $i = {},
    fc = [],
    ul = function s() {
      return Nt(V, "scrollEnd", s) || Zi(!0);
    },
    Ui = function (t) {
      return (
        ($i[t] &&
          $i[t].map(function (i) {
            return i();
          })) ||
        fc
      );
    },
    Ee = [],
    cl = function (t) {
      for (var i = 0; i < Ee.length; i += 5)
        (!t || (Ee[i + 4] && Ee[i + 4].query === t)) &&
          ((Ee[i].style.cssText = Ee[i + 1]),
          Ee[i].getBBox && Ee[i].setAttribute("transform", Ee[i + 2] || ""),
          (Ee[i + 3].uncache = 1));
    },
    ao = function (t, i) {
      var e;
      for (se = 0; se < U.length; se++)
        (e = U[se]),
          e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
      (Rn = !0), i && cl(i), i || Ui("revert");
    },
    fl = function (t, i) {
      Z.cache++,
        (i || !ae) &&
          Z.forEach(function (e) {
            return Zt(e) && e.cacheID++ && (e.rec = 0);
          }),
        Ce(t) && (K.history.scrollRestoration = Zs = t);
    },
    ae,
    Gi = 0,
    hl,
    hc = function () {
      if (hl !== Gi) {
        var t = (hl = Gi);
        requestAnimationFrame(function () {
          return t === Gi && Zi(!0);
        });
      }
    },
    dl = function () {
      rt.appendChild(mr),
        (Ks = (!oe && mr.offsetHeight) || K.innerHeight),
        rt.removeChild(mr);
    },
    pl = function (t) {
      return Vr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (i) {
        return (i.style.display = t ? "none" : "block");
      });
    },
    Zi = function (t, i) {
      if (
        ((Te = lt.documentElement),
        (rt = lt.body),
        (Hs = [K, lt, Te, rt]),
        Le && !t && !Rn)
      ) {
        zt(V, "scrollEnd", ul);
        return;
      }
      dl(),
        (ae = V.isRefreshing = !0),
        Z.forEach(function (r) {
          return Zt(r) && ++r.cacheID && (r.rec = r());
        });
      var e = Ui("refreshInit");
      Va && V.sort(),
        i || ao(),
        Z.forEach(function (r) {
          Zt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        U.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Rn = !1),
        U.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
          }
        }),
        (Qs = 1),
        pl(!0),
        U.forEach(function (r) {
          var n = Ke(r.scroller, r._dir),
            o = r.vars.end === "max" || (r._endClamp && r.end > n),
            a = r._startClamp && r.start >= n;
          (o || a) &&
            r.setPositions(
              a ? n - 1 : r.start,
              o ? Math.max(a ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        pl(!1),
        (Qs = 0),
        e.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        Z.forEach(function (r) {
          Zt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        fl(Zs, 1),
        Mn.pause(),
        Gi++,
        (ae = 2),
        si(2),
        U.forEach(function (r) {
          return Zt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (ae = V.isRefreshing = !1),
        Ui("refresh");
    },
    lo = 0,
    Hn = 1,
    sn,
    si = function (t) {
      if (t === 2 || (!ae && !Rn)) {
        (V.isUpdating = !0), sn && sn.update(0);
        var i = U.length,
          e = Gt(),
          r = e - Js >= 50,
          n = i && U[0].scroll();
        if (
          ((Hn = lo > n ? -1 : 1),
          ae || (lo = n),
          r &&
            (Le && !Dn && e - Le > 200 && ((Le = 0), Ui("scrollEnd")),
            (Ur = Js),
            (Js = e)),
          Hn < 0)
        ) {
          for (se = i; se-- > 0; ) U[se] && U[se].update(0, r);
          Hn = 1;
        } else for (se = 0; se < i; se++) U[se] && U[se].update(0, r);
        V.isUpdating = !1;
      }
      rn = 0;
    },
    uo = [
      rl,
      nl,
      io,
      eo,
      ze + en,
      ze + jr,
      ze + tn,
      ze + Jr,
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
    Vn = uo.concat([
      Hi,
      Vi,
      "boxSizing",
      "max" + yr,
      "max" + ro,
      "position",
      ze,
      At,
      At + tn,
      At + jr,
      At + en,
      At + Jr,
    ]),
    dc = function (t, i, e) {
      xr(e);
      var r = t._gsap;
      if (r.spacerIsNative) xr(r.spacerState);
      else if (t._gsap.swappedIn) {
        var n = i.parentNode;
        n && (n.insertBefore(t, i), n.removeChild(i));
      }
      t._gsap.swappedIn = !1;
    },
    co = function (t, i, e, r) {
      if (!t._gsap.swappedIn) {
        for (var n = uo.length, o = i.style, a = t.style, l; n--; )
          (l = uo[n]), (o[l] = e[l]);
        (o.position = e.position === "absolute" ? "absolute" : "relative"),
          e.display === "inline" && (o.display = "inline-block"),
          (a[io] = a[eo] = "auto"),
          (o.flexBasis = e.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Hi] = Nn(t, ne) + Ot),
          (o[Vi] = Nn(t, Mt) + Ot),
          (o[At] = a[ze] = a[nl] = a[rl] = "0"),
          xr(r),
          (a[Hi] = a["max" + yr] = e[Hi]),
          (a[Vi] = a["max" + ro] = e[Vi]),
          (a[At] = e[At]),
          t.parentNode !== i &&
            (t.parentNode.insertBefore(i, t), i.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    pc = /([A-Z])/g,
    xr = function (t) {
      if (t) {
        var i = t.t.style,
          e = t.length,
          r = 0,
          n,
          o;
        for ((t.t._gsap || O.core.getCache(t.t)).uncache = 1; r < e; r += 2)
          (o = t[r + 1]),
            (n = t[r]),
            o
              ? (i[n] = o)
              : i[n] && i.removeProperty(n.replace(pc, "-$1").toLowerCase());
      }
    },
    $n = function (t) {
      for (var i = Vn.length, e = t.style, r = [], n = 0; n < i; n++)
        r.push(Vn[n], e[Vn[n]]);
      return (r.t = t), r;
    },
    _c = function (t, i, e) {
      for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
        (a = t[o]), r.push(a, a in i ? i[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    Un = { left: 0, top: 0 },
    _l = function (t, i, e, r, n, o, a, l, u, c, h, d, f, _) {
      Zt(t) && (t = t(l)),
        Ce(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Bn("0" + t.substr(3), e) : 0));
      var p = f ? f.time() : 0,
        g,
        x,
        y;
      if ((f && f.seek(0), isNaN(t) || (t = +t), Kr(t)))
        f &&
          (t = O.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            d,
            t
          )),
          a && qn(a, e, r, !0);
      else {
        Zt(i) && (i = i(l));
        var b = (t || "0").split(" "),
          v,
          w,
          C,
          S;
        (y = _e(i, l) || rt),
          (v = ni(y) || {}),
          (!v || (!v.left && !v.top)) &&
            Ne(y).display === "none" &&
            ((S = y.style.display),
            (y.style.display = "block"),
            (v = ni(y)),
            S ? (y.style.display = S) : y.style.removeProperty("display")),
          (w = Bn(b[0], v[r.d])),
          (C = Bn(b[1] || "0", e)),
          (t = v[r.p] - u[r.p] - c + w + n - C),
          a && qn(a, C, r, e - C < 20 || (a._isStart && C > 20)),
          (e -= e - C);
      }
      if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
        var T = t + e,
          A = o._isStart;
        (g = "scroll" + r.d2),
          qn(
            o,
            T,
            r,
            (A && T > 20) ||
              (!A && (h ? Math.max(rt[g], Te[g]) : o.parentNode[g]) <= T + 1)
          ),
          h &&
            ((u = ni(a)),
            h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ot));
      }
      return (
        f &&
          y &&
          ((g = ni(y)),
          f.seek(d),
          (x = ni(y)),
          (f._caScrollDist = g[r.p] - x[r.p]),
          (t = (t / f._caScrollDist) * d)),
        f && f.seek(p),
        f ? t : Math.round(t)
      );
    },
    gc = /(webkit|moz|length|cssText|inset)/i,
    gl = function (t, i, e, r) {
      if (t.parentNode !== i) {
        var n = t.style,
          o,
          a;
        if (i === rt) {
          (t._stOrig = n.cssText), (a = Ne(t));
          for (o in a)
            !+o &&
              !gc.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = e), (n.left = r);
        } else n.cssText = t._stOrig;
        (O.core.getCache(t).uncache = 1), i.appendChild(t);
      }
    },
    ml = function (t, i, e) {
      var r = i,
        n = r;
      return function (o) {
        var a = Math.round(t());
        return (
          a !== r &&
            a !== n &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - n) > 3 &&
            ((o = a), e && e()),
          (n = r),
          (r = Math.round(o)),
          r
        );
      };
    },
    Gn = function (t, i, e) {
      var r = {};
      (r[i.p] = "+=" + e), O.set(t, r);
    },
    vl = function (t, i) {
      var e = bi(t, i),
        r = "_scroll" + i.p2,
        n = function o(a, l, u, c, h) {
          var d = o.tween,
            f = l.onComplete,
            _ = {};
          u = u || e();
          var p = ml(e, u, function () {
            d.kill(), (o.tween = 0);
          });
          return (
            (h = (c && h) || 0),
            (c = c || a - u),
            d && d.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[r] = function () {
              return p(u + c * d.ratio + h * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              Z.cache++, o.tween && si();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(d);
            }),
            (d = o.tween = O.to(t, l)),
            d
          );
        };
      return (
        (t[r] = e),
        (e.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        zt(t, "wheel", e.wheelHandler),
        V.isTouch && zt(t, "touchmove", e.wheelHandler),
        n
      );
    },
    V = (function () {
      function s(i, e) {
        _r ||
          s.register(O) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Gs(this),
          this.init(i, e);
      }
      var t = s.prototype;
      return (
        (t.init = function (e, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Gr)
          ) {
            this.update = this.refresh = this.kill = Ze;
            return;
          }
          e = sl(Ce(e) || Kr(e) || e.nodeType ? { trigger: e } : e, Xn);
          var n = e,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            c = n.onRefresh,
            h = n.scrub,
            d = n.trigger,
            f = n.pin,
            _ = n.pinSpacing,
            p = n.invalidateOnRefresh,
            g = n.anticipatePin,
            x = n.onScrubComplete,
            y = n.onSnapComplete,
            b = n.once,
            v = n.snap,
            w = n.pinReparent,
            C = n.pinSpacer,
            S = n.containerAnimation,
            T = n.fastScrollEnd,
            A = n.preventOverlaps,
            k =
              e.horizontal || (e.containerAnimation && e.horizontal !== !1)
                ? ne
                : Mt,
            z = !h && h !== 0,
            P = _e(e.scroller || K),
            D = O.core.getCache(P),
            F = Yi(P),
            W =
              ("pinType" in e
                ? e.pinType
                : xi(P, "pinType") || (F && "fixed")) === "fixed",
            X = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            R = z && e.toggleActions.split(" "),
            $ = "markers" in e ? e.markers : Xn.markers,
            q = F ? 0 : parseFloat(Ne(P)["border" + k.p2 + yr]) || 0,
            m = this,
            J =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(m);
              },
            ut = oc(P, F, k),
            Dt = ac(P, F),
            ct = 0,
            Yt = 0,
            Kt = 0,
            kt = bi(P, k),
            le,
            Qt,
            Ci,
            ue,
            ge,
            et,
            bt,
            me,
            Ae,
            E,
            ke,
            oi,
            Ei,
            vt,
            ai,
            Ai,
            Ki,
            It,
            ki,
            St,
            Xe,
            Ie,
            li,
            ln,
            Pt,
            Qn,
            ui,
            Tr,
            Cr,
            Pi,
            Qi,
            Q,
            ji,
            We,
            Be,
            Ye,
            Ji,
            Er,
            ci;
          if (
            ((m._startClamp = m._endClamp = !1),
            (m._dir = k),
            (g *= 45),
            (m.scroller = P),
            (m.scroll = S ? S.time.bind(S) : kt),
            (ue = kt()),
            (m.vars = e),
            (r = r || e.animation),
            "refreshPriority" in e &&
              ((Va = 1), e.refreshPriority === -9999 && (sn = m)),
            (D.tweenScroll = D.tweenScroll || {
              top: vl(P, Mt),
              left: vl(P, ne),
            }),
            (m.tweenTo = le = D.tweenScroll[k.p]),
            (m.scrubDuration = function (M) {
              (ji = Kr(M) && M),
                ji
                  ? Q
                    ? Q.duration(M)
                    : (Q = O.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: ji,
                        paused: !0,
                        onComplete: function () {
                          return x && x(m);
                        },
                      }))
                  : (Q && Q.progress(1).kill(), (Q = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !m.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  e.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (m.animation = r.pause()),
              (r.scrollTrigger = m),
              m.scrubDuration(h),
              (Pi = 0),
              l || (l = r.vars.id)),
            v &&
              ((!qi(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in rt.style &&
                O.set(F ? [rt, Te] : P, { scrollBehavior: "auto" }),
              Z.forEach(function (M) {
                return (
                  Zt(M) &&
                  M.target === (F ? lt.scrollingElement || Te : P) &&
                  (M.smooth = !1)
                );
              }),
              (Ci = Zt(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? uc(r)
                : v.snapTo === "labelsDirectional"
                ? cc(r)
                : v.directional !== !1
                ? function (M, B) {
                    return no(v.snapTo)(M, Gt() - Yt < 500 ? 0 : B.direction);
                  }
                : O.utils.snap(v.snapTo)),
              (We = v.duration || { min: 0.1, max: 2 }),
              (We = qi(We) ? $r(We.min, We.max) : $r(We, We)),
              (Be = O.delayedCall(v.delay || ji / 2 || 0.1, function () {
                var M = kt(),
                  B = Gt() - Yt < 500,
                  N = le.tween;
                if (
                  (B || Math.abs(m.getVelocity()) < 10) &&
                  !N &&
                  !Dn &&
                  ct !== M
                ) {
                  var Y = (M - et) / vt,
                    Ft = r && !z ? r.totalProgress() : Y,
                    tt = B ? 0 : ((Ft - Qi) / (Gt() - Ur)) * 1e3 || 0,
                    Tt = O.utils.clamp(-Y, 1 - Y, (vr(tt / 2) * tt) / 0.185),
                    jt = Y + (v.inertia === !1 ? 0 : Tt),
                    yt,
                    ht,
                    ot = v,
                    qe = ot.onStart,
                    _t = ot.onInterrupt,
                    Pe = ot.onComplete;
                  if (
                    ((yt = Ci(jt, m)),
                    Kr(yt) || (yt = jt),
                    (ht = Math.max(0, Math.round(et + yt * vt))),
                    M <= bt && M >= et && ht !== M)
                  ) {
                    if (N && !N._initted && N.data <= vr(ht - M)) return;
                    v.inertia === !1 && (Tt = yt - Y),
                      le(
                        ht,
                        {
                          duration: We(
                            vr(
                              (Math.max(vr(jt - Ft), vr(yt - Ft)) * 0.185) /
                                tt /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: vr(ht - M),
                          onInterrupt: function () {
                            return Be.restart(!0) && _t && _t(m);
                          },
                          onComplete: function () {
                            m.update(),
                              (ct = kt()),
                              r &&
                                !z &&
                                (Q
                                  ? Q.resetTo(
                                      "totalProgress",
                                      yt,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(yt)),
                              (Pi = Qi =
                                r && !z ? r.totalProgress() : m.progress),
                              y && y(m),
                              Pe && Pe(m);
                          },
                        },
                        M,
                        Tt * vt,
                        ht - M - Tt * vt
                      ),
                      qe && qe(m, le.tween);
                  }
                } else m.isActive && ct !== M && Be.restart(!0);
              }).pause())),
            l && (so[l] = m),
            (d = m.trigger = _e(d || (f !== !0 && f))),
            (ci = d && d._gsap && d._gsap.stRevert),
            ci && (ci = ci(m)),
            (f = f === !0 ? d : _e(f)),
            Ce(a) && (a = { targets: d, className: a }),
            f &&
              (_ === !1 ||
                _ === ze ||
                (_ =
                  !_ &&
                  f.parentNode &&
                  f.parentNode.style &&
                  Ne(f.parentNode).display === "flex"
                    ? !1
                    : At),
              (m.pin = f),
              (Qt = O.core.getCache(f)),
              Qt.spacer
                ? (ai = Qt.pinState)
                : (C &&
                    ((C = _e(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Qt.spacerIsNative = !!C),
                    C && (Qt.spacerState = $n(C))),
                  (Qt.spacer = It = C || lt.createElement("div")),
                  It.classList.add("pin-spacer"),
                  l && It.classList.add("pin-spacer-" + l),
                  (Qt.pinState = ai = $n(f))),
              e.force3D !== !1 && O.set(f, { force3D: !0 }),
              (m.spacer = It = Qt.spacer),
              (Cr = Ne(f)),
              (ln = Cr[_ + k.os2]),
              (St = O.getProperty(f)),
              (Xe = O.quickSetter(f, k.a, Ot)),
              co(f, It, Cr),
              (Ki = $n(f))),
            $)
          ) {
            (oi = qi($) ? sl($, al) : al),
              (E = Yn("scroller-start", l, P, k, oi, 0)),
              (ke = Yn("scroller-end", l, P, k, oi, 0, E)),
              (ki = E["offset" + k.op.d2]);
            var un = _e(xi(P, "content") || P);
            (me = this.markerStart = Yn("start", l, un, k, oi, ki, 0, S)),
              (Ae = this.markerEnd = Yn("end", l, un, k, oi, ki, 0, S)),
              S && (Er = O.quickSetter([me, Ae], k.a, Ot)),
              !W &&
                !(Ge.length && xi(P, "fixedMarkers") === !0) &&
                (lc(F ? rt : P),
                O.set([E, ke], { force3D: !0 }),
                (Qn = O.quickSetter(E, k.a, Ot)),
                (Tr = O.quickSetter(ke, k.a, Ot)));
          }
          if (S) {
            var H = S.vars.onUpdate,
              I = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function () {
              m.update(0, 0, 1), H && H.apply(S, I || []);
            });
          }
          if (
            ((m.previous = function () {
              return U[U.indexOf(m) - 1];
            }),
            (m.next = function () {
              return U[U.indexOf(m) + 1];
            }),
            (m.revert = function (M, B) {
              if (!B) return m.kill(!0);
              var N = M !== !1 || !m.enabled,
                Y = Ut;
              N !== m.isReverted &&
                (N &&
                  ((Ye = Math.max(kt(), m.scroll.rec || 0)),
                  (Kt = m.progress),
                  (Ji = r && r.progress())),
                me &&
                  [me, Ae, E, ke].forEach(function (Ft) {
                    return (Ft.style.display = N ? "none" : "block");
                  }),
                N && ((Ut = m), m.update(N)),
                f &&
                  (!w || !m.isActive) &&
                  (N ? dc(f, It, ai) : co(f, It, Ne(f), Pt)),
                N || m.update(N),
                (Ut = Y),
                (m.isReverted = N));
            }),
            (m.refresh = function (M, B, N, Y) {
              if (!((Ut || !m.enabled) && !B)) {
                if (f && M && Le) {
                  zt(s, "scrollEnd", ul);
                  return;
                }
                !ae && J && J(m),
                  (Ut = m),
                  le.tween && !N && (le.tween.kill(), (le.tween = 0)),
                  Q && Q.pause(),
                  p &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Mi) {
                        return Mi.vars.immediateRender && Mi.render(0, !0, !0);
                      })),
                  m.isReverted || m.revert(!0, !0),
                  (m._subPinOffset = !1);
                var Ft = ut(),
                  tt = Dt(),
                  Tt = S ? S.duration() : Ke(P, k),
                  jt = vt <= 0.01 || !vt,
                  yt = 0,
                  ht = Y || 0,
                  ot = qi(N) ? N.end : e.end,
                  qe = e.endTrigger || d,
                  _t = qi(N)
                    ? N.start
                    : e.start ||
                      (e.start === 0 || !d ? 0 : f ? "0 0" : "0 100%"),
                  Pe = (m.pinnedContainer =
                    e.pinnedContainer && _e(e.pinnedContainer, m)),
                  Qe = (d && Math.max(0, U.indexOf(m))) || 0,
                  qt = Qe,
                  Ht,
                  Jt,
                  tr,
                  jn,
                  te,
                  Rt,
                  je,
                  vo,
                  Il,
                  cn,
                  Je,
                  fn,
                  Jn;
                for (
                  $ &&
                  qi(N) &&
                  ((fn = O.getProperty(E, k.p)), (Jn = O.getProperty(ke, k.p)));
                  qt-- > 0;

                )
                  (Rt = U[qt]),
                    Rt.end || Rt.refresh(0, 1) || (Ut = m),
                    (je = Rt.pin),
                    je &&
                      (je === d || je === f || je === Pe) &&
                      !Rt.isReverted &&
                      (cn || (cn = []), cn.unshift(Rt), Rt.revert(!0, !0)),
                    Rt !== U[qt] && (Qe--, qt--);
                for (
                  Zt(_t) && (_t = _t(m)),
                    _t = Za(_t, "start", m),
                    et =
                      _l(
                        _t,
                        d,
                        Ft,
                        k,
                        kt(),
                        me,
                        E,
                        m,
                        tt,
                        q,
                        W,
                        Tt,
                        S,
                        m._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    Zt(ot) && (ot = ot(m)),
                    Ce(ot) &&
                      !ot.indexOf("+=") &&
                      (~ot.indexOf(" ")
                        ? (ot = (Ce(_t) ? _t.split(" ")[0] : "") + ot)
                        : ((yt = Bn(ot.substr(2), Ft)),
                          (ot = Ce(_t)
                            ? _t
                            : (S
                                ? O.utils.mapRange(
                                    0,
                                    S.duration(),
                                    S.scrollTrigger.start,
                                    S.scrollTrigger.end,
                                    et
                                  )
                                : et) + yt),
                          (qe = d))),
                    ot = Za(ot, "end", m),
                    bt =
                      Math.max(
                        et,
                        _l(
                          ot || (qe ? "100% 0" : Tt),
                          qe,
                          Ft,
                          k,
                          kt() + yt,
                          Ae,
                          ke,
                          m,
                          tt,
                          q,
                          W,
                          Tt,
                          S,
                          m._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    yt = 0,
                    qt = Qe;
                  qt--;

                )
                  (Rt = U[qt]),
                    (je = Rt.pin),
                    je &&
                      Rt.start - Rt._pinPush <= et &&
                      !S &&
                      Rt.end > 0 &&
                      ((Ht =
                        Rt.end -
                        (m._startClamp ? Math.max(0, Rt.start) : Rt.start)),
                      ((je === d && Rt.start - Rt._pinPush < et) ||
                        je === Pe) &&
                        isNaN(_t) &&
                        (yt += Ht * (1 - Rt.progress)),
                      je === f && (ht += Ht));
                if (
                  ((et += yt),
                  (bt += yt),
                  m._startClamp && (m._startClamp += yt),
                  m._endClamp &&
                    !ae &&
                    ((m._endClamp = bt || -0.001),
                    (bt = Math.min(bt, Ke(P, k)))),
                  (vt = bt - et || ((et -= 0.01) && 0.001)),
                  jt &&
                    (Kt = O.utils.clamp(0, 1, O.utils.normalize(et, bt, Ye))),
                  (m._pinPush = ht),
                  me &&
                    yt &&
                    ((Ht = {}),
                    (Ht[k.a] = "+=" + yt),
                    Pe && (Ht[k.p] = "-=" + kt()),
                    O.set([me, Ae], Ht)),
                  f && !(Qs && m.end >= Ke(P, k)))
                )
                  (Ht = Ne(f)),
                    (jn = k === Mt),
                    (tr = kt()),
                    (Ie = parseFloat(St(k.a)) + ht),
                    !Tt &&
                      bt > 1 &&
                      ((Je = (F ? lt.scrollingElement || Te : P).style),
                      (Je = {
                        style: Je,
                        value: Je["overflow" + k.a.toUpperCase()],
                      }),
                      F &&
                        Ne(rt)["overflow" + k.a.toUpperCase()] !== "scroll" &&
                        (Je.style["overflow" + k.a.toUpperCase()] = "scroll")),
                    co(f, It, Ht),
                    (Ki = $n(f)),
                    (Jt = ni(f, !0)),
                    (vo = W && bi(P, jn ? ne : Mt)()),
                    _
                      ? ((Pt = [_ + k.os2, vt + ht + Ot]),
                        (Pt.t = It),
                        (qt = _ === At ? Nn(f, k) + vt + ht : 0),
                        qt &&
                          (Pt.push(k.d, qt + Ot),
                          It.style.flexBasis !== "auto" &&
                            (It.style.flexBasis = qt + Ot)),
                        xr(Pt),
                        Pe &&
                          U.forEach(function (Mi) {
                            Mi.pin === Pe &&
                              Mi.vars.pinSpacing !== !1 &&
                              (Mi._subPinOffset = !0);
                          }),
                        W && kt(Ye))
                      : ((qt = Nn(f, k)),
                        qt &&
                          It.style.flexBasis !== "auto" &&
                          (It.style.flexBasis = qt + Ot)),
                    W &&
                      ((te = {
                        top: Jt.top + (jn ? tr - et : vo) + Ot,
                        left: Jt.left + (jn ? vo : tr - et) + Ot,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (te[Hi] = te["max" + yr] = Math.ceil(Jt.width) + Ot),
                      (te[Vi] = te["max" + ro] = Math.ceil(Jt.height) + Ot),
                      (te[ze] =
                        te[ze + tn] =
                        te[ze + jr] =
                        te[ze + en] =
                        te[ze + Jr] =
                          "0"),
                      (te[At] = Ht[At]),
                      (te[At + tn] = Ht[At + tn]),
                      (te[At + jr] = Ht[At + jr]),
                      (te[At + en] = Ht[At + en]),
                      (te[At + Jr] = Ht[At + Jr]),
                      (Ai = _c(ai, te, w)),
                      ae && kt(0)),
                    r
                      ? ((Il = r._initted),
                        $s(1),
                        r.render(r.duration(), !0, !0),
                        (li = St(k.a) - Ie + vt + ht),
                        (ui = Math.abs(vt - li) > 1),
                        W && ui && Ai.splice(Ai.length - 2, 2),
                        r.render(0, !0, !0),
                        Il || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        $s(0))
                      : (li = vt),
                    Je &&
                      (Je.value
                        ? (Je.style["overflow" + k.a.toUpperCase()] = Je.value)
                        : Je.style.removeProperty("overflow-" + k.a));
                else if (d && kt() && !S)
                  for (Jt = d.parentNode; Jt && Jt !== rt; )
                    Jt._pinOffset &&
                      ((et -= Jt._pinOffset), (bt -= Jt._pinOffset)),
                      (Jt = Jt.parentNode);
                cn &&
                  cn.forEach(function (Mi) {
                    return Mi.revert(!1, !0);
                  }),
                  (m.start = et),
                  (m.end = bt),
                  (ue = ge = ae ? Ye : kt()),
                  !S && !ae && (ue < Ye && kt(Ye), (m.scroll.rec = 0)),
                  m.revert(!1, !0),
                  (Yt = Gt()),
                  Be && ((ct = -1), Be.restart(!0)),
                  (Ut = 0),
                  r &&
                    z &&
                    (r._initted || Ji) &&
                    r.progress() !== Ji &&
                    r.progress(Ji || 0, !0).render(r.time(), !0, !0),
                  (jt || Kt !== m.progress || S || p || (r && !r._initted)) &&
                    (r &&
                      !z &&
                      (r._initted || Kt || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        S && et < -0.001 && !Kt
                          ? O.utils.normalize(et, bt, 0)
                          : Kt,
                        !0
                      ),
                    (m.progress = jt || (ue - et) / vt === Kt ? 0 : Kt)),
                  f && _ && (It._pinOffset = Math.round(m.progress * li)),
                  Q && Q.invalidate(),
                  isNaN(fn) ||
                    ((fn -= O.getProperty(E, k.p)),
                    (Jn -= O.getProperty(ke, k.p)),
                    Gn(E, k, fn),
                    Gn(me, k, fn - (Y || 0)),
                    Gn(ke, k, Jn),
                    Gn(Ae, k, Jn - (Y || 0))),
                  jt && !ae && m.update(),
                  c && !ae && !Ei && ((Ei = !0), c(m), (Ei = !1));
              }
            }),
            (m.getVelocity = function () {
              return ((kt() - ge) / (Gt() - Ur)) * 1e3 || 0;
            }),
            (m.endAnimation = function () {
              Qr(m.callbackAnimation),
                r &&
                  (Q
                    ? Q.progress(1)
                    : r.paused()
                    ? z || Qr(r, m.direction < 0, 1)
                    : Qr(r, r.reversed()));
            }),
            (m.labelToScroll = function (M) {
              return (
                (r &&
                  r.labels &&
                  (et || m.refresh() || et) +
                    (r.labels[M] / r.duration()) * vt) ||
                0
              );
            }),
            (m.getTrailing = function (M) {
              var B = U.indexOf(m),
                N = m.direction > 0 ? U.slice(0, B).reverse() : U.slice(B + 1);
              return (
                Ce(M)
                  ? N.filter(function (Y) {
                      return Y.vars.preventOverlaps === M;
                    })
                  : N
              ).filter(function (Y) {
                return m.direction > 0 ? Y.end <= et : Y.start >= bt;
              });
            }),
            (m.update = function (M, B, N) {
              if (!(S && !N && !M)) {
                var Y = ae === !0 ? Ye : m.scroll(),
                  Ft = M ? 0 : (Y - et) / vt,
                  tt = Ft < 0 ? 0 : Ft > 1 ? 1 : Ft || 0,
                  Tt = m.progress,
                  jt,
                  yt,
                  ht,
                  ot,
                  qe,
                  _t,
                  Pe,
                  Qe;
                if (
                  (B &&
                    ((ge = ue),
                    (ue = S ? kt() : Y),
                    v && ((Qi = Pi), (Pi = r && !z ? r.totalProgress() : tt))),
                  g &&
                    f &&
                    !Ut &&
                    !Ln &&
                    Le &&
                    (!tt && et < Y + ((Y - ge) / (Gt() - Ur)) * g
                      ? (tt = 1e-4)
                      : tt === 1 &&
                        bt > Y + ((Y - ge) / (Gt() - Ur)) * g &&
                        (tt = 0.9999)),
                  tt !== Tt && m.enabled)
                ) {
                  if (
                    ((jt = m.isActive = !!tt && tt < 1),
                    (yt = !!Tt && Tt < 1),
                    (_t = jt !== yt),
                    (qe = _t || !!tt != !!Tt),
                    (m.direction = tt > Tt ? 1 : -1),
                    (m.progress = tt),
                    qe &&
                      !Ut &&
                      ((ht = tt && !Tt ? 0 : tt === 1 ? 1 : Tt === 1 ? 2 : 3),
                      z &&
                        ((ot =
                          (!_t && R[ht + 1] !== "none" && R[ht + 1]) || R[ht]),
                        (Qe =
                          r &&
                          (ot === "complete" || ot === "reset" || ot in r)))),
                    A &&
                      (_t || Qe) &&
                      (Qe || h || !r) &&
                      (Zt(A)
                        ? A(m)
                        : m.getTrailing(A).forEach(function (tr) {
                            return tr.endAnimation();
                          })),
                    z ||
                      (Q && !Ut && !Ln
                        ? (Q._dp._time - Q._start !== Q._time &&
                            Q.render(Q._dp._time - Q._start),
                          Q.resetTo
                            ? Q.resetTo("totalProgress", tt, r._tTime / r._tDur)
                            : ((Q.vars.totalProgress = tt),
                              Q.invalidate().restart()))
                        : r && r.totalProgress(tt, !!(Ut && (Yt || M)))),
                    f)
                  ) {
                    if ((M && _ && (It.style[_ + k.os2] = ln), !W))
                      Xe(Zr(Ie + li * tt));
                    else if (qe) {
                      if (
                        ((Pe =
                          !M && tt > Tt && bt + 1 > Y && Y + 1 >= Ke(P, k)),
                        w)
                      )
                        if (!M && (jt || Pe)) {
                          var qt = ni(f, !0),
                            Ht = Y - et;
                          gl(
                            f,
                            rt,
                            qt.top + (k === Mt ? Ht : 0) + Ot,
                            qt.left + (k === Mt ? 0 : Ht) + Ot
                          );
                        } else gl(f, It);
                      xr(jt || Pe ? Ai : Ki),
                        (ui && tt < 1 && jt) ||
                          Xe(Ie + (tt === 1 && !Pe ? li : 0));
                    }
                  }
                  v && !le.tween && !Ut && !Ln && Be.restart(!0),
                    a &&
                      (_t || (b && tt && (tt < 1 || !js))) &&
                      Vr(a.targets).forEach(function (tr) {
                        return tr.classList[jt || b ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !z && !M && o(m),
                    qe && !Ut
                      ? (z &&
                          (Qe &&
                            (ot === "complete"
                              ? r.pause().totalProgress(1)
                              : ot === "reset"
                              ? r.restart(!0).pause()
                              : ot === "restart"
                              ? r.restart(!0)
                              : r[ot]()),
                          o && o(m)),
                        (_t || !js) &&
                          (u && _t && to(m, u),
                          X[ht] && to(m, X[ht]),
                          b && (tt === 1 ? m.kill(!1, 1) : (X[ht] = 0)),
                          _t ||
                            ((ht = tt === 1 ? 1 : 3), X[ht] && to(m, X[ht]))),
                        T &&
                          !jt &&
                          Math.abs(m.getVelocity()) > (Kr(T) ? T : 2500) &&
                          (Qr(m.callbackAnimation),
                          Q
                            ? Q.progress(1)
                            : Qr(r, ot === "reverse" ? 1 : !tt, 1)))
                      : z && o && !Ut && o(m);
                }
                if (Tr) {
                  var Jt = S ? (Y / S.duration()) * (S._caScrollDist || 0) : Y;
                  Qn(Jt + (E._isFlipped ? 1 : 0)), Tr(Jt);
                }
                Er && Er((-Y / S.duration()) * (S._caScrollDist || 0));
              }
            }),
            (m.enable = function (M, B) {
              m.enabled ||
                ((m.enabled = !0),
                zt(P, "resize", nn),
                F || zt(P, "scroll", wr),
                J && zt(s, "refreshInit", J),
                M !== !1 && ((m.progress = Kt = 0), (ue = ge = ct = kt())),
                B !== !1 && m.refresh());
            }),
            (m.getTween = function (M) {
              return M && le ? le.tween : Q;
            }),
            (m.setPositions = function (M, B, N, Y) {
              if (S) {
                var Ft = S.scrollTrigger,
                  tt = S.duration(),
                  Tt = Ft.end - Ft.start;
                (M = Ft.start + (Tt * M) / tt), (B = Ft.start + (Tt * B) / tt);
              }
              m.refresh(
                !1,
                !1,
                {
                  start: Ka(M, N && !!m._startClamp),
                  end: Ka(B, N && !!m._endClamp),
                },
                Y
              ),
                m.update();
            }),
            (m.adjustPinSpacing = function (M) {
              if (Pt && M) {
                var B = Pt.indexOf(k.d) + 1;
                (Pt[B] = parseFloat(Pt[B]) + M + Ot),
                  (Pt[1] = parseFloat(Pt[1]) + M + Ot),
                  xr(Pt);
              }
            }),
            (m.disable = function (M, B) {
              if (
                m.enabled &&
                (M !== !1 && m.revert(!0, !0),
                (m.enabled = m.isActive = !1),
                B || (Q && Q.pause()),
                (Ye = 0),
                Qt && (Qt.uncache = 1),
                J && Nt(s, "refreshInit", J),
                Be &&
                  (Be.pause(), le.tween && le.tween.kill() && (le.tween = 0)),
                !F)
              ) {
                for (var N = U.length; N--; )
                  if (U[N].scroller === P && U[N] !== m) return;
                Nt(P, "resize", nn), F || Nt(P, "scroll", wr);
              }
            }),
            (m.kill = function (M, B) {
              m.disable(M, B), Q && !B && Q.kill(), l && delete so[l];
              var N = U.indexOf(m);
              N >= 0 && U.splice(N, 1),
                N === se && Hn > 0 && se--,
                (N = 0),
                U.forEach(function (Y) {
                  return Y.scroller === m.scroller && (N = 1);
                }),
                N || ae || (m.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  M && r.revert({ kill: !1 }),
                  B || r.kill()),
                me &&
                  [me, Ae, E, ke].forEach(function (Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y);
                  }),
                sn === m && (sn = 0),
                f &&
                  (Qt && (Qt.uncache = 1),
                  (N = 0),
                  U.forEach(function (Y) {
                    return Y.pin === f && N++;
                  }),
                  N || (Qt.spacer = 0)),
                e.onKill && e.onKill(m);
            }),
            U.push(m),
            m.enable(!1, !1),
            ci && ci(m),
            r && r.add && !vt)
          ) {
            var it = m.update;
            (m.update = function () {
              (m.update = it), Z.cache++, et || bt || m.refresh();
            }),
              O.delayedCall(0.01, m.update),
              (vt = 0.01),
              (et = bt = 0);
          } else m.refresh();
          f && hc();
        }),
        (s.register = function (e) {
          return (
            _r ||
              ((O = e || tl()),
              Ja() && window.document && s.enable(),
              (_r = Gr)),
            _r
          );
        }),
        (s.defaults = function (e) {
          if (e) for (var r in e) Xn[r] = e[r];
          return Xn;
        }),
        (s.disable = function (e, r) {
          (Gr = 0),
            U.forEach(function (o) {
              return o[r ? "kill" : "disable"](e);
            }),
            Nt(K, "wheel", wr),
            Nt(lt, "scroll", wr),
            clearInterval(On),
            Nt(lt, "touchcancel", Ze),
            Nt(rt, "touchstart", Ze),
            In(Nt, lt, "pointerdown,touchstart,mousedown", Qa),
            In(Nt, lt, "pointerup,touchend,mouseup", ja),
            Mn.kill(),
            zn(Nt);
          for (var n = 0; n < Z.length; n += 3)
            Fn(Nt, Z[n], Z[n + 1]), Fn(Nt, Z[n], Z[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((K = window),
            (lt = document),
            (Te = lt.documentElement),
            (rt = lt.body),
            O &&
              ((Vr = O.utils.toArray),
              ($r = O.utils.clamp),
              (Gs = O.core.context || Ze),
              ($s = O.core.suppressOverwrites || Ze),
              (Zs = K.history.scrollRestoration || "auto"),
              (lo = K.pageYOffset || 0),
              O.core.globals("ScrollTrigger", s),
              rt))
          ) {
            (Gr = 1),
              (mr = document.createElement("div")),
              (mr.style.height = "100vh"),
              (mr.style.position = "absolute"),
              dl(),
              sc(),
              xt.register(O),
              (s.isTouch = xt.isTouch),
              (Si =
                xt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Us = xt.isTouch === 1),
              zt(K, "wheel", wr),
              (Hs = [K, lt, Te, rt]),
              O.matchMedia
                ? ((s.matchMedia = function (u) {
                    var c = O.matchMedia(),
                      h;
                    for (h in u) c.add(h, u[h]);
                    return c;
                  }),
                  O.addEventListener("matchMediaInit", function () {
                    return ao();
                  }),
                  O.addEventListener("matchMediaRevert", function () {
                    return cl();
                  }),
                  O.addEventListener("matchMedia", function () {
                    Zi(0, 1), Ui("matchMedia");
                  }),
                  O.matchMedia().add("(orientation: portrait)", function () {
                    return oo(), oo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              oo(),
              zt(lt, "scroll", wr);
            var e = rt.hasAttribute("style"),
              r = rt.style,
              n = r.borderTopStyle,
              o = O.core.Animation.prototype,
              a,
              l;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                a = ni(rt),
                Mt.m = Math.round(a.top + Mt.sc()) || 0,
                ne.m = Math.round(a.left + ne.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                e ||
                  (rt.setAttribute("style", ""), rt.removeAttribute("style")),
                On = setInterval(ll, 250),
                O.delayedCall(0.5, function () {
                  return (Ln = 0);
                }),
                zt(lt, "touchcancel", Ze),
                zt(rt, "touchstart", Ze),
                In(zt, lt, "pointerdown,touchstart,mousedown", Qa),
                In(zt, lt, "pointerup,touchend,mouseup", ja),
                Vs = O.utils.checkPrefix("transform"),
                Vn.push(Vs),
                _r = Gt(),
                Mn = O.delayedCall(0.2, Zi).pause(),
                gr = [
                  lt,
                  "visibilitychange",
                  function () {
                    var u = K.innerWidth,
                      c = K.innerHeight;
                    lt.hidden
                      ? ((qa = u), (Ha = c))
                      : (qa !== u || Ha !== c) && nn();
                  },
                  lt,
                  "DOMContentLoaded",
                  Zi,
                  K,
                  "load",
                  Zi,
                  K,
                  "resize",
                  nn,
                ],
                zn(zt),
                U.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < Z.length;
              l += 3
            )
              Fn(Nt, Z[l], Z[l + 1]), Fn(Nt, Z[l], Z[l + 2]);
          }
        }),
        (s.config = function (e) {
          "limitCallbacks" in e && (js = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(On)) || ((On = r) && setInterval(ll, r)),
            "ignoreMobileResize" in e &&
              (Us = s.isTouch === 1 && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (zn(Nt) || zn(zt, e.autoRefreshEvents || "none"),
              ($a = (e.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (e, r) {
          var n = _e(e),
            o = Z.indexOf(n),
            a = Yi(n);
          ~o && Z.splice(o, a ? 6 : 2),
            r && (a ? Ge.unshift(K, r, rt, r, Te, r) : Ge.unshift(n, r));
        }),
        (s.clearMatchMedia = function (e) {
          U.forEach(function (r) {
            return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (e, r, n) {
          var o = (Ce(e) ? _e(e) : e).getBoundingClientRect(),
            a = o[n ? Hi : Vi] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < K.innerWidth
            : o.bottom - a > 0 && o.top + a < K.innerHeight;
        }),
        (s.positionInViewport = function (e, r, n) {
          Ce(e) && (e = _e(e));
          var o = e.getBoundingClientRect(),
            a = o[n ? Hi : Vi],
            l =
              r == null
                ? a / 2
                : r in Wn
                ? Wn[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return n ? (o.left + l) / K.innerWidth : (o.top + l) / K.innerHeight;
        }),
        (s.killAll = function (e) {
          if (
            (U.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            e !== !0)
          ) {
            var r = $i.killAll || [];
            ($i = {}),
              r.forEach(function (n) {
                return n();
              });
          }
        }),
        s
      );
    })();
  (V.version = "3.13.0"),
    (V.saveStyles = function (s) {
      return s
        ? Vr(s).forEach(function (t) {
            if (t && t.style) {
              var i = Ee.indexOf(t);
              i >= 0 && Ee.splice(i, 5),
                Ee.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  O.core.getCache(t),
                  Gs()
                );
            }
          })
        : Ee;
    }),
    (V.revert = function (s, t) {
      return ao(!s, t);
    }),
    (V.create = function (s, t) {
      return new V(s, t);
    }),
    (V.refresh = function (s) {
      return s ? nn(!0) : (_r || V.register()) && Zi(!0);
    }),
    (V.update = function (s) {
      return ++Z.cache && si(s === !0 ? 2 : 0);
    }),
    (V.clearScrollMemory = fl),
    (V.maxScroll = function (s, t) {
      return Ke(s, t ? ne : Mt);
    }),
    (V.getScrollFunc = function (s, t) {
      return bi(_e(s), t ? ne : Mt);
    }),
    (V.getById = function (s) {
      return so[s];
    }),
    (V.getAll = function () {
      return U.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (V.isScrolling = function () {
      return !!Le;
    }),
    (V.snapDirectional = no),
    (V.addEventListener = function (s, t) {
      var i = $i[s] || ($i[s] = []);
      ~i.indexOf(t) || i.push(t);
    }),
    (V.removeEventListener = function (s, t) {
      var i = $i[s],
        e = i && i.indexOf(t);
      e >= 0 && i.splice(e, 1);
    }),
    (V.batch = function (s, t) {
      var i = [],
        e = {},
        r = t.interval || 0.016,
        n = t.batchMax || 1e9,
        o = function (u, c) {
          var h = [],
            d = [],
            f = O.delayedCall(r, function () {
              c(h, d), (h = []), (d = []);
            }).pause();
          return function (_) {
            h.length || f.restart(!0),
              h.push(_.trigger),
              d.push(_),
              n <= h.length && f.progress(1);
          };
        },
        a;
      for (a in t)
        e[a] =
          a.substr(0, 2) === "on" && Zt(t[a]) && a !== "onRefreshInit"
            ? o(a, t[a])
            : t[a];
      return (
        Zt(n) &&
          ((n = n()),
          zt(V, "refresh", function () {
            return (n = t.batchMax());
          })),
        Vr(s).forEach(function (l) {
          var u = {};
          for (a in e) u[a] = e[a];
          (u.trigger = l), i.push(V.create(u));
        }),
        i
      );
    });
  var yl = function (t, i, e, r) {
      return (
        i > r ? t(r) : i < 0 && t(0),
        e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1
      );
    },
    fo = function s(t, i) {
      i === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            i === !0
              ? "auto"
              : i
              ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Te && s(rt, i);
    },
    Zn = { auto: 1, scroll: 1 },
    mc = function (t) {
      var i = t.event,
        e = t.target,
        r = t.axis,
        n = (i.changedTouches ? i.changedTouches[0] : i).target,
        o = n._gsap || O.core.getCache(n),
        a = Gt(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== rt &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Zn[(l = Ne(n)).overflowY] || Zn[l.overflowX]));

        )
          n = n.parentNode;
        (o._isScroll =
          n &&
          n !== e &&
          !Yi(n) &&
          (Zn[(l = Ne(n)).overflowY] || Zn[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    wl = function (t, i, e, r) {
      return xt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && mc),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return e && zt(lt, xt.eventTypes[0], bl, !1, !0);
        },
        onDisable: function () {
          return Nt(lt, xt.eventTypes[0], bl, !0);
        },
      });
    },
    vc = /(input|label|select|textarea)/i,
    xl,
    bl = function (t) {
      var i = vc.test(t.target.tagName);
      (i || xl) && ((t._gsapAllow = !0), (xl = i));
    },
    yc = function (t) {
      qi(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var i = t,
        e = i.normalizeScrollX,
        r = i.momentum,
        n = i.allowNestedScroll,
        o = i.onRelease,
        a,
        l,
        u = _e(t.target) || Te,
        c = O.core.globals().ScrollSmoother,
        h = c && c.get(),
        d =
          Si &&
          ((t.content && _e(t.content)) ||
            (h && t.content !== !1 && !h.smooth() && h.content())),
        f = bi(u, Mt),
        _ = bi(u, ne),
        p = 1,
        g =
          (xt.isTouch && K.visualViewport
            ? K.visualViewport.scale * K.visualViewport.width
            : K.outerWidth) / K.innerWidth,
        x = 0,
        y = Zt(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        b,
        v,
        w = wl(u, t.type, !0, n),
        C = function () {
          return (v = !1);
        },
        S = Ze,
        T = Ze,
        A = function () {
          (l = Ke(u, Mt)),
            (T = $r(Si ? 1 : 0, l)),
            e && (S = $r(0, Ke(u, ne))),
            (b = Gi);
        },
        k = function () {
          (d._gsap.y = Zr(parseFloat(d._gsap.y) + f.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        z = function () {
          if (v) {
            requestAnimationFrame(C);
            var $ = Zr(a.deltaY / 2),
              q = T(f.v - $);
            if (d && q !== f.v + f.offset) {
              f.offset = q - f.v;
              var m = Zr((parseFloat(d && d._gsap.y) || 0) - f.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                m +
                ", 0, 1)"),
                (d._gsap.y = m + "px"),
                (f.cacheID = Z.cache),
                si();
            }
            return !0;
          }
          f.offset && k(), (v = !0);
        },
        P,
        D,
        F,
        W,
        X = function () {
          A(),
            P.isActive() &&
              P.vars.scrollY > l &&
              (f() > l ? P.progress(1) && f(l) : P.resetTo("scrollY", l));
        };
      return (
        d && O.set(d, { y: "+=0" }),
        (t.ignoreCheck = function (R) {
          return (
            (Si && R.type === "touchmove" && z()) ||
            (p > 1.05 && R.type !== "touchstart") ||
            a.isGesturing ||
            (R.touches && R.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          v = !1;
          var R = p;
          (p = Zr(((K.visualViewport && K.visualViewport.scale) || 1) / g)),
            P.pause(),
            R !== p && fo(u, p > 1.01 ? !0 : e ? !1 : "x"),
            (D = _()),
            (F = f()),
            A(),
            (b = Gi);
        }),
        (t.onRelease = t.onGestureStart =
          function (R, $) {
            if ((f.offset && k(), !$)) W.restart(!0);
            else {
              Z.cache++;
              var q = y(),
                m,
                J;
              e &&
                ((m = _()),
                (J = m + (q * 0.05 * -R.velocityX) / 0.227),
                (q *= yl(_, m, J, Ke(u, ne))),
                (P.vars.scrollX = S(J))),
                (m = f()),
                (J = m + (q * 0.05 * -R.velocityY) / 0.227),
                (q *= yl(f, m, J, Ke(u, Mt))),
                (P.vars.scrollY = T(J)),
                P.invalidate().duration(q).play(0.01),
                ((Si && P.vars.scrollY >= l) || m >= l - 1) &&
                  O.to({}, { onUpdate: X, duration: q });
            }
            o && o(R);
          }),
        (t.onWheel = function () {
          P._ts && P.pause(), Gt() - x > 1e3 && ((b = 0), (x = Gt()));
        }),
        (t.onChange = function (R, $, q, m, J) {
          if (
            (Gi !== b && A(),
            $ && e && _(S(m[2] === $ ? D + (R.startX - R.x) : _() + $ - m[1])),
            q)
          ) {
            f.offset && k();
            var ut = J[2] === q,
              Dt = ut ? F + R.startY - R.y : f() + q - J[1],
              ct = T(Dt);
            ut && Dt !== ct && (F += ct - Dt), f(ct);
          }
          (q || $) && si();
        }),
        (t.onEnable = function () {
          fo(u, e ? !1 : "x"),
            V.addEventListener("refresh", X),
            zt(K, "resize", X),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = _.smooth = !1)),
            w.enable();
        }),
        (t.onDisable = function () {
          fo(u, !0),
            Nt(K, "resize", X),
            V.removeEventListener("refresh", X),
            w.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (a = new xt(t)),
        (a.iOS = Si),
        Si && !f() && f(1),
        Si && O.ticker.add(Ze),
        (W = a._dc),
        (P = O.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: e ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: ml(f, f(), function () {
              return P.pause();
            }),
          },
          onUpdate: si,
          onComplete: W.vars.onComplete,
        })),
        a
      );
    };
  (V.sort = function (s) {
    if (Zt(s)) return U.sort(s);
    var t = K.pageYOffset || 0;
    return (
      V.getAll().forEach(function (i) {
        return (i._sortY = i.trigger
          ? t + i.trigger.getBoundingClientRect().top
          : i.start + K.innerHeight);
      }),
      U.sort(
        s ||
          function (i, e) {
            return (
              (i.vars.refreshPriority || 0) * -1e6 +
              (i.vars.containerAnimation ? 1e6 : i._sortY) -
              ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                (e.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (V.observe = function (s) {
      return new xt(s);
    }),
    (V.normalizeScroll = function (s) {
      if (typeof s == "undefined") return oe;
      if (s === !0 && oe) return oe.enable();
      if (s === !1) {
        oe && oe.kill(), (oe = s);
        return;
      }
      var t = s instanceof xt ? s : yc(s);
      return (
        oe && oe.target === t.target && oe.kill(), Yi(t.target) && (oe = t), t
      );
    }),
    (V.core = {
      _getVelocityProp: qs,
      _inputObserver: wl,
      _scrollers: Z,
      _proxies: Ge,
      bridge: {
        ss: function () {
          Le || Ui("scrollStart"), (Le = Gt());
        },
        ref: function () {
          return Ut;
        },
      },
    }),
    tl() && O.registerPlugin(V);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let on,
    br,
    ho,
    wc = () => ho || an.register(window.gsap),
    Sl = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Kn = (s) =>
      typeof s == "string"
        ? Kn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    Tl = (s) => Kn(s).filter((t) => t instanceof HTMLElement),
    po = [],
    _o = function () {},
    xc = /\s+/g,
    Cl = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    El = { left: 0, top: 0, width: 0, height: 0 },
    Al = (s, t) => {
      if (t) {
        let i = new Set(s.join("").match(t) || po),
          e = s.length,
          r,
          n,
          o,
          a;
        if (i.size)
          for (; --e > -1; ) {
            n = s[e];
            for (o of i)
              if (o.startsWith(n) && o.length > n.length) {
                for (
                  r = 0, a = n;
                  o.startsWith((a += s[e + ++r])) && a.length < o.length;

                );
                if (r && a.length === o.length) {
                  (s[e] = o), s.splice(e + 1, r);
                  break;
                }
              }
          }
      }
      return s;
    },
    kl = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Sr = (s, t, i) =>
      t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, i),
    go = (s, t, i) => {
      let e = t[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t,
        a = s === "line" ? "block" : "inline-block",
        l = e.indexOf("++") > -1,
        u = (c) => {
          let h = document.createElement(r),
            d = i.length + 1;
          return (
            e && (h.className = e + (l ? " " + e + d : "")),
            o && h.style.setProperty("--" + s, d + ""),
            n !== "none" && h.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((h.style.position = "relative"), (h.style.display = a)),
            (h.textContent = c),
            i.push(h),
            h
          );
        };
      return l && (e = e.replace("++", "")), (u.collection = i), u;
    },
    bc = (s, t, i, e) => {
      let r = go("line", i, e),
        n = window.getComputedStyle(s).textAlign || "left";
      return (o, a) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, t[o]); o < a; o++)
          l.appendChild(t[o]);
        l.normalize();
      };
    },
    Pl = (s, t, i, e, r, n, o, a, l, u) => {
      var c;
      let h = Array.from(s.childNodes),
        d = 0,
        { wordDelimiter: f, reduceWhiteSpace: _ = !0, prepareText: p } = t,
        g = s.getBoundingClientRect(),
        x = g,
        y =
          !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        b = 0,
        v = i.collection,
        w,
        C,
        S,
        T,
        A,
        k,
        z,
        P,
        D,
        F,
        W,
        X,
        R,
        $,
        q,
        m,
        J,
        ut;
      for (
        typeof f == "object"
          ? ((S = f.delimiter || f), (C = f.replaceWith || ""))
          : (C = f === "" ? "" : f || " "),
          w = C !== " ";
        d < h.length;
        d++
      )
        if (((T = h[d]), T.nodeType === 3)) {
          for (
            q = T.textContent || "",
              _
                ? (q = q.replace(xc, " "))
                : y &&
                  (q = q.replace(
                    /\n/g,
                    C +
                      `
`
                  )),
              p && (q = p(q, s)),
              T.textContent = q,
              A = C || S ? q.split(S || C) : q.match(a) || po,
              J = A[A.length - 1],
              P = w ? J.slice(-1) === " " : !J,
              J || A.pop(),
              x = g,
              z = w ? A[0].charAt(0) === " " : !A[0],
              z && Sr(" ", s, T),
              A[0] || A.shift(),
              Al(A, l),
              (n && u) || (T.textContent = ""),
              D = 1;
            D <= A.length;
            D++
          )
            if (
              ((m = A[D - 1]),
              !_ &&
                y &&
                m.charAt(0) ===
                  `
` &&
                ((c = T.previousSibling) == null || c.remove(),
                Sr(document.createElement("br"), s, T),
                (m = m.slice(1))),
              !_ && m === "")
            )
              Sr(C, s, T);
            else if (m === " ") s.insertBefore(document.createTextNode(" "), T);
            else {
              if (
                (w && m.charAt(0) === " " && Sr(" ", s, T),
                b && D === 1 && !z && v.indexOf(b.parentNode) > -1
                  ? ((k = v[v.length - 1]),
                    k.appendChild(document.createTextNode(e ? "" : m)))
                  : ((k = i(e ? "" : m)),
                    Sr(k, s, T),
                    b && D === 1 && !z && k.insertBefore(b, k.firstChild)),
                e)
              )
                for (
                  W = Sl
                    ? Al(
                        [...Sl.segment(m)].map((Dt) => Dt.segment),
                        l
                      )
                    : m.match(a) || po,
                    ut = 0;
                  ut < W.length;
                  ut++
                )
                  k.appendChild(
                    W[ut] === " " ? document.createTextNode(" ") : e(W[ut])
                  );
              if (n && u) {
                if (
                  ((q = T.textContent = q.substring(m.length + 1, q.length)),
                  (F = k.getBoundingClientRect()),
                  F.top > x.top && F.left <= x.left)
                ) {
                  for (X = s.cloneNode(), R = s.childNodes[0]; R && R !== k; )
                    ($ = R), (R = R.nextSibling), X.appendChild($);
                  s.parentNode.insertBefore(X, s), r && kl(X);
                }
                x = F;
              }
              (D < A.length || P) &&
                Sr(
                  D >= A.length ? " " : w && m.slice(-1) === " " ? " " + C : C,
                  s,
                  T
                );
            }
          s.removeChild(T), (b = 0);
        } else
          T.nodeType === 1 &&
            (o && o.indexOf(T) > -1
              ? (v.indexOf(T.previousSibling) > -1 &&
                  v[v.length - 1].appendChild(T),
                (b = T))
              : (Pl(T, t, i, e, r, n, o, a, l, !0), (b = 0)),
            r && kl(T));
    };
  const Ml = class Wl {
    constructor(t, i) {
      (this.isSplit = !1),
        wc(),
        (this.elements = Tl(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = i),
        (this._split = () => this.isSplit && this.split(this.vars));
      let e = [],
        r,
        n = () => {
          let o = e.length,
            a;
          for (; o--; ) {
            a = e[o];
            let l = a.element.offsetWidth;
            if (l !== a.width) {
              (a.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: e,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        _o(this),
        this.split(i);
    }
    split(t) {
      this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
      let {
          type: i = "chars,words,lines",
          aria: e = "auto",
          deepSlice: r = !0,
          smartWrap: n,
          onSplit: o,
          autoSplit: a = !1,
          specialChars: l,
          mask: u,
        } = this.vars,
        c = i.indexOf("lines") > -1,
        h = i.indexOf("chars") > -1,
        d = i.indexOf("words") > -1,
        f = h && !d && !c,
        _ =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = _ ? new RegExp(_.source + "|" + Cl.source, "gu") : Cl,
        g = !!t.ignore && Tl(t.ignore),
        { orig: x, animTime: y, obs: b } = this._data,
        v;
      return (
        (h || d || c) &&
          (this.elements.forEach((w, C) => {
            (x[C] = {
              element: w,
              html: w.innerHTML,
              ariaL: w.getAttribute("aria-label"),
              ariaH: w.getAttribute("aria-hidden"),
            }),
              e === "auto"
                ? w.setAttribute("aria-label", (w.textContent || "").trim())
                : e === "hidden" && w.setAttribute("aria-hidden", "true");
            let S = [],
              T = [],
              A = [],
              k = h ? go("char", t, S) : null,
              z = go("word", t, T),
              P,
              D,
              F,
              W;
            if ((Pl(w, t, z, k, f, r && (c || f), g, p, _, !1), c)) {
              let X = Kn(w.childNodes),
                R = bc(w, X, t, A),
                $,
                q = [],
                m = 0,
                J = X.map((Dt) =>
                  Dt.nodeType === 1 ? Dt.getBoundingClientRect() : El
                ),
                ut = El;
              for (P = 0; P < X.length; P++)
                ($ = X[P]),
                  $.nodeType === 1 &&
                    ($.nodeName === "BR"
                      ? (q.push($), R(m, P + 1), (m = P + 1), (ut = J[m]))
                      : (P &&
                          J[P].top > ut.top &&
                          J[P].left <= ut.left &&
                          (R(m, P), (m = P)),
                        (ut = J[P])));
              m < P && R(m, P),
                q.forEach((Dt) => {
                  var ct;
                  return (ct = Dt.parentNode) == null
                    ? void 0
                    : ct.removeChild(Dt);
                });
            }
            if (!d) {
              for (P = 0; P < T.length; P++)
                if (
                  ((D = T[P]),
                  h || !D.nextSibling || D.nextSibling.nodeType !== 3)
                )
                  if (n && !c) {
                    for (
                      F = document.createElement("span"),
                        F.style.whiteSpace = "nowrap";
                      D.firstChild;

                    )
                      F.appendChild(D.firstChild);
                    D.replaceWith(F);
                  } else D.replaceWith(...D.childNodes);
                else
                  (W = D.nextSibling),
                    W &&
                      W.nodeType === 3 &&
                      ((W.textContent =
                        (D.textContent || "") + (W.textContent || "")),
                      D.remove());
              (T.length = 0), w.normalize();
            }
            this.lines.push(...A), this.words.push(...T), this.chars.push(...S);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((w) => {
                let C = w.cloneNode();
                return (
                  w.replaceWith(C),
                  C.appendChild(w),
                  w.className &&
                    (C.className = w.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (C.style.overflow = "clip"),
                  C
                );
              })
            )),
        (this.isSplit = !0),
        br &&
          (a
            ? br.addEventListener("loadingdone", this._split)
            : br.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (v = o && o(this)) &&
          v.totalTime &&
          (this._data.anim = y ? v.totalTime(y) : v),
        c &&
          a &&
          this.elements.forEach((w, C) => {
            (x[C].width = w.offsetWidth), b && b.observe(w);
          }),
        this
      );
    }
    revert() {
      var t, i;
      let { orig: e, anim: r, obs: n } = this._data;
      return (
        n && n.disconnect(),
        e.forEach(({ element: o, html: a, ariaL: l, ariaH: u }) => {
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
          e.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        br == null || br.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (i = (t = this.vars).onRevert) == null || i.call(t, this),
        this
      );
    }
    static create(t, i) {
      return new Wl(t, i);
    }
    static register(t) {
      (on = on || t || window.gsap),
        on && ((Kn = on.utils.toArray), (_o = on.core.context || _o)),
        !ho && window.innerWidth > 0 && ((br = document.fonts), (ho = !0));
    }
  };
  Ml.version = "3.13.0";
  let an = Ml;
  G.registerPlugin(V, an);
  const Sc = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((t) => {
        const i = t.getAttribute("data-highlight-scroll-start") || "top 90%",
          e = t.getAttribute("data-highlight-scroll-end") || "center 40%",
          r = parseFloat(t.getAttribute("data-highlight-fade")) || 0.2,
          n = parseFloat(t.getAttribute("data-highlight-stagger")) || 0.1;
        new an(t, {
          type: "words, chars",
          onSplit(o) {
            const a = G.context(() => {
              G.timeline({
                scrollTrigger: { scrub: !0, trigger: t, start: i, end: e },
              }).from(o.chars, { autoAlpha: r, stagger: n, ease: "linear" });
            });
            t._gsapContext = a;
          },
        });
      });
    },
    Tc = () => {
      Sc();
    },
    Cc = () => {
      document.querySelectorAll('[data-tabs="wrapper"]').forEach((t) => {
        const i = t.querySelectorAll('[data-tabs="content"]'),
          e = t.querySelectorAll('[data-tabs="visual"]'),
          r = t.dataset.tabsAutoplay === "true",
          n = parseInt(t.dataset.tabsAutoplayDuration) || 5e3;
        let o = null,
          a = null,
          l = !1,
          u = null;
        function c(d) {
          u && u.kill();
          const f = i[d].querySelector('[data-tabs="item-progress"]');
          f &&
            (G.set(f, { scaleX: 0, transformOrigin: "left center" }),
            (u = G.to(f, {
              scaleX: 1,
              duration: n / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!l) {
                  const _ = (d + 1) % i.length;
                  h(_);
                }
              },
            })));
        }
        function h(d) {
          if (l || i[d] === o) return;
          (l = !0), u && u.kill();
          const f = o,
            _ = a,
            p =
              f == null
                ? void 0
                : f.querySelector('[data-tabs="item-progress"]'),
            g = i[d],
            x = e[d],
            y = g.querySelector('[data-tabs="item-progress"]'),
            b = G.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = g), (a = x), (l = !1), r && c(d);
              },
            });
          f &&
            (f.classList.remove("active"),
            f.setAttribute("aria-selected", "false"),
            _ == null || _.classList.remove("active"),
            b
              .set(p, { transformOrigin: "right center" })
              .to(p, { scaleX: 0, duration: 0.3 }, 0)
              .to(_, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            g.classList.add("active"),
            g.setAttribute("aria-selected", "true"),
            x.classList.add("active"),
            b
              .fromTo(
                x,
                { autoAlpha: 0, yPercent: 5, scale: 0.99 },
                { autoAlpha: 1, yPercent: 0, scale: 1 },
                0.3
              )
              .set(y, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        i.forEach((d, f) => {
          d.setAttribute("tabindex", f === 0 ? "0" : "-1"),
            d.setAttribute("role", "tab"),
            d.setAttribute("aria-selected", f === 0 ? "true" : "false"),
            d.setAttribute("id", `tab-${f}`),
            e[f] &&
              (e[f].setAttribute("role", "tabpanel"),
              e[f].setAttribute("aria-labelledby", `tab-${f}`)),
            d.addEventListener("keydown", (_) => {
              let p;
              switch (_.key) {
                case "ArrowRight":
                  _.preventDefault(), (p = (f + 1) % i.length);
                  break;
                case "ArrowLeft":
                  _.preventDefault(), (p = (f - 1 + i.length) % i.length);
                  break;
                case "Home":
                  _.preventDefault(), (p = 0);
                  break;
                case "End":
                  _.preventDefault(), (p = i.length - 1);
                  break;
                default:
                  return;
              }
              i.forEach((g, x) => {
                g.setAttribute("tabindex", x === p ? "0" : "-1");
              }),
                i[p].focus(),
                h(p);
            }),
            d.addEventListener("click", () => {
              d !== o &&
                (i.forEach((_, p) => {
                  _.setAttribute("tabindex", p === f ? "0" : "-1");
                }),
                h(f));
            });
        }),
          t.setAttribute("role", "tablist"),
          t.setAttribute("aria-label", "Hero content tabs"),
          h(0);
      });
    },
    Ec = () => {
      Cc();
    };
  G.registerPlugin(V);
  const Ac = () => {
      const s = document.querySelector(".home_hero_tab_component"),
        t = s.querySelector(".home_hero_tab_visual_wrap");
      G.to(t, {
        scrollTrigger: {
          trigger: s,
          start: "top 75%",
          end: "bottom 95%",
          scrub: 1.4,
        },
        rotateX: 0,
        y: 0,
      });
    },
    kc = () => {
      Ac();
    };
  G.registerPlugin(V, an);
  const Pc = () => {
      const s = document.querySelector('[lead-scroll="wrap"]'),
        i = s
          .querySelector('[lead-scroll="visual-component"]')
          .querySelectorAll('[lead-scroll="visual-item"]'),
        e = Array.from(i).map((v) => v.querySelector('[scroll-img="lg"]')),
        r = Array.from(i).map((v) => v.querySelectorAll('[scroll-img="sm"]')),
        n = s.querySelector('[lead-scroll="content-component"]'),
        o = n.querySelectorAll('[lead-scroll="content-header-item"]'),
        a = n.querySelectorAll('[lead-scroll="content-header-item"] p'),
        l = n.querySelectorAll('[lead-scroll="content-info-item"]'),
        u = Array.from(l).map((v) => Array.from(v.querySelectorAll("p"))),
        h = document
          .querySelector('[lead-scroll="progress-wrap"]')
          .querySelectorAll('[lead-scroll="progress-item"]'),
        d = Array.from(h).map((v) =>
          v.querySelector('[lead-scroll="progress-move"]')
        );
      let f = 0,
        _ = !1;
      G.set(e, { autoAlpha: 0 }),
        G.set(r, { autoAlpha: 0 }),
        G.set(e, { scale: 0.8 }),
        G.set(r, { scale: 0.8 });
      const p = (v) => {
          const w = e[v],
            C = r[v];
          w &&
            G.fromTo(
              w,
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
            C &&
              C.length > 0 &&
              G.fromTo(
                C,
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
        g = (v) => {
          const w = e[v],
            C = r[v];
          w &&
            G.to(w, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            C &&
              C.length > 0 &&
              G.to(C, {
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
        x = (v) => {
          const w = a[v],
            C = new an(w, { type: "lines", mask: "lines" });
          C &&
            G.from(C.lines, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        },
        y = (v) => {
          const w = u[v];
          w &&
            w.length > 0 &&
            G.from(w, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        b = (v) => {
          const w = Math.floor(v * 4),
            C = Math.min(Math.max(w, 0), 3);
          if (C !== f && !_) {
            _ = !0;
            const S = f,
              T = C,
              A = () => {
                h.forEach((k) => {
                  k.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                  i.forEach((k) => {
                    k.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  o.forEach((k) => {
                    k.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  l.forEach((k) => {
                    k.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  });
              };
            A(),
              S >= 0 &&
                S < i.length &&
                (h[S] && h[S].classList.add("is--outgoing"),
                i[S] && i[S].classList.add("is--outgoing"),
                o[S] && o[S].classList.add("is--outgoing"),
                l[S] && l[S].classList.add("is--outgoing"),
                g(S)),
              h[T] && h[T].classList.add("is--incoming"),
              i[T] && i[T].classList.add("is--incoming"),
              o[T] && o[T].classList.add("is--incoming"),
              l[T] && l[T].classList.add("is--incoming"),
              p(T),
              x(T),
              y(T),
              G.delayedCall(0.2, () => {
                A(),
                  h[T] && (h[T].classList.add("is--active"), h[T]),
                  i[T] && (i[T].classList.add("is--active"), i[T]),
                  o[T] && (o[T].classList.add("is--active"), o[T]),
                  l[T] && l[T].classList.add("is--active"),
                  (f = T),
                  (_ = !1);
              });
          }
        };
      h[0] && (h[0].classList.add("is--active"), h[0]),
        i[0] && (i[0].classList.add("is--active"), i[0]),
        o[0] && (o[0].classList.add("is--active"), o[0]),
        l[0] && l[0].classList.add("is--active"),
        p(0),
        x(0),
        y(0),
        G.to(s, {
          scrollTrigger: {
            trigger: s,
            start: "top top",
            end: "+=400%",
            pin: !0,
            scrub: !0,
            markers: !1,
            onUpdate: (v) => {
              b(v.progress);
            },
          },
        }),
        d.forEach((v, w) => {
          G.fromTo(
            v,
            { scaleX: 0 },
            {
              scaleX: 1,
              scrollTrigger: {
                trigger: s,
                start: "top top",
                end: "+=400%",
                scrub: !0,
                onUpdate: (C) => {
                  const T = C.progress * 4 - w,
                    A = Math.min(Math.max(T, 0), 1);
                  G.set(v, { scaleX: A });
                },
              },
            }
          );
        });
    },
    Mc = () => {
      Pc();
    },
    Ol = () => {
      Tc(), Ec(), kc(), Mc();
    },
    Dl = (s) => document.querySelector(s),
    Oc = (s) => document.querySelectorAll(s),
    Dc = (s, t) => s.classList.add(t),
    Rc = {
      home: Ol,
      about: () => {
        Oc(".team-member").forEach((t) => {
          t.addEventListener("mouseenter", () => {
            var i;
            (i = t.querySelector(".member-bio")) == null ||
              i.classList.add("is-visible");
          }),
            t.addEventListener("mouseleave", () => {
              var i;
              (i = t.querySelector(".member-bio")) == null ||
                i.classList.remove("is-visible");
            });
        });
      },
      contact: () => {
        const s = Dl(".contact-form");
        s &&
          s.addEventListener("submit", (t) => {
            t.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": Ol,
    },
    Lc = () => {
      const s = document.body.dataset.route,
        t = Rc[s];
      t ? t() : console.log(`No specific script for route: ${s}`);
    },
    zc = () => {
      const s = document.querySelector(".page_header");
      document.querySelector(".page_navigation"),
        document.querySelector(".page_nav_contain"),
        document.querySelector("[page-nav='size']"),
        document.querySelector("[page-nav='main']"),
        document.querySelector("[page-nav='brand']");
      const t = document.querySelectorAll("[nav-menu-dropdown]"),
        i = document.querySelectorAll("[nav-menu-item]"),
        e = document.querySelector("[nav-menu='shadow-main']");
      document.querySelector("[nav-menu='shadow-wrap']");
      const r = document.querySelector("[nav-menu='shadow-menu']"),
        n = document.querySelector("[nav-menu='shadow-card']");
      s.offsetWidth, e.offsetWidth;
      const o = new Map();
      i.forEach((x) => {
        const y = x.getBoundingClientRect();
        o.set(x, { width: y.width, height: y.height });
      }),
        (() => {
          const x = t[0];
          if (x) {
            const y = x.getAttribute("nav-menu-dropdown"),
              b = document.querySelector(`[nav-menu-item='${y}']`);
            if (b) {
              const v = x.getBoundingClientRect(),
                w = r.getBoundingClientRect(),
                C = o.get(b);
              if (C) {
                const S = w.left + w.width / 2,
                  A = v.left + v.width / 2 - S,
                  k = C.height + 20,
                  z = C.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${A}px`),
                  n.style.setProperty("--siteMenuHeight", `${k}px`),
                  n.style.setProperty("--siteMenuWidth", `${z}px`);
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
      const h = (x) => {
          const y = Array.from(i),
            b = y.indexOf(x);
          y.forEach((v, w) => {
            w < b
              ? v.setAttribute("pos", "left")
              : w === b
              ? v.setAttribute("pos", "active")
              : v.setAttribute("pos", "right"),
              v === x
                ? v.setAttribute("status", "active")
                : v.setAttribute("status", "inactive");
          });
        },
        d = (x, y) => {
          u && (clearTimeout(u), (u = null)), c !== x && ((c = x), p(x, y));
        },
        f = () => {
          u = setTimeout(() => {
            s.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              (c = null),
              (u = null);
          }, 100);
        },
        _ = (x, y) => {
          const b = y.bottom;
          return x >= b && x <= b + l;
        },
        p = (x, y) => {
          const b = r.getBoundingClientRect(),
            v = x.getBoundingClientRect(),
            w = o.get(y);
          if (!w) {
            console.warn("No original dimensions found for menu item:", y);
            return;
          }
          const C = b.left + b.width / 2,
            S = v.left + v.width / 2,
            T = w.height + 20,
            A = w.width + 20,
            k = S - C;
          n.style.setProperty("--siteMenuTranslateX", `${k}px`),
            n.style.setProperty("--siteMenuHeight", `${T}px`),
            n.style.setProperty("--siteMenuWidth", `${A}px`),
            n.setAttribute("vis", "visible"),
            s.setAttribute("dropdown-vis", "visible"),
            h(y);
        },
        g = (x) => {
          if (!c) return;
          const y = c.getBoundingClientRect(),
            b = n.getBoundingClientRect(),
            v = x.clientX,
            w = x.clientY,
            C = v >= y.left && v <= y.right && w >= y.top && w <= y.bottom,
            S = v >= b.left && v <= b.right && w >= b.top && w <= b.bottom,
            T =
              _(w, y) &&
              v >= Math.min(y.left, b.left) &&
              v <= Math.max(y.right, b.right);
          C || S || T ? u && (clearTimeout(u), (u = null)) : u || f();
        };
      document.addEventListener("mousemove", g),
        t.forEach((x) => {
          const y = x.getAttribute("nav-menu-dropdown"),
            b = document.querySelector(`[nav-menu-item='${y}']`);
          b
            ? x.addEventListener("mouseenter", () => {
                d(x, b);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${y}`
              );
        }),
        n.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        n.addEventListener("mouseleave", () => {
          f();
        });
    },
    Nc = () => {
      zc();
    },
    Ic = () => {
      const s = document.querySelector(".page_nav_size"),
        t = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (s.classList.add("is--active"), t.classList.add("is--active"))
          : (s.classList.remove("is--active"),
            t.classList.remove("is--active"));
      });
    },
    Fc = () => {
      Ic();
    },
    Xc = () => {
      const s = document.querySelectorAll('[nav-accordion="item"]'),
        t = Array.from(s).map((i) => ({
          item: i,
          trigger: i.querySelector('[nav-accordion="trigger"]'),
          content: i.querySelector('[nav-accordion="content"]'),
          icon: i.querySelector('[nav-accordion="icon"]'),
          links: i.querySelectorAll('[nav-accordion="link"]'),
          line: i.querySelector('[nav-accordion="line"]'),
        }));
      t.forEach(
        ({ item: i, trigger: e, content: r, icon: n, links: o, line: a }) => {
          e.addEventListener("click", () => {
            const l = i.classList.contains("is--open");
            t.forEach(
              ({
                item: u,
                content: c,
                icon: h,
                links: d,
                trigger: f,
                line: _,
              }) => {
                u.classList.remove("is--open"),
                  h.classList.remove("is--open"),
                  f.classList.remove("is--open"),
                  G.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(h, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(_, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  d.forEach((p) => p.classList.remove("is--open")),
                  G.to(d, {
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
                (i.classList.add("is--open"),
                n.classList.add("is--open"),
                e.classList.add("is--open"),
                G.to(r, { height: "auto", duration: 0.5, ease: "power3.out" }),
                G.to(n, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
                G.to(a, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
                o.forEach((u) => u.classList.add("is--open")),
                G.fromTo(
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
    Wc = () => Xc(),
    Bc = () => {
      const s = document.querySelectorAll('[nav-menu="trigger"]'),
        t = document.querySelectorAll('[nav-menu="open-icon"]'),
        i = document.querySelectorAll('[nav-menu="close-icon"]'),
        e = document.querySelectorAll('[nav-accordion="item"]'),
        r = document.querySelector('[nav-menu="menu"]'),
        n = document.querySelector('[nav-menu="component"]'),
        o = document.querySelector('[nav-menu="logo"]');
      o.querySelector('[nav-menu="logo-icon"]');
      const a = o.querySelector('[nav-menu="logo-text"]');
      let l = !1;
      const u = "is--active",
        c = "is--inactive",
        h = () => {
          s.forEach((y) => {
            y.setAttribute("aria-controls", "main-nav-menu"),
              y.setAttribute("aria-expanded", "false");
          }),
            t.forEach((y) => {
              y.setAttribute("aria-label", "Open navigation menu");
            }),
            i.forEach((y) => {
              y.setAttribute("aria-label", "Close navigation menu");
            }),
            r &&
              (r.setAttribute("id", "main-nav-menu"),
              r.setAttribute("aria-label", "Main navigation menu")),
            n && n.setAttribute("role", "navigation");
        },
        d = (y, b) => {
          [...s, ...t, ...i, ...e, n].filter(Boolean).forEach((w) => {
            w.classList.add(y), w.classList.remove(b);
          });
        },
        f = (y) => {
          s.forEach((b) => {
            b.setAttribute("aria-expanded", y ? "true" : "false");
          });
        },
        _ = () => {
          d(u, c),
            f(!0),
            G.timeline()
              .to(r, {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut",
              })
              .to(
                t,
                { autoAlpha: 0, scale: 0, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(
                i,
                { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(
                a,
                { color: "#121227", duration: 1.2, ease: "expo.inOut" },
                "<"
              )
              .to(
                n,
                {
                  clipPath: "inset(0% 0% 0% 0% round 0 8px 0 0)",
                  duration: 1.3,
                  ease: "expo.inOut",
                },
                "<"
              )
              .fromTo(
                e,
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
          d(c, u),
            f(!1),
            G.timeline()
              .to(t, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.5,
                ease: "expo.inOut",
              })
              .to(
                i,
                { autoAlpha: 0, scale: 0, duration: 0.5, ease: "expo.inOut" },
                "<"
              )
              .to(a, { color: "#fff", duration: 1.2, ease: "expo.inOut" }, "<")
              .to(
                n,
                {
                  clipPath: "inset(100% 100% 0% 0% round 0 500px 0 0)",
                  duration: 1,
                  ease: "expo.inOut",
                },
                "<"
              )
              .to(
                e,
                {
                  autoAlpha: 0,
                  y: 100,
                  duration: 1.2,
                  ease: "expo.inOut",
                  stagger: 0.1,
                },
                "<"
              ),
            G.to(
              r,
              {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut",
              },
              "<0.05"
            );
        },
        g = () => {
          l ? (p(), (l = !1)) : (_(), (l = !0));
        };
      (() => {
        h(),
          s.forEach((y) => {
            y.addEventListener("click", g);
          });
      })();
    },
    Yc = () => {
      Bc();
    },
    qc = () => {
      Nc(), Fc(), Wc(), Yc();
    },
    Hc = () => {
      const s = Dl(".example-component");
      s &&
        (Dc(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Vc = () => {
      Hc();
    };
  var $c = "1.3.4";
  function Rl(s, t, i) {
    return Math.max(s, Math.min(t, i));
  }
  function Uc(s, t, i) {
    return (1 - i) * s + i * t;
  }
  function Gc(s, t, i, e) {
    return Uc(s, t, 1 - Math.exp(-i * e));
  }
  function Zc(s, t) {
    return ((s % t) + t) % t;
  }
  var Kc = class {
    constructor() {
      L(this, "isRunning", !1);
      L(this, "value", 0);
      L(this, "from", 0);
      L(this, "to", 0);
      L(this, "currentTime", 0);
      L(this, "lerp");
      L(this, "duration");
      L(this, "easing");
      L(this, "onUpdate");
    }
    advance(s) {
      var i;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const e = Rl(0, this.currentTime / this.duration, 1);
        t = e >= 1;
        const r = t ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Gc(this.value, this.to, this.lerp * 60, s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (t = !0)))
          : ((this.value = this.to), (t = !0));
      t && this.stop(),
        (i = this.onUpdate) == null || i.call(this, this.value, t);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(s, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: o }) {
      (this.from = this.value = s),
        (this.to = t),
        (this.lerp = i),
        (this.duration = e),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        n == null || n(),
        (this.onUpdate = o);
    }
  };
  function Qc(s, t) {
    let i;
    return function (...e) {
      let r = this;
      clearTimeout(i),
        (i = setTimeout(() => {
          (i = void 0), s.apply(r, e);
        }, t));
    };
  }
  var jc = class {
      constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
        L(this, "width", 0);
        L(this, "height", 0);
        L(this, "scrollHeight", 0);
        L(this, "scrollWidth", 0);
        L(this, "debouncedResize");
        L(this, "wrapperResizeObserver");
        L(this, "contentResizeObserver");
        L(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        L(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        L(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = t),
          i &&
            ((this.debouncedResize = Qc(this.resize, e)),
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
        var s, t;
        (s = this.wrapperResizeObserver) == null || s.disconnect(),
          (t = this.contentResizeObserver) == null || t.disconnect(),
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
    Ll = class {
      constructor() {
        L(this, "events", {});
      }
      emit(s, ...t) {
        var e;
        let i = this.events[s] || [];
        for (let r = 0, n = i.length; r < n; r++)
          (e = i[r]) == null || e.call(i, ...t);
      }
      on(s, t) {
        var i;
        return (
          ((i = this.events[s]) != null && i.push(t)) || (this.events[s] = [t]),
          () => {
            var e;
            this.events[s] =
              (e = this.events[s]) == null ? void 0 : e.filter((r) => t !== r);
          }
        );
      }
      off(s, t) {
        var i;
        this.events[s] =
          (i = this.events[s]) == null ? void 0 : i.filter((e) => t !== e);
      }
      destroy() {
        this.events = {};
      }
    },
    zl = 100 / 6,
    Ti = { passive: !1 },
    Jc = class {
      constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        L(this, "touchStart", { x: 0, y: 0 });
        L(this, "lastDelta", { x: 0, y: 0 });
        L(this, "window", { width: 0, height: 0 });
        L(this, "emitter", new Ll());
        L(this, "onTouchStart", (s) => {
          const { clientX: t, clientY: i } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        L(this, "onTouchMove", (s) => {
          const { clientX: t, clientY: i } = s.targetTouches
              ? s.targetTouches[0]
              : s,
            e = -(t - this.touchStart.x) * this.options.touchMultiplier,
            r = -(i - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: e, y: r }),
            this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: s });
        });
        L(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        L(this, "onWheel", (s) => {
          let { deltaX: t, deltaY: i, deltaMode: e } = s;
          const r = e === 1 ? zl : e === 2 ? this.window.width : 1,
            n = e === 1 ? zl : e === 2 ? this.window.height : 1;
          (t *= r),
            (i *= n),
            (t *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: s });
        });
        L(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Ti),
          this.element.addEventListener("touchstart", this.onTouchStart, Ti),
          this.element.addEventListener("touchmove", this.onTouchMove, Ti),
          this.element.addEventListener("touchend", this.onTouchEnd, Ti);
      }
      on(s, t) {
        return this.emitter.on(s, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Ti),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ti),
          this.element.removeEventListener("touchmove", this.onTouchMove, Ti),
          this.element.removeEventListener("touchend", this.onTouchEnd, Ti);
      }
    },
    Nl = (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
    tf = class {
      constructor({
        wrapper: s = window,
        content: t = document.documentElement,
        eventsTarget: i = s,
        smoothWheel: e = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l,
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: d = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: _ = 1,
        autoResize: p = !0,
        prevent: g,
        virtualScroll: x,
        overscroll: y = !0,
        autoRaf: b = !1,
        anchors: v = !1,
        autoToggle: w = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: S = !1,
      } = {}) {
        L(this, "_isScrolling", !1);
        L(this, "_isStopped", !1);
        L(this, "_isLocked", !1);
        L(this, "_preventNextNativeScrollEvent", !1);
        L(this, "_resetVelocityTimeout", null);
        L(this, "__rafID", null);
        L(this, "isTouching");
        L(this, "time", 0);
        L(this, "userData", {});
        L(this, "lastVelocity", 0);
        L(this, "velocity", 0);
        L(this, "direction", 0);
        L(this, "options");
        L(this, "targetScroll");
        L(this, "animatedScroll");
        L(this, "animate", new Kc());
        L(this, "emitter", new Ll());
        L(this, "dimensions");
        L(this, "virtualScroll");
        L(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        L(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        L(this, "onTransitionEnd", (s) => {
          if (s.propertyName.includes("overflow")) {
            const t = this.isHorizontal ? "overflow-x" : "overflow-y",
              i = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(i) ? this.stop() : this.start();
          }
        });
        L(this, "onClick", (s) => {
          const i = s.composedPath().find((e) => {
            var r, n, o;
            return (
              e instanceof HTMLAnchorElement &&
              (((r = e.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#")) ||
                ((n = e.getAttribute("href")) == null
                  ? void 0
                  : n.startsWith("/#")) ||
                ((o = e.getAttribute("href")) == null
                  ? void 0
                  : o.startsWith("./#")))
            );
          });
          if (i) {
            const e = i.getAttribute("href");
            if (e) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let n = `#${e.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(e) &&
                (n = 0),
                this.scrollTo(n, r);
            }
          }
        });
        L(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        L(this, "onVirtualScroll", (s) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(s) === !1
          )
            return;
          const { deltaX: t, deltaY: i, event: e } = s;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: i,
              event: e,
            }),
            e.ctrlKey || e.lenisStopPropagation)
          )
            return;
          const r = e.type.includes("touch"),
            n = e.type.includes("wheel");
          this.isTouching = e.type === "touchstart" || e.type === "touchmove";
          const o = t === 0 && i === 0;
          if (
            this.options.syncTouch &&
            r &&
            e.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && i === 0) ||
            (this.options.gestureOrientation === "horizontal" && t === 0);
          if (o || l) return;
          let u = e.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((g) => {
              var x, y, b;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((x = g.hasAttribute) == null
                    ? void 0
                    : x.call(g, "data-lenis-prevent")) ||
                  (r &&
                    ((y = g.hasAttribute) == null
                      ? void 0
                      : y.call(g, "data-lenis-prevent-touch"))) ||
                  (n &&
                    ((b = g.hasAttribute) == null
                      ? void 0
                      : b.call(g, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(g, { deltaX: t, deltaY: i })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            e.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && n))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (e.lenisStopPropagation = !0);
            return;
          }
          let d = i;
          this.options.gestureOrientation === "both"
            ? (d = Math.abs(i) > Math.abs(t) ? i : t)
            : this.options.gestureOrientation === "horizontal" && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && i > 0) ||
                  (this.animatedScroll === this.limit && i < 0)))) &&
              (e.lenisStopPropagation = !0),
            e.preventDefault();
          const f = r && this.options.syncTouch,
            p = r && e.type === "touchend" && Math.abs(d) > 5;
          p && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              Xl(
                { programmatic: !1 },
                f
                  ? { lerp: p ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        L(this, "onNativeScroll", () => {
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
            const s = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - s),
              (this.direction = Math.sign(this.animatedScroll - s)),
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
        L(this, "raf", (s) => {
          const t = s - (this.time || s);
          (this.time = s),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = $c),
          (!s || s === document.documentElement) && (s = window),
          typeof a == "number" && typeof l != "function"
            ? (l = Nl)
            : typeof l == "function" && typeof a != "number" && (a = 1),
          (this.options = {
            wrapper: s,
            content: t,
            eventsTarget: i,
            smoothWheel: e,
            syncTouch: r,
            syncTouchLerp: n,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: d,
            orientation: h,
            touchMultiplier: f,
            wheelMultiplier: _,
            autoResize: p,
            prevent: g,
            virtualScroll: x,
            overscroll: y,
            autoRaf: b,
            anchors: v,
            autoToggle: w,
            allowNestedScroll: C,
            __experimental__naiveDimensions: S,
          }),
          (this.dimensions = new jc(s, t, { autoResize: p })),
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
          (this.virtualScroll = new Jc(i, {
            touchMultiplier: f,
            wheelMultiplier: _,
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
      on(s, t) {
        return this.emitter.on(s, t);
      }
      off(s, t) {
        return this.emitter.off(s, t);
      }
      setScroll(s) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
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
        s,
        {
          offset: t = 0,
          immediate: i = !1,
          lock: e = !1,
          duration: r = this.options.duration,
          easing: n = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof s == "string" && ["top", "left", "start"].includes(s))
            s = 0;
          else if (
            typeof s == "string" &&
            ["bottom", "right", "end"].includes(s)
          )
            s = this.limit;
          else {
            let d;
            if (
              (typeof s == "string"
                ? (d = document.querySelector(s))
                : s instanceof HTMLElement &&
                  s != null &&
                  s.nodeType &&
                  (d = s),
              d)
            ) {
              if (this.options.wrapper !== window) {
                const _ = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? _.left : _.top;
              }
              const f = d.getBoundingClientRect();
              s = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof s == "number") {
            if (((s += t), (s = Math.round(s)), this.options.infinite)) {
              if (c) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const d = s - this.animatedScroll;
                d > this.limit / 2
                  ? (s = s - this.limit)
                  : d < -this.limit / 2 && (s = s + this.limit);
              }
            } else s = Rl(0, s, this.limit);
            if (s === this.targetScroll) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = h != null ? h : {}), i)) {
              (this.animatedScroll = this.targetScroll = s),
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
            c || (this.targetScroll = s),
              typeof r == "number" && typeof n != "function"
                ? (n = Nl)
                : typeof n == "function" && typeof r != "number" && (r = 1),
              this.animate.fromTo(this.animatedScroll, s, {
                duration: r,
                easing: n,
                lerp: o,
                onStart: () => {
                  e && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (d, f) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = d),
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
      checkNestedScroll(s, { deltaX: t, deltaY: i }) {
        var w, C;
        const e = Date.now(),
          r = (w = s._lenis) != null ? w : (s._lenis = {});
        let n, o, a, l, u, c, h, d;
        const f = this.options.gestureOrientation;
        if (e - ((C = r.time) != null ? C : 0) > 2e3) {
          r.time = Date.now();
          const S = window.getComputedStyle(s);
          r.computedStyle = S;
          const T = S.overflowX,
            A = S.overflowY;
          if (
            ((n = ["auto", "overlay", "scroll"].includes(T)),
            (o = ["auto", "overlay", "scroll"].includes(A)),
            (r.hasOverflowX = n),
            (r.hasOverflowY = o),
            (!n && !o) ||
              (f === "vertical" && !o) ||
              (f === "horizontal" && !n))
          )
            return !1;
          (u = s.scrollWidth),
            (c = s.scrollHeight),
            (h = s.clientWidth),
            (d = s.clientHeight),
            (a = u > h),
            (l = c > d),
            (r.isScrollableX = a),
            (r.isScrollableY = l),
            (r.scrollWidth = u),
            (r.scrollHeight = c),
            (r.clientWidth = h),
            (r.clientHeight = d);
        } else
          (a = r.isScrollableX),
            (l = r.isScrollableY),
            (n = r.hasOverflowX),
            (o = r.hasOverflowY),
            (u = r.scrollWidth),
            (c = r.scrollHeight),
            (h = r.clientWidth),
            (d = r.clientHeight);
        if (
          (!n && !o) ||
          (!a && !l) ||
          (f === "vertical" && (!o || !l)) ||
          (f === "horizontal" && (!n || !a))
        )
          return !1;
        let _;
        if (f === "horizontal") _ = "x";
        else if (f === "vertical") _ = "y";
        else {
          const S = t !== 0,
            T = i !== 0;
          S && n && a && (_ = "x"), T && o && l && (_ = "y");
        }
        if (!_) return !1;
        let p, g, x, y, b;
        if (_ === "x")
          (p = s.scrollLeft), (g = u - h), (x = t), (y = n), (b = a);
        else if (_ === "y")
          (p = s.scrollTop), (g = c - d), (x = i), (y = o), (b = l);
        else return !1;
        return (x > 0 ? p < g : p > 0) && y && b;
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
        var t, i;
        const s = this.options.wrapper;
        return this.isHorizontal
          ? (t = s.scrollX) != null
            ? t
            : s.scrollLeft
          : (i = s.scrollY) != null
          ? i
          : s.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Zc(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(s) {
        this._isScrolling !== s &&
          ((this._isScrolling = s), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(s) {
        this._isStopped !== s &&
          ((this._isStopped = s), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(s) {
        this._isLocked !== s && ((this._isLocked = s), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let s = "lenis";
        return (
          this.options.autoToggle && (s += " lenis-autoToggle"),
          this.isStopped && (s += " lenis-stopped"),
          this.isLocked && (s += " lenis-locked"),
          this.isScrolling && (s += " lenis-scrolling"),
          this.isScrolling === "smooth" && (s += " lenis-smooth"),
          s
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
  G.registerPlugin(V);
  let mo;
  const ef = () => {
      (mo = new tf({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)),
        autoRaf: !0,
      })),
        mo.on("scroll", V.update),
        G.ticker.add((s) => {
          mo.raf(s * 1e3);
        }),
        G.ticker.lagSmoothing(0);
    },
    rf = () => {
      ef();
    };
  document.addEventListener("DOMContentLoaded", () => {
    qc(), Vc(), Lc(), rf();
  });
});
