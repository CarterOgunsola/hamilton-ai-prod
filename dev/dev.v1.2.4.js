var lv = Object.defineProperty;
var uv = (Fi, et, nr) =>
  et in Fi
    ? lv(Fi, et, { enumerable: !0, configurable: !0, writable: !0, value: nr })
    : (Fi[et] = nr);
var q = (Fi, et, nr) => uv(Fi, typeof et != "symbol" ? et + "" : et, nr);
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
  function nr(r, e) {
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
    Dr = { duration: 0.5, overwrite: !1, delay: 0 },
    so,
    tt,
    Se,
    ei = 1e8,
    me = 1 / ei,
    oo = Math.PI * 2,
    bd = oo / 4,
    Sd = 0,
    Ka = Math.sqrt,
    xd = Math.cos,
    Td = Math.sin,
    Ye = function (e) {
      return typeof e == "string";
    },
    Le = function (e) {
      return typeof e == "function";
    },
    Di = function (e) {
      return typeof e == "number";
    },
    ao = function (e) {
      return typeof e > "u";
    },
    vi = function (e) {
      return typeof e == "object";
    },
    Pt = function (e) {
      return e !== !1;
    },
    lo = function () {
      return typeof window < "u";
    },
    ns = function (e) {
      return Le(e) || Ye(e);
    },
    Za =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    ot = Array.isArray,
    uo = /(?:-?\.?\d|\.)+/gi,
    Qa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    kr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    co = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ja = /[+-]=-?[.\d]+/,
    el = /[^,'"\[\]\s]+/gi,
    Cd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Te,
    _i,
    fo,
    po,
    qt = {},
    ss = {},
    tl,
    il = function (e) {
      return (ss = Rr(e, qt)) && Mt;
    },
    ho = function (e, t) {},
    fn = function (e, t) {
      return !t && void 0;
    },
    rl = function (e, t) {
      return (e && (qt[e] = t) && ss && (ss[e] = t)) || qt;
    },
    pn = function () {
      return 0;
    },
    Ed = { suppressEvents: !0, isStart: !0, kill: !1 },
    os = { suppressEvents: !0, kill: !1 },
    Ad = { suppressEvents: !0 },
    mo = {},
    qi = [],
    go = {},
    nl,
    Vt = {},
    vo = {},
    sl = 30,
    as = [],
    _o = "",
    yo = function (e) {
      var t = e[0],
        i,
        n;
      if ((vi(t) || Le(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (n = as.length; n-- && !as[n].targetTest(t); );
        i = as[n];
      }
      for (n = e.length; n--; )
        (e[n] && (e[n]._gsap || (e[n]._gsap = new Il(e[n], i)))) ||
          e.splice(n, 1);
      return e;
    },
    sr = function (e) {
      return e._gsap || yo(ii(e))[0]._gsap;
    },
    ol = function (e, t, i) {
      return (i = e[t]) && Le(i)
        ? e[t]()
        : (ao(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    Lt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ke = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ze = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ir = function (e, t) {
      var i = t.charAt(0),
        n = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + n : i === "-" ? e - n : i === "*" ? e * n : e / n
      );
    },
    Pd = function (e, t) {
      for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
      return n < i;
    },
    ls = function () {
      var e = qi.length,
        t = qi.slice(0),
        i,
        n;
      for (go = {}, qi.length = 0, i = 0; i < e; i++)
        (n = t[i]),
          n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
    },
    wo = function (e) {
      return !!(e._initted || e._startAt || e.add);
    },
    al = function (e, t, i, n) {
      qi.length && !tt && ls(),
        e.render(t, i, !!(tt && t < 0 && wo(e))),
        qi.length && !tt && ls();
    },
    ll = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(el).length < 2
        ? t
        : Ye(e)
        ? e.trim()
        : e;
    },
    ul = function (e) {
      return e;
    },
    $t = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Ld = function (e) {
      return function (t, i) {
        for (var n in i)
          n in t || (n === "duration" && e) || n === "ease" || (t[n] = i[n]);
      };
    },
    Rr = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    cl = function r(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = vi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    us = function (e, t) {
      var i = {},
        n;
      for (n in e) n in t || (i[n] = e[n]);
      return i;
    },
    hn = function (e) {
      var t = e.parent || Te,
        i = e.keyframes ? Ld(ot(e.keyframes)) : $t;
      if (Pt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Od = function (e, t) {
      for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
      return i < 0;
    },
    dl = function (e, t, i, n, s) {
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
    cs = function (e, t, i, n) {
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
    or = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    Md = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    bo = function (e, t, i, n) {
      return (
        e._startAt &&
        (tt
          ? e._startAt.revert(os)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, n))
      );
    },
    Dd = function r(e) {
      return !e || (e._ts && r(e.parent));
    },
    fl = function (e) {
      return e._repeat ? zr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    zr = function (e, t) {
      var i = Math.floor((e = ze(e / t)));
      return e && i === e ? i - 1 : i;
    },
    ds = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    fs = function (e) {
      return (e._end = ze(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || me) || 0)
      ));
    },
    ps = function (e, t) {
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
          fs(e),
          i._dirty || or(i, e)),
        e
      );
    },
    pl = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = ds(e.rawTime(), t)),
          (!t._dur || gn(0, t.totalDuration(), i) - t._tTime > me) &&
            t.render(i, !0)),
        or(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
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
          (Di(i) ? i : i || e !== Te ? ti(e, i, t) : e._time) + t._delay
        )),
        (t._end = ze(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        dl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        So(t) || (e._recent = t),
        n || pl(e, t),
        e._ts < 0 && ps(e, e._tTime),
        e
      );
    },
    hl = function (e, t) {
      return (
        (qt.ScrollTrigger || ho("scrollTrigger", t)) &&
        qt.ScrollTrigger.create(t, e)
      );
    },
    ml = function (e, t, i, n, s) {
      if ((Mo(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !tt &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        nl !== Wt.frame
      )
        return qi.push(e), (e._lazy = [s, n]), 1;
    },
    kd = function r(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
    },
    So = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Id = function (e, t, i, n) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && kd(e) && !(!e._initted && So(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !So(e))))
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
          ((l = gn(0, e._tDur, t)),
          (c = zr(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== zr(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || tt || n || e._zTime === me || (!t && e._zTime))
      ) {
        if (!e._initted && ml(e, t, n, i, l)) return;
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
        t < 0 && bo(e, t, i, !0),
          e._onUpdate && !i && Ht(e, "onUpdate"),
          l && e._repeat && !i && e.parent && Ht(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Vi(e, 1),
            !i &&
              !tt &&
              (Ht(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Rd = function (e, t, i) {
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
    Nr = function (e, t, i, n) {
      var s = e._repeat,
        o = ze(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !n && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : ze(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !n && ps(e, (e._tTime = e._tDur * a)),
        e.parent && fs(e),
        i || or(e.parent, e),
        e
      );
    },
    gl = function (e) {
      return e instanceof yt ? or(e) : Nr(e, e._dur);
    },
    zd = { _start: 0, endTime: pn, totalDuration: pn },
    ti = function r(e, t, i) {
      var n = e.labels,
        s = e._recent || zd,
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
    mn = function (e, t, i) {
      var n = Di(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = Pt(l.vars.inherit) && l.parent);
        (o.immediateRender = Pt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Ne(t[0], o, t[s + 1]);
    },
    $i = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    gn = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    at = function (e, t) {
      return !Ye(e) || !(t = Cd.exec(e)) ? "" : t[1];
    },
    Nd = function (e, t, i) {
      return $i(i, function (n) {
        return gn(e, t, n);
      });
    },
    xo = [].slice,
    vl = function (e, t) {
      return (
        e &&
        vi(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && vi(e[0]))) &&
        !e.nodeType &&
        e !== _i
      );
    },
    Bd = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (n) {
          var s;
          return (Ye(n) && !t) || vl(n, 1)
            ? (s = i).push.apply(s, ii(n))
            : i.push(n);
        }) || i
      );
    },
    ii = function (e, t, i) {
      return Se && !t && Se.selector
        ? Se.selector(e)
        : Ye(e) && !i && (fo || !Fr())
        ? xo.call((t || po).querySelectorAll(e), 0)
        : ot(e)
        ? Bd(e, i)
        : vl(e)
        ? xo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    To = function (e) {
      return (
        (e = ii(e)[0] || fn("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return ii(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? fn("Invalid scope") || po.createElement("div")
              : e
          );
        }
      );
    },
    _l = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    yl = function (e) {
      if (Le(e)) return e;
      var t = vi(e) ? e : { each: e },
        i = ar(t.ease),
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
        function (m, f, h) {
          var p = (h || t).length,
            v = o[p],
            _,
            w,
            E,
            g,
            S,
            x,
            P,
            O,
            k;
          if (!v) {
            if (((k = t.grid === "auto" ? 0 : (t.grid || [1, ei])[1]), !k)) {
              for (
                P = -ei;
                P < (P = h[k++].getBoundingClientRect().left) && k < p;

              );
              k < p && k--;
            }
            for (
              v = o[p] = [],
                _ = l ? Math.min(k, p) * c - 0.5 : n % k,
                w = k === ei ? 0 : l ? (p * d) / k - 0.5 : (n / k) | 0,
                P = 0,
                O = ei,
                x = 0;
              x < p;
              x++
            )
              (E = (x % k) - _),
                (g = w - ((x / k) | 0)),
                (v[x] = S =
                  u ? Math.abs(u === "y" ? g : E) : Ka(E * E + g * g)),
                S > P && (P = S),
                S < O && (O = S);
            n === "random" && _l(v),
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
              (v.u = at(t.amount || t.each) || 0),
              (i = i && p < 0 ? Ml(i) : i);
          }
          return (
            (p = (v[m] - v.min) / v.max || 0),
            ze(v.b + (i ? i(p) : p) * v.v) + v.u
          );
        }
      );
    },
    Co = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var n = ze(Math.round(parseFloat(i) / e) * e * t);
        return (n - (n % 1)) / t + (Di(i) ? 0 : at(i));
      };
    },
    wl = function (e, t) {
      var i = ot(e),
        n,
        s;
      return (
        !i &&
          vi(e) &&
          ((n = i = e.radius || ei),
          e.values
            ? ((e = ii(e.values)), (s = !Di(e[0])) && (n *= n))
            : (e = Co(e.increment))),
        $i(
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
                      u = ei,
                      c = 0,
                      d = e.length,
                      m,
                      f;
                    d--;

                  )
                    s
                      ? ((m = e[d].x - a),
                        (f = e[d].y - l),
                        (m = m * m + f * f))
                      : (m = Math.abs(e[d] - a)),
                      m < u && ((u = m), (c = d));
                  return (
                    (c = !n || u <= n ? e[c] : o),
                    s || c === o || Di(o) ? c : c + at(o)
                  );
                }
            : Co(e)
        )
      );
    },
    bl = function (e, t, i, n) {
      return $i(ot(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
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
    Fd = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (n) {
        return t.reduce(function (s, o) {
          return o(s);
        }, n);
      };
    },
    qd = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || at(i));
      };
    },
    Vd = function (e, t, i) {
      return xl(e, t, 0, 1, i);
    },
    Sl = function (e, t, i) {
      return $i(i, function (n) {
        return e[~~t(n)];
      });
    },
    $d = function r(e, t, i) {
      var n = t - e;
      return ot(e)
        ? Sl(e, r(0, e.length), t)
        : $i(i, function (s) {
            return ((n + ((s - e) % n)) % n) + e;
          });
    },
    Hd = function r(e, t, i) {
      var n = t - e,
        s = n * 2;
      return ot(e)
        ? Sl(e, r(0, e.length - 1), t)
        : $i(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
          });
    },
    vn = function (e) {
      for (var t = 0, i = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
        (o = e.indexOf(")", n)),
          (a = e.charAt(n + 7) === "["),
          (s = e.substr(n + 7, o - n - 7).match(a ? el : uo)),
          (i +=
            e.substr(t, n - t) +
            bl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    xl = function (e, t, i, n, s) {
      var o = t - e,
        a = n - i;
      return $i(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    Wd = function r(e, t, i, n) {
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
          m;
        if ((i === !0 && (n = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (ot(e) && !ot(t)) {
          for (c = [], d = e.length, m = d - 2, u = 1; u < d; u++)
            c.push(r(e[u - 1], e[u]));
          d--,
            (s = function (h) {
              h *= d;
              var p = Math.min(m, ~~h);
              return c[p](h - p);
            }),
            (i = t);
        } else n || (e = Rr(ot(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Lo.call(a, e, l, "get", t[l]);
          s = function (h) {
            return Io(h, a) || (o ? e.p : e);
          };
        }
      }
      return $i(i, s);
    },
    Tl = function (e, t, i) {
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
    Ht = function (e, t, i) {
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
          i && qi.length && ls(),
          a && (Se = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (Se = o),
          c
        );
    },
    _n = function (e) {
      return (
        Vi(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!tt),
        e.progress() < 1 && Ht(e, "onInterrupt"),
        e
      );
    },
    Br,
    Cl = [],
    El = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), lo() || e.headless)) {
          var t = e.name,
            i = Le(e),
            n =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: pn,
              render: Io,
              add: Lo,
              kill: af,
              modifier: of,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: ko,
              aliases: {},
              register: 0,
            };
          if ((Fr(), e !== n)) {
            if (Vt[t]) return;
            $t(n, $t(us(e, s), o)),
              Rr(n.prototype, Rr(s, us(e, o))),
              (Vt[(n.prop = t)] = n),
              e.targetTest && (as.push(n), (mo[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          rl(t, n), e.register && e.register(Mt, n, Ot);
        } else Cl.push(e);
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
    Eo = function (e, t, i) {
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
    Al = function (e, t, i) {
      var n = e ? (Di(e) ? [e >> 16, (e >> 8) & ge, e & ge] : 0) : yn.black,
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
          (e = parseInt(e.substr(1), 16)),
            (n = [e >> 16, (e >> 8) & ge, e & ge]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((n = h = e.match(uo)), !t))
            (l = (+n[0] % 360) / 360),
              (u = +n[1] / 100),
              (c = +n[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              n.length > 3 && (n[3] *= 1),
              (n[0] = Eo(l + 1 / 3, s, o)),
              (n[1] = Eo(l, s, o)),
              (n[2] = Eo(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (n = e.match(Qa)), i && n.length < 4 && (n[3] = 1), n;
        } else n = e.match(uo) || yn.transparent;
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
    Pl = function (e) {
      var t = [],
        i = [],
        n = -1;
      return (
        e.split(Hi).forEach(function (s) {
          var o = s.match(kr) || [];
          t.push.apply(t, o), i.push((n += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Ll = function (e, t, i) {
      var n = "",
        s = (e + n).match(Hi),
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
            (m = Al(m, t, 1)) &&
            o +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = Pl(e)), (l = i.c), l.join(n) !== c.c.join(n)))
      )
        for (u = e.replace(Hi, "1").split(kr), d = u.length - 1; a < d; a++)
          n +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(Hi), d = u.length - 1; a < d; a++) n += u[a] + s[a];
      return n + u[d];
    },
    Hi = (function () {
      var r =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in yn) r += "|" + e + "\\b";
      return new RegExp(r + ")", "gi");
    })(),
    Gd = /hsl[a]?\(/,
    Ol = function (e) {
      var t = e.join(" "),
        i;
      if (((Hi.lastIndex = 0), Hi.test(t)))
        return (
          (i = Gd.test(t)),
          (e[1] = Ll(e[1], i)),
          (e[0] = Ll(e[0], i, Pl(e[1]))),
          !0
        );
    },
    wn,
    Wt = (function () {
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
            w = v === !0,
            E,
            g,
            S,
            x;
          if (
            ((_ > e || _ < 0) && (i += _ - t),
            (n += _),
            (S = n - i),
            (E = S - o),
            (E > 0 || w) &&
              ((x = ++d.frame),
              (m = S - d.time * 1e3),
              (d.time = S = S / 1e3),
              (o += E + (E >= s ? 4 : s - E)),
              (g = 1)),
            w || (l = u(p)),
            g)
          )
            for (f = 0; f < a.length; f++) a[f](S, m, x, v);
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
            tl &&
              (!fo &&
                lo() &&
                ((_i = fo = window),
                (po = _i.document || {}),
                (qt.gsap = Mt),
                (_i.gsapVersions || (_i.gsapVersions = [])).push(Mt.version),
                il(ss || _i.GreenSockGlobals || (!_i.gsap && _i) || {}),
                Cl.forEach(El)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                c ||
                function (v) {
                  return setTimeout(v, (o - d.time * 1e3 + 1) | 0);
                }),
              (wn = 1),
              h(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (wn = 0), (u = pn);
          },
          lagSmoothing: function (v, _) {
            (e = v || 1 / 0), (t = Math.min(_ || 33, e));
          },
          fps: function (v) {
            (s = 1e3 / (v || 240)), (o = d.time * 1e3 + s);
          },
          add: function (v, _, w) {
            var E = _
              ? function (g, S, x, P) {
                  v(g, S, x, P), d.remove(E);
                }
              : v;
            return d.remove(v), a[w ? "unshift" : "push"](E), Fr(), E;
          },
          remove: function (v, _) {
            ~(_ = a.indexOf(v)) && a.splice(_, 1) && f >= _ && f--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    Fr = function () {
      return !wn && Wt.wake();
    },
    it = {},
    Xd = /^[\d.\-M][\d.\-,\s]/,
    Yd = /["']/g,
    jd = function (e) {
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
          (t[n] = isNaN(u) ? u.replace(Yd, "").trim() : +u),
          (n = l.substr(a + 1).trim());
      return t;
    },
    Ud = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        n = e.indexOf("(", t);
      return e.substring(t, ~n && n < i ? e.indexOf(")", i + 1) : i);
    },
    Kd = function (e) {
      var t = (e + "").split("("),
        i = it[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [jd(t[1])] : Ud(e).split(",").map(ll)
          )
        : it._CE && Xd.test(e)
        ? it._CE("", e)
        : i;
    },
    Ml = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Dl = function r(e, t) {
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
    ar = function (e, t) {
      return (e && (Le(e) ? e : it[e] || Kd(e))) || t;
    },
    lr = function (e, t, i, n) {
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
        Lt(e, function (a) {
          (it[a] = qt[a] = s), (it[(o = a.toLowerCase())] = i);
          for (var l in s)
            it[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = it[a + "." + l] = s[l];
        }),
        s
      );
    },
    kl = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Ao = function r(e, t, i) {
      var n = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / oo) * (Math.asin(1 / n) || 0),
        a = function (c) {
          return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Td((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : kl(a);
      return (
        (s = oo / s),
        (l.config = function (u, c) {
          return r(e, u, c);
        }),
        l
      );
    },
    Po = function r(e, t) {
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
            : kl(i);
      return (
        (n.config = function (s) {
          return r(e, s);
        }),
        n
      );
    };
  Lt("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
    var t = e < 5 ? e + 1 : e;
    lr(
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
    lr("Elastic", Ao("in"), Ao("out"), Ao()),
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
      lr(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    lr("Expo", function (r) {
      return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
    }),
    lr("Circ", function (r) {
      return -(Ka(1 - r * r) - 1);
    }),
    lr("Sine", function (r) {
      return r === 1 ? 1 : -xd(r * bd) + 1;
    }),
    lr("Back", Po("in"), Po("out"), Po()),
    (it.SteppedEase =
      it.steps =
      qt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              n = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - me;
            return function (a) {
              return (((n * gn(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Dr.ease = it["quad.out"]),
    Lt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (r) {
        return (_o += r + "," + r + "Params,");
      }
    );
  var Il = function (e, t) {
      (this.id = Sd++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : ol),
        (this.set = t ? t.getSetter : ko);
    },
    bn = (function () {
      function r(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Nr(this, +t.duration, 1, 1),
          (this.data = t.data),
          Se && ((this._ctx = Se), Se.data.push(this)),
          wn || Wt.wake();
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
              Nr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, n) {
          if ((Fr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ps(this, i), !s._dp || s.parent || pl(s, this);
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
              (this._ts || (this._pTime = i), al(this, i, n)),
            this
          );
        }),
        (e.time = function (i, n) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + fl(this)) %
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
                  fl(this),
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
            ? zr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, n) {
          if (!arguments.length) return this._rts === -me ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? ds(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -me ? 0 : this._rts),
            this.totalTime(
              gn(-Math.abs(this._delay), this.totalDuration(), s),
              n !== !1
            ),
            fs(this),
            Md(this)
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
                  : (Fr(),
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
            (Pt(i) ? this.totalDuration() : this.duration()) /
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
              ? ds(n.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = Ad);
          var n = tt;
          return (
            (tt = i),
            wo(this) &&
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
            ? ((this._repeat = i === 1 / 0 ? -2 : i), gl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var n = this._time;
            return (this._rDelay = i), gl(this), n ? this.time(n) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, n) {
          return this.totalTime(ti(this, i), Pt(n));
        }),
        (e.restart = function (i, n) {
          return (
            this.play().totalTime(i ? -this._delay : 0, Pt(n)),
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
            var o = Le(i) ? i : ul,
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
          _n(this);
        }),
        r
      );
    })();
  $t(bn.prototype, {
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
    nr(e, r);
    function e(i, n) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = r.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = Pt(i.sortChildren)),
        Te && yi(i.parent || Te, et(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && hl(et(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (n, s, o) {
        return mn(0, arguments, this), this;
      }),
      (t.from = function (n, s, o) {
        return mn(1, arguments, this), this;
      }),
      (t.fromTo = function (n, s, o, a) {
        return mn(2, arguments, this), this;
      }),
      (t.set = function (n, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          hn(s).repeatDelay || (s.repeat = 0),
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
          (hn(o).immediateRender = Pt(o.immediateRender)),
          this.staggerTo(n, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (n, s, o, a, l, u, c, d) {
        return (
          (a.startAt = o),
          (hn(a).immediateRender = Pt(a.immediateRender)),
          this.staggerTo(n, s, a, l, u, c, d)
        );
      }),
      (t.render = function (n, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = n <= 0 ? 0 : ze(n),
          d = this._zTime < 0 != n < 0 && (this._initted || !u),
          m,
          f,
          h,
          p,
          v,
          _,
          w,
          E,
          g,
          S,
          x,
          P;
        if (
          (this !== Te && c > l && n >= 0 && (c = l),
          c !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (n += this._time - a)),
            (m = c),
            (g = this._start),
            (E = this._ts),
            (_ = !E),
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
              ((m = ze(c % v)),
              c === l
                ? ((p = this._repeat), (m = u))
                : ((S = ze(c / v)),
                  (p = ~~S),
                  p && p === S && ((m = u), p--),
                  m > u && (m = u)),
              (S = zr(this._tTime, v)),
              !a &&
                this._tTime &&
                S !== p &&
                this._tTime - S * v - this._dur <= 0 &&
                (S = p),
              x && p & 1 && ((m = u - m), (P = 1)),
              p !== S && !this._lock)
            ) {
              var O = x && S & 1,
                k = O === (x && p & 1);
              if (
                (p < S && (O = !O),
                (a = O ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (P ? 0 : ze(p * v)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && Ht(this, "onRepeat"),
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
              Dl(this, P);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = Rd(this, ze(a), ze(m))), w && (c -= m - (m = w._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !E),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = n),
              (a = 0)),
            !a && c && !s && !S && (Ht(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (m >= a && n >= 0)
            for (f = this._first; f; ) {
              if (
                ((h = f._next), (f._act || m >= f._start) && f._ts && w !== f)
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
                  (w = 0), h && (c += this._zTime = -me);
                  break;
                }
              }
              f = h;
            }
          else {
            f = this._last;
            for (var M = n < 0 ? n : m; f; ) {
              if (
                ((h = f._prev), (f._act || M <= f._end) && f._ts && w !== f)
              ) {
                if (f.parent !== this) return this.render(n, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (M - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (M - f._start) * f._ts,
                    s,
                    o || (tt && wo(f))
                  ),
                  m !== this._time || (!this._ts && !_))
                ) {
                  (w = 0), h && (c += this._zTime = M ? -me : me);
                  break;
                }
              }
              f = h;
            }
          }
          if (
            w &&
            !s &&
            (this.pause(),
            (w.render(m >= a ? 0 : -me)._zTime = m >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = g), fs(this), this.render(n, s, o);
          this._onUpdate && !s && Ht(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (g === this._start || Math.abs(E) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((n || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Vi(this, 1),
                !s &&
                  !(n < 0 && !a) &&
                  (c || a || !l) &&
                  (Ht(
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
        if ((Di(s) || (s = ti(this, s, n)), !(n instanceof bn))) {
          if (ot(n))
            return (
              n.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ye(n)) return this.addLabel(n, s);
          if (Le(n)) n = Ne.delayedCall(0, n);
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
          : Le(n)
          ? this.killTweensOf(n)
          : (n.parent === this && cs(this, n),
            n === this._recent && (this._recent = this._last),
            or(this));
      }),
      (t.totalTime = function (n, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ze(
                Wt.time -
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
        var a = Ne.delayedCall(0, s || pn, o);
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
          Wi !== a[l] && a[l].kill(n, s);
        return this;
      }),
      (t.getTweensOf = function (n, s) {
        for (var o = [], a = ii(n), l = this._first, u = Di(s), c; l; )
          l instanceof Ne
            ? Pd(l._targets, a) &&
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
          a = ti(o, n),
          l = s,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          m = l.immediateRender,
          f,
          h = Ne.to(
            o,
            $t(
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
                    h._dur !== v && Nr(h, v, 0, 1).render(h._time, !0, !0),
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
        return this.tweenTo(s, $t({ startAt: { time: ti(this, n) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (n) {
        return n === void 0 && (n = this._time), Tl(this, ti(this, n));
      }),
      (t.previousLabel = function (n) {
        return n === void 0 && (n = this._time), Tl(this, ti(this, n), 1);
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
        return or(this);
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
          or(this)
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
          Nr(o, o === Te && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (n) {
        if ((Te._ts && (al(Te, ds(n, Te)), (nl = Wt.frame)), Wt.frame >= sl)) {
          sl += Ft.autoSleep || 120;
          var s = Te._first;
          if ((!s || !s._ts) && Ft.autoSleep && Wt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Wt.sleep();
          }
        }
      }),
      e
    );
  })(bn);
  $t(yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zd = function (e, t, i, n, s, o, a) {
      var l = new Ot(this._pt, e, t, 0, 1, ql, null, s),
        u = 0,
        c = 0,
        d,
        m,
        f,
        h,
        p,
        v,
        _,
        w;
      for (
        l.b = i,
          l.e = n,
          i += "",
          n += "",
          (_ = ~n.indexOf("random(")) && (n = vn(n)),
          o && ((w = [i, n]), o(w, e, t), (i = w[0]), (n = w[1])),
          m = i.match(co) || [];
        (d = co.exec(n));

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
              c: h.charAt(1) === "=" ? Ir(v, h) - v : parseFloat(h) - v,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = co.lastIndex));
      return (
        (l.c = u < n.length ? n.substring(u, n.length) : ""),
        (l.fp = a),
        (Ja.test(n) || _) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Lo = function (e, t, i, n, s, o, a, l, u, c) {
      Le(n) && (n = n(s || 0, e, o));
      var d = e[t],
        m =
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
        f = Le(d) ? (u ? rf : Bl) : Do,
        h;
      if (
        (Ye(n) &&
          (~n.indexOf("random(") && (n = vn(n)),
          n.charAt(1) === "=" &&
            ((h = Ir(m, n) + (at(m) || 0)), (h || h === 0) && (n = h))),
        !c || m !== n || Oo)
      )
        return !isNaN(m * n) && n !== ""
          ? ((h = new Ot(
              this._pt,
              e,
              t,
              +m || 0,
              n - (m || 0),
              typeof d == "boolean" ? sf : Fl,
              0,
              f
            )),
            u && (h.fp = u),
            a && h.modifier(a, this, e),
            (this._pt = h))
          : (!d && !(t in e) && ho(t, n),
            Zd.call(this, e, t, m, n, f, l || Ft.stringFilter, u));
    },
    Qd = function (e, t, i, n, s) {
      if (
        (Le(e) && (e = Sn(e, s, t, i, n)),
        !vi(e) || (e.style && e.nodeType) || ot(e) || Za(e))
      )
        return Ye(e) ? Sn(e, s, t, i, n) : e;
      var o = {},
        a;
      for (a in e) o[a] = Sn(e[a], s, t, i, n);
      return o;
    },
    Rl = function (e, t, i, n, s, o) {
      var a, l, u, c;
      if (
        Vt[e] &&
        (a = new Vt[e]()).init(
          s,
          a.rawVars ? t[e] : Qd(t[e], n, s, o, i),
          i,
          n,
          o
        ) !== !1 &&
        ((i._pt = l = new Ot(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== Br)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Wi,
    Oo,
    Mo = function r(e, t, i) {
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
        w = _ && _.data === "nested" ? _.vars.targets : v,
        E = e._overwrite === "auto" && !so,
        g = e.timeline,
        S,
        x,
        P,
        O,
        k,
        M,
        R,
        A,
        z,
        b,
        y,
        T,
        L;
      if (
        (g && (!m || !s) && (s = "none"),
        (e._ease = ar(s, Dr.ease)),
        (e._yEase = d ? Ml(ar(d === !0 ? s : d, Dr.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !g && !!n.runBackwards),
        !g || (m && !n.stagger))
      ) {
        if (
          ((A = v[0] ? sr(v[0]).harness : 0),
          (T = A && n[A.prop]),
          (S = us(n, mo)),
          p &&
            (p._zTime < 0 && p.progress(1),
            t < 0 && c && a && !f
              ? p.render(-1, !0)
              : p.revert(c && h ? os : Ed),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (Vi(
              (e._startAt = Ne.set(
                v,
                $t(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: !p && Pt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return Ht(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (tt || (!a && !f)) && e._startAt.revert(os),
            a && h && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && h && !p) {
          if (
            (t && (a = !1),
            (P = $t(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && Pt(l),
                immediateRender: a,
                stagger: 0,
                parent: _,
              },
              S
            )),
            T && (P[A.prop] = T),
            Vi((e._startAt = Ne.set(v, P))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (tt ? e._startAt.revert(os) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            r(e._startAt, me, me);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (h && Pt(l)) || (l && !h), x = 0;
          x < v.length;
          x++
        ) {
          if (
            ((k = v[x]),
            (R = k._gsap || yo(v)[x]._gsap),
            (e._ptLookup[x] = b = {}),
            go[R.id] && qi.length && ls(),
            (y = w === v ? x : w.indexOf(k)),
            A &&
              (z = new A()).init(k, T || S, e, y, w) !== !1 &&
              ((e._pt = O =
                new Ot(e._pt, k, z.name, 0, 1, z.render, z, 0, z.priority)),
              z._props.forEach(function (D) {
                b[D] = O;
              }),
              z.priority && (M = 1)),
            !A || T)
          )
            for (P in S)
              Vt[P] && (z = Rl(P, S, e, y, k, w))
                ? z.priority && (M = 1)
                : (b[P] = O =
                    Lo.call(e, k, P, "get", S[P], y, w, 0, n.stringFilter));
          e._op && e._op[x] && e.kill(k, e._op[x]),
            E &&
              e._pt &&
              ((Wi = e),
              Te.killTweensOf(k, b, e.globalTime(t)),
              (L = !e.parent),
              (Wi = 0)),
            e._pt && l && (go[R.id] = 1);
        }
        M && Vl(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !L),
        m && t <= 0 && g.render(ei, !0, !0);
    },
    Jd = function (e, t, i, n, s, o, a, l) {
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
              (Oo = 1),
              (e.vars[t] = "+=0"),
              Mo(e, a),
              (Oo = 0),
              l ? fn(t + " not eligible for reset") : 1
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
    ef = function (e, t) {
      var i = e[0] ? sr(e[0]).harness : 0,
        n = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!n) return t;
      s = Rr({}, t);
      for (o in n)
        if (o in s)
          for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    tf = function (e, t, i, n) {
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
    Sn = function (e, t, i, n, s) {
      return Le(e)
        ? e.call(t, i, n, s)
        : Ye(e) && ~e.indexOf("random(")
        ? vn(e)
        : e;
    },
    zl = _o + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Nl = {};
  Lt(zl + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
    return (Nl[r] = 1);
  });
  var Ne = (function (r) {
    nr(e, r);
    function e(i, n, s, o) {
      var a;
      typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
        (a = r.call(this, o ? n : hn(n)) || this);
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
        w = n.parent || Te,
        E = (ot(i) || Za(i) ? Di(i[0]) : "length" in n) ? [i] : ii(i),
        g,
        S,
        x,
        P,
        O,
        k,
        M,
        R;
      if (
        ((a._targets = E.length
          ? yo(E)
          : fn(
              "GSAP target " + i + " not found. https://gsap.com",
              !Ft.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        h || m || ns(u) || ns(c))
      ) {
        if (
          ((n = a.vars),
          (g = a.timeline =
            new yt({
              data: "nested",
              defaults: p || {},
              targets: w && w.data === "nested" ? w.vars.targets : E,
            })),
          g.kill(),
          (g.parent = g._dp = et(a)),
          (g._start = 0),
          m || ns(u) || ns(c))
        ) {
          if (((P = E.length), (M = m && yl(m)), vi(m)))
            for (O in m) ~zl.indexOf(O) && (R || (R = {}), (R[O] = m[O]));
          for (S = 0; S < P; S++)
            (x = us(n, Nl)),
              (x.stagger = 0),
              _ && (x.yoyoEase = _),
              R && Rr(x, R),
              (k = E[S]),
              (x.duration = +Sn(u, et(a), S, k, E)),
              (x.delay = (+Sn(c, et(a), S, k, E) || 0) - a._delay),
              !m &&
                P === 1 &&
                x.delay &&
                ((a._delay = c = x.delay), (a._start += c), (x.delay = 0)),
              g.to(k, x, M ? M(S, k, E) : 0),
              (g._ease = it.none);
          g.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (h) {
          hn($t(g.vars.defaults, { ease: "none" })),
            (g._ease = ar(h.ease || n.ease || "none"));
          var A = 0,
            z,
            b,
            y;
          if (ot(h))
            h.forEach(function (T) {
              return g.to(E, T, ">");
            }),
              g.duration();
          else {
            x = {};
            for (O in h)
              O === "ease" || O === "easeEach" || tf(O, h[O], x, h.easeEach);
            for (O in x)
              for (
                z = x[O].sort(function (T, L) {
                  return T.t - L.t;
                }),
                  A = 0,
                  S = 0;
                S < z.length;
                S++
              )
                (b = z[S]),
                  (y = {
                    ease: b.e,
                    duration: ((b.t - (S ? z[S - 1].t : 0)) / 100) * u,
                  }),
                  (y[O] = b.v),
                  g.to(E, y, A),
                  (A += y.duration);
            g.duration() < u && g.to({}, { duration: u - g.duration() });
          }
        }
        u || a.duration((u = g.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !so && ((Wi = et(a)), Te.killTweensOf(E), (Wi = 0)),
        yi(w, et(a), s),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (d ||
          (!u &&
            !h &&
            a._start === ze(w._time) &&
            Pt(d) &&
            Dd(et(a)) &&
            w.data !== "nested")) &&
          ((a._tTime = -me), a.render(Math.max(0, -c) || 0)),
        v && hl(et(a), v),
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
          m,
          f,
          h,
          p,
          v,
          _,
          w,
          E,
          g;
        if (!u) Id(this, n, s, o);
        else if (
          d !== this._tTime ||
          !n ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((m = d), (E = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(p * 100 + n, s, o);
            if (
              ((m = ze(d % p)),
              d === l
                ? ((h = this._repeat), (m = u))
                : ((v = ze(d / p)),
                  (h = ~~v),
                  h && h === v ? ((m = u), h--) : m > u && (m = u)),
              (_ = this._yoyo && h & 1),
              _ && ((g = this._yEase), (m = u - m)),
              (v = zr(this._tTime, p)),
              m === a && !o && this._initted && h === v)
            )
              return (this._tTime = d), this;
            h !== v &&
              (E && this._yEase && Dl(E, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                m !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(ze(p * h), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (ml(this, c ? n : m, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && h !== v))
              return this;
            if (u !== this._dur) return this.render(n, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (g || this._ease)(m / u)),
            this._from && (this.ratio = w = 1 - w),
            !a && d && !s && !v && (Ht(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(w, f.d), (f = f._next);
          (E && E.render(n < 0 ? n : E._dur * E._ease(m / this._dur), s, o)) ||
            (this._startAt && (this._zTime = n)),
            this._onUpdate &&
              !s &&
              (c && bo(this, n, s, o), Ht(this, "onUpdate")),
            this._repeat &&
              h !== v &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Ht(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && bo(this, n, !0, !0),
              (n || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Vi(this, 1),
              !s &&
                !(c && !a) &&
                (d || a || _) &&
                (Ht(this, d === l ? "onComplete" : "onReverseComplete", !0),
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
        wn || Wt.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Mo(this, u),
          (c = this._ease(u / this._dur)),
          Jd(this, n, s, o, a, c, u, l)
            ? this.resetTo(n, s, o, a, 1)
            : (ps(this, 0),
              this.parent ||
                dl(
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
              : this.scrollTrigger && this.scrollTrigger.kill(!!tt),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(n, s, Wi && Wi.vars.overwrite !== !0)
              ._first || _n(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Nr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = n ? ii(n) : a,
          u = this._ptLookup,
          c = this._pt,
          d,
          m,
          f,
          h,
          p,
          v,
          _;
        if ((!s || s === "all") && Od(a, l))
          return s === "all" && (this._pt = 0), _n(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Ye(s) &&
                ((p = {}),
                Lt(s, function (w) {
                  return (p[w] = 1);
                }),
                (s = p)),
              (s = ef(a, s))),
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
                  ((!("kill" in v.d) || v.d.kill(p) === !0) &&
                    cs(this, v, "_pt"),
                  delete m[p]),
                f !== "all" && (f[p] = 1);
          }
        return this._initted && !this._pt && c && _n(this), this;
      }),
      (e.to = function (n, s) {
        return new e(n, s, arguments[2]);
      }),
      (e.from = function (n, s) {
        return mn(1, arguments);
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
        return mn(2, arguments);
      }),
      (e.set = function (n, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
      }),
      (e.killTweensOf = function (n, s, o) {
        return Te.killTweensOf(n, s, o);
      }),
      e
    );
  })(bn);
  $t(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Lt("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Ne[r] = function () {
        var e = new yt(),
          t = xo.call(arguments, 0);
        return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
      };
    });
  var Do = function (e, t, i) {
      return (e[t] = i);
    },
    Bl = function (e, t, i) {
      return e[t](i);
    },
    rf = function (e, t, i, n) {
      return e[t](n.fp, i);
    },
    nf = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    ko = function (e, t) {
      return Le(e[t]) ? Bl : ao(e[t]) && e.setAttribute ? nf : Do;
    },
    Fl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    sf = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    ql = function (e, t) {
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
    Io = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    of = function (e, t, i, n) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === n && s.modifier(e, t, i), (s = o);
    },
    af = function (e) {
      for (var t = this._pt, i, n; t; )
        (n = t._next),
          (t.p === e && !t.op) || t.op === e
            ? cs(this, t, "_pt")
            : t.dep || (i = 1),
          (t = n);
      return !i;
    },
    lf = function (e, t, i, n) {
      n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
    },
    Vl = function (e) {
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
          (this.r = a || Fl),
          (this.d = l || this),
          (this.set = u || Do),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = r.prototype;
      return (
        (e.modifier = function (i, n, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = lf),
            (this.m = i),
            (this.mt = s),
            (this.tween = n);
        }),
        r
      );
    })();
  Lt(
    _o +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (r) {
      return (mo[r] = 1);
    }
  ),
    (qt.TweenMax = qt.TweenLite = Ne),
    (qt.TimelineLite = qt.TimelineMax = yt),
    (Te = new yt({
      sortChildren: !1,
      defaults: Dr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Ft.stringFilter = Ol);
  var ur = [],
    hs = {},
    uf = [],
    $l = 0,
    cf = 0,
    Ro = function (e) {
      return (hs[e] || uf).map(function (t) {
        return t();
      });
    },
    zo = function () {
      var e = Date.now(),
        t = [];
      e - $l > 2 &&
        (Ro("matchMediaInit"),
        ur.forEach(function (i) {
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
        Ro("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (n) {
            return i.add(null, n);
          });
        }),
        ($l = e),
        Ro("matchMedia"));
    },
    Hl = (function () {
      function r(t, i) {
        (this.selector = i && To(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = cf++),
          t && this.add(t);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          Le(i) && ((s = n), (n = i), (i = Le));
          var o = this,
            a = function () {
              var u = Se,
                c = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = To(s)),
                (Se = o),
                (d = n.apply(o, arguments)),
                Le(d) && o._r.push(d),
                (Se = u),
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
            for (var o = ur.length; o--; )
              ur[o].id === this.id && ur.splice(o, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        r
      );
    })(),
    df = (function () {
      function r(t) {
        (this.contexts = []), (this.scope = t), Se && Se.data.push(this);
      }
      var e = r.prototype;
      return (
        (e.add = function (i, n, s) {
          vi(i) || (i = { matches: i });
          var o = new Hl(0, s || this.scope),
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
                  (ur.indexOf(o) < 0 && ur.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(zo)
                    : l.addEventListener("change", zo)));
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
    ms = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (n) {
          return El(n);
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
        var s = sr(e || {}).get,
          o = i ? ul : ll;
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
          a = sr(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var d = new o();
                (Br._pt = 0),
                  d.init(e, i ? c + i : c, Br, 0, [e]),
                  d.render(1, d),
                  Br._pt && Io(1, Br);
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
            $t(
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
        return e && e.ease && (e.ease = ar(e.ease, Dr.ease)), cl(Dr, e || {});
      },
      config: function (e) {
        return cl(Ft, e || {});
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
            !qt[a] &&
            fn(t + " effect requires " + a + " plugin.")
          );
        }),
          (vo[t] = function (a, l, u) {
            return i(ii(a), $t(l || {}, s), u);
          }),
          o &&
            (yt.prototype[t] = function (a, l, u) {
              return this.add(vo[t](a, vi(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        it[e] = ar(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? ar(e, t) : it;
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
          i.smoothChildTiming = Pt(e.smoothChildTiming),
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
        return e ? new Hl(e, t) : Se;
      },
      matchMedia: function (e) {
        return new df(e);
      },
      matchMediaRefresh: function () {
        return (
          ur.forEach(function (e) {
            var t = e.conditions,
              i,
              n;
            for (n in t) t[n] && ((t[n] = !1), (i = 1));
            i && e.revert();
          }) || zo()
        );
      },
      addEventListener: function (e, t) {
        var i = hs[e] || (hs[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = hs[e],
          n = i && i.indexOf(t);
        n >= 0 && i.splice(n, 1);
      },
      utils: {
        wrap: $d,
        wrapYoyo: Hd,
        distribute: yl,
        random: bl,
        snap: wl,
        normalize: Vd,
        getUnit: at,
        clamp: Nd,
        splitColor: Al,
        toArray: ii,
        selector: To,
        mapRange: xl,
        pipe: Fd,
        unitize: qd,
        interpolate: Wd,
        shuffle: _l,
      },
      install: il,
      effects: vo,
      ticker: Wt,
      updateRoot: yt.updateRoot,
      plugins: Vt,
      globalTimeline: Te,
      core: {
        PropTween: Ot,
        globals: rl,
        Tween: Ne,
        Timeline: yt,
        Animation: bn,
        getCache: sr,
        _removeLinkedListItem: cs,
        reverting: function () {
          return tt;
        },
        context: function (e) {
          return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
        },
        suppressOverwrites: function (e) {
          return (so = e);
        },
      },
    };
  Lt("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
    return (ms[r] = Ne[r]);
  }),
    Wt.add(yt.updateRoot),
    (Br = ms.to({}, { duration: 0 }));
  var ff = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    pf = function (e, t) {
      var i = e._targets,
        n,
        s,
        o;
      for (n in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][n]),
            o &&
              (o = o.d) &&
              (o._pt && (o = ff(o, n)),
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
              (Ye(s) &&
                ((l = {}),
                Lt(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            pf(a, s);
          };
        },
      };
    },
    Mt =
      ms.registerPlugin(
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
        No("roundProps", Co),
        No("modifiers"),
        No("snap", wl)
      ) || ms;
  (Ne.version = yt.version = Mt.version = "3.13.0"), (tl = 1), lo() && Fr();
  /*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var Wl,
    Gi,
    qr,
    Bo,
    cr,
    Gl,
    Fo,
    hf = function () {
      return typeof window < "u";
    },
    ki = {},
    dr = 180 / Math.PI,
    Vr = Math.PI / 180,
    $r = Math.atan2,
    Xl = 1e8,
    qo = /([A-Z])/g,
    mf = /(left|right|width|margin|padding|x)/i,
    gf = /[\s,\(]\S/,
    wi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Vo = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    vf = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    _f = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    yf = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    Yl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    jl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    wf = function (e, t, i) {
      return (e.style[t] = i);
    },
    bf = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Sf = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    xf = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    Tf = function (e, t, i, n, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    Cf = function (e, t, i, n, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    Ce = "transform",
    Dt = Ce + "Origin",
    Ef = function r(e, t) {
      var i = this,
        n = this.target,
        s = n.style,
        o = n._gsap;
      if (e in ki && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = wi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = Ii(n, a));
                })
              : (this.tfm[e] = o.x ? o[e] : Ii(n, e)),
            e === Dt && (this.tfm.zOrigin = o.zOrigin);
        else
          return wi.transform.split(",").forEach(function (a) {
            return r.call(i, a, t);
          });
        if (this.props.indexOf(Ce) >= 0) return;
        o.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(Dt, t, "")),
          (e = Ce);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Ul = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Af = function () {
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
                : e[s].replace(qo, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) n[o] = this.tfm[o];
        n.svg &&
          (n.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Fo()),
          (!s || !s.isStart) &&
            !i[Ce] &&
            (Ul(i),
            n.zOrigin &&
              i[Dt] &&
              ((i[Dt] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    },
    Kl = function (e, t) {
      var i = { target: e, props: [], revert: Af, save: Ef };
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
    Zl,
    $o = function (e, t) {
      var i = Gi.createElementNS
        ? Gi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Gi.createElement(e);
      return i && i.style ? i : Gi.createElement(e);
    },
    ri = function r(e, t, i) {
      var n = getComputedStyle(e);
      return (
        n[t] ||
        n.getPropertyValue(t.replace(qo, "-$1").toLowerCase()) ||
        n.getPropertyValue(t) ||
        (!i && r(e, Hr(t) || t, 1)) ||
        ""
      );
    },
    Ql = "O,Moz,ms,Ms,Webkit".split(","),
    Hr = function (e, t, i) {
      var n = t || cr,
        s = n.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Ql[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ql[o] : "") + e;
    },
    Ho = function () {
      hf() &&
        window.document &&
        ((Wl = window),
        (Gi = Wl.document),
        (qr = Gi.documentElement),
        (cr = $o("div") || { style: {} }),
        $o("div"),
        (Ce = Hr(Ce)),
        (Dt = Ce + "Origin"),
        (cr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Zl = !!Hr("perspective")),
        (Fo = Mt.core.reverting),
        (Bo = 1));
    },
    Jl = function (e) {
      var t = e.ownerSVGElement,
        i = $o(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        n = e.cloneNode(!0),
        s;
      (n.style.display = "block"), i.appendChild(n), qr.appendChild(i);
      try {
        s = n.getBBox();
      } catch {}
      return i.removeChild(n), qr.removeChild(i), s;
    },
    eu = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    tu = function (e) {
      var t, i;
      try {
        t = e.getBBox();
      } catch {
        (t = Jl(e)), (i = 1);
      }
      return (
        (t && (t.width || t.height)) || i || (t = Jl(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +eu(e, ["x", "cx", "x1"]) || 0,
              y: +eu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    iu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && tu(e));
    },
    fr = function (e, t) {
      if (t) {
        var i = e.style,
          n;
        t in ki && t !== Dt && (t = Ce),
          i.removeProperty
            ? ((n = t.substr(0, 2)),
              (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                n === "--" ? t : t.replace(qo, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Xi = function (e, t, i, n, s, o) {
      var a = new Ot(e._pt, t, i, 0, 1, o ? jl : Yl);
      return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a;
    },
    ru = { deg: 1, rad: 1, turn: 1 },
    Pf = { grid: 1, flex: 1 },
    Yi = function r(e, t, i, n) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = cr.style,
        l = mf.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        m = n === "px",
        f = n === "%",
        h,
        p,
        v,
        _;
      if (n === o || !s || ru[n] || ru[o]) return s;
      if (
        (o !== "px" && !m && (s = r(e, t, i, "px")),
        (_ = e.getCTM && iu(e)),
        (f || o === "%") && (ki[t] || ~t.indexOf("adius")))
      )
        return (
          (h = _ ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ke(f ? (s / h) * d : (s / 100) * h)
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
        v && f && v.width && l && v.time === Wt.time && !v.uncache)
      )
        return ke((s / v.width) * d);
      if (f && (t === "height" || t === "width")) {
        var w = e.style[t];
        (e.style[t] = d + n), (h = e[c]), w ? (e.style[t] = w) : fr(e, t);
      } else
        (f || o === "%") &&
          !Pf[ri(p, "display")] &&
          (a.position = ri(e, "position")),
          p === e && (a.position = "static"),
          p.appendChild(cr),
          (h = cr[c]),
          p.removeChild(cr),
          (a.position = "absolute");
      return (
        l && f && ((v = sr(p)), (v.time = Wt.time), (v.width = p[c])),
        ke(m ? (h * s) / d : h && s ? (d / h) * s : 0)
      );
    },
    Ii = function (e, t, i, n) {
      var s;
      return (
        Bo || Ho(),
        t in wi &&
          t !== "transform" &&
          ((t = wi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        ki[t] && t !== "transform"
          ? ((s = Tn(e, n)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : vs(ri(e, Dt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
              (s =
                (gs[t] && gs[t](e, t, i)) ||
                ri(e, t) ||
                ol(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Yi(e, t, s, i) + i : s
      );
    },
    Lf = function (e, t, i, n) {
      if (!i || i === "none") {
        var s = Hr(t, e, 1),
          o = s && ri(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = ri(e, "borderTopColor"));
      }
      var a = new Ot(this._pt, e.style, t, 0, 1, ql),
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
        w,
        E,
        g,
        S;
      if (
        ((a.b = i),
        (a.e = n),
        (i += ""),
        (n += ""),
        n.substring(0, 6) === "var(--" &&
          (n = ri(e, n.substring(4, n.indexOf(")")))),
        n === "auto" &&
          ((p = e.style[t]),
          (e.style[t] = n),
          (n = ri(e, t) || n),
          p ? (e.style[t] = p) : fr(e, t)),
        (c = [i, n]),
        Ol(c),
        (i = c[0]),
        (n = c[1]),
        (m = i.match(kr) || []),
        (S = n.match(kr) || []),
        S.length)
      ) {
        for (; (d = kr.exec(n)); )
          (v = d[0]),
            (w = n.substring(l, d.index)),
            h
              ? (h = (h + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (h = 1),
            v !== (p = m[u++] || "") &&
              ((f = parseFloat(p) || 0),
              (g = p.substr((f + "").length)),
              v.charAt(1) === "=" && (v = Ir(f, v) + g),
              (_ = parseFloat(v)),
              (E = v.substr((_ + "").length)),
              (l = kr.lastIndex - E.length),
              E ||
                ((E = E || Ft.units[t] || g),
                l === n.length && ((n += E), (a.e += E))),
              g !== E && (f = Yi(e, t, p, E) || 0),
              (a._pt = {
                _next: a._pt,
                p: w || u === 1 ? w : ",",
                s: f,
                c: _ - f,
                m: (h && h < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < n.length ? n.substring(l, n.length) : "";
      } else a.r = t === "display" && n === "none" ? jl : Yl;
      return Ja.test(n) && (a.e = 0), (this._pt = a), a;
    },
    nu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Of = function (e) {
      var t = e.split(" "),
        i = t[0],
        n = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || n === "left" || n === "right") &&
          ((e = i), (i = n), (n = e)),
        (t[0] = nu[i] || i),
        (t[1] = nu[n] || n),
        t.join(" ")
      );
    },
    Mf = function (e, t) {
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
              ki[a] && ((l = 1), (a = a === "transformOrigin" ? Dt : Ce)),
              fr(i, a);
        l &&
          (fr(i, Ce),
          o &&
            (o.svg && i.removeAttribute("transform"),
            (n.scale = n.rotate = n.translate = "none"),
            Tn(i, 1),
            (o.uncache = 1),
            Ul(n)));
      }
    },
    gs = {
      clearProps: function (e, t, i, n, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Ot(e._pt, t, i, 0, 0, Mf));
          return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    xn = [1, 0, 0, 1, 0, 0],
    su = {},
    ou = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    au = function (e) {
      var t = ri(e, Ce);
      return ou(t) ? xn : t.substr(7).match(Qa).map(ke);
    },
    Wo = function (e, t) {
      var i = e._gsap || sr(e),
        n = e.style,
        s = au(e),
        o,
        a,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? xn : s)
        : (s === xn &&
            !e.offsetParent &&
            e !== qr &&
            !i.svg &&
            ((l = n.display),
            (n.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (a = e.nextElementSibling), qr.appendChild(e)),
            (s = au(e)),
            l ? (n.display = l) : fr(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : qr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    Go = function (e, t, i, n, s, o) {
      var a = e._gsap,
        l = s || Wo(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        d = a.xOffset || 0,
        m = a.yOffset || 0,
        f = l[0],
        h = l[1],
        p = l[2],
        v = l[3],
        _ = l[4],
        w = l[5],
        E = t.split(" "),
        g = parseFloat(E[0]) || 0,
        S = parseFloat(E[1]) || 0,
        x,
        P,
        O,
        k;
      i
        ? l !== xn &&
          (P = f * v - h * p) &&
          ((O = g * (v / P) + S * (-p / P) + (p * w - v * _) / P),
          (k = g * (-h / P) + S * (f / P) - (f * w - h * _) / P),
          (g = O),
          (S = k))
        : ((x = tu(e)),
          (g = x.x + (~E[0].indexOf("%") ? (g / 100) * x.width : g)),
          (S =
            x.y + (~(E[1] || E[0]).indexOf("%") ? (S / 100) * x.height : S))),
        n || (n !== !1 && a.smooth)
          ? ((_ = g - u),
            (w = S - c),
            (a.xOffset = d + (_ * f + w * p) - _),
            (a.yOffset = m + (_ * h + w * v) - w))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = g),
        (a.yOrigin = S),
        (a.smooth = !!n),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[Dt] = "0px 0px"),
        o &&
          (Xi(o, a, "xOrigin", u, g),
          Xi(o, a, "yOrigin", c, S),
          Xi(o, a, "xOffset", d, a.xOffset),
          Xi(o, a, "yOffset", m, a.yOffset)),
        e.setAttribute("data-svg-origin", g + " " + S);
    },
    Tn = function (e, t) {
      var i = e._gsap || new Il(e);
      if ("x" in i && !t && !i.uncache) return i;
      var n = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = ri(e, Dt) || "0",
        c,
        d,
        m,
        f,
        h,
        p,
        v,
        _,
        w,
        E,
        g,
        S,
        x,
        P,
        O,
        k,
        M,
        R,
        A,
        z,
        b,
        y,
        T,
        L,
        D,
        I,
        C,
        F,
        V,
        Q,
        X,
        ie;
      return (
        (c = d = m = p = v = _ = w = E = g = 0),
        (f = h = 1),
        (i.svg = !!(e.getCTM && iu(e))),
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
        (P = Wo(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((D = e.getBBox()),
              (u = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px"),
              (L = ""))
            : (L = !t && e.getAttribute("data-svg-origin")),
          Go(e, L || u, !!L || i.originIsAbsolute, i.smooth !== !1, P)),
        (S = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        P !== xn &&
          ((R = P[0]),
          (A = P[1]),
          (z = P[2]),
          (b = P[3]),
          (c = y = P[4]),
          (d = T = P[5]),
          P.length === 6
            ? ((f = Math.sqrt(R * R + A * A)),
              (h = Math.sqrt(b * b + z * z)),
              (p = R || A ? $r(A, R) * dr : 0),
              (w = z || b ? $r(z, b) * dr + p : 0),
              w && (h *= Math.abs(Math.cos(w * Vr))),
              i.svg && ((c -= S - (S * R + x * z)), (d -= x - (S * A + x * b))))
            : ((ie = P[6]),
              (Q = P[7]),
              (C = P[8]),
              (F = P[9]),
              (V = P[10]),
              (X = P[11]),
              (c = P[12]),
              (d = P[13]),
              (m = P[14]),
              (O = $r(ie, V)),
              (v = O * dr),
              O &&
                ((k = Math.cos(-O)),
                (M = Math.sin(-O)),
                (L = y * k + C * M),
                (D = T * k + F * M),
                (I = ie * k + V * M),
                (C = y * -M + C * k),
                (F = T * -M + F * k),
                (V = ie * -M + V * k),
                (X = Q * -M + X * k),
                (y = L),
                (T = D),
                (ie = I)),
              (O = $r(-z, V)),
              (_ = O * dr),
              O &&
                ((k = Math.cos(-O)),
                (M = Math.sin(-O)),
                (L = R * k - C * M),
                (D = A * k - F * M),
                (I = z * k - V * M),
                (X = b * M + X * k),
                (R = L),
                (A = D),
                (z = I)),
              (O = $r(A, R)),
              (p = O * dr),
              O &&
                ((k = Math.cos(O)),
                (M = Math.sin(O)),
                (L = R * k + A * M),
                (D = y * k + T * M),
                (A = A * k - R * M),
                (T = T * k - y * M),
                (R = L),
                (y = D)),
              v &&
                Math.abs(v) + Math.abs(p) > 359.9 &&
                ((v = p = 0), (_ = 180 - _)),
              (f = ke(Math.sqrt(R * R + A * A + z * z))),
              (h = ke(Math.sqrt(T * T + ie * ie))),
              (O = $r(y, T)),
              (w = Math.abs(O) > 2e-4 ? O * dr : 0),
              (g = X ? 1 / (X < 0 ? -X : X) : 0)),
          i.svg &&
            ((L = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !ou(ri(e, Ce))),
            L && e.setAttribute("transform", L))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (s
            ? ((f *= -1),
              (w += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((h *= -1), (w += w <= 0 ? 180 : -180))),
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
        (i.scaleX = ke(f)),
        (i.scaleY = ke(h)),
        (i.rotation = ke(p) + a),
        (i.rotationX = ke(v) + a),
        (i.rotationY = ke(_) + a),
        (i.skewX = w + a),
        (i.skewY = E + a),
        (i.transformPerspective = g + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (n[Dt] = vs(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Ft.force3D),
        (i.renderTransform = i.svg ? kf : Zl ? lu : Df),
        (i.uncache = 0),
        i
      );
    },
    vs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    Xo = function (e, t, i) {
      var n = at(t);
      return ke(parseFloat(t) + parseFloat(Yi(e, "x", i + "px", n))) + n;
    },
    Df = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        lu(e, t);
    },
    pr = "0deg",
    Cn = "0px",
    hr = ") ",
    lu = function (e, t) {
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
        w = i.target,
        E = i.zOrigin,
        g = "",
        S = (_ === "auto" && e && e !== 1) || _ === !0;
      if (E && (d !== pr || c !== pr)) {
        var x = parseFloat(c) * Vr,
          P = Math.sin(x),
          O = Math.cos(x),
          k;
        (x = parseFloat(d) * Vr),
          (k = Math.cos(x)),
          (o = Xo(w, o, P * k * -E)),
          (a = Xo(w, a, -Math.sin(x) * -E)),
          (l = Xo(w, l, O * k * -E + E));
      }
      v !== Cn && (g += "perspective(" + v + hr),
        (n || s) && (g += "translate(" + n + "%, " + s + "%) "),
        (S || o !== Cn || a !== Cn || l !== Cn) &&
          (g +=
            l !== Cn || S
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + hr),
        u !== pr && (g += "rotate(" + u + hr),
        c !== pr && (g += "rotateY(" + c + hr),
        d !== pr && (g += "rotateX(" + d + hr),
        (m !== pr || f !== pr) && (g += "skew(" + m + ", " + f + hr),
        (h !== 1 || p !== 1) && (g += "scale(" + h + ", " + p + hr),
        (w.style[Ce] = g || "translate(0, 0)");
    },
    kf = function (e, t) {
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
        w = i.forceCSS,
        E = parseFloat(o),
        g = parseFloat(a),
        S,
        x,
        P,
        O,
        k;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Vr),
            (u *= Vr),
            (S = Math.cos(l) * d),
            (x = Math.sin(l) * d),
            (P = Math.sin(l - u) * -m),
            (O = Math.cos(l - u) * m),
            u &&
              ((c *= Vr),
              (k = Math.tan(u - c)),
              (k = Math.sqrt(1 + k * k)),
              (P *= k),
              (O *= k),
              c &&
                ((k = Math.tan(c)),
                (k = Math.sqrt(1 + k * k)),
                (S *= k),
                (x *= k))),
            (S = ke(S)),
            (x = ke(x)),
            (P = ke(P)),
            (O = ke(O)))
          : ((S = d), (O = m), (x = P = 0)),
        ((E && !~(o + "").indexOf("px")) || (g && !~(a + "").indexOf("px"))) &&
          ((E = Yi(f, "x", o, "px")), (g = Yi(f, "y", a, "px"))),
        (h || p || v || _) &&
          ((E = ke(E + h - (h * S + p * P) + v)),
          (g = ke(g + p - (h * x + p * O) + _))),
        (n || s) &&
          ((k = f.getBBox()),
          (E = ke(E + (n / 100) * k.width)),
          (g = ke(g + (s / 100) * k.height))),
        (k =
          "matrix(" +
          S +
          "," +
          x +
          "," +
          P +
          "," +
          O +
          "," +
          E +
          "," +
          g +
          ")"),
        f.setAttribute("transform", k),
        w && (f.style[Ce] = k);
    },
    If = function (e, t, i, n, s) {
      var o = 360,
        a = Ye(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? dr : 1),
        u = l - n,
        c = n + u + "deg",
        d,
        m;
      return (
        a &&
          ((d = s.split("_")[1]),
          d === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          d === "cw" && u < 0
            ? (u = ((u + o * Xl) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * Xl) % o) - ~~(u / o) * o)),
        (e._pt = m = new Ot(e._pt, t, i, n, u, vf)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    uu = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    Rf = function (e, t, i) {
      var n = uu({}, i._gsap),
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
          (o[Ce] = t),
          (a = Tn(i, 1)),
          fr(i, Ce),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[Ce]),
          (o[Ce] = t),
          (a = Tn(i, 1)),
          (o[Ce] = u));
      for (l in ki)
        (u = n[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = at(u)),
            (h = at(c)),
            (d = f !== h ? Yi(i, l, u, h) : parseFloat(u)),
            (m = parseFloat(c)),
            (e._pt = new Ot(e._pt, a, l, d, m - d, Vo)),
            (e._pt.u = h || 0),
            e._props.push(l));
      uu(a, n);
    };
  Lt("padding,margin,Width,Radius", function (r, e) {
    var t = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (
        a
      ) {
        return e < 2 ? r + a : "border" + a + r;
      });
    gs[e > 1 ? "border" + r : r] = function (a, l, u, c, d) {
      var m, f;
      if (arguments.length < 4)
        return (
          (m = o.map(function (h) {
            return Ii(a, h, u);
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
  var cu = {
    name: "css",
    register: Ho,
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
        w,
        E,
        g,
        S,
        x,
        P,
        O;
      Bo || Ho(),
        (this.styles = this.styles || Kl(e)),
        (O = this.styles.props),
        (this.tween = i);
      for (p in t)
        if (
          p !== "autoRound" &&
          ((c = t[p]), !(Vt[p] && Rl(p, t, i, n, e, s)))
        ) {
          if (
            ((f = typeof c),
            (h = gs[p]),
            f === "function" && ((c = c.call(i, n, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = vn(c)),
            h)
          )
            h(this, e, p, c, i) && (P = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (c += ""),
              (Hi.lastIndex = 0),
              Hi.test(u) || ((v = at(u)), (_ = at(c))),
              _ ? v !== _ && (u = Yi(e, p, u, _) + _) : v && (c += v),
              this.add(a, "setProperty", u, c, n, s, 0, 0, p),
              o.push(p),
              O.push(p, 0, a[p]);
          else if (f !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(i, n, e, s) : l[p]),
                  Ye(u) && ~u.indexOf("random(") && (u = vn(u)),
                  at(u + "") ||
                    u === "auto" ||
                    (u += Ft.units[p] || at(Ii(e, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = Ii(e, p)))
                : (u = Ii(e, p)),
              (m = parseFloat(u)),
              (w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              w && (c = c.substr(2)),
              (d = parseFloat(c)),
              p in wi &&
                (p === "autoAlpha" &&
                  (m === 1 && Ii(e, "visibility") === "hidden" && d && (m = 0),
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
                  ((p = wi[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (E = p in ki),
              E)
            ) {
              if (
                (this.styles.save(p),
                f === "string" &&
                  c.substring(0, 6) === "var(--" &&
                  ((c = ri(e, c.substring(4, c.indexOf(")")))),
                  (d = parseFloat(c))),
                g ||
                  ((S = e._gsap),
                  (S.renderTransform && !t.parseTransform) ||
                    Tn(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && S.smooth),
                  (g = this._pt =
                    new Ot(this._pt, a, Ce, 0, 1, S.renderTransform, S, 0, -1)),
                  (g.dep = 1)),
                p === "scale")
              )
                (this._pt = new Ot(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (w ? Ir(S.scaleY, w + d) : d) - S.scaleY || 0,
                  Vo
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                O.push(Dt, 0, a[Dt]),
                  (c = Of(c)),
                  S.svg
                    ? Go(e, c, 0, x, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0),
                      _ !== S.zOrigin && Xi(this, S, "zOrigin", S.zOrigin, _),
                      Xi(this, a, p, vs(u), vs(c)));
                continue;
              } else if (p === "svgOrigin") {
                Go(e, c, 1, x, 0, this);
                continue;
              } else if (p in su) {
                If(this, S, p, m, w ? Ir(m, w + c) : c);
                continue;
              } else if (p === "smoothOrigin") {
                Xi(this, S, "smooth", S.smooth, c);
                continue;
              } else if (p === "force3D") {
                S[p] = c;
                continue;
              } else if (p === "transform") {
                Rf(this, c, e);
                continue;
              }
            } else p in a || (p = Hr(p) || p);
            if (
              E ||
              ((d || d === 0) && (m || m === 0) && !gf.test(c) && p in a)
            )
              (v = (u + "").substr((m + "").length)),
                d || (d = 0),
                (_ = at(c) || (p in Ft.units ? Ft.units[p] : v)),
                v !== _ && (m = Yi(e, p, u, _)),
                (this._pt = new Ot(
                  this._pt,
                  E ? S : a,
                  p,
                  m,
                  (w ? Ir(m, w + d) : d) - m,
                  !E && (_ === "px" || p === "zIndex") && t.autoRound !== !1
                    ? yf
                    : Vo
                )),
                (this._pt.u = _ || 0),
                v !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = _f));
            else if (p in a) Lf.call(this, e, p, u, w ? w + c : c);
            else if (p in e) this.add(e, p, u || e[p], w ? w + c : c, n, s);
            else if (p !== "parseTransform") {
              ho(p, c);
              continue;
            }
            E ||
              (p in a
                ? O.push(p, 0, a[p])
                : typeof e[p] == "function"
                ? O.push(p, 2, e[p]())
                : O.push(p, 1, u || e[p])),
              o.push(p);
          }
        }
      P && Vl(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Fo())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Ii,
    aliases: wi,
    getSetter: function (e, t, i) {
      var n = wi[t];
      return (
        n && n.indexOf(",") < 0 && (t = n),
        t in ki && t !== Dt && (e._gsap.x || Ii(e, "x"))
          ? i && Gl === i
            ? t === "scale"
              ? xf
              : Sf
            : (Gl = i || {}) && (t === "scale" ? Tf : Cf)
          : e.style && !ao(e.style[t])
          ? wf
          : ~t.indexOf("-")
          ? bf
          : ko(e, t)
      );
    },
    core: { _removeProperty: fr, _getMatrix: Wo },
  };
  (Mt.utils.checkPrefix = Hr),
    (Mt.core.getStyleSaver = Kl),
    (function (r, e, t, i) {
      var n = Lt(r + "," + e + "," + t, function (s) {
        ki[s] = 1;
      });
      Lt(e, function (s) {
        (Ft.units[s] = "deg"), (su[s] = 1);
      }),
        (wi[n[13]] = r + "," + e),
        Lt(i, function (s) {
          var o = s.split(":");
          wi[o[1]] = n[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    Lt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (r) {
        Ft.units[r] = "px";
      }
    ),
    Mt.registerPlugin(cu);
  var W = Mt.registerPlugin(cu) || Mt;
  function zf(r, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(r, i.key, i);
    }
  }
  function Nf(r, e, t) {
    return e && zf(r.prototype, e), r;
  }
  /*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var lt,
    _s,
    Gt,
    ji,
    Ui,
    Wr,
    du,
    mr,
    En,
    fu,
    Ri,
    di,
    pu,
    hu = function () {
      return (
        lt ||
        (typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt)
      );
    },
    mu = 1,
    Gr = [],
    oe = [],
    bi = [],
    An = Date.now,
    Yo = function (e, t) {
      return t;
    },
    Bf = function () {
      var e = En.core,
        t = e.bridge || {},
        i = e._scrollers,
        n = e._proxies;
      i.push.apply(i, oe),
        n.push.apply(n, bi),
        (oe = i),
        (bi = n),
        (Yo = function (o, a) {
          return t[o](a);
        });
    },
    Ki = function (e, t) {
      return ~bi.indexOf(e) && bi[bi.indexOf(e) + 1][t];
    },
    Pn = function (e) {
      return !!~fu.indexOf(e);
    },
    wt = function (e, t, i, n, s) {
      return e.addEventListener(t, i, { passive: n !== !1, capture: !!s });
    },
    bt = function (e, t, i, n) {
      return e.removeEventListener(t, i, !!n);
    },
    ys = "scrollLeft",
    ws = "scrollTop",
    jo = function () {
      return (Ri && Ri.isPressed) || oe.cache++;
    },
    bs = function (e, t) {
      var i = function n(s) {
        if (s || s === 0) {
          mu && (Gt.history.scrollRestoration = "manual");
          var o = Ri && Ri.isPressed;
          (s = n.v = Math.round(s) || (Ri && Ri.iOS ? 1 : 0)),
            e(s),
            (n.cacheID = oe.cache),
            o && Yo("ss", s);
        } else
          (t || oe.cache !== n.cacheID || Yo("ref")) &&
            ((n.cacheID = oe.cache), (n.v = e()));
        return n.v + n.offset;
      };
      return (i.offset = 0), e && i;
    },
    St = {
      s: ys,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: bs(function (r) {
        return arguments.length
          ? Gt.scrollTo(r, qe.sc())
          : Gt.pageXOffset || ji[ys] || Ui[ys] || Wr[ys] || 0;
      }),
    },
    qe = {
      s: ws,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: St,
      sc: bs(function (r) {
        return arguments.length
          ? Gt.scrollTo(St.sc(), r)
          : Gt.pageYOffset || ji[ws] || Ui[ws] || Wr[ws] || 0;
      }),
    },
    kt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || lt.utils.toArray)(e)[0] ||
        (typeof e == "string" && lt.config().nullTargetWarn !== !1
          ? void 0
          : null)
      );
    },
    Ff = function (e, t) {
      for (var i = t.length; i--; )
        if (t[i] === e || t[i].contains(e)) return !0;
      return !1;
    },
    Zi = function (e, t) {
      var i = t.s,
        n = t.sc;
      Pn(e) && (e = ji.scrollingElement || Ui);
      var s = oe.indexOf(e),
        o = n === qe.sc ? 1 : 2;
      !~s && (s = oe.push(e) - 1), oe[s + o] || wt(e, "scroll", jo);
      var a = oe[s + o],
        l =
          a ||
          (oe[s + o] =
            bs(Ki(e, i), !0) ||
            (Pn(e)
              ? n
              : bs(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = lt.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Uo = function (e, t, i) {
      var n = e,
        s = e,
        o = An(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (h, p) {
          var v = An();
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
            _ = An();
          return (
            (h || h === 0) && h !== n && c(h),
            o === a || _ - a > u
              ? 0
              : ((n + (i ? v : -v)) / ((i ? _ : o) - p)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: m };
    },
    Ln = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    gu = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    vu = function () {
      (En = lt.core.globals().ScrollTrigger), En && En.core && Bf();
    },
    _u = function (e) {
      return (
        (lt = e || hu()),
        !_s &&
          lt &&
          typeof document < "u" &&
          document.body &&
          ((Gt = window),
          (ji = document),
          (Ui = ji.documentElement),
          (Wr = ji.body),
          (fu = [Gt, ji, Ui, Wr]),
          (pu = lt.core.context || function () {}),
          (mr = "onpointerenter" in Wr ? "pointer" : "mouse"),
          (du = Ie.isTouch =
            Gt.matchMedia &&
            Gt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Gt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (di = Ie.eventTypes =
            (
              "ontouchstart" in Ui
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ui
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (mu = 0);
          }, 500),
          vu(),
          (_s = 1)),
        _s
      );
    };
  (St.op = qe), (oe.cache = 0);
  var Ie = (function () {
    function r(t) {
      this.init(t);
    }
    var e = r.prototype;
    return (
      (e.init = function (i) {
        _s || _u(lt), En || vu();
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
          w = i.onDrag,
          E = i.onPress,
          g = i.onRelease,
          S = i.onRight,
          x = i.onLeft,
          P = i.onUp,
          O = i.onDown,
          k = i.onChangeX,
          M = i.onChangeY,
          R = i.onChange,
          A = i.onToggleX,
          z = i.onToggleY,
          b = i.onHover,
          y = i.onHoverEnd,
          T = i.onMove,
          L = i.ignoreCheck,
          D = i.isNormalizer,
          I = i.onGestureStart,
          C = i.onGestureEnd,
          F = i.onWheel,
          V = i.onEnable,
          Q = i.onDisable,
          X = i.onClick,
          ie = i.scrollSpeed,
          ue = i.capture,
          de = i.allowClicks,
          be = i.lockAxis,
          Ee = i.onLockAxis;
        (this.target = a = kt(a) || Ui),
          (this.vars = i),
          f && (f = lt.utils.toArray(f)),
          (n = n || 1e-9),
          (s = s || 0),
          (h = h || 1),
          (ie = ie || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Gt.getComputedStyle(Wr).lineHeight) || 22);
        var rt,
          Oe,
          $e,
          se,
          ye,
          He,
          We,
          N = this,
          Ke = 0,
          zt = 0,
          Ze = i.passive || (!c && i.passive !== !1),
          fe = Zi(a, St),
          At = Zi(a, qe),
          pt = fe(),
          Zt = At(),
          Ae =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            di[0] === "pointerdown",
          Qt = Pn(a),
          we = a.ownerDocument || ji,
          ht = [0, 0, 0],
          Nt = [0, 0, 0],
          pi = 0,
          Lr = function () {
            return (pi = An());
          },
          Me = function (Y, pe) {
            return (
              ((N.event = Y) && f && Ff(Y.target, f)) ||
              (pe && Ae && Y.pointerType !== "touch") ||
              (L && L(Y, pe))
            );
          },
          dn = function () {
            N._vx.reset(), N._vy.reset(), Oe.pause(), d && d(N);
          },
          B = function () {
            var Y = (N.deltaX = gu(ht)),
              pe = (N.deltaY = gu(Nt)),
              $ = Math.abs(Y) >= n,
              ee = Math.abs(pe) >= n;
            R && ($ || ee) && R(N, Y, pe, ht, Nt),
              $ &&
                (S && N.deltaX > 0 && S(N),
                x && N.deltaX < 0 && x(N),
                k && k(N),
                A && N.deltaX < 0 != Ke < 0 && A(N),
                (Ke = N.deltaX),
                (ht[0] = ht[1] = ht[2] = 0)),
              ee &&
                (O && N.deltaY > 0 && O(N),
                P && N.deltaY < 0 && P(N),
                M && M(N),
                z && N.deltaY < 0 != zt < 0 && z(N),
                (zt = N.deltaY),
                (Nt[0] = Nt[1] = Nt[2] = 0)),
              (se || $e) &&
                (T && T(N),
                $e && (v && $e === 1 && v(N), w && w(N), ($e = 0)),
                (se = !1)),
              He && !(He = !1) && Ee && Ee(N),
              ye && (F(N), (ye = !1)),
              (rt = 0);
          },
          H = function (Y, pe, $) {
            (ht[$] += Y),
              (Nt[$] += pe),
              N._vx.update(Y),
              N._vy.update(pe),
              u ? rt || (rt = requestAnimationFrame(B)) : B();
          },
          j = function (Y, pe) {
            be &&
              !We &&
              ((N.axis = We = Math.abs(Y) > Math.abs(pe) ? "x" : "y"),
              (He = !0)),
              We !== "y" && ((ht[2] += Y), N._vx.update(Y, !0)),
              We !== "x" && ((Nt[2] += pe), N._vy.update(pe, !0)),
              u ? rt || (rt = requestAnimationFrame(B)) : B();
          },
          le = function (Y) {
            if (!Me(Y, 1)) {
              Y = Ln(Y, c);
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
            Me(J, 1) ||
              (J && J.button) ||
              ((N.axis = We = null),
              Oe.pause(),
              (N.isPressed = !0),
              (J = Ln(J)),
              (Ke = zt = 0),
              (N.startX = N.x = J.clientX),
              (N.startY = N.y = J.clientY),
              N._vx.reset(),
              N._vy.reset(),
              wt(D ? a : we, di[1], le, Ze, !0),
              (N.deltaX = N.deltaY = 0),
              E && E(N));
          }),
          U = (N.onRelease = function (J) {
            if (!Me(J, 1)) {
              bt(D ? a : we, di[1], le, !0);
              var Y = !isNaN(N.y - N.startY),
                pe = N.isDragging,
                $ =
                  pe &&
                  (Math.abs(N.x - N.startX) > 3 ||
                    Math.abs(N.y - N.startY) > 3),
                ee = Ln(J);
              !$ &&
                Y &&
                (N._vx.reset(),
                N._vy.reset(),
                c &&
                  de &&
                  lt.delayedCall(0.08, function () {
                    if (An() - pi > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (we.createEvent) {
                        var K = we.createEvent("MouseEvents");
                        K.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Gt,
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
                d && pe && !D && Oe.restart(!0),
                $e && B(),
                _ && pe && _(N),
                g && g(N, $);
            }
          }),
          Fe = function (Y) {
            return (
              Y.touches &&
              Y.touches.length > 1 &&
              (N.isGesturing = !0) &&
              I(Y, N.isDragging)
            );
          },
          Qe = function () {
            return (N.isGesturing = !1) || C(N);
          },
          Bt = function (Y) {
            if (!Me(Y)) {
              var pe = fe(),
                $ = At();
              H((pe - pt) * ie, ($ - Zt) * ie, 1),
                (pt = pe),
                (Zt = $),
                d && Oe.restart(!0);
            }
          },
          Ge = function (Y) {
            if (!Me(Y)) {
              (Y = Ln(Y, c)), F && (ye = !0);
              var pe =
                (Y.deltaMode === 1
                  ? l
                  : Y.deltaMode === 2
                  ? Gt.innerHeight
                  : 1) * h;
              H(Y.deltaX * pe, Y.deltaY * pe, 0), d && !D && Oe.restart(!0);
            }
          },
          hi = function (Y) {
            if (!Me(Y)) {
              var pe = Y.clientX,
                $ = Y.clientY,
                ee = pe - N.x,
                K = $ - N.y;
              (N.x = pe),
                (N.y = $),
                (se = !0),
                d && Oe.restart(!0),
                (ee || K) && j(ee, K);
            }
          },
          mi = function (Y) {
            (N.event = Y), b(N);
          },
          mt = function (Y) {
            (N.event = Y), y(N);
          },
          Or = function (Y) {
            return Me(Y) || (Ln(Y, c) && X(N));
          };
        (Oe = N._dc = lt.delayedCall(m || 0.25, dn).pause()),
          (N.deltaX = N.deltaY = 0),
          (N._vx = Uo(0, 50, !0)),
          (N._vy = Uo(0, 50, !0)),
          (N.scrollX = fe),
          (N.scrollY = At),
          (N.isDragging = N.isGesturing = N.isPressed = !1),
          pu(this),
          (N.enable = function (J) {
            return (
              N.isEnabled ||
                (wt(Qt ? we : a, "scroll", jo),
                o.indexOf("scroll") >= 0 &&
                  wt(Qt ? we : a, "scroll", Bt, Ze, ue),
                o.indexOf("wheel") >= 0 && wt(a, "wheel", Ge, Ze, ue),
                ((o.indexOf("touch") >= 0 && du) ||
                  o.indexOf("pointer") >= 0) &&
                  (wt(a, di[0], re, Ze, ue),
                  wt(we, di[2], U),
                  wt(we, di[3], U),
                  de && wt(a, "click", Lr, !0, !0),
                  X && wt(a, "click", Or),
                  I && wt(we, "gesturestart", Fe),
                  C && wt(we, "gestureend", Qe),
                  b && wt(a, mr + "enter", mi),
                  y && wt(a, mr + "leave", mt),
                  T && wt(a, mr + "move", hi)),
                (N.isEnabled = !0),
                (N.isDragging = N.isGesturing = N.isPressed = se = $e = !1),
                N._vx.reset(),
                N._vy.reset(),
                (pt = fe()),
                (Zt = At()),
                J && J.type && re(J),
                V && V(N)),
              N
            );
          }),
          (N.disable = function () {
            N.isEnabled &&
              (Gr.filter(function (J) {
                return J !== N && Pn(J.target);
              }).length || bt(Qt ? we : a, "scroll", jo),
              N.isPressed &&
                (N._vx.reset(), N._vy.reset(), bt(D ? a : we, di[1], le, !0)),
              bt(Qt ? we : a, "scroll", Bt, ue),
              bt(a, "wheel", Ge, ue),
              bt(a, di[0], re, ue),
              bt(we, di[2], U),
              bt(we, di[3], U),
              bt(a, "click", Lr, !0),
              bt(a, "click", Or),
              bt(we, "gesturestart", Fe),
              bt(we, "gestureend", Qe),
              bt(a, mr + "enter", mi),
              bt(a, mr + "leave", mt),
              bt(a, mr + "move", hi),
              (N.isEnabled = N.isPressed = N.isDragging = !1),
              Q && Q(N));
          }),
          (N.kill = N.revert =
            function () {
              N.disable();
              var J = Gr.indexOf(N);
              J >= 0 && Gr.splice(J, 1), Ri === N && (Ri = 0);
            }),
          Gr.push(N),
          D && Pn(a) && (Ri = N),
          N.enable(p);
      }),
      Nf(r, [
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
    (Ie.register = _u),
    (Ie.getAll = function () {
      return Gr.slice();
    }),
    (Ie.getById = function (r) {
      return Gr.filter(function (e) {
        return e.vars.id === r;
      })[0];
    }),
    hu() && lt.registerPlugin(Ie);
  /*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
   */ var G,
    Xr,
    ae,
    _e,
    Xt,
    he,
    Ko,
    Ss,
    On,
    Mn,
    Dn,
    xs,
    ut,
    Ts,
    Zo,
    xt,
    yu,
    wu,
    Yr,
    bu,
    Qo,
    Su,
    Tt,
    Jo,
    xu,
    Tu,
    Qi,
    ea,
    ta,
    jr,
    ia,
    Cs,
    ra,
    na,
    Es = 1,
    ct = Date.now,
    sa = ct(),
    ni = 0,
    kn = 0,
    Cu = function (e, t, i) {
      var n = Yt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
    },
    Eu = function (e, t) {
      return t && (!Yt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    qf = function r() {
      return kn && requestAnimationFrame(r);
    },
    Au = function () {
      return (Ts = 1);
    },
    Pu = function () {
      return (Ts = 0);
    },
    Si = function (e) {
      return e;
    },
    In = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Lu = function () {
      return typeof window < "u";
    },
    Ou = function () {
      return G || (Lu() && (G = window.gsap) && G.registerPlugin && G);
    },
    gr = function (e) {
      return !!~Ko.indexOf(e);
    },
    Mu = function (e) {
      return (
        (e === "Height" ? ia : ae["inner" + e]) ||
        Xt["client" + e] ||
        he["client" + e]
      );
    },
    Du = function (e) {
      return (
        Ki(e, "getBoundingClientRect") ||
        (gr(e)
          ? function () {
              return (Fs.width = ae.innerWidth), (Fs.height = ia), Fs;
            }
          : function () {
              return zi(e);
            })
      );
    },
    Vf = function (e, t, i) {
      var n = i.d,
        s = i.d2,
        o = i.a;
      return (o = Ki(e, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (t ? Mu(s) : e["client" + s]) || 0;
          };
    },
    $f = function (e, t) {
      return !t || ~bi.indexOf(e)
        ? Du(e)
        : function () {
            return Fs;
          };
    },
    xi = function (e, t) {
      var i = t.s,
        n = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + n) && (o = Ki(e, i))
          ? o() - Du(e)()[s]
          : gr(e)
          ? (Xt[i] || he[i]) - Mu(n)
          : e[i] - e["offset" + n]
      );
    },
    As = function (e, t) {
      for (var i = 0; i < Yr.length; i += 3)
        (!t || ~t.indexOf(Yr[i + 1])) && e(Yr[i], Yr[i + 1], Yr[i + 2]);
    },
    Yt = function (e) {
      return typeof e == "string";
    },
    dt = function (e) {
      return typeof e == "function";
    },
    Rn = function (e) {
      return typeof e == "number";
    },
    vr = function (e) {
      return typeof e == "object";
    },
    zn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    oa = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Ur = Math.abs,
    ku = "left",
    Iu = "top",
    aa = "right",
    la = "bottom",
    _r = "width",
    yr = "height",
    Nn = "Right",
    Bn = "Left",
    Fn = "Top",
    qn = "Bottom",
    Be = "padding",
    si = "margin",
    Kr = "Width",
    ua = "Height",
    Ve = "px",
    oi = function (e) {
      return ae.getComputedStyle(e);
    },
    Hf = function (e) {
      var t = oi(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Ru = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    zi = function (e, t) {
      var i =
          t &&
          oi(e)[Zo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
    Ps = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    zu = function (e) {
      var t = [],
        i = e.labels,
        n = e.duration(),
        s;
      for (s in i) t.push(i[s] / n);
      return t;
    },
    Wf = function (e) {
      return function (t) {
        return G.utils.snap(zu(e), t);
      };
    },
    ca = function (e) {
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
    Gf = function (e) {
      return function (t, i) {
        return ca(zu(e))(t, i.direction);
      };
    },
    Ls = function (e, t, i, n) {
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
    Os = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Nu = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ms = { toggleActions: "play", anticipatePin: 0 },
    Ds = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    ks = function (e, t) {
      if (Yt(e)) {
        var i = e.indexOf("="),
          n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            n +
            (e in Ds
              ? Ds[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Is = function (e, t, i, n, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        d = s.fontSize,
        m = s.indent,
        f = s.fontWeight,
        h = _e.createElement("div"),
        p = gr(i) || Ki(i, "pinType") === "fixed",
        v = e.indexOf("scroller") !== -1,
        _ = p ? he : i,
        w = e.indexOf("start") !== -1,
        E = w ? u : c,
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
        (g += "position:" + ((v || l) && p ? "fixed;" : "absolute;")),
        (v || l || !p) &&
          (g += (n === qe ? aa : la) + ":" + (o + parseFloat(m)) + "px;"),
        a &&
          (g +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (h._isStart = w),
        h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (h.style.cssText = g),
        (h.innerText = t || t === 0 ? e + "-" + t : e),
        _.children[0] ? _.insertBefore(h, _.children[0]) : _.appendChild(h),
        (h._offset = h["offset" + n.op.d2]),
        Rs(h, 0, n, w),
        h
      );
    },
    Rs = function (e, t, i, n) {
      var s = { display: "block" },
        o = i[n ? "os2" : "p2"],
        a = i[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (s[i.a + "Percent"] = n ? -100 : 0),
        (s[i.a] = n ? "1px" : 0),
        (s["border" + o + Kr] = 1),
        (s["border" + a + Kr] = 0),
        (s[i.p] = t + "px"),
        G.set(e, s);
    },
    ne = [],
    da = {},
    Vn,
    Bu = function () {
      return ct() - ni > 34 && (Vn || (Vn = requestAnimationFrame(Ni)));
    },
    Zr = function () {
      (!Tt || !Tt.isPressed || Tt.startX > he.clientWidth) &&
        (oe.cache++,
        Tt ? Vn || (Vn = requestAnimationFrame(Ni)) : Ni(),
        ni || br("scrollStart"),
        (ni = ct()));
    },
    fa = function () {
      (Tu = ae.innerWidth), (xu = ae.innerHeight);
    },
    $n = function (e) {
      oe.cache++,
        (e === !0 ||
          (!ut &&
            !Su &&
            !_e.fullscreenElement &&
            !_e.webkitFullscreenElement &&
            (!Jo ||
              Tu !== ae.innerWidth ||
              Math.abs(ae.innerHeight - xu) > ae.innerHeight * 0.25))) &&
          Ss.restart(!0);
    },
    wr = {},
    Xf = [],
    Fu = function r() {
      return Ue(Z, "scrollEnd", r) || xr(!0);
    },
    br = function (e) {
      return (
        (wr[e] &&
          wr[e].map(function (t) {
            return t();
          })) ||
        Xf
      );
    },
    jt = [],
    qu = function (e) {
      for (var t = 0; t < jt.length; t += 5)
        (!e || (jt[t + 4] && jt[t + 4].query === e)) &&
          ((jt[t].style.cssText = jt[t + 1]),
          jt[t].getBBox && jt[t].setAttribute("transform", jt[t + 2] || ""),
          (jt[t + 3].uncache = 1));
    },
    pa = function (e, t) {
      var i;
      for (xt = 0; xt < ne.length; xt++)
        (i = ne[xt]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Cs = !0), t && qu(t), t || br("revert");
    },
    Vu = function (e, t) {
      oe.cache++,
        (t || !Ct) &&
          oe.forEach(function (i) {
            return dt(i) && i.cacheID++ && (i.rec = 0);
          }),
        Yt(e) && (ae.history.scrollRestoration = ta = e);
    },
    Ct,
    Sr = 0,
    $u,
    Yf = function () {
      if ($u !== Sr) {
        var e = ($u = Sr);
        requestAnimationFrame(function () {
          return e === Sr && xr(!0);
        });
      }
    },
    Hu = function () {
      he.appendChild(jr),
        (ia = (!Tt && jr.offsetHeight) || ae.innerHeight),
        he.removeChild(jr);
    },
    Wu = function (e) {
      return On(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    xr = function (e, t) {
      if (
        ((Xt = _e.documentElement),
        (he = _e.body),
        (Ko = [ae, _e, Xt, he]),
        ni && !e && !Cs)
      ) {
        je(Z, "scrollEnd", Fu);
        return;
      }
      Hu(),
        (Ct = Z.isRefreshing = !0),
        oe.forEach(function (n) {
          return dt(n) && ++n.cacheID && (n.rec = n());
        });
      var i = br("refreshInit");
      bu && Z.sort(),
        t || pa(),
        oe.forEach(function (n) {
          dt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
        }),
        ne.slice(0).forEach(function (n) {
          return n.refresh();
        }),
        (Cs = !1),
        ne.forEach(function (n) {
          if (n._subPinOffset && n.pin) {
            var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = n.pin[s];
            n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
          }
        }),
        (ra = 1),
        Wu(!0),
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
        Wu(!1),
        (ra = 0),
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
        Vu(ta, 1),
        Ss.pause(),
        Sr++,
        (Ct = 2),
        Ni(2),
        ne.forEach(function (n) {
          return dt(n.vars.onRefresh) && n.vars.onRefresh(n);
        }),
        (Ct = Z.isRefreshing = !1),
        br("refresh");
    },
    ha = 0,
    zs = 1,
    Hn,
    Ni = function (e) {
      if (e === 2 || (!Ct && !Cs)) {
        (Z.isUpdating = !0), Hn && Hn.update(0);
        var t = ne.length,
          i = ct(),
          n = i - sa >= 50,
          s = t && ne[0].scroll();
        if (
          ((zs = ha > s ? -1 : 1),
          Ct || (ha = s),
          n &&
            (ni && !Ts && i - ni > 200 && ((ni = 0), br("scrollEnd")),
            (Dn = sa),
            (sa = i)),
          zs < 0)
        ) {
          for (xt = t; xt-- > 0; ) ne[xt] && ne[xt].update(0, n);
          zs = 1;
        } else for (xt = 0; xt < t; xt++) ne[xt] && ne[xt].update(0, n);
        Z.isUpdating = !1;
      }
      Vn = 0;
    },
    ma = [
      ku,
      Iu,
      la,
      aa,
      si + qn,
      si + Nn,
      si + Fn,
      si + Bn,
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
    Ns = ma.concat([
      _r,
      yr,
      "boxSizing",
      "max" + Kr,
      "max" + ua,
      "position",
      si,
      Be,
      Be + Fn,
      Be + Nn,
      Be + qn,
      Be + Bn,
    ]),
    jf = function (e, t, i) {
      Qr(i);
      var n = e._gsap;
      if (n.spacerIsNative) Qr(n.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    ga = function (e, t, i, n) {
      if (!e._gsap.swappedIn) {
        for (var s = ma.length, o = t.style, a = e.style, l; s--; )
          (l = ma[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[la] = a[aa] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[_r] = Ps(e, St) + Ve),
          (o[yr] = Ps(e, qe) + Ve),
          (o[Be] = a[si] = a[Iu] = a[ku] = "0"),
          Qr(n),
          (a[_r] = a["max" + Kr] = i[_r]),
          (a[yr] = a["max" + ua] = i[yr]),
          (a[Be] = i[Be]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Uf = /([A-Z])/g,
    Qr = function (e) {
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
              : t[s] && t.removeProperty(s.replace(Uf, "-$1").toLowerCase());
      }
    },
    Bs = function (e) {
      for (var t = Ns.length, i = e.style, n = [], s = 0; s < t; s++)
        n.push(Ns[s], i[Ns[s]]);
      return (n.t = e), n;
    },
    Kf = function (e, t, i) {
      for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
      return (n.t = e.t), n;
    },
    Fs = { left: 0, top: 0 },
    Gu = function (e, t, i, n, s, o, a, l, u, c, d, m, f, h) {
      dt(e) && (e = e(l)),
        Yt(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? ks("0" + e.substr(3), i) : 0));
      var p = f ? f.time() : 0,
        v,
        _,
        w;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Rn(e)))
        f &&
          (e = G.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            m,
            e
          )),
          a && Rs(a, i, n, !0);
      else {
        dt(t) && (t = t(l));
        var E = (e || "0").split(" "),
          g,
          S,
          x,
          P;
        (w = kt(t, l) || he),
          (g = zi(w) || {}),
          (!g || (!g.left && !g.top)) &&
            oi(w).display === "none" &&
            ((P = w.style.display),
            (w.style.display = "block"),
            (g = zi(w)),
            P ? (w.style.display = P) : w.style.removeProperty("display")),
          (S = ks(E[0], g[n.d])),
          (x = ks(E[1] || "0", i)),
          (e = g[n.p] - u[n.p] - c + S + s - x),
          a && Rs(a, x, n, i - x < 20 || (a._isStart && x > 20)),
          (i -= i - x);
      }
      if ((h && ((l[h] = e || -0.001), e < 0 && (e = 0)), o)) {
        var O = e + i,
          k = o._isStart;
        (v = "scroll" + n.d2),
          Rs(
            o,
            O,
            n,
            (k && O > 20) ||
              (!k && (d ? Math.max(he[v], Xt[v]) : o.parentNode[v]) <= O + 1)
          ),
          d &&
            ((u = zi(a)),
            d && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Ve));
      }
      return (
        f &&
          w &&
          ((v = zi(w)),
          f.seek(m),
          (_ = zi(w)),
          (f._caScrollDist = v[n.p] - _[n.p]),
          (e = (e / f._caScrollDist) * m)),
        f && f.seek(p),
        f ? e : Math.round(e)
      );
    },
    Zf = /(webkit|moz|length|cssText|inset)/i,
    Xu = function (e, t, i, n) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === he) {
          (e._stOrig = s.cssText), (a = oi(e));
          for (o in a)
            !+o &&
              !Zf.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = n);
        } else s.cssText = e._stOrig;
        (G.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Yu = function (e, t, i) {
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
    qs = function (e, t, i) {
      var n = {};
      (n[t.p] = "+=" + i), G.set(e, n);
    },
    ju = function (e, t) {
      var i = Zi(e, t),
        n = "_scroll" + t.p2,
        s = function o(a, l, u, c, d) {
          var m = o.tween,
            f = l.onComplete,
            h = {};
          u = u || i();
          var p = Yu(i, u, function () {
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
              oe.cache++, o.tween && Ni();
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
        je(e, "wheel", i.wheelHandler),
        Z.isTouch && je(e, "touchmove", i.wheelHandler),
        s
      );
    },
    Z = (function () {
      function r(t, i) {
        Xr || r.register(G), ea(this), this.init(t, i);
      }
      var e = r.prototype;
      return (
        (e.init = function (i, n) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !kn)
          ) {
            this.update = this.refresh = this.kill = Si;
            return;
          }
          i = Ru(Yt(i) || Rn(i) || i.nodeType ? { trigger: i } : i, Ms);
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
            w = s.onSnapComplete,
            E = s.once,
            g = s.snap,
            S = s.pinReparent,
            x = s.pinSpacer,
            P = s.containerAnimation,
            O = s.fastScrollEnd,
            k = s.preventOverlaps,
            M =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? St
                : qe,
            R = !d && d !== 0,
            A = kt(i.scroller || ae),
            z = G.core.getCache(A),
            b = gr(A),
            y =
              ("pinType" in i
                ? i.pinType
                : Ki(A, "pinType") || (b && "fixed")) === "fixed",
            T = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            L = R && i.toggleActions.split(" "),
            D = "markers" in i ? i.markers : Ms.markers,
            I = b ? 0 : parseFloat(oi(A)["border" + M.p2 + Kr]) || 0,
            C = this,
            F =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(C);
              },
            V = Vf(A, b, M),
            Q = $f(A, b),
            X = 0,
            ie = 0,
            ue = 0,
            de = Zi(A, M),
            be,
            Ee,
            rt,
            Oe,
            $e,
            se,
            ye,
            He,
            We,
            N,
            Ke,
            zt,
            Ze,
            fe,
            At,
            pt,
            Zt,
            Ae,
            Qt,
            we,
            ht,
            Nt,
            pi,
            Lr,
            Me,
            dn,
            B,
            H,
            j,
            le,
            re,
            U,
            Fe,
            Qe,
            Bt,
            Ge,
            hi,
            mi,
            mt;
          if (
            ((C._startClamp = C._endClamp = !1),
            (C._dir = M),
            (v *= 45),
            (C.scroller = A),
            (C.scroll = P ? P.time.bind(P) : de),
            (Oe = de()),
            (C.vars = i),
            (n = n || i.animation),
            "refreshPriority" in i &&
              ((bu = 1), i.refreshPriority === -9999 && (Hn = C)),
            (z.tweenScroll = z.tweenScroll || {
              top: ju(A, qe),
              left: ju(A, St),
            }),
            (C.tweenTo = be = z.tweenScroll[M.p]),
            (C.scrubDuration = function ($) {
              (Fe = Rn($) && $),
                Fe
                  ? U
                    ? U.duration($)
                    : (U = G.to(n, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Fe,
                        paused: !0,
                        onComplete: function () {
                          return _ && _(C);
                        },
                      }))
                  : (U && U.progress(1).kill(), (U = 0));
            }),
            n &&
              ((n.vars.lazy = !1),
              (n._initted && !C.isReverted) ||
                (n.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  n.duration() &&
                  n.render(0, !0, !0)),
              (C.animation = n.pause()),
              (n.scrollTrigger = C),
              C.scrubDuration(d),
              (le = 0),
              l || (l = n.vars.id)),
            g &&
              ((!vr(g) || g.push) && (g = { snapTo: g }),
              "scrollBehavior" in he.style &&
                G.set(b ? [he, Xt] : A, { scrollBehavior: "auto" }),
              oe.forEach(function ($) {
                return (
                  dt($) &&
                  $.target === (b ? _e.scrollingElement || Xt : A) &&
                  ($.smooth = !1)
                );
              }),
              (rt = dt(g.snapTo)
                ? g.snapTo
                : g.snapTo === "labels"
                ? Wf(n)
                : g.snapTo === "labelsDirectional"
                ? Gf(n)
                : g.directional !== !1
                ? function ($, ee) {
                    return ca(g.snapTo)($, ct() - ie < 500 ? 0 : ee.direction);
                  }
                : G.utils.snap(g.snapTo)),
              (Qe = g.duration || { min: 0.1, max: 2 }),
              (Qe = vr(Qe) ? Mn(Qe.min, Qe.max) : Mn(Qe, Qe)),
              (Bt = G.delayedCall(g.delay || Fe / 2 || 0.1, function () {
                var $ = de(),
                  ee = ct() - ie < 500,
                  K = be.tween;
                if (
                  (ee || Math.abs(C.getVelocity()) < 10) &&
                  !K &&
                  !Ts &&
                  X !== $
                ) {
                  var te = ($ - se) / fe,
                    Je = n && !R ? n.totalProgress() : te,
                    ce = ee ? 0 : ((Je - re) / (ct() - Dn)) * 1e3 || 0,
                    Re = G.utils.clamp(-te, 1 - te, (Ur(ce / 2) * ce) / 0.185),
                    gt = te + (g.inertia === !1 ? 0 : Re),
                    De,
                    xe,
                    ve = g,
                    gi = ve.onStart,
                    Pe = ve.onInterrupt,
                    Jt = ve.onComplete;
                  if (
                    ((De = rt(gt, C)),
                    Rn(De) || (De = gt),
                    (xe = Math.max(0, Math.round(se + De * fe))),
                    $ <= ye && $ >= se && xe !== $)
                  ) {
                    if (K && !K._initted && K.data <= Ur(xe - $)) return;
                    g.inertia === !1 && (Re = De - te),
                      be(
                        xe,
                        {
                          duration: Qe(
                            Ur(
                              (Math.max(Ur(gt - Je), Ur(De - Je)) * 0.185) /
                                ce /
                                0.05 || 0
                            )
                          ),
                          ease: g.ease || "power3",
                          data: Ur(xe - $),
                          onInterrupt: function () {
                            return Bt.restart(!0) && Pe && Pe(C);
                          },
                          onComplete: function () {
                            C.update(),
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
                                n && !R ? n.totalProgress() : C.progress),
                              w && w(C),
                              Jt && Jt(C);
                          },
                        },
                        $,
                        Re * fe,
                        xe - $ - Re * fe
                      ),
                      gi && gi(C, be.tween);
                  }
                } else C.isActive && X !== $ && Bt.restart(!0);
              }).pause())),
            l && (da[l] = C),
            (m = C.trigger = kt(m || (f !== !0 && f))),
            (mt = m && m._gsap && m._gsap.stRevert),
            mt && (mt = mt(C)),
            (f = f === !0 ? m : kt(f)),
            Yt(a) && (a = { targets: m, className: a }),
            f &&
              (h === !1 ||
                h === si ||
                (h =
                  !h &&
                  f.parentNode &&
                  f.parentNode.style &&
                  oi(f.parentNode).display === "flex"
                    ? !1
                    : Be),
              (C.pin = f),
              (Ee = G.core.getCache(f)),
              Ee.spacer
                ? (At = Ee.pinState)
                : (x &&
                    ((x = kt(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (Ee.spacerIsNative = !!x),
                    x && (Ee.spacerState = Bs(x))),
                  (Ee.spacer = Ae = x || _e.createElement("div")),
                  Ae.classList.add("pin-spacer"),
                  l && Ae.classList.add("pin-spacer-" + l),
                  (Ee.pinState = At = Bs(f))),
              i.force3D !== !1 && G.set(f, { force3D: !0 }),
              (C.spacer = Ae = Ee.spacer),
              (j = oi(f)),
              (Lr = j[h + M.os2]),
              (we = G.getProperty(f)),
              (ht = G.quickSetter(f, M.a, Ve)),
              ga(f, Ae, j),
              (Zt = Bs(f))),
            D)
          ) {
            (zt = vr(D) ? Ru(D, Nu) : Nu),
              (N = Is("scroller-start", l, A, M, zt, 0)),
              (Ke = Is("scroller-end", l, A, M, zt, 0, N)),
              (Qt = N["offset" + M.op.d2]);
            var Or = kt(Ki(A, "content") || A);
            (He = this.markerStart = Is("start", l, Or, M, zt, Qt, 0, P)),
              (We = this.markerEnd = Is("end", l, Or, M, zt, Qt, 0, P)),
              P && (mi = G.quickSetter([He, We], M.a, Ve)),
              !y &&
                !(bi.length && Ki(A, "fixedMarkers") === !0) &&
                (Hf(b ? he : A),
                G.set([N, Ke], { force3D: !0 }),
                (dn = G.quickSetter(N, M.a, Ve)),
                (H = G.quickSetter(Ke, M.a, Ve)));
          }
          if (P) {
            var J = P.vars.onUpdate,
              Y = P.vars.onUpdateParams;
            P.eventCallback("onUpdate", function () {
              C.update(0, 0, 1), J && J.apply(P, Y || []);
            });
          }
          if (
            ((C.previous = function () {
              return ne[ne.indexOf(C) - 1];
            }),
            (C.next = function () {
              return ne[ne.indexOf(C) + 1];
            }),
            (C.revert = function ($, ee) {
              if (!ee) return C.kill(!0);
              var K = $ !== !1 || !C.enabled,
                te = ut;
              K !== C.isReverted &&
                (K &&
                  ((Ge = Math.max(de(), C.scroll.rec || 0)),
                  (ue = C.progress),
                  (hi = n && n.progress())),
                He &&
                  [He, We, N, Ke].forEach(function (Je) {
                    return (Je.style.display = K ? "none" : "block");
                  }),
                K && ((ut = C), C.update(K)),
                f &&
                  (!S || !C.isActive) &&
                  (K ? jf(f, Ae, At) : ga(f, Ae, oi(f), Me)),
                K || C.update(K),
                (ut = te),
                (C.isReverted = K));
            }),
            (C.refresh = function ($, ee, K, te) {
              if (!((ut || !C.enabled) && !ee)) {
                if (f && $ && ni) {
                  je(r, "scrollEnd", Fu);
                  return;
                }
                !Ct && F && F(C),
                  (ut = C),
                  be.tween && !K && (be.tween.kill(), (be.tween = 0)),
                  U && U.pause(),
                  p &&
                    n &&
                    (n.revert({ kill: !1 }).invalidate(),
                    n.getChildren &&
                      n.getChildren(!0, !0, !1).forEach(function (rr) {
                        return rr.vars.immediateRender && rr.render(0, !0, !0);
                      })),
                  C.isReverted || C.revert(!0, !0),
                  (C._subPinOffset = !1);
                var Je = V(),
                  ce = Q(),
                  Re = P ? P.duration() : xi(A, M),
                  gt = fe <= 0.01 || !fe,
                  De = 0,
                  xe = te || 0,
                  ve = vr(K) ? K.end : i.end,
                  gi = i.endTrigger || m,
                  Pe = vr(K)
                    ? K.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : f ? "0 0" : "0 100%"),
                  Jt = (C.pinnedContainer =
                    i.pinnedContainer && kt(i.pinnedContainer, C)),
                  Li = (m && Math.max(0, ne.indexOf(C))) || 0,
                  nt = Li,
                  st,
                  vt,
                  Mr,
                  ro,
                  _t,
                  Xe,
                  Oi,
                  Ua,
                  yd,
                  is,
                  Mi,
                  rs,
                  no;
                for (
                  D &&
                  vr(K) &&
                  ((rs = G.getProperty(N, M.p)), (no = G.getProperty(Ke, M.p)));
                  nt-- > 0;

                )
                  (Xe = ne[nt]),
                    Xe.end || Xe.refresh(0, 1) || (ut = C),
                    (Oi = Xe.pin),
                    Oi &&
                      (Oi === m || Oi === f || Oi === Jt) &&
                      !Xe.isReverted &&
                      (is || (is = []), is.unshift(Xe), Xe.revert(!0, !0)),
                    Xe !== ne[nt] && (Li--, nt--);
                for (
                  dt(Pe) && (Pe = Pe(C)),
                    Pe = Cu(Pe, "start", C),
                    se =
                      Gu(
                        Pe,
                        m,
                        Je,
                        M,
                        de(),
                        He,
                        N,
                        C,
                        ce,
                        I,
                        y,
                        Re,
                        P,
                        C._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    dt(ve) && (ve = ve(C)),
                    Yt(ve) &&
                      !ve.indexOf("+=") &&
                      (~ve.indexOf(" ")
                        ? (ve = (Yt(Pe) ? Pe.split(" ")[0] : "") + ve)
                        : ((De = ks(ve.substr(2), Je)),
                          (ve = Yt(Pe)
                            ? Pe
                            : (P
                                ? G.utils.mapRange(
                                    0,
                                    P.duration(),
                                    P.scrollTrigger.start,
                                    P.scrollTrigger.end,
                                    se
                                  )
                                : se) + De),
                          (gi = m))),
                    ve = Cu(ve, "end", C),
                    ye =
                      Math.max(
                        se,
                        Gu(
                          ve || (gi ? "100% 0" : Re),
                          gi,
                          Je,
                          M,
                          de() + De,
                          We,
                          Ke,
                          C,
                          ce,
                          I,
                          y,
                          Re,
                          P,
                          C._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    De = 0,
                    nt = Li;
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
                        (C._startClamp ? Math.max(0, Xe.start) : Xe.start)),
                      ((Oi === m && Xe.start - Xe._pinPush < se) ||
                        Oi === Jt) &&
                        isNaN(Pe) &&
                        (De += st * (1 - Xe.progress)),
                      Oi === f && (xe += st));
                if (
                  ((se += De),
                  (ye += De),
                  C._startClamp && (C._startClamp += De),
                  C._endClamp &&
                    !Ct &&
                    ((C._endClamp = ye || -0.001),
                    (ye = Math.min(ye, xi(A, M)))),
                  (fe = ye - se || ((se -= 0.01) && 0.001)),
                  gt &&
                    (ue = G.utils.clamp(0, 1, G.utils.normalize(se, ye, Ge))),
                  (C._pinPush = xe),
                  He &&
                    De &&
                    ((st = {}),
                    (st[M.a] = "+=" + De),
                    Jt && (st[M.p] = "-=" + de()),
                    G.set([He, We], st)),
                  f && !(ra && C.end >= xi(A, M)))
                )
                  (st = oi(f)),
                    (ro = M === qe),
                    (Mr = de()),
                    (Nt = parseFloat(we(M.a)) + xe),
                    !Re &&
                      ye > 1 &&
                      ((Mi = (b ? _e.scrollingElement || Xt : A).style),
                      (Mi = {
                        style: Mi,
                        value: Mi["overflow" + M.a.toUpperCase()],
                      }),
                      b &&
                        oi(he)["overflow" + M.a.toUpperCase()] !== "scroll" &&
                        (Mi.style["overflow" + M.a.toUpperCase()] = "scroll")),
                    ga(f, Ae, st),
                    (Zt = Bs(f)),
                    (vt = zi(f, !0)),
                    (Ua = y && Zi(A, ro ? St : qe)()),
                    h
                      ? ((Me = [h + M.os2, fe + xe + Ve]),
                        (Me.t = Ae),
                        (nt = h === Be ? Ps(f, M) + fe + xe : 0),
                        nt &&
                          (Me.push(M.d, nt + Ve),
                          Ae.style.flexBasis !== "auto" &&
                            (Ae.style.flexBasis = nt + Ve)),
                        Qr(Me),
                        Jt &&
                          ne.forEach(function (rr) {
                            rr.pin === Jt &&
                              rr.vars.pinSpacing !== !1 &&
                              (rr._subPinOffset = !0);
                          }),
                        y && de(Ge))
                      : ((nt = Ps(f, M)),
                        nt &&
                          Ae.style.flexBasis !== "auto" &&
                          (Ae.style.flexBasis = nt + Ve)),
                    y &&
                      ((_t = {
                        top: vt.top + (ro ? Mr - se : Ua) + Ve,
                        left: vt.left + (ro ? Ua : Mr - se) + Ve,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (_t[_r] = _t["max" + Kr] = Math.ceil(vt.width) + Ve),
                      (_t[yr] = _t["max" + ua] = Math.ceil(vt.height) + Ve),
                      (_t[si] =
                        _t[si + Fn] =
                        _t[si + Nn] =
                        _t[si + qn] =
                        _t[si + Bn] =
                          "0"),
                      (_t[Be] = st[Be]),
                      (_t[Be + Fn] = st[Be + Fn]),
                      (_t[Be + Nn] = st[Be + Nn]),
                      (_t[Be + qn] = st[Be + qn]),
                      (_t[Be + Bn] = st[Be + Bn]),
                      (pt = Kf(At, _t, S)),
                      Ct && de(0)),
                    n
                      ? ((yd = n._initted),
                        Qo(1),
                        n.render(n.duration(), !0, !0),
                        (pi = we(M.a) - Nt + fe + xe),
                        (B = Math.abs(fe - pi) > 1),
                        y && B && pt.splice(pt.length - 2, 2),
                        n.render(0, !0, !0),
                        yd || n.invalidate(!0),
                        n.parent || n.totalTime(n.totalTime()),
                        Qo(0))
                      : (pi = fe),
                    Mi &&
                      (Mi.value
                        ? (Mi.style["overflow" + M.a.toUpperCase()] = Mi.value)
                        : Mi.style.removeProperty("overflow-" + M.a));
                else if (m && de() && !P)
                  for (vt = m.parentNode; vt && vt !== he; )
                    vt._pinOffset &&
                      ((se -= vt._pinOffset), (ye -= vt._pinOffset)),
                      (vt = vt.parentNode);
                is &&
                  is.forEach(function (rr) {
                    return rr.revert(!1, !0);
                  }),
                  (C.start = se),
                  (C.end = ye),
                  (Oe = $e = Ct ? Ge : de()),
                  !P && !Ct && (Oe < Ge && de(Ge), (C.scroll.rec = 0)),
                  C.revert(!1, !0),
                  (ie = ct()),
                  Bt && ((X = -1), Bt.restart(!0)),
                  (ut = 0),
                  n &&
                    R &&
                    (n._initted || hi) &&
                    n.progress() !== hi &&
                    n.progress(hi || 0, !0).render(n.time(), !0, !0),
                  (gt || ue !== C.progress || P || p || (n && !n._initted)) &&
                    (n &&
                      !R &&
                      (n._initted || ue || n.vars.immediateRender !== !1) &&
                      n.totalProgress(
                        P && se < -0.001 && !ue
                          ? G.utils.normalize(se, ye, 0)
                          : ue,
                        !0
                      ),
                    (C.progress = gt || (Oe - se) / fe === ue ? 0 : ue)),
                  f && h && (Ae._pinOffset = Math.round(C.progress * pi)),
                  U && U.invalidate(),
                  isNaN(rs) ||
                    ((rs -= G.getProperty(N, M.p)),
                    (no -= G.getProperty(Ke, M.p)),
                    qs(N, M, rs),
                    qs(He, M, rs - (te || 0)),
                    qs(Ke, M, no),
                    qs(We, M, no - (te || 0))),
                  gt && !Ct && C.update(),
                  c && !Ct && !Ze && ((Ze = !0), c(C), (Ze = !1));
              }
            }),
            (C.getVelocity = function () {
              return ((de() - $e) / (ct() - Dn)) * 1e3 || 0;
            }),
            (C.endAnimation = function () {
              zn(C.callbackAnimation),
                n &&
                  (U
                    ? U.progress(1)
                    : n.paused()
                    ? R || zn(n, C.direction < 0, 1)
                    : zn(n, n.reversed()));
            }),
            (C.labelToScroll = function ($) {
              return (
                (n &&
                  n.labels &&
                  (se || C.refresh() || se) +
                    (n.labels[$] / n.duration()) * fe) ||
                0
              );
            }),
            (C.getTrailing = function ($) {
              var ee = ne.indexOf(C),
                K =
                  C.direction > 0
                    ? ne.slice(0, ee).reverse()
                    : ne.slice(ee + 1);
              return (
                Yt($)
                  ? K.filter(function (te) {
                      return te.vars.preventOverlaps === $;
                    })
                  : K
              ).filter(function (te) {
                return C.direction > 0 ? te.end <= se : te.start >= ye;
              });
            }),
            (C.update = function ($, ee, K) {
              if (!(P && !K && !$)) {
                var te = Ct === !0 ? Ge : C.scroll(),
                  Je = $ ? 0 : (te - se) / fe,
                  ce = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0,
                  Re = C.progress,
                  gt,
                  De,
                  xe,
                  ve,
                  gi,
                  Pe,
                  Jt,
                  Li;
                if (
                  (ee &&
                    (($e = Oe),
                    (Oe = P ? de() : te),
                    g && ((re = le), (le = n && !R ? n.totalProgress() : ce))),
                  v &&
                    f &&
                    !ut &&
                    !Es &&
                    ni &&
                    (!ce && se < te + ((te - $e) / (ct() - Dn)) * v
                      ? (ce = 1e-4)
                      : ce === 1 &&
                        ye > te + ((te - $e) / (ct() - Dn)) * v &&
                        (ce = 0.9999)),
                  ce !== Re && C.enabled)
                ) {
                  if (
                    ((gt = C.isActive = !!ce && ce < 1),
                    (De = !!Re && Re < 1),
                    (Pe = gt !== De),
                    (gi = Pe || !!ce != !!Re),
                    (C.direction = ce > Re ? 1 : -1),
                    (C.progress = ce),
                    gi &&
                      !ut &&
                      ((xe = ce && !Re ? 0 : ce === 1 ? 1 : Re === 1 ? 2 : 3),
                      R &&
                        ((ve =
                          (!Pe && L[xe + 1] !== "none" && L[xe + 1]) || L[xe]),
                        (Li =
                          n &&
                          (ve === "complete" || ve === "reset" || ve in n)))),
                    k &&
                      (Pe || Li) &&
                      (Li || d || !n) &&
                      (dt(k)
                        ? k(C)
                        : C.getTrailing(k).forEach(function (Mr) {
                            return Mr.endAnimation();
                          })),
                    R ||
                      (U && !ut && !Es
                        ? (U._dp._time - U._start !== U._time &&
                            U.render(U._dp._time - U._start),
                          U.resetTo
                            ? U.resetTo("totalProgress", ce, n._tTime / n._tDur)
                            : ((U.vars.totalProgress = ce),
                              U.invalidate().restart()))
                        : n && n.totalProgress(ce, !!(ut && (ie || $)))),
                    f)
                  ) {
                    if (($ && h && (Ae.style[h + M.os2] = Lr), !y))
                      ht(In(Nt + pi * ce));
                    else if (gi) {
                      if (
                        ((Jt =
                          !$ && ce > Re && ye + 1 > te && te + 1 >= xi(A, M)),
                        S)
                      )
                        if (!$ && (gt || Jt)) {
                          var nt = zi(f, !0),
                            st = te - se;
                          Xu(
                            f,
                            he,
                            nt.top + (M === qe ? st : 0) + Ve,
                            nt.left + (M === qe ? 0 : st) + Ve
                          );
                        } else Xu(f, Ae);
                      Qr(gt || Jt ? pt : Zt),
                        (B && ce < 1 && gt) ||
                          ht(Nt + (ce === 1 && !Jt ? pi : 0));
                    }
                  }
                  g && !be.tween && !ut && !Es && Bt.restart(!0),
                    a &&
                      (Pe || (E && ce && (ce < 1 || !na))) &&
                      On(a.targets).forEach(function (Mr) {
                        return Mr.classList[gt || E ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !$ && o(C),
                    gi && !ut
                      ? (R &&
                          (Li &&
                            (ve === "complete"
                              ? n.pause().totalProgress(1)
                              : ve === "reset"
                              ? n.restart(!0).pause()
                              : ve === "restart"
                              ? n.restart(!0)
                              : n[ve]()),
                          o && o(C)),
                        (Pe || !na) &&
                          (u && Pe && oa(C, u),
                          T[xe] && oa(C, T[xe]),
                          E && (ce === 1 ? C.kill(!1, 1) : (T[xe] = 0)),
                          Pe ||
                            ((xe = ce === 1 ? 1 : 3), T[xe] && oa(C, T[xe]))),
                        O &&
                          !gt &&
                          Math.abs(C.getVelocity()) > (Rn(O) ? O : 2500) &&
                          (zn(C.callbackAnimation),
                          U
                            ? U.progress(1)
                            : zn(n, ve === "reverse" ? 1 : !ce, 1)))
                      : R && o && !ut && o(C);
                }
                if (H) {
                  var vt = P
                    ? (te / P.duration()) * (P._caScrollDist || 0)
                    : te;
                  dn(vt + (N._isFlipped ? 1 : 0)), H(vt);
                }
                mi && mi((-te / P.duration()) * (P._caScrollDist || 0));
              }
            }),
            (C.enable = function ($, ee) {
              C.enabled ||
                ((C.enabled = !0),
                je(A, "resize", $n),
                b || je(A, "scroll", Zr),
                F && je(r, "refreshInit", F),
                $ !== !1 && ((C.progress = ue = 0), (Oe = $e = X = de())),
                ee !== !1 && C.refresh());
            }),
            (C.getTween = function ($) {
              return $ && be ? be.tween : U;
            }),
            (C.setPositions = function ($, ee, K, te) {
              if (P) {
                var Je = P.scrollTrigger,
                  ce = P.duration(),
                  Re = Je.end - Je.start;
                ($ = Je.start + (Re * $) / ce),
                  (ee = Je.start + (Re * ee) / ce);
              }
              C.refresh(
                !1,
                !1,
                {
                  start: Eu($, K && !!C._startClamp),
                  end: Eu(ee, K && !!C._endClamp),
                },
                te
              ),
                C.update();
            }),
            (C.adjustPinSpacing = function ($) {
              if (Me && $) {
                var ee = Me.indexOf(M.d) + 1;
                (Me[ee] = parseFloat(Me[ee]) + $ + Ve),
                  (Me[1] = parseFloat(Me[1]) + $ + Ve),
                  Qr(Me);
              }
            }),
            (C.disable = function ($, ee) {
              if (
                C.enabled &&
                ($ !== !1 && C.revert(!0, !0),
                (C.enabled = C.isActive = !1),
                ee || (U && U.pause()),
                (Ge = 0),
                Ee && (Ee.uncache = 1),
                F && Ue(r, "refreshInit", F),
                Bt &&
                  (Bt.pause(), be.tween && be.tween.kill() && (be.tween = 0)),
                !b)
              ) {
                for (var K = ne.length; K--; )
                  if (ne[K].scroller === A && ne[K] !== C) return;
                Ue(A, "resize", $n), b || Ue(A, "scroll", Zr);
              }
            }),
            (C.kill = function ($, ee) {
              C.disable($, ee), U && !ee && U.kill(), l && delete da[l];
              var K = ne.indexOf(C);
              K >= 0 && ne.splice(K, 1),
                K === xt && zs > 0 && xt--,
                (K = 0),
                ne.forEach(function (te) {
                  return te.scroller === C.scroller && (K = 1);
                }),
                K || Ct || (C.scroll.rec = 0),
                n &&
                  ((n.scrollTrigger = null),
                  $ && n.revert({ kill: !1 }),
                  ee || n.kill()),
                He &&
                  [He, We, N, Ke].forEach(function (te) {
                    return te.parentNode && te.parentNode.removeChild(te);
                  }),
                Hn === C && (Hn = 0),
                f &&
                  (Ee && (Ee.uncache = 1),
                  (K = 0),
                  ne.forEach(function (te) {
                    return te.pin === f && K++;
                  }),
                  K || (Ee.spacer = 0)),
                i.onKill && i.onKill(C);
            }),
            ne.push(C),
            C.enable(!1, !1),
            mt && mt(C),
            n && n.add && !fe)
          ) {
            var pe = C.update;
            (C.update = function () {
              (C.update = pe), oe.cache++, se || ye || C.refresh();
            }),
              G.delayedCall(0.01, C.update),
              (fe = 0.01),
              (se = ye = 0);
          } else C.refresh();
          f && Yf();
        }),
        (r.register = function (i) {
          return (
            Xr ||
              ((G = i || Ou()),
              Lu() && window.document && r.enable(),
              (Xr = kn)),
            Xr
          );
        }),
        (r.defaults = function (i) {
          if (i) for (var n in i) Ms[n] = i[n];
          return Ms;
        }),
        (r.disable = function (i, n) {
          (kn = 0),
            ne.forEach(function (o) {
              return o[n ? "kill" : "disable"](i);
            }),
            Ue(ae, "wheel", Zr),
            Ue(_e, "scroll", Zr),
            clearInterval(xs),
            Ue(_e, "touchcancel", Si),
            Ue(he, "touchstart", Si),
            Ls(Ue, _e, "pointerdown,touchstart,mousedown", Au),
            Ls(Ue, _e, "pointerup,touchend,mouseup", Pu),
            Ss.kill(),
            As(Ue);
          for (var s = 0; s < oe.length; s += 3)
            Os(Ue, oe[s], oe[s + 1]), Os(Ue, oe[s], oe[s + 2]);
        }),
        (r.enable = function () {
          if (
            ((ae = window),
            (_e = document),
            (Xt = _e.documentElement),
            (he = _e.body),
            G &&
              ((On = G.utils.toArray),
              (Mn = G.utils.clamp),
              (ea = G.core.context || Si),
              (Qo = G.core.suppressOverwrites || Si),
              (ta = ae.history.scrollRestoration || "auto"),
              (ha = ae.pageYOffset || 0),
              G.core.globals("ScrollTrigger", r),
              he))
          ) {
            (kn = 1),
              (jr = document.createElement("div")),
              (jr.style.height = "100vh"),
              (jr.style.position = "absolute"),
              Hu(),
              qf(),
              Ie.register(G),
              (r.isTouch = Ie.isTouch),
              (Qi =
                Ie.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Jo = Ie.isTouch === 1),
              je(ae, "wheel", Zr),
              (Ko = [ae, _e, Xt, he]),
              G.matchMedia &&
                ((r.matchMedia = function (u) {
                  var c = G.matchMedia(),
                    d;
                  for (d in u) c.add(d, u[d]);
                  return c;
                }),
                G.addEventListener("matchMediaInit", function () {
                  return pa();
                }),
                G.addEventListener("matchMediaRevert", function () {
                  return qu();
                }),
                G.addEventListener("matchMedia", function () {
                  xr(0, 1), br("matchMedia");
                }),
                G.matchMedia().add("(orientation: portrait)", function () {
                  return fa(), fa;
                })),
              fa(),
              je(_e, "scroll", Zr);
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
                a = zi(he),
                qe.m = Math.round(a.top + qe.sc()) || 0,
                St.m = Math.round(a.left + St.sc()) || 0,
                s
                  ? (n.borderTopStyle = s)
                  : n.removeProperty("border-top-style"),
                i ||
                  (he.setAttribute("style", ""), he.removeAttribute("style")),
                xs = setInterval(Bu, 250),
                G.delayedCall(0.5, function () {
                  return (Es = 0);
                }),
                je(_e, "touchcancel", Si),
                je(he, "touchstart", Si),
                Ls(je, _e, "pointerdown,touchstart,mousedown", Au),
                Ls(je, _e, "pointerup,touchend,mouseup", Pu),
                Zo = G.utils.checkPrefix("transform"),
                Ns.push(Zo),
                Xr = ct(),
                Ss = G.delayedCall(0.2, xr).pause(),
                Yr = [
                  _e,
                  "visibilitychange",
                  function () {
                    var u = ae.innerWidth,
                      c = ae.innerHeight;
                    _e.hidden
                      ? ((yu = u), (wu = c))
                      : (yu !== u || wu !== c) && $n();
                  },
                  _e,
                  "DOMContentLoaded",
                  xr,
                  ae,
                  "load",
                  xr,
                  ae,
                  "resize",
                  $n,
                ],
                As(je),
                ne.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < oe.length;
              l += 3
            )
              Os(Ue, oe[l], oe[l + 1]), Os(Ue, oe[l], oe[l + 2]);
          }
        }),
        (r.config = function (i) {
          "limitCallbacks" in i && (na = !!i.limitCallbacks);
          var n = i.syncInterval;
          (n && clearInterval(xs)) || ((xs = n) && setInterval(Bu, n)),
            "ignoreMobileResize" in i &&
              (Jo = r.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (As(Ue) || As(je, i.autoRefreshEvents || "none"),
              (Su = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (r.scrollerProxy = function (i, n) {
          var s = kt(i),
            o = oe.indexOf(s),
            a = gr(s);
          ~o && oe.splice(o, a ? 6 : 2),
            n && (a ? bi.unshift(ae, n, he, n, Xt, n) : bi.unshift(s, n));
        }),
        (r.clearMatchMedia = function (i) {
          ne.forEach(function (n) {
            return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0);
          });
        }),
        (r.isInViewport = function (i, n, s) {
          var o = (Yt(i) ? kt(i) : i).getBoundingClientRect(),
            a = o[s ? _r : yr] * n || 0;
          return s
            ? o.right - a > 0 && o.left + a < ae.innerWidth
            : o.bottom - a > 0 && o.top + a < ae.innerHeight;
        }),
        (r.positionInViewport = function (i, n, s) {
          Yt(i) && (i = kt(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? _r : yr],
            l =
              n == null
                ? a / 2
                : n in Ds
                ? Ds[n] * a
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
            var n = wr.killAll || [];
            (wr = {}),
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
        ? On(r).forEach(function (e) {
            if (e && e.style) {
              var t = jt.indexOf(e);
              t >= 0 && jt.splice(t, 5),
                jt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  G.core.getCache(e),
                  ea()
                );
            }
          })
        : jt;
    }),
    (Z.revert = function (r, e) {
      return pa(!r, e);
    }),
    (Z.create = function (r, e) {
      return new Z(r, e);
    }),
    (Z.refresh = function (r) {
      return r ? $n(!0) : (Xr || Z.register()) && xr(!0);
    }),
    (Z.update = function (r) {
      return ++oe.cache && Ni(r === !0 ? 2 : 0);
    }),
    (Z.clearScrollMemory = Vu),
    (Z.maxScroll = function (r, e) {
      return xi(r, e ? St : qe);
    }),
    (Z.getScrollFunc = function (r, e) {
      return Zi(kt(r), e ? St : qe);
    }),
    (Z.getById = function (r) {
      return da[r];
    }),
    (Z.getAll = function () {
      return ne.filter(function (r) {
        return r.vars.id !== "ScrollSmoother";
      });
    }),
    (Z.isScrolling = function () {
      return !!ni;
    }),
    (Z.snapDirectional = ca),
    (Z.addEventListener = function (r, e) {
      var t = wr[r] || (wr[r] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Z.removeEventListener = function (r, e) {
      var t = wr[r],
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
          a.substr(0, 2) === "on" && dt(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        dt(s) &&
          ((s = s()),
          je(Z, "refresh", function () {
            return (s = e.batchMax());
          })),
        On(r).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push(Z.create(u));
        }),
        t
      );
    });
  var Uu = function (e, t, i, n) {
      return (
        t > n ? e(n) : t < 0 && e(0),
        i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    va = function r(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Ie.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Xt && r(he, t);
    },
    Vs = { auto: 1, scroll: 1 },
    Qf = function (e) {
      var t = e.event,
        i = e.target,
        n = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || G.core.getCache(s),
        a = ct(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== he &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Vs[(l = oi(s)).overflowY] || Vs[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !gr(s) &&
          (Vs[(l = oi(s)).overflowY] || Vs[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Ku = function (e, t, i, n) {
      return Ie.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (n = n && Qf),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return i && je(_e, Ie.eventTypes[0], Qu, !1, !0);
        },
        onDisable: function () {
          return Ue(_e, Ie.eventTypes[0], Qu, !0);
        },
      });
    },
    Jf = /(input|label|select|textarea)/i,
    Zu,
    Qu = function (e) {
      var t = Jf.test(e.target.tagName);
      (t || Zu) && ((e._gsapAllow = !0), (Zu = t));
    },
    ep = function (e) {
      vr(e) || (e = {}),
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
        u = kt(e.target) || Xt,
        c = G.core.globals().ScrollSmoother,
        d = c && c.get(),
        m =
          Qi &&
          ((e.content && kt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = Zi(u, qe),
        h = Zi(u, St),
        p = 1,
        v =
          (Ie.isTouch && ae.visualViewport
            ? ae.visualViewport.scale * ae.visualViewport.width
            : ae.outerWidth) / ae.innerWidth,
        _ = 0,
        w = dt(n)
          ? function () {
              return n(a);
            }
          : function () {
              return n || 2.8;
            },
        E,
        g,
        S = Ku(u, e.type, !0, s),
        x = function () {
          return (g = !1);
        },
        P = Si,
        O = Si,
        k = function () {
          (l = xi(u, qe)),
            (O = Mn(Qi ? 1 : 0, l)),
            i && (P = Mn(0, xi(u, St))),
            (E = Sr);
        },
        M = function () {
          (m._gsap.y = In(parseFloat(m._gsap.y) + f.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        R = function () {
          if (g) {
            requestAnimationFrame(x);
            var D = In(a.deltaY / 2),
              I = O(f.v - D);
            if (m && I !== f.v + f.offset) {
              f.offset = I - f.v;
              var C = In((parseFloat(m && m._gsap.y) || 0) - f.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                C +
                ", 0, 1)"),
                (m._gsap.y = C + "px"),
                (f.cacheID = oe.cache),
                Ni();
            }
            return !0;
          }
          f.offset && M(), (g = !0);
        },
        A,
        z,
        b,
        y,
        T = function () {
          k(),
            A.isActive() &&
              A.vars.scrollY > l &&
              (f() > l ? A.progress(1) && f(l) : A.resetTo("scrollY", l));
        };
      return (
        m && G.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (L) {
          return (
            (Qi && L.type === "touchmove" && R()) ||
            (p > 1.05 && L.type !== "touchstart") ||
            a.isGesturing ||
            (L.touches && L.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          g = !1;
          var L = p;
          (p = In(((ae.visualViewport && ae.visualViewport.scale) || 1) / v)),
            A.pause(),
            L !== p && va(u, p > 1.01 ? !0 : i ? !1 : "x"),
            (z = h()),
            (b = f()),
            k(),
            (E = Sr);
        }),
        (e.onRelease = e.onGestureStart =
          function (L, D) {
            if ((f.offset && M(), !D)) y.restart(!0);
            else {
              oe.cache++;
              var I = w(),
                C,
                F;
              i &&
                ((C = h()),
                (F = C + (I * 0.05 * -L.velocityX) / 0.227),
                (I *= Uu(h, C, F, xi(u, St))),
                (A.vars.scrollX = P(F))),
                (C = f()),
                (F = C + (I * 0.05 * -L.velocityY) / 0.227),
                (I *= Uu(f, C, F, xi(u, qe))),
                (A.vars.scrollY = O(F)),
                A.invalidate().duration(I).play(0.01),
                ((Qi && A.vars.scrollY >= l) || C >= l - 1) &&
                  G.to({}, { onUpdate: T, duration: I });
            }
            o && o(L);
          }),
        (e.onWheel = function () {
          A._ts && A.pause(), ct() - _ > 1e3 && ((E = 0), (_ = ct()));
        }),
        (e.onChange = function (L, D, I, C, F) {
          if (
            (Sr !== E && k(),
            D && i && h(P(C[2] === D ? z + (L.startX - L.x) : h() + D - C[1])),
            I)
          ) {
            f.offset && M();
            var V = F[2] === I,
              Q = V ? b + L.startY - L.y : f() + I - F[1],
              X = O(Q);
            V && Q !== X && (b += X - Q), f(X);
          }
          (I || D) && Ni();
        }),
        (e.onEnable = function () {
          va(u, i ? !1 : "x"),
            Z.addEventListener("refresh", T),
            je(ae, "resize", T),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = h.smooth = !1)),
            S.enable();
        }),
        (e.onDisable = function () {
          va(u, !0),
            Ue(ae, "resize", T),
            Z.removeEventListener("refresh", T),
            S.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Ie(e)),
        (a.iOS = Qi),
        Qi && !f() && f(1),
        Qi && G.ticker.add(Si),
        (y = a._dc),
        (A = G.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Yu(f, f(), function () {
              return A.pause();
            }),
          },
          onUpdate: Ni,
          onComplete: y.vars.onComplete,
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
      var e = r instanceof Ie ? r : ep(r);
      return (
        Tt && Tt.target === e.target && Tt.kill(), gr(e.target) && (Tt = e), e
      );
    }),
    (Z.core = {
      _getVelocityProp: Uo,
      _inputObserver: Ku,
      _scrollers: oe,
      _proxies: bi,
      bridge: {
        ss: function () {
          ni || br("scrollStart"), (ni = ct());
        },
        ref: function () {
          return ut;
        },
      },
    }),
    Ou() && G.registerPlugin(Z);
  /*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   */ let Wn,
    Jr,
    _a,
    tp = () => _a || tn.register(window.gsap),
    Ju = typeof Intl < "u" ? new Intl.Segmenter() : 0,
    $s = (r) =>
      typeof r == "string"
        ? $s(document.querySelectorAll(r))
        : "length" in r
        ? Array.from(r)
        : [r],
    ec = (r) => $s(r).filter((e) => e instanceof HTMLElement),
    ya = [],
    wa = function () {},
    ip = /\s+/g,
    tc = new RegExp(
      "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
      "gu"
    ),
    ic = { left: 0, top: 0, width: 0, height: 0 },
    rc = (r, e) => {
      if (e) {
        let t = new Set(r.join("").match(e) || ya),
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
    nc = (r) =>
      window.getComputedStyle(r).display === "inline" &&
      (r.style.display = "inline-block"),
    en = (r, e, t) =>
      e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
    ba = (r, e, t) => {
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
    rp = (r, e, t, i) => {
      let n = ba("line", t, i),
        s = window.getComputedStyle(r).textAlign || "left";
      return (o, a) => {
        let l = n("");
        for (l.style.textAlign = s, r.insertBefore(l, e[o]); o < a; o++)
          l.appendChild(e[o]);
        l.normalize();
      };
    },
    sc = (r, e, t, i, n, s, o, a, l, u) => {
      var c;
      let d = Array.from(r.childNodes),
        m = 0,
        { wordDelimiter: f, reduceWhiteSpace: h = !0, prepareText: p } = e,
        v = r.getBoundingClientRect(),
        _ = v,
        w =
          !h && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
        E = 0,
        g = t.collection,
        S,
        x,
        P,
        O,
        k,
        M,
        R,
        A,
        z,
        b,
        y,
        T,
        L,
        D,
        I,
        C,
        F,
        V;
      for (
        typeof f == "object"
          ? ((P = f.delimiter || f), (x = f.replaceWith || ""))
          : (x = f === "" ? "" : f || " "),
          S = x !== " ";
        m < d.length;
        m++
      )
        if (((O = d[m]), O.nodeType === 3)) {
          for (
            I = O.textContent || "",
              h
                ? (I = I.replace(ip, " "))
                : w &&
                  (I = I.replace(
                    /\n/g,
                    x +
                      `
`
                  )),
              p && (I = p(I, r)),
              O.textContent = I,
              k = x || P ? I.split(P || x) : I.match(a) || ya,
              F = k[k.length - 1],
              A = S ? F.slice(-1) === " " : !F,
              F || k.pop(),
              _ = v,
              R = S ? k[0].charAt(0) === " " : !k[0],
              R && en(" ", r, O),
              k[0] || k.shift(),
              rc(k, l),
              (s && u) || (O.textContent = ""),
              z = 1;
            z <= k.length;
            z++
          )
            if (
              ((C = k[z - 1]),
              !h &&
                w &&
                C.charAt(0) ===
                  `
` &&
                ((c = O.previousSibling) == null || c.remove(),
                en(document.createElement("br"), r, O),
                (C = C.slice(1))),
              !h && C === "")
            )
              en(x, r, O);
            else if (C === " ") r.insertBefore(document.createTextNode(" "), O);
            else {
              if (
                (S && C.charAt(0) === " " && en(" ", r, O),
                E && z === 1 && !R && g.indexOf(E.parentNode) > -1
                  ? ((M = g[g.length - 1]),
                    M.appendChild(document.createTextNode(i ? "" : C)))
                  : ((M = t(i ? "" : C)),
                    en(M, r, O),
                    E && z === 1 && !R && M.insertBefore(E, M.firstChild)),
                i)
              )
                for (
                  y = Ju
                    ? rc(
                        [...Ju.segment(C)].map((Q) => Q.segment),
                        l
                      )
                    : C.match(a) || ya,
                    V = 0;
                  V < y.length;
                  V++
                )
                  M.appendChild(
                    y[V] === " " ? document.createTextNode(" ") : i(y[V])
                  );
              if (s && u) {
                if (
                  ((I = O.textContent = I.substring(C.length + 1, I.length)),
                  (b = M.getBoundingClientRect()),
                  b.top > _.top && b.left <= _.left)
                ) {
                  for (T = r.cloneNode(), L = r.childNodes[0]; L && L !== M; )
                    (D = L), (L = L.nextSibling), T.appendChild(D);
                  r.parentNode.insertBefore(T, r), n && nc(T);
                }
                _ = b;
              }
              (z < k.length || A) &&
                en(
                  z >= k.length ? " " : S && C.slice(-1) === " " ? " " + x : x,
                  r,
                  O
                );
            }
          r.removeChild(O), (E = 0);
        } else
          O.nodeType === 1 &&
            (o && o.indexOf(O) > -1
              ? (g.indexOf(O.previousSibling) > -1 &&
                  g[g.length - 1].appendChild(O),
                (E = O))
              : (sc(O, e, t, i, n, s, o, a, l, !0), (E = 0)),
            n && nc(O));
    };
  const oc = class wd {
    constructor(e, t) {
      (this.isSplit = !1),
        tp(),
        (this.elements = ec(e)),
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
        wa(this),
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
        h =
          l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
        p = h ? new RegExp(h.source + "|" + tc.source, "gu") : tc,
        v = !!e.ignore && ec(e.ignore),
        { orig: _, animTime: w, obs: E } = this._data,
        g;
      return (
        (d || m || c) &&
          (this.elements.forEach((S, x) => {
            (_[x] = {
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
              M = d ? ba("char", e, P) : null,
              R = ba("word", e, O),
              A,
              z,
              b,
              y;
            if ((sc(S, e, R, M, f, n && (c || f), v, p, h, !1), c)) {
              let T = $s(S.childNodes),
                L = rp(S, T, e, k),
                D,
                I = [],
                C = 0,
                F = T.map((Q) =>
                  Q.nodeType === 1 ? Q.getBoundingClientRect() : ic
                ),
                V = ic;
              for (A = 0; A < T.length; A++)
                (D = T[A]),
                  D.nodeType === 1 &&
                    (D.nodeName === "BR"
                      ? (I.push(D), L(C, A + 1), (C = A + 1), (V = F[C]))
                      : (A &&
                          F[A].top > V.top &&
                          F[A].left <= V.left &&
                          (L(C, A), (C = A)),
                        (V = F[A])));
              C < A && L(C, A),
                I.forEach((Q) => {
                  var X;
                  return (X = Q.parentNode) == null ? void 0 : X.removeChild(Q);
                });
            }
            if (!m) {
              for (A = 0; A < O.length; A++)
                if (
                  ((z = O[A]),
                  d || !z.nextSibling || z.nextSibling.nodeType !== 3)
                )
                  if (s && !c) {
                    for (
                      b = document.createElement("span"),
                        b.style.whiteSpace = "nowrap";
                      z.firstChild;

                    )
                      b.appendChild(z.firstChild);
                    z.replaceWith(b);
                  } else z.replaceWith(...z.childNodes);
                else
                  (y = z.nextSibling),
                    y &&
                      y.nodeType === 3 &&
                      ((y.textContent =
                        (z.textContent || "") + (y.textContent || "")),
                      z.remove());
              (O.length = 0), S.normalize();
            }
            this.lines.push(...k), this.words.push(...O), this.chars.push(...P);
          }),
          u &&
            this[u] &&
            this.masks.push(
              ...this[u].map((S) => {
                let x = S.cloneNode();
                return (
                  S.replaceWith(x),
                  x.appendChild(S),
                  S.className &&
                    (x.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (x.style.overflow = "clip"),
                  x
                );
              })
            )),
        (this.isSplit = !0),
        Jr && (a ? Jr.addEventListener("loadingdone", this._split) : Jr.status),
        (g = o && o(this)) &&
          g.totalTime &&
          (this._data.anim = w ? g.totalTime(w) : g),
        c &&
          a &&
          this.elements.forEach((S, x) => {
            (_[x].width = S.offsetWidth), E && E.observe(S);
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
        Jr?.removeEventListener("loadingdone", this._split),
        n && ((this._data.animTime = n.totalTime()), n.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new wd(e, t);
    }
    static register(e) {
      (Wn = Wn || e || window.gsap),
        Wn && (($s = Wn.utils.toArray), (wa = Wn.core.context || wa)),
        !_a && window.innerWidth > 0 && ((Jr = document.fonts), (_a = !0));
    }
  };
  oc.version = "3.13.0";
  let tn = oc;
  W.registerPlugin(Z, tn);
  const np = () => {
      document.querySelectorAll("[data-highlight-text]").forEach((e) => {
        const t = e.getAttribute("data-highlight-scroll-start") || "top 90%",
          i = e.getAttribute("data-highlight-scroll-end") || "center 40%",
          n = parseFloat(e.getAttribute("data-highlight-fade")) || 0.2,
          s = parseFloat(e.getAttribute("data-highlight-stagger")) || 0.1;
        new tn(e, {
          type: "words, chars",
          onSplit(o) {
            const a = W.context(() => {
              W.timeline({
                scrollTrigger: { scrub: !0, trigger: e, start: t, end: i },
              }).from(o.chars, { autoAlpha: n, stagger: s, ease: "linear" });
            });
            e._gsapContext = a;
          },
        });
      });
    },
    rn = () => {
      np();
    },
    sp = () => {
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
            (W.set(p, { scaleX: 0, transformOrigin: "left center" }),
            (c = W.to(p, {
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
            w = t[h],
            E = i[h],
            g = w.querySelector('[data-tabs="item-progress"]'),
            S = W.timeline({
              defaults: { duration: 0.65, ease: "power3" },
              onComplete: () => {
                (o = w), (a = E), (l = h), (u = !1), n && d(h);
              },
            });
          p &&
            (p.classList.remove("active"),
            p.setAttribute("aria-selected", "false"),
            v?.classList.remove("active"),
            S.set(_, { transformOrigin: "right center" })
              .to(_, { scaleX: 0, duration: 0.3 }, 0)
              .to(v, { autoAlpha: 0, yPercent: 5, scale: 0.99 }, 0)),
            w.classList.add("active"),
            w.setAttribute("aria-selected", "true"),
            E.classList.add("active"),
            S.fromTo(
              E,
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
                t.forEach((w, E) => {
                  w.setAttribute("tabindex", E === _ ? "0" : "-1");
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
          const w = 50,
            E = 100;
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
                  x = Math.abs(_ - p);
                if (Math.abs(S) > w && x < E)
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
    op = () => {
      sp();
    };
  W.registerPlugin(Z);
  const ap = () => {
      const r = document.querySelector(".home_hero_tab_component"),
        e = r.querySelector(".home_hero_tab_visual_wrap");
      W.to(e, {
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
    lp = () => {
      ap();
    };
  W.registerPlugin(Z, tn);
  const up = () => {
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
              w = o.querySelector('[form-dropdown="trigger-icon"]'),
              E = o.querySelectorAll('[form-dropdown="answer"]');
            d(v, _, w), f(v, _, w, E), (s = !1), (o = null);
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
          W.to(v, { duration: 0.5, ease: "expo.out", rotateX: 180, color: l }),
            W.fromTo(
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
            W.fromTo(
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
          W.to(v, { duration: 0.5, ease: "expo.out", rotateX: 0, color: a }),
            W.to(p, { autoAlpha: 0, duration: 0.3, ease: "expo.out" }),
            W.to(_, {
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
          w = h.querySelectorAll('[form-dropdown="answer"]'),
          E = () => {
            d(p, v, _), f(p, v, _, w), (s = !1), (o = null);
          };
        p.addEventListener("click", () => {
          const g = p.classList.contains(t);
          if (s && o && o !== h) {
            const S = o.querySelector('[form-dropdown="trigger"]'),
              x = o.querySelector('[form-dropdown="content"]'),
              P = o.querySelector('[form-dropdown="trigger-icon"]'),
              O = o.querySelectorAll('[form-dropdown="answer"]');
            d(S, x, P), f(S, x, P, O);
          }
          g ? E() : (c(p, v, _), m(p, v, _, w), (s = !0), (o = h));
        }),
          w.forEach((g) => {
            g.addEventListener("click", () => {
              if (o === h) {
                const S = g.querySelector("p[answer-value]"),
                  x = p.querySelector('[form-dropdown="value"]');
                if (S && x) {
                  const P =
                      S.getAttribute("answer-value") || S.textContent.trim(),
                    O = g.getAttribute("calc-value");
                  if (((x.textContent = P), O)) {
                    x.setAttribute("final-value", O);
                    const k = x.parentElement;
                    k && k.classList.add("is--active"),
                      p.classList.add("is--active"),
                      _ && _.classList.add("is--active"),
                      h.classList.add("is--active"),
                      x.classList.add("is--active");
                  }
                }
                E();
              }
            });
          });
      });
    },
    cp = () => {
      up();
    };
  var It = "top",
    ai = "bottom",
    li = "right",
    Rt = "left",
    Sa = "auto",
    Gn = [It, ai, li, Rt],
    nn = "start",
    Xn = "end",
    dp = "clippingParents",
    ac = "viewport",
    Yn = "popper",
    fp = "reference",
    lc = Gn.reduce(function (r, e) {
      return r.concat([e + "-" + nn, e + "-" + Xn]);
    }, []),
    uc = [].concat(Gn, [Sa]).reduce(function (r, e) {
      return r.concat([e, e + "-" + nn, e + "-" + Xn]);
    }, []),
    pp = "beforeRead",
    hp = "read",
    mp = "afterRead",
    gp = "beforeMain",
    vp = "main",
    _p = "afterMain",
    yp = "beforeWrite",
    wp = "write",
    bp = "afterWrite",
    Sp = [pp, hp, mp, gp, vp, _p, yp, wp, bp];
  function Ti(r) {
    return r ? (r.nodeName || "").toLowerCase() : null;
  }
  function Ut(r) {
    if (r == null) return window;
    if (r.toString() !== "[object Window]") {
      var e = r.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return r;
  }
  function Tr(r) {
    var e = Ut(r).Element;
    return r instanceof e || r instanceof Element;
  }
  function ui(r) {
    var e = Ut(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement;
  }
  function xa(r) {
    if (typeof ShadowRoot > "u") return !1;
    var e = Ut(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot;
  }
  function xp(r) {
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
  function Tp(r) {
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
  const cc = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: xp,
    effect: Tp,
    requires: ["computeStyles"],
  };
  function Ci(r) {
    return r.split("-")[0];
  }
  var Cr = Math.max,
    Hs = Math.min,
    sn = Math.round;
  function Ta() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands)
      ? r.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function dc() {
    return !/^((?!chrome|android).)*safari/i.test(Ta());
  }
  function on(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var i = r.getBoundingClientRect(),
      n = 1,
      s = 1;
    e &&
      ui(r) &&
      ((n = (r.offsetWidth > 0 && sn(i.width) / r.offsetWidth) || 1),
      (s = (r.offsetHeight > 0 && sn(i.height) / r.offsetHeight) || 1));
    var o = Tr(r) ? Ut(r) : window,
      a = o.visualViewport,
      l = !dc() && t,
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
  function Ca(r) {
    var e = on(r),
      t = r.offsetWidth,
      i = r.offsetHeight;
    return (
      Math.abs(e.width - t) <= 1 && (t = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
    );
  }
  function fc(r, e) {
    var t = e.getRootNode && e.getRootNode();
    if (r.contains(e)) return !0;
    if (t && xa(t)) {
      var i = e;
      do {
        if (i && r.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function Bi(r) {
    return Ut(r).getComputedStyle(r);
  }
  function Cp(r) {
    return ["table", "td", "th"].indexOf(Ti(r)) >= 0;
  }
  function Ji(r) {
    return ((Tr(r) ? r.ownerDocument : r.document) || window.document)
      .documentElement;
  }
  function Ws(r) {
    return Ti(r) === "html"
      ? r
      : r.assignedSlot || r.parentNode || (xa(r) ? r.host : null) || Ji(r);
  }
  function pc(r) {
    return !ui(r) || Bi(r).position === "fixed" ? null : r.offsetParent;
  }
  function Ep(r) {
    var e = /firefox/i.test(Ta()),
      t = /Trident/i.test(Ta());
    if (t && ui(r)) {
      var i = Bi(r);
      if (i.position === "fixed") return null;
    }
    var n = Ws(r);
    for (
      xa(n) && (n = n.host);
      ui(n) && ["html", "body"].indexOf(Ti(n)) < 0;

    ) {
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
  function jn(r) {
    for (var e = Ut(r), t = pc(r); t && Cp(t) && Bi(t).position === "static"; )
      t = pc(t);
    return t &&
      (Ti(t) === "html" || (Ti(t) === "body" && Bi(t).position === "static"))
      ? e
      : t || Ep(r) || e;
  }
  function Ea(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
  }
  function Un(r, e, t) {
    return Cr(r, Hs(e, t));
  }
  function Ap(r, e, t) {
    var i = Un(r, e, t);
    return i > t ? t : i;
  }
  function hc() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function mc(r) {
    return Object.assign({}, hc(), r);
  }
  function gc(r, e) {
    return e.reduce(function (t, i) {
      return (t[i] = r), t;
    }, {});
  }
  var Pp = function (e, t) {
    return (
      (e =
        typeof e == "function"
          ? e(Object.assign({}, t.rects, { placement: t.placement }))
          : e),
      mc(typeof e != "number" ? e : gc(e, Gn))
    );
  };
  function Lp(r) {
    var e,
      t = r.state,
      i = r.name,
      n = r.options,
      s = t.elements.arrow,
      o = t.modifiersData.popperOffsets,
      a = Ci(t.placement),
      l = Ea(a),
      u = [Rt, li].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!s || !o)) {
      var d = Pp(n.padding, t),
        m = Ca(s),
        f = l === "y" ? It : Rt,
        h = l === "y" ? ai : li,
        p =
          t.rects.reference[c] +
          t.rects.reference[l] -
          o[l] -
          t.rects.popper[c],
        v = o[l] - t.rects.reference[l],
        _ = jn(s),
        w = _ ? (l === "y" ? _.clientHeight || 0 : _.clientWidth || 0) : 0,
        E = p / 2 - v / 2,
        g = d[f],
        S = w - m[c] - d[h],
        x = w / 2 - m[c] / 2 + E,
        P = Un(g, x, S),
        O = l;
      t.modifiersData[i] = ((e = {}), (e[O] = P), (e.centerOffset = P - x), e);
    }
  }
  function Op(r) {
    var e = r.state,
      t = r.options,
      i = t.element,
      n = i === void 0 ? "[data-popper-arrow]" : i;
    n != null &&
      ((typeof n == "string" &&
        ((n = e.elements.popper.querySelector(n)), !n)) ||
        (fc(e.elements.popper, n) && (e.elements.arrow = n)));
  }
  const Mp = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Lp,
    effect: Op,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function an(r) {
    return r.split("-")[1];
  }
  var Dp = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function kp(r, e) {
    var t = r.x,
      i = r.y,
      n = e.devicePixelRatio || 1;
    return { x: sn(t * n) / n || 0, y: sn(i * n) / n || 0 };
  }
  function vc(r) {
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
      w = o.hasOwnProperty("y"),
      E = Rt,
      g = It,
      S = window;
    if (u) {
      var x = jn(t),
        P = "clientHeight",
        O = "clientWidth";
      if (
        (x === Ut(t) &&
          ((x = Ji(t)),
          Bi(x).position !== "static" &&
            a === "absolute" &&
            ((P = "scrollHeight"), (O = "scrollWidth"))),
        (x = x),
        n === It || ((n === Rt || n === li) && s === Xn))
      ) {
        g = ai;
        var k =
          d && x === S && S.visualViewport ? S.visualViewport.height : x[P];
        (p -= k - i.height), (p *= l ? 1 : -1);
      }
      if (n === Rt || ((n === It || n === ai) && s === Xn)) {
        E = li;
        var M =
          d && x === S && S.visualViewport ? S.visualViewport.width : x[O];
        (f -= M - i.width), (f *= l ? 1 : -1);
      }
    }
    var R = Object.assign({ position: a }, u && Dp),
      A = c === !0 ? kp({ x: f, y: p }, Ut(t)) : { x: f, y: p };
    if (((f = A.x), (p = A.y), l)) {
      var z;
      return Object.assign(
        {},
        R,
        ((z = {}),
        (z[g] = w ? "0" : ""),
        (z[E] = _ ? "0" : ""),
        (z.transform =
          (S.devicePixelRatio || 1) <= 1
            ? "translate(" + f + "px, " + p + "px)"
            : "translate3d(" + f + "px, " + p + "px, 0)"),
        z)
      );
    }
    return Object.assign(
      {},
      R,
      ((e = {}),
      (e[g] = w ? p + "px" : ""),
      (e[E] = _ ? f + "px" : ""),
      (e.transform = ""),
      e)
    );
  }
  function Ip(r) {
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
        variation: an(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: n,
        isFixed: e.options.strategy === "fixed",
      };
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        vc(
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
          vc(
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
  const Rp = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Ip,
    data: {},
  };
  var Gs = { passive: !0 };
  function zp(r) {
    var e = r.state,
      t = r.instance,
      i = r.options,
      n = i.scroll,
      s = n === void 0 ? !0 : n,
      o = i.resize,
      a = o === void 0 ? !0 : o,
      l = Ut(e.elements.popper),
      u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
      s &&
        u.forEach(function (c) {
          c.addEventListener("scroll", t.update, Gs);
        }),
      a && l.addEventListener("resize", t.update, Gs),
      function () {
        s &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", t.update, Gs);
          }),
          a && l.removeEventListener("resize", t.update, Gs);
      }
    );
  }
  const Np = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: zp,
    data: {},
  };
  var Bp = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Xs(r) {
    return r.replace(/left|right|bottom|top/g, function (e) {
      return Bp[e];
    });
  }
  var Fp = { start: "end", end: "start" };
  function _c(r) {
    return r.replace(/start|end/g, function (e) {
      return Fp[e];
    });
  }
  function Aa(r) {
    var e = Ut(r),
      t = e.pageXOffset,
      i = e.pageYOffset;
    return { scrollLeft: t, scrollTop: i };
  }
  function Pa(r) {
    return on(Ji(r)).left + Aa(r).scrollLeft;
  }
  function qp(r, e) {
    var t = Ut(r),
      i = Ji(r),
      n = t.visualViewport,
      s = i.clientWidth,
      o = i.clientHeight,
      a = 0,
      l = 0;
    if (n) {
      (s = n.width), (o = n.height);
      var u = dc();
      (u || (!u && e === "fixed")) && ((a = n.offsetLeft), (l = n.offsetTop));
    }
    return { width: s, height: o, x: a + Pa(r), y: l };
  }
  function Vp(r) {
    var e,
      t = Ji(r),
      i = Aa(r),
      n = (e = r.ownerDocument) == null ? void 0 : e.body,
      s = Cr(
        t.scrollWidth,
        t.clientWidth,
        n ? n.scrollWidth : 0,
        n ? n.clientWidth : 0
      ),
      o = Cr(
        t.scrollHeight,
        t.clientHeight,
        n ? n.scrollHeight : 0,
        n ? n.clientHeight : 0
      ),
      a = -i.scrollLeft + Pa(r),
      l = -i.scrollTop;
    return (
      Bi(n || t).direction === "rtl" &&
        (a += Cr(t.clientWidth, n ? n.clientWidth : 0) - s),
      { width: s, height: o, x: a, y: l }
    );
  }
  function La(r) {
    var e = Bi(r),
      t = e.overflow,
      i = e.overflowX,
      n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + n + i);
  }
  function yc(r) {
    return ["html", "body", "#document"].indexOf(Ti(r)) >= 0
      ? r.ownerDocument.body
      : ui(r) && La(r)
      ? r
      : yc(Ws(r));
  }
  function Kn(r, e) {
    var t;
    e === void 0 && (e = []);
    var i = yc(r),
      n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
      s = Ut(i),
      o = n ? [s].concat(s.visualViewport || [], La(i) ? i : []) : i,
      a = e.concat(o);
    return n ? a : a.concat(Kn(Ws(o)));
  }
  function Oa(r) {
    return Object.assign({}, r, {
      left: r.x,
      top: r.y,
      right: r.x + r.width,
      bottom: r.y + r.height,
    });
  }
  function $p(r, e) {
    var t = on(r, !1, e === "fixed");
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
  function wc(r, e, t) {
    return e === ac ? Oa(qp(r, t)) : Tr(e) ? $p(e, t) : Oa(Vp(Ji(r)));
  }
  function Hp(r) {
    var e = Kn(Ws(r)),
      t = ["absolute", "fixed"].indexOf(Bi(r).position) >= 0,
      i = t && ui(r) ? jn(r) : r;
    return Tr(i)
      ? e.filter(function (n) {
          return Tr(n) && fc(n, i) && Ti(n) !== "body";
        })
      : [];
  }
  function Wp(r, e, t, i) {
    var n = e === "clippingParents" ? Hp(r) : [].concat(e),
      s = [].concat(n, [t]),
      o = s[0],
      a = s.reduce(function (l, u) {
        var c = wc(r, u, i);
        return (
          (l.top = Cr(c.top, l.top)),
          (l.right = Hs(c.right, l.right)),
          (l.bottom = Hs(c.bottom, l.bottom)),
          (l.left = Cr(c.left, l.left)),
          l
        );
      }, wc(r, o, i));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function bc(r) {
    var e = r.reference,
      t = r.element,
      i = r.placement,
      n = i ? Ci(i) : null,
      s = i ? an(i) : null,
      o = e.x + e.width / 2 - t.width / 2,
      a = e.y + e.height / 2 - t.height / 2,
      l;
    switch (n) {
      case It:
        l = { x: o, y: e.y - t.height };
        break;
      case ai:
        l = { x: o, y: e.y + e.height };
        break;
      case li:
        l = { x: e.x + e.width, y: a };
        break;
      case Rt:
        l = { x: e.x - t.width, y: a };
        break;
      default:
        l = { x: e.x, y: e.y };
    }
    var u = n ? Ea(n) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (s) {
        case nn:
          l[u] = l[u] - (e[c] / 2 - t[c] / 2);
          break;
        case Xn:
          l[u] = l[u] + (e[c] / 2 - t[c] / 2);
          break;
      }
    }
    return l;
  }
  function Zn(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = i === void 0 ? r.placement : i,
      s = t.strategy,
      o = s === void 0 ? r.strategy : s,
      a = t.boundary,
      l = a === void 0 ? dp : a,
      u = t.rootBoundary,
      c = u === void 0 ? ac : u,
      d = t.elementContext,
      m = d === void 0 ? Yn : d,
      f = t.altBoundary,
      h = f === void 0 ? !1 : f,
      p = t.padding,
      v = p === void 0 ? 0 : p,
      _ = mc(typeof v != "number" ? v : gc(v, Gn)),
      w = m === Yn ? fp : Yn,
      E = r.rects.popper,
      g = r.elements[h ? w : m],
      S = Wp(Tr(g) ? g : g.contextElement || Ji(r.elements.popper), l, c, o),
      x = on(r.elements.reference),
      P = bc({ reference: x, element: E, strategy: "absolute", placement: n }),
      O = Oa(Object.assign({}, E, P)),
      k = m === Yn ? O : x,
      M = {
        top: S.top - k.top + _.top,
        bottom: k.bottom - S.bottom + _.bottom,
        left: S.left - k.left + _.left,
        right: k.right - S.right + _.right,
      },
      R = r.modifiersData.offset;
    if (m === Yn && R) {
      var A = R[n];
      Object.keys(M).forEach(function (z) {
        var b = [li, ai].indexOf(z) >= 0 ? 1 : -1,
          y = [It, ai].indexOf(z) >= 0 ? "y" : "x";
        M[z] += A[y] * b;
      });
    }
    return M;
  }
  function Gp(r, e) {
    e === void 0 && (e = {});
    var t = e,
      i = t.placement,
      n = t.boundary,
      s = t.rootBoundary,
      o = t.padding,
      a = t.flipVariations,
      l = t.allowedAutoPlacements,
      u = l === void 0 ? uc : l,
      c = an(i),
      d = c
        ? a
          ? lc
          : lc.filter(function (h) {
              return an(h) === c;
            })
        : Gn,
      m = d.filter(function (h) {
        return u.indexOf(h) >= 0;
      });
    m.length === 0 && (m = d);
    var f = m.reduce(function (h, p) {
      return (
        (h[p] = Zn(r, {
          placement: p,
          boundary: n,
          rootBoundary: s,
          padding: o,
        })[Ci(p)]),
        h
      );
    }, {});
    return Object.keys(f).sort(function (h, p) {
      return f[h] - f[p];
    });
  }
  function Xp(r) {
    if (Ci(r) === Sa) return [];
    var e = Xs(r);
    return [_c(r), e, _c(e)];
  }
  function Yp(r) {
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
          _ = Ci(v),
          w = _ === v,
          E = l || (w || !h ? [Xs(v)] : Xp(v)),
          g = [v].concat(E).reduce(function (X, ie) {
            return X.concat(
              Ci(ie) === Sa
                ? Gp(e, {
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
          x = e.rects.popper,
          P = new Map(),
          O = !0,
          k = g[0],
          M = 0;
        M < g.length;
        M++
      ) {
        var R = g[M],
          A = Ci(R),
          z = an(R) === nn,
          b = [It, ai].indexOf(A) >= 0,
          y = b ? "width" : "height",
          T = Zn(e, {
            placement: R,
            boundary: c,
            rootBoundary: d,
            altBoundary: m,
            padding: u,
          }),
          L = b ? (z ? li : Rt) : z ? ai : It;
        S[y] > x[y] && (L = Xs(L));
        var D = Xs(L),
          I = [];
        if (
          (s && I.push(T[A] <= 0),
          a && I.push(T[L] <= 0, T[D] <= 0),
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
          var C = h ? 3 : 1,
            F = function (ie) {
              var ue = g.find(function (de) {
                var be = P.get(de);
                if (be)
                  return be.slice(0, ie).every(function (Ee) {
                    return Ee;
                  });
              });
              if (ue) return (k = ue), "break";
            },
            V = C;
          V > 0;
          V--
        ) {
          var Q = F(V);
          if (Q === "break") break;
        }
      e.placement !== k &&
        ((e.modifiersData[i]._skip = !0), (e.placement = k), (e.reset = !0));
    }
  }
  const jp = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Yp,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Sc(r, e, t) {
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
  function xc(r) {
    return [It, li, ai, Rt].some(function (e) {
      return r[e] >= 0;
    });
  }
  function Up(r) {
    var e = r.state,
      t = r.name,
      i = e.rects.reference,
      n = e.rects.popper,
      s = e.modifiersData.preventOverflow,
      o = Zn(e, { elementContext: "reference" }),
      a = Zn(e, { altBoundary: !0 }),
      l = Sc(o, i),
      u = Sc(a, n, s),
      c = xc(l),
      d = xc(u);
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
  const Kp = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Up,
  };
  function Zp(r, e, t) {
    var i = Ci(r),
      n = [Rt, It].indexOf(i) >= 0 ? -1 : 1,
      s =
        typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t,
      o = s[0],
      a = s[1];
    return (
      (o = o || 0),
      (a = (a || 0) * n),
      [Rt, li].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
    );
  }
  function Qp(r) {
    var e = r.state,
      t = r.options,
      i = r.name,
      n = t.offset,
      s = n === void 0 ? [0, 0] : n,
      o = uc.reduce(function (c, d) {
        return (c[d] = Zp(d, e.rects, s)), c;
      }, {}),
      a = o[e.placement],
      l = a.x,
      u = a.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += l),
      (e.modifiersData.popperOffsets.y += u)),
      (e.modifiersData[i] = o);
  }
  const Jp = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Qp,
  };
  function eh(r) {
    var e = r.state,
      t = r.name;
    e.modifiersData[t] = bc({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const th = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: eh,
    data: {},
  };
  function ih(r) {
    return r === "x" ? "y" : "x";
  }
  function rh(r) {
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
      v = Zn(e, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
      _ = Ci(e.placement),
      w = an(e.placement),
      E = !w,
      g = Ea(_),
      S = ih(g),
      x = e.modifiersData.popperOffsets,
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
    if (x) {
      if (s) {
        var z,
          b = g === "y" ? It : Rt,
          y = g === "y" ? ai : li,
          T = g === "y" ? "height" : "width",
          L = x[g],
          D = L + v[b],
          I = L - v[y],
          C = f ? -O[T] / 2 : 0,
          F = w === nn ? P[T] : O[T],
          V = w === nn ? -O[T] : -P[T],
          Q = e.elements.arrow,
          X = f && Q ? Ca(Q) : { width: 0, height: 0 },
          ie = e.modifiersData["arrow#persistent"]
            ? e.modifiersData["arrow#persistent"].padding
            : hc(),
          ue = ie[b],
          de = ie[y],
          be = Un(0, P[T], X[T]),
          Ee = E
            ? P[T] / 2 - C - be - ue - M.mainAxis
            : F - be - ue - M.mainAxis,
          rt = E
            ? -P[T] / 2 + C + be + de + M.mainAxis
            : V + be + de + M.mainAxis,
          Oe = e.elements.arrow && jn(e.elements.arrow),
          $e = Oe ? (g === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0) : 0,
          se = (z = R?.[g]) != null ? z : 0,
          ye = L + Ee - se - $e,
          He = L + rt - se,
          We = Un(f ? Hs(D, ye) : D, L, f ? Cr(I, He) : I);
        (x[g] = We), (A[g] = We - L);
      }
      if (a) {
        var N,
          Ke = g === "x" ? It : Rt,
          zt = g === "x" ? ai : li,
          Ze = x[S],
          fe = S === "y" ? "height" : "width",
          At = Ze + v[Ke],
          pt = Ze - v[zt],
          Zt = [It, Rt].indexOf(_) !== -1,
          Ae = (N = R?.[S]) != null ? N : 0,
          Qt = Zt ? At : Ze - P[fe] - O[fe] - Ae + M.altAxis,
          we = Zt ? Ze + P[fe] + O[fe] - Ae - M.altAxis : pt,
          ht = f && Zt ? Ap(Qt, Ze, we) : Un(f ? Qt : At, Ze, f ? we : pt);
        (x[S] = ht), (A[S] = ht - Ze);
      }
      e.modifiersData[i] = A;
    }
  }
  const nh = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: rh,
    requiresIfExists: ["offset"],
  };
  function sh(r) {
    return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
  }
  function oh(r) {
    return r === Ut(r) || !ui(r) ? Aa(r) : sh(r);
  }
  function ah(r) {
    var e = r.getBoundingClientRect(),
      t = sn(e.width) / r.offsetWidth || 1,
      i = sn(e.height) / r.offsetHeight || 1;
    return t !== 1 || i !== 1;
  }
  function lh(r, e, t) {
    t === void 0 && (t = !1);
    var i = ui(e),
      n = ui(e) && ah(e),
      s = Ji(e),
      o = on(r, n, t),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (i || (!i && !t)) &&
        ((Ti(e) !== "body" || La(s)) && (a = oh(e)),
        ui(e)
          ? ((l = on(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
          : s && (l.x = Pa(s))),
      {
        x: o.left + a.scrollLeft - l.x,
        y: o.top + a.scrollTop - l.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function uh(r) {
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
  function ch(r) {
    var e = uh(r);
    return Sp.reduce(function (t, i) {
      return t.concat(
        e.filter(function (n) {
          return n.phase === i;
        })
      );
    }, []);
  }
  function dh(r) {
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
  function fh(r) {
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
  var Tc = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Cc() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    return !e.some(function (i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function ph(r) {
    r === void 0 && (r = {});
    var e = r,
      t = e.defaultModifiers,
      i = t === void 0 ? [] : t,
      n = e.defaultOptions,
      s = n === void 0 ? Tc : n;
    return function (a, l, u) {
      u === void 0 && (u = s);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Tc, s),
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
            var w = typeof _ == "function" ? _(c.options) : _;
            p(),
              (c.options = Object.assign({}, s, c.options, w)),
              (c.scrollParents = {
                reference: Tr(a)
                  ? Kn(a)
                  : a.contextElement
                  ? Kn(a.contextElement)
                  : [],
                popper: Kn(l),
              });
            var E = ch(fh([].concat(i, c.options.modifiers)));
            return (
              (c.orderedModifiers = E.filter(function (g) {
                return g.enabled;
              })),
              h(),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!m) {
              var _ = c.elements,
                w = _.reference,
                E = _.popper;
              if (Cc(w, E)) {
                (c.rects = {
                  reference: lh(w, jn(E), c.options.strategy === "fixed"),
                  popper: Ca(E),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (M) {
                    return (c.modifiersData[M.name] = Object.assign(
                      {},
                      M.data
                    ));
                  });
                for (var g = 0; g < c.orderedModifiers.length; g++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (g = -1);
                    continue;
                  }
                  var S = c.orderedModifiers[g],
                    x = S.fn,
                    P = S.options,
                    O = P === void 0 ? {} : P,
                    k = S.name;
                  typeof x == "function" &&
                    (c =
                      x({ state: c, options: O, name: k, instance: f }) || c);
                }
              }
            }
          },
          update: dh(function () {
            return new Promise(function (v) {
              f.forceUpdate(), v(c);
            });
          }),
          destroy: function () {
            p(), (m = !0);
          },
        };
      if (!Cc(a, l)) return f;
      f.setOptions(u).then(function (v) {
        !m && u.onFirstUpdate && u.onFirstUpdate(v);
      });
      function h() {
        c.orderedModifiers.forEach(function (v) {
          var _ = v.name,
            w = v.options,
            E = w === void 0 ? {} : w,
            g = v.effect;
          if (typeof g == "function") {
            var S = g({ state: c, name: _, instance: f, options: E }),
              x = function () {};
            d.push(S || x);
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
  var hh = [Np, th, Rp, cc, Jp, jp, nh, Mp, Kp],
    mh = ph({ defaultModifiers: hh }),
    gh = "tippy-box",
    Ec = "tippy-content",
    vh = "tippy-backdrop",
    Ac = "tippy-arrow",
    Pc = "tippy-svg-arrow",
    Er = { passive: !0, capture: !0 },
    Lc = function () {
      return document.body;
    };
  function Ma(r, e, t) {
    if (Array.isArray(r)) {
      var i = r[e];
      return i ?? (Array.isArray(t) ? t[e] : t);
    }
    return r;
  }
  function Da(r, e) {
    var t = {}.toString.call(r);
    return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
  }
  function Oc(r, e) {
    return typeof r == "function" ? r.apply(void 0, e) : r;
  }
  function Mc(r, e) {
    if (e === 0) return r;
    var t;
    return function (i) {
      clearTimeout(t),
        (t = setTimeout(function () {
          r(i);
        }, e));
    };
  }
  function _h(r) {
    return r.split(/\s+/).filter(Boolean);
  }
  function ln(r) {
    return [].concat(r);
  }
  function Dc(r, e) {
    r.indexOf(e) === -1 && r.push(e);
  }
  function yh(r) {
    return r.filter(function (e, t) {
      return r.indexOf(e) === t;
    });
  }
  function wh(r) {
    return r.split("-")[0];
  }
  function Ys(r) {
    return [].slice.call(r);
  }
  function kc(r) {
    return Object.keys(r).reduce(function (e, t) {
      return r[t] !== void 0 && (e[t] = r[t]), e;
    }, {});
  }
  function Qn() {
    return document.createElement("div");
  }
  function js(r) {
    return ["Element", "Fragment"].some(function (e) {
      return Da(r, e);
    });
  }
  function bh(r) {
    return Da(r, "NodeList");
  }
  function Sh(r) {
    return Da(r, "MouseEvent");
  }
  function xh(r) {
    return !!(r && r._tippy && r._tippy.reference === r);
  }
  function Th(r) {
    return js(r)
      ? [r]
      : bh(r)
      ? Ys(r)
      : Array.isArray(r)
      ? r
      : Ys(document.querySelectorAll(r));
  }
  function ka(r, e) {
    r.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function Ic(r, e) {
    r.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function Ch(r) {
    var e,
      t = ln(r),
      i = t[0];
    return i != null && (e = i.ownerDocument) != null && e.body
      ? i.ownerDocument
      : document;
  }
  function Eh(r, e) {
    var t = e.clientX,
      i = e.clientY;
    return r.every(function (n) {
      var s = n.popperRect,
        o = n.popperState,
        a = n.props,
        l = a.interactiveBorder,
        u = wh(o.placement),
        c = o.modifiersData.offset;
      if (!c) return !0;
      var d = u === "bottom" ? c.top.y : 0,
        m = u === "top" ? c.bottom.y : 0,
        f = u === "right" ? c.left.x : 0,
        h = u === "left" ? c.right.x : 0,
        p = s.top - i + d > l,
        v = i - s.bottom - m > l,
        _ = s.left - t + f > l,
        w = t - s.right - h > l;
      return p || v || _ || w;
    });
  }
  function Ia(r, e, t) {
    var i = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (n) {
      r[i](n, t);
    });
  }
  function Rc(r, e) {
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
    zc = 0;
  function Ah() {
    Ei.isTouch ||
      ((Ei.isTouch = !0),
      window.performance && document.addEventListener("mousemove", Nc));
  }
  function Nc() {
    var r = performance.now();
    r - zc < 20 &&
      ((Ei.isTouch = !1), document.removeEventListener("mousemove", Nc)),
      (zc = r);
  }
  function Ph() {
    var r = document.activeElement;
    if (xh(r)) {
      var e = r._tippy;
      r.blur && !e.state.isVisible && r.blur();
    }
  }
  function Lh() {
    document.addEventListener("touchstart", Ah, Er),
      window.addEventListener("blur", Ph);
  }
  var Oh = typeof window < "u" && typeof document < "u",
    Mh = Oh ? !!window.msCrypto : !1,
    Dh = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    kh = {
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
        appendTo: Lc,
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
      Dh,
      kh
    ),
    Ih = Object.keys(fi),
    Rh = function (e) {
      var t = Object.keys(e);
      t.forEach(function (i) {
        fi[i] = e[i];
      });
    };
  function Bc(r) {
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
  function zh(r, e) {
    var t = e ? Object.keys(Bc(Object.assign({}, fi, { plugins: e }))) : Ih,
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
  function Fc(r, e) {
    var t = Object.assign(
      {},
      e,
      { content: Oc(e.content, [r]) },
      e.ignoreAttributes ? {} : zh(r, e.plugins)
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
  var Nh = function () {
    return "innerHTML";
  };
  function Ra(r, e) {
    r[Nh()] = e;
  }
  function qc(r) {
    var e = Qn();
    return (
      r === !0
        ? (e.className = Ac)
        : ((e.className = Pc), js(r) ? e.appendChild(r) : Ra(e, r)),
      e
    );
  }
  function Vc(r, e) {
    js(e.content)
      ? (Ra(r, ""), r.appendChild(e.content))
      : typeof e.content != "function" &&
        (e.allowHTML ? Ra(r, e.content) : (r.textContent = e.content));
  }
  function za(r) {
    var e = r.firstElementChild,
      t = Ys(e.children);
    return {
      box: e,
      content: t.find(function (i) {
        return i.classList.contains(Ec);
      }),
      arrow: t.find(function (i) {
        return i.classList.contains(Ac) || i.classList.contains(Pc);
      }),
      backdrop: t.find(function (i) {
        return i.classList.contains(vh);
      }),
    };
  }
  function $c(r) {
    var e = Qn(),
      t = Qn();
    (t.className = gh),
      t.setAttribute("data-state", "hidden"),
      t.setAttribute("tabindex", "-1");
    var i = Qn();
    (i.className = Ec),
      i.setAttribute("data-state", "hidden"),
      Vc(i, r.props),
      e.appendChild(t),
      t.appendChild(i),
      n(r.props, r.props);
    function n(s, o) {
      var a = za(e),
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
          Vc(u, r.props),
        o.arrow
          ? c
            ? s.arrow !== o.arrow &&
              (l.removeChild(c), l.appendChild(qc(o.arrow)))
            : l.appendChild(qc(o.arrow))
          : c && l.removeChild(c);
    }
    return { popper: e, onUpdate: n };
  }
  $c.$$tippy = !0;
  var Bh = 1,
    Us = [],
    Na = [];
  function Fh(r, e) {
    var t = Fc(r, Object.assign({}, fi, Bc(kc(e)))),
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
      h = Mc(ye, t.interactiveDebounce),
      p,
      v = Bh++,
      _ = null,
      w = yh(t.plugins),
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
        popper: Qn(),
        popperInstance: _,
        props: t,
        state: E,
        plugins: w,
        clearDelayTimeouts: Qt,
        setProps: we,
        setContent: ht,
        show: Nt,
        hide: pi,
        hideWithInteractivity: Lr,
        enable: Zt,
        disable: Ae,
        unmount: Me,
        destroy: dn,
      };
    if (!t.render) return g;
    var S = t.render(g),
      x = S.popper,
      P = S.onUpdate;
    x.setAttribute("data-tippy-root", ""),
      (x.id = "tippy-" + g.id),
      (g.popper = x),
      (r._tippy = g),
      (x._tippy = g);
    var O = w.map(function (B) {
        return B.fn(g);
      }),
      k = r.hasAttribute("aria-expanded");
    return (
      Oe(),
      C(),
      L(),
      D("onCreate", [g]),
      t.showOnCreate && At(),
      x.addEventListener("mouseenter", function () {
        g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
      }),
      x.addEventListener("mouseleave", function () {
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
    function z() {
      return p || r;
    }
    function b() {
      var B = z().parentNode;
      return B ? Ch(B) : document;
    }
    function y() {
      return za(x);
    }
    function T(B) {
      return (g.state.isMounted && !g.state.isVisible) ||
        Ei.isTouch ||
        (c && c.type === "focus")
        ? 0
        : Ma(g.props.delay, B ? 0 : 1, fi.delay);
    }
    function L(B) {
      B === void 0 && (B = !1),
        (x.style.pointerEvents = g.props.interactive && !B ? "" : "none"),
        (x.style.zIndex = "" + g.props.zIndex);
    }
    function D(B, H, j) {
      if (
        (j === void 0 && (j = !0),
        O.forEach(function (re) {
          re[B] && re[B].apply(re, H);
        }),
        j)
      ) {
        var le;
        (le = g.props)[B].apply(le, H);
      }
    }
    function I() {
      var B = g.props.aria;
      if (B.content) {
        var H = "aria-" + B.content,
          j = x.id,
          le = ln(g.props.triggerTarget || r);
        le.forEach(function (re) {
          var U = re.getAttribute(H);
          if (g.state.isVisible) re.setAttribute(H, U ? U + " " + j : j);
          else {
            var Fe = U && U.replace(j, "").trim();
            Fe ? re.setAttribute(H, Fe) : re.removeAttribute(H);
          }
        });
      }
    }
    function C() {
      if (!(k || !g.props.aria.expanded)) {
        var B = ln(g.props.triggerTarget || r);
        B.forEach(function (H) {
          g.props.interactive
            ? H.setAttribute(
                "aria-expanded",
                g.state.isVisible && H === z() ? "true" : "false"
              )
            : H.removeAttribute("aria-expanded");
        });
      }
    }
    function F() {
      b().removeEventListener("mousemove", h),
        (Us = Us.filter(function (B) {
          return B !== h;
        }));
    }
    function V(B) {
      if (!(Ei.isTouch && (l || B.type === "mousedown"))) {
        var H = (B.composedPath && B.composedPath()[0]) || B.target;
        if (!(g.props.interactive && Rc(x, H))) {
          if (
            ln(g.props.triggerTarget || r).some(function (j) {
              return Rc(j, H);
            })
          ) {
            if (
              Ei.isTouch ||
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
      B.addEventListener("mousedown", V, !0),
        B.addEventListener("touchend", V, Er),
        B.addEventListener("touchstart", X, Er),
        B.addEventListener("touchmove", Q, Er);
    }
    function ue() {
      var B = b();
      B.removeEventListener("mousedown", V, !0),
        B.removeEventListener("touchend", V, Er),
        B.removeEventListener("touchstart", X, Er),
        B.removeEventListener("touchmove", Q, Er);
    }
    function de(B, H) {
      Ee(B, function () {
        !g.state.isVisible && x.parentNode && x.parentNode.contains(x) && H();
      });
    }
    function be(B, H) {
      Ee(B, H);
    }
    function Ee(B, H) {
      var j = y().box;
      function le(re) {
        re.target === j && (Ia(j, "remove", le), H());
      }
      if (B === 0) return H();
      Ia(j, "remove", d), Ia(j, "add", le), (d = le);
    }
    function rt(B, H, j) {
      j === void 0 && (j = !1);
      var le = ln(g.props.triggerTarget || r);
      le.forEach(function (re) {
        re.addEventListener(B, H, j),
          f.push({ node: re, eventType: B, handler: H, options: j });
      });
    }
    function Oe() {
      R() &&
        (rt("touchstart", se, { passive: !0 }),
        rt("touchend", He, { passive: !0 })),
        _h(g.props.trigger).forEach(function (B) {
          if (B !== "manual")
            switch ((rt(B, se), B)) {
              case "mouseenter":
                rt("mouseleave", He);
                break;
              case "focus":
                rt(Mh ? "focusout" : "blur", We);
                break;
              case "focusin":
                rt("focusout", We);
                break;
            }
        });
    }
    function $e() {
      f.forEach(function (B) {
        var H = B.node,
          j = B.eventType,
          le = B.handler,
          re = B.options;
        H.removeEventListener(j, le, re);
      }),
        (f = []);
    }
    function se(B) {
      var H,
        j = !1;
      if (!(!g.state.isEnabled || N(B) || a)) {
        var le = ((H = c) == null ? void 0 : H.type) === "focus";
        (c = B),
          (p = B.currentTarget),
          C(),
          !g.state.isVisible &&
            Sh(B) &&
            Us.forEach(function (re) {
              return re(B);
            }),
          B.type === "click" &&
          (g.props.trigger.indexOf("mouseenter") < 0 || o) &&
          g.props.hideOnClick !== !1 &&
          g.state.isVisible
            ? (j = !0)
            : At(B),
          B.type === "click" && (o = !j),
          j && !le && pt(B);
      }
    }
    function ye(B) {
      var H = B.target,
        j = z().contains(H) || x.contains(H);
      if (!(B.type === "mousemove" && j)) {
        var le = fe()
          .concat(x)
          .map(function (re) {
            var U,
              Fe = re._tippy,
              Qe = (U = Fe.popperInstance) == null ? void 0 : U.state;
            return Qe
              ? {
                  popperRect: re.getBoundingClientRect(),
                  popperState: Qe,
                  props: t,
                }
              : null;
          })
          .filter(Boolean);
        Eh(le, B) && (F(), pt(B));
      }
    }
    function He(B) {
      var H = N(B) || (g.props.trigger.indexOf("click") >= 0 && o);
      if (!H) {
        if (g.props.interactive) {
          g.hideWithInteractivity(B);
          return;
        }
        pt(B);
      }
    }
    function We(B) {
      (g.props.trigger.indexOf("focusin") < 0 && B.target !== z()) ||
        (g.props.interactive &&
          B.relatedTarget &&
          x.contains(B.relatedTarget)) ||
        pt(B);
    }
    function N(B) {
      return Ei.isTouch ? R() !== B.type.indexOf("touch") >= 0 : !1;
    }
    function Ke() {
      zt();
      var B = g.props,
        H = B.popperOptions,
        j = B.placement,
        le = B.offset,
        re = B.getReferenceClientRect,
        U = B.moveTransition,
        Fe = A() ? za(x).arrow : null,
        Qe = re
          ? {
              getBoundingClientRect: re,
              contextElement: re.contextElement || z(),
            }
          : r,
        Bt = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (mi) {
            var mt = mi.state;
            if (A()) {
              var Or = y(),
                J = Or.box;
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
          Bt,
        ];
      A() &&
        Fe &&
        Ge.push({ name: "arrow", options: { element: Fe, padding: 3 } }),
        Ge.push.apply(Ge, H?.modifiers || []),
        (g.popperInstance = mh(
          Qe,
          x,
          Object.assign({}, H, {
            placement: j,
            onFirstUpdate: m,
            modifiers: Ge,
          })
        ));
    }
    function zt() {
      g.popperInstance &&
        (g.popperInstance.destroy(), (g.popperInstance = null));
    }
    function Ze() {
      var B = g.props.appendTo,
        H,
        j = z();
      (g.props.interactive && B === Lc) || B === "parent"
        ? (H = j.parentNode)
        : (H = Oc(B, [j])),
        H.contains(x) || H.appendChild(x),
        (g.state.isMounted = !0),
        Ke();
    }
    function fe() {
      return Ys(x.querySelectorAll("[data-tippy-root]"));
    }
    function At(B) {
      g.clearDelayTimeouts(), B && D("onTrigger", [g, B]), ie();
      var H = T(!0),
        j = M(),
        le = j[0],
        re = j[1];
      Ei.isTouch && le === "hold" && re && (H = re),
        H
          ? (i = setTimeout(function () {
              g.show();
            }, H))
          : g.show();
    }
    function pt(B) {
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
        var H = T(!1);
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
    function we(B) {
      if (!g.state.isDestroyed) {
        D("onBeforeUpdate", [g, B]), $e();
        var H = g.props,
          j = Fc(r, Object.assign({}, H, kc(B), { ignoreAttributes: !0 }));
        (g.props = j),
          Oe(),
          H.interactiveDebounce !== j.interactiveDebounce &&
            (F(), (h = Mc(ye, j.interactiveDebounce))),
          H.triggerTarget && !j.triggerTarget
            ? ln(H.triggerTarget).forEach(function (le) {
                le.removeAttribute("aria-expanded");
              })
            : j.triggerTarget && r.removeAttribute("aria-expanded"),
          C(),
          L(),
          P && P(H, j),
          g.popperInstance &&
            (Ke(),
            fe().forEach(function (le) {
              requestAnimationFrame(le._tippy.popperInstance.forceUpdate);
            })),
          D("onAfterUpdate", [g, B]);
      }
    }
    function ht(B) {
      g.setProps({ content: B });
    }
    function Nt() {
      var B = g.state.isVisible,
        H = g.state.isDestroyed,
        j = !g.state.isEnabled,
        le = Ei.isTouch && !g.props.touch,
        re = Ma(g.props.duration, 0, fi.duration);
      if (
        !(B || H || j || le) &&
        !z().hasAttribute("disabled") &&
        (D("onShow", [g], !1), g.props.onShow(g) !== !1)
      ) {
        if (
          ((g.state.isVisible = !0),
          A() && (x.style.visibility = "visible"),
          L(),
          ie(),
          g.state.isMounted || (x.style.transition = "none"),
          A())
        ) {
          var U = y(),
            Fe = U.box,
            Qe = U.content;
          ka([Fe, Qe], 0);
        }
        (m = function () {
          var Ge;
          if (!(!g.state.isVisible || u)) {
            if (
              ((u = !0),
              (x.style.transition = g.props.moveTransition),
              A() && g.props.animation)
            ) {
              var hi = y(),
                mi = hi.box,
                mt = hi.content;
              ka([mi, mt], re), Ic([mi, mt], "visible");
            }
            I(),
              C(),
              Dc(Na, g),
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
      var B = !g.state.isVisible,
        H = g.state.isDestroyed,
        j = !g.state.isEnabled,
        le = Ma(g.props.duration, 1, fi.duration);
      if (!(B || H || j) && (D("onHide", [g], !1), g.props.onHide(g) !== !1)) {
        if (
          ((g.state.isVisible = !1),
          (g.state.isShown = !1),
          (u = !1),
          (o = !1),
          A() && (x.style.visibility = "hidden"),
          F(),
          ue(),
          L(!0),
          A())
        ) {
          var re = y(),
            U = re.box,
            Fe = re.content;
          g.props.animation && (ka([U, Fe], le), Ic([U, Fe], "hidden"));
        }
        I(), C(), g.props.animation ? A() && de(le, g.unmount) : g.unmount();
      }
    }
    function Lr(B) {
      b().addEventListener("mousemove", h), Dc(Us, h), h(B);
    }
    function Me() {
      g.state.isVisible && g.hide(),
        g.state.isMounted &&
          (zt(),
          fe().forEach(function (B) {
            B._tippy.unmount();
          }),
          x.parentNode && x.parentNode.removeChild(x),
          (Na = Na.filter(function (B) {
            return B !== g;
          })),
          (g.state.isMounted = !1),
          D("onHidden", [g]));
    }
    function dn() {
      g.state.isDestroyed ||
        (g.clearDelayTimeouts(),
        g.unmount(),
        $e(),
        delete r._tippy,
        (g.state.isDestroyed = !0),
        D("onDestroy", [g]));
    }
  }
  function Jn(r, e) {
    e === void 0 && (e = {});
    var t = fi.plugins.concat(e.plugins || []);
    Lh();
    var i = Object.assign({}, e, { plugins: t }),
      n = Th(r),
      s = n.reduce(function (o, a) {
        var l = a && Fh(a, i);
        return l && o.push(l), o;
      }, []);
    return js(r) ? s[0] : s;
  }
  (Jn.defaultProps = fi),
    (Jn.setDefaultProps = Rh),
    (Jn.currentInput = Ei),
    Object.assign({}, cc, {
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
    Jn.setDefaultProps({ render: $c });
  const qh = () => {
      const r = document.querySelectorAll("[data-tooltip]"),
        e = window.innerWidth < 768;
      r.forEach((t) => {
        Jn(t, {
          content: t.getAttribute("data-tooltip"),
          placement: e ? "top" : "right",
          animation: "shift-away",
          arrow: !1,
          theme: "hm-tooltip",
          interactive: !0,
        });
      });
    },
    Vh = () => {
      qh();
    };
  W.registerPlugin(Z);
  let Ba = [],
    Hc;
  const Wc = () => {
      Ba.forEach((t) => t.kill()), (Ba = []);
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
          c = W.timeline({
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
          Ba.push(c.scrollTrigger);
      });
    },
    $h = () => {
      Wc(),
        window.addEventListener("resize", () => {
          clearTimeout(Hc),
            (Hc = setTimeout(() => {
              Wc(), Z.refresh();
            }, 150));
        });
    };
  function Gc(r) {
    return (
      r !== null &&
      typeof r == "object" &&
      "constructor" in r &&
      r.constructor === Object
    );
  }
  function Fa(r, e) {
    r === void 0 && (r = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof r[i] > "u"
          ? (r[i] = e[i])
          : Gc(e[i]) &&
            Gc(r[i]) &&
            Object.keys(e[i]).length > 0 &&
            Fa(r[i], e[i]);
      });
  }
  const Xc = {
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
    return Fa(r, Xc), r;
  }
  const Hh = {
    document: Xc,
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
    return Fa(r, Hh), r;
  }
  function er(r) {
    return (
      r === void 0 && (r = ""),
      r
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function Wh(r) {
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
  function Ks(r, e) {
    return e === void 0 && (e = 0), setTimeout(r, e);
  }
  function Zs() {
    return Date.now();
  }
  function Gh(r) {
    const e = ft();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(r, null)),
      !t && r.currentStyle && (t = r.currentStyle),
      t || (t = r.style),
      t
    );
  }
  function Xh(r, e) {
    e === void 0 && (e = "x");
    const t = ft();
    let i, n, s;
    const o = Gh(r);
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
  function Qs(r) {
    return (
      typeof r == "object" &&
      r !== null &&
      r.constructor &&
      Object.prototype.toString.call(r).slice(8, -1) === "Object"
    );
  }
  function Yh(r) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? r instanceof HTMLElement
      : r && (r.nodeType === 1 || r.nodeType === 11);
  }
  function Kt() {
    const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Yh(i)) {
        const n = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = n.length; s < o; s += 1) {
          const a = n[s],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (Qs(r[a]) && Qs(i[a])
              ? i[a].__swiper__
                ? (r[a] = i[a])
                : Kt(r[a], i[a])
              : !Qs(r[a]) && Qs(i[a])
              ? ((r[a] = {}), i[a].__swiper__ ? (r[a] = i[a]) : Kt(r[a], i[a]))
              : (r[a] = i[a]));
        }
      }
    }
    return r;
  }
  function Js(r, e, t) {
    r.style.setProperty(e, t);
  }
  function Yc(r) {
    let { swiper: e, targetPosition: t, side: i } = r;
    const n = ft(),
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
  function jh(r, e) {
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
  function Uh(r, e) {
    const t = ft();
    let i = e.contains(r);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(r)), i || (i = jh(r, e))),
      i
    );
  }
  function eo(r) {
    try {
      return;
    } catch {}
  }
  function es(r, e) {
    e === void 0 && (e = []);
    const t = document.createElement(r);
    return t.classList.add(...(Array.isArray(e) ? e : er(e))), t;
  }
  function Kh(r) {
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
  function Zh(r, e) {
    const t = [];
    for (; r.previousElementSibling; ) {
      const i = r.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function Qh(r, e) {
    const t = [];
    for (; r.nextElementSibling; ) {
      const i = r.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (r = i);
    }
    return t;
  }
  function tr(r, e) {
    return ft().getComputedStyle(r, null).getPropertyValue(e);
  }
  function jc(r) {
    let e = r,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Jh(r, e) {
    const t = [];
    let i = r.parentElement;
    for (; i; ) t.push(i), (i = i.parentElement);
    return t;
  }
  function Uc(r, e, t) {
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
  function Pi(r) {
    return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
  }
  let qa;
  function em() {
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
  function Kc() {
    return qa || (qa = em()), qa;
  }
  let Va;
  function tm(r) {
    let { userAgent: e } = r === void 0 ? {} : r;
    const t = Kc(),
      i = ft(),
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
  function Zc(r) {
    return r === void 0 && (r = {}), Va || (Va = tm(r)), Va;
  }
  let $a;
  function im() {
    const r = ft(),
      e = Zc();
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
  function Qc() {
    return $a || ($a = im()), $a;
  }
  function rm(r) {
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
              const { width: m, height: f } = e;
              let h = m,
                p = f;
              d.forEach((v) => {
                let { contentBoxSize: _, contentRect: w, target: E } = v;
                (E && E !== e.el) ||
                  ((h = w ? w.width : (_[0] || _).inlineSize),
                  (p = w ? w.height : (_[0] || _).blockSize));
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
      n.addEventListener("resize", a),
        n.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          n.removeEventListener("resize", a),
          n.removeEventListener("orientationchange", c);
      });
  }
  function nm(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = [],
      o = ft(),
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
          childList:
            e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          s.push(f);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Jh(e.hostEl);
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
  var sm = {
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
  function om() {
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
  function am() {
    const r = this;
    function e(M, R) {
      return parseFloat(M.getPropertyValue(r.getDirectionLabel(R)) || 0);
    }
    const t = r.params,
      { wrapperEl: i, slidesEl: n, size: s, rtlTranslate: o, wrongRTL: a } = r,
      l = r.virtual && t.virtual.enabled,
      u = l ? r.virtual.slides.length : r.slides.length,
      c = Ai(n, `.${r.params.slideClass}, swiper-slide`),
      d = l ? r.virtual.slides.length : c.length;
    let m = [];
    const f = [],
      h = [];
    let p = t.slidesOffsetBefore;
    typeof p == "function" && (p = t.slidesOffsetBefore.call(r));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(r));
    const _ = r.snapGrid.length,
      w = r.slidesGrid.length;
    let E = t.spaceBetween,
      g = -p,
      S = 0,
      x = 0;
    if (typeof s > "u") return;
    typeof E == "string" && E.indexOf("%") >= 0
      ? (E = (parseFloat(E.replace("%", "")) / 100) * s)
      : typeof E == "string" && (E = parseFloat(E)),
      (r.virtualSize = -E),
      c.forEach((M) => {
        o ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
          (M.style.marginBottom = ""),
          (M.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Js(i, "--swiper-centered-offset-before", ""),
        Js(i, "--swiper-centered-offset-after", ""));
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
        !(c[M] && tr(R, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          k && (c[M].style[r.getDirectionLabel("width")] = "");
          const A = getComputedStyle(R),
            z = R.style.transform,
            b = R.style.webkitTransform;
          if (
            (z && (R.style.transform = "none"),
            b && (R.style.webkitTransform = "none"),
            t.roundLengths)
          )
            O = r.isHorizontal() ? Uc(R, "width") : Uc(R, "height");
          else {
            const y = e(A, "width"),
              T = e(A, "padding-left"),
              L = e(A, "padding-right"),
              D = e(A, "margin-left"),
              I = e(A, "margin-right"),
              C = A.getPropertyValue("box-sizing");
            if (C && C === "border-box") O = y + D + I;
            else {
              const { clientWidth: F, offsetWidth: V } = R;
              O = y + T + L + D + I + (V - F);
            }
          }
          z && (R.style.transform = z),
            b && (R.style.webkitTransform = b),
            t.roundLengths && (O = Math.floor(O));
        } else
          (O = (s - (t.slidesPerView - 1) * E) / t.slidesPerView),
            t.roundLengths && (O = Math.floor(O)),
            c[M] && (c[M].style[r.getDirectionLabel("width")] = `${O}px`);
        c[M] && (c[M].swiperSlideSize = O),
          h.push(O),
          t.centeredSlides
            ? ((g = g + O / 2 + S / 2 + E),
              S === 0 && M !== 0 && (g = g - s / 2 - E),
              M === 0 && (g = g - s / 2 - E),
              Math.abs(g) < 1 / 1e3 && (g = 0),
              t.roundLengths && (g = Math.floor(g)),
              x % t.slidesPerGroup === 0 && m.push(g),
              f.push(g))
            : (t.roundLengths && (g = Math.floor(g)),
              (x - Math.min(r.params.slidesPerGroupSkip, x)) %
                r.params.slidesPerGroup ===
                0 && m.push(g),
              f.push(g),
              (g = g + O + E)),
          (r.virtualSize += O + E),
          (S = O),
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
      const M = h[0] + E;
      if (t.slidesPerGroup > 1) {
        const R = Math.ceil(
            (r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup
          ),
          A = M * t.slidesPerGroup;
        for (let z = 0; z < R; z += 1) m.push(m[m.length - 1] + A);
      }
      for (
        let R = 0;
        R < r.virtual.slidesBefore + r.virtual.slidesAfter;
        R += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + M),
          f.push(f[f.length - 1] + M),
          (r.virtualSize += M);
    }
    if ((m.length === 0 && (m = [0]), E !== 0)) {
      const M =
        r.isHorizontal() && o
          ? "marginLeft"
          : r.getDirectionLabel("marginRight");
      c.filter((R, A) =>
        !t.cssMode || t.loop ? !0 : A !== c.length - 1
      ).forEach((R) => {
        R.style[M] = `${E}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let M = 0;
      h.forEach((A) => {
        M += A + (E || 0);
      }),
        (M -= E);
      const R = M > s ? M - s : 0;
      m = m.map((A) => (A <= 0 ? -p : A > R ? R + v : A));
    }
    if (t.centerInsufficientSlides) {
      let M = 0;
      h.forEach((A) => {
        M += A + (E || 0);
      }),
        (M -= E);
      const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (M + R < s) {
        const A = (s - M - R) / 2;
        m.forEach((z, b) => {
          m[b] = z - A;
        }),
          f.forEach((z, b) => {
            f[b] = z + A;
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
      Js(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Js(
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
      f.length !== w && r.emit("slidesGridLengthChange"),
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
  function lm(r) {
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
  function um() {
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
  const Jc = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function cm(r) {
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
        Jc(u, v, t.slideVisibleClass),
        Jc(u, p, t.slideFullyVisibleClass),
        (u.progress = n ? -d : d),
        (u.originalProgress = n ? -m : m);
    }
  }
  function dm(r) {
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
  const Ha = (r, e, t) => {
    e && !r.classList.contains(t)
      ? r.classList.add(t)
      : !e && r.classList.contains(t) && r.classList.remove(t);
  };
  function fm() {
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
        ((c = Qh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = Zh(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((d) => {
        Ha(d, d === l, t.slideActiveClass),
          Ha(d, d === c, t.slideNextClass),
          Ha(d, d === u, t.slidePrevClass);
      }),
      r.emitSlidesClasses();
  }
  const to = (r, e) => {
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
    Wa = (r, e) => {
      if (!r.slides[e]) return;
      const t = r.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Ga = (r) => {
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
            a.includes(l.column) && Wa(r, u);
          });
        return;
      }
      const s = n + i - 1;
      if (r.params.rewind || r.params.loop)
        for (let o = n - e; o <= s + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < n || a > s) && Wa(r, a);
        }
      else
        for (let o = Math.max(n - e, 0); o <= Math.min(s + e, t - 1); o += 1)
          o !== n && (o > s || o < n) && Wa(r, o);
    };
  function pm(r) {
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
  function hm(r) {
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
    if ((typeof l > "u" && (l = pm(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
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
      e.initialized && Ga(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function mm(r, e) {
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
  var gm = {
    updateSize: om,
    updateSlides: am,
    updateAutoHeight: lm,
    updateSlidesOffset: um,
    updateSlidesProgress: cm,
    updateProgress: dm,
    updateSlidesClasses: fm,
    updateActiveIndex: hm,
    updateClickedSlide: mm,
  };
  function vm(r) {
    r === void 0 && (r = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -n : n;
    if (t.cssMode) return n;
    let o = Xh(s, r);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function _m(r, e) {
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
  function ym() {
    return -this.snapGrid[0];
  }
  function wm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function bm(r, e, t, i, n) {
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
            Yc({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
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
  var Sm = {
    getTranslate: vm,
    setTranslate: _m,
    minTranslate: ym,
    maxTranslate: wm,
    translateTo: bm,
  };
  function xm(r, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${r}ms`),
      (t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
      t.emit("setTransition", r, e);
  }
  function ed(r) {
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
  function Tm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      ed({ swiper: t, runCallbacks: r, direction: e, step: "Start" }));
  }
  function Cm(r, e) {
    r === void 0 && (r = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        ed({ swiper: t, runCallbacks: r, direction: e, step: "End" }));
  }
  var Em = { setTransition: xm, transitionStart: Tm, transitionEnd: Cm };
  function Am(r, e, t, i, n) {
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
    o !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(_);
    let w;
    o > d ? (w = "next") : o < d ? (w = "prev") : (w = "reset");
    const E = s.virtual && s.params.virtual.enabled;
    if (!(E && n) && ((m && -_ === s.translate) || (!m && _ === s.translate)))
      return (
        s.updateActiveIndex(o),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== "slide" && s.setTranslate(_),
        w !== "reset" && (s.transitionStart(t, w), s.transitionEnd(t, w)),
        !1
      );
    if (a.cssMode) {
      const P = s.isHorizontal(),
        O = m ? _ : -_;
      if (e === 0)
        E &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          E && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                f[P ? "scrollLeft" : "scrollTop"] = O;
              }))
            : (f[P ? "scrollLeft" : "scrollTop"] = O),
          E &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Yc({ swiper: s, targetPosition: O, side: P ? "left" : "top" }), !0
          );
        f.scrollTo({ [P ? "left" : "top"]: O, behavior: "smooth" });
      }
      return !0;
    }
    const x = Qc().isSafari;
    return (
      E && !n && x && s.isElement && s.virtual.update(!1, !1, o),
      s.setTransition(e),
      s.setTranslate(_),
      s.updateActiveIndex(o),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, w),
      e === 0
        ? s.transitionEnd(t, w)
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
                  s.transitionEnd(t, w)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Pm(r, e, t, i) {
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
  function Lm(r, e, t) {
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
  function Om(r, e, t) {
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
    function m(w) {
      return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
    }
    const f = m(d),
      h = s.map((w) => m(w)),
      p = n.freeMode && n.freeMode.enabled;
    let v = s[h.indexOf(f) - 1];
    if (typeof v > "u" && (n.cssMode || p)) {
      let w;
      s.forEach((E, g) => {
        f >= E && (w = g);
      }),
        typeof w < "u" && (v = p ? s[w] : s[w > 0 ? w - 1 : w]);
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
      const w =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(w, r, e, t);
    } else if (n.loop && i.activeIndex === 0 && n.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(_, r, e, t);
        }),
        !0
      );
    return i.slideTo(_, r, e, t);
  }
  function Mm(r, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof r > "u" && (r = i.params.speed),
        i.slideTo(i.activeIndex, r, e, t)
      );
  }
  function Dm(r, e, t, i) {
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
  function km() {
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
              Ks(() => {
                r.slideTo(n);
              }))
            : r.slideTo(n)
          : n > r.slides.length - i
          ? (r.loopFix(),
            (n = r.getSlideIndex(
              Ai(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Ks(() => {
              r.slideTo(n);
            }))
          : r.slideTo(n);
    } else r.slideTo(n);
  }
  var Im = {
    slideTo: Am,
    slideToLoop: Pm,
    slideNext: Lm,
    slidePrev: Om,
    slideReset: Mm,
    slideToClosest: Dm,
    slideToClickedSlide: km,
  };
  function Rm(r, e) {
    const t = this,
      { params: i, slidesEl: n } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        Ai(n, `.${i.slideClass}, swiper-slide`).forEach((m, f) => {
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
            ? es("swiper-slide", [i.slideBlankClass])
            : es("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(f);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const d = a - (t.slides.length % a);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        eo(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (u) {
      if (i.loopAddBlankSlides) {
        const d = i.grid.rows - (t.slides.length % i.grid.rows);
        c(d), t.recalcSlides(), t.updateSlides();
      } else
        eo(
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
  function zm(r) {
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
    const w = h.slidesPerGroupAuto ? _ : h.slidesPerGroup;
    let E = w;
    E % w !== 0 && (E += w - (E % w)),
      (E += h.loopAdditionalSlides),
      (u.loopedSlides = E);
    const g = u.grid && h.grid && h.grid.rows > 1;
    c.length < _ + E || (u.params.effect === "cards" && c.length < _ + E * 2)
      ? eo(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : g &&
        h.grid.fill === "row" &&
        eo(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const S = [],
      x = [],
      P = g ? Math.ceil(c.length / h.grid.rows) : c.length,
      O = o && P - v < _ && !p;
    let k = O ? v : u.activeIndex;
    typeof s > "u"
      ? (s = u.getSlideIndex(
          c.find((T) => T.classList.contains(h.slideActiveClass))
        ))
      : (k = s);
    const M = i === "next" || !i,
      R = i === "prev" || !i;
    let A = 0,
      z = 0;
    const y = (g ? c[s].column : s) + (p && typeof n > "u" ? -_ / 2 + 0.5 : 0);
    if (y < E) {
      A = Math.max(E - y, w);
      for (let T = 0; T < E - y; T += 1) {
        const L = T - Math.floor(T / P) * P;
        if (g) {
          const D = P - L - 1;
          for (let I = c.length - 1; I >= 0; I -= 1)
            c[I].column === D && S.push(I);
        } else S.push(P - L - 1);
      }
    } else if (y + _ > P - E) {
      (z = Math.max(y - (P - E * 2), w)), O && (z = Math.max(z, _ - P + v + 1));
      for (let T = 0; T < z; T += 1) {
        const L = T - Math.floor(T / P) * P;
        g
          ? c.forEach((D, I) => {
              D.column === L && x.push(I);
            })
          : x.push(L);
      }
    }
    if (
      ((u.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        u.__preventObserver__ = !1;
      }),
      u.params.effect === "cards" &&
        c.length < _ + E * 2 &&
        (x.includes(s) && x.splice(x.indexOf(s), 1),
        S.includes(s) && S.splice(S.indexOf(s), 1)),
      R &&
        S.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.prepend(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      M &&
        x.forEach((T) => {
          (c[T].swiperLoopMoveDOM = !0),
            f.append(c[T]),
            (c[T].swiperLoopMoveDOM = !1);
        }),
      u.recalcSlides(),
      h.slidesPerView === "auto"
        ? u.updateSlides()
        : g &&
          ((S.length > 0 && R) || (x.length > 0 && M)) &&
          u.slides.forEach((T, L) => {
            u.grid.updateSlide(L, T, u.slides);
          }),
      h.watchSlidesProgress && u.updateSlidesOffset(),
      t)
    ) {
      if (S.length > 0 && R) {
        if (typeof e > "u") {
          const T = u.slidesGrid[k],
            D = u.slidesGrid[k + A] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k + Math.ceil(A), 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else if (n) {
          const T = g ? S.length / h.grid.rows : S.length;
          u.slideTo(u.activeIndex + T, 0, !1, !0),
            (u.touchEventsData.currentTranslate = u.translate);
        }
      } else if (x.length > 0 && M)
        if (typeof e > "u") {
          const T = u.slidesGrid[k],
            D = u.slidesGrid[k - z] - T;
          l
            ? u.setTranslate(u.translate - D)
            : (u.slideTo(k - z, 0, !1, !0),
              n &&
                ((u.touchEventsData.startTranslate =
                  u.touchEventsData.startTranslate - D),
                (u.touchEventsData.currentTranslate =
                  u.touchEventsData.currentTranslate - D)));
        } else {
          const T = g ? x.length / h.grid.rows : x.length;
          u.slideTo(u.activeIndex - T, 0, !1, !0);
        }
    }
    if (
      ((u.allowSlidePrev = d),
      (u.allowSlideNext = m),
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
        ? u.controller.control.forEach((L) => {
            !L.destroyed &&
              L.params.loop &&
              L.loopFix({
                ...T,
                slideTo: L.params.slidesPerView === h.slidesPerView ? t : !1,
              });
          })
        : u.controller.control instanceof u.constructor &&
          u.controller.control.params.loop &&
          u.controller.control.loopFix({
            ...T,
            slideTo:
              u.controller.control.params.slidesPerView === h.slidesPerView
                ? t
                : !1,
          });
    }
    u.emit("loopFix");
  }
  function Nm() {
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
  var Bm = { loopCreate: Rm, loopFix: zm, loopDestroy: Nm };
  function Fm(r) {
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
  function qm() {
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
  var Vm = { setGrabCursor: Fm, unsetGrabCursor: qm };
  function $m(r, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === ci() || i === ft()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const n = i.closest(r);
      return !n && !i.getRootNode ? null : n || t(i.getRootNode().host);
    }
    return t(e);
  }
  function td(r, e, t) {
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
  function Hm(r) {
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
      td(e, i, i.targetTouches[0].pageX);
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
      (s.touchEventsTarget === "wrapper" && !Uh(l, e.wrapperEl)) ||
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
      m = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (m ? $m(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const f = o.currentX,
      h = o.currentY;
    if (!td(e, i, f)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = f),
      (o.startY = h),
      (n.touchStartTime = Zs()),
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
  function Wm(r) {
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
          (i.touchStartTime = Zs()));
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
      let x;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : m * m + f * f >= 25 &&
          ((x = (Math.atan2(Math.abs(f), Math.abs(m)) * 180) / Math.PI),
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
    let h = t.isHorizontal() ? m : f,
      p = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    n.oneWayMovement &&
      ((h = Math.abs(h) * (o ? 1 : -1)), (p = Math.abs(p) * (o ? 1 : -1))),
      (s.diff = h),
      (h *= n.touchRatio),
      o && ((h = -h), (p = -p));
    const v = t.touchesDirection;
    (t.swipeDirection = h > 0 ? "prev" : "next"),
      (t.touchesDirection = p > 0 ? "prev" : "next");
    const _ = t.params.loop && !n.cssMode,
      w =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (_ && w && t.loopFix({ direction: t.swipeDirection }),
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
        _ &&
        w &&
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
            w &&
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
                (-t.minTranslate() + i.startTranslate + h) ** S)))
        : h < 0 &&
          (_ &&
            w &&
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
      n.freeMode &&
        n.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function Gm(r) {
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
    const d = Zs(),
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
      ((t.lastClickTime = Zs()),
      Ks(() => {
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
      const x = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[S + x] < "u"
        ? (h || (f >= u[S] && f < u[S + x])) && ((p = S), (v = u[S + x] - u[S]))
        : (h || f >= u[S]) &&
          ((p = S), (v = u[u.length - 1] - u[u.length - 2]));
    }
    let _ = null,
      w = null;
    o.rewind &&
      (e.isBeginning
        ? (w =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (_ = 0));
    const E = (f - u[p]) / v,
      g = p < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (m > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (E >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? _ : p + g)
          : e.slideTo(p)),
        e.swipeDirection === "prev" &&
          (E > 1 - o.longSwipesRatio
            ? e.slideTo(p + g)
            : w !== null && E < 0 && Math.abs(E) > o.longSwipesRatio
            ? e.slideTo(w)
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
          e.swipeDirection === "prev" && e.slideTo(w !== null ? w : p));
    }
  }
  function id() {
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
  function Xm(r) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && r.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (r.stopPropagation(), r.stopImmediatePropagation())));
  }
  function Ym() {
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
  function jm(r) {
    const e = this;
    to(e, r.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Um() {
    const r = this;
    r.documentTouchHandlerProceeded ||
      ((r.documentTouchHandlerProceeded = !0),
      r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
  }
  const rd = (r, e) => {
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
            id,
            !0
          )
        : r[u]("observerUpdate", id, !0),
      n[l]("load", r.onLoad, { capture: !0 }));
  };
  function Km() {
    const r = this,
      { params: e } = r;
    (r.onTouchStart = Hm.bind(r)),
      (r.onTouchMove = Wm.bind(r)),
      (r.onTouchEnd = Gm.bind(r)),
      (r.onDocumentTouchStart = Um.bind(r)),
      e.cssMode && (r.onScroll = Ym.bind(r)),
      (r.onClick = Xm.bind(r)),
      (r.onLoad = jm.bind(r)),
      rd(r, "on");
  }
  function Zm() {
    rd(this, "off");
  }
  var Qm = { attachEvents: Km, detachEvents: Zm };
  const nd = (r, e) => r.grid && e.grid && e.grid.rows > 1;
  function Jm() {
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
      m = nd(r, i),
      f = nd(r, d),
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
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof d[x] > "u") return;
        const P = i[x] && i[x].enabled,
          O = d[x] && d[x].enabled;
        P && !O && r[x].disable(), !P && O && r[x].enable();
      });
    const _ = d.direction && d.direction !== i.direction,
      w = i.loop && (d.slidesPerView !== i.slidesPerView || _),
      E = i.loop;
    _ && t && r.changeDirection(), Kt(r.params, d);
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
        (w
          ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides())
          : !E && S
          ? (r.loopCreate(e), r.updateSlides())
          : E && !S && r.loopDestroy()),
      r.emit("breakpoint", d);
  }
  function eg(r, e, t) {
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
  var tg = { setBreakpoint: Jm, getBreakpoint: eg };
  function ig(r, e) {
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
  function rg() {
    const r = this,
      { classNames: e, params: t, rtl: i, el: n, device: s } = r,
      o = ig(
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
  function ng() {
    const r = this,
      { el: e, classNames: t } = r;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), r.emitContainerClasses());
  }
  var sg = { addClasses: rg, removeClasses: ng };
  function og() {
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
  var ag = { checkOverflow: og },
    sd = {
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
  function lg(r, e) {
    return function (i) {
      i === void 0 && (i = {});
      const n = Object.keys(i)[0],
        s = i[n];
      if (typeof s != "object" || s === null) {
        Kt(e, i);
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
        Kt(e, i);
        return;
      }
      typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0),
        r[n] || (r[n] = { enabled: !1 }),
        Kt(e, i);
    };
  }
  const Xa = {
      eventsEmitter: sm,
      update: gm,
      translate: Sm,
      transition: Em,
      slide: Im,
      loop: Bm,
      grabCursor: Vm,
      events: Qm,
      breakpoints: tg,
      checkOverflow: ag,
      classes: sg,
    },
    Ya = {};
  class Et {
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
        (t = Kt({}, t)),
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
            const m = Kt({}, t, { el: d });
            c.push(new Et(m));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = Kc()),
        (a.device = Zc({ userAgent: t.userAgent })),
        (a.browser = Qc()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: lg(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const u = Kt({}, sd, l);
      return (
        (a.params = Kt({}, u, Ya, t)),
        (a.originalParams = Kt({}, a.params)),
        (a.passedParams = Kt({}, t)),
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
        s = jc(n[0]);
      return jc(e) - s;
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
          m;
        for (let f = u + 1; f < s.length; f += 1)
          s[f] &&
            !m &&
            ((d += Math.ceil(s[f].swiperSlideSize)),
            (c += 1),
            d > l && (m = !0));
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
          o.complete && to(e, o);
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
          ((o = es("div", t.params.wrapperClass)),
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
            ? to(t, s)
            : s.addEventListener("load", (o) => {
                to(t, o.target);
              });
        }),
        Ga(t),
        (t.initialized = !0),
        Ga(t),
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
            (i.el && typeof i.el != "string" && (i.el.swiper = null), Wh(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Kt(Ya, e);
    }
    static get extendedDefaults() {
      return Ya;
    }
    static get defaults() {
      return sd;
    }
    static installModule(e) {
      Et.prototype.__modules__ || (Et.prototype.__modules__ = []);
      const t = Et.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Et.installModule(t)), Et)
        : (Et.installModule(e), Et);
    }
  }
  Object.keys(Xa).forEach((r) => {
    Object.keys(Xa[r]).forEach((e) => {
      Et.prototype[e] = Xa[r][e];
    });
  }),
    Et.use([rm, nm]);
  function od(r, e, t, i) {
    return (
      r.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!t[n] && t.auto === !0) {
            let s = Ai(r.el, `.${i[n]}`)[0];
            s || ((s = es("div", i[n])), (s.className = i[n]), r.el.append(s)),
              (t[n] = s),
              (e[n] = s);
          }
        }),
      t
    );
  }
  function ug(r) {
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
      (h = Pi(h)),
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
      o(p, e.isBeginning && !e.params.rewind),
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
        ((e.params.navigation = od(
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
        (p = Pi(p)),
        (v = Pi(v));
      const _ = (w, E) => {
        w && w.addEventListener("click", E === "next" ? u : l),
          !e.enabled && w && w.classList.add(...h.lockClass.split(" "));
      };
      p.forEach((w) => _(w, "next")), v.forEach((w) => _(w, "prev"));
    }
    function d() {
      let { nextEl: h, prevEl: p } = e.navigation;
      (h = Pi(h)), (p = Pi(p));
      const v = (_, w) => {
        _.removeEventListener("click", w === "next" ? u : l),
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
        if (((h = Pi(h)), (p = Pi(p)), e.enabled)) {
          a();
          return;
        }
        [...h, ...p]
          .filter((v) => !!v)
          .forEach((v) => v.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (h, p) => {
        let { nextEl: v, prevEl: _ } = e.navigation;
        (v = Pi(v)), (_ = Pi(_));
        const w = p.target;
        let E = _.includes(w) || v.includes(w);
        if (e.isElement && !E) {
          const g = p.path || (p.composedPath && p.composedPath());
          g && (E = g.find((S) => v.includes(S) || _.includes(S)));
        }
        if (e.params.navigation.hideOnClick && !E) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === w || e.pagination.el.contains(w))
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
  function cg(r) {
    return (
      r === void 0 && (r = ""),
      `.${r
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ad(r) {
    let { swiper: e, extendParams: t, on: i, emit: n } = r;
    const s = ci();
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
      const { scrollbar: A, rtlTranslate: z } = e,
        { dragEl: b, el: y } = A,
        T = e.params.scrollbar,
        L = e.params.loop ? e.progressLoop : e.progress;
      let D = c,
        I = (d - c) * L;
      z
        ? ((I = -I), I > 0 ? ((D = c - I), (I = 0)) : -I + c > d && (D = d + I))
        : I < 0
        ? ((D = c + I), (I = 0))
        : I + c > d && (D = d - I),
        e.isHorizontal()
          ? ((b.style.transform = `translate3d(${I}px, 0, 0)`),
            (b.style.width = `${D}px`))
          : ((b.style.transform = `translate3d(0px, ${I}px, 0)`),
            (b.style.height = `${D}px`)),
        T.hide &&
          (clearTimeout(a),
          (y.style.opacity = 1),
          (a = setTimeout(() => {
            (y.style.opacity = 0), (y.style.transitionDuration = "400ms");
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
        { dragEl: z, el: b } = A;
      (z.style.width = ""),
        (z.style.height = ""),
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
          ? (z.style.width = `${c}px`)
          : (z.style.height = `${c}px`),
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
      const { scrollbar: z, rtlTranslate: b } = e,
        { el: y } = z;
      let T;
      (T =
        (v(A) -
          Kh(y)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (d - c)),
        (T = Math.max(Math.min(T, 1), 0)),
        b && (T = 1 - T);
      const L = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * T;
      e.updateProgress(L),
        e.setTranslate(L),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function w(A) {
      const z = e.params.scrollbar,
        { scrollbar: b, wrapperEl: y } = e,
        { el: T, dragEl: L } = b;
      (o = !0),
        (u =
          A.target === L
            ? v(A) -
              A.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        A.preventDefault(),
        A.stopPropagation(),
        (y.style.transitionDuration = "100ms"),
        (L.style.transitionDuration = "100ms"),
        _(A),
        clearTimeout(l),
        (T.style.transitionDuration = "0ms"),
        z.hide && (T.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        n("scrollbarDragStart", A);
    }
    function E(A) {
      const { scrollbar: z, wrapperEl: b } = e,
        { el: y, dragEl: T } = z;
      o &&
        (A.preventDefault && A.cancelable
          ? A.preventDefault()
          : (A.returnValue = !1),
        _(A),
        (b.style.transitionDuration = "0ms"),
        (y.style.transitionDuration = "0ms"),
        (T.style.transitionDuration = "0ms"),
        n("scrollbarDragMove", A));
    }
    function g(A) {
      const z = e.params.scrollbar,
        { scrollbar: b, wrapperEl: y } = e,
        { el: T } = b;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (y.style.transitionDuration = "")),
        z.hide &&
          (clearTimeout(l),
          (l = Ks(() => {
            (T.style.opacity = 0), (T.style.transitionDuration = "400ms");
          }, 1e3))),
        n("scrollbarDragEnd", A),
        z.snapOnRelease && e.slideToClosest());
    }
    function S(A) {
      const { scrollbar: z, params: b } = e,
        y = z.el;
      if (!y) return;
      const T = y,
        L = b.passiveListeners ? { passive: !1, capture: !1 } : !1,
        D = b.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!T) return;
      const I = A === "on" ? "addEventListener" : "removeEventListener";
      T[I]("pointerdown", w, L),
        s[I]("pointermove", E, L),
        s[I]("pointerup", g, D);
    }
    function x() {
      !e.params.scrollbar.el || !e.scrollbar.el || S("on");
    }
    function P() {
      !e.params.scrollbar.el || !e.scrollbar.el || S("off");
    }
    function O() {
      const { scrollbar: A, el: z } = e;
      e.params.scrollbar = od(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const b = e.params.scrollbar;
      if (!b.el) return;
      let y;
      if (
        (typeof b.el == "string" &&
          e.isElement &&
          (y = e.el.querySelector(b.el)),
        !y && typeof b.el == "string")
      ) {
        if (((y = s.querySelectorAll(b.el)), !y.length)) return;
      } else y || (y = b.el);
      e.params.uniqueNavElements &&
        typeof b.el == "string" &&
        y.length > 1 &&
        z.querySelectorAll(b.el).length === 1 &&
        (y = z.querySelector(b.el)),
        y.length > 0 && (y = y[0]),
        y.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
      let T;
      y &&
        ((T = y.querySelector(cg(e.params.scrollbar.dragClass))),
        T || ((T = es("div", e.params.scrollbar.dragClass)), y.append(T))),
        Object.assign(A, { el: y, dragEl: T }),
        b.draggable && x(),
        y &&
          y.classList[e.enabled ? "remove" : "add"](
            ...er(e.params.scrollbar.lockClass)
          );
    }
    function k() {
      const A = e.params.scrollbar,
        z = e.scrollbar.el;
      z &&
        z.classList.remove(
          ...er(e.isHorizontal() ? A.horizontalClass : A.verticalClass)
        ),
        P();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const A = e.params.scrollbar;
      let { el: z } = e.scrollbar;
      (z = Pi(z)),
        z.forEach((b) => {
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
      i("setTransition", (A, z) => {
        h(z);
      }),
      i("enable disable", () => {
        const { el: A } = e.scrollbar;
        A &&
          A.classList[e.enabled ? "remove" : "add"](
            ...er(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        k();
      });
    const M = () => {
        e.el.classList.remove(...er(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...er(e.params.scrollbar.scrollbarDisabledClass)
            ),
          O(),
          p(),
          f();
      },
      R = () => {
        e.el.classList.add(...er(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...er(e.params.scrollbar.scrollbarDisabledClass)
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
  function ld(r) {
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
      w;
    function E(D) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (D.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", E),
          !(w || (D.detail && D.detail.bySwiperTouchMove)) && M()));
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
            ? (D = e.slides.find((C) =>
                C.classList.contains("swiper-slide-active")
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
        const C = S();
        !Number.isNaN(C) &&
          C > 0 &&
          typeof D > "u" &&
          ((I = C), (l = C), (u = C)),
          (c = I);
        const F = e.params.speed,
          V = () => {
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
                  x();
                })));
          };
        return (
          I > 0
            ? (clearTimeout(o),
              (o = setTimeout(() => {
                V();
              }, I)))
            : requestAnimationFrame(() => {
                V();
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
      O = () => {
        (e.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          n("autoplayStop");
      },
      k = (D, I) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(o), D || (_ = !0);
        const C = () => {
          n("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", E)
              : M();
        };
        if (((e.autoplay.paused = !0), I)) {
          v && (c = e.params.autoplay.delay), (v = !1), C();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - d)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), C());
      },
      M = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((d = new Date().getTime()),
          _ ? ((_ = !1), x(c)) : x(),
          (e.autoplay.paused = !1),
          n("autoplayResume"));
      },
      R = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const D = ci();
        D.visibilityState === "hidden" && ((_ = !0), k(!0)),
          D.visibilityState === "visible" && M();
      },
      A = (D) => {
        D.pointerType === "mouse" &&
          ((_ = !0), (w = !0), !(e.animating || e.autoplay.paused) && k(!0));
      },
      z = (D) => {
        D.pointerType === "mouse" && ((w = !1), e.autoplay.paused && M());
      },
      b = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", A),
          e.el.addEventListener("pointerleave", z));
      },
      y = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", A),
          e.el.removeEventListener("pointerleave", z));
      },
      T = () => {
        ci().addEventListener("visibilitychange", R);
      },
      L = () => {
        ci().removeEventListener("visibilitychange", R);
      };
    i("init", () => {
      e.params.autoplay.enabled && (b(), T(), P());
    }),
      i("destroy", () => {
        y(), L(), e.autoplay.running && O();
      }),
      i("_freeModeStaticRelease", () => {
        (h || _) && M();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? O() : k(!0, !0);
      }),
      i("beforeTransitionStart", (D, I, C) => {
        e.destroyed ||
          !e.autoplay.running ||
          (C || !e.params.autoplay.disableOnInteraction ? k(!0, !0) : O());
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
  Et.use([ad, ld]);
  const dg = () => {
      new Et(".result_swiper", {
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
    ud = () => {
      dg();
    };
  W.registerPlugin(Z);
  const fg = () => {
      const r = document.querySelector("[results-wrap]"),
        e = document.querySelectorAll("[result-card]"),
        t = window.innerWidth < 768,
        i = W.timeline({
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
    cd = () => {
      fg();
    };
  function pg(r) {
    return r &&
      r.__esModule &&
      Object.prototype.hasOwnProperty.call(r, "default")
      ? r.default
      : r;
  }
  var dd = { exports: {} };
  (function (r) {
    (function (e) {
      r.exports ? (r.exports = e()) : (window.intlTelInput = e());
    })(() => {
      var e = (() => {
        var t = Object.defineProperty,
          i = Object.getOwnPropertyDescriptor,
          n = Object.getOwnPropertyNames,
          s = Object.prototype.hasOwnProperty,
          o = (b, y) => {
            for (var T in y) t(b, T, { get: y[T], enumerable: !0 });
          },
          a = (b, y, T, L) => {
            if ((y && typeof y == "object") || typeof y == "function")
              for (let D of n(y))
                !s.call(b, D) &&
                  D !== T &&
                  t(b, D, {
                    get: () => y[D],
                    enumerable: !(L = i(y, D)) || L.enumerable,
                  });
            return b;
          },
          l = (b) => a(t({}, "__esModule", { value: !0 }), b),
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
        for (let b = 0; b < c.length; b++) {
          const y = c[b];
          d[b] = {
            name: "",
            iso2: y[0],
            dialCode: y[1],
            priority: y[2] || 0,
            areaCodes: y[3] || null,
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
          w = [
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
          E = (b) => b.replace(/\D/g, ""),
          g = (b = "") =>
            b
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase(),
          S = (b) => {
            const y = E(b);
            if (y.charAt(0) === "1") {
              const T = y.substr(1, 3);
              return w.indexOf(T) !== -1;
            }
            return !1;
          },
          x = (b, y, T, L) => {
            if (T === 0 && !L) return 0;
            let D = 0;
            for (let I = 0; I < y.length; I++) {
              if ((/[+0-9]/.test(y[I]) && D++, D === b && !L)) return I + 1;
              if (L && D === b + 1) return I;
            }
            return y.length;
          },
          P = (b, y, T) => {
            const L = document.createElement(b);
            return (
              y && Object.entries(y).forEach(([D, I]) => L.setAttribute(D, I)),
              T && T.appendChild(L),
              L
            );
          },
          O = (b) => {
            const { instances: y } = A;
            Object.values(y).forEach((T) => T[b]());
          },
          k = class {
            constructor(b, y = {}) {
              q(this, "id");
              q(this, "promise");
              q(this, "telInput");
              q(this, "highlightedItem");
              q(this, "options");
              q(this, "hadInitialPlaceholder");
              q(this, "isRTL");
              q(this, "selectedCountryData");
              q(this, "countries");
              q(this, "dialCodeMaxLen");
              q(this, "dialCodeToIso2Map");
              q(this, "dialCodes");
              q(this, "countryContainer");
              q(this, "selectedCountry");
              q(this, "selectedCountryInner");
              q(this, "selectedCountryA11yText");
              q(this, "selectedDialCode");
              q(this, "dropdownArrow");
              q(this, "dropdownContent");
              q(this, "searchInput");
              q(this, "searchResultsA11yText");
              q(this, "countryList");
              q(this, "dropdown");
              q(this, "hiddenInput");
              q(this, "hiddenInputCountry");
              q(this, "maxCoreNumberLength");
              q(this, "defaultCountry");
              q(this, "_handleHiddenInputSubmit");
              q(this, "_handleLabelClick");
              q(this, "_handleClickSelectedCountry");
              q(this, "_handleCountryContainerKeydown");
              q(this, "_handleInputEvent");
              q(this, "_handleKeydownEvent");
              q(this, "_handleWindowScroll");
              q(this, "_handleMouseoverCountryList");
              q(this, "_handleClickCountryList");
              q(this, "_handleClickOffToClose");
              q(this, "_handleKeydownOnDropdown");
              q(this, "_handleSearchChange");
              q(this, "resolveAutoCountryPromise");
              q(this, "rejectAutoCountryPromise");
              q(this, "resolveUtilsScriptPromise");
              q(this, "rejectUtilsScriptPromise");
              (this.id = v++),
                (this.telInput = b),
                (this.highlightedItem = null),
                (this.options = Object.assign({}, _, y)),
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
              const b = new Promise((T, L) => {
                  (this.resolveAutoCountryPromise = T),
                    (this.rejectAutoCountryPromise = L);
                }),
                y = new Promise((T, L) => {
                  (this.resolveUtilsScriptPromise = T),
                    (this.rejectUtilsScriptPromise = L);
                });
              (this.promise = Promise.all([b, y])),
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
              this.countries.sort((b, y) => {
                const { countryOrder: T } = this.options;
                if (T) {
                  const L = T.indexOf(b.iso2),
                    D = T.indexOf(y.iso2),
                    I = L > -1,
                    C = D > -1;
                  if (I || C) return I && C ? L - D : I ? -1 : 1;
                }
                return b.name < y.name ? -1 : b.name > y.name ? 1 : 0;
              });
            }
            _addToDialCodeMap(b, y, T) {
              y.length > this.dialCodeMaxLen &&
                (this.dialCodeMaxLen = y.length),
                this.dialCodeToIso2Map.hasOwnProperty(y) ||
                  (this.dialCodeToIso2Map[y] = []);
              for (let D = 0; D < this.dialCodeToIso2Map[y].length; D++)
                if (this.dialCodeToIso2Map[y][D] === b) return;
              const L = T !== void 0 ? T : this.dialCodeToIso2Map[y].length;
              this.dialCodeToIso2Map[y][L] = b;
            }
            _processAllCountries() {
              const { onlyCountries: b, excludeCountries: y } = this.options;
              if (b.length) {
                const T = b.map((L) => L.toLowerCase());
                this.countries = m.filter((L) => T.indexOf(L.iso2) > -1);
              } else if (y.length) {
                const T = y.map((L) => L.toLowerCase());
                this.countries = m.filter((L) => T.indexOf(L.iso2) === -1);
              } else this.countries = m;
            }
            _translateCountryNames() {
              for (let b = 0; b < this.countries.length; b++) {
                const y = this.countries[b].iso2.toLowerCase();
                this.options.i18n.hasOwnProperty(y) &&
                  (this.countries[b].name = this.options.i18n[y]);
              }
            }
            _processDialCodes() {
              (this.dialCodes = {}),
                (this.dialCodeMaxLen = 0),
                (this.dialCodeToIso2Map = {});
              for (let b = 0; b < this.countries.length; b++) {
                const y = this.countries[b];
                this.dialCodes[y.dialCode] || (this.dialCodes[y.dialCode] = !0),
                  this._addToDialCodeMap(y.iso2, y.dialCode, y.priority);
              }
              for (let b = 0; b < this.countries.length; b++) {
                const y = this.countries[b];
                if (y.areaCodes) {
                  const T = this.dialCodeToIso2Map[y.dialCode][0];
                  for (let L = 0; L < y.areaCodes.length; L++) {
                    const D = y.areaCodes[L];
                    for (let I = 1; I < D.length; I++) {
                      const C = y.dialCode + D.substr(0, I);
                      this._addToDialCodeMap(T, C),
                        this._addToDialCodeMap(y.iso2, C);
                    }
                    this._addToDialCodeMap(y.iso2, y.dialCode + D);
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
                separateDialCode: y,
                showFlags: T,
                containerClass: L,
                hiddenInput: D,
                dropdownContainer: I,
                fixDropdownWidth: C,
                useFullscreenPopup: F,
                i18n: V,
              } = this.options;
              let Q = "iti";
              b && (Q += " iti--allow-dropdown"),
                T && (Q += " iti--show-flags"),
                L && (Q += ` ${L}`),
                F || (Q += " iti--inline-dropdown");
              const X = P("div", { class: Q });
              if (
                (this.telInput.parentNode?.insertBefore(X, this.telInput),
                b || T)
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
                  b &&
                    (this.dropdownArrow = P(
                      "div",
                      { class: "iti__arrow", "aria-hidden": "true" },
                      ie
                    )),
                  y &&
                    (this.selectedDialCode = P(
                      "div",
                      { class: "iti__selected-dial-code" },
                      this.selectedCountry
                    )),
                  b)
                ) {
                  const ue = C ? "" : "iti--flexible-dropdown-width";
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
                        placeholder: V.searchPlaceholder,
                        role: "combobox",
                        "aria-expanded": "true",
                        "aria-label": V.searchPlaceholder,
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
                        "aria-label": V.countryListAriaLabel,
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
            _appendListItems(b, y) {
              for (let T = 0; T < b.length; T++) {
                const L = b[T],
                  D = P(
                    "li",
                    {
                      id: `iti-${this.id}__item-${L.iso2}`,
                      class: `iti__country ${y}`,
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
              const y = this.telInput.getAttribute("value"),
                T = this.telInput.value,
                D =
                  y && y.charAt(0) === "+" && (!T || T.charAt(0) !== "+")
                    ? y
                    : T,
                I = this._getDialCode(D),
                C = S(D),
                { initialCountry: F } = this.options;
              if (I && !C) this._updateCountryFromNumber(D);
              else if (F !== "auto" || b) {
                const V = F ? F.toLowerCase() : "";
                V && this._getCountryData(V, !0)
                  ? this._setCountry(V)
                  : I && C
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
              this._handleLabelClick = (y) => {
                this.dropdownContent.classList.contains("iti__hide")
                  ? this.telInput.focus()
                  : y.preventDefault();
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
                (this._handleCountryContainerKeydown = (y) => {
                  this.dropdownContent.classList.contains("iti__hide") &&
                    ["ArrowUp", "ArrowDown", " ", "Enter"].includes(y.key) &&
                    (y.preventDefault(),
                    y.stopPropagation(),
                    this._openDropdown()),
                    y.key === "Tab" && this._closeDropdown();
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
                        const y = b.toLowerCase();
                        y && this._getCountryData(y, !0)
                          ? ((A.autoCountry = y),
                            setTimeout(() => O("handleAutoCountry")))
                          : (this._setInitialState(!0),
                            O("rejectAutoCountryPromise"));
                      },
                      () => {
                        this._setInitialState(!0),
                          O("rejectAutoCountryPromise");
                      }
                    ));
            }
            _initTelInputListeners() {
              const {
                strictMode: b,
                formatAsYouType: y,
                separateDialCode: T,
              } = this.options;
              let L = !1;
              (this._handleInputEvent = (D) => {
                this._updateCountryFromNumber(this.telInput.value) &&
                  this._triggerCountryChange();
                const I = D && D.data && /[^+0-9]/.test(D.data),
                  C =
                    D &&
                    D.inputType === "insertFromPaste" &&
                    this.telInput.value;
                if (
                  (I || (C && !b)
                    ? (L = !0)
                    : /[^+0-9]/.test(this.telInput.value) || (L = !1),
                  y && !L)
                ) {
                  const F = this.telInput.selectionStart || 0,
                    Q = this.telInput.value
                      .substring(0, F)
                      .replace(/[^+0-9]/g, "").length,
                    X = D && D.inputType === "deleteContentForward",
                    ie = this._formatNumberAsYouType(),
                    ue = x(Q, ie, F, X);
                  (this.telInput.value = ie),
                    this.telInput.setSelectionRange(ue, ue);
                }
              }),
                this.telInput.addEventListener("input", this._handleInputEvent),
                (b || T) &&
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
                      if (b) {
                        const I =
                            this.telInput.selectionStart === 0 && D.key === "+",
                          C = /^[0-9]$/.test(D.key),
                          F = I || C,
                          V = this._getFullNumber(),
                          Q = A.utils.getCoreNumber(
                            V,
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
              const y = parseInt(
                this.telInput.getAttribute("maxlength") || "",
                10
              );
              return y && b.length > y ? b.substr(0, y) : b;
            }
            _trigger(b) {
              const y = new Event(b, { bubbles: !0, cancelable: !0 });
              this.telInput.dispatchEvent(y);
            }
            _openDropdown() {
              const { fixDropdownWidth: b } = this.options;
              b &&
                (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
                this.dropdownContent.classList.remove("iti__hide"),
                this.selectedCountry.setAttribute("aria-expanded", "true"),
                this._setDropdownPosition();
              const y = this.countryList.firstElementChild;
              y &&
                (this._highlightListItem(y, !1),
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
                  y = this.telInput.offsetHeight;
                this.options.dropdownContainer &&
                  ((this.dropdown.style.top = `${b.top + y}px`),
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
              const y = () => {
                const L = this.searchInput.value.trim();
                L ? this._filterCountries(L) : this._filterCountries("", !0);
              };
              let T = null;
              (this._handleSearchChange = () => {
                T && clearTimeout(T),
                  (T = setTimeout(() => {
                    y(), (T = null);
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
            _filterCountries(b, y = !1) {
              let T = !0;
              this.countryList.innerHTML = "";
              const L = g(b);
              for (let D = 0; D < this.countries.length; D++) {
                const I = this.countries[D],
                  C = g(I.name),
                  F = `+${I.dialCode}`;
                if (y || C.includes(L) || F.includes(L) || I.iso2.includes(L)) {
                  const V = I.nodeById[this.id];
                  V && this.countryList.appendChild(V),
                    T && (this._highlightListItem(V, !1), (T = !1));
                }
              }
              (this.countryList.scrollTop = 0), this._updateSearchResultsText();
            }
            _updateSearchResultsText() {
              const { i18n: b } = this.options,
                y = this.countryList.childElementCount;
              let T;
              y === 0
                ? (T = b.zeroSearchResults)
                : y === 1
                ? (T = b.oneSearchResult)
                : (T = b.multipleSearchResults.replace(
                    "${count}",
                    y.toString()
                  )),
                (this.searchResultsA11yText.textContent = T);
            }
            _handleUpDownKey(b) {
              let y =
                b === "ArrowUp"
                  ? this.highlightedItem?.previousElementSibling
                  : this.highlightedItem?.nextElementSibling;
              !y &&
                this.countryList.childElementCount > 1 &&
                (y =
                  b === "ArrowUp"
                    ? this.countryList.lastElementChild
                    : this.countryList.firstElementChild),
                y && (this._scrollTo(y), this._highlightListItem(y, !1));
            }
            _handleEnterKey() {
              this.highlightedItem &&
                this._selectListItem(this.highlightedItem);
            }
            _updateValFromNumber(b) {
              let y = b;
              if (
                this.options.formatOnDisplay &&
                A.utils &&
                this.selectedCountryData
              ) {
                const T =
                    this.options.nationalMode ||
                    (y.charAt(0) !== "+" && !this.options.separateDialCode),
                  { NATIONAL: L, INTERNATIONAL: D } = A.utils.numberFormat,
                  I = T ? L : D;
                y = A.utils.formatNumber(y, this.selectedCountryData.iso2, I);
              }
              (y = this._beforeSetNumber(y)), (this.telInput.value = y);
            }
            _updateCountryFromNumber(b) {
              const y = b.indexOf("+");
              let T = y ? b.substring(y) : b;
              const L = this.selectedCountryData.dialCode;
              T &&
                L === "1" &&
                T.charAt(0) !== "+" &&
                (T.charAt(0) !== "1" && (T = `1${T}`), (T = `+${T}`)),
                this.options.separateDialCode &&
                  L &&
                  T.charAt(0) !== "+" &&
                  (T = `+${L}${T}`);
              const I = this._getDialCode(T, !0),
                C = E(T);
              let F = null;
              if (I) {
                const V = this.dialCodeToIso2Map[E(I)],
                  Q =
                    V.indexOf(this.selectedCountryData.iso2) !== -1 &&
                    C.length <= I.length - 1;
                if (!(L === "1" && S(C)) && !Q) {
                  for (let ie = 0; ie < V.length; ie++)
                    if (V[ie]) {
                      F = V[ie];
                      break;
                    }
                }
              } else
                T.charAt(0) === "+" && C.length
                  ? (F = "")
                  : (!T || T === "+") &&
                    !this.selectedCountryData.iso2 &&
                    (F = this.defaultCountry);
              return F !== null ? this._setCountry(F) : !1;
            }
            _highlightListItem(b, y) {
              const T = this.highlightedItem;
              T &&
                (T.classList.remove("iti__highlight"),
                T.setAttribute("aria-selected", "false")),
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
                y && this.highlightedItem.focus();
            }
            _getCountryData(b, y) {
              for (let T = 0; T < this.countries.length; T++)
                if (this.countries[T].iso2 === b) return this.countries[T];
              if (y) return null;
              throw new Error(`No country data for '${b}'`);
            }
            _setCountry(b) {
              const {
                  separateDialCode: y,
                  showFlags: T,
                  i18n: L,
                } = this.options,
                D = this.selectedCountryData.iso2
                  ? this.selectedCountryData
                  : {};
              if (
                ((this.selectedCountryData = b
                  ? this._getCountryData(b, !1) || {}
                  : {}),
                this.selectedCountryData.iso2 &&
                  (this.defaultCountry = this.selectedCountryData.iso2),
                this.selectedCountryInner)
              ) {
                let I = "",
                  C = "";
                b && T
                  ? ((I = `iti__flag iti__${b}`),
                    (C = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                  : ((I = "iti__flag iti__globe"), (C = L.noCountrySelected)),
                  (this.selectedCountryInner.className = I),
                  (this.selectedCountryA11yText.textContent = C);
              }
              if ((this._setSelectedCountryTitleAttribute(b, y), y)) {
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
                  let y = A.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      !1,
                      b,
                      !0
                    ),
                    T = y;
                  for (
                    ;
                    A.utils.isPossibleNumber(y, this.selectedCountryData.iso2);

                  )
                    (T = y), (y += "0");
                  const L = A.utils.getCoreNumber(
                    T,
                    this.selectedCountryData.iso2
                  );
                  this.maxCoreNumberLength = L.length;
                } else this.maxCoreNumberLength = null;
            }
            _setSelectedCountryTitleAttribute(b = null, y) {
              if (!this.selectedCountry) return;
              let T;
              b && !y
                ? (T = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
                : b
                ? (T = this.selectedCountryData.name)
                : (T = "Unknown"),
                this.selectedCountry.setAttribute("title", T);
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                const b = this.telInput.parentNode.cloneNode(!1);
                (b.style.visibility = "hidden"), document.body.appendChild(b);
                const y = this.countryContainer.cloneNode();
                b.appendChild(y);
                const T = this.selectedCountry.cloneNode(!0);
                y.appendChild(T);
                const L = T.offsetWidth;
                return document.body.removeChild(b), L;
              }
              return 0;
            }
            _updatePlaceholder() {
              const {
                  autoPlaceholder: b,
                  placeholderNumberType: y,
                  nationalMode: T,
                  customPlaceholder: L,
                } = this.options,
                D =
                  b === "aggressive" ||
                  (!this.hadInitialPlaceholder && b === "polite");
              if (A.utils && D) {
                const I = A.utils.numberType[y];
                let C = this.selectedCountryData.iso2
                  ? A.utils.getExampleNumber(
                      this.selectedCountryData.iso2,
                      T,
                      I
                    )
                  : "";
                (C = this._beforeSetNumber(C)),
                  typeof L == "function" &&
                    (C = L(C, this.selectedCountryData)),
                  this.telInput.setAttribute("placeholder", C);
              }
            }
            _selectListItem(b) {
              const y = this._setCountry(b.getAttribute("data-country-code"));
              this._closeDropdown(),
                this._updateDialCode(b.getAttribute("data-dial-code")),
                this.telInput.focus(),
                y && this._triggerCountryChange();
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
              const y = this.countryList,
                T = document.documentElement.scrollTop,
                L = y.offsetHeight,
                D = y.getBoundingClientRect().top + T,
                I = D + L,
                C = b.offsetHeight,
                F = b.getBoundingClientRect().top + T,
                V = F + C,
                Q = F - D + y.scrollTop;
              if (F < D) y.scrollTop = Q;
              else if (V > I) {
                const X = L - C;
                y.scrollTop = Q - X;
              }
            }
            _updateDialCode(b) {
              const y = this.telInput.value,
                T = `+${b}`;
              let L;
              if (y.charAt(0) === "+") {
                const D = this._getDialCode(y);
                D ? (L = y.replace(D, T)) : (L = T), (this.telInput.value = L);
              }
            }
            _getDialCode(b, y) {
              let T = "";
              if (b.charAt(0) === "+") {
                let L = "";
                for (let D = 0; D < b.length; D++) {
                  const I = b.charAt(D);
                  if (!isNaN(parseInt(I, 10))) {
                    if (((L += I), y))
                      this.dialCodeToIso2Map[L] && (T = b.substr(0, D + 1));
                    else if (this.dialCodes[L]) {
                      T = b.substr(0, D + 1);
                      break;
                    }
                    if (L.length === this.dialCodeMaxLen) break;
                  }
                }
              }
              return T;
            }
            _getFullNumber() {
              const b = this.telInput.value.trim(),
                { dialCode: y } = this.selectedCountryData;
              let T;
              const L = E(b);
              return (
                this.options.separateDialCode && b.charAt(0) !== "+" && y && L
                  ? (T = `+${y}`)
                  : (T = ""),
                T + b
              );
            }
            _beforeSetNumber(b) {
              let y = b;
              if (this.options.separateDialCode) {
                let T = this._getDialCode(y);
                if (T) {
                  T = `+${this.selectedCountryData.dialCode}`;
                  const L =
                    y[T.length] === " " || y[T.length] === "-"
                      ? T.length + 1
                      : T.length;
                  y = y.substr(L);
                }
              }
              return this._cap(y);
            }
            _triggerCountryChange() {
              this._trigger("countrychange");
            }
            _formatNumberAsYouType() {
              const b = this._getFullNumber(),
                y = A.utils
                  ? A.utils.formatNumberAsYouType(
                      b,
                      this.selectedCountryData.iso2
                    )
                  : b,
                { dialCode: T } = this.selectedCountryData;
              return this.options.separateDialCode &&
                this.telInput.value.charAt(0) !== "+" &&
                y.includes(`+${T}`)
                ? (y.split(`+${T}`)[1] || "").trim()
                : y;
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
                const T = this.telInput.closest("label");
                T && T.removeEventListener("click", this._handleLabelClick);
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
              const y = this.telInput.parentNode;
              y?.parentNode?.insertBefore(this.telInput, y),
                y?.parentNode?.removeChild(y),
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
                const { iso2: y } = this.selectedCountryData;
                return A.utils.formatNumber(this._getFullNumber(), y, b);
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
              const y = this._getFullNumber();
              return /\p{L}/u.test(y)
                ? !1
                : A.utils
                ? A.utils.isPossibleNumber(y, this.selectedCountryData.iso2, b)
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
              const y = b.toLowerCase();
              this.selectedCountryData.iso2 !== y &&
                (this._setCountry(y),
                this._updateDialCode(this.selectedCountryData.dialCode),
                this._triggerCountryChange());
            }
            setNumber(b) {
              const y = this._updateCountryFromNumber(b);
              this._updateValFromNumber(b), y && this._triggerCountryChange();
            }
            setPlaceholderNumberType(b) {
              (this.options.placeholderNumberType = b),
                this._updatePlaceholder();
            }
          },
          M = (b, y, T) => {
            const L = document.createElement("script");
            (L.onload = () => {
              window.intlTelInputUtils &&
                ((A.utils = window.intlTelInputUtils),
                delete window.intlTelInputUtils,
                window.intlTelInputUtilsBackup &&
                  ((window.intlTelInputUtils = window.intlTelInputUtilsBackup),
                  delete window.intlTelInputUtilsBackup)),
                O("handleUtils"),
                y && y();
            }),
              (L.onerror = () => {
                O("rejectUtilsScriptPromise"), T && T();
              }),
              (L.className = "iti-load-utils"),
              (L.async = !0),
              (L.src = b),
              document.body.appendChild(L);
          },
          R = (b) =>
            !A.utils && !A.startedLoadingUtilsScript
              ? ((A.startedLoadingUtilsScript = !0),
                new Promise((y, T) => M(b, y, T)))
              : null,
          A = Object.assign(
            (b, y) => {
              const T = new k(b, y);
              return (
                T._init(),
                b.setAttribute("data-intl-tel-input-id", T.id.toString()),
                (A.instances[T.id] = T),
                T
              );
            },
            {
              defaults: _,
              documentReady: () => document.readyState === "complete",
              getCountryData: () => m,
              getInstance: (b) => {
                const y = b.getAttribute("data-intl-tel-input-id");
                return y ? A.instances[y] : null;
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
  })(dd);
  var hg = dd.exports;
  const mg = pg(hg),
    gg = () => {
      function r(i) {
        const n = document.querySelector(`[calc-phone="${i}"]`),
          s = document.querySelector(`[dial-code="${i}"]`),
          o = document.querySelector(`[hidden-country-name="${i}"]`),
          a = document.querySelector(`[hidden-full-phone="${i}"]`);
        if (!n || !s || !o || !a) return;
        const l = mg(n, {
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
    Ar = () => {
      gg();
    };
  var vg = "1.3.4";
  function fd(r, e, t) {
    return Math.max(r, Math.min(e, t));
  }
  function _g(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function yg(r, e, t, i) {
    return _g(r, e, 1 - Math.exp(-t * i));
  }
  function wg(r, e) {
    return ((r % e) + e) % e;
  }
  var bg = class {
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
    advance(r) {
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += r;
        const t = fd(0, this.currentTime / this.duration, 1);
        e = t >= 1;
        const i = e ? 1 : this.easing(t);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = yg(this.value, this.to, this.lerp * 60, r)),
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
  function Sg(r, e) {
    let t;
    return function (...i) {
      let n = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), r.apply(n, i);
        }, e));
    };
  }
  var xg = class {
      constructor(r, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
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
        (this.wrapper = r),
          (this.content = e),
          t &&
            ((this.debouncedResize = Sg(this.resize, i)),
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
    pd = class {
      constructor() {
        q(this, "events", {});
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
    hd = 100 / 6,
    ir = { passive: !1 },
    Tg = class {
      constructor(r, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        q(this, "touchStart", { x: 0, y: 0 });
        q(this, "lastDelta", { x: 0, y: 0 });
        q(this, "window", { width: 0, height: 0 });
        q(this, "emitter", new pd());
        q(this, "onTouchStart", (r) => {
          const { clientX: e, clientY: t } = r.targetTouches
            ? r.targetTouches[0]
            : r;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: r });
        });
        q(this, "onTouchMove", (r) => {
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
        q(this, "onTouchEnd", (r) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: r,
          });
        });
        q(this, "onWheel", (r) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = r;
          const n = i === 1 ? hd : i === 2 ? this.window.width : 1,
            s = i === 1 ? hd : i === 2 ? this.window.height : 1;
          (e *= n),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: r });
        });
        q(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = r),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, ir),
          this.element.addEventListener("touchstart", this.onTouchStart, ir),
          this.element.addEventListener("touchmove", this.onTouchMove, ir),
          this.element.addEventListener("touchend", this.onTouchEnd, ir);
      }
      on(r, e) {
        return this.emitter.on(r, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, ir),
          this.element.removeEventListener("touchstart", this.onTouchStart, ir),
          this.element.removeEventListener("touchmove", this.onTouchMove, ir),
          this.element.removeEventListener("touchend", this.onTouchEnd, ir);
      }
    },
    md = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
    Cg = class {
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
        overscroll: w = !0,
        autoRaf: E = !1,
        anchors: g = !1,
        autoToggle: S = !1,
        allowNestedScroll: x = !1,
        __experimental__naiveDimensions: P = !1,
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
        q(this, "animate", new bg());
        q(this, "emitter", new pd());
        q(this, "dimensions");
        q(this, "virtualScroll");
        q(this, "onScrollEnd", (r) => {
          r instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              r.stopPropagation());
        });
        q(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        q(this, "onTransitionEnd", (r) => {
          if (r.propertyName.includes("overflow")) {
            const e = this.isHorizontal ? "overflow-x" : "overflow-y",
              t = getComputedStyle(this.rootElement)[e];
            ["hidden", "clip"].includes(t) ? this.stop() : this.start();
          }
        });
        q(this, "onClick", (r) => {
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
        q(this, "onPointerDown", (r) => {
          r.button === 1 && this.reset();
        });
        q(this, "onVirtualScroll", (r) => {
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
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
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
        q(this, "raf", (r) => {
          const e = r - (this.time || r);
          (this.time = r),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = vg),
          (!r || r === document.documentElement) && (r = window),
          typeof a == "number" && typeof l != "function"
            ? (l = md)
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
            overscroll: w,
            autoRaf: E,
            anchors: g,
            autoToggle: S,
            allowNestedScroll: x,
            __experimental__naiveDimensions: P,
          }),
          (this.dimensions = new xg(r, e, { autoResize: p })),
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
          (this.virtualScroll = new Tg(t, {
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
            } else r = fd(0, r, this.limit);
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
                ? (s = md)
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
          const x = S.overflowX,
            P = S.overflowY;
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
            x = t !== 0;
          S && s && a && (h = "x"), x && o && l && (h = "y");
        }
        if (!h) return !1;
        let p, v, _, w, E;
        if (h === "x")
          (p = r.scrollLeft), (v = u - d), (_ = e), (w = s), (E = a);
        else if (h === "y")
          (p = r.scrollTop), (v = c - m), (_ = t), (w = o), (E = l);
        else return !1;
        return (_ > 0 ? p < v : p > 0) && w && E;
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
          ? wg(this.animatedScroll, this.limit)
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
  W.registerPlugin(Z);
  let io;
  const Eg = () => {
      (io = new Cg({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: (r) => Math.min(1, 1.001 - Math.pow(2, -12 * r)),
        autoRaf: !0,
      })),
        io.on("scroll", Z.update),
        W.ticker.add((r) => {
          io.raf(r * 1e3);
        }),
        W.ticker.lagSmoothing(0);
    },
    Ag = () => {
      Eg();
    },
    gd = () => io;
  let Pr,
    un,
    cn = !1;
  const Pg = () => {
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
            z = R * A,
            b = `$${z.toLocaleString()}`;
          (u.textContent = b), (m.value = z);
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
          if (v() && !cn) {
            (cn = !0),
              n.classList.add("is--active"),
              r.classList.remove("is--active"),
              h(),
              p();
            const R = gd();
            R && R.stop(), S();
          } else v() || r.classList.add("is--active");
        },
        w = () => {
          if (cn) {
            (cn = !1),
              n.classList.remove("is--active"),
              Pr && Pr.isActive() && Pr.pause(),
              un && un.isActive() && un.pause();
            const R = gd();
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
            new MutationObserver(_).observe(r, {
              attributes: !0,
              attributeFilter: ["final-value"],
            });
        },
        S = () => {
          (Pr = W.timeline()),
            W.set(n, { display: "block", visibility: "visible", autoAlpha: 1 }),
            Pr.fromTo(
              a,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "expo.out" }
            ),
            Pr.fromTo(
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
            Pr.fromTo(
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
          (un = W.timeline()),
            un.to(l, {
              autoAlpha: 0,
              scale: 0.9,
              rotate: 10,
              y: "100%",
              transformOrigin: "top center",
              duration: 1.25,
              ease: "elastic.out(0.4,0.3)",
            }),
            un.to(
              a,
              {
                opacity: 0,
                duration: 0.5,
                ease: "expo.out",
                onComplete: () => {
                  W.set(n, { display: "none", visibility: "hidden" });
                },
              },
              "-=1"
            );
        },
        P = (R) => {
          R.key === "Escape" && cn && w();
        },
        O = () => {
          o.addEventListener("click", () => {
            _();
          }),
            s.forEach((R) => {
              R.addEventListener("click", () => {
                w();
              });
            }),
            a.addEventListener("click", (R) => {
              R.target === a && cn && w();
            }),
            document.addEventListener("keydown", P);
        },
        k = () => {
          document.removeEventListener("keydown", P);
        };
      return g(), O(), k;
    },
    Lg = () => Pg(),
    Og = () => {
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
    Mg = () => {
      Og();
    };
  W.registerPlugin(tn);
  const Dg = () => {
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
        w = !1,
        E = null;
      const g = t.length,
        S = 6e3;
      if (!r || !e || t.length === 0) return;
      W.set(i, { autoAlpha: 0 }),
        W.set(n, { autoAlpha: 0 }),
        W.set(i, { scale: 0.8 }),
        W.set(n, { scale: 0.8 });
      const x = (I) => {
          const C = i[I],
            F = n[I];
          C &&
            W.fromTo(
              C,
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
              W.fromTo(
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
          const C = i[I],
            F = n[I];
          C &&
            W.to(C, {
              scale: 0.8,
              rotateX: -120,
              y: "100%",
              autoAlpha: 0,
              duration: 0.6,
              ease: "expo.inOut",
            }),
            F &&
              F.length > 0 &&
              W.to(F, {
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
          const C = a[I];
          if (C) {
            const F = new tn(C, {
              type: "lines",
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
            });
            F &&
              F.lines &&
              W.from(F.lines, {
                yPercent: 110,
                autoAlpha: 0,
                duration: 1.5,
                ease: "expo.out",
                stagger: 0.12,
              });
          }
        },
        k = (I) => {
          const C = u[I];
          C &&
            C.length > 0 &&
            W.from(C, {
              y: 100,
              autoAlpha: 0,
              duration: 1.5,
              ease: "expo.out",
              stagger: 0.1,
            });
        },
        M = () => {
          _ && (clearTimeout(_), (_ = null)),
            E && (clearTimeout(E), (E = null));
        },
        R = (I) => {
          W.killTweensOf(m),
            m.forEach((C, F) => {
              F === I
                ? W.fromTo(
                    C,
                    { scaleX: 0 },
                    { scaleX: 1, duration: S / 1e3, ease: "none" }
                  )
                : F < I
                ? W.set(C, { scaleX: 1 })
                : W.set(C, { scaleX: 0 });
            });
        },
        A = (I, C = !0) => {
          const F = Math.min(Math.max(I, 0), g - 1);
          if (F !== p && !v) {
            v = !0;
            const V = p;
            M();
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
              V >= 0 &&
                V < t.length &&
                (d[V] && d[V].classList.add("is--outgoing"),
                t[V] && t[V].classList.add("is--outgoing"),
                o[V] && o[V].classList.add("is--outgoing"),
                l[V] && l[V].classList.add("is--outgoing"),
                P(V)),
              d[F] && d[F].classList.add("is--incoming"),
              t[F] && t[F].classList.add("is--incoming"),
              o[F] && o[F].classList.add("is--incoming"),
              l[F] && l[F].classList.add("is--incoming"),
              x(F),
              O(F),
              k(F),
              W.delayedCall(0.2, () => {
                Q(),
                  d[F] && d[F].classList.add("is--active"),
                  t[F] && t[F].classList.add("is--active"),
                  o[F] && o[F].classList.add("is--active"),
                  l[F] && l[F].classList.add("is--active"),
                  (p = F),
                  (v = !1),
                  R(F),
                  C && !w && y();
              });
          }
        },
        z = () => {
          const I = (p + 1) % g;
          A(I);
        },
        b = () => {
          const I = p === 0 ? g - 1 : p - 1;
          A(I);
        },
        y = () => {
          M(),
            (_ = setTimeout(() => {
              !w && !v && z();
            }, S));
        },
        T = () => {
          M();
        },
        L = () => {
          T(),
            (w = !0),
            E && clearTimeout(E),
            (E = setTimeout(() => {
              (w = !1), y();
            }, 1e4));
        };
      d[0] && d[0].classList.add("is--active"),
        t[0] && t[0].classList.add("is--active"),
        o[0] && o[0].classList.add("is--active"),
        l[0] && l[0].classList.add("is--active"),
        x(0),
        O(0),
        k(0),
        f &&
          f.addEventListener("click", () => {
            L(), b();
          }),
        h &&
          h.addEventListener("click", () => {
            L(), z();
          }),
        R(0),
        y();
      const D = () => {
        M(),
          W.delayedCall(0.1, () => {
            w || y();
          });
      };
      return (
        window.addEventListener("resize", D),
        () => {
          M(),
            window.removeEventListener("resize", D),
            W.killTweensOf([i, n, m]);
        }
      );
    },
    vd = () => {
      Dg();
    },
    kg = () => {
      rn(), op(), lp(), vd(), cp(), Vh(), $h(), ud(), cd(), Ar(), Lg(), Mg();
    },
    _d = (r) => document.querySelector(r),
    Ig = (r) => document.querySelectorAll(r),
    Rg = (r, e) => r.classList.add(e),
    zg = () => {
      Ig(".team-member").forEach((e) => {
        e.addEventListener("mouseenter", () => {
          e.querySelector(".member-bio")?.classList.add("is-visible");
        }),
          e.addEventListener("mouseleave", () => {
            e.querySelector(".member-bio")?.classList.remove("is-visible");
          });
      });
    },
    Ng = () => {
      const r = _d(".contact-form");
      r &&
        r.addEventListener("submit", (e) => {
          e.preventDefault();
        });
    };
  W.registerPlugin(Z);
  const Bg = () => {
      const r = document.querySelector(".product_hero_tab_component"),
        e = r.querySelector(".product_hero_tab_visual_wrap");
      W.to(e, {
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
    ts = () => {
      Bg();
    };
  Et.use([ad, ld, ug]);
  const Fg = () => {
      new Et(".product_img_swiper", {
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
    ja = () => {
      Fg();
    },
    qg = () => {
      rn(), ts(), Ar(), ja();
    },
    Vg = () => {
      rn(), ts(), Ar(), ja();
    },
    $g = () => {
      rn(), ts(), Ar(), ja();
    },
    Hg = () => {
      rn(), ts(), Ar();
    },
    Wg = () => {
      rn(), ts(), Ar(), vd();
    },
    Gg = () => {
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
        const d = W.timeline({
          defaults: { duration: t, ease: "power1.inOut" },
        });
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
        W.timeline({
          repeat: -1,
          onUpdate: () => {
            const f = n * s,
              h = d.duration() - n * s;
            d.time() >= h && d.time(f);
          },
        }).to(d, { duration: d.duration(), ease: "none" });
      });
    },
    Xg = () => {
      Gg();
    },
    Yg = {
      home: kg,
      about: zg,
      contact: Ng,
      crm: qg,
      broker: Vg,
      quoting: $g,
      demand: Hg,
      markets: Wg,
      operators: () => {
        Ar(), ud(), cd(), Xg();
      },
    },
    jg = () => {
      const r = document.body.dataset.route,
        e = Yg[r];
      e && e();
    },
    Ug = () => {
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
              w = document.querySelector(`[nav-menu-item='${_}']`);
            if (w) {
              const E = v.getBoundingClientRect(),
                g = i.getBoundingClientRect(),
                S = s.get(w);
              if (S) {
                const x = g.left + g.width / 2,
                  O = E.left + E.width / 2 - x,
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
            w = _.indexOf(v);
          _.forEach((E, g) => {
            g < w
              ? E.setAttribute("pos", "left")
              : g === w
              ? E.setAttribute("pos", "active")
              : E.setAttribute("pos", "right"),
              E === v
                ? E.setAttribute("status", "active")
                : E.setAttribute("status", "inactive");
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
          const w = _.bottom;
          return v >= w && v <= w + a;
        },
        h = (v, _) => {
          const w = i.getBoundingClientRect(),
            E = v.getBoundingClientRect(),
            g = s.get(_);
          if (!g) return;
          const S = w.left + w.width / 2,
            x = E.left + E.width / 2,
            P = g.height + 20,
            O = g.width + 20,
            k = x - S;
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
            w = n.getBoundingClientRect(),
            E = v.clientX,
            g = v.clientY,
            S = E >= _.left && E <= _.right && g >= _.top && g <= _.bottom,
            x = E >= w.left && E <= w.right && g >= w.top && g <= w.bottom,
            P =
              f(g, _) &&
              E >= Math.min(_.left, w.left) &&
              E <= Math.max(_.right, w.right);
          S || x || P ? l && (clearTimeout(l), (l = null)) : l || m();
        };
      document.addEventListener("mousemove", p),
        e.forEach((v) => {
          const _ = v.getAttribute("nav-menu-dropdown"),
            w = document.querySelector(`[nav-menu-item='${_}']`);
          w &&
            v.addEventListener("mouseenter", () => {
              d(v, w);
            });
        }),
        n.addEventListener("mouseenter", () => {
          l && (clearTimeout(l), (l = null));
        }),
        n.addEventListener("mouseleave", () => {
          m();
        });
    },
    Kg = () => {
      Ug();
    },
    Zg = () => {
      const r = document.querySelector(".page_nav_size"),
        e = document.querySelector(".page_nav_main");
      window.addEventListener("scroll", () => {
        window.scrollY > 50
          ? (r.classList.add("is--active"), e.classList.add("is--active"))
          : (r.classList.remove("is--active"),
            e.classList.remove("is--active"));
      });
    },
    Qg = () => {
      Zg();
    },
    Jg = () => {
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
                  W.to(c, { height: 0, duration: 0.5, ease: "power3.out" }),
                  W.to(d, { rotateX: 0, duration: 0.5, ease: "power3.out" }),
                  W.to(h, { scaleX: 0, duration: 0.7, ease: "power3.out" }),
                  m.forEach((p) => p.classList.remove("is--open")),
                  W.to(m, {
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
                W.to(n, { height: "auto", duration: 0.5, ease: "power3.out" }),
                W.to(s, { rotateX: 180, duration: 0.5, ease: "power3.out" }),
                W.to(a, { scaleX: 1, duration: 0.7, ease: "power3.out" }),
                o.forEach((u) => u.classList.add("is--open")),
                W.fromTo(
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
    ev = () => Jg(),
    tv = () => {
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
          r.forEach((w) => {
            w.setAttribute("aria-controls", "main-nav-menu"),
              w.setAttribute("aria-expanded", "false");
          }),
            e.forEach((w) => {
              w.setAttribute("aria-label", "Open navigation menu");
            }),
            t.forEach((w) => {
              w.setAttribute("aria-label", "Close navigation menu");
            }),
            n &&
              (n.setAttribute("id", "main-nav-menu"),
              n.setAttribute("aria-label", "Main navigation menu")),
            s && s.setAttribute("role", "navigation");
        },
        m = (w, E) => {
          [...r, ...e, ...t, ...i, s].filter(Boolean).forEach((S) => {
            S.classList.add(w), S.classList.remove(E);
          });
        },
        f = (w) => {
          r.forEach((E) => {
            E.setAttribute("aria-expanded", w ? "true" : "false");
          });
        },
        h = () => {
          m(u, c),
            f(!0),
            W.timeline()
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
        p = () => {
          m(c, u),
            f(!1),
            W.timeline()
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
            W.to(
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
          r.forEach((w) => {
            w.addEventListener("click", v);
          });
      })();
    },
    iv = () => {
      tv();
    };
  W.registerPlugin(Z);
  const rv = () => {
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
          let w = W.timeline({
            repeat: -1,
            onReverseComplete: () => w.progress(1),
          });
          d
            ? ((c = a[0].offsetHeight / c),
              w.fromTo(
                a,
                { yPercent: 0 },
                { yPercent: p, ease: "none", duration: c }
              ))
            : ((c = a[0].offsetWidth / c),
              w.fromTo(
                a,
                { xPercent: 0 },
                { xPercent: p, ease: "none", duration: c }
              ));
          let E = { value: 1 };
          const g = Z.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (x) => {
              if (
                !_ &&
                (f &&
                  v !== x.direction &&
                  ((v = x.direction), w.timeScale(x.direction)),
                h)
              ) {
                let P = x.getVelocity() * 0.006;
                (P = W.utils.clamp(-60, 60, P)),
                  W.timeline({ onUpdate: () => w.timeScale(E.value) }).fromTo(
                    E,
                    { value: P },
                    { value: v, duration: 0.5 }
                  );
              }
            },
          });
          function S(x) {
            _ = x;
            let P = { value: 1 },
              O = W.timeline({ onUpdate: () => w.timeScale(P.value) });
            x
              ? (O.fromTo(P, { value: v }, { value: 0, duration: 0.5 }),
                u.forEach((k) => e(k, "is-paused")))
              : (O.fromTo(P, { value: 0 }, { value: v, duration: 0.5 }),
                u.forEach((k) => t(k, "is-paused")));
          }
          window.matchMedia("(pointer: fine)").matches &&
            l.forEach((x) => {
              x.addEventListener("mouseenter", () => S(!0)),
                x.addEventListener("mouseleave", () => S(!1));
            }),
            u.forEach((x) => {
              x.addEventListener("click", function () {
                const P = i(this, "is-paused");
                S(!P);
              });
            }),
            (s._marqueeCleanup = () => {
              g.kill(),
                w.kill(),
                l.forEach((x) => {
                  x.removeEventListener("mouseenter", () => S(!0)),
                    x.removeEventListener("mouseleave", () => S(!1));
                }),
                u.forEach((x) => {
                  x.removeEventListener("click", function () {
                    const P = i(this, "is-paused");
                    S(!P);
                  });
                });
            });
        });
    },
    nv = () => {
      rv();
    },
    sv = () => {
      Kg(), Qg(), ev(), iv(), nv();
    },
    ov = () => {
      const r = _d(".example-component");
      r && (Rg(r, "is-initialized"), r.addEventListener("click", () => {}));
    },
    av = () => {
      ov();
    };
  document.addEventListener("DOMContentLoaded", () => {
    sv(), av(), jg(), Ag();
  }),
    document.addEventListener("visibilitychange", () => {
      document.hidden
        ? (W.globalTimeline.pause(), window.lenis && window.lenis.stop())
        : (W.globalTimeline.resume(), window.lenis && window.lenis.start());
    });
})();
