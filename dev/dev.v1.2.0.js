var Qg = Object.defineProperty;
var Jg = (Fi, et, rr) =>
  et in Fi
    ? Qg(Fi, et, { enumerable: !0, configurable: !0, writable: !0, value: rr })
    : (Fi[et] = rr);
var B = (Fi, et, rr) => Jg(Fi, typeof et != "symbol" ? et + "" : et, rr);
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
    Or = { duration: 0.5, overwrite: !1, delay: 0 },
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
    Me = function (e) {
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
      return Me(e) || Ye(e);
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
    Te,
    _i,
    ao,
    lo,
    Bt = {},
    ts = {},
    Ka,
    Za = function (e) {
      return (ts = kr(e, Bt)) && Ot;
    },
    uo = function (e, t) {},
    ln = function (e, t) {
      return !t && void 0;
    },
    Qa = function (e, t) {
      return (e && (Bt[e] = t) && ts && (ts[e] = t)) || Bt;
    },
    un = function () {
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
      if ((vi(t) || Me(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (n = rs.length; n-- && !rs[n].targetTest(t); );
        i = rs[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new Ml(e[n], i)))) ||
          e.splice(n, 1);
      return e;
    },
    nr = function (e) {
      return e._gsap || mo(ii(e))[0]._gsap;
    },
    tl = function (e, t, i) {
      return (i = e[t]) && Me(i)
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
    cn = function (e) {
      var t = e.parent || Te,
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
    xd = function (e) {
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
    Td = function r(e) {
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
          (!t._dur || fn(0, t.totalDuration(), i) - t._tTime > me) &&
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
          (Li(i) ? i : i || e !== Te ? ti(e, i, t) : e._time) + t._delay
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
          ((l = fn(0, e._tDur, t)),
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
    Pd = { _start: 0, endTime: un, totalDuration: un },
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
    dn = function (e, t, i) {
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
    fn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    at = function (e, t) {
      return !Ye(e) || !(t = vd.exec(e)) ? "" : t[1];
    },
    Md = function (e, t, i) {
      return qi(i, function (n) {
        return fn(e, t, n);
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
    Od = function (e, t, i) {
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
        ? Od(e, i)
        : fl(e)
        ? yo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    wo = function (e) {
      return (
        (e = ii(e)[0] || ln("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ii(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? ln("Invalid scope") || lo.createElement("div")
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
      if (Me(e)) return e;
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
        function (p, f, g) {
          var m = (g || t).length,
            v = o[m],
            w,
            S,
            E,
            h,
            x,
            b,
            P,
            M,
            k;
          if (!v) {
            if (((k = t.grid === "auto" ? 0 : (t.grid || [1, ei])[1]), !k)) {
              for (
                P = -ei;
                P < (P = g[k++].getBoundingClientRect().left) && k < m;

              );
              k < m && k--;
            }
            for (
              v = o[m] = [],
                w = l ? Math.min(k, m) * c - 0.5 : n % k,
                S = k === ei ? 0 : l ? (m * d) / k - 0.5 : (n / k) | 0,
                P = 0,
                M = ei,
                b = 0;
              b < m;
              b++
            )
              (E = (b % k) - w),
                (h = S - ((b / k) | 0)),
                (v[b] = x =
                  u ? Math.abs(u === "y" ? h : E) : Ga(E * E + h * h)),
                x > P && (P = x),
                x < M && (M = x);
            n === "random" && pl(v),
              (v.max = P - M),
              (v.min = M),
              (v.v = m =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (k > m
                      ? m - 1
                      : u
                      ? u === "y"
                        ? m / k
                        : k
                      : Math.max(k, m / k)) ||
                  0) * (n === "edges" ? -1 : 1)),
              (v.b = m < 0 ? s - m : s),
              (v.u = at(t.amount || t.each) || 0),
              (i = i && m < 0 ? El(i) : i);
          }
          return (
            (m = (v[p] - v.min) / v.max || 0),
            ze(v.b + (i ? i(m) : m) * v.v) + v.u
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
            ? Me(e)
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
    pn = function (e) {
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
            (s = function (g) {
              g *= d;
              var m = Math.min(p, ~~g);
              return c[m](g - m);
            }),
            (i = t);
        } else n || (e = kr(ot(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Co.call(a, e, l, "get", t[l]);
          s = function (g) {
            return Oo(g, a) || (o ? e.p : e);
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
    hn = function (e) {
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
            i = Me(e),
            n =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: un,
              render: Oo,
              add: Co,
              kill: Qd,
              modifier: Zd,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Mo,
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
          Qa(t, n), e.register && e.register(Ot, n, Mt);
        } else wl.push(e);
    },
    ge = 255,
    mn = {
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
      var n = e ? (Li(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : mn.black,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        g;
      if (!n) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), mn[e]))
          n = mn[e];
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
          if (((n = g = e.match(so)), !t))
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
        } else n = e.match(so) || mn.transparent;
        n = n.map(Number);
      }
      return (
        t &&
          !g &&
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
    xl = function (e) {
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
    Tl = function (e, t, i) {
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
        i && ((c = xl(e)), (l = i.c), l.join(n) !== c.c.join(n)))
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
      for (e in mn) r += "|" + e + "\\b";
      return new RegExp(r + ")", "gi");
    })(),
    Nd = /hsl[a]?\(/,
    Cl = function (e) {
      var t = e.join(" "),
        i;
      if ((($i.lastIndex = 0), $i.test(t)))
        return (
          (i = Nd.test(t)),
          (e[1] = Tl(e[1], i)),
          (e[0] = Tl(e[0], i, xl(e[1]))),
          !0
        );
    },
    gn,
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
        g = function m(v) {
          var w = r() - n,
            S = v === !0,
            E,
            h,
            x,
            b;
          if (
            ((w > e || w < 0) && (i += w - t),
            (n += w),
            (x = n - i),
            (E = x - o),
            (E > 0 || S) &&
              ((b = ++d.frame),
              (p = x - d.time * 1e3),
              (d.time = x = x / 1e3),
              (o += E + (E >= s ? 4 : s - E)),
              (h = 1)),
            S || (l = u(m)),
            h)
          )
            for (f = 0; f < a.length; f++) a[f](x, p, b, v);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
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
                (Bt.gsap = Ot),
                (_i.gsapVersions || (_i.gsapVersions = [])).push(Ot.version),
                Za(ts || _i.GreenSockGlobals || (!_i.gsap && _i) || {}),
                wl.forEach(bl)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (v) {
                  return setTimeout(v, (o - d.time * 1e3 + 1) | 0);
                }),
              (gn = 1),
              g(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (gn = 0), (u = un);
          },
          lagSmoothing: function (v, w) {
            (e = v || 1 / 0), (t = Math.min(w || 33, e));
          },
          fps: function (v) {
            (s = 1e3 / (v || 240)), (o = d.time * 1e3 + s);
          },
          add: function (v, w, S) {
            var E = w
              ? function (h, x, b, P) {
                  v(h, x, b, P), d.remove(E);
                }
              : v;
            return d.remove(v), a[S ? "unshift" : "push"](E), Nr(), E;
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
      return !gn && Ht.wake();
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
      return (e && (Me(e) ? e : it[e] || $d(e))) || t;
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
    xo = function r(e, t, i) {
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
    To = function r(e, t) {
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
      return -(Ga(1 - r * r) - 1);
    }),
    ar("Sine", function (r) {
      return r === 1 ? 1 : -md(r * pd) + 1;
    }),
    ar("Back", To("in"), To("out"), To()),
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
              return (((n * fn(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Or.ease = it["quad.out"]),
    Pt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (r) {
        return (ho += r + "," + r + "Params,");
      }
    );
  var Ml = function (e, t) {
      (this.id = hd++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : tl),
        (this.set = t ? t.getSetter : Mo);
    },
    vn = (function () {
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
          gn || Ht.wake();
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
              fn(-Math.abs(this._delay), this.totalDuration(), s),
              n !== !1
            ),
            ls(this),
            xd(this)
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
            var o = Me(i) ? i : nl,
              a = function () {
                var u = n.then;
                (n.then = null),
                  Me(o) && (o = o(n)) && (o.then || o === n) && (n.then = u),
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
          hn(this);
        }),
        r
      );
    })();
  qt(vn.prototype, {
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
        Te && yi(i.parent || Te, et(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && ul(et(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (n, s, o) {
        return dn(0, arguments, this), this;
      }),
      (t.from = function (n, s, o) {
        return dn(1, arguments, this), this;
      }),
      (t.fromTo = function (n, s, o, a) {
        return dn(2, arguments, this), this;
      }),
      (t.set = function (n, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          cn(s).repeatDelay || (s.repeat = 0),
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
          (cn(o).immediateRender = At(o.immediateRender)),
          this.staggerTo(n, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (cn(a).immediateRender = At(a.immediateRender)),
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
          g,
          m,
          v,
          w,
          S,
          E,
          h,
          x,
          b,
          P;
        if (
          (this !== Te && c > l && n >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (n += this._time - a)),
            (p = c),
            (h = this._start),
            (E = this._ts),
            (w = !E),
            d && (u || (a = this._zTime), (n || !s) && (this._zTime = n)),
            this._repeat)
          ) {
            if (
              ((b = this._yoyo),
              (v = u + this._rDelay),
              this._repeat < -1 && n < 0)
            )
              return this.totalTime(v * 100 + n, s, o);
            if (
              ((p = ze(c % v)),
              c === l
                ? ((m = this._repeat), (p = u))
                : ((x = ze(c / v)),
                  (m = ~~x),
                  m && m === x && ((p = u), m--),
                  p > u && (p = u)),
              (x = Ir(this._tTime, v)),
              !a &&
                this._tTime &&
                x !== m &&
                this._tTime - x * v - this._dur <= 0 &&
                (x = m),
              b && m & 1 && ((p = u - p), (P = 1)),
              m !== x && !this._lock)
            ) {
              var M = b && x & 1,
                k = M === (b && m & 1);
              if (
                (m < x && (M = !M),
                (a = M ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (P ? 0 : ze(m * v)), s, !u)._lock = 0),
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
              ((S = Ad(this, ze(a), ze(p))), S && (c -= p - (p = S._start))),
            (this._tTime = c),
            (this._time = p),
            (this._act = !E),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = n),
              (a = 0)),
            !a && c && !s && !x && ($t(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (p >= a && n >= 0)
            for (f = this._first; f; ) {
              if (
                ((g = f._next), (f._act || p >= f._start) && f._ts && S !== f)
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
                  (S = 0), g && (c += this._zTime = -me);
                  break;
                }
              }
              f = g;
            }
          else {
            f = this._last;
            for (var L = n < 0 ? n : p; f; ) {
              if (
                ((g = f._prev), (f._act || L <= f._end) && f._ts && S !== f)
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
                  (S = 0), g && (c += this._zTime = L ? -me : me);
                  break;
                }
              }
              f = g;
            }
          }
          if (
            S &&
            !s &&
            (this.pause(),
            (S.render(p >= a ? 0 : -me)._zTime = p >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = h), ls(this), this.render(n, s, o);
          this._onUpdate && !s && $t(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (h === this._start || Math.abs(E) !== Math.abs(this._ts)) &&
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
        if ((Li(s) || (s = ti(this, s, n)), !(n instanceof vn))) {
          if (ot(n))
            return (
              n.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ye(n)) return this.addLabel(n, s);
          if (Me(n)) n = Ne.delayedCall(0, n);
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
          : Me(n)
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
        var a = Ne.delayedCall(0, s || un, o);
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
          g = Ne.to(
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
                    g._dur !== v && Rr(g, v, 0, 1).render(g._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(g, d || []);
                },
              },
              s
            )
          );
        return p ? g.render(0) : g;
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
          Rr(o, o === Te && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (n) {
        if ((Te._ts && (il(Te, as(n, Te)), (Ja = Ht.frame)), Ht.frame >= el)) {
          el += Ft.autoSleep || 120;
          var s = Te._first;
          if ((!s || !s._ts) && Ft.autoSleep && Ht._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ht.sleep();
          }
        }
      }),
      e
    );
  })(vn);
  qt(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Hd = function (e, t, i, n, s, o, a) {
      var l = new Mt(this._pt, e, t, 0, 1, Rl, null, s),
        u = 0,
        c = 0,
        d,
        p,
        f,
        g,
        m,
        v,
        w,
        S;
      for (
        l.b = i,
          l.e = n,
          i += "",
          n += "",
          (w = ~n.indexOf("random(")) && (n = pn(n)),
          o && ((S = [i, n]), o(S, e, t), (i = S[0]), (n = S[1])),
          p = i.match(oo) || [];
        (d = oo.exec(n));

      )
        (g = d[0]),
          (m = n.substring(u, d.index)),
          f ? (f = (f + 1) % 5) : m.substr(-5) === "rgba(" && (f = 1),
          g !== p[c++] &&
            ((v = parseFloat(p[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: m || c === 1 ? m : ",",
              s: v,
              c: g.charAt(1) === "=" ? Dr(v, g) - v : parseFloat(g) - v,
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
      Me(n) && (n = n(s || 0, e, o));
      var d = e[t],
        p =
          i !== "get"
            ? i
            : Me(d)
            ? u
              ? e[
                  t.indexOf("set") || !Me(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : d,
        f = Me(d) ? (u ? jd : kl) : Po,
        g;
      if (
        (Ye(n) &&
          (~n.indexOf("random(") && (n = pn(n)),
          n.charAt(1) === "=" &&
            ((g = Dr(p, n) + (at(p) || 0)), (g || g === 0) && (n = g))),
        !c || p !== n || Eo)
      )
        return !isNaN(p * n) && n !== ""
          ? ((g = new Mt(
              this._pt,
              e,
              t,
              +p || 0,
              n - (p || 0),
              typeof d == "boolean" ? Kd : Il,
              0,
              f
            )),
            u && (g.fp = u),
            a && g.modifier(a, this, e),
            (this._pt = g))
          : (!d && !(t in e) && uo(t, n),
            Hd.call(this, e, t, p, n, f, l || Ft.stringFilter, u));
    },
    Wd = function (e, t, i, n, s) {
      if (
        (Me(e) && (e = _n(e, s, t, i, n)),
        !vi(e) || (e.style && e.nodeType) || ot(e) || Xa(e))
      )
        return Ye(e) ? _n(e, s, t, i, n) : e;
      var o = {},
        a;
      for (a in e) o[a] = _n(e[a], s, t, i, n);
      return o;
    },
    Ol = function (e, t, i, n, s, o) {
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
        ((i._pt = l = new Mt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
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
        g = e._dur,
        m = e._startAt,
        v = e._targets,
        w = e.parent,
        S = w && w.data === "nested" ? w.vars.targets : v,
        E = e._overwrite === "auto" && !to,
        h = e.timeline,
        x,
        b,
        P,
        M,
        k,
        L,
        R,
        C,
        N,
        y,
        _,
        T,
        O;
      if (
        (h && (!p || !s) && (s = "none"),
        (e._ease = or(s, Or.ease)),
        (e._yEase = d ? El(or(d === !0 ? s : d, Or.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !h && !!n.runBackwards),
        !h || (p && !n.stagger))
      ) {
        if (
          ((C = v[0] ? nr(v[0]).harness : 0),
          (T = C && n[C.prop]),
          (x = ss(n, co)),
          m &&
            (m._zTime < 0 && m.progress(1),
            t < 0 && c && a && !f
              ? m.render(-1, !0)
              : m.revert(c && g ? is : _d),
            (m._lazy = 0)),
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
                    lazy: !m && At(l),
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
            a && g && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && g && !m) {
          if (
            (t && (a = !1),
            (P = qt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !m && At(l),
                immediateRender: a,
                stagger: 0,
                parent: w,
              },
              x
            )),
            T && (P[C.prop] = T),
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
          e._pt = e._ptCache = 0, l = (g && At(l)) || (l && !g), b = 0;
          b < v.length;
          b++
        ) {
          if (
            ((k = v[b]),
            (R = k._gsap || mo(v)[b]._gsap),
            (e._ptLookup[b] = y = {}),
            fo[R.id] && Bi.length && ns(),
            (_ = S === v ? b : S.indexOf(k)),
            C &&
              (N = new C()).init(k, T || x, e, _, S) !== !1 &&
              ((e._pt = M =
                new Mt(e._pt, k, N.name, 0, 1, N.render, N, 0, N.priority)),
              N._props.forEach(function (D) {
                y[D] = M;
              }),
              N.priority && (L = 1)),
            !C || T)
          )
            for (P in x)
              Vt[P] && (N = Ol(P, x, e, _, k, S))
                ? N.priority && (L = 1)
                : (y[P] = M =
                    Co.call(e, k, P, "get", x[P], _, S, 0, n.stringFilter));
          e._op && e._op[b] && e.kill(k, e._op[b]),
            E &&
              e._pt &&
              ((Hi = e),
              Te.killTweensOf(k, y, e.globalTime(t)),
              (O = !e.parent),
              (Hi = 0)),
            e._pt && l && (fo[R.id] = 1);
        }
        L && zl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !O),
        p && t <= 0 && h.render(ei, !0, !0);
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
              l ? ln(t + " not eligible for reset") : 1
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
    _n = function (e, t, i, n, s) {
      return Me(e)
        ? e.call(t, i, n, s)
        : Ye(e) && ~e.indexOf("random(")
        ? pn(e)
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
        (a = r.call(this, o ? n : cn(n)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        p = l.stagger,
        f = l.overwrite,
        g = l.keyframes,
        m = l.defaults,
        v = l.scrollTrigger,
        w = l.yoyoEase,
        S = n.parent || Te,
        E = (ot(i) || Xa(i) ? Li(i[0]) : "length" in n) ? [i] : ii(i),
        h,
        x,
        b,
        P,
        M,
        k,
        L,
        R;
      if (
        ((a._targets = E.length
          ? mo(E)
          : ln(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ft.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        g || p || es(u) || es(c))
      ) {
        if (
          ((n = a.vars),
          (h = a.timeline =
            new yt({
              data: "nested",
              defaults: m || {},
              targets: S && S.data === "nested" ? S.vars.targets : E,
            })),
          h.kill(),
          (h.parent = h._dp = et(a)),
          (h._start = 0),
          p || es(u) || es(c))
        ) {
          if (((P = E.length), (L = p && hl(p)), vi(p)))
            for (M in p) ~Ll.indexOf(M) && (R || (R = {}), (R[M] = p[M]));
          for (x = 0; x < P; x++)
            (b = ss(n, Dl)),
              (b.stagger = 0),
              w && (b.yoyoEase = w),
              R && kr(b, R),
              (k = E[x]),
              (b.duration = +_n(u, et(a), x, k, E)),
              (b.delay = (+_n(c, et(a), x, k, E) || 0) - a._delay),
              !p &&
                P === 1 &&
                b.delay &&
                ((a._delay = c = b.delay), (a._start += c), (b.delay = 0)),
              h.to(k, b, L ? L(x, k, E) : 0),
              (h._ease = it.none);
          h.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (g) {
          cn(qt(h.vars.defaults, { ease: "none" })),
            (h._ease = or(g.ease || n.ease || "none"));
          var C = 0,
            N,
            y,
            _;
          if (ot(g))
            g.forEach(function (T) {
              return h.to(E, T, ">");
            }),
              h.duration();
          else {
            b = {};
            for (M in g)
              M === "ease" || M === "easeEach" || Yd(M, g[M], b, g.easeEach);
            for (M in b)
              for (
                N = b[M].sort(function (T, O) {
                  return T.t - O.t;
                }),
                  C = 0,
                  x = 0;
                x < N.length;
                x++
              )
                (y = N[x]),
                  (_ = {
                    ease: y.e,
                    duration: ((y.t - (x ? N[x - 1].t : 0)) / 100) * u,
                  }),
                  (_[M] = y.v),
                  h.to(E, _, C),
                  (C += _.duration);
            h.duration() < u && h.to({}, { duration: u - h.duration() });
          }
        }
        u || a.duration((u = h.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !to && ((Hi = et(a)), Te.killTweensOf(E), (Hi = 0)),
        yi(S, et(a), s),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (d ||
          (!u &&
            !g &&
            a._start === ze(S._time) &&
            At(d) &&
            Td(et(a)) &&
            S.data !== "nested")) &&
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
          g,
          m,
          v,
          w,
          S,
          E,
          h;
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
            if (((m = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(m * 100 + n, s, o);
            if (
              ((p = ze(d % m)),
              d === l
                ? ((g = this._repeat), (p = u))
                : ((v = ze(d / m)),
                  (g = ~~v),
                  g && g === v ? ((p = u), g--) : p > u && (p = u)),
              (w = this._yoyo && g & 1),
              w && ((h = this._yEase), (p = u - p)),
              (v = Ir(this._tTime, m)),
              p === a && !o && this._initted && g === v)
            )
              return (this._tTime = d), this;
            g !== v &&
              (E && this._yEase && Al(E, w),
              this.vars.repeatRefresh &&
                !w &&
                !this._lock &&
                p !== m &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(ze(m * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (cl(this, c ? n : p, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && g !== v))
              return this;
            if (u !== this._dur) return this.render(n, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = S = (h || this._ease)(p / u)),
            this._from && (this.ratio = S = 1 - S),
            !a && d && !s && !v && ($t(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(S, f.d), (f = f._next);
          (E && E.render(n < 0 ? n : E._dur * E._ease(p / this._dur), s, o)) ||
            (this._startAt && (this._zTime = n)),
            this._onUpdate &&
              !s &&
              (c && vo(this, n, s, o), $t(this, "onUpdate")),
            this._repeat &&
              g !== v &&
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
        gn || Ht.wake(), this._ts || this.play();
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
              ? hn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!tt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(n, s, Hi && Hi.vars.overwrite !== !0)
              ._first || hn(this),
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
          g,
          m,
          v,
          w;
        if ((!s || s === "all") && Sd(a, l))
          return s === "all" && (this._pt = 0), hn(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Ye(s) &&
                ((m = {}),
                Pt(s, function (S) {
                  return (m[S] = 1);
                }),
                (s = m)),
              (s = Xd(a, s))),
            w = a.length;
          w--;

        )
          if (~l.indexOf(a[w])) {
            (p = u[w]),
              s === "all"
                ? ((d[w] = s), (g = p), (f = {}))
                : ((f = d[w] = d[w] || {}), (g = s));
            for (m in g)
              (v = p && p[m]),
                v &&
                  ((!("kill" in v.d) || v.d.kill(m) === !0) &&
                    os(this, v, "_pt"),
                  delete p[m]),
                f !== "all" && (f[m] = 1);
          }
        return this._initted && !this._pt && c && hn(this), this;
      }),
      (e.to = function (n, s) {
        return new e(n, s, arguments[2]);
      }),
      (e.from = function (n, s) {
        return dn(1, arguments);
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
        return dn(2, arguments);
      }),
      (e.set = function (n, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
      }),
      (e.killTweensOf = function (n, s, o) {
        return Te.killTweensOf(n, s, o);
      }),
      e
    );
  })(vn);
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
    Mo = function (e, t) {
      return Me(e[t]) ? kl : ro(e[t]) && e.setAttribute ? Ud : Po;
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
    Oo = function (e, t) {
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
    Mt = (function () {
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
    (Te = new yt({
      sortChildren: !1,
      defaults: Or,
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
          Me(i) && ((s = n), (n = i), (i = Me));
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
                Me(d) && o._r.push(d),
                (Se = u),
                (o.selector = c),
                (o.isReverted = !1),
                d
              );
            };
          return (
            (o.last = a),
            i === Me
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
        return Te.getTweensOf(e, t);
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
              return Ot.quickSetter(c, t, i);
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
                  zr._pt && Oo(1, zr);
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
          s = Ot.to(
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
        return Te.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = or(e.ease, Or.ease)), sl(Or, e || {});
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
            ln(t + " effect requires " + a + " plugin.")
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
        return Te.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new yt(e),
          n,
          s;
        for (
          i.smoothChildTiming = At(e.smoothChildTiming),
            Te.remove(i),
            i._dp = 0,
            i._time = i._tTime = Te._time,
            n = Te._first;
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
        return yi(Te, i, 0), i;
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
        clamp: Md,
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
      globalTimeline: Te,
      core: {
        PropTween: Mt,
        globals: Qa,
        Tween: Ne,
        Timeline: yt,
        Animation: vn,
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
    Ot =
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
  (Ne.version = yt.version = Ot.version = "3.13.0"), (Ka = 1), no() && Nr();
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
        e._gsap || Ot.core.getCache(e),
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
        (Ro = Ot.core.reverting),
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
      var a = new Mt(e._pt, t, i, 0, 1, o ? Hl : $l);
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
        g,
        m,
        v,
        w;
      if (n === o || !s || Ql[n] || Ql[o]) return s;
      if (
        (o !== "px" && !p && (s = r(e, t, i, "px")),
        (w = e.getCTM && Zl(e)),
        (f || o === "%") && (Di[t] || ~t.indexOf("adius")))
      )
        return (
          (g = w ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ke(f ? (s / g) * d : (s / 100) * g)
        );
      if (
        ((a[l ? "width" : "height"] = d + (p ? o : n)),
        (m =
          (n !== "rem" && ~t.indexOf("adius")) ||
          (n === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        w && (m = (e.ownerSVGElement || {}).parentNode),
        (!m || m === Wi || !m.appendChild) && (m = Wi.body),
        (v = m._gsap),
        v && f && v.width && l && v.time === Ht.time && !v.uncache)
      )
        return ke((s / v.width) * d);
      if (f && (t === "height" || t === "width")) {
        var S = e.style[t];
        (e.style[t] = d + n), (g = e[c]), S ? (e.style[t] = S) : dr(e, t);
      } else
        (f || o === "%") &&
          !wf[ri(m, "display")] &&
          (a.position = ri(e, "position")),
          m === e && (a.position = "static"),
          m.appendChild(ur),
          (g = ur[c]),
          m.removeChild(ur),
          (a.position = "absolute");
      return (
        l && f && ((v = nr(m)), (v.time = Ht.time), (v.width = m[c])),
        ke(p ? (g * s) / d : g && s ? (d / g) * s : 0)
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
          ? ((s = wn(e, n)),
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
      var a = new Mt(this._pt, e.style, t, 0, 1, Rl),
        l = 0,
        u = 0,
        c,
        d,
        p,
        f,
        g,
        m,
        v,
        w,
        S,
        E,
        h,
        x;
      if (
        ((a.b = i),
        (a.e = n),
        (i += ""),
        (n += ""),
        n.substring(0, 6) === "var(--" &&
          (n = ri(e, n.substring(4, n.indexOf(")")))),
        n === "auto" &&
          ((m = e.style[t]),
          (e.style[t] = n),
          (n = ri(e, t) || n),
          m ? (e.style[t] = m) : dr(e, t)),
        (c = [i, n]),
        Cl(c),
        (i = c[0]),
        (n = c[1]),
        (p = i.match(Lr) || []),
        (x = n.match(Lr) || []),
        x.length)
      ) {
        for (; (d = Lr.exec(n)); )
          (v = d[0]),
            (S = n.substring(l, d.index)),
            g
              ? (g = (g + 1) % 5)
              : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") &&
                (g = 1),
            v !== (m = p[u++] || "") &&
              ((f = parseFloat(m) || 0),
              (h = m.substr((f + "").length)),
              v.charAt(1) === "=" && (v = Dr(f, v) + h),
              (w = parseFloat(v)),
              (E = v.substr((w + "").length)),
              (l = Lr.lastIndex - E.length),
              E ||
                ((E = E || Ft.units[t] || h),
                l === n.length && ((n += E), (a.e += E))),
              h !== E && (f = Xi(e, t, m, E) || 0),
              (a._pt = {
                _next: a._pt,
                p: S || u === 1 ? S : ",",
                s: f,
                c: w - f,
                m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
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
    xf = function (e, t) {
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
            wn(i, 1),
            (o.uncache = 1),
            Wl(n)));
      }
    },
    fs = {
      clearProps: function (e, t, i, n, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Mt(e._pt, t, i, 0, 0, xf));
          return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    yn = [1, 0, 0, 1, 0, 0],
    eu = {},
    tu = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    iu = function (e) {
      var t = ri(e, Ce);
      return tu(t) ? yn : t.substr(7).match(Ya).map(ke);
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
          s.join(",") === "1,0,0,1,0,0" ? yn : s)
        : (s === yn &&
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
        g = l[1],
        m = l[2],
        v = l[3],
        w = l[4],
        S = l[5],
        E = t.split(" "),
        h = parseFloat(E[0]) || 0,
        x = parseFloat(E[1]) || 0,
        b,
        P,
        M,
        k;
      i
        ? l !== yn &&
          (P = f * v - g * m) &&
          ((M = h * (v / P) + x * (-m / P) + (m * S - v * w) / P),
          (k = h * (-g / P) + x * (f / P) - (f * S - g * w) / P),
          (h = M),
          (x = k))
        : ((b = Kl(e)),
          (h = b.x + (~E[0].indexOf("%") ? (h / 100) * b.width : h)),
          (x =
            b.y + (~(E[1] || E[0]).indexOf("%") ? (x / 100) * b.height : x))),
        n || (n !== !1 && a.smooth)
          ? ((w = h - u),
            (S = x - c),
            (a.xOffset = d + (w * f + S * m) - w),
            (a.yOffset = p + (w * g + S * v) - S))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = h),
        (a.yOrigin = x),
        (a.smooth = !!n),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[Lt] = "0px 0px"),
        o &&
          (Gi(o, a, "xOrigin", u, h),
          Gi(o, a, "yOrigin", c, x),
          Gi(o, a, "xOffset", d, a.xOffset),
          Gi(o, a, "yOffset", p, a.yOffset)),
        e.setAttribute("data-svg-origin", h + " " + x);
    },
    wn = function (e, t) {
      var i = e._gsap || new Ml(e);
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
        g,
        m,
        v,
        w,
        S,
        E,
        h,
        x,
        b,
        P,
        M,
        k,
        L,
        R,
        C,
        N,
        y,
        _,
        T,
        O,
        D,
        I,
        A,
        V,
        W,
        J,
        K,
        ie;
      return (
        (c = d = p = m = v = w = S = E = h = 0),
        (f = g = 1),
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
        (x = i.xOrigin || 0),
        (b = i.yOrigin || 0),
        P !== yn &&
          ((R = P[0]),
          (C = P[1]),
          (N = P[2]),
          (y = P[3]),
          (c = _ = P[4]),
          (d = T = P[5]),
          P.length === 6
            ? ((f = Math.sqrt(R * R + C * C)),
              (g = Math.sqrt(y * y + N * N)),
              (m = R || C ? Vr(C, R) * cr : 0),
              (S = N || y ? Vr(N, y) * cr + m : 0),
              S && (g *= Math.abs(Math.cos(S * Br))),
              i.svg && ((c -= x - (x * R + b * N)), (d -= b - (x * C + b * y))))
            : ((ie = P[6]),
              (J = P[7]),
              (A = P[8]),
              (V = P[9]),
              (W = P[10]),
              (K = P[11]),
              (c = P[12]),
              (d = P[13]),
              (p = P[14]),
              (M = Vr(ie, W)),
              (v = M * cr),
              M &&
                ((k = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = _ * k + A * L),
                (D = T * k + V * L),
                (I = ie * k + W * L),
                (A = _ * -L + A * k),
                (V = T * -L + V * k),
                (W = ie * -L + W * k),
                (K = J * -L + K * k),
                (_ = O),
                (T = D),
                (ie = I)),
              (M = Vr(-N, W)),
              (w = M * cr),
              M &&
                ((k = Math.cos(-M)),
                (L = Math.sin(-M)),
                (O = R * k - A * L),
                (D = C * k - V * L),
                (I = N * k - W * L),
                (K = y * L + K * k),
                (R = O),
                (C = D),
                (N = I)),
              (M = Vr(C, R)),
              (m = M * cr),
              M &&
                ((k = Math.cos(M)),
                (L = Math.sin(M)),
                (O = R * k + C * L),
                (D = _ * k + T * L),
                (C = C * k - R * L),
                (T = T * k - _ * L),
                (R = O),
                (_ = D)),
              v &&
                Math.abs(v) + Math.abs(m) > 359.9 &&
                ((v = m = 0), (w = 180 - w)),
              (f = ke(Math.sqrt(R * R + C * C + N * N))),
              (g = ke(Math.sqrt(T * T + ie * ie))),
              (M = Vr(_, T)),
              (S = Math.abs(M) > 2e-4 ? M * cr : 0),
              (h = K ? 1 / (K < 0 ? -K : K) : 0)),
          i.svg &&
            ((O = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !tu(ri(e, Ce))),
            O && e.setAttribute("transform", O))),
        Math.abs(S) > 90 &&
          Math.abs(S) < 270 &&
          (s
            ? ((f *= -1),
              (S += m <= 0 ? 180 : -180),
              (m += m <= 0 ? 180 : -180))
            : ((g *= -1), (S += S <= 0 ? 180 : -180))),
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
        (i.scaleY = ke(g)),
        (i.rotation = ke(m) + a),
        (i.rotationX = ke(v) + a),
        (i.rotationY = ke(w) + a),
        (i.skewX = S + a),
        (i.skewY = E + a),
        (i.transformPerspective = h + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (n[Lt] = ps(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ft.force3D),
        (i.renderTransform = i.svg ? Cf : Xl ? ru : Tf),
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
    Tf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        ru(e, t);
    },
    fr = "0deg",
    bn = "0px",
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
        g = i.scaleX,
        m = i.scaleY,
        v = i.transformPerspective,
        w = i.force3D,
        S = i.target,
        E = i.zOrigin,
        h = "",
        x = (w === "auto" && e && e !== 1) || w === !0;
      if (E && (d !== fr || c !== fr)) {
        var b = parseFloat(c) * Br,
          P = Math.sin(b),
          M = Math.cos(b),
          k;
        (b = parseFloat(d) * Br),
          (k = Math.cos(b)),
          (o = $o(S, o, P * k * -E)),
          (a = $o(S, a, -Math.sin(b) * -E)),
          (l = $o(S, l, M * k * -E + E));
      }
      v !== bn && (h += "perspective(" + v + pr),
        (n || s) && (h += "translate(" + n + "%, " + s + "%) "),
        (x || o !== bn || a !== bn || l !== bn) &&
          (h +=
            l !== bn || x
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + pr),
        u !== fr && (h += "rotate(" + u + pr),
        c !== fr && (h += "rotateY(" + c + pr),
        d !== fr && (h += "rotateX(" + d + pr),
        (p !== fr || f !== fr) && (h += "skew(" + p + ", " + f + pr),
        (g !== 1 || m !== 1) && (h += "scale(" + g + ", " + m + pr),
        (S.style[Ce] = h || "translate(0, 0)");
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
        g = i.xOrigin,
        m = i.yOrigin,
        v = i.xOffset,
        w = i.yOffset,
        S = i.forceCSS,
        E = parseFloat(o),
        h = parseFloat(a),
        x,
        b,
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
            (x = Math.cos(l) * d),
            (b = Math.sin(l) * d),
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
                (x *= k),
                (b *= k))),
            (x = ke(x)),
            (b = ke(b)),
            (P = ke(P)),
            (M = ke(M)))
          : ((x = d), (M = p), (b = P = 0)),
        ((E && !~(o + "").indexOf("px")) || (h && !~(a + "").indexOf("px"))) &&
          ((E = Xi(f, "x", o, "px")), (h = Xi(f, "y", a, "px"))),
        (g || m || v || w) &&
          ((E = ke(E + g - (g * x + m * P) + v)),
          (h = ke(h + m - (g * b + m * M) + w))),
        (n || s) &&
          ((k = f.getBBox()),
          (E = ke(E + (n / 100) * k.width)),
          (h = ke(h + (s / 100) * k.height))),
        (k =
          "matrix(" +
          x +
          "," +
          b +
          "," +
          P +
          "," +
          M +
          "," +
          E +
          "," +
          h +
          ")"),
        f.setAttribute("transform", k),
        S && (f.style[Ce] = k);
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
        (e._pt = p = new Mt(e._pt, t, i, n, u, uf)),
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
        g;
      n.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[Ce] = t),
          (a = wn(i, 1)),
          dr(i, Ce),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Ce]),
          (o[Ce] = t),
          (a = wn(i, 1)),
          (o[Ce] = u));
      for (l in Di)
        (u = n[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = at(u)),
            (g = at(c)),
            (d = f !== g ? Xi(i, l, u, g) : parseFloat(u)),
            (p = parseFloat(c)),
            (e._pt = new Mt(e._pt, a, l, d, p - d, No)),
            (e._pt.u = g || 0),
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
          (p = o.map(function (g) {
            return ki(a, g, u);
          })),
          (f = p.join(" ")),
          f.split(p[0]).length === 5 ? p[0] : f
        );
      (p = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (g, m) {
          return (f[g] = p[m] = p[m] || p[((m - 1) / 2) | 0]);
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
        g,
        m,
        v,
        w,
        S,
        E,
        h,
        x,
        b,
        P,
        M;
      Io || Bo(),
        (this.styles = this.styles || Gl(e)),
        (M = this.styles.props),
        (this.tween = i);
      for (m in t)
        if (
          m !== "autoRound" &&
          ((c = t[m]), !(Vt[m] && Ol(m, t, i, n, e, s)))
        ) {
          if (
            ((f = typeof c),
            (g = fs[m]),
            f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = pn(c)),
            g)
          )
            g(this, e, m, c, i) && (P = 1);
          else if (m.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
              (c += ""),
              ($i.lastIndex = 0),
              $i.test(u) || ((v = at(u)), (w = at(c))),
              w ? v !== w && (u = Xi(e, m, u, w) + w) : v && (c += v),
              this.add(a, "setProperty", u, c, n, s, 0, 0, m),
              o.push(m),
              M.push(m, 0, a[m]);
          else if (f !== "undefined") {
            if (
              (l && m in l
                ? ((u =
                    typeof l[m] == "function" ? l[m].call(i, n, e, s) : l[m]),
                  Ye(u) && ~u.indexOf("random(") && (u = pn(u)),
                  at(u + "") ||
                    u === "auto" ||
                    (u += Ft.units[m] || at(ki(e, m)) || ""),
                  (u + "").charAt(1) === "=" && (u = ki(e, m)))
                : (u = ki(e, m)),
              (p = parseFloat(u)),
              (S = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              S && (c = c.substr(2)),
              (d = parseFloat(c)),
              m in wi &&
                (m === "autoAlpha" &&
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
                m !== "scale" &&
                  m !== "transform" &&
                  ((m = wi[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
              (E = m in Di),
              E)
            ) {
              if (
                (this.styles.save(m),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = ri(e, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                h ||
                  ((x = e._gsap),
                  (x.renderTransform && !t.parseTransform) ||
                    wn(e, t.parseTransform),
                  (b = t.smoothOrigin !== !1 && x.smooth),
                  (h = this._pt =
                    new Mt(this._pt, a, Ce, 0, 1, x.renderTransform, x, 0, -1)),
                  (h.dep = 1)),
                m === "scale")
              )
                (this._pt = new Mt(
                  this._pt,
                  x,
                  "scaleY",
                  x.scaleY,
                  (S ? Dr(x.scaleY, S + d) : d) - x.scaleY || 0,
                  No
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", m),
                  (m += "X");
              else if (m === "transformOrigin") {
                M.push(Lt, 0, a[Lt]),
                  (c = Sf(c)),
                  x.svg
                    ? qo(e, c, 0, b, 0, this)
                    : ((w = parseFloat(c.split(" ")[2]) || 0),
                      w !== x.zOrigin && Gi(this, x, "zOrigin", x.zOrigin, w),
                      Gi(this, a, m, ps(u), ps(c)));
                continue;
              } else if (m === "svgOrigin") {
                qo(e, c, 1, b, 0, this);
                continue;
              } else if (m in eu) {
                Ef(this, x, m, p, S ? Dr(p, S + c) : c);
                continue;
              } else if (m === "smoothOrigin") {
                Gi(this, x, "smooth", x.smooth, c);
                continue;
              } else if (m === "force3D") {
                x[m] = c;
                continue;
              } else if (m === "transform") {
                Af(this, c, e);
                continue;
              }
            } else m in a || (m = qr(m) || m);
            if (
              E ||
              ((d || d === 0) && (p || p === 0) && !lf.test(c) && m in a)
            )
              (v = (u + "").substr((p + "").length)),
                d || (d = 0),
                (w = at(c) || (m in Ft.units ? Ft.units[m] : v)),
                v !== w && (p = Xi(e, m, u, w)),
                (this._pt = new Mt(
                  this._pt,
                  E ? x : a,
                  m,
                  p,
                  (S ? Dr(p, S + d) : d) - p,
                  !E && (w === "px" || m === "zIndex") && t.autoRound !== !1
                    ? df
                    : No
                )),
                (this._pt.u = w || 0),
                v !== w && w !== "%" && ((this._pt.b = u), (this._pt.r = cf));
            else if (m in a) bf.call(this, e, m, u, S ? S + c : c);
            else if (m in e) this.add(e, m, u || e[m], S ? S + c : c, n, s);
            else if (m !== "parseTransform") {
              uo(m, c);
              continue;
            }
            E ||
              (m in a
                ? M.push(m, 0, a[m])
                : typeof e[m] == "function"
                ? M.push(m, 2, e[m]())
                : M.push(m, 1, u || e[m])),
              o.push(m);
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
          : Mo(e, t)
      );
    },
    core: { _removeProperty: dr, _getMatrix: Vo },
  };
  (Ot.utils.checkPrefix = qr),
    (Ot.core.getStyleSaver = Gl),
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
    Ot.registerPlugin(su);
  var G = Ot.registerPlugin(su) || Ot;
  function Pf(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i);
    }
  }
  function Mf(r, e, t) {
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
    Sn,
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
    Of = function () {
      var e = Sn.core,
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
    Tn = function (e) {
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
      Tn(e) && (e = Yi.scrollingElement || ji);
      var s = oe.indexOf(e),
        o = n === Ve.sc ? 1 : 2;
      !~s && (s = oe.push(e) - 1), oe[s + o] || wt(e, "scroll", Wo);
      var a = oe[s + o],
        l =
          a ||
          (oe[s + o] =
            vs(Ui(e, i), !0) ||
            (Tn(e)
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
        c = function (g, m) {
          var v = xn();
          m || v - o > l
            ? ((s = n), (n = g), (a = o), (o = v))
            : i
            ? (n += g)
            : (n = s + ((g - s) / (v - a)) * (o - a));
        },
        d = function () {
          (s = n = i ? 0 : n), (a = o = 0);
        },
        p = function (g) {
          var m = a,
            v = s,
            w = xn();
          return (
            (g || g === 0) && g !== n && c(g),
            o === a || w - a > u
              ? 0
              : ((n + (i ? v : -v)) / ((i ? w : o) - m)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: p };
    },
    Cn = function (e, t) {
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
      (Sn = lt.core.globals().ScrollTrigger), Sn && Sn.core && Of();
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
        hs || pu(lt), Sn || fu();
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
          g = i.wheelSpeed,
          m = i.event,
          v = i.onDragStart,
          w = i.onDragEnd,
          S = i.onDrag,
          E = i.onPress,
          h = i.onRelease,
          x = i.onRight,
          b = i.onLeft,
          P = i.onUp,
          M = i.onDown,
          k = i.onChangeX,
          L = i.onChangeY,
          R = i.onChange,
          C = i.onToggleX,
          N = i.onToggleY,
          y = i.onHover,
          _ = i.onHoverEnd,
          T = i.onMove,
          O = i.ignoreCheck,
          D = i.isNormalizer,
          I = i.onGestureStart,
          A = i.onGestureEnd,
          V = i.onWheel,
          W = i.onEnable,
          J = i.onDisable,
          K = i.onClick,
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
          (g = g || 1),
          (ie = ie || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Wt.getComputedStyle($r).lineHeight) || 22);
        var rt,
          Oe,
          $e,
          se,
          ye,
          He,
          We,
          z = this,
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
          Qt = Tn(a),
          we = a.ownerDocument || Yi,
          ht = [0, 0, 0],
          zt = [0, 0, 0],
          pi = 0,
          Ar = function () {
            return (pi = xn());
          },
          Le = function (X, pe) {
            return (
              ((z.event = X) && f && Lf(X.target, f)) ||
              (pe && Ae && X.pointerType !== "touch") ||
              (O && O(X, pe))
            );
          },
          an = function () {
            z._vx.reset(), z._vy.reset(), Oe.pause(), d && d(z);
          },
          F = function () {
            var X = (z.deltaX = du(ht)),
              pe = (z.deltaY = du(zt)),
              q = Math.abs(X) >= n,
              ee = Math.abs(pe) >= n;
            R && (q || ee) && R(z, X, pe, ht, zt),
              q &&
                (x && z.deltaX > 0 && x(z),
                b && z.deltaX < 0 && b(z),
                k && k(z),
                C && z.deltaX < 0 != Ke < 0 && C(z),
                (Ke = z.deltaX),
                (ht[0] = ht[1] = ht[2] = 0)),
              ee &&
                (M && z.deltaY > 0 && M(z),
                P && z.deltaY < 0 && P(z),
                L && L(z),
                N && z.deltaY < 0 != Rt < 0 && N(z),
                (Rt = z.deltaY),
                (zt[0] = zt[1] = zt[2] = 0)),
              (se || $e) &&
                (T && T(z),
                $e && (v && $e === 1 && v(z), S && S(z), ($e = 0)),
                (se = !1)),
              He && !(He = !1) && Ee && Ee(z),
              ye && (V(z), (ye = !1)),
              (rt = 0);
          },
          $ = function (X, pe, q) {
            (ht[q] += X),
              (zt[q] += pe),
              z._vx.update(X),
              z._vy.update(pe),
              u ? rt || (rt = requestAnimationFrame(F)) : F();
          },
          Y = function (X, pe) {
            be &&
              !We &&
              ((z.axis = We = Math.abs(X) > Math.abs(pe) ? "x" : "y"),
              (He = !0)),
              We !== "y" && ((ht[2] += X), z._vx.update(X, !0)),
              We !== "x" && ((zt[2] += pe), z._vy.update(pe, !0)),
              u ? rt || (rt = requestAnimationFrame(F)) : F();
          },
          le = function (X) {
            if (!Le(X, 1)) {
              X = Cn(X, c);
              var pe = X.clientX,
                q = X.clientY,
                ee = pe - z.x,
                U = q - z.y,
                te = z.isDragging;
              (z.x = pe),
                (z.y = q),
                (te ||
                  ((ee || U) &&
                    (Math.abs(z.startX - pe) >= s ||
                      Math.abs(z.startY - q) >= s))) &&
                  (($e = te ? 2 : 1), te || (z.isDragging = !0), Y(ee, U));
            }
          },
          re = (z.onPress = function (Q) {
            Le(Q, 1) ||
              (Q && Q.button) ||
              ((z.axis = We = null),
              Oe.pause(),
              (z.isPressed = !0),
              (Q = Cn(Q)),
              (Ke = Rt = 0),
              (z.startX = z.x = Q.clientX),
              (z.startY = z.y = Q.clientY),
              z._vx.reset(),
              z._vy.reset(),
              wt(D ? a : we, di[1], le, Ze, !0),
              (z.deltaX = z.deltaY = 0),
              E && E(z));
          }),
          j = (z.onRelease = function (Q) {
            if (!Le(Q, 1)) {
              bt(D ? a : we, di[1], le, !0);
              var X = !isNaN(z.y - z.startY),
                pe = z.isDragging,
                q =
                  pe &&
                  (Math.abs(z.x - z.startX) > 3 ||
                    Math.abs(z.y - z.startY) > 3),
                ee = Cn(Q);
              !q &&
                X &&
                (z._vx.reset(),
                z._vy.reset(),
                c &&
                  de &&
                  lt.delayedCall(0.08, function () {
                    if (xn() - pi > 300 && !Q.defaultPrevented) {
                      if (Q.target.click) Q.target.click();
                      else if (we.createEvent) {
                        var U = we.createEvent("MouseEvents");
                        U.initMouseEvent(
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
                          Q.target.dispatchEvent(U);
                      }
                    }
                  })),
                (z.isDragging = z.isGesturing = z.isPressed = !1),
                d && pe && !D && Oe.restart(!0),
                $e && F(),
                w && pe && w(z),
                h && h(z, q);
            }
          }),
          Be = function (X) {
            return (
              X.touches &&
              X.touches.length > 1 &&
              (z.isGesturing = !0) &&
              I(X, z.isDragging)
            );
          },
          Qe = function () {
            return (z.isGesturing = !1) || A(z);
          },
          Nt = function (X) {
            if (!Le(X)) {
              var pe = fe(),
                q = Et();
              $((pe - pt) * ie, (q - Zt) * ie, 1),
                (pt = pe),
                (Zt = q),
                d && Oe.restart(!0);
            }
          },
          Ge = function (X) {
            if (!Le(X)) {
              (X = Cn(X, c)), V && (ye = !0);
              var pe =
                (X.deltaMode === 1
                  ? l
                  : X.deltaMode === 2
                  ? Wt.innerHeight
                  : 1) * g;
              $(X.deltaX * pe, X.deltaY * pe, 0), d && !D && Oe.restart(!0);
            }
          },
          hi = function (X) {
            if (!Le(X)) {
              var pe = X.clientX,
                q = X.clientY,
                ee = pe - z.x,
                U = q - z.y;
              (z.x = pe),
                (z.y = q),
                (se = !0),
                d && Oe.restart(!0),
                (ee || U) && Y(ee, U);
            }
          },
          mi = function (X) {
            (z.event = X), y(z);
          },
          mt = function (X) {
            (z.event = X), _(z);
          },
          Pr = function (X) {
            return Le(X) || (Cn(X, c) && K(z));
          };
        (Oe = z._dc = lt.delayedCall(p || 0.25, an).pause()),
          (z.deltaX = z.deltaY = 0),
          (z._vx = Go(0, 50, !0)),
          (z._vy = Go(0, 50, !0)),
          (z.scrollX = fe),
          (z.scrollY = Et),
          (z.isDragging = z.isGesturing = z.isPressed = !1),
          lu(this),
          (z.enable = function (Q) {
            return (
              z.isEnabled ||
                (wt(Qt ? we : a, "scroll", Wo),
                o.indexOf("scroll") >= 0 &&
                  wt(Qt ? we : a, "scroll", Nt, Ze, ue),
                o.indexOf("wheel") >= 0 && wt(a, "wheel", Ge, Ze, ue),
                ((o.indexOf("touch") >= 0 && ou) ||
                  o.indexOf("pointer") >= 0) &&
                  (wt(a, di[0], re, Ze, ue),
                  wt(we, di[2], j),
                  wt(we, di[3], j),
                  de && wt(a, "click", Ar, !0, !0),
                  K && wt(a, "click", Pr),
                  I && wt(we, "gesturestart", Be),
                  A && wt(we, "gestureend", Qe),
                  y && wt(a, hr + "enter", mi),
                  _ && wt(a, hr + "leave", mt),
                  T && wt(a, hr + "move", hi)),
                (z.isEnabled = !0),
                (z.isDragging = z.isGesturing = z.isPressed = se = $e = !1),
                z._vx.reset(),
                z._vy.reset(),
                (pt = fe()),
                (Zt = Et()),
                Q && Q.type && re(Q),
                W && W(z)),
              z
            );
          }),
          (z.disable = function () {
            z.isEnabled &&
              (Hr.filter(function (Q) {
                return Q !== z && Tn(Q.target);
              }).length || bt(Qt ? we : a, "scroll", Wo),
              z.isPressed &&
                (z._vx.reset(), z._vy.reset(), bt(D ? a : we, di[1], le, !0)),
              bt(Qt ? we : a, "scroll", Nt, ue),
              bt(a, "wheel", Ge, ue),
              bt(a, di[0], re, ue),
              bt(we, di[2], j),
              bt(we, di[3], j),
              bt(a, "click", Ar, !0),
              bt(a, "click", Pr),
              bt(we, "gesturestart", Be),
              bt(we, "gestureend", Qe),
              bt(a, hr + "enter", mi),
              bt(a, hr + "leave", mt),
              bt(a, hr + "move", hi),
              (z.isEnabled = z.isPressed = z.isDragging = !1),
              J && J(z));
          }),
          (z.kill = z.revert =
            function () {
              z.disable();
              var Q = Hr.indexOf(z);
              Q >= 0 && Hr.splice(Q, 1), Ii === z && (Ii = 0);
            }),
          Hr.push(z),
          D && Tn(a) && (Ii = z),
          z.enable(m);
      }),
      Mf(r, [
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
   */ var H,
    Wr,
    ae,
    _e,
    Gt,
    he,
    Xo,
    _s,
    En,
    An,
    Pn,
    ys,
    ut,
    ws,
    Yo,
    xt,
    hu,
    mu,
    Gr,
    gu,
    jo,
    vu,
    Tt,
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
    xu = function () {
      return (ws = 0);
    },
    Si = function (e) {
      return e;
    },
    On = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Tu = function () {
      return typeof window < "u";
    },
    Cu = function () {
      return H || (Tu() && (H = window.gsap) && H.registerPlugin && H);
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
    xi = function (e, t) {
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
    xs = function (e, t) {
      for (var i = 0; i < Gr.length; i += 3)
        (!t || ~t.indexOf(Gr[i + 1])) && e(Gr[i], Gr[i + 1], Gr[i + 2]);
    },
    Xt = function (e) {
      return typeof e == "string";
    },
    dt = function (e) {
      return typeof e == "function";
    },
    Ln = function (e) {
      return typeof e == "number";
    },
    gr = function (e) {
      return typeof e == "object";
    },
    Dn = function (e, t, i) {
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
    Mu = "top",
    ra = "right",
    na = "bottom",
    vr = "width",
    _r = "height",
    kn = "Right",
    In = "Left",
    Rn = "Top",
    zn = "Bottom",
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
    Ou = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ri = function (e, t) {
      var i =
          t &&
          oi(e)[Yo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          H.to(e, {
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
    Ts = function (e, t) {
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
        return H.utils.snap(Lu(e), t);
      };
    },
    oa = function (e) {
      var t = H.utils.snap(e),
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
    Ms = function (e, t) {
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
    Os = function (e, t, i, n, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        d = s.fontSize,
        p = s.indent,
        f = s.fontWeight,
        g = _e.createElement("div"),
        m = mr(i) || Ui(i, "pinType") === "fixed",
        v = e.indexOf("scroller") !== -1,
        w = m ? he : i,
        S = e.indexOf("start") !== -1,
        E = S ? u : c,
        h =
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
        (h += "position:" + ((v || l) && m ? "fixed;" : "absolute;")),
        (v || l || !m) &&
          (h += (n === Ve ? ra : na) + ":" + (o + parseFloat(p)) + "px;"),
        a &&
          (h +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (g._isStart = S),
        g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (g.style.cssText = h),
        (g.innerText = t || t === 0 ? e + "-" + t : e),
        w.children[0] ? w.insertBefore(g, w.children[0]) : w.appendChild(g),
        (g._offset = g["offset" + n.op.d2]),
        Ls(g, 0, n, S),
        g
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
        H.set(e, s);
    },
    ne = [],
    aa = {},
    Nn,
    ku = function () {
      return ct() - ni > 34 && (Nn || (Nn = requestAnimationFrame(zi)));
    },
    Ur = function () {
      (!Tt || !Tt.isPressed || Tt.startX > he.clientWidth) &&
        (oe.cache++,
        Tt ? Nn || (Nn = requestAnimationFrame(zi)) : zi(),
        ni || wr("scrollStart"),
        (ni = ct()));
    },
    la = function () {
      (yu = ae.innerWidth), (_u = ae.innerHeight);
    },
    Fn = function (e) {
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
      for (xt = 0; xt < ne.length; xt++)
        (i = ne[xt]),
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
        (Qo = (!Tt && Xr.offsetHeight) || ae.innerHeight),
        he.removeChild(Xr);
    },
    Bu = function (e) {
      return En(
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
    Bn,
    zi = function (e) {
      if (e === 2 || (!Ct && !bs)) {
        (Z.isUpdating = !0), Bn && Bn.update(0);
        var t = ne.length,
          i = ct(),
          n = i - ta >= 50,
          s = t && ne[0].scroll();
        if (
          ((Ds = ca > s ? -1 : 1),
          Ct || (ca = s),
          n &&
            (ni && !ws && i - ni > 200 && ((ni = 0), wr("scrollEnd")),
            (Pn = ta),
            (ta = i)),
          Ds < 0)
        ) {
          for (xt = t; xt-- > 0; ) ne[xt] && ne[xt].update(0, n);
          Ds = 1;
        } else for (xt = 0; xt < t; xt++) ne[xt] && ne[xt].update(0, n);
        Z.isUpdating = !1;
      }
      Nn = 0;
    },
    da = [
      Pu,
      Mu,
      na,
      ra,
      si + zn,
      si + kn,
      si + Rn,
      si + In,
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
      Fe + Rn,
      Fe + kn,
      Fe + zn,
      Fe + In,
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
          (o[vr] = Ts(e, St) + qe),
          (o[_r] = Ts(e, Ve) + qe),
          (o[Fe] = a[si] = a[Mu] = a[Pu] = "0"),
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
        for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; n < i; n += 2)
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
    Vu = function (e, t, i, n, s, o, a, l, u, c, d, p, f, g) {
      dt(e) && (e = e(l)),
        Xt(e) &&
          e.substr(0, 3) === "max" &&
          (e = p + (e.charAt(4) === "=" ? Ms("0" + e.substr(3), i) : 0));
      var m = f ? f.time() : 0,
        v,
        w,
        S;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Ln(e)))
        f &&
          (e = H.utils.mapRange(
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
          h,
          x,
          b,
          P;
        (S = Dt(t, l) || he),
          (h = Ri(S) || {}),
          (!h || (!h.left && !h.top)) &&
            oi(S).display === "none" &&
            ((P = S.style.display),
            (S.style.display = "block"),
            (h = Ri(S)),
            P ? (S.style.display = P) : S.style.removeProperty("display")),
          (x = Ms(E[0], h[n.d])),
          (b = Ms(E[1] || "0", i)),
          (e = h[n.p] - u[n.p] - c + x + s - b),
          a && Ls(a, b, n, i - b < 20 || (a._isStart && b > 20)),
          (i -= i - b);
      }
      if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), o)) {
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
          S &&
          ((v = Ri(S)),
          f.seek(p),
          (w = Ri(S)),
          (f._caScrollDist = v[n.p] - w[n.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(m),
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
        (H.core.getCache(e).uncache = 1), t.appendChild(e);
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
      (n[t.p] = "+=" + i), H.set(e, n);
    },
    Hu = function (e, t) {
      var i = Ki(e, t),
        n = "_scroll" + t.p2,
        s = function o(a, l, u, c, d) {
          var p = o.tween,
            f = l.onComplete,
            g = {};
          u = u || i();
          var m = $u(i, u, function () {
            p.kill(), (o.tween = 0);
          });
          return (
            (d = (c && d) || 0),
            (c = c || a - u),
            p && p.kill(),
            (l[n] = a),
            (l.inherit = !1),
            (l.modifiers = g),
            (g[n] = function () {
              return m(u + c * p.ratio + d * p.ratio * p.ratio);
            }),
            (l.onUpdate = function () {
              oe.cache++, o.tween && zi();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(p);
            }),
            (p = o.tween = H.to(e, l)),
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
        Wr || r.register(H), Ko(this), this.init(t, i);
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
          i = Ou(Xt(i) || Ln(i) || i.nodeType ? { trigger: i } : i, As);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            d = s.scrub,
            p = s.trigger,
            f = s.pin,
            g = s.pinSpacing,
            m = s.invalidateOnRefresh,
            v = s.anticipatePin,
            w = s.onScrubComplete,
            S = s.onSnapComplete,
            E = s.once,
            h = s.snap,
            x = s.pinReparent,
            b = s.pinSpacer,
            P = s.containerAnimation,
            M = s.fastScrollEnd,
            k = s.preventOverlaps,
            L =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? St
                : Ve,
            R = !d && d !== 0,
            C = Dt(i.scroller || ae),
            N = H.core.getCache(C),
            y = mr(C),
            _ =
              ("pinType" in i
                ? i.pinType
                : Ui(C, "pinType") || (y && "fixed")) === "fixed",
            T = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            O = R && i.toggleActions.split(" "),
            D = "markers" in i ? i.markers : As.markers,
            I = y ? 0 : parseFloat(oi(C)["border" + L.p2 + jr]) || 0,
            A = this,
            V =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(A);
              },
            W = kf(C, y, L),
            J = If(C, y),
            K = 0,
            ie = 0,
            ue = 0,
            de = Ki(C, L),
            be,
            Ee,
            rt,
            Oe,
            $e,
            se,
            ye,
            He,
            We,
            z,
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
            an,
            F,
            $,
            Y,
            le,
            re,
            j,
            Be,
            Qe,
            Nt,
            Ge,
            hi,
            mi,
            mt;
          if (
            ((A._startClamp = A._endClamp = !1),
            (A._dir = L),
            (v *= 45),
            (A.scroller = C),
            (A.scroll = P ? P.time.bind(P) : de),
            (Oe = de()),
            (A.vars = i),
            (n = n || i.animation),
            "refreshPriority" in i &&
              ((gu = 1), i.refreshPriority === -9999 && (Bn = A)),
            (N.tweenScroll = N.tweenScroll || {
              top: Hu(C, Ve),
              left: Hu(C, St),
            }),
            (A.tweenTo = be = N.tweenScroll[L.p]),
            (A.scrubDuration = function (q) {
              (Be = Ln(q) && q),
                Be
                  ? j
                    ? j.duration(q)
                    : (j = H.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Be,
                        paused: !0,
                        onComplete: function () {
                          return w && w(A);
                        },
                      }))
                  : (j && j.progress(1).kill(), (j = 0));
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
              "scrollBehavior" in he.style &&
                H.set(y ? [he, Gt] : C, { scrollBehavior: "auto" }),
              oe.forEach(function (q) {
                return (
                  dt(q) &&
                  q.target === (y ? _e.scrollingElement || Gt : C) &&
                  (q.smooth = !1)
                );
              }),
              (rt = dt(h.snapTo)
                ? h.snapTo
                : h.snapTo === "labels"
                ? zf(n)
                : h.snapTo === "labelsDirectional"
                ? Nf(n)
                : h.directional !== !1
                ? function (q, ee) {
                    return oa(h.snapTo)(q, ct() - ie < 500 ? 0 : ee.direction);
                  }
                : H.utils.snap(h.snapTo)),
              (Qe = h.duration || { min: 0.1, max: 2 }),
              (Qe = gr(Qe) ? An(Qe.min, Qe.max) : An(Qe, Qe)),
              (Nt = H.delayedCall(h.delay || Be / 2 || 0.1, function () {
                var q = de(),
                  ee = ct() - ie < 500,
                  U = be.tween;
                if (
                  (ee || Math.abs(A.getVelocity()) < 10) &&
                  !U &&
                  !ws &&
                  K !== q
                ) {
                  var te = (q - se) / fe,
                    Je = n && !R ? n.totalProgress() : te,
                    ce = ee ? 0 : ((Je - re) / (ct() - Pn)) * 1e3 || 0,
                    Re = H.utils.clamp(-te, 1 - te, (Yr(ce / 2) * ce) / 0.185),
                    gt = te + (h.inertia === !1 ? 0 : Re),
                    De,
                    xe,
                    ve = h,
                    gi = ve.onStart,
                    Pe = ve.onInterrupt,
                    Jt = ve.onComplete;
                  if (
                    ((De = rt(gt, A)),
                    Ln(De) || (De = gt),
                    (xe = Math.max(0, Math.round(se + De * fe))),
                    q <= ye && q >= se && xe !== q)
                  ) {
                    if (U && !U._initted && U.data <= Yr(xe - q)) return;
                    h.inertia === !1 && (Re = De - te),
                      be(
                        xe,
                        {
                          duration: Qe(
                            Yr(
                              (Math.max(Yr(gt - Je), Yr(De - Je)) * 0.185) /
                                ce /
                                0.05 || 0
                            )
                          ),
                          ease: h.ease || "power3",
                          data: Yr(xe - q),
                          onInterrupt: function () {
                            return Nt.restart(!0) && Pe && Pe(A);
                          },
                          onComplete: function () {
                            A.update(),
                              (K = de()),
                              n &&
                                !R &&
                                (j
                                  ? j.resetTo(
                                      "totalProgress",
                                      De,
                                      n._tTime / n._tDur
                                    )
                                  : n.progress(De)),
                              (le = re =
                                n && !R ? n.totalProgress() : A.progress),
                              S && S(A),
                              Jt && Jt(A);
                          },
                        },
                        q,
                        Re * fe,
                        xe - q - Re * fe
                      ),
                      gi && gi(A, be.tween);
                  }
                } else A.isActive && K !== q && Nt.restart(!0);
              }).pause())),
            l && (aa[l] = A),
            (p = A.trigger = Dt(p || (f !== !0 && f))),
            (mt = p && p._gsap && p._gsap.stRevert),
            mt && (mt = mt(A)),
            (f = f === !0 ? p : Dt(f)),
            Xt(a) && (a = { targets: p, className: a }),
            f &&
              (g === !1 ||
                g === si ||
                (g =
                  !g &&
                  f.parentNode &&
                  f.parentNode.style &&
                  oi(f.parentNode).display === "flex"
                    ? !1
                    : Fe),
              (A.pin = f),
              (Ee = H.core.getCache(f)),
              Ee.spacer
                ? (Et = Ee.pinState)
                : (b &&
                    ((b = Dt(b)),
                    b && !b.nodeType && (b = b.current || b.nativeElement),
                    (Ee.spacerIsNative = !!b),
                    b && (Ee.spacerState = Is(b))),
                  (Ee.spacer = Ae = b || _e.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (Ee.pinState = Et = Is(f))),
              i.force3D !== !1 && H.set(f, { force3D: !0 }),
              (A.spacer = Ae = Ee.spacer),
              (Y = oi(f)),
              (Ar = Y[g + L.os2]),
              (we = H.getProperty(f)),
              (ht = H.quickSetter(f, L.a, qe)),
              fa(f, Ae, Y),
              (Zt = Is(f))),
            D)
          ) {
            (Rt = gr(D) ? Ou(D, Du) : Du),
              (z = Os("scroller-start", l, C, L, Rt, 0)),
              (Ke = Os("scroller-end", l, C, L, Rt, 0, z)),
              (Qt = z["offset" + L.op.d2]);
            var Pr = Dt(Ui(C, "content") || C);
            (He = this.markerStart = Os("start", l, Pr, L, Rt, Qt, 0, P)),
              (We = this.markerEnd = Os("end", l, Pr, L, Rt, Qt, 0, P)),
              P && (mi = H.quickSetter([He, We], L.a, qe)),
              !_ &&
                !(bi.length && Ui(C, "fixedMarkers") === !0) &&
                (Rf(y ? he : C),
                H.set([z, Ke], { force3D: !0 }),
                (an = H.quickSetter(z, L.a, qe)),
                ($ = H.quickSetter(Ke, L.a, qe)));
          }
          if (P) {
            var Q = P.vars.onUpdate,
              X = P.vars.onUpdateParams;
            P.eventCallback("onUpdate", function () {
              A.update(0, 0, 1), Q && Q.apply(P, X || []);
            });
          }
          if (
            ((A.previous = function () {
              return ne[ne.indexOf(A) - 1];
            }),
            (A.next = function () {
              return ne[ne.indexOf(A) + 1];
            }),
            (A.revert = function (q, ee) {
              if (!ee) return A.kill(!0);
              var U = q !== !1 || !A.enabled,
                te = ut;
              U !== A.isReverted &&
                (U &&
                  ((Ge = Math.max(de(), A.scroll.rec || 0)),
                  (ue = A.progress),
                  (hi = n && n.progress())),
                He &&
                  [He, We, z, Ke].forEach(function (Je) {
                    return (Je.style.display = U ? "none" : "block");
                  }),
                U && ((ut = A), A.update(U)),
                f &&
                  (!x || !A.isActive) &&
                  (U ? Vf(f, Ae, Et) : fa(f, Ae, oi(f), Le)),
                U || A.update(U),
                (ut = te),
                (A.isReverted = U));
            }),
            (A.refresh = function (q, ee, U, te) {
              if (!((ut || !A.enabled) && !ee)) {
                if (f && q && ni) {
                  je(r, "scrollEnd", Iu);
                  return;
                }
                !Ct && V && V(A),
                  (ut = A),
                  be.tween && !U && (be.tween.kill(), (be.tween = 0)),
                  j && j.pause(),
                  m &&
                    n &&
                    (n.revert({ kill: !1 }).invalidate(),
                    n.getChildren &&
                      n.getChildren(!0, !0, !1).forEach(function (ir) {
                        return ir.vars.immediateRender && ir.render(0, !0, !0);
                      })),
                  A.isReverted || A.revert(!0, !0),
                  (A._subPinOffset = !1);
                var Je = W(),
                  ce = J(),
                  Re = P ? P.duration() : xi(C, L),
                  gt = fe <= 0.01 || !fe,
                  De = 0,
                  xe = te || 0,
                  ve = gr(U) ? U.end : i.end,
                  gi = i.endTrigger || p,
                  Pe = gr(U)
                    ? U.start
                    : i.start ||
                      (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                  Jt = (A.pinnedContainer =
                    i.pinnedContainer && Dt(i.pinnedContainer, A)),
                  Pi = (p && Math.max(0, ne.indexOf(A))) || 0,
                  nt = Pi,
                  st,
                  vt,
                  Mr,
                  Js,
                  _t,
                  Xe,
                  Mi,
                  Wa,
                  dd,
                  Qn,
                  Oi,
                  Jn,
                  eo;
                for (
                  D &&
                  gr(U) &&
                  ((Jn = H.getProperty(z, L.p)), (eo = H.getProperty(Ke, L.p)));
                  nt-- > 0;

                )
                  (Xe = ne[nt]),
                    Xe.end || Xe.refresh(0, 1) || (ut = A),
                    (Mi = Xe.pin),
                    Mi &&
                      (Mi === p || Mi === f || Mi === Jt) &&
                      !Xe.isReverted &&
                      (Qn || (Qn = []), Qn.unshift(Xe), Xe.revert(!0, !0)),
                    Xe !== ne[nt] && (Pi--, nt--);
                for (
                  dt(Pe) && (Pe = Pe(A)),
                    Pe = wu(Pe, "start", A),
                    se =
                      Vu(
                        Pe,
                        p,
                        Je,
                        L,
                        de(),
                        He,
                        z,
                        A,
                        ce,
                        I,
                        _,
                        Re,
                        P,
                        A._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    dt(ve) && (ve = ve(A)),
                    Xt(ve) &&
                      !ve.indexOf("+=") &&
                      (~ve.indexOf(" ")
                        ? (ve = (Xt(Pe) ? Pe.split(" ")[0] : "") + ve)
                        : ((De = Ms(ve.substr(2), Je)),
                          (ve = Xt(Pe)
                            ? Pe
                            : (P
                                ? H.utils.mapRange(
                                    0,
                                    P.duration(),
                                    P.scrollTrigger.start,
                                    P.scrollTrigger.end,
                                    se
                                  )
                                : se) + De),
                          (gi = p))),
                    ve = wu(ve, "end", A),
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
                          A,
                          ce,
                          I,
                          _,
                          Re,
                          P,
                          A._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    De = 0,
                    nt = Pi;
                  nt--;

                )
                  (Xe = ne[nt]),
                    (Mi = Xe.pin),
                    Mi &&
                      Xe.start - Xe._pinPush <= se &&
                      !P &&
                      Xe.end > 0 &&
                      ((st =
                        Xe.end -
                        (A._startClamp ? Math.max(0, Xe.start) : Xe.start)),
                      ((Mi === p && Xe.start - Xe._pinPush < se) ||
                        Mi === Jt) &&
                        isNaN(Pe) &&
                        (De += st * (1 - Xe.progress)),
                      Mi === f && (xe += st));
                if (
                  ((se += De),
                  (ye += De),
                  A._startClamp && (A._startClamp += De),
                  A._endClamp &&
                    !Ct &&
                    ((A._endClamp = ye || -0.001),
                    (ye = Math.min(ye, xi(C, L)))),
                  (fe = ye - se || ((se -= 0.01) && 0.001)),
                  gt &&
                    (ue = H.utils.clamp(0, 1, H.utils.normalize(se, ye, Ge))),
                  (A._pinPush = xe),
                  He &&
                    De &&
                    ((st = {}),
                    (st[L.a] = "+=" + De),
                    Jt && (st[L.p] = "-=" + de()),
                    H.set([He, We], st)),
                  f && !(Jo && A.end >= xi(C, L)))
                )
                  (st = oi(f)),
                    (Js = L === Ve),
                    (Mr = de()),
                    (zt = parseFloat(we(L.a)) + xe),
                    !Re &&
                      ye > 1 &&
                      ((Oi = (y ? _e.scrollingElement || Gt : C).style),
                      (Oi = {
                        style: Oi,
                        value: Oi["overflow" + L.a.toUpperCase()],
                      }),
                      y &&
                        oi(he)["overflow" + L.a.toUpperCase()] !== "scroll" &&
                        (Oi.style["overflow" + L.a.toUpperCase()] = "scroll")),
                    fa(f, Ae, st),
                    (Zt = Is(f)),
                    (vt = Ri(f, !0)),
                    (Wa = _ && Ki(C, Js ? St : Ve)()),
                    g
                      ? ((Le = [g + L.os2, fe + xe + qe]),
                        (Le.t = Ae),
                        (nt = g === Fe ? Ts(f, L) + fe + xe : 0),
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
                      : ((nt = Ts(f, L)),
                        nt &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = nt + qe)),
                    _ &&
                      ((_t = {
                        top: vt.top + (Js ? Mr - se : Wa) + qe,
                        left: vt.left + (Js ? Wa : Mr - se) + qe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (_t[vr] = _t["max" + jr] = Math.ceil(vt.width) + qe),
                      (_t[_r] = _t["max" + sa] = Math.ceil(vt.height) + qe),
                      (_t[si] =
                        _t[si + Rn] =
                        _t[si + kn] =
                        _t[si + zn] =
                        _t[si + In] =
                          "0"),
                      (_t[Fe] = st[Fe]),
                      (_t[Fe + Rn] = st[Fe + Rn]),
                      (_t[Fe + kn] = st[Fe + kn]),
                      (_t[Fe + zn] = st[Fe + zn]),
                      (_t[Fe + In] = st[Fe + In]),
                      (pt = $f(Et, _t, x)),
                      Ct && de(0)),
                    n
                      ? ((dd = n._initted),
                        jo(1),
                        n.render(n.duration(), !0, !0),
                        (pi = we(L.a) - zt + fe + xe),
                        (F = Math.abs(fe - pi) > 1),
                        _ && F && pt.splice(pt.length - 2, 2),
                        n.render(0, !0, !0),
                        dd || n.invalidate(!0),
                        n.parent || n.totalTime(n.totalTime()),
                        jo(0))
                      : (pi = fe),
                    Oi &&
                      (Oi.value
                        ? (Oi.style["overflow" + L.a.toUpperCase()] = Oi.value)
                        : Oi.style.removeProperty("overflow-" + L.a));
                else if (p && de() && !P)
                  for (vt = p.parentNode; vt && vt !== he; )
                    vt._pinOffset &&
                      ((se -= vt._pinOffset), (ye -= vt._pinOffset)),
                      (vt = vt.parentNode);
                Qn &&
                  Qn.forEach(function (ir) {
                    return ir.revert(!1, !0);
                  }),
                  (A.start = se),
                  (A.end = ye),
                  (Oe = $e = Ct ? Ge : de()),
                  !P && !Ct && (Oe < Ge && de(Ge), (A.scroll.rec = 0)),
                  A.revert(!1, !0),
                  (ie = ct()),
                  Nt && ((K = -1), Nt.restart(!0)),
                  (ut = 0),
                  n &&
                    R &&
                    (n._initted || hi) &&
                    n.progress() !== hi &&
                    n.progress(hi || 0, !0).render(n.time(), !0, !0),
                  (gt || ue !== A.progress || P || m || (n && !n._initted)) &&
                    (n &&
                      !R &&
                      (n._initted || ue || n.vars.immediateRender !== !1) &&
                      n.totalProgress(
                        P && se < -0.001 && !ue
                          ? H.utils.normalize(se, ye, 0)
                          : ue,
                        !0
                      ),
                    (A.progress = gt || (Oe - se) / fe === ue ? 0 : ue)),
                  f && g && (Ae._pinOffset = Math.round(A.progress * pi)),
                  j && j.invalidate(),
                  isNaN(Jn) ||
                    ((Jn -= H.getProperty(z, L.p)),
                    (eo -= H.getProperty(Ke, L.p)),
                    zs(z, L, Jn),
                    zs(He, L, Jn - (te || 0)),
                    zs(Ke, L, eo),
                    zs(We, L, eo - (te || 0))),
                  gt && !Ct && A.update(),
                  c && !Ct && !Ze && ((Ze = !0), c(A), (Ze = !1));
              }
            }),
            (A.getVelocity = function () {
              return ((de() - $e) / (ct() - Pn)) * 1e3 || 0;
            }),
            (A.endAnimation = function () {
              Dn(A.callbackAnimation),
                n &&
                  (j
                    ? j.progress(1)
                    : n.paused()
                    ? R || Dn(n, A.direction < 0, 1)
                    : Dn(n, n.reversed()));
            }),
            (A.labelToScroll = function (q) {
              return (
                (n &&
                  n.labels &&
                  (se || A.refresh() || se) +
                    (n.labels[q] / n.duration()) * fe) ||
                0
              );
            }),
            (A.getTrailing = function (q) {
              var ee = ne.indexOf(A),
                U =
                  A.direction > 0
                    ? ne.slice(0, ee).reverse()
                    : ne.slice(ee + 1);
              return (
                Xt(q)
                  ? U.filter(function (te) {
                      return te.vars.preventOverlaps === q;
                    })
                  : U
              ).filter(function (te) {
                return A.direction > 0 ? te.end <= se : te.start >= ye;
              });
            }),
            (A.update = function (q, ee, U) {
              if (!(P && !U && !q)) {
                var te = Ct === !0 ? Ge : A.scroll(),
                  Je = q ? 0 : (te - se) / fe,
                  ce = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0,
                  Re = A.progress,
                  gt,
                  De,
                  xe,
                  ve,
                  gi,
                  Pe,
                  Jt,
                  Pi;
                if (
                  (ee &&
                    (($e = Oe),
                    (Oe = P ? de() : te),
                    h && ((re = le), (le = n && !R ? n.totalProgress() : ce))),
                  v &&
                    f &&
                    !ut &&
                    !Ss &&
                    ni &&
                    (!ce && se < te + ((te - $e) / (ct() - Pn)) * v
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        ye > te + ((te - $e) / (ct() - Pn)) * v &&
                        (ce = 0.9999)),
                  ce !== Re && A.enabled)
                ) {
                  if (
                    ((gt = A.isActive = !!ce && ce < 1),
                    (De = !!Re && Re < 1),
                    (Pe = gt !== De),
                    (gi = Pe || !!ce != !!Re),
                    (A.direction = ce > Re ? 1 : -1),
                    (A.progress = ce),
                    gi &&
                      !ut &&
                      ((xe = ce && !Re ? 0 : ce === 1 ? 1 : Re === 1 ? 2 : 3),
                      R &&
                        ((ve =
                          (!Pe && O[xe + 1] !== "none" && O[xe + 1]) || O[xe]),
                        (Pi =
                          n &&
                          (ve === "complete" || ve === "reset" || ve in n)))),
                    k &&
                      (Pe || Pi) &&
                      (Pi || d || !n) &&
                      (dt(k)
                        ? k(A)
                        : A.getTrailing(k).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    R ||
                      (j && !ut && !Ss
                        ? (j._dp._time - j._start !== j._time &&
                            j.render(j._dp._time - j._start),
                          j.resetTo
                            ? j.resetTo("totalProgress", ce, n._tTime / n._tDur)
                            : ((j.vars.totalProgress = ce),
                              j.invalidate().restart()))
                        : n && n.totalProgress(ce, !!(ut && (ie || q)))),
                    f)
                  ) {
                    if ((q && g && (Ae.style[g + L.os2] = Ar), !_))
                      ht(On(zt + pi * ce));
                    else if (gi) {
                      if (
                        ((Jt =
                          !q && ce > Re && ye + 1 > te && te + 1 >= xi(C, L)),
                        x)
                      )
                        if (!q && (gt || Jt)) {
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
                  h && !be.tween && !ut && !Ss && Nt.restart(!0),
                    a &&
                      (Pe || (E && ce && (ce < 1 || !ea))) &&
                      En(a.targets).forEach(function (Mr) {
                        return Mr.classList[gt || E ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !q && o(A),
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
                          o && o(A)),
                        (Pe || !ea) &&
                          (u && Pe && ia(A, u),
                          T[xe] && ia(A, T[xe]),
                          E && (ce === 1 ? A.kill(!1, 1) : (T[xe] = 0)),
                          Pe ||
                            ((xe = ce === 1 ? 1 : 3), T[xe] && ia(A, T[xe]))),
                        M &&
                          !gt &&
                          Math.abs(A.getVelocity()) > (Ln(M) ? M : 2500) &&
                          (Dn(A.callbackAnimation),
                          j
                            ? j.progress(1)
                            : Dn(n, ve === "reverse" ? 1 : !ce, 1)))
                      : R && o && !ut && o(A);
                }
                if ($) {
                  var vt = P
                    ? (te / P.duration()) * (P._caScrollDist || 0)
                    : te;
                  an(vt + (z._isFlipped ? 1 : 0)), $(vt);
                }
                mi && mi((-te / P.duration()) * (P._caScrollDist || 0));
              }
            }),
            (A.enable = function (q, ee) {
              A.enabled ||
                ((A.enabled = !0),
                je(C, "resize", Fn),
                y || je(C, "scroll", Ur),
                V && je(r, "refreshInit", V),
                q !== !1 && ((A.progress = ue = 0), (Oe = $e = K = de())),
                ee !== !1 && A.refresh());
            }),
            (A.getTween = function (q) {
              return q && be ? be.tween : j;
            }),
            (A.setPositions = function (q, ee, U, te) {
              if (P) {
                var Je = P.scrollTrigger,
                  ce = P.duration(),
                  Re = Je.end - Je.start;
                (q = Je.start + (Re * q) / ce),
                  (ee = Je.start + (Re * ee) / ce);
              }
              A.refresh(
                !1,
                !1,
                {
                  start: bu(q, U && !!A._startClamp),
                  end: bu(ee, U && !!A._endClamp),
                },
                te
              ),
                A.update();
            }),
            (A.adjustPinSpacing = function (q) {
              if (Le && q) {
                var ee = Le.indexOf(L.d) + 1;
                (Le[ee] = parseFloat(Le[ee]) + q + qe),
                  (Le[1] = parseFloat(Le[1]) + q + qe),
                  Kr(Le);
              }
            }),
            (A.disable = function (q, ee) {
              if (
                A.enabled &&
                (q !== !1 && A.revert(!0, !0),
                (A.enabled = A.isActive = !1),
                ee || (j && j.pause()),
                (Ge = 0),
                Ee && (Ee.uncache = 1),
                V && Ue(r, "refreshInit", V),
                Nt &&
                  (Nt.pause(), be.tween && be.tween.kill() && (be.tween = 0)),
                !y)
              ) {
                for (var U = ne.length; U--; )
                  if (ne[U].scroller === C && ne[U] !== A) return;
                Ue(C, "resize", Fn), y || Ue(C, "scroll", Ur);
              }
            }),
            (A.kill = function (q, ee) {
              A.disable(q, ee), j && !ee && j.kill(), l && delete aa[l];
              var U = ne.indexOf(A);
              U >= 0 && ne.splice(U, 1),
                U === xt && Ds > 0 && xt--,
                (U = 0),
                ne.forEach(function (te) {
                  return te.scroller === A.scroller && (U = 1);
                }),
                U || Ct || (A.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  q && n.revert({ kill: !1 }),
                  ee || n.kill()),
                He &&
                  [He, We, z, Ke].forEach(function (te) {
                    return te.parentNode && te.parentNode.removeChild(te);
                  }),
                Bn === A && (Bn = 0),
                f &&
                  (Ee && (Ee.uncache = 1),
                  (U = 0),
                  ne.forEach(function (te) {
                    return te.pin === f && U++;
                  }),
                  U || (Ee.spacer = 0)),
                i.onKill && i.onKill(A);
            }),
            ne.push(A),
            A.enable(!1, !1),
            mt && mt(A),
            n && n.add && !fe)
          ) {
            var pe = A.update;
            (A.update = function () {
              (A.update = pe), oe.cache++, se || ye || A.refresh();
            }),
              H.delayedCall(0.01, A.update),
              (fe = 0.01),
              (se = ye = 0);
          } else A.refresh();
          f && Bf();
        }),
        (r.register = function (i) {
          return (
            Wr ||
              ((H = i || Cu()),
              Tu() && window.document && r.enable(),
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
            Cs(Ue, _e, "pointerup,touchend,mouseup", xu),
            _s.kill(),
            xs(Ue);
          for (var s = 0; s < oe.length; s += 3)
            Es(Ue, oe[s], oe[s + 1]), Es(Ue, oe[s], oe[s + 2]);
        }),
        (r.enable = function () {
          if (
            ((ae = window),
            (_e = document),
            (Gt = _e.documentElement),
            (he = _e.body),
            H &&
              ((En = H.utils.toArray),
              (An = H.utils.clamp),
              (Ko = H.core.context || Si),
              (jo = H.core.suppressOverwrites || Si),
              (Zo = ae.history.scrollRestoration || "auto"),
              (ca = ae.pageYOffset || 0),
              H.core.globals("ScrollTrigger", r),
              he))
          ) {
            (Mn = 1),
              (Xr = document.createElement("div")),
              (Xr.style.height = "100vh"),
              (Xr.style.position = "absolute"),
              Fu(),
              Df(),
              Ie.register(H),
              (r.isTouch = Ie.isTouch),
              (Zi =
                Ie.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Uo = Ie.isTouch === 1),
              je(ae, "wheel", Ur),
              (Xo = [ae, _e, Gt, he]),
              H.matchMedia &&
                ((r.matchMedia = function (u) {
                  var c = H.matchMedia(),
                    d;
                  for (d in u) c.add(d, u[d]);
                  return c;
                }),
                H.addEventListener("matchMediaInit", function () {
                  return ua();
                }),
                H.addEventListener("matchMediaRevert", function () {
                  return Ru();
                }),
                H.addEventListener("matchMedia", function () {
                  Sr(0, 1), wr("matchMedia");
                }),
                H.matchMedia().add("(orientation: portrait)", function () {
                  return la(), la;
                })),
              la(),
              je(_e, "scroll", Ur);
            var i = he.hasAttribute("style"),
              n = he.style,
              s = n.borderTopStyle,
              o = H.core.Animation.prototype,
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
                H.delayedCall(0.5, function () {
                  return (Ss = 0);
                }),
                je(_e, "touchcancel", Si),
                je(he, "touchstart", Si),
                Cs(je, _e, "pointerdown,touchstart,mousedown", Su),
                Cs(je, _e, "pointerup,touchend,mouseup", xu),
                Yo = H.utils.checkPrefix("transform"),
                ks.push(Yo),
                Wr = ct(),
                _s = H.delayedCall(0.2, Sr).pause(),
                Gr = [
                  _e,
                  "visibilitychange",
                  function () {
                    var u = ae.innerWidth,
                      c = ae.innerHeight;
                    _e.hidden
                      ? ((hu = u), (mu = c))
                      : (hu !== u || mu !== c) && Fn();
                  },
                  _e,
                  "DOMContentLoaded",
                  Sr,
                  ae,
                  "load",
                  Sr,
                  ae,
                  "resize",
                  Fn,
                ],
                xs(je),
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
              (xs(Ue) || xs(je, i.autoRefreshEvents || "none"),
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
        ? En(r).forEach(function (e) {
            if (e && e.style) {
              var t = Yt.indexOf(e);
              t >= 0 && Yt.splice(t, 5),
                Yt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
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
      return r ? Fn(!0) : (Wr || Z.register()) && Sr(!0);
    }),
    (Z.update = function (r) {
      return ++oe.cache && zi(r === !0 ? 2 : 0);
    }),
    (Z.clearScrollMemory = zu),
    (Z.maxScroll = function (r, e) {
      return xi(r, e ? St : Ve);
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
            f = H.delayedCall(n, function () {
              c(d, p), (d = []), (p = []);
            }).pause();
          return function (g) {
            d.length || f.restart(!0),
              d.push(g.trigger),
              p.push(g),
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
        En(r).forEach(function (l) {
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
        o = s._gsap || H.core.getCache(s),
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
        c = H.core.globals().ScrollSmoother,
        d = c && c.get(),
        p =
          Zi &&
          ((e.content && Dt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = Ki(u, Ve),
        g = Ki(u, St),
        m = 1,
        v =
          (Ie.isTouch && ae.visualViewport
            ? ae.visualViewport.scale * ae.visualViewport.width
            : ae.outerWidth) / ae.innerWidth,
        w = 0,
        S = dt(n)
          ? function () {
              return n(a);
            }
          : function () {
              return n || 2.8;
            },
        E,
        h,
        x = Gu(u, e.type, !0, s),
        b = function () {
          return (h = !1);
        },
        P = Si,
        M = Si,
        k = function () {
          (l = xi(u, Ve)),
            (M = An(Zi ? 1 : 0, l)),
            i && (P = An(0, xi(u, St))),
            (E = br);
        },
        L = function () {
          (p._gsap.y = On(parseFloat(p._gsap.y) + f.offset) + "px"),
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(p._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        R = function () {
          if (h) {
            requestAnimationFrame(b);
            var D = On(a.deltaY / 2),
              I = M(f.v - D);
            if (p && I !== f.v + f.offset) {
              f.offset = I - f.v;
              var A = On((parseFloat(p && p._gsap.y) || 0) - f.offset);
              (p.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                A +
                ", 0, 1)"),
                (p._gsap.y = A + "px"),
                (f.cacheID = oe.cache),
                zi();
            }
            return !0;
          }
          f.offset && L(), (h = !0);
        },
        C,
        N,
        y,
        _,
        T = function () {
          k(),
            C.isActive() &&
              C.vars.scrollY > l &&
              (f() > l ? C.progress(1) && f(l) : C.resetTo("scrollY", l));
        };
      return (
        p && H.set(p, { y: "+=0" }),
        (e.ignoreCheck = function (O) {
          return (
            (Zi && O.type === "touchmove" && R()) ||
            (m > 1.05 && O.type !== "touchstart") ||
            a.isGesturing ||
            (O.touches && O.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          h = !1;
          var O = m;
          (m = On(((ae.visualViewport && ae.visualViewport.scale) || 1) / v)),
            C.pause(),
            O !== m && pa(u, m > 1.01 ? !0 : i ? !1 : "x"),
            (N = g()),
            (y = f()),
            k(),
            (E = br);
        }),
        (e.onRelease = e.onGestureStart =
          function (O, D) {
            if ((f.offset && L(), !D)) _.restart(!0);
            else {
              oe.cache++;
              var I = S(),
                A,
                V;
              i &&
                ((A = g()),
                (V = A + (I * 0.05 * -O.velocityX) / 0.227),
                (I *= Wu(g, A, V, xi(u, St))),
                (C.vars.scrollX = P(V))),
                (A = f()),
                (V = A + (I * 0.05 * -O.velocityY) / 0.227),
                (I *= Wu(f, A, V, xi(u, Ve))),
                (C.vars.scrollY = M(V)),
                C.invalidate().duration(I).play(0.01),
                ((Zi && C.vars.scrollY >= l) || A >= l - 1) &&
                  H.to({}, { onUpdate: T, duration: I });
            }
            o && o(O);
          }),
        (e.onWheel = function () {
          C._ts && C.pause(), ct() - w > 1e3 && ((E = 0), (w = ct()));
        }),
        (e.onChange = function (O, D, I, A, V) {
          if (
            (br !== E && k(),
            D && i && g(P(A[2] === D ? N + (O.startX - O.x) : g() + D - A[1])),
            I)
          ) {
            f.offset && L();
            var W = V[2] === I,
              J = W ? y + O.startY - O.y : f() + I - V[1],
              K = M(J);
            W && J !== K && (y += K - J), f(K);
          }
          (I || D) && zi();
        }),
        (e.onEnable = function () {
          pa(u, i ? !1 : "x"),
            Z.addEventListener("refresh", T),
            je(ae, "resize", T),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = g.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          pa(u, !0),
            Ue(ae, "resize", T),
            Z.removeEventListener("refresh", T),
            x.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Ie(e)),
        (a.iOS = Zi),
        Zi && !f() && f(1),
        Zi && H.ticker.add(Si),
        (_ = a._dc),
        (C = H.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: $u(f, f(), function () {
              return C.pause();
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
      if (typeof r > "u") return Tt;
      if (r === !0 && Tt) return Tt.enable();
      if (r === !1) {
        Tt && Tt.kill(), (Tt = r);
        return;
      }
      var e = r instanceof Ie ? r : Xf(r);
      return (
        Tt && Tt.target === e.target && Tt.kill(), mr(e.target) && (Tt = e), e
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
    Cu() && H.registerPlugin(Z);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Vn,
    Zr,
    ha,
    Yf = () => ha || qn.register(window.gsap),
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
        { wordDelimiter: f, reduceWhiteSpace: g = !0, prepareText: m } = e,
        v = r.getBoundingClientRect(),
        w = v,
        S =
          !g && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
        E = 0,
        h = t.collection,
        x,
        b,
        P,
        M,
        k,
        L,
        R,
        C,
        N,
        y,
        _,
        T,
        O,
        D,
        I,
        A,
        V,
        W;
      for (
        typeof f == "object"
          ? ((P = f.delimiter || f), (b = f.replaceWith || ""))
          : (b = f === "" ? "" : f || " "),
          x = b !== " ";
        p < d.length;
        p++
      )
        if (((M = d[p]), M.nodeType === 3)) {
          for (
            I = M.textContent || "",
              g
                ? (I = I.replace(jf, " "))
                : S &&
                  (I = I.replace(
                    /\n/g,
                    b +
                      `
`
                  )),
              m && (I = m(I, r)),
              M.textContent = I,
              k = b || P ? I.split(P || b) : I.match(a) || ma,
              V = k[k.length - 1],
              C = x ? V.slice(-1) === " " : !V,
              V || k.pop(),
              w = v,
              R = x ? k[0].charAt(0) === " " : !k[0],
              R && Qr(" ", r, M),
              k[0] || k.shift(),
              Qu(k, l),
              (s && u) || (M.textContent = ""),
              N = 1;
            N <= k.length;
            N++
          )
            if (
              ((A = k[N - 1]),
              !g &&
                S &&
                A.charAt(0) ===
                  `
` &&
                ((c = M.previousSibling) == null || c.remove(),
                Qr(document.createElement("br"), r, M),
                (A = A.slice(1))),
              !g && A === "")
            )
              Qr(b, r, M);
            else if (A === " ") r.insertBefore(document.createTextNode(" "), M);
            else {
              if (
                (x && A.charAt(0) === " " && Qr(" ", r, M),
                E && N === 1 && !R && h.indexOf(E.parentNode) > -1
                  ? ((L = h[h.length - 1]),
                    L.appendChild(document.createTextNode(i ? "" : A)))
                  : ((L = t(i ? "" : A)),
                    Qr(L, r, M),
                    E && N === 1 && !R && L.insertBefore(E, L.firstChild)),
                i)
              )
                for (
                  _ = ju
                    ? Qu(
                        [...ju.segment(A)].map((J) => J.segment),
                        l
                      )
                    : A.match(a) || ma,
                    W = 0;
                  W < _.length;
                  W++
                )
                  L.appendChild(
                    _[W] === " " ? document.createTextNode(" ") : i(_[W])
                  );
              if (s && u) {
                if (
                  ((I = M.textContent = I.substring(A.length + 1, I.length)),
                  (y = L.getBoundingClientRect()),
                  y.top > w.top && y.left <= w.left)
                ) {
                  for (T = r.cloneNode(), O = r.childNodes[0]; O && O !== L; )
                    (D = O), (O = O.nextSibling), T.appendChild(D);
                  r.parentNode.insertBefore(T, r), n && Ju(T);
                }
                w = y;
              }
              (N < k.length || C) &&
                Qr(
                  N >= k.length ? " " : x && A.slice(-1) === " " ? " " + b : b,
                  r,
                  M
                );
            }
          r.removeChild(M), (E = 0);
        } else
          M.nodeType === 1 &&
            (o && o.indexOf(M) > -1
              ? (h.indexOf(M.previousSibling) > -1 &&
                  h[h.length - 1].appendChild(M),
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
        g =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        m = g ? new RegExp(g.source + "|" + Ku.source, "gu") : Ku,
        v = !!e.ignore && Uu(e.ignore),
        { orig: w, animTime: S, obs: E } = this._data,
        h;
      return (
        (d || p || c) &&
          (this.elements.forEach((x, b) => {
            (w[b] = {
              element: x,
              html: x.innerHTML,
              ariaL: x.getAttribute("aria-label"),
              ariaH: x.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? x.setAttribute("aria-label", (x.textContent || "").trim())
                : i === "hidden" && x.setAttribute("aria-hidden", "true");
            let P = [],
              M = [],
              k = [],
              L = d ? va("char", e, P) : null,
              R = va("word", e, M),
              C,
              N,
              y,
              _;
            if ((ec(x, e, R, L, f, n && (c || f), v, m, g, !1), c)) {
              let T = Fs(x.childNodes),
                O = Uf(x, T, e, k),
                D,
                I = [],
                A = 0,
                V = T.map((J) =>
                  J.nodeType === 1 ? J.getBoundingClientRect() : Zu
                ),
                W = Zu;
              for (C = 0; C < T.length; C++)
                (D = T[C]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (I.push(D), O(A, C + 1), (A = C + 1), (W = V[A]))
                      : (C &&
                          V[C].top > W.top &&
                          V[C].left <= W.left &&
                          (O(A, C), (A = C)),
                        (W = V[C])));
              A < C && O(A, C),
                I.forEach((J) => {
                  var K;
                  return (K = J.parentNode) == null ? void 0 : K.removeChild(J);
                });
            }
            if (!p) {
              for (C = 0; C < M.length; C++)
                if (
                  ((N = M[C]),
                  d || !N.nextSibling || N.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
                    for (
                      y = document.createElement("span"),
                        y.style.whiteSpace = "nowrap";
                      N.firstChild;

                    )
                      y.appendChild(N.firstChild);
                    N.replaceWith(y);
                  } else N.replaceWith(...N.childNodes);
                else
                  (_ = N.nextSibling),
                    _ &&
                      _.nodeType === 3 &&
                      ((_.textContent =
                        (N.textContent || "") + (_.textContent || "")),
                      N.remove());
              (M.length = 0), x.normalize();
            }
            this.lines.push(...k), this.words.push(...M), this.chars.push(...P);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((x) => {
                let b = x.cloneNode();
                return (
                  x.replaceWith(b),
                  b.appendChild(x),
                  x.className &&
                    (b.className = x.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (b.style.overflow = "clip"),
                  b
                );
              })
            )),
        (this.isSplit = !0),
        Zr && (a ? Zr.addEventListener("loadingdone", this._split) : Zr.status),
        (h = o && o(this)) &&
          h.totalTime &&
          (this._data.anim = S ? h.totalTime(S) : h),
        c &&
          a &&
          this.elements.forEach((x, b) => {
            (w[b].width = x.offsetWidth), E && E.observe(x);
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
      (Vn = Vn || e || window.gsap),
        Vn && ((Fs = Vn.utils.toArray), (ga = Vn.core.context || ga)),
        !ha && window.innerWidth > 0 && ((Zr = document.fonts), (ha = !0));
    }
  };
  tc.version = "3.13.0";
  let qn = tc;
  G.registerPlugin(Z, qn);
  const Kf = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((e) => {
        const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
          n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
        new qn(e, {
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
                  const g = (p + 1) % t.length;
                  d(g);
                }
              },
            })));
        }
        function d(p) {
          if (l || t[p] === o) return;
          (l = !0), u && u.kill();
          const f = o,
            g = a,
            m = f?.querySelector('[data-tabs="item-progress"]'),
            v = t[p],
            w = i[p],
            S = v.querySelector('[data-tabs="item-progress"]'),
            E = G.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = v), (a = w), (l = !1), n && c(p);
              },
            });
          f &&
            (f.classList.remove("active"),
            f.setAttribute("aria-selected", "false"),
            g?.classList.remove("active"),
            E.set(m, { transformOrigin: "right center" })
              .to(m, { scaleX: 0, duration: 0.3 }, 0)
              .to(g, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            v.classList.add("active"),
            v.setAttribute("aria-selected", "true"),
            w.classList.add("active"),
            E.fromTo(
              w,
              { autoAlpha: 0, yPercent: 5, scale: 0.99 },
              { autoAlpha: 1, yPercent: 0, scale: 1 },
              0.3
            ).set(S, { scaleX: 0, transformOrigin: "left center" }, 0);
        }
        t.forEach((p, f) => {
          p.setAttribute("tabindex", f === 0 ? "0" : "-1"),
            p.setAttribute("role", "tab"),
            p.setAttribute("aria-selected", f === 0 ? "true" : "false"),
            p.setAttribute("id", `tab-${f}`),
            i[f] &&
              (i[f].setAttribute("role", "tabpanel"),
              i[f].setAttribute("aria-labelledby", `tab-${f}`)),
            p.addEventListener("keydown", (g) => {
              let m;
              switch (g.key) {
                case "ArrowRight":
                  g.preventDefault(), (m = (f + 1) % t.length);
                  break;
                case "ArrowLeft":
                  g.preventDefault(), (m = (f - 1 + t.length) % t.length);
                  break;
                case "Home":
                  g.preventDefault(), (m = 0);
                  break;
                case "End":
                  g.preventDefault(), (m = t.length - 1);
                  break;
                default:
                  return;
              }
              t.forEach((v, w) => {
                v.setAttribute("tabindex", w === m ? "0" : "-1");
              }),
                t[m].focus(),
                d(m);
            }),
            p.addEventListener("click", () => {
              p !== o &&
                (t.forEach((g, m) => {
                  g.setAttribute("tabindex", m === f ? "0" : "-1");
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
  G.registerPlugin(Z, qn);
  const tp = () => {
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
        g = !1;
      G.set(i, { autoAlpha: 0 }),
        G.set(n, { autoAlpha: 0 }),
        G.set(i, { scale: 0.8 }),
        G.set(n, { scale: 0.8 });
      const m = (h) => {
          const x = i[h],
            b = n[h];
          x &&
            G.fromTo(
              x,
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
            b &&
              b.length > 0 &&
              G.fromTo(
                b,
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
        v = (h) => {
          const x = i[h],
            b = n[h];
          x &&
            G.to(x, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            b &&
              b.length > 0 &&
              G.to(b, {
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
          const x = a[h],
            b = new qn(x, { type: "lines", mask: "lines" });
          b &&
            G.from(b.lines, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.12,
            });
        },
        S = (h) => {
          const x = u[h];
          x &&
            x.length > 0 &&
            G.from(x, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        E = (h) => {
          const x = Math.floor(h * 4),
            b = Math.min(Math.max(x, 0), 3);
          if (b !== f && !g) {
            g = !0;
            const P = f,
              M = b,
              k = () => {
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
            k(),
              P >= 0 &&
                P < t.length &&
                (d[P] && d[P].classList.add("is--outgoing"),
                t[P] && t[P].classList.add("is--outgoing"),
                o[P] && o[P].classList.add("is--outgoing"),
                l[P] && l[P].classList.add("is--outgoing"),
                v(P)),
              d[M] && d[M].classList.add("is--incoming"),
              t[M] && t[M].classList.add("is--incoming"),
              o[M] && o[M].classList.add("is--incoming"),
              l[M] && l[M].classList.add("is--incoming"),
              m(M),
              w(M),
              S(M),
              G.delayedCall(0.2, () => {
                k(),
                  d[M] && d[M].classList.add("is--active"),
                  t[M] && t[M].classList.add("is--active"),
                  o[M] && o[M].classList.add("is--active"),
                  l[M] && l[M].classList.add("is--active"),
                  (f = M),
                  (g = !1);
              });
          }
        };
      d[0] && d[0].classList.add("is--active"),
        t[0] && t[0].classList.add("is--active"),
        o[0] && o[0].classList.add("is--active"),
        l[0] && l[0].classList.add("is--active"),
        m(0),
        w(0),
        S(0),
        G.to(r, {
          scrollTrigger: {
            trigger: r,
            start: "top top",
            end: "+=400%",
            pin: !0,
            scrub: !0,
            markers: !1,
            onUpdate: (h) => {
              E(h.progress);
            },
          },
        }),
        p.forEach((h, x) => {
          G.fromTo(
            h,
            { scaleX: 0 },
            {
              scaleX: 1,
              scrollTrigger: {
                trigger: r,
                start: "top top",
                end: "+=400%",
                scrub: !0,
                onUpdate: (b) => {
                  const M = b.progress * 4 - x,
                    k = Math.min(Math.max(M, 0), 1);
                  G.set(h, { scaleX: k });
                },
              },
            }
          );
        });
    },
    ip = () => {
      tp();
    },
    rp = () => {
      const r = document.querySelectorAll('[form-dropdown="component"]'),
        e = "inactive",
        t = "active",
        i = "aria-expanded",
        n = "aria-hidden";
      let s = !1,
        o = null;
      const a = "#f7f7f7",
        l = "#4aa5fe",
        u = (g) => {
          if (!s || !o) return;
          if (!o.contains(g.target)) {
            const v = o.querySelector('[form-dropdown="trigger"]'),
              w = o.querySelector('[form-dropdown="content"]'),
              S = o.querySelector('[form-dropdown="trigger-icon"]'),
              E = o.querySelectorAll('[form-dropdown="answer"]');
            d(v, w, S), f(v, w, S, E), (s = !1), (o = null);
          }
        };
      document.addEventListener("click", u);
      const c = (g, m, v, w) => {
          g.classList.remove(e),
            g.classList.add(t),
            g.setAttribute(i, "true"),
            m.setAttribute(n, "false"),
            v && v.classList.add(t);
        },
        d = (g, m, v, w) => {
          g.classList.remove(t),
            g.classList.add(e),
            g.setAttribute(i, "false"),
            m.setAttribute(n, "true"),
            v && v.classList.remove(t);
        },
        p = (g, m, v, w) => {
          G.to(v, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
            G.fromTo(
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
        f = (g, m, v, w) => {
          G.to(v, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            G.to(m, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            G.to(w, {
              autoAlpha: 0,
              duration: 0.01,
              ease: "expo.out",
              stagger: 0.05,
              pointerEvents: "none",
            });
        };
      r.forEach((g) => {
        const m = g.querySelector('[form-dropdown="trigger"]'),
          v = g.querySelector('[form-dropdown="content"]'),
          w = g.querySelector('[form-dropdown="trigger-icon"]'),
          S = g.querySelectorAll('[form-dropdown="answer"]'),
          E = () => {
            d(m, v, w), f(m, v, w, S), (s = !1), (o = null);
          };
        m.addEventListener("click", () => {
          const h = m.classList.contains(t);
          if (s && o && o !== g) {
            const x = o.querySelector('[form-dropdown="trigger"]'),
              b = o.querySelector('[form-dropdown="content"]'),
              P = o.querySelector('[form-dropdown="trigger-icon"]'),
              M = o.querySelectorAll('[form-dropdown="answer"]');
            d(x, b, P), f(x, b, P, M);
          }
          h ? E() : (c(m, v, w), p(m, v, w, S), (s = !0), (o = g));
        }),
          S.forEach((h) => {
            h.addEventListener("click", () => {
              if (o === g) {
                const x = h.querySelector("p[answer-value]"),
                  b = m.querySelector('[form-dropdown="value"]');
                if (x && b) {
                  const P =
                      x.getAttribute("answer-value") || x.textContent.trim(),
                    M = h.getAttribute("calc-value");
                  if (((b.textContent = P), M)) {
                    b.setAttribute("final-value", M);
                    const k = b.parentElement;
                    k && k.classList.add("is--active"),
                      m.classList.add("is--active"),
                      w && w.classList.add("is--active"),
                      g.classList.add("is--active"),
                      b.classList.add("is--active");
                  }
                }
                E();
              }
            });
          });
      });
    },
    np = () => {
      rp();
    };
  var kt = "top",
    ai = "bottom",
    li = "right",
    It = "left",
    _a = "auto",
    $n = [kt, ai, li, It],
    Jr = "start",
    Hn = "end",
    sp = "clippingParents",
    rc = "viewport",
    Wn = "popper",
    op = "reference",
    nc = $n.reduce(function (r, e) {
      return r.concat([e + "-" + Jr, e + "-" + Hn]);
    }, []),
    sc = [].concat($n, [_a]).reduce(function (r, e) {
      return r.concat([e, e + "-" + Jr, e + "-" + Hn]);
    }, []),
    ap = "beforeRead",
    lp = "read",
    up = "afterRead",
    cp = "beforeMain",
    dp = "main",
    fp = "afterMain",
    pp = "beforeWrite",
    hp = "write",
    mp = "afterWrite",
    gp = [ap, lp, up, cp, dp, fp, pp, hp, mp];
  function Ti(r) {
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
  function xr(r) {
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
  function vp(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function (t) {
      var i = e.styles[t] || {},
        n = e.attributes[t] || {},
        s = e.elements[t];
      !ui(s) ||
        !Ti(s) ||
        (Object.assign(s.style, i),
        Object.keys(n).forEach(function (o) {
          var a = n[o];
          a === !1
            ? s.removeAttribute(o)
            : s.setAttribute(o, a === !0 ? "" : a);
        }));
    });
  }
  function _p(r) {
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
            !Ti(n) ||
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
    fn: vp,
    effect: _p,
    requires: ["computeStyles"],
  };
  function Ci(r) {
    return r.split("-")[0];
  }
  var Tr = Math.max,
    Bs = Math.min,
    en = Math.round;
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
  function tn(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var i = r.getBoundingClientRect(),
      n = 1,
      s = 1;
    e &&
      ui(r) &&
      ((n = (r.offsetWidth > 0 && en(i.width) / r.offsetWidth) || 1),
      (s = (r.offsetHeight > 0 && en(i.height) / r.offsetHeight) || 1));
    var o = xr(r) ? jt(r) : window,
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
    var e = tn(r),
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
  function yp(r) {
    return ["table", "td", "th"].indexOf(Ti(r)) >= 0;
  }
  function Qi(r) {
    return ((xr(r) ? r.ownerDocument : r.document) || window.document)
      .documentElement;
  }
  function Vs(r) {
    return Ti(r) === "html"
      ? r
      : r.assignedSlot || r.parentNode || (ya(r) ? r.host : null) || Qi(r);
  }
  function uc(r) {
    return !ui(r) || Ni(r).position === "fixed" ? null : r.offsetParent;
  }
  function wp(r) {
    var e = /firefox/i.test(wa()),
      t = /Trident/i.test(wa());
    if (t && ui(r)) {
      var i = Ni(r);
      if (i.position === "fixed") return null;
    }
    var n = Vs(r);
    for (
      ya(n) && (n = n.host);
      ui(n) && ["html", "body"].indexOf(Ti(n)) < 0;

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
    for (var e = jt(r), t = uc(r); t && yp(t) && Ni(t).position === "static"; )
      t = uc(t);
    return t &&
      (Ti(t) === "html" || (Ti(t) === "body" && Ni(t).position === "static"))
      ? e
      : t || wp(r) || e;
  }
  function Sa(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
  }
  function Xn(r, e, t) {
    return Tr(r, Bs(e, t));
  }
  function bp(r, e, t) {
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
  var Sp = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      dc(typeof e != "number" ? e : fc(e, $n))
    );
  };
  function xp(r) {
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
      var d = Sp(n.padding, t),
        p = ba(s),
        f = l === "y" ? kt : It,
        g = l === "y" ? ai : li,
        m =
          t.rects.reference[c] +
          t.rects.reference[l] -
          o[l] -
          t.rects.popper[c],
        v = o[l] - t.rects.reference[l],
        w = Gn(s),
        S = w ? (l === "y" ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
        E = m / 2 - v / 2,
        h = d[f],
        x = S - p[c] - d[g],
        b = S / 2 - p[c] / 2 + E,
        P = Xn(h, b, x),
        M = l;
      t.modifiersData[i] = ((e = {}), (e[M] = P), (e.centerOffset = P - b), e);
    }
  }
  function Tp(r) {
    var e = r.state,
      t = r.options,
      i = t.element,
      n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null &&
      ((typeof n == "string" &&
        ((n = e.elements.popper.querySelector(n)), !n)) ||
        (lc(e.elements.popper, n) && (e.elements.arrow = n)));
  }
  const Cp = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: xp,
    effect: Tp,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function rn(r) {
    return r.split("-")[1];
  }
  var Ep = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Ap(r, e) {
    var t = r.x,
      i = r.y,
      n = e.devicePixelRatio || 1;
    return { x: en(t * n) / n || 0, y: en(i * n) / n || 0 };
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
      g = o.y,
      m = g === void 0 ? 0 : g,
      v = typeof c == "function" ? c({ x: f, y: m }) : { x: f, y: m };
    (f = v.x), (m = v.y);
    var w = o.hasOwnProperty("x"),
      S = o.hasOwnProperty("y"),
      E = It,
      h = kt,
      x = window;
    if (u) {
      var b = Gn(t),
        P = "clientHeight",
        M = "clientWidth";
      if (
        (b === jt(t) &&
          ((b = Qi(t)),
          Ni(b).position !== "static" &&
            a === "absolute" &&
            ((P = "scrollHeight"), (M = "scrollWidth"))),
        (b = b),
        n === kt || ((n === It || n === li) && s === Hn))
      ) {
        h = ai;
        var k =
          d && b === x && x.visualViewport ? x.visualViewport.height : b[P];
        (m -= k - i.height), (m *= l ? 1 : -1);
      }
      if (n === It || ((n === kt || n === ai) && s === Hn)) {
        E = li;
        var L =
          d && b === x && x.visualViewport ? x.visualViewport.width : b[M];
        (f -= L - i.width), (f *= l ? 1 : -1);
      }
    }
    var R = Object.assign({ position: a }, u && Ep),
      C = c === !0 ? Ap({ x: f, y: m }, jt(t)) : { x: f, y: m };
    if (((f = C.x), (m = C.y), l)) {
      var N;
      return Object.assign(
        {},
        R,
        ((N = {}),
        (N[h] = S ? "0" : ""),
        (N[E] = w ? "0" : ""),
        (N.transform =
          (x.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + m + "px)"
            : "translate3d(" + f + "px, " + m + "px, 0)"),
        N)
      );
    }
    return Object.assign(
      {},
      R,
      ((e = {}),
      (e[h] = S ? m + "px" : ""),
      (e[E] = w ? f + "px" : ""),
      (e.transform = ""),
      e)
    );
  }
  function Pp(r) {
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
        variation: rn(e.placement),
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
  const Mp = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Pp,
    data: {},
  };
  var qs = { passive: !0 };
  function Op(r) {
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
  const Lp = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Op,
    data: {},
  };
  var Dp = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function $s(r) {
    return r.replace(/left|right|bottom|top/g, function (e) {
      return Dp[e];
    });
  }
  var kp = { start: "end", end: "start" };
  function hc(r) {
    return r.replace(/start|end/g, function (e) {
      return kp[e];
    });
  }
  function xa(r) {
    var e = jt(r),
      t = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: t, scrollTop: i };
  }
  function Ta(r) {
    return tn(Qi(r)).left + xa(r).scrollLeft;
  }
  function Ip(r, e) {
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
    return { width: s, height: o, x: a + Ta(r), y: l };
  }
  function Rp(r) {
    var e,
      t = Qi(r),
      i = xa(r),
      n = (e = r.ownerDocument) == null ? void 0 : e.body,
      s = Tr(
        t.scrollWidth,
        t.clientWidth,
        n ? n.scrollWidth : 0,
        n ? n.clientWidth : 0
      ),
      o = Tr(
        t.scrollHeight,
        t.clientHeight,
        n ? n.scrollHeight : 0,
        n ? n.clientHeight : 0
      ),
      a = -i.scrollLeft + Ta(r),
      l = -i.scrollTop;
    return (
      Ni(n || t).direction === "rtl" &&
        (a += Tr(t.clientWidth, n ? n.clientWidth : 0) - s),
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
    return ["html", "body", "#document"].indexOf(Ti(r)) >= 0
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
  function zp(r, e) {
    var t = tn(r, !1, e === "fixed");
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
    return e === rc ? Ea(Ip(r, t)) : xr(e) ? zp(e, t) : Ea(Rp(Qi(r)));
  }
  function Np(r) {
    var e = Yn(Vs(r)),
      t = ["absolute", "fixed"].indexOf(Ni(r).position) >= 0,
      i = t && ui(r) ? Gn(r) : r;
    return xr(i)
      ? e.filter(function (n) {
          return xr(n) && lc(n, i) && Ti(n) !== "body";
        })
      : [];
  }
  function Fp(r, e, t, i) {
    var n = e === "clippingParents" ? Np(r) : [].concat(e),
      s = [].concat(n, [t]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = gc(r, u, i);
        return (
          (l.top = Tr(c.top, l.top)),
          (l.right = Bs(c.right, l.right)),
          (l.bottom = Bs(c.bottom, l.bottom)),
          (l.left = Tr(c.left, l.left)),
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
      s = i ? rn(i) : null,
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
        case Jr:
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
      l = a === void 0 ? sp : a,
      u = t.rootBoundary,
      c = u === void 0 ? rc : u,
      d = t.elementContext,
      p = d === void 0 ? Wn : d,
      f = t.altBoundary,
      g = f === void 0 ? !1 : f,
      m = t.padding,
      v = m === void 0 ? 0 : m,
      w = dc(typeof v != "number" ? v : fc(v, $n)),
      S = p === Wn ? op : Wn,
      E = r.rects.popper,
      h = r.elements[g ? S : p],
      x = Fp(xr(h) ? h : h.contextElement || Qi(r.elements.popper), l, c, o),
      b = tn(r.elements.reference),
      P = vc({ reference: b, element: E, strategy: "absolute", placement: n }),
      M = Ea(Object.assign({}, E, P)),
      k = p === Wn ? M : b,
      L = {
        top: x.top - k.top + w.top,
        bottom: k.bottom - x.bottom + w.bottom,
        left: x.left - k.left + w.left,
        right: k.right - x.right + w.right,
      },
      R = r.modifiersData.offset;
    if (p === Wn && R) {
      var C = R[n];
      Object.keys(L).forEach(function (N) {
        var y = [li, ai].indexOf(N) >= 0 ? 1 : -1,
          _ = [kt, ai].indexOf(N) >= 0 ? "y" : "x";
        L[N] += C[_] * y;
      });
    }
    return L;
  }
  function Bp(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = t.boundary,
      s = t.rootBoundary,
      o = t.padding,
      a = t.flipVariations,
      l = t.allowedAutoPlacements,
      u = l === void 0 ? sc : l,
      c = rn(i),
      d = c
        ? a
          ? nc
          : nc.filter(function (g) {
              return rn(g) === c;
            })
        : $n,
      p = d.filter(function (g) {
        return u.indexOf(g) >= 0;
      });
    p.length === 0 && (p = d);
    var f = p.reduce(function (g, m) {
      return (
        (g[m] = jn(r, {
          placement: m,
          boundary: n,
          rootBoundary: s,
          padding: o,
        })[Ci(m)]),
        g
      );
    }, {});
    return Object.keys(f).sort(function (g, m) {
      return f[g] - f[m];
    });
  }
  function Vp(r) {
    if (Ci(r) === _a) return [];
    var e = $s(r);
    return [hc(r), e, hc(e)];
  }
  function qp(r) {
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
          g = f === void 0 ? !0 : f,
          m = t.allowedAutoPlacements,
          v = e.options.placement,
          w = Ci(v),
          S = w === v,
          E = l || (S || !g ? [$s(v)] : Vp(v)),
          h = [v].concat(E).reduce(function (K, ie) {
            return K.concat(
              Ci(ie) === _a
                ? Bp(e, {
                    placement: ie,
                    boundary: c,
                    rootBoundary: d,
                    padding: u,
                    flipVariations: g,
                    allowedAutoPlacements: m,
                  })
                : ie
            );
          }, []),
          x = e.rects.reference,
          b = e.rects.popper,
          P = new Map(),
          M = !0,
          k = h[0],
          L = 0;
        L < h.length;
        L++
      ) {
        var R = h[L],
          C = Ci(R),
          N = rn(R) === Jr,
          y = [kt, ai].indexOf(C) >= 0,
          _ = y ? "width" : "height",
          T = jn(e, {
            placement: R,
            boundary: c,
            rootBoundary: d,
            altBoundary: p,
            padding: u,
          }),
          O = y ? (N ? li : It) : N ? ai : kt;
        x[_] > b[_] && (O = $s(O));
        var D = $s(O),
          I = [];
        if (
          (s && I.push(T[C] <= 0),
          a && I.push(T[O] <= 0, T[D] <= 0),
          I.every(function (K) {
            return K;
          }))
        ) {
          (k = R), (M = !1);
          break;
        }
        P.set(R, I);
      }
      if (M)
        for (
          var A = g ? 3 : 1,
            V = function (ie) {
              var ue = h.find(function (de) {
                var be = P.get(de);
                if (be)
                  return be.slice(0, ie).every(function (Ee) {
                    return Ee;
                  });
              });
              if (ue) return (k = ue), "break";
            },
            W = A;
          W > 0;
          W--
        ) {
          var J = V(W);
          if (J === "break") break;
        }
      e.placement !== k &&
        ((e.modifiersData[i]._skip = !0), (e.placement = k), (e.reset = !0));
    }
  }
  const $p = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: qp,
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
  function Hp(r) {
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
  const Wp = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Hp,
  };
  function Gp(r, e, t) {
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
  function Xp(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.offset,
      s = n === void 0 ? [0, 0] : n,
      o = sc.reduce(function (c, d) {
        return (c[d] = Gp(d, e.rects, s)), c;
      }, {}),
      a = o[e.placement],
      l = a.x,
      u = a.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += l),
      (e.modifiersData.popperOffsets.y += u)),
      (e.modifiersData[i] = o);
  }
  const Yp = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Xp,
  };
  function jp(r) {
    var e = r.state,
      t = r.name;
    e.modifiersData[t] = vc({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const Up = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: jp,
    data: {},
  };
  function Kp(r) {
    return r === "x" ? "y" : "x";
  }
  function Zp(r) {
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
      g = t.tetherOffset,
      m = g === void 0 ? 0 : g,
      v = jn(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
      w = Ci(e.placement),
      S = rn(e.placement),
      E = !S,
      h = Sa(w),
      x = Kp(h),
      b = e.modifiersData.popperOffsets,
      P = e.rects.reference,
      M = e.rects.popper,
      k =
        typeof m == "function"
          ? m(Object.assign({}, e.rects, { placement: e.placement }))
          : m,
      L =
        typeof k == "number"
          ? { mainAxis: k, altAxis: k }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
      R = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      C = { x: 0, y: 0 };
    if (b) {
      if (s) {
        var N,
          y = h === "y" ? kt : It,
          _ = h === "y" ? ai : li,
          T = h === "y" ? "height" : "width",
          O = b[h],
          D = O + v[y],
          I = O - v[_],
          A = f ? -M[T] / 2 : 0,
          V = S === Jr ? P[T] : M[T],
          W = S === Jr ? -M[T] : -P[T],
          J = e.elements.arrow,
          K = f && J ? ba(J) : { width: 0, height: 0 },
          ie = e.modifiersData["arrow#persistent"]
            ? e.modifiersData["arrow#persistent"].padding
            : cc(),
          ue = ie[y],
          de = ie[_],
          be = Xn(0, P[T], K[T]),
          Ee = E
            ? P[T] / 2 - A - be - ue - L.mainAxis
            : V - be - ue - L.mainAxis,
          rt = E
            ? -P[T] / 2 + A + be + de + L.mainAxis
            : W + be + de + L.mainAxis,
          Oe = e.elements.arrow && Gn(e.elements.arrow),
          $e = Oe ? (h === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0) : 0,
          se = (N = R?.[h]) != null ? N : 0,
          ye = O + Ee - se - $e,
          He = O + rt - se,
          We = Xn(f ? Bs(D, ye) : D, O, f ? Tr(I, He) : I);
        (b[h] = We), (C[h] = We - O);
      }
      if (a) {
        var z,
          Ke = h === "x" ? kt : It,
          Rt = h === "x" ? ai : li,
          Ze = b[x],
          fe = x === "y" ? "height" : "width",
          Et = Ze + v[Ke],
          pt = Ze - v[Rt],
          Zt = [kt, It].indexOf(w) !== -1,
          Ae = (z = R?.[x]) != null ? z : 0,
          Qt = Zt ? Et : Ze - P[fe] - M[fe] - Ae + L.altAxis,
          we = Zt ? Ze + P[fe] + M[fe] - Ae - L.altAxis : pt,
          ht = f && Zt ? bp(Qt, Ze, we) : Xn(f ? Qt : Et, Ze, f ? we : pt);
        (b[x] = ht), (C[x] = ht - Ze);
      }
      e.modifiersData[i] = C;
    }
  }
  const Qp = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Zp,
    requiresIfExists: ["offset"],
  };
  function Jp(r) {
    return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
  }
  function eh(r) {
    return r === jt(r) || !ui(r) ? xa(r) : Jp(r);
  }
  function th(r) {
    var e = r.getBoundingClientRect(),
      t = en(e.width) / r.offsetWidth || 1,
      i = en(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1;
  }
  function ih(r, e, t) {
    t === void 0 && (t = !1);
    var i = ui(e),
      n = ui(e) && th(e),
      s = Qi(e),
      o = tn(r, n, t),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !t)) &&
        ((Ti(e) !== "body" || Ca(s)) && (a = eh(e)),
        ui(e)
          ? ((l = tn(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
          : s && (l.x = Ta(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function rh(r) {
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
  function nh(r) {
    var e = rh(r);
    return gp.reduce(function (t, i) {
      return t.concat(
        e.filter(function (n) {
          return n.phase === i;
        })
      );
    }, []);
  }
  function sh(r) {
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
  function oh(r) {
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
  function ah(r) {
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
            var S = typeof w == "function" ? w(c.options) : w;
            m(),
              (c.options = Object.assign({}, s, c.options, S)),
              (c.scrollParents = {
                reference: xr(a)
                  ? Yn(a)
                  : a.contextElement
                  ? Yn(a.contextElement)
                  : [],
                popper: Yn(l),
              });
            var E = nh(oh([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = E.filter(function (h) {
                return h.enabled;
              })),
              g(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var w = c.elements,
                S = w.reference,
                E = w.popper;
              if (bc(S, E)) {
                (c.rects = {
                  reference: ih(S, Gn(E), c.options.strategy === "fixed"),
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
                for (var h = 0; h < c.orderedModifiers.length; h++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (h = -1);
                    continue;
                  }
                  var x = c.orderedModifiers[h],
                    b = x.fn,
                    P = x.options,
                    M = P === void 0 ? {} : P,
                    k = x.name;
                  typeof b == "function" &&
                    (c =
                      b({ state: c, options: M, name: k, instance: f }) || c);
                }
              }
            }
          },
          update: sh(function () {
            return new Promise(function (v) {
              f.forceUpdate(), v(c);
            });
          }),
          destroy: function () {
            m(), (p = !0);
          },
        };
      if (!bc(a, l)) return f;
      f.setOptions(u).then(function (v) {
        !p && u.onFirstUpdate && u.onFirstUpdate(v);
      });
      function g() {
        c.orderedModifiers.forEach(function (v) {
          var w = v.name,
            S = v.options,
            E = S === void 0 ? {} : S,
            h = v.effect;
          if (typeof h == "function") {
            var x = h({ state: c, name: w, instance: f, options: E }),
              b = function () {};
            d.push(x || b);
          }
        });
      }
      function m() {
        d.forEach(function (v) {
          return v();
        }),
          (d = []);
      }
      return f;
    };
  }
  var lh = [Lp, Up, Mp, oc, Yp, $p, Qp, Cp, Wp],
    uh = ah({ defaultModifiers: lh }),
    ch = "tippy-box",
    Sc = "tippy-content",
    dh = "tippy-backdrop",
    xc = "tippy-arrow",
    Tc = "tippy-svg-arrow",
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
  function fh(r) {
    return r.split(/\s+/).filter(Boolean);
  }
  function nn(r) {
    return [].concat(r);
  }
  function Pc(r, e) {
    r.indexOf(e) === -1 && r.push(e);
  }
  function ph(r) {
    return r.filter(function (e, t) {
      return r.indexOf(e) === t;
    });
  }
  function hh(r) {
    return r.split("-")[0];
  }
  function Hs(r) {
    return [].slice.call(r);
  }
  function Mc(r) {
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
  function mh(r) {
    return Pa(r, "NodeList");
  }
  function gh(r) {
    return Pa(r, "MouseEvent");
  }
  function vh(r) {
    return !!(r && r._tippy && r._tippy.reference === r);
  }
  function _h(r) {
    return Ws(r)
      ? [r]
      : mh(r)
      ? Hs(r)
      : Array.isArray(r)
      ? r
      : Hs(document.querySelectorAll(r));
  }
  function Ma(r, e) {
    r.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function Oc(r, e) {
    r.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function yh(r) {
    var e,
      t = nn(r),
      i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body
      ? i.ownerDocument
      : document;
  }
  function wh(r, e) {
    var t = e.clientX,
      i = e.clientY;
    return r.every(function (n) {
      var s = n.popperRect,
        o = n.popperState,
        a = n.props,
        l = a.interactiveBorder,
        u = hh(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var d = u === "bottom" ? c.top.y : 0,
        p = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        g = u === "left" ? c.right.x : 0,
        m = s.top - i + d > l,
        v = i - s.bottom - p > l,
        w = s.left - t + f > l,
        S = t - s.right - g > l;
      return m || v || w || S;
    });
  }
  function Oa(r, e, t) {
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
  function bh() {
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
  function Sh() {
    var r = document.activeElement;
    if (vh(r)) {
      var e = r._tippy;
      r.blur && !e.state.isVisible && r.blur();
    }
  }
  function xh() {
    document.addEventListener("touchstart", bh, Cr),
      window.addEventListener("blur", Sh);
  }
  var Th = typeof window < "u" && typeof document < "u",
    Ch = Th ? !!window.msCrypto : !1,
    Eh = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Ah = {
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
      Eh,
      Ah
    ),
    Ph = Object.keys(fi),
    Mh = function (e) {
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
  function Oh(r, e) {
    var t = e ? Object.keys(Ic(Object.assign({}, fi, { plugins: e }))) : Ph,
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
      e.ignoreAttributes ? {} : Oh(r, e.plugins)
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
  var Lh = function () {
    return "innerHTML";
  };
  function La(r, e) {
    r[Lh()] = e;
  }
  function zc(r) {
    var e = Un();
    return (
      r === !0
        ? (e.className = xc)
        : ((e.className = Tc), Ws(r) ? e.appendChild(r) : La(e, r)),
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
        return i.classList.contains(xc) || i.classList.contains(Tc);
      }),
      backdrop: t.find(function (i) {
        return i.classList.contains(dh);
      }),
    };
  }
  function Fc(r) {
    var e = Un(),
      t = Un();
    (t.className = ch),
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
  var Dh = 1,
    Gs = [],
    ka = [];
  function kh(r, e) {
    var t = Rc(r, Object.assign({}, fi, Ic(Mc(e)))),
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
      g = Ac(ye, t.interactiveDebounce),
      m,
      v = Dh++,
      w = null,
      S = ph(t.plugins),
      E = {
        isEnabled: !0,
        isVisible: !1,
        isDestroyed: !1,
        isMounted: !1,
        isShown: !1,
      },
      h = {
        id: v,
        reference: r,
        popper: Un(),
        popperInstance: w,
        props: t,
        state: E,
        plugins: S,
        clearDelayTimeouts: Qt,
        setProps: we,
        setContent: ht,
        show: zt,
        hide: pi,
        hideWithInteractivity: Ar,
        enable: Zt,
        disable: Ae,
        unmount: Le,
        destroy: an,
      };
    if (!t.render) return h;
    var x = t.render(h),
      b = x.popper,
      P = x.onUpdate;
    b.setAttribute("data-tippy-root", ""),
      (b.id = "tippy-" + h.id),
      (h.popper = b),
      (r._tippy = h),
      (b._tippy = h);
    var M = S.map(function (F) {
        return F.fn(h);
      }),
      k = r.hasAttribute("aria-expanded");
    return (
      Oe(),
      A(),
      O(),
      D("onCreate", [h]),
      t.showOnCreate && Et(),
      b.addEventListener("mouseenter", function () {
        h.props.interactive && h.state.isVisible && h.clearDelayTimeouts();
      }),
      b.addEventListener("mouseleave", function () {
        h.props.interactive &&
          h.props.trigger.indexOf("mouseenter") >= 0 &&
          y().addEventListener("mousemove", g);
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
    function C() {
      var F;
      return !!((F = h.props.render) != null && F.$$tippy);
    }
    function N() {
      return m || r;
    }
    function y() {
      var F = N().parentNode;
      return F ? yh(F) : document;
    }
    function _() {
      return Da(b);
    }
    function T(F) {
      return (h.state.isMounted && !h.state.isVisible) ||
        Ei.isTouch ||
        (c && c.type === "focus")
        ? 0
        : Aa(h.props.delay, F ? 0 : 1, fi.delay);
    }
    function O(F) {
      F === void 0 && (F = !1),
        (b.style.pointerEvents = h.props.interactive && !F ? "" : "none"),
        (b.style.zIndex = "" + h.props.zIndex);
    }
    function D(F, $, Y) {
      if (
        (Y === void 0 && (Y = !0),
        M.forEach(function (re) {
          re[F] && re[F].apply(re, $);
        }),
        Y)
      ) {
        var le;
        (le = h.props)[F].apply(le, $);
      }
    }
    function I() {
      var F = h.props.aria;
      if (F.content) {
        var $ = "aria-" + F.content,
          Y = b.id,
          le = nn(h.props.triggerTarget || r);
        le.forEach(function (re) {
          var j = re.getAttribute($);
          if (h.state.isVisible) re.setAttribute($, j ? j + " " + Y : Y);
          else {
            var Be = j && j.replace(Y, "").trim();
            Be ? re.setAttribute($, Be) : re.removeAttribute($);
          }
        });
      }
    }
    function A() {
      if (!(k || !h.props.aria.expanded)) {
        var F = nn(h.props.triggerTarget || r);
        F.forEach(function ($) {
          h.props.interactive
            ? $.setAttribute(
                "aria-expanded",
                h.state.isVisible && $ === N() ? "true" : "false"
              )
            : $.removeAttribute("aria-expanded");
        });
      }
    }
    function V() {
      y().removeEventListener("mousemove", g),
        (Gs = Gs.filter(function (F) {
          return F !== g;
        }));
    }
    function W(F) {
      if (!(Ei.isTouch && (l || F.type === "mousedown"))) {
        var $ = (F.composedPath && F.composedPath()[0]) || F.target;
        if (!(h.props.interactive && Lc(b, $))) {
          if (
            nn(h.props.triggerTarget || r).some(function (Y) {
              return Lc(Y, $);
            })
          ) {
            if (
              Ei.isTouch ||
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
            h.state.isMounted || ue());
        }
      }
    }
    function J() {
      l = !0;
    }
    function K() {
      l = !1;
    }
    function ie() {
      var F = y();
      F.addEventListener("mousedown", W, !0),
        F.addEventListener("touchend", W, Cr),
        F.addEventListener("touchstart", K, Cr),
        F.addEventListener("touchmove", J, Cr);
    }
    function ue() {
      var F = y();
      F.removeEventListener("mousedown", W, !0),
        F.removeEventListener("touchend", W, Cr),
        F.removeEventListener("touchstart", K, Cr),
        F.removeEventListener("touchmove", J, Cr);
    }
    function de(F, $) {
      Ee(F, function () {
        !h.state.isVisible && b.parentNode && b.parentNode.contains(b) && $();
      });
    }
    function be(F, $) {
      Ee(F, $);
    }
    function Ee(F, $) {
      var Y = _().box;
      function le(re) {
        re.target === Y && (Oa(Y, "remove", le), $());
      }
      if (F === 0) return $();
      Oa(Y, "remove", d), Oa(Y, "add", le), (d = le);
    }
    function rt(F, $, Y) {
      Y === void 0 && (Y = !1);
      var le = nn(h.props.triggerTarget || r);
      le.forEach(function (re) {
        re.addEventListener(F, $, Y),
          f.push({ node: re, eventType: F, handler: $, options: Y });
      });
    }
    function Oe() {
      R() &&
        (rt("touchstart", se, { passive: !0 }),
        rt("touchend", He, { passive: !0 })),
        fh(h.props.trigger).forEach(function (F) {
          if (F !== "manual")
            switch ((rt(F, se), F)) {
              case "mouseenter":
                rt("mouseleave", He);
                break;
              case "focus":
                rt(Ch ? "focusout" : "blur", We);
                break;
              case "focusin":
                rt("focusout", We);
                break;
            }
        });
    }
    function $e() {
      f.forEach(function (F) {
        var $ = F.node,
          Y = F.eventType,
          le = F.handler,
          re = F.options;
        $.removeEventListener(Y, le, re);
      }),
        (f = []);
    }
    function se(F) {
      var $,
        Y = !1;
      if (!(!h.state.isEnabled || z(F) || a)) {
        var le = (($ = c) == null ? void 0 : $.type) === "focus";
        (c = F),
          (m = F.currentTarget),
          A(),
          !h.state.isVisible &&
            gh(F) &&
            Gs.forEach(function (re) {
              return re(F);
            }),
          F.type === "click" &&
          (h.props.trigger.indexOf("mouseenter") < 0 || o) &&
          h.props.hideOnClick !== !1 &&
          h.state.isVisible
            ? (Y = !0)
            : Et(F),
          F.type === "click" && (o = !Y),
          Y && !le && pt(F);
      }
    }
    function ye(F) {
      var $ = F.target,
        Y = N().contains($) || b.contains($);
      if (!(F.type === "mousemove" && Y)) {
        var le = fe()
          .concat(b)
          .map(function (re) {
            var j,
              Be = re._tippy,
              Qe = (j = Be.popperInstance) == null ? void 0 : j.state;
            return Qe
              ? {
                  popperRect: re.getBoundingClientRect(),
                  popperState: Qe,
                  props: t,
                }
              : null;
          })
          .filter(Boolean);
        wh(le, F) && (V(), pt(F));
      }
    }
    function He(F) {
      var $ = z(F) || (h.props.trigger.indexOf("click") >= 0 && o);
      if (!$) {
        if (h.props.interactive) {
          h.hideWithInteractivity(F);
          return;
        }
        pt(F);
      }
    }
    function We(F) {
      (h.props.trigger.indexOf("focusin") < 0 && F.target !== N()) ||
        (h.props.interactive &&
          F.relatedTarget &&
          b.contains(F.relatedTarget)) ||
        pt(F);
    }
    function z(F) {
      return Ei.isTouch ? R() !== F.type.indexOf("touch") >= 0 : !1;
    }
    function Ke() {
      Rt();
      var F = h.props,
        $ = F.popperOptions,
        Y = F.placement,
        le = F.offset,
        re = F.getReferenceClientRect,
        j = F.moveTransition,
        Be = C() ? Da(b).arrow : null,
        Qe = re
          ? {
              getBoundingClientRect: re,
              contextElement: re.contextElement || N(),
            }
          : r,
        Nt = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (mi) {
            var mt = mi.state;
            if (C()) {
              var Pr = _(),
                Q = Pr.box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                X
              ) {
                X === "placement"
                  ? Q.setAttribute("data-placement", mt.placement)
                  : mt.attributes.popper["data-popper-" + X]
                  ? Q.setAttribute("data-" + X, "")
                  : Q.removeAttribute("data-" + X);
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
          { name: "computeStyles", options: { adaptive: !j } },
          Nt,
        ];
      C() &&
        Be &&
        Ge.push({ name: "arrow", options: { element: Be, padding: 3 } }),
        Ge.push.apply(Ge, $?.modifiers || []),
        (h.popperInstance = uh(
          Qe,
          b,
          Object.assign({}, $, {
            placement: Y,
            onFirstUpdate: p,
            modifiers: Ge,
          })
        ));
    }
    function Rt() {
      h.popperInstance &&
        (h.popperInstance.destroy(), (h.popperInstance = null));
    }
    function Ze() {
      var F = h.props.appendTo,
        $,
        Y = N();
      (h.props.interactive && F === Cc) || F === "parent"
        ? ($ = Y.parentNode)
        : ($ = Ec(F, [Y])),
        $.contains(b) || $.appendChild(b),
        (h.state.isMounted = !0),
        Ke();
    }
    function fe() {
      return Hs(b.querySelectorAll("[data-tippy-root]"));
    }
    function Et(F) {
      h.clearDelayTimeouts(), F && D("onTrigger", [h, F]), ie();
      var $ = T(!0),
        Y = L(),
        le = Y[0],
        re = Y[1];
      Ei.isTouch && le === "hold" && re && ($ = re),
        $
          ? (i = setTimeout(function () {
              h.show();
            }, $))
          : h.show();
    }
    function pt(F) {
      if (
        (h.clearDelayTimeouts(), D("onUntrigger", [h, F]), !h.state.isVisible)
      ) {
        ue();
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
        var $ = T(!1);
        $
          ? (n = setTimeout(function () {
              h.state.isVisible && h.hide();
            }, $))
          : (s = requestAnimationFrame(function () {
              h.hide();
            }));
      }
    }
    function Zt() {
      h.state.isEnabled = !0;
    }
    function Ae() {
      h.hide(), (h.state.isEnabled = !1);
    }
    function Qt() {
      clearTimeout(i), clearTimeout(n), cancelAnimationFrame(s);
    }
    function we(F) {
      if (!h.state.isDestroyed) {
        D("onBeforeUpdate", [h, F]), $e();
        var $ = h.props,
          Y = Rc(r, Object.assign({}, $, Mc(F), { ignoreAttributes: !0 }));
        (h.props = Y),
          Oe(),
          $.interactiveDebounce !== Y.interactiveDebounce &&
            (V(), (g = Ac(ye, Y.interactiveDebounce))),
          $.triggerTarget && !Y.triggerTarget
            ? nn($.triggerTarget).forEach(function (le) {
                le.removeAttribute("aria-expanded");
              })
            : Y.triggerTarget && r.removeAttribute("aria-expanded"),
          A(),
          O(),
          P && P($, Y),
          h.popperInstance &&
            (Ke(),
            fe().forEach(function (le) {
              requestAnimationFrame(le._tippy.popperInstance.forceUpdate);
            })),
          D("onAfterUpdate", [h, F]);
      }
    }
    function ht(F) {
      h.setProps({ content: F });
    }
    function zt() {
      var F = h.state.isVisible,
        $ = h.state.isDestroyed,
        Y = !h.state.isEnabled,
        le = Ei.isTouch && !h.props.touch,
        re = Aa(h.props.duration, 0, fi.duration);
      if (
        !(F || $ || Y || le) &&
        !N().hasAttribute("disabled") &&
        (D("onShow", [h], !1), h.props.onShow(h) !== !1)
      ) {
        if (
          ((h.state.isVisible = !0),
          C() && (b.style.visibility = "visible"),
          O(),
          ie(),
          h.state.isMounted || (b.style.transition = "none"),
          C())
        ) {
          var j = _(),
            Be = j.box,
            Qe = j.content;
          Ma([Be, Qe], 0);
        }
        (p = function () {
          var Ge;
          if (!(!h.state.isVisible || u)) {
            if (
              ((u = !0),
              (b.style.transition = h.props.moveTransition),
              C() && h.props.animation)
            ) {
              var hi = _(),
                mi = hi.box,
                mt = hi.content;
              Ma([mi, mt], re), Oc([mi, mt], "visible");
            }
            I(),
              A(),
              Pc(ka, h),
              (Ge = h.popperInstance) == null || Ge.forceUpdate(),
              D("onMount", [h]),
              h.props.animation &&
                C() &&
                be(re, function () {
                  (h.state.isShown = !0), D("onShown", [h]);
                });
          }
        }),
          Ze();
      }
    }
    function pi() {
      var F = !h.state.isVisible,
        $ = h.state.isDestroyed,
        Y = !h.state.isEnabled,
        le = Aa(h.props.duration, 1, fi.duration);
      if (!(F || $ || Y) && (D("onHide", [h], !1), h.props.onHide(h) !== !1)) {
        if (
          ((h.state.isVisible = !1),
          (h.state.isShown = !1),
          (u = !1),
          (o = !1),
          C() && (b.style.visibility = "hidden"),
          V(),
          ue(),
          O(!0),
          C())
        ) {
          var re = _(),
            j = re.box,
            Be = re.content;
          h.props.animation && (Ma([j, Be], le), Oc([j, Be], "hidden"));
        }
        I(), A(), h.props.animation ? C() && de(le, h.unmount) : h.unmount();
      }
    }
    function Ar(F) {
      y().addEventListener("mousemove", g), Pc(Gs, g), g(F);
    }
    function Le() {
      h.state.isVisible && h.hide(),
        h.state.isMounted &&
          (Rt(),
          fe().forEach(function (F) {
            F._tippy.unmount();
          }),
          b.parentNode && b.parentNode.removeChild(b),
          (ka = ka.filter(function (F) {
            return F !== h;
          })),
          (h.state.isMounted = !1),
          D("onHidden", [h]));
    }
    function an() {
      h.state.isDestroyed ||
        (h.clearDelayTimeouts(),
        h.unmount(),
        $e(),
        delete r._tippy,
        (h.state.isDestroyed = !0),
        D("onDestroy", [h]));
    }
  }
  function Kn(r, e) {
    e === void 0 && (e = {});
    var t = fi.plugins.concat(e.plugins || []);
    xh();
    var i = Object.assign({}, e, { plugins: t }),
      n = _h(r),
      s = n.reduce(function (o, a) {
        var l = a && kh(a, i);
        return l && o.push(l), o;
      }, []);
    return Ws(r) ? s[0] : s;
  }
  (Kn.defaultProps = fi),
    (Kn.setDefaultProps = Mh),
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
  const Ih = () => {
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
    Rh = () => {
      Ih();
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
    zh = () => {
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
  const Nh = {
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
    return Ra(r, Nh), r;
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
  function Fh(r) {
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
  function Bh(r) {
    const e = ft();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(r, null)),
      !t && r.currentStyle && (t = r.currentStyle),
      t || (t = r.style),
      t
    );
  }
  function Vh(r, e) {
    e === void 0 && (e = "x");
    const t = ft();
    let i, n, s;
    const o = Bh(r);
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
  function qh(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? r instanceof HTMLElement
      : r && (r.nodeType === 1 || r.nodeType === 11);
  }
  function Ut() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !qh(i)) {
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
        let g = s + f * (t - s);
        if ((c(g, t) && (g = t), e.wrapperEl.scrollTo({ [i]: g }), c(g, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: g });
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
  function $h(r, e) {
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
  function Hh(r, e) {
    const t = ft();
    let i = e.contains(r);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(r)), i || (i = $h(r, e))),
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
  function Wh(r) {
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
  function Gh(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
      const i = r.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function Xh(r, e) {
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
  function Yh(r, e) {
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
  function jh(r) {
    return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
  }
  let za;
  function Uh() {
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
    return za || (za = Uh()), za;
  }
  let Na;
  function Kh(r) {
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
    let g = n === "MacIntel";
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
        g &&
        t.touch &&
        m.indexOf(`${a}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (g = !1)),
      u && !f && ((o.os = "android"), (o.android = !0)),
      (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function Yc(r) {
    return r === void 0 && (r = {}), Na || (Na = Kh(r)), Na;
  }
  let Fa;
  function Zh() {
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
    return Fa || (Fa = Zh()), Fa;
  }
  function Qh(r) {
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
              let g = p,
                m = f;
              d.forEach((v) => {
                let { contentBoxSize: w, contentRect: S, target: E } = v;
                (E && E !== e.el) ||
                  ((g = S ? S.width : (w[0] || w).inlineSize),
                  (m = S ? S.height : (w[0] || w).blockSize));
              }),
                (g !== p || m !== f) && a();
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
  function Jh(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = [],
      o = ft(),
      a = function (c, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver,
          f = new p((g) => {
            if (e.__preventObserver__) return;
            if (g.length === 1) {
              n("observerUpdate", g[0]);
              return;
            }
            const m = function () {
              n("observerUpdate", g[0]);
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
            const c = Yh(e.hostEl);
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
  var em = {
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
  function tm() {
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
  function im() {
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
      g = [];
    let m = t.slidesOffsetBefore;
    typeof m == "function" && (m = t.slidesOffsetBefore.call(r));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(r));
    const w = r.snapGrid.length,
      S = r.slidesGrid.length;
    let E = t.spaceBetween,
      h = -m,
      x = 0,
      b = 0;
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
          const C = getComputedStyle(R),
            N = R.style.transform,
            y = R.style.webkitTransform;
          if (
            (N && (R.style.transform = "none"),
            y && (R.style.webkitTransform = "none"),
            t.roundLengths)
          )
            M = r.isHorizontal() ? Gc(R, "width") : Gc(R, "height");
          else {
            const _ = e(C, "width"),
              T = e(C, "padding-left"),
              O = e(C, "padding-right"),
              D = e(C, "margin-left"),
              I = e(C, "margin-right"),
              A = C.getPropertyValue("box-sizing");
            if (A && A === "border-box") M = _ + D + I;
            else {
              const { clientWidth: V, offsetWidth: W } = R;
              M = _ + T + O + D + I + (W - V);
            }
          }
          N && (R.style.transform = N),
            y && (R.style.webkitTransform = y),
            t.roundLengths && (M = Math.floor(M));
        } else
          (M = (s - (t.slidesPerView - 1) * E) / t.slidesPerView),
            t.roundLengths && (M = Math.floor(M)),
            c[L] && (c[L].style[r.getDirectionLabel("width")] = `${M}px`);
        c[L] && (c[L].swiperSlideSize = M),
          g.push(M),
          t.centeredSlides
            ? ((h = h + M / 2 + x / 2 + E),
              x === 0 && L !== 0 && (h = h - s / 2 - E),
              L === 0 && (h = h - s / 2 - E),
              Math.abs(h) < 1 / 1e3 && (h = 0),
              t.roundLengths && (h = Math.floor(h)),
              b % t.slidesPerGroup === 0 && p.push(h),
              f.push(h))
            : (t.roundLengths && (h = Math.floor(h)),
              (b - Math.min(r.params.slidesPerGroupSkip, b)) %
                r.params.slidesPerGroup ===
                0 && p.push(h),
              f.push(h),
              (h = h + M + E)),
          (r.virtualSize += M + E),
          (x = M),
          (b += 1);
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
        let C = p[R];
        t.roundLengths && (C = Math.floor(C)),
          p[R] <= r.virtualSize - s && L.push(C);
      }
      (p = L),
        Math.floor(r.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(r.virtualSize - s);
    }
    if (l && t.loop) {
      const L = g[0] + E;
      if (t.slidesPerGroup > 1) {
        const R = Math.ceil(
            (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
          ),
          C = L * t.slidesPerGroup;
        for (let N = 0; N < R; N += 1) p.push(p[p.length - 1] + C);
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
      c.filter((R, C) =>
        !t.cssMode || t.loop ? !0 : C !== c.length - 1
      ).forEach((R) => {
        R.style[L] = `${E}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let L = 0;
      g.forEach((C) => {
        L += C + (E || 0);
      }),
        (L -= E);
      const R = L > s ? L - s : 0;
      p = p.map((C) => (C <= 0 ? -m : C > R ? R + v : C));
    }
    if (t.centerInsufficientSlides) {
      let L = 0;
      g.forEach((C) => {
        L += C + (E || 0);
      }),
        (L -= E);
      const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (L + R < s) {
        const C = (s - L - R) / 2;
        p.forEach((N, y) => {
          p[y] = N - C;
        }),
          f.forEach((N, y) => {
            f[y] = N + C;
          });
      }
    }
    if (
      (Object.assign(r, {
        slides: c,
        snapGrid: p,
        slidesGrid: f,
        slidesSizesGrid: g,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Us(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        Us(
          i,
          "--swiper-centered-offset-after",
          `${r.size / 2 - g[g.length - 1] / 2}px`
        );
      const L = -r.snapGrid[0],
        R = -r.slidesGrid[0];
      (r.snapGrid = r.snapGrid.map((C) => C + L)),
        (r.slidesGrid = r.slidesGrid.map((C) => C + R));
    }
    if (
      (d !== u && r.emit("slidesLengthChange"),
      p.length !== w &&
        (r.params.watchOverflow && r.checkOverflow(),
        r.emit("snapGridLengthChange")),
      f.length !== S && r.emit("slidesGridLengthChange"),
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
  function rm(r) {
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
  function nm() {
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
  function sm(r) {
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
        g = f + e.slidesSizesGrid[l],
        m = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
        v =
          (f >= 0 && f < e.size - 1) ||
          (g > 1 && g <= e.size) ||
          (f <= 0 && g >= e.size);
      v && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        Uc(u, v, t.slideVisibleClass),
        Uc(u, m, t.slideFullyVisibleClass),
        (u.progress = n ? -d : d),
        (u.originalProgress = n ? -p : p);
    }
  }
  function om(r) {
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
        g = e.slidesGrid[e.slidesGrid.length - 1],
        m = Math.abs(r);
      m >= p ? (a = (m - p) / g) : (a = (m + g - f) / g), a > 1 && (a -= 1);
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
  function am() {
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
        ((c = Xh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Gh(l, `.${t.slideClass}, swiper-slide`)[0]),
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
  function lm(r) {
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
  function um(r) {
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
      let g = f - e.virtual.slidesBefore;
      return (
        g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
      );
    };
    if ((typeof l > "u" && (l = lm(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
      let g = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(f), 0)),
        (p = Math.floor(g / n.grid.rows));
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
  function cm(r, e) {
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
  var dm = {
    updateSize: tm,
    updateSlides: im,
    updateAutoHeight: rm,
    updateSlidesOffset: nm,
    updateSlidesProgress: sm,
    updateProgress: om,
    updateSlidesClasses: am,
    updateActiveIndex: um,
    updateClickedSlide: cm,
  };
  function fm(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -n : n;
    if (t.cssMode) return n;
    let o = Vh(s, r);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function pm(r, e) {
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
  function hm() {
    return -this.snapGrid[0];
  }
  function mm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function gm(r, e, t, i, n) {
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
  var vm = {
    getTranslate: fm,
    setTranslate: pm,
    minTranslate: hm,
    maxTranslate: mm,
    translateTo: gm,
  };
  function _m(r, e) {
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
  function ym(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Kc({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
  }
  function wm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Kc({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
  }
  var bm = { setTransition: _m, transitionStart: ym, transitionEnd: wm };
  function Sm(r, e, t, i, n) {
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
      enabled: g,
    } = s;
    if (
      (!g && !i && !n) ||
      s.destroyed ||
      (s.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const m = Math.min(s.params.slidesPerGroupSkip, o);
    let v = m + Math.floor((o - m) / s.params.slidesPerGroup);
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
    let S;
    o > d ? (S = "next") : o < d ? (S = "prev") : (S = "reset");
    const E = s.virtual && s.params.virtual.enabled;
    if (!(E && n) && ((p && -w === s.translate) || (!p && w === s.translate)))
      return (
        s.updateActiveIndex(o),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== "slide" && s.setTranslate(w),
        S !== "reset" && (s.transitionStart(t, S), s.transitionEnd(t, S)),
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
    const b = jc().isSafari;
    return (
      E && !n && b && s.isElement && s.virtual.update(!1, !1, o),
      s.setTransition(e),
      s.setTranslate(w),
      s.updateActiveIndex(o),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, S),
      e === 0
        ? s.transitionEnd(t, S)
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
                  s.transitionEnd(t, S)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function xm(r, e, t, i) {
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
  function Tm(r, e, t) {
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
  function Cm(r, e, t) {
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
    function p(S) {
      return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
    }
    const f = p(d),
      g = s.map((S) => p(S)),
      m = n.freeMode && n.freeMode.enabled;
    let v = s[g.indexOf(f) - 1];
    if (typeof v > "u" && (n.cssMode || m)) {
      let S;
      s.forEach((E, h) => {
        f >= E && (S = h);
      }),
        typeof S < "u" && (v = m ? s[S] : s[S > 0 ? S - 1 : S]);
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
      const S =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(S, r, e, t);
    } else if (n.loop && i.activeIndex === 0 && n.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(w, r, e, t);
        }),
        !0
      );
    return i.slideTo(w, r, e, t);
  }
  function Em(r, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof r > "u" && (r = i.params.speed),
        i.slideTo(i.activeIndex, r, e, t)
      );
  }
  function Am(r, e, t, i) {
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
  function Pm() {
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
  var Mm = {
    slideTo: Sm,
    slideToLoop: xm,
    slideNext: Tm,
    slidePrev: Cm,
    slideReset: Em,
    slideToClosest: Am,
    slideToClickedSlide: Pm,
  };
  function Om(r, e) {
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
  function Lm(r) {
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
        params: g,
      } = u,
      { centeredSlides: m, initialSlide: v } = g;
    if (
      ((u.allowSlidePrev = !0),
      (u.allowSlideNext = !0),
      u.virtual && g.virtual.enabled)
    ) {
      t &&
        (!g.centeredSlides && u.snapIndex === 0
          ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
          : g.centeredSlides && u.snapIndex < g.slidesPerView
          ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
          : u.snapIndex === u.snapGrid.length - 1 &&
            u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
        (u.allowSlidePrev = d),
        (u.allowSlideNext = p),
        u.emit("loopFix");
      return;
    }
    let w = g.slidesPerView;
    w === "auto"
      ? (w = u.slidesPerViewDynamic())
      : ((w = Math.ceil(parseFloat(g.slidesPerView, 10))),
        m && w % 2 === 0 && (w = w + 1));
    const S = g.slidesPerGroupAuto ? w : g.slidesPerGroup;
    let E = S;
    E % S !== 0 && (E += S - (E % S)),
      (E += g.loopAdditionalSlides),
      (u.loopedSlides = E);
    const h = u.grid && g.grid && g.grid.rows > 1;
    c.length < w + E || (u.params.effect === "cards" && c.length < w + E * 2)
      ? Ks(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : h &&
        g.grid.fill === "row" &&
        Ks(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const x = [],
      b = [],
      P = h ? Math.ceil(c.length / g.grid.rows) : c.length,
      M = o && P - v < w && !m;
    let k = M ? v : u.activeIndex;
    typeof s > "u"
      ? (s = u.getSlideIndex(
          c.find((T) => T.classList.contains(g.slideActiveClass))
        ))
      : (k = s);
    const L = i === "next" || !i,
      R = i === "prev" || !i;
    let C = 0,
      N = 0;
    const _ = (h ? c[s].column : s) + (m && typeof n > "u" ? -w / 2 + 0.5 : 0);
    if (_ < E) {
      C = Math.max(E - _, S);
      for (let T = 0; T < E - _; T += 1) {
        const O = T - Math.floor(T / P) * P;
        if (h) {
          const D = P - O - 1;
          for (let I = c.length - 1; I >= 0; I -= 1)
            c[I].column === D && x.push(I);
        } else x.push(P - O - 1);
      }
    } else if (_ + w > P - E) {
      (N = Math.max(_ - (P - E * 2), S)), M && (N = Math.max(N, w - P + v + 1));
      for (let T = 0; T < N; T += 1) {
        const O = T - Math.floor(T / P) * P;
        h
          ? c.forEach((D, I) => {
              D.column === O && b.push(I);
            })
          : b.push(O);
      }
    }
    if (
      ((u.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        u.__preventObserver__ = !1;
      }),
      u.params.effect === "cards" &&
        c.length < w + E * 2 &&
        (b.includes(s) && b.splice(b.indexOf(s), 1),
        x.includes(s) && x.splice(x.indexOf(s), 1)),
      R &&
        x.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.prepend(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      L &&
        b.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.append(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      u.recalcSlides(),
      g.slidesPerView === "auto"
        ? u.updateSlides()
        : h &&
          ((x.length > 0 && R) || (b.length > 0 && L)) &&
          u.slides.forEach((T, O) => {
            u.grid.updateSlide(O, T, u.slides);
          }),
      g.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (x.length > 0 && R) {
        if (typeof e > "u") {
          const T = u.slidesGrid[k],
            D = u.slidesGrid[k + C] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k + Math.ceil(C), 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else if (n) {
          const T = h ? x.length / g.grid.rows : x.length;
          u.slideTo(u.activeIndex + T, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (b.length > 0 && L)
        if (typeof e > "u") {
          const T = u.slidesGrid[k],
            D = u.slidesGrid[k - N] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k - N, 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else {
          const T = h ? b.length / g.grid.rows : b.length;
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
              O.loopFix({
                ...T,
                slideTo: O.params.slidesPerView === g.slidesPerView ? t : !1,
              });
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix({
            ...T,
            slideTo:
              u.controller.control.params.slidesPerView === g.slidesPerView
                ? t
                : !1,
          });
    }
    u.emit("loopFix");
  }
  function Dm() {
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
  var km = { loopCreate: Om, loopFix: Lm, loopDestroy: Dm };
  function Im(r) {
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
  function Rm() {
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
  var zm = { setGrabCursor: Im, unsetGrabCursor: Rm };
  function Nm(r, e) {
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
  function Fm(r) {
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
      (s.touchEventsTarget === "wrapper" && !Hh(l, e.wrapperEl)) ||
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
    if (s.noSwiping && (p ? Nm(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const f = o.currentX,
      g = o.currentY;
    if (!Zc(e, i, f)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = f),
      (o.startY = g),
      (n.touchStartTime = Ys()),
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
    const v = m && e.allowTouchMove && s.touchStartPreventDefault;
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
  function Bm(r) {
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
        ((u = [...l.changedTouches].find((b) => b.identifier === i.touchId)),
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
      let b;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : p * p + f * f >= 25 &&
          ((b = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? b > n.touchAngle
            : 90 - b > n.touchAngle));
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
    let g = t.isHorizontal() ? p : f,
      m = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((g = Math.abs(g) * (o ? 1 : -1)), (m = Math.abs(m) * (o ? 1 : -1))),
      (s.diff = g),
      (g *= n.touchRatio),
      o && ((g = -g), (m = -m));
    const v = t.touchesDirection;
    (t.swipeDirection = g > 0 ? "prev" : "next"),
      (t.touchesDirection = m > 0 ? "prev" : "next");
    const w = t.params.loop && !n.cssMode,
      S =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (w && S && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const b = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(b);
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
        S &&
        Math.abs(g) >= 1)
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
      (i.currentTranslate = g + i.startTranslate);
    let h = !0,
      x = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (w &&
            S &&
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
            ((h = !1),
            n.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + g) ** x)))
        : g < 0 &&
          (w &&
            S &&
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
            ((h = !1),
            n.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - g) ** x))),
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
      if (Math.abs(g) > n.threshold || i.allowThresholdMove) {
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
  function Vm(r) {
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
    const d = Ys(),
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
    const g = f >= -e.maxTranslate() && !e.params.loop;
    let m = 0,
      v = e.slidesSizesGrid[0];
    for (
      let x = 0;
      x < u.length;
      x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const b = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[x + b] < "u"
        ? (g || (f >= u[x] && f < u[x + b])) && ((m = x), (v = u[x + b] - u[x]))
        : (g || f >= u[x]) &&
          ((m = x), (v = u[u.length - 1] - u[u.length - 2]));
    }
    let w = null,
      S = null;
    o.rewind &&
      (e.isBeginning
        ? (S =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (w = 0));
    const E = (f - u[m]) / v,
      h = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (E >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? w : m + h)
          : e.slideTo(m)),
        e.swipeDirection === "prev" &&
          (E > 1 - o.longSwipesRatio
            ? e.slideTo(m + h)
            : S !== null && E < 0 && Math.abs(E) > o.longSwipesRatio
            ? e.slideTo(S)
            : e.slideTo(m));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(m + h)
          : e.slideTo(m)
        : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : m + h),
          e.swipeDirection === "prev" && e.slideTo(S !== null ? S : m));
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
  function qm(r) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && r.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (r.stopPropagation(), r.stopImmediatePropagation())));
  }
  function $m() {
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
  function Hm(r) {
    const e = this;
    Zs(e, r.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Wm() {
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
  function Gm() {
    const r = this,
      { params: e } = r;
    (r.onTouchStart = Fm.bind(r)),
      (r.onTouchMove = Bm.bind(r)),
      (r.onTouchEnd = Vm.bind(r)),
      (r.onDocumentTouchStart = Wm.bind(r)),
      e.cssMode && (r.onScroll = $m.bind(r)),
      (r.onClick = qm.bind(r)),
      (r.onLoad = Hm.bind(r)),
      Jc(r, "on");
  }
  function Xm() {
    Jc(this, "off");
  }
  var Ym = { attachEvents: Gm, detachEvents: Xm };
  const ed = (r, e) => r.grid && e.grid && e.grid.rows > 1;
  function jm() {
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
      g = r.params.grabCursor,
      m = d.grabCursor,
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
      g && !m ? r.unsetGrabCursor() : !g && m && r.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((b) => {
        if (typeof d[b] > "u") return;
        const P = i[b] && i[b].enabled,
          M = d[b] && d[b].enabled;
        P && !M && r[b].disable(), !P && M && r[b].enable();
      });
    const w = d.direction && d.direction !== i.direction,
      S = i.loop && (d.slidesPerView !== i.slidesPerView || w),
      E = i.loop;
    w && t && r.changeDirection(), Ut(r.params, d);
    const h = r.params.enabled,
      x = r.params.loop;
    Object.assign(r, {
      allowTouchMove: r.params.allowTouchMove,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
    }),
      v && !h ? r.disable() : !v && h && r.enable(),
      (r.currentBreakpoint = u),
      r.emit("_beforeBreakpoint", d),
      t &&
        (S
          ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
          : !E && x
          ? (r.loopCreate(e), r.updateSlides())
          : E && !x && r.loopDestroy()),
      r.emit("breakpoint", d);
  }
  function Um(r, e, t) {
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
  var Km = { setBreakpoint: jm, getBreakpoint: Um };
  function Zm(r, e) {
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
  function Qm() {
    const r = this,
      { classNames: e, params: t, rtl: i, el: n, device: s } = r,
      o = Zm(
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
  function Jm() {
    const r = this,
      { el: e, classNames: t } = r;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), r.emitContainerClasses());
  }
  var eg = { addClasses: Qm, removeClasses: Jm };
  function tg() {
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
  var ig = { checkOverflow: tg },
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
  function rg(r, e) {
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
      eventsEmitter: em,
      update: dm,
      translate: vm,
      transition: bm,
      slide: Mm,
      loop: km,
      grabCursor: zm,
      events: Ym,
      breakpoints: Km,
      checkOverflow: ig,
      classes: eg,
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
          extendParams: rg(t, l),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Fh(i)),
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
    Kt.use([Qh, Jh]);
  function ng(r, e, t, i) {
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
  function sg(r) {
    return (
      r === void 0 && (r = ""),
      `.${r
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function og(r) {
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
      const { scrollbar: C, rtlTranslate: N } = e,
        { dragEl: y, el: _ } = C,
        T = e.params.scrollbar,
        O = e.params.loop ? e.progressLoop : e.progress;
      let D = c,
        I = (d - c) * O;
      N
        ? ((I = -I), I > 0 ? ((D = c - I), (I = 0)) : -I + c > d && (D = d + I))
        : I < 0
        ? ((D = c + I), (I = 0))
        : I + c > d && (D = d - I),
        e.isHorizontal()
          ? ((y.style.transform = `translate3d(${I}px, 0, 0)`),
            (y.style.width = `${D}px`))
          : ((y.style.transform = `translate3d(0px, ${I}px, 0)`),
            (y.style.height = `${D}px`)),
        T.hide &&
          (clearTimeout(a),
          (_.style.opacity = 1),
          (a = setTimeout(() => {
            (_.style.opacity = 0), (_.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function g(C) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${C}ms`);
    }
    function m() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: C } = e,
        { dragEl: N, el: y } = C;
      (N.style.width = ""),
        (N.style.height = ""),
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
          ? (N.style.width = `${c}px`)
          : (N.style.height = `${c}px`),
        p >= 1 ? (y.style.display = "none") : (y.style.display = ""),
        e.params.scrollbar.hide && (y.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          C.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function v(C) {
      return e.isHorizontal() ? C.clientX : C.clientY;
    }
    function w(C) {
      const { scrollbar: N, rtlTranslate: y } = e,
        { el: _ } = N;
      let T;
      (T =
        (v(C) -
          Wh(_)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (d - c)),
        (T = Math.max(Math.min(T, 1), 0)),
        y && (T = 1 - T);
      const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * T;
      e.updateProgress(O),
        e.setTranslate(O),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function S(C) {
      const N = e.params.scrollbar,
        { scrollbar: y, wrapperEl: _ } = e,
        { el: T, dragEl: O } = y;
      (o = !0),
        (u =
          C.target === O
            ? v(C) -
              C.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        C.preventDefault(),
        C.stopPropagation(),
        (_.style.transitionDuration = "100ms"),
        (O.style.transitionDuration = "100ms"),
        w(C),
        clearTimeout(l),
        (T.style.transitionDuration = "0ms"),
        N.hide && (T.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        n("scrollbarDragStart", C);
    }
    function E(C) {
      const { scrollbar: N, wrapperEl: y } = e,
        { el: _, dragEl: T } = N;
      o &&
        (C.preventDefault && C.cancelable
          ? C.preventDefault()
          : (C.returnValue = !1),
        w(C),
        (y.style.transitionDuration = "0ms"),
        (_.style.transitionDuration = "0ms"),
        (T.style.transitionDuration = "0ms"),
        n("scrollbarDragMove", C));
    }
    function h(C) {
      const N = e.params.scrollbar,
        { scrollbar: y, wrapperEl: _ } = e,
        { el: T } = y;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (_.style.transitionDuration = "")),
        N.hide &&
          (clearTimeout(l),
          (l = Xs(() => {
            (T.style.opacity = 0), (T.style.transitionDuration = "400ms");
          }, 1e3))),
        n("scrollbarDragEnd", C),
        N.snapOnRelease && e.slideToClosest());
    }
    function x(C) {
      const { scrollbar: N, params: y } = e,
        _ = N.el;
      if (!_) return;
      const T = _,
        O = y.passiveListeners ? { passive: !1, capture: !1 } : !1,
        D = y.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!T) return;
      const I = C === "on" ? "addEventListener" : "removeEventListener";
      T[I]("pointerdown", S, O),
        s[I]("pointermove", E, O),
        s[I]("pointerup", h, D);
    }
    function b() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function P() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function M() {
      const { scrollbar: C, el: N } = e;
      e.params.scrollbar = ng(
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
        N.querySelectorAll(y.el).length === 1 &&
        (_ = N.querySelector(y.el)),
        _.length > 0 && (_ = _[0]),
        _.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass);
      let T;
      _ &&
        ((T = _.querySelector(sg(e.params.scrollbar.dragClass))),
        T || ((T = Zn("div", e.params.scrollbar.dragClass)), _.append(T))),
        Object.assign(C, { el: _, dragEl: T }),
        y.draggable && b(),
        _ &&
          _.classList[e.enabled ? "remove" : "add"](
            ...Ji(e.params.scrollbar.lockClass)
          );
    }
    function k() {
      const C = e.params.scrollbar,
        N = e.scrollbar.el;
      N &&
        N.classList.remove(
          ...Ji(e.isHorizontal() ? C.horizontalClass : C.verticalClass)
        ),
        P();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const C = e.params.scrollbar;
      let { el: N } = e.scrollbar;
      (N = jh(N)),
        N.forEach((y) => {
          y.classList.remove(C.horizontalClass, C.verticalClass),
            y.classList.add(
              e.isHorizontal() ? C.horizontalClass : C.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? R() : (M(), m(), f());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        m();
      }),
      i("setTranslate", () => {
        f();
      }),
      i("setTransition", (C, N) => {
        g(N);
      }),
      i("enable disable", () => {
        const { el: C } = e.scrollbar;
        C &&
          C.classList[e.enabled ? "remove" : "add"](
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
          m(),
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
      updateSize: m,
      setTranslate: f,
      init: M,
      destroy: k,
    });
  }
  function ag(r) {
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
      g,
      m,
      v,
      w,
      S;
    function E(D) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (D.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", E),
          !(S || (D.detail && D.detail.bySwiperTouchMove)) && L()));
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
      x = () => {
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
      b = (D) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(a), h();
        let I = typeof D > "u" ? e.params.autoplay.delay : D;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const A = x();
        !Number.isNaN(A) &&
          A > 0 &&
          typeof D > "u" &&
          ((I = A), (l = A), (u = A)),
          (c = I);
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
                  b();
                })));
          };
        return (
          I > 0
            ? (clearTimeout(o),
              (o = setTimeout(() => {
                W();
              }, I)))
            : requestAnimationFrame(() => {
                W();
              }),
          I
        );
      },
      P = () => {
        (d = new Date().getTime()),
          (e.autoplay.running = !0),
          b(),
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
        const A = () => {
          n("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", E)
              : L();
        };
        if (((e.autoplay.paused = !0), I)) {
          v && (c = e.params.autoplay.delay), (v = !1), A();
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
          w ? ((w = !1), b(c)) : b(),
          (e.autoplay.paused = !1),
          n("autoplayResume"));
      },
      R = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const D = ci();
        D.visibilityState === "hidden" && ((w = !0), k(!0)),
          D.visibilityState === "visible" && L();
      },
      C = (D) => {
        D.pointerType === "mouse" &&
          ((w = !0), (S = !0), !(e.animating || e.autoplay.paused) && k(!0));
      },
      N = (D) => {
        D.pointerType === "mouse" && ((S = !1), e.autoplay.paused && L());
      },
      y = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", C),
          e.el.addEventListener("pointerleave", N));
      },
      _ = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", C),
          e.el.removeEventListener("pointerleave", N));
      },
      T = () => {
        ci().addEventListener("visibilitychange", R);
      },
      O = () => {
        ci().removeEventListener("visibilitychange", R);
      };
    i("init", () => {
      e.params.autoplay.enabled && (y(), T(), P());
    }),
      i("destroy", () => {
        _(), O(), e.autoplay.running && M();
      }),
      i("_freeModeStaticRelease", () => {
        (g || w) && L();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? M() : k(!0, !0);
      }),
      i("beforeTransitionStart", (D, I, A) => {
        e.destroyed ||
          !e.autoplay.running ||
          (A || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : M());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            M();
            return;
          }
          (f = !0),
            (g = !1),
            (w = !1),
            (m = setTimeout(() => {
              (w = !0), (g = !0), k(!0);
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
            (g = !1), (f = !1);
            return;
          }
          g && e.params.cssMode && L(), (g = !1), (f = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (v = !0);
      }),
      Object.assign(e.autoplay, { start: P, stop: M, pause: k, resume: L });
  }
  Kt.use([og, ag]);
  const lg = () => {
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
    ug = () => {
      lg();
    };
  G.registerPlugin(Z);
  const cg = () => {
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
    dg = () => {
      cg();
    };
  function fg(r) {
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
            for (var T in _) t(y, T, { get: _[T], enumerable: !0 });
          },
          a = (y, _, T, O) => {
            if ((_ && typeof _ == "object") || typeof _ == "function")
              for (let D of n(_))
                !s.call(y, D) &&
                  D !== T &&
                  t(y, D, {
                    get: () => _[D],
                    enumerable: !(O = i(_, D)) || O.enumerable,
                  });
            return y;
          },
          l = (y) => a(t({}, "__esModule", { value: !0 }), y),
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
          g = {
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
          m = { ...f, ...g },
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
          S = [
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
          h = (y = "") =>
            y
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase(),
          x = (y) => {
            const _ = E(y);
            if (_.charAt(0) === "1") {
              const T = _.substr(1, 3);
              return S.indexOf(T) !== -1;
            }
            return !1;
          },
          b = (y, _, T, O) => {
            if (T === 0 && !O) return 0;
            let D = 0;
            for (let I = 0; I < _.length; I++) {
              if ((/[+0-9]/.test(_[I]) && D++, D === y && !O)) return I + 1;
              if (O && D === y + 1) return I;
            }
            return _.length;
          },
          P = (y, _, T) => {
            const O = document.createElement(y);
            return (
              _ && Object.entries(_).forEach(([D, I]) => O.setAttribute(D, I)),
              T && T.appendChild(O),
              O
            );
          },
          M = (y) => {
            const { instances: _ } = C;
            Object.values(_).forEach((T) => T[y]());
          },
          k = class {
            constructor(y, _ = {}) {
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
                (this.options.i18n = { ...m, ...this.options.i18n });
              const y = new Promise((T, O) => {
                  (this.resolveAutoCountryPromise = T),
                    (this.rejectAutoCountryPromise = O);
                }),
                _ = new Promise((T, O) => {
                  (this.resolveUtilsScriptPromise = T),
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
                const { countryOrder: T } = this.options;
                if (T) {
                  const O = T.indexOf(y.iso2),
                    D = T.indexOf(_.iso2),
                    I = O > -1,
                    A = D > -1;
                  if (I || A) return I && A ? O - D : I ? -1 : 1;
                }
                return y.name < _.name ? -1 : y.name > _.name ? 1 : 0;
              });
            }
            _addToDialCodeMap(y, _, T) {
              _.length > this.dialCodeMaxLen &&
                (this.dialCodeMaxLen = _.length),
                this.dialCodeToIso2Map.hasOwnProperty(_) ||
                  (this.dialCodeToIso2Map[_] = []);
              for (let D = 0; D < this.dialCodeToIso2Map[_].length; D++)
                if (this.dialCodeToIso2Map[_][D] === y) return;
              const O = T !== void 0 ? T : this.dialCodeToIso2Map[_].length;
              this.dialCodeToIso2Map[_][O] = y;
            }
            _processAllCountries() {
              const { onlyCountries: y, excludeCountries: _ } = this.options;
              if (y.length) {
                const T = y.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => T.indexOf(O.iso2) > -1);
              } else if (_.length) {
                const T = _.map((O) => O.toLowerCase());
                this.countries = p.filter((O) => T.indexOf(O.iso2) === -1);
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
                  const T = this.dialCodeToIso2Map[_.dialCode][0];
                  for (let O = 0; O < _.areaCodes.length; O++) {
                    const D = _.areaCodes[O];
                    for (let I = 1; I < D.length; I++) {
                      const A = _.dialCode + D.substr(0, I);
                      this._addToDialCodeMap(T, A),
                        this._addToDialCodeMap(_.iso2, A);
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
                showFlags: T,
                containerClass: O,
                hiddenInput: D,
                dropdownContainer: I,
                fixDropdownWidth: A,
                useFullscreenPopup: V,
                i18n: W,
              } = this.options;
              let J = "iti";
              y && (J += " iti--allow-dropdown"),
                T && (J += " iti--show-flags"),
                O && (J += ` ${O}`),
                V || (J += " iti--inline-dropdown");
              const K = P("div", { class: J });
              if (
                (this.telInput.parentNode?.insertBefore(K, this.telInput),
                y || T)
              ) {
                (this.countryContainer = P(
                  "div",
                  { class: "iti__country-container" },
                  K
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
                  const ue = A ? "" : "iti--flexible-dropdown-width";
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
                    I)
                  ) {
                    let de = "iti iti--container";
                    V
                      ? (de += " iti--fullscreen-popup")
                      : (de += " iti--inline-dropdown"),
                      (this.dropdown = P("div", { class: de })),
                      this.dropdown.appendChild(this.dropdownContent);
                  } else
                    this.countryContainer.appendChild(this.dropdownContent);
                }
              }
              if ((K.appendChild(this.telInput), D)) {
                const ie = this.telInput.getAttribute("name") || "",
                  ue = D(ie);
                ue.phone &&
                  ((this.hiddenInput = P("input", {
                    type: "hidden",
                    name: ue.phone,
                  })),
                  K.appendChild(this.hiddenInput)),
                  ue.country &&
                    ((this.hiddenInputCountry = P("input", {
                      type: "hidden",
                      name: ue.country,
                    })),
                    K.appendChild(this.hiddenInputCountry));
              }
            }
            _appendListItems(y, _) {
              for (let T = 0; T < y.length; T++) {
                const O = y[T],
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
                T = this.telInput.value,
                D =
                  _ && _.charAt(0) === "+" && (!T || T.charAt(0) !== "+")
                    ? _
                    : T,
                I = this._getDialCode(D),
                A = x(D),
                { initialCountry: V } = this.options;
              if (I && !A) this._updateCountryFromNumber(D);
              else if (V !== "auto" || y) {
                const W = V ? V.toLowerCase() : "";
                W && this._getCountryData(W, !0)
                  ? this._setCountry(W)
                  : I && A
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
              this.options.utilsScript && !C.utils
                ? C.documentReady()
                  ? C.loadUtils(this.options.utilsScript)
                  : window.addEventListener("load", () => {
                      C.loadUtils(this.options.utilsScript);
                    })
                : this.resolveUtilsScriptPromise(),
                this.options.initialCountry === "auto" &&
                !this.selectedCountryData.iso2
                  ? this._loadAutoCountry()
                  : this.resolveAutoCountryPromise();
            }
            _loadAutoCountry() {
              C.autoCountry
                ? this.handleAutoCountry()
                : C.startedLoadingAutoCountry ||
                  ((C.startedLoadingAutoCountry = !0),
                  typeof this.options.geoIpLookup == "function" &&
                    this.options.geoIpLookup(
                      (y = "") => {
                        const _ = y.toLowerCase();
                        _ && this._getCountryData(_, !0)
                          ? ((C.autoCountry = _),
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
                separateDialCode: T,
              } = this.options;
              let O = !1;
              (this._handleInputEvent = (D) => {
                this._updateCountryFromNumber(this.telInput.value) &&
                  this._triggerCountryChange();
                const I = D && D.data && /[^+0-9]/.test(D.data),
                  A =
                    D &&
                    D.inputType === "insertFromPaste" &&
                    this.telInput.value;
                if (
                  (I || (A && !y)
                    ? (O = !0)
                    : /[^+0-9]/.test(this.telInput.value) || (O = !1),
                  _ && !O)
                ) {
                  const V = this.telInput.selectionStart || 0,
                    J = this.telInput.value
                      .substring(0, V)
                      .replace(/[^+0-9]/g, "").length,
                    K = D && D.inputType === "deleteContentForward",
                    ie = this._formatNumberAsYouType(),
                    ue = b(J, ie, V, K);
                  (this.telInput.value = ie),
                    this.telInput.setSelectionRange(ue, ue);
                }
              }),
                this.telInput.addEventListener("input", this._handleInputEvent),
                (y || T) &&
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
                      if (y) {
                        const I =
                            this.telInput.selectionStart === 0 && D.key === "+",
                          A = /^[0-9]$/.test(D.key),
                          V = I || A,
                          W = this._getFullNumber(),
                          J = C.utils.getCoreNumber(
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
              let T = null;
              (this._handleSearchChange = () => {
                T && clearTimeout(T),
                  (T = setTimeout(() => {
                    _(), (T = null);
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
              let T = !0;
              this.countryList.innerHTML = "";
              const O = h(y);
              for (let D = 0; D < this.countries.length; D++) {
                const I = this.countries[D],
                  A = h(I.name),
                  V = `+${I.dialCode}`;
                if (_ || A.includes(O) || V.includes(O) || I.iso2.includes(O)) {
                  const W = I.nodeById[this.id];
                  W && this.countryList.appendChild(W),
                    T && (this._highlightListItem(W, !1), (T = !1));
                }
              }
              (this.countryList.scrollTop = 0), this._updateSearchResultsText();
            }
            _updateSearchResultsText() {
              const { i18n: y } = this.options,
                _ = this.countryList.childElementCount;
              let T;
              _ === 0
                ? (T = y.zeroSearchResults)
                : _ === 1
                ? (T = y.oneSearchResult)
                : (T = y.multipleSearchResults.replace(
                    "${count}",
                    _.toString()
                  )),
                (this.searchResultsA11yText.textContent = T);
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
                C.utils &&
                this.selectedCountryData
              ) {
                const T =
                    this.options.nationalMode ||
                    (_.charAt(0) !== "+" && !this.options.separateDialCode),
                  { NATIONAL: O, INTERNATIONAL: D } = C.utils.numberFormat,
                  I = T ? O : D;
                _ = C.utils.formatNumber(_, this.selectedCountryData.iso2, I);
              }
              (_ = this._beforeSetNumber(_)), (this.telInput.value = _);
            }
            _updateCountryFromNumber(y) {
              const _ = y.indexOf("+");
              let T = _ ? y.substring(_) : y;
              const O = this.selectedCountryData.dialCode;
              T &&
                O === "1" &&
                T.charAt(0) !== "+" &&
                (T.charAt(0) !== "1" && (T = `1${T}`), (T = `+${T}`)),
                this.options.separateDialCode &&
                  O &&
                  T.charAt(0) !== "+" &&
                  (T = `+${O}${T}`);
              const I = this._getDialCode(T, !0),
                A = E(T);
              let V = null;
              if (I) {
                const W = this.dialCodeToIso2Map[E(I)],
                  J =
                    W.indexOf(this.selectedCountryData.iso2) !== -1 &&
                    A.length <= I.length - 1;
                if (!(O === "1" && x(A)) && !J) {
                  for (let ie = 0; ie < W.length; ie++)
                    if (W[ie]) {
                      V = W[ie];
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
            _highlightListItem(y, _) {
              const T = this.highlightedItem;
              T &&
                (T.classList.remove("iti__highlight"),
                T.setAttribute("aria-selected", "false")),
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
              for (let T = 0; T < this.countries.length; T++)
                if (this.countries[T].iso2 === y) return this.countries[T];
              if (_) return null;
              throw new Error(`No country data for '${y}'`);
            }
            _setCountry(y) {
              const {
                  separateDialCode: _,
                  showFlags: T,
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
                  A = "";
                y && T
                  ? ((I = `iti__flag iti__${y}`),
                    (A = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                  : ((I = "iti__flag iti__globe"), (A = O.noCountrySelected)),
                  (this.selectedCountryInner.className = I),
                  (this.selectedCountryA11yText.textContent = A);
              }
              if ((this._setSelectedCountryTitleAttribute(y, _), _)) {
                const I = this.selectedCountryData.dialCode
                  ? `+${this.selectedCountryData.dialCode}`
                  : "";
                this.selectedDialCode.innerHTML = I;
                const V =
                  (this.selectedCountry.offsetWidth ||
                    this._getHiddenSelectedCountryWidth()) + 8;
                this.isRTL
                  ? (this.telInput.style.paddingRight = `${V}px`)
                  : (this.telInput.style.paddingLeft = `${V}px`);
              }
              return (
                this._updatePlaceholder(), this._updateMaxLength(), D.iso2 !== y
              );
            }
            _updateMaxLength() {
              if (this.options.strictMode && C.utils)
                if (this.selectedCountryData.iso2) {
                  const y =
                    C.utils.numberType[this.options.placeholderNumberType];
                  let _ = C.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      !1,
                      y,
                      !0
                    ),
                    T = _;
                  for (
                    ;
                    C.utils.isPossibleNumber(_, this.selectedCountryData.iso2);

                  )
                    (T = _), (_ += "0");
                  const O = C.utils.getCoreNumber(
                    T,
                    this.selectedCountryData.iso2
                  );
                  this.maxCoreNumberLength = O.length;
                } else this.maxCoreNumberLength = null;
            }
            _setSelectedCountryTitleAttribute(y = null, _) {
              if (!this.selectedCountry) return;
              let T;
              y && !_
                ? (T = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
                : y
                ? (T = this.selectedCountryData.name)
                : (T = "Unknown"),
                this.selectedCountry.setAttribute("title", T);
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                const y = this.telInput.parentNode.cloneNode(!1);
                (y.style.visibility = "hidden"), document.body.appendChild(y);
                const _ = this.countryContainer.cloneNode();
                y.appendChild(_);
                const T = this.selectedCountry.cloneNode(!0);
                _.appendChild(T);
                const O = T.offsetWidth;
                return document.body.removeChild(y), O;
              }
              return 0;
            }
            _updatePlaceholder() {
              const {
                  autoPlaceholder: y,
                  placeholderNumberType: _,
                  nationalMode: T,
                  customPlaceholder: O,
                } = this.options,
                D =
                  y === "aggressive" ||
                  (!this.hadInitialPlaceholder && y === "polite");
              if (C.utils && D) {
                const I = C.utils.numberType[_];
                let A = this.selectedCountryData.iso2
                  ? C.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      T,
                      I
                    )
                  : "";
                (A = this._beforeSetNumber(A)),
                  typeof O == "function" &&
                    (A = O(A, this.selectedCountryData)),
                  this.telInput.setAttribute("placeholder", A);
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
                T = document.documentElement.scrollTop,
                O = _.offsetHeight,
                D = _.getBoundingClientRect().top + T,
                I = D + O,
                A = y.offsetHeight,
                V = y.getBoundingClientRect().top + T,
                W = V + A,
                J = V - D + _.scrollTop;
              if (V < D) _.scrollTop = J;
              else if (W > I) {
                const K = O - A;
                _.scrollTop = J - K;
              }
            }
            _updateDialCode(y) {
              const _ = this.telInput.value,
                T = `+${y}`;
              let O;
              if (_.charAt(0) === "+") {
                const D = this._getDialCode(_);
                D ? (O = _.replace(D, T)) : (O = T), (this.telInput.value = O);
              }
            }
            _getDialCode(y, _) {
              let T = "";
              if (y.charAt(0) === "+") {
                let O = "";
                for (let D = 0; D < y.length; D++) {
                  const I = y.charAt(D);
                  if (!isNaN(parseInt(I, 10))) {
                    if (((O += I), _))
                      this.dialCodeToIso2Map[O] && (T = y.substr(0, D + 1));
                    else if (this.dialCodes[O]) {
                      T = y.substr(0, D + 1);
                      break;
                    }
                    if (O.length === this.dialCodeMaxLen) break;
                  }
                }
              }
              return T;
            }
            _getFullNumber() {
              const y = this.telInput.value.trim(),
                { dialCode: _ } = this.selectedCountryData;
              let T;
              const O = E(y);
              return (
                this.options.separateDialCode && y.charAt(0) !== "+" && _ && O
                  ? (T = `+${_}`)
                  : (T = ""),
                T + y
              );
            }
            _beforeSetNumber(y) {
              let _ = y;
              if (this.options.separateDialCode) {
                let T = this._getDialCode(_);
                if (T) {
                  T = `+${this.selectedCountryData.dialCode}`;
                  const O =
                    _[T.length] === " " || _[T.length] === "-"
                      ? T.length + 1
                      : T.length;
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
                _ = C.utils
                  ? C.utils.formatNumberAsYouType(
                      y,
                      this.selectedCountryData.iso2
                    )
                  : y,
                { dialCode: T } = this.selectedCountryData;
              return this.options.separateDialCode &&
                this.telInput.value.charAt(0) !== "+" &&
                _.includes(`+${T}`)
                ? (_.split(`+${T}`)[1] || "").trim()
                : _;
            }
            handleAutoCountry() {
              this.options.initialCountry === "auto" &&
                C.autoCountry &&
                ((this.defaultCountry = C.autoCountry),
                this.telInput.value || this.setCountry(this.defaultCountry),
                this.resolveAutoCountryPromise());
            }
            handleUtils() {
              C.utils &&
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
                const T = this.telInput.closest("label");
                T && T.removeEventListener("click", this._handleLabelClick);
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
                delete C.instances[this.id];
            }
            getExtension() {
              return C.utils
                ? C.utils.getExtension(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : "";
            }
            getNumber(y) {
              if (C.utils) {
                const { iso2: _ } = this.selectedCountryData;
                return C.utils.formatNumber(this._getFullNumber(), _, y);
              }
              return "";
            }
            getNumberType() {
              return C.utils
                ? C.utils.getNumberType(
                    this._getFullNumber(),
                    this.selectedCountryData.iso2
                  )
                : -99;
            }
            getSelectedCountryData() {
              return this.selectedCountryData;
            }
            getValidationError() {
              if (C.utils) {
                const { iso2: y } = this.selectedCountryData;
                return C.utils.getValidationError(this._getFullNumber(), y);
              }
              return -99;
            }
            isValidNumber(y = !0) {
              const _ = this._getFullNumber();
              return /\p{L}/u.test(_)
                ? !1
                : C.utils
                ? C.utils.isPossibleNumber(_, this.selectedCountryData.iso2, y)
                : null;
            }
            isValidNumberPrecise() {
              const y = this._getFullNumber();
              return /\p{L}/u.test(y)
                ? !1
                : C.utils
                ? C.utils.isValidNumber(y, this.selectedCountryData.iso2)
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
          L = (y, _, T) => {
            const O = document.createElement("script");
            (O.onload = () => {
              window.intlTelInputUtils &&
                ((C.utils = window.intlTelInputUtils),
                delete window.intlTelInputUtils,
                window.intlTelInputUtilsBackup &&
                  ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                  delete window.intlTelInputUtilsBackup)),
                M("handleUtils"),
                _ && _();
            }),
              (O.onerror = () => {
                M("rejectUtilsScriptPromise"), T && T();
              }),
              (O.className = "iti-load-utils"),
              (O.async = !0),
              (O.src = y),
              document.body.appendChild(O);
          },
          R = (y) =>
            !C.utils && !C.startedLoadingUtilsScript
              ? ((C.startedLoadingUtilsScript = !0),
                new Promise((_, T) => L(y, _, T)))
              : null,
          C = Object.assign(
            (y, _) => {
              const T = new k(y, _);
              return (
                T._init(),
                y.setAttribute("data-intl-tel-input-id", T.id.toString()),
                (C.instances[T.id] = T),
                T
              );
            },
            {
              defaults: w,
              documentReady: () => document.readyState === "complete",
              getCountryData: () => p,
              getInstance: (y) => {
                const _ = y.getAttribute("data-intl-tel-input-id");
                return _ ? C.instances[_] : null;
              },
              instances: {},
              loadUtils: R,
              version: "22.0.0",
            }
          ),
          N = C;
        return l(u);
      })();
      return e.default;
    });
  })(id);
  var pg = id.exports;
  const hg = fg(pg),
    mg = () => {
      function r(i) {
        const n = document.querySelector(`[calc-phone="${i}"]`),
          s = document.querySelector(`[dial-code="${i}"]`),
          o = document.querySelector(`[hidden-country-name="${i}"]`),
          a = document.querySelector(`[hidden-full-phone="${i}"]`);
        if (!n || !s || !o || !a) return;
        const l = hg(n, {
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
      mg();
    };
  var gg = "1.3.4";
  function nd(r, e, t) {
    return Math.max(r, Math.min(e, t));
  }
  function vg(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function _g(r, e, t, i) {
    return vg(r, e, 1 - Math.exp(-t * i));
  }
  function yg(r, e) {
    return ((r % e) + e) % e;
  }
  var wg = class {
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
        const t = nd(0, this.currentTime / this.duration, 1);
        e = t >= 1;
        const i = e ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = _g(this.value, this.to, this.lerp * 60, r)),
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
  function bg(r, e) {
    let t;
    return function (...i) {
      let n = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), r.apply(n, i);
        }, e));
    };
  }
  var Sg = class {
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
            ((this.debouncedResize = bg(this.resize, i)),
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
    od = 100 / 6,
    tr = { passive: !1 },
    xg = class {
      constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        B(this, "touchStart", { x: 0, y: 0 });
        B(this, "lastDelta", { x: 0, y: 0 });
        B(this, "window", { width: 0, height: 0 });
        B(this, "emitter", new sd());
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
          const n = i === 1 ? od : i === 2 ? this.window.width : 1,
            s = i === 1 ? od : i === 2 ? this.window.height : 1;
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
    Tg = class {
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
        wheelMultiplier: g = 1,
        autoResize: m = !0,
        prevent: v,
        virtualScroll: w,
        overscroll: S = !0,
        autoRaf: E = !1,
        anchors: h = !1,
        autoToggle: x = !1,
        allowNestedScroll: b = !1,
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
        B(this, "animate", new wg());
        B(this, "emitter", new sd());
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
        (window.lenisVersion = gg),
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
            wheelMultiplier: g,
            autoResize: m,
            prevent: v,
            virtualScroll: w,
            overscroll: S,
            autoRaf: E,
            anchors: h,
            autoToggle: x,
            allowNestedScroll: b,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new Sg(r, e, { autoResize: m })),
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
          (this.virtualScroll = new xg(t, {
            touchMultiplier: f,
            wheelMultiplier: g,
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
                const g = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? g.left : g.top;
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
          const x = window.getComputedStyle(r);
          n.computedStyle = x;
          const b = x.overflowX,
            P = x.overflowY;
          if (
            ((s = ["auto", "overlay", "scroll"].includes(b)),
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
        let g;
        if (f === "horizontal") g = "x";
        else if (f === "vertical") g = "y";
        else {
          const x = e !== 0,
            b = t !== 0;
          x && s && a && (g = "x"), b && o && l && (g = "y");
        }
        if (!g) return !1;
        let m, v, w, S, E;
        if (g === "x")
          (m = r.scrollLeft), (v = u - d), (w = e), (S = s), (E = a);
        else if (g === "y")
          (m = r.scrollTop), (v = c - p), (w = t), (S = o), (E = l);
        else return !1;
        return (w > 0 ? m < v : m > 0) && S && E;
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
          ? yg(this.animatedScroll, this.limit)
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
  const Cg = () => {
      (Qs = new Tg({
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
    Eg = () => {
      Cg();
    },
    ld = () => Qs;
  let Er,
    sn,
    on = !1;
  const Ag = () => {
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
        g = () => {
          const R = e.getAttribute("final-value"),
            C = i.getAttribute("final-value"),
            N = R * C,
            y = `$${N.toLocaleString()}`;
          (u.textContent = y), (p.value = N);
        },
        m = () => {
          const R = t.getAttribute("final-value");
          (c.textContent = R), (f.value = R);
        },
        v = () =>
          e.getAttribute("final-value") &&
          t.getAttribute("final-value") &&
          i.getAttribute("final-value"),
        w = () => {
          if (v() && !on) {
            (on = !0),
              n.classList.add("is--active"),
              r.classList.remove("is--active"),
              g(),
              m();
            const R = ld();
            R && R.stop(), x();
          } else v() || r.classList.add("is--active");
        },
        S = () => {
          if (on) {
            (on = !1),
              n.classList.remove("is--active"),
              Er && Er.isActive() && Er.pause(),
              sn && sn.isActive() && sn.pause();
            const R = ld();
            R && R.start(), b();
          }
        },
        E = () => {
          r.classList.contains("is--active") &&
            v() &&
            r.classList.remove("is--active");
        },
        h = () => {
          [e, t, i].forEach((C) => {
            new MutationObserver(E).observe(C, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
          }),
            new MutationObserver(w).observe(r, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
        },
        x = () => {
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
        b = () => {
          (sn = G.timeline()),
            sn.to(l, {
              autoAlpha: 0,
              scale: 0.9,
              rotate: 10,
              y: "100%",
              transformOrigin: "top center",
              duration: 1.25,
              ease: "elastic.out(0.4,0.3)",
            }),
            sn.to(
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
          R.key === "Escape" && on && S();
        },
        M = () => {
          o.addEventListener("click", () => {
            w();
          }),
            s.forEach((R) => {
              R.addEventListener("click", () => {
                S();
              });
            }),
            a.addEventListener("click", (R) => {
              R.target === a && on && S();
            }),
            document.addEventListener("keydown", P);
        },
        k = () => {
          document.removeEventListener("keydown", P);
        };
      return h(), M(), k;
    },
    Pg = () => Ag(),
    Mg = () => {
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
    Og = () => {
      Mg();
    },
    ud = () => {
      ic(), Qf(), ep(), ip(), np(), Rh(), zh(), ug(), dg(), rd(), Pg(), Og();
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
              S = document.querySelector(`[nav-menu-item='${w}']`);
            if (S) {
              const E = v.getBoundingClientRect(),
                h = i.getBoundingClientRect(),
                x = s.get(S);
              if (x) {
                const b = h.left + h.width / 2,
                  M = E.left + E.width / 2 - b,
                  k = x.height + 20,
                  L = x.width + 20;
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
            S = w.indexOf(v);
          w.forEach((E, h) => {
            h < S
              ? E.setAttribute("pos", "left")
              : h === S
              ? E.setAttribute("pos", "active")
              : E.setAttribute("pos", "right"),
              E === v
                ? E.setAttribute("status", "active")
                : E.setAttribute("status", "inactive");
          });
        },
        d = (v, w) => {
          l && (clearTimeout(l), (l = null)), u !== v && ((u = v), g(v, w));
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
          const S = w.bottom;
          return v >= S && v <= S + a;
        },
        g = (v, w) => {
          const S = i.getBoundingClientRect(),
            E = v.getBoundingClientRect(),
            h = s.get(w);
          if (!h) return;
          const x = S.left + S.width / 2,
            b = E.left + E.width / 2,
            P = h.height + 20,
            M = h.width + 20,
            k = b - x;
          n.style.setProperty("--siteMenuTranslateX", `${k}px`),
            n.style.setProperty("--siteMenuHeight", `${P}px`),
            n.style.setProperty("--siteMenuWidth", `${M}px`),
            n.setAttribute("vis", "visible"),
            r.setAttribute("dropdown-vis", "visible"),
            c(w);
        },
        m = (v) => {
          if (!u) return;
          const w = u.getBoundingClientRect(),
            S = n.getBoundingClientRect(),
            E = v.clientX,
            h = v.clientY,
            x = E >= w.left && E <= w.right && h >= w.top && h <= w.bottom,
            b = E >= S.left && E <= S.right && h >= S.top && h <= S.bottom,
            P =
              f(h, w) &&
              E >= Math.min(w.left, S.left) &&
              E <= Math.max(w.right, S.right);
          x || b || P ? l && (clearTimeout(l), (l = null)) : l || p();
        };
      document.addEventListener("mousemove", m),
        e.forEach((v) => {
          const w = v.getAttribute("nav-menu-dropdown"),
            S = document.querySelector(`[nav-menu-item='${w}']`);
          S &&
            v.addEventListener("mouseenter", () => {
              d(v, S);
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
                line: g,
              }) => {
                u.classList.remove("is--open"),
                  d.classList.remove("is--open"),
                  f.classList.remove("is--open"),
                  G.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  G.to(g, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  p.forEach((m) => m.classList.remove("is--open")),
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
          r.forEach((S) => {
            S.setAttribute("aria-controls", "main-nav-menu"),
              S.setAttribute("aria-expanded", "false");
          }),
            e.forEach((S) => {
              S.setAttribute("aria-label", "Open navigation menu");
            }),
            t.forEach((S) => {
              S.setAttribute("aria-label", "Close navigation menu");
            }),
            n &&
              (n.setAttribute("id", "main-nav-menu"),
              n.setAttribute("aria-label", "Main navigation menu")),
            s && s.setAttribute("role", "navigation");
        },
        p = (S, E) => {
          [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((x) => {
            x.classList.add(S), x.classList.remove(E);
          });
        },
        f = (S) => {
          r.forEach((E) => {
            E.setAttribute("aria-expanded", S ? "true" : "false");
          });
        },
        g = () => {
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
        m = () => {
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
          l ? (m(), (l = !1)) : (g(), (l = !0));
        };
      (() => {
        d(),
          r.forEach((S) => {
            S.addEventListener("click", v);
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
            g = r(!1, s.getAttribute("tr-marquee-scrollscrub")),
            m = -100,
            v = 1,
            w = !1;
          p && (m = 100);
          let S = G.timeline({
            repeat: -1,
            onReverseComplete: () => S.progress(1),
          });
          d
            ? ((c = a[0].offsetHeight / c),
              S.fromTo(
                a,
                { yPercent: 0 },
                { yPercent: m, ease: "none", duration: c }
              ))
            : ((c = a[0].offsetWidth / c),
              S.fromTo(
                a,
                { xPercent: 0 },
                { xPercent: m, ease: "none", duration: c }
              ));
          let E = { value: 1 };
          const h = Z.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (b) => {
              if (
                !w &&
                (f &&
                  v !== b.direction &&
                  ((v = b.direction), S.timeScale(b.direction)),
                g)
              ) {
                let P = b.getVelocity() * 0.006;
                (P = G.utils.clamp(-60, 60, P)),
                  G.timeline({ onUpdate: () => S.timeScale(E.value) }).fromTo(
                    E,
                    { value: P },
                    { value: v, duration: 0.5 }
                  );
              }
            },
          });
          function x(b) {
            w = b;
            let P = { value: 1 },
              M = G.timeline({ onUpdate: () => S.timeScale(P.value) });
            b
              ? (M.fromTo(P, { value: v }, { value: 0, duration: 0.5 }),
                u.forEach((k) => e(k, "is-paused")))
              : (M.fromTo(P, { value: 0 }, { value: v, duration: 0.5 }),
                u.forEach((k) => t(k, "is-paused")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            l.forEach((b) => {
              b.addEventListener("mouseenter", () => x(!0)),
                b.addEventListener("mouseleave", () => x(!1));
            }),
            u.forEach((b) => {
              b.addEventListener("click", function () {
                const P = i(this, "is-paused");
                x(!P);
              });
            }),
            (s._marqueeCleanup = () => {
              h.kill(),
                S.kill(),
                l.forEach((b) => {
                  b.removeEventListener("mouseenter", () => x(!0)),
                    b.removeEventListener("mouseleave", () => x(!1));
                }),
                u.forEach((b) => {
                  b.removeEventListener("click", function () {
                    const P = i(this, "is-paused");
                    x(!P);
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
    Ug(), Zg(), Fg(), Eg();
  });
})();
