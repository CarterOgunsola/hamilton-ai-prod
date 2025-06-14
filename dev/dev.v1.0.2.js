var eh = Object.defineProperty;
var Wl = Object.getOwnPropertySymbols;
var ih = Object.prototype.hasOwnProperty,
  rh = Object.prototype.propertyIsEnumerable;
var wo = (gt, Wt, at) =>
    Wt in gt
      ? eh(gt, Wt, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: at,
        })
      : (gt[Wt] = at),
  Hl = (gt, Wt) => {
    for (var at in Wt || (Wt = {})) ih.call(Wt, at) && wo(gt, at, Wt[at]);
    if (Wl) for (var at of Wl(Wt)) rh.call(Wt, at) && wo(gt, at, Wt[at]);
    return gt;
  };
var L = (gt, Wt, at) => wo(gt, typeof Wt != "symbol" ? Wt + "" : Wt, at);
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
  function Wt(s, t) {
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
    Ht,
    ht,
    Me = 1e8,
    rt = 1 / Me,
    es = Math.PI * 2,
    Xl = es / 4,
    Yl = 0,
    bo = Math.sqrt,
    ql = Math.cos,
    Vl = Math.sin,
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
    qe = function (t) {
      return typeof t == "object";
    },
    ce = function (t) {
      return t !== !1;
    },
    rs = function () {
      return typeof window != "undefined";
    },
    fn = function (t) {
      return mt(t) || Lt(t);
    },
    xo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Vt = Array.isArray,
    ns = /(?:-?\.?\d|\.)+/gi,
    So = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    To = /[+-]=-?[.\d]+/,
    Co = /[^,'"\[\]\s]+/gi,
    $l = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    dt,
    Ve,
    os,
    as,
    ve = {},
    dn = {},
    Eo,
    ko = function (t) {
      return (dn = nr(t, ve)) && de;
    },
    ls = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    kr = function (t, e) {
      return !e && console.warn(t);
    },
    Po = function (t, e) {
      return (t && (ve[t] = e) && dn && (dn[t] = e)) || ve;
    },
    Pr = function () {
      return 0;
    },
    Ul = { suppressEvents: !0, isStart: !0, kill: !1 },
    pn = { suppressEvents: !0, kill: !1 },
    Gl = { suppressEvents: !0 },
    us = {},
    hi = [],
    cs = {},
    Ao,
    ye = {},
    hs = {},
    Mo = 30,
    _n = [],
    fs = "",
    ds = function (t) {
      var e = t[0],
        i,
        r;
      if ((qe(e) || mt(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
        for (r = _n.length; r-- && !_n[r].targetTest(e); );
        i = _n[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new sa(t[r], i)))) ||
          t.splice(r, 1);
      return t;
    },
    Oi = function (t) {
      return t._gsap || ds(De(t))[0]._gsap;
    },
    Oo = function (t, e, i) {
      return (i = t[e]) && mt(i)
        ? t[e]()
        : (is(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    he = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    wt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Ct = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    rr = function (t, e) {
      var i = e.charAt(0),
        r = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
      );
    },
    Kl = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    },
    gn = function () {
      var t = hi.length,
        e = hi.slice(0),
        i,
        r;
      for (cs = {}, hi.length = 0, i = 0; i < t; i++)
        (r = e[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ps = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Do = function (t, e, i, r) {
      hi.length && !Ht && gn(),
        t.render(e, i, !!(Ht && e < 0 && ps(t))),
        hi.length && !Ht && gn();
    },
    Ro = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(Co).length < 2
        ? e
        : Lt(t)
        ? t.trim()
        : t;
    },
    Lo = function (t) {
      return t;
    },
    we = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    Zl = function (t) {
      return function (e, i) {
        for (var r in i)
          r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
      };
    },
    nr = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    zo = function s(t, e) {
      for (var i in e)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (t[i] = qe(e[i]) ? s(t[i] || (t[i] = {}), e[i]) : e[i]);
      return t;
    },
    mn = function (t, e) {
      var i = {},
        r;
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    Ar = function (t) {
      var e = t.parent || dt,
        i = t.keyframes ? Zl(Vt(t.keyframes)) : we;
      if (ce(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    Ql = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
      return i < 0;
    },
    No = function (t, e, i, r, n) {
      var o = t[r],
        a;
      if (n) for (a = e[n]; o && o[n] > a; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    vn = function (t, e, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var n = e._prev,
        o = e._next;
      n ? (n._next = o) : t[i] === e && (t[i] = o),
        o ? (o._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    },
    fi = function (t, e) {
      t.parent &&
        (!e || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    Di = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    jl = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    _s = function (t, e, i, r) {
      return (
        t._startAt &&
        (Ht
          ? t._startAt.revert(pn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, r))
      );
    },
    Jl = function s(t) {
      return !t || (t._ts && s(t.parent));
    },
    Io = function (t) {
      return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    sr = function (t, e) {
      var i = Math.floor((t = Ct(t / e)));
      return t && i === t ? i - 1 : i;
    },
    yn = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    wn = function (t) {
      return (t._end = Ct(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0)
      ));
    },
    bn = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = Ct(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          wn(t),
          i._dirty || Di(i, t)),
        t
      );
    },
    Fo = function (t, e) {
      var i;
      if (
        ((e._time ||
          (!e._dur && e._initted) ||
          (e._start < t._time && (e._dur || !e.add))) &&
          ((i = yn(t.rawTime(), e)),
          (!e._dur || Or(0, e.totalDuration(), i) - e._tTime > rt) &&
            e.render(i, !0)),
        Di(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -rt;
      }
    },
    $e = function (t, e, i, r) {
      return (
        e.parent && fi(e),
        (e._start = Ct(
          (ti(i) ? i : i || t !== dt ? Oe(t, i, e) : t._time) + e._delay
        )),
        (e._end = Ct(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        No(t, e, "_first", "_last", t._sort ? "_start" : 0),
        gs(e) || (t._recent = e),
        r || Fo(t, e),
        t._ts < 0 && bn(t, t._tTime),
        t
      );
    },
    Wo = function (t, e) {
      return (
        (ve.ScrollTrigger || ls("scrollTrigger", e)) &&
        ve.ScrollTrigger.create(e, t)
      );
    },
    Ho = function (t, e, i, r, n) {
      if ((Cs(t, e, n), !t._initted)) return 1;
      if (
        !i &&
        t._pt &&
        !Ht &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Ao !== xe.frame
      )
        return hi.push(t), (t._lazy = [n, r]), 1;
    },
    tu = function s(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
    },
    gs = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    eu = function (t, e, i, r) {
      var n = t.ratio,
        o =
          e < 0 ||
          (!e &&
            ((!t._start && tu(t) && !(!t._initted && gs(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !gs(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        c,
        f;
      if (
        (a &&
          t._repeat &&
          ((l = Or(0, t._tDur, e)),
          (c = sr(l, a)),
          t._yoyo && c & 1 && (o = 1 - o),
          c !== sr(t._tTime, a) &&
            ((n = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== n || Ht || r || t._zTime === rt || (!e && t._zTime))
      ) {
        if (!t._initted && Ho(t, e, r, i, l)) return;
        for (
          f = t._zTime,
            t._zTime = e || (i ? rt : 0),
            i || (i = e && !f),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        e < 0 && _s(t, e, i, !0),
          t._onUpdate && !i && be(t, "onUpdate"),
          l && t._repeat && !i && t.parent && be(t, "onRepeat"),
          (e >= t._tDur || e < 0) &&
            t.ratio === o &&
            (o && fi(t, 1),
            !i &&
              !Ht &&
              (be(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    iu = function (t, e, i) {
      var r;
      if (i > e)
        for (r = t._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > e) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < e) return r;
          r = r._prev;
        }
    },
    or = function (t, e, i, r) {
      var n = t._repeat,
        o = Ct(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = n ? (n < 0 ? 1e10 : Ct(o * (n + 1) + t._rDelay * n)) : o),
        a > 0 && !r && bn(t, (t._tTime = t._tDur * a)),
        t.parent && wn(t),
        i || Di(t.parent, t),
        t
      );
    },
    Bo = function (t) {
      return t instanceof ee ? Di(t) : or(t, t._dur);
    },
    ru = { _start: 0, endTime: Pr, totalDuration: Pr },
    Oe = function s(t, e, i) {
      var r = t.labels,
        n = t._recent || ru,
        o = t.duration() >= Me ? n.endTime(!1) : t._dur,
        a,
        l,
        u;
      return Lt(e) && (isNaN(e) || e in r)
        ? ((l = e.charAt(0)),
          (u = e.substr(-1) === "%"),
          (a = e.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (e = e.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(e.substr(1)) || 0) *
                  (u ? (a < 0 ? n : i).totalDuration() / 100 : 1))
            : a < 0
            ? (e in r || (r[e] = o), r[e])
            : ((l = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
              u && i && (l = (l / 100) * (Vt(i) ? i[0] : i).totalDuration()),
              a > 1 ? s(t, e.substr(0, a - 1), i) + l : o + l))
        : e == null
        ? o
        : +e;
    },
    Mr = function (t, e, i) {
      var r = ti(e[1]),
        n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[n],
        a,
        l;
      if ((r && (o.duration = e[1]), (o.parent = i), t)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = ce(l.vars.inherit) && l.parent);
        (o.immediateRender = ce(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[n - 1]);
      }
      return new Et(e[0], o, e[n + 1]);
    },
    di = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    Or = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    $t = function (t, e) {
      return !Lt(t) || !(e = $l.exec(t)) ? "" : e[1];
    },
    nu = function (t, e, i) {
      return di(i, function (r) {
        return Or(t, e, r);
      });
    },
    ms = [].slice,
    Xo = function (t, e) {
      return (
        t &&
        qe(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && qe(t[0]))) &&
        !t.nodeType &&
        t !== Ve
      );
    },
    su = function (t, e, i) {
      return (
        i === void 0 && (i = []),
        t.forEach(function (r) {
          var n;
          return (Lt(r) && !e) || Xo(r, 1)
            ? (n = i).push.apply(n, De(r))
            : i.push(r);
        }) || i
      );
    },
    De = function (t, e, i) {
      return ht && !e && ht.selector
        ? ht.selector(t)
        : Lt(t) && !i && (os || !lr())
        ? ms.call((e || as).querySelectorAll(t), 0)
        : Vt(t)
        ? su(t, i)
        : Xo(t)
        ? ms.call(t, 0)
        : t
        ? [t]
        : [];
    },
    vs = function (t) {
      return (
        (t = De(t)[0] || kr("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return De(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? kr("Invalid scope") || as.createElement("div")
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
      var e = qe(t) ? t : { each: t },
        i = Ri(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = e.axis,
        c = r,
        f = r;
      return (
        Lt(r)
          ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((c = r[0]), (f = r[1])),
        function (d, h, _) {
          var p = (_ || e).length,
            m = o[p],
            w,
            b,
            T,
            v,
            y,
            C,
            x,
            S,
            k;
          if (!m) {
            if (((k = e.grid === "auto" ? 0 : (e.grid || [1, Me])[1]), !k)) {
              for (
                x = -Me;
                x < (x = _[k++].getBoundingClientRect().left) && k < p;

              );
              k < p && k--;
            }
            for (
              m = o[p] = [],
                w = l ? Math.min(k, p) * c - 0.5 : r % k,
                b = k === Me ? 0 : l ? (p * f) / k - 0.5 : (r / k) | 0,
                x = 0,
                S = Me,
                C = 0;
              C < p;
              C++
            )
              (T = (C % k) - w),
                (v = b - ((C / k) | 0)),
                (m[C] = y =
                  u ? Math.abs(u === "y" ? v : T) : bo(T * T + v * v)),
                y > x && (x = y),
                y < S && (S = y);
            r === "random" && Yo(m),
              (m.max = x - S),
              (m.min = S),
              (m.v = p =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (k > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / k
                        : k
                      : Math.max(k, p / k)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (m.b = p < 0 ? n - p : n),
              (m.u = $t(e.amount || e.each) || 0),
              (i = i && p < 0 ? ia(i) : i);
          }
          return (
            (p = (m[d] - m.min) / m.max || 0),
            Ct(m.b + (i ? i(p) : p) * m.v) + m.u
          );
        }
      );
    },
    ys = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = Ct(Math.round(parseFloat(i) / t) * t * e);
        return (r - (r % 1)) / e + (ti(i) ? 0 : $t(i));
      };
    },
    Vo = function (t, e) {
      var i = Vt(t),
        r,
        n;
      return (
        !i &&
          qe(t) &&
          ((r = i = t.radius || Me),
          t.values
            ? ((t = De(t.values)), (n = !ti(t[0])) && (r *= r))
            : (t = ys(t.increment))),
        di(
          e,
          i
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
                      f = t.length,
                      d,
                      h;
                    f--;

                  )
                    n
                      ? ((d = t[f].x - a),
                        (h = t[f].y - l),
                        (d = d * d + h * h))
                      : (d = Math.abs(t[f] - a)),
                      d < u && ((u = d), (c = f));
                  return (
                    (c = !r || u <= r ? t[c] : o),
                    n || c === o || ti(o) ? c : c + $t(o)
                  );
                }
            : ys(t)
        )
      );
    },
    $o = function (t, e, i, r) {
      return di(Vt(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
        return Vt(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    ou = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (r) {
        return e.reduce(function (n, o) {
          return o(n);
        }, r);
      };
    },
    au = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || $t(i));
      };
    },
    lu = function (t, e, i) {
      return Go(t, e, 0, 1, i);
    },
    Uo = function (t, e, i) {
      return di(i, function (r) {
        return t[~~e(r)];
      });
    },
    uu = function s(t, e, i) {
      var r = e - t;
      return Vt(t)
        ? Uo(t, s(0, t.length), e)
        : di(i, function (n) {
            return ((r + ((n - t) % r)) % r) + t;
          });
    },
    cu = function s(t, e, i) {
      var r = e - t,
        n = r * 2;
      return Vt(t)
        ? Uo(t, s(0, t.length - 1), e)
        : di(i, function (o) {
            return (o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o);
          });
    },
    Dr = function (t) {
      for (var e = 0, i = "", r, n, o, a; ~(r = t.indexOf("random(", e)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (n = t.substr(r + 7, o - r - 7).match(a ? Co : ns)),
          (i +=
            t.substr(e, r - e) +
            $o(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (e = o + 1);
      return i + t.substr(e, t.length - e);
    },
    Go = function (t, e, i, r, n) {
      var o = e - t,
        a = r - i;
      return di(n, function (l) {
        return i + (((l - t) / o) * a || 0);
      });
    },
    hu = function s(t, e, i, r) {
      var n = isNaN(t + e)
        ? 0
        : function (h) {
            return (1 - h) * t + h * e;
          };
      if (!n) {
        var o = Lt(t),
          a = {},
          l,
          u,
          c,
          f,
          d;
        if ((i === !0 && (r = 1) && (i = null), o))
          (t = { p: t }), (e = { p: e });
        else if (Vt(t) && !Vt(e)) {
          for (c = [], f = t.length, d = f - 2, u = 1; u < f; u++)
            c.push(s(t[u - 1], t[u]));
          f--,
            (n = function (_) {
              _ *= f;
              var p = Math.min(d, ~~_);
              return c[p](_ - p);
            }),
            (i = e);
        } else r || (t = nr(Vt(t) ? [] : {}, t));
        if (!c) {
          for (l in e) Ss.call(a, t, l, "get", e[l]);
          n = function (_) {
            return Ps(_, a) || (o ? t.p : t);
          };
        }
      }
      return di(i, n);
    },
    Ko = function (t, e, i) {
      var r = t.labels,
        n = Me,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - e),
          a < 0 == !!i && a && n > (a = Math.abs(a)) && ((l = o), (n = a));
      return l;
    },
    be = function (t, e, i) {
      var r = t.vars,
        n = r[e],
        o = ht,
        a = t._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = r[e + "Params"]),
          (u = r.callbackScope || t),
          i && hi.length && gn(),
          a && (ht = a),
          (c = l ? n.apply(u, l) : n.call(u)),
          (ht = o),
          c
        );
    },
    Rr = function (t) {
      return (
        fi(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Ht),
        t.progress() < 1 && be(t, "onInterrupt"),
        t
      );
    },
    ar,
    Zo = [],
    Qo = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), rs() || t.headless)) {
          var e = t.name,
            i = mt(t),
            r =
              e && !i && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: Pr,
              render: Ps,
              add: Ss,
              kill: ku,
              modifier: Eu,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: ks,
              aliases: {},
              register: 0,
            };
          if ((lr(), t !== r)) {
            if (ye[e]) return;
            we(r, we(mn(t, n), o)),
              nr(r.prototype, nr(n, mn(t, o))),
              (ye[(r.prop = e)] = r),
              t.targetTest && (_n.push(r), (us[e] = 1)),
              (e =
                (e === "css"
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          Po(e, r), t.register && t.register(de, r, fe);
        } else Zo.push(t);
    },
    nt = 255,
    Lr = {
      aqua: [0, nt, nt],
      lime: [0, nt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, nt],
      navy: [0, 0, 128],
      white: [nt, nt, nt],
      olive: [128, 128, 0],
      yellow: [nt, nt, 0],
      orange: [nt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [nt, 0, 0],
      pink: [nt, 192, 203],
      cyan: [0, nt, nt],
      transparent: [nt, nt, nt, 0],
    },
    ws = function (t, e, i) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : t * 3 < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          nt +
          0.5) |
          0
      );
    },
    jo = function (t, e, i) {
      var r = t ? (ti(t) ? [t >> 16, (t >> 8) & nt, t & nt] : 0) : Lr.black,
        n,
        o,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
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
              [r >> 16, (r >> 8) & nt, r & nt, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (r = [t >> 16, (t >> 8) & nt, t & nt]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((r = _ = t.match(ns)), !e))
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
            return (r = t.match(So)), i && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(ns) || Lr.transparent;
        r = r.map(Number);
      }
      return (
        e &&
          !_ &&
          ((n = r[0] / nt),
          (o = r[1] / nt),
          (a = r[2] / nt),
          (f = Math.max(n, o, a)),
          (d = Math.min(n, o, a)),
          (c = (f + d) / 2),
          f === d
            ? (l = u = 0)
            : ((h = f - d),
              (u = c > 0.5 ? h / (2 - f - d) : h / (f + d)),
              (l =
                f === n
                  ? (o - a) / h + (o < a ? 6 : 0)
                  : f === o
                  ? (a - n) / h + 2
                  : (n - o) / h + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Jo = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(pi).forEach(function (n) {
          var o = n.match(ir) || [];
          e.push.apply(e, o), i.push((r += o.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    ta = function (t, e, i) {
      var r = "",
        n = (t + r).match(pi),
        o = e ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        f;
      if (!n) return t;
      if (
        ((n = n.map(function (d) {
          return (
            (d = jo(d, e, 1)) &&
            o +
              (e
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        i && ((c = Jo(t)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = t.replace(pi, "1").split(ir), f = u.length - 1; a < f; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (c.length ? c : n.length ? n : i).shift());
      if (!u)
        for (u = t.split(pi), f = u.length - 1; a < f; a++) r += u[a] + n[a];
      return r + u[f];
    },
    pi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Lr) s += "|" + t + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    fu = /hsl[a]?\(/,
    ea = function (t) {
      var e = t.join(" "),
        i;
      if (((pi.lastIndex = 0), pi.test(e)))
        return (
          (i = fu.test(e)),
          (t[1] = ta(t[1], i)),
          (t[0] = ta(t[0], i, Jo(t[1]))),
          !0
        );
    },
    zr,
    xe = (function () {
      var s = Date.now,
        t = 500,
        e = 33,
        i = s(),
        r = i,
        n = 1e3 / 240,
        o = n,
        a = [],
        l,
        u,
        c,
        f,
        d,
        h,
        _ = function p(m) {
          var w = s() - r,
            b = m === !0,
            T,
            v,
            y,
            C;
          if (
            ((w > t || w < 0) && (i += w - e),
            (r += w),
            (y = r - i),
            (T = y - o),
            (T > 0 || b) &&
              ((C = ++f.frame),
              (d = y - f.time * 1e3),
              (f.time = y = y / 1e3),
              (o += T + (T >= n ? 4 : n - T)),
              (v = 1)),
            b || (l = u(p)),
            v)
          )
            for (h = 0; h < a.length; h++) a[h](y, d, C, m);
        };
      return (
        (f = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (m) {
            return d / (1e3 / (m || 60));
          },
          wake: function () {
            Eo &&
              (!os &&
                rs() &&
                ((Ve = os = window),
                (as = Ve.document || {}),
                (ve.gsap = de),
                (Ve.gsapVersions || (Ve.gsapVersions = [])).push(de.version),
                ko(dn || Ve.GreenSockGlobals || (!Ve.gsap && Ve) || {}),
                Zo.forEach(Qo)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && f.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (o - f.time * 1e3 + 1) | 0);
                }),
              (zr = 1),
              _(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (zr = 0), (u = Pr);
          },
          lagSmoothing: function (m, w) {
            (t = m || 1 / 0), (e = Math.min(w || 33, t));
          },
          fps: function (m) {
            (n = 1e3 / (m || 240)), (o = f.time * 1e3 + n);
          },
          add: function (m, w, b) {
            var T = w
              ? function (v, y, C, x) {
                  m(v, y, C, x), f.remove(T);
                }
              : m;
            return f.remove(m), a[b ? "unshift" : "push"](T), lr(), T;
          },
          remove: function (m, w) {
            ~(w = a.indexOf(m)) && a.splice(w, 1) && h >= w && h--;
          },
          _listeners: a,
        }),
        f
      );
    })(),
    lr = function () {
      return !zr && xe.wake();
    },
    Q = {},
    du = /^[\d.\-M][\d.\-,\s]/,
    pu = /["']/g,
    _u = function (t) {
      for (
        var e = {},
          i = t.substr(1, t.length - 3).split(":"),
          r = i[0],
          n = 1,
          o = i.length,
          a,
          l,
          u;
        n < o;
        n++
      )
        (l = i[n]),
          (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (e[r] = isNaN(u) ? u.replace(pu, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return e;
    },
    gu = function (t) {
      var e = t.indexOf("(") + 1,
        i = t.indexOf(")"),
        r = t.indexOf("(", e);
      return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    mu = function (t) {
      var e = (t + "").split("("),
        i = Q[e[0]];
      return i && e.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf("{") ? [_u(e[1])] : gu(t).split(",").map(Ro)
          )
        : Q._CE && du.test(t)
        ? Q._CE("", t)
        : i;
    },
    ia = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    ra = function s(t, e) {
      for (var i = t._first, r; i; )
        i instanceof ee
          ? s(i, e)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== e &&
            (i.timeline
              ? s(i.timeline, e)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = e))),
          (i = i._next);
    },
    Ri = function (t, e) {
      return (t && (mt(t) ? t : Q[t] || mu(t))) || e;
    },
    Li = function (t, e, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - e(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
          });
      var n = { easeIn: e, easeOut: i, easeInOut: r },
        o;
      return (
        he(t, function (a) {
          (Q[a] = ve[a] = n), (Q[(o = a.toLowerCase())] = i);
          for (var l in n)
            Q[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Q[a + "." + l] = n[l];
        }),
        n
      );
    },
    na = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
      };
    },
    bs = function s(t, e, i) {
      var r = e >= 1 ? e : 1,
        n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        o = (n / es) * (Math.asin(1 / r) || 0),
        a = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Vl((c - o) * n) + 1;
        },
        l =
          t === "out"
            ? a
            : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : na(a);
      return (
        (n = es / n),
        (l.config = function (u, c) {
          return s(t, u, c);
        }),
        l
      );
    },
    xs = function s(t, e) {
      e === void 0 && (e = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
        },
        r =
          t === "out"
            ? i
            : t === "in"
            ? function (n) {
                return 1 - i(1 - n);
              }
            : na(i);
      return (
        (r.config = function (n) {
          return s(t, n);
        }),
        r
      );
    };
  he("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
    var e = t < 5 ? t + 1 : t;
    Li(
      s + ",Power" + (e - 1),
      t
        ? function (i) {
            return Math.pow(i, e);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, e);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, e) / 2
          : 1 - Math.pow((1 - i) * 2, e) / 2;
      }
    );
  }),
    (Q.Linear.easeNone = Q.none = Q.Linear.easeIn),
    Li("Elastic", bs("in"), bs("out"), bs()),
    (function (s, t) {
      var e = 1 / t,
        i = 2 * e,
        r = 2.5 * e,
        n = function (a) {
          return a < e
            ? s * a * a
            : a < i
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
      return -(bo(1 - s * s) - 1);
    }),
    Li("Sine", function (s) {
      return s === 1 ? 1 : -ql(s * Xl) + 1;
    }),
    Li("Back", xs("in"), xs("out"), xs()),
    (Q.SteppedEase =
      Q.steps =
      ve.SteppedEase =
        {
          config: function (t, e) {
            t === void 0 && (t = 1);
            var i = 1 / t,
              r = t + (e ? 0 : 1),
              n = e ? 1 : 0,
              o = 1 - rt;
            return function (a) {
              return (((r * Or(0, o, a)) | 0) + n) * i;
            };
          },
        }),
    (er.ease = Q["quad.out"]),
    he(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (fs += s + "," + s + "Params,");
      }
    );
  var sa = function (t, e) {
      (this.id = Yl++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Oo),
        (this.set = e ? e.getSetter : ks);
    },
    Nr = (function () {
      function s(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          or(this, +e.duration, 1, 1),
          (this.data = e.data),
          ht && ((this._ctx = ht), ht.data.push(this)),
          zr || xe.wake();
      }
      var t = s.prototype;
      return (
        (t.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              or(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (i, r) {
          if ((lr(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              bn(this, i), !n._dp || n.parent || Fo(n, this);
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
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              $e(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === rt) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Do(this, i, r)),
            this
          );
        }),
        (t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + Io(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  Io(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (i, r) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * n, r)
            : this._repeat
            ? sr(this._tTime, n) + 1
            : 1;
        }),
        (t.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
          if (this._rts === i) return this;
          var n =
            this.parent && this._ts ? yn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -rt ? 0 : this._rts),
            this.totalTime(
              Or(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            wn(this),
            jl(this)
          );
        }),
        (t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
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
                        Math.abs(this._zTime) !== rt &&
                        (this._tTime -= rt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && $e(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (i) {
          return (
            this._start +
            (ce(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? yn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (i) {
          i === void 0 && (i = Gl);
          var r = Ht;
          return (
            (Ht = i),
            ps(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ht = r),
            this
          );
        }),
        (t.globalTime = function (i) {
          for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : n;
        }),
        (t.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Bo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Bo(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (t.seek = function (i, r) {
          return this.totalTime(Oe(this, i), ce(r));
        }),
        (t.restart = function (i, r) {
          return (
            this.play().totalTime(i ? -this._delay : 0, ce(r)),
            this._dur || (this._zTime = -rt),
            this
          );
        }),
        (t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -rt : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -rt), this;
        }),
        (t.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            n;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (n = i.rawTime(!0)) >= r &&
              n < this.endTime(!0) - rt)
          );
        }),
        (t.eventCallback = function (i, r, n) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  n && (o[i + "Params"] = n),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (t.then = function (i) {
          var r = this;
          return new Promise(function (n) {
            var o = mt(i) ? i : Lo,
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
    _zTime: -rt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var ee = (function (s) {
    Wt(t, s);
    function t(i, r) {
      var n;
      return (
        i === void 0 && (i = {}),
        (n = s.call(this, i) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!i.smoothChildTiming),
        (n.autoRemoveChildren = !!i.autoRemoveChildren),
        (n._sort = ce(i.sortChildren)),
        dt && $e(i.parent || dt, gt(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Wo(gt(n), i.scrollTrigger),
        n
      );
    }
    var e = t.prototype;
    return (
      (e.to = function (r, n, o) {
        return Mr(0, arguments, this), this;
      }),
      (e.from = function (r, n, o) {
        return Mr(1, arguments, this), this;
      }),
      (e.fromTo = function (r, n, o, a) {
        return Mr(2, arguments, this), this;
      }),
      (e.set = function (r, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Ar(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Et(r, n, Oe(this, o), 1),
          this
        );
      }),
      (e.call = function (r, n, o) {
        return $e(this, Et.delayedCall(0, r, n), o);
      }),
      (e.staggerTo = function (r, n, o, a, l, u, c) {
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
      (e.staggerFrom = function (r, n, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (Ar(o).immediateRender = ce(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, u, c)
        );
      }),
      (e.staggerFromTo = function (r, n, o, a, l, u, c, f) {
        return (
          (a.startAt = o),
          (Ar(a).immediateRender = ce(a.immediateRender)),
          this.staggerTo(r, n, a, l, u, c, f)
        );
      }),
      (e.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : Ct(r),
          f = this._zTime < 0 != r < 0 && (this._initted || !u),
          d,
          h,
          _,
          p,
          m,
          w,
          b,
          T,
          v,
          y,
          C,
          x;
        if (
          (this !== dt && c > l && r >= 0 && (c = l),
          c !== this._tTime || o || f)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (r += this._time - a)),
            (d = c),
            (v = this._start),
            (T = this._ts),
            (w = !T),
            f && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(m * 100 + r, n, o);
            if (
              ((d = Ct(c % m)),
              c === l
                ? ((p = this._repeat), (d = u))
                : ((y = Ct(c / m)),
                  (p = ~~y),
                  p && p === y && ((d = u), p--),
                  d > u && (d = u)),
              (y = sr(this._tTime, m)),
              !a &&
                this._tTime &&
                y !== p &&
                this._tTime - y * m - this._dur <= 0 &&
                (y = p),
              C && p & 1 && ((d = u - d), (x = 1)),
              p !== y && !this._lock)
            ) {
              var S = C && y & 1,
                k = S === (C && p & 1);
              if (
                (p < y && (S = !S),
                (a = S ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (x ? 0 : Ct(p * m)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && be(this, "onRepeat"),
                this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  w !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                k &&
                  ((this._lock = 2),
                  (a = S ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !w)
              )
                return this;
              ra(this, x);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((b = iu(this, Ct(a), Ct(d))), b && (c -= d - (d = b._start))),
            (this._tTime = c),
            (this._time = d),
            (this._act = !T),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && c && !n && !y && (be(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (d >= a && r >= 0)
            for (h = this._first; h; ) {
              if (
                ((_ = h._next), (h._act || d >= h._start) && h._ts && b !== h)
              ) {
                if (h.parent !== this) return this.render(r, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (d - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (d - h._start) * h._ts,
                    n,
                    o
                  ),
                  d !== this._time || (!this._ts && !w))
                ) {
                  (b = 0), _ && (c += this._zTime = -rt);
                  break;
                }
              }
              h = _;
            }
          else {
            h = this._last;
            for (var P = r < 0 ? r : d; h; ) {
              if (
                ((_ = h._prev), (h._act || P <= h._end) && h._ts && b !== h)
              ) {
                if (h.parent !== this) return this.render(r, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (P - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (P - h._start) * h._ts,
                    n,
                    o || (Ht && ps(h))
                  ),
                  d !== this._time || (!this._ts && !w))
                ) {
                  (b = 0), _ && (c += this._zTime = P ? -rt : rt);
                  break;
                }
              }
              h = _;
            }
          }
          if (
            b &&
            !n &&
            (this.pause(),
            (b.render(d >= a ? 0 : -rt)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = v), wn(this), this.render(r, n, o);
          this._onUpdate && !n && be(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (v === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  fi(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (c || a || !l) &&
                  (be(
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
      (e.add = function (r, n) {
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
      (e.getChildren = function (r, n, o, a) {
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
      (e.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
          if (n[o].vars.id === r) return n[o];
      }),
      (e.remove = function (r) {
        return Lt(r)
          ? this.removeLabel(r)
          : mt(r)
          ? this.killTweensOf(r)
          : (r.parent === this && vn(this, r),
            r === this._recent && (this._recent = this._last),
            Di(this));
      }),
      (e.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ct(
                xe.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            s.prototype.totalTime.call(this, r, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function (r, n) {
        return (this.labels[r] = Oe(this, n)), this;
      }),
      (e.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (e.addPause = function (r, n, o) {
        var a = Et.delayedCall(0, n || Pr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), $e(this, a, Oe(this, r))
        );
      }),
      (e.removePause = function (r) {
        var n = this._first;
        for (r = Oe(this, r); n; )
          n._start === r && n.data === "isPause" && fi(n), (n = n._next);
      }),
      (e.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          _i !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (e.getTweensOf = function (r, n) {
        for (var o = [], a = De(r), l = this._first, u = ti(n), c; l; )
          l instanceof Et
            ? Kl(l._targets, a) &&
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
      (e.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = Oe(o, r),
          l = n,
          u = l.startAt,
          c = l.onStart,
          f = l.onStartParams,
          d = l.immediateRender,
          h,
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
                  rt,
                onStart: function () {
                  if ((o.pause(), !h)) {
                    var m =
                      n.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    _._dur !== m && or(_, m, 0, 1).render(_._time, !0, !0),
                      (h = 1);
                  }
                  c && c.apply(_, f || []);
                },
              },
              n
            )
          );
        return d ? _.render(0) : _;
      }),
      (e.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, we({ startAt: { time: Oe(this, r) } }, o));
      }),
      (e.recent = function () {
        return this._recent;
      }),
      (e.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Ko(this, Oe(this, r));
      }),
      (e.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Ko(this, Oe(this, r), 1);
      }),
      (e.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + rt);
      }),
      (e.shiftChildren = function (r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (n) for (u in l) l[u] >= o && (l[u] += r);
        return Di(this);
      }),
      (e.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
        return s.prototype.invalidate.call(this, r);
      }),
      (e.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n; )
          (o = n._next), this.remove(n), (n = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Di(this)
        );
      }),
      (e.totalDuration = function (r) {
        var n = 0,
          o = this,
          a = o._last,
          l = Me,
          u,
          c,
          f;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (f = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), ($e(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((n -= c),
                ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
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
        if ((dt._ts && (Do(dt, yn(r, dt)), (Ao = xe.frame)), xe.frame >= Mo)) {
          Mo += at.autoSleep || 120;
          var n = dt._first;
          if ((!n || !n._ts) && at.autoSleep && xe._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || xe.sleep();
          }
        }
      }),
      t
    );
  })(Nr);
  we(ee.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var vu = function (t, e, i, r, n, o, a) {
      var l = new fe(this._pt, t, e, 0, 1, ha, null, n),
        u = 0,
        c = 0,
        f,
        d,
        h,
        _,
        p,
        m,
        w,
        b;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (w = ~r.indexOf("random(")) && (r = Dr(r)),
          o && ((b = [i, r]), o(b, t, e), (i = b[0]), (r = b[1])),
          d = i.match(ss) || [];
        (f = ss.exec(r));

      )
        (_ = f[0]),
          (p = r.substring(u, f.index)),
          h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
          _ !== d[c++] &&
            ((m = parseFloat(d[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || c === 1 ? p : ",",
              s: m,
              c: _.charAt(1) === "=" ? rr(m, _) - m : parseFloat(_) - m,
              m: h && h < 4 ? Math.round : 0,
            }),
            (u = ss.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (To.test(r) || w) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Ss = function (t, e, i, r, n, o, a, l, u, c) {
      mt(r) && (r = r(n || 0, t, o));
      var f = t[e],
        d =
          i !== "get"
            ? i
            : mt(f)
            ? u
              ? t[
                  e.indexOf("set") || !mt(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : f,
        h = mt(f) ? (u ? Su : ua) : Es,
        _;
      if (
        (Lt(r) &&
          (~r.indexOf("random(") && (r = Dr(r)),
          r.charAt(1) === "=" &&
            ((_ = rr(d, r) + ($t(d) || 0)), (_ || _ === 0) && (r = _))),
        !c || d !== r || Ts)
      )
        return !isNaN(d * r) && r !== ""
          ? ((_ = new fe(
              this._pt,
              t,
              e,
              +d || 0,
              r - (d || 0),
              typeof f == "boolean" ? Cu : ca,
              0,
              h
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, t),
            (this._pt = _))
          : (!f && !(e in t) && ls(e, r),
            vu.call(this, t, e, d, r, h, l || at.stringFilter, u));
    },
    yu = function (t, e, i, r, n) {
      if (
        (mt(t) && (t = Ir(t, n, e, i, r)),
        !qe(t) || (t.style && t.nodeType) || Vt(t) || xo(t))
      )
        return Lt(t) ? Ir(t, n, e, i, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Ir(t[a], n, e, i, r);
      return o;
    },
    oa = function (t, e, i, r, n, o) {
      var a, l, u, c;
      if (
        ye[t] &&
        (a = new ye[t]()).init(
          n,
          a.rawVars ? e[t] : yu(e[t], r, n, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new fe(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        i !== ar)
      )
        for (u = i._ptLookup[i._targets.indexOf(n)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    _i,
    Ts,
    Cs = function s(t, e, i) {
      var r = t.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        f = r.yoyoEase,
        d = r.keyframes,
        h = r.autoRevert,
        _ = t._dur,
        p = t._startAt,
        m = t._targets,
        w = t.parent,
        b = w && w.data === "nested" ? w.vars.targets : m,
        T = t._overwrite === "auto" && !ts,
        v = t.timeline,
        y,
        C,
        x,
        S,
        k,
        P,
        z,
        A,
        D,
        F,
        H,
        W,
        R;
      if (
        (v && (!d || !n) && (n = "none"),
        (t._ease = Ri(n, er.ease)),
        (t._yEase = f ? ia(Ri(f === !0 ? n : f, er.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !v && !!r.runBackwards),
        !v || (d && !r.stagger))
      ) {
        if (
          ((A = m[0] ? Oi(m[0]).harness : 0),
          (W = A && r[A.prop]),
          (y = mn(r, us)),
          p &&
            (p._zTime < 0 && p.progress(1),
            e < 0 && c && a && !h
              ? p.render(-1, !0)
              : p.revert(c && _ ? pn : Ul),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (fi(
              (t._startAt = Et.set(
                m,
                we(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: w,
                    immediateRender: !0,
                    lazy: !p && ce(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return be(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (Ht || (!a && !h)) && t._startAt.revert(pn),
            a && _ && e <= 0 && i <= 0)
          ) {
            e && (t._zTime = e);
            return;
          }
        } else if (c && _ && !p) {
          if (
            (e && (a = !1),
            (x = we(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && ce(l),
                immediateRender: a,
                stagger: 0,
                parent: w,
              },
              y
            )),
            W && (x[A.prop] = W),
            fi((t._startAt = Et.set(m, x))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (Ht ? t._startAt.revert(pn) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            !a)
          )
            s(t._startAt, rt, rt);
          else if (!e) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (_ && ce(l)) || (l && !_), C = 0;
          C < m.length;
          C++
        ) {
          if (
            ((k = m[C]),
            (z = k._gsap || ds(m)[C]._gsap),
            (t._ptLookup[C] = F = {}),
            cs[z.id] && hi.length && gn(),
            (H = b === m ? C : b.indexOf(k)),
            A &&
              (D = new A()).init(k, W || y, t, H, b) !== !1 &&
              ((t._pt = S =
                new fe(t._pt, k, D.name, 0, 1, D.render, D, 0, D.priority)),
              D._props.forEach(function ($) {
                F[$] = S;
              }),
              D.priority && (P = 1)),
            !A || W)
          )
            for (x in y)
              ye[x] && (D = oa(x, y, t, H, k, b))
                ? D.priority && (P = 1)
                : (F[x] = S =
                    Ss.call(t, k, x, "get", y[x], H, b, 0, r.stringFilter));
          t._op && t._op[C] && t.kill(k, t._op[C]),
            T &&
              t._pt &&
              ((_i = t),
              dt.killTweensOf(k, F, t.globalTime(e)),
              (R = !t.parent),
              (_i = 0)),
            t._pt && l && (cs[z.id] = 1);
        }
        P && fa(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !R),
        d && e <= 0 && v.render(Me, !0, !0);
    },
    wu = function (t, e, i, r, n, o, a, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        c,
        f,
        d,
        h;
      if (!u)
        for (
          u = t._ptCache[e] = [], d = t._ptLookup, h = t._targets.length;
          h--;

        ) {
          if (((c = d[h][e]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
          if (!c)
            return (
              (Ts = 1),
              (t.vars[e] = "+=0"),
              Cs(t, a),
              (Ts = 0),
              l ? kr(e + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (h = u.length; h--; )
        (f = u[h]),
          (c = f._pt || f),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c),
          (c.c = i - c.s),
          f.e && (f.e = wt(i) + $t(f.e)),
          f.b && (f.b = c.s + $t(f.b));
    },
    bu = function (t, e) {
      var i = t[0] ? Oi(t[0]).harness : 0,
        r = i && i.aliases,
        n,
        o,
        a,
        l;
      if (!r) return e;
      n = nr({}, e);
      for (o in r)
        if (o in n)
          for (l = r[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
      return n;
    },
    xu = function (t, e, i, r) {
      var n = e.ease || r || "power1.inOut",
        o,
        a;
      if (Vt(e))
        (a = i[t] || (i[t] = [])),
          e.forEach(function (l, u) {
            return a.push({ t: (u / (e.length - 1)) * 100, v: l, e: n });
          });
      else
        for (o in e)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: n });
    },
    Ir = function (t, e, i, r, n) {
      return mt(t)
        ? t.call(e, i, r, n)
        : Lt(t) && ~t.indexOf("random(")
        ? Dr(t)
        : t;
    },
    aa = fs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    la = {};
  he(aa + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (la[s] = 1);
  });
  var Et = (function (s) {
    Wt(t, s);
    function t(i, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Ar(r)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        f = l.immediateRender,
        d = l.stagger,
        h = l.overwrite,
        _ = l.keyframes,
        p = l.defaults,
        m = l.scrollTrigger,
        w = l.yoyoEase,
        b = r.parent || dt,
        T = (Vt(i) || xo(i) ? ti(i[0]) : "length" in r) ? [i] : De(i),
        v,
        y,
        C,
        x,
        S,
        k,
        P,
        z;
      if (
        ((a._targets = T.length
          ? ds(T)
          : kr(
              "GSAP target " + i + " not found. https://gsap.com",
              !at.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = h),
        _ || d || fn(u) || fn(c))
      ) {
        if (
          ((r = a.vars),
          (v = a.timeline =
            new ee({
              data: "nested",
              defaults: p || {},
              targets: b && b.data === "nested" ? b.vars.targets : T,
            })),
          v.kill(),
          (v.parent = v._dp = gt(a)),
          (v._start = 0),
          d || fn(u) || fn(c))
        ) {
          if (((x = T.length), (P = d && qo(d)), qe(d)))
            for (S in d) ~aa.indexOf(S) && (z || (z = {}), (z[S] = d[S]));
          for (y = 0; y < x; y++)
            (C = mn(r, la)),
              (C.stagger = 0),
              w && (C.yoyoEase = w),
              z && nr(C, z),
              (k = T[y]),
              (C.duration = +Ir(u, gt(a), y, k, T)),
              (C.delay = (+Ir(c, gt(a), y, k, T) || 0) - a._delay),
              !d &&
                x === 1 &&
                C.delay &&
                ((a._delay = c = C.delay), (a._start += c), (C.delay = 0)),
              v.to(k, C, P ? P(y, k, T) : 0),
              (v._ease = Q.none);
          v.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (_) {
          Ar(we(v.vars.defaults, { ease: "none" })),
            (v._ease = Ri(_.ease || r.ease || "none"));
          var A = 0,
            D,
            F,
            H;
          if (Vt(_))
            _.forEach(function (W) {
              return v.to(T, W, ">");
            }),
              v.duration();
          else {
            C = {};
            for (S in _)
              S === "ease" || S === "easeEach" || xu(S, _[S], C, _.easeEach);
            for (S in C)
              for (
                D = C[S].sort(function (W, R) {
                  return W.t - R.t;
                }),
                  A = 0,
                  y = 0;
                y < D.length;
                y++
              )
                (F = D[y]),
                  (H = {
                    ease: F.e,
                    duration: ((F.t - (y ? D[y - 1].t : 0)) / 100) * u,
                  }),
                  (H[S] = F.v),
                  v.to(T, H, A),
                  (A += H.duration);
            v.duration() < u && v.to({}, { duration: u - v.duration() });
          }
        }
        u || a.duration((u = v.duration()));
      } else a.timeline = 0;
      return (
        h === !0 && !ts && ((_i = gt(a)), dt.killTweensOf(T), (_i = 0)),
        $e(b, gt(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (f ||
          (!u &&
            !_ &&
            a._start === Ct(b._time) &&
            ce(f) &&
            Jl(gt(a)) &&
            b.data !== "nested")) &&
          ((a._tTime = -rt), a.render(Math.max(0, -c) || 0)),
        m && Wo(gt(a), m),
        a
      );
    }
    var e = t.prototype;
    return (
      (e.render = function (r, n, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          f = r > l - rt && !c ? l : r < rt ? 0 : r,
          d,
          h,
          _,
          p,
          m,
          w,
          b,
          T,
          v;
        if (!u) eu(this, r, n, o);
        else if (
          f !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((d = f), (T = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(p * 100 + r, n, o);
            if (
              ((d = Ct(f % p)),
              f === l
                ? ((_ = this._repeat), (d = u))
                : ((m = Ct(f / p)),
                  (_ = ~~m),
                  _ && _ === m ? ((d = u), _--) : d > u && (d = u)),
              (w = this._yoyo && _ & 1),
              w && ((v = this._yEase), (d = u - d)),
              (m = sr(this._tTime, p)),
              d === a && !o && this._initted && _ === m)
            )
              return (this._tTime = f), this;
            _ !== m &&
              (T && this._yEase && ra(T, w),
              this.vars.repeatRefresh &&
                !w &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Ct(p * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ho(this, c ? r : d, o, n, f)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
              return this;
            if (u !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = f),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = b = (v || this._ease)(d / u)),
            this._from && (this.ratio = b = 1 - b),
            !a && f && !n && !m && (be(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (h = this._pt; h; ) h.r(b, h.d), (h = h._next);
          (T && T.render(r < 0 ? r : T._dur * T._ease(d / this._dur), n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && _s(this, r, n, o), be(this, "onUpdate")),
            this._repeat &&
              _ !== m &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              be(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (c && !this._onUpdate && _s(this, r, !0, !0),
              (r || !u) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                fi(this, 1),
              !n &&
                !(c && !a) &&
                (f || a || w) &&
                (be(this, f === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (e.targets = function () {
        return this._targets;
      }),
      (e.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          s.prototype.invalidate.call(this, r)
        );
      }),
      (e.resetTo = function (r, n, o, a, l) {
        zr || xe.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Cs(this, u),
          (c = this._ease(u / this._dur)),
          wu(this, r, n, o, a, c, u, l)
            ? this.resetTo(r, n, o, a, 1)
            : (bn(this, 0),
              this.parent ||
                No(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Rr(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ht),
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
          f,
          d,
          h,
          _,
          p,
          m,
          w;
        if ((!n || n === "all") && Ql(a, l))
          return n === "all" && (this._pt = 0), Rr(this);
        for (
          f = this._op = this._op || [],
            n !== "all" &&
              (Lt(n) &&
                ((p = {}),
                he(n, function (b) {
                  return (p[b] = 1);
                }),
                (n = p)),
              (n = bu(a, n))),
            w = a.length;
          w--;

        )
          if (~l.indexOf(a[w])) {
            (d = u[w]),
              n === "all"
                ? ((f[w] = n), (_ = d), (h = {}))
                : ((h = f[w] = f[w] || {}), (_ = n));
            for (p in _)
              (m = d && d[p]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(p) === !0) &&
                    vn(this, m, "_pt"),
                  delete d[p]),
                h !== "all" && (h[p] = 1);
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
    he("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Et[s] = function () {
        var t = new ee(),
          e = ms.call(arguments, 0);
        return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
      };
    });
  var Es = function (t, e, i) {
      return (t[e] = i);
    },
    ua = function (t, e, i) {
      return t[e](i);
    },
    Su = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    Tu = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    ks = function (t, e) {
      return mt(t[e]) ? ua : is(t[e]) && t.setAttribute ? Tu : Es;
    },
    ca = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    Cu = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ha = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (t === 1 && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    Ps = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    Eu = function (t, e, i, r) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === r && n.modifier(t, e, i), (n = o);
    },
    ku = function (t) {
      for (var e = this._pt, i, r; e; )
        (r = e._next),
          (e.p === t && !e.op) || e.op === t
            ? vn(this, e, "_pt")
            : e.dep || (i = 1),
          (e = r);
      return !i;
    },
    Pu = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    fa = function (t) {
      for (var e = t._pt, i, r, n, o; e; ) {
        for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
        (e._prev = r ? r._prev : o) ? (e._prev._next = e) : (n = e),
          (e._next = r) ? (r._prev = e) : (o = e),
          (e = i);
      }
      t._pt = n;
    },
    fe = (function () {
      function s(e, i, r, n, o, a, l, u, c) {
        (this.t = i),
          (this.s = n),
          (this.c = o),
          (this.p = r),
          (this.r = a || ca),
          (this.d = l || this),
          (this.set = u || Es),
          (this.pr = c || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      var t = s.prototype;
      return (
        (t.modifier = function (i, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Pu),
            (this.m = i),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  he(
    fs +
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
    (at.stringFilter = ea);
  var zi = [],
    xn = {},
    Au = [],
    da = 0,
    Mu = 0,
    As = function (t) {
      return (xn[t] || Au).map(function (e) {
        return e();
      });
    },
    Ms = function () {
      var t = Date.now(),
        e = [];
      t - da > 2 &&
        (As("matchMediaInit"),
        zi.forEach(function (i) {
          var r = i.queries,
            n = i.conditions,
            o,
            a,
            l,
            u;
          for (a in r)
            (o = Ve.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== n[a] && ((n[a] = o), (u = 1));
          u && (i.revert(), l && e.push(i));
        }),
        As("matchMediaRevert"),
        e.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (da = t),
        As("matchMedia"));
    },
    pa = (function () {
      function s(e, i) {
        (this.selector = i && vs(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Mu++),
          e && this.add(e);
      }
      var t = s.prototype;
      return (
        (t.add = function (i, r, n) {
          mt(i) && ((n = r), (r = i), (i = mt));
          var o = this,
            a = function () {
              var u = ht,
                c = o.selector,
                f;
              return (
                u && u !== o && u.data.push(o),
                n && (o.selector = vs(n)),
                (ht = o),
                (f = r.apply(o, arguments)),
                mt(f) && o._r.push(f),
                (ht = u),
                (o.selector = c),
                (o.isReverted = !1),
                f
              );
            };
          return (
            (o.last = a),
            i === mt
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : i
              ? (o[i] = a)
              : a
          );
        }),
        (t.ignore = function (i) {
          var r = ht;
          (ht = null), i(this), (ht = r);
        }),
        (t.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? i.push.apply(i, r.getTweens())
                : r instanceof Et &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (i, r) {
          var n = this;
          if (
            (i
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
                      .sort(function (c, f) {
                        return f.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(i);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (u = n.data[l]),
                      u instanceof ee
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Et) && u.revert && u.revert(i);
                  n._r.forEach(function (c) {
                    return c(i, n);
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
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        s
      );
    })(),
    Ou = (function () {
      function s(e) {
        (this.contexts = []), (this.scope = e), ht && ht.data.push(this);
      }
      var t = s.prototype;
      return (
        (t.add = function (i, r, n) {
          qe(i) || (i = { matches: i });
          var o = new pa(0, n || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          ht && !o.selector && (o.selector = ht.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = Ve.matchMedia(i[u])),
                l &&
                  (zi.indexOf(o) < 0 && zi.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Ms)
                    : l.addEventListener("change", Ms)));
          return (
            c &&
              r(o, function (f) {
                return o.add(null, f);
              }),
            this
          );
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        (t.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        s
      );
    })(),
    Sn = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (r) {
          return Qo(r);
        });
      },
      timeline: function (t) {
        return new ee(t);
      },
      getTweensOf: function (t, e) {
        return dt.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        Lt(t) && (t = De(t)[0]);
        var n = Oi(t || {}).get,
          o = i ? Lo : Ro;
        return (
          i === "native" && (i = ""),
          t &&
            (e
              ? o(((ye[e] && ye[e].get) || n)(t, e, i, r))
              : function (a, l, u) {
                  return o(((ye[a] && ye[a].get) || n)(t, a, l, u));
                })
        );
      },
      quickSetter: function (t, e, i) {
        if (((t = De(t)), t.length > 1)) {
          var r = t.map(function (c) {
              return de.quickSetter(c, e, i);
            }),
            n = r.length;
          return function (c) {
            for (var f = n; f--; ) r[f](c);
          };
        }
        t = t[0] || {};
        var o = ye[e],
          a = Oi(t),
          l = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = o
            ? function (c) {
                var f = new o();
                (ar._pt = 0),
                  f.init(t, i ? c + i : c, ar, 0, [t]),
                  f.render(1, f),
                  ar._pt && Ps(1, ar);
              }
            : a.set(t, l);
        return o
          ? u
          : function (c) {
              return u(t, l, i ? c + i : c, a, 1);
            };
      },
      quickTo: function (t, e, i) {
        var r,
          n = de.to(
            t,
            we(
              ((r = {}), (r[e] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              i || {}
            )
          ),
          o = function (l, u, c) {
            return n.resetTo(e, l, u, c);
          };
        return (o.tween = n), o;
      },
      isTweening: function (t) {
        return dt.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ri(t.ease, er.ease)), zo(er, t || {});
      },
      config: function (t) {
        return zo(at, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          n = t.defaults,
          o = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !ye[a] &&
            !ve[a] &&
            kr(e + " effect requires " + a + " plugin.")
          );
        }),
          (hs[e] = function (a, l, u) {
            return i(De(a), we(l || {}, n), u);
          }),
          o &&
            (ee.prototype[e] = function (a, l, u) {
              return this.add(hs[e](a, qe(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, e) {
        Q[t] = Ri(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Ri(t, e) : Q;
      },
      getById: function (t) {
        return dt.getById(t);
      },
      exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var i = new ee(t),
          r,
          n;
        for (
          i.smoothChildTiming = ce(t.smoothChildTiming),
            dt.remove(i),
            i._dp = 0,
            i._time = i._tTime = dt._time,
            r = dt._first;
          r;

        )
          (n = r._next),
            (e ||
              !(
                !r._dur &&
                r instanceof Et &&
                r.vars.onComplete === r._targets[0]
              )) &&
              $e(i, r, r._start - r._delay),
            (r = n);
        return $e(dt, i, 0), i;
      },
      context: function (t, e) {
        return t ? new pa(t, e) : ht;
      },
      matchMedia: function (t) {
        return new Ou(t);
      },
      matchMediaRefresh: function () {
        return (
          zi.forEach(function (t) {
            var e = t.conditions,
              i,
              r;
            for (r in e) e[r] && ((e[r] = !1), (i = 1));
            i && t.revert();
          }) || Ms()
        );
      },
      addEventListener: function (t, e) {
        var i = xn[t] || (xn[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = xn[t],
          r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: uu,
        wrapYoyo: cu,
        distribute: qo,
        random: $o,
        snap: Vo,
        normalize: lu,
        getUnit: $t,
        clamp: nu,
        splitColor: jo,
        toArray: De,
        selector: vs,
        mapRange: Go,
        pipe: ou,
        unitize: au,
        interpolate: hu,
        shuffle: Yo,
      },
      install: ko,
      effects: hs,
      ticker: xe,
      updateRoot: ee.updateRoot,
      plugins: ye,
      globalTimeline: dt,
      core: {
        PropTween: fe,
        globals: Po,
        Tween: Et,
        Timeline: ee,
        Animation: Nr,
        getCache: Oi,
        _removeLinkedListItem: vn,
        reverting: function () {
          return Ht;
        },
        context: function (t) {
          return t && ht && (ht.data.push(t), (t._ctx = ht)), ht;
        },
        suppressOverwrites: function (t) {
          return (ts = t);
        },
      },
    };
  he("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (Sn[s] = Et[s]);
  }),
    xe.add(ee.updateRoot),
    (ar = Sn.to({}, { duration: 0 }));
  var Du = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    Ru = function (t, e) {
      var i = t._targets,
        r,
        n,
        o;
      for (r in e)
        for (n = i.length; n--; )
          (o = t._ptLookup[n][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Du(o, r)),
              o && o.modifier && o.modifier(e[r], t, i[n], r));
    },
    Os = function (t, e) {
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
                he(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              e)
            ) {
              l = {};
              for (u in n) l[u] = e(n[u]);
              n = l;
            }
            Ru(a, n);
          };
        },
      };
    },
    de =
      Sn.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, n) {
            var o, a, l;
            this.tween = i;
            for (o in e)
              (l = t.getAttribute(o) || ""),
                (a = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  e[o],
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
          render: function (t, e) {
            for (var i = e._pt; i; )
              Ht ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (t, e) {
            for (var i = e.length; i--; )
              this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Os("roundProps", ys),
        Os("modifiers"),
        Os("snap", Vo)
      ) || Sn;
  (Et.version = ee.version = de.version = "3.13.0"),
    (Eo = 1),
    rs() && lr(),
    Q.Power0,
    Q.Power1,
    Q.Power2,
    Q.Power3,
    Q.Power4,
    Q.Linear,
    Q.Quad,
    Q.Cubic,
    Q.Quart,
    Q.Quint,
    Q.Strong,
    Q.Elastic,
    Q.Back,
    Q.SteppedEase,
    Q.Bounce,
    Q.Sine,
    Q.Expo,
    Q.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var _a,
    gi,
    ur,
    Ds,
    Ni,
    ga,
    Rs,
    Lu = function () {
      return typeof window != "undefined";
    },
    ei = {},
    Ii = 180 / Math.PI,
    cr = Math.PI / 180,
    hr = Math.atan2,
    ma = 1e8,
    Ls = /([A-Z])/g,
    zu = /(left|right|width|margin|padding|x)/i,
    Nu = /[\s,\(]\S/,
    Ue = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    zs = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    Iu = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    Fu = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    Wu = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    va = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    ya = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    Hu = function (t, e, i) {
      return (t.style[e] = i);
    },
    Bu = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    Xu = function (t, e, i) {
      return (t._gsap[e] = i);
    },
    Yu = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    qu = function (t, e, i, r, n) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(n, o);
    },
    Vu = function (t, e, i, r, n) {
      var o = t._gsap;
      (o[e] = i), o.renderTransform(n, o);
    },
    pt = "transform",
    pe = pt + "Origin",
    $u = function s(t, e) {
      var i = this,
        r = this.target,
        n = r.style,
        o = r._gsap;
      if (t in ei && n) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = Ue[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                  return (i.tfm[a] = ii(r, a));
                })
              : (this.tfm[t] = o.x ? o[t] : ii(r, t)),
            t === pe && (this.tfm.zOrigin = o.zOrigin);
        else
          return Ue.transform.split(",").forEach(function (a) {
            return s.call(i, a, e);
          });
        if (this.props.indexOf(pt) >= 0) return;
        o.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(pe, e, "")),
          (t = pt);
      }
      (n || e) && this.props.push(t, e, n[t]);
    },
    wa = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Uu = function () {
      var t = this.props,
        e = this.target,
        i = e.style,
        r = e._gsap,
        n,
        o;
      for (n = 0; n < t.length; n += 3)
        t[n + 1]
          ? t[n + 1] === 2
            ? e[t[n]](t[n + 2])
            : (e[t[n]] = t[n + 2])
          : t[n + 2]
          ? (i[t[n]] = t[n + 2])
          : i.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(Ls, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          e.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Rs()),
          (!n || !n.isStart) &&
            !i[pt] &&
            (wa(i),
            r.zOrigin &&
              i[pe] &&
              ((i[pe] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    ba = function (t, e) {
      var i = { target: t, props: [], revert: Uu, save: $u };
      return (
        t._gsap || de.core.getCache(t),
        e &&
          t.style &&
          t.nodeType &&
          e.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    xa,
    Ns = function (t, e) {
      var i = gi.createElementNS
        ? gi.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : gi.createElement(t);
      return i && i.style ? i : gi.createElement(t);
    },
    Re = function s(t, e, i) {
      var r = getComputedStyle(t);
      return (
        r[e] ||
        r.getPropertyValue(e.replace(Ls, "-$1").toLowerCase()) ||
        r.getPropertyValue(e) ||
        (!i && s(t, fr(e) || e, 1)) ||
        ""
      );
    },
    Sa = "O,Moz,ms,Ms,Webkit".split(","),
    fr = function (t, e, i) {
      var r = e || Ni,
        n = r.style,
        o = 5;
      if (t in n && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(Sa[o] + t in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Sa[o] : "") + t;
    },
    Is = function () {
      Lu() &&
        window.document &&
        ((_a = window),
        (gi = _a.document),
        (ur = gi.documentElement),
        (Ni = Ns("div") || { style: {} }),
        Ns("div"),
        (pt = fr(pt)),
        (pe = pt + "Origin"),
        (Ni.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (xa = !!fr("perspective")),
        (Rs = de.core.reverting),
        (Ds = 1));
    },
    Ta = function (t) {
      var e = t.ownerSVGElement,
        i = Ns(
          "svg",
          (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        r = t.cloneNode(!0),
        n;
      (r.style.display = "block"), i.appendChild(r), ur.appendChild(i);
      try {
        n = r.getBBox();
      } catch (o) {}
      return i.removeChild(r), ur.removeChild(i), n;
    },
    Ca = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    },
    Ea = function (t) {
      var e, i;
      try {
        e = t.getBBox();
      } catch (r) {
        (e = Ta(t)), (i = 1);
      }
      return (
        (e && (e.width || e.height)) || i || (e = Ta(t)),
        e && !e.width && !e.x && !e.y
          ? {
              x: +Ca(t, ["x", "cx", "x1"]) || 0,
              y: +Ca(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : e
      );
    },
    ka = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ea(t));
    },
    Fi = function (t, e) {
      if (e) {
        var i = t.style,
          r;
        e in ei && e !== pe && (e = pt),
          i.removeProperty
            ? ((r = e.substr(0, 2)),
              (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
              i.removeProperty(
                r === "--" ? e : e.replace(Ls, "-$1").toLowerCase()
              ))
            : i.removeAttribute(e);
      }
    },
    mi = function (t, e, i, r, n, o) {
      var a = new fe(t._pt, e, i, 0, 1, o ? ya : va);
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
    },
    Pa = { deg: 1, rad: 1, turn: 1 },
    Gu = { grid: 1, flex: 1 },
    vi = function s(t, e, i, r) {
      var n = parseFloat(i) || 0,
        o = (i + "").trim().substr((n + "").length) || "px",
        a = Ni.style,
        l = zu.test(e),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        d = r === "px",
        h = r === "%",
        _,
        p,
        m,
        w;
      if (r === o || !n || Pa[r] || Pa[o]) return n;
      if (
        (o !== "px" && !d && (n = s(t, e, i, "px")),
        (w = t.getCTM && ka(t)),
        (h || o === "%") && (ei[e] || ~e.indexOf("adius")))
      )
        return (
          (_ = w ? t.getBBox()[l ? "width" : "height"] : t[c]),
          wt(h ? (n / _) * f : (n / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = f + (d ? o : r)),
        (p =
          (r !== "rem" && ~e.indexOf("adius")) ||
          (r === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        w && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === gi || !p.appendChild) && (p = gi.body),
        (m = p._gsap),
        m && h && m.width && l && m.time === xe.time && !m.uncache)
      )
        return wt((n / m.width) * f);
      if (h && (e === "height" || e === "width")) {
        var b = t.style[e];
        (t.style[e] = f + r), (_ = t[c]), b ? (t.style[e] = b) : Fi(t, e);
      } else
        (h || o === "%") &&
          !Gu[Re(p, "display")] &&
          (a.position = Re(t, "position")),
          p === t && (a.position = "static"),
          p.appendChild(Ni),
          (_ = Ni[c]),
          p.removeChild(Ni),
          (a.position = "absolute");
      return (
        l && h && ((m = Oi(p)), (m.time = xe.time), (m.width = p[c])),
        wt(d ? (_ * n) / f : _ && n ? (f / _) * n : 0)
      );
    },
    ii = function (t, e, i, r) {
      var n;
      return (
        Ds || Is(),
        e in Ue &&
          e !== "transform" &&
          ((e = Ue[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
        ei[e] && e !== "transform"
          ? ((n = Wr(t, r)),
            (n =
              e !== "transformOrigin"
                ? n[e]
                : n.svg
                ? n.origin
                : Cn(Re(t, pe)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Tn[e] && Tn[e](t, e, i)) ||
                Re(t, e) ||
                Oo(t, e) ||
                (e === "opacity" ? 1 : 0))),
        i && !~(n + "").trim().indexOf(" ") ? vi(t, e, n, i) + i : n
      );
    },
    Ku = function (t, e, i, r) {
      if (!i || i === "none") {
        var n = fr(e, t, 1),
          o = n && Re(t, n, 1);
        o && o !== i
          ? ((e = n), (i = o))
          : e === "borderColor" && (i = Re(t, "borderTopColor"));
      }
      var a = new fe(this._pt, t.style, e, 0, 1, ha),
        l = 0,
        u = 0,
        c,
        f,
        d,
        h,
        _,
        p,
        m,
        w,
        b,
        T,
        v,
        y;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = Re(t, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = t.style[e]),
          (t.style[e] = r),
          (r = Re(t, e) || r),
          p ? (t.style[e] = p) : Fi(t, e)),
        (c = [i, r]),
        ea(c),
        (i = c[0]),
        (r = c[1]),
        (d = i.match(ir) || []),
        (y = r.match(ir) || []),
        y.length)
      ) {
        for (; (f = ir.exec(r)); )
          (m = f[0]),
            (b = r.substring(l, f.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") &&
                (_ = 1),
            m !== (p = d[u++] || "") &&
              ((h = parseFloat(p) || 0),
              (v = p.substr((h + "").length)),
              m.charAt(1) === "=" && (m = rr(h, m) + v),
              (w = parseFloat(m)),
              (T = m.substr((w + "").length)),
              (l = ir.lastIndex - T.length),
              T ||
                ((T = T || at.units[e] || v),
                l === r.length && ((r += T), (a.e += T))),
              v !== T && (h = vi(t, e, p, T) || 0),
              (a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: h,
                c: w - h,
                m: (_ && _ < 4) || e === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = e === "display" && r === "none" ? ya : va;
      return To.test(r) && (a.e = 0), (this._pt = a), a;
    },
    Aa = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Zu = function (t) {
      var e = t.split(" "),
        i = e[0],
        r = e[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((t = i), (i = r), (r = t)),
        (e[0] = Aa[i] || i),
        (e[1] = Aa[r] || r),
        e.join(" ")
      );
    },
    Qu = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t,
          r = i.style,
          n = e.u,
          o = i._gsap,
          a,
          l,
          u;
        if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
        else
          for (n = n.split(","), u = n.length; --u > -1; )
            (a = n[u]),
              ei[a] && ((l = 1), (a = a === "transformOrigin" ? pe : pt)),
              Fi(i, a);
        l &&
          (Fi(i, pt),
          o &&
            (o.svg && i.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Wr(i, 1),
            (o.uncache = 1),
            wa(r)));
      }
    },
    Tn = {
      clearProps: function (t, e, i, r, n) {
        if (n.data !== "isFromStart") {
          var o = (t._pt = new fe(t._pt, e, i, 0, 0, Qu));
          return (o.u = r), (o.pr = -10), (o.tween = n), t._props.push(i), 1;
        }
      },
    },
    Fr = [1, 0, 0, 1, 0, 0],
    Ma = {},
    Oa = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Da = function (t) {
      var e = Re(t, pt);
      return Oa(e) ? Fr : e.substr(7).match(So).map(wt);
    },
    Fs = function (t, e) {
      var i = t._gsap || Oi(t),
        r = t.style,
        n = Da(t),
        o,
        a,
        l,
        u;
      return i.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Fr : n)
        : (n === Fr &&
            !t.offsetParent &&
            t !== ur &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = t.parentNode),
            (!o || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((u = 1), (a = t.nextElementSibling), ur.appendChild(t)),
            (n = Da(t)),
            l ? (r.display = l) : Fi(t, "display"),
            u &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : ur.removeChild(t))),
          e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Ws = function (t, e, i, r, n, o) {
      var a = t._gsap,
        l = n || Fs(t, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        f = a.xOffset || 0,
        d = a.yOffset || 0,
        h = l[0],
        _ = l[1],
        p = l[2],
        m = l[3],
        w = l[4],
        b = l[5],
        T = e.split(" "),
        v = parseFloat(T[0]) || 0,
        y = parseFloat(T[1]) || 0,
        C,
        x,
        S,
        k;
      i
        ? l !== Fr &&
          (x = h * m - _ * p) &&
          ((S = v * (m / x) + y * (-p / x) + (p * b - m * w) / x),
          (k = v * (-_ / x) + y * (h / x) - (h * b - _ * w) / x),
          (v = S),
          (y = k))
        : ((C = Ea(t)),
          (v = C.x + (~T[0].indexOf("%") ? (v / 100) * C.width : v)),
          (y =
            C.y + (~(T[1] || T[0]).indexOf("%") ? (y / 100) * C.height : y))),
        r || (r !== !1 && a.smooth)
          ? ((w = v - u),
            (b = y - c),
            (a.xOffset = f + (w * h + b * p) - w),
            (a.yOffset = d + (w * _ + b * m) - b))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = v),
        (a.yOrigin = y),
        (a.smooth = !!r),
        (a.origin = e),
        (a.originIsAbsolute = !!i),
        (t.style[pe] = "0px 0px"),
        o &&
          (mi(o, a, "xOrigin", u, v),
          mi(o, a, "yOrigin", c, y),
          mi(o, a, "xOffset", f, a.xOffset),
          mi(o, a, "yOffset", d, a.yOffset)),
        t.setAttribute("data-svg-origin", v + " " + y);
    },
    Wr = function (t, e) {
      var i = t._gsap || new sa(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r = t.style,
        n = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = Re(t, pe) || "0",
        c,
        f,
        d,
        h,
        _,
        p,
        m,
        w,
        b,
        T,
        v,
        y,
        C,
        x,
        S,
        k,
        P,
        z,
        A,
        D,
        F,
        H,
        W,
        R,
        $,
        Y,
        g,
        j,
        ut,
        Dt,
        ct,
        Xt;
      return (
        (c = f = d = p = m = w = b = T = v = 0),
        (h = _ = 1),
        (i.svg = !!(t.getCTM && ka(t))),
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
        (x = Fs(t, i.svg)),
        i.svg &&
          (i.uncache
            ? (($ = t.getBBox()),
              (u = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px"),
              (R = ""))
            : (R = !e && t.getAttribute("data-svg-origin")),
          Ws(t, R || u, !!R || i.originIsAbsolute, i.smooth !== !1, x)),
        (y = i.xOrigin || 0),
        (C = i.yOrigin || 0),
        x !== Fr &&
          ((z = x[0]),
          (A = x[1]),
          (D = x[2]),
          (F = x[3]),
          (c = H = x[4]),
          (f = W = x[5]),
          x.length === 6
            ? ((h = Math.sqrt(z * z + A * A)),
              (_ = Math.sqrt(F * F + D * D)),
              (p = z || A ? hr(A, z) * Ii : 0),
              (b = D || F ? hr(D, F) * Ii + p : 0),
              b && (_ *= Math.abs(Math.cos(b * cr))),
              i.svg && ((c -= y - (y * z + C * D)), (f -= C - (y * A + C * F))))
            : ((Xt = x[6]),
              (Dt = x[7]),
              (g = x[8]),
              (j = x[9]),
              (ut = x[10]),
              (ct = x[11]),
              (c = x[12]),
              (f = x[13]),
              (d = x[14]),
              (S = hr(Xt, ut)),
              (m = S * Ii),
              S &&
                ((k = Math.cos(-S)),
                (P = Math.sin(-S)),
                (R = H * k + g * P),
                ($ = W * k + j * P),
                (Y = Xt * k + ut * P),
                (g = H * -P + g * k),
                (j = W * -P + j * k),
                (ut = Xt * -P + ut * k),
                (ct = Dt * -P + ct * k),
                (H = R),
                (W = $),
                (Xt = Y)),
              (S = hr(-D, ut)),
              (w = S * Ii),
              S &&
                ((k = Math.cos(-S)),
                (P = Math.sin(-S)),
                (R = z * k - g * P),
                ($ = A * k - j * P),
                (Y = D * k - ut * P),
                (ct = F * P + ct * k),
                (z = R),
                (A = $),
                (D = Y)),
              (S = hr(A, z)),
              (p = S * Ii),
              S &&
                ((k = Math.cos(S)),
                (P = Math.sin(S)),
                (R = z * k + A * P),
                ($ = H * k + W * P),
                (A = A * k - z * P),
                (W = W * k - H * P),
                (z = R),
                (H = $)),
              m &&
                Math.abs(m) + Math.abs(p) > 359.9 &&
                ((m = p = 0), (w = 180 - w)),
              (h = wt(Math.sqrt(z * z + A * A + D * D))),
              (_ = wt(Math.sqrt(W * W + Xt * Xt))),
              (S = hr(H, W)),
              (b = Math.abs(S) > 2e-4 ? S * Ii : 0),
              (v = ct ? 1 / (ct < 0 ? -ct : ct) : 0)),
          i.svg &&
            ((R = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !Oa(Re(t, pt))),
            R && t.setAttribute("transform", R))),
        Math.abs(b) > 90 &&
          Math.abs(b) < 270 &&
          (n
            ? ((h *= -1),
              (b += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((_ *= -1), (b += b <= 0 ? 180 : -180))),
        (e = e || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!e && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          f -
          ((i.yPercent =
            f &&
            ((!e && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = d + o),
        (i.scaleX = wt(h)),
        (i.scaleY = wt(_)),
        (i.rotation = wt(p) + a),
        (i.rotationX = wt(m) + a),
        (i.rotationY = wt(w) + a),
        (i.skewX = b + a),
        (i.skewY = T + a),
        (i.transformPerspective = v + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
          (r[pe] = Cn(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = at.force3D),
        (i.renderTransform = i.svg ? Ju : xa ? Ra : ju),
        (i.uncache = 0),
        i
      );
    },
    Cn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Hs = function (t, e, i) {
      var r = $t(e);
      return wt(parseFloat(e) + parseFloat(vi(t, "x", i + "px", r))) + r;
    },
    ju = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        Ra(t, e);
    },
    Wi = "0deg",
    Hr = "0px",
    Hi = ") ",
    Ra = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        u = i.rotation,
        c = i.rotationY,
        f = i.rotationX,
        d = i.skewX,
        h = i.skewY,
        _ = i.scaleX,
        p = i.scaleY,
        m = i.transformPerspective,
        w = i.force3D,
        b = i.target,
        T = i.zOrigin,
        v = "",
        y = (w === "auto" && t && t !== 1) || w === !0;
      if (T && (f !== Wi || c !== Wi)) {
        var C = parseFloat(c) * cr,
          x = Math.sin(C),
          S = Math.cos(C),
          k;
        (C = parseFloat(f) * cr),
          (k = Math.cos(C)),
          (o = Hs(b, o, x * k * -T)),
          (a = Hs(b, a, -Math.sin(C) * -T)),
          (l = Hs(b, l, S * k * -T + T));
      }
      m !== Hr && (v += "perspective(" + m + Hi),
        (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
        (y || o !== Hr || a !== Hr || l !== Hr) &&
          (v +=
            l !== Hr || y
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Hi),
        u !== Wi && (v += "rotate(" + u + Hi),
        c !== Wi && (v += "rotateY(" + c + Hi),
        f !== Wi && (v += "rotateX(" + f + Hi),
        (d !== Wi || h !== Wi) && (v += "skew(" + d + ", " + h + Hi),
        (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Hi),
        (b.style[pt] = v || "translate(0, 0)");
    },
    Ju = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        u = i.skewX,
        c = i.skewY,
        f = i.scaleX,
        d = i.scaleY,
        h = i.target,
        _ = i.xOrigin,
        p = i.yOrigin,
        m = i.xOffset,
        w = i.yOffset,
        b = i.forceCSS,
        T = parseFloat(o),
        v = parseFloat(a),
        y,
        C,
        x,
        S,
        k;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= cr),
            (u *= cr),
            (y = Math.cos(l) * f),
            (C = Math.sin(l) * f),
            (x = Math.sin(l - u) * -d),
            (S = Math.cos(l - u) * d),
            u &&
              ((c *= cr),
              (k = Math.tan(u - c)),
              (k = Math.sqrt(1 + k * k)),
              (x *= k),
              (S *= k),
              c &&
                ((k = Math.tan(c)),
                (k = Math.sqrt(1 + k * k)),
                (y *= k),
                (C *= k))),
            (y = wt(y)),
            (C = wt(C)),
            (x = wt(x)),
            (S = wt(S)))
          : ((y = f), (S = d), (C = x = 0)),
        ((T && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
          ((T = vi(h, "x", o, "px")), (v = vi(h, "y", a, "px"))),
        (_ || p || m || w) &&
          ((T = wt(T + _ - (_ * y + p * x) + m)),
          (v = wt(v + p - (_ * C + p * S) + w))),
        (r || n) &&
          ((k = h.getBBox()),
          (T = wt(T + (r / 100) * k.width)),
          (v = wt(v + (n / 100) * k.height))),
        (k =
          "matrix(" +
          y +
          "," +
          C +
          "," +
          x +
          "," +
          S +
          "," +
          T +
          "," +
          v +
          ")"),
        h.setAttribute("transform", k),
        b && (h.style[pt] = k);
    },
    tc = function (t, e, i, r, n) {
      var o = 360,
        a = Lt(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1),
        u = l - r,
        c = r + u + "deg",
        f,
        d;
      return (
        a &&
          ((f = n.split("_")[1]),
          f === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          f === "cw" && u < 0
            ? (u = ((u + o * ma) % o) - ~~(u / o) * o)
            : f === "ccw" && u > 0 && (u = ((u - o * ma) % o) - ~~(u / o) * o)),
        (t._pt = d = new fe(t._pt, e, i, r, u, Iu)),
        (d.e = c),
        (d.u = "deg"),
        t._props.push(i),
        d
      );
    },
    La = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    ec = function (t, e, i) {
      var r = La({}, i._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        _;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[pt] = e),
          (a = Wr(i, 1)),
          Fi(i, pt),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[pt]),
          (o[pt] = e),
          (a = Wr(i, 1)),
          (o[pt] = u));
      for (l in ei)
        (u = r[l]),
          (c = a[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((h = $t(u)),
            (_ = $t(c)),
            (f = h !== _ ? vi(i, l, u, _) : parseFloat(u)),
            (d = parseFloat(c)),
            (t._pt = new fe(t._pt, a, l, f, d - f, zs)),
            (t._pt.u = _ || 0),
            t._props.push(l));
      La(a, r);
    };
  he("padding,margin,Width,Radius", function (s, t) {
    var e = "Top",
      i = "Right",
      r = "Bottom",
      n = "Left",
      o = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (
        a
      ) {
        return t < 2 ? s + a : "border" + a + s;
      });
    Tn[t > 1 ? "border" + s : s] = function (a, l, u, c, f) {
      var d, h;
      if (arguments.length < 4)
        return (
          (d = o.map(function (_) {
            return ii(a, _, u);
          })),
          (h = d.join(" ")),
          h.split(d[0]).length === 5 ? d[0] : h
        );
      (d = (c + "").split(" ")),
        (h = {}),
        o.forEach(function (_, p) {
          return (h[_] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        a.init(l, h, f);
    };
  });
  var za = {
    name: "css",
    register: Is,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, n) {
      var o = this._props,
        a = t.style,
        l = i.vars.startAt,
        u,
        c,
        f,
        d,
        h,
        _,
        p,
        m,
        w,
        b,
        T,
        v,
        y,
        C,
        x,
        S;
      Ds || Is(),
        (this.styles = this.styles || ba(t)),
        (S = this.styles.props),
        (this.tween = i);
      for (p in e)
        if (
          p !== "autoRound" &&
          ((c = e[p]), !(ye[p] && oa(p, e, i, r, t, n)))
        ) {
          if (
            ((h = typeof c),
            (_ = Tn[p]),
            h === "function" && ((c = c.call(i, r, t, n)), (h = typeof c)),
            h === "string" && ~c.indexOf("random(") && (c = Dr(c)),
            _)
          )
            _(this, t, p, c, i) && (x = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (c += ""),
              (pi.lastIndex = 0),
              pi.test(u) || ((m = $t(u)), (w = $t(c))),
              w ? m !== w && (u = vi(t, p, u, w) + w) : m && (c += m),
              this.add(a, "setProperty", u, c, r, n, 0, 0, p),
              o.push(p),
              S.push(p, 0, a[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(i, r, t, n) : l[p]),
                  Lt(u) && ~u.indexOf("random(") && (u = Dr(u)),
                  $t(u + "") ||
                    u === "auto" ||
                    (u += at.units[p] || $t(ii(t, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = ii(t, p)))
                : (u = ii(t, p)),
              (d = parseFloat(u)),
              (b = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              b && (c = c.substr(2)),
              (f = parseFloat(c)),
              p in Ue &&
                (p === "autoAlpha" &&
                  (d === 1 && ii(t, "visibility") === "hidden" && f && (d = 0),
                  S.push("visibility", 0, a.visibility),
                  mi(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = Ue[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (T = p in ei),
              T)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = Re(t, c.substring(4, c.indexOf(")")))),
                  (f = parseFloat(c))),
                v ||
                  ((y = t._gsap),
                  (y.renderTransform && !e.parseTransform) ||
                    Wr(t, e.parseTransform),
                  (C = e.smoothOrigin !== !1 && y.smooth),
                  (v = this._pt =
                    new fe(this._pt, a, pt, 0, 1, y.renderTransform, y, 0, -1)),
                  (v.dep = 1)),
                p === "scale")
              )
                (this._pt = new fe(
                  this._pt,
                  y,
                  "scaleY",
                  y.scaleY,
                  (b ? rr(y.scaleY, b + f) : f) - y.scaleY || 0,
                  zs
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                S.push(pe, 0, a[pe]),
                  (c = Zu(c)),
                  y.svg
                    ? Ws(t, c, 0, C, 0, this)
                    : ((w = parseFloat(c.split(" ")[2]) || 0),
                      w !== y.zOrigin && mi(this, y, "zOrigin", y.zOrigin, w),
                      mi(this, a, p, Cn(u), Cn(c)));
                continue;
              } else if (p === "svgOrigin") {
                Ws(t, c, 1, C, 0, this);
                continue;
              } else if (p in Ma) {
                tc(this, y, p, d, b ? rr(d, b + c) : c);
                continue;
              } else if (p === "smoothOrigin") {
                mi(this, y, "smooth", y.smooth, c);
                continue;
              } else if (p === "force3D") {
                y[p] = c;
                continue;
              } else if (p === "transform") {
                ec(this, c, t);
                continue;
              }
            } else p in a || (p = fr(p) || p);
            if (
              T ||
              ((f || f === 0) && (d || d === 0) && !Nu.test(c) && p in a)
            )
              (m = (u + "").substr((d + "").length)),
                f || (f = 0),
                (w = $t(c) || (p in at.units ? at.units[p] : m)),
                m !== w && (d = vi(t, p, u, w)),
                (this._pt = new fe(
                  this._pt,
                  T ? y : a,
                  p,
                  d,
                  (b ? rr(d, b + f) : f) - d,
                  !T && (w === "px" || p === "zIndex") && e.autoRound !== !1
                    ? Wu
                    : zs
                )),
                (this._pt.u = w || 0),
                m !== w && w !== "%" && ((this._pt.b = u), (this._pt.r = Fu));
            else if (p in a) Ku.call(this, t, p, u, b ? b + c : c);
            else if (p in t) this.add(t, p, u || t[p], b ? b + c : c, r, n);
            else if (p !== "parseTransform") {
              ls(p, c);
              continue;
            }
            T ||
              (p in a
                ? S.push(p, 0, a[p])
                : typeof t[p] == "function"
                ? S.push(p, 2, t[p]())
                : S.push(p, 1, u || t[p])),
              o.push(p);
          }
        }
      x && fa(this);
    },
    render: function (t, e) {
      if (e.tween._time || !Rs())
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      else e.styles.revert();
    },
    get: ii,
    aliases: Ue,
    getSetter: function (t, e, i) {
      var r = Ue[e];
      return (
        r && r.indexOf(",") < 0 && (e = r),
        e in ei && e !== pe && (t._gsap.x || ii(t, "x"))
          ? i && ga === i
            ? e === "scale"
              ? Yu
              : Xu
            : (ga = i || {}) && (e === "scale" ? qu : Vu)
          : t.style && !is(t.style[e])
          ? Hu
          : ~e.indexOf("-")
          ? Bu
          : ks(t, e)
      );
    },
    core: { _removeProperty: Fi, _getMatrix: Fs },
  };
  (de.utils.checkPrefix = fr),
    (de.core.getStyleSaver = ba),
    (function (s, t, e, i) {
      var r = he(s + "," + t + "," + e, function (n) {
        ei[n] = 1;
      });
      he(t, function (n) {
        (at.units[n] = "deg"), (Ma[n] = 1);
      }),
        (Ue[r[13]] = s + "," + t),
        he(i, function (n) {
          var o = n.split(":");
          Ue[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    he(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        at.units[s] = "px";
      }
    ),
    de.registerPlugin(za);
  var st = de.registerPlugin(za) || de;
  st.core.Tween;
  function ic(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(s, i.key, i);
    }
  }
  function rc(s, t, e) {
    return t && ic(s.prototype, t), s;
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
    Na,
    Bi,
    Br,
    Ia,
    ri,
    Fe,
    Fa,
    Wa = function () {
      return (
        Bt ||
        (typeof window != "undefined" &&
          (Bt = window.gsap) &&
          Bt.registerPlugin &&
          Bt)
      );
    },
    Ha = 1,
    pr = [],
    G = [],
    Ge = [],
    Xr = Date.now,
    Bs = function (t, e) {
      return e;
    },
    nc = function () {
      var t = Br.core,
        e = t.bridge || {},
        i = t._scrollers,
        r = t._proxies;
      i.push.apply(i, G),
        r.push.apply(r, Ge),
        (G = i),
        (Ge = r),
        (Bs = function (o, a) {
          return e[o](a);
        });
    },
    bi = function (t, e) {
      return ~Ge.indexOf(t) && Ge[Ge.indexOf(t) + 1][e];
    },
    Yr = function (t) {
      return !!~Ia.indexOf(t);
    },
    ie = function (t, e, i, r, n) {
      return t.addEventListener(e, i, { passive: r !== !1, capture: !!n });
    },
    re = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    kn = "scrollLeft",
    Pn = "scrollTop",
    Xs = function () {
      return (ri && ri.isPressed) || G.cache++;
    },
    An = function (t, e) {
      var i = function r(n) {
        if (n || n === 0) {
          Ha && (Se.history.scrollRestoration = "manual");
          var o = ri && ri.isPressed;
          (n = r.v = Math.round(n) || (ri && ri.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = G.cache),
            o && Bs("ss", n);
        } else
          (e || G.cache !== r.cacheID || Bs("ref")) &&
            ((r.cacheID = G.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (i.offset = 0), t && i;
    },
    ne = {
      s: kn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: An(function (s) {
        return arguments.length
          ? Se.scrollTo(s, Mt.sc())
          : Se.pageXOffset || yi[kn] || wi[kn] || dr[kn] || 0;
      }),
    },
    Mt = {
      s: Pn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: ne,
      sc: An(function (s) {
        return arguments.length
          ? Se.scrollTo(ne.sc(), s)
          : Se.pageYOffset || yi[Pn] || wi[Pn] || dr[Pn] || 0;
      }),
    },
    _e = function (t, e) {
      return (
        ((e && e._ctx && e._ctx.selector) || Bt.utils.toArray)(t)[0] ||
        (typeof t == "string" && Bt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    sc = function (t, e) {
      for (var i = e.length; i--; )
        if (e[i] === t || e[i].contains(t)) return !0;
      return !1;
    },
    xi = function (t, e) {
      var i = e.s,
        r = e.sc;
      Yr(t) && (t = yi.scrollingElement || wi);
      var n = G.indexOf(t),
        o = r === Mt.sc ? 1 : 2;
      !~n && (n = G.push(t) - 1), G[n + o] || ie(t, "scroll", Xs);
      var a = G[n + o],
        l =
          a ||
          (G[n + o] =
            An(bi(t, i), !0) ||
            (Yr(t)
              ? r
              : An(function (u) {
                  return arguments.length ? (t[i] = u) : t[i];
                })));
      return (
        (l.target = t),
        a || (l.smooth = Bt.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ys = function (t, e, i) {
      var r = t,
        n = t,
        o = Xr(),
        a = o,
        l = e || 50,
        u = Math.max(500, l * 3),
        c = function (_, p) {
          var m = Xr();
          p || m - o > l
            ? ((n = r), (r = _), (a = o), (o = m))
            : i
            ? (r += _)
            : (r = n + ((_ - n) / (m - a)) * (o - a));
        },
        f = function () {
          (n = r = i ? 0 : r), (a = o = 0);
        },
        d = function (_) {
          var p = a,
            m = n,
            w = Xr();
          return (
            (_ || _ === 0) && _ !== r && c(_),
            o === a || w - a > u
              ? 0
              : ((r + (i ? m : -m)) / ((i ? w : o) - p)) * 1e3
          );
        };
      return { update: c, reset: f, getVelocity: d };
    },
    qr = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Ba = function (t) {
      var e = Math.max.apply(Math, t),
        i = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(i) ? e : i;
    },
    Xa = function () {
      (Br = Bt.core.globals().ScrollTrigger), Br && Br.core && nc();
    },
    Ya = function (t) {
      return (
        (Bt = t || Wa()),
        !En &&
          Bt &&
          typeof document != "undefined" &&
          document.body &&
          ((Se = window),
          (yi = document),
          (wi = yi.documentElement),
          (dr = yi.body),
          (Ia = [Se, yi, wi, dr]),
          Bt.utils.clamp,
          (Fa = Bt.core.context || function () {}),
          (Bi = "onpointerenter" in dr ? "pointer" : "mouse"),
          (Na = bt.isTouch =
            Se.matchMedia &&
            Se.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Se ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Fe = bt.eventTypes =
            (
              "ontouchstart" in wi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in wi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Ha = 0);
          }, 500),
          Xa(),
          (En = 1)),
        En
      );
    };
  (ne.op = Mt), (G.cache = 0);
  var bt = (function () {
    function s(e) {
      this.init(e);
    }
    var t = s.prototype;
    return (
      (t.init = function (i) {
        En || Ya(Bt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Br || Xa();
        var r = i.tolerance,
          n = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          u = i.debounce,
          c = i.preventDefault,
          f = i.onStop,
          d = i.onStopDelay,
          h = i.ignore,
          _ = i.wheelSpeed,
          p = i.event,
          m = i.onDragStart,
          w = i.onDragEnd,
          b = i.onDrag,
          T = i.onPress,
          v = i.onRelease,
          y = i.onRight,
          C = i.onLeft,
          x = i.onUp,
          S = i.onDown,
          k = i.onChangeX,
          P = i.onChangeY,
          z = i.onChange,
          A = i.onToggleX,
          D = i.onToggleY,
          F = i.onHover,
          H = i.onHoverEnd,
          W = i.onMove,
          R = i.ignoreCheck,
          $ = i.isNormalizer,
          Y = i.onGestureStart,
          g = i.onGestureEnd,
          j = i.onWheel,
          ut = i.onEnable,
          Dt = i.onDisable,
          ct = i.onClick,
          Xt = i.scrollSpeed,
          Zt = i.capture,
          Pt = i.allowClicks,
          le = i.lockAxis,
          Qt = i.onLockAxis;
        (this.target = a = _e(a) || wi),
          (this.vars = i),
          h && (h = Bt.utils.toArray(h)),
          (r = r || 1e-9),
          (n = n || 0),
          (_ = _ || 1),
          (Xt = Xt || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Se.getComputedStyle(dr).lineHeight) || 22);
        var Ci,
          ue,
          ge,
          tt,
          xt,
          me,
          ke,
          E = this,
          Pe = 0,
          oi = 0,
          Ei = i.passive || (!c && i.passive !== !1),
          vt = xi(a, ne),
          ai = xi(a, Mt),
          ki = vt(),
          Zi = ai(),
          It =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Fe[0] === "pointerdown",
          Pi = Yr(a),
          St = a.ownerDocument || yi,
          We = [0, 0, 0],
          Ie = [0, 0, 0],
          li = 0,
          ln = function () {
            return (li = Xr());
          },
          At = function (I, et) {
            return (
              ((E.event = I) && h && sc(I.target, h)) ||
              (et && It && I.pointerType !== "touch") ||
              (R && R(I, et))
            );
          },
          Qn = function () {
            E._vx.reset(), E._vy.reset(), ue.pause(), f && f(E);
          },
          ui = function () {
            var I = (E.deltaX = Ba(We)),
              et = (E.deltaY = Ba(Ie)),
              M = Math.abs(I) >= r,
              B = Math.abs(et) >= r;
            z && (M || B) && z(E, I, et, We, Ie),
              M &&
                (y && E.deltaX > 0 && y(E),
                C && E.deltaX < 0 && C(E),
                k && k(E),
                A && E.deltaX < 0 != Pe < 0 && A(E),
                (Pe = E.deltaX),
                (We[0] = We[1] = We[2] = 0)),
              B &&
                (S && E.deltaY > 0 && S(E),
                x && E.deltaY < 0 && x(E),
                P && P(E),
                D && E.deltaY < 0 != oi < 0 && D(E),
                (oi = E.deltaY),
                (Ie[0] = Ie[1] = Ie[2] = 0)),
              (tt || ge) &&
                (W && W(E),
                ge && (m && ge === 1 && m(E), b && b(E), (ge = 0)),
                (tt = !1)),
              me && !(me = !1) && Qt && Qt(E),
              xt && (j(E), (xt = !1)),
              (Ci = 0);
          },
          Tr = function (I, et, M) {
            (We[M] += I),
              (Ie[M] += et),
              E._vx.update(I),
              E._vy.update(et),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Cr = function (I, et) {
            le &&
              !ke &&
              ((E.axis = ke = Math.abs(I) > Math.abs(et) ? "x" : "y"),
              (me = !0)),
              ke !== "y" && ((We[2] += I), E._vx.update(I, !0)),
              ke !== "x" && ((Ie[2] += et), E._vy.update(et, !0)),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Ai = function (I) {
            if (!At(I, 1)) {
              I = qr(I, c);
              var et = I.clientX,
                M = I.clientY,
                B = et - E.x,
                N = M - E.y,
                X = E.isDragging;
              (E.x = et),
                (E.y = M),
                (X ||
                  ((B || N) &&
                    (Math.abs(E.startX - et) >= n ||
                      Math.abs(E.startY - M) >= n))) &&
                  ((ge = X ? 2 : 1), X || (E.isDragging = !0), Cr(B, N));
            }
          },
          Qi = (E.onPress = function (q) {
            At(q, 1) ||
              (q && q.button) ||
              ((E.axis = ke = null),
              ue.pause(),
              (E.isPressed = !0),
              (q = qr(q)),
              (Pe = oi = 0),
              (E.startX = E.x = q.clientX),
              (E.startY = E.y = q.clientY),
              E._vx.reset(),
              E._vy.reset(),
              ie($ ? a : St, Fe[1], Ai, Ei, !0),
              (E.deltaX = E.deltaY = 0),
              T && T(E));
          }),
          Z = (E.onRelease = function (q) {
            if (!At(q, 1)) {
              re($ ? a : St, Fe[1], Ai, !0);
              var I = !isNaN(E.y - E.startY),
                et = E.isDragging,
                M =
                  et &&
                  (Math.abs(E.x - E.startX) > 3 ||
                    Math.abs(E.y - E.startY) > 3),
                B = qr(q);
              !M &&
                I &&
                (E._vx.reset(),
                E._vy.reset(),
                c &&
                  Pt &&
                  Bt.delayedCall(0.08, function () {
                    if (Xr() - li > 300 && !q.defaultPrevented) {
                      if (q.target.click) q.target.click();
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
                          q.target.dispatchEvent(N);
                      }
                    }
                  })),
                (E.isDragging = E.isGesturing = E.isPressed = !1),
                f && et && !$ && ue.restart(!0),
                ge && ui(),
                w && et && w(E),
                v && v(E, M);
            }
          }),
          ji = function (I) {
            return (
              I.touches &&
              I.touches.length > 1 &&
              (E.isGesturing = !0) &&
              Y(I, E.isDragging)
            );
          },
          He = function () {
            return (E.isGesturing = !1) || g(E);
          },
          Be = function (I) {
            if (!At(I)) {
              var et = vt(),
                M = ai();
              Tr((et - ki) * Xt, (M - Zi) * Xt, 1),
                (ki = et),
                (Zi = M),
                f && ue.restart(!0);
            }
          },
          Xe = function (I) {
            if (!At(I)) {
              (I = qr(I, c)), j && (xt = !0);
              var et =
                (I.deltaMode === 1
                  ? l
                  : I.deltaMode === 2
                  ? Se.innerHeight
                  : 1) * _;
              Tr(I.deltaX * et, I.deltaY * et, 0), f && !$ && ue.restart(!0);
            }
          },
          Ji = function (I) {
            if (!At(I)) {
              var et = I.clientX,
                M = I.clientY,
                B = et - E.x,
                N = M - E.y;
              (E.x = et),
                (E.y = M),
                (tt = !0),
                f && ue.restart(!0),
                (B || N) && Cr(B, N);
            }
          },
          Er = function (I) {
            (E.event = I), F(E);
          },
          ci = function (I) {
            (E.event = I), H(E);
          },
          un = function (I) {
            return At(I) || (qr(I, c) && ct(E));
          };
        (ue = E._dc = Bt.delayedCall(d || 0.25, Qn).pause()),
          (E.deltaX = E.deltaY = 0),
          (E._vx = Ys(0, 50, !0)),
          (E._vy = Ys(0, 50, !0)),
          (E.scrollX = vt),
          (E.scrollY = ai),
          (E.isDragging = E.isGesturing = E.isPressed = !1),
          Fa(this),
          (E.enable = function (q) {
            return (
              E.isEnabled ||
                (ie(Pi ? St : a, "scroll", Xs),
                o.indexOf("scroll") >= 0 &&
                  ie(Pi ? St : a, "scroll", Be, Ei, Zt),
                o.indexOf("wheel") >= 0 && ie(a, "wheel", Xe, Ei, Zt),
                ((o.indexOf("touch") >= 0 && Na) ||
                  o.indexOf("pointer") >= 0) &&
                  (ie(a, Fe[0], Qi, Ei, Zt),
                  ie(St, Fe[2], Z),
                  ie(St, Fe[3], Z),
                  Pt && ie(a, "click", ln, !0, !0),
                  ct && ie(a, "click", un),
                  Y && ie(St, "gesturestart", ji),
                  g && ie(St, "gestureend", He),
                  F && ie(a, Bi + "enter", Er),
                  H && ie(a, Bi + "leave", ci),
                  W && ie(a, Bi + "move", Ji)),
                (E.isEnabled = !0),
                (E.isDragging = E.isGesturing = E.isPressed = tt = ge = !1),
                E._vx.reset(),
                E._vy.reset(),
                (ki = vt()),
                (Zi = ai()),
                q && q.type && Qi(q),
                ut && ut(E)),
              E
            );
          }),
          (E.disable = function () {
            E.isEnabled &&
              (pr.filter(function (q) {
                return q !== E && Yr(q.target);
              }).length || re(Pi ? St : a, "scroll", Xs),
              E.isPressed &&
                (E._vx.reset(), E._vy.reset(), re($ ? a : St, Fe[1], Ai, !0)),
              re(Pi ? St : a, "scroll", Be, Zt),
              re(a, "wheel", Xe, Zt),
              re(a, Fe[0], Qi, Zt),
              re(St, Fe[2], Z),
              re(St, Fe[3], Z),
              re(a, "click", ln, !0),
              re(a, "click", un),
              re(St, "gesturestart", ji),
              re(St, "gestureend", He),
              re(a, Bi + "enter", Er),
              re(a, Bi + "leave", ci),
              re(a, Bi + "move", Ji),
              (E.isEnabled = E.isPressed = E.isDragging = !1),
              Dt && Dt(E));
          }),
          (E.kill = E.revert =
            function () {
              E.disable();
              var q = pr.indexOf(E);
              q >= 0 && pr.splice(q, 1), ri === E && (ri = 0);
            }),
          pr.push(E),
          $ && Yr(a) && (ri = E),
          E.enable(p);
      }),
      rc(s, [
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
  (bt.version = "3.13.0"),
    (bt.create = function (s) {
      return new bt(s);
    }),
    (bt.register = Ya),
    (bt.getAll = function () {
      return pr.slice();
    }),
    (bt.getById = function (s) {
      return pr.filter(function (t) {
        return t.vars.id === s;
      })[0];
    }),
    Wa() && Bt.registerPlugin(bt);
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
    it,
    qs,
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
    Va,
    gr,
    $a,
    $s,
    Ua,
    oe,
    Us,
    Ga,
    Ka,
    Si,
    Gs,
    Ks,
    mr,
    Zs,
    Rn,
    Qs,
    js,
    Ln = 1,
    Gt = Date.now,
    Js = Gt(),
    Le = 0,
    Gr = 0,
    Za = function (t, e, i) {
      var r = Ce(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (i["_" + e + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
    },
    Qa = function (t, e) {
      return e && (!Ce(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    oc = function s() {
      return Gr && requestAnimationFrame(s);
    },
    ja = function () {
      return (Dn = 1);
    },
    Ja = function () {
      return (Dn = 0);
    },
    Ke = function (t) {
      return t;
    },
    Kr = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    tl = function () {
      return typeof window != "undefined";
    },
    el = function () {
      return O || (tl() && (O = window.gsap) && O.registerPlugin && O);
    },
    Xi = function (t) {
      return !!~qs.indexOf(t);
    },
    il = function (t) {
      return (
        (t === "Height" ? Zs : K["inner" + t]) ||
        Te["client" + t] ||
        it["client" + t]
      );
    },
    rl = function (t) {
      return (
        bi(t, "getBoundingClientRect") ||
        (Xi(t)
          ? function () {
              return (Un.width = K.innerWidth), (Un.height = Zs), Un;
            }
          : function () {
              return ni(t);
            })
      );
    },
    ac = function (t, e, i) {
      var r = i.d,
        n = i.d2,
        o = i.a;
      return (o = bi(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (e ? il(n) : t["client" + n]) || 0;
          };
    },
    lc = function (t, e) {
      return !e || ~Ge.indexOf(t)
        ? rl(t)
        : function () {
            return Un;
          };
    },
    Ze = function (t, e) {
      var i = e.s,
        r = e.d2,
        n = e.d,
        o = e.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (o = bi(t, i))
          ? o() - rl(t)()[n]
          : Xi(t)
          ? (Te[i] || it[i]) - il(r)
          : t[i] - t["offset" + r]
      );
    },
    zn = function (t, e) {
      for (var i = 0; i < gr.length; i += 3)
        (!e || ~e.indexOf(gr[i + 1])) && t(gr[i], gr[i + 1], gr[i + 2]);
    },
    Ce = function (t) {
      return typeof t == "string";
    },
    Kt = function (t) {
      return typeof t == "function";
    },
    Zr = function (t) {
      return typeof t == "number";
    },
    Yi = function (t) {
      return typeof t == "object";
    },
    Qr = function (t, e, i) {
      return t && t.progress(e ? 0 : 1) && i && t.pause();
    },
    to = function (t, e) {
      if (t.enabled) {
        var i = t._ctx
          ? t._ctx.add(function () {
              return e(t);
            })
          : e(t);
        i && i.totalTime && (t.callbackAnimation = i);
      }
    },
    vr = Math.abs,
    nl = "left",
    sl = "top",
    eo = "right",
    io = "bottom",
    qi = "width",
    Vi = "height",
    jr = "Right",
    Jr = "Left",
    tn = "Top",
    en = "Bottom",
    kt = "padding",
    ze = "margin",
    yr = "Width",
    ro = "Height",
    Ot = "px",
    Ne = function (t) {
      return K.getComputedStyle(t);
    },
    uc = function (t) {
      var e = Ne(t).position;
      t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
    },
    ol = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    ni = function (t, e) {
      var i =
          e &&
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
      return i && i.progress(0).kill(), r;
    },
    Nn = function (t, e) {
      var i = e.d2;
      return t["offset" + i] || t["client" + i] || 0;
    },
    al = function (t) {
      var e = [],
        i = t.labels,
        r = t.duration(),
        n;
      for (n in i) e.push(i[n] / r);
      return e;
    },
    cc = function (t) {
      return function (e) {
        return O.utils.snap(al(t), e);
      };
    },
    no = function (t) {
      var e = O.utils.snap(t),
        i =
          Array.isArray(t) &&
          t.slice(0).sort(function (r, n) {
            return r - n;
          });
      return i
        ? function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!n) return e(r);
            if (n > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, n, o) {
            o === void 0 && (o = 0.001);
            var a = e(r);
            return !n || Math.abs(a - r) < o || a - r < 0 == n < 0
              ? a
              : e(n < 0 ? r - t : r + t);
          };
    },
    hc = function (t) {
      return function (e, i) {
        return no(al(t))(e, i.direction);
      };
    },
    In = function (t, e, i, r) {
      return i.split(",").forEach(function (n) {
        return t(e, n, r);
      });
    },
    zt = function (t, e, i, r, n) {
      return t.addEventListener(e, i, { passive: !r, capture: !!n });
    },
    Nt = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    Fn = function (t, e, i) {
      (i = i && i.wheelHandler), i && (t(e, "wheel", i), t(e, "touchmove", i));
    },
    ll = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Wn = { toggleActions: "play", anticipatePin: 0 },
    Hn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bn = function (t, e) {
      if (Ce(t)) {
        var i = t.indexOf("="),
          r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))),
          (t =
            r +
            (t in Hn
              ? Hn[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Xn = function (t, e, i, r, n, o, a, l) {
      var u = n.startColor,
        c = n.endColor,
        f = n.fontSize,
        d = n.indent,
        h = n.fontWeight,
        _ = lt.createElement("div"),
        p = Xi(i) || bi(i, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        w = p ? it : i,
        b = t.indexOf("start") !== -1,
        T = b ? u : c,
        v =
          "border-color:" +
          T +
          ";font-size:" +
          f +
          ";color:" +
          T +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
        (m || l || !p) &&
          (v += (r === Mt ? eo : io) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = b),
        _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (_.style.cssText = v),
        (_.innerText = e || e === 0 ? t + "-" + e : t),
        w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_),
        (_._offset = _["offset" + r.op.d2]),
        Yn(_, 0, r, b),
        _
      );
    },
    Yn = function (t, e, i, r) {
      var n = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + o + yr] = 1),
        (n["border" + a + yr] = 0),
        (n[i.p] = e + "px"),
        O.set(t, n);
    },
    U = [],
    so = {},
    rn,
    ul = function () {
      return Gt() - Le > 34 && (rn || (rn = requestAnimationFrame(si)));
    },
    wr = function () {
      (!oe || !oe.isPressed || oe.startX > it.clientWidth) &&
        (G.cache++,
        oe ? rn || (rn = requestAnimationFrame(si)) : si(),
        Le || Ui("scrollStart"),
        (Le = Gt()));
    },
    oo = function () {
      (Ka = K.innerWidth), (Ga = K.innerHeight);
    },
    nn = function (t) {
      G.cache++,
        (t === !0 ||
          (!Ut &&
            !Ua &&
            !lt.fullscreenElement &&
            !lt.webkitFullscreenElement &&
            (!Us ||
              Ka !== K.innerWidth ||
              Math.abs(K.innerHeight - Ga) > K.innerHeight * 0.25))) &&
          Mn.restart(!0);
    },
    $i = {},
    fc = [],
    cl = function s() {
      return Nt(V, "scrollEnd", s) || Ki(!0);
    },
    Ui = function (t) {
      return (
        ($i[t] &&
          $i[t].map(function (e) {
            return e();
          })) ||
        fc
      );
    },
    Ee = [],
    hl = function (t) {
      for (var e = 0; e < Ee.length; e += 5)
        (!t || (Ee[e + 4] && Ee[e + 4].query === t)) &&
          ((Ee[e].style.cssText = Ee[e + 1]),
          Ee[e].getBBox && Ee[e].setAttribute("transform", Ee[e + 2] || ""),
          (Ee[e + 3].uncache = 1));
    },
    ao = function (t, e) {
      var i;
      for (se = 0; se < U.length; se++)
        (i = U[se]),
          i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
      (Rn = !0), e && hl(e), e || Ui("revert");
    },
    fl = function (t, e) {
      G.cache++,
        (e || !ae) &&
          G.forEach(function (i) {
            return Kt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Ce(t) && (K.history.scrollRestoration = Ks = t);
    },
    ae,
    Gi = 0,
    dl,
    dc = function () {
      if (dl !== Gi) {
        var t = (dl = Gi);
        requestAnimationFrame(function () {
          return t === Gi && Ki(!0);
        });
      }
    },
    pl = function () {
      it.appendChild(mr),
        (Zs = (!oe && mr.offsetHeight) || K.innerHeight),
        it.removeChild(mr);
    },
    _l = function (t) {
      return Vr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (e) {
        return (e.style.display = t ? "none" : "block");
      });
    },
    Ki = function (t, e) {
      if (
        ((Te = lt.documentElement),
        (it = lt.body),
        (qs = [K, lt, Te, it]),
        Le && !t && !Rn)
      ) {
        zt(V, "scrollEnd", cl);
        return;
      }
      pl(),
        (ae = V.isRefreshing = !0),
        G.forEach(function (r) {
          return Kt(r) && ++r.cacheID && (r.rec = r());
        });
      var i = Ui("refreshInit");
      $a && V.sort(),
        e || ao(),
        G.forEach(function (r) {
          Kt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
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
        _l(!0),
        U.forEach(function (r) {
          var n = Ze(r.scroller, r._dir),
            o = r.vars.end === "max" || (r._endClamp && r.end > n),
            a = r._startClamp && r.start >= n;
          (o || a) &&
            r.setPositions(
              a ? n - 1 : r.start,
              o ? Math.max(a ? n : r.start + 1, n) : r.end,
              !0
            );
        }),
        _l(!1),
        (Qs = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        G.forEach(function (r) {
          Kt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        fl(Ks, 1),
        Mn.pause(),
        Gi++,
        (ae = 2),
        si(2),
        U.forEach(function (r) {
          return Kt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (ae = V.isRefreshing = !1),
        Ui("refresh");
    },
    lo = 0,
    qn = 1,
    sn,
    si = function (t) {
      if (t === 2 || (!ae && !Rn)) {
        (V.isUpdating = !0), sn && sn.update(0);
        var e = U.length,
          i = Gt(),
          r = i - Js >= 50,
          n = e && U[0].scroll();
        if (
          ((qn = lo > n ? -1 : 1),
          ae || (lo = n),
          r &&
            (Le && !Dn && i - Le > 200 && ((Le = 0), Ui("scrollEnd")),
            (Ur = Js),
            (Js = i)),
          qn < 0)
        ) {
          for (se = e; se-- > 0; ) U[se] && U[se].update(0, r);
          qn = 1;
        } else for (se = 0; se < e; se++) U[se] && U[se].update(0, r);
        V.isUpdating = !1;
      }
      rn = 0;
    },
    uo = [
      nl,
      sl,
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
      qi,
      Vi,
      "boxSizing",
      "max" + yr,
      "max" + ro,
      "position",
      ze,
      kt,
      kt + tn,
      kt + jr,
      kt + en,
      kt + Jr,
    ]),
    pc = function (t, e, i) {
      br(i);
      var r = t._gsap;
      if (r.spacerIsNative) br(r.spacerState);
      else if (t._gsap.swappedIn) {
        var n = e.parentNode;
        n && (n.insertBefore(t, e), n.removeChild(e));
      }
      t._gsap.swappedIn = !1;
    },
    co = function (t, e, i, r) {
      if (!t._gsap.swappedIn) {
        for (var n = uo.length, o = e.style, a = t.style, l; n--; )
          (l = uo[n]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[io] = a[eo] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[qi] = Nn(t, ne) + Ot),
          (o[Vi] = Nn(t, Mt) + Ot),
          (o[kt] = a[ze] = a[sl] = a[nl] = "0"),
          br(r),
          (a[qi] = a["max" + yr] = i[qi]),
          (a[Vi] = a["max" + ro] = i[Vi]),
          (a[kt] = i[kt]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    _c = /([A-Z])/g,
    br = function (t) {
      if (t) {
        var e = t.t.style,
          i = t.length,
          r = 0,
          n,
          o;
        for ((t.t._gsap || O.core.getCache(t.t)).uncache = 1; r < i; r += 2)
          (o = t[r + 1]),
            (n = t[r]),
            o
              ? (e[n] = o)
              : e[n] && e.removeProperty(n.replace(_c, "-$1").toLowerCase());
      }
    },
    $n = function (t) {
      for (var e = Vn.length, i = t.style, r = [], n = 0; n < e; n++)
        r.push(Vn[n], i[Vn[n]]);
      return (r.t = t), r;
    },
    gc = function (t, e, i) {
      for (var r = [], n = t.length, o = i ? 8 : 0, a; o < n; o += 2)
        (a = t[o]), r.push(a, a in e ? e[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    Un = { left: 0, top: 0 },
    gl = function (t, e, i, r, n, o, a, l, u, c, f, d, h, _) {
      Kt(t) && (t = t(l)),
        Ce(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Bn("0" + t.substr(3), i) : 0));
      var p = h ? h.time() : 0,
        m,
        w,
        b;
      if ((h && h.seek(0), isNaN(t) || (t = +t), Zr(t)))
        h &&
          (t = O.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            d,
            t
          )),
          a && Yn(a, i, r, !0);
      else {
        Kt(e) && (e = e(l));
        var T = (t || "0").split(" "),
          v,
          y,
          C,
          x;
        (b = _e(e, l) || it),
          (v = ni(b) || {}),
          (!v || (!v.left && !v.top)) &&
            Ne(b).display === "none" &&
            ((x = b.style.display),
            (b.style.display = "block"),
            (v = ni(b)),
            x ? (b.style.display = x) : b.style.removeProperty("display")),
          (y = Bn(T[0], v[r.d])),
          (C = Bn(T[1] || "0", i)),
          (t = v[r.p] - u[r.p] - c + y + n - C),
          a && Yn(a, C, r, i - C < 20 || (a._isStart && C > 20)),
          (i -= i - C);
      }
      if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
        var S = t + i,
          k = o._isStart;
        (m = "scroll" + r.d2),
          Yn(
            o,
            S,
            r,
            (k && S > 20) ||
              (!k && (f ? Math.max(it[m], Te[m]) : o.parentNode[m]) <= S + 1)
          ),
          f &&
            ((u = ni(a)),
            f && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ot));
      }
      return (
        h &&
          b &&
          ((m = ni(b)),
          h.seek(d),
          (w = ni(b)),
          (h._caScrollDist = m[r.p] - w[r.p]),
          (t = (t / h._caScrollDist) * d)),
        h && h.seek(p),
        h ? t : Math.round(t)
      );
    },
    mc = /(webkit|moz|length|cssText|inset)/i,
    ml = function (t, e, i, r) {
      if (t.parentNode !== e) {
        var n = t.style,
          o,
          a;
        if (e === it) {
          (t._stOrig = n.cssText), (a = Ne(t));
          for (o in a)
            !+o &&
              !mc.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = i), (n.left = r);
        } else n.cssText = t._stOrig;
        (O.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    vl = function (t, e, i) {
      var r = e,
        n = r;
      return function (o) {
        var a = Math.round(t());
        return (
          a !== r &&
            a !== n &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - n) > 3 &&
            ((o = a), i && i()),
          (n = r),
          (r = Math.round(o)),
          r
        );
      };
    },
    Gn = function (t, e, i) {
      var r = {};
      (r[e.p] = "+=" + i), O.set(t, r);
    },
    yl = function (t, e) {
      var i = xi(t, e),
        r = "_scroll" + e.p2,
        n = function o(a, l, u, c, f) {
          var d = o.tween,
            h = l.onComplete,
            _ = {};
          u = u || i();
          var p = vl(i, u, function () {
            d.kill(), (o.tween = 0);
          });
          return (
            (f = (c && f) || 0),
            (c = c || a - u),
            d && d.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[r] = function () {
              return p(u + c * d.ratio + f * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              G.cache++, o.tween && si();
            }),
            (l.onComplete = function () {
              (o.tween = 0), h && h.call(d);
            }),
            (d = o.tween = O.to(t, l)),
            d
          );
        };
      return (
        (t[r] = i),
        (i.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        zt(t, "wheel", i.wheelHandler),
        V.isTouch && zt(t, "touchmove", i.wheelHandler),
        n
      );
    },
    V = (function () {
      function s(e, i) {
        _r ||
          s.register(O) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Gs(this),
          this.init(e, i);
      }
      var t = s.prototype;
      return (
        (t.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Gr)
          ) {
            this.update = this.refresh = this.kill = Ke;
            return;
          }
          i = ol(Ce(i) || Zr(i) || i.nodeType ? { trigger: i } : i, Wn);
          var n = i,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            c = n.onRefresh,
            f = n.scrub,
            d = n.trigger,
            h = n.pin,
            _ = n.pinSpacing,
            p = n.invalidateOnRefresh,
            m = n.anticipatePin,
            w = n.onScrubComplete,
            b = n.onSnapComplete,
            T = n.once,
            v = n.snap,
            y = n.pinReparent,
            C = n.pinSpacer,
            x = n.containerAnimation,
            S = n.fastScrollEnd,
            k = n.preventOverlaps,
            P =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? ne
                : Mt,
            z = !f && f !== 0,
            A = _e(i.scroller || K),
            D = O.core.getCache(A),
            F = Xi(A),
            H =
              ("pinType" in i
                ? i.pinType
                : bi(A, "pinType") || (F && "fixed")) === "fixed",
            W = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            R = z && i.toggleActions.split(" "),
            $ = "markers" in i ? i.markers : Wn.markers,
            Y = F ? 0 : parseFloat(Ne(A)["border" + P.p2 + yr]) || 0,
            g = this,
            j =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(g);
              },
            ut = ac(A, F, P),
            Dt = lc(A, F),
            ct = 0,
            Xt = 0,
            Zt = 0,
            Pt = xi(A, P),
            le,
            Qt,
            Ci,
            ue,
            ge,
            tt,
            xt,
            me,
            ke,
            E,
            Pe,
            oi,
            Ei,
            vt,
            ai,
            ki,
            Zi,
            It,
            Pi,
            St,
            We,
            Ie,
            li,
            ln,
            At,
            Qn,
            ui,
            Tr,
            Cr,
            Ai,
            Qi,
            Z,
            ji,
            He,
            Be,
            Xe,
            Ji,
            Er,
            ci;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = P),
            (m *= 45),
            (g.scroller = A),
            (g.scroll = x ? x.time.bind(x) : Pt),
            (ue = Pt()),
            (g.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              (($a = 1), i.refreshPriority === -9999 && (sn = g)),
            (D.tweenScroll = D.tweenScroll || {
              top: yl(A, Mt),
              left: yl(A, ne),
            }),
            (g.tweenTo = le = D.tweenScroll[P.p]),
            (g.scrubDuration = function (M) {
              (ji = Zr(M) && M),
                ji
                  ? Z
                    ? Z.duration(M)
                    : (Z = O.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: ji,
                        paused: !0,
                        onComplete: function () {
                          return w && w(g);
                        },
                      }))
                  : (Z && Z.progress(1).kill(), (Z = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !g.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (g.animation = r.pause()),
              (r.scrollTrigger = g),
              g.scrubDuration(f),
              (Ai = 0),
              l || (l = r.vars.id)),
            v &&
              ((!Yi(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in it.style &&
                O.set(F ? [it, Te] : A, { scrollBehavior: "auto" }),
              G.forEach(function (M) {
                return (
                  Kt(M) &&
                  M.target === (F ? lt.scrollingElement || Te : A) &&
                  (M.smooth = !1)
                );
              }),
              (Ci = Kt(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? cc(r)
                : v.snapTo === "labelsDirectional"
                ? hc(r)
                : v.directional !== !1
                ? function (M, B) {
                    return no(v.snapTo)(M, Gt() - Xt < 500 ? 0 : B.direction);
                  }
                : O.utils.snap(v.snapTo)),
              (He = v.duration || { min: 0.1, max: 2 }),
              (He = Yi(He) ? $r(He.min, He.max) : $r(He, He)),
              (Be = O.delayedCall(v.delay || ji / 2 || 0.1, function () {
                var M = Pt(),
                  B = Gt() - Xt < 500,
                  N = le.tween;
                if (
                  (B || Math.abs(g.getVelocity()) < 10) &&
                  !N &&
                  !Dn &&
                  ct !== M
                ) {
                  var X = (M - tt) / vt,
                    Ft = r && !z ? r.totalProgress() : X,
                    J = B ? 0 : ((Ft - Qi) / (Gt() - Ur)) * 1e3 || 0,
                    Tt = O.utils.clamp(-X, 1 - X, (vr(J / 2) * J) / 0.185),
                    jt = X + (v.inertia === !1 ? 0 : Tt),
                    yt,
                    ft,
                    ot = v,
                    Ye = ot.onStart,
                    _t = ot.onInterrupt,
                    Ae = ot.onComplete;
                  if (
                    ((yt = Ci(jt, g)),
                    Zr(yt) || (yt = jt),
                    (ft = Math.max(0, Math.round(tt + yt * vt))),
                    M <= xt && M >= tt && ft !== M)
                  ) {
                    if (N && !N._initted && N.data <= vr(ft - M)) return;
                    v.inertia === !1 && (Tt = yt - X),
                      le(
                        ft,
                        {
                          duration: He(
                            vr(
                              (Math.max(vr(jt - Ft), vr(yt - Ft)) * 0.185) /
                                J /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: vr(ft - M),
                          onInterrupt: function () {
                            return Be.restart(!0) && _t && _t(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (ct = Pt()),
                              r &&
                                !z &&
                                (Z
                                  ? Z.resetTo(
                                      "totalProgress",
                                      yt,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(yt)),
                              (Ai = Qi =
                                r && !z ? r.totalProgress() : g.progress),
                              b && b(g),
                              Ae && Ae(g);
                          },
                        },
                        M,
                        Tt * vt,
                        ft - M - Tt * vt
                      ),
                      Ye && Ye(g, le.tween);
                  }
                } else g.isActive && ct !== M && Be.restart(!0);
              }).pause())),
            l && (so[l] = g),
            (d = g.trigger = _e(d || (h !== !0 && h))),
            (ci = d && d._gsap && d._gsap.stRevert),
            ci && (ci = ci(g)),
            (h = h === !0 ? d : _e(h)),
            Ce(a) && (a = { targets: d, className: a }),
            h &&
              (_ === !1 ||
                _ === ze ||
                (_ =
                  !_ &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Ne(h.parentNode).display === "flex"
                    ? !1
                    : kt),
              (g.pin = h),
              (Qt = O.core.getCache(h)),
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
                  (Qt.pinState = ai = $n(h))),
              i.force3D !== !1 && O.set(h, { force3D: !0 }),
              (g.spacer = It = Qt.spacer),
              (Cr = Ne(h)),
              (ln = Cr[_ + P.os2]),
              (St = O.getProperty(h)),
              (We = O.quickSetter(h, P.a, Ot)),
              co(h, It, Cr),
              (Zi = $n(h))),
            $)
          ) {
            (oi = Yi($) ? ol($, ll) : ll),
              (E = Xn("scroller-start", l, A, P, oi, 0)),
              (Pe = Xn("scroller-end", l, A, P, oi, 0, E)),
              (Pi = E["offset" + P.op.d2]);
            var un = _e(bi(A, "content") || A);
            (me = this.markerStart = Xn("start", l, un, P, oi, Pi, 0, x)),
              (ke = this.markerEnd = Xn("end", l, un, P, oi, Pi, 0, x)),
              x && (Er = O.quickSetter([me, ke], P.a, Ot)),
              !H &&
                !(Ge.length && bi(A, "fixedMarkers") === !0) &&
                (uc(F ? it : A),
                O.set([E, Pe], { force3D: !0 }),
                (Qn = O.quickSetter(E, P.a, Ot)),
                (Tr = O.quickSetter(Pe, P.a, Ot)));
          }
          if (x) {
            var q = x.vars.onUpdate,
              I = x.vars.onUpdateParams;
            x.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), q && q.apply(x, I || []);
            });
          }
          if (
            ((g.previous = function () {
              return U[U.indexOf(g) - 1];
            }),
            (g.next = function () {
              return U[U.indexOf(g) + 1];
            }),
            (g.revert = function (M, B) {
              if (!B) return g.kill(!0);
              var N = M !== !1 || !g.enabled,
                X = Ut;
              N !== g.isReverted &&
                (N &&
                  ((Xe = Math.max(Pt(), g.scroll.rec || 0)),
                  (Zt = g.progress),
                  (Ji = r && r.progress())),
                me &&
                  [me, ke, E, Pe].forEach(function (Ft) {
                    return (Ft.style.display = N ? "none" : "block");
                  }),
                N && ((Ut = g), g.update(N)),
                h &&
                  (!y || !g.isActive) &&
                  (N ? pc(h, It, ai) : co(h, It, Ne(h), At)),
                N || g.update(N),
                (Ut = X),
                (g.isReverted = N));
            }),
            (g.refresh = function (M, B, N, X) {
              if (!((Ut || !g.enabled) && !B)) {
                if (h && M && Le) {
                  zt(s, "scrollEnd", cl);
                  return;
                }
                !ae && j && j(g),
                  (Ut = g),
                  le.tween && !N && (le.tween.kill(), (le.tween = 0)),
                  Z && Z.pause(),
                  p &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Mi) {
                        return Mi.vars.immediateRender && Mi.render(0, !0, !0);
                      })),
                  g.isReverted || g.revert(!0, !0),
                  (g._subPinOffset = !1);
                var Ft = ut(),
                  J = Dt(),
                  Tt = x ? x.duration() : Ze(A, P),
                  jt = vt <= 0.01 || !vt,
                  yt = 0,
                  ft = X || 0,
                  ot = Yi(N) ? N.end : i.end,
                  Ye = i.endTrigger || d,
                  _t = Yi(N)
                    ? N.start
                    : i.start ||
                      (i.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                  Ae = (g.pinnedContainer =
                    i.pinnedContainer && _e(i.pinnedContainer, g)),
                  Qe = (d && Math.max(0, U.indexOf(g))) || 0,
                  Yt = Qe,
                  qt,
                  Jt,
                  tr,
                  jn,
                  te,
                  Rt,
                  je,
                  yo,
                  Fl,
                  cn,
                  Je,
                  hn,
                  Jn;
                for (
                  $ &&
                  Yi(N) &&
                  ((hn = O.getProperty(E, P.p)), (Jn = O.getProperty(Pe, P.p)));
                  Yt-- > 0;

                )
                  (Rt = U[Yt]),
                    Rt.end || Rt.refresh(0, 1) || (Ut = g),
                    (je = Rt.pin),
                    je &&
                      (je === d || je === h || je === Ae) &&
                      !Rt.isReverted &&
                      (cn || (cn = []), cn.unshift(Rt), Rt.revert(!0, !0)),
                    Rt !== U[Yt] && (Qe--, Yt--);
                for (
                  Kt(_t) && (_t = _t(g)),
                    _t = Za(_t, "start", g),
                    tt =
                      gl(
                        _t,
                        d,
                        Ft,
                        P,
                        Pt(),
                        me,
                        E,
                        g,
                        J,
                        Y,
                        H,
                        Tt,
                        x,
                        g._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    Kt(ot) && (ot = ot(g)),
                    Ce(ot) &&
                      !ot.indexOf("+=") &&
                      (~ot.indexOf(" ")
                        ? (ot = (Ce(_t) ? _t.split(" ")[0] : "") + ot)
                        : ((yt = Bn(ot.substr(2), Ft)),
                          (ot = Ce(_t)
                            ? _t
                            : (x
                                ? O.utils.mapRange(
                                    0,
                                    x.duration(),
                                    x.scrollTrigger.start,
                                    x.scrollTrigger.end,
                                    tt
                                  )
                                : tt) + yt),
                          (Ye = d))),
                    ot = Za(ot, "end", g),
                    xt =
                      Math.max(
                        tt,
                        gl(
                          ot || (Ye ? "100% 0" : Tt),
                          Ye,
                          Ft,
                          P,
                          Pt() + yt,
                          ke,
                          Pe,
                          g,
                          J,
                          Y,
                          H,
                          Tt,
                          x,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    yt = 0,
                    Yt = Qe;
                  Yt--;

                )
                  (Rt = U[Yt]),
                    (je = Rt.pin),
                    je &&
                      Rt.start - Rt._pinPush <= tt &&
                      !x &&
                      Rt.end > 0 &&
                      ((qt =
                        Rt.end -
                        (g._startClamp ? Math.max(0, Rt.start) : Rt.start)),
                      ((je === d && Rt.start - Rt._pinPush < tt) ||
                        je === Ae) &&
                        isNaN(_t) &&
                        (yt += qt * (1 - Rt.progress)),
                      je === h && (ft += qt));
                if (
                  ((tt += yt),
                  (xt += yt),
                  g._startClamp && (g._startClamp += yt),
                  g._endClamp &&
                    !ae &&
                    ((g._endClamp = xt || -0.001),
                    (xt = Math.min(xt, Ze(A, P)))),
                  (vt = xt - tt || ((tt -= 0.01) && 0.001)),
                  jt &&
                    (Zt = O.utils.clamp(0, 1, O.utils.normalize(tt, xt, Xe))),
                  (g._pinPush = ft),
                  me &&
                    yt &&
                    ((qt = {}),
                    (qt[P.a] = "+=" + yt),
                    Ae && (qt[P.p] = "-=" + Pt()),
                    O.set([me, ke], qt)),
                  h && !(Qs && g.end >= Ze(A, P)))
                )
                  (qt = Ne(h)),
                    (jn = P === Mt),
                    (tr = Pt()),
                    (Ie = parseFloat(St(P.a)) + ft),
                    !Tt &&
                      xt > 1 &&
                      ((Je = (F ? lt.scrollingElement || Te : A).style),
                      (Je = {
                        style: Je,
                        value: Je["overflow" + P.a.toUpperCase()],
                      }),
                      F &&
                        Ne(it)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                        (Je.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    co(h, It, qt),
                    (Zi = $n(h)),
                    (Jt = ni(h, !0)),
                    (yo = H && xi(A, jn ? ne : Mt)()),
                    _
                      ? ((At = [_ + P.os2, vt + ft + Ot]),
                        (At.t = It),
                        (Yt = _ === kt ? Nn(h, P) + vt + ft : 0),
                        Yt &&
                          (At.push(P.d, Yt + Ot),
                          It.style.flexBasis !== "auto" &&
                            (It.style.flexBasis = Yt + Ot)),
                        br(At),
                        Ae &&
                          U.forEach(function (Mi) {
                            Mi.pin === Ae &&
                              Mi.vars.pinSpacing !== !1 &&
                              (Mi._subPinOffset = !0);
                          }),
                        H && Pt(Xe))
                      : ((Yt = Nn(h, P)),
                        Yt &&
                          It.style.flexBasis !== "auto" &&
                          (It.style.flexBasis = Yt + Ot)),
                    H &&
                      ((te = {
                        top: Jt.top + (jn ? tr - tt : yo) + Ot,
                        left: Jt.left + (jn ? yo : tr - tt) + Ot,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (te[qi] = te["max" + yr] = Math.ceil(Jt.width) + Ot),
                      (te[Vi] = te["max" + ro] = Math.ceil(Jt.height) + Ot),
                      (te[ze] =
                        te[ze + tn] =
                        te[ze + jr] =
                        te[ze + en] =
                        te[ze + Jr] =
                          "0"),
                      (te[kt] = qt[kt]),
                      (te[kt + tn] = qt[kt + tn]),
                      (te[kt + jr] = qt[kt + jr]),
                      (te[kt + en] = qt[kt + en]),
                      (te[kt + Jr] = qt[kt + Jr]),
                      (ki = gc(ai, te, y)),
                      ae && Pt(0)),
                    r
                      ? ((Fl = r._initted),
                        $s(1),
                        r.render(r.duration(), !0, !0),
                        (li = St(P.a) - Ie + vt + ft),
                        (ui = Math.abs(vt - li) > 1),
                        H && ui && ki.splice(ki.length - 2, 2),
                        r.render(0, !0, !0),
                        Fl || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        $s(0))
                      : (li = vt),
                    Je &&
                      (Je.value
                        ? (Je.style["overflow" + P.a.toUpperCase()] = Je.value)
                        : Je.style.removeProperty("overflow-" + P.a));
                else if (d && Pt() && !x)
                  for (Jt = d.parentNode; Jt && Jt !== it; )
                    Jt._pinOffset &&
                      ((tt -= Jt._pinOffset), (xt -= Jt._pinOffset)),
                      (Jt = Jt.parentNode);
                cn &&
                  cn.forEach(function (Mi) {
                    return Mi.revert(!1, !0);
                  }),
                  (g.start = tt),
                  (g.end = xt),
                  (ue = ge = ae ? Xe : Pt()),
                  !x && !ae && (ue < Xe && Pt(Xe), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (Xt = Gt()),
                  Be && ((ct = -1), Be.restart(!0)),
                  (Ut = 0),
                  r &&
                    z &&
                    (r._initted || Ji) &&
                    r.progress() !== Ji &&
                    r.progress(Ji || 0, !0).render(r.time(), !0, !0),
                  (jt || Zt !== g.progress || x || p || (r && !r._initted)) &&
                    (r &&
                      !z &&
                      (r._initted || Zt || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        x && tt < -0.001 && !Zt
                          ? O.utils.normalize(tt, xt, 0)
                          : Zt,
                        !0
                      ),
                    (g.progress = jt || (ue - tt) / vt === Zt ? 0 : Zt)),
                  h && _ && (It._pinOffset = Math.round(g.progress * li)),
                  Z && Z.invalidate(),
                  isNaN(hn) ||
                    ((hn -= O.getProperty(E, P.p)),
                    (Jn -= O.getProperty(Pe, P.p)),
                    Gn(E, P, hn),
                    Gn(me, P, hn - (X || 0)),
                    Gn(Pe, P, Jn),
                    Gn(ke, P, Jn - (X || 0))),
                  jt && !ae && g.update(),
                  c && !ae && !Ei && ((Ei = !0), c(g), (Ei = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((Pt() - ge) / (Gt() - Ur)) * 1e3 || 0;
            }),
            (g.endAnimation = function () {
              Qr(g.callbackAnimation),
                r &&
                  (Z
                    ? Z.progress(1)
                    : r.paused()
                    ? z || Qr(r, g.direction < 0, 1)
                    : Qr(r, r.reversed()));
            }),
            (g.labelToScroll = function (M) {
              return (
                (r &&
                  r.labels &&
                  (tt || g.refresh() || tt) +
                    (r.labels[M] / r.duration()) * vt) ||
                0
              );
            }),
            (g.getTrailing = function (M) {
              var B = U.indexOf(g),
                N = g.direction > 0 ? U.slice(0, B).reverse() : U.slice(B + 1);
              return (
                Ce(M)
                  ? N.filter(function (X) {
                      return X.vars.preventOverlaps === M;
                    })
                  : N
              ).filter(function (X) {
                return g.direction > 0 ? X.end <= tt : X.start >= xt;
              });
            }),
            (g.update = function (M, B, N) {
              if (!(x && !N && !M)) {
                var X = ae === !0 ? Xe : g.scroll(),
                  Ft = M ? 0 : (X - tt) / vt,
                  J = Ft < 0 ? 0 : Ft > 1 ? 1 : Ft || 0,
                  Tt = g.progress,
                  jt,
                  yt,
                  ft,
                  ot,
                  Ye,
                  _t,
                  Ae,
                  Qe;
                if (
                  (B &&
                    ((ge = ue),
                    (ue = x ? Pt() : X),
                    v && ((Qi = Ai), (Ai = r && !z ? r.totalProgress() : J))),
                  m &&
                    h &&
                    !Ut &&
                    !Ln &&
                    Le &&
                    (!J && tt < X + ((X - ge) / (Gt() - Ur)) * m
                      ? (J = 1e-4)
                      : J === 1 &&
                        xt > X + ((X - ge) / (Gt() - Ur)) * m &&
                        (J = 0.9999)),
                  J !== Tt && g.enabled)
                ) {
                  if (
                    ((jt = g.isActive = !!J && J < 1),
                    (yt = !!Tt && Tt < 1),
                    (_t = jt !== yt),
                    (Ye = _t || !!J != !!Tt),
                    (g.direction = J > Tt ? 1 : -1),
                    (g.progress = J),
                    Ye &&
                      !Ut &&
                      ((ft = J && !Tt ? 0 : J === 1 ? 1 : Tt === 1 ? 2 : 3),
                      z &&
                        ((ot =
                          (!_t && R[ft + 1] !== "none" && R[ft + 1]) || R[ft]),
                        (Qe =
                          r &&
                          (ot === "complete" || ot === "reset" || ot in r)))),
                    k &&
                      (_t || Qe) &&
                      (Qe || f || !r) &&
                      (Kt(k)
                        ? k(g)
                        : g.getTrailing(k).forEach(function (tr) {
                            return tr.endAnimation();
                          })),
                    z ||
                      (Z && !Ut && !Ln
                        ? (Z._dp._time - Z._start !== Z._time &&
                            Z.render(Z._dp._time - Z._start),
                          Z.resetTo
                            ? Z.resetTo("totalProgress", J, r._tTime / r._tDur)
                            : ((Z.vars.totalProgress = J),
                              Z.invalidate().restart()))
                        : r && r.totalProgress(J, !!(Ut && (Xt || M)))),
                    h)
                  ) {
                    if ((M && _ && (It.style[_ + P.os2] = ln), !H))
                      We(Kr(Ie + li * J));
                    else if (Ye) {
                      if (
                        ((Ae = !M && J > Tt && xt + 1 > X && X + 1 >= Ze(A, P)),
                        y)
                      )
                        if (!M && (jt || Ae)) {
                          var Yt = ni(h, !0),
                            qt = X - tt;
                          ml(
                            h,
                            it,
                            Yt.top + (P === Mt ? qt : 0) + Ot,
                            Yt.left + (P === Mt ? 0 : qt) + Ot
                          );
                        } else ml(h, It);
                      br(jt || Ae ? ki : Zi),
                        (ui && J < 1 && jt) ||
                          We(Ie + (J === 1 && !Ae ? li : 0));
                    }
                  }
                  v && !le.tween && !Ut && !Ln && Be.restart(!0),
                    a &&
                      (_t || (T && J && (J < 1 || !js))) &&
                      Vr(a.targets).forEach(function (tr) {
                        return tr.classList[jt || T ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !z && !M && o(g),
                    Ye && !Ut
                      ? (z &&
                          (Qe &&
                            (ot === "complete"
                              ? r.pause().totalProgress(1)
                              : ot === "reset"
                              ? r.restart(!0).pause()
                              : ot === "restart"
                              ? r.restart(!0)
                              : r[ot]()),
                          o && o(g)),
                        (_t || !js) &&
                          (u && _t && to(g, u),
                          W[ft] && to(g, W[ft]),
                          T && (J === 1 ? g.kill(!1, 1) : (W[ft] = 0)),
                          _t ||
                            ((ft = J === 1 ? 1 : 3), W[ft] && to(g, W[ft]))),
                        S &&
                          !jt &&
                          Math.abs(g.getVelocity()) > (Zr(S) ? S : 2500) &&
                          (Qr(g.callbackAnimation),
                          Z
                            ? Z.progress(1)
                            : Qr(r, ot === "reverse" ? 1 : !J, 1)))
                      : z && o && !Ut && o(g);
                }
                if (Tr) {
                  var Jt = x ? (X / x.duration()) * (x._caScrollDist || 0) : X;
                  Qn(Jt + (E._isFlipped ? 1 : 0)), Tr(Jt);
                }
                Er && Er((-X / x.duration()) * (x._caScrollDist || 0));
              }
            }),
            (g.enable = function (M, B) {
              g.enabled ||
                ((g.enabled = !0),
                zt(A, "resize", nn),
                F || zt(A, "scroll", wr),
                j && zt(s, "refreshInit", j),
                M !== !1 && ((g.progress = Zt = 0), (ue = ge = ct = Pt())),
                B !== !1 && g.refresh());
            }),
            (g.getTween = function (M) {
              return M && le ? le.tween : Z;
            }),
            (g.setPositions = function (M, B, N, X) {
              if (x) {
                var Ft = x.scrollTrigger,
                  J = x.duration(),
                  Tt = Ft.end - Ft.start;
                (M = Ft.start + (Tt * M) / J), (B = Ft.start + (Tt * B) / J);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: Qa(M, N && !!g._startClamp),
                  end: Qa(B, N && !!g._endClamp),
                },
                X
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (M) {
              if (At && M) {
                var B = At.indexOf(P.d) + 1;
                (At[B] = parseFloat(At[B]) + M + Ot),
                  (At[1] = parseFloat(At[1]) + M + Ot),
                  br(At);
              }
            }),
            (g.disable = function (M, B) {
              if (
                g.enabled &&
                (M !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                B || (Z && Z.pause()),
                (Xe = 0),
                Qt && (Qt.uncache = 1),
                j && Nt(s, "refreshInit", j),
                Be &&
                  (Be.pause(), le.tween && le.tween.kill() && (le.tween = 0)),
                !F)
              ) {
                for (var N = U.length; N--; )
                  if (U[N].scroller === A && U[N] !== g) return;
                Nt(A, "resize", nn), F || Nt(A, "scroll", wr);
              }
            }),
            (g.kill = function (M, B) {
              g.disable(M, B), Z && !B && Z.kill(), l && delete so[l];
              var N = U.indexOf(g);
              N >= 0 && U.splice(N, 1),
                N === se && qn > 0 && se--,
                (N = 0),
                U.forEach(function (X) {
                  return X.scroller === g.scroller && (N = 1);
                }),
                N || ae || (g.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  M && r.revert({ kill: !1 }),
                  B || r.kill()),
                me &&
                  [me, ke, E, Pe].forEach(function (X) {
                    return X.parentNode && X.parentNode.removeChild(X);
                  }),
                sn === g && (sn = 0),
                h &&
                  (Qt && (Qt.uncache = 1),
                  (N = 0),
                  U.forEach(function (X) {
                    return X.pin === h && N++;
                  }),
                  N || (Qt.spacer = 0)),
                i.onKill && i.onKill(g);
            }),
            U.push(g),
            g.enable(!1, !1),
            ci && ci(g),
            r && r.add && !vt)
          ) {
            var et = g.update;
            (g.update = function () {
              (g.update = et), G.cache++, tt || xt || g.refresh();
            }),
              O.delayedCall(0.01, g.update),
              (vt = 0.01),
              (tt = xt = 0);
          } else g.refresh();
          h && dc();
        }),
        (s.register = function (i) {
          return (
            _r ||
              ((O = i || el()),
              tl() && window.document && s.enable(),
              (_r = Gr)),
            _r
          );
        }),
        (s.defaults = function (i) {
          if (i) for (var r in i) Wn[r] = i[r];
          return Wn;
        }),
        (s.disable = function (i, r) {
          (Gr = 0),
            U.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            Nt(K, "wheel", wr),
            Nt(lt, "scroll", wr),
            clearInterval(On),
            Nt(lt, "touchcancel", Ke),
            Nt(it, "touchstart", Ke),
            In(Nt, lt, "pointerdown,touchstart,mousedown", ja),
            In(Nt, lt, "pointerup,touchend,mouseup", Ja),
            Mn.kill(),
            zn(Nt);
          for (var n = 0; n < G.length; n += 3)
            Fn(Nt, G[n], G[n + 1]), Fn(Nt, G[n], G[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((K = window),
            (lt = document),
            (Te = lt.documentElement),
            (it = lt.body),
            O &&
              ((Vr = O.utils.toArray),
              ($r = O.utils.clamp),
              (Gs = O.core.context || Ke),
              ($s = O.core.suppressOverwrites || Ke),
              (Ks = K.history.scrollRestoration || "auto"),
              (lo = K.pageYOffset || 0),
              O.core.globals("ScrollTrigger", s),
              it))
          ) {
            (Gr = 1),
              (mr = document.createElement("div")),
              (mr.style.height = "100vh"),
              (mr.style.position = "absolute"),
              pl(),
              oc(),
              bt.register(O),
              (s.isTouch = bt.isTouch),
              (Si =
                bt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Us = bt.isTouch === 1),
              zt(K, "wheel", wr),
              (qs = [K, lt, Te, it]),
              O.matchMedia
                ? ((s.matchMedia = function (u) {
                    var c = O.matchMedia(),
                      f;
                    for (f in u) c.add(f, u[f]);
                    return c;
                  }),
                  O.addEventListener("matchMediaInit", function () {
                    return ao();
                  }),
                  O.addEventListener("matchMediaRevert", function () {
                    return hl();
                  }),
                  O.addEventListener("matchMedia", function () {
                    Ki(0, 1), Ui("matchMedia");
                  }),
                  O.matchMedia().add("(orientation: portrait)", function () {
                    return oo(), oo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              oo(),
              zt(lt, "scroll", wr);
            var i = it.hasAttribute("style"),
              r = it.style,
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
                a = ni(it),
                Mt.m = Math.round(a.top + Mt.sc()) || 0,
                ne.m = Math.round(a.left + ne.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                i ||
                  (it.setAttribute("style", ""), it.removeAttribute("style")),
                On = setInterval(ul, 250),
                O.delayedCall(0.5, function () {
                  return (Ln = 0);
                }),
                zt(lt, "touchcancel", Ke),
                zt(it, "touchstart", Ke),
                In(zt, lt, "pointerdown,touchstart,mousedown", ja),
                In(zt, lt, "pointerup,touchend,mouseup", Ja),
                Vs = O.utils.checkPrefix("transform"),
                Vn.push(Vs),
                _r = Gt(),
                Mn = O.delayedCall(0.2, Ki).pause(),
                gr = [
                  lt,
                  "visibilitychange",
                  function () {
                    var u = K.innerWidth,
                      c = K.innerHeight;
                    lt.hidden
                      ? ((qa = u), (Va = c))
                      : (qa !== u || Va !== c) && nn();
                  },
                  lt,
                  "DOMContentLoaded",
                  Ki,
                  K,
                  "load",
                  Ki,
                  K,
                  "resize",
                  nn,
                ],
                zn(zt),
                U.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < G.length;
              l += 3
            )
              Fn(Nt, G[l], G[l + 1]), Fn(Nt, G[l], G[l + 2]);
          }
        }),
        (s.config = function (i) {
          "limitCallbacks" in i && (js = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(On)) || ((On = r) && setInterval(ul, r)),
            "ignoreMobileResize" in i &&
              (Us = s.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (zn(Nt) || zn(zt, i.autoRefreshEvents || "none"),
              (Ua = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (i, r) {
          var n = _e(i),
            o = G.indexOf(n),
            a = Xi(n);
          ~o && G.splice(o, a ? 6 : 2),
            r && (a ? Ge.unshift(K, r, it, r, Te, r) : Ge.unshift(n, r));
        }),
        (s.clearMatchMedia = function (i) {
          U.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (i, r, n) {
          var o = (Ce(i) ? _e(i) : i).getBoundingClientRect(),
            a = o[n ? qi : Vi] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < K.innerWidth
            : o.bottom - a > 0 && o.top + a < K.innerHeight;
        }),
        (s.positionInViewport = function (i, r, n) {
          Ce(i) && (i = _e(i));
          var o = i.getBoundingClientRect(),
            a = o[n ? qi : Vi],
            l =
              r == null
                ? a / 2
                : r in Hn
                ? Hn[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return n ? (o.left + l) / K.innerWidth : (o.top + l) / K.innerHeight;
        }),
        (s.killAll = function (i) {
          if (
            (U.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            i !== !0)
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
              var e = Ee.indexOf(t);
              e >= 0 && Ee.splice(e, 5),
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
      return s ? nn(!0) : (_r || V.register()) && Ki(!0);
    }),
    (V.update = function (s) {
      return ++G.cache && si(s === !0 ? 2 : 0);
    }),
    (V.clearScrollMemory = fl),
    (V.maxScroll = function (s, t) {
      return Ze(s, t ? ne : Mt);
    }),
    (V.getScrollFunc = function (s, t) {
      return xi(_e(s), t ? ne : Mt);
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
      var e = $i[s] || ($i[s] = []);
      ~e.indexOf(t) || e.push(t);
    }),
    (V.removeEventListener = function (s, t) {
      var e = $i[s],
        i = e && e.indexOf(t);
      i >= 0 && e.splice(i, 1);
    }),
    (V.batch = function (s, t) {
      var e = [],
        i = {},
        r = t.interval || 0.016,
        n = t.batchMax || 1e9,
        o = function (u, c) {
          var f = [],
            d = [],
            h = O.delayedCall(r, function () {
              c(f, d), (f = []), (d = []);
            }).pause();
          return function (_) {
            f.length || h.restart(!0),
              f.push(_.trigger),
              d.push(_),
              n <= f.length && h.progress(1);
          };
        },
        a;
      for (a in t)
        i[a] =
          a.substr(0, 2) === "on" && Kt(t[a]) && a !== "onRefreshInit"
            ? o(a, t[a])
            : t[a];
      return (
        Kt(n) &&
          ((n = n()),
          zt(V, "refresh", function () {
            return (n = t.batchMax());
          })),
        Vr(s).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), e.push(V.create(u));
        }),
        e
      );
    });
  var wl = function (t, e, i, r) {
      return (
        e > r ? t(r) : e < 0 && t(0),
        i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1
      );
    },
    ho = function s(t, e) {
      e === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            e === !0
              ? "auto"
              : e
              ? "pan-" + e + (bt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Te && s(it, e);
    },
    Kn = { auto: 1, scroll: 1 },
    vc = function (t) {
      var e = t.event,
        i = t.target,
        r = t.axis,
        n = (e.changedTouches ? e.changedTouches[0] : e).target,
        o = n._gsap || O.core.getCache(n),
        a = Gt(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== it &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Kn[(l = Ne(n)).overflowY] || Kn[l.overflowX]));

        )
          n = n.parentNode;
        (o._isScroll =
          n &&
          n !== i &&
          !Xi(n) &&
          (Kn[(l = Ne(n)).overflowY] || Kn[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
    },
    bl = function (t, e, i, r) {
      return bt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (r = r && vc),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && zt(lt, bt.eventTypes[0], Sl, !1, !0);
        },
        onDisable: function () {
          return Nt(lt, bt.eventTypes[0], Sl, !0);
        },
      });
    },
    yc = /(input|label|select|textarea)/i,
    xl,
    Sl = function (t) {
      var e = yc.test(t.target.tagName);
      (e || xl) && ((t._gsapAllow = !0), (xl = e));
    },
    wc = function (t) {
      Yi(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e = t,
        i = e.normalizeScrollX,
        r = e.momentum,
        n = e.allowNestedScroll,
        o = e.onRelease,
        a,
        l,
        u = _e(t.target) || Te,
        c = O.core.globals().ScrollSmoother,
        f = c && c.get(),
        d =
          Si &&
          ((t.content && _e(t.content)) ||
            (f && t.content !== !1 && !f.smooth() && f.content())),
        h = xi(u, Mt),
        _ = xi(u, ne),
        p = 1,
        m =
          (bt.isTouch && K.visualViewport
            ? K.visualViewport.scale * K.visualViewport.width
            : K.outerWidth) / K.innerWidth,
        w = 0,
        b = Kt(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        T,
        v,
        y = bl(u, t.type, !0, n),
        C = function () {
          return (v = !1);
        },
        x = Ke,
        S = Ke,
        k = function () {
          (l = Ze(u, Mt)),
            (S = $r(Si ? 1 : 0, l)),
            i && (x = $r(0, Ze(u, ne))),
            (T = Gi);
        },
        P = function () {
          (d._gsap.y = Kr(parseFloat(d._gsap.y) + h.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        z = function () {
          if (v) {
            requestAnimationFrame(C);
            var $ = Kr(a.deltaY / 2),
              Y = S(h.v - $);
            if (d && Y !== h.v + h.offset) {
              h.offset = Y - h.v;
              var g = Kr((parseFloat(d && d._gsap.y) || 0) - h.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (d._gsap.y = g + "px"),
                (h.cacheID = G.cache),
                si();
            }
            return !0;
          }
          h.offset && P(), (v = !0);
        },
        A,
        D,
        F,
        H,
        W = function () {
          k(),
            A.isActive() &&
              A.vars.scrollY > l &&
              (h() > l ? A.progress(1) && h(l) : A.resetTo("scrollY", l));
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
          (p = Kr(((K.visualViewport && K.visualViewport.scale) || 1) / m)),
            A.pause(),
            R !== p && ho(u, p > 1.01 ? !0 : i ? !1 : "x"),
            (D = _()),
            (F = h()),
            k(),
            (T = Gi);
        }),
        (t.onRelease = t.onGestureStart =
          function (R, $) {
            if ((h.offset && P(), !$)) H.restart(!0);
            else {
              G.cache++;
              var Y = b(),
                g,
                j;
              i &&
                ((g = _()),
                (j = g + (Y * 0.05 * -R.velocityX) / 0.227),
                (Y *= wl(_, g, j, Ze(u, ne))),
                (A.vars.scrollX = x(j))),
                (g = h()),
                (j = g + (Y * 0.05 * -R.velocityY) / 0.227),
                (Y *= wl(h, g, j, Ze(u, Mt))),
                (A.vars.scrollY = S(j)),
                A.invalidate().duration(Y).play(0.01),
                ((Si && A.vars.scrollY >= l) || g >= l - 1) &&
                  O.to({}, { onUpdate: W, duration: Y });
            }
            o && o(R);
          }),
        (t.onWheel = function () {
          A._ts && A.pause(), Gt() - w > 1e3 && ((T = 0), (w = Gt()));
        }),
        (t.onChange = function (R, $, Y, g, j) {
          if (
            (Gi !== T && k(),
            $ && i && _(x(g[2] === $ ? D + (R.startX - R.x) : _() + $ - g[1])),
            Y)
          ) {
            h.offset && P();
            var ut = j[2] === Y,
              Dt = ut ? F + R.startY - R.y : h() + Y - j[1],
              ct = S(Dt);
            ut && Dt !== ct && (F += ct - Dt), h(ct);
          }
          (Y || $) && si();
        }),
        (t.onEnable = function () {
          ho(u, i ? !1 : "x"),
            V.addEventListener("refresh", W),
            zt(K, "resize", W),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = _.smooth = !1)),
            y.enable();
        }),
        (t.onDisable = function () {
          ho(u, !0),
            Nt(K, "resize", W),
            V.removeEventListener("refresh", W),
            y.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (a = new bt(t)),
        (a.iOS = Si),
        Si && !h() && h(1),
        Si && O.ticker.add(Ke),
        (H = a._dc),
        (A = O.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: vl(h, h(), function () {
              return A.pause();
            }),
          },
          onUpdate: si,
          onComplete: H.vars.onComplete,
        })),
        a
      );
    };
  (V.sort = function (s) {
    if (Kt(s)) return U.sort(s);
    var t = K.pageYOffset || 0;
    return (
      V.getAll().forEach(function (e) {
        return (e._sortY = e.trigger
          ? t + e.trigger.getBoundingClientRect().top
          : e.start + K.innerHeight);
      }),
      U.sort(
        s ||
          function (e, i) {
            return (
              (e.vars.refreshPriority || 0) * -1e6 +
              (e.vars.containerAnimation ? 1e6 : e._sortY) -
              ((i.vars.containerAnimation ? 1e6 : i._sortY) +
                (i.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (V.observe = function (s) {
      return new bt(s);
    }),
    (V.normalizeScroll = function (s) {
      if (typeof s == "undefined") return oe;
      if (s === !0 && oe) return oe.enable();
      if (s === !1) {
        oe && oe.kill(), (oe = s);
        return;
      }
      var t = s instanceof bt ? s : wc(s);
      return (
        oe && oe.target === t.target && oe.kill(), Xi(t.target) && (oe = t), t
      );
    }),
    (V.core = {
      _getVelocityProp: Ys,
      _inputObserver: bl,
      _scrollers: G,
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
    el() && O.registerPlugin(V);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let on,
    xr,
    fo,
    bc = () => fo || an.register(window.gsap),
    Tl = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Zn = (s) =>
      typeof s == "string"
        ? Zn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    Cl = (s) => Zn(s).filter((t) => t instanceof HTMLElement),
    po = [],
    _o = function () {},
    xc = /\s+/g,
    El = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    kl = { left: 0, top: 0, width: 0, height: 0 },
    Pl = (s, t) => {
      if (t) {
        let e = new Set(s.join("").match(t) || po),
          i = s.length,
          r,
          n,
          o,
          a;
        if (e.size)
          for (; --i > -1; ) {
            n = s[i];
            for (o of e)
              if (o.startsWith(n) && o.length > n.length) {
                for (
                  r = 0, a = n;
                  o.startsWith((a += s[i + ++r])) && a.length < o.length;

                );
                if (r && a.length === o.length) {
                  (s[i] = o), s.splice(i + 1, r);
                  break;
                }
              }
          }
      }
      return s;
    },
    Al = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Sr = (s, t, e) =>
      t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, e),
    go = (s, t, e) => {
      let i = t[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t,
        a = s === "line" ? "block" : "inline-block",
        l = i.indexOf("++") > -1,
        u = (c) => {
          let f = document.createElement(r),
            d = e.length + 1;
          return (
            i && (f.className = i + (l ? " " + i + d : "")),
            o && f.style.setProperty("--" + s, d + ""),
            n !== "none" && f.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((f.style.position = "relative"), (f.style.display = a)),
            (f.textContent = c),
            e.push(f),
            f
          );
        };
      return l && (i = i.replace("++", "")), (u.collection = e), u;
    },
    Sc = (s, t, e, i) => {
      let r = go("line", e, i),
        n = window.getComputedStyle(s).textAlign || "left";
      return (o, a) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, t[o]); o < a; o++)
          l.appendChild(t[o]);
        l.normalize();
      };
    },
    Ml = (s, t, e, i, r, n, o, a, l, u) => {
      var c;
      let f = Array.from(s.childNodes),
        d = 0,
        { wordDelimiter: h, reduceWhiteSpace: _ = !0, prepareText: p } = t,
        m = s.getBoundingClientRect(),
        w = m,
        b =
          !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        T = 0,
        v = e.collection,
        y,
        C,
        x,
        S,
        k,
        P,
        z,
        A,
        D,
        F,
        H,
        W,
        R,
        $,
        Y,
        g,
        j,
        ut;
      for (
        typeof h == "object"
          ? ((x = h.delimiter || h), (C = h.replaceWith || ""))
          : (C = h === "" ? "" : h || " "),
          y = C !== " ";
        d < f.length;
        d++
      )
        if (((S = f[d]), S.nodeType === 3)) {
          for (
            Y = S.textContent || "",
              _
                ? (Y = Y.replace(xc, " "))
                : b &&
                  (Y = Y.replace(
                    /\n/g,
                    C +
                      `
`
                  )),
              p && (Y = p(Y, s)),
              S.textContent = Y,
              k = C || x ? Y.split(x || C) : Y.match(a) || po,
              j = k[k.length - 1],
              A = y ? j.slice(-1) === " " : !j,
              j || k.pop(),
              w = m,
              z = y ? k[0].charAt(0) === " " : !k[0],
              z && Sr(" ", s, S),
              k[0] || k.shift(),
              Pl(k, l),
              (n && u) || (S.textContent = ""),
              D = 1;
            D <= k.length;
            D++
          )
            if (
              ((g = k[D - 1]),
              !_ &&
                b &&
                g.charAt(0) ===
                  `
` &&
                ((c = S.previousSibling) == null || c.remove(),
                Sr(document.createElement("br"), s, S),
                (g = g.slice(1))),
              !_ && g === "")
            )
              Sr(C, s, S);
            else if (g === " ") s.insertBefore(document.createTextNode(" "), S);
            else {
              if (
                (y && g.charAt(0) === " " && Sr(" ", s, S),
                T && D === 1 && !z && v.indexOf(T.parentNode) > -1
                  ? ((P = v[v.length - 1]),
                    P.appendChild(document.createTextNode(i ? "" : g)))
                  : ((P = e(i ? "" : g)),
                    Sr(P, s, S),
                    T && D === 1 && !z && P.insertBefore(T, P.firstChild)),
                i)
              )
                for (
                  H = Tl
                    ? Pl(
                        [...Tl.segment(g)].map((Dt) => Dt.segment),
                        l
                      )
                    : g.match(a) || po,
                    ut = 0;
                  ut < H.length;
                  ut++
                )
                  P.appendChild(
                    H[ut] === " " ? document.createTextNode(" ") : i(H[ut])
                  );
              if (n && u) {
                if (
                  ((Y = S.textContent = Y.substring(g.length + 1, Y.length)),
                  (F = P.getBoundingClientRect()),
                  F.top > w.top && F.left <= w.left)
                ) {
                  for (W = s.cloneNode(), R = s.childNodes[0]; R && R !== P; )
                    ($ = R), (R = R.nextSibling), W.appendChild($);
                  s.parentNode.insertBefore(W, s), r && Al(W);
                }
                w = F;
              }
              (D < k.length || A) &&
                Sr(
                  D >= k.length ? " " : y && g.slice(-1) === " " ? " " + C : C,
                  s,
                  S
                );
            }
          s.removeChild(S), (T = 0);
        } else
          S.nodeType === 1 &&
            (o && o.indexOf(S) > -1
              ? (v.indexOf(S.previousSibling) > -1 &&
                  v[v.length - 1].appendChild(S),
                (T = S))
              : (Ml(S, t, e, i, r, n, o, a, l, !0), (T = 0)),
            r && Al(S));
    };
  const Ol = class Bl {
    constructor(t, e) {
      (this.isSplit = !1),
        bc(),
        (this.elements = Cl(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = e),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        n = () => {
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
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        _o(this),
        this.split(e);
    }
    split(t) {
      this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
      let {
          type: e = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
          smartWrap: n,
          onSplit: o,
          autoSplit: a = !1,
          specialChars: l,
          mask: u,
        } = this.vars,
        c = e.indexOf("lines") > -1,
        f = e.indexOf("chars") > -1,
        d = e.indexOf("words") > -1,
        h = f && !d && !c,
        _ =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = _ ? new RegExp(_.source + "|" + El.source, "gu") : El,
        m = !!t.ignore && Cl(t.ignore),
        { orig: w, animTime: b, obs: T } = this._data,
        v;
      return (
        (f || d || c) &&
          (this.elements.forEach((y, C) => {
            (w[C] = {
              element: y,
              html: y.innerHTML,
              ariaL: y.getAttribute("aria-label"),
              ariaH: y.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? y.setAttribute("aria-label", (y.textContent || "").trim())
                : i === "hidden" && y.setAttribute("aria-hidden", "true");
            let x = [],
              S = [],
              k = [],
              P = f ? go("char", t, x) : null,
              z = go("word", t, S),
              A,
              D,
              F,
              H;
            if ((Ml(y, t, z, P, h, r && (c || h), m, p, _, !1), c)) {
              let W = Zn(y.childNodes),
                R = Sc(y, W, t, k),
                $,
                Y = [],
                g = 0,
                j = W.map((Dt) =>
                  Dt.nodeType === 1 ? Dt.getBoundingClientRect() : kl
                ),
                ut = kl;
              for (A = 0; A < W.length; A++)
                ($ = W[A]),
                  $.nodeType === 1 &&
                    ($.nodeName === "BR"
                      ? (Y.push($), R(g, A + 1), (g = A + 1), (ut = j[g]))
                      : (A &&
                          j[A].top > ut.top &&
                          j[A].left <= ut.left &&
                          (R(g, A), (g = A)),
                        (ut = j[A])));
              g < A && R(g, A),
                Y.forEach((Dt) => {
                  var ct;
                  return (ct = Dt.parentNode) == null
                    ? void 0
                    : ct.removeChild(Dt);
                });
            }
            if (!d) {
              for (A = 0; A < S.length; A++)
                if (
                  ((D = S[A]),
                  f || !D.nextSibling || D.nextSibling.nodeType !== 3)
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
                  (H = D.nextSibling),
                    H &&
                      H.nodeType === 3 &&
                      ((H.textContent =
                        (D.textContent || "") + (H.textContent || "")),
                      D.remove());
              (S.length = 0), y.normalize();
            }
            this.lines.push(...k), this.words.push(...S), this.chars.push(...x);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((y) => {
                let C = y.cloneNode();
                return (
                  y.replaceWith(C),
                  C.appendChild(y),
                  y.className &&
                    (C.className = y.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (C.style.overflow = "clip"),
                  C
                );
              })
            )),
        (this.isSplit = !0),
        xr &&
          (a
            ? xr.addEventListener("loadingdone", this._split)
            : xr.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (v = o && o(this)) &&
          v.totalTime &&
          (this._data.anim = b ? v.totalTime(b) : v),
        c &&
          a &&
          this.elements.forEach((y, C) => {
            (w[C].width = y.offsetWidth), T && T.observe(y);
          }),
        this
      );
    }
    revert() {
      var t, e;
      let { orig: i, anim: r, obs: n } = this._data;
      return (
        n && n.disconnect(),
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
        xr == null || xr.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (e = (t = this.vars).onRevert) == null || e.call(t, this),
        this
      );
    }
    static create(t, e) {
      return new Bl(t, e);
    }
    static register(t) {
      (on = on || t || window.gsap),
        on && ((Zn = on.utils.toArray), (_o = on.core.context || _o)),
        !fo && window.innerWidth > 0 && ((xr = document.fonts), (fo = !0));
    }
  };
  Ol.version = "3.13.0";
  let an = Ol;
  st.registerPlugin(V, an);
  const Tc = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((t) => {
        const e = t.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = t.getAttribute("data-highlight-scroll-end") || "center 40%",
          r = parseFloat(t.getAttribute("data-highlight-fade")) || 0.2,
          n = parseFloat(t.getAttribute("data-highlight-stagger")) || 0.1;
        new an(t, {
          type: "words, chars",
          onSplit(o) {
            const a = st.context(() => {
              st.timeline({
                scrollTrigger: { scrub: !0, trigger: t, start: e, end: i },
              }).from(o.chars, { autoAlpha: r, stagger: n, ease: "linear" });
            });
            t._gsapContext = a;
          },
        });
      });
    },
    Cc = () => {
      Tc();
    },
    Ec = () => {
      document.querySelectorAll('[data-tabs="wrapper"]').forEach((t) => {
        const e = t.querySelectorAll('[data-tabs="content"]'),
          i = t.querySelectorAll('[data-tabs="visual"]'),
          r = t.dataset.tabsAutoplay === "true",
          n = parseInt(t.dataset.tabsAutoplayDuration) || 5e3;
        let o = null,
          a = null,
          l = !1,
          u = null;
        function c(d) {
          u && u.kill();
          const h = e[d].querySelector('[data-tabs="item-progress"]');
          h &&
            (st.set(h, { scaleX: 0, transformOrigin: "left center" }),
            (u = st.to(h, {
              scaleX: 1,
              duration: n / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!l) {
                  const _ = (d + 1) % e.length;
                  f(_);
                }
              },
            })));
        }
        function f(d) {
          if (l || e[d] === o) return;
          (l = !0), u && u.kill();
          const h = o,
            _ = a,
            p =
              h == null
                ? void 0
                : h.querySelector('[data-tabs="item-progress"]'),
            m = e[d],
            w = i[d],
            b = m.querySelector('[data-tabs="item-progress"]'),
            T = st.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = m), (a = w), (l = !1), r && c(d);
              },
            });
          h &&
            (h.classList.remove("active"),
            h.setAttribute("aria-selected", "false"),
            _ == null || _.classList.remove("active"),
            T.set(p, { transformOrigin: "right center" })
              .to(p, { scaleX: 0, duration: 0.3 }, 0)
              .to(_, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            m.classList.add("active"),
            m.setAttribute("aria-selected", "true"),
            w.classList.add("active"),
            T.fromTo(
              w,
              { autoAlpha: 0, yPercent: 5, scale: 0.99 },
              { autoAlpha: 1, yPercent: 0, scale: 1 },
              0.3
            ).set(b, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        e.forEach((d, h) => {
          d.setAttribute("tabindex", h === 0 ? "0" : "-1"),
            d.setAttribute("role", "tab"),
            d.setAttribute("aria-selected", h === 0 ? "true" : "false"),
            d.setAttribute("id", `tab-${h}`),
            i[h] &&
              (i[h].setAttribute("role", "tabpanel"),
              i[h].setAttribute("aria-labelledby", `tab-${h}`)),
            d.addEventListener("keydown", (_) => {
              let p;
              switch (_.key) {
                case "ArrowRight":
                  _.preventDefault(), (p = (h + 1) % e.length);
                  break;
                case "ArrowLeft":
                  _.preventDefault(), (p = (h - 1 + e.length) % e.length);
                  break;
                case "Home":
                  _.preventDefault(), (p = 0);
                  break;
                case "End":
                  _.preventDefault(), (p = e.length - 1);
                  break;
                default:
                  return;
              }
              e.forEach((m, w) => {
                m.setAttribute("tabindex", w === p ? "0" : "-1");
              }),
                e[p].focus(),
                f(p);
            }),
            d.addEventListener("click", () => {
              d !== o &&
                (e.forEach((_, p) => {
                  _.setAttribute("tabindex", p === h ? "0" : "-1");
                }),
                f(h));
            });
        }),
          t.setAttribute("role", "tablist"),
          t.setAttribute("aria-label", "Hero content tabs"),
          f(0);
      });
    },
    kc = () => {
      Ec();
    };
  st.registerPlugin(V);
  const Pc = () => {
      const s = document.querySelector(".home_hero_tab_component"),
        t = s.querySelector(".home_hero_tab_visual_wrap");
      st.to(t, {
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
    Ac = () => {
      Pc();
    };
  st.registerPlugin(V, an);
  const Mc = () => {
      const s = document.querySelector('[lead-scroll="wrap"]'),
        e = s
          .querySelector('[lead-scroll="visual-component"]')
          .querySelectorAll('[lead-scroll="visual-item"]'),
        i = Array.from(e).map((v) => v.querySelector('[scroll-img="lg"]')),
        r = Array.from(e).map((v) => v.querySelectorAll('[scroll-img="sm"]')),
        n = s.querySelector('[lead-scroll="content-component"]'),
        o = n.querySelectorAll('[lead-scroll="content-header-item"]'),
        a = n.querySelectorAll('[lead-scroll="content-header-item"] p'),
        l = n.querySelectorAll('[lead-scroll="content-info-item"]'),
        u = Array.from(l).map((v) => Array.from(v.querySelectorAll("p"))),
        f = document
          .querySelector('[lead-scroll="progress-wrap"]')
          .querySelectorAll('[lead-scroll="progress-item"]'),
        d = Array.from(f).map((v) =>
          v.querySelector('[lead-scroll="progress-move"]')
        );
      let h = 0,
        _ = !1;
      st.set(i, { autoAlpha: 0 }),
        st.set(r, { autoAlpha: 0 }),
        st.set(i, { scale: 0.8 }),
        st.set(r, { scale: 0.8 });
      const p = (v) => {
          const y = i[v],
            C = r[v];
          y &&
            st.fromTo(
              y,
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
              st.fromTo(
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
        m = (v) => {
          const y = i[v],
            C = r[v];
          y &&
            st.to(y, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            C &&
              C.length > 0 &&
              st.to(C, {
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
        w = (v) => {
          const y = a[v],
            C = new an(y, { type: "lines", mask: "lines" });
          C &&
            st.from(C.lines, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        },
        b = (v) => {
          const y = u[v];
          y &&
            y.length > 0 &&
            st.from(y, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        T = (v) => {
          const y = Math.floor(v * 4),
            C = Math.min(Math.max(y, 0), 3);
          if (C !== h && !_) {
            _ = !0;
            const x = h,
              S = C,
              k = () => {
                f.forEach((P) => {
                  P.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                  e.forEach((P) => {
                    P.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  o.forEach((P) => {
                    P.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  l.forEach((P) => {
                    P.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  });
              };
            k(),
              x >= 0 &&
                x < e.length &&
                (f[x] && f[x].classList.add("is--outgoing"),
                e[x] && e[x].classList.add("is--outgoing"),
                o[x] && o[x].classList.add("is--outgoing"),
                l[x] && l[x].classList.add("is--outgoing"),
                m(x)),
              f[S] && f[S].classList.add("is--incoming"),
              e[S] && e[S].classList.add("is--incoming"),
              o[S] && o[S].classList.add("is--incoming"),
              l[S] && l[S].classList.add("is--incoming"),
              p(S),
              w(S),
              b(S),
              st.delayedCall(0.2, () => {
                k(),
                  f[S] && (f[S].classList.add("is--active"), f[S]),
                  e[S] && (e[S].classList.add("is--active"), e[S]),
                  o[S] && (o[S].classList.add("is--active"), o[S]),
                  l[S] && l[S].classList.add("is--active"),
                  (h = S),
                  (_ = !1);
              });
          }
        };
      f[0] && (f[0].classList.add("is--active"), f[0]),
        e[0] && (e[0].classList.add("is--active"), e[0]),
        o[0] && (o[0].classList.add("is--active"), o[0]),
        l[0] && l[0].classList.add("is--active"),
        p(0),
        w(0),
        b(0),
        st.to(s, {
          scrollTrigger: {
            trigger: s,
            start: "top top",
            end: "+=400%",
            pin: !0,
            scrub: !0,
            markers: !1,
            onUpdate: (v) => {
              T(v.progress);
            },
          },
        }),
        d.forEach((v, y) => {
          st.fromTo(
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
                  const S = C.progress * 4 - y,
                    k = Math.min(Math.max(S, 0), 1);
                  st.set(v, { scaleX: k });
                },
              },
            }
          );
        });
    },
    Oc = () => {
      Mc();
    },
    Dl = () => {
      Cc(), kc(), Ac(), Oc();
    },
    Rl = (s) => document.querySelector(s),
    Dc = (s) => document.querySelectorAll(s),
    Rc = (s, t) => s.classList.add(t),
    Lc = {
      home: Dl,
      about: () => {
        Dc(".team-member").forEach((t) => {
          t.addEventListener("mouseenter", () => {
            var e;
            (e = t.querySelector(".member-bio")) == null ||
              e.classList.add("is-visible");
          }),
            t.addEventListener("mouseleave", () => {
              var e;
              (e = t.querySelector(".member-bio")) == null ||
                e.classList.remove("is-visible");
            });
        });
      },
      contact: () => {
        const s = Rl(".contact-form");
        s &&
          s.addEventListener("submit", (t) => {
            t.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": Dl,
    },
    zc = () => {
      const s = document.body.dataset.route,
        t = Lc[s];
      t ? t() : console.log(`No specific script for route: ${s}`);
    },
    Nc = () => {
      const s = document.querySelector(".page_header");
      document.querySelector(".page_navigation"),
        document.querySelector(".page_nav_contain"),
        document.querySelector("[page-nav='size']"),
        document.querySelector("[page-nav='main']"),
        document.querySelector("[page-nav='brand']");
      const t = document.querySelectorAll("[nav-menu-dropdown]"),
        e = document.querySelectorAll("[nav-menu-item]"),
        i = document.querySelector("[nav-menu='shadow-main']");
      document.querySelector("[nav-menu='shadow-wrap']");
      const r = document.querySelector("[nav-menu='shadow-menu']"),
        n = document.querySelector("[nav-menu='shadow-card']");
      s.offsetWidth, i.offsetWidth;
      const o = new Map();
      e.forEach((w) => {
        const b = w.getBoundingClientRect();
        o.set(w, { width: b.width, height: b.height });
      }),
        (() => {
          const w = t[0];
          if (w) {
            const b = w.getAttribute("nav-menu-dropdown"),
              T = document.querySelector(`[nav-menu-item='${b}']`);
            if (T) {
              const v = w.getBoundingClientRect(),
                y = r.getBoundingClientRect(),
                C = o.get(T);
              if (C) {
                const x = y.left + y.width / 2,
                  k = v.left + v.width / 2 - x,
                  P = C.height + 20,
                  z = C.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${k}px`),
                  n.style.setProperty("--siteMenuHeight", `${P}px`),
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
      const f = (w) => {
          const b = Array.from(e),
            T = b.indexOf(w);
          b.forEach((v, y) => {
            y < T
              ? v.setAttribute("pos", "left")
              : y === T
              ? v.setAttribute("pos", "active")
              : v.setAttribute("pos", "right"),
              v === w
                ? v.setAttribute("status", "active")
                : v.setAttribute("status", "inactive");
          });
        },
        d = (w, b) => {
          u && (clearTimeout(u), (u = null)), c !== w && ((c = w), p(w, b));
        },
        h = () => {
          u = setTimeout(() => {
            s.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              (c = null),
              (u = null);
          }, 100);
        },
        _ = (w, b) => {
          const T = b.bottom;
          return w >= T && w <= T + l;
        },
        p = (w, b) => {
          const T = r.getBoundingClientRect(),
            v = w.getBoundingClientRect(),
            y = o.get(b);
          if (!y) {
            console.warn("No original dimensions found for menu item:", b);
            return;
          }
          const C = T.left + T.width / 2,
            x = v.left + v.width / 2,
            S = y.height + 20,
            k = y.width + 20,
            P = x - C;
          n.style.setProperty("--siteMenuTranslateX", `${P}px`),
            n.style.setProperty("--siteMenuHeight", `${S}px`),
            n.style.setProperty("--siteMenuWidth", `${k}px`),
            n.setAttribute("vis", "visible"),
            s.setAttribute("dropdown-vis", "visible"),
            f(b);
        },
        m = (w) => {
          if (!c) return;
          const b = c.getBoundingClientRect(),
            T = n.getBoundingClientRect(),
            v = w.clientX,
            y = w.clientY,
            C = v >= b.left && v <= b.right && y >= b.top && y <= b.bottom,
            x = v >= T.left && v <= T.right && y >= T.top && y <= T.bottom,
            S =
              _(y, b) &&
              v >= Math.min(b.left, T.left) &&
              v <= Math.max(b.right, T.right);
          C || x || S ? u && (clearTimeout(u), (u = null)) : u || h();
        };
      document.addEventListener("mousemove", m),
        t.forEach((w) => {
          const b = w.getAttribute("nav-menu-dropdown"),
            T = document.querySelector(`[nav-menu-item='${b}']`);
          T
            ? w.addEventListener("mouseenter", () => {
                d(w, T);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${b}`
              );
        }),
        n.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        n.addEventListener("mouseleave", () => {
          h();
        });
    },
    Ic = () => {
      Nc();
    };
  class Fc {
    constructor(t, e) {
      (this.canvas = t),
        (this.ctx = this.canvas.getContext("2d")),
        (this.manager = e),
        (this.wWidth = 0),
        (this.wHeight = 0),
        (this.noiseData = []),
        (this.frame = 0),
        (this.isVisible = !0),
        (this.resizeThrottle = null),
        (this._resizeHandler = this._resizeHandler.bind(this)),
        this._init();
    }
    _createNoise() {
      const t = this.ctx.createImageData(this.wWidth, this.wHeight),
        e = new Uint32Array(t.data.buffer),
        i = e.length;
      for (let r = 0; r < i; r++) Math.random() < 0.5 && (e[r] = 4278190080);
      this.noiseData.push(t);
    }
    _paintNoise() {
      this.isVisible &&
        (this.frame === 6 ? (this.frame = 0) : this.frame++,
        this.ctx.putImageData(this.noiseData[this.frame], 0, 0));
    }
    _setup() {
      (this.wWidth = this.canvas.offsetWidth || window.innerWidth),
        (this.wHeight = this.canvas.offsetHeight || window.innerHeight),
        (this.canvas.width = this.wWidth),
        (this.canvas.height = this.wHeight),
        (this.noiseData = []);
      for (let t = 0; t < 7; t++) this._createNoise();
    }
    _setupIntersectionObserver() {
      "IntersectionObserver" in window &&
        ((this.observer = new IntersectionObserver(
          (t) => {
            t.forEach((e) => {
              this.isVisible = e.isIntersecting;
            });
          },
          { threshold: 0.01 }
        )),
        this.observer.observe(this.canvas));
    }
    _resizeHandler() {
      window.clearTimeout(this.resizeThrottle),
        (this.resizeThrottle = window.setTimeout(() => {
          this._setup();
        }, 200));
    }
    _init() {
      this._setup(),
        this._setupIntersectionObserver(),
        window.addEventListener("resize", this._resizeHandler, !1);
    }
    cleanup() {
      window.removeEventListener("resize", this._resizeHandler, !1),
        window.clearTimeout(this.resizeThrottle),
        this.observer && this.observer.disconnect(),
        (this.noiseData = []);
    }
  }
  class mo {
    constructor(t = {}) {
      (this.instances = []),
        (this.rafId = null),
        (this.lastTime = 0),
        (this.fps = t.fps || 25),
        (this.frameInterval = 1e3 / this.fps),
        (this.isRunning = !1),
        (this._loop = this._loop.bind(this)),
        (this._globalResizeHandler = this._globalResizeHandler.bind(this)),
        (this.resizeThrottle = null),
        window.addEventListener("resize", this._globalResizeHandler, !1);
    }
    add(t) {
      const e = new Fc(t, this);
      return this.instances.push(e), this.isRunning || this._startLoop(), e;
    }
    remove(t) {
      const e = this.instances.indexOf(t);
      e > -1 &&
        (this.instances[e].cleanup(),
        this.instances.splice(e, 1),
        this.instances.length === 0 && this._stopLoop());
    }
    _loop(t) {
      t - this.lastTime >= this.frameInterval &&
        (this.instances.forEach((e) => {
          e.isVisible && e._paintNoise();
        }),
        (this.lastTime = t)),
        this.isRunning && (this.rafId = requestAnimationFrame(this._loop));
    }
    _startLoop() {
      this.isRunning ||
        ((this.isRunning = !0), (this.lastTime = 0), this._loop(0));
    }
    _stopLoop() {
      (this.isRunning = !1),
        this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = null));
    }
    _globalResizeHandler() {
      window.clearTimeout(this.resizeThrottle),
        (this.resizeThrottle = window.setTimeout(() => {
          this.instances.forEach((t) => {
            t._resizeHandler();
          });
        }, 200));
    }
    static initAll(t = {}) {
      const e = document.querySelectorAll("[noise]");
      if (e.length === 0)
        return console.warn("No elements with [noise] attribute found"), null;
      const i = new mo(t),
        r = Array.from(e).map((n) => i.add(n));
      return {
        manager: i,
        instances: r,
        cleanup: () => {
          r.forEach((n) => i.remove(n)),
            window.removeEventListener("resize", i._globalResizeHandler, !1);
        },
      };
    }
    cleanup() {
      this._stopLoop(),
        this.instances.forEach((t) => t.cleanup()),
        (this.instances = []),
        window.removeEventListener("resize", this._globalResizeHandler, !1),
        window.clearTimeout(this.resizeThrottle);
    }
  }
  const Wc = () => {
      const s = document.querySelector(".page_nav_size"),
        t = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (s.classList.add("is--active"), t.classList.add("is--active"))
          : (s.classList.remove("is--active"),
            t.classList.remove("is--active"));
      });
    },
    Hc = () => {
      Wc();
    },
    Bc = () => {
      Ic(), mo.initAll({ fps: 30 }), Hc();
    },
    Xc = () => {
      const s = Rl(".example-component");
      s &&
        (Rc(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Yc = () => {
      Xc();
    };
  var qc = "1.3.4";
  function Ll(s, t, e) {
    return Math.max(s, Math.min(t, e));
  }
  function Vc(s, t, e) {
    return (1 - e) * s + e * t;
  }
  function $c(s, t, e, i) {
    return Vc(s, t, 1 - Math.exp(-e * i));
  }
  function Uc(s, t) {
    return ((s % t) + t) % t;
  }
  var Gc = class {
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
      var e;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const i = Ll(0, this.currentTime / this.duration, 1);
        t = i >= 1;
        const r = t ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = $c(this.value, this.to, this.lerp * 60, s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (t = !0)))
          : ((this.value = this.to), (t = !0));
      t && this.stop(),
        (e = this.onUpdate) == null || e.call(this, this.value, t);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(s, t, { lerp: e, duration: i, easing: r, onStart: n, onUpdate: o }) {
      (this.from = this.value = s),
        (this.to = t),
        (this.lerp = e),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        n == null || n(),
        (this.onUpdate = o);
    }
  };
  function Kc(s, t) {
    let e;
    return function (...i) {
      let r = this;
      clearTimeout(e),
        (e = setTimeout(() => {
          (e = void 0), s.apply(r, i);
        }, t));
    };
  }
  var Zc = class {
      constructor(s, t, { autoResize: e = !0, debounce: i = 250 } = {}) {
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
          e &&
            ((this.debouncedResize = Kc(this.resize, i)),
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
    zl = class {
      constructor() {
        L(this, "events", {});
      }
      emit(s, ...t) {
        var i;
        let e = this.events[s] || [];
        for (let r = 0, n = e.length; r < n; r++)
          (i = e[r]) == null || i.call(e, ...t);
      }
      on(s, t) {
        var e;
        return (
          ((e = this.events[s]) != null && e.push(t)) || (this.events[s] = [t]),
          () => {
            var i;
            this.events[s] =
              (i = this.events[s]) == null ? void 0 : i.filter((r) => t !== r);
          }
        );
      }
      off(s, t) {
        var e;
        this.events[s] =
          (e = this.events[s]) == null ? void 0 : e.filter((i) => t !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    Nl = 100 / 6,
    Ti = { passive: !1 },
    Qc = class {
      constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        L(this, "touchStart", { x: 0, y: 0 });
        L(this, "lastDelta", { x: 0, y: 0 });
        L(this, "window", { width: 0, height: 0 });
        L(this, "emitter", new zl());
        L(this, "onTouchStart", (s) => {
          const { clientX: t, clientY: e } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = t),
            (this.touchStart.y = e),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        L(this, "onTouchMove", (s) => {
          const { clientX: t, clientY: e } = s.targetTouches
              ? s.targetTouches[0]
              : s,
            i = -(t - this.touchStart.x) * this.options.touchMultiplier,
            r = -(e - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = e),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: s });
        });
        L(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        L(this, "onWheel", (s) => {
          let { deltaX: t, deltaY: e, deltaMode: i } = s;
          const r = i === 1 ? Nl : i === 2 ? this.window.width : 1,
            n = i === 1 ? Nl : i === 2 ? this.window.height : 1;
          (t *= r),
            (e *= n),
            (t *= this.options.wheelMultiplier),
            (e *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: e, event: s });
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
    Il = (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
    jc = class {
      constructor({
        wrapper: s = window,
        content: t = document.documentElement,
        eventsTarget: e = s,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: n = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l,
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: f = "vertical",
        gestureOrientation: d = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: _ = 1,
        autoResize: p = !0,
        prevent: m,
        virtualScroll: w,
        overscroll: b = !0,
        autoRaf: T = !1,
        anchors: v = !1,
        autoToggle: y = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: x = !1,
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
        L(this, "animate", new Gc());
        L(this, "emitter", new zl());
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
              e = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(e) ? this.stop() : this.start();
          }
        });
        L(this, "onClick", (s) => {
          const e = s.composedPath().find((i) => {
            var r, n, o;
            return (
              i instanceof HTMLAnchorElement &&
              (((r = i.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#")) ||
                ((n = i.getAttribute("href")) == null
                  ? void 0
                  : n.startsWith("/#")) ||
                ((o = i.getAttribute("href")) == null
                  ? void 0
                  : o.startsWith("./#")))
            );
          });
          if (e) {
            const i = e.getAttribute("href");
            if (i) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let n = `#${i.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(i) &&
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
          const { deltaX: t, deltaY: e, event: i } = s;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: e,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            n = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const o = t === 0 && e === 0;
          if (
            this.options.syncTouch &&
            r &&
            i.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && e === 0) ||
            (this.options.gestureOrientation === "horizontal" && t === 0);
          if (o || l) return;
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((m) => {
              var w, b, T;
              return (
                m instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(m))) ||
                  ((w = m.hasAttribute) == null
                    ? void 0
                    : w.call(m, "data-lenis-prevent")) ||
                  (r &&
                    ((b = m.hasAttribute) == null
                      ? void 0
                      : b.call(m, "data-lenis-prevent-touch"))) ||
                  (n &&
                    ((T = m.hasAttribute) == null
                      ? void 0
                      : T.call(m, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(m, { deltaX: t, deltaY: e })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && n))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let d = e;
          this.options.gestureOrientation === "both"
            ? (d = Math.abs(e) > Math.abs(t) ? e : t)
            : this.options.gestureOrientation === "horizontal" && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && e > 0) ||
                  (this.animatedScroll === this.limit && e < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const h = r && this.options.syncTouch,
            p = r && i.type === "touchend" && Math.abs(d) > 5;
          p && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              Hl(
                { programmatic: !1 },
                h
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
        (window.lenisVersion = qc),
          (!s || s === document.documentElement) && (s = window),
          typeof a == "number" && typeof l != "function"
            ? (l = Il)
            : typeof l == "function" && typeof a != "number" && (a = 1),
          (this.options = {
            wrapper: s,
            content: t,
            eventsTarget: e,
            smoothWheel: i,
            syncTouch: r,
            syncTouchLerp: n,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: d,
            orientation: f,
            touchMultiplier: h,
            wheelMultiplier: _,
            autoResize: p,
            prevent: m,
            virtualScroll: w,
            overscroll: b,
            autoRaf: T,
            anchors: v,
            autoToggle: y,
            allowNestedScroll: C,
            __experimental__naiveDimensions: x,
          }),
          (this.dimensions = new Zc(s, t, { autoResize: p })),
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
          (this.virtualScroll = new Qc(e, {
            touchMultiplier: h,
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
          immediate: e = !1,
          lock: i = !1,
          duration: r = this.options.duration,
          easing: n = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: f,
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
              const h = d.getBoundingClientRect();
              s = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
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
            } else s = Ll(0, s, this.limit);
            if (s === this.targetScroll) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = f != null ? f : {}), e)) {
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
                ? (n = Il)
                : typeof n == "function" && typeof r != "number" && (r = 1),
              this.animate.fromTo(this.animatedScroll, s, {
                duration: r,
                easing: n,
                lerp: o,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (d, h) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = d),
                    h || this.emit(),
                    h &&
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
      checkNestedScroll(s, { deltaX: t, deltaY: e }) {
        var y, C;
        const i = Date.now(),
          r = (y = s._lenis) != null ? y : (s._lenis = {});
        let n, o, a, l, u, c, f, d;
        const h = this.options.gestureOrientation;
        if (i - ((C = r.time) != null ? C : 0) > 2e3) {
          r.time = Date.now();
          const x = window.getComputedStyle(s);
          r.computedStyle = x;
          const S = x.overflowX,
            k = x.overflowY;
          if (
            ((n = ["auto", "overlay", "scroll"].includes(S)),
            (o = ["auto", "overlay", "scroll"].includes(k)),
            (r.hasOverflowX = n),
            (r.hasOverflowY = o),
            (!n && !o) ||
              (h === "vertical" && !o) ||
              (h === "horizontal" && !n))
          )
            return !1;
          (u = s.scrollWidth),
            (c = s.scrollHeight),
            (f = s.clientWidth),
            (d = s.clientHeight),
            (a = u > f),
            (l = c > d),
            (r.isScrollableX = a),
            (r.isScrollableY = l),
            (r.scrollWidth = u),
            (r.scrollHeight = c),
            (r.clientWidth = f),
            (r.clientHeight = d);
        } else
          (a = r.isScrollableX),
            (l = r.isScrollableY),
            (n = r.hasOverflowX),
            (o = r.hasOverflowY),
            (u = r.scrollWidth),
            (c = r.scrollHeight),
            (f = r.clientWidth),
            (d = r.clientHeight);
        if (
          (!n && !o) ||
          (!a && !l) ||
          (h === "vertical" && (!o || !l)) ||
          (h === "horizontal" && (!n || !a))
        )
          return !1;
        let _;
        if (h === "horizontal") _ = "x";
        else if (h === "vertical") _ = "y";
        else {
          const x = t !== 0,
            S = e !== 0;
          x && n && a && (_ = "x"), S && o && l && (_ = "y");
        }
        if (!_) return !1;
        let p, m, w, b, T;
        if (_ === "x")
          (p = s.scrollLeft), (m = u - f), (w = t), (b = n), (T = a);
        else if (_ === "y")
          (p = s.scrollTop), (m = c - d), (w = e), (b = o), (T = l);
        else return !1;
        return (w > 0 ? p < m : p > 0) && b && T;
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
        var t, e;
        const s = this.options.wrapper;
        return this.isHorizontal
          ? (t = s.scrollX) != null
            ? t
            : s.scrollLeft
          : (e = s.scrollY) != null
          ? e
          : s.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Uc(this.animatedScroll, this.limit)
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
  st.registerPlugin(V);
  let vo;
  const Jc = () => {
      (vo = new jc({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)),
        autoRaf: !0,
      })),
        vo.on("scroll", V.update),
        st.ticker.add((s) => {
          vo.raf(s * 1e3);
        }),
        st.ticker.lagSmoothing(0);
    },
    th = () => {
      Jc();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Bc(), Yc(), zc(), th();
  });
});
