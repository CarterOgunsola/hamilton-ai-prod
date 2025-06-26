var Qg = Object.defineProperty;
var Jg = (Fi, et, rr) =>
  et in Fi
    ? Qg(Fi, et, { enumerable: !0, configurable: !0, writable: !0, value: rr })
    : (Fi[et] = rr);
var V = (Fi, et, rr) => Jg(Fi, typeof et != "symbol" ? et + "" : et, rr);
(function () {
  "use strict";
  var Fi = document.createElement("style");
  (Fi.textContent = `.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translate(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translate(-10px)}
/*$vite$:1*/`),
    document.head.appendChild(Fi);
  function et(r) {
    if (r === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r;
  }
  function rr(r, e) {
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
   */ var Ft = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Mr = { duration: 0.5, overwrite: !1, delay: 0 },
    to,
    tt,
    Se,
    ei = 1e8,
    me = 1 / ei,
    io = Math.PI * 2,
    pd = io / 4,
    hd = 0,
    Ga = Math.sqrt,
    md = Math.cos,
    gd = Math.sin,
    Ye = function (e) {
      return typeof e == "string";
    },
    Oe = function (e) {
      return typeof e == "function";
    },
    Li = function (e) {
      return typeof e == "number";
    },
    ro = function (e) {
      return typeof e > "u";
    },
    vi = function (e) {
      return typeof e == "object";
    },
    At = function (e) {
      return e !== !1;
    },
    no = function () {
      return typeof window < "u";
    },
    es = function (e) {
      return Oe(e) || Ye(e);
    },
    Xa =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    ot = Array.isArray,
    so = /(?:-?\.?\d|\.)+/gi,
    Ya = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    oo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ja = /[+-]=-?[.\d]+/,
    Ua = /[^,'"\[\]\s]+/gi,
    vd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    xe,
    _i,
    ao,
    lo,
    Bt = {},
    ts = {},
    Ka,
    Za = function (e) {
      return (ts = kr(e, Bt)) && Mt;
    },
    uo = function (e, t) {},
    un = function (e, t) {
      return !t && void 0;
    },
    Qa = function (e, t) {
      return (e && (Bt[e] = t) && ts && (ts[e] = t)) || Bt;
    },
    cn = function () {
      return 0;
    },
    _d = { suppressEvents: !0, isStart: !0, kill: !1 },
    is = { suppressEvents: !0, kill: !1 },
    yd = { suppressEvents: !0 },
    co = {},
    Bi = [],
    fo = {},
    Ja,
    Vt = {},
    po = {},
    el = 30,
    rs = [],
    ho = "",
    mo = function (e) {
      var t = e[0],
        i,
        n;
      if ((vi(t) || Oe(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (n = rs.length; n-- && !rs[n].targetTest(t); );
        i = rs[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new Ol(e[n], i)))) ||
          e.splice(n, 1);
      return e;
    },
    nr = function (e) {
      return e._gsap || mo(ii(e))[0]._gsap;
    },
    tl = function (e, t, i) {
      return (i = e[t]) && Oe(i)
        ? e[t]()
        : (ro(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Pt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ke = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ze = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Dr = function (e, t) {
      var i = t.charAt(0),
        n = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
      );
    },
    wd = function (e, t) {
      for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
      return n < i;
    },
    ns = function () {
      var e = Bi.length,
        t = Bi.slice(0),
        i,
        n;
      for (fo = {}, Bi.length = 0, i = 0; i < e; i++)
        (n = t[i]),
          n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
    },
    go = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    il = function (e, t, i, n) {
      Bi.length && !tt && ns(),
        e.render(t, i, !!(tt && t < 0 && go(e))),
        Bi.length && !tt && ns();
    },
    rl = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Ua).length < 2
        ? t
        : Ye(e)
        ? e.trim()
        : e;
    },
    nl = function (e) {
      return e;
    },
    qt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    bd = function (e) {
      return function (t, i) {
        for (var n in i)
          n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
      };
    },
    kr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    sl = function r(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = vi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    ss = function (e, t) {
      var i = {},
        n;
      for (n in e) n in t || (i[n] = e[n]);
      return i;
    },
    dn = function (e) {
      var t = e.parent || xe,
        i = e.keyframes ? bd(ot(e.keyframes)) : qt;
      if (At(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Sd = function (e, t) {
      for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
      return i < 0;
    },
    ol = function (e, t, i, n, s) {
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
    os = function (e, t, i, n) {
      i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = s) : e[n] === t && (e[n] = s),
        (t._next = t._prev = t.parent = null);
    },
    Vi = function (e, t) {
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
    Td = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    vo = function (e, t, i, n) {
      return (
        e._startAt &&
        (tt
          ? e._startAt.revert(is)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, n))
      );
    },
    xd = function r(e) {
      return !e || (e._ts && r(e.parent));
    },
    al = function (e) {
      return e._repeat ? Ir(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Ir = function (e, t) {
      var i = Math.floor((e = ze(e / t)));
      return e && i === e ? i - 1 : i;
    },
    as = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    ls = function (e) {
      return (e._end = ze(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || me) || 0)
      ));
    },
    us = function (e, t) {
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
          ls(e),
          i._dirty || sr(i, e)),
        e
      );
    },
    ll = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = as(e.rawTime(), t)),
          (!t._dur || pn(0, t.totalDuration(), i) - t._tTime > me) &&
            t.render(i, !0)),
        sr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -me;
      }
    },
    yi = function (e, t, i, n) {
      return (
        t.parent && Vi(t),
        (t._start = ze(
          (Li(i) ? i : i || e !== xe ? ti(e, i, t) : e._time) + t._delay
        )),
        (t._end = ze(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ol(e, t, "_first", "_last", e._sort ? "_start" : 0),
        _o(t) || (e._recent = t),
        n || ll(e, t),
        e._ts < 0 && us(e, e._tTime),
        e
      );
    },
    ul = function (e, t) {
      return (
        (Bt.ScrollTrigger || uo("scrollTrigger", t)) &&
        Bt.ScrollTrigger.create(t, e)
      );
    },
    cl = function (e, t, i, n, s) {
      if ((Ao(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !tt &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Ja !== Ht.frame
      )
        return Bi.push(e), (e._lazy = [s, n]), 1;
    },
    Cd = function r(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
    },
    _o = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Ed = function (e, t, i, n) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && Cd(e) && !(!e._initted && _o(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !_o(e))))
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
          (c = Ir(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== Ir(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || tt || n || e._zTime === me || (!t && e._zTime))
      ) {
        if (!e._initted && cl(e, t, n, i, l)) return;
        for (
          d = e._zTime,
            e._zTime = t || (i ? me : 0),
            i || (i = t && !d),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && vo(e, t, i, !0),
          e._onUpdate && !i && $t(e, "onUpdate"),
          l && e._repeat && !i && e.parent && $t(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Vi(e, 1),
            !i &&
              !tt &&
              ($t(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Ad = function (e, t, i) {
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
    Rr = function (e, t, i, n) {
      var s = e._repeat,
        o = ze(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !n && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : ze(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !n && us(e, (e._tTime = e._tDur * a)),
        e.parent && ls(e),
        i || sr(e.parent, e),
        e
      );
    },
    dl = function (e) {
      return e instanceof yt ? sr(e) : Rr(e, e._dur);
    },
    Pd = { _start: 0, endTime: cn, totalDuration: cn },
    ti = function r(e, t, i) {
      var n = e.labels,
        s = e._recent || Pd,
        o = e.duration() >= ei ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return Ye(t) && (isNaN(t) || t in n)
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
              u && i && (l = (l / 100) * (ot(i) ? i[0] : i).totalDuration()),
              a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    fn = function (e, t, i) {
      var n = Li(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = At(l.vars.inherit) && l.parent);
        (o.immediateRender = At(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Ne(t[0], o, t[s + 1]);
    },
    qi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    pn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    at = function (e, t) {
      return !Ye(e) || !(t = vd.exec(e)) ? "" : t[1];
    },
    Od = function (e, t, i) {
      return qi(i, function (n) {
        return pn(e, t, n);
      });
    },
    yo = [].slice,
    fl = function (e, t) {
      return (
        e &&
        vi(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && vi(e[0]))) &&
        !e.nodeType &&
        e !== _i
      );
    },
    Md = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (n) {
          var s;
          return (Ye(n) && !t) || fl(n, 1)
            ? (s = i).push.apply(s, ii(n))
            : i.push(n);
        }) || i
      );
    },
    ii = function (e, t, i) {
      return Se && !t && Se.selector
        ? Se.selector(e)
        : Ye(e) && !i && (ao || !Nr())
        ? yo.call((t || lo).querySelectorAll(e), 0)
        : ot(e)
        ? Md(e, i)
        : fl(e)
        ? yo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    wo = function (e) {
      return (
        (e = ii(e)[0] || un("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ii(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? un("Invalid scope") || lo.createElement("div")
              : e
          );
        }
      );
    },
    pl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    hl = function (e) {
      if (Oe(e)) return e;
      var t = vi(e) ? e : { each: e },
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
        Ye(n)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !a && l && ((c = n[0]), (d = n[1])),
        function (p, f, m) {
          var h = (m || t).length,
            v = o[h],
            w,
            b,
            E,
            g,
            C,
            x,
            P,
            M,
            k;
          if (!v) {
            if (((k = t.grid === "auto" ? 0 : (t.grid || [1, ei])[1]), !k)) {
              for (
                P = -ei;
                P < (P = m[k++].getBoundingClientRect().left) && k < h;

              );
              k < h && k--;
            }
            for (
              v = o[h] = [],
                w = l ? Math.min(k, h) * c - 0.5 : n % k,
                b = k === ei ? 0 : l ? (h * d) / k - 0.5 : (n / k) | 0,
                P = 0,
                M = ei,
                x = 0;
              x < h;
              x++
            )
              (E = (x % k) - w),
                (g = b - ((x / k) | 0)),
                (v[x] = C =
                  u ? Math.abs(u === "y" ? g : E) : Ga(E * E + g * g)),
                C > P && (P = C),
                C < M && (M = C);
            n === "random" && pl(v),
              (v.max = P - M),
              (v.min = M),
              (v.v = h =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (k > h
                      ? h - 1
                      : u
                      ? u === "y"
                        ? h / k
                        : k
                      : Math.max(k, h / k)) ||
                  0) * (n === "edges" ? -1 : 1)),
              (v.b = h < 0 ? s - h : s),
              (v.u = at(t.amount || t.each) || 0),
              (i = i && h < 0 ? El(i) : i);
          }
          return (
            (h = (v[p] - v.min) / v.max || 0),
            ze(v.b + (i ? i(h) : h) * v.v) + v.u
          );
        }
      );
    },
    bo = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var n = ze(Math.round(parseFloat(i) / e) * e * t);
        return (n - (n % 1)) / t + (Li(i) ? 0 : at(i));
      };
    },
    ml = function (e, t) {
      var i = ot(e),
        n,
        s;
      return (
        !i &&
          vi(e) &&
          ((n = i = e.radius || ei),
          e.values
            ? ((e = ii(e.values)), (s = !Li(e[0])) && (n *= n))
            : (e = bo(e.increment))),
        qi(
          t,
          i
            ? Oe(e)
              ? function (o) {
                  return (s = e(o)), Math.abs(s - o) <= n ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = ei,
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
                    s || c === o || Li(o) ? c : c + at(o)
                  );
                }
            : bo(e)
        )
      );
    },
    gl = function (e, t, i, n) {
      return qi(ot(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
        return ot(e)
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
    Ld = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (n) {
        return t.reduce(function (s, o) {
          return o(s);
        }, n);
      };
    },
    Dd = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || at(i));
      };
    },
    kd = function (e, t, i) {
      return _l(e, t, 0, 1, i);
    },
    vl = function (e, t, i) {
      return qi(i, function (n) {
        return e[~~t(n)];
      });
    },
    Id = function r(e, t, i) {
      var n = t - e;
      return ot(e)
        ? vl(e, r(0, e.length), t)
        : qi(i, function (s) {
            return ((n + ((s - e) % n)) % n) + e;
          });
    },
    Rd = function r(e, t, i) {
      var n = t - e,
        s = n * 2;
      return ot(e)
        ? vl(e, r(0, e.length - 1), t)
        : qi(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
          });
    },
    hn = function (e) {
      for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
        (o = e.indexOf(")", n)),
          (a = e.charAt(n + 7) === "["),
          (s = e.substr(n + 7, o - n - 7).match(a ? Ua : so)),
          (i +=
            e.substr(t, n - t) +
            gl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    _l = function (e, t, i, n, s) {
      var o = t - e,
        a = n - i;
      return qi(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    zd = function r(e, t, i, n) {
      var s = isNaN(e + t)
        ? 0
        : function (f) {
            return (1 - f) * e + f * t;
          };
      if (!s) {
        var o = Ye(e),
          a = {},
          l,
          u,
          c,
          d,
          p;
        if ((i === !0 && (n = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (ot(e) && !ot(t)) {
          for (c = [], d = e.length, p = d - 2, u = 1; u < d; u++)
            c.push(r(e[u - 1], e[u]));
          d--,
            (s = function (m) {
              m *= d;
              var h = Math.min(p, ~~m);
              return c[h](m - h);
            }),
            (i = t);
        } else n || (e = kr(ot(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Co.call(a, e, l, "get", t[l]);
          s = function (m) {
            return Mo(m, a) || (o ? e.p : e);
          };
        }
      }
      return qi(i, s);
    },
    yl = function (e, t, i) {
      var n = e.labels,
        s = ei,
        o,
        a,
        l;
      for (o in n)
        (a = n[o] - t),
          a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    $t = function (e, t, i) {
      var n = e.vars,
        s = n[t],
        o = Se,
        a = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = n[t + "Params"]),
          (u = n.callbackScope || e),
          i && Bi.length && ns(),
          a && (Se = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (Se = o),
          c
        );
    },
    mn = function (e) {
      return (
        Vi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!tt),
        e.progress() < 1 && $t(e, "onInterrupt"),
        e
      );
    },
    zr,
    wl = [],
    bl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), no() || e.headless)) {
          var t = e.name,
            i = Oe(e),
            n =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: cn,
              render: Mo,
              add: Co,
              kill: Qd,
              modifier: Zd,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Oo,
              aliases: {},
              register: 0,
            };
          if ((Nr(), e !== n)) {
            if (Vt[t]) return;
            qt(n, qt(ss(e, s), o)),
              kr(n.prototype, kr(s, ss(e, o))),
              (Vt[(n.prop = t)] = n),
              e.targetTest && (rs.push(n), (co[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Qa(t, n), e.register && e.register(Mt, n, Ot);
        } else wl.push(e);
    },
    ge = 255,
    gn = {
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
    So = function (e, t, i) {
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
    Sl = function (e, t, i) {
      var n = e ? (Li(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : gn.black,
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
              [n >> 16, (n >> 8) & ge, n & ge, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (n = [e >> 16, (e >> 8) & ge, e & ge]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((n = m = e.match(so)), !t))
            (l = (+n[0] % 360) / 360),
              (u = +n[1] / 100),
              (c = +n[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              n.length > 3 && (n[3] *= 1),
              (n[0] = So(l + 1 / 3, s, o)),
              (n[1] = So(l, s, o)),
              (n[2] = So(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (n = e.match(Ya)), i && n.length < 4 && (n[3] = 1), n;
        } else n = e.match(so) || gn.transparent;
        n = n.map(Number);
      }
      return (
        t &&
          !m &&
          ((s = n[0] / ge),
          (o = n[1] / ge),
          (a = n[2] / ge),
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
    Tl = function (e) {
      var t = [],
        i = [],
        n = -1;
      return (
        e.split($i).forEach(function (s) {
          var o = s.match(Lr) || [];
          t.push.apply(t, o), i.push((n += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    xl = function (e, t, i) {
      var n = "",
        s = (e + n).match($i),
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
            (p = Sl(p, t, 1)) &&
            o +
              (t
                ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3]
                : p.join(",")) +
              ")"
          );
        })),
        i && ((c = Tl(e)), (l = i.c), l.join(n) !== c.c.join(n)))
      )
        for (u = e.replace($i, "1").split(Lr), d = u.length - 1; a < d; a++)
          n +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split($i), d = u.length - 1; a < d; a++) n += u[a] + s[a];
      return n + u[d];
    },
    $i = (function () {
      var r =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in gn) r += "|" + e + "\\b";
      return new RegExp(r + ")", "gi");
    })(),
    Nd = /hsl[a]?\(/,
    Cl = function (e) {
      var t = e.join(" "),
        i;
      if ((($i.lastIndex = 0), $i.test(t)))
        return (
          (i = Nd.test(t)),
          (e[1] = xl(e[1], i)),
          (e[0] = xl(e[0], i, Tl(e[1]))),
          !0
        );
    },
    vn,
    Ht = (function () {
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
        m = function h(v) {
          var w = r() - n,
            b = v === !0,
            E,
            g,
            C,
            x;
          if (
            ((w > e || w < 0) && (i += w - t),
            (n += w),
            (C = n - i),
            (E = C - o),
            (E > 0 || b) &&
              ((x = ++d.frame),
              (p = C - d.time * 1e3),
              (d.time = C = C / 1e3),
              (o += E + (E >= s ? 4 : s - E)),
              (g = 1)),
            b || (l = u(h)),
            g)
          )
            for (f = 0; f < a.length; f++) a[f](C, p, x, v);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (v) {
            return p / (1e3 / (v || 60));
          },
          wake: function () {
            Ka &&
              (!ao &&
                no() &&
                ((_i = ao = window),
                (lo = _i.document || {}),
                (Bt.gsap = Mt),
                (_i.gsapVersions || (_i.gsapVersions = [])).push(Mt.version),
                Za(ts || _i.GreenSockGlobals || (!_i.gsap && _i) || {}),
                wl.forEach(bl)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (v) {
                  return setTimeout(v, (o - d.time * 1e3 + 1) | 0);
                }),
              (vn = 1),
              m(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (vn = 0), (u = cn);
          },
          lagSmoothing: function (v, w) {
            (e = v || 1 / 0), (t = Math.min(w || 33, e));
          },
          fps: function (v) {
            (s = 1e3 / (v || 240)), (o = d.time * 1e3 + s);
          },
          add: function (v, w, b) {
            var E = w
              ? function (g, C, x, P) {
                  v(g, C, x, P), d.remove(E);
                }
              : v;
            return d.remove(v), a[b ? "unshift" : "push"](E), Nr(), E;
          },
          remove: function (v, w) {
            ~(w = a.indexOf(v)) && a.splice(w, 1) && f >= w && f--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    Nr = function () {
      return !vn && Ht.wake();
    },
    it = {},
    Fd = /^[\d.\-M][\d.\-,\s]/,
    Bd = /["']/g,
    Vd = function (e) {
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
          (t[n] = isNaN(u) ? u.replace(Bd, "").trim() : +u),
          (n = l.substr(a + 1).trim());
      return t;
    },
    qd = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        n = e.indexOf("(", t);
      return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
    },
    $d = function (e) {
      var t = (e + "").split("("),
        i = it[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Vd(t[1])] : qd(e).split(",").map(rl)
          )
        : it._CE && Fd.test(e)
        ? it._CE("", e)
        : i;
    },
    El = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Al = function r(e, t) {
      for (var i = e._first, n; i; )
        i instanceof yt
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
      return (e && (Oe(e) ? e : it[e] || $d(e))) || t;
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
        Pt(e, function (a) {
          (it[a] = Bt[a] = s), (it[(o = a.toLowerCase())] = i);
          for (var l in s)
            it[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = it[a + "." + l] = s[l];
        }),
        s
      );
    },
    Pl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    To = function r(e, t, i) {
      var n = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / io) * (Math.asin(1 / n) || 0),
        a = function (c) {
          return c === 1 ? 1 : n * Math.pow(2, -10 * c) * gd((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Pl(a);
      return (
        (s = io / s),
        (l.config = function (u, c) {
          return r(e, u, c);
        }),
        l
      );
    },
    xo = function r(e, t) {
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
            : Pl(i);
      return (
        (n.config = function (s) {
          return r(e, s);
        }),
        n
      );
    };
  Pt("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
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
    (it.Linear.easeNone = it.none = it.Linear.easeIn),
    ar("Elastic", To("in"), To("out"), To()),
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
      return -(Ga(1 - r * r) - 1);
    }),
    ar("Sine", function (r) {
      return r === 1 ? 1 : -md(r * pd) + 1;
    }),
    ar("Back", xo("in"), xo("out"), xo()),
    (it.SteppedEase =
      it.steps =
      Bt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              n = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - me;
            return function (a) {
              return (((n * pn(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Mr.ease = it["quad.out"]),
    Pt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (r) {
        return (ho += r + "," + r + "Params,");
      }
    );
  var Ol = function (e, t) {
      (this.id = hd++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : tl),
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
          Rr(this, +t.duration, 1, 1),
          (this.data = t.data),
          Se && ((this._ctx = Se), Se.data.push(this)),
          vn || Ht.wake();
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
              Rr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, n) {
          if ((Nr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              us(this, i), !s._dp || s.parent || ll(s, this);
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
              yi(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !n) ||
              (this._initted && Math.abs(this._zTime) === me) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), il(this, i, n)),
            this
          );
        }),
        (e.time = function (i, n) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + al(this)) %
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
                  al(this),
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
            ? Ir(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, n) {
          if (!arguments.length) return this._rts === -me ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? as(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -me ? 0 : this._rts),
            this.totalTime(
              pn(-Math.abs(this._delay), this.totalDuration(), s),
              n !== !1
            ),
            ls(this),
            Td(this)
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
                  : (Nr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== me &&
                        (this._tTime -= me)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var n = this.parent || this._dp;
            return (
              n && (n._sort || !this.parent) && yi(n, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (At(i) ? this.totalDuration() : this.duration()) /
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
              ? as(n.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = yd);
          var n = tt;
          return (
            (tt = i),
            go(this) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (tt = n),
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), dl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var n = this._time;
            return (this._rDelay = i), dl(this), n ? this.time(n) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, n) {
          return this.totalTime(ti(this, i), At(n));
        }),
        (e.restart = function (i, n) {
          return (
            this.play().totalTime(i ? -this._delay : 0, At(n)),
            this._dur || (this._zTime = -me),
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
                this.timeScale(-this._rts || (i ? -me : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -me), this;
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
              s < this.endTime(!0) - me)
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
            var o = Oe(i) ? i : nl,
              a = function () {
                var u = n.then;
                (n.then = null),
                  Oe(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
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
  qt(_n.prototype, {
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
    _zTime: -me,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var yt = (function (r) {
    rr(e, r);
    function e(i, n) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = r.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = At(i.sortChildren)),
        xe && yi(i.parent || xe, et(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && ul(et(s), i.scrollTrigger),
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
          new Ne(n, s, ti(this, o), 1),
          this
        );
      }),
      (t.call = function (n, s, o) {
        return yi(this, Ne.delayedCall(0, n, s), o);
      }),
      (t.staggerTo = function (n, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Ne(n, o, ti(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (n, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (dn(o).immediateRender = At(o.immediateRender)),
          this.staggerTo(n, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (dn(a).immediateRender = At(a.immediateRender)),
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
          m,
          h,
          v,
          w,
          b,
          E,
          g,
          C,
          x,
          P;
        if (
          (this !== xe && c > l && n >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (n += this._time - a)),
            (p = c),
            (g = this._start),
            (E = this._ts),
            (w = !E),
            d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
            this._repeat)
          ) {
            if (
              ((x = this._yoyo),
              (v = u + this._rDelay),
              this._repeat < -1 && n < 0)
            )
              return this.totalTime(v * 100 + n, s, o);
            if (
              ((p = ze(c % v)),
              c === l
                ? ((h = this._repeat), (p = u))
                : ((C = ze(c / v)),
                  (h = ~~C),
                  h && h === C && ((p = u), h--),
                  p > u && (p = u)),
              (C = Ir(this._tTime, v)),
              !a &&
                this._tTime &&
                C !== h &&
                this._tTime - C * v - this._dur <= 0 &&
                (C = h),
              x && h & 1 && ((p = u - p), (P = 1)),
              h !== C && !this._lock)
            ) {
              var M = x && C & 1,
                k = M === (x && h & 1);
              if (
                (h < C && (M = !M),
                (a = M ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (P ? 0 : ze(h * v)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && $t(this, "onRepeat"),
                this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
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
                  (a = M ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !P && this.invalidate()),
                (this._lock = 0),
                !this._ts && !w)
              )
                return this;
              Al(this, P);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((b = Ad(this, ze(a), ze(p))), b && (c -= p - (p = b._start))),
            (this._tTime = c),
            (this._time = p),
            (this._act = !E),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = n),
              (a = 0)),
            !a && c && !s && !C && ($t(this, "onStart"), this._tTime !== c))
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
                  (b = 0), m && (c += this._zTime = -me);
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
                    o || (tt && go(f))
                  ),
                  p !== this._time || (!this._ts && !w))
                ) {
                  (b = 0), m && (c += this._zTime = L ? -me : me);
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
            (b.render(p >= a ? 0 : -me)._zTime = p >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = g), ls(this), this.render(n, s, o);
          this._onUpdate && !s && $t(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (g === this._start || Math.abs(E) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((n || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Vi(this, 1),
                !s &&
                  !(n < 0 && !a) &&
                  (c || a || !l) &&
                  ($t(
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
        if ((Li(s) || (s = ti(this, s, n)), !(n instanceof _n))) {
          if (ot(n))
            return (
              n.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ye(n)) return this.addLabel(n, s);
          if (Oe(n)) n = Ne.delayedCall(0, n);
          else return this;
        }
        return this !== n ? yi(this, n, s) : this;
      }),
      (t.getChildren = function (n, s, o, a) {
        n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -ei);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Ne
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
        return Ye(n)
          ? this.removeLabel(n)
          : Oe(n)
          ? this.killTweensOf(n)
          : (n.parent === this && os(this, n),
            n === this._recent && (this._recent = this._last),
            sr(this));
      }),
      (t.totalTime = function (n, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ze(
                Ht.time -
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
        return (this.labels[n] = ti(this, s)), this;
      }),
      (t.removeLabel = function (n) {
        return delete this.labels[n], this;
      }),
      (t.addPause = function (n, s, o) {
        var a = Ne.delayedCall(0, s || cn, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), yi(this, a, ti(this, n))
        );
      }),
      (t.removePause = function (n) {
        var s = this._first;
        for (n = ti(this, n); s; )
          s._start === n && s.data === "isPause" && Vi(s), (s = s._next);
      }),
      (t.killTweensOf = function (n, s, o) {
        for (var a = this.getTweensOf(n, o), l = a.length; l--; )
          Hi !== a[l] && a[l].kill(n, s);
        return this;
      }),
      (t.getTweensOf = function (n, s) {
        for (var o = [], a = ii(n), l = this._first, u = Li(s), c; l; )
          l instanceof Ne
            ? wd(l._targets, a) &&
              (u
                ? (!Hi || (l._initted && l._ts)) &&
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
          a = ti(o, n),
          l = s,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          p = l.immediateRender,
          f,
          m = Ne.to(
            o,
            qt(
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
                  me,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var v =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    m._dur !== v && Rr(m, v, 0, 1).render(m._time, !0, !0),
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
        return this.tweenTo(s, qt({ startAt: { time: ti(this, n) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (n) {
        return n === void 0 && (n = this._time), yl(this, ti(this, n));
      }),
      (t.previousLabel = function (n) {
        return n === void 0 && (n = this._time), yl(this, ti(this, n), 1);
      }),
      (t.currentLabel = function (n) {
        return arguments.length
          ? this.seek(n, !0)
          : this.previousLabel(this._time + me);
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
          l = ei,
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
                ? ((o._lock = 1), (yi(o, a, c - a._delay, 1)._lock = 0))
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
          Rr(o, o === xe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (n) {
        if ((xe._ts && (il(xe, as(n, xe)), (Ja = Ht.frame)), Ht.frame >= el)) {
          el += Ft.autoSleep || 120;
          var s = xe._first;
          if ((!s || !s._ts) && Ft.autoSleep && Ht._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ht.sleep();
          }
        }
      }),
      e
    );
  })(_n);
  qt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Hd = function (e, t, i, n, s, o, a) {
      var l = new Ot(this._pt, e, t, 0, 1, Rl, null, s),
        u = 0,
        c = 0,
        d,
        p,
        f,
        m,
        h,
        v,
        w,
        b;
      for (
        l.b = i,
          l.e = n,
          i += "",
          n += "",
          (w = ~n.indexOf("random(")) && (n = hn(n)),
          o && ((b = [i, n]), o(b, e, t), (i = b[0]), (n = b[1])),
          p = i.match(oo) || [];
        (d = oo.exec(n));

      )
        (m = d[0]),
          (h = n.substring(u, d.index)),
          f ? (f = (f + 1) % 5) : h.substr(-5) === "rgba(" && (f = 1),
          m !== p[c++] &&
            ((v = parseFloat(p[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || c === 1 ? h : ",",
              s: v,
              c: m.charAt(1) === "=" ? Dr(v, m) - v : parseFloat(m) - v,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = oo.lastIndex));
      return (
        (l.c = u < n.length ? n.substring(u, n.length) : ""),
        (l.fp = a),
        (ja.test(n) || w) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Co = function (e, t, i, n, s, o, a, l, u, c) {
      Oe(n) && (n = n(s || 0, e, o));
      var d = e[t],
        p =
          i !== "get"
            ? i
            : Oe(d)
            ? u
              ? e[
                  t.indexOf("set") || !Oe(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : d,
        f = Oe(d) ? (u ? jd : kl) : Po,
        m;
      if (
        (Ye(n) &&
          (~n.indexOf("random(") && (n = hn(n)),
          n.charAt(1) === "=" &&
            ((m = Dr(p, n) + (at(p) || 0)), (m || m === 0) && (n = m))),
        !c || p !== n || Eo)
      )
        return !isNaN(p * n) && n !== ""
          ? ((m = new Ot(
              this._pt,
              e,
              t,
              +p || 0,
              n - (p || 0),
              typeof d == "boolean" ? Kd : Il,
              0,
              f
            )),
            u && (m.fp = u),
            a && m.modifier(a, this, e),
            (this._pt = m))
          : (!d && !(t in e) && uo(t, n),
            Hd.call(this, e, t, p, n, f, l || Ft.stringFilter, u));
    },
    Wd = function (e, t, i, n, s) {
      if (
        (Oe(e) && (e = yn(e, s, t, i, n)),
        !vi(e) || (e.style && e.nodeType) || ot(e) || Xa(e))
      )
        return Ye(e) ? yn(e, s, t, i, n) : e;
      var o = {},
        a;
      for (a in e) o[a] = yn(e[a], s, t, i, n);
      return o;
    },
    Ml = function (e, t, i, n, s, o) {
      var a, l, u, c;
      if (
        Vt[e] &&
        (a = new Vt[e]()).init(
          s,
          a.rawVars ? t[e] : Wd(t[e], n, s, o, i),
          i,
          n,
          o
        ) !== !1 &&
        ((i._pt = l = new Ot(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== zr)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Hi,
    Eo,
    Ao = function r(e, t, i) {
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
        h = e._startAt,
        v = e._targets,
        w = e.parent,
        b = w && w.data === "nested" ? w.vars.targets : v,
        E = e._overwrite === "auto" && !to,
        g = e.timeline,
        C,
        x,
        P,
        M,
        k,
        L,
        R,
        A,
        z,
        y,
        _,
        S,
        O;
      if (
        (g && (!p || !s) && (s = "none"),
        (e._ease = or(s, Mr.ease)),
        (e._yEase = d ? El(or(d === !0 ? s : d, Mr.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !g && !!n.runBackwards),
        !g || (p && !n.stagger))
      ) {
        if (
          ((A = v[0] ? nr(v[0]).harness : 0),
          (S = A && n[A.prop]),
          (C = ss(n, co)),
          h &&
            (h._zTime < 0 && h.progress(1),
            t < 0 && c && a && !f
              ? h.render(-1, !0)
              : h.revert(c && m ? is : _d),
            (h._lazy = 0)),
          o)
        ) {
          if (
            (Vi(
              (e._startAt = Ne.set(
                v,
                qt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: w,
                    immediateRender: !0,
                    lazy: !h && At(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return $t(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (tt || (!a && !f)) && e._startAt.revert(is),
            a && m && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && m && !h) {
          if (
            (t && (a = !1),
            (P = qt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !h && At(l),
                immediateRender: a,
                stagger: 0,
                parent: w,
              },
              C
            )),
            S && (P[A.prop] = S),
            Vi((e._startAt = Ne.set(v, P))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (tt ? e._startAt.revert(is) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            r(e._startAt, me, me);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && At(l)) || (l && !m), x = 0;
          x < v.length;
          x++
        ) {
          if (
            ((k = v[x]),
            (R = k._gsap || mo(v)[x]._gsap),
            (e._ptLookup[x] = y = {}),
            fo[R.id] && Bi.length && ns(),
            (_ = b === v ? x : b.indexOf(k)),
            A &&
              (z = new A()).init(k, S || C, e, _, b) !== !1 &&
              ((e._pt = M =
                new Ot(e._pt, k, z.name, 0, 1, z.render, z, 0, z.priority)),
              z._props.forEach(function (D) {
                y[D] = M;
              }),
              z.priority && (L = 1)),
            !A || S)
          )
            for (P in C)
              Vt[P] && (z = Ml(P, C, e, _, k, b))
                ? z.priority && (L = 1)
                : (y[P] = M =
                    Co.call(e, k, P, "get", C[P], _, b, 0, n.stringFilter));
          e._op && e._op[x] && e.kill(k, e._op[x]),
            E &&
              e._pt &&
              ((Hi = e),
              xe.killTweensOf(k, y, e.globalTime(t)),
              (O = !e.parent),
              (Hi = 0)),
            e._pt && l && (fo[R.id] = 1);
        }
        L && zl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !O),
        p && t <= 0 && g.render(ei, !0, !0);
    },
    Gd = function (e, t, i, n, s, o, a, l) {
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
              (Eo = 1),
              (e.vars[t] = "+=0"),
              Ao(e, a),
              (Eo = 0),
              l ? un(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (d = u[f]),
          (c = d._pt || d),
          (c.s = (n || n === 0) && !s ? n : c.s + (n || 0) + o * c.c),
          (c.c = i - c.s),
          d.e && (d.e = ke(i) + at(d.e)),
          d.b && (d.b = c.s + at(d.b));
    },
    Xd = function (e, t) {
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
    Yd = function (e, t, i, n) {
      var s = t.ease || n || "power1.inOut",
        o,
        a;
      if (ot(t))
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
      return Oe(e)
        ? e.call(t, i, n, s)
        : Ye(e) && ~e.indexOf("random(")
        ? hn(e)
        : e;
    },
    Ll = ho + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Dl = {};
  Pt(Ll + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
    return (Dl[r] = 1);
  });
  var Ne = (function (r) {
    rr(e, r);
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
        h = l.defaults,
        v = l.scrollTrigger,
        w = l.yoyoEase,
        b = n.parent || xe,
        E = (ot(i) || Xa(i) ? Li(i[0]) : "length" in n) ? [i] : ii(i),
        g,
        C,
        x,
        P,
        M,
        k,
        L,
        R;
      if (
        ((a._targets = E.length
          ? mo(E)
          : un(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ft.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        m || p || es(u) || es(c))
      ) {
        if (
          ((n = a.vars),
          (g = a.timeline =
            new yt({
              data: "nested",
              defaults: h || {},
              targets: b && b.data === "nested" ? b.vars.targets : E,
            })),
          g.kill(),
          (g.parent = g._dp = et(a)),
          (g._start = 0),
          p || es(u) || es(c))
        ) {
          if (((P = E.length), (L = p && hl(p)), vi(p)))
            for (M in p) ~Ll.indexOf(M) && (R || (R = {}), (R[M] = p[M]));
          for (C = 0; C < P; C++)
            (x = ss(n, Dl)),
              (x.stagger = 0),
              w && (x.yoyoEase = w),
              R && kr(x, R),
              (k = E[C]),
              (x.duration = +yn(u, et(a), C, k, E)),
              (x.delay = (+yn(c, et(a), C, k, E) || 0) - a._delay),
              !p &&
                P === 1 &&
                x.delay &&
                ((a._delay = c = x.delay), (a._start += c), (x.delay = 0)),
              g.to(k, x, L ? L(C, k, E) : 0),
              (g._ease = it.none);
          g.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (m) {
          dn(qt(g.vars.defaults, { ease: "none" })),
            (g._ease = or(m.ease || n.ease || "none"));
          var A = 0,
            z,
            y,
            _;
          if (ot(m))
            m.forEach(function (S) {
              return g.to(E, S, ">");
            }),
              g.duration();
          else {
            x = {};
            for (M in m)
              M === "ease" || M === "easeEach" || Yd(M, m[M], x, m.easeEach);
            for (M in x)
              for (
                z = x[M].sort(function (S, O) {
                  return S.t - O.t;
                }),
                  A = 0,
                  C = 0;
                C < z.length;
                C++
              )
                (y = z[C]),
                  (_ = {
                    ease: y.e,
                    duration: ((y.t - (C ? z[C - 1].t : 0)) / 100) * u,
                  }),
                  (_[M] = y.v),
                  g.to(E, _, A),
                  (A += _.duration);
            g.duration() < u && g.to({}, { duration: u - g.duration() });
          }
        }
        u || a.duration((u = g.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !to && ((Hi = et(a)), xe.killTweensOf(E), (Hi = 0)),
        yi(b, et(a), s),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (d ||
          (!u &&
            !m &&
            a._start === ze(b._time) &&
            At(d) &&
            xd(et(a)) &&
            b.data !== "nested")) &&
          ((a._tTime = -me), a.render(Math.max(0, -c) || 0)),
        v && ul(et(a), v),
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
          d = n > l - me && !c ? l : n < me ? 0 : n,
          p,
          f,
          m,
          h,
          v,
          w,
          b,
          E,
          g;
        if (!u) Ed(this, n, s, o);
        else if (
          d !== this._tTime ||
          !n ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((p = d), (E = this.timeline), this._repeat)) {
            if (((h = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(h * 100 + n, s, o);
            if (
              ((p = ze(d % h)),
              d === l
                ? ((m = this._repeat), (p = u))
                : ((v = ze(d / h)),
                  (m = ~~v),
                  m && m === v ? ((p = u), m--) : p > u && (p = u)),
              (w = this._yoyo && m & 1),
              w && ((g = this._yEase), (p = u - p)),
              (v = Ir(this._tTime, h)),
              p === a && !o && this._initted && m === v)
            )
              return (this._tTime = d), this;
            m !== v &&
              (E && this._yEase && Al(E, w),
              this.vars.repeatRefresh &&
                !w &&
                !this._lock &&
                p !== h &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(ze(h * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (cl(this, c ? n : p, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && m !== v))
              return this;
            if (u !== this._dur) return this.render(n, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = b = (g || this._ease)(p / u)),
            this._from && (this.ratio = b = 1 - b),
            !a && d && !s && !v && ($t(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(b, f.d), (f = f._next);
          (E && E.render(n < 0 ? n : E._dur * E._ease(p / this._dur), s, o)) ||
            (this._startAt && (this._zTime = n)),
            this._onUpdate &&
              !s &&
              (c && vo(this, n, s, o), $t(this, "onUpdate")),
            this._repeat &&
              m !== v &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              $t(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && vo(this, n, !0, !0),
              (n || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Vi(this, 1),
              !s &&
                !(c && !a) &&
                (d || a || w) &&
                ($t(this, d === l ? "onComplete" : "onReverseComplete", !0),
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
        vn || Ht.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Ao(this, u),
          (c = this._ease(u / this._dur)),
          Gd(this, n, s, o, a, c, u, l)
            ? this.resetTo(n, s, o, a, 1)
            : (us(this, 0),
              this.parent ||
                ol(
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
              : this.scrollTrigger && this.scrollTrigger.kill(!!tt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(n, s, Hi && Hi.vars.overwrite !== !0)
              ._first || mn(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Rr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = n ? ii(n) : a,
          u = this._ptLookup,
          c = this._pt,
          d,
          p,
          f,
          m,
          h,
          v,
          w;
        if ((!s || s === "all") && Sd(a, l))
          return s === "all" && (this._pt = 0), mn(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Ye(s) &&
                ((h = {}),
                Pt(s, function (b) {
                  return (h[b] = 1);
                }),
                (s = h)),
              (s = Xd(a, s))),
            w = a.length;
          w--;

        )
          if (~l.indexOf(a[w])) {
            (p = u[w]),
              s === "all"
                ? ((d[w] = s), (m = p), (f = {}))
                : ((f = d[w] = d[w] || {}), (m = s));
            for (h in m)
              (v = p && p[h]),
                v &&
                  ((!("kill" in v.d) || v.d.kill(h) === !0) &&
                    os(this, v, "_pt"),
                  delete p[h]),
                f !== "all" && (f[h] = 1);
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
        return xe.killTweensOf(n, s, o);
      }),
      e
    );
  })(_n);
  qt(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Pt("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Ne[r] = function () {
        var e = new yt(),
          t = yo.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
      };
    });
  var Po = function (e, t, i) {
      return (e[t] = i);
    },
    kl = function (e, t, i) {
      return e[t](i);
    },
    jd = function (e, t, i, n) {
      return e[t](n.fp, i);
    },
    Ud = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Oo = function (e, t) {
      return Oe(e[t]) ? kl : ro(e[t]) && e.setAttribute ? Ud : Po;
    },
    Il = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Kd = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Rl = function (e, t) {
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
    Mo = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Zd = function (e, t, i, n) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
    },
    Qd = function (e) {
      for (var t = this._pt, i, n; t; )
        (n = t._next),
          (t.p === e && !t.op) || t.op === e
            ? os(this, t, "_pt")
            : t.dep || (i = 1),
          (t = n);
      return !i;
    },
    Jd = function (e, t, i, n) {
      n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
    },
    zl = function (e) {
      for (var t = e._pt, i, n, s, o; t; ) {
        for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
        (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = n) ? (n._prev = t) : (o = t),
          (t = i);
      }
      e._pt = s;
    },
    Ot = (function () {
      function r(t, i, n, s, o, a, l, u, c) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = n),
          (this.r = a || Il),
          (this.d = l || this),
          (this.set = u || Po),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = r.prototype;
      return (
        (e.modifier = function (i, n, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Jd),
            (this.m = i),
            (this.mt = s),
            (this.tween = n);
        }),
        r
      );
    })();
  Pt(
    ho +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (r) {
      return (co[r] = 1);
    }
  ),
    (Bt.TweenMax = Bt.TweenLite = Ne),
    (Bt.TimelineLite = Bt.TimelineMax = yt),
    (xe = new yt({
      sortChildren: !1,
      defaults: Mr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ft.stringFilter = Cl);
  var lr = [],
    cs = {},
    ef = [],
    Nl = 0,
    tf = 0,
    Lo = function (e) {
      return (cs[e] || ef).map(function (t) {
        return t();
      });
    },
    Do = function () {
      var e = Date.now(),
        t = [];
      e - Nl > 2 &&
        (Lo("matchMediaInit"),
        lr.forEach(function (i) {
          var n = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            u;
          for (a in n)
            (o = _i.matchMedia(n[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        Lo("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (n) {
            return i.add(null, n);
          });
        }),
        (Nl = e),
        Lo("matchMedia"));
    },
    Fl = (function () {
      function r(t, i) {
        (this.selector = i && wo(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = tf++),
          t && this.add(t);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          Oe(i) && ((s = n), (n = i), (i = Oe));
          var o = this,
            a = function () {
              var u = Se,
                c = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = wo(s)),
                (Se = o),
                (d = n.apply(o, arguments)),
                Oe(d) && o._r.push(d),
                (Se = u),
                (o.selector = c),
                (o.isReverted = !1),
                d
              );
            };
          return (
            (o.last = a),
            i === Oe
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : i
              ? (o[i] = a)
              : a
          );
        }),
        (e.ignore = function (i) {
          var n = Se;
          (Se = null), i(this), (Se = n);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (n) {
              return n instanceof r
                ? i.push.apply(i, n.getTweens())
                : n instanceof Ne &&
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
                      u instanceof yt
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Ne) && u.revert && u.revert(i);
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
    rf = (function () {
      function r(t) {
        (this.contexts = []), (this.scope = t), Se && Se.data.push(this);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          vi(i) || (i = { matches: i });
          var o = new Fl(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          Se && !o.selector && (o.selector = Se.selector),
            this.contexts.push(o),
            (n = o.add("onMatch", n)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = _i.matchMedia(i[u])),
                l &&
                  (lr.indexOf(o) < 0 && lr.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Do)
                    : l.addEventListener("change", Do)));
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
    ds = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (n) {
          return bl(n);
        });
      },
      timeline: function (e) {
        return new yt(e);
      },
      getTweensOf: function (e, t) {
        return xe.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, n) {
        Ye(e) && (e = ii(e)[0]);
        var s = nr(e || {}).get,
          o = i ? nl : rl;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o(((Vt[t] && Vt[t].get) || s)(e, t, i, n))
              : function (a, l, u) {
                  return o(((Vt[a] && Vt[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = ii(e)), e.length > 1)) {
          var n = e.map(function (c) {
              return Mt.quickSetter(c, t, i);
            }),
            s = n.length;
          return function (c) {
            for (var d = s; d--; ) n[d](c);
          };
        }
        e = e[0] || {};
        var o = Vt[t],
          a = nr(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var d = new o();
                (zr._pt = 0),
                  d.init(e, i ? c + i : c, zr, 0, [e]),
                  d.render(1, d),
                  zr._pt && Mo(1, zr);
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
          s = Mt.to(
            e,
            qt(
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
        return xe.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = or(e.ease, Mr.ease)), sl(Mr, e || {});
      },
      config: function (e) {
        return sl(Ft, e || {});
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
            !Vt[a] &&
            !Bt[a] &&
            un(t + " effect requires " + a + " plugin.")
          );
        }),
          (po[t] = function (a, l, u) {
            return i(ii(a), qt(l || {}, s), u);
          }),
          o &&
            (yt.prototype[t] = function (a, l, u) {
              return this.add(po[t](a, vi(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        it[e] = or(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? or(e, t) : it;
      },
      getById: function (e) {
        return xe.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new yt(e),
          n,
          s;
        for (
          i.smoothChildTiming = At(e.smoothChildTiming),
            xe.remove(i),
            i._dp = 0,
            i._time = i._tTime = xe._time,
            n = xe._first;
          n;

        )
          (s = n._next),
            (t ||
              !(
                !n._dur &&
                n instanceof Ne &&
                n.vars.onComplete === n._targets[0]
              )) &&
              yi(i, n, n._start - n._delay),
            (n = s);
        return yi(xe, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Fl(e, t) : Se;
      },
      matchMedia: function (e) {
        return new rf(e);
      },
      matchMediaRefresh: function () {
        return (
          lr.forEach(function (e) {
            var t = e.conditions,
              i,
              n;
            for (n in t) t[n] && ((t[n] = !1), (i = 1));
            i && e.revert();
          }) || Do()
        );
      },
      addEventListener: function (e, t) {
        var i = cs[e] || (cs[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = cs[e],
          n = i && i.indexOf(t);
        n >= 0 && i.splice(n, 1);
      },
      utils: {
        wrap: Id,
        wrapYoyo: Rd,
        distribute: hl,
        random: gl,
        snap: ml,
        normalize: kd,
        getUnit: at,
        clamp: Od,
        splitColor: Sl,
        toArray: ii,
        selector: wo,
        mapRange: _l,
        pipe: Ld,
        unitize: Dd,
        interpolate: zd,
        shuffle: pl,
      },
      install: Za,
      effects: po,
      ticker: Ht,
      updateRoot: yt.updateRoot,
      plugins: Vt,
      globalTimeline: xe,
      core: {
        PropTween: Ot,
        globals: Qa,
        Tween: Ne,
        Timeline: yt,
        Animation: _n,
        getCache: nr,
        _removeLinkedListItem: os,
        reverting: function () {
          return tt;
        },
        context: function (e) {
          return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
        },
        suppressOverwrites: function (e) {
          return (to = e);
        },
      },
    };
  Pt("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
    return (ds[r] = Ne[r]);
  }),
    Ht.add(yt.updateRoot),
    (zr = ds.to({}, { duration: 0 }));
  var nf = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    sf = function (e, t) {
      var i = e._targets,
        n,
        s,
        o;
      for (n in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][n]),
            o &&
              (o = o.d) &&
              (o._pt && (o = nf(o, n)),
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
              (Ye(s) &&
                ((l = {}),
                Pt(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            sf(a, s);
          };
        },
      };
    },
    Mt =
      ds.registerPlugin(
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
              tt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
        ko("roundProps", bo),
        ko("modifiers"),
        ko("snap", ml)
      ) || ds;
  (Ne.version = yt.version = Mt.version = "3.13.0"), (Ka = 1), no() && Nr();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Bl,
    Wi,
    Fr,
    Io,
    ur,
    Vl,
    Ro,
    of = function () {
      return typeof window < "u";
    },
    Di = {},
    cr = 180 / Math.PI,
    Br = Math.PI / 180,
    Vr = Math.atan2,
    ql = 1e8,
    zo = /([A-Z])/g,
    af = /(left|right|width|margin|padding|x)/i,
    lf = /[\s,\(]\S/,
    wi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    No = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    uf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    cf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    df = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    $l = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Hl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    ff = function (e, t, i) {
      return (e.style[t] = i);
    },
    pf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    hf = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    mf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    gf = function (e, t, i, n, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    vf = function (e, t, i, n, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    Ce = "transform",
    Lt = Ce + "Origin",
    _f = function r(e, t) {
      var i = this,
        n = this.target,
        s = n.style,
        o = n._gsap;
      if (e in Di && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = wi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = ki(n, a));
                })
              : (this.tfm[e] = o.x ? o[e] : ki(n, e)),
            e === Lt && (this.tfm.zOrigin = o.zOrigin);
        else
          return wi.transform.split(",").forEach(function (a) {
            return r.call(i, a, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        o.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(Lt, t, "")),
          (e = Ce);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Wl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    yf = function () {
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
                : e[s].replace(zo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) n[o] = this.tfm[o];
        n.svg &&
          (n.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Ro()),
          (!s || !s.isStart) &&
            !i[Ce] &&
            (Wl(i),
            n.zOrigin &&
              i[Lt] &&
              ((i[Lt] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    },
    Gl = function (e, t) {
      var i = { target: e, props: [], revert: yf, save: _f };
      return (
        e._gsap || Mt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (n) {
            return i.save(n);
          }),
        i
      );
    },
    Xl,
    Fo = function (e, t) {
      var i = Wi.createElementNS
        ? Wi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Wi.createElement(e);
      return i && i.style ? i : Wi.createElement(e);
    },
    ri = function r(e, t, i) {
      var n = getComputedStyle(e);
      return (
        n[t] ||
        n.getPropertyValue(t.replace(zo, "-$1").toLowerCase()) ||
        n.getPropertyValue(t) ||
        (!i && r(e, qr(t) || t, 1)) ||
        ""
      );
    },
    Yl = "O,Moz,ms,Ms,Webkit".split(","),
    qr = function (e, t, i) {
      var n = t || ur,
        s = n.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Yl[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Yl[o] : "") + e;
    },
    Bo = function () {
      of() &&
        window.document &&
        ((Bl = window),
        (Wi = Bl.document),
        (Fr = Wi.documentElement),
        (ur = Fo("div") || { style: {} }),
        Fo("div"),
        (Ce = qr(Ce)),
        (Lt = Ce + "Origin"),
        (ur.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Xl = !!qr("perspective")),
        (Ro = Mt.core.reverting),
        (Io = 1));
    },
    jl = function (e) {
      var t = e.ownerSVGElement,
        i = Fo(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        n = e.cloneNode(!0),
        s;
      (n.style.display = "block"), i.appendChild(n), Fr.appendChild(i);
      try {
        s = n.getBBox();
      } catch {}
      return i.removeChild(n), Fr.removeChild(i), s;
    },
    Ul = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Kl = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = jl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = jl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Ul(e, ["x", "cx", "x1"]) || 0,
              y: +Ul(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Zl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Kl(e));
    },
    dr = function (e, t) {
      if (t) {
        var i = e.style,
          n;
        t in Di && t !== Lt && (t = Ce),
          i.removeProperty
            ? ((n = t.substr(0, 2)),
              (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                n === "--" ? t : t.replace(zo, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Gi = function (e, t, i, n, s, o) {
      var a = new Ot(e._pt, t, i, 0, 1, o ? Hl : $l);
      return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
    },
    Ql = { deg: 1, rad: 1, turn: 1 },
    wf = { grid: 1, flex: 1 },
    Xi = function r(e, t, i, n) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = ur.style,
        l = af.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        p = n === "px",
        f = n === "%",
        m,
        h,
        v,
        w;
      if (n === o || !s || Ql[n] || Ql[o]) return s;
      if (
        (o !== "px" && !p && (s = r(e, t, i, "px")),
        (w = e.getCTM && Zl(e)),
        (f || o === "%") && (Di[t] || ~t.indexOf("adius")))
      )
        return (
          (m = w ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ke(f ? (s / m) * d : (s / 100) * m)
        );
      if (
        ((a[l ? "width" : "height"] = d + (p ? o : n)),
        (h =
          (n !== "rem" && ~t.indexOf("adius")) ||
          (n === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        w && (h = (e.ownerSVGElement || {}).parentNode),
        (!h || h === Wi || !h.appendChild) && (h = Wi.body),
        (v = h._gsap),
        v && f && v.width && l && v.time === Ht.time && !v.uncache)
      )
        return ke((s / v.width) * d);
      if (f && (t === "height" || t === "width")) {
        var b = e.style[t];
        (e.style[t] = d + n), (m = e[c]), b ? (e.style[t] = b) : dr(e, t);
      } else
        (f || o === "%") &&
          !wf[ri(h, "display")] &&
          (a.position = ri(e, "position")),
          h === e && (a.position = "static"),
          h.appendChild(ur),
          (m = ur[c]),
          h.removeChild(ur),
          (a.position = "absolute");
      return (
        l && f && ((v = nr(h)), (v.time = Ht.time), (v.width = h[c])),
        ke(p ? (m * s) / d : m && s ? (d / m) * s : 0)
      );
    },
    ki = function (e, t, i, n) {
      var s;
      return (
        Io || Bo(),
        t in wi &&
          t !== "transform" &&
          ((t = wi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Di[t] && t !== "transform"
          ? ((s = bn(e, n)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : ps(ri(e, Lt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
              (s =
                (fs[t] && fs[t](e, t, i)) ||
                ri(e, t) ||
                tl(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Xi(e, t, s, i) + i : s
      );
    },
    bf = function (e, t, i, n) {
      if (!i || i === "none") {
        var s = qr(t, e, 1),
          o = s && ri(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = ri(e, "borderTopColor"));
      }
      var a = new Ot(this._pt, e.style, t, 0, 1, Rl),
        l = 0,
        u = 0,
        c,
        d,
        p,
        f,
        m,
        h,
        v,
        w,
        b,
        E,
        g,
        C;
      if (
        ((a.b = i),
        (a.e = n),
        (i += ""),
        (n += ""),
        n.substring(0, 6) === "var(--" &&
          (n = ri(e, n.substring(4, n.indexOf(")")))),
        n === "auto" &&
          ((h = e.style[t]),
          (e.style[t] = n),
          (n = ri(e, t) || n),
          h ? (e.style[t] = h) : dr(e, t)),
        (c = [i, n]),
        Cl(c),
        (i = c[0]),
        (n = c[1]),
        (p = i.match(Lr) || []),
        (C = n.match(Lr) || []),
        C.length)
      ) {
        for (; (d = Lr.exec(n)); )
          (v = d[0]),
            (b = n.substring(l, d.index)),
            m
              ? (m = (m + 1) % 5)
              : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") &&
                (m = 1),
            v !== (h = p[u++] || "") &&
              ((f = parseFloat(h) || 0),
              (g = h.substr((f + "").length)),
              v.charAt(1) === "=" && (v = Dr(f, v) + g),
              (w = parseFloat(v)),
              (E = v.substr((w + "").length)),
              (l = Lr.lastIndex - E.length),
              E ||
                ((E = E || Ft.units[t] || g),
                l === n.length && ((n += E), (a.e += E))),
              g !== E && (f = Xi(e, t, h, E) || 0),
              (a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: f,
                c: w - f,
                m: (m && m < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < n.length ? n.substring(l, n.length) : "";
      } else a.r = t === "display" && n === "none" ? Hl : $l;
      return ja.test(n) && (a.e = 0), (this._pt = a), a;
    },
    Jl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Sf = function (e) {
      var t = e.split(" "),
        i = t[0],
        n = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || n === "left" || n === "right") &&
          ((e = i), (i = n), (n = e)),
        (t[0] = Jl[i] || i),
        (t[1] = Jl[n] || n),
        t.join(" ")
      );
    },
    Tf = function (e, t) {
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
              Di[a] && ((l = 1), (a = a === "transformOrigin" ? Lt : Ce)),
              dr(i, a);
        l &&
          (dr(i, Ce),
          o &&
            (o.svg && i.removeAttribute("transform"),
            (n.scale = n.rotate = n.translate = "none"),
            bn(i, 1),
            (o.uncache = 1),
            Wl(n)));
      }
    },
    fs = {
      clearProps: function (e, t, i, n, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Ot(e._pt, t, i, 0, 0, Tf));
          return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    wn = [1, 0, 0, 1, 0, 0],
    eu = {},
    tu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    iu = function (e) {
      var t = ri(e, Ce);
      return tu(t) ? wn : t.substr(7).match(Ya).map(ke);
    },
    Vo = function (e, t) {
      var i = e._gsap || nr(e),
        n = e.style,
        s = iu(e),
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
            e !== Fr &&
            !i.svg &&
            ((l = n.display),
            (n.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (a = e.nextElementSibling), Fr.appendChild(e)),
            (s = iu(e)),
            l ? (n.display = l) : dr(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Fr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    qo = function (e, t, i, n, s, o) {
      var a = e._gsap,
        l = s || Vo(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        d = a.xOffset || 0,
        p = a.yOffset || 0,
        f = l[0],
        m = l[1],
        h = l[2],
        v = l[3],
        w = l[4],
        b = l[5],
        E = t.split(" "),
        g = parseFloat(E[0]) || 0,
        C = parseFloat(E[1]) || 0,
        x,
        P,
        M,
        k;
      i
        ? l !== wn &&
          (P = f * v - m * h) &&
          ((M = g * (v / P) + C * (-h / P) + (h * b - v * w) / P),
          (k = g * (-m / P) + C * (f / P) - (f * b - m * w) / P),
          (g = M),
          (C = k))
        : ((x = Kl(e)),
          (g = x.x + (~E[0].indexOf("%") ? (g / 100) * x.width : g)),
          (C =
            x.y + (~(E[1] || E[0]).indexOf("%") ? (C / 100) * x.height : C))),
        n || (n !== !1 && a.smooth)
          ? ((w = g - u),
            (b = C - c),
            (a.xOffset = d + (w * f + b * h) - w),
            (a.yOffset = p + (w * m + b * v) - b))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = g),
        (a.yOrigin = C),
        (a.smooth = !!n),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[Lt] = "0px 0px"),
        o &&
          (Gi(o, a, "xOrigin", u, g),
          Gi(o, a, "yOrigin", c, C),
          Gi(o, a, "xOffset", d, a.xOffset),
          Gi(o, a, "yOffset", p, a.yOffset)),
        e.setAttribute("data-svg-origin", g + " " + C);
    },
    bn = function (e, t) {
      var i = e._gsap || new Ol(e);
      if ("x" in i && !t && !i.uncache) return i;
      var n = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = ri(e, Lt) || "0",
        c,
        d,
        p,
        f,
        m,
        h,
        v,
        w,
        b,
        E,
        g,
        C,
        x,
        P,
        M,
        k,
        L,
        R,
        A,
        z,
        y,
        _,
        S,
        O,
        D,
        I,
        T,
        B,
        q,
        Q,
        X,
        ie;
      return (
        (c = d = p = h = v = w = b = E = g = 0),
        (f = m = 1),
        (i.svg = !!(e.getCTM && Zl(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (n[Ce] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[Ce] !== "none" ? l[Ce] : "")),
          (n.scale = n.rotate = n.translate = "none")),
        (P = Vo(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((D = e.getBBox()),
              (u = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px"),
              (O = ""))
            : (O = !t && e.getAttribute("data-svg-origin")),
          qo(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, P)),
        (C = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        P !== wn &&
          ((R = P[0]),
          (A = P[1]),
          (z = P[2]),
          (y = P[3]),
          (c = _ = P[4]),
          (d = S = P[5]),
          P.length === 6
            ? ((f = Math.sqrt(R * R + A * A)),
              (m = Math.sqrt(y * y + z * z)),
              (h = R || A ? Vr(A, R) * cr : 0),
              (b = z || y ? Vr(z, y) * cr + h : 0),
              b && (m *= Math.abs(Math.cos(b * Br))),
              i.svg && ((c -= C - (C * R + x * z)), (d -= x - (C * A + x * y))))
            : ((ie = P[6]),
              (Q = P[7]),
              (T = P[8]),
              (B = P[9]),
              (q = P[10]),
              (X = P[11]),
              (c = P[12]),
              (d = P[13]),
              (p = P[14]),
              (M = Vr(ie, q)),
              (v = M * cr),
              M &&
                ((k = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = _ * k + T * L),
                (D = S * k + B * L),
                (I = ie * k + q * L),
                (T = _ * -L + T * k),
                (B = S * -L + B * k),
                (q = ie * -L + q * k),
                (X = Q * -L + X * k),
                (_ = O),
                (S = D),
                (ie = I)),
              (M = Vr(-z, q)),
              (w = M * cr),
              M &&
                ((k = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = R * k - T * L),
                (D = A * k - B * L),
                (I = z * k - q * L),
                (X = y * L + X * k),
                (R = O),
                (A = D),
                (z = I)),
              (M = Vr(A, R)),
              (h = M * cr),
              M &&
                ((k = Math.cos(M)),
                (L = Math.sin(M)),
                (O = R * k + A * L),
                (D = _ * k + S * L),
                (A = A * k - R * L),
                (S = S * k - _ * L),
                (R = O),
                (_ = D)),
              v &&
                Math.abs(v) + Math.abs(h) > 359.9 &&
                ((v = h = 0), (w = 180 - w)),
              (f = ke(Math.sqrt(R * R + A * A + z * z))),
              (m = ke(Math.sqrt(S * S + ie * ie))),
              (M = Vr(_, S)),
              (b = Math.abs(M) > 2e-4 ? M * cr : 0),
              (g = X ? 1 / (X < 0 ? -X : X) : 0)),
          i.svg &&
            ((O = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !tu(ri(e, Ce))),
            O && e.setAttribute("transform", O))),
        Math.abs(b) > 90 &&
          Math.abs(b) < 270 &&
          (s
            ? ((f *= -1),
              (b += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
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
        (i.scaleX = ke(f)),
        (i.scaleY = ke(m)),
        (i.rotation = ke(h) + a),
        (i.rotationX = ke(v) + a),
        (i.rotationY = ke(w) + a),
        (i.skewX = b + a),
        (i.skewY = E + a),
        (i.transformPerspective = g + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (n[Lt] = ps(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ft.force3D),
        (i.renderTransform = i.svg ? Cf : Xl ? ru : xf),
        (i.uncache = 0),
        i
      );
    },
    ps = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    $o = function (e, t, i) {
      var n = at(t);
      return ke(parseFloat(t) + parseFloat(Xi(e, "x", i + "px", n))) + n;
    },
    xf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        ru(e, t);
    },
    fr = "0deg",
    Sn = "0px",
    pr = ") ",
    ru = function (e, t) {
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
        h = i.scaleY,
        v = i.transformPerspective,
        w = i.force3D,
        b = i.target,
        E = i.zOrigin,
        g = "",
        C = (w === "auto" && e && e !== 1) || w === !0;
      if (E && (d !== fr || c !== fr)) {
        var x = parseFloat(c) * Br,
          P = Math.sin(x),
          M = Math.cos(x),
          k;
        (x = parseFloat(d) * Br),
          (k = Math.cos(x)),
          (o = $o(b, o, P * k * -E)),
          (a = $o(b, a, -Math.sin(x) * -E)),
          (l = $o(b, l, M * k * -E + E));
      }
      v !== Sn && (g += "perspective(" + v + pr),
        (n || s) && (g += "translate(" + n + "%, " + s + "%) "),
        (C || o !== Sn || a !== Sn || l !== Sn) &&
          (g +=
            l !== Sn || C
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + pr),
        u !== fr && (g += "rotate(" + u + pr),
        c !== fr && (g += "rotateY(" + c + pr),
        d !== fr && (g += "rotateX(" + d + pr),
        (p !== fr || f !== fr) && (g += "skew(" + p + ", " + f + pr),
        (m !== 1 || h !== 1) && (g += "scale(" + m + ", " + h + pr),
        (b.style[Ce] = g || "translate(0, 0)");
    },
    Cf = function (e, t) {
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
        h = i.yOrigin,
        v = i.xOffset,
        w = i.yOffset,
        b = i.forceCSS,
        E = parseFloat(o),
        g = parseFloat(a),
        C,
        x,
        P,
        M,
        k;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Br),
            (u *= Br),
            (C = Math.cos(l) * d),
            (x = Math.sin(l) * d),
            (P = Math.sin(l - u) * -p),
            (M = Math.cos(l - u) * p),
            u &&
              ((c *= Br),
              (k = Math.tan(u - c)),
              (k = Math.sqrt(1 + k * k)),
              (P *= k),
              (M *= k),
              c &&
                ((k = Math.tan(c)),
                (k = Math.sqrt(1 + k * k)),
                (C *= k),
                (x *= k))),
            (C = ke(C)),
            (x = ke(x)),
            (P = ke(P)),
            (M = ke(M)))
          : ((C = d), (M = p), (x = P = 0)),
        ((E && !~(o + "").indexOf("px")) || (g && !~(a + "").indexOf("px"))) &&
          ((E = Xi(f, "x", o, "px")), (g = Xi(f, "y", a, "px"))),
        (m || h || v || w) &&
          ((E = ke(E + m - (m * C + h * P) + v)),
          (g = ke(g + h - (m * x + h * M) + w))),
        (n || s) &&
          ((k = f.getBBox()),
          (E = ke(E + (n / 100) * k.width)),
          (g = ke(g + (s / 100) * k.height))),
        (k =
          "matrix(" +
          C +
          "," +
          x +
          "," +
          P +
          "," +
          M +
          "," +
          E +
          "," +
          g +
          ")"),
        f.setAttribute("transform", k),
        b && (f.style[Ce] = k);
    },
    Ef = function (e, t, i, n, s) {
      var o = 360,
        a = Ye(s),
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
            ? (u = ((u + o * ql) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * ql) % o) - ~~(u / o) * o)),
        (e._pt = p = new Ot(e._pt, t, i, n, u, uf)),
        (p.e = c),
        (p.u = "deg"),
        e._props.push(i),
        p
      );
    },
    nu = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Af = function (e, t, i) {
      var n = nu({}, i._gsap),
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
          (o[Ce] = t),
          (a = bn(i, 1)),
          dr(i, Ce),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Ce]),
          (o[Ce] = t),
          (a = bn(i, 1)),
          (o[Ce] = u));
      for (l in Di)
        (u = n[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = at(u)),
            (m = at(c)),
            (d = f !== m ? Xi(i, l, u, m) : parseFloat(u)),
            (p = parseFloat(c)),
            (e._pt = new Ot(e._pt, a, l, d, p - d, No)),
            (e._pt.u = m || 0),
            e._props.push(l));
      nu(a, n);
    };
  Pt("padding,margin,Width,Radius", function (r, e) {
    var t = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (
        a
      ) {
        return e < 2 ? r + a : "border" + a + r;
      });
    fs[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
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
        o.forEach(function (m, h) {
          return (f[m] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
        }),
        a.init(l, f, d);
    };
  });
  var su = {
    name: "css",
    register: Bo,
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
        h,
        v,
        w,
        b,
        E,
        g,
        C,
        x,
        P,
        M;
      Io || Bo(),
        (this.styles = this.styles || Gl(e)),
        (M = this.styles.props),
        (this.tween = i);
      for (h in t)
        if (
          h !== "autoRound" &&
          ((c = t[h]), !(Vt[h] && Ml(h, t, i, n, e, s)))
        ) {
          if (
            ((f = typeof c),
            (m = fs[h]),
            f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = hn(c)),
            m)
          )
            m(this, e, h, c, i) && (P = 1);
          else if (h.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
              (c += ""),
              ($i.lastIndex = 0),
              $i.test(u) || ((v = at(u)), (w = at(c))),
              w ? v !== w && (u = Xi(e, h, u, w) + w) : v && (c += v),
              this.add(a, "setProperty", u, c, n, s, 0, 0, h),
              o.push(h),
              M.push(h, 0, a[h]);
          else if (f !== "undefined") {
            if (
              (l && h in l
                ? ((u =
                    typeof l[h] == "function" ? l[h].call(i, n, e, s) : l[h]),
                  Ye(u) && ~u.indexOf("random(") && (u = hn(u)),
                  at(u + "") ||
                    u === "auto" ||
                    (u += Ft.units[h] || at(ki(e, h)) || ""),
                  (u + "").charAt(1) === "=" && (u = ki(e, h)))
                : (u = ki(e, h)),
              (p = parseFloat(u)),
              (b = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              b && (c = c.substr(2)),
              (d = parseFloat(c)),
              h in wi &&
                (h === "autoAlpha" &&
                  (p === 1 && ki(e, "visibility") === "hidden" && d && (p = 0),
                  M.push("visibility", 0, a.visibility),
                  Gi(
                    this,
                    a,
                    "visibility",
                    p ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = wi[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (E = h in Di),
              E)
            ) {
              if (
                (this.styles.save(h),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = ri(e, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                g ||
                  ((C = e._gsap),
                  (C.renderTransform && !t.parseTransform) ||
                    bn(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && C.smooth),
                  (g = this._pt =
                    new Ot(this._pt, a, Ce, 0, 1, C.renderTransform, C, 0, -1)),
                  (g.dep = 1)),
                h === "scale")
              )
                (this._pt = new Ot(
                  this._pt,
                  C,
                  "scaleY",
                  C.scaleY,
                  (b ? Dr(C.scaleY, b + d) : d) - C.scaleY || 0,
                  No
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                M.push(Lt, 0, a[Lt]),
                  (c = Sf(c)),
                  C.svg
                    ? qo(e, c, 0, x, 0, this)
                    : ((w = parseFloat(c.split(" ")[2]) || 0),
                      w !== C.zOrigin && Gi(this, C, "zOrigin", C.zOrigin, w),
                      Gi(this, a, h, ps(u), ps(c)));
                continue;
              } else if (h === "svgOrigin") {
                qo(e, c, 1, x, 0, this);
                continue;
              } else if (h in eu) {
                Ef(this, C, h, p, b ? Dr(p, b + c) : c);
                continue;
              } else if (h === "smoothOrigin") {
                Gi(this, C, "smooth", C.smooth, c);
                continue;
              } else if (h === "force3D") {
                C[h] = c;
                continue;
              } else if (h === "transform") {
                Af(this, c, e);
                continue;
              }
            } else h in a || (h = qr(h) || h);
            if (
              E ||
              ((d || d === 0) && (p || p === 0) && !lf.test(c) && h in a)
            )
              (v = (u + "").substr((p + "").length)),
                d || (d = 0),
                (w = at(c) || (h in Ft.units ? Ft.units[h] : v)),
                v !== w && (p = Xi(e, h, u, w)),
                (this._pt = new Ot(
                  this._pt,
                  E ? C : a,
                  h,
                  p,
                  (b ? Dr(p, b + d) : d) - p,
                  !E && (w === "px" || h === "zIndex") && t.autoRound !== !1
                    ? df
                    : No
                )),
                (this._pt.u = w || 0),
                v !== w && w !== "%" && ((this._pt.b = u), (this._pt.r = cf));
            else if (h in a) bf.call(this, e, h, u, b ? b + c : c);
            else if (h in e) this.add(e, h, u || e[h], b ? b + c : c, n, s);
            else if (h !== "parseTransform") {
              uo(h, c);
              continue;
            }
            E ||
              (h in a
                ? M.push(h, 0, a[h])
                : typeof e[h] == "function"
                ? M.push(h, 2, e[h]())
                : M.push(h, 1, u || e[h])),
              o.push(h);
          }
        }
      P && zl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Ro())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: ki,
    aliases: wi,
    getSetter: function (e, t, i) {
      var n = wi[t];
      return (
        n && n.indexOf(",") < 0 && (t = n),
        t in Di && t !== Lt && (e._gsap.x || ki(e, "x"))
          ? i && Vl === i
            ? t === "scale"
              ? mf
              : hf
            : (Vl = i || {}) && (t === "scale" ? gf : vf)
          : e.style && !ro(e.style[t])
          ? ff
          : ~t.indexOf("-")
          ? pf
          : Oo(e, t)
      );
    },
    core: { _removeProperty: dr, _getMatrix: Vo },
  };
  (Mt.utils.checkPrefix = qr),
    (Mt.core.getStyleSaver = Gl),
    (function (r, e, t, i) {
      var n = Pt(r + "," + e + "," + t, function (s) {
        Di[s] = 1;
      });
      Pt(e, function (s) {
        (Ft.units[s] = "deg"), (eu[s] = 1);
      }),
        (wi[n[13]] = r + "," + e),
        Pt(i, function (s) {
          var o = s.split(":");
          wi[o[1]] = n[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Pt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (r) {
        Ft.units[r] = "px";
      }
    ),
    Mt.registerPlugin(su);
  var G = Mt.registerPlugin(su) || Mt;
  function Pf(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i);
    }
  }
  function Of(r, e, t) {
    return e && Pf(r.prototype, e), r;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var lt,
    hs,
    Wt,
    Yi,
    ji,
    $r,
    ou,
    hr,
    Tn,
    au,
    Ii,
    di,
    lu,
    uu = function () {
      return (
        lt ||
        (typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt)
      );
    },
    cu = 1,
    Hr = [],
    oe = [],
    bi = [],
    xn = Date.now,
    Ho = function (e, t) {
      return t;
    },
    Mf = function () {
      var e = Tn.core,
        t = e.bridge || {},
        i = e._scrollers,
        n = e._proxies;
      i.push.apply(i, oe),
        n.push.apply(n, bi),
        (oe = i),
        (bi = n),
        (Ho = function (o, a) {
          return t[o](a);
        });
    },
    Ui = function (e, t) {
      return ~bi.indexOf(e) && bi[bi.indexOf(e) + 1][t];
    },
    Cn = function (e) {
      return !!~au.indexOf(e);
    },
    wt = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
    },
    bt = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    ms = "scrollLeft",
    gs = "scrollTop",
    Wo = function () {
      return (Ii && Ii.isPressed) || oe.cache++;
    },
    vs = function (e, t) {
      var i = function n(s) {
        if (s || s === 0) {
          cu && (Wt.history.scrollRestoration = "manual");
          var o = Ii && Ii.isPressed;
          (s = n.v = Math.round(s) || (Ii && Ii.iOS ? 1 : 0)),
            e(s),
            (n.cacheID = oe.cache),
            o && Ho("ss", s);
        } else
          (t || oe.cache !== n.cacheID || Ho("ref")) &&
            ((n.cacheID = oe.cache), (n.v = e()));
        return n.v + n.offset;
      };
      return (i.offset = 0), e && i;
    },
    St = {
      s: ms,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: vs(function (r) {
        return arguments.length
          ? Wt.scrollTo(r, Ve.sc())
          : Wt.pageXOffset || Yi[ms] || ji[ms] || $r[ms] || 0;
      }),
    },
    Ve = {
      s: gs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: St,
      sc: vs(function (r) {
        return arguments.length
          ? Wt.scrollTo(St.sc(), r)
          : Wt.pageYOffset || Yi[gs] || ji[gs] || $r[gs] || 0;
      }),
    },
    Dt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || lt.utils.toArray)(e)[0] ||
        (typeof e == "string" && lt.config().nullTargetWarn !== !1
          ? void 0
          : null)
      );
    },
    Lf = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Ki = function (e, t) {
      var i = t.s,
        n = t.sc;
      Cn(e) && (e = Yi.scrollingElement || ji);
      var s = oe.indexOf(e),
        o = n === Ve.sc ? 1 : 2;
      !~s && (s = oe.push(e) - 1), oe[s + o] || wt(e, "scroll", Wo);
      var a = oe[s + o],
        l =
          a ||
          (oe[s + o] =
            vs(Ui(e, i), !0) ||
            (Cn(e)
              ? n
              : vs(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = lt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Go = function (e, t, i) {
      var n = e,
        s = e,
        o = xn(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (m, h) {
          var v = xn();
          h || v - o > l
            ? ((s = n), (n = m), (a = o), (o = v))
            : i
            ? (n += m)
            : (n = s + ((m - s) / (v - a)) * (o - a));
        },
        d = function () {
          (s = n = i ? 0 : n), (a = o = 0);
        },
        p = function (m) {
          var h = a,
            v = s,
            w = xn();
          return (
            (m || m === 0) && m !== n && c(m),
            o === a || w - a > u
              ? 0
              : ((n + (i ? v : -v)) / ((i ? w : o) - h)) * 1e3
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
    du = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    fu = function () {
      (Tn = lt.core.globals().ScrollTrigger), Tn && Tn.core && Mf();
    },
    pu = function (e) {
      return (
        (lt = e || uu()),
        !hs &&
          lt &&
          typeof document < "u" &&
          document.body &&
          ((Wt = window),
          (Yi = document),
          (ji = Yi.documentElement),
          ($r = Yi.body),
          (au = [Wt, Yi, ji, $r]),
          (lu = lt.core.context || function () {}),
          (hr = "onpointerenter" in $r ? "pointer" : "mouse"),
          (ou = Ie.isTouch =
            Wt.matchMedia &&
            Wt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Wt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (di = Ie.eventTypes =
            (
              "ontouchstart" in ji
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in ji
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (cu = 0);
          }, 500),
          fu(),
          (hs = 1)),
        hs
      );
    };
  (St.op = Ve), (oe.cache = 0);
  var Ie = (function () {
    function r(t) {
      this.init(t);
    }
    var e = r.prototype;
    return (
      (e.init = function (i) {
        hs || pu(lt), Tn || fu();
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
          h = i.event,
          v = i.onDragStart,
          w = i.onDragEnd,
          b = i.onDrag,
          E = i.onPress,
          g = i.onRelease,
          C = i.onRight,
          x = i.onLeft,
          P = i.onUp,
          M = i.onDown,
          k = i.onChangeX,
          L = i.onChangeY,
          R = i.onChange,
          A = i.onToggleX,
          z = i.onToggleY,
          y = i.onHover,
          _ = i.onHoverEnd,
          S = i.onMove,
          O = i.ignoreCheck,
          D = i.isNormalizer,
          I = i.onGestureStart,
          T = i.onGestureEnd,
          B = i.onWheel,
          q = i.onEnable,
          Q = i.onDisable,
          X = i.onClick,
          ie = i.scrollSpeed,
          ue = i.capture,
          de = i.allowClicks,
          be = i.lockAxis,
          Ee = i.onLockAxis;
        (this.target = a = Dt(a) || ji),
          (this.vars = i),
          f && (f = lt.utils.toArray(f)),
          (n = n || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (ie = ie || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Wt.getComputedStyle($r).lineHeight) || 22);
        var rt,
          Me,
          $e,
          se,
          ye,
          He,
          We,
          N = this,
          Ke = 0,
          Rt = 0,
          Ze = i.passive || (!c && i.passive !== !1),
          fe = Ki(a, St),
          Et = Ki(a, Ve),
          pt = fe(),
          Zt = Et(),
          Ae =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            di[0] === "pointerdown",
          Qt = Cn(a),
          we = a.ownerDocument || Yi,
          ht = [0, 0, 0],
          zt = [0, 0, 0],
          pi = 0,
          Ar = function () {
            return (pi = xn());
          },
          Le = function (Y, pe) {
            return (
              ((N.event = Y) && f && Lf(Y.target, f)) ||
              (pe && Ae && Y.pointerType !== "touch") ||
              (O && O(Y, pe))
            );
          },
          ln = function () {
            N._vx.reset(), N._vy.reset(), Me.pause(), d && d(N);
          },
          F = function () {
            var Y = (N.deltaX = du(ht)),
              pe = (N.deltaY = du(zt)),
              $ = Math.abs(Y) >= n,
              ee = Math.abs(pe) >= n;
            R && ($ || ee) && R(N, Y, pe, ht, zt),
              $ &&
                (C && N.deltaX > 0 && C(N),
                x && N.deltaX < 0 && x(N),
                k && k(N),
                A && N.deltaX < 0 != Ke < 0 && A(N),
                (Ke = N.deltaX),
                (ht[0] = ht[1] = ht[2] = 0)),
              ee &&
                (M && N.deltaY > 0 && M(N),
                P && N.deltaY < 0 && P(N),
                L && L(N),
                z && N.deltaY < 0 != Rt < 0 && z(N),
                (Rt = N.deltaY),
                (zt[0] = zt[1] = zt[2] = 0)),
              (se || $e) &&
                (S && S(N),
                $e && (v && $e === 1 && v(N), b && b(N), ($e = 0)),
                (se = !1)),
              He && !(He = !1) && Ee && Ee(N),
              ye && (B(N), (ye = !1)),
              (rt = 0);
          },
          H = function (Y, pe, $) {
            (ht[$] += Y),
              (zt[$] += pe),
              N._vx.update(Y),
              N._vy.update(pe),
              u ? rt || (rt = requestAnimationFrame(F)) : F();
          },
          j = function (Y, pe) {
            be &&
              !We &&
              ((N.axis = We = Math.abs(Y) > Math.abs(pe) ? "x" : "y"),
              (He = !0)),
              We !== "y" && ((ht[2] += Y), N._vx.update(Y, !0)),
              We !== "x" && ((zt[2] += pe), N._vy.update(pe, !0)),
              u ? rt || (rt = requestAnimationFrame(F)) : F();
          },
          le = function (Y) {
            if (!Le(Y, 1)) {
              Y = En(Y, c);
              var pe = Y.clientX,
                $ = Y.clientY,
                ee = pe - N.x,
                K = $ - N.y,
                te = N.isDragging;
              (N.x = pe),
                (N.y = $),
                (te ||
                  ((ee || K) &&
                    (Math.abs(N.startX - pe) >= s ||
                      Math.abs(N.startY - $) >= s))) &&
                  (($e = te ? 2 : 1), te || (N.isDragging = !0), j(ee, K));
            }
          },
          re = (N.onPress = function (J) {
            Le(J, 1) ||
              (J && J.button) ||
              ((N.axis = We = null),
              Me.pause(),
              (N.isPressed = !0),
              (J = En(J)),
              (Ke = Rt = 0),
              (N.startX = N.x = J.clientX),
              (N.startY = N.y = J.clientY),
              N._vx.reset(),
              N._vy.reset(),
              wt(D ? a : we, di[1], le, Ze, !0),
              (N.deltaX = N.deltaY = 0),
              E && E(N));
          }),
          U = (N.onRelease = function (J) {
            if (!Le(J, 1)) {
              bt(D ? a : we, di[1], le, !0);
              var Y = !isNaN(N.y - N.startY),
                pe = N.isDragging,
                $ =
                  pe &&
                  (Math.abs(N.x - N.startX) > 3 ||
                    Math.abs(N.y - N.startY) > 3),
                ee = En(J);
              !$ &&
                Y &&
                (N._vx.reset(),
                N._vy.reset(),
                c &&
                  de &&
                  lt.delayedCall(0.08, function () {
                    if (xn() - pi > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (we.createEvent) {
                        var K = we.createEvent("MouseEvents");
                        K.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Wt,
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
                (N.isDragging = N.isGesturing = N.isPressed = !1),
                d && pe && !D && Me.restart(!0),
                $e && F(),
                w && pe && w(N),
                g && g(N, $);
            }
          }),
          Be = function (Y) {
            return (
              Y.touches &&
              Y.touches.length > 1 &&
              (N.isGesturing = !0) &&
              I(Y, N.isDragging)
            );
          },
          Qe = function () {
            return (N.isGesturing = !1) || T(N);
          },
          Nt = function (Y) {
            if (!Le(Y)) {
              var pe = fe(),
                $ = Et();
              H((pe - pt) * ie, ($ - Zt) * ie, 1),
                (pt = pe),
                (Zt = $),
                d && Me.restart(!0);
            }
          },
          Ge = function (Y) {
            if (!Le(Y)) {
              (Y = En(Y, c)), B && (ye = !0);
              var pe =
                (Y.deltaMode === 1
                  ? l
                  : Y.deltaMode === 2
                  ? Wt.innerHeight
                  : 1) * m;
              H(Y.deltaX * pe, Y.deltaY * pe, 0), d && !D && Me.restart(!0);
            }
          },
          hi = function (Y) {
            if (!Le(Y)) {
              var pe = Y.clientX,
                $ = Y.clientY,
                ee = pe - N.x,
                K = $ - N.y;
              (N.x = pe),
                (N.y = $),
                (se = !0),
                d && Me.restart(!0),
                (ee || K) && j(ee, K);
            }
          },
          mi = function (Y) {
            (N.event = Y), y(N);
          },
          mt = function (Y) {
            (N.event = Y), _(N);
          },
          Pr = function (Y) {
            return Le(Y) || (En(Y, c) && X(N));
          };
        (Me = N._dc = lt.delayedCall(p || 0.25, ln).pause()),
          (N.deltaX = N.deltaY = 0),
          (N._vx = Go(0, 50, !0)),
          (N._vy = Go(0, 50, !0)),
          (N.scrollX = fe),
          (N.scrollY = Et),
          (N.isDragging = N.isGesturing = N.isPressed = !1),
          lu(this),
          (N.enable = function (J) {
            return (
              N.isEnabled ||
                (wt(Qt ? we : a, "scroll", Wo),
                o.indexOf("scroll") >= 0 &&
                  wt(Qt ? we : a, "scroll", Nt, Ze, ue),
                o.indexOf("wheel") >= 0 && wt(a, "wheel", Ge, Ze, ue),
                ((o.indexOf("touch") >= 0 && ou) ||
                  o.indexOf("pointer") >= 0) &&
                  (wt(a, di[0], re, Ze, ue),
                  wt(we, di[2], U),
                  wt(we, di[3], U),
                  de && wt(a, "click", Ar, !0, !0),
                  X && wt(a, "click", Pr),
                  I && wt(we, "gesturestart", Be),
                  T && wt(we, "gestureend", Qe),
                  y && wt(a, hr + "enter", mi),
                  _ && wt(a, hr + "leave", mt),
                  S && wt(a, hr + "move", hi)),
                (N.isEnabled = !0),
                (N.isDragging = N.isGesturing = N.isPressed = se = $e = !1),
                N._vx.reset(),
                N._vy.reset(),
                (pt = fe()),
                (Zt = Et()),
                J && J.type && re(J),
                q && q(N)),
              N
            );
          }),
          (N.disable = function () {
            N.isEnabled &&
              (Hr.filter(function (J) {
                return J !== N && Cn(J.target);
              }).length || bt(Qt ? we : a, "scroll", Wo),
              N.isPressed &&
                (N._vx.reset(), N._vy.reset(), bt(D ? a : we, di[1], le, !0)),
              bt(Qt ? we : a, "scroll", Nt, ue),
              bt(a, "wheel", Ge, ue),
              bt(a, di[0], re, ue),
              bt(we, di[2], U),
              bt(we, di[3], U),
              bt(a, "click", Ar, !0),
              bt(a, "click", Pr),
              bt(we, "gesturestart", Be),
              bt(we, "gestureend", Qe),
              bt(a, hr + "enter", mi),
              bt(a, hr + "leave", mt),
              bt(a, hr + "move", hi),
              (N.isEnabled = N.isPressed = N.isDragging = !1),
              Q && Q(N));
          }),
          (N.kill = N.revert =
            function () {
              N.disable();
              var J = Hr.indexOf(N);
              J >= 0 && Hr.splice(J, 1), Ii === N && (Ii = 0);
            }),
          Hr.push(N),
          D && Cn(a) && (Ii = N),
          N.enable(h);
      }),
      Of(r, [
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
  (Ie.version = "3.13.0"),
    (Ie.create = function (r) {
      return new Ie(r);
    }),
    (Ie.register = pu),
    (Ie.getAll = function () {
      return Hr.slice();
    }),
    (Ie.getById = function (r) {
      return Hr.filter(function (e) {
        return e.vars.id === r;
      })[0];
    }),
    uu() && lt.registerPlugin(Ie);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var W,
    Wr,
    ae,
    _e,
    Gt,
    he,
    Xo,
    _s,
    An,
    Pn,
    On,
    ys,
    ut,
    ws,
    Yo,
    Tt,
    hu,
    mu,
    Gr,
    gu,
    jo,
    vu,
    xt,
    Uo,
    _u,
    yu,
    Zi,
    Ko,
    Zo,
    Xr,
    Qo,
    bs,
    Jo,
    ea,
    Ss = 1,
    ct = Date.now,
    ta = ct(),
    ni = 0,
    Mn = 0,
    wu = function (e, t, i) {
      var n = Xt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
    },
    bu = function (e, t) {
      return t && (!Xt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Df = function r() {
      return Mn && requestAnimationFrame(r);
    },
    Su = function () {
      return (ws = 1);
    },
    Tu = function () {
      return (ws = 0);
    },
    Si = function (e) {
      return e;
    },
    Ln = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    xu = function () {
      return typeof window < "u";
    },
    Cu = function () {
      return W || (xu() && (W = window.gsap) && W.registerPlugin && W);
    },
    mr = function (e) {
      return !!~Xo.indexOf(e);
    },
    Eu = function (e) {
      return (
        (e === "Height" ? Qo : ae["inner" + e]) ||
        Gt["client" + e] ||
        he["client" + e]
      );
    },
    Au = function (e) {
      return (
        Ui(e, "getBoundingClientRect") ||
        (mr(e)
          ? function () {
              return (Rs.width = ae.innerWidth), (Rs.height = Qo), Rs;
            }
          : function () {
              return Ri(e);
            })
      );
    },
    kf = function (e, t, i) {
      var n = i.d,
        s = i.d2,
        o = i.a;
      return (o = Ui(e, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (t ? Eu(s) : e["client" + s]) || 0;
          };
    },
    If = function (e, t) {
      return !t || ~bi.indexOf(e)
        ? Au(e)
        : function () {
            return Rs;
          };
    },
    Ti = function (e, t) {
      var i = t.s,
        n = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + n) && (o = Ui(e, i))
          ? o() - Au(e)()[s]
          : mr(e)
          ? (Gt[i] || he[i]) - Eu(n)
          : e[i] - e["offset" + n]
      );
    },
    Ts = function (e, t) {
      for (var i = 0; i < Gr.length; i += 3)
        (!t || ~t.indexOf(Gr[i + 1])) && e(Gr[i], Gr[i + 1], Gr[i + 2]);
    },
    Xt = function (e) {
      return typeof e == "string";
    },
    dt = function (e) {
      return typeof e == "function";
    },
    Dn = function (e) {
      return typeof e == "number";
    },
    gr = function (e) {
      return typeof e == "object";
    },
    kn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    ia = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Yr = Math.abs,
    Pu = "left",
    Ou = "top",
    ra = "right",
    na = "bottom",
    vr = "width",
    _r = "height",
    In = "Right",
    Rn = "Left",
    zn = "Top",
    Nn = "Bottom",
    Fe = "padding",
    si = "margin",
    jr = "Width",
    sa = "Height",
    qe = "px",
    oi = function (e) {
      return ae.getComputedStyle(e);
    },
    Rf = function (e) {
      var t = oi(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Mu = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ri = function (e, t) {
      var i =
          t &&
          oi(e)[Yo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          W.to(e, {
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
    xs = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Lu = function (e) {
      var t = [],
        i = e.labels,
        n = e.duration(),
        s;
      for (s in i) t.push(i[s] / n);
      return t;
    },
    zf = function (e) {
      return function (t) {
        return W.utils.snap(Lu(e), t);
      };
    },
    oa = function (e) {
      var t = W.utils.snap(e),
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
    Nf = function (e) {
      return function (t, i) {
        return oa(Lu(e))(t, i.direction);
      };
    },
    Cs = function (e, t, i, n) {
      return i.split(",").forEach(function (s) {
        return e(t, s, n);
      });
    },
    je = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: !n, capture: !!s });
    },
    Ue = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    Es = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Du = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    As = { toggleActions: "play", anticipatePin: 0 },
    Ps = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Os = function (e, t) {
      if (Xt(e)) {
        var i = e.indexOf("="),
          n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            n +
            (e in Ps
              ? Ps[e] * t
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
        p = s.indent,
        f = s.fontWeight,
        m = _e.createElement("div"),
        h = mr(i) || Ui(i, "pinType") === "fixed",
        v = e.indexOf("scroller") !== -1,
        w = h ? he : i,
        b = e.indexOf("start") !== -1,
        E = b ? u : c,
        g =
          "border-color:" +
          E +
          ";font-size:" +
          d +
          ";color:" +
          E +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (g += "position:" + ((v || l) && h ? "fixed;" : "absolute;")),
        (v || l || !h) &&
          (g += (n === Ve ? ra : na) + ":" + (o + parseFloat(p)) + "px;"),
        a &&
          (g +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (m._isStart = b),
        m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (m.style.cssText = g),
        (m.innerText = t || t === 0 ? e + "-" + t : e),
        w.children[0] ? w.insertBefore(m, w.children[0]) : w.appendChild(m),
        (m._offset = m["offset" + n.op.d2]),
        Ls(m, 0, n, b),
        m
      );
    },
    Ls = function (e, t, i, n) {
      var s = { display: "block" },
        o = i[n ? "os2" : "p2"],
        a = i[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (s[i.a + "Percent"] = n ? -100 : 0),
        (s[i.a] = n ? "1px" : 0),
        (s["border" + o + jr] = 1),
        (s["border" + a + jr] = 0),
        (s[i.p] = t + "px"),
        W.set(e, s);
    },
    ne = [],
    aa = {},
    Fn,
    ku = function () {
      return ct() - ni > 34 && (Fn || (Fn = requestAnimationFrame(zi)));
    },
    Ur = function () {
      (!xt || !xt.isPressed || xt.startX > he.clientWidth) &&
        (oe.cache++,
        xt ? Fn || (Fn = requestAnimationFrame(zi)) : zi(),
        ni || wr("scrollStart"),
        (ni = ct()));
    },
    la = function () {
      (yu = ae.innerWidth), (_u = ae.innerHeight);
    },
    Bn = function (e) {
      oe.cache++,
        (e === !0 ||
          (!ut &&
            !vu &&
            !_e.fullscreenElement &&
            !_e.webkitFullscreenElement &&
            (!Uo ||
              yu !== ae.innerWidth ||
              Math.abs(ae.innerHeight - _u) > ae.innerHeight * 0.25))) &&
          _s.restart(!0);
    },
    yr = {},
    Ff = [],
    Iu = function r() {
      return Ue(Z, "scrollEnd", r) || Sr(!0);
    },
    wr = function (e) {
      return (
        (yr[e] &&
          yr[e].map(function (t) {
            return t();
          })) ||
        Ff
      );
    },
    Yt = [],
    Ru = function (e) {
      for (var t = 0; t < Yt.length; t += 5)
        (!e || (Yt[t + 4] && Yt[t + 4].query === e)) &&
          ((Yt[t].style.cssText = Yt[t + 1]),
          Yt[t].getBBox && Yt[t].setAttribute("transform", Yt[t + 2] || ""),
          (Yt[t + 3].uncache = 1));
    },
    ua = function (e, t) {
      var i;
      for (Tt = 0; Tt < ne.length; Tt++)
        (i = ne[Tt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (bs = !0), t && Ru(t), t || wr("revert");
    },
    zu = function (e, t) {
      oe.cache++,
        (t || !Ct) &&
          oe.forEach(function (i) {
            return dt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Xt(e) && (ae.history.scrollRestoration = Zo = e);
    },
    Ct,
    br = 0,
    Nu,
    Bf = function () {
      if (Nu !== br) {
        var e = (Nu = br);
        requestAnimationFrame(function () {
          return e === br && Sr(!0);
        });
      }
    },
    Fu = function () {
      he.appendChild(Xr),
        (Qo = (!xt && Xr.offsetHeight) || ae.innerHeight),
        he.removeChild(Xr);
    },
    Bu = function (e) {
      return An(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    Sr = function (e, t) {
      if (
        ((Gt = _e.documentElement),
        (he = _e.body),
        (Xo = [ae, _e, Gt, he]),
        ni && !e && !bs)
      ) {
        je(Z, "scrollEnd", Iu);
        return;
      }
      Fu(),
        (Ct = Z.isRefreshing = !0),
        oe.forEach(function (n) {
          return dt(n) && ++n.cacheID && (n.rec = n());
        });
      var i = wr("refreshInit");
      gu && Z.sort(),
        t || ua(),
        oe.forEach(function (n) {
          dt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
        }),
        ne.slice(0).forEach(function (n) {
          return n.refresh();
        }),
        (bs = !1),
        ne.forEach(function (n) {
          if (n._subPinOffset && n.pin) {
            var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = n.pin[s];
            n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
          }
        }),
        (Jo = 1),
        Bu(!0),
        ne.forEach(function (n) {
          var s = Ti(n.scroller, n._dir),
            o = n.vars.end === "max" || (n._endClamp && n.end > s),
            a = n._startClamp && n.start >= s;
          (o || a) &&
            n.setPositions(
              a ? s - 1 : n.start,
              o ? Math.max(a ? s : n.start + 1, s) : n.end,
              !0
            );
        }),
        Bu(!1),
        (Jo = 0),
        i.forEach(function (n) {
          return n && n.render && n.render(-1);
        }),
        oe.forEach(function (n) {
          dt(n) &&
            (n.smooth &&
              requestAnimationFrame(function () {
                return (n.target.style.scrollBehavior = "smooth");
              }),
            n.rec && n(n.rec));
        }),
        zu(Zo, 1),
        _s.pause(),
        br++,
        (Ct = 2),
        zi(2),
        ne.forEach(function (n) {
          return dt(n.vars.onRefresh) && n.vars.onRefresh(n);
        }),
        (Ct = Z.isRefreshing = !1),
        wr("refresh");
    },
    ca = 0,
    Ds = 1,
    Vn,
    zi = function (e) {
      if (e === 2 || (!Ct && !bs)) {
        (Z.isUpdating = !0), Vn && Vn.update(0);
        var t = ne.length,
          i = ct(),
          n = i - ta >= 50,
          s = t && ne[0].scroll();
        if (
          ((Ds = ca > s ? -1 : 1),
          Ct || (ca = s),
          n &&
            (ni && !ws && i - ni > 200 && ((ni = 0), wr("scrollEnd")),
            (On = ta),
            (ta = i)),
          Ds < 0)
        ) {
          for (Tt = t; Tt-- > 0; ) ne[Tt] && ne[Tt].update(0, n);
          Ds = 1;
        } else for (Tt = 0; Tt < t; Tt++) ne[Tt] && ne[Tt].update(0, n);
        Z.isUpdating = !1;
      }
      Fn = 0;
    },
    da = [
      Pu,
      Ou,
      na,
      ra,
      si + Nn,
      si + In,
      si + zn,
      si + Rn,
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
    ks = da.concat([
      vr,
      _r,
      "boxSizing",
      "max" + jr,
      "max" + sa,
      "position",
      si,
      Fe,
      Fe + zn,
      Fe + In,
      Fe + Nn,
      Fe + Rn,
    ]),
    Vf = function (e, t, i) {
      Kr(i);
      var n = e._gsap;
      if (n.spacerIsNative) Kr(n.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    fa = function (e, t, i, n) {
      if (!e._gsap.swappedIn) {
        for (var s = da.length, o = t.style, a = e.style, l; s--; )
          (l = da[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[na] = a[ra] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[vr] = xs(e, St) + qe),
          (o[_r] = xs(e, Ve) + qe),
          (o[Fe] = a[si] = a[Ou] = a[Pu] = "0"),
          Kr(n),
          (a[vr] = a["max" + jr] = i[vr]),
          (a[_r] = a["max" + sa] = i[_r]),
          (a[Fe] = i[Fe]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    qf = /([A-Z])/g,
    Kr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          n = 0,
          s,
          o;
        for ((e.t._gsap || W.core.getCache(e.t)).uncache = 1; n < i; n += 2)
          (o = e[n + 1]),
            (s = e[n]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(qf, "-$1").toLowerCase());
      }
    },
    Is = function (e) {
      for (var t = ks.length, i = e.style, n = [], s = 0; s < t; s++)
        n.push(ks[s], i[ks[s]]);
      return (n.t = e), n;
    },
    $f = function (e, t, i) {
      for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
      return (n.t = e.t), n;
    },
    Rs = { left: 0, top: 0 },
    Vu = function (e, t, i, n, s, o, a, l, u, c, d, p, f, m) {
      dt(e) && (e = e(l)),
        Xt(e) &&
          e.substr(0, 3) === "max" &&
          (e = p + (e.charAt(4) === "=" ? Os("0" + e.substr(3), i) : 0));
      var h = f ? f.time() : 0,
        v,
        w,
        b;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Dn(e)))
        f &&
          (e = W.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            p,
            e
          )),
          a && Ls(a, i, n, !0);
      else {
        dt(t) && (t = t(l));
        var E = (e || "0").split(" "),
          g,
          C,
          x,
          P;
        (b = Dt(t, l) || he),
          (g = Ri(b) || {}),
          (!g || (!g.left && !g.top)) &&
            oi(b).display === "none" &&
            ((P = b.style.display),
            (b.style.display = "block"),
            (g = Ri(b)),
            P ? (b.style.display = P) : b.style.removeProperty("display")),
          (C = Os(E[0], g[n.d])),
          (x = Os(E[1] || "0", i)),
          (e = g[n.p] - u[n.p] - c + C + s - x),
          a && Ls(a, x, n, i - x < 20 || (a._isStart && x > 20)),
          (i -= i - x);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
        var M = e + i,
          k = o._isStart;
        (v = "scroll" + n.d2),
          Ls(
            o,
            M,
            n,
            (k && M > 20) ||
              (!k && (d ? Math.max(he[v], Gt[v]) : o.parentNode[v]) <= M + 1)
          ),
          d &&
            ((u = Ri(a)),
            d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + qe));
      }
      return (
        f &&
          b &&
          ((v = Ri(b)),
          f.seek(p),
          (w = Ri(b)),
          (f._caScrollDist = v[n.p] - w[n.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(h),
        f ? e : Math.round(e)
      );
    },
    Hf = /(webkit|moz|length|cssText|inset)/i,
    qu = function (e, t, i, n) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === he) {
          (e._stOrig = s.cssText), (a = oi(e));
          for (o in a)
            !+o &&
              !Hf.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = n);
        } else s.cssText = e._stOrig;
        (W.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    $u = function (e, t, i) {
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
    zs = function (e, t, i) {
      var n = {};
      (n[t.p] = "+=" + i), W.set(e, n);
    },
    Hu = function (e, t) {
      var i = Ki(e, t),
        n = "_scroll" + t.p2,
        s = function o(a, l, u, c, d) {
          var p = o.tween,
            f = l.onComplete,
            m = {};
          u = u || i();
          var h = $u(i, u, function () {
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
              return h(u + c * p.ratio + d * p.ratio * p.ratio);
            }),
            (l.onUpdate = function () {
              oe.cache++, o.tween && zi();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(p);
            }),
            (p = o.tween = W.to(e, l)),
            p
          );
        };
      return (
        (e[n] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        je(e, "wheel", i.wheelHandler),
        Z.isTouch && je(e, "touchmove", i.wheelHandler),
        s
      );
    },
    Z = (function () {
      function r(t, i) {
        Wr || r.register(W), Ko(this), this.init(t, i);
      }
      var e = r.prototype;
      return (
        (e.init = function (i, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Mn)
          ) {
            this.update = this.refresh = this.kill = Si;
            return;
          }
          i = Mu(Xt(i) || Dn(i) || i.nodeType ? { trigger: i } : i, As);
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
            h = s.invalidateOnRefresh,
            v = s.anticipatePin,
            w = s.onScrubComplete,
            b = s.onSnapComplete,
            E = s.once,
            g = s.snap,
            C = s.pinReparent,
            x = s.pinSpacer,
            P = s.containerAnimation,
            M = s.fastScrollEnd,
            k = s.preventOverlaps,
            L =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? St
                : Ve,
            R = !d && d !== 0,
            A = Dt(i.scroller || ae),
            z = W.core.getCache(A),
            y = mr(A),
            _ =
              ("pinType" in i
                ? i.pinType
                : Ui(A, "pinType") || (y && "fixed")) === "fixed",
            S = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            O = R && i.toggleActions.split(" "),
            D = "markers" in i ? i.markers : As.markers,
            I = y ? 0 : parseFloat(oi(A)["border" + L.p2 + jr]) || 0,
            T = this,
            B =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(T);
              },
            q = kf(A, y, L),
            Q = If(A, y),
            X = 0,
            ie = 0,
            ue = 0,
            de = Ki(A, L),
            be,
            Ee,
            rt,
            Me,
            $e,
            se,
            ye,
            He,
            We,
            N,
            Ke,
            Rt,
            Ze,
            fe,
            Et,
            pt,
            Zt,
            Ae,
            Qt,
            we,
            ht,
            zt,
            pi,
            Ar,
            Le,
            ln,
            F,
            H,
            j,
            le,
            re,
            U,
            Be,
            Qe,
            Nt,
            Ge,
            hi,
            mi,
            mt;
          if (
            ((T._startClamp = T._endClamp = !1),
            (T._dir = L),
            (v *= 45),
            (T.scroller = A),
            (T.scroll = P ? P.time.bind(P) : de),
            (Me = de()),
            (T.vars = i),
            (n = n || i.animation),
            "refreshPriority" in i &&
              ((gu = 1), i.refreshPriority === -9999 && (Vn = T)),
            (z.tweenScroll = z.tweenScroll || {
              top: Hu(A, Ve),
              left: Hu(A, St),
            }),
            (T.tweenTo = be = z.tweenScroll[L.p]),
            (T.scrubDuration = function ($) {
              (Be = Dn($) && $),
                Be
                  ? U
                    ? U.duration($)
                    : (U = W.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Be,
                        paused: !0,
                        onComplete: function () {
                          return w && w(T);
                        },
                      }))
                  : (U && U.progress(1).kill(), (U = 0));
            }),
            n &&
              ((n.vars.lazy = !1),
              (n._initted && !T.isReverted) ||
                (n.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  n.duration() &&
                  n.render(0, !0, !0)),
              (T.animation = n.pause()),
              (n.scrollTrigger = T),
              T.scrubDuration(d),
              (le = 0),
              l || (l = n.vars.id)),
            g &&
              ((!gr(g) || g.push) && (g = { snapTo: g }),
              "scrollBehavior" in he.style &&
                W.set(y ? [he, Gt] : A, { scrollBehavior: "auto" }),
              oe.forEach(function ($) {
                return (
                  dt($) &&
                  $.target === (y ? _e.scrollingElement || Gt : A) &&
                  ($.smooth = !1)
                );
              }),
              (rt = dt(g.snapTo)
                ? g.snapTo
                : g.snapTo === "labels"
                ? zf(n)
                : g.snapTo === "labelsDirectional"
                ? Nf(n)
                : g.directional !== !1
                ? function ($, ee) {
                    return oa(g.snapTo)($, ct() - ie < 500 ? 0 : ee.direction);
                  }
                : W.utils.snap(g.snapTo)),
              (Qe = g.duration || { min: 0.1, max: 2 }),
              (Qe = gr(Qe) ? Pn(Qe.min, Qe.max) : Pn(Qe, Qe)),
              (Nt = W.delayedCall(g.delay || Be / 2 || 0.1, function () {
                var $ = de(),
                  ee = ct() - ie < 500,
                  K = be.tween;
                if (
                  (ee || Math.abs(T.getVelocity()) < 10) &&
                  !K &&
                  !ws &&
                  X !== $
                ) {
                  var te = ($ - se) / fe,
                    Je = n && !R ? n.totalProgress() : te,
                    ce = ee ? 0 : ((Je - re) / (ct() - On)) * 1e3 || 0,
                    Re = W.utils.clamp(-te, 1 - te, (Yr(ce / 2) * ce) / 0.185),
                    gt = te + (g.inertia === !1 ? 0 : Re),
                    De,
                    Te,
                    ve = g,
                    gi = ve.onStart,
                    Pe = ve.onInterrupt,
                    Jt = ve.onComplete;
                  if (
                    ((De = rt(gt, T)),
                    Dn(De) || (De = gt),
                    (Te = Math.max(0, Math.round(se + De * fe))),
                    $ <= ye && $ >= se && Te !== $)
                  ) {
                    if (K && !K._initted && K.data <= Yr(Te - $)) return;
                    g.inertia === !1 && (Re = De - te),
                      be(
                        Te,
                        {
                          duration: Qe(
                            Yr(
                              (Math.max(Yr(gt - Je), Yr(De - Je)) * 0.185) /
                                ce /
                                0.05 || 0
                            )
                          ),
                          ease: g.ease || "power3",
                          data: Yr(Te - $),
                          onInterrupt: function () {
                            return Nt.restart(!0) && Pe && Pe(T);
                          },
                          onComplete: function () {
                            T.update(),
                              (X = de()),
                              n &&
                                !R &&
                                (U
                                  ? U.resetTo(
                                      "totalProgress",
                                      De,
                                      n._tTime / n._tDur
                                    )
                                  : n.progress(De)),
                              (le = re =
                                n && !R ? n.totalProgress() : T.progress),
                              b && b(T),
                              Jt && Jt(T);
                          },
                        },
                        $,
                        Re * fe,
                        Te - $ - Re * fe
                      ),
                      gi && gi(T, be.tween);
                  }
                } else T.isActive && X !== $ && Nt.restart(!0);
              }).pause())),
            l && (aa[l] = T),
            (p = T.trigger = Dt(p || (f !== !0 && f))),
            (mt = p && p._gsap && p._gsap.stRevert),
            mt && (mt = mt(T)),
            (f = f === !0 ? p : Dt(f)),
            Xt(a) && (a = { targets: p, className: a }),
            f &&
              (m === !1 ||
                m === si ||
                (m =
                  !m &&
                  f.parentNode &&
                  f.parentNode.style &&
                  oi(f.parentNode).display === "flex"
                    ? !1
                    : Fe),
              (T.pin = f),
              (Ee = W.core.getCache(f)),
              Ee.spacer
                ? (Et = Ee.pinState)
                : (x &&
                    ((x = Dt(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (Ee.spacerIsNative = !!x),
                    x && (Ee.spacerState = Is(x))),
                  (Ee.spacer = Ae = x || _e.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (Ee.pinState = Et = Is(f))),
              i.force3D !== !1 && W.set(f, { force3D: !0 }),
              (T.spacer = Ae = Ee.spacer),
              (j = oi(f)),
              (Ar = j[m + L.os2]),
              (we = W.getProperty(f)),
              (ht = W.quickSetter(f, L.a, qe)),
              fa(f, Ae, j),
              (Zt = Is(f))),
            D)
          ) {
            (Rt = gr(D) ? Mu(D, Du) : Du),
              (N = Ms("scroller-start", l, A, L, Rt, 0)),
              (Ke = Ms("scroller-end", l, A, L, Rt, 0, N)),
              (Qt = N["offset" + L.op.d2]);
            var Pr = Dt(Ui(A, "content") || A);
            (He = this.markerStart = Ms("start", l, Pr, L, Rt, Qt, 0, P)),
              (We = this.markerEnd = Ms("end", l, Pr, L, Rt, Qt, 0, P)),
              P && (mi = W.quickSetter([He, We], L.a, qe)),
              !_ &&
                !(bi.length && Ui(A, "fixedMarkers") === !0) &&
                (Rf(y ? he : A),
                W.set([N, Ke], { force3D: !0 }),
                (ln = W.quickSetter(N, L.a, qe)),
                (H = W.quickSetter(Ke, L.a, qe)));
          }
          if (P) {
            var J = P.vars.onUpdate,
              Y = P.vars.onUpdateParams;
            P.eventCallback("onUpdate", function () {
              T.update(0, 0, 1), J && J.apply(P, Y || []);
            });
          }
          if (
            ((T.previous = function () {
              return ne[ne.indexOf(T) - 1];
            }),
            (T.next = function () {
              return ne[ne.indexOf(T) + 1];
            }),
            (T.revert = function ($, ee) {
              if (!ee) return T.kill(!0);
              var K = $ !== !1 || !T.enabled,
                te = ut;
              K !== T.isReverted &&
                (K &&
                  ((Ge = Math.max(de(), T.scroll.rec || 0)),
                  (ue = T.progress),
                  (hi = n && n.progress())),
                He &&
                  [He, We, N, Ke].forEach(function (Je) {
                    return (Je.style.display = K ? "none" : "block");
                  }),
                K && ((ut = T), T.update(K)),
                f &&
                  (!C || !T.isActive) &&
                  (K ? Vf(f, Ae, Et) : fa(f, Ae, oi(f), Le)),
                K || T.update(K),
                (ut = te),
                (T.isReverted = K));
            }),
            (T.refresh = function ($, ee, K, te) {
              if (!((ut || !T.enabled) && !ee)) {
                if (f && $ && ni) {
                  je(r, "scrollEnd", Iu);
                  return;
                }
                !Ct && B && B(T),
                  (ut = T),
                  be.tween && !K && (be.tween.kill(), (be.tween = 0)),
                  U && U.pause(),
                  h &&
                    n &&
                    (n.revert({ kill: !1 }).invalidate(),
                    n.getChildren &&
                      n.getChildren(!0, !0, !1).forEach(function (ir) {
                        return ir.vars.immediateRender && ir.render(0, !0, !0);
                      })),
                  T.isReverted || T.revert(!0, !0),
                  (T._subPinOffset = !1);
                var Je = q(),
                  ce = Q(),
                  Re = P ? P.duration() : Ti(A, L),
                  gt = fe <= 0.01 || !fe,
                  De = 0,
                  Te = te || 0,
                  ve = gr(K) ? K.end : i.end,
                  gi = i.endTrigger || p,
                  Pe = gr(K)
                    ? K.start
                    : i.start ||
                      (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                  Jt = (T.pinnedContainer =
                    i.pinnedContainer && Dt(i.pinnedContainer, T)),
                  Pi = (p && Math.max(0, ne.indexOf(T))) || 0,
                  nt = Pi,
                  st,
                  vt,
                  Or,
                  Js,
                  _t,
                  Xe,
                  Oi,
                  Wa,
                  dd,
                  Qn,
                  Mi,
                  Jn,
                  eo;
                for (
                  D &&
                  gr(K) &&
                  ((Jn = W.getProperty(N, L.p)), (eo = W.getProperty(Ke, L.p)));
                  nt-- > 0;

                )
                  (Xe = ne[nt]),
                    Xe.end || Xe.refresh(0, 1) || (ut = T),
                    (Oi = Xe.pin),
                    Oi &&
                      (Oi === p || Oi === f || Oi === Jt) &&
                      !Xe.isReverted &&
                      (Qn || (Qn = []), Qn.unshift(Xe), Xe.revert(!0, !0)),
                    Xe !== ne[nt] && (Pi--, nt--);
                for (
                  dt(Pe) && (Pe = Pe(T)),
                    Pe = wu(Pe, "start", T),
                    se =
                      Vu(
                        Pe,
                        p,
                        Je,
                        L,
                        de(),
                        He,
                        N,
                        T,
                        ce,
                        I,
                        _,
                        Re,
                        P,
                        T._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    dt(ve) && (ve = ve(T)),
                    Xt(ve) &&
                      !ve.indexOf("+=") &&
                      (~ve.indexOf(" ")
                        ? (ve = (Xt(Pe) ? Pe.split(" ")[0] : "") + ve)
                        : ((De = Os(ve.substr(2), Je)),
                          (ve = Xt(Pe)
                            ? Pe
                            : (P
                                ? W.utils.mapRange(
                                    0,
                                    P.duration(),
                                    P.scrollTrigger.start,
                                    P.scrollTrigger.end,
                                    se
                                  )
                                : se) + De),
                          (gi = p))),
                    ve = wu(ve, "end", T),
                    ye =
                      Math.max(
                        se,
                        Vu(
                          ve || (gi ? "100% 0" : Re),
                          gi,
                          Je,
                          L,
                          de() + De,
                          We,
                          Ke,
                          T,
                          ce,
                          I,
                          _,
                          Re,
                          P,
                          T._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    De = 0,
                    nt = Pi;
                  nt--;

                )
                  (Xe = ne[nt]),
                    (Oi = Xe.pin),
                    Oi &&
                      Xe.start - Xe._pinPush <= se &&
                      !P &&
                      Xe.end > 0 &&
                      ((st =
                        Xe.end -
                        (T._startClamp ? Math.max(0, Xe.start) : Xe.start)),
                      ((Oi === p && Xe.start - Xe._pinPush < se) ||
                        Oi === Jt) &&
                        isNaN(Pe) &&
                        (De += st * (1 - Xe.progress)),
                      Oi === f && (Te += st));
                if (
                  ((se += De),
                  (ye += De),
                  T._startClamp && (T._startClamp += De),
                  T._endClamp &&
                    !Ct &&
                    ((T._endClamp = ye || -0.001),
                    (ye = Math.min(ye, Ti(A, L)))),
                  (fe = ye - se || ((se -= 0.01) && 0.001)),
                  gt &&
                    (ue = W.utils.clamp(0, 1, W.utils.normalize(se, ye, Ge))),
                  (T._pinPush = Te),
                  He &&
                    De &&
                    ((st = {}),
                    (st[L.a] = "+=" + De),
                    Jt && (st[L.p] = "-=" + de()),
                    W.set([He, We], st)),
                  f && !(Jo && T.end >= Ti(A, L)))
                )
                  (st = oi(f)),
                    (Js = L === Ve),
                    (Or = de()),
                    (zt = parseFloat(we(L.a)) + Te),
                    !Re &&
                      ye > 1 &&
                      ((Mi = (y ? _e.scrollingElement || Gt : A).style),
                      (Mi = {
                        style: Mi,
                        value: Mi["overflow" + L.a.toUpperCase()],
                      }),
                      y &&
                        oi(he)["overflow" + L.a.toUpperCase()] !== "scroll" &&
                        (Mi.style["overflow" + L.a.toUpperCase()] = "scroll")),
                    fa(f, Ae, st),
                    (Zt = Is(f)),
                    (vt = Ri(f, !0)),
                    (Wa = _ && Ki(A, Js ? St : Ve)()),
                    m
                      ? ((Le = [m + L.os2, fe + Te + qe]),
                        (Le.t = Ae),
                        (nt = m === Fe ? xs(f, L) + fe + Te : 0),
                        nt &&
                          (Le.push(L.d, nt + qe),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = nt + qe)),
                        Kr(Le),
                        Jt &&
                          ne.forEach(function (ir) {
                            ir.pin === Jt &&
                              ir.vars.pinSpacing !== !1 &&
                              (ir._subPinOffset = !0);
                          }),
                        _ && de(Ge))
                      : ((nt = xs(f, L)),
                        nt &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = nt + qe)),
                    _ &&
                      ((_t = {
                        top: vt.top + (Js ? Or - se : Wa) + qe,
                        left: vt.left + (Js ? Wa : Or - se) + qe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (_t[vr] = _t["max" + jr] = Math.ceil(vt.width) + qe),
                      (_t[_r] = _t["max" + sa] = Math.ceil(vt.height) + qe),
                      (_t[si] =
                        _t[si + zn] =
                        _t[si + In] =
                        _t[si + Nn] =
                        _t[si + Rn] =
                          "0"),
                      (_t[Fe] = st[Fe]),
                      (_t[Fe + zn] = st[Fe + zn]),
                      (_t[Fe + In] = st[Fe + In]),
                      (_t[Fe + Nn] = st[Fe + Nn]),
                      (_t[Fe + Rn] = st[Fe + Rn]),
                      (pt = $f(Et, _t, C)),
                      Ct && de(0)),
                    n
                      ? ((dd = n._initted),
                        jo(1),
                        n.render(n.duration(), !0, !0),
                        (pi = we(L.a) - zt + fe + Te),
                        (F = Math.abs(fe - pi) > 1),
                        _ && F && pt.splice(pt.length - 2, 2),
                        n.render(0, !0, !0),
                        dd || n.invalidate(!0),
                        n.parent || n.totalTime(n.totalTime()),
                        jo(0))
                      : (pi = fe),
                    Mi &&
                      (Mi.value
                        ? (Mi.style["overflow" + L.a.toUpperCase()] = Mi.value)
                        : Mi.style.removeProperty("overflow-" + L.a));
                else if (p && de() && !P)
                  for (vt = p.parentNode; vt && vt !== he; )
                    vt._pinOffset &&
                      ((se -= vt._pinOffset), (ye -= vt._pinOffset)),
                      (vt = vt.parentNode);
                Qn &&
                  Qn.forEach(function (ir) {
                    return ir.revert(!1, !0);
                  }),
                  (T.start = se),
                  (T.end = ye),
                  (Me = $e = Ct ? Ge : de()),
                  !P && !Ct && (Me < Ge && de(Ge), (T.scroll.rec = 0)),
                  T.revert(!1, !0),
                  (ie = ct()),
                  Nt && ((X = -1), Nt.restart(!0)),
                  (ut = 0),
                  n &&
                    R &&
                    (n._initted || hi) &&
                    n.progress() !== hi &&
                    n.progress(hi || 0, !0).render(n.time(), !0, !0),
                  (gt || ue !== T.progress || P || h || (n && !n._initted)) &&
                    (n &&
                      !R &&
                      (n._initted || ue || n.vars.immediateRender !== !1) &&
                      n.totalProgress(
                        P && se < -0.001 && !ue
                          ? W.utils.normalize(se, ye, 0)
                          : ue,
                        !0
                      ),
                    (T.progress = gt || (Me - se) / fe === ue ? 0 : ue)),
                  f && m && (Ae._pinOffset = Math.round(T.progress * pi)),
                  U && U.invalidate(),
                  isNaN(Jn) ||
                    ((Jn -= W.getProperty(N, L.p)),
                    (eo -= W.getProperty(Ke, L.p)),
                    zs(N, L, Jn),
                    zs(He, L, Jn - (te || 0)),
                    zs(Ke, L, eo),
                    zs(We, L, eo - (te || 0))),
                  gt && !Ct && T.update(),
                  c && !Ct && !Ze && ((Ze = !0), c(T), (Ze = !1));
              }
            }),
            (T.getVelocity = function () {
              return ((de() - $e) / (ct() - On)) * 1e3 || 0;
            }),
            (T.endAnimation = function () {
              kn(T.callbackAnimation),
                n &&
                  (U
                    ? U.progress(1)
                    : n.paused()
                    ? R || kn(n, T.direction < 0, 1)
                    : kn(n, n.reversed()));
            }),
            (T.labelToScroll = function ($) {
              return (
                (n &&
                  n.labels &&
                  (se || T.refresh() || se) +
                    (n.labels[$] / n.duration()) * fe) ||
                0
              );
            }),
            (T.getTrailing = function ($) {
              var ee = ne.indexOf(T),
                K =
                  T.direction > 0
                    ? ne.slice(0, ee).reverse()
                    : ne.slice(ee + 1);
              return (
                Xt($)
                  ? K.filter(function (te) {
                      return te.vars.preventOverlaps === $;
                    })
                  : K
              ).filter(function (te) {
                return T.direction > 0 ? te.end <= se : te.start >= ye;
              });
            }),
            (T.update = function ($, ee, K) {
              if (!(P && !K && !$)) {
                var te = Ct === !0 ? Ge : T.scroll(),
                  Je = $ ? 0 : (te - se) / fe,
                  ce = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0,
                  Re = T.progress,
                  gt,
                  De,
                  Te,
                  ve,
                  gi,
                  Pe,
                  Jt,
                  Pi;
                if (
                  (ee &&
                    (($e = Me),
                    (Me = P ? de() : te),
                    g && ((re = le), (le = n && !R ? n.totalProgress() : ce))),
                  v &&
                    f &&
                    !ut &&
                    !Ss &&
                    ni &&
                    (!ce && se < te + ((te - $e) / (ct() - On)) * v
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        ye > te + ((te - $e) / (ct() - On)) * v &&
                        (ce = 0.9999)),
                  ce !== Re && T.enabled)
                ) {
                  if (
                    ((gt = T.isActive = !!ce && ce < 1),
                    (De = !!Re && Re < 1),
                    (Pe = gt !== De),
                    (gi = Pe || !!ce != !!Re),
                    (T.direction = ce > Re ? 1 : -1),
                    (T.progress = ce),
                    gi &&
                      !ut &&
                      ((Te = ce && !Re ? 0 : ce === 1 ? 1 : Re === 1 ? 2 : 3),
                      R &&
                        ((ve =
                          (!Pe && O[Te + 1] !== "none" && O[Te + 1]) || O[Te]),
                        (Pi =
                          n &&
                          (ve === "complete" || ve === "reset" || ve in n)))),
                    k &&
                      (Pe || Pi) &&
                      (Pi || d || !n) &&
                      (dt(k)
                        ? k(T)
                        : T.getTrailing(k).forEach(function (Or) {
                            return Or.endAnimation();
                          })),
                    R ||
                      (U && !ut && !Ss
                        ? (U._dp._time - U._start !== U._time &&
                            U.render(U._dp._time - U._start),
                          U.resetTo
                            ? U.resetTo("totalProgress", ce, n._tTime / n._tDur)
                            : ((U.vars.totalProgress = ce),
                              U.invalidate().restart()))
                        : n && n.totalProgress(ce, !!(ut && (ie || $)))),
                    f)
                  ) {
                    if (($ && m && (Ae.style[m + L.os2] = Ar), !_))
                      ht(Ln(zt + pi * ce));
                    else if (gi) {
                      if (
                        ((Jt =
                          !$ && ce > Re && ye + 1 > te && te + 1 >= Ti(A, L)),
                        C)
                      )
                        if (!$ && (gt || Jt)) {
                          var nt = Ri(f, !0),
                            st = te - se;
                          qu(
                            f,
                            he,
                            nt.top + (L === Ve ? st : 0) + qe,
                            nt.left + (L === Ve ? 0 : st) + qe
                          );
                        } else qu(f, Ae);
                      Kr(gt || Jt ? pt : Zt),
                        (F && ce < 1 && gt) ||
                          ht(zt + (ce === 1 && !Jt ? pi : 0));
                    }
                  }
                  g && !be.tween && !ut && !Ss && Nt.restart(!0),
                    a &&
                      (Pe || (E && ce && (ce < 1 || !ea))) &&
                      An(a.targets).forEach(function (Or) {
                        return Or.classList[gt || E ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !$ && o(T),
                    gi && !ut
                      ? (R &&
                          (Pi &&
                            (ve === "complete"
                              ? n.pause().totalProgress(1)
                              : ve === "reset"
                              ? n.restart(!0).pause()
                              : ve === "restart"
                              ? n.restart(!0)
                              : n[ve]()),
                          o && o(T)),
                        (Pe || !ea) &&
                          (u && Pe && ia(T, u),
                          S[Te] && ia(T, S[Te]),
                          E && (ce === 1 ? T.kill(!1, 1) : (S[Te] = 0)),
                          Pe ||
                            ((Te = ce === 1 ? 1 : 3), S[Te] && ia(T, S[Te]))),
                        M &&
                          !gt &&
                          Math.abs(T.getVelocity()) > (Dn(M) ? M : 2500) &&
                          (kn(T.callbackAnimation),
                          U
                            ? U.progress(1)
                            : kn(n, ve === "reverse" ? 1 : !ce, 1)))
                      : R && o && !ut && o(T);
                }
                if (H) {
                  var vt = P
                    ? (te / P.duration()) * (P._caScrollDist || 0)
                    : te;
                  ln(vt + (N._isFlipped ? 1 : 0)), H(vt);
                }
                mi && mi((-te / P.duration()) * (P._caScrollDist || 0));
              }
            }),
            (T.enable = function ($, ee) {
              T.enabled ||
                ((T.enabled = !0),
                je(A, "resize", Bn),
                y || je(A, "scroll", Ur),
                B && je(r, "refreshInit", B),
                $ !== !1 && ((T.progress = ue = 0), (Me = $e = X = de())),
                ee !== !1 && T.refresh());
            }),
            (T.getTween = function ($) {
              return $ && be ? be.tween : U;
            }),
            (T.setPositions = function ($, ee, K, te) {
              if (P) {
                var Je = P.scrollTrigger,
                  ce = P.duration(),
                  Re = Je.end - Je.start;
                ($ = Je.start + (Re * $) / ce),
                  (ee = Je.start + (Re * ee) / ce);
              }
              T.refresh(
                !1,
                !1,
                {
                  start: bu($, K && !!T._startClamp),
                  end: bu(ee, K && !!T._endClamp),
                },
                te
              ),
                T.update();
            }),
            (T.adjustPinSpacing = function ($) {
              if (Le && $) {
                var ee = Le.indexOf(L.d) + 1;
                (Le[ee] = parseFloat(Le[ee]) + $ + qe),
                  (Le[1] = parseFloat(Le[1]) + $ + qe),
                  Kr(Le);
              }
            }),
            (T.disable = function ($, ee) {
              if (
                T.enabled &&
                ($ !== !1 && T.revert(!0, !0),
                (T.enabled = T.isActive = !1),
                ee || (U && U.pause()),
                (Ge = 0),
                Ee && (Ee.uncache = 1),
                B && Ue(r, "refreshInit", B),
                Nt &&
                  (Nt.pause(), be.tween && be.tween.kill() && (be.tween = 0)),
                !y)
              ) {
                for (var K = ne.length; K--; )
                  if (ne[K].scroller === A && ne[K] !== T) return;
                Ue(A, "resize", Bn), y || Ue(A, "scroll", Ur);
              }
            }),
            (T.kill = function ($, ee) {
              T.disable($, ee), U && !ee && U.kill(), l && delete aa[l];
              var K = ne.indexOf(T);
              K >= 0 && ne.splice(K, 1),
                K === Tt && Ds > 0 && Tt--,
                (K = 0),
                ne.forEach(function (te) {
                  return te.scroller === T.scroller && (K = 1);
                }),
                K || Ct || (T.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  $ && n.revert({ kill: !1 }),
                  ee || n.kill()),
                He &&
                  [He, We, N, Ke].forEach(function (te) {
                    return te.parentNode && te.parentNode.removeChild(te);
                  }),
                Vn === T && (Vn = 0),
                f &&
                  (Ee && (Ee.uncache = 1),
                  (K = 0),
                  ne.forEach(function (te) {
                    return te.pin === f && K++;
                  }),
                  K || (Ee.spacer = 0)),
                i.onKill && i.onKill(T);
            }),
            ne.push(T),
            T.enable(!1, !1),
            mt && mt(T),
            n && n.add && !fe)
          ) {
            var pe = T.update;
            (T.update = function () {
              (T.update = pe), oe.cache++, se || ye || T.refresh();
            }),
              W.delayedCall(0.01, T.update),
              (fe = 0.01),
              (se = ye = 0);
          } else T.refresh();
          f && Bf();
        }),
        (r.register = function (i) {
          return (
            Wr ||
              ((W = i || Cu()),
              xu() && window.document && r.enable(),
              (Wr = Mn)),
            Wr
          );
        }),
        (r.defaults = function (i) {
          if (i) for (var n in i) As[n] = i[n];
          return As;
        }),
        (r.disable = function (i, n) {
          (Mn = 0),
            ne.forEach(function (o) {
              return o[n ? "kill" : "disable"](i);
            }),
            Ue(ae, "wheel", Ur),
            Ue(_e, "scroll", Ur),
            clearInterval(ys),
            Ue(_e, "touchcancel", Si),
            Ue(he, "touchstart", Si),
            Cs(Ue, _e, "pointerdown,touchstart,mousedown", Su),
            Cs(Ue, _e, "pointerup,touchend,mouseup", Tu),
            _s.kill(),
            Ts(Ue);
          for (var s = 0; s < oe.length; s += 3)
            Es(Ue, oe[s], oe[s + 1]), Es(Ue, oe[s], oe[s + 2]);
        }),
        (r.enable = function () {
          if (
            ((ae = window),
            (_e = document),
            (Gt = _e.documentElement),
            (he = _e.body),
            W &&
              ((An = W.utils.toArray),
              (Pn = W.utils.clamp),
              (Ko = W.core.context || Si),
              (jo = W.core.suppressOverwrites || Si),
              (Zo = ae.history.scrollRestoration || "auto"),
              (ca = ae.pageYOffset || 0),
              W.core.globals("ScrollTrigger", r),
              he))
          ) {
            (Mn = 1),
              (Xr = document.createElement("div")),
              (Xr.style.height = "100vh"),
              (Xr.style.position = "absolute"),
              Fu(),
              Df(),
              Ie.register(W),
              (r.isTouch = Ie.isTouch),
              (Zi =
                Ie.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Uo = Ie.isTouch === 1),
              je(ae, "wheel", Ur),
              (Xo = [ae, _e, Gt, he]),
              W.matchMedia &&
                ((r.matchMedia = function (u) {
                  var c = W.matchMedia(),
                    d;
                  for (d in u) c.add(d, u[d]);
                  return c;
                }),
                W.addEventListener("matchMediaInit", function () {
                  return ua();
                }),
                W.addEventListener("matchMediaRevert", function () {
                  return Ru();
                }),
                W.addEventListener("matchMedia", function () {
                  Sr(0, 1), wr("matchMedia");
                }),
                W.matchMedia().add("(orientation: portrait)", function () {
                  return la(), la;
                })),
              la(),
              je(_e, "scroll", Ur);
            var i = he.hasAttribute("style"),
              n = he.style,
              s = n.borderTopStyle,
              o = W.core.Animation.prototype,
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
                a = Ri(he),
                Ve.m = Math.round(a.top + Ve.sc()) || 0,
                St.m = Math.round(a.left + St.sc()) || 0,
                s
                  ? (n.borderTopStyle = s)
                  : n.removeProperty("border-top-style"),
                i ||
                  (he.setAttribute("style", ""), he.removeAttribute("style")),
                ys = setInterval(ku, 250),
                W.delayedCall(0.5, function () {
                  return (Ss = 0);
                }),
                je(_e, "touchcancel", Si),
                je(he, "touchstart", Si),
                Cs(je, _e, "pointerdown,touchstart,mousedown", Su),
                Cs(je, _e, "pointerup,touchend,mouseup", Tu),
                Yo = W.utils.checkPrefix("transform"),
                ks.push(Yo),
                Wr = ct(),
                _s = W.delayedCall(0.2, Sr).pause(),
                Gr = [
                  _e,
                  "visibilitychange",
                  function () {
                    var u = ae.innerWidth,
                      c = ae.innerHeight;
                    _e.hidden
                      ? ((hu = u), (mu = c))
                      : (hu !== u || mu !== c) && Bn();
                  },
                  _e,
                  "DOMContentLoaded",
                  Sr,
                  ae,
                  "load",
                  Sr,
                  ae,
                  "resize",
                  Bn,
                ],
                Ts(je),
                ne.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < oe.length;
              l += 3
            )
              Es(Ue, oe[l], oe[l + 1]), Es(Ue, oe[l], oe[l + 2]);
          }
        }),
        (r.config = function (i) {
          "limitCallbacks" in i && (ea = !!i.limitCallbacks);
          var n = i.syncInterval;
          (n && clearInterval(ys)) || ((ys = n) && setInterval(ku, n)),
            "ignoreMobileResize" in i &&
              (Uo = r.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Ts(Ue) || Ts(je, i.autoRefreshEvents || "none"),
              (vu = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (r.scrollerProxy = function (i, n) {
          var s = Dt(i),
            o = oe.indexOf(s),
            a = mr(s);
          ~o && oe.splice(o, a ? 6 : 2),
            n && (a ? bi.unshift(ae, n, he, n, Gt, n) : bi.unshift(s, n));
        }),
        (r.clearMatchMedia = function (i) {
          ne.forEach(function (n) {
            return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
          });
        }),
        (r.isInViewport = function (i, n, s) {
          var o = (Xt(i) ? Dt(i) : i).getBoundingClientRect(),
            a = o[s ? vr : _r] * n || 0;
          return s
            ? o.right - a > 0 && o.left + a < ae.innerWidth
            : o.bottom - a > 0 && o.top + a < ae.innerHeight;
        }),
        (r.positionInViewport = function (i, n, s) {
          Xt(i) && (i = Dt(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? vr : _r],
            l =
              n == null
                ? a / 2
                : n in Ps
                ? Ps[n] * a
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
  (Z.version = "3.13.0"),
    (Z.saveStyles = function (r) {
      return r
        ? An(r).forEach(function (e) {
            if (e && e.style) {
              var t = Yt.indexOf(e);
              t >= 0 && Yt.splice(t, 5),
                Yt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  W.core.getCache(e),
                  Ko()
                );
            }
          })
        : Yt;
    }),
    (Z.revert = function (r, e) {
      return ua(!r, e);
    }),
    (Z.create = function (r, e) {
      return new Z(r, e);
    }),
    (Z.refresh = function (r) {
      return r ? Bn(!0) : (Wr || Z.register()) && Sr(!0);
    }),
    (Z.update = function (r) {
      return ++oe.cache && zi(r === !0 ? 2 : 0);
    }),
    (Z.clearScrollMemory = zu),
    (Z.maxScroll = function (r, e) {
      return Ti(r, e ? St : Ve);
    }),
    (Z.getScrollFunc = function (r, e) {
      return Ki(Dt(r), e ? St : Ve);
    }),
    (Z.getById = function (r) {
      return aa[r];
    }),
    (Z.getAll = function () {
      return ne.filter(function (r) {
        return r.vars.id !== "ScrollSmoother";
      });
    }),
    (Z.isScrolling = function () {
      return !!ni;
    }),
    (Z.snapDirectional = oa),
    (Z.addEventListener = function (r, e) {
      var t = yr[r] || (yr[r] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Z.removeEventListener = function (r, e) {
      var t = yr[r],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (Z.batch = function (r, e) {
      var t = [],
        i = {},
        n = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, c) {
          var d = [],
            p = [],
            f = W.delayedCall(n, function () {
              c(d, p), (d = []), (p = []);
            }).pause();
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
          a.substr(0, 2) === "on" && dt(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        dt(s) &&
          ((s = s()),
          je(Z, "refresh", function () {
            return (s = e.batchMax());
          })),
        An(r).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push(Z.create(u));
        }),
        t
      );
    });
  var Wu = function (e, t, i, n) {
      return (
        t > n ? e(n) : t < 0 && e(0),
        i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    pa = function r(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Ie.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Gt && r(he, t);
    },
    Ns = { auto: 1, scroll: 1 },
    Wf = function (e) {
      var t = e.event,
        i = e.target,
        n = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || W.core.getCache(s),
        a = ct(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== he &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Ns[(l = oi(s)).overflowY] || Ns[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !mr(s) &&
          (Ns[(l = oi(s)).overflowY] || Ns[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Gu = function (e, t, i, n) {
      return Ie.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (n = n && Wf),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return i && je(_e, Ie.eventTypes[0], Yu, !1, !0);
        },
        onDisable: function () {
          return Ue(_e, Ie.eventTypes[0], Yu, !0);
        },
      });
    },
    Gf = /(input|label|select|textarea)/i,
    Xu,
    Yu = function (e) {
      var t = Gf.test(e.target.tagName);
      (t || Xu) && ((e._gsapAllow = !0), (Xu = t));
    },
    Xf = function (e) {
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
        u = Dt(e.target) || Gt,
        c = W.core.globals().ScrollSmoother,
        d = c && c.get(),
        p =
          Zi &&
          ((e.content && Dt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = Ki(u, Ve),
        m = Ki(u, St),
        h = 1,
        v =
          (Ie.isTouch && ae.visualViewport
            ? ae.visualViewport.scale * ae.visualViewport.width
            : ae.outerWidth) / ae.innerWidth,
        w = 0,
        b = dt(n)
          ? function () {
              return n(a);
            }
          : function () {
              return n || 2.8;
            },
        E,
        g,
        C = Gu(u, e.type, !0, s),
        x = function () {
          return (g = !1);
        },
        P = Si,
        M = Si,
        k = function () {
          (l = Ti(u, Ve)),
            (M = Pn(Zi ? 1 : 0, l)),
            i && (P = Pn(0, Ti(u, St))),
            (E = br);
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
          if (g) {
            requestAnimationFrame(x);
            var D = Ln(a.deltaY / 2),
              I = M(f.v - D);
            if (p && I !== f.v + f.offset) {
              f.offset = I - f.v;
              var T = Ln((parseFloat(p && p._gsap.y) || 0) - f.offset);
              (p.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                T +
                ", 0, 1)"),
                (p._gsap.y = T + "px"),
                (f.cacheID = oe.cache),
                zi();
            }
            return !0;
          }
          f.offset && L(), (g = !0);
        },
        A,
        z,
        y,
        _,
        S = function () {
          k(),
            A.isActive() &&
              A.vars.scrollY > l &&
              (f() > l ? A.progress(1) && f(l) : A.resetTo("scrollY", l));
        };
      return (
        p && W.set(p, { y: "+=0" }),
        (e.ignoreCheck = function (O) {
          return (
            (Zi && O.type === "touchmove" && R()) ||
            (h > 1.05 && O.type !== "touchstart") ||
            a.isGesturing ||
            (O.touches && O.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          g = !1;
          var O = h;
          (h = Ln(((ae.visualViewport && ae.visualViewport.scale) || 1) / v)),
            A.pause(),
            O !== h && pa(u, h > 1.01 ? !0 : i ? !1 : "x"),
            (z = m()),
            (y = f()),
            k(),
            (E = br);
        }),
        (e.onRelease = e.onGestureStart =
          function (O, D) {
            if ((f.offset && L(), !D)) _.restart(!0);
            else {
              oe.cache++;
              var I = b(),
                T,
                B;
              i &&
                ((T = m()),
                (B = T + (I * 0.05 * -O.velocityX) / 0.227),
                (I *= Wu(m, T, B, Ti(u, St))),
                (A.vars.scrollX = P(B))),
                (T = f()),
                (B = T + (I * 0.05 * -O.velocityY) / 0.227),
                (I *= Wu(f, T, B, Ti(u, Ve))),
                (A.vars.scrollY = M(B)),
                A.invalidate().duration(I).play(0.01),
                ((Zi && A.vars.scrollY >= l) || T >= l - 1) &&
                  W.to({}, { onUpdate: S, duration: I });
            }
            o && o(O);
          }),
        (e.onWheel = function () {
          A._ts && A.pause(), ct() - w > 1e3 && ((E = 0), (w = ct()));
        }),
        (e.onChange = function (O, D, I, T, B) {
          if (
            (br !== E && k(),
            D && i && m(P(T[2] === D ? z + (O.startX - O.x) : m() + D - T[1])),
            I)
          ) {
            f.offset && L();
            var q = B[2] === I,
              Q = q ? y + O.startY - O.y : f() + I - B[1],
              X = M(Q);
            q && Q !== X && (y += X - Q), f(X);
          }
          (I || D) && zi();
        }),
        (e.onEnable = function () {
          pa(u, i ? !1 : "x"),
            Z.addEventListener("refresh", S),
            je(ae, "resize", S),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = m.smooth = !1)),
            C.enable();
        }),
        (e.onDisable = function () {
          pa(u, !0),
            Ue(ae, "resize", S),
            Z.removeEventListener("refresh", S),
            C.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Ie(e)),
        (a.iOS = Zi),
        Zi && !f() && f(1),
        Zi && W.ticker.add(Si),
        (_ = a._dc),
        (A = W.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: $u(f, f(), function () {
              return A.pause();
            }),
          },
          onUpdate: zi,
          onComplete: _.vars.onComplete,
        })),
        a
      );
    };
  (Z.sort = function (r) {
    if (dt(r)) return ne.sort(r);
    var e = ae.pageYOffset || 0;
    return (
      Z.getAll().forEach(function (t) {
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
    (Z.observe = function (r) {
      return new Ie(r);
    }),
    (Z.normalizeScroll = function (r) {
      if (typeof r > "u") return xt;
      if (r === !0 && xt) return xt.enable();
      if (r === !1) {
        xt && xt.kill(), (xt = r);
        return;
      }
      var e = r instanceof Ie ? r : Xf(r);
      return (
        xt && xt.target === e.target && xt.kill(), mr(e.target) && (xt = e), e
      );
    }),
    (Z.core = {
      _getVelocityProp: Go,
      _inputObserver: Gu,
      _scrollers: oe,
      _proxies: bi,
      bridge: {
        ss: function () {
          ni || wr("scrollStart"), (ni = ct());
        },
        ref: function () {
          return ut;
        },
      },
    }),
    Cu() && W.registerPlugin(Z);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let qn,
    Zr,
    ha,
    Yf = () => ha || Jr.register(window.gsap),
    ju = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    Fs = (r) =>
      typeof r == "string"
        ? Fs(document.querySelectorAll(r))
        : "length" in r
        ? Array.from(r)
        : [r],
    Uu = (r) => Fs(r).filter((e) => e instanceof HTMLElement),
    ma = [],
    ga = function () {},
    jf = /\s+/g,
    Ku = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    Zu = { left: 0, top: 0, width: 0, height: 0 },
    Qu = (r, e) => {
      if (e) {
        let t = new Set(r.join("").match(e) || ma),
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
    Ju = (r) =>
      window.getComputedStyle(r).display === "inline" &&
      (r.style.display = "inline-block"),
    Qr = (r, e, t) =>
      e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
    va = (r, e, t) => {
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
    Uf = (r, e, t, i) => {
      let n = va("line", t, i),
        s = window.getComputedStyle(r).textAlign || "left";
      return (o, a) => {
        let l = n("");
        for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
          l.appendChild(e[o]);
        l.normalize();
      };
    },
    ec = (r, e, t, i, n, s, o, a, l, u) => {
      var c;
      let d = Array.from(r.childNodes),
        p = 0,
        { wordDelimiter: f, reduceWhiteSpace: m = !0, prepareText: h } = e,
        v = r.getBoundingClientRect(),
        w = v,
        b =
          !m && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
        E = 0,
        g = t.collection,
        C,
        x,
        P,
        M,
        k,
        L,
        R,
        A,
        z,
        y,
        _,
        S,
        O,
        D,
        I,
        T,
        B,
        q;
      for (
        typeof f == "object"
          ? ((P = f.delimiter || f), (x = f.replaceWith || ""))
          : (x = f === "" ? "" : f || " "),
          C = x !== " ";
        p < d.length;
        p++
      )
        if (((M = d[p]), M.nodeType === 3)) {
          for (
            I = M.textContent || "",
              m
                ? (I = I.replace(jf, " "))
                : b &&
                  (I = I.replace(
                    /\n/g,
                    x +
                      `
`
                  )),
              h && (I = h(I, r)),
              M.textContent = I,
              k = x || P ? I.split(P || x) : I.match(a) || ma,
              B = k[k.length - 1],
              A = C ? B.slice(-1) === " " : !B,
              B || k.pop(),
              w = v,
              R = C ? k[0].charAt(0) === " " : !k[0],
              R && Qr(" ", r, M),
              k[0] || k.shift(),
              Qu(k, l),
              (s && u) || (M.textContent = ""),
              z = 1;
            z <= k.length;
            z++
          )
            if (
              ((T = k[z - 1]),
              !m &&
                b &&
                T.charAt(0) ===
                  `
` &&
                ((c = M.previousSibling) == null || c.remove(),
                Qr(document.createElement("br"), r, M),
                (T = T.slice(1))),
              !m && T === "")
            )
              Qr(x, r, M);
            else if (T === " ") r.insertBefore(document.createTextNode(" "), M);
            else {
              if (
                (C && T.charAt(0) === " " && Qr(" ", r, M),
                E && z === 1 && !R && g.indexOf(E.parentNode) > -1
                  ? ((L = g[g.length - 1]),
                    L.appendChild(document.createTextNode(i ? "" : T)))
                  : ((L = t(i ? "" : T)),
                    Qr(L, r, M),
                    E && z === 1 && !R && L.insertBefore(E, L.firstChild)),
                i)
              )
                for (
                  _ = ju
                    ? Qu(
                        [...ju.segment(T)].map((Q) => Q.segment),
                        l
                      )
                    : T.match(a) || ma,
                    q = 0;
                  q < _.length;
                  q++
                )
                  L.appendChild(
                    _[q] === " " ? document.createTextNode(" ") : i(_[q])
                  );
              if (s && u) {
                if (
                  ((I = M.textContent = I.substring(T.length + 1, I.length)),
                  (y = L.getBoundingClientRect()),
                  y.top > w.top && y.left <= w.left)
                ) {
                  for (S = r.cloneNode(), O = r.childNodes[0]; O && O !== L; )
                    (D = O), (O = O.nextSibling), S.appendChild(D);
                  r.parentNode.insertBefore(S, r), n && Ju(S);
                }
                w = y;
              }
              (z < k.length || A) &&
                Qr(
                  z >= k.length ? " " : C && T.slice(-1) === " " ? " " + x : x,
                  r,
                  M
                );
            }
          r.removeChild(M), (E = 0);
        } else
          M.nodeType === 1 &&
            (o && o.indexOf(M) > -1
              ? (g.indexOf(M.previousSibling) > -1 &&
                  g[g.length - 1].appendChild(M),
                (E = M))
              : (ec(M, e, t, i, n, s, o, a, l, !0), (E = 0)),
            n && Ju(M));
    };
  const tc = class fd {
    constructor(e, t) {
      (this.isSplit = !1),
        Yf(),
        (this.elements = Uu(e)),
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
        ga(this),
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
        h = m ? new RegExp(m.source + "|" + Ku.source, "gu") : Ku,
        v = !!e.ignore && Uu(e.ignore),
        { orig: w, animTime: b, obs: E } = this._data,
        g;
      return (
        (d || p || c) &&
          (this.elements.forEach((C, x) => {
            (w[x] = {
              element: C,
              html: C.innerHTML,
              ariaL: C.getAttribute("aria-label"),
              ariaH: C.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? C.setAttribute("aria-label", (C.textContent || "").trim())
                : i === "hidden" && C.setAttribute("aria-hidden", "true");
            let P = [],
              M = [],
              k = [],
              L = d ? va("char", e, P) : null,
              R = va("word", e, M),
              A,
              z,
              y,
              _;
            if ((ec(C, e, R, L, f, n && (c || f), v, h, m, !1), c)) {
              let S = Fs(C.childNodes),
                O = Uf(C, S, e, k),
                D,
                I = [],
                T = 0,
                B = S.map((Q) =>
                  Q.nodeType === 1 ? Q.getBoundingClientRect() : Zu
                ),
                q = Zu;
              for (A = 0; A < S.length; A++)
                (D = S[A]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (I.push(D), O(T, A + 1), (T = A + 1), (q = B[T]))
                      : (A &&
                          B[A].top > q.top &&
                          B[A].left <= q.left &&
                          (O(T, A), (T = A)),
                        (q = B[A])));
              T < A && O(T, A),
                I.forEach((Q) => {
                  var X;
                  return (X = Q.parentNode) == null ? void 0 : X.removeChild(Q);
                });
            }
            if (!p) {
              for (A = 0; A < M.length; A++)
                if (
                  ((z = M[A]),
                  d || !z.nextSibling || z.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
                    for (
                      y = document.createElement("span"),
                        y.style.whiteSpace = "nowrap";
                      z.firstChild;

                    )
                      y.appendChild(z.firstChild);
                    z.replaceWith(y);
                  } else z.replaceWith(...z.childNodes);
                else
                  (_ = z.nextSibling),
                    _ &&
                      _.nodeType === 3 &&
                      ((_.textContent =
                        (z.textContent || "") + (_.textContent || "")),
                      z.remove());
              (M.length = 0), C.normalize();
            }
            this.lines.push(...k), this.words.push(...M), this.chars.push(...P);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((C) => {
                let x = C.cloneNode();
                return (
                  C.replaceWith(x),
                  x.appendChild(C),
                  C.className &&
                    (x.className = C.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (x.style.overflow = "clip"),
                  x
                );
              })
            )),
        (this.isSplit = !0),
        Zr && (a ? Zr.addEventListener("loadingdone", this._split) : Zr.status),
        (g = o && o(this)) &&
          g.totalTime &&
          (this._data.anim = b ? g.totalTime(b) : g),
        c &&
          a &&
          this.elements.forEach((C, x) => {
            (w[x].width = C.offsetWidth), E && E.observe(C);
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
        Zr?.removeEventListener("loadingdone", this._split),
        n && ((this._data.animTime = n.totalTime()), n.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new fd(e, t);
    }
    static register(e) {
      (qn = qn || e || window.gsap),
        qn && ((Fs = qn.utils.toArray), (ga = qn.core.context || ga)),
        !ha && window.innerWidth > 0 && ((Zr = document.fonts), (ha = !0));
    }
  };
  tc.version = "3.13.0";
  let Jr = tc;
  G.registerPlugin(Z, Jr);
  const Kf = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((e) => {
        const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
          n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
        new Jr(e, {
          type: "words, chars",
          onSplit(o) {
            const a = G.context(() => {
              G.timeline({
                scrollTrigger: { scrub: !0, trigger: e, start: t, end: i },
              }).from(o.chars, { autoAlpha: n, stagger: s, ease: "linear" });
            });
            e._gsapContext = a;
          },
        });
      });
    },
    ic = () => {
      Kf();
    },
    Zf = () => {
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
            (G.set(f, { scaleX: 0, transformOrigin: "left center" }),
            (u = G.to(f, {
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
            h = f?.querySelector('[data-tabs="item-progress"]'),
            v = t[p],
            w = i[p],
            b = v.querySelector('[data-tabs="item-progress"]'),
            E = G.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = v), (a = w), (l = !1), n && c(p);
              },
            });
          f &&
            (f.classList.remove("active"),
            f.setAttribute("aria-selected", "false"),
            m?.classList.remove("active"),
            E.set(h, { transformOrigin: "right center" })
              .to(h, { scaleX: 0, duration: 0.3 }, 0)
              .to(m, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            v.classList.add("active"),
            v.setAttribute("aria-selected", "true"),
            w.classList.add("active"),
            E.fromTo(
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
              let h;
              switch (m.key) {
                case "ArrowRight":
                  m.preventDefault(), (h = (f + 1) % t.length);
                  break;
                case "ArrowLeft":
                  m.preventDefault(), (h = (f - 1 + t.length) % t.length);
                  break;
                case "Home":
                  m.preventDefault(), (h = 0);
                  break;
                case "End":
                  m.preventDefault(), (h = t.length - 1);
                  break;
                default:
                  return;
              }
              t.forEach((v, w) => {
                v.setAttribute("tabindex", w === h ? "0" : "-1");
              }),
                t[h].focus(),
                d(h);
            }),
            p.addEventListener("click", () => {
              p !== o &&
                (t.forEach((m, h) => {
                  m.setAttribute("tabindex", h === f ? "0" : "-1");
                }),
                d(f));
            });
        }),
          e.setAttribute("role", "tablist"),
          e.setAttribute("aria-label", "Hero content tabs"),
          d(0);
      });
    },
    Qf = () => {
      Zf();
    };
  G.registerPlugin(Z);
  const Jf = () => {
      const r = document.querySelector(".home_hero_tab_component"),
        e = r.querySelector(".home_hero_tab_visual_wrap");
      G.to(e, {
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
    ep = () => {
      Jf();
    };
  G.registerPlugin(Z, Jr);
  const tp = () => {
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
            const v = o.querySelector('[form-dropdown="trigger"]'),
              w = o.querySelector('[form-dropdown="content"]'),
              b = o.querySelector('[form-dropdown="trigger-icon"]'),
              E = o.querySelectorAll('[form-dropdown="answer"]');
            d(v, w, b), f(v, w, b, E), (s = !1), (o = null);
          }
        };
      document.addEventListener("click", u);
      const c = (m, h, v, w) => {
          m.classList.remove(e),
            m.classList.add(t),
            m.setAttribute(i, "true"),
            h.setAttribute(n, "false"),
            v && v.classList.add(t);
        },
        d = (m, h, v, w) => {
          m.classList.remove(t),
            m.classList.add(e),
            m.setAttribute(i, "false"),
            h.setAttribute(n, "true"),
            v && v.classList.remove(t);
        },
        p = (m, h, v, w) => {
          G.to(v, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
            G.fromTo(
              h,
              { autoAlpha: 0, pointerEvents: "none", y: 40 },
              {
                autoAlpha: 1,
                duration: 0.4,
                ease: "expo.out",
                y: 0,
                pointerEvents: "auto",
              }
            ),
            G.fromTo(
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
        f = (m, h, v, w) => {
          G.to(v, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            G.to(h, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            G.to(w, {
              autoAlpha: 0,
              duration: 0.01,
              ease: "expo.out",
              stagger: 0.05,
              pointerEvents: "none",
            });
        };
      r.forEach((m) => {
        const h = m.querySelector('[form-dropdown="trigger"]'),
          v = m.querySelector('[form-dropdown="content"]'),
          w = m.querySelector('[form-dropdown="trigger-icon"]'),
          b = m.querySelectorAll('[form-dropdown="answer"]'),
          E = () => {
            d(h, v, w), f(h, v, w, b), (s = !1), (o = null);
          };
        h.addEventListener("click", () => {
          const g = h.classList.contains(t);
          if (s && o && o !== m) {
            const C = o.querySelector('[form-dropdown="trigger"]'),
              x = o.querySelector('[form-dropdown="content"]'),
              P = o.querySelector('[form-dropdown="trigger-icon"]'),
              M = o.querySelectorAll('[form-dropdown="answer"]');
            d(C, x, P), f(C, x, P, M);
          }
          g ? E() : (c(h, v, w), p(h, v, w, b), (s = !0), (o = m));
        }),
          b.forEach((g) => {
            g.addEventListener("click", () => {
              if (o === m) {
                const C = g.querySelector("p[answer-value]"),
                  x = h.querySelector('[form-dropdown="value"]');
                if (C && x) {
                  const P =
                      C.getAttribute("answer-value") || C.textContent.trim(),
                    M = g.getAttribute("calc-value");
                  if (((x.textContent = P), M)) {
                    x.setAttribute("final-value", M);
                    const k = x.parentElement;
                    k && k.classList.add("is--active"),
                      h.classList.add("is--active"),
                      w && w.classList.add("is--active"),
                      m.classList.add("is--active"),
                      x.classList.add("is--active");
                  }
                }
                E();
              }
            });
          });
      });
    },
    ip = () => {
      tp();
    };
  var kt = "top",
    ai = "bottom",
    li = "right",
    It = "left",
    _a = "auto",
    $n = [kt, ai, li, It],
    en = "start",
    Hn = "end",
    rp = "clippingParents",
    rc = "viewport",
    Wn = "popper",
    np = "reference",
    nc = $n.reduce(function (r, e) {
      return r.concat([e + "-" + en, e + "-" + Hn]);
    }, []),
    sc = [].concat($n, [_a]).reduce(function (r, e) {
      return r.concat([e, e + "-" + en, e + "-" + Hn]);
    }, []),
    sp = "beforeRead",
    op = "read",
    ap = "afterRead",
    lp = "beforeMain",
    up = "main",
    cp = "afterMain",
    dp = "beforeWrite",
    fp = "write",
    pp = "afterWrite",
    hp = [sp, op, ap, lp, up, cp, dp, fp, pp];
  function xi(r) {
    return r ? (r.nodeName || "").toLowerCase() : null;
  }
  function jt(r) {
    if (r == null) return window;
    if (r.toString() !== "[object Window]") {
      var e = r.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return r;
  }
  function Tr(r) {
    var e = jt(r).Element;
    return r instanceof e || r instanceof Element;
  }
  function ui(r) {
    var e = jt(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement;
  }
  function ya(r) {
    if (typeof ShadowRoot > "u") return !1;
    var e = jt(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot;
  }
  function mp(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function (t) {
      var i = e.styles[t] || {},
        n = e.attributes[t] || {},
        s = e.elements[t];
      !ui(s) ||
        !xi(s) ||
        (Object.assign(s.style, i),
        Object.keys(n).forEach(function (o) {
          var a = n[o];
          a === !1
            ? s.removeAttribute(o)
            : s.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function gp(r) {
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
            !xi(n) ||
            (Object.assign(n.style, a),
            Object.keys(s).forEach(function (l) {
              n.removeAttribute(l);
            }));
        });
      }
    );
  }
  const oc = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: mp,
    effect: gp,
    requires: ["computeStyles"],
  };
  function Ci(r) {
    return r.split("-")[0];
  }
  var xr = Math.max,
    Bs = Math.min,
    tn = Math.round;
  function wa() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands)
      ? r.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function ac() {
    return !/^((?!chrome|android).)*safari/i.test(wa());
  }
  function rn(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var i = r.getBoundingClientRect(),
      n = 1,
      s = 1;
    e &&
      ui(r) &&
      ((n = (r.offsetWidth > 0 && tn(i.width) / r.offsetWidth) || 1),
      (s = (r.offsetHeight > 0 && tn(i.height) / r.offsetHeight) || 1));
    var o = Tr(r) ? jt(r) : window,
      a = o.visualViewport,
      l = !ac() && t,
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
  function ba(r) {
    var e = rn(r),
      t = r.offsetWidth,
      i = r.offsetHeight;
    return (
      Math.abs(e.width - t) <= 1 && (t = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
    );
  }
  function lc(r, e) {
    var t = e.getRootNode && e.getRootNode();
    if (r.contains(e)) return !0;
    if (t && ya(t)) {
      var i = e;
      do {
        if (i && r.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function Ni(r) {
    return jt(r).getComputedStyle(r);
  }
  function vp(r) {
    return ["table", "td", "th"].indexOf(xi(r)) >= 0;
  }
  function Qi(r) {
    return ((Tr(r) ? r.ownerDocument : r.document) || window.document)
      .documentElement;
  }
  function Vs(r) {
    return xi(r) === "html"
      ? r
      : r.assignedSlot || r.parentNode || (ya(r) ? r.host : null) || Qi(r);
  }
  function uc(r) {
    return !ui(r) || Ni(r).position === "fixed" ? null : r.offsetParent;
  }
  function _p(r) {
    var e = /firefox/i.test(wa()),
      t = /Trident/i.test(wa());
    if (t && ui(r)) {
      var i = Ni(r);
      if (i.position === "fixed") return null;
    }
    var n = Vs(r);
    for (
      ya(n) && (n = n.host);
      ui(n) && ["html", "body"].indexOf(xi(n)) < 0;

    ) {
      var s = Ni(n);
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
  function Gn(r) {
    for (var e = jt(r), t = uc(r); t && vp(t) && Ni(t).position === "static"; )
      t = uc(t);
    return t &&
      (xi(t) === "html" || (xi(t) === "body" && Ni(t).position === "static"))
      ? e
      : t || _p(r) || e;
  }
  function Sa(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
  }
  function Xn(r, e, t) {
    return xr(r, Bs(e, t));
  }
  function yp(r, e, t) {
    var i = Xn(r, e, t);
    return i > t ? t : i;
  }
  function cc() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function dc(r) {
    return Object.assign({}, cc(), r);
  }
  function fc(r, e) {
    return e.reduce(function (t, i) {
      return (t[i] = r), t;
    }, {});
  }
  var wp = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      dc(typeof e != "number" ? e : fc(e, $n))
    );
  };
  function bp(r) {
    var e,
      t = r.state,
      i = r.name,
      n = r.options,
      s = t.elements.arrow,
      o = t.modifiersData.popperOffsets,
      a = Ci(t.placement),
      l = Sa(a),
      u = [It, li].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!s || !o)) {
      var d = wp(n.padding, t),
        p = ba(s),
        f = l === "y" ? kt : It,
        m = l === "y" ? ai : li,
        h =
          t.rects.reference[c] +
          t.rects.reference[l] -
          o[l] -
          t.rects.popper[c],
        v = o[l] - t.rects.reference[l],
        w = Gn(s),
        b = w ? (l === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
        E = h / 2 - v / 2,
        g = d[f],
        C = b - p[c] - d[m],
        x = b / 2 - p[c] / 2 + E,
        P = Xn(g, x, C),
        M = l;
      t.modifiersData[i] = ((e = {}), (e[M] = P), (e.centerOffset = P - x), e);
    }
  }
  function Sp(r) {
    var e = r.state,
      t = r.options,
      i = t.element,
      n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null &&
      ((typeof n == "string" &&
        ((n = e.elements.popper.querySelector(n)), !n)) ||
        (lc(e.elements.popper, n) && (e.elements.arrow = n)));
  }
  const Tp = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: bp,
    effect: Sp,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function nn(r) {
    return r.split("-")[1];
  }
  var xp = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Cp(r, e) {
    var t = r.x,
      i = r.y,
      n = e.devicePixelRatio || 1;
    return { x: tn(t * n) / n || 0, y: tn(i * n) / n || 0 };
  }
  function pc(r) {
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
      h = m === void 0 ? 0 : m,
      v = typeof c == "function" ? c({ x: f, y: h }) : { x: f, y: h };
    (f = v.x), (h = v.y);
    var w = o.hasOwnProperty("x"),
      b = o.hasOwnProperty("y"),
      E = It,
      g = kt,
      C = window;
    if (u) {
      var x = Gn(t),
        P = "clientHeight",
        M = "clientWidth";
      if (
        (x === jt(t) &&
          ((x = Qi(t)),
          Ni(x).position !== "static" &&
            a === "absolute" &&
            ((P = "scrollHeight"), (M = "scrollWidth"))),
        (x = x),
        n === kt || ((n === It || n === li) && s === Hn))
      ) {
        g = ai;
        var k =
          d && x === C && C.visualViewport ? C.visualViewport.height : x[P];
        (h -= k - i.height), (h *= l ? 1 : -1);
      }
      if (n === It || ((n === kt || n === ai) && s === Hn)) {
        E = li;
        var L =
          d && x === C && C.visualViewport ? C.visualViewport.width : x[M];
        (f -= L - i.width), (f *= l ? 1 : -1);
      }
    }
    var R = Object.assign({ position: a }, u && xp),
      A = c === !0 ? Cp({ x: f, y: h }, jt(t)) : { x: f, y: h };
    if (((f = A.x), (h = A.y), l)) {
      var z;
      return Object.assign(
        {},
        R,
        ((z = {}),
        (z[g] = b ? "0" : ""),
        (z[E] = w ? "0" : ""),
        (z.transform =
          (C.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + h + "px)"
            : "translate3d(" + f + "px, " + h + "px, 0)"),
        z)
      );
    }
    return Object.assign(
      {},
      R,
      ((e = {}),
      (e[g] = b ? h + "px" : ""),
      (e[E] = w ? f + "px" : ""),
      (e.transform = ""),
      e)
    );
  }
  function Ep(r) {
    var e = r.state,
      t = r.options,
      i = t.gpuAcceleration,
      n = i === void 0 ? !0 : i,
      s = t.adaptive,
      o = s === void 0 ? !0 : s,
      a = t.roundOffsets,
      l = a === void 0 ? !0 : a,
      u = {
        placement: Ci(e.placement),
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
        pc(
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
          pc(
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
  const Ap = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Ep,
    data: {},
  };
  var qs = { passive: !0 };
  function Pp(r) {
    var e = r.state,
      t = r.instance,
      i = r.options,
      n = i.scroll,
      s = n === void 0 ? !0 : n,
      o = i.resize,
      a = o === void 0 ? !0 : o,
      l = jt(e.elements.popper),
      u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
      s &&
        u.forEach(function (c) {
          c.addEventListener("scroll", t.update, qs);
        }),
      a && l.addEventListener("resize", t.update, qs),
      function () {
        s &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", t.update, qs);
          }),
          a && l.removeEventListener("resize", t.update, qs);
      }
    );
  }
  const Op = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Pp,
    data: {},
  };
  var Mp = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function $s(r) {
    return r.replace(/left|right|bottom|top/g, function (e) {
      return Mp[e];
    });
  }
  var Lp = { start: "end", end: "start" };
  function hc(r) {
    return r.replace(/start|end/g, function (e) {
      return Lp[e];
    });
  }
  function Ta(r) {
    var e = jt(r),
      t = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: t, scrollTop: i };
  }
  function xa(r) {
    return rn(Qi(r)).left + Ta(r).scrollLeft;
  }
  function Dp(r, e) {
    var t = jt(r),
      i = Qi(r),
      n = t.visualViewport,
      s = i.clientWidth,
      o = i.clientHeight,
      a = 0,
      l = 0;
    if (n) {
      (s = n.width), (o = n.height);
      var u = ac();
      (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
    }
    return { width: s, height: o, x: a + xa(r), y: l };
  }
  function kp(r) {
    var e,
      t = Qi(r),
      i = Ta(r),
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
      a = -i.scrollLeft + xa(r),
      l = -i.scrollTop;
    return (
      Ni(n || t).direction === "rtl" &&
        (a += xr(t.clientWidth, n ? n.clientWidth : 0) - s),
      { width: s, height: o, x: a, y: l }
    );
  }
  function Ca(r) {
    var e = Ni(r),
      t = e.overflow,
      i = e.overflowX,
      n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + n + i);
  }
  function mc(r) {
    return ["html", "body", "#document"].indexOf(xi(r)) >= 0
      ? r.ownerDocument.body
      : ui(r) && Ca(r)
      ? r
      : mc(Vs(r));
  }
  function Yn(r, e) {
    var t;
    e === void 0 && (e = []);
    var i = mc(r),
      n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
      s = jt(i),
      o = n ? [s].concat(s.visualViewport || [], Ca(i) ? i : []) : i,
      a = e.concat(o);
    return n ? a : a.concat(Yn(Vs(o)));
  }
  function Ea(r) {
    return Object.assign({}, r, {
      left: r.x,
      top: r.y,
      right: r.x + r.width,
      bottom: r.y + r.height,
    });
  }
  function Ip(r, e) {
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
  function gc(r, e, t) {
    return e === rc ? Ea(Dp(r, t)) : Tr(e) ? Ip(e, t) : Ea(kp(Qi(r)));
  }
  function Rp(r) {
    var e = Yn(Vs(r)),
      t = ["absolute", "fixed"].indexOf(Ni(r).position) >= 0,
      i = t && ui(r) ? Gn(r) : r;
    return Tr(i)
      ? e.filter(function (n) {
          return Tr(n) && lc(n, i) && xi(n) !== "body";
        })
      : [];
  }
  function zp(r, e, t, i) {
    var n = e === "clippingParents" ? Rp(r) : [].concat(e),
      s = [].concat(n, [t]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = gc(r, u, i);
        return (
          (l.top = xr(c.top, l.top)),
          (l.right = Bs(c.right, l.right)),
          (l.bottom = Bs(c.bottom, l.bottom)),
          (l.left = xr(c.left, l.left)),
          l
        );
      }, gc(r, o, i));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function vc(r) {
    var e = r.reference,
      t = r.element,
      i = r.placement,
      n = i ? Ci(i) : null,
      s = i ? nn(i) : null,
      o = e.x + e.width / 2 - t.width / 2,
      a = e.y + e.height / 2 - t.height / 2,
      l;
    switch (n) {
      case kt:
        l = { x: o, y: e.y - t.height };
        break;
      case ai:
        l = { x: o, y: e.y + e.height };
        break;
      case li:
        l = { x: e.x + e.width, y: a };
        break;
      case It:
        l = { x: e.x - t.width, y: a };
        break;
      default:
        l = { x: e.x, y: e.y };
    }
    var u = n ? Sa(n) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (s) {
        case en:
          l[u] = l[u] - (e[c] / 2 - t[c] / 2);
          break;
        case Hn:
          l[u] = l[u] + (e[c] / 2 - t[c] / 2);
          break;
      }
    }
    return l;
  }
  function jn(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = i === void 0 ? r.placement : i,
      s = t.strategy,
      o = s === void 0 ? r.strategy : s,
      a = t.boundary,
      l = a === void 0 ? rp : a,
      u = t.rootBoundary,
      c = u === void 0 ? rc : u,
      d = t.elementContext,
      p = d === void 0 ? Wn : d,
      f = t.altBoundary,
      m = f === void 0 ? !1 : f,
      h = t.padding,
      v = h === void 0 ? 0 : h,
      w = dc(typeof v != "number" ? v : fc(v, $n)),
      b = p === Wn ? np : Wn,
      E = r.rects.popper,
      g = r.elements[m ? b : p],
      C = zp(Tr(g) ? g : g.contextElement || Qi(r.elements.popper), l, c, o),
      x = rn(r.elements.reference),
      P = vc({ reference: x, element: E, strategy: "absolute", placement: n }),
      M = Ea(Object.assign({}, E, P)),
      k = p === Wn ? M : x,
      L = {
        top: C.top - k.top + w.top,
        bottom: k.bottom - C.bottom + w.bottom,
        left: C.left - k.left + w.left,
        right: k.right - C.right + w.right,
      },
      R = r.modifiersData.offset;
    if (p === Wn && R) {
      var A = R[n];
      Object.keys(L).forEach(function (z) {
        var y = [li, ai].indexOf(z) >= 0 ? 1 : -1,
          _ = [kt, ai].indexOf(z) >= 0 ? "y" : "x";
        L[z] += A[_] * y;
      });
    }
    return L;
  }
  function Np(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = t.boundary,
      s = t.rootBoundary,
      o = t.padding,
      a = t.flipVariations,
      l = t.allowedAutoPlacements,
      u = l === void 0 ? sc : l,
      c = nn(i),
      d = c
        ? a
          ? nc
          : nc.filter(function (m) {
              return nn(m) === c;
            })
        : $n,
      p = d.filter(function (m) {
        return u.indexOf(m) >= 0;
      });
    p.length === 0 && (p = d);
    var f = p.reduce(function (m, h) {
      return (
        (m[h] = jn(r, {
          placement: h,
          boundary: n,
          rootBoundary: s,
          padding: o,
        })[Ci(h)]),
        m
      );
    }, {});
    return Object.keys(f).sort(function (m, h) {
      return f[m] - f[h];
    });
  }
  function Fp(r) {
    if (Ci(r) === _a) return [];
    var e = $s(r);
    return [hc(r), e, hc(e)];
  }
  function Bp(r) {
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
          h = t.allowedAutoPlacements,
          v = e.options.placement,
          w = Ci(v),
          b = w === v,
          E = l || (b || !m ? [$s(v)] : Fp(v)),
          g = [v].concat(E).reduce(function (X, ie) {
            return X.concat(
              Ci(ie) === _a
                ? Np(e, {
                    placement: ie,
                    boundary: c,
                    rootBoundary: d,
                    padding: u,
                    flipVariations: m,
                    allowedAutoPlacements: h,
                  })
                : ie
            );
          }, []),
          C = e.rects.reference,
          x = e.rects.popper,
          P = new Map(),
          M = !0,
          k = g[0],
          L = 0;
        L < g.length;
        L++
      ) {
        var R = g[L],
          A = Ci(R),
          z = nn(R) === en,
          y = [kt, ai].indexOf(A) >= 0,
          _ = y ? "width" : "height",
          S = jn(e, {
            placement: R,
            boundary: c,
            rootBoundary: d,
            altBoundary: p,
            padding: u,
          }),
          O = y ? (z ? li : It) : z ? ai : kt;
        C[_] > x[_] && (O = $s(O));
        var D = $s(O),
          I = [];
        if (
          (s && I.push(S[A] <= 0),
          a && I.push(S[O] <= 0, S[D] <= 0),
          I.every(function (X) {
            return X;
          }))
        ) {
          (k = R), (M = !1);
          break;
        }
        P.set(R, I);
      }
      if (M)
        for (
          var T = m ? 3 : 1,
            B = function (ie) {
              var ue = g.find(function (de) {
                var be = P.get(de);
                if (be)
                  return be.slice(0, ie).every(function (Ee) {
                    return Ee;
                  });
              });
              if (ue) return (k = ue), "break";
            },
            q = T;
          q > 0;
          q--
        ) {
          var Q = B(q);
          if (Q === "break") break;
        }
      e.placement !== k &&
        ((e.modifiersData[i]._skip = !0), (e.placement = k), (e.reset = !0));
    }
  }
  const Vp = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Bp,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function _c(r, e, t) {
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
  function yc(r) {
    return [kt, li, ai, It].some(function (e) {
      return r[e] >= 0;
    });
  }
  function qp(r) {
    var e = r.state,
      t = r.name,
      i = e.rects.reference,
      n = e.rects.popper,
      s = e.modifiersData.preventOverflow,
      o = jn(e, { elementContext: "reference" }),
      a = jn(e, { altBoundary: !0 }),
      l = _c(o, i),
      u = _c(a, n, s),
      c = yc(l),
      d = yc(u);
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
  const $p = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: qp,
  };
  function Hp(r, e, t) {
    var i = Ci(r),
      n = [It, kt].indexOf(i) >= 0 ? -1 : 1,
      s =
        typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
      o = s[0],
      a = s[1];
    return (
      (o = o || 0),
      (a = (a || 0) * n),
      [It, li].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function Wp(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.offset,
      s = n === void 0 ? [0, 0] : n,
      o = sc.reduce(function (c, d) {
        return (c[d] = Hp(d, e.rects, s)), c;
      }, {}),
      a = o[e.placement],
      l = a.x,
      u = a.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += l),
      (e.modifiersData.popperOffsets.y += u)),
      (e.modifiersData[i] = o);
  }
  const Gp = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Wp,
  };
  function Xp(r) {
    var e = r.state,
      t = r.name;
    e.modifiersData[t] = vc({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const Yp = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Xp,
    data: {},
  };
  function jp(r) {
    return r === "x" ? "y" : "x";
  }
  function Up(r) {
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
      h = m === void 0 ? 0 : m,
      v = jn(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
      w = Ci(e.placement),
      b = nn(e.placement),
      E = !b,
      g = Sa(w),
      C = jp(g),
      x = e.modifiersData.popperOffsets,
      P = e.rects.reference,
      M = e.rects.popper,
      k =
        typeof h == "function"
          ? h(Object.assign({}, e.rects, { placement: e.placement }))
          : h,
      L =
        typeof k == "number"
          ? { mainAxis: k, altAxis: k }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
      R = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      A = { x: 0, y: 0 };
    if (x) {
      if (s) {
        var z,
          y = g === "y" ? kt : It,
          _ = g === "y" ? ai : li,
          S = g === "y" ? "height" : "width",
          O = x[g],
          D = O + v[y],
          I = O - v[_],
          T = f ? -M[S] / 2 : 0,
          B = b === en ? P[S] : M[S],
          q = b === en ? -M[S] : -P[S],
          Q = e.elements.arrow,
          X = f && Q ? ba(Q) : { width: 0, height: 0 },
          ie = e.modifiersData["arrow#persistent"]
            ? e.modifiersData["arrow#persistent"].padding
            : cc(),
          ue = ie[y],
          de = ie[_],
          be = Xn(0, P[S], X[S]),
          Ee = E
            ? P[S] / 2 - T - be - ue - L.mainAxis
            : B - be - ue - L.mainAxis,
          rt = E
            ? -P[S] / 2 + T + be + de + L.mainAxis
            : q + be + de + L.mainAxis,
          Me = e.elements.arrow && Gn(e.elements.arrow),
          $e = Me ? (g === "y" ? Me.clientTop || 0 : Me.clientLeft || 0) : 0,
          se = (z = R?.[g]) != null ? z : 0,
          ye = O + Ee - se - $e,
          He = O + rt - se,
          We = Xn(f ? Bs(D, ye) : D, O, f ? xr(I, He) : I);
        (x[g] = We), (A[g] = We - O);
      }
      if (a) {
        var N,
          Ke = g === "x" ? kt : It,
          Rt = g === "x" ? ai : li,
          Ze = x[C],
          fe = C === "y" ? "height" : "width",
          Et = Ze + v[Ke],
          pt = Ze - v[Rt],
          Zt = [kt, It].indexOf(w) !== -1,
          Ae = (N = R?.[C]) != null ? N : 0,
          Qt = Zt ? Et : Ze - P[fe] - M[fe] - Ae + L.altAxis,
          we = Zt ? Ze + P[fe] + M[fe] - Ae - L.altAxis : pt,
          ht = f && Zt ? yp(Qt, Ze, we) : Xn(f ? Qt : Et, Ze, f ? we : pt);
        (x[C] = ht), (A[C] = ht - Ze);
      }
      e.modifiersData[i] = A;
    }
  }
  const Kp = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Up,
    requiresIfExists: ["offset"],
  };
  function Zp(r) {
    return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
  }
  function Qp(r) {
    return r === jt(r) || !ui(r) ? Ta(r) : Zp(r);
  }
  function Jp(r) {
    var e = r.getBoundingClientRect(),
      t = tn(e.width) / r.offsetWidth || 1,
      i = tn(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1;
  }
  function eh(r, e, t) {
    t === void 0 && (t = !1);
    var i = ui(e),
      n = ui(e) && Jp(e),
      s = Qi(e),
      o = rn(r, n, t),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !t)) &&
        ((xi(e) !== "body" || Ca(s)) && (a = Qp(e)),
        ui(e)
          ? ((l = rn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
          : s && (l.x = xa(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function th(r) {
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
  function ih(r) {
    var e = th(r);
    return hp.reduce(function (t, i) {
      return t.concat(
        e.filter(function (n) {
          return n.phase === i;
        })
      );
    }, []);
  }
  function rh(r) {
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
  function nh(r) {
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
  var wc = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function bc() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return !e.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function sh(r) {
    r === void 0 && (r = {});
    var e = r,
      t = e.defaultModifiers,
      i = t === void 0 ? [] : t,
      n = e.defaultOptions,
      s = n === void 0 ? wc : n;
    return function (a, l, u) {
      u === void 0 && (u = s);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, wc, s),
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
            h(),
              (c.options = Object.assign({}, s, c.options, b)),
              (c.scrollParents = {
                reference: Tr(a)
                  ? Yn(a)
                  : a.contextElement
                  ? Yn(a.contextElement)
                  : [],
                popper: Yn(l),
              });
            var E = ih(nh([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = E.filter(function (g) {
                return g.enabled;
              })),
              m(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var w = c.elements,
                b = w.reference,
                E = w.popper;
              if (bc(b, E)) {
                (c.rects = {
                  reference: eh(b, Gn(E), c.options.strategy === "fixed"),
                  popper: ba(E),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (L) {
                    return (c.modifiersData[L.name] = Object.assign(
                      {},
                      L.data
                    ));
                  });
                for (var g = 0; g < c.orderedModifiers.length; g++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (g = -1);
                    continue;
                  }
                  var C = c.orderedModifiers[g],
                    x = C.fn,
                    P = C.options,
                    M = P === void 0 ? {} : P,
                    k = C.name;
                  typeof x == "function" &&
                    (c =
                      x({ state: c, options: M, name: k, instance: f }) || c);
                }
              }
            }
          },
          update: rh(function () {
            return new Promise(function (v) {
              f.forceUpdate(), v(c);
            });
          }),
          destroy: function () {
            h(), (p = !0);
          },
        };
      if (!bc(a, l)) return f;
      f.setOptions(u).then(function (v) {
        !p && u.onFirstUpdate && u.onFirstUpdate(v);
      });
      function m() {
        c.orderedModifiers.forEach(function (v) {
          var w = v.name,
            b = v.options,
            E = b === void 0 ? {} : b,
            g = v.effect;
          if (typeof g == "function") {
            var C = g({ state: c, name: w, instance: f, options: E }),
              x = function () {};
            d.push(C || x);
          }
        });
      }
      function h() {
        d.forEach(function (v) {
          return v();
        }),
          (d = []);
      }
      return f;
    };
  }
  var oh = [Op, Yp, Ap, oc, Gp, Vp, Kp, Tp, $p],
    ah = sh({ defaultModifiers: oh }),
    lh = "tippy-box",
    Sc = "tippy-content",
    uh = "tippy-backdrop",
    Tc = "tippy-arrow",
    xc = "tippy-svg-arrow",
    Cr = { passive: !0, capture: !0 },
    Cc = function () {
      return document.body;
    };
  function Aa(r, e, t) {
    if (Array.isArray(r)) {
      var i = r[e];
      return i ?? (Array.isArray(t) ? t[e] : t);
    }
    return r;
  }
  function Pa(r, e) {
    var t = {}.toString.call(r);
    return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
  }
  function Ec(r, e) {
    return typeof r == "function" ? r.apply(void 0, e) : r;
  }
  function Ac(r, e) {
    if (e === 0) return r;
    var t;
    return function (i) {
      clearTimeout(t),
        (t = setTimeout(function () {
          r(i);
        }, e));
    };
  }
  function ch(r) {
    return r.split(/\s+/).filter(Boolean);
  }
  function sn(r) {
    return [].concat(r);
  }
  function Pc(r, e) {
    r.indexOf(e) === -1 && r.push(e);
  }
  function dh(r) {
    return r.filter(function (e, t) {
      return r.indexOf(e) === t;
    });
  }
  function fh(r) {
    return r.split("-")[0];
  }
  function Hs(r) {
    return [].slice.call(r);
  }
  function Oc(r) {
    return Object.keys(r).reduce(function (e, t) {
      return r[t] !== void 0 && (e[t] = r[t]), e;
    }, {});
  }
  function Un() {
    return document.createElement("div");
  }
  function Ws(r) {
    return ["Element", "Fragment"].some(function (e) {
      return Pa(r, e);
    });
  }
  function ph(r) {
    return Pa(r, "NodeList");
  }
  function hh(r) {
    return Pa(r, "MouseEvent");
  }
  function mh(r) {
    return !!(r && r._tippy && r._tippy.reference === r);
  }
  function gh(r) {
    return Ws(r)
      ? [r]
      : ph(r)
      ? Hs(r)
      : Array.isArray(r)
      ? r
      : Hs(document.querySelectorAll(r));
  }
  function Oa(r, e) {
    r.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function Mc(r, e) {
    r.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function vh(r) {
    var e,
      t = sn(r),
      i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body
      ? i.ownerDocument
      : document;
  }
  function _h(r, e) {
    var t = e.clientX,
      i = e.clientY;
    return r.every(function (n) {
      var s = n.popperRect,
        o = n.popperState,
        a = n.props,
        l = a.interactiveBorder,
        u = fh(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var d = u === "bottom" ? c.top.y : 0,
        p = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        m = u === "left" ? c.right.x : 0,
        h = s.top - i + d > l,
        v = i - s.bottom - p > l,
        w = s.left - t + f > l,
        b = t - s.right - m > l;
      return h || v || w || b;
    });
  }
  function Ma(r, e, t) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
      r[i](n, t);
    });
  }
  function Lc(r, e) {
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
  var Ei = { isTouch: !1 },
    Dc = 0;
  function yh() {
    Ei.isTouch ||
      ((Ei.isTouch = !0),
      window.performance && document.addEventListener("mousemove", kc));
  }
  function kc() {
    var r = performance.now();
    r - Dc < 20 &&
      ((Ei.isTouch = !1), document.removeEventListener("mousemove", kc)),
      (Dc = r);
  }
  function wh() {
    var r = document.activeElement;
    if (mh(r)) {
      var e = r._tippy;
      r.blur && !e.state.isVisible && r.blur();
    }
  }
  function bh() {
    document.addEventListener("touchstart", yh, Cr),
      window.addEventListener("blur", wh);
  }
  var Sh = typeof window < "u" && typeof document < "u",
    Th = Sh ? !!window.msCrypto : !1,
    xh = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Ch = {
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
    fi = Object.assign(
      {
        appendTo: Cc,
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
      xh,
      Ch
    ),
    Eh = Object.keys(fi),
    Ah = function (e) {
      var t = Object.keys(e);
      t.forEach(function (i) {
        fi[i] = e[i];
      });
    };
  function Ic(r) {
    var e = r.plugins || [],
      t = e.reduce(function (i, n) {
        var s = n.name,
          o = n.defaultValue;
        if (s) {
          var a;
          i[s] = r[s] !== void 0 ? r[s] : (a = fi[s]) != null ? a : o;
        }
        return i;
      }, {});
    return Object.assign({}, r, t);
  }
  function Ph(r, e) {
    var t = e ? Object.keys(Ic(Object.assign({}, fi, { plugins: e }))) : Eh,
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
  function Rc(r, e) {
    var t = Object.assign(
      {},
      e,
      { content: Ec(e.content, [r]) },
      e.ignoreAttributes ? {} : Ph(r, e.plugins)
    );
    return (
      (t.aria = Object.assign({}, fi.aria, t.aria)),
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
  var Oh = function () {
    return "innerHTML";
  };
  function La(r, e) {
    r[Oh()] = e;
  }
  function zc(r) {
    var e = Un();
    return (
      r === !0
        ? (e.className = Tc)
        : ((e.className = xc), Ws(r) ? e.appendChild(r) : La(e, r)),
      e
    );
  }
  function Nc(r, e) {
    Ws(e.content)
      ? (La(r, ""), r.appendChild(e.content))
      : typeof e.content != "function" &&
        (e.allowHTML ? La(r, e.content) : (r.textContent = e.content));
  }
  function Da(r) {
    var e = r.firstElementChild,
      t = Hs(e.children);
    return {
      box: e,
      content: t.find(function (i) {
        return i.classList.contains(Sc);
      }),
      arrow: t.find(function (i) {
        return i.classList.contains(Tc) || i.classList.contains(xc);
      }),
      backdrop: t.find(function (i) {
        return i.classList.contains(uh);
      }),
    };
  }
  function Fc(r) {
    var e = Un(),
      t = Un();
    (t.className = lh),
      t.setAttribute("data-state", "hidden"),
      t.setAttribute("tabindex", "-1");
    var i = Un();
    (i.className = Sc),
      i.setAttribute("data-state", "hidden"),
      Nc(i, r.props),
      e.appendChild(t),
      t.appendChild(i),
      n(r.props, r.props);
    function n(s, o) {
      var a = Da(e),
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
          Nc(u, r.props),
        o.arrow
          ? c
            ? s.arrow !== o.arrow &&
              (l.removeChild(c), l.appendChild(zc(o.arrow)))
            : l.appendChild(zc(o.arrow))
          : c && l.removeChild(c);
    }
    return { popper: e, onUpdate: n };
  }
  Fc.$$tippy = !0;
  var Mh = 1,
    Gs = [],
    ka = [];
  function Lh(r, e) {
    var t = Rc(r, Object.assign({}, fi, Ic(Oc(e)))),
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
      m = Ac(ye, t.interactiveDebounce),
      h,
      v = Mh++,
      w = null,
      b = dh(t.plugins),
      E = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1,
      },
      g = {
        id: v,
        reference: r,
        popper: Un(),
        popperInstance: w,
        props: t,
        state: E,
        plugins: b,
        clearDelayTimeouts: Qt,
        setProps: we,
        setContent: ht,
        show: zt,
        hide: pi,
        hideWithInteractivity: Ar,
        enable: Zt,
        disable: Ae,
        unmount: Le,
        destroy: ln,
      };
    if (!t.render) return g;
    var C = t.render(g),
      x = C.popper,
      P = C.onUpdate;
    x.setAttribute("data-tippy-root", ""),
      (x.id = "tippy-" + g.id),
      (g.popper = x),
      (r._tippy = g),
      (x._tippy = g);
    var M = b.map(function (F) {
        return F.fn(g);
      }),
      k = r.hasAttribute("aria-expanded");
    return (
      Me(),
      T(),
      O(),
      D("onCreate", [g]),
      t.showOnCreate && Et(),
      x.addEventListener("mouseenter", function () {
        g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
      }),
      x.addEventListener("mouseleave", function () {
        g.props.interactive &&
          g.props.trigger.indexOf("mouseenter") >= 0 &&
          y().addEventListener("mousemove", m);
      }),
      g
    );
    function L() {
      var F = g.props.touch;
      return Array.isArray(F) ? F : [F, 0];
    }
    function R() {
      return L()[0] === "hold";
    }
    function A() {
      var F;
      return !!((F = g.props.render) != null && F.$$tippy);
    }
    function z() {
      return h || r;
    }
    function y() {
      var F = z().parentNode;
      return F ? vh(F) : document;
    }
    function _() {
      return Da(x);
    }
    function S(F) {
      return (g.state.isMounted && !g.state.isVisible) ||
        Ei.isTouch ||
        (c && c.type === "focus")
        ? 0
        : Aa(g.props.delay, F ? 0 : 1, fi.delay);
    }
    function O(F) {
      F === void 0 && (F = !1),
        (x.style.pointerEvents = g.props.interactive && !F ? "" : "none"),
        (x.style.zIndex = "" + g.props.zIndex);
    }
    function D(F, H, j) {
      if (
        (j === void 0 && (j = !0),
        M.forEach(function (re) {
          re[F] && re[F].apply(re, H);
        }),
        j)
      ) {
        var le;
        (le = g.props)[F].apply(le, H);
      }
    }
    function I() {
      var F = g.props.aria;
      if (F.content) {
        var H = "aria-" + F.content,
          j = x.id,
          le = sn(g.props.triggerTarget || r);
        le.forEach(function (re) {
          var U = re.getAttribute(H);
          if (g.state.isVisible) re.setAttribute(H, U ? U + " " + j : j);
          else {
            var Be = U && U.replace(j, "").trim();
            Be ? re.setAttribute(H, Be) : re.removeAttribute(H);
          }
        });
      }
    }
    function T() {
      if (!(k || !g.props.aria.expanded)) {
        var F = sn(g.props.triggerTarget || r);
        F.forEach(function (H) {
          g.props.interactive
            ? H.setAttribute(
                "aria-expanded",
                g.state.isVisible && H === z() ? "true" : "false"
              )
            : H.removeAttribute("aria-expanded");
        });
      }
    }
    function B() {
      y().removeEventListener("mousemove", m),
        (Gs = Gs.filter(function (F) {
          return F !== m;
        }));
    }
    function q(F) {
      if (!(Ei.isTouch && (l || F.type === "mousedown"))) {
        var H = (F.composedPath && F.composedPath()[0]) || F.target;
        if (!(g.props.interactive && Lc(x, H))) {
          if (
            sn(g.props.triggerTarget || r).some(function (j) {
              return Lc(j, H);
            })
          ) {
            if (
              Ei.isTouch ||
              (g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
            )
              return;
          } else D("onClickOutside", [g, F]);
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
      var F = y();
      F.addEventListener("mousedown", q, !0),
        F.addEventListener("touchend", q, Cr),
        F.addEventListener("touchstart", X, Cr),
        F.addEventListener("touchmove", Q, Cr);
    }
    function ue() {
      var F = y();
      F.removeEventListener("mousedown", q, !0),
        F.removeEventListener("touchend", q, Cr),
        F.removeEventListener("touchstart", X, Cr),
        F.removeEventListener("touchmove", Q, Cr);
    }
    function de(F, H) {
      Ee(F, function () {
        !g.state.isVisible && x.parentNode && x.parentNode.contains(x) && H();
      });
    }
    function be(F, H) {
      Ee(F, H);
    }
    function Ee(F, H) {
      var j = _().box;
      function le(re) {
        re.target === j && (Ma(j, "remove", le), H());
      }
      if (F === 0) return H();
      Ma(j, "remove", d), Ma(j, "add", le), (d = le);
    }
    function rt(F, H, j) {
      j === void 0 && (j = !1);
      var le = sn(g.props.triggerTarget || r);
      le.forEach(function (re) {
        re.addEventListener(F, H, j),
          f.push({ node: re, eventType: F, handler: H, options: j });
      });
    }
    function Me() {
      R() &&
        (rt("touchstart", se, { passive: !0 }),
        rt("touchend", He, { passive: !0 })),
        ch(g.props.trigger).forEach(function (F) {
          if (F !== "manual")
            switch ((rt(F, se), F)) {
              case "mouseenter":
                rt("mouseleave", He);
                break;
              case "focus":
                rt(Th ? "focusout" : "blur", We);
                break;
              case "focusin":
                rt("focusout", We);
                break;
            }
        });
    }
    function $e() {
      f.forEach(function (F) {
        var H = F.node,
          j = F.eventType,
          le = F.handler,
          re = F.options;
        H.removeEventListener(j, le, re);
      }),
        (f = []);
    }
    function se(F) {
      var H,
        j = !1;
      if (!(!g.state.isEnabled || N(F) || a)) {
        var le = ((H = c) == null ? void 0 : H.type) === "focus";
        (c = F),
          (h = F.currentTarget),
          T(),
          !g.state.isVisible &&
            hh(F) &&
            Gs.forEach(function (re) {
              return re(F);
            }),
          F.type === "click" &&
          (g.props.trigger.indexOf("mouseenter") < 0 || o) &&
          g.props.hideOnClick !== !1 &&
          g.state.isVisible
            ? (j = !0)
            : Et(F),
          F.type === "click" && (o = !j),
          j && !le && pt(F);
      }
    }
    function ye(F) {
      var H = F.target,
        j = z().contains(H) || x.contains(H);
      if (!(F.type === "mousemove" && j)) {
        var le = fe()
          .concat(x)
          .map(function (re) {
            var U,
              Be = re._tippy,
              Qe = (U = Be.popperInstance) == null ? void 0 : U.state;
            return Qe
              ? {
                  popperRect: re.getBoundingClientRect(),
                  popperState: Qe,
                  props: t,
                }
              : null;
          })
          .filter(Boolean);
        _h(le, F) && (B(), pt(F));
      }
    }
    function He(F) {
      var H = N(F) || (g.props.trigger.indexOf("click") >= 0 && o);
      if (!H) {
        if (g.props.interactive) {
          g.hideWithInteractivity(F);
          return;
        }
        pt(F);
      }
    }
    function We(F) {
      (g.props.trigger.indexOf("focusin") < 0 && F.target !== z()) ||
        (g.props.interactive &&
          F.relatedTarget &&
          x.contains(F.relatedTarget)) ||
        pt(F);
    }
    function N(F) {
      return Ei.isTouch ? R() !== F.type.indexOf("touch") >= 0 : !1;
    }
    function Ke() {
      Rt();
      var F = g.props,
        H = F.popperOptions,
        j = F.placement,
        le = F.offset,
        re = F.getReferenceClientRect,
        U = F.moveTransition,
        Be = A() ? Da(x).arrow : null,
        Qe = re
          ? {
              getBoundingClientRect: re,
              contextElement: re.contextElement || z(),
            }
          : r,
        Nt = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (mi) {
            var mt = mi.state;
            if (A()) {
              var Pr = _(),
                J = Pr.box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                Y
              ) {
                Y === "placement"
                  ? J.setAttribute("data-placement", mt.placement)
                  : mt.attributes.popper["data-popper-" + Y]
                  ? J.setAttribute("data-" + Y, "")
                  : J.removeAttribute("data-" + Y);
              }),
                (mt.attributes.popper = {});
            }
          },
        },
        Ge = [
          { name: "offset", options: { offset: le } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !U } },
          Nt,
        ];
      A() &&
        Be &&
        Ge.push({ name: "arrow", options: { element: Be, padding: 3 } }),
        Ge.push.apply(Ge, H?.modifiers || []),
        (g.popperInstance = ah(
          Qe,
          x,
          Object.assign({}, H, {
            placement: j,
            onFirstUpdate: p,
            modifiers: Ge,
          })
        ));
    }
    function Rt() {
      g.popperInstance &&
        (g.popperInstance.destroy(), (g.popperInstance = null));
    }
    function Ze() {
      var F = g.props.appendTo,
        H,
        j = z();
      (g.props.interactive && F === Cc) || F === "parent"
        ? (H = j.parentNode)
        : (H = Ec(F, [j])),
        H.contains(x) || H.appendChild(x),
        (g.state.isMounted = !0),
        Ke();
    }
    function fe() {
      return Hs(x.querySelectorAll("[data-tippy-root]"));
    }
    function Et(F) {
      g.clearDelayTimeouts(), F && D("onTrigger", [g, F]), ie();
      var H = S(!0),
        j = L(),
        le = j[0],
        re = j[1];
      Ei.isTouch && le === "hold" && re && (H = re),
        H
          ? (i = setTimeout(function () {
              g.show();
            }, H))
          : g.show();
    }
    function pt(F) {
      if (
        (g.clearDelayTimeouts(), D("onUntrigger", [g, F]), !g.state.isVisible)
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
        var H = S(!1);
        H
          ? (n = setTimeout(function () {
              g.state.isVisible && g.hide();
            }, H))
          : (s = requestAnimationFrame(function () {
              g.hide();
            }));
      }
    }
    function Zt() {
      g.state.isEnabled = !0;
    }
    function Ae() {
      g.hide(), (g.state.isEnabled = !1);
    }
    function Qt() {
      clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
    }
    function we(F) {
      if (!g.state.isDestroyed) {
        D("onBeforeUpdate", [g, F]), $e();
        var H = g.props,
          j = Rc(r, Object.assign({}, H, Oc(F), { ignoreAttributes: !0 }));
        (g.props = j),
          Me(),
          H.interactiveDebounce !== j.interactiveDebounce &&
            (B(), (m = Ac(ye, j.interactiveDebounce))),
          H.triggerTarget && !j.triggerTarget
            ? sn(H.triggerTarget).forEach(function (le) {
                le.removeAttribute("aria-expanded");
              })
            : j.triggerTarget && r.removeAttribute("aria-expanded"),
          T(),
          O(),
          P && P(H, j),
          g.popperInstance &&
            (Ke(),
            fe().forEach(function (le) {
              requestAnimationFrame(le._tippy.popperInstance.forceUpdate);
            })),
          D("onAfterUpdate", [g, F]);
      }
    }
    function ht(F) {
      g.setProps({ content: F });
    }
    function zt() {
      var F = g.state.isVisible,
        H = g.state.isDestroyed,
        j = !g.state.isEnabled,
        le = Ei.isTouch && !g.props.touch,
        re = Aa(g.props.duration, 0, fi.duration);
      if (
        !(F || H || j || le) &&
        !z().hasAttribute("disabled") &&
        (D("onShow", [g], !1), g.props.onShow(g) !== !1)
      ) {
        if (
          ((g.state.isVisible = !0),
          A() && (x.style.visibility = "visible"),
          O(),
          ie(),
          g.state.isMounted || (x.style.transition = "none"),
          A())
        ) {
          var U = _(),
            Be = U.box,
            Qe = U.content;
          Oa([Be, Qe], 0);
        }
        (p = function () {
          var Ge;
          if (!(!g.state.isVisible || u)) {
            if (
              ((u = !0),
              (x.style.transition = g.props.moveTransition),
              A() && g.props.animation)
            ) {
              var hi = _(),
                mi = hi.box,
                mt = hi.content;
              Oa([mi, mt], re), Mc([mi, mt], "visible");
            }
            I(),
              T(),
              Pc(ka, g),
              (Ge = g.popperInstance) == null || Ge.forceUpdate(),
              D("onMount", [g]),
              g.props.animation &&
                A() &&
                be(re, function () {
                  (g.state.isShown = !0), D("onShown", [g]);
                });
          }
        }),
          Ze();
      }
    }
    function pi() {
      var F = !g.state.isVisible,
        H = g.state.isDestroyed,
        j = !g.state.isEnabled,
        le = Aa(g.props.duration, 1, fi.duration);
      if (!(F || H || j) && (D("onHide", [g], !1), g.props.onHide(g) !== !1)) {
        if (
          ((g.state.isVisible = !1),
          (g.state.isShown = !1),
          (u = !1),
          (o = !1),
          A() && (x.style.visibility = "hidden"),
          B(),
          ue(),
          O(!0),
          A())
        ) {
          var re = _(),
            U = re.box,
            Be = re.content;
          g.props.animation && (Oa([U, Be], le), Mc([U, Be], "hidden"));
        }
        I(), T(), g.props.animation ? A() && de(le, g.unmount) : g.unmount();
      }
    }
    function Ar(F) {
      y().addEventListener("mousemove", m), Pc(Gs, m), m(F);
    }
    function Le() {
      g.state.isVisible && g.hide(),
        g.state.isMounted &&
          (Rt(),
          fe().forEach(function (F) {
            F._tippy.unmount();
          }),
          x.parentNode && x.parentNode.removeChild(x),
          (ka = ka.filter(function (F) {
            return F !== g;
          })),
          (g.state.isMounted = !1),
          D("onHidden", [g]));
    }
    function ln() {
      g.state.isDestroyed ||
        (g.clearDelayTimeouts(),
        g.unmount(),
        $e(),
        delete r._tippy,
        (g.state.isDestroyed = !0),
        D("onDestroy", [g]));
    }
  }
  function Kn(r, e) {
    e === void 0 && (e = {});
    var t = fi.plugins.concat(e.plugins || []);
    bh();
    var i = Object.assign({}, e, { plugins: t }),
      n = gh(r),
      s = n.reduce(function (o, a) {
        var l = a && Lh(a, i);
        return l && o.push(l), o;
      }, []);
    return Ws(r) ? s[0] : s;
  }
  (Kn.defaultProps = fi),
    (Kn.setDefaultProps = Ah),
    (Kn.currentInput = Ei),
    Object.assign({}, oc, {
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
    Kn.setDefaultProps({ render: Fc });
  const Dh = () => {
      const r = document.querySelectorAll("[data-tooltip]"),
        e = window.innerWidth < 768;
      r.forEach((t) => {
        Kn(t, {
          content: t.getAttribute("data-tooltip"),
          placement: e ? "top" : "right",
          animation: "shift-away",
          arrow: !1,
          theme: "hm-tooltip",
          interactive: !0,
        });
      });
    },
    kh = () => {
      Dh();
    };
  G.registerPlugin(Z);
  let Ia = [],
    Bc;
  const Vc = () => {
      Ia.forEach((t) => t.kill()), (Ia = []);
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
          c = G.timeline({
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
          Ia.push(c.scrollTrigger);
      });
    },
    Ih = () => {
      Vc(),
        window.addEventListener("resize", () => {
          clearTimeout(Bc),
            (Bc = setTimeout(() => {
              Vc(), Z.refresh();
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
  function Ra(r, e) {
    r === void 0 && (r = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof r[i] > "u"
          ? (r[i] = e[i])
          : qc(e[i]) &&
            qc(r[i]) &&
            Object.keys(e[i]).length > 0 &&
            Ra(r[i], e[i]);
      });
  }
  const $c = {
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
    return Ra(r, $c), r;
  }
  const Rh = {
    document: $c,
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
  function ft() {
    const r = typeof window < "u" ? window : {};
    return Ra(r, Rh), r;
  }
  function Ji(r) {
    return (
      r === void 0 && (r = ""),
      r
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function zh(r) {
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
  function Xs(r, e) {
    return e === void 0 && (e = 0), setTimeout(r, e);
  }
  function Ys() {
    return Date.now();
  }
  function Nh(r) {
    const e = ft();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(r, null)),
      !t && r.currentStyle && (t = r.currentStyle),
      t || (t = r.style),
      t
    );
  }
  function Fh(r, e) {
    e === void 0 && (e = "x");
    const t = ft();
    let i, n, s;
    const o = Nh(r);
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
  function js(r) {
    return (
      typeof r == "object" &&
      r !== null &&
      r.constructor &&
      Object.prototype.toString.call(r).slice(8, -1) === "Object"
    );
  }
  function Bh(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? r instanceof HTMLElement
      : r && (r.nodeType === 1 || r.nodeType === 11);
  }
  function Ut() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Bh(i)) {
        const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = n.length; s < o; s += 1) {
          const a = n[s],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (js(r[a]) && js(i[a])
              ? i[a].__swiper__
                ? (r[a] = i[a])
                : Ut(r[a], i[a])
              : !js(r[a]) && js(i[a])
              ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Ut(r[a], i[a]))
              : (r[a] = i[a]));
        }
      }
    }
    return r;
  }
  function Us(r, e, t) {
    r.style.setProperty(e, t);
  }
  function Hc(r) {
    let { swiper: e, targetPosition: t, side: i } = r;
    const n = ft(),
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
  function Ai(r, e) {
    e === void 0 && (e = "");
    const t = ft(),
      i = [...r.children];
    return (
      t.HTMLSlotElement &&
        r instanceof HTMLSlotElement &&
        i.push(...r.assignedElements()),
      e ? i.filter((n) => n.matches(e)) : i
    );
  }
  function Vh(r, e) {
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
  function qh(r, e) {
    const t = ft();
    let i = e.contains(r);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(r)), i || (i = Vh(r, e))),
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
    return t.classList.add(...(Array.isArray(e) ? e : Ji(e))), t;
  }
  function $h(r) {
    const e = ft(),
      t = ci(),
      i = r.getBoundingClientRect(),
      n = t.body,
      s = r.clientTop || n.clientTop || 0,
      o = r.clientLeft || n.clientLeft || 0,
      a = r === e ? e.scrollY : r.scrollTop,
      l = r === e ? e.scrollX : r.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  function Hh(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
      const i = r.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function Wh(r, e) {
    const t = [];
    for (; r.nextElementSibling; ) {
      const i = r.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function er(r, e) {
    return ft().getComputedStyle(r, null).getPropertyValue(e);
  }
  function Wc(r) {
    let e = r,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Gh(r, e) {
    const t = [];
    let i = r.parentElement;
    for (; i; ) t.push(i), (i = i.parentElement);
    return t;
  }
  function Gc(r, e, t) {
    const i = ft();
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
  function Xh(r) {
    return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
  }
  let za;
  function Yh() {
    const r = ft(),
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
  function Xc() {
    return za || (za = Yh()), za;
  }
  let Na;
  function jh(r) {
    let { userAgent: e } = r === void 0 ? {} : r;
    const t = Xc(),
      i = ft(),
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
    const h = [
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
        h.indexOf(`${a}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (m = !1)),
      u && !f && ((o.os = "android"), (o.android = !0)),
      (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function Yc(r) {
    return r === void 0 && (r = {}), Na || (Na = jh(r)), Na;
  }
  let Fa;
  function Uh() {
    const r = ft(),
      e = Yc();
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
  function jc() {
    return Fa || (Fa = Uh()), Fa;
  }
  function Kh(r) {
    let { swiper: e, on: t, emit: i } = r;
    const n = ft();
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
                h = f;
              d.forEach((v) => {
                let { contentBoxSize: w, contentRect: b, target: E } = v;
                (E && E !== e.el) ||
                  ((m = b ? b.width : (w[0] || w).inlineSize),
                  (h = b ? b.height : (w[0] || w).blockSize));
              }),
                (m !== p || h !== f) && a();
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
  function Zh(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = [],
      o = ft(),
      a = function (c, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver,
          f = new p((m) => {
            if (e.__preventObserver__) return;
            if (m.length === 1) {
              n("observerUpdate", m[0]);
              return;
            }
            const h = function () {
              n("observerUpdate", m[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(h)
              : o.setTimeout(h, 0);
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
            const c = Gh(e.hostEl);
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
  var Qh = {
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
  function Jh() {
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
          parseInt(er(i, "padding-left") || 0, 10) -
          parseInt(er(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(er(i, "padding-top") || 0, 10) -
          parseInt(er(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(r, {
          width: e,
          height: t,
          size: r.isHorizontal() ? e : t,
        }));
  }
  function em() {
    const r = this;
    function e(L, R) {
      return parseFloat(L.getPropertyValue(r.getDirectionLabel(R)) || 0);
    }
    const t = r.params,
      { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
      l = r.virtual && t.virtual.enabled,
      u = l ? r.virtual.slides.length : r.slides.length,
      c = Ai(n, `.${r.params.slideClass}, swiper-slide`),
      d = l ? r.virtual.slides.length : c.length;
    let p = [];
    const f = [],
      m = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(r));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(r));
    const w = r.snapGrid.length,
      b = r.slidesGrid.length;
    let E = t.spaceBetween,
      g = -h,
      C = 0,
      x = 0;
    if (typeof s > "u") return;
    typeof E == "string" && E.indexOf("%") >= 0
      ? (E = (parseFloat(E.replace("%", "")) / 100) * s)
      : typeof E == "string" && (E = parseFloat(E)),
      (r.virtualSize = -E),
      c.forEach((L) => {
        o ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
          (L.style.marginBottom = ""),
          (L.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Us(i, "--swiper-centered-offset-before", ""),
        Us(i, "--swiper-centered-offset-after", ""));
    const P = t.grid && t.grid.rows > 1 && r.grid;
    P ? r.grid.initSlides(c) : r.grid && r.grid.unsetSlides();
    let M;
    const k =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (L) => typeof t.breakpoints[L].slidesPerView < "u"
      ).length > 0;
    for (let L = 0; L < d; L += 1) {
      M = 0;
      let R;
      if (
        (c[L] && (R = c[L]),
        P && r.grid.updateSlide(L, R, c),
        !(c[L] && er(R, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          k && (c[L].style[r.getDirectionLabel("width")] = "");
          const A = getComputedStyle(R),
            z = R.style.transform,
            y = R.style.webkitTransform;
          if (
            (z && (R.style.transform = "none"),
            y && (R.style.webkitTransform = "none"),
            t.roundLengths)
          )
            M = r.isHorizontal() ? Gc(R, "width") : Gc(R, "height");
          else {
            const _ = e(A, "width"),
              S = e(A, "padding-left"),
              O = e(A, "padding-right"),
              D = e(A, "margin-left"),
              I = e(A, "margin-right"),
              T = A.getPropertyValue("box-sizing");
            if (T && T === "border-box") M = _ + D + I;
            else {
              const { clientWidth: B, offsetWidth: q } = R;
              M = _ + S + O + D + I + (q - B);
            }
          }
          z && (R.style.transform = z),
            y && (R.style.webkitTransform = y),
            t.roundLengths && (M = Math.floor(M));
        } else
          (M = (s - (t.slidesPerView - 1) * E) / t.slidesPerView),
            t.roundLengths && (M = Math.floor(M)),
            c[L] && (c[L].style[r.getDirectionLabel("width")] = `${M}px`);
        c[L] && (c[L].swiperSlideSize = M),
          m.push(M),
          t.centeredSlides
            ? ((g = g + M / 2 + C / 2 + E),
              C === 0 && L !== 0 && (g = g - s / 2 - E),
              L === 0 && (g = g - s / 2 - E),
              Math.abs(g) < 1 / 1e3 && (g = 0),
              t.roundLengths && (g = Math.floor(g)),
              x % t.slidesPerGroup === 0 && p.push(g),
              f.push(g))
            : (t.roundLengths && (g = Math.floor(g)),
              (x - Math.min(r.params.slidesPerGroupSkip, x)) %
                r.params.slidesPerGroup ===
                0 && p.push(g),
              f.push(g),
              (g = g + M + E)),
          (r.virtualSize += M + E),
          (C = M),
          (x += 1);
      }
    }
    if (
      ((r.virtualSize = Math.max(r.virtualSize, s) + v),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${r.virtualSize + E}px`),
      t.setWrapperSize &&
        (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + E}px`),
      P && r.grid.updateWrapperSize(M, p),
      !t.centeredSlides)
    ) {
      const L = [];
      for (let R = 0; R < p.length; R += 1) {
        let A = p[R];
        t.roundLengths && (A = Math.floor(A)),
          p[R] <= r.virtualSize - s && L.push(A);
      }
      (p = L),
        Math.floor(r.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(r.virtualSize - s);
    }
    if (l && t.loop) {
      const L = m[0] + E;
      if (t.slidesPerGroup > 1) {
        const R = Math.ceil(
            (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
          ),
          A = L * t.slidesPerGroup;
        for (let z = 0; z < R; z += 1) p.push(p[p.length - 1] + A);
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
    if ((p.length === 0 && (p = [0]), E !== 0)) {
      const L =
        r.isHorizontal() && o
          ? "marginLeft"
          : r.getDirectionLabel("marginRight");
      c.filter((R, A) =>
        !t.cssMode || t.loop ? !0 : A !== c.length - 1
      ).forEach((R) => {
        R.style[L] = `${E}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let L = 0;
      m.forEach((A) => {
        L += A + (E || 0);
      }),
        (L -= E);
      const R = L > s ? L - s : 0;
      p = p.map((A) => (A <= 0 ? -h : A > R ? R + v : A));
    }
    if (t.centerInsufficientSlides) {
      let L = 0;
      m.forEach((A) => {
        L += A + (E || 0);
      }),
        (L -= E);
      const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (L + R < s) {
        const A = (s - L - R) / 2;
        p.forEach((z, y) => {
          p[y] = z - A;
        }),
          f.forEach((z, y) => {
            f[y] = z + A;
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
      Us(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        Us(
          i,
          "--swiper-centered-offset-after",
          `${r.size / 2 - m[m.length - 1] / 2}px`
        );
      const L = -r.snapGrid[0],
        R = -r.slidesGrid[0];
      (r.snapGrid = r.snapGrid.map((A) => A + L)),
        (r.slidesGrid = r.slidesGrid.map((A) => A + R));
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
  function tm(r) {
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
  function im() {
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
  const Uc = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function rm(r) {
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
        m = f + e.slidesSizesGrid[l],
        h = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
        v =
          (f >= 0 && f < e.size - 1) ||
          (m > 1 && m <= e.size) ||
          (f <= 0 && m >= e.size);
      v && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        Uc(u, v, t.slideVisibleClass),
        Uc(u, h, t.slideFullyVisibleClass),
        (u.progress = n ? -d : d),
        (u.originalProgress = n ? -p : p);
    }
  }
  function nm(r) {
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
        m = e.slidesGrid[e.slidesGrid.length - 1],
        h = Math.abs(r);
      h >= p ? (a = (h - p) / m) : (a = (h + m - f) / m), a > 1 && (a -= 1);
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
  const Ba = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function sm() {
    const r = this,
      { slides: e, params: t, slidesEl: i, activeIndex: n } = r,
      s = r.virtual && t.virtual.enabled,
      o = r.grid && t.grid && t.grid.rows > 1,
      a = (d) => Ai(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
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
        ((c = Wh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Hh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((d) => {
        Ba(d, d === l, t.slideActiveClass),
          Ba(d, d === c, t.slideNextClass),
          Ba(d, d === u, t.slidePrevClass);
      }),
      r.emitSlidesClasses();
  }
  const Zs = (r, e) => {
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
    Va = (r, e) => {
      if (!r.slides[e]) return;
      const t = r.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    qa = (r) => {
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
            a.includes(l.column) && Va(r, u);
          });
        return;
      }
      const s = n + i - 1;
      if (r.params.rewind || r.params.loop)
        for (let o = n - e; o <= s + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < n || a > s) && Va(r, a);
        }
      else
        for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
          o !== n && (o > s || o < n) && Va(r, o);
    };
  function om(r) {
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
  function am(r) {
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
    if ((typeof l > "u" && (l = om(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
      const f = e.slides.find((h) => h.column === l);
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
      e.initialized && qa(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== p && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function lm(r, e) {
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
  var um = {
    updateSize: Jh,
    updateSlides: em,
    updateAutoHeight: tm,
    updateSlidesOffset: im,
    updateSlidesProgress: rm,
    updateProgress: nm,
    updateSlidesClasses: sm,
    updateActiveIndex: am,
    updateClickedSlide: lm,
  };
  function cm(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -n : n;
    if (t.cssMode) return n;
    let o = Fh(s, r);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function dm(r, e) {
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
  function fm() {
    return -this.snapGrid[0];
  }
  function pm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function hm(r, e, t, i, n) {
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
            Hc({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
  var mm = {
    getTranslate: cm,
    setTranslate: dm,
    minTranslate: fm,
    maxTranslate: pm,
    translateTo: hm,
  };
  function gm(r, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${r}ms`),
      (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
      t.emit("setTransition", r, e);
  }
  function Kc(r) {
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
  function vm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Kc({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
  }
  function _m(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Kc({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
  }
  var ym = { setTransition: gm, transitionStart: vm, transitionEnd: _m };
  function wm(r, e, t, i, n) {
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
    typeof e > "u" && (e = s.params.speed);
    const h = Math.min(s.params.slidesPerGroupSkip, o);
    let v = h + Math.floor((o - h) / s.params.slidesPerGroup);
    v >= l.length && (v = l.length - 1);
    const w = -l[v];
    if (a.normalizeSlideIndex)
      for (let P = 0; P < u.length; P += 1) {
        const M = -Math.floor(w * 100),
          k = Math.floor(u[P] * 100),
          L = Math.floor(u[P + 1] * 100);
        typeof u[P + 1] < "u"
          ? M >= k && M < L - (L - k) / 2
            ? (o = P)
            : M >= k && M < L && (o = P + 1)
          : M >= k && (o = P);
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
    const E = s.virtual && s.params.virtual.enabled;
    if (!(E && n) && ((p && -w === s.translate) || (!p && w === s.translate)))
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
        E &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          E && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                f[P ? "scrollLeft" : "scrollTop"] = M;
              }))
            : (f[P ? "scrollLeft" : "scrollTop"] = M),
          E &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Hc({ swiper: s, targetPosition: M, side: P ? "left" : "top" }), !0
          );
        f.scrollTo({ [P ? "left" : "top"]: M, behavior: "smooth" });
      }
      return !0;
    }
    const x = jc().isSafari;
    return (
      E && !n && x && s.isElement && s.virtual.update(!1, !1, o),
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
  function bm(r, e, t, i) {
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
  function Sm(r, e, t) {
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
  function Tm(r, e, t) {
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
    function p(b) {
      return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
    }
    const f = p(d),
      m = s.map((b) => p(b)),
      h = n.freeMode && n.freeMode.enabled;
    let v = s[m.indexOf(f) - 1];
    if (typeof v > "u" && (n.cssMode || h)) {
      let b;
      s.forEach((E, g) => {
        f >= E && (b = g);
      }),
        typeof b < "u" && (v = h ? s[b] : s[b > 0 ? b - 1 : b]);
    }
    let w = 0;
    if (
      (typeof v < "u" &&
        ((w = o.indexOf(v)),
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
  function xm(r, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof r > "u" && (r = i.params.speed),
        i.slideTo(i.activeIndex, r, e, t)
      );
  }
  function Cm(r, e, t, i) {
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
  function Em() {
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
                Ai(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
              )),
              Xs(() => {
                r.slideTo(n);
              }))
            : r.slideTo(n)
          : n > r.slides.length - i
          ? (r.loopFix(),
            (n = r.getSlideIndex(
              Ai(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Xs(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n);
    } else r.slideTo(n);
  }
  var Am = {
    slideTo: wm,
    slideToLoop: bm,
    slideNext: Sm,
    slidePrev: Tm,
    slideReset: xm,
    slideToClosest: Cm,
    slideToClickedSlide: Em,
  };
  function Pm(r, e) {
    const t = this,
      { params: i, slidesEl: n } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        Ai(n, `.${i.slideClass}, swiper-slide`).forEach((p, f) => {
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
  function Om(r) {
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
      { centeredSlides: h, initialSlide: v } = m;
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
        h && w % 2 === 0 && (w = w + 1));
    const b = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
    let E = b;
    E % b !== 0 && (E += b - (E % b)),
      (E += m.loopAdditionalSlides),
      (u.loopedSlides = E);
    const g = u.grid && m.grid && m.grid.rows > 1;
    c.length < w + E || (u.params.effect === "cards" && c.length < w + E * 2)
      ? Ks(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : g &&
        m.grid.fill === "row" &&
        Ks(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const C = [],
      x = [],
      P = g ? Math.ceil(c.length / m.grid.rows) : c.length,
      M = o && P - v < w && !h;
    let k = M ? v : u.activeIndex;
    typeof s > "u"
      ? (s = u.getSlideIndex(
          c.find((S) => S.classList.contains(m.slideActiveClass))
        ))
      : (k = s);
    const L = i === "next" || !i,
      R = i === "prev" || !i;
    let A = 0,
      z = 0;
    const _ = (g ? c[s].column : s) + (h && typeof n > "u" ? -w / 2 + 0.5 : 0);
    if (_ < E) {
      A = Math.max(E - _, b);
      for (let S = 0; S < E - _; S += 1) {
        const O = S - Math.floor(S / P) * P;
        if (g) {
          const D = P - O - 1;
          for (let I = c.length - 1; I >= 0; I -= 1)
            c[I].column === D && C.push(I);
        } else C.push(P - O - 1);
      }
    } else if (_ + w > P - E) {
      (z = Math.max(_ - (P - E * 2), b)), M && (z = Math.max(z, w - P + v + 1));
      for (let S = 0; S < z; S += 1) {
        const O = S - Math.floor(S / P) * P;
        g
          ? c.forEach((D, I) => {
              D.column === O && x.push(I);
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
        c.length < w + E * 2 &&
        (x.includes(s) && x.splice(x.indexOf(s), 1),
        C.includes(s) && C.splice(C.indexOf(s), 1)),
      R &&
        C.forEach((S) => {
          (c[S].swiperLoopMoveDOM = !0),
            f.prepend(c[S]),
            (c[S].swiperLoopMoveDOM = !1);
        }),
      L &&
        x.forEach((S) => {
          (c[S].swiperLoopMoveDOM = !0),
            f.append(c[S]),
            (c[S].swiperLoopMoveDOM = !1);
        }),
      u.recalcSlides(),
      m.slidesPerView === "auto"
        ? u.updateSlides()
        : g &&
          ((C.length > 0 && R) || (x.length > 0 && L)) &&
          u.slides.forEach((S, O) => {
            u.grid.updateSlide(O, S, u.slides);
          }),
      m.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (C.length > 0 && R) {
        if (typeof e > "u") {
          const S = u.slidesGrid[k],
            D = u.slidesGrid[k + A] - S;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k + Math.ceil(A), 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else if (n) {
          const S = g ? C.length / m.grid.rows : C.length;
          u.slideTo(u.activeIndex + S, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (x.length > 0 && L)
        if (typeof e > "u") {
          const S = u.slidesGrid[k],
            D = u.slidesGrid[k - z] - S;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k - z, 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else {
          const S = g ? x.length / m.grid.rows : x.length;
          u.slideTo(u.activeIndex - S, 0, !1, !0);
        }
    }
    if (
      ((u.allowSlidePrev = d),
      (u.allowSlideNext = p),
      u.controller && u.controller.control && !a)
    ) {
      const S = {
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
                ...S,
                slideTo: O.params.slidesPerView === m.slidesPerView ? t : !1,
              });
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix({
            ...S,
            slideTo:
              u.controller.control.params.slidesPerView === m.slidesPerView
                ? t
                : !1,
          });
    }
    u.emit("loopFix");
  }
  function Mm() {
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
  var Lm = { loopCreate: Pm, loopFix: Om, loopDestroy: Mm };
  function Dm(r) {
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
  function km() {
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
  var Im = { setGrabCursor: Dm, unsetGrabCursor: km };
  function Rm(r, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === ci() || i === ft()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const n = i.closest(r);
      return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Zc(r, e, t) {
    const i = ft(),
      { params: n } = r,
      s = n.edgeSwipeDetection,
      o = n.edgeSwipeThreshold;
    return s && (t <= o || t >= i.innerWidth - o)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function zm(r) {
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
      Zc(e, i, i.targetTouches[0].pageX);
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
      (s.touchEventsTarget === "wrapper" && !qh(l, e.wrapperEl)) ||
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
    if (s.noSwiping && (p ? Rm(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const f = o.currentX,
      m = o.currentY;
    if (!Zc(e, i, f)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = f),
      (o.startY = m),
      (n.touchStartTime = Ys()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (n.allowThresholdMove = !1);
    let h = !0;
    l.matches(n.focusableElements) &&
      ((h = !1), l.nodeName === "SELECT" && (n.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(n.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(n.focusableElements))) &&
        t.activeElement.blur();
    const v = h && e.allowTouchMove && s.touchStartPreventDefault;
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
  function Nm(r) {
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
          (i.touchStartTime = Ys()));
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
    let m = t.isHorizontal() ? p : f,
      h = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((m = Math.abs(m) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
      (s.diff = m),
      (m *= n.touchRatio),
      o && ((m = -m), (h = -h));
    const v = t.touchesDirection;
    (t.swipeDirection = m > 0 ? "prev" : "next"),
      (t.touchesDirection = h > 0 ? "prev" : "next");
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
    let E;
    if (
      (new Date().getTime(),
      n._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        v !== t.touchesDirection &&
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
    let g = !0,
      C = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (C = 0),
      m > 0
        ? (w &&
            b &&
            !E &&
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
                (-t.minTranslate() + i.startTranslate + m) ** C)))
        : m < 0 &&
          (w &&
            b &&
            !E &&
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
                (t.maxTranslate() - i.startTranslate - m) ** C))),
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
  function Fm(r) {
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
    const d = Ys(),
      p = d - t.touchStartTime;
    if (e.allowClick) {
      const C = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((C && C[0]) || i.target, C),
        e.emit("tap click", i),
        p < 300 &&
          d - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = Ys()),
      Xs(() => {
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
    let h = 0,
      v = e.slidesSizesGrid[0];
    for (
      let C = 0;
      C < u.length;
      C += C < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const x = C < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[C + x] < "u"
        ? (m || (f >= u[C] && f < u[C + x])) && ((h = C), (v = u[C + x] - u[C]))
        : (m || f >= u[C]) &&
          ((h = C), (v = u[u.length - 1] - u[u.length - 2]));
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
    const E = (f - u[h]) / v,
      g = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (E >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? w : h + g)
          : e.slideTo(h)),
        e.swipeDirection === "prev" &&
          (E > 1 - o.longSwipesRatio
            ? e.slideTo(h + g)
            : b !== null && E < 0 && Math.abs(E) > o.longSwipesRatio
            ? e.slideTo(b)
            : e.slideTo(h));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(h + g)
          : e.slideTo(h)
        : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : h + g),
          e.swipeDirection === "prev" && e.slideTo(b !== null ? b : h));
    }
  }
  function Qc() {
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
  function Bm(r) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && r.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (r.stopPropagation(), r.stopImmediatePropagation())));
  }
  function Vm() {
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
  function qm(r) {
    const e = this;
    Zs(e, r.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function $m() {
    const r = this;
    r.documentTouchHandlerProceeded ||
      ((r.documentTouchHandlerProceeded = !0),
      r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
  }
  const Jc = (r, e) => {
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
            Qc,
            !0
          )
        : r[u]("observerUpdate", Qc, !0),
      n[l]("load", r.onLoad, { capture: !0 }));
  };
  function Hm() {
    const r = this,
      { params: e } = r;
    (r.onTouchStart = zm.bind(r)),
      (r.onTouchMove = Nm.bind(r)),
      (r.onTouchEnd = Fm.bind(r)),
      (r.onDocumentTouchStart = $m.bind(r)),
      e.cssMode && (r.onScroll = Vm.bind(r)),
      (r.onClick = Bm.bind(r)),
      (r.onLoad = qm.bind(r)),
      Jc(r, "on");
  }
  function Wm() {
    Jc(this, "off");
  }
  var Gm = { attachEvents: Hm, detachEvents: Wm };
  const ed = (r, e) => r.grid && e.grid && e.grid.rows > 1;
  function Xm() {
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
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? r.el
          : o.querySelector(i.breakpointsBase),
      u = r.getBreakpoint(s, a, l);
    if (!u || r.currentBreakpoint === u) return;
    const d = (u in s ? s[u] : void 0) || r.originalParams,
      p = ed(r, i),
      f = ed(r, d),
      m = r.params.grabCursor,
      h = d.grabCursor,
      v = i.enabled;
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
      m && !h ? r.unsetGrabCursor() : !m && h && r.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof d[x] > "u") return;
        const P = i[x] && i[x].enabled,
          M = d[x] && d[x].enabled;
        P && !M && r[x].disable(), !P && M && r[x].enable();
      });
    const w = d.direction && d.direction !== i.direction,
      b = i.loop && (d.slidesPerView !== i.slidesPerView || w),
      E = i.loop;
    w && t && r.changeDirection(), Ut(r.params, d);
    const g = r.params.enabled,
      C = r.params.loop;
    Object.assign(r, {
      allowTouchMove: r.params.allowTouchMove,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
    }),
      v && !g ? r.disable() : !v && g && r.enable(),
      (r.currentBreakpoint = u),
      r.emit("_beforeBreakpoint", d),
      t &&
        (b
          ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
          : !E && C
          ? (r.loopCreate(e), r.updateSlides())
          : E && !C && r.loopDestroy()),
      r.emit("breakpoint", d);
  }
  function Ym(r, e, t) {
    if ((e === void 0 && (e = "window"), !r || (e === "container" && !t)))
      return;
    let i = !1;
    const n = ft(),
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
  var jm = { setBreakpoint: Xm, getBreakpoint: Ym };
  function Um(r, e) {
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
  function Km() {
    const r = this,
      { classNames: e, params: t, rtl: i, el: n, device: s } = r,
      o = Um(
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
  function Zm() {
    const r = this,
      { el: e, classNames: t } = r;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), r.emitContainerClasses());
  }
  var Qm = { addClasses: Km, removeClasses: Zm };
  function Jm() {
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
  var eg = { checkOverflow: Jm },
    td = {
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
  function tg(r, e) {
    return function (i) {
      i === void 0 && (i = {});
      const n = Object.keys(i)[0],
        s = i[n];
      if (typeof s != "object" || s === null) {
        Ut(e, i);
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
        Ut(e, i);
        return;
      }
      typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
        r[n] || (r[n] = { enabled: !1 }),
        Ut(e, i);
    };
  }
  const $a = {
      eventsEmitter: Qh,
      update: um,
      translate: mm,
      transition: ym,
      slide: Am,
      loop: Lm,
      grabCursor: Im,
      events: Gm,
      breakpoints: jm,
      checkOverflow: eg,
      classes: Qm,
    },
    Ha = {};
  class Kt {
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
        (t = Ut({}, t)),
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
            const p = Ut({}, t, { el: d });
            c.push(new Kt(p));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = Xc()),
        (a.device = Yc({ userAgent: t.userAgent })),
        (a.browser = jc()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: tg(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const u = Ut({}, td, l);
      return (
        (a.params = Ut({}, u, Ha, t)),
        (a.originalParams = Ut({}, a.params)),
        (a.passedParams = Ut({}, t)),
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
        n = Ai(t, `.${i.slideClass}, swiper-slide`),
        s = Wc(n[0]);
      return Wc(e) - s;
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
      e.slides = Ai(t, `.${i.slideClass}, swiper-slide`);
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
          o.complete && Zs(e, o);
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
          : Ai(i, n())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = Zn("div", t.params.wrapperClass)),
          i.append(o),
          Ai(i, `.${t.params.slideClass}`).forEach((a) => {
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
          rtl: i.dir.toLowerCase() === "rtl" || er(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || er(i, "direction") === "rtl"),
          wrongRTL: er(o, "display") === "-webkit-box",
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
            ? Zs(t, s)
            : s.addEventListener("load", (o) => {
                Zs(t, o.target);
              });
        }),
        qa(t),
        (t.initialized = !0),
        qa(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), zh(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Ut(Ha, e);
    }
    static get extendedDefaults() {
      return Ha;
    }
    static get defaults() {
      return td;
    }
    static installModule(e) {
      Kt.prototype.__modules__ || (Kt.prototype.__modules__ = []);
      const t = Kt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Kt.installModule(t)), Kt)
        : (Kt.installModule(e), Kt);
    }
  }
  Object.keys($a).forEach((r) => {
    Object.keys($a[r]).forEach((e) => {
      Kt.prototype[e] = $a[r][e];
    });
  }),
    Kt.use([Kh, Zh]);
  function ig(r, e, t, i) {
    return (
      r.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!t[n] && t.auto === !0) {
            let s = Ai(r.el, `.${i[n]}`)[0];
            s || ((s = Zn("div", i[n])), (s.className = i[n]), r.el.append(s)),
              (t[n] = s),
              (e[n] = s);
          }
        }),
      t
    );
  }
  function rg(r) {
    return (
      r === void 0 && (r = ""),
      `.${r
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ng(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = ci();
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
      const { scrollbar: A, rtlTranslate: z } = e,
        { dragEl: y, el: _ } = A,
        S = e.params.scrollbar,
        O = e.params.loop ? e.progressLoop : e.progress;
      let D = c,
        I = (d - c) * O;
      z
        ? ((I = -I), I > 0 ? ((D = c - I), (I = 0)) : -I + c > d && (D = d + I))
        : I < 0
        ? ((D = c + I), (I = 0))
        : I + c > d && (D = d - I),
        e.isHorizontal()
          ? ((y.style.transform = `translate3d(${I}px, 0, 0)`),
            (y.style.width = `${D}px`))
          : ((y.style.transform = `translate3d(0px, ${I}px, 0)`),
            (y.style.height = `${D}px`)),
        S.hide &&
          (clearTimeout(a),
          (_.style.opacity = 1),
          (a = setTimeout(() => {
            (_.style.opacity = 0), (_.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function m(A) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${A}ms`);
    }
    function h() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: A } = e,
        { dragEl: z, el: y } = A;
      (z.style.width = ""),
        (z.style.height = ""),
        (d = e.isHorizontal() ? y.offsetWidth : y.offsetHeight),
        (p =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = d * p)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (z.style.width = `${c}px`)
          : (z.style.height = `${c}px`),
        p >= 1 ? (y.style.display = "none") : (y.style.display = ""),
        e.params.scrollbar.hide && (y.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          A.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function v(A) {
      return e.isHorizontal() ? A.clientX : A.clientY;
    }
    function w(A) {
      const { scrollbar: z, rtlTranslate: y } = e,
        { el: _ } = z;
      let S;
      (S =
        (v(A) -
          $h(_)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (d - c)),
        (S = Math.max(Math.min(S, 1), 0)),
        y && (S = 1 - S);
      const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * S;
      e.updateProgress(O),
        e.setTranslate(O),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function b(A) {
      const z = e.params.scrollbar,
        { scrollbar: y, wrapperEl: _ } = e,
        { el: S, dragEl: O } = y;
      (o = !0),
        (u =
          A.target === O
            ? v(A) -
              A.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        A.preventDefault(),
        A.stopPropagation(),
        (_.style.transitionDuration = "100ms"),
        (O.style.transitionDuration = "100ms"),
        w(A),
        clearTimeout(l),
        (S.style.transitionDuration = "0ms"),
        z.hide && (S.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        n("scrollbarDragStart", A);
    }
    function E(A) {
      const { scrollbar: z, wrapperEl: y } = e,
        { el: _, dragEl: S } = z;
      o &&
        (A.preventDefault && A.cancelable
          ? A.preventDefault()
          : (A.returnValue = !1),
        w(A),
        (y.style.transitionDuration = "0ms"),
        (_.style.transitionDuration = "0ms"),
        (S.style.transitionDuration = "0ms"),
        n("scrollbarDragMove", A));
    }
    function g(A) {
      const z = e.params.scrollbar,
        { scrollbar: y, wrapperEl: _ } = e,
        { el: S } = y;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (_.style.transitionDuration = "")),
        z.hide &&
          (clearTimeout(l),
          (l = Xs(() => {
            (S.style.opacity = 0), (S.style.transitionDuration = "400ms");
          }, 1e3))),
        n("scrollbarDragEnd", A),
        z.snapOnRelease && e.slideToClosest());
    }
    function C(A) {
      const { scrollbar: z, params: y } = e,
        _ = z.el;
      if (!_) return;
      const S = _,
        O = y.passiveListeners ? { passive: !1, capture: !1 } : !1,
        D = y.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!S) return;
      const I = A === "on" ? "addEventListener" : "removeEventListener";
      S[I]("pointerdown", b, O),
        s[I]("pointermove", E, O),
        s[I]("pointerup", g, D);
    }
    function x() {
      !e.params.scrollbar.el || !e.scrollbar.el || C("on");
    }
    function P() {
      !e.params.scrollbar.el || !e.scrollbar.el || C("off");
    }
    function M() {
      const { scrollbar: A, el: z } = e;
      e.params.scrollbar = ig(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const y = e.params.scrollbar;
      if (!y.el) return;
      let _;
      if (
        (typeof y.el == "string" &&
          e.isElement &&
          (_ = e.el.querySelector(y.el)),
        !_ && typeof y.el == "string")
      ) {
        if (((_ = s.querySelectorAll(y.el)), !_.length)) return;
      } else _ || (_ = y.el);
      e.params.uniqueNavElements &&
        typeof y.el == "string" &&
        _.length > 1 &&
        z.querySelectorAll(y.el).length === 1 &&
        (_ = z.querySelector(y.el)),
        _.length > 0 && (_ = _[0]),
        _.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass);
      let S;
      _ &&
        ((S = _.querySelector(rg(e.params.scrollbar.dragClass))),
        S || ((S = Zn("div", e.params.scrollbar.dragClass)), _.append(S))),
        Object.assign(A, { el: _, dragEl: S }),
        y.draggable && x(),
        _ &&
          _.classList[e.enabled ? "remove" : "add"](
            ...Ji(e.params.scrollbar.lockClass)
          );
    }
    function k() {
      const A = e.params.scrollbar,
        z = e.scrollbar.el;
      z &&
        z.classList.remove(
          ...Ji(e.isHorizontal() ? A.horizontalClass : A.verticalClass)
        ),
        P();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const A = e.params.scrollbar;
      let { el: z } = e.scrollbar;
      (z = Xh(z)),
        z.forEach((y) => {
          y.classList.remove(A.horizontalClass, A.verticalClass),
            y.classList.add(
              e.isHorizontal() ? A.horizontalClass : A.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? R() : (M(), h(), f());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        h();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (A, z) => {
        m(z);
      }),
      i("enable disable", () => {
        const { el: A } = e.scrollbar;
        A &&
          A.classList[e.enabled ? "remove" : "add"](
            ...Ji(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        k();
      });
    const L = () => {
        e.el.classList.remove(...Ji(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Ji(e.params.scrollbar.scrollbarDisabledClass)
            ),
          M(),
          h(),
          f();
      },
      R = () => {
        e.el.classList.add(...Ji(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Ji(e.params.scrollbar.scrollbarDisabledClass)
            ),
          k();
      };
    Object.assign(e.scrollbar, {
      enable: L,
      disable: R,
      updateSize: h,
      setTranslate: f,
      init: M,
      destroy: k,
    });
  }
  function sg(r) {
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
      h,
      v,
      w,
      b;
    function E(D) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (D.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", E),
          !(b || (D.detail && D.detail.bySwiperTouchMove)) && L()));
    }
    const g = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (p = !0) : p && ((u = c), (p = !1));
        const D = e.autoplay.paused ? c : d + u - new Date().getTime();
        (e.autoplay.timeLeft = D),
          n("autoplayTimeLeft", D, D / l),
          (a = requestAnimationFrame(() => {
            g();
          }));
      },
      C = () => {
        let D;
        return (
          e.virtual && e.params.virtual.enabled
            ? (D = e.slides.find((T) =>
                T.classList.contains("swiper-slide-active")
              ))
            : (D = e.slides[e.activeIndex]),
          D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      x = (D) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(a), g();
        let I = typeof D > "u" ? e.params.autoplay.delay : D;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const T = C();
        !Number.isNaN(T) &&
          T > 0 &&
          typeof D > "u" &&
          ((I = T), (l = T), (u = T)),
          (c = I);
        const B = e.params.speed,
          q = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(B, !0, !0), n("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, B, !0, !0), n("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(B, !0, !0), n("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, B, !0, !0), n("autoplay")),
              e.params.cssMode &&
                ((d = new Date().getTime()),
                requestAnimationFrame(() => {
                  x();
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
          x(),
          n("autoplayStart");
      },
      M = () => {
        (e.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          n("autoplayStop");
      },
      k = (D, I) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(o), D || (w = !0);
        const T = () => {
          n("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", E)
              : L();
        };
        if (((e.autoplay.paused = !0), I)) {
          v && (c = e.params.autoplay.delay), (v = !1), T();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), T());
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
        const D = ci();
        D.visibilityState === "hidden" && ((w = !0), k(!0)),
          D.visibilityState === "visible" && L();
      },
      A = (D) => {
        D.pointerType === "mouse" &&
          ((w = !0), (b = !0), !(e.animating || e.autoplay.paused) && k(!0));
      },
      z = (D) => {
        D.pointerType === "mouse" && ((b = !1), e.autoplay.paused && L());
      },
      y = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", A),
          e.el.addEventListener("pointerleave", z));
      },
      _ = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", A),
          e.el.removeEventListener("pointerleave", z));
      },
      S = () => {
        ci().addEventListener("visibilitychange", R);
      },
      O = () => {
        ci().removeEventListener("visibilitychange", R);
      };
    i("init", () => {
      e.params.autoplay.enabled && (y(), S(), P());
    }),
      i("destroy", () => {
        _(), O(), e.autoplay.running && M();
      }),
      i("_freeModeStaticRelease", () => {
        (m || w) && L();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : k(!0, !0);
      }),
      i("beforeTransitionStart", (D, I, T) => {
        e.destroyed ||
          !e.autoplay.running ||
          (T || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : M());
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
            (h = setTimeout(() => {
              (w = !0), (m = !0), k(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !f)) {
          if (
            (clearTimeout(h),
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
        e.destroyed || !e.autoplay.running || (v = !0);
      }),
      Object.assign(e.autoplay, { start: P, stop: M, pause: k, resume: L });
  }
  Kt.use([ng, sg]);
  const og = () => {
      new Kt(".result_swiper", {
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
    ag = () => {
      og();
    };
  G.registerPlugin(Z);
  const lg = () => {
      const r = document.querySelector("[results-wrap]"),
        e = document.querySelectorAll("[result-card]"),
        t = window.innerWidth < 768,
        i = G.timeline({
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
    ug = () => {
      lg();
    };
  function cg(r) {
    return r &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
      ? r.default
      : r;
  }
  var id = { exports: {} };
  (function (r) {
    (function (e) {
      r.exports ? (r.exports = e()) : (window.intlTelInput = e());
    })(() => {
      var e = (() => {
        var t = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          n = Object.getOwnPropertyNames,
          s = Object.prototype.hasOwnProperty,
          o = (y, _) => {
            for (var S in _) t(y, S, { get: _[S], enumerable: !0 });
          },
          a = (y, _, S, O) => {
            if ((_ && typeof _ == "object") || typeof _ == "function")
              for (let D of n(_))
                !s.call(y, D) &&
                  D !== S &&
                  t(y, D, {
                    get: () => _[D],
                    enumerable: !(O = i(_, D)) || O.enumerable,
                  });
            return y;
          },
          l = (y) => a(t({}, "__esModule", { value: !0 }), y),
          u = {};
        o(u, { Iti: () => k, default: () => z });
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
        for (let y = 0; y < c.length; y++) {
          const _ = c[y];
          d[y] = {
            name: "",
            iso2: _[0],
            dialCode: _[1],
            priority: _[2] || 0,
            areaCodes: _[3] || null,
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
          h = { ...f, ...m },
          v = 0,
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
              typeof navigator < "u" && typeof window < "u"
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
          E = (y) => y.replace(/\D/g, ""),
          g = (y = "") =>
            y
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase(),
          C = (y) => {
            const _ = E(y);
            if (_.charAt(0) === "1") {
              const S = _.substr(1, 3);
              return b.indexOf(S) !== -1;
            }
            return !1;
          },
          x = (y, _, S, O) => {
            if (S === 0 && !O) return 0;
            let D = 0;
            for (let I = 0; I < _.length; I++) {
              if ((/[+0-9]/.test(_[I]) && D++, D === y && !O)) return I + 1;
              if (O && D === y + 1) return I;
            }
            return _.length;
          },
          P = (y, _, S) => {
            const O = document.createElement(y);
            return (
              _ && Object.entries(_).forEach(([D, I]) => O.setAttribute(D, I)),
              S && S.appendChild(O),
              O
            );
          },
          M = (y) => {
            const { instances: _ } = A;
            Object.values(_).forEach((S) => S[y]());
          },
          k = class {
            constructor(y, _ = {}) {
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
                (this.telInput = y),
                (this.highlightedItem = null),
                (this.options = Object.assign({}, w, _)),
                (this.hadInitialPlaceholder = !!y.getAttribute("placeholder"));
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
                (this.options.i18n = { ...h, ...this.options.i18n });
              const y = new Promise((S, O) => {
                  (this.resolveAutoCountryPromise = S),
                    (this.rejectAutoCountryPromise = O);
                }),
                _ = new Promise((S, O) => {
                  (this.resolveUtilsScriptPromise = S),
                    (this.rejectUtilsScriptPromise = O);
                });
              (this.promise = Promise.all([y, _])),
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
                    (y) => y.toLowerCase()
                  )),
                this._sortCountries();
            }
            _sortCountries() {
              this.countries.sort((y, _) => {
                const { countryOrder: S } = this.options;
                if (S) {
                  const O = S.indexOf(y.iso2),
                    D = S.indexOf(_.iso2),
                    I = O > -1,
                    T = D > -1;
                  if (I || T) return I && T ? O - D : I ? -1 : 1;
                }
                return y.name < _.name ? -1 : y.name > _.name ? 1 : 0;
              });
            }
            _addToDialCodeMap(y, _, S) {
              _.length > this.dialCodeMaxLen &&
                (this.dialCodeMaxLen = _.length),
                this.dialCodeToIso2Map.hasOwnProperty(_) ||
                  (this.dialCodeToIso2Map[_] = []);
              for (let D = 0; D < this.dialCodeToIso2Map[_].length; D++)
                if (this.dialCodeToIso2Map[_][D] === y) return;
              const O = S !== void 0 ? S : this.dialCodeToIso2Map[_].length;
              this.dialCodeToIso2Map[_][O] = y;
            }
            _processAllCountries() {
              const { onlyCountries: y, excludeCountries: _ } = this.options;
              if (y.length) {
                const S = y.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => S.indexOf(O.iso2) > -1);
              } else if (_.length) {
                const S = _.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => S.indexOf(O.iso2) === -1);
              } else this.countries = p;
            }
            _translateCountryNames() {
              for (let y = 0; y < this.countries.length; y++) {
                const _ = this.countries[y].iso2.toLowerCase();
                this.options.i18n.hasOwnProperty(_) &&
                  (this.countries[y].name = this.options.i18n[_]);
              }
            }
            _processDialCodes() {
              (this.dialCodes = {}),
                (this.dialCodeMaxLen = 0),
                (this.dialCodeToIso2Map = {});
              for (let y = 0; y < this.countries.length; y++) {
                const _ = this.countries[y];
                this.dialCodes[_.dialCode] || (this.dialCodes[_.dialCode] = !0),
                  this._addToDialCodeMap(_.iso2, _.dialCode, _.priority);
              }
              for (let y = 0; y < this.countries.length; y++) {
                const _ = this.countries[y];
                if (_.areaCodes) {
                  const S = this.dialCodeToIso2Map[_.dialCode][0];
                  for (let O = 0; O < _.areaCodes.length; O++) {
                    const D = _.areaCodes[O];
                    for (let I = 1; I < D.length; I++) {
                      const T = _.dialCode + D.substr(0, I);
                      this._addToDialCodeMap(S, T),
                        this._addToDialCodeMap(_.iso2, T);
                    }
                    this._addToDialCodeMap(_.iso2, _.dialCode + D);
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
                allowDropdown: y,
                separateDialCode: _,
                showFlags: S,
                containerClass: O,
                hiddenInput: D,
                dropdownContainer: I,
                fixDropdownWidth: T,
                useFullscreenPopup: B,
                i18n: q,
              } = this.options;
              let Q = "iti";
              y && (Q += " iti--allow-dropdown"),
                S && (Q += " iti--show-flags"),
                O && (Q += ` ${O}`),
                B || (Q += " iti--inline-dropdown");
              const X = P("div", { class: Q });
              if (
                (this.telInput.parentNode?.insertBefore(X, this.telInput),
                y || S)
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
                      ...(y && {
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
                  y &&
                    (this.dropdownArrow = P(
                      "div",
                      { class: "iti__arrow", "aria-hidden": "true" },
                      ie
                    )),
                  _ &&
                    (this.selectedDialCode = P(
                      "div",
                      { class: "iti__selected-dial-code" },
                      this.selectedCountry
                    )),
                  y)
                ) {
                  const ue = T ? "" : "iti--flexible-dropdown-width";
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
                    B
                      ? (de += " iti--fullscreen-popup")
                      : (de += " iti--inline-dropdown"),
                      (this.dropdown = P("div", { class: de })),
                      this.dropdown.appendChild(this.dropdownContent);
                  } else
                    this.countryContainer.appendChild(this.dropdownContent);
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
            _appendListItems(y, _) {
              for (let S = 0; S < y.length; S++) {
                const O = y[S],
                  D = P(
                    "li",
                    {
                      id: `iti-${this.id}__item-${O.iso2}`,
                      class: `iti__country ${_}`,
                      tabindex: "-1",
                      role: "option",
                      "data-dial-code": O.dialCode,
                      "data-country-code": O.iso2,
                      "aria-selected": "false",
                    },
                    this.countryList
                  );
                O.nodeById[this.id] = D;
                let I = "";
                this.options.showFlags &&
                  (I += `<div class='iti__flag-box'><div class='iti__flag iti__${O.iso2}'></div></div>`),
                  (I += `<span class='iti__country-name'>${O.name}</span>`),
                  (I += `<span class='iti__dial-code'>+${O.dialCode}</span>`),
                  D.insertAdjacentHTML("beforeend", I);
              }
            }
            _setInitialState(y = !1) {
              const _ = this.telInput.getAttribute("value"),
                S = this.telInput.value,
                D =
                  _ && _.charAt(0) === "+" && (!S || S.charAt(0) !== "+")
                    ? _
                    : S,
                I = this._getDialCode(D),
                T = C(D),
                { initialCountry: B } = this.options;
              if (I && !T) this._updateCountryFromNumber(D);
              else if (B !== "auto" || y) {
                const q = B ? B.toLowerCase() : "";
                q && this._getCountryData(q, !0)
                  ? this._setCountry(q)
                  : I && T
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
              this._handleLabelClick = (_) => {
                this.dropdownContent.classList.contains("iti__hide")
                  ? this.telInput.focus()
                  : _.preventDefault();
              };
              const y = this.telInput.closest("label");
              y && y.addEventListener("click", this._handleLabelClick),
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
                (this._handleCountryContainerKeydown = (_) => {
                  this.dropdownContent.classList.contains("iti__hide") &&
                    ["ArrowUp", "ArrowDown", " ", "Enter"].includes(_.key) &&
                    (_.preventDefault(),
                    _.stopPropagation(),
                    this._openDropdown()),
                    _.key === "Tab" && this._closeDropdown();
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
                      (y = "") => {
                        const _ = y.toLowerCase();
                        _ && this._getCountryData(_, !0)
                          ? ((A.autoCountry = _),
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
                strictMode: y,
                formatAsYouType: _,
                separateDialCode: S,
              } = this.options;
              let O = !1;
              (this._handleInputEvent = (D) => {
                this._updateCountryFromNumber(this.telInput.value) &&
                  this._triggerCountryChange();
                const I = D && D.data && /[^+0-9]/.test(D.data),
                  T =
                    D &&
                    D.inputType === "insertFromPaste" &&
                    this.telInput.value;
                if (
                  (I || (T && !y)
                    ? (O = !0)
                    : /[^+0-9]/.test(this.telInput.value) || (O = !1),
                  _ && !O)
                ) {
                  const B = this.telInput.selectionStart || 0,
                    Q = this.telInput.value
                      .substring(0, B)
                      .replace(/[^+0-9]/g, "").length,
                    X = D && D.inputType === "deleteContentForward",
                    ie = this._formatNumberAsYouType(),
                    ue = x(Q, ie, B, X);
                  (this.telInput.value = ie),
                    this.telInput.setSelectionRange(ue, ue);
                }
              }),
                this.telInput.addEventListener("input", this._handleInputEvent),
                (y || S) &&
                  ((this._handleKeydownEvent = (D) => {
                    if (
                      D.key &&
                      D.key.length === 1 &&
                      !D.altKey &&
                      !D.ctrlKey &&
                      !D.metaKey
                    ) {
                      if (S && D.key === "+") {
                        D.preventDefault(),
                          this._openDropdown(),
                          (this.searchInput.value = "+"),
                          this._filterCountries("", !0);
                        return;
                      }
                      if (y) {
                        const I =
                            this.telInput.selectionStart === 0 && D.key === "+",
                          T = /^[0-9]$/.test(D.key),
                          B = I || T,
                          q = this._getFullNumber(),
                          Q = A.utils.getCoreNumber(
                            q,
                            this.selectedCountryData.iso2
                          ),
                          X =
                            this.maxCoreNumberLength &&
                            Q.length >= this.maxCoreNumberLength;
                        (!B || X) && D.preventDefault();
                      }
                    }
                  }),
                  this.telInput.addEventListener(
                    "keydown",
                    this._handleKeydownEvent
                  ));
            }
            _cap(y) {
              const _ = parseInt(
                this.telInput.getAttribute("maxlength") || "",
                10
              );
              return _ && y.length > _ ? y.substr(0, _) : y;
            }
            _trigger(y) {
              const _ = new Event(y, { bubbles: !0, cancelable: !0 });
              this.telInput.dispatchEvent(_);
            }
            _openDropdown() {
              const { fixDropdownWidth: y } = this.options;
              y &&
                (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
                this.dropdownContent.classList.remove("iti__hide"),
                this.selectedCountry.setAttribute("aria-expanded", "true"),
                this._setDropdownPosition();
              const _ = this.countryList.firstElementChild;
              _ &&
                (this._highlightListItem(_, !1),
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
                const y = this.telInput.getBoundingClientRect(),
                  _ = this.telInput.offsetHeight;
                this.options.dropdownContainer &&
                  ((this.dropdown.style.top = `${y.top + _}px`),
                  (this.dropdown.style.left = `${y.left}px`),
                  (this._handleWindowScroll = () => this._closeDropdown()),
                  window.addEventListener("scroll", this._handleWindowScroll));
              }
            }
            _bindDropdownListeners() {
              (this._handleMouseoverCountryList = (O) => {
                const D = O.target?.closest(".iti__country");
                D && this._highlightListItem(D, !1);
              }),
                this.countryList.addEventListener(
                  "mouseover",
                  this._handleMouseoverCountryList
                ),
                (this._handleClickCountryList = (O) => {
                  const D = O.target?.closest(".iti__country");
                  D && this._selectListItem(D);
                }),
                this.countryList.addEventListener(
                  "click",
                  this._handleClickCountryList
                );
              let y = !0;
              (this._handleClickOffToClose = () => {
                y || this._closeDropdown(), (y = !1);
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
              const _ = () => {
                const O = this.searchInput.value.trim();
                O ? this._filterCountries(O) : this._filterCountries("", !0);
              };
              let S = null;
              (this._handleSearchChange = () => {
                S && clearTimeout(S),
                  (S = setTimeout(() => {
                    _(), (S = null);
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
            _filterCountries(y, _ = !1) {
              let S = !0;
              this.countryList.innerHTML = "";
              const O = g(y);
              for (let D = 0; D < this.countries.length; D++) {
                const I = this.countries[D],
                  T = g(I.name),
                  B = `+${I.dialCode}`;
                if (_ || T.includes(O) || B.includes(O) || I.iso2.includes(O)) {
                  const q = I.nodeById[this.id];
                  q && this.countryList.appendChild(q),
                    S && (this._highlightListItem(q, !1), (S = !1));
                }
              }
              (this.countryList.scrollTop = 0), this._updateSearchResultsText();
            }
            _updateSearchResultsText() {
              const { i18n: y } = this.options,
                _ = this.countryList.childElementCount;
              let S;
              _ === 0
                ? (S = y.zeroSearchResults)
                : _ === 1
                ? (S = y.oneSearchResult)
                : (S = y.multipleSearchResults.replace(
                    "${count}",
                    _.toString()
                  )),
                (this.searchResultsA11yText.textContent = S);
            }
            _handleUpDownKey(y) {
              let _ =
                y === "ArrowUp"
                  ? this.highlightedItem?.previousElementSibling
                  : this.highlightedItem?.nextElementSibling;
              !_ &&
                this.countryList.childElementCount > 1 &&
                (_ =
                  y === "ArrowUp"
                    ? this.countryList.lastElementChild
                    : this.countryList.firstElementChild),
                _ && (this._scrollTo(_), this._highlightListItem(_, !1));
            }
            _handleEnterKey() {
              this.highlightedItem &&
                this._selectListItem(this.highlightedItem);
            }
            _updateValFromNumber(y) {
              let _ = y;
              if (
                this.options.formatOnDisplay &&
                A.utils &&
                this.selectedCountryData
              ) {
                const S =
                    this.options.nationalMode ||
                    (_.charAt(0) !== "+" && !this.options.separateDialCode),
                  { NATIONAL: O, INTERNATIONAL: D } = A.utils.numberFormat,
                  I = S ? O : D;
                _ = A.utils.formatNumber(_, this.selectedCountryData.iso2, I);
              }
              (_ = this._beforeSetNumber(_)), (this.telInput.value = _);
            }
            _updateCountryFromNumber(y) {
              const _ = y.indexOf("+");
              let S = _ ? y.substring(_) : y;
              const O = this.selectedCountryData.dialCode;
              S &&
                O === "1" &&
                S.charAt(0) !== "+" &&
                (S.charAt(0) !== "1" && (S = `1${S}`), (S = `+${S}`)),
                this.options.separateDialCode &&
                  O &&
                  S.charAt(0) !== "+" &&
                  (S = `+${O}${S}`);
              const I = this._getDialCode(S, !0),
                T = E(S);
              let B = null;
              if (I) {
                const q = this.dialCodeToIso2Map[E(I)],
                  Q =
                    q.indexOf(this.selectedCountryData.iso2) !== -1 &&
                    T.length <= I.length - 1;
                if (!(O === "1" && C(T)) && !Q) {
                  for (let ie = 0; ie < q.length; ie++)
                    if (q[ie]) {
                      B = q[ie];
                      break;
                    }
                }
              } else
                S.charAt(0) === "+" && T.length
                  ? (B = "")
                  : (!S || S === "+") &&
                    !this.selectedCountryData.iso2 &&
                    (B = this.defaultCountry);
              return B !== null ? this._setCountry(B) : !1;
            }
            _highlightListItem(y, _) {
              const S = this.highlightedItem;
              S &&
                (S.classList.remove("iti__highlight"),
                S.setAttribute("aria-selected", "false")),
                (this.highlightedItem = y),
                this.highlightedItem.classList.add("iti__highlight"),
                this.highlightedItem.setAttribute("aria-selected", "true"),
                this.selectedCountry.setAttribute(
                  "aria-activedescendant",
                  y.getAttribute("id") || ""
                ),
                this.searchInput.setAttribute(
                  "aria-activedescendant",
                  y.getAttribute("id") || ""
                ),
                _ && this.highlightedItem.focus();
            }
            _getCountryData(y, _) {
              for (let S = 0; S < this.countries.length; S++)
                if (this.countries[S].iso2 === y) return this.countries[S];
              if (_) return null;
              throw new Error(`No country data for '${y}'`);
            }
            _setCountry(y) {
              const {
                  separateDialCode: _,
                  showFlags: S,
                  i18n: O,
                } = this.options,
                D = this.selectedCountryData.iso2
                  ? this.selectedCountryData
                  : {};
              if (
                ((this.selectedCountryData = y
                  ? this._getCountryData(y, !1) || {}
                  : {}),
                this.selectedCountryData.iso2 &&
                  (this.defaultCountry = this.selectedCountryData.iso2),
                this.selectedCountryInner)
              ) {
                let I = "",
                  T = "";
                y && S
                  ? ((I = `iti__flag iti__${y}`),
                    (T = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                  : ((I = "iti__flag iti__globe"), (T = O.noCountrySelected)),
                  (this.selectedCountryInner.className = I),
                  (this.selectedCountryA11yText.textContent = T);
              }
              if ((this._setSelectedCountryTitleAttribute(y, _), _)) {
                const I = this.selectedCountryData.dialCode
                  ? `+${this.selectedCountryData.dialCode}`
                  : "";
                this.selectedDialCode.innerHTML = I;
                const B =
                  (this.selectedCountry.offsetWidth ||
                    this._getHiddenSelectedCountryWidth()) + 8;
                this.isRTL
                  ? (this.telInput.style.paddingRight = `${B}px`)
                  : (this.telInput.style.paddingLeft = `${B}px`);
              }
              return (
                this._updatePlaceholder(), this._updateMaxLength(), D.iso2 !== y
              );
            }
            _updateMaxLength() {
              if (this.options.strictMode && A.utils)
                if (this.selectedCountryData.iso2) {
                  const y =
                    A.utils.numberType[this.options.placeholderNumberType];
                  let _ = A.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      !1,
                      y,
                      !0
                    ),
                    S = _;
                  for (
                    ;
                    A.utils.isPossibleNumber(_, this.selectedCountryData.iso2);

                  )
                    (S = _), (_ += "0");
                  const O = A.utils.getCoreNumber(
                    S,
                    this.selectedCountryData.iso2
                  );
                  this.maxCoreNumberLength = O.length;
                } else this.maxCoreNumberLength = null;
            }
            _setSelectedCountryTitleAttribute(y = null, _) {
              if (!this.selectedCountry) return;
              let S;
              y && !_
                ? (S = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
                : y
                ? (S = this.selectedCountryData.name)
                : (S = "Unknown"),
                this.selectedCountry.setAttribute("title", S);
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                const y = this.telInput.parentNode.cloneNode(!1);
                (y.style.visibility = "hidden"), document.body.appendChild(y);
                const _ = this.countryContainer.cloneNode();
                y.appendChild(_);
                const S = this.selectedCountry.cloneNode(!0);
                _.appendChild(S);
                const O = S.offsetWidth;
                return document.body.removeChild(y), O;
              }
              return 0;
            }
            _updatePlaceholder() {
              const {
                  autoPlaceholder: y,
                  placeholderNumberType: _,
                  nationalMode: S,
                  customPlaceholder: O,
                } = this.options,
                D =
                  y === "aggressive" ||
                  (!this.hadInitialPlaceholder && y === "polite");
              if (A.utils && D) {
                const I = A.utils.numberType[_];
                let T = this.selectedCountryData.iso2
                  ? A.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      S,
                      I
                    )
                  : "";
                (T = this._beforeSetNumber(T)),
                  typeof O == "function" &&
                    (T = O(T, this.selectedCountryData)),
                  this.telInput.setAttribute("placeholder", T);
              }
            }
            _selectListItem(y) {
              const _ = this._setCountry(y.getAttribute("data-country-code"));
              this._closeDropdown(),
                this._updateDialCode(y.getAttribute("data-dial-code")),
                this.telInput.focus(),
                _ && this._triggerCountryChange();
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
            _scrollTo(y) {
              const _ = this.countryList,
                S = document.documentElement.scrollTop,
                O = _.offsetHeight,
                D = _.getBoundingClientRect().top + S,
                I = D + O,
                T = y.offsetHeight,
                B = y.getBoundingClientRect().top + S,
                q = B + T,
                Q = B - D + _.scrollTop;
              if (B < D) _.scrollTop = Q;
              else if (q > I) {
                const X = O - T;
                _.scrollTop = Q - X;
              }
            }
            _updateDialCode(y) {
              const _ = this.telInput.value,
                S = `+${y}`;
              let O;
              if (_.charAt(0) === "+") {
                const D = this._getDialCode(_);
                D ? (O = _.replace(D, S)) : (O = S), (this.telInput.value = O);
              }
            }
            _getDialCode(y, _) {
              let S = "";
              if (y.charAt(0) === "+") {
                let O = "";
                for (let D = 0; D < y.length; D++) {
                  const I = y.charAt(D);
                  if (!isNaN(parseInt(I, 10))) {
                    if (((O += I), _))
                      this.dialCodeToIso2Map[O] && (S = y.substr(0, D + 1));
                    else if (this.dialCodes[O]) {
                      S = y.substr(0, D + 1);
                      break;
                    }
                    if (O.length === this.dialCodeMaxLen) break;
                  }
                }
              }
              return S;
            }
            _getFullNumber() {
              const y = this.telInput.value.trim(),
                { dialCode: _ } = this.selectedCountryData;
              let S;
              const O = E(y);
              return (
                this.options.separateDialCode && y.charAt(0) !== "+" && _ && O
                  ? (S = `+${_}`)
                  : (S = ""),
                S + y
              );
            }
            _beforeSetNumber(y) {
              let _ = y;
              if (this.options.separateDialCode) {
                let S = this._getDialCode(_);
                if (S) {
                  S = `+${this.selectedCountryData.dialCode}`;
                  const O =
                    _[S.length] === " " || _[S.length] === "-"
                      ? S.length + 1
                      : S.length;
                  _ = _.substr(O);
                }
              }
              return this._cap(_);
            }
            _triggerCountryChange() {
              this._trigger("countrychange");
            }
            _formatNumberAsYouType() {
              const y = this._getFullNumber(),
                _ = A.utils
                  ? A.utils.formatNumberAsYouType(
                      y,
                      this.selectedCountryData.iso2
                    )
                  : y,
                { dialCode: S } = this.selectedCountryData;
              return this.options.separateDialCode &&
                this.telInput.value.charAt(0) !== "+" &&
                _.includes(`+${S}`)
                ? (_.split(`+${S}`)[1] || "").trim()
                : _;
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
                const S = this.telInput.closest("label");
                S && S.removeEventListener("click", this._handleLabelClick);
              }
              const { form: y } = this.telInput;
              this._handleHiddenInputSubmit &&
                y &&
                y.removeEventListener("submit", this._handleHiddenInputSubmit),
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
              const _ = this.telInput.parentNode;
              _?.parentNode?.insertBefore(this.telInput, _),
                _?.parentNode?.removeChild(_),
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
            getNumber(y) {
              if (A.utils) {
                const { iso2: _ } = this.selectedCountryData;
                return A.utils.formatNumber(this._getFullNumber(), _, y);
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
                const { iso2: y } = this.selectedCountryData;
                return A.utils.getValidationError(this._getFullNumber(), y);
              }
              return -99;
            }
            isValidNumber(y = !0) {
              const _ = this._getFullNumber();
              return /\p{L}/u.test(_)
                ? !1
                : A.utils
                ? A.utils.isPossibleNumber(_, this.selectedCountryData.iso2, y)
                : null;
            }
            isValidNumberPrecise() {
              const y = this._getFullNumber();
              return /\p{L}/u.test(y)
                ? !1
                : A.utils
                ? A.utils.isValidNumber(y, this.selectedCountryData.iso2)
                : null;
            }
            setCountry(y) {
              const _ = y.toLowerCase();
              this.selectedCountryData.iso2 !== _ &&
                (this._setCountry(_),
                this._updateDialCode(this.selectedCountryData.dialCode),
                this._triggerCountryChange());
            }
            setNumber(y) {
              const _ = this._updateCountryFromNumber(y);
              this._updateValFromNumber(y), _ && this._triggerCountryChange();
            }
            setPlaceholderNumberType(y) {
              (this.options.placeholderNumberType = y),
                this._updatePlaceholder();
            }
          },
          L = (y, _, S) => {
            const O = document.createElement("script");
            (O.onload = () => {
              window.intlTelInputUtils &&
                ((A.utils = window.intlTelInputUtils),
                delete window.intlTelInputUtils,
                window.intlTelInputUtilsBackup &&
                  ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                  delete window.intlTelInputUtilsBackup)),
                M("handleUtils"),
                _ && _();
            }),
              (O.onerror = () => {
                M("rejectUtilsScriptPromise"), S && S();
              }),
              (O.className = "iti-load-utils"),
              (O.async = !0),
              (O.src = y),
              document.body.appendChild(O);
          },
          R = (y) =>
            !A.utils && !A.startedLoadingUtilsScript
              ? ((A.startedLoadingUtilsScript = !0),
                new Promise((_, S) => L(y, _, S)))
              : null,
          A = Object.assign(
            (y, _) => {
              const S = new k(y, _);
              return (
                S._init(),
                y.setAttribute("data-intl-tel-input-id", S.id.toString()),
                (A.instances[S.id] = S),
                S
              );
            },
            {
              defaults: w,
              documentReady: () => document.readyState === "complete",
              getCountryData: () => p,
              getInstance: (y) => {
                const _ = y.getAttribute("data-intl-tel-input-id");
                return _ ? A.instances[_] : null;
              },
              instances: {},
              loadUtils: R,
              version: "22.0.0",
            }
          ),
          z = A;
        return l(u);
      })();
      return e.default;
    });
  })(id);
  var dg = id.exports;
  const fg = cg(dg),
    pg = () => {
      function r(i) {
        const n = document.querySelector(`[calc-phone="${i}"]`),
          s = document.querySelector(`[dial-code="${i}"]`),
          o = document.querySelector(`[hidden-country-name="${i}"]`),
          a = document.querySelector(`[hidden-full-phone="${i}"]`);
        if (!n || !s || !o || !a) return;
        const l = fg(n, {
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
    rd = () => {
      pg();
    };
  var hg = "1.3.4";
  function nd(r, e, t) {
    return Math.max(r, Math.min(e, t));
  }
  function mg(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function gg(r, e, t, i) {
    return mg(r, e, 1 - Math.exp(-t * i));
  }
  function vg(r, e) {
    return ((r % e) + e) % e;
  }
  var _g = class {
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
        const t = nd(0, this.currentTime / this.duration, 1);
        e = t >= 1;
        const i = e ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = gg(this.value, this.to, this.lerp * 60, r)),
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
  function yg(r, e) {
    let t;
    return function (...i) {
      let n = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), r.apply(n, i);
        }, e));
    };
  }
  var wg = class {
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
            ((this.debouncedResize = yg(this.resize, i)),
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
    sd = class {
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
    od = 100 / 6,
    tr = { passive: !1 },
    bg = class {
      constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        V(this, "touchStart", { x: 0, y: 0 });
        V(this, "lastDelta", { x: 0, y: 0 });
        V(this, "window", { width: 0, height: 0 });
        V(this, "emitter", new sd());
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
          const n = i === 1 ? od : i === 2 ? this.window.width : 1,
            s = i === 1 ? od : i === 2 ? this.window.height : 1;
          (e *= n),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: r });
        });
        V(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = r),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, tr),
          this.element.addEventListener("touchstart", this.onTouchStart, tr),
          this.element.addEventListener("touchmove", this.onTouchMove, tr),
          this.element.addEventListener("touchend", this.onTouchEnd, tr);
      }
      on(r, e) {
        return this.emitter.on(r, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, tr),
          this.element.removeEventListener("touchstart", this.onTouchStart, tr),
          this.element.removeEventListener("touchmove", this.onTouchMove, tr),
          this.element.removeEventListener("touchend", this.onTouchEnd, tr);
      }
    },
    ad = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
    Sg = class {
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
        autoResize: h = !0,
        prevent: v,
        virtualScroll: w,
        overscroll: b = !0,
        autoRaf: E = !1,
        anchors: g = !1,
        autoToggle: C = !1,
        allowNestedScroll: x = !1,
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
        V(this, "animate", new _g());
        V(this, "emitter", new sd());
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
            h = n && i.type === "touchend" && Math.abs(p) > 5;
          h && (p = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + p, {
              programmatic: !1,
              ...(f
                ? { lerp: h ? this.options.syncTouchLerp : 1 }
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
        (window.lenisVersion = hg),
          (!r || r === document.documentElement) && (r = window),
          typeof a == "number" && typeof l != "function"
            ? (l = ad)
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
            autoResize: h,
            prevent: v,
            virtualScroll: w,
            overscroll: b,
            autoRaf: E,
            anchors: g,
            autoToggle: C,
            allowNestedScroll: x,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new wg(r, e, { autoResize: h })),
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
          (this.virtualScroll = new bg(t, {
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
                : r instanceof HTMLElement && r?.nodeType && (p = r),
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
            } else r = nd(0, r, this.limit);
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
                ? (s = ad)
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
          const C = window.getComputedStyle(r);
          n.computedStyle = C;
          const x = C.overflowX,
            P = C.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(x)),
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
        let m;
        if (f === "horizontal") m = "x";
        else if (f === "vertical") m = "y";
        else {
          const C = e !== 0,
            x = t !== 0;
          C && s && a && (m = "x"), x && o && l && (m = "y");
        }
        if (!m) return !1;
        let h, v, w, b, E;
        if (m === "x")
          (h = r.scrollLeft), (v = u - d), (w = e), (b = s), (E = a);
        else if (m === "y")
          (h = r.scrollTop), (v = c - p), (w = t), (b = o), (E = l);
        else return !1;
        return (w > 0 ? h < v : h > 0) && b && E;
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
          ? vg(this.animatedScroll, this.limit)
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
  G.registerPlugin(Z);
  let Qs;
  const Tg = () => {
      (Qs = new Sg({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
        autoRaf: !0,
      })),
        Qs.on("scroll", Z.update),
        G.ticker.add((r) => {
          Qs.raf(r * 1e3);
        }),
        G.ticker.lagSmoothing(0);
    },
    xg = () => {
      Tg();
    },
    ld = () => Qs;
  let Er,
    on,
    an = !1;
  const Cg = () => {
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
            A = i.getAttribute("final-value"),
            z = R * A,
            y = `$${z.toLocaleString()}`;
          (u.textContent = y), (p.value = z);
        },
        h = () => {
          const R = t.getAttribute("final-value");
          (c.textContent = R), (f.value = R);
        },
        v = () =>
          e.getAttribute("final-value") &&
          t.getAttribute("final-value") &&
          i.getAttribute("final-value"),
        w = () => {
          if (v() && !an) {
            (an = !0),
              n.classList.add("is--active"),
              r.classList.remove("is--active"),
              m(),
              h();
            const R = ld();
            R && R.stop(), C();
          } else v() || r.classList.add("is--active");
        },
        b = () => {
          if (an) {
            (an = !1),
              n.classList.remove("is--active"),
              Er && Er.isActive() && Er.pause(),
              on && on.isActive() && on.pause();
            const R = ld();
            R && R.start(), x();
          }
        },
        E = () => {
          r.classList.contains("is--active") &&
            v() &&
            r.classList.remove("is--active");
        },
        g = () => {
          [e, t, i].forEach((A) => {
            new MutationObserver(E).observe(A, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
          }),
            new MutationObserver(w).observe(r, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
        },
        C = () => {
          (Er = G.timeline()),
            G.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
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
          (on = G.timeline()),
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
                  G.set(n, { display: "none", visibility: "hidden" });
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
        k = () => {
          document.removeEventListener("keydown", P);
        };
      return g(), M(), k;
    },
    Eg = () => Cg(),
    Ag = () => {
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
    Pg = () => {
      Ag();
    };
  G.registerPlugin(Jr);
  const Og = () => {
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
        p = Array.from(d).map((I) =>
          I.querySelector('[lead-scroll="progress-move"]')
        ),
        f = document.querySelector('[lead-scroll="arrow-left"]'),
        m = document.querySelector('[lead-scroll="arrow-right"]');
      let h = 0,
        v = !1,
        w = null,
        b = !1,
        E = null;
      const g = t.length,
        C = 6e3;
      if (!r || !e || t.length === 0) return;
      G.set(i, { autoAlpha: 0 }),
        G.set(n, { autoAlpha: 0 }),
        G.set(i, { scale: 0.8 }),
        G.set(n, { scale: 0.8 });
      const x = (I) => {
          const T = i[I],
            B = n[I];
          T &&
            G.fromTo(
              T,
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
            B &&
              B.length > 0 &&
              G.fromTo(
                B,
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
          const T = i[I],
            B = n[I];
          T &&
            G.to(T, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            B &&
              B.length > 0 &&
              G.to(B, {
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
        M = (I) => {
          const T = a[I];
          if (T) {
            const B = new Jr(T, {
              type: "lines",
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
            });
            B &&
              B.lines &&
              G.from(B.lines, {
                yPercent: 110,
                autoAlpha: 0,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.12,
              });
          }
        },
        k = (I) => {
          const T = u[I];
          T &&
            T.length > 0 &&
            G.from(T, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        L = () => {
          w && (clearTimeout(w), (w = null)),
            E && (clearTimeout(E), (E = null));
        },
        R = (I) => {
          G.killTweensOf(p),
            p.forEach((T, B) => {
              B === I
                ? G.fromTo(
                    T,
                    { scaleX: 0 },
                    { scaleX: 1, duration: C / 1e3, ease: "none" }
                  )
                : B < I
                ? G.set(T, { scaleX: 1 })
                : G.set(T, { scaleX: 0 });
            });
        },
        A = (I, T = !0) => {
          const B = Math.min(Math.max(I, 0), g - 1);
          if (B !== h && !v) {
            v = !0;
            const q = h;
            L();
            const Q = () => {
              d.forEach((X) => {
                X.classList.remove(
                  "is--active",
                  "is--outgoing",
                  "is--incoming"
                );
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
              d[B] && d[B].classList.add("is--incoming"),
              t[B] && t[B].classList.add("is--incoming"),
              o[B] && o[B].classList.add("is--incoming"),
              l[B] && l[B].classList.add("is--incoming"),
              x(B),
              M(B),
              k(B),
              G.delayedCall(0.2, () => {
                Q(),
                  d[B] && d[B].classList.add("is--active"),
                  t[B] && t[B].classList.add("is--active"),
                  o[B] && o[B].classList.add("is--active"),
                  l[B] && l[B].classList.add("is--active"),
                  (h = B),
                  (v = !1),
                  R(B),
                  T && !b && _();
              });
          }
        },
        z = () => {
          const I = (h + 1) % g;
          A(I);
        },
        y = () => {
          const I = h === 0 ? g - 1 : h - 1;
          A(I);
        },
        _ = () => {
          L(),
            (w = setTimeout(() => {
              !b && !v && z();
            }, C));
        },
        S = () => {
          L();
        },
        O = () => {
          S(),
            (b = !0),
            E && clearTimeout(E),
            (E = setTimeout(() => {
              (b = !1), _();
            }, 1e4));
        };
      d[0] && d[0].classList.add("is--active"),
        t[0] && t[0].classList.add("is--active"),
        o[0] && o[0].classList.add("is--active"),
        l[0] && l[0].classList.add("is--active"),
        x(0),
        M(0),
        k(0),
        f &&
          f.addEventListener("click", () => {
            O(), y();
          }),
        m &&
          m.addEventListener("click", () => {
            O(), z();
          }),
        R(0),
        _();
      const D = () => {
        L(),
          G.delayedCall(0.1, () => {
            b || _();
          });
      };
      return (
        window.addEventListener("resize", D),
        () => {
          L(),
            window.removeEventListener("resize", D),
            G.killTweensOf([i, n, p]);
        }
      );
    },
    Mg = () => {
      Og();
    },
    ud = () => {
      ic(), Qf(), ep(), Mg(), ip(), kh(), Ih(), ag(), ug(), rd(), Eg(), Pg();
    },
    cd = (r) => document.querySelector(r),
    Lg = (r) => document.querySelectorAll(r),
    Dg = (r, e) => r.classList.add(e),
    kg = () => {
      Lg(".team-member").forEach((e) => {
        e.addEventListener("mouseenter", () => {
          e.querySelector(".member-bio")?.classList.add("is-visible");
        }),
          e.addEventListener("mouseleave", () => {
            e.querySelector(".member-bio")?.classList.remove("is-visible");
          });
      });
    },
    Ig = () => {
      const r = cd(".contact-form");
      r &&
        r.addEventListener("submit", (e) => {
          e.preventDefault();
        });
    };
  G.registerPlugin(Z);
  const Rg = () => {
      const r = document.querySelector(".product_hero_tab_component"),
        e = r.querySelector(".product_hero_tab_visual_wrap");
      G.to(e, {
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
    zg = () => {
      Rg();
    },
    Ng = {
      home: ud,
      about: kg,
      contact: Ig,
      crm: () => {
        ic(), zg(), rd();
      },
      "extra-page": ud,
    },
    Fg = () => {
      const r = document.body.dataset.route,
        e = Ng[r];
      e && e();
    },
    Bg = () => {
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
        const w = v.getBoundingClientRect();
        s.set(v, { width: w.width, height: w.height });
      }),
        (() => {
          const v = e[0];
          if (v) {
            const w = v.getAttribute("nav-menu-dropdown"),
              b = document.querySelector(`[nav-menu-item='${w}']`);
            if (b) {
              const E = v.getBoundingClientRect(),
                g = i.getBoundingClientRect(),
                C = s.get(b);
              if (C) {
                const x = g.left + g.width / 2,
                  M = E.left + E.width / 2 - x,
                  k = C.height + 20,
                  L = C.width + 20;
                n.style.setProperty("--siteMenuTranslateX", `${M}px`),
                  n.style.setProperty("--siteMenuHeight", `${k}px`),
                  n.style.setProperty("--siteMenuWidth", `${L}px`);
              }
            }
          }
        })();
      const a = 25;
      let l = null,
        u = null;
      const c = (v) => {
          const w = Array.from(t),
            b = w.indexOf(v);
          w.forEach((E, g) => {
            g < b
              ? E.setAttribute("pos", "left")
              : g === b
              ? E.setAttribute("pos", "active")
              : E.setAttribute("pos", "right"),
              E === v
                ? E.setAttribute("status", "active")
                : E.setAttribute("status", "inactive");
          });
        },
        d = (v, w) => {
          l && (clearTimeout(l), (l = null)), u !== v && ((u = v), m(v, w));
        },
        p = () => {
          l = setTimeout(() => {
            r.setAttribute("dropdown-vis", "non-visible"),
              n.setAttribute("vis", "non-visible"),
              (u = null),
              (l = null);
          }, 100);
        },
        f = (v, w) => {
          const b = w.bottom;
          return v >= b && v <= b + a;
        },
        m = (v, w) => {
          const b = i.getBoundingClientRect(),
            E = v.getBoundingClientRect(),
            g = s.get(w);
          if (!g) return;
          const C = b.left + b.width / 2,
            x = E.left + E.width / 2,
            P = g.height + 20,
            M = g.width + 20,
            k = x - C;
          n.style.setProperty("--siteMenuTranslateX", `${k}px`),
            n.style.setProperty("--siteMenuHeight", `${P}px`),
            n.style.setProperty("--siteMenuWidth", `${M}px`),
            n.setAttribute("vis", "visible"),
            r.setAttribute("dropdown-vis", "visible"),
            c(w);
        },
        h = (v) => {
          if (!u) return;
          const w = u.getBoundingClientRect(),
            b = n.getBoundingClientRect(),
            E = v.clientX,
            g = v.clientY,
            C = E >= w.left && E <= w.right && g >= w.top && g <= w.bottom,
            x = E >= b.left && E <= b.right && g >= b.top && g <= b.bottom,
            P =
              f(g, w) &&
              E >= Math.min(w.left, b.left) &&
              E <= Math.max(w.right, b.right);
          C || x || P ? l && (clearTimeout(l), (l = null)) : l || p();
        };
      document.addEventListener("mousemove", h),
        e.forEach((v) => {
          const w = v.getAttribute("nav-menu-dropdown"),
            b = document.querySelector(`[nav-menu-item='${w}']`);
          b &&
            v.addEventListener("mouseenter", () => {
              d(v, b);
            });
        }),
        n.addEventListener("mouseenter", () => {
          l && (clearTimeout(l), (l = null));
        }),
        n.addEventListener("mouseleave", () => {
          p();
        });
    },
    Vg = () => {
      Bg();
    },
    qg = () => {
      const r = document.querySelector(".page_nav_size"),
        e = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (r.classList.add("is--active"), e.classList.add("is--active"))
          : (r.classList.remove("is--active"),
            e.classList.remove("is--active"));
      });
    },
    $g = () => {
      qg();
    },
    Hg = () => {
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
                  G.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(m, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  p.forEach((h) => h.classList.remove("is--open")),
                  G.to(p, {
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
                G.to(n, { height: "auto", duration: 0.5, ease: "power3.out" }),
                G.to(s, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
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
    Wg = () => Hg(),
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
        p = (b, E) => {
          [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((C) => {
            C.classList.add(b), C.classList.remove(E);
          });
        },
        f = (b) => {
          r.forEach((E) => {
            E.setAttribute("aria-expanded", b ? "true" : "false");
          });
        },
        m = () => {
          p(u, c),
            f(!0),
            G.timeline()
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
        h = () => {
          p(c, u),
            f(!1),
            G.timeline()
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
            G.to(
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
          l ? (h(), (l = !1)) : (m(), (l = !0));
        };
      (() => {
        d(),
          r.forEach((b) => {
            b.addEventListener("click", v);
          });
      })();
    },
    Xg = () => {
      Gg();
    };
  G.registerPlugin(Z);
  const Yg = () => {
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
            m = r(!1, s.getAttribute("tr-marquee-scrollscrub")),
            h = -100,
            v = 1,
            w = !1;
          p && (h = 100);
          let b = G.timeline({
            repeat: -1,
            onReverseComplete: () => b.progress(1),
          });
          d
            ? ((c = a[0].offsetHeight / c),
              b.fromTo(
                a,
                { yPercent: 0 },
                { yPercent: h, ease: "none", duration: c }
              ))
            : ((c = a[0].offsetWidth / c),
              b.fromTo(
                a,
                { xPercent: 0 },
                { xPercent: h, ease: "none", duration: c }
              ));
          let E = { value: 1 };
          const g = Z.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (x) => {
              if (
                !w &&
                (f &&
                  v !== x.direction &&
                  ((v = x.direction), b.timeScale(x.direction)),
                m)
              ) {
                let P = x.getVelocity() * 0.006;
                (P = G.utils.clamp(-60, 60, P)),
                  G.timeline({ onUpdate: () => b.timeScale(E.value) }).fromTo(
                    E,
                    { value: P },
                    { value: v, duration: 0.5 }
                  );
              }
            },
          });
          function C(x) {
            w = x;
            let P = { value: 1 },
              M = G.timeline({ onUpdate: () => b.timeScale(P.value) });
            x
              ? (M.fromTo(P, { value: v }, { value: 0, duration: 0.5 }),
                u.forEach((k) => e(k, "is-paused")))
              : (M.fromTo(P, { value: 0 }, { value: v, duration: 0.5 }),
                u.forEach((k) => t(k, "is-paused")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            l.forEach((x) => {
              x.addEventListener("mouseenter", () => C(!0)),
                x.addEventListener("mouseleave", () => C(!1));
            }),
            u.forEach((x) => {
              x.addEventListener("click", function () {
                const P = i(this, "is-paused");
                C(!P);
              });
            }),
            (s._marqueeCleanup = () => {
              g.kill(),
                b.kill(),
                l.forEach((x) => {
                  x.removeEventListener("mouseenter", () => C(!0)),
                    x.removeEventListener("mouseleave", () => C(!1));
                }),
                u.forEach((x) => {
                  x.removeEventListener("click", function () {
                    const P = i(this, "is-paused");
                    C(!P);
                  });
                });
            });
        });
    },
    jg = () => {
      Yg();
    },
    Ug = () => {
      Vg(), $g(), Wg(), Xg(), jg();
    },
    Kg = () => {
      const r = cd(".example-component");
      r && (Dg(r, "is-initialized"), r.addEventListener("click", () => {}));
    },
    Zg = () => {
      Kg();
    };
  document.addEventListener("DOMContentLoaded", () => {
    Ug(), Zg(), Fg(), xg();
  });
})();
