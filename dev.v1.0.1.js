var Kc = Object.defineProperty;
var Wl = Object.getOwnPropertySymbols;
var Zc = Object.prototype.hasOwnProperty,
  Qc = Object.prototype.propertyIsEnumerable;
var wo = (_t, Ft, ot) =>
    Ft in _t
      ? Kc(_t, Ft, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ot,
        })
      : (_t[Ft] = ot),
  Bl = (_t, Ft) => {
    for (var ot in Ft || (Ft = {})) Zc.call(Ft, ot) && wo(_t, ot, Ft[ot]);
    if (Wl) for (var ot of Wl(Ft)) Qc.call(Ft, ot) && wo(_t, ot, Ft[ot]);
    return _t;
  };
var z = (_t, Ft, ot) => wo(_t, typeof Ft != "symbol" ? Ft + "" : Ft, ot);
(function (_t) {
  typeof define == "function" && define.amd ? define(_t) : _t();
})(function () {
  "use strict";
  function _t(s) {
    if (s === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return s;
  }
  function Ft(s, t) {
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
   */ var ot = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    er = { duration: 0.5, overwrite: !1, delay: 0 },
    Jn,
    Wt,
    ct,
    Me = 1e8,
    rt = 1 / Me,
    ts = Math.PI * 2,
    Yl = ts / 4,
    Xl = 0,
    bo = Math.sqrt,
    Vl = Math.cos,
    ql = Math.sin,
    Rt = function (t) {
      return typeof t == "string";
    },
    gt = function (t) {
      return typeof t == "function";
    },
    ti = function (t) {
      return typeof t == "number";
    },
    es = function (t) {
      return typeof t == "undefined";
    },
    Xe = function (t) {
      return typeof t == "object";
    },
    ue = function (t) {
      return t !== !1;
    },
    is = function () {
      return typeof window != "undefined";
    },
    hn = function (t) {
      return gt(t) || Rt(t);
    },
    xo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Vt = Array.isArray,
    rs = /(?:-?\.?\d|\.)+/gi,
    To = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    So = /[+-]=-?[.\d]+/,
    Co = /[^,'"\[\]\s]+/gi,
    $l = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ft,
    Ve,
    ss,
    os,
    me = {},
    fn = {},
    Eo,
    ko = function (t) {
      return (fn = nr(t, me)) && fe;
    },
    as = function (t, i) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        i,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    kr = function (t, i) {
      return !i && console.warn(t);
    },
    Po = function (t, i) {
      return (t && (me[t] = i) && fn && (fn[t] = i)) || me;
    },
    Pr = function () {
      return 0;
    },
    Ul = { suppressEvents: !0, isStart: !0, kill: !1 },
    dn = { suppressEvents: !0, kill: !1 },
    Gl = { suppressEvents: !0 },
    ls = {},
    hi = [],
    us = {},
    Mo,
    ve = {},
    cs = {},
    Oo = 30,
    pn = [],
    hs = "",
    fs = function (t) {
      var i = t[0],
        e,
        r;
      if ((Xe(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (r = pn.length; r-- && !pn[r].targetTest(i); );
        e = pn[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new sa(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    Ai = function (t) {
      return t._gsap || fs(Ae(t))[0]._gsap;
    },
    Ao = function (t, i, e) {
      return (e = t[i]) && gt(e)
        ? t[i]()
        : (es(e) && t.getAttribute && t.getAttribute(i)) || e;
    },
    ce = function (t, i) {
      return (t = t.split(",")).forEach(i) || t;
    },
    yt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    St = function (t) {
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
    Kl = function (t, i) {
      for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; );
      return r < e;
    },
    _n = function () {
      var t = hi.length,
        i = hi.slice(0),
        e,
        r;
      for (us = {}, hi.length = 0, e = 0; e < t; e++)
        (r = i[e]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ds = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Do = function (t, i, e, r) {
      hi.length && !Wt && _n(),
        t.render(i, e, !!(Wt && i < 0 && ds(t))),
        hi.length && !Wt && _n();
    },
    Ro = function (t) {
      var i = parseFloat(t);
      return (i || i === 0) && (t + "").match(Co).length < 2
        ? i
        : Rt(t)
        ? t.trim()
        : t;
    },
    zo = function (t) {
      return t;
    },
    ye = function (t, i) {
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
          (t[e] = Xe(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
      return t;
    },
    gn = function (t, i) {
      var e = {},
        r;
      for (r in t) r in i || (e[r] = t[r]);
      return e;
    },
    Mr = function (t) {
      var i = t.parent || ft,
        e = t.keyframes ? Zl(Vt(t.keyframes)) : ye;
      if (ue(t.inherit))
        for (; i; ) e(t, i.vars.defaults), (i = i.parent || i._dp);
      return t;
    },
    Ql = function (t, i) {
      for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; );
      return e < 0;
    },
    No = function (t, i, e, r, n) {
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
    mn = function (t, i, e, r) {
      e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
      var n = i._prev,
        o = i._next;
      n ? (n._next = o) : t[e] === i && (t[e] = o),
        o ? (o._prev = n) : t[r] === i && (t[r] = n),
        (i._next = i._prev = i.parent = null);
    },
    fi = function (t, i) {
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
    jl = function (t) {
      for (var i = t.parent; i && i.parent; )
        (i._dirty = 1), i.totalDuration(), (i = i.parent);
      return t;
    },
    ps = function (t, i, e, r) {
      return (
        t._startAt &&
        (Wt
          ? t._startAt.revert(dn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(i, !0, r))
      );
    },
    Jl = function s(t) {
      return !t || (t._ts && s(t.parent));
    },
    Io = function (t) {
      return t._repeat ? sr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    sr = function (t, i) {
      var e = Math.floor((t = St(t / i)));
      return t && e === t ? e - 1 : e;
    },
    vn = function (t, i) {
      return (
        (t - i._start) * i._ts +
        (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
      );
    },
    yn = function (t) {
      return (t._end = St(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0)
      ));
    },
    wn = function (t, i) {
      var e = t._dp;
      return (
        e &&
          e.smoothChildTiming &&
          t._ts &&
          ((t._start = St(
            e._time -
              (t._ts > 0
                ? i / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)
          )),
          yn(t),
          e._dirty || Di(e, t)),
        t
      );
    },
    Fo = function (t, i) {
      var e;
      if (
        ((i._time ||
          (!i._dur && i._initted) ||
          (i._start < t._time && (i._dur || !i.add))) &&
          ((e = vn(t.rawTime(), i)),
          (!i._dur || Ar(0, i.totalDuration(), e) - i._tTime > rt) &&
            i.render(e, !0)),
        Di(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (e = t; e._dp; )
            e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
        t._zTime = -rt;
      }
    },
    qe = function (t, i, e, r) {
      return (
        i.parent && fi(i),
        (i._start = St(
          (ti(e) ? e : e || t !== ft ? Oe(t, e, i) : t._time) + i._delay
        )),
        (i._end = St(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        No(t, i, "_first", "_last", t._sort ? "_start" : 0),
        _s(i) || (t._recent = i),
        r || Fo(t, i),
        t._ts < 0 && wn(t, t._tTime),
        t
      );
    },
    Wo = function (t, i) {
      return (
        (me.ScrollTrigger || as("scrollTrigger", i)) &&
        me.ScrollTrigger.create(i, t)
      );
    },
    Bo = function (t, i, e, r, n) {
      if ((Ss(t, i, n), !t._initted)) return 1;
      if (
        !e &&
        t._pt &&
        !Wt &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Mo !== be.frame
      )
        return hi.push(t), (t._lazy = [n, r]), 1;
    },
    tu = function s(t) {
      var i = t.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
    },
    _s = function (t) {
      var i = t.data;
      return i === "isFromStart" || i === "isStart";
    },
    eu = function (t, i, e, r) {
      var n = t.ratio,
        o =
          i < 0 ||
          (!i &&
            ((!t._start && tu(t) && !(!t._initted && _s(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !_s(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        c,
        d;
      if (
        (a &&
          t._repeat &&
          ((l = Ar(0, t._tDur, i)),
          (c = sr(l, a)),
          t._yoyo && c & 1 && (o = 1 - o),
          c !== sr(t._tTime, a) &&
            ((n = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== n || Wt || r || t._zTime === rt || (!i && t._zTime))
      ) {
        if (!t._initted && Bo(t, i, r, e, l)) return;
        for (
          d = t._zTime,
            t._zTime = i || (e ? rt : 0),
            e || (e = i && !d),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        i < 0 && ps(t, i, e, !0),
          t._onUpdate && !e && we(t, "onUpdate"),
          l && t._repeat && !e && t.parent && we(t, "onRepeat"),
          (i >= t._tDur || i < 0) &&
            t.ratio === o &&
            (o && fi(t, 1),
            !e &&
              !Wt &&
              (we(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = i);
    },
    iu = function (t, i, e) {
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
        o = St(i) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = n ? (n < 0 ? 1e10 : St(o * (n + 1) + t._rDelay * n)) : o),
        a > 0 && !r && wn(t, (t._tTime = t._tDur * a)),
        t.parent && yn(t),
        e || Di(t.parent, t),
        t
      );
    },
    Ho = function (t) {
      return t instanceof te ? Di(t) : or(t, t._dur);
    },
    ru = { _start: 0, endTime: Pr, totalDuration: Pr },
    Oe = function s(t, i, e) {
      var r = t.labels,
        n = t._recent || ru,
        o = t.duration() >= Me ? n.endTime(!1) : t._dur,
        a,
        l,
        u;
      return Rt(i) && (isNaN(i) || i in r)
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
    Or = function (t, i, e) {
      var r = ti(i[1]),
        n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        o = i[n],
        a,
        l;
      if ((r && (o.duration = i[1]), (o.parent = e), t)) {
        for (a = o, l = e; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = ue(l.vars.inherit) && l.parent);
        (o.immediateRender = ue(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = i[n - 1]);
      }
      return new Ct(i[0], o, i[n + 1]);
    },
    di = function (t, i) {
      return t || t === 0 ? i(t) : i;
    },
    Ar = function (t, i, e) {
      return e < t ? t : e > i ? i : e;
    },
    qt = function (t, i) {
      return !Rt(t) || !(i = $l.exec(t)) ? "" : i[1];
    },
    nu = function (t, i, e) {
      return di(e, function (r) {
        return Ar(t, i, r);
      });
    },
    gs = [].slice,
    Yo = function (t, i) {
      return (
        t &&
        Xe(t) &&
        "length" in t &&
        ((!i && !t.length) || (t.length - 1 in t && Xe(t[0]))) &&
        !t.nodeType &&
        t !== Ve
      );
    },
    su = function (t, i, e) {
      return (
        e === void 0 && (e = []),
        t.forEach(function (r) {
          var n;
          return (Rt(r) && !i) || Yo(r, 1)
            ? (n = e).push.apply(n, Ae(r))
            : e.push(r);
        }) || e
      );
    },
    Ae = function (t, i, e) {
      return ct && !i && ct.selector
        ? ct.selector(t)
        : Rt(t) && !e && (ss || !lr())
        ? gs.call((i || os).querySelectorAll(t), 0)
        : Vt(t)
        ? su(t, e)
        : Yo(t)
        ? gs.call(t, 0)
        : t
        ? [t]
        : [];
    },
    ms = function (t) {
      return (
        (t = Ae(t)[0] || kr("Invalid scope") || {}),
        function (i) {
          var e = t.current || t.nativeElement || t;
          return Ae(
            i,
            e.querySelectorAll
              ? e
              : e === t
              ? kr("Invalid scope") || os.createElement("div")
              : t
          );
        }
      );
    },
    Xo = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Vo = function (t) {
      if (gt(t)) return t;
      var i = Xe(t) ? t : { each: t },
        e = Ri(i.ease),
        r = i.from || 0,
        n = parseFloat(i.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = i.axis,
        c = r,
        d = r;
      return (
        Rt(r)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((c = r[0]), (d = r[1])),
        function (f, h, _) {
          var p = (_ || i).length,
            m = o[p],
            v,
            y,
            x,
            w,
            b,
            C,
            T,
            E,
            k;
          if (!m) {
            if (((k = i.grid === "auto" ? 0 : (i.grid || [1, Me])[1]), !k)) {
              for (
                T = -Me;
                T < (T = _[k++].getBoundingClientRect().left) && k < p;

              );
              k < p && k--;
            }
            for (
              m = o[p] = [],
                v = l ? Math.min(k, p) * c - 0.5 : r % k,
                y = k === Me ? 0 : l ? (p * d) / k - 0.5 : (r / k) | 0,
                T = 0,
                E = Me,
                C = 0;
              C < p;
              C++
            )
              (x = (C % k) - v),
                (w = y - ((C / k) | 0)),
                (m[C] = b =
                  u ? Math.abs(u === "y" ? w : x) : bo(x * x + w * w)),
                b > T && (T = b),
                b < E && (E = b);
            r === "random" && Xo(m),
              (m.max = T - E),
              (m.min = E),
              (m.v = p =
                (parseFloat(i.amount) ||
                  parseFloat(i.each) *
                    (k > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / k
                        : k
                      : Math.max(k, p / k)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (m.b = p < 0 ? n - p : n),
              (m.u = qt(i.amount || i.each) || 0),
              (e = e && p < 0 ? ia(e) : e);
          }
          return (
            (p = (m[f] - m.min) / m.max || 0),
            St(m.b + (e ? e(p) : p) * m.v) + m.u
          );
        }
      );
    },
    vs = function (t) {
      var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (e) {
        var r = St(Math.round(parseFloat(e) / t) * t * i);
        return (r - (r % 1)) / i + (ti(e) ? 0 : qt(e));
      };
    },
    qo = function (t, i) {
      var e = Vt(t),
        r,
        n;
      return (
        !e &&
          Xe(t) &&
          ((r = e = t.radius || Me),
          t.values
            ? ((t = Ae(t.values)), (n = !ti(t[0])) && (r *= r))
            : (t = vs(t.increment))),
        di(
          i,
          e
            ? gt(t)
              ? function (o) {
                  return (n = t(o)), Math.abs(n - o) <= r ? n : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(n ? o.x : o),
                      l = parseFloat(n ? o.y : 0),
                      u = Me,
                      c = 0,
                      d = t.length,
                      f,
                      h;
                    d--;

                  )
                    n
                      ? ((f = t[d].x - a),
                        (h = t[d].y - l),
                        (f = f * f + h * h))
                      : (f = Math.abs(t[d] - a)),
                      f < u && ((u = f), (c = d));
                  return (
                    (c = !r || u <= r ? t[c] : o),
                    n || c === o || ti(o) ? c : c + qt(o)
                  );
                }
            : vs(t)
        )
      );
    },
    $o = function (t, i, e, r) {
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
    ou = function () {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
        i[e] = arguments[e];
      return function (r) {
        return i.reduce(function (n, o) {
          return o(n);
        }, r);
      };
    },
    au = function (t, i) {
      return function (e) {
        return t(parseFloat(e)) + (i || qt(e));
      };
    },
    lu = function (t, i, e) {
      return Go(t, i, 0, 1, e);
    },
    Uo = function (t, i, e) {
      return di(e, function (r) {
        return t[~~i(r)];
      });
    },
    uu = function s(t, i, e) {
      var r = i - t;
      return Vt(t)
        ? Uo(t, s(0, t.length), i)
        : di(e, function (n) {
            return ((r + ((n - t) % r)) % r) + t;
          });
    },
    cu = function s(t, i, e) {
      var r = i - t,
        n = r * 2;
      return Vt(t)
        ? Uo(t, s(0, t.length - 1), i)
        : di(e, function (o) {
            return (o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o);
          });
    },
    Dr = function (t) {
      for (var i = 0, e = "", r, n, o, a; ~(r = t.indexOf("random(", i)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (n = t.substr(r + 7, o - r - 7).match(a ? Co : rs)),
          (e +=
            t.substr(i, r - i) +
            $o(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (i = o + 1);
      return e + t.substr(i, t.length - i);
    },
    Go = function (t, i, e, r, n) {
      var o = i - t,
        a = r - e;
      return di(n, function (l) {
        return e + (((l - t) / o) * a || 0);
      });
    },
    hu = function s(t, i, e, r) {
      var n = isNaN(t + i)
        ? 0
        : function (h) {
            return (1 - h) * t + h * i;
          };
      if (!n) {
        var o = Rt(t),
          a = {},
          l,
          u,
          c,
          d,
          f;
        if ((e === !0 && (r = 1) && (e = null), o))
          (t = { p: t }), (i = { p: i });
        else if (Vt(t) && !Vt(i)) {
          for (c = [], d = t.length, f = d - 2, u = 1; u < d; u++)
            c.push(s(t[u - 1], t[u]));
          d--,
            (n = function (_) {
              _ *= d;
              var p = Math.min(f, ~~_);
              return c[p](_ - p);
            }),
            (e = i);
        } else r || (t = nr(Vt(t) ? [] : {}, t));
        if (!c) {
          for (l in i) xs.call(a, t, l, "get", i[l]);
          n = function (_) {
            return ks(_, a) || (o ? t.p : t);
          };
        }
      }
      return di(e, n);
    },
    Ko = function (t, i, e) {
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
    we = function (t, i, e) {
      var r = t.vars,
        n = r[i],
        o = ct,
        a = t._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = r[i + "Params"]),
          (u = r.callbackScope || t),
          e && hi.length && _n(),
          a && (ct = a),
          (c = l ? n.apply(u, l) : n.call(u)),
          (ct = o),
          c
        );
    },
    Rr = function (t) {
      return (
        fi(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Wt),
        t.progress() < 1 && we(t, "onInterrupt"),
        t
      );
    },
    ar,
    Zo = [],
    Qo = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), is() || t.headless)) {
          var i = t.name,
            e = gt(t),
            r =
              i && !e && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: Pr,
              render: ks,
              add: xs,
              kill: ku,
              modifier: Eu,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Es,
              aliases: {},
              register: 0,
            };
          if ((lr(), t !== r)) {
            if (ve[i]) return;
            ye(r, ye(gn(t, n), o)),
              nr(r.prototype, nr(n, gn(t, o))),
              (ve[(r.prop = i)] = r),
              t.targetTest && (pn.push(r), (ls[i] = 1)),
              (i =
                (i === "css"
                  ? "CSS"
                  : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin");
          }
          Po(i, r), t.register && t.register(fe, r, he);
        } else Zo.push(t);
    },
    nt = 255,
    zr = {
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
    ys = function (t, i, e) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? i + (e - i) * t * 6
          : t < 0.5
          ? e
          : t * 3 < 2
          ? i + (e - i) * (2 / 3 - t) * 6
          : i) *
          nt +
          0.5) |
          0
      );
    },
    jo = function (t, i, e) {
      var r = t ? (ti(t) ? [t >> 16, (t >> 8) & nt, t & nt] : 0) : zr.black,
        n,
        o,
        a,
        l,
        u,
        c,
        d,
        f,
        h,
        _;
      if (!r) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), zr[t]))
          r = zr[t];
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
          if (((r = _ = t.match(rs)), !i))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (n = c * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ys(l + 1 / 3, n, o)),
              (r[1] = ys(l, n, o)),
              (r[2] = ys(l - 1 / 3, n, o));
          else if (~t.indexOf("="))
            return (r = t.match(To)), e && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(rs) || zr.transparent;
        r = r.map(Number);
      }
      return (
        i &&
          !_ &&
          ((n = r[0] / nt),
          (o = r[1] / nt),
          (a = r[2] / nt),
          (d = Math.max(n, o, a)),
          (f = Math.min(n, o, a)),
          (c = (d + f) / 2),
          d === f
            ? (l = u = 0)
            : ((h = d - f),
              (u = c > 0.5 ? h / (2 - d - f) : h / (d + f)),
              (l =
                d === n
                  ? (o - a) / h + (o < a ? 6 : 0)
                  : d === o
                  ? (a - n) / h + 2
                  : (n - o) / h + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        e && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Jo = function (t) {
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
    ta = function (t, i, e) {
      var r = "",
        n = (t + r).match(pi),
        o = i ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        d;
      if (!n) return t;
      if (
        ((n = n.map(function (f) {
          return (
            (f = jo(f, i, 1)) &&
            o +
              (i
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        e && ((c = Jo(t)), (l = e.c), l.join(r) !== c.c.join(r)))
      )
        for (u = t.replace(pi, "1").split(ir), d = u.length - 1; a < d; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (c.length ? c : n.length ? n : e).shift());
      if (!u)
        for (u = t.split(pi), d = u.length - 1; a < d; a++) r += u[a] + n[a];
      return r + u[d];
    },
    pi = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in zr) s += "|" + t + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    fu = /hsl[a]?\(/,
    ea = function (t) {
      var i = t.join(" "),
        e;
      if (((pi.lastIndex = 0), pi.test(i)))
        return (
          (e = fu.test(i)),
          (t[1] = ta(t[1], e)),
          (t[0] = ta(t[0], e, Jo(t[1]))),
          !0
        );
    },
    Lr,
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
        d,
        f,
        h,
        _ = function p(m) {
          var v = s() - r,
            y = m === !0,
            x,
            w,
            b,
            C;
          if (
            ((v > t || v < 0) && (e += v - i),
            (r += v),
            (b = r - e),
            (x = b - o),
            (x > 0 || y) &&
              ((C = ++d.frame),
              (f = b - d.time * 1e3),
              (d.time = b = b / 1e3),
              (o += x + (x >= n ? 4 : n - x)),
              (w = 1)),
            y || (l = u(p)),
            w)
          )
            for (h = 0; h < a.length; h++) a[h](b, f, C, m);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (m) {
            return f / (1e3 / (m || 60));
          },
          wake: function () {
            Eo &&
              (!ss &&
                is() &&
                ((Ve = ss = window),
                (os = Ve.document || {}),
                (me.gsap = fe),
                (Ve.gsapVersions || (Ve.gsapVersions = [])).push(fe.version),
                ko(fn || Ve.GreenSockGlobals || (!Ve.gsap && Ve) || {}),
                Zo.forEach(Qo)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (o - d.time * 1e3 + 1) | 0);
                }),
              (Lr = 1),
              _(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (Lr = 0), (u = Pr);
          },
          lagSmoothing: function (m, v) {
            (t = m || 1 / 0), (i = Math.min(v || 33, t));
          },
          fps: function (m) {
            (n = 1e3 / (m || 240)), (o = d.time * 1e3 + n);
          },
          add: function (m, v, y) {
            var x = v
              ? function (w, b, C, T) {
                  m(w, b, C, T), d.remove(x);
                }
              : m;
            return d.remove(m), a[y ? "unshift" : "push"](x), lr(), x;
          },
          remove: function (m, v) {
            ~(v = a.indexOf(m)) && a.splice(v, 1) && h >= v && h--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    lr = function () {
      return !Lr && be.wake();
    },
    Q = {},
    du = /^[\d.\-M][\d.\-,\s]/,
    pu = /["']/g,
    _u = function (t) {
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
          (i[r] = isNaN(u) ? u.replace(pu, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return i;
    },
    gu = function (t) {
      var i = t.indexOf("(") + 1,
        e = t.indexOf(")"),
        r = t.indexOf("(", i);
      return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
    },
    mu = function (t) {
      var i = (t + "").split("("),
        e = Q[i[0]];
      return e && i.length > 1 && e.config
        ? e.config.apply(
            null,
            ~t.indexOf("{") ? [_u(i[1])] : gu(t).split(",").map(Ro)
          )
        : Q._CE && du.test(t)
        ? Q._CE("", t)
        : e;
    },
    ia = function (t) {
      return function (i) {
        return 1 - t(1 - i);
      };
    },
    ra = function s(t, i) {
      for (var e = t._first, r; e; )
        e instanceof te
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
      return (t && (gt(t) ? t : Q[t] || mu(t))) || i;
    },
    zi = function (t, i, e, r) {
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
        ce(t, function (a) {
          (Q[a] = me[a] = n), (Q[(o = a.toLowerCase())] = e);
          for (var l in n)
            Q[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Q[a + "." + l] = n[l];
        }),
        n
      );
    },
    na = function (t) {
      return function (i) {
        return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
      };
    },
    ws = function s(t, i, e) {
      var r = i >= 1 ? i : 1,
        n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        o = (n / ts) * (Math.asin(1 / r) || 0),
        a = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * ql((c - o) * n) + 1;
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
        (n = ts / n),
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
            : na(e);
      return (
        (r.config = function (n) {
          return s(t, n);
        }),
        r
      );
    };
  ce("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
    var i = t < 5 ? t + 1 : t;
    zi(
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
    (Q.Linear.easeNone = Q.none = Q.Linear.easeIn),
    zi("Elastic", ws("in"), ws("out"), ws()),
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
      zi(
        "Bounce",
        function (o) {
          return 1 - n(1 - o);
        },
        n
      );
    })(7.5625, 2.75),
    zi("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    zi("Circ", function (s) {
      return -(bo(1 - s * s) - 1);
    }),
    zi("Sine", function (s) {
      return s === 1 ? 1 : -Vl(s * Yl) + 1;
    }),
    zi("Back", bs("in"), bs("out"), bs()),
    (Q.SteppedEase =
      Q.steps =
      me.SteppedEase =
        {
          config: function (t, i) {
            t === void 0 && (t = 1);
            var e = 1 / t,
              r = t + (i ? 0 : 1),
              n = i ? 1 : 0,
              o = 1 - rt;
            return function (a) {
              return (((r * Ar(0, o, a)) | 0) + n) * e;
            };
          },
        }),
    (er.ease = Q["quad.out"]),
    ce(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (hs += s + "," + s + "Params,");
      }
    );
  var sa = function (t, i) {
      (this.id = Xl++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = i),
        (this.get = i ? i.get : Ao),
        (this.set = i ? i.getSetter : Es);
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
          ct && ((this._ctx = ct), ct.data.push(this)),
          Lr || be.wake();
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
              wn(this, e), !n._dp || n.parent || Fo(n, this);
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
              qe(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === rt) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), Do(this, e, r)),
            this
          );
        }),
        (t.time = function (e, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + Io(this)) %
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
                  Io(this),
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
          if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
          if (this._rts === e) return this;
          var n =
            this.parent && this._ts ? vn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -rt ? 0 : this._rts),
            this.totalTime(
              Ar(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            yn(this),
            jl(this)
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
                        Math.abs(this._zTime) !== rt &&
                        (this._tTime -= rt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && qe(r, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (ue(e) ? this.totalDuration() : this.duration()) /
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
              ? vn(r.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          e === void 0 && (e = Gl);
          var r = Wt;
          return (
            (Wt = e),
            ds(this) &&
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
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Ho(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = e), Ho(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, r) {
          return this.totalTime(Oe(this, e), ue(r));
        }),
        (t.restart = function (e, r) {
          return (
            this.play().totalTime(e ? -this._delay : 0, ue(r)),
            this._dur || (this._zTime = -rt),
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
                this.timeScale(-this._rts || (e ? -rt : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -rt), this;
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
              n < this.endTime(!0) - rt)
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
            var o = gt(e) ? e : zo,
              a = function () {
                var u = r.then;
                (r.then = null),
                  gt(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
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
  ye(Nr.prototype, {
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
  var te = (function (s) {
    Ft(t, s);
    function t(e, r) {
      var n;
      return (
        e === void 0 && (e = {}),
        (n = s.call(this, e) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = ue(e.sortChildren)),
        ft && qe(e.parent || ft, _t(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Wo(_t(n), e.scrollTrigger),
        n
      );
    }
    var i = t.prototype;
    return (
      (i.to = function (r, n, o) {
        return Or(0, arguments, this), this;
      }),
      (i.from = function (r, n, o) {
        return Or(1, arguments, this), this;
      }),
      (i.fromTo = function (r, n, o, a) {
        return Or(2, arguments, this), this;
      }),
      (i.set = function (r, n, o) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Mr(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new Ct(r, n, Oe(this, o), 1),
          this
        );
      }),
      (i.call = function (r, n, o) {
        return qe(this, Ct.delayedCall(0, r, n), o);
      }),
      (i.staggerTo = function (r, n, o, a, l, u, c) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Ct(r, o, Oe(this, l)),
          this
        );
      }),
      (i.staggerFrom = function (r, n, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (Mr(o).immediateRender = ue(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, u, c)
        );
      }),
      (i.staggerFromTo = function (r, n, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (Mr(a).immediateRender = ue(a.immediateRender)),
          this.staggerTo(r, n, a, l, u, c, d)
        );
      }),
      (i.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : St(r),
          d = this._zTime < 0 != r < 0 && (this._initted || !u),
          f,
          h,
          _,
          p,
          m,
          v,
          y,
          x,
          w,
          b,
          C,
          T;
        if (
          (this !== ft && c > l && r >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (r += this._time - a)),
            (f = c),
            (w = this._start),
            (x = this._ts),
            (v = !x),
            d && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(m * 100 + r, n, o);
            if (
              ((f = St(c % m)),
              c === l
                ? ((p = this._repeat), (f = u))
                : ((b = St(c / m)),
                  (p = ~~b),
                  p && p === b && ((f = u), p--),
                  f > u && (f = u)),
              (b = sr(this._tTime, m)),
              !a &&
                this._tTime &&
                b !== p &&
                this._tTime - b * m - this._dur <= 0 &&
                (b = p),
              C && p & 1 && ((f = u - f), (T = 1)),
              p !== b && !this._lock)
            ) {
              var E = C && b & 1,
                k = E === (C && p & 1);
              if (
                (p < b && (E = !E),
                (a = E ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (T ? 0 : St(p * m)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && we(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  v !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                k &&
                  ((this._lock = 2),
                  (a = E ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !v)
              )
                return this;
              ra(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((y = iu(this, St(a), St(f))), y && (c -= f - (f = y._start))),
            (this._tTime = c),
            (this._time = f),
            (this._act = !x),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && c && !n && !b && (we(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (f >= a && r >= 0)
            for (h = this._first; h; ) {
              if (
                ((_ = h._next), (h._act || f >= h._start) && h._ts && y !== h)
              ) {
                if (h.parent !== this) return this.render(r, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (f - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (f - h._start) * h._ts,
                    n,
                    o
                  ),
                  f !== this._time || (!this._ts && !v))
                ) {
                  (y = 0), _ && (c += this._zTime = -rt);
                  break;
                }
              }
              h = _;
            }
          else {
            h = this._last;
            for (var P = r < 0 ? r : f; h; ) {
              if (
                ((_ = h._prev), (h._act || P <= h._end) && h._ts && y !== h)
              ) {
                if (h.parent !== this) return this.render(r, n, o);
                if (
                  (h.render(
                    h._ts > 0
                      ? (P - h._start) * h._ts
                      : (h._dirty ? h.totalDuration() : h._tDur) +
                          (P - h._start) * h._ts,
                    n,
                    o || (Wt && ds(h))
                  ),
                  f !== this._time || (!this._ts && !v))
                ) {
                  (y = 0), _ && (c += this._zTime = P ? -rt : rt);
                  break;
                }
              }
              h = _;
            }
          }
          if (
            y &&
            !n &&
            (this.pause(),
            (y.render(f >= a ? 0 : -rt)._zTime = f >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = w), yn(this), this.render(r, n, o);
          this._onUpdate && !n && we(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (w === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  fi(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (c || a || !l) &&
                  (we(
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
          if (Rt(r)) return this.addLabel(r, n);
          if (gt(r)) r = Ct.delayedCall(0, r);
          else return this;
        }
        return this !== r ? qe(this, r, n) : this;
      }),
      (i.getChildren = function (r, n, o, a) {
        r === void 0 && (r = !0),
          n === void 0 && (n = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Me);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Ct
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
        return Rt(r)
          ? this.removeLabel(r)
          : gt(r)
          ? this.killTweensOf(r)
          : (r.parent === this && mn(this, r),
            r === this._recent && (this._recent = this._last),
            Di(this));
      }),
      (i.totalTime = function (r, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = St(
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
        var a = Ct.delayedCall(0, n || Pr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), qe(this, a, Oe(this, r))
        );
      }),
      (i.removePause = function (r) {
        var n = this._first;
        for (r = Oe(this, r); n; )
          n._start === r && n.data === "isPause" && fi(n), (n = n._next);
      }),
      (i.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          _i !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (i.getTweensOf = function (r, n) {
        for (var o = [], a = Ae(r), l = this._first, u = ti(n), c; l; )
          l instanceof Ct
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
      (i.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = Oe(o, r),
          l = n,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          f = l.immediateRender,
          h,
          _ = Ct.to(
            o,
            ye(
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
                  c && c.apply(_, d || []);
                },
              },
              n
            )
          );
        return f ? _.render(0) : _;
      }),
      (i.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, ye({ startAt: { time: Oe(this, r) } }, o));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Ko(this, Oe(this, r));
      }),
      (i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Ko(this, Oe(this, r), 1);
      }),
      (i.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + rt);
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
          d;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (d = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (qe(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((n -= c),
                ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = u);
          or(o, o === ft && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((ft._ts && (Do(ft, vn(r, ft)), (Mo = be.frame)), be.frame >= Oo)) {
          Oo += ot.autoSleep || 120;
          var n = ft._first;
          if ((!n || !n._ts) && ot.autoSleep && be._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || be.sleep();
          }
        }
      }),
      t
    );
  })(Nr);
  ye(te.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var vu = function (t, i, e, r, n, o, a) {
      var l = new he(this._pt, t, i, 0, 1, ha, null, n),
        u = 0,
        c = 0,
        d,
        f,
        h,
        _,
        p,
        m,
        v,
        y;
      for (
        l.b = e,
          l.e = r,
          e += "",
          r += "",
          (v = ~r.indexOf("random(")) && (r = Dr(r)),
          o && ((y = [e, r]), o(y, t, i), (e = y[0]), (r = y[1])),
          f = e.match(ns) || [];
        (d = ns.exec(r));

      )
        (_ = d[0]),
          (p = r.substring(u, d.index)),
          h ? (h = (h + 1) % 5) : p.substr(-5) === "rgba(" && (h = 1),
          _ !== f[c++] &&
            ((m = parseFloat(f[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || c === 1 ? p : ",",
              s: m,
              c: _.charAt(1) === "=" ? rr(m, _) - m : parseFloat(_) - m,
              m: h && h < 4 ? Math.round : 0,
            }),
            (u = ns.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (So.test(r) || v) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    xs = function (t, i, e, r, n, o, a, l, u, c) {
      gt(r) && (r = r(n || 0, t, o));
      var d = t[i],
        f =
          e !== "get"
            ? e
            : gt(d)
            ? u
              ? t[
                  i.indexOf("set") || !gt(t["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : t[i]()
            : d,
        h = gt(d) ? (u ? Tu : ua) : Cs,
        _;
      if (
        (Rt(r) &&
          (~r.indexOf("random(") && (r = Dr(r)),
          r.charAt(1) === "=" &&
            ((_ = rr(f, r) + (qt(f) || 0)), (_ || _ === 0) && (r = _))),
        !c || f !== r || Ts)
      )
        return !isNaN(f * r) && r !== ""
          ? ((_ = new he(
              this._pt,
              t,
              i,
              +f || 0,
              r - (f || 0),
              typeof d == "boolean" ? Cu : ca,
              0,
              h
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, t),
            (this._pt = _))
          : (!d && !(i in t) && as(i, r),
            vu.call(this, t, i, f, r, h, l || ot.stringFilter, u));
    },
    yu = function (t, i, e, r, n) {
      if (
        (gt(t) && (t = Ir(t, n, i, e, r)),
        !Xe(t) || (t.style && t.nodeType) || Vt(t) || xo(t))
      )
        return Rt(t) ? Ir(t, n, i, e, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Ir(t[a], n, i, e, r);
      return o;
    },
    oa = function (t, i, e, r, n, o) {
      var a, l, u, c;
      if (
        ve[t] &&
        (a = new ve[t]()).init(
          n,
          a.rawVars ? i[t] : yu(i[t], r, n, o, e),
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
    Ss = function s(t, i, e) {
      var r = t.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.runBackwards,
        d = r.yoyoEase,
        f = r.keyframes,
        h = r.autoRevert,
        _ = t._dur,
        p = t._startAt,
        m = t._targets,
        v = t.parent,
        y = v && v.data === "nested" ? v.vars.targets : m,
        x = t._overwrite === "auto" && !Jn,
        w = t.timeline,
        b,
        C,
        T,
        E,
        k,
        P,
        L,
        M,
        D,
        F,
        B,
        W,
        R;
      if (
        (w && (!f || !n) && (n = "none"),
        (t._ease = Ri(n, er.ease)),
        (t._yEase = d ? ia(Ri(d === !0 ? n : d, er.ease)) : 0),
        d &&
          t._yoyo &&
          !t._repeat &&
          ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
        (t._from = !w && !!r.runBackwards),
        !w || (f && !r.stagger))
      ) {
        if (
          ((M = m[0] ? Ai(m[0]).harness : 0),
          (W = M && r[M.prop]),
          (b = gn(r, ls)),
          p &&
            (p._zTime < 0 && p.progress(1),
            i < 0 && c && a && !h
              ? p.render(-1, !0)
              : p.revert(c && _ ? dn : Ul),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (fi(
              (t._startAt = Ct.set(
                m,
                ye(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: v,
                    immediateRender: !0,
                    lazy: !p && ue(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return we(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (Wt || (!a && !h)) && t._startAt.revert(dn),
            a && _ && i <= 0 && e <= 0)
          ) {
            i && (t._zTime = i);
            return;
          }
        } else if (c && _ && !p) {
          if (
            (i && (a = !1),
            (T = ye(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && ue(l),
                immediateRender: a,
                stagger: 0,
                parent: v,
              },
              b
            )),
            W && (T[M.prop] = W),
            fi((t._startAt = Ct.set(m, T))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            i < 0 && (Wt ? t._startAt.revert(dn) : t._startAt.render(-1, !0)),
            (t._zTime = i),
            !a)
          )
            s(t._startAt, rt, rt);
          else if (!i) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (_ && ue(l)) || (l && !_), C = 0;
          C < m.length;
          C++
        ) {
          if (
            ((k = m[C]),
            (L = k._gsap || fs(m)[C]._gsap),
            (t._ptLookup[C] = F = {}),
            us[L.id] && hi.length && _n(),
            (B = y === m ? C : y.indexOf(k)),
            M &&
              (D = new M()).init(k, W || b, t, B, y) !== !1 &&
              ((t._pt = E =
                new he(t._pt, k, D.name, 0, 1, D.render, D, 0, D.priority)),
              D._props.forEach(function (q) {
                F[q] = E;
              }),
              D.priority && (P = 1)),
            !M || W)
          )
            for (T in b)
              ve[T] && (D = oa(T, b, t, B, k, y))
                ? D.priority && (P = 1)
                : (F[T] = E =
                    xs.call(t, k, T, "get", b[T], B, y, 0, r.stringFilter));
          t._op && t._op[C] && t.kill(k, t._op[C]),
            x &&
              t._pt &&
              ((_i = t),
              ft.killTweensOf(k, F, t.globalTime(i)),
              (R = !t.parent),
              (_i = 0)),
            t._pt && l && (us[L.id] = 1);
        }
        P && fa(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !R),
        f && i <= 0 && w.render(Me, !0, !0);
    },
    wu = function (t, i, e, r, n, o, a, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
        c,
        d,
        f,
        h;
      if (!u)
        for (
          u = t._ptCache[i] = [], f = t._ptLookup, h = t._targets.length;
          h--;

        ) {
          if (((c = f[h][i]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== i && c.fp !== i; ) c = c._next;
          if (!c)
            return (
              (Ts = 1),
              (t.vars[i] = "+=0"),
              Ss(t, a),
              (Ts = 0),
              l ? kr(i + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (h = u.length; h--; )
        (d = u[h]),
          (c = d._pt || d),
          (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c),
          (c.c = e - c.s),
          d.e && (d.e = yt(e) + qt(d.e)),
          d.b && (d.b = c.s + qt(d.b));
    },
    bu = function (t, i) {
      var e = t[0] ? Ai(t[0]).harness : 0,
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
      return gt(t)
        ? t.call(i, e, r, n)
        : Rt(t) && ~t.indexOf("random(")
        ? Dr(t)
        : t;
    },
    aa = hs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    la = {};
  ce(aa + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (la[s] = 1);
  });
  var Ct = (function (s) {
    Ft(t, s);
    function t(e, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Mr(r)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        f = l.stagger,
        h = l.overwrite,
        _ = l.keyframes,
        p = l.defaults,
        m = l.scrollTrigger,
        v = l.yoyoEase,
        y = r.parent || ft,
        x = (Vt(e) || xo(e) ? ti(e[0]) : "length" in r) ? [e] : Ae(e),
        w,
        b,
        C,
        T,
        E,
        k,
        P,
        L;
      if (
        ((a._targets = x.length
          ? fs(x)
          : kr(
              "GSAP target " + e + " not found. https://gsap.com",
              !ot.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = h),
        _ || f || hn(u) || hn(c))
      ) {
        if (
          ((r = a.vars),
          (w = a.timeline =
            new te({
              data: "nested",
              defaults: p || {},
              targets: y && y.data === "nested" ? y.vars.targets : x,
            })),
          w.kill(),
          (w.parent = w._dp = _t(a)),
          (w._start = 0),
          f || hn(u) || hn(c))
        ) {
          if (((T = x.length), (P = f && Vo(f)), Xe(f)))
            for (E in f) ~aa.indexOf(E) && (L || (L = {}), (L[E] = f[E]));
          for (b = 0; b < T; b++)
            (C = gn(r, la)),
              (C.stagger = 0),
              v && (C.yoyoEase = v),
              L && nr(C, L),
              (k = x[b]),
              (C.duration = +Ir(u, _t(a), b, k, x)),
              (C.delay = (+Ir(c, _t(a), b, k, x) || 0) - a._delay),
              !f &&
                T === 1 &&
                C.delay &&
                ((a._delay = c = C.delay), (a._start += c), (C.delay = 0)),
              w.to(k, C, P ? P(b, k, x) : 0),
              (w._ease = Q.none);
          w.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (_) {
          Mr(ye(w.vars.defaults, { ease: "none" })),
            (w._ease = Ri(_.ease || r.ease || "none"));
          var M = 0,
            D,
            F,
            B;
          if (Vt(_))
            _.forEach(function (W) {
              return w.to(x, W, ">");
            }),
              w.duration();
          else {
            C = {};
            for (E in _)
              E === "ease" || E === "easeEach" || xu(E, _[E], C, _.easeEach);
            for (E in C)
              for (
                D = C[E].sort(function (W, R) {
                  return W.t - R.t;
                }),
                  M = 0,
                  b = 0;
                b < D.length;
                b++
              )
                (F = D[b]),
                  (B = {
                    ease: F.e,
                    duration: ((F.t - (b ? D[b - 1].t : 0)) / 100) * u,
                  }),
                  (B[E] = F.v),
                  w.to(x, B, M),
                  (M += B.duration);
            w.duration() < u && w.to({}, { duration: u - w.duration() });
          }
        }
        u || a.duration((u = w.duration()));
      } else a.timeline = 0;
      return (
        h === !0 && !Jn && ((_i = _t(a)), ft.killTweensOf(x), (_i = 0)),
        qe(y, _t(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (d ||
          (!u &&
            !_ &&
            a._start === St(y._time) &&
            ue(d) &&
            Jl(_t(a)) &&
            y.data !== "nested")) &&
          ((a._tTime = -rt), a.render(Math.max(0, -c) || 0)),
        m && Wo(_t(a), m),
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
          d = r > l - rt && !c ? l : r < rt ? 0 : r,
          f,
          h,
          _,
          p,
          m,
          v,
          y,
          x,
          w;
        if (!u) eu(this, r, n, o);
        else if (
          d !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((f = d), (x = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(p * 100 + r, n, o);
            if (
              ((f = St(d % p)),
              d === l
                ? ((_ = this._repeat), (f = u))
                : ((m = St(d / p)),
                  (_ = ~~m),
                  _ && _ === m ? ((f = u), _--) : f > u && (f = u)),
              (v = this._yoyo && _ & 1),
              v && ((w = this._yEase), (f = u - f)),
              (m = sr(this._tTime, p)),
              f === a && !o && this._initted && _ === m)
            )
              return (this._tTime = d), this;
            _ !== m &&
              (x && this._yEase && ra(x, v),
              this.vars.repeatRefresh &&
                !v &&
                !this._lock &&
                f !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(St(p * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Bo(this, c ? r : f, o, n, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
              return this;
            if (u !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = d),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = y = (w || this._ease)(f / u)),
            this._from && (this.ratio = y = 1 - y),
            !a && d && !n && !m && (we(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (h = this._pt; h; ) h.r(y, h.d), (h = h._next);
          (x && x.render(r < 0 ? r : x._dur * x._ease(f / this._dur), n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (c && ps(this, r, n, o), we(this, "onUpdate")),
            this._repeat &&
              _ !== m &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              we(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && ps(this, r, !0, !0),
              (r || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                fi(this, 1),
              !n &&
                !(c && !a) &&
                (d || a || v) &&
                (we(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
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
        Lr || be.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Ss(this, u),
          (c = this._ease(u / this._dur)),
          wu(this, r, n, o, a, c, u, l)
            ? this.resetTo(r, n, o, a, 1)
            : (wn(this, 0),
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
          l = r ? Ae(r) : a,
          u = this._ptLookup,
          c = this._pt,
          d,
          f,
          h,
          _,
          p,
          m,
          v;
        if ((!n || n === "all") && Ql(a, l))
          return n === "all" && (this._pt = 0), Rr(this);
        for (
          d = this._op = this._op || [],
            n !== "all" &&
              (Rt(n) &&
                ((p = {}),
                ce(n, function (y) {
                  return (p[y] = 1);
                }),
                (n = p)),
              (n = bu(a, n))),
            v = a.length;
          v--;

        )
          if (~l.indexOf(a[v])) {
            (f = u[v]),
              n === "all"
                ? ((d[v] = n), (_ = f), (h = {}))
                : ((h = d[v] = d[v] || {}), (_ = n));
            for (p in _)
              (m = f && f[p]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(p) === !0) &&
                    mn(this, m, "_pt"),
                  delete f[p]),
                h !== "all" && (h[p] = 1);
          }
        return this._initted && !this._pt && c && Rr(this), this;
      }),
      (t.to = function (r, n) {
        return new t(r, n, arguments[2]);
      }),
      (t.from = function (r, n) {
        return Or(1, arguments);
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
        return Or(2, arguments);
      }),
      (t.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
      }),
      (t.killTweensOf = function (r, n, o) {
        return ft.killTweensOf(r, n, o);
      }),
      t
    );
  })(Nr);
  ye(Ct.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ce("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Ct[s] = function () {
        var t = new te(),
          i = gs.call(arguments, 0);
        return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
      };
    });
  var Cs = function (t, i, e) {
      return (t[i] = e);
    },
    ua = function (t, i, e) {
      return t[i](e);
    },
    Tu = function (t, i, e, r) {
      return t[i](r.fp, e);
    },
    Su = function (t, i, e) {
      return t.setAttribute(i, e);
    },
    Es = function (t, i) {
      return gt(t[i]) ? ua : es(t[i]) && t.setAttribute ? Su : Cs;
    },
    ca = function (t, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
    },
    Cu = function (t, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * t), i);
    },
    ha = function (t, i) {
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
    Eu = function (t, i, e, r) {
      for (var n = this._pt, o; n; )
        (o = n._next), n.p === r && n.modifier(t, i, e), (n = o);
    },
    ku = function (t) {
      for (var i = this._pt, e, r; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? mn(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    Pu = function (t, i, e, r) {
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
          (this.r = a || ca),
          (this.d = l || this),
          (this.set = u || Cs),
          (this.pr = c || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var t = s.prototype;
      return (
        (t.modifier = function (e, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Pu),
            (this.m = e),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  ce(
    hs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (ls[s] = 1);
    }
  ),
    (me.TweenMax = me.TweenLite = Ct),
    (me.TimelineLite = me.TimelineMax = te),
    (ft = new te({
      sortChildren: !1,
      defaults: er,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (ot.stringFilter = ea);
  var Li = [],
    bn = {},
    Mu = [],
    da = 0,
    Ou = 0,
    Ps = function (t) {
      return (bn[t] || Mu).map(function (i) {
        return i();
      });
    },
    Ms = function () {
      var t = Date.now(),
        i = [];
      t - da > 2 &&
        (Ps("matchMediaInit"),
        Li.forEach(function (e) {
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
        (da = t),
        Ps("matchMedia"));
    },
    pa = (function () {
      function s(i, e) {
        (this.selector = e && ms(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Ou++),
          i && this.add(i);
      }
      var t = s.prototype;
      return (
        (t.add = function (e, r, n) {
          gt(e) && ((n = r), (r = e), (e = gt));
          var o = this,
            a = function () {
              var u = ct,
                c = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                n && (o.selector = ms(n)),
                (ct = o),
                (d = r.apply(o, arguments)),
                gt(d) && o._r.push(d),
                (ct = u),
                (o.selector = c),
                (o.isReverted = !1),
                d
              );
            };
          return (
            (o.last = a),
            e === gt
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : e
              ? (o[e] = a)
              : a
          );
        }),
        (t.ignore = function (e) {
          var r = ct;
          (ct = null), e(this), (ct = r);
        }),
        (t.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof s
                ? e.push.apply(e, r.getTweens())
                : r instanceof Ct &&
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
                      .sort(function (c, d) {
                        return d.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(e);
                      }),
                      l = n.data.length;
                    l--;

                  )
                    (u = n.data[l]),
                      u instanceof te
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Ct) && u.revert && u.revert(e);
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
            for (var o = Li.length; o--; )
              Li[o].id === this.id && Li.splice(o, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        s
      );
    })(),
    Au = (function () {
      function s(i) {
        (this.contexts = []), (this.scope = i), ct && ct.data.push(this);
      }
      var t = s.prototype;
      return (
        (t.add = function (e, r, n) {
          Xe(e) || (e = { matches: e });
          var o = new pa(0, n || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          ct && !o.selector && (o.selector = ct.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = e);
          for (u in e)
            u === "all"
              ? (c = 1)
              : ((l = Ve.matchMedia(e[u])),
                l &&
                  (Li.indexOf(o) < 0 && Li.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Ms)
                    : l.addEventListener("change", Ms)));
          return (
            c &&
              r(o, function (d) {
                return o.add(null, d);
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
    xn = {
      registerPlugin: function () {
        for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
          i[e] = arguments[e];
        i.forEach(function (r) {
          return Qo(r);
        });
      },
      timeline: function (t) {
        return new te(t);
      },
      getTweensOf: function (t, i) {
        return ft.getTweensOf(t, i);
      },
      getProperty: function (t, i, e, r) {
        Rt(t) && (t = Ae(t)[0]);
        var n = Ai(t || {}).get,
          o = e ? zo : Ro;
        return (
          e === "native" && (e = ""),
          t &&
            (i
              ? o(((ve[i] && ve[i].get) || n)(t, i, e, r))
              : function (a, l, u) {
                  return o(((ve[a] && ve[a].get) || n)(t, a, l, u));
                })
        );
      },
      quickSetter: function (t, i, e) {
        if (((t = Ae(t)), t.length > 1)) {
          var r = t.map(function (c) {
              return fe.quickSetter(c, i, e);
            }),
            n = r.length;
          return function (c) {
            for (var d = n; d--; ) r[d](c);
          };
        }
        t = t[0] || {};
        var o = ve[i],
          a = Ai(t),
          l = (a.harness && (a.harness.aliases || {})[i]) || i,
          u = o
            ? function (c) {
                var d = new o();
                (ar._pt = 0),
                  d.init(t, e ? c + e : c, ar, 0, [t]),
                  d.render(1, d),
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
          n = fe.to(
            t,
            ye(
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
        return ft.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ri(t.ease, er.ease)), Lo(er, t || {});
      },
      config: function (t) {
        return Lo(ot, t || {});
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
            !ve[a] &&
            !me[a] &&
            kr(i + " effect requires " + a + " plugin.")
          );
        }),
          (cs[i] = function (a, l, u) {
            return e(Ae(a), ye(l || {}, n), u);
          }),
          o &&
            (te.prototype[i] = function (a, l, u) {
              return this.add(cs[i](a, Xe(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, i) {
        Q[t] = Ri(i);
      },
      parseEase: function (t, i) {
        return arguments.length ? Ri(t, i) : Q;
      },
      getById: function (t) {
        return ft.getById(t);
      },
      exportRoot: function (t, i) {
        t === void 0 && (t = {});
        var e = new te(t),
          r,
          n;
        for (
          e.smoothChildTiming = ue(t.smoothChildTiming),
            ft.remove(e),
            e._dp = 0,
            e._time = e._tTime = ft._time,
            r = ft._first;
          r;

        )
          (n = r._next),
            (i ||
              !(
                !r._dur &&
                r instanceof Ct &&
                r.vars.onComplete === r._targets[0]
              )) &&
              qe(e, r, r._start - r._delay),
            (r = n);
        return qe(ft, e, 0), e;
      },
      context: function (t, i) {
        return t ? new pa(t, i) : ct;
      },
      matchMedia: function (t) {
        return new Au(t);
      },
      matchMediaRefresh: function () {
        return (
          Li.forEach(function (t) {
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
        wrap: uu,
        wrapYoyo: cu,
        distribute: Vo,
        random: $o,
        snap: qo,
        normalize: lu,
        getUnit: qt,
        clamp: nu,
        splitColor: jo,
        toArray: Ae,
        selector: ms,
        mapRange: Go,
        pipe: ou,
        unitize: au,
        interpolate: hu,
        shuffle: Xo,
      },
      install: ko,
      effects: cs,
      ticker: be,
      updateRoot: te.updateRoot,
      plugins: ve,
      globalTimeline: ft,
      core: {
        PropTween: he,
        globals: Po,
        Tween: Ct,
        Timeline: te,
        Animation: Nr,
        getCache: Ai,
        _removeLinkedListItem: mn,
        reverting: function () {
          return Wt;
        },
        context: function (t) {
          return t && ct && (ct.data.push(t), (t._ctx = ct)), ct;
        },
        suppressOverwrites: function (t) {
          return (Jn = t);
        },
      },
    };
  ce("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (xn[s] = Ct[s]);
  }),
    be.add(te.updateRoot),
    (ar = xn.to({}, { duration: 0 }));
  var Du = function (t, i) {
      for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
        e = e._next;
      return e;
    },
    Ru = function (t, i) {
      var e = t._targets,
        r,
        n,
        o;
      for (r in i)
        for (n = e.length; n--; )
          (o = t._ptLookup[n][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Du(o, r)),
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
              (Rt(n) &&
                ((l = {}),
                ce(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              i)
            ) {
              l = {};
              for (u in n) l[u] = i(n[u]);
              n = l;
            }
            Ru(a, n);
          };
        },
      };
    },
    fe =
      xn.registerPlugin(
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
        Os("roundProps", vs),
        Os("modifiers"),
        Os("snap", qo)
      ) || xn;
  (Ct.version = te.version = fe.version = "3.13.0"),
    (Eo = 1),
    is() && lr(),
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
    As,
    Ni,
    ga,
    Ds,
    zu = function () {
      return typeof window != "undefined";
    },
    ei = {},
    Ii = 180 / Math.PI,
    cr = Math.PI / 180,
    hr = Math.atan2,
    ma = 1e8,
    Rs = /([A-Z])/g,
    Lu = /(left|right|width|margin|padding|x)/i,
    Nu = /[\s,\(]\S/,
    $e = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    zs = function (t, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
    },
    Iu = function (t, i) {
      return i.set(
        i.t,
        i.p,
        t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
        i
      );
    },
    Fu = function (t, i) {
      return i.set(
        i.t,
        i.p,
        t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    Wu = function (t, i) {
      var e = i.s + i.c * t;
      i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    va = function (t, i) {
      return i.set(i.t, i.p, t ? i.e : i.b, i);
    },
    ya = function (t, i) {
      return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
    },
    Bu = function (t, i, e) {
      return (t.style[i] = e);
    },
    Hu = function (t, i, e) {
      return t.style.setProperty(i, e);
    },
    Yu = function (t, i, e) {
      return (t._gsap[i] = e);
    },
    Xu = function (t, i, e) {
      return (t._gsap.scaleX = t._gsap.scaleY = e);
    },
    Vu = function (t, i, e, r, n) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = e), o.renderTransform(n, o);
    },
    qu = function (t, i, e, r, n) {
      var o = t._gsap;
      (o[i] = e), o.renderTransform(n, o);
    },
    dt = "transform",
    de = dt + "Origin",
    $u = function s(t, i) {
      var e = this,
        r = this.target,
        n = r.style,
        o = r._gsap;
      if (t in ei && n) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = $e[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                  return (e.tfm[a] = ii(r, a));
                })
              : (this.tfm[t] = o.x ? o[t] : ii(r, t)),
            t === de && (this.tfm.zOrigin = o.zOrigin);
        else
          return $e.transform.split(",").forEach(function (a) {
            return s.call(e, a, i);
          });
        if (this.props.indexOf(dt) >= 0) return;
        o.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(de, i, "")),
          (t = dt);
      }
      (n || i) && this.props.push(t, i, n[t]);
    },
    wa = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Uu = function () {
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
                : t[n].replace(Rs, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Ds()),
          (!n || !n.isStart) &&
            !e[dt] &&
            (wa(e),
            r.zOrigin &&
              e[de] &&
              ((e[de] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    ba = function (t, i) {
      var e = { target: t, props: [], revert: Uu, save: $u };
      return (
        t._gsap || fe.core.getCache(t),
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
    Ls = function (t, i) {
      var e = gi.createElementNS
        ? gi.createElementNS(
            (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : gi.createElement(t);
      return e && e.style ? e : gi.createElement(t);
    },
    De = function s(t, i, e) {
      var r = getComputedStyle(t);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(Rs, "-$1").toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!e && s(t, fr(i) || i, 1)) ||
        ""
      );
    },
    Ta = "O,Moz,ms,Ms,Webkit".split(","),
    fr = function (t, i, e) {
      var r = i || Ni,
        n = r.style,
        o = 5;
      if (t in n && !e) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(Ta[o] + t in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ta[o] : "") + t;
    },
    Ns = function () {
      zu() &&
        window.document &&
        ((_a = window),
        (gi = _a.document),
        (ur = gi.documentElement),
        (Ni = Ls("div") || { style: {} }),
        Ls("div"),
        (dt = fr(dt)),
        (de = dt + "Origin"),
        (Ni.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (xa = !!fr("perspective")),
        (Ds = fe.core.reverting),
        (As = 1));
    },
    Sa = function (t) {
      var i = t.ownerSVGElement,
        e = Ls(
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
    Ca = function (t, i) {
      for (var e = i.length; e--; )
        if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
    },
    Ea = function (t) {
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
              x: +Ca(t, ["x", "cx", "x1"]) || 0,
              y: +Ca(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : i
      );
    },
    ka = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ea(t));
    },
    Fi = function (t, i) {
      if (i) {
        var e = t.style,
          r;
        i in ei && i !== de && (i = dt),
          e.removeProperty
            ? ((r = i.substr(0, 2)),
              (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
              e.removeProperty(
                r === "--" ? i : i.replace(Rs, "-$1").toLowerCase()
              ))
            : e.removeAttribute(i);
      }
    },
    mi = function (t, i, e, r, n, o) {
      var a = new he(t._pt, i, e, 0, 1, o ? ya : va);
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(e), a;
    },
    Pa = { deg: 1, rad: 1, turn: 1 },
    Gu = { grid: 1, flex: 1 },
    vi = function s(t, i, e, r) {
      var n = parseFloat(e) || 0,
        o = (e + "").trim().substr((n + "").length) || "px",
        a = Ni.style,
        l = Lu.test(i),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        f = r === "px",
        h = r === "%",
        _,
        p,
        m,
        v;
      if (r === o || !n || Pa[r] || Pa[o]) return n;
      if (
        (o !== "px" && !f && (n = s(t, i, e, "px")),
        (v = t.getCTM && ka(t)),
        (h || o === "%") && (ei[i] || ~i.indexOf("adius")))
      )
        return (
          (_ = v ? t.getBBox()[l ? "width" : "height"] : t[c]),
          yt(h ? (n / _) * d : (n / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = d + (f ? o : r)),
        (p =
          (r !== "rem" && ~i.indexOf("adius")) ||
          (r === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        v && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === gi || !p.appendChild) && (p = gi.body),
        (m = p._gsap),
        m && h && m.width && l && m.time === be.time && !m.uncache)
      )
        return yt((n / m.width) * d);
      if (h && (i === "height" || i === "width")) {
        var y = t.style[i];
        (t.style[i] = d + r), (_ = t[c]), y ? (t.style[i] = y) : Fi(t, i);
      } else
        (h || o === "%") &&
          !Gu[De(p, "display")] &&
          (a.position = De(t, "position")),
          p === t && (a.position = "static"),
          p.appendChild(Ni),
          (_ = Ni[c]),
          p.removeChild(Ni),
          (a.position = "absolute");
      return (
        l && h && ((m = Ai(p)), (m.time = be.time), (m.width = p[c])),
        yt(f ? (_ * n) / d : _ && n ? (d / _) * n : 0)
      );
    },
    ii = function (t, i, e, r) {
      var n;
      return (
        As || Ns(),
        i in $e &&
          i !== "transform" &&
          ((i = $e[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
        ei[i] && i !== "transform"
          ? ((n = Wr(t, r)),
            (n =
              i !== "transformOrigin"
                ? n[i]
                : n.svg
                ? n.origin
                : Sn(De(t, de)) + " " + n.zOrigin + "px"))
          : ((n = t.style[i]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Tn[i] && Tn[i](t, i, e)) ||
                De(t, i) ||
                Ao(t, i) ||
                (i === "opacity" ? 1 : 0))),
        e && !~(n + "").trim().indexOf(" ") ? vi(t, i, n, e) + e : n
      );
    },
    Ku = function (t, i, e, r) {
      if (!e || e === "none") {
        var n = fr(i, t, 1),
          o = n && De(t, n, 1);
        o && o !== e
          ? ((i = n), (e = o))
          : i === "borderColor" && (e = De(t, "borderTopColor"));
      }
      var a = new he(this._pt, t.style, i, 0, 1, ha),
        l = 0,
        u = 0,
        c,
        d,
        f,
        h,
        _,
        p,
        m,
        v,
        y,
        x,
        w,
        b;
      if (
        ((a.b = e),
        (a.e = r),
        (e += ""),
        (r += ""),
        r.substring(0, 6) === "var(--" &&
          (r = De(t, r.substring(4, r.indexOf(")")))),
        r === "auto" &&
          ((p = t.style[i]),
          (t.style[i] = r),
          (r = De(t, i) || r),
          p ? (t.style[i] = p) : Fi(t, i)),
        (c = [e, r]),
        ea(c),
        (e = c[0]),
        (r = c[1]),
        (f = e.match(ir) || []),
        (b = r.match(ir) || []),
        b.length)
      ) {
        for (; (d = ir.exec(r)); )
          (m = d[0]),
            (y = r.substring(l, d.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") &&
                (_ = 1),
            m !== (p = f[u++] || "") &&
              ((h = parseFloat(p) || 0),
              (w = p.substr((h + "").length)),
              m.charAt(1) === "=" && (m = rr(h, m) + w),
              (v = parseFloat(m)),
              (x = m.substr((v + "").length)),
              (l = ir.lastIndex - x.length),
              x ||
                ((x = x || ot.units[i] || w),
                l === r.length && ((r += x), (a.e += x))),
              w !== x && (h = vi(t, i, p, x) || 0),
              (a._pt = {
                _next: a._pt,
                p: y || u === 1 ? y : ",",
                s: h,
                c: v - h,
                m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = i === "display" && r === "none" ? ya : va;
      return So.test(r) && (a.e = 0), (this._pt = a), a;
    },
    Ma = {
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
        (i[0] = Ma[e] || e),
        (i[1] = Ma[r] || r),
        i.join(" ")
      );
    },
    Qu = function (t, i) {
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
              ei[a] && ((l = 1), (a = a === "transformOrigin" ? de : dt)),
              Fi(e, a);
        l &&
          (Fi(e, dt),
          o &&
            (o.svg && e.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Wr(e, 1),
            (o.uncache = 1),
            wa(r)));
      }
    },
    Tn = {
      clearProps: function (t, i, e, r, n) {
        if (n.data !== "isFromStart") {
          var o = (t._pt = new he(t._pt, i, e, 0, 0, Qu));
          return (o.u = r), (o.pr = -10), (o.tween = n), t._props.push(e), 1;
        }
      },
    },
    Fr = [1, 0, 0, 1, 0, 0],
    Oa = {},
    Aa = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Da = function (t) {
      var i = De(t, dt);
      return Aa(i) ? Fr : i.substr(7).match(To).map(yt);
    },
    Is = function (t, i) {
      var e = t._gsap || Ai(t),
        r = t.style,
        n = Da(t),
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
            (n = Da(t)),
            l ? (r.display = l) : Fi(t, "display"),
            u &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : ur.removeChild(t))),
          i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Fs = function (t, i, e, r, n, o) {
      var a = t._gsap,
        l = n || Is(t, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        d = a.xOffset || 0,
        f = a.yOffset || 0,
        h = l[0],
        _ = l[1],
        p = l[2],
        m = l[3],
        v = l[4],
        y = l[5],
        x = i.split(" "),
        w = parseFloat(x[0]) || 0,
        b = parseFloat(x[1]) || 0,
        C,
        T,
        E,
        k;
      e
        ? l !== Fr &&
          (T = h * m - _ * p) &&
          ((E = w * (m / T) + b * (-p / T) + (p * y - m * v) / T),
          (k = w * (-_ / T) + b * (h / T) - (h * y - _ * v) / T),
          (w = E),
          (b = k))
        : ((C = Ea(t)),
          (w = C.x + (~x[0].indexOf("%") ? (w / 100) * C.width : w)),
          (b =
            C.y + (~(x[1] || x[0]).indexOf("%") ? (b / 100) * C.height : b))),
        r || (r !== !1 && a.smooth)
          ? ((v = w - u),
            (y = b - c),
            (a.xOffset = d + (v * h + y * p) - v),
            (a.yOffset = f + (v * _ + y * m) - y))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = w),
        (a.yOrigin = b),
        (a.smooth = !!r),
        (a.origin = i),
        (a.originIsAbsolute = !!e),
        (t.style[de] = "0px 0px"),
        o &&
          (mi(o, a, "xOrigin", u, w),
          mi(o, a, "yOrigin", c, b),
          mi(o, a, "xOffset", d, a.xOffset),
          mi(o, a, "yOffset", f, a.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + b);
    },
    Wr = function (t, i) {
      var e = t._gsap || new sa(t);
      if ("x" in e && !i && !e.uncache) return e;
      var r = t.style,
        n = e.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = De(t, de) || "0",
        c,
        d,
        f,
        h,
        _,
        p,
        m,
        v,
        y,
        x,
        w,
        b,
        C,
        T,
        E,
        k,
        P,
        L,
        M,
        D,
        F,
        B,
        W,
        R,
        q,
        X,
        g,
        j,
        lt,
        At,
        ut,
        Ht;
      return (
        (c = d = f = p = m = v = y = x = w = 0),
        (h = _ = 1),
        (e.svg = !!(t.getCTM && ka(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[dt] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[dt] !== "none" ? l[dt] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (T = Is(t, e.svg)),
        e.svg &&
          (e.uncache
            ? ((q = t.getBBox()),
              (u = e.xOrigin - q.x + "px " + (e.yOrigin - q.y) + "px"),
              (R = ""))
            : (R = !i && t.getAttribute("data-svg-origin")),
          Fs(t, R || u, !!R || e.originIsAbsolute, e.smooth !== !1, T)),
        (b = e.xOrigin || 0),
        (C = e.yOrigin || 0),
        T !== Fr &&
          ((L = T[0]),
          (M = T[1]),
          (D = T[2]),
          (F = T[3]),
          (c = B = T[4]),
          (d = W = T[5]),
          T.length === 6
            ? ((h = Math.sqrt(L * L + M * M)),
              (_ = Math.sqrt(F * F + D * D)),
              (p = L || M ? hr(M, L) * Ii : 0),
              (y = D || F ? hr(D, F) * Ii + p : 0),
              y && (_ *= Math.abs(Math.cos(y * cr))),
              e.svg && ((c -= b - (b * L + C * D)), (d -= C - (b * M + C * F))))
            : ((Ht = T[6]),
              (At = T[7]),
              (g = T[8]),
              (j = T[9]),
              (lt = T[10]),
              (ut = T[11]),
              (c = T[12]),
              (d = T[13]),
              (f = T[14]),
              (E = hr(Ht, lt)),
              (m = E * Ii),
              E &&
                ((k = Math.cos(-E)),
                (P = Math.sin(-E)),
                (R = B * k + g * P),
                (q = W * k + j * P),
                (X = Ht * k + lt * P),
                (g = B * -P + g * k),
                (j = W * -P + j * k),
                (lt = Ht * -P + lt * k),
                (ut = At * -P + ut * k),
                (B = R),
                (W = q),
                (Ht = X)),
              (E = hr(-D, lt)),
              (v = E * Ii),
              E &&
                ((k = Math.cos(-E)),
                (P = Math.sin(-E)),
                (R = L * k - g * P),
                (q = M * k - j * P),
                (X = D * k - lt * P),
                (ut = F * P + ut * k),
                (L = R),
                (M = q),
                (D = X)),
              (E = hr(M, L)),
              (p = E * Ii),
              E &&
                ((k = Math.cos(E)),
                (P = Math.sin(E)),
                (R = L * k + M * P),
                (q = B * k + W * P),
                (M = M * k - L * P),
                (W = W * k - B * P),
                (L = R),
                (B = q)),
              m &&
                Math.abs(m) + Math.abs(p) > 359.9 &&
                ((m = p = 0), (v = 180 - v)),
              (h = yt(Math.sqrt(L * L + M * M + D * D))),
              (_ = yt(Math.sqrt(W * W + Ht * Ht))),
              (E = hr(B, W)),
              (y = Math.abs(E) > 2e-4 ? E * Ii : 0),
              (w = ut ? 1 / (ut < 0 ? -ut : ut) : 0)),
          e.svg &&
            ((R = t.getAttribute("transform")),
            (e.forceCSS = t.setAttribute("transform", "") || !Aa(De(t, dt))),
            R && t.setAttribute("transform", R))),
        Math.abs(y) > 90 &&
          Math.abs(y) < 270 &&
          (n
            ? ((h *= -1),
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
          d -
          ((e.yPercent =
            d &&
            ((!i && e.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (t.offsetHeight * e.yPercent) / 100
            : 0) +
          o),
        (e.z = f + o),
        (e.scaleX = yt(h)),
        (e.scaleY = yt(_)),
        (e.rotation = yt(p) + a),
        (e.rotationX = yt(m) + a),
        (e.rotationY = yt(v) + a),
        (e.skewX = y + a),
        (e.skewY = x + a),
        (e.transformPerspective = w + o),
        (e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
          (r[de] = Sn(u)),
        (e.xOffset = e.yOffset = 0),
        (e.force3D = ot.force3D),
        (e.renderTransform = e.svg ? Ju : xa ? Ra : ju),
        (e.uncache = 0),
        e
      );
    },
    Sn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ws = function (t, i, e) {
      var r = qt(i);
      return yt(parseFloat(i) + parseFloat(vi(t, "x", e + "px", r))) + r;
    },
    ju = function (t, i) {
      (i.z = "0px"),
        (i.rotationY = i.rotationX = "0deg"),
        (i.force3D = 0),
        Ra(t, i);
    },
    Wi = "0deg",
    Br = "0px",
    Bi = ") ",
    Ra = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.z,
        u = e.rotation,
        c = e.rotationY,
        d = e.rotationX,
        f = e.skewX,
        h = e.skewY,
        _ = e.scaleX,
        p = e.scaleY,
        m = e.transformPerspective,
        v = e.force3D,
        y = e.target,
        x = e.zOrigin,
        w = "",
        b = (v === "auto" && t && t !== 1) || v === !0;
      if (x && (d !== Wi || c !== Wi)) {
        var C = parseFloat(c) * cr,
          T = Math.sin(C),
          E = Math.cos(C),
          k;
        (C = parseFloat(d) * cr),
          (k = Math.cos(C)),
          (o = Ws(y, o, T * k * -x)),
          (a = Ws(y, a, -Math.sin(C) * -x)),
          (l = Ws(y, l, E * k * -x + x));
      }
      m !== Br && (w += "perspective(" + m + Bi),
        (r || n) && (w += "translate(" + r + "%, " + n + "%) "),
        (b || o !== Br || a !== Br || l !== Br) &&
          (w +=
            l !== Br || b
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Bi),
        u !== Wi && (w += "rotate(" + u + Bi),
        c !== Wi && (w += "rotateY(" + c + Bi),
        d !== Wi && (w += "rotateX(" + d + Bi),
        (f !== Wi || h !== Wi) && (w += "skew(" + f + ", " + h + Bi),
        (_ !== 1 || p !== 1) && (w += "scale(" + _ + ", " + p + Bi),
        (y.style[dt] = w || "translate(0, 0)");
    },
    Ju = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.rotation,
        u = e.skewX,
        c = e.skewY,
        d = e.scaleX,
        f = e.scaleY,
        h = e.target,
        _ = e.xOrigin,
        p = e.yOrigin,
        m = e.xOffset,
        v = e.yOffset,
        y = e.forceCSS,
        x = parseFloat(o),
        w = parseFloat(a),
        b,
        C,
        T,
        E,
        k;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= cr),
            (u *= cr),
            (b = Math.cos(l) * d),
            (C = Math.sin(l) * d),
            (T = Math.sin(l - u) * -f),
            (E = Math.cos(l - u) * f),
            u &&
              ((c *= cr),
              (k = Math.tan(u - c)),
              (k = Math.sqrt(1 + k * k)),
              (T *= k),
              (E *= k),
              c &&
                ((k = Math.tan(c)),
                (k = Math.sqrt(1 + k * k)),
                (b *= k),
                (C *= k))),
            (b = yt(b)),
            (C = yt(C)),
            (T = yt(T)),
            (E = yt(E)))
          : ((b = d), (E = f), (C = T = 0)),
        ((x && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
          ((x = vi(h, "x", o, "px")), (w = vi(h, "y", a, "px"))),
        (_ || p || m || v) &&
          ((x = yt(x + _ - (_ * b + p * T) + m)),
          (w = yt(w + p - (_ * C + p * E) + v))),
        (r || n) &&
          ((k = h.getBBox()),
          (x = yt(x + (r / 100) * k.width)),
          (w = yt(w + (n / 100) * k.height))),
        (k =
          "matrix(" +
          b +
          "," +
          C +
          "," +
          T +
          "," +
          E +
          "," +
          x +
          "," +
          w +
          ")"),
        h.setAttribute("transform", k),
        y && (h.style[dt] = k);
    },
    tc = function (t, i, e, r, n) {
      var o = 360,
        a = Rt(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1),
        u = l - r,
        c = r + u + "deg",
        d,
        f;
      return (
        a &&
          ((d = n.split("_")[1]),
          d === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          d === "cw" && u < 0
            ? (u = ((u + o * ma) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * ma) % o) - ~~(u / o) * o)),
        (t._pt = f = new he(t._pt, i, e, r, u, Iu)),
        (f.e = c),
        (f.u = "deg"),
        t._props.push(e),
        f
      );
    },
    za = function (t, i) {
      for (var e in i) t[e] = i[e];
      return t;
    },
    ec = function (t, i, e) {
      var r = za({}, e._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = e.style,
        a,
        l,
        u,
        c,
        d,
        f,
        h,
        _;
      r.svg
        ? ((u = e.getAttribute("transform")),
          e.setAttribute("transform", ""),
          (o[dt] = i),
          (a = Wr(e, 1)),
          Fi(e, dt),
          e.setAttribute("transform", u))
        : ((u = getComputedStyle(e)[dt]),
          (o[dt] = i),
          (a = Wr(e, 1)),
          (o[dt] = u));
      for (l in ei)
        (u = r[l]),
          (c = a[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((h = qt(u)),
            (_ = qt(c)),
            (d = h !== _ ? vi(e, l, u, _) : parseFloat(u)),
            (f = parseFloat(c)),
            (t._pt = new he(t._pt, a, l, d, f - d, zs)),
            (t._pt.u = _ || 0),
            t._props.push(l));
      za(a, r);
    };
  ce("padding,margin,Width,Radius", function (s, t) {
    var i = "Top",
      e = "Right",
      r = "Bottom",
      n = "Left",
      o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function (
        a
      ) {
        return t < 2 ? s + a : "border" + a + s;
      });
    Tn[t > 1 ? "border" + s : s] = function (a, l, u, c, d) {
      var f, h;
      if (arguments.length < 4)
        return (
          (f = o.map(function (_) {
            return ii(a, _, u);
          })),
          (h = f.join(" ")),
          h.split(f[0]).length === 5 ? f[0] : h
        );
      (f = (c + "").split(" ")),
        (h = {}),
        o.forEach(function (_, p) {
          return (h[_] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
        }),
        a.init(l, h, d);
    };
  });
  var La = {
    name: "css",
    register: Ns,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, i, e, r, n) {
      var o = this._props,
        a = t.style,
        l = e.vars.startAt,
        u,
        c,
        d,
        f,
        h,
        _,
        p,
        m,
        v,
        y,
        x,
        w,
        b,
        C,
        T,
        E;
      As || Ns(),
        (this.styles = this.styles || ba(t)),
        (E = this.styles.props),
        (this.tween = e);
      for (p in i)
        if (
          p !== "autoRound" &&
          ((c = i[p]), !(ve[p] && oa(p, i, e, r, t, n)))
        ) {
          if (
            ((h = typeof c),
            (_ = Tn[p]),
            h === "function" && ((c = c.call(e, r, t, n)), (h = typeof c)),
            h === "string" && ~c.indexOf("random(") && (c = Dr(c)),
            _)
          )
            _(this, t, p, c, e) && (T = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (c += ""),
              (pi.lastIndex = 0),
              pi.test(u) || ((m = qt(u)), (v = qt(c))),
              v ? m !== v && (u = vi(t, p, u, v) + v) : m && (c += m),
              this.add(a, "setProperty", u, c, r, n, 0, 0, p),
              o.push(p),
              E.push(p, 0, a[p]);
          else if (h !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(e, r, t, n) : l[p]),
                  Rt(u) && ~u.indexOf("random(") && (u = Dr(u)),
                  qt(u + "") ||
                    u === "auto" ||
                    (u += ot.units[p] || qt(ii(t, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = ii(t, p)))
                : (u = ii(t, p)),
              (f = parseFloat(u)),
              (y = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (d = parseFloat(c)),
              p in $e &&
                (p === "autoAlpha" &&
                  (f === 1 && ii(t, "visibility") === "hidden" && d && (f = 0),
                  E.push("visibility", 0, a.visibility),
                  mi(
                    this,
                    a,
                    "visibility",
                    f ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = $e[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (x = p in ei),
              x)
            ) {
              if (
                (this.styles.save(p),
                h === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = De(t, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                w ||
                  ((b = t._gsap),
                  (b.renderTransform && !i.parseTransform) ||
                    Wr(t, i.parseTransform),
                  (C = i.smoothOrigin !== !1 && b.smooth),
                  (w = this._pt =
                    new he(this._pt, a, dt, 0, 1, b.renderTransform, b, 0, -1)),
                  (w.dep = 1)),
                p === "scale")
              )
                (this._pt = new he(
                  this._pt,
                  b,
                  "scaleY",
                  b.scaleY,
                  (y ? rr(b.scaleY, y + d) : d) - b.scaleY || 0,
                  zs
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                E.push(de, 0, a[de]),
                  (c = Zu(c)),
                  b.svg
                    ? Fs(t, c, 0, C, 0, this)
                    : ((v = parseFloat(c.split(" ")[2]) || 0),
                      v !== b.zOrigin && mi(this, b, "zOrigin", b.zOrigin, v),
                      mi(this, a, p, Sn(u), Sn(c)));
                continue;
              } else if (p === "svgOrigin") {
                Fs(t, c, 1, C, 0, this);
                continue;
              } else if (p in Oa) {
                tc(this, b, p, f, y ? rr(f, y + c) : c);
                continue;
              } else if (p === "smoothOrigin") {
                mi(this, b, "smooth", b.smooth, c);
                continue;
              } else if (p === "force3D") {
                b[p] = c;
                continue;
              } else if (p === "transform") {
                ec(this, c, t);
                continue;
              }
            } else p in a || (p = fr(p) || p);
            if (
              x ||
              ((d || d === 0) && (f || f === 0) && !Nu.test(c) && p in a)
            )
              (m = (u + "").substr((f + "").length)),
                d || (d = 0),
                (v = qt(c) || (p in ot.units ? ot.units[p] : m)),
                m !== v && (f = vi(t, p, u, v)),
                (this._pt = new he(
                  this._pt,
                  x ? b : a,
                  p,
                  f,
                  (y ? rr(f, y + d) : d) - f,
                  !x && (v === "px" || p === "zIndex") && i.autoRound !== !1
                    ? Wu
                    : zs
                )),
                (this._pt.u = v || 0),
                m !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = Fu));
            else if (p in a) Ku.call(this, t, p, u, y ? y + c : c);
            else if (p in t) this.add(t, p, u || t[p], y ? y + c : c, r, n);
            else if (p !== "parseTransform") {
              as(p, c);
              continue;
            }
            x ||
              (p in a
                ? E.push(p, 0, a[p])
                : typeof t[p] == "function"
                ? E.push(p, 2, t[p]())
                : E.push(p, 1, u || t[p])),
              o.push(p);
          }
        }
      T && fa(this);
    },
    render: function (t, i) {
      if (i.tween._time || !Ds())
        for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
      else i.styles.revert();
    },
    get: ii,
    aliases: $e,
    getSetter: function (t, i, e) {
      var r = $e[i];
      return (
        r && r.indexOf(",") < 0 && (i = r),
        i in ei && i !== de && (t._gsap.x || ii(t, "x"))
          ? e && ga === e
            ? i === "scale"
              ? Xu
              : Yu
            : (ga = e || {}) && (i === "scale" ? Vu : qu)
          : t.style && !es(t.style[i])
          ? Bu
          : ~i.indexOf("-")
          ? Hu
          : Es(t, i)
      );
    },
    core: { _removeProperty: Fi, _getMatrix: Is },
  };
  (fe.utils.checkPrefix = fr),
    (fe.core.getStyleSaver = ba),
    (function (s, t, i, e) {
      var r = ce(s + "," + t + "," + i, function (n) {
        ei[n] = 1;
      });
      ce(t, function (n) {
        (ot.units[n] = "deg"), (Oa[n] = 1);
      }),
        ($e[r[13]] = s + "," + t),
        ce(e, function (n) {
          var o = n.split(":");
          $e[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    ce(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (s) {
        ot.units[s] = "px";
      }
    ),
    fe.registerPlugin(La);
  var Ue = fe.registerPlugin(La) || fe;
  Ue.core.Tween;
  function ic(s, t) {
    for (var i = 0; i < t.length; i++) {
      var e = t[i];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(s, e.key, e);
    }
  }
  function rc(s, t, i) {
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
    Cn,
    xe,
    yi,
    wi,
    dr,
    Na,
    Hi,
    Hr,
    Ia,
    ri,
    Ie,
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
    Ba = 1,
    pr = [],
    G = [],
    Ge = [],
    Yr = Date.now,
    Bs = function (t, i) {
      return i;
    },
    nc = function () {
      var t = Hr.core,
        i = t.bridge || {},
        e = t._scrollers,
        r = t._proxies;
      e.push.apply(e, G),
        r.push.apply(r, Ge),
        (G = e),
        (Ge = r),
        (Bs = function (o, a) {
          return i[o](a);
        });
    },
    bi = function (t, i) {
      return ~Ge.indexOf(t) && Ge[Ge.indexOf(t) + 1][i];
    },
    Xr = function (t) {
      return !!~Ia.indexOf(t);
    },
    ee = function (t, i, e, r, n) {
      return t.addEventListener(i, e, { passive: r !== !1, capture: !!n });
    },
    ie = function (t, i, e, r) {
      return t.removeEventListener(i, e, !!r);
    },
    En = "scrollLeft",
    kn = "scrollTop",
    Hs = function () {
      return (ri && ri.isPressed) || G.cache++;
    },
    Pn = function (t, i) {
      var e = function r(n) {
        if (n || n === 0) {
          Ba && (xe.history.scrollRestoration = "manual");
          var o = ri && ri.isPressed;
          (n = r.v = Math.round(n) || (ri && ri.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = G.cache),
            o && Bs("ss", n);
        } else
          (i || G.cache !== r.cacheID || Bs("ref")) &&
            ((r.cacheID = G.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (e.offset = 0), t && e;
    },
    re = {
      s: En,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Pn(function (s) {
        return arguments.length
          ? xe.scrollTo(s, Mt.sc())
          : xe.pageXOffset || yi[En] || wi[En] || dr[En] || 0;
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
      op: re,
      sc: Pn(function (s) {
        return arguments.length
          ? xe.scrollTo(re.sc(), s)
          : xe.pageYOffset || yi[kn] || wi[kn] || dr[kn] || 0;
      }),
    },
    pe = function (t, i) {
      return (
        ((i && i._ctx && i._ctx.selector) || Bt.utils.toArray)(t)[0] ||
        (typeof t == "string" && Bt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    sc = function (t, i) {
      for (var e = i.length; e--; )
        if (i[e] === t || i[e].contains(t)) return !0;
      return !1;
    },
    xi = function (t, i) {
      var e = i.s,
        r = i.sc;
      Xr(t) && (t = yi.scrollingElement || wi);
      var n = G.indexOf(t),
        o = r === Mt.sc ? 1 : 2;
      !~n && (n = G.push(t) - 1), G[n + o] || ee(t, "scroll", Hs);
      var a = G[n + o],
        l =
          a ||
          (G[n + o] =
            Pn(bi(t, e), !0) ||
            (Xr(t)
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
    Ys = function (t, i, e) {
      var r = t,
        n = t,
        o = Yr(),
        a = o,
        l = i || 50,
        u = Math.max(500, l * 3),
        c = function (_, p) {
          var m = Yr();
          p || m - o > l
            ? ((n = r), (r = _), (a = o), (o = m))
            : e
            ? (r += _)
            : (r = n + ((_ - n) / (m - a)) * (o - a));
        },
        d = function () {
          (n = r = e ? 0 : r), (a = o = 0);
        },
        f = function (_) {
          var p = a,
            m = n,
            v = Yr();
          return (
            (_ || _ === 0) && _ !== r && c(_),
            o === a || v - a > u
              ? 0
              : ((r + (e ? m : -m)) / ((e ? v : o) - p)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: f };
    },
    Vr = function (t, i) {
      return (
        i && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Ha = function (t) {
      var i = Math.max.apply(Math, t),
        e = Math.min.apply(Math, t);
      return Math.abs(i) >= Math.abs(e) ? i : e;
    },
    Ya = function () {
      (Hr = Bt.core.globals().ScrollTrigger), Hr && Hr.core && nc();
    },
    Xa = function (t) {
      return (
        (Bt = t || Wa()),
        !Cn &&
          Bt &&
          typeof document != "undefined" &&
          document.body &&
          ((xe = window),
          (yi = document),
          (wi = yi.documentElement),
          (dr = yi.body),
          (Ia = [xe, yi, wi, dr]),
          Bt.utils.clamp,
          (Fa = Bt.core.context || function () {}),
          (Hi = "onpointerenter" in dr ? "pointer" : "mouse"),
          (Na = wt.isTouch =
            xe.matchMedia &&
            xe.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in xe ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Ie = wt.eventTypes =
            (
              "ontouchstart" in wi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in wi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Ba = 0);
          }, 500),
          Ya(),
          (Cn = 1)),
        Cn
      );
    };
  (re.op = Mt), (G.cache = 0);
  var wt = (function () {
    function s(i) {
      this.init(i);
    }
    var t = s.prototype;
    return (
      (t.init = function (e) {
        Cn || Xa(Bt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Hr || Ya();
        var r = e.tolerance,
          n = e.dragMinimum,
          o = e.type,
          a = e.target,
          l = e.lineHeight,
          u = e.debounce,
          c = e.preventDefault,
          d = e.onStop,
          f = e.onStopDelay,
          h = e.ignore,
          _ = e.wheelSpeed,
          p = e.event,
          m = e.onDragStart,
          v = e.onDragEnd,
          y = e.onDrag,
          x = e.onPress,
          w = e.onRelease,
          b = e.onRight,
          C = e.onLeft,
          T = e.onUp,
          E = e.onDown,
          k = e.onChangeX,
          P = e.onChangeY,
          L = e.onChange,
          M = e.onToggleX,
          D = e.onToggleY,
          F = e.onHover,
          B = e.onHoverEnd,
          W = e.onMove,
          R = e.ignoreCheck,
          q = e.isNormalizer,
          X = e.onGestureStart,
          g = e.onGestureEnd,
          j = e.onWheel,
          lt = e.onEnable,
          At = e.onDisable,
          ut = e.onClick,
          Ht = e.scrollSpeed,
          Kt = e.capture,
          kt = e.allowClicks,
          ae = e.lockAxis,
          Zt = e.onLockAxis;
        (this.target = a = pe(a) || wi),
          (this.vars = e),
          h && (h = Bt.utils.toArray(h)),
          (r = r || 1e-9),
          (n = n || 0),
          (_ = _ || 1),
          (Ht = Ht || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(xe.getComputedStyle(dr).lineHeight) || 22);
        var Ci,
          le,
          _e,
          tt,
          bt,
          ge,
          Ee,
          S = this,
          ke = 0,
          oi = 0,
          Ei = e.passive || (!c && e.passive !== !1),
          mt = xi(a, re),
          ai = xi(a, Mt),
          ki = mt(),
          Zi = ai(),
          Nt =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Ie[0] === "pointerdown",
          Pi = Xr(a),
          xt = a.ownerDocument || yi,
          Fe = [0, 0, 0],
          Ne = [0, 0, 0],
          li = 0,
          an = function () {
            return (li = Yr());
          },
          Pt = function (I, et) {
            return (
              ((S.event = I) && h && sc(I.target, h)) ||
              (et && Nt && I.pointerType !== "touch") ||
              (R && R(I, et))
            );
          },
          Zn = function () {
            S._vx.reset(), S._vy.reset(), le.pause(), d && d(S);
          },
          ui = function () {
            var I = (S.deltaX = Ha(Fe)),
              et = (S.deltaY = Ha(Ne)),
              O = Math.abs(I) >= r,
              H = Math.abs(et) >= r;
            L && (O || H) && L(S, I, et, Fe, Ne),
              O &&
                (b && S.deltaX > 0 && b(S),
                C && S.deltaX < 0 && C(S),
                k && k(S),
                M && S.deltaX < 0 != ke < 0 && M(S),
                (ke = S.deltaX),
                (Fe[0] = Fe[1] = Fe[2] = 0)),
              H &&
                (E && S.deltaY > 0 && E(S),
                T && S.deltaY < 0 && T(S),
                P && P(S),
                D && S.deltaY < 0 != oi < 0 && D(S),
                (oi = S.deltaY),
                (Ne[0] = Ne[1] = Ne[2] = 0)),
              (tt || _e) &&
                (W && W(S),
                _e && (m && _e === 1 && m(S), y && y(S), (_e = 0)),
                (tt = !1)),
              ge && !(ge = !1) && Zt && Zt(S),
              bt && (j(S), (bt = !1)),
              (Ci = 0);
          },
          Sr = function (I, et, O) {
            (Fe[O] += I),
              (Ne[O] += et),
              S._vx.update(I),
              S._vy.update(et),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Cr = function (I, et) {
            ae &&
              !Ee &&
              ((S.axis = Ee = Math.abs(I) > Math.abs(et) ? "x" : "y"),
              (ge = !0)),
              Ee !== "y" && ((Fe[2] += I), S._vx.update(I, !0)),
              Ee !== "x" && ((Ne[2] += et), S._vy.update(et, !0)),
              u ? Ci || (Ci = requestAnimationFrame(ui)) : ui();
          },
          Mi = function (I) {
            if (!Pt(I, 1)) {
              I = Vr(I, c);
              var et = I.clientX,
                O = I.clientY,
                H = et - S.x,
                N = O - S.y,
                Y = S.isDragging;
              (S.x = et),
                (S.y = O),
                (Y ||
                  ((H || N) &&
                    (Math.abs(S.startX - et) >= n ||
                      Math.abs(S.startY - O) >= n))) &&
                  ((_e = Y ? 2 : 1), Y || (S.isDragging = !0), Cr(H, N));
            }
          },
          Qi = (S.onPress = function (V) {
            Pt(V, 1) ||
              (V && V.button) ||
              ((S.axis = Ee = null),
              le.pause(),
              (S.isPressed = !0),
              (V = Vr(V)),
              (ke = oi = 0),
              (S.startX = S.x = V.clientX),
              (S.startY = S.y = V.clientY),
              S._vx.reset(),
              S._vy.reset(),
              ee(q ? a : xt, Ie[1], Mi, Ei, !0),
              (S.deltaX = S.deltaY = 0),
              x && x(S));
          }),
          Z = (S.onRelease = function (V) {
            if (!Pt(V, 1)) {
              ie(q ? a : xt, Ie[1], Mi, !0);
              var I = !isNaN(S.y - S.startY),
                et = S.isDragging,
                O =
                  et &&
                  (Math.abs(S.x - S.startX) > 3 ||
                    Math.abs(S.y - S.startY) > 3),
                H = Vr(V);
              !O &&
                I &&
                (S._vx.reset(),
                S._vy.reset(),
                c &&
                  kt &&
                  Bt.delayedCall(0.08, function () {
                    if (Yr() - li > 300 && !V.defaultPrevented) {
                      if (V.target.click) V.target.click();
                      else if (xt.createEvent) {
                        var N = xt.createEvent("MouseEvents");
                        N.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          xe,
                          1,
                          H.screenX,
                          H.screenY,
                          H.clientX,
                          H.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          V.target.dispatchEvent(N);
                      }
                    }
                  })),
                (S.isDragging = S.isGesturing = S.isPressed = !1),
                d && et && !q && le.restart(!0),
                _e && ui(),
                v && et && v(S),
                w && w(S, O);
            }
          }),
          ji = function (I) {
            return (
              I.touches &&
              I.touches.length > 1 &&
              (S.isGesturing = !0) &&
              X(I, S.isDragging)
            );
          },
          We = function () {
            return (S.isGesturing = !1) || g(S);
          },
          Be = function (I) {
            if (!Pt(I)) {
              var et = mt(),
                O = ai();
              Sr((et - ki) * Ht, (O - Zi) * Ht, 1),
                (ki = et),
                (Zi = O),
                d && le.restart(!0);
            }
          },
          He = function (I) {
            if (!Pt(I)) {
              (I = Vr(I, c)), j && (bt = !0);
              var et =
                (I.deltaMode === 1
                  ? l
                  : I.deltaMode === 2
                  ? xe.innerHeight
                  : 1) * _;
              Sr(I.deltaX * et, I.deltaY * et, 0), d && !q && le.restart(!0);
            }
          },
          Ji = function (I) {
            if (!Pt(I)) {
              var et = I.clientX,
                O = I.clientY,
                H = et - S.x,
                N = O - S.y;
              (S.x = et),
                (S.y = O),
                (tt = !0),
                d && le.restart(!0),
                (H || N) && Cr(H, N);
            }
          },
          Er = function (I) {
            (S.event = I), F(S);
          },
          ci = function (I) {
            (S.event = I), B(S);
          },
          ln = function (I) {
            return Pt(I) || (Vr(I, c) && ut(S));
          };
        (le = S._dc = Bt.delayedCall(f || 0.25, Zn).pause()),
          (S.deltaX = S.deltaY = 0),
          (S._vx = Ys(0, 50, !0)),
          (S._vy = Ys(0, 50, !0)),
          (S.scrollX = mt),
          (S.scrollY = ai),
          (S.isDragging = S.isGesturing = S.isPressed = !1),
          Fa(this),
          (S.enable = function (V) {
            return (
              S.isEnabled ||
                (ee(Pi ? xt : a, "scroll", Hs),
                o.indexOf("scroll") >= 0 &&
                  ee(Pi ? xt : a, "scroll", Be, Ei, Kt),
                o.indexOf("wheel") >= 0 && ee(a, "wheel", He, Ei, Kt),
                ((o.indexOf("touch") >= 0 && Na) ||
                  o.indexOf("pointer") >= 0) &&
                  (ee(a, Ie[0], Qi, Ei, Kt),
                  ee(xt, Ie[2], Z),
                  ee(xt, Ie[3], Z),
                  kt && ee(a, "click", an, !0, !0),
                  ut && ee(a, "click", ln),
                  X && ee(xt, "gesturestart", ji),
                  g && ee(xt, "gestureend", We),
                  F && ee(a, Hi + "enter", Er),
                  B && ee(a, Hi + "leave", ci),
                  W && ee(a, Hi + "move", Ji)),
                (S.isEnabled = !0),
                (S.isDragging = S.isGesturing = S.isPressed = tt = _e = !1),
                S._vx.reset(),
                S._vy.reset(),
                (ki = mt()),
                (Zi = ai()),
                V && V.type && Qi(V),
                lt && lt(S)),
              S
            );
          }),
          (S.disable = function () {
            S.isEnabled &&
              (pr.filter(function (V) {
                return V !== S && Xr(V.target);
              }).length || ie(Pi ? xt : a, "scroll", Hs),
              S.isPressed &&
                (S._vx.reset(), S._vy.reset(), ie(q ? a : xt, Ie[1], Mi, !0)),
              ie(Pi ? xt : a, "scroll", Be, Kt),
              ie(a, "wheel", He, Kt),
              ie(a, Ie[0], Qi, Kt),
              ie(xt, Ie[2], Z),
              ie(xt, Ie[3], Z),
              ie(a, "click", an, !0),
              ie(a, "click", ln),
              ie(xt, "gesturestart", ji),
              ie(xt, "gestureend", We),
              ie(a, Hi + "enter", Er),
              ie(a, Hi + "leave", ci),
              ie(a, Hi + "move", Ji),
              (S.isEnabled = S.isPressed = S.isDragging = !1),
              At && At(S));
          }),
          (S.kill = S.revert =
            function () {
              S.disable();
              var V = pr.indexOf(S);
              V >= 0 && pr.splice(V, 1), ri === S && (ri = 0);
            }),
          pr.push(S),
          q && Xr(a) && (ri = S),
          S.enable(p);
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
  (wt.version = "3.13.0"),
    (wt.create = function (s) {
      return new wt(s);
    }),
    (wt.register = Xa),
    (wt.getAll = function () {
      return pr.slice();
    }),
    (wt.getById = function (s) {
      return pr.filter(function (t) {
        return t.vars.id === s;
      })[0];
    }),
    Wa() && Bt.registerPlugin(wt);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var A,
    _r,
    K,
    at,
    Te,
    it,
    Xs,
    Mn,
    qr,
    $r,
    Ur,
    On,
    $t,
    An,
    Vs,
    ne,
    Va,
    qa,
    gr,
    $a,
    qs,
    Ua,
    se,
    $s,
    Ga,
    Ka,
    Ti,
    Us,
    Gs,
    mr,
    Ks,
    Dn,
    Zs,
    Qs,
    Rn = 1,
    Ut = Date.now,
    js = Ut(),
    Re = 0,
    Gr = 0,
    Za = function (t, i, e) {
      var r = Se(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (e["_" + i + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
    },
    Qa = function (t, i) {
      return i && (!Se(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    oc = function s() {
      return Gr && requestAnimationFrame(s);
    },
    ja = function () {
      return (An = 1);
    },
    Ja = function () {
      return (An = 0);
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
      return A || (tl() && (A = window.gsap) && A.registerPlugin && A);
    },
    Yi = function (t) {
      return !!~Xs.indexOf(t);
    },
    il = function (t) {
      return (
        (t === "Height" ? Ks : K["inner" + t]) ||
        Te["client" + t] ||
        it["client" + t]
      );
    },
    rl = function (t) {
      return (
        bi(t, "getBoundingClientRect") ||
        (Yi(t)
          ? function () {
              return ($n.width = K.innerWidth), ($n.height = Ks), $n;
            }
          : function () {
              return ni(t);
            })
      );
    },
    ac = function (t, i, e) {
      var r = e.d,
        n = e.d2,
        o = e.a;
      return (o = bi(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (i ? il(n) : t["client" + n]) || 0;
          };
    },
    lc = function (t, i) {
      return !i || ~Ge.indexOf(t)
        ? rl(t)
        : function () {
            return $n;
          };
    },
    Ze = function (t, i) {
      var e = i.s,
        r = i.d2,
        n = i.d,
        o = i.a;
      return Math.max(
        0,
        (e = "scroll" + r) && (o = bi(t, e))
          ? o() - rl(t)()[n]
          : Yi(t)
          ? (Te[e] || it[e]) - il(r)
          : t[e] - t["offset" + r]
      );
    },
    zn = function (t, i) {
      for (var e = 0; e < gr.length; e += 3)
        (!i || ~i.indexOf(gr[e + 1])) && t(gr[e], gr[e + 1], gr[e + 2]);
    },
    Se = function (t) {
      return typeof t == "string";
    },
    Gt = function (t) {
      return typeof t == "function";
    },
    Zr = function (t) {
      return typeof t == "number";
    },
    Xi = function (t) {
      return typeof t == "object";
    },
    Qr = function (t, i, e) {
      return t && t.progress(i ? 0 : 1) && e && t.pause();
    },
    Js = function (t, i) {
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
    nl = "left",
    sl = "top",
    to = "right",
    eo = "bottom",
    Vi = "width",
    qi = "height",
    jr = "Right",
    Jr = "Left",
    tn = "Top",
    en = "Bottom",
    Et = "padding",
    ze = "margin",
    yr = "Width",
    io = "Height",
    Ot = "px",
    Le = function (t) {
      return K.getComputedStyle(t);
    },
    uc = function (t) {
      var i = Le(t).position;
      t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
    },
    ol = function (t, i) {
      for (var e in i) e in t || (t[e] = i[e]);
      return t;
    },
    ni = function (t, i) {
      var e =
          i &&
          Le(t)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          A.to(t, {
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
    Ln = function (t, i) {
      var e = i.d2;
      return t["offset" + e] || t["client" + e] || 0;
    },
    al = function (t) {
      var i = [],
        e = t.labels,
        r = t.duration(),
        n;
      for (n in e) i.push(e[n] / r);
      return i;
    },
    cc = function (t) {
      return function (i) {
        return A.utils.snap(al(t), i);
      };
    },
    ro = function (t) {
      var i = A.utils.snap(t),
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
    hc = function (t) {
      return function (i, e) {
        return ro(al(t))(i, e.direction);
      };
    },
    Nn = function (t, i, e, r) {
      return e.split(",").forEach(function (n) {
        return t(i, n, r);
      });
    },
    zt = function (t, i, e, r, n) {
      return t.addEventListener(i, e, { passive: !r, capture: !!n });
    },
    Lt = function (t, i, e, r) {
      return t.removeEventListener(i, e, !!r);
    },
    In = function (t, i, e) {
      (e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e));
    },
    ll = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Fn = { toggleActions: "play", anticipatePin: 0 },
    Wn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bn = function (t, i) {
      if (Se(t)) {
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
    Hn = function (t, i, e, r, n, o, a, l) {
      var u = n.startColor,
        c = n.endColor,
        d = n.fontSize,
        f = n.indent,
        h = n.fontWeight,
        _ = at.createElement("div"),
        p = Yi(e) || bi(e, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        v = p ? it : e,
        y = t.indexOf("start") !== -1,
        x = y ? u : c,
        w =
          "border-color:" +
          x +
          ";font-size:" +
          d +
          ";color:" +
          x +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
        (m || l || !p) &&
          (w += (r === Mt ? to : eo) + ":" + (o + parseFloat(f)) + "px;"),
        a &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = y),
        _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
        (_.style.cssText = w),
        (_.innerText = i || i === 0 ? t + "-" + i : t),
        v.children[0] ? v.insertBefore(_, v.children[0]) : v.appendChild(_),
        (_._offset = _["offset" + r.op.d2]),
        Yn(_, 0, r, y),
        _
      );
    },
    Yn = function (t, i, e, r) {
      var n = { display: "block" },
        o = e[r ? "os2" : "p2"],
        a = e[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[e.a + "Percent"] = r ? -100 : 0),
        (n[e.a] = r ? "1px" : 0),
        (n["border" + o + yr] = 1),
        (n["border" + a + yr] = 0),
        (n[e.p] = i + "px"),
        A.set(t, n);
    },
    $ = [],
    no = {},
    rn,
    ul = function () {
      return Ut() - Re > 34 && (rn || (rn = requestAnimationFrame(si)));
    },
    wr = function () {
      (!se || !se.isPressed || se.startX > it.clientWidth) &&
        (G.cache++,
        se ? rn || (rn = requestAnimationFrame(si)) : si(),
        Re || Ui("scrollStart"),
        (Re = Ut()));
    },
    so = function () {
      (Ka = K.innerWidth), (Ga = K.innerHeight);
    },
    nn = function (t) {
      G.cache++,
        (t === !0 ||
          (!$t &&
            !Ua &&
            !at.fullscreenElement &&
            !at.webkitFullscreenElement &&
            (!$s ||
              Ka !== K.innerWidth ||
              Math.abs(K.innerHeight - Ga) > K.innerHeight * 0.25))) &&
          Mn.restart(!0);
    },
    $i = {},
    fc = [],
    cl = function s() {
      return Lt(U, "scrollEnd", s) || Ki(!0);
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
    Ce = [],
    hl = function (t) {
      for (var i = 0; i < Ce.length; i += 5)
        (!t || (Ce[i + 4] && Ce[i + 4].query === t)) &&
          ((Ce[i].style.cssText = Ce[i + 1]),
          Ce[i].getBBox && Ce[i].setAttribute("transform", Ce[i + 2] || ""),
          (Ce[i + 3].uncache = 1));
    },
    oo = function (t, i) {
      var e;
      for (ne = 0; ne < $.length; ne++)
        (e = $[ne]),
          e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
      (Dn = !0), i && hl(i), i || Ui("revert");
    },
    fl = function (t, i) {
      G.cache++,
        (i || !oe) &&
          G.forEach(function (e) {
            return Gt(e) && e.cacheID++ && (e.rec = 0);
          }),
        Se(t) && (K.history.scrollRestoration = Gs = t);
    },
    oe,
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
        (Ks = (!se && mr.offsetHeight) || K.innerHeight),
        it.removeChild(mr);
    },
    _l = function (t) {
      return qr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (i) {
        return (i.style.display = t ? "none" : "block");
      });
    },
    Ki = function (t, i) {
      if (
        ((Te = at.documentElement),
        (it = at.body),
        (Xs = [K, at, Te, it]),
        Re && !t && !Dn)
      ) {
        zt(U, "scrollEnd", cl);
        return;
      }
      pl(),
        (oe = U.isRefreshing = !0),
        G.forEach(function (r) {
          return Gt(r) && ++r.cacheID && (r.rec = r());
        });
      var e = Ui("refreshInit");
      $a && U.sort(),
        i || oo(),
        G.forEach(function (r) {
          Gt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        $.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Dn = !1),
        $.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
          }
        }),
        (Zs = 1),
        _l(!0),
        $.forEach(function (r) {
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
        (Zs = 0),
        e.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        G.forEach(function (r) {
          Gt(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        fl(Gs, 1),
        Mn.pause(),
        Gi++,
        (oe = 2),
        si(2),
        $.forEach(function (r) {
          return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (oe = U.isRefreshing = !1),
        Ui("refresh");
    },
    ao = 0,
    Xn = 1,
    sn,
    si = function (t) {
      if (t === 2 || (!oe && !Dn)) {
        (U.isUpdating = !0), sn && sn.update(0);
        var i = $.length,
          e = Ut(),
          r = e - js >= 50,
          n = i && $[0].scroll();
        if (
          ((Xn = ao > n ? -1 : 1),
          oe || (ao = n),
          r &&
            (Re && !An && e - Re > 200 && ((Re = 0), Ui("scrollEnd")),
            (Ur = js),
            (js = e)),
          Xn < 0)
        ) {
          for (ne = i; ne-- > 0; ) $[ne] && $[ne].update(0, r);
          Xn = 1;
        } else for (ne = 0; ne < i; ne++) $[ne] && $[ne].update(0, r);
        U.isUpdating = !1;
      }
      rn = 0;
    },
    lo = [
      nl,
      sl,
      eo,
      to,
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
    Vn = lo.concat([
      Vi,
      qi,
      "boxSizing",
      "max" + yr,
      "max" + io,
      "position",
      ze,
      Et,
      Et + tn,
      Et + jr,
      Et + en,
      Et + Jr,
    ]),
    pc = function (t, i, e) {
      br(e);
      var r = t._gsap;
      if (r.spacerIsNative) br(r.spacerState);
      else if (t._gsap.swappedIn) {
        var n = i.parentNode;
        n && (n.insertBefore(t, i), n.removeChild(i));
      }
      t._gsap.swappedIn = !1;
    },
    uo = function (t, i, e, r) {
      if (!t._gsap.swappedIn) {
        for (var n = lo.length, o = i.style, a = t.style, l; n--; )
          (l = lo[n]), (o[l] = e[l]);
        (o.position = e.position === "absolute" ? "absolute" : "relative"),
          e.display === "inline" && (o.display = "inline-block"),
          (a[eo] = a[to] = "auto"),
          (o.flexBasis = e.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Vi] = Ln(t, re) + Ot),
          (o[qi] = Ln(t, Mt) + Ot),
          (o[Et] = a[ze] = a[sl] = a[nl] = "0"),
          br(r),
          (a[Vi] = a["max" + yr] = e[Vi]),
          (a[qi] = a["max" + io] = e[qi]),
          (a[Et] = e[Et]),
          t.parentNode !== i &&
            (t.parentNode.insertBefore(i, t), i.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    _c = /([A-Z])/g,
    br = function (t) {
      if (t) {
        var i = t.t.style,
          e = t.length,
          r = 0,
          n,
          o;
        for ((t.t._gsap || A.core.getCache(t.t)).uncache = 1; r < e; r += 2)
          (o = t[r + 1]),
            (n = t[r]),
            o
              ? (i[n] = o)
              : i[n] && i.removeProperty(n.replace(_c, "-$1").toLowerCase());
      }
    },
    qn = function (t) {
      for (var i = Vn.length, e = t.style, r = [], n = 0; n < i; n++)
        r.push(Vn[n], e[Vn[n]]);
      return (r.t = t), r;
    },
    gc = function (t, i, e) {
      for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
        (a = t[o]), r.push(a, a in i ? i[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    $n = { left: 0, top: 0 },
    gl = function (t, i, e, r, n, o, a, l, u, c, d, f, h, _) {
      Gt(t) && (t = t(l)),
        Se(t) &&
          t.substr(0, 3) === "max" &&
          (t = f + (t.charAt(4) === "=" ? Bn("0" + t.substr(3), e) : 0));
      var p = h ? h.time() : 0,
        m,
        v,
        y;
      if ((h && h.seek(0), isNaN(t) || (t = +t), Zr(t)))
        h &&
          (t = A.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            t
          )),
          a && Yn(a, e, r, !0);
      else {
        Gt(i) && (i = i(l));
        var x = (t || "0").split(" "),
          w,
          b,
          C,
          T;
        (y = pe(i, l) || it),
          (w = ni(y) || {}),
          (!w || (!w.left && !w.top)) &&
            Le(y).display === "none" &&
            ((T = y.style.display),
            (y.style.display = "block"),
            (w = ni(y)),
            T ? (y.style.display = T) : y.style.removeProperty("display")),
          (b = Bn(x[0], w[r.d])),
          (C = Bn(x[1] || "0", e)),
          (t = w[r.p] - u[r.p] - c + b + n - C),
          a && Yn(a, C, r, e - C < 20 || (a._isStart && C > 20)),
          (e -= e - C);
      }
      if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
        var E = t + e,
          k = o._isStart;
        (m = "scroll" + r.d2),
          Yn(
            o,
            E,
            r,
            (k && E > 20) ||
              (!k && (d ? Math.max(it[m], Te[m]) : o.parentNode[m]) <= E + 1)
          ),
          d &&
            ((u = ni(a)),
            d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ot));
      }
      return (
        h &&
          y &&
          ((m = ni(y)),
          h.seek(f),
          (v = ni(y)),
          (h._caScrollDist = m[r.p] - v[r.p]),
          (t = (t / h._caScrollDist) * f)),
        h && h.seek(p),
        h ? t : Math.round(t)
      );
    },
    mc = /(webkit|moz|length|cssText|inset)/i,
    ml = function (t, i, e, r) {
      if (t.parentNode !== i) {
        var n = t.style,
          o,
          a;
        if (i === it) {
          (t._stOrig = n.cssText), (a = Le(t));
          for (o in a)
            !+o &&
              !mc.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = e), (n.left = r);
        } else n.cssText = t._stOrig;
        (A.core.getCache(t).uncache = 1), i.appendChild(t);
      }
    },
    vl = function (t, i, e) {
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
    Un = function (t, i, e) {
      var r = {};
      (r[i.p] = "+=" + e), A.set(t, r);
    },
    yl = function (t, i) {
      var e = xi(t, i),
        r = "_scroll" + i.p2,
        n = function o(a, l, u, c, d) {
          var f = o.tween,
            h = l.onComplete,
            _ = {};
          u = u || e();
          var p = vl(e, u, function () {
            f.kill(), (o.tween = 0);
          });
          return (
            (d = (c && d) || 0),
            (c = c || a - u),
            f && f.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[r] = function () {
              return p(u + c * f.ratio + d * f.ratio * f.ratio);
            }),
            (l.onUpdate = function () {
              G.cache++, o.tween && si();
            }),
            (l.onComplete = function () {
              (o.tween = 0), h && h.call(f);
            }),
            (f = o.tween = A.to(t, l)),
            f
          );
        };
      return (
        (t[r] = e),
        (e.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        zt(t, "wheel", e.wheelHandler),
        U.isTouch && zt(t, "touchmove", e.wheelHandler),
        n
      );
    },
    U = (function () {
      function s(i, e) {
        _r ||
          s.register(A) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Us(this),
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
            this.update = this.refresh = this.kill = Ke;
            return;
          }
          e = ol(Se(e) || Zr(e) || e.nodeType ? { trigger: e } : e, Fn);
          var n = e,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            c = n.onRefresh,
            d = n.scrub,
            f = n.trigger,
            h = n.pin,
            _ = n.pinSpacing,
            p = n.invalidateOnRefresh,
            m = n.anticipatePin,
            v = n.onScrubComplete,
            y = n.onSnapComplete,
            x = n.once,
            w = n.snap,
            b = n.pinReparent,
            C = n.pinSpacer,
            T = n.containerAnimation,
            E = n.fastScrollEnd,
            k = n.preventOverlaps,
            P =
              e.horizontal || (e.containerAnimation && e.horizontal !== !1)
                ? re
                : Mt,
            L = !d && d !== 0,
            M = pe(e.scroller || K),
            D = A.core.getCache(M),
            F = Yi(M),
            B =
              ("pinType" in e
                ? e.pinType
                : bi(M, "pinType") || (F && "fixed")) === "fixed",
            W = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            R = L && e.toggleActions.split(" "),
            q = "markers" in e ? e.markers : Fn.markers,
            X = F ? 0 : parseFloat(Le(M)["border" + P.p2 + yr]) || 0,
            g = this,
            j =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(g);
              },
            lt = ac(M, F, P),
            At = lc(M, F),
            ut = 0,
            Ht = 0,
            Kt = 0,
            kt = xi(M, P),
            ae,
            Zt,
            Ci,
            le,
            _e,
            tt,
            bt,
            ge,
            Ee,
            S,
            ke,
            oi,
            Ei,
            mt,
            ai,
            ki,
            Zi,
            Nt,
            Pi,
            xt,
            Fe,
            Ne,
            li,
            an,
            Pt,
            Zn,
            ui,
            Sr,
            Cr,
            Mi,
            Qi,
            Z,
            ji,
            We,
            Be,
            He,
            Ji,
            Er,
            ci;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = P),
            (m *= 45),
            (g.scroller = M),
            (g.scroll = T ? T.time.bind(T) : kt),
            (le = kt()),
            (g.vars = e),
            (r = r || e.animation),
            "refreshPriority" in e &&
              (($a = 1), e.refreshPriority === -9999 && (sn = g)),
            (D.tweenScroll = D.tweenScroll || {
              top: yl(M, Mt),
              left: yl(M, re),
            }),
            (g.tweenTo = ae = D.tweenScroll[P.p]),
            (g.scrubDuration = function (O) {
              (ji = Zr(O) && O),
                ji
                  ? Z
                    ? Z.duration(O)
                    : (Z = A.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: ji,
                        paused: !0,
                        onComplete: function () {
                          return v && v(g);
                        },
                      }))
                  : (Z && Z.progress(1).kill(), (Z = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !g.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  e.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (g.animation = r.pause()),
              (r.scrollTrigger = g),
              g.scrubDuration(d),
              (Mi = 0),
              l || (l = r.vars.id)),
            w &&
              ((!Xi(w) || w.push) && (w = { snapTo: w }),
              "scrollBehavior" in it.style &&
                A.set(F ? [it, Te] : M, { scrollBehavior: "auto" }),
              G.forEach(function (O) {
                return (
                  Gt(O) &&
                  O.target === (F ? at.scrollingElement || Te : M) &&
                  (O.smooth = !1)
                );
              }),
              (Ci = Gt(w.snapTo)
                ? w.snapTo
                : w.snapTo === "labels"
                ? cc(r)
                : w.snapTo === "labelsDirectional"
                ? hc(r)
                : w.directional !== !1
                ? function (O, H) {
                    return ro(w.snapTo)(O, Ut() - Ht < 500 ? 0 : H.direction);
                  }
                : A.utils.snap(w.snapTo)),
              (We = w.duration || { min: 0.1, max: 2 }),
              (We = Xi(We) ? $r(We.min, We.max) : $r(We, We)),
              (Be = A.delayedCall(w.delay || ji / 2 || 0.1, function () {
                var O = kt(),
                  H = Ut() - Ht < 500,
                  N = ae.tween;
                if (
                  (H || Math.abs(g.getVelocity()) < 10) &&
                  !N &&
                  !An &&
                  ut !== O
                ) {
                  var Y = (O - tt) / mt,
                    It = r && !L ? r.totalProgress() : Y,
                    J = H ? 0 : ((It - Qi) / (Ut() - Ur)) * 1e3 || 0,
                    Tt = A.utils.clamp(-Y, 1 - Y, (vr(J / 2) * J) / 0.185),
                    Qt = Y + (w.inertia === !1 ? 0 : Tt),
                    vt,
                    ht,
                    st = w,
                    Ye = st.onStart,
                    pt = st.onInterrupt,
                    Pe = st.onComplete;
                  if (
                    ((vt = Ci(Qt, g)),
                    Zr(vt) || (vt = Qt),
                    (ht = Math.max(0, Math.round(tt + vt * mt))),
                    O <= bt && O >= tt && ht !== O)
                  ) {
                    if (N && !N._initted && N.data <= vr(ht - O)) return;
                    w.inertia === !1 && (Tt = vt - Y),
                      ae(
                        ht,
                        {
                          duration: We(
                            vr(
                              (Math.max(vr(Qt - It), vr(vt - It)) * 0.185) /
                                J /
                                0.05 || 0
                            )
                          ),
                          ease: w.ease || "power3",
                          data: vr(ht - O),
                          onInterrupt: function () {
                            return Be.restart(!0) && pt && pt(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (ut = kt()),
                              r &&
                                !L &&
                                (Z
                                  ? Z.resetTo(
                                      "totalProgress",
                                      vt,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(vt)),
                              (Mi = Qi =
                                r && !L ? r.totalProgress() : g.progress),
                              y && y(g),
                              Pe && Pe(g);
                          },
                        },
                        O,
                        Tt * mt,
                        ht - O - Tt * mt
                      ),
                      Ye && Ye(g, ae.tween);
                  }
                } else g.isActive && ut !== O && Be.restart(!0);
              }).pause())),
            l && (no[l] = g),
            (f = g.trigger = pe(f || (h !== !0 && h))),
            (ci = f && f._gsap && f._gsap.stRevert),
            ci && (ci = ci(g)),
            (h = h === !0 ? f : pe(h)),
            Se(a) && (a = { targets: f, className: a }),
            h &&
              (_ === !1 ||
                _ === ze ||
                (_ =
                  !_ &&
                  h.parentNode &&
                  h.parentNode.style &&
                  Le(h.parentNode).display === "flex"
                    ? !1
                    : Et),
              (g.pin = h),
              (Zt = A.core.getCache(h)),
              Zt.spacer
                ? (ai = Zt.pinState)
                : (C &&
                    ((C = pe(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Zt.spacerIsNative = !!C),
                    C && (Zt.spacerState = qn(C))),
                  (Zt.spacer = Nt = C || at.createElement("div")),
                  Nt.classList.add("pin-spacer"),
                  l && Nt.classList.add("pin-spacer-" + l),
                  (Zt.pinState = ai = qn(h))),
              e.force3D !== !1 && A.set(h, { force3D: !0 }),
              (g.spacer = Nt = Zt.spacer),
              (Cr = Le(h)),
              (an = Cr[_ + P.os2]),
              (xt = A.getProperty(h)),
              (Fe = A.quickSetter(h, P.a, Ot)),
              uo(h, Nt, Cr),
              (Zi = qn(h))),
            q)
          ) {
            (oi = Xi(q) ? ol(q, ll) : ll),
              (S = Hn("scroller-start", l, M, P, oi, 0)),
              (ke = Hn("scroller-end", l, M, P, oi, 0, S)),
              (Pi = S["offset" + P.op.d2]);
            var ln = pe(bi(M, "content") || M);
            (ge = this.markerStart = Hn("start", l, ln, P, oi, Pi, 0, T)),
              (Ee = this.markerEnd = Hn("end", l, ln, P, oi, Pi, 0, T)),
              T && (Er = A.quickSetter([ge, Ee], P.a, Ot)),
              !B &&
                !(Ge.length && bi(M, "fixedMarkers") === !0) &&
                (uc(F ? it : M),
                A.set([S, ke], { force3D: !0 }),
                (Zn = A.quickSetter(S, P.a, Ot)),
                (Sr = A.quickSetter(ke, P.a, Ot)));
          }
          if (T) {
            var V = T.vars.onUpdate,
              I = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), V && V.apply(T, I || []);
            });
          }
          if (
            ((g.previous = function () {
              return $[$.indexOf(g) - 1];
            }),
            (g.next = function () {
              return $[$.indexOf(g) + 1];
            }),
            (g.revert = function (O, H) {
              if (!H) return g.kill(!0);
              var N = O !== !1 || !g.enabled,
                Y = $t;
              N !== g.isReverted &&
                (N &&
                  ((He = Math.max(kt(), g.scroll.rec || 0)),
                  (Kt = g.progress),
                  (Ji = r && r.progress())),
                ge &&
                  [ge, Ee, S, ke].forEach(function (It) {
                    return (It.style.display = N ? "none" : "block");
                  }),
                N && (($t = g), g.update(N)),
                h &&
                  (!b || !g.isActive) &&
                  (N ? pc(h, Nt, ai) : uo(h, Nt, Le(h), Pt)),
                N || g.update(N),
                ($t = Y),
                (g.isReverted = N));
            }),
            (g.refresh = function (O, H, N, Y) {
              if (!(($t || !g.enabled) && !H)) {
                if (h && O && Re) {
                  zt(s, "scrollEnd", cl);
                  return;
                }
                !oe && j && j(g),
                  ($t = g),
                  ae.tween && !N && (ae.tween.kill(), (ae.tween = 0)),
                  Z && Z.pause(),
                  p &&
                    r &&
                    (r.revert({ kill: !1 }).invalidate(),
                    r.getChildren &&
                      r.getChildren(!0, !0, !1).forEach(function (Oi) {
                        return Oi.vars.immediateRender && Oi.render(0, !0, !0);
                      })),
                  g.isReverted || g.revert(!0, !0),
                  (g._subPinOffset = !1);
                var It = lt(),
                  J = At(),
                  Tt = T ? T.duration() : Ze(M, P),
                  Qt = mt <= 0.01 || !mt,
                  vt = 0,
                  ht = Y || 0,
                  st = Xi(N) ? N.end : e.end,
                  Ye = e.endTrigger || f,
                  pt = Xi(N)
                    ? N.start
                    : e.start ||
                      (e.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                  Pe = (g.pinnedContainer =
                    e.pinnedContainer && pe(e.pinnedContainer, g)),
                  Qe = (f && Math.max(0, $.indexOf(g))) || 0,
                  Yt = Qe,
                  Xt,
                  jt,
                  tr,
                  Qn,
                  Jt,
                  Dt,
                  je,
                  yo,
                  Fl,
                  un,
                  Je,
                  cn,
                  jn;
                for (
                  q &&
                  Xi(N) &&
                  ((cn = A.getProperty(S, P.p)), (jn = A.getProperty(ke, P.p)));
                  Yt-- > 0;

                )
                  (Dt = $[Yt]),
                    Dt.end || Dt.refresh(0, 1) || ($t = g),
                    (je = Dt.pin),
                    je &&
                      (je === f || je === h || je === Pe) &&
                      !Dt.isReverted &&
                      (un || (un = []), un.unshift(Dt), Dt.revert(!0, !0)),
                    Dt !== $[Yt] && (Qe--, Yt--);
                for (
                  Gt(pt) && (pt = pt(g)),
                    pt = Za(pt, "start", g),
                    tt =
                      gl(
                        pt,
                        f,
                        It,
                        P,
                        kt(),
                        ge,
                        S,
                        g,
                        J,
                        X,
                        B,
                        Tt,
                        T,
                        g._startClamp && "_startClamp"
                      ) || (h ? -0.001 : 0),
                    Gt(st) && (st = st(g)),
                    Se(st) &&
                      !st.indexOf("+=") &&
                      (~st.indexOf(" ")
                        ? (st = (Se(pt) ? pt.split(" ")[0] : "") + st)
                        : ((vt = Bn(st.substr(2), It)),
                          (st = Se(pt)
                            ? pt
                            : (T
                                ? A.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    tt
                                  )
                                : tt) + vt),
                          (Ye = f))),
                    st = Za(st, "end", g),
                    bt =
                      Math.max(
                        tt,
                        gl(
                          st || (Ye ? "100% 0" : Tt),
                          Ye,
                          It,
                          P,
                          kt() + vt,
                          Ee,
                          ke,
                          g,
                          J,
                          X,
                          B,
                          Tt,
                          T,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    vt = 0,
                    Yt = Qe;
                  Yt--;

                )
                  (Dt = $[Yt]),
                    (je = Dt.pin),
                    je &&
                      Dt.start - Dt._pinPush <= tt &&
                      !T &&
                      Dt.end > 0 &&
                      ((Xt =
                        Dt.end -
                        (g._startClamp ? Math.max(0, Dt.start) : Dt.start)),
                      ((je === f && Dt.start - Dt._pinPush < tt) ||
                        je === Pe) &&
                        isNaN(pt) &&
                        (vt += Xt * (1 - Dt.progress)),
                      je === h && (ht += Xt));
                if (
                  ((tt += vt),
                  (bt += vt),
                  g._startClamp && (g._startClamp += vt),
                  g._endClamp &&
                    !oe &&
                    ((g._endClamp = bt || -0.001),
                    (bt = Math.min(bt, Ze(M, P)))),
                  (mt = bt - tt || ((tt -= 0.01) && 0.001)),
                  Qt &&
                    (Kt = A.utils.clamp(0, 1, A.utils.normalize(tt, bt, He))),
                  (g._pinPush = ht),
                  ge &&
                    vt &&
                    ((Xt = {}),
                    (Xt[P.a] = "+=" + vt),
                    Pe && (Xt[P.p] = "-=" + kt()),
                    A.set([ge, Ee], Xt)),
                  h && !(Zs && g.end >= Ze(M, P)))
                )
                  (Xt = Le(h)),
                    (Qn = P === Mt),
                    (tr = kt()),
                    (Ne = parseFloat(xt(P.a)) + ht),
                    !Tt &&
                      bt > 1 &&
                      ((Je = (F ? at.scrollingElement || Te : M).style),
                      (Je = {
                        style: Je,
                        value: Je["overflow" + P.a.toUpperCase()],
                      }),
                      F &&
                        Le(it)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                        (Je.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    uo(h, Nt, Xt),
                    (Zi = qn(h)),
                    (jt = ni(h, !0)),
                    (yo = B && xi(M, Qn ? re : Mt)()),
                    _
                      ? ((Pt = [_ + P.os2, mt + ht + Ot]),
                        (Pt.t = Nt),
                        (Yt = _ === Et ? Ln(h, P) + mt + ht : 0),
                        Yt &&
                          (Pt.push(P.d, Yt + Ot),
                          Nt.style.flexBasis !== "auto" &&
                            (Nt.style.flexBasis = Yt + Ot)),
                        br(Pt),
                        Pe &&
                          $.forEach(function (Oi) {
                            Oi.pin === Pe &&
                              Oi.vars.pinSpacing !== !1 &&
                              (Oi._subPinOffset = !0);
                          }),
                        B && kt(He))
                      : ((Yt = Ln(h, P)),
                        Yt &&
                          Nt.style.flexBasis !== "auto" &&
                          (Nt.style.flexBasis = Yt + Ot)),
                    B &&
                      ((Jt = {
                        top: jt.top + (Qn ? tr - tt : yo) + Ot,
                        left: jt.left + (Qn ? yo : tr - tt) + Ot,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Jt[Vi] = Jt["max" + yr] = Math.ceil(jt.width) + Ot),
                      (Jt[qi] = Jt["max" + io] = Math.ceil(jt.height) + Ot),
                      (Jt[ze] =
                        Jt[ze + tn] =
                        Jt[ze + jr] =
                        Jt[ze + en] =
                        Jt[ze + Jr] =
                          "0"),
                      (Jt[Et] = Xt[Et]),
                      (Jt[Et + tn] = Xt[Et + tn]),
                      (Jt[Et + jr] = Xt[Et + jr]),
                      (Jt[Et + en] = Xt[Et + en]),
                      (Jt[Et + Jr] = Xt[Et + Jr]),
                      (ki = gc(ai, Jt, b)),
                      oe && kt(0)),
                    r
                      ? ((Fl = r._initted),
                        qs(1),
                        r.render(r.duration(), !0, !0),
                        (li = xt(P.a) - Ne + mt + ht),
                        (ui = Math.abs(mt - li) > 1),
                        B && ui && ki.splice(ki.length - 2, 2),
                        r.render(0, !0, !0),
                        Fl || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        qs(0))
                      : (li = mt),
                    Je &&
                      (Je.value
                        ? (Je.style["overflow" + P.a.toUpperCase()] = Je.value)
                        : Je.style.removeProperty("overflow-" + P.a));
                else if (f && kt() && !T)
                  for (jt = f.parentNode; jt && jt !== it; )
                    jt._pinOffset &&
                      ((tt -= jt._pinOffset), (bt -= jt._pinOffset)),
                      (jt = jt.parentNode);
                un &&
                  un.forEach(function (Oi) {
                    return Oi.revert(!1, !0);
                  }),
                  (g.start = tt),
                  (g.end = bt),
                  (le = _e = oe ? He : kt()),
                  !T && !oe && (le < He && kt(He), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (Ht = Ut()),
                  Be && ((ut = -1), Be.restart(!0)),
                  ($t = 0),
                  r &&
                    L &&
                    (r._initted || Ji) &&
                    r.progress() !== Ji &&
                    r.progress(Ji || 0, !0).render(r.time(), !0, !0),
                  (Qt || Kt !== g.progress || T || p || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      (r._initted || Kt || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        T && tt < -0.001 && !Kt
                          ? A.utils.normalize(tt, bt, 0)
                          : Kt,
                        !0
                      ),
                    (g.progress = Qt || (le - tt) / mt === Kt ? 0 : Kt)),
                  h && _ && (Nt._pinOffset = Math.round(g.progress * li)),
                  Z && Z.invalidate(),
                  isNaN(cn) ||
                    ((cn -= A.getProperty(S, P.p)),
                    (jn -= A.getProperty(ke, P.p)),
                    Un(S, P, cn),
                    Un(ge, P, cn - (Y || 0)),
                    Un(ke, P, jn),
                    Un(Ee, P, jn - (Y || 0))),
                  Qt && !oe && g.update(),
                  c && !oe && !Ei && ((Ei = !0), c(g), (Ei = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((kt() - _e) / (Ut() - Ur)) * 1e3 || 0;
            }),
            (g.endAnimation = function () {
              Qr(g.callbackAnimation),
                r &&
                  (Z
                    ? Z.progress(1)
                    : r.paused()
                    ? L || Qr(r, g.direction < 0, 1)
                    : Qr(r, r.reversed()));
            }),
            (g.labelToScroll = function (O) {
              return (
                (r &&
                  r.labels &&
                  (tt || g.refresh() || tt) +
                    (r.labels[O] / r.duration()) * mt) ||
                0
              );
            }),
            (g.getTrailing = function (O) {
              var H = $.indexOf(g),
                N = g.direction > 0 ? $.slice(0, H).reverse() : $.slice(H + 1);
              return (
                Se(O)
                  ? N.filter(function (Y) {
                      return Y.vars.preventOverlaps === O;
                    })
                  : N
              ).filter(function (Y) {
                return g.direction > 0 ? Y.end <= tt : Y.start >= bt;
              });
            }),
            (g.update = function (O, H, N) {
              if (!(T && !N && !O)) {
                var Y = oe === !0 ? He : g.scroll(),
                  It = O ? 0 : (Y - tt) / mt,
                  J = It < 0 ? 0 : It > 1 ? 1 : It || 0,
                  Tt = g.progress,
                  Qt,
                  vt,
                  ht,
                  st,
                  Ye,
                  pt,
                  Pe,
                  Qe;
                if (
                  (H &&
                    ((_e = le),
                    (le = T ? kt() : Y),
                    w && ((Qi = Mi), (Mi = r && !L ? r.totalProgress() : J))),
                  m &&
                    h &&
                    !$t &&
                    !Rn &&
                    Re &&
                    (!J && tt < Y + ((Y - _e) / (Ut() - Ur)) * m
                      ? (J = 1e-4)
                      : J === 1 &&
                        bt > Y + ((Y - _e) / (Ut() - Ur)) * m &&
                        (J = 0.9999)),
                  J !== Tt && g.enabled)
                ) {
                  if (
                    ((Qt = g.isActive = !!J && J < 1),
                    (vt = !!Tt && Tt < 1),
                    (pt = Qt !== vt),
                    (Ye = pt || !!J != !!Tt),
                    (g.direction = J > Tt ? 1 : -1),
                    (g.progress = J),
                    Ye &&
                      !$t &&
                      ((ht = J && !Tt ? 0 : J === 1 ? 1 : Tt === 1 ? 2 : 3),
                      L &&
                        ((st =
                          (!pt && R[ht + 1] !== "none" && R[ht + 1]) || R[ht]),
                        (Qe =
                          r &&
                          (st === "complete" || st === "reset" || st in r)))),
                    k &&
                      (pt || Qe) &&
                      (Qe || d || !r) &&
                      (Gt(k)
                        ? k(g)
                        : g.getTrailing(k).forEach(function (tr) {
                            return tr.endAnimation();
                          })),
                    L ||
                      (Z && !$t && !Rn
                        ? (Z._dp._time - Z._start !== Z._time &&
                            Z.render(Z._dp._time - Z._start),
                          Z.resetTo
                            ? Z.resetTo("totalProgress", J, r._tTime / r._tDur)
                            : ((Z.vars.totalProgress = J),
                              Z.invalidate().restart()))
                        : r && r.totalProgress(J, !!($t && (Ht || O)))),
                    h)
                  ) {
                    if ((O && _ && (Nt.style[_ + P.os2] = an), !B))
                      Fe(Kr(Ne + li * J));
                    else if (Ye) {
                      if (
                        ((Pe = !O && J > Tt && bt + 1 > Y && Y + 1 >= Ze(M, P)),
                        b)
                      )
                        if (!O && (Qt || Pe)) {
                          var Yt = ni(h, !0),
                            Xt = Y - tt;
                          ml(
                            h,
                            it,
                            Yt.top + (P === Mt ? Xt : 0) + Ot,
                            Yt.left + (P === Mt ? 0 : Xt) + Ot
                          );
                        } else ml(h, Nt);
                      br(Qt || Pe ? ki : Zi),
                        (ui && J < 1 && Qt) ||
                          Fe(Ne + (J === 1 && !Pe ? li : 0));
                    }
                  }
                  w && !ae.tween && !$t && !Rn && Be.restart(!0),
                    a &&
                      (pt || (x && J && (J < 1 || !Qs))) &&
                      qr(a.targets).forEach(function (tr) {
                        return tr.classList[Qt || x ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !L && !O && o(g),
                    Ye && !$t
                      ? (L &&
                          (Qe &&
                            (st === "complete"
                              ? r.pause().totalProgress(1)
                              : st === "reset"
                              ? r.restart(!0).pause()
                              : st === "restart"
                              ? r.restart(!0)
                              : r[st]()),
                          o && o(g)),
                        (pt || !Qs) &&
                          (u && pt && Js(g, u),
                          W[ht] && Js(g, W[ht]),
                          x && (J === 1 ? g.kill(!1, 1) : (W[ht] = 0)),
                          pt ||
                            ((ht = J === 1 ? 1 : 3), W[ht] && Js(g, W[ht]))),
                        E &&
                          !Qt &&
                          Math.abs(g.getVelocity()) > (Zr(E) ? E : 2500) &&
                          (Qr(g.callbackAnimation),
                          Z
                            ? Z.progress(1)
                            : Qr(r, st === "reverse" ? 1 : !J, 1)))
                      : L && o && !$t && o(g);
                }
                if (Sr) {
                  var jt = T ? (Y / T.duration()) * (T._caScrollDist || 0) : Y;
                  Zn(jt + (S._isFlipped ? 1 : 0)), Sr(jt);
                }
                Er && Er((-Y / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (g.enable = function (O, H) {
              g.enabled ||
                ((g.enabled = !0),
                zt(M, "resize", nn),
                F || zt(M, "scroll", wr),
                j && zt(s, "refreshInit", j),
                O !== !1 && ((g.progress = Kt = 0), (le = _e = ut = kt())),
                H !== !1 && g.refresh());
            }),
            (g.getTween = function (O) {
              return O && ae ? ae.tween : Z;
            }),
            (g.setPositions = function (O, H, N, Y) {
              if (T) {
                var It = T.scrollTrigger,
                  J = T.duration(),
                  Tt = It.end - It.start;
                (O = It.start + (Tt * O) / J), (H = It.start + (Tt * H) / J);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: Qa(O, N && !!g._startClamp),
                  end: Qa(H, N && !!g._endClamp),
                },
                Y
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (O) {
              if (Pt && O) {
                var H = Pt.indexOf(P.d) + 1;
                (Pt[H] = parseFloat(Pt[H]) + O + Ot),
                  (Pt[1] = parseFloat(Pt[1]) + O + Ot),
                  br(Pt);
              }
            }),
            (g.disable = function (O, H) {
              if (
                g.enabled &&
                (O !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                H || (Z && Z.pause()),
                (He = 0),
                Zt && (Zt.uncache = 1),
                j && Lt(s, "refreshInit", j),
                Be &&
                  (Be.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
                !F)
              ) {
                for (var N = $.length; N--; )
                  if ($[N].scroller === M && $[N] !== g) return;
                Lt(M, "resize", nn), F || Lt(M, "scroll", wr);
              }
            }),
            (g.kill = function (O, H) {
              g.disable(O, H), Z && !H && Z.kill(), l && delete no[l];
              var N = $.indexOf(g);
              N >= 0 && $.splice(N, 1),
                N === ne && Xn > 0 && ne--,
                (N = 0),
                $.forEach(function (Y) {
                  return Y.scroller === g.scroller && (N = 1);
                }),
                N || oe || (g.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  O && r.revert({ kill: !1 }),
                  H || r.kill()),
                ge &&
                  [ge, Ee, S, ke].forEach(function (Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y);
                  }),
                sn === g && (sn = 0),
                h &&
                  (Zt && (Zt.uncache = 1),
                  (N = 0),
                  $.forEach(function (Y) {
                    return Y.pin === h && N++;
                  }),
                  N || (Zt.spacer = 0)),
                e.onKill && e.onKill(g);
            }),
            $.push(g),
            g.enable(!1, !1),
            ci && ci(g),
            r && r.add && !mt)
          ) {
            var et = g.update;
            (g.update = function () {
              (g.update = et), G.cache++, tt || bt || g.refresh();
            }),
              A.delayedCall(0.01, g.update),
              (mt = 0.01),
              (tt = bt = 0);
          } else g.refresh();
          h && dc();
        }),
        (s.register = function (e) {
          return (
            _r ||
              ((A = e || el()),
              tl() && window.document && s.enable(),
              (_r = Gr)),
            _r
          );
        }),
        (s.defaults = function (e) {
          if (e) for (var r in e) Fn[r] = e[r];
          return Fn;
        }),
        (s.disable = function (e, r) {
          (Gr = 0),
            $.forEach(function (o) {
              return o[r ? "kill" : "disable"](e);
            }),
            Lt(K, "wheel", wr),
            Lt(at, "scroll", wr),
            clearInterval(On),
            Lt(at, "touchcancel", Ke),
            Lt(it, "touchstart", Ke),
            Nn(Lt, at, "pointerdown,touchstart,mousedown", ja),
            Nn(Lt, at, "pointerup,touchend,mouseup", Ja),
            Mn.kill(),
            zn(Lt);
          for (var n = 0; n < G.length; n += 3)
            In(Lt, G[n], G[n + 1]), In(Lt, G[n], G[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((K = window),
            (at = document),
            (Te = at.documentElement),
            (it = at.body),
            A &&
              ((qr = A.utils.toArray),
              ($r = A.utils.clamp),
              (Us = A.core.context || Ke),
              (qs = A.core.suppressOverwrites || Ke),
              (Gs = K.history.scrollRestoration || "auto"),
              (ao = K.pageYOffset || 0),
              A.core.globals("ScrollTrigger", s),
              it))
          ) {
            (Gr = 1),
              (mr = document.createElement("div")),
              (mr.style.height = "100vh"),
              (mr.style.position = "absolute"),
              pl(),
              oc(),
              wt.register(A),
              (s.isTouch = wt.isTouch),
              (Ti =
                wt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              ($s = wt.isTouch === 1),
              zt(K, "wheel", wr),
              (Xs = [K, at, Te, it]),
              A.matchMedia
                ? ((s.matchMedia = function (u) {
                    var c = A.matchMedia(),
                      d;
                    for (d in u) c.add(d, u[d]);
                    return c;
                  }),
                  A.addEventListener("matchMediaInit", function () {
                    return oo();
                  }),
                  A.addEventListener("matchMediaRevert", function () {
                    return hl();
                  }),
                  A.addEventListener("matchMedia", function () {
                    Ki(0, 1), Ui("matchMedia");
                  }),
                  A.matchMedia().add("(orientation: portrait)", function () {
                    return so(), so;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              so(),
              zt(at, "scroll", wr);
            var e = it.hasAttribute("style"),
              r = it.style,
              n = r.borderTopStyle,
              o = A.core.Animation.prototype,
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
                re.m = Math.round(a.left + re.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                e ||
                  (it.setAttribute("style", ""), it.removeAttribute("style")),
                On = setInterval(ul, 250),
                A.delayedCall(0.5, function () {
                  return (Rn = 0);
                }),
                zt(at, "touchcancel", Ke),
                zt(it, "touchstart", Ke),
                Nn(zt, at, "pointerdown,touchstart,mousedown", ja),
                Nn(zt, at, "pointerup,touchend,mouseup", Ja),
                Vs = A.utils.checkPrefix("transform"),
                Vn.push(Vs),
                _r = Ut(),
                Mn = A.delayedCall(0.2, Ki).pause(),
                gr = [
                  at,
                  "visibilitychange",
                  function () {
                    var u = K.innerWidth,
                      c = K.innerHeight;
                    at.hidden
                      ? ((Va = u), (qa = c))
                      : (Va !== u || qa !== c) && nn();
                  },
                  at,
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
                $.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < G.length;
              l += 3
            )
              In(Lt, G[l], G[l + 1]), In(Lt, G[l], G[l + 2]);
          }
        }),
        (s.config = function (e) {
          "limitCallbacks" in e && (Qs = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(On)) || ((On = r) && setInterval(ul, r)),
            "ignoreMobileResize" in e &&
              ($s = s.isTouch === 1 && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (zn(Lt) || zn(zt, e.autoRefreshEvents || "none"),
              (Ua = (e.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (e, r) {
          var n = pe(e),
            o = G.indexOf(n),
            a = Yi(n);
          ~o && G.splice(o, a ? 6 : 2),
            r && (a ? Ge.unshift(K, r, it, r, Te, r) : Ge.unshift(n, r));
        }),
        (s.clearMatchMedia = function (e) {
          $.forEach(function (r) {
            return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (e, r, n) {
          var o = (Se(e) ? pe(e) : e).getBoundingClientRect(),
            a = o[n ? Vi : qi] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < K.innerWidth
            : o.bottom - a > 0 && o.top + a < K.innerHeight;
        }),
        (s.positionInViewport = function (e, r, n) {
          Se(e) && (e = pe(e));
          var o = e.getBoundingClientRect(),
            a = o[n ? Vi : qi],
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
            ($.slice(0).forEach(function (n) {
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
  (U.version = "3.13.0"),
    (U.saveStyles = function (s) {
      return s
        ? qr(s).forEach(function (t) {
            if (t && t.style) {
              var i = Ce.indexOf(t);
              i >= 0 && Ce.splice(i, 5),
                Ce.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  A.core.getCache(t),
                  Us()
                );
            }
          })
        : Ce;
    }),
    (U.revert = function (s, t) {
      return oo(!s, t);
    }),
    (U.create = function (s, t) {
      return new U(s, t);
    }),
    (U.refresh = function (s) {
      return s ? nn(!0) : (_r || U.register()) && Ki(!0);
    }),
    (U.update = function (s) {
      return ++G.cache && si(s === !0 ? 2 : 0);
    }),
    (U.clearScrollMemory = fl),
    (U.maxScroll = function (s, t) {
      return Ze(s, t ? re : Mt);
    }),
    (U.getScrollFunc = function (s, t) {
      return xi(pe(s), t ? re : Mt);
    }),
    (U.getById = function (s) {
      return no[s];
    }),
    (U.getAll = function () {
      return $.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (U.isScrolling = function () {
      return !!Re;
    }),
    (U.snapDirectional = ro),
    (U.addEventListener = function (s, t) {
      var i = $i[s] || ($i[s] = []);
      ~i.indexOf(t) || i.push(t);
    }),
    (U.removeEventListener = function (s, t) {
      var i = $i[s],
        e = i && i.indexOf(t);
      e >= 0 && i.splice(e, 1);
    }),
    (U.batch = function (s, t) {
      var i = [],
        e = {},
        r = t.interval || 0.016,
        n = t.batchMax || 1e9,
        o = function (u, c) {
          var d = [],
            f = [],
            h = A.delayedCall(r, function () {
              c(d, f), (d = []), (f = []);
            }).pause();
          return function (_) {
            d.length || h.restart(!0),
              d.push(_.trigger),
              f.push(_),
              n <= d.length && h.progress(1);
          };
        },
        a;
      for (a in t)
        e[a] =
          a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit"
            ? o(a, t[a])
            : t[a];
      return (
        Gt(n) &&
          ((n = n()),
          zt(U, "refresh", function () {
            return (n = t.batchMax());
          })),
        qr(s).forEach(function (l) {
          var u = {};
          for (a in e) u[a] = e[a];
          (u.trigger = l), i.push(U.create(u));
        }),
        i
      );
    });
  var wl = function (t, i, e, r) {
      return (
        i > r ? t(r) : i < 0 && t(0),
        e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1
      );
    },
    co = function s(t, i) {
      i === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            i === !0
              ? "auto"
              : i
              ? "pan-" + i + (wt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Te && s(it, i);
    },
    Gn = { auto: 1, scroll: 1 },
    vc = function (t) {
      var i = t.event,
        e = t.target,
        r = t.axis,
        n = (i.changedTouches ? i.changedTouches[0] : i).target,
        o = n._gsap || A.core.getCache(n),
        a = Ut(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== it &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Gn[(l = Le(n)).overflowY] || Gn[l.overflowX]));

        )
          n = n.parentNode;
        (o._isScroll =
          n &&
          n !== e &&
          !Yi(n) &&
          (Gn[(l = Le(n)).overflowY] || Gn[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    bl = function (t, i, e, r) {
      return wt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && vc),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return e && zt(at, wt.eventTypes[0], Tl, !1, !0);
        },
        onDisable: function () {
          return Lt(at, wt.eventTypes[0], Tl, !0);
        },
      });
    },
    yc = /(input|label|select|textarea)/i,
    xl,
    Tl = function (t) {
      var i = yc.test(t.target.tagName);
      (i || xl) && ((t._gsapAllow = !0), (xl = i));
    },
    wc = function (t) {
      Xi(t) || (t = {}),
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
        u = pe(t.target) || Te,
        c = A.core.globals().ScrollSmoother,
        d = c && c.get(),
        f =
          Ti &&
          ((t.content && pe(t.content)) ||
            (d && t.content !== !1 && !d.smooth() && d.content())),
        h = xi(u, Mt),
        _ = xi(u, re),
        p = 1,
        m =
          (wt.isTouch && K.visualViewport
            ? K.visualViewport.scale * K.visualViewport.width
            : K.outerWidth) / K.innerWidth,
        v = 0,
        y = Gt(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        x,
        w,
        b = bl(u, t.type, !0, n),
        C = function () {
          return (w = !1);
        },
        T = Ke,
        E = Ke,
        k = function () {
          (l = Ze(u, Mt)),
            (E = $r(Ti ? 1 : 0, l)),
            e && (T = $r(0, Ze(u, re))),
            (x = Gi);
        },
        P = function () {
          (f._gsap.y = Kr(parseFloat(f._gsap.y) + h.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (h.offset = h.cacheID = 0);
        },
        L = function () {
          if (w) {
            requestAnimationFrame(C);
            var q = Kr(a.deltaY / 2),
              X = E(h.v - q);
            if (f && X !== h.v + h.offset) {
              h.offset = X - h.v;
              var g = Kr((parseFloat(f && f._gsap.y) || 0) - h.offset);
              (f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (f._gsap.y = g + "px"),
                (h.cacheID = G.cache),
                si();
            }
            return !0;
          }
          h.offset && P(), (w = !0);
        },
        M,
        D,
        F,
        B,
        W = function () {
          k(),
            M.isActive() &&
              M.vars.scrollY > l &&
              (h() > l ? M.progress(1) && h(l) : M.resetTo("scrollY", l));
        };
      return (
        f && A.set(f, { y: "+=0" }),
        (t.ignoreCheck = function (R) {
          return (
            (Ti && R.type === "touchmove" && L()) ||
            (p > 1.05 && R.type !== "touchstart") ||
            a.isGesturing ||
            (R.touches && R.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          w = !1;
          var R = p;
          (p = Kr(((K.visualViewport && K.visualViewport.scale) || 1) / m)),
            M.pause(),
            R !== p && co(u, p > 1.01 ? !0 : e ? !1 : "x"),
            (D = _()),
            (F = h()),
            k(),
            (x = Gi);
        }),
        (t.onRelease = t.onGestureStart =
          function (R, q) {
            if ((h.offset && P(), !q)) B.restart(!0);
            else {
              G.cache++;
              var X = y(),
                g,
                j;
              e &&
                ((g = _()),
                (j = g + (X * 0.05 * -R.velocityX) / 0.227),
                (X *= wl(_, g, j, Ze(u, re))),
                (M.vars.scrollX = T(j))),
                (g = h()),
                (j = g + (X * 0.05 * -R.velocityY) / 0.227),
                (X *= wl(h, g, j, Ze(u, Mt))),
                (M.vars.scrollY = E(j)),
                M.invalidate().duration(X).play(0.01),
                ((Ti && M.vars.scrollY >= l) || g >= l - 1) &&
                  A.to({}, { onUpdate: W, duration: X });
            }
            o && o(R);
          }),
        (t.onWheel = function () {
          M._ts && M.pause(), Ut() - v > 1e3 && ((x = 0), (v = Ut()));
        }),
        (t.onChange = function (R, q, X, g, j) {
          if (
            (Gi !== x && k(),
            q && e && _(T(g[2] === q ? D + (R.startX - R.x) : _() + q - g[1])),
            X)
          ) {
            h.offset && P();
            var lt = j[2] === X,
              At = lt ? F + R.startY - R.y : h() + X - j[1],
              ut = E(At);
            lt && At !== ut && (F += ut - At), h(ut);
          }
          (X || q) && si();
        }),
        (t.onEnable = function () {
          co(u, e ? !1 : "x"),
            U.addEventListener("refresh", W),
            zt(K, "resize", W),
            h.smooth &&
              ((h.target.style.scrollBehavior = "auto"),
              (h.smooth = _.smooth = !1)),
            b.enable();
        }),
        (t.onDisable = function () {
          co(u, !0),
            Lt(K, "resize", W),
            U.removeEventListener("refresh", W),
            b.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (a = new wt(t)),
        (a.iOS = Ti),
        Ti && !h() && h(1),
        Ti && A.ticker.add(Ke),
        (B = a._dc),
        (M = A.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: e ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: vl(h, h(), function () {
              return M.pause();
            }),
          },
          onUpdate: si,
          onComplete: B.vars.onComplete,
        })),
        a
      );
    };
  (U.sort = function (s) {
    if (Gt(s)) return $.sort(s);
    var t = K.pageYOffset || 0;
    return (
      U.getAll().forEach(function (i) {
        return (i._sortY = i.trigger
          ? t + i.trigger.getBoundingClientRect().top
          : i.start + K.innerHeight);
      }),
      $.sort(
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
    (U.observe = function (s) {
      return new wt(s);
    }),
    (U.normalizeScroll = function (s) {
      if (typeof s == "undefined") return se;
      if (s === !0 && se) return se.enable();
      if (s === !1) {
        se && se.kill(), (se = s);
        return;
      }
      var t = s instanceof wt ? s : wc(s);
      return (
        se && se.target === t.target && se.kill(), Yi(t.target) && (se = t), t
      );
    }),
    (U.core = {
      _getVelocityProp: Ys,
      _inputObserver: bl,
      _scrollers: G,
      _proxies: Ge,
      bridge: {
        ss: function () {
          Re || Ui("scrollStart"), (Re = Ut());
        },
        ref: function () {
          return $t;
        },
      },
    }),
    el() && A.registerPlugin(U);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let on,
    xr,
    ho,
    bc = () => ho || go.register(window.gsap),
    Sl = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Kn = (s) =>
      typeof s == "string"
        ? Kn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    Cl = (s) => Kn(s).filter((t) => t instanceof HTMLElement),
    fo = [],
    po = function () {},
    xc = /\s+/g,
    El = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    kl = { left: 0, top: 0, width: 0, height: 0 },
    Pl = (s, t) => {
      if (t) {
        let i = new Set(s.join("").match(t) || fo),
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
    Ml = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Tr = (s, t, i) =>
      t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, i),
    _o = (s, t, i) => {
      let e = t[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t,
        a = s === "line" ? "block" : "inline-block",
        l = e.indexOf("++") > -1,
        u = (c) => {
          let d = document.createElement(r),
            f = i.length + 1;
          return (
            e && (d.className = e + (l ? " " + e + f : "")),
            o && d.style.setProperty("--" + s, f + ""),
            n !== "none" && d.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((d.style.position = "relative"), (d.style.display = a)),
            (d.textContent = c),
            i.push(d),
            d
          );
        };
      return l && (e = e.replace("++", "")), (u.collection = i), u;
    },
    Tc = (s, t, i, e) => {
      let r = _o("line", i, e),
        n = window.getComputedStyle(s).textAlign || "left";
      return (o, a) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, t[o]); o < a; o++)
          l.appendChild(t[o]);
        l.normalize();
      };
    },
    Ol = (s, t, i, e, r, n, o, a, l, u) => {
      var c;
      let d = Array.from(s.childNodes),
        f = 0,
        { wordDelimiter: h, reduceWhiteSpace: _ = !0, prepareText: p } = t,
        m = s.getBoundingClientRect(),
        v = m,
        y =
          !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        x = 0,
        w = i.collection,
        b,
        C,
        T,
        E,
        k,
        P,
        L,
        M,
        D,
        F,
        B,
        W,
        R,
        q,
        X,
        g,
        j,
        lt;
      for (
        typeof h == "object"
          ? ((T = h.delimiter || h), (C = h.replaceWith || ""))
          : (C = h === "" ? "" : h || " "),
          b = C !== " ";
        f < d.length;
        f++
      )
        if (((E = d[f]), E.nodeType === 3)) {
          for (
            X = E.textContent || "",
              _
                ? (X = X.replace(xc, " "))
                : y &&
                  (X = X.replace(
                    /\n/g,
                    C +
                      `
`
                  )),
              p && (X = p(X, s)),
              E.textContent = X,
              k = C || T ? X.split(T || C) : X.match(a) || fo,
              j = k[k.length - 1],
              M = b ? j.slice(-1) === " " : !j,
              j || k.pop(),
              v = m,
              L = b ? k[0].charAt(0) === " " : !k[0],
              L && Tr(" ", s, E),
              k[0] || k.shift(),
              Pl(k, l),
              (n && u) || (E.textContent = ""),
              D = 1;
            D <= k.length;
            D++
          )
            if (
              ((g = k[D - 1]),
              !_ &&
                y &&
                g.charAt(0) ===
                  `
` &&
                ((c = E.previousSibling) == null || c.remove(),
                Tr(document.createElement("br"), s, E),
                (g = g.slice(1))),
              !_ && g === "")
            )
              Tr(C, s, E);
            else if (g === " ") s.insertBefore(document.createTextNode(" "), E);
            else {
              if (
                (b && g.charAt(0) === " " && Tr(" ", s, E),
                x && D === 1 && !L && w.indexOf(x.parentNode) > -1
                  ? ((P = w[w.length - 1]),
                    P.appendChild(document.createTextNode(e ? "" : g)))
                  : ((P = i(e ? "" : g)),
                    Tr(P, s, E),
                    x && D === 1 && !L && P.insertBefore(x, P.firstChild)),
                e)
              )
                for (
                  B = Sl
                    ? Pl(
                        [...Sl.segment(g)].map((At) => At.segment),
                        l
                      )
                    : g.match(a) || fo,
                    lt = 0;
                  lt < B.length;
                  lt++
                )
                  P.appendChild(
                    B[lt] === " " ? document.createTextNode(" ") : e(B[lt])
                  );
              if (n && u) {
                if (
                  ((X = E.textContent = X.substring(g.length + 1, X.length)),
                  (F = P.getBoundingClientRect()),
                  F.top > v.top && F.left <= v.left)
                ) {
                  for (W = s.cloneNode(), R = s.childNodes[0]; R && R !== P; )
                    (q = R), (R = R.nextSibling), W.appendChild(q);
                  s.parentNode.insertBefore(W, s), r && Ml(W);
                }
                v = F;
              }
              (D < k.length || M) &&
                Tr(
                  D >= k.length ? " " : b && g.slice(-1) === " " ? " " + C : C,
                  s,
                  E
                );
            }
          s.removeChild(E), (x = 0);
        } else
          E.nodeType === 1 &&
            (o && o.indexOf(E) > -1
              ? (w.indexOf(E.previousSibling) > -1 &&
                  w[w.length - 1].appendChild(E),
                (x = E))
              : (Ol(E, t, i, e, r, n, o, a, l, !0), (x = 0)),
            r && Ml(E));
    };
  const Al = class Hl {
    constructor(t, i) {
      (this.isSplit = !1),
        bc(),
        (this.elements = Cl(t)),
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
        po(this),
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
        d = i.indexOf("chars") > -1,
        f = i.indexOf("words") > -1,
        h = d && !f && !c,
        _ =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = _ ? new RegExp(_.source + "|" + El.source, "gu") : El,
        m = !!t.ignore && Cl(t.ignore),
        { orig: v, animTime: y, obs: x } = this._data,
        w;
      return (
        (d || f || c) &&
          (this.elements.forEach((b, C) => {
            (v[C] = {
              element: b,
              html: b.innerHTML,
              ariaL: b.getAttribute("aria-label"),
              ariaH: b.getAttribute("aria-hidden"),
            }),
              e === "auto"
                ? b.setAttribute("aria-label", (b.textContent || "").trim())
                : e === "hidden" && b.setAttribute("aria-hidden", "true");
            let T = [],
              E = [],
              k = [],
              P = d ? _o("char", t, T) : null,
              L = _o("word", t, E),
              M,
              D,
              F,
              B;
            if ((Ol(b, t, L, P, h, r && (c || h), m, p, _, !1), c)) {
              let W = Kn(b.childNodes),
                R = Tc(b, W, t, k),
                q,
                X = [],
                g = 0,
                j = W.map((At) =>
                  At.nodeType === 1 ? At.getBoundingClientRect() : kl
                ),
                lt = kl;
              for (M = 0; M < W.length; M++)
                (q = W[M]),
                  q.nodeType === 1 &&
                    (q.nodeName === "BR"
                      ? (X.push(q), R(g, M + 1), (g = M + 1), (lt = j[g]))
                      : (M &&
                          j[M].top > lt.top &&
                          j[M].left <= lt.left &&
                          (R(g, M), (g = M)),
                        (lt = j[M])));
              g < M && R(g, M),
                X.forEach((At) => {
                  var ut;
                  return (ut = At.parentNode) == null
                    ? void 0
                    : ut.removeChild(At);
                });
            }
            if (!f) {
              for (M = 0; M < E.length; M++)
                if (
                  ((D = E[M]),
                  d || !D.nextSibling || D.nextSibling.nodeType !== 3)
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
                  (B = D.nextSibling),
                    B &&
                      B.nodeType === 3 &&
                      ((B.textContent =
                        (D.textContent || "") + (B.textContent || "")),
                      D.remove());
              (E.length = 0), b.normalize();
            }
            this.lines.push(...k), this.words.push(...E), this.chars.push(...T);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((b) => {
                let C = b.cloneNode();
                return (
                  b.replaceWith(C),
                  C.appendChild(b),
                  b.className &&
                    (C.className = b.className.replace(
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
        (w = o && o(this)) &&
          w.totalTime &&
          (this._data.anim = y ? w.totalTime(y) : w),
        c &&
          a &&
          this.elements.forEach((b, C) => {
            (v[C].width = b.offsetWidth), x && x.observe(b);
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
        xr == null || xr.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (i = (t = this.vars).onRevert) == null || i.call(t, this),
        this
      );
    }
    static create(t, i) {
      return new Hl(t, i);
    }
    static register(t) {
      (on = on || t || window.gsap),
        on && ((Kn = on.utils.toArray), (po = on.core.context || po)),
        !ho && window.innerWidth > 0 && ((xr = document.fonts), (ho = !0));
    }
  };
  Al.version = "3.13.0";
  let go = Al;
  Ue.registerPlugin(U, go);
  const Sc = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((t) => {
        const i = t.getAttribute("data-highlight-scroll-start") || "top 90%",
          e = t.getAttribute("data-highlight-scroll-end") || "center 40%",
          r = parseFloat(t.getAttribute("data-highlight-fade")) || 0.2,
          n = parseFloat(t.getAttribute("data-highlight-stagger")) || 0.1;
        new go(t, {
          type: "words, chars",
          onSplit(o) {
            const a = Ue.context(() => {
              Ue.timeline({
                scrollTrigger: { scrub: !0, trigger: t, start: i, end: e },
              }).from(o.chars, { autoAlpha: r, stagger: n, ease: "linear" });
            });
            t._gsapContext = a;
          },
        });
      });
    },
    Cc = () => {
      Sc();
    },
    Ec = () => {
      document.querySelectorAll('[data-tabs="wrapper"]').forEach((t) => {
        const i = t.querySelectorAll('[data-tabs="content"]'),
          e = t.querySelectorAll('[data-tabs="visual"]'),
          r = t.dataset.tabsAutoplay === "true",
          n = parseInt(t.dataset.tabsAutoplayDuration) || 5e3;
        let o = null,
          a = null,
          l = !1,
          u = null;
        function c(f) {
          u && u.kill();
          const h = i[f].querySelector('[data-tabs="item-progress"]');
          h &&
            (Ue.set(h, { scaleX: 0, transformOrigin: "left center" }),
            (u = Ue.to(h, {
              scaleX: 1,
              duration: n / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!l) {
                  const _ = (f + 1) % i.length;
                  d(_);
                }
              },
            })));
        }
        function d(f) {
          if (l || i[f] === o) return;
          (l = !0), u && u.kill();
          const h = o,
            _ = a,
            p =
              h == null
                ? void 0
                : h.querySelector('[data-tabs="item-progress"]'),
            m = i[f],
            v = e[f],
            y = m.querySelector('[data-tabs="item-progress"]'),
            x = Ue.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = m), (a = v), (l = !1), r && c(f);
              },
            });
          h &&
            (h.classList.remove("active"),
            h.setAttribute("aria-selected", "false"),
            _ == null || _.classList.remove("active"),
            x
              .set(p, { transformOrigin: "right center" })
              .to(p, { scaleX: 0, duration: 0.3 }, 0)
              .to(_, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            m.classList.add("active"),
            m.setAttribute("aria-selected", "true"),
            v.classList.add("active"),
            x
              .fromTo(
                v,
                { autoAlpha: 0, yPercent: 5, scale: 0.99 },
                { autoAlpha: 1, yPercent: 0, scale: 1 },
                0.3
              )
              .set(y, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        i.forEach((f, h) => {
          f.setAttribute("tabindex", h === 0 ? "0" : "-1"),
            f.setAttribute("role", "tab"),
            f.setAttribute("aria-selected", h === 0 ? "true" : "false"),
            f.setAttribute("id", `tab-${h}`),
            e[h] &&
              (e[h].setAttribute("role", "tabpanel"),
              e[h].setAttribute("aria-labelledby", `tab-${h}`)),
            f.addEventListener("keydown", (_) => {
              let p;
              switch (_.key) {
                case "ArrowRight":
                  _.preventDefault(), (p = (h + 1) % i.length);
                  break;
                case "ArrowLeft":
                  _.preventDefault(), (p = (h - 1 + i.length) % i.length);
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
              i.forEach((m, v) => {
                m.setAttribute("tabindex", v === p ? "0" : "-1");
              }),
                i[p].focus(),
                d(p);
            }),
            f.addEventListener("click", () => {
              f !== o &&
                (i.forEach((_, p) => {
                  _.setAttribute("tabindex", p === h ? "0" : "-1");
                }),
                d(h));
            });
        }),
          t.setAttribute("role", "tablist"),
          t.setAttribute("aria-label", "Hero content tabs"),
          d(0);
      });
    },
    kc = () => {
      Ec();
    },
    Dl = () => {
      Cc(), kc();
    },
    Rl = (s) => document.querySelector(s),
    Pc = (s) => document.querySelectorAll(s),
    Mc = (s, t) => s.classList.add(t),
    Oc = {
      home: Dl,
      about: () => {
        Pc(".team-member").forEach((t) => {
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
        const s = Rl(".contact-form");
        s &&
          s.addEventListener("submit", (t) => {
            t.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": Dl,
    },
    Ac = () => {
      const s = document.body.dataset.route,
        t = Oc[s];
      t ? t() : console.log(`No specific script for route: ${s}`);
    },
    Dc = () => {
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
      i.forEach((v) => {
        const y = v.getBoundingClientRect();
        o.set(v, { width: y.width, height: y.height });
      }),
        (() => {
          const v = t[0];
          if (v) {
            const y = v.getAttribute("nav-menu-dropdown"),
              x = document.querySelector(`[nav-menu-item='${y}']`);
            if (x) {
              const w = v.getBoundingClientRect(),
                b = r.getBoundingClientRect(),
                C = o.get(x);
              if (C) {
                const T = b.left + b.width / 2,
                  k = w.left + w.width / 2 - T,
                  P = C.height + 20,
                  L = C.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${k}px`),
                  n.style.setProperty("--siteMenuHeight", `${P}px`),
                  n.style.setProperty("--siteMenuWidth", `${L}px`);
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
      const d = (v) => {
          const y = Array.from(i),
            x = y.indexOf(v);
          y.forEach((w, b) => {
            b < x
              ? w.setAttribute("pos", "left")
              : b === x
              ? w.setAttribute("pos", "active")
              : w.setAttribute("pos", "right"),
              w === v
                ? w.setAttribute("status", "active")
                : w.setAttribute("status", "inactive");
          });
        },
        f = (v, y) => {
          u && (clearTimeout(u), (u = null)), c !== v && ((c = v), p(v, y));
        },
        h = () => {
          u = setTimeout(() => {
            s.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              (c = null),
              (u = null);
          }, 100);
        },
        _ = (v, y) => {
          const x = y.bottom;
          return v >= x && v <= x + l;
        },
        p = (v, y) => {
          const x = r.getBoundingClientRect(),
            w = v.getBoundingClientRect(),
            b = o.get(y);
          if (!b) {
            console.warn("No original dimensions found for menu item:", y);
            return;
          }
          const C = x.left + x.width / 2,
            T = w.left + w.width / 2,
            E = b.height + 20,
            k = b.width + 20,
            P = T - C;
          n.style.setProperty("--siteMenuTranslateX", `${P}px`),
            n.style.setProperty("--siteMenuHeight", `${E}px`),
            n.style.setProperty("--siteMenuWidth", `${k}px`),
            n.setAttribute("vis", "visible"),
            s.setAttribute("dropdown-vis", "visible"),
            d(y);
        },
        m = (v) => {
          if (!c) return;
          const y = c.getBoundingClientRect(),
            x = n.getBoundingClientRect(),
            w = v.clientX,
            b = v.clientY,
            C = w >= y.left && w <= y.right && b >= y.top && b <= y.bottom,
            T = w >= x.left && w <= x.right && b >= x.top && b <= x.bottom,
            E =
              _(b, y) &&
              w >= Math.min(y.left, x.left) &&
              w <= Math.max(y.right, x.right);
          C || T || E ? u && (clearTimeout(u), (u = null)) : u || h();
        };
      document.addEventListener("mousemove", m),
        t.forEach((v) => {
          const y = v.getAttribute("nav-menu-dropdown"),
            x = document.querySelector(`[nav-menu-item='${y}']`);
          x
            ? v.addEventListener("mouseenter", () => {
                f(v, x);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${y}`
              );
        }),
        n.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        n.addEventListener("mouseleave", () => {
          h();
        });
    },
    Rc = () => {
      Dc();
    };
  class zc {
    constructor(t, i) {
      (this.canvas = t),
        (this.ctx = this.canvas.getContext("2d")),
        (this.manager = i),
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
        i = new Uint32Array(t.data.buffer),
        e = i.length;
      for (let r = 0; r < e; r++) Math.random() < 0.5 && (i[r] = 4278190080);
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
            t.forEach((i) => {
              this.isVisible = i.isIntersecting;
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
      const i = new zc(t, this);
      return this.instances.push(i), this.isRunning || this._startLoop(), i;
    }
    remove(t) {
      const i = this.instances.indexOf(t);
      i > -1 &&
        (this.instances[i].cleanup(),
        this.instances.splice(i, 1),
        this.instances.length === 0 && this._stopLoop());
    }
    _loop(t) {
      t - this.lastTime >= this.frameInterval &&
        (this.instances.forEach((i) => {
          i.isVisible && i._paintNoise();
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
      const i = document.querySelectorAll("[noise]");
      if (i.length === 0)
        return console.warn("No elements with [noise] attribute found"), null;
      const e = new mo(t),
        r = Array.from(i).map((n) => e.add(n));
      return {
        manager: e,
        instances: r,
        cleanup: () => {
          r.forEach((n) => e.remove(n)),
            window.removeEventListener("resize", e._globalResizeHandler, !1);
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
  const Lc = () => {
      Rc(), mo.initAll({ fps: 30 });
    },
    Nc = () => {
      const s = Rl(".example-component");
      s &&
        (Mc(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    Ic = () => {
      Nc();
    };
  var Fc = "1.3.4";
  function zl(s, t, i) {
    return Math.max(s, Math.min(t, i));
  }
  function Wc(s, t, i) {
    return (1 - i) * s + i * t;
  }
  function Bc(s, t, i, e) {
    return Wc(s, t, 1 - Math.exp(-i * e));
  }
  function Hc(s, t) {
    return ((s % t) + t) % t;
  }
  var Yc = class {
    constructor() {
      z(this, "isRunning", !1);
      z(this, "value", 0);
      z(this, "from", 0);
      z(this, "to", 0);
      z(this, "currentTime", 0);
      z(this, "lerp");
      z(this, "duration");
      z(this, "easing");
      z(this, "onUpdate");
    }
    advance(s) {
      var i;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += s;
        const e = zl(0, this.currentTime / this.duration, 1);
        t = e >= 1;
        const r = t ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Bc(this.value, this.to, this.lerp * 60, s)),
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
  function Xc(s, t) {
    let i;
    return function (...e) {
      let r = this;
      clearTimeout(i),
        (i = setTimeout(() => {
          (i = void 0), s.apply(r, e);
        }, t));
    };
  }
  var Vc = class {
      constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
        z(this, "width", 0);
        z(this, "height", 0);
        z(this, "scrollHeight", 0);
        z(this, "scrollWidth", 0);
        z(this, "debouncedResize");
        z(this, "wrapperResizeObserver");
        z(this, "contentResizeObserver");
        z(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        z(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        z(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = s),
          (this.content = t),
          i &&
            ((this.debouncedResize = Xc(this.resize, e)),
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
        z(this, "events", {});
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
    Nl = 100 / 6,
    Si = { passive: !1 },
    qc = class {
      constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        z(this, "touchStart", { x: 0, y: 0 });
        z(this, "lastDelta", { x: 0, y: 0 });
        z(this, "window", { width: 0, height: 0 });
        z(this, "emitter", new Ll());
        z(this, "onTouchStart", (s) => {
          const { clientX: t, clientY: i } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
        });
        z(this, "onTouchMove", (s) => {
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
        z(this, "onTouchEnd", (s) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: s,
          });
        });
        z(this, "onWheel", (s) => {
          let { deltaX: t, deltaY: i, deltaMode: e } = s;
          const r = e === 1 ? Nl : e === 2 ? this.window.width : 1,
            n = e === 1 ? Nl : e === 2 ? this.window.height : 1;
          (t *= r),
            (i *= n),
            (t *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: s });
        });
        z(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = s),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Si),
          this.element.addEventListener("touchstart", this.onTouchStart, Si),
          this.element.addEventListener("touchmove", this.onTouchMove, Si),
          this.element.addEventListener("touchend", this.onTouchEnd, Si);
      }
      on(s, t) {
        return this.emitter.on(s, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Si),
          this.element.removeEventListener("touchstart", this.onTouchStart, Si),
          this.element.removeEventListener("touchmove", this.onTouchMove, Si),
          this.element.removeEventListener("touchend", this.onTouchEnd, Si);
      }
    },
    Il = (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
    $c = class {
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
        orientation: d = "vertical",
        gestureOrientation: f = "vertical",
        touchMultiplier: h = 1,
        wheelMultiplier: _ = 1,
        autoResize: p = !0,
        prevent: m,
        virtualScroll: v,
        overscroll: y = !0,
        autoRaf: x = !1,
        anchors: w = !1,
        autoToggle: b = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: T = !1,
      } = {}) {
        z(this, "_isScrolling", !1);
        z(this, "_isStopped", !1);
        z(this, "_isLocked", !1);
        z(this, "_preventNextNativeScrollEvent", !1);
        z(this, "_resetVelocityTimeout", null);
        z(this, "__rafID", null);
        z(this, "isTouching");
        z(this, "time", 0);
        z(this, "userData", {});
        z(this, "lastVelocity", 0);
        z(this, "velocity", 0);
        z(this, "direction", 0);
        z(this, "options");
        z(this, "targetScroll");
        z(this, "animatedScroll");
        z(this, "animate", new Yc());
        z(this, "emitter", new Ll());
        z(this, "dimensions");
        z(this, "virtualScroll");
        z(this, "onScrollEnd", (s) => {
          s instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              s.stopPropagation());
        });
        z(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        z(this, "onTransitionEnd", (s) => {
          if (s.propertyName.includes("overflow")) {
            const t = this.isHorizontal ? "overflow-x" : "overflow-y",
              i = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(i) ? this.stop() : this.start();
          }
        });
        z(this, "onClick", (s) => {
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
        z(this, "onPointerDown", (s) => {
          s.button === 1 && this.reset();
        });
        z(this, "onVirtualScroll", (s) => {
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
            u.find((m) => {
              var v, y, x;
              return (
                m instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(m))) ||
                  ((v = m.hasAttribute) == null
                    ? void 0
                    : v.call(m, "data-lenis-prevent")) ||
                  (r &&
                    ((y = m.hasAttribute) == null
                      ? void 0
                      : y.call(m, "data-lenis-prevent-touch"))) ||
                  (n &&
                    ((x = m.hasAttribute) == null
                      ? void 0
                      : x.call(m, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(m, { deltaX: t, deltaY: i })))
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
          let f = i;
          this.options.gestureOrientation === "both"
            ? (f = Math.abs(i) > Math.abs(t) ? i : t)
            : this.options.gestureOrientation === "horizontal" && (f = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && i > 0) ||
                  (this.animatedScroll === this.limit && i < 0)))) &&
              (e.lenisStopPropagation = !0),
            e.preventDefault();
          const h = r && this.options.syncTouch,
            p = r && e.type === "touchend" && Math.abs(f) > 5;
          p && (f = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + f,
              Bl(
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
        z(this, "onNativeScroll", () => {
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
        z(this, "raf", (s) => {
          const t = s - (this.time || s);
          (this.time = s),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Fc),
          (!s || s === document.documentElement) && (s = window),
          typeof a == "number" && typeof l != "function"
            ? (l = Il)
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
            gestureOrientation: f,
            orientation: d,
            touchMultiplier: h,
            wheelMultiplier: _,
            autoResize: p,
            prevent: m,
            virtualScroll: v,
            overscroll: y,
            autoRaf: x,
            anchors: w,
            autoToggle: b,
            allowNestedScroll: C,
            __experimental__naiveDimensions: T,
          }),
          (this.dimensions = new Vc(s, t, { autoResize: p })),
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
          (this.virtualScroll = new qc(i, {
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
          immediate: i = !1,
          lock: e = !1,
          duration: r = this.options.duration,
          easing: n = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: d,
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
            let f;
            if (
              (typeof s == "string"
                ? (f = document.querySelector(s))
                : s instanceof HTMLElement &&
                  s != null &&
                  s.nodeType &&
                  (f = s),
              f)
            ) {
              if (this.options.wrapper !== window) {
                const _ = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? _.left : _.top;
              }
              const h = f.getBoundingClientRect();
              s = (this.isHorizontal ? h.left : h.top) + this.animatedScroll;
            }
          }
          if (typeof s == "number") {
            if (((s += t), (s = Math.round(s)), this.options.infinite)) {
              if (c) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const f = s - this.animatedScroll;
                f > this.limit / 2
                  ? (s = s - this.limit)
                  : f < -this.limit / 2 && (s = s + this.limit);
              }
            } else s = zl(0, s, this.limit);
            if (s === this.targetScroll) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = d != null ? d : {}), i)) {
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
                  e && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (f, h) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = f - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = f),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = f),
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
      checkNestedScroll(s, { deltaX: t, deltaY: i }) {
        var b, C;
        const e = Date.now(),
          r = (b = s._lenis) != null ? b : (s._lenis = {});
        let n, o, a, l, u, c, d, f;
        const h = this.options.gestureOrientation;
        if (e - ((C = r.time) != null ? C : 0) > 2e3) {
          r.time = Date.now();
          const T = window.getComputedStyle(s);
          r.computedStyle = T;
          const E = T.overflowX,
            k = T.overflowY;
          if (
            ((n = ["auto", "overlay", "scroll"].includes(E)),
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
            (d = s.clientWidth),
            (f = s.clientHeight),
            (a = u > d),
            (l = c > f),
            (r.isScrollableX = a),
            (r.isScrollableY = l),
            (r.scrollWidth = u),
            (r.scrollHeight = c),
            (r.clientWidth = d),
            (r.clientHeight = f);
        } else
          (a = r.isScrollableX),
            (l = r.isScrollableY),
            (n = r.hasOverflowX),
            (o = r.hasOverflowY),
            (u = r.scrollWidth),
            (c = r.scrollHeight),
            (d = r.clientWidth),
            (f = r.clientHeight);
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
          const T = t !== 0,
            E = i !== 0;
          T && n && a && (_ = "x"), E && o && l && (_ = "y");
        }
        if (!_) return !1;
        let p, m, v, y, x;
        if (_ === "x")
          (p = s.scrollLeft), (m = u - d), (v = t), (y = n), (x = a);
        else if (_ === "y")
          (p = s.scrollTop), (m = c - f), (v = i), (y = o), (x = l);
        else return !1;
        return (v > 0 ? p < m : p > 0) && y && x;
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
          ? Hc(this.animatedScroll, this.limit)
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
  Ue.registerPlugin(U);
  let vo;
  const Uc = () => {
      (vo = new $c({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)),
        autoRaf: !0,
      })),
        vo.on("scroll", U.update),
        Ue.ticker.add((s) => {
          vo.raf(s * 1e3);
        }),
        Ue.ticker.lagSmoothing(0);
    },
    Gc = () => {
      Uc();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Lc(), Ic(), Ac(), Gc();
  });
});
