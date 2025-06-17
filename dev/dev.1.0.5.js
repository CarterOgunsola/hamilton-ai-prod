var mp = Object.defineProperty;
var vc = Object.getOwnPropertySymbols;
var vp = Object.prototype.hasOwnProperty,
  yp = Object.prototype.propertyIsEnumerable;
var ma = (Dt, ie, vt) =>
    ie in Dt
      ? mp(Dt, ie, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: vt,
        })
      : (Dt[ie] = vt),
  yc = (Dt, ie) => {
    for (var vt in ie || (ie = {})) vp.call(ie, vt) && ma(Dt, vt, ie[vt]);
    if (vc) for (var vt of vc(ie)) yp.call(ie, vt) && ma(Dt, vt, ie[vt]);
    return Dt;
  };
var q = (Dt, ie, vt) => ma(Dt, typeof ie != "symbol" ? ie + "" : ie, vt);
(function (Dt) {
  typeof define == "function" && define.amd ? define(Dt) : Dt();
})(function () {
  "use strict";
  function Dt(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function ie(n, t) {
    (n.prototype = Object.create(t.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = t);
  }
  /*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var vt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    bi = { duration: 0.5, overwrite: !1, delay: 0 },
    Is,
    ne,
    St,
    Qe = 1e8,
    dt = 1 / Qe,
    zs = Math.PI * 2,
    bc = zs / 4,
    xc = 0,
    va = Math.sqrt,
    Tc = Math.cos,
    Sc = Math.sin,
    Kt = function (t) {
      return typeof t == "string";
    },
    Mt = function (t) {
      return typeof t == "function";
    },
    Or = function (t) {
      return typeof t == "number";
    },
    Fs = function (t) {
      return typeof t == "undefined";
    },
    pr = function (t) {
      return typeof t == "object";
    },
    Ce = function (t) {
      return t !== !1;
    },
    Bs = function () {
      return typeof window != "undefined";
    },
    Hn = function (t) {
      return Mt(t) || Kt(t);
    },
    ya =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    ue = Array.isArray,
    Ws = /(?:-?\.?\d|\.)+/gi,
    wa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    xi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    qs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ba = /[+-]=-?[.\d]+/,
    xa = /[^,'"\[\]\s]+/gi,
    Ac = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Et,
    gr,
    Hs,
    Xs,
    Be = {},
    Xn = {},
    Ta,
    Sa = function (t) {
      return (Xn = Si(t, Be)) && De;
    },
    Vs = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Ki = function (t, e) {
      return !e && console.warn(t);
    },
    Aa = function (t, e) {
      return (t && (Be[t] = e) && Xn && (Xn[t] = e)) || Be;
    },
    Zi = function () {
      return 0;
    },
    Ec = { suppressEvents: !0, isStart: !0, kill: !1 },
    Vn = { suppressEvents: !0, kill: !1 },
    Oc = { suppressEvents: !0 },
    $s = {},
    Lr = [],
    Ys = {},
    Ea,
    We = {},
    Us = {},
    Oa = 30,
    $n = [],
    js = "",
    Gs = function (t) {
      var e = t[0],
        r,
        i;
      if ((pr(e) || Mt(e) || (t = [t]), !(r = (e._gsap || {}).harness))) {
        for (i = $n.length; i-- && !$n[i].targetTest(e); );
        r = $n[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new rl(t[i], r)))) ||
          t.splice(i, 1);
      return t;
    },
    Kr = function (t) {
      return t._gsap || Gs(tr(t))[0]._gsap;
    },
    Ca = function (t, e, r) {
      return (r = t[e]) && Mt(r)
        ? t[e]()
        : (Fs(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    Pe = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    It = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Bt = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Ti = function (t, e) {
      var r = e.charAt(0),
        i = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
      );
    },
    Cc = function (t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
      return i < r;
    },
    Yn = function () {
      var t = Lr.length,
        e = Lr.slice(0),
        r,
        i;
      for (Ys = {}, Lr.length = 0, r = 0; r < t; r++)
        (i = e[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Ks = function (t) {
      return !!(t._initted || t._startAt || t.add);
    },
    Pa = function (t, e, r, i) {
      Lr.length && !ne && Yn(),
        t.render(e, r, !!(ne && e < 0 && Ks(t))),
        Lr.length && !ne && Yn();
    },
    ka = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(xa).length < 2
        ? e
        : Kt(t)
        ? t.trim()
        : t;
    },
    Da = function (t) {
      return t;
    },
    qe = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Pc = function (t) {
      return function (e, r) {
        for (var i in r)
          i in e || (i === "duration" && t) || i === "ease" || (e[i] = r[i]);
      };
    },
    Si = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Ma = function n(t, e) {
      for (var r in e)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (t[r] = pr(e[r]) ? n(t[r] || (t[r] = {}), e[r]) : e[r]);
      return t;
    },
    Un = function (t, e) {
      var r = {},
        i;
      for (i in t) i in e || (r[i] = t[i]);
      return r;
    },
    Qi = function (t) {
      var e = t.parent || Et,
        r = t.keyframes ? Pc(ue(t.keyframes)) : qe;
      if (Ce(t.inherit))
        for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    kc = function (t, e) {
      for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
      return r < 0;
    },
    Ra = function (t, e, r, i, s) {
      var o = t[i],
        a;
      if (s) for (a = e[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[i] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    jn = function (t, e, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var s = e._prev,
        o = e._next;
      s ? (s._next = o) : t[r] === e && (t[r] = o),
        o ? (o._prev = s) : t[i] === e && (t[i] = s),
        (e._next = e._prev = e.parent = null);
    },
    Nr = function (t, e) {
      t.parent &&
        (!e || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    Zr = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Dc = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Zs = function (t, e, r, i) {
      return (
        t._startAt &&
        (ne
          ? t._startAt.revert(Vn)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, i))
      );
    },
    Mc = function n(t) {
      return !t || (t._ts && n(t.parent));
    },
    La = function (t) {
      return t._repeat ? Ai(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Ai = function (t, e) {
      var r = Math.floor((t = Bt(t / e)));
      return t && r === t ? r - 1 : r;
    },
    Gn = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Kn = function (t) {
      return (t._end = Bt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || dt) || 0)
      ));
    },
    Zn = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = Bt(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Kn(t),
          r._dirty || Zr(r, t)),
        t
      );
    },
    Na = function (t, e) {
      var r;
      if (
        ((e._time ||
          (!e._dur && e._initted) ||
          (e._start < t._time && (e._dur || !e.add))) &&
          ((r = Gn(t.rawTime(), e)),
          (!e._dur || tn(0, e.totalDuration(), r) - e._tTime > dt) &&
            e.render(r, !0)),
        Zr(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -dt;
      }
    },
    _r = function (t, e, r, i) {
      return (
        e.parent && Nr(e),
        (e._start = Bt(
          (Or(r) ? r : r || t !== Et ? Je(t, r, e) : t._time) + e._delay
        )),
        (e._end = Bt(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        Ra(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Qs(e) || (t._recent = e),
        i || Na(t, e),
        t._ts < 0 && Zn(t, t._tTime),
        t
      );
    },
    Ia = function (t, e) {
      return (
        (Be.ScrollTrigger || Vs("scrollTrigger", e)) &&
        Be.ScrollTrigger.create(e, t)
      );
    },
    za = function (t, e, r, i, s) {
      if ((ao(t, e, s), !t._initted)) return 1;
      if (
        !r &&
        t._pt &&
        !ne &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Ea !== Xe.frame
      )
        return Lr.push(t), (t._lazy = [s, i]), 1;
    },
    Rc = function n(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
    },
    Qs = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    Lc = function (t, e, r, i) {
      var s = t.ratio,
        o =
          e < 0 ||
          (!e &&
            ((!t._start && Rc(t) && !(!t._initted && Qs(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Qs(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        u,
        c,
        p;
      if (
        (a &&
          t._repeat &&
          ((l = tn(0, t._tDur, e)),
          (c = Ai(l, a)),
          t._yoyo && c & 1 && (o = 1 - o),
          c !== Ai(t._tTime, a) &&
            ((s = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== s || ne || i || t._zTime === dt || (!e && t._zTime))
      ) {
        if (!t._initted && za(t, e, i, r, l)) return;
        for (
          p = t._zTime,
            t._zTime = e || (r ? dt : 0),
            r || (r = e && !p),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        e < 0 && Zs(t, e, r, !0),
          t._onUpdate && !r && He(t, "onUpdate"),
          l && t._repeat && !r && t.parent && He(t, "onRepeat"),
          (e >= t._tDur || e < 0) &&
            t.ratio === o &&
            (o && Nr(t, 1),
            !r &&
              !ne &&
              (He(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    Nc = function (t, e, r) {
      var i;
      if (r > e)
        for (i = t._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > e) return i;
          i = i._next;
        }
      else
        for (i = t._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < e) return i;
          i = i._prev;
        }
    },
    Ei = function (t, e, r, i) {
      var s = t._repeat,
        o = Bt(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !i && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = s ? (s < 0 ? 1e10 : Bt(o * (s + 1) + t._rDelay * s)) : o),
        a > 0 && !i && Zn(t, (t._tTime = t._tDur * a)),
        t.parent && Kn(t),
        r || Zr(t.parent, t),
        t
      );
    },
    Fa = function (t) {
      return t instanceof we ? Zr(t) : Ei(t, t._dur);
    },
    Ic = { _start: 0, endTime: Zi, totalDuration: Zi },
    Je = function n(t, e, r) {
      var i = t.labels,
        s = t._recent || Ic,
        o = t.duration() >= Qe ? s.endTime(!1) : t._dur,
        a,
        l,
        u;
      return Kt(e) && (isNaN(e) || e in i)
        ? ((l = e.charAt(0)),
          (u = e.substr(-1) === "%"),
          (a = e.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (e = e.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(e.substr(1)) || 0) *
                  (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
            : a < 0
            ? (e in i || (i[e] = o), i[e])
            : ((l = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
              u && r && (l = (l / 100) * (ue(r) ? r[0] : r).totalDuration()),
              a > 1 ? n(t, e.substr(0, a - 1), r) + l : o + l))
        : e == null
        ? o
        : +e;
    },
    Ji = function (t, e, r) {
      var i = Or(e[1]),
        s = (i ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[s],
        a,
        l;
      if ((i && (o.duration = e[1]), (o.parent = r), t)) {
        for (a = o, l = r; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = Ce(l.vars.inherit) && l.parent);
        (o.immediateRender = Ce(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
      }
      return new Wt(e[0], o, e[s + 1]);
    },
    Ir = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    tn = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    ce = function (t, e) {
      return !Kt(t) || !(e = Ac.exec(t)) ? "" : e[1];
    },
    zc = function (t, e, r) {
      return Ir(r, function (i) {
        return tn(t, e, i);
      });
    },
    Js = [].slice,
    Ba = function (t, e) {
      return (
        t &&
        pr(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && pr(t[0]))) &&
        !t.nodeType &&
        t !== gr
      );
    },
    Fc = function (t, e, r) {
      return (
        r === void 0 && (r = []),
        t.forEach(function (i) {
          var s;
          return (Kt(i) && !e) || Ba(i, 1)
            ? (s = r).push.apply(s, tr(i))
            : r.push(i);
        }) || r
      );
    },
    tr = function (t, e, r) {
      return St && !e && St.selector
        ? St.selector(t)
        : Kt(t) && !r && (Hs || !Ci())
        ? Js.call((e || Xs).querySelectorAll(t), 0)
        : ue(t)
        ? Fc(t, r)
        : Ba(t)
        ? Js.call(t, 0)
        : t
        ? [t]
        : [];
    },
    to = function (t) {
      return (
        (t = tr(t)[0] || Ki("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return tr(
            e,
            r.querySelectorAll
              ? r
              : r === t
              ? Ki("Invalid scope") || Xs.createElement("div")
              : t
          );
        }
      );
    },
    Wa = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    qa = function (t) {
      if (Mt(t)) return t;
      var e = pr(t) ? t : { each: t },
        r = Qr(e.ease),
        i = e.from || 0,
        s = parseFloat(e.base) || 0,
        o = {},
        a = i > 0 && i < 1,
        l = isNaN(i) || a,
        u = e.axis,
        c = i,
        p = i;
      return (
        Kt(i)
          ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && l && ((c = i[0]), (p = i[1])),
        function (g, f, _) {
          var d = (_ || e).length,
            m = o[d],
            b,
            w,
            S,
            h,
            v,
            y,
            T,
            A,
            E;
          if (!m) {
            if (((E = e.grid === "auto" ? 0 : (e.grid || [1, Qe])[1]), !E)) {
              for (
                T = -Qe;
                T < (T = _[E++].getBoundingClientRect().left) && E < d;

              );
              E < d && E--;
            }
            for (
              m = o[d] = [],
                b = l ? Math.min(E, d) * c - 0.5 : i % E,
                w = E === Qe ? 0 : l ? (d * p) / E - 0.5 : (i / E) | 0,
                T = 0,
                A = Qe,
                y = 0;
              y < d;
              y++
            )
              (S = (y % E) - b),
                (h = w - ((y / E) | 0)),
                (m[y] = v =
                  u ? Math.abs(u === "y" ? h : S) : va(S * S + h * h)),
                v > T && (T = v),
                v < A && (A = v);
            i === "random" && Wa(m),
              (m.max = T - A),
              (m.min = A),
              (m.v = d =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (E > d
                      ? d - 1
                      : u
                      ? u === "y"
                        ? d / E
                        : E
                      : Math.max(E, d / E)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (m.b = d < 0 ? s - d : s),
              (m.u = ce(e.amount || e.each) || 0),
              (r = r && d < 0 ? Ja(r) : r);
          }
          return (
            (d = (m[g] - m.min) / m.max || 0),
            Bt(m.b + (r ? r(d) : d) * m.v) + m.u
          );
        }
      );
    },
    eo = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = Bt(Math.round(parseFloat(r) / t) * t * e);
        return (i - (i % 1)) / e + (Or(r) ? 0 : ce(r));
      };
    },
    Ha = function (t, e) {
      var r = ue(t),
        i,
        s;
      return (
        !r &&
          pr(t) &&
          ((i = r = t.radius || Qe),
          t.values
            ? ((t = tr(t.values)), (s = !Or(t[0])) && (i *= i))
            : (t = eo(t.increment))),
        Ir(
          e,
          r
            ? Mt(t)
              ? function (o) {
                  return (s = t(o)), Math.abs(s - o) <= i ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = Qe,
                      c = 0,
                      p = t.length,
                      g,
                      f;
                    p--;

                  )
                    s
                      ? ((g = t[p].x - a),
                        (f = t[p].y - l),
                        (g = g * g + f * f))
                      : (g = Math.abs(t[p] - a)),
                      g < u && ((u = g), (c = p));
                  return (
                    (c = !i || u <= i ? t[c] : o),
                    s || c === o || Or(o) ? c : c + ce(o)
                  );
                }
            : eo(t)
        )
      );
    },
    Xa = function (t, e, r, i) {
      return Ir(ue(t) ? !e : r === !0 ? !!(r = 0) : !i, function () {
        return ue(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + r * 0.99)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Bc = function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      return function (i) {
        return e.reduce(function (s, o) {
          return o(s);
        }, i);
      };
    },
    Wc = function (t, e) {
      return function (r) {
        return t(parseFloat(r)) + (e || ce(r));
      };
    },
    qc = function (t, e, r) {
      return $a(t, e, 0, 1, r);
    },
    Va = function (t, e, r) {
      return Ir(r, function (i) {
        return t[~~e(i)];
      });
    },
    Hc = function n(t, e, r) {
      var i = e - t;
      return ue(t)
        ? Va(t, n(0, t.length), e)
        : Ir(r, function (s) {
            return ((i + ((s - t) % i)) % i) + t;
          });
    },
    Xc = function n(t, e, r) {
      var i = e - t,
        s = i * 2;
      return ue(t)
        ? Va(t, n(0, t.length - 1), e)
        : Ir(r, function (o) {
            return (o = (s + ((o - t) % s)) % s || 0), t + (o > i ? s - o : o);
          });
    },
    en = function (t) {
      for (var e = 0, r = "", i, s, o, a; ~(i = t.indexOf("random(", e)); )
        (o = t.indexOf(")", i)),
          (a = t.charAt(i + 7) === "["),
          (s = t.substr(i + 7, o - i - 7).match(a ? xa : Ws)),
          (r +=
            t.substr(e, i - e) +
            Xa(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (e = o + 1);
      return r + t.substr(e, t.length - e);
    },
    $a = function (t, e, r, i, s) {
      var o = e - t,
        a = i - r;
      return Ir(s, function (l) {
        return r + (((l - t) / o) * a || 0);
      });
    },
    Vc = function n(t, e, r, i) {
      var s = isNaN(t + e)
        ? 0
        : function (f) {
            return (1 - f) * t + f * e;
          };
      if (!s) {
        var o = Kt(t),
          a = {},
          l,
          u,
          c,
          p,
          g;
        if ((r === !0 && (i = 1) && (r = null), o))
          (t = { p: t }), (e = { p: e });
        else if (ue(t) && !ue(e)) {
          for (c = [], p = t.length, g = p - 2, u = 1; u < p; u++)
            c.push(n(t[u - 1], t[u]));
          p--,
            (s = function (_) {
              _ *= p;
              var d = Math.min(g, ~~_);
              return c[d](_ - d);
            }),
            (r = e);
        } else i || (t = Si(ue(t) ? [] : {}, t));
        if (!c) {
          for (l in e) so.call(a, t, l, "get", e[l]);
          s = function (_) {
            return co(_, a) || (o ? t.p : t);
          };
        }
      }
      return Ir(r, s);
    },
    Ya = function (t, e, r) {
      var i = t.labels,
        s = Qe,
        o,
        a,
        l;
      for (o in i)
        (a = i[o] - e),
          a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    He = function (t, e, r) {
      var i = t.vars,
        s = i[e],
        o = St,
        a = t._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = i[e + "Params"]),
          (u = i.callbackScope || t),
          r && Lr.length && Yn(),
          a && (St = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (St = o),
          c
        );
    },
    rn = function (t) {
      return (
        Nr(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!ne),
        t.progress() < 1 && He(t, "onInterrupt"),
        t
      );
    },
    Oi,
    Ua = [],
    ja = function (t) {
      if (t)
        if (((t = (!t.name && t.default) || t), Bs() || t.headless)) {
          var e = t.name,
            r = Mt(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: Zi,
              render: co,
              add: so,
              kill: af,
              modifier: of,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: uo,
              aliases: {},
              register: 0,
            };
          if ((Ci(), t !== i)) {
            if (We[e]) return;
            qe(i, qe(Un(t, s), o)),
              Si(i.prototype, Si(s, Un(t, o))),
              (We[(i.prop = e)] = i),
              t.targetTest && ($n.push(i), ($s[e] = 1)),
              (e =
                (e === "css"
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          Aa(e, i), t.register && t.register(De, i, ke);
        } else Ua.push(t);
    },
    pt = 255,
    nn = {
      aqua: [0, pt, pt],
      lime: [0, pt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, pt],
      navy: [0, 0, 128],
      white: [pt, pt, pt],
      olive: [128, 128, 0],
      yellow: [pt, pt, 0],
      orange: [pt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [pt, 0, 0],
      pink: [pt, 192, 203],
      cyan: [0, pt, pt],
      transparent: [pt, pt, pt, 0],
    },
    ro = function (t, e, r) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : t * 3 < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          pt +
          0.5) |
          0
      );
    },
    Ga = function (t, e, r) {
      var i = t ? (Or(t) ? [t >> 16, (t >> 8) & pt, t & pt] : 0) : nn.black,
        s,
        o,
        a,
        l,
        u,
        c,
        p,
        g,
        f,
        _;
      if (!i) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), nn[t]))
          i = nn[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((s = t.charAt(1)),
              (o = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (i = parseInt(t.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & pt, i & pt, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (i = [t >> 16, (t >> 8) & pt, t & pt]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((i = _ = t.match(Ws)), !e))
            (l = (+i[0] % 360) / 360),
              (u = +i[1] / 100),
              (c = +i[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              i.length > 3 && (i[3] *= 1),
              (i[0] = ro(l + 1 / 3, s, o)),
              (i[1] = ro(l, s, o)),
              (i[2] = ro(l - 1 / 3, s, o));
          else if (~t.indexOf("="))
            return (i = t.match(wa)), r && i.length < 4 && (i[3] = 1), i;
        } else i = t.match(Ws) || nn.transparent;
        i = i.map(Number);
      }
      return (
        e &&
          !_ &&
          ((s = i[0] / pt),
          (o = i[1] / pt),
          (a = i[2] / pt),
          (p = Math.max(s, o, a)),
          (g = Math.min(s, o, a)),
          (c = (p + g) / 2),
          p === g
            ? (l = u = 0)
            : ((f = p - g),
              (u = c > 0.5 ? f / (2 - p - g) : f / (p + g)),
              (l =
                p === s
                  ? (o - a) / f + (o < a ? 6 : 0)
                  : p === o
                  ? (a - s) / f + 2
                  : (s - o) / f + 4),
              (l *= 60)),
          (i[0] = ~~(l + 0.5)),
          (i[1] = ~~(u * 100 + 0.5)),
          (i[2] = ~~(c * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    Ka = function (t) {
      var e = [],
        r = [],
        i = -1;
      return (
        t.split(zr).forEach(function (s) {
          var o = s.match(xi) || [];
          e.push.apply(e, o), r.push((i += o.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    Za = function (t, e, r) {
      var i = "",
        s = (t + i).match(zr),
        o = e ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        p;
      if (!s) return t;
      if (
        ((s = s.map(function (g) {
          return (
            (g = Ga(g, e, 1)) &&
            o +
              (e
                ? g[0] + "," + g[1] + "%," + g[2] + "%," + g[3]
                : g.join(",")) +
              ")"
          );
        })),
        r && ((c = Ka(t)), (l = r.c), l.join(i) !== c.c.join(i)))
      )
        for (u = t.replace(zr, "1").split(xi), p = u.length - 1; a < p; a++)
          i +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : r).shift());
      if (!u)
        for (u = t.split(zr), p = u.length - 1; a < p; a++) i += u[a] + s[a];
      return i + u[p];
    },
    zr = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in nn) n += "|" + t + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    $c = /hsl[a]?\(/,
    Qa = function (t) {
      var e = t.join(" "),
        r;
      if (((zr.lastIndex = 0), zr.test(e)))
        return (
          (r = $c.test(e)),
          (t[1] = Za(t[1], r)),
          (t[0] = Za(t[0], r, Ka(t[1]))),
          !0
        );
    },
    sn,
    Xe = (function () {
      var n = Date.now,
        t = 500,
        e = 33,
        r = n(),
        i = r,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        u,
        c,
        p,
        g,
        f,
        _ = function d(m) {
          var b = n() - i,
            w = m === !0,
            S,
            h,
            v,
            y;
          if (
            ((b > t || b < 0) && (r += b - e),
            (i += b),
            (v = i - r),
            (S = v - o),
            (S > 0 || w) &&
              ((y = ++p.frame),
              (g = v - p.time * 1e3),
              (p.time = v = v / 1e3),
              (o += S + (S >= s ? 4 : s - S)),
              (h = 1)),
            w || (l = u(d)),
            h)
          )
            for (f = 0; f < a.length; f++) a[f](v, g, y, m);
        };
      return (
        (p = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (m) {
            return g / (1e3 / (m || 60));
          },
          wake: function () {
            Ta &&
              (!Hs &&
                Bs() &&
                ((gr = Hs = window),
                (Xs = gr.document || {}),
                (Be.gsap = De),
                (gr.gsapVersions || (gr.gsapVersions = [])).push(De.version),
                Sa(Xn || gr.GreenSockGlobals || (!gr.gsap && gr) || {}),
                Ua.forEach(ja)),
              (c =
                typeof requestAnimationFrame != "undefined" &&
                requestAnimationFrame),
              l && p.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (o - p.time * 1e3 + 1) | 0);
                }),
              (sn = 1),
              _(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (sn = 0), (u = Zi);
          },
          lagSmoothing: function (m, b) {
            (t = m || 1 / 0), (e = Math.min(b || 33, t));
          },
          fps: function (m) {
            (s = 1e3 / (m || 240)), (o = p.time * 1e3 + s);
          },
          add: function (m, b, w) {
            var S = b
              ? function (h, v, y, T) {
                  m(h, v, y, T), p.remove(S);
                }
              : m;
            return p.remove(m), a[w ? "unshift" : "push"](S), Ci(), S;
          },
          remove: function (m, b) {
            ~(b = a.indexOf(m)) && a.splice(b, 1) && f >= b && f--;
          },
          _listeners: a,
        }),
        p
      );
    })(),
    Ci = function () {
      return !sn && Xe.wake();
    },
    ot = {},
    Yc = /^[\d.\-M][\d.\-,\s]/,
    Uc = /["']/g,
    jc = function (t) {
      for (
        var e = {},
          r = t.substr(1, t.length - 3).split(":"),
          i = r[0],
          s = 1,
          o = r.length,
          a,
          l,
          u;
        s < o;
        s++
      )
        (l = r[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (e[i] = isNaN(u) ? u.replace(Uc, "").trim() : +u),
          (i = l.substr(a + 1).trim());
      return e;
    },
    Gc = function (t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    },
    Kc = function (t) {
      var e = (t + "").split("("),
        r = ot[e[0]];
      return r && e.length > 1 && r.config
        ? r.config.apply(
            null,
            ~t.indexOf("{") ? [jc(e[1])] : Gc(t).split(",").map(ka)
          )
        : ot._CE && Yc.test(t)
        ? ot._CE("", t)
        : r;
    },
    Ja = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    tl = function n(t, e) {
      for (var r = t._first, i; r; )
        r instanceof we
          ? n(r, e)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== e &&
            (r.timeline
              ? n(r.timeline, e)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = e))),
          (r = r._next);
    },
    Qr = function (t, e) {
      return (t && (Mt(t) ? t : ot[t] || Kc(t))) || e;
    },
    Jr = function (t, e, r, i) {
      r === void 0 &&
        (r = function (l) {
          return 1 - e(1 - l);
        }),
        i === void 0 &&
          (i = function (l) {
            return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
          });
      var s = { easeIn: e, easeOut: r, easeInOut: i },
        o;
      return (
        Pe(t, function (a) {
          (ot[a] = Be[a] = s), (ot[(o = a.toLowerCase())] = r);
          for (var l in s)
            ot[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = ot[a + "." + l] = s[l];
        }),
        s
      );
    },
    el = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
      };
    },
    io = function n(t, e, r) {
      var i = e >= 1 ? e : 1,
        s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        o = (s / zs) * (Math.asin(1 / i) || 0),
        a = function (c) {
          return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Sc((c - o) * s) + 1;
        },
        l =
          t === "out"
            ? a
            : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : el(a);
      return (
        (s = zs / s),
        (l.config = function (u, c) {
          return n(t, u, c);
        }),
        l
      );
    },
    no = function n(t, e) {
      e === void 0 && (e = 1.70158);
      var r = function (o) {
          return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
        },
        i =
          t === "out"
            ? r
            : t === "in"
            ? function (s) {
                return 1 - r(1 - s);
              }
            : el(r);
      return (
        (i.config = function (s) {
          return n(t, s);
        }),
        i
      );
    };
  Pe("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, t) {
    var e = t < 5 ? t + 1 : t;
    Jr(
      n + ",Power" + (e - 1),
      t
        ? function (r) {
            return Math.pow(r, e);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, e);
      },
      function (r) {
        return r < 0.5
          ? Math.pow(r * 2, e) / 2
          : 1 - Math.pow((1 - r) * 2, e) / 2;
      }
    );
  }),
    (ot.Linear.easeNone = ot.none = ot.Linear.easeIn),
    Jr("Elastic", io("in"), io("out"), io()),
    (function (n, t) {
      var e = 1 / t,
        r = 2 * e,
        i = 2.5 * e,
        s = function (a) {
          return a < e
            ? n * a * a
            : a < r
            ? n * Math.pow(a - 1.5 / t, 2) + 0.75
            : a < i
            ? n * (a -= 2.25 / t) * a + 0.9375
            : n * Math.pow(a - 2.625 / t, 2) + 0.984375;
        };
      Jr(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    Jr("Expo", function (n) {
      return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
    }),
    Jr("Circ", function (n) {
      return -(va(1 - n * n) - 1);
    }),
    Jr("Sine", function (n) {
      return n === 1 ? 1 : -Tc(n * bc) + 1;
    }),
    Jr("Back", no("in"), no("out"), no()),
    (ot.SteppedEase =
      ot.steps =
      Be.SteppedEase =
        {
          config: function (t, e) {
            t === void 0 && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              s = e ? 1 : 0,
              o = 1 - dt;
            return function (a) {
              return (((i * tn(0, o, a)) | 0) + s) * r;
            };
          },
        }),
    (bi.ease = ot["quad.out"]),
    Pe(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (js += n + "," + n + "Params,");
      }
    );
  var rl = function (t, e) {
      (this.id = xc++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Ca),
        (this.set = e ? e.getSetter : uo);
    },
    on = (function () {
      function n(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          Ei(this, +e.duration, 1, 1),
          (this.data = e.data),
          St && ((this._ctx = St), St.data.push(this)),
          sn || Xe.wake();
      }
      var t = n.prototype;
      return (
        (t.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (t.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              Ei(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (r, i) {
          if ((Ci(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Zn(this, r), !s._dp || s.parent || Na(s, this);
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
              ((this._ts > 0 && r < this._tDur) ||
                (this._ts < 0 && r > 0) ||
                (!this._tDur && !r)) &&
              _r(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === dt) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Pa(this, r, i)),
            this
          );
        }),
        (t.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + La(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (t.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (t.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  La(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (t.iteration = function (r, i) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * s, i)
            : this._repeat
            ? Ai(this._tTime, s) + 1
            : 1;
        }),
        (t.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -dt ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? Gn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -dt ? 0 : this._rts),
            this.totalTime(
              tn(-Math.abs(this._delay), this.totalDuration(), s),
              i !== !1
            ),
            Kn(this),
            Dc(this)
          );
        }),
        (t.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Ci(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== dt &&
                        (this._tTime -= dt)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && _r(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (r) {
          return (
            this._start +
            (Ce(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Gn(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (r) {
          r === void 0 && (r = Oc);
          var i = ne;
          return (
            (ne = r),
            Ks(this) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (ne = i),
            this
          );
        }),
        (t.globalTime = function (r) {
          for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
          return !this.parent && this._sat ? this._sat.globalTime(r) : s;
        }),
        (t.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), Fa(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), Fa(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (t.seek = function (r, i) {
          return this.totalTime(Je(this, r), Ce(i));
        }),
        (t.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, Ce(i)),
            this._dur || (this._zTime = -dt),
            this
          );
        }),
        (t.play = function (r, i) {
          return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (r, i) {
          return r != null && this.seek(r, i), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -dt : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -dt), this;
        }),
        (t.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            s;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (s = r.rawTime(!0)) >= i &&
              s < this.endTime(!0) - dt)
          );
        }),
        (t.eventCallback = function (r, i, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (i
                ? ((o[r] = i),
                  s && (o[r + "Params"] = s),
                  r === "onUpdate" && (this._onUpdate = i))
                : delete o[r],
              this)
            : o[r];
        }),
        (t.then = function (r) {
          var i = this;
          return new Promise(function (s) {
            var o = Mt(r) ? r : Da,
              a = function () {
                var u = i.then;
                (i.then = null),
                  Mt(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                  s(o),
                  (i.then = u);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? a()
              : (i._prom = a);
          });
        }),
        (t.kill = function () {
          rn(this);
        }),
        n
      );
    })();
  qe(on.prototype, {
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
    _zTime: -dt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var we = (function (n) {
    ie(t, n);
    function t(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = n.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = Ce(r.sortChildren)),
        Et && _r(r.parent || Et, Dt(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && Ia(Dt(s), r.scrollTrigger),
        s
      );
    }
    var e = t.prototype;
    return (
      (e.to = function (i, s, o) {
        return Ji(0, arguments, this), this;
      }),
      (e.from = function (i, s, o) {
        return Ji(1, arguments, this), this;
      }),
      (e.fromTo = function (i, s, o, a) {
        return Ji(2, arguments, this), this;
      }),
      (e.set = function (i, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Qi(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Wt(i, s, Je(this, o), 1),
          this
        );
      }),
      (e.call = function (i, s, o) {
        return _r(this, Wt.delayedCall(0, i, s), o);
      }),
      (e.staggerTo = function (i, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Wt(i, o, Je(this, l)),
          this
        );
      }),
      (e.staggerFrom = function (i, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (Qi(o).immediateRender = Ce(o.immediateRender)),
          this.staggerTo(i, s, o, a, l, u, c)
        );
      }),
      (e.staggerFromTo = function (i, s, o, a, l, u, c, p) {
        return (
          (a.startAt = o),
          (Qi(a).immediateRender = Ce(a.immediateRender)),
          this.staggerTo(i, s, a, l, u, c, p)
        );
      }),
      (e.render = function (i, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = i <= 0 ? 0 : Bt(i),
          p = this._zTime < 0 != i < 0 && (this._initted || !u),
          g,
          f,
          _,
          d,
          m,
          b,
          w,
          S,
          h,
          v,
          y,
          T;
        if (
          (this !== Et && c > l && i >= 0 && (c = l),
          c !== this._tTime || o || p)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (i += this._time - a)),
            (g = c),
            (h = this._start),
            (S = this._ts),
            (b = !S),
            p && (u || (a = this._zTime), (i || !s) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((y = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(m * 100 + i, s, o);
            if (
              ((g = Bt(c % m)),
              c === l
                ? ((d = this._repeat), (g = u))
                : ((v = Bt(c / m)),
                  (d = ~~v),
                  d && d === v && ((g = u), d--),
                  g > u && (g = u)),
              (v = Ai(this._tTime, m)),
              !a &&
                this._tTime &&
                v !== d &&
                this._tTime - v * m - this._dur <= 0 &&
                (v = d),
              y && d & 1 && ((g = u - g), (T = 1)),
              d !== v && !this._lock)
            ) {
              var A = y && v & 1,
                E = A === (y && d & 1);
              if (
                (d < v && (A = !A),
                (a = A ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (T ? 0 : Bt(d * m)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && He(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                E &&
                  ((this._lock = 2),
                  (a = A ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              tl(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = Nc(this, Bt(a), Bt(g))), w && (c -= g - (g = w._start))),
            (this._tTime = c),
            (this._time = g),
            (this._act = !S),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (a = 0)),
            !a && c && !s && !v && (He(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (g >= a && i >= 0)
            for (f = this._first; f; ) {
              if (
                ((_ = f._next), (f._act || g >= f._start) && f._ts && w !== f)
              ) {
                if (f.parent !== this) return this.render(i, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (g - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (g - f._start) * f._ts,
                    s,
                    o
                  ),
                  g !== this._time || (!this._ts && !b))
                ) {
                  (w = 0), _ && (c += this._zTime = -dt);
                  break;
                }
              }
              f = _;
            }
          else {
            f = this._last;
            for (var C = i < 0 ? i : g; f; ) {
              if (
                ((_ = f._prev), (f._act || C <= f._end) && f._ts && w !== f)
              ) {
                if (f.parent !== this) return this.render(i, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (C - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (C - f._start) * f._ts,
                    s,
                    o || (ne && Ks(f))
                  ),
                  g !== this._time || (!this._ts && !b))
                ) {
                  (w = 0), _ && (c += this._zTime = C ? -dt : dt);
                  break;
                }
              }
              f = _;
            }
          }
          if (
            w &&
            !s &&
            (this.pause(),
            (w.render(g >= a ? 0 : -dt)._zTime = g >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = h), Kn(this), this.render(i, s, o);
          this._onUpdate && !s && He(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (h === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Nr(this, 1),
                !s &&
                  !(i < 0 && !a) &&
                  (c || a || !l) &&
                  (He(
                    this,
                    c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (e.add = function (i, s) {
        var o = this;
        if ((Or(s) || (s = Je(this, s, i)), !(i instanceof on))) {
          if (ue(i))
            return (
              i.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Kt(i)) return this.addLabel(i, s);
          if (Mt(i)) i = Wt.delayedCall(0, i);
          else return this;
        }
        return this !== i ? _r(this, i, s) : this;
      }),
      (e.getChildren = function (i, s, o, a) {
        i === void 0 && (i = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Qe);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Wt
              ? s && l.push(u)
              : (o && l.push(u),
                i && l.push.apply(l, u.getChildren(!0, s, o)))),
            (u = u._next);
        return l;
      }),
      (e.getById = function (i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === i) return s[o];
      }),
      (e.remove = function (i) {
        return Kt(i)
          ? this.removeLabel(i)
          : Mt(i)
          ? this.killTweensOf(i)
          : (i.parent === this && jn(this, i),
            i === this._recent && (this._recent = this._last),
            Zr(this));
      }),
      (e.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Bt(
                Xe.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            n.prototype.totalTime.call(this, i, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function (i, s) {
        return (this.labels[i] = Je(this, s)), this;
      }),
      (e.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (e.addPause = function (i, s, o) {
        var a = Wt.delayedCall(0, s || Zi, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), _r(this, a, Je(this, i))
        );
      }),
      (e.removePause = function (i) {
        var s = this._first;
        for (i = Je(this, i); s; )
          s._start === i && s.data === "isPause" && Nr(s), (s = s._next);
      }),
      (e.killTweensOf = function (i, s, o) {
        for (var a = this.getTweensOf(i, o), l = a.length; l--; )
          Fr !== a[l] && a[l].kill(i, s);
        return this;
      }),
      (e.getTweensOf = function (i, s) {
        for (var o = [], a = tr(i), l = this._first, u = Or(s), c; l; )
          l instanceof Wt
            ? Cc(l._targets, a) &&
              (u
                ? (!Fr || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            (l = l._next);
        return o;
      }),
      (e.tweenTo = function (i, s) {
        s = s || {};
        var o = this,
          a = Je(o, i),
          l = s,
          u = l.startAt,
          c = l.onStart,
          p = l.onStartParams,
          g = l.immediateRender,
          f,
          _ = Wt.to(
            o,
            qe(
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
                  dt,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var m =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    _._dur !== m && Ei(_, m, 0, 1).render(_._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(_, p || []);
                },
              },
              s
            )
          );
        return g ? _.render(0) : _;
      }),
      (e.tweenFromTo = function (i, s, o) {
        return this.tweenTo(s, qe({ startAt: { time: Je(this, i) } }, o));
      }),
      (e.recent = function () {
        return this._recent;
      }),
      (e.nextLabel = function (i) {
        return i === void 0 && (i = this._time), Ya(this, Je(this, i));
      }),
      (e.previousLabel = function (i) {
        return i === void 0 && (i = this._time), Ya(this, Je(this, i), 1);
      }),
      (e.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + dt);
      }),
      (e.shiftChildren = function (i, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += i);
        return Zr(this);
      }),
      (e.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
        return n.prototype.invalidate.call(this, i);
      }),
      (e.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          Zr(this)
        );
      }),
      (e.totalDuration = function (i) {
        var s = 0,
          o = this,
          a = o._last,
          l = Qe,
          u,
          c,
          p;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -i : i)
          );
        if (o._dirty) {
          for (p = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (_r(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((s -= c),
                ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = u);
          Ei(o, o === Et && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (i) {
        if ((Et._ts && (Pa(Et, Gn(i, Et)), (Ea = Xe.frame)), Xe.frame >= Oa)) {
          Oa += vt.autoSleep || 120;
          var s = Et._first;
          if ((!s || !s._ts) && vt.autoSleep && Xe._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Xe.sleep();
          }
        }
      }),
      t
    );
  })(on);
  qe(we.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zc = function (t, e, r, i, s, o, a) {
      var l = new ke(this._pt, t, e, 0, 1, ll, null, s),
        u = 0,
        c = 0,
        p,
        g,
        f,
        _,
        d,
        m,
        b,
        w;
      for (
        l.b = r,
          l.e = i,
          r += "",
          i += "",
          (b = ~i.indexOf("random(")) && (i = en(i)),
          o && ((w = [r, i]), o(w, t, e), (r = w[0]), (i = w[1])),
          g = r.match(qs) || [];
        (p = qs.exec(i));

      )
        (_ = p[0]),
          (d = i.substring(u, p.index)),
          f ? (f = (f + 1) % 5) : d.substr(-5) === "rgba(" && (f = 1),
          _ !== g[c++] &&
            ((m = parseFloat(g[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: d || c === 1 ? d : ",",
              s: m,
              c: _.charAt(1) === "=" ? Ti(m, _) - m : parseFloat(_) - m,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = qs.lastIndex));
      return (
        (l.c = u < i.length ? i.substring(u, i.length) : ""),
        (l.fp = a),
        (ba.test(i) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    so = function (t, e, r, i, s, o, a, l, u, c) {
      Mt(i) && (i = i(s || 0, t, o));
      var p = t[e],
        g =
          r !== "get"
            ? r
            : Mt(p)
            ? u
              ? t[
                  e.indexOf("set") || !Mt(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : p,
        f = Mt(p) ? (u ? rf : ol) : lo,
        _;
      if (
        (Kt(i) &&
          (~i.indexOf("random(") && (i = en(i)),
          i.charAt(1) === "=" &&
            ((_ = Ti(g, i) + (ce(g) || 0)), (_ || _ === 0) && (i = _))),
        !c || g !== i || oo)
      )
        return !isNaN(g * i) && i !== ""
          ? ((_ = new ke(
              this._pt,
              t,
              e,
              +g || 0,
              i - (g || 0),
              typeof p == "boolean" ? sf : al,
              0,
              f
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, t),
            (this._pt = _))
          : (!p && !(e in t) && Vs(e, i),
            Zc.call(this, t, e, g, i, f, l || vt.stringFilter, u));
    },
    Qc = function (t, e, r, i, s) {
      if (
        (Mt(t) && (t = an(t, s, e, r, i)),
        !pr(t) || (t.style && t.nodeType) || ue(t) || ya(t))
      )
        return Kt(t) ? an(t, s, e, r, i) : t;
      var o = {},
        a;
      for (a in t) o[a] = an(t[a], s, e, r, i);
      return o;
    },
    il = function (t, e, r, i, s, o) {
      var a, l, u, c;
      if (
        We[t] &&
        (a = new We[t]()).init(
          s,
          a.rawVars ? e[t] : Qc(e[t], i, s, o, r),
          r,
          i,
          o
        ) !== !1 &&
        ((r._pt = l = new ke(r._pt, s, t, 0, 1, a.render, a, 0, a.priority)),
        r !== Oi)
      )
        for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Fr,
    oo,
    ao = function n(t, e, r) {
      var i = t.vars,
        s = i.ease,
        o = i.startAt,
        a = i.immediateRender,
        l = i.lazy,
        u = i.onUpdate,
        c = i.runBackwards,
        p = i.yoyoEase,
        g = i.keyframes,
        f = i.autoRevert,
        _ = t._dur,
        d = t._startAt,
        m = t._targets,
        b = t.parent,
        w = b && b.data === "nested" ? b.vars.targets : m,
        S = t._overwrite === "auto" && !Is,
        h = t.timeline,
        v,
        y,
        T,
        A,
        E,
        C,
        L,
        k,
        D,
        F,
        B,
        z,
        M;
      if (
        (h && (!g || !s) && (s = "none"),
        (t._ease = Qr(s, bi.ease)),
        (t._yEase = p ? Ja(Qr(p === !0 ? s : p, bi.ease)) : 0),
        p &&
          t._yoyo &&
          !t._repeat &&
          ((p = t._yEase), (t._yEase = t._ease), (t._ease = p)),
        (t._from = !h && !!i.runBackwards),
        !h || (g && !i.stagger))
      ) {
        if (
          ((k = m[0] ? Kr(m[0]).harness : 0),
          (z = k && i[k.prop]),
          (v = Un(i, $s)),
          d &&
            (d._zTime < 0 && d.progress(1),
            e < 0 && c && a && !f
              ? d.render(-1, !0)
              : d.revert(c && _ ? Vn : Ec),
            (d._lazy = 0)),
          o)
        ) {
          if (
            (Nr(
              (t._startAt = Wt.set(
                m,
                qe(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !d && Ce(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return He(t, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (ne || (!a && !f)) && t._startAt.revert(Vn),
            a && _ && e <= 0 && r <= 0)
          ) {
            e && (t._zTime = e);
            return;
          }
        } else if (c && _ && !d) {
          if (
            (e && (a = !1),
            (T = qe(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !d && Ce(l),
                immediateRender: a,
                stagger: 0,
                parent: b,
              },
              v
            )),
            z && (T[k.prop] = z),
            Nr((t._startAt = Wt.set(m, T))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (ne ? t._startAt.revert(Vn) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            !a)
          )
            n(t._startAt, dt, dt);
          else if (!e) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (_ && Ce(l)) || (l && !_), y = 0;
          y < m.length;
          y++
        ) {
          if (
            ((E = m[y]),
            (L = E._gsap || Gs(m)[y]._gsap),
            (t._ptLookup[y] = F = {}),
            Ys[L.id] && Lr.length && Yn(),
            (B = w === m ? y : w.indexOf(E)),
            k &&
              (D = new k()).init(E, z || v, t, B, w) !== !1 &&
              ((t._pt = A =
                new ke(t._pt, E, D.name, 0, 1, D.render, D, 0, D.priority)),
              D._props.forEach(function (W) {
                F[W] = A;
              }),
              D.priority && (C = 1)),
            !k || z)
          )
            for (T in v)
              We[T] && (D = il(T, v, t, B, E, w))
                ? D.priority && (C = 1)
                : (F[T] = A =
                    so.call(t, E, T, "get", v[T], B, w, 0, i.stringFilter));
          t._op && t._op[y] && t.kill(E, t._op[y]),
            S &&
              t._pt &&
              ((Fr = t),
              Et.killTweensOf(E, F, t.globalTime(e)),
              (M = !t.parent),
              (Fr = 0)),
            t._pt && l && (Ys[L.id] = 1);
        }
        C && ul(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !M),
        g && e <= 0 && h.render(Qe, !0, !0);
    },
    Jc = function (t, e, r, i, s, o, a, l) {
      var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        c,
        p,
        g,
        f;
      if (!u)
        for (
          u = t._ptCache[e] = [], g = t._ptLookup, f = t._targets.length;
          f--;

        ) {
          if (((c = g[f][e]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== e && c.fp !== e; ) c = c._next;
          if (!c)
            return (
              (oo = 1),
              (t.vars[e] = "+=0"),
              ao(t, a),
              (oo = 0),
              l ? Ki(e + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (p = u[f]),
          (c = p._pt || p),
          (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
          (c.c = r - c.s),
          p.e && (p.e = It(r) + ce(p.e)),
          p.b && (p.b = c.s + ce(p.b));
    },
    tf = function (t, e) {
      var r = t[0] ? Kr(t[0]).harness : 0,
        i = r && r.aliases,
        s,
        o,
        a,
        l;
      if (!i) return e;
      s = Si({}, e);
      for (o in i)
        if (o in s)
          for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    ef = function (t, e, r, i) {
      var s = e.ease || i || "power1.inOut",
        o,
        a;
      if (ue(e))
        (a = r[t] || (r[t] = [])),
          e.forEach(function (l, u) {
            return a.push({ t: (u / (e.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in e)
          (a = r[o] || (r[o] = [])),
            o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: s });
    },
    an = function (t, e, r, i, s) {
      return Mt(t)
        ? t.call(e, r, i, s)
        : Kt(t) && ~t.indexOf("random(")
        ? en(t)
        : t;
    },
    nl = js + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    sl = {};
  Pe(nl + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (sl[n] = 1);
  });
  var Wt = (function (n) {
    ie(t, n);
    function t(r, i, s, o) {
      var a;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (a = n.call(this, o ? i : Qi(i)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        p = l.immediateRender,
        g = l.stagger,
        f = l.overwrite,
        _ = l.keyframes,
        d = l.defaults,
        m = l.scrollTrigger,
        b = l.yoyoEase,
        w = i.parent || Et,
        S = (ue(r) || ya(r) ? Or(r[0]) : "length" in i) ? [r] : tr(r),
        h,
        v,
        y,
        T,
        A,
        E,
        C,
        L;
      if (
        ((a._targets = S.length
          ? Gs(S)
          : Ki(
              "GSAP target " + r + " not found. https://gsap.com",
              !vt.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        _ || g || Hn(u) || Hn(c))
      ) {
        if (
          ((i = a.vars),
          (h = a.timeline =
            new we({
              data: "nested",
              defaults: d || {},
              targets: w && w.data === "nested" ? w.vars.targets : S,
            })),
          h.kill(),
          (h.parent = h._dp = Dt(a)),
          (h._start = 0),
          g || Hn(u) || Hn(c))
        ) {
          if (((T = S.length), (C = g && qa(g)), pr(g)))
            for (A in g) ~nl.indexOf(A) && (L || (L = {}), (L[A] = g[A]));
          for (v = 0; v < T; v++)
            (y = Un(i, sl)),
              (y.stagger = 0),
              b && (y.yoyoEase = b),
              L && Si(y, L),
              (E = S[v]),
              (y.duration = +an(u, Dt(a), v, E, S)),
              (y.delay = (+an(c, Dt(a), v, E, S) || 0) - a._delay),
              !g &&
                T === 1 &&
                y.delay &&
                ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
              h.to(E, y, C ? C(v, E, S) : 0),
              (h._ease = ot.none);
          h.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (_) {
          Qi(qe(h.vars.defaults, { ease: "none" })),
            (h._ease = Qr(_.ease || i.ease || "none"));
          var k = 0,
            D,
            F,
            B;
          if (ue(_))
            _.forEach(function (z) {
              return h.to(S, z, ">");
            }),
              h.duration();
          else {
            y = {};
            for (A in _)
              A === "ease" || A === "easeEach" || ef(A, _[A], y, _.easeEach);
            for (A in y)
              for (
                D = y[A].sort(function (z, M) {
                  return z.t - M.t;
                }),
                  k = 0,
                  v = 0;
                v < D.length;
                v++
              )
                (F = D[v]),
                  (B = {
                    ease: F.e,
                    duration: ((F.t - (v ? D[v - 1].t : 0)) / 100) * u,
                  }),
                  (B[A] = F.v),
                  h.to(S, B, k),
                  (k += B.duration);
            h.duration() < u && h.to({}, { duration: u - h.duration() });
          }
        }
        u || a.duration((u = h.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !Is && ((Fr = Dt(a)), Et.killTweensOf(S), (Fr = 0)),
        _r(w, Dt(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (p ||
          (!u &&
            !_ &&
            a._start === Bt(w._time) &&
            Ce(p) &&
            Mc(Dt(a)) &&
            w.data !== "nested")) &&
          ((a._tTime = -dt), a.render(Math.max(0, -c) || 0)),
        m && Ia(Dt(a), m),
        a
      );
    }
    var e = t.prototype;
    return (
      (e.render = function (i, s, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = i < 0,
          p = i > l - dt && !c ? l : i < dt ? 0 : i,
          g,
          f,
          _,
          d,
          m,
          b,
          w,
          S,
          h;
        if (!u) Lc(this, i, s, o);
        else if (
          p !== this._tTime ||
          !i ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((g = p), (S = this.timeline), this._repeat)) {
            if (((d = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(d * 100 + i, s, o);
            if (
              ((g = Bt(p % d)),
              p === l
                ? ((_ = this._repeat), (g = u))
                : ((m = Bt(p / d)),
                  (_ = ~~m),
                  _ && _ === m ? ((g = u), _--) : g > u && (g = u)),
              (b = this._yoyo && _ & 1),
              b && ((h = this._yEase), (g = u - g)),
              (m = Ai(this._tTime, d)),
              g === a && !o && this._initted && _ === m)
            )
              return (this._tTime = p), this;
            _ !== m &&
              (S && this._yEase && tl(S, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                g !== d &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Bt(d * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (za(this, c ? i : g, o, s, p)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
              return this;
            if (u !== this._dur) return this.render(i, s, o);
          }
          if (
            ((this._tTime = p),
            (this._time = g),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (h || this._ease)(g / u)),
            this._from && (this.ratio = w = 1 - w),
            !a && p && !s && !m && (He(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (f = this._pt; f; ) f.r(w, f.d), (f = f._next);
          (S && S.render(i < 0 ? i : S._dur * S._ease(g / this._dur), s, o)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (c && Zs(this, i, s, o), He(this, "onUpdate")),
            this._repeat &&
              _ !== m &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              He(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (c && !this._onUpdate && Zs(this, i, !0, !0),
              (i || !u) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                Nr(this, 1),
              !s &&
                !(c && !a) &&
                (p || a || b) &&
                (He(this, p === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (e.targets = function () {
        return this._targets;
      }),
      (e.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          n.prototype.invalidate.call(this, i)
        );
      }),
      (e.resetTo = function (i, s, o, a, l) {
        sn || Xe.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || ao(this, u),
          (c = this._ease(u / this._dur)),
          Jc(this, i, s, o, a, c, u, l)
            ? this.resetTo(i, s, o, a, 1)
            : (Zn(this, 0),
              this.parent ||
                Ra(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function (i, s) {
        if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? rn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!ne),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, Fr && Fr.vars.overwrite !== !0)
              ._first || rn(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Ei(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = i ? tr(i) : a,
          u = this._ptLookup,
          c = this._pt,
          p,
          g,
          f,
          _,
          d,
          m,
          b;
        if ((!s || s === "all") && kc(a, l))
          return s === "all" && (this._pt = 0), rn(this);
        for (
          p = this._op = this._op || [],
            s !== "all" &&
              (Kt(s) &&
                ((d = {}),
                Pe(s, function (w) {
                  return (d[w] = 1);
                }),
                (s = d)),
              (s = tf(a, s))),
            b = a.length;
          b--;

        )
          if (~l.indexOf(a[b])) {
            (g = u[b]),
              s === "all"
                ? ((p[b] = s), (_ = g), (f = {}))
                : ((f = p[b] = p[b] || {}), (_ = s));
            for (d in _)
              (m = g && g[d]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(d) === !0) &&
                    jn(this, m, "_pt"),
                  delete g[d]),
                f !== "all" && (f[d] = 1);
          }
        return this._initted && !this._pt && c && rn(this), this;
      }),
      (t.to = function (i, s) {
        return new t(i, s, arguments[2]);
      }),
      (t.from = function (i, s) {
        return Ji(1, arguments);
      }),
      (t.delayedCall = function (i, s, o, a) {
        return new t(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (t.fromTo = function (i, s, o) {
        return Ji(2, arguments);
      }),
      (t.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(i, s);
      }),
      (t.killTweensOf = function (i, s, o) {
        return Et.killTweensOf(i, s, o);
      }),
      t
    );
  })(on);
  qe(Wt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Pe("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Wt[n] = function () {
        var t = new we(),
          e = Js.call(arguments, 0);
        return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
      };
    });
  var lo = function (t, e, r) {
      return (t[e] = r);
    },
    ol = function (t, e, r) {
      return t[e](r);
    },
    rf = function (t, e, r, i) {
      return t[e](i.fp, r);
    },
    nf = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    uo = function (t, e) {
      return Mt(t[e]) ? ol : Fs(t[e]) && t.setAttribute ? nf : lo;
    },
    al = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    sf = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ll = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (t === 1 && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    co = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    of = function (t, e, r, i) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === i && s.modifier(t, e, r), (s = o);
    },
    af = function (t) {
      for (var e = this._pt, r, i; e; )
        (i = e._next),
          (e.p === t && !e.op) || e.op === t
            ? jn(this, e, "_pt")
            : e.dep || (r = 1),
          (e = i);
      return !r;
    },
    lf = function (t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    },
    ul = function (t) {
      for (var e = t._pt, r, i, s, o; e; ) {
        for (r = e._next, i = s; i && i.pr > e.pr; ) i = i._next;
        (e._prev = i ? i._prev : o) ? (e._prev._next = e) : (s = e),
          (e._next = i) ? (i._prev = e) : (o = e),
          (e = r);
      }
      t._pt = s;
    },
    ke = (function () {
      function n(e, r, i, s, o, a, l, u, c) {
        (this.t = r),
          (this.s = s),
          (this.c = o),
          (this.p = i),
          (this.r = a || al),
          (this.d = l || this),
          (this.set = u || lo),
          (this.pr = c || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      var t = n.prototype;
      return (
        (t.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = lf),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        n
      );
    })();
  Pe(
    js +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return ($s[n] = 1);
    }
  ),
    (Be.TweenMax = Be.TweenLite = Wt),
    (Be.TimelineLite = Be.TimelineMax = we),
    (Et = new we({
      sortChildren: !1,
      defaults: bi,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (vt.stringFilter = Qa);
  var ti = [],
    Qn = {},
    uf = [],
    cl = 0,
    cf = 0,
    fo = function (t) {
      return (Qn[t] || uf).map(function (e) {
        return e();
      });
    },
    ho = function () {
      var t = Date.now(),
        e = [];
      t - cl > 2 &&
        (fo("matchMediaInit"),
        ti.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            o,
            a,
            l,
            u;
          for (a in i)
            (o = gr.matchMedia(i[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (r.revert(), l && e.push(r));
        }),
        fo("matchMediaRevert"),
        e.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (cl = t),
        fo("matchMedia"));
    },
    fl = (function () {
      function n(e, r) {
        (this.selector = r && to(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = cf++),
          e && this.add(e);
      }
      var t = n.prototype;
      return (
        (t.add = function (r, i, s) {
          Mt(r) && ((s = i), (i = r), (r = Mt));
          var o = this,
            a = function () {
              var u = St,
                c = o.selector,
                p;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = to(s)),
                (St = o),
                (p = i.apply(o, arguments)),
                Mt(p) && o._r.push(p),
                (St = u),
                (o.selector = c),
                (o.isReverted = !1),
                p
              );
            };
          return (
            (o.last = a),
            r === Mt
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : r
              ? (o[r] = a)
              : a
          );
        }),
        (t.ignore = function (r) {
          var i = St;
          (St = null), r(this), (St = i);
        }),
        (t.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof n
                ? r.push.apply(r, i.getTweens())
                : i instanceof Wt &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (r, i) {
          var s = this;
          if (
            (r
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
                      .sort(function (c, p) {
                        return p.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(r);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (u = s.data[l]),
                      u instanceof we
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Wt) && u.revert && u.revert(r);
                  s._r.forEach(function (c) {
                    return c(r, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            i)
          )
            for (var o = ti.length; o--; )
              ti[o].id === this.id && ti.splice(o, 1);
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        n
      );
    })(),
    ff = (function () {
      function n(e) {
        (this.contexts = []), (this.scope = e), St && St.data.push(this);
      }
      var t = n.prototype;
      return (
        (t.add = function (r, i, s) {
          pr(r) || (r = { matches: r });
          var o = new fl(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          St && !o.selector && (o.selector = St.selector),
            this.contexts.push(o),
            (i = o.add("onMatch", i)),
            (o.queries = r);
          for (u in r)
            u === "all"
              ? (c = 1)
              : ((l = gr.matchMedia(r[u])),
                l &&
                  (ti.indexOf(o) < 0 && ti.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(ho)
                    : l.addEventListener("change", ho)));
          return (
            c &&
              i(o, function (p) {
                return o.add(null, p);
              }),
            this
          );
        }),
        (t.revert = function (r) {
          this.kill(r || {});
        }),
        (t.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        n
      );
    })(),
    Jn = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (i) {
          return ja(i);
        });
      },
      timeline: function (t) {
        return new we(t);
      },
      getTweensOf: function (t, e) {
        return Et.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, i) {
        Kt(t) && (t = tr(t)[0]);
        var s = Kr(t || {}).get,
          o = r ? Da : ka;
        return (
          r === "native" && (r = ""),
          t &&
            (e
              ? o(((We[e] && We[e].get) || s)(t, e, r, i))
              : function (a, l, u) {
                  return o(((We[a] && We[a].get) || s)(t, a, l, u));
                })
        );
      },
      quickSetter: function (t, e, r) {
        if (((t = tr(t)), t.length > 1)) {
          var i = t.map(function (c) {
              return De.quickSetter(c, e, r);
            }),
            s = i.length;
          return function (c) {
            for (var p = s; p--; ) i[p](c);
          };
        }
        t = t[0] || {};
        var o = We[e],
          a = Kr(t),
          l = (a.harness && (a.harness.aliases || {})[e]) || e,
          u = o
            ? function (c) {
                var p = new o();
                (Oi._pt = 0),
                  p.init(t, r ? c + r : c, Oi, 0, [t]),
                  p.render(1, p),
                  Oi._pt && co(1, Oi);
              }
            : a.set(t, l);
        return o
          ? u
          : function (c) {
              return u(t, l, r ? c + r : c, a, 1);
            };
      },
      quickTo: function (t, e, r) {
        var i,
          s = De.to(
            t,
            qe(
              ((i = {}), (i[e] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          o = function (l, u, c) {
            return s.resetTo(e, l, u, c);
          };
        return (o.tween = s), o;
      },
      isTweening: function (t) {
        return Et.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Qr(t.ease, bi.ease)), Ma(bi, t || {});
      },
      config: function (t) {
        return Ma(vt, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          i = t.plugins,
          s = t.defaults,
          o = t.extendTimeline;
        (i || "").split(",").forEach(function (a) {
          return (
            a &&
            !We[a] &&
            !Be[a] &&
            Ki(e + " effect requires " + a + " plugin.")
          );
        }),
          (Us[e] = function (a, l, u) {
            return r(tr(a), qe(l || {}, s), u);
          }),
          o &&
            (we.prototype[e] = function (a, l, u) {
              return this.add(Us[e](a, pr(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, e) {
        ot[t] = Qr(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Qr(t, e) : ot;
      },
      getById: function (t) {
        return Et.getById(t);
      },
      exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var r = new we(t),
          i,
          s;
        for (
          r.smoothChildTiming = Ce(t.smoothChildTiming),
            Et.remove(r),
            r._dp = 0,
            r._time = r._tTime = Et._time,
            i = Et._first;
          i;

        )
          (s = i._next),
            (e ||
              !(
                !i._dur &&
                i instanceof Wt &&
                i.vars.onComplete === i._targets[0]
              )) &&
              _r(r, i, i._start - i._delay),
            (i = s);
        return _r(Et, r, 0), r;
      },
      context: function (t, e) {
        return t ? new fl(t, e) : St;
      },
      matchMedia: function (t) {
        return new ff(t);
      },
      matchMediaRefresh: function () {
        return (
          ti.forEach(function (t) {
            var e = t.conditions,
              r,
              i;
            for (i in e) e[i] && ((e[i] = !1), (r = 1));
            r && t.revert();
          }) || ho()
        );
      },
      addEventListener: function (t, e) {
        var r = Qn[t] || (Qn[t] = []);
        ~r.indexOf(e) || r.push(e);
      },
      removeEventListener: function (t, e) {
        var r = Qn[t],
          i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Hc,
        wrapYoyo: Xc,
        distribute: qa,
        random: Xa,
        snap: Ha,
        normalize: qc,
        getUnit: ce,
        clamp: zc,
        splitColor: Ga,
        toArray: tr,
        selector: to,
        mapRange: $a,
        pipe: Bc,
        unitize: Wc,
        interpolate: Vc,
        shuffle: Wa,
      },
      install: Sa,
      effects: Us,
      ticker: Xe,
      updateRoot: we.updateRoot,
      plugins: We,
      globalTimeline: Et,
      core: {
        PropTween: ke,
        globals: Aa,
        Tween: Wt,
        Timeline: we,
        Animation: on,
        getCache: Kr,
        _removeLinkedListItem: jn,
        reverting: function () {
          return ne;
        },
        context: function (t) {
          return t && St && (St.data.push(t), (t._ctx = St)), St;
        },
        suppressOverwrites: function (t) {
          return (Is = t);
        },
      },
    };
  Pe("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Jn[n] = Wt[n]);
  }),
    Xe.add(we.updateRoot),
    (Oi = Jn.to({}, { duration: 0 }));
  var hf = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    df = function (t, e) {
      var r = t._targets,
        i,
        s,
        o;
      for (i in e)
        for (s = r.length; s--; )
          (o = t._ptLookup[s][i]),
            o &&
              (o = o.d) &&
              (o._pt && (o = hf(o, i)),
              o && o.modifier && o.modifier(e[i], t, r[s], i));
    },
    po = function (t, e) {
      return {
        name: t,
        headless: 1,
        rawVars: 1,
        init: function (i, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Kt(s) &&
                ((l = {}),
                Pe(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              e)
            ) {
              l = {};
              for (u in s) l[u] = e(s[u]);
              s = l;
            }
            df(a, s);
          };
        },
      };
    },
    De =
      Jn.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, i, s) {
            var o, a, l;
            this.tween = r;
            for (o in e)
              (l = t.getAttribute(o) || ""),
                (a = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  e[o],
                  i,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (t, e) {
            for (var r = e._pt; r; )
              ne ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          headless: 1,
          init: function (t, e) {
            for (var r = e.length; r--; )
              this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
          },
        },
        po("roundProps", eo),
        po("modifiers"),
        po("snap", Ha)
      ) || Jn;
  (Wt.version = we.version = De.version = "3.13.0"),
    (Ta = 1),
    Bs() && Ci(),
    ot.Power0,
    ot.Power1,
    ot.Power2,
    ot.Power3,
    ot.Power4,
    ot.Linear,
    ot.Quad,
    ot.Cubic,
    ot.Quart,
    ot.Quint,
    ot.Strong,
    ot.Elastic,
    ot.Back,
    ot.SteppedEase,
    ot.Bounce,
    ot.Sine,
    ot.Expo,
    ot.Circ;
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var hl,
    Br,
    Pi,
    go,
    ei,
    dl,
    _o,
    pf = function () {
      return typeof window != "undefined";
    },
    Cr = {},
    ri = 180 / Math.PI,
    ki = Math.PI / 180,
    Di = Math.atan2,
    pl = 1e8,
    mo = /([A-Z])/g,
    gf = /(left|right|width|margin|padding|x)/i,
    _f = /[\s,\(]\S/,
    mr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    vo = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    mf = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    vf = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    yf = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    gl = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    _l = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    wf = function (t, e, r) {
      return (t.style[e] = r);
    },
    bf = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    xf = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    Tf = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Sf = function (t, e, r, i, s) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
    },
    Af = function (t, e, r, i, s) {
      var o = t._gsap;
      (o[e] = r), o.renderTransform(s, o);
    },
    Ot = "transform",
    Me = Ot + "Origin",
    Ef = function n(t, e) {
      var r = this,
        i = this.target,
        s = i.style,
        o = i._gsap;
      if (t in Cr && s) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = mr[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (a) {
                  return (r.tfm[a] = Pr(i, a));
                })
              : (this.tfm[t] = o.x ? o[t] : Pr(i, t)),
            t === Me && (this.tfm.zOrigin = o.zOrigin);
        else
          return mr.transform.split(",").forEach(function (a) {
            return n.call(r, a, e);
          });
        if (this.props.indexOf(Ot) >= 0) return;
        o.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Me, e, "")),
          (t = Ot);
      }
      (s || e) && this.props.push(t, e, s[t]);
    },
    ml = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    Of = function () {
      var t = this.props,
        e = this.target,
        r = e.style,
        i = e._gsap,
        s,
        o;
      for (s = 0; s < t.length; s += 3)
        t[s + 1]
          ? t[s + 1] === 2
            ? e[t[s]](t[s + 2])
            : (e[t[s]] = t[s + 2])
          : t[s + 2]
          ? (r[t[s]] = t[s + 2])
          : r.removeProperty(
              t[s].substr(0, 2) === "--"
                ? t[s]
                : t[s].replace(mo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) i[o] = this.tfm[o];
        i.svg &&
          (i.renderTransform(),
          e.setAttribute("data-svg-origin", this.svgo || "")),
          (s = _o()),
          (!s || !s.isStart) &&
            !r[Ot] &&
            (ml(r),
            i.zOrigin &&
              r[Me] &&
              ((r[Me] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    vl = function (t, e) {
      var r = { target: t, props: [], revert: Of, save: Ef };
      return (
        t._gsap || De.core.getCache(t),
        e &&
          t.style &&
          t.nodeType &&
          e.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    yl,
    yo = function (t, e) {
      var r = Br.createElementNS
        ? Br.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Br.createElement(t);
      return r && r.style ? r : Br.createElement(t);
    },
    er = function n(t, e, r) {
      var i = getComputedStyle(t);
      return (
        i[e] ||
        i.getPropertyValue(e.replace(mo, "-$1").toLowerCase()) ||
        i.getPropertyValue(e) ||
        (!r && n(t, Mi(e) || e, 1)) ||
        ""
      );
    },
    wl = "O,Moz,ms,Ms,Webkit".split(","),
    Mi = function (t, e, r) {
      var i = e || ei,
        s = i.style,
        o = 5;
      if (t in s && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(wl[o] + t in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? wl[o] : "") + t;
    },
    wo = function () {
      pf() &&
        window.document &&
        ((hl = window),
        (Br = hl.document),
        (Pi = Br.documentElement),
        (ei = yo("div") || { style: {} }),
        yo("div"),
        (Ot = Mi(Ot)),
        (Me = Ot + "Origin"),
        (ei.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (yl = !!Mi("perspective")),
        (_o = De.core.reverting),
        (go = 1));
    },
    bl = function (t) {
      var e = t.ownerSVGElement,
        r = yo(
          "svg",
          (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = t.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), Pi.appendChild(r);
      try {
        s = i.getBBox();
      } catch (o) {}
      return r.removeChild(i), Pi.removeChild(r), s;
    },
    xl = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    Tl = function (t) {
      var e, r;
      try {
        e = t.getBBox();
      } catch (i) {
        (e = bl(t)), (r = 1);
      }
      return (
        (e && (e.width || e.height)) || r || (e = bl(t)),
        e && !e.width && !e.x && !e.y
          ? {
              x: +xl(t, ["x", "cx", "x1"]) || 0,
              y: +xl(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : e
      );
    },
    Sl = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Tl(t));
    },
    ii = function (t, e) {
      if (e) {
        var r = t.style,
          i;
        e in Cr && e !== Me && (e = Ot),
          r.removeProperty
            ? ((i = e.substr(0, 2)),
              (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
              r.removeProperty(
                i === "--" ? e : e.replace(mo, "-$1").toLowerCase()
              ))
            : r.removeAttribute(e);
      }
    },
    Wr = function (t, e, r, i, s, o) {
      var a = new ke(t._pt, e, r, 0, 1, o ? _l : gl);
      return (t._pt = a), (a.b = i), (a.e = s), t._props.push(r), a;
    },
    Al = { deg: 1, rad: 1, turn: 1 },
    Cf = { grid: 1, flex: 1 },
    qr = function n(t, e, r, i) {
      var s = parseFloat(r) || 0,
        o = (r + "").trim().substr((s + "").length) || "px",
        a = ei.style,
        l = gf.test(e),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        p = 100,
        g = i === "px",
        f = i === "%",
        _,
        d,
        m,
        b;
      if (i === o || !s || Al[i] || Al[o]) return s;
      if (
        (o !== "px" && !g && (s = n(t, e, r, "px")),
        (b = t.getCTM && Sl(t)),
        (f || o === "%") && (Cr[e] || ~e.indexOf("adius")))
      )
        return (
          (_ = b ? t.getBBox()[l ? "width" : "height"] : t[c]),
          It(f ? (s / _) * p : (s / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = p + (g ? o : i)),
        (d =
          (i !== "rem" && ~e.indexOf("adius")) ||
          (i === "em" && t.appendChild && !u)
            ? t
            : t.parentNode),
        b && (d = (t.ownerSVGElement || {}).parentNode),
        (!d || d === Br || !d.appendChild) && (d = Br.body),
        (m = d._gsap),
        m && f && m.width && l && m.time === Xe.time && !m.uncache)
      )
        return It((s / m.width) * p);
      if (f && (e === "height" || e === "width")) {
        var w = t.style[e];
        (t.style[e] = p + i), (_ = t[c]), w ? (t.style[e] = w) : ii(t, e);
      } else
        (f || o === "%") &&
          !Cf[er(d, "display")] &&
          (a.position = er(t, "position")),
          d === t && (a.position = "static"),
          d.appendChild(ei),
          (_ = ei[c]),
          d.removeChild(ei),
          (a.position = "absolute");
      return (
        l && f && ((m = Kr(d)), (m.time = Xe.time), (m.width = d[c])),
        It(g ? (_ * s) / p : _ && s ? (p / _) * s : 0)
      );
    },
    Pr = function (t, e, r, i) {
      var s;
      return (
        go || wo(),
        e in mr &&
          e !== "transform" &&
          ((e = mr[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
        Cr[e] && e !== "transform"
          ? ((s = un(t, i)),
            (s =
              e !== "transformOrigin"
                ? s[e]
                : s.svg
                ? s.origin
                : es(er(t, Me)) + " " + s.zOrigin + "px"))
          : ((s = t.style[e]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (ts[e] && ts[e](t, e, r)) ||
                er(t, e) ||
                Ca(t, e) ||
                (e === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? qr(t, e, s, r) + r : s
      );
    },
    Pf = function (t, e, r, i) {
      if (!r || r === "none") {
        var s = Mi(e, t, 1),
          o = s && er(t, s, 1);
        o && o !== r
          ? ((e = s), (r = o))
          : e === "borderColor" && (r = er(t, "borderTopColor"));
      }
      var a = new ke(this._pt, t.style, e, 0, 1, ll),
        l = 0,
        u = 0,
        c,
        p,
        g,
        f,
        _,
        d,
        m,
        b,
        w,
        S,
        h,
        v;
      if (
        ((a.b = r),
        (a.e = i),
        (r += ""),
        (i += ""),
        i.substring(0, 6) === "var(--" &&
          (i = er(t, i.substring(4, i.indexOf(")")))),
        i === "auto" &&
          ((d = t.style[e]),
          (t.style[e] = i),
          (i = er(t, e) || i),
          d ? (t.style[e] = d) : ii(t, e)),
        (c = [r, i]),
        Qa(c),
        (r = c[0]),
        (i = c[1]),
        (g = r.match(xi) || []),
        (v = i.match(xi) || []),
        v.length)
      ) {
        for (; (p = xi.exec(i)); )
          (m = p[0]),
            (w = i.substring(l, p.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (_ = 1),
            m !== (d = g[u++] || "") &&
              ((f = parseFloat(d) || 0),
              (h = d.substr((f + "").length)),
              m.charAt(1) === "=" && (m = Ti(f, m) + h),
              (b = parseFloat(m)),
              (S = m.substr((b + "").length)),
              (l = xi.lastIndex - S.length),
              S ||
                ((S = S || vt.units[e] || h),
                l === i.length && ((i += S), (a.e += S))),
              h !== S && (f = qr(t, e, d, S) || 0),
              (a._pt = {
                _next: a._pt,
                p: w || u === 1 ? w : ",",
                s: f,
                c: b - f,
                m: (_ && _ < 4) || e === "zIndex" ? Math.round : 0,
              }));
        a.c = l < i.length ? i.substring(l, i.length) : "";
      } else a.r = e === "display" && i === "none" ? _l : gl;
      return ba.test(i) && (a.e = 0), (this._pt = a), a;
    },
    El = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    kf = function (t) {
      var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((t = r), (r = i), (i = t)),
        (e[0] = El[r] || r),
        (e[1] = El[i] || i),
        e.join(" ")
      );
    },
    Df = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r = e.t,
          i = r.style,
          s = e.u,
          o = r._gsap,
          a,
          l,
          u;
        if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (a = s[u]),
              Cr[a] && ((l = 1), (a = a === "transformOrigin" ? Me : Ot)),
              ii(r, a);
        l &&
          (ii(r, Ot),
          o &&
            (o.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            un(r, 1),
            (o.uncache = 1),
            ml(i)));
      }
    },
    ts = {
      clearProps: function (t, e, r, i, s) {
        if (s.data !== "isFromStart") {
          var o = (t._pt = new ke(t._pt, e, r, 0, 0, Df));
          return (o.u = i), (o.pr = -10), (o.tween = s), t._props.push(r), 1;
        }
      },
    },
    ln = [1, 0, 0, 1, 0, 0],
    Ol = {},
    Cl = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Pl = function (t) {
      var e = er(t, Ot);
      return Cl(e) ? ln : e.substr(7).match(wa).map(It);
    },
    bo = function (t, e) {
      var r = t._gsap || Kr(t),
        i = t.style,
        s = Pl(t),
        o,
        a,
        l,
        u;
      return r.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? ln : s)
        : (s === ln &&
            !t.offsetParent &&
            t !== Pi &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (o = t.parentNode),
            (!o || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
              ((u = 1), (a = t.nextElementSibling), Pi.appendChild(t)),
            (s = Pl(t)),
            l ? (i.display = l) : ii(t, "display"),
            u &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : Pi.removeChild(t))),
          e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    xo = function (t, e, r, i, s, o) {
      var a = t._gsap,
        l = s || bo(t, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        p = a.xOffset || 0,
        g = a.yOffset || 0,
        f = l[0],
        _ = l[1],
        d = l[2],
        m = l[3],
        b = l[4],
        w = l[5],
        S = e.split(" "),
        h = parseFloat(S[0]) || 0,
        v = parseFloat(S[1]) || 0,
        y,
        T,
        A,
        E;
      r
        ? l !== ln &&
          (T = f * m - _ * d) &&
          ((A = h * (m / T) + v * (-d / T) + (d * w - m * b) / T),
          (E = h * (-_ / T) + v * (f / T) - (f * w - _ * b) / T),
          (h = A),
          (v = E))
        : ((y = Tl(t)),
          (h = y.x + (~S[0].indexOf("%") ? (h / 100) * y.width : h)),
          (v =
            y.y + (~(S[1] || S[0]).indexOf("%") ? (v / 100) * y.height : v))),
        i || (i !== !1 && a.smooth)
          ? ((b = h - u),
            (w = v - c),
            (a.xOffset = p + (b * f + w * d) - b),
            (a.yOffset = g + (b * _ + w * m) - w))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = h),
        (a.yOrigin = v),
        (a.smooth = !!i),
        (a.origin = e),
        (a.originIsAbsolute = !!r),
        (t.style[Me] = "0px 0px"),
        o &&
          (Wr(o, a, "xOrigin", u, h),
          Wr(o, a, "yOrigin", c, v),
          Wr(o, a, "xOffset", p, a.xOffset),
          Wr(o, a, "yOffset", g, a.yOffset)),
        t.setAttribute("data-svg-origin", h + " " + v);
    },
    un = function (t, e) {
      var r = t._gsap || new rl(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i = t.style,
        s = r.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        u = er(t, Me) || "0",
        c,
        p,
        g,
        f,
        _,
        d,
        m,
        b,
        w,
        S,
        h,
        v,
        y,
        T,
        A,
        E,
        C,
        L,
        k,
        D,
        F,
        B,
        z,
        M,
        W,
        X,
        x,
        G,
        st,
        gt,
        at,
        ht;
      return (
        (c = p = g = d = m = b = w = S = h = 0),
        (f = _ = 1),
        (r.svg = !!(t.getCTM && Sl(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[Ot] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Ot] !== "none" ? l[Ot] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (T = bo(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((W = t.getBBox()),
              (u = r.xOrigin - W.x + "px " + (r.yOrigin - W.y) + "px"),
              (M = ""))
            : (M = !e && t.getAttribute("data-svg-origin")),
          xo(t, M || u, !!M || r.originIsAbsolute, r.smooth !== !1, T)),
        (v = r.xOrigin || 0),
        (y = r.yOrigin || 0),
        T !== ln &&
          ((L = T[0]),
          (k = T[1]),
          (D = T[2]),
          (F = T[3]),
          (c = B = T[4]),
          (p = z = T[5]),
          T.length === 6
            ? ((f = Math.sqrt(L * L + k * k)),
              (_ = Math.sqrt(F * F + D * D)),
              (d = L || k ? Di(k, L) * ri : 0),
              (w = D || F ? Di(D, F) * ri + d : 0),
              w && (_ *= Math.abs(Math.cos(w * ki))),
              r.svg && ((c -= v - (v * L + y * D)), (p -= y - (v * k + y * F))))
            : ((ht = T[6]),
              (gt = T[7]),
              (x = T[8]),
              (G = T[9]),
              (st = T[10]),
              (at = T[11]),
              (c = T[12]),
              (p = T[13]),
              (g = T[14]),
              (A = Di(ht, st)),
              (m = A * ri),
              A &&
                ((E = Math.cos(-A)),
                (C = Math.sin(-A)),
                (M = B * E + x * C),
                (W = z * E + G * C),
                (X = ht * E + st * C),
                (x = B * -C + x * E),
                (G = z * -C + G * E),
                (st = ht * -C + st * E),
                (at = gt * -C + at * E),
                (B = M),
                (z = W),
                (ht = X)),
              (A = Di(-D, st)),
              (b = A * ri),
              A &&
                ((E = Math.cos(-A)),
                (C = Math.sin(-A)),
                (M = L * E - x * C),
                (W = k * E - G * C),
                (X = D * E - st * C),
                (at = F * C + at * E),
                (L = M),
                (k = W),
                (D = X)),
              (A = Di(k, L)),
              (d = A * ri),
              A &&
                ((E = Math.cos(A)),
                (C = Math.sin(A)),
                (M = L * E + k * C),
                (W = B * E + z * C),
                (k = k * E - L * C),
                (z = z * E - B * C),
                (L = M),
                (B = W)),
              m &&
                Math.abs(m) + Math.abs(d) > 359.9 &&
                ((m = d = 0), (b = 180 - b)),
              (f = It(Math.sqrt(L * L + k * k + D * D))),
              (_ = It(Math.sqrt(z * z + ht * ht))),
              (A = Di(B, z)),
              (w = Math.abs(A) > 2e-4 ? A * ri : 0),
              (h = at ? 1 / (at < 0 ? -at : at) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Cl(er(t, Ot))),
            M && t.setAttribute("transform", M))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (s
            ? ((f *= -1),
              (w += d <= 0 ? 180 : -180),
              (d += d <= 0 ? 180 : -180))
            : ((_ *= -1), (w += w <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          c -
          ((r.xPercent =
            c &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          o),
        (r.y =
          p -
          ((r.yPercent =
            p &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          o),
        (r.z = g + o),
        (r.scaleX = It(f)),
        (r.scaleY = It(_)),
        (r.rotation = It(d) + a),
        (r.rotationX = It(m) + a),
        (r.rotationY = It(b) + a),
        (r.skewX = w + a),
        (r.skewY = S + a),
        (r.transformPerspective = h + o),
        (r.zOrigin = parseFloat(u.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (i[Me] = es(u)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = vt.force3D),
        (r.renderTransform = r.svg ? Rf : yl ? kl : Mf),
        (r.uncache = 0),
        r
      );
    },
    es = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    To = function (t, e, r) {
      var i = ce(e);
      return It(parseFloat(e) + parseFloat(qr(t, "x", r + "px", i))) + i;
    },
    Mf = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        kl(t, e);
    },
    ni = "0deg",
    cn = "0px",
    si = ") ",
    kl = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.z,
        u = r.rotation,
        c = r.rotationY,
        p = r.rotationX,
        g = r.skewX,
        f = r.skewY,
        _ = r.scaleX,
        d = r.scaleY,
        m = r.transformPerspective,
        b = r.force3D,
        w = r.target,
        S = r.zOrigin,
        h = "",
        v = (b === "auto" && t && t !== 1) || b === !0;
      if (S && (p !== ni || c !== ni)) {
        var y = parseFloat(c) * ki,
          T = Math.sin(y),
          A = Math.cos(y),
          E;
        (y = parseFloat(p) * ki),
          (E = Math.cos(y)),
          (o = To(w, o, T * E * -S)),
          (a = To(w, a, -Math.sin(y) * -S)),
          (l = To(w, l, A * E * -S + S));
      }
      m !== cn && (h += "perspective(" + m + si),
        (i || s) && (h += "translate(" + i + "%, " + s + "%) "),
        (v || o !== cn || a !== cn || l !== cn) &&
          (h +=
            l !== cn || v
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + si),
        u !== ni && (h += "rotate(" + u + si),
        c !== ni && (h += "rotateY(" + c + si),
        p !== ni && (h += "rotateX(" + p + si),
        (g !== ni || f !== ni) && (h += "skew(" + g + ", " + f + si),
        (_ !== 1 || d !== 1) && (h += "scale(" + _ + ", " + d + si),
        (w.style[Ot] = h || "translate(0, 0)");
    },
    Rf = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.rotation,
        u = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        g = r.scaleY,
        f = r.target,
        _ = r.xOrigin,
        d = r.yOrigin,
        m = r.xOffset,
        b = r.yOffset,
        w = r.forceCSS,
        S = parseFloat(o),
        h = parseFloat(a),
        v,
        y,
        T,
        A,
        E;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= ki),
            (u *= ki),
            (v = Math.cos(l) * p),
            (y = Math.sin(l) * p),
            (T = Math.sin(l - u) * -g),
            (A = Math.cos(l - u) * g),
            u &&
              ((c *= ki),
              (E = Math.tan(u - c)),
              (E = Math.sqrt(1 + E * E)),
              (T *= E),
              (A *= E),
              c &&
                ((E = Math.tan(c)),
                (E = Math.sqrt(1 + E * E)),
                (v *= E),
                (y *= E))),
            (v = It(v)),
            (y = It(y)),
            (T = It(T)),
            (A = It(A)))
          : ((v = p), (A = g), (y = T = 0)),
        ((S && !~(o + "").indexOf("px")) || (h && !~(a + "").indexOf("px"))) &&
          ((S = qr(f, "x", o, "px")), (h = qr(f, "y", a, "px"))),
        (_ || d || m || b) &&
          ((S = It(S + _ - (_ * v + d * T) + m)),
          (h = It(h + d - (_ * y + d * A) + b))),
        (i || s) &&
          ((E = f.getBBox()),
          (S = It(S + (i / 100) * E.width)),
          (h = It(h + (s / 100) * E.height))),
        (E =
          "matrix(" +
          v +
          "," +
          y +
          "," +
          T +
          "," +
          A +
          "," +
          S +
          "," +
          h +
          ")"),
        f.setAttribute("transform", E),
        w && (f.style[Ot] = E);
    },
    Lf = function (t, e, r, i, s) {
      var o = 360,
        a = Kt(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? ri : 1),
        u = l - i,
        c = i + u + "deg",
        p,
        g;
      return (
        a &&
          ((p = s.split("_")[1]),
          p === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          p === "cw" && u < 0
            ? (u = ((u + o * pl) % o) - ~~(u / o) * o)
            : p === "ccw" && u > 0 && (u = ((u - o * pl) % o) - ~~(u / o) * o)),
        (t._pt = g = new ke(t._pt, e, r, i, u, mf)),
        (g.e = c),
        (g.u = "deg"),
        t._props.push(r),
        g
      );
    },
    Dl = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Nf = function (t, e, r) {
      var i = Dl({}, r._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = r.style,
        a,
        l,
        u,
        c,
        p,
        g,
        f,
        _;
      i.svg
        ? ((u = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (o[Ot] = e),
          (a = un(r, 1)),
          ii(r, Ot),
          r.setAttribute("transform", u))
        : ((u = getComputedStyle(r)[Ot]),
          (o[Ot] = e),
          (a = un(r, 1)),
          (o[Ot] = u));
      for (l in Cr)
        (u = i[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = ce(u)),
            (_ = ce(c)),
            (p = f !== _ ? qr(r, l, u, _) : parseFloat(u)),
            (g = parseFloat(c)),
            (t._pt = new ke(t._pt, a, l, p, g - p, vo)),
            (t._pt.u = _ || 0),
            t._props.push(l));
      Dl(a, i);
    };
  Pe("padding,margin,Width,Radius", function (n, t) {
    var e = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      o = (t < 3 ? [e, r, i, s] : [e + s, e + r, i + r, i + s]).map(function (
        a
      ) {
        return t < 2 ? n + a : "border" + a + n;
      });
    ts[t > 1 ? "border" + n : n] = function (a, l, u, c, p) {
      var g, f;
      if (arguments.length < 4)
        return (
          (g = o.map(function (_) {
            return Pr(a, _, u);
          })),
          (f = g.join(" ")),
          f.split(g[0]).length === 5 ? g[0] : f
        );
      (g = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (_, d) {
          return (f[_] = g[d] = g[d] || g[((d - 1) / 2) | 0]);
        }),
        a.init(l, f, p);
    };
  });
  var Ml = {
    name: "css",
    register: wo,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, i, s) {
      var o = this._props,
        a = t.style,
        l = r.vars.startAt,
        u,
        c,
        p,
        g,
        f,
        _,
        d,
        m,
        b,
        w,
        S,
        h,
        v,
        y,
        T,
        A;
      go || wo(),
        (this.styles = this.styles || vl(t)),
        (A = this.styles.props),
        (this.tween = r);
      for (d in e)
        if (
          d !== "autoRound" &&
          ((c = e[d]), !(We[d] && il(d, e, r, i, t, s)))
        ) {
          if (
            ((f = typeof c),
            (_ = ts[d]),
            f === "function" && ((c = c.call(r, i, t, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = en(c)),
            _)
          )
            _(this, t, d, c, r) && (T = 1);
          else if (d.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
              (c += ""),
              (zr.lastIndex = 0),
              zr.test(u) || ((m = ce(u)), (b = ce(c))),
              b ? m !== b && (u = qr(t, d, u, b) + b) : m && (c += m),
              this.add(a, "setProperty", u, c, i, s, 0, 0, d),
              o.push(d),
              A.push(d, 0, a[d]);
          else if (f !== "undefined") {
            if (
              (l && d in l
                ? ((u =
                    typeof l[d] == "function" ? l[d].call(r, i, t, s) : l[d]),
                  Kt(u) && ~u.indexOf("random(") && (u = en(u)),
                  ce(u + "") ||
                    u === "auto" ||
                    (u += vt.units[d] || ce(Pr(t, d)) || ""),
                  (u + "").charAt(1) === "=" && (u = Pr(t, d)))
                : (u = Pr(t, d)),
              (g = parseFloat(u)),
              (w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              w && (c = c.substr(2)),
              (p = parseFloat(c)),
              d in mr &&
                (d === "autoAlpha" &&
                  (g === 1 && Pr(t, "visibility") === "hidden" && p && (g = 0),
                  A.push("visibility", 0, a.visibility),
                  Wr(
                    this,
                    a,
                    "visibility",
                    g ? "inherit" : "hidden",
                    p ? "inherit" : "hidden",
                    !p
                  )),
                d !== "scale" &&
                  d !== "transform" &&
                  ((d = mr[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
              (S = d in Cr),
              S)
            ) {
              if (
                (this.styles.save(d),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = er(t, c.substring(4, c.indexOf(")")))),
                  (p = parseFloat(c))),
                h ||
                  ((v = t._gsap),
                  (v.renderTransform && !e.parseTransform) ||
                    un(t, e.parseTransform),
                  (y = e.smoothOrigin !== !1 && v.smooth),
                  (h = this._pt =
                    new ke(this._pt, a, Ot, 0, 1, v.renderTransform, v, 0, -1)),
                  (h.dep = 1)),
                d === "scale")
              )
                (this._pt = new ke(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (w ? Ti(v.scaleY, w + p) : p) - v.scaleY || 0,
                  vo
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", d),
                  (d += "X");
              else if (d === "transformOrigin") {
                A.push(Me, 0, a[Me]),
                  (c = kf(c)),
                  v.svg
                    ? xo(t, c, 0, y, 0, this)
                    : ((b = parseFloat(c.split(" ")[2]) || 0),
                      b !== v.zOrigin && Wr(this, v, "zOrigin", v.zOrigin, b),
                      Wr(this, a, d, es(u), es(c)));
                continue;
              } else if (d === "svgOrigin") {
                xo(t, c, 1, y, 0, this);
                continue;
              } else if (d in Ol) {
                Lf(this, v, d, g, w ? Ti(g, w + c) : c);
                continue;
              } else if (d === "smoothOrigin") {
                Wr(this, v, "smooth", v.smooth, c);
                continue;
              } else if (d === "force3D") {
                v[d] = c;
                continue;
              } else if (d === "transform") {
                Nf(this, c, t);
                continue;
              }
            } else d in a || (d = Mi(d) || d);
            if (
              S ||
              ((p || p === 0) && (g || g === 0) && !_f.test(c) && d in a)
            )
              (m = (u + "").substr((g + "").length)),
                p || (p = 0),
                (b = ce(c) || (d in vt.units ? vt.units[d] : m)),
                m !== b && (g = qr(t, d, u, b)),
                (this._pt = new ke(
                  this._pt,
                  S ? v : a,
                  d,
                  g,
                  (w ? Ti(g, w + p) : p) - g,
                  !S && (b === "px" || d === "zIndex") && e.autoRound !== !1
                    ? yf
                    : vo
                )),
                (this._pt.u = b || 0),
                m !== b && b !== "%" && ((this._pt.b = u), (this._pt.r = vf));
            else if (d in a) Pf.call(this, t, d, u, w ? w + c : c);
            else if (d in t) this.add(t, d, u || t[d], w ? w + c : c, i, s);
            else if (d !== "parseTransform") {
              Vs(d, c);
              continue;
            }
            S ||
              (d in a
                ? A.push(d, 0, a[d])
                : typeof t[d] == "function"
                ? A.push(d, 2, t[d]())
                : A.push(d, 1, u || t[d])),
              o.push(d);
          }
        }
      T && ul(this);
    },
    render: function (t, e) {
      if (e.tween._time || !_o())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: Pr,
    aliases: mr,
    getSetter: function (t, e, r) {
      var i = mr[e];
      return (
        i && i.indexOf(",") < 0 && (e = i),
        e in Cr && e !== Me && (t._gsap.x || Pr(t, "x"))
          ? r && dl === r
            ? e === "scale"
              ? Tf
              : xf
            : (dl = r || {}) && (e === "scale" ? Sf : Af)
          : t.style && !Fs(t.style[e])
          ? wf
          : ~e.indexOf("-")
          ? bf
          : uo(t, e)
      );
    },
    core: { _removeProperty: ii, _getMatrix: bo },
  };
  (De.utils.checkPrefix = Mi),
    (De.core.getStyleSaver = vl),
    (function (n, t, e, r) {
      var i = Pe(n + "," + t + "," + e, function (s) {
        Cr[s] = 1;
      });
      Pe(t, function (s) {
        (vt.units[s] = "deg"), (Ol[s] = 1);
      }),
        (mr[i[13]] = n + "," + t),
        Pe(r, function (s) {
          var o = s.split(":");
          mr[o[1]] = i[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Pe(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        vt.units[n] = "px";
      }
    ),
    De.registerPlugin(Ml);
  var j = De.registerPlugin(Ml) || De;
  j.core.Tween;
  function If(n, t) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r);
    }
  }
  function zf(n, t, e) {
    return t && If(n.prototype, t), n;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var se,
    rs,
    Ve,
    Hr,
    Xr,
    Ri,
    Rl,
    oi,
    fn,
    Ll,
    kr,
    lr,
    Nl,
    Il = function () {
      return (
        se ||
        (typeof window != "undefined" &&
          (se = window.gsap) &&
          se.registerPlugin &&
          se)
      );
    },
    zl = 1,
    Li = [],
    rt = [],
    vr = [],
    hn = Date.now,
    So = function (t, e) {
      return e;
    },
    Ff = function () {
      var t = fn.core,
        e = t.bridge || {},
        r = t._scrollers,
        i = t._proxies;
      r.push.apply(r, rt),
        i.push.apply(i, vr),
        (rt = r),
        (vr = i),
        (So = function (o, a) {
          return e[o](a);
        });
    },
    Vr = function (t, e) {
      return ~vr.indexOf(t) && vr[vr.indexOf(t) + 1][e];
    },
    dn = function (t) {
      return !!~Ll.indexOf(t);
    },
    be = function (t, e, r, i, s) {
      return t.addEventListener(e, r, { passive: i !== !1, capture: !!s });
    },
    xe = function (t, e, r, i) {
      return t.removeEventListener(e, r, !!i);
    },
    is = "scrollLeft",
    ns = "scrollTop",
    Ao = function () {
      return (kr && kr.isPressed) || rt.cache++;
    },
    ss = function (t, e) {
      var r = function i(s) {
        if (s || s === 0) {
          zl && (Ve.history.scrollRestoration = "manual");
          var o = kr && kr.isPressed;
          (s = i.v = Math.round(s) || (kr && kr.iOS ? 1 : 0)),
            t(s),
            (i.cacheID = rt.cache),
            o && So("ss", s);
        } else
          (e || rt.cache !== i.cacheID || So("ref")) &&
            ((i.cacheID = rt.cache), (i.v = t()));
        return i.v + i.offset;
      };
      return (r.offset = 0), t && r;
    },
    Te = {
      s: is,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: ss(function (n) {
        return arguments.length
          ? Ve.scrollTo(n, Xt.sc())
          : Ve.pageXOffset || Hr[is] || Xr[is] || Ri[is] || 0;
      }),
    },
    Xt = {
      s: ns,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Te,
      sc: ss(function (n) {
        return arguments.length
          ? Ve.scrollTo(Te.sc(), n)
          : Ve.pageYOffset || Hr[ns] || Xr[ns] || Ri[ns] || 0;
      }),
    },
    Re = function (t, e) {
      return (
        ((e && e._ctx && e._ctx.selector) || se.utils.toArray)(t)[0] ||
        (typeof t == "string" && se.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    Bf = function (t, e) {
      for (var r = e.length; r--; )
        if (e[r] === t || e[r].contains(t)) return !0;
      return !1;
    },
    $r = function (t, e) {
      var r = e.s,
        i = e.sc;
      dn(t) && (t = Hr.scrollingElement || Xr);
      var s = rt.indexOf(t),
        o = i === Xt.sc ? 1 : 2;
      !~s && (s = rt.push(t) - 1), rt[s + o] || be(t, "scroll", Ao);
      var a = rt[s + o],
        l =
          a ||
          (rt[s + o] =
            ss(Vr(t, r), !0) ||
            (dn(t)
              ? i
              : ss(function (u) {
                  return arguments.length ? (t[r] = u) : t[r];
                })));
      return (
        (l.target = t),
        a || (l.smooth = se.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    Eo = function (t, e, r) {
      var i = t,
        s = t,
        o = hn(),
        a = o,
        l = e || 50,
        u = Math.max(500, l * 3),
        c = function (_, d) {
          var m = hn();
          d || m - o > l
            ? ((s = i), (i = _), (a = o), (o = m))
            : r
            ? (i += _)
            : (i = s + ((_ - s) / (m - a)) * (o - a));
        },
        p = function () {
          (s = i = r ? 0 : i), (a = o = 0);
        },
        g = function (_) {
          var d = a,
            m = s,
            b = hn();
          return (
            (_ || _ === 0) && _ !== i && c(_),
            o === a || b - a > u
              ? 0
              : ((i + (r ? m : -m)) / ((r ? b : o) - d)) * 1e3
          );
        };
      return { update: c, reset: p, getVelocity: g };
    },
    pn = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Fl = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    },
    Bl = function () {
      (fn = se.core.globals().ScrollTrigger), fn && fn.core && Ff();
    },
    Wl = function (t) {
      return (
        (se = t || Il()),
        !rs &&
          se &&
          typeof document != "undefined" &&
          document.body &&
          ((Ve = window),
          (Hr = document),
          (Xr = Hr.documentElement),
          (Ri = Hr.body),
          (Ll = [Ve, Hr, Xr, Ri]),
          se.utils.clamp,
          (Nl = se.core.context || function () {}),
          (oi = "onpointerenter" in Ri ? "pointer" : "mouse"),
          (Rl = zt.isTouch =
            Ve.matchMedia &&
            Ve.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Ve ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (lr = zt.eventTypes =
            (
              "ontouchstart" in Xr
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Xr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (zl = 0);
          }, 500),
          Bl(),
          (rs = 1)),
        rs
      );
    };
  (Te.op = Xt), (rt.cache = 0);
  var zt = (function () {
    function n(e) {
      this.init(e);
    }
    var t = n.prototype;
    return (
      (t.init = function (r) {
        rs || Wl(se) || console.warn("Please gsap.registerPlugin(Observer)"),
          fn || Bl();
        var i = r.tolerance,
          s = r.dragMinimum,
          o = r.type,
          a = r.target,
          l = r.lineHeight,
          u = r.debounce,
          c = r.preventDefault,
          p = r.onStop,
          g = r.onStopDelay,
          f = r.ignore,
          _ = r.wheelSpeed,
          d = r.event,
          m = r.onDragStart,
          b = r.onDragEnd,
          w = r.onDrag,
          S = r.onPress,
          h = r.onRelease,
          v = r.onRight,
          y = r.onLeft,
          T = r.onUp,
          A = r.onDown,
          E = r.onChangeX,
          C = r.onChangeY,
          L = r.onChange,
          k = r.onToggleX,
          D = r.onToggleY,
          F = r.onHover,
          B = r.onHoverEnd,
          z = r.onMove,
          M = r.ignoreCheck,
          W = r.isNormalizer,
          X = r.onGestureStart,
          x = r.onGestureEnd,
          G = r.onWheel,
          st = r.onEnable,
          gt = r.onDisable,
          at = r.onClick,
          ht = r.scrollSpeed,
          wt = r.capture,
          _t = r.allowClicks,
          Tt = r.lockAxis,
          Ct = r.onLockAxis;
        (this.target = a = Re(a) || Xr),
          (this.vars = r),
          f && (f = se.utils.toArray(f)),
          (i = i || 1e-9),
          (s = s || 0),
          (_ = _ || 1),
          (ht = ht || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Ve.getComputedStyle(Ri).lineHeight) || 22);
        var oe,
          Rt,
          $t,
          et,
          bt,
          Yt,
          Ut,
          O = this,
          Jt = 0,
          Ie = 0,
          te = r.passive || (!c && r.passive !== !1),
          ut = $r(a, Te),
          Oe = $r(a, Xt),
          pe = ut(),
          Ge = Oe(),
          Pt =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            lr[0] === "pointerdown",
          Ke = dn(a),
          xt = a.ownerDocument || Hr,
          ge = [0, 0, 0],
          ze = [0, 0, 0],
          cr = 0,
          vi = function () {
            return (cr = hn());
          },
          Lt = function (H, ct) {
            return (
              ((O.event = H) && f && Bf(H.target, f)) ||
              (ct && Pt && H.pointerType !== "touch") ||
              (M && M(H, ct))
            );
          },
          Gi = function () {
            O._vx.reset(), O._vy.reset(), Rt.pause(), p && p(O);
          },
          P = function () {
            var H = (O.deltaX = Fl(ge)),
              ct = (O.deltaY = Fl(ze)),
              R = Math.abs(H) >= i,
              K = Math.abs(ct) >= i;
            L && (R || K) && L(O, H, ct, ge, ze),
              R &&
                (v && O.deltaX > 0 && v(O),
                y && O.deltaX < 0 && y(O),
                E && E(O),
                k && O.deltaX < 0 != Jt < 0 && k(O),
                (Jt = O.deltaX),
                (ge[0] = ge[1] = ge[2] = 0)),
              K &&
                (A && O.deltaY > 0 && A(O),
                T && O.deltaY < 0 && T(O),
                C && C(O),
                D && O.deltaY < 0 != Ie < 0 && D(O),
                (Ie = O.deltaY),
                (ze[0] = ze[1] = ze[2] = 0)),
              (et || $t) &&
                (z && z(O),
                $t && (m && $t === 1 && m(O), w && w(O), ($t = 0)),
                (et = !1)),
              Yt && !(Yt = !1) && Ct && Ct(O),
              bt && (G(O), (bt = !1)),
              (oe = 0);
          },
          N = function (H, ct, R) {
            (ge[R] += H),
              (ze[R] += ct),
              O._vx.update(H),
              O._vy.update(ct),
              u ? oe || (oe = requestAnimationFrame(P)) : P();
          },
          V = function (H, ct) {
            Tt &&
              !Ut &&
              ((O.axis = Ut = Math.abs(H) > Math.abs(ct) ? "x" : "y"),
              (Yt = !0)),
              Ut !== "y" && ((ge[2] += H), O._vx.update(H, !0)),
              Ut !== "x" && ((ze[2] += ct), O._vy.update(ct, !0)),
              u ? oe || (oe = requestAnimationFrame(P)) : P();
          },
          nt = function (H) {
            if (!Lt(H, 1)) {
              H = pn(H, c);
              var ct = H.clientX,
                R = H.clientY,
                K = ct - O.x,
                Y = R - O.y,
                Z = O.isDragging;
              (O.x = ct),
                (O.y = R),
                (Z ||
                  ((K || Y) &&
                    (Math.abs(O.startX - ct) >= s ||
                      Math.abs(O.startY - R) >= s))) &&
                  (($t = Z ? 2 : 1), Z || (O.isDragging = !0), V(K, Y));
            }
          },
          J = (O.onPress = function (U) {
            Lt(U, 1) ||
              (U && U.button) ||
              ((O.axis = Ut = null),
              Rt.pause(),
              (O.isPressed = !0),
              (U = pn(U)),
              (Jt = Ie = 0),
              (O.startX = O.x = U.clientX),
              (O.startY = O.y = U.clientY),
              O._vx.reset(),
              O._vy.reset(),
              be(W ? a : xt, lr[1], nt, te, !0),
              (O.deltaX = O.deltaY = 0),
              S && S(O));
          }),
          $ = (O.onRelease = function (U) {
            if (!Lt(U, 1)) {
              xe(W ? a : xt, lr[1], nt, !0);
              var H = !isNaN(O.y - O.startY),
                ct = O.isDragging,
                R =
                  ct &&
                  (Math.abs(O.x - O.startX) > 3 ||
                    Math.abs(O.y - O.startY) > 3),
                K = pn(U);
              !R &&
                H &&
                (O._vx.reset(),
                O._vy.reset(),
                c &&
                  _t &&
                  se.delayedCall(0.08, function () {
                    if (hn() - cr > 300 && !U.defaultPrevented) {
                      if (U.target.click) U.target.click();
                      else if (xt.createEvent) {
                        var Y = xt.createEvent("MouseEvents");
                        Y.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Ve,
                          1,
                          K.screenX,
                          K.screenY,
                          K.clientX,
                          K.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          U.target.dispatchEvent(Y);
                      }
                    }
                  })),
                (O.isDragging = O.isGesturing = O.isPressed = !1),
                p && ct && !W && Rt.restart(!0),
                $t && P(),
                b && ct && b(O),
                h && h(O, R);
            }
          }),
          Ht = function (H) {
            return (
              H.touches &&
              H.touches.length > 1 &&
              (O.isGesturing = !0) &&
              X(H, O.isDragging)
            );
          },
          ee = function () {
            return (O.isGesturing = !1) || x(O);
          },
          Fe = function (H) {
            if (!Lt(H)) {
              var ct = ut(),
                R = Oe();
              N((ct - pe) * ht, (R - Ge) * ht, 1),
                (pe = ct),
                (Ge = R),
                p && Rt.restart(!0);
            }
          },
          jt = function (H) {
            if (!Lt(H)) {
              (H = pn(H, c)), G && (bt = !0);
              var ct =
                (H.deltaMode === 1
                  ? l
                  : H.deltaMode === 2
                  ? Ve.innerHeight
                  : 1) * _;
              N(H.deltaX * ct, H.deltaY * ct, 0), p && !W && Rt.restart(!0);
            }
          },
          fr = function (H) {
            if (!Lt(H)) {
              var ct = H.clientX,
                R = H.clientY,
                K = ct - O.x,
                Y = R - O.y;
              (O.x = ct),
                (O.y = R),
                (et = !0),
                p && Rt.restart(!0),
                (K || Y) && V(K, Y);
            }
          },
          hr = function (H) {
            (O.event = H), F(O);
          },
          _e = function (H) {
            (O.event = H), B(O);
          },
          yi = function (H) {
            return Lt(H) || (pn(H, c) && at(O));
          };
        (Rt = O._dc = se.delayedCall(g || 0.25, Gi).pause()),
          (O.deltaX = O.deltaY = 0),
          (O._vx = Eo(0, 50, !0)),
          (O._vy = Eo(0, 50, !0)),
          (O.scrollX = ut),
          (O.scrollY = Oe),
          (O.isDragging = O.isGesturing = O.isPressed = !1),
          Nl(this),
          (O.enable = function (U) {
            return (
              O.isEnabled ||
                (be(Ke ? xt : a, "scroll", Ao),
                o.indexOf("scroll") >= 0 &&
                  be(Ke ? xt : a, "scroll", Fe, te, wt),
                o.indexOf("wheel") >= 0 && be(a, "wheel", jt, te, wt),
                ((o.indexOf("touch") >= 0 && Rl) ||
                  o.indexOf("pointer") >= 0) &&
                  (be(a, lr[0], J, te, wt),
                  be(xt, lr[2], $),
                  be(xt, lr[3], $),
                  _t && be(a, "click", vi, !0, !0),
                  at && be(a, "click", yi),
                  X && be(xt, "gesturestart", Ht),
                  x && be(xt, "gestureend", ee),
                  F && be(a, oi + "enter", hr),
                  B && be(a, oi + "leave", _e),
                  z && be(a, oi + "move", fr)),
                (O.isEnabled = !0),
                (O.isDragging = O.isGesturing = O.isPressed = et = $t = !1),
                O._vx.reset(),
                O._vy.reset(),
                (pe = ut()),
                (Ge = Oe()),
                U && U.type && J(U),
                st && st(O)),
              O
            );
          }),
          (O.disable = function () {
            O.isEnabled &&
              (Li.filter(function (U) {
                return U !== O && dn(U.target);
              }).length || xe(Ke ? xt : a, "scroll", Ao),
              O.isPressed &&
                (O._vx.reset(), O._vy.reset(), xe(W ? a : xt, lr[1], nt, !0)),
              xe(Ke ? xt : a, "scroll", Fe, wt),
              xe(a, "wheel", jt, wt),
              xe(a, lr[0], J, wt),
              xe(xt, lr[2], $),
              xe(xt, lr[3], $),
              xe(a, "click", vi, !0),
              xe(a, "click", yi),
              xe(xt, "gesturestart", Ht),
              xe(xt, "gestureend", ee),
              xe(a, oi + "enter", hr),
              xe(a, oi + "leave", _e),
              xe(a, oi + "move", fr),
              (O.isEnabled = O.isPressed = O.isDragging = !1),
              gt && gt(O));
          }),
          (O.kill = O.revert =
            function () {
              O.disable();
              var U = Li.indexOf(O);
              U >= 0 && Li.splice(U, 1), kr === O && (kr = 0);
            }),
          Li.push(O),
          W && dn(a) && (kr = O),
          O.enable(d);
      }),
      zf(n, [
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
      n
    );
  })();
  (zt.version = "3.13.0"),
    (zt.create = function (n) {
      return new zt(n);
    }),
    (zt.register = Wl),
    (zt.getAll = function () {
      return Li.slice();
    }),
    (zt.getById = function (n) {
      return Li.filter(function (t) {
        return t.vars.id === n;
      })[0];
    }),
    Il() && se.registerPlugin(zt);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var I,
    Ni,
    it,
    yt,
    $e,
    ft,
    Oo,
    os,
    gn,
    _n,
    mn,
    as,
    fe,
    ls,
    Co,
    Se,
    ql,
    Hl,
    Ii,
    Xl,
    Po,
    Vl,
    Ae,
    ko,
    $l,
    Yl,
    Yr,
    Do,
    Mo,
    zi,
    Ro,
    us,
    Lo,
    No,
    cs = 1,
    he = Date.now,
    Io = he(),
    rr = 0,
    vn = 0,
    Ul = function (t, e, r) {
      var i = Ye(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (r["_" + e + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
    },
    jl = function (t, e) {
      return e && (!Ye(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    Wf = function n() {
      return vn && requestAnimationFrame(n);
    },
    Gl = function () {
      return (ls = 1);
    },
    Kl = function () {
      return (ls = 0);
    },
    yr = function (t) {
      return t;
    },
    yn = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Zl = function () {
      return typeof window != "undefined";
    },
    Ql = function () {
      return I || (Zl() && (I = window.gsap) && I.registerPlugin && I);
    },
    ai = function (t) {
      return !!~Oo.indexOf(t);
    },
    Jl = function (t) {
      return (
        (t === "Height" ? Ro : it["inner" + t]) ||
        $e["client" + t] ||
        ft["client" + t]
      );
    },
    tu = function (t) {
      return (
        Vr(t, "getBoundingClientRect") ||
        (ai(t)
          ? function () {
              return (Ts.width = it.innerWidth), (Ts.height = Ro), Ts;
            }
          : function () {
              return Dr(t);
            })
      );
    },
    qf = function (t, e, r) {
      var i = r.d,
        s = r.d2,
        o = r.a;
      return (o = Vr(t, "getBoundingClientRect"))
        ? function () {
            return o()[i];
          }
        : function () {
            return (e ? Jl(s) : t["client" + s]) || 0;
          };
    },
    Hf = function (t, e) {
      return !e || ~vr.indexOf(t)
        ? tu(t)
        : function () {
            return Ts;
          };
    },
    wr = function (t, e) {
      var r = e.s,
        i = e.d2,
        s = e.d,
        o = e.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (o = Vr(t, r))
          ? o() - tu(t)()[s]
          : ai(t)
          ? ($e[r] || ft[r]) - Jl(i)
          : t[r] - t["offset" + i]
      );
    },
    fs = function (t, e) {
      for (var r = 0; r < Ii.length; r += 3)
        (!e || ~e.indexOf(Ii[r + 1])) && t(Ii[r], Ii[r + 1], Ii[r + 2]);
    },
    Ye = function (t) {
      return typeof t == "string";
    },
    de = function (t) {
      return typeof t == "function";
    },
    wn = function (t) {
      return typeof t == "number";
    },
    li = function (t) {
      return typeof t == "object";
    },
    bn = function (t, e, r) {
      return t && t.progress(e ? 0 : 1) && r && t.pause();
    },
    zo = function (t, e) {
      if (t.enabled) {
        var r = t._ctx
          ? t._ctx.add(function () {
              return e(t);
            })
          : e(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    },
    Fi = Math.abs,
    eu = "left",
    ru = "top",
    Fo = "right",
    Bo = "bottom",
    ui = "width",
    ci = "height",
    xn = "Right",
    Tn = "Left",
    Sn = "Top",
    An = "Bottom",
    qt = "padding",
    ir = "margin",
    Bi = "Width",
    Wo = "Height",
    Vt = "px",
    nr = function (t) {
      return it.getComputedStyle(t);
    },
    Xf = function (t) {
      var e = nr(t).position;
      t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
    },
    iu = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Dr = function (t, e) {
      var r =
          e &&
          nr(t)[Co] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          I.to(t, {
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
        i = t.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    hs = function (t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0;
    },
    nu = function (t) {
      var e = [],
        r = t.labels,
        i = t.duration(),
        s;
      for (s in r) e.push(r[s] / i);
      return e;
    },
    Vf = function (t) {
      return function (e) {
        return I.utils.snap(nu(t), e);
      };
    },
    qo = function (t) {
      var e = I.utils.snap(t),
        r =
          Array.isArray(t) &&
          t.slice(0).sort(function (i, s) {
            return i - s;
          });
      return r
        ? function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return e(i);
            if (s > 0) {
              for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
              return r[a - 1];
            } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
            return r[0];
          }
        : function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a = e(i);
            return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
              ? a
              : e(s < 0 ? i - t : i + t);
          };
    },
    $f = function (t) {
      return function (e, r) {
        return qo(nu(t))(e, r.direction);
      };
    },
    ds = function (t, e, r, i) {
      return r.split(",").forEach(function (s) {
        return t(e, s, i);
      });
    },
    Zt = function (t, e, r, i, s) {
      return t.addEventListener(e, r, { passive: !i, capture: !!s });
    },
    Qt = function (t, e, r, i) {
      return t.removeEventListener(e, r, !!i);
    },
    ps = function (t, e, r) {
      (r = r && r.wheelHandler), r && (t(e, "wheel", r), t(e, "touchmove", r));
    },
    su = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    gs = { toggleActions: "play", anticipatePin: 0 },
    _s = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    ms = function (t, e) {
      if (Ye(t)) {
        var r = t.indexOf("="),
          i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (i *= e / 100), (t = t.substr(0, r - 1))),
          (t =
            i +
            (t in _s
              ? _s[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    vs = function (t, e, r, i, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        p = s.fontSize,
        g = s.indent,
        f = s.fontWeight,
        _ = yt.createElement("div"),
        d = ai(r) || Vr(r, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        b = d ? ft : r,
        w = t.indexOf("start") !== -1,
        S = w ? u : c,
        h =
          "border-color:" +
          S +
          ";font-size:" +
          p +
          ";color:" +
          S +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (h += "position:" + ((m || l) && d ? "fixed;" : "absolute;")),
        (m || l || !d) &&
          (h += (i === Xt ? Fo : Bo) + ":" + (o + parseFloat(g)) + "px;"),
        a &&
          (h +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = w),
        _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (_.style.cssText = h),
        (_.innerText = e || e === 0 ? t + "-" + e : t),
        b.children[0] ? b.insertBefore(_, b.children[0]) : b.appendChild(_),
        (_._offset = _["offset" + i.op.d2]),
        ys(_, 0, i, w),
        _
      );
    },
    ys = function (t, e, r, i) {
      var s = { display: "block" },
        o = r[i ? "os2" : "p2"],
        a = r[i ? "p2" : "os2"];
      (t._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + o + Bi] = 1),
        (s["border" + a + Bi] = 0),
        (s[r.p] = e + "px"),
        I.set(t, s);
    },
    tt = [],
    Ho = {},
    En,
    ou = function () {
      return he() - rr > 34 && (En || (En = requestAnimationFrame(Mr)));
    },
    Wi = function () {
      (!Ae || !Ae.isPressed || Ae.startX > ft.clientWidth) &&
        (rt.cache++,
        Ae ? En || (En = requestAnimationFrame(Mr)) : Mr(),
        rr || hi("scrollStart"),
        (rr = he()));
    },
    Xo = function () {
      (Yl = it.innerWidth), ($l = it.innerHeight);
    },
    On = function (t) {
      rt.cache++,
        (t === !0 ||
          (!fe &&
            !Vl &&
            !yt.fullscreenElement &&
            !yt.webkitFullscreenElement &&
            (!ko ||
              Yl !== it.innerWidth ||
              Math.abs(it.innerHeight - $l) > it.innerHeight * 0.25))) &&
          os.restart(!0);
    },
    fi = {},
    Yf = [],
    au = function n() {
      return Qt(Q, "scrollEnd", n) || pi(!0);
    },
    hi = function (t) {
      return (
        (fi[t] &&
          fi[t].map(function (e) {
            return e();
          })) ||
        Yf
      );
    },
    Ue = [],
    lu = function (t) {
      for (var e = 0; e < Ue.length; e += 5)
        (!t || (Ue[e + 4] && Ue[e + 4].query === t)) &&
          ((Ue[e].style.cssText = Ue[e + 1]),
          Ue[e].getBBox && Ue[e].setAttribute("transform", Ue[e + 2] || ""),
          (Ue[e + 3].uncache = 1));
    },
    Vo = function (t, e) {
      var r;
      for (Se = 0; Se < tt.length; Se++)
        (r = tt[Se]),
          r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
      (us = !0), e && lu(e), e || hi("revert");
    },
    uu = function (t, e) {
      rt.cache++,
        (e || !Ee) &&
          rt.forEach(function (r) {
            return de(r) && r.cacheID++ && (r.rec = 0);
          }),
        Ye(t) && (it.history.scrollRestoration = Mo = t);
    },
    Ee,
    di = 0,
    cu,
    Uf = function () {
      if (cu !== di) {
        var t = (cu = di);
        requestAnimationFrame(function () {
          return t === di && pi(!0);
        });
      }
    },
    fu = function () {
      ft.appendChild(zi),
        (Ro = (!Ae && zi.offsetHeight) || it.innerHeight),
        ft.removeChild(zi);
    },
    hu = function (t) {
      return gn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (e) {
        return (e.style.display = t ? "none" : "block");
      });
    },
    pi = function (t, e) {
      if (
        (($e = yt.documentElement),
        (ft = yt.body),
        (Oo = [it, yt, $e, ft]),
        rr && !t && !us)
      ) {
        Zt(Q, "scrollEnd", au);
        return;
      }
      fu(),
        (Ee = Q.isRefreshing = !0),
        rt.forEach(function (i) {
          return de(i) && ++i.cacheID && (i.rec = i());
        });
      var r = hi("refreshInit");
      Xl && Q.sort(),
        e || Vo(),
        rt.forEach(function (i) {
          de(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        tt.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (us = !1),
        tt.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
          }
        }),
        (Lo = 1),
        hu(!0),
        tt.forEach(function (i) {
          var s = wr(i.scroller, i._dir),
            o = i.vars.end === "max" || (i._endClamp && i.end > s),
            a = i._startClamp && i.start >= s;
          (o || a) &&
            i.setPositions(
              a ? s - 1 : i.start,
              o ? Math.max(a ? s : i.start + 1, s) : i.end,
              !0
            );
        }),
        hu(!1),
        (Lo = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        rt.forEach(function (i) {
          de(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        uu(Mo, 1),
        os.pause(),
        di++,
        (Ee = 2),
        Mr(2),
        tt.forEach(function (i) {
          return de(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (Ee = Q.isRefreshing = !1),
        hi("refresh");
    },
    $o = 0,
    ws = 1,
    Cn,
    Mr = function (t) {
      if (t === 2 || (!Ee && !us)) {
        (Q.isUpdating = !0), Cn && Cn.update(0);
        var e = tt.length,
          r = he(),
          i = r - Io >= 50,
          s = e && tt[0].scroll();
        if (
          ((ws = $o > s ? -1 : 1),
          Ee || ($o = s),
          i &&
            (rr && !ls && r - rr > 200 && ((rr = 0), hi("scrollEnd")),
            (mn = Io),
            (Io = r)),
          ws < 0)
        ) {
          for (Se = e; Se-- > 0; ) tt[Se] && tt[Se].update(0, i);
          ws = 1;
        } else for (Se = 0; Se < e; Se++) tt[Se] && tt[Se].update(0, i);
        Q.isUpdating = !1;
      }
      En = 0;
    },
    Yo = [
      eu,
      ru,
      Bo,
      Fo,
      ir + An,
      ir + xn,
      ir + Sn,
      ir + Tn,
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
    bs = Yo.concat([
      ui,
      ci,
      "boxSizing",
      "max" + Bi,
      "max" + Wo,
      "position",
      ir,
      qt,
      qt + Sn,
      qt + xn,
      qt + An,
      qt + Tn,
    ]),
    jf = function (t, e, r) {
      qi(r);
      var i = t._gsap;
      if (i.spacerIsNative) qi(i.spacerState);
      else if (t._gsap.swappedIn) {
        var s = e.parentNode;
        s && (s.insertBefore(t, e), s.removeChild(e));
      }
      t._gsap.swappedIn = !1;
    },
    Uo = function (t, e, r, i) {
      if (!t._gsap.swappedIn) {
        for (var s = Yo.length, o = e.style, a = t.style, l; s--; )
          (l = Yo[s]), (o[l] = r[l]);
        (o.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (o.display = "inline-block"),
          (a[Bo] = a[Fo] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[ui] = hs(t, Te) + Vt),
          (o[ci] = hs(t, Xt) + Vt),
          (o[qt] = a[ir] = a[ru] = a[eu] = "0"),
          qi(i),
          (a[ui] = a["max" + Bi] = r[ui]),
          (a[ci] = a["max" + Wo] = r[ci]),
          (a[qt] = r[qt]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Gf = /([A-Z])/g,
    qi = function (t) {
      if (t) {
        var e = t.t.style,
          r = t.length,
          i = 0,
          s,
          o;
        for ((t.t._gsap || I.core.getCache(t.t)).uncache = 1; i < r; i += 2)
          (o = t[i + 1]),
            (s = t[i]),
            o
              ? (e[s] = o)
              : e[s] && e.removeProperty(s.replace(Gf, "-$1").toLowerCase());
      }
    },
    xs = function (t) {
      for (var e = bs.length, r = t.style, i = [], s = 0; s < e; s++)
        i.push(bs[s], r[bs[s]]);
      return (i.t = t), i;
    },
    Kf = function (t, e, r) {
      for (var i = [], s = t.length, o = r ? 8 : 0, a; o < s; o += 2)
        (a = t[o]), i.push(a, a in e ? e[a] : t[o + 1]);
      return (i.t = t.t), i;
    },
    Ts = { left: 0, top: 0 },
    du = function (t, e, r, i, s, o, a, l, u, c, p, g, f, _) {
      de(t) && (t = t(l)),
        Ye(t) &&
          t.substr(0, 3) === "max" &&
          (t = g + (t.charAt(4) === "=" ? ms("0" + t.substr(3), r) : 0));
      var d = f ? f.time() : 0,
        m,
        b,
        w;
      if ((f && f.seek(0), isNaN(t) || (t = +t), wn(t)))
        f &&
          (t = I.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            g,
            t
          )),
          a && ys(a, r, i, !0);
      else {
        de(e) && (e = e(l));
        var S = (t || "0").split(" "),
          h,
          v,
          y,
          T;
        (w = Re(e, l) || ft),
          (h = Dr(w) || {}),
          (!h || (!h.left && !h.top)) &&
            nr(w).display === "none" &&
            ((T = w.style.display),
            (w.style.display = "block"),
            (h = Dr(w)),
            T ? (w.style.display = T) : w.style.removeProperty("display")),
          (v = ms(S[0], h[i.d])),
          (y = ms(S[1] || "0", r)),
          (t = h[i.p] - u[i.p] - c + v + s - y),
          a && ys(a, y, i, r - y < 20 || (a._isStart && y > 20)),
          (r -= r - y);
      }
      if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
        var A = t + r,
          E = o._isStart;
        (m = "scroll" + i.d2),
          ys(
            o,
            A,
            i,
            (E && A > 20) ||
              (!E && (p ? Math.max(ft[m], $e[m]) : o.parentNode[m]) <= A + 1)
          ),
          p &&
            ((u = Dr(a)),
            p && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Vt));
      }
      return (
        f &&
          w &&
          ((m = Dr(w)),
          f.seek(g),
          (b = Dr(w)),
          (f._caScrollDist = m[i.p] - b[i.p]),
          (t = (t / f._caScrollDist) * g)),
        f && f.seek(d),
        f ? t : Math.round(t)
      );
    },
    Zf = /(webkit|moz|length|cssText|inset)/i,
    pu = function (t, e, r, i) {
      if (t.parentNode !== e) {
        var s = t.style,
          o,
          a;
        if (e === ft) {
          (t._stOrig = s.cssText), (a = nr(t));
          for (o in a)
            !+o &&
              !Zf.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = r), (s.left = i);
        } else s.cssText = t._stOrig;
        (I.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    gu = function (t, e, r) {
      var i = e,
        s = i;
      return function (o) {
        var a = Math.round(t());
        return (
          a !== i &&
            a !== s &&
            Math.abs(a - i) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), r && r()),
          (s = i),
          (i = Math.round(o)),
          i
        );
      };
    },
    Ss = function (t, e, r) {
      var i = {};
      (i[e.p] = "+=" + r), I.set(t, i);
    },
    _u = function (t, e) {
      var r = $r(t, e),
        i = "_scroll" + e.p2,
        s = function o(a, l, u, c, p) {
          var g = o.tween,
            f = l.onComplete,
            _ = {};
          u = u || r();
          var d = gu(r, u, function () {
            g.kill(), (o.tween = 0);
          });
          return (
            (p = (c && p) || 0),
            (c = c || a - u),
            g && g.kill(),
            (l[i] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[i] = function () {
              return d(u + c * g.ratio + p * g.ratio * g.ratio);
            }),
            (l.onUpdate = function () {
              rt.cache++, o.tween && Mr();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(g);
            }),
            (g = o.tween = I.to(t, l)),
            g
          );
        };
      return (
        (t[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Zt(t, "wheel", r.wheelHandler),
        Q.isTouch && Zt(t, "touchmove", r.wheelHandler),
        s
      );
    },
    Q = (function () {
      function n(e, r) {
        Ni ||
          n.register(I) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Do(this),
          this.init(e, r);
      }
      var t = n.prototype;
      return (
        (t.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !vn)
          ) {
            this.update = this.refresh = this.kill = yr;
            return;
          }
          r = iu(Ye(r) || wn(r) || r.nodeType ? { trigger: r } : r, gs);
          var s = r,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            p = s.scrub,
            g = s.trigger,
            f = s.pin,
            _ = s.pinSpacing,
            d = s.invalidateOnRefresh,
            m = s.anticipatePin,
            b = s.onScrubComplete,
            w = s.onSnapComplete,
            S = s.once,
            h = s.snap,
            v = s.pinReparent,
            y = s.pinSpacer,
            T = s.containerAnimation,
            A = s.fastScrollEnd,
            E = s.preventOverlaps,
            C =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? Te
                : Xt,
            L = !p && p !== 0,
            k = Re(r.scroller || it),
            D = I.core.getCache(k),
            F = ai(k),
            B =
              ("pinType" in r
                ? r.pinType
                : Vr(k, "pinType") || (F && "fixed")) === "fixed",
            z = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            M = L && r.toggleActions.split(" "),
            W = "markers" in r ? r.markers : gs.markers,
            X = F ? 0 : parseFloat(nr(k)["border" + C.p2 + Bi]) || 0,
            x = this,
            G =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(x);
              },
            st = qf(k, F, C),
            gt = Hf(k, F),
            at = 0,
            ht = 0,
            wt = 0,
            _t = $r(k, C),
            Tt,
            Ct,
            oe,
            Rt,
            $t,
            et,
            bt,
            Yt,
            Ut,
            O,
            Jt,
            Ie,
            te,
            ut,
            Oe,
            pe,
            Ge,
            Pt,
            Ke,
            xt,
            ge,
            ze,
            cr,
            vi,
            Lt,
            Gi,
            P,
            N,
            V,
            nt,
            J,
            $,
            Ht,
            ee,
            Fe,
            jt,
            fr,
            hr,
            _e;
          if (
            ((x._startClamp = x._endClamp = !1),
            (x._dir = C),
            (m *= 45),
            (x.scroller = k),
            (x.scroll = T ? T.time.bind(T) : _t),
            (Rt = _t()),
            (x.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((Xl = 1), r.refreshPriority === -9999 && (Cn = x)),
            (D.tweenScroll = D.tweenScroll || {
              top: _u(k, Xt),
              left: _u(k, Te),
            }),
            (x.tweenTo = Tt = D.tweenScroll[C.p]),
            (x.scrubDuration = function (R) {
              (Ht = wn(R) && R),
                Ht
                  ? $
                    ? $.duration(R)
                    : ($ = I.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Ht,
                        paused: !0,
                        onComplete: function () {
                          return b && b(x);
                        },
                      }))
                  : ($ && $.progress(1).kill(), ($ = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !x.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (x.animation = i.pause()),
              (i.scrollTrigger = x),
              x.scrubDuration(p),
              (nt = 0),
              l || (l = i.vars.id)),
            h &&
              ((!li(h) || h.push) && (h = { snapTo: h }),
              "scrollBehavior" in ft.style &&
                I.set(F ? [ft, $e] : k, { scrollBehavior: "auto" }),
              rt.forEach(function (R) {
                return (
                  de(R) &&
                  R.target === (F ? yt.scrollingElement || $e : k) &&
                  (R.smooth = !1)
                );
              }),
              (oe = de(h.snapTo)
                ? h.snapTo
                : h.snapTo === "labels"
                ? Vf(i)
                : h.snapTo === "labelsDirectional"
                ? $f(i)
                : h.directional !== !1
                ? function (R, K) {
                    return qo(h.snapTo)(R, he() - ht < 500 ? 0 : K.direction);
                  }
                : I.utils.snap(h.snapTo)),
              (ee = h.duration || { min: 0.1, max: 2 }),
              (ee = li(ee) ? _n(ee.min, ee.max) : _n(ee, ee)),
              (Fe = I.delayedCall(h.delay || Ht / 2 || 0.1, function () {
                var R = _t(),
                  K = he() - ht < 500,
                  Y = Tt.tween;
                if (
                  (K || Math.abs(x.getVelocity()) < 10) &&
                  !Y &&
                  !ls &&
                  at !== R
                ) {
                  var Z = (R - et) / ut,
                    re = i && !L ? i.totalProgress() : Z,
                    lt = K ? 0 : ((re - J) / (he() - mn)) * 1e3 || 0,
                    Ft = I.utils.clamp(-Z, 1 - Z, (Fi(lt / 2) * lt) / 0.185),
                    me = Z + (h.inertia === !1 ? 0 : Ft),
                    Nt,
                    At,
                    mt = h,
                    dr = mt.onStart,
                    kt = mt.onInterrupt,
                    Ze = mt.onComplete;
                  if (
                    ((Nt = oe(me, x)),
                    wn(Nt) || (Nt = me),
                    (At = Math.max(0, Math.round(et + Nt * ut))),
                    R <= bt && R >= et && At !== R)
                  ) {
                    if (Y && !Y._initted && Y.data <= Fi(At - R)) return;
                    h.inertia === !1 && (Ft = Nt - Z),
                      Tt(
                        At,
                        {
                          duration: ee(
                            Fi(
                              (Math.max(Fi(me - re), Fi(Nt - re)) * 0.185) /
                                lt /
                                0.05 || 0
                            )
                          ),
                          ease: h.ease || "power3",
                          data: Fi(At - R),
                          onInterrupt: function () {
                            return Fe.restart(!0) && kt && kt(x);
                          },
                          onComplete: function () {
                            x.update(),
                              (at = _t()),
                              i &&
                                !L &&
                                ($
                                  ? $.resetTo(
                                      "totalProgress",
                                      Nt,
                                      i._tTime / i._tDur
                                    )
                                  : i.progress(Nt)),
                              (nt = J =
                                i && !L ? i.totalProgress() : x.progress),
                              w && w(x),
                              Ze && Ze(x);
                          },
                        },
                        R,
                        Ft * ut,
                        At - R - Ft * ut
                      ),
                      dr && dr(x, Tt.tween);
                  }
                } else x.isActive && at !== R && Fe.restart(!0);
              }).pause())),
            l && (Ho[l] = x),
            (g = x.trigger = Re(g || (f !== !0 && f))),
            (_e = g && g._gsap && g._gsap.stRevert),
            _e && (_e = _e(x)),
            (f = f === !0 ? g : Re(f)),
            Ye(a) && (a = { targets: g, className: a }),
            f &&
              (_ === !1 ||
                _ === ir ||
                (_ =
                  !_ &&
                  f.parentNode &&
                  f.parentNode.style &&
                  nr(f.parentNode).display === "flex"
                    ? !1
                    : qt),
              (x.pin = f),
              (Ct = I.core.getCache(f)),
              Ct.spacer
                ? (Oe = Ct.pinState)
                : (y &&
                    ((y = Re(y)),
                    y && !y.nodeType && (y = y.current || y.nativeElement),
                    (Ct.spacerIsNative = !!y),
                    y && (Ct.spacerState = xs(y))),
                  (Ct.spacer = Pt = y || yt.createElement("div")),
                  Pt.classList.add("pin-spacer"),
                  l && Pt.classList.add("pin-spacer-" + l),
                  (Ct.pinState = Oe = xs(f))),
              r.force3D !== !1 && I.set(f, { force3D: !0 }),
              (x.spacer = Pt = Ct.spacer),
              (V = nr(f)),
              (vi = V[_ + C.os2]),
              (xt = I.getProperty(f)),
              (ge = I.quickSetter(f, C.a, Vt)),
              Uo(f, Pt, V),
              (Ge = xs(f))),
            W)
          ) {
            (Ie = li(W) ? iu(W, su) : su),
              (O = vs("scroller-start", l, k, C, Ie, 0)),
              (Jt = vs("scroller-end", l, k, C, Ie, 0, O)),
              (Ke = O["offset" + C.op.d2]);
            var yi = Re(Vr(k, "content") || k);
            (Yt = this.markerStart = vs("start", l, yi, C, Ie, Ke, 0, T)),
              (Ut = this.markerEnd = vs("end", l, yi, C, Ie, Ke, 0, T)),
              T && (hr = I.quickSetter([Yt, Ut], C.a, Vt)),
              !B &&
                !(vr.length && Vr(k, "fixedMarkers") === !0) &&
                (Xf(F ? ft : k),
                I.set([O, Jt], { force3D: !0 }),
                (Gi = I.quickSetter(O, C.a, Vt)),
                (N = I.quickSetter(Jt, C.a, Vt)));
          }
          if (T) {
            var U = T.vars.onUpdate,
              H = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function () {
              x.update(0, 0, 1), U && U.apply(T, H || []);
            });
          }
          if (
            ((x.previous = function () {
              return tt[tt.indexOf(x) - 1];
            }),
            (x.next = function () {
              return tt[tt.indexOf(x) + 1];
            }),
            (x.revert = function (R, K) {
              if (!K) return x.kill(!0);
              var Y = R !== !1 || !x.enabled,
                Z = fe;
              Y !== x.isReverted &&
                (Y &&
                  ((jt = Math.max(_t(), x.scroll.rec || 0)),
                  (wt = x.progress),
                  (fr = i && i.progress())),
                Yt &&
                  [Yt, Ut, O, Jt].forEach(function (re) {
                    return (re.style.display = Y ? "none" : "block");
                  }),
                Y && ((fe = x), x.update(Y)),
                f &&
                  (!v || !x.isActive) &&
                  (Y ? jf(f, Pt, Oe) : Uo(f, Pt, nr(f), Lt)),
                Y || x.update(Y),
                (fe = Z),
                (x.isReverted = Y));
            }),
            (x.refresh = function (R, K, Y, Z) {
              if (!((fe || !x.enabled) && !K)) {
                if (f && R && rr) {
                  Zt(n, "scrollEnd", au);
                  return;
                }
                !Ee && G && G(x),
                  (fe = x),
                  Tt.tween && !Y && (Tt.tween.kill(), (Tt.tween = 0)),
                  $ && $.pause(),
                  d &&
                    i &&
                    (i.revert({ kill: !1 }).invalidate(),
                    i.getChildren &&
                      i.getChildren(!0, !0, !1).forEach(function (Gr) {
                        return Gr.vars.immediateRender && Gr.render(0, !0, !0);
                      })),
                  x.isReverted || x.revert(!0, !0),
                  (x._subPinOffset = !1);
                var re = st(),
                  lt = gt(),
                  Ft = T ? T.duration() : wr(k, C),
                  me = ut <= 0.01 || !ut,
                  Nt = 0,
                  At = Z || 0,
                  mt = li(Y) ? Y.end : r.end,
                  dr = r.endTrigger || g,
                  kt = li(Y)
                    ? Y.start
                    : r.start ||
                      (r.start === 0 || !g ? 0 : f ? "0 0" : "0 100%"),
                  Ze = (x.pinnedContainer =
                    r.pinnedContainer && Re(r.pinnedContainer, x)),
                  Sr = (g && Math.max(0, tt.indexOf(x))) || 0,
                  ae = Sr,
                  le,
                  ve,
                  wi,
                  Ls,
                  ye,
                  Gt,
                  Ar,
                  _a,
                  mc,
                  Wn,
                  Er,
                  qn,
                  Ns;
                for (
                  W &&
                  li(Y) &&
                  ((qn = I.getProperty(O, C.p)), (Ns = I.getProperty(Jt, C.p)));
                  ae-- > 0;

                )
                  (Gt = tt[ae]),
                    Gt.end || Gt.refresh(0, 1) || (fe = x),
                    (Ar = Gt.pin),
                    Ar &&
                      (Ar === g || Ar === f || Ar === Ze) &&
                      !Gt.isReverted &&
                      (Wn || (Wn = []), Wn.unshift(Gt), Gt.revert(!0, !0)),
                    Gt !== tt[ae] && (Sr--, ae--);
                for (
                  de(kt) && (kt = kt(x)),
                    kt = Ul(kt, "start", x),
                    et =
                      du(
                        kt,
                        g,
                        re,
                        C,
                        _t(),
                        Yt,
                        O,
                        x,
                        lt,
                        X,
                        B,
                        Ft,
                        T,
                        x._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    de(mt) && (mt = mt(x)),
                    Ye(mt) &&
                      !mt.indexOf("+=") &&
                      (~mt.indexOf(" ")
                        ? (mt = (Ye(kt) ? kt.split(" ")[0] : "") + mt)
                        : ((Nt = ms(mt.substr(2), re)),
                          (mt = Ye(kt)
                            ? kt
                            : (T
                                ? I.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    et
                                  )
                                : et) + Nt),
                          (dr = g))),
                    mt = Ul(mt, "end", x),
                    bt =
                      Math.max(
                        et,
                        du(
                          mt || (dr ? "100% 0" : Ft),
                          dr,
                          re,
                          C,
                          _t() + Nt,
                          Ut,
                          Jt,
                          x,
                          lt,
                          X,
                          B,
                          Ft,
                          T,
                          x._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Nt = 0,
                    ae = Sr;
                  ae--;

                )
                  (Gt = tt[ae]),
                    (Ar = Gt.pin),
                    Ar &&
                      Gt.start - Gt._pinPush <= et &&
                      !T &&
                      Gt.end > 0 &&
                      ((le =
                        Gt.end -
                        (x._startClamp ? Math.max(0, Gt.start) : Gt.start)),
                      ((Ar === g && Gt.start - Gt._pinPush < et) ||
                        Ar === Ze) &&
                        isNaN(kt) &&
                        (Nt += le * (1 - Gt.progress)),
                      Ar === f && (At += le));
                if (
                  ((et += Nt),
                  (bt += Nt),
                  x._startClamp && (x._startClamp += Nt),
                  x._endClamp &&
                    !Ee &&
                    ((x._endClamp = bt || -0.001),
                    (bt = Math.min(bt, wr(k, C)))),
                  (ut = bt - et || ((et -= 0.01) && 0.001)),
                  me &&
                    (wt = I.utils.clamp(0, 1, I.utils.normalize(et, bt, jt))),
                  (x._pinPush = At),
                  Yt &&
                    Nt &&
                    ((le = {}),
                    (le[C.a] = "+=" + Nt),
                    Ze && (le[C.p] = "-=" + _t()),
                    I.set([Yt, Ut], le)),
                  f && !(Lo && x.end >= wr(k, C)))
                )
                  (le = nr(f)),
                    (Ls = C === Xt),
                    (wi = _t()),
                    (ze = parseFloat(xt(C.a)) + At),
                    !Ft &&
                      bt > 1 &&
                      ((Er = (F ? yt.scrollingElement || $e : k).style),
                      (Er = {
                        style: Er,
                        value: Er["overflow" + C.a.toUpperCase()],
                      }),
                      F &&
                        nr(ft)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                        (Er.style["overflow" + C.a.toUpperCase()] = "scroll")),
                    Uo(f, Pt, le),
                    (Ge = xs(f)),
                    (ve = Dr(f, !0)),
                    (_a = B && $r(k, Ls ? Te : Xt)()),
                    _
                      ? ((Lt = [_ + C.os2, ut + At + Vt]),
                        (Lt.t = Pt),
                        (ae = _ === qt ? hs(f, C) + ut + At : 0),
                        ae &&
                          (Lt.push(C.d, ae + Vt),
                          Pt.style.flexBasis !== "auto" &&
                            (Pt.style.flexBasis = ae + Vt)),
                        qi(Lt),
                        Ze &&
                          tt.forEach(function (Gr) {
                            Gr.pin === Ze &&
                              Gr.vars.pinSpacing !== !1 &&
                              (Gr._subPinOffset = !0);
                          }),
                        B && _t(jt))
                      : ((ae = hs(f, C)),
                        ae &&
                          Pt.style.flexBasis !== "auto" &&
                          (Pt.style.flexBasis = ae + Vt)),
                    B &&
                      ((ye = {
                        top: ve.top + (Ls ? wi - et : _a) + Vt,
                        left: ve.left + (Ls ? _a : wi - et) + Vt,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (ye[ui] = ye["max" + Bi] = Math.ceil(ve.width) + Vt),
                      (ye[ci] = ye["max" + Wo] = Math.ceil(ve.height) + Vt),
                      (ye[ir] =
                        ye[ir + Sn] =
                        ye[ir + xn] =
                        ye[ir + An] =
                        ye[ir + Tn] =
                          "0"),
                      (ye[qt] = le[qt]),
                      (ye[qt + Sn] = le[qt + Sn]),
                      (ye[qt + xn] = le[qt + xn]),
                      (ye[qt + An] = le[qt + An]),
                      (ye[qt + Tn] = le[qt + Tn]),
                      (pe = Kf(Oe, ye, v)),
                      Ee && _t(0)),
                    i
                      ? ((mc = i._initted),
                        Po(1),
                        i.render(i.duration(), !0, !0),
                        (cr = xt(C.a) - ze + ut + At),
                        (P = Math.abs(ut - cr) > 1),
                        B && P && pe.splice(pe.length - 2, 2),
                        i.render(0, !0, !0),
                        mc || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        Po(0))
                      : (cr = ut),
                    Er &&
                      (Er.value
                        ? (Er.style["overflow" + C.a.toUpperCase()] = Er.value)
                        : Er.style.removeProperty("overflow-" + C.a));
                else if (g && _t() && !T)
                  for (ve = g.parentNode; ve && ve !== ft; )
                    ve._pinOffset &&
                      ((et -= ve._pinOffset), (bt -= ve._pinOffset)),
                      (ve = ve.parentNode);
                Wn &&
                  Wn.forEach(function (Gr) {
                    return Gr.revert(!1, !0);
                  }),
                  (x.start = et),
                  (x.end = bt),
                  (Rt = $t = Ee ? jt : _t()),
                  !T && !Ee && (Rt < jt && _t(jt), (x.scroll.rec = 0)),
                  x.revert(!1, !0),
                  (ht = he()),
                  Fe && ((at = -1), Fe.restart(!0)),
                  (fe = 0),
                  i &&
                    L &&
                    (i._initted || fr) &&
                    i.progress() !== fr &&
                    i.progress(fr || 0, !0).render(i.time(), !0, !0),
                  (me || wt !== x.progress || T || d || (i && !i._initted)) &&
                    (i &&
                      !L &&
                      (i._initted || wt || i.vars.immediateRender !== !1) &&
                      i.totalProgress(
                        T && et < -0.001 && !wt
                          ? I.utils.normalize(et, bt, 0)
                          : wt,
                        !0
                      ),
                    (x.progress = me || (Rt - et) / ut === wt ? 0 : wt)),
                  f && _ && (Pt._pinOffset = Math.round(x.progress * cr)),
                  $ && $.invalidate(),
                  isNaN(qn) ||
                    ((qn -= I.getProperty(O, C.p)),
                    (Ns -= I.getProperty(Jt, C.p)),
                    Ss(O, C, qn),
                    Ss(Yt, C, qn - (Z || 0)),
                    Ss(Jt, C, Ns),
                    Ss(Ut, C, Ns - (Z || 0))),
                  me && !Ee && x.update(),
                  c && !Ee && !te && ((te = !0), c(x), (te = !1));
              }
            }),
            (x.getVelocity = function () {
              return ((_t() - $t) / (he() - mn)) * 1e3 || 0;
            }),
            (x.endAnimation = function () {
              bn(x.callbackAnimation),
                i &&
                  ($
                    ? $.progress(1)
                    : i.paused()
                    ? L || bn(i, x.direction < 0, 1)
                    : bn(i, i.reversed()));
            }),
            (x.labelToScroll = function (R) {
              return (
                (i &&
                  i.labels &&
                  (et || x.refresh() || et) +
                    (i.labels[R] / i.duration()) * ut) ||
                0
              );
            }),
            (x.getTrailing = function (R) {
              var K = tt.indexOf(x),
                Y =
                  x.direction > 0 ? tt.slice(0, K).reverse() : tt.slice(K + 1);
              return (
                Ye(R)
                  ? Y.filter(function (Z) {
                      return Z.vars.preventOverlaps === R;
                    })
                  : Y
              ).filter(function (Z) {
                return x.direction > 0 ? Z.end <= et : Z.start >= bt;
              });
            }),
            (x.update = function (R, K, Y) {
              if (!(T && !Y && !R)) {
                var Z = Ee === !0 ? jt : x.scroll(),
                  re = R ? 0 : (Z - et) / ut,
                  lt = re < 0 ? 0 : re > 1 ? 1 : re || 0,
                  Ft = x.progress,
                  me,
                  Nt,
                  At,
                  mt,
                  dr,
                  kt,
                  Ze,
                  Sr;
                if (
                  (K &&
                    (($t = Rt),
                    (Rt = T ? _t() : Z),
                    h && ((J = nt), (nt = i && !L ? i.totalProgress() : lt))),
                  m &&
                    f &&
                    !fe &&
                    !cs &&
                    rr &&
                    (!lt && et < Z + ((Z - $t) / (he() - mn)) * m
                      ? (lt = 1e-4)
                      : lt === 1 &&
                        bt > Z + ((Z - $t) / (he() - mn)) * m &&
                        (lt = 0.9999)),
                  lt !== Ft && x.enabled)
                ) {
                  if (
                    ((me = x.isActive = !!lt && lt < 1),
                    (Nt = !!Ft && Ft < 1),
                    (kt = me !== Nt),
                    (dr = kt || !!lt != !!Ft),
                    (x.direction = lt > Ft ? 1 : -1),
                    (x.progress = lt),
                    dr &&
                      !fe &&
                      ((At = lt && !Ft ? 0 : lt === 1 ? 1 : Ft === 1 ? 2 : 3),
                      L &&
                        ((mt =
                          (!kt && M[At + 1] !== "none" && M[At + 1]) || M[At]),
                        (Sr =
                          i &&
                          (mt === "complete" || mt === "reset" || mt in i)))),
                    E &&
                      (kt || Sr) &&
                      (Sr || p || !i) &&
                      (de(E)
                        ? E(x)
                        : x.getTrailing(E).forEach(function (wi) {
                            return wi.endAnimation();
                          })),
                    L ||
                      ($ && !fe && !cs
                        ? ($._dp._time - $._start !== $._time &&
                            $.render($._dp._time - $._start),
                          $.resetTo
                            ? $.resetTo("totalProgress", lt, i._tTime / i._tDur)
                            : (($.vars.totalProgress = lt),
                              $.invalidate().restart()))
                        : i && i.totalProgress(lt, !!(fe && (ht || R)))),
                    f)
                  ) {
                    if ((R && _ && (Pt.style[_ + C.os2] = vi), !B))
                      ge(yn(ze + cr * lt));
                    else if (dr) {
                      if (
                        ((Ze =
                          !R && lt > Ft && bt + 1 > Z && Z + 1 >= wr(k, C)),
                        v)
                      )
                        if (!R && (me || Ze)) {
                          var ae = Dr(f, !0),
                            le = Z - et;
                          pu(
                            f,
                            ft,
                            ae.top + (C === Xt ? le : 0) + Vt,
                            ae.left + (C === Xt ? 0 : le) + Vt
                          );
                        } else pu(f, Pt);
                      qi(me || Ze ? pe : Ge),
                        (P && lt < 1 && me) ||
                          ge(ze + (lt === 1 && !Ze ? cr : 0));
                    }
                  }
                  h && !Tt.tween && !fe && !cs && Fe.restart(!0),
                    a &&
                      (kt || (S && lt && (lt < 1 || !No))) &&
                      gn(a.targets).forEach(function (wi) {
                        return wi.classList[me || S ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !L && !R && o(x),
                    dr && !fe
                      ? (L &&
                          (Sr &&
                            (mt === "complete"
                              ? i.pause().totalProgress(1)
                              : mt === "reset"
                              ? i.restart(!0).pause()
                              : mt === "restart"
                              ? i.restart(!0)
                              : i[mt]()),
                          o && o(x)),
                        (kt || !No) &&
                          (u && kt && zo(x, u),
                          z[At] && zo(x, z[At]),
                          S && (lt === 1 ? x.kill(!1, 1) : (z[At] = 0)),
                          kt ||
                            ((At = lt === 1 ? 1 : 3), z[At] && zo(x, z[At]))),
                        A &&
                          !me &&
                          Math.abs(x.getVelocity()) > (wn(A) ? A : 2500) &&
                          (bn(x.callbackAnimation),
                          $
                            ? $.progress(1)
                            : bn(i, mt === "reverse" ? 1 : !lt, 1)))
                      : L && o && !fe && o(x);
                }
                if (N) {
                  var ve = T ? (Z / T.duration()) * (T._caScrollDist || 0) : Z;
                  Gi(ve + (O._isFlipped ? 1 : 0)), N(ve);
                }
                hr && hr((-Z / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (x.enable = function (R, K) {
              x.enabled ||
                ((x.enabled = !0),
                Zt(k, "resize", On),
                F || Zt(k, "scroll", Wi),
                G && Zt(n, "refreshInit", G),
                R !== !1 && ((x.progress = wt = 0), (Rt = $t = at = _t())),
                K !== !1 && x.refresh());
            }),
            (x.getTween = function (R) {
              return R && Tt ? Tt.tween : $;
            }),
            (x.setPositions = function (R, K, Y, Z) {
              if (T) {
                var re = T.scrollTrigger,
                  lt = T.duration(),
                  Ft = re.end - re.start;
                (R = re.start + (Ft * R) / lt), (K = re.start + (Ft * K) / lt);
              }
              x.refresh(
                !1,
                !1,
                {
                  start: jl(R, Y && !!x._startClamp),
                  end: jl(K, Y && !!x._endClamp),
                },
                Z
              ),
                x.update();
            }),
            (x.adjustPinSpacing = function (R) {
              if (Lt && R) {
                var K = Lt.indexOf(C.d) + 1;
                (Lt[K] = parseFloat(Lt[K]) + R + Vt),
                  (Lt[1] = parseFloat(Lt[1]) + R + Vt),
                  qi(Lt);
              }
            }),
            (x.disable = function (R, K) {
              if (
                x.enabled &&
                (R !== !1 && x.revert(!0, !0),
                (x.enabled = x.isActive = !1),
                K || ($ && $.pause()),
                (jt = 0),
                Ct && (Ct.uncache = 1),
                G && Qt(n, "refreshInit", G),
                Fe &&
                  (Fe.pause(), Tt.tween && Tt.tween.kill() && (Tt.tween = 0)),
                !F)
              ) {
                for (var Y = tt.length; Y--; )
                  if (tt[Y].scroller === k && tt[Y] !== x) return;
                Qt(k, "resize", On), F || Qt(k, "scroll", Wi);
              }
            }),
            (x.kill = function (R, K) {
              x.disable(R, K), $ && !K && $.kill(), l && delete Ho[l];
              var Y = tt.indexOf(x);
              Y >= 0 && tt.splice(Y, 1),
                Y === Se && ws > 0 && Se--,
                (Y = 0),
                tt.forEach(function (Z) {
                  return Z.scroller === x.scroller && (Y = 1);
                }),
                Y || Ee || (x.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  R && i.revert({ kill: !1 }),
                  K || i.kill()),
                Yt &&
                  [Yt, Ut, O, Jt].forEach(function (Z) {
                    return Z.parentNode && Z.parentNode.removeChild(Z);
                  }),
                Cn === x && (Cn = 0),
                f &&
                  (Ct && (Ct.uncache = 1),
                  (Y = 0),
                  tt.forEach(function (Z) {
                    return Z.pin === f && Y++;
                  }),
                  Y || (Ct.spacer = 0)),
                r.onKill && r.onKill(x);
            }),
            tt.push(x),
            x.enable(!1, !1),
            _e && _e(x),
            i && i.add && !ut)
          ) {
            var ct = x.update;
            (x.update = function () {
              (x.update = ct), rt.cache++, et || bt || x.refresh();
            }),
              I.delayedCall(0.01, x.update),
              (ut = 0.01),
              (et = bt = 0);
          } else x.refresh();
          f && Uf();
        }),
        (n.register = function (r) {
          return (
            Ni ||
              ((I = r || Ql()),
              Zl() && window.document && n.enable(),
              (Ni = vn)),
            Ni
          );
        }),
        (n.defaults = function (r) {
          if (r) for (var i in r) gs[i] = r[i];
          return gs;
        }),
        (n.disable = function (r, i) {
          (vn = 0),
            tt.forEach(function (o) {
              return o[i ? "kill" : "disable"](r);
            }),
            Qt(it, "wheel", Wi),
            Qt(yt, "scroll", Wi),
            clearInterval(as),
            Qt(yt, "touchcancel", yr),
            Qt(ft, "touchstart", yr),
            ds(Qt, yt, "pointerdown,touchstart,mousedown", Gl),
            ds(Qt, yt, "pointerup,touchend,mouseup", Kl),
            os.kill(),
            fs(Qt);
          for (var s = 0; s < rt.length; s += 3)
            ps(Qt, rt[s], rt[s + 1]), ps(Qt, rt[s], rt[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((it = window),
            (yt = document),
            ($e = yt.documentElement),
            (ft = yt.body),
            I &&
              ((gn = I.utils.toArray),
              (_n = I.utils.clamp),
              (Do = I.core.context || yr),
              (Po = I.core.suppressOverwrites || yr),
              (Mo = it.history.scrollRestoration || "auto"),
              ($o = it.pageYOffset || 0),
              I.core.globals("ScrollTrigger", n),
              ft))
          ) {
            (vn = 1),
              (zi = document.createElement("div")),
              (zi.style.height = "100vh"),
              (zi.style.position = "absolute"),
              fu(),
              Wf(),
              zt.register(I),
              (n.isTouch = zt.isTouch),
              (Yr =
                zt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (ko = zt.isTouch === 1),
              Zt(it, "wheel", Wi),
              (Oo = [it, yt, $e, ft]),
              I.matchMedia
                ? ((n.matchMedia = function (u) {
                    var c = I.matchMedia(),
                      p;
                    for (p in u) c.add(p, u[p]);
                    return c;
                  }),
                  I.addEventListener("matchMediaInit", function () {
                    return Vo();
                  }),
                  I.addEventListener("matchMediaRevert", function () {
                    return lu();
                  }),
                  I.addEventListener("matchMedia", function () {
                    pi(0, 1), hi("matchMedia");
                  }),
                  I.matchMedia().add("(orientation: portrait)", function () {
                    return Xo(), Xo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Xo(),
              Zt(yt, "scroll", Wi);
            var r = ft.hasAttribute("style"),
              i = ft.style,
              s = i.borderTopStyle,
              o = I.core.Animation.prototype,
              a,
              l;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                a = Dr(ft),
                Xt.m = Math.round(a.top + Xt.sc()) || 0,
                Te.m = Math.round(a.left + Te.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (ft.setAttribute("style", ""), ft.removeAttribute("style")),
                as = setInterval(ou, 250),
                I.delayedCall(0.5, function () {
                  return (cs = 0);
                }),
                Zt(yt, "touchcancel", yr),
                Zt(ft, "touchstart", yr),
                ds(Zt, yt, "pointerdown,touchstart,mousedown", Gl),
                ds(Zt, yt, "pointerup,touchend,mouseup", Kl),
                Co = I.utils.checkPrefix("transform"),
                bs.push(Co),
                Ni = he(),
                os = I.delayedCall(0.2, pi).pause(),
                Ii = [
                  yt,
                  "visibilitychange",
                  function () {
                    var u = it.innerWidth,
                      c = it.innerHeight;
                    yt.hidden
                      ? ((ql = u), (Hl = c))
                      : (ql !== u || Hl !== c) && On();
                  },
                  yt,
                  "DOMContentLoaded",
                  pi,
                  it,
                  "load",
                  pi,
                  it,
                  "resize",
                  On,
                ],
                fs(Zt),
                tt.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < rt.length;
              l += 3
            )
              ps(Qt, rt[l], rt[l + 1]), ps(Qt, rt[l], rt[l + 2]);
          }
        }),
        (n.config = function (r) {
          "limitCallbacks" in r && (No = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(as)) || ((as = i) && setInterval(ou, i)),
            "ignoreMobileResize" in r &&
              (ko = n.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (fs(Qt) || fs(Zt, r.autoRefreshEvents || "none"),
              (Vl = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (r, i) {
          var s = Re(r),
            o = rt.indexOf(s),
            a = ai(s);
          ~o && rt.splice(o, a ? 6 : 2),
            i && (a ? vr.unshift(it, i, ft, i, $e, i) : vr.unshift(s, i));
        }),
        (n.clearMatchMedia = function (r) {
          tt.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (r, i, s) {
          var o = (Ye(r) ? Re(r) : r).getBoundingClientRect(),
            a = o[s ? ui : ci] * i || 0;
          return s
            ? o.right - a > 0 && o.left + a < it.innerWidth
            : o.bottom - a > 0 && o.top + a < it.innerHeight;
        }),
        (n.positionInViewport = function (r, i, s) {
          Ye(r) && (r = Re(r));
          var o = r.getBoundingClientRect(),
            a = o[s ? ui : ci],
            l =
              i == null
                ? a / 2
                : i in _s
                ? _s[i] * a
                : ~i.indexOf("%")
                ? (parseFloat(i) * a) / 100
                : parseFloat(i) || 0;
          return s
            ? (o.left + l) / it.innerWidth
            : (o.top + l) / it.innerHeight;
        }),
        (n.killAll = function (r) {
          if (
            (tt.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            r !== !0)
          ) {
            var i = fi.killAll || [];
            (fi = {}),
              i.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (Q.version = "3.13.0"),
    (Q.saveStyles = function (n) {
      return n
        ? gn(n).forEach(function (t) {
            if (t && t.style) {
              var e = Ue.indexOf(t);
              e >= 0 && Ue.splice(e, 5),
                Ue.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  I.core.getCache(t),
                  Do()
                );
            }
          })
        : Ue;
    }),
    (Q.revert = function (n, t) {
      return Vo(!n, t);
    }),
    (Q.create = function (n, t) {
      return new Q(n, t);
    }),
    (Q.refresh = function (n) {
      return n ? On(!0) : (Ni || Q.register()) && pi(!0);
    }),
    (Q.update = function (n) {
      return ++rt.cache && Mr(n === !0 ? 2 : 0);
    }),
    (Q.clearScrollMemory = uu),
    (Q.maxScroll = function (n, t) {
      return wr(n, t ? Te : Xt);
    }),
    (Q.getScrollFunc = function (n, t) {
      return $r(Re(n), t ? Te : Xt);
    }),
    (Q.getById = function (n) {
      return Ho[n];
    }),
    (Q.getAll = function () {
      return tt.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (Q.isScrolling = function () {
      return !!rr;
    }),
    (Q.snapDirectional = qo),
    (Q.addEventListener = function (n, t) {
      var e = fi[n] || (fi[n] = []);
      ~e.indexOf(t) || e.push(t);
    }),
    (Q.removeEventListener = function (n, t) {
      var e = fi[n],
        r = e && e.indexOf(t);
      r >= 0 && e.splice(r, 1);
    }),
    (Q.batch = function (n, t) {
      var e = [],
        r = {},
        i = t.interval || 0.016,
        s = t.batchMax || 1e9,
        o = function (u, c) {
          var p = [],
            g = [],
            f = I.delayedCall(i, function () {
              c(p, g), (p = []), (g = []);
            }).pause();
          return function (_) {
            p.length || f.restart(!0),
              p.push(_.trigger),
              g.push(_),
              s <= p.length && f.progress(1);
          };
        },
        a;
      for (a in t)
        r[a] =
          a.substr(0, 2) === "on" && de(t[a]) && a !== "onRefreshInit"
            ? o(a, t[a])
            : t[a];
      return (
        de(s) &&
          ((s = s()),
          Zt(Q, "refresh", function () {
            return (s = t.batchMax());
          })),
        gn(n).forEach(function (l) {
          var u = {};
          for (a in r) u[a] = r[a];
          (u.trigger = l), e.push(Q.create(u));
        }),
        e
      );
    });
  var mu = function (t, e, r, i) {
      return (
        e > i ? t(i) : e < 0 && t(0),
        r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
      );
    },
    jo = function n(t, e) {
      e === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            e === !0
              ? "auto"
              : e
              ? "pan-" + e + (zt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === $e && n(ft, e);
    },
    As = { auto: 1, scroll: 1 },
    Qf = function (t) {
      var e = t.event,
        r = t.target,
        i = t.axis,
        s = (e.changedTouches ? e.changedTouches[0] : e).target,
        o = s._gsap || I.core.getCache(s),
        a = he(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== ft &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(As[(l = nr(s)).overflowY] || As[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== r &&
          !ai(s) &&
          (As[(l = nr(s)).overflowY] || As[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || i === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
    },
    vu = function (t, e, r, i) {
      return zt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (i = i && Qf),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Zt(yt, zt.eventTypes[0], wu, !1, !0);
        },
        onDisable: function () {
          return Qt(yt, zt.eventTypes[0], wu, !0);
        },
      });
    },
    Jf = /(input|label|select|textarea)/i,
    yu,
    wu = function (t) {
      var e = Jf.test(t.target.tagName);
      (e || yu) && ((t._gsapAllow = !0), (yu = e));
    },
    th = function (t) {
      li(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e = t,
        r = e.normalizeScrollX,
        i = e.momentum,
        s = e.allowNestedScroll,
        o = e.onRelease,
        a,
        l,
        u = Re(t.target) || $e,
        c = I.core.globals().ScrollSmoother,
        p = c && c.get(),
        g =
          Yr &&
          ((t.content && Re(t.content)) ||
            (p && t.content !== !1 && !p.smooth() && p.content())),
        f = $r(u, Xt),
        _ = $r(u, Te),
        d = 1,
        m =
          (zt.isTouch && it.visualViewport
            ? it.visualViewport.scale * it.visualViewport.width
            : it.outerWidth) / it.innerWidth,
        b = 0,
        w = de(i)
          ? function () {
              return i(a);
            }
          : function () {
              return i || 2.8;
            },
        S,
        h,
        v = vu(u, t.type, !0, s),
        y = function () {
          return (h = !1);
        },
        T = yr,
        A = yr,
        E = function () {
          (l = wr(u, Xt)),
            (A = _n(Yr ? 1 : 0, l)),
            r && (T = _n(0, wr(u, Te))),
            (S = di);
        },
        C = function () {
          (g._gsap.y = yn(parseFloat(g._gsap.y) + f.offset) + "px"),
            (g.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(g._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        L = function () {
          if (h) {
            requestAnimationFrame(y);
            var W = yn(a.deltaY / 2),
              X = A(f.v - W);
            if (g && X !== f.v + f.offset) {
              f.offset = X - f.v;
              var x = yn((parseFloat(g && g._gsap.y) || 0) - f.offset);
              (g.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                x +
                ", 0, 1)"),
                (g._gsap.y = x + "px"),
                (f.cacheID = rt.cache),
                Mr();
            }
            return !0;
          }
          f.offset && C(), (h = !0);
        },
        k,
        D,
        F,
        B,
        z = function () {
          E(),
            k.isActive() &&
              k.vars.scrollY > l &&
              (f() > l ? k.progress(1) && f(l) : k.resetTo("scrollY", l));
        };
      return (
        g && I.set(g, { y: "+=0" }),
        (t.ignoreCheck = function (M) {
          return (
            (Yr && M.type === "touchmove" && L()) ||
            (d > 1.05 && M.type !== "touchstart") ||
            a.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          h = !1;
          var M = d;
          (d = yn(((it.visualViewport && it.visualViewport.scale) || 1) / m)),
            k.pause(),
            M !== d && jo(u, d > 1.01 ? !0 : r ? !1 : "x"),
            (D = _()),
            (F = f()),
            E(),
            (S = di);
        }),
        (t.onRelease = t.onGestureStart =
          function (M, W) {
            if ((f.offset && C(), !W)) B.restart(!0);
            else {
              rt.cache++;
              var X = w(),
                x,
                G;
              r &&
                ((x = _()),
                (G = x + (X * 0.05 * -M.velocityX) / 0.227),
                (X *= mu(_, x, G, wr(u, Te))),
                (k.vars.scrollX = T(G))),
                (x = f()),
                (G = x + (X * 0.05 * -M.velocityY) / 0.227),
                (X *= mu(f, x, G, wr(u, Xt))),
                (k.vars.scrollY = A(G)),
                k.invalidate().duration(X).play(0.01),
                ((Yr && k.vars.scrollY >= l) || x >= l - 1) &&
                  I.to({}, { onUpdate: z, duration: X });
            }
            o && o(M);
          }),
        (t.onWheel = function () {
          k._ts && k.pause(), he() - b > 1e3 && ((S = 0), (b = he()));
        }),
        (t.onChange = function (M, W, X, x, G) {
          if (
            (di !== S && E(),
            W && r && _(T(x[2] === W ? D + (M.startX - M.x) : _() + W - x[1])),
            X)
          ) {
            f.offset && C();
            var st = G[2] === X,
              gt = st ? F + M.startY - M.y : f() + X - G[1],
              at = A(gt);
            st && gt !== at && (F += at - gt), f(at);
          }
          (X || W) && Mr();
        }),
        (t.onEnable = function () {
          jo(u, r ? !1 : "x"),
            Q.addEventListener("refresh", z),
            Zt(it, "resize", z),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = _.smooth = !1)),
            v.enable();
        }),
        (t.onDisable = function () {
          jo(u, !0),
            Qt(it, "resize", z),
            Q.removeEventListener("refresh", z),
            v.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (a = new zt(t)),
        (a.iOS = Yr),
        Yr && !f() && f(1),
        Yr && I.ticker.add(yr),
        (B = a._dc),
        (k = I.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: gu(f, f(), function () {
              return k.pause();
            }),
          },
          onUpdate: Mr,
          onComplete: B.vars.onComplete,
        })),
        a
      );
    };
  (Q.sort = function (n) {
    if (de(n)) return tt.sort(n);
    var t = it.pageYOffset || 0;
    return (
      Q.getAll().forEach(function (e) {
        return (e._sortY = e.trigger
          ? t + e.trigger.getBoundingClientRect().top
          : e.start + it.innerHeight);
      }),
      tt.sort(
        n ||
          function (e, r) {
            return (
              (e.vars.refreshPriority || 0) * -1e6 +
              (e.vars.containerAnimation ? 1e6 : e._sortY) -
              ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                (r.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Q.observe = function (n) {
      return new zt(n);
    }),
    (Q.normalizeScroll = function (n) {
      if (typeof n == "undefined") return Ae;
      if (n === !0 && Ae) return Ae.enable();
      if (n === !1) {
        Ae && Ae.kill(), (Ae = n);
        return;
      }
      var t = n instanceof zt ? n : th(n);
      return (
        Ae && Ae.target === t.target && Ae.kill(), ai(t.target) && (Ae = t), t
      );
    }),
    (Q.core = {
      _getVelocityProp: Eo,
      _inputObserver: vu,
      _scrollers: rt,
      _proxies: vr,
      bridge: {
        ss: function () {
          rr || hi("scrollStart"), (rr = he());
        },
        ref: function () {
          return fe;
        },
      },
    }),
    Ql() && I.registerPlugin(Q);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Pn,
    Hi,
    Go,
    eh = () => Go || kn.register(window.gsap),
    bu = typeof Intl != "undefined" ? new Intl.Segmenter() : 0,
    Es = (n) =>
      typeof n == "string"
        ? Es(document.querySelectorAll(n))
        : "length" in n
        ? Array.from(n)
        : [n],
    xu = (n) => Es(n).filter((t) => t instanceof HTMLElement),
    Ko = [],
    Zo = function () {},
    rh = /\s+/g,
    Tu = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Su = { left: 0, top: 0, width: 0, height: 0 },
    Au = (n, t) => {
      if (t) {
        let e = new Set(n.join("").match(t) || Ko),
          r = n.length,
          i,
          s,
          o,
          a;
        if (e.size)
          for (; --r > -1; ) {
            s = n[r];
            for (o of e)
              if (o.startsWith(s) && o.length > s.length) {
                for (
                  i = 0, a = s;
                  o.startsWith((a += n[r + ++i])) && a.length < o.length;

                );
                if (i && a.length === o.length) {
                  (n[r] = o), n.splice(r + 1, i);
                  break;
                }
              }
          }
      }
      return n;
    },
    Eu = (n) =>
      window.getComputedStyle(n).display === "inline" &&
      (n.style.display = "inline-block"),
    Xi = (n, t, e) =>
      t.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, e),
    Qo = (n, t, e) => {
      let r = t[n + "sClass"] || "",
        { tag: i = "div", aria: s = "auto", propIndex: o = !1 } = t,
        a = n === "line" ? "block" : "inline-block",
        l = r.indexOf("++") > -1,
        u = (c) => {
          let p = document.createElement(i),
            g = e.length + 1;
          return (
            r && (p.className = r + (l ? " " + r + g : "")),
            o && p.style.setProperty("--" + n, g + ""),
            s !== "none" && p.setAttribute("aria-hidden", "true"),
            i !== "span" &&
              ((p.style.position = "relative"), (p.style.display = a)),
            (p.textContent = c),
            e.push(p),
            p
          );
        };
      return l && (r = r.replace("++", "")), (u.collection = e), u;
    },
    ih = (n, t, e, r) => {
      let i = Qo("line", e, r),
        s = window.getComputedStyle(n).textAlign || "left";
      return (o, a) => {
        let l = i("");
        for (l.style.textAlign = s, n.insertBefore(l, t[o]); o < a; o++)
          l.appendChild(t[o]);
        l.normalize();
      };
    },
    Ou = (n, t, e, r, i, s, o, a, l, u) => {
      var c;
      let p = Array.from(n.childNodes),
        g = 0,
        { wordDelimiter: f, reduceWhiteSpace: _ = !0, prepareText: d } = t,
        m = n.getBoundingClientRect(),
        b = m,
        w =
          !_ && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
        S = 0,
        h = e.collection,
        v,
        y,
        T,
        A,
        E,
        C,
        L,
        k,
        D,
        F,
        B,
        z,
        M,
        W,
        X,
        x,
        G,
        st;
      for (
        typeof f == "object"
          ? ((T = f.delimiter || f), (y = f.replaceWith || ""))
          : (y = f === "" ? "" : f || " "),
          v = y !== " ";
        g < p.length;
        g++
      )
        if (((A = p[g]), A.nodeType === 3)) {
          for (
            X = A.textContent || "",
              _
                ? (X = X.replace(rh, " "))
                : w &&
                  (X = X.replace(
                    /\n/g,
                    y +
                      `
`
                  )),
              d && (X = d(X, n)),
              A.textContent = X,
              E = y || T ? X.split(T || y) : X.match(a) || Ko,
              G = E[E.length - 1],
              k = v ? G.slice(-1) === " " : !G,
              G || E.pop(),
              b = m,
              L = v ? E[0].charAt(0) === " " : !E[0],
              L && Xi(" ", n, A),
              E[0] || E.shift(),
              Au(E, l),
              (s && u) || (A.textContent = ""),
              D = 1;
            D <= E.length;
            D++
          )
            if (
              ((x = E[D - 1]),
              !_ &&
                w &&
                x.charAt(0) ===
                  `
` &&
                ((c = A.previousSibling) == null || c.remove(),
                Xi(document.createElement("br"), n, A),
                (x = x.slice(1))),
              !_ && x === "")
            )
              Xi(y, n, A);
            else if (x === " ") n.insertBefore(document.createTextNode(" "), A);
            else {
              if (
                (v && x.charAt(0) === " " && Xi(" ", n, A),
                S && D === 1 && !L && h.indexOf(S.parentNode) > -1
                  ? ((C = h[h.length - 1]),
                    C.appendChild(document.createTextNode(r ? "" : x)))
                  : ((C = e(r ? "" : x)),
                    Xi(C, n, A),
                    S && D === 1 && !L && C.insertBefore(S, C.firstChild)),
                r)
              )
                for (
                  B = bu
                    ? Au(
                        [...bu.segment(x)].map((gt) => gt.segment),
                        l
                      )
                    : x.match(a) || Ko,
                    st = 0;
                  st < B.length;
                  st++
                )
                  C.appendChild(
                    B[st] === " " ? document.createTextNode(" ") : r(B[st])
                  );
              if (s && u) {
                if (
                  ((X = A.textContent = X.substring(x.length + 1, X.length)),
                  (F = C.getBoundingClientRect()),
                  F.top > b.top && F.left <= b.left)
                ) {
                  for (z = n.cloneNode(), M = n.childNodes[0]; M && M !== C; )
                    (W = M), (M = M.nextSibling), z.appendChild(W);
                  n.parentNode.insertBefore(z, n), i && Eu(z);
                }
                b = F;
              }
              (D < E.length || k) &&
                Xi(
                  D >= E.length ? " " : v && x.slice(-1) === " " ? " " + y : y,
                  n,
                  A
                );
            }
          n.removeChild(A), (S = 0);
        } else
          A.nodeType === 1 &&
            (o && o.indexOf(A) > -1
              ? (h.indexOf(A.previousSibling) > -1 &&
                  h[h.length - 1].appendChild(A),
                (S = A))
              : (Ou(A, t, e, r, i, s, o, a, l, !0), (S = 0)),
            i && Eu(A));
    };
  const Cu = class wc {
    constructor(t, e) {
      (this.isSplit = !1),
        eh(),
        (this.elements = xu(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = e),
        (this._split = () => this.isSplit && this.split(this.vars));
      let r = [],
        i,
        s = () => {
          let o = r.length,
            a;
          for (; o--; ) {
            a = r[o];
            let l = a.element.offsetWidth;
            if (l !== a.width) {
              (a.width = l), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: r,
        obs:
          typeof ResizeObserver != "undefined" &&
          new ResizeObserver(() => {
            clearTimeout(i), (i = setTimeout(s, 200));
          }),
      }),
        Zo(this),
        this.split(e);
    }
    split(t) {
      this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
      let {
          type: e = "chars,words,lines",
          aria: r = "auto",
          deepSlice: i = !0,
          smartWrap: s,
          onSplit: o,
          autoSplit: a = !1,
          specialChars: l,
          mask: u,
        } = this.vars,
        c = e.indexOf("lines") > -1,
        p = e.indexOf("chars") > -1,
        g = e.indexOf("words") > -1,
        f = p && !g && !c,
        _ =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        d = _ ? new RegExp(_.source + "|" + Tu.source, "gu") : Tu,
        m = !!t.ignore && xu(t.ignore),
        { orig: b, animTime: w, obs: S } = this._data,
        h;
      return (
        (p || g || c) &&
          (this.elements.forEach((v, y) => {
            (b[y] = {
              element: v,
              html: v.innerHTML,
              ariaL: v.getAttribute("aria-label"),
              ariaH: v.getAttribute("aria-hidden"),
            }),
              r === "auto"
                ? v.setAttribute("aria-label", (v.textContent || "").trim())
                : r === "hidden" && v.setAttribute("aria-hidden", "true");
            let T = [],
              A = [],
              E = [],
              C = p ? Qo("char", t, T) : null,
              L = Qo("word", t, A),
              k,
              D,
              F,
              B;
            if ((Ou(v, t, L, C, f, i && (c || f), m, d, _, !1), c)) {
              let z = Es(v.childNodes),
                M = ih(v, z, t, E),
                W,
                X = [],
                x = 0,
                G = z.map((gt) =>
                  gt.nodeType === 1 ? gt.getBoundingClientRect() : Su
                ),
                st = Su;
              for (k = 0; k < z.length; k++)
                (W = z[k]),
                  W.nodeType === 1 &&
                    (W.nodeName === "BR"
                      ? (X.push(W), M(x, k + 1), (x = k + 1), (st = G[x]))
                      : (k &&
                          G[k].top > st.top &&
                          G[k].left <= st.left &&
                          (M(x, k), (x = k)),
                        (st = G[k])));
              x < k && M(x, k),
                X.forEach((gt) => {
                  var at;
                  return (at = gt.parentNode) == null
                    ? void 0
                    : at.removeChild(gt);
                });
            }
            if (!g) {
              for (k = 0; k < A.length; k++)
                if (
                  ((D = A[k]),
                  p || !D.nextSibling || D.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
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
              (A.length = 0), v.normalize();
            }
            this.lines.push(...E), this.words.push(...A), this.chars.push(...T);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((v) => {
                let y = v.cloneNode();
                return (
                  v.replaceWith(y),
                  y.appendChild(v),
                  v.className &&
                    (y.className = v.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (y.style.overflow = "clip"),
                  y
                );
              })
            )),
        (this.isSplit = !0),
        Hi &&
          (a
            ? Hi.addEventListener("loadingdone", this._split)
            : Hi.status === "loading" &&
              console.warn("SplitText called before fonts loaded")),
        (h = o && o(this)) &&
          h.totalTime &&
          (this._data.anim = w ? h.totalTime(w) : h),
        c &&
          a &&
          this.elements.forEach((v, y) => {
            (b[y].width = v.offsetWidth), S && S.observe(v);
          }),
        this
      );
    }
    revert() {
      var t, e;
      let { orig: r, anim: i, obs: s } = this._data;
      return (
        s && s.disconnect(),
        r.forEach(({ element: o, html: a, ariaL: l, ariaH: u }) => {
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
          r.length =
          this.masks.length =
            0),
        (this.isSplit = !1),
        Hi == null || Hi.removeEventListener("loadingdone", this._split),
        i && ((this._data.animTime = i.totalTime()), i.revert()),
        (e = (t = this.vars).onRevert) == null || e.call(t, this),
        this
      );
    }
    static create(t, e) {
      return new wc(t, e);
    }
    static register(t) {
      (Pn = Pn || t || window.gsap),
        Pn && ((Es = Pn.utils.toArray), (Zo = Pn.core.context || Zo)),
        !Go && window.innerWidth > 0 && ((Hi = document.fonts), (Go = !0));
    }
  };
  Cu.version = "3.13.0";
  let kn = Cu;
  j.registerPlugin(Q, kn);
  const nh = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((t) => {
        const e = t.getAttribute("data-highlight-scroll-start") || "top 90%",
          r = t.getAttribute("data-highlight-scroll-end") || "center 40%",
          i = parseFloat(t.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(t.getAttribute("data-highlight-stagger")) || 0.1;
        new kn(t, {
          type: "words, chars",
          onSplit(o) {
            const a = j.context(() => {
              j.timeline({
                scrollTrigger: { scrub: !0, trigger: t, start: e, end: r },
              }).from(o.chars, { autoAlpha: i, stagger: s, ease: "linear" });
            });
            t._gsapContext = a;
          },
        });
      });
    },
    sh = () => {
      nh();
    },
    oh = () => {
      document.querySelectorAll('[data-tabs="wrapper"]').forEach((t) => {
        const e = t.querySelectorAll('[data-tabs="content"]'),
          r = t.querySelectorAll('[data-tabs="visual"]'),
          i = t.dataset.tabsAutoplay === "true",
          s = parseInt(t.dataset.tabsAutoplayDuration) || 5e3;
        let o = null,
          a = null,
          l = !1,
          u = null;
        function c(g) {
          u && u.kill();
          const f = e[g].querySelector('[data-tabs="item-progress"]');
          f &&
            (j.set(f, { scaleX: 0, transformOrigin: "left center" }),
            (u = j.to(f, {
              scaleX: 1,
              duration: s / 1e3,
              ease: "power1.inOut",
              onComplete: () => {
                if (!l) {
                  const _ = (g + 1) % e.length;
                  p(_);
                }
              },
            })));
        }
        function p(g) {
          if (l || e[g] === o) return;
          (l = !0), u && u.kill();
          const f = o,
            _ = a,
            d =
              f == null
                ? void 0
                : f.querySelector('[data-tabs="item-progress"]'),
            m = e[g],
            b = r[g],
            w = m.querySelector('[data-tabs="item-progress"]'),
            S = j.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = m), (a = b), (l = !1), i && c(g);
              },
            });
          f &&
            (f.classList.remove("active"),
            f.setAttribute("aria-selected", "false"),
            _ == null || _.classList.remove("active"),
            S.set(d, { transformOrigin: "right center" })
              .to(d, { scaleX: 0, duration: 0.3 }, 0)
              .to(_, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            m.classList.add("active"),
            m.setAttribute("aria-selected", "true"),
            b.classList.add("active"),
            S.fromTo(
              b,
              { autoAlpha: 0, yPercent: 5, scale: 0.99 },
              { autoAlpha: 1, yPercent: 0, scale: 1 },
              0.3
            ).set(w, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        e.forEach((g, f) => {
          g.setAttribute("tabindex", f === 0 ? "0" : "-1"),
            g.setAttribute("role", "tab"),
            g.setAttribute("aria-selected", f === 0 ? "true" : "false"),
            g.setAttribute("id", `tab-${f}`),
            r[f] &&
              (r[f].setAttribute("role", "tabpanel"),
              r[f].setAttribute("aria-labelledby", `tab-${f}`)),
            g.addEventListener("keydown", (_) => {
              let d;
              switch (_.key) {
                case "ArrowRight":
                  _.preventDefault(), (d = (f + 1) % e.length);
                  break;
                case "ArrowLeft":
                  _.preventDefault(), (d = (f - 1 + e.length) % e.length);
                  break;
                case "Home":
                  _.preventDefault(), (d = 0);
                  break;
                case "End":
                  _.preventDefault(), (d = e.length - 1);
                  break;
                default:
                  return;
              }
              e.forEach((m, b) => {
                m.setAttribute("tabindex", b === d ? "0" : "-1");
              }),
                e[d].focus(),
                p(d);
            }),
            g.addEventListener("click", () => {
              g !== o &&
                (e.forEach((_, d) => {
                  _.setAttribute("tabindex", d === f ? "0" : "-1");
                }),
                p(f));
            });
        }),
          t.setAttribute("role", "tablist"),
          t.setAttribute("aria-label", "Hero content tabs"),
          p(0);
      });
    },
    ah = () => {
      oh();
    };
  j.registerPlugin(Q);
  const lh = () => {
      const n = document.querySelector(".home_hero_tab_component"),
        t = n.querySelector(".home_hero_tab_visual_wrap");
      j.to(t, {
        scrollTrigger: {
          trigger: n,
          start: "top 75%",
          end: "bottom 95%",
          scrub: 1.4,
        },
        rotateX: 0,
        y: 0,
      });
    },
    uh = () => {
      lh();
    };
  j.registerPlugin(Q, kn);
  const ch = () => {
      const n = document.querySelector('[lead-scroll="wrap"]'),
        e = n
          .querySelector('[lead-scroll="visual-component"]')
          .querySelectorAll('[lead-scroll="visual-item"]'),
        r = Array.from(e).map((h) => h.querySelector('[scroll-img="lg"]')),
        i = Array.from(e).map((h) => h.querySelectorAll('[scroll-img="sm"]')),
        s = n.querySelector('[lead-scroll="content-component"]'),
        o = s.querySelectorAll('[lead-scroll="content-header-item"]'),
        a = s.querySelectorAll('[lead-scroll="content-header-item"] p'),
        l = s.querySelectorAll('[lead-scroll="content-info-item"]'),
        u = Array.from(l).map((h) => Array.from(h.querySelectorAll("p"))),
        p = document
          .querySelector('[lead-scroll="progress-wrap"]')
          .querySelectorAll('[lead-scroll="progress-item"]'),
        g = Array.from(p).map((h) =>
          h.querySelector('[lead-scroll="progress-move"]')
        );
      let f = 0,
        _ = !1;
      j.set(r, { autoAlpha: 0 }),
        j.set(i, { autoAlpha: 0 }),
        j.set(r, { scale: 0.8 }),
        j.set(i, { scale: 0.8 });
      const d = (h) => {
          const v = r[h],
            y = i[h];
          v &&
            j.fromTo(
              v,
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
            y &&
              y.length > 0 &&
              j.fromTo(
                y,
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
        m = (h) => {
          const v = r[h],
            y = i[h];
          v &&
            j.to(v, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            y &&
              y.length > 0 &&
              j.to(y, {
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
        b = (h) => {
          const v = a[h],
            y = new kn(v, { type: "lines", mask: "lines" });
          y &&
            j.from(y.lines, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        },
        w = (h) => {
          const v = u[h];
          v &&
            v.length > 0 &&
            j.from(v, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        S = (h) => {
          const v = Math.floor(h * 4),
            y = Math.min(Math.max(v, 0), 3);
          if (y !== f && !_) {
            _ = !0;
            const T = f,
              A = y,
              E = () => {
                p.forEach((C) => {
                  C.classList.remove(
                    "is--active",
                    "is--outgoing",
                    "is--incoming"
                  );
                }),
                  e.forEach((C) => {
                    C.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  o.forEach((C) => {
                    C.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  }),
                  l.forEach((C) => {
                    C.classList.remove(
                      "is--active",
                      "is--outgoing",
                      "is--incoming"
                    );
                  });
              };
            E(),
              T >= 0 &&
                T < e.length &&
                (p[T] && p[T].classList.add("is--outgoing"),
                e[T] && e[T].classList.add("is--outgoing"),
                o[T] && o[T].classList.add("is--outgoing"),
                l[T] && l[T].classList.add("is--outgoing"),
                m(T)),
              p[A] && p[A].classList.add("is--incoming"),
              e[A] && e[A].classList.add("is--incoming"),
              o[A] && o[A].classList.add("is--incoming"),
              l[A] && l[A].classList.add("is--incoming"),
              d(A),
              b(A),
              w(A),
              j.delayedCall(0.2, () => {
                E(),
                  p[A] && (p[A].classList.add("is--active"), p[A]),
                  e[A] && (e[A].classList.add("is--active"), e[A]),
                  o[A] && (o[A].classList.add("is--active"), o[A]),
                  l[A] && l[A].classList.add("is--active"),
                  (f = A),
                  (_ = !1);
              });
          }
        };
      p[0] && (p[0].classList.add("is--active"), p[0]),
        e[0] && (e[0].classList.add("is--active"), e[0]),
        o[0] && (o[0].classList.add("is--active"), o[0]),
        l[0] && l[0].classList.add("is--active"),
        d(0),
        b(0),
        w(0),
        j.to(n, {
          scrollTrigger: {
            trigger: n,
            start: "top top",
            end: "+=400%",
            pin: !0,
            scrub: !0,
            markers: !1,
            onUpdate: (h) => {
              S(h.progress);
            },
          },
        }),
        g.forEach((h, v) => {
          j.fromTo(
            h,
            { scaleX: 0 },
            {
              scaleX: 1,
              scrollTrigger: {
                trigger: n,
                start: "top top",
                end: "+=400%",
                scrub: !0,
                onUpdate: (y) => {
                  const A = y.progress * 4 - v,
                    E = Math.min(Math.max(A, 0), 1);
                  j.set(h, { scaleX: E });
                },
              },
            }
          );
        });
    },
    fh = () => {
      ch();
    },
    hh = () => {
      const n = document.querySelectorAll('[form-dropdown="component"]'),
        t = "inactive",
        e = "active",
        r = "aria-expanded",
        i = "aria-hidden";
      let s = !1,
        o = null;
      const a = "#f7f7f7",
        l = "#4aa5fe",
        u = (_) => {
          if (!s || !o) return;
          if (!o.contains(_.target)) {
            const m = o.querySelector('[form-dropdown="trigger"]'),
              b = o.querySelector('[form-dropdown="content"]'),
              w = o.querySelector('[form-dropdown="trigger-icon"]'),
              S = o.querySelectorAll('[form-dropdown="answer"]');
            p(m, b, w), f(m, b, w, S), (s = !1), (o = null);
          }
        };
      document.addEventListener("click", u);
      const c = (_, d, m, b) => {
          _.classList.remove(t),
            _.classList.add(e),
            _.setAttribute(r, "true"),
            d.setAttribute(i, "false"),
            m && m.classList.add(e);
        },
        p = (_, d, m, b) => {
          _.classList.remove(e),
            _.classList.add(t),
            _.setAttribute(r, "false"),
            d.setAttribute(i, "true"),
            m && m.classList.remove(e);
        },
        g = (_, d, m, b) => {
          j.to(m, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
            j.fromTo(
              d,
              { autoAlpha: 0, pointerEvents: "none", y: 40 },
              {
                autoAlpha: 1,
                duration: 0.5,
                ease: "expo.out",
                y: 0,
                pointerEvents: "auto",
              }
            ),
            j.fromTo(
              b,
              { autoAlpha: 0, y: 60, pointerEvents: "none" },
              {
                autoAlpha: 1,
                duration: 0.8,
                ease: "expo.out",
                y: 0,
                stagger: 0.05,
                pointerEvents: "auto",
              }
            );
        },
        f = (_, d, m, b) => {
          j.to(m, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            j.to(d, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            j.to(b, {
              autoAlpha: 0,
              duration: 0.01,
              ease: "expo.out",
              stagger: 0.05,
              pointerEvents: "none",
            });
        };
      n.forEach((_) => {
        const d = _.querySelector('[form-dropdown="trigger"]'),
          m = _.querySelector('[form-dropdown="content"]'),
          b = _.querySelector('[form-dropdown="trigger-icon"]'),
          w = _.querySelectorAll('[form-dropdown="answer"]'),
          S = () => {
            p(d, m, b), f(d, m, b, w), (s = !1), (o = null);
          };
        d.addEventListener("click", () => {
          const h = d.classList.contains(e);
          if (s && o && o !== _) {
            const v = o.querySelector('[form-dropdown="trigger"]'),
              y = o.querySelector('[form-dropdown="content"]'),
              T = o.querySelector('[form-dropdown="trigger-icon"]'),
              A = o.querySelectorAll('[form-dropdown="answer"]');
            p(v, y, T), f(v, y, T, A);
          }
          h ? S() : (c(d, m, b), g(d, m, b, w), (s = !0), (o = _));
        }),
          w.forEach((h) => {
            h.addEventListener("click", () => {
              if (o === _) {
                const v = h.querySelector("p[answer-value]"),
                  y = d.querySelector('[form-dropdown="value"]');
                if (v && y) {
                  const T =
                      v.getAttribute("answer-value") || v.textContent.trim(),
                    A = h.getAttribute("calc-value");
                  if (((y.textContent = T), A)) {
                    y.setAttribute("final-value", A);
                    const E = y.parentElement;
                    E && E.classList.add("is--active"),
                      d.classList.add("is--active"),
                      b && b.classList.add("is--active"),
                      _.classList.add("is--active"),
                      y.classList.add("is--active");
                  }
                }
                S();
              }
            });
          });
      });
    },
    dh = () => {
      hh();
    };
  var Le = "top",
    sr = "bottom",
    or = "right",
    Ne = "left",
    Jo = "auto",
    Dn = [Le, sr, or, Ne],
    Vi = "start",
    Mn = "end",
    ph = "clippingParents",
    Pu = "viewport",
    Rn = "popper",
    gh = "reference",
    ku = Dn.reduce(function (n, t) {
      return n.concat([t + "-" + Vi, t + "-" + Mn]);
    }, []),
    Du = [].concat(Dn, [Jo]).reduce(function (n, t) {
      return n.concat([t, t + "-" + Vi, t + "-" + Mn]);
    }, []),
    _h = "beforeRead",
    mh = "read",
    vh = "afterRead",
    yh = "beforeMain",
    wh = "main",
    bh = "afterMain",
    xh = "beforeWrite",
    Th = "write",
    Sh = "afterWrite",
    Ah = [_h, mh, vh, yh, wh, bh, xh, Th, Sh];
  function br(n) {
    return n ? (n.nodeName || "").toLowerCase() : null;
  }
  function je(n) {
    if (n == null) return window;
    if (n.toString() !== "[object Window]") {
      var t = n.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return n;
  }
  function gi(n) {
    var t = je(n).Element;
    return n instanceof t || n instanceof Element;
  }
  function ar(n) {
    var t = je(n).HTMLElement;
    return n instanceof t || n instanceof HTMLElement;
  }
  function ta(n) {
    if (typeof ShadowRoot == "undefined") return !1;
    var t = je(n).ShadowRoot;
    return n instanceof t || n instanceof ShadowRoot;
  }
  function Eh(n) {
    var t = n.state;
    Object.keys(t.elements).forEach(function (e) {
      var r = t.styles[e] || {},
        i = t.attributes[e] || {},
        s = t.elements[e];
      !ar(s) ||
        !br(s) ||
        (Object.assign(s.style, r),
        Object.keys(i).forEach(function (o) {
          var a = i[o];
          a === !1
            ? s.removeAttribute(o)
            : s.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function Oh(n) {
    var t = n.state,
      e = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, e.popper),
      (t.styles = e),
      t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
      function () {
        Object.keys(t.elements).forEach(function (r) {
          var i = t.elements[r],
            s = t.attributes[r] || {},
            o = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : e[r]),
            a = o.reduce(function (l, u) {
              return (l[u] = ""), l;
            }, {});
          !ar(i) ||
            !br(i) ||
            (Object.assign(i.style, a),
            Object.keys(s).forEach(function (l) {
              i.removeAttribute(l);
            }));
        });
      }
    );
  }
  const Mu = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Eh,
    effect: Oh,
    requires: ["computeStyles"],
  };
  function xr(n) {
    return n.split("-")[0];
  }
  var _i = Math.max,
    Os = Math.min,
    $i = Math.round;
  function ea() {
    var n = navigator.userAgentData;
    return n != null && n.brands && Array.isArray(n.brands)
      ? n.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Ru() {
    return !/^((?!chrome|android).)*safari/i.test(ea());
  }
  function Yi(n, t, e) {
    t === void 0 && (t = !1), e === void 0 && (e = !1);
    var r = n.getBoundingClientRect(),
      i = 1,
      s = 1;
    t &&
      ar(n) &&
      ((i = (n.offsetWidth > 0 && $i(r.width) / n.offsetWidth) || 1),
      (s = (n.offsetHeight > 0 && $i(r.height) / n.offsetHeight) || 1));
    var o = gi(n) ? je(n) : window,
      a = o.visualViewport,
      l = !Ru() && e,
      u = (r.left + (l && a ? a.offsetLeft : 0)) / i,
      c = (r.top + (l && a ? a.offsetTop : 0)) / s,
      p = r.width / i,
      g = r.height / s;
    return {
      width: p,
      height: g,
      top: c,
      right: u + p,
      bottom: c + g,
      left: u,
      x: u,
      y: c,
    };
  }
  function ra(n) {
    var t = Yi(n),
      e = n.offsetWidth,
      r = n.offsetHeight;
    return (
      Math.abs(t.width - e) <= 1 && (e = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: n.offsetLeft, y: n.offsetTop, width: e, height: r }
    );
  }
  function Lu(n, t) {
    var e = t.getRootNode && t.getRootNode();
    if (n.contains(t)) return !0;
    if (e && ta(e)) {
      var r = t;
      do {
        if (r && n.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function Rr(n) {
    return je(n).getComputedStyle(n);
  }
  function Ch(n) {
    return ["table", "td", "th"].indexOf(br(n)) >= 0;
  }
  function Ur(n) {
    return (
      (gi(n) ? n.ownerDocument : n.document) || window.document
    ).documentElement;
  }
  function Cs(n) {
    return br(n) === "html"
      ? n
      : n.assignedSlot || n.parentNode || (ta(n) ? n.host : null) || Ur(n);
  }
  function Nu(n) {
    return !ar(n) || Rr(n).position === "fixed" ? null : n.offsetParent;
  }
  function Ph(n) {
    var t = /firefox/i.test(ea()),
      e = /Trident/i.test(ea());
    if (e && ar(n)) {
      var r = Rr(n);
      if (r.position === "fixed") return null;
    }
    var i = Cs(n);
    for (
      ta(i) && (i = i.host);
      ar(i) && ["html", "body"].indexOf(br(i)) < 0;

    ) {
      var s = Rr(i);
      if (
        s.transform !== "none" ||
        s.perspective !== "none" ||
        s.contain === "paint" ||
        ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
        (t && s.willChange === "filter") ||
        (t && s.filter && s.filter !== "none")
      )
        return i;
      i = i.parentNode;
    }
    return null;
  }
  function Ln(n) {
    for (var t = je(n), e = Nu(n); e && Ch(e) && Rr(e).position === "static"; )
      e = Nu(e);
    return e &&
      (br(e) === "html" || (br(e) === "body" && Rr(e).position === "static"))
      ? t
      : e || Ph(n) || t;
  }
  function ia(n) {
    return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
  }
  function Nn(n, t, e) {
    return _i(n, Os(t, e));
  }
  function kh(n, t, e) {
    var r = Nn(n, t, e);
    return r > e ? e : r;
  }
  function Iu() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function zu(n) {
    return Object.assign({}, Iu(), n);
  }
  function Fu(n, t) {
    return t.reduce(function (e, r) {
      return (e[r] = n), e;
    }, {});
  }
  var Dh = function (t, e) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, e.rects, { placement: e.placement }))
          : t),
      zu(typeof t != "number" ? t : Fu(t, Dn))
    );
  };
  function Mh(n) {
    var t,
      e = n.state,
      r = n.name,
      i = n.options,
      s = e.elements.arrow,
      o = e.modifiersData.popperOffsets,
      a = xr(e.placement),
      l = ia(a),
      u = [Ne, or].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!s || !o)) {
      var p = Dh(i.padding, e),
        g = ra(s),
        f = l === "y" ? Le : Ne,
        _ = l === "y" ? sr : or,
        d =
          e.rects.reference[c] +
          e.rects.reference[l] -
          o[l] -
          e.rects.popper[c],
        m = o[l] - e.rects.reference[l],
        b = Ln(s),
        w = b ? (l === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
        S = d / 2 - m / 2,
        h = p[f],
        v = w - g[c] - p[_],
        y = w / 2 - g[c] / 2 + S,
        T = Nn(h, y, v),
        A = l;
      e.modifiersData[r] = ((t = {}), (t[A] = T), (t.centerOffset = T - y), t);
    }
  }
  function Rh(n) {
    var t = n.state,
      e = n.options,
      r = e.element,
      i = r === void 0 ? "[data-popper-arrow]" : r;
    i != null &&
      ((typeof i == "string" &&
        ((i = t.elements.popper.querySelector(i)), !i)) ||
        (Lu(t.elements.popper, i) && (t.elements.arrow = i)));
  }
  const Lh = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Mh,
    effect: Rh,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Ui(n) {
    return n.split("-")[1];
  }
  var Nh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Ih(n, t) {
    var e = n.x,
      r = n.y,
      i = t.devicePixelRatio || 1;
    return { x: $i(e * i) / i || 0, y: $i(r * i) / i || 0 };
  }
  function Bu(n) {
    var t,
      e = n.popper,
      r = n.popperRect,
      i = n.placement,
      s = n.variation,
      o = n.offsets,
      a = n.position,
      l = n.gpuAcceleration,
      u = n.adaptive,
      c = n.roundOffsets,
      p = n.isFixed,
      g = o.x,
      f = g === void 0 ? 0 : g,
      _ = o.y,
      d = _ === void 0 ? 0 : _,
      m = typeof c == "function" ? c({ x: f, y: d }) : { x: f, y: d };
    (f = m.x), (d = m.y);
    var b = o.hasOwnProperty("x"),
      w = o.hasOwnProperty("y"),
      S = Ne,
      h = Le,
      v = window;
    if (u) {
      var y = Ln(e),
        T = "clientHeight",
        A = "clientWidth";
      if (
        (y === je(e) &&
          ((y = Ur(e)),
          Rr(y).position !== "static" &&
            a === "absolute" &&
            ((T = "scrollHeight"), (A = "scrollWidth"))),
        (y = y),
        i === Le || ((i === Ne || i === or) && s === Mn))
      ) {
        h = sr;
        var E =
          p && y === v && v.visualViewport ? v.visualViewport.height : y[T];
        (d -= E - r.height), (d *= l ? 1 : -1);
      }
      if (i === Ne || ((i === Le || i === sr) && s === Mn)) {
        S = or;
        var C =
          p && y === v && v.visualViewport ? v.visualViewport.width : y[A];
        (f -= C - r.width), (f *= l ? 1 : -1);
      }
    }
    var L = Object.assign({ position: a }, u && Nh),
      k = c === !0 ? Ih({ x: f, y: d }, je(e)) : { x: f, y: d };
    if (((f = k.x), (d = k.y), l)) {
      var D;
      return Object.assign(
        {},
        L,
        ((D = {}),
        (D[h] = w ? "0" : ""),
        (D[S] = b ? "0" : ""),
        (D.transform =
          (v.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + d + "px)"
            : "translate3d(" + f + "px, " + d + "px, 0)"),
        D)
      );
    }
    return Object.assign(
      {},
      L,
      ((t = {}),
      (t[h] = w ? d + "px" : ""),
      (t[S] = b ? f + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function zh(n) {
    var t = n.state,
      e = n.options,
      r = e.gpuAcceleration,
      i = r === void 0 ? !0 : r,
      s = e.adaptive,
      o = s === void 0 ? !0 : s,
      a = e.roundOffsets,
      l = a === void 0 ? !0 : a,
      u = {
        placement: xr(t.placement),
        variation: Ui(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        Bu(
          Object.assign({}, u, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: o,
            roundOffsets: l,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          Bu(
            Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const Fh = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: zh,
    data: {},
  };
  var Ps = { passive: !0 };
  function Bh(n) {
    var t = n.state,
      e = n.instance,
      r = n.options,
      i = r.scroll,
      s = i === void 0 ? !0 : i,
      o = r.resize,
      a = o === void 0 ? !0 : o,
      l = je(t.elements.popper),
      u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      s &&
        u.forEach(function (c) {
          c.addEventListener("scroll", e.update, Ps);
        }),
      a && l.addEventListener("resize", e.update, Ps),
      function () {
        s &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", e.update, Ps);
          }),
          a && l.removeEventListener("resize", e.update, Ps);
      }
    );
  }
  const Wh = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Bh,
    data: {},
  };
  var qh = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ks(n) {
    return n.replace(/left|right|bottom|top/g, function (t) {
      return qh[t];
    });
  }
  var Hh = { start: "end", end: "start" };
  function Wu(n) {
    return n.replace(/start|end/g, function (t) {
      return Hh[t];
    });
  }
  function na(n) {
    var t = je(n),
      e = t.pageXOffset,
      r = t.pageYOffset;
    return { scrollLeft: e, scrollTop: r };
  }
  function sa(n) {
    return Yi(Ur(n)).left + na(n).scrollLeft;
  }
  function Xh(n, t) {
    var e = je(n),
      r = Ur(n),
      i = e.visualViewport,
      s = r.clientWidth,
      o = r.clientHeight,
      a = 0,
      l = 0;
    if (i) {
      (s = i.width), (o = i.height);
      var u = Ru();
      (u || (!u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
    }
    return { width: s, height: o, x: a + sa(n), y: l };
  }
  function Vh(n) {
    var t,
      e = Ur(n),
      r = na(n),
      i = (t = n.ownerDocument) == null ? void 0 : t.body,
      s = _i(
        e.scrollWidth,
        e.clientWidth,
        i ? i.scrollWidth : 0,
        i ? i.clientWidth : 0
      ),
      o = _i(
        e.scrollHeight,
        e.clientHeight,
        i ? i.scrollHeight : 0,
        i ? i.clientHeight : 0
      ),
      a = -r.scrollLeft + sa(n),
      l = -r.scrollTop;
    return (
      Rr(i || e).direction === "rtl" &&
        (a += _i(e.clientWidth, i ? i.clientWidth : 0) - s),
      { width: s, height: o, x: a, y: l }
    );
  }
  function oa(n) {
    var t = Rr(n),
      e = t.overflow,
      r = t.overflowX,
      i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(e + i + r);
  }
  function qu(n) {
    return ["html", "body", "#document"].indexOf(br(n)) >= 0
      ? n.ownerDocument.body
      : ar(n) && oa(n)
      ? n
      : qu(Cs(n));
  }
  function In(n, t) {
    var e;
    t === void 0 && (t = []);
    var r = qu(n),
      i = r === ((e = n.ownerDocument) == null ? void 0 : e.body),
      s = je(r),
      o = i ? [s].concat(s.visualViewport || [], oa(r) ? r : []) : r,
      a = t.concat(o);
    return i ? a : a.concat(In(Cs(o)));
  }
  function aa(n) {
    return Object.assign({}, n, {
      left: n.x,
      top: n.y,
      right: n.x + n.width,
      bottom: n.y + n.height,
    });
  }
  function $h(n, t) {
    var e = Yi(n, !1, t === "fixed");
    return (
      (e.top = e.top + n.clientTop),
      (e.left = e.left + n.clientLeft),
      (e.bottom = e.top + n.clientHeight),
      (e.right = e.left + n.clientWidth),
      (e.width = n.clientWidth),
      (e.height = n.clientHeight),
      (e.x = e.left),
      (e.y = e.top),
      e
    );
  }
  function Hu(n, t, e) {
    return t === Pu ? aa(Xh(n, e)) : gi(t) ? $h(t, e) : aa(Vh(Ur(n)));
  }
  function Yh(n) {
    var t = In(Cs(n)),
      e = ["absolute", "fixed"].indexOf(Rr(n).position) >= 0,
      r = e && ar(n) ? Ln(n) : n;
    return gi(r)
      ? t.filter(function (i) {
          return gi(i) && Lu(i, r) && br(i) !== "body";
        })
      : [];
  }
  function Uh(n, t, e, r) {
    var i = t === "clippingParents" ? Yh(n) : [].concat(t),
      s = [].concat(i, [e]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = Hu(n, u, r);
        return (
          (l.top = _i(c.top, l.top)),
          (l.right = Os(c.right, l.right)),
          (l.bottom = Os(c.bottom, l.bottom)),
          (l.left = _i(c.left, l.left)),
          l
        );
      }, Hu(n, o, r));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function Xu(n) {
    var t = n.reference,
      e = n.element,
      r = n.placement,
      i = r ? xr(r) : null,
      s = r ? Ui(r) : null,
      o = t.x + t.width / 2 - e.width / 2,
      a = t.y + t.height / 2 - e.height / 2,
      l;
    switch (i) {
      case Le:
        l = { x: o, y: t.y - e.height };
        break;
      case sr:
        l = { x: o, y: t.y + t.height };
        break;
      case or:
        l = { x: t.x + t.width, y: a };
        break;
      case Ne:
        l = { x: t.x - e.width, y: a };
        break;
      default:
        l = { x: t.x, y: t.y };
    }
    var u = i ? ia(i) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (s) {
        case Vi:
          l[u] = l[u] - (t[c] / 2 - e[c] / 2);
          break;
        case Mn:
          l[u] = l[u] + (t[c] / 2 - e[c] / 2);
          break;
      }
    }
    return l;
  }
  function zn(n, t) {
    t === void 0 && (t = {});
    var e = t,
      r = e.placement,
      i = r === void 0 ? n.placement : r,
      s = e.strategy,
      o = s === void 0 ? n.strategy : s,
      a = e.boundary,
      l = a === void 0 ? ph : a,
      u = e.rootBoundary,
      c = u === void 0 ? Pu : u,
      p = e.elementContext,
      g = p === void 0 ? Rn : p,
      f = e.altBoundary,
      _ = f === void 0 ? !1 : f,
      d = e.padding,
      m = d === void 0 ? 0 : d,
      b = zu(typeof m != "number" ? m : Fu(m, Dn)),
      w = g === Rn ? gh : Rn,
      S = n.rects.popper,
      h = n.elements[_ ? w : g],
      v = Uh(gi(h) ? h : h.contextElement || Ur(n.elements.popper), l, c, o),
      y = Yi(n.elements.reference),
      T = Xu({ reference: y, element: S, strategy: "absolute", placement: i }),
      A = aa(Object.assign({}, S, T)),
      E = g === Rn ? A : y,
      C = {
        top: v.top - E.top + b.top,
        bottom: E.bottom - v.bottom + b.bottom,
        left: v.left - E.left + b.left,
        right: E.right - v.right + b.right,
      },
      L = n.modifiersData.offset;
    if (g === Rn && L) {
      var k = L[i];
      Object.keys(C).forEach(function (D) {
        var F = [or, sr].indexOf(D) >= 0 ? 1 : -1,
          B = [Le, sr].indexOf(D) >= 0 ? "y" : "x";
        C[D] += k[B] * F;
      });
    }
    return C;
  }
  function jh(n, t) {
    t === void 0 && (t = {});
    var e = t,
      r = e.placement,
      i = e.boundary,
      s = e.rootBoundary,
      o = e.padding,
      a = e.flipVariations,
      l = e.allowedAutoPlacements,
      u = l === void 0 ? Du : l,
      c = Ui(r),
      p = c
        ? a
          ? ku
          : ku.filter(function (_) {
              return Ui(_) === c;
            })
        : Dn,
      g = p.filter(function (_) {
        return u.indexOf(_) >= 0;
      });
    g.length === 0 && (g = p);
    var f = g.reduce(function (_, d) {
      return (
        (_[d] = zn(n, {
          placement: d,
          boundary: i,
          rootBoundary: s,
          padding: o,
        })[xr(d)]),
        _
      );
    }, {});
    return Object.keys(f).sort(function (_, d) {
      return f[_] - f[d];
    });
  }
  function Gh(n) {
    if (xr(n) === Jo) return [];
    var t = ks(n);
    return [Wu(n), t, Wu(t)];
  }
  function Kh(n) {
    var t = n.state,
      e = n.options,
      r = n.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var i = e.mainAxis,
          s = i === void 0 ? !0 : i,
          o = e.altAxis,
          a = o === void 0 ? !0 : o,
          l = e.fallbackPlacements,
          u = e.padding,
          c = e.boundary,
          p = e.rootBoundary,
          g = e.altBoundary,
          f = e.flipVariations,
          _ = f === void 0 ? !0 : f,
          d = e.allowedAutoPlacements,
          m = t.options.placement,
          b = xr(m),
          w = b === m,
          S = l || (w || !_ ? [ks(m)] : Gh(m)),
          h = [m].concat(S).reduce(function (at, ht) {
            return at.concat(
              xr(ht) === Jo
                ? jh(t, {
                    placement: ht,
                    boundary: c,
                    rootBoundary: p,
                    padding: u,
                    flipVariations: _,
                    allowedAutoPlacements: d,
                  })
                : ht
            );
          }, []),
          v = t.rects.reference,
          y = t.rects.popper,
          T = new Map(),
          A = !0,
          E = h[0],
          C = 0;
        C < h.length;
        C++
      ) {
        var L = h[C],
          k = xr(L),
          D = Ui(L) === Vi,
          F = [Le, sr].indexOf(k) >= 0,
          B = F ? "width" : "height",
          z = zn(t, {
            placement: L,
            boundary: c,
            rootBoundary: p,
            altBoundary: g,
            padding: u,
          }),
          M = F ? (D ? or : Ne) : D ? sr : Le;
        v[B] > y[B] && (M = ks(M));
        var W = ks(M),
          X = [];
        if (
          (s && X.push(z[k] <= 0),
          a && X.push(z[M] <= 0, z[W] <= 0),
          X.every(function (at) {
            return at;
          }))
        ) {
          (E = L), (A = !1);
          break;
        }
        T.set(L, X);
      }
      if (A)
        for (
          var x = _ ? 3 : 1,
            G = function (ht) {
              var wt = h.find(function (_t) {
                var Tt = T.get(_t);
                if (Tt)
                  return Tt.slice(0, ht).every(function (Ct) {
                    return Ct;
                  });
              });
              if (wt) return (E = wt), "break";
            },
            st = x;
          st > 0;
          st--
        ) {
          var gt = G(st);
          if (gt === "break") break;
        }
      t.placement !== E &&
        ((t.modifiersData[r]._skip = !0), (t.placement = E), (t.reset = !0));
    }
  }
  const Zh = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Kh,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Vu(n, t, e) {
    return (
      e === void 0 && (e = { x: 0, y: 0 }),
      {
        top: n.top - t.height - e.y,
        right: n.right - t.width + e.x,
        bottom: n.bottom - t.height + e.y,
        left: n.left - t.width - e.x,
      }
    );
  }
  function $u(n) {
    return [Le, or, sr, Ne].some(function (t) {
      return n[t] >= 0;
    });
  }
  function Qh(n) {
    var t = n.state,
      e = n.name,
      r = t.rects.reference,
      i = t.rects.popper,
      s = t.modifiersData.preventOverflow,
      o = zn(t, { elementContext: "reference" }),
      a = zn(t, { altBoundary: !0 }),
      l = Vu(o, r),
      u = Vu(a, i, s),
      c = $u(l),
      p = $u(u);
    (t.modifiersData[e] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: p,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": p,
      }));
  }
  const Jh = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Qh,
  };
  function td(n, t, e) {
    var r = xr(n),
      i = [Ne, Le].indexOf(r) >= 0 ? -1 : 1,
      s =
        typeof e == "function" ? e(Object.assign({}, t, { placement: n })) : e,
      o = s[0],
      a = s[1];
    return (
      (o = o || 0),
      (a = (a || 0) * i),
      [Ne, or].indexOf(r) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function ed(n) {
    var t = n.state,
      e = n.options,
      r = n.name,
      i = e.offset,
      s = i === void 0 ? [0, 0] : i,
      o = Du.reduce(function (c, p) {
        return (c[p] = td(p, t.rects, s)), c;
      }, {}),
      a = o[t.placement],
      l = a.x,
      u = a.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = o);
  }
  const rd = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: ed,
  };
  function id(n) {
    var t = n.state,
      e = n.name;
    t.modifiersData[e] = Xu({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const nd = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: id,
    data: {},
  };
  function sd(n) {
    return n === "x" ? "y" : "x";
  }
  function od(n) {
    var t = n.state,
      e = n.options,
      r = n.name,
      i = e.mainAxis,
      s = i === void 0 ? !0 : i,
      o = e.altAxis,
      a = o === void 0 ? !1 : o,
      l = e.boundary,
      u = e.rootBoundary,
      c = e.altBoundary,
      p = e.padding,
      g = e.tether,
      f = g === void 0 ? !0 : g,
      _ = e.tetherOffset,
      d = _ === void 0 ? 0 : _,
      m = zn(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: c }),
      b = xr(t.placement),
      w = Ui(t.placement),
      S = !w,
      h = ia(b),
      v = sd(h),
      y = t.modifiersData.popperOffsets,
      T = t.rects.reference,
      A = t.rects.popper,
      E =
        typeof d == "function"
          ? d(Object.assign({}, t.rects, { placement: t.placement }))
          : d,
      C =
        typeof E == "number"
          ? { mainAxis: E, altAxis: E }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
      L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      k = { x: 0, y: 0 };
    if (y) {
      if (s) {
        var D,
          F = h === "y" ? Le : Ne,
          B = h === "y" ? sr : or,
          z = h === "y" ? "height" : "width",
          M = y[h],
          W = M + m[F],
          X = M - m[B],
          x = f ? -A[z] / 2 : 0,
          G = w === Vi ? T[z] : A[z],
          st = w === Vi ? -A[z] : -T[z],
          gt = t.elements.arrow,
          at = f && gt ? ra(gt) : { width: 0, height: 0 },
          ht = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : Iu(),
          wt = ht[F],
          _t = ht[B],
          Tt = Nn(0, T[z], at[z]),
          Ct = S
            ? T[z] / 2 - x - Tt - wt - C.mainAxis
            : G - Tt - wt - C.mainAxis,
          oe = S
            ? -T[z] / 2 + x + Tt + _t + C.mainAxis
            : st + Tt + _t + C.mainAxis,
          Rt = t.elements.arrow && Ln(t.elements.arrow),
          $t = Rt ? (h === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0) : 0,
          et = (D = L == null ? void 0 : L[h]) != null ? D : 0,
          bt = M + Ct - et - $t,
          Yt = M + oe - et,
          Ut = Nn(f ? Os(W, bt) : W, M, f ? _i(X, Yt) : X);
        (y[h] = Ut), (k[h] = Ut - M);
      }
      if (a) {
        var O,
          Jt = h === "x" ? Le : Ne,
          Ie = h === "x" ? sr : or,
          te = y[v],
          ut = v === "y" ? "height" : "width",
          Oe = te + m[Jt],
          pe = te - m[Ie],
          Ge = [Le, Ne].indexOf(b) !== -1,
          Pt = (O = L == null ? void 0 : L[v]) != null ? O : 0,
          Ke = Ge ? Oe : te - T[ut] - A[ut] - Pt + C.altAxis,
          xt = Ge ? te + T[ut] + A[ut] - Pt - C.altAxis : pe,
          ge = f && Ge ? kh(Ke, te, xt) : Nn(f ? Ke : Oe, te, f ? xt : pe);
        (y[v] = ge), (k[v] = ge - te);
      }
      t.modifiersData[r] = k;
    }
  }
  const ad = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: od,
    requiresIfExists: ["offset"],
  };
  function ld(n) {
    return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
  }
  function ud(n) {
    return n === je(n) || !ar(n) ? na(n) : ld(n);
  }
  function cd(n) {
    var t = n.getBoundingClientRect(),
      e = $i(t.width) / n.offsetWidth || 1,
      r = $i(t.height) / n.offsetHeight || 1;
    return e !== 1 || r !== 1;
  }
  function fd(n, t, e) {
    e === void 0 && (e = !1);
    var r = ar(t),
      i = ar(t) && cd(t),
      s = Ur(t),
      o = Yi(n, i, e),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (r || (!r && !e)) &&
        ((br(t) !== "body" || oa(s)) && (a = ud(t)),
        ar(t)
          ? ((l = Yi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
          : s && (l.x = sa(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function hd(n) {
    var t = new Map(),
      e = new Set(),
      r = [];
    n.forEach(function (s) {
      t.set(s.name, s);
    });
    function i(s) {
      e.add(s.name);
      var o = [].concat(s.requires || [], s.requiresIfExists || []);
      o.forEach(function (a) {
        if (!e.has(a)) {
          var l = t.get(a);
          l && i(l);
        }
      }),
        r.push(s);
    }
    return (
      n.forEach(function (s) {
        e.has(s.name) || i(s);
      }),
      r
    );
  }
  function dd(n) {
    var t = hd(n);
    return Ah.reduce(function (e, r) {
      return e.concat(
        t.filter(function (i) {
          return i.phase === r;
        })
      );
    }, []);
  }
  function pd(n) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (e) {
            Promise.resolve().then(function () {
              (t = void 0), e(n());
            });
          })),
        t
      );
    };
  }
  function gd(n) {
    var t = n.reduce(function (e, r) {
      var i = e[r.name];
      return (
        (e[r.name] = i
          ? Object.assign({}, i, r, {
              options: Object.assign({}, i.options, r.options),
              data: Object.assign({}, i.data, r.data),
            })
          : r),
        e
      );
    }, {});
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  }
  var Yu = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Uu() {
    for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
      t[e] = arguments[e];
    return !t.some(function (r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function _d(n) {
    n === void 0 && (n = {});
    var t = n,
      e = t.defaultModifiers,
      r = e === void 0 ? [] : e,
      i = t.defaultOptions,
      s = i === void 0 ? Yu : i;
    return function (a, l, u) {
      u === void 0 && (u = s);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Yu, s),
          modifiersData: {},
          elements: { reference: a, popper: l },
          attributes: {},
          styles: {},
        },
        p = [],
        g = !1,
        f = {
          state: c,
          setOptions: function (b) {
            var w = typeof b == "function" ? b(c.options) : b;
            d(),
              (c.options = Object.assign({}, s, c.options, w)),
              (c.scrollParents = {
                reference: gi(a)
                  ? In(a)
                  : a.contextElement
                  ? In(a.contextElement)
                  : [],
                popper: In(l),
              });
            var S = dd(gd([].concat(r, c.options.modifiers)));
            return (
              (c.orderedModifiers = S.filter(function (h) {
                return h.enabled;
              })),
              _(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!g) {
              var b = c.elements,
                w = b.reference,
                S = b.popper;
              if (Uu(w, S)) {
                (c.rects = {
                  reference: fd(w, Ln(S), c.options.strategy === "fixed"),
                  popper: ra(S),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (C) {
                    return (c.modifiersData[C.name] = Object.assign(
                      {},
                      C.data
                    ));
                  });
                for (var h = 0; h < c.orderedModifiers.length; h++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (h = -1);
                    continue;
                  }
                  var v = c.orderedModifiers[h],
                    y = v.fn,
                    T = v.options,
                    A = T === void 0 ? {} : T,
                    E = v.name;
                  typeof y == "function" &&
                    (c =
                      y({ state: c, options: A, name: E, instance: f }) || c);
                }
              }
            }
          },
          update: pd(function () {
            return new Promise(function (m) {
              f.forceUpdate(), m(c);
            });
          }),
          destroy: function () {
            d(), (g = !0);
          },
        };
      if (!Uu(a, l)) return f;
      f.setOptions(u).then(function (m) {
        !g && u.onFirstUpdate && u.onFirstUpdate(m);
      });
      function _() {
        c.orderedModifiers.forEach(function (m) {
          var b = m.name,
            w = m.options,
            S = w === void 0 ? {} : w,
            h = m.effect;
          if (typeof h == "function") {
            var v = h({ state: c, name: b, instance: f, options: S }),
              y = function () {};
            p.push(v || y);
          }
        });
      }
      function d() {
        p.forEach(function (m) {
          return m();
        }),
          (p = []);
      }
      return f;
    };
  }
  var md = [Wh, nd, Fh, Mu, rd, Zh, ad, Lh, Jh],
    vd = _d({ defaultModifiers: md }),
    yd = "tippy-box",
    ju = "tippy-content",
    wd = "tippy-backdrop",
    Gu = "tippy-arrow",
    Ku = "tippy-svg-arrow",
    mi = { passive: !0, capture: !0 },
    Zu = function () {
      return document.body;
    };
  function la(n, t, e) {
    if (Array.isArray(n)) {
      var r = n[t];
      return r == null ? (Array.isArray(e) ? e[t] : e) : r;
    }
    return n;
  }
  function ua(n, t) {
    var e = {}.toString.call(n);
    return e.indexOf("[object") === 0 && e.indexOf(t + "]") > -1;
  }
  function Qu(n, t) {
    return typeof n == "function" ? n.apply(void 0, t) : n;
  }
  function Ju(n, t) {
    if (t === 0) return n;
    var e;
    return function (r) {
      clearTimeout(e),
        (e = setTimeout(function () {
          n(r);
        }, t));
    };
  }
  function bd(n) {
    return n.split(/\s+/).filter(Boolean);
  }
  function ji(n) {
    return [].concat(n);
  }
  function tc(n, t) {
    n.indexOf(t) === -1 && n.push(t);
  }
  function xd(n) {
    return n.filter(function (t, e) {
      return n.indexOf(t) === e;
    });
  }
  function Td(n) {
    return n.split("-")[0];
  }
  function Ds(n) {
    return [].slice.call(n);
  }
  function ec(n) {
    return Object.keys(n).reduce(function (t, e) {
      return n[e] !== void 0 && (t[e] = n[e]), t;
    }, {});
  }
  function Fn() {
    return document.createElement("div");
  }
  function Ms(n) {
    return ["Element", "Fragment"].some(function (t) {
      return ua(n, t);
    });
  }
  function Sd(n) {
    return ua(n, "NodeList");
  }
  function Ad(n) {
    return ua(n, "MouseEvent");
  }
  function Ed(n) {
    return !!(n && n._tippy && n._tippy.reference === n);
  }
  function Od(n) {
    return Ms(n)
      ? [n]
      : Sd(n)
      ? Ds(n)
      : Array.isArray(n)
      ? n
      : Ds(document.querySelectorAll(n));
  }
  function ca(n, t) {
    n.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function rc(n, t) {
    n.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function Cd(n) {
    var t,
      e = ji(n),
      r = e[0];
    return r != null && (t = r.ownerDocument) != null && t.body
      ? r.ownerDocument
      : document;
  }
  function Pd(n, t) {
    var e = t.clientX,
      r = t.clientY;
    return n.every(function (i) {
      var s = i.popperRect,
        o = i.popperState,
        a = i.props,
        l = a.interactiveBorder,
        u = Td(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var p = u === "bottom" ? c.top.y : 0,
        g = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        _ = u === "left" ? c.right.x : 0,
        d = s.top - r + p > l,
        m = r - s.bottom - g > l,
        b = s.left - e + f > l,
        w = e - s.right - _ > l;
      return d || m || b || w;
    });
  }
  function fa(n, t, e) {
    var r = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (i) {
      n[r](i, e);
    });
  }
  function ic(n, t) {
    for (var e = t; e; ) {
      var r;
      if (n.contains(e)) return !0;
      e =
        e.getRootNode == null || (r = e.getRootNode()) == null
          ? void 0
          : r.host;
    }
    return !1;
  }
  var Tr = { isTouch: !1 },
    nc = 0;
  function kd() {
    Tr.isTouch ||
      ((Tr.isTouch = !0),
      window.performance && document.addEventListener("mousemove", sc));
  }
  function sc() {
    var n = performance.now();
    n - nc < 20 &&
      ((Tr.isTouch = !1), document.removeEventListener("mousemove", sc)),
      (nc = n);
  }
  function Dd() {
    var n = document.activeElement;
    if (Ed(n)) {
      var t = n._tippy;
      n.blur && !t.state.isVisible && n.blur();
    }
  }
  function Md() {
    document.addEventListener("touchstart", kd, mi),
      window.addEventListener("blur", Dd);
  }
  var Rd = typeof window != "undefined" && typeof document != "undefined",
    Ld = Rd ? !!window.msCrypto : !1,
    Nd = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Id = {
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
    ur = Object.assign(
      {
        appendTo: Zu,
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
      Nd,
      Id
    ),
    zd = Object.keys(ur),
    Fd = function (t) {
      var e = Object.keys(t);
      e.forEach(function (r) {
        ur[r] = t[r];
      });
    };
  function oc(n) {
    var t = n.plugins || [],
      e = t.reduce(function (r, i) {
        var s = i.name,
          o = i.defaultValue;
        if (s) {
          var a;
          r[s] = n[s] !== void 0 ? n[s] : (a = ur[s]) != null ? a : o;
        }
        return r;
      }, {});
    return Object.assign({}, n, e);
  }
  function Bd(n, t) {
    var e = t ? Object.keys(oc(Object.assign({}, ur, { plugins: t }))) : zd,
      r = e.reduce(function (i, s) {
        var o = (n.getAttribute("data-tippy-" + s) || "").trim();
        if (!o) return i;
        if (s === "content") i[s] = o;
        else
          try {
            i[s] = JSON.parse(o);
          } catch (a) {
            i[s] = o;
          }
        return i;
      }, {});
    return r;
  }
  function ac(n, t) {
    var e = Object.assign(
      {},
      t,
      { content: Qu(t.content, [n]) },
      t.ignoreAttributes ? {} : Bd(n, t.plugins)
    );
    return (
      (e.aria = Object.assign({}, ur.aria, e.aria)),
      (e.aria = {
        expanded: e.aria.expanded === "auto" ? t.interactive : e.aria.expanded,
        content:
          e.aria.content === "auto"
            ? t.interactive
              ? null
              : "describedby"
            : e.aria.content,
      }),
      e
    );
  }
  var Wd = function () {
    return "innerHTML";
  };
  function ha(n, t) {
    n[Wd()] = t;
  }
  function lc(n) {
    var t = Fn();
    return (
      n === !0
        ? (t.className = Gu)
        : ((t.className = Ku), Ms(n) ? t.appendChild(n) : ha(t, n)),
      t
    );
  }
  function uc(n, t) {
    Ms(t.content)
      ? (ha(n, ""), n.appendChild(t.content))
      : typeof t.content != "function" &&
        (t.allowHTML ? ha(n, t.content) : (n.textContent = t.content));
  }
  function da(n) {
    var t = n.firstElementChild,
      e = Ds(t.children);
    return {
      box: t,
      content: e.find(function (r) {
        return r.classList.contains(ju);
      }),
      arrow: e.find(function (r) {
        return r.classList.contains(Gu) || r.classList.contains(Ku);
      }),
      backdrop: e.find(function (r) {
        return r.classList.contains(wd);
      }),
    };
  }
  function cc(n) {
    var t = Fn(),
      e = Fn();
    (e.className = yd),
      e.setAttribute("data-state", "hidden"),
      e.setAttribute("tabindex", "-1");
    var r = Fn();
    (r.className = ju),
      r.setAttribute("data-state", "hidden"),
      uc(r, n.props),
      t.appendChild(e),
      e.appendChild(r),
      i(n.props, n.props);
    function i(s, o) {
      var a = da(t),
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
          uc(u, n.props),
        o.arrow
          ? c
            ? s.arrow !== o.arrow &&
              (l.removeChild(c), l.appendChild(lc(o.arrow)))
            : l.appendChild(lc(o.arrow))
          : c && l.removeChild(c);
    }
    return { popper: t, onUpdate: i };
  }
  cc.$$tippy = !0;
  var qd = 1,
    Rs = [],
    pa = [];
  function Hd(n, t) {
    var e = ac(n, Object.assign({}, ur, oc(ec(t)))),
      r,
      i,
      s,
      o = !1,
      a = !1,
      l = !1,
      u = !1,
      c,
      p,
      g,
      f = [],
      _ = Ju(bt, e.interactiveDebounce),
      d,
      m = qd++,
      b = null,
      w = xd(e.plugins),
      S = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1,
      },
      h = {
        id: m,
        reference: n,
        popper: Fn(),
        popperInstance: b,
        props: e,
        state: S,
        plugins: w,
        clearDelayTimeouts: Ke,
        setProps: xt,
        setContent: ge,
        show: ze,
        hide: cr,
        hideWithInteractivity: vi,
        enable: Ge,
        disable: Pt,
        unmount: Lt,
        destroy: Gi,
      };
    if (!e.render) return h;
    var v = e.render(h),
      y = v.popper,
      T = v.onUpdate;
    y.setAttribute("data-tippy-root", ""),
      (y.id = "tippy-" + h.id),
      (h.popper = y),
      (n._tippy = h),
      (y._tippy = h);
    var A = w.map(function (P) {
        return P.fn(h);
      }),
      E = n.hasAttribute("aria-expanded");
    return (
      Rt(),
      x(),
      M(),
      W("onCreate", [h]),
      e.showOnCreate && Oe(),
      y.addEventListener("mouseenter", function () {
        h.props.interactive && h.state.isVisible && h.clearDelayTimeouts();
      }),
      y.addEventListener("mouseleave", function () {
        h.props.interactive &&
          h.props.trigger.indexOf("mouseenter") >= 0 &&
          F().addEventListener("mousemove", _);
      }),
      h
    );
    function C() {
      var P = h.props.touch;
      return Array.isArray(P) ? P : [P, 0];
    }
    function L() {
      return C()[0] === "hold";
    }
    function k() {
      var P;
      return !!((P = h.props.render) != null && P.$$tippy);
    }
    function D() {
      return d || n;
    }
    function F() {
      var P = D().parentNode;
      return P ? Cd(P) : document;
    }
    function B() {
      return da(y);
    }
    function z(P) {
      return (h.state.isMounted && !h.state.isVisible) ||
        Tr.isTouch ||
        (c && c.type === "focus")
        ? 0
        : la(h.props.delay, P ? 0 : 1, ur.delay);
    }
    function M(P) {
      P === void 0 && (P = !1),
        (y.style.pointerEvents = h.props.interactive && !P ? "" : "none"),
        (y.style.zIndex = "" + h.props.zIndex);
    }
    function W(P, N, V) {
      if (
        (V === void 0 && (V = !0),
        A.forEach(function (J) {
          J[P] && J[P].apply(J, N);
        }),
        V)
      ) {
        var nt;
        (nt = h.props)[P].apply(nt, N);
      }
    }
    function X() {
      var P = h.props.aria;
      if (P.content) {
        var N = "aria-" + P.content,
          V = y.id,
          nt = ji(h.props.triggerTarget || n);
        nt.forEach(function (J) {
          var $ = J.getAttribute(N);
          if (h.state.isVisible) J.setAttribute(N, $ ? $ + " " + V : V);
          else {
            var Ht = $ && $.replace(V, "").trim();
            Ht ? J.setAttribute(N, Ht) : J.removeAttribute(N);
          }
        });
      }
    }
    function x() {
      if (!(E || !h.props.aria.expanded)) {
        var P = ji(h.props.triggerTarget || n);
        P.forEach(function (N) {
          h.props.interactive
            ? N.setAttribute(
                "aria-expanded",
                h.state.isVisible && N === D() ? "true" : "false"
              )
            : N.removeAttribute("aria-expanded");
        });
      }
    }
    function G() {
      F().removeEventListener("mousemove", _),
        (Rs = Rs.filter(function (P) {
          return P !== _;
        }));
    }
    function st(P) {
      if (!(Tr.isTouch && (l || P.type === "mousedown"))) {
        var N = (P.composedPath && P.composedPath()[0]) || P.target;
        if (!(h.props.interactive && ic(y, N))) {
          if (
            ji(h.props.triggerTarget || n).some(function (V) {
              return ic(V, N);
            })
          ) {
            if (
              Tr.isTouch ||
              (h.state.isVisible && h.props.trigger.indexOf("click") >= 0)
            )
              return;
          } else W("onClickOutside", [h, P]);
          h.props.hideOnClick === !0 &&
            (h.clearDelayTimeouts(),
            h.hide(),
            (a = !0),
            setTimeout(function () {
              a = !1;
            }),
            h.state.isMounted || wt());
        }
      }
    }
    function gt() {
      l = !0;
    }
    function at() {
      l = !1;
    }
    function ht() {
      var P = F();
      P.addEventListener("mousedown", st, !0),
        P.addEventListener("touchend", st, mi),
        P.addEventListener("touchstart", at, mi),
        P.addEventListener("touchmove", gt, mi);
    }
    function wt() {
      var P = F();
      P.removeEventListener("mousedown", st, !0),
        P.removeEventListener("touchend", st, mi),
        P.removeEventListener("touchstart", at, mi),
        P.removeEventListener("touchmove", gt, mi);
    }
    function _t(P, N) {
      Ct(P, function () {
        !h.state.isVisible && y.parentNode && y.parentNode.contains(y) && N();
      });
    }
    function Tt(P, N) {
      Ct(P, N);
    }
    function Ct(P, N) {
      var V = B().box;
      function nt(J) {
        J.target === V && (fa(V, "remove", nt), N());
      }
      if (P === 0) return N();
      fa(V, "remove", p), fa(V, "add", nt), (p = nt);
    }
    function oe(P, N, V) {
      V === void 0 && (V = !1);
      var nt = ji(h.props.triggerTarget || n);
      nt.forEach(function (J) {
        J.addEventListener(P, N, V),
          f.push({ node: J, eventType: P, handler: N, options: V });
      });
    }
    function Rt() {
      L() &&
        (oe("touchstart", et, { passive: !0 }),
        oe("touchend", Yt, { passive: !0 })),
        bd(h.props.trigger).forEach(function (P) {
          if (P !== "manual")
            switch ((oe(P, et), P)) {
              case "mouseenter":
                oe("mouseleave", Yt);
                break;
              case "focus":
                oe(Ld ? "focusout" : "blur", Ut);
                break;
              case "focusin":
                oe("focusout", Ut);
                break;
            }
        });
    }
    function $t() {
      f.forEach(function (P) {
        var N = P.node,
          V = P.eventType,
          nt = P.handler,
          J = P.options;
        N.removeEventListener(V, nt, J);
      }),
        (f = []);
    }
    function et(P) {
      var N,
        V = !1;
      if (!(!h.state.isEnabled || O(P) || a)) {
        var nt = ((N = c) == null ? void 0 : N.type) === "focus";
        (c = P),
          (d = P.currentTarget),
          x(),
          !h.state.isVisible &&
            Ad(P) &&
            Rs.forEach(function (J) {
              return J(P);
            }),
          P.type === "click" &&
          (h.props.trigger.indexOf("mouseenter") < 0 || o) &&
          h.props.hideOnClick !== !1 &&
          h.state.isVisible
            ? (V = !0)
            : Oe(P),
          P.type === "click" && (o = !V),
          V && !nt && pe(P);
      }
    }
    function bt(P) {
      var N = P.target,
        V = D().contains(N) || y.contains(N);
      if (!(P.type === "mousemove" && V)) {
        var nt = ut()
          .concat(y)
          .map(function (J) {
            var $,
              Ht = J._tippy,
              ee = ($ = Ht.popperInstance) == null ? void 0 : $.state;
            return ee
              ? {
                  popperRect: J.getBoundingClientRect(),
                  popperState: ee,
                  props: e,
                }
              : null;
          })
          .filter(Boolean);
        Pd(nt, P) && (G(), pe(P));
      }
    }
    function Yt(P) {
      var N = O(P) || (h.props.trigger.indexOf("click") >= 0 && o);
      if (!N) {
        if (h.props.interactive) {
          h.hideWithInteractivity(P);
          return;
        }
        pe(P);
      }
    }
    function Ut(P) {
      (h.props.trigger.indexOf("focusin") < 0 && P.target !== D()) ||
        (h.props.interactive &&
          P.relatedTarget &&
          y.contains(P.relatedTarget)) ||
        pe(P);
    }
    function O(P) {
      return Tr.isTouch ? L() !== P.type.indexOf("touch") >= 0 : !1;
    }
    function Jt() {
      Ie();
      var P = h.props,
        N = P.popperOptions,
        V = P.placement,
        nt = P.offset,
        J = P.getReferenceClientRect,
        $ = P.moveTransition,
        Ht = k() ? da(y).arrow : null,
        ee = J
          ? {
              getBoundingClientRect: J,
              contextElement: J.contextElement || D(),
            }
          : n,
        Fe = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (hr) {
            var _e = hr.state;
            if (k()) {
              var yi = B(),
                U = yi.box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                H
              ) {
                H === "placement"
                  ? U.setAttribute("data-placement", _e.placement)
                  : _e.attributes.popper["data-popper-" + H]
                  ? U.setAttribute("data-" + H, "")
                  : U.removeAttribute("data-" + H);
              }),
                (_e.attributes.popper = {});
            }
          },
        },
        jt = [
          { name: "offset", options: { offset: nt } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !$ } },
          Fe,
        ];
      k() &&
        Ht &&
        jt.push({ name: "arrow", options: { element: Ht, padding: 3 } }),
        jt.push.apply(jt, (N == null ? void 0 : N.modifiers) || []),
        (h.popperInstance = vd(
          ee,
          y,
          Object.assign({}, N, {
            placement: V,
            onFirstUpdate: g,
            modifiers: jt,
          })
        ));
    }
    function Ie() {
      h.popperInstance &&
        (h.popperInstance.destroy(), (h.popperInstance = null));
    }
    function te() {
      var P = h.props.appendTo,
        N,
        V = D();
      (h.props.interactive && P === Zu) || P === "parent"
        ? (N = V.parentNode)
        : (N = Qu(P, [V])),
        N.contains(y) || N.appendChild(y),
        (h.state.isMounted = !0),
        Jt();
    }
    function ut() {
      return Ds(y.querySelectorAll("[data-tippy-root]"));
    }
    function Oe(P) {
      h.clearDelayTimeouts(), P && W("onTrigger", [h, P]), ht();
      var N = z(!0),
        V = C(),
        nt = V[0],
        J = V[1];
      Tr.isTouch && nt === "hold" && J && (N = J),
        N
          ? (r = setTimeout(function () {
              h.show();
            }, N))
          : h.show();
    }
    function pe(P) {
      if (
        (h.clearDelayTimeouts(), W("onUntrigger", [h, P]), !h.state.isVisible)
      ) {
        wt();
        return;
      }
      if (
        !(
          h.props.trigger.indexOf("mouseenter") >= 0 &&
          h.props.trigger.indexOf("click") >= 0 &&
          ["mouseleave", "mousemove"].indexOf(P.type) >= 0 &&
          o
        )
      ) {
        var N = z(!1);
        N
          ? (i = setTimeout(function () {
              h.state.isVisible && h.hide();
            }, N))
          : (s = requestAnimationFrame(function () {
              h.hide();
            }));
      }
    }
    function Ge() {
      h.state.isEnabled = !0;
    }
    function Pt() {
      h.hide(), (h.state.isEnabled = !1);
    }
    function Ke() {
      clearTimeout(r), clearTimeout(i), cancelAnimationFrame(s);
    }
    function xt(P) {
      if (!h.state.isDestroyed) {
        W("onBeforeUpdate", [h, P]), $t();
        var N = h.props,
          V = ac(n, Object.assign({}, N, ec(P), { ignoreAttributes: !0 }));
        (h.props = V),
          Rt(),
          N.interactiveDebounce !== V.interactiveDebounce &&
            (G(), (_ = Ju(bt, V.interactiveDebounce))),
          N.triggerTarget && !V.triggerTarget
            ? ji(N.triggerTarget).forEach(function (nt) {
                nt.removeAttribute("aria-expanded");
              })
            : V.triggerTarget && n.removeAttribute("aria-expanded"),
          x(),
          M(),
          T && T(N, V),
          h.popperInstance &&
            (Jt(),
            ut().forEach(function (nt) {
              requestAnimationFrame(nt._tippy.popperInstance.forceUpdate);
            })),
          W("onAfterUpdate", [h, P]);
      }
    }
    function ge(P) {
      h.setProps({ content: P });
    }
    function ze() {
      var P = h.state.isVisible,
        N = h.state.isDestroyed,
        V = !h.state.isEnabled,
        nt = Tr.isTouch && !h.props.touch,
        J = la(h.props.duration, 0, ur.duration);
      if (
        !(P || N || V || nt) &&
        !D().hasAttribute("disabled") &&
        (W("onShow", [h], !1), h.props.onShow(h) !== !1)
      ) {
        if (
          ((h.state.isVisible = !0),
          k() && (y.style.visibility = "visible"),
          M(),
          ht(),
          h.state.isMounted || (y.style.transition = "none"),
          k())
        ) {
          var $ = B(),
            Ht = $.box,
            ee = $.content;
          ca([Ht, ee], 0);
        }
        (g = function () {
          var jt;
          if (!(!h.state.isVisible || u)) {
            if (
              ((u = !0),
              y.offsetHeight,
              (y.style.transition = h.props.moveTransition),
              k() && h.props.animation)
            ) {
              var fr = B(),
                hr = fr.box,
                _e = fr.content;
              ca([hr, _e], J), rc([hr, _e], "visible");
            }
            X(),
              x(),
              tc(pa, h),
              (jt = h.popperInstance) == null || jt.forceUpdate(),
              W("onMount", [h]),
              h.props.animation &&
                k() &&
                Tt(J, function () {
                  (h.state.isShown = !0), W("onShown", [h]);
                });
          }
        }),
          te();
      }
    }
    function cr() {
      var P = !h.state.isVisible,
        N = h.state.isDestroyed,
        V = !h.state.isEnabled,
        nt = la(h.props.duration, 1, ur.duration);
      if (!(P || N || V) && (W("onHide", [h], !1), h.props.onHide(h) !== !1)) {
        if (
          ((h.state.isVisible = !1),
          (h.state.isShown = !1),
          (u = !1),
          (o = !1),
          k() && (y.style.visibility = "hidden"),
          G(),
          wt(),
          M(!0),
          k())
        ) {
          var J = B(),
            $ = J.box,
            Ht = J.content;
          h.props.animation && (ca([$, Ht], nt), rc([$, Ht], "hidden"));
        }
        X(), x(), h.props.animation ? k() && _t(nt, h.unmount) : h.unmount();
      }
    }
    function vi(P) {
      F().addEventListener("mousemove", _), tc(Rs, _), _(P);
    }
    function Lt() {
      h.state.isVisible && h.hide(),
        h.state.isMounted &&
          (Ie(),
          ut().forEach(function (P) {
            P._tippy.unmount();
          }),
          y.parentNode && y.parentNode.removeChild(y),
          (pa = pa.filter(function (P) {
            return P !== h;
          })),
          (h.state.isMounted = !1),
          W("onHidden", [h]));
    }
    function Gi() {
      h.state.isDestroyed ||
        (h.clearDelayTimeouts(),
        h.unmount(),
        $t(),
        delete n._tippy,
        (h.state.isDestroyed = !0),
        W("onDestroy", [h]));
    }
  }
  function Bn(n, t) {
    t === void 0 && (t = {});
    var e = ur.plugins.concat(t.plugins || []);
    Md();
    var r = Object.assign({}, t, { plugins: e }),
      i = Od(n),
      s = i.reduce(function (o, a) {
        var l = a && Hd(a, r);
        return l && o.push(l), o;
      }, []);
    return Ms(n) ? s[0] : s;
  }
  (Bn.defaultProps = ur),
    (Bn.setDefaultProps = Fd),
    (Bn.currentInput = Tr),
    Object.assign({}, Mu, {
      effect: function (t) {
        var e = t.state,
          r = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(e.elements.popper.style, r.popper),
          (e.styles = r),
          e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow);
      },
    }),
    Bn.setDefaultProps({ render: cc });
  const Xd = () => {
      document.querySelectorAll("[data-tooltip]").forEach((t) => {
        Bn(t, {
          content: t.getAttribute("data-tooltip"),
          placement: "right",
          animation: "shift-away",
          arrow: !1,
          theme: "hm-tooltip",
          interactive: !0,
        });
      });
    },
    Vd = () => {
      Xd();
    },
    fc = () => {
      sh(), ah(), uh(), fh(), dh(), Vd();
    },
    hc = (n) => document.querySelector(n),
    $d = (n) => document.querySelectorAll(n),
    Yd = (n, t) => n.classList.add(t),
    Ud = {
      home: fc,
      about: () => {
        $d(".team-member").forEach((t) => {
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
        const n = hc(".contact-form");
        n &&
          n.addEventListener("submit", (t) => {
            t.preventDefault(), console.log("Form submitted!");
          });
      },
      "extra-page": fc,
    },
    jd = () => {
      const n = document.body.dataset.route,
        t = Ud[n];
      t ? t() : console.log(`No specific script for route: ${n}`);
    },
    Gd = () => {
      const n = document.querySelector(".page_header");
      document.querySelector(".page_navigation"),
        document.querySelector(".page_nav_contain"),
        document.querySelector("[page-nav='size']"),
        document.querySelector("[page-nav='main']"),
        document.querySelector("[page-nav='brand']");
      const t = document.querySelectorAll("[nav-menu-dropdown]"),
        e = document.querySelectorAll("[nav-menu-item]"),
        r = document.querySelector("[nav-menu='shadow-main']");
      document.querySelector("[nav-menu='shadow-wrap']");
      const i = document.querySelector("[nav-menu='shadow-menu']"),
        s = document.querySelector("[nav-menu='shadow-card']");
      n.offsetWidth, r.offsetWidth;
      const o = new Map();
      e.forEach((b) => {
        const w = b.getBoundingClientRect();
        o.set(b, { width: w.width, height: w.height });
      }),
        (() => {
          const b = t[0];
          if (b) {
            const w = b.getAttribute("nav-menu-dropdown"),
              S = document.querySelector(`[nav-menu-item='${w}']`);
            if (S) {
              const h = b.getBoundingClientRect(),
                v = i.getBoundingClientRect(),
                y = o.get(S);
              if (y) {
                const T = v.left + v.width / 2,
                  E = h.left + h.width / 2 - T,
                  C = y.height + 20,
                  L = y.width + 20;
                s.style.setProperty("--siteMenuTranslateX", `${E}px`),
                  s.style.setProperty("--siteMenuHeight", `${C}px`),
                  s.style.setProperty("--siteMenuWidth", `${L}px`);
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
      const p = (b) => {
          const w = Array.from(e),
            S = w.indexOf(b);
          w.forEach((h, v) => {
            v < S
              ? h.setAttribute("pos", "left")
              : v === S
              ? h.setAttribute("pos", "active")
              : h.setAttribute("pos", "right"),
              h === b
                ? h.setAttribute("status", "active")
                : h.setAttribute("status", "inactive");
          });
        },
        g = (b, w) => {
          u && (clearTimeout(u), (u = null)), c !== b && ((c = b), d(b, w));
        },
        f = () => {
          u = setTimeout(() => {
            n.setAttribute("dropdown-vis", "non-visible"),
              s.setAttribute("vis", "non-visible"),
              (c = null),
              (u = null);
          }, 100);
        },
        _ = (b, w) => {
          const S = w.bottom;
          return b >= S && b <= S + l;
        },
        d = (b, w) => {
          const S = i.getBoundingClientRect(),
            h = b.getBoundingClientRect(),
            v = o.get(w);
          if (!v) {
            console.warn("No original dimensions found for menu item:", w);
            return;
          }
          const y = S.left + S.width / 2,
            T = h.left + h.width / 2,
            A = v.height + 20,
            E = v.width + 20,
            C = T - y;
          s.style.setProperty("--siteMenuTranslateX", `${C}px`),
            s.style.setProperty("--siteMenuHeight", `${A}px`),
            s.style.setProperty("--siteMenuWidth", `${E}px`),
            s.setAttribute("vis", "visible"),
            n.setAttribute("dropdown-vis", "visible"),
            p(w);
        },
        m = (b) => {
          if (!c) return;
          const w = c.getBoundingClientRect(),
            S = s.getBoundingClientRect(),
            h = b.clientX,
            v = b.clientY,
            y = h >= w.left && h <= w.right && v >= w.top && v <= w.bottom,
            T = h >= S.left && h <= S.right && v >= S.top && v <= S.bottom,
            A =
              _(v, w) &&
              h >= Math.min(w.left, S.left) &&
              h <= Math.max(w.right, S.right);
          y || T || A ? u && (clearTimeout(u), (u = null)) : u || f();
        };
      document.addEventListener("mousemove", m),
        t.forEach((b) => {
          const w = b.getAttribute("nav-menu-dropdown"),
            S = document.querySelector(`[nav-menu-item='${w}']`);
          S
            ? b.addEventListener("mouseenter", () => {
                g(b, S);
              })
            : console.warn(
                `No corresponding menu item found for dropdown: ${w}`
              );
        }),
        s.addEventListener("mouseenter", () => {
          u && (clearTimeout(u), (u = null));
        }),
        s.addEventListener("mouseleave", () => {
          f();
        });
    },
    Kd = () => {
      Gd();
    },
    Zd = () => {
      const n = document.querySelector(".page_nav_size"),
        t = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (n.classList.add("is--active"), t.classList.add("is--active"))
          : (n.classList.remove("is--active"),
            t.classList.remove("is--active"));
      });
    },
    Qd = () => {
      Zd();
    },
    Jd = () => {
      const n = document.querySelectorAll('[nav-accordion="item"]'),
        t = Array.from(n).map((e) => ({
          item: e,
          trigger: e.querySelector('[nav-accordion="trigger"]'),
          content: e.querySelector('[nav-accordion="content"]'),
          icon: e.querySelector('[nav-accordion="icon"]'),
          links: e.querySelectorAll('[nav-accordion="link"]'),
          line: e.querySelector('[nav-accordion="line"]'),
        }));
      t.forEach(
        ({ item: e, trigger: r, content: i, icon: s, links: o, line: a }) => {
          r.addEventListener("click", () => {
            const l = e.classList.contains("is--open");
            t.forEach(
              ({
                item: u,
                content: c,
                icon: p,
                links: g,
                trigger: f,
                line: _,
              }) => {
                u.classList.remove("is--open"),
                  p.classList.remove("is--open"),
                  f.classList.remove("is--open"),
                  j.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  j.to(p, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  j.to(_, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  g.forEach((d) => d.classList.remove("is--open")),
                  j.to(g, {
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
                (e.classList.add("is--open"),
                s.classList.add("is--open"),
                r.classList.add("is--open"),
                j.to(i, { height: "auto", duration: 0.5, ease: "power3.out" }),
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
    tp = () => Jd(),
    ep = () => {
      const n = document.querySelectorAll('[nav-menu="trigger"]'),
        t = document.querySelectorAll('[nav-menu="open-icon"]'),
        e = document.querySelectorAll('[nav-menu="close-icon"]'),
        r = document.querySelectorAll('[nav-accordion="item"]'),
        i = document.querySelector('[nav-menu="menu"]'),
        s = document.querySelector('[nav-menu="component"]'),
        o = document.querySelector('[nav-menu="logo"]');
      o.querySelector('[nav-menu="logo-icon"]');
      const a = o.querySelector('[nav-menu="logo-text"]');
      let l = !1;
      const u = "is--active",
        c = "is--inactive",
        p = () => {
          n.forEach((w) => {
            w.setAttribute("aria-controls", "main-nav-menu"),
              w.setAttribute("aria-expanded", "false");
          }),
            t.forEach((w) => {
              w.setAttribute("aria-label", "Open navigation menu");
            }),
            e.forEach((w) => {
              w.setAttribute("aria-label", "Close navigation menu");
            }),
            i &&
              (i.setAttribute("id", "main-nav-menu"),
              i.setAttribute("aria-label", "Main navigation menu")),
            s && s.setAttribute("role", "navigation");
        },
        g = (w, S) => {
          [...n, ...t, ...e, ...r, s].filter(Boolean).forEach((v) => {
            v.classList.add(w), v.classList.remove(S);
          });
        },
        f = (w) => {
          n.forEach((S) => {
            S.setAttribute("aria-expanded", w ? "true" : "false");
          });
        },
        _ = () => {
          g(u, c),
            f(!0),
            j
              .timeline()
              .to(i, {
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
                e,
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
                r,
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
        d = () => {
          g(c, u),
            f(!1),
            j
              .timeline()
              .to(t, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.5,
                ease: "expo.inOut",
              })
              .to(
                e,
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
                r,
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
              i,
              {
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 1.2,
                ease: "expo.inOut",
              },
              "<0.05"
            );
        },
        m = () => {
          l ? (d(), (l = !1)) : (_(), (l = !0));
        };
      (() => {
        p(),
          n.forEach((w) => {
            w.addEventListener("click", m);
          });
      })();
    },
    rp = () => {
      ep();
    },
    ip = () => {
      Kd(), Qd(), tp(), rp();
    },
    np = () => {
      const n = hc(".example-component");
      n &&
        (Yd(n, "is-initialized"),
        n.addEventListener("click", () => {
          console.log("Example component clicked!");
        }));
    },
    sp = () => {
      np();
    };
  var op = "1.3.4";
  function dc(n, t, e) {
    return Math.max(n, Math.min(t, e));
  }
  function ap(n, t, e) {
    return (1 - e) * n + e * t;
  }
  function lp(n, t, e, r) {
    return ap(n, t, 1 - Math.exp(-e * r));
  }
  function up(n, t) {
    return ((n % t) + t) % t;
  }
  var cp = class {
    constructor() {
      q(this, "isRunning", !1);
      q(this, "value", 0);
      q(this, "from", 0);
      q(this, "to", 0);
      q(this, "currentTime", 0);
      q(this, "lerp");
      q(this, "duration");
      q(this, "easing");
      q(this, "onUpdate");
    }
    advance(n) {
      var e;
      if (!this.isRunning) return;
      let t = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const r = dc(0, this.currentTime / this.duration, 1);
        t = r >= 1;
        const i = t ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = lp(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (t = !0)))
          : ((this.value = this.to), (t = !0));
      t && this.stop(),
        (e = this.onUpdate) == null || e.call(this, this.value, t);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, t, { lerp: e, duration: r, easing: i, onStart: s, onUpdate: o }) {
      (this.from = this.value = n),
        (this.to = t),
        (this.lerp = e),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o);
    }
  };
  function fp(n, t) {
    let e;
    return function (...r) {
      let i = this;
      clearTimeout(e),
        (e = setTimeout(() => {
          (e = void 0), n.apply(i, r);
        }, t));
    };
  }
  var hp = class {
      constructor(n, t, { autoResize: e = !0, debounce: r = 250 } = {}) {
        q(this, "width", 0);
        q(this, "height", 0);
        q(this, "scrollHeight", 0);
        q(this, "scrollWidth", 0);
        q(this, "debouncedResize");
        q(this, "wrapperResizeObserver");
        q(this, "contentResizeObserver");
        q(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        q(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        q(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = t),
          e &&
            ((this.debouncedResize = fp(this.resize, r)),
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
        var n, t;
        (n = this.wrapperResizeObserver) == null || n.disconnect(),
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
    pc = class {
      constructor() {
        q(this, "events", {});
      }
      emit(n, ...t) {
        var r;
        let e = this.events[n] || [];
        for (let i = 0, s = e.length; i < s; i++)
          (r = e[i]) == null || r.call(e, ...t);
      }
      on(n, t) {
        var e;
        return (
          ((e = this.events[n]) != null && e.push(t)) || (this.events[n] = [t]),
          () => {
            var r;
            this.events[n] =
              (r = this.events[n]) == null ? void 0 : r.filter((i) => t !== i);
          }
        );
      }
      off(n, t) {
        var e;
        this.events[n] =
          (e = this.events[n]) == null ? void 0 : e.filter((r) => t !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    gc = 100 / 6,
    jr = { passive: !1 },
    dp = class {
      constructor(n, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        q(this, "touchStart", { x: 0, y: 0 });
        q(this, "lastDelta", { x: 0, y: 0 });
        q(this, "window", { width: 0, height: 0 });
        q(this, "emitter", new pc());
        q(this, "onTouchStart", (n) => {
          const { clientX: t, clientY: e } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = t),
            (this.touchStart.y = e),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        q(this, "onTouchMove", (n) => {
          const { clientX: t, clientY: e } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(e - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = e),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: n });
        });
        q(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        q(this, "onWheel", (n) => {
          let { deltaX: t, deltaY: e, deltaMode: r } = n;
          const i = r === 1 ? gc : r === 2 ? this.window.width : 1,
            s = r === 1 ? gc : r === 2 ? this.window.height : 1;
          (t *= i),
            (e *= s),
            (t *= this.options.wheelMultiplier),
            (e *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: e, event: n });
        });
        q(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = n),
          (this.options = t),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, jr),
          this.element.addEventListener("touchstart", this.onTouchStart, jr),
          this.element.addEventListener("touchmove", this.onTouchMove, jr),
          this.element.addEventListener("touchend", this.onTouchEnd, jr);
      }
      on(n, t) {
        return this.emitter.on(n, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, jr),
          this.element.removeEventListener("touchstart", this.onTouchStart, jr),
          this.element.removeEventListener("touchmove", this.onTouchMove, jr),
          this.element.removeEventListener("touchend", this.onTouchEnd, jr);
      }
    },
    _c = (n) => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
    pp = class {
      constructor({
        wrapper: n = window,
        content: t = document.documentElement,
        eventsTarget: e = n,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l,
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: p = "vertical",
        gestureOrientation: g = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: _ = 1,
        autoResize: d = !0,
        prevent: m,
        virtualScroll: b,
        overscroll: w = !0,
        autoRaf: S = !1,
        anchors: h = !1,
        autoToggle: v = !1,
        allowNestedScroll: y = !1,
        __experimental__naiveDimensions: T = !1,
      } = {}) {
        q(this, "_isScrolling", !1);
        q(this, "_isStopped", !1);
        q(this, "_isLocked", !1);
        q(this, "_preventNextNativeScrollEvent", !1);
        q(this, "_resetVelocityTimeout", null);
        q(this, "__rafID", null);
        q(this, "isTouching");
        q(this, "time", 0);
        q(this, "userData", {});
        q(this, "lastVelocity", 0);
        q(this, "velocity", 0);
        q(this, "direction", 0);
        q(this, "options");
        q(this, "targetScroll");
        q(this, "animatedScroll");
        q(this, "animate", new cp());
        q(this, "emitter", new pc());
        q(this, "dimensions");
        q(this, "virtualScroll");
        q(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        q(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        q(this, "onTransitionEnd", (n) => {
          if (n.propertyName.includes("overflow")) {
            const t = this.isHorizontal ? "overflow-x" : "overflow-y",
              e = getComputedStyle(this.rootElement)[t];
            ["hidden", "clip"].includes(e) ? this.stop() : this.start();
          }
        });
        q(this, "onClick", (n) => {
          const e = n.composedPath().find((r) => {
            var i, s, o;
            return (
              r instanceof HTMLAnchorElement &&
              (((i = r.getAttribute("href")) == null
                ? void 0
                : i.startsWith("#")) ||
                ((s = r.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((o = r.getAttribute("href")) == null
                  ? void 0
                  : o.startsWith("./#")))
            );
          });
          if (e) {
            const r = e.getAttribute("href");
            if (r) {
              const i =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              let s = `#${r.split("#")[1]}`;
              ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) &&
                (s = 0),
                this.scrollTo(s, i);
            }
          }
        });
        q(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        q(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: t, deltaY: e, event: r } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: e,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            s = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const o = t === 0 && e === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === "touchstart" &&
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
          let u = r.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((m) => {
              var b, w, S;
              return (
                m instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(m))) ||
                  ((b = m.hasAttribute) == null
                    ? void 0
                    : b.call(m, "data-lenis-prevent")) ||
                  (i &&
                    ((w = m.hasAttribute) == null
                      ? void 0
                      : w.call(m, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((S = m.hasAttribute) == null
                      ? void 0
                      : S.call(m, "data-lenis-prevent-wheel"))) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(m, { deltaX: t, deltaY: e })))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && i) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (r.lenisStopPropagation = !0);
            return;
          }
          let g = e;
          this.options.gestureOrientation === "both"
            ? (g = Math.abs(e) > Math.abs(t) ? e : t)
            : this.options.gestureOrientation === "horizontal" && (g = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && e > 0) ||
                  (this.animatedScroll === this.limit && e < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.preventDefault();
          const f = i && this.options.syncTouch,
            d = i && r.type === "touchend" && Math.abs(g) > 5;
          d && (g = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + g,
              yc(
                { programmatic: !1 },
                f
                  ? { lerp: d ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        });
        q(this, "onNativeScroll", () => {
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
            const n = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
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
        q(this, "raf", (n) => {
          const t = n - (this.time || n);
          (this.time = n),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = op),
          (!n || n === document.documentElement) && (n = window),
          typeof a == "number" && typeof l != "function"
            ? (l = _c)
            : typeof l == "function" && typeof a != "number" && (a = 1),
          (this.options = {
            wrapper: n,
            content: t,
            eventsTarget: e,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: g,
            orientation: p,
            touchMultiplier: f,
            wheelMultiplier: _,
            autoResize: d,
            prevent: m,
            virtualScroll: b,
            overscroll: w,
            autoRaf: S,
            anchors: h,
            autoToggle: v,
            allowNestedScroll: y,
            __experimental__naiveDimensions: T,
          }),
          (this.dimensions = new hp(n, t, { autoResize: d })),
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
          (this.virtualScroll = new dp(e, {
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
      on(n, t) {
        return this.emitter.on(n, t);
      }
      off(n, t) {
        return this.emitter.off(n, t);
      }
      setScroll(n) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
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
        n,
        {
          offset: t = 0,
          immediate: e = !1,
          lock: r = !1,
          duration: i = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: p,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof n == "string" && ["top", "left", "start"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let g;
            if (
              (typeof n == "string"
                ? (g = document.querySelector(n))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (g = n),
              g)
            ) {
              if (this.options.wrapper !== window) {
                const _ = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? _.left : _.top;
              }
              const f = g.getBoundingClientRect();
              n = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (((n += t), (n = Math.round(n)), this.options.infinite)) {
              if (c) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const g = n - this.animatedScroll;
                g > this.limit / 2
                  ? (n = n - this.limit)
                  : g < -this.limit / 2 && (n = n + this.limit);
              }
            } else n = dc(0, n, this.limit);
            if (n === this.targetScroll) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = p != null ? p : {}), e)) {
              (this.animatedScroll = this.targetScroll = n),
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
            c || (this.targetScroll = n),
              typeof i == "number" && typeof s != "function"
                ? (s = _c)
                : typeof s == "function" && typeof i != "number" && (i = 1),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: i,
                easing: s,
                lerp: o,
                onStart: () => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (g, f) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = g - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = g),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = g),
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
      checkNestedScroll(n, { deltaX: t, deltaY: e }) {
        var v, y;
        const r = Date.now(),
          i = (v = n._lenis) != null ? v : (n._lenis = {});
        let s, o, a, l, u, c, p, g;
        const f = this.options.gestureOrientation;
        if (r - ((y = i.time) != null ? y : 0) > 2e3) {
          i.time = Date.now();
          const T = window.getComputedStyle(n);
          i.computedStyle = T;
          const A = T.overflowX,
            E = T.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(A)),
            (o = ["auto", "overlay", "scroll"].includes(E)),
            (i.hasOverflowX = s),
            (i.hasOverflowY = o),
            (!s && !o) ||
              (f === "vertical" && !o) ||
              (f === "horizontal" && !s))
          )
            return !1;
          (u = n.scrollWidth),
            (c = n.scrollHeight),
            (p = n.clientWidth),
            (g = n.clientHeight),
            (a = u > p),
            (l = c > g),
            (i.isScrollableX = a),
            (i.isScrollableY = l),
            (i.scrollWidth = u),
            (i.scrollHeight = c),
            (i.clientWidth = p),
            (i.clientHeight = g);
        } else
          (a = i.isScrollableX),
            (l = i.isScrollableY),
            (s = i.hasOverflowX),
            (o = i.hasOverflowY),
            (u = i.scrollWidth),
            (c = i.scrollHeight),
            (p = i.clientWidth),
            (g = i.clientHeight);
        if (
          (!s && !o) ||
          (!a && !l) ||
          (f === "vertical" && (!o || !l)) ||
          (f === "horizontal" && (!s || !a))
        )
          return !1;
        let _;
        if (f === "horizontal") _ = "x";
        else if (f === "vertical") _ = "y";
        else {
          const T = t !== 0,
            A = e !== 0;
          T && s && a && (_ = "x"), A && o && l && (_ = "y");
        }
        if (!_) return !1;
        let d, m, b, w, S;
        if (_ === "x")
          (d = n.scrollLeft), (m = u - p), (b = t), (w = s), (S = a);
        else if (_ === "y")
          (d = n.scrollTop), (m = c - g), (b = e), (w = o), (S = l);
        else return !1;
        return (b > 0 ? d < m : d > 0) && w && S;
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
        const n = this.options.wrapper;
        return this.isHorizontal
          ? (t = n.scrollX) != null
            ? t
            : n.scrollLeft
          : (e = n.scrollY) != null
          ? e
          : n.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? up(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.options.autoToggle && (n += " lenis-autoToggle"),
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
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
  let ga;
  const gp = () => {
      (ga = new pp({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (n) => Math.min(1, 1.001 - Math.pow(2, -12 * n)),
        autoRaf: !0,
      })),
        ga.on("scroll", Q.update),
        j.ticker.add((n) => {
          ga.raf(n * 1e3);
        }),
        j.ticker.lagSmoothing(0);
    },
    _p = () => {
      gp();
    };
  document.addEventListener("DOMContentLoaded", () => {
    ip(), sp(), jd(), _p();
  });
});
