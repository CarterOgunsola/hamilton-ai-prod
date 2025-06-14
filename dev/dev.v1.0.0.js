var qf = Object.defineProperty;
var Il = Object.getOwnPropertySymbols;
var Uf = Object.prototype.hasOwnProperty,
  Gf = Object.prototype.propertyIsEnumerable;
var yo = (_t, It, ot) =>
    It in _t
      ? qf(_t, It, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ot,
        })
      : (_t[It] = ot),
  Wl = (_t, It) => {
    for (var ot in It || (It = {})) Uf.call(It, ot) && yo(_t, ot, It[ot]);
    if (Il) for (var ot of Il(It)) Gf.call(It, ot) && yo(_t, ot, It[ot]);
    return _t;
  };
var z = (_t, It, ot) => yo(_t, typeof It != "symbol" ? It + "" : It, ot);
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
  function It(s, t) {
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
    ft,
    Me = 1e8,
    rt = 1 / Me,
    ts = Math.PI * 2,
    Yl = ts / 4,
    Xl = 0,
    wo = Math.sqrt,
    Hl = Math.cos,
    Vl = Math.sin,
    At = function (t) {
      return typeof t == "string";
    },
    gt = function (t) {
      return typeof t == "function";
    },
    Je = function (t) {
      return typeof t == "number";
    },
    es = function (t) {
      return typeof t == "undefined";
    },
    He = function (t) {
      return typeof t == "object";
    },
    ue = function (t) {
      return t !== !1;
    },
    is = function () {
      return typeof window != "undefined";
    },
    cn = function (t) {
      return gt(t) || At(t);
    },
    xo =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Vt = Array.isArray,
    rs = /(?:-?\.?\d|\.)+/gi,
    bo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    So = /[+-]=-?[.\d]+/,
    To = /[^,'"\[\]\s]+/gi,
    $l = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ht,
    Ve,
    ss,
    os,
    me = {},
    hn = {},
    Co,
    ko = function (t) {
      return (hn = nr(t, me)) && he;
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
    Er = function (t, i) {
      return !i && console.warn(t);
    },
    Eo = function (t, i) {
      return (t && (me[t] = i) && hn && (hn[t] = i)) || me;
    },
    Pr = function () {
      return 0;
    },
    ql = { suppressEvents: !0, isStart: !0, kill: !1 },
    dn = { suppressEvents: !0, kill: !1 },
    Ul = { suppressEvents: !0 },
    ls = {},
    fi = [],
    us = {},
    Po,
    ve = {},
    fs = {},
    Mo = 30,
    pn = [],
    cs = "",
    hs = function (t) {
      var i = t[0],
        e,
        r;
      if ((He(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
        for (r = pn.length; r-- && !pn[r].targetTest(i); );
        e = pn[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new na(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    Oi = function (t) {
      return t._gsap || hs(De(t))[0]._gsap;
    },
    Oo = function (t, i, e) {
      return (e = t[i]) && gt(e)
        ? t[i]()
        : (es(e) && t.getAttribute && t.getAttribute(i)) || e;
    },
    fe = function (t, i) {
      return (t = t.split(",")).forEach(i) || t;
    },
    yt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Tt = function (t) {
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
    _n = function () {
      var t = fi.length,
        i = fi.slice(0),
        e,
        r;
      for (us = {}, fi.length = 0, e = 0; e < t; e++)
        (r = i[e]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    ds = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Do = function (t, i, e, r) {
      fi.length && !Wt && _n(),
        t.render(i, e, !!(Wt && i < 0 && ds(t))),
        fi.length && !Wt && _n();
    },
    Ro = function (t) {
      var i = parseFloat(t);
      return (i || i === 0) && (t + "").match(To).length < 2
        ? i
        : At(t)
        ? t.trim()
        : t;
    },
    Ao = function (t) {
      return t;
    },
    ye = function (t, i) {
      for (var e in i) e in t || (t[e] = i[e]);
      return t;
    },
    Kl = function (t) {
      return function (i, e) {
        for (var r in e)
          r in i || (r === "duration" && t) || r === "ease" || (i[r] = e[r]);
      };
    },
    nr = function (t, i) {
      for (var e in i) t[e] = i[e];
      return t;
    },
    zo = function s(t, i) {
      for (var e in i)
        e !== "__proto__" &&
          e !== "constructor" &&
          e !== "prototype" &&
          (t[e] = He(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
      return t;
    },
    gn = function (t, i) {
      var e = {},
        r;
      for (r in t) r in i || (e[r] = t[r]);
      return e;
    },
    Mr = function (t) {
      var i = t.parent || ht,
        e = t.keyframes ? Kl(Vt(t.keyframes)) : ye;
      if (ue(t.inherit))
        for (; i; ) e(t, i.vars.defaults), (i = i.parent || i._dp);
      return t;
    },
    Zl = function (t, i) {
      for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; );
      return e < 0;
    },
    Lo = function (t, i, e, r, n) {
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
    ci = function (t, i) {
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
    ps = function (t, i, e, r) {
      return (
        t._startAt &&
        (Wt
          ? t._startAt.revert(dn)
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
      var e = Math.floor((t = Tt(t / i)));
      return t && e === t ? e - 1 : e;
    },
    vn = function (t, i) {
      return (
        (t - i._start) * i._ts +
        (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
      );
    },
    yn = function (t) {
      return (t._end = Tt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0)
      ));
    },
    wn = function (t, i) {
      var e = t._dp;
      return (
        e &&
          e.smoothChildTiming &&
          t._ts &&
          ((t._start = Tt(
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
          (!i._dur || Dr(0, i.totalDuration(), e) - i._tTime > rt) &&
            i.render(e, !0)),
        Di(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (e = t; e._dp; )
            e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
        t._zTime = -rt;
      }
    },
    $e = function (t, i, e, r) {
      return (
        i.parent && ci(i),
        (i._start = Tt(
          (Je(e) ? e : e || t !== ht ? Oe(t, e, i) : t._time) + i._delay
        )),
        (i._end = Tt(
          i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
        )),
        Lo(t, i, "_first", "_last", t._sort ? "_start" : 0),
        _s(i) || (t._recent = i),
        r || Fo(t, i),
        t._ts < 0 && wn(t, t._tTime),
        t
      );
    },
    Io = function (t, i) {
      return (
        (me.ScrollTrigger || as("scrollTrigger", i)) &&
        me.ScrollTrigger.create(i, t)
      );
    },
    Wo = function (t, i, e, r, n) {
      if ((Ts(t, i, n), !t._initted)) return 1;
      if (
        !e &&
        t._pt &&
        !Wt &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Po !== xe.frame
      )
        return fi.push(t), (t._lazy = [n, r]), 1;
    },
    Jl = function s(t) {
      var i = t.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
    },
    _s = function (t) {
      var i = t.data;
      return i === "isFromStart" || i === "isStart";
    },
    tu = function (t, i, e, r) {
      var n = t.ratio,
        o =
          i < 0 ||
          (!i &&
            ((!t._start && Jl(t) && !(!t._initted && _s(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !_s(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        f,
        h;
      if (
        (a &&
          t._repeat &&
          ((l = Dr(0, t._tDur, i)),
          (f = sr(l, a)),
          t._yoyo && f & 1 && (o = 1 - o),
          f !== sr(t._tTime, a) &&
            ((n = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== n || Wt || r || t._zTime === rt || (!i && t._zTime))
      ) {
        if (!t._initted && Wo(t, i, r, e, l)) return;
        for (
          h = t._zTime,
            t._zTime = i || (e ? rt : 0),
            e || (e = i && !h),
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
            (o && ci(t, 1),
            !e &&
              !Wt &&
              (we(t, o ? "onComplete" : "onReverseComplete", !0),
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
        o = Tt(i) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = n ? (n < 0 ? 1e10 : Tt(o * (n + 1) + t._rDelay * n)) : o),
        a > 0 && !r && wn(t, (t._tTime = t._tDur * a)),
        t.parent && yn(t),
        e || Di(t.parent, t),
        t
      );
    },
    Bo = function (t) {
      return t instanceof te ? Di(t) : or(t, t._dur);
    },
    iu = { _start: 0, endTime: Pr, totalDuration: Pr },
    Oe = function s(t, i, e) {
      var r = t.labels,
        n = t._recent || iu,
        o = t.duration() >= Me ? n.endTime(!1) : t._dur,
        a,
        l,
        u;
      return At(i) && (isNaN(i) || i in r)
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
      var r = Je(i[1]),
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
    hi = function (t, i) {
      return t || t === 0 ? i(t) : i;
    },
    Dr = function (t, i, e) {
      return e < t ? t : e > i ? i : e;
    },
    $t = function (t, i) {
      return !At(t) || !(i = $l.exec(t)) ? "" : i[1];
    },
    ru = function (t, i, e) {
      return hi(e, function (r) {
        return Dr(t, i, r);
      });
    },
    gs = [].slice,
    Yo = function (t, i) {
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
          return (At(r) && !i) || Yo(r, 1)
            ? (n = e).push.apply(n, De(r))
            : e.push(r);
        }) || e
      );
    },
    De = function (t, i, e) {
      return ft && !i && ft.selector
        ? ft.selector(t)
        : At(t) && !e && (ss || !lr())
        ? gs.call((i || os).querySelectorAll(t), 0)
        : Vt(t)
        ? nu(t, e)
        : Yo(t)
        ? gs.call(t, 0)
        : t
        ? [t]
        : [];
    },
    ms = function (t) {
      return (
        (t = De(t)[0] || Er("Invalid scope") || {}),
        function (i) {
          var e = t.current || t.nativeElement || t;
          return De(
            i,
            e.querySelectorAll
              ? e
              : e === t
              ? Er("Invalid scope") || os.createElement("div")
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
    Ho = function (t) {
      if (gt(t)) return t;
      var i = He(t) ? t : { each: t },
        e = Ri(i.ease),
        r = i.from || 0,
        n = parseFloat(i.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = i.axis,
        f = r,
        h = r;
      return (
        At(r)
          ? (f = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((f = r[0]), (h = r[1])),
        function (d, c, _) {
          var p = (_ || i).length,
            m = o[p],
            C,
            w,
            x,
            y,
            v,
            S,
            b,
            k,
            E;
          if (!m) {
            if (((E = i.grid === "auto" ? 0 : (i.grid || [1, Me])[1]), !E)) {
              for (
                b = -Me;
                b < (b = _[E++].getBoundingClientRect().left) && E < p;

              );
              E < p && E--;
            }
            for (
              m = o[p] = [],
                C = l ? Math.min(E, p) * f - 0.5 : r % E,
                w = E === Me ? 0 : l ? (p * h) / E - 0.5 : (r / E) | 0,
                b = 0,
                k = Me,
                S = 0;
              S < p;
              S++
            )
              (x = (S % E) - C),
                (y = w - ((S / E) | 0)),
                (m[S] = v =
                  u ? Math.abs(u === "y" ? y : x) : wo(x * x + y * y)),
                v > b && (b = v),
                v < k && (k = v);
            r === "random" && Xo(m),
              (m.max = b - k),
              (m.min = k),
              (m.v = p =
                (parseFloat(i.amount) ||
                  parseFloat(i.each) *
                    (E > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / E
                        : E
                      : Math.max(E, p / E)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (m.b = p < 0 ? n - p : n),
              (m.u = $t(i.amount || i.each) || 0),
              (e = e && p < 0 ? ea(e) : e);
          }
          return (
            (p = (m[d] - m.min) / m.max || 0),
            Tt(m.b + (e ? e(p) : p) * m.v) + m.u
          );
        }
      );
    },
    vs = function (t) {
      var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (e) {
        var r = Tt(Math.round(parseFloat(e) / t) * t * i);
        return (r - (r % 1)) / i + (Je(e) ? 0 : $t(e));
      };
    },
    Vo = function (t, i) {
      var e = Vt(t),
        r,
        n;
      return (
        !e &&
          He(t) &&
          ((r = e = t.radius || Me),
          t.values
            ? ((t = De(t.values)), (n = !Je(t[0])) && (r *= r))
            : (t = vs(t.increment))),
        hi(
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
                      f = 0,
                      h = t.length,
                      d,
                      c;
                    h--;

                  )
                    n
                      ? ((d = t[h].x - a),
                        (c = t[h].y - l),
                        (d = d * d + c * c))
                      : (d = Math.abs(t[h] - a)),
                      d < u && ((u = d), (f = h));
                  return (
                    (f = !r || u <= r ? t[f] : o),
                    n || f === o || Je(o) ? f : f + $t(o)
                  );
                }
            : vs(t)
        )
      );
    },
    $o = function (t, i, e, r) {
      return hi(Vt(t) ? !i : e === !0 ? !!(e = 0) : !r, function () {
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
    qo = function (t, i, e) {
      return hi(e, function (r) {
        return t[~~i(r)];
      });
    },
    lu = function s(t, i, e) {
      var r = i - t;
      return Vt(t)
        ? qo(t, s(0, t.length), i)
        : hi(e, function (n) {
            return ((r + ((n - t) % r)) % r) + t;
          });
    },
    uu = function s(t, i, e) {
      var r = i - t,
        n = r * 2;
      return Vt(t)
        ? qo(t, s(0, t.length - 1), i)
        : hi(e, function (o) {
            return (o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o);
          });
    },
    Rr = function (t) {
      for (var i = 0, e = "", r, n, o, a; ~(r = t.indexOf("random(", i)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (n = t.substr(r + 7, o - r - 7).match(a ? To : rs)),
          (e +=
            t.substr(i, r - i) +
            $o(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (i = o + 1);
      return e + t.substr(i, t.length - i);
    },
    Uo = function (t, i, e, r, n) {
      var o = i - t,
        a = r - e;
      return hi(n, function (l) {
        return e + (((l - t) / o) * a || 0);
      });
    },
    fu = function s(t, i, e, r) {
      var n = isNaN(t + i)
        ? 0
        : function (c) {
            return (1 - c) * t + c * i;
          };
      if (!n) {
        var o = At(t),
          a = {},
          l,
          u,
          f,
          h,
          d;
        if ((e === !0 && (r = 1) && (e = null), o))
          (t = { p: t }), (i = { p: i });
        else if (Vt(t) && !Vt(i)) {
          for (f = [], h = t.length, d = h - 2, u = 1; u < h; u++)
            f.push(s(t[u - 1], t[u]));
          h--,
            (n = function (_) {
              _ *= h;
              var p = Math.min(d, ~~_);
              return f[p](_ - p);
            }),
            (e = i);
        } else r || (t = nr(Vt(t) ? [] : {}, t));
        if (!f) {
          for (l in i) bs.call(a, t, l, "get", i[l]);
          n = function (_) {
            return Es(_, a) || (o ? t.p : t);
          };
        }
      }
      return hi(e, n);
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
    we = function (t, i, e) {
      var r = t.vars,
        n = r[i],
        o = ft,
        a = t._ctx,
        l,
        u,
        f;
      if (n)
        return (
          (l = r[i + "Params"]),
          (u = r.callbackScope || t),
          e && fi.length && _n(),
          a && (ft = a),
          (f = l ? n.apply(u, l) : n.call(u)),
          (ft = o),
          f
        );
    },
    Ar = function (t) {
      return (
        ci(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Wt),
        t.progress() < 1 && we(t, "onInterrupt"),
        t
      );
    },
    ar,
    Ko = [],
    Zo = function (t) {
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
              render: Es,
              add: bs,
              kill: ku,
              modifier: Cu,
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
          Eo(i, r), t.register && t.register(he, r, ce);
        } else Ko.push(t);
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
    Qo = function (t, i, e) {
      var r = t ? (Je(t) ? [t >> 16, (t >> 8) & nt, t & nt] : 0) : zr.black,
        n,
        o,
        a,
        l,
        u,
        f,
        h,
        d,
        c,
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
              (f = +r[2] / 100),
              (o = f <= 0.5 ? f * (u + 1) : f + u - f * u),
              (n = f * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = ys(l + 1 / 3, n, o)),
              (r[1] = ys(l, n, o)),
              (r[2] = ys(l - 1 / 3, n, o));
          else if (~t.indexOf("="))
            return (r = t.match(bo)), e && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(rs) || zr.transparent;
        r = r.map(Number);
      }
      return (
        i &&
          !_ &&
          ((n = r[0] / nt),
          (o = r[1] / nt),
          (a = r[2] / nt),
          (h = Math.max(n, o, a)),
          (d = Math.min(n, o, a)),
          (f = (h + d) / 2),
          h === d
            ? (l = u = 0)
            : ((c = h - d),
              (u = f > 0.5 ? c / (2 - h - d) : c / (h + d)),
              (l =
                h === n
                  ? (o - a) / c + (o < a ? 6 : 0)
                  : h === o
                  ? (a - n) / c + 2
                  : (n - o) / c + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(f * 100 + 0.5))),
        e && r.length < 4 && (r[3] = 1),
        r
      );
    },
    jo = function (t) {
      var i = [],
        e = [],
        r = -1;
      return (
        t.split(di).forEach(function (n) {
          var o = n.match(ir) || [];
          i.push.apply(i, o), e.push((r += o.length + 1));
        }),
        (i.c = e),
        i
      );
    },
    Jo = function (t, i, e) {
      var r = "",
        n = (t + r).match(di),
        o = i ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        f,
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
        e && ((f = jo(t)), (l = e.c), l.join(r) !== f.c.join(r)))
      )
        for (u = t.replace(di, "1").split(ir), h = u.length - 1; a < h; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? n.shift() || o + "0,0,0,0)"
              : (f.length ? f : n.length ? n : e).shift());
      if (!u)
        for (u = t.split(di), h = u.length - 1; a < h; a++) r += u[a] + n[a];
      return r + u[h];
    },
    di = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in zr) s += "|" + t + "\\b";
      return new RegExp(s + ")", "gi");
    })(),
    cu = /hsl[a]?\(/,
    ta = function (t) {
      var i = t.join(" "),
        e;
      if (((di.lastIndex = 0), di.test(i)))
        return (
          (e = cu.test(i)),
          (t[1] = Jo(t[1], e)),
          (t[0] = Jo(t[0], e, jo(t[1]))),
          !0
        );
    },
    Lr,
    xe = (function () {
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
        f,
        h,
        d,
        c,
        _ = function p(m) {
          var C = s() - r,
            w = m === !0,
            x,
            y,
            v,
            S;
          if (
            ((C > t || C < 0) && (e += C - i),
            (r += C),
            (v = r - e),
            (x = v - o),
            (x > 0 || w) &&
              ((S = ++h.frame),
              (d = v - h.time * 1e3),
              (h.time = v = v / 1e3),
              (o += x + (x >= n ? 4 : n - x)),
              (y = 1)),
            w || (l = u(p)),
            y)
          )
            for (c = 0; c < a.length; c++) a[c](v, d, S, m);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (m) {
            return d / (1e3 / (m || 60));
          },
          wake: function () {
            Co &&
              (!ss &&
                is() &&
                ((Ve = ss = window),
                (os = Ve.document || {}),
                (me.gsap = he),
                (Ve.gsapVersions || (Ve.gsapVersions = [])).push(he.version),
                ko(hn || Ve.GreenSockGlobals || (!Ve.gsap && Ve) || {}),
                Ko.forEach(Zo)),
              (f =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && h.sleep(),
              (u =
                f ||
                function (m) {
                  return setTimeout(m, (o - h.time * 1e3 + 1) | 0);
                }),
              (Lr = 1),
              _(2));
          },
          sleep: function () {
            (f ? cancelAnimationFrame : clearTimeout)(l), (Lr = 0), (u = Pr);
          },
          lagSmoothing: function (m, C) {
            (t = m || 1 / 0), (i = Math.min(C || 33, t));
          },
          fps: function (m) {
            (n = 1e3 / (m || 240)), (o = h.time * 1e3 + n);
          },
          add: function (m, C, w) {
            var x = C
              ? function (y, v, S, b) {
                  m(y, v, S, b), h.remove(x);
                }
              : m;
            return h.remove(m), a[w ? "unshift" : "push"](x), lr(), x;
          },
          remove: function (m, C) {
            ~(C = a.indexOf(m)) && a.splice(C, 1) && c >= C && c--;
          },
          _listeners: a,
        }),
        h
      );
    })(),
    lr = function () {
      return !Lr && xe.wake();
    },
    Q = {},
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
        e = Q[i[0]];
      return e && i.length > 1 && e.config
        ? e.config.apply(
            null,
            ~t.indexOf("{") ? [pu(i[1])] : _u(t).split(",").map(Ro)
          )
        : Q._CE && hu.test(t)
        ? Q._CE("", t)
        : e;
    },
    ea = function (t) {
      return function (i) {
        return 1 - t(1 - i);
      };
    },
    ia = function s(t, i) {
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
      return (t && (gt(t) ? t : Q[t] || gu(t))) || i;
    },
    Ai = function (t, i, e, r) {
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
          (Q[a] = me[a] = n), (Q[(o = a.toLowerCase())] = e);
          for (var l in n)
            Q[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Q[a + "." + l] = n[l];
        }),
        n
      );
    },
    ra = function (t) {
      return function (i) {
        return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
      };
    },
    ws = function s(t, i, e) {
      var r = i >= 1 ? i : 1,
        n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        o = (n / ts) * (Math.asin(1 / r) || 0),
        a = function (f) {
          return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Vl((f - o) * n) + 1;
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
        (n = ts / n),
        (l.config = function (u, f) {
          return s(t, u, f);
        }),
        l
      );
    },
    xs = function s(t, i) {
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
    Ai(
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
    Ai("Elastic", ws("in"), ws("out"), ws()),
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
      Ai(
        "Bounce",
        function (o) {
          return 1 - n(1 - o);
        },
        n
      );
    })(7.5625, 2.75),
    Ai("Expo", function (s) {
      return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
    }),
    Ai("Circ", function (s) {
      return -(wo(1 - s * s) - 1);
    }),
    Ai("Sine", function (s) {
      return s === 1 ? 1 : -Hl(s * Yl) + 1;
    }),
    Ai("Back", xs("in"), xs("out"), xs()),
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
              return (((r * Dr(0, o, a)) | 0) + n) * e;
            };
          },
        }),
    (er.ease = Q["quad.out"]),
    fe(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (s) {
        return (cs += s + "," + s + "Params,");
      }
    );
  var na = function (t, i) {
      (this.id = Xl++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = i),
        (this.get = i ? i.get : Oo),
        (this.set = i ? i.getSetter : ks);
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
          Lr || xe.wake();
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
              $e(this._dp, this, this._start - this._delay);
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
          if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
          if (this._rts === e) return this;
          var n =
            this.parent && this._ts ? vn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -rt ? 0 : this._rts),
            this.totalTime(
              Dr(-Math.abs(this._delay), this.totalDuration(), n),
              r !== !1
            ),
            yn(this),
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
              r && (r._sort || !this.parent) && $e(r, this, e - this._delay),
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
          e === void 0 && (e = Ul);
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
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Bo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = e), Bo(this), r ? this.time(r) : this;
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
            var o = gt(e) ? e : Ao,
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
          Ar(this);
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
    It(t, s);
    function t(e, r) {
      var n;
      return (
        e === void 0 && (e = {}),
        (n = s.call(this, e) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = ue(e.sortChildren)),
        ht && $e(e.parent || ht, _t(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Io(_t(n), e.scrollTrigger),
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
        return $e(this, Ct.delayedCall(0, r, n), o);
      }),
      (i.staggerTo = function (r, n, o, a, l, u, f) {
        return (
          (o.duration = n),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = f),
          (o.parent = this),
          new Ct(r, o, Oe(this, l)),
          this
        );
      }),
      (i.staggerFrom = function (r, n, o, a, l, u, f) {
        return (
          (o.runBackwards = 1),
          (Mr(o).immediateRender = ue(o.immediateRender)),
          this.staggerTo(r, n, o, a, l, u, f)
        );
      }),
      (i.staggerFromTo = function (r, n, o, a, l, u, f, h) {
        return (
          (a.startAt = o),
          (Mr(a).immediateRender = ue(a.immediateRender)),
          this.staggerTo(r, n, a, l, u, f, h)
        );
      }),
      (i.render = function (r, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          f = r <= 0 ? 0 : Tt(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !u),
          d,
          c,
          _,
          p,
          m,
          C,
          w,
          x,
          y,
          v,
          S,
          b;
        if (
          (this !== ht && f > l && r >= 0 && (f = l),
          f !== this._tTime || o || h)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((f += this._time - a), (r += this._time - a)),
            (d = f),
            (y = this._start),
            (x = this._ts),
            (C = !x),
            h && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((S = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(m * 100 + r, n, o);
            if (
              ((d = Tt(f % m)),
              f === l
                ? ((p = this._repeat), (d = u))
                : ((v = Tt(f / m)),
                  (p = ~~v),
                  p && p === v && ((d = u), p--),
                  d > u && (d = u)),
              (v = sr(this._tTime, m)),
              !a &&
                this._tTime &&
                v !== p &&
                this._tTime - v * m - this._dur <= 0 &&
                (v = p),
              S && p & 1 && ((d = u - d), (b = 1)),
              p !== v && !this._lock)
            ) {
              var k = S && v & 1,
                E = k === (S && p & 1);
              if (
                (p < v && (k = !k),
                (a = k ? 0 : f % u ? u : f),
                (this._lock = 1),
                (this.render(a || (b ? 0 : Tt(p * m)), n, !u)._lock = 0),
                (this._tTime = f),
                !n && this.parent && we(this, "onRepeat"),
                this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  C !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                E &&
                  ((this._lock = 2),
                  (a = k ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !b && this.invalidate()),
                (this._lock = 0),
                !this._ts && !C)
              )
                return this;
              ia(this, b);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = eu(this, Tt(a), Tt(d))), w && (f -= d - (d = w._start))),
            (this._tTime = f),
            (this._time = d),
            (this._act = !x),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && f && !n && !v && (we(this, "onStart"), this._tTime !== f))
          )
            return this;
          if (d >= a && r >= 0)
            for (c = this._first; c; ) {
              if (
                ((_ = c._next), (c._act || d >= c._start) && c._ts && w !== c)
              ) {
                if (c.parent !== this) return this.render(r, n, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (d - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (d - c._start) * c._ts,
                    n,
                    o
                  ),
                  d !== this._time || (!this._ts && !C))
                ) {
                  (w = 0), _ && (f += this._zTime = -rt);
                  break;
                }
              }
              c = _;
            }
          else {
            c = this._last;
            for (var P = r < 0 ? r : d; c; ) {
              if (
                ((_ = c._prev), (c._act || P <= c._end) && c._ts && w !== c)
              ) {
                if (c.parent !== this) return this.render(r, n, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (P - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (P - c._start) * c._ts,
                    n,
                    o || (Wt && ds(c))
                  ),
                  d !== this._time || (!this._ts && !C))
                ) {
                  (w = 0), _ && (f += this._zTime = P ? -rt : rt);
                  break;
                }
              }
              c = _;
            }
          }
          if (
            w &&
            !n &&
            (this.pause(),
            (w.render(d >= a ? 0 : -rt)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = y), yn(this), this.render(r, n, o);
          this._onUpdate && !n && we(this, "onUpdate", !0),
            ((f === l && this._tTime >= this.totalDuration()) || (!f && a)) &&
              (y === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((f === l && this._ts > 0) || (!f && this._ts < 0)) &&
                  ci(this, 1),
                !n &&
                  !(r < 0 && !a) &&
                  (f || a || !l) &&
                  (we(
                    this,
                    f === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(f < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (r, n) {
        var o = this;
        if ((Je(n) || (n = Oe(this, n, r)), !(r instanceof Nr))) {
          if (Vt(r))
            return (
              r.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (At(r)) return this.addLabel(r, n);
          if (gt(r)) r = Ct.delayedCall(0, r);
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
        return At(r)
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
              (this._start = Tt(
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
      (i.addLabel = function (r, n) {
        return (this.labels[r] = Oe(this, n)), this;
      }),
      (i.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (i.addPause = function (r, n, o) {
        var a = Ct.delayedCall(0, n || Pr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), $e(this, a, Oe(this, r))
        );
      }),
      (i.removePause = function (r) {
        var n = this._first;
        for (r = Oe(this, r); n; )
          n._start === r && n.data === "isPause" && ci(n), (n = n._next);
      }),
      (i.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          pi !== a[l] && a[l].kill(r, n);
        return this;
      }),
      (i.getTweensOf = function (r, n) {
        for (var o = [], a = De(r), l = this._first, u = Je(n), f; l; )
          l instanceof Ct
            ? Gl(l._targets, a) &&
              (u
                ? (!pi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              o.push(l)
            : (f = l.getTweensOf(a, n)).length && o.push.apply(o, f),
            (l = l._next);
        return o;
      }),
      (i.tweenTo = function (r, n) {
        n = n || {};
        var o = this,
          a = Oe(o, r),
          l = n,
          u = l.startAt,
          f = l.onStart,
          h = l.onStartParams,
          d = l.immediateRender,
          c,
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
                  if ((o.pause(), !c)) {
                    var m =
                      n.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    _._dur !== m && or(_, m, 0, 1).render(_._time, !0, !0),
                      (c = 1);
                  }
                  f && f.apply(_, h || []);
                },
              },
              n
            )
          );
        return d ? _.render(0) : _;
      }),
      (i.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, ye({ startAt: { time: Oe(this, r) } }, o));
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
          f,
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
              (f = a._start),
              f > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), ($e(o, a, f - a._delay, 1)._lock = 0))
                : (l = f),
              f < 0 &&
                a._ts &&
                ((n -= f),
                ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                  ((o._start += f / o._ts), (o._time -= f), (o._tTime -= f)),
                o.shiftChildren(-f, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = u);
          or(o, o === ht && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((ht._ts && (Do(ht, vn(r, ht)), (Po = xe.frame)), xe.frame >= Mo)) {
          Mo += ot.autoSleep || 120;
          var n = ht._first;
          if ((!n || !n._ts) && ot.autoSleep && xe._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || xe.sleep();
          }
        }
      }),
      t
    );
  })(Nr);
  ye(te.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var mu = function (t, i, e, r, n, o, a) {
      var l = new ce(this._pt, t, i, 0, 1, fa, null, n),
        u = 0,
        f = 0,
        h,
        d,
        c,
        _,
        p,
        m,
        C,
        w;
      for (
        l.b = e,
          l.e = r,
          e += "",
          r += "",
          (C = ~r.indexOf("random(")) && (r = Rr(r)),
          o && ((w = [e, r]), o(w, t, i), (e = w[0]), (r = w[1])),
          d = e.match(ns) || [];
        (h = ns.exec(r));

      )
        (_ = h[0]),
          (p = r.substring(u, h.index)),
          c ? (c = (c + 1) % 5) : p.substr(-5) === "rgba(" && (c = 1),
          _ !== d[f++] &&
            ((m = parseFloat(d[f - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || f === 1 ? p : ",",
              s: m,
              c: _.charAt(1) === "=" ? rr(m, _) - m : parseFloat(_) - m,
              m: c && c < 4 ? Math.round : 0,
            }),
            (u = ns.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (So.test(r) || C) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    bs = function (t, i, e, r, n, o, a, l, u, f) {
      gt(r) && (r = r(n || 0, t, o));
      var h = t[i],
        d =
          e !== "get"
            ? e
            : gt(h)
            ? u
              ? t[
                  i.indexOf("set") || !gt(t["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : t[i]()
            : h,
        c = gt(h) ? (u ? bu : la) : Cs,
        _;
      if (
        (At(r) &&
          (~r.indexOf("random(") && (r = Rr(r)),
          r.charAt(1) === "=" &&
            ((_ = rr(d, r) + ($t(d) || 0)), (_ || _ === 0) && (r = _))),
        !f || d !== r || Ss)
      )
        return !isNaN(d * r) && r !== ""
          ? ((_ = new ce(
              this._pt,
              t,
              i,
              +d || 0,
              r - (d || 0),
              typeof h == "boolean" ? Tu : ua,
              0,
              c
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, t),
            (this._pt = _))
          : (!h && !(i in t) && as(i, r),
            mu.call(this, t, i, d, r, c, l || ot.stringFilter, u));
    },
    vu = function (t, i, e, r, n) {
      if (
        (gt(t) && (t = Fr(t, n, i, e, r)),
        !He(t) || (t.style && t.nodeType) || Vt(t) || xo(t))
      )
        return At(t) ? Fr(t, n, i, e, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Fr(t[a], n, i, e, r);
      return o;
    },
    sa = function (t, i, e, r, n, o) {
      var a, l, u, f;
      if (
        ve[t] &&
        (a = new ve[t]()).init(
          n,
          a.rawVars ? i[t] : vu(i[t], r, n, o, e),
          e,
          r,
          o
        ) !== !1 &&
        ((e._pt = l = new ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
        e !== ar)
      )
        for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
          u[a._props[f]] = l;
      return a;
    },
    pi,
    Ss,
    Ts = function s(t, i, e) {
      var r = t.vars,
        n = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        f = r.runBackwards,
        h = r.yoyoEase,
        d = r.keyframes,
        c = r.autoRevert,
        _ = t._dur,
        p = t._startAt,
        m = t._targets,
        C = t.parent,
        w = C && C.data === "nested" ? C.vars.targets : m,
        x = t._overwrite === "auto" && !Jn,
        y = t.timeline,
        v,
        S,
        b,
        k,
        E,
        P,
        L,
        M,
        R,
        I,
        B,
        W,
        A;
      if (
        (y && (!d || !n) && (n = "none"),
        (t._ease = Ri(n, er.ease)),
        (t._yEase = h ? ea(Ri(h === !0 ? n : h, er.ease)) : 0),
        h &&
          t._yoyo &&
          !t._repeat &&
          ((h = t._yEase), (t._yEase = t._ease), (t._ease = h)),
        (t._from = !y && !!r.runBackwards),
        !y || (d && !r.stagger))
      ) {
        if (
          ((M = m[0] ? Oi(m[0]).harness : 0),
          (W = M && r[M.prop]),
          (v = gn(r, ls)),
          p &&
            (p._zTime < 0 && p.progress(1),
            i < 0 && f && a && !c
              ? p.render(-1, !0)
              : p.revert(f && _ ? dn : ql),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (ci(
              (t._startAt = Ct.set(
                m,
                ye(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: C,
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
            i < 0 && (Wt || (!a && !c)) && t._startAt.revert(dn),
            a && _ && i <= 0 && e <= 0)
          ) {
            i && (t._zTime = i);
            return;
          }
        } else if (f && _ && !p) {
          if (
            (i && (a = !1),
            (b = ye(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && ue(l),
                immediateRender: a,
                stagger: 0,
                parent: C,
              },
              v
            )),
            W && (b[M.prop] = W),
            ci((t._startAt = Ct.set(m, b))),
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
          t._pt = t._ptCache = 0, l = (_ && ue(l)) || (l && !_), S = 0;
          S < m.length;
          S++
        ) {
          if (
            ((E = m[S]),
            (L = E._gsap || hs(m)[S]._gsap),
            (t._ptLookup[S] = I = {}),
            us[L.id] && fi.length && _n(),
            (B = w === m ? S : w.indexOf(E)),
            M &&
              (R = new M()).init(E, W || v, t, B, w) !== !1 &&
              ((t._pt = k =
                new ce(t._pt, E, R.name, 0, 1, R.render, R, 0, R.priority)),
              R._props.forEach(function ($) {
                I[$] = k;
              }),
              R.priority && (P = 1)),
            !M || W)
          )
            for (b in v)
              ve[b] && (R = sa(b, v, t, B, E, w))
                ? R.priority && (P = 1)
                : (I[b] = k =
                    bs.call(t, E, b, "get", v[b], B, w, 0, r.stringFilter));
          t._op && t._op[S] && t.kill(E, t._op[S]),
            x &&
              t._pt &&
              ((pi = t),
              ht.killTweensOf(E, I, t.globalTime(i)),
              (A = !t.parent),
              (pi = 0)),
            t._pt && l && (us[L.id] = 1);
        }
        P && ca(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !A),
        d && i <= 0 && y.render(Me, !0, !0);
    },
    yu = function (t, i, e, r, n, o, a, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
        f,
        h,
        d,
        c;
      if (!u)
        for (
          u = t._ptCache[i] = [], d = t._ptLookup, c = t._targets.length;
          c--;

        ) {
          if (((f = d[c][i]), f && f.d && f.d._pt))
            for (f = f.d._pt; f && f.p !== i && f.fp !== i; ) f = f._next;
          if (!f)
            return (
              (Ss = 1),
              (t.vars[i] = "+=0"),
              Ts(t, a),
              (Ss = 0),
              l ? Er(i + " not eligible for reset") : 1
            );
          u.push(f);
        }
      for (c = u.length; c--; )
        (h = u[c]),
          (f = h._pt || h),
          (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c),
          (f.c = e - f.s),
          h.e && (h.e = yt(e) + $t(h.e)),
          h.b && (h.b = f.s + $t(h.b));
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
    Fr = function (t, i, e, r, n) {
      return gt(t)
        ? t.call(i, e, r, n)
        : At(t) && ~t.indexOf("random(")
        ? Rr(t)
        : t;
    },
    oa = cs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    aa = {};
  fe(oa + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return (aa[s] = 1);
  });
  var Ct = (function (s) {
    It(t, s);
    function t(e, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Mr(r)) || this);
      var l = a.vars,
        u = l.duration,
        f = l.delay,
        h = l.immediateRender,
        d = l.stagger,
        c = l.overwrite,
        _ = l.keyframes,
        p = l.defaults,
        m = l.scrollTrigger,
        C = l.yoyoEase,
        w = r.parent || ht,
        x = (Vt(e) || xo(e) ? Je(e[0]) : "length" in r) ? [e] : De(e),
        y,
        v,
        S,
        b,
        k,
        E,
        P,
        L;
      if (
        ((a._targets = x.length
          ? hs(x)
          : Er(
              "GSAP target " + e + " not found. https://gsap.com",
              !ot.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = c),
        _ || d || cn(u) || cn(f))
      ) {
        if (
          ((r = a.vars),
          (y = a.timeline =
            new te({
              data: "nested",
              defaults: p || {},
              targets: w && w.data === "nested" ? w.vars.targets : x,
            })),
          y.kill(),
          (y.parent = y._dp = _t(a)),
          (y._start = 0),
          d || cn(u) || cn(f))
        ) {
          if (((b = x.length), (P = d && Ho(d)), He(d)))
            for (k in d) ~oa.indexOf(k) && (L || (L = {}), (L[k] = d[k]));
          for (v = 0; v < b; v++)
            (S = gn(r, aa)),
              (S.stagger = 0),
              C && (S.yoyoEase = C),
              L && nr(S, L),
              (E = x[v]),
              (S.duration = +Fr(u, _t(a), v, E, x)),
              (S.delay = (+Fr(f, _t(a), v, E, x) || 0) - a._delay),
              !d &&
                b === 1 &&
                S.delay &&
                ((a._delay = f = S.delay), (a._start += f), (S.delay = 0)),
              y.to(E, S, P ? P(v, E, x) : 0),
              (y._ease = Q.none);
          y.duration() ? (u = f = 0) : (a.timeline = 0);
        } else if (_) {
          Mr(ye(y.vars.defaults, { ease: "none" })),
            (y._ease = Ri(_.ease || r.ease || "none"));
          var M = 0,
            R,
            I,
            B;
          if (Vt(_))
            _.forEach(function (W) {
              return y.to(x, W, ">");
            }),
              y.duration();
          else {
            S = {};
            for (k in _)
              k === "ease" || k === "easeEach" || xu(k, _[k], S, _.easeEach);
            for (k in S)
              for (
                R = S[k].sort(function (W, A) {
                  return W.t - A.t;
                }),
                  M = 0,
                  v = 0;
                v < R.length;
                v++
              )
                (I = R[v]),
                  (B = {
                    ease: I.e,
                    duration: ((I.t - (v ? R[v - 1].t : 0)) / 100) * u,
                  }),
                  (B[k] = I.v),
                  y.to(x, B, M),
                  (M += B.duration);
            y.duration() < u && y.to({}, { duration: u - y.duration() });
          }
        }
        u || a.duration((u = y.duration()));
      } else a.timeline = 0;
      return (
        c === !0 && !Jn && ((pi = _t(a)), ht.killTweensOf(x), (pi = 0)),
        $e(w, _t(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (h ||
          (!u &&
            !_ &&
            a._start === Tt(w._time) &&
            ue(h) &&
            jl(_t(a)) &&
            w.data !== "nested")) &&
          ((a._tTime = -rt), a.render(Math.max(0, -f) || 0)),
        m && Io(_t(a), m),
        a
      );
    }
    var i = t.prototype;
    return (
      (i.render = function (r, n, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          f = r < 0,
          h = r > l - rt && !f ? l : r < rt ? 0 : r,
          d,
          c,
          _,
          p,
          m,
          C,
          w,
          x,
          y;
        if (!u) tu(this, r, n, o);
        else if (
          h !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== f) ||
          this._lazy
        ) {
          if (((d = h), (x = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && f))
              return this.totalTime(p * 100 + r, n, o);
            if (
              ((d = Tt(h % p)),
              h === l
                ? ((_ = this._repeat), (d = u))
                : ((m = Tt(h / p)),
                  (_ = ~~m),
                  _ && _ === m ? ((d = u), _--) : d > u && (d = u)),
              (C = this._yoyo && _ & 1),
              C && ((y = this._yEase), (d = u - d)),
              (m = sr(this._tTime, p)),
              d === a && !o && this._initted && _ === m)
            )
              return (this._tTime = h), this;
            _ !== m &&
              (x && this._yEase && ia(x, C),
              this.vars.repeatRefresh &&
                !C &&
                !this._lock &&
                d !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Tt(p * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Wo(this, f ? r : d, o, n, h)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
              return this;
            if (u !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = h),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (y || this._ease)(d / u)),
            this._from && (this.ratio = w = 1 - w),
            !a && h && !n && !m && (we(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (c = this._pt; c; ) c.r(w, c.d), (c = c._next);
          (x && x.render(r < 0 ? r : x._dur * x._ease(d / this._dur), n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (f && ps(this, r, n, o), we(this, "onUpdate")),
            this._repeat &&
              _ !== m &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              we(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (f && !this._onUpdate && ps(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                ci(this, 1),
              !n &&
                !(f && !a) &&
                (h || a || C) &&
                (we(this, h === l ? "onComplete" : "onReverseComplete", !0),
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
        Lr || xe.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          f;
        return (
          this._initted || Ts(this, u),
          (f = this._ease(u / this._dur)),
          yu(this, r, n, o, a, f, u, l)
            ? this.resetTo(r, n, o, a, 1)
            : (wn(this, 0),
              this.parent ||
                Lo(
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
              ? Ar(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Wt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, pi && pi.vars.overwrite !== !0)
              ._first || Ar(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              or(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? De(r) : a,
          u = this._ptLookup,
          f = this._pt,
          h,
          d,
          c,
          _,
          p,
          m,
          C;
        if ((!n || n === "all") && Zl(a, l))
          return n === "all" && (this._pt = 0), Ar(this);
        for (
          h = this._op = this._op || [],
            n !== "all" &&
              (At(n) &&
                ((p = {}),
                fe(n, function (w) {
                  return (p[w] = 1);
                }),
                (n = p)),
              (n = wu(a, n))),
            C = a.length;
          C--;

        )
          if (~l.indexOf(a[C])) {
            (d = u[C]),
              n === "all"
                ? ((h[C] = n), (_ = d), (c = {}))
                : ((c = h[C] = h[C] || {}), (_ = n));
            for (p in _)
              (m = d && d[p]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(p) === !0) &&
                    mn(this, m, "_pt"),
                  delete d[p]),
                c !== "all" && (c[p] = 1);
          }
        return this._initted && !this._pt && f && Ar(this), this;
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
        return ht.killTweensOf(r, n, o);
      }),
      t
    );
  })(Nr);
  ye(Ct.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    fe("staggerTo,staggerFrom,staggerFromTo", function (s) {
      Ct[s] = function () {
        var t = new te(),
          i = gs.call(arguments, 0);
        return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
      };
    });
  var Cs = function (t, i, e) {
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
    ks = function (t, i) {
      return gt(t[i]) ? la : es(t[i]) && t.setAttribute ? Su : Cs;
    },
    ua = function (t, i) {
      return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
    },
    Tu = function (t, i) {
      return i.set(i.t, i.p, !!(i.s + i.c * t), i);
    },
    fa = function (t, i) {
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
    Es = function (t, i) {
      for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
    },
    Cu = function (t, i, e, r) {
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
    Eu = function (t, i, e, r) {
      r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
    },
    ca = function (t) {
      for (var i = t._pt, e, r, n, o; i; ) {
        for (e = i._next, r = n; r && r.pr > i.pr; ) r = r._next;
        (i._prev = r ? r._prev : o) ? (i._prev._next = i) : (n = i),
          (i._next = r) ? (r._prev = i) : (o = i),
          (i = e);
      }
      t._pt = n;
    },
    ce = (function () {
      function s(i, e, r, n, o, a, l, u, f) {
        (this.t = e),
          (this.s = n),
          (this.c = o),
          (this.p = r),
          (this.r = a || ua),
          (this.d = l || this),
          (this.set = u || Cs),
          (this.pr = f || 0),
          (this._next = i),
          i && (i._prev = this);
      }
      var t = s.prototype;
      return (
        (t.modifier = function (e, r, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Eu),
            (this.m = e),
            (this.mt = n),
            (this.tween = r);
        }),
        s
      );
    })();
  fe(
    cs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (s) {
      return (ls[s] = 1);
    }
  ),
    (me.TweenMax = me.TweenLite = Ct),
    (me.TimelineLite = me.TimelineMax = te),
    (ht = new te({
      sortChildren: !1,
      defaults: er,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (ot.stringFilter = ta);
  var zi = [],
    xn = {},
    Pu = [],
    ha = 0,
    Mu = 0,
    Ps = function (t) {
      return (xn[t] || Pu).map(function (i) {
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
        (this.selector = e && ms(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Mu++),
          i && this.add(i);
      }
      var t = s.prototype;
      return (
        (t.add = function (e, r, n) {
          gt(e) && ((n = r), (r = e), (e = gt));
          var o = this,
            a = function () {
              var u = ft,
                f = o.selector,
                h;
              return (
                u && u !== o && u.data.push(o),
                n && (o.selector = ms(n)),
                (ft = o),
                (h = r.apply(o, arguments)),
                gt(h) && o._r.push(h),
                (ft = u),
                (o.selector = f),
                (o.isReverted = !1),
                h
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
          var r = ft;
          (ft = null), e(this), (ft = r);
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
                        u.getChildren(!0, !0, !1).forEach(function (f) {
                          return a.splice(a.indexOf(f), 1);
                        }));
                  for (
                    a
                      .map(function (f) {
                        return {
                          g:
                            f._dur ||
                            f._delay ||
                            (f._sat && !f._sat.vars.immediateRender)
                              ? f.globalTime(0)
                              : -1 / 0,
                          t: f,
                        };
                      })
                      .sort(function (f, h) {
                        return h.g - f.g || -1 / 0;
                      })
                      .forEach(function (f) {
                        return f.t.revert(e);
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
                  n._r.forEach(function (f) {
                    return f(e, n);
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
    Ou = (function () {
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
            f;
          ft && !o.selector && (o.selector = ft.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = e);
          for (u in e)
            u === "all"
              ? (f = 1)
              : ((l = Ve.matchMedia(e[u])),
                l &&
                  (zi.indexOf(o) < 0 && zi.push(o),
                  (a[u] = l.matches) && (f = 1),
                  l.addListener
                    ? l.addListener(Ms)
                    : l.addEventListener("change", Ms)));
          return (
            f &&
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
    bn = {
      registerPlugin: function () {
        for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
          i[e] = arguments[e];
        i.forEach(function (r) {
          return Zo(r);
        });
      },
      timeline: function (t) {
        return new te(t);
      },
      getTweensOf: function (t, i) {
        return ht.getTweensOf(t, i);
      },
      getProperty: function (t, i, e, r) {
        At(t) && (t = De(t)[0]);
        var n = Oi(t || {}).get,
          o = e ? Ao : Ro;
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
        if (((t = De(t)), t.length > 1)) {
          var r = t.map(function (f) {
              return he.quickSetter(f, i, e);
            }),
            n = r.length;
          return function (f) {
            for (var h = n; h--; ) r[h](f);
          };
        }
        t = t[0] || {};
        var o = ve[i],
          a = Oi(t),
          l = (a.harness && (a.harness.aliases || {})[i]) || i,
          u = o
            ? function (f) {
                var h = new o();
                (ar._pt = 0),
                  h.init(t, e ? f + e : f, ar, 0, [t]),
                  h.render(1, h),
                  ar._pt && Es(1, ar);
              }
            : a.set(t, l);
        return o
          ? u
          : function (f) {
              return u(t, l, e ? f + e : f, a, 1);
            };
      },
      quickTo: function (t, i, e) {
        var r,
          n = he.to(
            t,
            ye(
              ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
              e || {}
            )
          ),
          o = function (l, u, f) {
            return n.resetTo(i, l, u, f);
          };
        return (o.tween = n), o;
      },
      isTweening: function (t) {
        return ht.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ri(t.ease, er.ease)), zo(er, t || {});
      },
      config: function (t) {
        return zo(ot, t || {});
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
            Er(i + " effect requires " + a + " plugin.")
          );
        }),
          (fs[i] = function (a, l, u) {
            return e(De(a), ye(l || {}, n), u);
          }),
          o &&
            (te.prototype[i] = function (a, l, u) {
              return this.add(fs[i](a, He(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, i) {
        Q[t] = Ri(i);
      },
      parseEase: function (t, i) {
        return arguments.length ? Ri(t, i) : Q;
      },
      getById: function (t) {
        return ht.getById(t);
      },
      exportRoot: function (t, i) {
        t === void 0 && (t = {});
        var e = new te(t),
          r,
          n;
        for (
          e.smoothChildTiming = ue(t.smoothChildTiming),
            ht.remove(e),
            e._dp = 0,
            e._time = e._tTime = ht._time,
            r = ht._first;
          r;

        )
          (n = r._next),
            (i ||
              !(
                !r._dur &&
                r instanceof Ct &&
                r.vars.onComplete === r._targets[0]
              )) &&
              $e(e, r, r._start - r._delay),
            (r = n);
        return $e(ht, e, 0), e;
      },
      context: function (t, i) {
        return t ? new da(t, i) : ft;
      },
      matchMedia: function (t) {
        return new Ou(t);
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
        var e = xn[t] || (xn[t] = []);
        ~e.indexOf(i) || e.push(i);
      },
      removeEventListener: function (t, i) {
        var e = xn[t],
          r = e && e.indexOf(i);
        r >= 0 && e.splice(r, 1);
      },
      utils: {
        wrap: lu,
        wrapYoyo: uu,
        distribute: Ho,
        random: $o,
        snap: Vo,
        normalize: au,
        getUnit: $t,
        clamp: ru,
        splitColor: Qo,
        toArray: De,
        selector: ms,
        mapRange: Uo,
        pipe: su,
        unitize: ou,
        interpolate: fu,
        shuffle: Xo,
      },
      install: ko,
      effects: fs,
      ticker: xe,
      updateRoot: te.updateRoot,
      plugins: ve,
      globalTimeline: ht,
      core: {
        PropTween: ce,
        globals: Eo,
        Tween: Ct,
        Timeline: te,
        Animation: Nr,
        getCache: Oi,
        _removeLinkedListItem: mn,
        reverting: function () {
          return Wt;
        },
        context: function (t) {
          return t && ft && (ft.data.push(t), (t._ctx = ft)), ft;
        },
        suppressOverwrites: function (t) {
          return (Jn = t);
        },
      },
    };
  fe("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return (bn[s] = Ct[s]);
  }),
    xe.add(te.updateRoot),
    (ar = bn.to({}, { duration: 0 }));
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
              (At(n) &&
                ((l = {}),
                fe(n, function (f) {
                  return (l[f] = 1);
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
    he =
      bn.registerPlugin(
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
        Os("snap", Vo)
      ) || bn;
  (Ct.version = te.version = he.version = "3.13.0"),
    (Co = 1),
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
   */ var pa,
    _i,
    ur,
    Ds,
    Li,
    _a,
    Rs,
    Au = function () {
      return typeof window != "undefined";
    },
    ti = {},
    Ni = 180 / Math.PI,
    fr = Math.PI / 180,
    cr = Math.atan2,
    ga = 1e8,
    As = /([A-Z])/g,
    zu = /(left|right|width|margin|padding|x)/i,
    Lu = /[\s,\(]\S/,
    qe = {
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
    Fu = function (t, i) {
      return i.set(
        i.t,
        i.p,
        t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
        i
      );
    },
    Iu = function (t, i) {
      var e = i.s + i.c * t;
      i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    ma = function (t, i) {
      return i.set(i.t, i.p, t ? i.e : i.b, i);
    },
    va = function (t, i) {
      return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
    },
    Wu = function (t, i, e) {
      return (t.style[i] = e);
    },
    Bu = function (t, i, e) {
      return t.style.setProperty(i, e);
    },
    Yu = function (t, i, e) {
      return (t._gsap[i] = e);
    },
    Xu = function (t, i, e) {
      return (t._gsap.scaleX = t._gsap.scaleY = e);
    },
    Hu = function (t, i, e, r, n) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = e), o.renderTransform(n, o);
    },
    Vu = function (t, i, e, r, n) {
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
      if (t in ti && n) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = qe[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                  return (e.tfm[a] = ei(r, a));
                })
              : (this.tfm[t] = o.x ? o[t] : ei(r, t)),
            t === de && (this.tfm.zOrigin = o.zOrigin);
        else
          return qe.transform.split(",").forEach(function (a) {
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
    ya = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    qu = function () {
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
                : t[n].replace(As, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Rs()),
          (!n || !n.isStart) &&
            !e[dt] &&
            (ya(e),
            r.zOrigin &&
              e[de] &&
              ((e[de] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    wa = function (t, i) {
      var e = { target: t, props: [], revert: qu, save: $u };
      return (
        t._gsap || he.core.getCache(t),
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
      var e = _i.createElementNS
        ? _i.createElementNS(
            (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : _i.createElement(t);
      return e && e.style ? e : _i.createElement(t);
    },
    Re = function s(t, i, e) {
      var r = getComputedStyle(t);
      return (
        r[i] ||
        r.getPropertyValue(i.replace(As, "-$1").toLowerCase()) ||
        r.getPropertyValue(i) ||
        (!e && s(t, hr(i) || i, 1)) ||
        ""
      );
    },
    ba = "O,Moz,ms,Ms,Webkit".split(","),
    hr = function (t, i, e) {
      var r = i || Li,
        n = r.style,
        o = 5;
      if (t in n && !e) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(ba[o] + t in n);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ba[o] : "") + t;
    },
    Ns = function () {
      Au() &&
        window.document &&
        ((pa = window),
        (_i = pa.document),
        (ur = _i.documentElement),
        (Li = Ls("div") || { style: {} }),
        Ls("div"),
        (dt = hr(dt)),
        (de = dt + "Origin"),
        (Li.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (xa = !!hr("perspective")),
        (Rs = he.core.reverting),
        (Ds = 1));
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
    ka = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ca(t));
    },
    Fi = function (t, i) {
      if (i) {
        var e = t.style,
          r;
        i in ti && i !== de && (i = dt),
          e.removeProperty
            ? ((r = i.substr(0, 2)),
              (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
              e.removeProperty(
                r === "--" ? i : i.replace(As, "-$1").toLowerCase()
              ))
            : e.removeAttribute(i);
      }
    },
    gi = function (t, i, e, r, n, o) {
      var a = new ce(t._pt, i, e, 0, 1, o ? va : ma);
      return (t._pt = a), (a.b = r), (a.e = n), t._props.push(e), a;
    },
    Ea = { deg: 1, rad: 1, turn: 1 },
    Uu = { grid: 1, flex: 1 },
    mi = function s(t, i, e, r) {
      var n = parseFloat(e) || 0,
        o = (e + "").trim().substr((n + "").length) || "px",
        a = Li.style,
        l = zu.test(i),
        u = t.tagName.toLowerCase() === "svg",
        f = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        d = r === "px",
        c = r === "%",
        _,
        p,
        m,
        C;
      if (r === o || !n || Ea[r] || Ea[o]) return n;
      if (
        (o !== "px" && !d && (n = s(t, i, e, "px")),
        (C = t.getCTM && ka(t)),
        (c || o === "%") && (ti[i] || ~i.indexOf("adius")))
      )
        return (
          (_ = C ? t.getBBox()[l ? "width" : "height"] : t[f]),
          yt(c ? (n / _) * h : (n / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = h + (d ? o : r)),
        (p =
          (r !== "rem" && ~i.indexOf("adius")) ||
          (r === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        C && (p = (t.ownerSVGElement || {}).parentNode),
        (!p || p === _i || !p.appendChild) && (p = _i.body),
        (m = p._gsap),
        m && c && m.width && l && m.time === xe.time && !m.uncache)
      )
        return yt((n / m.width) * h);
      if (c && (i === "height" || i === "width")) {
        var w = t.style[i];
        (t.style[i] = h + r), (_ = t[f]), w ? (t.style[i] = w) : Fi(t, i);
      } else
        (c || o === "%") &&
          !Uu[Re(p, "display")] &&
          (a.position = Re(t, "position")),
          p === t && (a.position = "static"),
          p.appendChild(Li),
          (_ = Li[f]),
          p.removeChild(Li),
          (a.position = "absolute");
      return (
        l && c && ((m = Oi(p)), (m.time = xe.time), (m.width = p[f])),
        yt(d ? (_ * n) / h : _ && n ? (h / _) * n : 0)
      );
    },
    ei = function (t, i, e, r) {
      var n;
      return (
        Ds || Ns(),
        i in qe &&
          i !== "transform" &&
          ((i = qe[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
        ti[i] && i !== "transform"
          ? ((n = Wr(t, r)),
            (n =
              i !== "transformOrigin"
                ? n[i]
                : n.svg
                ? n.origin
                : Tn(Re(t, de)) + " " + n.zOrigin + "px"))
          : ((n = t.style[i]),
            (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
              (n =
                (Sn[i] && Sn[i](t, i, e)) ||
                Re(t, i) ||
                Oo(t, i) ||
                (i === "opacity" ? 1 : 0))),
        e && !~(n + "").trim().indexOf(" ") ? mi(t, i, n, e) + e : n
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
      var a = new ce(this._pt, t.style, i, 0, 1, fa),
        l = 0,
        u = 0,
        f,
        h,
        d,
        c,
        _,
        p,
        m,
        C,
        w,
        x,
        y,
        v;
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
        (f = [e, r]),
        ta(f),
        (e = f[0]),
        (r = f[1]),
        (d = e.match(ir) || []),
        (v = r.match(ir) || []),
        v.length)
      ) {
        for (; (h = ir.exec(r)); )
          (m = h[0]),
            (w = r.substring(l, h.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (_ = 1),
            m !== (p = d[u++] || "") &&
              ((c = parseFloat(p) || 0),
              (y = p.substr((c + "").length)),
              m.charAt(1) === "=" && (m = rr(c, m) + y),
              (C = parseFloat(m)),
              (x = m.substr((C + "").length)),
              (l = ir.lastIndex - x.length),
              x ||
                ((x = x || ot.units[i] || y),
                l === r.length && ((r += x), (a.e += x))),
              y !== x && (c = mi(t, i, p, x) || 0),
              (a._pt = {
                _next: a._pt,
                p: w || u === 1 ? w : ",",
                s: c,
                c: C - c,
                m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = i === "display" && r === "none" ? va : ma;
      return So.test(r) && (a.e = 0), (this._pt = a), a;
    },
    Pa = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ku = function (t) {
      var i = t.split(" "),
        e = i[0],
        r = i[1] || "50%";
      return (
        (e === "top" || e === "bottom" || r === "left" || r === "right") &&
          ((t = e), (e = r), (r = t)),
        (i[0] = Pa[e] || e),
        (i[1] = Pa[r] || r),
        i.join(" ")
      );
    },
    Zu = function (t, i) {
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
              ti[a] && ((l = 1), (a = a === "transformOrigin" ? de : dt)),
              Fi(e, a);
        l &&
          (Fi(e, dt),
          o &&
            (o.svg && e.removeAttribute("transform"),
            (r.scale = r.rotate = r.translate = "none"),
            Wr(e, 1),
            (o.uncache = 1),
            ya(r)));
      }
    },
    Sn = {
      clearProps: function (t, i, e, r, n) {
        if (n.data !== "isFromStart") {
          var o = (t._pt = new ce(t._pt, i, e, 0, 0, Zu));
          return (o.u = r), (o.pr = -10), (o.tween = n), t._props.push(e), 1;
        }
      },
    },
    Ir = [1, 0, 0, 1, 0, 0],
    Ma = {},
    Oa = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Da = function (t) {
      var i = Re(t, dt);
      return Oa(i) ? Ir : i.substr(7).match(bo).map(yt);
    },
    Fs = function (t, i) {
      var e = t._gsap || Oi(t),
        r = t.style,
        n = Da(t),
        o,
        a,
        l,
        u;
      return e.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Ir : n)
        : (n === Ir &&
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
    Is = function (t, i, e, r, n, o) {
      var a = t._gsap,
        l = n || Fs(t, !0),
        u = a.xOrigin || 0,
        f = a.yOrigin || 0,
        h = a.xOffset || 0,
        d = a.yOffset || 0,
        c = l[0],
        _ = l[1],
        p = l[2],
        m = l[3],
        C = l[4],
        w = l[5],
        x = i.split(" "),
        y = parseFloat(x[0]) || 0,
        v = parseFloat(x[1]) || 0,
        S,
        b,
        k,
        E;
      e
        ? l !== Ir &&
          (b = c * m - _ * p) &&
          ((k = y * (m / b) + v * (-p / b) + (p * w - m * C) / b),
          (E = y * (-_ / b) + v * (c / b) - (c * w - _ * C) / b),
          (y = k),
          (v = E))
        : ((S = Ca(t)),
          (y = S.x + (~x[0].indexOf("%") ? (y / 100) * S.width : y)),
          (v =
            S.y + (~(x[1] || x[0]).indexOf("%") ? (v / 100) * S.height : v))),
        r || (r !== !1 && a.smooth)
          ? ((C = y - u),
            (w = v - f),
            (a.xOffset = h + (C * c + w * p) - C),
            (a.yOffset = d + (C * _ + w * m) - w))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = y),
        (a.yOrigin = v),
        (a.smooth = !!r),
        (a.origin = i),
        (a.originIsAbsolute = !!e),
        (t.style[de] = "0px 0px"),
        o &&
          (gi(o, a, "xOrigin", u, y),
          gi(o, a, "yOrigin", f, v),
          gi(o, a, "xOffset", h, a.xOffset),
          gi(o, a, "yOffset", d, a.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + v);
    },
    Wr = function (t, i) {
      var e = t._gsap || new na(t);
      if ("x" in e && !i && !e.uncache) return e;
      var r = t.style,
        n = e.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = Re(t, de) || "0",
        f,
        h,
        d,
        c,
        _,
        p,
        m,
        C,
        w,
        x,
        y,
        v,
        S,
        b,
        k,
        E,
        P,
        L,
        M,
        R,
        I,
        B,
        W,
        A,
        $,
        H,
        g,
        j,
        lt,
        Dt,
        ut,
        Yt;
      return (
        (f = h = d = p = m = C = w = x = y = 0),
        (c = _ = 1),
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
        (b = Fs(t, e.svg)),
        e.svg &&
          (e.uncache
            ? (($ = t.getBBox()),
              (u = e.xOrigin - $.x + "px " + (e.yOrigin - $.y) + "px"),
              (A = ""))
            : (A = !i && t.getAttribute("data-svg-origin")),
          Is(t, A || u, !!A || e.originIsAbsolute, e.smooth !== !1, b)),
        (v = e.xOrigin || 0),
        (S = e.yOrigin || 0),
        b !== Ir &&
          ((L = b[0]),
          (M = b[1]),
          (R = b[2]),
          (I = b[3]),
          (f = B = b[4]),
          (h = W = b[5]),
          b.length === 6
            ? ((c = Math.sqrt(L * L + M * M)),
              (_ = Math.sqrt(I * I + R * R)),
              (p = L || M ? cr(M, L) * Ni : 0),
              (w = R || I ? cr(R, I) * Ni + p : 0),
              w && (_ *= Math.abs(Math.cos(w * fr))),
              e.svg && ((f -= v - (v * L + S * R)), (h -= S - (v * M + S * I))))
            : ((Yt = b[6]),
              (Dt = b[7]),
              (g = b[8]),
              (j = b[9]),
              (lt = b[10]),
              (ut = b[11]),
              (f = b[12]),
              (h = b[13]),
              (d = b[14]),
              (k = cr(Yt, lt)),
              (m = k * Ni),
              k &&
                ((E = Math.cos(-k)),
                (P = Math.sin(-k)),
                (A = B * E + g * P),
                ($ = W * E + j * P),
                (H = Yt * E + lt * P),
                (g = B * -P + g * E),
                (j = W * -P + j * E),
                (lt = Yt * -P + lt * E),
                (ut = Dt * -P + ut * E),
                (B = A),
                (W = $),
                (Yt = H)),
              (k = cr(-R, lt)),
              (C = k * Ni),
              k &&
                ((E = Math.cos(-k)),
                (P = Math.sin(-k)),
                (A = L * E - g * P),
                ($ = M * E - j * P),
                (H = R * E - lt * P),
                (ut = I * P + ut * E),
                (L = A),
                (M = $),
                (R = H)),
              (k = cr(M, L)),
              (p = k * Ni),
              k &&
                ((E = Math.cos(k)),
                (P = Math.sin(k)),
                (A = L * E + M * P),
                ($ = B * E + W * P),
                (M = M * E - L * P),
                (W = W * E - B * P),
                (L = A),
                (B = $)),
              m &&
                Math.abs(m) + Math.abs(p) > 359.9 &&
                ((m = p = 0), (C = 180 - C)),
              (c = yt(Math.sqrt(L * L + M * M + R * R))),
              (_ = yt(Math.sqrt(W * W + Yt * Yt))),
              (k = cr(B, W)),
              (w = Math.abs(k) > 2e-4 ? k * Ni : 0),
              (y = ut ? 1 / (ut < 0 ? -ut : ut) : 0)),
          e.svg &&
            ((A = t.getAttribute("transform")),
            (e.forceCSS = t.setAttribute("transform", "") || !Oa(Re(t, dt))),
            A && t.setAttribute("transform", A))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (n
            ? ((c *= -1),
              (w += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((_ *= -1), (w += w <= 0 ? 180 : -180))),
        (i = i || e.uncache),
        (e.x =
          f -
          ((e.xPercent =
            f &&
            ((!i && e.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
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
        (e.scaleX = yt(c)),
        (e.scaleY = yt(_)),
        (e.rotation = yt(p) + a),
        (e.rotationX = yt(m) + a),
        (e.rotationY = yt(C) + a),
        (e.skewX = w + a),
        (e.skewY = x + a),
        (e.transformPerspective = y + o),
        (e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
          (r[de] = Tn(u)),
        (e.xOffset = e.yOffset = 0),
        (e.force3D = ot.force3D),
        (e.renderTransform = e.svg ? ju : xa ? Ra : Qu),
        (e.uncache = 0),
        e
      );
    },
    Tn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ws = function (t, i, e) {
      var r = $t(i);
      return yt(parseFloat(i) + parseFloat(mi(t, "x", e + "px", r))) + r;
    },
    Qu = function (t, i) {
      (i.z = "0px"),
        (i.rotationY = i.rotationX = "0deg"),
        (i.force3D = 0),
        Ra(t, i);
    },
    Ii = "0deg",
    Br = "0px",
    Wi = ") ",
    Ra = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.z,
        u = e.rotation,
        f = e.rotationY,
        h = e.rotationX,
        d = e.skewX,
        c = e.skewY,
        _ = e.scaleX,
        p = e.scaleY,
        m = e.transformPerspective,
        C = e.force3D,
        w = e.target,
        x = e.zOrigin,
        y = "",
        v = (C === "auto" && t && t !== 1) || C === !0;
      if (x && (h !== Ii || f !== Ii)) {
        var S = parseFloat(f) * fr,
          b = Math.sin(S),
          k = Math.cos(S),
          E;
        (S = parseFloat(h) * fr),
          (E = Math.cos(S)),
          (o = Ws(w, o, b * E * -x)),
          (a = Ws(w, a, -Math.sin(S) * -x)),
          (l = Ws(w, l, k * E * -x + x));
      }
      m !== Br && (y += "perspective(" + m + Wi),
        (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
        (v || o !== Br || a !== Br || l !== Br) &&
          (y +=
            l !== Br || v
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Wi),
        u !== Ii && (y += "rotate(" + u + Wi),
        f !== Ii && (y += "rotateY(" + f + Wi),
        h !== Ii && (y += "rotateX(" + h + Wi),
        (d !== Ii || c !== Ii) && (y += "skew(" + d + ", " + c + Wi),
        (_ !== 1 || p !== 1) && (y += "scale(" + _ + ", " + p + Wi),
        (w.style[dt] = y || "translate(0, 0)");
    },
    ju = function (t, i) {
      var e = i || this,
        r = e.xPercent,
        n = e.yPercent,
        o = e.x,
        a = e.y,
        l = e.rotation,
        u = e.skewX,
        f = e.skewY,
        h = e.scaleX,
        d = e.scaleY,
        c = e.target,
        _ = e.xOrigin,
        p = e.yOrigin,
        m = e.xOffset,
        C = e.yOffset,
        w = e.forceCSS,
        x = parseFloat(o),
        y = parseFloat(a),
        v,
        S,
        b,
        k,
        E;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (f = parseFloat(f)),
        f && ((f = parseFloat(f)), (u += f), (l += f)),
        l || u
          ? ((l *= fr),
            (u *= fr),
            (v = Math.cos(l) * h),
            (S = Math.sin(l) * h),
            (b = Math.sin(l - u) * -d),
            (k = Math.cos(l - u) * d),
            u &&
              ((f *= fr),
              (E = Math.tan(u - f)),
              (E = Math.sqrt(1 + E * E)),
              (b *= E),
              (k *= E),
              f &&
                ((E = Math.tan(f)),
                (E = Math.sqrt(1 + E * E)),
                (v *= E),
                (S *= E))),
            (v = yt(v)),
            (S = yt(S)),
            (b = yt(b)),
            (k = yt(k)))
          : ((v = h), (k = d), (S = b = 0)),
        ((x && !~(o + "").indexOf("px")) || (y && !~(a + "").indexOf("px"))) &&
          ((x = mi(c, "x", o, "px")), (y = mi(c, "y", a, "px"))),
        (_ || p || m || C) &&
          ((x = yt(x + _ - (_ * v + p * b) + m)),
          (y = yt(y + p - (_ * S + p * k) + C))),
        (r || n) &&
          ((E = c.getBBox()),
          (x = yt(x + (r / 100) * E.width)),
          (y = yt(y + (n / 100) * E.height))),
        (E =
          "matrix(" +
          v +
          "," +
          S +
          "," +
          b +
          "," +
          k +
          "," +
          x +
          "," +
          y +
          ")"),
        c.setAttribute("transform", E),
        w && (c.style[dt] = E);
    },
    Ju = function (t, i, e, r, n) {
      var o = 360,
        a = At(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ni : 1),
        u = l - r,
        f = r + u + "deg",
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
        (t._pt = d = new ce(t._pt, i, e, r, u, Nu)),
        (d.e = f),
        (d.u = "deg"),
        t._props.push(e),
        d
      );
    },
    Aa = function (t, i) {
      for (var e in i) t[e] = i[e];
      return t;
    },
    tf = function (t, i, e) {
      var r = Aa({}, e._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = e.style,
        a,
        l,
        u,
        f,
        h,
        d,
        c,
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
      for (l in ti)
        (u = r[l]),
          (f = a[l]),
          u !== f &&
            n.indexOf(l) < 0 &&
            ((c = $t(u)),
            (_ = $t(f)),
            (h = c !== _ ? mi(e, l, u, _) : parseFloat(u)),
            (d = parseFloat(f)),
            (t._pt = new ce(t._pt, a, l, h, d - h, zs)),
            (t._pt.u = _ || 0),
            t._props.push(l));
      Aa(a, r);
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
    Sn[t > 1 ? "border" + s : s] = function (a, l, u, f, h) {
      var d, c;
      if (arguments.length < 4)
        return (
          (d = o.map(function (_) {
            return ei(a, _, u);
          })),
          (c = d.join(" ")),
          c.split(d[0]).length === 5 ? d[0] : c
        );
      (d = (f + "").split(" ")),
        (c = {}),
        o.forEach(function (_, p) {
          return (c[_] = d[p] = d[p] || d[((p - 1) / 2) | 0]);
        }),
        a.init(l, c, h);
    };
  });
  var za = {
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
        f,
        h,
        d,
        c,
        _,
        p,
        m,
        C,
        w,
        x,
        y,
        v,
        S,
        b,
        k;
      Ds || Ns(),
        (this.styles = this.styles || wa(t)),
        (k = this.styles.props),
        (this.tween = e);
      for (p in i)
        if (
          p !== "autoRound" &&
          ((f = i[p]), !(ve[p] && sa(p, i, e, r, t, n)))
        ) {
          if (
            ((c = typeof f),
            (_ = Sn[p]),
            c === "function" && ((f = f.call(e, r, t, n)), (c = typeof f)),
            c === "string" && ~f.indexOf("random(") && (f = Rr(f)),
            _)
          )
            _(this, t, p, f, e) && (b = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (f += ""),
              (di.lastIndex = 0),
              di.test(u) || ((m = $t(u)), (C = $t(f))),
              C ? m !== C && (u = mi(t, p, u, C) + C) : m && (f += m),
              this.add(a, "setProperty", u, f, r, n, 0, 0, p),
              o.push(p),
              k.push(p, 0, a[p]);
          else if (c !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(e, r, t, n) : l[p]),
                  At(u) && ~u.indexOf("random(") && (u = Rr(u)),
                  $t(u + "") ||
                    u === "auto" ||
                    (u += ot.units[p] || $t(ei(t, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = ei(t, p)))
                : (u = ei(t, p)),
              (d = parseFloat(u)),
              (w = c === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
              w && (f = f.substr(2)),
              (h = parseFloat(f)),
              p in qe &&
                (p === "autoAlpha" &&
                  (d === 1 && ei(t, "visibility") === "hidden" && h && (d = 0),
                  k.push("visibility", 0, a.visibility),
                  gi(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = qe[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (x = p in ti),
              x)
            ) {
              if (
                (this.styles.save(p),
                c === "string" &&
                  f.substring(0, 6) === "var(--" &&
                  ((f = Re(t, f.substring(4, f.indexOf(")")))),
                  (h = parseFloat(f))),
                y ||
                  ((v = t._gsap),
                  (v.renderTransform && !i.parseTransform) ||
                    Wr(t, i.parseTransform),
                  (S = i.smoothOrigin !== !1 && v.smooth),
                  (y = this._pt =
                    new ce(this._pt, a, dt, 0, 1, v.renderTransform, v, 0, -1)),
                  (y.dep = 1)),
                p === "scale")
              )
                (this._pt = new ce(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (w ? rr(v.scaleY, w + h) : h) - v.scaleY || 0,
                  zs
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                k.push(de, 0, a[de]),
                  (f = Ku(f)),
                  v.svg
                    ? Is(t, f, 0, S, 0, this)
                    : ((C = parseFloat(f.split(" ")[2]) || 0),
                      C !== v.zOrigin && gi(this, v, "zOrigin", v.zOrigin, C),
                      gi(this, a, p, Tn(u), Tn(f)));
                continue;
              } else if (p === "svgOrigin") {
                Is(t, f, 1, S, 0, this);
                continue;
              } else if (p in Ma) {
                Ju(this, v, p, d, w ? rr(d, w + f) : f);
                continue;
              } else if (p === "smoothOrigin") {
                gi(this, v, "smooth", v.smooth, f);
                continue;
              } else if (p === "force3D") {
                v[p] = f;
                continue;
              } else if (p === "transform") {
                tf(this, f, t);
                continue;
              }
            } else p in a || (p = hr(p) || p);
            if (
              x ||
              ((h || h === 0) && (d || d === 0) && !Lu.test(f) && p in a)
            )
              (m = (u + "").substr((d + "").length)),
                h || (h = 0),
                (C = $t(f) || (p in ot.units ? ot.units[p] : m)),
                m !== C && (d = mi(t, p, u, C)),
                (this._pt = new ce(
                  this._pt,
                  x ? v : a,
                  p,
                  d,
                  (w ? rr(d, w + h) : h) - d,
                  !x && (C === "px" || p === "zIndex") && i.autoRound !== !1
                    ? Iu
                    : zs
                )),
                (this._pt.u = C || 0),
                m !== C && C !== "%" && ((this._pt.b = u), (this._pt.r = Fu));
            else if (p in a) Gu.call(this, t, p, u, w ? w + f : f);
            else if (p in t) this.add(t, p, u || t[p], w ? w + f : f, r, n);
            else if (p !== "parseTransform") {
              as(p, f);
              continue;
            }
            x ||
              (p in a
                ? k.push(p, 0, a[p])
                : typeof t[p] == "function"
                ? k.push(p, 2, t[p]())
                : k.push(p, 1, u || t[p])),
              o.push(p);
          }
        }
      b && ca(this);
    },
    render: function (t, i) {
      if (i.tween._time || !Rs())
        for (var e = i._pt; e; ) e.r(t, e.d), (e = e._next);
      else i.styles.revert();
    },
    get: ei,
    aliases: qe,
    getSetter: function (t, i, e) {
      var r = qe[i];
      return (
        r && r.indexOf(",") < 0 && (i = r),
        i in ti && i !== de && (t._gsap.x || ei(t, "x"))
          ? e && _a === e
            ? i === "scale"
              ? Xu
              : Yu
            : (_a = e || {}) && (i === "scale" ? Hu : Vu)
          : t.style && !es(t.style[i])
          ? Wu
          : ~i.indexOf("-")
          ? Bu
          : ks(t, i)
      );
    },
    core: { _removeProperty: Fi, _getMatrix: Fs },
  };
  (he.utils.checkPrefix = hr),
    (he.core.getStyleSaver = wa),
    (function (s, t, i, e) {
      var r = fe(s + "," + t + "," + i, function (n) {
        ti[n] = 1;
      });
      fe(t, function (n) {
        (ot.units[n] = "deg"), (Ma[n] = 1);
      }),
        (qe[r[13]] = s + "," + t),
        fe(e, function (n) {
          var o = n.split(":");
          qe[o[1]] = r[o[0]];
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
        ot.units[s] = "px";
      }
    ),
    he.registerPlugin(za);
  var Bi = he.registerPlugin(za) || he;
  Bi.core.Tween;
  function ef(s, t) {
    for (var i = 0; i < t.length; i++) {
      var e = t[i];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(s, e.key, e);
    }
  }
  function rf(s, t, i) {
    return t && ef(s.prototype, t), s;
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
    be,
    vi,
    yi,
    dr,
    La,
    Yi,
    Yr,
    Na,
    ii,
    Fe,
    Fa,
    Ia = function () {
      return (
        Bt ||
        (typeof window != "undefined" &&
          (Bt = window.gsap) &&
          Bt.registerPlugin &&
          Bt)
      );
    },
    Wa = 1,
    pr = [],
    G = [],
    Ue = [],
    Xr = Date.now,
    Bs = function (t, i) {
      return i;
    },
    nf = function () {
      var t = Yr.core,
        i = t.bridge || {},
        e = t._scrollers,
        r = t._proxies;
      e.push.apply(e, G),
        r.push.apply(r, Ue),
        (G = e),
        (Ue = r),
        (Bs = function (o, a) {
          return i[o](a);
        });
    },
    wi = function (t, i) {
      return ~Ue.indexOf(t) && Ue[Ue.indexOf(t) + 1][i];
    },
    Hr = function (t) {
      return !!~Na.indexOf(t);
    },
    ee = function (t, i, e, r, n) {
      return t.addEventListener(i, e, { passive: r !== !1, capture: !!n });
    },
    ie = function (t, i, e, r) {
      return t.removeEventListener(i, e, !!r);
    },
    kn = "scrollLeft",
    En = "scrollTop",
    Ys = function () {
      return (ii && ii.isPressed) || G.cache++;
    },
    Pn = function (t, i) {
      var e = function r(n) {
        if (n || n === 0) {
          Wa && (be.history.scrollRestoration = "manual");
          var o = ii && ii.isPressed;
          (n = r.v = Math.round(n) || (ii && ii.iOS ? 1 : 0)),
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
      s: kn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Pn(function (s) {
        return arguments.length
          ? be.scrollTo(s, Mt.sc())
          : be.pageXOffset || vi[kn] || yi[kn] || dr[kn] || 0;
      }),
    },
    Mt = {
      s: En,
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
          ? be.scrollTo(re.sc(), s)
          : be.pageYOffset || vi[En] || yi[En] || dr[En] || 0;
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
    sf = function (t, i) {
      for (var e = i.length; e--; )
        if (i[e] === t || i[e].contains(t)) return !0;
      return !1;
    },
    xi = function (t, i) {
      var e = i.s,
        r = i.sc;
      Hr(t) && (t = vi.scrollingElement || yi);
      var n = G.indexOf(t),
        o = r === Mt.sc ? 1 : 2;
      !~n && (n = G.push(t) - 1), G[n + o] || ee(t, "scroll", Ys);
      var a = G[n + o],
        l =
          a ||
          (G[n + o] =
            Pn(wi(t, e), !0) ||
            (Hr(t)
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
    Xs = function (t, i, e) {
      var r = t,
        n = t,
        o = Xr(),
        a = o,
        l = i || 50,
        u = Math.max(500, l * 3),
        f = function (_, p) {
          var m = Xr();
          p || m - o > l
            ? ((n = r), (r = _), (a = o), (o = m))
            : e
            ? (r += _)
            : (r = n + ((_ - n) / (m - a)) * (o - a));
        },
        h = function () {
          (n = r = e ? 0 : r), (a = o = 0);
        },
        d = function (_) {
          var p = a,
            m = n,
            C = Xr();
          return (
            (_ || _ === 0) && _ !== r && f(_),
            o === a || C - a > u
              ? 0
              : ((r + (e ? m : -m)) / ((e ? C : o) - p)) * 1e3
          );
        };
      return { update: f, reset: h, getVelocity: d };
    },
    Vr = function (t, i) {
      return (
        i && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Ba = function (t) {
      var i = Math.max.apply(Math, t),
        e = Math.min.apply(Math, t);
      return Math.abs(i) >= Math.abs(e) ? i : e;
    },
    Ya = function () {
      (Yr = Bt.core.globals().ScrollTrigger), Yr && Yr.core && nf();
    },
    Xa = function (t) {
      return (
        (Bt = t || Ia()),
        !Cn &&
          Bt &&
          typeof document != "undefined" &&
          document.body &&
          ((be = window),
          (vi = document),
          (yi = vi.documentElement),
          (dr = vi.body),
          (Na = [be, vi, yi, dr]),
          Bt.utils.clamp,
          (Fa = Bt.core.context || function () {}),
          (Yi = "onpointerenter" in dr ? "pointer" : "mouse"),
          (La = wt.isTouch =
            be.matchMedia &&
            be.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in be ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Fe = wt.eventTypes =
            (
              "ontouchstart" in yi
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in yi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Wa = 0);
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
          Yr || Ya();
        var r = e.tolerance,
          n = e.dragMinimum,
          o = e.type,
          a = e.target,
          l = e.lineHeight,
          u = e.debounce,
          f = e.preventDefault,
          h = e.onStop,
          d = e.onStopDelay,
          c = e.ignore,
          _ = e.wheelSpeed,
          p = e.event,
          m = e.onDragStart,
          C = e.onDragEnd,
          w = e.onDrag,
          x = e.onPress,
          y = e.onRelease,
          v = e.onRight,
          S = e.onLeft,
          b = e.onUp,
          k = e.onDown,
          E = e.onChangeX,
          P = e.onChangeY,
          L = e.onChange,
          M = e.onToggleX,
          R = e.onToggleY,
          I = e.onHover,
          B = e.onHoverEnd,
          W = e.onMove,
          A = e.ignoreCheck,
          $ = e.isNormalizer,
          H = e.onGestureStart,
          g = e.onGestureEnd,
          j = e.onWheel,
          lt = e.onEnable,
          Dt = e.onDisable,
          ut = e.onClick,
          Yt = e.scrollSpeed,
          Kt = e.capture,
          Et = e.allowClicks,
          ae = e.lockAxis,
          Zt = e.onLockAxis;
        (this.target = a = pe(a) || yi),
          (this.vars = e),
          c && (c = Bt.utils.toArray(c)),
          (r = r || 1e-9),
          (n = n || 0),
          (_ = _ || 1),
          (Yt = Yt || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(be.getComputedStyle(dr).lineHeight) || 22);
        var Ti,
          le,
          _e,
          tt,
          xt,
          ge,
          ke,
          T = this,
          Ee = 0,
          si = 0,
          Ci = e.passive || (!f && e.passive !== !1),
          mt = xi(a, re),
          oi = xi(a, Mt),
          ki = mt(),
          Zi = oi(),
          Nt =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Fe[0] === "pointerdown",
          Ei = Hr(a),
          bt = a.ownerDocument || vi,
          Ie = [0, 0, 0],
          Ne = [0, 0, 0],
          ai = 0,
          an = function () {
            return (ai = Xr());
          },
          Pt = function (F, et) {
            return (
              ((T.event = F) && c && sf(F.target, c)) ||
              (et && Nt && F.pointerType !== "touch") ||
              (A && A(F, et))
            );
          },
          Zn = function () {
            T._vx.reset(), T._vy.reset(), le.pause(), h && h(T);
          },
          li = function () {
            var F = (T.deltaX = Ba(Ie)),
              et = (T.deltaY = Ba(Ne)),
              O = Math.abs(F) >= r,
              Y = Math.abs(et) >= r;
            L && (O || Y) && L(T, F, et, Ie, Ne),
              O &&
                (v && T.deltaX > 0 && v(T),
                S && T.deltaX < 0 && S(T),
                E && E(T),
                M && T.deltaX < 0 != Ee < 0 && M(T),
                (Ee = T.deltaX),
                (Ie[0] = Ie[1] = Ie[2] = 0)),
              Y &&
                (k && T.deltaY > 0 && k(T),
                b && T.deltaY < 0 && b(T),
                P && P(T),
                R && T.deltaY < 0 != si < 0 && R(T),
                (si = T.deltaY),
                (Ne[0] = Ne[1] = Ne[2] = 0)),
              (tt || _e) &&
                (W && W(T),
                _e && (m && _e === 1 && m(T), w && w(T), (_e = 0)),
                (tt = !1)),
              ge && !(ge = !1) && Zt && Zt(T),
              xt && (j(T), (xt = !1)),
              (Ti = 0);
          },
          Tr = function (F, et, O) {
            (Ie[O] += F),
              (Ne[O] += et),
              T._vx.update(F),
              T._vy.update(et),
              u ? Ti || (Ti = requestAnimationFrame(li)) : li();
          },
          Cr = function (F, et) {
            ae &&
              !ke &&
              ((T.axis = ke = Math.abs(F) > Math.abs(et) ? "x" : "y"),
              (ge = !0)),
              ke !== "y" && ((Ie[2] += F), T._vx.update(F, !0)),
              ke !== "x" && ((Ne[2] += et), T._vy.update(et, !0)),
              u ? Ti || (Ti = requestAnimationFrame(li)) : li();
          },
          Pi = function (F) {
            if (!Pt(F, 1)) {
              F = Vr(F, f);
              var et = F.clientX,
                O = F.clientY,
                Y = et - T.x,
                N = O - T.y,
                X = T.isDragging;
              (T.x = et),
                (T.y = O),
                (X ||
                  ((Y || N) &&
                    (Math.abs(T.startX - et) >= n ||
                      Math.abs(T.startY - O) >= n))) &&
                  ((_e = X ? 2 : 1), X || (T.isDragging = !0), Cr(Y, N));
            }
          },
          Qi = (T.onPress = function (V) {
            Pt(V, 1) ||
              (V && V.button) ||
              ((T.axis = ke = null),
              le.pause(),
              (T.isPressed = !0),
              (V = Vr(V)),
              (Ee = si = 0),
              (T.startX = T.x = V.clientX),
              (T.startY = T.y = V.clientY),
              T._vx.reset(),
              T._vy.reset(),
              ee($ ? a : bt, Fe[1], Pi, Ci, !0),
              (T.deltaX = T.deltaY = 0),
              x && x(T));
          }),
          Z = (T.onRelease = function (V) {
            if (!Pt(V, 1)) {
              ie($ ? a : bt, Fe[1], Pi, !0);
              var F = !isNaN(T.y - T.startY),
                et = T.isDragging,
                O =
                  et &&
                  (Math.abs(T.x - T.startX) > 3 ||
                    Math.abs(T.y - T.startY) > 3),
                Y = Vr(V);
              !O &&
                F &&
                (T._vx.reset(),
                T._vy.reset(),
                f &&
                  Et &&
                  Bt.delayedCall(0.08, function () {
                    if (Xr() - ai > 300 && !V.defaultPrevented) {
                      if (V.target.click) V.target.click();
                      else if (bt.createEvent) {
                        var N = bt.createEvent("MouseEvents");
                        N.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          be,
                          1,
                          Y.screenX,
                          Y.screenY,
                          Y.clientX,
                          Y.clientY,
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
                (T.isDragging = T.isGesturing = T.isPressed = !1),
                h && et && !$ && le.restart(!0),
                _e && li(),
                C && et && C(T),
                y && y(T, O);
            }
          }),
          ji = function (F) {
            return (
              F.touches &&
              F.touches.length > 1 &&
              (T.isGesturing = !0) &&
              H(F, T.isDragging)
            );
          },
          We = function () {
            return (T.isGesturing = !1) || g(T);
          },
          Be = function (F) {
            if (!Pt(F)) {
              var et = mt(),
                O = oi();
              Tr((et - ki) * Yt, (O - Zi) * Yt, 1),
                (ki = et),
                (Zi = O),
                h && le.restart(!0);
            }
          },
          Ye = function (F) {
            if (!Pt(F)) {
              (F = Vr(F, f)), j && (xt = !0);
              var et =
                (F.deltaMode === 1
                  ? l
                  : F.deltaMode === 2
                  ? be.innerHeight
                  : 1) * _;
              Tr(F.deltaX * et, F.deltaY * et, 0), h && !$ && le.restart(!0);
            }
          },
          Ji = function (F) {
            if (!Pt(F)) {
              var et = F.clientX,
                O = F.clientY,
                Y = et - T.x,
                N = O - T.y;
              (T.x = et),
                (T.y = O),
                (tt = !0),
                h && le.restart(!0),
                (Y || N) && Cr(Y, N);
            }
          },
          kr = function (F) {
            (T.event = F), I(T);
          },
          ui = function (F) {
            (T.event = F), B(T);
          },
          ln = function (F) {
            return Pt(F) || (Vr(F, f) && ut(T));
          };
        (le = T._dc = Bt.delayedCall(d || 0.25, Zn).pause()),
          (T.deltaX = T.deltaY = 0),
          (T._vx = Xs(0, 50, !0)),
          (T._vy = Xs(0, 50, !0)),
          (T.scrollX = mt),
          (T.scrollY = oi),
          (T.isDragging = T.isGesturing = T.isPressed = !1),
          Fa(this),
          (T.enable = function (V) {
            return (
              T.isEnabled ||
                (ee(Ei ? bt : a, "scroll", Ys),
                o.indexOf("scroll") >= 0 &&
                  ee(Ei ? bt : a, "scroll", Be, Ci, Kt),
                o.indexOf("wheel") >= 0 && ee(a, "wheel", Ye, Ci, Kt),
                ((o.indexOf("touch") >= 0 && La) ||
                  o.indexOf("pointer") >= 0) &&
                  (ee(a, Fe[0], Qi, Ci, Kt),
                  ee(bt, Fe[2], Z),
                  ee(bt, Fe[3], Z),
                  Et && ee(a, "click", an, !0, !0),
                  ut && ee(a, "click", ln),
                  H && ee(bt, "gesturestart", ji),
                  g && ee(bt, "gestureend", We),
                  I && ee(a, Yi + "enter", kr),
                  B && ee(a, Yi + "leave", ui),
                  W && ee(a, Yi + "move", Ji)),
                (T.isEnabled = !0),
                (T.isDragging = T.isGesturing = T.isPressed = tt = _e = !1),
                T._vx.reset(),
                T._vy.reset(),
                (ki = mt()),
                (Zi = oi()),
                V && V.type && Qi(V),
                lt && lt(T)),
              T
            );
          }),
          (T.disable = function () {
            T.isEnabled &&
              (pr.filter(function (V) {
                return V !== T && Hr(V.target);
              }).length || ie(Ei ? bt : a, "scroll", Ys),
              T.isPressed &&
                (T._vx.reset(), T._vy.reset(), ie($ ? a : bt, Fe[1], Pi, !0)),
              ie(Ei ? bt : a, "scroll", Be, Kt),
              ie(a, "wheel", Ye, Kt),
              ie(a, Fe[0], Qi, Kt),
              ie(bt, Fe[2], Z),
              ie(bt, Fe[3], Z),
              ie(a, "click", an, !0),
              ie(a, "click", ln),
              ie(bt, "gesturestart", ji),
              ie(bt, "gestureend", We),
              ie(a, Yi + "enter", kr),
              ie(a, Yi + "leave", ui),
              ie(a, Yi + "move", Ji),
              (T.isEnabled = T.isPressed = T.isDragging = !1),
              Dt && Dt(T));
          }),
          (T.kill = T.revert =
            function () {
              T.disable();
              var V = pr.indexOf(T);
              V >= 0 && pr.splice(V, 1), ii === T && (ii = 0);
            }),
          pr.push(T),
          $ && Hr(a) && (ii = T),
          T.enable(p);
      }),
      rf(s, [
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
    Ia() && Bt.registerPlugin(wt);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var D,
    _r,
    K,
    at,
    Se,
    it,
    Hs,
    Mn,
    $r,
    qr,
    Ur,
    On,
    qt,
    Dn,
    Vs,
    ne,
    Ha,
    Va,
    gr,
    $a,
    $s,
    qa,
    se,
    qs,
    Ua,
    Ga,
    bi,
    Us,
    Gs,
    mr,
    Ks,
    Rn,
    Zs,
    Qs,
    An = 1,
    Ut = Date.now,
    js = Ut(),
    Ae = 0,
    Gr = 0,
    Ka = function (t, i, e) {
      var r = Te(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (e["_" + i + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
    },
    Za = function (t, i) {
      return i && (!Te(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    of = function s() {
      return Gr && requestAnimationFrame(s);
    },
    Qa = function () {
      return (Dn = 1);
    },
    ja = function () {
      return (Dn = 0);
    },
    Ge = function (t) {
      return t;
    },
    Kr = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Ja = function () {
      return typeof window != "undefined";
    },
    tl = function () {
      return D || (Ja() && (D = window.gsap) && D.registerPlugin && D);
    },
    Xi = function (t) {
      return !!~Hs.indexOf(t);
    },
    el = function (t) {
      return (
        (t === "Height" ? Ks : K["inner" + t]) ||
        Se["client" + t] ||
        it["client" + t]
      );
    },
    il = function (t) {
      return (
        wi(t, "getBoundingClientRect") ||
        (Xi(t)
          ? function () {
              return (qn.width = K.innerWidth), (qn.height = Ks), qn;
            }
          : function () {
              return ri(t);
            })
      );
    },
    af = function (t, i, e) {
      var r = e.d,
        n = e.d2,
        o = e.a;
      return (o = wi(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (i ? el(n) : t["client" + n]) || 0;
          };
    },
    lf = function (t, i) {
      return !i || ~Ue.indexOf(t)
        ? il(t)
        : function () {
            return qn;
          };
    },
    Ke = function (t, i) {
      var e = i.s,
        r = i.d2,
        n = i.d,
        o = i.a;
      return Math.max(
        0,
        (e = "scroll" + r) && (o = wi(t, e))
          ? o() - il(t)()[n]
          : Xi(t)
          ? (Se[e] || it[e]) - el(r)
          : t[e] - t["offset" + r]
      );
    },
    zn = function (t, i) {
      for (var e = 0; e < gr.length; e += 3)
        (!i || ~i.indexOf(gr[e + 1])) && t(gr[e], gr[e + 1], gr[e + 2]);
    },
    Te = function (t) {
      return typeof t == "string";
    },
    Gt = function (t) {
      return typeof t == "function";
    },
    Zr = function (t) {
      return typeof t == "number";
    },
    Hi = function (t) {
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
    rl = "left",
    nl = "top",
    to = "right",
    eo = "bottom",
    Vi = "width",
    $i = "height",
    jr = "Right",
    Jr = "Left",
    tn = "Top",
    en = "Bottom",
    kt = "padding",
    ze = "margin",
    yr = "Width",
    io = "Height",
    Ot = "px",
    Le = function (t) {
      return K.getComputedStyle(t);
    },
    uf = function (t) {
      var i = Le(t).position;
      t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
    },
    sl = function (t, i) {
      for (var e in i) e in t || (t[e] = i[e]);
      return t;
    },
    ri = function (t, i) {
      var e =
          i &&
          Le(t)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          D.to(t, {
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
    ol = function (t) {
      var i = [],
        e = t.labels,
        r = t.duration(),
        n;
      for (n in e) i.push(e[n] / r);
      return i;
    },
    ff = function (t) {
      return function (i) {
        return D.utils.snap(ol(t), i);
      };
    },
    ro = function (t) {
      var i = D.utils.snap(t),
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
    cf = function (t) {
      return function (i, e) {
        return ro(ol(t))(i, e.direction);
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
    In = { toggleActions: "play", anticipatePin: 0 },
    Wn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bn = function (t, i) {
      if (Te(t)) {
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
        f = n.endColor,
        h = n.fontSize,
        d = n.indent,
        c = n.fontWeight,
        _ = at.createElement("div"),
        p = Xi(e) || wi(e, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        C = p ? it : e,
        w = t.indexOf("start") !== -1,
        x = w ? u : f,
        y =
          "border-color:" +
          x +
          ";font-size:" +
          h +
          ";color:" +
          x +
          ";font-weight:" +
          c +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
        (m || l || !p) &&
          (y += (r === Mt ? to : eo) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = w),
        _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
        (_.style.cssText = y),
        (_.innerText = i || i === 0 ? t + "-" + i : t),
        C.children[0] ? C.insertBefore(_, C.children[0]) : C.appendChild(_),
        (_._offset = _["offset" + r.op.d2]),
        Xn(_, 0, r, w),
        _
      );
    },
    Xn = function (t, i, e, r) {
      var n = { display: "block" },
        o = e[r ? "os2" : "p2"],
        a = e[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[e.a + "Percent"] = r ? -100 : 0),
        (n[e.a] = r ? "1px" : 0),
        (n["border" + o + yr] = 1),
        (n["border" + a + yr] = 0),
        (n[e.p] = i + "px"),
        D.set(t, n);
    },
    q = [],
    no = {},
    rn,
    ll = function () {
      return Ut() - Ae > 34 && (rn || (rn = requestAnimationFrame(ni)));
    },
    wr = function () {
      (!se || !se.isPressed || se.startX > it.clientWidth) &&
        (G.cache++,
        se ? rn || (rn = requestAnimationFrame(ni)) : ni(),
        Ae || Ui("scrollStart"),
        (Ae = Ut()));
    },
    so = function () {
      (Ga = K.innerWidth), (Ua = K.innerHeight);
    },
    nn = function (t) {
      G.cache++,
        (t === !0 ||
          (!qt &&
            !qa &&
            !at.fullscreenElement &&
            !at.webkitFullscreenElement &&
            (!qs ||
              Ga !== K.innerWidth ||
              Math.abs(K.innerHeight - Ua) > K.innerHeight * 0.25))) &&
          Mn.restart(!0);
    },
    qi = {},
    hf = [],
    ul = function s() {
      return Lt(U, "scrollEnd", s) || Ki(!0);
    },
    Ui = function (t) {
      return (
        (qi[t] &&
          qi[t].map(function (i) {
            return i();
          })) ||
        hf
      );
    },
    Ce = [],
    fl = function (t) {
      for (var i = 0; i < Ce.length; i += 5)
        (!t || (Ce[i + 4] && Ce[i + 4].query === t)) &&
          ((Ce[i].style.cssText = Ce[i + 1]),
          Ce[i].getBBox && Ce[i].setAttribute("transform", Ce[i + 2] || ""),
          (Ce[i + 3].uncache = 1));
    },
    oo = function (t, i) {
      var e;
      for (ne = 0; ne < q.length; ne++)
        (e = q[ne]),
          e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
      (Rn = !0), i && fl(i), i || Ui("revert");
    },
    cl = function (t, i) {
      G.cache++,
        (i || !oe) &&
          G.forEach(function (e) {
            return Gt(e) && e.cacheID++ && (e.rec = 0);
          }),
        Te(t) && (K.history.scrollRestoration = Gs = t);
    },
    oe,
    Gi = 0,
    hl,
    df = function () {
      if (hl !== Gi) {
        var t = (hl = Gi);
        requestAnimationFrame(function () {
          return t === Gi && Ki(!0);
        });
      }
    },
    dl = function () {
      it.appendChild(mr),
        (Ks = (!se && mr.offsetHeight) || K.innerHeight),
        it.removeChild(mr);
    },
    pl = function (t) {
      return $r(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (i) {
        return (i.style.display = t ? "none" : "block");
      });
    },
    Ki = function (t, i) {
      if (
        ((Se = at.documentElement),
        (it = at.body),
        (Hs = [K, at, Se, it]),
        Ae && !t && !Rn)
      ) {
        zt(U, "scrollEnd", ul);
        return;
      }
      dl(),
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
        q.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Rn = !1),
        q.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = r.pin[n];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
          }
        }),
        (Zs = 1),
        pl(!0),
        q.forEach(function (r) {
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
        cl(Gs, 1),
        Mn.pause(),
        Gi++,
        (oe = 2),
        ni(2),
        q.forEach(function (r) {
          return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (oe = U.isRefreshing = !1),
        Ui("refresh");
    },
    ao = 0,
    Hn = 1,
    sn,
    ni = function (t) {
      if (t === 2 || (!oe && !Rn)) {
        (U.isUpdating = !0), sn && sn.update(0);
        var i = q.length,
          e = Ut(),
          r = e - js >= 50,
          n = i && q[0].scroll();
        if (
          ((Hn = ao > n ? -1 : 1),
          oe || (ao = n),
          r &&
            (Ae && !Dn && e - Ae > 200 && ((Ae = 0), Ui("scrollEnd")),
            (Ur = js),
            (js = e)),
          Hn < 0)
        ) {
          for (ne = i; ne-- > 0; ) q[ne] && q[ne].update(0, r);
          Hn = 1;
        } else for (ne = 0; ne < i; ne++) q[ne] && q[ne].update(0, r);
        U.isUpdating = !1;
      }
      rn = 0;
    },
    lo = [
      rl,
      nl,
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
      $i,
      "boxSizing",
      "max" + yr,
      "max" + io,
      "position",
      ze,
      kt,
      kt + tn,
      kt + jr,
      kt + en,
      kt + Jr,
    ]),
    pf = function (t, i, e) {
      xr(e);
      var r = t._gsap;
      if (r.spacerIsNative) xr(r.spacerState);
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
          (o[$i] = Ln(t, Mt) + Ot),
          (o[kt] = a[ze] = a[nl] = a[rl] = "0"),
          xr(r),
          (a[Vi] = a["max" + yr] = e[Vi]),
          (a[$i] = a["max" + io] = e[$i]),
          (a[kt] = e[kt]),
          t.parentNode !== i &&
            (t.parentNode.insertBefore(i, t), i.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    _f = /([A-Z])/g,
    xr = function (t) {
      if (t) {
        var i = t.t.style,
          e = t.length,
          r = 0,
          n,
          o;
        for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2)
          (o = t[r + 1]),
            (n = t[r]),
            o
              ? (i[n] = o)
              : i[n] && i.removeProperty(n.replace(_f, "-$1").toLowerCase());
      }
    },
    $n = function (t) {
      for (var i = Vn.length, e = t.style, r = [], n = 0; n < i; n++)
        r.push(Vn[n], e[Vn[n]]);
      return (r.t = t), r;
    },
    gf = function (t, i, e) {
      for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
        (a = t[o]), r.push(a, a in i ? i[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    qn = { left: 0, top: 0 },
    _l = function (t, i, e, r, n, o, a, l, u, f, h, d, c, _) {
      Gt(t) && (t = t(l)),
        Te(t) &&
          t.substr(0, 3) === "max" &&
          (t = d + (t.charAt(4) === "=" ? Bn("0" + t.substr(3), e) : 0));
      var p = c ? c.time() : 0,
        m,
        C,
        w;
      if ((c && c.seek(0), isNaN(t) || (t = +t), Zr(t)))
        c &&
          (t = D.utils.mapRange(
            c.scrollTrigger.start,
            c.scrollTrigger.end,
            0,
            d,
            t
          )),
          a && Xn(a, e, r, !0);
      else {
        Gt(i) && (i = i(l));
        var x = (t || "0").split(" "),
          y,
          v,
          S,
          b;
        (w = pe(i, l) || it),
          (y = ri(w) || {}),
          (!y || (!y.left && !y.top)) &&
            Le(w).display === "none" &&
            ((b = w.style.display),
            (w.style.display = "block"),
            (y = ri(w)),
            b ? (w.style.display = b) : w.style.removeProperty("display")),
          (v = Bn(x[0], y[r.d])),
          (S = Bn(x[1] || "0", e)),
          (t = y[r.p] - u[r.p] - f + v + n - S),
          a && Xn(a, S, r, e - S < 20 || (a._isStart && S > 20)),
          (e -= e - S);
      }
      if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
        var k = t + e,
          E = o._isStart;
        (m = "scroll" + r.d2),
          Xn(
            o,
            k,
            r,
            (E && k > 20) ||
              (!E && (h ? Math.max(it[m], Se[m]) : o.parentNode[m]) <= k + 1)
          ),
          h &&
            ((u = ri(a)),
            h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ot));
      }
      return (
        c &&
          w &&
          ((m = ri(w)),
          c.seek(d),
          (C = ri(w)),
          (c._caScrollDist = m[r.p] - C[r.p]),
          (t = (t / c._caScrollDist) * d)),
        c && c.seek(p),
        c ? t : Math.round(t)
      );
    },
    mf = /(webkit|moz|length|cssText|inset)/i,
    gl = function (t, i, e, r) {
      if (t.parentNode !== i) {
        var n = t.style,
          o,
          a;
        if (i === it) {
          (t._stOrig = n.cssText), (a = Le(t));
          for (o in a)
            !+o &&
              !mf.test(o) &&
              a[o] &&
              typeof n[o] == "string" &&
              o !== "0" &&
              (n[o] = a[o]);
          (n.top = e), (n.left = r);
        } else n.cssText = t._stOrig;
        (D.core.getCache(t).uncache = 1), i.appendChild(t);
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
    Un = function (t, i, e) {
      var r = {};
      (r[i.p] = "+=" + e), D.set(t, r);
    },
    vl = function (t, i) {
      var e = xi(t, i),
        r = "_scroll" + i.p2,
        n = function o(a, l, u, f, h) {
          var d = o.tween,
            c = l.onComplete,
            _ = {};
          u = u || e();
          var p = ml(e, u, function () {
            d.kill(), (o.tween = 0);
          });
          return (
            (h = (f && h) || 0),
            (f = f || a - u),
            d && d.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[r] = function () {
              return p(u + f * d.ratio + h * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              G.cache++, o.tween && ni();
            }),
            (l.onComplete = function () {
              (o.tween = 0), c && c.call(d);
            }),
            (d = o.tween = D.to(t, l)),
            d
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
          s.register(D) ||
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
            this.update = this.refresh = this.kill = Ge;
            return;
          }
          e = sl(Te(e) || Zr(e) || e.nodeType ? { trigger: e } : e, In);
          var n = e,
            o = n.onUpdate,
            a = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            f = n.onRefresh,
            h = n.scrub,
            d = n.trigger,
            c = n.pin,
            _ = n.pinSpacing,
            p = n.invalidateOnRefresh,
            m = n.anticipatePin,
            C = n.onScrubComplete,
            w = n.onSnapComplete,
            x = n.once,
            y = n.snap,
            v = n.pinReparent,
            S = n.pinSpacer,
            b = n.containerAnimation,
            k = n.fastScrollEnd,
            E = n.preventOverlaps,
            P =
              e.horizontal || (e.containerAnimation && e.horizontal !== !1)
                ? re
                : Mt,
            L = !h && h !== 0,
            M = pe(e.scroller || K),
            R = D.core.getCache(M),
            I = Xi(M),
            B =
              ("pinType" in e
                ? e.pinType
                : wi(M, "pinType") || (I && "fixed")) === "fixed",
            W = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            A = L && e.toggleActions.split(" "),
            $ = "markers" in e ? e.markers : In.markers,
            H = I ? 0 : parseFloat(Le(M)["border" + P.p2 + yr]) || 0,
            g = this,
            j =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(g);
              },
            lt = af(M, I, P),
            Dt = lf(M, I),
            ut = 0,
            Yt = 0,
            Kt = 0,
            Et = xi(M, P),
            ae,
            Zt,
            Ti,
            le,
            _e,
            tt,
            xt,
            ge,
            ke,
            T,
            Ee,
            si,
            Ci,
            mt,
            oi,
            ki,
            Zi,
            Nt,
            Ei,
            bt,
            Ie,
            Ne,
            ai,
            an,
            Pt,
            Zn,
            li,
            Tr,
            Cr,
            Pi,
            Qi,
            Z,
            ji,
            We,
            Be,
            Ye,
            Ji,
            kr,
            ui;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = P),
            (m *= 45),
            (g.scroller = M),
            (g.scroll = b ? b.time.bind(b) : Et),
            (le = Et()),
            (g.vars = e),
            (r = r || e.animation),
            "refreshPriority" in e &&
              (($a = 1), e.refreshPriority === -9999 && (sn = g)),
            (R.tweenScroll = R.tweenScroll || {
              top: vl(M, Mt),
              left: vl(M, re),
            }),
            (g.tweenTo = ae = R.tweenScroll[P.p]),
            (g.scrubDuration = function (O) {
              (ji = Zr(O) && O),
                ji
                  ? Z
                    ? Z.duration(O)
                    : (Z = D.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: ji,
                        paused: !0,
                        onComplete: function () {
                          return C && C(g);
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
              g.scrubDuration(h),
              (Pi = 0),
              l || (l = r.vars.id)),
            y &&
              ((!Hi(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in it.style &&
                D.set(I ? [it, Se] : M, { scrollBehavior: "auto" }),
              G.forEach(function (O) {
                return (
                  Gt(O) &&
                  O.target === (I ? at.scrollingElement || Se : M) &&
                  (O.smooth = !1)
                );
              }),
              (Ti = Gt(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                ? ff(r)
                : y.snapTo === "labelsDirectional"
                ? cf(r)
                : y.directional !== !1
                ? function (O, Y) {
                    return ro(y.snapTo)(O, Ut() - Yt < 500 ? 0 : Y.direction);
                  }
                : D.utils.snap(y.snapTo)),
              (We = y.duration || { min: 0.1, max: 2 }),
              (We = Hi(We) ? qr(We.min, We.max) : qr(We, We)),
              (Be = D.delayedCall(y.delay || ji / 2 || 0.1, function () {
                var O = Et(),
                  Y = Ut() - Yt < 500,
                  N = ae.tween;
                if (
                  (Y || Math.abs(g.getVelocity()) < 10) &&
                  !N &&
                  !Dn &&
                  ut !== O
                ) {
                  var X = (O - tt) / mt,
                    Ft = r && !L ? r.totalProgress() : X,
                    J = Y ? 0 : ((Ft - Qi) / (Ut() - Ur)) * 1e3 || 0,
                    St = D.utils.clamp(-X, 1 - X, (vr(J / 2) * J) / 0.185),
                    Qt = X + (y.inertia === !1 ? 0 : St),
                    vt,
                    ct,
                    st = y,
                    Xe = st.onStart,
                    pt = st.onInterrupt,
                    Pe = st.onComplete;
                  if (
                    ((vt = Ti(Qt, g)),
                    Zr(vt) || (vt = Qt),
                    (ct = Math.max(0, Math.round(tt + vt * mt))),
                    O <= xt && O >= tt && ct !== O)
                  ) {
                    if (N && !N._initted && N.data <= vr(ct - O)) return;
                    y.inertia === !1 && (St = vt - X),
                      ae(
                        ct,
                        {
                          duration: We(
                            vr(
                              (Math.max(vr(Qt - Ft), vr(vt - Ft)) * 0.185) /
                                J /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: vr(ct - O),
                          onInterrupt: function () {
                            return Be.restart(!0) && pt && pt(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (ut = Et()),
                              r &&
                                !L &&
                                (Z
                                  ? Z.resetTo(
                                      "totalProgress",
                                      vt,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(vt)),
                              (Pi = Qi =
                                r && !L ? r.totalProgress() : g.progress),
                              w && w(g),
                              Pe && Pe(g);
                          },
                        },
                        O,
                        St * mt,
                        ct - O - St * mt
                      ),
                      Xe && Xe(g, ae.tween);
                  }
                } else g.isActive && ut !== O && Be.restart(!0);
              }).pause())),
            l && (no[l] = g),
            (d = g.trigger = pe(d || (c !== !0 && c))),
            (ui = d && d._gsap && d._gsap.stRevert),
            ui && (ui = ui(g)),
            (c = c === !0 ? d : pe(c)),
            Te(a) && (a = { targets: d, className: a }),
            c &&
              (_ === !1 ||
                _ === ze ||
                (_ =
                  !_ &&
                  c.parentNode &&
                  c.parentNode.style &&
                  Le(c.parentNode).display === "flex"
                    ? !1
                    : kt),
              (g.pin = c),
              (Zt = D.core.getCache(c)),
              Zt.spacer
                ? (oi = Zt.pinState)
                : (S &&
                    ((S = pe(S)),
                    S && !S.nodeType && (S = S.current || S.nativeElement),
                    (Zt.spacerIsNative = !!S),
                    S && (Zt.spacerState = $n(S))),
                  (Zt.spacer = Nt = S || at.createElement("div")),
                  Nt.classList.add("pin-spacer"),
                  l && Nt.classList.add("pin-spacer-" + l),
                  (Zt.pinState = oi = $n(c))),
              e.force3D !== !1 && D.set(c, { force3D: !0 }),
              (g.spacer = Nt = Zt.spacer),
              (Cr = Le(c)),
              (an = Cr[_ + P.os2]),
              (bt = D.getProperty(c)),
              (Ie = D.quickSetter(c, P.a, Ot)),
              uo(c, Nt, Cr),
              (Zi = $n(c))),
            $)
          ) {
            (si = Hi($) ? sl($, al) : al),
              (T = Yn("scroller-start", l, M, P, si, 0)),
              (Ee = Yn("scroller-end", l, M, P, si, 0, T)),
              (Ei = T["offset" + P.op.d2]);
            var ln = pe(wi(M, "content") || M);
            (ge = this.markerStart = Yn("start", l, ln, P, si, Ei, 0, b)),
              (ke = this.markerEnd = Yn("end", l, ln, P, si, Ei, 0, b)),
              b && (kr = D.quickSetter([ge, ke], P.a, Ot)),
              !B &&
                !(Ue.length && wi(M, "fixedMarkers") === !0) &&
                (uf(I ? it : M),
                D.set([T, Ee], { force3D: !0 }),
                (Zn = D.quickSetter(T, P.a, Ot)),
                (Tr = D.quickSetter(Ee, P.a, Ot)));
          }
          if (b) {
            var V = b.vars.onUpdate,
              F = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), V && V.apply(b, F || []);
            });
          }
          if (
            ((g.previous = function () {
              return q[q.indexOf(g) - 1];
            }),
            (g.next = function () {
              return q[q.indexOf(g) + 1];
            }),
            (g.revert = function (O, Y) {
              if (!Y) return g.kill(!0);
              var N = O !== !1 || !g.enabled,
                X = qt;
              N !== g.isReverted &&
                (N &&
                  ((Ye = Math.max(Et(), g.scroll.rec || 0)),
                  (Kt = g.progress),
                  (Ji = r && r.progress())),
                ge &&
                  [ge, ke, T, Ee].forEach(function (Ft) {
                    return (Ft.style.display = N ? "none" : "block");
                  }),
                N && ((qt = g), g.update(N)),
                c &&
                  (!v || !g.isActive) &&
                  (N ? pf(c, Nt, oi) : uo(c, Nt, Le(c), Pt)),
                N || g.update(N),
                (qt = X),
                (g.isReverted = N));
            }),
            (g.refresh = function (O, Y, N, X) {
              if (!((qt || !g.enabled) && !Y)) {
                if (c && O && Ae) {
                  zt(s, "scrollEnd", ul);
                  return;
                }
                !oe && j && j(g),
                  (qt = g),
                  ae.tween && !N && (ae.tween.kill(), (ae.tween = 0)),
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
                var Ft = lt(),
                  J = Dt(),
                  St = b ? b.duration() : Ke(M, P),
                  Qt = mt <= 0.01 || !mt,
                  vt = 0,
                  ct = X || 0,
                  st = Hi(N) ? N.end : e.end,
                  Xe = e.endTrigger || d,
                  pt = Hi(N)
                    ? N.start
                    : e.start ||
                      (e.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
                  Pe = (g.pinnedContainer =
                    e.pinnedContainer && pe(e.pinnedContainer, g)),
                  Ze = (d && Math.max(0, q.indexOf(g))) || 0,
                  Xt = Ze,
                  Ht,
                  jt,
                  tr,
                  Qn,
                  Jt,
                  Rt,
                  Qe,
                  vo,
                  Fl,
                  un,
                  je,
                  fn,
                  jn;
                for (
                  $ &&
                  Hi(N) &&
                  ((fn = D.getProperty(T, P.p)), (jn = D.getProperty(Ee, P.p)));
                  Xt-- > 0;

                )
                  (Rt = q[Xt]),
                    Rt.end || Rt.refresh(0, 1) || (qt = g),
                    (Qe = Rt.pin),
                    Qe &&
                      (Qe === d || Qe === c || Qe === Pe) &&
                      !Rt.isReverted &&
                      (un || (un = []), un.unshift(Rt), Rt.revert(!0, !0)),
                    Rt !== q[Xt] && (Ze--, Xt--);
                for (
                  Gt(pt) && (pt = pt(g)),
                    pt = Ka(pt, "start", g),
                    tt =
                      _l(
                        pt,
                        d,
                        Ft,
                        P,
                        Et(),
                        ge,
                        T,
                        g,
                        J,
                        H,
                        B,
                        St,
                        b,
                        g._startClamp && "_startClamp"
                      ) || (c ? -0.001 : 0),
                    Gt(st) && (st = st(g)),
                    Te(st) &&
                      !st.indexOf("+=") &&
                      (~st.indexOf(" ")
                        ? (st = (Te(pt) ? pt.split(" ")[0] : "") + st)
                        : ((vt = Bn(st.substr(2), Ft)),
                          (st = Te(pt)
                            ? pt
                            : (b
                                ? D.utils.mapRange(
                                    0,
                                    b.duration(),
                                    b.scrollTrigger.start,
                                    b.scrollTrigger.end,
                                    tt
                                  )
                                : tt) + vt),
                          (Xe = d))),
                    st = Ka(st, "end", g),
                    xt =
                      Math.max(
                        tt,
                        _l(
                          st || (Xe ? "100% 0" : St),
                          Xe,
                          Ft,
                          P,
                          Et() + vt,
                          ke,
                          Ee,
                          g,
                          J,
                          H,
                          B,
                          St,
                          b,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    vt = 0,
                    Xt = Ze;
                  Xt--;

                )
                  (Rt = q[Xt]),
                    (Qe = Rt.pin),
                    Qe &&
                      Rt.start - Rt._pinPush <= tt &&
                      !b &&
                      Rt.end > 0 &&
                      ((Ht =
                        Rt.end -
                        (g._startClamp ? Math.max(0, Rt.start) : Rt.start)),
                      ((Qe === d && Rt.start - Rt._pinPush < tt) ||
                        Qe === Pe) &&
                        isNaN(pt) &&
                        (vt += Ht * (1 - Rt.progress)),
                      Qe === c && (ct += Ht));
                if (
                  ((tt += vt),
                  (xt += vt),
                  g._startClamp && (g._startClamp += vt),
                  g._endClamp &&
                    !oe &&
                    ((g._endClamp = xt || -0.001),
                    (xt = Math.min(xt, Ke(M, P)))),
                  (mt = xt - tt || ((tt -= 0.01) && 0.001)),
                  Qt &&
                    (Kt = D.utils.clamp(0, 1, D.utils.normalize(tt, xt, Ye))),
                  (g._pinPush = ct),
                  ge &&
                    vt &&
                    ((Ht = {}),
                    (Ht[P.a] = "+=" + vt),
                    Pe && (Ht[P.p] = "-=" + Et()),
                    D.set([ge, ke], Ht)),
                  c && !(Zs && g.end >= Ke(M, P)))
                )
                  (Ht = Le(c)),
                    (Qn = P === Mt),
                    (tr = Et()),
                    (Ne = parseFloat(bt(P.a)) + ct),
                    !St &&
                      xt > 1 &&
                      ((je = (I ? at.scrollingElement || Se : M).style),
                      (je = {
                        style: je,
                        value: je["overflow" + P.a.toUpperCase()],
                      }),
                      I &&
                        Le(it)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                        (je.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    uo(c, Nt, Ht),
                    (Zi = $n(c)),
                    (jt = ri(c, !0)),
                    (vo = B && xi(M, Qn ? re : Mt)()),
                    _
                      ? ((Pt = [_ + P.os2, mt + ct + Ot]),
                        (Pt.t = Nt),
                        (Xt = _ === kt ? Ln(c, P) + mt + ct : 0),
                        Xt &&
                          (Pt.push(P.d, Xt + Ot),
                          Nt.style.flexBasis !== "auto" &&
                            (Nt.style.flexBasis = Xt + Ot)),
                        xr(Pt),
                        Pe &&
                          q.forEach(function (Mi) {
                            Mi.pin === Pe &&
                              Mi.vars.pinSpacing !== !1 &&
                              (Mi._subPinOffset = !0);
                          }),
                        B && Et(Ye))
                      : ((Xt = Ln(c, P)),
                        Xt &&
                          Nt.style.flexBasis !== "auto" &&
                          (Nt.style.flexBasis = Xt + Ot)),
                    B &&
                      ((Jt = {
                        top: jt.top + (Qn ? tr - tt : vo) + Ot,
                        left: jt.left + (Qn ? vo : tr - tt) + Ot,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Jt[Vi] = Jt["max" + yr] = Math.ceil(jt.width) + Ot),
                      (Jt[$i] = Jt["max" + io] = Math.ceil(jt.height) + Ot),
                      (Jt[ze] =
                        Jt[ze + tn] =
                        Jt[ze + jr] =
                        Jt[ze + en] =
                        Jt[ze + Jr] =
                          "0"),
                      (Jt[kt] = Ht[kt]),
                      (Jt[kt + tn] = Ht[kt + tn]),
                      (Jt[kt + jr] = Ht[kt + jr]),
                      (Jt[kt + en] = Ht[kt + en]),
                      (Jt[kt + Jr] = Ht[kt + Jr]),
                      (ki = gf(oi, Jt, v)),
                      oe && Et(0)),
                    r
                      ? ((Fl = r._initted),
                        $s(1),
                        r.render(r.duration(), !0, !0),
                        (ai = bt(P.a) - Ne + mt + ct),
                        (li = Math.abs(mt - ai) > 1),
                        B && li && ki.splice(ki.length - 2, 2),
                        r.render(0, !0, !0),
                        Fl || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        $s(0))
                      : (ai = mt),
                    je &&
                      (je.value
                        ? (je.style["overflow" + P.a.toUpperCase()] = je.value)
                        : je.style.removeProperty("overflow-" + P.a));
                else if (d && Et() && !b)
                  for (jt = d.parentNode; jt && jt !== it; )
                    jt._pinOffset &&
                      ((tt -= jt._pinOffset), (xt -= jt._pinOffset)),
                      (jt = jt.parentNode);
                un &&
                  un.forEach(function (Mi) {
                    return Mi.revert(!1, !0);
                  }),
                  (g.start = tt),
                  (g.end = xt),
                  (le = _e = oe ? Ye : Et()),
                  !b && !oe && (le < Ye && Et(Ye), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (Yt = Ut()),
                  Be && ((ut = -1), Be.restart(!0)),
                  (qt = 0),
                  r &&
                    L &&
                    (r._initted || Ji) &&
                    r.progress() !== Ji &&
                    r.progress(Ji || 0, !0).render(r.time(), !0, !0),
                  (Qt || Kt !== g.progress || b || p || (r && !r._initted)) &&
                    (r &&
                      !L &&
                      (r._initted || Kt || r.vars.immediateRender !== !1) &&
                      r.totalProgress(
                        b && tt < -0.001 && !Kt
                          ? D.utils.normalize(tt, xt, 0)
                          : Kt,
                        !0
                      ),
                    (g.progress = Qt || (le - tt) / mt === Kt ? 0 : Kt)),
                  c && _ && (Nt._pinOffset = Math.round(g.progress * ai)),
                  Z && Z.invalidate(),
                  isNaN(fn) ||
                    ((fn -= D.getProperty(T, P.p)),
                    (jn -= D.getProperty(Ee, P.p)),
                    Un(T, P, fn),
                    Un(ge, P, fn - (X || 0)),
                    Un(Ee, P, jn),
                    Un(ke, P, jn - (X || 0))),
                  Qt && !oe && g.update(),
                  f && !oe && !Ci && ((Ci = !0), f(g), (Ci = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((Et() - _e) / (Ut() - Ur)) * 1e3 || 0;
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
              var Y = q.indexOf(g),
                N = g.direction > 0 ? q.slice(0, Y).reverse() : q.slice(Y + 1);
              return (
                Te(O)
                  ? N.filter(function (X) {
                      return X.vars.preventOverlaps === O;
                    })
                  : N
              ).filter(function (X) {
                return g.direction > 0 ? X.end <= tt : X.start >= xt;
              });
            }),
            (g.update = function (O, Y, N) {
              if (!(b && !N && !O)) {
                var X = oe === !0 ? Ye : g.scroll(),
                  Ft = O ? 0 : (X - tt) / mt,
                  J = Ft < 0 ? 0 : Ft > 1 ? 1 : Ft || 0,
                  St = g.progress,
                  Qt,
                  vt,
                  ct,
                  st,
                  Xe,
                  pt,
                  Pe,
                  Ze;
                if (
                  (Y &&
                    ((_e = le),
                    (le = b ? Et() : X),
                    y && ((Qi = Pi), (Pi = r && !L ? r.totalProgress() : J))),
                  m &&
                    c &&
                    !qt &&
                    !An &&
                    Ae &&
                    (!J && tt < X + ((X - _e) / (Ut() - Ur)) * m
                      ? (J = 1e-4)
                      : J === 1 &&
                        xt > X + ((X - _e) / (Ut() - Ur)) * m &&
                        (J = 0.9999)),
                  J !== St && g.enabled)
                ) {
                  if (
                    ((Qt = g.isActive = !!J && J < 1),
                    (vt = !!St && St < 1),
                    (pt = Qt !== vt),
                    (Xe = pt || !!J != !!St),
                    (g.direction = J > St ? 1 : -1),
                    (g.progress = J),
                    Xe &&
                      !qt &&
                      ((ct = J && !St ? 0 : J === 1 ? 1 : St === 1 ? 2 : 3),
                      L &&
                        ((st =
                          (!pt && A[ct + 1] !== "none" && A[ct + 1]) || A[ct]),
                        (Ze =
                          r &&
                          (st === "complete" || st === "reset" || st in r)))),
                    E &&
                      (pt || Ze) &&
                      (Ze || h || !r) &&
                      (Gt(E)
                        ? E(g)
                        : g.getTrailing(E).forEach(function (tr) {
                            return tr.endAnimation();
                          })),
                    L ||
                      (Z && !qt && !An
                        ? (Z._dp._time - Z._start !== Z._time &&
                            Z.render(Z._dp._time - Z._start),
                          Z.resetTo
                            ? Z.resetTo("totalProgress", J, r._tTime / r._tDur)
                            : ((Z.vars.totalProgress = J),
                              Z.invalidate().restart()))
                        : r && r.totalProgress(J, !!(qt && (Yt || O)))),
                    c)
                  ) {
                    if ((O && _ && (Nt.style[_ + P.os2] = an), !B))
                      Ie(Kr(Ne + ai * J));
                    else if (Xe) {
                      if (
                        ((Pe = !O && J > St && xt + 1 > X && X + 1 >= Ke(M, P)),
                        v)
                      )
                        if (!O && (Qt || Pe)) {
                          var Xt = ri(c, !0),
                            Ht = X - tt;
                          gl(
                            c,
                            it,
                            Xt.top + (P === Mt ? Ht : 0) + Ot,
                            Xt.left + (P === Mt ? 0 : Ht) + Ot
                          );
                        } else gl(c, Nt);
                      xr(Qt || Pe ? ki : Zi),
                        (li && J < 1 && Qt) ||
                          Ie(Ne + (J === 1 && !Pe ? ai : 0));
                    }
                  }
                  y && !ae.tween && !qt && !An && Be.restart(!0),
                    a &&
                      (pt || (x && J && (J < 1 || !Qs))) &&
                      $r(a.targets).forEach(function (tr) {
                        return tr.classList[Qt || x ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !L && !O && o(g),
                    Xe && !qt
                      ? (L &&
                          (Ze &&
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
                          W[ct] && Js(g, W[ct]),
                          x && (J === 1 ? g.kill(!1, 1) : (W[ct] = 0)),
                          pt ||
                            ((ct = J === 1 ? 1 : 3), W[ct] && Js(g, W[ct]))),
                        k &&
                          !Qt &&
                          Math.abs(g.getVelocity()) > (Zr(k) ? k : 2500) &&
                          (Qr(g.callbackAnimation),
                          Z
                            ? Z.progress(1)
                            : Qr(r, st === "reverse" ? 1 : !J, 1)))
                      : L && o && !qt && o(g);
                }
                if (Tr) {
                  var jt = b ? (X / b.duration()) * (b._caScrollDist || 0) : X;
                  Zn(jt + (T._isFlipped ? 1 : 0)), Tr(jt);
                }
                kr && kr((-X / b.duration()) * (b._caScrollDist || 0));
              }
            }),
            (g.enable = function (O, Y) {
              g.enabled ||
                ((g.enabled = !0),
                zt(M, "resize", nn),
                I || zt(M, "scroll", wr),
                j && zt(s, "refreshInit", j),
                O !== !1 && ((g.progress = Kt = 0), (le = _e = ut = Et())),
                Y !== !1 && g.refresh());
            }),
            (g.getTween = function (O) {
              return O && ae ? ae.tween : Z;
            }),
            (g.setPositions = function (O, Y, N, X) {
              if (b) {
                var Ft = b.scrollTrigger,
                  J = b.duration(),
                  St = Ft.end - Ft.start;
                (O = Ft.start + (St * O) / J), (Y = Ft.start + (St * Y) / J);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: Za(O, N && !!g._startClamp),
                  end: Za(Y, N && !!g._endClamp),
                },
                X
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (O) {
              if (Pt && O) {
                var Y = Pt.indexOf(P.d) + 1;
                (Pt[Y] = parseFloat(Pt[Y]) + O + Ot),
                  (Pt[1] = parseFloat(Pt[1]) + O + Ot),
                  xr(Pt);
              }
            }),
            (g.disable = function (O, Y) {
              if (
                g.enabled &&
                (O !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                Y || (Z && Z.pause()),
                (Ye = 0),
                Zt && (Zt.uncache = 1),
                j && Lt(s, "refreshInit", j),
                Be &&
                  (Be.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
                !I)
              ) {
                for (var N = q.length; N--; )
                  if (q[N].scroller === M && q[N] !== g) return;
                Lt(M, "resize", nn), I || Lt(M, "scroll", wr);
              }
            }),
            (g.kill = function (O, Y) {
              g.disable(O, Y), Z && !Y && Z.kill(), l && delete no[l];
              var N = q.indexOf(g);
              N >= 0 && q.splice(N, 1),
                N === ne && Hn > 0 && ne--,
                (N = 0),
                q.forEach(function (X) {
                  return X.scroller === g.scroller && (N = 1);
                }),
                N || oe || (g.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  O && r.revert({ kill: !1 }),
                  Y || r.kill()),
                ge &&
                  [ge, ke, T, Ee].forEach(function (X) {
                    return X.parentNode && X.parentNode.removeChild(X);
                  }),
                sn === g && (sn = 0),
                c &&
                  (Zt && (Zt.uncache = 1),
                  (N = 0),
                  q.forEach(function (X) {
                    return X.pin === c && N++;
                  }),
                  N || (Zt.spacer = 0)),
                e.onKill && e.onKill(g);
            }),
            q.push(g),
            g.enable(!1, !1),
            ui && ui(g),
            r && r.add && !mt)
          ) {
            var et = g.update;
            (g.update = function () {
              (g.update = et), G.cache++, tt || xt || g.refresh();
            }),
              D.delayedCall(0.01, g.update),
              (mt = 0.01),
              (tt = xt = 0);
          } else g.refresh();
          c && df();
        }),
        (s.register = function (e) {
          return (
            _r ||
              ((D = e || tl()),
              Ja() && window.document && s.enable(),
              (_r = Gr)),
            _r
          );
        }),
        (s.defaults = function (e) {
          if (e) for (var r in e) In[r] = e[r];
          return In;
        }),
        (s.disable = function (e, r) {
          (Gr = 0),
            q.forEach(function (o) {
              return o[r ? "kill" : "disable"](e);
            }),
            Lt(K, "wheel", wr),
            Lt(at, "scroll", wr),
            clearInterval(On),
            Lt(at, "touchcancel", Ge),
            Lt(it, "touchstart", Ge),
            Nn(Lt, at, "pointerdown,touchstart,mousedown", Qa),
            Nn(Lt, at, "pointerup,touchend,mouseup", ja),
            Mn.kill(),
            zn(Lt);
          for (var n = 0; n < G.length; n += 3)
            Fn(Lt, G[n], G[n + 1]), Fn(Lt, G[n], G[n + 2]);
        }),
        (s.enable = function () {
          if (
            ((K = window),
            (at = document),
            (Se = at.documentElement),
            (it = at.body),
            D &&
              (($r = D.utils.toArray),
              (qr = D.utils.clamp),
              (Us = D.core.context || Ge),
              ($s = D.core.suppressOverwrites || Ge),
              (Gs = K.history.scrollRestoration || "auto"),
              (ao = K.pageYOffset || 0),
              D.core.globals("ScrollTrigger", s),
              it))
          ) {
            (Gr = 1),
              (mr = document.createElement("div")),
              (mr.style.height = "100vh"),
              (mr.style.position = "absolute"),
              dl(),
              of(),
              wt.register(D),
              (s.isTouch = wt.isTouch),
              (bi =
                wt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (qs = wt.isTouch === 1),
              zt(K, "wheel", wr),
              (Hs = [K, at, Se, it]),
              D.matchMedia
                ? ((s.matchMedia = function (u) {
                    var f = D.matchMedia(),
                      h;
                    for (h in u) f.add(h, u[h]);
                    return f;
                  }),
                  D.addEventListener("matchMediaInit", function () {
                    return oo();
                  }),
                  D.addEventListener("matchMediaRevert", function () {
                    return fl();
                  }),
                  D.addEventListener("matchMedia", function () {
                    Ki(0, 1), Ui("matchMedia");
                  }),
                  D.matchMedia().add("(orientation: portrait)", function () {
                    return so(), so;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              so(),
              zt(at, "scroll", wr);
            var e = it.hasAttribute("style"),
              r = it.style,
              n = r.borderTopStyle,
              o = D.core.Animation.prototype,
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
                a = ri(it),
                Mt.m = Math.round(a.top + Mt.sc()) || 0,
                re.m = Math.round(a.left + re.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                e ||
                  (it.setAttribute("style", ""), it.removeAttribute("style")),
                On = setInterval(ll, 250),
                D.delayedCall(0.5, function () {
                  return (An = 0);
                }),
                zt(at, "touchcancel", Ge),
                zt(it, "touchstart", Ge),
                Nn(zt, at, "pointerdown,touchstart,mousedown", Qa),
                Nn(zt, at, "pointerup,touchend,mouseup", ja),
                Vs = D.utils.checkPrefix("transform"),
                Vn.push(Vs),
                _r = Ut(),
                Mn = D.delayedCall(0.2, Ki).pause(),
                gr = [
                  at,
                  "visibilitychange",
                  function () {
                    var u = K.innerWidth,
                      f = K.innerHeight;
                    at.hidden
                      ? ((Ha = u), (Va = f))
                      : (Ha !== u || Va !== f) && nn();
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
                q.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < G.length;
              l += 3
            )
              Fn(Lt, G[l], G[l + 1]), Fn(Lt, G[l], G[l + 2]);
          }
        }),
        (s.config = function (e) {
          "limitCallbacks" in e && (Qs = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(On)) || ((On = r) && setInterval(ll, r)),
            "ignoreMobileResize" in e &&
              (qs = s.isTouch === 1 && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (zn(Lt) || zn(zt, e.autoRefreshEvents || "none"),
              (qa = (e.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (s.scrollerProxy = function (e, r) {
          var n = pe(e),
            o = G.indexOf(n),
            a = Xi(n);
          ~o && G.splice(o, a ? 6 : 2),
            r && (a ? Ue.unshift(K, r, it, r, Se, r) : Ue.unshift(n, r));
        }),
        (s.clearMatchMedia = function (e) {
          q.forEach(function (r) {
            return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
          });
        }),
        (s.isInViewport = function (e, r, n) {
          var o = (Te(e) ? pe(e) : e).getBoundingClientRect(),
            a = o[n ? Vi : $i] * r || 0;
          return n
            ? o.right - a > 0 && o.left + a < K.innerWidth
            : o.bottom - a > 0 && o.top + a < K.innerHeight;
        }),
        (s.positionInViewport = function (e, r, n) {
          Te(e) && (e = pe(e));
          var o = e.getBoundingClientRect(),
            a = o[n ? Vi : $i],
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
            (q.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            e !== !0)
          ) {
            var r = qi.killAll || [];
            (qi = {}),
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
        ? $r(s).forEach(function (t) {
            if (t && t.style) {
              var i = Ce.indexOf(t);
              i >= 0 && Ce.splice(i, 5),
                Ce.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  D.core.getCache(t),
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
      return ++G.cache && ni(s === !0 ? 2 : 0);
    }),
    (U.clearScrollMemory = cl),
    (U.maxScroll = function (s, t) {
      return Ke(s, t ? re : Mt);
    }),
    (U.getScrollFunc = function (s, t) {
      return xi(pe(s), t ? re : Mt);
    }),
    (U.getById = function (s) {
      return no[s];
    }),
    (U.getAll = function () {
      return q.filter(function (s) {
        return s.vars.id !== "ScrollSmoother";
      });
    }),
    (U.isScrolling = function () {
      return !!Ae;
    }),
    (U.snapDirectional = ro),
    (U.addEventListener = function (s, t) {
      var i = qi[s] || (qi[s] = []);
      ~i.indexOf(t) || i.push(t);
    }),
    (U.removeEventListener = function (s, t) {
      var i = qi[s],
        e = i && i.indexOf(t);
      e >= 0 && i.splice(e, 1);
    }),
    (U.batch = function (s, t) {
      var i = [],
        e = {},
        r = t.interval || 0.016,
        n = t.batchMax || 1e9,
        o = function (u, f) {
          var h = [],
            d = [],
            c = D.delayedCall(r, function () {
              f(h, d), (h = []), (d = []);
            }).pause();
          return function (_) {
            h.length || c.restart(!0),
              h.push(_.trigger),
              d.push(_),
              n <= h.length && c.progress(1);
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
        $r(s).forEach(function (l) {
          var u = {};
          for (a in e) u[a] = e[a];
          (u.trigger = l), i.push(U.create(u));
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
              ? "pan-" + i + (wt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Se && s(it, i);
    },
    Gn = { auto: 1, scroll: 1 },
    vf = function (t) {
      var i = t.event,
        e = t.target,
        r = t.axis,
        n = (i.changedTouches ? i.changedTouches[0] : i).target,
        o = n._gsap || D.core.getCache(n),
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
          !Xi(n) &&
          (Gn[(l = Le(n)).overflowY] || Gn[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    wl = function (t, i, e, r) {
      return wt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: (r = r && vf),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return e && zt(at, wt.eventTypes[0], bl, !1, !0);
        },
        onDisable: function () {
          return Lt(at, wt.eventTypes[0], bl, !0);
        },
      });
    },
    yf = /(input|label|select|textarea)/i,
    xl,
    bl = function (t) {
      var i = yf.test(t.target.tagName);
      (i || xl) && ((t._gsapAllow = !0), (xl = i));
    },
    wf = function (t) {
      Hi(t) || (t = {}),
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
        u = pe(t.target) || Se,
        f = D.core.globals().ScrollSmoother,
        h = f && f.get(),
        d =
          bi &&
          ((t.content && pe(t.content)) ||
            (h && t.content !== !1 && !h.smooth() && h.content())),
        c = xi(u, Mt),
        _ = xi(u, re),
        p = 1,
        m =
          (wt.isTouch && K.visualViewport
            ? K.visualViewport.scale * K.visualViewport.width
            : K.outerWidth) / K.innerWidth,
        C = 0,
        w = Gt(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        x,
        y,
        v = wl(u, t.type, !0, n),
        S = function () {
          return (y = !1);
        },
        b = Ge,
        k = Ge,
        E = function () {
          (l = Ke(u, Mt)),
            (k = qr(bi ? 1 : 0, l)),
            e && (b = qr(0, Ke(u, re))),
            (x = Gi);
        },
        P = function () {
          (d._gsap.y = Kr(parseFloat(d._gsap.y) + c.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (c.offset = c.cacheID = 0);
        },
        L = function () {
          if (y) {
            requestAnimationFrame(S);
            var $ = Kr(a.deltaY / 2),
              H = k(c.v - $);
            if (d && H !== c.v + c.offset) {
              c.offset = H - c.v;
              var g = Kr((parseFloat(d && d._gsap.y) || 0) - c.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (d._gsap.y = g + "px"),
                (c.cacheID = G.cache),
                ni();
            }
            return !0;
          }
          c.offset && P(), (y = !0);
        },
        M,
        R,
        I,
        B,
        W = function () {
          E(),
            M.isActive() &&
              M.vars.scrollY > l &&
              (c() > l ? M.progress(1) && c(l) : M.resetTo("scrollY", l));
        };
      return (
        d && D.set(d, { y: "+=0" }),
        (t.ignoreCheck = function (A) {
          return (
            (bi && A.type === "touchmove" && L()) ||
            (p > 1.05 && A.type !== "touchstart") ||
            a.isGesturing ||
            (A.touches && A.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          y = !1;
          var A = p;
          (p = Kr(((K.visualViewport && K.visualViewport.scale) || 1) / m)),
            M.pause(),
            A !== p && fo(u, p > 1.01 ? !0 : e ? !1 : "x"),
            (R = _()),
            (I = c()),
            E(),
            (x = Gi);
        }),
        (t.onRelease = t.onGestureStart =
          function (A, $) {
            if ((c.offset && P(), !$)) B.restart(!0);
            else {
              G.cache++;
              var H = w(),
                g,
                j;
              e &&
                ((g = _()),
                (j = g + (H * 0.05 * -A.velocityX) / 0.227),
                (H *= yl(_, g, j, Ke(u, re))),
                (M.vars.scrollX = b(j))),
                (g = c()),
                (j = g + (H * 0.05 * -A.velocityY) / 0.227),
                (H *= yl(c, g, j, Ke(u, Mt))),
                (M.vars.scrollY = k(j)),
                M.invalidate().duration(H).play(0.01),
                ((bi && M.vars.scrollY >= l) || g >= l - 1) &&
                  D.to({}, { onUpdate: W, duration: H });
            }
            o && o(A);
          }),
        (t.onWheel = function () {
          M._ts && M.pause(), Ut() - C > 1e3 && ((x = 0), (C = Ut()));
        }),
        (t.onChange = function (A, $, H, g, j) {
          if (
            (Gi !== x && E(),
            $ && e && _(b(g[2] === $ ? R + (A.startX - A.x) : _() + $ - g[1])),
            H)
          ) {
            c.offset && P();
            var lt = j[2] === H,
              Dt = lt ? I + A.startY - A.y : c() + H - j[1],
              ut = k(Dt);
            lt && Dt !== ut && (I += ut - Dt), c(ut);
          }
          (H || $) && ni();
        }),
        (t.onEnable = function () {
          fo(u, e ? !1 : "x"),
            U.addEventListener("refresh", W),
            zt(K, "resize", W),
            c.smooth &&
              ((c.target.style.scrollBehavior = "auto"),
              (c.smooth = _.smooth = !1)),
            v.enable();
        }),
        (t.onDisable = function () {
          fo(u, !0),
            Lt(K, "resize", W),
            U.removeEventListener("refresh", W),
            v.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (a = new wt(t)),
        (a.iOS = bi),
        bi && !c() && c(1),
        bi && D.ticker.add(Ge),
        (B = a._dc),
        (M = D.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: e ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: ml(c, c(), function () {
              return M.pause();
            }),
          },
          onUpdate: ni,
          onComplete: B.vars.onComplete,
        })),
        a
      );
    };
  (U.sort = function (s) {
    if (Gt(s)) return q.sort(s);
    var t = K.pageYOffset || 0;
    return (
      U.getAll().forEach(function (i) {
        return (i._sortY = i.trigger
          ? t + i.trigger.getBoundingClientRect().top
          : i.start + K.innerHeight);
      }),
      q.sort(
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
      var t = s instanceof wt ? s : wf(s);
      return (
        se && se.target === t.target && se.kill(), Xi(t.target) && (se = t), t
      );
    }),
    (U.core = {
      _getVelocityProp: Xs,
      _inputObserver: wl,
      _scrollers: G,
      _proxies: Ue,
      bridge: {
        ss: function () {
          Ae || Ui("scrollStart"), (Ae = Ut());
        },
        ref: function () {
          return qt;
        },
      },
    }),
    tl() && D.registerPlugin(U);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let on,
    br,
    co,
    xf = () => co || go.register(window.gsap),
    Sl = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Kn = (s) =>
      typeof s == "string"
        ? Kn(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    Tl = (s) => Kn(s).filter((t) => t instanceof HTMLElement),
    ho = [],
    po = function () {},
    bf = /\s+/g,
    Cl = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    kl = { left: 0, top: 0, width: 0, height: 0 },
    El = (s, t) => {
      if (t) {
        let i = new Set(s.join("").match(t) || ho),
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
    Pl = (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    Sr = (s, t, i) =>
      t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, i),
    _o = (s, t, i) => {
      let e = t[s + "sClass"] || "",
        { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t,
        a = s === "line" ? "block" : "inline-block",
        l = e.indexOf("++") > -1,
        u = (f) => {
          let h = document.createElement(r),
            d = i.length + 1;
          return (
            e && (h.className = e + (l ? " " + e + d : "")),
            o && h.style.setProperty("--" + s, d + ""),
            n !== "none" && h.setAttribute("aria-hidden", "true"),
            r !== "span" &&
              ((h.style.position = "relative"), (h.style.display = a)),
            (h.textContent = f),
            i.push(h),
            h
          );
        };
      return l && (e = e.replace("++", "")), (u.collection = i), u;
    },
    Sf = (s, t, i, e) => {
      let r = _o("line", i, e),
        n = window.getComputedStyle(s).textAlign || "left";
      return (o, a) => {
        let l = r("");
        for (l.style.textAlign = n, s.insertBefore(l, t[o]); o < a; o++)
          l.appendChild(t[o]);
        l.normalize();
      };
    },
    Ml = (s, t, i, e, r, n, o, a, l, u) => {
      var f;
      let h = Array.from(s.childNodes),
        d = 0,
        { wordDelimiter: c, reduceWhiteSpace: _ = !0, prepareText: p } = t,
        m = s.getBoundingClientRect(),
        C = m,
        w =
          !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
        x = 0,
        y = i.collection,
        v,
        S,
        b,
        k,
        E,
        P,
        L,
        M,
        R,
        I,
        B,
        W,
        A,
        $,
        H,
        g,
        j,
        lt;
      for (
        typeof c == "object"
          ? ((b = c.delimiter || c), (S = c.replaceWith || ""))
          : (S = c === "" ? "" : c || " "),
          v = S !== " ";
        d < h.length;
        d++
      )
        if (((k = h[d]), k.nodeType === 3)) {
          for (
            H = k.textContent || "",
              _
                ? (H = H.replace(bf, " "))
                : w &&
                  (H = H.replace(
                    /\n/g,
                    S +
                      `
`
                  )),
              p && (H = p(H, s)),
              k.textContent = H,
              E = S || b ? H.split(b || S) : H.match(a) || ho,
              j = E[E.length - 1],
              M = v ? j.slice(-1) === " " : !j,
              j || E.pop(),
              C = m,
              L = v ? E[0].charAt(0) === " " : !E[0],
              L && Sr(" ", s, k),
              E[0] || E.shift(),
              El(E, l),
              (n && u) || (k.textContent = ""),
              R = 1;
            R <= E.length;
            R++
          )
            if (
              ((g = E[R - 1]),
              !_ &&
                w &&
                g.charAt(0) ===
                  `
` &&
                ((f = k.previousSibling) == null || f.remove(),
                Sr(document.createElement("br"), s, k),
                (g = g.slice(1))),
              !_ && g === "")
            )
              Sr(S, s, k);
            else if (g === " ") s.insertBefore(document.createTextNode(" "), k);
            else {
              if (
                (v && g.charAt(0) === " " && Sr(" ", s, k),
                x && R === 1 && !L && y.indexOf(x.parentNode) > -1
                  ? ((P = y[y.length - 1]),
                    P.appendChild(document.createTextNode(e ? "" : g)))
                  : ((P = i(e ? "" : g)),
                    Sr(P, s, k),
                    x && R === 1 && !L && P.insertBefore(x, P.firstChild)),
                e)
              )
                for (
                  B = Sl
                    ? El(
                        [...Sl.segment(g)].map((Dt) => Dt.segment),
                        l
                      )
                    : g.match(a) || ho,
                    lt = 0;
                  lt < B.length;
                  lt++
                )
                  P.appendChild(
                    B[lt] === " " ? document.createTextNode(" ") : e(B[lt])
                  );
              if (n && u) {
                if (
                  ((H = k.textContent = H.substring(g.length + 1, H.length)),
                  (I = P.getBoundingClientRect()),
                  I.top > C.top && I.left <= C.left)
                ) {
                  for (W = s.cloneNode(), A = s.childNodes[0]; A && A !== P; )
                    ($ = A), (A = A.nextSibling), W.appendChild($);
                  s.parentNode.insertBefore(W, s), r && Pl(W);
                }
                C = I;
              }
              (R < E.length || M) &&
                Sr(
                  R >= E.length ? " " : v && g.slice(-1) === " " ? " " + S : S,
                  s,
                  k
                );
            }
          s.removeChild(k), (x = 0);
        } else
          k.nodeType === 1 &&
            (o && o.indexOf(k) > -1
              ? (y.indexOf(k.previousSibling) > -1 &&
                  y[y.length - 1].appendChild(k),
                (x = k))
              : (Ml(k, t, i, e, r, n, o, a, l, !0), (x = 0)),
            r && Pl(k));
    };
  const Ol = class Bl {
    constructor(t, i) {
      (this.isSplit = !1),
        xf(),
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
        f = i.indexOf("lines") > -1,
        h = i.indexOf("chars") > -1,
        d = i.indexOf("words") > -1,
        c = h && !d && !f,
        _ =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = _ ? new RegExp(_.source + "|" + Cl.source, "gu") : Cl,
        m = !!t.ignore && Tl(t.ignore),
        { orig: C, animTime: w, obs: x } = this._data,
        y;
      return (
        (h || d || f) &&
          (this.elements.forEach((v, S) => {
            (C[S] = {
              element: v,
              html: v.innerHTML,
              ariaL: v.getAttribute("aria-label"),
              ariaH: v.getAttribute("aria-hidden"),
            }),
              e === "auto"
                ? v.setAttribute("aria-label", (v.textContent || "").trim())
                : e === "hidden" && v.setAttribute("aria-hidden", "true");
            let b = [],
              k = [],
              E = [],
              P = h ? _o("char", t, b) : null,
              L = _o("word", t, k),
              M,
              R,
              I,
              B;
            if ((Ml(v, t, L, P, c, r && (f || c), m, p, _, !1), f)) {
              let W = Kn(v.childNodes),
                A = Sf(v, W, t, E),
                $,
                H = [],
                g = 0,
                j = W.map((Dt) =>
                  Dt.nodeType === 1 ? Dt.getBoundingClientRect() : kl
                ),
                lt = kl;
              for (M = 0; M < W.length; M++)
                ($ = W[M]),
                  $.nodeType === 1 &&
                    ($.nodeName === "BR"
                      ? (H.push($), A(g, M + 1), (g = M + 1), (lt = j[g]))
                      : (M &&
                          j[M].top > lt.top &&
                          j[M].left <= lt.left &&
                          (A(g, M), (g = M)),
                        (lt = j[M])));
              g < M && A(g, M),
                H.forEach((Dt) => {
                  var ut;
                  return (ut = Dt.parentNode) == null
                    ? void 0
                    : ut.removeChild(Dt);
                });
            }
            if (!d) {
              for (M = 0; M < k.length; M++)
                if (
                  ((R = k[M]),
                  h || !R.nextSibling || R.nextSibling.nodeType !== 3)
                )
                  if (n && !f) {
                    for (
                      I = document.createElement("span"),
                        I.style.whiteSpace = "nowrap";
                      R.firstChild;

                    )
                      I.appendChild(R.firstChild);
                    R.replaceWith(I);
                  } else R.replaceWith(...R.childNodes);
                else
                  (B = R.nextSibling),
                    B &&
                      B.nodeType === 3 &&
                      ((B.textContent =
                        (R.textContent || "") + (B.textContent || "")),
                      R.remove());
              (k.length = 0), v.normalize();
            }
            this.lines.push(...E), this.words.push(...k), this.chars.push(...b);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((v) => {
                let S = v.cloneNode();
                return (
                  v.replaceWith(S),
                  S.appendChild(v),
                  v.className &&
                    (S.className = v.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (S.style.overflow = "clip"),
                  S
                );
              })
            )),
        (this.isSplit = !0),
        br &&
          (a
            ? br.addEventListener("loadingdone", this._split)
            : br.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (y = o && o(this)) &&
          y.totalTime &&
          (this._data.anim = w ? y.totalTime(w) : y),
        f &&
          a &&
          this.elements.forEach((v, S) => {
            (C[S].width = v.offsetWidth), x && x.observe(v);
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
      return new Bl(t, i);
    }
    static register(t) {
      (on = on || t || window.gsap),
        on && ((Kn = on.utils.toArray), (po = on.core.context || po)),
        !co && window.innerWidth > 0 && ((br = document.fonts), (co = !0));
    }
  };
  Ol.version = "3.13.0";
  let go = Ol;
  Bi.registerPlugin(U, go);
  const Tf = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((t) => {
        const i = t.getAttribute("data-highlight-scroll-start") || "top 90%",
          e = t.getAttribute("data-highlight-scroll-end") || "center 40%",
          r = parseFloat(t.getAttribute("data-highlight-fade")) || 0.2,
          n = parseFloat(t.getAttribute("data-highlight-stagger")) || 0.1;
        new go(t, {
          type: "words, chars",
          onSplit(o) {
            const a = Bi.context(() => {
              Bi.timeline({
                scrollTrigger: { scrub: !0, trigger: t, start: i, end: e },
              }).from(o.chars, { autoAlpha: r, stagger: n, ease: "linear" });
            });
            t._gsapContext = a;
          },
        });
      });
    },
    Cf = () => {
      Tf();
    },
    Dl = () => {
      Cf();
    },
    Rl = (s) => document.querySelector(s),
    kf = (s) => document.querySelectorAll(s),
    Ef = (s, t) => s.classList.add(t),
    Pf = {
      home: Dl,
      about: () => {
        kf(".team-member").forEach((t) => {
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
    Mf = () => {
      const s = document.body.dataset.route,
        t = Pf[s];
      t ? t() : console.log(`No specific script for route: ${s}`);
    },
    Of = () => {
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
      i.forEach((w) => {
        const x = w.getBoundingClientRect();
        o.set(w, { width: x.width, height: x.height });
      }),
        (() => {
          const w = t[0];
          if (w) {
            const x = w.getAttribute("nav-menu-dropdown"),
              y = document.querySelector(`[nav-menu-item='${x}']`);
            if (y) {
              const v = w.getBoundingClientRect(),
                S = r.getBoundingClientRect(),
                b = o.get(y);
              if (b) {
                const k = S.left + S.width / 2,
                  P = v.left + v.width / 2 - k,
                  L = b.height + 20,
                  M = b.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${P}px`),
                  n.style.setProperty("--siteMenuHeight", `${L}px`),
                  n.style.setProperty("--siteMenuWidth", `${M}px`);
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
        f = null;
      const h = (w) => {
          const x = Array.from(i),
            y = x.indexOf(w);
          x.forEach((v, S) => {
            S < y
              ? v.setAttribute("pos", "left")
              : S === y
              ? v.setAttribute("pos", "active")
              : v.setAttribute("pos", "right"),
              v === w
                ? v.setAttribute("status", "active")
                : v.setAttribute("status", "inactive");
          });
        },
        d = () => {
          i.forEach((w) => {
            w.removeAttribute("pos");
          });
        },
        c = (w, x) => {
          u && (clearTimeout(u), (u = null)), f !== w && ((f = w), m(w, x));
        },
        _ = () => {
          u = setTimeout(() => {
            s.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              d(),
              (f = null),
              (u = null);
          }, 100);
        },
        p = (w, x) => {
          const y = x.bottom;
          return w >= y && w <= y + l;
        },
        m = (w, x) => {
          const y = r.getBoundingClientRect(),
            v = w.getBoundingClientRect(),
            S = o.get(x);
          if (!S) {
            console.warn("No original dimensions found for menu item:", x);
            return;
          }
          const b = y.left + y.width / 2,
            k = v.left + v.width / 2,
            E = S.height + 20,
            P = S.width + 20,
            L = k - b;
          n.style.setProperty("--siteMenuTranslateX", `${L}px`),
            n.style.setProperty("--siteMenuHeight", `${E}px`),
            n.style.setProperty("--siteMenuWidth", `${P}px`),
            n.setAttribute("vis", "visible"),
            s.setAttribute("dropdown-vis", "visible"),
            h(x);
        },
        C = (w) => {
          if (!f) return;
          const x = f.getBoundingClientRect(),
            y = n.getBoundingClientRect(),
            v = w.clientX,
            S = w.clientY,
            b = v >= x.left && v <= x.right && S >= x.top && S <= x.bottom,
            k = v >= y.left && v <= y.right && S >= y.top && S <= y.bottom,
            E =
              p(S, x) &&
              v >= Math.min(x.left, y.left) &&
              v <= Math.max(x.right, y.right);
          b || k || E ? u && (clearTimeout(u), (u = null)) : u || _();
        };
      document.addEventListener("mousemove", C),
        t.forEach((w) => {
          const x = w.getAttribute("nav-menu-dropdown"),
            y = document.querySelector(`[nav-menu-item='${x}']`);
          y
            ? w.addEventListener("mouseenter", () => {
                c(w, y);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${x}`
              );
        }),
        n.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        n.addEventListener("mouseleave", () => {
          _();
        });
    },
    Df = () => {
      Of();
    },
    Rf = () => {
      Df();
    },
    Af = () => {
      const s = Rl(".example-component");
      s &&
        (Ef(s, "is-initialized"),
        s.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    zf = () => {
      Af();
    };
  var Lf = "1.3.4";
  function Al(s, t, i) {
    return Math.max(s, Math.min(t, i));
  }
  function Nf(s, t, i) {
    return (1 - i) * s + i * t;
  }
  function Ff(s, t, i, e) {
    return Nf(s, t, 1 - Math.exp(-i * e));
  }
  function If(s, t) {
    return ((s % t) + t) % t;
  }
  var Wf = class {
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
        const e = Al(0, this.currentTime / this.duration, 1);
        t = e >= 1;
        const r = t ? 1 : this.easing(e);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Ff(this.value, this.to, this.lerp * 60, s)),
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
  function Bf(s, t) {
    let i;
    return function (...e) {
      let r = this;
      clearTimeout(i),
        (i = setTimeout(() => {
          (i = void 0), s.apply(r, e);
        }, t));
    };
  }
  var Yf = class {
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
            ((this.debouncedResize = Bf(this.resize, e)),
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
    Ll = 100 / 6,
    Si = { passive: !1 },
    Xf = class {
      constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        z(this, "touchStart", { x: 0, y: 0 });
        z(this, "lastDelta", { x: 0, y: 0 });
        z(this, "window", { width: 0, height: 0 });
        z(this, "emitter", new zl());
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
          const r = e === 1 ? Ll : e === 2 ? this.window.width : 1,
            n = e === 1 ? Ll : e === 2 ? this.window.height : 1;
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
    Nl = (s) => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
    Hf = class {
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
        infinite: f = !1,
        orientation: h = "vertical",
        gestureOrientation: d = "vertical",
        touchMultiplier: c = 1,
        wheelMultiplier: _ = 1,
        autoResize: p = !0,
        prevent: m,
        virtualScroll: C,
        overscroll: w = !0,
        autoRaf: x = !1,
        anchors: y = !1,
        autoToggle: v = !1,
        allowNestedScroll: S = !1,
        __experimental__naiveDimensions: b = !1,
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
        z(this, "animate", new Wf());
        z(this, "emitter", new zl());
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
          const f = this.options.prevent;
          if (
            u.find((m) => {
              var C, w, x;
              return (
                m instanceof HTMLElement &&
                ((typeof f == "function" && (f == null ? void 0 : f(m))) ||
                  ((C = m.hasAttribute) == null
                    ? void 0
                    : C.call(m, "data-lenis-prevent")) ||
                  (r &&
                    ((w = m.hasAttribute) == null
                      ? void 0
                      : w.call(m, "data-lenis-prevent-touch"))) ||
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
          const c = r && this.options.syncTouch,
            p = r && e.type === "touchend" && Math.abs(d) > 5;
          p && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + d,
              Wl(
                { programmatic: !1 },
                c
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
        (window.lenisVersion = Lf),
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
            infinite: f,
            gestureOrientation: d,
            orientation: h,
            touchMultiplier: c,
            wheelMultiplier: _,
            autoResize: p,
            prevent: m,
            virtualScroll: C,
            overscroll: w,
            autoRaf: x,
            anchors: y,
            autoToggle: v,
            allowNestedScroll: S,
            __experimental__naiveDimensions: b,
          }),
          (this.dimensions = new Yf(s, t, { autoResize: p })),
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
          (this.virtualScroll = new Xf(i, {
            touchMultiplier: c,
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
          programmatic: f = !0,
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
              const c = d.getBoundingClientRect();
              s = (this.isHorizontal ? c.left : c.top) + this.animatedScroll;
            }
          }
          if (typeof s == "number") {
            if (((s += t), (s = Math.round(s)), this.options.infinite)) {
              if (f) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const d = s - this.animatedScroll;
                d > this.limit / 2
                  ? (s = s - this.limit)
                  : d < -this.limit / 2 && (s = s + this.limit);
              }
            } else s = Al(0, s, this.limit);
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
            f || (this.targetScroll = s),
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
                onUpdate: (d, c) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    f && (this.targetScroll = d),
                    c || this.emit(),
                    c &&
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
        var v, S;
        const e = Date.now(),
          r = (v = s._lenis) != null ? v : (s._lenis = {});
        let n, o, a, l, u, f, h, d;
        const c = this.options.gestureOrientation;
        if (e - ((S = r.time) != null ? S : 0) > 2e3) {
          r.time = Date.now();
          const b = window.getComputedStyle(s);
          r.computedStyle = b;
          const k = b.overflowX,
            E = b.overflowY;
          if (
            ((n = ["auto", "overlay", "scroll"].includes(k)),
            (o = ["auto", "overlay", "scroll"].includes(E)),
            (r.hasOverflowX = n),
            (r.hasOverflowY = o),
            (!n && !o) ||
              (c === "vertical" && !o) ||
              (c === "horizontal" && !n))
          )
            return !1;
          (u = s.scrollWidth),
            (f = s.scrollHeight),
            (h = s.clientWidth),
            (d = s.clientHeight),
            (a = u > h),
            (l = f > d),
            (r.isScrollableX = a),
            (r.isScrollableY = l),
            (r.scrollWidth = u),
            (r.scrollHeight = f),
            (r.clientWidth = h),
            (r.clientHeight = d);
        } else
          (a = r.isScrollableX),
            (l = r.isScrollableY),
            (n = r.hasOverflowX),
            (o = r.hasOverflowY),
            (u = r.scrollWidth),
            (f = r.scrollHeight),
            (h = r.clientWidth),
            (d = r.clientHeight);
        if (
          (!n && !o) ||
          (!a && !l) ||
          (c === "vertical" && (!o || !l)) ||
          (c === "horizontal" && (!n || !a))
        )
          return !1;
        let _;
        if (c === "horizontal") _ = "x";
        else if (c === "vertical") _ = "y";
        else {
          const b = t !== 0,
            k = i !== 0;
          b && n && a && (_ = "x"), k && o && l && (_ = "y");
        }
        if (!_) return !1;
        let p, m, C, w, x;
        if (_ === "x")
          (p = s.scrollLeft), (m = u - h), (C = t), (w = n), (x = a);
        else if (_ === "y")
          (p = s.scrollTop), (m = f - d), (C = i), (w = o), (x = l);
        else return !1;
        return (C > 0 ? p < m : p > 0) && w && x;
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
          ? If(this.animatedScroll, this.limit)
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
  Bi.registerPlugin(U);
  let mo;
  const Vf = () => {
      (mo = new Hf({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)),
        autoRaf: !0,
      })),
        mo.on("scroll", U.update),
        Bi.ticker.add((s) => {
          mo.raf(s * 1e3);
        }),
        Bi.ticker.lagSmoothing(0);
    },
    $f = () => {
      Vf();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Rf(), zf(), Mf(), $f();
  });
});
