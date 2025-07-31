var zy = Object.defineProperty;
var Fy = (_t, _i, Ye) =>
  _i in _t
    ? zy(_t, _i, { enumerable: !0, configurable: !0, writable: !0, value: Ye })
    : (_t[_i] = Ye);
var B = (_t, _i, Ye) => Fy(_t, typeof _i != "symbol" ? _i + "" : _i, Ye);
(function () {
  "use strict";
  function _t(r) {
    if (r === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r;
  }
  function _i(r, e) {
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
   */ var Ye = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Hr = { duration: 0.5, overwrite: !1, delay: 0 },
    Oo,
    it,
    xe,
    ii = 1e8,
    ge = 1 / ii,
    Mo = Math.PI * 2,
    df = Mo / 4,
    ff = 0,
    El = Math.sqrt,
    pf = Math.cos,
    hf = Math.sin,
    Ue = function (e) {
      return typeof e == "string";
    },
    Le = function (e) {
      return typeof e == "function";
    },
    Ni = function (e) {
      return typeof e == "number";
    },
    Do = function (e) {
      return typeof e > "u";
    },
    bi = function (e) {
      return typeof e == "object";
    },
    Lt = function (e) {
      return e !== !1;
    },
    Io = function () {
      return typeof window < "u";
    },
    Ss = function (e) {
      return Le(e) || Ue(e);
    },
    Pl =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    at = Array.isArray,
    Ro = /(?:-?\.?\d|\.)+/gi,
    Al = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    No = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    kl = /[+-]=-?[.\d]+/,
    Ll = /[^,'"\[\]\s]+/gi,
    mf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ee,
    Si,
    zo,
    Fo,
    $t = {},
    Ts = {},
    Ol,
    Ml = function (e) {
      return (Ts = Gr(e, $t)) && Dt;
    },
    Bo = function (e, t) {},
    Pn = function (e, t) {
      return !t && void 0;
    },
    Dl = function (e, t) {
      return (e && ($t[e] = t) && Ts && (Ts[e] = t)) || $t;
    },
    An = function () {
      return 0;
    },
    gf = { suppressEvents: !0, isStart: !0, kill: !1 },
    xs = { suppressEvents: !0, kill: !1 },
    vf = { suppressEvents: !0 },
    qo = {},
    Gi = [],
    Vo = {},
    Il,
    Ht = {},
    $o = {},
    Rl = 30,
    Cs = [],
    Ho = "",
    Wo = function (e) {
      var t = e[0],
        i,
        n;
      if ((bi(t) || Le(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (n = Cs.length; n-- && !Cs[n].targetTest(t); );
        i = Cs[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new cu(e[n], i)))) ||
          e.splice(n, 1);
      return e;
    },
    hr = function (e) {
      return e._gsap || Wo(ni(e))[0]._gsap;
    },
    Nl = function (e, t, i) {
      return (i = e[t]) && Le(i)
        ? e[t]()
        : (Do(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Ot = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Ie = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ze = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    jr = function (e, t) {
      var i = t.charAt(0),
        n = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
      );
    },
    yf = function (e, t) {
      for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
      return n < i;
    },
    Es = function () {
      var e = Gi.length,
        t = Gi.slice(0),
        i,
        n;
      for (Vo = {}, Gi.length = 0, i = 0; i < e; i++)
        (n = t[i]),
          n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
    },
    jo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    zl = function (e, t, i, n) {
      Gi.length && !it && Es(),
        e.render(t, i, !!(it && t < 0 && jo(e))),
        Gi.length && !it && Es();
    },
    Fl = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Ll).length < 2
        ? t
        : Ue(e)
        ? e.trim()
        : e;
    },
    Bl = function (e) {
      return e;
    },
    Wt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    wf = function (e) {
      return function (t, i) {
        for (var n in i)
          n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
      };
    },
    Gr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    ql = function r(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = bi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Ps = function (e, t) {
      var i = {},
        n;
      for (n in e) n in t || (i[n] = e[n]);
      return i;
    },
    kn = function (e) {
      var t = e.parent || Ee,
        i = e.keyframes ? wf(at(e.keyframes)) : Wt;
      if (Lt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    _f = function (e, t) {
      for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
      return i < 0;
    },
    Vl = function (e, t, i, n, s) {
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
    As = function (e, t, i, n) {
      i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = s) : e[n] === t && (e[n] = s),
        (t._next = t._prev = t.parent = null);
    },
    Xi = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    mr = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    bf = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Go = function (e, t, i, n) {
      return (
        e._startAt &&
        (it
          ? e._startAt.revert(xs)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, n))
      );
    },
    Sf = function r(e) {
      return !e || (e._ts && r(e.parent));
    },
    $l = function (e) {
      return e._repeat ? Xr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Xr = function (e, t) {
      var i = Math.floor((e = ze(e / t)));
      return e && i === e ? i - 1 : i;
    },
    ks = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Ls = function (e) {
      return (e._end = ze(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || ge) || 0)
      ));
    },
    Os = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = ze(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Ls(e),
          i._dirty || mr(i, e)),
        e
      );
    },
    Hl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = ks(e.rawTime(), t)),
          (!t._dur || On(0, t.totalDuration(), i) - t._tTime > ge) &&
            t.render(i, !0)),
        mr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -ge;
      }
    },
    Ti = function (e, t, i, n) {
      return (
        t.parent && Xi(t),
        (t._start = ze(
          (Ni(i) ? i : i || e !== Ee ? ri(e, i, t) : e._time) + t._delay
        )),
        (t._end = ze(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Vl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Xo(t) || (e._recent = t),
        n || Hl(e, t),
        e._ts < 0 && Os(e, e._tTime),
        e
      );
    },
    Wl = function (e, t) {
      return (
        ($t.ScrollTrigger || Bo("scrollTrigger", t)) &&
        $t.ScrollTrigger.create(t, e)
      );
    },
    jl = function (e, t, i, n, s) {
      if ((ia(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !it &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Il !== Gt.frame
      )
        return Gi.push(e), (e._lazy = [s, n]), 1;
    },
    Tf = function r(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
    },
    Xo = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    xf = function (e, t, i, n) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && Tf(e) && !(!e._initted && Xo(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Xo(e))))
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
          ((l = On(0, e._tDur, t)),
          (c = Xr(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== Xr(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || it || n || e._zTime === ge || (!t && e._zTime))
      ) {
        if (!e._initted && jl(e, t, n, i, l)) return;
        for (
          d = e._zTime,
            e._zTime = t || (i ? ge : 0),
            i || (i = t && !d),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && Go(e, t, i, !0),
          e._onUpdate && !i && jt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && jt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Xi(e, 1),
            !i &&
              !it &&
              (jt(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Cf = function (e, t, i) {
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
    Yr = function (e, t, i, n) {
      var s = e._repeat,
        o = ze(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !n && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : ze(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !n && Os(e, (e._tTime = e._tDur * a)),
        e.parent && Ls(e),
        i || mr(e.parent, e),
        e
      );
    },
    Gl = function (e) {
      return e instanceof bt ? mr(e) : Yr(e, e._dur);
    },
    Ef = { _start: 0, endTime: An, totalDuration: An },
    ri = function r(e, t, i) {
      var n = e.labels,
        s = e._recent || Ef,
        o = e.duration() >= ii ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return Ue(t) && (isNaN(t) || t in n)
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
              u && i && (l = (l / 100) * (at(i) ? i[0] : i).totalDuration()),
              a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    Ln = function (e, t, i) {
      var n = Ni(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = Lt(l.vars.inherit) && l.parent);
        (o.immediateRender = Lt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Fe(t[0], o, t[s + 1]);
    },
    Yi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    On = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    lt = function (e, t) {
      return !Ue(e) || !(t = mf.exec(e)) ? "" : t[1];
    },
    Pf = function (e, t, i) {
      return Yi(i, function (n) {
        return On(e, t, n);
      });
    },
    Yo = [].slice,
    Xl = function (e, t) {
      return (
        e &&
        bi(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && bi(e[0]))) &&
        !e.nodeType &&
        e !== Si
      );
    },
    Af = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (n) {
          var s;
          return (Ue(n) && !t) || Xl(n, 1)
            ? (s = i).push.apply(s, ni(n))
            : i.push(n);
        }) || i
      );
    },
    ni = function (e, t, i) {
      return xe && !t && xe.selector
        ? xe.selector(e)
        : Ue(e) && !i && (zo || !Kr())
        ? Yo.call((t || Fo).querySelectorAll(e), 0)
        : at(e)
        ? Af(e, i)
        : Xl(e)
        ? Yo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Uo = function (e) {
      return (
        (e = ni(e)[0] || Pn("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ni(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? Pn("Invalid scope") || Fo.createElement("div")
              : e
          );
        }
      );
    },
    Yl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Ul = function (e) {
      if (Le(e)) return e;
      var t = bi(e) ? e : { each: e },
        i = gr(t.ease),
        n = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = n > 0 && n < 1,
        l = isNaN(n) || a,
        u = t.axis,
        c = n,
        d = n;
      return (
        Ue(n)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !a && l && ((c = n[0]), (d = n[1])),
        function (p, f, h) {
          var m = (h || t).length,
            w = o[m],
            S,
            _,
            T,
            g,
            x,
            E,
            P,
            k,
            I;
          if (!w) {
            if (((I = t.grid === "auto" ? 0 : (t.grid || [1, ii])[1]), !I)) {
              for (
                P = -ii;
                P < (P = h[I++].getBoundingClientRect().left) && I < m;

              );
              I < m && I--;
            }
            for (
              w = o[m] = [],
                S = l ? Math.min(I, m) * c - 0.5 : n % I,
                _ = I === ii ? 0 : l ? (m * d) / I - 0.5 : (n / I) | 0,
                P = 0,
                k = ii,
                E = 0;
              E < m;
              E++
            )
              (T = (E % I) - S),
                (g = _ - ((E / I) | 0)),
                (w[E] = x =
                  u ? Math.abs(u === "y" ? g : T) : El(T * T + g * g)),
                x > P && (P = x),
                x < k && (k = x);
            n === "random" && Yl(w),
              (w.max = P - k),
              (w.min = k),
              (w.v = m =
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
              (w.b = m < 0 ? s - m : s),
              (w.u = lt(t.amount || t.each) || 0),
              (i = i && m < 0 ? au(i) : i);
          }
          return (
            (m = (w[p] - w.min) / w.max || 0),
            ze(w.b + (i ? i(m) : m) * w.v) + w.u
          );
        }
      );
    },
    Ko = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var n = ze(Math.round(parseFloat(i) / e) * e * t);
        return (n - (n % 1)) / t + (Ni(i) ? 0 : lt(i));
      };
    },
    Kl = function (e, t) {
      var i = at(e),
        n,
        s;
      return (
        !i &&
          bi(e) &&
          ((n = i = e.radius || ii),
          e.values
            ? ((e = ni(e.values)), (s = !Ni(e[0])) && (n *= n))
            : (e = Ko(e.increment))),
        Yi(
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
                      u = ii,
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
                    s || c === o || Ni(o) ? c : c + lt(o)
                  );
                }
            : Ko(e)
        )
      );
    },
    Ql = function (e, t, i, n) {
      return Yi(at(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
        return at(e)
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
    kf = function () {
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
        return e(parseFloat(i)) + (t || lt(i));
      };
    },
    Of = function (e, t, i) {
      return Jl(e, t, 0, 1, i);
    },
    Zl = function (e, t, i) {
      return Yi(i, function (n) {
        return e[~~t(n)];
      });
    },
    Mf = function r(e, t, i) {
      var n = t - e;
      return at(e)
        ? Zl(e, r(0, e.length), t)
        : Yi(i, function (s) {
            return ((n + ((s - e) % n)) % n) + e;
          });
    },
    Df = function r(e, t, i) {
      var n = t - e,
        s = n * 2;
      return at(e)
        ? Zl(e, r(0, e.length - 1), t)
        : Yi(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
          });
    },
    Mn = function (e) {
      for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
        (o = e.indexOf(")", n)),
          (a = e.charAt(n + 7) === "["),
          (s = e.substr(n + 7, o - n - 7).match(a ? Ll : Ro)),
          (i +=
            e.substr(t, n - t) +
            Ql(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    Jl = function (e, t, i, n, s) {
      var o = t - e,
        a = n - i;
      return Yi(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    If = function r(e, t, i, n) {
      var s = isNaN(e + t)
        ? 0
        : function (f) {
            return (1 - f) * e + f * t;
          };
      if (!s) {
        var o = Ue(e),
          a = {},
          l,
          u,
          c,
          d,
          p;
        if ((i === !0 && (n = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (at(e) && !at(t)) {
          for (c = [], d = e.length, p = d - 2, u = 1; u < d; u++)
            c.push(r(e[u - 1], e[u]));
          d--,
            (s = function (h) {
              h *= d;
              var m = Math.min(p, ~~h);
              return c[m](h - m);
            }),
            (i = t);
        } else n || (e = Gr(at(e) ? [] : {}, e));
        if (!c) {
          for (l in t) ea.call(a, e, l, "get", t[l]);
          s = function (h) {
            return sa(h, a) || (o ? e.p : e);
          };
        }
      }
      return Yi(i, s);
    },
    eu = function (e, t, i) {
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
        o = xe,
        a = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = n[t + "Params"]),
          (u = n.callbackScope || e),
          i && Gi.length && Es(),
          a && (xe = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (xe = o),
          c
        );
    },
    Dn = function (e) {
      return (
        Xi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!it),
        e.progress() < 1 && jt(e, "onInterrupt"),
        e
      );
    },
    Ur,
    tu = [],
    iu = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Io() || e.headless)) {
          var t = e.name,
            i = Le(e),
            n =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: An,
              render: sa,
              add: ea,
              kill: Kf,
              modifier: Uf,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: na,
              aliases: {},
              register: 0,
            };
          if ((Kr(), e !== n)) {
            if (Ht[t]) return;
            Wt(n, Wt(Ps(e, s), o)),
              Gr(n.prototype, Gr(s, Ps(e, o))),
              (Ht[(n.prop = t)] = n),
              e.targetTest && (Cs.push(n), (qo[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Dl(t, n), e.register && e.register(Dt, n, Mt);
        } else tu.push(e);
    },
    ve = 255,
    In = {
      aqua: [0, ve, ve],
      lime: [0, ve, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ve],
      navy: [0, 0, 128],
      white: [ve, ve, ve],
      olive: [128, 128, 0],
      yellow: [ve, ve, 0],
      orange: [ve, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ve, 0, 0],
      pink: [ve, 192, 203],
      cyan: [0, ve, ve],
      transparent: [ve, ve, ve, 0],
    },
    Qo = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          ve +
          0.5) |
          0
      );
    },
    ru = function (e, t, i) {
      var n = e ? (Ni(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : In.black,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        h;
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
              [n >> 16, (n >> 8) & ve, n & ve, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (n = [e >> 16, (e >> 8) & ve, e & ve]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((n = h = e.match(Ro)), !t))
            (l = (+n[0] % 360) / 360),
              (u = +n[1] / 100),
              (c = +n[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              n.length > 3 && (n[3] *= 1),
              (n[0] = Qo(l + 1 / 3, s, o)),
              (n[1] = Qo(l, s, o)),
              (n[2] = Qo(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (n = e.match(Al)), i && n.length < 4 && (n[3] = 1), n;
        } else n = e.match(Ro) || In.transparent;
        n = n.map(Number);
      }
      return (
        t &&
          !h &&
          ((s = n[0] / ve),
          (o = n[1] / ve),
          (a = n[2] / ve),
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
    nu = function (e) {
      var t = [],
        i = [],
        n = -1;
      return (
        e.split(Ui).forEach(function (s) {
          var o = s.match(Wr) || [];
          t.push.apply(t, o), i.push((n += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    su = function (e, t, i) {
      var n = "",
        s = (e + n).match(Ui),
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
            (p = ru(p, t, 1)) &&
            o +
              (t
                ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3]
                : p.join(",")) +
              ")"
          );
        })),
        i && ((c = nu(e)), (l = i.c), l.join(n) !== c.c.join(n)))
      )
        for (u = e.replace(Ui, "1").split(Wr), d = u.length - 1; a < d; a++)
          n +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(Ui), d = u.length - 1; a < d; a++) n += u[a] + s[a];
      return n + u[d];
    },
    Ui = (function () {
      var r =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in In) r += "|" + e + "\\b";
      return new RegExp(r + ")", "gi");
    })(),
    Rf = /hsl[a]?\(/,
    ou = function (e) {
      var t = e.join(" "),
        i;
      if (((Ui.lastIndex = 0), Ui.test(t)))
        return (
          (i = Rf.test(t)),
          (e[1] = su(e[1], i)),
          (e[0] = su(e[0], i, nu(e[1]))),
          !0
        );
    },
    Rn,
    Gt = (function () {
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
        h = function m(w) {
          var S = r() - n,
            _ = w === !0,
            T,
            g,
            x,
            E;
          if (
            ((S > e || S < 0) && (i += S - t),
            (n += S),
            (x = n - i),
            (T = x - o),
            (T > 0 || _) &&
              ((E = ++d.frame),
              (p = x - d.time * 1e3),
              (d.time = x = x / 1e3),
              (o += T + (T >= s ? 4 : s - T)),
              (g = 1)),
            _ || (l = u(m)),
            g)
          )
            for (f = 0; f < a.length; f++) a[f](x, p, E, w);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            h(!0);
          },
          deltaRatio: function (w) {
            return p / (1e3 / (w || 60));
          },
          wake: function () {
            Ol &&
              (!zo &&
                Io() &&
                ((Si = zo = window),
                (Fo = Si.document || {}),
                ($t.gsap = Dt),
                (Si.gsapVersions || (Si.gsapVersions = [])).push(Dt.version),
                Ml(Ts || Si.GreenSockGlobals || (!Si.gsap && Si) || {}),
                tu.forEach(iu)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (w) {
                  return setTimeout(w, (o - d.time * 1e3 + 1) | 0);
                }),
              (Rn = 1),
              h(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (Rn = 0), (u = An);
          },
          lagSmoothing: function (w, S) {
            (e = w || 1 / 0), (t = Math.min(S || 33, e));
          },
          fps: function (w) {
            (s = 1e3 / (w || 240)), (o = d.time * 1e3 + s);
          },
          add: function (w, S, _) {
            var T = S
              ? function (g, x, E, P) {
                  w(g, x, E, P), d.remove(T);
                }
              : w;
            return d.remove(w), a[_ ? "unshift" : "push"](T), Kr(), T;
          },
          remove: function (w, S) {
            ~(S = a.indexOf(w)) && a.splice(S, 1) && f >= S && f--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    Kr = function () {
      return !Rn && Gt.wake();
    },
    rt = {},
    Nf = /^[\d.\-M][\d.\-,\s]/,
    zf = /["']/g,
    Ff = function (e) {
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
          (t[n] = isNaN(u) ? u.replace(zf, "").trim() : +u),
          (n = l.substr(a + 1).trim());
      return t;
    },
    Bf = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        n = e.indexOf("(", t);
      return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
    },
    qf = function (e) {
      var t = (e + "").split("("),
        i = rt[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Ff(t[1])] : Bf(e).split(",").map(Fl)
          )
        : rt._CE && Nf.test(e)
        ? rt._CE("", e)
        : i;
    },
    au = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    lu = function r(e, t) {
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
    gr = function (e, t) {
      return (e && (Le(e) ? e : rt[e] || qf(e))) || t;
    },
    vr = function (e, t, i, n) {
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
          (rt[a] = $t[a] = s), (rt[(o = a.toLowerCase())] = i);
          for (var l in s)
            rt[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = rt[a + "." + l] = s[l];
        }),
        s
      );
    },
    uu = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Zo = function r(e, t, i) {
      var n = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / Mo) * (Math.asin(1 / n) || 0),
        a = function (c) {
          return c === 1 ? 1 : n * Math.pow(2, -10 * c) * hf((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : uu(a);
      return (
        (s = Mo / s),
        (l.config = function (u, c) {
          return r(e, u, c);
        }),
        l
      );
    },
    Jo = function r(e, t) {
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
            : uu(i);
      return (
        (n.config = function (s) {
          return r(e, s);
        }),
        n
      );
    };
  Ot("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
    var t = e < 5 ? e + 1 : e;
    vr(
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
    (rt.Linear.easeNone = rt.none = rt.Linear.easeIn),
    vr("Elastic", Zo("in"), Zo("out"), Zo()),
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
      vr(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    vr("Expo", function (r) {
      return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
    }),
    vr("Circ", function (r) {
      return -(El(1 - r * r) - 1);
    }),
    vr("Sine", function (r) {
      return r === 1 ? 1 : -pf(r * df) + 1;
    }),
    vr("Back", Jo("in"), Jo("out"), Jo()),
    (rt.SteppedEase =
      rt.steps =
      $t.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              n = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - ge;
            return function (a) {
              return (((n * On(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Hr.ease = rt["quad.out"]),
    Ot(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (r) {
        return (Ho += r + "," + r + "Params,");
      }
    );
  var cu = function (e, t) {
      (this.id = ff++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Nl),
        (this.set = t ? t.getSetter : na);
    },
    Nn = (function () {
      function r(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Yr(this, +t.duration, 1, 1),
          (this.data = t.data),
          xe && ((this._ctx = xe), xe.data.push(this)),
          Rn || Gt.wake();
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
              Yr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, n) {
          if ((Kr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Os(this, i), !s._dp || s.parent || Hl(s, this);
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
              Ti(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !n) ||
              (this._initted && Math.abs(this._zTime) === ge) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), zl(this, i, n)),
            this
          );
        }),
        (e.time = function (i, n) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + $l(this)) %
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
                  $l(this),
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
            ? Xr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, n) {
          if (!arguments.length) return this._rts === -ge ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? ks(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -ge ? 0 : this._rts),
            this.totalTime(
              On(-Math.abs(this._delay), this.totalDuration(), s),
              n !== !1
            ),
            Ls(this),
            bf(this)
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
                  : (Kr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== ge &&
                        (this._tTime -= ge)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var n = this.parent || this._dp;
            return (
              n && (n._sort || !this.parent) && Ti(n, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (Lt(i) ? this.totalDuration() : this.duration()) /
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
              ? ks(n.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = vf);
          var n = it;
          return (
            (it = i),
            jo(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (it = n),
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Gl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var n = this._time;
            return (this._rDelay = i), Gl(this), n ? this.time(n) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, n) {
          return this.totalTime(ri(this, i), Lt(n));
        }),
        (e.restart = function (i, n) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Lt(n)),
            this._dur || (this._zTime = -ge),
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
                this.timeScale(-this._rts || (i ? -ge : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -ge), this;
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
              s < this.endTime(!0) - ge)
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
            var o = Le(i) ? i : Bl,
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
  Wt(Nn.prototype, {
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
    _zTime: -ge,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var bt = (function (r) {
    _i(e, r);
    function e(i, n) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = r.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = Lt(i.sortChildren)),
        Ee && Ti(i.parent || Ee, _t(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && Wl(_t(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (n, s, o) {
        return Ln(0, arguments, this), this;
      }),
      (t.from = function (n, s, o) {
        return Ln(1, arguments, this), this;
      }),
      (t.fromTo = function (n, s, o, a) {
        return Ln(2, arguments, this), this;
      }),
      (t.set = function (n, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          kn(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Fe(n, s, ri(this, o), 1),
          this
        );
      }),
      (t.call = function (n, s, o) {
        return Ti(this, Fe.delayedCall(0, n, s), o);
      }),
      (t.staggerTo = function (n, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Fe(n, o, ri(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (n, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (kn(o).immediateRender = Lt(o.immediateRender)),
          this.staggerTo(n, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (kn(a).immediateRender = Lt(a.immediateRender)),
          this.staggerTo(n, s, a, l, u, c, d)
        );
      }),
      (t.render = function (n, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = n <= 0 ? 0 : ze(n),
          d = this._zTime < 0 != n < 0 && (this._initted || !u),
          p,
          f,
          h,
          m,
          w,
          S,
          _,
          T,
          g,
          x,
          E,
          P;
        if (
          (this !== Ee && c > l && n >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (n += this._time - a)),
            (p = c),
            (g = this._start),
            (T = this._ts),
            (S = !T),
            d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
            this._repeat)
          ) {
            if (
              ((E = this._yoyo),
              (w = u + this._rDelay),
              this._repeat < -1 && n < 0)
            )
              return this.totalTime(w * 100 + n, s, o);
            if (
              ((p = ze(c % w)),
              c === l
                ? ((m = this._repeat), (p = u))
                : ((x = ze(c / w)),
                  (m = ~~x),
                  m && m === x && ((p = u), m--),
                  p > u && (p = u)),
              (x = Xr(this._tTime, w)),
              !a &&
                this._tTime &&
                x !== m &&
                this._tTime - x * w - this._dur <= 0 &&
                (x = m),
              E && m & 1 && ((p = u - p), (P = 1)),
              m !== x && !this._lock)
            ) {
              var k = E && x & 1,
                I = k === (E && m & 1);
              if (
                (m < x && (k = !k),
                (a = k ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (P ? 0 : ze(m * w)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && jt(this, "onRepeat"),
                this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  S !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                I &&
                  ((this._lock = 2),
                  (a = k ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !P && this.invalidate()),
                (this._lock = 0),
                !this._ts && !S)
              )
                return this;
              lu(this, P);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((_ = Cf(this, ze(a), ze(p))), _ && (c -= p - (p = _._start))),
            (this._tTime = c),
            (this._time = p),
            (this._act = !T),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = n),
              (a = 0)),
            !a && c && !s && !x && (jt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (p >= a && n >= 0)
            for (f = this._first; f; ) {
              if (
                ((h = f._next), (f._act || p >= f._start) && f._ts && _ !== f)
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
                  p !== this._time || (!this._ts && !S))
                ) {
                  (_ = 0), h && (c += this._zTime = -ge);
                  break;
                }
              }
              f = h;
            }
          else {
            f = this._last;
            for (var D = n < 0 ? n : p; f; ) {
              if (
                ((h = f._prev), (f._act || D <= f._end) && f._ts && _ !== f)
              ) {
                if (f.parent !== this) return this.render(n, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (D - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (D - f._start) * f._ts,
                    s,
                    o || (it && jo(f))
                  ),
                  p !== this._time || (!this._ts && !S))
                ) {
                  (_ = 0), h && (c += this._zTime = D ? -ge : ge);
                  break;
                }
              }
              f = h;
            }
          }
          if (
            _ &&
            !s &&
            (this.pause(),
            (_.render(p >= a ? 0 : -ge)._zTime = p >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = g), Ls(this), this.render(n, s, o);
          this._onUpdate && !s && jt(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (g === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((n || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Xi(this, 1),
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
        if ((Ni(s) || (s = ri(this, s, n)), !(n instanceof Nn))) {
          if (at(n))
            return (
              n.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ue(n)) return this.addLabel(n, s);
          if (Le(n)) n = Fe.delayedCall(0, n);
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
            (u instanceof Fe
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
        return Ue(n)
          ? this.removeLabel(n)
          : Le(n)
          ? this.killTweensOf(n)
          : (n.parent === this && As(this, n),
            n === this._recent && (this._recent = this._last),
            mr(this));
      }),
      (t.totalTime = function (n, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ze(
                Gt.time -
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
        return (this.labels[n] = ri(this, s)), this;
      }),
      (t.removeLabel = function (n) {
        return delete this.labels[n], this;
      }),
      (t.addPause = function (n, s, o) {
        var a = Fe.delayedCall(0, s || An, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), Ti(this, a, ri(this, n))
        );
      }),
      (t.removePause = function (n) {
        var s = this._first;
        for (n = ri(this, n); s; )
          s._start === n && s.data === "isPause" && Xi(s), (s = s._next);
      }),
      (t.killTweensOf = function (n, s, o) {
        for (var a = this.getTweensOf(n, o), l = a.length; l--; )
          Ki !== a[l] && a[l].kill(n, s);
        return this;
      }),
      (t.getTweensOf = function (n, s) {
        for (var o = [], a = ni(n), l = this._first, u = Ni(s), c; l; )
          l instanceof Fe
            ? yf(l._targets, a) &&
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
          a = ri(o, n),
          l = s,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          p = l.immediateRender,
          f,
          h = Fe.to(
            o,
            Wt(
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
                  ge,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var w =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    h._dur !== w && Yr(h, w, 0, 1).render(h._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(h, d || []);
                },
              },
              s
            )
          );
        return p ? h.render(0) : h;
      }),
      (t.tweenFromTo = function (n, s, o) {
        return this.tweenTo(s, Wt({ startAt: { time: ri(this, n) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (n) {
        return n === void 0 && (n = this._time), eu(this, ri(this, n));
      }),
      (t.previousLabel = function (n) {
        return n === void 0 && (n = this._time), eu(this, ri(this, n), 1);
      }),
      (t.currentLabel = function (n) {
        return arguments.length
          ? this.seek(n, !0)
          : this.previousLabel(this._time + ge);
      }),
      (t.shiftChildren = function (n, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += n), (a._end += n)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += n);
        return mr(this);
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
          mr(this)
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
          Yr(o, o === Ee && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (n) {
        if ((Ee._ts && (zl(Ee, ks(n, Ee)), (Il = Gt.frame)), Gt.frame >= Rl)) {
          Rl += Ye.autoSleep || 120;
          var s = Ee._first;
          if ((!s || !s._ts) && Ye.autoSleep && Gt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Gt.sleep();
          }
        }
      }),
      e
    );
  })(Nn);
  Wt(bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Vf = function (e, t, i, n, s, o, a) {
      var l = new Mt(this._pt, e, t, 0, 1, gu, null, s),
        u = 0,
        c = 0,
        d,
        p,
        f,
        h,
        m,
        w,
        S,
        _;
      for (
        l.b = i,
          l.e = n,
          i += "",
          n += "",
          (S = ~n.indexOf("random(")) && (n = Mn(n)),
          o && ((_ = [i, n]), o(_, e, t), (i = _[0]), (n = _[1])),
          p = i.match(No) || [];
        (d = No.exec(n));

      )
        (h = d[0]),
          (m = n.substring(u, d.index)),
          f ? (f = (f + 1) % 5) : m.substr(-5) === "rgba(" && (f = 1),
          h !== p[c++] &&
            ((w = parseFloat(p[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: m || c === 1 ? m : ",",
              s: w,
              c: h.charAt(1) === "=" ? jr(w, h) - w : parseFloat(h) - w,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = No.lastIndex));
      return (
        (l.c = u < n.length ? n.substring(u, n.length) : ""),
        (l.fp = a),
        (kl.test(n) || S) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    ea = function (e, t, i, n, s, o, a, l, u, c) {
      Le(n) && (n = n(s || 0, e, o));
      var d = e[t],
        p =
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
        f = Le(d) ? (u ? Gf : hu) : ra,
        h;
      if (
        (Ue(n) &&
          (~n.indexOf("random(") && (n = Mn(n)),
          n.charAt(1) === "=" &&
            ((h = jr(p, n) + (lt(p) || 0)), (h || h === 0) && (n = h))),
        !c || p !== n || ta)
      )
        return !isNaN(p * n) && n !== ""
          ? ((h = new Mt(
              this._pt,
              e,
              t,
              +p || 0,
              n - (p || 0),
              typeof d == "boolean" ? Yf : mu,
              0,
              f
            )),
            u && (h.fp = u),
            a && h.modifier(a, this, e),
            (this._pt = h))
          : (!d && !(t in e) && Bo(t, n),
            Vf.call(this, e, t, p, n, f, l || Ye.stringFilter, u));
    },
    $f = function (e, t, i, n, s) {
      if (
        (Le(e) && (e = zn(e, s, t, i, n)),
        !bi(e) || (e.style && e.nodeType) || at(e) || Pl(e))
      )
        return Ue(e) ? zn(e, s, t, i, n) : e;
      var o = {},
        a;
      for (a in e) o[a] = zn(e[a], s, t, i, n);
      return o;
    },
    du = function (e, t, i, n, s, o) {
      var a, l, u, c;
      if (
        Ht[e] &&
        (a = new Ht[e]()).init(
          s,
          a.rawVars ? t[e] : $f(t[e], n, s, o, i),
          i,
          n,
          o
        ) !== !1 &&
        ((i._pt = l = new Mt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== Ur)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Ki,
    ta,
    ia = function r(e, t, i) {
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
        h = e._dur,
        m = e._startAt,
        w = e._targets,
        S = e.parent,
        _ = S && S.data === "nested" ? S.vars.targets : w,
        T = e._overwrite === "auto" && !Oo,
        g = e.timeline,
        x,
        E,
        P,
        k,
        I,
        D,
        z,
        y,
        L,
        v,
        b,
        C,
        O;
      if (
        (g && (!p || !s) && (s = "none"),
        (e._ease = gr(s, Hr.ease)),
        (e._yEase = d ? au(gr(d === !0 ? s : d, Hr.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !g && !!n.runBackwards),
        !g || (p && !n.stagger))
      ) {
        if (
          ((y = w[0] ? hr(w[0]).harness : 0),
          (C = y && n[y.prop]),
          (x = Ps(n, qo)),
          m &&
            (m._zTime < 0 && m.progress(1),
            t < 0 && c && a && !f
              ? m.render(-1, !0)
              : m.revert(c && h ? xs : gf),
            (m._lazy = 0)),
          o)
        ) {
          if (
            (Xi(
              (e._startAt = Fe.set(
                w,
                Wt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: !m && Lt(l),
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
            t < 0 && (it || (!a && !f)) && e._startAt.revert(xs),
            a && h && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && h && !m) {
          if (
            (t && (a = !1),
            (P = Wt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !m && Lt(l),
                immediateRender: a,
                stagger: 0,
                parent: S,
              },
              x
            )),
            C && (P[y.prop] = C),
            Xi((e._startAt = Fe.set(w, P))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (it ? e._startAt.revert(xs) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            r(e._startAt, ge, ge);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (h && Lt(l)) || (l && !h), E = 0;
          E < w.length;
          E++
        ) {
          if (
            ((I = w[E]),
            (z = I._gsap || Wo(w)[E]._gsap),
            (e._ptLookup[E] = v = {}),
            Vo[z.id] && Gi.length && Es(),
            (b = _ === w ? E : _.indexOf(I)),
            y &&
              (L = new y()).init(I, C || x, e, b, _) !== !1 &&
              ((e._pt = k =
                new Mt(e._pt, I, L.name, 0, 1, L.render, L, 0, L.priority)),
              L._props.forEach(function (M) {
                v[M] = k;
              }),
              L.priority && (D = 1)),
            !y || C)
          )
            for (P in x)
              Ht[P] && (L = du(P, x, e, b, I, _))
                ? L.priority && (D = 1)
                : (v[P] = k =
                    ea.call(e, I, P, "get", x[P], b, _, 0, n.stringFilter));
          e._op && e._op[E] && e.kill(I, e._op[E]),
            T &&
              e._pt &&
              ((Ki = e),
              Ee.killTweensOf(I, v, e.globalTime(t)),
              (O = !e.parent),
              (Ki = 0)),
            e._pt && l && (Vo[z.id] = 1);
        }
        D && vu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !O),
        p && t <= 0 && g.render(ii, !0, !0);
    },
    Hf = function (e, t, i, n, s, o, a, l) {
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
              (ta = 1),
              (e.vars[t] = "+=0"),
              ia(e, a),
              (ta = 0),
              l ? Pn(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (d = u[f]),
          (c = d._pt || d),
          (c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c),
          (c.c = i - c.s),
          d.e && (d.e = Ie(i) + lt(d.e)),
          d.b && (d.b = c.s + lt(d.b));
    },
    Wf = function (e, t) {
      var i = e[0] ? hr(e[0]).harness : 0,
        n = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!n) return t;
      s = Gr({}, t);
      for (o in n)
        if (o in s)
          for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    jf = function (e, t, i, n) {
      var s = t.ease || n || "power1.inOut",
        o,
        a;
      if (at(t))
        (a = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in t)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    zn = function (e, t, i, n, s) {
      return Le(e)
        ? e.call(t, i, n, s)
        : Ue(e) && ~e.indexOf("random(")
        ? Mn(e)
        : e;
    },
    fu = Ho + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    pu = {};
  Ot(fu + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
    return (pu[r] = 1);
  });
  var Fe = (function (r) {
    _i(e, r);
    function e(i, n, s, o) {
      var a;
      typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
        (a = r.call(this, o ? n : kn(n)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        p = l.stagger,
        f = l.overwrite,
        h = l.keyframes,
        m = l.defaults,
        w = l.scrollTrigger,
        S = l.yoyoEase,
        _ = n.parent || Ee,
        T = (at(i) || Pl(i) ? Ni(i[0]) : "length" in n) ? [i] : ni(i),
        g,
        x,
        E,
        P,
        k,
        I,
        D,
        z;
      if (
        ((a._targets = T.length
          ? Wo(T)
          : Pn(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ye.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        h || p || Ss(u) || Ss(c))
      ) {
        if (
          ((n = a.vars),
          (g = a.timeline =
            new bt({
              data: "nested",
              defaults: m || {},
              targets: _ && _.data === "nested" ? _.vars.targets : T,
            })),
          g.kill(),
          (g.parent = g._dp = _t(a)),
          (g._start = 0),
          p || Ss(u) || Ss(c))
        ) {
          if (((P = T.length), (D = p && Ul(p)), bi(p)))
            for (k in p) ~fu.indexOf(k) && (z || (z = {}), (z[k] = p[k]));
          for (x = 0; x < P; x++)
            (E = Ps(n, pu)),
              (E.stagger = 0),
              S && (E.yoyoEase = S),
              z && Gr(E, z),
              (I = T[x]),
              (E.duration = +zn(u, _t(a), x, I, T)),
              (E.delay = (+zn(c, _t(a), x, I, T) || 0) - a._delay),
              !p &&
                P === 1 &&
                E.delay &&
                ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
              g.to(I, E, D ? D(x, I, T) : 0),
              (g._ease = rt.none);
          g.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (h) {
          kn(Wt(g.vars.defaults, { ease: "none" })),
            (g._ease = gr(h.ease || n.ease || "none"));
          var y = 0,
            L,
            v,
            b;
          if (at(h))
            h.forEach(function (C) {
              return g.to(T, C, ">");
            }),
              g.duration();
          else {
            E = {};
            for (k in h)
              k === "ease" || k === "easeEach" || jf(k, h[k], E, h.easeEach);
            for (k in E)
              for (
                L = E[k].sort(function (C, O) {
                  return C.t - O.t;
                }),
                  y = 0,
                  x = 0;
                x < L.length;
                x++
              )
                (v = L[x]),
                  (b = {
                    ease: v.e,
                    duration: ((v.t - (x ? L[x - 1].t : 0)) / 100) * u,
                  }),
                  (b[k] = v.v),
                  g.to(T, b, y),
                  (y += b.duration);
            g.duration() < u && g.to({}, { duration: u - g.duration() });
          }
        }
        u || a.duration((u = g.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !Oo && ((Ki = _t(a)), Ee.killTweensOf(T), (Ki = 0)),
        Ti(_, _t(a), s),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (d ||
          (!u &&
            !h &&
            a._start === ze(_._time) &&
            Lt(d) &&
            Sf(_t(a)) &&
            _.data !== "nested")) &&
          ((a._tTime = -ge), a.render(Math.max(0, -c) || 0)),
        w && Wl(_t(a), w),
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
          d = n > l - ge && !c ? l : n < ge ? 0 : n,
          p,
          f,
          h,
          m,
          w,
          S,
          _,
          T,
          g;
        if (!u) xf(this, n, s, o);
        else if (
          d !== this._tTime ||
          !n ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((p = d), (T = this.timeline), this._repeat)) {
            if (((m = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(m * 100 + n, s, o);
            if (
              ((p = ze(d % m)),
              d === l
                ? ((h = this._repeat), (p = u))
                : ((w = ze(d / m)),
                  (h = ~~w),
                  h && h === w ? ((p = u), h--) : p > u && (p = u)),
              (S = this._yoyo && h & 1),
              S && ((g = this._yEase), (p = u - p)),
              (w = Xr(this._tTime, m)),
              p === a && !o && this._initted && h === w)
            )
              return (this._tTime = d), this;
            h !== w &&
              (T && this._yEase && lu(T, S),
              this.vars.repeatRefresh &&
                !S &&
                !this._lock &&
                p !== m &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(ze(m * h), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (jl(this, c ? n : p, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && h !== w))
              return this;
            if (u !== this._dur) return this.render(n, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = _ = (g || this._ease)(p / u)),
            this._from && (this.ratio = _ = 1 - _),
            !a && d && !s && !w && (jt(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(_, f.d), (f = f._next);
          (T && T.render(n < 0 ? n : T._dur * T._ease(p / this._dur), s, o)) ||
            (this._startAt && (this._zTime = n)),
            this._onUpdate &&
              !s &&
              (c && Go(this, n, s, o), jt(this, "onUpdate")),
            this._repeat &&
              h !== w &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              jt(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && Go(this, n, !0, !0),
              (n || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Xi(this, 1),
              !s &&
                !(c && !a) &&
                (d || a || S) &&
                (jt(this, d === l ? "onComplete" : "onReverseComplete", !0),
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
        Rn || Gt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || ia(this, u),
          (c = this._ease(u / this._dur)),
          Hf(this, n, s, o, a, c, u, l)
            ? this.resetTo(n, s, o, a, 1)
            : (Os(this, 0),
              this.parent ||
                Vl(
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
              : this.scrollTrigger && this.scrollTrigger.kill(!!it),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(n, s, Ki && Ki.vars.overwrite !== !0)
              ._first || Dn(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Yr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = n ? ni(n) : a,
          u = this._ptLookup,
          c = this._pt,
          d,
          p,
          f,
          h,
          m,
          w,
          S;
        if ((!s || s === "all") && _f(a, l))
          return s === "all" && (this._pt = 0), Dn(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Ue(s) &&
                ((m = {}),
                Ot(s, function (_) {
                  return (m[_] = 1);
                }),
                (s = m)),
              (s = Wf(a, s))),
            S = a.length;
          S--;

        )
          if (~l.indexOf(a[S])) {
            (p = u[S]),
              s === "all"
                ? ((d[S] = s), (h = p), (f = {}))
                : ((f = d[S] = d[S] || {}), (h = s));
            for (m in h)
              (w = p && p[m]),
                w &&
                  ((!("kill" in w.d) || w.d.kill(m) === !0) &&
                    As(this, w, "_pt"),
                  delete p[m]),
                f !== "all" && (f[m] = 1);
          }
        return this._initted && !this._pt && c && Dn(this), this;
      }),
      (e.to = function (n, s) {
        return new e(n, s, arguments[2]);
      }),
      (e.from = function (n, s) {
        return Ln(1, arguments);
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
        return Ln(2, arguments);
      }),
      (e.set = function (n, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
      }),
      (e.killTweensOf = function (n, s, o) {
        return Ee.killTweensOf(n, s, o);
      }),
      e
    );
  })(Nn);
  Wt(Fe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Ot("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Fe[r] = function () {
        var e = new bt(),
          t = Yo.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
      };
    });
  var ra = function (e, t, i) {
      return (e[t] = i);
    },
    hu = function (e, t, i) {
      return e[t](i);
    },
    Gf = function (e, t, i, n) {
      return e[t](n.fp, i);
    },
    Xf = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    na = function (e, t) {
      return Le(e[t]) ? hu : Do(e[t]) && e.setAttribute ? Xf : ra;
    },
    mu = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Yf = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    gu = function (e, t) {
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
    sa = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Uf = function (e, t, i, n) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
    },
    Kf = function (e) {
      for (var t = this._pt, i, n; t; )
        (n = t._next),
          (t.p === e && !t.op) || t.op === e
            ? As(this, t, "_pt")
            : t.dep || (i = 1),
          (t = n);
      return !i;
    },
    Qf = function (e, t, i, n) {
      n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
    },
    vu = function (e) {
      for (var t = e._pt, i, n, s, o; t; ) {
        for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
        (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = n) ? (n._prev = t) : (o = t),
          (t = i);
      }
      e._pt = s;
    },
    Mt = (function () {
      function r(t, i, n, s, o, a, l, u, c) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = n),
          (this.r = a || mu),
          (this.d = l || this),
          (this.set = u || ra),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = r.prototype;
      return (
        (e.modifier = function (i, n, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Qf),
            (this.m = i),
            (this.mt = s),
            (this.tween = n);
        }),
        r
      );
    })();
  Ot(
    Ho +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (r) {
      return (qo[r] = 1);
    }
  ),
    ($t.TweenMax = $t.TweenLite = Fe),
    ($t.TimelineLite = $t.TimelineMax = bt),
    (Ee = new bt({
      sortChildren: !1,
      defaults: Hr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ye.stringFilter = ou);
  var yr = [],
    Ms = {},
    Zf = [],
    yu = 0,
    Jf = 0,
    oa = function (e) {
      return (Ms[e] || Zf).map(function (t) {
        return t();
      });
    },
    aa = function () {
      var e = Date.now(),
        t = [];
      e - yu > 2 &&
        (oa("matchMediaInit"),
        yr.forEach(function (i) {
          var n = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            u;
          for (a in n)
            (o = Si.matchMedia(n[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        oa("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (n) {
            return i.add(null, n);
          });
        }),
        (yu = e),
        oa("matchMedia"));
    },
    wu = (function () {
      function r(t, i) {
        (this.selector = i && Uo(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Jf++),
          t && this.add(t);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          Le(i) && ((s = n), (n = i), (i = Le));
          var o = this,
            a = function () {
              var u = xe,
                c = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = Uo(s)),
                (xe = o),
                (d = n.apply(o, arguments)),
                Le(d) && o._r.push(d),
                (xe = u),
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
          var n = xe;
          (xe = null), i(this), (xe = n);
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
                      u instanceof bt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
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
            for (var o = yr.length; o--; )
              yr[o].id === this.id && yr.splice(o, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        r
      );
    })(),
    ep = (function () {
      function r(t) {
        (this.contexts = []), (this.scope = t), xe && xe.data.push(this);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          bi(i) || (i = { matches: i });
          var o = new wu(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          xe && !o.selector && (o.selector = xe.selector),
            this.contexts.push(o),
            (n = o.add("onMatch", n)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = Si.matchMedia(i[u])),
                l &&
                  (yr.indexOf(o) < 0 && yr.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(aa)
                    : l.addEventListener("change", aa)));
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
    Ds = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (n) {
          return iu(n);
        });
      },
      timeline: function (e) {
        return new bt(e);
      },
      getTweensOf: function (e, t) {
        return Ee.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, n) {
        Ue(e) && (e = ni(e)[0]);
        var s = hr(e || {}).get,
          o = i ? Bl : Fl;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o(((Ht[t] && Ht[t].get) || s)(e, t, i, n))
              : function (a, l, u) {
                  return o(((Ht[a] && Ht[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = ni(e)), e.length > 1)) {
          var n = e.map(function (c) {
              return Dt.quickSetter(c, t, i);
            }),
            s = n.length;
          return function (c) {
            for (var d = s; d--; ) n[d](c);
          };
        }
        e = e[0] || {};
        var o = Ht[t],
          a = hr(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var d = new o();
                (Ur._pt = 0),
                  d.init(e, i ? c + i : c, Ur, 0, [e]),
                  d.render(1, d),
                  Ur._pt && sa(1, Ur);
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
            Wt(
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
        return Ee.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = gr(e.ease, Hr.ease)), ql(Hr, e || {});
      },
      config: function (e) {
        return ql(Ye, e || {});
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
            !Ht[a] &&
            !$t[a] &&
            Pn(t + " effect requires " + a + " plugin.")
          );
        }),
          ($o[t] = function (a, l, u) {
            return i(ni(a), Wt(l || {}, s), u);
          }),
          o &&
            (bt.prototype[t] = function (a, l, u) {
              return this.add($o[t](a, bi(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        rt[e] = gr(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? gr(e, t) : rt;
      },
      getById: function (e) {
        return Ee.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new bt(e),
          n,
          s;
        for (
          i.smoothChildTiming = Lt(e.smoothChildTiming),
            Ee.remove(i),
            i._dp = 0,
            i._time = i._tTime = Ee._time,
            n = Ee._first;
          n;

        )
          (s = n._next),
            (t ||
              !(
                !n._dur &&
                n instanceof Fe &&
                n.vars.onComplete === n._targets[0]
              )) &&
              Ti(i, n, n._start - n._delay),
            (n = s);
        return Ti(Ee, i, 0), i;
      },
      context: function (e, t) {
        return e ? new wu(e, t) : xe;
      },
      matchMedia: function (e) {
        return new ep(e);
      },
      matchMediaRefresh: function () {
        return (
          yr.forEach(function (e) {
            var t = e.conditions,
              i,
              n;
            for (n in t) t[n] && ((t[n] = !1), (i = 1));
            i && e.revert();
          }) || aa()
        );
      },
      addEventListener: function (e, t) {
        var i = Ms[e] || (Ms[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Ms[e],
          n = i && i.indexOf(t);
        n >= 0 && i.splice(n, 1);
      },
      utils: {
        wrap: Mf,
        wrapYoyo: Df,
        distribute: Ul,
        random: Ql,
        snap: Kl,
        normalize: Of,
        getUnit: lt,
        clamp: Pf,
        splitColor: ru,
        toArray: ni,
        selector: Uo,
        mapRange: Jl,
        pipe: kf,
        unitize: Lf,
        interpolate: If,
        shuffle: Yl,
      },
      install: Ml,
      effects: $o,
      ticker: Gt,
      updateRoot: bt.updateRoot,
      plugins: Ht,
      globalTimeline: Ee,
      core: {
        PropTween: Mt,
        globals: Dl,
        Tween: Fe,
        Timeline: bt,
        Animation: Nn,
        getCache: hr,
        _removeLinkedListItem: As,
        reverting: function () {
          return it;
        },
        context: function (e) {
          return e && xe && (xe.data.push(e), (e._ctx = xe)), xe;
        },
        suppressOverwrites: function (e) {
          return (Oo = e);
        },
      },
    };
  Ot("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
    return (Ds[r] = Fe[r]);
  }),
    Gt.add(bt.updateRoot),
    (Ur = Ds.to({}, { duration: 0 }));
  var tp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    ip = function (e, t) {
      var i = e._targets,
        n,
        s,
        o;
      for (n in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][n]),
            o &&
              (o = o.d) &&
              (o._pt && (o = tp(o, n)),
              o && o.modifier && o.modifier(t[n], e, i[s], n));
    },
    la = function (e, t) {
      return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function (n, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Ue(s) &&
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
            ip(a, s);
          };
        },
      };
    },
    Dt =
      Ds.registerPlugin(
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
              it ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
        la("roundProps", Ko),
        la("modifiers"),
        la("snap", Kl)
      ) || Ds;
  (Fe.version = bt.version = Dt.version = "3.13.0"), (Ol = 1), Io() && Kr();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var _u,
    Qi,
    Qr,
    ua,
    wr,
    bu,
    ca,
    rp = function () {
      return typeof window < "u";
    },
    zi = {},
    _r = 180 / Math.PI,
    Zr = Math.PI / 180,
    Jr = Math.atan2,
    Su = 1e8,
    da = /([A-Z])/g,
    np = /(left|right|width|margin|padding|x)/i,
    sp = /[\s,\(]\S/,
    xi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    fa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    op = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    ap = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    lp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Tu = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    xu = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    up = function (e, t, i) {
      return (e.style[t] = i);
    },
    cp = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    dp = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    fp = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    pp = function (e, t, i, n, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    hp = function (e, t, i, n, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    Pe = "transform",
    It = Pe + "Origin",
    mp = function r(e, t) {
      var i = this,
        n = this.target,
        s = n.style,
        o = n._gsap;
      if (e in zi && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = xi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = Fi(n, a));
                })
              : (this.tfm[e] = o.x ? o[e] : Fi(n, e)),
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
    Cu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    gp = function () {
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
                : e[s].replace(da, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) n[o] = this.tfm[o];
        n.svg &&
          (n.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = ca()),
          (!s || !s.isStart) &&
            !i[Pe] &&
            (Cu(i),
            n.zOrigin &&
              i[It] &&
              ((i[It] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    },
    Eu = function (e, t) {
      var i = { target: e, props: [], revert: gp, save: mp };
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
    Pu,
    pa = function (e, t) {
      var i = Qi.createElementNS
        ? Qi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Qi.createElement(e);
      return i && i.style ? i : Qi.createElement(e);
    },
    si = function r(e, t, i) {
      var n = getComputedStyle(e);
      return (
        n[t] ||
        n.getPropertyValue(t.replace(da, "-$1").toLowerCase()) ||
        n.getPropertyValue(t) ||
        (!i && r(e, en(t) || t, 1)) ||
        ""
      );
    },
    Au = "O,Moz,ms,Ms,Webkit".split(","),
    en = function (e, t, i) {
      var n = t || wr,
        s = n.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Au[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Au[o] : "") + e;
    },
    ha = function () {
      rp() &&
        window.document &&
        ((_u = window),
        (Qi = _u.document),
        (Qr = Qi.documentElement),
        (wr = pa("div") || { style: {} }),
        pa("div"),
        (Pe = en(Pe)),
        (It = Pe + "Origin"),
        (wr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Pu = !!en("perspective")),
        (ca = Dt.core.reverting),
        (ua = 1));
    },
    ku = function (e) {
      var t = e.ownerSVGElement,
        i = pa(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        n = e.cloneNode(!0),
        s;
      (n.style.display = "block"), i.appendChild(n), Qr.appendChild(i);
      try {
        s = n.getBBox();
      } catch {}
      return i.removeChild(n), Qr.removeChild(i), s;
    },
    Lu = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Ou = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = ku(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = ku(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Lu(e, ["x", "cx", "x1"]) || 0,
              y: +Lu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Mu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ou(e));
    },
    br = function (e, t) {
      if (t) {
        var i = e.style,
          n;
        t in zi && t !== It && (t = Pe),
          i.removeProperty
            ? ((n = t.substr(0, 2)),
              (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                n === "--" ? t : t.replace(da, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Zi = function (e, t, i, n, s, o) {
      var a = new Mt(e._pt, t, i, 0, 1, o ? xu : Tu);
      return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
    },
    Du = { deg: 1, rad: 1, turn: 1 },
    vp = { grid: 1, flex: 1 },
    Ji = function r(e, t, i, n) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = wr.style,
        l = np.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        p = n === "px",
        f = n === "%",
        h,
        m,
        w,
        S;
      if (n === o || !s || Du[n] || Du[o]) return s;
      if (
        (o !== "px" && !p && (s = r(e, t, i, "px")),
        (S = e.getCTM && Mu(e)),
        (f || o === "%") && (zi[t] || ~t.indexOf("adius")))
      )
        return (
          (h = S ? e.getBBox()[l ? "width" : "height"] : e[c]),
          Ie(f ? (s / h) * d : (s / 100) * h)
        );
      if (
        ((a[l ? "width" : "height"] = d + (p ? o : n)),
        (m =
          (n !== "rem" && ~t.indexOf("adius")) ||
          (n === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        S && (m = (e.ownerSVGElement || {}).parentNode),
        (!m || m === Qi || !m.appendChild) && (m = Qi.body),
        (w = m._gsap),
        w && f && w.width && l && w.time === Gt.time && !w.uncache)
      )
        return Ie((s / w.width) * d);
      if (f && (t === "height" || t === "width")) {
        var _ = e.style[t];
        (e.style[t] = d + n), (h = e[c]), _ ? (e.style[t] = _) : br(e, t);
      } else
        (f || o === "%") &&
          !vp[si(m, "display")] &&
          (a.position = si(e, "position")),
          m === e && (a.position = "static"),
          m.appendChild(wr),
          (h = wr[c]),
          m.removeChild(wr),
          (a.position = "absolute");
      return (
        l && f && ((w = hr(m)), (w.time = Gt.time), (w.width = m[c])),
        Ie(p ? (h * s) / d : h && s ? (d / h) * s : 0)
      );
    },
    Fi = function (e, t, i, n) {
      var s;
      return (
        ua || ha(),
        t in xi &&
          t !== "transform" &&
          ((t = xi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        zi[t] && t !== "transform"
          ? ((s = Bn(e, n)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : Rs(si(e, It)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
              (s =
                (Is[t] && Is[t](e, t, i)) ||
                si(e, t) ||
                Nl(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Ji(e, t, s, i) + i : s
      );
    },
    yp = function (e, t, i, n) {
      if (!i || i === "none") {
        var s = en(t, e, 1),
          o = s && si(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = si(e, "borderTopColor"));
      }
      var a = new Mt(this._pt, e.style, t, 0, 1, gu),
        l = 0,
        u = 0,
        c,
        d,
        p,
        f,
        h,
        m,
        w,
        S,
        _,
        T,
        g,
        x;
      if (
        ((a.b = i),
        (a.e = n),
        (i += ""),
        (n += ""),
        n.substring(0, 6) === "var(--" &&
          (n = si(e, n.substring(4, n.indexOf(")")))),
        n === "auto" &&
          ((m = e.style[t]),
          (e.style[t] = n),
          (n = si(e, t) || n),
          m ? (e.style[t] = m) : br(e, t)),
        (c = [i, n]),
        ou(c),
        (i = c[0]),
        (n = c[1]),
        (p = i.match(Wr) || []),
        (x = n.match(Wr) || []),
        x.length)
      ) {
        for (; (d = Wr.exec(n)); )
          (w = d[0]),
            (_ = n.substring(l, d.index)),
            h
              ? (h = (h + 1) % 5)
              : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") &&
                (h = 1),
            w !== (m = p[u++] || "") &&
              ((f = parseFloat(m) || 0),
              (g = m.substr((f + "").length)),
              w.charAt(1) === "=" && (w = jr(f, w) + g),
              (S = parseFloat(w)),
              (T = w.substr((S + "").length)),
              (l = Wr.lastIndex - T.length),
              T ||
                ((T = T || Ye.units[t] || g),
                l === n.length && ((n += T), (a.e += T))),
              g !== T && (f = Ji(e, t, m, T) || 0),
              (a._pt = {
                _next: a._pt,
                p: _ || u === 1 ? _ : ",",
                s: f,
                c: S - f,
                m: (h && h < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < n.length ? n.substring(l, n.length) : "";
      } else a.r = t === "display" && n === "none" ? xu : Tu;
      return kl.test(n) && (a.e = 0), (this._pt = a), a;
    },
    Iu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    wp = function (e) {
      var t = e.split(" "),
        i = t[0],
        n = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || n === "left" || n === "right") &&
          ((e = i), (i = n), (n = e)),
        (t[0] = Iu[i] || i),
        (t[1] = Iu[n] || n),
        t.join(" ")
      );
    },
    _p = function (e, t) {
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
              br(i, a);
        l &&
          (br(i, Pe),
          o &&
            (o.svg && i.removeAttribute("transform"),
            (n.scale = n.rotate = n.translate = "none"),
            Bn(i, 1),
            (o.uncache = 1),
            Cu(n)));
      }
    },
    Is = {
      clearProps: function (e, t, i, n, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Mt(e._pt, t, i, 0, 0, _p));
          return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    Fn = [1, 0, 0, 1, 0, 0],
    Ru = {},
    Nu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    zu = function (e) {
      var t = si(e, Pe);
      return Nu(t) ? Fn : t.substr(7).match(Al).map(Ie);
    },
    ma = function (e, t) {
      var i = e._gsap || hr(e),
        n = e.style,
        s = zu(e),
        o,
        a,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Fn : s)
        : (s === Fn &&
            !e.offsetParent &&
            e !== Qr &&
            !i.svg &&
            ((l = n.display),
            (n.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (a = e.nextElementSibling), Qr.appendChild(e)),
            (s = zu(e)),
            l ? (n.display = l) : br(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Qr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    ga = function (e, t, i, n, s, o) {
      var a = e._gsap,
        l = s || ma(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        d = a.xOffset || 0,
        p = a.yOffset || 0,
        f = l[0],
        h = l[1],
        m = l[2],
        w = l[3],
        S = l[4],
        _ = l[5],
        T = t.split(" "),
        g = parseFloat(T[0]) || 0,
        x = parseFloat(T[1]) || 0,
        E,
        P,
        k,
        I;
      i
        ? l !== Fn &&
          (P = f * w - h * m) &&
          ((k = g * (w / P) + x * (-m / P) + (m * _ - w * S) / P),
          (I = g * (-h / P) + x * (f / P) - (f * _ - h * S) / P),
          (g = k),
          (x = I))
        : ((E = Ou(e)),
          (g = E.x + (~T[0].indexOf("%") ? (g / 100) * E.width : g)),
          (x =
            E.y + (~(T[1] || T[0]).indexOf("%") ? (x / 100) * E.height : x))),
        n || (n !== !1 && a.smooth)
          ? ((S = g - u),
            (_ = x - c),
            (a.xOffset = d + (S * f + _ * m) - S),
            (a.yOffset = p + (S * h + _ * w) - _))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = g),
        (a.yOrigin = x),
        (a.smooth = !!n),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[It] = "0px 0px"),
        o &&
          (Zi(o, a, "xOrigin", u, g),
          Zi(o, a, "yOrigin", c, x),
          Zi(o, a, "xOffset", d, a.xOffset),
          Zi(o, a, "yOffset", p, a.yOffset)),
        e.setAttribute("data-svg-origin", g + " " + x);
    },
    Bn = function (e, t) {
      var i = e._gsap || new cu(e);
      if ("x" in i && !t && !i.uncache) return i;
      var n = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = si(e, It) || "0",
        c,
        d,
        p,
        f,
        h,
        m,
        w,
        S,
        _,
        T,
        g,
        x,
        E,
        P,
        k,
        I,
        D,
        z,
        y,
        L,
        v,
        b,
        C,
        O,
        M,
        R,
        A,
        q,
        $,
        Y,
        ee,
        W;
      return (
        (c = d = p = m = w = S = _ = T = g = 0),
        (f = h = 1),
        (i.svg = !!(e.getCTM && Mu(e))),
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
        (P = ma(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((M = e.getBBox()),
              (u = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px"),
              (O = ""))
            : (O = !t && e.getAttribute("data-svg-origin")),
          ga(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, P)),
        (x = i.xOrigin || 0),
        (E = i.yOrigin || 0),
        P !== Fn &&
          ((z = P[0]),
          (y = P[1]),
          (L = P[2]),
          (v = P[3]),
          (c = b = P[4]),
          (d = C = P[5]),
          P.length === 6
            ? ((f = Math.sqrt(z * z + y * y)),
              (h = Math.sqrt(v * v + L * L)),
              (m = z || y ? Jr(y, z) * _r : 0),
              (_ = L || v ? Jr(L, v) * _r + m : 0),
              _ && (h *= Math.abs(Math.cos(_ * Zr))),
              i.svg && ((c -= x - (x * z + E * L)), (d -= E - (x * y + E * v))))
            : ((W = P[6]),
              (Y = P[7]),
              (A = P[8]),
              (q = P[9]),
              ($ = P[10]),
              (ee = P[11]),
              (c = P[12]),
              (d = P[13]),
              (p = P[14]),
              (k = Jr(W, $)),
              (w = k * _r),
              k &&
                ((I = Math.cos(-k)),
                (D = Math.sin(-k)),
                (O = b * I + A * D),
                (M = C * I + q * D),
                (R = W * I + $ * D),
                (A = b * -D + A * I),
                (q = C * -D + q * I),
                ($ = W * -D + $ * I),
                (ee = Y * -D + ee * I),
                (b = O),
                (C = M),
                (W = R)),
              (k = Jr(-L, $)),
              (S = k * _r),
              k &&
                ((I = Math.cos(-k)),
                (D = Math.sin(-k)),
                (O = z * I - A * D),
                (M = y * I - q * D),
                (R = L * I - $ * D),
                (ee = v * D + ee * I),
                (z = O),
                (y = M),
                (L = R)),
              (k = Jr(y, z)),
              (m = k * _r),
              k &&
                ((I = Math.cos(k)),
                (D = Math.sin(k)),
                (O = z * I + y * D),
                (M = b * I + C * D),
                (y = y * I - z * D),
                (C = C * I - b * D),
                (z = O),
                (b = M)),
              w &&
                Math.abs(w) + Math.abs(m) > 359.9 &&
                ((w = m = 0), (S = 180 - S)),
              (f = Ie(Math.sqrt(z * z + y * y + L * L))),
              (h = Ie(Math.sqrt(C * C + W * W))),
              (k = Jr(b, C)),
              (_ = Math.abs(k) > 2e-4 ? k * _r : 0),
              (g = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
          i.svg &&
            ((O = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !Nu(si(e, Pe))),
            O && e.setAttribute("transform", O))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (s
            ? ((f *= -1),
              (_ += m <= 0 ? 180 : -180),
              (m += m <= 0 ? 180 : -180))
            : ((h *= -1), (_ += _ <= 0 ? 180 : -180))),
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
        (i.scaleX = Ie(f)),
        (i.scaleY = Ie(h)),
        (i.rotation = Ie(m) + a),
        (i.rotationX = Ie(w) + a),
        (i.rotationY = Ie(S) + a),
        (i.skewX = _ + a),
        (i.skewY = T + a),
        (i.transformPerspective = g + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (n[It] = Rs(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ye.force3D),
        (i.renderTransform = i.svg ? Sp : Pu ? Fu : bp),
        (i.uncache = 0),
        i
      );
    },
    Rs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    va = function (e, t, i) {
      var n = lt(t);
      return Ie(parseFloat(t) + parseFloat(Ji(e, "x", i + "px", n))) + n;
    },
    bp = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Fu(e, t);
    },
    Sr = "0deg",
    qn = "0px",
    Tr = ") ",
    Fu = function (e, t) {
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
        h = i.scaleX,
        m = i.scaleY,
        w = i.transformPerspective,
        S = i.force3D,
        _ = i.target,
        T = i.zOrigin,
        g = "",
        x = (S === "auto" && e && e !== 1) || S === !0;
      if (T && (d !== Sr || c !== Sr)) {
        var E = parseFloat(c) * Zr,
          P = Math.sin(E),
          k = Math.cos(E),
          I;
        (E = parseFloat(d) * Zr),
          (I = Math.cos(E)),
          (o = va(_, o, P * I * -T)),
          (a = va(_, a, -Math.sin(E) * -T)),
          (l = va(_, l, k * I * -T + T));
      }
      w !== qn && (g += "perspective(" + w + Tr),
        (n || s) && (g += "translate(" + n + "%, " + s + "%) "),
        (x || o !== qn || a !== qn || l !== qn) &&
          (g +=
            l !== qn || x
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Tr),
        u !== Sr && (g += "rotate(" + u + Tr),
        c !== Sr && (g += "rotateY(" + c + Tr),
        d !== Sr && (g += "rotateX(" + d + Tr),
        (p !== Sr || f !== Sr) && (g += "skew(" + p + ", " + f + Tr),
        (h !== 1 || m !== 1) && (g += "scale(" + h + ", " + m + Tr),
        (_.style[Pe] = g || "translate(0, 0)");
    },
    Sp = function (e, t) {
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
        h = i.xOrigin,
        m = i.yOrigin,
        w = i.xOffset,
        S = i.yOffset,
        _ = i.forceCSS,
        T = parseFloat(o),
        g = parseFloat(a),
        x,
        E,
        P,
        k,
        I;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Zr),
            (u *= Zr),
            (x = Math.cos(l) * d),
            (E = Math.sin(l) * d),
            (P = Math.sin(l - u) * -p),
            (k = Math.cos(l - u) * p),
            u &&
              ((c *= Zr),
              (I = Math.tan(u - c)),
              (I = Math.sqrt(1 + I * I)),
              (P *= I),
              (k *= I),
              c &&
                ((I = Math.tan(c)),
                (I = Math.sqrt(1 + I * I)),
                (x *= I),
                (E *= I))),
            (x = Ie(x)),
            (E = Ie(E)),
            (P = Ie(P)),
            (k = Ie(k)))
          : ((x = d), (k = p), (E = P = 0)),
        ((T && !~(o + "").indexOf("px")) || (g && !~(a + "").indexOf("px"))) &&
          ((T = Ji(f, "x", o, "px")), (g = Ji(f, "y", a, "px"))),
        (h || m || w || S) &&
          ((T = Ie(T + h - (h * x + m * P) + w)),
          (g = Ie(g + m - (h * E + m * k) + S))),
        (n || s) &&
          ((I = f.getBBox()),
          (T = Ie(T + (n / 100) * I.width)),
          (g = Ie(g + (s / 100) * I.height))),
        (I =
          "matrix(" +
          x +
          "," +
          E +
          "," +
          P +
          "," +
          k +
          "," +
          T +
          "," +
          g +
          ")"),
        f.setAttribute("transform", I),
        _ && (f.style[Pe] = I);
    },
    Tp = function (e, t, i, n, s) {
      var o = 360,
        a = Ue(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? _r : 1),
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
            ? (u = ((u + o * Su) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * Su) % o) - ~~(u / o) * o)),
        (e._pt = p = new Mt(e._pt, t, i, n, u, op)),
        (p.e = c),
        (p.u = "deg"),
        e._props.push(i),
        p
      );
    },
    Bu = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    xp = function (e, t, i) {
      var n = Bu({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        h;
      n.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[Pe] = t),
          (a = Bn(i, 1)),
          br(i, Pe),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Pe]),
          (o[Pe] = t),
          (a = Bn(i, 1)),
          (o[Pe] = u));
      for (l in zi)
        (u = n[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = lt(u)),
            (h = lt(c)),
            (d = f !== h ? Ji(i, l, u, h) : parseFloat(u)),
            (p = parseFloat(c)),
            (e._pt = new Mt(e._pt, a, l, d, p - d, fa)),
            (e._pt.u = h || 0),
            e._props.push(l));
      Bu(a, n);
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
    Is[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
      var p, f;
      if (arguments.length < 4)
        return (
          (p = o.map(function (h) {
            return Fi(a, h, u);
          })),
          (f = p.join(" ")),
          f.split(p[0]).length === 5 ? p[0] : f
        );
      (p = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (h, m) {
          return (f[h] = p[m] = p[m] || p[((m - 1) / 2) | 0]);
        }),
        a.init(l, f, d);
    };
  });
  var qu = {
    name: "css",
    register: ha,
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
        h,
        m,
        w,
        S,
        _,
        T,
        g,
        x,
        E,
        P,
        k;
      ua || ha(),
        (this.styles = this.styles || Eu(e)),
        (k = this.styles.props),
        (this.tween = i);
      for (m in t)
        if (
          m !== "autoRound" &&
          ((c = t[m]), !(Ht[m] && du(m, t, i, n, e, s)))
        ) {
          if (
            ((f = typeof c),
            (h = Is[m]),
            f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = Mn(c)),
            h)
          )
            h(this, e, m, c, i) && (P = 1);
          else if (m.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
              (c += ""),
              (Ui.lastIndex = 0),
              Ui.test(u) || ((w = lt(u)), (S = lt(c))),
              S ? w !== S && (u = Ji(e, m, u, S) + S) : w && (c += w),
              this.add(a, "setProperty", u, c, n, s, 0, 0, m),
              o.push(m),
              k.push(m, 0, a[m]);
          else if (f !== "undefined") {
            if (
              (l && m in l
                ? ((u =
                    typeof l[m] == "function" ? l[m].call(i, n, e, s) : l[m]),
                  Ue(u) && ~u.indexOf("random(") && (u = Mn(u)),
                  lt(u + "") ||
                    u === "auto" ||
                    (u += Ye.units[m] || lt(Fi(e, m)) || ""),
                  (u + "").charAt(1) === "=" && (u = Fi(e, m)))
                : (u = Fi(e, m)),
              (p = parseFloat(u)),
              (_ = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              _ && (c = c.substr(2)),
              (d = parseFloat(c)),
              m in xi &&
                (m === "autoAlpha" &&
                  (p === 1 && Fi(e, "visibility") === "hidden" && d && (p = 0),
                  k.push("visibility", 0, a.visibility),
                  Zi(
                    this,
                    a,
                    "visibility",
                    p ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                m !== "scale" &&
                  m !== "transform" &&
                  ((m = xi[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
              (T = m in zi),
              T)
            ) {
              if (
                (this.styles.save(m),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = si(e, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                g ||
                  ((x = e._gsap),
                  (x.renderTransform && !t.parseTransform) ||
                    Bn(e, t.parseTransform),
                  (E = t.smoothOrigin !== !1 && x.smooth),
                  (g = this._pt =
                    new Mt(this._pt, a, Pe, 0, 1, x.renderTransform, x, 0, -1)),
                  (g.dep = 1)),
                m === "scale")
              )
                (this._pt = new Mt(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (_ ? jr(x.scaleY, _ + d) : d) - x.scaleY || 0,
                  fa
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", m),
                  (m += "X");
              else if (m === "transformOrigin") {
                k.push(It, 0, a[It]),
                  (c = wp(c)),
                  x.svg
                    ? ga(e, c, 0, E, 0, this)
                    : ((S = parseFloat(c.split(" ")[2]) || 0),
                      S !== x.zOrigin && Zi(this, x, "zOrigin", x.zOrigin, S),
                      Zi(this, a, m, Rs(u), Rs(c)));
                continue;
              } else if (m === "svgOrigin") {
                ga(e, c, 1, E, 0, this);
                continue;
              } else if (m in Ru) {
                Tp(this, x, m, p, _ ? jr(p, _ + c) : c);
                continue;
              } else if (m === "smoothOrigin") {
                Zi(this, x, "smooth", x.smooth, c);
                continue;
              } else if (m === "force3D") {
                x[m] = c;
                continue;
              } else if (m === "transform") {
                xp(this, c, e);
                continue;
              }
            } else m in a || (m = en(m) || m);
            if (
              T ||
              ((d || d === 0) && (p || p === 0) && !sp.test(c) && m in a)
            )
              (w = (u + "").substr((p + "").length)),
                d || (d = 0),
                (S = lt(c) || (m in Ye.units ? Ye.units[m] : w)),
                w !== S && (p = Ji(e, m, u, S)),
                (this._pt = new Mt(
                  this._pt,
                  T ? x : a,
                  m,
                  p,
                  (_ ? jr(p, _ + d) : d) - p,
                  !T && (S === "px" || m === "zIndex") && t.autoRound !== !1
                    ? lp
                    : fa
                )),
                (this._pt.u = S || 0),
                w !== S && S !== "%" && ((this._pt.b = u), (this._pt.r = ap));
            else if (m in a) yp.call(this, e, m, u, _ ? _ + c : c);
            else if (m in e) this.add(e, m, u || e[m], _ ? _ + c : c, n, s);
            else if (m !== "parseTransform") {
              Bo(m, c);
              continue;
            }
            T ||
              (m in a
                ? k.push(m, 0, a[m])
                : typeof e[m] == "function"
                ? k.push(m, 2, e[m]())
                : k.push(m, 1, u || e[m])),
              o.push(m);
          }
        }
      P && vu(this);
    },
    render: function (e, t) {
      if (t.tween._time || !ca())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Fi,
    aliases: xi,
    getSetter: function (e, t, i) {
      var n = xi[t];
      return (
        n && n.indexOf(",") < 0 && (t = n),
        t in zi && t !== It && (e._gsap.x || Fi(e, "x"))
          ? i && bu === i
            ? t === "scale"
              ? fp
              : dp
            : (bu = i || {}) && (t === "scale" ? pp : hp)
          : e.style && !Do(e.style[t])
          ? up
          : ~t.indexOf("-")
          ? cp
          : na(e, t)
      );
    },
    core: { _removeProperty: br, _getMatrix: ma },
  };
  (Dt.utils.checkPrefix = en),
    (Dt.core.getStyleSaver = Eu),
    (function (r, e, t, i) {
      var n = Ot(r + "," + e + "," + t, function (s) {
        zi[s] = 1;
      });
      Ot(e, function (s) {
        (Ye.units[s] = "deg"), (Ru[s] = 1);
      }),
        (xi[n[13]] = r + "," + e),
        Ot(i, function (s) {
          var o = s.split(":");
          xi[o[1]] = n[o[0]];
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
        Ye.units[r] = "px";
      }
    ),
    Dt.registerPlugin(qu);
  var V = Dt.registerPlugin(qu) || Dt;
  function Cp(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i);
    }
  }
  function Ep(r, e, t) {
    return e && Cp(r.prototype, e), r;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var ut,
    Ns,
    Xt,
    er,
    tr,
    tn,
    Vu,
    xr,
    Vn,
    $u,
    Bi,
    hi,
    Hu,
    Wu = function () {
      return (
        ut ||
        (typeof window < "u" && (ut = window.gsap) && ut.registerPlugin && ut)
      );
    },
    ju = 1,
    rn = [],
    le = [],
    Ci = [],
    $n = Date.now,
    ya = function (e, t) {
      return t;
    },
    Pp = function () {
      var e = Vn.core,
        t = e.bridge || {},
        i = e._scrollers,
        n = e._proxies;
      i.push.apply(i, le),
        n.push.apply(n, Ci),
        (le = i),
        (Ci = n),
        (ya = function (o, a) {
          return t[o](a);
        });
    },
    ir = function (e, t) {
      return ~Ci.indexOf(e) && Ci[Ci.indexOf(e) + 1][t];
    },
    Hn = function (e) {
      return !!~$u.indexOf(e);
    },
    St = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
    },
    Tt = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    zs = "scrollLeft",
    Fs = "scrollTop",
    wa = function () {
      return (Bi && Bi.isPressed) || le.cache++;
    },
    Bs = function (e, t) {
      var i = function n(s) {
        if (s || s === 0) {
          ju && (Xt.history.scrollRestoration = "manual");
          var o = Bi && Bi.isPressed;
          (s = n.v = Math.round(s) || (Bi && Bi.iOS ? 1 : 0)),
            e(s),
            (n.cacheID = le.cache),
            o && ya("ss", s);
        } else
          (t || le.cache !== n.cacheID || ya("ref")) &&
            ((n.cacheID = le.cache), (n.v = e()));
        return n.v + n.offset;
      };
      return (i.offset = 0), e && i;
    },
    xt = {
      s: zs,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Bs(function (r) {
        return arguments.length
          ? Xt.scrollTo(r, Ve.sc())
          : Xt.pageXOffset || er[zs] || tr[zs] || tn[zs] || 0;
      }),
    },
    Ve = {
      s: Fs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: xt,
      sc: Bs(function (r) {
        return arguments.length
          ? Xt.scrollTo(xt.sc(), r)
          : Xt.pageYOffset || er[Fs] || tr[Fs] || tn[Fs] || 0;
      }),
    },
    Rt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || ut.utils.toArray)(e)[0] ||
        (typeof e == "string" && ut.config().nullTargetWarn !== !1
          ? void 0
          : null)
      );
    },
    Ap = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    rr = function (e, t) {
      var i = t.s,
        n = t.sc;
      Hn(e) && (e = er.scrollingElement || tr);
      var s = le.indexOf(e),
        o = n === Ve.sc ? 1 : 2;
      !~s && (s = le.push(e) - 1), le[s + o] || St(e, "scroll", wa);
      var a = le[s + o],
        l =
          a ||
          (le[s + o] =
            Bs(ir(e, i), !0) ||
            (Hn(e)
              ? n
              : Bs(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = ut.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    _a = function (e, t, i) {
      var n = e,
        s = e,
        o = $n(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (h, m) {
          var w = $n();
          m || w - o > l
            ? ((s = n), (n = h), (a = o), (o = w))
            : i
            ? (n += h)
            : (n = s + ((h - s) / (w - a)) * (o - a));
        },
        d = function () {
          (s = n = i ? 0 : n), (a = o = 0);
        },
        p = function (h) {
          var m = a,
            w = s,
            S = $n();
          return (
            (h || h === 0) && h !== n && c(h),
            o === a || S - a > u
              ? 0
              : ((n + (i ? w : -w)) / ((i ? S : o) - m)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: p };
    },
    Wn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Gu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    Xu = function () {
      (Vn = ut.core.globals().ScrollTrigger), Vn && Vn.core && Pp();
    },
    Yu = function (e) {
      return (
        (ut = e || Wu()),
        !Ns &&
          ut &&
          typeof document < "u" &&
          document.body &&
          ((Xt = window),
          (er = document),
          (tr = er.documentElement),
          (tn = er.body),
          ($u = [Xt, er, tr, tn]),
          (Hu = ut.core.context || function () {}),
          (xr = "onpointerenter" in tn ? "pointer" : "mouse"),
          (Vu = Re.isTouch =
            Xt.matchMedia &&
            Xt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Xt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (hi = Re.eventTypes =
            (
              "ontouchstart" in tr
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in tr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ju = 0);
          }, 500),
          Xu(),
          (Ns = 1)),
        Ns
      );
    };
  (xt.op = Ve), (le.cache = 0);
  var Re = (function () {
    function r(t) {
      this.init(t);
    }
    var e = r.prototype;
    return (
      (e.init = function (i) {
        Ns || Yu(ut), Vn || Xu();
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
          h = i.wheelSpeed,
          m = i.event,
          w = i.onDragStart,
          S = i.onDragEnd,
          _ = i.onDrag,
          T = i.onPress,
          g = i.onRelease,
          x = i.onRight,
          E = i.onLeft,
          P = i.onUp,
          k = i.onDown,
          I = i.onChangeX,
          D = i.onChangeY,
          z = i.onChange,
          y = i.onToggleX,
          L = i.onToggleY,
          v = i.onHover,
          b = i.onHoverEnd,
          C = i.onMove,
          O = i.ignoreCheck,
          M = i.isNormalizer,
          R = i.onGestureStart,
          A = i.onGestureEnd,
          q = i.onWheel,
          $ = i.onEnable,
          Y = i.onDisable,
          ee = i.onClick,
          W = i.scrollSpeed,
          U = i.capture,
          j = i.allowClicks,
          de = i.lockAxis,
          _e = i.onLockAxis;
        (this.target = a = Rt(a) || tr),
          (this.vars = i),
          f && (f = ut.utils.toArray(f)),
          (n = n || 1e-9),
          (s = s || 0),
          (h = h || 1),
          (W = W || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Xt.getComputedStyle(tn).lineHeight) || 22);
        var Te,
          Oe,
          He,
          ae,
          be,
          We,
          je,
          N = this,
          Ze = 0,
          Bt = 0,
          Je = i.passive || (!c && i.passive !== !1),
          pe = rr(a, xt),
          kt = rr(a, Ve),
          ht = pe(),
          Jt = kt(),
          Ae =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            hi[0] === "pointerdown",
          ei = Hn(a),
          Se = a.ownerDocument || er,
          mt = [0, 0, 0],
          qt = [0, 0, 0],
          gi = 0,
          qr = function () {
            return (gi = $n());
          },
          Me = function (K, he) {
            return (
              ((N.event = K) && f && Ap(K.target, f)) ||
              (he && Ae && K.pointerType !== "touch") ||
              (O && O(K, he))
            );
          },
          En = function () {
            N._vx.reset(), N._vy.reset(), Oe.pause(), d && d(N);
          },
          F = function () {
            var K = (N.deltaX = Gu(mt)),
              he = (N.deltaY = Gu(qt)),
              H = Math.abs(K) >= n,
              re = Math.abs(he) >= n;
            z && (H || re) && z(N, K, he, mt, qt),
              H &&
                (x && N.deltaX > 0 && x(N),
                E && N.deltaX < 0 && E(N),
                I && I(N),
                y && N.deltaX < 0 != Ze < 0 && y(N),
                (Ze = N.deltaX),
                (mt[0] = mt[1] = mt[2] = 0)),
              re &&
                (k && N.deltaY > 0 && k(N),
                P && N.deltaY < 0 && P(N),
                D && D(N),
                L && N.deltaY < 0 != Bt < 0 && L(N),
                (Bt = N.deltaY),
                (qt[0] = qt[1] = qt[2] = 0)),
              (ae || He) &&
                (C && C(N),
                He && (w && He === 1 && w(N), _ && _(N), (He = 0)),
                (ae = !1)),
              We && !(We = !1) && _e && _e(N),
              be && (q(N), (be = !1)),
              (Te = 0);
          },
          G = function (K, he, H) {
            (mt[H] += K),
              (qt[H] += he),
              N._vx.update(K),
              N._vy.update(he),
              u ? Te || (Te = requestAnimationFrame(F)) : F();
          },
          Q = function (K, he) {
            de &&
              !je &&
              ((N.axis = je = Math.abs(K) > Math.abs(he) ? "x" : "y"),
              (We = !0)),
              je !== "y" && ((mt[2] += K), N._vx.update(K, !0)),
              je !== "x" && ((qt[2] += he), N._vy.update(he, !0)),
              u ? Te || (Te = requestAnimationFrame(F)) : F();
          },
          ce = function (K) {
            if (!Me(K, 1)) {
              K = Wn(K, c);
              var he = K.clientX,
                H = K.clientY,
                re = he - N.x,
                J = H - N.y,
                ne = N.isDragging;
              (N.x = he),
                (N.y = H),
                (ne ||
                  ((re || J) &&
                    (Math.abs(N.startX - he) >= s ||
                      Math.abs(N.startY - H) >= s))) &&
                  ((He = ne ? 2 : 1), ne || (N.isDragging = !0), Q(re, J));
            }
          },
          se = (N.onPress = function (ie) {
            Me(ie, 1) ||
              (ie && ie.button) ||
              ((N.axis = je = null),
              Oe.pause(),
              (N.isPressed = !0),
              (ie = Wn(ie)),
              (Ze = Bt = 0),
              (N.startX = N.x = ie.clientX),
              (N.startY = N.y = ie.clientY),
              N._vx.reset(),
              N._vy.reset(),
              St(M ? a : Se, hi[1], ce, Je, !0),
              (N.deltaX = N.deltaY = 0),
              T && T(N));
          }),
          Z = (N.onRelease = function (ie) {
            if (!Me(ie, 1)) {
              Tt(M ? a : Se, hi[1], ce, !0);
              var K = !isNaN(N.y - N.startY),
                he = N.isDragging,
                H =
                  he &&
                  (Math.abs(N.x - N.startX) > 3 ||
                    Math.abs(N.y - N.startY) > 3),
                re = Wn(ie);
              !H &&
                K &&
                (N._vx.reset(),
                N._vy.reset(),
                c &&
                  j &&
                  ut.delayedCall(0.08, function () {
                    if ($n() - gi > 300 && !ie.defaultPrevented) {
                      if (ie.target.click) ie.target.click();
                      else if (Se.createEvent) {
                        var J = Se.createEvent("MouseEvents");
                        J.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Xt,
                          1,
                          re.screenX,
                          re.screenY,
                          re.clientX,
                          re.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          ie.target.dispatchEvent(J);
                      }
                    }
                  })),
                (N.isDragging = N.isGesturing = N.isPressed = !1),
                d && he && !M && Oe.restart(!0),
                He && F(),
                S && he && S(N),
                g && g(N, H);
            }
          }),
          qe = function (K) {
            return (
              K.touches &&
              K.touches.length > 1 &&
              (N.isGesturing = !0) &&
              R(K, N.isDragging)
            );
          },
          et = function () {
            return (N.isGesturing = !1) || A(N);
          },
          Vt = function (K) {
            if (!Me(K)) {
              var he = pe(),
                H = kt();
              G((he - ht) * W, (H - Jt) * W, 1),
                (ht = he),
                (Jt = H),
                d && Oe.restart(!0);
            }
          },
          Ge = function (K) {
            if (!Me(K)) {
              (K = Wn(K, c)), q && (be = !0);
              var he =
                (K.deltaMode === 1
                  ? l
                  : K.deltaMode === 2
                  ? Xt.innerHeight
                  : 1) * h;
              G(K.deltaX * he, K.deltaY * he, 0), d && !M && Oe.restart(!0);
            }
          },
          vi = function (K) {
            if (!Me(K)) {
              var he = K.clientX,
                H = K.clientY,
                re = he - N.x,
                J = H - N.y;
              (N.x = he),
                (N.y = H),
                (ae = !0),
                d && Oe.restart(!0),
                (re || J) && Q(re, J);
            }
          },
          yi = function (K) {
            (N.event = K), v(N);
          },
          gt = function (K) {
            (N.event = K), b(N);
          },
          Vr = function (K) {
            return Me(K) || (Wn(K, c) && ee(N));
          };
        (Oe = N._dc = ut.delayedCall(p || 0.25, En).pause()),
          (N.deltaX = N.deltaY = 0),
          (N._vx = _a(0, 50, !0)),
          (N._vy = _a(0, 50, !0)),
          (N.scrollX = pe),
          (N.scrollY = kt),
          (N.isDragging = N.isGesturing = N.isPressed = !1),
          Hu(this),
          (N.enable = function (ie) {
            return (
              N.isEnabled ||
                (St(ei ? Se : a, "scroll", wa),
                o.indexOf("scroll") >= 0 &&
                  St(ei ? Se : a, "scroll", Vt, Je, U),
                o.indexOf("wheel") >= 0 && St(a, "wheel", Ge, Je, U),
                ((o.indexOf("touch") >= 0 && Vu) ||
                  o.indexOf("pointer") >= 0) &&
                  (St(a, hi[0], se, Je, U),
                  St(Se, hi[2], Z),
                  St(Se, hi[3], Z),
                  j && St(a, "click", qr, !0, !0),
                  ee && St(a, "click", Vr),
                  R && St(Se, "gesturestart", qe),
                  A && St(Se, "gestureend", et),
                  v && St(a, xr + "enter", yi),
                  b && St(a, xr + "leave", gt),
                  C && St(a, xr + "move", vi)),
                (N.isEnabled = !0),
                (N.isDragging = N.isGesturing = N.isPressed = ae = He = !1),
                N._vx.reset(),
                N._vy.reset(),
                (ht = pe()),
                (Jt = kt()),
                ie && ie.type && se(ie),
                $ && $(N)),
              N
            );
          }),
          (N.disable = function () {
            N.isEnabled &&
              (rn.filter(function (ie) {
                return ie !== N && Hn(ie.target);
              }).length || Tt(ei ? Se : a, "scroll", wa),
              N.isPressed &&
                (N._vx.reset(), N._vy.reset(), Tt(M ? a : Se, hi[1], ce, !0)),
              Tt(ei ? Se : a, "scroll", Vt, U),
              Tt(a, "wheel", Ge, U),
              Tt(a, hi[0], se, U),
              Tt(Se, hi[2], Z),
              Tt(Se, hi[3], Z),
              Tt(a, "click", qr, !0),
              Tt(a, "click", Vr),
              Tt(Se, "gesturestart", qe),
              Tt(Se, "gestureend", et),
              Tt(a, xr + "enter", yi),
              Tt(a, xr + "leave", gt),
              Tt(a, xr + "move", vi),
              (N.isEnabled = N.isPressed = N.isDragging = !1),
              Y && Y(N));
          }),
          (N.kill = N.revert =
            function () {
              N.disable();
              var ie = rn.indexOf(N);
              ie >= 0 && rn.splice(ie, 1), Bi === N && (Bi = 0);
            }),
          rn.push(N),
          M && Hn(a) && (Bi = N),
          N.enable(m);
      }),
      Ep(r, [
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
  (Re.version = "3.13.0"),
    (Re.create = function (r) {
      return new Re(r);
    }),
    (Re.register = Yu),
    (Re.getAll = function () {
      return rn.slice();
    }),
    (Re.getById = function (r) {
      return rn.filter(function (e) {
        return e.vars.id === r;
      })[0];
    }),
    Wu() && ut.registerPlugin(Re);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var X,
    nn,
    ue,
    we,
    Yt,
    me,
    ba,
    qs,
    jn,
    Gn,
    Xn,
    Vs,
    ct,
    $s,
    Sa,
    Ct,
    Uu,
    Ku,
    sn,
    Qu,
    Ta,
    Zu,
    Et,
    xa,
    Ju,
    ec,
    nr,
    Ca,
    Ea,
    on,
    Pa,
    Hs,
    Aa,
    ka,
    Ws = 1,
    dt = Date.now,
    La = dt(),
    oi = 0,
    Yn = 0,
    tc = function (e, t, i) {
      var n = Ut(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
    },
    ic = function (e, t) {
      return t && (!Ut(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    kp = function r() {
      return Yn && requestAnimationFrame(r);
    },
    rc = function () {
      return ($s = 1);
    },
    nc = function () {
      return ($s = 0);
    },
    Ei = function (e) {
      return e;
    },
    Un = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    sc = function () {
      return typeof window < "u";
    },
    oc = function () {
      return X || (sc() && (X = window.gsap) && X.registerPlugin && X);
    },
    Cr = function (e) {
      return !!~ba.indexOf(e);
    },
    ac = function (e) {
      return (
        (e === "Height" ? Pa : ue["inner" + e]) ||
        Yt["client" + e] ||
        me["client" + e]
      );
    },
    lc = function (e) {
      return (
        ir(e, "getBoundingClientRect") ||
        (Cr(e)
          ? function () {
              return (ro.width = ue.innerWidth), (ro.height = Pa), ro;
            }
          : function () {
              return qi(e);
            })
      );
    },
    Lp = function (e, t, i) {
      var n = i.d,
        s = i.d2,
        o = i.a;
      return (o = ir(e, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (t ? ac(s) : e["client" + s]) || 0;
          };
    },
    Op = function (e, t) {
      return !t || ~Ci.indexOf(e)
        ? lc(e)
        : function () {
            return ro;
          };
    },
    Pi = function (e, t) {
      var i = t.s,
        n = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + n) && (o = ir(e, i))
          ? o() - lc(e)()[s]
          : Cr(e)
          ? (Yt[i] || me[i]) - ac(n)
          : e[i] - e["offset" + n]
      );
    },
    js = function (e, t) {
      for (var i = 0; i < sn.length; i += 3)
        (!t || ~t.indexOf(sn[i + 1])) && e(sn[i], sn[i + 1], sn[i + 2]);
    },
    Ut = function (e) {
      return typeof e == "string";
    },
    ft = function (e) {
      return typeof e == "function";
    },
    Kn = function (e) {
      return typeof e == "number";
    },
    Er = function (e) {
      return typeof e == "object";
    },
    Qn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    Oa = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    an = Math.abs,
    uc = "left",
    cc = "top",
    Ma = "right",
    Da = "bottom",
    Pr = "width",
    Ar = "height",
    Zn = "Right",
    Jn = "Left",
    es = "Top",
    ts = "Bottom",
    Be = "padding",
    ai = "margin",
    ln = "Width",
    Ia = "Height",
    $e = "px",
    li = function (e) {
      return ue.getComputedStyle(e);
    },
    Mp = function (e) {
      var t = li(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    dc = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    qi = function (e, t) {
      var i =
          t &&
          li(e)[Sa] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          X.to(e, {
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
    Gs = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    fc = function (e) {
      var t = [],
        i = e.labels,
        n = e.duration(),
        s;
      for (s in i) t.push(i[s] / n);
      return t;
    },
    Dp = function (e) {
      return function (t) {
        return X.utils.snap(fc(e), t);
      };
    },
    Ra = function (e) {
      var t = X.utils.snap(e),
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
    Ip = function (e) {
      return function (t, i) {
        return Ra(fc(e))(t, i.direction);
      };
    },
    Xs = function (e, t, i, n) {
      return i.split(",").forEach(function (s) {
        return e(t, s, n);
      });
    },
    Ke = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: !n, capture: !!s });
    },
    Qe = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    Ys = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    pc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Us = { toggleActions: "play", anticipatePin: 0 },
    Ks = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Qs = function (e, t) {
      if (Ut(e)) {
        var i = e.indexOf("="),
          n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            n +
            (e in Ks
              ? Ks[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Zs = function (e, t, i, n, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        d = s.fontSize,
        p = s.indent,
        f = s.fontWeight,
        h = we.createElement("div"),
        m = Cr(i) || ir(i, "pinType") === "fixed",
        w = e.indexOf("scroller") !== -1,
        S = m ? me : i,
        _ = e.indexOf("start") !== -1,
        T = _ ? u : c,
        g =
          "border-color:" +
          T +
          ";font-size:" +
          d +
          ";color:" +
          T +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (g += "position:" + ((w || l) && m ? "fixed;" : "absolute;")),
        (w || l || !m) &&
          (g += (n === Ve ? Ma : Da) + ":" + (o + parseFloat(p)) + "px;"),
        a &&
          (g +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (h._isStart = _),
        h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (h.style.cssText = g),
        (h.innerText = t || t === 0 ? e + "-" + t : e),
        S.children[0] ? S.insertBefore(h, S.children[0]) : S.appendChild(h),
        (h._offset = h["offset" + n.op.d2]),
        Js(h, 0, n, _),
        h
      );
    },
    Js = function (e, t, i, n) {
      var s = { display: "block" },
        o = i[n ? "os2" : "p2"],
        a = i[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (s[i.a + "Percent"] = n ? -100 : 0),
        (s[i.a] = n ? "1px" : 0),
        (s["border" + o + ln] = 1),
        (s["border" + a + ln] = 0),
        (s[i.p] = t + "px"),
        X.set(e, s);
    },
    oe = [],
    Na = {},
    is,
    hc = function () {
      return dt() - oi > 34 && (is || (is = requestAnimationFrame(Vi)));
    },
    un = function () {
      (!Et || !Et.isPressed || Et.startX > me.clientWidth) &&
        (le.cache++,
        Et ? is || (is = requestAnimationFrame(Vi)) : Vi(),
        oi || Lr("scrollStart"),
        (oi = dt()));
    },
    za = function () {
      (ec = ue.innerWidth), (Ju = ue.innerHeight);
    },
    rs = function (e) {
      le.cache++,
        (e === !0 ||
          (!ct &&
            !Zu &&
            !we.fullscreenElement &&
            !we.webkitFullscreenElement &&
            (!xa ||
              ec !== ue.innerWidth ||
              Math.abs(ue.innerHeight - Ju) > ue.innerHeight * 0.25))) &&
          qs.restart(!0);
    },
    kr = {},
    Rp = [],
    mc = function r() {
      return Qe(te, "scrollEnd", r) || Mr(!0);
    },
    Lr = function (e) {
      return (
        (kr[e] &&
          kr[e].map(function (t) {
            return t();
          })) ||
        Rp
      );
    },
    Kt = [],
    gc = function (e) {
      for (var t = 0; t < Kt.length; t += 5)
        (!e || (Kt[t + 4] && Kt[t + 4].query === e)) &&
          ((Kt[t].style.cssText = Kt[t + 1]),
          Kt[t].getBBox && Kt[t].setAttribute("transform", Kt[t + 2] || ""),
          (Kt[t + 3].uncache = 1));
    },
    Fa = function (e, t) {
      var i;
      for (Ct = 0; Ct < oe.length; Ct++)
        (i = oe[Ct]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Hs = !0), t && gc(t), t || Lr("revert");
    },
    vc = function (e, t) {
      le.cache++,
        (t || !Pt) &&
          le.forEach(function (i) {
            return ft(i) && i.cacheID++ && (i.rec = 0);
          }),
        Ut(e) && (ue.history.scrollRestoration = Ea = e);
    },
    Pt,
    Or = 0,
    yc,
    Np = function () {
      if (yc !== Or) {
        var e = (yc = Or);
        requestAnimationFrame(function () {
          return e === Or && Mr(!0);
        });
      }
    },
    wc = function () {
      me.appendChild(on),
        (Pa = (!Et && on.offsetHeight) || ue.innerHeight),
        me.removeChild(on);
    },
    _c = function (e) {
      return jn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    Mr = function (e, t) {
      if (
        ((Yt = we.documentElement),
        (me = we.body),
        (ba = [ue, we, Yt, me]),
        oi && !e && !Hs)
      ) {
        Ke(te, "scrollEnd", mc);
        return;
      }
      wc(),
        (Pt = te.isRefreshing = !0),
        le.forEach(function (n) {
          return ft(n) && ++n.cacheID && (n.rec = n());
        });
      var i = Lr("refreshInit");
      Qu && te.sort(),
        t || Fa(),
        le.forEach(function (n) {
          ft(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
        }),
        oe.slice(0).forEach(function (n) {
          return n.refresh();
        }),
        (Hs = !1),
        oe.forEach(function (n) {
          if (n._subPinOffset && n.pin) {
            var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = n.pin[s];
            n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
          }
        }),
        (Aa = 1),
        _c(!0),
        oe.forEach(function (n) {
          var s = Pi(n.scroller, n._dir),
            o = n.vars.end === "max" || (n._endClamp && n.end > s),
            a = n._startClamp && n.start >= s;
          (o || a) &&
            n.setPositions(
              a ? s - 1 : n.start,
              o ? Math.max(a ? s : n.start + 1, s) : n.end,
              !0
            );
        }),
        _c(!1),
        (Aa = 0),
        i.forEach(function (n) {
          return n && n.render && n.render(-1);
        }),
        le.forEach(function (n) {
          ft(n) &&
            (n.smooth &&
              requestAnimationFrame(function () {
                return (n.target.style.scrollBehavior = "smooth");
              }),
            n.rec && n(n.rec));
        }),
        vc(Ea, 1),
        qs.pause(),
        Or++,
        (Pt = 2),
        Vi(2),
        oe.forEach(function (n) {
          return ft(n.vars.onRefresh) && n.vars.onRefresh(n);
        }),
        (Pt = te.isRefreshing = !1),
        Lr("refresh");
    },
    Ba = 0,
    eo = 1,
    ns,
    Vi = function (e) {
      if (e === 2 || (!Pt && !Hs)) {
        (te.isUpdating = !0), ns && ns.update(0);
        var t = oe.length,
          i = dt(),
          n = i - La >= 50,
          s = t && oe[0].scroll();
        if (
          ((eo = Ba > s ? -1 : 1),
          Pt || (Ba = s),
          n &&
            (oi && !$s && i - oi > 200 && ((oi = 0), Lr("scrollEnd")),
            (Xn = La),
            (La = i)),
          eo < 0)
        ) {
          for (Ct = t; Ct-- > 0; ) oe[Ct] && oe[Ct].update(0, n);
          eo = 1;
        } else for (Ct = 0; Ct < t; Ct++) oe[Ct] && oe[Ct].update(0, n);
        te.isUpdating = !1;
      }
      is = 0;
    },
    qa = [
      uc,
      cc,
      Da,
      Ma,
      ai + ts,
      ai + Zn,
      ai + es,
      ai + Jn,
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
    to = qa.concat([
      Pr,
      Ar,
      "boxSizing",
      "max" + ln,
      "max" + Ia,
      "position",
      ai,
      Be,
      Be + es,
      Be + Zn,
      Be + ts,
      Be + Jn,
    ]),
    zp = function (e, t, i) {
      cn(i);
      var n = e._gsap;
      if (n.spacerIsNative) cn(n.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Va = function (e, t, i, n) {
      if (!e._gsap.swappedIn) {
        for (var s = qa.length, o = t.style, a = e.style, l; s--; )
          (l = qa[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[Da] = a[Ma] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Pr] = Gs(e, xt) + $e),
          (o[Ar] = Gs(e, Ve) + $e),
          (o[Be] = a[ai] = a[cc] = a[uc] = "0"),
          cn(n),
          (a[Pr] = a["max" + ln] = i[Pr]),
          (a[Ar] = a["max" + Ia] = i[Ar]),
          (a[Be] = i[Be]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Fp = /([A-Z])/g,
    cn = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          n = 0,
          s,
          o;
        for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; n < i; n += 2)
          (o = e[n + 1]),
            (s = e[n]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(Fp, "-$1").toLowerCase());
      }
    },
    io = function (e) {
      for (var t = to.length, i = e.style, n = [], s = 0; s < t; s++)
        n.push(to[s], i[to[s]]);
      return (n.t = e), n;
    },
    Bp = function (e, t, i) {
      for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
      return (n.t = e.t), n;
    },
    ro = { left: 0, top: 0 },
    bc = function (e, t, i, n, s, o, a, l, u, c, d, p, f, h) {
      ft(e) && (e = e(l)),
        Ut(e) &&
          e.substr(0, 3) === "max" &&
          (e = p + (e.charAt(4) === "=" ? Qs("0" + e.substr(3), i) : 0));
      var m = f ? f.time() : 0,
        w,
        S,
        _;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Kn(e)))
        f &&
          (e = X.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            p,
            e
          )),
          a && Js(a, i, n, !0);
      else {
        ft(t) && (t = t(l));
        var T = (e || "0").split(" "),
          g,
          x,
          E,
          P;
        (_ = Rt(t, l) || me),
          (g = qi(_) || {}),
          (!g || (!g.left && !g.top)) &&
            li(_).display === "none" &&
            ((P = _.style.display),
            (_.style.display = "block"),
            (g = qi(_)),
            P ? (_.style.display = P) : _.style.removeProperty("display")),
          (x = Qs(T[0], g[n.d])),
          (E = Qs(T[1] || "0", i)),
          (e = g[n.p] - u[n.p] - c + x + s - E),
          a && Js(a, E, n, i - E < 20 || (a._isStart && E > 20)),
          (i -= i - E);
      }
      if ((h && ((l[h] = e || -0.001), e < 0 && (e = 0)), o)) {
        var k = e + i,
          I = o._isStart;
        (w = "scroll" + n.d2),
          Js(
            o,
            k,
            n,
            (I && k > 20) ||
              (!I && (d ? Math.max(me[w], Yt[w]) : o.parentNode[w]) <= k + 1)
          ),
          d &&
            ((u = qi(a)),
            d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + $e));
      }
      return (
        f &&
          _ &&
          ((w = qi(_)),
          f.seek(p),
          (S = qi(_)),
          (f._caScrollDist = w[n.p] - S[n.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(m),
        f ? e : Math.round(e)
      );
    },
    qp = /(webkit|moz|length|cssText|inset)/i,
    Sc = function (e, t, i, n) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === me) {
          (e._stOrig = s.cssText), (a = li(e));
          for (o in a)
            !+o &&
              !qp.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = n);
        } else s.cssText = e._stOrig;
        (X.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Tc = function (e, t, i) {
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
    no = function (e, t, i) {
      var n = {};
      (n[t.p] = "+=" + i), X.set(e, n);
    },
    xc = function (e, t) {
      var i = rr(e, t),
        n = "_scroll" + t.p2,
        s = function o(a, l, u, c, d) {
          var p = o.tween,
            f = l.onComplete,
            h = {};
          u = u || i();
          var m = Tc(i, u, function () {
            p.kill(), (o.tween = 0);
          });
          return (
            (d = (c && d) || 0),
            (c = c || a - u),
            p && p.kill(),
            (l[n] = a),
            (l.inherit = !1),
            (l.modifiers = h),
            (h[n] = function () {
              return m(u + c * p.ratio + d * p.ratio * p.ratio);
            }),
            (l.onUpdate = function () {
              le.cache++, o.tween && Vi();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(p);
            }),
            (p = o.tween = X.to(e, l)),
            p
          );
        };
      return (
        (e[n] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ke(e, "wheel", i.wheelHandler),
        te.isTouch && Ke(e, "touchmove", i.wheelHandler),
        s
      );
    },
    te = (function () {
      function r(t, i) {
        nn || r.register(X), Ca(this), this.init(t, i);
      }
      var e = r.prototype;
      return (
        (e.init = function (i, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Yn)
          ) {
            this.update = this.refresh = this.kill = Ei;
            return;
          }
          i = dc(Ut(i) || Kn(i) || i.nodeType ? { trigger: i } : i, Us);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            d = s.scrub,
            p = s.trigger,
            f = s.pin,
            h = s.pinSpacing,
            m = s.invalidateOnRefresh,
            w = s.anticipatePin,
            S = s.onScrubComplete,
            _ = s.onSnapComplete,
            T = s.once,
            g = s.snap,
            x = s.pinReparent,
            E = s.pinSpacer,
            P = s.containerAnimation,
            k = s.fastScrollEnd,
            I = s.preventOverlaps,
            D =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? xt
                : Ve,
            z = !d && d !== 0,
            y = Rt(i.scroller || ue),
            L = X.core.getCache(y),
            v = Cr(y),
            b =
              ("pinType" in i
                ? i.pinType
                : ir(y, "pinType") || (v && "fixed")) === "fixed",
            C = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            O = z && i.toggleActions.split(" "),
            M = "markers" in i ? i.markers : Us.markers,
            R = v ? 0 : parseFloat(li(y)["border" + D.p2 + ln]) || 0,
            A = this,
            q =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(A);
              },
            $ = Lp(y, v, D),
            Y = Op(y, v),
            ee = 0,
            W = 0,
            U = 0,
            j = rr(y, D),
            de,
            _e,
            Te,
            Oe,
            He,
            ae,
            be,
            We,
            je,
            N,
            Ze,
            Bt,
            Je,
            pe,
            kt,
            ht,
            Jt,
            Ae,
            ei,
            Se,
            mt,
            qt,
            gi,
            qr,
            Me,
            En,
            F,
            G,
            Q,
            ce,
            se,
            Z,
            qe,
            et,
            Vt,
            Ge,
            vi,
            yi,
            gt;
          if (
            ((A._startClamp = A._endClamp = !1),
            (A._dir = D),
            (w *= 45),
            (A.scroller = y),
            (A.scroll = P ? P.time.bind(P) : j),
            (Oe = j()),
            (A.vars = i),
            (n = n || i.animation),
            "refreshPriority" in i &&
              ((Qu = 1), i.refreshPriority === -9999 && (ns = A)),
            (L.tweenScroll = L.tweenScroll || {
              top: xc(y, Ve),
              left: xc(y, xt),
            }),
            (A.tweenTo = de = L.tweenScroll[D.p]),
            (A.scrubDuration = function (H) {
              (qe = Kn(H) && H),
                qe
                  ? Z
                    ? Z.duration(H)
                    : (Z = X.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: qe,
                        paused: !0,
                        onComplete: function () {
                          return S && S(A);
                        },
                      }))
                  : (Z && Z.progress(1).kill(), (Z = 0));
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
              (ce = 0),
              l || (l = n.vars.id)),
            g &&
              ((!Er(g) || g.push) && (g = { snapTo: g }),
              "scrollBehavior" in me.style &&
                X.set(v ? [me, Yt] : y, { scrollBehavior: "auto" }),
              le.forEach(function (H) {
                return (
                  ft(H) &&
                  H.target === (v ? we.scrollingElement || Yt : y) &&
                  (H.smooth = !1)
                );
              }),
              (Te = ft(g.snapTo)
                ? g.snapTo
                : g.snapTo === "labels"
                ? Dp(n)
                : g.snapTo === "labelsDirectional"
                ? Ip(n)
                : g.directional !== !1
                ? function (H, re) {
                    return Ra(g.snapTo)(H, dt() - W < 500 ? 0 : re.direction);
                  }
                : X.utils.snap(g.snapTo)),
              (et = g.duration || { min: 0.1, max: 2 }),
              (et = Er(et) ? Gn(et.min, et.max) : Gn(et, et)),
              (Vt = X.delayedCall(g.delay || qe / 2 || 0.1, function () {
                var H = j(),
                  re = dt() - W < 500,
                  J = de.tween;
                if (
                  (re || Math.abs(A.getVelocity()) < 10) &&
                  !J &&
                  !$s &&
                  ee !== H
                ) {
                  var ne = (H - ae) / pe,
                    tt = n && !z ? n.totalProgress() : ne,
                    fe = re ? 0 : ((tt - se) / (dt() - Xn)) * 1e3 || 0,
                    Ne = X.utils.clamp(-ne, 1 - ne, (an(fe / 2) * fe) / 0.185),
                    vt = ne + (g.inertia === !1 ? 0 : Ne),
                    De,
                    Ce,
                    ye = g,
                    wi = ye.onStart,
                    ke = ye.onInterrupt,
                    ti = ye.onComplete;
                  if (
                    ((De = Te(vt, A)),
                    Kn(De) || (De = vt),
                    (Ce = Math.max(0, Math.round(ae + De * pe))),
                    H <= be && H >= ae && Ce !== H)
                  ) {
                    if (J && !J._initted && J.data <= an(Ce - H)) return;
                    g.inertia === !1 && (Ne = De - ne),
                      de(
                        Ce,
                        {
                          duration: et(
                            an(
                              (Math.max(an(vt - tt), an(De - tt)) * 0.185) /
                                fe /
                                0.05 || 0
                            )
                          ),
                          ease: g.ease || "power3",
                          data: an(Ce - H),
                          onInterrupt: function () {
                            return Vt.restart(!0) && ke && ke(A);
                          },
                          onComplete: function () {
                            A.update(),
                              (ee = j()),
                              n &&
                                !z &&
                                (Z
                                  ? Z.resetTo(
                                      "totalProgress",
                                      De,
                                      n._tTime / n._tDur
                                    )
                                  : n.progress(De)),
                              (ce = se =
                                n && !z ? n.totalProgress() : A.progress),
                              _ && _(A),
                              ti && ti(A);
                          },
                        },
                        H,
                        Ne * pe,
                        Ce - H - Ne * pe
                      ),
                      wi && wi(A, de.tween);
                  }
                } else A.isActive && ee !== H && Vt.restart(!0);
              }).pause())),
            l && (Na[l] = A),
            (p = A.trigger = Rt(p || (f !== !0 && f))),
            (gt = p && p._gsap && p._gsap.stRevert),
            gt && (gt = gt(A)),
            (f = f === !0 ? p : Rt(f)),
            Ut(a) && (a = { targets: p, className: a }),
            f &&
              (h === !1 ||
                h === ai ||
                (h =
                  !h &&
                  f.parentNode &&
                  f.parentNode.style &&
                  li(f.parentNode).display === "flex"
                    ? !1
                    : Be),
              (A.pin = f),
              (_e = X.core.getCache(f)),
              _e.spacer
                ? (kt = _e.pinState)
                : (E &&
                    ((E = Rt(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (_e.spacerIsNative = !!E),
                    E && (_e.spacerState = io(E))),
                  (_e.spacer = Ae = E || we.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (_e.pinState = kt = io(f))),
              i.force3D !== !1 && X.set(f, { force3D: !0 }),
              (A.spacer = Ae = _e.spacer),
              (Q = li(f)),
              (qr = Q[h + D.os2]),
              (Se = X.getProperty(f)),
              (mt = X.quickSetter(f, D.a, $e)),
              Va(f, Ae, Q),
              (Jt = io(f))),
            M)
          ) {
            (Bt = Er(M) ? dc(M, pc) : pc),
              (N = Zs("scroller-start", l, y, D, Bt, 0)),
              (Ze = Zs("scroller-end", l, y, D, Bt, 0, N)),
              (ei = N["offset" + D.op.d2]);
            var Vr = Rt(ir(y, "content") || y);
            (We = this.markerStart = Zs("start", l, Vr, D, Bt, ei, 0, P)),
              (je = this.markerEnd = Zs("end", l, Vr, D, Bt, ei, 0, P)),
              P && (yi = X.quickSetter([We, je], D.a, $e)),
              !b &&
                !(Ci.length && ir(y, "fixedMarkers") === !0) &&
                (Mp(v ? me : y),
                X.set([N, Ze], { force3D: !0 }),
                (En = X.quickSetter(N, D.a, $e)),
                (G = X.quickSetter(Ze, D.a, $e)));
          }
          if (P) {
            var ie = P.vars.onUpdate,
              K = P.vars.onUpdateParams;
            P.eventCallback("onUpdate", function () {
              A.update(0, 0, 1), ie && ie.apply(P, K || []);
            });
          }
          if (
            ((A.previous = function () {
              return oe[oe.indexOf(A) - 1];
            }),
            (A.next = function () {
              return oe[oe.indexOf(A) + 1];
            }),
            (A.revert = function (H, re) {
              if (!re) return A.kill(!0);
              var J = H !== !1 || !A.enabled,
                ne = ct;
              J !== A.isReverted &&
                (J &&
                  ((Ge = Math.max(j(), A.scroll.rec || 0)),
                  (U = A.progress),
                  (vi = n && n.progress())),
                We &&
                  [We, je, N, Ze].forEach(function (tt) {
                    return (tt.style.display = J ? "none" : "block");
                  }),
                J && ((ct = A), A.update(J)),
                f &&
                  (!x || !A.isActive) &&
                  (J ? zp(f, Ae, kt) : Va(f, Ae, li(f), Me)),
                J || A.update(J),
                (ct = ne),
                (A.isReverted = J));
            }),
            (A.refresh = function (H, re, J, ne) {
              if (!((ct || !A.enabled) && !re)) {
                if (f && H && oi) {
                  Ke(r, "scrollEnd", mc);
                  return;
                }
                !Pt && q && q(A),
                  (ct = A),
                  de.tween && !J && (de.tween.kill(), (de.tween = 0)),
                  Z && Z.pause(),
                  m &&
                    n &&
                    (n.revert({ kill: !1 }).invalidate(),
                    n.getChildren &&
                      n.getChildren(!0, !0, !1).forEach(function (pr) {
                        return pr.vars.immediateRender && pr.render(0, !0, !0);
                      })),
                  A.isReverted || A.revert(!0, !0),
                  (A._subPinOffset = !1);
                var tt = $(),
                  fe = Y(),
                  Ne = P ? P.duration() : Pi(y, D),
                  vt = pe <= 0.01 || !pe,
                  De = 0,
                  Ce = ne || 0,
                  ye = Er(J) ? J.end : i.end,
                  wi = i.endTrigger || p,
                  ke = Er(J)
                    ? J.start
                    : i.start ||
                      (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                  ti = (A.pinnedContainer =
                    i.pinnedContainer && Rt(i.pinnedContainer, A)),
                  Di = (p && Math.max(0, oe.indexOf(A))) || 0,
                  st = Di,
                  ot,
                  yt,
                  $r,
                  ko,
                  wt,
                  Xe,
                  Ii,
                  Cl,
                  uf,
                  _s,
                  Ri,
                  bs,
                  Lo;
                for (
                  M &&
                  Er(J) &&
                  ((bs = X.getProperty(N, D.p)), (Lo = X.getProperty(Ze, D.p)));
                  st-- > 0;

                )
                  (Xe = oe[st]),
                    Xe.end || Xe.refresh(0, 1) || (ct = A),
                    (Ii = Xe.pin),
                    Ii &&
                      (Ii === p || Ii === f || Ii === ti) &&
                      !Xe.isReverted &&
                      (_s || (_s = []), _s.unshift(Xe), Xe.revert(!0, !0)),
                    Xe !== oe[st] && (Di--, st--);
                for (
                  ft(ke) && (ke = ke(A)),
                    ke = tc(ke, "start", A),
                    ae =
                      bc(
                        ke,
                        p,
                        tt,
                        D,
                        j(),
                        We,
                        N,
                        A,
                        fe,
                        R,
                        b,
                        Ne,
                        P,
                        A._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    ft(ye) && (ye = ye(A)),
                    Ut(ye) &&
                      !ye.indexOf("+=") &&
                      (~ye.indexOf(" ")
                        ? (ye = (Ut(ke) ? ke.split(" ")[0] : "") + ye)
                        : ((De = Qs(ye.substr(2), tt)),
                          (ye = Ut(ke)
                            ? ke
                            : (P
                                ? X.utils.mapRange(
                                    0,
                                    P.duration(),
                                    P.scrollTrigger.start,
                                    P.scrollTrigger.end,
                                    ae
                                  )
                                : ae) + De),
                          (wi = p))),
                    ye = tc(ye, "end", A),
                    be =
                      Math.max(
                        ae,
                        bc(
                          ye || (wi ? "100% 0" : Ne),
                          wi,
                          tt,
                          D,
                          j() + De,
                          je,
                          Ze,
                          A,
                          fe,
                          R,
                          b,
                          Ne,
                          P,
                          A._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    De = 0,
                    st = Di;
                  st--;

                )
                  (Xe = oe[st]),
                    (Ii = Xe.pin),
                    Ii &&
                      Xe.start - Xe._pinPush <= ae &&
                      !P &&
                      Xe.end > 0 &&
                      ((ot =
                        Xe.end -
                        (A._startClamp ? Math.max(0, Xe.start) : Xe.start)),
                      ((Ii === p && Xe.start - Xe._pinPush < ae) ||
                        Ii === ti) &&
                        isNaN(ke) &&
                        (De += ot * (1 - Xe.progress)),
                      Ii === f && (Ce += ot));
                if (
                  ((ae += De),
                  (be += De),
                  A._startClamp && (A._startClamp += De),
                  A._endClamp &&
                    !Pt &&
                    ((A._endClamp = be || -0.001),
                    (be = Math.min(be, Pi(y, D)))),
                  (pe = be - ae || ((ae -= 0.01) && 0.001)),
                  vt &&
                    (U = X.utils.clamp(0, 1, X.utils.normalize(ae, be, Ge))),
                  (A._pinPush = Ce),
                  We &&
                    De &&
                    ((ot = {}),
                    (ot[D.a] = "+=" + De),
                    ti && (ot[D.p] = "-=" + j()),
                    X.set([We, je], ot)),
                  f && !(Aa && A.end >= Pi(y, D)))
                )
                  (ot = li(f)),
                    (ko = D === Ve),
                    ($r = j()),
                    (qt = parseFloat(Se(D.a)) + Ce),
                    !Ne &&
                      be > 1 &&
                      ((Ri = (v ? we.scrollingElement || Yt : y).style),
                      (Ri = {
                        style: Ri,
                        value: Ri["overflow" + D.a.toUpperCase()],
                      }),
                      v &&
                        li(me)["overflow" + D.a.toUpperCase()] !== "scroll" &&
                        (Ri.style["overflow" + D.a.toUpperCase()] = "scroll")),
                    Va(f, Ae, ot),
                    (Jt = io(f)),
                    (yt = qi(f, !0)),
                    (Cl = b && rr(y, ko ? xt : Ve)()),
                    h
                      ? ((Me = [h + D.os2, pe + Ce + $e]),
                        (Me.t = Ae),
                        (st = h === Be ? Gs(f, D) + pe + Ce : 0),
                        st &&
                          (Me.push(D.d, st + $e),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = st + $e)),
                        cn(Me),
                        ti &&
                          oe.forEach(function (pr) {
                            pr.pin === ti &&
                              pr.vars.pinSpacing !== !1 &&
                              (pr._subPinOffset = !0);
                          }),
                        b && j(Ge))
                      : ((st = Gs(f, D)),
                        st &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = st + $e)),
                    b &&
                      ((wt = {
                        top: yt.top + (ko ? $r - ae : Cl) + $e,
                        left: yt.left + (ko ? Cl : $r - ae) + $e,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (wt[Pr] = wt["max" + ln] = Math.ceil(yt.width) + $e),
                      (wt[Ar] = wt["max" + Ia] = Math.ceil(yt.height) + $e),
                      (wt[ai] =
                        wt[ai + es] =
                        wt[ai + Zn] =
                        wt[ai + ts] =
                        wt[ai + Jn] =
                          "0"),
                      (wt[Be] = ot[Be]),
                      (wt[Be + es] = ot[Be + es]),
                      (wt[Be + Zn] = ot[Be + Zn]),
                      (wt[Be + ts] = ot[Be + ts]),
                      (wt[Be + Jn] = ot[Be + Jn]),
                      (ht = Bp(kt, wt, x)),
                      Pt && j(0)),
                    n
                      ? ((uf = n._initted),
                        Ta(1),
                        n.render(n.duration(), !0, !0),
                        (gi = Se(D.a) - qt + pe + Ce),
                        (F = Math.abs(pe - gi) > 1),
                        b && F && ht.splice(ht.length - 2, 2),
                        n.render(0, !0, !0),
                        uf || n.invalidate(!0),
                        n.parent || n.totalTime(n.totalTime()),
                        Ta(0))
                      : (gi = pe),
                    Ri &&
                      (Ri.value
                        ? (Ri.style["overflow" + D.a.toUpperCase()] = Ri.value)
                        : Ri.style.removeProperty("overflow-" + D.a));
                else if (p && j() && !P)
                  for (yt = p.parentNode; yt && yt !== me; )
                    yt._pinOffset &&
                      ((ae -= yt._pinOffset), (be -= yt._pinOffset)),
                      (yt = yt.parentNode);
                _s &&
                  _s.forEach(function (pr) {
                    return pr.revert(!1, !0);
                  }),
                  (A.start = ae),
                  (A.end = be),
                  (Oe = He = Pt ? Ge : j()),
                  !P && !Pt && (Oe < Ge && j(Ge), (A.scroll.rec = 0)),
                  A.revert(!1, !0),
                  (W = dt()),
                  Vt && ((ee = -1), Vt.restart(!0)),
                  (ct = 0),
                  n &&
                    z &&
                    (n._initted || vi) &&
                    n.progress() !== vi &&
                    n.progress(vi || 0, !0).render(n.time(), !0, !0),
                  (vt || U !== A.progress || P || m || (n && !n._initted)) &&
                    (n &&
                      !z &&
                      (n._initted || U || n.vars.immediateRender !== !1) &&
                      n.totalProgress(
                        P && ae < -0.001 && !U
                          ? X.utils.normalize(ae, be, 0)
                          : U,
                        !0
                      ),
                    (A.progress = vt || (Oe - ae) / pe === U ? 0 : U)),
                  f && h && (Ae._pinOffset = Math.round(A.progress * gi)),
                  Z && Z.invalidate(),
                  isNaN(bs) ||
                    ((bs -= X.getProperty(N, D.p)),
                    (Lo -= X.getProperty(Ze, D.p)),
                    no(N, D, bs),
                    no(We, D, bs - (ne || 0)),
                    no(Ze, D, Lo),
                    no(je, D, Lo - (ne || 0))),
                  vt && !Pt && A.update(),
                  c && !Pt && !Je && ((Je = !0), c(A), (Je = !1));
              }
            }),
            (A.getVelocity = function () {
              return ((j() - He) / (dt() - Xn)) * 1e3 || 0;
            }),
            (A.endAnimation = function () {
              Qn(A.callbackAnimation),
                n &&
                  (Z
                    ? Z.progress(1)
                    : n.paused()
                    ? z || Qn(n, A.direction < 0, 1)
                    : Qn(n, n.reversed()));
            }),
            (A.labelToScroll = function (H) {
              return (
                (n &&
                  n.labels &&
                  (ae || A.refresh() || ae) +
                    (n.labels[H] / n.duration()) * pe) ||
                0
              );
            }),
            (A.getTrailing = function (H) {
              var re = oe.indexOf(A),
                J =
                  A.direction > 0
                    ? oe.slice(0, re).reverse()
                    : oe.slice(re + 1);
              return (
                Ut(H)
                  ? J.filter(function (ne) {
                      return ne.vars.preventOverlaps === H;
                    })
                  : J
              ).filter(function (ne) {
                return A.direction > 0 ? ne.end <= ae : ne.start >= be;
              });
            }),
            (A.update = function (H, re, J) {
              if (!(P && !J && !H)) {
                var ne = Pt === !0 ? Ge : A.scroll(),
                  tt = H ? 0 : (ne - ae) / pe,
                  fe = tt < 0 ? 0 : tt > 1 ? 1 : tt || 0,
                  Ne = A.progress,
                  vt,
                  De,
                  Ce,
                  ye,
                  wi,
                  ke,
                  ti,
                  Di;
                if (
                  (re &&
                    ((He = Oe),
                    (Oe = P ? j() : ne),
                    g && ((se = ce), (ce = n && !z ? n.totalProgress() : fe))),
                  w &&
                    f &&
                    !ct &&
                    !Ws &&
                    oi &&
                    (!fe && ae < ne + ((ne - He) / (dt() - Xn)) * w
                      ? (fe = 1e-4)
                      : fe === 1 &&
                        be > ne + ((ne - He) / (dt() - Xn)) * w &&
                        (fe = 0.9999)),
                  fe !== Ne && A.enabled)
                ) {
                  if (
                    ((vt = A.isActive = !!fe && fe < 1),
                    (De = !!Ne && Ne < 1),
                    (ke = vt !== De),
                    (wi = ke || !!fe != !!Ne),
                    (A.direction = fe > Ne ? 1 : -1),
                    (A.progress = fe),
                    wi &&
                      !ct &&
                      ((Ce = fe && !Ne ? 0 : fe === 1 ? 1 : Ne === 1 ? 2 : 3),
                      z &&
                        ((ye =
                          (!ke && O[Ce + 1] !== "none" && O[Ce + 1]) || O[Ce]),
                        (Di =
                          n &&
                          (ye === "complete" || ye === "reset" || ye in n)))),
                    I &&
                      (ke || Di) &&
                      (Di || d || !n) &&
                      (ft(I)
                        ? I(A)
                        : A.getTrailing(I).forEach(function ($r) {
                            return $r.endAnimation();
                          })),
                    z ||
                      (Z && !ct && !Ws
                        ? (Z._dp._time - Z._start !== Z._time &&
                            Z.render(Z._dp._time - Z._start),
                          Z.resetTo
                            ? Z.resetTo("totalProgress", fe, n._tTime / n._tDur)
                            : ((Z.vars.totalProgress = fe),
                              Z.invalidate().restart()))
                        : n && n.totalProgress(fe, !!(ct && (W || H)))),
                    f)
                  ) {
                    if ((H && h && (Ae.style[h + D.os2] = qr), !b))
                      mt(Un(qt + gi * fe));
                    else if (wi) {
                      if (
                        ((ti =
                          !H && fe > Ne && be + 1 > ne && ne + 1 >= Pi(y, D)),
                        x)
                      )
                        if (!H && (vt || ti)) {
                          var st = qi(f, !0),
                            ot = ne - ae;
                          Sc(
                            f,
                            me,
                            st.top + (D === Ve ? ot : 0) + $e,
                            st.left + (D === Ve ? 0 : ot) + $e
                          );
                        } else Sc(f, Ae);
                      cn(vt || ti ? ht : Jt),
                        (F && fe < 1 && vt) ||
                          mt(qt + (fe === 1 && !ti ? gi : 0));
                    }
                  }
                  g && !de.tween && !ct && !Ws && Vt.restart(!0),
                    a &&
                      (ke || (T && fe && (fe < 1 || !ka))) &&
                      jn(a.targets).forEach(function ($r) {
                        return $r.classList[vt || T ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !z && !H && o(A),
                    wi && !ct
                      ? (z &&
                          (Di &&
                            (ye === "complete"
                              ? n.pause().totalProgress(1)
                              : ye === "reset"
                              ? n.restart(!0).pause()
                              : ye === "restart"
                              ? n.restart(!0)
                              : n[ye]()),
                          o && o(A)),
                        (ke || !ka) &&
                          (u && ke && Oa(A, u),
                          C[Ce] && Oa(A, C[Ce]),
                          T && (fe === 1 ? A.kill(!1, 1) : (C[Ce] = 0)),
                          ke ||
                            ((Ce = fe === 1 ? 1 : 3), C[Ce] && Oa(A, C[Ce]))),
                        k &&
                          !vt &&
                          Math.abs(A.getVelocity()) > (Kn(k) ? k : 2500) &&
                          (Qn(A.callbackAnimation),
                          Z
                            ? Z.progress(1)
                            : Qn(n, ye === "reverse" ? 1 : !fe, 1)))
                      : z && o && !ct && o(A);
                }
                if (G) {
                  var yt = P
                    ? (ne / P.duration()) * (P._caScrollDist || 0)
                    : ne;
                  En(yt + (N._isFlipped ? 1 : 0)), G(yt);
                }
                yi && yi((-ne / P.duration()) * (P._caScrollDist || 0));
              }
            }),
            (A.enable = function (H, re) {
              A.enabled ||
                ((A.enabled = !0),
                Ke(y, "resize", rs),
                v || Ke(y, "scroll", un),
                q && Ke(r, "refreshInit", q),
                H !== !1 && ((A.progress = U = 0), (Oe = He = ee = j())),
                re !== !1 && A.refresh());
            }),
            (A.getTween = function (H) {
              return H && de ? de.tween : Z;
            }),
            (A.setPositions = function (H, re, J, ne) {
              if (P) {
                var tt = P.scrollTrigger,
                  fe = P.duration(),
                  Ne = tt.end - tt.start;
                (H = tt.start + (Ne * H) / fe),
                  (re = tt.start + (Ne * re) / fe);
              }
              A.refresh(
                !1,
                !1,
                {
                  start: ic(H, J && !!A._startClamp),
                  end: ic(re, J && !!A._endClamp),
                },
                ne
              ),
                A.update();
            }),
            (A.adjustPinSpacing = function (H) {
              if (Me && H) {
                var re = Me.indexOf(D.d) + 1;
                (Me[re] = parseFloat(Me[re]) + H + $e),
                  (Me[1] = parseFloat(Me[1]) + H + $e),
                  cn(Me);
              }
            }),
            (A.disable = function (H, re) {
              if (
                A.enabled &&
                (H !== !1 && A.revert(!0, !0),
                (A.enabled = A.isActive = !1),
                re || (Z && Z.pause()),
                (Ge = 0),
                _e && (_e.uncache = 1),
                q && Qe(r, "refreshInit", q),
                Vt &&
                  (Vt.pause(), de.tween && de.tween.kill() && (de.tween = 0)),
                !v)
              ) {
                for (var J = oe.length; J--; )
                  if (oe[J].scroller === y && oe[J] !== A) return;
                Qe(y, "resize", rs), v || Qe(y, "scroll", un);
              }
            }),
            (A.kill = function (H, re) {
              A.disable(H, re), Z && !re && Z.kill(), l && delete Na[l];
              var J = oe.indexOf(A);
              J >= 0 && oe.splice(J, 1),
                J === Ct && eo > 0 && Ct--,
                (J = 0),
                oe.forEach(function (ne) {
                  return ne.scroller === A.scroller && (J = 1);
                }),
                J || Pt || (A.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  H && n.revert({ kill: !1 }),
                  re || n.kill()),
                We &&
                  [We, je, N, Ze].forEach(function (ne) {
                    return ne.parentNode && ne.parentNode.removeChild(ne);
                  }),
                ns === A && (ns = 0),
                f &&
                  (_e && (_e.uncache = 1),
                  (J = 0),
                  oe.forEach(function (ne) {
                    return ne.pin === f && J++;
                  }),
                  J || (_e.spacer = 0)),
                i.onKill && i.onKill(A);
            }),
            oe.push(A),
            A.enable(!1, !1),
            gt && gt(A),
            n && n.add && !pe)
          ) {
            var he = A.update;
            (A.update = function () {
              (A.update = he), le.cache++, ae || be || A.refresh();
            }),
              X.delayedCall(0.01, A.update),
              (pe = 0.01),
              (ae = be = 0);
          } else A.refresh();
          f && Np();
        }),
        (r.register = function (i) {
          return (
            nn ||
              ((X = i || oc()),
              sc() && window.document && r.enable(),
              (nn = Yn)),
            nn
          );
        }),
        (r.defaults = function (i) {
          if (i) for (var n in i) Us[n] = i[n];
          return Us;
        }),
        (r.disable = function (i, n) {
          (Yn = 0),
            oe.forEach(function (o) {
              return o[n ? "kill" : "disable"](i);
            }),
            Qe(ue, "wheel", un),
            Qe(we, "scroll", un),
            clearInterval(Vs),
            Qe(we, "touchcancel", Ei),
            Qe(me, "touchstart", Ei),
            Xs(Qe, we, "pointerdown,touchstart,mousedown", rc),
            Xs(Qe, we, "pointerup,touchend,mouseup", nc),
            qs.kill(),
            js(Qe);
          for (var s = 0; s < le.length; s += 3)
            Ys(Qe, le[s], le[s + 1]), Ys(Qe, le[s], le[s + 2]);
        }),
        (r.enable = function () {
          if (
            ((ue = window),
            (we = document),
            (Yt = we.documentElement),
            (me = we.body),
            X &&
              ((jn = X.utils.toArray),
              (Gn = X.utils.clamp),
              (Ca = X.core.context || Ei),
              (Ta = X.core.suppressOverwrites || Ei),
              (Ea = ue.history.scrollRestoration || "auto"),
              (Ba = ue.pageYOffset || 0),
              X.core.globals("ScrollTrigger", r),
              me))
          ) {
            (Yn = 1),
              (on = document.createElement("div")),
              (on.style.height = "100vh"),
              (on.style.position = "absolute"),
              wc(),
              kp(),
              Re.register(X),
              (r.isTouch = Re.isTouch),
              (nr =
                Re.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (xa = Re.isTouch === 1),
              Ke(ue, "wheel", un),
              (ba = [ue, we, Yt, me]),
              X.matchMedia &&
                ((r.matchMedia = function (u) {
                  var c = X.matchMedia(),
                    d;
                  for (d in u) c.add(d, u[d]);
                  return c;
                }),
                X.addEventListener("matchMediaInit", function () {
                  return Fa();
                }),
                X.addEventListener("matchMediaRevert", function () {
                  return gc();
                }),
                X.addEventListener("matchMedia", function () {
                  Mr(0, 1), Lr("matchMedia");
                }),
                X.matchMedia().add("(orientation: portrait)", function () {
                  return za(), za;
                })),
              za(),
              Ke(we, "scroll", un);
            var i = me.hasAttribute("style"),
              n = me.style,
              s = n.borderTopStyle,
              o = X.core.Animation.prototype,
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
                a = qi(me),
                Ve.m = Math.round(a.top + Ve.sc()) || 0,
                xt.m = Math.round(a.left + xt.sc()) || 0,
                s
                  ? (n.borderTopStyle = s)
                  : n.removeProperty("border-top-style"),
                i ||
                  (me.setAttribute("style", ""), me.removeAttribute("style")),
                Vs = setInterval(hc, 250),
                X.delayedCall(0.5, function () {
                  return (Ws = 0);
                }),
                Ke(we, "touchcancel", Ei),
                Ke(me, "touchstart", Ei),
                Xs(Ke, we, "pointerdown,touchstart,mousedown", rc),
                Xs(Ke, we, "pointerup,touchend,mouseup", nc),
                Sa = X.utils.checkPrefix("transform"),
                to.push(Sa),
                nn = dt(),
                qs = X.delayedCall(0.2, Mr).pause(),
                sn = [
                  we,
                  "visibilitychange",
                  function () {
                    var u = ue.innerWidth,
                      c = ue.innerHeight;
                    we.hidden
                      ? ((Uu = u), (Ku = c))
                      : (Uu !== u || Ku !== c) && rs();
                  },
                  we,
                  "DOMContentLoaded",
                  Mr,
                  ue,
                  "load",
                  Mr,
                  ue,
                  "resize",
                  rs,
                ],
                js(Ke),
                oe.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < le.length;
              l += 3
            )
              Ys(Qe, le[l], le[l + 1]), Ys(Qe, le[l], le[l + 2]);
          }
        }),
        (r.config = function (i) {
          "limitCallbacks" in i && (ka = !!i.limitCallbacks);
          var n = i.syncInterval;
          (n && clearInterval(Vs)) || ((Vs = n) && setInterval(hc, n)),
            "ignoreMobileResize" in i &&
              (xa = r.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (js(Qe) || js(Ke, i.autoRefreshEvents || "none"),
              (Zu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (r.scrollerProxy = function (i, n) {
          var s = Rt(i),
            o = le.indexOf(s),
            a = Cr(s);
          ~o && le.splice(o, a ? 6 : 2),
            n && (a ? Ci.unshift(ue, n, me, n, Yt, n) : Ci.unshift(s, n));
        }),
        (r.clearMatchMedia = function (i) {
          oe.forEach(function (n) {
            return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
          });
        }),
        (r.isInViewport = function (i, n, s) {
          var o = (Ut(i) ? Rt(i) : i).getBoundingClientRect(),
            a = o[s ? Pr : Ar] * n || 0;
          return s
            ? o.right - a > 0 && o.left + a < ue.innerWidth
            : o.bottom - a > 0 && o.top + a < ue.innerHeight;
        }),
        (r.positionInViewport = function (i, n, s) {
          Ut(i) && (i = Rt(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? Pr : Ar],
            l =
              n == null
                ? a / 2
                : n in Ks
                ? Ks[n] * a
                : ~n.indexOf("%")
                ? (parseFloat(n) * a) / 100
                : parseFloat(n) || 0;
          return s
            ? (o.left + l) / ue.innerWidth
            : (o.top + l) / ue.innerHeight;
        }),
        (r.killAll = function (i) {
          if (
            (oe.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var n = kr.killAll || [];
            (kr = {}),
              n.forEach(function (s) {
                return s();
              });
          }
        }),
        r
      );
    })();
  (te.version = "3.13.0"),
    (te.saveStyles = function (r) {
      return r
        ? jn(r).forEach(function (e) {
            if (e && e.style) {
              var t = Kt.indexOf(e);
              t >= 0 && Kt.splice(t, 5),
                Kt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  X.core.getCache(e),
                  Ca()
                );
            }
          })
        : Kt;
    }),
    (te.revert = function (r, e) {
      return Fa(!r, e);
    }),
    (te.create = function (r, e) {
      return new te(r, e);
    }),
    (te.refresh = function (r) {
      return r ? rs(!0) : (nn || te.register()) && Mr(!0);
    }),
    (te.update = function (r) {
      return ++le.cache && Vi(r === !0 ? 2 : 0);
    }),
    (te.clearScrollMemory = vc),
    (te.maxScroll = function (r, e) {
      return Pi(r, e ? xt : Ve);
    }),
    (te.getScrollFunc = function (r, e) {
      return rr(Rt(r), e ? xt : Ve);
    }),
    (te.getById = function (r) {
      return Na[r];
    }),
    (te.getAll = function () {
      return oe.filter(function (r) {
        return r.vars.id !== "ScrollSmoother";
      });
    }),
    (te.isScrolling = function () {
      return !!oi;
    }),
    (te.snapDirectional = Ra),
    (te.addEventListener = function (r, e) {
      var t = kr[r] || (kr[r] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (te.removeEventListener = function (r, e) {
      var t = kr[r],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (te.batch = function (r, e) {
      var t = [],
        i = {},
        n = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, c) {
          var d = [],
            p = [],
            f = X.delayedCall(n, function () {
              c(d, p), (d = []), (p = []);
            }).pause();
          return function (h) {
            d.length || f.restart(!0),
              d.push(h.trigger),
              p.push(h),
              s <= d.length && f.progress(1);
          };
        },
        a;
      for (a in e)
        i[a] =
          a.substr(0, 2) === "on" && ft(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        ft(s) &&
          ((s = s()),
          Ke(te, "refresh", function () {
            return (s = e.batchMax());
          })),
        jn(r).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push(te.create(u));
        }),
        t
      );
    });
  var Cc = function (e, t, i, n) {
      return (
        t > n ? e(n) : t < 0 && e(0),
        i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    $a = function r(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Re.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Yt && r(me, t);
    },
    so = { auto: 1, scroll: 1 },
    Vp = function (e) {
      var t = e.event,
        i = e.target,
        n = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || X.core.getCache(s),
        a = dt(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== me &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(so[(l = li(s)).overflowY] || so[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !Cr(s) &&
          (so[(l = li(s)).overflowY] || so[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Ec = function (e, t, i, n) {
      return Re.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (n = n && Vp),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return i && Ke(we, Re.eventTypes[0], Ac, !1, !0);
        },
        onDisable: function () {
          return Qe(we, Re.eventTypes[0], Ac, !0);
        },
      });
    },
    $p = /(input|label|select|textarea)/i,
    Pc,
    Ac = function (e) {
      var t = $p.test(e.target.tagName);
      (t || Pc) && ((e._gsapAllow = !0), (Pc = t));
    },
    Hp = function (e) {
      Er(e) || (e = {}),
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
        u = Rt(e.target) || Yt,
        c = X.core.globals().ScrollSmoother,
        d = c && c.get(),
        p =
          nr &&
          ((e.content && Rt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = rr(u, Ve),
        h = rr(u, xt),
        m = 1,
        w =
          (Re.isTouch && ue.visualViewport
            ? ue.visualViewport.scale * ue.visualViewport.width
            : ue.outerWidth) / ue.innerWidth,
        S = 0,
        _ = ft(n)
          ? function () {
              return n(a);
            }
          : function () {
              return n || 2.8;
            },
        T,
        g,
        x = Ec(u, e.type, !0, s),
        E = function () {
          return (g = !1);
        },
        P = Ei,
        k = Ei,
        I = function () {
          (l = Pi(u, Ve)),
            (k = Gn(nr ? 1 : 0, l)),
            i && (P = Gn(0, Pi(u, xt))),
            (T = Or);
        },
        D = function () {
          (p._gsap.y = Un(parseFloat(p._gsap.y) + f.offset) + "px"),
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(p._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        z = function () {
          if (g) {
            requestAnimationFrame(E);
            var M = Un(a.deltaY / 2),
              R = k(f.v - M);
            if (p && R !== f.v + f.offset) {
              f.offset = R - f.v;
              var A = Un((parseFloat(p && p._gsap.y) || 0) - f.offset);
              (p.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                A +
                ", 0, 1)"),
                (p._gsap.y = A + "px"),
                (f.cacheID = le.cache),
                Vi();
            }
            return !0;
          }
          f.offset && D(), (g = !0);
        },
        y,
        L,
        v,
        b,
        C = function () {
          I(),
            y.isActive() &&
              y.vars.scrollY > l &&
              (f() > l ? y.progress(1) && f(l) : y.resetTo("scrollY", l));
        };
      return (
        p && X.set(p, { y: "+=0" }),
        (e.ignoreCheck = function (O) {
          return (
            (nr && O.type === "touchmove" && z()) ||
            (m > 1.05 && O.type !== "touchstart") ||
            a.isGesturing ||
            (O.touches && O.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          g = !1;
          var O = m;
          (m = Un(((ue.visualViewport && ue.visualViewport.scale) || 1) / w)),
            y.pause(),
            O !== m && $a(u, m > 1.01 ? !0 : i ? !1 : "x"),
            (L = h()),
            (v = f()),
            I(),
            (T = Or);
        }),
        (e.onRelease = e.onGestureStart =
          function (O, M) {
            if ((f.offset && D(), !M)) b.restart(!0);
            else {
              le.cache++;
              var R = _(),
                A,
                q;
              i &&
                ((A = h()),
                (q = A + (R * 0.05 * -O.velocityX) / 0.227),
                (R *= Cc(h, A, q, Pi(u, xt))),
                (y.vars.scrollX = P(q))),
                (A = f()),
                (q = A + (R * 0.05 * -O.velocityY) / 0.227),
                (R *= Cc(f, A, q, Pi(u, Ve))),
                (y.vars.scrollY = k(q)),
                y.invalidate().duration(R).play(0.01),
                ((nr && y.vars.scrollY >= l) || A >= l - 1) &&
                  X.to({}, { onUpdate: C, duration: R });
            }
            o && o(O);
          }),
        (e.onWheel = function () {
          y._ts && y.pause(), dt() - S > 1e3 && ((T = 0), (S = dt()));
        }),
        (e.onChange = function (O, M, R, A, q) {
          if (
            (Or !== T && I(),
            M && i && h(P(A[2] === M ? L + (O.startX - O.x) : h() + M - A[1])),
            R)
          ) {
            f.offset && D();
            var $ = q[2] === R,
              Y = $ ? v + O.startY - O.y : f() + R - q[1],
              ee = k(Y);
            $ && Y !== ee && (v += ee - Y), f(ee);
          }
          (R || M) && Vi();
        }),
        (e.onEnable = function () {
          $a(u, i ? !1 : "x"),
            te.addEventListener("refresh", C),
            Ke(ue, "resize", C),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = h.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          $a(u, !0),
            Qe(ue, "resize", C),
            te.removeEventListener("refresh", C),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Re(e)),
        (a.iOS = nr),
        nr && !f() && f(1),
        nr && X.ticker.add(Ei),
        (b = a._dc),
        (y = X.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Tc(f, f(), function () {
              return y.pause();
            }),
          },
          onUpdate: Vi,
          onComplete: b.vars.onComplete,
        })),
        a
      );
    };
  (te.sort = function (r) {
    if (ft(r)) return oe.sort(r);
    var e = ue.pageYOffset || 0;
    return (
      te.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ue.innerHeight);
      }),
      oe.sort(
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
    (te.observe = function (r) {
      return new Re(r);
    }),
    (te.normalizeScroll = function (r) {
      if (typeof r > "u") return Et;
      if (r === !0 && Et) return Et.enable();
      if (r === !1) {
        Et && Et.kill(), (Et = r);
        return;
      }
      var e = r instanceof Re ? r : Hp(r);
      return (
        Et && Et.target === e.target && Et.kill(), Cr(e.target) && (Et = e), e
      );
    }),
    (te.core = {
      _getVelocityProp: _a,
      _inputObserver: Ec,
      _scrollers: le,
      _proxies: Ci,
      bridge: {
        ss: function () {
          oi || Lr("scrollStart"), (oi = dt());
        },
        ref: function () {
          return ct;
        },
      },
    }),
    oc() && X.registerPlugin(te);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let ss,
    dn,
    Ha,
    Wp = () => Ha || pn.register(window.gsap),
    kc = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    oo = (r) =>
      typeof r == "string"
        ? oo(document.querySelectorAll(r))
        : "length" in r
        ? Array.from(r)
        : [r],
    Lc = (r) => oo(r).filter((e) => e instanceof HTMLElement),
    Wa = [],
    ja = function () {},
    jp = /\s+/g,
    Oc = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Mc = { left: 0, top: 0, width: 0, height: 0 },
    Dc = (r, e) => {
      if (e) {
        let t = new Set(r.join("").match(e) || Wa),
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
    Ic = (r) =>
      window.getComputedStyle(r).display === "inline" &&
      (r.style.display = "inline-block"),
    fn = (r, e, t) =>
      e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
    Ga = (r, e, t) => {
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
    Gp = (r, e, t, i) => {
      let n = Ga("line", t, i),
        s = window.getComputedStyle(r).textAlign || "left";
      return (o, a) => {
        let l = n("");
        for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
          l.appendChild(e[o]);
        l.normalize();
      };
    },
    Rc = (r, e, t, i, n, s, o, a, l, u) => {
      var c;
      let d = Array.from(r.childNodes),
        p = 0,
        { wordDelimiter: f, reduceWhiteSpace: h = !0, prepareText: m } = e,
        w = r.getBoundingClientRect(),
        S = w,
        _ =
          !h && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
        T = 0,
        g = t.collection,
        x,
        E,
        P,
        k,
        I,
        D,
        z,
        y,
        L,
        v,
        b,
        C,
        O,
        M,
        R,
        A,
        q,
        $;
      for (
        typeof f == "object"
          ? ((P = f.delimiter || f), (E = f.replaceWith || ""))
          : (E = f === "" ? "" : f || " "),
          x = E !== " ";
        p < d.length;
        p++
      )
        if (((k = d[p]), k.nodeType === 3)) {
          for (
            R = k.textContent || "",
              h
                ? (R = R.replace(jp, " "))
                : _ &&
                  (R = R.replace(
                    /\n/g,
                    E +
                      `
`
                  )),
              m && (R = m(R, r)),
              k.textContent = R,
              I = E || P ? R.split(P || E) : R.match(a) || Wa,
              q = I[I.length - 1],
              y = x ? q.slice(-1) === " " : !q,
              q || I.pop(),
              S = w,
              z = x ? I[0].charAt(0) === " " : !I[0],
              z && fn(" ", r, k),
              I[0] || I.shift(),
              Dc(I, l),
              (s && u) || (k.textContent = ""),
              L = 1;
            L <= I.length;
            L++
          )
            if (
              ((A = I[L - 1]),
              !h &&
                _ &&
                A.charAt(0) ===
                  `
` &&
                ((c = k.previousSibling) == null || c.remove(),
                fn(document.createElement("br"), r, k),
                (A = A.slice(1))),
              !h && A === "")
            )
              fn(E, r, k);
            else if (A === " ") r.insertBefore(document.createTextNode(" "), k);
            else {
              if (
                (x && A.charAt(0) === " " && fn(" ", r, k),
                T && L === 1 && !z && g.indexOf(T.parentNode) > -1
                  ? ((D = g[g.length - 1]),
                    D.appendChild(document.createTextNode(i ? "" : A)))
                  : ((D = t(i ? "" : A)),
                    fn(D, r, k),
                    T && L === 1 && !z && D.insertBefore(T, D.firstChild)),
                i)
              )
                for (
                  b = kc
                    ? Dc(
                        [...kc.segment(A)].map((Y) => Y.segment),
                        l
                      )
                    : A.match(a) || Wa,
                    $ = 0;
                  $ < b.length;
                  $++
                )
                  D.appendChild(
                    b[$] === " " ? document.createTextNode(" ") : i(b[$])
                  );
              if (s && u) {
                if (
                  ((R = k.textContent = R.substring(A.length + 1, R.length)),
                  (v = D.getBoundingClientRect()),
                  v.top > S.top && v.left <= S.left)
                ) {
                  for (C = r.cloneNode(), O = r.childNodes[0]; O && O !== D; )
                    (M = O), (O = O.nextSibling), C.appendChild(M);
                  r.parentNode.insertBefore(C, r), n && Ic(C);
                }
                S = v;
              }
              (L < I.length || y) &&
                fn(
                  L >= I.length ? " " : x && A.slice(-1) === " " ? " " + E : E,
                  r,
                  k
                );
            }
          r.removeChild(k), (T = 0);
        } else
          k.nodeType === 1 &&
            (o && o.indexOf(k) > -1
              ? (g.indexOf(k.previousSibling) > -1 &&
                  g[g.length - 1].appendChild(k),
                (T = k))
              : (Rc(k, e, t, i, n, s, o, a, l, !0), (T = 0)),
            n && Ic(k));
    };
  const Nc = class cf {
    constructor(e, t) {
      (this.isSplit = !1),
        Wp(),
        (this.elements = Lc(e)),
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
        ja(this),
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
        h =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        m = h ? new RegExp(h.source + "|" + Oc.source, "gu") : Oc,
        w = !!e.ignore && Lc(e.ignore),
        { orig: S, animTime: _, obs: T } = this._data,
        g;
      return (
        (d || p || c) &&
          (this.elements.forEach((x, E) => {
            (S[E] = {
              element: x,
              html: x.innerHTML,
              ariaL: x.getAttribute("aria-label"),
              ariaH: x.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? x.setAttribute("aria-label", (x.textContent || "").trim())
                : i === "hidden" && x.setAttribute("aria-hidden", "true");
            let P = [],
              k = [],
              I = [],
              D = d ? Ga("char", e, P) : null,
              z = Ga("word", e, k),
              y,
              L,
              v,
              b;
            if ((Rc(x, e, z, D, f, n && (c || f), w, m, h, !1), c)) {
              let C = oo(x.childNodes),
                O = Gp(x, C, e, I),
                M,
                R = [],
                A = 0,
                q = C.map((Y) =>
                  Y.nodeType === 1 ? Y.getBoundingClientRect() : Mc
                ),
                $ = Mc;
              for (y = 0; y < C.length; y++)
                (M = C[y]),
                  M.nodeType === 1 &&
                    (M.nodeName === "BR"
                      ? (R.push(M), O(A, y + 1), (A = y + 1), ($ = q[A]))
                      : (y &&
                          q[y].top > $.top &&
                          q[y].left <= $.left &&
                          (O(A, y), (A = y)),
                        ($ = q[y])));
              A < y && O(A, y),
                R.forEach((Y) => {
                  var ee;
                  return (ee = Y.parentNode) == null
                    ? void 0
                    : ee.removeChild(Y);
                });
            }
            if (!p) {
              for (y = 0; y < k.length; y++)
                if (
                  ((L = k[y]),
                  d || !L.nextSibling || L.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
                    for (
                      v = document.createElement("span"),
                        v.style.whiteSpace = "nowrap";
                      L.firstChild;

                    )
                      v.appendChild(L.firstChild);
                    L.replaceWith(v);
                  } else L.replaceWith(...L.childNodes);
                else
                  (b = L.nextSibling),
                    b &&
                      b.nodeType === 3 &&
                      ((b.textContent =
                        (L.textContent || "") + (b.textContent || "")),
                      L.remove());
              (k.length = 0), x.normalize();
            }
            this.lines.push(...I), this.words.push(...k), this.chars.push(...P);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((x) => {
                let E = x.cloneNode();
                return (
                  x.replaceWith(E),
                  E.appendChild(x),
                  x.className &&
                    (E.className = x.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (E.style.overflow = "clip"),
                  E
                );
              })
            )),
        (this.isSplit = !0),
        dn && (a ? dn.addEventListener("loadingdone", this._split) : dn.status),
        (g = o && o(this)) &&
          g.totalTime &&
          (this._data.anim = _ ? g.totalTime(_) : g),
        c &&
          a &&
          this.elements.forEach((x, E) => {
            (S[E].width = x.offsetWidth), T && T.observe(x);
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
        dn?.removeEventListener("loadingdone", this._split),
        n && ((this._data.animTime = n.totalTime()), n.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new cf(e, t);
    }
    static register(e) {
      (ss = ss || e || window.gsap),
        ss && ((oo = ss.utils.toArray), (ja = ss.core.context || ja)),
        !Ha && window.innerWidth > 0 && ((dn = document.fonts), (Ha = !0));
    }
  };
  Nc.version = "3.13.0";
  let pn = Nc;
  V.registerPlugin(te, pn);
  const Xp = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((e) => {
        const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
          n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
        new pn(e, {
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
    $i = () => {
      Xp();
    },
    Yp = () => {
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
          const m = t[h].querySelector('[data-tabs="item-progress"]');
          m &&
            (V.set(m, { scaleX: 0, transformOrigin: "left center" }),
            (c = V.to(m, {
              scaleX: 1,
              duration: s / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!u) {
                  const w = (h + 1) % t.length;
                  p(w);
                }
              },
            })));
        }
        function p(h) {
          if (u || t[h] === o) return;
          (u = !0), c && c.kill();
          const m = o,
            w = a,
            S = m?.querySelector('[data-tabs="item-progress"]'),
            _ = t[h],
            T = i[h],
            g = _.querySelector('[data-tabs="item-progress"]'),
            x = V.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = _), (a = T), (l = h), (u = !1), n && d(h);
              },
            });
          m &&
            (m.classList.remove("active"),
            m.setAttribute("aria-selected", "false"),
            w?.classList.remove("active"),
            x
              .set(S, { transformOrigin: "right center" })
              .to(S, { scaleX: 0, duration: 0.3 }, 0)
              .to(w, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            _.classList.add("active"),
            _.setAttribute("aria-selected", "true"),
            T.classList.add("active"),
            x
              .fromTo(
                T,
                { autoAlpha: 0, yPercent: 5, scale: 0.99 },
                { autoAlpha: 1, yPercent: 0, scale: 1 },
                0.3
              )
              .set(g, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        if (
          (t.forEach((h, m) => {
            h.setAttribute("tabindex", m === 0 ? "0" : "-1"),
              h.setAttribute("role", "tab"),
              h.setAttribute("aria-selected", m === 0 ? "true" : "false"),
              h.setAttribute("id", `tab-${m}`),
              i[m] &&
                (i[m].setAttribute("role", "tabpanel"),
                i[m].setAttribute("aria-labelledby", `tab-${m}`)),
              h.addEventListener("keydown", (w) => {
                let S;
                switch (w.key) {
                  case "ArrowRight":
                    w.preventDefault(), (S = (m + 1) % t.length);
                    break;
                  case "ArrowLeft":
                    w.preventDefault(), (S = (m - 1 + t.length) % t.length);
                    break;
                  case "Home":
                    w.preventDefault(), (S = 0);
                    break;
                  case "End":
                    w.preventDefault(), (S = t.length - 1);
                    break;
                  default:
                    return;
                }
                t.forEach((_, T) => {
                  _.setAttribute("tabindex", T === S ? "0" : "-1");
                }),
                  t[S].focus(),
                  p(S);
              }),
              h.addEventListener("click", () => {
                h !== o &&
                  (t.forEach((w, S) => {
                    w.setAttribute("tabindex", S === m ? "0" : "-1");
                  }),
                  p(m));
              });
          }),
          e.setAttribute("role", "tablist"),
          e.setAttribute("aria-label", "Hero content tabs"),
          "ontouchstart" in window || navigator.maxTouchPoints > 0)
        ) {
          let h = 0,
            m = 0,
            w = 0,
            S = 0;
          const _ = 50,
            T = 100;
          e.addEventListener(
            "touchstart",
            (g) => {
              (h = g.touches[0].clientX), (m = g.touches[0].clientY);
            },
            { passive: !0 }
          ),
            e.addEventListener(
              "touchend",
              (g) => {
                (w = g.changedTouches[0].clientX),
                  (S = g.changedTouches[0].clientY);
                const x = w - h,
                  E = Math.abs(S - m);
                if (Math.abs(x) > _ && E < T)
                  if (x > 0) {
                    const P = (l - 1 + t.length) % t.length;
                    p(P);
                  } else {
                    const P = (l + 1) % t.length;
                    p(P);
                  }
              },
              { passive: !0 }
            );
        }
        p(0);
      });
    },
    Up = () => {
      Yp();
    };
  V.registerPlugin(te);
  const Kp = () => {
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
    Qp = () => {
      Kp();
    };
  V.registerPlugin(te, pn);
  const Zp = () => {
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
            const w = o.querySelector('[form-dropdown="trigger"]'),
              S = o.querySelector('[form-dropdown="content"]'),
              _ = o.querySelector('[form-dropdown="trigger-icon"]'),
              T = o.querySelectorAll('[form-dropdown="answer"]');
            d(w, S, _), f(w, S, _, T), (s = !1), (o = null);
          }
        };
      document.addEventListener("click", u);
      const c = (h, m, w, S) => {
          h.classList.remove(e),
            h.classList.add(t),
            h.setAttribute(i, "true"),
            m.setAttribute(n, "false"),
            w && w.classList.add(t);
        },
        d = (h, m, w, S) => {
          h.classList.remove(t),
            h.classList.add(e),
            h.setAttribute(i, "false"),
            m.setAttribute(n, "true"),
            w && w.classList.remove(t);
        },
        p = (h, m, w, S) => {
          V.to(w, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
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
              S,
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
        f = (h, m, w, S) => {
          V.to(w, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            V.to(m, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            V.to(S, {
              autoAlpha: 0,
              duration: 0.01,
              ease: "expo.out",
              stagger: 0.05,
              pointerEvents: "none",
            });
        };
      r.forEach((h) => {
        const m = h.querySelector('[form-dropdown="trigger"]'),
          w = h.querySelector('[form-dropdown="content"]'),
          S = h.querySelector('[form-dropdown="trigger-icon"]'),
          _ = h.querySelectorAll('[form-dropdown="answer"]'),
          T = () => {
            d(m, w, S), f(m, w, S, _), (s = !1), (o = null);
          };
        m.addEventListener("click", () => {
          const g = m.classList.contains(t);
          if (s && o && o !== h) {
            const x = o.querySelector('[form-dropdown="trigger"]'),
              E = o.querySelector('[form-dropdown="content"]'),
              P = o.querySelector('[form-dropdown="trigger-icon"]'),
              k = o.querySelectorAll('[form-dropdown="answer"]');
            d(x, E, P), f(x, E, P, k);
          }
          g ? T() : (c(m, w, S), p(m, w, S, _), (s = !0), (o = h));
        }),
          _.forEach((g) => {
            g.addEventListener("click", () => {
              if (o === h) {
                const x = g.querySelector("p[answer-value]"),
                  E = m.querySelector('[form-dropdown="value"]');
                if (x && E) {
                  const P =
                      x.getAttribute("answer-value") || x.textContent.trim(),
                    k = g.getAttribute("calc-value");
                  if (((E.textContent = P), k)) {
                    E.setAttribute("final-value", k);
                    const I = E.parentElement;
                    I && I.classList.add("is--active"),
                      m.classList.add("is--active"),
                      S && S.classList.add("is--active"),
                      h.classList.add("is--active"),
                      E.classList.add("is--active");
                  }
                }
                T();
              }
            });
          });
      });
    },
    Jp = () => {
      Zp();
    };
  var Nt = "top",
    ui = "bottom",
    ci = "right",
    zt = "left",
    Xa = "auto",
    os = [Nt, ui, ci, zt],
    hn = "start",
    as = "end",
    eh = "clippingParents",
    zc = "viewport",
    ls = "popper",
    th = "reference",
    Fc = os.reduce(function (r, e) {
      return r.concat([e + "-" + hn, e + "-" + as]);
    }, []),
    Bc = [].concat(os, [Xa]).reduce(function (r, e) {
      return r.concat([e, e + "-" + hn, e + "-" + as]);
    }, []),
    ih = "beforeRead",
    rh = "read",
    nh = "afterRead",
    sh = "beforeMain",
    oh = "main",
    ah = "afterMain",
    lh = "beforeWrite",
    uh = "write",
    ch = "afterWrite",
    dh = [ih, rh, nh, sh, oh, ah, lh, uh, ch];
  function Ai(r) {
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
  function Dr(r) {
    var e = Qt(r).Element;
    return r instanceof e || r instanceof Element;
  }
  function di(r) {
    var e = Qt(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement;
  }
  function Ya(r) {
    if (typeof ShadowRoot > "u") return !1;
    var e = Qt(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot;
  }
  function fh(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function (t) {
      var i = e.styles[t] || {},
        n = e.attributes[t] || {},
        s = e.elements[t];
      !di(s) ||
        !Ai(s) ||
        (Object.assign(s.style, i),
        Object.keys(n).forEach(function (o) {
          var a = n[o];
          a === !1
            ? s.removeAttribute(o)
            : s.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function ph(r) {
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
          !di(n) ||
            !Ai(n) ||
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
    fn: fh,
    effect: ph,
    requires: ["computeStyles"],
  };
  function ki(r) {
    return r.split("-")[0];
  }
  var Ir = Math.max,
    ao = Math.min,
    mn = Math.round;
  function Ua() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands)
      ? r.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Vc() {
    return !/^((?!chrome|android).)*safari/i.test(Ua());
  }
  function gn(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var i = r.getBoundingClientRect(),
      n = 1,
      s = 1;
    e &&
      di(r) &&
      ((n = (r.offsetWidth > 0 && mn(i.width) / r.offsetWidth) || 1),
      (s = (r.offsetHeight > 0 && mn(i.height) / r.offsetHeight) || 1));
    var o = Dr(r) ? Qt(r) : window,
      a = o.visualViewport,
      l = !Vc() && t,
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
  function Ka(r) {
    var e = gn(r),
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
    if (t && Ya(t)) {
      var i = e;
      do {
        if (i && r.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function Hi(r) {
    return Qt(r).getComputedStyle(r);
  }
  function hh(r) {
    return ["table", "td", "th"].indexOf(Ai(r)) >= 0;
  }
  function sr(r) {
    return ((Dr(r) ? r.ownerDocument : r.document) || window.document)
      .documentElement;
  }
  function lo(r) {
    return Ai(r) === "html"
      ? r
      : r.assignedSlot || r.parentNode || (Ya(r) ? r.host : null) || sr(r);
  }
  function Hc(r) {
    return !di(r) || Hi(r).position === "fixed" ? null : r.offsetParent;
  }
  function mh(r) {
    var e = /firefox/i.test(Ua()),
      t = /Trident/i.test(Ua());
    if (t && di(r)) {
      var i = Hi(r);
      if (i.position === "fixed") return null;
    }
    var n = lo(r);
    for (
      Ya(n) && (n = n.host);
      di(n) && ["html", "body"].indexOf(Ai(n)) < 0;

    ) {
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
  function us(r) {
    for (var e = Qt(r), t = Hc(r); t && hh(t) && Hi(t).position === "static"; )
      t = Hc(t);
    return t &&
      (Ai(t) === "html" || (Ai(t) === "body" && Hi(t).position === "static"))
      ? e
      : t || mh(r) || e;
  }
  function Qa(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
  }
  function cs(r, e, t) {
    return Ir(r, ao(e, t));
  }
  function gh(r, e, t) {
    var i = cs(r, e, t);
    return i > t ? t : i;
  }
  function Wc() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function jc(r) {
    return Object.assign({}, Wc(), r);
  }
  function Gc(r, e) {
    return e.reduce(function (t, i) {
      return (t[i] = r), t;
    }, {});
  }
  var vh = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      jc(typeof e != "number" ? e : Gc(e, os))
    );
  };
  function yh(r) {
    var e,
      t = r.state,
      i = r.name,
      n = r.options,
      s = t.elements.arrow,
      o = t.modifiersData.popperOffsets,
      a = ki(t.placement),
      l = Qa(a),
      u = [zt, ci].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!s || !o)) {
      var d = vh(n.padding, t),
        p = Ka(s),
        f = l === "y" ? Nt : zt,
        h = l === "y" ? ui : ci,
        m =
          t.rects.reference[c] +
          t.rects.reference[l] -
          o[l] -
          t.rects.popper[c],
        w = o[l] - t.rects.reference[l],
        S = us(s),
        _ = S ? (l === "y" ? S.clientHeight || 0 : S.clientWidth || 0) : 0,
        T = m / 2 - w / 2,
        g = d[f],
        x = _ - p[c] - d[h],
        E = _ / 2 - p[c] / 2 + T,
        P = cs(g, E, x),
        k = l;
      t.modifiersData[i] = ((e = {}), (e[k] = P), (e.centerOffset = P - E), e);
    }
  }
  function wh(r) {
    var e = r.state,
      t = r.options,
      i = t.element,
      n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null &&
      ((typeof n == "string" &&
        ((n = e.elements.popper.querySelector(n)), !n)) ||
        ($c(e.elements.popper, n) && (e.elements.arrow = n)));
  }
  const _h = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: yh,
    effect: wh,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function vn(r) {
    return r.split("-")[1];
  }
  var bh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Sh(r, e) {
    var t = r.x,
      i = r.y,
      n = e.devicePixelRatio || 1;
    return { x: mn(t * n) / n || 0, y: mn(i * n) / n || 0 };
  }
  function Xc(r) {
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
      h = o.y,
      m = h === void 0 ? 0 : h,
      w = typeof c == "function" ? c({ x: f, y: m }) : { x: f, y: m };
    (f = w.x), (m = w.y);
    var S = o.hasOwnProperty("x"),
      _ = o.hasOwnProperty("y"),
      T = zt,
      g = Nt,
      x = window;
    if (u) {
      var E = us(t),
        P = "clientHeight",
        k = "clientWidth";
      if (
        (E === Qt(t) &&
          ((E = sr(t)),
          Hi(E).position !== "static" &&
            a === "absolute" &&
            ((P = "scrollHeight"), (k = "scrollWidth"))),
        (E = E),
        n === Nt || ((n === zt || n === ci) && s === as))
      ) {
        g = ui;
        var I =
          d && E === x && x.visualViewport ? x.visualViewport.height : E[P];
        (m -= I - i.height), (m *= l ? 1 : -1);
      }
      if (n === zt || ((n === Nt || n === ui) && s === as)) {
        T = ci;
        var D =
          d && E === x && x.visualViewport ? x.visualViewport.width : E[k];
        (f -= D - i.width), (f *= l ? 1 : -1);
      }
    }
    var z = Object.assign({ position: a }, u && bh),
      y = c === !0 ? Sh({ x: f, y: m }, Qt(t)) : { x: f, y: m };
    if (((f = y.x), (m = y.y), l)) {
      var L;
      return Object.assign(
        {},
        z,
        ((L = {}),
        (L[g] = _ ? "0" : ""),
        (L[T] = S ? "0" : ""),
        (L.transform =
          (x.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + m + "px)"
            : "translate3d(" + f + "px, " + m + "px, 0)"),
        L)
      );
    }
    return Object.assign(
      {},
      z,
      ((e = {}),
      (e[g] = _ ? m + "px" : ""),
      (e[T] = S ? f + "px" : ""),
      (e.transform = ""),
      e)
    );
  }
  function Th(r) {
    var e = r.state,
      t = r.options,
      i = t.gpuAcceleration,
      n = i === void 0 ? !0 : i,
      s = t.adaptive,
      o = s === void 0 ? !0 : s,
      a = t.roundOffsets,
      l = a === void 0 ? !0 : a,
      u = {
        placement: ki(e.placement),
        variation: vn(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: n,
        isFixed: e.options.strategy === "fixed",
      };
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        Xc(
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
          Xc(
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
  const xh = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Th,
    data: {},
  };
  var uo = { passive: !0 };
  function Ch(r) {
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
          c.addEventListener("scroll", t.update, uo);
        }),
      a && l.addEventListener("resize", t.update, uo),
      function () {
        s &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", t.update, uo);
          }),
          a && l.removeEventListener("resize", t.update, uo);
      }
    );
  }
  const Eh = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Ch,
    data: {},
  };
  var Ph = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function co(r) {
    return r.replace(/left|right|bottom|top/g, function (e) {
      return Ph[e];
    });
  }
  var Ah = { start: "end", end: "start" };
  function Yc(r) {
    return r.replace(/start|end/g, function (e) {
      return Ah[e];
    });
  }
  function Za(r) {
    var e = Qt(r),
      t = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: t, scrollTop: i };
  }
  function Ja(r) {
    return gn(sr(r)).left + Za(r).scrollLeft;
  }
  function kh(r, e) {
    var t = Qt(r),
      i = sr(r),
      n = t.visualViewport,
      s = i.clientWidth,
      o = i.clientHeight,
      a = 0,
      l = 0;
    if (n) {
      (s = n.width), (o = n.height);
      var u = Vc();
      (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
    }
    return { width: s, height: o, x: a + Ja(r), y: l };
  }
  function Lh(r) {
    var e,
      t = sr(r),
      i = Za(r),
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
      a = -i.scrollLeft + Ja(r),
      l = -i.scrollTop;
    return (
      Hi(n || t).direction === "rtl" &&
        (a += Ir(t.clientWidth, n ? n.clientWidth : 0) - s),
      { width: s, height: o, x: a, y: l }
    );
  }
  function el(r) {
    var e = Hi(r),
      t = e.overflow,
      i = e.overflowX,
      n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + n + i);
  }
  function Uc(r) {
    return ["html", "body", "#document"].indexOf(Ai(r)) >= 0
      ? r.ownerDocument.body
      : di(r) && el(r)
      ? r
      : Uc(lo(r));
  }
  function ds(r, e) {
    var t;
    e === void 0 && (e = []);
    var i = Uc(r),
      n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
      s = Qt(i),
      o = n ? [s].concat(s.visualViewport || [], el(i) ? i : []) : i,
      a = e.concat(o);
    return n ? a : a.concat(ds(lo(o)));
  }
  function tl(r) {
    return Object.assign({}, r, {
      left: r.x,
      top: r.y,
      right: r.x + r.width,
      bottom: r.y + r.height,
    });
  }
  function Oh(r, e) {
    var t = gn(r, !1, e === "fixed");
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
  function Kc(r, e, t) {
    return e === zc ? tl(kh(r, t)) : Dr(e) ? Oh(e, t) : tl(Lh(sr(r)));
  }
  function Mh(r) {
    var e = ds(lo(r)),
      t = ["absolute", "fixed"].indexOf(Hi(r).position) >= 0,
      i = t && di(r) ? us(r) : r;
    return Dr(i)
      ? e.filter(function (n) {
          return Dr(n) && $c(n, i) && Ai(n) !== "body";
        })
      : [];
  }
  function Dh(r, e, t, i) {
    var n = e === "clippingParents" ? Mh(r) : [].concat(e),
      s = [].concat(n, [t]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = Kc(r, u, i);
        return (
          (l.top = Ir(c.top, l.top)),
          (l.right = ao(c.right, l.right)),
          (l.bottom = ao(c.bottom, l.bottom)),
          (l.left = Ir(c.left, l.left)),
          l
        );
      }, Kc(r, o, i));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function Qc(r) {
    var e = r.reference,
      t = r.element,
      i = r.placement,
      n = i ? ki(i) : null,
      s = i ? vn(i) : null,
      o = e.x + e.width / 2 - t.width / 2,
      a = e.y + e.height / 2 - t.height / 2,
      l;
    switch (n) {
      case Nt:
        l = { x: o, y: e.y - t.height };
        break;
      case ui:
        l = { x: o, y: e.y + e.height };
        break;
      case ci:
        l = { x: e.x + e.width, y: a };
        break;
      case zt:
        l = { x: e.x - t.width, y: a };
        break;
      default:
        l = { x: e.x, y: e.y };
    }
    var u = n ? Qa(n) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (s) {
        case hn:
          l[u] = l[u] - (e[c] / 2 - t[c] / 2);
          break;
        case as:
          l[u] = l[u] + (e[c] / 2 - t[c] / 2);
          break;
      }
    }
    return l;
  }
  function fs(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = i === void 0 ? r.placement : i,
      s = t.strategy,
      o = s === void 0 ? r.strategy : s,
      a = t.boundary,
      l = a === void 0 ? eh : a,
      u = t.rootBoundary,
      c = u === void 0 ? zc : u,
      d = t.elementContext,
      p = d === void 0 ? ls : d,
      f = t.altBoundary,
      h = f === void 0 ? !1 : f,
      m = t.padding,
      w = m === void 0 ? 0 : m,
      S = jc(typeof w != "number" ? w : Gc(w, os)),
      _ = p === ls ? th : ls,
      T = r.rects.popper,
      g = r.elements[h ? _ : p],
      x = Dh(Dr(g) ? g : g.contextElement || sr(r.elements.popper), l, c, o),
      E = gn(r.elements.reference),
      P = Qc({ reference: E, element: T, strategy: "absolute", placement: n }),
      k = tl(Object.assign({}, T, P)),
      I = p === ls ? k : E,
      D = {
        top: x.top - I.top + S.top,
        bottom: I.bottom - x.bottom + S.bottom,
        left: x.left - I.left + S.left,
        right: I.right - x.right + S.right,
      },
      z = r.modifiersData.offset;
    if (p === ls && z) {
      var y = z[n];
      Object.keys(D).forEach(function (L) {
        var v = [ci, ui].indexOf(L) >= 0 ? 1 : -1,
          b = [Nt, ui].indexOf(L) >= 0 ? "y" : "x";
        D[L] += y[b] * v;
      });
    }
    return D;
  }
  function Ih(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = t.boundary,
      s = t.rootBoundary,
      o = t.padding,
      a = t.flipVariations,
      l = t.allowedAutoPlacements,
      u = l === void 0 ? Bc : l,
      c = vn(i),
      d = c
        ? a
          ? Fc
          : Fc.filter(function (h) {
              return vn(h) === c;
            })
        : os,
      p = d.filter(function (h) {
        return u.indexOf(h) >= 0;
      });
    p.length === 0 && (p = d);
    var f = p.reduce(function (h, m) {
      return (
        (h[m] = fs(r, {
          placement: m,
          boundary: n,
          rootBoundary: s,
          padding: o,
        })[ki(m)]),
        h
      );
    }, {});
    return Object.keys(f).sort(function (h, m) {
      return f[h] - f[m];
    });
  }
  function Rh(r) {
    if (ki(r) === Xa) return [];
    var e = co(r);
    return [Yc(r), e, Yc(e)];
  }
  function Nh(r) {
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
          h = f === void 0 ? !0 : f,
          m = t.allowedAutoPlacements,
          w = e.options.placement,
          S = ki(w),
          _ = S === w,
          T = l || (_ || !h ? [co(w)] : Rh(w)),
          g = [w].concat(T).reduce(function (ee, W) {
            return ee.concat(
              ki(W) === Xa
                ? Ih(e, {
                    placement: W,
                    boundary: c,
                    rootBoundary: d,
                    padding: u,
                    flipVariations: h,
                    allowedAutoPlacements: m,
                  })
                : W
            );
          }, []),
          x = e.rects.reference,
          E = e.rects.popper,
          P = new Map(),
          k = !0,
          I = g[0],
          D = 0;
        D < g.length;
        D++
      ) {
        var z = g[D],
          y = ki(z),
          L = vn(z) === hn,
          v = [Nt, ui].indexOf(y) >= 0,
          b = v ? "width" : "height",
          C = fs(e, {
            placement: z,
            boundary: c,
            rootBoundary: d,
            altBoundary: p,
            padding: u,
          }),
          O = v ? (L ? ci : zt) : L ? ui : Nt;
        x[b] > E[b] && (O = co(O));
        var M = co(O),
          R = [];
        if (
          (s && R.push(C[y] <= 0),
          a && R.push(C[O] <= 0, C[M] <= 0),
          R.every(function (ee) {
            return ee;
          }))
        ) {
          (I = z), (k = !1);
          break;
        }
        P.set(z, R);
      }
      if (k)
        for (
          var A = h ? 3 : 1,
            q = function (W) {
              var U = g.find(function (j) {
                var de = P.get(j);
                if (de)
                  return de.slice(0, W).every(function (_e) {
                    return _e;
                  });
              });
              if (U) return (I = U), "break";
            },
            $ = A;
          $ > 0;
          $--
        ) {
          var Y = q($);
          if (Y === "break") break;
        }
      e.placement !== I &&
        ((e.modifiersData[i]._skip = !0), (e.placement = I), (e.reset = !0));
    }
  }
  const zh = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Nh,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Zc(r, e, t) {
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
  function Jc(r) {
    return [Nt, ci, ui, zt].some(function (e) {
      return r[e] >= 0;
    });
  }
  function Fh(r) {
    var e = r.state,
      t = r.name,
      i = e.rects.reference,
      n = e.rects.popper,
      s = e.modifiersData.preventOverflow,
      o = fs(e, { elementContext: "reference" }),
      a = fs(e, { altBoundary: !0 }),
      l = Zc(o, i),
      u = Zc(a, n, s),
      c = Jc(l),
      d = Jc(u);
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
  const Bh = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Fh,
  };
  function qh(r, e, t) {
    var i = ki(r),
      n = [zt, Nt].indexOf(i) >= 0 ? -1 : 1,
      s =
        typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
      o = s[0],
      a = s[1];
    return (
      (o = o || 0),
      (a = (a || 0) * n),
      [zt, ci].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function Vh(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.offset,
      s = n === void 0 ? [0, 0] : n,
      o = Bc.reduce(function (c, d) {
        return (c[d] = qh(d, e.rects, s)), c;
      }, {}),
      a = o[e.placement],
      l = a.x,
      u = a.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += l),
      (e.modifiersData.popperOffsets.y += u)),
      (e.modifiersData[i] = o);
  }
  const $h = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Vh,
  };
  function Hh(r) {
    var e = r.state,
      t = r.name;
    e.modifiersData[t] = Qc({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const Wh = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Hh,
    data: {},
  };
  function jh(r) {
    return r === "x" ? "y" : "x";
  }
  function Gh(r) {
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
      h = t.tetherOffset,
      m = h === void 0 ? 0 : h,
      w = fs(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
      S = ki(e.placement),
      _ = vn(e.placement),
      T = !_,
      g = Qa(S),
      x = jh(g),
      E = e.modifiersData.popperOffsets,
      P = e.rects.reference,
      k = e.rects.popper,
      I =
        typeof m == "function"
          ? m(Object.assign({}, e.rects, { placement: e.placement }))
          : m,
      D =
        typeof I == "number"
          ? { mainAxis: I, altAxis: I }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, I),
      z = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      y = { x: 0, y: 0 };
    if (E) {
      if (s) {
        var L,
          v = g === "y" ? Nt : zt,
          b = g === "y" ? ui : ci,
          C = g === "y" ? "height" : "width",
          O = E[g],
          M = O + w[v],
          R = O - w[b],
          A = f ? -k[C] / 2 : 0,
          q = _ === hn ? P[C] : k[C],
          $ = _ === hn ? -k[C] : -P[C],
          Y = e.elements.arrow,
          ee = f && Y ? Ka(Y) : { width: 0, height: 0 },
          W = e.modifiersData["arrow#persistent"]
            ? e.modifiersData["arrow#persistent"].padding
            : Wc(),
          U = W[v],
          j = W[b],
          de = cs(0, P[C], ee[C]),
          _e = T ? P[C] / 2 - A - de - U - D.mainAxis : q - de - U - D.mainAxis,
          Te = T
            ? -P[C] / 2 + A + de + j + D.mainAxis
            : $ + de + j + D.mainAxis,
          Oe = e.elements.arrow && us(e.elements.arrow),
          He = Oe ? (g === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0) : 0,
          ae = (L = z?.[g]) != null ? L : 0,
          be = O + _e - ae - He,
          We = O + Te - ae,
          je = cs(f ? ao(M, be) : M, O, f ? Ir(R, We) : R);
        (E[g] = je), (y[g] = je - O);
      }
      if (a) {
        var N,
          Ze = g === "x" ? Nt : zt,
          Bt = g === "x" ? ui : ci,
          Je = E[x],
          pe = x === "y" ? "height" : "width",
          kt = Je + w[Ze],
          ht = Je - w[Bt],
          Jt = [Nt, zt].indexOf(S) !== -1,
          Ae = (N = z?.[x]) != null ? N : 0,
          ei = Jt ? kt : Je - P[pe] - k[pe] - Ae + D.altAxis,
          Se = Jt ? Je + P[pe] + k[pe] - Ae - D.altAxis : ht,
          mt = f && Jt ? gh(ei, Je, Se) : cs(f ? ei : kt, Je, f ? Se : ht);
        (E[x] = mt), (y[x] = mt - Je);
      }
      e.modifiersData[i] = y;
    }
  }
  const Xh = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Gh,
    requiresIfExists: ["offset"],
  };
  function Yh(r) {
    return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
  }
  function Uh(r) {
    return r === Qt(r) || !di(r) ? Za(r) : Yh(r);
  }
  function Kh(r) {
    var e = r.getBoundingClientRect(),
      t = mn(e.width) / r.offsetWidth || 1,
      i = mn(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1;
  }
  function Qh(r, e, t) {
    t === void 0 && (t = !1);
    var i = di(e),
      n = di(e) && Kh(e),
      s = sr(e),
      o = gn(r, n, t),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !t)) &&
        ((Ai(e) !== "body" || el(s)) && (a = Uh(e)),
        di(e)
          ? ((l = gn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
          : s && (l.x = Ja(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function Zh(r) {
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
  function Jh(r) {
    var e = Zh(r);
    return dh.reduce(function (t, i) {
      return t.concat(
        e.filter(function (n) {
          return n.phase === i;
        })
      );
    }, []);
  }
  function em(r) {
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
  function tm(r) {
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
  var ed = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function td() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return !e.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function im(r) {
    r === void 0 && (r = {});
    var e = r,
      t = e.defaultModifiers,
      i = t === void 0 ? [] : t,
      n = e.defaultOptions,
      s = n === void 0 ? ed : n;
    return function (a, l, u) {
      u === void 0 && (u = s);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ed, s),
          modifiersData: {},
          elements: { reference: a, popper: l },
          attributes: {},
          styles: {},
        },
        d = [],
        p = !1,
        f = {
          state: c,
          setOptions: function (S) {
            var _ = typeof S == "function" ? S(c.options) : S;
            m(),
              (c.options = Object.assign({}, s, c.options, _)),
              (c.scrollParents = {
                reference: Dr(a)
                  ? ds(a)
                  : a.contextElement
                  ? ds(a.contextElement)
                  : [],
                popper: ds(l),
              });
            var T = Jh(tm([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = T.filter(function (g) {
                return g.enabled;
              })),
              h(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var S = c.elements,
                _ = S.reference,
                T = S.popper;
              if (td(_, T)) {
                (c.rects = {
                  reference: Qh(_, us(T), c.options.strategy === "fixed"),
                  popper: Ka(T),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (D) {
                    return (c.modifiersData[D.name] = Object.assign(
                      {},
                      D.data
                    ));
                  });
                for (var g = 0; g < c.orderedModifiers.length; g++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (g = -1);
                    continue;
                  }
                  var x = c.orderedModifiers[g],
                    E = x.fn,
                    P = x.options,
                    k = P === void 0 ? {} : P,
                    I = x.name;
                  typeof E == "function" &&
                    (c =
                      E({ state: c, options: k, name: I, instance: f }) || c);
                }
              }
            }
          },
          update: em(function () {
            return new Promise(function (w) {
              f.forceUpdate(), w(c);
            });
          }),
          destroy: function () {
            m(), (p = !0);
          },
        };
      if (!td(a, l)) return f;
      f.setOptions(u).then(function (w) {
        !p && u.onFirstUpdate && u.onFirstUpdate(w);
      });
      function h() {
        c.orderedModifiers.forEach(function (w) {
          var S = w.name,
            _ = w.options,
            T = _ === void 0 ? {} : _,
            g = w.effect;
          if (typeof g == "function") {
            var x = g({ state: c, name: S, instance: f, options: T }),
              E = function () {};
            d.push(x || E);
          }
        });
      }
      function m() {
        d.forEach(function (w) {
          return w();
        }),
          (d = []);
      }
      return f;
    };
  }
  var rm = [Eh, Wh, xh, qc, $h, zh, Xh, _h, Bh],
    nm = im({ defaultModifiers: rm }),
    sm = "tippy-box",
    id = "tippy-content",
    om = "tippy-backdrop",
    rd = "tippy-arrow",
    nd = "tippy-svg-arrow",
    Rr = { passive: !0, capture: !0 },
    sd = function () {
      return document.body;
    };
  function il(r, e, t) {
    if (Array.isArray(r)) {
      var i = r[e];
      return i ?? (Array.isArray(t) ? t[e] : t);
    }
    return r;
  }
  function rl(r, e) {
    var t = {}.toString.call(r);
    return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
  }
  function od(r, e) {
    return typeof r == "function" ? r.apply(void 0, e) : r;
  }
  function ad(r, e) {
    if (e === 0) return r;
    var t;
    return function (i) {
      clearTimeout(t),
        (t = setTimeout(function () {
          r(i);
        }, e));
    };
  }
  function am(r) {
    return r.split(/\s+/).filter(Boolean);
  }
  function yn(r) {
    return [].concat(r);
  }
  function ld(r, e) {
    r.indexOf(e) === -1 && r.push(e);
  }
  function lm(r) {
    return r.filter(function (e, t) {
      return r.indexOf(e) === t;
    });
  }
  function um(r) {
    return r.split("-")[0];
  }
  function fo(r) {
    return [].slice.call(r);
  }
  function ud(r) {
    return Object.keys(r).reduce(function (e, t) {
      return r[t] !== void 0 && (e[t] = r[t]), e;
    }, {});
  }
  function ps() {
    return document.createElement("div");
  }
  function po(r) {
    return ["Element", "Fragment"].some(function (e) {
      return rl(r, e);
    });
  }
  function cm(r) {
    return rl(r, "NodeList");
  }
  function dm(r) {
    return rl(r, "MouseEvent");
  }
  function fm(r) {
    return !!(r && r._tippy && r._tippy.reference === r);
  }
  function pm(r) {
    return po(r)
      ? [r]
      : cm(r)
      ? fo(r)
      : Array.isArray(r)
      ? r
      : fo(document.querySelectorAll(r));
  }
  function nl(r, e) {
    r.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function cd(r, e) {
    r.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function hm(r) {
    var e,
      t = yn(r),
      i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body
      ? i.ownerDocument
      : document;
  }
  function mm(r, e) {
    var t = e.clientX,
      i = e.clientY;
    return r.every(function (n) {
      var s = n.popperRect,
        o = n.popperState,
        a = n.props,
        l = a.interactiveBorder,
        u = um(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var d = u === "bottom" ? c.top.y : 0,
        p = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        h = u === "left" ? c.right.x : 0,
        m = s.top - i + d > l,
        w = i - s.bottom - p > l,
        S = s.left - t + f > l,
        _ = t - s.right - h > l;
      return m || w || S || _;
    });
  }
  function sl(r, e, t) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
      r[i](n, t);
    });
  }
  function dd(r, e) {
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
  var Li = { isTouch: !1 },
    fd = 0;
  function gm() {
    Li.isTouch ||
      ((Li.isTouch = !0),
      window.performance && document.addEventListener("mousemove", pd));
  }
  function pd() {
    var r = performance.now();
    r - fd < 20 &&
      ((Li.isTouch = !1), document.removeEventListener("mousemove", pd)),
      (fd = r);
  }
  function vm() {
    var r = document.activeElement;
    if (fm(r)) {
      var e = r._tippy;
      r.blur && !e.state.isVisible && r.blur();
    }
  }
  function ym() {
    document.addEventListener("touchstart", gm, Rr),
      window.addEventListener("blur", vm);
  }
  var wm = typeof window < "u" && typeof document < "u",
    _m = wm ? !!window.msCrypto : !1,
    bm = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Sm = {
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
        appendTo: sd,
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
      bm,
      Sm
    ),
    Tm = Object.keys(mi),
    xm = function (e) {
      var t = Object.keys(e);
      t.forEach(function (i) {
        mi[i] = e[i];
      });
    };
  function hd(r) {
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
  function Cm(r, e) {
    var t = e ? Object.keys(hd(Object.assign({}, mi, { plugins: e }))) : Tm,
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
  function md(r, e) {
    var t = Object.assign(
      {},
      e,
      { content: od(e.content, [r]) },
      e.ignoreAttributes ? {} : Cm(r, e.plugins)
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
  var Em = function () {
    return "innerHTML";
  };
  function ol(r, e) {
    r[Em()] = e;
  }
  function gd(r) {
    var e = ps();
    return (
      r === !0
        ? (e.className = rd)
        : ((e.className = nd), po(r) ? e.appendChild(r) : ol(e, r)),
      e
    );
  }
  function vd(r, e) {
    po(e.content)
      ? (ol(r, ""), r.appendChild(e.content))
      : typeof e.content != "function" &&
        (e.allowHTML ? ol(r, e.content) : (r.textContent = e.content));
  }
  function al(r) {
    var e = r.firstElementChild,
      t = fo(e.children);
    return {
      box: e,
      content: t.find(function (i) {
        return i.classList.contains(id);
      }),
      arrow: t.find(function (i) {
        return i.classList.contains(rd) || i.classList.contains(nd);
      }),
      backdrop: t.find(function (i) {
        return i.classList.contains(om);
      }),
    };
  }
  function yd(r) {
    var e = ps(),
      t = ps();
    (t.className = sm),
      t.setAttribute("data-state", "hidden"),
      t.setAttribute("tabindex", "-1");
    var i = ps();
    (i.className = id),
      i.setAttribute("data-state", "hidden"),
      vd(i, r.props),
      e.appendChild(t),
      t.appendChild(i),
      n(r.props, r.props);
    function n(s, o) {
      var a = al(e),
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
          vd(u, r.props),
        o.arrow
          ? c
            ? s.arrow !== o.arrow &&
              (l.removeChild(c), l.appendChild(gd(o.arrow)))
            : l.appendChild(gd(o.arrow))
          : c && l.removeChild(c);
    }
    return { popper: e, onUpdate: n };
  }
  yd.$$tippy = !0;
  var Pm = 1,
    ho = [],
    ll = [];
  function Am(r, e) {
    var t = md(r, Object.assign({}, mi, hd(ud(e)))),
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
      h = ad(be, t.interactiveDebounce),
      m,
      w = Pm++,
      S = null,
      _ = lm(t.plugins),
      T = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1,
      },
      g = {
        id: w,
        reference: r,
        popper: ps(),
        popperInstance: S,
        props: t,
        state: T,
        plugins: _,
        clearDelayTimeouts: ei,
        setProps: Se,
        setContent: mt,
        show: qt,
        hide: gi,
        hideWithInteractivity: qr,
        enable: Jt,
        disable: Ae,
        unmount: Me,
        destroy: En,
      };
    if (!t.render) return g;
    var x = t.render(g),
      E = x.popper,
      P = x.onUpdate;
    E.setAttribute("data-tippy-root", ""),
      (E.id = "tippy-" + g.id),
      (g.popper = E),
      (r._tippy = g),
      (E._tippy = g);
    var k = _.map(function (F) {
        return F.fn(g);
      }),
      I = r.hasAttribute("aria-expanded");
    return (
      Oe(),
      A(),
      O(),
      M("onCreate", [g]),
      t.showOnCreate && kt(),
      E.addEventListener("mouseenter", function () {
        g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
      }),
      E.addEventListener("mouseleave", function () {
        g.props.interactive &&
          g.props.trigger.indexOf("mouseenter") >= 0 &&
          v().addEventListener("mousemove", h);
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
    function y() {
      var F;
      return !!((F = g.props.render) != null && F.$$tippy);
    }
    function L() {
      return m || r;
    }
    function v() {
      var F = L().parentNode;
      return F ? hm(F) : document;
    }
    function b() {
      return al(E);
    }
    function C(F) {
      return (g.state.isMounted && !g.state.isVisible) ||
        Li.isTouch ||
        (c && c.type === "focus")
        ? 0
        : il(g.props.delay, F ? 0 : 1, mi.delay);
    }
    function O(F) {
      F === void 0 && (F = !1),
        (E.style.pointerEvents = g.props.interactive && !F ? "" : "none"),
        (E.style.zIndex = "" + g.props.zIndex);
    }
    function M(F, G, Q) {
      if (
        (Q === void 0 && (Q = !0),
        k.forEach(function (se) {
          se[F] && se[F].apply(se, G);
        }),
        Q)
      ) {
        var ce;
        (ce = g.props)[F].apply(ce, G);
      }
    }
    function R() {
      var F = g.props.aria;
      if (F.content) {
        var G = "aria-" + F.content,
          Q = E.id,
          ce = yn(g.props.triggerTarget || r);
        ce.forEach(function (se) {
          var Z = se.getAttribute(G);
          if (g.state.isVisible) se.setAttribute(G, Z ? Z + " " + Q : Q);
          else {
            var qe = Z && Z.replace(Q, "").trim();
            qe ? se.setAttribute(G, qe) : se.removeAttribute(G);
          }
        });
      }
    }
    function A() {
      if (!(I || !g.props.aria.expanded)) {
        var F = yn(g.props.triggerTarget || r);
        F.forEach(function (G) {
          g.props.interactive
            ? G.setAttribute(
                "aria-expanded",
                g.state.isVisible && G === L() ? "true" : "false"
              )
            : G.removeAttribute("aria-expanded");
        });
      }
    }
    function q() {
      v().removeEventListener("mousemove", h),
        (ho = ho.filter(function (F) {
          return F !== h;
        }));
    }
    function $(F) {
      if (!(Li.isTouch && (l || F.type === "mousedown"))) {
        var G = (F.composedPath && F.composedPath()[0]) || F.target;
        if (!(g.props.interactive && dd(E, G))) {
          if (
            yn(g.props.triggerTarget || r).some(function (Q) {
              return dd(Q, G);
            })
          ) {
            if (
              Li.isTouch ||
              (g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
            )
              return;
          } else M("onClickOutside", [g, F]);
          g.props.hideOnClick === !0 &&
            (g.clearDelayTimeouts(),
            g.hide(),
            (a = !0),
            setTimeout(function () {
              a = !1;
            }),
            g.state.isMounted || U());
        }
      }
    }
    function Y() {
      l = !0;
    }
    function ee() {
      l = !1;
    }
    function W() {
      var F = v();
      F.addEventListener("mousedown", $, !0),
        F.addEventListener("touchend", $, Rr),
        F.addEventListener("touchstart", ee, Rr),
        F.addEventListener("touchmove", Y, Rr);
    }
    function U() {
      var F = v();
      F.removeEventListener("mousedown", $, !0),
        F.removeEventListener("touchend", $, Rr),
        F.removeEventListener("touchstart", ee, Rr),
        F.removeEventListener("touchmove", Y, Rr);
    }
    function j(F, G) {
      _e(F, function () {
        !g.state.isVisible && E.parentNode && E.parentNode.contains(E) && G();
      });
    }
    function de(F, G) {
      _e(F, G);
    }
    function _e(F, G) {
      var Q = b().box;
      function ce(se) {
        se.target === Q && (sl(Q, "remove", ce), G());
      }
      if (F === 0) return G();
      sl(Q, "remove", d), sl(Q, "add", ce), (d = ce);
    }
    function Te(F, G, Q) {
      Q === void 0 && (Q = !1);
      var ce = yn(g.props.triggerTarget || r);
      ce.forEach(function (se) {
        se.addEventListener(F, G, Q),
          f.push({ node: se, eventType: F, handler: G, options: Q });
      });
    }
    function Oe() {
      z() &&
        (Te("touchstart", ae, { passive: !0 }),
        Te("touchend", We, { passive: !0 })),
        am(g.props.trigger).forEach(function (F) {
          if (F !== "manual")
            switch ((Te(F, ae), F)) {
              case "mouseenter":
                Te("mouseleave", We);
                break;
              case "focus":
                Te(_m ? "focusout" : "blur", je);
                break;
              case "focusin":
                Te("focusout", je);
                break;
            }
        });
    }
    function He() {
      f.forEach(function (F) {
        var G = F.node,
          Q = F.eventType,
          ce = F.handler,
          se = F.options;
        G.removeEventListener(Q, ce, se);
      }),
        (f = []);
    }
    function ae(F) {
      var G,
        Q = !1;
      if (!(!g.state.isEnabled || N(F) || a)) {
        var ce = ((G = c) == null ? void 0 : G.type) === "focus";
        (c = F),
          (m = F.currentTarget),
          A(),
          !g.state.isVisible &&
            dm(F) &&
            ho.forEach(function (se) {
              return se(F);
            }),
          F.type === "click" &&
          (g.props.trigger.indexOf("mouseenter") < 0 || o) &&
          g.props.hideOnClick !== !1 &&
          g.state.isVisible
            ? (Q = !0)
            : kt(F),
          F.type === "click" && (o = !Q),
          Q && !ce && ht(F);
      }
    }
    function be(F) {
      var G = F.target,
        Q = L().contains(G) || E.contains(G);
      if (!(F.type === "mousemove" && Q)) {
        var ce = pe()
          .concat(E)
          .map(function (se) {
            var Z,
              qe = se._tippy,
              et = (Z = qe.popperInstance) == null ? void 0 : Z.state;
            return et
              ? {
                  popperRect: se.getBoundingClientRect(),
                  popperState: et,
                  props: t,
                }
              : null;
          })
          .filter(Boolean);
        mm(ce, F) && (q(), ht(F));
      }
    }
    function We(F) {
      var G = N(F) || (g.props.trigger.indexOf("click") >= 0 && o);
      if (!G) {
        if (g.props.interactive) {
          g.hideWithInteractivity(F);
          return;
        }
        ht(F);
      }
    }
    function je(F) {
      (g.props.trigger.indexOf("focusin") < 0 && F.target !== L()) ||
        (g.props.interactive &&
          F.relatedTarget &&
          E.contains(F.relatedTarget)) ||
        ht(F);
    }
    function N(F) {
      return Li.isTouch ? z() !== F.type.indexOf("touch") >= 0 : !1;
    }
    function Ze() {
      Bt();
      var F = g.props,
        G = F.popperOptions,
        Q = F.placement,
        ce = F.offset,
        se = F.getReferenceClientRect,
        Z = F.moveTransition,
        qe = y() ? al(E).arrow : null,
        et = se
          ? {
              getBoundingClientRect: se,
              contextElement: se.contextElement || L(),
            }
          : r,
        Vt = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (yi) {
            var gt = yi.state;
            if (y()) {
              var Vr = b(),
                ie = Vr.box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                K
              ) {
                K === "placement"
                  ? ie.setAttribute("data-placement", gt.placement)
                  : gt.attributes.popper["data-popper-" + K]
                  ? ie.setAttribute("data-" + K, "")
                  : ie.removeAttribute("data-" + K);
              }),
                (gt.attributes.popper = {});
            }
          },
        },
        Ge = [
          { name: "offset", options: { offset: ce } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !Z } },
          Vt,
        ];
      y() &&
        qe &&
        Ge.push({ name: "arrow", options: { element: qe, padding: 3 } }),
        Ge.push.apply(Ge, G?.modifiers || []),
        (g.popperInstance = nm(
          et,
          E,
          Object.assign({}, G, {
            placement: Q,
            onFirstUpdate: p,
            modifiers: Ge,
          })
        ));
    }
    function Bt() {
      g.popperInstance &&
        (g.popperInstance.destroy(), (g.popperInstance = null));
    }
    function Je() {
      var F = g.props.appendTo,
        G,
        Q = L();
      (g.props.interactive && F === sd) || F === "parent"
        ? (G = Q.parentNode)
        : (G = od(F, [Q])),
        G.contains(E) || G.appendChild(E),
        (g.state.isMounted = !0),
        Ze();
    }
    function pe() {
      return fo(E.querySelectorAll("[data-tippy-root]"));
    }
    function kt(F) {
      g.clearDelayTimeouts(), F && M("onTrigger", [g, F]), W();
      var G = C(!0),
        Q = D(),
        ce = Q[0],
        se = Q[1];
      Li.isTouch && ce === "hold" && se && (G = se),
        G
          ? (i = setTimeout(function () {
              g.show();
            }, G))
          : g.show();
    }
    function ht(F) {
      if (
        (g.clearDelayTimeouts(), M("onUntrigger", [g, F]), !g.state.isVisible)
      ) {
        U();
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
        var G = C(!1);
        G
          ? (n = setTimeout(function () {
              g.state.isVisible && g.hide();
            }, G))
          : (s = requestAnimationFrame(function () {
              g.hide();
            }));
      }
    }
    function Jt() {
      g.state.isEnabled = !0;
    }
    function Ae() {
      g.hide(), (g.state.isEnabled = !1);
    }
    function ei() {
      clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
    }
    function Se(F) {
      if (!g.state.isDestroyed) {
        M("onBeforeUpdate", [g, F]), He();
        var G = g.props,
          Q = md(r, Object.assign({}, G, ud(F), { ignoreAttributes: !0 }));
        (g.props = Q),
          Oe(),
          G.interactiveDebounce !== Q.interactiveDebounce &&
            (q(), (h = ad(be, Q.interactiveDebounce))),
          G.triggerTarget && !Q.triggerTarget
            ? yn(G.triggerTarget).forEach(function (ce) {
                ce.removeAttribute("aria-expanded");
              })
            : Q.triggerTarget && r.removeAttribute("aria-expanded"),
          A(),
          O(),
          P && P(G, Q),
          g.popperInstance &&
            (Ze(),
            pe().forEach(function (ce) {
              requestAnimationFrame(ce._tippy.popperInstance.forceUpdate);
            })),
          M("onAfterUpdate", [g, F]);
      }
    }
    function mt(F) {
      g.setProps({ content: F });
    }
    function qt() {
      var F = g.state.isVisible,
        G = g.state.isDestroyed,
        Q = !g.state.isEnabled,
        ce = Li.isTouch && !g.props.touch,
        se = il(g.props.duration, 0, mi.duration);
      if (
        !(F || G || Q || ce) &&
        !L().hasAttribute("disabled") &&
        (M("onShow", [g], !1), g.props.onShow(g) !== !1)
      ) {
        if (
          ((g.state.isVisible = !0),
          y() && (E.style.visibility = "visible"),
          O(),
          W(),
          g.state.isMounted || (E.style.transition = "none"),
          y())
        ) {
          var Z = b(),
            qe = Z.box,
            et = Z.content;
          nl([qe, et], 0);
        }
        (p = function () {
          var Ge;
          if (!(!g.state.isVisible || u)) {
            if (
              ((u = !0),
              (E.style.transition = g.props.moveTransition),
              y() && g.props.animation)
            ) {
              var vi = b(),
                yi = vi.box,
                gt = vi.content;
              nl([yi, gt], se), cd([yi, gt], "visible");
            }
            R(),
              A(),
              ld(ll, g),
              (Ge = g.popperInstance) == null || Ge.forceUpdate(),
              M("onMount", [g]),
              g.props.animation &&
                y() &&
                de(se, function () {
                  (g.state.isShown = !0), M("onShown", [g]);
                });
          }
        }),
          Je();
      }
    }
    function gi() {
      var F = !g.state.isVisible,
        G = g.state.isDestroyed,
        Q = !g.state.isEnabled,
        ce = il(g.props.duration, 1, mi.duration);
      if (!(F || G || Q) && (M("onHide", [g], !1), g.props.onHide(g) !== !1)) {
        if (
          ((g.state.isVisible = !1),
          (g.state.isShown = !1),
          (u = !1),
          (o = !1),
          y() && (E.style.visibility = "hidden"),
          q(),
          U(),
          O(!0),
          y())
        ) {
          var se = b(),
            Z = se.box,
            qe = se.content;
          g.props.animation && (nl([Z, qe], ce), cd([Z, qe], "hidden"));
        }
        R(), A(), g.props.animation ? y() && j(ce, g.unmount) : g.unmount();
      }
    }
    function qr(F) {
      v().addEventListener("mousemove", h), ld(ho, h), h(F);
    }
    function Me() {
      g.state.isVisible && g.hide(),
        g.state.isMounted &&
          (Bt(),
          pe().forEach(function (F) {
            F._tippy.unmount();
          }),
          E.parentNode && E.parentNode.removeChild(E),
          (ll = ll.filter(function (F) {
            return F !== g;
          })),
          (g.state.isMounted = !1),
          M("onHidden", [g]));
    }
    function En() {
      g.state.isDestroyed ||
        (g.clearDelayTimeouts(),
        g.unmount(),
        He(),
        delete r._tippy,
        (g.state.isDestroyed = !0),
        M("onDestroy", [g]));
    }
  }
  function hs(r, e) {
    e === void 0 && (e = {});
    var t = mi.plugins.concat(e.plugins || []);
    ym();
    var i = Object.assign({}, e, { plugins: t }),
      n = pm(r),
      s = n.reduce(function (o, a) {
        var l = a && Am(a, i);
        return l && o.push(l), o;
      }, []);
    return po(r) ? s[0] : s;
  }
  (hs.defaultProps = mi),
    (hs.setDefaultProps = xm),
    (hs.currentInput = Li),
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
    }),
    hs.setDefaultProps({ render: yd });
  const km = () => {
      const r = document.querySelectorAll("[data-tooltip]"),
        e = window.innerWidth < 768;
      r.forEach((t) => {
        hs(t, {
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
      km();
    };
  V.registerPlugin(te);
  let ul = [],
    wd;
  const _d = () => {
      ul.forEach((t) => t.kill()), (ul = []);
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
          ul.push(c.scrollTrigger);
      });
    },
    Om = () => {
      _d(),
        window.addEventListener("resize", () => {
          clearTimeout(wd),
            (wd = setTimeout(() => {
              _d(), te.refresh();
            }, 150));
        });
    };
  function bd(r) {
    return (
      r !== null &&
      typeof r == "object" &&
      "constructor" in r &&
      r.constructor === Object
    );
  }
  function cl(r, e) {
    r === void 0 && (r = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof r[i] > "u"
          ? (r[i] = e[i])
          : bd(e[i]) &&
            bd(r[i]) &&
            Object.keys(e[i]).length > 0 &&
            cl(r[i], e[i]);
      });
  }
  const Sd = {
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
  function fi() {
    const r = typeof document < "u" ? document : {};
    return cl(r, Sd), r;
  }
  const Mm = {
    document: Sd,
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
  function pt() {
    const r = typeof window < "u" ? window : {};
    return cl(r, Mm), r;
  }
  function or(r) {
    return (
      r === void 0 && (r = ""),
      r
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Dm(r) {
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
  function mo(r, e) {
    return e === void 0 && (e = 0), setTimeout(r, e);
  }
  function go() {
    return Date.now();
  }
  function Im(r) {
    const e = pt();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(r, null)),
      !t && r.currentStyle && (t = r.currentStyle),
      t || (t = r.style),
      t
    );
  }
  function Rm(r, e) {
    e === void 0 && (e = "x");
    const t = pt();
    let i, n, s;
    const o = Im(r);
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
  function vo(r) {
    return (
      typeof r == "object" &&
      r !== null &&
      r.constructor &&
      Object.prototype.toString.call(r).slice(8, -1) === "Object"
    );
  }
  function Nm(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? r instanceof HTMLElement
      : r && (r.nodeType === 1 || r.nodeType === 11);
  }
  function Zt() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Nm(i)) {
        const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = n.length; s < o; s += 1) {
          const a = n[s],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (vo(r[a]) && vo(i[a])
              ? i[a].__swiper__
                ? (r[a] = i[a])
                : Zt(r[a], i[a])
              : !vo(r[a]) && vo(i[a])
              ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Zt(r[a], i[a]))
              : (r[a] = i[a]));
        }
      }
    }
    return r;
  }
  function yo(r, e, t) {
    r.style.setProperty(e, t);
  }
  function Td(r) {
    let { swiper: e, targetPosition: t, side: i } = r;
    const n = pt(),
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
        let h = s + f * (t - s);
        if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), c(h, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: h });
            }),
            n.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = n.requestAnimationFrame(d);
      };
    d();
  }
  function Oi(r, e) {
    e === void 0 && (e = "");
    const t = pt(),
      i = [...r.children];
    return (
      t.HTMLSlotElement &&
        r instanceof HTMLSlotElement &&
        i.push(...r.assignedElements()),
      e ? i.filter((n) => n.matches(e)) : i
    );
  }
  function zm(r, e) {
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
  function Fm(r, e) {
    const t = pt();
    let i = e.contains(r);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(r)), i || (i = zm(r, e))),
      i
    );
  }
  function wo(r) {
    try {
      return;
    } catch {}
  }
  function ms(r, e) {
    e === void 0 && (e = []);
    const t = document.createElement(r);
    return t.classList.add(...(Array.isArray(e) ? e : or(e))), t;
  }
  function Bm(r) {
    const e = pt(),
      t = fi(),
      i = r.getBoundingClientRect(),
      n = t.body,
      s = r.clientTop || n.clientTop || 0,
      o = r.clientLeft || n.clientLeft || 0,
      a = r === e ? e.scrollY : r.scrollTop,
      l = r === e ? e.scrollX : r.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  function qm(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
      const i = r.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function Vm(r, e) {
    const t = [];
    for (; r.nextElementSibling; ) {
      const i = r.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function ar(r, e) {
    return pt().getComputedStyle(r, null).getPropertyValue(e);
  }
  function xd(r) {
    let e = r,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function $m(r, e) {
    const t = [];
    let i = r.parentElement;
    for (; i; ) t.push(i), (i = i.parentElement);
    return t;
  }
  function Cd(r, e, t) {
    const i = pt();
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
  function Mi(r) {
    return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
  }
  let dl;
  function Hm() {
    const r = pt(),
      e = fi();
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
  function Ed() {
    return dl || (dl = Hm()), dl;
  }
  let fl;
  function Wm(r) {
    let { userAgent: e } = r === void 0 ? {} : r;
    const t = Ed(),
      i = pt(),
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
    let h = n === "MacIntel";
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
        h &&
        t.touch &&
        m.indexOf(`${a}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (h = !1)),
      u && !f && ((o.os = "android"), (o.android = !0)),
      (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function Pd(r) {
    return r === void 0 && (r = {}), fl || (fl = Wm(r)), fl;
  }
  let pl;
  function jm() {
    const r = pt(),
      e = Pd();
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
  function Ad() {
    return pl || (pl = jm()), pl;
  }
  function Gm(r) {
    let { swiper: e, on: t, emit: i } = r;
    const n = pt();
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
              let h = p,
                m = f;
              d.forEach((w) => {
                let { contentBoxSize: S, contentRect: _, target: T } = w;
                (T && T !== e.el) ||
                  ((h = _ ? _.width : (S[0] || S).inlineSize),
                  (m = _ ? _.height : (S[0] || S).blockSize));
              }),
                (h !== p || m !== f) && a();
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
      n.addEventListener("resize", a),
        n.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          n.removeEventListener("resize", a),
          n.removeEventListener("orientationchange", c);
      });
  }
  function Xm(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = [],
      o = pt(),
      a = function (c, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver,
          f = new p((h) => {
            if (e.__preventObserver__) return;
            if (h.length === 1) {
              n("observerUpdate", h[0]);
              return;
            }
            const m = function () {
              n("observerUpdate", h[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(m)
              : o.setTimeout(m, 0);
          });
        f.observe(c, {
          attributes: typeof d.attributes > "u" ? !0 : d.attributes,
          childList:
            e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          s.push(f);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = $m(e.hostEl);
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
  var Ym = {
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
  function Um() {
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
          parseInt(ar(i, "padding-left") || 0, 10) -
          parseInt(ar(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(ar(i, "padding-top") || 0, 10) -
          parseInt(ar(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(r, {
          width: e,
          height: t,
          size: r.isHorizontal() ? e : t,
        }));
  }
  function Km() {
    const r = this;
    function e(D, z) {
      return parseFloat(D.getPropertyValue(r.getDirectionLabel(z)) || 0);
    }
    const t = r.params,
      { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
      l = r.virtual && t.virtual.enabled,
      u = l ? r.virtual.slides.length : r.slides.length,
      c = Oi(n, `.${r.params.slideClass}, swiper-slide`),
      d = l ? r.virtual.slides.length : c.length;
    let p = [];
    const f = [],
      h = [];
    let m = t.slidesOffsetBefore;
    typeof m == "function" && (m = t.slidesOffsetBefore.call(r));
    let w = t.slidesOffsetAfter;
    typeof w == "function" && (w = t.slidesOffsetAfter.call(r));
    const S = r.snapGrid.length,
      _ = r.slidesGrid.length;
    let T = t.spaceBetween,
      g = -m,
      x = 0,
      E = 0;
    if (typeof s > "u") return;
    typeof T == "string" && T.indexOf("%") >= 0
      ? (T = (parseFloat(T.replace("%", "")) / 100) * s)
      : typeof T == "string" && (T = parseFloat(T)),
      (r.virtualSize = -T),
      c.forEach((D) => {
        o ? (D.style.marginLeft = "") : (D.style.marginRight = ""),
          (D.style.marginBottom = ""),
          (D.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (yo(i, "--swiper-centered-offset-before", ""),
        yo(i, "--swiper-centered-offset-after", ""));
    const P = t.grid && t.grid.rows > 1 && r.grid;
    P ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
    let k;
    const I =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (D) => typeof t.breakpoints[D].slidesPerView < "u"
      ).length > 0;
    for (let D = 0; D < d; D += 1) {
      k = 0;
      let z;
      if (
        (c[D] && (z = c[D]),
        P && r.grid.updateSlide(D, z, c),
        !(c[D] && ar(z, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          I && (c[D].style[r.getDirectionLabel("width")] = "");
          const y = getComputedStyle(z),
            L = z.style.transform,
            v = z.style.webkitTransform;
          if (
            (L && (z.style.transform = "none"),
            v && (z.style.webkitTransform = "none"),
            t.roundLengths)
          )
            k = r.isHorizontal() ? Cd(z, "width") : Cd(z, "height");
          else {
            const b = e(y, "width"),
              C = e(y, "padding-left"),
              O = e(y, "padding-right"),
              M = e(y, "margin-left"),
              R = e(y, "margin-right"),
              A = y.getPropertyValue("box-sizing");
            if (A && A === "border-box") k = b + M + R;
            else {
              const { clientWidth: q, offsetWidth: $ } = z;
              k = b + C + O + M + R + ($ - q);
            }
          }
          L && (z.style.transform = L),
            v && (z.style.webkitTransform = v),
            t.roundLengths && (k = Math.floor(k));
        } else
          (k = (s - (t.slidesPerView - 1) * T) / t.slidesPerView),
            t.roundLengths && (k = Math.floor(k)),
            c[D] && (c[D].style[r.getDirectionLabel("width")] = `${k}px`);
        c[D] && (c[D].swiperSlideSize = k),
          h.push(k),
          t.centeredSlides
            ? ((g = g + k / 2 + x / 2 + T),
              x === 0 && D !== 0 && (g = g - s / 2 - T),
              D === 0 && (g = g - s / 2 - T),
              Math.abs(g) < 1 / 1e3 && (g = 0),
              t.roundLengths && (g = Math.floor(g)),
              E % t.slidesPerGroup === 0 && p.push(g),
              f.push(g))
            : (t.roundLengths && (g = Math.floor(g)),
              (E - Math.min(r.params.slidesPerGroupSkip, E)) %
                r.params.slidesPerGroup ===
                0 && p.push(g),
              f.push(g),
              (g = g + k + T)),
          (r.virtualSize += k + T),
          (x = k),
          (E += 1);
      }
    }
    if (
      ((r.virtualSize = Math.max(r.virtualSize, s) + w),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${r.virtualSize + T}px`),
      t.setWrapperSize &&
        (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + T}px`),
      P && r.grid.updateWrapperSize(k, p),
      !t.centeredSlides)
    ) {
      const D = [];
      for (let z = 0; z < p.length; z += 1) {
        let y = p[z];
        t.roundLengths && (y = Math.floor(y)),
          p[z] <= r.virtualSize - s && D.push(y);
      }
      (p = D),
        Math.floor(r.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(r.virtualSize - s);
    }
    if (l && t.loop) {
      const D = h[0] + T;
      if (t.slidesPerGroup > 1) {
        const z = Math.ceil(
            (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
          ),
          y = D * t.slidesPerGroup;
        for (let L = 0; L < z; L += 1) p.push(p[p.length - 1] + y);
      }
      for (
        let z = 0;
        z < r.virtual.slidesBefore + r.virtual.slidesAfter;
        z += 1
      )
        t.slidesPerGroup === 1 && p.push(p[p.length - 1] + D),
          f.push(f[f.length - 1] + D),
          (r.virtualSize += D);
    }
    if ((p.length === 0 && (p = [0]), T !== 0)) {
      const D =
        r.isHorizontal() && o
          ? "marginLeft"
          : r.getDirectionLabel("marginRight");
      c.filter((z, y) =>
        !t.cssMode || t.loop ? !0 : y !== c.length - 1
      ).forEach((z) => {
        z.style[D] = `${T}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let D = 0;
      h.forEach((y) => {
        D += y + (T || 0);
      }),
        (D -= T);
      const z = D > s ? D - s : 0;
      p = p.map((y) => (y <= 0 ? -m : y > z ? z + w : y));
    }
    if (t.centerInsufficientSlides) {
      let D = 0;
      h.forEach((y) => {
        D += y + (T || 0);
      }),
        (D -= T);
      const z = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (D + z < s) {
        const y = (s - D - z) / 2;
        p.forEach((L, v) => {
          p[v] = L - y;
        }),
          f.forEach((L, v) => {
            f[v] = L + y;
          });
      }
    }
    if (
      (Object.assign(r, {
        slides: c,
        snapGrid: p,
        slidesGrid: f,
        slidesSizesGrid: h,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      yo(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        yo(
          i,
          "--swiper-centered-offset-after",
          `${r.size / 2 - h[h.length - 1] / 2}px`
        );
      const D = -r.snapGrid[0],
        z = -r.slidesGrid[0];
      (r.snapGrid = r.snapGrid.map((y) => y + D)),
        (r.slidesGrid = r.slidesGrid.map((y) => y + z));
    }
    if (
      (d !== u && r.emit("slidesLengthChange"),
      p.length !== S &&
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
  function Qm(r) {
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
  function Zm() {
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
  const kd = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function Jm(r) {
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
        p =
          (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + a),
        f = -(o - c),
        h = f + e.slidesSizesGrid[l],
        m = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
        w =
          (f >= 0 && f < e.size - 1) ||
          (h > 1 && h <= e.size) ||
          (f <= 0 && h >= e.size);
      w && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        kd(u, w, t.slideVisibleClass),
        kd(u, m, t.slideFullyVisibleClass),
        (u.progress = n ? -d : d),
        (u.originalProgress = n ? -p : p);
    }
  }
  function eg(r) {
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
        p = e.slidesGrid[c],
        f = e.slidesGrid[d],
        h = e.slidesGrid[e.slidesGrid.length - 1],
        m = Math.abs(r);
      m >= p ? (a = (m - p) / h) : (a = (m + h - f) / h), a > 1 && (a -= 1);
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
  const hl = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function tg() {
    const r = this,
      { slides: e, params: t, slidesEl: i, activeIndex: n } = r,
      s = r.virtual && t.virtual.enabled,
      o = r.grid && t.grid && t.grid.rows > 1,
      a = (d) => Oi(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
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
        ((c = Vm(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = qm(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((d) => {
        hl(d, d === l, t.slideActiveClass),
          hl(d, d === c, t.slideNextClass),
          hl(d, d === u, t.slidePrevClass);
      }),
      r.emitSlidesClasses();
  }
  const _o = (r, e) => {
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
    ml = (r, e) => {
      if (!r.slides[e]) return;
      const t = r.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    gl = (r) => {
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
            a.includes(l.column) && ml(r, u);
          });
        return;
      }
      const s = n + i - 1;
      if (r.params.rewind || r.params.loop)
        for (let o = n - e; o <= s + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < n || a > s) && ml(r, a);
        }
      else
        for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
          o !== n && (o > s || o < n) && ml(r, o);
    };
  function ig(r) {
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
  function rg(r) {
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
      let h = f - e.virtual.slidesBefore;
      return (
        h < 0 && (h = e.virtual.slides.length + h),
        h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
        h
      );
    };
    if ((typeof l > "u" && (l = ig(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
      const f = e.slides.find((m) => m.column === l);
      let h = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(h) && (h = Math.max(e.slides.indexOf(f), 0)),
        (p = Math.floor(h / n.grid.rows));
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
      e.initialized && gl(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== p && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function ng(r, e) {
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
  var sg = {
    updateSize: Um,
    updateSlides: Km,
    updateAutoHeight: Qm,
    updateSlidesOffset: Zm,
    updateSlidesProgress: Jm,
    updateProgress: eg,
    updateSlidesClasses: tg,
    updateActiveIndex: rg,
    updateClickedSlide: ng,
  };
  function og(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -n : n;
    if (t.cssMode) return n;
    let o = Rm(s, r);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function ag(r, e) {
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
  function lg() {
    return -this.snapGrid[0];
  }
  function ug() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function cg(r, e, t, i, n) {
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
            Td({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
  var dg = {
    getTranslate: og,
    setTranslate: ag,
    minTranslate: lg,
    maxTranslate: ug,
    translateTo: cg,
  };
  function fg(r, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${r}ms`),
      (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
      t.emit("setTransition", r, e);
  }
  function Ld(r) {
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
  function pg(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Ld({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
  }
  function hg(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Ld({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
  }
  var mg = { setTransition: fg, transitionStart: pg, transitionEnd: hg };
  function gg(r, e, t, i, n) {
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
      enabled: h,
    } = s;
    if (
      (!h && !i && !n) ||
      s.destroyed ||
      (s.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const m = Math.min(s.params.slidesPerGroupSkip, o);
    let w = m + Math.floor((o - m) / s.params.slidesPerGroup);
    w >= l.length && (w = l.length - 1);
    const S = -l[w];
    if (a.normalizeSlideIndex)
      for (let P = 0; P < u.length; P += 1) {
        const k = -Math.floor(S * 100),
          I = Math.floor(u[P] * 100),
          D = Math.floor(u[P + 1] * 100);
        typeof u[P + 1] < "u"
          ? k >= I && k < D - (D - I) / 2
            ? (o = P)
            : k >= I && k < D && (o = P + 1)
          : k >= I && (o = P);
      }
    if (
      s.initialized &&
      o !== d &&
      ((!s.allowSlideNext &&
        (p
          ? S > s.translate && S > s.minTranslate()
          : S < s.translate && S < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          S > s.translate &&
          S > s.maxTranslate() &&
          (d || 0) !== o))
    )
      return !1;
    o !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(S);
    let _;
    o > d ? (_ = "next") : o < d ? (_ = "prev") : (_ = "reset");
    const T = s.virtual && s.params.virtual.enabled;
    if (!(T && n) && ((p && -S === s.translate) || (!p && S === s.translate)))
      return (
        s.updateActiveIndex(o),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== "slide" && s.setTranslate(S),
        _ !== "reset" && (s.transitionStart(t, _), s.transitionEnd(t, _)),
        !1
      );
    if (a.cssMode) {
      const P = s.isHorizontal(),
        k = p ? S : -S;
      if (e === 0)
        T &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          T && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                f[P ? "scrollLeft" : "scrollTop"] = k;
              }))
            : (f[P ? "scrollLeft" : "scrollTop"] = k),
          T &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Td({ swiper: s, targetPosition: k, side: P ? "left" : "top" }), !0
          );
        f.scrollTo({ [P ? "left" : "top"]: k, behavior: "smooth" });
      }
      return !0;
    }
    const E = Ad().isSafari;
    return (
      T && !n && E && s.isElement && s.virtual.update(!1, !1, o),
      s.setTransition(e),
      s.setTranslate(S),
      s.updateActiveIndex(o),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, _),
      e === 0
        ? s.transitionEnd(t, _)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (k) {
              !s ||
                s.destroyed ||
                (k.target === this &&
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
  function vg(r, e, t, i) {
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
  function yg(r, e, t) {
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
  function wg(r, e, t) {
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
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const d = a ? i.translate : -i.translate;
    function p(_) {
      return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
    }
    const f = p(d),
      h = s.map((_) => p(_)),
      m = n.freeMode && n.freeMode.enabled;
    let w = s[h.indexOf(f) - 1];
    if (typeof w > "u" && (n.cssMode || m)) {
      let _;
      s.forEach((T, g) => {
        f >= T && (_ = g);
      }),
        typeof _ < "u" && (w = m ? s[_] : s[_ > 0 ? _ - 1 : _]);
    }
    let S = 0;
    if (
      (typeof w < "u" &&
        ((S = o.indexOf(w)),
        S < 0 && (S = i.activeIndex - 1),
        n.slidesPerView === "auto" &&
          n.slidesPerGroup === 1 &&
          n.slidesPerGroupAuto &&
          ((S = S - i.slidesPerViewDynamic("previous", !0) + 1),
          (S = Math.max(S, 0)))),
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
          i.slideTo(S, r, e, t);
        }),
        !0
      );
    return i.slideTo(S, r, e, t);
  }
  function _g(r, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof r > "u" && (r = i.params.speed),
        i.slideTo(i.activeIndex, r, e, t)
      );
  }
  function bg(r, e, t, i) {
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
  function Sg() {
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
                Oi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
              )),
              mo(() => {
                r.slideTo(n);
              }))
            : r.slideTo(n)
          : n > r.slides.length - i
          ? (r.loopFix(),
            (n = r.getSlideIndex(
              Oi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            mo(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n);
    } else r.slideTo(n);
  }
  var Tg = {
    slideTo: gg,
    slideToLoop: vg,
    slideNext: yg,
    slidePrev: wg,
    slideReset: _g,
    slideToClosest: bg,
    slideToClickedSlide: Sg,
  };
  function xg(r, e) {
    const t = this,
      { params: i, slidesEl: n } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        Oi(n, `.${i.slideClass}, swiper-slide`).forEach((p, f) => {
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
            ? ms("swiper-slide", [i.slideBlankClass])
            : ms("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(f);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const d = a - (t.slides.length % a);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        wo(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (u) {
      if (i.loopAddBlankSlides) {
        const d = i.grid.rows - (t.slides.length % i.grid.rows);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        wo(
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
  function Cg(r) {
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
        params: h,
      } = u,
      { centeredSlides: m, initialSlide: w } = h;
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
        (u.allowSlideNext = p),
        u.emit("loopFix");
      return;
    }
    let S = h.slidesPerView;
    S === "auto"
      ? (S = u.slidesPerViewDynamic())
      : ((S = Math.ceil(parseFloat(h.slidesPerView, 10))),
        m && S % 2 === 0 && (S = S + 1));
    const _ = h.slidesPerGroupAuto ? S : h.slidesPerGroup;
    let T = _;
    T % _ !== 0 && (T += _ - (T % _)),
      (T += h.loopAdditionalSlides),
      (u.loopedSlides = T);
    const g = u.grid && h.grid && h.grid.rows > 1;
    c.length < S + T || (u.params.effect === "cards" && c.length < S + T * 2)
      ? wo(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : g &&
        h.grid.fill === "row" &&
        wo(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const x = [],
      E = [],
      P = g ? Math.ceil(c.length / h.grid.rows) : c.length,
      k = o && P - w < S && !m;
    let I = k ? w : u.activeIndex;
    typeof s > "u"
      ? (s = u.getSlideIndex(
          c.find((C) => C.classList.contains(h.slideActiveClass))
        ))
      : (I = s);
    const D = i === "next" || !i,
      z = i === "prev" || !i;
    let y = 0,
      L = 0;
    const b = (g ? c[s].column : s) + (m && typeof n > "u" ? -S / 2 + 0.5 : 0);
    if (b < T) {
      y = Math.max(T - b, _);
      for (let C = 0; C < T - b; C += 1) {
        const O = C - Math.floor(C / P) * P;
        if (g) {
          const M = P - O - 1;
          for (let R = c.length - 1; R >= 0; R -= 1)
            c[R].column === M && x.push(R);
        } else x.push(P - O - 1);
      }
    } else if (b + S > P - T) {
      (L = Math.max(b - (P - T * 2), _)), k && (L = Math.max(L, S - P + w + 1));
      for (let C = 0; C < L; C += 1) {
        const O = C - Math.floor(C / P) * P;
        g
          ? c.forEach((M, R) => {
              M.column === O && E.push(R);
            })
          : E.push(O);
      }
    }
    if (
      ((u.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        u.__preventObserver__ = !1;
      }),
      u.params.effect === "cards" &&
        c.length < S + T * 2 &&
        (E.includes(s) && E.splice(E.indexOf(s), 1),
        x.includes(s) && x.splice(x.indexOf(s), 1)),
      z &&
        x.forEach((C) => {
          (c[C].swiperLoopMoveDOM = !0),
            f.prepend(c[C]),
            (c[C].swiperLoopMoveDOM = !1);
        }),
      D &&
        E.forEach((C) => {
          (c[C].swiperLoopMoveDOM = !0),
            f.append(c[C]),
            (c[C].swiperLoopMoveDOM = !1);
        }),
      u.recalcSlides(),
      h.slidesPerView === "auto"
        ? u.updateSlides()
        : g &&
          ((x.length > 0 && z) || (E.length > 0 && D)) &&
          u.slides.forEach((C, O) => {
            u.grid.updateSlide(O, C, u.slides);
          }),
      h.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (x.length > 0 && z) {
        if (typeof e > "u") {
          const C = u.slidesGrid[I],
            M = u.slidesGrid[I + y] - C;
          l
            ? u.setTranslate(u.translate - M)
            : (u.slideTo(I + Math.ceil(y), 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - M),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - M)));
        } else if (n) {
          const C = g ? x.length / h.grid.rows : x.length;
          u.slideTo(u.activeIndex + C, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (E.length > 0 && D)
        if (typeof e > "u") {
          const C = u.slidesGrid[I],
            M = u.slidesGrid[I - L] - C;
          l
            ? u.setTranslate(u.translate - M)
            : (u.slideTo(I - L, 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - M),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - M)));
        } else {
          const C = g ? E.length / h.grid.rows : E.length;
          u.slideTo(u.activeIndex - C, 0, !1, !0);
        }
    }
    if (
      ((u.allowSlidePrev = d),
      (u.allowSlideNext = p),
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
        ? u.controller.control.forEach((O) => {
            !O.destroyed &&
              O.params.loop &&
              O.loopFix({
                ...C,
                slideTo: O.params.slidesPerView === h.slidesPerView ? t : !1,
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
  function Eg() {
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
  var Pg = { loopCreate: xg, loopFix: Cg, loopDestroy: Eg };
  function Ag(r) {
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
  function kg() {
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
  var Lg = { setGrabCursor: Ag, unsetGrabCursor: kg };
  function Og(r, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === fi() || i === pt()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const n = i.closest(r);
      return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Od(r, e, t) {
    const i = pt(),
      { params: n } = r,
      s = n.edgeSwipeDetection,
      o = n.edgeSwipeThreshold;
    return s && (t <= o || t >= i.innerWidth - o)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Mg(r) {
    const e = this,
      t = fi();
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
      Od(e, i, i.targetTouches[0].pageX);
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
      (s.touchEventsTarget === "wrapper" && !Fm(l, e.wrapperEl)) ||
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
    if (s.noSwiping && (p ? Og(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const f = o.currentX,
      h = o.currentY;
    if (!Od(e, i, f)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = f),
      (o.startY = h),
      (n.touchStartTime = go()),
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
    const w = m && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || w) &&
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
  function Dg(r) {
    const e = fi(),
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
          (i.touchStartTime = go()));
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
    if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let E;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : p * p + f * f >= 25 &&
          ((E = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
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
    let h = t.isHorizontal() ? p : f,
      m = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((h = Math.abs(h) * (o ? 1 : -1)), (m = Math.abs(m) * (o ? 1 : -1))),
      (s.diff = h),
      (h *= n.touchRatio),
      o && ((h = -h), (m = -m));
    const w = t.touchesDirection;
    (t.swipeDirection = h > 0 ? "prev" : "next"),
      (t.touchesDirection = m > 0 ? "prev" : "next");
    const S = t.params.loop && !n.cssMode,
      _ =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (S && _ && t.loopFix({ direction: t.swipeDirection }),
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
    let T;
    if (
      (new Date().getTime(),
      n._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        w !== t.touchesDirection &&
        S &&
        _ &&
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
      x = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (x = 0),
      h > 0
        ? (S &&
            _ &&
            !T &&
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
            ((g = !1),
            n.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + h) ** x)))
        : h < 0 &&
          (S &&
            _ &&
            !T &&
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
                (t.maxTranslate() - i.startTranslate - h) ** x))),
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
      n.freeMode &&
        n.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function Ig(r) {
    const e = this,
      t = e.touchEventsData;
    let i = r;
    i.originalEvent && (i = i.originalEvent);
    let n;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((n = [...i.changedTouches].find((x) => x.identifier === t.touchId)),
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
    const d = go(),
      p = d - t.touchStartTime;
    if (e.allowClick) {
      const x = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((x && x[0]) || i.target, x),
        e.emit("tap click", i),
        p < 300 &&
          d - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = go()),
      mo(() => {
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
    let m = 0,
      w = e.slidesSizesGrid[0];
    for (
      let x = 0;
      x < u.length;
      x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const E = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[x + E] < "u"
        ? (h || (f >= u[x] && f < u[x + E])) && ((m = x), (w = u[x + E] - u[x]))
        : (h || f >= u[x]) &&
          ((m = x), (w = u[u.length - 1] - u[u.length - 2]));
    }
    let S = null,
      _ = null;
    o.rewind &&
      (e.isBeginning
        ? (_ =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (S = 0));
    const T = (f - u[m]) / w,
      g = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (T >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? S : m + g)
          : e.slideTo(m)),
        e.swipeDirection === "prev" &&
          (T > 1 - o.longSwipesRatio
            ? e.slideTo(m + g)
            : _ !== null && T < 0 && Math.abs(T) > o.longSwipesRatio
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
        : (e.swipeDirection === "next" && e.slideTo(S !== null ? S : m + g),
          e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : m));
    }
  }
  function Md() {
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
  function Rg(r) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && r.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (r.stopPropagation(), r.stopImmediatePropagation())));
  }
  function Ng() {
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
  function zg(r) {
    const e = this;
    _o(e, r.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Fg() {
    const r = this;
    r.documentTouchHandlerProceeded ||
      ((r.documentTouchHandlerProceeded = !0),
      r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
  }
  const Dd = (r, e) => {
    const t = fi(),
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
            Md,
            !0
          )
        : r[u]("observerUpdate", Md, !0),
      n[l]("load", r.onLoad, { capture: !0 }));
  };
  function Bg() {
    const r = this,
      { params: e } = r;
    (r.onTouchStart = Mg.bind(r)),
      (r.onTouchMove = Dg.bind(r)),
      (r.onTouchEnd = Ig.bind(r)),
      (r.onDocumentTouchStart = Fg.bind(r)),
      e.cssMode && (r.onScroll = Ng.bind(r)),
      (r.onClick = Rg.bind(r)),
      (r.onLoad = zg.bind(r)),
      Dd(r, "on");
  }
  function qg() {
    Dd(this, "off");
  }
  var Vg = { attachEvents: Bg, detachEvents: qg };
  const Id = (r, e) => r.grid && e.grid && e.grid.rows > 1;
  function $g() {
    const r = this,
      { realIndex: e, initialized: t, params: i, el: n } = r,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const o = fi(),
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
      p = Id(r, i),
      f = Id(r, d),
      h = r.params.grabCursor,
      m = d.grabCursor,
      w = i.enabled;
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
      h && !m ? r.unsetGrabCursor() : !h && m && r.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((E) => {
        if (typeof d[E] > "u") return;
        const P = i[E] && i[E].enabled,
          k = d[E] && d[E].enabled;
        P && !k && r[E].disable(), !P && k && r[E].enable();
      });
    const S = d.direction && d.direction !== i.direction,
      _ = i.loop && (d.slidesPerView !== i.slidesPerView || S),
      T = i.loop;
    S && t && r.changeDirection(), Zt(r.params, d);
    const g = r.params.enabled,
      x = r.params.loop;
    Object.assign(r, {
      allowTouchMove: r.params.allowTouchMove,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
    }),
      w && !g ? r.disable() : !w && g && r.enable(),
      (r.currentBreakpoint = u),
      r.emit("_beforeBreakpoint", d),
      t &&
        (_
          ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
          : !T && x
          ? (r.loopCreate(e), r.updateSlides())
          : T && !x && r.loopDestroy()),
      r.emit("breakpoint", d);
  }
  function Hg(r, e, t) {
    if ((e === void 0 && (e = "window"), !r || (e === "container" && !t)))
      return;
    let i = !1;
    const n = pt(),
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
  var Wg = { setBreakpoint: $g, getBreakpoint: Hg };
  function jg(r, e) {
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
  function Gg() {
    const r = this,
      { classNames: e, params: t, rtl: i, el: n, device: s } = r,
      o = jg(
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
  function Xg() {
    const r = this,
      { el: e, classNames: t } = r;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), r.emitContainerClasses());
  }
  var Yg = { addClasses: Gg, removeClasses: Xg };
  function Ug() {
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
  var Kg = { checkOverflow: Ug },
    Rd = {
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
  function Qg(r, e) {
    return function (i) {
      i === void 0 && (i = {});
      const n = Object.keys(i)[0],
        s = i[n];
      if (typeof s != "object" || s === null) {
        Zt(e, i);
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
        Zt(e, i);
        return;
      }
      typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
        r[n] || (r[n] = { enabled: !1 }),
        Zt(e, i);
    };
  }
  const vl = {
      eventsEmitter: Ym,
      update: sg,
      translate: dg,
      transition: mg,
      slide: Tg,
      loop: Pg,
      grabCursor: Lg,
      events: Vg,
      breakpoints: Wg,
      checkOverflow: Kg,
      classes: Yg,
    },
    yl = {};
  class nt {
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
        (t = Zt({}, t)),
        e && !t.el && (t.el = e);
      const o = fi();
      if (
        t.el &&
        typeof t.el == "string" &&
        o.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          o.querySelectorAll(t.el).forEach((d) => {
            const p = Zt({}, t, { el: d });
            c.push(new nt(p));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = Ed()),
        (a.device = Pd({ userAgent: t.userAgent })),
        (a.browser = Ad()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: Qg(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const u = Zt({}, Rd, l);
      return (
        (a.params = Zt({}, u, yl, t)),
        (a.originalParams = Zt({}, a.params)),
        (a.passedParams = Zt({}, t)),
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
        n = Oi(t, `.${i.slideClass}, swiper-slide`),
        s = xd(n[0]);
      return xd(e) - s;
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
      e.slides = Oi(t, `.${i.slideClass}, swiper-slide`);
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
          o.complete && _o(e, o);
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
          : Oi(i, n())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = ms("div", t.params.wrapperClass)),
          i.append(o),
          Oi(i, `.${t.params.slideClass}`).forEach((a) => {
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
          rtl: i.dir.toLowerCase() === "rtl" || ar(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || ar(i, "direction") === "rtl"),
          wrongRTL: ar(o, "display") === "-webkit-box",
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
            ? _o(t, s)
            : s.addEventListener("load", (o) => {
                _o(t, o.target);
              });
        }),
        gl(t),
        (t.initialized = !0),
        gl(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Dm(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Zt(yl, e);
    }
    static get extendedDefaults() {
      return yl;
    }
    static get defaults() {
      return Rd;
    }
    static installModule(e) {
      nt.prototype.__modules__ || (nt.prototype.__modules__ = []);
      const t = nt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => nt.installModule(t)), nt)
        : (nt.installModule(e), nt);
    }
  }
  Object.keys(vl).forEach((r) => {
    Object.keys(vl[r]).forEach((e) => {
      nt.prototype[e] = vl[r][e];
    });
  }),
    nt.use([Gm, Xm]);
  function Nd(r, e, t, i) {
    return (
      r.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!t[n] && t.auto === !0) {
            let s = Oi(r.el, `.${i[n]}`)[0];
            s || ((s = ms("div", i[n])), (s.className = i[n]), r.el.append(s)),
              (t[n] = s),
              (e[n] = s);
          }
        }),
      t
    );
  }
  function Zg(r) {
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
      let m;
      return h &&
        typeof h == "string" &&
        e.isElement &&
        ((m = e.el.querySelector(h) || e.hostEl.querySelector(h)), m)
        ? m
        : (h &&
            (typeof h == "string" && (m = [...document.querySelectorAll(h)]),
            e.params.uniqueNavElements &&
            typeof h == "string" &&
            m &&
            m.length > 1 &&
            e.el.querySelectorAll(h).length === 1
              ? (m = e.el.querySelector(h))
              : m && m.length === 1 && (m = m[0])),
          h && !m ? h : m);
    }
    function o(h, m) {
      const w = e.params.navigation;
      (h = Mi(h)),
        h.forEach((S) => {
          S &&
            (S.classList[m ? "add" : "remove"](...w.disabledClass.split(" ")),
            S.tagName === "BUTTON" && (S.disabled = m),
            e.params.watchOverflow &&
              e.enabled &&
              S.classList[e.isLocked ? "add" : "remove"](w.lockClass));
        });
    }
    function a() {
      const { nextEl: h, prevEl: m } = e.navigation;
      if (e.params.loop) {
        o(m, !1), o(h, !1);
        return;
      }
      o(m, e.isBeginning && !e.params.rewind),
        o(h, e.isEnd && !e.params.rewind);
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
        ((e.params.navigation = Nd(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(h.nextEl || h.prevEl))
      )
        return;
      let m = s(h.nextEl),
        w = s(h.prevEl);
      Object.assign(e.navigation, { nextEl: m, prevEl: w }),
        (m = Mi(m)),
        (w = Mi(w));
      const S = (_, T) => {
        _ && _.addEventListener("click", T === "next" ? u : l),
          !e.enabled && _ && _.classList.add(...h.lockClass.split(" "));
      };
      m.forEach((_) => S(_, "next")), w.forEach((_) => S(_, "prev"));
    }
    function d() {
      let { nextEl: h, prevEl: m } = e.navigation;
      (h = Mi(h)), (m = Mi(m));
      const w = (S, _) => {
        S.removeEventListener("click", _ === "next" ? u : l),
          S.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      h.forEach((S) => w(S, "next")), m.forEach((S) => w(S, "prev"));
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
        let { nextEl: h, prevEl: m } = e.navigation;
        if (((h = Mi(h)), (m = Mi(m)), e.enabled)) {
          a();
          return;
        }
        [...h, ...m]
          .filter((w) => !!w)
          .forEach((w) => w.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (h, m) => {
        let { nextEl: w, prevEl: S } = e.navigation;
        (w = Mi(w)), (S = Mi(S));
        const _ = m.target;
        let T = S.includes(_) || w.includes(_);
        if (e.isElement && !T) {
          const g = m.path || (m.composedPath && m.composedPath());
          g && (T = g.find((x) => w.includes(x) || S.includes(x)));
        }
        if (e.params.navigation.hideOnClick && !T) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === _ || e.pagination.el.contains(_))
          )
            return;
          let g;
          w.length
            ? (g = w[0].classList.contains(e.params.navigation.hiddenClass))
            : S.length &&
              (g = S[0].classList.contains(e.params.navigation.hiddenClass)),
            n(g === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...S]
              .filter((x) => !!x)
              .forEach((x) =>
                x.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const p = () => {
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
      enable: p,
      disable: f,
      update: a,
      init: c,
      destroy: d,
    });
  }
  function Jg(r) {
    return (
      r === void 0 && (r = ""),
      `.${r
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function zd(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = fi();
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
      const { scrollbar: y, rtlTranslate: L } = e,
        { dragEl: v, el: b } = y,
        C = e.params.scrollbar,
        O = e.params.loop ? e.progressLoop : e.progress;
      let M = c,
        R = (d - c) * O;
      L
        ? ((R = -R), R > 0 ? ((M = c - R), (R = 0)) : -R + c > d && (M = d + R))
        : R < 0
        ? ((M = c + R), (R = 0))
        : R + c > d && (M = d - R),
        e.isHorizontal()
          ? ((v.style.transform = `translate3d(${R}px, 0, 0)`),
            (v.style.width = `${M}px`))
          : ((v.style.transform = `translate3d(0px, ${R}px, 0)`),
            (v.style.height = `${M}px`)),
        C.hide &&
          (clearTimeout(a),
          (b.style.opacity = 1),
          (a = setTimeout(() => {
            (b.style.opacity = 0), (b.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function h(y) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${y}ms`);
    }
    function m() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: y } = e,
        { dragEl: L, el: v } = y;
      (L.style.width = ""),
        (L.style.height = ""),
        (d = e.isHorizontal() ? v.offsetWidth : v.offsetHeight),
        (p =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = d * p)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (L.style.width = `${c}px`)
          : (L.style.height = `${c}px`),
        p >= 1 ? (v.style.display = "none") : (v.style.display = ""),
        e.params.scrollbar.hide && (v.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          y.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function w(y) {
      return e.isHorizontal() ? y.clientX : y.clientY;
    }
    function S(y) {
      const { scrollbar: L, rtlTranslate: v } = e,
        { el: b } = L;
      let C;
      (C =
        (w(y) -
          Bm(b)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (d - c)),
        (C = Math.max(Math.min(C, 1), 0)),
        v && (C = 1 - C);
      const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * C;
      e.updateProgress(O),
        e.setTranslate(O),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function _(y) {
      const L = e.params.scrollbar,
        { scrollbar: v, wrapperEl: b } = e,
        { el: C, dragEl: O } = v;
      (o = !0),
        (u =
          y.target === O
            ? w(y) -
              y.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        y.preventDefault(),
        y.stopPropagation(),
        (b.style.transitionDuration = "100ms"),
        (O.style.transitionDuration = "100ms"),
        S(y),
        clearTimeout(l),
        (C.style.transitionDuration = "0ms"),
        L.hide && (C.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        n("scrollbarDragStart", y);
    }
    function T(y) {
      const { scrollbar: L, wrapperEl: v } = e,
        { el: b, dragEl: C } = L;
      o &&
        (y.preventDefault && y.cancelable
          ? y.preventDefault()
          : (y.returnValue = !1),
        S(y),
        (v.style.transitionDuration = "0ms"),
        (b.style.transitionDuration = "0ms"),
        (C.style.transitionDuration = "0ms"),
        n("scrollbarDragMove", y));
    }
    function g(y) {
      const L = e.params.scrollbar,
        { scrollbar: v, wrapperEl: b } = e,
        { el: C } = v;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (b.style.transitionDuration = "")),
        L.hide &&
          (clearTimeout(l),
          (l = mo(() => {
            (C.style.opacity = 0), (C.style.transitionDuration = "400ms");
          }, 1e3))),
        n("scrollbarDragEnd", y),
        L.snapOnRelease && e.slideToClosest());
    }
    function x(y) {
      const { scrollbar: L, params: v } = e,
        b = L.el;
      if (!b) return;
      const C = b,
        O = v.passiveListeners ? { passive: !1, capture: !1 } : !1,
        M = v.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!C) return;
      const R = y === "on" ? "addEventListener" : "removeEventListener";
      C[R]("pointerdown", _, O),
        s[R]("pointermove", T, O),
        s[R]("pointerup", g, M);
    }
    function E() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function P() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function k() {
      const { scrollbar: y, el: L } = e;
      e.params.scrollbar = Nd(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const v = e.params.scrollbar;
      if (!v.el) return;
      let b;
      if (
        (typeof v.el == "string" &&
          e.isElement &&
          (b = e.el.querySelector(v.el)),
        !b && typeof v.el == "string")
      ) {
        if (((b = s.querySelectorAll(v.el)), !b.length)) return;
      } else b || (b = v.el);
      e.params.uniqueNavElements &&
        typeof v.el == "string" &&
        b.length > 1 &&
        L.querySelectorAll(v.el).length === 1 &&
        (b = L.querySelector(v.el)),
        b.length > 0 && (b = b[0]),
        b.classList.add(e.isHorizontal() ? v.horizontalClass : v.verticalClass);
      let C;
      b &&
        ((C = b.querySelector(Jg(e.params.scrollbar.dragClass))),
        C || ((C = ms("div", e.params.scrollbar.dragClass)), b.append(C))),
        Object.assign(y, { el: b, dragEl: C }),
        v.draggable && E(),
        b &&
          b.classList[e.enabled ? "remove" : "add"](
            ...or(e.params.scrollbar.lockClass)
          );
    }
    function I() {
      const y = e.params.scrollbar,
        L = e.scrollbar.el;
      L &&
        L.classList.remove(
          ...or(e.isHorizontal() ? y.horizontalClass : y.verticalClass)
        ),
        P();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const y = e.params.scrollbar;
      let { el: L } = e.scrollbar;
      (L = Mi(L)),
        L.forEach((v) => {
          v.classList.remove(y.horizontalClass, y.verticalClass),
            v.classList.add(
              e.isHorizontal() ? y.horizontalClass : y.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? z() : (k(), m(), f());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        m();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (y, L) => {
        h(L);
      }),
      i("enable disable", () => {
        const { el: y } = e.scrollbar;
        y &&
          y.classList[e.enabled ? "remove" : "add"](
            ...or(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        I();
      });
    const D = () => {
        e.el.classList.remove(...or(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...or(e.params.scrollbar.scrollbarDisabledClass)
            ),
          k(),
          m(),
          f();
      },
      z = () => {
        e.el.classList.add(...or(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...or(e.params.scrollbar.scrollbarDisabledClass)
            ),
          I();
      };
    Object.assign(e.scrollbar, {
      enable: D,
      disable: z,
      updateSize: m,
      setTranslate: f,
      init: k,
      destroy: I,
    });
  }
  function wl(r) {
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
      h,
      m,
      w,
      S,
      _;
    function T(M) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (M.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", T),
          !(_ || (M.detail && M.detail.bySwiperTouchMove)) && D()));
    }
    const g = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (p = !0) : p && ((u = c), (p = !1));
        const M = e.autoplay.paused ? c : d + u - new Date().getTime();
        (e.autoplay.timeLeft = M),
          n("autoplayTimeLeft", M, M / l),
          (a = requestAnimationFrame(() => {
            g();
          }));
      },
      x = () => {
        let M;
        return (
          e.virtual && e.params.virtual.enabled
            ? (M = e.slides.find((A) =>
                A.classList.contains("swiper-slide-active")
              ))
            : (M = e.slides[e.activeIndex]),
          M ? parseInt(M.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      E = (M) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(a), g();
        let R = typeof M > "u" ? e.params.autoplay.delay : M;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const A = x();
        !Number.isNaN(A) &&
          A > 0 &&
          typeof M > "u" &&
          ((R = A), (l = A), (u = A)),
          (c = R);
        const q = e.params.speed,
          $ = () => {
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
                $();
              }, R)))
            : requestAnimationFrame(() => {
                $();
              }),
          R
        );
      },
      P = () => {
        (d = new Date().getTime()),
          (e.autoplay.running = !0),
          E(),
          n("autoplayStart");
      },
      k = () => {
        (e.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          n("autoplayStop");
      },
      I = (M, R) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(o), M || (S = !0);
        const A = () => {
          n("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", T)
              : D();
        };
        if (((e.autoplay.paused = !0), R)) {
          w && (c = e.params.autoplay.delay), (w = !1), A();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), A());
      },
      D = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((d = new Date().getTime()),
          S ? ((S = !1), E(c)) : E(),
          (e.autoplay.paused = !1),
          n("autoplayResume"));
      },
      z = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const M = fi();
        M.visibilityState === "hidden" && ((S = !0), I(!0)),
          M.visibilityState === "visible" && D();
      },
      y = (M) => {
        M.pointerType === "mouse" &&
          ((S = !0), (_ = !0), !(e.animating || e.autoplay.paused) && I(!0));
      },
      L = (M) => {
        M.pointerType === "mouse" && ((_ = !1), e.autoplay.paused && D());
      },
      v = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", y),
          e.el.addEventListener("pointerleave", L));
      },
      b = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", y),
          e.el.removeEventListener("pointerleave", L));
      },
      C = () => {
        fi().addEventListener("visibilitychange", z);
      },
      O = () => {
        fi().removeEventListener("visibilitychange", z);
      };
    i("init", () => {
      e.params.autoplay.enabled && (v(), C(), P());
    }),
      i("destroy", () => {
        b(), O(), e.autoplay.running && k();
      }),
      i("_freeModeStaticRelease", () => {
        (h || S) && D();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? k() : I(!0, !0);
      }),
      i("beforeTransitionStart", (M, R, A) => {
        e.destroyed ||
          !e.autoplay.running ||
          (A || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : k());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            k();
            return;
          }
          (f = !0),
            (h = !1),
            (S = !1),
            (m = setTimeout(() => {
              (S = !0), (h = !0), I(!0);
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
            (h = !1), (f = !1);
            return;
          }
          h && e.params.cssMode && D(), (h = !1), (f = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (w = !0);
      }),
      Object.assign(e.autoplay, { start: P, stop: k, pause: I, resume: D });
  }
  nt.use([zd, wl]);
  const ev = () => {
      new nt(".result_swiper", {
        direction: "horizontal",
        loop: !1,
        slidesPerView: 1.2,
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
    lr = () => {
      ev();
    };
  V.registerPlugin(te);
  const tv = () => {
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
    ur = () => {
      tv();
    };
  function iv(r) {
    return r &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
      ? r.default
      : r;
  }
  var Fd = { exports: {} };
  (function (r) {
    (function (e) {
      r.exports ? (r.exports = e()) : (window.intlTelInput = e());
    })(() => {
      var e = (() => {
        var t = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          n = Object.getOwnPropertyNames,
          s = Object.prototype.hasOwnProperty,
          o = (v, b) => {
            for (var C in b) t(v, C, { get: b[C], enumerable: !0 });
          },
          a = (v, b, C, O) => {
            if ((b && typeof b == "object") || typeof b == "function")
              for (let M of n(b))
                !s.call(v, M) &&
                  M !== C &&
                  t(v, M, {
                    get: () => b[M],
                    enumerable: !(O = i(b, M)) || O.enumerable,
                  });
            return v;
          },
          l = (v) => a(t({}, "__esModule", { value: !0 }), v),
          u = {};
        o(u, { Iti: () => I, default: () => L });
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
          const b = c[v];
          d[v] = {
            name: "",
            iso2: b[0],
            dialCode: b[1],
            priority: b[2] || 0,
            areaCodes: b[3] || null,
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
          m = { ...f, ...h },
          w = 0,
          S = {
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
          T = (v) => v.replace(/\D/g, ""),
          g = (v = "") =>
            v
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase(),
          x = (v) => {
            const b = T(v);
            if (b.charAt(0) === "1") {
              const C = b.substr(1, 3);
              return _.indexOf(C) !== -1;
            }
            return !1;
          },
          E = (v, b, C, O) => {
            if (C === 0 && !O) return 0;
            let M = 0;
            for (let R = 0; R < b.length; R++) {
              if ((/[+0-9]/.test(b[R]) && M++, M === v && !O)) return R + 1;
              if (O && M === v + 1) return R;
            }
            return b.length;
          },
          P = (v, b, C) => {
            const O = document.createElement(v);
            return (
              b && Object.entries(b).forEach(([M, R]) => O.setAttribute(M, R)),
              C && C.appendChild(O),
              O
            );
          },
          k = (v) => {
            const { instances: b } = y;
            Object.values(b).forEach((C) => C[v]());
          },
          I = class {
            constructor(v, b = {}) {
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
              (this.id = w++),
                (this.telInput = v),
                (this.highlightedItem = null),
                (this.options = Object.assign({}, S, b)),
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
              const v = new Promise((C, O) => {
                  (this.resolveAutoCountryPromise = C),
                    (this.rejectAutoCountryPromise = O);
                }),
                b = new Promise((C, O) => {
                  (this.resolveUtilsScriptPromise = C),
                    (this.rejectUtilsScriptPromise = O);
                });
              (this.promise = Promise.all([v, b])),
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
              this.countries.sort((v, b) => {
                const { countryOrder: C } = this.options;
                if (C) {
                  const O = C.indexOf(v.iso2),
                    M = C.indexOf(b.iso2),
                    R = O > -1,
                    A = M > -1;
                  if (R || A) return R && A ? O - M : R ? -1 : 1;
                }
                return v.name < b.name ? -1 : v.name > b.name ? 1 : 0;
              });
            }
            _addToDialCodeMap(v, b, C) {
              b.length > this.dialCodeMaxLen &&
                (this.dialCodeMaxLen = b.length),
                this.dialCodeToIso2Map.hasOwnProperty(b) ||
                  (this.dialCodeToIso2Map[b] = []);
              for (let M = 0; M < this.dialCodeToIso2Map[b].length; M++)
                if (this.dialCodeToIso2Map[b][M] === v) return;
              const O = C !== void 0 ? C : this.dialCodeToIso2Map[b].length;
              this.dialCodeToIso2Map[b][O] = v;
            }
            _processAllCountries() {
              const { onlyCountries: v, excludeCountries: b } = this.options;
              if (v.length) {
                const C = v.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => C.indexOf(O.iso2) > -1);
              } else if (b.length) {
                const C = b.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => C.indexOf(O.iso2) === -1);
              } else this.countries = p;
            }
            _translateCountryNames() {
              for (let v = 0; v < this.countries.length; v++) {
                const b = this.countries[v].iso2.toLowerCase();
                this.options.i18n.hasOwnProperty(b) &&
                  (this.countries[v].name = this.options.i18n[b]);
              }
            }
            _processDialCodes() {
              (this.dialCodes = {}),
                (this.dialCodeMaxLen = 0),
                (this.dialCodeToIso2Map = {});
              for (let v = 0; v < this.countries.length; v++) {
                const b = this.countries[v];
                this.dialCodes[b.dialCode] || (this.dialCodes[b.dialCode] = !0),
                  this._addToDialCodeMap(b.iso2, b.dialCode, b.priority);
              }
              for (let v = 0; v < this.countries.length; v++) {
                const b = this.countries[v];
                if (b.areaCodes) {
                  const C = this.dialCodeToIso2Map[b.dialCode][0];
                  for (let O = 0; O < b.areaCodes.length; O++) {
                    const M = b.areaCodes[O];
                    for (let R = 1; R < M.length; R++) {
                      const A = b.dialCode + M.substr(0, R);
                      this._addToDialCodeMap(C, A),
                        this._addToDialCodeMap(b.iso2, A);
                    }
                    this._addToDialCodeMap(b.iso2, b.dialCode + M);
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
                separateDialCode: b,
                showFlags: C,
                containerClass: O,
                hiddenInput: M,
                dropdownContainer: R,
                fixDropdownWidth: A,
                useFullscreenPopup: q,
                i18n: $,
              } = this.options;
              let Y = "iti";
              v && (Y += " iti--allow-dropdown"),
                C && (Y += " iti--show-flags"),
                O && (Y += ` ${O}`),
                q || (Y += " iti--inline-dropdown");
              const ee = P("div", { class: Y });
              if (
                (this.telInput.parentNode?.insertBefore(ee, this.telInput),
                v || C)
              ) {
                (this.countryContainer = P(
                  "div",
                  { class: "iti__country-container" },
                  ee
                )),
                  (this.selectedCountry = P(
                    "button",
                    {
                      type: "button",
                      class: "iti__selected-country",
                      ...(v && {
                        "aria-expanded": "false",
                        "aria-label":
                          this.options.i18n.selectedCountryAriaLabel,
                        "aria-haspopup": "true",
                        "aria-controls": `iti-${this.id}__dropdown-content`,
                        role: "combobox",
                      }),
                    },
                    this.countryContainer
                  ));
                const W = P(
                  "div",
                  { class: "iti__selected-country-primary" },
                  this.selectedCountry
                );
                if (
                  ((this.selectedCountryInner = P("div", null, W)),
                  (this.selectedCountryA11yText = P(
                    "span",
                    { class: "iti__a11y-text" },
                    this.selectedCountryInner
                  )),
                  this.telInput.disabled
                    ? this.selectedCountry.setAttribute("aria-disabled", "true")
                    : this.selectedCountry.setAttribute("tabindex", "0"),
                  v &&
                    (this.dropdownArrow = P(
                      "div",
                      { class: "iti__arrow", "aria-hidden": "true" },
                      W
                    )),
                  b &&
                    (this.selectedDialCode = P(
                      "div",
                      { class: "iti__selected-dial-code" },
                      this.selectedCountry
                    )),
                  v)
                ) {
                  const U = A ? "" : "iti--flexible-dropdown-width";
                  if (
                    ((this.dropdownContent = P("div", {
                      id: `iti-${this.id}__dropdown-content`,
                      class: `iti__dropdown-content iti__hide ${U}`,
                    })),
                    (this.searchInput = P(
                      "input",
                      {
                        type: "text",
                        class: "iti__search-input",
                        placeholder: $.searchPlaceholder,
                        role: "combobox",
                        "aria-expanded": "true",
                        "aria-label": $.searchPlaceholder,
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
                        "aria-label": $.countryListAriaLabel,
                      },
                      this.dropdownContent
                    )),
                    this._appendListItems(this.countries, "iti__standard"),
                    this._updateSearchResultsText(),
                    R)
                  ) {
                    let j = "iti iti--container";
                    q
                      ? (j += " iti--fullscreen-popup")
                      : (j += " iti--inline-dropdown"),
                      (this.dropdown = P("div", { class: j })),
                      this.dropdown.appendChild(this.dropdownContent);
                  } else
                    this.countryContainer.appendChild(this.dropdownContent);
                }
              }
              if ((ee.appendChild(this.telInput), M)) {
                const W = this.telInput.getAttribute("name") || "",
                  U = M(W);
                U.phone &&
                  ((this.hiddenInput = P("input", {
                    type: "hidden",
                    name: U.phone,
                  })),
                  ee.appendChild(this.hiddenInput)),
                  U.country &&
                    ((this.hiddenInputCountry = P("input", {
                      type: "hidden",
                      name: U.country,
                    })),
                    ee.appendChild(this.hiddenInputCountry));
              }
            }
            _appendListItems(v, b) {
              for (let C = 0; C < v.length; C++) {
                const O = v[C],
                  M = P(
                    "li",
                    {
                      id: `iti-${this.id}__item-${O.iso2}`,
                      class: `iti__country ${b}`,
                      tabindex: "-1",
                      role: "option",
                      "data-dial-code": O.dialCode,
                      "data-country-code": O.iso2,
                      "aria-selected": "false",
                    },
                    this.countryList
                  );
                O.nodeById[this.id] = M;
                let R = "";
                this.options.showFlags &&
                  (R += `<div class='iti__flag-box'><div class='iti__flag iti__${O.iso2}'></div></div>`),
                  (R += `<span class='iti__country-name'>${O.name}</span>`),
                  (R += `<span class='iti__dial-code'>+${O.dialCode}</span>`),
                  M.insertAdjacentHTML("beforeend", R);
              }
            }
            _setInitialState(v = !1) {
              const b = this.telInput.getAttribute("value"),
                C = this.telInput.value,
                M =
                  b && b.charAt(0) === "+" && (!C || C.charAt(0) !== "+")
                    ? b
                    : C,
                R = this._getDialCode(M),
                A = x(M),
                { initialCountry: q } = this.options;
              if (R && !A) this._updateCountryFromNumber(M);
              else if (q !== "auto" || v) {
                const $ = q ? q.toLowerCase() : "";
                $ && this._getCountryData($, !0)
                  ? this._setCountry($)
                  : R && A
                  ? this._setCountry("us")
                  : this._setCountry();
              }
              M && this._updateValFromNumber(M);
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
              this._handleLabelClick = (b) => {
                this.dropdownContent.classList.contains("iti__hide")
                  ? this.telInput.focus()
                  : b.preventDefault();
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
                (this._handleCountryContainerKeydown = (b) => {
                  this.dropdownContent.classList.contains("iti__hide") &&
                    ["ArrowUp", "ArrowDown", " ", "Enter"].includes(b.key) &&
                    (b.preventDefault(),
                    b.stopPropagation(),
                    this._openDropdown()),
                    b.key === "Tab" && this._closeDropdown();
                }),
                this.countryContainer.addEventListener(
                  "keydown",
                  this._handleCountryContainerKeydown
                );
            }
            _initRequests() {
              this.options.utilsScript && !y.utils
                ? y.documentReady()
                  ? y.loadUtils(this.options.utilsScript)
                  : window.addEventListener("load", () => {
                      y.loadUtils(this.options.utilsScript);
                    })
                : this.resolveUtilsScriptPromise(),
                this.options.initialCountry === "auto" &&
                !this.selectedCountryData.iso2
                  ? this._loadAutoCountry()
                  : this.resolveAutoCountryPromise();
            }
            _loadAutoCountry() {
              y.autoCountry
                ? this.handleAutoCountry()
                : y.startedLoadingAutoCountry ||
                  ((y.startedLoadingAutoCountry = !0),
                  typeof this.options.geoIpLookup == "function" &&
                    this.options.geoIpLookup(
                      (v = "") => {
                        const b = v.toLowerCase();
                        b && this._getCountryData(b, !0)
                          ? ((y.autoCountry = b),
                            setTimeout(() => k("handleAutoCountry")))
                          : (this._setInitialState(!0),
                            k("rejectAutoCountryPromise"));
                      },
                      () => {
                        this._setInitialState(!0),
                          k("rejectAutoCountryPromise");
                      }
                    ));
            }
            _initTelInputListeners() {
              const {
                strictMode: v,
                formatAsYouType: b,
                separateDialCode: C,
              } = this.options;
              let O = !1;
              (this._handleInputEvent = (M) => {
                this._updateCountryFromNumber(this.telInput.value) &&
                  this._triggerCountryChange();
                const R = M && M.data && /[^+0-9]/.test(M.data),
                  A =
                    M &&
                    M.inputType === "insertFromPaste" &&
                    this.telInput.value;
                if (
                  (R || (A && !v)
                    ? (O = !0)
                    : /[^+0-9]/.test(this.telInput.value) || (O = !1),
                  b && !O)
                ) {
                  const q = this.telInput.selectionStart || 0,
                    Y = this.telInput.value
                      .substring(0, q)
                      .replace(/[^+0-9]/g, "").length,
                    ee = M && M.inputType === "deleteContentForward",
                    W = this._formatNumberAsYouType(),
                    U = E(Y, W, q, ee);
                  (this.telInput.value = W),
                    this.telInput.setSelectionRange(U, U);
                }
              }),
                this.telInput.addEventListener("input", this._handleInputEvent),
                (v || C) &&
                  ((this._handleKeydownEvent = (M) => {
                    if (
                      M.key &&
                      M.key.length === 1 &&
                      !M.altKey &&
                      !M.ctrlKey &&
                      !M.metaKey
                    ) {
                      if (C && M.key === "+") {
                        M.preventDefault(),
                          this._openDropdown(),
                          (this.searchInput.value = "+"),
                          this._filterCountries("", !0);
                        return;
                      }
                      if (v) {
                        const R =
                            this.telInput.selectionStart === 0 && M.key === "+",
                          A = /^[0-9]$/.test(M.key),
                          q = R || A,
                          $ = this._getFullNumber(),
                          Y = y.utils.getCoreNumber(
                            $,
                            this.selectedCountryData.iso2
                          ),
                          ee =
                            this.maxCoreNumberLength &&
                            Y.length >= this.maxCoreNumberLength;
                        (!q || ee) && M.preventDefault();
                      }
                    }
                  }),
                  this.telInput.addEventListener(
                    "keydown",
                    this._handleKeydownEvent
                  ));
            }
            _cap(v) {
              const b = parseInt(
                this.telInput.getAttribute("maxlength") || "",
                10
              );
              return b && v.length > b ? v.substr(0, b) : v;
            }
            _trigger(v) {
              const b = new Event(v, { bubbles: !0, cancelable: !0 });
              this.telInput.dispatchEvent(b);
            }
            _openDropdown() {
              const { fixDropdownWidth: v } = this.options;
              v &&
                (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
                this.dropdownContent.classList.remove("iti__hide"),
                this.selectedCountry.setAttribute("aria-expanded", "true"),
                this._setDropdownPosition();
              const b = this.countryList.firstElementChild;
              b &&
                (this._highlightListItem(b, !1),
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
                  b = this.telInput.offsetHeight;
                this.options.dropdownContainer &&
                  ((this.dropdown.style.top = `${v.top + b}px`),
                  (this.dropdown.style.left = `${v.left}px`),
                  (this._handleWindowScroll = () => this._closeDropdown()),
                  window.addEventListener("scroll", this._handleWindowScroll));
              }
            }
            _bindDropdownListeners() {
              (this._handleMouseoverCountryList = (O) => {
                const M = O.target?.closest(".iti__country");
                M && this._highlightListItem(M, !1);
              }),
                this.countryList.addEventListener(
                  "mouseover",
                  this._handleMouseoverCountryList
                ),
                (this._handleClickCountryList = (O) => {
                  const M = O.target?.closest(".iti__country");
                  M && this._selectListItem(M);
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
              const b = () => {
                const O = this.searchInput.value.trim();
                O ? this._filterCountries(O) : this._filterCountries("", !0);
              };
              let C = null;
              (this._handleSearchChange = () => {
                C && clearTimeout(C),
                  (C = setTimeout(() => {
                    b(), (C = null);
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
            _filterCountries(v, b = !1) {
              let C = !0;
              this.countryList.innerHTML = "";
              const O = g(v);
              for (let M = 0; M < this.countries.length; M++) {
                const R = this.countries[M],
                  A = g(R.name),
                  q = `+${R.dialCode}`;
                if (b || A.includes(O) || q.includes(O) || R.iso2.includes(O)) {
                  const $ = R.nodeById[this.id];
                  $ && this.countryList.appendChild($),
                    C && (this._highlightListItem($, !1), (C = !1));
                }
              }
              (this.countryList.scrollTop = 0), this._updateSearchResultsText();
            }
            _updateSearchResultsText() {
              const { i18n: v } = this.options,
                b = this.countryList.childElementCount;
              let C;
              b === 0
                ? (C = v.zeroSearchResults)
                : b === 1
                ? (C = v.oneSearchResult)
                : (C = v.multipleSearchResults.replace(
                    "${count}",
                    b.toString()
                  )),
                (this.searchResultsA11yText.textContent = C);
            }
            _handleUpDownKey(v) {
              let b =
                v === "ArrowUp"
                  ? this.highlightedItem?.previousElementSibling
                  : this.highlightedItem?.nextElementSibling;
              !b &&
                this.countryList.childElementCount > 1 &&
                (b =
                  v === "ArrowUp"
                    ? this.countryList.lastElementChild
                    : this.countryList.firstElementChild),
                b && (this._scrollTo(b), this._highlightListItem(b, !1));
            }
            _handleEnterKey() {
              this.highlightedItem &&
                this._selectListItem(this.highlightedItem);
            }
            _updateValFromNumber(v) {
              let b = v;
              if (
                this.options.formatOnDisplay &&
                y.utils &&
                this.selectedCountryData
              ) {
                const C =
                    this.options.nationalMode ||
                    (b.charAt(0) !== "+" && !this.options.separateDialCode),
                  { NATIONAL: O, INTERNATIONAL: M } = y.utils.numberFormat,
                  R = C ? O : M;
                b = y.utils.formatNumber(b, this.selectedCountryData.iso2, R);
              }
              (b = this._beforeSetNumber(b)), (this.telInput.value = b);
            }
            _updateCountryFromNumber(v) {
              const b = v.indexOf("+");
              let C = b ? v.substring(b) : v;
              const O = this.selectedCountryData.dialCode;
              C &&
                O === "1" &&
                C.charAt(0) !== "+" &&
                (C.charAt(0) !== "1" && (C = `1${C}`), (C = `+${C}`)),
                this.options.separateDialCode &&
                  O &&
                  C.charAt(0) !== "+" &&
                  (C = `+${O}${C}`);
              const R = this._getDialCode(C, !0),
                A = T(C);
              let q = null;
              if (R) {
                const $ = this.dialCodeToIso2Map[T(R)],
                  Y =
                    $.indexOf(this.selectedCountryData.iso2) !== -1 &&
                    A.length <= R.length - 1;
                if (!(O === "1" && x(A)) && !Y) {
                  for (let W = 0; W < $.length; W++)
                    if ($[W]) {
                      q = $[W];
                      break;
                    }
                }
              } else
                C.charAt(0) === "+" && A.length
                  ? (q = "")
                  : (!C || C === "+") &&
                    !this.selectedCountryData.iso2 &&
                    (q = this.defaultCountry);
              return q !== null ? this._setCountry(q) : !1;
            }
            _highlightListItem(v, b) {
              const C = this.highlightedItem;
              C &&
                (C.classList.remove("iti__highlight"),
                C.setAttribute("aria-selected", "false")),
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
                b && this.highlightedItem.focus();
            }
            _getCountryData(v, b) {
              for (let C = 0; C < this.countries.length; C++)
                if (this.countries[C].iso2 === v) return this.countries[C];
              if (b) return null;
              throw new Error(`No country data for '${v}'`);
            }
            _setCountry(v) {
              const {
                  separateDialCode: b,
                  showFlags: C,
                  i18n: O,
                } = this.options,
                M = this.selectedCountryData.iso2
                  ? this.selectedCountryData
                  : {};
              if (
                ((this.selectedCountryData = v
                  ? this._getCountryData(v, !1) || {}
                  : {}),
                this.selectedCountryData.iso2 &&
                  (this.defaultCountry = this.selectedCountryData.iso2),
                this.selectedCountryInner)
              ) {
                let R = "",
                  A = "";
                v && C
                  ? ((R = `iti__flag iti__${v}`),
                    (A = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                  : ((R = "iti__flag iti__globe"), (A = O.noCountrySelected)),
                  (this.selectedCountryInner.className = R),
                  (this.selectedCountryA11yText.textContent = A);
              }
              if ((this._setSelectedCountryTitleAttribute(v, b), b)) {
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
                this._updatePlaceholder(), this._updateMaxLength(), M.iso2 !== v
              );
            }
            _updateMaxLength() {
              if (this.options.strictMode && y.utils)
                if (this.selectedCountryData.iso2) {
                  const v =
                    y.utils.numberType[this.options.placeholderNumberType];
                  let b = y.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      !1,
                      v,
                      !0
                    ),
                    C = b;
                  for (
                    ;
                    y.utils.isPossibleNumber(b, this.selectedCountryData.iso2);

                  )
                    (C = b), (b += "0");
                  const O = y.utils.getCoreNumber(
                    C,
                    this.selectedCountryData.iso2
                  );
                  this.maxCoreNumberLength = O.length;
                } else this.maxCoreNumberLength = null;
            }
            _setSelectedCountryTitleAttribute(v = null, b) {
              if (!this.selectedCountry) return;
              let C;
              v && !b
                ? (C = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
                : v
                ? (C = this.selectedCountryData.name)
                : (C = "Unknown"),
                this.selectedCountry.setAttribute("title", C);
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                const v = this.telInput.parentNode.cloneNode(!1);
                (v.style.visibility = "hidden"), document.body.appendChild(v);
                const b = this.countryContainer.cloneNode();
                v.appendChild(b);
                const C = this.selectedCountry.cloneNode(!0);
                b.appendChild(C);
                const O = C.offsetWidth;
                return document.body.removeChild(v), O;
              }
              return 0;
            }
            _updatePlaceholder() {
              const {
                  autoPlaceholder: v,
                  placeholderNumberType: b,
                  nationalMode: C,
                  customPlaceholder: O,
                } = this.options,
                M =
                  v === "aggressive" ||
                  (!this.hadInitialPlaceholder && v === "polite");
              if (y.utils && M) {
                const R = y.utils.numberType[b];
                let A = this.selectedCountryData.iso2
                  ? y.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      C,
                      R
                    )
                  : "";
                (A = this._beforeSetNumber(A)),
                  typeof O == "function" &&
                    (A = O(A, this.selectedCountryData)),
                  this.telInput.setAttribute("placeholder", A);
              }
            }
            _selectListItem(v) {
              const b = this._setCountry(v.getAttribute("data-country-code"));
              this._closeDropdown(),
                this._updateDialCode(v.getAttribute("data-dial-code")),
                this.telInput.focus(),
                b && this._triggerCountryChange();
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
              const b = this.countryList,
                C = document.documentElement.scrollTop,
                O = b.offsetHeight,
                M = b.getBoundingClientRect().top + C,
                R = M + O,
                A = v.offsetHeight,
                q = v.getBoundingClientRect().top + C,
                $ = q + A,
                Y = q - M + b.scrollTop;
              if (q < M) b.scrollTop = Y;
              else if ($ > R) {
                const ee = O - A;
                b.scrollTop = Y - ee;
              }
            }
            _updateDialCode(v) {
              const b = this.telInput.value,
                C = `+${v}`;
              let O;
              if (b.charAt(0) === "+") {
                const M = this._getDialCode(b);
                M ? (O = b.replace(M, C)) : (O = C), (this.telInput.value = O);
              }
            }
            _getDialCode(v, b) {
              let C = "";
              if (v.charAt(0) === "+") {
                let O = "";
                for (let M = 0; M < v.length; M++) {
                  const R = v.charAt(M);
                  if (!isNaN(parseInt(R, 10))) {
                    if (((O += R), b))
                      this.dialCodeToIso2Map[O] && (C = v.substr(0, M + 1));
                    else if (this.dialCodes[O]) {
                      C = v.substr(0, M + 1);
                      break;
                    }
                    if (O.length === this.dialCodeMaxLen) break;
                  }
                }
              }
              return C;
            }
            _getFullNumber() {
              const v = this.telInput.value.trim(),
                { dialCode: b } = this.selectedCountryData;
              let C;
              const O = T(v);
              return (
                this.options.separateDialCode && v.charAt(0) !== "+" && b && O
                  ? (C = `+${b}`)
                  : (C = ""),
                C + v
              );
            }
            _beforeSetNumber(v) {
              let b = v;
              if (this.options.separateDialCode) {
                let C = this._getDialCode(b);
                if (C) {
                  C = `+${this.selectedCountryData.dialCode}`;
                  const O =
                    b[C.length] === " " || b[C.length] === "-"
                      ? C.length + 1
                      : C.length;
                  b = b.substr(O);
                }
              }
              return this._cap(b);
            }
            _triggerCountryChange() {
              this._trigger("countrychange");
            }
            _formatNumberAsYouType() {
              const v = this._getFullNumber(),
                b = y.utils
                  ? y.utils.formatNumberAsYouType(
                      v,
                      this.selectedCountryData.iso2
                    )
                  : v,
                { dialCode: C } = this.selectedCountryData;
              return this.options.separateDialCode &&
                this.telInput.value.charAt(0) !== "+" &&
                b.includes(`+${C}`)
                ? (b.split(`+${C}`)[1] || "").trim()
                : b;
            }
            handleAutoCountry() {
              this.options.initialCountry === "auto" &&
                y.autoCountry &&
                ((this.defaultCountry = y.autoCountry),
                this.telInput.value || this.setCountry(this.defaultCountry),
                this.resolveAutoCountryPromise());
            }
            handleUtils() {
              y.utils &&
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
              const b = this.telInput.parentNode;
              b?.parentNode?.insertBefore(this.telInput, b),
                b?.parentNode?.removeChild(b),
                delete y.instances[this.id];
            }
            getExtension() {
              return y.utils
                ? y.utils.getExtension(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : "";
            }
            getNumber(v) {
              if (y.utils) {
                const { iso2: b } = this.selectedCountryData;
                return y.utils.formatNumber(this._getFullNumber(), b, v);
              }
              return "";
            }
            getNumberType() {
              return y.utils
                ? y.utils.getNumberType(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : -99;
            }
            getSelectedCountryData() {
              return this.selectedCountryData;
            }
            getValidationError() {
              if (y.utils) {
                const { iso2: v } = this.selectedCountryData;
                return y.utils.getValidationError(this._getFullNumber(), v);
              }
              return -99;
            }
            isValidNumber(v = !0) {
              const b = this._getFullNumber();
              return /\p{L}/u.test(b)
                ? !1
                : y.utils
                ? y.utils.isPossibleNumber(b, this.selectedCountryData.iso2, v)
                : null;
            }
            isValidNumberPrecise() {
              const v = this._getFullNumber();
              return /\p{L}/u.test(v)
                ? !1
                : y.utils
                ? y.utils.isValidNumber(v, this.selectedCountryData.iso2)
                : null;
            }
            setCountry(v) {
              const b = v.toLowerCase();
              this.selectedCountryData.iso2 !== b &&
                (this._setCountry(b),
                this._updateDialCode(this.selectedCountryData.dialCode),
                this._triggerCountryChange());
            }
            setNumber(v) {
              const b = this._updateCountryFromNumber(v);
              this._updateValFromNumber(v), b && this._triggerCountryChange();
            }
            setPlaceholderNumberType(v) {
              (this.options.placeholderNumberType = v),
                this._updatePlaceholder();
            }
          },
          D = (v, b, C) => {
            const O = document.createElement("script");
            (O.onload = () => {
              window.intlTelInputUtils &&
                ((y.utils = window.intlTelInputUtils),
                delete window.intlTelInputUtils,
                window.intlTelInputUtilsBackup &&
                  ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                  delete window.intlTelInputUtilsBackup)),
                k("handleUtils"),
                b && b();
            }),
              (O.onerror = () => {
                k("rejectUtilsScriptPromise"), C && C();
              }),
              (O.className = "iti-load-utils"),
              (O.async = !0),
              (O.src = v),
              document.body.appendChild(O);
          },
          z = (v) =>
            !y.utils && !y.startedLoadingUtilsScript
              ? ((y.startedLoadingUtilsScript = !0),
                new Promise((b, C) => D(v, b, C)))
              : null,
          y = Object.assign(
            (v, b) => {
              const C = new I(v, b);
              return (
                C._init(),
                v.setAttribute("data-intl-tel-input-id", C.id.toString()),
                (y.instances[C.id] = C),
                C
              );
            },
            {
              defaults: S,
              documentReady: () => document.readyState === "complete",
              getCountryData: () => p,
              getInstance: (v) => {
                const b = v.getAttribute("data-intl-tel-input-id");
                return b ? y.instances[b] : null;
              },
              instances: {},
              loadUtils: z,
              version: "22.0.0",
            }
          ),
          L = y;
        return l(u);
      })();
      return e.default;
    });
  })(Fd);
  var rv = Fd.exports;
  const nv = iv(rv),
    sv = () => {
      function r(i) {
        const n = document.querySelector(`[calc-phone="${i}"]`),
          s = document.querySelector(`[dial-code="${i}"]`),
          o = document.querySelector(`[hidden-country-name="${i}"]`),
          a = document.querySelector(`[hidden-full-phone="${i}"]`);
        if (!n || !s || !o || !a) return;
        const l = nv(n, {
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
    cr = () => {
      sv();
    };
  var ov = "1.3.4";
  function Bd(r, e, t) {
    return Math.max(r, Math.min(e, t));
  }
  function av(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function lv(r, e, t, i) {
    return av(r, e, 1 - Math.exp(-t * i));
  }
  function uv(r, e) {
    return ((r % e) + e) % e;
  }
  var cv = class {
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
        const t = Bd(0, this.currentTime / this.duration, 1);
        e = t >= 1;
        const i = e ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = lv(this.value, this.to, this.lerp * 60, r)),
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
  function dv(r, e) {
    let t;
    return function (...i) {
      let n = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), r.apply(n, i);
        }, e));
    };
  }
  var fv = class {
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
            ((this.debouncedResize = dv(this.resize, i)),
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
    qd = class {
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
    Vd = 100 / 6,
    dr = { passive: !1 },
    pv = class {
      constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        B(this, "touchStart", { x: 0, y: 0 });
        B(this, "lastDelta", { x: 0, y: 0 });
        B(this, "window", { width: 0, height: 0 });
        B(this, "emitter", new qd());
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
          const n = i === 1 ? Vd : i === 2 ? this.window.width : 1,
            s = i === 1 ? Vd : i === 2 ? this.window.height : 1;
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
          this.element.addEventListener("wheel", this.onWheel, dr),
          this.element.addEventListener("touchstart", this.onTouchStart, dr),
          this.element.addEventListener("touchmove", this.onTouchMove, dr),
          this.element.addEventListener("touchend", this.onTouchEnd, dr);
      }
      on(r, e) {
        return this.emitter.on(r, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, dr),
          this.element.removeEventListener("touchstart", this.onTouchStart, dr),
          this.element.removeEventListener("touchmove", this.onTouchMove, dr),
          this.element.removeEventListener("touchend", this.onTouchEnd, dr);
      }
    },
    $d = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
    hv = class {
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
        wheelMultiplier: h = 1,
        autoResize: m = !0,
        prevent: w,
        virtualScroll: S,
        overscroll: _ = !0,
        autoRaf: T = !1,
        anchors: g = !1,
        autoToggle: x = !1,
        allowNestedScroll: E = !1,
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
        B(this, "animate", new cv());
        B(this, "emitter", new qd());
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
              (w) =>
                w instanceof HTMLElement &&
                ((typeof c == "function" && c?.(w)) ||
                  w.hasAttribute?.("data-lenis-prevent") ||
                  (n && w.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (s && w.hasAttribute?.("data-lenis-prevent-wheel")) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(w, { deltaX: e, deltaY: t })))
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
            m = n && i.type === "touchend" && Math.abs(p) > 5;
          m && (p = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + p, {
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
        (window.lenisVersion = ov),
          (!r || r === document.documentElement) && (r = window),
          typeof a == "number" && typeof l != "function"
            ? (l = $d)
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
            wheelMultiplier: h,
            autoResize: m,
            prevent: w,
            virtualScroll: S,
            overscroll: _,
            autoRaf: T,
            anchors: g,
            autoToggle: x,
            allowNestedScroll: E,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new fv(r, e, { autoResize: m })),
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
          (this.virtualScroll = new pv(t, {
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
                : r instanceof HTMLElement && r?.nodeType && (p = r),
              p)
            ) {
              if (this.options.wrapper !== window) {
                const h = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? h.left : h.top;
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
            } else r = Bd(0, r, this.limit);
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
                ? (s = $d)
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
        let s, o, a, l, u, c, d, p;
        const f = this.options.gestureOrientation;
        if (i - (n.time ?? 0) > 2e3) {
          n.time = Date.now();
          const x = window.getComputedStyle(r);
          n.computedStyle = x;
          const E = x.overflowX,
            P = x.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(E)),
            (o = ["auto", "overlay", "scroll"].includes(P)),
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
        let h;
        if (f === "horizontal") h = "x";
        else if (f === "vertical") h = "y";
        else {
          const x = e !== 0,
            E = t !== 0;
          x && s && a && (h = "x"), E && o && l && (h = "y");
        }
        if (!h) return !1;
        let m, w, S, _, T;
        if (h === "x")
          (m = r.scrollLeft), (w = u - d), (S = e), (_ = s), (T = a);
        else if (h === "y")
          (m = r.scrollTop), (w = c - p), (S = t), (_ = o), (T = l);
        else return !1;
        return (S > 0 ? m < w : m > 0) && _ && T;
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
          ? uv(this.animatedScroll, this.limit)
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
  V.registerPlugin(te);
  let bo;
  const mv = () => {
      (bo = new hv({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
        autoRaf: !0,
      })),
        bo.on("scroll", te.update),
        V.ticker.add((r) => {
          bo.raf(r * 1e3);
        }),
        V.ticker.lagSmoothing(0);
    },
    gv = () => {
      mv();
    },
    So = () => bo;
  let Nr,
    wn,
    _n = !1;
  const vv = () => {
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
        p = document.querySelector('[custom-form="rev-calc"]'),
        f = document.querySelector('[rev-calc="spinner"]'),
        h = document.querySelector('[hidden-final-result="rev-opportunity"]'),
        m = document.querySelector('[hidden-final-result="conversion-rate"]'),
        w = document.querySelector('[hidden-input="volume"]'),
        S = document.querySelector('[hidden-input="ratio"]'),
        _ = document.querySelector('[hidden-input="trip-price"]'),
        T = () => {
          const R = e.getAttribute("final-value"),
            A = i.getAttribute("final-value"),
            q = R * A,
            $ = `$${q.toLocaleString()}`;
          (u.textContent = $),
            (h.value = q),
            w && (w.value = e.textContent),
            _ && (_.value = i.textContent);
        },
        g = () => {
          const R = t.getAttribute("final-value");
          (c.textContent = R), (m.value = R), S && (S.value = t.textContent);
        },
        x = () =>
          e.getAttribute("final-value") &&
          t.getAttribute("final-value") &&
          i.getAttribute("final-value"),
        E = () => {
          if (x() && !_n) {
            (_n = !0),
              n.classList.add("is--active"),
              r.classList.remove("is--active"),
              T(),
              g();
            const R = So();
            R && R.stop(), D();
          } else x() || r.classList.add("is--active");
        },
        P = () => {
          if (_n) {
            (_n = !1),
              n.classList.remove("is--active"),
              Nr && Nr.isActive() && Nr.pause(),
              wn && wn.isActive() && wn.pause();
            const R = So();
            R && R.start(), z();
          }
        },
        k = () => {
          r.classList.contains("is--active") &&
            x() &&
            r.classList.remove("is--active");
        },
        I = () => {
          [e, t, i].forEach((A) => {
            new MutationObserver(k).observe(A, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
          }),
            new MutationObserver(E).observe(r, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
        },
        D = () => {
          (Nr = V.timeline()),
            V.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
            Nr.fromTo(
              a,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "expo.out" }
            ),
            Nr.fromTo(
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
            Nr.fromTo(
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
        z = () => {
          (wn = V.timeline()),
            wn.to(l, {
              autoAlpha: 0,
              scale: 0.9,
              rotate: 10,
              y: "100%",
              transformOrigin: "top center",
              duration: 1.25,
              ease: "elastic.out(0.4,0.3)",
            }),
            wn.to(
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
        y = () => {
          f && f.classList.add("is--active");
        },
        L = () => {
          f && f.classList.remove("is--active");
        },
        v = () => {
          f && f.classList.remove("is--active");
        },
        b = (R) => {
          R.key === "Escape" && _n && P();
        },
        C = () => {
          o.addEventListener("click", () => {
            E();
          }),
            s.forEach((R) => {
              R.addEventListener("click", () => {
                P();
              });
            }),
            a.addEventListener("click", (R) => {
              R.target === a && _n && P();
            }),
            document.addEventListener("keydown", b),
            p &&
              (p.addEventListener("submit", y),
              p.addEventListener("w-form-success", L),
              p.addEventListener("w-form-fail", v));
        },
        O = () => {
          document.removeEventListener("keydown", b),
            p &&
              (p.removeEventListener("submit", y),
              p.removeEventListener("w-form-success", L),
              p.removeEventListener("w-form-fail", v));
        };
      return I(), C(), O;
    },
    yv = () => vv(),
    wv = () => {
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
    _v = () => {
      wv();
    };
  V.registerPlugin(pn);
  const bv = () => {
      const r = document.querySelector('[lead-scroll="wrap"]'),
        e = r.querySelector('[lead-scroll="visual-component"]'),
        t = e.querySelectorAll('[lead-scroll="visual-item"]'),
        i = Array.from(t).map((W) => W.querySelector('[scroll-img="lg"]')),
        n = Array.from(t).map((W) => W.querySelectorAll('[scroll-img="sm"]')),
        s = r.querySelector('[lead-scroll="content-component"]'),
        o = s.querySelectorAll('[lead-scroll="content-header-item"]'),
        a = s.querySelectorAll('[lead-scroll="content-header-item"] p'),
        l = s.querySelectorAll('[lead-scroll="content-info-item"]'),
        u = Array.from(l).map((W) => Array.from(W.querySelectorAll("p"))),
        d = document
          .querySelector('[lead-scroll="progress-wrap"]')
          .querySelectorAll('[lead-scroll="progress-item"]'),
        p = Array.from(d).map((W) =>
          W.querySelector('[lead-scroll="progress-move"]')
        ),
        f = document.querySelector('[lead-scroll="arrow-left"]'),
        h = document.querySelector('[lead-scroll="arrow-right"]');
      let m = 0,
        w = !1,
        S = null,
        _ = !1,
        T = null,
        g = null,
        x = !0;
      const E = t.length,
        P = 6e3;
      if (!r || !e || t.length === 0) return;
      V.set(i, { autoAlpha: 0 }),
        V.set(n, { autoAlpha: 0 }),
        V.set(i, { scale: 0.8 }),
        V.set(n, { scale: 0.8 });
      const k = (W) => {
          const U = i[W],
            j = n[W];
          U &&
            V.fromTo(
              U,
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
            j &&
              j.length > 0 &&
              V.fromTo(
                j,
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
        I = (W) => {
          const U = i[W],
            j = n[W];
          U &&
            V.to(U, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            j &&
              j.length > 0 &&
              V.to(j, {
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
        D = (W) => {
          const U = a[W];
          if (U) {
            const j = new pn(U, {
              type: "lines",
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
            });
            j &&
              j.lines &&
              V.from(j.lines, {
                yPercent: 110,
                autoAlpha: 0,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.12,
              });
          }
        },
        z = (W) => {
          const U = u[W];
          U &&
            U.length > 0 &&
            V.from(U, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        y = () => {
          S && (clearTimeout(S), (S = null)),
            T && (clearTimeout(T), (T = null)),
            g && (clearTimeout(g), (g = null));
        },
        L = (W) => {
          V.killTweensOf(p),
            p.forEach((U, j) => {
              j === W
                ? V.fromTo(
                    U,
                    { scaleX: 0 },
                    { scaleX: 1, duration: P / 1e3, ease: "none" }
                  )
                : j < W
                ? V.set(U, { scaleX: 1 })
                : V.set(U, { scaleX: 0 });
            });
        },
        v = (W, U = !0) => {
          const j = Math.min(Math.max(W, 0), E - 1);
          if (j !== m && !w) {
            w = !0;
            const de = m;
            y();
            const _e = () => {
              d.forEach((Te) => {
                Te.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
              }),
                t.forEach((Te) => {
                  Te.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                o.forEach((Te) => {
                  Te.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                l.forEach((Te) => {
                  Te.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                });
            };
            _e(),
              de >= 0 &&
                de < t.length &&
                (d[de] && d[de].classList.add("is--outgoing"),
                t[de] && t[de].classList.add("is--outgoing"),
                o[de] && o[de].classList.add("is--outgoing"),
                l[de] && l[de].classList.add("is--outgoing"),
                I(de)),
              d[j] && d[j].classList.add("is--incoming"),
              t[j] && t[j].classList.add("is--incoming"),
              o[j] && o[j].classList.add("is--incoming"),
              l[j] && l[j].classList.add("is--incoming"),
              k(j),
              D(j),
              z(j),
              V.delayedCall(0.2, () => {
                _e(),
                  d[j] && d[j].classList.add("is--active"),
                  t[j] && t[j].classList.add("is--active"),
                  o[j] && o[j].classList.add("is--active"),
                  l[j] && l[j].classList.add("is--active"),
                  (m = j),
                  (w = !1),
                  L(j),
                  U && !_ && O();
              });
          }
        },
        b = () => {
          const W = (m + 1) % E;
          v(W);
        },
        C = () => {
          const W = m === 0 ? E - 1 : m - 1;
          v(W);
        },
        O = () => {
          y(),
            x &&
              !_ &&
              (S = setTimeout(() => {
                !_ && !w && x && b();
              }, P));
        },
        M = () => {
          y();
        },
        R = () => {
          M(),
            (_ = !0),
            T && clearTimeout(T),
            (T = setTimeout(() => {
              (_ = !1), O();
            }, 1e4));
        },
        A = () => {
          document.hidden || document.visibilityState === "hidden"
            ? ((x = !1), M())
            : document.visibilityState === "visible" &&
              ((x = !0),
              (g = setTimeout(() => {
                !_ && x && O();
              }, 100)));
        },
        q = () => {
          (x = !0),
            _ ||
              (g = setTimeout(() => {
                O();
              }, 100));
        },
        $ = () => {
          (x = !1), M();
        },
        Y = () => {
          R();
        };
      d[0] && d[0].classList.add("is--active"),
        t[0] && t[0].classList.add("is--active"),
        o[0] && o[0].classList.add("is--active"),
        l[0] && l[0].classList.add("is--active"),
        k(0),
        D(0),
        z(0),
        f &&
          f.addEventListener("click", () => {
            R(), C();
          }),
        h &&
          h.addEventListener("click", () => {
            R(), b();
          }),
        document.addEventListener("visibilitychange", A),
        window.addEventListener("focus", q),
        window.addEventListener("blur", $),
        r &&
          (r.addEventListener("touchstart", Y, { passive: !0 }),
          r.addEventListener("touchmove", Y, { passive: !0 })),
        L(0),
        O();
      const ee = () => {
        y(),
          V.delayedCall(0.1, () => {
            _ || O();
          });
      };
      return (
        window.addEventListener("resize", ee),
        () => {
          y(),
            window.removeEventListener("resize", ee),
            document.removeEventListener("visibilitychange", A),
            window.removeEventListener("focus", q),
            window.removeEventListener("blur", $),
            r &&
              (r.removeEventListener("touchstart", Y),
              r.removeEventListener("touchmove", Y)),
            V.killTweensOf([i, n, p]);
        }
      );
    },
    Hd = () => {
      bv();
    },
    Sv = () => {
      $i(), Up(), Qp(), Hd(), Jp(), Lm(), Om(), lr(), ur(), cr(), yv(), _v();
    };
  nt.use([wl]);
  const Tv = () => {
      new nt(".about_team_swiper", {
        slidesPerView: 3.2,
        breakpoints: {
          1440: { slidesPerView: 3.2 },
          1024: { slidesPerView: 2.5 },
          768: { slidesPerView: 2.2 },
          480: { slidesPerView: 1.1, spaceBetween: 14 },
          320: { slidesPerView: 1.1, spaceBetween: 14 },
          280: { slidesPerView: 1.1, spaceBetween: 14 },
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
        autoplay: { delay: 2500, disableOnInteraction: !1 },
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
    Wd = () => {
      Tv();
    },
    xv = () => {
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
    Cv = () => {
      xv();
    },
    Ev = () => {
      $i(), cr(), Wd(), Cv();
    },
    jd = (r) => document.querySelector(r),
    Pv = (r, e) => r.classList.add(e),
    Av = () => {
      const r = jd(".contact-form");
      r &&
        r.addEventListener("submit", (e) => {
          e.preventDefault();
        });
    };
  V.registerPlugin(te);
  const kv = () => {
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
    bn = () => {
      kv();
    };
  nt.use([zd, wl, Zg]);
  const Lv = () => {
      new nt(".product_img_swiper", {
        direction: "horizontal",
        loop: !1,
        slidesPerView: "auto",
        speed: 600,
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
    Ov = () => {
      $i(), bn(), cr(), _l(), ur(), lr();
    },
    Mv = () => {
      $i(), bn(), cr(), _l(), ur(), lr();
    },
    Dv = () => {
      $i(), bn(), cr(), _l(), ur(), lr();
    },
    Iv = () => {
      $i(), bn(), cr(), ur(), lr();
    },
    Rv = () => {
      $i(), bn(), cr(), Hd(), ur(), lr();
    },
    Nv = () => {
      document.querySelectorAll("[toast-wrap]").forEach(function (r) {
        const e = r.querySelectorAll("[toast-item]"),
          t = 0.5,
          i = 0.8,
          n = t + i,
          s = 3;
        let o = -1,
          a = 99999;
        const l = V.timeline({
          defaults: { duration: t, ease: "power1.inOut" },
        });
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
    zv = () => {
      Nv();
    },
    Fv = {
      home: Sv,
      about: Ev,
      contact: Av,
      crm: Ov,
      broker: Mv,
      quoting: Dv,
      demand: Iv,
      markets: Rv,
      operators: () => {
        cr(), lr(), ur(), zv();
      },
      inbound: () => {
        $i(), bn(), ur(), lr();
      },
      careers: () => {
        $i(), Wd();
      },
    },
    Bv = () => {
      const r = document.body.dataset.route,
        e = Fv[r];
      e && e();
    },
    qv = () => {
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
      t.forEach((w) => {
        const S = w.getBoundingClientRect();
        s.set(w, { width: S.width, height: S.height });
      }),
        (() => {
          const w = e[0];
          if (w) {
            const S = w.getAttribute("nav-menu-dropdown"),
              _ = document.querySelector(`[nav-menu-item='${S}']`);
            if (_) {
              const T = w.getBoundingClientRect(),
                g = i.getBoundingClientRect(),
                x = s.get(_);
              if (x) {
                const E = g.left + g.width / 2,
                  k = T.left + T.width / 2 - E,
                  I = x.height + 20,
                  D = x.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${k}px`),
                  n.style.setProperty("--siteMenuHeight", `${I}px`),
                  n.style.setProperty("--siteMenuWidth", `${D}px`);
              }
            }
          }
        })();
      const a = 25;
      let l = null,
        u = null;
      const c = (w) => {
          const S = Array.from(t),
            _ = S.indexOf(w);
          S.forEach((T, g) => {
            g < _
              ? T.setAttribute("pos", "left")
              : g === _
              ? T.setAttribute("pos", "active")
              : T.setAttribute("pos", "right"),
              T === w
                ? T.setAttribute("status", "active")
                : T.setAttribute("status", "inactive");
          });
        },
        d = (w, S) => {
          l && (clearTimeout(l), (l = null)), u !== w && ((u = w), h(w, S));
        },
        p = () => {
          l = setTimeout(() => {
            r.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              (u = null),
              (l = null);
          }, 100);
        },
        f = (w, S) => {
          const _ = S.bottom;
          return w >= _ && w <= _ + a;
        },
        h = (w, S) => {
          const _ = i.getBoundingClientRect(),
            T = w.getBoundingClientRect(),
            g = s.get(S);
          if (!g) return;
          const x = _.left + _.width / 2,
            E = T.left + T.width / 2,
            P = g.height + 20,
            k = g.width + 20,
            I = E - x;
          n.style.setProperty("--siteMenuTranslateX", `${I}px`),
            n.style.setProperty("--siteMenuHeight", `${P}px`),
            n.style.setProperty("--siteMenuWidth", `${k}px`),
            n.setAttribute("vis", "visible"),
            r.setAttribute("dropdown-vis", "visible"),
            c(S);
        },
        m = (w) => {
          if (!u) return;
          const S = u.getBoundingClientRect(),
            _ = n.getBoundingClientRect(),
            T = w.clientX,
            g = w.clientY,
            x = T >= S.left && T <= S.right && g >= S.top && g <= S.bottom,
            E = T >= _.left && T <= _.right && g >= _.top && g <= _.bottom,
            P =
              f(g, S) &&
              T >= Math.min(S.left, _.left) &&
              T <= Math.max(S.right, _.right);
          x || E || P ? l && (clearTimeout(l), (l = null)) : l || p();
        };
      document.addEventListener("mousemove", m),
        e.forEach((w) => {
          const S = w.getAttribute("nav-menu-dropdown"),
            _ = document.querySelector(`[nav-menu-item='${S}']`);
          _ &&
            w.addEventListener("mouseenter", () => {
              d(w, _);
            });
        }),
        n.addEventListener("mouseenter", () => {
          l && (clearTimeout(l), (l = null));
        }),
        n.addEventListener("mouseleave", () => {
          p();
        });
    },
    Vv = () => {
      qv();
    },
    $v = () => {
      const r = document.querySelector(".page_nav_size"),
        e = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (r.classList.add("is--active"), e.classList.add("is--active"))
          : (r.classList.remove("is--active"),
            e.classList.remove("is--active"));
      });
    },
    Hv = () => {
      $v();
    },
    Wv = () => {
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
                line: h,
              }) => {
                u.classList.remove("is--open"),
                  d.classList.remove("is--open"),
                  f.classList.remove("is--open"),
                  V.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  V.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  V.to(h, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  p.forEach((m) => m.classList.remove("is--open")),
                  V.to(p, {
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
    jv = () => Wv(),
    Gv = () => {
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
        p = (_, T) => {
          [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((x) => {
            x.classList.add(_), x.classList.remove(T);
          });
        },
        f = (_) => {
          r.forEach((T) => {
            T.setAttribute("aria-expanded", _ ? "true" : "false");
          });
        },
        h = () => {
          p(u, c),
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
        m = () => {
          p(c, u),
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
        w = () => {
          l ? (m(), (l = !1)) : (h(), (l = !0));
        };
      (() => {
        d(),
          r.forEach((_) => {
            _.addEventListener("click", w);
          });
      })();
    },
    Xv = () => {
      Gv();
    };
  V.registerPlugin(te);
  const Yv = () => {
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
            p = r(!1, s.getAttribute("tr-marquee-reverse")),
            f = r(!1, s.getAttribute("tr-marquee-scrolldirection")),
            h = r(!1, s.getAttribute("tr-marquee-scrollscrub")),
            m = -100,
            w = 1,
            S = !1;
          p && (m = 100);
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
          let T = { value: 1 };
          const g = te.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (E) => {
              if (
                !S &&
                (f &&
                  w !== E.direction &&
                  ((w = E.direction), _.timeScale(E.direction)),
                h)
              ) {
                let P = E.getVelocity() * 0.006;
                (P = V.utils.clamp(-60, 60, P)),
                  V.timeline({ onUpdate: () => _.timeScale(T.value) }).fromTo(
                    T,
                    { value: P },
                    { value: w, duration: 0.5 }
                  );
              }
            },
          });
          function x(E) {
            S = E;
            let P = { value: 1 },
              k = V.timeline({ onUpdate: () => _.timeScale(P.value) });
            E
              ? (k.fromTo(P, { value: w }, { value: 0, duration: 0.5 }),
                u.forEach((I) => e(I, "is-paused")))
              : (k.fromTo(P, { value: 0 }, { value: w, duration: 0.5 }),
                u.forEach((I) => t(I, "is-paused")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            l.forEach((E) => {
              E.addEventListener("mouseenter", () => x(!0)),
                E.addEventListener("mouseleave", () => x(!1));
            }),
            u.forEach((E) => {
              E.addEventListener("click", function () {
                const P = i(this, "is-paused");
                x(!P);
              });
            }),
            (s._marqueeCleanup = () => {
              g.kill(),
                _.kill(),
                l.forEach((E) => {
                  E.removeEventListener("mouseenter", () => x(!0)),
                    E.removeEventListener("mouseleave", () => x(!1));
                }),
                u.forEach((E) => {
                  E.removeEventListener("click", function () {
                    const P = i(this, "is-paused");
                    x(!P);
                  });
                });
            });
        });
    },
    Uv = () => {
      Yv();
    },
    Kv = () => {
      const r = document.querySelector(".page_header"),
        e = document.querySelectorAll(".page_nav_btn_item");
      if (!r) return;
      const t = document.querySelectorAll("[section-white], [section-dark]");
      if (t.length === 0) return;
      t.forEach((d, p) => {
        const f = d.hasAttribute("section-white");
        d.hasAttribute("section-dark");
      });
      const i = "data-wf--header-nav-header--variant",
        n = "data-wf--btn-main--style",
        s = Array.from(e).map((d) => {
          const p = d.querySelector("[data-wf--btn-main--style]");
          return {
            element: p,
            originalTheme: p?.getAttribute(n),
            originalClasses: p?.className,
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
          let p = null;
          for (const f of t) {
            const h = f.getBoundingClientRect();
            if (h.top <= 80 && h.bottom > 80) {
              p = f;
              break;
            }
          }
          if (p) {
            const f = p.hasAttribute("section-white"),
              h = p.hasAttribute("section-dark");
            let m = null;
            f ? (m = "white") : h && (m = "dark"),
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
    Qv = () => (document.querySelector(".page_header") ? Kv() : null);
  /*! @vimeo/player v2.29.1 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function Zv(
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
  function Gd(r, e) {
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
  function Xd(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Gd(Object(t), !0).forEach(function (i) {
            To(r, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
        : Gd(Object(t)).forEach(function (i) {
            Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return r;
  }
  function At() {
    At = function () {
      return r;
    };
    var r = {},
      e = Object.prototype,
      t = e.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (y, L, v) {
          y[L] = v.value;
        },
      n = typeof Symbol == "function" ? Symbol : {},
      s = n.iterator || "@@iterator",
      o = n.asyncIterator || "@@asyncIterator",
      a = n.toStringTag || "@@toStringTag";
    function l(y, L, v) {
      return (
        Object.defineProperty(y, L, {
          value: v,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        y[L]
      );
    }
    try {
      l({}, "");
    } catch {
      l = function (L, v, b) {
        return (L[v] = b);
      };
    }
    function u(y, L, v, b) {
      var C = L && L.prototype instanceof p ? L : p,
        O = Object.create(C.prototype),
        M = new I(b || []);
      return i(O, "_invoke", { value: x(y, v, M) }), O;
    }
    function c(y, L, v) {
      try {
        return { type: "normal", arg: y.call(L, v) };
      } catch (b) {
        return { type: "throw", arg: b };
      }
    }
    r.wrap = u;
    var d = {};
    function p() {}
    function f() {}
    function h() {}
    var m = {};
    l(m, s, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      S = w && w(w(D([])));
    S && S !== e && t.call(S, s) && (m = S);
    var _ = (h.prototype = p.prototype = Object.create(m));
    function T(y) {
      ["next", "throw", "return"].forEach(function (L) {
        l(y, L, function (v) {
          return this._invoke(L, v);
        });
      });
    }
    function g(y, L) {
      function v(C, O, M, R) {
        var A = c(y[C], y, O);
        if (A.type !== "throw") {
          var q = A.arg,
            $ = q.value;
          return $ && typeof $ == "object" && t.call($, "__await")
            ? L.resolve($.__await).then(
                function (Y) {
                  v("next", Y, M, R);
                },
                function (Y) {
                  v("throw", Y, M, R);
                }
              )
            : L.resolve($).then(
                function (Y) {
                  (q.value = Y), M(q);
                },
                function (Y) {
                  return v("throw", Y, M, R);
                }
              );
        }
        R(A.arg);
      }
      var b;
      i(this, "_invoke", {
        value: function (C, O) {
          function M() {
            return new L(function (R, A) {
              v(C, O, R, A);
            });
          }
          return (b = b ? b.then(M, M) : M());
        },
      });
    }
    function x(y, L, v) {
      var b = "suspendedStart";
      return function (C, O) {
        if (b === "executing") throw new Error("Generator is already running");
        if (b === "completed") {
          if (C === "throw") throw O;
          return z();
        }
        for (v.method = C, v.arg = O; ; ) {
          var M = v.delegate;
          if (M) {
            var R = E(M, v);
            if (R) {
              if (R === d) continue;
              return R;
            }
          }
          if (v.method === "next") v.sent = v._sent = v.arg;
          else if (v.method === "throw") {
            if (b === "suspendedStart") throw ((b = "completed"), v.arg);
            v.dispatchException(v.arg);
          } else v.method === "return" && v.abrupt("return", v.arg);
          b = "executing";
          var A = c(y, L, v);
          if (A.type === "normal") {
            if (((b = v.done ? "completed" : "suspendedYield"), A.arg === d))
              continue;
            return { value: A.arg, done: v.done };
          }
          A.type === "throw" &&
            ((b = "completed"), (v.method = "throw"), (v.arg = A.arg));
        }
      };
    }
    function E(y, L) {
      var v = L.method,
        b = y.iterator[v];
      if (b === void 0)
        return (
          (L.delegate = null),
          (v === "throw" &&
            y.iterator.return &&
            ((L.method = "return"),
            (L.arg = void 0),
            E(y, L),
            L.method === "throw")) ||
            (v !== "return" &&
              ((L.method = "throw"),
              (L.arg = new TypeError(
                "The iterator does not provide a '" + v + "' method"
              )))),
          d
        );
      var C = c(b, y.iterator, L.arg);
      if (C.type === "throw")
        return (L.method = "throw"), (L.arg = C.arg), (L.delegate = null), d;
      var O = C.arg;
      return O
        ? O.done
          ? ((L[y.resultName] = O.value),
            (L.next = y.nextLoc),
            L.method !== "return" && ((L.method = "next"), (L.arg = void 0)),
            (L.delegate = null),
            d)
          : O
        : ((L.method = "throw"),
          (L.arg = new TypeError("iterator result is not an object")),
          (L.delegate = null),
          d);
    }
    function P(y) {
      var L = { tryLoc: y[0] };
      1 in y && (L.catchLoc = y[1]),
        2 in y && ((L.finallyLoc = y[2]), (L.afterLoc = y[3])),
        this.tryEntries.push(L);
    }
    function k(y) {
      var L = y.completion || {};
      (L.type = "normal"), delete L.arg, (y.completion = L);
    }
    function I(y) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        y.forEach(P, this),
        this.reset(!0);
    }
    function D(y) {
      if (y) {
        var L = y[s];
        if (L) return L.call(y);
        if (typeof y.next == "function") return y;
        if (!isNaN(y.length)) {
          var v = -1,
            b = function C() {
              for (; ++v < y.length; )
                if (t.call(y, v)) return (C.value = y[v]), (C.done = !1), C;
              return (C.value = void 0), (C.done = !0), C;
            };
          return (b.next = b);
        }
      }
      return { next: z };
    }
    function z() {
      return { value: void 0, done: !0 };
    }
    return (
      (f.prototype = h),
      i(_, "constructor", { value: h, configurable: !0 }),
      i(h, "constructor", { value: f, configurable: !0 }),
      (f.displayName = l(h, a, "GeneratorFunction")),
      (r.isGeneratorFunction = function (y) {
        var L = typeof y == "function" && y.constructor;
        return (
          !!L && (L === f || (L.displayName || L.name) === "GeneratorFunction")
        );
      }),
      (r.mark = function (y) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(y, h)
            : ((y.__proto__ = h), l(y, a, "GeneratorFunction")),
          (y.prototype = Object.create(_)),
          y
        );
      }),
      (r.awrap = function (y) {
        return { __await: y };
      }),
      T(g.prototype),
      l(g.prototype, o, function () {
        return this;
      }),
      (r.AsyncIterator = g),
      (r.async = function (y, L, v, b, C) {
        C === void 0 && (C = Promise);
        var O = new g(u(y, L, v, b), C);
        return r.isGeneratorFunction(L)
          ? O
          : O.next().then(function (M) {
              return M.done ? M.value : O.next();
            });
      }),
      T(_),
      l(_, a, "Generator"),
      l(_, s, function () {
        return this;
      }),
      l(_, "toString", function () {
        return "[object Generator]";
      }),
      (r.keys = function (y) {
        var L = Object(y),
          v = [];
        for (var b in L) v.push(b);
        return (
          v.reverse(),
          function C() {
            for (; v.length; ) {
              var O = v.pop();
              if (O in L) return (C.value = O), (C.done = !1), C;
            }
            return (C.done = !0), C;
          }
        );
      }),
      (r.values = D),
      (I.prototype = {
        constructor: I,
        reset: function (y) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(k),
            !y)
          )
            for (var L in this)
              L.charAt(0) === "t" &&
                t.call(this, L) &&
                !isNaN(+L.slice(1)) &&
                (this[L] = void 0);
        },
        stop: function () {
          this.done = !0;
          var y = this.tryEntries[0].completion;
          if (y.type === "throw") throw y.arg;
          return this.rval;
        },
        dispatchException: function (y) {
          if (this.done) throw y;
          var L = this;
          function v(A, q) {
            return (
              (O.type = "throw"),
              (O.arg = y),
              (L.next = A),
              q && ((L.method = "next"), (L.arg = void 0)),
              !!q
            );
          }
          for (var b = this.tryEntries.length - 1; b >= 0; --b) {
            var C = this.tryEntries[b],
              O = C.completion;
            if (C.tryLoc === "root") return v("end");
            if (C.tryLoc <= this.prev) {
              var M = t.call(C, "catchLoc"),
                R = t.call(C, "finallyLoc");
              if (M && R) {
                if (this.prev < C.catchLoc) return v(C.catchLoc, !0);
                if (this.prev < C.finallyLoc) return v(C.finallyLoc);
              } else if (M) {
                if (this.prev < C.catchLoc) return v(C.catchLoc, !0);
              } else {
                if (!R)
                  throw new Error("try statement without catch or finally");
                if (this.prev < C.finallyLoc) return v(C.finallyLoc);
              }
            }
          }
        },
        abrupt: function (y, L) {
          for (var v = this.tryEntries.length - 1; v >= 0; --v) {
            var b = this.tryEntries[v];
            if (
              b.tryLoc <= this.prev &&
              t.call(b, "finallyLoc") &&
              this.prev < b.finallyLoc
            ) {
              var C = b;
              break;
            }
          }
          C &&
            (y === "break" || y === "continue") &&
            C.tryLoc <= L &&
            L <= C.finallyLoc &&
            (C = null);
          var O = C ? C.completion : {};
          return (
            (O.type = y),
            (O.arg = L),
            C
              ? ((this.method = "next"), (this.next = C.finallyLoc), d)
              : this.complete(O)
          );
        },
        complete: function (y, L) {
          if (y.type === "throw") throw y.arg;
          return (
            y.type === "break" || y.type === "continue"
              ? (this.next = y.arg)
              : y.type === "return"
              ? ((this.rval = this.arg = y.arg),
                (this.method = "return"),
                (this.next = "end"))
              : y.type === "normal" && L && (this.next = L),
            d
          );
        },
        finish: function (y) {
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var v = this.tryEntries[L];
            if (v.finallyLoc === y)
              return this.complete(v.completion, v.afterLoc), k(v), d;
          }
        },
        catch: function (y) {
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var v = this.tryEntries[L];
            if (v.tryLoc === y) {
              var b = v.completion;
              if (b.type === "throw") {
                var C = b.arg;
                k(v);
              }
              return C;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (y, L, v) {
          return (
            (this.delegate = { iterator: D(y), resultName: L, nextLoc: v }),
            this.method === "next" && (this.arg = void 0),
            d
          );
        },
      }),
      r
    );
  }
  function Yd(r, e, t, i, n, s, o) {
    try {
      var a = r[s](o),
        l = a.value;
    } catch (u) {
      t(u);
      return;
    }
    a.done ? e(l) : Promise.resolve(l).then(i, n);
  }
  function zr(r) {
    return function () {
      var e = this,
        t = arguments;
      return new Promise(function (i, n) {
        var s = r.apply(e, t);
        function o(l) {
          Yd(s, i, n, o, a, "next", l);
        }
        function a(l) {
          Yd(s, i, n, o, a, "throw", l);
        }
        o(void 0);
      });
    };
  }
  function Ud(r, e) {
    if (!(r instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function Kd(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, ef(i.key), i);
    }
  }
  function Qd(r, e, t) {
    return (
      e && Kd(r.prototype, e),
      t && Kd(r, t),
      Object.defineProperty(r, "prototype", { writable: !1 }),
      r
    );
  }
  function To(r, e, t) {
    return (
      (e = ef(e)),
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
  function Jv(r, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    (r.prototype = Object.create(e && e.prototype, {
      constructor: { value: r, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(r, "prototype", { writable: !1 }),
      e && vs(r, e);
  }
  function gs(r) {
    return (
      (gs = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      gs(r)
    );
  }
  function vs(r, e) {
    return (
      (vs = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (i, n) {
            return (i.__proto__ = n), i;
          }),
      vs(r, e)
    );
  }
  function Zd() {
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
  function xo(r, e, t) {
    return (
      Zd()
        ? (xo = Reflect.construct.bind())
        : (xo = function (n, s, o) {
            var a = [null];
            a.push.apply(a, s);
            var l = Function.bind.apply(n, a),
              u = new l();
            return o && vs(u, o.prototype), u;
          }),
      xo.apply(null, arguments)
    );
  }
  function ey(r) {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  }
  function bl(r) {
    var e = typeof Map == "function" ? new Map() : void 0;
    return (
      (bl = function (i) {
        if (i === null || !ey(i)) return i;
        if (typeof i != "function")
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (typeof e < "u") {
          if (e.has(i)) return e.get(i);
          e.set(i, n);
        }
        function n() {
          return xo(i, arguments, gs(this).constructor);
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
          vs(n, i)
        );
      }),
      bl(r)
    );
  }
  function Co(r) {
    if (r === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r;
  }
  function ty(r, e) {
    if (e && (typeof e == "object" || typeof e == "function")) return e;
    if (e !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Co(r);
  }
  function iy(r) {
    var e = Zd();
    return function () {
      var i = gs(r),
        n;
      if (e) {
        var s = gs(this).constructor;
        n = Reflect.construct(i, arguments, s);
      } else n = i.apply(this, arguments);
      return ty(this, n);
    };
  }
  function ry(r, e) {
    return ny(r) || Zv(r, e) || sy(r, e) || oy();
  }
  function ny(r) {
    if (Array.isArray(r)) return r;
  }
  function sy(r, e) {
    if (r) {
      if (typeof r == "string") return Jd(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      if (
        (t === "Object" && r.constructor && (t = r.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(r);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return Jd(r, e);
    }
  }
  function Jd(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
    return i;
  }
  function oy() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ay(r, e) {
    if (typeof r != "object" || r === null) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
      var i = t.call(r, e);
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r);
  }
  function ef(r) {
    var e = ay(r, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  var ly =
      typeof global < "u" && {}.toString.call(global) === "[object global]",
    uy = typeof Bun < "u",
    cy = typeof Deno < "u",
    tf = ly || uy || cy;
  function rf(r, e) {
    return r.indexOf(e.toLowerCase()) === 0
      ? r
      : ""
          .concat(e.toLowerCase())
          .concat(r.substr(0, 1).toUpperCase())
          .concat(r.substr(1));
  }
  function dy(r) {
    return !!(
      r &&
      r.nodeType === 1 &&
      "nodeName" in r &&
      r.ownerDocument &&
      r.ownerDocument.defaultView
    );
  }
  function fy(r) {
    return !isNaN(parseFloat(r)) && isFinite(r) && Math.floor(r) == r;
  }
  function Wi(r) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      r
    );
  }
  function nf(r) {
    var e =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return e.test(r);
  }
  function py(r) {
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
  function sf() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = r.id,
      t = r.url,
      i = e || t;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (fy(i)) return "https://vimeo.com/".concat(i);
    if (Wi(i)) return i.replace("http:", "https:");
    throw e
      ? new TypeError("“".concat(e, "” is not a valid video id."))
      : new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  var of = function (e, t, i) {
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
    hy = function () {};
  function Eo(r) {
    var e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
    if (!r || !e || typeof e.querySelectorAll != "function") return null;
    for (var t = e.querySelectorAll("iframe"), i = 0; i < t.length; i++)
      if (t[i] && t[i].contentWindow === r) return t[i];
    return null;
  }
  var my = typeof Array.prototype.indexOf < "u",
    gy = typeof window < "u" && typeof window.postMessage < "u";
  if (!tf && (!my || !gy))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var Sn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function vy(r, e) {
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
      : Sn
  );
  var pi = vy(function (r) {
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (t, i, n) {
        (i[t] = i[t] || n()), r.exports && (r.exports = i[t]);
      })("Promise", Sn, function () {
        var t,
          i,
          n,
          s = Object.prototype.toString,
          o =
            typeof setImmediate < "u"
              ? function (T) {
                  return setImmediate(T);
                }
              : setTimeout;
        try {
          t = function (T, g, x, E) {
            return Object.defineProperty(T, g, {
              value: x,
              writable: !0,
              configurable: E !== !1,
            });
          };
        } catch {
          t = function (g, x, E) {
            return (g[x] = E), g;
          };
        }
        n = (function () {
          var T, g, x;
          function E(P, k) {
            (this.fn = P), (this.self = k), (this.next = void 0);
          }
          return {
            add: function (k, I) {
              (x = new E(k, I)),
                g ? (g.next = x) : (T = x),
                (g = x),
                (x = void 0);
            },
            drain: function () {
              var k = T;
              for (T = g = i = void 0; k; ) k.fn.call(k.self), (k = k.next);
            },
          };
        })();
        function a(_, T) {
          n.add(_, T), i || (i = o(n.drain));
        }
        function l(_) {
          var T,
            g = typeof _;
          return (
            _ != null && (g == "object" || g == "function") && (T = _.then),
            typeof T == "function" ? T : !1
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
        function c(_, T, g) {
          var x, E;
          try {
            T === !1
              ? g.reject(_.msg)
              : (T === !0 ? (x = _.msg) : (x = T.call(void 0, _.msg)),
                x === g.promise
                  ? g.reject(TypeError("Promise-chain cycle"))
                  : (E = l(x))
                  ? E.call(x, g.resolve, g.reject)
                  : g.resolve(x));
          } catch (P) {
            g.reject(P);
          }
        }
        function d(_) {
          var T,
            g = this;
          if (!g.triggered) {
            (g.triggered = !0), g.def && (g = g.def);
            try {
              (T = l(_))
                ? a(function () {
                    var x = new h(g);
                    try {
                      T.call(
                        _,
                        function () {
                          d.apply(x, arguments);
                        },
                        function () {
                          p.apply(x, arguments);
                        }
                      );
                    } catch (E) {
                      p.call(x, E);
                    }
                  })
                : ((g.msg = _), (g.state = 1), g.chain.length > 0 && a(u, g));
            } catch (x) {
              p.call(new h(g), x);
            }
          }
        }
        function p(_) {
          var T = this;
          T.triggered ||
            ((T.triggered = !0),
            T.def && (T = T.def),
            (T.msg = _),
            (T.state = 2),
            T.chain.length > 0 && a(u, T));
        }
        function f(_, T, g, x) {
          for (var E = 0; E < T.length; E++)
            (function (k) {
              _.resolve(T[k]).then(function (D) {
                g(k, D);
              }, x);
            })(E);
        }
        function h(_) {
          (this.def = _), (this.triggered = !1);
        }
        function m(_) {
          (this.promise = _),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function w(_) {
          if (typeof _ != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var T = new m(this);
          (this.then = function (x, E) {
            var P = {
              success: typeof x == "function" ? x : !0,
              failure: typeof E == "function" ? E : !1,
            };
            return (
              (P.promise = new this.constructor(function (I, D) {
                if (typeof I != "function" || typeof D != "function")
                  throw TypeError("Not a function");
                (P.resolve = I), (P.reject = D);
              })),
              T.chain.push(P),
              T.state !== 0 && a(u, T),
              P.promise
            );
          }),
            (this.catch = function (x) {
              return this.then(void 0, x);
            });
          try {
            _.call(
              void 0,
              function (x) {
                d.call(T, x);
              },
              function (x) {
                p.call(T, x);
              }
            );
          } catch (g) {
            p.call(T, g);
          }
        }
        var S = t({}, "constructor", w, !1);
        return (
          (w.prototype = S),
          t(S, "__NPO__", 0, !1),
          t(w, "resolve", function (T) {
            var g = this;
            return T && typeof T == "object" && T.__NPO__ === 1
              ? T
              : new g(function (E, P) {
                  if (typeof E != "function" || typeof P != "function")
                    throw TypeError("Not a function");
                  E(T);
                });
          }),
          t(w, "reject", function (T) {
            return new this(function (x, E) {
              if (typeof x != "function" || typeof E != "function")
                throw TypeError("Not a function");
              E(T);
            });
          }),
          t(w, "all", function (T) {
            var g = this;
            return s.call(T) != "[object Array]"
              ? g.reject(TypeError("Not an array"))
              : T.length === 0
              ? g.resolve([])
              : new g(function (E, P) {
                  if (typeof E != "function" || typeof P != "function")
                    throw TypeError("Not a function");
                  var k = T.length,
                    I = Array(k),
                    D = 0;
                  f(
                    g,
                    T,
                    function (y, L) {
                      (I[y] = L), ++D === k && E(I);
                    },
                    P
                  );
                });
          }),
          t(w, "race", function (T) {
            var g = this;
            return s.call(T) != "[object Array]"
              ? g.reject(TypeError("Not an array"))
              : new g(function (E, P) {
                  if (typeof E != "function" || typeof P != "function")
                    throw TypeError("Not a function");
                  f(
                    g,
                    T,
                    function (I, D) {
                      E(D);
                    },
                    P
                  );
                });
          }),
          w
        );
      });
    }),
    ji = new WeakMap();
  function ys(r, e, t) {
    var i = ji.get(r.element) || {};
    e in i || (i[e] = []), i[e].push(t), ji.set(r.element, i);
  }
  function Po(r, e) {
    var t = ji.get(r.element) || {};
    return t[e] || [];
  }
  function Ao(r, e, t) {
    var i = ji.get(r.element) || {};
    if (!i[e]) return !0;
    if (!t) return (i[e] = []), ji.set(r.element, i), !0;
    var n = i[e].indexOf(t);
    return (
      n !== -1 && i[e].splice(n, 1),
      ji.set(r.element, i),
      i[e] && i[e].length === 0
    );
  }
  function yy(r, e) {
    var t = Po(r, e);
    if (t.length < 1) return !1;
    var i = t.shift();
    return Ao(r, e, i), i;
  }
  function wy(r, e) {
    var t = ji.get(r);
    ji.set(e, t), ji.delete(r);
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
  function Fr(r, e, t) {
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
  function _y(r, e) {
    e = ws(e);
    var t = [],
      i;
    if (e.event) {
      if (e.event === "error") {
        var n = Po(r, e.data.method);
        n.forEach(function (o) {
          var a = new Error(e.data.message);
          (a.name = e.data.name), o.reject(a), Ao(r, e.data.method, o);
        });
      }
      (t = Po(r, "event:".concat(e.event))), (i = e.data);
    } else if (e.method) {
      var s = yy(r, e.method);
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
  var by = [
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
  function af(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return by.reduce(function (t, i) {
      var n = r.getAttribute("data-vimeo-".concat(i));
      return (n || n === "") && (t[i] = n === "" ? 1 : n), t;
    }, e);
  }
  function Sl(r, e) {
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
  function lf(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (i, n) {
      if (!Wi(r))
        throw new TypeError("“".concat(r, "” is not a vimeo.com url."));
      var s = py(r),
        o = "https://"
          .concat(s, "/api/oembed.json?url=")
          .concat(encodeURIComponent(r));
      for (var a in e)
        e.hasOwnProperty(a) &&
          (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
      var l =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
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
              Sl(u, t), n(new Error("“".concat(r, "” is not embeddable.")));
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
  function Sy() {
    var r =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : document,
      e = [].slice.call(
        r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
      ),
      t = function (n) {
        "console" in window;
      };
    e.forEach(function (i) {
      try {
        if (i.getAttribute("data-vimeo-defer") !== null) return;
        var n = af(i),
          s = sf(n);
        lf(s, n, i)
          .then(function (o) {
            return Sl(o, i);
          })
          .catch(t);
      } catch (o) {
        t(o);
      }
    });
  }
  function Ty() {
    var r =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
      window.VimeoPlayerResizeEmbeds_ = !0;
      var e = function (i) {
        if (Wi(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
          var n = i.source ? Eo(i.source, r) : null;
          if (n) {
            var s = n.parentElement;
            s.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
          }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function xy() {
    var r =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
      window.VimeoSeoMetadataAppended = !0;
      var e = function (i) {
        if (Wi(i.origin)) {
          var n = ws(i.data);
          if (!(!n || n.event !== "ready")) {
            var s = i.source ? Eo(i.source, r) : null;
            if (s && nf(s.src)) {
              var o = new xl(s);
              o.callMethod("appendVideoMetadata", window.location.href);
            }
          }
        }
      };
      window.addEventListener("message", e);
    }
  }
  function Cy() {
    var r =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
      window.VimeoCheckedUrlTimeParam = !0;
      var e = function (n) {
          "console" in window;
        },
        t = function (n) {
          if (Wi(n.origin)) {
            var s = ws(n.data);
            if (!(!s || s.event !== "ready")) {
              var o = n.source ? Eo(n.source, r) : null;
              if (o && nf(o.src)) {
                var a = new xl(o);
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
  function Ey() {
    if (!window.VimeoDRMEmbedsUpdated) {
      window.VimeoDRMEmbedsUpdated = !0;
      var r = function (t) {
        if (Wi(t.origin)) {
          var i = ws(t.data);
          if (!(!i || i.event !== "drminitfailed")) {
            var n = t.source ? Eo(t.source) : null;
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
  function Py() {
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
  var Ay = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    ky = (function (r) {
      Jv(t, r);
      var e = iy(t);
      function t(i, n) {
        var s,
          o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          a = arguments.length > 3 ? arguments[3] : void 0;
        return (
          Ud(this, t),
          (s = e.call(this)),
          To(Co(s), "logger", void 0),
          To(Co(s), "speedAdjustment", 0),
          To(
            Co(s),
            "adjustSpeed",
            (function () {
              var l = zr(
                At().mark(function u(c, d) {
                  var p;
                  return At().wrap(function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          if (s.speedAdjustment !== d) {
                            h.next = 2;
                            break;
                          }
                          return h.abrupt("return");
                        case 2:
                          return (h.next = 4), c.getPlaybackRate();
                        case 4:
                          return (
                            (h.t0 = h.sent),
                            (h.t1 = s.speedAdjustment),
                            (h.t2 = h.t0 - h.t1),
                            (h.t3 = d),
                            (p = h.t2 + h.t3),
                            s.log("New playbackRate:  ".concat(p)),
                            (h.next = 12),
                            c.setPlaybackRate(p)
                          );
                        case 12:
                          s.speedAdjustment = d;
                        case 13:
                        case "end":
                          return h.stop();
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
          s.init(n, i, Xd(Xd({}, Ay), o)),
          s
        );
      }
      return (
        Qd(t, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value: (function () {
              var i = zr(
                At().mark(function s(o, a, l) {
                  var u = this,
                    c,
                    d,
                    p;
                  return At().wrap(
                    function (h) {
                      for (;;)
                        switch ((h.prev = h.next)) {
                          case 0:
                            return (
                              (h.next = 2), this.waitForTOReadyState(o, "open")
                            );
                          case 2:
                            if (l.role !== "viewer") {
                              h.next = 10;
                              break;
                            }
                            return (h.next = 5), this.updatePlayer(o, a, l);
                          case 5:
                            (c = of(o, "change", function () {
                              return u.updatePlayer(o, a, l);
                            })),
                              (d = this.maintainPlaybackPosition(o, a, l)),
                              this.addEventListener("disconnect", function () {
                                d.cancel(), c.cancel();
                              }),
                              (h.next = 14);
                            break;
                          case 10:
                            return (h.next = 12), this.updateTimingObject(o, a);
                          case 12:
                            (p = of(
                              a,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return u.updateTimingObject(o, a);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return p.cancel();
                              });
                          case 14:
                          case "end":
                            return h.stop();
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
              var i = zr(
                At().mark(function s(o, a) {
                  var l, u, c, d, p;
                  return At().wrap(function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          return (
                            (h.next = 2),
                            Promise.all([
                              a.getCurrentTime(),
                              a.getPaused(),
                              a.getPlaybackRate(),
                            ])
                          );
                        case 2:
                          (l = h.sent),
                            (u = ry(l, 3)),
                            (c = u[0]),
                            (d = u[1]),
                            (p = u[2]),
                            o.update({ position: c, velocity: d ? 0 : p });
                        case 8:
                        case "end":
                          return h.stop();
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
              var i = zr(
                At().mark(function s(o, a, l) {
                  var u, c, d;
                  return At().wrap(
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
                                  var h = zr(
                                    At().mark(function m(w) {
                                      return At().wrap(function (_) {
                                        for (;;)
                                          switch ((_.prev = _.next)) {
                                            case 0:
                                              if (
                                                !(
                                                  w.name ===
                                                    "NotAllowedError" &&
                                                  l.autoPlayMuted
                                                )
                                              ) {
                                                _.next = 5;
                                                break;
                                              }
                                              return (
                                                (_.next = 3), a.setMuted(!0)
                                              );
                                            case 3:
                                              return (
                                                (_.next = 5),
                                                a.play().catch(function (T) {})
                                              );
                                            case 5:
                                            case "end":
                                              return _.stop();
                                          }
                                      }, m);
                                    })
                                  );
                                  return function (m) {
                                    return h.apply(this, arguments);
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
                p = o.maxTimeToCatchUp,
                f = Math.min(p, Math.max(c, u)) * 1e3,
                h = (function () {
                  var w = zr(
                    At().mark(function S() {
                      var _, T, g, x, E;
                      return At().wrap(function (k) {
                        for (;;)
                          switch ((k.prev = k.next)) {
                            case 0:
                              if (((k.t0 = n.query().velocity === 0), k.t0)) {
                                k.next = 6;
                                break;
                              }
                              return (k.next = 4), s.getPaused();
                            case 4:
                              (k.t1 = k.sent), (k.t0 = k.t1 === !0);
                            case 6:
                              if (!k.t0) {
                                k.next = 8;
                                break;
                              }
                              return k.abrupt("return");
                            case 8:
                              return (
                                (k.t2 = n.query().position),
                                (k.next = 11),
                                s.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((k.t3 = k.sent),
                                (_ = k.t2 - k.t3),
                                (T = Math.abs(_)),
                                a.log("Drift: ".concat(_)),
                                !(T > u))
                              ) {
                                k.next = 22;
                                break;
                              }
                              return (k.next = 18), a.adjustSpeed(s, 0);
                            case 18:
                              s.setCurrentTime(n.query().position),
                                a.log("Resync by currentTime"),
                                (k.next = 29);
                              break;
                            case 22:
                              if (!(T > l)) {
                                k.next = 29;
                                break;
                              }
                              return (
                                (g = T / p),
                                (x = d),
                                (E = g < x ? (x - g) / 2 : x),
                                (k.next = 28),
                                a.adjustSpeed(s, E * Math.sign(_))
                              );
                            case 28:
                              a.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return k.stop();
                          }
                      }, S);
                    })
                  );
                  return function () {
                    return w.apply(this, arguments);
                  };
                })(),
                m = setInterval(function () {
                  return h();
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
    })(bl(EventTarget)),
    Tn = new WeakMap(),
    Tl = new WeakMap(),
    Ft = {},
    xl = (function () {
      function r(e) {
        var t = this,
          i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (Ud(this, r),
          window.jQuery &&
            e instanceof jQuery &&
            (e.length > 1 && window.console, (e = e[0])),
          typeof document < "u" &&
            typeof e == "string" &&
            (e = document.getElementById(e)),
          !dy(e))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (e.nodeName !== "IFRAME") {
          var n = e.querySelector("iframe");
          n && (e = n);
        }
        if (e.nodeName === "IFRAME" && !Wi(e.getAttribute("src") || ""))
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if (Tn.has(e)) return Tn.get(e);
        (this._window = e.ownerDocument.defaultView),
          (this.element = e),
          (this.origin = "*");
        var s = new pi(function (a, l) {
          if (
            ((t._onMessage = function (d) {
              if (!(!Wi(d.origin) || t.element.contentWindow !== d.source)) {
                t.origin === "*" && (t.origin = d.origin);
                var p = ws(d.data),
                  f = p && p.event === "error",
                  h = f && p.data && p.data.method === "ready";
                if (h) {
                  var m = new Error(p.data.message);
                  (m.name = p.data.name), l(m);
                  return;
                }
                var w = p && p.event === "ready",
                  S = p && p.method === "ping";
                if (w || S) {
                  t.element.setAttribute("data-ready", "true"), a();
                  return;
                }
                _y(t, p);
              }
            }),
            t._window.addEventListener("message", t._onMessage),
            t.element.nodeName !== "IFRAME")
          ) {
            var u = af(e, i),
              c = sf(u);
            lf(c, u, e)
              .then(function (d) {
                var p = Sl(d, e);
                return (
                  (t.element = p),
                  (t._originalElement = e),
                  wy(e, p),
                  Tn.set(t.element, t),
                  d
                );
              })
              .catch(l);
          }
        });
        if (
          (Tl.set(this, s),
          Tn.set(this.element, this),
          this.element.nodeName === "IFRAME" && Fr(this, "ping"),
          Ft.isEnabled)
        ) {
          var o = function () {
            return Ft.exit();
          };
          (this.fullscreenchangeHandler = function () {
            Ft.isFullscreen
              ? ys(t, "event:exitFullscreen", o)
              : Ao(t, "event:exitFullscreen", o),
              t.ready().then(function () {
                Fr(t, "fullscreenchange", Ft.isFullscreen);
              });
          }),
            Ft.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
      }
      return (
        Qd(
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
                return new pi(function (a, l) {
                  return i
                    .ready()
                    .then(function () {
                      ys(i, t, { resolve: a, reject: l }),
                        s.length === 0
                          ? (s = {})
                          : s.length === 1 && (s = s[0]),
                        Fr(i, t, s);
                    })
                    .catch(l);
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                var i = this;
                return new pi(function (n, s) {
                  return (
                    (t = rf(t, "get")),
                    i
                      .ready()
                      .then(function () {
                        ys(i, t, { resolve: n, reject: s }), Fr(i, t);
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
                return new pi(function (s, o) {
                  if (((t = rf(t, "set")), i == null))
                    throw new TypeError("There must be a value to set.");
                  return n
                    .ready()
                    .then(function () {
                      ys(n, t, { resolve: s, reject: o }), Fr(n, t, i);
                    })
                    .catch(o);
                });
              },
            },
            {
              key: "on",
              value: function (t, i) {
                if (!t) throw new TypeError("You must pass an event name.");
                if (!i)
                  throw new TypeError("You must pass a callback function.");
                if (typeof i != "function")
                  throw new TypeError("The callback must be a function.");
                var n = Po(this, "event:".concat(t));
                n.length === 0 &&
                  this.callMethod("addEventListener", t).catch(function () {}),
                  ys(this, "event:".concat(t), i);
              },
            },
            {
              key: "off",
              value: function (t, i) {
                if (!t) throw new TypeError("You must pass an event name.");
                if (i && typeof i != "function")
                  throw new TypeError("The callback must be a function.");
                var n = Ao(this, "event:".concat(t), i);
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
                  Tl.get(this) ||
                  new pi(function (i, n) {
                    n(new Error("Unknown player. Probably unloaded."));
                  });
                return pi.resolve(t);
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
                return Ft.isEnabled
                  ? Ft.request(this.element)
                  : this.callMethod("requestFullscreen");
              },
            },
            {
              key: "exitFullscreen",
              value: function () {
                return Ft.isEnabled
                  ? Ft.exit()
                  : this.callMethod("exitFullscreen");
              },
            },
            {
              key: "getFullscreen",
              value: function () {
                return Ft.isEnabled
                  ? pi.resolve(Ft.isFullscreen)
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
                return new pi(function (i) {
                  if (
                    (Tl.delete(t),
                    Tn.delete(t.element),
                    t._originalElement &&
                      (Tn.delete(t._originalElement),
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
                    Ft.isEnabled &&
                      Ft.off("fullscreenchange", t.fullscreenchangeHandler),
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
                return pi.all([
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
                  return new pi(function (s, o) {
                    return o(new TypeError("Argument must be an array."));
                  });
                var i = new pi(function (s) {
                    return s(null);
                  }),
                  n = [
                    t[0] ? this.set("colorOne", t[0]) : i,
                    t[1] ? this.set("colorTwo", t[1]) : i,
                    t[2] ? this.set("colorThree", t[2]) : i,
                    t[3] ? this.set("colorFour", t[3]) : i,
                  ];
                return pi.all(n);
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
                var e = zr(
                  At().mark(function i(n, s) {
                    var o = this,
                      a;
                    return At().wrap(
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
                                (a = new ky(this, n, s)),
                                Fr(this, "notifyTimingObjectConnect"),
                                a.addEventListener("disconnect", function () {
                                  return Fr(o, "notifyTimingObjectDisconnect");
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
                return Wi(t);
              },
            },
          ]
        ),
        r
      );
    })();
  tf || ((Ft = Py()), Sy(), Ty(), xy(), Cy(), hy(), Ey());
  const Ly = () => {
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
              const [y, L] = n.split("?");
              o.set("h", y),
                new URLSearchParams(L).forEach((b, C) => {
                  o.set(C, b);
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
            u = new xl(l);
          e.getAttribute("data-vimeo-update-size") === "true" &&
            u.getVideoWidth().then(function (y) {
              u.getVideoHeight().then(function (L) {
                const v = e.querySelector(".vimeo-player__before");
                v && (v.style.paddingTop = (L / y) * 100 + "%");
              });
            });
          let c;
          e.getAttribute("data-vimeo-update-size") === "cover" &&
            u.getVideoWidth().then(function (y) {
              u.getVideoHeight().then(function (L) {
                c = L / y;
                const v = e.querySelector(".vimeo-player__before");
                v && (v.style.paddingTop = "0%"), d();
              });
            });
          function d() {
            const y = e.offsetHeight / e.offsetWidth,
              L = e.querySelector(".vimeo-player__iframe");
            if (L && c)
              if (y > c) {
                const v = y / c;
                (L.style.width = v * 100 + "%"), (L.style.height = "100%");
              } else {
                const v = c / y;
                (L.style.height = v * 100 + "%"), (L.style.width = "100%");
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
            let y = function () {
              const L = e.getBoundingClientRect();
              L.top < window.innerHeight && L.bottom > 0 ? p() : f();
            };
            y(), window.addEventListener("scroll", y);
          }
          function p() {
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
          const h = e.querySelector('[data-vimeo-control="play"]');
          h &&
            h.addEventListener("click", function () {
              u.setVolume(0),
                p(),
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
                  window.removeEventListener("scroll", checkVisibility));
            });
          const w = e.querySelector('[data-vimeo-control="mute"]');
          w &&
            w.addEventListener("click", function () {
              e.getAttribute("data-vimeo-muted") === "false"
                ? (u.setVolume(0), e.setAttribute("data-vimeo-muted", "true"))
                : (u.setVolume(1), e.setAttribute("data-vimeo-muted", "false"));
            });
          const S = !!(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            ),
            _ = e.querySelector('[data-vimeo-control="fullscreen"]');
          !S && _ && (_.style.display = "none"),
            _ &&
              _.addEventListener("click", () => {
                const y = document.getElementById(l);
                if (!y) return;
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
                      y.requestFullscreen ||
                      y.webkitRequestFullscreen ||
                      y.mozRequestFullScreen ||
                      y.msRequestFullscreen
                    ).call(y));
              });
          const T = () => {
            const y =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            e.setAttribute("data-vimeo-fullscreen", y ? "true" : "false");
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((y) => {
            document.addEventListener(y, T);
          });
          function g(y) {
            let L = Math.floor(y / 3600);
            y -= L * 3600;
            let v = Math.floor(y / 60);
            return (y -= v * 60), v + ":" + (y < 10 ? "0" + y : y);
          }
          const x = e.querySelector("[data-vimeo-duration]");
          u.getDuration().then(function (y) {
            x && (x.textContent = g(y)),
              e
                .querySelectorAll('[data-vimeo-control="timeline"], progress')
                .forEach((v) => {
                  v.setAttribute("max", y);
                });
          });
          const E = e.querySelector('[data-vimeo-control="timeline"]'),
            P = e.querySelector("progress");
          function k() {
            u.getDuration().then(function () {
              const y = E.value;
              u.setCurrentTime(y), P && (P.value = y);
            });
          }
          E &&
            ["input", "change"].forEach((y) => {
              E.addEventListener(y, k);
            }),
            u.on("timeupdate", function (y) {
              E && (E.value = y.seconds),
                P && (P.value = y.seconds),
                x && (x.textContent = g(Math.trunc(y.seconds)));
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
    Oy = () => {
      Ly();
    };
  let xn,
    Cn,
    Br = !1;
  const fr = {
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
    My = () => {
      const r = document.querySelector('[demo-modal="component"]'),
        e = document.querySelectorAll('[demo-modal="close"]'),
        t = document.querySelectorAll('[demo-modal="open"]'),
        i = document.querySelector('[demo-modal="bg"]'),
        n = document.querySelector('[demo-modal="content"]');
      if (!r) return;
      const s = () => {
          if (Br) return;
          (Br = !0), r.classList.add("is--active");
          const m = So();
          m && m.stop(), a();
        },
        o = () => {
          if (!Br) return;
          (Br = !1),
            r.classList.remove("is--active"),
            xn && xn.isActive() && xn.pause(),
            Cn && Cn.isActive() && Cn.pause();
          const m = So();
          m && m.start(), l();
        },
        a = () => {
          (xn = V.timeline()),
            V.set(r, { display: "block", visibility: "visible", autoAlpha: 1 }),
            xn.fromTo(i, { opacity: 0 }, { opacity: 1, ...fr.background }),
            xn.fromTo(
              n,
              fr.content.initial,
              { ...fr.content.final, ...fr.content.open },
              "-=0.4"
            );
        },
        l = () => {
          (Cn = V.timeline()),
            Cn.to(n, { ...fr.content.initial, ...fr.content.close }),
            Cn.to(
              i,
              {
                opacity: 0,
                ...fr.background,
                onComplete: () => {
                  V.set(r, { display: "none", visibility: "hidden" });
                },
              },
              "-=1"
            );
        },
        u = (m) => {
          m.key === "Escape" && Br && o();
        },
        c = () => {
          t.forEach((m) => {
            m.addEventListener("click", (w) => {
              w.preventDefault(), s();
            });
          }),
            e.forEach((m) => {
              m.addEventListener("click", (w) => {
                w.preventDefault(), o();
              });
            }),
            i &&
              i.addEventListener("click", (m) => {
                m.target === i && Br && o();
              }),
            document.addEventListener("keydown", u);
        },
        p = {
          open: s,
          close: o,
          isOpen: () => Br,
          cleanup: () => {
            document.removeEventListener("keydown", u);
          },
        },
        f = () => {
          V.set(r, { display: "none", visibility: "hidden" }),
            V.set(i, { opacity: 0 }),
            V.set(n, fr.content.initial);
        };
      return f(), c(), p;
    },
    Dy = () => My(),
    Iy = () => {
      Vv(), Hv(), jv(), Xv(), Uv(), Qv(), Oy(), Dy();
    },
    Ry = () => {
      const r = jd(".example-component");
      r && (Pv(r, "is-initialized"), r.addEventListener("click", () => {}));
    },
    Ny = () => {
      Ry();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Iy(), Ny(), Bv(), gv();
  }),
    document.addEventListener("visibilitychange", () => {
      document.hidden
        ? (V.globalTimeline.pause(), window.lenis && window.lenis.stop())
        : (V.globalTimeline.resume(), window.lenis && window.lenis.start());
    });
})();
