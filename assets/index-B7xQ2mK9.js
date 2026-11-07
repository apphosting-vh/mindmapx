var e = Object.create,
 t = Object.defineProperty,
 n = Object.getOwnPropertyDescriptor,
 r = Object.getOwnPropertyNames,
 i = Object.getPrototypeOf,
 a = Object.prototype.hasOwnProperty,
 o = (e, t) => () => (t || (e((t = {
  exports: {}
 }).exports, t, t.exports), e = null), t.exports),
 s = (e, i, o, s) => {
  if (i && typeof i == `object` || typeof i == `function`)
   for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
    get: (e => i[e]).bind(null, d),
    enumerable: !(s = n(i, d)) || s.enumerable
   });
  return e
 },
 c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
  value: n,
  enumerable: !0
 }) : o, n));
(function() {
 let e = document.createElement(`link`).relList;
 if (e && e.supports && e.supports(`modulepreload`)) return;
 for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
 new MutationObserver(e => {
  for (let t of e)
   if (t.type === `childList`)
    for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
 }).observe(document, {
  childList: !0,
  subtree: !0
 });

 function t(e) {
  let t = {};
  return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t
 }

 function n(e) {
  if (e.ep) return;
  e.ep = !0;
  let n = t(e);
  fetch(e.href, n)
 }
})();
var l = o((e => {
  var t = Symbol.for(`react.transitional.element`),
   n = Symbol.for(`react.portal`),
   r = Symbol.for(`react.fragment`),
   i = Symbol.for(`react.strict_mode`),
   a = Symbol.for(`react.profiler`),
   o = Symbol.for(`react.consumer`),
   s = Symbol.for(`react.context`),
   c = Symbol.for(`react.forward_ref`),
   l = Symbol.for(`react.suspense`),
   u = Symbol.for(`react.memo`),
   d = Symbol.for(`react.lazy`),
   f = Symbol.for(`react.activity`),
   p = Symbol.for(`react.view_transition`),
   m = Symbol.iterator;

  function h(e) {
   return typeof e != `object` || !e ? null : (e = m && e[m] || e[`@@iterator`], typeof e == `function` ? e : null)
  }
  var g = {
    isMounted: function() {
     return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
   },
   _ = Object.assign,
   v = {};

  function y(e, t, n) {
   this.props = e, this.context = t, this.refs = v, this.updater = n || g
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
   if (typeof e != `object` && typeof e != `function` && e != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
   this.updater.enqueueSetState(this, e, t, `setState`)
  }, y.prototype.forceUpdate = function(e) {
   this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
  };

  function b() {}
  b.prototype = y.prototype;

  function x(e, t, n) {
   this.props = e, this.context = t, this.refs = v, this.updater = n || g
  }
  var S = x.prototype = new b;
  S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
  var C = Array.isArray;

  function w() {}
  var T = {
    H: null,
    A: null,
    T: null,
    S: null
   },
   E = Object.prototype.hasOwnProperty;

  function D(e, n, r) {
   var i = r.ref;
   return {
    $$typeof: t,
    type: e,
    key: n,
    ref: i === void 0 ? null : i,
    props: r
   }
  }

  function O(e, t) {
   return D(e.type, t, e.props)
  }

  function k(e) {
   return typeof e == `object` && !!e && e.$$typeof === t
  }

  function A(e) {
   var t = {
    "=": `=0`,
    ":": `=2`
   };
   return `$` + e.replace(/[=:]/g, function(e) {
    return t[e]
   })
  }
  var j = /\/+/g;

  function M(e, t) {
   return typeof e == `object` && e && e.key != null ? A(`` + e.key) : t.toString(36)
  }

  function N(e) {
   switch (e.status) {
    case `fulfilled`:
     return e.value;
    case `rejected`:
     throw e.reason;
    default:
     switch (typeof e.status == `string` ? e.then(w, w) : (e.status = `pending`, e.then(function(t) {
       e.status === `pending` && (e.status = `fulfilled`, e.value = t)
      }, function(t) {
       e.status === `pending` && (e.status = `rejected`, e.reason = t)
      })), e.status) {
      case `fulfilled`:
       return e.value;
      case `rejected`:
       throw e.reason
     }
   }
   throw e
  }

  function P(e, r, i, a, o) {
   var s = typeof e;
   (s === `undefined` || s === `boolean`) && (e = null);
   var c = !1;
   if (e === null) c = !0;
   else switch (s) {
    case `bigint`:
    case `string`:
    case `number`:
     c = !0;
     break;
    case `object`:
     switch (e.$$typeof) {
      case t:
      case n:
       c = !0;
       break;
      case d:
       return c = e._init, P(c(e._payload), r, i, a, o)
     }
   }
   if (c) return o = o(e), c = a === `` ? `.` + M(e, 0) : a, C(o) ? (i = ``, c != null && (i = c.replace(j, `$&/`) + `/`), P(o, r, i, ``, function(e) {
    return e
   })) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(j, `$&/`) + `/`) + c)), r.push(o)), 1;
   c = 0;
   var l = a === `` ? `.` : a + `:`;
   if (C(e))
    for (var u = 0; u < e.length; u++) a = e[u], s = l + M(a, u), c += P(a, r, i, s, o);
   else if (u = h(e), typeof u == `function`)
    for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + M(a, u++), c += P(a, r, i, s, o);
   else if (s === `object`) {
    if (typeof e.then == `function`) return P(N(e), r, i, a, o);
    throw r = String(e), Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
   }
   return c
  }

  function F(e, t, n) {
   if (e == null) return e;
   var r = [],
    i = 0;
   return P(e, r, ``, ``, function(e) {
    return t.call(n, e, i++)
   }), r
  }

  function ee(e) {
   if (e._status === -1) {
    var t = e._result,
     n = t();
    n.then(function(t) {
     (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = `fulfilled`, n.value = t))
    }, function(t) {
     (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = `rejected`, n.reason = t))
    }), e._status === -1 && (e._status = 0, e._result = n)
   }
   if (e._status === 1) return e._result.default;
   throw e._result
  }
  var te = typeof reportError == `function` ? reportError : function(e) {
   if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
    var t = new window.ErrorEvent(`error`, {
     bubbles: !0,
     cancelable: !0,
     message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
     error: e
    });
    if (!window.dispatchEvent(t)) return
   } else if (typeof process == `object` && typeof process.emit == `function`) {
    process.emit(`uncaughtException`, e);
    return
   }
   console.error(e)
  };

  function ne(e) {
   var t = T.T,
    n = {};
   n.types = t === null ? null : t.types, T.T = n;
   try {
    var r = e(),
     i = T.S;
    i !== null && i(n, r), typeof r == `object` && r && typeof r.then == `function` && r.then(w, te)
   } catch (e) {
    te(e)
   } finally {
    t !== null && n.types !== null && (t.types = n.types), T.T = t
   }
  }

  function re(e) {
   var t = T.T;
   if (t !== null) {
    var n = t.types;
    n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e)
   } else ne(re.bind(null, e))
  }
  var I = {
   map: F,
   forEach: function(e, t, n) {
    F(e, function() {
     t.apply(this, arguments)
    }, n)
   },
   count: function(e) {
    var t = 0;
    return F(e, function() {
     t++
    }), t
   },
   toArray: function(e) {
    return F(e, function(e) {
     return e
    }) || []
   },
   only: function(e) {
    if (!k(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
    return e
   }
  };
  e.Activity = f, e.Children = I, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
   __proto__: null,
   c: function(e) {
    return T.H.useMemoCache(e)
   }
  }, e.addTransitionType = re, e.cache = function(e) {
   return function() {
    return e.apply(null, arguments)
   }
  }, e.cacheSignal = function() {
   return null
  }, e.cloneElement = function(e, t, n) {
   if (e == null) throw Error(`The argument must be a React element, but you passed ` + e + `.`);
   var r = _({}, e.props),
    i = e.key;
   if (t != null)
    for (a in t.key !== void 0 && (i = `` + t.key), t) !E.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
   var a = arguments.length - 2;
   if (a === 1) r.children = n;
   else if (1 < a) {
    for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
    r.children = o
   }
   return D(e.type, i, r)
  }, e.createContext = function(e) {
   return e = {
    $$typeof: s,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
   }, e.Provider = e, e.Consumer = {
    $$typeof: o,
    _context: e
   }, e
  }, e.createElement = function(e, t, n) {
   var r, i = {},
    a = null;
   if (t != null)
    for (r in t.key !== void 0 && (a = `` + t.key), t) E.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
   var o = arguments.length - 2;
   if (o === 1) i.children = n;
   else if (1 < o) {
    for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
    i.children = s
   }
   if (e && e.defaultProps)
    for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
   return D(e, a, i)
  }, e.createRef = function() {
   return {
    current: null
   }
  }, e.forwardRef = function(e) {
   return {
    $$typeof: c,
    render: e
   }
  }, e.isValidElement = k, e.lazy = function(e) {
   return {
    $$typeof: d,
    _payload: {
     _status: -1,
     _result: e
    },
    _init: ee
   }
  }, e.memo = function(e, t) {
   return {
    $$typeof: u,
    type: e,
    compare: t === void 0 ? null : t
   }
  }, e.startTransition = ne, e.unstable_useCacheRefresh = function() {
   return T.H.useCacheRefresh()
  }, e.use = function(e) {
   return T.H.use(e)
  }, e.useActionState = function(e, t, n) {
   return T.H.useActionState(e, t, n)
  }, e.useCallback = function(e, t) {
   return T.H.useCallback(e, t)
  }, e.useContext = function(e) {
   return T.H.useContext(e)
  }, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
   return T.H.useDeferredValue(e, t)
  }, e.useEffect = function(e, t) {
   return T.H.useEffect(e, t)
  }, e.useEffectEvent = function(e) {
   return T.H.useEffectEvent(e)
  }, e.useId = function() {
   return T.H.useId()
  }, e.useImperativeHandle = function(e, t, n) {
   return T.H.useImperativeHandle(e, t, n)
  }, e.useInsertionEffect = function(e, t) {
   return T.H.useInsertionEffect(e, t)
  }, e.useLayoutEffect = function(e, t) {
   return T.H.useLayoutEffect(e, t)
  }, e.useMemo = function(e, t) {
   return T.H.useMemo(e, t)
  }, e.useOptimistic = function(e, t) {
   return T.H.useOptimistic(e, t)
  }, e.useReducer = function(e, t, n) {
   return T.H.useReducer(e, t, n)
  }, e.useRef = function(e) {
   return T.H.useRef(e)
  }, e.useState = function(e) {
   return T.H.useState(e)
  }, e.useSyncExternalStore = function(e, t, n) {
   return T.H.useSyncExternalStore(e, t, n)
  }, e.useTransition = function() {
   return T.H.useTransition()
  }, e.version = `19.3.1`
 })),
 u = o(((e, t) => {
  t.exports = l()
 })),
 d = o((e => {
  function t(e, t) {
   var n = e.length;
   e.push(t);
   a: for (; 0 < n;) {
    var r = n - 1 >>> 1,
     a = e[r];
    if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
    else break a
   }
  }

  function n(e) {
   return e.length === 0 ? null : e[0]
  }

  function r(e) {
   if (e.length === 0) return null;
   var t = e[0],
    n = e.pop();
   if (n !== t) {
    e[0] = n;
    a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
     var s = 2 * (r + 1) - 1,
      c = e[s],
      l = s + 1,
      u = e[l];
     if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
     else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
     else break a
    }
   }
   return t
  }

  function i(e, t) {
   var n = e.sortIndex - t.sortIndex;
   return n === 0 ? e.id - t.id : n
  }
  if (e.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
   var a = performance;
   e.unstable_now = function() {
    return a.now()
   }
  } else {
   var o = Date,
    s = o.now();
   e.unstable_now = function() {
    return o.now() - s
   }
  }
  var c = [],
   l = [],
   u = 1,
   d = null,
   f = 3,
   p = !1,
   m = !1,
   h = !1,
   g = !1,
   _ = typeof setTimeout == `function` ? setTimeout : null,
   v = typeof clearTimeout == `function` ? clearTimeout : null,
   y = typeof setImmediate < `u` ? setImmediate : null;

  function b(e) {
   for (var i = n(l); i !== null;) {
    if (i.callback === null) r(l);
    else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
    else break;
    i = n(l)
   }
  }

  function x(e) {
   if (h = !1, b(e), !m) {
    if (n(c) !== null) m = !0, S || (S = !0, O());
    else {
     var t = n(l);
     t !== null && j(x, t.startTime - e)
    }
   }
  }
  var S = !1,
   C = -1,
   w = 5,
   T = -1;

  function E() {
   return g ? !0 : !(e.unstable_now() - T < w)
  }

  function D() {
   if (g = !1, S) {
    var t = e.unstable_now();
    T = t;
    var i = !0;
    try {
     a: {
      m = !1,
      h && (h = !1, v(C), C = -1),
      p = !0;
      var a = f;
      try {
       b: {
        for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
         var o = d.callback;
         if (typeof o == `function`) {
          d.callback = null, f = d.priorityLevel;
          var s = o(d.expirationTime <= t);
          if (t = e.unstable_now(), typeof s == `function`) {
           d.callback = s, b(t), i = !0;
           break b
          }
          d === n(c) && r(c), b(t)
         } else r(c);
         d = n(c)
        }
        if (d !== null) i = !0;
        else {
         var u = n(l);
         u !== null && j(x, u.startTime - t), i = !1
        }
       }
       break a
      }
      finally {
       d = null, f = a, p = !1
      }
      i = void 0
     }
    }
    finally {
     i ? O() : S = !1
    }
   }
  }
  var O;
  if (typeof y == `function`) O = function() {
   y(D)
  };
  else if (typeof MessageChannel < `u`) {
   var k = new MessageChannel,
    A = k.port2;
   k.port1.onmessage = D, O = function() {
    A.postMessage(null)
   }
  } else O = function() {
   _(D, 0)
  };

  function j(t, n) {
   C = _(function() {
    t(e.unstable_now())
   }, n)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
   e.callback = null
  }, e.unstable_forceFrameRate = function(e) {
   0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w = 0 < e ? Math.floor(1e3 / e) : 5
  }, e.unstable_getCurrentPriorityLevel = function() {
   return f
  }, e.unstable_next = function(e) {
   switch (f) {
    case 1:
    case 2:
    case 3:
     var t = 3;
     break;
    default:
     t = f
   }
   var n = f;
   f = t;
   try {
    return e()
   } finally {
    f = n
   }
  }, e.unstable_requestPaint = function() {
   g = !0
  }, e.unstable_runWithPriority = function(e, t) {
   switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
     break;
    default:
     e = 3
   }
   var n = f;
   f = e;
   try {
    return t()
   } finally {
    f = n
   }
  }, e.unstable_scheduleCallback = function(r, i, a) {
   var o = e.unstable_now();
   switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
    case 1:
     var s = -1;
     break;
    case 2:
     s = 250;
     break;
    case 5:
     s = 1073741823;
     break;
    case 4:
     s = 1e4;
     break;
    default:
     s = 5e3
   }
   return s = a + s, r = {
    id: u++,
    callback: i,
    priorityLevel: r,
    startTime: a,
    expirationTime: s,
    sortIndex: -1
   }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r
  }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
   var t = f;
   return function() {
    var n = f;
    f = t;
    try {
     return e.apply(this, arguments)
    } finally {
     f = n
    }
   }
  }
 })),
 f = o(((e, t) => {
  t.exports = d()
 })),
 p = o((e => {
  var t = u();

  function n(e) {
   var t = `https://react.dev/errors/` + e;
   if (1 < arguments.length) {
    t += `?args[]=` + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n])
   }
   return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  }

  function r() {}
  var i = {
    d: {
     f: r,
     r: function() {
      throw Error(n(522))
     },
     D: r,
     C: r,
     L: r,
     m: r,
     X: r,
     S: r,
     M: r
    },
    p: 0,
    findDOMNode: null
   },
   a = Symbol.for(`react.portal`),
   o = Symbol.for(`react.recoverable`),
   s = Symbol.for(`react.optimistic_key`);

  function c(e, t, n) {
   var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
   return {
    $$typeof: a,
    key: r == null ? null : r === s ? s : `` + r,
    children: e,
    containerInfo: t,
    implementation: n
   }
  }
  var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function d(e, t) {
   if (e === `font`) return ``;
   if (typeof t == `string`) return t === `use-credentials` ? t : ``
  }
  e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
   return {
    $$typeof: o,
    _reason: e
   }
  }, e.createPortal = function(e, t) {
   var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
   if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
   return c(e, t, null, r)
  }, e.flushSync = function(e) {
   var t = l.T,
    n = i.p;
   try {
    if (l.T = null, i.p = 2, e) return e()
   } finally {
    l.T = t, i.p = n, i.d.f()
   }
  }, e.preconnect = function(e, t) {
   typeof e == `string` && (t ? (t = t.crossOrigin, t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null, i.d.C(e, t))
  }, e.prefetchDNS = function(e) {
   typeof e == `string` && i.d.D(e)
  }, e.preinit = function(e, t) {
   if (typeof e == `string` && t && typeof t.as == `string`) {
    var n = t.as,
     r = d(n, t.crossOrigin),
     a = typeof t.integrity == `string` ? t.integrity : void 0,
     o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
    n === `style` ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
     crossOrigin: r,
     integrity: a,
     fetchPriority: o
    }) : n === `script` && i.d.X(e, {
     crossOrigin: r,
     integrity: a,
     fetchPriority: o,
     nonce: typeof t.nonce == `string` ? t.nonce : void 0
    })
   }
  }, e.preinitModule = function(e, t) {
   if (typeof e == `string`) {
    if (typeof t == `object` && t) {
     if (t.as == null || t.as === `script`) {
      var n = d(t.as, t.crossOrigin);
      i.d.M(e, {
       crossOrigin: n,
       integrity: typeof t.integrity == `string` ? t.integrity : void 0,
       nonce: typeof t.nonce == `string` ? t.nonce : void 0,
       fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
      })
     }
    } else t ?? i.d.M(e)
   }
  }, e.preload = function(e, t) {
   if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
    var n = t.as,
     r = d(n, t.crossOrigin);
    i.d.L(e, n, {
     crossOrigin: r,
     integrity: typeof t.integrity == `string` ? t.integrity : void 0,
     nonce: typeof t.nonce == `string` ? t.nonce : void 0,
     type: typeof t.type == `string` ? t.type : void 0,
     fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
     referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
     imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
     imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
     media: typeof t.media == `string` ? t.media : void 0
    })
   }
  }, e.preloadModule = function(e, t) {
   if (typeof e == `string`) {
    if (t) {
     var n = d(t.as, t.crossOrigin);
     i.d.m(e, {
      as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
      crossOrigin: n,
      integrity: typeof t.integrity == `string` ? t.integrity : void 0,
      nonce: typeof t.nonce == `string` ? t.nonce : void 0,
      fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
     })
    } else i.d.m(e)
   }
  }, e.requestFormReset = function(e) {
   i.d.r(e)
  }, e.unstable_batchedUpdates = function(e, t) {
   return e(t)
  }, e.useFormState = function(e, t, n) {
   return l.H.useFormState(e, t, n)
  }, e.useFormStatus = function() {
   return l.H.useHostTransitionStatus()
  }, e.version = `19.3.1`
 })),
 m = o(((e, t) => {
  function n() {
   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
   } catch (e) {
    console.error(e)
   }
  }
  n(), t.exports = p()
 })),
 h = o((e => {
  var t = f(),
   n = u(),
   r = m();

  function i(e) {
   var t = `https://react.dev/errors/` + e;
   if (1 < arguments.length) {
    t += `?args[]=` + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n])
   }
   return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  }

  function a(e) {
   return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function o(e) {
   for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
   for (; t.return;) t = t.return;
   return t.tag === 3 ? e : null
  }

  function s(e) {
   if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
   }
   return null
  }

  function c(e) {
   if (e.tag === 31) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
   }
   return null
  }

  function l(e) {
   if (o(e) !== e) throw Error(i(188))
  }

  function d(e) {
   var t = e.alternate;
   if (!t) {
    if (t = o(e), t === null) throw Error(i(188));
    return t === e ? e : null
   }
   for (var n = e, r = t;;) {
    var a = n.return;
    if (a === null) break;
    var s = a.alternate;
    if (s === null) {
     if (r = a.return, r !== null) {
      n = r;
      continue
     }
     break
    }
    if (a.child === s.child) {
     for (s = a.child; s;) {
      if (s === n) return l(a), e;
      if (s === r) return l(a), t;
      s = s.sibling
     }
     throw Error(i(188))
    }
    if (n.return !== r.return) n = a, r = s;
    else {
     for (var c = !1, u = a.child; u;) {
      if (u === n) {
       c = !0, n = a, r = s;
       break
      }
      if (u === r) {
       c = !0, r = a, n = s;
       break
      }
      u = u.sibling
     }
     if (!c) {
      for (u = s.child; u;) {
       if (u === n) {
        c = !0, n = s, r = a;
        break
       }
       if (u === r) {
        c = !0, r = s, n = a;
        break
       }
       u = u.sibling
      }
      if (!c) throw Error(i(189))
     }
    }
    if (n.alternate !== r) throw Error(i(190))
   }
   if (n.tag !== 3) throw Error(i(188));
   return n.stateNode.current === n ? e : t
  }

  function p(e) {
   var t = e.tag;
   if (t === 5 || t === 26 || t === 27 || t === 6) return e;
   for (e = e.child; e !== null;) {
    if (t = p(e), t !== null) return t;
    e = e.sibling
   }
   return null
  }

  function h(e, t, n, r, i, a) {
   for (; e !== null;) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
    e = e.sibling
   }
   return !1
  }

  function g(e) {
   for (e = e.return; e !== null;) {
    if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
    e = e.return
   }
   return null
  }

  function _(e) {
   var t = !1;
   for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
   return t
  }

  function v(e) {
   var t = [null, null],
    n = g(e);
   return n === null || y(t, e, n.child, {
    foundSelf: !1
   }), t
  }

  function y(e, t, n, r) {
   for (; n !== null;) {
    if (n === t) r.foundSelf = !0;
    else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
     if (r.foundSelf) return e[1] = n, !0;
     e[0] = n
    } else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
    n = n.sibling
   }
   return !1
  }

  function b(e) {
   switch (e.tag) {
    case 5:
    case 27:
    case 6:
     return e.stateNode;
    case 3:
     return e.stateNode.containerInfo;
    default:
     throw Error(i(559))
   }
  }
  var x = null,
   S = null;

  function C(e, t, n) {
   return e === n || e === t && (x = e, !0)
  }

  function w(e, t, n) {
   return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0)
  }

  function T(e) {
   if (e === null) return null;
   do e = e === null ? null : e.return; while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
   return e || null
  }

  function E(e, t, n) {
   for (var r = 0, i = e; i; i = n(i)) r++;
   i = 0;
   for (var a = t; a; a = n(a)) i++;
   for (; 0 < r - i;) e = n(e), r--;
   for (; 0 < i - r;) t = n(t), i--;
   for (; r--;) {
    if (e === t || t !== null && e === t.alternate) return e;
    e = n(e), t = n(t)
   }
   return null
  }
  var D = Object.assign,
   O = Symbol.for(`react.element`),
   k = Symbol.for(`react.transitional.element`),
   A = Symbol.for(`react.portal`),
   j = Symbol.for(`react.fragment`),
   M = Symbol.for(`react.strict_mode`),
   N = Symbol.for(`react.profiler`),
   P = Symbol.for(`react.consumer`),
   F = Symbol.for(`react.context`),
   ee = Symbol.for(`react.forward_ref`),
   te = Symbol.for(`react.suspense`),
   ne = Symbol.for(`react.suspense_list`),
   re = Symbol.for(`react.memo`),
   I = Symbol.for(`react.lazy`),
   ie = Symbol.for(`react.activity`),
   L = Symbol.for(`react.legacy_hidden`),
   ae = Symbol.for(`react.memo_cache_sentinel`),
   oe = Symbol.for(`react.view_transition`),
   se = Symbol.for(`react.recoverable`),
   ce = Symbol.iterator;

  function le(e) {
   return typeof e != `object` || !e ? null : (e = ce && e[ce] || e[`@@iterator`], typeof e == `function` ? e : null)
  }
  var ue = Symbol.for(`react.client.reference`);

  function de(e) {
   if (e == null) return null;
   if (typeof e == `function`) return e.$$typeof === ue ? null : e.displayName || e.name || null;
   if (typeof e == `string`) return e;
   switch (e) {
    case j:
     return `Fragment`;
    case N:
     return `Profiler`;
    case M:
     return `StrictMode`;
    case te:
     return `Suspense`;
    case ne:
     return `SuspenseList`;
    case ie:
     return `Activity`;
    case oe:
     return `ViewTransition`
   }
   if (typeof e == `object`) switch (e.$$typeof) {
    case A:
     return `Portal`;
    case F:
     return e.displayName || `Context`;
    case P:
     return (e._context.displayName || `Context`) + `.Consumer`;
    case ee:
     var t = e.render;
     return e = e.displayName, e || (e = t.displayName || t.name || ``, e = e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
    case re:
     return t = e.displayName || null, t === null ? de(e.type) || `Memo` : t;
    case I:
     t = e._payload, e = e._init;
     try {
      return de(e(t))
     } catch {}
   }
   return null
  }
  var fe = Array.isArray,
   R = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
   z = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
   pe = {
    pending: !1,
    data: null,
    method: null,
    action: null
   },
   me = [],
   he = -1;

  function ge(e) {
   return {
    current: e
   }
  }

  function _e(e) {
   0 > he || (e.current = me[he], me[he] = null, he--)
  }

  function ve(e, t) {
   he++, me[he] = e.current, e.current = t
  }
  var ye = ge(null),
   be = ge(null),
   xe = ge(null),
   Se = ge(null);

  function Ce(e, t) {
   switch (ve(xe, t), ve(be, e), ve(ye, null), t.nodeType) {
    case 9:
    case 11:
     e = (e = t.documentElement) && (e = e.namespaceURI) ? mp(e) : 0;
     break;
    default:
     if (e = t.tagName, t = t.namespaceURI) t = mp(t), e = hp(t, e);
     else switch (e) {
      case `svg`:
       e = 1;
       break;
      case `math`:
       e = 2;
       break;
      default:
       e = 0
     }
   }
   _e(ye), ve(ye, e)
  }

  function we() {
   _e(ye), _e(be), _e(xe)
  }

  function Te(e) {
   var t = e.memoizedState;
   t !== null && (uh._currentValue = t.memoizedState, ve(Se, e)), t = ye.current;
   var n = hp(t, e.type);
   t !== n && (ve(be, e), ve(ye, n))
  }

  function Ee(e) {
   be.current === e && (_e(ye), _e(be)), Se.current === e && (_e(Se), uh._currentValue = pe)
  }
  var De, Oe;

  function ke(e) {
   if (De === void 0) try {
    throw Error()
   } catch (e) {
    var t = e.stack.trim().match(/\n( *(at )?)/);
    De = t && t[1] || ``, Oe = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``
   }
   return `
` + De + e + Oe
  }
  var Ae = !1;

  function je(e, t) {
   if (!e || Ae) return ``;
   Ae = !0;
   var n = Error.prepareStackTrace;
   Error.prepareStackTrace = void 0;
   try {
    var r = {
     DetermineComponentFrameRoot: function() {
      try {
       if (t) {
        var n = function() {
         throw Error()
        };
        if (Object.defineProperty(n.prototype, "props", {
          set: function() {
           throw Error()
          }
         }), typeof Reflect == `object` && Reflect.construct) {
         try {
          Reflect.construct(n, [])
         } catch (e) {
          var r = e
         }
         Reflect.construct(e, [], n)
        } else {
         try {
          n.call()
         } catch (e) {
          r = e
         }
         n = !1;
         try {
          var i = Object.getOwnPropertyDescriptor(e.prototype, `props`);
          Object.defineProperty(e.prototype, "props", {
           configurable: !0,
           set: function() {
            throw Error()
           }
          }), n = !0, new e
         } finally {
          n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i))
         }
        }
       } else {
        try {
         throw Error()
        } catch (e) {
         r = e
        }(n = e()) && typeof n.catch == `function` && n.catch(function() {})
       }
      } catch (e) {
       if (e && r && typeof e.stack == `string`) return [e.stack, r.stack]
      }
      return [null, null]
     }
    };
    r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
    var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
    i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
     value: `DetermineComponentFrameRoot`
    });
    var a = r.DetermineComponentFrameRoot(),
     o = a[0],
     s = a[1];
    if (o && s) {
     var c = o.split(`
`),
      l = s.split(`
`);
     for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
     for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
     if (r === c.length || i === l.length)
      for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
     for (; 1 <= r && 0 <= i; r--, i--)
      if (c[r] !== l[i]) {
       if (r !== 1 || i !== 1)
        do
         if (r--, i--, 0 > i || c[r] !== l[i]) {
          var u = `
` + c[r].replace(` at new `, ` at `);
          return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)), u
         } while (1 <= r && 0 <= i);
       break
      }
    }
   } finally {
    Ae = !1, Error.prepareStackTrace = n
   }
   return (n = e ? e.displayName || e.name : ``) ? ke(n) : ``
  }

  function Me(e, t) {
   switch (e.tag) {
    case 26:
    case 27:
    case 5:
     return ke(e.type);
    case 16:
     return ke(`Lazy`);
    case 13:
     return e.child !== t && t !== null ? ke(`Suspense Fallback`) : ke(`Suspense`);
    case 19:
     return ke(`SuspenseList`);
    case 0:
    case 15:
     return je(e.type, !1);
    case 11:
     return je(e.type.render, !1);
    case 1:
     return je(e.type, !0);
    case 31:
     return ke(`Activity`);
    case 30:
     return ke(`ViewTransition`);
    default:
     return ``
   }
  }

  function Ne(e) {
   try {
    var t = ``,
     n = null;
    do t += Me(e, n), n = e, e = e.return; while (e);
    return t
   } catch (e) {
    return `
Error generating stack: ` + e.message + `
` + e.stack
   }
  }
  var Pe = Object.prototype.hasOwnProperty,
   Fe = t.unstable_scheduleCallback,
   Ie = t.unstable_cancelCallback,
   Le = t.unstable_shouldYield,
   Re = t.unstable_requestPaint,
   ze = t.unstable_now,
   Be = t.unstable_getCurrentPriorityLevel,
   Ve = t.unstable_ImmediatePriority,
   He = t.unstable_UserBlockingPriority,
   Ue = t.unstable_NormalPriority,
   We = t.unstable_LowPriority,
   Ge = t.unstable_IdlePriority,
   Ke = t.log,
   qe = t.unstable_setDisableYieldValue,
   Je = null,
   Ye = null;

  function Xe(e) {
   if (typeof Ke == `function` && qe(e), Ye && typeof Ye.setStrictMode == `function`) try {
    Ye.setStrictMode(Je, e)
   } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : et,
   Qe = Math.log,
   $e = Math.LN2;

  function et(e) {
   return e >>>= 0, e === 0 ? 32 : 31 - (Qe(e) / $e | 0) | 0
  }
  var tt = 256,
   nt = 262144,
   rt = 4194304;

  function it(e) {
   var t = e & 42;
   if (t !== 0) return t;
   switch (e & -e) {
    case 1:
     return 1;
    case 2:
     return 2;
    case 4:
     return 4;
    case 8:
     return 8;
    case 16:
     return 16;
    case 32:
     return 32;
    case 64:
     return 64;
    case 128:
     return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
     return e & -e;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
     return e & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
     return e & 62914560;
    case 67108864:
     return 67108864;
    case 134217728:
     return 134217728;
    case 268435456:
     return 268435456;
    case 536870912:
     return 536870912;
    case 1073741824:
     return 0;
    default:
     return e
   }
  }

  function at(e, t, n) {
   var r = e.pendingLanes;
   if (r === 0) return 0;
   var i = 0,
    a = e.suspendedLanes,
    o = e.pingedLanes;
   e = e.warmLanes;
   var s = r & 134217727;
   return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = it(n))) : i = it(o) : i = it(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = it(n))) : i = it(o)) : i = it(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i
  }

  function ot(e, t) {
   return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }

  function st(e, t) {
   t & 8 && (t |= t & 32);
   var n = e.entangledLanes;
   if (n !== 0)
    for (e = e.entanglements, n &= t; 0 < n;) {
     var r = 31 - Ze(n),
      i = 1 << r;
     t |= e[r], n &= ~i
    }
   return t
  }

  function ct(e, t) {
   switch (e) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
     return t + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
     return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
     return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
     return -1;
    default:
     return -1
   }
  }

  function lt() {
   var e = rt;
   return rt <<= 1, !(rt & 62914560) && (rt = 4194304), e
  }

  function ut(e) {
   for (var t = [], n = 0; 31 > n; n++) t.push(e);
   return t
  }

  function dt(e, t) {
   e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function ft(e, t, n, r, i, a) {
   var o = e.pendingLanes;
   e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
   var s = e.entanglements,
    c = e.expirationTimes,
    l = e.hiddenUpdates;
   for (n = o & ~n; 0 < n;) {
    var u = 31 - Ze(n),
     d = 1 << u;
    s[u] = 0, c[u] = -1;
    var f = l[u];
    if (f !== null)
     for (l[u] = null, u = 0; u < f.length; u++) {
      var p = f[u];
      p !== null && (p.lane &= -536870913)
     }
    n &= ~d
   }
   r !== 0 && pt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t))
  }

  function pt(e, t, n) {
   e.pendingLanes |= t, e.suspendedLanes &= ~t;
   var r = 31 - Ze(t);
   e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930
  }

  function mt(e, t) {
   var n = e.entangledLanes |= t;
   for (e = e.entanglements; n;) {
    var r = 31 - Ze(n),
     i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i
   }
  }

  function ht(e, t) {
   var n = t & -t;
   return n = n & 42 ? 1 : gt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0
  }

  function gt(e) {
   switch (e) {
    case 2:
     e = 1;
     break;
    case 8:
     e = 4;
     break;
    case 32:
     e = 16;
     break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
     e = 128;
     break;
    case 268435456:
     e = 134217728;
     break;
    default:
     e = 0
   }
   return e
  }

  function _t(e) {
   return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
  }

  function vt() {
   var e = z.p;
   return e === 0 ? (e = window.event, e === void 0 ? 32 : Eh(e.type)) : e
  }

  function yt(e, t) {
   var n = z.p;
   try {
    return z.p = e, t()
   } finally {
    z.p = n
   }
  }
  var bt = Math.random().toString(36).slice(2),
   xt = `__reactFiber$` + bt,
   St = `__reactProps$` + bt,
   Ct = `__reactContainer$` + bt,
   wt = `__reactEvents$` + bt,
   Tt = `__reactListeners$` + bt,
   Et = `__reactHandles$` + bt,
   Dt = `__reactResources$` + bt,
   Ot = `__reactMarker$` + bt,
   kt = `__reactLoad$` + bt;

  function At(e) {
   delete e[xt], delete e[St], delete e[Tt], delete e[Et]
  }

  function jt(e) {
   var t;
   if (t = e[xt]) return t;
   for (var n = e.parentNode; n;) {
    if (t = n[Ct] || n[xt]) {
     if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
      for (e = hm(e); e !== null;) {
       if (n = e[xt]) return n;
       e = hm(e)
      }
     return t
    }
    e = n, n = e.parentNode
   }
   return null
  }

  function Mt(e) {
   if (e = e[xt] || e[Ct]) {
    var t = e.tag;
    if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
   }
   return null
  }

  function Nt(e) {
   var t = e.tag;
   if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
   throw Error(i(33))
  }

  function Pt(e) {
   var t = e[Dt];
   return t || (t = e[Dt] = {
    hoistableStyles: new Map,
    hoistableScripts: new Map
   }), t
  }

  function Ft(e) {
   e[Ot] = !0
  }

  function It(e) {
   e[kt] = void 0
  }
  var Lt = new Set,
   Rt = {};

  function zt(e, t) {
   Bt(e, t), Bt(e + `Capture`, t)
  }

  function Bt(e, t) {
   for (Rt[e] = t, e = 0; e < t.length; e++) Lt.add(t[e])
  }
  var Vt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),
   Ht = {},
   Ut = {};

  function Wt(e) {
   return Pe.call(Ut, e) ? !0 : Pe.call(Ht, e) ? !1 : Vt.test(e) ? Ut[e] = !0 : (Ht[e] = !0, !1)
  }
  var B = !1;

  function Gt() {
   var e = B;
   return B = !1, e
  }

  function Kt(e, t, n) {
   if (Wt(t)) {
    if (n === null) e.removeAttribute(t);
    else {
     switch (typeof n) {
      case `undefined`:
      case `function`:
      case `symbol`:
       e.removeAttribute(t);
       return;
      case `boolean`:
       var r = t.toLowerCase().slice(0, 5);
       if (r !== `data-` && r !== `aria-`) {
        e.removeAttribute(t);
        return
       }
     }
     e.setAttribute(t, n)
    }
   }
  }

  function qt(e, t, n) {
   if (n === null) e.removeAttribute(t);
   else {
    switch (typeof n) {
     case `undefined`:
     case `function`:
     case `symbol`:
     case `boolean`:
      e.removeAttribute(t);
      return
    }
    e.setAttribute(t, n)
   }
  }

  function Jt(e, t, n, r) {
   if (r === null) e.removeAttribute(n);
   else {
    switch (typeof r) {
     case `undefined`:
     case `function`:
     case `symbol`:
     case `boolean`:
      e.removeAttribute(n);
      return
    }
    e.setAttributeNS(t, n, r)
   }
  }

  function Yt(e) {
   switch (typeof e) {
    case `bigint`:
    case `boolean`:
    case `number`:
    case `string`:
    case `undefined`:
     return e;
    case `object`:
     return e;
    default:
     return ``
   }
  }

  function Xt(e) {
   var t = e.type;
   return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
  }

  function Zt(e, t, n) {
   var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
   if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
    var i = r.get,
     a = r.set;
    return Object.defineProperty(e, t, {
     configurable: !0,
     get: function() {
      return i.call(this)
     },
     set: function(e) {
      n = `` + e, a.call(this, e)
     }
    }), Object.defineProperty(e, t, {
     enumerable: r.enumerable
    }), {
     getValue: function() {
      return n
     },
     setValue: function(e) {
      n = `` + e
     },
     stopTracking: function() {
      e._valueTracker = null, delete e[t]
     }
    }
   }
  }

  function Qt(e) {
   if (!e._valueTracker) {
    var t = Xt(e) ? `checked` : `value`;
    e._valueTracker = Zt(e, t, `` + e[t])
   }
  }

  function $t(e) {
   if (!e) return !1;
   var t = e._valueTracker;
   if (!t) return !0;
   var n = t.getValue(),
    r = ``;
   return e && (r = Xt(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), !0)
  }
  var en = /[\n"\\]/g;

  function tn(e) {
   return e.replace(en, function(e) {
    return `\\` + e.charCodeAt(0).toString(16) + ` `
   })
  }

  function nn(e, t, n, r, i, a, o, s) {
   e.name = ``, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`), t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Yt(t)) : e.value !== `` + Yt(t) && (e.value = `` + Yt(t)), t == null ? n == null ? r != null && e.removeAttribute(`value`) : an(e, Yt(n)) : o === `number` && e.value == t ? an(e, Yt(e.value)) : an(e, Yt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`), s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Yt(s) : e.removeAttribute(`name`)
  }

  function rn(e, t, n, r, i, a, o, s) {
   if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a), t != null || n != null) {
    if (!(a !== `submit` && a !== `reset` || t != null)) {
     Qt(e);
     return
    }
    n = n == null ? `` : `` + Yt(n), t = t == null ? n : `` + Yt(t), s || t === e.value || (e.value = t), e.defaultValue = t
   }
   r = r ?? i, r = typeof r != `function` && typeof r != `symbol` && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o), Qt(e)
  }

  function an(e, t) {
   e.defaultValue !== `` + t && (e.defaultValue = `` + t)
  }

  function on(e, t, n, r) {
   if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty(`$` + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
   } else {
    for (n = `` + Yt(n), t = null, i = 0; i < e.length; i++) {
     if (e[i].value === n) {
      e[i].selected = !0, r && (e[i].defaultSelected = !0);
      return
     }
     t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
   }
  }

  function sn(e, t, n) {
   t != null && (t = `` + Yt(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? `` : `` + Yt(n)
  }

  function cn(e, t, n, r) {
   if (t == null) {
    if (r != null) {
     if (n != null) throw Error(i(92));
     if (fe(r)) {
      if (1 < r.length) throw Error(i(93));
      r = r[0]
     }
     n = r
    }
    n ?? (n = ``), t = n
   }
   n = Yt(t), e.defaultValue = n, r = e.textContent, r === n && r !== `` && r !== null && (e.value = r), Qt(e)
  }

  function ln(e, t) {
   if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
     n.nodeValue = t;
     return
    }
   }
   e.textContent = t
  }
  var un = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));

  function dn(e, t, n) {
   var r = t.indexOf(`--`) === 0;
   n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || un.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`
  }

  function fn(e, t, n) {
   if (t != null && typeof t != `object`) throw Error(i(62));
   if (e = e.style, n != null) {
    for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``, B = !0);
    for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (dn(e, a, r), B = !0)
   } else
    for (var o in t) t.hasOwnProperty(o) && dn(e, o, t[o])
  }

  function pn(e) {
   if (e.indexOf(`-`) === -1) return !1;
   switch (e) {
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
     return !1;
    default:
     return !0
   }
  }
  var mn = new Map([
    [`acceptCharset`, `accept-charset`],
    [`htmlFor`, `for`],
    [`httpEquiv`, `http-equiv`],
    [`crossOrigin`, `crossorigin`],
    [`accentHeight`, `accent-height`],
    [`alignmentBaseline`, `alignment-baseline`],
    [`arabicForm`, `arabic-form`],
    [`baselineShift`, `baseline-shift`],
    [`capHeight`, `cap-height`],
    [`clipPath`, `clip-path`],
    [`clipRule`, `clip-rule`],
    [`colorInterpolation`, `color-interpolation`],
    [`colorInterpolationFilters`, `color-interpolation-filters`],
    [`colorProfile`, `color-profile`],
    [`colorRendering`, `color-rendering`],
    [`dominantBaseline`, `dominant-baseline`],
    [`enableBackground`, `enable-background`],
    [`fillOpacity`, `fill-opacity`],
    [`fillRule`, `fill-rule`],
    [`floodColor`, `flood-color`],
    [`floodOpacity`, `flood-opacity`],
    [`fontFamily`, `font-family`],
    [`fontSize`, `font-size`],
    [`fontSizeAdjust`, `font-size-adjust`],
    [`fontStretch`, `font-stretch`],
    [`fontStyle`, `font-style`],
    [`fontVariant`, `font-variant`],
    [`fontWeight`, `font-weight`],
    [`glyphName`, `glyph-name`],
    [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
    [`glyphOrientationVertical`, `glyph-orientation-vertical`],
    [`horizAdvX`, `horiz-adv-x`],
    [`horizOriginX`, `horiz-origin-x`],
    [`imageRendering`, `image-rendering`],
    [`letterSpacing`, `letter-spacing`],
    [`lightingColor`, `lighting-color`],
    [`markerEnd`, `marker-end`],
    [`markerMid`, `marker-mid`],
    [`markerStart`, `marker-start`],
    [`maskType`, `mask-type`],
    [`overlinePosition`, `overline-position`],
    [`overlineThickness`, `overline-thickness`],
    [`paintOrder`, `paint-order`],
    [`panose-1`, `panose-1`],
    [`pointerEvents`, `pointer-events`],
    [`renderingIntent`, `rendering-intent`],
    [`shapeRendering`, `shape-rendering`],
    [`stopColor`, `stop-color`],
    [`stopOpacity`, `stop-opacity`],
    [`strikethroughPosition`, `strikethrough-position`],
    [`strikethroughThickness`, `strikethrough-thickness`],
    [`strokeDasharray`, `stroke-dasharray`],
    [`strokeDashoffset`, `stroke-dashoffset`],
    [`strokeLinecap`, `stroke-linecap`],
    [`strokeLinejoin`, `stroke-linejoin`],
    [`strokeMiterlimit`, `stroke-miterlimit`],
    [`strokeOpacity`, `stroke-opacity`],
    [`strokeWidth`, `stroke-width`],
    [`textAnchor`, `text-anchor`],
    [`textDecoration`, `text-decoration`],
    [`textRendering`, `text-rendering`],
    [`transformOrigin`, `transform-origin`],
    [`underlinePosition`, `underline-position`],
    [`underlineThickness`, `underline-thickness`],
    [`unicodeBidi`, `unicode-bidi`],
    [`unicodeRange`, `unicode-range`],
    [`unitsPerEm`, `units-per-em`],
    [`vAlphabetic`, `v-alphabetic`],
    [`vHanging`, `v-hanging`],
    [`vIdeographic`, `v-ideographic`],
    [`vMathematical`, `v-mathematical`],
    [`vectorEffect`, `vector-effect`],
    [`vertAdvY`, `vert-adv-y`],
    [`vertOriginX`, `vert-origin-x`],
    [`vertOriginY`, `vert-origin-y`],
    [`wordSpacing`, `word-spacing`],
    [`writingMode`, `writing-mode`],
    [`xmlnsXlink`, `xmlns:xlink`],
    [`xHeight`, `x-height`]
   ]),
   hn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function gn(e) {
   return hn.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e
  }

  function _n() {}
  var vn = null;

  function yn(e) {
   return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var bn = null,
   xn = null;

  function Sn(e) {
   var t = Mt(e);
   if (t && (e = t.stateNode)) {
    var n = e[St] || null;
    a: switch (e = t.stateNode, t.type) {
     case `input`:
      if (nn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === `radio` && t != null) {
       for (n = e; n.parentNode;) n = n.parentNode;
       for (n = n.querySelectorAll(`input[name="` + tn(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
        var r = n[t];
        if (r !== e && r.form === e.form) {
         var a = r[St] || null;
         if (!a) throw Error(i(90));
         nn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
        }
       }
       for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && $t(r)
      }
      break a;
     case `textarea`:
      sn(e, n.value, n.defaultValue);
      break a;
     case `select`:
      t = n.value, t != null && on(e, !!n.multiple, t, !1)
    }
   }
  }
  var Cn = !1;

  function wn(e, t, n) {
   if (Cn) return e(t, n);
   Cn = !0;
   try {
    return e(t)
   } finally {
    if (Cn = !1, (bn !== null || xn !== null) && (Vd(), bn && (t = bn, e = xn, xn = bn = null, Sn(t), e)))
     for (t = 0; t < e.length; t++) Sn(e[t])
   }
  }

  function Tn(e, t) {
   var n = e.stateNode;
   if (n === null) return null;
   var r = n[St] || null;
   if (r === null) return null;
   n = r[t];
   a: switch (t) {
    case `onClick`:
    case `onClickCapture`:
    case `onDoubleClick`:
    case `onDoubleClickCapture`:
    case `onMouseDown`:
    case `onMouseDownCapture`:
    case `onMouseMove`:
    case `onMouseMoveCapture`:
    case `onMouseUp`:
    case `onMouseUpCapture`:
    case `onMouseEnter`:
     (r = !r.disabled) || (e = e.type, r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`), e = !r;
     break a;
    default:
     e = !1
   }
   if (e) return null;
   if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
   return n
  }
  var En = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0,
   Dn = !1;
  if (En) try {
   var On = {};
   Object.defineProperty(On, "passive", {
    get: function() {
     Dn = !0
    }
   }), window.addEventListener(`test`, On, On), window.removeEventListener(`test`, On, On)
  } catch {
   Dn = !1
  }
  var kn = null,
   An = null,
   jn = null;

  function Mn() {
   if (jn) return jn;
   var e, t = An,
    n = t.length,
    r, i = `value` in kn ? kn.value : kn.textContent,
    a = i.length;
   for (e = 0; e < n && t[e] === i[e]; e++);
   var o = n - e;
   for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
   return jn = i.slice(e, 1 < r ? 1 - r : void 0)
  }

  function Nn(e) {
   var t = e.keyCode;
   return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function Pn() {
   return !0
  }

  function Fn() {
   return !1
  }

  function In(e) {
   function t(t, n, r, i, a) {
    for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Pn : Fn, this.isPropagationStopped = Fn, this
   }
   return D(t.prototype, {
    preventDefault: function() {
     this.defaultPrevented = !0;
     var e = this.nativeEvent;
     e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1), this.isDefaultPrevented = Pn)
    },
    stopPropagation: function() {
     var e = this.nativeEvent;
     e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0), this.isPropagationStopped = Pn)
    },
    persist: function() {},
    isPersistent: Pn
   }), t
  }
  var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
     return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
   },
   Rn = In(Ln),
   zn = D({}, Ln, {
    view: 0,
    detail: 0
   }),
   Bn = In(zn),
   Vn, Hn, Un, Wn = D({}, zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
     return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
     return `movementX` in e ? e.movementX : (e !== Un && (Un && e.type === `mousemove` ? (Vn = e.screenX - Un.screenX, Hn = e.screenY - Un.screenY) : Hn = Vn = 0, Un = e), Vn)
    },
    movementY: function(e) {
     return `movementY` in e ? e.movementY : Hn
    }
   }),
   Gn = In(Wn),
   Kn = In(D({}, Wn, {
    dataTransfer: 0
   })),
   qn = In(D({}, zn, {
    relatedTarget: 0
   })),
   Jn = In(D({}, Ln, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
   })),
   Yn = In(D({}, Ln, {
    clipboardData: function(e) {
     return `clipboardData` in e ? e.clipboardData : window.clipboardData
    }
   })),
   Xn = In(D({}, Ln, {
    data: 0
   })),
   Zn = {
    Esc: `Escape`,
    Spacebar: ` `,
    Left: `ArrowLeft`,
    Up: `ArrowUp`,
    Right: `ArrowRight`,
    Down: `ArrowDown`,
    Del: `Delete`,
    Win: `OS`,
    Menu: `ContextMenu`,
    Apps: `ContextMenu`,
    Scroll: `ScrollLock`,
    MozPrintableKey: `Unidentified`
   },
   Qn = {
    8: `Backspace`,
    9: `Tab`,
    12: `Clear`,
    13: `Enter`,
    16: `Shift`,
    17: `Control`,
    18: `Alt`,
    19: `Pause`,
    20: `CapsLock`,
    27: `Escape`,
    32: ` `,
    33: `PageUp`,
    34: `PageDown`,
    35: `End`,
    36: `Home`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    45: `Insert`,
    46: `Delete`,
    112: `F1`,
    113: `F2`,
    114: `F3`,
    115: `F4`,
    116: `F5`,
    117: `F6`,
    118: `F7`,
    119: `F8`,
    120: `F9`,
    121: `F10`,
    122: `F11`,
    123: `F12`,
    144: `NumLock`,
    145: `ScrollLock`,
    224: `Meta`
   },
   $n = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
   };

  function er(e) {
   var t = this.nativeEvent;
   return t.getModifierState ? t.getModifierState(e) : (e = $n[e]) ? !!t[e] : !1
  }

  function tr() {
   return er
  }
  var nr = In(D({}, zn, {
    key: function(e) {
     if (e.key) {
      var t = Zn[e.key] || e.key;
      if (t !== `Unidentified`) return t
     }
     return e.type === `keypress` ? (e = Nn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Qn[e.keyCode] || `Unidentified` : ``
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tr,
    charCode: function(e) {
     return e.type === `keypress` ? Nn(e) : 0
    },
    keyCode: function(e) {
     return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
    },
    which: function(e) {
     return e.type === `keypress` ? Nn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
    }
   })),
   rr = In(D({}, Wn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
   })),
   ir = In(D({}, Ln, {
    submitter: 0
   })),
   ar = In(D({}, zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tr
   })),
   or = In(D({}, Ln, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
   })),
   sr = In(D({}, Wn, {
    deltaX: function(e) {
     return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
     return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
   })),
   cr = In(D({}, Ln, {
    newState: 0,
    oldState: 0,
    source: 0
   })),
   lr = [9, 13, 27, 32],
   ur = En && `CompositionEvent` in window,
   dr = null;
  En && `documentMode` in document && (dr = document.documentMode);
  var fr = En && `TextEvent` in window && !dr,
   pr = En && (!ur || dr && 8 < dr && 11 >= dr),
   mr = ` `,
   hr = !1;

  function gr(e, t) {
   switch (e) {
    case `keyup`:
     return lr.indexOf(t.keyCode) !== -1;
    case `keydown`:
     return t.keyCode !== 229;
    case `keypress`:
    case `mousedown`:
    case `focusout`:
     return !0;
    default:
     return !1
   }
  }

  function _r(e) {
   return e = e.detail, typeof e == `object` && `data` in e ? e.data : null
  }
  var vr = !1;

  function yr(e, t) {
   switch (e) {
    case `compositionend`:
     return _r(t);
    case `keypress`:
     return t.which === 32 ? (hr = !0, mr) : null;
    case `textInput`:
     return e = t.data, e === mr && hr ? null : e;
    default:
     return null
   }
  }

  function br(e, t) {
   if (vr) return e === `compositionend` || !ur && gr(e, t) ? (e = Mn(), jn = An = kn = null, vr = !1, e) : null;
   switch (e) {
    case `paste`:
     return null;
    case `keypress`:
     if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
      if (t.char && 1 < t.char.length) return t.char;
      if (t.which) return String.fromCharCode(t.which)
     }
     return null;
    case `compositionend`:
     return pr && t.locale !== `ko` ? null : t.data;
    default:
     return null
   }
  }
  var xr = {
   color: !0,
   date: !0,
   datetime: !0,
   "datetime-local": !0,
   email: !0,
   month: !0,
   number: !0,
   password: !0,
   range: !0,
   search: !0,
   tel: !0,
   text: !0,
   time: !0,
   url: !0,
   week: !0
  };

  function Sr(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t === `input` ? !!xr[e.type] : t === `textarea`
  }

  function Cr(e, t, n, r) {
   bn ? xn ? xn.push(r) : xn = [r] : bn = r, t = Zf(t, `onChange`), 0 < t.length && (n = new Rn(`onChange`, `change`, null, n, r), e.push({
    event: n,
    listeners: t
   }))
  }
  var wr = null,
   Tr = null;

  function Er(e) {
   Wf(e, 0)
  }

  function Dr(e) {
   if ($t(Nt(e))) return e
  }

  function Or(e, t) {
   if (e === `change`) return t
  }
  var kr = !1;
  if (En) {
   var Ar;
   if (En) {
    var jr = `oninput` in document;
    if (!jr) {
     var Mr = document.createElement(`div`);
     Mr.setAttribute(`oninput`, `return;`), jr = typeof Mr.oninput == `function`
    }
    Ar = jr
   } else Ar = !1;
   kr = Ar && (!document.documentMode || 9 < document.documentMode)
  }

  function Nr() {
   wr && (wr.detachEvent(`onpropertychange`, Pr), Tr = wr = null)
  }

  function Pr(e) {
   if (e.propertyName === `value` && Dr(Tr)) {
    var t = [];
    Cr(t, Tr, e, yn(e)), wn(Er, t)
   }
  }

  function Fr(e, t, n) {
   e === `focusin` ? (Nr(), wr = t, Tr = n, wr.attachEvent(`onpropertychange`, Pr)) : e === `focusout` && Nr()
  }

  function Ir(e) {
   if (e === `selectionchange` || e === `keyup` || e === `keydown`) return Dr(Tr)
  }

  function Lr(e, t) {
   if (e === `click`) return Dr(t)
  }

  function Rr(e, t) {
   if (e === `input` || e === `change`) return Dr(t)
  }

  function zr(e, t) {
   return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
  }
  var Br = typeof Object.is == `function` ? Object.is : zr;

  function Vr(e, t) {
   if (Br(e, t)) return !0;
   if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
   var n = Object.keys(e),
    r = Object.keys(t);
   if (n.length !== r.length) return !1;
   for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Pe.call(t, i) || !Br(e[i], t[i])) return !1
   }
   return !0
  }

  function Hr(e) {
   if (e = e || (typeof document < `u` ? document : void 0), e === void 0) return null;
   try {
    return e.activeElement || e.body
   } catch {
    return e.body
   }
  }

  function Ur(e) {
   for (; e && e.firstChild;) e = e.firstChild;
   return e
  }

  function Wr(e, t) {
   var n = Ur(e);
   e = 0;
   for (var r; n;) {
    if (n.nodeType === 3) {
     if (r = e + n.textContent.length, e <= t && r >= t) return {
      node: n,
      offset: t - e
     };
     e = r
    }
    a: {
     for (; n;) {
      if (n.nextSibling) {
       n = n.nextSibling;
       break a
      }
      n = n.parentNode
     }
     n = void 0
    }
    n = Ur(n)
   }
  }

  function Gr(e, t) {
   return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function Kr(e) {
   e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
   for (var t = Hr(e.document); t instanceof e.HTMLIFrameElement;) {
    try {
     var n = typeof t.contentWindow.location.href == `string`
    } catch {
     n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hr(e.document)
   }
   return t
  }

  function qr(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
  }
  var Jr = En && `documentMode` in document && 11 >= document.documentMode,
   Yr = null,
   Xr = null,
   Zr = null,
   Qr = !1;

  function $r(e, t, n) {
   var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
   Qr || Yr == null || Yr !== Hr(r) || (r = Yr, `selectionStart` in r && qr(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
   } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
   }), Zr && Vr(Zr, r) || (Zr = r, r = Zf(Xr, `onSelect`), 0 < r.length && (t = new Rn(`onSelect`, `select`, null, t, n), e.push({
    event: t,
    listeners: r
   }), t.target = Yr)))
  }

  function ei(e, t) {
   var n = {};
   return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n
  }
  var ti = {
    animationend: ei(`Animation`, `AnimationEnd`),
    animationiteration: ei(`Animation`, `AnimationIteration`),
    animationstart: ei(`Animation`, `AnimationStart`),
    transitionrun: ei(`Transition`, `TransitionRun`),
    transitionstart: ei(`Transition`, `TransitionStart`),
    transitioncancel: ei(`Transition`, `TransitionCancel`),
    transitionend: ei(`Transition`, `TransitionEnd`)
   },
   ni = {},
   ri = {};
  En && (ri = document.createElement(`div`).style, `AnimationEvent` in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), `TransitionEvent` in window || delete ti.transitionend.transition);

  function ii(e) {
   if (ni[e]) return ni[e];
   if (!ti[e]) return e;
   var t = ti[e],
    n;
   for (n in t)
    if (t.hasOwnProperty(n) && n in ri) return ni[e] = t[n];
   return e
  }
  var ai = ii(`animationend`),
   oi = ii(`animationiteration`),
   si = ii(`animationstart`),
   ci = ii(`transitionrun`),
   li = ii(`transitionstart`),
   ui = ii(`transitioncancel`),
   di = ii(`transitionend`),
   fi = new Map,
   pi = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  pi.push(`scrollEnd`);

  function mi(e, t) {
   fi.set(e, t), zt(t, [e])
  }
  var hi = 0;

  function gi(e, t) {
   if (e.name != null && e.name !== `auto`) return e.name;
   if (t.autoName !== null) return t.autoName;
   e = Sd.identifierPrefix;
   var n = hi++;
   return e = `_` + e + `t_` + n.toString(32) + `_`, t.autoName = e
  }

  function _i(e) {
   if (e == null || typeof e == `string`) return e;
   var t = null,
    n = Ad;
   if (n !== null)
    for (var r = 0; r < n.length; r++) {
     var i = e[n[r]];
     if (i != null) {
      if (i === `none`) return `none`;
      t = t == null ? i : t + (` ` + i)
     }
    }
   return t ?? e.default
  }

  function vi(e, t) {
   return e = _i(e), t = _i(t), t == null ? e === `auto` ? null : e : t === `auto` ? null : t
  }
  var yi = typeof reportError == `function` ? reportError : function(e) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
     var t = new window.ErrorEvent(`error`, {
      bubbles: !0,
      cancelable: !0,
      message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
      error: e
     });
     if (!window.dispatchEvent(t)) return
    } else if (typeof process == `object` && typeof process.emit == `function`) {
     process.emit(`uncaughtException`, e);
     return
    }
    console.error(e)
   },
   bi = [],
   xi = 0,
   Si = 0;

  function Ci() {
   for (var e = xi, t = Si = xi = 0; t < e;) {
    var n = bi[t];
    bi[t++] = null;
    var r = bi[t];
    bi[t++] = null;
    var i = bi[t];
    bi[t++] = null;
    var a = bi[t];
    if (bi[t++] = null, r !== null && i !== null) {
     var o = r.pending;
     o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i
    }
    a !== 0 && Di(n, i, a)
   }
  }

  function wi(e, t, n, r) {
   bi[xi++] = e, bi[xi++] = t, bi[xi++] = n, bi[xi++] = r, Si |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r)
  }

  function Ti(e, t, n, r) {
   return wi(e, t, n, r), Oi(e)
  }

  function Ei(e, t) {
   return wi(e, null, null, t), Oi(e)
  }

  function Di(e, t, n) {
   e.lanes |= n;
   var r = e.alternate;
   r !== null && (r.lanes |= n);
   for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
   return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ze(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null
  }

  function Oi(e) {
   if (50 < jd) throw jd = 0, Md = null, Error(i(185));
   for (var t = e.return; t !== null;) e = t, t = e.return;
   return e.tag === 3 ? e.stateNode : null
  }
  var ki = {};

  function Ai(e, t, n, r) {
   this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function ji(e, t, n, r) {
   return new Ai(e, t, n, r)
  }

  function Mi(e) {
   return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function Ni(e, t) {
   var n = e.alternate;
   return n === null ? (n = ji(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
   }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
  }

  function Pi(e, t) {
   e.flags &= 1206910978;
   var n = e.alternate;
   return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
   }), e
  }

  function Fi(e, t, n, r, a, o) {
   var s = 0;
   if (r = e, typeof r == `function`) Mi(r) && (s = 1);
   else if (typeof r == `string`) s = Xm(e, n, ye.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
   else a: switch (r) {
    case ie:
     return e = ji(31, n, t, a), e.elementType = ie, e.lanes = o, e;
    case j:
     return Ii(n.children, a, o, t);
    case M:
     s = 8, a |= 24;
     break;
    case N:
     return e = ji(12, n, t, a | 2), e.elementType = N, e.lanes = o, e;
    case te:
     return e = ji(13, n, t, a), e.elementType = te, e.lanes = o, e;
    case ne:
     return e = ji(19, n, t, a), e.elementType = ne, e.lanes = o, e;
    case L:
    case oe:
     return e = a | 32, e = ji(30, n, t, e), e.elementType = oe, e.lanes = o, e.stateNode = {
      autoName: null,
      paired: null,
      clones: null,
      ref: null
     }, e;
    default:
     if (typeof r == `object` && r) switch (r.$$typeof) {
      case F:
       s = 10;
       break a;
      case P:
       s = 9;
       break a;
      case ee:
       s = 11;
       break a;
      case re:
       s = 14;
       break a;
      case I:
       s = 16, r = null;
       break a
     }
     s = 29, n = Error(i(130, e === null ? `null` : typeof e, ``)), r = null
   }
   return t = ji(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t
  }

  function Ii(e, t, n, r) {
   return e = ji(7, e, r, t), e.lanes = n, e
  }

  function Li(e, t, n) {
   return e = ji(6, e, null, t), e.lanes = n, e
  }

  function Ri(e) {
   var t = ji(18, null, null, 0);
   return t.stateNode = e, t
  }

  function zi(e, t, n) {
   return t = ji(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
   }, t
  }
  var Bi = new WeakMap;

  function Vi(e, t) {
   if (typeof e == `object` && e) {
    var n = Bi.get(e);
    return n === void 0 ? (t = {
     value: e,
     source: t,
     stack: Ne(t)
    }, Bi.set(e, t), t) : n
   }
   return {
    value: e,
    source: t,
    stack: Ne(t)
   }
  }
  var Hi = [],
   Ui = 0,
   Wi = null,
   Gi = 0,
   Ki = [],
   qi = 0,
   Ji = null,
   Yi = 1,
   Xi = ``;

  function Zi(e, t) {
   Hi[Ui++] = Gi, Hi[Ui++] = Wi, Wi = e, Gi = t
  }

  function Qi(e, t, n) {
   Ki[qi++] = Yi, Ki[qi++] = Xi, Ki[qi++] = Ji, Ji = e;
   var r = Yi;
   e = Xi;
   var i = 32 - Ze(r) - 1;
   r &= ~(1 << i), n += 1;
   var a = 32 - Ze(t) + i;
   if (30 < a) {
    var o = i - i % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Yi = 1 << 32 - Ze(t) + i | n << i | r, Xi = a + e
   } else Yi = 1 << a | n << i | r, Xi = e
  }

  function $i(e) {
   e.return !== null && (Zi(e, 1), Qi(e, 1, 0))
  }

  function ea(e) {
   for (; e === Wi;) Wi = Hi[--Ui], Hi[Ui] = null, Gi = Hi[--Ui], Hi[Ui] = null;
   for (; e === Ji;) Ji = Ki[--qi], Ki[qi] = null, Xi = Ki[--qi], Ki[qi] = null, Yi = Ki[--qi], Ki[qi] = null
  }

  function ta(e, t) {
   Ki[qi++] = Yi, Ki[qi++] = Xi, Ki[qi++] = Ji, Yi = t.id, Xi = t.overflow, Ji = e
  }
  var na = null,
   ra = null,
   V = !1,
   ia = null,
   aa = !1,
   oa = Error(i(519));

  function sa(e) {
   throw pa(Vi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)), oa
  }

  function ca(e) {
   var t = e.stateNode,
    n = e.type,
    r = e.memoizedProps;
   switch (t[xt] = e, t[St] = r, n) {
    case `dialog`:
     Y(`cancel`, t), Y(`close`, t);
     break;
    case `iframe`:
    case `object`:
    case `embed`:
     Y(`load`, t);
     break;
    case `video`:
    case `audio`:
     for (n = 0; n < Hf.length; n++) Y(Hf[n], t);
     break;
    case `source`:
     Y(`error`, t);
     break;
    case `img`:
    case `image`:
    case `link`:
     Y(`error`, t), Y(`load`, t);
     break;
    case `details`:
     Y(`toggle`, t);
     break;
    case `input`:
     Y(`invalid`, t), rn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
     break;
    case `select`:
     Y(`invalid`, t);
     break;
    case `textarea`:
     Y(`invalid`, t), cn(t, r.value, r.defaultValue, r.children)
   }
   n = r.children, typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || rp(t.textContent, n) ? (r.popover != null && (Y(`beforetoggle`, t), Y(`toggle`, t)), r.onScroll != null && Y(`scroll`, t), r.onScrollEnd != null && Y(`scrollend`, t), r.onClick != null && (t.onclick = _n), t = !0) : t = !1, t || sa(e, !0)
  }

  function la(e) {
   for (na = e.return; na;) switch (na.tag) {
    case 5:
    case 31:
    case 13:
     aa = !1;
     return;
    case 27:
    case 3:
     aa = !0;
     return;
    default:
     na = na.return
   }
  }

  function ua(e) {
   if (e !== na) return !1;
   if (!V) return la(e), V = !0, !1;
   var t = e.tag,
    n;
   if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === `form` || n === `button` || _p(e.type, e.memoizedProps)), n = !n), n && ra && sa(e), la(e), t === 13) {
    if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
    ra = mm(e)
   } else if (t === 31) {
    if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
    ra = mm(e)
   } else t === 27 ? (t = ra, Tp(e.type) ? (e = pm, pm = null, ra = e) : ra = t) : ra = na ? fm(e.stateNode.nextSibling) : null;
   return !0
  }

  function da() {
   ra = na = null, V = !1
  }

  function fa() {
   var e = ia;
   return e !== null && (md === null ? md = e : md.push.apply(md, e), ia = null), e
  }

  function pa(e) {
   ia === null ? ia = [e] : ia.push(e)
  }
  var ma = ge(null),
   ha = null,
   ga = null;

  function _a(e, t, n) {
   ve(ma, t._currentValue), t._currentValue = n
  }

  function va(e) {
   e._currentValue = ma.current, _e(ma)
  }

  function ya(e, t, n) {
   for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
    e = e.return
   }
  }

  function ba(e, t, n, r) {
   var a = e.child;
   for (a !== null && (a.return = e); a !== null;) {
    var o = a.dependencies;
    if (o !== null) {
     var s = a.child;
     o = o.firstContext;
     a: for (; o !== null;) {
      var c = o;
      o = a;
      for (var l = 0; l < t.length; l++)
       if (c.context === t[l]) {
        o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ya(o.return, n, e), r || (s = null);
        break a
       } o = c.next
     }
    } else if (a.tag === 18) {
     if (s = a.return, s === null) throw Error(i(341));
     s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ya(s, n, e), s = null
    } else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ya(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
    if (s !== null) s.return = a;
    else
     for (s = a; s !== null;) {
      if (s === e) {
       s = null;
       break
      }
      if (a = s.sibling, a !== null) {
       a.return = s.return, s = a;
       break
      }
      s = s.return
     }
    a = s
   }
  }

  function xa(e, t, n, r) {
   e = null;
   for (var a = t, o = !1; a !== null;) {
    if (!o) {
     if (a.flags & 524288) o = !0;
     else if (a.flags & 262144) break
    }
    if (a.tag === 10) {
     var s = a.alternate;
     if (s === null) throw Error(i(387));
     if (s = s.memoizedProps, s !== null) {
      var c = a.type;
      Br(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c))
     }
    } else if (a === Se.current) {
     if (s = a.alternate, s === null) throw Error(i(387));
     s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [uh] : e.push(uh))
    }
    a = a.return
   }
   return e !== null && ba(t, e, n, r), t.flags |= 262144, e !== null
  }

  function Sa(e) {
   for (e = e.firstContext; e !== null;) {
    if (!Br(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next
   }
   return !1
  }

  function Ca(e) {
   ha = e, ga = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function wa(e) {
   return Ea(ha, e)
  }

  function Ta(e, t) {
   return ha === null && Ca(e), Ea(e, t)
  }

  function Ea(e, t) {
   var n = t._currentValue;
   if (t = {
     context: t,
     memoizedValue: n,
     next: null
    }, ga === null) {
    if (e === null) throw Error(i(308));
    ga = t, e.dependencies = {
     lanes: 0,
     firstContext: t
    }, e.flags |= 524288
   } else ga = ga.next = t;
   return n
  }
  var Da = typeof AbortController < `u` ? AbortController : function() {
    var e = [],
     t = this.signal = {
      aborted: !1,
      addEventListener: function(t, n) {
       e.push(n)
      }
     };
    this.abort = function() {
     t.aborted = !0, e.forEach(function(e) {
      return e()
     })
    }
   },
   Oa = t.unstable_scheduleCallback,
   ka = t.unstable_NormalPriority,
   Aa = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
   };

  function ja() {
   return {
    controller: new Da,
    data: new Map,
    refCount: 0
   }
  }

  function Ma(e) {
   e.refCount--, e.refCount === 0 && Oa(ka, function() {
    e.controller.abort()
   })
  }

  function Na(e, t) {
   if (e.pendingLanes & 4194048) {
    var n = e.transitionTypes;
    for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
     var r = t[e];
     n.indexOf(r) === -1 && n.push(r)
    }
   }
  }
  var Pa = null;

  function Fa(e) {
   var t = e.transitionTypes;
   return e.transitionTypes = null, t
  }
  var Ia = null,
   La = 0,
   Ra = 0,
   za = null;

  function Ba(e, t) {
   if (Ia === null) {
    var n = Ia = [];
    La = 0, Ra = Lf(), za = {
     status: `pending`,
     value: void 0,
     then: function(e) {
      n.push(e)
     }
    }
   }
   return La++, t.then(Va, Va), t
  }

  function Va() {
   if (--La === 0 && (Pa = null, Ia !== null)) {
    za !== null && (za.status = `fulfilled`);
    var e = Ia;
    Ia = null, Ra = 0, za = null;
    for (var t = 0; t < e.length; t++)(0, e[t])()
   }
  }

  function Ha(e, t) {
   var n = [],
    r = {
     status: `pending`,
     value: null,
     reason: null,
     then: function(e) {
      n.push(e)
     }
    };
   return e.then(function() {
    r.status = `fulfilled`, r.value = t;
    for (var e = 0; e < n.length; e++)(0, n[e])(t)
   }, function(e) {
    for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)(0, n[e])(void 0)
   }), r
  }
  var Ua = R.S;
  R.S = function(e, t) {
   if (_d = ze(), typeof t == `object` && t && typeof t.then == `function` && Ba(e, t), Pa !== null)
    for (var n = Cf; n !== null;) Na(n, Pa), n = n.next;
   if (n = e.types, n !== null) {
    for (var r = Cf; r !== null;) Na(r, n), r = r.next;
    if (Ra !== 0) {
     r = Pa, r === null && (r = Pa = []);
     for (var i = 0; i < n.length; i++) {
      var a = n[i];
      r.indexOf(a) === -1 && r.push(a)
     }
    }
   }
   Ua !== null && Ua(e, t)
  };
  var Wa = ge(null);

  function Ga() {
   var e = Wa.current;
   return e === null ? ed.pooledCache : e
  }

  function Ka(e, t) {
   t === null ? ve(Wa, Wa.current) : ve(Wa, t.pool)
  }

  function qa() {
   var e = Ga();
   return e === null ? null : {
    parent: Aa._currentValue,
    pool: e
   }
  }
  var Ja = Error(i(460)),
   Ya = Error(i(474)),
   Xa = Error(i(542)),
   Za = {
    then: function() {}
   };

  function Qa(e) {
   return e = e.status, e === `fulfilled` || e === `rejected`
  }

  function $a(e, t, n) {
   switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(_n, _n), t = n), t.status) {
    case `fulfilled`:
     return t.value;
    case `rejected`:
     throw e = t.reason, ro(e), e === void 0 && !(`reason` in t) ? Error(i(600)) : e;
    default:
     if (typeof t.status == `string`) t.then(_n, _n);
     else {
      if (e = ed, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
      e = t, e.status = `pending`, e.then(function(e) {
       if (t.status === `pending`) {
        var n = t;
        n.status = `fulfilled`, n.value = e
       }
      }, function(e) {
       if (t.status === `pending`) {
        var n = t;
        n.status = `rejected`, n.reason = e
       }
      })
     }
     switch (t.status) {
      case `fulfilled`:
       return t.value;
      case `rejected`:
       throw e = t.reason, ro(e), e
     }
     throw to = t, Ja
   }
  }

  function eo(e) {
   try {
    var t = e._init;
    return t(e._payload)
   } catch (e) {
    throw typeof e == `object` && e && typeof e.then == `function` ? (to = e, Ja) : e
   }
  }
  var to = null;

  function no() {
   if (to === null) throw Error(i(459));
   var e = to;
   return to = null, e
  }

  function ro(e) {
   if (e === Ja || e === Xa) throw Error(i(483))
  }
  var io = null,
   ao = 0;

  function oo(e) {
   var t = ao;
   return ao += 1, io === null && (io = []), $a(io, e, t)
  }

  function so(e, t) {
   t = t.props.ref, e.ref = t === void 0 ? null : t
  }

  function co(e, t) {
   throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)))
  }

  function lo(e) {
   function t(t, n) {
    if (e) {
     var r = t.deletions;
     r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n)
    }
   }

   function n(n, r) {
    if (!e) return null;
    for (; r !== null;) t(n, r), r = r.sibling;
    return null
   }

   function r(e) {
    for (var t = new Map; e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
    return t
   }

   function a(e, t) {
    return e = Ni(e, t), e.index = 0, e.sibling = null, e
   }

   function o(t, n, r) {
    return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n)
   }

   function s(t) {
    return e && t.alternate === null && (t.flags |= 134217730), t
   }

   function c(e, t, n, r) {
    return t === null || t.tag !== 6 ? (t = Li(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t)
   }

   function l(e, t, n, r) {
    var i = n.type;
    return i === j ? (e = d(e, t, n.props.children, r, n.key), so(e, n), e) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === I && eo(i) === t.type) ? (t = a(t, n.props), so(t, n), t.return = e, t) : (t = Fi(n.type, n.key, n.props, null, e.mode, r), so(t, n), t.return = e, t)
   }

   function u(e, t, n, r) {
    return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = zi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t)
   }

   function d(e, t, n, r, i) {
    return t === null || t.tag !== 7 ? (t = Ii(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t)
   }

   function f(e, t, n) {
    if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`) return t = Li(`` + t, e.mode, n), t.return = e, t;
    if (typeof t == `object` && t) {
     switch (t.$$typeof) {
      case k:
       return n = Fi(t.type, t.key, t.props, null, e.mode, n), so(n, t), n.return = e, n;
      case A:
       return t = zi(t, e.mode, n), t.return = e, t;
      case I:
       return t = eo(t), f(e, t, n)
     }
     if (fe(t) || le(t)) return t = Ii(t, e.mode, n, null), t.return = e, t;
     if (typeof t.then == `function`) return f(e, oo(t), n);
     if (t.$$typeof === F) return f(e, Ta(e, t), n);
     co(e, t)
    }
    return null
   }

   function p(e, t, n, r) {
    var i = t === null ? null : t.key;
    if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`) return i === null ? c(e, t, `` + n, r) : null;
    if (typeof n == `object` && n) {
     switch (n.$$typeof) {
      case k:
       return n.key === i ? l(e, t, n, r) : null;
      case A:
       return n.key === i ? u(e, t, n, r) : null;
      case I:
       return n = eo(n), p(e, t, n, r)
     }
     if (fe(n) || le(n)) return i === null ? d(e, t, n, r, null) : null;
     if (typeof n.then == `function`) return p(e, t, oo(n), r);
     if (n.$$typeof === F) return p(e, t, Ta(e, n), r);
     co(e, n)
    }
    return null
   }

   function m(e, t, n, r, i) {
    if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`) return e = e.get(n) || null, c(t, e, `` + r, i);
    if (typeof r == `object` && r) {
     switch (r.$$typeof) {
      case k:
       return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
      case A:
       return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
      case I:
       return r = eo(r), m(e, t, n, r, i)
     }
     if (fe(r) || le(r)) return e = e.get(n) || null, d(t, e, r, i, null);
     if (typeof r.then == `function`) return m(e, t, n, oo(r), i);
     if (r.$$typeof === F) return m(e, t, n, Ta(t, r), i);
     co(t, r)
    }
    return null
   }

   function h(i, a, s, c) {
    for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
     d.index > h ? (g = d, d = null) : g = d.sibling;
     var _ = p(i, d, s[h], c);
     if (_ === null) {
      d === null && (d = g);
      break
     }
     e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g
    }
    if (h === s.length) return n(i, d), V && Zi(i, h), l;
    if (d === null) {
     for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
     return V && Zi(i, h), l
    }
    for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
    return e && d.forEach(function(e) {
     return t(i, e)
    }), V && Zi(i, h), l
   }

   function g(a, s, c, l) {
    if (c == null) throw Error(i(151));
    for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
     h.index > g ? (_ = h, h = null) : _ = h.sibling;
     var y = p(a, h, v.value, l);
     if (y === null) {
      h === null && (h = _);
      break
     }
     e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _
    }
    if (v.done) return n(a, h), V && Zi(a, g), u;
    if (h === null) {
     for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
     return V && Zi(a, g), u
    }
    for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
    return e && h.forEach(function(e) {
     return t(a, e)
    }), V && Zi(a, g), u
   }

   function _(e, r, o, c) {
    if (typeof o == `object` && o && o.type === j && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == `object` && o) {
     switch (o.$$typeof) {
      case k:
       a: {
        for (var l = o.key; r !== null;) {
         if (r.key === l) {
          if (l = o.type, l === j) {
           if (r.tag === 7) {
            n(e, r.sibling), c = a(r, o.props.children), so(c, o), c.return = e, e = c;
            break a
           }
          } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === I && eo(l) === r.type) {
           n(e, r.sibling), c = a(r, o.props), so(c, o), c.return = e, e = c;
           break a
          }
          n(e, r);
          break
         }
         t(e, r), r = r.sibling
        }
        o.type === j ? (c = Ii(o.props.children, e.mode, c, o.key), so(c, o), c.return = e, e = c) : (c = Fi(o.type, o.key, o.props, null, e.mode, c), so(c, o), c.return = e, e = c)
       }
       return s(e);
      case A:
       a: {
        for (l = o.key; r !== null;) {
         if (r.key === l) {
          if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
           n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
           break a
          }
          n(e, r);
          break
         }
         t(e, r), r = r.sibling
        }
        c = zi(o, e.mode, c),
        c.return = e,
        e = c
       }
       return s(e);
      case I:
       return o = eo(o), _(e, r, o, c)
     }
     if (fe(o)) return h(e, r, o, c);
     if (le(o)) {
      if (l = le(o), typeof l != `function`) throw Error(i(150));
      return o = l.call(o), g(e, r, o, c)
     }
     if (typeof o.then == `function`) return _(e, r, oo(o), c);
     if (o.$$typeof === F) return _(e, r, Ta(e, o), c);
     co(e, o)
    }
    return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Li(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r)
   }
   return function(e, t, n, r) {
    try {
     ao = 0;
     var i = _(e, t, n, r);
     return io = null, i
    } catch (t) {
     if (t === Ja || t === Xa) throw t;
     var a = ji(29, t, null, e.mode);
     return a.lanes = r, a.return = e, a
    }
   }
  }
  var uo = lo(!0),
   fo = lo(!1),
   po = !1;

  function mo(e) {
   e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
     pending: null,
     lanes: 0,
     hiddenCallbacks: null
    },
    callbacks: null
   }
  }

  function ho(e, t) {
   e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    callbacks: null
   })
  }

  function go(e) {
   return {
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null
   }
  }

  function _o(e, t, n) {
   var r = e.updateQueue;
   if (r === null) return null;
   if (r = r.shared, K & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Oi(e), Di(e, null, n), t
   }
   return wi(e, r, t, n), Oi(e)
  }

  function vo(e, t, n) {
   if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mt(e, n)
   }
  }

  function yo(e, t) {
   var n = e.updateQueue,
    r = e.alternate;
   if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null,
     a = null;
    if (n = n.firstBaseUpdate, n !== null) {
     do {
      var o = {
       lane: n.lane,
       tag: n.tag,
       payload: n.payload,
       callback: null,
       next: null
      };
      a === null ? i = a = o : a = a.next = o, n = n.next
     } while (n !== null);
     a === null ? i = a = t : a = a.next = t
    } else i = a = t;
    n = {
     baseState: r.baseState,
     firstBaseUpdate: i,
     lastBaseUpdate: a,
     shared: r.shared,
     callbacks: r.callbacks
    }, e.updateQueue = n
   } else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
  }
  var bo = !1;

  function xo() {
   if (bo) {
    var e = za;
    if (e !== null) throw e
   }
  }

  function So(e, t, n, r) {
   bo = !1;
   var i = e.updateQueue;
   po = !1;
   var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
   if (s !== null) {
    i.shared.pending = null;
    var c = s,
     l = c.next;
    c.next = null, o === null ? a = l : o.next = l, o = c;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c))
   }
   if (a !== null) {
    var d = i.baseState;
    o = 0, u = l = c = null, s = a;
    do {
     var f = s.lane & -536870913,
      p = f !== s.lane;
     if (p ? (J & f) === f : (r & f) === f) {
      f !== 0 && f === Ra && (bo = !0), u !== null && (u = u.next = {
       lane: 0,
       tag: s.tag,
       payload: s.payload,
       callback: null,
       next: null
      });
      a: {
       var m = e,
        h = s;f = t;
       var g = n;
       switch (h.tag) {
        case 1:
         if (m = h.payload, typeof m == `function`) {
          d = m.call(g, d, f);
          break a
         }
         d = m;
         break a;
        case 3:
         m.flags = m.flags & -65537 | 128;
        case 0:
         if (m = h.payload, f = typeof m == `function` ? m.call(g, d, f) : m, f == null) break a;
         d = D({}, d, f);
         break a;
        case 2:
         po = !0
       }
      }
      f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f))
     } else p = {
      lane: f,
      tag: s.tag,
      payload: s.payload,
      callback: s.callback,
      next: null
     }, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
     if (s = s.next, s === null) {
      if (s = i.shared.pending, s === null) break;
      p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
     }
    } while (1);
    u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), cd |= o, e.lanes = o, e.memoizedState = d
   }
  }

  function Co(e, t) {
   if (typeof e != `function`) throw Error(i(191, e));
   e.call(t)
  }

  function wo(e, t) {
   var n = e.callbacks;
   if (n !== null)
    for (e.callbacks = null, e = 0; e < n.length; e++) Co(n[e], t)
  }
  var To = ge(null),
   H = ge(0);

  function Eo(e, t) {
   e = od, ve(H, e), ve(To, t), od = e | t.baseLanes
  }

  function Do() {
   ve(H, od), ve(To, To.current)
  }

  function Oo() {
   od = H.current, _e(To), _e(H)
  }
  var ko = ge(null),
   Ao = null;

  function jo(e) {
   var t = e.alternate;
   ve(Io, Io.current & 1), ve(ko, e), Ao === null && (t === null || To.current !== null || t.memoizedState !== null) && (Ao = e)
  }

  function Mo(e) {
   ve(Io, Io.current), ve(ko, e), Ao === null && (Ao = e)
  }

  function No(e) {
   e.tag === 22 ? (ve(Io, Io.current), ve(ko, e), Ao === null && (Ao = e)) : Po()
  }

  function Po() {
   ve(Io, Io.current), ve(ko, ko.current)
  }

  function Fo(e) {
   _e(ko), Ao === e && (Ao = null), _e(Io)
  }
  var Io = ge(0);

  function Lo(e, t) {
   ve(ko, ko.current), ve(Io, t)
  }

  function Ro(e) {
   _e(Io), _e(ko), Ao === e && (Ao = null)
  }

  function zo(e) {
   for (var t = e; t !== null;) {
    if (t.tag === 13) {
     var n = t.memoizedState;
     if (n !== null && (n = n.dehydrated, n === null || lm(n) || um(n))) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
     if (t.flags & 128) return t
    } else if (t.child !== null) {
     t.child.return = t, t = t.child;
     continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
     if (t.return === null || t.return === e) return null;
     t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
   }
   return null
  }
  var Bo = 0,
   U = null,
   Vo = null,
   Ho = null,
   Uo = !1,
   Wo = !1,
   Go = !1,
   Ko = 0,
   qo = 0,
   Jo = null,
   Yo = 0;

  function Xo() {
   throw Error(i(321))
  }

  function Zo(e, t) {
   if (t === null) return !1;
   for (var n = 0; n < t.length && n < e.length; n++)
    if (!Br(e[n], t[n])) return !1;
   return !0
  }

  function Qo(e, t, n, r, i, a) {
   return Bo = a, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? hc : gc, Go = !1, a = n(r, i), Go = !1, Wo && (a = es(t, n, r, i)), $o(e), a
  }

  function $o(e) {
   R.H = mc;
   var t = Vo !== null && Vo.next !== null;
   if (Bo = 0, Ho = Vo = U = null, Uo = !1, qo = 0, Jo = null, t) throw Error(i(300));
   e === null || Nc || (e = e.dependencies, e !== null && Sa(e) && (Nc = !0))
  }

  function es(e, t, n, r) {
   U = e;
   var a = 0;
   do {
    if (Wo && (Jo = null), qo = 0, Wo = !1, 25 <= a) throw Error(i(301));
    if (a += 1, Ho = Vo = null, e.updateQueue != null) {
     var o = e.updateQueue;
     o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0)
    }
    R.H = _c, o = t(n, r)
   } while (Wo);
   return o
  }

  function ts() {
   var e = R.H,
    t = e.useState()[0];
   return t = typeof t.then == `function` ? cs(t) : t, e = e.useState()[0], (Vo === null ? null : Vo.memoizedState) !== e && (U.flags |= 1024), t
  }

  function ns() {
   var e = Ko !== 0;
   return Ko = 0, e
  }

  function rs(e, t, n) {
   t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
  }

  function is(e) {
   if (Uo) {
    for (e = e.memoizedState; e !== null;) {
     var t = e.queue;
     t !== null && (t.pending = null), e = e.next
    }
    Uo = !1
   }
   Bo = 0, Ho = Vo = U = null, Wo = !1, qo = Ko = 0, Jo = null
  }

  function as() {
   var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
   };
   return Ho === null ? U.memoizedState = Ho = e : Ho = Ho.next = e, Ho
  }

  function os() {
   if (Vo === null) {
    var e = U.alternate;
    e = e === null ? null : e.memoizedState
   } else e = Vo.next;
   var t = Ho === null ? U.memoizedState : Ho.next;
   if (t !== null) Ho = t, Vo = e;
   else {
    if (e === null) throw U.alternate === null ? Error(i(467)) : Error(i(310));
    Vo = e, e = {
     memoizedState: Vo.memoizedState,
     baseState: Vo.baseState,
     baseQueue: Vo.baseQueue,
     queue: Vo.queue,
     next: null
    }, Ho === null ? U.memoizedState = Ho = e : Ho = Ho.next = e
   }
   return Ho
  }

  function ss() {
   return {
    lastEffect: null,
    events: null,
    stores: null,
    memoCache: null
   }
  }

  function cs(e) {
   var t = qo;
   return qo += 1, Jo === null && (Jo = []), e = $a(Jo, e, t), t = U, (Ho === null ? t.memoizedState : Ho.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? hc : gc), e
  }

  function ls(e) {
   if (typeof e == `object` && e) {
    if (typeof e.then == `function`) return cs(e);
    if (e.$$typeof === se) return;
    if (e.$$typeof === F) return wa(e)
   }
   throw Error(i(438, String(e)))
  }

  function us(e) {
   var t = null,
    n = U.updateQueue;
   if (n !== null && (t = n.memoCache), t == null) {
    var r = U.alternate;
    r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
     data: r.data.map(function(e) {
      return e.slice()
     }),
     index: 0
    })))
   }
   if (t ?? (t = {
     data: [],
     index: 0
    }), n === null && (n = ss(), U.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
    for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae;
   return t.index++, n
  }

  function ds(e, t) {
   return typeof t == `function` ? t(e) : t
  }

  function fs(e) {
   return ps(os(), Vo, e)
  }

  function ps(e, t, n) {
   var r = e.queue;
   if (r === null) throw Error(i(311));
   r.lastRenderedReducer = n;
   var a = e.baseQueue,
    o = r.pending;
   if (o !== null) {
    if (a !== null) {
     var s = a.next;
     a.next = o.next, o.next = s
    }
    t.baseQueue = a = o, r.pending = null
   }
   if (o = e.baseState, a === null) e.memoizedState = o;
   else {
    t = a.next;
    var c = s = null,
     l = null,
     u = t,
     d = !1;
    do {
     var f = u.lane & -536870913;
     if (f === u.lane ? (Bo & f) === f : (J & f) === f) {
      var p = u.revertLane;
      if (p === 0) l !== null && (l = l.next = {
       lane: 0,
       revertLane: 0,
       gesture: null,
       action: u.action,
       hasEagerState: u.hasEagerState,
       eagerState: u.eagerState,
       next: null
      }), f === Ra && (d = !0);
      else if ((Bo & p) === p) {
       u = u.next, p === Ra && (d = !0);
       continue
      } else f = {
       lane: 0,
       revertLane: u.revertLane,
       gesture: null,
       action: u.action,
       hasEagerState: u.hasEagerState,
       eagerState: u.eagerState,
       next: null
      }, l === null ? (c = l = f, s = o) : l = l.next = f, U.lanes |= p, cd |= p;
      f = u.action, Go && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f)
     } else p = {
      lane: f,
      revertLane: u.revertLane,
      gesture: u.gesture,
      action: u.action,
      hasEagerState: u.hasEagerState,
      eagerState: u.eagerState,
      next: null
     }, l === null ? (c = l = p, s = o) : l = l.next = p, U.lanes |= f, cd |= f;
     u = u.next
    } while (u !== null && u !== t);
    if (l === null ? s = o : l.next = c, !Br(o, e.memoizedState) && (Nc = !0, d && (n = za, n !== null))) throw n;
    e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o
   }
   return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]
  }

  function ms(e) {
   var t = os(),
    n = t.queue;
   if (n === null) throw Error(i(311));
   n.lastRenderedReducer = e;
   var r = n.dispatch,
    a = n.pending,
    o = t.memoizedState;
   if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do o = e(o, s.action), s = s.next; while (s !== a);
    Br(o, t.memoizedState) || (Nc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
   }
   return [o, r]
  }

  function hs(e, t, n) {
   var r = U,
    a = os(),
    o = V;
   if (o) {
    if (n === void 0) throw Error(i(407));
    n = n()
   } else n = t();
   var s = !Br((Vo || a).memoizedState, n);
   if (s && (a.memoizedState = n, Nc = !0), a = a.queue, Bs(vs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Ho !== null && !!(Ho.memoizedState.tag & 1), Fs(e ? 9 : 8, {
     destroy: void 0
    }, _s.bind(null, r, a, n, t), null), e) {
    if (r.flags |= 2048, ed === null) throw Error(i(349));
    o || Bo & 127 || gs(r, t, n)
   }
   return n
  }

  function gs(e, t, n) {
   e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
   }, t = U.updateQueue, t === null ? (t = ss(), U.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
  }

  function _s(e, t, n, r) {
   t.value = n, t.getSnapshot = r, ys(t) && bs(e)
  }

  function vs(e, t, n) {
   return n(function() {
    ys(t) && bs(e)
   })
  }

  function ys(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
    var n = t();
    return !Br(e, n)
   } catch {
    return !0
   }
  }

  function bs(e) {
   var t = Ei(e, 2);
   t !== null && Id(t, e, 2)
  }

  function xs(e) {
   var t = as();
   if (typeof e == `function`) {
    var n = e;
    if (e = n(), Go) {
     Xe(!0);
     try {
      n()
     } finally {
      Xe(!1)
     }
    }
   }
   return t.memoizedState = t.baseState = e, t.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ds,
    lastRenderedState: e
   }, t
  }

  function Ss(e, t, n, r) {
   return e.baseState = n, ps(e, Vo, typeof r == `function` ? r : ds)
  }

  function Cs(e, t, n, r, a) {
   if (dc(e)) throw Error(i(485));
   if (e = t.action, e !== null) {
    var o = {
     payload: a,
     action: e,
     next: null,
     isTransition: !0,
     status: `pending`,
     value: null,
     reason: null,
     listeners: [],
     then: function(e) {
      o.listeners.push(e)
     }
    };
    R.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ws(t, o)) : (o.next = n.next, t.pending = n.next = o)
   }
  }

  function ws(e, t) {
   var n = t.action,
    r = t.payload,
    i = e.state;
   if (t.isTransition) {
    var a = R.T,
     o = {};
    o.types = a === null ? null : a.types, R.T = o;
    try {
     var s = n(i, r),
      c = R.S;
     c !== null && c(o, s), Ts(e, t, s)
    } catch (n) {
     Ds(e, t, n)
    } finally {
     a !== null && o.types !== null && (a.types = o.types), R.T = a
    }
   } else try {
    a = n(i, r), Ts(e, t, a)
   } catch (n) {
    Ds(e, t, n)
   }
  }

  function Ts(e, t, n) {
   typeof n == `object` && n && typeof n.then == `function` ? n.then(function(n) {
    Es(e, t, n)
   }, function(n) {
    return Ds(e, t, n)
   }) : Es(e, t, n)
  }

  function Es(e, t, n) {
   t.status = `fulfilled`, t.value = n, Os(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ws(e, n)))
  }

  function Ds(e, t, n) {
   var r = e.pending;
   if (e.pending = null, r !== null) {
    r = r.next;
    do t.status = `rejected`, t.reason = n, Os(t), t = t.next; while (t !== r)
   }
   e.action = null
  }

  function Os(e) {
   e = e.listeners;
   for (var t = 0; t < e.length; t++)(0, e[t])()
  }

  function ks(e, t) {
   return t
  }

  function As(e, t) {
   if (V) {
    var n = ed.formState;
    if (n !== null) {
     a: {
      var r = U;
      if (V) {
       if (ra) {
        b: {
         for (var i = ra, a = aa; i.nodeType !== 8;)
          if (!a || (i = fm(i.nextSibling), i === null)) {
           i = null;
           break b
          } a = i.data,
         i = a === `F!` || a === `F` ? i : null
        }
        if (i) {
         ra = fm(i.nextSibling), r = i.data === `F!`;
         break a
        }
       }
       sa(r)
      }
      r = !1
     }
     r && (t = n[0])
    }
   }
   return n = as(), n.memoizedState = n.baseState = t, r = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ks,
    lastRenderedState: t
   }, n.queue = r, n = cc.bind(null, U, r), r.dispatch = n, r = xs(!1), a = uc.bind(null, U, !1, r.queue), r = as(), i = {
    state: t,
    dispatch: null,
    action: e,
    pending: null
   }, r.queue = i, n = Cs.bind(null, U, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, !1]
  }

  function js(e) {
   return Ms(os(), Vo, e)
  }

  function Ms(e, t, n) {
   if (t = ps(e, t, ks)[0], e = fs(ds)[0], typeof t == `object` && t && typeof t.then == `function`) try {
    var r = cs(t)
   } catch (e) {
    throw e === Ja ? Xa : e
   } else r = t;
   t = os();
   var i = t.queue,
    a = i.dispatch;
   return n !== t.memoizedState && (U.flags |= 2048, Fs(9, {
    destroy: void 0
   }, Ns.bind(null, i, n), null)), [r, a, e]
  }

  function Ns(e, t) {
   e.action = t
  }

  function Ps(e) {
   var t = os(),
    n = Vo;
   if (n !== null) return Ms(t, n, e);
   os(), t = t.memoizedState, n = os();
   var r = n.queue.dispatch;
   return n.memoizedState = e, [t, r, !1]
  }

  function Fs(e, t, n, r) {
   return e = {
    tag: e,
    create: n,
    deps: r,
    inst: t,
    next: null
   }, t = U.updateQueue, t === null && (t = ss(), U.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
  }

  function Is() {
   return os().memoizedState
  }

  function Ls(e, t, n, r) {
   var i = as();
   U.flags |= e, i.memoizedState = Fs(1 | t, {
    destroy: void 0
   }, n, r === void 0 ? null : r)
  }

  function Rs(e, t, n, r) {
   var i = os();
   r = r === void 0 ? null : r;
   var a = i.memoizedState.inst;
   Vo !== null && r !== null && Zo(r, Vo.memoizedState.deps) ? i.memoizedState = Fs(t, a, n, r) : (U.flags |= e, i.memoizedState = Fs(1 | t, a, n, r))
  }

  function zs(e, t) {
   Ls(8390656, 8, e, t)
  }

  function Bs(e, t) {
   Rs(2048, 8, e, t)
  }

  function Vs(e) {
   U.flags |= 4;
   var t = U.updateQueue;
   if (t === null) t = ss(), U.updateQueue = t, t.events = [e];
   else {
    var n = t.events;
    n === null ? t.events = [e] : n.push(e)
   }
  }

  function Hs(e) {
   var t = os().memoizedState;
   return Vs({
     ref: t,
     nextImpl: e
    }),
    function() {
     if (K & 2) throw Error(i(440));
     return t.impl.apply(void 0, arguments)
    }
  }

  function Us(e, t) {
   return Rs(4, 2, e, t)
  }

  function Ws(e, t) {
   return Rs(4, 4, e, t)
  }

  function Gs(e, t) {
   if (typeof t == `function`) {
    e = e();
    var n = t(e);
    return function() {
     typeof n == `function` ? n() : t(null)
    }
   }
   if (t != null) return e = e(), t.current = e,
    function() {
     t.current = null
    }
  }

  function Ks(e, t, n) {
   n = n == null ? null : n.concat([e]), Rs(4, 4, Gs.bind(null, t, e), n)
  }

  function qs() {}

  function Js(e, t) {
   var n = os();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return t !== null && Zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
  }

  function Ys(e, t) {
   var n = os();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   if (t !== null && Zo(t, r[1])) return r[0];
   if (r = e(), Go) {
    Xe(!0);
    try {
     e()
    } finally {
     Xe(!1)
    }
   }
   return n.memoizedState = [r, t], r
  }

  function Xs(e, t, n) {
   return n === void 0 || Bo & 1073741824 && !(J & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Pd(), U.lanes |= e, cd |= e, n)
  }

  function Zs(e, t, n, r) {
   return Br(n, t) ? n : To.current === null ? !(Bo & 106) || Bo & 1073741824 && !(J & 261930) ? (Nc = !0, e.memoizedState = n) : (e = Pd(), U.lanes |= e, cd |= e, t) : (e = Xs(e, n, r), Br(e, t) || (Nc = !0), e)
  }

  function Qs(e, t, n, r, i) {
   var a = z.p;
   z.p = a !== 0 && 8 > a ? a : 8;
   var o = R.T,
    s = {};
   s.types = o === null ? null : o.types, R.T = s, uc(e, !1, t, n);
   try {
    var c = i(),
     l = R.S;
    l !== null && l(s, c), typeof c == `object` && c && typeof c.then == `function` ? lc(e, t, Ha(c, r), Nd(e)) : lc(e, t, r, Nd(e))
   } catch (n) {
    lc(e, t, {
     then: function() {},
     status: `rejected`,
     reason: n
    }, Nd())
   } finally {
    z.p = a, o !== null && s.types !== null && (o.types = s.types), R.T = o
   }
  }

  function $s() {}

  function ec(e, t, n, r) {
   if (e.tag !== 5) throw Error(i(476));
   var a = tc(e).queue;
   Qs(e, a, t, pe, n === null ? $s : function() {
    return nc(e), n(r)
   })
  }

  function tc(e) {
   var t = e.memoizedState;
   if (t !== null) return t;
   t = {
    memoizedState: pe,
    baseState: pe,
    baseQueue: null,
    queue: {
     pending: null,
     lanes: 0,
     dispatch: null,
     lastRenderedReducer: ds,
     lastRenderedState: pe
    },
    next: null
   };
   var n = {};
   return t.next = {
    memoizedState: n,
    baseState: n,
    baseQueue: null,
    queue: {
     pending: null,
     lanes: 0,
     dispatch: null,
     lastRenderedReducer: ds,
     lastRenderedState: n
    },
    next: null
   }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
  }

  function nc(e) {
   var t = tc(e);
   t.next === null && (t = e.alternate.memoizedState), lc(e, t.next.queue, {}, Nd())
  }

  function rc() {
   return wa(uh)
  }

  function ic() {
   return os().memoizedState
  }

  function ac() {
   return os().memoizedState
  }

  function oc(e) {
   for (var t = e.return; t !== null;) {
    switch (t.tag) {
     case 24:
     case 3:
      var n = Nd();
      e = go(n);
      var r = _o(t, e, n);
      r !== null && (Id(r, t, n), vo(r, t, n)), t = {
       cache: ja()
      }, e.payload = t;
      return
    }
    t = t.return
   }
  }

  function sc(e, t, n) {
   var r = Nd();
   n = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
   }, dc(e) ? fc(t, n) : (n = Ti(e, t, n, r), n !== null && (Id(n, e, r), pc(n, t, r)))
  }

  function cc(e, t, n) {
   lc(e, t, n, Nd())
  }

  function lc(e, t, n, r) {
   var i = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
   };
   if (dc(e)) fc(t, i);
   else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
     var o = t.lastRenderedState,
      s = a(o, n);
     if (i.hasEagerState = !0, i.eagerState = s, Br(s, o)) return wi(e, t, i, 0), ed === null && Ci(), !1
    } catch {}
    if (n = Ti(e, t, i, r), n !== null) return Id(n, e, r), pc(n, t, r), !0
   }
   return !1
  }

  function uc(e, t, n, r) {
   if (r = {
     lane: 2,
     revertLane: Lf(),
     gesture: null,
     action: r,
     hasEagerState: !1,
     eagerState: null,
     next: null
    }, dc(e)) {
    if (t) throw Error(i(479))
   } else t = Ti(e, n, r, 2), t !== null && Id(t, e, 2)
  }

  function dc(e) {
   var t = e.alternate;
   return e === U || t !== null && t === U
  }

  function fc(e, t) {
   Wo = Uo = !0;
   var n = e.pending;
   n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
  }

  function pc(e, t, n) {
   if (n & 4194048) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mt(e, n)
   }
  }
  var mc = {
    readContext: wa,
    use: ls,
    useCallback: Xo,
    useContext: Xo,
    useEffect: Xo,
    useImperativeHandle: Xo,
    useLayoutEffect: Xo,
    useInsertionEffect: Xo,
    useMemo: Xo,
    useReducer: Xo,
    useRef: Xo,
    useState: Xo,
    useDebugValue: Xo,
    useDeferredValue: Xo,
    useTransition: Xo,
    useSyncExternalStore: Xo,
    useId: Xo,
    useHostTransitionStatus: Xo,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: Xo,
    useMemoCache: Xo,
    useCacheRefresh: Xo,
    useEffectEvent: Xo
   },
   hc = {
    readContext: wa,
    use: ls,
    useCallback: function(e, t) {
     return as().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: wa,
    useEffect: zs,
    useImperativeHandle: function(e, t, n) {
     n = n == null ? null : n.concat([e]), Ls(4194308, 4, Gs.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
     return Ls(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
     Ls(4, 2, e, t)
    },
    useMemo: function(e, t) {
     var n = as();
     t = t === void 0 ? null : t;
     var r = e();
     if (Go) {
      Xe(!0);
      try {
       e()
      } finally {
       Xe(!1)
      }
     }
     return n.memoizedState = [r, t], r
    },
    useReducer: function(e, t, n) {
     var r = as();
     if (n !== void 0) {
      var i = n(t);
      if (Go) {
       Xe(!0);
       try {
        n(t)
       } finally {
        Xe(!1)
       }
      }
     } else i = t;
     return r.memoizedState = r.baseState = i, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: i
     }, r.queue = e, e = e.dispatch = sc.bind(null, U, e), [r.memoizedState, e]
    },
    useRef: function(e) {
     var t = as();
     return e = {
      current: e
     }, t.memoizedState = e
    },
    useState: function(e) {
     e = xs(e);
     var t = e.queue,
      n = cc.bind(null, U, t);
     return t.dispatch = n, [e.memoizedState, n]
    },
    useDebugValue: qs,
    useDeferredValue: function(e, t) {
     return Xs(as(), e, t)
    },
    useTransition: function() {
     var e = xs(!1);
     return e = Qs.bind(null, U, e.queue, !0, !1), as().memoizedState = e, [!1, e]
    },
    useSyncExternalStore: function(e, t, n) {
     var r = U,
      a = as();
     if (V) {
      if (n === void 0) throw Error(i(407));
      n = n()
     } else {
      if (n = t(), ed === null) throw Error(i(349));
      J & 127 || gs(r, t, n)
     }
     a.memoizedState = n;
     var o = {
      value: n,
      getSnapshot: t
     };
     return a.queue = o, zs(vs.bind(null, r, o, e), [e]), r.flags |= 2048, Fs(9, {
      destroy: void 0
     }, _s.bind(null, r, o, n, t), null), n
    },
    useId: function() {
     var e = as(),
      t = ed.identifierPrefix;
     if (V) {
      var n = Xi,
       r = Yi;
      n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = `_` + t + `R_` + n, n = Ko++, 0 < n && (t += `H` + n.toString(32)), t += `_`
     } else n = Yo++, t = `_` + t + `r_` + n.toString(32) + `_`;
     return e.memoizedState = t
    },
    useHostTransitionStatus: rc,
    useFormState: As,
    useActionState: As,
    useOptimistic: function(e) {
     var t = as();
     t.memoizedState = t.baseState = e;
     var n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
     };
     return t.queue = n, t = uc.bind(null, U, !0, n), n.dispatch = t, [e, t]
    },
    useMemoCache: us,
    useCacheRefresh: function() {
     return as().memoizedState = oc.bind(null, U)
    },
    useEffectEvent: function(e) {
     var t = as(),
      n = {
       impl: e
      };
     return t.memoizedState = n,
      function() {
       if (K & 2) throw Error(i(440));
       return n.impl.apply(void 0, arguments)
      }
    }
   },
   gc = {
    readContext: wa,
    use: ls,
    useCallback: Js,
    useContext: wa,
    useEffect: Bs,
    useImperativeHandle: Ks,
    useInsertionEffect: Us,
    useLayoutEffect: Ws,
    useMemo: Ys,
    useReducer: fs,
    useRef: Is,
    useState: function() {
     return fs(ds)
    },
    useDebugValue: qs,
    useDeferredValue: function(e, t) {
     return Zs(os(), Vo.memoizedState, e, t)
    },
    useTransition: function() {
     var e = fs(ds)[0],
      t = os().memoizedState;
     return [typeof e == `boolean` ? e : cs(e), t]
    },
    useSyncExternalStore: hs,
    useId: ic,
    useHostTransitionStatus: rc,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(e, t) {
     return Ss(os(), Vo, e, t)
    },
    useMemoCache: us,
    useCacheRefresh: ac,
    useEffectEvent: Hs
   },
   _c = {
    readContext: wa,
    use: ls,
    useCallback: Js,
    useContext: wa,
    useEffect: Bs,
    useImperativeHandle: Ks,
    useInsertionEffect: Us,
    useLayoutEffect: Ws,
    useMemo: Ys,
    useReducer: ms,
    useRef: Is,
    useState: function() {
     return ms(ds)
    },
    useDebugValue: qs,
    useDeferredValue: function(e, t) {
     var n = os();
     return Vo === null ? Xs(n, e, t) : Zs(n, Vo.memoizedState, e, t)
    },
    useTransition: function() {
     var e = ms(ds)[0],
      t = os().memoizedState;
     return [typeof e == `boolean` ? e : cs(e), t]
    },
    useSyncExternalStore: hs,
    useId: ic,
    useHostTransitionStatus: rc,
    useFormState: Ps,
    useActionState: Ps,
    useOptimistic: function(e, t) {
     var n = os();
     return Vo === null ? (n.baseState = e, [e, n.queue.dispatch]) : Ss(n, Vo, e, t)
    },
    useMemoCache: us,
    useCacheRefresh: ac,
    useEffectEvent: Hs
   };

  function vc(e, t, n, r) {
   t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var yc = {
   enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Nd(),
     i = go(r);
    i.payload = t, n != null && (i.callback = n), t = _o(e, i, r), t !== null && (Id(t, e, r), vo(t, e, r))
   },
   enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Nd(),
     i = go(r);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _o(e, i, r), t !== null && (Id(t, e, r), vo(t, e, r))
   },
   enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Nd(),
     r = go(n);
    r.tag = 2, t != null && (r.callback = t), t = _o(e, r, n), t !== null && (Id(t, e, n), vo(t, e, n))
   }
  };

  function bc(e, t, n, r, i, a, o) {
   return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(i, a) : !0
  }

  function xc(e, t, n, r) {
   e = t.state, typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yc.enqueueReplaceState(t, t.state, null)
  }

  function Sc(e, t) {
   var n = t;
   if (`ref` in t)
    for (var r in n = {}, t) r !== `ref` && (n[r] = t[r]);
   if (e = e.defaultProps)
    for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
   return n
  }

  function Cc(e) {
   yi(e)
  }

  function wc(e) {
   console.error(e)
  }

  function Tc(e) {
   yi(e)
  }

  function Ec(e, t) {
   try {
    var n = e.onUncaughtError;
    n(t.value, {
     componentStack: t.stack
    })
   } catch (e) {
    setTimeout(function() {
     throw e
    })
   }
  }

  function Dc(e, t, n) {
   try {
    var r = e.onCaughtError;
    r(n.value, {
     componentStack: n.stack,
     errorBoundary: t.tag === 1 ? t.stateNode : null
    })
   } catch (e) {
    setTimeout(function() {
     throw e
    })
   }
  }

  function Oc(e, t, n) {
   return n = go(n), n.tag = 3, n.payload = {
    element: null
   }, n.callback = function() {
    Ec(e, t)
   }, n
  }

  function kc(e) {
   return e = go(e), e.tag = 3, e
  }

  function Ac(e, t, n, r) {
   var i = n.type.getDerivedStateFromError;
   if (typeof i == `function`) {
    var a = r.value;
    e.payload = function() {
     return i(a)
    }, e.callback = function() {
     Dc(t, n, r)
    }
   }
   var o = n.stateNode;
   o !== null && typeof o.componentDidCatch == `function` && (e.callback = function() {
    Dc(t, n, r), typeof i != `function` && (bd === null ? bd = new Set([this]) : bd.add(this));
    var e = r.stack;
    this.componentDidCatch(r.value, {
     componentStack: e === null ? `` : e
    })
   })
  }

  function jc(e, t, n, r, a) {
   if (n.flags |= 32768, typeof r == `object` && r && typeof r.then == `function`) {
    if (t = n.alternate, t !== null && xa(t, n, a, !0), n = ko.current, n !== null) {
     switch (n.tag) {
      case 31:
      case 13:
      case 19:
       return Ao === null ? Jd() : n.alternate === null && sd === 0 && (sd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Za ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), _f(e, r, a)), !1;
      case 22:
       return n.flags |= 65536, r === Za ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
        transitions: null,
        markerInstances: null,
        retryQueue: new Set([r])
       }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), _f(e, r, a)), !1
     }
     throw Error(i(435, n.tag))
    }
    return _f(e, r, a), Jd(), !1
   }
   if (V) return t = ko.current, t === null ? (r !== oa && (t = Error(i(423), {
    cause: r
   }), pa(Vi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Vi(r, n), a = Oc(e.stateNode, r, a), yo(e, a), sd !== 4 && (sd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== oa && (e = Error(i(422), {
    cause: r
   }), pa(Vi(e, n)))), !1;
   var o = Error(i(520), {
    cause: r
   });
   if (o = Vi(o, n), pd === null ? pd = [o] : pd.push(o), sd !== 4 && (sd = 2), t === null) return !0;
   r = Vi(r, n), n = t;
   do {
    switch (n.tag) {
     case 3:
      return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Oc(n.stateNode, r, e), yo(n, e), !1;
     case 1:
      if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (bd === null || !bd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = kc(a), Ac(a, e, n, r), yo(n, a), !1;
      break;
     case 22:
      if (n.memoizedState !== null) return n.flags |= 65536, !1
    }
    n = n.return
   } while (n !== null);
   return !1
  }
  var Mc = Error(i(461)),
   Nc = !1;

  function Pc(e, t, n, r) {
   t.child = e === null ? fo(t, null, n, r) : uo(t, e.child, n, r)
  }

  function Fc(e, t, n, r, i) {
   n = n.render;
   var a = t.ref;
   if (`ref` in r) {
    var o = {};
    for (var s in r) s !== `ref` && (o[s] = r[s])
   } else o = r;
   return Ca(t), r = Qo(e, t, n, o, a, i), s = ns(), e !== null && !Nc ? (rs(e, t, i), ll(e, t, i)) : (V && s && $i(t), t.flags |= 1, Pc(e, t, r, i), t.child)
  }

  function Ic(e, t, n, r, i) {
   if (e === null) {
    var a = n.type;
    return typeof a == `function` && !Mi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Lc(e, t, a, r, i)) : (e = Fi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
   }
   if (a = e.child, !ul(e, i)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n === null ? Vr : n, n(o, r) && e.ref === t.ref) return ll(e, t, i)
   }
   return t.flags |= 1, e = Ni(a, r), e.ref = t.ref, e.return = t, t.child = e
  }

  function Lc(e, t, n, r, i) {
   if (e !== null) {
    var a = e.memoizedProps;
    if (Vr(a, r) && e.ref === t.ref) {
     if (Nc = !1, t.pendingProps = r = a, ul(e, i)) e.flags & 131072 && (Nc = !0);
     else return t.lanes = e.lanes, ll(e, t, i)
    }
   }
   return Gc(e, t, n, r, i)
  }

  function Rc(e, t, n, r) {
   var i = r.children,
    a = e === null ? null : e.memoizedState;
   if (e === null && t.stateNode === null && (t.stateNode = {
     _visibility: 1,
     _pendingMarkers: null,
     _retryCache: null,
     _transitions: null
    }), r.mode === `hidden`) {
    if (t.flags & 128) {
     if (a = a === null ? n : a.baseLanes | n, e !== null) {
      for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
      r = i & ~a
     } else r = 0, t.child = null;
     return Bc(e, t, a, n, r)
    }
    if (n & 536870912) t.memoizedState = {
     baseLanes: 0,
     cachePool: null
    }, e !== null && Ka(t, a === null ? null : a.cachePool), a === null ? Do() : Eo(t, a), No(t);
    else return r = t.lanes = 536870912, Bc(e, t, a === null ? n : a.baseLanes | n, n, r)
   } else a === null ? (e !== null && Ka(t, null), Do(), Po()) : (Ka(t, a.cachePool), Eo(t, a), Po(), t.memoizedState = null);
   return Pc(e, t, i, n), t.child
  }

  function zc(e, t) {
   return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
   }), t.sibling
  }

  function Bc(e, t, n, r, i) {
   var a = Ga();
   return a = a === null ? null : {
    parent: Aa._currentValue,
    pool: a
   }, t.memoizedState = {
    baseLanes: n,
    cachePool: a
   }, e !== null && Ka(t, null), Do(), No(t), e !== null && xa(e, t, r, !0), t.childLanes = i, null
  }

  function Vc(e, t) {
   return t = el({
    mode: t.mode,
    children: t.children
   }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
  }

  function Hc(e, t, n) {
   return uo(t, e.child, null, n), e = Vc(t, t.pendingProps), e.flags |= 2, Fo(t), t.memoizedState = null, e
  }

  function Uc(e, t, n) {
   var r = t.pendingProps,
    a = !!(t.flags & 128);
   if (t.flags &= -129, e === null) {
    if (V) {
     if (r.mode === `hidden`) return e = Vc(t, r), t.lanes = 536870912, e.memoizedState = {
      baseLanes: 0,
      cachePool: null
     }, zc(null, e);
     if (Mo(t), (e = ra) ? (e = cm(e, aa), e = e !== null && e.data === `&` ? e : null, e !== null && (t.memoizedState = {
       dehydrated: e,
       treeContext: Ji === null ? null : {
        id: Yi,
        overflow: Xi
       },
       retryLane: 536870912,
       hydrationErrors: null
      }, n = Ri(e), n.return = t, t.child = n, na = t, ra = null)) : e = null, e === null) throw sa(t);
     return t.lanes = 536870912, null
    }
    return Vc(t, r)
   }
   var o = e.memoizedState;
   if (o !== null) {
    var s = o.dehydrated;
    if (Mo(t), a) {
     if (t.flags & 256) t.flags &= -257, t = Hc(e, t, n);
     else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
     else throw Error(i(558))
    } else if (Nc || xa(e, t, n, !1), a = (n & e.childLanes) !== 0, Nc || a) {
     if (To.current === null) {
      if (r = ed, r !== null && (s = ht(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Ei(e, s), Id(r, e, s), Mc;
      Jd()
     }
     t = Hc(e, t, n)
    } else e = o.treeContext, ra = fm(s.nextSibling), na = t, V = !0, ia = null, aa = !1, e !== null && ta(t, e), t = Vc(t, r), t.flags |= 134221824;
    return t
   }
   return e = Ni(e.child, {
    mode: r.mode,
    children: r.children
   }), e.ref = t.ref, t.child = e, e.return = t, e
  }

  function Wc(e, t) {
   var n = t.ref;
   if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
   else {
    if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
    (e === null || e.ref !== n) && (t.flags |= 4194816)
   }
  }

  function Gc(e, t, n, r, i) {
   return Ca(t), n = Qo(e, t, n, r, void 0, i), r = ns(), e !== null && !Nc ? (rs(e, t, i), ll(e, t, i)) : (V && r && $i(t), t.flags |= 1, Pc(e, t, n, i), t.child)
  }

  function Kc(e, t, n, r, i, a) {
   return Ca(t), t.updateQueue = null, n = es(t, r, n, i), $o(e), r = ns(), e !== null && !Nc ? (rs(e, t, a), ll(e, t, a)) : (V && r && $i(t), t.flags |= 1, Pc(e, t, n, a), t.child)
  }

  function qc(e, t, n, r, i) {
   if (Ca(t), t.stateNode === null) {
    var a = ki,
     o = n.contextType;
    typeof o == `object` && o && (a = wa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = yc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, mo(t), o = n.contextType, a.context = typeof o == `object` && o ? wa(o) : ki, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == `function` && (vc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state, typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(), o !== a.state && yc.enqueueReplaceState(a, a.state, null), So(t, r, a, i), xo(), a.state = t.memoizedState), typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !0
   } else if (e === null) {
    a = t.stateNode;
    var s = t.memoizedProps,
     c = Sc(n, s);
    a.props = c;
    var l = a.context,
     u = n.contextType;
    o = ki, typeof u == `object` && u && (o = wa(u));
    var d = n.getDerivedStateFromProps;
    u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`, s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && xc(t, a, r, o), po = !1;
    var f = t.memoizedState;
    a.state = f, So(t, r, a, i), xo(), l = t.memoizedState, s || f !== l || po ? (typeof d == `function` && (vc(t, n, d, r), l = t.memoizedState), (c = po || bc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), r = !1)
   } else {
    a = t.stateNode, ho(e, t), o = t.memoizedProps, u = Sc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ki, typeof l == `object` && l && (c = wa(l)), s = n.getDerivedStateFromProps, (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && xc(t, a, r, c), po = !1, f = t.memoizedState, a.state = f, So(t, r, a, i), xo();
    var p = t.memoizedState;
    o !== d || f !== p || po || e !== null && e.dependencies !== null && Sa(e.dependencies) ? (typeof s == `function` && (vc(t, n, s, r), p = t.memoizedState), (u = po || bc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Sa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == `function` && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
   }
   return a = r, Wc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = uo(t, e.child, null, i), t.child = uo(t, null, n, i)) : Pc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ll(e, t, i), e
  }

  function Jc(e, t, n, r) {
   return da(), t.flags |= 256, Pc(e, t, n, r), t.child
  }
  var Yc = {
   dehydrated: null,
   treeContext: null,
   retryLane: 0,
   hydrationErrors: null
  };

  function Xc(e) {
   return {
    baseLanes: e,
    cachePool: qa()
   }
  }

  function Zc(e, t, n) {
   return e = e === null ? 0 : e.childLanes & ~n, t && (e |= dd), e
  }

  function Qc(e, t, n) {
   var r = t.pendingProps,
    i = !1,
    a = !!(t.flags & 128),
    o;
   if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Io.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
    if (V) {
     if (i ? jo(t) : Po(), (e = ra) ? (e = cm(e, aa), e = e !== null && e.data !== `&` ? e : null, e !== null && (t.memoizedState = {
       dehydrated: e,
       treeContext: Ji === null ? null : {
        id: Yi,
        overflow: Xi
       },
       retryLane: 536870912,
       hydrationErrors: null
      }, n = Ri(e), n.return = t, t.child = n, na = t, ra = null)) : e = null, e === null) throw sa(t);
     return t.lanes = um(e) ? 32 : 536870912, null
    }
    return a = r.children, r = r.fallback, i ? (Po(), i = t.mode, a = el({
     mode: `hidden`,
     children: a
    }, i), r = Ii(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Xc(n), r.childLanes = Zc(e, o, n), t.memoizedState = Yc, zc(null, r)) : (jo(t), $c(t, a))
   }
   var s = e.memoizedState;
   if (s !== null) {
    var c = s.dehydrated;
    if (c !== null) return nl(e, t, a, o, r, c, s, n)
   }
   return i ? (Po(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Ni(s, {
    mode: `hidden`,
    children: r.children
   }), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ii(i, a, n, null), i.flags |= 2) : i = Ni(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, zc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Xc(n) : (a = i.cachePool, a === null ? a = qa() : (s = Aa._currentValue, a = a.parent === s ? a : {
    parent: s,
    pool: s
   }), i = {
    baseLanes: i.baseLanes | n,
    cachePool: a
   }), r.memoizedState = i, r.childLanes = Zc(e, o, n), t.memoizedState = Yc, zc(e.child, r)) : (jo(t), n = e.child, e = n.sibling, n = Ni(n, {
    mode: `visible`,
    children: r.children
   }), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n)
  }

  function $c(e, t) {
   return t = el({
    mode: `visible`,
    children: t
   }, e.mode), t.return = e, e.child = t
  }

  function el(e, t) {
   return e = ji(22, e, null, t), e.lanes = 0, e
  }

  function tl(e, t, n) {
   return uo(t, e.child, null, n), e = $c(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function nl(e, t, n, r, a, o, s, c) {
   if (n) return t.flags & 256 ? (jo(t), t.flags &= -257, tl(e, t, c)) : t.memoizedState === null ? (Po(), o = a.fallback, s = t.mode, a = el({
    mode: `visible`,
    children: a.children
   }, s), o = Ii(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, uo(t, e.child, null, c), a = t.child, a.memoizedState = Xc(c), a.childLanes = Zc(e, r, c), t.memoizedState = Yc, zc(null, a)) : (Po(), t.child = e.child, t.flags |= 128, null);
   if (jo(t), um(o)) {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, r !== `` && (a = Error(i(419)), a.stack = ``, a.digest = r, pa({
     value: a,
     source: null,
     stack: null
    })), tl(e, t, c)
   }
   if (Nc || xa(e, t, c, !1), r = (c & e.childLanes) !== 0, Nc || r) {
    if (To.current !== null) return tl(e, t, c);
    if (r = ed, r !== null && (a = ht(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ei(e, a), Id(r, e, a), Mc;
    return lm(o) || Jd(), tl(e, t, c)
   }
   return lm(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, ra = fm(o.nextSibling), na = t, V = !0, ia = null, aa = !1, e !== null && ta(t, e), t = $c(t, a.children), t.flags |= 134221824, t)
  }

  function rl(e, t, n) {
   e.lanes |= t;
   var r = e.alternate;
   r !== null && (r.lanes |= t), ya(e.return, t, n)
  }

  function il(e) {
   for (var t = null; e !== null;) {
    var n = e.alternate;
    n !== null && zo(n) === null && (t = e), e = e.sibling
   }
   return t
  }

  function al(e, t, n, r, i, a) {
   var o = e.memoizedState;
   o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: i,
    treeForkCount: a
   } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a)
  }

  function ol(e) {
   var t = e.child;
   for (e.child = null; t !== null;) {
    var n = t.sibling;
    t.sibling = e.child, e.child = t, t = n
   }
  }

  function sl(e, t, n) {
   var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
   r = r.children;
   var o = Io.current;
   if (t.flags & 128) return Lo(t, o), null;
   var s = !!(o & 2);
   if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Lo(t, o), i === `backwards` && e !== null ? (ol(e), Pc(e, t, r, n), ol(e)) : Pc(e, t, r, n), r = V ? Gi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
    if (e.tag === 13) e.memoizedState !== null && rl(e, n, t);
    else if (e.tag === 19) rl(e, n, t);
    else if (e.child !== null) {
     e.child.return = e, e = e.child;
     continue
    }
    if (e === t) break a;
    for (; e.sibling === null;) {
     if (e.return === null || e.return === t) break a;
     e = e.return
    }
    e.sibling.return = e.return, e = e.sibling
   }
   switch (i) {
    case `backwards`:
     n = il(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, ol(t)), al(t, !0, i, null, a, r);
     break;
    case `unstable_legacy-backwards`:
     for (n = null, i = t.child, t.child = null; i !== null;) {
      if (e = i.alternate, e !== null && zo(e) === null) {
       t.child = i;
       break
      }
      e = i.sibling, i.sibling = n, n = i, i = e
     }
     al(t, !0, n, null, a, r);
     break;
    case `together`:
     al(t, !1, null, null, void 0, r);
     break;
    case `independent`:
     t.memoizedState = null;
     break;
    default:
     n = il(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), al(t, !1, i, n, a, r)
   }
   return t.child
  }

  function cl(e, t, n) {
   var r = t.pendingProps;
   return _a(t, t.type, r.value), Pc(e, t, r.children, n), t.child
  }

  function ll(e, t, n) {
   if (e !== null && (t.dependencies = e.dependencies), cd |= t.lanes, (n & t.childLanes) === 0) {
    if (e !== null) {
     if (xa(e, t, n, !1), (n & t.childLanes) === 0) return null
    } else return null
   }
   if (e !== null && t.child !== e.child) throw Error(i(153));
   if (t.child !== null) {
    for (e = t.child, n = Ni(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ni(e, e.pendingProps), n.return = t;
    n.sibling = null
   }
   return t.child
  }

  function ul(e, t) {
   return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Sa(e)))
  }

  function dl(e, t, n) {
   switch (t.tag) {
    case 3:
     Ce(t, t.stateNode.containerInfo), _a(t, Aa, e.memoizedState.cache), da();
     break;
    case 27:
    case 5:
     Te(t);
     break;
    case 4:
     Ce(t, t.stateNode.containerInfo);
     break;
    case 10:
     _a(t, t.type, t.memoizedProps.value);
     break;
    case 31:
     if (t.memoizedState !== null) return t.flags |= 128, Mo(t), null;
     break;
    case 13:
     var r = t.memoizedState;
     if (r !== null) {
      if (r.dehydrated !== null) return jo(t), t.flags |= 128, null;
      r = xa(e, t, n, !1);
      var i = t.child.childLanes;
      return r || (n & i) !== 0 ? Qc(e, t, n) : (jo(t), e = ll(e, t, n), e === null ? null : e.sibling)
     }
     jo(t);
     break;
    case 19:
     if (t.flags & 128) return sl(e, t, n);
     if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r || (xa(e, t, n, !1), r = (n & t.childLanes) !== 0), i) {
      if (r) return sl(e, t, n);
      t.flags |= 128
     }
     if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Lo(t, Io.current), r) break;
     return null;
    case 22:
     return t.lanes = 0, Rc(e, t, n, t.pendingProps);
    case 24:
     _a(t, Aa, e.memoizedState.cache)
   }
   return ll(e, t, n)
  }

  function fl(e, t, n) {
   if (e !== null) {
    if (e.memoizedProps !== t.pendingProps) Nc = !0;
    else {
     if (!ul(e, n) && !(t.flags & 128)) return Nc = !1, dl(e, t, n);
     Nc = !!(e.flags & 131072)
    }
   } else Nc = !1, V && t.flags & 1048576 && Qi(t, Gi, t.index);
   switch (t.lanes = 0, t.tag) {
    case 16:
     a: {
      var r = t.pendingProps;
      if (e = eo(t.elementType), t.type = e, typeof e == `function`) Mi(e) ? (r = Sc(e, r), t.tag = 1, t = qc(null, t, e, r, n)) : (t.tag = 0, t = Gc(null, t, e, r, n));
      else {
       if (e != null) {
        var a = e.$$typeof;
        if (a === ee) {
         t.tag = 11, t = Fc(null, t, e, r, n);
         break a
        }
        if (a === re) {
         t.tag = 14, t = Ic(null, t, e, r, n);
         break a
        }
        if (a === F) {
         t.tag = 10, t.type = e, t = cl(null, t, n);
         break a
        }
       }
       throw t = de(e) || e, Error(i(306, t, ``))
      }
     }
     return t;
    case 0:
     return Gc(e, t, t.type, t.pendingProps, n);
    case 1:
     return r = t.type, a = Sc(r, t.pendingProps), qc(e, t, r, a, n);
    case 3:
     a: {
      if (Ce(t, t.stateNode.containerInfo), e === null) throw Error(i(387));r = t.pendingProps;
      var o = t.memoizedState;a = o.element,
      ho(e, t),
      So(t, r, null, n);
      var s = t.memoizedState;
      if (r = s.cache, _a(t, Aa, r), r !== o.cache && ba(t, [Aa], n, !0), xo(), r = s.element, o.isDehydrated) {
       if (o = {
         element: r,
         isDehydrated: !1,
         cache: s.cache
        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
        t = Jc(e, t, r, n);
        break a
       }
       if (r !== a) {
        a = Vi(Error(i(424)), t), pa(a), t = Jc(e, t, r, n);
        break a
       }
       switch (e = t.stateNode.containerInfo, e.nodeType) {
        case 9:
         e = e.body;
         break;
        default:
         e = e.nodeName === `HTML` ? e.ownerDocument.body : e
       }
       for (ra = fm(e.firstChild), na = t, V = !0, ia = null, aa = !0, n = fo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling
      } else {
       if (da(), r === a) {
        t = ll(e, t, n);
        break a
       }
       Pc(e, t, r, n)
      }
      t = t.child
     }
     return t;
    case 26:
     return Wc(e, t), e === null ? (n = Im(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : V || (t.stateNode = gp(t.type, t.pendingProps, xe.current, t)) : t.memoizedState = Im(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
    case 27:
     return Te(t), e === null && V && (r = t.stateNode = vm(t.type, t.pendingProps, xe.current), na = t, aa = !0, a = ra, Tp(t.type) ? (pm = a, ra = fm(r.firstChild)) : ra = a), Pc(e, t, t.pendingProps.children, n), Wc(e, t), e === null && (t.flags |= 4194304), t.child;
    case 5:
     return e === null && V && ((a = r = ra) && (r = om(r, t.type, t.pendingProps, aa), r === null ? a = !1 : (t.stateNode = r, na = t, ra = fm(r.firstChild), aa = !1, a = !0)), a || sa(t)), Te(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, _p(a, o) ? r = null : s !== null && _p(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Qo(e, t, ts, null, null, n), uh._currentValue = a), Wc(e, t), Pc(e, t, r, n), t.child;
    case 6:
     return e === null && V && ((e = n = ra) && (n = sm(n, t.pendingProps, aa), n === null ? e = !1 : (t.stateNode = n, na = t, ra = null, e = !0)), e || sa(t)), null;
    case 13:
     return Qc(e, t, n);
    case 4:
     return Ce(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = uo(t, null, r, n) : Pc(e, t, r, n), t.child;
    case 11:
     return Fc(e, t, t.type, t.pendingProps, n);
    case 7:
     return r = t.pendingProps, Wc(e, t), Pc(e, t, r, n), t.child;
    case 8:
     return Pc(e, t, t.pendingProps.children, n), t.child;
    case 12:
     return Pc(e, t, t.pendingProps.children, n), t.child;
    case 10:
     return cl(e, t, n);
    case 9:
     return a = t.type._context, r = t.pendingProps.children, Ca(t), a = wa(a), r = r(a), t.flags |= 1, Pc(e, t, r, n), t.child;
    case 14:
     return Ic(e, t, t.type, t.pendingProps, n);
    case 15:
     return Lc(e, t, t.type, t.pendingProps, n);
    case 19:
     return sl(e, t, n);
    case 31:
     return Uc(e, t, n);
    case 22:
     return Rc(e, t, n, t.pendingProps);
    case 24:
     return Ca(t), r = wa(Aa), e === null ? (a = Ga(), a === null && (a = ed, o = ja(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
      parent: r,
      cache: a
     }, mo(t), _a(t, Aa, a)) : ((e.lanes & n) !== 0 && (ho(e, t), So(t, null, null, n), xo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, _a(t, Aa, r), r !== a.cache && ba(t, [Aa], n, !0)) : (a = {
      parent: r,
      cache: r
     }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), _a(t, Aa, r))), Pc(e, t, t.pendingProps.children, n), t.child;
    case 30:
     return t.stateNode === null && (t.stateNode = {
      autoName: null,
      paired: null,
      clones: null,
      ref: null
     }), r = t.pendingProps, r.name != null && r.name !== `auto` ? t.flags |= e === null ? 18882560 : 18874368 : V && $i(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Wc(e, t), Pc(e, t, r.children, n), t.child;
    case 29:
     throw t.pendingProps
   }
   throw Error(i(156, t.tag))
  }

  function pl(e) {
   e.flags |= 4
  }

  function ml(e, t, n, r, i) {
   var a;
   if ((a = !!(e.mode & 32)) && (a = n === null ? Zm(t, r) : Zm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
    if (e.flags |= 16777216, (i & 335544128) === i) {
     if (e.stateNode.complete) e.flags |= 8192;
     else if (Gd()) e.flags |= 8192;
     else throw to = Za, Ya
    }
   } else e.flags &= -16777217
  }

  function hl(e, t) {
   if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
   else if (e.flags |= 16777216, !Qm(t)) {
    if (Gd()) e.flags |= 8192;
    else throw to = Za, Ya
   }
  }

  function gl(e, t) {
   t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : lt(), e.lanes |= t, fd |= t)
  }

  function _l(e, t) {
   if (!V) switch (e.tailMode) {
    case `visible`:
     break;
    case `collapsed`:
     for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
     r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
     break;
    default:
     for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
     n === null ? e.tail = null : n.sibling = null
   }
  }

  function vl(e) {
   var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
   if (t)
    for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
   else
    for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
   return e.subtreeFlags |= r, e.childLanes = n, t
  }

  function yl(e, t, n) {
   var r = t.pendingProps;
   switch (ea(t), t.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
     return vl(t), null;
    case 1:
     return vl(t), null;
    case 3:
     return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), va(Aa), we(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ua(t) ? pl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, fa())), vl(t), null;
    case 26:
     var a = t.type,
      o = t.memoizedState;
     return e === null ? (pl(t), o === null ? (vl(t), ml(t, a, null, r, n)) : (vl(t), hl(t, o))) : o ? o === e.memoizedState ? (vl(t), t.flags &= -16777217) : (pl(t), vl(t), hl(t, o)) : (e = e.memoizedProps, e !== r && pl(t), vl(t), ml(t, a, e, r, n)), null;
    case 27:
     if (Ee(t), n = xe.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && pl(t);
     else {
      if (!r) {
       if (t.stateNode === null) throw Error(i(166));
       return vl(t), t.subtreeFlags &= -33554433, null
      }
      e = ye.current, ua(t) ? ca(t, e) : (e = vm(a, r, n), t.stateNode = e, pl(t))
     }
     return vl(t), t.subtreeFlags &= -33554433, null;
    case 5:
     if (Ee(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && pl(t);
     else {
      if (!r) {
       if (t.stateNode === null) throw Error(i(166));
       return vl(t), t.subtreeFlags &= -33554433, null
      }
      if (o = ye.current, ua(t)) ca(t, o);
      else {
       var s = pp(xe.current);
       switch (o) {
        case 1:
         o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
         break;
        case 2:
         o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
         break;
        default:
         switch (a) {
          case `svg`:
           o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
           break;
          case `math`:
           o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
           break;
          case `script`:
           o = s.createElement(`div`), o.innerHTML = `<script><\/script>`, o = o.removeChild(o.firstChild);
           break;
          case `select`:
           o = typeof r.is == `string` ? s.createElement(`select`, {
            is: r.is
           }) : s.createElement(`select`), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
           break;
          default:
           o = typeof r.is == `string` ? s.createElement(a, {
            is: r.is
           }) : s.createElement(a)
         }
       }
       o[xt] = t, o[St] = r;
       a: for (s = t.child; s !== null;) {
        if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
         s.child.return = s, s = s.child;
         continue
        }
        if (s === t) break a;
        for (; s.sibling === null;) {
         if (s.return === null || s.return === t) break a;
         s = s.return
        }
        s.sibling.return = s.return, s = s.sibling
       }
       t.stateNode = o;
       a: switch (op(o, a, r), a) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
         r = !!r.autoFocus;
         break a;
        case `img`:
         r = !0;
         break a;
        default:
         r = !1
       }
       r && pl(t)
      }
     }
     return vl(t), t.subtreeFlags &= -33554433, ml(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
    case 6:
     if (e && t.stateNode != null) e.memoizedProps !== r && pl(t);
     else {
      if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
      if (e = xe.current, ua(t)) {
       if (e = t.stateNode, n = t.memoizedProps, r = null, a = na, a !== null) switch (a.tag) {
        case 27:
        case 5:
         r = a.memoizedProps
       }
       e[xt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || rp(e.nodeValue, n)), e || sa(t, !0)
      } else e = pp(e).createTextNode(r), e[xt] = t, t.stateNode = e
     }
     return vl(t), null;
    case 31:
     if (n = t.memoizedState, e === null || e.memoizedState !== null) {
      if (r = ua(t), n !== null) {
       if (e === null) {
        if (!r) throw Error(i(318));
        if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
        e[xt] = t
       } else da(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
       vl(t), e = !1
      } else n = fa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
      if (!e) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null);
      if (t.flags & 128) throw Error(i(558))
     }
     return vl(t), null;
    case 13:
     if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
      if (a = ua(t), r !== null && r.dehydrated !== null) {
       if (e === null) {
        if (!a) throw Error(i(318));
        if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
        a[xt] = t
       } else da(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
       vl(t), a = !1
      } else a = fa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
      if (!a) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null)
     }
     return Fo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), gl(t, t.updateQueue), vl(t), null);
    case 4:
     return we(), e === null && qf(t.stateNode.containerInfo), t.flags |= 67108864, vl(t), null;
    case 10:
     return va(t.type), vl(t), null;
    case 19:
     if (Ro(t), r = t.memoizedState, r === null) return vl(t), null;
     if (a = !!(t.flags & 128), o = r.rendering, o === null) {
      if (a) _l(r, !1);
      else {
       if (sd !== 0 || e !== null && e.flags & 128)
        for (e = t.child; e !== null;) {
         if (o = zo(e), o !== null) {
          for (t.flags |= 128, _l(r, !1), e = o.updateQueue, t.updateQueue = e, gl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Pi(n, e), n = n.sibling;
          return Lo(t, Io.current & 1 | 2), V && Zi(t, r.treeForkCount), t.child
         }
         e = e.sibling
        }
       r.tail !== null && ze() > vd && (t.flags |= 128, a = !0, _l(r, !1), t.lanes = 4194304)
      }
     } else {
      if (!a) {
       if (e = zo(o), e !== null) {
        if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, gl(t, e), _l(r, !0), r.tail === null && r.tailMode !== `collapsed` && r.tailMode !== `visible` && !o.alternate && !V) return vl(t), null
       } else 2 * ze() - r.renderingStartTime > vd && n !== 536870912 && (t.flags |= 128, a = !0, _l(r, !1), t.lanes = 4194304)
      }
      r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o)
     }
     if (r.tail !== null) {
      e = r.tail;
      a: {
       for (n = e; n !== null;) {
        if (n.alternate !== null) {
         n = !1;
         break a
        }
        n = n.sibling
       }
       n = !0
      }
      return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ze(), e.sibling = null, o = Io.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === `visible` || r.tailMode === `collapsed` || !n || V ? Lo(t, o) : (n = o, ve(ko, t), ve(Io, n), Ao === null && (Ao = t)), V && Zi(t, r.treeForkCount), e
     }
     return vl(t), null;
    case 22:
    case 23:
     return Fo(t), Oo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), n = t.updateQueue, n !== null && gl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && _e(Wa), null;
    case 24:
     return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), va(Aa), vl(t), null;
    case 25:
     return null;
    case 30:
     return t.flags |= 33554432, vl(t), null
   }
   throw Error(i(156, t.tag))
  }

  function W(e, t) {
   switch (ea(t), t.tag) {
    case 1:
     return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
     return va(Aa), we(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 26:
    case 27:
    case 5:
     return Ee(t), null;
    case 31:
     if (t.memoizedState !== null) {
      if (Fo(t), t.alternate === null) throw Error(i(340));
      da()
     }
     return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 13:
     if (Fo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
      if (t.alternate === null) throw Error(i(340));
      da()
     }
     return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
     return Ro(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
    case 4:
     return we(), null;
    case 10:
     return va(t.type), null;
    case 22:
    case 23:
     return Fo(t), Oo(), e !== null && _e(Wa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 24:
     return va(Aa), null;
    case 25:
     return null;
    default:
     return null
   }
  }

  function bl(e, t) {
   switch (ea(t), t.tag) {
    case 3:
     va(Aa), we();
     break;
    case 26:
    case 27:
    case 5:
     Ee(t);
     break;
    case 4:
     we();
     break;
    case 31:
     t.memoizedState !== null && Fo(t);
     break;
    case 13:
     Fo(t);
     break;
    case 19:
     Ro(t);
     break;
    case 10:
     va(t.type);
     break;
    case 22:
    case 23:
     Fo(t), Oo(), e !== null && _e(Wa);
     break;
    case 24:
     va(Aa)
   }
  }

  function xl(e, t) {
   try {
    var n = t.updateQueue,
     r = n === null ? null : n.lastEffect;
    if (r !== null) {
     var i = r.next;
     n = i;
     do {
      if ((n.tag & e) === e) {
       r = void 0;
       var a = n.create,
        o = n.inst;
       r = a(), o.destroy = r
      }
      n = n.next
     } while (n !== i)
    }
   } catch (e) {
    gf(t, t.return, e)
   }
  }

  function Sl(e, t, n) {
   try {
    var r = t.updateQueue,
     i = r === null ? null : r.lastEffect;
    if (i !== null) {
     var a = i.next;
     r = a;
     do {
      if ((r.tag & e) === e) {
       var o = r.inst,
        s = o.destroy;
       if (s !== void 0) {
        o.destroy = void 0, i = t;
        var c = n,
         l = s;
        try {
         l()
        } catch (e) {
         gf(i, c, e)
        }
       }
      }
      r = r.next
     } while (r !== a)
    }
   } catch (e) {
    gf(t, t.return, e)
   }
  }

  function Cl(e) {
   var t = e.updateQueue;
   if (t !== null) {
    var n = e.stateNode;
    try {
     wo(t, n)
    } catch (t) {
     gf(e, e.return, t)
    }
   }
  }

  function wl(e, t, n) {
   n.props = Sc(e.type, e.memoizedProps), n.state = e.memoizedState;
   try {
    n.componentWillUnmount()
   } catch (n) {
    gf(e, t, n)
   }
  }

  function Tl(e, t) {
   try {
    var n = e.ref;
    if (n !== null) {
     switch (e.tag) {
      case 26:
      case 27:
      case 5:
       var r = e.stateNode;
       break;
      case 30:
       var i = e.stateNode,
        a = gi(e.memoizedProps, i);
       (i.ref === null || i.ref.name !== a) && (i.ref = Lp(a)), r = i.ref;
       break;
      case 7:
       if (e.stateNode === null) {
        var o = new Rp(e);
        h(e.child, !1, tm, o, void 0, void 0), e.stateNode = o
       }
       r = e.stateNode;
       break;
      default:
       r = e.stateNode
     }
     typeof n == `function` ? e.refCleanup = n(r) : n.current = r
    }
   } catch (n) {
    gf(e, t, n)
   }
  }

  function El(e, t) {
   var n = e.ref,
    r = e.refCleanup;
   if (n !== null) {
    if (typeof r == `function`) try {
     r()
    } catch (n) {
     gf(e, t, n)
    } finally {
     e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
    } else if (typeof n == `function`) try {
     n(null)
    } catch (n) {
     gf(e, t, n)
    } else n.current = null
   }
  }

  function Dl(e, t) {
   if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
    for (var n = 0; n < t.length; n++) rm(e.stateNode, t[n])
  }

  function Ol(e) {
   for (var t = e.return; t !== null && (jl(t) && rm(e.stateNode, t.stateNode), !Al(t));) t = t.return
  }

  function kl(e) {
   for (var t = e.return; t !== null && (jl(t) && im(e.stateNode, t.stateNode), !Al(t));) t = t.return
  }

  function Al(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 27
  }

  function jl(e) {
   return e && e.tag === 7 && e.stateNode !== null
  }

  function Ml(e) {
   var t = e.type,
    n = e.memoizedProps,
    r = e.stateNode;
   try {
    a: switch (t) {
     case `button`:
     case `input`:
     case `select`:
     case `textarea`:
      n.autoFocus && r.focus();
      break a;
     case `img`:
      n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
    }
   }
   catch (t) {
    gf(e, e.return, t)
   }
  }

  function Nl(e, t, n) {
   try {
    var r = e.stateNode;
    cp(r, e.type, n, t), r[St] = t
   } catch (t) {
    gf(e, e.return, t)
   }
  }

  function Pl(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Tp(e.type) || e.tag === 4
  }

  function Fl(e) {
   a: for (;;) {
    for (; e.sibling === null;) {
     if (e.return === null || Pl(e.return)) return null;
     e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
     if (e.tag === 27 && Tp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
     e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
   }
  }

  function Il(e, t, n, r) {
   var i = e.tag;
   if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _n)), Dl(e, r), B = !0;
   else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Tp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
    for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling
  }

  function Ll(e, t, n, r) {
   var i = e.tag;
   if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Dl(e, r), B = !0;
   else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Tp(e.type) && (n = e.stateNode)), e = e.child, e !== null))
    for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling
  }

  function Rl(e) {
   var t = e.stateNode,
    n = e.memoizedProps;
   try {
    for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
    op(t, r, n), t[xt] = e, t[St] = n
   } catch (t) {
    gf(e, e.return, t)
   }
  }
  var zl = !1,
   Bl = null;

  function Vl(e) {
   (e.tag === 30 || e.subtreeFlags & 33554432) && (zl = !0)
  }
  var Hl = null;

  function Ul() {
   var e = Hl;
   return Hl = null, e
  }
  var Wl = 0;

  function Gl(e, t, n, r, i) {
   return Wl = 0, Kl(e.child, t, n, r, i)
  }

  function Kl(e, t, n, r, i) {
   for (var a = !1; e !== null;) {
    if (e.tag === 5) {
     var o = e.stateNode;
     if (r !== null) {
      var s = jp(o);
      r.push(s), s.view && (a = !0)
     } else a || jp(o).view && (a = !0);
     zl = !0, Op(o, Wl === 0 ? t : t + `_` + Wl, n), Wl++
    } else e.tag === 22 && e.memoizedState !== null || e.tag === 30 && i || Kl(e.child, t, n, r, i) && (a = !0);
    e = e.sibling
   }
   return a
  }

  function ql(e, t) {
   for (; e !== null;) e.tag === 5 ? kp(e.stateNode, e.memoizedProps) : e.tag === 22 && e.memoizedState !== null || e.tag === 30 && t || ql(e.child, t), e = e.sibling
  }

  function Jl(e) {
   if (e.subtreeFlags & 18874368)
    for (e = e.child; e !== null;) {
     if ((e.tag !== 22 || e.memoizedState === null) && (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
      var t = e.memoizedProps;
      if (t.name == null || t.name === `auto`) throw Error(i(544));
      var n = t.name;
      t = vi(t.default, t.share), t !== `none` && (Gl(e, n, t, null, !1) || ql(e.child, !1))
     }
     e = e.sibling
    }
  }

  function Yl(e, t) {
   if (e.tag === 30) {
    var n = e.stateNode,
     r = e.memoizedProps,
     i = gi(r, n),
     a = vi(r.default, n.paired ? r.share : r.enter);
    a === `none` ? Jl(e) : Gl(e, i, a, null, !1) ? (Jl(e), n.paired || t || Fd(e, r.onEnter)) : ql(e.child, !1)
   } else if (e.subtreeFlags & 33554432)
    for (e = e.child; e !== null;) Yl(e, t), e = e.sibling;
   else Jl(e)
  }

  function Xl(e) {
   if (Bl !== null && Bl.size !== 0) {
    var t = Bl;
    if (e.subtreeFlags & 18874368)
     for (e = e.child; e !== null;) {
      if (e.tag !== 22 || e.memoizedState === null) {
       if (e.tag === 30 && e.flags & 18874368) {
        var n = e.memoizedProps,
         r = n.name;
        if (r != null && r !== `auto`) {
         var i = t.get(r);
         if (i !== void 0) {
          var a = vi(n.default, n.share);
          if (a !== `none` && (Gl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Fd(e, n.onShare)) : ql(e.child, !1)), t.delete(r), t.size === 0) break
         }
        }
       }
       Xl(e)
      }
      e = e.sibling
     }
   }
  }

  function Zl(e) {
   if (e.tag === 30) {
    var t = e.memoizedProps,
     n = gi(t, e.stateNode),
     r = Bl === null ? void 0 : Bl.get(n),
     i = vi(t.default, r === void 0 ? t.exit : t.share);
    i !== `none` && (Gl(e, n, i, null, !1) ? r === void 0 ? Fd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Bl.delete(n), Fd(e, t.onShare)) : ql(e.child, !1)), Bl !== null && Xl(e)
   } else if (e.subtreeFlags & 33554432)
    for (e = e.child; e !== null;) Zl(e), e = e.sibling;
   else Bl !== null && Xl(e)
  }

  function Ql(e) {
   for (e = e.child; e !== null;) {
    if (e.tag === 30) {
     var t = e.memoizedProps,
      n = gi(t, e.stateNode);
     t = vi(t.default, t.update), e.flags &= -5, t !== `none` && Gl(e, n, t, e.memoizedState = [], !1)
    } else e.subtreeFlags & 33554432 && Ql(e);
    e = e.sibling
   }
  }

  function $l(e) {
   if (e.subtreeFlags & 18874368)
    for (e = e.child; e !== null;) {
     if (e.tag !== 22 || e.memoizedState === null) {
      if (e.tag === 30 && e.flags & 18874368) {
       var t = e.stateNode;
       t.paired !== null && (t.paired = null, ql(e.child, !1))
      }
      $l(e)
     }
     e = e.sibling
    }
  }

  function eu(e) {
   if (e.tag === 30) e.stateNode.paired = null, ql(e.child, !1), $l(e);
   else if (e.subtreeFlags & 33554432)
    for (e = e.child; e !== null;) eu(e), e = e.sibling;
   else $l(e)
  }

  function tu(e) {
   for (e = e.child; e !== null;) e.tag === 30 ? ql(e.child, !1) : e.subtreeFlags & 33554432 && tu(e), e = e.sibling
  }

  function nu(e, t, n, r, i, a, o) {
   for (var s = !1; t !== null;) {
    if (t.tag === 5) {
     var c = t.stateNode;
     if (a !== null && Wl < a.length) {
      var l = a[Wl],
       u = jp(c);
      (l.view || u.view) && (s = !0);
      var d;
      if (d = !(e.flags & 4)) {
       if (u.clip) d = !0;
       else {
        d = l.rect;
        var f = u.rect;
        d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width
       }
      }
      d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32)
     } else e.flags |= 32;
     e.flags & 4 && Op(c, Wl === 0 ? n : n + `_` + Wl, i), s && e.flags & 4 || (Hl === null && (Hl = []), Hl.push(c, Wl === 0 ? r : r + `_` + Wl, t.memoizedProps)), Wl++
    } else(t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : nu(e, t.child, n, r, i, a, o) && (s = !0));
    t = t.sibling
   }
   return s
  }

  function ru(e, t) {
   for (e = e.child; e !== null;) {
    if (e.tag === 30) {
     var n = e.memoizedProps,
      r = e.stateNode,
      i = gi(n, r),
      a = vi(n.default, n.update);
     if (t) {
      r = r.clones;
      var o = r === null ? null : r.map(Mp)
     } else o = e.memoizedState, e.memoizedState = null;
     r = e;
     var s = e.child;
     Wl = 0, i = nu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Fd(e, n.onUpdate))
    } else e.subtreeFlags & 33554432 && ru(e, t);
    e = e.sibling
   }
  }
  var iu = !1,
   G = !1,
   au = !1,
   ou = !1,
   su = typeof WeakSet == `function` ? WeakSet : Set,
   cu = null,
   lu = !1,
   uu = !1,
   du = !1,
   fu = !1;

  function pu(e, t, n) {
   if (e = e.containerInfo, dp = yh, e = Kr(e), qr(e)) {
    if (`selectionStart` in e) var r = {
     start: e.selectionStart,
     end: e.selectionEnd
    };
    else a: {
     r = (r = e.ownerDocument) && r.defaultView || window;
     var i = r.getSelection && r.getSelection();
     if (i && i.rangeCount !== 0) {
      r = i.anchorNode;
      var a = i.anchorOffset,
       o = i.focusNode;
      i = i.focusOffset;
      try {
       r.nodeType, o.nodeType
      } catch {
       r = null;
       break a
      }
      var s = 0,
       c = -1,
       l = -1,
       u = 0,
       d = 0,
       f = e,
       p = null;
      b: for (;;) {
       for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
       for (;;) {
        if (f === e) break b;
        if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
        f = p, p = f.parentNode
       }
       f = m
      }
      r = c === -1 || l === -1 ? null : {
       start: c,
       end: l
      }
     } else r = null
    }
    r = r || {
     start: 0,
     end: 0
    }
   } else r = null;
   for (fp = {
     focusedElem: e,
     selectionRange: r
    }, yh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
    if (e = cu, n && (r = e.deletions, r !== null))
     for (a = 0; a < r.length; a++) n && Zl(r[a]);
    if (e.alternate === null && e.flags & 2) n && Vl(e), mu(n);
    else {
     if (e.tag === 22) {
      if (r = e.alternate, e.memoizedState !== null) {
       r !== null && r.memoizedState === null && n && Zl(r), mu(n);
       continue
      }
      if (r !== null && r.memoizedState !== null) {
       n && Vl(e), mu(n);
       continue
      }
     }
     r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && Ql(e), mu(n))
    }
   }
   Bl = null
  }

  function mu(e) {
   for (; cu !== null;) {
    var t = cu,
     n = e,
     r = t.alternate,
     a = t.flags;
    switch (t.tag) {
     case 0:
     case 11:
     case 15:
      break;
     case 1:
      if (a & 1024 && r !== null) {
       n = void 0, a = r.memoizedProps, r = r.memoizedState;
       var o = t.stateNode;
       try {
        var s = Sc(t.type, a);
        n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n
       } catch (e) {
        gf(t, t.return, e)
       }
      }
      break;
     case 3:
      if (a & 1024) {
       if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) am(r);
       else if (n === 1) switch (r.nodeName) {
        case `HEAD`:
        case `HTML`:
        case `BODY`:
         am(r);
         break;
        default:
         r.textContent = ``
       }
      }
      break;
     case 5:
     case 26:
     case 27:
     case 6:
     case 4:
     case 17:
      break;
     case 30:
      n && r !== null && (n = gi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = vi(a.default, a.update), a !== `none` && Gl(r, n, a, r.memoizedState = [], !0));
      break;
     default:
      if (a & 1024) throw Error(i(163))
    }
    if (r = t.sibling, r !== null) {
     r.return = t.return, cu = r;
     break
    }
    cu = t.return
   }
  }

  function hu(e, t, n) {
   var r = n.flags;
   switch (n.tag) {
    case 0:
    case 11:
    case 15:
     Fu(e, n), r & 4 && xl(5, n);
     break;
    case 1:
     if (Fu(e, n), r & 4) {
      if (e = n.stateNode, t === null) try {
       e.componentDidMount()
      } catch (e) {
       gf(n, n.return, e)
      } else {
       var i = Sc(n.type, t.memoizedProps);
       t = t.memoizedState;
       try {
        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
       } catch (e) {
        gf(n, n.return, e)
       }
      }
     }
     r & 64 && Cl(n), r & 512 && Tl(n, n.return);
     break;
    case 3:
     if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
      if (t = null, n.child !== null) switch (n.child.tag) {
       case 27:
       case 5:
        t = n.child.stateNode;
        break;
       case 1:
        t = n.child.stateNode
      }
      try {
       wo(e, t)
      } catch (e) {
       gf(n, n.return, e)
      }
     }
     break;
    case 27:
     t === null && r & 4 && Rl(n);
    case 26:
    case 5:
     Fu(e, n), t === null && r & 4 && Ml(n), r & 512 && Tl(n, n.return);
     break;
    case 12:
     Fu(e, n);
     break;
    case 31:
     Fu(e, n), r & 4 && wu(e, n);
     break;
    case 13:
     Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = bf.bind(null, n), dm(e, n))));
     break;
    case 22:
     if (r = n.memoizedState !== null || iu, !r) {
      var a = t !== null && t.memoizedState !== null || G;
      t = iu, i = G, iu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), iu = t, G = i
     }
     break;
    case 30:
     Fu(e, n), r & 512 && Tl(n, n.return);
     break;
    case 7:
     r & 512 && Tl(n, n.return);
    default:
     Fu(e, n)
   }
  }

  function gu(e, t) {
   for (e = e.child; e !== null;) _u(e, t), e = e.sibling
  }

  function _u(e, t) {
   switch (e.tag) {
    case 5:
    case 26:
     try {
      var n = e.stateNode;
      if (t) {
       var r = n.style;
       typeof r.setProperty == `function` ? r.setProperty(`display`, `none`, `important`) : r.display = `none`
      } else {
       var i = e.stateNode,
        a = e.memoizedProps.style,
        o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
       i.style.display = o == null || typeof o == `boolean` ? `` : (`` + o).trim()
      }
     } catch (t) {
      gf(e, e.return, t)
     }
     vu(e, t);
     break;
    case 6:
     try {
      e.stateNode.nodeValue = t ? `` : e.memoizedProps, B = !0
     } catch (t) {
      gf(e, e.return, t)
     }
     break;
    case 18:
     try {
      var s = e.stateNode;
      t ? Dp(s, !0) : Dp(e.stateNode, !1)
     } catch (t) {
      gf(e, e.return, t)
     }
     break;
    case 22:
    case 23:
     e.memoizedState === null && gu(e, t);
     break;
    default:
     gu(e, t)
   }
  }

  function vu(e, t) {
   if (e.subtreeFlags & 67108864)
    for (e = e.child; e !== null;) {
     a: {
      var n = e,
       r = t;
      switch (n.tag) {
       case 4:
        _u(n, r);
        break a;
       case 22:
        n.memoizedState === null && vu(n, r);
        break a;
       default:
        vu(n, r)
      }
     }
     e = e.sibling
    }
  }

  function yu(e) {
   var t = e.alternate;
   t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && At(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var bu = null,
   xu = !1;

  function Su(e, t, n) {
   for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling
  }

  function Cu(e, t, n) {
   if (Ye && typeof Ye.onCommitFiberUnmount == `function`) try {
    Ye.onCommitFiberUnmount(Je, n)
   } catch {}
   switch (n.tag) {
    case 26:
     G || El(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
     break;
    case 27:
     G || El(n, t), kl(n);
     var r = bu,
      i = xu;
     Tp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), ym(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
     break;
    case 5:
     G || El(n, t), kl(n);
    case 6:
     if (n.tag === 6 && kl(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
      if (xu) try {
       (bu.nodeType === 9 ? bu.body : bu.nodeName === `HTML` ? bu.ownerDocument.body : bu).removeChild(n.stateNode), B = !0
      } catch (e) {
       gf(n, t, e)
      } else try {
       bu.removeChild(n.stateNode), B = !0
      } catch (e) {
       gf(n, t, e)
      }
     }
     break;
    case 18:
     bu !== null && (xu ? (e = bu, Ep(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode), Gh(e)) : Ep(bu, n.stateNode));
     break;
    case 4:
     r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
     break;
    case 0:
    case 11:
    case 14:
    case 15:
     Sl(2, n, t), G || Sl(4, n, t), Su(e, t, n);
     break;
    case 1:
     G || (El(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function` && wl(n, t, r)), Su(e, t, n);
     break;
    case 21:
     Su(e, t, n);
     break;
    case 22:
     G = (r = G) || n.memoizedState !== null, Su(e, t, n), G = r;
     break;
    case 30:
     El(n, t), Su(e, t, n);
     break;
    case 7:
     G || El(n, t), Su(e, t, n);
     break;
    default:
     Su(e, t, n)
   }
  }

  function wu(e, t) {
   if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
    e = e.dehydrated;
    try {
     Gh(e)
    } catch (e) {
     gf(t, t.return, e)
    }
   }
  }

  function Tu(e, t) {
   if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
    Gh(e)
   } catch (e) {
    gf(t, t.return, e)
   }
  }

  function Eu(e) {
   switch (e.tag) {
    case 31:
    case 13:
    case 19:
     var t = e.stateNode;
     return t === null && (t = e.stateNode = new su), t;
    case 22:
     return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su), t;
    default:
     throw Error(i(435, e.tag))
   }
  }

  function Du(e, t) {
   var n = Eu(e);
   t.forEach(function(t) {
    if (!n.has(t)) {
     n.add(t);
     var r = xf.bind(null, e, t);
     t.then(r, r)
    }
   })
  }

  function Ou(e, t, n) {
   var r = t.deletions;
   if (r !== null)
    for (var a = 0; a < r.length; a++) {
     var o = r[a],
      s = e,
      c = t,
      l = c;
     a: for (; l !== null;) {
      switch (l.tag) {
       case 27:
        if (Tp(l.type)) {
         bu = l.stateNode, xu = !1;
         break a
        }
        break;
       case 5:
        bu = l.stateNode, xu = !1;
        break a;
       case 3:
       case 4:
        bu = l.stateNode.containerInfo, xu = !0;
        break a
      }
      l = l.return
     }
     if (bu === null) throw Error(i(160));
     Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null
    }
   if (t.subtreeFlags & 13886)
    for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling
  }
  var ku = null;

  function Au(e, t, n) {
   var r = e.alternate,
    a = e.flags;
   switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
     if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null))
      for (var o = 0; o < r.length; o++) {
       var s = r[o];
       s.ref.impl = s.nextImpl
      }
     Ou(t, e, n), ju(e), a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return));
     break;
    case 1:
     Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
     break;
    case 26:
     if (o = ku, Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 4) {
      if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
       if (n === null) {
        if (e.stateNode === null) {
         if (iu) e.stateNode = gp(e.type, e.memoizedProps, t.containerInfo, e);
         else {
          a: {
           t = e.type,
           n = e.memoizedProps,
           a = o.ownerDocument || o;b: switch (t) {
            case `title`:
             r = a.getElementsByTagName(`title`)[0], (!r || r[Ot] || r[xt] || r.namespaceURI === `http://www.w3.org/2000/svg` || r.hasAttribute(`itemprop`)) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector(`head > title`))), op(r, t, n), r[xt] = e, Ft(r), t = r;
             break a;
            case `link`:
             if (o = Jm(`link`, `href`, a).get(t + (n.href || ``))) {
              for (s = 0; s < o.length; s++)
               if (r = o[s], r.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && r.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && r.getAttribute(`title`) === (n.title == null ? null : n.title) && r.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                o.splice(s, 1);
                break b
               }
             }
             r = a.createElement(t), op(r, t, n), a.head.appendChild(r);
             break;
            case `meta`:
             if (o = Jm(`meta`, `content`, a).get(t + (n.content || ``))) {
              for (s = 0; s < o.length; s++)
               if (r = o[s], r.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && r.getAttribute(`name`) === (n.name == null ? null : n.name) && r.getAttribute(`property`) === (n.property == null ? null : n.property) && r.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                o.splice(s, 1);
                break b
               }
             }
             r = a.createElement(t), op(r, t, n), a.head.appendChild(r);
             break;
            default:
             throw Error(i(468, t))
           }
           r[xt] = e,
           Ft(r),
           t = r
          }
          e.stateNode = t
         }
        } else iu || Ym(o, e.type, e.stateNode)
       } else e.stateNode = Um(o, n, e.memoizedProps)
      } else a === n ? n === null && e.stateNode !== null && Nl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : a.count--, n === null ? iu || Ym(o, e.type, e.stateNode) : Um(o, n, e.memoizedProps))
     }
     break;
    case 27:
     Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps);
     break;
    case 5:
     if (o = au, au = !1, Ou(t, e, n), au = o, ju(e), a & 512 && (G || r === null || El(r, r.return)), e.flags & 32) {
      t = e.stateNode;
      try {
       ln(t, ``), B = !0
      } catch (t) {
       gf(e, e.return, t)
      }
     }
     a & 4 && e.stateNode != null && (t = e.memoizedProps, Nl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ou = !0);
     break;
    case 6:
     if (Ou(t, e, n), ju(e), a & 4) {
      if (e.stateNode === null) throw Error(i(162));
      t = e.memoizedProps, n = e.stateNode;
      try {
       n.nodeValue = t, B = !0
      } catch (t) {
       gf(e, e.return, t)
      }
     }
     break;
    case 3:
     if (B = !1, qm = null, o = ku, ku = Cm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
      Gh(t.containerInfo)
     } catch (t) {
      gf(e, e.return, t)
     }
     ou && (ou = !1, Mu(e)), B = !1;
     break;
    case 4:
     a = au, au = iu, r = Gt(), o = ku, ku = Cm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, B && uu && (du = !0), B = r, au = a;
     break;
    case 12:
     Ou(t, e, n), ju(e);
     break;
    case 31:
     Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
     break;
    case 13:
     Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (gd = ze()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
     break;
    case 22:
     o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
     var c = iu,
      l = G,
      u = au;
     iu = c || o, au = u || o, G = l || s, Ou(t, e, n), G = l, au = u, iu = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = o || iu, G = t, Iu(e, 2), iu = n, G = r), !o && au || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
     break;
    case 19:
     Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
     break;
    case 30:
     a & 512 && (G || r === null || El(r, r.return)), a = Gt(), o = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && vi(c.default, c.update) !== `none`, Ou(t, e, n), ju(e), s && r !== null && B && (e.flags |= 4), uu = o, B = a;
     break;
    case 21:
     break;
    case 7:
     a & 512 && (G || r === null || El(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
    default:
     Ou(t, e, n), ju(e)
   }
  }

  function ju(e) {
   var t = e.flags;
   if (t & 2) {
    try {
     for (var n, r = e.return; r !== null;) {
      if (Pl(r)) {
       n = r;
       break
      }
      r = r.return
     }
     r = null;
     for (var a = e.return; a !== null;) {
      if (jl(a)) {
       var o = a.stateNode;
       r === null ? r = [o] : r.push(o)
      }
      if (Al(a)) break;
      a = a.return
     }
     var s = r;
     if (n == null) throw Error(i(160));
     switch (n.tag) {
      case 27:
       var c = n.stateNode;
       Ll(e, Fl(e), c, s);
       break;
      case 5:
       var l = n.stateNode;
       n.flags & 32 && (ln(l, ``), n.flags &= -33), Ll(e, Fl(e), l, s);
       break;
      case 3:
      case 4:
       var u = n.stateNode.containerInfo;
       Il(e, Fl(e), u, s);
       break;
      default:
       throw Error(i(161))
     }
    } catch (t) {
     gf(e, e.return, t)
    }
    e.flags &= -3
   }
   t & 4096 && (e.flags &= -4097)
  }

  function Mu(e) {
   if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null;) {
     var t = e;
     Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, yh = !0, t.reset(), yh = !1), e = e.sibling
    }
  }

  function Nu(e, t) {
   if (t.subtreeFlags & 9270)
    for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
   else ru(t, !1)
  }

  function Pu(e, t) {
   var n = e.alternate;
   if (n === null) Yl(e, !1);
   else switch (e.tag) {
    case 3:
     if (fu = lu = !1, Ul(), Nu(t, e), !lu && !du) {
      if (e = Hl, e !== null)
       for (var r = 0; r < e.length; r += 3) {
        n = e[r];
        var i = e[r + 1];
        kp(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
         opacity: [0, 0],
         pointerEvents: [`none`, `none`]
        }, {
         duration: 0,
         fill: `forwards`,
         pseudoElement: `::view-transition-group(` + i + `)`
        })
       }
      e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === `` && (e.style.viewTransitionName = `none`, e.animate({
       opacity: [0, 0],
       pointerEvents: [`none`, `none`]
      }, {
       duration: 0,
       fill: `forwards`,
       pseudoElement: `::view-transition-group(root)`
      }), e.animate({
       width: [0, 0],
       height: [0, 0]
      }, {
       duration: 0,
       fill: `forwards`,
       pseudoElement: `::view-transition`
      })), fu = !0
     }
     Hl = null;
     break;
    case 5:
     Nu(t, e);
     break;
    case 4:
     r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
     break;
    case 22:
     e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Yl(e, !1));
     break;
    case 30:
     r = lu, i = Ul(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
     var a = e.memoizedProps,
      o = e.stateNode;
     t = gi(a, o), o = gi(n.memoizedProps, o);
     var s = vi(a.default, a.update);
     s === `none` ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Wl = 0, t = nu(e, n, t, o, s, a, !0), Wl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Fd(e, e.memoizedProps.onUpdate), Hl = i) : i !== null && (i.push.apply(i, Hl), Hl = i), lu = e.flags & 32 ? !0 : r;
     break;
    default:
     Nu(t, e)
   }
  }

  function Fu(e, t) {
   if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling
  }

  function Iu(e, t) {
   for (e = e.child; e !== null;) {
    var n = e,
     r = t;
    switch (n.tag) {
     case 0:
     case 11:
     case 14:
     case 15:
      Sl(4, n, n.return), Iu(n, r);
      break;
     case 1:
      El(n, n.return);
      var i = n.stateNode;
      typeof i.componentWillUnmount == `function` && wl(n, n.return, i), Iu(n, r);
      break;
     case 27:
      r & 2 && ym(n.stateNode, n.type, n.memoizedProps);
     case 5:
      El(n, n.return), n.tag !== 5 && n.tag !== 27 || kl(n), Iu(n, r);
      break;
     case 6:
      kl(n);
      break;
     case 26:
      El(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Iu(n, r);
      break;
     case 22:
      n.memoizedState === null && Iu(n, r);
      break;
     case 30:
      El(n, n.return), Iu(n, r);
      break;
     case 7:
      El(n, n.return);
     default:
      Iu(n, r)
    }
    e = e.sibling
   }
  }

  function Lu(e, t, n) {
   for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
    var r = t.alternate,
     i = e,
     a = t,
     o = a.flags,
     s = !!(n & 1);
    switch (a.tag) {
     case 0:
     case 11:
     case 15:
      Lu(i, a, n), xl(4, a);
      break;
     case 1:
      if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == `function`) try {
       i.componentDidMount()
      } catch (e) {
       gf(r, r.return, e)
      }
      if (r = a, i = r.updateQueue, i !== null) {
       var c = r.stateNode;
       try {
        var l = i.shared.hiddenCallbacks;
        if (l !== null)
         for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) Co(l[i], c)
       } catch (e) {
        gf(r, r.return, e)
       }
      }
      s && o & 64 && Cl(a), Tl(a, a.return);
      break;
     case 27:
      n & 2 && Rl(a);
     case 5:
      a.tag !== 5 && a.tag !== 27 || Ol(a), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
      break;
     case 6:
      Ol(a);
      break;
     case 26:
      c = a.stateNode, a.memoizedState !== null || c === null || iu || Ym(Cm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
      break;
     case 12:
      Lu(i, a, n);
      break;
     case 31:
      Lu(i, a, n), s && o & 4 && wu(i, a);
      break;
     case 13:
      Lu(i, a, n), s && o & 4 && Tu(i, a);
      break;
     case 22:
      a.memoizedState === null && Lu(i, a, n), Tl(a, a.return);
      break;
     case 30:
      Lu(i, a, n), Tl(a, a.return);
      break;
     case 7:
      Tl(a, a.return);
     default:
      Lu(i, a, n)
    }
    t = t.sibling
   }
  }

  function Ru(e, t) {
   var n = null;
   e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ma(n))
  }

  function zu(e, t) {
   e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ma(e))
  }

  function Bu(e, t, n, r) {
   var i = (n & 335544064) === n;
   if (t.subtreeFlags & (i ? 10262 : 10256))
    for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
   else i && tu(t)
  }

  function Vu(e, t, n, r) {
   var i = (n & 335544064) === n;
   i && t.alternate === null && t.return !== null && t.return.alternate !== null && eu(t);
   var a = t.flags;
   switch (t.tag) {
    case 0:
    case 11:
    case 15:
     Bu(e, t, n, r), a & 2048 && xl(9, t);
     break;
    case 1:
     Bu(e, t, n, r);
     break;
    case 3:
     Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, e.style.viewTransitionName === `root` && (e.style.viewTransitionName = ``), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === `none` && (e.style.viewTransitionName = ``)), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Ma(a)));
     break;
    case 12:
     if (a & 2048) {
      Bu(e, t, n, r), a = t.stateNode;
      try {
       var o = t.memoizedProps,
        s = o.id,
        c = o.onPostCommit;
       typeof c == `function` && c(s, t.alternate === null ? `mount` : `update`, a.passiveEffectDuration, -0)
      } catch (e) {
       gf(t, t.return, e)
      }
     } else Bu(e, t, n, r);
     break;
    case 31:
     Bu(e, t, n, r);
     break;
    case 13:
     Bu(e, t, n, r);
     break;
    case 23:
     break;
    case 22:
     o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && eu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && eu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
     break;
    case 24:
     Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
     break;
    case 30:
     i && (a = t.alternate, a !== null && (ql(a.child, !0), ql(t.child, !0))), Bu(e, t, n, r);
     break;
    default:
     Bu(e, t, n, r)
   }
  }

  function Hu(e, t, n, r, i) {
   for (i = i && (!!(t.subtreeFlags & 10256) || !1), t = t.child; t !== null;) {
    var a = e,
     o = t,
     s = n,
     c = r,
     l = o.flags;
    switch (o.tag) {
     case 0:
     case 11:
     case 15:
      Hu(a, o, s, c, i), xl(8, o);
      break;
     case 23:
      break;
     case 22:
      var u = o.stateNode;
      o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
      break;
     case 24:
      Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
      break;
     default:
      Hu(a, o, s, c, i)
    }
    t = t.sibling
   }
  }

  function Uu(e, t) {
   if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null;) {
     var n = e,
      r = t,
      i = r.flags;
     switch (r.tag) {
      case 22:
       Uu(n, r), i & 2048 && Ru(r.alternate, r);
       break;
      case 24:
       Uu(n, r), i & 2048 && zu(r.alternate, r);
       break;
      default:
       Uu(n, r)
     }
     t = t.sibling
    }
  }
  var Wu = 8192;

  function Gu(e, t, n) {
   if (e.subtreeFlags & Wu)
    for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling
  }

  function Ku(e, t, n) {
   switch (e.tag) {
    case 26:
     Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && eh(n, e)) : th(n, ku, e.memoizedState, e.memoizedProps));
     break;
    case 5:
     Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && eh(n, e));
     break;
    case 3:
    case 4:
     var r = ku;
     ku = Cm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
     break;
    case 22:
     e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
     break;
    case 30:
     if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== `auto`)) {
      var i = e.stateNode;
      i.paired = null, Bl === null && (Bl = new Map), Bl.set(r, i)
     }
     Gu(e, t, n);
     break;
    default:
     Gu(e, t, n)
   }
  }

  function qu(e) {
   var t = e.alternate;
   if (t !== null && (e = t.child, e !== null)) {
    t.child = null;
    do t = e.sibling, e.sibling = null, e = t; while (e !== null)
   }
  }

  function Ju(e) {
   var t = e.deletions;
   if (e.flags & 16) {
    if (t !== null)
     for (var n = 0; n < t.length; n++) {
      var r = t[n];
      cu = r, Zu(r, e)
     }
    qu(e)
   }
   if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null;) Yu(e), e = e.sibling
  }

  function Yu(e) {
   switch (e.tag) {
    case 0:
    case 11:
    case 15:
     Ju(e), e.flags & 2048 && Sl(9, e, e.return);
     break;
    case 3:
     Ju(e);
     break;
    case 12:
     Ju(e);
     break;
    case 22:
     var t = e.stateNode;
     e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
     break;
    default:
     Ju(e)
   }
  }

  function Xu(e) {
   var t = e.deletions;
   if (e.flags & 16) {
    if (t !== null)
     for (var n = 0; n < t.length; n++) {
      var r = t[n];
      cu = r, Zu(r, e)
     }
    qu(e)
   }
   for (e = e.child; e !== null;) {
    switch (t = e, t.tag) {
     case 0:
     case 11:
     case 15:
      Sl(8, t, t.return), Xu(t);
      break;
     case 22:
      n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
      break;
     default:
      Xu(t)
    }
    e = e.sibling
   }
  }

  function Zu(e, t) {
   for (; cu !== null;) {
    var n = cu;
    switch (n.tag) {
     case 0:
     case 11:
     case 15:
      Sl(8, n, t);
      break;
     case 23:
     case 22:
      if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
       var r = n.memoizedState.cachePool.pool;
       r != null && r.refCount++
      }
      break;
     case 24:
      Ma(n.memoizedState.cache)
    }
    if (r = n.child, r !== null) r.return = n, cu = r;
    else a: for (n = e; cu !== null;) {
     r = cu;
     var i = r.sibling,
      a = r.return;
     if (yu(r), r === n) {
      cu = null;
      break a
     }
     if (i !== null) {
      i.return = a, cu = i;
      break a
     }
     cu = a
    }
   }
  }
  var Qu = {
    getCacheForType: function(e) {
     var t = wa(Aa),
      n = t.data.get(e);
     return n === void 0 && (n = e(), t.data.set(e, n)), n
    },
    cacheSignal: function() {
     return wa(Aa).controller.signal
    }
   },
   $u = typeof WeakMap == `function` ? WeakMap : Map,
   K = 0,
   ed = null,
   q = null,
   J = 0,
   td = 0,
   nd = null,
   rd = !1,
   id = !1,
   ad = !1,
   od = 0,
   sd = 0,
   cd = 0,
   ld = 0,
   ud = 0,
   dd = 0,
   fd = 0,
   pd = null,
   md = null,
   hd = !1,
   gd = 0,
   _d = 0,
   vd = 1 / 0,
   yd = null,
   bd = null,
   xd = 0,
   Sd = null,
   Cd = null,
   wd = 0,
   Td = 0,
   Ed = null,
   Dd = null,
   Od = null,
   kd = null,
   Ad = null,
   jd = 0,
   Md = null;

  function Nd() {
   return K & 2 && J !== 0 ? J & -J : R.T === null ? vt() : Lf()
  }

  function Pd() {
   if (dd === 0) {
    if (!(J & 536870912) || V) {
     var e = nt;
     nt <<= 1, !(nt & 3932160) && (nt = 262144), dd = e
    } else dd = 536870912
   }
   return e = ko.current, e !== null && (e.flags |= 32), dd
  }

  function Fd(e, t) {
   if (t != null) {
    var n = e.stateNode,
     r = n.ref;
    r === null && (r = n.ref = Lp(gi(e.memoizedProps, n))), kd === null && (kd = []), kd.push(t.bind(null, r))
   }
  }

  function Id(e, t, n) {
   (e === ed && (td === 2 || td === 9) || e.cancelPendingCommit !== null) && (Ud(e, 0), Bd(e, J, dd, !1)), dt(e, n), K & 2 && e === ed || (e === ed && (!(K & 2) && (ld |= n), sd === 4 && Bd(e, J, dd, !1)), kf(e))
  }

  function Ld(e, t, n) {
   if (K & 6) throw Error(i(327));
   var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ot(e, t),
    a = r ? Zd(e, t) : Yd(e, t, !0),
    o = r;
   do {
    if (a === 0) {
     id && !r && Bd(e, t, 0, !1);
     break
    }
    if (n = e.current.alternate, o && !zd(n)) a = Yd(e, t, !1), o = !1;
    else {
     if (a === 2) {
      if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
      else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
      if (s !== 0) {
       t = s;
       a: {
        var c = e;a = pd;
        var l = c.current.memoizedState.isDehydrated;
        if (l && (Ud(c, s).flags |= 256), s = Yd(c, s, !1), s !== 2 && s !== 6) {
         if (ad && !l) {
          c.errorRecoveryDisabledLanes |= o, ld |= o, a = 4;
          break a
         }
         o = md, md = a, o !== null && (md === null ? md = o : md.push.apply(md, o))
        }
        a = s
       }
       if (o = !1, a !== 2) continue
      }
     }
     if (a === 1) {
      Ud(e, 0), Bd(e, t, 0, !0);
      break
     }
     a: {
      switch (r = e, o = a, o) {
       case 0:
       case 1:
        throw Error(i(345));
       case 4:
        if ((t & 4194048) !== t && (t & 62914560) !== t) break;
       case 6:
        Bd(r, t, dd, !rd);
        break a;
       case 2:
        md = null;
        break;
       case 3:
       case 5:
        break;
       default:
        throw Error(i(329))
      }
      if ((t & 62914560) === t && (a = gd + 300 - ze(), 10 < a)) {
       if (Bd(r, t, dd, !rd), at(r, 0, !0) !== 0) break a;
       wd = t, r.timeoutHandle = bp(Rd.bind(null, r, n, md, yd, hd, t, dd, ld, fd, rd, o, `Throttled`, -0, 0), a);
       break a
      }
      Rd(r, n, md, yd, hd, t, dd, ld, fd, rd, o, null, -0, 0)
     }
     break
    }
   } while (1);
   kf(e)
  }

  function Rd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
   e.timeoutHandle = -1;
   var m = t.subtreeFlags,
    h = (a & 335544064) === a;
   d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
    stylesheets: null,
    count: 0,
    imgCount: 0,
    imgBytes: 0,
    suspenseyImages: [],
    waitingForImages: !0,
    waitingForViewTransition: !1,
    unsuspend: _n
   }, Bl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = ah.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? gd - ze() : (a & 4194048) === a ? _d - ze() : 0, m = rh(d, m), m !== null) ? (wd = a, e.cancelPendingCommit = m(af.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Bd(e, a, o, !l)) : af(e, t, a, n, r, i, o, s, c, l, u, d)
  }

  function zd(e) {
   for (var t = e;;) {
    var n = t.tag;
    if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
     for (var r = 0; r < n.length; r++) {
      var i = n[r],
       a = i.getSnapshot;
      i = i.value;
      try {
       if (!Br(a(), i)) return !1
      } catch {
       return !1
      }
     }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
     if (t === e) break;
     for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return !0;
      t = t.return
     }
     t.sibling.return = t.return, t = t.sibling
    }
   }
   return !0
  }

  function Bd(e, t, n, r) {
   t = st(e, t), t &= ~ud, t &= ~ld, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
   for (var i = t; 0 < i;) {
    var a = 31 - Ze(i),
     o = 1 << a;
    r[a] = -1, i &= ~o
   }
   n !== 0 && pt(e, n, t)
  }

  function Vd() {
   return K & 6 ? !0 : (Af(0, !1), !1)
  }

  function Hd() {
   if (q !== null) {
    if (td === 0) var e = q.return;
    else e = q, ga = ha = null, is(e), io = null, ao = 0, e = q;
    for (; e !== null;) bl(e.alternate, e), e = e.return;
    q = null
   }
  }

  function Ud(e, t) {
   var n = e.timeoutHandle;
   return n !== -1 && (e.timeoutHandle = -1, xp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), wd = 0, Hd(), ed = e, q = n = Ni(e.current, null), J = t, td = 0, nd = null, rd = !1, id = ot(e, t), ad = !1, fd = dd = ud = ld = cd = sd = 0, md = pd = null, hd = !1, od = st(e, t), Ci(), n
  }

  function Wd(e, t) {
   U = null, R.H = mc, t === Ja || t === Xa ? (t = no(), td = 3) : t === Ya ? (t = no(), td = 4) : td = t === Mc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1, nd = t, q === null && (sd = 1, Ec(e, Vi(t, e.current)))
  }

  function Gd() {
   var e = ko.current;
   return e === null ? !0 : (J & 4194048) === J ? Ao === null : (J & 62914560) === J || J & 536870912 ? e === Ao : !1
  }

  function Kd() {
   var e = R.H;
   return R.H = mc, e === null ? mc : e
  }

  function qd() {
   var e = R.A;
   return R.A = Qu, e
  }

  function Jd() {
   sd = 4, rd || (J & 4194048) !== J && ko.current !== null || (id = !0), !(cd & 134217727) && !(ld & 134217727) || ed === null || Bd(ed, J, dd, !1)
  }

  function Yd(e, t, n) {
   var r = K;
   K |= 2;
   var i = Kd(),
    a = qd();
   (ed !== e || J !== t) && (yd = null, Ud(e, t)), t = !1;
   var o = sd;
   a: do try {
     if (td !== 0 && q !== null) {
      var s = q,
       c = nd;
      switch (td) {
       case 8:
        Hd(), o = 6;
        break a;
       case 3:
       case 2:
       case 9:
       case 6:
        ko.current === null && (t = !0);
        var l = td;
        if (td = 0, nd = null, tf(e, s, c, l), n && id) {
         o = 0;
         break a
        }
        break;
       default:
        l = td, td = 0, nd = null, tf(e, s, c, l)
      }
     }
     Xd(), o = sd;
     break
    } catch (t) {
     Wd(e, t)
    }
    while (1);
    return t && e.shellSuspendCounter++, ga = ha = null, K = r, R.H = i, R.A = a, q === null && (ed = null, J = 0, Ci()), o
  }

  function Xd() {
   for (; q !== null;) $d(q)
  }

  function Zd(e, t) {
   var n = K;
   K |= 2;
   var r = Kd(),
    a = qd();
   ed !== e || J !== t ? (yd = null, vd = ze() + 500, Ud(e, t)) : id = ot(e, t);
   a: do try {
     if (td !== 0 && q !== null) {
      t = q;
      var o = nd;
      b: switch (td) {
       case 1:
        td = 0, nd = null, tf(e, t, o, 1);
        break;
       case 2:
       case 9:
        if (Qa(o)) {
         td = 0, nd = null, ef(t);
         break
        }
        t = function() {
         td !== 2 && td !== 9 || ed !== e || (td = 7), kf(e)
        }, o.then(t, t);
        break a;
       case 3:
        td = 7;
        break a;
       case 4:
        td = 5;
        break a;
       case 7:
        Qa(o) ? (td = 0, nd = null, ef(t)) : (td = 0, nd = null, tf(e, t, o, 7));
        break;
       case 5:
        var s = null;
        switch (q.tag) {
         case 26:
          s = q.memoizedState;
         case 5:
         case 27:
          var c = q;
          if (s ? Qm(s) : c.stateNode.complete) {
           td = 0, nd = null;
           var l = c.sibling;
           if (l !== null) q = l;
           else {
            var u = c.return;
            u === null ? q = null : (q = u, nf(u))
           }
           break b
          }
        }
        td = 0, nd = null, tf(e, t, o, 5);
        break;
       case 6:
        td = 0, nd = null, tf(e, t, o, 6);
        break;
       case 8:
        Hd(), sd = 6;
        break a;
       default:
        throw Error(i(462))
      }
     }
     Qd();
     break
    } catch (t) {
     Wd(e, t)
    }
    while (1);
    return ga = ha = null, R.H = r, R.A = a, K = n, q === null ? (ed = null, J = 0, Ci(), sd) : 0
  }

  function Qd() {
   for (; q !== null && !Le();) $d(q)
  }

  function $d(e) {
   var t = fl(e.alternate, e, od);
   e.memoizedProps = e.pendingProps, t === null ? nf(e) : q = t
  }

  function ef(e) {
   var t = e,
    n = t.alternate;
   switch (t.tag) {
    case 15:
    case 0:
     t = Kc(n, t, t.pendingProps, t.type, void 0, J);
     break;
    case 11:
     t = Kc(n, t, t.pendingProps, t.type.render, t.ref, J);
     break;
    case 5:
     is(t);
     var r = t;
     r === na && (V ? (la(r), r.tag === 5 && r.stateNode != null && (ra = r.stateNode)) : (la(r), V = !0));
    default:
     bl(n, t), t = q = Pi(t, od), t = fl(n, t, od)
   }
   e.memoizedProps = e.pendingProps, t === null ? nf(e) : q = t
  }

  function tf(e, t, n, r) {
   ga = ha = null, is(t), io = null, ao = 0;
   var i = t.return;
   try {
    if (jc(e, i, t, n, J)) {
     sd = 1, Ec(e, Vi(n, e.current)), q = null;
     return
    }
   } catch (t) {
    if (i !== null) throw q = i, t;
    sd = 1, Ec(e, Vi(n, e.current)), q = null;
    return
   }
   t.flags & 32768 ? (V || r === 1 ? e = !0 : id || J & 536870912 ? e = !1 : (rd = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = ko.current, r !== null && r.tag === 13 && (r.flags |= 16384))), rf(t, e)) : nf(t)
  }

  function nf(e) {
   var t = e;
   do {
    if (t.flags & 32768) {
     rf(t, rd);
     return
    }
    e = t.return;
    var n = yl(t.alternate, t, od);
    if (n !== null) {
     q = n;
     return
    }
    if (t = t.sibling, t !== null) {
     q = t;
     return
    }
    q = t = e
   } while (t !== null);
   sd === 0 && (sd = 5)
  }

  function rf(e, t) {
   do {
    var n = W(e.alternate, e);
    if (n !== null) {
     n.flags &= 32767, q = n;
     return
    }
    if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
     q = e;
     return
    }
    q = e = n
   } while (e !== null);
   sd = 6, q = null
  }

  function af(e, t, n, r, a, o, s, c, l, u, d, f) {
   e.cancelPendingCommit = null;
   do pf(); while (xd !== 0);
   if (K & 6) throw Error(i(327));
   if (t !== null) {
    if (t === e.current) throw Error(i(177));
    e === ed && (q = ed = null, J = 0), Cd = t, Sd = e, wd = n, Ed = a, Dd = r, of(e, t, n, s, c, l, f)
   }
  }

  function of(e, t, n, r, i, a, o) {
   var s = t.lanes | t.childLanes;
   if (Td = s, s |= Si, ft(e, n, s, r, i, a), kd = null, (n & 335544064) === n ? (Ad = Fa(e), r = 10262) : (Ad = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sf(Ue, function() {
     return mf(), null
    })) : (e.callbackNode = null, e.callbackPriority = 0), zl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
    r = R.T, R.T = null, i = z.p, z.p = 2, a = K, K |= 4;
    try {
     pu(e, t, n)
    } finally {
     K = a, z.p = i, R.T = r
    }
   }
   xd = 1, zl ? Od = Fp(o, e.containerInfo, Ad, lf, uf, cf, df, mf, sf, null, null) : (lf(), uf(), df())
  }

  function sf(e) {
   if (xd !== 0) {
    var t = Sd.onRecoverableError;
    t(e, {
     componentStack: null
    })
   }
  }

  function cf() {
   xd === 3 && (xd = 0, Pu(Cd, Sd), xd = 4)
  }

  function lf() {
   if (xd === 1) {
    xd = 0;
    var e = Sd,
     t = Cd,
     n = wd,
     r = !!(t.flags & 13878);
    if (t.subtreeFlags & 13878 || r) {
     r = R.T, R.T = null;
     var i = z.p;
     z.p = 2;
     var a = K;
     K |= 4;
     try {
      uu = du = !1, Au(t, e, n), n = fp;
      var o = Kr(e.containerInfo),
       s = n.focusedElem,
       c = n.selectionRange;
      if (o !== s && s && s.ownerDocument && Gr(s.ownerDocument.documentElement, s)) {
       if (c !== null && qr(s)) {
        var l = c.start,
         u = c.end;
        if (u === void 0 && (u = l), `selectionStart` in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
        else {
         var d = s.ownerDocument || document,
          f = d && d.defaultView || window;
         if (f.getSelection) {
          var p = f.getSelection(),
           m = s.textContent.length,
           h = Math.min(c.start, m),
           g = c.end === void 0 ? h : Math.min(c.end, m);
          !p.extend && h > g && (o = g, g = h, h = o);
          var _ = Wr(s, h),
           v = Wr(s, g);
          if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
           var y = d.createRange();
           y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y))
          }
         }
        }
       }
       for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
        element: p,
        left: p.scrollLeft,
        top: p.scrollTop
       });
       for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
        var b = d[s];
        b.element.scrollLeft = b.left, b.element.scrollTop = b.top
       }
      }
      yh = !!dp, fp = dp = null
     } finally {
      K = a, z.p = i, R.T = r
     }
    }
    e.current = t, xd = 2
   }
  }

  function uf() {
   if (xd === 2) {
    xd = 0;
    var e = Sd,
     t = Cd,
     n = !!(t.flags & 8772);
    if (t.subtreeFlags & 8772 || n) {
     n = R.T, R.T = null;
     var r = z.p;
     z.p = 2;
     var i = K;
     K |= 4;
     try {
      hu(e, t.alternate, t)
     } finally {
      K = i, z.p = r, R.T = n
     }
    }
    xd = 3
   }
  }

  function df() {
   if (xd === 4 || xd === 3) {
    xd = 0;
    var e = Od;
    Od = null, Re();
    var t = Sd,
     n = Cd,
     r = wd,
     i = Dd,
     a = (r & 335544064) === r ? 10262 : 10256;
    if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? xd = 5 : (xd = 0, Cd = Sd = null, ff(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (bd = null), _t(r), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == `function`) try {
     Ye.onCommitFiberRoot(Je, n, void 0, (n.current.flags & 128) == 128)
    } catch {}
    if (i !== null) {
     n = R.T, a = z.p, z.p = 2, R.T = null;
     try {
      for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
       var c = i[s];
       o(c.value, {
        componentStack: c.stack
       })
      }
     } finally {
      R.T = n, z.p = a
     }
    }
    if (i = kd, o = Ad, Ad = null, i !== null && (kd = null, o === null && (o = []), e !== null))
     for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
    wd & 3 && pf(), kf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Md ? jd++ : (jd = 0, Md = t) : (jd = 0, Md = null), Af(0, !1)
   }
  }

  function ff(e, t) {
   (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ma(t)))
  }

  function pf() {
   return Od !== null && (Od.skipTransition(), Od = null), lf(), uf(), df(), mf()
  }

  function mf() {
   if (xd !== 5) return !1;
   var e = Sd,
    t = Td;
   Td = 0;
   var n = _t(wd),
    r = R.T,
    a = z.p;
   try {
    z.p = 32 > n ? 32 : n, R.T = null, n = Ed, Ed = null;
    var o = Sd,
     s = wd;
    if (xd = 0, Cd = Sd = null, wd = 0, K & 6) throw Error(i(331));
    var c = K;
    if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Af(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == `function`) try {
     Ye.onPostCommitFiberRoot(Je, o)
    } catch {}
    return !0
   } finally {
    z.p = a, R.T = r, ff(e, t)
   }
  }

  function hf(e, t, n) {
   t = Vi(n, t), t = Oc(e.stateNode, t, 2), e = _o(e, t, 2), e !== null && (dt(e, 2), kf(e))
  }

  function gf(e, t, n) {
   if (e.tag === 3) hf(e, e, n);
   else
    for (; t !== null;) {
     if (t.tag === 3) {
      hf(t, e, n);
      break
     }
     if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (bd === null || !bd.has(r))) {
       e = Vi(n, e), n = kc(2), r = _o(t, n, 2), r !== null && (Ac(n, r, t, e), dt(r, 2), kf(r));
       break
      }
     }
     t = t.return
    }
  }

  function _f(e, t, n) {
   var r = e.pingCache;
   if (r === null) {
    r = e.pingCache = new $u;
    var i = new Set;
    r.set(t, i)
   } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
   i.has(n) || (ad = !0, i.add(n), e = vf.bind(null, e, t, n), t.then(e, e))
  }

  function vf(e, t, n) {
   var r = e.pingCache;
   r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ed === e && (J & n) === n && (sd === 4 || sd === 3 && (J & 62914560) === J && 300 > ze() - gd ? K & 2 ? ud |= n : Ud(e, 0) : ud |= n, fd === J && (fd = 0)), kf(e)
  }

  function yf(e, t) {
   t === 0 && (t = lt()), e = Ei(e, t), e !== null && (dt(e, t), kf(e))
  }

  function bf(e) {
   var t = e.memoizedState,
    n = 0;
   t !== null && (n = t.retryLane), yf(e, n)
  }

  function xf(e, t) {
   var n = 0;
   switch (e.tag) {
    case 31:
    case 13:
     var r = e.stateNode,
      a = e.memoizedState;
     a !== null && (n = a.retryLane);
     break;
    case 19:
     r = e.stateNode;
     break;
    case 22:
     r = e.stateNode._retryCache;
     break;
    default:
     throw Error(i(314))
   }
   r !== null && r.delete(t), yf(e, n)
  }

  function Sf(e, t) {
   return Fe(e, t)
  }
  var Cf = null,
   wf = null,
   Tf = !1,
   Ef = !1,
   Df = !1,
   Of = 0;

  function kf(e) {
   e !== wf && e.next === null && (wf === null ? Cf = wf = e : wf = wf.next = e), Ef = !0, Tf || (Tf = !0, If())
  }

  function Af(e, t) {
   if (!Df && Ef) {
    Df = !0;
    do
     for (var n = !1, r = Cf; r !== null;) {
      if (!t) {
       if (e !== 0) {
        var i = r.pendingLanes;
        if (i === 0) var a = 0;
        else {
         var o = r.suspendedLanes,
          s = r.pingedLanes;
         a = (1 << 31 - Ze(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0
        }
        a !== 0 && (n = !0, Ff(r, a))
       } else a = J, a = at(r, r === ed ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ot(r, a) || (n = !0, Ff(r, a))
      }
      r = r.next
     }
    while (n);
    Df = !1
   }
  }

  function jf() {
   Mf()
  }

  function Mf() {
   Ef = Tf = !1;
   var e = 0;
   Of !== 0 && yp() && (e = Of);
   for (var t = ze(), n = null, r = Cf; r !== null;) {
    var i = r.next,
     a = Nf(r, t);
    a === 0 ? (r.next = null, n === null ? Cf = i : n.next = i, i === null && (wf = n)) : (n = r, (e !== 0 || a & 3) && (Ef = !0)), r = i
   }
   xd !== 0 && xd !== 5 || Af(e, !1), Of !== 0 && (Of = 0)
  }

  function Nf(e, t) {
   for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
    var o = 31 - Ze(a),
     s = 1 << o,
     c = i[o];
    c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ct(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s
   }
   if (t = ed, n = J, n = at(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (td === 2 || td === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ie(r), e.callbackNode = null, e.callbackPriority = 0;
   if (!(n & 3) || ot(e, n)) {
    if (t = n & -n, t === e.callbackPriority) return t;
    switch (r !== null && Ie(r), _t(n)) {
     case 2:
     case 8:
      n = He;
      break;
     case 32:
      n = Ue;
      break;
     case 268435456:
      n = Ge;
      break;
     default:
      n = Ue
    }
    return r = Pf.bind(null, e), n = Fe(n, r), e.callbackPriority = t, e.callbackNode = n, t
   }
   return r !== null && r !== null && Ie(r), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function Pf(e, t) {
   if (xd !== 0 && xd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
   var n = e.callbackNode;
   if (pf() && e.callbackNode !== n) return null;
   var r = J;
   return r = at(e, e === ed ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Ld(e, r, t), Nf(e, ze()), e.callbackNode != null && e.callbackNode === n ? Pf.bind(null, e) : null)
  }

  function Ff(e, t) {
   if (pf()) return null;
   Ld(e, t, !0)
  }

  function If() {
   Cp(function() {
    K & 6 ? Fe(Ve, jf) : Mf()
   })
  }

  function Lf() {
   if (Of === 0) {
    var e = Ra;
    e === 0 && (e = tt, tt <<= 1, !(tt & 261888) && (tt = 256)), Of = e
   }
   return Of
  }

  function Rf(e) {
   return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : gn(e)
  }

  function zf(e, t, n, r, i) {
   if (t === `submit` && n && n.stateNode === i) {
    var a = Rf((i[St] || null).action),
     o = r.submitter;
    o && (t = (t = o[St] || null) ? Rf(t.formAction) : o.getAttribute(`formAction`), t !== null && (a = t, o = null));
    var s = new Rn(`action`, `action`, null, r, i);
    e.push({
     event: s,
     listeners: [{
      instance: null,
      listener: function() {
       if (r.defaultPrevented) {
        if (Of !== 0) {
         var e = new FormData(i, o);
         ec(n, {
          pending: !0,
          data: e,
          method: i.method,
          action: a
         }, null, e)
        }
       } else typeof a == `function` && (s.preventDefault(), e = new FormData(i, o), ec(n, {
        pending: !0,
        data: e,
        method: i.method,
        action: a
       }, a, e))
      },
      currentTarget: i
     }]
    })
   }
  }
  for (var Bf = 0; Bf < pi.length; Bf++) {
   var Vf = pi[Bf];
   mi(Vf.toLowerCase(), `on` + (Vf[0].toUpperCase() + Vf.slice(1)))
  }
  mi(ai, `onAnimationEnd`), mi(oi, `onAnimationIteration`), mi(si, `onAnimationStart`), mi(`dblclick`, `onDoubleClick`), mi(`focusin`, `onFocus`), mi(`focusout`, `onBlur`), mi(ci, `onTransitionRun`), mi(li, `onTransitionStart`), mi(ui, `onTransitionCancel`), mi(di, `onTransitionEnd`), Bt(`onMouseEnter`, [`mouseout`, `mouseover`]), Bt(`onMouseLeave`, [`mouseout`, `mouseover`]), Bt(`onPointerEnter`, [`pointerout`, `pointerover`]), Bt(`onPointerLeave`, [`pointerout`, `pointerover`]), zt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), zt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), zt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), zt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), zt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), zt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var Hf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),
   Uf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Hf));

  function Wf(e, t) {
   t = !!(t & 4);
   for (var n = 0; n < e.length; n++) {
    var r = e[n],
     i = r.event;
    r = r.listeners;
    a: {
     var a = void 0;
     if (t)
      for (var o = r.length - 1; 0 <= o; o--) {
       var s = r[o],
        c = s.instance,
        l = s.currentTarget;
       if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
       a = s, i.currentTarget = l;
       try {
        a(i)
       } catch (e) {
        yi(e)
       }
       i.currentTarget = null, a = c
      } else
       for (o = 0; o < r.length; o++) {
        if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
        a = s, i.currentTarget = l;
        try {
         a(i)
        } catch (e) {
         yi(e)
        }
        i.currentTarget = null, a = c
       }
    }
   }
  }

  function Y(e, t) {
   var n = t[wt];
   n === void 0 && (n = t[wt] = new Set);
   var r = e + `__bubble`;
   n.has(r) || (Jf(t, e, 2, !1), n.add(r))
  }

  function Gf(e, t, n) {
   var r = 0;
   t && (r |= 4), Jf(n, e, r, t)
  }
  var Kf = `_reactListening` + Math.random().toString(36).slice(2);

  function qf(e) {
   if (!e[Kf]) {
    e[Kf] = !0, Lt.forEach(function(t) {
     t !== `selectionchange` && (Uf.has(t) || Gf(t, !1, e), Gf(t, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kf] || (t[Kf] = !0, Gf(`selectionchange`, !1, t))
   }
  }

  function Jf(e, t, n, r) {
   switch (Eh(t)) {
    case 2:
     var i = bh;
     break;
    case 8:
     i = xh;
     break;
    default:
     i = Sh
   }
   n = i.bind(null, t, n, e), i = void 0, !Dn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
    capture: !0,
    passive: i
   }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
    passive: i
   })
  }

  function Yf(e, t, n, r, i) {
   var a = r;
   if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
     var c = r.stateNode.containerInfo;
     if (c === i) break;
     if (s === 4)
      for (s = r.return; s !== null;) {
       var l = s.tag;
       if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
       s = s.return
      }
     for (; c !== null;) {
      if (s = jt(c), s === null) return;
      if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
       r = a = s;
       continue a
      }
      c = c.parentNode
     }
    }
    r = r.return
   }
   wn(function() {
    var r = a,
     i = yn(n),
     s = [];
    a: {
     var c = fi.get(e);
     if (c !== void 0) {
      var l = Rn,
       u = e;
      switch (e) {
       case `keypress`:
        if (Nn(n) === 0) break a;
       case `keydown`:
       case `keyup`:
        l = nr;
        break;
       case `focusin`:
        u = `focus`, l = qn;
        break;
       case `focusout`:
        u = `blur`, l = qn;
        break;
       case `beforeblur`:
       case `afterblur`:
        l = qn;
        break;
       case `click`:
        if (n.button === 2) break a;
       case `auxclick`:
       case `dblclick`:
       case `mousedown`:
       case `mousemove`:
       case `mouseup`:
       case `mouseout`:
       case `mouseover`:
       case `contextmenu`:
        l = Gn;
        break;
       case `drag`:
       case `dragend`:
       case `dragenter`:
       case `dragexit`:
       case `dragleave`:
       case `dragover`:
       case `dragstart`:
       case `drop`:
        l = Kn;
        break;
       case `touchcancel`:
       case `touchend`:
       case `touchmove`:
       case `touchstart`:
        l = ar;
        break;
       case ai:
       case oi:
       case si:
        l = Jn;
        break;
       case di:
        l = or;
        break;
       case `scroll`:
       case `scrollend`:
        l = Bn;
        break;
       case `wheel`:
        l = sr;
        break;
       case `copy`:
       case `cut`:
       case `paste`:
        l = Yn;
        break;
       case `gotpointercapture`:
       case `lostpointercapture`:
       case `pointercancel`:
       case `pointerdown`:
       case `pointermove`:
       case `pointerout`:
       case `pointerover`:
       case `pointerup`:
        l = rr;
        break;
       case `submit`:
        l = ir;
        break;
       case `toggle`:
       case `beforetoggle`:
        l = cr
      }
      var d = !!(t & 4),
       f = !d && (e === `scroll` || e === `scrollend`),
       p = d ? c === null ? null : c + `Capture` : c;
      d = [];
      for (var m = r, h; m !== null;) {
       var g = m;
       if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Tn(m, p), g != null && d.push(Xf(m, g, h))), f) break;
       m = m.return
      }
      0 < d.length && (c = new l(c, u, null, n, i), s.push({
       event: c,
       listeners: d
      }))
     }
    }
    if (!(t & 7)) {
     a: {
      if (l = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, l && n !== vn && (u = n.relatedTarget || n.fromElement) && (jt(u) || u[Ct])) break a;
      (c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? jt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Gn, g = `onMouseLeave`, p = `onMouseEnter`, m = `mouse`, (e === `pointerout` || e === `pointerover`) && (d = rr, g = `onPointerLeave`, p = `onPointerEnter`, m = `pointer`), f = c == null ? u : Nt(c), h = l == null ? u : Nt(l), u = new d(g, m + `leave`, c, n, i), u.target = f, u.relatedTarget = h, g = null, jt(i) === r && (d = new d(p, m + `enter`, l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Qf) : null, c !== null && $f(s, u, c, d, !1), l !== null && f !== null && $f(s, f, l, d, !0)))
     }
     a: {
      if (c = r ? Nt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === `select` || l === `input` && c.type === `file`) var _ = Or;
      else if (Sr(c)) {
       if (kr) _ = Rr;
       else {
        _ = Ir;
        var v = Fr
       }
      } else l = c.nodeName,
      !l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio` ? r && pn(r.elementType) && (_ = Or) : _ = Lr;
      if (_ && (_ = _(e, r))) {
       Cr(s, _, n, i);
       break a
      }
      v && v(e, c, r)
     }
     switch (v = r ? Nt(r) : window, e) {
      case `focusin`:
       (Sr(v) || v.contentEditable === `true`) && (Yr = v, Xr = r, Zr = null);
       break;
      case `focusout`:
       Zr = Xr = Yr = null;
       break;
      case `mousedown`:
       Qr = !0;
       break;
      case `contextmenu`:
      case `mouseup`:
      case `dragend`:
       Qr = !1, $r(s, n, i);
       break;
      case `selectionchange`:
       if (Jr) break;
      case `keydown`:
      case `keyup`:
       $r(s, n, i)
     }
     var y;
     if (ur) b: {
      switch (e) {
       case `compositionstart`:
        var b = `onCompositionStart`;
        break b;
       case `compositionend`:
        b = `onCompositionEnd`;
        break b;
       case `compositionupdate`:
        b = `onCompositionUpdate`;
        break b
      }
      b = void 0
     }
     else vr ? gr(e, n) && (b = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (b = `onCompositionStart`);b && (pr && n.locale !== `ko` && (vr || b !== `onCompositionStart` ? b === `onCompositionEnd` && vr && (y = Mn()) : (kn = i, An = `value` in kn ? kn.value : kn.textContent, vr = !0)), v = Zf(r, b), 0 < v.length && (b = new Xn(b, e, null, n, i), s.push({
      event: b,
      listeners: v
     }), y ? b.data = y : (y = _r(n), y !== null && (b.data = y)))),
     (y = fr ? yr(e, n) : br(e, n)) && (b = Zf(r, `onBeforeInput`), 0 < b.length && (v = new Xn(`onBeforeInput`, `beforeinput`, null, n, i), s.push({
      event: v,
      listeners: b
     }), v.data = y)),
     zf(s, e, r, n, i)
    }
    Wf(s, t)
   })
  }

  function Xf(e, t, n) {
   return {
    instance: e,
    listener: t,
    currentTarget: n
   }
  }

  function Zf(e, t) {
   for (var n = t + `Capture`, r = []; e !== null;) {
    var i = e,
     a = i.stateNode;
    if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Tn(e, n), i != null && r.unshift(Xf(e, i, a)), i = Tn(e, t), i != null && r.push(Xf(e, i, a))), e.tag === 3) return r;
    e = e.return
   }
   return []
  }

  function Qf(e) {
   if (e === null) return null;
   do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
   return e || null
  }

  function $f(e, t, n, r, i) {
   for (var a = t._reactName, o = []; n !== null && n !== r;) {
    var s = n,
     c = s.alternate,
     l = s.stateNode;
    if (s = s.tag, c !== null && c === r) break;
    s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Tn(n, a), l != null && o.unshift(Xf(n, l, c))) : i || (l = Tn(n, a), l != null && o.push(Xf(n, l, c)))), n = n.return
   }
   o.length !== 0 && e.push({
    event: t,
    listeners: o
   })
  }
  var ep = /\r\n?/g,
   tp = /\u0000|\uFFFD/g;

  function np(e) {
   return (typeof e == `string` ? e : `` + e).replace(ep, `
`).replace(tp, ``)
  }

  function rp(e, t) {
   return t = np(t), np(e) === t
  }

  function ip(e, t, n, r, a, o) {
   switch (n) {
    case `children`:
     if (typeof r == `string`) t === `body` || t === `textarea` && r === `` || ln(e, r);
     else if (typeof r == `number` || typeof r == `bigint`) t !== `body` && ln(e, `` + r);
     else return;
     break;
    case `className`:
     qt(e, `class`, r);
     break;
    case `tabIndex`:
     qt(e, `tabindex`, r);
     break;
    case `dir`:
    case `role`:
    case `viewBox`:
    case `width`:
    case `height`:
     qt(e, n, r);
     break;
    case `style`:
     fn(e, r, o);
     return;
    case `data`:
     if (t !== `object`) {
      qt(e, `data`, r);
      break
     }
    case `src`:
    case `href`:
     if (r === `` && (t !== `a` || n !== `href`) || r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
      e.removeAttribute(n);
      break
     }
     r = gn(r), e.setAttribute(n, r);
     break;
    case `action`:
    case `formAction`:
     if (typeof r == `function`) {
      e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
      break
     }
     if (typeof o == `function` && (n === `formAction` ? (t !== `input` && ip(e, t, `name`, a.name, a, null), ip(e, t, `formEncType`, a.formEncType, a, null), ip(e, t, `formMethod`, a.formMethod, a, null), ip(e, t, `formTarget`, a.formTarget, a, null)) : (ip(e, t, `encType`, a.encType, a, null), ip(e, t, `method`, a.method, a, null), ip(e, t, `target`, a.target, a, null))), r == null || typeof r == `symbol` || typeof r == `boolean`) {
      e.removeAttribute(n);
      break
     }
     r = gn(r), e.setAttribute(n, r);
     break;
    case `onClick`:
     r != null && (e.onclick = _n);
     return;
    case `onScroll`:
     r != null && Y(`scroll`, e);
     return;
    case `onScrollEnd`:
     r != null && Y(`scrollend`, e);
     return;
    case `dangerouslySetInnerHTML`:
     if (r != null) {
      if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
      if (n = r.__html, n != null) {
       if (a.children != null) throw Error(i(60));
       o?.__html !== n && (e.innerHTML = n)
      }
     }
     break;
    case `multiple`:
     e.multiple = r && typeof r != `function` && typeof r != `symbol`;
     break;
    case `muted`:
     e.muted = r && typeof r != `function` && typeof r != `symbol`;
     break;
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `ref`:
     break;
    case `autoFocus`:
     break;
    case `xlinkHref`:
     if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
      e.removeAttribute(`xlink:href`);
      break
     }
     n = gn(r), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
     break;
    case `contentEditable`:
    case `spellCheck`:
    case `draggable`:
    case `value`:
    case `autoReverse`:
    case `externalResourcesRequired`:
    case `focusable`:
    case `preserveAlpha`:
     r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
     break;
    case `inert`:
    case `allowFullScreen`:
    case `async`:
    case `autoPlay`:
    case `controls`:
    case `credentialless`:
    case `default`:
    case `defer`:
    case `disabled`:
    case `disablePictureInPicture`:
    case `disableRemotePlayback`:
    case `formNoValidate`:
    case `hidden`:
    case `loop`:
    case `noModule`:
    case `noValidate`:
    case `open`:
    case `playsInline`:
    case `readOnly`:
    case `required`:
    case `reversed`:
    case `scoped`:
    case `seamless`:
    case `itemScope`:
     r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
     break;
    case `capture`:
    case `download`:
     !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
     break;
    case `cols`:
    case `rows`:
    case `size`:
    case `span`:
     r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
     break;
    case `rowSpan`:
    case `start`:
     r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
     break;
    case `popover`:
     Y(`beforetoggle`, e), Y(`toggle`, e), Kt(e, `popover`, r);
     break;
    case `xlinkActuate`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
     break;
    case `xlinkArcrole`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
     break;
    case `xlinkRole`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
     break;
    case `xlinkShow`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
     break;
    case `xlinkTitle`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
     break;
    case `xlinkType`:
     Jt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
     break;
    case `xmlBase`:
     Jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
     break;
    case `xmlLang`:
     Jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
     break;
    case `xmlSpace`:
     Jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
     break;
    case `is`:
     Kt(e, `is`, r);
     break;
    case `innerText`:
    case `textContent`:
     return;
    default:
     if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) n = mn.get(n) || n, Kt(e, n, r);
     else return
   }
   B = !0
  }

  function ap(e, t, n, r, a, o) {
   switch (n) {
    case `style`:
     fn(e, r, o);
     return;
    case `dangerouslySetInnerHTML`:
     if (r != null) {
      if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
      if (n = r.__html, n != null) {
       if (a.children != null) throw Error(i(60));
       o?.__html !== n && (e.innerHTML = n)
      }
     }
     break;
    case `children`:
     if (typeof r == `string`) ln(e, r);
     else if (typeof r == `number` || typeof r == `bigint`) ln(e, `` + r);
     else return;
     break;
    case `onScroll`:
     r != null && Y(`scroll`, e);
     return;
    case `onScrollEnd`:
     r != null && Y(`scrollend`, e);
     return;
    case `onClick`:
     r != null && (e.onclick = _n);
     return;
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
    case `innerHTML`:
    case `ref`:
     return;
    case `innerText`:
    case `textContent`:
     return;
    default:
     if (!Rt.hasOwnProperty(n)) a: {
      if (n[0] === `o` && n[1] === `n` && (a = n.endsWith(`Capture`), o = n.slice(2, a ? n.length - 7 : void 0), t = e[St] || null, t = t == null ? null : t[n], typeof t == `function` && e.removeEventListener(o, t, a), typeof r == `function`)) {
       typeof t != `function` && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
       break a
      }
      B = !0,
      n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : Kt(e, n, r)
     }
     return
   }
   B = !0
  }

  function op(e, t, n) {
   switch (t) {
    case `div`:
    case `span`:
    case `svg`:
    case `path`:
    case `a`:
    case `g`:
    case `p`:
    case `li`:
     break;
    case `img`:
     Y(`error`, e), Y(`load`, e);
     var r = !1,
      a = !1,
      o;
     for (o in n)
      if (n.hasOwnProperty(o)) {
       var s = n[o];
       if (s != null) switch (o) {
        case `src`:
         r = !0;
         break;
        case `srcSet`:
         a = !0;
         break;
        case `children`:
        case `dangerouslySetInnerHTML`:
         throw Error(i(137, t));
        default:
         ip(e, t, o, s, n, null)
       }
      } a && ip(e, t, `srcSet`, n.srcSet, n, null), r && ip(e, t, `src`, n.src, n, null);
     return;
    case `input`:
     Y(`invalid`, e);
     var c = o = s = a = null,
      l = null,
      u = null;
     for (r in n)
      if (n.hasOwnProperty(r)) {
       var d = n[r];
       if (d != null) switch (r) {
        case `name`:
         a = d;
         break;
        case `type`:
         s = d;
         break;
        case `checked`:
         l = d;
         break;
        case `defaultChecked`:
         u = d;
         break;
        case `value`:
         o = d;
         break;
        case `defaultValue`:
         c = d;
         break;
        case `children`:
        case `dangerouslySetInnerHTML`:
         if (d != null) throw Error(i(137, t));
         break;
        default:
         ip(e, t, r, d, n, null)
       }
      } rn(e, o, c, l, u, s, a, !1);
     return;
    case `select`:
     for (a in Y(`invalid`, e), r = s = o = null, n)
      if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
       case `value`:
        o = c;
        break;
       case `defaultValue`:
        s = c;
        break;
       case `multiple`:
        r = c;
       default:
        ip(e, t, a, c, n, null)
      }
     t = o, n = s, e.multiple = !!r, t == null ? n != null && on(e, !!r, n, !0) : on(e, !!r, t, !1);
     return;
    case `textarea`:
     for (s in Y(`invalid`, e), o = a = r = null, n)
      if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
       case `value`:
        r = c;
        break;
       case `defaultValue`:
        a = c;
        break;
       case `children`:
        o = c;
        break;
       case `dangerouslySetInnerHTML`:
        if (c != null) throw Error(i(91));
        break;
       default:
        ip(e, t, s, c, n, null)
      }
     cn(e, r, a, o);
     return;
    case `option`:
     for (l in n)
      if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
       case `selected`:
        e.selected = r && typeof r != `function` && typeof r != `symbol`;
        break;
       default:
        ip(e, t, l, r, n, null)
      }
     return;
    case `dialog`:
     Y(`beforetoggle`, e), Y(`toggle`, e), Y(`cancel`, e), Y(`close`, e);
     break;
    case `iframe`:
    case `object`:
     Y(`load`, e);
     break;
    case `video`:
    case `audio`:
     for (r = 0; r < Hf.length; r++) Y(Hf[r], e);
     break;
    case `image`:
     Y(`error`, e), Y(`load`, e);
     break;
    case `details`:
     Y(`toggle`, e);
     break;
    case `embed`:
    case `source`:
    case `link`:
     Y(`error`, e), Y(`load`, e);
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `hr`:
    case `keygen`:
    case `meta`:
    case `param`:
    case `track`:
    case `wbr`:
    case `menuitem`:
     for (u in n)
      if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
       case `children`:
       case `dangerouslySetInnerHTML`:
        throw Error(i(137, t));
       default:
        ip(e, t, u, r, n, null)
      }
     return;
    default:
     if (pn(t)) {
      for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && ap(e, t, d, r, n, void 0));
      return
     }
   }
   for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ip(e, t, c, r, n, null))
  }
  var sp = {};

  function cp(e, t, n, r) {
   switch (t) {
    case `div`:
    case `span`:
    case `svg`:
    case `path`:
    case `a`:
    case `g`:
    case `p`:
    case `li`:
     break;
    case `input`:
     var a = null,
      o = null,
      s = null,
      c = null,
      l = null,
      u = null,
      d = null;
     for (m in n) {
      var f = n[m];
      if (n.hasOwnProperty(m) && f != null) switch (m) {
       case `checked`:
        break;
       case `value`:
        break;
       case `defaultValue`:
        l = f;
       default:
        r.hasOwnProperty(m) || ip(e, t, m, null, r, f)
      }
     }
     for (var p in r) {
      var m = r[p];
      if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
       case `type`:
        m !== f && (B = !0), o = m;
        break;
       case `name`:
        m !== f && (B = !0), a = m;
        break;
       case `checked`:
        m !== f && (B = !0), u = m;
        break;
       case `defaultChecked`:
        m !== f && (B = !0), d = m;
        break;
       case `value`:
        m !== f && (B = !0), s = m;
        break;
       case `defaultValue`:
        m !== f && (B = !0), c = m;
        break;
       case `children`:
       case `dangerouslySetInnerHTML`:
        if (m != null) throw Error(i(137, t));
        break;
       default:
        m !== f && ip(e, t, p, m, r, f)
      }
     }
     nn(e, s, c, l, u, d, o, a);
     return;
    case `select`:
     for (o in m = s = c = p = null, n)
      if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
       case `value`:
        break;
       case `multiple`:
        m = l;
       default:
        r.hasOwnProperty(o) || ip(e, t, o, null, r, l)
      }
     for (a in r)
      if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
       case `value`:
        o !== l && (B = !0), p = o;
        break;
       case `defaultValue`:
        o !== l && (B = !0), c = o;
        break;
       case `multiple`:
        o !== l && (B = !0), s = o;
       default:
        o !== l && ip(e, t, a, o, r, l)
      }
     t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? on(e, !!n, n ? [] : ``, !1) : on(e, !!n, t, !0)) : on(e, !!n, p, !1);
     return;
    case `textarea`:
     for (c in m = p = null, n)
      if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
       case `value`:
        break;
       case `children`:
        break;
       default:
        ip(e, t, c, null, r, a)
      }
     for (s in r)
      if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
       case `value`:
        a !== o && (B = !0), p = a;
        break;
       case `defaultValue`:
        a !== o && (B = !0), m = a;
        break;
       case `children`:
        break;
       case `dangerouslySetInnerHTML`:
        if (a != null) throw Error(i(91));
        break;
       default:
        a !== o && ip(e, t, s, a, r, o)
      }
     sn(e, p, m);
     return;
    case `option`:
     for (var h in n)
      if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
       case `selected`:
        e.selected = !1;
        break;
       default:
        ip(e, t, h, null, r, p)
      }
     for (l in r)
      if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
       case `selected`:
        p !== m && (B = !0), e.selected = p && typeof p != `function` && typeof p != `symbol`;
        break;
       default:
        ip(e, t, l, p, r, m)
      }
     return;
    case `img`:
    case `link`:
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `keygen`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
    case `menuitem`:
     for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ip(e, t, g, null, r, p);
     for (u in r)
      if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
       case `children`:
       case `dangerouslySetInnerHTML`:
        if (p != null) throw Error(i(137, t));
        break;
       default:
        ip(e, t, u, p, r, m)
      }
     return;
    default:
     if (pn(t)) {
      for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && ap(e, t, _, void 0, r, p);
      for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || ap(e, t, d, p, r, m);
      return
     }
   }
   for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ip(e, t, v, null, r, p);
   for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ip(e, t, f, p, r, m)
  }

  function lp(e) {
   switch (e) {
    case `css`:
    case `script`:
    case `font`:
    case `img`:
    case `image`:
    case `input`:
    case `link`:
     return !0;
    default:
     return !1
   }
  }

  function up() {
   if (typeof performance.getEntriesByType == `function`) {
    for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
     var i = n[r],
      a = i.transferSize,
      o = i.initiatorType,
      s = i.duration;
     if (a && s && lp(o)) {
      for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
       var c = n[r],
        l = c.startTime;
       if (l > s) break;
       var u = c.transferSize,
        d = c.initiatorType;
       u && lp(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)))
      }
      if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break
     }
    }
    if (0 < e) return t / e / 1e6
   }
   return navigator.connection && (e = navigator.connection.downlink, typeof e == `number`) ? e : 5
  }
  var dp = null,
   fp = null;

  function pp(e) {
   return e.nodeType === 9 ? e : e.ownerDocument
  }

  function mp(e) {
   switch (e) {
    case `http://www.w3.org/2000/svg`:
     return 1;
    case `http://www.w3.org/1998/Math/MathML`:
     return 2;
    default:
     return 0
   }
  }

  function hp(e, t) {
   if (e === 0) switch (t) {
    case `svg`:
     return 1;
    case `math`:
     return 2;
    default:
     return 0
   }
   return e === 1 && t === `foreignObject` ? 0 : e
  }

  function gp(e, t, n, r) {
   return n = pp(n).createElement(e), n[xt] = r, n[St] = t, op(n, e, t), Ft(n), n
  }

  function _p(e, t) {
   return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var vp = null;

  function yp() {
   var e = window.event;
   return e && e.type === `popstate` ? e !== vp && (vp = e, !0) : (vp = null, !1)
  }
  var bp = typeof setTimeout == `function` ? setTimeout : void 0,
   xp = typeof clearTimeout == `function` ? clearTimeout : void 0,
   X = typeof Promise == `function` ? Promise : void 0,
   Sp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : bp,
   Cp = typeof queueMicrotask == `function` ? queueMicrotask : X === void 0 ? bp : function(e) {
    return X.resolve(null).then(e).catch(wp)
   };

  function wp(e) {
   setTimeout(function() {
    throw e
   })
  }

  function Tp(e) {
   return e === `head`
  }

  function Ep(e, t) {
   var n = t,
    r = 0;
   do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) {
     if (n = i.data, n === `/$` || n === `/&`) {
      if (r === 0) {
       e.removeChild(i), Gh(t);
       return
      }
      r--
     } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
     else if (n === `html`) bm(e.ownerDocument.documentElement);
     else if (n === `head`) {
      n = e.ownerDocument.head, bm(n);
      for (var a = n.firstChild; a;) {
       var o = a.nextSibling,
        s = a.nodeName;
       a[Ot] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a), a = o
      }
     } else n === `body` && bm(e.ownerDocument.body)
    }
    n = i
   } while (n);
   Gh(t)
  }

  function Dp(e, t) {
   var n = e;
   e = 0;
   do {
    var r = n.nextSibling;
    if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``, n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = ``) : n.nodeValue = n._stashedText || ``), r && r.nodeType === 8) {
     if (n = r.data, n === `/$`) {
      if (e === 0) break;
      e--
     } else n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++
    }
    n = r
   } while (n)
  }

  function Op(e, t, n) {
   if (t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === `inline`) {
    if (t = e.getClientRects(), t.length === 1) var r = 1;
    else
     for (var i = r = 0; i < t.length; i++) {
      var a = t[i];
      0 < a.width && 0 < a.height && r++
     }
    r === 1 && (e = e.style, e.display = t.length === 1 ? `inline-block` : `block`, e.marginTop = `-` + n.paddingTop, e.marginBottom = `-` + n.paddingBottom)
   }
  }

  function kp(e, t) {
   e = e.style, t = t.style;
   var n = t == null ? null : t.hasOwnProperty(`viewTransitionName`) ? t.viewTransitionName : t.hasOwnProperty(`view-transition-name`) ? t[`view-transition-name`] : null;
   e.viewTransitionName = n == null || typeof n == `boolean` ? `` : (`` + n).trim(), n = t == null ? null : t.hasOwnProperty(`viewTransitionClass`) ? t.viewTransitionClass : t.hasOwnProperty(`view-transition-class`) ? t[`view-transition-class`] : null, e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : (`` + n).trim(), e.display === `inline-block` && (t == null ? e.display = e.margin = `` : (n = t.display, e.display = n == null || typeof n == `boolean` ? `` : n, n = t.margin, n == null ? (n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`], e.marginTop = n == null || typeof n == `boolean` ? `` : n, t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`], e.marginBottom = t == null || typeof t == `boolean` ? `` : t) : e.margin = n))
  }

  function Ap(e, t, n) {
   return n = n.ownerDocument.defaultView, {
    rect: e,
    abs: t.position === `absolute` || t.position === `fixed`,
    clip: t.clipPath !== `none` || t.overflow !== `visible` || t.filter !== `none` || t.mask !== `none` || t.mask !== `none` || t.borderRadius !== `0px`,
    view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
   }
  }

  function jp(e) {
   return Ap(e.getBoundingClientRect(), getComputedStyle(e), e)
  }

  function Mp(e) {
   var t = e.getBoundingClientRect();
   t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
   var n = getComputedStyle(e);
   return Ap(t, n, e)
  }

  function Np(e) {
   return e.documentElement.clientHeight
  }

  function Pp(e) {
   this.addEventListener(`load`, e), this.addEventListener(`error`, e)
  }

  function Fp(e, t, n, r, i, a, o, s, c) {
   var l = t.nodeType === 9 ? t : t.ownerDocument;
   try {
    var u = l.startViewTransition({
     update: function() {
      var t = l.defaultView,
       n = t.navigation && t.navigation.transition,
       o = l.fonts.status;
      r();
      var s = [];
      if (o === `loaded` && (Np(l), l.fonts.status === `loading` && s.push(l.fonts.ready)), o = s.length, e !== null)
       for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
        var f = c[d];
        if (!f.complete) {
         var p = f.getBoundingClientRect();
         if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
          if (u += $m(f), u > nh) {
           s.length = o;
           break
          }
          f = new Promise(Pp.bind(f)), s.push(f)
         }
        }
       }
      if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
       return setTimeout(e, 500)
      })]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
      if (i(), n) return n.finished.then(a, a);
      a()
     },
     types: n
    });
    l.__reactViewTransition = u;
    var d = [];
    return u.ready.then(function() {
     for (var e = l.documentElement.getAnimations({
       subtree: !0
      }), t = 0; t < e.length; t++) {
      var n = e[t],
       r = n.effect,
       i = r.pseudoElement;
      if (i != null && i.startsWith(`::view-transition`)) {
       d.push(n), n = r.getKeyframes();
       for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
        var u = n[c],
         f = u.width;
        if (i === void 0) i = f;
        else if (i !== f) {
         s = !1;
         break
        }
        if (f = u.height, a === void 0) a = f;
        else if (a !== f) {
         s = !1;
         break
        }
        delete u.width, delete u.height, u.transform === `none` && delete u.transform
       }
       s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n))
      }
     }
     o()
    }, function(e) {
     l.__reactViewTransition === u && (l.__reactViewTransition = null);
     try {
      if (typeof e == `object` && e) switch (e.name) {
       case `InvalidStateError`:
        (e.message === `View transition was skipped because document visibility state is hidden.` || e.message === `Skipping view transition because document visibility state has become hidden.` || e.message === `Skipping view transition because viewport size changed.` || e.message === `Transition was aborted because of invalid state`) && (e = null)
      }
      e !== null && c(e)
     } finally {
      r(), i(), o()
     }
    }), u.finished.finally(function() {
     for (var e = 0; e < d.length; e++) d[e].cancel();
     l.__reactViewTransition === u && (l.__reactViewTransition = null), s()
    }), u
   } catch {
    return r(), i(), o(), null
   }
  }

  function Ip(e, t) {
   this._scope = document.documentElement, this._selector = `::view-transition-` + e + `(` + t + `)`
  }
  Ip.prototype.animate = function(e, t) {
   return t = typeof t == `number` ? {
    duration: t
   } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t)
  }, Ip.prototype.getAnimations = function() {
   for (var e = this._scope, t = this._selector, n = e.getAnimations({
     subtree: !0
    }), r = [], i = 0; i < n.length; i++) {
    var a = n[i].effect;
    a !== null && a.target === e && a.pseudoElement === t && r.push(n[i])
   }
   return r
  }, Ip.prototype.getComputedStyle = function() {
   return getComputedStyle(this._scope, this._selector)
  };

  function Lp(e) {
   return {
    name: e,
    group: new Ip(`group`, e),
    imagePair: new Ip(`image-pair`, e),
    old: new Ip(`old`, e),
    new: new Ip(`new`, e)
   }
  }

  function Rp(e) {
   this._fragmentFiber = e, this._observers = this._eventListeners = null
  }
  Rp.prototype.addEventListener = function(e, t, n) {
   var r = null,
    i = null;
   if (!(n != null && typeof n != `boolean` && (r = n.signal || null, r !== null && r.aborted))) {
    this._eventListeners === null && (this._eventListeners = []);
    var a = this._eventListeners;
    if (Up(a, e, t, n) === -1) {
     var o = this,
      s = t;
     n != null && typeof n != `boolean` && !0 === n.once && (s = function(r) {
      o.removeEventListener(e, t, n), typeof t == `function` ? t.call(this, r) : t.handleEvent(r)
     }), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener(`abort`, i, {
      once: !0
     }), i = r.removeEventListener.bind(r, `abort`, i)), r = Vp(n), a.push({
      type: e,
      listener: t,
      optionsOrUseCapture: n,
      attachedListener: s,
      cleanup: i
     }), h(this._fragmentFiber.child, !1, zp, e, s, r)
    }
    this._eventListeners = a
   }
  };

  function zp(e, t, n, r) {
   return b(e).addEventListener(t, n, r), !1
  }
  Rp.prototype.removeEventListener = function(e, t, n) {
   var r = this._eventListeners;
   if (r !== null && (t = Up(r, e, t, n), t !== -1)) {
    var i = r[t];
    n = i.attachedListener;
    var a = i.cleanup;
    i = Vp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Bp, e, n, i), r.splice(t, 1), a !== null && a()
   }
  };

  function Bp(e, t, n, r) {
   return b(e).removeEventListener(t, n, r), !1
  }

  function Vp(e) {
   return e != null && typeof e != `boolean` && (!0 === e.once || e.signal instanceof AbortSignal) ? {
    capture: e.capture,
    passive: e.passive
   } : e
  }

  function Hp(e) {
   return e == null ? `c=0` : typeof e == `boolean` ? `c=` + (e ? `1` : `0`) : `c=` + (e.capture ? `1` : `0`)
  }

  function Up(e, t, n, r) {
   if (e.length === 0) return -1;
   r = Hp(r);
   for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (a.type === t && a.listener === n && Hp(a.optionsOrUseCapture) === r) return i
   }
   return -1
  }
  Rp.prototype.dispatchEvent = function(e) {
   var t = g(this._fragmentFiber);
   if (t === null) return !0;
   t = b(t);
   var n = this._eventListeners;
   if (n !== null && 0 < n.length || !e.bubbles) {
    var r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
    if (n)
     for (var i = 0; i < n.length; i++) {
      var a = n[i];
      r.addEventListener(a.type, a.attachedListener, Vp(a.optionsOrUseCapture))
     }
    if (t.appendChild(r), e = r.dispatchEvent(e), n)
     for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Vp(a.optionsOrUseCapture));
    return t.removeChild(r), e
   }
   return t.dispatchEvent(e)
  }, Rp.prototype.focus = function(e) {
   h(this._fragmentFiber.child, !0, Wp, e, void 0, void 0)
  };

  function Wp(e, t) {
   return e.tag !== 6 && (e = b(e), gm(e, t))
  }
  Rp.prototype.focusLast = function(e) {
   var t = [];
   h(this._fragmentFiber.child, !0, Gp, t, void 0, void 0);
   for (var n = t.length - 1; 0 <= n && !Wp(t[n], e); n--);
  };

  function Gp(e, t) {
   return t.push(e), !1
  }
  Rp.prototype.blur = function() {
   var e = g(this._fragmentFiber);
   e !== null && (e = b(e), e = pp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Kp, e, void 0, void 0))
  };

  function Kp(e, t) {
   return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1)
  }
  Rp.prototype.observeUsing = function(e) {
   this._observers === null && (this._observers = new Set), this._observers.add(e), h(this._fragmentFiber.child, !1, qp, e, void 0, void 0)
  };

  function qp(e, t) {
   return e.tag === 6 || (e = b(e), t.observe(e)), !1
  }
  Rp.prototype.unobserveUsing = function(e) {
   var t = this._observers;
   if (t !== null && t.has(e)) {
    t.delete(e), h(this._fragmentFiber.child, !1, Jp, e, void 0, void 0);
    for (var n = t = 0; n < Yp.length; n++) {
     var r = Yp[n];
     r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Yp[t++] = r
    }
    Yp.length = t
   }
  };

  function Jp(e, t) {
   return e.tag === 6 || (e = b(e), t.unobserve(e)), !1
  }
  var Yp = [],
   Xp = !1;

  function Zp(e, t, n) {
   Yp.push({
    fragmentInstance: e,
    observer: t,
    instance: n
   }), Xp || (Xp = !0, _m(function() {
    Xp = !1;
    var e = Yp;
    Yp = [];
    for (var t = 0; t < e.length; t++) {
     var n = e[t];
     n.observer.unobserve(n.instance)
    }
   }))
  }
  Rp.prototype.getClientRects = function() {
   var e = [];
   return h(this._fragmentFiber.child, !1, Qp, e, void 0, void 0), e
  };

  function Qp(e, t) {
   if (e.tag === 6) {
    e = e.stateNode;
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), t.push.apply(t, n.getClientRects())
   } else e = b(e), t.push.apply(t, e.getClientRects());
   return !1
  }
  Rp.prototype.getRootNode = function(e) {
   var t = g(this._fragmentFiber);
   return t === null ? this : b(t).getRootNode(e)
  }, Rp.prototype.compareDocumentPosition = function(e) {
   var t = g(this._fragmentFiber);
   if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
   var n = [];
   h(this._fragmentFiber.child, !1, Gp, n, void 0, void 0);
   var r = b(t);
   if (n.length === 0) {
    if (n = r, _(this._fragmentFiber)) {
     a: {
      for (t = this._fragmentFiber.return; t !== null;) {
       if (t.tag === 4) {
        t = t.stateNode.containerInfo;
        break a
       }
       if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
       t = t.return
      }
      t = null
     }
     t != null && (n = t)
    }
    t = this._fragmentFiber;
    var i = r = n.compareDocumentPosition(e);
    return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
   }
   t = b(n[0]), i = b(n[n.length - 1]);
   var a = _(this._fragmentFiber) ? t.parentElement : r;
   if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
   r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
   var o = t.compareDocumentPosition(e),
    s = i.compareDocumentPosition(e),
    c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
   return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || $p(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
  };

  function $p(e, t, n, r, i) {
   var a = jt(i);
   if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    if (n = !!a) a: {
     for (; a !== null;) {
      if (a.tag === 7 && (a === t || a.alternate === t)) {
       n = !0;
       break a
      }
      a = a.return
     }
     n = !1
    }
    return n
   }
   if (e & Node.DOCUMENT_POSITION_CONTAINS) {
    if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
    a: {
     for (a = t, t = g(t); a !== null;) {
      if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
       a = !0;
       break a
      }
      a = a.return
     }
     a = !1
    }
    return a
   }
   return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1
  }

  function em(e, t) {
   var n = e.ownerDocument.createRange();
   n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight)
  }
  Rp.prototype.scrollIntoView = function(e) {
   if (typeof e == `object`) throw Error(i(566));
   var t = [];
   h(this._fragmentFiber.child, !1, Gp, t, void 0, void 0);
   var n = !1 !== e;
   if (t.length === 0) {
    var r = v(this._fragmentFiber);
    if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
    if (r.tag === 6) {
     e = b(r), em(e, n);
     return
    }
    if (r = b(r), r.nodeType !== 9) {
     if (r.nodeType === 11) {
      n = `host` in r ? r.host : null, n !== null && n.scrollIntoView(e);
      return
     }
     r.scrollIntoView(e)
    }
   }
   for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
    var a = t[r];
    a.tag === 6 ? (a = b(a), em(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1
   }
  };

  function tm(e, t) {
   return e = b(e), nm(e, t), !1
  }

  function nm(e, t) {
   e.reactFragments ?? (e.reactFragments = new Set), e.reactFragments.add(t)
  }

  function rm(e, t) {
   var n = t._eventListeners;
   if (n !== null)
    for (var r = 0; r < n.length; r++) {
     var i = n[r];
     e.addEventListener(i.type, i.attachedListener, Vp(i.optionsOrUseCapture))
    }
   e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
    for (var r = 0, i = 0; i < Yp.length; i++) {
     var a = Yp[i];
     (a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Yp[r++] = a)
    }
    Yp.length = r, n.observe(e)
   }), nm(e, t))
  }

  function im(e, t) {
   var n = t._eventListeners;
   if (n !== null)
    for (var r = 0; r < n.length; r++) {
     var i = n[r];
     e.removeEventListener(i.type, i.attachedListener, Vp(i.optionsOrUseCapture))
    }
   e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
    typeof n.rootMargin == `string` ? Zp(t, n, e) : n.unobserve(e)
   }), e.reactFragments != null && e.reactFragments.delete(t))
  }

  function am(e) {
   var t = e.firstChild;
   for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
    var n = t;
    switch (t = t.nextSibling, n.nodeName) {
     case `HTML`:
     case `HEAD`:
     case `BODY`:
      am(n), At(n);
      continue;
     case `SCRIPT`:
     case `STYLE`:
      continue;
     case `LINK`:
      if (n.rel.toLowerCase() === `stylesheet`) continue
    }
    e.removeChild(n)
   }
  }

  function om(e, t, n, r) {
   for (; e.nodeType === 1;) {
    var i = n;
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
     if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break
    } else if (!r) {
     if (t === `input` && e.type === `hidden`) {
      var a = i.name == null ? null : `` + i.name;
      if (i.type === `hidden` && e.getAttribute(`name`) === a) return e
     } else return e
    } else if (!e[Ot]) switch (t) {
     case `meta`:
      if (!e.hasAttribute(`itemprop`)) break;
      return e;
     case `link`:
      if (a = e.getAttribute(`rel`), a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title)) break;
      return e;
     case `style`:
      if (e.hasAttribute(`data-precedence`)) break;
      return e;
     case `script`:
      if (a = e.getAttribute(`src`), (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`)) break;
      return e;
     default:
      return e
    }
    if (e = fm(e.nextSibling), e === null) break
   }
   return null
  }

  function sm(e, t, n) {
   if (t === ``) return null;
   for (; e.nodeType !== 3;)
    if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = fm(e.nextSibling), e === null)) return null;
   return e
  }

  function cm(e, t) {
   for (; e.nodeType !== 8;)
    if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = fm(e.nextSibling), e === null)) return null;
   return e
  }

  function lm(e) {
   return e.data === `$?` || e.data === `$~`
  }

  function um(e) {
   return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`
  }

  function dm(e, t) {
   var n = e.ownerDocument;
   if (e.data === `$~`) e._reactRetry = t;
   else if (e.data !== `$?` || n.readyState !== `loading`) t();
   else {
    var r = function() {
     t(), n.removeEventListener(`DOMContentLoaded`, r)
    };
    n.addEventListener(`DOMContentLoaded`, r), e._reactRetry = r
   }
  }

  function fm(e) {
   for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
     if (t = e.data, t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`) break;
     if (t === `/$` || t === `/&`) return null
    }
   }
   return e
  }
  var pm = null;

  function mm(e) {
   e = e.nextSibling;
   for (var t = 0; e;) {
    if (e.nodeType === 8) {
     var n = e.data;
     if (n === `/$` || n === `/&`) {
      if (t === 0) return fm(e.nextSibling);
      t--
     } else n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++
    }
    e = e.nextSibling
   }
   return null
  }

  function hm(e) {
   e = e.previousSibling;
   for (var t = 0; e;) {
    if (e.nodeType === 8) {
     var n = e.data;
     if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
      if (t === 0) return e;
      t--
     } else n !== `/$` && n !== `/&` || t++
    }
    e = e.previousSibling
   }
   return null
  }

  function gm(e, t) {
   function n() {
    r = !0
   }
   if (e.ownerDocument.activeElement === e) return !0;
   var r = !1;
   try {
    e.ownerDocument.addEventListener(`focus`, n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t)
   } finally {
    e.ownerDocument.removeEventListener(`focus`, n, !0)
   }
   return r
  }

  function _m(e) {
   Sp(function() {
    Sp(function(t) {
     return e(t)
    })
   })
  }

  function vm(e, t, n) {
   switch (t = pp(n), e) {
    case `html`:
     if (e = t.documentElement, !e) throw Error(i(452));
     return e;
    case `head`:
     if (e = t.head, !e) throw Error(i(453));
     return e;
    case `body`:
     if (e = t.body, !e) throw Error(i(454));
     return e;
    default:
     throw Error(i(451))
   }
  }

  function ym(e, t, n) {
   for (var r in n) {
    var i = n[r];
    n.hasOwnProperty(r) && i != null && ip(e, t, r, null, sp, i)
   }
   n.dangerouslySetInnerHTML != null && (e.textContent = ``), e.onclick === _n && (e.onclick = null), At(e)
  }

  function bm(e) {
   for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
   At(e)
  }
  var xm = new Map,
   Sm = new Set;

  function Cm(e) {
   if (typeof e.getRootNode == `function`) {
    var t = e.getRootNode();
    if (t.nodeType === 9 || t.nodeType === 11) return t
   }
   return e.nodeType === 9 ? e : e.ownerDocument
  }
  var wm = z.d;
  z.d = {
   f: Tm,
   r: Em,
   D: km,
   C: Am,
   L: jm,
   m: Mm,
   X: Pm,
   S: Nm,
   M: Fm
  };

  function Tm() {
   var e = wm.f(),
    t = Vd();
   return e || t
  }

  function Em(e) {
   var t = Mt(e);
   t !== null && t.tag === 5 && t.type === `form` ? nc(t) : wm.r(e)
  }
  var Dm = typeof document > `u` ? null : document;

  function Om(e, t, n) {
   var r = Dm;
   if (r && typeof t == `string` && t) {
    var i = tn(t);
    i = `link[rel="` + e + `"][href="` + i + `"]`, typeof n == `string` && (i += `[crossorigin="` + n + `"]`), Sm.has(i) || (Sm.add(i), e = {
     rel: e,
     crossOrigin: n,
     href: t
    }, r.querySelector(i) === null && (t = r.createElement(`link`), op(t, `link`, e), Ft(t), r.head.appendChild(t)))
   }
  }

  function km(e) {
   wm.D(e), Om(`dns-prefetch`, e, null)
  }

  function Am(e, t) {
   wm.C(e, t), Om(`preconnect`, e, t)
  }

  function jm(e, t, n) {
   wm.L(e, t, n);
   var r = Dm;
   if (r && e && t) {
    var i = `link[rel="preload"][as="` + tn(t) + `"]`;
    t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + tn(n.imageSrcSet) + `"]`, typeof n.imageSizes == `string` && (i += `[imagesizes="` + tn(n.imageSizes) + `"]`)) : i += `[href="` + tn(e) + `"]`;
    var a = i;
    switch (t) {
     case `style`:
      a = Lm(e);
      break;
     case `script`:
      a = Vm(e)
    }
    if (!(xm.has(a) || (e = D({
      rel: `preload`,
      href: t === `image` && n && n.imageSrcSet ? void 0 : e,
      as: t
     }, n), xm.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(Rm(a)) || t === `script` && r.querySelector(Hm(a))))) {
     var o = r.createElement(`link`);
     op(o, `link`, e), t === `style` && (o[kt] = !0, o.onload = o.onerror = function() {
      It(o)
     }), Ft(o), r.head.appendChild(o)
    }
   }
  }

  function Mm(e, t) {
   wm.m(e, t);
   var n = Dm;
   if (n && e) {
    var r = t && typeof t.as == `string` ? t.as : `script`,
     i = `link[rel="modulepreload"][as="` + tn(r) + `"][href="` + tn(e) + `"]`,
     a = i;
    switch (r) {
     case `audioworklet`:
     case `paintworklet`:
     case `serviceworker`:
     case `sharedworker`:
     case `worker`:
     case `script`:
      a = Vm(e)
    }
    if (!xm.has(a) && (e = D({
      rel: `modulepreload`,
      href: e
     }, t), xm.set(a, e), n.querySelector(i) === null)) {
     switch (r) {
      case `audioworklet`:
      case `paintworklet`:
      case `serviceworker`:
      case `sharedworker`:
      case `worker`:
      case `script`:
       if (n.querySelector(Hm(a))) return
     }
     r = n.createElement(`link`), op(r, `link`, e), Ft(r), n.head.appendChild(r)
    }
   }
  }

  function Nm(e, t, n) {
   wm.S(e, t, n);
   var r = Dm;
   if (r && e) {
    var i = Pt(r).hoistableStyles,
     a = Lm(e);
    t = t || `default`;
    var o = i.get(a);
    if (!o) {
     var s = {
      loading: 0,
      preload: null
     };
     if (o = r.querySelector(Rm(a))) s.loading = 5;
     else {
      e = D({
       rel: `stylesheet`,
       href: e,
       "data-precedence": t
      }, n), (n = xm.get(a)) && Gm(e, n);
      var c = o = r.createElement(`link`);
      Ft(c), op(c, `link`, e), c._p = new Promise(function(e, t) {
       c.onload = e, c.onerror = t
      }), c.addEventListener(`load`, function() {
       s.loading |= 1
      }), c.addEventListener(`error`, function() {
       s.loading |= 2
      }), s.loading |= 4, Wm(o, t, r)
     }
     o = {
      type: `stylesheet`,
      instance: o,
      count: 1,
      state: s
     }, i.set(a, o)
    }
   }
  }

  function Pm(e, t) {
   wm.X(e, t);
   var n = Dm;
   if (n && e) {
    var r = Pt(n).hoistableScripts,
     i = Vm(e),
     a = r.get(i);
    a || (a = n.querySelector(Hm(i)), a || (e = D({
     src: e,
     async: !0
    }, t), (t = xm.get(i)) && Km(e, t), a = n.createElement(`script`), Ft(a), op(a, `link`, e), n.head.appendChild(a)), a = {
     type: `script`,
     instance: a,
     count: 1,
     state: null
    }, r.set(i, a))
   }
  }

  function Fm(e, t) {
   wm.M(e, t);
   var n = Dm;
   if (n && e) {
    var r = Pt(n).hoistableScripts,
     i = Vm(e),
     a = r.get(i);
    a || (a = n.querySelector(Hm(i)), a || (e = D({
     src: e,
     async: !0,
     type: `module`
    }, t), (t = xm.get(i)) && Km(e, t), a = n.createElement(`script`), Ft(a), op(a, `link`, e), n.head.appendChild(a)), a = {
     type: `script`,
     instance: a,
     count: 1,
     state: null
    }, r.set(i, a))
   }
  }

  function Im(e, t, n, r) {
   var a = (a = xe.current) ? Cm(a) : null;
   if (!a) throw Error(i(446));
   switch (e) {
    case `meta`:
    case `title`:
     return null;
    case `style`:
     return typeof n.precedence == `string` && typeof n.href == `string` ? (n = Lm(n.href), t = Pt(a).hoistableStyles, r = t.get(n), r || (r = {
      type: `style`,
      instance: null,
      count: 0,
      state: null
     }, t.set(n, r)), r) : {
      type: `void`,
      instance: null,
      count: 0,
      state: null
     };
    case `link`:
     if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
      e = Lm(n.href);
      var o = Pt(a).hoistableStyles,
       s = o.get(e);
      if (s || (a = a.ownerDocument || a, s = {
        type: `stylesheet`,
        instance: null,
        count: 0,
        state: {
         loading: 0,
         preload: null
        }
       }, o.set(e, s), (o = a.querySelector(Rm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = xm.get(e), o || (o = {
        rel: `preload`,
        as: `style`,
        href: n.href,
        crossOrigin: n.crossOrigin,
        integrity: n.integrity,
        media: n.media,
        hrefLang: n.hrefLang,
        referrerPolicy: n.referrerPolicy
       }, xm.set(e, o)), Bm(a, e, o, s.state))), t && r === null) throw Error(i(528, ``));
      return s
     }
     if (t && r !== null) throw Error(i(529, ``));
     return null;
    case `script`:
     return t = n.async, n = n.src, typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (n = Vm(n), t = Pt(a).hoistableScripts, r = t.get(n), r || (r = {
      type: `script`,
      instance: null,
      count: 0,
      state: null
     }, t.set(n, r)), r) : {
      type: `void`,
      instance: null,
      count: 0,
      state: null
     };
    default:
     throw Error(i(444, e))
   }
  }

  function Lm(e) {
   return `href="` + tn(e) + `"`
  }

  function Rm(e) {
   return `link[rel="stylesheet"][` + e + `]`
  }

  function zm(e) {
   return D({}, e, {
    "data-precedence": e.precedence,
    precedence: null
   })
  }

  function Bm(e, t, n, r) {
   if (t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)) {
    if (!0 !== t[kt]) {
     r.loading = 1;
     return
    }
   } else t = e.createElement(`link`), t[kt] = !0, t.onload = t.onerror = It.bind(null, t), op(t, `link`, n), Ft(t), e.head.appendChild(t);
   r.preload = t, t.addEventListener(`load`, function() {
    return r.loading |= 1
   }), t.addEventListener(`error`, function() {
    return r.loading |= 2
   })
  }

  function Vm(e) {
   return `[src="` + tn(e) + `"]`
  }

  function Hm(e) {
   return `script[async]` + e
  }

  function Um(e, t, n) {
   if (t.count++, t.instance === null) switch (t.type) {
    case `style`:
     var r = e.querySelector(`style[data-href~="` + tn(n.href) + `"]`);
     if (r) return t.instance = r, Ft(r), r;
     var a = D({}, n, {
      "data-href": n.href,
      "data-precedence": n.precedence,
      href: null,
      precedence: null
     });
     return r = (e.ownerDocument || e).createElement(`style`), Ft(r), op(r, `style`, a), Wm(r, n.precedence, e), t.instance = r;
    case `stylesheet`:
     a = Lm(n.href);
     var o = e.querySelector(Rm(a));
     if (o) return t.state.loading |= 4, t.instance = o, Ft(o), o;
     r = zm(n), (a = xm.get(a)) && Gm(r, a), o = (e.ownerDocument || e).createElement(`link`), Ft(o);
     var s = o;
     return s._p = new Promise(function(e, t) {
      s.onload = e, s.onerror = t
     }), op(o, `link`, r), t.state.loading |= 4, Wm(o, n.precedence, e), t.instance = o;
    case `script`:
     return o = Vm(n.src), (a = e.querySelector(Hm(o))) ? (t.instance = a, Ft(a), a) : (r = n, (a = xm.get(o)) && (r = D({}, n), Km(r, a)), e = e.ownerDocument || e, a = e.createElement(`script`), Ft(a), op(a, `link`, r), e.head.appendChild(a), t.instance = a);
    case `void`:
     return null;
    default:
     throw Error(i(443, t.type))
   } else t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Wm(r, n.precedence, e));
   return t.instance
  }

  function Wm(e, t, n) {
   for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
    var s = r[o];
    if (s.dataset.precedence === t) a = s;
    else if (a !== i) break
   }
   a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
  }

  function Gm(e, t) {
   e.crossOrigin ?? (e.crossOrigin = t.crossOrigin), e.referrerPolicy ?? (e.referrerPolicy = t.referrerPolicy), e.title ?? (e.title = t.title)
  }

  function Km(e, t) {
   e.crossOrigin ?? (e.crossOrigin = t.crossOrigin), e.referrerPolicy ?? (e.referrerPolicy = t.referrerPolicy), e.integrity ?? (e.integrity = t.integrity)
  }
  var qm = null;

  function Jm(e, t, n) {
   if (qm === null) {
    var r = new Map,
     i = qm = new Map;
    i.set(n, r)
   } else i = qm, r = i.get(n), r || (r = new Map, i.set(n, r));
   if (r.has(e)) return r;
   for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
    var a = n[i];
    if (!(a[Ot] || a[xt] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
     var o = a.getAttribute(t) || ``;
     o = e + o;
     var s = r.get(o);
     s ? s.push(a) : r.set(o, [a])
    }
   }
   return r
  }

  function Ym(e, t, n) {
   e = e.ownerDocument || e, e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null)
  }

  function Xm(e, t, n) {
   if (n === 1 || t.itemProp != null) return !1;
   switch (e) {
    case `meta`:
    case `title`:
     return !0;
    case `style`:
     if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
     return !0;
    case `link`:
     if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) break;
     switch (t.rel) {
      case `stylesheet`:
       return e = t.disabled, typeof t.precedence == `string` && e == null;
      default:
       return !0
     }
    case `script`:
     if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`) return !0
   }
   return !1
  }

  function Zm(e, t) {
   return e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`
  }

  function Qm(e) {
   return !(e.type === `stylesheet` && !(e.state.loading & 3))
  }

  function $m(e) {
   return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * .25
  }

  function eh(e, t) {
   typeof t.decode == `function` && (e.imgCount++, t.complete || (e.imgBytes += $m(t), e.suspenseyImages.push(t)), e = oh.bind(e), t.decode().then(e, e))
  }

  function th(e, t, n, r) {
   if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
    if (n.instance === null) {
     var i = Lm(r.href),
      a = t.querySelector(Rm(i));
     if (a) {
      t = a._p, typeof t == `object` && t && typeof t.then == `function` && (e.count++, e = ah.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Ft(a);
      return
     }
     a = t.ownerDocument || t, r = zm(r), (i = xm.get(i)) && Gm(r, i), a = a.createElement(`link`), Ft(a);
     var o = a;
     o._p = new Promise(function(e, t) {
      o.onload = e, o.onerror = t
     }), op(a, `link`, r), n.instance = a
    }
    e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = ah.bind(e), t.addEventListener(`load`, n), t.addEventListener(`error`, n))
   }
  }
  var nh = 0;

  function rh(e, t) {
   return e.stylesheets && e.count === 0 && ch(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
    var r = setTimeout(function() {
     if (e.stylesheets && ch(e, e.stylesheets), e.unsuspend) {
      var t = e.unsuspend;
      e.unsuspend = null, t()
     }
    }, 6e4 + t);
    0 < e.imgBytes && nh === 0 && (nh = 62500 * up());
    var i = setTimeout(function() {
     if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ch(e, e.stylesheets), e.unsuspend)) {
      var t = e.unsuspend;
      e.unsuspend = null, t()
     }
    }, (e.imgBytes > nh ? 50 : 800) + t);
    return e.unsuspend = n,
     function() {
      e.unsuspend = null, clearTimeout(r), clearTimeout(i)
     }
   } : null
  }

  function ih(e) {
   if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
    if (e.stylesheets) ch(e, e.stylesheets);
    else if (e.unsuspend) {
     var t = e.unsuspend;
     e.unsuspend = null, t()
    }
   }
  }

  function ah() {
   this.count--, ih(this)
  }

  function oh() {
   this.imgCount--, ih(this)
  }
  var sh = null;

  function ch(e, t) {
   e.stylesheets = null, e.unsuspend !== null && (e.count++, sh = new Map, t.forEach(lh, e), sh = null, ah.call(e))
  }

  function lh(e, t) {
   if (!(t.state.loading & 4)) {
    var n = sh.get(e);
    if (n) var r = n.get(null);
    else {
     n = new Map, sh.set(e, n);
     for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
      var o = i[a];
      (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o), r = o)
     }
     r && n.set(null, r)
    }
    i = t.instance, o = i.getAttribute(`data-precedence`), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = ah.bind(this), i.addEventListener(`load`, r), i.addEventListener(`error`, r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4
   }
  }
  var uh = {
   $$typeof: F,
   Provider: null,
   Consumer: null,
   _currentValue: pe,
   _currentValue2: pe,
   _threadCount: 0
  };

  function dh(e, t, n, r, i, a, o, s, c) {
   this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ut(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ut(0), this.hiddenUpdates = ut(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = new Map
  }

  function fh(e, t, n, r, i, a, o, s, c, l, u, d) {
   return e = new dh(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = ji(3, null, null, t), e.current = a, a.stateNode = e, t = ja(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: t
   }, mo(a), e
  }

  function ph(e) {
   return e ? (e = ki, e) : ki
  }

  function mh(e, t, n, r, i, a) {
   i = ph(i), r.context === null ? r.context = i : r.pendingContext = i, r = go(t), r.payload = {
    element: n
   }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = _o(e, r, t), n !== null && (Id(n, e, t), vo(n, e, t))
  }

  function hh(e, t) {
   if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
   }
  }

  function gh(e, t) {
   hh(e, t), (e = e.alternate) && hh(e, t)
  }

  function _h(e) {
   if (e.tag === 13 || e.tag === 31) {
    var t = Ei(e, 67108864);
    t !== null && Id(t, e, 67108864), gh(e, 67108864)
   }
  }

  function vh(e) {
   if (e.tag === 13 || e.tag === 31) {
    var t = Nd();
    t = gt(t);
    var n = Ei(e, t);
    n !== null && Id(n, e, t), gh(e, t)
   }
  }
  var yh = !0;

  function bh(e, t, n, r) {
   var i = R.T;
   R.T = null;
   var a = z.p;
   try {
    z.p = 2, Sh(e, t, n, r)
   } finally {
    z.p = a, R.T = i
   }
  }

  function xh(e, t, n, r) {
   var i = R.T;
   R.T = null;
   var a = z.p;
   try {
    z.p = 8, Sh(e, t, n, r)
   } finally {
    z.p = a, R.T = i
   }
  }

  function Sh(e, t, n, r) {
   if (yh) {
    var i = Ch(r);
    if (i === null) Yf(e, t, r, wh, n), Fh(e, r);
    else if (Lh(i, e, t, n, r)) r.stopPropagation();
    else if (Fh(e, r), t & 4 && -1 < Ph.indexOf(e)) {
     for (; i !== null;) {
      var a = Mt(i);
      if (a !== null) switch (a.tag) {
       case 3:
        if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
         var o = it(a.pendingLanes);
         if (o !== 0) {
          var s = a;
          for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
           var c = 1 << 31 - Ze(o);
           s.entanglements[1] |= c, o &= ~c
          }
          kf(a), !(K & 6) && (vd = ze() + 500, Af(0, !1))
         }
        }
        break;
       case 31:
       case 13:
        s = Ei(a, 2), s !== null && Id(s, a, 2), Vd(), gh(a, 2)
      }
      if (a = Ch(r), a === null && Yf(e, t, r, wh, n), a === i) break;
      i = a
     }
     i !== null && r.stopPropagation()
    } else Yf(e, t, r, null, n)
   }
  }

  function Ch(e) {
   return e = yn(e), Th(e)
  }
  var wh = null;

  function Th(e) {
   if (wh = null, e = jt(e), e !== null) {
    var t = o(e);
    if (t === null) e = null;
    else {
     var n = t.tag;
     if (n === 13) {
      if (e = s(t), e !== null) return e;
      e = null
     } else if (n === 31) {
      if (e = c(t), e !== null) return e;
      e = null
     } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
     } else t !== e && (e = null)
    }
   }
   return wh = e, null
  }

  function Eh(e) {
   switch (e) {
    case `beforetoggle`:
    case `cancel`:
    case `click`:
    case `close`:
    case `contextmenu`:
    case `copy`:
    case `cut`:
    case `auxclick`:
    case `dblclick`:
    case `dragend`:
    case `dragstart`:
    case `drop`:
    case `focusin`:
    case `focusout`:
    case `input`:
    case `invalid`:
    case `keydown`:
    case `keypress`:
    case `keyup`:
    case `mousedown`:
    case `mouseup`:
    case `paste`:
    case `pause`:
    case `play`:
    case `pointercancel`:
    case `pointerdown`:
    case `pointerup`:
    case `ratechange`:
    case `reset`:
    case `seeked`:
    case `submit`:
    case `toggle`:
    case `touchcancel`:
    case `touchend`:
    case `touchstart`:
    case `volumechange`:
    case `change`:
    case `selectionchange`:
    case `textInput`:
    case `compositionstart`:
    case `compositionend`:
    case `compositionupdate`:
    case `beforeblur`:
    case `afterblur`:
    case `beforeinput`:
    case `blur`:
    case `fullscreenchange`:
    case `fullscreenerror`:
    case `focus`:
    case `hashchange`:
    case `popstate`:
    case `select`:
    case `selectstart`:
     return 2;
    case `drag`:
    case `dragenter`:
    case `dragexit`:
    case `dragleave`:
    case `dragover`:
    case `mousemove`:
    case `mouseout`:
    case `mouseover`:
    case `pointermove`:
    case `pointerout`:
    case `pointerover`:
    case `resize`:
    case `scroll`:
    case `touchmove`:
    case `wheel`:
    case `mouseenter`:
    case `mouseleave`:
    case `pointerenter`:
    case `pointerleave`:
     return 8;
    case `message`:
     switch (Be()) {
      case Ve:
       return 2;
      case He:
       return 8;
      case Ue:
      case We:
       return 32;
      case Ge:
       return 268435456;
      default:
       return 32
     }
    default:
     return 32
   }
  }
  var Dh = !1,
   Oh = null,
   kh = null,
   Ah = null,
   jh = new Map,
   Mh = new Map,
   Nh = [],
   Ph = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);

  function Fh(e, t) {
   switch (e) {
    case `focusin`:
    case `focusout`:
     Oh = null;
     break;
    case `dragenter`:
    case `dragleave`:
     kh = null;
     break;
    case `mouseover`:
    case `mouseout`:
     Ah = null;
     break;
    case `pointerover`:
    case `pointerout`:
     jh.delete(t.pointerId);
     break;
    case `gotpointercapture`:
    case `lostpointercapture`:
     Mh.delete(t.pointerId)
   }
  }

  function Ih(e, t, n, r, i, a) {
   return e === null || e.nativeEvent !== a ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: a,
    targetContainers: [i]
   }, t !== null && (t = Mt(t), t !== null && _h(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
  }

  function Lh(e, t, n, r, i) {
   switch (t) {
    case `focusin`:
     return Oh = Ih(Oh, e, t, n, r, i), !0;
    case `dragenter`:
     return kh = Ih(kh, e, t, n, r, i), !0;
    case `mouseover`:
     return Ah = Ih(Ah, e, t, n, r, i), !0;
    case `pointerover`:
     var a = i.pointerId;
     return jh.set(a, Ih(jh.get(a) || null, e, t, n, r, i)), !0;
    case `gotpointercapture`:
     return a = i.pointerId, Mh.set(a, Ih(Mh.get(a) || null, e, t, n, r, i)), !0
   }
   return !1
  }

  function Rh(e) {
   var t = jt(e.target);
   if (t !== null) {
    var n = o(t);
    if (n !== null) {
     if (t = n.tag, t === 13) {
      if (t = s(n), t !== null) {
       e.blockedOn = t, yt(e.priority, function() {
        vh(n)
       });
       return
      }
     } else if (t === 31) {
      if (t = c(n), t !== null) {
       e.blockedOn = t, yt(e.priority, function() {
        vh(n)
       });
       return
      }
     } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
      e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
      return
     }
    }
   }
   e.blockedOn = null
  }

  function zh(e) {
   if (e.blockedOn !== null) return !1;
   for (var t = e.targetContainers; 0 < t.length;) {
    var n = Ch(e.nativeEvent);
    if (n === null) {
     n = e.nativeEvent;
     var r = new n.constructor(n.type, n);
     vn = r, n.target.dispatchEvent(r), vn = null
    } else return t = Mt(n), t !== null && _h(t), e.blockedOn = n, !1;
    t.shift()
   }
   return !0
  }

  function Bh(e, t, n) {
   zh(e) && n.delete(t)
  }

  function Vh() {
   Dh = !1, Oh !== null && zh(Oh) && (Oh = null), kh !== null && zh(kh) && (kh = null), Ah !== null && zh(Ah) && (Ah = null), jh.forEach(Bh), Mh.forEach(Bh)
  }

  function Hh(e, n) {
   e.blockedOn === n && (e.blockedOn = null, Dh || (Dh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Vh)))
  }
  var Uh = null;

  function Wh(e) {
   Uh !== e && (Uh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
    Uh === e && (Uh = null);
    for (var t = 0; t < e.length; t += 3) {
     var n = e[t],
      r = e[t + 1],
      i = e[t + 2];
     if (typeof r != `function`) {
      if (Th(r || n) === null) continue;
      break
     }
     var a = Mt(n);
     a !== null && (e.splice(t, 3), t -= 3, ec(a, {
      pending: !0,
      data: i,
      method: n.method,
      action: r
     }, r, i))
    }
   }))
  }

  function Gh(e) {
   function t(t) {
    return Hh(t, e)
   }
   Oh !== null && Hh(Oh, e), kh !== null && Hh(kh, e), Ah !== null && Hh(Ah, e), jh.forEach(t), Mh.forEach(t);
   for (var n = 0; n < Nh.length; n++) {
    var r = Nh[n];
    r.blockedOn === e && (r.blockedOn = null)
   }
   for (; 0 < Nh.length && (n = Nh[0], n.blockedOn === null);) Rh(n), n.blockedOn === null && Nh.shift();
   if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
    for (r = 0; r < n.length; r += 3) {
     var i = n[r],
      a = n[r + 1],
      o = i[St] || null;
     if (typeof a == `function`) o || Wh(n);
     else if (o) {
      var s = null;
      if (a && a.hasAttribute(`formAction`)) {
       if (i = a, o = a[St] || null) s = o.formAction;
       else if (Th(i) !== null) continue
      } else s = o.action;
      typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Wh(n)
     }
    }
  }

  function Kh() {
   function e(e) {
    e.canIntercept && e.info === `react-transition` && e.intercept({
     handler: function() {
      return new Promise(function(e) {
       return i = e
      })
     },
     focusReset: `manual`,
     scroll: `manual`
    })
   }

   function t() {
    i !== null && (i(), i = null), r || setTimeout(n, 20)
   }

   function n() {
    if (!r && !navigation.transition) {
     var e = navigation.currentEntry;
     e && e.url != null && navigation.navigate(e.url, {
      state: e.getState(),
      info: `react-transition`,
      history: `replace`
     })
    }
   }
   if (typeof navigation == `object`) {
    var r = !1,
     i = null;
    return navigation.addEventListener(`navigate`, e), navigation.addEventListener(`navigatesuccess`, t), navigation.addEventListener(`navigateerror`, t), setTimeout(n, 100),
     function() {
      r = !0, navigation.removeEventListener(`navigate`, e), navigation.removeEventListener(`navigatesuccess`, t), navigation.removeEventListener(`navigateerror`, t), i !== null && (i(), i = null)
     }
   }
  }

  function qh(e) {
   this._internalRoot = e
  }
  Jh.prototype.render = qh.prototype.render = function(e) {
   var t = this._internalRoot;
   if (t === null) throw Error(i(409));
   var n = t.current;
   mh(n, Nd(), e, t, null, null)
  }, Jh.prototype.unmount = qh.prototype.unmount = function() {
   var e = this._internalRoot;
   if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mh(e.current, 2, null, e, null, null), Vd(), t[Ct] = null
   }
  };

  function Jh(e) {
   this._internalRoot = e
  }
  Jh.prototype.unstable_scheduleHydration = function(e) {
   if (e) {
    var t = vt();
    e = {
     blockedOn: null,
     target: e,
     priority: t
    };
    for (var n = 0; n < Nh.length && t !== 0 && t < Nh[n].priority; n++);
    Nh.splice(n, 0, e), n === 0 && Rh(e)
   }
  };
  var Yh = n.version;
  if (Yh !== `19.3.1`) throw Error(i(527, Yh, `19.3.1`));
  z.findDOMNode = function(e) {
   var t = e._reactInternals;
   if (t === void 0) throw typeof e.render == `function` ? Error(i(188)) : (e = Object.keys(e).join(`,`), Error(i(268, e)));
   return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e
  };
  var Xh = {
   bundleType: 0,
   version: `19.3.1`,
   rendererPackageName: `react-dom`,
   currentDispatcherRef: R,
   reconcilerVersion: `19.3.1`
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
   var Zh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
   if (!Zh.isDisabled && Zh.supportsFiber) try {
    Je = Zh.inject(Xh), Ye = Zh
   } catch {}
  }
  e.createRoot = function(e, t) {
   if (!a(e)) throw Error(i(299));
   var n = !1,
    r = ``,
    o = Cc,
    s = wc,
    c = Tc;
   return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = fh(e, 1, !1, null, null, n, r, null, o, s, c, Kh), e[Ct] = t.current, qf(e), new qh(t)
  }
 })),
 g = o(((e, t) => {
  function n() {
   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
   } catch (e) {
    console.error(e)
   }
  }
  n(), t.exports = h()
 })),
 _ = c(u(), 1),
 v = g(),
 y = o((e => {
  var t = Symbol.for(`react.transitional.element`),
   n = Symbol.for(`react.fragment`);

  function r(e, n, r) {
   var i = null;
   if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n)
    for (var a in r = {}, n) a !== `key` && (r[a] = n[a]);
   else r = n;
   return n = r.ref, {
    $$typeof: t,
    type: e,
    key: i,
    ref: n === void 0 ? null : n,
    props: r
   }
  }
  e.Fragment = n, e.jsx = r, e.jsxs = r
 })),
 b = o(((e, t) => {
  t.exports = y()
 }))();

function x(e) {
 if (typeof e == `string` || typeof e == `number`) return `` + e;
 let t = ``;
 if (Array.isArray(e))
  for (let n = 0, r; n < e.length; n++)(r = x(e[n])) !== `` && (t += (t && ` `) + r);
 else
  for (let n in e) e[n] && (t += (t && ` `) + n);
 return t
}
var S = {
 value: () => {}
};

function C() {
 for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
  if (!(r = arguments[e] + ``) || r in n || /[\s.]/.test(r)) throw Error(`illegal type: ` + r);
  n[r] = []
 }
 return new w(n)
}

function w(e) {
 this._ = e
}

function T(e, t) {
 return e.trim().split(/^|\s+/).map(function(e) {
  var n = ``,
   r = e.indexOf(`.`);
  if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error(`unknown type: ` + e);
  return {
   type: e,
   name: n
  }
 })
}
w.prototype = C.prototype = {
 constructor: w,
 on: function(e, t) {
  var n = this._,
   r = T(e + ``, n),
   i, a = -1,
   o = r.length;
  if (arguments.length < 2) {
   for (; ++a < o;)
    if ((i = (e = r[a]).type) && (i = E(n[i], e.name))) return i
  } else {
   if (t != null && typeof t != `function`) throw Error(`invalid callback: ` + t);
   for (; ++a < o;)
    if (i = (e = r[a]).type) n[i] = D(n[i], e.name, t);
    else if (t == null)
    for (i in n) n[i] = D(n[i], e.name, null);
   return this
  }
 },
 copy: function() {
  var e = {},
   t = this._;
  for (var n in t) e[n] = t[n].slice();
  return new w(e)
 },
 call: function(e, t) {
  if ((i = arguments.length - 2) > 0)
   for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
  if (!this._.hasOwnProperty(e)) throw Error(`unknown type: ` + e);
  for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n)
 },
 apply: function(e, t, n) {
  if (!this._.hasOwnProperty(e)) throw Error(`unknown type: ` + e);
  for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n)
 }
};

function E(e, t) {
 for (var n = 0, r = e.length, i; n < r; ++n)
  if ((i = e[n]).name === t) return i.value
}

function D(e, t, n) {
 for (var r = 0, i = e.length; r < i; ++r)
  if (e[r].name === t) {
   e[r] = S, e = e.slice(0, r).concat(e.slice(r + 1));
   break
  } return n != null && e.push({
  name: t,
  value: n
 }), e
}
var O = `http://www.w3.org/1999/xhtml`,
 k = {
  svg: `http://www.w3.org/2000/svg`,
  xhtml: O,
  xlink: `http://www.w3.org/1999/xlink`,
  xml: `http://www.w3.org/XML/1998/namespace`,
  xmlns: `http://www.w3.org/2000/xmlns/`
 };

function A(e) {
 var t = e += ``,
  n = t.indexOf(`:`);
 return n >= 0 && (t = e.slice(0, n)) !== `xmlns` && (e = e.slice(n + 1)), k.hasOwnProperty(t) ? {
  space: k[t],
  local: e
 } : e
}

function j(e) {
 return function() {
  var t = this.ownerDocument,
   n = this.namespaceURI;
  return n === O && t.documentElement.namespaceURI === O ? t.createElement(e) : t.createElementNS(n, e)
 }
}

function M(e) {
 return function() {
  return this.ownerDocument.createElementNS(e.space, e.local)
 }
}

function N(e) {
 var t = A(e);
 return (t.local ? M : j)(t)
}

function P() {}

function F(e) {
 return e == null ? P : function() {
  return this.querySelector(e)
 }
}

function ee(e) {
 typeof e != `function` && (e = F(e));
 for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
  for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u)(c = a[u]) && (l = e.call(c, c.__data__, u, a)) && (`__data__` in c && (l.__data__ = c.__data__), s[u] = l);
 return new Rt(r, this._parents)
}

function te(e) {
 return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
}

function ne() {
 return []
}

function re(e) {
 return e == null ? ne : function() {
  return this.querySelectorAll(e)
 }
}

function I(e) {
 return function() {
  return te(e.apply(this, arguments))
 }
}

function ie(e) {
 e = typeof e == `function` ? I(e) : re(e);
 for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a)
  for (var o = t[a], s = o.length, c, l = 0; l < s; ++l)(c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
 return new Rt(r, i)
}

function L(e) {
 return function() {
  return this.matches(e)
 }
}

function ae(e) {
 return function(t) {
  return t.matches(e)
 }
}
var oe = Array.prototype.find;

function se(e) {
 return function() {
  return oe.call(this.children, e)
 }
}

function ce() {
 return this.firstElementChild
}

function le(e) {
 return this.select(e == null ? ce : se(typeof e == `function` ? e : ae(e)))
}
var ue = Array.prototype.filter;

function de() {
 return Array.from(this.children)
}

function fe(e) {
 return function() {
  return ue.call(this.children, e)
 }
}

function R(e) {
 return this.selectAll(e == null ? de : fe(typeof e == `function` ? e : ae(e)))
}

function z(e) {
 typeof e != `function` && (e = L(e));
 for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
  for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l)(c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
 return new Rt(r, this._parents)
}

function pe(e) {
 return Array(e.length)
}

function me() {
 return new Rt(this._enter || this._groups.map(pe), this._parents)
}

function he(e, t) {
 this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
}
he.prototype = {
 constructor: he,
 appendChild: function(e) {
  return this._parent.insertBefore(e, this._next)
 },
 insertBefore: function(e, t) {
  return this._parent.insertBefore(e, t)
 },
 querySelector: function(e) {
  return this._parent.querySelector(e)
 },
 querySelectorAll: function(e) {
  return this._parent.querySelectorAll(e)
 }
};

function ge(e) {
 return function() {
  return e
 }
}

function _e(e, t, n, r, i, a) {
 for (var o = 0, s, c = t.length, l = a.length; o < l; ++o)(s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new he(e, a[o]);
 for (; o < c; ++o)(s = t[o]) && (i[o] = s)
}

function ve(e, t, n, r, i, a, o) {
 var s, c, l = new Map,
  u = t.length,
  d = a.length,
  f = Array(u),
  p;
 for (s = 0; s < u; ++s)(c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + ``, l.has(p) ? i[s] = c : l.set(p, c));
 for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + ``, (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new he(e, a[s]);
 for (s = 0; s < u; ++s)(c = t[s]) && l.get(f[s]) === c && (i[s] = c)
}

function ye(e) {
 return e.__data__
}

function be(e, t) {
 if (!arguments.length) return Array.from(this, ye);
 var n = t ? ve : _e,
  r = this._parents,
  i = this._groups;
 typeof e != `function` && (e = ge(e));
 for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
  var u = r[l],
   d = i[l],
   f = d.length,
   p = xe(e.call(u, u && u.__data__, l, r)),
   m = p.length,
   h = s[l] = Array(m),
   g = o[l] = Array(m);
  n(u, d, h, g, c[l] = Array(f), p, t);
  for (var _ = 0, v = 0, y, b; _ < m; ++_)
   if (y = h[_]) {
    for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
    y._next = b || null
   }
 }
 return o = new Rt(o, r), o._enter = s, o._exit = c, o
}

function xe(e) {
 return typeof e == `object` && `length` in e ? e : Array.from(e)
}

function Se() {
 return new Rt(this._exit || this._groups.map(pe), this._parents)
}

function Ce(e, t, n) {
 var r = this.enter(),
  i = this,
  a = this.exit();
 return typeof e == `function` ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ``), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i
}

function we(e) {
 for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c)
  for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m)(p = l[m] || u[m]) && (f[m] = p);
 for (; c < i; ++c) s[c] = n[c];
 return new Rt(s, this._parents)
}

function Te() {
 for (var e = this._groups, t = -1, n = e.length; ++t < n;)
  for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;)(o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
 return this
}

function Ee(e) {
 e || (e = De);

 function t(t, n) {
  return t && n ? e(t.__data__, n.__data__) : !t - !n
 }
 for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
  for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u)(l = o[u]) && (c[u] = l);
  c.sort(t)
 }
 return new Rt(i, this._parents).order()
}

function De(e, t) {
 return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function Oe() {
 var e = arguments[0];
 return arguments[0] = this, e.apply(null, arguments), this
}

function ke() {
 return Array.from(this)
}

function Ae() {
 for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
  for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
   var o = r[i];
   if (o) return o
  }
 return null
}

function je() {
 let e = 0;
 for (let t of this) ++e;
 return e
}

function Me() {
 return !this.node()
}

function Ne(e) {
 for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
  for (var i = t[n], a = 0, o = i.length, s; a < o; ++a)(s = i[a]) && e.call(s, s.__data__, a, i);
 return this
}

function Pe(e) {
 return function() {
  this.removeAttribute(e)
 }
}

function Fe(e) {
 return function() {
  this.removeAttributeNS(e.space, e.local)
 }
}

function Ie(e, t) {
 return function() {
  this.setAttribute(e, t)
 }
}

function Le(e, t) {
 return function() {
  this.setAttributeNS(e.space, e.local, t)
 }
}

function Re(e, t) {
 return function() {
  var n = t.apply(this, arguments);
  n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
 }
}

function ze(e, t) {
 return function() {
  var n = t.apply(this, arguments);
  n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
 }
}

function Be(e, t) {
 var n = A(e);
 if (arguments.length < 2) {
  var r = this.node();
  return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
 }
 return this.each((t == null ? n.local ? Fe : Pe : typeof t == `function` ? n.local ? ze : Re : n.local ? Le : Ie)(n, t))
}

function Ve(e) {
 return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
}

function He(e) {
 return function() {
  this.style.removeProperty(e)
 }
}

function Ue(e, t, n) {
 return function() {
  this.style.setProperty(e, t, n)
 }
}

function We(e, t, n) {
 return function() {
  var r = t.apply(this, arguments);
  r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
 }
}

function Ge(e, t, n) {
 return arguments.length > 1 ? this.each((t == null ? He : typeof t == `function` ? We : Ue)(e, t, n ?? ``)) : Ke(this.node(), e)
}

function Ke(e, t) {
 return e.style.getPropertyValue(t) || Ve(e).getComputedStyle(e, null).getPropertyValue(t)
}

function qe(e) {
 return function() {
  delete this[e]
 }
}

function Je(e, t) {
 return function() {
  this[e] = t
 }
}

function Ye(e, t) {
 return function() {
  var n = t.apply(this, arguments);
  n == null ? delete this[e] : this[e] = n
 }
}

function Xe(e, t) {
 return arguments.length > 1 ? this.each((t == null ? qe : typeof t == `function` ? Ye : Je)(e, t)) : this.node()[e]
}

function Ze(e) {
 return e.trim().split(/^|\s+/)
}

function Qe(e) {
 return e.classList || new $e(e)
}

function $e(e) {
 this._node = e, this._names = Ze(e.getAttribute(`class`) || ``)
}
$e.prototype = {
 add: function(e) {
  this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute(`class`, this._names.join(` `)))
 },
 remove: function(e) {
  var t = this._names.indexOf(e);
  t >= 0 && (this._names.splice(t, 1), this._node.setAttribute(`class`, this._names.join(` `)))
 },
 contains: function(e) {
  return this._names.indexOf(e) >= 0
 }
};

function et(e, t) {
 for (var n = Qe(e), r = -1, i = t.length; ++r < i;) n.add(t[r])
}

function tt(e, t) {
 for (var n = Qe(e), r = -1, i = t.length; ++r < i;) n.remove(t[r])
}

function nt(e) {
 return function() {
  et(this, e)
 }
}

function rt(e) {
 return function() {
  tt(this, e)
 }
}

function it(e, t) {
 return function() {
  (t.apply(this, arguments) ? et : tt)(this, e)
 }
}

function at(e, t) {
 var n = Ze(e + ``);
 if (arguments.length < 2) {
  for (var r = Qe(this.node()), i = -1, a = n.length; ++i < a;)
   if (!r.contains(n[i])) return !1;
  return !0
 }
 return this.each((typeof t == `function` ? it : t ? nt : rt)(n, t))
}

function ot() {
 this.textContent = ``
}

function st(e) {
 return function() {
  this.textContent = e
 }
}

function ct(e) {
 return function() {
  var t = e.apply(this, arguments);
  this.textContent = t ?? ``
 }
}

function lt(e) {
 return arguments.length ? this.each(e == null ? ot : (typeof e == `function` ? ct : st)(e)) : this.node().textContent
}

function ut() {
 this.innerHTML = ``
}

function dt(e) {
 return function() {
  this.innerHTML = e
 }
}

function ft(e) {
 return function() {
  var t = e.apply(this, arguments);
  this.innerHTML = t ?? ``
 }
}

function pt(e) {
 return arguments.length ? this.each(e == null ? ut : (typeof e == `function` ? ft : dt)(e)) : this.node().innerHTML
}

function mt() {
 this.nextSibling && this.parentNode.appendChild(this)
}

function ht() {
 return this.each(mt)
}

function gt() {
 this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}

function _t() {
 return this.each(gt)
}

function vt(e) {
 var t = typeof e == `function` ? e : N(e);
 return this.select(function() {
  return this.appendChild(t.apply(this, arguments))
 })
}

function yt() {
 return null
}

function bt(e, t) {
 var n = typeof e == `function` ? e : N(e),
  r = t == null ? yt : typeof t == `function` ? t : F(t);
 return this.select(function() {
  return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
 })
}

function xt() {
 var e = this.parentNode;
 e && e.removeChild(this)
}

function St() {
 return this.each(xt)
}

function Ct() {
 var e = this.cloneNode(!1),
  t = this.parentNode;
 return t ? t.insertBefore(e, this.nextSibling) : e
}

function wt() {
 var e = this.cloneNode(!0),
  t = this.parentNode;
 return t ? t.insertBefore(e, this.nextSibling) : e
}

function Tt(e) {
 return this.select(e ? wt : Ct)
}

function Et(e) {
 return arguments.length ? this.property(`__data__`, e) : this.node().__data__
}

function Dt(e) {
 return function(t) {
  e.call(this, t, this.__data__)
 }
}

function Ot(e) {
 return e.trim().split(/^|\s+/).map(function(e) {
  var t = ``,
   n = e.indexOf(`.`);
  return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
   type: e,
   name: t
  }
 })
}

function kt(e) {
 return function() {
  var t = this.__on;
  if (t) {
   for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
   ++r ? t.length = r : delete this.__on
  }
 }
}

function At(e, t, n) {
 return function() {
  var r = this.__on,
   i, a = Dt(t);
  if (r) {
   for (var o = 0, s = r.length; o < s; ++o)
    if ((i = r[o]).type === e.type && i.name === e.name) {
     this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
     return
    }
  }
  this.addEventListener(e.type, a, n), i = {
   type: e.type,
   name: e.name,
   value: t,
   listener: a,
   options: n
  }, r ? r.push(i) : this.__on = [i]
 }
}

function jt(e, t, n) {
 var r = Ot(e + ``),
  i, a = r.length,
  o;
 if (arguments.length < 2) {
  var s = this.node().__on;
  if (s) {
   for (var c = 0, l = s.length, u; c < l; ++c)
    for (i = 0, u = s[c]; i < a; ++i)
     if ((o = r[i]).type === u.type && o.name === u.name) return u.value
  }
 } else {
  for (s = t ? At : kt, i = 0; i < a; ++i) this.each(s(r[i], t, n));
  return this
 }
}

function Mt(e, t, n) {
 var r = Ve(e),
  i = r.CustomEvent;
 typeof i == `function` ? i = new i(t, n) : (i = r.document.createEvent(`Event`), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i)
}

function Nt(e, t) {
 return function() {
  return Mt(this, e, t)
 }
}

function Pt(e, t) {
 return function() {
  return Mt(this, e, t.apply(this, arguments))
 }
}

function Ft(e, t) {
 return this.each((typeof t == `function` ? Pt : Nt)(e, t))
}

function* It() {
 for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
  for (var r = e[t], i = 0, a = r.length, o; i < a; ++i)(o = r[i]) && (yield o)
}
var Lt = [null];

function Rt(e, t) {
 this._groups = e, this._parents = t
}

function zt() {
 return new Rt([
  [document.documentElement]
 ], Lt)
}

function Bt() {
 return this
}
Rt.prototype = zt.prototype = {
 constructor: Rt,
 select: ee,
 selectAll: ie,
 selectChild: le,
 selectChildren: R,
 filter: z,
 data: be,
 enter: me,
 exit: Se,
 join: Ce,
 merge: we,
 selection: Bt,
 order: Te,
 sort: Ee,
 call: Oe,
 nodes: ke,
 node: Ae,
 size: je,
 empty: Me,
 each: Ne,
 attr: Be,
 style: Ge,
 property: Xe,
 classed: at,
 text: lt,
 html: pt,
 raise: ht,
 lower: _t,
 append: vt,
 insert: bt,
 remove: St,
 clone: Tt,
 datum: Et,
 on: jt,
 dispatch: Ft,
 [Symbol.iterator]: It
};

function Vt(e) {
 return typeof e == `string` ? new Rt([
  [document.querySelector(e)]
 ], [document.documentElement]) : new Rt([
  [e]
 ], Lt)
}
var Ht = 0;

function Ut() {
 return new Wt
}

function Wt() {
 this._ = `@` + (++Ht).toString(36)
}
Wt.prototype = Ut.prototype = {
 constructor: Wt,
 get: function(e) {
  for (var t = this._; !(t in e);)
   if (!(e = e.parentNode)) return;
  return e[t]
 },
 set: function(e, t) {
  return e[this._] = t
 },
 remove: function(e) {
  return this._ in e && delete e[this._]
 },
 toString: function() {
  return this._
 }
};

function B(e) {
 let t;
 for (; t = e.sourceEvent;) e = t;
 return e
}

function Gt(e, t) {
 if (e = B(e), t === void 0 && (t = e.currentTarget), t) {
  var n = t.ownerSVGElement || t;
  if (n.createSVGPoint) {
   var r = n.createSVGPoint();
   return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
  }
  if (t.getBoundingClientRect) {
   var i = t.getBoundingClientRect();
   return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
  }
 }
 return [e.pageX, e.pageY]
}
var Kt = {
  passive: !1
 },
 qt = {
  capture: !0,
  passive: !1
 };

function Jt(e) {
 e.stopImmediatePropagation()
}

function Yt(e) {
 e.preventDefault(), e.stopImmediatePropagation()
}

function Xt(e) {
 var t = e.document.documentElement,
  n = Vt(e).on(`dragstart.drag`, Yt, qt);
 `onselectstart` in t ? n.on(`selectstart.drag`, Yt, qt) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = `none`)
}

function Zt(e, t) {
 var n = e.document.documentElement,
  r = Vt(e).on(`dragstart.drag`, null);
 t && (r.on(`click.drag`, Yt, qt), setTimeout(function() {
  r.on(`click.drag`, null)
 }, 0)), `onselectstart` in n ? r.on(`selectstart.drag`, null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
}
var Qt = e => () => e;

function $t(e, {
 sourceEvent: t,
 subject: n,
 target: r,
 identifier: i,
 active: a,
 x: o,
 y: s,
 dx: c,
 dy: l,
 dispatch: u
}) {
 Object.defineProperties(this, {
  type: {
   value: e,
   enumerable: !0,
   configurable: !0
  },
  sourceEvent: {
   value: t,
   enumerable: !0,
   configurable: !0
  },
  subject: {
   value: n,
   enumerable: !0,
   configurable: !0
  },
  target: {
   value: r,
   enumerable: !0,
   configurable: !0
  },
  identifier: {
   value: i,
   enumerable: !0,
   configurable: !0
  },
  active: {
   value: a,
   enumerable: !0,
   configurable: !0
  },
  x: {
   value: o,
   enumerable: !0,
   configurable: !0
  },
  y: {
   value: s,
   enumerable: !0,
   configurable: !0
  },
  dx: {
   value: c,
   enumerable: !0,
   configurable: !0
  },
  dy: {
   value: l,
   enumerable: !0,
   configurable: !0
  },
  _: {
   value: u
  }
 })
}
$t.prototype.on = function() {
 var e = this._.on.apply(this._, arguments);
 return e === this._ ? this : e
};

function en(e) {
 return !e.ctrlKey && !e.button
}

function tn() {
 return this.parentNode
}

function nn(e, t) {
 return t ?? {
  x: e.x,
  y: e.y
 }
}

function rn() {
 return navigator.maxTouchPoints || `ontouchstart` in this
}

function an() {
 var e = en,
  t = tn,
  n = nn,
  r = rn,
  i = {},
  a = C(`start`, `drag`, `end`),
  o = 0,
  s, c, l, u, d = 0;

 function f(e) {
  e.on(`mousedown.drag`, p).filter(r).on(`touchstart.drag`, g).on(`touchmove.drag`, _, Kt).on(`touchend.drag touchcancel.drag`, v).style(`touch-action`, `none`).style(`-webkit-tap-highlight-color`, `rgba(0,0,0,0)`)
 }

 function p(n, r) {
  if (!u && e.call(this, n, r)) {
   var i = y(this, t.call(this, n, r), n, r, `mouse`);
   i && (Vt(n.view).on(`mousemove.drag`, m, qt).on(`mouseup.drag`, h, qt), Xt(n.view), Jt(n), l = !1, s = n.clientX, c = n.clientY, i(`start`, n))
  }
 }

 function m(e) {
  if (Yt(e), !l) {
   var t = e.clientX - s,
    n = e.clientY - c;
   l = t * t + n * n > d
  }
  i.mouse(`drag`, e)
 }

 function h(e) {
  Vt(e.view).on(`mousemove.drag mouseup.drag`, null), Zt(e.view, l), Yt(e), i.mouse(`end`, e)
 }

 function g(n, r) {
  if (e.call(this, n, r))
   for (var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s = 0, c; s < o; ++s)(c = y(this, a, n, r, i[s].identifier, i[s])) && (Jt(n), c(`start`, n, i[s]))
 }

 function _(e) {
  for (var t = e.changedTouches, n = t.length, r = 0, a; r < n; ++r)(a = i[t[r].identifier]) && (Yt(e), a(`drag`, e, t[r]))
 }

 function v(e) {
  var t = e.changedTouches,
   n = t.length,
   r, a;
  for (u && clearTimeout(u), u = setTimeout(function() {
    u = null
   }, 500), r = 0; r < n; ++r)(a = i[t[r].identifier]) && (Jt(e), a(`end`, e, t[r]))
 }

 function y(e, t, r, s, c, l) {
  var u = a.copy(),
   d = Gt(l || r, t),
   p, m, h;
  if ((h = n.call(e, new $t(`beforestart`, {
    sourceEvent: r,
    target: f,
    identifier: c,
    active: o,
    x: d[0],
    y: d[1],
    dx: 0,
    dy: 0,
    dispatch: u
   }), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0,
   function n(r, a, l) {
    var g = d,
     _;
    switch (r) {
     case `start`:
      i[c] = n, _ = o++;
      break;
     case `end`:
      delete i[c], --o;
     case `drag`:
      d = Gt(l || a, t), _ = o
    }
    u.call(r, e, new $t(r, {
     sourceEvent: a,
     subject: h,
     target: f,
     identifier: c,
     active: _,
     x: d[0] + p,
     y: d[1] + m,
     dx: d[0] - g[0],
     dy: d[1] - g[1],
     dispatch: u
    }), s)
   }
 }
 return f.filter = function(t) {
  return arguments.length ? (e = typeof t == `function` ? t : Qt(!!t), f) : e
 }, f.container = function(e) {
  return arguments.length ? (t = typeof e == `function` ? e : Qt(e), f) : t
 }, f.subject = function(e) {
  return arguments.length ? (n = typeof e == `function` ? e : Qt(e), f) : n
 }, f.touchable = function(e) {
  return arguments.length ? (r = typeof e == `function` ? e : Qt(!!e), f) : r
 }, f.on = function() {
  var e = a.on.apply(a, arguments);
  return e === a ? f : e
 }, f.clickDistance = function(e) {
  return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d)
 }, f
}

function on(e, t, n) {
 e.prototype = t.prototype = n, n.constructor = e
}

function sn(e, t) {
 var n = Object.create(e.prototype);
 for (var r in t) n[r] = t[r];
 return n
}

function cn() {}
var ln = .7,
 un = 1 / ln,
 dn = `\\s*([+-]?\\d+)\\s*`,
 fn = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
 pn = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
 mn = /^#([0-9a-f]{3,8})$/,
 hn = RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`),
 gn = RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`),
 _n = RegExp(`^rgba\\(${dn},${dn},${dn},${fn}\\)$`),
 vn = RegExp(`^rgba\\(${pn},${pn},${pn},${fn}\\)$`),
 yn = RegExp(`^hsl\\(${fn},${pn},${pn}\\)$`),
 bn = RegExp(`^hsla\\(${fn},${pn},${pn},${fn}\\)$`),
 xn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
 };
on(cn, En, {
 copy(e) {
  return Object.assign(new this.constructor, this, e)
 },
 displayable() {
  return this.rgb().displayable()
 },
 hex: Sn,
 formatHex: Sn,
 formatHex8: Cn,
 formatHsl: wn,
 formatRgb: Tn,
 toString: Tn
});

function Sn() {
 return this.rgb().formatHex()
}

function Cn() {
 return this.rgb().formatHex8()
}

function wn() {
 return zn(this).formatHsl()
}

function Tn() {
 return this.rgb().formatRgb()
}

function En(e) {
 var t, n;
 return e = (e + ``).trim().toLowerCase(), (t = mn.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Dn(t) : n === 3 ? new jn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? On(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? On(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = hn.exec(e)) ? new jn(t[1], t[2], t[3], 1) : (t = gn.exec(e)) ? new jn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _n.exec(e)) ? On(t[1], t[2], t[3], t[4]) : (t = vn.exec(e)) ? On(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yn.exec(e)) ? Rn(t[1], t[2] / 100, t[3] / 100, 1) : (t = bn.exec(e)) ? Rn(t[1], t[2] / 100, t[3] / 100, t[4]) : xn.hasOwnProperty(e) ? Dn(xn[e]) : e === `transparent` ? new jn(NaN, NaN, NaN, 0) : null
}

function Dn(e) {
 return new jn(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function On(e, t, n, r) {
 return r <= 0 && (e = t = n = NaN), new jn(e, t, n, r)
}

function kn(e) {
 return e instanceof cn || (e = En(e)), e ? (e = e.rgb(), new jn(e.r, e.g, e.b, e.opacity)) : new jn
}

function An(e, t, n, r) {
 return arguments.length === 1 ? kn(e) : new jn(e, t, n, r ?? 1)
}

function jn(e, t, n, r) {
 this.r = +e, this.g = +t, this.b = +n, this.opacity = +r
}
on(jn, An, sn(cn, {
 brighter(e) {
  return e = e == null ? un : un ** +e, new jn(this.r * e, this.g * e, this.b * e, this.opacity)
 },
 darker(e) {
  return e = e == null ? ln : ln ** +e, new jn(this.r * e, this.g * e, this.b * e, this.opacity)
 },
 rgb() {
  return this
 },
 clamp() {
  return new jn(In(this.r), In(this.g), In(this.b), Fn(this.opacity))
 },
 displayable() {
  return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
 },
 hex: Mn,
 formatHex: Mn,
 formatHex8: Nn,
 formatRgb: Pn,
 toString: Pn
}));

function Mn() {
 return `#${Ln(this.r)}${Ln(this.g)}${Ln(this.b)}`
}

function Nn() {
 return `#${Ln(this.r)}${Ln(this.g)}${Ln(this.b)}${Ln((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function Pn() {
 let e = Fn(this.opacity);
 return `${e===1?`rgb(`:`rgba(`}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${e===1?`)`:`, ${e})`}`
}

function Fn(e) {
 return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}

function In(e) {
 return Math.max(0, Math.min(255, Math.round(e) || 0))
}

function Ln(e) {
 return e = In(e), (e < 16 ? `0` : ``) + e.toString(16)
}

function Rn(e, t, n, r) {
 return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vn(e, t, n, r)
}

function zn(e) {
 if (e instanceof Vn) return new Vn(e.h, e.s, e.l, e.opacity);
 if (e instanceof cn || (e = En(e)), !e) return new Vn;
 if (e instanceof Vn) return e;
 e = e.rgb();
 var t = e.r / 255,
  n = e.g / 255,
  r = e.b / 255,
  i = Math.min(t, n, r),
  a = Math.max(t, n, r),
  o = NaN,
  s = a - i,
  c = (a + i) / 2;
 return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Vn(o, s, c, e.opacity)
}

function Bn(e, t, n, r) {
 return arguments.length === 1 ? zn(e) : new Vn(e, t, n, r ?? 1)
}

function Vn(e, t, n, r) {
 this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
}
on(Vn, Bn, sn(cn, {
 brighter(e) {
  return e = e == null ? un : un ** +e, new Vn(this.h, this.s, this.l * e, this.opacity)
 },
 darker(e) {
  return e = e == null ? ln : ln ** +e, new Vn(this.h, this.s, this.l * e, this.opacity)
 },
 rgb() {
  var e = this.h % 360 + (this.h < 0) * 360,
   t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
   n = this.l,
   r = n + (n < .5 ? n : 1 - n) * t,
   i = 2 * n - r;
  return new jn(Wn(e >= 240 ? e - 240 : e + 120, i, r), Wn(e, i, r), Wn(e < 120 ? e + 240 : e - 120, i, r), this.opacity)
 },
 clamp() {
  return new Vn(Hn(this.h), Un(this.s), Un(this.l), Fn(this.opacity))
 },
 displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
 },
 formatHsl() {
  let e = Fn(this.opacity);
  return `${e===1?`hsl(`:`hsla(`}${Hn(this.h)}, ${Un(this.s)*100}%, ${Un(this.l)*100}%${e===1?`)`:`, ${e})`}`
 }
}));

function Hn(e) {
 return e = (e || 0) % 360, e < 0 ? e + 360 : e
}

function Un(e) {
 return Math.max(0, Math.min(1, e || 0))
}

function Wn(e, t, n) {
 return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255
}
var Gn = Math.PI / 180,
 Kn = 180 / Math.PI,
 qn = 18,
 Jn = .96422,
 Yn = 1,
 Xn = .82521,
 Zn = 4 / 29,
 Qn = 6 / 29,
 $n = 3 * Qn * Qn,
 er = Qn * Qn * Qn;

function tr(e) {
 if (e instanceof rr) return new rr(e.l, e.a, e.b, e.opacity);
 if (e instanceof ur) return dr(e);
 e instanceof jn || (e = kn(e));
 var t = sr(e.r),
  n = sr(e.g),
  r = sr(e.b),
  i = ir((.2225045 * t + .7168786 * n + .0606169 * r) / Yn),
  a, o;
 return t === n && n === r ? a = o = i : (a = ir((.4360747 * t + .3850649 * n + .1430804 * r) / Jn), o = ir((.0139322 * t + .0971045 * n + .7141733 * r) / Xn)), new rr(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity)
}

function nr(e, t, n, r) {
 return arguments.length === 1 ? tr(e) : new rr(e, t, n, r ?? 1)
}

function rr(e, t, n, r) {
 this.l = +e, this.a = +t, this.b = +n, this.opacity = +r
}
on(rr, nr, sn(cn, {
 brighter(e) {
  return new rr(this.l + qn * (e ?? 1), this.a, this.b, this.opacity)
 },
 darker(e) {
  return new rr(this.l - qn * (e ?? 1), this.a, this.b, this.opacity)
 },
 rgb() {
  var e = (this.l + 16) / 116,
   t = isNaN(this.a) ? e : e + this.a / 500,
   n = isNaN(this.b) ? e : e - this.b / 200;
  return t = Jn * ar(t), e = Yn * ar(e), n = Xn * ar(n), new jn(or(3.1338561 * t - 1.6168667 * e - .4906146 * n), or(-.9787684 * t + 1.9161415 * e + .033454 * n), or(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity)
 }
}));

function ir(e) {
 return e > er ? e ** (1 / 3) : e / $n + Zn
}

function ar(e) {
 return e > Qn ? e * e * e : $n * (e - Zn)
}

function or(e) {
 return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055)
}

function sr(e) {
 return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
}

function cr(e) {
 if (e instanceof ur) return new ur(e.h, e.c, e.l, e.opacity);
 if (e instanceof rr || (e = tr(e)), e.a === 0 && e.b === 0) return new ur(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
 var t = Math.atan2(e.b, e.a) * Kn;
 return new ur(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity)
}

function lr(e, t, n, r) {
 return arguments.length === 1 ? cr(e) : new ur(e, t, n, r ?? 1)
}

function ur(e, t, n, r) {
 this.h = +e, this.c = +t, this.l = +n, this.opacity = +r
}

function dr(e) {
 if (isNaN(e.h)) return new rr(e.l, 0, 0, e.opacity);
 var t = e.h * Gn;
 return new rr(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity)
}
on(ur, lr, sn(cn, {
 brighter(e) {
  return new ur(this.h, this.c, this.l + qn * (e ?? 1), this.opacity)
 },
 darker(e) {
  return new ur(this.h, this.c, this.l - qn * (e ?? 1), this.opacity)
 },
 rgb() {
  return dr(this).rgb()
 }
}));
var fr = -.14861,
 pr = 1.78277,
 mr = -.29227,
 hr = -.90649,
 gr = 1.97294,
 _r = gr * hr,
 vr = gr * pr,
 yr = pr * mr - hr * fr;

function br(e) {
 if (e instanceof Sr) return new Sr(e.h, e.s, e.l, e.opacity);
 e instanceof jn || (e = kn(e));
 var t = e.r / 255,
  n = e.g / 255,
  r = e.b / 255,
  i = (yr * r + _r * t - vr * n) / (yr + _r - vr),
  a = r - i,
  o = (gr * (n - i) - mr * a) / hr,
  s = Math.sqrt(o * o + a * a) / (gr * i * (1 - i)),
  c = s ? Math.atan2(o, a) * Kn - 120 : NaN;
 return new Sr(c < 0 ? c + 360 : c, s, i, e.opacity)
}

function xr(e, t, n, r) {
 return arguments.length === 1 ? br(e) : new Sr(e, t, n, r ?? 1)
}

function Sr(e, t, n, r) {
 this.h = +e, this.s = +t, this.l = +n, this.opacity = +r
}
on(Sr, xr, sn(cn, {
 brighter(e) {
  return e = e == null ? un : un ** +e, new Sr(this.h, this.s, this.l * e, this.opacity)
 },
 darker(e) {
  return e = e == null ? ln : ln ** +e, new Sr(this.h, this.s, this.l * e, this.opacity)
 },
 rgb() {
  var e = isNaN(this.h) ? 0 : (this.h + 120) * Gn,
   t = +this.l,
   n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
   r = Math.cos(e),
   i = Math.sin(e);
  return new jn(255 * (t + n * (fr * r + pr * i)), 255 * (t + n * (mr * r + hr * i)), 255 * (t + gr * r * n), this.opacity)
 }
}));
var Cr = e => () => e;

function wr(e, t) {
 return function(n) {
  return e + n * t
 }
}

function Tr(e, t, n) {
 return e **= +n, t = t ** +n - e, n = 1 / n,
  function(r) {
   return (e + r * t) ** +n
  }
}

function Er(e, t) {
 var n = t - e;
 return n ? wr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Cr(isNaN(e) ? t : e)
}

function Dr(e) {
 return (e = +e) == 1 ? Or : function(t, n) {
  return n - t ? Tr(t, n, e) : Cr(isNaN(t) ? n : t)
 }
}

function Or(e, t) {
 var n = t - e;
 return n ? wr(e, n) : Cr(isNaN(e) ? t : e)
}
var kr = (function e(t) {
 var n = Dr(t);

 function r(e, t) {
  var r = n((e = An(e)).r, (t = An(t)).r),
   i = n(e.g, t.g),
   a = n(e.b, t.b),
   o = Or(e.opacity, t.opacity);
  return function(t) {
   return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + ``
  }
 }
 return r.gamma = e, r
})(1);

function Ar(e, t) {
 t || (t = []);
 var n = e ? Math.min(t.length, e.length) : 0,
  r = t.slice(),
  i;
 return function(a) {
  for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
  return r
 }
}

function jr(e) {
 return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function Mr(e, t) {
 for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = Vr(e[o], t[o]);
 for (; o < n; ++o) a[o] = t[o];
 return function(e) {
  for (o = 0; o < r; ++o) a[o] = i[o](e);
  return a
 }
}

function Nr(e, t) {
 var n = new Date;
 return e = +e, t = +t,
  function(r) {
   return n.setTime(e * (1 - r) + t * r), n
  }
}

function Pr(e, t) {
 return e = +e, t = +t,
  function(n) {
   return e * (1 - n) + t * n
  }
}

function Fr(e, t) {
 var n = {},
  r = {},
  i;
 for (i in typeof e == `object` && e || (e = {}), typeof t == `object` && t || (t = {}), t) i in e ? n[i] = Vr(e[i], t[i]) : r[i] = t[i];
 return function(e) {
  for (i in n) r[i] = n[i](e);
  return r
 }
}
var Ir = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
 Lr = new RegExp(Ir.source, `g`);

function Rr(e) {
 return function() {
  return e
 }
}

function zr(e) {
 return function(t) {
  return e(t) + ``
 }
}

function Br(e, t) {
 var n = Ir.lastIndex = Lr.lastIndex = 0,
  r, i, a, o = -1,
  s = [],
  c = [];
 for (e += ``, t += ``;
  (r = Ir.exec(e)) && (i = Lr.exec(t));)(a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
  i: o,
  x: Pr(r, i)
 })), n = Lr.lastIndex;
 return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? zr(c[0].x) : Rr(t) : (t = c.length, function(e) {
  for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
  return s.join(``)
 })
}

function Vr(e, t) {
 var n = typeof t,
  r;
 return t == null || n === `boolean` ? Cr(t) : (n === `number` ? Pr : n === `string` ? (r = En(t)) ? (t = r, kr) : Br : t instanceof En ? kr : t instanceof Date ? Nr : jr(t) ? Ar : Array.isArray(t) ? Mr : typeof t.valueOf != `function` && typeof t.toString != `function` || isNaN(t) ? Fr : Pr)(e, t)
}
var Hr = 180 / Math.PI,
 Ur = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
 };

function Wr(e, t, n, r, i, a) {
 var o, s, c;
 return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
  translateX: i,
  translateY: a,
  rotate: Math.atan2(t, e) * Hr,
  skewX: Math.atan(c) * Hr,
  scaleX: o,
  scaleY: s
 }
}
var Gr;

function Kr(e) {
 let t = new(typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(e + ``);
 return t.isIdentity ? Ur : Wr(t.a, t.b, t.c, t.d, t.e, t.f)
}

function qr(e) {
 return e == null || (Gr || (Gr = document.createElementNS(`http://www.w3.org/2000/svg`, `g`)), Gr.setAttribute(`transform`, e), !(e = Gr.transform.baseVal.consolidate())) ? Ur : (e = e.matrix, Wr(e.a, e.b, e.c, e.d, e.e, e.f))
}

function Jr(e, t, n, r) {
 function i(e) {
  return e.length ? e.pop() + ` ` : ``
 }

 function a(e, r, i, a, o, s) {
  if (e !== i || r !== a) {
   var c = o.push(`translate(`, null, t, null, n);
   s.push({
    i: c - 4,
    x: Pr(e, i)
   }, {
    i: c - 2,
    x: Pr(r, a)
   })
  } else(i || a) && o.push(`translate(` + i + t + a + n)
 }

 function o(e, t, n, a) {
  e === t ? t && n.push(i(n) + `rotate(` + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
   i: n.push(i(n) + `rotate(`, null, r) - 2,
   x: Pr(e, t)
  }))
 }

 function s(e, t, n, a) {
  e === t ? t && n.push(i(n) + `skewX(` + t + r) : a.push({
   i: n.push(i(n) + `skewX(`, null, r) - 2,
   x: Pr(e, t)
  })
 }

 function c(e, t, n, r, a, o) {
  if (e !== n || t !== r) {
   var s = a.push(i(a) + `scale(`, null, `,`, null, `)`);
   o.push({
    i: s - 4,
    x: Pr(e, n)
   }, {
    i: s - 2,
    x: Pr(t, r)
   })
  } else(n !== 1 || r !== 1) && a.push(i(a) + `scale(` + n + `,` + r + `)`)
 }
 return function(t, n) {
  var r = [],
   i = [];
  return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null,
   function(e) {
    for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
    return r.join(``)
   }
 }
}
var Yr = Jr(Kr, `px, `, `px)`, `deg)`),
 Xr = Jr(qr, `, `, `)`, `)`),
 Zr = 1e-12;

function Qr(e) {
 return ((e = Math.exp(e)) + 1 / e) / 2
}

function $r(e) {
 return ((e = Math.exp(e)) - 1 / e) / 2
}

function ei(e) {
 return ((e = Math.exp(2 * e)) - 1) / (e + 1)
}
var ti = (function e(t, n, r) {
 function i(e, i) {
  var a = e[0],
   o = e[1],
   s = e[2],
   c = i[0],
   l = i[1],
   u = i[2],
   d = c - a,
   f = l - o,
   p = d * d + f * f,
   m, h;
  if (p < Zr) h = Math.log(u / s) / t, m = function(e) {
   return [a + e * d, o + e * f, s * Math.exp(t * e * h)]
  };
  else {
   var g = Math.sqrt(p),
    _ = (u * u - s * s + r * p) / (2 * s * n * g),
    v = (u * u - s * s - r * p) / (2 * u * n * g),
    y = Math.log(Math.sqrt(_ * _ + 1) - _);
   h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
    var r = e * h,
     i = Qr(y),
     c = s / (n * g) * (i * ei(t * r + y) - $r(y));
    return [a + c * d, o + c * f, s * i / Qr(t * r + y)]
   }
  }
  return m.duration = Math.abs(h) * 1e3 * t / Math.SQRT2, m
 }
 return i.rho = function(t) {
  var n = Math.max(.001, +t),
   r = n * n;
  return e(n, r, r * r)
 }, i
})(Math.SQRT2, 2, 4);

function ni(e) {
 return (function t(n) {
  n = +n;

  function r(t, r) {
   var i = e((t = xr(t)).h, (r = xr(r)).h),
    a = Or(t.s, r.s),
    o = Or(t.l, r.l),
    s = Or(t.opacity, r.opacity);
   return function(e) {
    return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + ``
   }
  }
  return r.gamma = t, r
 })(1)
}
ni(Er), ni(Or);
var ri = 0,
 ii = 0,
 ai = 0,
 oi = 1e3,
 si, ci, li = 0,
 ui = 0,
 di = 0,
 fi = typeof performance == `object` && performance.now ? performance : Date,
 pi = typeof window == `object` && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17)
 };

function mi() {
 return ui || (pi(hi), ui = fi.now() + di)
}

function hi() {
 ui = 0
}

function gi() {
 this._call = this._time = this._next = null
}
gi.prototype = _i.prototype = {
 constructor: gi,
 restart: function(e, t, n) {
  if (typeof e != `function`) throw TypeError(`callback is not a function`);
  n = (n == null ? mi() : +n) + (t == null ? 0 : +t), !this._next && ci !== this && (ci ? ci._next = this : si = this, ci = this), this._call = e, this._time = n, Si()
 },
 stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, Si())
 }
};

function _i(e, t, n) {
 var r = new gi;
 return r.restart(e, t, n), r
}

function vi() {
 mi(), ++ri;
 for (var e = si, t; e;)(t = ui - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
 --ri
}

function yi() {
 ui = (li = fi.now()) + di, ri = ii = 0;
 try {
  vi()
 } finally {
  ri = 0, xi(), ui = 0
 }
}

function bi() {
 var e = fi.now(),
  t = e - li;
 t > oi && (di -= t, li = e)
}

function xi() {
 for (var e, t = si, n, r = 1 / 0; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : si = n);
 ci = e, Si(r)
}

function Si(e) {
 ri || (ii && (ii = clearTimeout(ii)), e - ui > 24 ? (e < 1 / 0 && (ii = setTimeout(yi, Math.ceil(e - fi.now() - di) + 1)), ai && (ai = clearInterval(ai))) : (ai || (li = fi.now(), ai = setInterval(bi, oi)), ri = 1, pi(yi)))
}

function Ci(e, t, n) {
 var r = new gi;
 return t = t == null ? 0 : +t, r.restart(n => {
  r.stop(), e(n + t)
 }, t, n), r
}

function wi(e) {
 return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
}
var Ti = 3;
(function e(t) {
 t = +t;

 function n(e) {
  return e ** +t
 }
 return n.exponent = e, n
})(Ti), (function e(t) {
 t = +t;

 function n(e) {
  return 1 - (1 - e) ** t
 }
 return n.exponent = e, n
})(Ti), (function e(t) {
 t = +t;

 function n(e) {
  return ((e *= 2) <= 1 ? e ** +t : 2 - (2 - e) ** t) / 2
 }
 return n.exponent = e, n
})(Ti);

function Ei(e) {
 return (2 ** (-10 * e) - .0009765625) * 1.0009775171065494
}
var Di = 4 / 11;
1 / Di / Di;
var Oi = 1.70158;
(function e(t) {
 t = +t;

 function n(e) {
  return (e = +e) * e * (t * (e - 1) + e)
 }
 return n.overshoot = e, n
})(Oi), (function e(t) {
 t = +t;

 function n(e) {
  return --e * e * ((e + 1) * t + e) + 1
 }
 return n.overshoot = e, n
})(Oi), (function e(t) {
 t = +t;

 function n(e) {
  return ((e *= 2) < 1 ? e * e * ((t + 1) * e - t) : (e -= 2) * e * ((t + 1) * e + t) + 2) / 2
 }
 return n.overshoot = e, n
})(Oi);
var ki = 2 * Math.PI,
 Ai = 1,
 ji = .3;
(function e(t, n) {
 var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= ki);

 function i(e) {
  return t * Ei(- --e) * Math.sin((r - e) / n)
 }
 return i.amplitude = function(t) {
  return e(t, n * ki)
 }, i.period = function(n) {
  return e(t, n)
 }, i
})(Ai, ji), (function e(t, n) {
 var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= ki);

 function i(e) {
  return 1 - t * Ei(e = +e) * Math.sin((e + r) / n)
 }
 return i.amplitude = function(t) {
  return e(t, n * ki)
 }, i.period = function(n) {
  return e(t, n)
 }, i
})(Ai, ji), (function e(t, n) {
 var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= ki);

 function i(e) {
  return ((e = e * 2 - 1) < 0 ? t * Ei(-e) * Math.sin((r - e) / n) : 2 - t * Ei(e) * Math.sin((r + e) / n)) / 2
 }
 return i.amplitude = function(t) {
  return e(t, n * ki)
 }, i.period = function(n) {
  return e(t, n)
 }, i
})(Ai, ji);
var Mi = C(`start`, `end`, `cancel`, `interrupt`),
 Ni = [],
 Pi = 0,
 Fi = 1,
 Ii = 2,
 Li = 3,
 Ri = 4,
 zi = 5,
 Bi = 6;

function Vi(e, t, n, r, i, a) {
 var o = e.__transition;
 if (!o) e.__transition = {};
 else if (n in o) return;
 Gi(e, n, {
  name: t,
  index: r,
  group: i,
  on: Mi,
  tween: Ni,
  time: a.time,
  delay: a.delay,
  duration: a.duration,
  ease: a.ease,
  timer: null,
  state: Pi
 })
}

function Hi(e, t) {
 var n = Wi(e, t);
 if (n.state > Pi) throw Error(`too late; already scheduled`);
 return n
}

function Ui(e, t) {
 var n = Wi(e, t);
 if (n.state > Li) throw Error(`too late; already running`);
 return n
}

function Wi(e, t) {
 var n = e.__transition;
 if (!n || !(n = n[t])) throw Error(`transition not found`);
 return n
}

function Gi(e, t, n) {
 var r = e.__transition,
  i;
 r[t] = n, n.timer = _i(a, 0, n.time);

 function a(e) {
  n.state = Fi, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay)
 }

 function o(a) {
  var l, u, d, f;
  if (n.state !== Fi) return c();
  for (l in r)
   if (f = r[l], f.name === n.name) {
    if (f.state === Li) return Ci(o);
    f.state === Ri ? (f.state = Bi, f.timer.stop(), f.on.call(`interrupt`, e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = Bi, f.timer.stop(), f.on.call(`cancel`, e, e.__data__, f.index, f.group), delete r[l])
   } if (Ci(function() {
    n.state === Li && (n.state = Ri, n.timer.restart(s, n.delay, n.time), s(a))
   }), n.state = Ii, n.on.call(`start`, e, e.__data__, n.index, n.group), n.state === Ii) {
   for (n.state = Li, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l)(f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
   i.length = u + 1
  }
 }

 function s(t) {
  for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = zi, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
  n.state === zi && (n.on.call(`end`, e, e.__data__, n.index, n.group), c())
 }

 function c() {
  for (var i in n.state = Bi, n.timer.stop(), delete r[t], r) return;
  delete e.__transition
 }
}

function Ki(e, t) {
 var n = e.__transition,
  r, i, a = !0,
  o;
 if (n) {
  for (o in t = t == null ? null : t + ``, n)(r = n[o]).name === t ? (i = r.state > Ii && r.state < zi, r.state = Bi, r.timer.stop(), r.on.call(i ? `interrupt` : `cancel`, e, e.__data__, r.index, r.group), delete n[o]) : a = !1;
  a && delete e.__transition
 }
}

function qi(e) {
 return this.each(function() {
  Ki(this, e)
 })
}

function Ji(e, t) {
 var n, r;
 return function() {
  var i = Ui(this, e),
   a = i.tween;
  if (a !== n) {
   r = n = a;
   for (var o = 0, s = r.length; o < s; ++o)
    if (r[o].name === t) {
     r = r.slice(), r.splice(o, 1);
     break
    }
  }
  i.tween = r
 }
}

function Yi(e, t, n) {
 var r, i;
 if (typeof n != `function`) throw Error();
 return function() {
  var a = Ui(this, e),
   o = a.tween;
  if (o !== r) {
   i = (r = o).slice();
   for (var s = {
     name: t,
     value: n
    }, c = 0, l = i.length; c < l; ++c)
    if (i[c].name === t) {
     i[c] = s;
     break
    } c === l && i.push(s)
  }
  a.tween = i
 }
}

function Xi(e, t) {
 var n = this._id;
 if (e += ``, arguments.length < 2) {
  for (var r = Wi(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
   if ((o = r[i]).name === e) return o.value;
  return null
 }
 return this.each((t == null ? Ji : Yi)(n, e, t))
}

function Zi(e, t, n) {
 var r = e._id;
 return e.each(function() {
   var e = Ui(this, r);
   (e.value || (e.value = {}))[t] = n.apply(this, arguments)
  }),
  function(e) {
   return Wi(e, r).value[t]
  }
}

function Qi(e, t) {
 var n;
 return (typeof t == `number` ? Pr : t instanceof En ? kr : (n = En(t)) ? (t = n, kr) : Br)(e, t)
}

function $i(e) {
 return function() {
  this.removeAttribute(e)
 }
}

function ea(e) {
 return function() {
  this.removeAttributeNS(e.space, e.local)
 }
}

function ta(e, t, n) {
 var r, i = n + ``,
  a;
 return function() {
  var o = this.getAttribute(e);
  return o === i ? null : o === r ? a : a = t(r = o, n)
 }
}

function na(e, t, n) {
 var r, i = n + ``,
  a;
 return function() {
  var o = this.getAttributeNS(e.space, e.local);
  return o === i ? null : o === r ? a : a = t(r = o, n)
 }
}

function ra(e, t, n) {
 var r, i, a;
 return function() {
  var o, s = n(this),
   c;
  return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + ``, o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)))
 }
}

function V(e, t, n) {
 var r, i, a;
 return function() {
  var o, s = n(this),
   c;
  return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + ``, o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)))
 }
}

function ia(e, t) {
 var n = A(e),
  r = n === `transform` ? Xr : Qi;
 return this.attrTween(e, typeof t == `function` ? (n.local ? V : ra)(n, r, Zi(this, `attr.` + e, t)) : t == null ? (n.local ? ea : $i)(n) : (n.local ? na : ta)(n, r, t))
}

function aa(e, t) {
 return function(n) {
  this.setAttribute(e, t.call(this, n))
 }
}

function oa(e, t) {
 return function(n) {
  this.setAttributeNS(e.space, e.local, t.call(this, n))
 }
}

function sa(e, t) {
 var n, r;

 function i() {
  var i = t.apply(this, arguments);
  return i !== r && (n = (r = i) && oa(e, i)), n
 }
 return i._value = t, i
}

function ca(e, t) {
 var n, r;

 function i() {
  var i = t.apply(this, arguments);
  return i !== r && (n = (r = i) && aa(e, i)), n
 }
 return i._value = t, i
}

function la(e, t) {
 var n = `attr.` + e;
 if (arguments.length < 2) return (n = this.tween(n)) && n._value;
 if (t == null) return this.tween(n, null);
 if (typeof t != `function`) throw Error();
 var r = A(e);
 return this.tween(n, (r.local ? sa : ca)(r, t))
}

function ua(e, t) {
 return function() {
  Hi(this, e).delay = +t.apply(this, arguments)
 }
}

function da(e, t) {
 return t = +t,
  function() {
   Hi(this, e).delay = t
  }
}

function fa(e) {
 var t = this._id;
 return arguments.length ? this.each((typeof e == `function` ? ua : da)(t, e)) : Wi(this.node(), t).delay
}

function pa(e, t) {
 return function() {
  Ui(this, e).duration = +t.apply(this, arguments)
 }
}

function ma(e, t) {
 return t = +t,
  function() {
   Ui(this, e).duration = t
  }
}

function ha(e) {
 var t = this._id;
 return arguments.length ? this.each((typeof e == `function` ? pa : ma)(t, e)) : Wi(this.node(), t).duration
}

function ga(e, t) {
 if (typeof t != `function`) throw Error();
 return function() {
  Ui(this, e).ease = t
 }
}

function _a(e) {
 var t = this._id;
 return arguments.length ? this.each(ga(t, e)) : Wi(this.node(), t).ease
}

function va(e, t) {
 return function() {
  var n = t.apply(this, arguments);
  if (typeof n != `function`) throw Error();
  Ui(this, e).ease = n
 }
}

function ya(e) {
 if (typeof e != `function`) throw Error();
 return this.each(va(this._id, e))
}

function ba(e) {
 typeof e != `function` && (e = L(e));
 for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i)
  for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l)(c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
 return new Ya(r, this._parents, this._name, this._id)
}

function xa(e) {
 if (e._id !== this._id) throw Error();
 for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s)
  for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p)(f = c[p] || l[p]) && (d[p] = f);
 for (; s < r; ++s) o[s] = t[s];
 return new Ya(o, this._parents, this._name, this._id)
}

function Sa(e) {
 return (e + ``).trim().split(/^|\s+/).every(function(e) {
  var t = e.indexOf(`.`);
  return t >= 0 && (e = e.slice(0, t)), !e || e === `start`
 })
}

function Ca(e, t, n) {
 var r, i, a = Sa(t) ? Hi : Ui;
 return function() {
  var o = a(this, e),
   s = o.on;
  s !== r && (i = (r = s).copy()).on(t, n), o.on = i
 }
}

function wa(e, t) {
 var n = this._id;
 return arguments.length < 2 ? Wi(this.node(), n).on.on(e) : this.each(Ca(n, e, t))
}

function Ta(e) {
 return function() {
  var t = this.parentNode;
  for (var n in this.__transition)
   if (+n !== e) return;
  t && t.removeChild(this)
 }
}

function Ea() {
 return this.on(`end.remove`, Ta(this._id))
}

function Da(e) {
 var t = this._name,
  n = this._id;
 typeof e != `function` && (e = F(e));
 for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o)
  for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f)(u = s[f]) && (d = e.call(u, u.__data__, f, s)) && (`__data__` in u && (d.__data__ = u.__data__), l[f] = d, Vi(l[f], t, n, f, l, Wi(u, n)));
 return new Ya(a, this._parents, t, n)
}

function Oa(e) {
 var t = this._name,
  n = this._id;
 typeof e != `function` && (e = re(e));
 for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
  for (var c = r[s], l = c.length, u, d = 0; d < l; ++d)
   if (u = c[d]) {
    for (var f = e.call(u, u.__data__, d, c), p, m = Wi(u, n), h = 0, g = f.length; h < g; ++h)(p = f[h]) && Vi(p, t, n, h, f, m);
    a.push(f), o.push(u)
   } return new Ya(a, o, t, n)
}
var ka = zt.prototype.constructor;

function Aa() {
 return new ka(this._groups, this._parents)
}

function ja(e, t) {
 var n, r, i;
 return function() {
  var a = Ke(this, e),
   o = (this.style.removeProperty(e), Ke(this, e));
  return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o)
 }
}

function Ma(e) {
 return function() {
  this.style.removeProperty(e)
 }
}

function Na(e, t, n) {
 var r, i = n + ``,
  a;
 return function() {
  var o = Ke(this, e);
  return o === i ? null : o === r ? a : a = t(r = o, n)
 }
}

function Pa(e, t, n) {
 var r, i, a;
 return function() {
  var o = Ke(this, e),
   s = n(this),
   c = s + ``;
  return s ?? (c = s = (this.style.removeProperty(e), Ke(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s))
 }
}

function Fa(e, t) {
 var n, r, i, a = `style.` + t,
  o = `end.` + a,
  s;
 return function() {
  var c = Ui(this, e),
   l = c.on,
   u = c.value[a] == null ? s || (s = Ma(t)) : void 0;
  (l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r
 }
}

function Ia(e, t, n) {
 var r = (e += ``) == `transform` ? Yr : Qi;
 return t == null ? this.styleTween(e, ja(e, r)).on(`end.style.` + e, Ma(e)) : typeof t == `function` ? this.styleTween(e, Pa(e, r, Zi(this, `style.` + e, t))).each(Fa(this._id, e)) : this.styleTween(e, Na(e, r, t), n).on(`end.style.` + e, null)
}

function La(e, t, n) {
 return function(r) {
  this.style.setProperty(e, t.call(this, r), n)
 }
}

function Ra(e, t, n) {
 var r, i;

 function a() {
  var a = t.apply(this, arguments);
  return a !== i && (r = (i = a) && La(e, a, n)), r
 }
 return a._value = t, a
}

function za(e, t, n) {
 var r = `style.` + (e += ``);
 if (arguments.length < 2) return (r = this.tween(r)) && r._value;
 if (t == null) return this.tween(r, null);
 if (typeof t != `function`) throw Error();
 return this.tween(r, Ra(e, t, n ?? ``))
}

function Ba(e) {
 return function() {
  this.textContent = e
 }
}

function Va(e) {
 return function() {
  var t = e(this);
  this.textContent = t ?? ``
 }
}

function Ha(e) {
 return this.tween(`text`, typeof e == `function` ? Va(Zi(this, `text`, e)) : Ba(e == null ? `` : e + ``))
}

function Ua(e) {
 return function(t) {
  this.textContent = e.call(this, t)
 }
}

function Wa(e) {
 var t, n;

 function r() {
  var r = e.apply(this, arguments);
  return r !== n && (t = (n = r) && Ua(r)), t
 }
 return r._value = e, r
}

function Ga(e) {
 var t = `text`;
 if (arguments.length < 1) return (t = this.tween(t)) && t._value;
 if (e == null) return this.tween(t, null);
 if (typeof e != `function`) throw Error();
 return this.tween(t, Wa(e))
}

function Ka() {
 for (var e = this._name, t = this._id, n = Xa(), r = this._groups, i = r.length, a = 0; a < i; ++a)
  for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)
   if (c = o[l]) {
    var u = Wi(c, t);
    Vi(c, e, n, l, o, {
     time: u.time + u.delay + u.duration,
     delay: 0,
     duration: u.duration,
     ease: u.ease
    })
   } return new Ya(r, this._parents, e, n)
}

function qa() {
 var e, t, n = this,
  r = n._id,
  i = n.size();
 return new Promise(function(a, o) {
  var s = {
    value: o
   },
   c = {
    value: function() {
     --i === 0 && a()
    }
   };
  n.each(function() {
   var n = Ui(this, r),
    i = n.on;
   i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t
  }), i === 0 && a()
 })
}
var Ja = 0;

function Ya(e, t, n, r) {
 this._groups = e, this._parents = t, this._name = n, this._id = r
}

function Xa() {
 return ++Ja
}
var Za = zt.prototype;
Ya.prototype = {
 constructor: Ya,
 select: Da,
 selectAll: Oa,
 selectChild: Za.selectChild,
 selectChildren: Za.selectChildren,
 filter: ba,
 merge: xa,
 selection: Aa,
 transition: Ka,
 call: Za.call,
 nodes: Za.nodes,
 node: Za.node,
 size: Za.size,
 empty: Za.empty,
 each: Za.each,
 on: wa,
 attr: ia,
 attrTween: la,
 style: Ia,
 styleTween: za,
 text: Ha,
 textTween: Ga,
 remove: Ea,
 tween: Xi,
 delay: fa,
 duration: ha,
 ease: _a,
 easeVarying: ya,
 end: qa,
 [Symbol.iterator]: Za[Symbol.iterator]
};
var Qa = {
 time: null,
 delay: 0,
 duration: 250,
 ease: wi
};

function $a(e, t) {
 for (var n; !(n = e.__transition) || !(n = n[t]);)
  if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
 return n
}

function eo(e) {
 var t, n;
 e instanceof Ya ? (t = e._id, e = e._name) : (t = Xa(), (n = Qa).time = mi(), e = e == null ? null : e + ``);
 for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
  for (var o = r[a], s = o.length, c, l = 0; l < s; ++l)(c = o[l]) && Vi(c, e, t, l, o, n || $a(c, t));
 return new Ya(r, this._parents, e, t)
}
zt.prototype.interrupt = qi, zt.prototype.transition = eo;
var to = e => () => e;

function no(e, {
 sourceEvent: t,
 target: n,
 transform: r,
 dispatch: i
}) {
 Object.defineProperties(this, {
  type: {
   value: e,
   enumerable: !0,
   configurable: !0
  },
  sourceEvent: {
   value: t,
   enumerable: !0,
   configurable: !0
  },
  target: {
   value: n,
   enumerable: !0,
   configurable: !0
  },
  transform: {
   value: r,
   enumerable: !0,
   configurable: !0
  },
  _: {
   value: i
  }
 })
}

function ro(e, t, n) {
 this.k = e, this.x = t, this.y = n
}
ro.prototype = {
 constructor: ro,
 scale: function(e) {
  return e === 1 ? this : new ro(this.k * e, this.x, this.y)
 },
 translate: function(e, t) {
  return e === 0 & t === 0 ? this : new ro(this.k, this.x + this.k * e, this.y + this.k * t)
 },
 apply: function(e) {
  return [e[0] * this.k + this.x, e[1] * this.k + this.y]
 },
 applyX: function(e) {
  return e * this.k + this.x
 },
 applyY: function(e) {
  return e * this.k + this.y
 },
 invert: function(e) {
  return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
 },
 invertX: function(e) {
  return (e - this.x) / this.k
 },
 invertY: function(e) {
  return (e - this.y) / this.k
 },
 rescaleX: function(e) {
  return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
 },
 rescaleY: function(e) {
  return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
 },
 toString: function() {
  return `translate(` + this.x + `,` + this.y + `) scale(` + this.k + `)`
 }
};
var io = new ro(1, 0, 0);
ao.prototype = ro.prototype;

function ao(e) {
 for (; !e.__zoom;)
  if (!(e = e.parentNode)) return io;
 return e.__zoom
}

function oo(e) {
 e.stopImmediatePropagation()
}

function so(e) {
 e.preventDefault(), e.stopImmediatePropagation()
}

function co(e) {
 return (!e.ctrlKey || e.type === `wheel`) && !e.button
}

function lo() {
 var e = this;
 return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute(`viewBox`) ? (e = e.viewBox.baseVal, [
  [e.x, e.y],
  [e.x + e.width, e.y + e.height]
 ]) : [
  [0, 0],
  [e.width.baseVal.value, e.height.baseVal.value]
 ]) : [
  [0, 0],
  [e.clientWidth, e.clientHeight]
 ]
}

function uo() {
 return this.__zoom || io
}

function fo(e) {
 return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1)
}

function po() {
 return navigator.maxTouchPoints || `ontouchstart` in this
}

function mo(e, t, n) {
 var r = e.invertX(t[0][0]) - n[0][0],
  i = e.invertX(t[1][0]) - n[1][0],
  a = e.invertY(t[0][1]) - n[0][1],
  o = e.invertY(t[1][1]) - n[1][1];
 return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o))
}

function ho() {
 var e = co,
  t = lo,
  n = mo,
  r = fo,
  i = po,
  a = [0, 1 / 0],
  o = [
   [-1 / 0, -1 / 0],
   [1 / 0, 1 / 0]
  ],
  s = 250,
  c = ti,
  l = C(`start`, `zoom`, `end`),
  u, d, f, p = 500,
  m = 150,
  h = 0,
  g = 10;

 function _(e) {
  e.property(`__zoom`, uo).on(`wheel.zoom`, T, {
   passive: !1
  }).on(`mousedown.zoom`, E).on(`dblclick.zoom`, D).filter(i).on(`touchstart.zoom`, O).on(`touchmove.zoom`, k).on(`touchend.zoom touchcancel.zoom`, A).style(`-webkit-tap-highlight-color`, `rgba(0,0,0,0)`)
 }
 _.transform = function(e, t, n, r) {
  var i = e.selection ? e.selection() : e;
  i.property(`__zoom`, uo), e === i ? i.interrupt().each(function() {
   S(this, arguments).event(r).start().zoom(null, typeof t == `function` ? t.apply(this, arguments) : t).end()
  }) : x(e, t, n, r)
 }, _.scaleBy = function(e, t, n, r) {
  _.scaleTo(e, function() {
   return this.__zoom.k * (typeof t == `function` ? t.apply(this, arguments) : t)
  }, n, r)
 }, _.scaleTo = function(e, r, i, a) {
  _.transform(e, function() {
   var e = t.apply(this, arguments),
    a = this.__zoom,
    s = i == null ? b(e) : typeof i == `function` ? i.apply(this, arguments) : i,
    c = a.invert(s),
    l = typeof r == `function` ? r.apply(this, arguments) : r;
   return n(y(v(a, l), s, c), e, o)
  }, i, a)
 }, _.translateBy = function(e, r, i, a) {
  _.transform(e, function() {
   return n(this.__zoom.translate(typeof r == `function` ? r.apply(this, arguments) : r, typeof i == `function` ? i.apply(this, arguments) : i), t.apply(this, arguments), o)
  }, null, a)
 }, _.translateTo = function(e, r, i, a, s) {
  _.transform(e, function() {
   var e = t.apply(this, arguments),
    s = this.__zoom,
    c = a == null ? b(e) : typeof a == `function` ? a.apply(this, arguments) : a;
   return n(io.translate(c[0], c[1]).scale(s.k).translate(typeof r == `function` ? -r.apply(this, arguments) : -r, typeof i == `function` ? -i.apply(this, arguments) : -i), e, o)
  }, a, s)
 };

 function v(e, t) {
  return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new ro(t, e.x, e.y)
 }

 function y(e, t, n) {
  var r = t[0] - n[0] * e.k,
   i = t[1] - n[1] * e.k;
  return r === e.x && i === e.y ? e : new ro(e.k, r, i)
 }

 function b(e) {
  return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2]
 }

 function x(e, n, r, i) {
  e.on(`start.zoom`, function() {
   S(this, arguments).event(i).start()
  }).on(`interrupt.zoom end.zoom`, function() {
   S(this, arguments).event(i).end()
  }).tween(`zoom`, function() {
   var e = this,
    a = arguments,
    o = S(e, a).event(i),
    s = t.apply(e, a),
    l = r == null ? b(s) : typeof r == `function` ? r.apply(e, a) : r,
    u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]),
    d = e.__zoom,
    f = typeof n == `function` ? n.apply(e, a) : n,
    p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
   return function(e) {
    if (e === 1) e = f;
    else {
     var t = p(e),
      n = u / t[2];
     e = new ro(n, l[0] - t[0] * n, l[1] - t[1] * n)
    }
    o.zoom(null, e)
   }
  })
 }

 function S(e, t, n) {
  return !n && e.__zooming || new w(e, t)
 }

 function w(e, n) {
  this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0
 }
 w.prototype = {
  event: function(e) {
   return e && (this.sourceEvent = e), this
  },
  start: function() {
   return ++this.active === 1 && (this.that.__zooming = this, this.emit(`start`)), this
  },
  zoom: function(e, t) {
   return this.mouse && e !== `mouse` && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== `touch` && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== `touch` && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit(`zoom`), this
  },
  end: function() {
   return --this.active === 0 && (delete this.that.__zooming, this.emit(`end`)), this
  },
  emit: function(e) {
   var t = Vt(this.that).datum();
   l.call(e, this.that, new no(e, {
    sourceEvent: this.sourceEvent,
    target: _,
    transform: this.that.__zoom,
    dispatch: l
   }), t)
  }
 };

 function T(t, ...i) {
  if (!e.apply(this, arguments)) return;
  var s = S(this, i).event(t),
   c = this.__zoom,
   l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))),
   u = Gt(t);
  if (s.wheel)(s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
  else if (c.k === l) return;
  else s.mouse = [u, c.invert(u)], Ki(this), s.start();
  so(t), s.wheel = setTimeout(d, m), s.zoom(`mouse`, n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));

  function d() {
   s.wheel = null, s.end()
  }
 }

 function E(t, ...r) {
  if (f || !e.apply(this, arguments)) return;
  var i = t.currentTarget,
   a = S(this, r, !0).event(t),
   s = Vt(t.view).on(`mousemove.zoom`, d, !0).on(`mouseup.zoom`, p, !0),
   c = Gt(t, i),
   l = t.clientX,
   u = t.clientY;
  Xt(t.view), oo(t), a.mouse = [c, this.__zoom.invert(c)], Ki(this), a.start();

  function d(e) {
   if (so(e), !a.moved) {
    var t = e.clientX - l,
     r = e.clientY - u;
    a.moved = t * t + r * r > h
   }
   a.event(e).zoom(`mouse`, n(y(a.that.__zoom, a.mouse[0] = Gt(e, i), a.mouse[1]), a.extent, o))
  }

  function p(e) {
   s.on(`mousemove.zoom mouseup.zoom`, null), Zt(e.view, a.moved), so(e), a.event(e).end()
  }
 }

 function D(r, ...i) {
  if (e.apply(this, arguments)) {
   var a = this.__zoom,
    c = Gt(r.changedTouches ? r.changedTouches[0] : r, this),
    l = a.invert(c),
    u = a.k * (r.shiftKey ? .5 : 2),
    d = n(y(v(a, u), c, l), t.apply(this, i), o);
   so(r), s > 0 ? Vt(this).transition().duration(s).call(x, d, c, r) : Vt(this).call(_.transform, d, c, r)
  }
 }

 function O(t, ...n) {
  if (e.apply(this, arguments)) {
   var r = t.touches,
    i = r.length,
    a = S(this, n, t.changedTouches.length === i).event(t),
    o, s, c, l;
   for (oo(t), s = 0; s < i; ++s) c = r[s], l = Gt(c, this), l = [l, this.__zoom.invert(l), c.identifier], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
   u && (u = clearTimeout(u)), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
    u = null
   }, p)), Ki(this), a.start())
  }
 }

 function k(e, ...t) {
  if (this.__zooming) {
   var r = S(this, t).event(e),
    i = e.changedTouches,
    a = i.length,
    s, c, l, u;
   for (so(e), s = 0; s < a; ++s) c = i[s], l = Gt(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
   if (c = r.that.__zoom, r.touch1) {
    var d = r.touch0[0],
     f = r.touch0[1],
     p = r.touch1[0],
     m = r.touch1[1],
     h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h,
     g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
    c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2]
   } else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
   else return;
   r.zoom(`touch`, n(y(c, l, u), r.extent, o))
  }
 }

 function A(e, ...t) {
  if (this.__zooming) {
   var n = S(this, t).event(e),
    r = e.changedTouches,
    i = r.length,
    a, o;
   for (oo(e), f && clearTimeout(f), f = setTimeout(function() {
     f = null
    }, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
   if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
   else if (n.end(), n.taps === 2 && (o = Gt(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
    var s = Vt(this).on(`dblclick.zoom`);
    s && s.apply(this, arguments)
   }
  }
 }
 return _.wheelDelta = function(e) {
  return arguments.length ? (r = typeof e == `function` ? e : to(+e), _) : r
 }, _.filter = function(t) {
  return arguments.length ? (e = typeof t == `function` ? t : to(!!t), _) : e
 }, _.touchable = function(e) {
  return arguments.length ? (i = typeof e == `function` ? e : to(!!e), _) : i
 }, _.extent = function(e) {
  return arguments.length ? (t = typeof e == `function` ? e : to([
   [+e[0][0], +e[0][1]],
   [+e[1][0], +e[1][1]]
  ]), _) : t
 }, _.scaleExtent = function(e) {
  return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]]
 }, _.translateExtent = function(e) {
  return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [
   [o[0][0], o[0][1]],
   [o[1][0], o[1][1]]
  ]
 }, _.constrain = function(e) {
  return arguments.length ? (n = e, _) : n
 }, _.duration = function(e) {
  return arguments.length ? (s = +e, _) : s
 }, _.interpolate = function(e) {
  return arguments.length ? (c = e, _) : c
 }, _.on = function() {
  var e = l.on.apply(l, arguments);
  return e === l ? _ : e
 }, _.clickDistance = function(e) {
  return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h)
 }, _.tapDistance = function(e) {
  return arguments.length ? (g = +e, _) : g
 }, _
}
var go = {
  error001: (e = `react`) => `Seems like you have not used ${e===`svelte`?`SvelteFlowProvider`:`ReactFlowProvider`} as an ancestor. Help: https://${e}flow.dev/error#001`,
  error002: () => `It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.`,
  error003: e => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => `The parent container needs a width and a height to render the graph.`,
  error005: () => `Only child nodes can use a parent extent.`,
  error006: () => `Can't create edge. An edge needs a source and a target.`,
  error007: e => `The old edge with id=${e} does not exist.`,
  error009: e => `Marker type "${e}" doesn't exist.`,
  error008: (e, {
   id: t,
   sourceHandle: n,
   targetHandle: r
  }) => `Couldn't create edge for ${e} handle id: "${e===`source`?n:r}", edge id: ${t}.`,
  error010: () => `Handle: No node id found. Make sure to only use a Handle inside a custom Node.`,
  error011: e => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: e => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = `react`) => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => `useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.`,
  error015: () => `It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.`,
  error016: e => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
 },
 _o = [
  [-1 / 0, -1 / 0],
  [1 / 0, 1 / 0]
 ],
 vo = [`Enter`, ` `, `Escape`],
 yo = {
  "node.a11yDescription.default": `Press enter or space to select a node. Press delete to remove it and escape to cancel.`,
  "node.a11yDescription.keyboardDisabled": `Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.`,
  "node.a11yDescription.ariaLiveMessage": ({
   direction: e,
   x: t,
   y: n
  }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": `Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.`,
  "controls.ariaLabel": `Control Panel`,
  "controls.zoomIn.ariaLabel": `Zoom In`,
  "controls.zoomOut.ariaLabel": `Zoom Out`,
  "controls.fitView.ariaLabel": `Fit View`,
  "controls.interactive.ariaLabel": `Toggle Interactivity`,
  "minimap.ariaLabel": `Mini Map`,
  "handle.ariaLabel": `Handle`
 },
 bo;
(function(e) {
 e.Strict = `strict`, e.Loose = `loose`
})(bo || (bo = {}));
var xo;
(function(e) {
 e.Free = `free`, e.Vertical = `vertical`, e.Horizontal = `horizontal`
})(xo || (xo = {}));
var So;
(function(e) {
 e.Partial = `partial`, e.Full = `full`
})(So || (So = {}));
var Co = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
 },
 wo;
(function(e) {
 e.Bezier = `default`, e.Straight = `straight`, e.Step = `step`, e.SmoothStep = `smoothstep`, e.SimpleBezier = `simplebezier`
})(wo || (wo = {}));
var To;
(function(e) {
 e.Arrow = `arrow`, e.ArrowClosed = `arrowclosed`
})(To || (To = {}));
var H;
(function(e) {
 e.Left = `left`, e.Top = `top`, e.Right = `right`, e.Bottom = `bottom`
})(H || (H = {}));
var Eo = {
  [H.Left]: H.Right,
  [H.Right]: H.Left,
  [H.Top]: H.Bottom,
  [H.Bottom]: H.Top
 },
 Do = e => !!e && typeof e == `object` && `id` in e && `source` in e && `target` in e,
 Oo = e => !!e && typeof e == `object` && `id` in e && `position` in e && !(`source` in e) && !(`target` in e),
 ko = e => !!e && typeof e == `object` && `id` in e && `internals` in e && !(`source` in e) && !(`target` in e),
 Ao = (e, t = [0, 0]) => {
  let {
   width: n,
   height: r
  } = ls(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
  return {
   x: e.position.x - a,
   y: e.position.y - o
  }
 },
 jo = (e, t = {
  nodeOrigin: [0, 0]
 }) => {
  if (e.length === 0) return {
   x: 0,
   y: 0,
   width: 0,
   height: 0
  };
  let n = !1,
   r = e.reduce((e, r) => {
    let i = typeof r == `string`,
     a = !t.nodeLookup && !i ? r : void 0;
    return t.nodeLookup && (a = i ? t.nodeLookup.get(r) : ko(r) ? r : t.nodeLookup.get(r.id)), a ? (n = !0, Uo(e, qo(a, t.nodeOrigin))) : e
   }, {
    x: 1 / 0,
    y: 1 / 0,
    x2: -1 / 0,
    y2: -1 / 0
   });
  return n ? Go(r) : {
   x: 0,
   y: 0,
   width: 0,
   height: 0
  }
 },
 Mo = (e, t = {}) => {
  let n = {
    x: 1 / 0,
    y: 1 / 0,
    x2: -1 / 0,
    y2: -1 / 0
   },
   r = !1;
  return e.forEach(e => {
   (t.filter === void 0 || t.filter(e)) && (n = Uo(n, qo(e)), r = !0)
  }), r ? Go(n) : {
   x: 0,
   y: 0,
   width: 0,
   height: 0
  }
 },
 No = (e, t, [n, r, i] = [0, 0, 1], a = !1, o = !1) => {
  let s = (t.x - n) / i,
   c = (t.y - r) / i,
   l = t.width / i,
   u = t.height / i,
   d = [];
  for (let t of e.values()) {
   let {
    measured: e,
    selectable: n = !0,
    hidden: r = !1
   } = t;
   if (o && !n || r) continue;
   let i = e.width ?? t.width ?? t.initialWidth ?? 0,
    f = e.height ?? t.height ?? t.initialHeight ?? 0,
    {
     x: p,
     y: m
    } = t.internals.positionAbsolute,
    h = Yo(s, c, l, u, p, m, i, f),
    g = i * f,
    _ = a && h > 0;
   (!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t)
  }
  return d
 },
 Po = (e, t) => {
  let n = new Set;
  return e.forEach(e => {
   n.add(e.id)
  }), t.filter(e => n.has(e.source) || n.has(e.target))
 };

function Fo(e, t) {
 let n = new Map,
  r = t?.nodes ? new Set(t.nodes.map(e => e.id)) : null;
 return e.forEach(e => {
  let i;
  if (t?.includeHiddenNodes) {
   let {
    width: t,
    height: n
   } = ls(e);
   i = t > 0 && n > 0
  } else i = !!(e.measured.width && e.measured.height && !e.hidden);
  i && (!r || r.has(e.id)) && n.set(e.id, e)
 }), n
}
async function Io({
 nodes: e,
 width: t,
 height: n,
 panZoom: r,
 minZoom: i,
 maxZoom: a
}, o) {
 if (e.size === 0) return !0;
 let s = os(Mo(Fo(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
 return await r.setViewport(s, {
  duration: o?.duration,
  ease: o?.ease,
  interpolate: o?.interpolate
 }), !0
}

function Lo({
 nodeId: e,
 nextPosition: t,
 nodeLookup: n,
 nodeOrigin: r = [0, 0],
 nodeExtent: i,
 onError: a
}) {
 let o = n.get(e),
  s = o.parentId ? n.get(o.parentId) : void 0,
  {
   x: c,
   y: l
  } = s ? s.internals.positionAbsolute : {
   x: 0,
   y: 0
  },
  u = o.origin ?? r,
  d = o.extent || i;
 if (o.extent === `parent` && !o.expandParent) {
  if (!s) a?.(`005`, go.error005());
  else {
   let {
    width: e,
    height: t
   } = ls(s);
   e && t && (d = [
    [c, l],
    [c + e, l + t]
   ])
  }
 } else s && cs(o.extent) && (d = [
  [o.extent[0][0] + c, o.extent[0][1] + l],
  [o.extent[1][0] + c, o.extent[1][1] + l]
 ]);
 let f = cs(d) ? Bo(t, d, o.measured) : t;
 return (o.measured.width === void 0 || o.measured.height === void 0) && a?.(`015`, go.error015()), {
  position: {
   x: f.x - c + (o.measured.width ?? 0) * u[0],
   y: f.y - l + (o.measured.height ?? 0) * u[1]
  },
  positionAbsolute: f
 }
}
async function Ro({
 nodesToRemove: e = [],
 edgesToRemove: t = [],
 nodes: n,
 edges: r,
 onBeforeDelete: i
}) {
 let a = new Set(e.map(e => e.id)),
  o = [];
 for (let e of n) {
  if (e.deletable === !1) continue;
  let t = a.has(e.id),
   n = !t && e.parentId && o.find(t => t.id === e.parentId);
  (t || n) && o.push(e)
 }
 let s = new Set(t.map(e => e.id)),
  c = r.filter(e => e.deletable !== !1),
  l = Po(o, c);
 for (let e of c) s.has(e.id) && !l.find(t => t.id === e.id) && l.push(e);
 if (!i) return {
  edges: l,
  nodes: o
 };
 let u = await i({
  nodes: o,
  edges: l
 });
 return typeof u == `boolean` ? u ? {
  edges: l,
  nodes: o
 } : {
  edges: [],
  nodes: []
 } : u
}
var zo = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
 Bo = (e = {
  x: 0,
  y: 0
 }, t, n) => ({
  x: zo(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: zo(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
 });

function U(e, t, n) {
 let {
  width: r,
  height: i
 } = ls(n), {
  x: a,
  y: o
 } = n.internals.positionAbsolute;
 return Bo(e, [
  [a, o],
  [a + r, o + i]
 ], t)
}
var Vo = (e, t, n) => e < t ? zo(Math.abs(e - t), 1, t) / t : e > n ? -zo(Math.abs(e - n), 1, t) / t : 0,
 Ho = (e, t, n = 15, r = 40) => [Vo(e.x, r, t.width - r) * n, Vo(e.y, r, t.height - r) * n],
 Uo = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
 }),
 Wo = ({
  x: e,
  y: t,
  width: n,
  height: r
 }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
 }),
 Go = ({
  x: e,
  y: t,
  x2: n,
  y2: r
 }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
 }),
 Ko = (e, t = [0, 0]) => {
  let {
   x: n,
   y: r
  } = ko(e) ? e.internals.positionAbsolute : Ao(e, t);
  return {
   x: n,
   y: r,
   width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
   height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  }
 },
 qo = (e, t = [0, 0]) => {
  let {
   x: n,
   y: r
  } = ko(e) ? e.internals.positionAbsolute : Ao(e, t);
  return {
   x: n,
   y: r,
   x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
   y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  }
 },
 Jo = (e, t) => Go(Uo(Wo(e), Wo(t))),
 Yo = (e, t, n, r, i, a, o, s) => {
  let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)),
   l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
  return Math.ceil(c * l)
 },
 Xo = (e, t) => Yo(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height),
 Zo = e => Qo(e.width) && Qo(e.height) && Qo(e.x) && Qo(e.y),
 Qo = e => !isNaN(e) && isFinite(e),
 $o = (e, t) => (e, t) => {},
 es = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
 }),
 ts = ({
  x: e,
  y: t
 }, [n, r, i], a = !1, o = [1, 1]) => {
  let s = {
   x: (e - n) / i,
   y: (t - r) / i
  };
  return a ? es(s, o) : s
 },
 ns = ({
  x: e,
  y: t
 }, [n, r, i]) => ({
  x: e * i + n,
  y: t * i + r
 });

function rs(e, t) {
 if (typeof e == `number`) return Math.floor((t - t / (1 + e)) * .5);
 if (typeof e == `string` && e.endsWith(`px`)) {
  let t = parseFloat(e);
  if (!Number.isNaN(t)) return Math.floor(t)
 }
 if (typeof e == `string` && e.endsWith(`%`)) {
  let n = parseFloat(e);
  if (!Number.isNaN(n)) return Math.floor(t * n * .01)
 }
 return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0
}

function is(e, t, n) {
 if (typeof e == `string` || typeof e == `number`) {
  let r = rs(e, n),
   i = rs(e, t);
  return {
   top: r,
   right: i,
   bottom: r,
   left: i,
   x: i * 2,
   y: r * 2
  }
 }
 if (typeof e == `object`) {
  let r = rs(e.top ?? e.y ?? 0, n),
   i = rs(e.bottom ?? e.y ?? 0, n),
   a = rs(e.left ?? e.x ?? 0, t),
   o = rs(e.right ?? e.x ?? 0, t);
  return {
   top: r,
   right: o,
   bottom: i,
   left: a,
   x: a + o,
   y: r + i
  }
 }
 return {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0
 }
}

function as(e, t, n, r, i, a) {
 let {
  x: o,
  y: s
 } = ns(e, [t, n, r]), {
  x: c,
  y: l
 } = ns({
  x: e.x + e.width,
  y: e.y + e.height
 }, [t, n, r]), u = i - c, d = a - l;
 return {
  left: Math.floor(o),
  top: Math.floor(s),
  right: Math.floor(u),
  bottom: Math.floor(d)
 }
}
var os = (e, t, n, r, i, a) => {
  let o = is(a, t, n),
   s = (t - o.x) / e.width,
   c = (n - o.y) / e.height,
   l = zo(Math.min(s, c), r, i),
   u = e.x + e.width / 2,
   d = e.y + e.height / 2,
   f = t / 2 - u * l,
   p = n / 2 - d * l,
   m = as(e, f, p, l, t, n),
   h = {
    left: Math.min(m.left - o.left, 0),
    top: Math.min(m.top - o.top, 0),
    right: Math.min(m.right - o.right, 0),
    bottom: Math.min(m.bottom - o.bottom, 0)
   };
  return {
   x: f - h.left + h.right,
   y: p - h.top + h.bottom,
   zoom: l
  }
 },
 ss = () => typeof navigator < `u` && navigator?.userAgent?.indexOf(`Mac`) >= 0;

function cs(e) {
 return e != null && e !== `parent`
}

function ls(e) {
 return {
  width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
  height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
 }
}

function us(e) {
 return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0
}

function ds(e, t = {
 width: 0,
 height: 0
}, n, r, i) {
 let a = {
   ...e
  },
  o = r.get(n);
 if (o) {
  let e = o.origin || i;
  a.x += o.internals.positionAbsolute.x - (t.width ?? 0) * e[0], a.y += o.internals.positionAbsolute.y - (t.height ?? 0) * e[1]
 }
 return a
}

function fs(e, t) {
 if (e.size !== t.size) return !1;
 for (let n of e)
  if (!t.has(n)) return !1;
 return !0
}

function ps() {
 let e, t;
 return {
  promise: new Promise((n, r) => {
   e = n, t = r
  }),
  resolve: e,
  reject: t
 }
}

function ms(e) {
 return {
  ...yo,
  ...e || {}
 }
}

function hs(e) {
 return e === null ? null : e ? `valid` : `invalid`
}

function gs(e, {
 snapGrid: t = [0, 0],
 snapToGrid: n = !1,
 transform: r,
 containerBounds: i
}) {
 let {
  x: a,
  y: o
 } = Ss(e), s = ts({
  x: a - (i?.left ?? 0),
  y: o - (i?.top ?? 0)
 }, r), {
  x: c,
  y: l
 } = n ? es(s, t) : s;
 return {
  xSnapped: c,
  ySnapped: l,
  ...s
 }
}
var _s = e => ({
  width: e.offsetWidth,
  height: e.offsetHeight
 }),
 vs = e => e?.getRootNode?.() || window?.document,
 ys = [`INPUT`, `SELECT`, `TEXTAREA`];

function bs(e) {
 let t = e.composedPath?.()?.[0] || e.target;
 return t?.nodeType === 1 ? ys.includes(t.nodeName) || t.hasAttribute(`contenteditable`) || !!t.closest(`.nokey`) : !1
}
var xs = e => `clientX` in e,
 Ss = (e, t) => {
  let n = xs(e),
   r = n ? e.clientX : e.touches?.[0].clientX,
   i = n ? e.clientY : e.touches?.[0].clientY;
  return {
   x: r - (t?.left ?? 0),
   y: i - (t?.top ?? 0)
  }
 },
 Cs = (e, t, n, r, i) => {
  let a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map(t => {
   let a = t.getBoundingClientRect();
   return {
    id: t.getAttribute(`data-handleid`),
    type: e,
    nodeId: i,
    position: t.getAttribute(`data-handlepos`),
    x: (a.left - n.left) / r,
    y: (a.top - n.top) / r,
    ..._s(t)
   }
  })
 };

function ws({
 sourceX: e,
 sourceY: t,
 targetX: n,
 targetY: r,
 sourceControlX: i,
 sourceControlY: a,
 targetControlX: o,
 targetControlY: s
}) {
 let c = e * .125 + i * .375 + o * .375 + n * .125,
  l = t * .125 + a * .375 + s * .375 + r * .125;
 return [c, l, Math.abs(c - e), Math.abs(l - t)]
}

function Ts(e, t) {
 return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e)
}

function Es({
 pos: e,
 x1: t,
 y1: n,
 x2: r,
 y2: i,
 c: a
}) {
 switch (e) {
  case H.Left:
   return [t - Ts(t - r, a), n];
  case H.Right:
   return [t + Ts(r - t, a), n];
  case H.Top:
   return [t, n - Ts(n - i, a)];
  case H.Bottom:
   return [t, n + Ts(i - n, a)]
 }
}

function Ds({
 sourceX: e,
 sourceY: t,
 sourcePosition: n = H.Bottom,
 targetX: r,
 targetY: i,
 targetPosition: a = H.Top,
 curvature: o = .25
}) {
 let [s, c] = Es({
  pos: n,
  x1: e,
  y1: t,
  x2: r,
  y2: i,
  c: o
 }), [l, u] = Es({
  pos: a,
  x1: r,
  y1: i,
  x2: e,
  y2: t,
  c: o
 }), [d, f, p, m] = ws({
  sourceX: e,
  sourceY: t,
  targetX: r,
  targetY: i,
  sourceControlX: s,
  sourceControlY: c,
  targetControlX: l,
  targetControlY: u
 });
 return [`M${e},${t} C${s},${c} ${l},${u} ${r},${i}`, d, f, p, m]
}

function Os({
 sourceX: e,
 sourceY: t,
 targetX: n,
 targetY: r
}) {
 let i = Math.abs(n - e) / 2,
  a = n < e ? n + i : n - i,
  o = Math.abs(r - t) / 2;
 return [a, r < t ? r + o : r - o, i, o]
}

function ks({
 sourceNode: e,
 targetNode: t,
 selected: n = !1,
 zIndex: r = 0,
 elevateOnSelect: i = !1,
 zIndexMode: a = `basic`
}) {
 return a === `manual` ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0)
}

function As({
 sourceNode: e,
 targetNode: t,
 width: n,
 height: r,
 transform: i
}) {
 let a = Uo(qo(e), qo(t));
 return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), Xo({
  x: -i[0] / i[2],
  y: -i[1] / i[2],
  width: n / i[2],
  height: r / i[2]
 }, Go(a)) > 0
}
var js = ({
  source: e,
  sourceHandle: t,
  target: n,
  targetHandle: r
 }) => `xy-edge__${e}${t||``}-${n}${r||``}`,
 Ms = (e, t) => t.some(t => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)),
 Ns = (e, t, n = {}) => {
  if (!e.source || !e.target) return n.onError?.(`006`, go.error006()), t;
  let r = n.getEdgeId || js,
   i;
  return i = Do(e) ? {
   ...e
  } : {
   ...e,
   id: r(e)
  }, Ms(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i))
 };

function Ps({
 sourceX: e,
 sourceY: t,
 targetX: n,
 targetY: r
}) {
 let [i, a, o, s] = Os({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r
 });
 return [`M ${e},${t}L ${n},${r}`, i, a, o, s]
}
var Fs = {
  [H.Left]: {
   x: -1,
   y: 0
  },
  [H.Right]: {
   x: 1,
   y: 0
  },
  [H.Top]: {
   x: 0,
   y: -1
  },
  [H.Bottom]: {
   x: 0,
   y: 1
  }
 },
 Is = ({
  source: e,
  sourcePosition: t = H.Bottom,
  target: n
 }) => t === H.Left || t === H.Right ? e.x < n.x ? {
  x: 1,
  y: 0
 } : {
  x: -1,
  y: 0
 } : e.y < n.y ? {
  x: 0,
  y: 1
 } : {
  x: 0,
  y: -1
 },
 Ls = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
 Rs = (e, t, n) => e.x === t.x && t.x === n.x && (t.y - e.y) * (n.y - t.y) >= 0 || e.y === t.y && t.y === n.y && (t.x - e.x) * (n.x - t.x) >= 0;

function zs({
 source: e,
 sourcePosition: t = H.Bottom,
 target: n,
 targetPosition: r = H.Top,
 center: i,
 offset: a,
 stepPosition: o
}) {
 let s = Fs[t],
  c = Fs[r],
  l = {
   x: e.x + s.x * a,
   y: e.y + s.y * a
  },
  u = {
   x: n.x + c.x * a,
   y: n.y + c.y * a
  },
  d = Is({
   source: l,
   sourcePosition: t,
   target: u
  }),
  f = d.x === 0 ? `y` : `x`,
  p = d[f],
  m = [],
  h, g, _ = {
   x: 0,
   y: 0
  },
  v = {
   x: 0,
   y: 0
  },
  [, , y, b] = Os({
   sourceX: e.x,
   sourceY: e.y,
   targetX: n.x,
   targetY: n.y
  });
 if (s[f] * c[f] === -1) {
  f === `x` ? (h = i.x ?? l.x + (u.x - l.x) * o, g = i.y ?? (l.y + u.y) / 2) : (h = i.x ?? (l.x + u.x) / 2, g = i.y ?? l.y + (u.y - l.y) * o);
  let e = [{
    x: h,
    y: l.y
   }, {
    x: h,
    y: u.y
   }],
   t = [{
    x: l.x,
    y: g
   }, {
    x: u.x,
    y: g
   }];
  m = s[f] === p ? f === `x` ? e : t : f === `x` ? t : e
 } else {
  let i = [{
    x: l.x,
    y: u.y
   }],
   o = [{
    x: u.x,
    y: l.y
   }];
  if (m = f === `x` ? s.x === p ? o : i : s.y === p ? i : o, t === r) {
   let t = Math.abs(e[f] - n[f]);
   if (t <= a) {
    let r = Math.min(a - 1, a - t);
    s[f] === p ? _[f] = (l[f] > e[f] ? -1 : 1) * r : v[f] = (u[f] > n[f] ? -1 : 1) * r
   }
  }
  if (t !== r) {
   let e = f === `x` ? `y` : `x`,
    t = s[f] === c[e],
    n = l[e] > u[e],
    r = l[e] < u[e];
   (s[f] === 1 && (!t && n || t && r) || s[f] !== 1 && (!t && r || t && n)) && (m = f === `x` ? i : o)
  }
  let d = {
    x: l.x + _.x,
    y: l.y + _.y
   },
   y = {
    x: u.x + v.x,
    y: u.y + v.y
   };
  Math.max(Math.abs(d.x - m[0].x), Math.abs(y.x - m[0].x)) >= Math.max(Math.abs(d.y - m[0].y), Math.abs(y.y - m[0].y)) ? (h = (d.x + y.x) / 2, g = m[0].y) : (h = m[0].x, g = (d.y + y.y) / 2)
 }
 let x = {
   x: l.x + _.x,
   y: l.y + _.y
  },
  S = {
   x: u.x + v.x,
   y: u.y + v.y
  },
  C = [];
 for (let t of [e, x, ...m, S, n]) {
  let [e, n] = C.slice(-2);
  n && Rs(e, n, t) && C.pop(), C.push(t)
 }
 return [C, h, g, y, b]
}

function Bs(e, t, n, r) {
 let i = Math.min(Ls(e, t) / 2, Ls(t, n) / 2, r),
  {
   x: a,
   y: o
  } = t;
 if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
 if (e.y === o) {
  let t = e.x < n.x ? -1 : 1,
   r = e.y < n.y ? 1 : -1;
  return `L ${a+i*t},${o}Q ${a},${o} ${a},${o+i*r}`
 }
 let s = e.x < n.x ? 1 : -1;
 return `L ${a},${o+i*(e.y<n.y?-1:1)}Q ${a},${o} ${a+i*s},${o}`
}

function Vs({
 sourceX: e,
 sourceY: t,
 sourcePosition: n = H.Bottom,
 targetX: r,
 targetY: i,
 targetPosition: a = H.Top,
 borderRadius: o = 5,
 centerX: s,
 centerY: c,
 offset: l = 20,
 stepPosition: u = .5
}) {
 let [d, f, p, m, h] = zs({
  source: {
   x: e,
   y: t
  },
  sourcePosition: n,
  target: {
   x: r,
   y: i
  },
  targetPosition: a,
  center: {
   x: s,
   y: c
  },
  offset: l,
  stepPosition: u
 }), g = `M${d[0].x} ${d[0].y}`;
 for (let e = 1; e < d.length - 1; e++) g += Bs(d[e - 1], d[e], d[e + 1], o);
 return g += `L${d[d.length-1].x} ${d[d.length-1].y}`, [g, f, p, m, h]
}

function Hs(e) {
 return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth)
}

function Us(e) {
 let {
  sourceNode: t,
  targetNode: n
 } = e;
 if (!Hs(t) || !Hs(n)) return null;
 let r = t.internals.handleBounds || Ws(t.handles),
  i = n.internals.handleBounds || Ws(n.handles),
  a = Ks(r?.source ?? [], e.sourceHandle),
  o = Ks(e.connectionMode === bo.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
 if (!a || !o) return e.onError?.(`008`, go.error008(a ? `target` : `source`, {
  id: e.id,
  sourceHandle: e.sourceHandle,
  targetHandle: e.targetHandle
 })), null;
 let s = a?.position || H.Bottom,
  c = o?.position || H.Top,
  l = Gs(t, a, s),
  u = Gs(n, o, c);
 return {
  sourceX: l.x,
  sourceY: l.y,
  targetX: u.x,
  targetY: u.y,
  sourcePosition: s,
  targetPosition: c
 }
}

function Ws(e) {
 if (!e) return null;
 let t = [],
  n = [];
 for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === `source` ? t.push(r) : r.type === `target` && n.push(r);
 return {
  source: t,
  target: n
 }
}

function Gs(e, t, n = H.Left, r = !1) {
 let i = (t?.x ?? 0) + e.internals.positionAbsolute.x,
  a = (t?.y ?? 0) + e.internals.positionAbsolute.y,
  {
   width: o,
   height: s
  } = t ?? ls(e);
 if (r) return {
  x: i + o / 2,
  y: a + s / 2
 };
 switch (t?.position ?? n) {
  case H.Top:
   return {
    x: i + o / 2, y: a
   };
  case H.Right:
   return {
    x: i + o, y: a + s / 2
   };
  case H.Bottom:
   return {
    x: i + o / 2, y: a + s
   };
  case H.Left:
   return {
    x: i, y: a + s / 2
   }
 }
}

function Ks(e, t) {
 return e && (t ? e.find(e => e.id === t) : e[0]) || null
}

function qs(e, t) {
 return e ? typeof e == `string` ? e : `${t?`${t}__`:``}${Object.keys(e).sort().map(t=>`${t}=${e[t]}`).join(`&`)}` : ``
}

function Js(e, {
 id: t,
 defaultColor: n,
 defaultMarkerStart: r,
 defaultMarkerEnd: i
}) {
 let a = new Set;
 return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach(r => {
  if (r && typeof r == `object`) {
   let i = qs(r, t);
   a.has(i) || (e.push({
    id: i,
    color: r.color || n,
    ...r
   }), a.add(i))
  }
 }), e), []).sort((e, t) => e.id.localeCompare(t.id))
}

function Ys(e, t, n, r, i) {
 let a = .5;
 i === `start` ? a = 0 : i === `end` && (a = 1);
 let o = [(e.x + e.width * a) * t.zoom + t.x, e.y * t.zoom + t.y - r],
  s = [-100 * a, -100];
 switch (n) {
  case H.Right:
   o = [(e.x + e.width) * t.zoom + t.x + r, (e.y + e.height * a) * t.zoom + t.y], s = [0, -100 * a];
   break;
  case H.Bottom:
   o[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
   break;
  case H.Left:
   o = [e.x * t.zoom + t.x - r, (e.y + e.height * a) * t.zoom + t.y], s = [-100, -100 * a]
 }
 return `translate(${o[0]}px, ${o[1]}px) translate(${s[0]}%, ${s[1]}%)`
}
var Xs = 1e3,
 Zs = 10,
 Qs = {
  nodeOrigin: [0, 0],
  nodeExtent: _o,
  elevateNodesOnSelect: !0,
  zIndexMode: `basic`,
  defaults: {}
 },
 $s = {
  ...Qs,
  checkEquality: !0
 };

function ec(e, t) {
 let n = {
  ...e
 };
 for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
 return n
}

function tc(e, t, n) {
 let r = ec(Qs, n);
 for (let n of e.values())
  if (n.parentId) oc(n, e, t, r);
  else {
   let e = Bo(Ao(n, r.nodeOrigin), cs(n.extent) ? n.extent : r.nodeExtent, ls(n));
   n.internals.positionAbsolute = e
  }
}

function nc(e, t) {
 if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
 let n = [],
  r = [];
 for (let t of e.handles) {
  let i = {
   id: t.id,
   width: t.width ?? 1,
   height: t.height ?? 1,
   nodeId: e.id,
   x: t.x,
   y: t.y,
   position: t.position,
   type: t.type
  };
  t.type === `source` ? n.push(i) : t.type === `target` && r.push(i)
 }
 return {
  source: n,
  target: r
 }
}

function rc(e) {
 return e === `manual`
}

function ic(e, t, n, r = {}) {
 let i = ec($s, r),
  a = {
   i: 0
  },
  o = new Map(t),
  s = i?.elevateNodesOnSelect && !rc(i.zIndexMode) ? Xs : 0,
  c = e.length > 0,
  l = !1;
 t.clear(), n.clear();
 for (let u of e) {
  let e = o.get(u.id);
  if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
  else {
   let n = Bo(Ao(u, i.nodeOrigin), cs(u.extent) ? u.extent : i.nodeExtent, ls(u));
   e = {
    ...i.defaults,
    ...u,
    measured: {
     width: u.measured?.width,
     height: u.measured?.height
    },
    internals: {
     positionAbsolute: n,
     handleBounds: nc(u, e),
     z: sc(u, s, i.zIndexMode),
     userNode: u
    }
   }, t.set(u.id, e)
  }
  e.measured !== void 0 && e.measured.width !== void 0 && e.measured.height !== void 0 || e.hidden || (c = !1), u.parentId && oc(e, t, n, r, a), l || (l = u.selected ?? !1)
 }
 return {
  nodesInitialized: c,
  hasSelectedNodes: l
 }
}

function ac(e, t) {
 if (!e.parentId) return;
 let n = t.get(e.parentId);
 n ? n.set(e.id, e) : t.set(e.parentId, new Map([
  [e.id, e]
 ]))
}

function oc(e, t, n, r, i) {
 let {
  elevateNodesOnSelect: a,
  nodeOrigin: o,
  nodeExtent: s,
  zIndexMode: c
 } = ec(Qs, r), l = e.parentId, u = t.get(l);
 if (!u) {
  console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
  return
 }
 ac(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === `auto` && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * Zs), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
 let {
  x: d,
  y: f,
  z: p
 } = cc(e, u, o, s, a && !rc(c) ? Xs : 0, c), {
  positionAbsolute: m
 } = e.internals, h = d !== m.x || f !== m.y;
 (h || p !== e.internals.z) && t.set(e.id, {
  ...e,
  internals: {
   ...e.internals,
   positionAbsolute: h ? {
    x: d,
    y: f
   } : m,
   z: p
  }
 })
}

function sc(e, t, n) {
 let r = Qo(e.zIndex) ? e.zIndex : 0;
 return rc(n) ? r : r + (e.selected ? t : 0)
}

function cc(e, t, n, r, i, a) {
 let {
  x: o,
  y: s
 } = t.internals.positionAbsolute, c = ls(e), l = Ao(e, n), u = cs(e.extent) ? Bo(l, e.extent, c) : l, d = Bo({
  x: o + u.x,
  y: s + u.y
 }, r, c);
 e.extent === `parent` && (d = U(d, c, t));
 let f = sc(e, i, a),
  p = t.internals.z ?? 0;
 return {
  x: d.x,
  y: d.y,
  z: p >= f ? p + 1 : f
 }
}

function lc(e, t, n, r = [0, 0]) {
 let i = [],
  a = new Map;
 for (let n of e) {
  let e = t.get(n.parentId);
  if (!e) continue;
  let r = Jo(a.get(n.parentId)?.expandedRect ?? Ko(e), n.rect);
  a.set(n.parentId, {
   expandedRect: r,
   parent: e
  })
 }
 return a.size > 0 && a.forEach(({
  expandedRect: t,
  parent: a
 }, o) => {
  let s = a.internals.positionAbsolute,
   c = ls(a),
   l = a.origin ?? r,
   u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0,
   d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0,
   f = Math.max(c.width, Math.round(t.width)),
   p = Math.max(c.height, Math.round(t.height)),
   m = (f - c.width) * l[0],
   h = (p - c.height) * l[1];
  (u > 0 || d > 0 || m || h) && (i.push({
   id: o,
   type: `position`,
   position: {
    x: a.position.x - u + m,
    y: a.position.y - d + h
   }
  }), n.get(o)?.forEach(t => {
   e.some(e => e.id === t.id) || i.push({
    id: t.id,
    type: `position`,
    position: {
     x: t.position.x + u,
     y: t.position.y + d
    }
   })
  })), (c.width < t.width || c.height < t.height || u || d) && i.push({
   id: o,
   type: `dimensions`,
   setAttributes: !0,
   dimensions: {
    width: f + (u ? l[0] * u - m : 0),
    height: p + (d ? l[1] * d - h : 0)
   }
  })
 }), i
}

function uc(e, t, n, r, i, a, o) {
 let s = r?.querySelector(`.xyflow__viewport`),
  c = !1;
 if (!s) return {
  changes: [],
  updatedInternals: c
 };
 let l = [],
  u = window.getComputedStyle(s),
  {
   m22: d
  } = new window.DOMMatrixReadOnly(u.transform),
  f = [];
 for (let r of e.values()) {
  let e = t.get(r.id);
  if (!e) continue;
  if (e.hidden) {
   t.set(e.id, {
    ...e,
    internals: {
     ...e.internals,
     handleBounds: void 0
    }
   }), c = !0;
   continue
  }
  let s = _s(r.nodeElement),
   u = e.measured.width !== s.width || e.measured.height !== s.height;
  if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
   let p = r.nodeElement.getBoundingClientRect(),
    m = cs(e.extent) ? e.extent : a,
    {
     positionAbsolute: h
    } = e.internals;
   if (e.parentId && e.extent === `parent`) {
    let n = t.get(e.parentId);
    n && (h = U(h, s, n))
   } else m && (h = Bo(h, m, s));
   let g = {
    ...e,
    measured: s,
    internals: {
     ...e.internals,
     positionAbsolute: h,
     handleBounds: {
      source: Cs(`source`, r.nodeElement, p, d, e.id),
      target: Cs(`target`, r.nodeElement, p, d, e.id)
     }
    }
   };
   t.set(e.id, g), e.parentId && oc(g, t, n, {
    nodeOrigin: i,
    zIndexMode: o
   }), c = !0, u && (l.push({
    id: e.id,
    type: `dimensions`,
    dimensions: s
   }), e.expandParent && e.parentId && f.push({
    id: e.id,
    parentId: e.parentId,
    rect: Ko(g, i)
   }))
  }
 }
 if (f.length > 0) {
  let e = lc(f, t, n, i);
  l.push(...e)
 }
 return {
  changes: l,
  updatedInternals: c
 }
}
async function dc({
 delta: e,
 panZoom: t,
 transform: n,
 translateExtent: r,
 width: i,
 height: a
}) {
 if (!t || !e.x && !e.y) return !1;
 let o = await t.setViewportConstrained({
  x: n[0] + e.x,
  y: n[1] + e.y,
  zoom: n[2]
 }, [
  [0, 0],
  [i, a]
 ], r);
 return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2])
}

function fc(e, t, n, r, i, a) {
 let o = i,
  s = r.get(o) || new Map;
 r.set(o, s.set(n, t)), o = `${i}-${e}`;
 let c = r.get(o) || new Map;
 if (r.set(o, c.set(n, t)), a) {
  o = `${i}-${e}-${a}`;
  let s = r.get(o) || new Map;
  r.set(o, s.set(n, t))
 }
}

function pc(e, t, n) {
 e.clear(), t.clear();
 for (let r of n) {
  let {
   source: n,
   target: i,
   sourceHandle: a = null,
   targetHandle: o = null
  } = r, s = {
   edgeId: r.id,
   source: n,
   target: i,
   sourceHandle: a,
   targetHandle: o
  }, c = `${n}-${a}--${i}-${o}`;
  fc(`source`, s, `${i}-${o}--${n}-${a}`, e, n, a), fc(`target`, s, c, e, i, o), t.set(r.id, r)
 }
}

function mc(e, t) {
 if (!e.parentId) return !1;
 let n = t.get(e.parentId);
 return n ? n.selected ? !0 : mc(n, t) : !1
}

function hc(e, t, n) {
 let r = e;
 do {
  if (r?.matches?.(t)) return !0;
  if (r === n) return !1;
  r = r?.parentElement
 } while (r);
 return !1
}

function gc(e, t, n, r, i) {
 let a = new Map;
 for (let [o, s] of e)
  if ((i ? s.id === r : s.selected || s.id === r) && (i || !s.parentId || !mc(s, e)) && (s.draggable || t && s.draggable === void 0)) {
   let t = e.get(o);
   t && a.set(o, {
    id: o,
    position: t.position || {
     x: 0,
     y: 0
    },
    distance: {
     x: n.x - t.internals.positionAbsolute.x,
     y: n.y - t.internals.positionAbsolute.y
    },
    extent: t.extent,
    parentId: t.parentId,
    origin: t.origin,
    expandParent: t.expandParent,
    internals: {
     positionAbsolute: t.internals.positionAbsolute || {
      x: 0,
      y: 0
     }
    },
    measured: {
     width: t.measured.width ?? 0,
     height: t.measured.height ?? 0
    }
   })
  } return a
}

function _c({
 nodeId: e,
 dragItems: t,
 nodeLookup: n,
 dragging: r = !0
}) {
 let i = [];
 for (let [e, a] of t) {
  let t = n.get(e)?.internals.userNode;
  t && i.push({
   ...t,
   position: a.position,
   dragging: r
  })
 }
 if (!e) return [i[0], i];
 let a = n.get(e)?.internals.userNode;
 return [a ? {
  ...a,
  position: t.get(e)?.position || a.position,
  dragging: r
 } : i[0], i]
}

function vc({
 dragItems: e,
 snapGrid: t,
 x: n,
 y: r
}) {
 let i = e.values().next().value;
 if (!i) return null;
 let a = {
   x: n - i.distance.x,
   y: r - i.distance.y
  },
  o = es(a, t);
 return {
  x: o.x - a.x,
  y: o.y - a.y
 }
}

function yc({
 onNodeMouseDown: e,
 getStoreItems: t,
 onDragStart: n,
 onDrag: r,
 onDragStop: i
}) {
 let a = {
   x: null,
   y: null
  },
  o = 0,
  s = new Map,
  c = !1,
  l = {
   x: 0,
   y: 0
  },
  u = null,
  d = !1,
  f = null,
  p = !1,
  m = !1,
  h = null;

 function g({
  noDragClassName: g,
  handleSelector: _,
  domNode: v,
  isSelectable: y,
  nodeId: b,
  nodeClickDistance: x = 0
 }) {
  f = Vt(v);

  function S({
   x: e,
   y: n
  }) {
   let {
    nodeLookup: i,
    nodeExtent: o,
    snapGrid: c,
    snapToGrid: l,
    nodeOrigin: u,
    onNodeDrag: d,
    onSelectionDrag: f,
    onError: p,
    updateNodePositions: g
   } = t();
   a = {
    x: e,
    y: n
   };
   let _ = !1,
    v = s.size > 1,
    y = v && o ? Wo(Mo(s)) : null,
    x = v && l ? vc({
     dragItems: s,
     snapGrid: c,
     x: e,
     y: n
    }) : null;
   for (let [t, r] of s) {
    if (!i.has(t)) continue;
    let a = {
     x: e - r.distance.x,
     y: n - r.distance.y
    };
    l && (a = x ? {
     x: Math.round(a.x + x.x),
     y: Math.round(a.y + x.y)
    } : es(a, c));
    let s = null;
    if (v && o && !r.extent && y) {
     let {
      positionAbsolute: e
     } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
     s = [
      [t, i],
      [n, a]
     ]
    }
    let {
     position: d,
     positionAbsolute: f
    } = Lo({
     nodeId: t,
     nextPosition: a,
     nodeLookup: i,
     nodeExtent: s || o,
     nodeOrigin: u,
     onError: p
    });
    _ = _ || r.position.x !== d.x || r.position.y !== d.y, r.position = d, r.internals.positionAbsolute = f
   }
   if (m = m || _, _ && (g(s, !0), h && (r || d || !b && f))) {
    let [e, t] = _c({
     nodeId: b,
     dragItems: s,
     nodeLookup: i
    });
    r?.(h, s, e, t), d?.(h, e, t), b || f?.(h, t)
   }
  }
  async function C() {
   if (!u) return;
   let {
    transform: e,
    panBy: n,
    autoPanSpeed: r,
    autoPanOnNodeDrag: i
   } = t();
   if (!i) {
    c = !1, cancelAnimationFrame(o);
    return
   }
   let [s, d] = Ho(l, u, r);
   (s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
    x: s,
    y: d
   }) && S(a)), o = requestAnimationFrame(C)
  }

  function w(r) {
   let {
    nodeLookup: i,
    multiSelectionActive: o,
    nodesDraggable: c,
    transform: l,
    snapGrid: f,
    snapToGrid: p,
    selectNodesOnDrag: m,
    onNodeDragStart: h,
    onSelectionDragStart: g,
    unselectNodesAndEdges: _
   } = t();
   d = !0;
   let v = !!b && !o && !i.get(b)?.selected;
   m && y || o || !b || i.get(b)?.selected || _(), y && m && b && e?.(b);
   let x = gs(r.sourceEvent, {
    transform: l,
    snapGrid: f,
    snapToGrid: p,
    containerBounds: u
   });
   if (a = x, s = gc(i, c, x, b, v), s.size > 0 && (n || h || !b && g)) {
    let [e, t] = _c({
     nodeId: b,
     dragItems: s,
     nodeLookup: i
    });
    n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t)
   }
  }
  let T = an().clickDistance(x).on(`start`, e => {
   let {
    domNode: n,
    nodeDragThreshold: r,
    transform: i,
    snapGrid: o,
    snapToGrid: s
   } = t();
   u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = gs(e.sourceEvent, {
    transform: i,
    snapGrid: o,
    snapToGrid: s,
    containerBounds: u
   }), l = Ss(e.sourceEvent, u)
  }).on(`drag`, e => {
   let {
    autoPanOnNodeDrag: n,
    transform: r,
    snapGrid: i,
    snapToGrid: o,
    nodeDragThreshold: f,
    nodeLookup: m
   } = t(), g = gs(e.sourceEvent, {
    transform: r,
    snapGrid: i,
    snapToGrid: o,
    containerBounds: u
   });
   if (h = e.sourceEvent, (e.sourceEvent.type === `touchmove` && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
    if (!c && n && d && (c = !0, C()), !d) {
     let t = Ss(e.sourceEvent, u),
      n = t.x - l.x,
      r = t.y - l.y;
     Math.sqrt(n * n + r * r) > f && w(e)
    }(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = Ss(e.sourceEvent, u), S(g))
   }
  }).on(`end`, e => {
   if (!d || p) p && s.size > 0 && t().updateNodePositions(s, !1);
   else if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
    let {
     nodeLookup: n,
     updateNodePositions: r,
     onNodeDragStop: a,
     onSelectionDragStop: o
    } = t();
    if (m && (r(s, !1), m = !1), i || a || !b && o) {
     let [t, r] = _c({
      nodeId: b,
      dragItems: s,
      nodeLookup: n,
      dragging: !1
     });
     i?.(e.sourceEvent, s, t, r), a?.(e.sourceEvent, t, r), b || o?.(e.sourceEvent, r)
    }
   }
  }).filter(e => {
   let t = e.target;
   return !e.button && (!g || !hc(t, `.${g}`, v)) && (!_ || hc(t, _, v))
  });
  f.call(T)
 }

 function _() {
  f?.on(`.drag`, null)
 }
 return {
  update: g,
  destroy: _
 }
}

function bc(e, t, n) {
 let r = [],
  i = {
   x: e.x - n,
   y: e.y - n,
   width: n * 2,
   height: n * 2
  };
 for (let e of t.values()) Xo(i, Ko(e)) > 0 && r.push(e);
 return r
}
var xc = 250;

function Sc(e, t, n, r) {
 let i = [],
  a = 1 / 0,
  o = bc(e, n, t + xc);
 for (let n of o) {
  let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
  for (let s of o) {
   if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
   let {
    x: o,
    y: c
   } = Gs(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
   l > t || (l < a ? (i = [{
    ...s,
    x: o,
    y: c
   }], a = l) : l === a && i.push({
    ...s,
    x: o,
    y: c
   }))
  }
 }
 if (!i.length) return null;
 if (i.length > 1) {
  let e = r.type === `source` ? `target` : `source`;
  return i.find(t => t.type === e) ?? i[0]
 }
 return i[0]
}

function Cc(e, t, n, r, i, a = !1) {
 let o = r.get(e);
 if (!o) return null;
 let s = i === `strict` ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []],
  c = (n ? s?.find(e => e.id === n) : s?.[0]) ?? null;
 return c && a ? {
  ...c,
  ...Gs(o, c, c.position, !0)
 } : c
}

function wc(e, t) {
 return e || (t?.classList.contains(`target`) ? `target` : t?.classList.contains(`source`) ? `source` : null)
}

function Tc(e, t) {
 let n = null;
 return t ? n = !0 : e && !t && (n = !1), n
}
var Ec = () => !0;

function Dc(e, {
 connectionMode: t,
 connectionRadius: n,
 handleId: r,
 nodeId: i,
 edgeUpdaterType: a,
 isTarget: o,
 domNode: s,
 nodeLookup: c,
 lib: l,
 autoPanOnConnect: u,
 flowId: d,
 panBy: f,
 cancelConnection: p,
 onConnectStart: m,
 onConnect: h,
 onConnectEnd: g,
 isValidConnection: _ = Ec,
 onReconnectEnd: v,
 updateConnection: y,
 getTransform: b,
 getFromHandle: x,
 autoPanSpeed: S,
 dragThreshold: C = 1,
 handleDomNode: w
}) {
 let T = vs(e.target),
  E = 0,
  D, {
   x: O,
   y: k
  } = Ss(e),
  A = wc(a, w),
  j = s?.getBoundingClientRect(),
  M = !1;
 if (!j || !A) return;
 let N = Cc(i, A, r, c, t);
 if (!N) return;
 let P = Ss(e, j),
  F = !1,
  ee = null,
  te = !1,
  ne = null;

 function re() {
  if (!u || !j) return;
  let [e, t] = Ho(P, j, S);
  f({
   x: e,
   y: t
  }), E = requestAnimationFrame(re)
 }
 let I = {
   ...N,
   nodeId: i,
   type: A,
   position: N.position
  },
  ie = c.get(i),
  L = {
   inProgress: !0,
   isValid: null,
   from: Gs(ie, I, H.Left, !0),
   fromHandle: I,
   fromPosition: I.position,
   fromNode: ie,
   to: P,
   toHandle: null,
   toPosition: Eo[I.position],
   toNode: null,
   pointer: P
  };

 function ae() {
  M = !0, y(L), m?.(e, {
   nodeId: i,
   handleId: r,
   handleType: A
  })
 }
 C === 0 && ae();

 function oe(e) {
  if (!M) {
   let {
    x: t,
    y: n
   } = Ss(e), r = t - O, i = n - k;
   if (!(r * r + i * i > C * C)) return;
   ae()
  }
  if (!x() || !I) {
   se(e);
   return
  }
  let a = b();
  P = Ss(e, j), D = Sc(ts(P, a, !1, [1, 1]), n, c, I), F || (re(), F = !0);
  let s = Oc(e, {
   handle: D,
   connectionMode: t,
   fromNodeId: i,
   fromHandleId: r,
   fromType: o ? `target` : `source`,
   isValidConnection: _,
   doc: T,
   lib: l,
   flowId: d,
   nodeLookup: c
  });
  ne = s.handleDomNode, ee = s.connection, te = Tc(!!D, s.isValid);
  let u = c.get(i),
   f = u ? Gs(u, I, H.Left, !0) : L.from,
   p = {
    ...L,
    from: f,
    isValid: te,
    to: s.toHandle && te ? ns({
     x: s.toHandle.x,
     y: s.toHandle.y
    }, a) : P,
    toHandle: s.toHandle,
    toPosition: te && s.toHandle ? s.toHandle.position : Eo[I.position],
    toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
    pointer: P
   };
  y(p), L = p
 }

 function se(e) {
  if (!(`touches` in e && e.touches.length > 0)) {
   if (M) {
    (D || ne) && ee && te && h?.(ee);
    let {
     inProgress: t,
     ...n
    } = L, r = {
     ...n,
     toPosition: L.toHandle ? L.toPosition : null
    };
    g?.(e, r), a && v?.(e, r)
   }
   p(), cancelAnimationFrame(E), F = !1, te = !1, ee = null, ne = null, T.removeEventListener(`mousemove`, oe), T.removeEventListener(`mouseup`, se), T.removeEventListener(`touchmove`, oe), T.removeEventListener(`touchend`, se)
  }
 }
 T.addEventListener(`mousemove`, oe), T.addEventListener(`mouseup`, se), T.addEventListener(`touchmove`, oe), T.addEventListener(`touchend`, se)
}

function Oc(e, {
 handle: t,
 connectionMode: n,
 fromNodeId: r,
 fromHandleId: i,
 fromType: a,
 doc: o,
 lib: s,
 flowId: c,
 isValidConnection: l = Ec,
 nodeLookup: u
}) {
 let d = a === `target`,
  f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null,
  {
   x: p,
   y: m
  } = Ss(e),
  h = o.elementFromPoint(p, m),
  g = h?.classList.contains(`${s}-flow__handle`) ? h : f,
  _ = {
   handleDomNode: g,
   isValid: !1,
   connection: null,
   toHandle: null
  };
 if (g) {
  let e = wc(void 0, g),
   t = g.getAttribute(`data-nodeid`),
   a = g.getAttribute(`data-handleid`),
   o = g.classList.contains(`connectable`),
   s = g.classList.contains(`connectableend`);
  if (!t || !e) return _;
  let c = {
   source: d ? t : r,
   sourceHandle: d ? a : i,
   target: d ? r : t,
   targetHandle: d ? i : a
  };
  _.connection = c, _.isValid = o && s && (n === bo.Strict ? d && e === `source` || !d && e === `target` : t !== r || a !== i) && l(c), _.toHandle = Cc(t, e, a, u, n, !0)
 }
 return _
}
var kc = {
 onPointerDown: Dc,
 isValid: Oc
};

function Ac({
 domNode: e,
 panZoom: t,
 getTransform: n,
 getViewScale: r
}) {
 let i = Vt(e);

 function a({
  translateExtent: e,
  width: a,
  height: o,
  zoomStep: s = 1,
  pannable: c = !0,
  zoomable: l = !0,
  inversePan: u = !1
 }) {
  let d = e => {
    if (e.sourceEvent.type !== `wheel` || !t) return;
    let r = n(),
     i = e.sourceEvent.ctrlKey && ss() ? 10 : 1,
     a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s,
     o = r[2] * 2 ** (a * i);
    t.scaleTo(o)
   },
   f = [0, 0],
   p = ho().on(`start`, e => {
    (e.sourceEvent.type === `mousedown` || e.sourceEvent.type === `touchstart`) && (f = [e.sourceEvent.clientX ?? e.sourceEvent.touches[0].clientX, e.sourceEvent.clientY ?? e.sourceEvent.touches[0].clientY])
   }).on(`zoom`, c ? i => {
    let s = n();
    if (i.sourceEvent.type !== `mousemove` && i.sourceEvent.type !== `touchmove` || !t) return;
    let c = [i.sourceEvent.clientX ?? i.sourceEvent.touches[0].clientX, i.sourceEvent.clientY ?? i.sourceEvent.touches[0].clientY],
     l = [c[0] - f[0], c[1] - f[1]];
    f = c;
    let d = r() * Math.max(s[2], Math.log(s[2])) * (u ? -1 : 1),
     p = {
      x: s[0] - l[0] * d,
      y: s[1] - l[1] * d
     },
     m = [
      [0, 0],
      [a, o]
     ];
    t.setViewportConstrained({
     x: p.x,
     y: p.y,
     zoom: s[2]
    }, m, e)
   } : null).on(`zoom.wheel`, l ? d : null);
  i.call(p, {})
 }

 function o() {
  i.on(`zoom`, null)
 }
 return {
  update: a,
  destroy: o,
  pointer: Gt
 }
}
var jc = e => ({
  x: e.x,
  y: e.y,
  zoom: e.k
 }),
 Mc = ({
  x: e,
  y: t,
  zoom: n
 }) => io.translate(e, t).scale(n),
 Nc = (e, t) => e.target.closest(`.${t}`),
 Pc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
 Fc = e => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
 Ic = (e, t = 0, n = Fc, r = () => {}) => {
  let i = typeof t == `number` && t > 0;
  return i || r(), i ? e.transition().duration(t).ease(n).on(`end`, r) : e
 },
 Lc = e => {
  let t = e.ctrlKey && ss() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t
 };

function Rc({
 zoomPanValues: e,
 noWheelClassName: t,
 d3Selection: n,
 d3Zoom: r,
 panOnScrollMode: i,
 panOnScrollSpeed: a,
 zoomOnPinch: o,
 onPanZoomStart: s,
 onPanZoom: c,
 onPanZoomEnd: l
}) {
 return u => {
  if (Nc(u, t)) return u.ctrlKey && u.preventDefault(), !1;
  u.preventDefault(), u.stopImmediatePropagation();
  let d = n.property(`__zoom`).k || 1;
  if (u.ctrlKey && o) {
   let e = Gt(u),
    t = d * 2 ** Lc(u);
   r.scaleTo(n, t, e, u);
   return
  }
  let f = u.deltaMode === 1 ? 20 : 1,
   p = i === xo.Vertical ? 0 : u.deltaX * f,
   m = i === xo.Horizontal ? 0 : u.deltaY * f;
  !ss() && u.shiftKey && i !== xo.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, {
   internal: !0
  });
  let h = jc(n.property(`__zoom`));
  clearTimeout(e.panScrollTimeout), e.isPanScrolling ? c?.(u, h) : (e.isPanScrolling = !0, s?.(u, h)), e.panScrollTimeout = setTimeout(() => {
   l?.(u, h), e.isPanScrolling = !1
  }, 150)
 }
}

function zc({
 noWheelClassName: e,
 preventScrolling: t,
 d3ZoomHandler: n
}) {
 return function(r, i) {
  let a = r.type === `wheel`,
   o = !t && a && !r.ctrlKey,
   s = Nc(r, e);
  if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
  r.preventDefault(), n.call(this, r, i)
 }
}

function Bc({
 zoomPanValues: e,
 onDraggingChange: t,
 onPanZoomStart: n
}) {
 return r => {
  if (r.sourceEvent?.internal) return;
  let i = jc(r.transform);
  e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === `mousedown` && t(!0), n && n?.(r.sourceEvent, i)
 }
}

function Vc({
 zoomPanValues: e,
 panOnDrag: t,
 onPaneContextMenu: n,
 onTransformChange: r,
 onPanZoom: i
}) {
 return a => {
  e.usedRightMouseButton = !!(n && Pc(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([a.transform.x, a.transform.y, a.transform.k]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, jc(a.transform))
 }
}

function Hc({
 zoomPanValues: e,
 panOnDrag: t,
 panOnScroll: n,
 onDraggingChange: r,
 onPanZoomEnd: i,
 onPaneContextMenu: a
}) {
 return o => {
  if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && Pc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
   let t = jc(o.transform);
   e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
    i?.(o.sourceEvent, t)
   }, n ? 150 : 0)
  }
 }
}

function Uc({
 panActivationKeyPressed: e,
 zoomActivationKeyPressed: t,
 zoomOnScroll: n,
 zoomOnPinch: r,
 panOnDrag: i,
 panOnScroll: a,
 zoomOnDoubleClick: o,
 userSelectionActive: s,
 noWheelClassName: c,
 noPanClassName: l,
 lib: u,
 connectionInProgress: d
}) {
 return f => {
  let p = t || n,
   m = r && f.ctrlKey,
   h = f.type === `wheel`;
  if (f.button === 1 && f.type === `mousedown` && (Nc(f, `${u}-flow__node`) || Nc(f, `${u}-flow__edge`) || Nc(f, `${u}-flow__selection`) || Nc(f, `${u}-flow__nodesselection`))) return !0;
  if (!i && !p && !a && !o && !r || s || d && !h || Nc(f, c) && h || Nc(f, l) && (!h || a && h && !t) || !r && f.ctrlKey && h) return !1;
  if (!r && f.type === `touchstart` && f.touches?.length > 1) return f.preventDefault(), !1;
  if (!p && !a && !m && h || !i && (f.type === `mousedown` || f.type === `touchstart`) || Array.isArray(i) && !i.includes(f.button) && f.type === `mousedown`) return !1;
  let g = Array.isArray(i) && i.includes(f.button) || !f.button || f.button <= 1;
  return (!f.ctrlKey || h || e) && g
 }
}

function Wc({
 domNode: e,
 minZoom: t,
 maxZoom: n,
 translateExtent: r,
 viewport: i,
 onPanZoom: a,
 onPanZoomStart: o,
 onPanZoomEnd: s,
 onDraggingChange: c
}) {
 let l = {
   isZoomingOrPanning: !1,
   usedRightMouseButton: !1,
   prevViewport: {},
   mouseButton: 0,
   timerId: void 0,
   panScrollTimeout: void 0,
   isPanScrolling: !1
  },
  u = e.getBoundingClientRect(),
  d = [
   [0, 0],
   [u.width, u.height]
  ],
  f = typeof ResizeObserver < `u` ? new ResizeObserver(e => {
   let t = e[0];
   t?.contentRect && (d = [
    [0, 0],
    [t.contentRect.width, t.contentRect.height]
   ])
  }) : null;
 f?.observe(e);
 let p = ho().extent(() => d).scaleExtent([t, n]).translateExtent(r),
  m = Vt(e).call(p);
 b({
  x: i.x,
  y: i.y,
  zoom: zo(i.zoom, t, n)
 }, [
  [0, 0],
  [u.width, u.height]
 ], r);
 let h = m.on(`wheel.zoom`),
  g = m.on(`dblclick.zoom`);
 p.wheelDelta(Lc);
 async function _(e, t) {
  return m ? new Promise(n => {
   p?.interpolate(t?.interpolate === `linear` ? Vr : ti).transform(Ic(m, t?.duration, t?.ease, () => n(!0)), e)
  }) : !1
 }

 function v({
  noWheelClassName: e,
  noPanClassName: t,
  onPaneContextMenu: n,
  userSelectionActive: r,
  panOnScroll: i,
  panOnDrag: u,
  panOnScrollMode: d,
  panOnScrollSpeed: f,
  preventScrolling: _,
  zoomOnPinch: v,
  zoomOnScroll: y,
  zoomOnDoubleClick: b,
  panActivationKeyPressed: x = !1,
  zoomActivationKeyPressed: S,
  lib: C,
  onTransformChange: w,
  connectionInProgress: T,
  paneClickDistance: E,
  selectionOnDrag: D
 }) {
  r && !l.isZoomingOrPanning && p.on(`zoom`, null);
  let O = i && !S && !r;
  p.clickDistance(D ? 1 / 0 : !Qo(E) || E < 0 ? 0 : E);
  let k = O ? Rc({
   zoomPanValues: l,
   noWheelClassName: e,
   d3Selection: m,
   d3Zoom: p,
   panOnScrollMode: d,
   panOnScrollSpeed: f,
   zoomOnPinch: v,
   onPanZoomStart: o,
   onPanZoom: a,
   onPanZoomEnd: s
  }) : zc({
   noWheelClassName: e,
   preventScrolling: _,
   d3ZoomHandler: h
  });
  m.on(`wheel.zoom`, k, {
   passive: !1
  });
  let A = Bc({
   zoomPanValues: l,
   onDraggingChange: c,
   onPanZoomStart: o
  });
  p.on(`start`, A);
  let j = Vc({
   zoomPanValues: l,
   panOnDrag: u,
   onPaneContextMenu: !!n,
   onPanZoom: a,
   onTransformChange: w
  });
  p.on(`zoom`, j);
  let M = Hc({
   zoomPanValues: l,
   panOnDrag: u,
   panOnScroll: i,
   onPaneContextMenu: n,
   onPanZoomEnd: s,
   onDraggingChange: c
  });
  p.on(`end`, M);
  let N = Uc({
   panActivationKeyPressed: x,
   zoomActivationKeyPressed: S,
   panOnDrag: u,
   zoomOnScroll: y,
   panOnScroll: i,
   zoomOnDoubleClick: b,
   zoomOnPinch: v,
   userSelectionActive: r,
   noPanClassName: t,
   noWheelClassName: e,
   lib: C,
   connectionInProgress: T
  });
  p.filter(N), b ? m.on(`dblclick.zoom`, g) : m.on(`dblclick.zoom`, null)
 }

 function y() {
  p.on(`zoom`, null), f?.disconnect()
 }
 async function b(e, t, n) {
  let r = Mc(e),
   i = p?.constrain()(r, t, n);
  return i && await _(i), i
 }
 async function x(e, t) {
  let n = Mc(e);
  return await _(n, t), n
 }

 function S(e) {
  if (m) {
   let t = Mc(e),
    n = m.property(`__zoom`);
   (n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && p?.transform(m, t, null, {
    sync: !0
   })
  }
 }

 function C() {
  let e = m ? ao(m.node()) : {
   x: 0,
   y: 0,
   k: 1
  };
  return {
   x: e.x,
   y: e.y,
   zoom: e.k
  }
 }
 async function w(e, t) {
  return m ? new Promise(n => {
   p?.interpolate(t?.interpolate === `linear` ? Vr : ti).scaleTo(Ic(m, t?.duration, t?.ease, () => n(!0)), e)
  }) : !1
 }
 async function T(e, t) {
  return m ? new Promise(n => {
   p?.interpolate(t?.interpolate === `linear` ? Vr : ti).scaleBy(Ic(m, t?.duration, t?.ease, () => n(!0)), e)
  }) : !1
 }

 function E(e) {
  p?.scaleExtent(e)
 }

 function D(e) {
  p?.translateExtent(e)
 }

 function O(e) {
  let t = !Qo(e) || e < 0 ? 0 : e;
  p?.clickDistance(t)
 }
 return {
  update: v,
  destroy: y,
  setViewport: x,
  setViewportConstrained: b,
  getViewport: C,
  scaleTo: w,
  scaleBy: T,
  setScaleExtent: E,
  setTranslateExtent: D,
  syncViewport: S,
  setClickDistance: O
 }
}
var Gc;
(function(e) {
 e.Line = `line`, e.Handle = `handle`
})(Gc || (Gc = {}));

function Kc({
 width: e,
 prevWidth: t,
 height: n,
 prevHeight: r,
 affectsX: i,
 affectsY: a
}) {
 let o = e - t,
  s = n - r,
  c = [o > 0 ? 1 : o < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
 return o && i && (c[0] *= -1), s && a && (c[1] *= -1), c
}

function qc(e) {
 return {
  isHorizontal: e.includes(`right`) || e.includes(`left`),
  isVertical: e.includes(`bottom`) || e.includes(`top`),
  affectsX: e.includes(`left`),
  affectsY: e.includes(`top`)
 }
}

function Jc(e, t) {
 return Math.max(0, t - e)
}

function Yc(e, t) {
 return Math.max(0, e - t)
}

function Xc(e, t, n) {
 return Math.max(0, t - e, e - n)
}

function Zc(e, t) {
 return e ? !t : t
}

function Qc(e, t, n, r, i, a, o, s) {
 let {
  affectsX: c,
  affectsY: l
 } = t, {
  isHorizontal: u,
  isVertical: d
 } = t, f = u && d, {
  xSnapped: p,
  ySnapped: m
 } = n, {
  minWidth: h,
  maxWidth: g,
  minHeight: _,
  maxHeight: v
 } = r, {
  x: y,
  y: b,
  width: x,
  height: S,
  aspectRatio: C
 } = e, w = Math.floor(u ? p - e.pointerX : 0), T = Math.floor(d ? m - e.pointerY : 0), E = x + (c ? -w : w), D = S + (l ? -T : T), O = -a[0] * x, k = -a[1] * S, A = Xc(E, h, g), j = Xc(D, _, v);
 if (o) {
  let e = 0,
   t = 0;
  c && w < 0 ? e = Jc(y + w + O, o[0][0]) : !c && w > 0 && (e = Yc(y + E + O, o[1][0])), l && T < 0 ? t = Jc(b + T + k, o[0][1]) : !l && T > 0 && (t = Yc(b + D + k, o[1][1])), A = Math.max(A, e), j = Math.max(j, t)
 }
 if (s) {
  let e = 0,
   t = 0;
  c && w > 0 ? e = Yc(y + w, s[0][0]) : !c && w < 0 && (e = Jc(y + E, s[1][0])), l && T > 0 ? t = Yc(b + T, s[0][1]) : !l && T < 0 && (t = Jc(b + D, s[1][1])), A = Math.max(A, e), j = Math.max(j, t)
 }
 if (i) {
  if (u) {
   let e = Xc(E / C, _, v) * C;
   if (A = Math.max(A, e), o) {
    let e = 0;
    e = !c && !l || c && !l && f ? Yc(b + k + E / C, o[1][1]) * C : Jc(b + k + (c ? w : -w) / C, o[0][1]) * C, A = Math.max(A, e)
   }
   if (s) {
    let e = 0;
    e = !c && !l || c && !l && f ? Jc(b + E / C, s[1][1]) * C : Yc(b + (c ? w : -w) / C, s[0][1]) * C, A = Math.max(A, e)
   }
  }
  if (d) {
   let e = Xc(D * C, h, g) / C;
   if (j = Math.max(j, e), o) {
    let e = 0;
    e = !c && !l || l && !c && f ? Yc(y + D * C + O, o[1][0]) / C : Jc(y + (l ? T : -T) * C + O, o[0][0]) / C, j = Math.max(j, e)
   }
   if (s) {
    let e = 0;
    e = !c && !l || l && !c && f ? Jc(y + D * C, s[1][0]) / C : Yc(y + (l ? T : -T) * C, s[0][0]) / C, j = Math.max(j, e)
   }
  }
 }
 T += T < 0 ? j : -j, w += w < 0 ? A : -A, i && (f ? E > D * C ? T = (Zc(c, l) ? -w : w) / C : w = (Zc(c, l) ? -T : T) * C : u ? (T = w / C, l = c) : (w = T * C, c = l));
 let M = c ? y + w : y,
  N = l ? b + T : b;
 return {
  width: x + (c ? -w : w),
  height: S + (l ? -T : T),
  x: a[0] * w * (c ? -1 : 1) + M,
  y: a[1] * T * (l ? -1 : 1) + N
 }
}
var $c = {
  width: 0,
  height: 0,
  x: 0,
  y: 0
 },
 el = {
  ...$c,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
 };

function tl(e, t, n) {
 let r = t.position.x + e.position.x,
  i = t.position.y + e.position.y,
  a = e.measured.width ?? 0,
  o = e.measured.height ?? 0,
  s = n[0] * a,
  c = n[1] * o;
 return [
  [r - s, i - c],
  [r + a - s, i + o - c]
 ]
}

function nl({
 domNode: e,
 nodeId: t,
 getStoreItems: n,
 onChange: r,
 onEnd: i
}) {
 let a = Vt(e),
  o = {
   controlDirection: qc(`bottom-right`),
   boundaries: {
    minWidth: 0,
    minHeight: 0,
    maxWidth: Number.MAX_VALUE,
    maxHeight: Number.MAX_VALUE
   },
   resizeDirection: void 0,
   keepAspectRatio: !1
  };

 function s({
  controlPosition: e,
  boundaries: s,
  keepAspectRatio: c,
  resizeDirection: l,
  onResizeStart: u,
  onResize: d,
  onResizeEnd: f,
  shouldResize: p
 }) {
  let m = {
    ...$c
   },
   h = {
    ...el
   };
  o = {
   boundaries: s,
   resizeDirection: l,
   keepAspectRatio: c,
   controlDirection: qc(e)
  };
  let g, _ = null,
   v = [],
   y, b, x, S = an().on(`start`, e => {
    let {
     nodeLookup: r,
     transform: i,
     snapGrid: a,
     snapToGrid: o,
     nodeOrigin: s,
     paneDomNode: c
    } = n();
    if (g = r.get(t), !g) return;
    _ = c?.getBoundingClientRect() ?? null;
    let {
     xSnapped: l,
     ySnapped: d
    } = gs(e.sourceEvent, {
     transform: i,
     snapGrid: a,
     snapToGrid: o,
     containerBounds: _
    });
    m = {
     width: g.measured.width ?? 0,
     height: g.measured.height ?? 0,
     x: g.position.x ?? 0,
     y: g.position.y ?? 0
    }, h = {
     ...m,
     pointerX: l,
     pointerY: d,
     aspectRatio: m.width / m.height
    }, y = void 0, b = cs(g.extent) ? g.extent : void 0, g.parentId && (g.extent === `parent` || g.expandParent) && (y = r.get(g.parentId)), y && g.extent === `parent` && (b = [
     [0, 0],
     [y.measured.width, y.measured.height]
    ]), v = [], x = void 0;
    for (let [e, n] of r)
     if (n.parentId === t && (v.push({
       id: e,
       position: {
        ...n.position
       },
       extent: n.extent
      }), n.extent === `parent` || n.expandParent)) {
      let e = tl(n, g, n.origin ?? s);
      x = x ? [
       [Math.min(e[0][0], x[0][0]), Math.min(e[0][1], x[0][1])],
       [Math.max(e[1][0], x[1][0]), Math.max(e[1][1], x[1][1])]
      ] : e
     } u?.(e, {
     ...m
    })
   }).on(`drag`, e => {
    let {
     transform: t,
     snapGrid: i,
     snapToGrid: a,
     nodeOrigin: s
    } = n(), c = gs(e.sourceEvent, {
     transform: t,
     snapGrid: i,
     snapToGrid: a,
     containerBounds: _
    }), l = [];
    if (!g) return;
    let {
     x: u,
     y: f,
     width: S,
     height: C
    } = m, w = {}, T = g.origin ?? s, {
     width: E,
     height: D,
     x: O,
     y: k
    } = Qc(h, o.controlDirection, c, o.boundaries, o.keepAspectRatio, T, b, x), A = E !== S, j = D !== C, M = O !== u && A, N = k !== f && j;
    if (!M && !N && !A && !j) return;
    let P = {
     prevValues: {
      ...m
     },
     startX: h.x,
     startY: h.y,
     childNodes: v.map(e => ({
      ...e,
      position: {
       ...e.position
      }
     }))
    };
    if ((M || N || T[0] === 1 || T[1] === 1) && (w.x = M ? O : m.x, w.y = N ? k : m.y, m.x = w.x, m.y = w.y, v.length > 0)) {
     let e = O - u,
      t = k - f;
     for (let n of v) n.position = {
      x: n.position.x - e + T[0] * (E - S),
      y: n.position.y - t + T[1] * (D - C)
     }, l.push(n)
    }
    if ((A || j) && (w.width = A && (!o.resizeDirection || o.resizeDirection === `horizontal`) ? E : m.width, w.height = j && (!o.resizeDirection || o.resizeDirection === `vertical`) ? D : m.height, m.width = w.width, m.height = w.height), y && g.expandParent) {
     let e = T[0] * (w.width ?? 0);
     w.x && w.x < e && (m.x = e, h.x -= w.x - e);
     let t = T[1] * (w.height ?? 0);
     w.y && w.y < t && (m.y = t, h.y -= w.y - t)
    }
    let F = Kc({
      width: m.width,
      prevWidth: S,
      height: m.height,
      prevHeight: C,
      affectsX: o.controlDirection.affectsX,
      affectsY: o.controlDirection.affectsY
     }),
     ee = {
      ...m,
      direction: F
     };
    p?.(e, ee) === !1 ? (m = P.prevValues, h.x = P.startX, h.y = P.startY, v.forEach((e, t) => {
     e.position = P.childNodes[t].position
    })) : (d?.(e, ee), r(w, l))
   }).on(`end`, e => {
    f?.(e, {
     ...m
    }), i?.({
     ...m
    })
   });
  a.call(S)
 }

 function c() {
  a.on(`.drag`, null)
 }
 return {
  update: s,
  destroy: c
 }
}
var rl = o((e => {
  var t = u();

  function n(e, t) {
   return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
  }
  var r = typeof Object.is == `function` ? Object.is : n,
   i = t.useState,
   a = t.useEffect,
   o = t.useLayoutEffect,
   s = t.useDebugValue;

  function c(e, t) {
   var n = t(),
    r = i({
     inst: {
      value: n,
      getSnapshot: t
     }
    }),
    c = r[0].inst,
    u = r[1];
   return o(function() {
    c.value = n, c.getSnapshot = t, l(c) && u({
     inst: c
    })
   }, [e, n, t]), a(function() {
    return l(c) && u({
     inst: c
    }), e(function() {
     l(c) && u({
      inst: c
     })
    })
   }, [e]), s(n), n
  }

  function l(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
    var n = t();
    return !r(e, n)
   } catch {
    return !0
   }
  }

  function d(e, t) {
   return t()
  }
  var f = typeof window > `u` || window.document === void 0 || window.document.createElement === void 0 ? d : c;
  e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore
 })),
 il = o(((e, t) => {
  t.exports = rl()
 })),
 al = o((e => {
  var t = u(),
   n = il();

  function r(e, t) {
   return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
  }
  var i = typeof Object.is == `function` ? Object.is : r,
   a = n.useSyncExternalStore,
   o = t.useRef,
   s = t.useEffect,
   c = t.useMemo,
   l = t.useDebugValue;
  e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
   var d = o(null);
   if (d.current === null) {
    var f = {
     hasValue: !1,
     value: null
    };
    d.current = f
   } else f = d.current;
   d = c(function() {
    function e(e) {
     if (!a) {
      if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
       var t = f.value;
       if (u(t, e)) return s = t
      }
      return s = e
     }
     if (t = s, i(o, e)) return t;
     var n = r(e);
     return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n)
    }
    var a = !1,
     o, s, c = n === void 0 ? null : n;
    return [function() {
     return e(t())
    }, c === null ? void 0 : function() {
     return e(c())
    }]
   }, [t, n, r, u]);
   var p = a(e, d[0], d[1]);
   return s(function() {
    f.hasValue = !0, f.value = p
   }, [p]), l(p), p
  }
 })),
 ol = c(o(((e, t) => {
  t.exports = al()
 }))(), 1),
 sl = e => {
  let t, n = new Set,
   r = (e, r) => {
    let i = typeof e == `function` ? e(t) : e;
    if (!Object.is(i, t)) {
     let e = t;
     t = r ?? (typeof i != `object` || !i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
    }
   },
   i = () => t,
   a = {
    setState: r,
    getState: i,
    getInitialState: () => o,
    subscribe: e => (n.add(e), () => n.delete(e)),
    destroy: () => {
     n.clear()
    }
   },
   o = t = e(r, i, a);
  return a
 },
 cl = e => e ? sl(e) : sl,
 {
  useDebugValue: ll
 } = _.default,
 {
  useSyncExternalStoreWithSelector: ul
 } = ol.default,
 dl = e => e;

function fl(e, t = dl, n) {
 let r = ul(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
 return ll(r), r
}
var pl = (e, t) => {
  let n = cl(e),
   r = (e, r = t) => fl(n, e, r);
  return Object.assign(r, n), r
 },
 ml = (e, t) => e ? pl(e, t) : pl;

function hl(e, t) {
 if (Object.is(e, t)) return !0;
 if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
 if (e instanceof Map && t instanceof Map) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e)
   if (!Object.is(r, t.get(n))) return !1;
  return !0
 }
 if (e instanceof Set && t instanceof Set) {
  if (e.size !== t.size) return !1;
  for (let n of e)
   if (!t.has(n)) return !1;
  return !0
 }
 let n = Object.keys(e);
 if (n.length !== Object.keys(t).length) return !1;
 for (let r of n)
  if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
 return !0
}
var gl = m(),
 _l = (0, _.createContext)(null),
 vl = _l.Provider,
 yl = go.error001(`react`);

function W(e, t) {
 let n = (0, _.useContext)(_l);
 if (n === null) throw Error(yl);
 return fl(n, e, t)
}

function bl() {
 let e = (0, _.useContext)(_l);
 if (e === null) throw Error(yl);
 return (0, _.useMemo)(() => ({
  getState: e.getState,
  setState: e.setState,
  subscribe: e.subscribe
 }), [e])
}
var xl = {
  display: `none`
 },
 Sl = {
  position: `absolute`,
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: `hidden`,
  clip: `rect(0px, 0px, 0px, 0px)`,
  clipPath: `inset(100%)`
 },
 Cl = `react-flow__node-desc`,
 wl = `react-flow__edge-desc`,
 Tl = `react-flow__aria-live`,
 El = e => e.ariaLiveMessage,
 Dl = e => e.ariaLabelConfig;

function Ol({
 rfId: e
}) {
 let t = W(El);
 return (0, b.jsx)(`div`, {
  id: `${Tl}-${e}`,
  "aria-live": `assertive`,
  "aria-atomic": `true`,
  style: Sl,
  children: t
 })
}

function kl({
 rfId: e,
 disableKeyboardA11y: t
}) {
 let n = W(Dl);
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(`div`, {
   id: `${Cl}-${e}`,
   style: xl,
   children: t ? n[`node.a11yDescription.default`] : n[`node.a11yDescription.keyboardDisabled`]
  }), (0, b.jsx)(`div`, {
   id: `${wl}-${e}`,
   style: xl,
   children: n[`edge.a11yDescription.default`]
  }), !t && (0, b.jsx)(Ol, {
   rfId: e
  })]
 })
}
var Al = (0, _.forwardRef)(({
 position: e = `top-left`,
 children: t,
 className: n,
 style: r,
 ...i
}, a) => {
 let o = `${e}`.split(`-`);
 return (0, b.jsx)(`div`, {
  className: x([`react-flow__panel`, n, ...o]),
  style: r,
  ref: a,
  ...i,
  children: t
 })
});
Al.displayName = `Panel`;
var jl = `https://reactflow.dev?utm_source=attribution`;

function Ml({
 proOptions: e,
 position: t = `bottom-right`
}) {
 return (0, _.useEffect)(() => {}, []), e?.hideAttribution ? null : (0, b.jsx)(Al, {
  position: t,
  className: `react-flow__attribution`,
  "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${jl}`,
  children: (0, b.jsx)(`a`, {
   href: jl,
   target: `_blank`,
   rel: `noopener noreferrer`,
   "aria-label": `React Flow attribution`,
   children: `React Flow`
  })
 })
}
var Nl = e => {
  let t = [],
   n = [];
  for (let [, n] of e.nodeLookup) n.selected && t.push(n.internals.userNode);
  for (let [, t] of e.edgeLookup) t.selected && n.push(t);
  return {
   selectedNodes: t,
   selectedEdges: n
  }
 },
 Pl = e => e.id;

function Fl(e, t) {
 return hl(e.selectedNodes.map(Pl), t.selectedNodes.map(Pl)) && hl(e.selectedEdges.map(Pl), t.selectedEdges.map(Pl))
}

function Il({
 onSelectionChange: e
}) {
 let t = bl(),
  {
   selectedNodes: n,
   selectedEdges: r
  } = W(Nl, Fl);
 return (0, _.useEffect)(() => {
  let i = {
   nodes: n,
   edges: r
  };
  e?.(i), t.getState().onSelectionChangeHandlers.forEach(e => e(i))
 }, [n, r, e]), null
}
var Ll = e => !!e.onSelectionChangeHandlers;

function Rl({
 onSelectionChange: e
}) {
 let t = W(Ll);
 return e || t ? (0, b.jsx)(Il, {
  onSelectionChange: e
 }) : null
}
var zl = [0, 0],
 Bl = {
  x: 0,
  y: 0,
  zoom: 1
 },
 Vl = [...`nodes.edges.defaultNodes.defaultEdges.onConnect.onConnectStart.onConnectEnd.onClickConnectStart.onClickConnectEnd.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.nodesFocusable.edgesFocusable.edgesReconnectable.elevateNodesOnSelect.elevateEdgesOnSelect.minZoom.maxZoom.nodeExtent.onNodesChange.onEdgesChange.elementsSelectable.connectionMode.snapGrid.snapToGrid.translateExtent.connectOnClick.defaultEdgeOptions.fitView.fitViewOptions.onNodesDelete.onEdgesDelete.onDelete.onNodeDrag.onNodeDragStart.onNodeDragStop.onSelectionDrag.onSelectionDragStart.onSelectionDragStop.onMoveStart.onMove.onMoveEnd.noPanClassName.nodeOrigin.autoPanOnConnect.autoPanOnNodeDrag.onError.connectionRadius.isValidConnection.selectNodesOnDrag.nodeDragThreshold.connectionDragThreshold.onBeforeDelete.debug.autoPanSpeed.ariaLabelConfig.zIndexMode`.split(`.`), `rfId`],
 Hl = e => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
 }),
 Ul = {
  translateExtent: _o,
  nodeOrigin: zl,
  minZoom: .5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: `nopan`,
  rfId: `1`
 };

function Wl(e) {
 let {
  setNodes: t,
  setEdges: n,
  setMinZoom: r,
  setMaxZoom: i,
  setTranslateExtent: a,
  setNodeExtent: o,
  reset: s,
  setDefaultNodesAndEdges: c
 } = W(Hl, hl), l = bl();
 (0, _.useEffect)(() => (c(e.defaultNodes, e.defaultEdges), () => {
  u.current = Ul, s()
 }), []);
 let u = (0, _.useRef)(Ul);
 return (0, _.useEffect)(() => {
  for (let s of Vl) {
   let c = e[s];
   c !== u.current[s] && e[s] !== void 0 && (s === `nodes` ? t(c) : s === `edges` ? n(c) : s === `minZoom` ? r(c) : s === `maxZoom` ? i(c) : s === `translateExtent` ? a(c) : s === `nodeExtent` ? o(c) : s === `ariaLabelConfig` ? l.setState({
    ariaLabelConfig: ms(c)
   }) : s === `fitView` ? l.setState({
    fitViewQueued: c
   }) : s === `fitViewOptions` ? l.setState({
    fitViewOptions: c
   }) : l.setState({
    [s]: c
   }))
  }
  u.current = e
 }, Vl.map(t => e[t])), null
}

function Gl() {
 return typeof window > `u` || !window.matchMedia ? null : window.matchMedia(`(prefers-color-scheme: dark)`)
}

function Kl(e) {
 let [t, n] = (0, _.useState)(e === `system` ? null : e);
 return (0, _.useEffect)(() => {
  if (e !== `system`) {
   n(e);
   return
  }
  let t = Gl(),
   r = () => n(t?.matches ? `dark` : `light`);
  return r(), t?.addEventListener(`change`, r), () => {
   t?.removeEventListener(`change`, r)
  }
 }, [e]), t === null ? Gl()?.matches ? `dark` : `light` : t
}
var ql = typeof document < `u` ? document : null;

function Jl(e = null, t = {
 target: ql,
 actInsideInputWithModifier: !0
}) {
 let [n, r] = (0, _.useState)(!1), i = (0, _.useRef)(!1), a = (0, _.useRef)(new Set([])), [o, s] = (0, _.useMemo)(() => {
  if (e !== null) {
   let t = (Array.isArray(e) ? e : [e]).filter(e => typeof e == `string`).map(e => e.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`));
   return [t, t.reduce((e, t) => e.concat(...t), [])]
  }
  return [
   [],
   []
  ]
 }, [e]);
 return (0, _.useEffect)(() => {
  let n = t?.target ?? ql,
   c = t?.actInsideInputWithModifier ?? !0;
  if (e !== null) {
   let e = e => {
     if (i.current = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, (!i.current || i.current && !c) && bs(e)) return !1;
     let n = Xl(e.code, s);
     if (a.current.add(e[n]), Yl(o, a.current, !1)) {
      let n = e.composedPath?.()?.[0] || e.target,
       a = n?.nodeName === `BUTTON` || n?.nodeName === `A`;
      t.preventDefault !== !1 && (i.current || !a) && e.preventDefault(), r(!0)
     }
    },
    l = e => {
     let t = Xl(e.code, s);
     Yl(o, a.current, !0) ? (r(!1), a.current.clear()) : a.current.delete(e[t]), e.key === `Meta` && a.current.clear(), i.current = !1
    },
    u = () => {
     a.current.clear(), r(!1)
    };
   return n?.addEventListener(`keydown`, e), n?.addEventListener(`keyup`, l), window.addEventListener(`blur`, u), window.addEventListener(`contextmenu`, u), () => {
    n?.removeEventListener(`keydown`, e), n?.removeEventListener(`keyup`, l), window.removeEventListener(`blur`, u), window.removeEventListener(`contextmenu`, u)
   }
  }
 }, [e, r]), n
}

function Yl(e, t, n) {
 return e.filter(e => n || e.length === t.size).some(e => e.every(e => t.has(e)))
}

function Xl(e, t) {
 return t.includes(e) ? `code` : `key`
}
var Zl = () => {
 let e = bl();
 return (0, _.useMemo)(() => ({
  zoomIn: async t => {
   let {
    panZoom: n
   } = e.getState();
   return n ? n.scaleBy(1.2, t) : !1
  },
  zoomOut: async t => {
   let {
    panZoom: n
   } = e.getState();
   return n ? n.scaleBy(1 / 1.2, t) : !1
  },
  zoomTo: async (t, n) => {
   let {
    panZoom: r
   } = e.getState();
   return r ? r.scaleTo(t, n) : !1
  },
  getZoom: () => e.getState().transform[2],
  setViewport: async (t, n) => {
   let {
    transform: [r, i, a],
    panZoom: o
   } = e.getState();
   return o ? (await o.setViewport({
    x: t.x ?? r,
    y: t.y ?? i,
    zoom: t.zoom ?? a
   }, n), !0) : !1
  },
  getViewport: () => {
   let [t, n, r] = e.getState().transform;
   return {
    x: t,
    y: n,
    zoom: r
   }
  },
  setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
  fitBounds: async (t, n) => {
   let {
    width: r,
    height: i,
    minZoom: a,
    maxZoom: o,
    panZoom: s
   } = e.getState(), c = os(t, r, i, a, o, n?.padding ?? .1);
   return s ? (await s.setViewport(c, {
    duration: n?.duration,
    ease: n?.ease,
    interpolate: n?.interpolate
   }), !0) : !1
  },
  screenToFlowPosition: (t, n = {}) => {
   let {
    transform: r,
    snapGrid: i,
    snapToGrid: a,
    domNode: o
   } = e.getState();
   if (!o) return t;
   let {
    x: s,
    y: c
   } = o.getBoundingClientRect(), l = {
    x: t.x - s,
    y: t.y - c
   }, u = n.snapGrid ?? i;
   return ts(l, r, n.snapToGrid ?? a, u)
  },
  flowToScreenPosition: t => {
   let {
    transform: n,
    domNode: r
   } = e.getState();
   if (!r) return t;
   let {
    x: i,
    y: a
   } = r.getBoundingClientRect(), o = ns(t, n);
   return {
    x: o.x + i,
    y: o.y + a
   }
  }
 }), [])
};

function Ql(e, t) {
 let n = [],
  r = new Map,
  i = [];
 for (let t of e)
  if (t.type === `add`) {
   i.push(t);
   continue
  } else if (t.type === `remove` || t.type === `replace`) r.set(t.id, [t]);
 else {
  let e = r.get(t.id);
  e ? e.push(t) : r.set(t.id, [t])
 }
 for (let e of t) {
  let t = r.get(e.id);
  if (!t) {
   n.push(e);
   continue
  }
  if (t[0].type === `remove`) continue;
  if (t[0].type === `replace`) {
   n.push({
    ...t[0].item
   });
   continue
  }
  let i = {
   ...e
  };
  for (let e of t) $l(e, i);
  n.push(i)
 }
 return i.length && i.forEach(e => {
  e.index === void 0 ? n.push({
   ...e.item
  }) : n.splice(e.index, 0, {
   ...e.item
  })
 }), n
}

function $l(e, t) {
 switch (e.type) {
  case `select`:
   t.selected = e.selected;
   break;
  case `position`:
   e.position !== void 0 && (t.position = e.position), e.dragging !== void 0 && (t.dragging = e.dragging);
   break;
  case `dimensions`:
   e.dimensions !== void 0 && (t.measured = {
    ...e.dimensions
   }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === `width`) && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === `height`) && (t.height = e.dimensions.height))), typeof e.resizing == `boolean` && (t.resizing = e.resizing)
 }
}

function eu(e, t) {
 return Ql(e, t)
}

function tu(e, t) {
 return Ql(e, t)
}

function nu(e, t) {
 return {
  id: e,
  type: `select`,
  selected: t
 }
}

function ru(e, t = new Set) {
 let n = [];
 for (let [r, i] of e) {
  let e = t.has(r);
  (i.selected !== void 0 || e) && i.selected !== e && n.push(nu(i.id, e))
 }
 return n
}

function iu({
 items: e = [],
 lookup: t
}) {
 let n = [],
  r = new Map(e.map(e => [e.id, e]));
 for (let [r, i] of e.entries()) {
  let e = t.get(i.id),
   a = e?.internals?.userNode ?? e;
  a !== void 0 && a !== i && n.push({
   id: i.id,
   item: i,
   type: `replace`
  }), a === void 0 && n.push({
   item: i,
   type: `add`,
   index: r
  })
 }
 for (let [e] of t) r.get(e) === void 0 && n.push({
  id: e,
  type: `remove`
 });
 return n
}

function G(e) {
 return {
  id: e.id,
  type: `remove`
 }
}
var au = $o(`React Flow`, `https://reactflow.dev/`);

function ou(e, t, n = {}) {
 return Ns(e, t, {
  ...n,
  onError: n.onError ?? au
 })
}
var su = e => Oo(e),
 cu = e => Do(e);

function lu(e) {
 return (0, _.forwardRef)(e)
}
var uu = typeof window < `u` ? _.useLayoutEffect : _.useEffect;

function du(e) {
 let [t, n] = (0, _.useState)(BigInt(0)), [r] = (0, _.useState)(() => fu(() => n(e => e + BigInt(1))));
 return uu(() => {
  let t = r.get();
  t.length && (e(t), r.reset())
 }, [t]), r
}

function fu(e) {
 let t = [];
 return {
  get: () => t,
  reset: () => {
   t = []
  },
  push: n => {
   t.push(n), e()
  }
 }
}
var pu = (0, _.createContext)(null);

function mu({
 children: e
}) {
 let t = bl(),
  n = du((0, _.useCallback)(e => {
   let {
    nodes: n = [],
    setNodes: r,
    hasDefaultNodes: i,
    onNodesChange: a,
    nodeLookup: o,
    fitViewQueued: s,
    onNodesChangeMiddlewareMap: c
   } = t.getState(), l = n;
   for (let t of e) l = typeof t == `function` ? t(l) : t;
   let u = iu({
    items: l,
    lookup: o
   });
   for (let e of c.values()) u = e(u);
   i && r(l), u.length > 0 ? a?.(u) : s && window.requestAnimationFrame(() => {
    let {
     fitViewQueued: e,
     nodes: n,
     setNodes: r
    } = t.getState();
    e && r(n)
   })
  }, [])),
  r = du((0, _.useCallback)(e => {
   let {
    edges: n = [],
    setEdges: r,
    hasDefaultEdges: i,
    onEdgesChange: a,
    edgeLookup: o
   } = t.getState(), s = n;
   for (let t of e) s = typeof t == `function` ? t(s) : t;
   i ? r(s) : a && a(iu({
    items: s,
    lookup: o
   }))
  }, [])),
  i = (0, _.useMemo)(() => ({
   nodeQueue: n,
   edgeQueue: r
  }), []);
 return (0, b.jsx)(pu.Provider, {
  value: i,
  children: e
 })
}

function hu() {
 let e = (0, _.useContext)(pu);
 if (!e) throw Error(`useBatchContext must be used within a BatchProvider`);
 return e
}
var gu = e => !!e.panZoom;

function _u() {
 let e = Zl(),
  t = bl(),
  n = hu(),
  r = W(gu),
  i = (0, _.useMemo)(() => {
   let e = e => t.getState().nodeLookup.get(e),
    r = e => {
     n.nodeQueue.push(e)
    },
    i = e => {
     n.edgeQueue.push(e)
    },
    a = e => {
     let {
      nodeLookup: n,
      nodeOrigin: r
     } = t.getState(), i = su(e) ? e : n.get(e.id), a = i.parentId ? ds(i.position, i.measured, i.parentId, n, r) : i.position;
     return Ko({
      ...i,
      position: a,
      width: i.measured?.width ?? i.width,
      height: i.measured?.height ?? i.height
     }, i.parentId ? void 0 : r)
    },
    o = (e, t, n = {
     replace: !1
    }) => {
     r(r => r.map(r => {
      if (r.id === e) {
       let e = typeof t == `function` ? t(r) : t;
       return n.replace && su(e) ? e : {
        ...r,
        ...e
       }
      }
      return r
     }))
    },
    s = (e, t, n = {
     replace: !1
    }) => {
     i(r => r.map(r => {
      if (r.id === e) {
       let e = typeof t == `function` ? t(r) : t;
       return n.replace && cu(e) ? e : {
        ...r,
        ...e
       }
      }
      return r
     }))
    };
   return {
    getNodes: () => t.getState().nodes.map(e => ({
     ...e
    })),
    getNode: t => e(t)?.internals.userNode,
    getInternalNode: e,
    getEdges: () => {
     let {
      edges: e = []
     } = t.getState();
     return e.map(e => ({
      ...e
     }))
    },
    getEdge: e => t.getState().edgeLookup.get(e),
    setNodes: r,
    setEdges: i,
    addNodes: e => {
     let t = Array.isArray(e) ? e : [e];
     n.nodeQueue.push(e => [...e, ...t])
    },
    addEdges: e => {
     let t = Array.isArray(e) ? e : [e];
     n.edgeQueue.push(e => [...e, ...t])
    },
    toObject: () => {
     let {
      nodes: e = [],
      edges: n = [],
      transform: r
     } = t.getState(), [i, a, o] = r;
     return {
      nodes: e.map(e => ({
       ...e
      })),
      edges: n.map(e => ({
       ...e
      })),
      viewport: {
       x: i,
       y: a,
       zoom: o
      }
     }
    },
    deleteElements: async ({
     nodes: e = [],
     edges: n = []
    }) => {
     let {
      nodes: r,
      edges: i,
      onNodesDelete: a,
      onEdgesDelete: o,
      triggerNodeChanges: s,
      triggerEdgeChanges: c,
      onDelete: l,
      onBeforeDelete: u
     } = t.getState(), {
      nodes: d,
      edges: f
     } = await Ro({
      nodesToRemove: e,
      edgesToRemove: n,
      nodes: r,
      edges: i,
      onBeforeDelete: u
     }), p = f.length > 0, m = d.length > 0;
     if (p) {
      let e = f.map(G);
      o?.(f), c(e)
     }
     if (m) {
      let e = d.map(G);
      a?.(d), s(e)
     }
     return (m || p) && l?.({
      nodes: d,
      edges: f
     }), {
      deletedNodes: d,
      deletedEdges: f
     }
    },
    getIntersectingNodes: (e, n = !0, r) => {
     let i = Zo(e),
      o = i ? e : a(e),
      s = r !== void 0;
     if (!o) return [];
     let {
      nodeOrigin: c
     } = t.getState();
     return (r || t.getState().nodes).filter(r => {
      let a = t.getState().nodeLookup.get(r.id);
      if (a && !i && (r.id === e.id || !a.internals.positionAbsolute)) return !1;
      let l = Ko(s ? r : a, c),
       u = Xo(l, o);
      return n && u > 0 || u >= l.width * l.height || u >= o.width * o.height
     })
    },
    isNodeIntersecting: (e, t, n = !0) => {
     let r = Zo(e) ? e : a(e);
     if (!r) return !1;
     let i = Xo(r, t);
     return n && i > 0 || i >= t.width * t.height || i >= r.width * r.height
    },
    updateNode: o,
    updateNodeData: (e, t, n = {
     replace: !1
    }) => {
     o(e, e => {
      let r = typeof t == `function` ? t(e) : t;
      return n.replace ? {
       ...e,
       data: r
      } : {
       ...e,
       data: {
        ...e.data,
        ...r
       }
      }
     }, n)
    },
    updateEdge: s,
    updateEdgeData: (e, t, n = {
     replace: !1
    }) => {
     s(e, e => {
      let r = typeof t == `function` ? t(e) : t;
      return n.replace ? {
       ...e,
       data: r
      } : {
       ...e,
       data: {
        ...e.data,
        ...r
       }
      }
     }, n)
    },
    getNodesBounds: e => {
     let {
      nodeLookup: n,
      nodeOrigin: r
     } = t.getState();
     return jo(e, {
      nodeLookup: n,
      nodeOrigin: r
     })
    },
    getHandleConnections: ({
     type: e,
     id: n,
     nodeId: r
    }) => Array.from(t.getState().connectionLookup.get(`${r}-${e}${n?`-${n}`:``}`)?.values() ?? []),
    getNodeConnections: ({
     type: e,
     handleId: n,
     nodeId: r
    }) => Array.from(t.getState().connectionLookup.get(`${r}${e?n?`-${e}-${n}`:`-${e}`:``}`)?.values() ?? []),
    fitView: async e => {
     let r = t.getState().fitViewResolver ?? ps();
     return t.setState({
      fitViewQueued: !0,
      fitViewOptions: e,
      fitViewResolver: r
     }), n.nodeQueue.push(e => [...e]), r.promise
    }
   }
  }, []);
 return (0, _.useMemo)(() => ({
  ...i,
  ...e,
  viewportInitialized: r
 }), [r])
}
var vu = e => e.selected,
 yu = typeof window < `u` ? window : void 0;

function bu({
 deleteKeyCode: e,
 multiSelectionKeyCode: t
}) {
 let n = bl(),
  {
   deleteElements: r
  } = _u(),
  i = Jl(e, {
   actInsideInputWithModifier: !1
  }),
  a = Jl(t, {
   target: yu
  });
 (0, _.useEffect)(() => {
  if (i) {
   let {
    edges: e,
    nodes: t
   } = n.getState();
   r({
    nodes: t.filter(vu),
    edges: e.filter(vu)
   }), n.setState({
    nodesSelectionActive: !1
   })
  }
 }, [i]), (0, _.useEffect)(() => {
  n.setState({
   multiSelectionActive: a
  })
 }, [a])
}

function xu(e) {
 let t = bl();
 (0, _.useEffect)(() => {
  let n = () => {
   if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
   let n = _s(e.current);
   (n.height === 0 || n.width === 0) && t.getState().onError?.(`004`, go.error004()), t.setState({
    width: n.width || 500,
    height: n.height || 500
   })
  };
  if (e.current) {
   n(), window.addEventListener(`resize`, n);
   let t = new ResizeObserver(() => n());
   return t.observe(e.current), () => {
    window.removeEventListener(`resize`, n), t.disconnect()
   }
  }
 }, [])
}
var Su = {
  position: `absolute`,
  width: `100%`,
  height: `100%`,
  top: 0,
  left: 0
 },
 Cu = e => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
 });

function wu({
 onPaneContextMenu: e,
 zoomOnScroll: t = !0,
 zoomOnPinch: n = !0,
 panOnScroll: r = !1,
 panActivationKeyPressed: i,
 panOnScrollSpeed: a = .5,
 panOnScrollMode: o = xo.Free,
 zoomOnDoubleClick: s = !0,
 panOnDrag: c = !0,
 defaultViewport: l,
 translateExtent: u,
 minZoom: d,
 maxZoom: f,
 zoomActivationKeyCode: p,
 preventScrolling: m = !0,
 children: h,
 noWheelClassName: g,
 noPanClassName: v,
 onViewportChange: y,
 isControlledViewport: x,
 paneClickDistance: S,
 selectionOnDrag: C
}) {
 let w = bl(),
  T = (0, _.useRef)(null),
  {
   userSelectionActive: E,
   lib: D,
   connectionInProgress: O
  } = W(Cu, hl),
  k = Jl(p),
  A = (0, _.useRef)();
 xu(T);
 let j = (0, _.useCallback)(e => {
  y?.({
   x: e[0],
   y: e[1],
   zoom: e[2]
  }), x || w.setState({
   transform: e
  })
 }, [y, x]);
 return (0, _.useEffect)(() => {
  if (T.current) {
   A.current = Wc({
    domNode: T.current,
    minZoom: d,
    maxZoom: f,
    translateExtent: u,
    viewport: l,
    onDraggingChange: e => w.setState(t => t.paneDragging === e ? t : {
     paneDragging: e
    }),
    onPanZoomStart: (e, t) => {
     let {
      onViewportChangeStart: n,
      onMoveStart: r
     } = w.getState();
     r?.(e, t), n?.(t)
    },
    onPanZoom: (e, t) => {
     let {
      onViewportChange: n,
      onMove: r
     } = w.getState();
     r?.(e, t), n?.(t)
    },
    onPanZoomEnd: (e, t) => {
     let {
      onViewportChangeEnd: n,
      onMoveEnd: r
     } = w.getState();
     r?.(e, t), n?.(t)
    }
   });
   let {
    x: e,
    y: t,
    zoom: n
   } = A.current.getViewport();
   return w.setState({
    panZoom: A.current,
    transform: [e, t, n],
    domNode: T.current.closest(`.react-flow`)
   }), () => {
    A.current?.destroy()
   }
  }
 }, []), (0, _.useEffect)(() => {
  A.current?.update({
   onPaneContextMenu: e,
   zoomOnScroll: t,
   zoomOnPinch: n,
   panOnScroll: r,
   panActivationKeyPressed: i,
   panOnScrollSpeed: a,
   panOnScrollMode: o,
   zoomOnDoubleClick: s,
   panOnDrag: c,
   zoomActivationKeyPressed: k,
   preventScrolling: m,
   noPanClassName: v,
   userSelectionActive: E,
   noWheelClassName: g,
   lib: D,
   onTransformChange: j,
   connectionInProgress: O,
   selectionOnDrag: C,
   paneClickDistance: S
  })
 }, [e, t, n, r, i, a, o, s, c, k, m, v, E, g, D, j, O, C, S]), (0, b.jsx)(`div`, {
  className: `react-flow__renderer`,
  ref: T,
  style: Su,
  children: h
 })
}
var Tu = e => ({
 userSelectionActive: e.userSelectionActive,
 userSelectionRect: e.userSelectionRect
});

function Eu() {
 let {
  userSelectionActive: e,
  userSelectionRect: t
 } = W(Tu, hl);
 return e && t ? (0, b.jsx)(`div`, {
  className: `react-flow__selection react-flow__container`,
  style: {
   width: t.width,
   height: t.height,
   transform: `translate(${t.x}px, ${t.y}px)`
  }
 }) : null
}
var Du = (e, t) => n => {
  n.target === t.current && e?.(n)
 },
 Ou = e => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  dragging: e.paneDragging,
  panBy: e.panBy,
  autoPanSpeed: e.autoPanSpeed
 });

function ku({
 isSelecting: e,
 selectionKeyPressed: t,
 selectionMode: n = So.Full,
 panOnDrag: r,
 autoPanOnSelection: i,
 paneClickDistance: a,
 selectionOnDrag: o,
 onSelectionStart: s,
 onSelectionEnd: c,
 onPaneClick: l,
 onPaneContextMenu: u,
 onPaneScroll: d,
 onPaneMouseEnter: f,
 onPaneMouseMove: p,
 onPaneMouseLeave: m,
 children: h
}) {
 let g = (0, _.useRef)(0),
  v = bl(),
  {
   userSelectionActive: y,
   elementsSelectable: S,
   dragging: C,
   panBy: w,
   autoPanSpeed: T
  } = W(Ou, hl),
  E = S && (e || y),
  D = (0, _.useRef)(null),
  O = (0, _.useRef)(),
  k = (0, _.useRef)(new Set),
  A = (0, _.useRef)(new Set),
  j = (0, _.useRef)(!1),
  M = (0, _.useRef)(!1),
  N = (0, _.useRef)({
   x: 0,
   y: 0
  }),
  P = (0, _.useRef)(!1),
  F = e => {
   if (M.current || j.current || v.getState().connection.inProgress) {
    M.current = !1, j.current = !1;
    return
   }
   let {
    connectionClickStartHandle: t,
    connection: n,
    onClickConnectEnd: r,
    resetSelectedElements: i
   } = v.getState();
   if (t) {
    let t = structuredClone(n);
    delete t.inProgress, t.toPosition = t.toHandle ? t.toHandle.position : null, r?.(e.nativeEvent, t), v.setState({
     connectionClickStartHandle: null
    })
   }
   l?.(e), i(), v.setState({
    nodesSelectionActive: !1
   })
  },
  ee = e => {
   Array.isArray(r) && r?.includes(2) ? e.preventDefault() : u?.(e)
  },
  te = d ? e => d(e) : void 0,
  ne = e => {
   M.current && (e.stopPropagation(), M.current = !1)
  },
  re = n => {
   if (n.pointerType === `touch` && r !== !1 && !t) return;
   let {
    domNode: i,
    transform: a
   } = v.getState();
   if (O.current = i?.getBoundingClientRect(), !O.current) return;
   let s = n.target === D.current;
   if (!s && n.target.closest(`.nokey`) || !e || !(o && s || t) || n.button !== 0 || !n.isPrimary) return;
   n.target?.setPointerCapture?.(n.pointerId), M.current = !1;
   let {
    x: c,
    y: l
   } = Ss(n.nativeEvent, O.current), u = ts({
    x: c,
    y: l
   }, a);
   v.setState({
    userSelectionRect: {
     width: 0,
     height: 0,
     startX: u.x,
     startY: u.y,
     x: c,
     y: l
    }
   }), s || (n.stopPropagation(), n.preventDefault())
  };

 function I(e, t) {
  let {
   userSelectionRect: r
  } = v.getState();
  if (!r) return;
  let {
   transform: i,
   nodeLookup: a,
   edgeLookup: o,
   connectionLookup: s,
   triggerNodeChanges: c,
   triggerEdgeChanges: l,
   defaultEdgeOptions: u
  } = v.getState(), d = {
   x: r.startX,
   y: r.startY
  }, {
   x: f,
   y: p
  } = ns(d, i), m = {
   startX: d.x,
   startY: d.y,
   x: e < f ? e : f,
   y: t < p ? t : p,
   width: Math.abs(e - f),
   height: Math.abs(t - p)
  }, h = k.current, g = A.current;
  k.current = new Set(No(a, m, i, n === So.Partial, !0).map(e => e.id)), A.current = new Set;
  let _ = u?.selectable ?? !0;
  for (let e of k.current) {
   let t = s.get(e);
   if (t)
    for (let {
      edgeId: e
     }
     of t.values()) {
     let t = o.get(e);
     t && (t.selectable ?? _) && A.current.add(e)
    }
  }
  fs(h, k.current) || c(ru(a, k.current)), fs(g, A.current) || l(ru(o, A.current)), v.setState({
   userSelectionRect: m,
   userSelectionActive: !0,
   nodesSelectionActive: !1
  })
 }

 function ie() {
  if (!i || !O.current) return;
  let [e, t] = Ho(N.current, O.current, T);
  w({
   x: e,
   y: t
  }).then(e => {
   if (!M.current || !e) {
    g.current = requestAnimationFrame(ie);
    return
   }
   let {
    x: t,
    y: n
   } = N.current;
   I(t, n), g.current = requestAnimationFrame(ie)
  })
 }
 let L = () => {
  cancelAnimationFrame(g.current), g.current = 0, P.current = !1
 };
 (0, _.useEffect)(() => () => L(), []);
 let ae = e => {
   let {
    userSelectionRect: n,
    transform: r,
    resetSelectedElements: i
   } = v.getState();
   if (!O.current || !n) return;
   let {
    x: o,
    y: c
   } = Ss(e.nativeEvent, O.current);
   N.current = {
    x: o,
    y: c
   };
   let l = ns({
    x: n.startX,
    y: n.startY
   }, r);
   if (!M.current) {
    let n = t ? 0 : a;
    if (Math.hypot(o - l.x, c - l.y) <= n) return;
    i(), s?.(e)
   }
   M.current = !0, P.current || (ie(), P.current = !0), I(o, c)
  },
  oe = e => {
   E ? e.button === 0 && (e.target?.releasePointerCapture?.(e.pointerId), !y && e.target === D.current && v.getState().userSelectionRect && F?.(e), v.setState({
    userSelectionActive: !1,
    userSelectionRect: null
   }), M.current && (c?.(e), v.setState({
    nodesSelectionActive: k.current.size > 0
   })), L()) : e.target === D.current && v.getState().connection.inProgress && (j.current = !0)
  },
  se = e => {
   e.target?.releasePointerCapture?.(e.pointerId), L()
  },
  ce = r === !0 || Array.isArray(r) && r.includes(0);
 return (0, b.jsxs)(`div`, {
  className: x([`react-flow__pane`, {
   draggable: ce,
   dragging: C,
   selection: e
  }]),
  onClick: E ? void 0 : Du(F, D),
  onContextMenu: Du(ee, D),
  onWheel: Du(te, D),
  onPointerEnter: E ? void 0 : f,
  onPointerMove: E ? ae : p,
  onPointerUp: oe,
  onPointerCancel: E ? se : void 0,
  onPointerDownCapture: E ? re : void 0,
  onClickCapture: E ? ne : void 0,
  onPointerLeave: m,
  ref: D,
  style: Su,
  children: [h, (0, b.jsx)(Eu, {})]
 })
}

function Au({
 id: e,
 store: t,
 unselect: n = !1,
 nodeRef: r
}) {
 let {
  addSelectedNodes: i,
  unselectNodesAndEdges: a,
  multiSelectionActive: o,
  nodeLookup: s,
  onError: c
 } = t.getState(), l = s.get(e);
 l ? (t.setState({
  nodesSelectionActive: !1
 }), l.selected ? (n || l.selected && o) && (a({
  nodes: [l],
  edges: []
 }), requestAnimationFrame(() => r?.current?.blur())) : i([e])) : c?.(`012`, go.error012(e))
}

function ju({
 nodeRef: e,
 disabled: t = !1,
 noDragClassName: n,
 handleSelector: r,
 nodeId: i,
 isSelectable: a,
 nodeClickDistance: o
}) {
 let s = bl(),
  [c, l] = (0, _.useState)(!1),
  u = (0, _.useRef)();
 return (0, _.useEffect)(() => {
  if (!t) return u.current = yc({
   getStoreItems: () => s.getState(),
   onNodeMouseDown: t => {
    Au({
     id: t,
     store: s,
     nodeRef: e
    })
   },
   onDragStart: () => {
    l(!0)
   },
   onDragStop: () => {
    l(!1)
   }
  }), () => {
   u.current?.destroy(), u.current = void 0
  }
 }, [t, s, e]), (0, _.useEffect)(() => {
  !t && e.current && u.current && u.current.update({
   noDragClassName: n,
   handleSelector: r,
   domNode: e.current,
   isSelectable: a,
   nodeId: i,
   nodeClickDistance: o
  })
 }, [n, r, t, a, e, i, o]), c
}
var Mu = e => t => t.selected && (t.draggable || e && t.draggable === void 0);

function Nu() {
 let e = bl();
 return (0, _.useCallback)(t => {
  let {
   nodeExtent: n,
   snapToGrid: r,
   snapGrid: i,
   nodesDraggable: a,
   onError: o,
   updateNodePositions: s,
   nodeLookup: c,
   nodeOrigin: l
  } = e.getState(), u = new Map, d = Mu(a), f = r ? i[0] : 5, p = r ? i[1] : 5, m = t.direction.x * f * t.factor, h = t.direction.y * p * t.factor;
  for (let [, e] of c) {
   if (!d(e)) continue;
   let t = {
    x: e.internals.positionAbsolute.x + m,
    y: e.internals.positionAbsolute.y + h
   };
   r && (t = es(t, i));
   let {
    position: a,
    positionAbsolute: s
   } = Lo({
    nodeId: e.id,
    nextPosition: t,
    nodeLookup: c,
    nodeExtent: n,
    nodeOrigin: l,
    onError: o
   });
   e.position = a, e.internals.positionAbsolute = s, u.set(e.id, e)
  }
  s(u)
 }, [])
}
var Pu = (0, _.createContext)(null),
 Fu = Pu.Provider;
Pu.Consumer;
var Iu = () => (0, _.useContext)(Pu),
 Lu = e => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
 }),
 Ru = (0, _.createContext)(null);

function zu({
 children: e
}) {
 let t = W(Lu, hl);
 return (0, b.jsx)(Ru.Provider, {
  value: t,
  children: e
 })
}

function Bu() {
 let e = (0, _.useContext)(Ru);
 if (!e) throw Error(`useHandleConfig must be used within a HandleConfigProvider`);
 return e
}
var Vu = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
 },
 Hu = (e, t, n) => r => {
  let {
   connectionClickStartHandle: i,
   connectionMode: a,
   connection: o
  } = r, {
   fromHandle: s,
   toHandle: c,
   isValid: l
  } = o;
  if (!s && !i) return Vu;
  let u = c?.nodeId === e && c?.id === t && c?.type === n;
  return {
   connectingFrom: s?.nodeId === e && s?.id === t && s?.type === n,
   connectingTo: u,
   clickConnecting: i?.nodeId === e && i?.id === t && i?.type === n,
   isPossibleEndHandle: a === bo.Strict ? s?.type !== n : e !== s?.nodeId || t !== s?.id,
   connectionInProcess: !!s,
   clickConnectionInProcess: !!i,
   valid: u && l
  }
 };

function Uu({
 type: e = `source`,
 position: t = H.Top,
 isValidConnection: n,
 isConnectable: r = !0,
 isConnectableStart: i = !0,
 isConnectableEnd: a = !0,
 id: o,
 onConnect: s,
 children: c,
 className: l,
 onMouseDown: u,
 onTouchStart: d,
 ...f
}, p) {
 let m = o || null,
  h = e === `target`,
  g = bl(),
  _ = Iu(),
  {
   connectOnClick: v,
   noPanClassName: y,
   rfId: S
  } = Bu(),
  {
   connectingFrom: C,
   connectingTo: w,
   clickConnecting: T,
   isPossibleEndHandle: E,
   connectionInProcess: D,
   clickConnectionInProcess: O,
   valid: k
  } = W(Hu(_, m, e), hl);
 _ || g.getState().onError?.(`010`, go.error010());
 let A = e => {
   let {
    defaultEdgeOptions: t,
    onConnect: n,
    hasDefaultEdges: r
   } = g.getState(), i = {
    ...t,
    ...e
   };
   if (r) {
    let {
     edges: e,
     setEdges: t,
     onError: n
    } = g.getState();
    t(ou(i, e, {
     onError: n
    }))
   }
   n?.(i), s?.(i)
  },
  j = e => {
   if (!_) return;
   let t = xs(e.nativeEvent);
   if (i && (t && e.button === 0 || !t)) {
    let t = g.getState();
    kc.onPointerDown(e.nativeEvent, {
     handleDomNode: e.currentTarget,
     autoPanOnConnect: t.autoPanOnConnect,
     connectionMode: t.connectionMode,
     connectionRadius: t.connectionRadius,
     domNode: t.domNode,
     nodeLookup: t.nodeLookup,
     lib: t.lib,
     isTarget: h,
     handleId: m,
     nodeId: _,
     flowId: t.rfId,
     panBy: t.panBy,
     cancelConnection: t.cancelConnection,
     onConnectStart: t.onConnectStart,
     onConnectEnd: (...e) => g.getState().onConnectEnd?.(...e),
     updateConnection: t.updateConnection,
     onConnect: A,
     isValidConnection: n || ((...e) => g.getState().isValidConnection?.(...e) ?? !0),
     getTransform: () => g.getState().transform,
     getFromHandle: () => g.getState().connection.fromHandle,
     autoPanSpeed: t.autoPanSpeed,
     dragThreshold: t.connectionDragThreshold
    })
   }
   t ? u?.(e) : d?.(e)
  };
 return (0, b.jsx)(`div`, {
  "data-handleid": m,
  "data-nodeid": _,
  "data-handlepos": t,
  "data-id": `${S}-${_}-${m}-${e}`,
  className: x([`react-flow__handle`, `react-flow__handle-${t}`, `nodrag`, y, l, {
   source: !h,
   target: h,
   connectable: r,
   connectablestart: i,
   connectableend: a,
   clickconnecting: T,
   connectingfrom: C,
   connectingto: w,
   valid: k,
   connectionindicator: r && (!D || E) && (D || O ? a : i)
  }]),
  onMouseDown: j,
  onTouchStart: j,
  onClick: v ? t => {
   let {
    onClickConnectStart: r,
    onClickConnectEnd: a,
    connectionClickStartHandle: o,
    connectionMode: s,
    isValidConnection: c,
    lib: l,
    rfId: u,
    nodeLookup: d,
    connection: f
   } = g.getState();
   if (!_ || !o && !i) return;
   if (!o) {
    r?.(t.nativeEvent, {
     nodeId: _,
     handleId: m,
     handleType: e
    }), g.setState({
     connectionClickStartHandle: {
      nodeId: _,
      type: e,
      id: m
     }
    });
    return
   }
   let p = vs(t.target),
    h = n || c,
    {
     connection: v,
     isValid: y
    } = kc.isValid(t.nativeEvent, {
     handle: {
      nodeId: _,
      id: m,
      type: e
     },
     connectionMode: s,
     fromNodeId: o.nodeId,
     fromHandleId: o.id || null,
     fromType: o.type,
     isValidConnection: h,
     flowId: u,
     doc: p,
     lib: l,
     nodeLookup: d
    });
   y && v && A(v);
   let b = structuredClone(f);
   delete b.inProgress, b.toPosition = b.toHandle ? b.toHandle.position : null, a?.(t, b), g.setState({
    connectionClickStartHandle: null
   })
  } : void 0,
  ref: p,
  ...f,
  children: c
 })
}
var Wu = (0, _.memo)(lu(Uu));

function Gu({
 data: e,
 isConnectable: t,
 sourcePosition: n = H.Bottom
}) {
 return (0, b.jsxs)(b.Fragment, {
  children: [e?.label, (0, b.jsx)(Wu, {
   type: `source`,
   position: n,
   isConnectable: t
  })]
 })
}

function Ku({
 data: e,
 isConnectable: t,
 targetPosition: n = H.Top,
 sourcePosition: r = H.Bottom
}) {
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(Wu, {
   type: `target`,
   position: n,
   isConnectable: t
  }), e?.label, (0, b.jsx)(Wu, {
   type: `source`,
   position: r,
   isConnectable: t
  })]
 })
}

function qu() {
 return null
}

function Ju({
 data: e,
 isConnectable: t,
 targetPosition: n = H.Top
}) {
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(Wu, {
   type: `target`,
   position: n,
   isConnectable: t
  }), e?.label]
 })
}
var Yu = {
  ArrowUp: {
   x: 0,
   y: -1
  },
  ArrowDown: {
   x: 0,
   y: 1
  },
  ArrowLeft: {
   x: -1,
   y: 0
  },
  ArrowRight: {
   x: 1,
   y: 0
  }
 },
 Xu = {
  input: Gu,
  default: Ku,
  output: Ju,
  group: qu
 };

function Zu(e) {
 return e.internals.handleBounds === void 0 ? {
  width: e.width ?? e.initialWidth ?? e.style?.width,
  height: e.height ?? e.initialHeight ?? e.style?.height
 } : {
  width: e.width ?? e.style?.width,
  height: e.height ?? e.style?.height
 }
}
var Qu = e => {
 let {
  width: t,
  height: n,
  x: r,
  y: i
 } = Mo(e.nodeLookup, {
  filter: e => !!e.selected
 });
 return {
  width: Qo(t) ? t : null,
  height: Qo(n) ? n : null,
  userSelectionActive: e.userSelectionActive,
  transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`
 }
};

function $u({
 onSelectionContextMenu: e,
 noPanClassName: t,
 disableKeyboardA11y: n
}) {
 let r = bl(),
  {
   width: i,
   height: a,
   transformString: o,
   userSelectionActive: s
  } = W(Qu, hl),
  c = Nu(),
  l = (0, _.useRef)(null);
 (0, _.useEffect)(() => {
  n || l.current?.focus({
   preventScroll: !0
  })
 }, [n]);
 let u = !s && i !== null && a !== null;
 if (ju({
   nodeRef: l,
   disabled: !u
  }), !u) return null;
 let d = e ? t => {
  e(t, r.getState().nodes.filter(e => e.selected))
 } : void 0;
 return (0, b.jsx)(`div`, {
  className: x([`react-flow__nodesselection`, `react-flow__container`, t]),
  style: {
   transform: o
  },
  children: (0, b.jsx)(`div`, {
   ref: l,
   className: `react-flow__nodesselection-rect`,
   onContextMenu: d,
   tabIndex: n ? void 0 : -1,
   onKeyDown: n ? void 0 : e => {
    Object.prototype.hasOwnProperty.call(Yu, e.key) && (e.preventDefault(), c({
     direction: Yu[e.key],
     factor: e.shiftKey ? 4 : 1
    }))
   },
   style: {
    width: i,
    height: a
   }
  })
 })
}
var K = typeof window < `u` ? window : void 0,
 ed = e => ({
  nodesSelectionActive: e.nodesSelectionActive,
  userSelectionActive: e.userSelectionActive
 });

function q({
 children: e,
 onPaneClick: t,
 onPaneMouseEnter: n,
 onPaneMouseMove: r,
 onPaneMouseLeave: i,
 onPaneContextMenu: a,
 onPaneScroll: o,
 paneClickDistance: s,
 deleteKeyCode: c,
 selectionKeyCode: l,
 selectionOnDrag: u,
 selectionMode: d,
 onSelectionStart: f,
 onSelectionEnd: p,
 multiSelectionKeyCode: m,
 panActivationKeyCode: h,
 zoomActivationKeyCode: g,
 elementsSelectable: _,
 zoomOnScroll: v,
 zoomOnPinch: y,
 panOnScroll: x,
 panOnScrollSpeed: S,
 panOnScrollMode: C,
 zoomOnDoubleClick: w,
 panOnDrag: T,
 autoPanOnSelection: E,
 defaultViewport: D,
 translateExtent: O,
 minZoom: k,
 maxZoom: A,
 preventScrolling: j,
 onSelectionContextMenu: M,
 noWheelClassName: N,
 noPanClassName: P,
 disableKeyboardA11y: F,
 onViewportChange: ee,
 isControlledViewport: te
}) {
 let {
  nodesSelectionActive: ne,
  userSelectionActive: re
 } = W(ed, hl), I = Jl(l, {
  target: K
 }), ie = Jl(h, {
  target: K
 }), L = ie || T, ae = ie || x, oe = u && L !== !0, se = I || re || oe;
 return bu({
  deleteKeyCode: c,
  multiSelectionKeyCode: m
 }), (0, b.jsx)(wu, {
  onPaneContextMenu: a,
  elementsSelectable: _,
  zoomOnScroll: v,
  zoomOnPinch: y,
  panOnScroll: ae,
  panActivationKeyPressed: ie,
  panOnScrollSpeed: S,
  panOnScrollMode: C,
  zoomOnDoubleClick: w,
  panOnDrag: !I && L,
  defaultViewport: D,
  translateExtent: O,
  minZoom: k,
  maxZoom: A,
  zoomActivationKeyCode: g,
  preventScrolling: j,
  noWheelClassName: N,
  noPanClassName: P,
  onViewportChange: ee,
  isControlledViewport: te,
  paneClickDistance: s,
  selectionOnDrag: oe,
  children: (0, b.jsxs)(ku, {
   onSelectionStart: f,
   onSelectionEnd: p,
   onPaneClick: t,
   onPaneMouseEnter: n,
   onPaneMouseMove: r,
   onPaneMouseLeave: i,
   onPaneContextMenu: a,
   onPaneScroll: o,
   panOnDrag: L,
   autoPanOnSelection: E,
   isSelecting: !!se,
   selectionMode: d,
   selectionKeyPressed: I,
   paneClickDistance: s,
   selectionOnDrag: oe,
   children: [e, ne && (0, b.jsx)($u, {
    onSelectionContextMenu: M,
    noPanClassName: P,
    disableKeyboardA11y: F
   })]
  })
 })
}
q.displayName = `FlowRenderer`;
var J = (0, _.memo)(q),
 td = e => t => e ? No(t.nodeLookup, {
  x: 0,
  y: 0,
  width: t.width,
  height: t.height
 }, t.transform, !0).map(e => e.id) : Array.from(t.nodeLookup.keys());

function nd(e) {
 return W((0, _.useCallback)(td(e), [e]), hl)
}
var rd = e => e.updateNodeInternals;

function id() {
 let e = W(rd),
  [t] = (0, _.useState)(() => typeof ResizeObserver > `u` ? null : new ResizeObserver(t => {
   let n = new Map;
   t.forEach(e => {
    let t = e.target.getAttribute(`data-id`);
    n.set(t, {
     id: t,
     nodeElement: e.target,
     force: !0
    })
   }), e(n)
  }));
 return (0, _.useEffect)(() => () => {
  t?.disconnect()
 }, [t]), t
}

function ad({
 node: e,
 nodeType: t,
 hasDimensions: n,
 resizeObserver: r
}) {
 let i = bl(),
  a = (0, _.useRef)(null),
  o = (0, _.useRef)(null),
  s = (0, _.useRef)(e.sourcePosition),
  c = (0, _.useRef)(e.targetPosition),
  l = (0, _.useRef)(t),
  u = n && !!e.internals.handleBounds;
 return (0, _.useEffect)(() => {
  !a.current || e.hidden || u && o.current === a.current || (o.current && r?.unobserve(o.current), r?.observe(a.current), o.current = a.current)
 }, [u, e.hidden]), (0, _.useEffect)(() => () => {
  o.current && (r?.unobserve(o.current), o.current = null)
 }, []), (0, _.useEffect)(() => {
  if (a.current) {
   let n = l.current !== t,
    r = s.current !== e.sourcePosition,
    o = c.current !== e.targetPosition;
   (n || r || o) && (l.current = t, s.current = e.sourcePosition, c.current = e.targetPosition, i.getState().updateNodeInternals(new Map([
    [e.id, {
     id: e.id,
     nodeElement: a.current,
     force: !0
    }]
   ])))
  }
 }, [e.id, t, e.sourcePosition, e.targetPosition]), a
}

function od({
 id: e,
 onClick: t,
 onMouseEnter: n,
 onMouseMove: r,
 onMouseLeave: i,
 onContextMenu: a,
 onDoubleClick: o,
 nodesDraggable: s,
 elementsSelectable: c,
 nodesConnectable: l,
 nodesFocusable: u,
 resizeObserver: d,
 noDragClassName: f,
 noPanClassName: p,
 disableKeyboardA11y: m,
 rfId: h,
 nodeTypes: g,
 nodeClickDistance: _,
 onError: v
}) {
 let {
  node: y,
  internals: S,
  isParent: C
 } = W(t => {
  let n = t.nodeLookup.get(e),
   r = t.parentLookup.has(e);
  return {
   node: n,
   internals: n.internals,
   isParent: r
  }
 }, hl), w = y.type || `default`, T = g?.[w] || Xu[w];
 T === void 0 && (v?.(`003`, go.error003(w)), w = `default`, T = g?.default || Xu.default);
 let E = !!(y.draggable || s && y.draggable === void 0),
  D = !!(y.selectable || c && y.selectable === void 0),
  O = !!(y.connectable || l && y.connectable === void 0),
  k = !!(y.focusable || u && y.focusable === void 0),
  A = bl(),
  j = us(y),
  M = ad({
   node: y,
   nodeType: w,
   hasDimensions: j,
   resizeObserver: d
  }),
  N = ju({
   nodeRef: M,
   disabled: y.hidden || !E,
   noDragClassName: f,
   handleSelector: y.dragHandle,
   nodeId: e,
   isSelectable: D,
   nodeClickDistance: _
  }),
  P = Nu();
 if (y.hidden) return null;
 let F = ls(y),
  ee = Zu(y),
  te = D || E || t || n || r || i,
  ne = n ? e => n(e, {
   ...S.userNode
  }) : void 0,
  re = r ? e => r(e, {
   ...S.userNode
  }) : void 0,
  I = i ? e => i(e, {
   ...S.userNode
  }) : void 0,
  ie = a ? e => a(e, {
   ...S.userNode
  }) : void 0,
  L = o ? e => o(e, {
   ...S.userNode
  }) : void 0,
  ae = n => {
   let {
    selectNodesOnDrag: r,
    nodeDragThreshold: i
   } = A.getState();
   D && (!r || !E || i > 0) && Au({
    id: e,
    store: A,
    nodeRef: M
   }), t && t(n, {
    ...S.userNode
   })
  },
  oe = t => {
   if (!(bs(t.nativeEvent) || m)) {
    if (vo.includes(t.key) && D) {
     let n = t.key === `Escape`;
     Au({
      id: e,
      store: A,
      unselect: n,
      nodeRef: M
     })
    } else if (E && y.selected && Object.prototype.hasOwnProperty.call(Yu, t.key)) {
     t.preventDefault();
     let {
      ariaLabelConfig: e
     } = A.getState();
     A.setState({
      ariaLiveMessage: e[`node.a11yDescription.ariaLiveMessage`]({
       direction: t.key.replace(`Arrow`, ``).toLowerCase(),
       x: ~~S.positionAbsolute.x,
       y: ~~S.positionAbsolute.y
      })
     }), P({
      direction: Yu[t.key],
      factor: t.shiftKey ? 4 : 1
     })
    }
   }
  },
  se = () => {
   if (m || !M.current?.matches(`:focus-visible`)) return;
   let {
    transform: t,
    width: n,
    height: r,
    autoPanOnNodeFocus: i,
    setCenter: a
   } = A.getState();
   i && (No(new Map([
    [e, y]
   ]), {
    x: 0,
    y: 0,
    width: n,
    height: r
   }, t, !0).length > 0 || a(y.position.x + F.width / 2, y.position.y + F.height / 2, {
    zoom: t[2]
   }))
  };
 return (0, b.jsx)(`div`, {
  className: x([`react-flow__node`, `react-flow__node-${w}`, {
   [p]: E
  }, y.className, {
   selected: y.selected,
   selectable: D,
   parent: C,
   draggable: E,
   dragging: N
  }]),
  ref: M,
  style: {
   zIndex: S.z,
   transform: `translate(${S.positionAbsolute.x}px,${S.positionAbsolute.y}px)`,
   pointerEvents: te ? `all` : `none`,
   visibility: j ? `visible` : `hidden`,
   ...y.style,
   ...ee
  },
  "data-id": e,
  "data-testid": `rf__node-${e}`,
  onMouseEnter: ne,
  onMouseMove: re,
  onMouseLeave: I,
  onContextMenu: ie,
  onClick: ae,
  onDoubleClick: L,
  onKeyDown: k ? oe : void 0,
  tabIndex: k ? 0 : void 0,
  onFocus: k ? se : void 0,
  role: y.ariaRole ?? (k ? `group` : void 0),
  "aria-roledescription": `node`,
  "aria-describedby": m ? void 0 : `${Cl}-${h}`,
  "aria-label": y.ariaLabel,
  ...y.domAttributes,
  children: (0, b.jsx)(Fu, {
   value: e,
   children: (0, b.jsx)(T, {
    id: e,
    data: y.data,
    type: w,
    positionAbsoluteX: S.positionAbsolute.x,
    positionAbsoluteY: S.positionAbsolute.y,
    selected: y.selected ?? !1,
    selectable: D,
    draggable: E,
    deletable: y.deletable ?? !0,
    isConnectable: O,
    sourcePosition: y.sourcePosition,
    targetPosition: y.targetPosition,
    dragging: N,
    dragHandle: y.dragHandle,
    zIndex: S.z,
    parentId: y.parentId,
    ...F
   })
  })
 })
}
var sd = (0, _.memo)(od),
 cd = e => ({
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
 });

function ld(e) {
 let {
  nodesConnectable: t,
  nodesFocusable: n,
  elementsSelectable: r,
  onError: i
 } = W(cd, hl), a = nd(e.onlyRenderVisibleElements), o = id();
 return (0, b.jsx)(`div`, {
  className: `react-flow__nodes`,
  style: Su,
  children: a.map(a => (0, b.jsx)(sd, {
   id: a,
   nodeTypes: e.nodeTypes,
   nodeExtent: e.nodeExtent,
   onClick: e.onNodeClick,
   onMouseEnter: e.onNodeMouseEnter,
   onMouseMove: e.onNodeMouseMove,
   onMouseLeave: e.onNodeMouseLeave,
   onContextMenu: e.onNodeContextMenu,
   onDoubleClick: e.onNodeDoubleClick,
   noDragClassName: e.noDragClassName,
   noPanClassName: e.noPanClassName,
   rfId: e.rfId,
   disableKeyboardA11y: e.disableKeyboardA11y,
   resizeObserver: o,
   nodesDraggable: e.nodesDraggable ?? !0,
   nodesConnectable: t,
   nodesFocusable: n,
   elementsSelectable: r,
   nodeClickDistance: e.nodeClickDistance,
   onError: i
  }, a))
 })
}
ld.displayName = `NodeRenderer`;
var ud = (0, _.memo)(ld);

function dd(e) {
 return W((0, _.useCallback)(t => {
  if (!e) return t.edges.map(e => e.id);
  let n = [];
  if (t.width && t.height)
   for (let e of t.edges) {
    let r = t.nodeLookup.get(e.source),
     i = t.nodeLookup.get(e.target);
    r && i && As({
     sourceNode: r,
     targetNode: i,
     width: t.width,
     height: t.height,
     transform: t.transform
    }) && n.push(e.id)
   }
  return n
 }, [e]), hl)
}
var fd = ({
  color: e = `none`,
  strokeWidth: t = 1
 }) => {
  let n = {
   strokeWidth: t,
   ...e && {
    stroke: e
   }
  };
  return (0, b.jsx)(`polyline`, {
   className: `arrow`,
   style: n,
   strokeLinecap: `round`,
   fill: `none`,
   strokeLinejoin: `round`,
   points: `-5,-4 0,0 -5,4`
  })
 },
 pd = ({
  color: e = `none`,
  strokeWidth: t = 1
 }) => {
  let n = {
   strokeWidth: t,
   ...e && {
    stroke: e,
    fill: e
   }
  };
  return (0, b.jsx)(`polyline`, {
   className: `arrowclosed`,
   style: n,
   strokeLinecap: `round`,
   strokeLinejoin: `round`,
   points: `-5,-4 0,0 -5,4 -5,-4`
  })
 },
 md = {
  [To.Arrow]: fd,
  [To.ArrowClosed]: pd
 };

function hd(e) {
 let t = bl();
 return (0, _.useMemo)(() => Object.prototype.hasOwnProperty.call(md, e) ? md[e] : (t.getState().onError?.(`009`, go.error009(e)), null), [e])
}
var gd = ({
  id: e,
  type: t,
  color: n,
  width: r = 12.5,
  height: i = 12.5,
  markerUnits: a = `strokeWidth`,
  strokeWidth: o,
  orient: s = `auto-start-reverse`
 }) => {
  let c = hd(t);
  return c ? (0, b.jsx)(`marker`, {
   className: `react-flow__arrowhead`,
   id: e,
   markerWidth: `${r}`,
   markerHeight: `${i}`,
   viewBox: `-10 -10 20 20`,
   markerUnits: a,
   orient: s,
   refX: `0`,
   refY: `0`,
   children: (0, b.jsx)(c, {
    color: n,
    strokeWidth: o
   })
  }) : null
 },
 _d = ({
  defaultColor: e,
  rfId: t
 }) => {
  let n = W(e => e.edges),
   r = W(e => e.defaultEdgeOptions),
   i = (0, _.useMemo)(() => Js(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r?.markerStart,
    defaultMarkerEnd: r?.markerEnd
   }), [n, r, t, e]);
  return i.length ? (0, b.jsx)(`svg`, {
   className: `react-flow__marker`,
   "aria-hidden": `true`,
   children: (0, b.jsx)(`defs`, {
    children: i.map(e => (0, b.jsx)(gd, {
     id: e.id,
     type: e.type,
     color: e.color,
     width: e.width,
     height: e.height,
     markerUnits: e.markerUnits,
     strokeWidth: e.strokeWidth,
     orient: e.orient
    }, e.id))
   })
  }) : null
 };
_d.displayName = `MarkerDefinitions`;
var vd = (0, _.memo)(_d);

function yd({
 x: e,
 y: t,
 label: n,
 labelStyle: r,
 labelShowBg: i = !0,
 labelBgStyle: a,
 labelBgPadding: o = [2, 4],
 labelBgBorderRadius: s = 2,
 children: c,
 className: l,
 ...u
}) {
 let [d, f] = (0, _.useState)({
  x: 1,
  y: 0,
  width: 0,
  height: 0
 }), p = x([`react-flow__edge-textwrapper`, l]), m = (0, _.useRef)(null);
 return (0, _.useEffect)(() => {
  if (m.current) {
   let e = m.current.getBBox();
   f({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
   })
  }
 }, [n]), n ? (0, b.jsxs)(`g`, {
  transform: `translate(${e-d.width/2} ${t-d.height/2})`,
  className: p,
  visibility: d.width ? `visible` : `hidden`,
  ...u,
  children: [i && (0, b.jsx)(`rect`, {
   width: d.width + 2 * o[0],
   x: -o[0],
   y: -o[1],
   height: d.height + 2 * o[1],
   className: `react-flow__edge-textbg`,
   style: a,
   rx: s,
   ry: s
  }), (0, b.jsx)(`text`, {
   className: `react-flow__edge-text`,
   y: d.height / 2,
   dy: `0.3em`,
   ref: m,
   style: r,
   children: n
  }), c]
 }) : null
}
yd.displayName = `EdgeText`;
var bd = (0, _.memo)(yd);

function xd({
 path: e,
 labelX: t,
 labelY: n,
 label: r,
 labelStyle: i,
 labelShowBg: a,
 labelBgStyle: o,
 labelBgPadding: s,
 labelBgBorderRadius: c,
 interactionWidth: l = 20,
 ...u
}) {
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(`path`, {
   ...u,
   d: e,
   fill: `none`,
   className: x([`react-flow__edge-path`, u.className])
  }), l ? (0, b.jsx)(`path`, {
   d: e,
   fill: `none`,
   strokeOpacity: 0,
   strokeWidth: l,
   className: `react-flow__edge-interaction`
  }) : null, r && Qo(t) && Qo(n) ? (0, b.jsx)(bd, {
   x: t,
   y: n,
   label: r,
   labelStyle: i,
   labelShowBg: a,
   labelBgStyle: o,
   labelBgPadding: s,
   labelBgBorderRadius: c
  }) : null]
 })
}

function Sd({
 pos: e,
 x1: t,
 y1: n,
 x2: r,
 y2: i
}) {
 return e === H.Left || e === H.Right ? [.5 * (t + r), n] : [t, .5 * (n + i)]
}

function Cd({
 sourceX: e,
 sourceY: t,
 sourcePosition: n = H.Bottom,
 targetX: r,
 targetY: i,
 targetPosition: a = H.Top
}) {
 let [o, s] = Sd({
  pos: n,
  x1: e,
  y1: t,
  x2: r,
  y2: i
 }), [c, l] = Sd({
  pos: a,
  x1: r,
  y1: i,
  x2: e,
  y2: t
 }), [u, d, f, p] = ws({
  sourceX: e,
  sourceY: t,
  targetX: r,
  targetY: i,
  sourceControlX: o,
  sourceControlY: s,
  targetControlX: c,
  targetControlY: l
 });
 return [`M${e},${t} C${o},${s} ${c},${l} ${r},${i}`, u, d, f, p]
}

function wd(e) {
 return (0, _.memo)(({
  id: t,
  sourceX: n,
  sourceY: r,
  targetX: i,
  targetY: a,
  sourcePosition: o,
  targetPosition: s,
  label: c,
  labelStyle: l,
  labelShowBg: u,
  labelBgStyle: d,
  labelBgPadding: f,
  labelBgBorderRadius: p,
  style: m,
  markerEnd: h,
  markerStart: g,
  interactionWidth: _
 }) => {
  let [v, y, x] = Cd({
   sourceX: n,
   sourceY: r,
   sourcePosition: o,
   targetX: i,
   targetY: a,
   targetPosition: s
  }), S = e.isInternal ? void 0 : t;
  return (0, b.jsx)(xd, {
   id: S,
   path: v,
   labelX: y,
   labelY: x,
   label: c,
   labelStyle: l,
   labelShowBg: u,
   labelBgStyle: d,
   labelBgPadding: f,
   labelBgBorderRadius: p,
   style: m,
   markerEnd: h,
   markerStart: g,
   interactionWidth: _
  })
 })
}
var Td = wd({
  isInternal: !1
 }),
 Ed = wd({
  isInternal: !0
 });
Td.displayName = `SimpleBezierEdge`, Ed.displayName = `SimpleBezierEdgeInternal`;

function Dd(e) {
 return (0, _.memo)(({
  id: t,
  sourceX: n,
  sourceY: r,
  targetX: i,
  targetY: a,
  label: o,
  labelStyle: s,
  labelShowBg: c,
  labelBgStyle: l,
  labelBgPadding: u,
  labelBgBorderRadius: d,
  style: f,
  sourcePosition: p = H.Bottom,
  targetPosition: m = H.Top,
  markerEnd: h,
  markerStart: g,
  pathOptions: _,
  interactionWidth: v
 }) => {
  let [y, x, S] = Vs({
   sourceX: n,
   sourceY: r,
   sourcePosition: p,
   targetX: i,
   targetY: a,
   targetPosition: m,
   borderRadius: _?.borderRadius,
   offset: _?.offset,
   stepPosition: _?.stepPosition
  }), C = e.isInternal ? void 0 : t;
  return (0, b.jsx)(xd, {
   id: C,
   path: y,
   labelX: x,
   labelY: S,
   label: o,
   labelStyle: s,
   labelShowBg: c,
   labelBgStyle: l,
   labelBgPadding: u,
   labelBgBorderRadius: d,
   style: f,
   markerEnd: h,
   markerStart: g,
   interactionWidth: v
  })
 })
}
var Od = Dd({
  isInternal: !1
 }),
 kd = Dd({
  isInternal: !0
 });
Od.displayName = `SmoothStepEdge`, kd.displayName = `SmoothStepEdgeInternal`;

function Ad(e) {
 return (0, _.memo)(({
  id: t,
  ...n
 }) => {
  let r = e.isInternal ? void 0 : t;
  return (0, b.jsx)(Od, {
   ...n,
   id: r,
   pathOptions: (0, _.useMemo)(() => ({
    borderRadius: 0,
    offset: n.pathOptions?.offset
   }), [n.pathOptions?.offset])
  })
 })
}
var jd = Ad({
  isInternal: !1
 }),
 Md = Ad({
  isInternal: !0
 });
jd.displayName = `StepEdge`, Md.displayName = `StepEdgeInternal`;

function Nd(e) {
 return (0, _.memo)(({
  id: t,
  sourceX: n,
  sourceY: r,
  targetX: i,
  targetY: a,
  label: o,
  labelStyle: s,
  labelShowBg: c,
  labelBgStyle: l,
  labelBgPadding: u,
  labelBgBorderRadius: d,
  style: f,
  markerEnd: p,
  markerStart: m,
  interactionWidth: h
 }) => {
  let [g, _, v] = Ps({
   sourceX: n,
   sourceY: r,
   targetX: i,
   targetY: a
  }), y = e.isInternal ? void 0 : t;
  return (0, b.jsx)(xd, {
   id: y,
   path: g,
   labelX: _,
   labelY: v,
   label: o,
   labelStyle: s,
   labelShowBg: c,
   labelBgStyle: l,
   labelBgPadding: u,
   labelBgBorderRadius: d,
   style: f,
   markerEnd: p,
   markerStart: m,
   interactionWidth: h
  })
 })
}
var Pd = Nd({
  isInternal: !1
 }),
 Fd = Nd({
  isInternal: !0
 });
Pd.displayName = `StraightEdge`, Fd.displayName = `StraightEdgeInternal`;

function Id(e) {
 return (0, _.memo)(({
  id: t,
  sourceX: n,
  sourceY: r,
  targetX: i,
  targetY: a,
  sourcePosition: o = H.Bottom,
  targetPosition: s = H.Top,
  label: c,
  labelStyle: l,
  labelShowBg: u,
  labelBgStyle: d,
  labelBgPadding: f,
  labelBgBorderRadius: p,
  style: m,
  markerEnd: h,
  markerStart: g,
  pathOptions: _,
  interactionWidth: v
 }) => {
  let [y, x, S] = Ds({
   sourceX: n,
   sourceY: r,
   sourcePosition: o,
   targetX: i,
   targetY: a,
   targetPosition: s,
   curvature: _?.curvature
  }), C = e.isInternal ? void 0 : t;
  return (0, b.jsx)(xd, {
   id: C,
   path: y,
   labelX: x,
   labelY: S,
   label: c,
   labelStyle: l,
   labelShowBg: u,
   labelBgStyle: d,
   labelBgPadding: f,
   labelBgBorderRadius: p,
   style: m,
   markerEnd: h,
   markerStart: g,
   interactionWidth: v
  })
 })
}
var Ld = Id({
  isInternal: !1
 }),
 Rd = Id({
  isInternal: !0
 });
Ld.displayName = `BezierEdge`, Rd.displayName = `BezierEdgeInternal`;
var zd = {
  default: Rd,
  straight: Fd,
  step: Md,
  smoothstep: kd,
  simplebezier: Ed
 },
 Bd = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
 },
 Vd = (e, t, n) => n === H.Left ? e - t : n === H.Right ? e + t : e,
 Hd = (e, t, n) => n === H.Top ? e - t : n === H.Bottom ? e + t : e,
 Ud = `react-flow__edgeupdater`;

function Wd({
 position: e,
 centerX: t,
 centerY: n,
 radius: r = 10,
 onMouseDown: i,
 onMouseEnter: a,
 onMouseOut: o,
 type: s
}) {
 return (0, b.jsx)(`circle`, {
  onMouseDown: i,
  onMouseEnter: a,
  onMouseOut: o,
  className: x([Ud, `${Ud}-${s}`]),
  cx: Vd(t, r, e),
  cy: Hd(n, r, e),
  r,
  stroke: `transparent`,
  fill: `transparent`
 })
}

function Gd({
 isReconnectable: e,
 reconnectRadius: t,
 edge: n,
 sourceX: r,
 sourceY: i,
 targetX: a,
 targetY: o,
 sourcePosition: s,
 targetPosition: c,
 onReconnect: l,
 onReconnectStart: u,
 onReconnectEnd: d,
 setReconnecting: f,
 setUpdateHover: p
}) {
 let m = bl(),
  h = (e, t) => {
   if (e.button !== 0) return;
   let {
    autoPanOnConnect: r,
    domNode: i,
    connectionMode: a,
    connectionRadius: o,
    lib: s,
    onConnectStart: c,
    cancelConnection: p,
    nodeLookup: h,
    rfId: g,
    panBy: _,
    updateConnection: v
   } = m.getState(), y = t.type === `target`;
   kc.onPointerDown(e.nativeEvent, {
    autoPanOnConnect: r,
    connectionMode: a,
    connectionRadius: o,
    domNode: i,
    handleId: t.id,
    nodeId: t.nodeId,
    nodeLookup: h,
    isTarget: y,
    edgeUpdaterType: t.type,
    lib: s,
    flowId: g,
    cancelConnection: p,
    panBy: _,
    isValidConnection: (...e) => m.getState().isValidConnection?.(...e) ?? !0,
    onConnect: e => l?.(n, e),
    onConnectStart: (r, i) => {
     f(!0), u?.(e, n, t.type), c?.(r, i)
    },
    onConnectEnd: (...e) => m.getState().onConnectEnd?.(...e),
    onReconnectEnd: (e, r) => {
     f(!1), d?.(e, n, t.type, r)
    },
    updateConnection: v,
    getTransform: () => m.getState().transform,
    getFromHandle: () => m.getState().connection.fromHandle,
    dragThreshold: m.getState().connectionDragThreshold,
    handleDomNode: e.currentTarget
   })
  },
  g = e => h(e, {
   nodeId: n.target,
   id: n.targetHandle ?? null,
   type: `target`
  }),
  _ = e => h(e, {
   nodeId: n.source,
   id: n.sourceHandle ?? null,
   type: `source`
  }),
  v = () => p(!0),
  y = () => p(!1);
 return (0, b.jsxs)(b.Fragment, {
  children: [(e === !0 || e === `source`) && (0, b.jsx)(Wd, {
   position: s,
   centerX: r,
   centerY: i,
   radius: t,
   onMouseDown: g,
   onMouseEnter: v,
   onMouseOut: y,
   type: `source`
  }), (e === !0 || e === `target`) && (0, b.jsx)(Wd, {
   position: c,
   centerX: a,
   centerY: o,
   radius: t,
   onMouseDown: _,
   onMouseEnter: v,
   onMouseOut: y,
   type: `target`
  })]
 })
}

function Kd({
 id: e,
 edgesFocusable: t,
 edgesReconnectable: n,
 elementsSelectable: r,
 onClick: i,
 onDoubleClick: a,
 onContextMenu: o,
 onMouseEnter: s,
 onMouseMove: c,
 onMouseLeave: l,
 reconnectRadius: u,
 onReconnect: d,
 onReconnectStart: f,
 onReconnectEnd: p,
 rfId: m,
 edgeTypes: h,
 noPanClassName: g,
 onError: v,
 disableKeyboardA11y: y
}) {
 let S = W(t => t.edgeLookup.get(e)),
  C = W(e => e.defaultEdgeOptions);
 S = C ? {
  ...C,
  ...S
 } : S;
 let w = S.type || `default`,
  T = h?.[w] || zd[w];
 T === void 0 && (v?.(`011`, go.error011(w)), w = `default`, T = h?.default || zd.default);
 let E = !!(S.focusable || t && S.focusable === void 0),
  D = d !== void 0 && (S.reconnectable || n && S.reconnectable === void 0),
  O = !!(S.selectable || r && S.selectable === void 0),
  k = (0, _.useRef)(null),
  [A, j] = (0, _.useState)(!1),
  [M, N] = (0, _.useState)(!1),
  P = bl(),
  {
   zIndex: F = S.zIndex,
   sourceX: ee,
   sourceY: te,
   targetX: ne,
   targetY: re,
   sourcePosition: I,
   targetPosition: ie
  } = W((0, _.useCallback)(t => {
   let n = t.nodeLookup.get(S.source),
    r = t.nodeLookup.get(S.target);
   if (!n || !r) return Bd;
   let i = Us({
     id: e,
     sourceNode: n,
     targetNode: r,
     sourceHandle: S.sourceHandle || null,
     targetHandle: S.targetHandle || null,
     connectionMode: t.connectionMode,
     onError: v
    }),
    a = ks({
     selected: S.selected,
     zIndex: S.zIndex,
     sourceNode: n,
     targetNode: r,
     elevateOnSelect: t.elevateEdgesOnSelect,
     zIndexMode: t.zIndexMode
    });
   return {
    ...i || Bd,
    zIndex: a
   }
  }, [S.source, S.target, S.sourceHandle, S.targetHandle, S.selected, S.zIndex, v]), hl),
  L = (0, _.useMemo)(() => S.markerStart ? `url('#${qs(S.markerStart,m)}')` : void 0, [S.markerStart, m]),
  ae = (0, _.useMemo)(() => S.markerEnd ? `url('#${qs(S.markerEnd,m)}')` : void 0, [S.markerEnd, m]);
 if (S.hidden || ee === null || te === null || ne === null || re === null) return null;
 let oe = t => {
   let {
    addSelectedEdges: n,
    unselectNodesAndEdges: r,
    multiSelectionActive: a
   } = P.getState();
   O && (P.setState({
    nodesSelectionActive: !1
   }), S.selected && a ? (r({
    nodes: [],
    edges: [S]
   }), k.current?.blur()) : n([e])), i && i(t, S)
  },
  se = a ? e => {
   a(e, {
    ...S
   })
  } : void 0,
  ce = o ? e => {
   o(e, {
    ...S
   })
  } : void 0,
  le = s ? e => {
   s(e, {
    ...S
   })
  } : void 0,
  ue = c ? e => {
   c(e, {
    ...S
   })
  } : void 0,
  de = l ? e => {
   l(e, {
    ...S
   })
  } : void 0;
 return (0, b.jsx)(`svg`, {
  style: {
   zIndex: F
  },
  children: (0, b.jsxs)(`g`, {
   className: x([`react-flow__edge`, `react-flow__edge-${w}`, S.className, g, {
    selected: S.selected,
    animated: S.animated,
    inactive: !O && !i,
    updating: A,
    selectable: O
   }]),
   onClick: oe,
   onDoubleClick: se,
   onContextMenu: ce,
   onMouseEnter: le,
   onMouseMove: ue,
   onMouseLeave: de,
   onKeyDown: E ? t => {
    if (!y && vo.includes(t.key) && O) {
     let {
      unselectNodesAndEdges: n,
      addSelectedEdges: r
     } = P.getState();
     t.key === `Escape` ? (k.current?.blur(), n({
      edges: [S]
     })) : r([e])
    }
   } : void 0,
   tabIndex: E ? 0 : void 0,
   role: S.ariaRole ?? (E ? `group` : `img`),
   "aria-roledescription": `edge`,
   "data-id": e,
   "data-testid": `rf__edge-${e}`,
   "aria-label": S.ariaLabel === null ? void 0 : S.ariaLabel || `Edge from ${S.source} to ${S.target}`,
   "aria-describedby": E ? `${wl}-${m}` : void 0,
   ref: k,
   ...S.domAttributes,
   children: [!M && (0, b.jsx)(T, {
    id: e,
    source: S.source,
    target: S.target,
    type: S.type,
    selected: S.selected,
    animated: S.animated,
    selectable: O,
    deletable: S.deletable ?? !0,
    label: S.label,
    labelStyle: S.labelStyle,
    labelShowBg: S.labelShowBg,
    labelBgStyle: S.labelBgStyle,
    labelBgPadding: S.labelBgPadding,
    labelBgBorderRadius: S.labelBgBorderRadius,
    sourceX: ee,
    sourceY: te,
    targetX: ne,
    targetY: re,
    sourcePosition: I,
    targetPosition: ie,
    data: S.data,
    style: S.style,
    sourceHandleId: S.sourceHandle,
    targetHandleId: S.targetHandle,
    markerStart: L,
    markerEnd: ae,
    pathOptions: `pathOptions` in S ? S.pathOptions : void 0,
    interactionWidth: S.interactionWidth
   }), D && (0, b.jsx)(Gd, {
    edge: S,
    isReconnectable: D,
    reconnectRadius: u,
    onReconnect: d,
    onReconnectStart: f,
    onReconnectEnd: p,
    sourceX: ee,
    sourceY: te,
    targetX: ne,
    targetY: re,
    sourcePosition: I,
    targetPosition: ie,
    setUpdateHover: j,
    setReconnecting: N
   })]
  })
 })
}
var qd = (0, _.memo)(Kd),
 Jd = e => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
 });

function Yd({
 defaultMarkerColor: e,
 onlyRenderVisibleElements: t,
 rfId: n,
 edgeTypes: r,
 noPanClassName: i,
 onReconnect: a,
 onEdgeContextMenu: o,
 onEdgeMouseEnter: s,
 onEdgeMouseMove: c,
 onEdgeMouseLeave: l,
 onEdgeClick: u,
 reconnectRadius: d,
 onEdgeDoubleClick: f,
 onReconnectStart: p,
 onReconnectEnd: m,
 disableKeyboardA11y: h
}) {
 let {
  edgesFocusable: g,
  edgesReconnectable: _,
  elementsSelectable: v,
  onError: y
 } = W(Jd, hl), x = dd(t);
 return (0, b.jsxs)(`div`, {
  className: `react-flow__edges`,
  children: [(0, b.jsx)(vd, {
   defaultColor: e,
   rfId: n
  }), x.map(e => (0, b.jsx)(qd, {
   id: e,
   edgesFocusable: g,
   edgesReconnectable: _,
   elementsSelectable: v,
   noPanClassName: i,
   onReconnect: a,
   onContextMenu: o,
   onMouseEnter: s,
   onMouseMove: c,
   onMouseLeave: l,
   onClick: u,
   reconnectRadius: d,
   onDoubleClick: f,
   onReconnectStart: p,
   onReconnectEnd: m,
   rfId: n,
   onError: y,
   edgeTypes: r,
   disableKeyboardA11y: h
  }, e))]
 })
}
Yd.displayName = `EdgeRenderer`;
var Xd = (0, _.memo)(Yd),
 Zd = e => `translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;

function Qd({
 children: e
}) {
 let t = bl(),
  n = (0, _.useRef)(null),
  [r] = (0, _.useState)(() => t.getState().transform);
 return uu(() => {
  let e = null,
   r = () => {
    let r = t.getState().transform;
    e && r[0] === e[0] && r[1] === e[1] && r[2] === e[2] || (e = r, n.current && (n.current.style.transform = Zd(r)))
   };
  return r(), t.subscribe(r)
 }, [t]), (0, b.jsx)(`div`, {
  ref: n,
  className: `react-flow__viewport xyflow__viewport react-flow__container`,
  style: {
   transform: Zd(r)
  },
  children: e
 })
}

function $d(e) {
 let t = _u(),
  n = (0, _.useRef)(!1);
 (0, _.useEffect)(() => {
  !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0)
 }, [e, t.viewportInitialized])
}
var ef = e => e.panZoom?.syncViewport;

function tf(e) {
 let t = W(ef),
  n = bl();
 return (0, _.useEffect)(() => {
  e && (t?.(e), n.setState({
   transform: [e.x, e.y, e.zoom]
  }))
 }, [e, t]), null
}

function nf(e) {
 return e.connection.inProgress ? {
  ...e.connection,
  to: ts(e.connection.to, e.transform)
 } : {
  ...e.connection
 }
}

function rf(e) {
 return e ? t => e(nf(t)) : nf
}

function af(e) {
 return W(rf(e), hl)
}
var of = e => ({
 nodesConnectable: e.nodesConnectable,
 isValid: e.connection.isValid,
 inProgress: e.connection.inProgress,
 width: e.width,
 height: e.height
});

function sf({
 containerStyle: e,
 style: t,
 type: n,
 component: r
}) {
 let {
  nodesConnectable: i,
  width: a,
  height: o,
  isValid: s,
  inProgress: c
 } = W(of, hl);
 return a && i && c ? (0, b.jsx)(`svg`, {
  style: e,
  width: a,
  height: o,
  className: `react-flow__connectionline react-flow__container`,
  children: (0, b.jsx)(`g`, {
   className: x([`react-flow__connection`, hs(s)]),
   children: (0, b.jsx)(cf, {
    style: t,
    type: n,
    CustomComponent: r,
    isValid: s
   })
  })
 }) : null
}
var cf = ({
 style: e,
 type: t = wo.Bezier,
 CustomComponent: n,
 isValid: r
}) => {
 let {
  inProgress: i,
  from: a,
  fromNode: o,
  fromHandle: s,
  fromPosition: c,
  to: l,
  toNode: u,
  toHandle: d,
  toPosition: f,
  pointer: p
 } = af();
 if (!i) return;
 if (n) return (0, b.jsx)(n, {
  connectionLineType: t,
  connectionLineStyle: e,
  fromNode: o,
  fromHandle: s,
  fromX: a.x,
  fromY: a.y,
  toX: l.x,
  toY: l.y,
  fromPosition: c,
  toPosition: f,
  connectionStatus: hs(r),
  toNode: u,
  toHandle: d,
  pointer: p
 });
 let m = ``,
  h = {
   sourceX: a.x,
   sourceY: a.y,
   sourcePosition: c,
   targetX: l.x,
   targetY: l.y,
   targetPosition: f
  };
 switch (t) {
  case wo.Bezier:
   [m] = Ds(h);
   break;
  case wo.SimpleBezier:
   [m] = Cd(h);
   break;
  case wo.Step:
   [m] = Vs({
    ...h,
    borderRadius: 0
   });
   break;
  case wo.SmoothStep:
   [m] = Vs(h);
   break;
  default:
   [m] = Ps(h)
 }
 return (0, b.jsx)(`path`, {
  d: m,
  fill: `none`,
  className: `react-flow__connection-path`,
  style: e
 })
};
cf.displayName = `ConnectionLine`;
var lf = {};

function uf(e = lf) {
 (0, _.useRef)(e), bl(), (0, _.useEffect)(() => {}, [e])
}

function df() {
 bl(), (0, _.useRef)(!1), (0, _.useEffect)(() => {}, [])
}

function ff({
 nodeTypes: e,
 edgeTypes: t,
 onInit: n,
 onNodeClick: r,
 onEdgeClick: i,
 onNodeDoubleClick: a,
 onEdgeDoubleClick: o,
 onNodeMouseEnter: s,
 onNodeMouseMove: c,
 onNodeMouseLeave: l,
 onNodeContextMenu: u,
 onSelectionContextMenu: d,
 onSelectionStart: f,
 onSelectionEnd: p,
 connectionLineType: m,
 connectionLineStyle: h,
 connectionLineComponent: g,
 connectionLineContainerStyle: _,
 selectionKeyCode: v,
 selectionOnDrag: y,
 selectionMode: x,
 multiSelectionKeyCode: S,
 panActivationKeyCode: C,
 zoomActivationKeyCode: w,
 deleteKeyCode: T,
 onlyRenderVisibleElements: E,
 elementsSelectable: D,
 defaultViewport: O,
 translateExtent: k,
 minZoom: A,
 maxZoom: j,
 preventScrolling: M,
 defaultMarkerColor: N,
 zoomOnScroll: P,
 zoomOnPinch: F,
 panOnScroll: ee,
 panOnScrollSpeed: te,
 panOnScrollMode: ne,
 zoomOnDoubleClick: re,
 panOnDrag: I,
 autoPanOnSelection: ie,
 onPaneClick: L,
 onPaneMouseEnter: ae,
 onPaneMouseMove: oe,
 onPaneMouseLeave: se,
 onPaneScroll: ce,
 onPaneContextMenu: le,
 paneClickDistance: ue,
 nodeClickDistance: de,
 onEdgeContextMenu: fe,
 onEdgeMouseEnter: R,
 onEdgeMouseMove: z,
 onEdgeMouseLeave: pe,
 reconnectRadius: me,
 onReconnect: he,
 onReconnectStart: ge,
 onReconnectEnd: _e,
 noDragClassName: ve,
 noWheelClassName: ye,
 noPanClassName: be,
 disableKeyboardA11y: xe,
 nodeExtent: Se,
 rfId: Ce,
 viewport: we,
 onViewportChange: Te,
 nodesDraggable: Ee
}) {
 return uf(e), uf(t), df(), $d(n), tf(we), (0, b.jsx)(J, {
  onPaneClick: L,
  onPaneMouseEnter: ae,
  onPaneMouseMove: oe,
  onPaneMouseLeave: se,
  onPaneContextMenu: le,
  onPaneScroll: ce,
  paneClickDistance: ue,
  deleteKeyCode: T,
  selectionKeyCode: v,
  selectionOnDrag: y,
  selectionMode: x,
  onSelectionStart: f,
  onSelectionEnd: p,
  multiSelectionKeyCode: S,
  panActivationKeyCode: C,
  zoomActivationKeyCode: w,
  elementsSelectable: D,
  zoomOnScroll: P,
  zoomOnPinch: F,
  zoomOnDoubleClick: re,
  panOnScroll: ee,
  panOnScrollSpeed: te,
  panOnScrollMode: ne,
  panOnDrag: I,
  autoPanOnSelection: ie,
  defaultViewport: O,
  translateExtent: k,
  minZoom: A,
  maxZoom: j,
  onSelectionContextMenu: d,
  preventScrolling: M,
  noDragClassName: ve,
  noWheelClassName: ye,
  noPanClassName: be,
  disableKeyboardA11y: xe,
  onViewportChange: Te,
  isControlledViewport: !!we,
  children: (0, b.jsxs)(Qd, {
   children: [(0, b.jsx)(Xd, {
    edgeTypes: t,
    onEdgeClick: i,
    onEdgeDoubleClick: o,
    onReconnect: he,
    onReconnectStart: ge,
    onReconnectEnd: _e,
    onlyRenderVisibleElements: E,
    onEdgeContextMenu: fe,
    onEdgeMouseEnter: R,
    onEdgeMouseMove: z,
    onEdgeMouseLeave: pe,
    reconnectRadius: me,
    defaultMarkerColor: N,
    noPanClassName: be,
    disableKeyboardA11y: xe,
    rfId: Ce
   }), (0, b.jsx)(sf, {
    style: h,
    type: m,
    component: g,
    containerStyle: _
   }), (0, b.jsx)(`div`, {
    className: `react-flow__edgelabel-renderer`
   }), (0, b.jsx)(ud, {
    nodeTypes: e,
    onNodeClick: r,
    onNodeDoubleClick: a,
    onNodeMouseEnter: s,
    onNodeMouseMove: c,
    onNodeMouseLeave: l,
    onNodeContextMenu: u,
    nodeClickDistance: de,
    onlyRenderVisibleElements: E,
    noPanClassName: be,
    noDragClassName: ve,
    disableKeyboardA11y: xe,
    nodeExtent: Se,
    rfId: Ce,
    nodesDraggable: Ee
   }), (0, b.jsx)(`div`, {
    className: `react-flow__viewport-portal`
   })]
  })
 })
}
ff.displayName = `GraphView`;
var pf = (0, _.memo)(ff),
 mf = $o(`React Flow`, `https://reactflow.dev/`),
 hf = ({
  nodes: e,
  edges: t,
  defaultNodes: n,
  defaultEdges: r,
  width: i,
  height: a,
  fitView: o,
  fitViewOptions: s,
  minZoom: c = .5,
  maxZoom: l = 2,
  nodeOrigin: u,
  nodeExtent: d,
  zIndexMode: f = `basic`
 } = {}) => {
  let p = new Map,
   m = new Map,
   h = new Map,
   g = new Map,
   _ = r ?? t ?? [],
   v = n ?? e ?? [],
   y = u ?? [0, 0],
   b = d ?? _o;
  pc(h, g, _);
  let {
   nodesInitialized: x
  } = ic(v, p, m, {
   nodeOrigin: y,
   nodeExtent: b,
   zIndexMode: f
  }), S = [0, 0, 1];
  if (o && i && a) {
   let {
    x: e,
    y: t,
    zoom: n
   } = os(Mo(p, {
    filter: e => !(!e.width && !e.initialWidth || !e.height && !e.initialHeight)
   }), i, a, c, l, s?.padding ?? .1);
   S = [e, t, n]
  }
  return {
   rfId: `1`,
   width: i ?? 0,
   height: a ?? 0,
   transform: S,
   nodes: v,
   nodesInitialized: x,
   nodeLookup: p,
   parentLookup: m,
   edges: _,
   edgeLookup: g,
   connectionLookup: h,
   onNodesChange: null,
   onEdgesChange: null,
   hasDefaultNodes: n !== void 0,
   hasDefaultEdges: r !== void 0,
   panZoom: null,
   minZoom: c,
   maxZoom: l,
   translateExtent: _o,
   nodeExtent: b,
   nodesSelectionActive: !1,
   userSelectionActive: !1,
   userSelectionRect: null,
   connectionMode: bo.Strict,
   domNode: null,
   paneDragging: !1,
   noPanClassName: `nopan`,
   nodeOrigin: y,
   nodeDragThreshold: 1,
   connectionDragThreshold: 1,
   snapGrid: [15, 15],
   snapToGrid: !1,
   nodesDraggable: !0,
   nodesConnectable: !0,
   nodesFocusable: !0,
   edgesFocusable: !0,
   edgesReconnectable: !0,
   elementsSelectable: !0,
   elevateNodesOnSelect: !0,
   elevateEdgesOnSelect: !0,
   selectNodesOnDrag: !0,
   multiSelectionActive: !1,
   fitViewQueued: o ?? !1,
   fitViewOptions: s,
   fitViewResolver: null,
   connection: {
    ...Co
   },
   connectionClickStartHandle: null,
   connectOnClick: !0,
   ariaLiveMessage: ``,
   autoPanOnConnect: !0,
   autoPanOnNodeDrag: !0,
   autoPanOnNodeFocus: !0,
   autoPanSpeed: 15,
   connectionRadius: 20,
   onError: mf,
   isValidConnection: void 0,
   onSelectionChangeHandlers: [],
   lib: `react`,
   debug: !1,
   ariaLabelConfig: yo,
   zIndexMode: f,
   defaultEdgeOptions: void 0,
   onNodesChangeMiddlewareMap: new Map,
   onEdgesChangeMiddlewareMap: new Map,
   onNodesDelete: void 0,
   onEdgesDelete: void 0,
   onDelete: void 0,
   onBeforeDelete: void 0,
   onViewportChangeStart: void 0,
   onViewportChange: void 0,
   onViewportChangeEnd: void 0,
   onNodeDragStart: void 0,
   onNodeDrag: void 0,
   onNodeDragStop: void 0,
   onSelectionDragStart: void 0,
   onSelectionDrag: void 0,
   onSelectionDragStop: void 0,
   onMoveStart: void 0,
   onMove: void 0,
   onMoveEnd: void 0,
   onConnect: void 0,
   onConnectStart: void 0,
   onConnectEnd: void 0,
   onClickConnectStart: void 0,
   onClickConnectEnd: void 0
  }
 },
 gf = ({
  nodes: e,
  edges: t,
  defaultNodes: n,
  defaultEdges: r,
  width: i,
  height: a,
  fitView: o,
  fitViewOptions: s,
  minZoom: c,
  maxZoom: l,
  nodeOrigin: u,
  nodeExtent: d,
  zIndexMode: f
 }) => ml((p, m) => {
  async function h() {
   let {
    nodeLookup: e,
    panZoom: t,
    fitViewOptions: n,
    fitViewResolver: r,
    width: i,
    height: a,
    minZoom: o,
    maxZoom: s
   } = m();
   t && (await Io({
    nodes: e,
    width: i,
    height: a,
    panZoom: t,
    minZoom: o,
    maxZoom: s
   }, n), r?.resolve(!0), p({
    fitViewResolver: null
   }))
  }
  return {
   ...hf({
    nodes: e,
    edges: t,
    width: i,
    height: a,
    fitView: o,
    fitViewOptions: s,
    minZoom: c,
    maxZoom: l,
    nodeOrigin: u,
    nodeExtent: d,
    defaultNodes: n,
    defaultEdges: r,
    zIndexMode: f
   }),
   setNodes: e => {
    let {
     nodeLookup: t,
     parentLookup: n,
     nodeOrigin: r,
     nodeExtent: i,
     elevateNodesOnSelect: a,
     fitViewQueued: o,
     zIndexMode: s,
     nodesSelectionActive: c
    } = m(), {
     nodesInitialized: l,
     hasSelectedNodes: u
    } = ic(e, t, n, {
     nodeOrigin: r,
     nodeExtent: i,
     elevateNodesOnSelect: a,
     checkEquality: !0,
     zIndexMode: s
    }), d = c && u;
    o && l ? (h(), p({
     nodes: e,
     nodesInitialized: l,
     fitViewQueued: !1,
     fitViewOptions: void 0,
     nodesSelectionActive: d
    })) : p({
     nodes: e,
     nodesInitialized: l,
     nodesSelectionActive: d
    })
   },
   setEdges: e => {
    let {
     connectionLookup: t,
     edgeLookup: n
    } = m();
    pc(t, n, e), p({
     edges: e
    })
   },
   setDefaultNodesAndEdges: (e, t) => {
    if (e) {
     let {
      setNodes: t
     } = m();
     t(e), p({
      hasDefaultNodes: !0
     })
    }
    if (t) {
     let {
      setEdges: e
     } = m();
     e(t), p({
      hasDefaultEdges: !0
     })
    }
   },
   updateNodeInternals: e => {
    let {
     triggerNodeChanges: t,
     nodeLookup: n,
     parentLookup: r,
     domNode: i,
     nodeOrigin: a,
     nodeExtent: o,
     debug: s,
     fitViewQueued: c,
     zIndexMode: l
    } = m(), {
     changes: u,
     updatedInternals: d
    } = uc(e, n, r, i, a, o, l);
    d && (tc(n, r, {
     nodeOrigin: a,
     nodeExtent: o,
     zIndexMode: l
    }), c ? (h(), p({
     fitViewQueued: !1,
     fitViewOptions: void 0
    })) : p({}), u?.length > 0 && (s && console.log(`React Flow: trigger node changes`, u), t?.(u)))
   },
   updateNodePositions: (e, t = !1) => {
    let n = [],
     r = [],
     {
      nodeLookup: i,
      triggerNodeChanges: a,
      connection: o,
      updateConnection: s,
      onNodesChangeMiddlewareMap: c
     } = m();
    for (let [a, c] of e) {
     let e = i.get(a),
      l = !!(e?.expandParent && e?.parentId && c?.position),
      u = {
       id: a,
       type: `position`,
       position: l ? {
        x: Math.max(0, c.position.x),
        y: Math.max(0, c.position.y)
       } : c.position,
       dragging: t
      };
     if (e && o.inProgress && o.fromNode.id === e.id) {
      let t = Gs(e, o.fromHandle, H.Left, !0);
      s({
       ...o,
       from: t
      })
     }
     l && e.parentId && n.push({
      id: a,
      parentId: e.parentId,
      rect: {
       ...c.internals.positionAbsolute,
       width: c.measured.width ?? 0,
       height: c.measured.height ?? 0
      }
     }), r.push(u)
    }
    if (n.length > 0) {
     let {
      parentLookup: e,
      nodeOrigin: t
     } = m(), a = lc(n, i, e, t);
     r.push(...a)
    }
    for (let e of c.values()) r = e(r);
    a(r)
   },
   triggerNodeChanges: e => {
    let {
     onNodesChange: t,
     setNodes: n,
     nodes: r,
     hasDefaultNodes: i,
     debug: a
    } = m();
    e?.length && (i && n(eu(e, r)), a && console.log(`React Flow: trigger node changes`, e), t?.(e))
   },
   triggerEdgeChanges: e => {
    let {
     onEdgesChange: t,
     setEdges: n,
     edges: r,
     hasDefaultEdges: i,
     debug: a
    } = m();
    e?.length && (i && n(tu(e, r)), a && console.log(`React Flow: trigger edge changes`, e), t?.(e))
   },
   addSelectedNodes: e => {
    let {
     multiSelectionActive: t,
     edgeLookup: n,
     nodeLookup: r,
     triggerNodeChanges: i,
     triggerEdgeChanges: a
    } = m();
    t ? i(e.map(e => nu(e, !0))) : (i(ru(r, new Set([...e]))), a(ru(n)))
   },
   addSelectedEdges: e => {
    let {
     multiSelectionActive: t,
     edgeLookup: n,
     nodeLookup: r,
     triggerNodeChanges: i,
     triggerEdgeChanges: a
    } = m();
    t ? a(e.map(e => nu(e, !0))) : (a(ru(n, new Set([...e]))), i(ru(r, new Set)))
   },
   unselectNodesAndEdges: ({
    nodes: e,
    edges: t
   } = {}) => {
    let {
     edges: n,
     nodes: r,
     nodeLookup: i,
     triggerNodeChanges: a,
     triggerEdgeChanges: o
    } = m(), s = e || r, c = t || n, l = [];
    for (let e of s) e.selected && l.push(nu(e.id, !1));
    let u = [];
    for (let e of c) e.selected && u.push(nu(e.id, !1));
    a(l), o(u)
   },
   setMinZoom: e => {
    let {
     panZoom: t,
     maxZoom: n
    } = m();
    t?.setScaleExtent([e, n]), p({
     minZoom: e
    })
   },
   setMaxZoom: e => {
    let {
     panZoom: t,
     minZoom: n
    } = m();
    t?.setScaleExtent([n, e]), p({
     maxZoom: e
    })
   },
   setTranslateExtent: e => {
    m().panZoom?.setTranslateExtent(e), p({
     translateExtent: e
    })
   },
   resetSelectedElements: () => {
    let {
     edges: e,
     nodes: t,
     triggerNodeChanges: n,
     triggerEdgeChanges: r,
     elementsSelectable: i
    } = m();
    if (!i) return;
    let a = t.reduce((e, t) => t.selected ? [...e, nu(t.id, !1)] : e, []),
     o = e.reduce((e, t) => t.selected ? [...e, nu(t.id, !1)] : e, []);
    n(a), r(o)
   },
   setNodeExtent: e => {
    let {
     nodes: t,
     nodeLookup: n,
     parentLookup: r,
     nodeOrigin: i,
     elevateNodesOnSelect: a,
     nodeExtent: o,
     zIndexMode: s
    } = m();
    (e[0][0] !== o[0][0] || e[0][1] !== o[0][1] || e[1][0] !== o[1][0] || e[1][1] !== o[1][1]) && (ic(t, n, r, {
     nodeOrigin: i,
     nodeExtent: e,
     elevateNodesOnSelect: a,
     checkEquality: !1,
     zIndexMode: s
    }), p({
     nodeExtent: e
    }))
   },
   panBy: e => {
    let {
     transform: t,
     width: n,
     height: r,
     panZoom: i,
     translateExtent: a
    } = m();
    return dc({
     delta: e,
     panZoom: i,
     transform: t,
     translateExtent: a,
     width: n,
     height: r
    })
   },
   setCenter: async (e, t, n) => {
    let {
     width: r,
     height: i,
     maxZoom: a,
     panZoom: o
    } = m();
    if (!o) return !1;
    let s = n?.zoom === void 0 ? a : n.zoom;
    return await o.setViewport({
     x: r / 2 - e * s,
     y: i / 2 - t * s,
     zoom: s
    }, {
     duration: n?.duration,
     ease: n?.ease,
     interpolate: n?.interpolate
    }), !0
   },
   cancelConnection: () => {
    p({
     connection: {
      ...Co
     }
    })
   },
   updateConnection: e => {
    p({
     connection: e
    })
   },
   reset: () => p({
    ...hf()
   })
  }
 }, Object.is);

function _f({
 initialNodes: e,
 initialEdges: t,
 defaultNodes: n,
 defaultEdges: r,
 initialWidth: i,
 initialHeight: a,
 initialMinZoom: o,
 initialMaxZoom: s,
 initialFitViewOptions: c,
 fitView: l,
 nodeOrigin: u,
 nodeExtent: d,
 zIndexMode: f,
 children: p
}) {
 let [m] = (0, _.useState)(() => gf({
  nodes: e,
  edges: t,
  defaultNodes: n,
  defaultEdges: r,
  width: i,
  height: a,
  fitView: l,
  minZoom: o,
  maxZoom: s,
  fitViewOptions: c,
  nodeOrigin: u,
  nodeExtent: d,
  zIndexMode: f
 }));
 return (0, b.jsx)(vl, {
  value: m,
  children: (0, b.jsx)(mu, {
   children: (0, b.jsx)(zu, {
    children: p
   })
  })
 })
}

function vf({
 children: e,
 nodes: t,
 edges: n,
 defaultNodes: r,
 defaultEdges: i,
 width: a,
 height: o,
 fitView: s,
 fitViewOptions: c,
 minZoom: l,
 maxZoom: u,
 nodeOrigin: d,
 nodeExtent: f,
 zIndexMode: p
}) {
 return (0, _.useContext)(_l) ? (0, b.jsx)(b.Fragment, {
  children: e
 }) : (0, b.jsx)(_f, {
  initialNodes: t,
  initialEdges: n,
  defaultNodes: r,
  defaultEdges: i,
  initialWidth: a,
  initialHeight: o,
  fitView: s,
  initialFitViewOptions: c,
  initialMinZoom: l,
  initialMaxZoom: u,
  nodeOrigin: d,
  nodeExtent: f,
  zIndexMode: p,
  children: e
 })
}
var yf = {
 width: `100%`,
 height: `100%`,
 overflow: `hidden`,
 position: `relative`,
 zIndex: 0
};

function bf({
 nodes: e,
 edges: t,
 defaultNodes: n,
 defaultEdges: r,
 className: i,
 nodeTypes: a,
 edgeTypes: o,
 onNodeClick: s,
 onEdgeClick: c,
 onInit: l,
 onMove: u,
 onMoveStart: d,
 onMoveEnd: f,
 onConnect: p,
 onConnectStart: m,
 onConnectEnd: h,
 onClickConnectStart: g,
 onClickConnectEnd: v,
 onNodeMouseEnter: y,
 onNodeMouseMove: S,
 onNodeMouseLeave: C,
 onNodeContextMenu: w,
 onNodeDoubleClick: T,
 onNodeDragStart: E,
 onNodeDrag: D,
 onNodeDragStop: O,
 onNodesDelete: k,
 onEdgesDelete: A,
 onDelete: j,
 onSelectionChange: M,
 onSelectionDragStart: N,
 onSelectionDrag: P,
 onSelectionDragStop: F,
 onSelectionContextMenu: ee,
 onSelectionStart: te,
 onSelectionEnd: ne,
 onBeforeDelete: re,
 connectionMode: I,
 connectionLineType: ie = wo.Bezier,
 connectionLineStyle: L,
 connectionLineComponent: ae,
 connectionLineContainerStyle: oe,
 deleteKeyCode: se = `Backspace`,
 selectionKeyCode: ce = `Shift`,
 selectionOnDrag: le = !1,
 selectionMode: ue = So.Full,
 panActivationKeyCode: de = `Space`,
 multiSelectionKeyCode: fe = ss() ? `Meta` : `Control`,
 zoomActivationKeyCode: R = ss() ? `Meta` : `Control`,
 snapToGrid: z,
 snapGrid: pe,
 onlyRenderVisibleElements: me = !1,
 selectNodesOnDrag: he,
 nodesDraggable: ge,
 autoPanOnNodeFocus: _e,
 nodesConnectable: ve,
 nodesFocusable: ye,
 nodeOrigin: be = zl,
 edgesFocusable: xe,
 edgesReconnectable: Se,
 elementsSelectable: Ce = !0,
 defaultViewport: we = Bl,
 minZoom: Te = .5,
 maxZoom: Ee = 2,
 translateExtent: De = _o,
 preventScrolling: Oe = !0,
 nodeExtent: ke,
 defaultMarkerColor: Ae = `#b1b1b7`,
 zoomOnScroll: je = !0,
 zoomOnPinch: Me = !0,
 panOnScroll: Ne = !1,
 panOnScrollSpeed: Pe = .5,
 panOnScrollMode: Fe = xo.Free,
 zoomOnDoubleClick: Ie = !0,
 panOnDrag: Le = !0,
 onPaneClick: Re,
 onPaneMouseEnter: ze,
 onPaneMouseMove: Be,
 onPaneMouseLeave: Ve,
 onPaneScroll: He,
 onPaneContextMenu: Ue,
 paneClickDistance: We = 1,
 nodeClickDistance: Ge = 0,
 children: Ke,
 onReconnect: qe,
 onReconnectStart: Je,
 onReconnectEnd: Ye,
 onEdgeContextMenu: Xe,
 onEdgeDoubleClick: Ze,
 onEdgeMouseEnter: Qe,
 onEdgeMouseMove: $e,
 onEdgeMouseLeave: et,
 reconnectRadius: tt = 10,
 onNodesChange: nt,
 onEdgesChange: rt,
 noDragClassName: it = `nodrag`,
 noWheelClassName: at = `nowheel`,
 noPanClassName: ot = `nopan`,
 fitView: st,
 fitViewOptions: ct,
 connectOnClick: lt,
 attributionPosition: ut,
 proOptions: dt,
 defaultEdgeOptions: ft,
 elevateNodesOnSelect: pt = !0,
 elevateEdgesOnSelect: mt = !1,
 disableKeyboardA11y: ht = !1,
 autoPanOnConnect: gt,
 autoPanOnNodeDrag: _t,
 autoPanOnSelection: vt = !0,
 autoPanSpeed: yt,
 connectionRadius: bt,
 isValidConnection: xt,
 onError: St,
 style: Ct,
 id: wt,
 nodeDragThreshold: Tt,
 connectionDragThreshold: Et,
 viewport: Dt,
 onViewportChange: Ot,
 width: kt,
 height: At,
 colorMode: jt = `light`,
 debug: Mt,
 onScroll: Nt,
 ariaLabelConfig: Pt,
 zIndexMode: Ft = `basic`,
 ...It
}, Lt) {
 let Rt = wt || `1`,
  zt = Kl(jt),
  Bt = (0, _.useCallback)(e => {
   e.currentTarget.scrollTo({
    top: 0,
    left: 0,
    behavior: `instant`
   }), Nt?.(e)
  }, [Nt]);
 return (0, b.jsx)(`div`, {
  "data-testid": `rf__wrapper`,
  ...It,
  onScroll: Bt,
  style: {
   ...Ct,
   ...yf
  },
  ref: Lt,
  className: x([`react-flow`, i, zt]),
  id: wt,
  role: `application`,
  children: (0, b.jsxs)(vf, {
   nodes: e,
   edges: t,
   width: kt,
   height: At,
   fitView: st,
   fitViewOptions: ct,
   minZoom: Te,
   maxZoom: Ee,
   nodeOrigin: be,
   nodeExtent: ke,
   zIndexMode: Ft,
   children: [(0, b.jsx)(Wl, {
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    onConnect: p,
    onConnectStart: m,
    onConnectEnd: h,
    onClickConnectStart: g,
    onClickConnectEnd: v,
    nodesDraggable: ge,
    autoPanOnNodeFocus: _e,
    nodesConnectable: ve,
    nodesFocusable: ye,
    edgesFocusable: xe,
    edgesReconnectable: Se,
    elementsSelectable: Ce,
    elevateNodesOnSelect: pt,
    elevateEdgesOnSelect: mt,
    minZoom: Te,
    maxZoom: Ee,
    nodeExtent: ke,
    onNodesChange: nt,
    onEdgesChange: rt,
    snapToGrid: z,
    snapGrid: pe,
    connectionMode: I,
    translateExtent: De,
    connectOnClick: lt,
    defaultEdgeOptions: ft,
    fitView: st,
    fitViewOptions: ct,
    onNodesDelete: k,
    onEdgesDelete: A,
    onDelete: j,
    onNodeDragStart: E,
    onNodeDrag: D,
    onNodeDragStop: O,
    onSelectionDrag: P,
    onSelectionDragStart: N,
    onSelectionDragStop: F,
    onMove: u,
    onMoveStart: d,
    onMoveEnd: f,
    noPanClassName: ot,
    nodeOrigin: be,
    rfId: Rt,
    autoPanOnConnect: gt,
    autoPanOnNodeDrag: _t,
    autoPanSpeed: yt,
    onError: St,
    connectionRadius: bt,
    isValidConnection: xt,
    selectNodesOnDrag: he,
    nodeDragThreshold: Tt,
    connectionDragThreshold: Et,
    onBeforeDelete: re,
    debug: Mt,
    ariaLabelConfig: Pt,
    zIndexMode: Ft
   }), (0, b.jsx)(pf, {
    onInit: l,
    onNodeClick: s,
    onEdgeClick: c,
    onNodeMouseEnter: y,
    onNodeMouseMove: S,
    onNodeMouseLeave: C,
    onNodeContextMenu: w,
    onNodeDoubleClick: T,
    nodeTypes: a,
    edgeTypes: o,
    connectionLineType: ie,
    connectionLineStyle: L,
    connectionLineComponent: ae,
    connectionLineContainerStyle: oe,
    selectionKeyCode: ce,
    selectionOnDrag: le,
    selectionMode: ue,
    deleteKeyCode: se,
    multiSelectionKeyCode: fe,
    panActivationKeyCode: de,
    zoomActivationKeyCode: R,
    onlyRenderVisibleElements: me,
    defaultViewport: we,
    translateExtent: De,
    minZoom: Te,
    maxZoom: Ee,
    preventScrolling: Oe,
    zoomOnScroll: je,
    zoomOnPinch: Me,
    zoomOnDoubleClick: Ie,
    panOnScroll: Ne,
    panOnScrollSpeed: Pe,
    panOnScrollMode: Fe,
    panOnDrag: Le,
    autoPanOnSelection: vt,
    onPaneClick: Re,
    onPaneMouseEnter: ze,
    onPaneMouseMove: Be,
    onPaneMouseLeave: Ve,
    onPaneScroll: He,
    onPaneContextMenu: Ue,
    paneClickDistance: We,
    nodeClickDistance: Ge,
    onSelectionContextMenu: ee,
    onSelectionStart: te,
    onSelectionEnd: ne,
    onReconnect: qe,
    onReconnectStart: Je,
    onReconnectEnd: Ye,
    onEdgeContextMenu: Xe,
    onEdgeDoubleClick: Ze,
    onEdgeMouseEnter: Qe,
    onEdgeMouseMove: $e,
    onEdgeMouseLeave: et,
    reconnectRadius: tt,
    defaultMarkerColor: Ae,
    noDragClassName: it,
    noWheelClassName: at,
    noPanClassName: ot,
    rfId: Rt,
    disableKeyboardA11y: ht,
    nodeExtent: ke,
    viewport: Dt,
    onViewportChange: Ot,
    nodesDraggable: ge
   }), (0, b.jsx)(Rl, {
    onSelectionChange: M
   }), Ke, (0, b.jsx)(Ml, {
    proOptions: dt,
    position: ut
   }), (0, b.jsx)(kl, {
    rfId: Rt,
    disableKeyboardA11y: ht
   })]
  })
 })
}
var xf = lu(bf),
 Sf = e => e.domNode?.querySelector(`.react-flow__edgelabel-renderer`);

function Cf({
 children: e
}) {
 let t = W(Sf);
 return t ? (0, gl.createPortal)(e, t) : null
}
go.error014();

function wf({
 dimensions: e,
 lineWidth: t,
 variant: n,
 className: r
}) {
 return (0, b.jsx)(`path`, {
  strokeWidth: t,
  d: `M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,
  className: x([`react-flow__background-pattern`, n, r])
 })
}

function Tf({
 radius: e,
 className: t
}) {
 return (0, b.jsx)(`circle`, {
  cx: e,
  cy: e,
  r: e,
  className: x([`react-flow__background-pattern`, `dots`, t])
 })
}
var Ef;
(function(e) {
 e.Lines = `lines`, e.Dots = `dots`, e.Cross = `cross`
})(Ef || (Ef = {}));
var Df = {
  [Ef.Dots]: 1,
  [Ef.Lines]: 1,
  [Ef.Cross]: 6
 },
 Of = e => ({
  transform: e.transform,
  patternId: `pattern-${e.rfId}`
 });

function kf({
 id: e,
 variant: t = Ef.Dots,
 gap: n = 20,
 size: r,
 lineWidth: i = 1,
 offset: a = 0,
 color: o,
 bgColor: s,
 style: c,
 className: l,
 patternClassName: u
}) {
 let d = (0, _.useRef)(null),
  {
   transform: f,
   patternId: p
  } = W(Of, hl),
  m = r || Df[t],
  h = t === Ef.Dots,
  g = t === Ef.Cross,
  v = Array.isArray(n) ? n : [n, n],
  y = [v[0] * f[2] || 1, v[1] * f[2] || 1],
  S = m * f[2],
  C = Array.isArray(a) ? a : [a, a],
  w = g ? [S, S] : y,
  T = [C[0] * f[2] + w[0] / 2, C[1] * f[2] + w[1] / 2],
  E = `${p}${e||``}`;
 return (0, b.jsxs)(`svg`, {
  className: x([`react-flow__background`, l]),
  style: {
   ...c,
   ...Su,
   "--xy-background-color-props": s,
   "--xy-background-pattern-color-props": o
  },
  ref: d,
  "data-testid": `rf__background`,
  children: [(0, b.jsx)(`pattern`, {
   id: E,
   x: f[0] % y[0],
   y: f[1] % y[1],
   width: y[0],
   height: y[1],
   patternUnits: `userSpaceOnUse`,
   patternTransform: `translate(-${T[0]},-${T[1]})`,
   children: h ? (0, b.jsx)(Tf, {
    radius: S / 2,
    className: u
   }) : (0, b.jsx)(wf, {
    dimensions: w,
    lineWidth: i,
    variant: t,
    className: u
   })
  }), (0, b.jsx)(`rect`, {
   x: `0`,
   y: `0`,
   width: `100%`,
   height: `100%`,
   fill: `url(#${E})`
  })]
 })
}
kf.displayName = `Background`;
var Af = (0, _.memo)(kf);

function jf() {
 return (0, b.jsx)(`svg`, {
  xmlns: `http://www.w3.org/2000/svg`,
  viewBox: `0 0 32 32`,
  children: (0, b.jsx)(`path`, {
   d: `M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z`
  })
 })
}

function Mf() {
 return (0, b.jsx)(`svg`, {
  xmlns: `http://www.w3.org/2000/svg`,
  viewBox: `0 0 32 5`,
  children: (0, b.jsx)(`path`, {
   d: `M0 0h32v4.2H0z`
  })
 })
}

function Nf() {
 return (0, b.jsx)(`svg`, {
  xmlns: `http://www.w3.org/2000/svg`,
  viewBox: `0 0 32 30`,
  children: (0, b.jsx)(`path`, {
   d: `M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z`
  })
 })
}

function Pf() {
 return (0, b.jsx)(`svg`, {
  xmlns: `http://www.w3.org/2000/svg`,
  viewBox: `0 0 25 32`,
  children: (0, b.jsx)(`path`, {
   d: `M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z`
  })
 })
}

function Ff() {
 return (0, b.jsx)(`svg`, {
  xmlns: `http://www.w3.org/2000/svg`,
  viewBox: `0 0 25 32`,
  children: (0, b.jsx)(`path`, {
   d: `M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z`
  })
 })
}

function If({
 children: e,
 className: t,
 ...n
}) {
 return (0, b.jsx)(`button`, {
  type: `button`,
  className: x([`react-flow__controls-button`, t]),
  ...n,
  children: e
 })
}
var Lf = e => ({
 isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
 minZoomReached: e.transform[2] <= e.minZoom,
 maxZoomReached: e.transform[2] >= e.maxZoom,
 ariaLabelConfig: e.ariaLabelConfig
});

function Rf({
 style: e,
 showZoom: t = !0,
 showFitView: n = !0,
 showInteractive: r = !0,
 fitViewOptions: i,
 onZoomIn: a,
 onZoomOut: o,
 onFitView: s,
 onInteractiveChange: c,
 className: l,
 children: u,
 position: d = `bottom-left`,
 orientation: f = `vertical`,
 "aria-label": p
}) {
 let m = bl(),
  {
   isInteractive: h,
   minZoomReached: g,
   maxZoomReached: _,
   ariaLabelConfig: v
  } = W(Lf, hl),
  {
   zoomIn: y,
   zoomOut: S,
   fitView: C
  } = _u();
 return (0, b.jsxs)(Al, {
  className: x([`react-flow__controls`, f === `horizontal` ? `horizontal` : `vertical`, l]),
  position: d,
  style: e,
  "data-testid": `rf__controls`,
  "aria-label": p ?? v[`controls.ariaLabel`],
  children: [t && (0, b.jsxs)(b.Fragment, {
   children: [(0, b.jsx)(If, {
    onClick: () => {
     y(), a?.()
    },
    className: `react-flow__controls-zoomin`,
    title: v[`controls.zoomIn.ariaLabel`],
    "aria-label": v[`controls.zoomIn.ariaLabel`],
    disabled: _,
    children: (0, b.jsx)(jf, {})
   }), (0, b.jsx)(If, {
    onClick: () => {
     S(), o?.()
    },
    className: `react-flow__controls-zoomout`,
    title: v[`controls.zoomOut.ariaLabel`],
    "aria-label": v[`controls.zoomOut.ariaLabel`],
    disabled: g,
    children: (0, b.jsx)(Mf, {})
   })]
  }), n && (0, b.jsx)(If, {
   className: `react-flow__controls-fitview`,
   onClick: () => {
    C(i), s?.()
   },
   title: v[`controls.fitView.ariaLabel`],
   "aria-label": v[`controls.fitView.ariaLabel`],
   children: (0, b.jsx)(Nf, {})
  }), r && (0, b.jsx)(If, {
   className: `react-flow__controls-interactive`,
   onClick: () => {
    m.setState({
     nodesDraggable: !h,
     nodesConnectable: !h,
     elementsSelectable: !h
    }), c?.(!h)
   },
   title: v[`controls.interactive.ariaLabel`],
   "aria-label": v[`controls.interactive.ariaLabel`],
   children: h ? (0, b.jsx)(Ff, {}) : (0, b.jsx)(Pf, {})
  }), u]
 })
}
Rf.displayName = `Controls`, (0, _.memo)(Rf);

function zf({
 id: e,
 x: t,
 y: n,
 width: r,
 height: i,
 style: a,
 color: o,
 strokeColor: s,
 strokeWidth: c,
 className: l,
 borderRadius: u,
 shapeRendering: d,
 selected: f,
 onClick: p
}) {
 let {
  background: m,
  backgroundColor: h
 } = a || {}, g = o || m || h;
 return (0, b.jsx)(`rect`, {
  className: x([`react-flow__minimap-node`, {
   selected: f
  }, l]),
  x: t,
  y: n,
  rx: u,
  ry: u,
  width: r,
  height: i,
  style: {
   fill: g,
   stroke: s,
   strokeWidth: c
  },
  shapeRendering: d,
  onClick: p ? t => p(t, e) : void 0
 })
}
var Bf = (0, _.memo)(zf),
 Vf = e => e.nodes.map(e => e.id),
 Hf = e => e instanceof Function ? e : () => e;

function Uf({
 nodeStrokeColor: e,
 nodeColor: t,
 nodeClassName: n = ``,
 nodeBorderRadius: r = 5,
 nodeStrokeWidth: i,
 nodeComponent: a = Bf,
 onClick: o
}) {
 let s = W(Vf, hl),
  c = Hf(t),
  l = Hf(e),
  u = Hf(n),
  d = typeof window > `u` || window.chrome ? `crispEdges` : `geometricPrecision`;
 return (0, b.jsx)(b.Fragment, {
  children: s.map(e => (0, b.jsx)(Y, {
   id: e,
   nodeColorFunc: c,
   nodeStrokeColorFunc: l,
   nodeClassNameFunc: u,
   nodeBorderRadius: r,
   nodeStrokeWidth: i,
   NodeComponent: a,
   onClick: o,
   shapeRendering: d
  }, e))
 })
}

function Wf({
 id: e,
 nodeColorFunc: t,
 nodeStrokeColorFunc: n,
 nodeClassNameFunc: r,
 nodeBorderRadius: i,
 nodeStrokeWidth: a,
 shapeRendering: o,
 NodeComponent: s,
 onClick: c
}) {
 let {
  node: l,
  x: u,
  y: d,
  width: f,
  height: p
 } = W(t => {
  let n = t.nodeLookup.get(e);
  if (!n) return {
   node: void 0,
   x: 0,
   y: 0,
   width: 0,
   height: 0
  };
  let r = n.internals.userNode,
   {
    x: i,
    y: a
   } = n.internals.positionAbsolute,
   {
    width: o,
    height: s
   } = ls(r);
  return {
   node: r,
   x: i,
   y: a,
   width: o,
   height: s
  }
 }, hl);
 return !l || l.hidden || !us(l) ? null : (0, b.jsx)(s, {
  x: u,
  y: d,
  width: f,
  height: p,
  style: l.style,
  selected: !!l.selected,
  className: r(l),
  color: t(l),
  borderRadius: i,
  strokeColor: n(l),
  strokeWidth: a,
  shapeRendering: o,
  onClick: c,
  id: l.id
 })
}
var Y = (0, _.memo)(Wf),
 Gf = (0, _.memo)(Uf),
 Kf = 200,
 qf = 150,
 Jf = e => !e.hidden,
 Yf = e => {
  let t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
   },
   n = !1;
  for (let t of e.nodeLookup.values())
   if (!t.hidden) {
    n = !0;
    break
   } return {
   viewBB: t,
   boundingRect: n ? Jo(Mo(e.nodeLookup, {
    filter: Jf
   }), t) : t,
   rfId: e.rfId,
   panZoom: e.panZoom,
   translateExtent: e.translateExtent,
   flowWidth: e.width,
   flowHeight: e.height,
   ariaLabelConfig: e.ariaLabelConfig
  }
 },
 Xf = (e, t) => e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height,
 Zf = (e, t) => Xf(e.viewBB, t.viewBB) && Xf(e.boundingRect, t.boundingRect) && e.rfId === t.rfId && e.panZoom === t.panZoom && e.translateExtent === t.translateExtent && e.flowWidth === t.flowWidth && e.flowHeight === t.flowHeight && e.ariaLabelConfig === t.ariaLabelConfig,
 Qf = `react-flow__minimap-desc`;

function $f({
 style: e,
 className: t,
 nodeStrokeColor: n,
 nodeColor: r,
 nodeClassName: i = ``,
 nodeBorderRadius: a = 5,
 nodeStrokeWidth: o,
 nodeComponent: s,
 bgColor: c,
 maskColor: l,
 maskStrokeColor: u,
 maskStrokeWidth: d,
 position: f = `bottom-right`,
 onClick: p,
 onNodeClick: m,
 pannable: h = !1,
 zoomable: g = !1,
 ariaLabel: v,
 inversePan: y,
 zoomStep: S = 1,
 offsetScale: C = 5
}) {
 let w = bl(),
  T = (0, _.useRef)(null),
  {
   boundingRect: E,
   panZoom: D,
   viewBB: O,
   rfId: k,
   translateExtent: A,
   flowWidth: j,
   flowHeight: M,
   ariaLabelConfig: N
  } = W(Yf, Zf),
  P = e?.width ?? Kf,
  F = e?.height ?? qf,
  ee = E.width / P,
  te = E.height / F,
  ne = Math.max(ee, te),
  re = ne * P,
  I = ne * F,
  ie = C * ne,
  L = E.x - (re - E.width) / 2 - ie,
  ae = E.y - (I - E.height) / 2 - ie,
  oe = re + ie * 2,
  se = I + ie * 2,
  ce = `${Qf}-${k}`,
  le = (0, _.useRef)(0),
  ue = (0, _.useRef)();
 le.current = ne, (0, _.useEffect)(() => {
  let e = w.getState().panZoom;
  if (T.current && e) return ue.current = Ac({
   domNode: T.current,
   panZoom: e,
   getTransform: () => w.getState().transform,
   getViewScale: () => le.current
  }), () => {
   ue.current?.destroy()
  }
 }, [D]), (0, _.useEffect)(() => {
  ue.current?.update({
   translateExtent: A,
   width: j,
   height: M,
   inversePan: y,
   pannable: h,
   zoomStep: S,
   zoomable: g
  })
 }, [h, g, y, S, A, j, M]);
 let de = p ? e => {
   let [t, n] = ue.current?.pointer(e) || [0, 0];
   p(e, {
    x: t,
    y: n
   })
  } : void 0,
  fe = (0, _.useCallback)((e, t) => {
   let n = w.getState().nodeLookup.get(t).internals.userNode;
   m?.(e, n)
  }, [m]),
  R = m ? fe : void 0,
  z = v ?? N[`minimap.ariaLabel`];
 return (0, b.jsx)(Al, {
  position: f,
  style: {
   ...e,
   "--xy-minimap-background-color-props": typeof c == `string` ? c : void 0,
   "--xy-minimap-mask-background-color-props": typeof l == `string` ? l : void 0,
   "--xy-minimap-mask-stroke-color-props": typeof u == `string` ? u : void 0,
   "--xy-minimap-mask-stroke-width-props": typeof d == `number` ? d * ne : void 0,
   "--xy-minimap-node-background-color-props": typeof r == `string` ? r : void 0,
   "--xy-minimap-node-stroke-color-props": typeof n == `string` ? n : void 0,
   "--xy-minimap-node-stroke-width-props": typeof o == `number` ? o : void 0
  },
  className: x([`react-flow__minimap`, t]),
  "data-testid": `rf__minimap`,
  children: (0, b.jsxs)(`svg`, {
   width: P,
   height: F,
   viewBox: `${L} ${ae} ${oe} ${se}`,
   className: `react-flow__minimap-svg`,
   role: `img`,
   "aria-labelledby": ce,
   ref: T,
   onClick: de,
   children: [z && (0, b.jsx)(`title`, {
    id: ce,
    children: z
   }), (0, b.jsx)(Gf, {
    onClick: R,
    nodeColor: r,
    nodeStrokeColor: n,
    nodeBorderRadius: a,
    nodeClassName: i,
    nodeStrokeWidth: o,
    nodeComponent: s
   }), (0, b.jsx)(`path`, {
    className: `react-flow__minimap-mask`,
    d: `M${L-ie},${ae-ie}h${oe+ie*2}v${se+ie*2}h${-oe-ie*2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`,
    fillRule: `evenodd`,
    pointerEvents: `none`
   })]
  })
 })
}
$f.displayName = `MiniMap`, (0, _.memo)($f);
var ep = e => t => e ? `${Math.max(1/t.transform[2],1)}` : void 0,
 tp = {
  [Gc.Line]: `right`,
  [Gc.Handle]: `bottom-right`
 };

function np({
 nodeId: e,
 position: t,
 variant: n = Gc.Handle,
 className: r,
 style: i = void 0,
 children: a,
 color: o,
 minWidth: s = 10,
 minHeight: c = 10,
 maxWidth: l = Number.MAX_VALUE,
 maxHeight: u = Number.MAX_VALUE,
 keepAspectRatio: d = !1,
 resizeDirection: f,
 autoScale: p = !0,
 shouldResize: m,
 onResizeStart: h,
 onResize: g,
 onResizeEnd: v
}) {
 let y = Iu(),
  S = typeof e == `string` ? e : y,
  C = bl(),
  w = (0, _.useRef)(null),
  T = n === Gc.Handle,
  E = W((0, _.useCallback)(ep(T && p), [T, p]), hl),
  D = (0, _.useRef)(null),
  O = t ?? tp[n];
 (0, _.useEffect)(() => {
  if (w.current && S) return D.current || (D.current = nl({
   domNode: w.current,
   nodeId: S,
   getStoreItems: () => {
    let {
     nodeLookup: e,
     transform: t,
     snapGrid: n,
     snapToGrid: r,
     nodeOrigin: i,
     domNode: a
    } = C.getState();
    return {
     nodeLookup: e,
     transform: t,
     snapGrid: n,
     snapToGrid: r,
     nodeOrigin: i,
     paneDomNode: a
    }
   },
   onChange: (e, t) => {
    let {
     triggerNodeChanges: n,
     nodeLookup: r,
     parentLookup: i,
     nodeOrigin: a
    } = C.getState(), o = [], s = {
     x: e.x,
     y: e.y
    }, c = r.get(S);
    if (c && c.expandParent && c.parentId) {
     let t = c.origin ?? a,
      n = e.width ?? c.measured.width ?? 0,
      l = e.height ?? c.measured.height ?? 0,
      u = lc([{
       id: c.id,
       parentId: c.parentId,
       rect: {
        width: n,
        height: l,
        ...ds({
         x: e.x ?? c.position.x,
         y: e.y ?? c.position.y
        }, {
         width: n,
         height: l
        }, c.parentId, r, t)
       }
      }], r, i, a);
     o.push(...u), s.x = e.x ? Math.max(t[0] * n, e.x) : void 0, s.y = e.y ? Math.max(t[1] * l, e.y) : void 0
    }
    if (s.x !== void 0 && s.y !== void 0) {
     let e = {
      id: S,
      type: `position`,
      position: {
       ...s
      }
     };
     o.push(e)
    }
    if (e.width !== void 0 && e.height !== void 0) {
     let t = {
      id: S,
      type: `dimensions`,
      resizing: !0,
      setAttributes: f ? f === `horizontal` ? `width` : `height` : !0,
      dimensions: {
       width: e.width,
       height: e.height
      }
     };
     o.push(t)
    }
    for (let e of t) {
     let t = {
      ...e,
      type: `position`
     };
     o.push(t)
    }
    n(o)
   },
   onEnd: ({
    width: e,
    height: t
   }) => {
    let n = {
     id: S,
     type: `dimensions`,
     resizing: !1,
     dimensions: {
      width: e,
      height: t
     }
    };
    C.getState().triggerNodeChanges([n])
   }
  })), D.current.update({
   controlPosition: O,
   boundaries: {
    minWidth: s,
    minHeight: c,
    maxWidth: l,
    maxHeight: u
   },
   keepAspectRatio: d,
   resizeDirection: f,
   onResizeStart: h,
   onResize: g,
   onResizeEnd: v,
   shouldResize: m
  }), () => {
   D.current?.destroy()
  }
 }, [O, s, c, l, u, d, h, g, v, m]);
 let k = O.split(`-`);
 return (0, b.jsx)(`div`, {
  className: x([`react-flow__resize-control`, `nodrag`, ...k, n, r]),
  ref: w,
  style: {
   ...i,
   scale: E,
   ...o && {
    [T ? `backgroundColor` : `borderColor`]: o
   }
  },
  children: a
 })
}(0, _.memo)(np);
var rp = e => e.domNode?.querySelector(`.react-flow__renderer`);

function ip({
 children: e
}) {
 let t = W(rp);
 return t ? (0, gl.createPortal)(e, t) : null
}
var ap = (e, t) => e?.internals.positionAbsolute.x !== t?.internals.positionAbsolute.x || e?.internals.positionAbsolute.y !== t?.internals.positionAbsolute.y || e?.measured.width !== t?.measured.width || e?.measured.height !== t?.measured.height || e?.selected !== t?.selected || e?.internals.z !== t?.internals.z,
 op = (e, t) => {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e)
   if (ap(r, t.get(n))) return !1;
  return !0
 },
 sp = e => ({
  x: e.transform[0],
  y: e.transform[1],
  zoom: e.transform[2],
  selectedNodesCount: e.nodes.filter(e => e.selected).length
 });

function cp({
 nodeId: e,
 children: t,
 className: n,
 style: r,
 isVisible: i,
 position: a = H.Top,
 offset: o = 10,
 align: s = `center`,
 ...c
}) {
 let l = Iu(),
  u = W((0, _.useCallback)(t => (Array.isArray(e) ? e : [e || l || ``]).reduce((e, n) => {
   let r = t.nodeLookup.get(n);
   return r && e.set(r.id, r), e
  }, new Map), [e, l]), op),
  {
   x: d,
   y: f,
   zoom: p,
   selectedNodesCount: m
  } = W(sp, hl);
 if (!(typeof i == `boolean` ? i : u.size === 1 && u.values().next().value?.selected && m === 1) || !u.size) return null;
 let h = Mo(u),
  g = Array.from(u.values()),
  v = Math.max(...g.map(e => e.internals.z + 1)),
  y = {
   position: `absolute`,
   transform: Ys(h, {
    x: d,
    y: f,
    zoom: p
   }, a, o, s),
   zIndex: v,
   ...r
  };
 return (0, b.jsx)(ip, {
  children: (0, b.jsx)(`div`, {
   style: y,
   className: x([`react-flow__node-toolbar`, n]),
   ...c,
   "data-id": g.reduce((e, t) => `${e}${t.id} `, ``).trim(),
   children: t
  })
 })
}
var lp = e => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();

function up(e, t, n = []) {
 if (t == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
 return {
  name: lp(e),
  size: 24,
  node: t,
  ...n.length > 0 ? {
   aliases: n
  } : {}
 }
}
var dp = e => {
  let t = ``,
   n = !1;
  for (let r of e) r === `-` || r === `_` || r <= ` ` ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
  return t
 },
 fp = e => {
  let t = dp(e);
  return t.charAt(0).toUpperCase() + t.slice(1)
 },
 pp = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
 mp = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  "stroke-width": 2,
  "stroke-linecap": `round`,
  "stroke-linejoin": `round`
 };

function hp(e) {
 return e != null
}

function gp(e, t = {}) {
 let n = t.attributeNames ?? {},
  r = e => n[e] ?? e,
  i = e.size ?? e.width ?? mp.width,
  a = e.size ?? e.height ?? mp.height,
  o = e.aliases?.filter(e => typeof e == `string` && e.trim() !== ``).map(e => `lucide-${e}`) ?? [],
  s = [...e.name ? [`lucide-${e.name}`] : [], ...o],
  c = t.className?.split(` `).filter(Boolean) ?? [],
  l = t.includeDefaultClasses === !1 ? pp(...c) : pp(`lucide`, ...s, ...c),
  u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? mp[`stroke-width`]) * Number(e.size ?? e.width ?? mp.width) / Number(t.size ?? t.width ?? mp.width) : t.strokeWidth ?? mp[`stroke-width`];
 return [`svg`, {
  ...Object.entries(mp).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
  ...`color` in t && t.color && {
   [r(`stroke`)]: t.color
  },
  ...`size` in t && hp(t.size) && {
   [r(`width`)]: t.size,
   [r(`height`)]: t.size
  },
  ...`width` in t && hp(t.width) && {
   [r(`width`)]: t.width
  },
  ...`height` in t && hp(t.height) && {
   [r(`height`)]: t.height
  },
  [r(`stroke-width`)]: u,
  ...l && {
   [r(`class`)]: l
  },
  [r(`viewBox`)]: `0 0 ${i} ${a}`,
  ...t.hasA11yProp === !1 ? {
   [r(`aria-hidden`)]: `true`
  } : {},
  ...`attributes` in t && t.attributes
 }, e.node.map(e => {
  let [n, i, a] = e, o = t.nonScalingStroke ? {
   [r(`vector-effect`)]: `non-scaling-stroke`,
   ...i
  } : i;
  return a ? [n, o, a] : [n, o]
 })]
}

function _p(e, t = {}) {
 return gp(e, {
  ...t,
  attributeNames: {
   ...t.attributeNames,
   class: `className`,
   "stroke-width": `strokeWidth`,
   "stroke-linecap": `strokeLinecap`,
   "stroke-linejoin": `strokeLinejoin`,
   "vector-effect": `vectorEffect`
  }
 })
}
var vp = e => {
  for (let t in e)
   if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  return !1
 },
 yp = (0, _.createContext)({}),
 bp = () => (0, _.useContext)(yp),
 xp = (0, _.forwardRef)(({
  color: e,
  size: t,
  width: n,
  height: r,
  strokeWidth: i,
  absoluteStrokeWidth: a,
  nonScalingStroke: o,
  className: s = ``,
  children: c,
  iconNode: l = [],
  icon: u = {
   node: l,
   aliases: [],
   size: 24
  },
  ...d
 }, f) => {
  let {
   size: p = 24,
   strokeWidth: m = 2,
   absoluteStrokeWidth: h = !1,
   nonScalingStroke: g = !1,
   color: v = `currentColor`,
   className: y = ``
  } = bp() ?? {}, b = !!c || vp(d), [x, S, C = []] = _p(u, {
   color: e ?? v,
   width: n ?? t ?? p,
   height: r ?? t ?? p,
   strokeWidth: i ?? m,
   absoluteStrokeWidth: a ?? h,
   nonScalingStroke: o ?? g,
   className: pp(y, s),
   hasA11yProp: b,
   attributes: d
  });
  return (0, _.createElement)(x, {
   ref: f,
   ...S
  }, [...C.map(([e, t]) => (0, _.createElement)(e, t)), ...Array.isArray(c) ? c : [c]])
 });

function X(e, t = [], n = []) {
 let r = typeof e == `string` ? up(e, t, n) : e,
  i = (0, _.forwardRef)(({
   className: e,
   ...t
  }, n) => (0, _.createElement)(xp, {
   ref: n,
   icon: r,
   className: e,
   ...t
  }));
 return r.name && (i.displayName = fp(r.name)), i
}
var Sp = {
 name: `arrow-down`,
 size: 24,
 node: [
  [`path`, {
   d: `M12 5v14`,
   key: `s699le`
  }],
  [`path`, {
   d: `m19 12-7 7-7-7`,
   key: `1idqje`
  }]
 ]
};
Sp.node;
var Cp = X(Sp),
 wp = {
  name: `arrow-left`,
  size: 24,
  node: [
   [`path`, {
    d: `m12 19-7-7 7-7`,
    key: `1l729n`
   }],
   [`path`, {
    d: `M19 12H5`,
    key: `x3x0zl`
   }]
  ]
 };
wp.node;
var Tp = X(wp),
 Ep = {
  name: `arrow-right`,
  size: 24,
  node: [
   [`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
   }],
   [`path`, {
    d: `m12 5 7 7-7 7`,
    key: `xquz4c`
   }]
  ]
 };
Ep.node;
var Dp = X(Ep),
 Op = {
  name: `arrow-up`,
  size: 24,
  node: [
   [`path`, {
    d: `m5 12 7-7 7 7`,
    key: `hav0vg`
   }],
   [`path`, {
    d: `M12 19V5`,
    key: `x0mq9r`
   }]
  ]
 };
Op.node;
var kp = X(Op),
 Ap = {
  name: `banknote`,
  size: 24,
  node: [
   [`rect`, {
    width: `20`,
    height: `12`,
    x: `2`,
    y: `6`,
    rx: `2`,
    key: `9lu3g6`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `2`,
    key: `1c9p78`
   }],
   [`path`, {
    d: `M6 12h.01M18 12h.01`,
    key: `113zkx`
   }]
  ]
 };
Ap.node;
var jp = X(Ap),
 Mp = {
  name: `brackets`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3`,
    key: `1kt8lf`
   }],
   [`path`, {
    d: `M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3`,
    key: `gduv9`
   }]
  ]
 };
Mp.node;
var Np = X(Mp),
 Pp = {
  name: `briefcase`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,
    key: `jecpp`
   }],
   [`rect`, {
    width: `20`,
    height: `14`,
    x: `2`,
    y: `6`,
    rx: `2`,
    key: `i6l2r4`
   }]
  ]
 };
Pp.node;
var Fp = X(Pp),
 Ip = {
  name: `calendar`,
  size: 24,
  node: [
   [`path`, {
    d: `M8 2v3`,
    key: `1ioesn`
   }],
   [`path`, {
    d: `M16 2v3`,
    key: `otl347`
   }],
   [`rect`, {
    x: `3`,
    y: `3`,
    width: `18`,
    height: `18`,
    rx: `2`,
    key: `h1oib`
   }],
   [`path`, {
    d: `M3 9h18`,
    key: `1pudct`
   }]
  ]
 };
Ip.node;
var Lp = X(Ip),
 Rp = {
  name: `chart-column`,
  size: 24,
  node: [
   [`path`, {
    d: `M3 3v16a2 2 0 0 0 2 2h16`,
    key: `c24i48`
   }],
   [`path`, {
    d: `M18 17V9`,
    key: `2bz60n`
   }],
   [`path`, {
    d: `M13 17V5`,
    key: `1frdt8`
   }],
   [`path`, {
    d: `M8 17v-3`,
    key: `17ska0`
   }]
  ],
  aliases: [`bar-chart-3`]
 };
Rp.node;
var zp = X(Rp),
 Bp = {
  name: `check`,
  size: 24,
  node: [
   [`path`, {
    d: `M20 6 9 17l-5-5`,
    key: `1gmf2c`
   }]
  ]
 };
Bp.node;
var Vp = X(Bp),
 Hp = {
  name: `chevron-down`,
  size: 24,
  node: [
   [`path`, {
    d: `m6 9 6 6 6-6`,
    key: `qrunsl`
   }]
  ]
 };
Hp.node;
var Up = X(Hp),
 Wp = {
  name: `chevron-left`,
  size: 24,
  node: [
   [`path`, {
    d: `m15 18-6-6 6-6`,
    key: `1wnfg3`
   }]
  ]
 };
Wp.node;
var Gp = X(Wp),
 Kp = {
  name: `chevron-right`,
  size: 24,
  node: [
   [`path`, {
    d: `m9 18 6-6-6-6`,
    key: `mthhwq`
   }]
  ]
 };
Kp.node;
var qp = X(Kp),
 Jp = {
  name: `circle-check-big`,
  size: 24,
  node: [
   [`path`, {
    d: `M21.801 10A10 10 0 1 1 17 3.335`,
    key: `yps3ct`
   }],
   [`path`, {
    d: `m9 11 3 3L22 4`,
    key: `1pflzl`
   }]
  ],
  aliases: [`check-circle`]
 };
Jp.node;
var Yp = X(Jp),
 Xp = {
  name: `circle-check`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`path`, {
    d: `m16 9-5.5 5.5L8 12`,
    key: `xofnsj`
   }]
  ],
  aliases: [`check-circle-2`]
 };
Xp.node;
var Zp = X(Xp),
 Qp = {
  name: `circle-dot`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `1`,
    key: `41hilf`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }]
  ]
 };
Qp.node;
var $p = X(Qp),
 em = {
  name: `circle-exclamation-point`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`line`, {
    x1: `12`,
    x2: `12`,
    y1: `8`,
    y2: `12`,
    key: `1pkeuh`
   }],
   [`line`, {
    x1: `12`,
    x2: `12.01`,
    y1: `16`,
    y2: `16`,
    key: `4dfq90`
   }]
  ],
  aliases: [`alert-circle`, `circle-alert`]
 };
em.node;
var tm = X(em),
 nm = {
  name: `circle-question-mark`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`path`, {
    d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,
    key: `1u773s`
   }],
   [`path`, {
    d: `M12 17h.01`,
    key: `p32p05`
   }]
  ],
  aliases: [`help-circle`, `circle-help`]
 };
nm.node;
var rm = X(nm),
 im = {
  name: `clock`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`path`, {
    d: `M12 6v6l4 2`,
    key: `mmk7yg`
   }]
  ]
 };
im.node;
var am = X(im),
 om = {
  name: `cloud-off`,
  size: 24,
  node: [
   [`path`, {
    d: `M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057`,
    key: `1uxyv8`
   }],
   [`path`, {
    d: `M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78`,
    key: `99tcn7`
   }],
   [`path`, {
    d: `m2 2 20 20`,
    key: `1ooewy`
   }]
  ]
 };
om.node;
var sm = X(om),
 cm = {
  name: `corner-down-right`,
  size: 24,
  node: [
   [`path`, {
    d: `m15 10 5 5-5 5`,
    key: `qqa56n`
   }],
   [`path`, {
    d: `M4 4v7a4 4 0 0 0 4 4h12`,
    key: `z08zvw`
   }]
  ]
 };
cm.node;
var lm = X(cm),
 um = {
  name: `crown`,
  size: 24,
  node: [
   [`path`, {
    d: `M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,
    key: `1vdc57`
   }],
   [`path`, {
    d: `M5 21h14`,
    key: `11awu3`
   }]
  ]
 };
um.node;
var dm = X(um),
 fm = {
  name: `download`,
  size: 24,
  node: [
   [`path`, {
    d: `M12 15V3`,
    key: `m9g1x1`
   }],
   [`path`, {
    d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
    key: `ih7n3h`
   }],
   [`path`, {
    d: `m7 10 5 5 5-5`,
    key: `brsn70`
   }]
  ]
 };
fm.node;
var pm = X(fm),
 mm = {
  name: `face-grinning`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 10V9`,
    key: `4dkmfx`
   }],
   [`path`, {
    d: `M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302`,
    key: `1ad3z7`
   }],
   [`path`, {
    d: `M9 10V9`,
    key: `1lazqi`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }]
  ],
  aliases: [`laugh`]
 };
mm.node;
var hm = X(mm),
 gm = {
  name: `face-neutral`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 10V9`,
    key: `4dkmfx`
   }],
   [`path`, {
    d: `M8 16h8`,
    key: `10ke2u`
   }],
   [`path`, {
    d: `M9 10V9`,
    key: `1lazqi`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }]
  ],
  aliases: [`meh`]
 };
gm.node;
var _m = X(gm),
 vm = {
  name: `face-slightly-frowning`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 10V9`,
    key: `4dkmfx`
   }],
   [`path`, {
    d: `M9 10V9`,
    key: `1lazqi`
   }],
   [`path`, {
    d: `M9 16a5 5 0 016 0`,
    key: `34mdxb`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }]
  ],
  aliases: [`frown`]
 };
vm.node;
var ym = X(vm),
 bm = {
  name: `face-slightly-smiling`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 10V9`,
    key: `4dkmfx`
   }],
   [`path`, {
    d: `M16.472 15a6 6 0 01-8.943 0`,
    key: `7qomzy`
   }],
   [`path`, {
    d: `M9 10V9`,
    key: `1lazqi`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }]
  ],
  aliases: [`smile`]
 };
bm.node;
var xm = X(bm),
 Sm = {
  name: `file-braces`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
   }],
   [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
   }],
   [`path`, {
    d: `M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1`,
    key: `1oajmo`
   }],
   [`path`, {
    d: `M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1`,
    key: `mpwhp6`
   }]
  ],
  aliases: [`file-json`]
 };
Sm.node;
var Cm = X(Sm),
 wm = {
  name: `file-image`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
   }],
   [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
   }],
   [`circle`, {
    cx: `10`,
    cy: `12`,
    r: `2`,
    key: `737tya`
   }],
   [`path`, {
    d: `m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22`,
    key: `wt3hpn`
   }]
  ]
 };
wm.node;
var Tm = X(wm),
 Em = {
  name: `file-plus`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
   }],
   [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
   }],
   [`path`, {
    d: `M9 15h6`,
    key: `cctwl0`
   }],
   [`path`, {
    d: `M12 18v-6`,
    key: `17g6i2`
   }]
  ]
 };
Em.node;
var Dm = X(Em),
 Om = {
  name: `file-text`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
   }],
   [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
   }],
   [`path`, {
    d: `M10 9H8`,
    key: `b1mrlr`
   }],
   [`path`, {
    d: `M16 13H8`,
    key: `t4e002`
   }],
   [`path`, {
    d: `M16 17H8`,
    key: `z1uh3a`
   }]
  ]
 };
Om.node;
var km = X(Om),
 Am = {
  name: `file-type`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
    key: `1oefj6`
   }],
   [`path`, {
    d: `M14 2v5a1 1 0 0 0 1 1h5`,
    key: `wfsgrz`
   }],
   [`path`, {
    d: `M11 18h2`,
    key: `12mj7e`
   }],
   [`path`, {
    d: `M12 12v6`,
    key: `3ahymv`
   }],
   [`path`, {
    d: `M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5`,
    key: `qbrxap`
   }]
  ]
 };
Am.node;
var jm = X(Am),
 Mm = {
  name: `flag`,
  size: 24,
  node: [
   [`path`, {
    d: `M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,
    key: `1jaruq`
   }]
  ]
 };
Mm.node;
var Nm = X(Mm),
 Pm = {
  name: `git-branch`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 6a9 9 0 0 0-9 9V3`,
    key: `1cii5b`
   }],
   [`circle`, {
    cx: `18`,
    cy: `6`,
    r: `3`,
    key: `1h7g24`
   }],
   [`circle`, {
    cx: `6`,
    cy: `18`,
    r: `3`,
    key: `fqmcym`
   }]
  ]
 };
Pm.node;
var Fm = X(Pm),
 Im = {
  name: `hard-drive`,
  size: 24,
  node: [
   [`path`, {
    d: `M10 16h.01`,
    key: `1bzywj`
   }],
   [`path`, {
    d: `M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,
    key: `18tbho`
   }],
   [`path`, {
    d: `M21.946 12.013H2.054`,
    key: `zqlbp7`
   }],
   [`path`, {
    d: `M6 16h.01`,
    key: `1pmjb7`
   }]
  ]
 };
Im.node;
var Lm = X(Im),
 Rm = {
  name: `heart`,
  size: 24,
  node: [
   [`path`, {
    d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
    key: `mvr1a0`
   }]
  ]
 };
Rm.node;
var zm = X(Rm),
 Bm = {
  name: `image`,
  size: 24,
  node: [
   [`rect`, {
    width: `18`,
    height: `18`,
    x: `3`,
    y: `3`,
    rx: `2`,
    ry: `2`,
    key: `1m3agn`
   }],
   [`circle`, {
    cx: `9`,
    cy: `9`,
    r: `2`,
    key: `af1f0g`
   }],
   [`path`, {
    d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,
    key: `1xmnt7`
   }]
  ]
 };
Bm.node;
var Vm = X(Bm),
 Hm = {
  name: `info`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`path`, {
    d: `M12 16v-4`,
    key: `1dtifu`
   }],
   [`path`, {
    d: `M12 8h.01`,
    key: `e9boi3`
   }]
  ]
 };
Hm.node;
var Um = X(Hm),
 Wm = {
  name: `italic`,
  size: 24,
  node: [
   [`line`, {
    x1: `19`,
    x2: `10`,
    y1: `4`,
    y2: `4`,
    key: `15jd3p`
   }],
   [`line`, {
    x1: `14`,
    x2: `5`,
    y1: `20`,
    y2: `20`,
    key: `bu0au3`
   }],
   [`line`, {
    x1: `15`,
    x2: `9`,
    y1: `4`,
    y2: `20`,
    key: `uljnxc`
   }]
  ]
 };
Wm.node;
var Gm = X(Wm),
 Km = {
  name: `keyboard`,
  size: 24,
  node: [
   [`path`, {
    d: `M10 8h.01`,
    key: `1r9ogq`
   }],
   [`path`, {
    d: `M12 12h.01`,
    key: `1mp3jc`
   }],
   [`path`, {
    d: `M14 8h.01`,
    key: `1primd`
   }],
   [`path`, {
    d: `M16 12h.01`,
    key: `1l6xoz`
   }],
   [`path`, {
    d: `M18 8h.01`,
    key: `emo2bl`
   }],
   [`path`, {
    d: `M6 8h.01`,
    key: `x9i8wu`
   }],
   [`path`, {
    d: `M7 16h10`,
    key: `wp8him`
   }],
   [`path`, {
    d: `M8 12h.01`,
    key: `czm47f`
   }],
   [`rect`, {
    width: `20`,
    height: `16`,
    x: `2`,
    y: `4`,
    rx: `2`,
    key: `18n3k1`
   }]
  ]
 };
Km.node;
var qm = X(Km),
 Jm = {
  name: `letter-b`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 12h9a4 4 0 010 8H7a1 1 0 01-1-1V5a1 1 0 011-1h7a4 4 0 010 8`,
    key: `n8tvfh`
   }]
  ],
  aliases: [`bold`]
 };
Jm.node;
var Ym = X(Jm),
 Xm = {
  name: `lightbulb`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,
    key: `1gvzjb`
   }],
   [`path`, {
    d: `M9 18h6`,
    key: `x1upvd`
   }],
   [`path`, {
    d: `M10 22h4`,
    key: `ceow96`
   }]
  ]
 };
Xm.node;
var Zm = X(Xm),
 Qm = {
  name: `link-2`,
  size: 24,
  node: [
   [`path`, {
    d: `M9 17H7A5 5 0 0 1 7 7h2`,
    key: `8i5ue5`
   }],
   [`path`, {
    d: `M15 7h2a5 5 0 1 1 0 10h-2`,
    key: `1b9ql8`
   }],
   [`line`, {
    x1: `8`,
    x2: `16`,
    y1: `12`,
    y2: `12`,
    key: `1jonct`
   }]
  ]
 };
Qm.node;
var $m = X(Qm),
 eh = {
  name: `link`,
  size: 24,
  node: [
   [`path`, {
    d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,
    key: `1cjeqo`
   }],
   [`path`, {
    d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,
    key: `19qd67`
   }]
  ]
 };
eh.node;
var th = X(eh),
 nh = {
  name: `list-tree`,
  size: 24,
  node: [
   [`path`, {
    d: `M8 5h13`,
    key: `1pao27`
   }],
   [`path`, {
    d: `M13 12h8`,
    key: `h98zly`
   }],
   [`path`, {
    d: `M13 19h8`,
    key: `c3s6r1`
   }],
   [`path`, {
    d: `M3 10a2 2 0 0 0 2 2h3`,
    key: `1npucw`
   }],
   [`path`, {
    d: `M3 5v12a2 2 0 0 0 2 2h3`,
    key: `x1gjn2`
   }]
  ]
 };
nh.node;
var rh = X(nh),
 ih = {
  name: `loader-circle`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 12a9 9 0 1 1-6.219-8.56`,
    key: `13zald`
   }]
  ],
  aliases: [`loader-2`]
 };
ih.node;
var ah = X(ih),
 oh = {
  name: `maximize-2`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 3h6v6`,
    key: `1q9fwt`
   }],
   [`path`, {
    d: `m21 3-7 7`,
    key: `1l2asr`
   }],
   [`path`, {
    d: `m3 21 7-7`,
    key: `tjx5ai`
   }],
   [`path`, {
    d: `M9 21H3v-6`,
    key: `wtvkvv`
   }]
  ]
 };
oh.node;
var sh = X(oh),
 ch = {
  name: `maximize`,
  size: 24,
  node: [
   [`path`, {
    d: `M8 3H5a2 2 0 0 0-2 2v3`,
    key: `1dcmit`
   }],
   [`path`, {
    d: `M21 8V5a2 2 0 0 0-2-2h-3`,
    key: `1e4gt3`
   }],
   [`path`, {
    d: `M3 16v3a2 2 0 0 0 2 2h3`,
    key: `wsl5sc`
   }],
   [`path`, {
    d: `M16 21h3a2 2 0 0 0 2-2v-3`,
    key: `18trek`
   }]
  ]
 };
ch.node;
var lh = X(ch),
 uh = {
  name: `menu`,
  size: 24,
  node: [
   [`path`, {
    d: `M4 5h16`,
    key: `1tepv9`
   }],
   [`path`, {
    d: `M4 12h16`,
    key: `1lakjw`
   }],
   [`path`, {
    d: `M4 19h16`,
    key: `1djgab`
   }]
  ]
 };
uh.node;
var dh = X(uh),
 fh = {
  name: `message-square`,
  size: 24,
  node: [
   [`path`, {
    d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,
    key: `18887p`
   }]
  ]
 };
fh.node;
var ph = X(fh),
 mh = {
  name: `minus`,
  size: 24,
  node: [
   [`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
   }]
  ]
 };
mh.node;
var hh = X(mh),
 gh = {
  name: `palette`,
  size: 24,
  node: [
   [`path`, {
    d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
    key: `e79jfc`
   }],
   [`circle`, {
    cx: `13.5`,
    cy: `6.5`,
    r: `.5`,
    fill: `currentColor`,
    key: `1okk4w`
   }],
   [`circle`, {
    cx: `17.5`,
    cy: `10.5`,
    r: `.5`,
    fill: `currentColor`,
    key: `f64h9f`
   }],
   [`circle`, {
    cx: `6.5`,
    cy: `12.5`,
    r: `.5`,
    fill: `currentColor`,
    key: `qy21gx`
   }],
   [`circle`, {
    cx: `8.5`,
    cy: `7.5`,
    r: `.5`,
    fill: `currentColor`,
    key: `fotxhn`
   }]
  ]
 };
gh.node;
var _h = X(gh),
 vh = {
  name: `panel-left`,
  size: 24,
  node: [
   [`rect`, {
    width: `18`,
    height: `18`,
    x: `3`,
    y: `3`,
    rx: `2`,
    key: `afitv7`
   }],
   [`path`, {
    d: `M9 3v18`,
    key: `fh3hqa`
   }]
  ],
  aliases: [`sidebar`]
 };
vh.node;
var yh = X(vh),
 bh = {
  name: `panel-right-close`,
  size: 24,
  node: [
   [`rect`, {
    width: `18`,
    height: `18`,
    x: `3`,
    y: `3`,
    rx: `2`,
    key: `afitv7`
   }],
   [`path`, {
    d: `M15 3v18`,
    key: `14nvp0`
   }],
   [`path`, {
    d: `m8 9 3 3-3 3`,
    key: `12hl5m`
   }]
  ]
 };
bh.node;
var xh = X(bh),
 Sh = {
  name: `panel-right`,
  size: 24,
  node: [
   [`rect`, {
    width: `18`,
    height: `18`,
    x: `3`,
    y: `3`,
    rx: `2`,
    key: `afitv7`
   }],
   [`path`, {
    d: `M15 3v18`,
    key: `14nvp0`
   }]
  ]
 };
Sh.node;
var Ch = X(Sh),
 wh = {
  name: `pencil`,
  size: 24,
  node: [
   [`path`, {
    d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
    key: `1a8usu`
   }],
   [`path`, {
    d: `m15 5 4 4`,
    key: `1mk7zo`
   }]
  ]
 };
wh.node;
var Th = X(wh),
 Eh = {
  name: `play`,
  size: 24,
  node: [
   [`path`, {
    d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
    key: `10ikf1`
   }]
  ]
 };
Eh.node;
var Dh = X(Eh),
 Oh = {
  name: `plus`,
  size: 24,
  node: [
   [`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
   }],
   [`path`, {
    d: `M12 5v14`,
    key: `s699le`
   }]
  ]
 };
Oh.node;
var kh = X(Oh),
 Ah = {
  name: `printer`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,
    key: `143wyd`
   }],
   [`path`, {
    d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,
    key: `1itne7`
   }],
   [`rect`, {
    x: `6`,
    y: `14`,
    width: `12`,
    height: `8`,
    rx: `1`,
    key: `1ue0tg`
   }]
  ]
 };
Ah.node;
var jh = X(Ah),
 Mh = {
  name: `redo-2`,
  size: 24,
  node: [
   [`path`, {
    d: `m15 14 5-5-5-5`,
    key: `12vg1m`
   }],
   [`path`, {
    d: `M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13`,
    key: `6uklza`
   }]
  ]
 };
Mh.node;
var Nh = X(Mh),
 Ph = {
  name: `refresh-cw`,
  size: 24,
  node: [
   [`path`, {
    d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
    key: `v9h5vc`
   }],
   [`path`, {
    d: `M21 3v5h-5`,
    key: `1q7to0`
   }],
   [`path`, {
    d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
    key: `3uifl3`
   }],
   [`path`, {
    d: `M8 16H3v5`,
    key: `1cv678`
   }]
  ]
 };
Ph.node;
var Fh = X(Ph),
 Ih = {
  name: `rocket`,
  size: 24,
  node: [
   [`path`, {
    d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`,
    key: `qeys4`
   }],
   [`path`, {
    d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,
    key: `u4xsad`
   }],
   [`path`, {
    d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,
    key: `676m9`
   }],
   [`path`, {
    d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`,
    key: `92ym6u`
   }]
  ]
 };
Ih.node;
var Lh = X(Ih),
 Rh = {
  name: `scan`,
  size: 24,
  node: [
   [`path`, {
    d: `M3 7V5a2 2 0 0 1 2-2h2`,
    key: `aa7l1z`
   }],
   [`path`, {
    d: `M17 3h2a2 2 0 0 1 2 2v2`,
    key: `4qcy5o`
   }],
   [`path`, {
    d: `M21 17v2a2 2 0 0 1-2 2h-2`,
    key: `6vwrx8`
   }],
   [`path`, {
    d: `M7 21H5a2 2 0 0 1-2-2v-2`,
    key: `ioqczr`
   }]
  ]
 };
Rh.node;
var zh = X(Rh),
 Bh = {
  name: `search`,
  size: 24,
  node: [
   [`path`, {
    d: `m21 21-4.34-4.34`,
    key: `14j7rj`
   }],
   [`circle`, {
    cx: `11`,
    cy: `11`,
    r: `8`,
    key: `4ej97u`
   }]
  ]
 };
Bh.node;
var Vh = X(Bh),
 Hh = {
  name: `server`,
  size: 24,
  node: [
   [`rect`, {
    width: `20`,
    height: `8`,
    x: `2`,
    y: `2`,
    rx: `2`,
    ry: `2`,
    key: `ngkwjq`
   }],
   [`rect`, {
    width: `20`,
    height: `8`,
    x: `2`,
    y: `14`,
    rx: `2`,
    ry: `2`,
    key: `iecqi9`
   }],
   [`line`, {
    x1: `6`,
    x2: `6.01`,
    y1: `6`,
    y2: `6`,
    key: `16zg32`
   }],
   [`line`, {
    x1: `6`,
    x2: `6.01`,
    y1: `18`,
    y2: `18`,
    key: `nzw8ys`
   }]
  ]
 };
Hh.node;
var Uh = X(Hh),
 Wh = {
  name: `shapes`,
  size: 24,
  node: [
   [`path`, {
    d: `M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z`,
    key: `1bo67w`
   }],
   [`rect`, {
    x: `3`,
    y: `14`,
    width: `7`,
    height: `7`,
    rx: `1`,
    key: `1bkyp8`
   }],
   [`circle`, {
    cx: `17.5`,
    cy: `17.5`,
    r: `3.5`,
    key: `w3z12y`
   }]
  ]
 };
Wh.node;
var Gh = X(Wh),
 Kh = {
  name: `sparkles`,
  size: 24,
  node: [
   [`path`, {
    d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
    key: `1s2grr`
   }],
   [`path`, {
    d: `M20 2v4`,
    key: `1rf3ol`
   }],
   [`path`, {
    d: `M22 4h-4`,
    key: `gwowj6`
   }],
   [`circle`, {
    cx: `4`,
    cy: `20`,
    r: `2`,
    key: `6kqj1y`
   }]
  ],
  aliases: [`stars`]
 };
Kh.node;
var qh = X(Kh),
 Jh = {
  name: `spline`,
  size: 24,
  node: [
   [`circle`, {
    cx: `19`,
    cy: `5`,
    r: `2`,
    key: `mhkx31`
   }],
   [`circle`, {
    cx: `5`,
    cy: `19`,
    r: `2`,
    key: `v8kfzx`
   }],
   [`path`, {
    d: `M5 17A12 12 0 0 1 17 5`,
    key: `1okkup`
   }]
  ]
 };
Jh.node;
var Yh = X(Jh),
 Xh = {
  name: `square-plus`,
  size: 24,
  node: [
   [`rect`, {
    width: `18`,
    height: `18`,
    x: `3`,
    y: `3`,
    rx: `2`,
    key: `afitv7`
   }],
   [`path`, {
    d: `M8 12h8`,
    key: `1wcyev`
   }],
   [`path`, {
    d: `M12 8v8`,
    key: `napkw2`
   }]
  ],
  aliases: [`plus-square`]
 };
Xh.node;
var Zh = X(Xh),
 Qh = {
  name: `squircle`,
  size: 24,
  node: [
   [`path`, {
    d: `M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9`,
    key: `garfkc`
   }]
  ]
 };
Qh.node;
var $h = X(Qh),
 eg = {
  name: `star`,
  size: 24,
  node: [
   [`path`, {
    d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
    key: `r04s7s`
   }]
  ]
 };
eg.node;
var tg = X(eg),
 ng = {
  name: `sticker`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,
    key: `1dfntj`
   }],
   [`path`, {
    d: `M15 3v5a1 1 0 0 0 1 1h5`,
    key: `6s6qgf`
   }],
   [`path`, {
    d: `M8 13h.01`,
    key: `1sbv64`
   }],
   [`path`, {
    d: `M16 13h.01`,
    key: `wip0gl`
   }],
   [`path`, {
    d: `M10 16s.8 1 2 1c1.3 0 2-1 2-1`,
    key: `1vvgv3`
   }]
  ]
 };
ng.node;
var rg = X(ng),
 ig = {
  name: `sticky-note`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,
    key: `1dfntj`
   }],
   [`path`, {
    d: `M15 3v5a1 1 0 0 0 1 1h5`,
    key: `6s6qgf`
   }]
  ]
 };
ig.node;
var ag = X(ig),
 og = {
  name: `strikethrough`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 4H9a3 3 0 0 0-2.83 4`,
    key: `43sutm`
   }],
   [`path`, {
    d: `M14 12a4 4 0 0 1 0 8H6`,
    key: `nlfj13`
   }],
   [`line`, {
    x1: `4`,
    x2: `20`,
    y1: `12`,
    y2: `12`,
    key: `1e0a9i`
   }]
  ]
 };
og.node;
var sg = X(og),
 cg = {
  name: `tag`,
  size: 24,
  node: [
   [`path`, {
    d: `M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,
    key: `vktsd0`
   }],
   [`circle`, {
    cx: `7.5`,
    cy: `7.5`,
    r: `.5`,
    fill: `currentColor`,
    key: `kqv944`
   }]
  ]
 };
cg.node;
var lg = X(cg),
 ug = {
  name: `target`,
  size: 24,
  node: [
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `6`,
    key: `1vlfrh`
   }],
   [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `2`,
    key: `1c9p78`
   }]
  ]
 };
ug.node;
var dg = X(ug),
 fg = {
  name: `text-align-center`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 5H3`,
    key: `1fi0y6`
   }],
   [`path`, {
    d: `M17 12H7`,
    key: `16if0g`
   }],
   [`path`, {
    d: `M19 19H5`,
    key: `vjpgq2`
   }]
  ],
  aliases: [`align-center`]
 };
fg.node;
var pg = X(fg),
 mg = {
  name: `text-align-end`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 5H3`,
    key: `1fi0y6`
   }],
   [`path`, {
    d: `M21 12H9`,
    key: `dn1m92`
   }],
   [`path`, {
    d: `M21 19H7`,
    key: `4cu937`
   }]
  ],
  aliases: [`align-right`]
 };
mg.node;
var hg = X(mg),
 gg = {
  name: `text-align-start`,
  size: 24,
  node: [
   [`path`, {
    d: `M21 5H3`,
    key: `1fi0y6`
   }],
   [`path`, {
    d: `M15 12H3`,
    key: `6jk70r`
   }],
   [`path`, {
    d: `M17 19H3`,
    key: `z6ezky`
   }]
  ],
  aliases: [`text`, `align-left`]
 };
gg.node;
var _g = X(gg),
 vg = {
  name: `thumbs-up`,
  size: 24,
  node: [
   [`path`, {
    d: `M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,
    key: `emmmcr`
   }],
   [`path`, {
    d: `M7 10v12`,
    key: `1qc93n`
   }]
  ]
 };
vg.node;
var yg = X(vg),
 bg = {
  name: `trash`,
  size: 24,
  node: [
   [`path`, {
    d: `M10 11v6`,
    key: `nco0om`
   }],
   [`path`, {
    d: `M14 11v6`,
    key: `outv1u`
   }],
   [`path`, {
    d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,
    key: `miytrc`
   }],
   [`path`, {
    d: `M3 6h18`,
    key: `d0wm0j`
   }],
   [`path`, {
    d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,
    key: `e791ji`
   }]
  ],
  aliases: [`trash-2`]
 };
bg.node;
var xg = X(bg),
 Sg = {
  name: `trending-down`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 17h6v-6`,
    key: `t6n2it`
   }],
   [`path`, {
    d: `m22 17-8.5-8.5-5 5L2 7`,
    key: `x473p`
   }]
  ]
 };
Sg.node;
var Cg = X(Sg),
 wg = {
  name: `trending-up`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 7h6v6`,
    key: `box55l`
   }],
   [`path`, {
    d: `m22 7-8.5 8.5-5-5L2 17`,
    key: `1t1m79`
   }]
  ]
 };
wg.node;
var Tg = X(wg),
 Eg = {
  name: `triangle-exclamation-point`,
  size: 24,
  node: [
   [`path`, {
    d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
    key: `wmoenq`
   }],
   [`path`, {
    d: `M12 9v4`,
    key: `juzpu7`
   }],
   [`path`, {
    d: `M12 17h.01`,
    key: `p32p05`
   }]
  ],
  aliases: [`alert-triangle`, `triangle-alert`]
 };
Eg.node;
var Dg = X(Eg),
 Og = {
  name: `underline`,
  size: 24,
  node: [
   [`path`, {
    d: `M6 4v6a6 6 0 0 0 12 0V4`,
    key: `9kb039`
   }],
   [`line`, {
    x1: `4`,
    x2: `20`,
    y1: `20`,
    y2: `20`,
    key: `nun2al`
   }]
  ]
 };
Og.node;
var kg = X(Og),
 Ag = {
  name: `undo-2`,
  size: 24,
  node: [
   [`path`, {
    d: `M9 14 4 9l5-5`,
    key: `102s5s`
   }],
   [`path`, {
    d: `M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,
    key: `f3b9sd`
   }]
  ]
 };
Ag.node;
var jg = X(Ag),
 Mg = {
  name: `upload`,
  size: 24,
  node: [
   [`path`, {
    d: `M12 3v12`,
    key: `1x0j5s`
   }],
   [`path`, {
    d: `m17 8-5-5-5 5`,
    key: `7q97r8`
   }],
   [`path`, {
    d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,
    key: `ih7n3h`
   }]
  ]
 };
Mg.node;
var Ng = X(Mg),
 Pg = {
  name: `user`,
  size: 24,
  node: [
   [`path`, {
    d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,
    key: `975kel`
   }],
   [`circle`, {
    cx: `12`,
    cy: `7`,
    r: `4`,
    key: `17ys0d`
   }]
  ]
 };
Pg.node;
var Fg = X(Pg),
 Ig = {
  name: `users`,
  size: 24,
  node: [
   [`path`, {
    d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,
    key: `1yyitq`
   }],
   [`path`, {
    d: `M16 3.128a4 4 0 0 1 0 7.744`,
    key: `16gr8j`
   }],
   [`path`, {
    d: `M22 21v-2a4 4 0 0 0-3-3.87`,
    key: `kshegd`
   }],
   [`circle`, {
    cx: `9`,
    cy: `7`,
    r: `4`,
    key: `nufk8`
   }]
  ]
 };
Ig.node;
var Lg = X(Ig),
 Rg = {
  name: `workflow`,
  size: 24,
  node: [
   [`rect`, {
    width: `8`,
    height: `8`,
    x: `3`,
    y: `3`,
    rx: `2`,
    key: `by2w9f`
   }],
   [`path`, {
    d: `M7 11v4a2 2 0 0 0 2 2h4`,
    key: `xkn7yn`
   }],
   [`rect`, {
    width: `8`,
    height: `8`,
    x: `13`,
    y: `13`,
    rx: `2`,
    key: `1cgmvn`
   }]
  ]
 };
Rg.node;
var zg = X(Rg),
 Bg = {
  name: `x`,
  size: 24,
  node: [
   [`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
   }],
   [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
   }]
  ]
 };
Bg.node;
var Vg = X(Bg),
 Hg = e => {
  let t, n = new Set,
   r = (e, r) => {
    let i = typeof e == `function` ? e(t) : e;
    if (!Object.is(i, t)) {
     let e = t;
     t = r ?? (typeof i != `object` || !i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
    }
   },
   i = () => t,
   a = {
    setState: r,
    getState: i,
    getInitialState: () => o,
    subscribe: e => (n.add(e), () => n.delete(e))
   },
   o = t = e(r, i, a);
  return a
 },
 Ug = (e => e ? Hg(e) : Hg),
 Wg = e => e;

function Gg(e, t = Wg) {
 let n = _.useSyncExternalStore(e.subscribe, _.useCallback(() => t(e.getState()), [e, t]), () => t(e.getInitialState()));
 return _.useDebugValue(n), n
}
var Kg = e => {
  let t = Ug(e),
   n = e => Gg(t, e);
  return Object.assign(n, t), n
 },
 qg = (e => e ? Kg(e) : Kg),
 Jg = `mindx`,
 Yg = `mindx.document.v1`,
 Xg = `#18212f`,
 Zg = [`#F2545B`, `#F2994A`, `#4C9AFF`, `#2FBF71`, `#9B7BF0`, `#12B5C9`, `#E5B93D`, `#E84C8B`];

function Qg() {
 return typeof crypto < `u` && typeof crypto.randomUUID == `function` ? crypto.randomUUID() : `node-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`
}

function $g(e) {
 return typeof e == `string` && /^#[0-9a-f]{6}$/i.test(e)
}

function e_(e, t) {
 if (!$g(e)) return `rgba(24, 33, 47, ${t})`;
 let n = e.slice(1);
 return `rgba(${Number.parseInt(n.slice(0,2),16)}, ${Number.parseInt(n.slice(2,4),16)}, ${Number.parseInt(n.slice(4,6),16)}, ${t})`
}

function t_(e) {
 return `#${e.slice(1).split(``).map(e=>e+e).join(``)}`
}

function n_(e) {
 return Math.max(0, Math.min(255, Math.round(Number(e) || 0))).toString(16).padStart(2, `0`)
}

function r_(e, t = `#000000`) {
 if (typeof e != `string`) return t;
 let n = e.trim();
 if (!n) return t;
 if (/^#[0-9a-f]{3}$/i.test(n)) return t_(n).toLowerCase();
 if (/^#[0-9a-f]{6}$/i.test(n)) return n.toLowerCase();
 if (/^#[0-9a-f]{8}$/i.test(n)) return n.slice(0, 7).toLowerCase();
 let r = n.match(/^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})/i);
 return r ? `#${n_(r[1])}${n_(r[2])}${n_(r[3])}` : t
}

function i_(e, t, n = .5) {
 let r = r_(e, `#000000`),
  i = r_(t, `#000000`),
  a = Math.max(0, Math.min(1, Number(n) || 0)),
  o = (e, t) => Number.parseInt(e.slice(t, t + 2), 16),
  s = e => n_(o(r, e) * (1 - a) + o(i, e) * a);
 return `#${s(1)}${s(3)}${s(5)}`
}

function a_(e) {
 let t = r_(e, `#ffffff`),
  n = [1, 3, 5].map(e => {
   let n = Number.parseInt(t.slice(e, e + 2), 16) / 255;
   return n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4
  });
 return n[0] * .2126 + n[1] * .7152 + n[2] * .0722
}

function o_(e, t) {
 let n = Math.max(a_(e), a_(t)),
  r = Math.min(a_(e), a_(t));
 return (n + .05) / (r + .05)
}

function s_(e, t = `#ffffff`) {
 let n = r_(e, `#1f2228`),
  r = r_(t, `#ffffff`);
 if (o_(n, r) >= 4.5) return n;
 let i = a_(r) > .45 ? `#000000` : `#ffffff`;
 for (let e = 1; e <= 20; e += 1) {
  let t = i_(n, i, e / 20);
  if (o_(t, r) >= 4.5) return t
 }
 return i
}

function c_(e = 6) {
 let t = Math.max(1, Math.min(24, Math.floor(Number(e) || 6)));
 return Array.from({
  length: t
 }, (e, n) => {
  let r = 360 / t * n,
   i = .6479999999999999,
   a = r / 60,
   o = i * (1 - Math.abs(a % 2 - 1)),
   s = [0, 0, 0];
  return s = a < 1 ? [i, o, 0] : a < 2 ? [o, i, 0] : a < 3 ? [0, i, o] : a < 4 ? [0, o, i] : a < 5 ? [o, 0, i] : [i, 0, o], `#${s.map(e=>n_((e+.2260000000000001)*255)).join(``)}`
 })
}
var l_ = Zg.slice(0, 6);

function u_() {
 return {
  mode: `smart`,
  colors: [...l_]
 }
}

function d_(e) {
 let t = e && typeof e == `object` ? e : {},
  n = [`smart`, `rainbow`, `custom`].includes(t.mode) ? t.mode : `smart`,
  r = (Array.isArray(t.colors) ? t.colors : l_).filter(e => typeof e == `string`).map((e, t) => r_(e, l_[t % l_.length])).slice(0, 6);
 return {
  mode: n,
  colors: r.length ? r : [...l_]
 }
}

function f_(e) {
 let t = d_(e);
 return t.mode === `rainbow` ? c_(6) : t.mode === `custom` ? t.colors : l_
}

function p_(e, t) {
 let n = f_(t);
 return n.length ? n[(e % n.length + n.length) % n.length] : l_[0]
}

function m_(e, t) {
 let n = f_(t),
  r = new Set(e.filter(Boolean));
 return n.find(e => !r.has(e)) ?? p_(r.size, t)
}

function h_(e, t) {
 let n = new Map;
 for (let t of e) t.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push(t));
 let r = [],
  i = [...n.get(t) ?? []];
 for (; i.length;) {
  let e = i.shift();
  r.push(e.id), e.collapsed || i.push(...n.get(e.id) ?? [])
 }
 return r
}

function g_(e, t, n = null) {
 let r = n && e.some(e => e.id === n) ? n : t,
  i = e.find(e => e.id === r);
 if (!i) return [];
 let a = e.filter(e => e.parentId === r);
 return [{
  id: i.id,
  title: i.text,
  nodeIds: [i.id],
  kind: `root`
 }, ...a.map((t, n) => ({
  id: t.id,
  title: t.text,
  nodeIds: [t.id, ...h_(e, t.id)],
  kind: `branch`,
  index: n
 }))]
}
var __ = [{
  id: `minimal-tech`,
  category: `mindmap`,
  name: `Modern Minimalist`,
  tagline: `Tech focus`,
  description: `Clean capsules, generous whitespace, and smooth bezier connectors.`,
  structure: `mindmap`,
  theme: `classic`,
  palette: {
   mode: `custom`,
   colors: [`#4f46e5`, `#0ea5e9`, `#10b981`, `#8b5cf6`, `#f59e0b`, `#14b8a6`]
  },
  nodeStyle: `minimal`,
  edgeStyle: `bezier`,
  swatches: [`#0f172a`, `#c7d2fe`, `#f8fafc`],
  metaLabels: [`CORE`, `PILLAR`, `DETAIL`],
  features: {
   metaTags: !1,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !1
  }
 }, {
  id: `organic-sketch`,
  category: `mindmap`,
  name: `Organic Brainstorm`,
  tagline: `Hand-drawn & creative`,
  description: `Warm paper, asymmetric shapes, wavy connectors, and hand-drawn energy.`,
  structure: `mindmap`,
  theme: `soft`,
  palette: {
   mode: `custom`,
   colors: [`#b45309`, `#0f766e`, `#be123c`, `#4d7c0f`, `#7c3aed`, `#c2410c`]
  },
  nodeStyle: `organic`,
  edgeStyle: `wavy`,
  swatches: [`#fff7ed`, `#fcd34d`, `#0f766e`],
  metaLabels: [`IDEA`, `THEME`, `NOTE`],
  features: {
   metaTags: !1,
   stepNumbers: !1,
   endDots: !0,
   arrowEdges: !1
  }
 }, {
  id: `executive-audit`,
  category: `mindmap`,
  name: `Corporate Executive`,
  tagline: `Structured audit`,
  description: `Sharp cards, dense metadata tags, and disciplined orthogonal connectors.`,
  structure: `org`,
  theme: `classic`,
  palette: {
   mode: `custom`,
   colors: [`#1e3a5f`, `#334155`, `#0f766e`, `#0e7490`, `#475569`, `#64748b`]
  },
  nodeStyle: `executive`,
  edgeStyle: `step`,
  swatches: [`#1e3a5f`, `#cbd5e1`, `#f8fafc`],
  metaLabels: [`MANDATE`, `PILLAR`, `AUDIT`],
  features: {
   metaTags: !0,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !0
  }
 }, {
  id: `radial-concept`,
  category: `mindmap`,
  name: `Radial Concept`,
  tagline: `Balanced concept map`,
  description: `A round hub, pill-shaped pillars, compact chips, and ring-guided balance.`,
  structure: `mindmap`,
  theme: `soft`,
  palette: {
   mode: `rainbow`,
   colors: [...l_]
  },
  nodeStyle: `radial`,
  edgeStyle: `bezier`,
  swatches: [`#3f3448`, `#f9a8d4`, `#fff7ed`],
  metaLabels: [`HUB`, `THEME`, `IDEA`],
  features: {
   metaTags: !1,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !1
  }
 }, {
  id: `system-blueprint`,
  category: `logic`,
  name: `System Architecture`,
  tagline: `Engineering blueprint`,
  description: `Monospace blueprint styling, sharp boxes, and directional flow lines.`,
  structure: `logic`,
  theme: `cyberpunk`,
  palette: {
   mode: `custom`,
   colors: [`#38bdf8`, `#22d3ee`, `#818cf8`, `#2dd4bf`, `#60a5fa`, `#a78bfa`]
  },
  nodeStyle: `blueprint`,
  edgeStyle: `step`,
  swatches: [`#060912`, `#22d3ee`, `#0b1222`],
  metaLabels: [`SYSTEM`, `MODULE`, `PROCESS`],
  features: {
   metaTags: !0,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !0
  }
 }, {
  id: `decision-tree`,
  category: `logic`,
  name: `Decision Tree`,
  tagline: `Logic branching`,
  description: `Hexagonal decision gates, solid outcome badges, and crisp elbow arrows.`,
  structure: `logic`,
  theme: `classic`,
  palette: {
   mode: `custom`,
   colors: [`#059669`, `#d97706`, `#dc2626`, `#2563eb`, `#0891b2`, `#7c3aed`]
  },
  nodeStyle: `decision`,
  edgeStyle: `step`,
  swatches: [`#064e3b`, `#fbbf24`, `#f8fafc`],
  metaLabels: [`DECISION`, `CONDITION`, `OUTCOME`],
  features: {
   metaTags: !0,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !0
  }
 }, {
  id: `journey-swimlane`,
  category: `logic`,
  name: `Journey Swimlanes`,
  tagline: `Customer workflow`,
  description: `Numbered step cards, stage lanes, and horizontal progress connectors.`,
  structure: `timeline`,
  theme: `classic`,
  palette: {
   mode: `custom`,
   colors: [`#2563eb`, `#7c3aed`, `#0891b2`, `#059669`, `#d97706`, `#db2777`]
  },
  nodeStyle: `swimlane`,
  edgeStyle: `step`,
  swatches: [`#1d4ed8`, `#bfdbfe`, `#f8fafc`],
  metaLabels: [`JOURNEY`, `STAGE`, `ACTION`],
  features: {
   metaTags: !0,
   stepNumbers: !0,
   endDots: !1,
   arrowEdges: !0
  }
 }, {
  id: `fishbone-cause`,
  category: `logic`,
  name: `Root Cause Fishbone`,
  tagline: `Cause & effect`,
  description: `A solid spine, angled cause arms, and category boxes built for analysis.`,
  structure: `fishbone`,
  theme: `soft`,
  palette: {
   mode: `custom`,
   colors: [`#b91c1c`, `#c2410c`, `#a16207`, `#15803d`, `#0e7490`, `#7e22ce`]
  },
  nodeStyle: `fishbone`,
  edgeStyle: `straight`,
  swatches: [`#7f1d1d`, `#fca5a5`, `#fff7ed`],
  metaLabels: [`EFFECT`, `CAUSE`, `DETAIL`],
  features: {
   metaTags: !0,
   stepNumbers: !1,
   endDots: !1,
   arrowEdges: !1
  }
 }],
 v_ = Object.fromEntries(__.map(e => [e.id, e])),
 y_ = `minimal-tech`;

function b_(e) {
 return v_[e] ?? v_[`minimal-tech`]
}

function x_(e) {
 return typeof e == `string` && !!v_[e]
}
var S_ = `tapered`,
 C_ = [`tapered`, `curved`, `straight`, `angled`],
 w_ = [`auto`, `underline`, `rounded`, `rect`, `pill`, `ellipse`, `circle`, `diamond`, `parallelogram`, `hexagon`, `octagon`, `shield`, `bracket`],
 T_ = [{
  key: `default`,
  name: `Default`,
  swatch: `#FFFFFF`
 }, {
  key: `important`,
  name: `Important`,
  swatch: `#F2A33D`,
  fill: `#FFF4E3`,
  border: `#F2A33D`,
  text: `#7A4A06`,
  line: `#F2A33D`
 }, {
  key: `critical`,
  name: `Very Important`,
  swatch: `#E5484D`,
  fill: `#E5484D`,
  border: `#D93A40`,
  text: `#FFFFFF`,
  line: `#E5484D`
 }, {
  key: `task`,
  name: `Task`,
  swatch: `#2F6BFF`,
  fill: `#2F6BFF`,
  border: `#1C56E8`,
  text: `#FFFFFF`,
  line: `#2F6BFF`
 }, {
  key: `idea`,
  name: `Idea`,
  swatch: `#12A150`,
  fill: `#E9F8EF`,
  border: `#12A150`,
  text: `#0A5B2E`,
  line: `#12A150`
 }, {
  key: `note`,
  name: `Note`,
  swatch: `#8A919D`,
  fill: `#F2F4F7`,
  border: `#C7CDD6`,
  text: `#4A505B`,
  line: `#8A919D`
 }],
 E_ = new Set(T_.map(e => e.key)),
 D_ = Object.fromEntries(T_.map(e => [e.key, e]));

function O_(e) {
 return D_[e] ?? null
}
var k_ = {
  autoBalance: !0,
  freePosition: !1,
  flexibleFloating: !1
 },
 A_ = [`bold`, `italic`, `underline`, `strike`, `align`],
 j_ = [{
  key: `system`,
  name: `Default`,
  stack: ``
 }, {
  key: `noto`,
  name: `Noto Sans SC`,
  stack: `"Noto Sans SC", "Source Han Sans SC", sans-serif`
 }, {
  key: `pingfang`,
  name: `PingFang SC`,
  stack: `"PingFang SC", "Hiragino Sans GB", sans-serif`
 }, {
  key: `yahei`,
  name: `Microsoft YaHei`,
  stack: `"Microsoft YaHei", "微软雅黑", sans-serif`
 }],
 M_ = new Set([`left`, `center`, `right`]);

function N_(e, t, n, r) {
 let i = Number(e);
 return Number.isFinite(i) ? Math.max(t, Math.min(n, i)) : r
}

function P_(e) {
 if (!e || typeof e != `object`) return null;
 let t = {};
 for (let n of [`bold`, `italic`, `underline`, `strike`]) e[n] === !0 && (t[n] = !0);
 return M_.has(e.align) && (t.align = e.align), e.fontSize !== void 0 && (t.fontSize = N_(e.fontSize, 9, 48, 14)), e.fontWeight !== void 0 && (t.fontWeight = N_(e.fontWeight, 400, 800, 500)), e.branchWidth !== void 0 && (t.branchWidth = N_(e.branchWidth, 1, 10, 3)), Object.keys(t).length ? t : null
}

function F_(e) {
 if (!e || typeof e != `object`) return null;
 let t = {
  progress: N_(e.progress, 0, 100, 0),
  priority: [`P1`, `P2`, `P3`, `P4`].includes(e.priority) ? e.priority : `P3`
 };
 return e.start && (t.start = String(e.start).slice(0, 10)), e.due && (t.due = String(e.due).slice(0, 10)), t
}
var I_ = `Central Topic`,
 L_ = `New topic`,
 R_ = [`mindmap`, `logic`, `logicLeft`, `fishbone`, `org`, `timeline`, `matrix`, `treeTable`, `brace`],
 z_ = [`fill`, `border`, `text`, `line`];

function B_(e) {
 return {
  ...H_(e),
  lineStyle: S_,
  backgroundColor: null,
  layoutFlags: {
   ...k_
  },
  cjkFont: `system`
 }
}

function V_({
 id: e = Qg(),
 parentId: t = null,
 text: n,
 side: r = `center`,
 color: i = Xg,
 collapsed: a = !1,
 structure: o = null,
 overrides: s = null,
 markers: c = null,
 labels: l = null,
 note: u = null,
 task: d = null,
 link: f = null,
 preset: p = null,
 shape: m = null,
 style: h = null,
 widthOverride: g = null
}) {
 let _ = {
  id: e,
  parentId: t,
  text: n,
  side: r,
  color: i,
  collapsed: a
 };
 return o && (_.structure = o), s && Object.keys(s).length && (_.overrides = s), c && c.length && (_.markers = c), l && l.length && (_.labels = l), u && (_.note = u), d && (_.task = d), f && (_.link = f), p && p !== "default" && (_.preset = p), m && m !== `auto` && (_.shape = m), h && Object.keys(h).length && (_.style = h), Number.isFinite(g) && (_.widthOverride = g), _
}

function H_(e = I_) {
 let t = V_({
  text: e.trim() || I_,
  side: `center`,
  color: Xg
 });
 return {
  rootId: t.id,
  nodes: [t],
  zones: [],
  relationships: [],
  summaries: [],
  callouts: [],
  theme: `classic`,
  palette: u_(),
  mapStructure: `mindmap`,
  template: y_
 }
}

function U_() {
 let e = V_({
   text: `Product Launch`,
   side: `center`,
   color: Xg
  }),
  t = [{
   text: `Vision & Strategy`,
   side: `right`,
   color: Zg[0],
   children: [`Market opportunity`, `Success metrics`, `Positioning`]
  }, {
   text: `Product Experience`,
   side: `left`,
   color: Zg[2],
   children: [`Onboarding flow`, `Mobile app`, `Delightful details`]
  }, {
   text: `Go-to-Market`,
   side: `right`,
   color: Zg[3],
   children: [`Launch channels`, `Pricing`, `Early access`]
  }, {
   text: `Team & Timeline`,
   side: `left`,
   color: Zg[4],
   children: [`Milestones`, `Owners`, `Risks`]
  }],
  n = [e];
 for (let r of t) {
  let t = V_({
   parentId: e.id,
   text: r.text,
   side: r.side,
   color: r.color
  });
  n.push(t);
  for (let e of r.children) n.push(V_({
   parentId: t.id,
   text: e,
   side: r.side,
   color: r.color
  }))
 }
 return {
  rootId: e.id,
  nodes: n,
  zones: [],
  relationships: [],
  summaries: [],
  callouts: [],
  theme: `classic`,
  palette: u_(),
  mapStructure: `mindmap`,
  template: y_
 }
}

function W_(e) {
 return {
  nodes: e.nodes,
  rootId: e.rootId,
  zones: e.zones,
  relationships: e.relationships,
  summaries: e.summaries,
  callouts: e.callouts,
  theme: e.theme,
  palette: e.palette,
  mapStructure: e.mapStructure,
  template: e.template ?? `minimal-tech`,
  lineStyle: e.lineStyle ?? `tapered`,
  backgroundColor: e.backgroundColor ?? null,
  layoutFlags: e.layoutFlags ?? k_,
  cjkFont: e.cjkFont ?? `system`
 }
}

function G_(e) {
 return {
  ...W_(e),
  selectedId: e.selectedId,
  selectedIds: e.selectedIds
 }
}

function Z(e, t) {
 return {
  ...t,
  past: [...e.past, G_(e)].slice(-100),
  future: [],
  revision: e.revision + 1
 }
}

function K_(e, t) {
 return {
  focusRequest: {
   id: t,
   nonce: (e.focusRequest?.nonce ?? 0) + 1
  }
 }
}

function Q(e, t) {
 return e.find(e => e.id === t)
}

function q_(e, t) {
 return e.filter(e => e.parentId === t)
}

function J_(e, t) {
 let n = new Set([t]),
  r = !0;
 for (; r;) {
  r = !1;
  for (let t of e) t.parentId && n.has(t.parentId) && !n.has(t.id) && (n.add(t.id), r = !0)
 }
 return n
}

function Y_(e, t) {
 let n = q_(e, t);
 return n.filter(e => e.side === `right`).length <= n.filter(e => e.side === `left`).length ? `right` : `left`
}

function X_(e, t, n) {
 return m_(q_(e, t).map(e => e.color), n)
}

function Z_(e, t, n) {
 let r = q_(e, t),
  i = f_(n),
  a = new Map(r.map((e, t) => [e.id, i[t % i.length] ?? p_(t, n)]));
 return e.map(n => {
  if (!n.parentId) return n;
  let r = n,
   i = new Set;
  for (; r.parentId && !i.has(r.id) && (i.add(r.id), r.parentId !== t);) r = Q(e, r.parentId) ?? r;
  let o = a.get(r.id);
  return o && o !== n.color ? {
   ...n,
   color: o
  } : n
 })
}

function Q_(e, t) {
 let n = e => e.filter(e => !t.has(e));
 return {
  zones: e.zones.map(e => ({
   ...e,
   nodeIds: n(e.nodeIds)
  })).filter(e => e.nodeIds.length > 0),
  summaries: e.summaries.map(e => ({
   ...e,
   nodeIds: n(e.nodeIds)
  })).filter(e => e.nodeIds.length > 0),
  relationships: e.relationships.filter(e => !t.has(e.sourceId) && !t.has(e.targetId)),
  callouts: e.callouts.filter(e => !t.has(e.nodeId))
 }
}

function $_(e, t, n) {
 return t && e.some(e => e.id === t) ? t : n
}

function ev(e, t, n) {
 let r = Array.isArray(t) ? t.filter(t => e.some(e => e.id === t)) : [];
 return r.length ? r : n ? [n] : []
}

function tv(e) {
 let t = e && typeof e == `object` ? e : {},
  n = {};
 for (let e of z_) t[e] !== null && typeof t[e] == `string` && /^#[0-9a-f]{6}$/i.test(t[e]) && (n[e] = r_(t[e]));
 return n
}

function nv(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.x),
  n = Number(e.y);
 if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
 let r = e => Math.max(-1e5, Math.min(1e5, e)),
  i = {
   x: Math.round(r(t)),
   y: Math.round(r(n))
  };
 return i.x === 0 && i.y === 0 ? null : i
}

function rv(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.x),
  n = Number(e.y);
 if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
 let r = e => Math.max(-1e4, Math.min(1e4, e)),
  i = {
   x: Math.round(r(t)),
   y: Math.round(r(n))
  };
 return i.x === 0 && i.y === 0 ? null : i
}

function iv(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.angle);
 return Number.isFinite(t) ? {
  angle: Math.round((t % 360 + 360) % 360 * 10) / 10
 } : null
}

function av(e) {
 return R_.includes(e) ? e : null
}

function ov(e) {
 return x_(e) ? e : y_
}
var sv = U_(),
 $ = qg((e, t) => ({
  nodes: sv.nodes,
  rootId: sv.rootId,
  selectedId: sv.rootId,
  selectedIds: [sv.rootId],
  editingId: null,
  hydrated: !1,
  revision: 0,
  past: [],
  future: [],
  focusRequest: null,
  fitRequest: 0,
  saveStatus: `idle`,
  lastSavedAt: null,
  notice: null,
  theme: sv.theme,
  palette: sv.palette,
  mapStructure: sv.mapStructure,
  template: sv.template,
  zones: sv.zones,
  relationships: sv.relationships,
  summaries: sv.summaries,
  callouts: sv.callouts,
  focusId: null,
  outlineOpen: !1,
  presentationActive: !1,
  presentationIndex: 0,
  relationshipSourceId: null,
  relationshipDraft: null,
  summaryDraft: null,
  lineStyle: S_,
  backgroundColor: null,
  layoutFlags: {
   ...k_
  },
  cjkFont: `system`,
  leftPanel: null,
  rightPanel: `style`,
  zoom: 1,
  zoomRequest: null,
  sheets: [{
   id: `sheet-1`,
   name: `Map 1`
  }],
  activeSheetId: `sheet-1`,
  sheetDocs: {},
  presentationSlides: [],
  dialog: null,
  selectNode: (n, {
   additive: r = !1
  } = {}) => {
   let i = t();
   if (!n) e({
    selectedId: null,
    selectedIds: [],
    editingId: null
   });
   else if (Q(i.nodes, n)) {
    if (r) {
     let t = new Set(i.selectedIds);
     t.has(n) ? t.delete(n) : t.add(n);
     let r = [...t];
     e({
      selectedId: r.includes(n) ? n : r[r.length - 1] ?? null,
      selectedIds: r,
      editingId: i.editingId === n ? null : i.editingId
     })
    } else(i.selectedId !== n || i.editingId === n) && e({
     selectedId: n,
     selectedIds: [n],
     editingId: i.editingId === n ? i.editingId : null
    })
   }
  },
  selectNodes: n => {
   let r = t(),
    i = ev(r.nodes, n, r.rootId);
   e({
    selectedIds: i,
    selectedId: i[i.length - 1] ?? null,
    editingId: null
   })
  },
  startEditing: (n = t().selectedId) => {
   n && Q(t().nodes, n) && e({
    selectedId: n,
    selectedIds: [n],
    editingId: n
   })
  },
  stopEditing: () => e({
   editingId: null
  }),
  addChild: (n = t().selectedId, r = L_) => {
   let i = t(),
    a = Q(i.nodes, n);
   if (!a) return null;
   let o = a.parentId === null,
    s = o ? Y_(i.nodes, i.rootId) : a.side,
    c = o ? X_(i.nodes, i.rootId, i.palette) : a.color,
    l = V_({
     parentId: a.id,
     text: r,
     side: s,
     color: c
    }),
    u = i.nodes.map(e => e.id === a.id && e.collapsed ? {
     ...e,
     collapsed: !1
    } : e);
   return u.push(l), e(Z(i, {
    nodes: u,
    selectedId: l.id,
    selectedIds: [l.id],
    editingId: l.id,
    ...K_(i, l.id)
   })), l.id
  },
  addSibling: (n = t().selectedId, r = L_) => {
   let i = t(),
    a = Q(i.nodes, n);
   if (!a) return null;
   if (a.parentId === null) return t().addChild(a.id, r);
   let o = Q(i.nodes, a.parentId);
   if (!o) return null;
   let s = o.parentId === null,
    c = V_({
     parentId: a.parentId,
     text: r,
     side: a.side,
     color: s ? X_(i.nodes, i.rootId, i.palette) : a.color
    }),
    l = J_(i.nodes, a.id),
    u = i.nodes.length;
   return i.nodes.forEach((e, t) => {
    l.has(e.id) && (u = Math.max(u, t + 1))
   }), e(Z(i, {
    nodes: [...i.nodes.slice(0, u), c, ...i.nodes.slice(u)],
    selectedId: c.id,
    selectedIds: [c.id],
    editingId: c.id,
    ...K_(i, c.id)
   })), c.id
  },
  deleteNode: (n = t().selectedId) => {
   let r = t(),
    i = Q(r.nodes, n);
   if (!i || i.parentId === null) return !1;
   let a = J_(r.nodes, n),
    o = r.nodes.filter(e => !a.has(e.id)),
    s = $_(o, i.parentId, r.rootId);
   return e(Z(r, {
    nodes: o,
    ...Q_(r, a),
    selectedId: s,
    selectedIds: [s],
    editingId: null,
    focusId: a.has(r.focusId) ? null : r.focusId
   })), !0
  },
  deleteSelection: () => {
   let n = t(),
    r = n.selectedIds.map(e => Q(n.nodes, e)).filter(e => e && e.parentId !== null);
   if (!r.length) return !1;
   let i = new Set(r.map(e => e.id)),
    a = r.filter(e => {
     let t = Q(n.nodes, e.parentId);
     for (; t;) {
      if (i.has(t.id)) return !1;
      t = t.parentId ? Q(n.nodes, t.parentId) : null
     }
     return !0
    }),
    o = new Set;
   for (let e of a)
    for (let t of J_(n.nodes, e.id)) o.add(t);
   let s = n.nodes.filter(e => !o.has(e.id)),
    c = Q_(n, o),
    l = $_(s, a[0]?.parentId, n.rootId);
   return e(Z(n, {
    nodes: s,
    ...c,
    selectedId: l,
    selectedIds: [l],
    editingId: null,
    focusId: o.has(n.focusId) ? null : n.focusId
   })), !0
  },
  toggleCollapse: (n = t().selectedId) => {
   let r = t(),
    i = Q(r.nodes, n);
   if (!i || !r.nodes.some(e => e.parentId === n)) return !1;
   let a = !i.collapsed,
    o = a ? J_(r.nodes, n) : null,
    s = r.nodes.map(e => e.id === n ? {
     ...e,
     collapsed: a
    } : e);
   return e(Z(r, {
    nodes: s,
    selectedId: a && o.has(r.selectedId) ? n : r.selectedId,
    selectedIds: a && o.has(r.selectedId) ? [n] : ev(s, r.selectedIds, r.selectedId),
    editingId: a && o.has(r.editingId) ? null : r.editingId
   })), !0
  },
  moveNode: (n, r, i = `child`) => {
   let a = t(),
    o = Q(a.nodes, n),
    s = Q(a.nodes, r);
   if (!o || o.parentId === null || !s || n === r || ![`child`, `before`, `after`].includes(i)) return !1;
   let c = J_(a.nodes, n);
   if (c.has(r) || i !== `child` && s.parentId === null) return !1;
   let l = i === `child` ? s.id : s.parentId,
    u = Q(a.nodes, l);
   if (!u) return !1;
   let d = a.nodes.filter(e => !c.has(e.id)),
    f = u.parentId === null,
    p = i === `child` && f ? Y_(d, a.rootId) : i === `child` ? u.side : s.side,
    m = f ? X_(d, a.rootId, a.palette) : u.color,
    h = a.nodes.filter(e => c.has(e.id)).map(e => {
     let t = {
      ...e,
      parentId: e.id === n ? l : e.parentId,
      side: p === `left` ? `left` : p === `right` ? `right` : e.side,
      color: m
     };
     return delete t.offset, t
    }),
    g = d.map(e => e.id === s.id && i === `child` && e.collapsed ? {
     ...e,
     collapsed: !1
    } : e),
    _ = g.length;
   if (i === `child`) {
    let e = J_(g, r);
    g.forEach((t, n) => {
     e.has(t.id) && (_ = Math.max(_, n + 1))
    })
   } else {
    let e = g.findIndex(e => e.id === r);
    if (e < 0) return !1;
    if (i === `before`) _ = e;
    else {
     let e = J_(g, r);
     g.forEach((t, n) => {
      e.has(t.id) && (_ = Math.max(_, n + 1))
     })
    }
   }
   return e(Z(a, {
    nodes: [...g.slice(0, _), ...h, ...g.slice(_)],
    selectedId: n,
    selectedIds: [n],
    editingId: null,
    ...K_(a, n)
   })), !0
  },
  moveNodeBy: (n, r, i) => {
   let a = t(),
    o = Q(a.nodes, n);
   if (!o || !Number.isFinite(r) || !Number.isFinite(i) || Math.abs(r) < .5 && Math.abs(i) < .5) return !1;
   let s = nv({
    x: (o.offset?.x ?? 0) + r,
    y: (o.offset?.y ?? 0) + i
   });
   return e(Z(a, {
    nodes: a.nodes.map(e => {
     if (e.id !== n) return e;
     let t = {
      ...e
     };
     return s ? t.offset = s : delete t.offset, t
    })
   })), !0
  },
  arrangeMap: () => {
   let n = t(),
    r = n.nodes.some(e => e.offset),
    i = r ? n.nodes.map(e => {
     if (!e.offset) return e;
     let t = {
      ...e
     };
     return delete t.offset, t
    }) : n.nodes;
   return e(r ? Z(n, {
    nodes: i,
    fitRequest: n.fitRequest + 1
   }) : {
    fitRequest: n.fitRequest + 1
   }), r
  },
  setNodeText: (n, r) => {
   let i = t(),
    a = Q(i.nodes, n);
   if (!a) return !1;
   let o = r.replace(/\r\n/g, `
`).trim() || L_;
   return o === a.text ? (i.editingId && e({
    editingId: null
   }), !0) : (e(Z(i, {
    nodes: i.nodes.map(e => e.id === n ? {
     ...e,
     text: o
    } : e),
    editingId: null
   })), !0)
  },
  setNodeStructure: (n, r) => {
   let i = t(),
    a = Q(i.nodes, n);
   if (!a) return !1;
   let o = av(r);
   return (a.structure ?? null) === o || e(Z(i, {
    nodes: i.nodes.map(e => {
     if (e.id !== n) return e;
     let t = {
      ...e
     };
     return o ? t.structure = o : delete t.structure, t
    }),
    fitRequest: i.fitRequest + 1
   })), !0
  },
  setMapStructure: n => {
   let r = t(),
    i = av(n) ?? `mindmap`;
   return r.mapStructure === i || e(Z(r, {
    mapStructure: i,
    nodes: r.nodes.some(e => e.offset) ? r.nodes.map(e => {
     if (!e.offset) return e;
     let t = {
      ...e
     };
     return delete t.offset, t
    }) : r.nodes,
    fitRequest: r.fitRequest + 1
   })), !0
  },
  setTheme: n => {
   let r = t();
   return r.theme === n || e(Z(r, {
    theme: n
   })), !0
  },
  applyTemplate: n => {
   let r = t();
   if (!x_(n)) return !1;
   let i = b_(n),
    a = d_(i.palette),
    o = r.mapStructure !== i.structure,
    s = r.palette.mode !== a.mode || r.palette.colors.join(`|`) !== a.colors.join(`|`);
   if (r.template === i.id && r.theme === i.theme && !o && !s) return !1;
   let c = Z_(r.nodes, r.rootId, a);
   return o && c.some(e => e.offset) && (c = c.map(e => {
    if (!e.offset) return e;
    let t = {
     ...e
    };
    return delete t.offset, t
   })), e(Z(r, {
    template: i.id,
    theme: i.theme,
    palette: a,
    mapStructure: i.structure,
    nodes: c,
    fitRequest: o ? r.fitRequest + 1 : r.fitRequest
   })), !0
  },
  setPalette: n => {
   let r = t(),
    i = d_(n);
   return e(Z(r, {
    palette: i,
    nodes: Z_(r.nodes, r.rootId, i)
   })), !0
  },
  setNodeStyle: (n, r, {
   subtree: i = !1
  } = {}) => {
   let a = t(),
    o = Q(a.nodes, n);
   if (!o) return !1;
   let s = tv({
     ...o.overrides ?? {},
     ...r
    }),
    c = i ? J_(a.nodes, n) : new Set([n]);
   return e(Z(a, {
    nodes: a.nodes.map(e => {
     if (!c.has(e.id)) return e;
     let t = {
      ...e
     };
     return Object.keys(s).length ? t.overrides = {
      ...s
     } : delete t.overrides, t
    })
   })), !0
  },
  resetNodeStyle: (n, {
   subtree: r = !1
  } = {}) => {
   let i = t();
   if (!Q(i.nodes, n)) return !1;
   let a = r ? J_(i.nodes, n) : new Set([n]);
   return e(Z(i, {
    nodes: i.nodes.map(e => {
     if (!a.has(e.id)) return e;
     let t = {
      ...e
     };
     return delete t.overrides, t
    })
   })), !0
  },
  clearNodeStyle: (n, r, {
   subtree: i = !1
  } = {}) => {
   let a = t();
   if (!Q(a.nodes, n)) return !1;
   let o = new Set((Array.isArray(r) ? r : [r]).filter(e => z_.includes(e))),
    s = i ? J_(a.nodes, n) : new Set([n]);
   return e(Z(a, {
    nodes: a.nodes.map(e => {
     if (!s.has(e.id) || !e.overrides) return e;
     let t = {
      ...e.overrides
     };
     for (let e of o) delete t[e];
     let n = {
      ...e
     };
     return Object.keys(t).length ? n.overrides = t : delete n.overrides, n
    })
   })), !0
  },
  addZone: ({
   nodeIds: n,
   label: r,
   color: i,
   shape: a = `rounded`,
   includeDescendants: o = !0
  }) => {
   let s = t(),
    c = (n ?? s.selectedIds).filter(e => Q(s.nodes, e));
   if (!c.length) return null;
   if (o) {
    let e = new Set;
    for (let t of c)
     for (let n of J_(s.nodes, t)) e.add(n);
    c = [...e]
   }
   let l = {
    id: Qg(),
    label: String(r ?? ``).trim() || `Group`,
    color: r_(i, `#6366f1`),
    shape: [`rounded`, `rect`, `pill`, `dashed`].includes(a) ? a : `rounded`,
    nodeIds: c
   };
   return e(Z(s, {
    zones: [...s.zones, l]
   })), l.id
  },
  updateZone: (n, r) => {
   let i = t();
   e(Z(i, {
    zones: i.zones.map(e => e.id === n ? {
     ...e,
     ...r,
     label: r.label === void 0 ? e.label : String(r.label).trim() || e.label,
     color: r.color === void 0 ? e.color : r_(r.color, e.color)
    } : e)
   }))
  },
  deleteZone: n => {
   let r = t();
   e(Z(r, {
    zones: r.zones.filter(e => e.id !== n)
   }))
  },
  beginRelationship: (n = t().selectedId) => {
   let r = t();
   return !n || !Q(r.nodes, n) ? !1 : (e({
    relationshipSourceId: n,
    relationshipDraft: null,
    summaryDraft: null,
    selectedId: n,
    selectedIds: [n],
    editingId: null
   }), !0)
  },
  cancelRelationship: () => {
   t().relationshipSourceId && e({
    relationshipSourceId: null
   })
  },
  completeRelationship: n => {
   let r = t(),
    i = r.relationshipSourceId;
   if (!i || !n || i === n) return !1;
   if (!Q(r.nodes, i) || !Q(r.nodes, n)) return e({
    relationshipSourceId: null
   }), !1;
   let a = r.addRelationship({
    sourceId: i,
    targetId: n
   });
   return e({
    relationshipSourceId: null,
    relationshipDraft: a ? {
     id: a,
     sourceId: i,
     targetId: n
    } : null,
    selectedId: i,
    selectedIds: [i]
   }), !!a
  },
  clearRelationshipDraft: () => {
   t().relationshipDraft && e({
    relationshipDraft: null
   })
  },
  editRelationship: n => {
   let r = t(),
    i = r.relationships.find(e => e.id === n);
   return i ? (e({
    relationshipDraft: {
     id: i.id,
     sourceId: i.sourceId,
     targetId: i.targetId
    },
    summaryDraft: null,
    relationshipSourceId: null,
    editingId: null
   }), !0) : !1
  },
  addRelationship: ({
   sourceId: n,
   targetId: r,
   label: i,
   color: a,
   style: o = `curved`
  }) => {
   let s = t();
   if (!Q(s.nodes, n) || !Q(s.nodes, r) || n === r) return null;
   let c = {
    id: Qg(),
    sourceId: n,
    targetId: r,
    label: String(i ?? ``).trim(),
    color: r_(a, `#6366f1`),
    style: o === `straight` ? `straight` : `curved`
   };
   return e(Z(s, {
    relationships: [...s.relationships, c]
   })), c.id
  },
  updateRelationship: (n, r) => {
   let i = t();
   e(Z(i, {
    relationships: i.relationships.map(e => e.id === n ? {
     ...e,
     ...r,
     label: r.label === void 0 ? e.label : String(r.label),
     color: r.color === void 0 ? e.color : r_(r.color, e.color),
     style: r.style === void 0 ? e.style : r.style === `straight` ? `straight` : `curved`
    } : e)
   }))
  },
  deleteRelationship: n => {
   let r = t();
   e(Z(r, {
    relationships: r.relationships.filter(e => e.id !== n)
   }))
  },
  setRelationshipAnchor: (n, r, i) => {
   let a = t(),
    o = a.relationships.find(e => e.id === n);
   if (!o || r !== `source` && r !== `target`) return !1;
   let s = r === `source` ? `sourceAnchor` : `targetAnchor`,
    c = iv(i),
    l = iv(o[s]);
   return (c?.angle ?? null) !== (l?.angle ?? null) && (e(Z(a, {
    relationships: a.relationships.map(e => {
     if (e.id !== n) return e;
     let t = {
      ...e
     };
     return c ? t[s] = c : delete t[s], t
    })
   })), !0)
  },
  setRelationshipCurve: (n, r) => {
   let i = t(),
    a = i.relationships.find(e => e.id === n);
   if (!a) return !1;
   let o = rv(r),
    s = rv(a.curve);
   return (o?.x ?? 0) === (s?.x ?? 0) && (o?.y ?? 0) === (s?.y ?? 0) ? !1 : (e(Z(i, {
    relationships: i.relationships.map(e => {
     if (e.id !== n) return e;
     let t = {
      ...e
     };
     return o ? t.curve = o : delete t.curve, t
    })
   })), !0)
  },
  addSummary: ({
   nodeIds: n,
   label: r,
   color: i,
   includeDescendants: a = !0
  }) => {
   let o = t(),
    s = (n ?? o.selectedIds).filter(e => Q(o.nodes, e));
   if (!s.length) return null;
   if (a) {
    let e = new Set;
    for (let t of s)
     for (let n of J_(o.nodes, t)) e.add(n);
    s = [...e]
   }
   let c = {
    id: Qg(),
    label: String(r ?? ``).trim() || `Summary`,
    color: r_(i, `#6366f1`),
    nodeIds: s
   };
   return e(Z(o, {
    summaries: [...o.summaries, c]
   })), c.id
  },
  updateSummary: (n, r) => {
   let i = t();
   e(Z(i, {
    summaries: i.summaries.map(e => e.id === n ? {
     ...e,
     ...r,
     label: r.label === void 0 ? e.label : String(r.label).trim() || e.label,
     color: r.color === void 0 ? e.color : r_(r.color, e.color)
    } : e)
   }))
  },
  deleteSummary: n => {
   let r = t();
   e(Z(r, {
    summaries: r.summaries.filter(e => e.id !== n)
   }))
  },
  editSummary: n => {
   let r = t();
   return !n || !r.summaries.some(e => e.id === n) ? !1 : (e({
    summaryDraft: n,
    relationshipDraft: null,
    relationshipSourceId: null,
    editingId: null
   }), !0)
  },
  closeSummaryEditor: () => {
   t().summaryDraft && e({
    summaryDraft: null
   })
  },
  addCallout: ({
   nodeId: n,
   text: r,
   color: i,
   side: a = `auto`
  }) => {
   let o = t();
   if (!Q(o.nodes, n)) return null;
   let s = {
    id: Qg(),
    nodeId: n,
    text: String(r ?? ``).trim() || `Callout`,
    color: r_(i, `#f59e0b`),
    side: [`auto`, `left`, `right`].includes(a) ? a : `auto`
   };
   return e(Z(o, {
    callouts: [...o.callouts, s]
   })), s.id
  },
  updateCallout: (n, r) => {
   let i = t();
   e(Z(i, {
    callouts: i.callouts.map(e => e.id === n ? {
     ...e,
     ...r,
     text: r.text === void 0 ? e.text : String(r.text).trim() || e.text,
     color: r.color === void 0 ? e.color : r_(r.color, e.color),
     side: [`auto`, `left`, `right`].includes(r.side) ? r.side : e.side
    } : e)
   }))
  },
  deleteCallout: n => {
   let r = t();
   e(Z(r, {
    callouts: r.callouts.filter(e => e.id !== n)
   }))
  },
  revealNode: n => {
   let r = t();
   Q(r.nodes, n) && e({
    selectedId: n,
    selectedIds: [n],
    editingId: null,
    ...K_(r, n)
   })
  },
  setFocus: n => {
   let r = t();
   !n || n === r.rootId || !Q(r.nodes, n) ? e({
    focusId: null,
    fitRequest: r.fitRequest + 1
   }) : e({
    focusId: n,
    selectedId: n,
    selectedIds: [n],
    editingId: null,
    fitRequest: r.fitRequest + 1
   })
  },
  clearFocus: () => {
   e({
    focusId: null,
    fitRequest: t().fitRequest + 1
   })
  },
  setOutlineOpen: t => e({
   outlineOpen: !!t
  }),
  toggleOutline: () => e(e => ({
   outlineOpen: !e.outlineOpen
  })),
  startPresentation: () => {
   let n = t(),
    r = g_(n.nodes, n.rootId, n.focusId);
   r.length && e({
    presentationActive: !0,
    presentationIndex: 0,
    presentationSlides: r,
    editingId: null,
    relationshipSourceId: null,
    relationshipDraft: null,
    summaryDraft: null,
    leftPanel: null,
    rightPanel: null
   })
  },
  stopPresentation: () => e({
   presentationActive: !1,
   presentationIndex: 0,
   rightPanel: `style`
  }),
  goToSlide: n => {
   let r = t(),
    i = g_(r.nodes, r.rootId, r.focusId);
   i.length && e({
    presentationActive: !0,
    presentationIndex: Math.max(0, Math.min(i.length - 1, n))
   })
  },
  nextSlide: () => {
   let e = t(),
    n = g_(e.nodes, e.rootId, e.focusId);
   e.goToSlide(Math.min(n.length - 1, e.presentationIndex + 1))
  },
  prevSlide: () => {
   let e = t();
   e.goToSlide(Math.max(0, e.presentationIndex - 1))
  },
  undo: () => {
   let n = t();
   if (!n.past.length) return !1;
   let r = n.past[n.past.length - 1],
    i = G_(n),
    a = $_(r.nodes, r.selectedId, r.rootId);
   return e({
    ...r,
    selectedId: a,
    selectedIds: ev(r.nodes, r.selectedIds, a),
    editingId: null,
    past: n.past.slice(0, -1),
    future: [i, ...n.future].slice(0, 100),
    revision: n.revision + 1,
    focusId: n.focusId && r.nodes.some(e => e.id === n.focusId) ? n.focusId : null
   }), !0
  },
  redo: () => {
   let n = t();
   if (!n.future.length) return !1;
   let r = n.future[0],
    i = G_(n),
    a = $_(r.nodes, r.selectedId, r.rootId);
   return e({
    ...r,
    selectedId: a,
    selectedIds: ev(r.nodes, r.selectedIds, a),
    editingId: null,
    past: [...n.past, i].slice(-100),
    future: n.future.slice(1),
    revision: n.revision + 1,
    focusId: n.focusId && r.nodes.some(e => e.id === n.focusId) ? n.focusId : null
   }), !0
  },
  replaceDocument: (n, {
   fit: r = !0
  } = {}) => {
   let i = t(),
    a = n.nodes,
    o = $_(a, n.rootId, a[0]?.id);
   e(Z(i, {
    nodes: a,
    rootId: n.rootId,
    zones: Array.isArray(n.zones) ? n.zones : [],
    relationships: Array.isArray(n.relationships) ? n.relationships : [],
    summaries: Array.isArray(n.summaries) ? n.summaries : [],
    callouts: Array.isArray(n.callouts) ? n.callouts : [],
    theme: n.theme ?? i.theme,
    palette: d_(n.palette ?? i.palette),
    mapStructure: av(n.mapStructure) ?? `mindmap`,
    template: ov(n.template ?? i.template),
    lineStyle: C_.includes(n.lineStyle) ? n.lineStyle : S_,
    backgroundColor: typeof n.backgroundColor == `string` ? n.backgroundColor : null,
    layoutFlags: {
     ...k_,
     ...n.layoutFlags ?? {}
    },
    cjkFont: n.cjkFont ?? `system`,
    sheets: [{
     id: `sheet-1`,
     name: `Map 1`
    }],
    activeSheetId: `sheet-1`,
    sheetDocs: {},
    leftPanel: null,
    selectedId: o,
    selectedIds: [o],
    editingId: null,
    focusId: null,
    relationshipSourceId: null,
    relationshipDraft: null,
    summaryDraft: null,
    fitRequest: r ? i.fitRequest + 1 : i.fitRequest
   }))
  },
  newMap: () => {
   let e = t(),
    n = H_();
   return n.theme = e.theme, n.palette = e.palette, n.mapStructure = e.mapStructure, n.template = ov(e.template), t().replaceDocument(n), n
  },
  hydrate: (t, n = null) => {
   let r = $_(t.nodes, t.rootId, t.nodes[0]?.id),
    i = Array.isArray(t.sheets) && t.sheets.length ? t.sheets : [{
     id: `sheet-1`,
     name: `Map 1`
    }],
    a = t.activeSheetId && i.some(e => e.id === t.activeSheetId) ? t.activeSheetId : i[0].id,
    o = {};
   for (let e of i) e.id !== a && (e.document ? o[e.id] = e.document : e.nodes?.length && (o[e.id] = e));
   e(e => ({
    nodes: t.nodes,
    rootId: t.rootId,
    zones: Array.isArray(t.zones) ? t.zones : [],
    relationships: Array.isArray(t.relationships) ? t.relationships : [],
    summaries: Array.isArray(t.summaries) ? t.summaries : [],
    callouts: Array.isArray(t.callouts) ? t.callouts : [],
    theme: t.theme ?? `classic`,
    palette: d_(t.palette),
    mapStructure: av(t.mapStructure) ?? `mindmap`,
    template: ov(t.template),
    lineStyle: C_.includes(t.lineStyle) ? t.lineStyle : S_,
    backgroundColor: typeof t.backgroundColor == `string` ? t.backgroundColor : null,
    layoutFlags: {
     ...k_,
     ...t.layoutFlags ?? {}
    },
    cjkFont: t.cjkFont ?? `system`,
    sheets: i.map(e => ({
     id: e.id,
     name: e.name
    })),
    activeSheetId: a,
    sheetDocs: o,
    selectedId: r,
    selectedIds: [r],
    editingId: null,
    focusId: null,
    hydrated: !0,
    relationshipSourceId: null,
    relationshipDraft: null,
    summaryDraft: null,
    revision: e.revision + 1,
    past: [],
    future: [],
    focusRequest: null,
    fitRequest: e.fitRequest + 1,
    saveStatus: n ? `saved` : `idle`,
    lastSavedAt: n
   }))
  },
  markHydrated: () => {
   e(e => ({
    hydrated: !0,
    revision: e.revision + 1,
    fitRequest: e.fitRequest + 1
   }))
  },
  requestFit: () => {
   e(e => ({
    fitRequest: e.fitRequest + 1
   }))
  },
  setSaveStatus: (t, n = void 0) => {
   e(e => ({
    saveStatus: t,
    lastSavedAt: n === void 0 ? e.lastSavedAt : n
   }))
  },
  notify: (t, n = `info`) => {
   e({
    notice: {
     id: Qg(),
     message: t,
     tone: n
    }
   })
  },
  dismissNotice: (n = null) => {
   let r = t().notice;
   n && r?.id !== n || e({
    notice: null
   })
  },
  setLeftPanel: n => {
   let r = [`outliner`, `markers`, `themes`, `search`].includes(n) ? n : null;
   e({
    leftPanel: r === t().leftPanel ? null : r
   })
  },
  setRightPanel: t => {
   e({
    rightPanel: t === `style` || t === `map` ? t : null
   })
  },
  setDialog: t => e({
   dialog: t || null
  }),
  setZoom: n => {
   let r = t(),
    i = Math.max(.15, Math.min(2.4, Number(n) || 1));
   e({
    zoom: i,
    zoomRequest: {
     zoom: i,
     nonce: (r.zoomRequest?.nonce ?? 0) + 1
    }
   })
  },
  syncZoom: n => {
   if (!Number.isFinite(n)) return;
   let r = Math.round(n * 1e3) / 1e3;
   r !== t().zoom && e({
    zoom: r
   })
  },
  zoomIn: () => t().setZoom(t().zoom * 1.2),
  zoomOut: () => t().setZoom(t().zoom / 1.2),
  setLineStyle: n => {
   let r = t(),
    i = C_.includes(n) ? n : S_;
   r.lineStyle !== i && e(Z(r, {
    lineStyle: i
   }))
  },
  setBackground: n => {
   let r = t(),
    i = typeof n == `string` && /^#[0-9a-f]{6}$/i.test(n) ? r_(n) : null;
   (r.backgroundColor ?? null) !== i && e(Z(r, {
    backgroundColor: i
   }))
  },
  setPaletteMode: n => {
   let r = t(),
    i = n === `single` ? `single` : `multi`;
   r.palette.mode !== i && e(Z(r, {
    palette: {
     ...r.palette,
     mode: i
    }
   }))
  },
  setLayoutFlag: (n, r) => {
   let i = t();
   n in k_ && !!i.layoutFlags?.[n] != !!r && e(Z(i, {
    layoutFlags: {
     ...k_,
     ...i.layoutFlags,
     [n]: !!r
    }
   }))
  },
  setCjkFont: n => {
   let r = t(),
    i = String(n || `system`);
   r.cjkFont !== i && e(Z(r, {
    cjkFont: i
   }))
  },
  patchNode: (n, r, {
   subtree: i = !1
  } = {}) => {
   let a = t();
   if (!Q(a.nodes, n)) return !1;
   let o = i ? J_(a.nodes, n) : new Set([n]);
   return e(Z(a, {
    nodes: a.nodes.map(e => o.has(e.id) ? r(e) : e)
   })), !0
  },
  applyTopicPreset: (e, n) => {
   if (!Q(t().nodes, e)) return !1;
   let r = E_.has(n) ? n : `default`;
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r === "default" ? delete t.preset : t.preset = r, t
   })
  },
  setNodeShape: (e, n, r = {}) => {
   let i = w_.includes(n) ? n : `auto`;
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return i === `auto` ? delete t.shape : t.shape = i, t
   }, r)
  },
  setNodeTextStyle: (e, n, r = {}) => {
   let i = Q(t().nodes, e);
   if (!i) return !1;
   let a = {
    ...i.style ?? {}
   };
   for (let e of A_) n[e] !== void 0 && (e === `align` ? [`left`, `center`, `right`].includes(n.align) ? a.align = n.align : delete a.align : typeof n[e] == `boolean` && (n[e] ? a[e] = !0 : delete a[e]));
   if (n.fontSize !== void 0) {
    let e = Number(n.fontSize);
    Number.isFinite(e) ? a.fontSize = Math.max(9, Math.min(48, Math.round(e))) : delete a.fontSize
   }
   if (n.fontWeight !== void 0) {
    let e = Number(n.fontWeight);
    Number.isFinite(e) ? a.fontWeight = Math.max(400, Math.min(800, e)) : delete a.fontWeight
   }
   if (n.branchWidth !== void 0) {
    let e = Number(n.branchWidth);
    Number.isFinite(e) ? a.branchWidth = Math.max(1, Math.min(10, e)) : delete a.branchWidth
   }
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return Object.keys(a).length ? t.style = {
     ...a
    } : delete t.style, t
   }, r)
  },
  setNodeWidth: (e, n) => {
   if (!Q(t().nodes, e)) return !1;
   let r = Number(n);
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return !Number.isFinite(r) || r <= 0 ? delete t.widthOverride : t.widthOverride = Math.max(72, Math.min(680, Math.round(r))), t
   })
  },
  setNodeMarkers: (e, n) => {
   let r = Array.isArray(n) ? [...new Set(n.filter(Boolean))] : [];
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r.length ? t.markers = r : delete t.markers, t
   })
  },
  toggleNodeMarker: (e, n) => {
   let r = Q(t().nodes, e);
   if (!r || !n) return !1;
   let i = new Set(r.markers ?? []);
   return i.has(n) ? i.delete(n) : i.add(n), t().setNodeMarkers(e, [...i])
  },
  setNodeLabels: (e, n) => {
   let r = Array.isArray(n) ? n.filter(e => e && String(e.text ?? ``).trim()).map(e => ({
    id: e.id || Qg(),
    text: String(e.text).trim().slice(0, 80),
    color: r_(e.color, `#6366f1`)
   })) : [];
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r.length ? t.labels = r : delete t.labels, t
   })
  },
  addNodeLabel: (e, {
   text: n,
   color: r
  } = {}) => {
   let i = Q(t().nodes, e);
   if (!i) return null;
   let a = String(n ?? ``).trim().slice(0, 80);
   if (!a) return null;
   let o = {
    id: Qg(),
    text: a,
    color: r_(r, `#6366f1`)
   };
   return t().setNodeLabels(e, [...i.labels ?? [], o]), o.id
  },
  updateNodeLabel: (e, n, r) => {
   let i = Q(t().nodes, e);
   return i ? t().setNodeLabels(e, (i.labels ?? []).map(e => e.id === n ? {
    ...e,
    text: String(r.text ?? e.text).trim() || e.text,
    color: r_(r.color, e.color)
   } : e)) : !1
  },
  removeNodeLabel: (e, n) => {
   let r = Q(t().nodes, e);
   return r ? t().setNodeLabels(e, (r.labels ?? []).filter(e => e.id !== n)) : !1
  },
  setNodeNote: (e, n) => {
   let r = String(n ?? ``).trim().slice(0, 4e3);
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r ? t.note = r : delete t.note, t
   })
  },
  setNodeTask: (e, n) => {
   let r = null;
   return n && typeof n == `object` && (r = {
    progress: Math.max(0, Math.min(100, Number(n.progress) || 0)),
    priority: [`P1`, `P2`, `P3`, `P4`].includes(n.priority) ? n.priority : `P3`
   }, n.start && (r.start = String(n.start).slice(0, 10)), n.due && (r.due = String(n.due).slice(0, 10))), t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r ? t.task = r : delete t.task, t
   })
  },
  setNodeLink: (e, n) => {
   let r = String(n ?? ``).trim().slice(0, 2e3);
   return t().patchNode(e, e => {
    let t = {
     ...e
    };
    return r ? t.link = r : delete t.link, t
   })
  },
  switchSheet: n => {
   let r = t();
   if (!n || n === r.activeSheetId) return !1;
   let i = r.sheetDocs?.[n];
   if (!i) return !1;
   let a = W_(r),
    o = i.rootId ?? i.nodes?.[0]?.id ?? null;
   return e({
    ...i,
    sheetDocs: {
     ...r.sheetDocs,
     [r.activeSheetId]: a
    },
    activeSheetId: n,
    selectedId: o,
    selectedIds: o ? [o] : [],
    editingId: null,
    focusId: null,
    past: [],
    future: [],
    revision: r.revision + 1,
    fitRequest: r.fitRequest + 1,
    relationshipSourceId: null,
    relationshipDraft: null,
    summaryDraft: null,
    presentationActive: !1,
    presentationIndex: 0,
    outlineOpen: !1
   }), !0
  },
  addSheet: () => {
   let n = t(),
    r = Qg(),
    i = `Map ${n.sheets.length+1}`,
    a = B_(`Central Topic`),
    o = W_(n);
   return e({
    ...a,
    sheets: [...n.sheets, {
     id: r,
     name: i
    }],
    sheetDocs: {
     ...n.sheetDocs,
     [n.activeSheetId]: o
    },
    activeSheetId: r,
    selectedId: a.rootId,
    selectedIds: [a.rootId],
    editingId: null,
    focusId: null,
    past: [],
    future: [],
    revision: n.revision + 1,
    fitRequest: n.fitRequest + 1,
    relationshipSourceId: null,
    relationshipDraft: null,
    summaryDraft: null,
    presentationActive: !1
   }), r
  },
  renameSheet: (t, n) => {
   let r = String(n ?? ``).trim().slice(0, 60);
   return r ? (e(e => ({
    sheets: e.sheets.map(e => e.id === t ? {
     ...e,
     name: r
    } : e)
   })), !0) : !1
  },
  deleteSheet: n => {
   let r = t();
   if (r.sheets.length <= 1) return !1;
   let i = r.sheets.findIndex(e => e.id === n);
   if (i < 0) return !1;
   let a = r.sheets.filter(e => e.id !== n),
    o = {
     ...r.sheetDocs
    };
   if (delete o[n], n !== r.activeSheetId) return e({
    sheets: a,
    sheetDocs: o
   }), !0;
   let s = a[Math.min(i, a.length - 1)],
    c = o[s.id] ?? B_(`Central Topic`);
   return e({
    ...c,
    sheets: a,
    sheetDocs: o,
    activeSheetId: s.id,
    selectedId: c.rootId ?? c.nodes?.[0]?.id ?? null,
    selectedIds: [c.rootId ?? c.nodes?.[0]?.id].filter(Boolean),
    editingId: null,
    focusId: null,
    past: [],
    future: [],
    revision: r.revision + 1,
    fitRequest: r.fitRequest + 1,
    presentationActive: !1
   }), !0
  },
  setPresentationSlides: t => e({
   presentationSlides: Array.isArray(t) ? t : []
  })
 })),
 cv = qg(e => ({
  status: `registering`,
  activeVersion: null,
  waitingVersion: null,
  lastCheckedAt: null,
  offlineReady: !1,
  error: null,
  actions: {
   checkForUpdates: null,
   applyUpdate: null
  },
  setActions: t => e(e => ({
   actions: {
    ...e.actions,
    ...t
   }
  })),
  setStatus: t => e({
   status: t
  }),
  setActiveVersion: t => e({
   activeVersion: t
  }),
  setWaitingVersion: t => e({
   waitingVersion: t
  }),
  setLastCheckedAt: t => e({
   lastCheckedAt: t
  }),
  setOfflineReady: t => e({
   offlineReady: t
  }),
  setError: t => e({
   error: t
  }),
  reset: () => e({
   status: `registering`,
   activeVersion: null,
   waitingVersion: null,
   lastCheckedAt: null,
   offlineReady: !1,
   error: null
  })
 })),
 lv = `2.1.0`,
 uv = `2026-11-05T08:34:51.650Z`,
 dv = Array.isArray([{
  version: `2.1.0`,
  date: `2026-11-05`,
  added: ["Versioned service worker (`src/sw.js`) built with `injectManifest`: precaches the app shell, serves it offline, and names every cache after the app version so old caches can never be reused.", "Runtime caching for images and fonts, plus an offline navigation fallback to `index.html`.", `In-app **About** dialog showing the current version, build time, service-worker state and release notes.`, `Update banner that applies a newly deployed version automatically when it is safe to reload (never while you are editing a topic).`, '"Check for updates" action that compares this build against the deployed `version.json`.', "`version.json` emitted with every production build for update checks."],
  changed: ["The app version is injected from `package.json` at build time (`__APP_VERSION__`) instead of being hard-coded.", `Release notes rendered in the app are parsed from this changelog at build time.`, "Bumped to `2.1.0`."],
  fixed: [],
  removed: []
 }, {
  version: `2.0.0`,
  date: `2026-11-05`,
  added: [`XMind 2025-style floating-card editor: top bar with file menu, left rail + flyouts, right Style/Map format panel, bottom sheet/zoom pill, quick-insert bar and status pill.`, `Twelve map themes (Snowbrush, Vanilla, Classic, Ink Wash, Ocean, Midnight, Forest, Sunset, Lavender, Mono, Candy, Tech) with tapered organic branches.`, `Eight structures: mind map, logic chart (right/left), org chart, tree table, timeline, fishbone and brace map, with per-subtree overrides.`, `Topic styling: presets, twelve shapes, fill/border/text colours, font size and weight, bold/italic/underline/strikethrough, alignment, fixed width and branch width.`, `Annotations: markers (eight categories), labels, notes, task info, hyperlinks, relationships, summaries, boundaries and callouts.`, `Multi-sheet maps, outliner with inline editing, search, and a full-screen pitch mode.`, `Export to PNG, SVG, PDF/print, JSON and Markdown; import from JSON and Markdown.`, `PWA icons, multi-resolution favicon, Safari pinned tab and a 1200×630 social preview image.`, "GitHub Pages deployment pipeline with linting, and a zero-dependency local launcher (`serve.bat`)."],
  changed: [`Rebuilt the interface, layout engine, theme system and document schema for the XMind replica; legacy components removed.`, `CSS bundle reduced from 154 KB to 86 KB.`],
  fixed: [],
  removed: []
 }, {
  version: `1.0.0`,
  date: `2026-11-04`,
  added: [`Offline-first mind mapping PWA: bidirectional auto-layout, inline editing, collapse/expand, undo/redo, autosave to IndexedDB.`, `Export to PNG, SVG, JSON and Markdown; imports validated against cycles, duplicate ids and oversized documents.`, `Themes, map structures, templates, presentation mode and an outline panel.`],
  changed: [],
  fixed: [],
  removed: []
 }]) ? [{
  version: `2.1.0`,
  date: `2026-11-05`,
  added: ["Versioned service worker (`src/sw.js`) built with `injectManifest`: precaches the app shell, serves it offline, and names every cache after the app version so old caches can never be reused.", "Runtime caching for images and fonts, plus an offline navigation fallback to `index.html`.", `In-app **About** dialog showing the current version, build time, service-worker state and release notes.`, `Update banner that applies a newly deployed version automatically when it is safe to reload (never while you are editing a topic).`, '"Check for updates" action that compares this build against the deployed `version.json`.', "`version.json` emitted with every production build for update checks."],
  changed: ["The app version is injected from `package.json` at build time (`__APP_VERSION__`) instead of being hard-coded.", `Release notes rendered in the app are parsed from this changelog at build time.`, "Bumped to `2.1.0`."],
  fixed: [],
  removed: []
 }, {
  version: `2.0.0`,
  date: `2026-11-05`,
  added: [`XMind 2025-style floating-card editor: top bar with file menu, left rail + flyouts, right Style/Map format panel, bottom sheet/zoom pill, quick-insert bar and status pill.`, `Twelve map themes (Snowbrush, Vanilla, Classic, Ink Wash, Ocean, Midnight, Forest, Sunset, Lavender, Mono, Candy, Tech) with tapered organic branches.`, `Eight structures: mind map, logic chart (right/left), org chart, tree table, timeline, fishbone and brace map, with per-subtree overrides.`, `Topic styling: presets, twelve shapes, fill/border/text colours, font size and weight, bold/italic/underline/strikethrough, alignment, fixed width and branch width.`, `Annotations: markers (eight categories), labels, notes, task info, hyperlinks, relationships, summaries, boundaries and callouts.`, `Multi-sheet maps, outliner with inline editing, search, and a full-screen pitch mode.`, `Export to PNG, SVG, PDF/print, JSON and Markdown; import from JSON and Markdown.`, `PWA icons, multi-resolution favicon, Safari pinned tab and a 1200×630 social preview image.`, "GitHub Pages deployment pipeline with linting, and a zero-dependency local launcher (`serve.bat`)."],
  changed: [`Rebuilt the interface, layout engine, theme system and document schema for the XMind replica; legacy components removed.`, `CSS bundle reduced from 154 KB to 86 KB.`],
  fixed: [],
  removed: []
 }, {
  version: `1.0.0`,
  date: `2026-11-04`,
  added: [`Offline-first mind mapping PWA: bidirectional auto-layout, inline editing, collapse/expand, undo/redo, autosave to IndexedDB.`, `Export to PNG, SVG, JSON and Markdown; imports validated against cycles, duplicate ids and oversized documents.`, `Themes, map structures, templates, presentation mode and an outline panel.`],
  changed: [],
  fixed: [],
  removed: []
 }] : [],
 fv = dv.find(e => e.version === `2.1.0`) ?? dv[0] ?? null,
 pv = dv.filter(e => e.version !== fv?.version);

function mv(e = uv) {
 if (!e) return `development build`;
 let t = new Date(e);
 return Number.isNaN(t.getTime()) ? e : t.toLocaleString(void 0, {
  year: `numeric`,
  month: `short`,
  day: `numeric`,
  hour: `2-digit`,
  minute: `2-digit`
 })
}

function hv(e, t = 6) {
 return e ? [...e.added, ...e.changed, ...e.fixed].slice(0, t) : []
}
var gv = {
  idle: {
   label: `Saved locally`,
   tone: `saved`,
   icon: Vp
  },
  saving: {
   label: `Saving…`,
   tone: `saving`,
   icon: ah
  },
  saved: {
   label: `Saved locally`,
   tone: `saved`,
   icon: Vp
  },
  error: {
   label: `Save failed`,
   tone: `error`,
   icon: tm
  }
 },
 _v = [
  [{
   id: `new-map`,
   icon: Dm,
   label: `New map`,
   hint: `Ctrl+N`,
   event: `xm:new-map`
  }, {
   id: `import`,
   icon: Ng,
   label: `Import…`,
   event: `xm:open-import`
  }],
  [{
   id: `export-map`,
   icon: pm,
   label: `Export map…`,
   event: `xm:export-menu`
  }, {
   id: `save-json`,
   icon: Cm,
   label: `Save a copy (JSON)`,
   event: `xm:export`,
   detail: `json`
  }, {
   id: `print`,
   icon: jh,
   label: `Print / PDF`,
   event: `xm:export`,
   detail: `print`
  }],
  [{
   id: `shortcuts`,
   icon: qm,
   label: `Keyboard shortcuts`,
   event: `xm:open-shortcuts`
  }, {
   id: `about`,
   icon: Um,
   label: `About Mindx`,
   event: `xm:about`
  }]
 ];

function vv(e) {
 if (!e) return ``;
 let t = new Date(e);
 if (Number.isNaN(t.getTime())) return ``;
 try {
  return new Intl.DateTimeFormat(void 0, {
   hour: `2-digit`,
   minute: `2-digit`
  }).format(t)
 } catch {
  return ``
 }
}

function yv(e, t) {
 return e === `saving` ? `Saving your changes to this browser` : e === `error` ? `Autosave failed — your changes are still in this tab` : t ? `Saved in this browser at ${t}` : `Saved in this browser`
}

function bv() {
 let [e, t] = (0, _.useState)(!1), n = (0, _.useRef)(null), r = cv(e => e.waitingVersion), i = $(e => e.rootId), a = $(e => e.nodes.find(t => t.id === e.rootId)?.text ?? `Central Topic`), o = $(e => e.startEditing), s = $(e => e.saveStatus), c = $(e => e.lastSavedAt), l = $(e => e.past.length > 0), u = $(e => e.future.length > 0), d = $(e => e.undo), f = $(e => e.redo), p = $(e => e.startPresentation), m = $(e => e.notify), h = gv[s] ?? gv.idle, g = h.icon, v = vv(c);
 (0, _.useEffect)(() => {
  if (!e) return;
  let r = e => {
    n.current?.contains(e.target) || t(!1)
   },
   i = e => {
    e.key === `Escape` && t(!1)
   };
  return document.addEventListener(`pointerdown`, r, !0), document.addEventListener(`keydown`, i), () => {
   document.removeEventListener(`pointerdown`, r, !0), document.removeEventListener(`keydown`, i)
  }
 }, [e]);
 let y = e => {
  t(!1), e.event === `xm:export` ? window.dispatchEvent(new CustomEvent(`xm:export`, {
   detail: e.detail
  })) : window.dispatchEvent(new CustomEvent(e.event))
 };
 return (0, b.jsxs)(`header`, {
  className: `xm-topbar`,
  children: [(0, b.jsxs)(`div`, {
   className: `xm-topbar__left`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-topbar__brand`,
    "aria-hidden": `true`,
    children: (0, b.jsx)(zg, {
     size: 17,
     strokeWidth: 2.1
    })
   }), (0, b.jsx)(`span`, {
    className: `xm-topbar__wordmark`,
    children: `Mindx`
   }), (0, b.jsxs)(`div`, {
    className: `xm-docmenu`,
    ref: n,
    children: [(0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--icon xm-topbar__menu`,
     onClick: () => t(e => !e),
     title: `File menu`,
     "aria-label": `File menu`,
     "aria-haspopup": `menu`,
     "aria-expanded": e,
     children: (0, b.jsx)(dh, {
      size: 17,
      "aria-hidden": `true`
     })
    }), e ? (0, b.jsxs)(`div`, {
     className: `xm-popover xm-docmenu__popover`,
     role: `menu`,
     "aria-label": `File menu`,
     children: [_v.map((e, t) => (0, b.jsxs)(`div`, {
      className: `xm-docmenu__section`,
      children: [t > 0 ? (0, b.jsx)(`div`, {
       className: `xm-menu-divider`,
       "aria-hidden": `true`
      }) : null, e.map(e => {
       let t = e.icon;
       return (0, b.jsxs)(`button`, {
        type: `button`,
        role: `menuitem`,
        className: `xm-menu-row`,
        onClick: () => y(e),
        title: e.label,
        "aria-label": e.label,
        children: [(0, b.jsx)(t, {
         size: 15,
         "aria-hidden": `true`
        }), (0, b.jsx)(`span`, {
         className: `xm-menu-row__label`,
         children: e.label
        }), e.hint ? (0, b.jsx)(`kbd`, {
         className: `xm-kbd xm-docmenu__kbd`,
         children: e.hint
        }) : null]
       }, e.id)
      })]
     }, e[0].id)), (0, b.jsx)(`div`, {
      className: `xm-menu-divider`,
      "aria-hidden": `true`
     }), (0, b.jsxs)(`div`, {
      className: `xm-docmenu__footer`,
      children: [(0, b.jsxs)(`span`, {
       className: `xm-docmenu__version`,
       children: [`Mindx v`, lv]
      }), r ? (0, b.jsxs)(`button`, {
       type: `button`,
       className: `xm-docmenu__update`,
       onClick: () => y({
        event: `xm:about`
       }),
       title: `Version ${r} is ready to install`,
       children: [(0, b.jsx)(`span`, {
        className: `xm-docmenu__update-dot`,
        "aria-hidden": `true`
       }), `v`, r, ` ready`]
      }) : (0, b.jsx)(`span`, {
       className: `xm-docmenu__update xm-docmenu__update--idle`,
       children: `Up to date`
      })]
     })]
    }) : null]
   }), (0, b.jsx)(`span`, {
    className: `xm-topbar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-topbar__doc`,
    onClick: () => o(i),
    title: `Rename central topic`,
    "aria-label": `Rename central topic: ${a}`,
    children: [(0, b.jsx)(`span`, {
     className: `xm-topbar__doc-name`,
     children: a
    }), (0, b.jsx)(Th, {
     size: 12,
     className: `xm-topbar__doc-pencil`,
     "aria-hidden": `true`
    }), (0, b.jsx)(Up, {
     size: 13,
     className: `xm-topbar__doc-chevron`,
     "aria-hidden": `true`
    })]
   }), (0, b.jsxs)(`span`, {
    className: `xm-topbar__status xm-topbar__status--${h.tone}`,
    role: `status`,
    title: yv(s, v),
    children: [(0, b.jsx)(g, {
     size: 13,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     className: `xm-topbar__status-label`,
     children: h.label
    })]
   })]
  }), (0, b.jsxs)(`div`, {
   className: `xm-topbar__right`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-topbar__icon`,
    onClick: () => d(),
    disabled: !l,
    title: `Undo (Ctrl+Z)`,
    "aria-label": `Undo`,
    children: (0, b.jsx)(jg, {
     size: 17,
     "aria-hidden": `true`
    })
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-topbar__icon`,
    onClick: () => f(),
    disabled: !u,
    title: `Redo (Ctrl+Shift+Z)`,
    "aria-label": `Redo`,
    children: (0, b.jsx)(Nh, {
     size: 17,
     "aria-hidden": `true`
    })
   }), (0, b.jsx)(`span`, {
    className: `xm-divider-v xm-topbar__sep`,
    "aria-hidden": `true`
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-topbar__action`,
    onClick: () => p(),
    title: `Start presentation (F5)`,
    "aria-label": `Start presentation`,
    children: [(0, b.jsx)(Dh, {
     size: 16,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     className: `xm-topbar__label`,
     children: `Present`
    })]
   }), (0, b.jsx)(`span`, {
    className: `xm-divider-v xm-topbar__sep`,
    "aria-hidden": `true`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-topbar__share`,
    onClick: () => m(`Sharing is local to this browser.`, `info`),
    title: `Share this map`,
    "aria-label": `Share map`,
    children: `Share`
   })]
  })]
 })
}
var xv = [{
  id: `outliner`,
  label: `Outliner`,
  icon: rh
 }, {
  id: `markers`,
  label: `Markers`,
  icon: rg
 }, {
  id: `themes`,
  label: `Themes`,
  icon: _h
 }, {
  id: `search`,
  label: `Search`,
  icon: Vh
 }],
 Sv = {
  outliner: `Outliner`,
  markers: `Markers`,
  themes: `Themes`,
  search: `Search`
 };

function Cv({
 flyout: e
}) {
 let t = $(e => e.leftPanel),
  n = $(e => e.setLeftPanel),
  r = e => {
   n(t === e ? null : e)
  };
 return (0, b.jsxs)(`div`, {
  className: `xm-leftrail`,
  role: `group`,
  "aria-label": `Map panels`,
  children: [xv.map(e => {
   let n = e.icon,
    i = t === e.id;
   return (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-leftrail__btn${i?` is-active`:``}`,
    onClick: () => r(e.id),
    title: e.label,
    "aria-label": e.label,
    "aria-pressed": i,
    children: (0, b.jsx)(n, {
     size: 17,
     "aria-hidden": `true`
    })
   }, e.id)
  }), (0, b.jsx)(`span`, {
   className: `xm-leftrail__divider`,
   "aria-hidden": `true`
  }), (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-btn xm-btn--icon xm-leftrail__btn`,
   onClick: () => {
    window.dispatchEvent(new CustomEvent(`xm:open-shortcuts`))
   },
   title: `Keyboard shortcuts`,
   "aria-label": `Keyboard shortcuts`,
   children: (0, b.jsx)(qm, {
    size: 17,
    "aria-hidden": `true`
   })
  }), t && e ? (0, b.jsx)(`div`, {
   className: `xm-flyout xm-scroll`,
   role: `region`,
   "aria-label": `${Sv[t]??`Panel`} panel`,
   children: e
  }) : null]
 })
}

function wv(e) {
 window.dispatchEvent(new CustomEvent(e))
}

function Tv(e) {
 return Array.isArray(e) ? e : e && typeof e == `object` ? Object.values(e) : []
}

function Ev(e, t, n) {
 (0, _.useEffect)(() => {
  if (!t) return;
  let r = t => {
    e.current?.contains(t.target) || n()
   },
   i = e => {
    e.key === `Escape` && n()
   };
  return document.addEventListener(`pointerdown`, r, !0), document.addEventListener(`keydown`, i), () => {
   document.removeEventListener(`pointerdown`, r, !0), document.removeEventListener(`keydown`, i)
  }
 }, [e, t, n])
}

function Dv({
 label: e,
 icon: t,
 onClick: n,
 active: r,
 expanded: i
}) {
 return (0, b.jsx)(`button`, {
  type: `button`,
  className: `xm-btn xm-btn--icon xm-bottombar__btn${r?` is-active`:``}`,
  onClick: n,
  title: e,
  "aria-label": e,
  "aria-pressed": typeof r == `boolean` ? r : void 0,
  "aria-expanded": i,
  "aria-haspopup": i === void 0 ? void 0 : `menu`,
  children: (0, b.jsx)(t, {
   size: 17,
   "aria-hidden": `true`
  })
 })
}

function Ov() {
 let [e, t] = (0, _.useState)(!1), [n, r] = (0, _.useState)(!1), [i, a] = (0, _.useState)(null), [o, s] = (0, _.useState)(``), c = (0, _.useRef)(null), l = (0, _.useRef)(null), u = (0, _.useRef)(!1), d = $(e => e.selectedId), f = $(e => e.nodes.length), p = $(e => e.sheets), m = $(e => e.activeSheetId), h = $(e => e.leftPanel), g = $(e => e.rightPanel), v = $(e => e.zoom), y = $(e => e.addChild), x = $(e => e.addSibling), S = $(e => e.beginRelationship), C = $(e => e.addSummary), w = $(e => e.editSummary), T = $(e => e.addZone), E = $(e => e.addCallout), D = $(e => e.requestFit), O = $(e => e.notify), k = $(e => e.setLeftPanel), A = $(e => e.setRightPanel), j = $(e => e.setZoom), M = $(e => e.zoomIn), N = $(e => e.zoomOut), P = $(e => e.switchSheet), F = $(e => e.addSheet), ee = $(e => e.renameSheet), te = $(e => e.deleteSheet), ne = Tv(p), re = (ne.find(e => e.id === m) ?? ne[0])?.name ?? `Sheet`, I = Math.round((Number(v) || 1) * 100), ie = (0, _.useCallback)(() => {
  t(!1), a(null)
 }, []), L = (0, _.useCallback)(() => r(!1), []);
 Ev(c, e, ie), Ev(l, n, L);
 let ae = e => {
   k(h === e ? null : e)
  },
  oe = () => {
   r(!1), t(e => !e), a(null)
  },
  se = () => {
   t(!1), r(e => !e)
  },
  ce = e => {
   P(e), t(!1), a(null)
  },
  le = () => {
   F(), t(!1), a(null)
  },
  ue = e => {
   u.current = !1, a(e.id), s(e.name)
  },
  de = () => {
   if (!i) return;
   let e = o.trim();
   e && ee(i, e), a(null)
  },
  fe = () => {
   u.current = !0, a(null)
  },
  R = () => {
   u.current ? u.current = !1 : de()
  },
  z = e => {
   te(e), i === e && a(null)
  },
  pe = () => {
   let e = d ?? window.__mindx.getState().rootId;
   e && E({
    nodeId: e
   }), L()
  },
  me = () => {
   S(), L()
  },
  he = () => {
   _e(), L()
  },
  ge = () => {
   T({}), L()
  },
  _e = () => {
   let e = C({});
   e ? (w(e), D(), O(`Summary added. Give it a label.`, `success`)) : O(`Select at least one topic to summarise.`, `info`)
  };
 return (0, b.jsxs)(`div`, {
  className: `xm-bottombar`,
  children: [(0, b.jsxs)(`div`, {
   className: `xm-bottombar__pill`,
   role: `group`,
   "aria-label": `Sheets and zoom`,
   children: [(0, b.jsxs)(`div`, {
    className: `xm-sheetctl`,
    ref: c,
    children: [(0, b.jsxs)(`button`, {
     type: `button`,
     className: `xm-btn xm-bottombar__sheet`,
     onClick: oe,
     title: `Switch sheet`,
     "aria-label": `Sheets: ${re}`,
     "aria-haspopup": `menu`,
     "aria-expanded": e,
     children: [(0, b.jsx)(`span`, {
      className: `xm-bottombar__sheet-name`,
      children: re
     }), (0, b.jsx)(Up, {
      size: 13,
      "aria-hidden": `true`
     })]
    }), e ? (0, b.jsxs)(`div`, {
     className: `xm-popover xm-sheetmenu`,
     role: `menu`,
     "aria-label": `Sheets`,
     children: [(0, b.jsx)(`div`, {
      className: `xm-sheetmenu__list`,
      children: ne.map(e => {
       let t = e.id === m,
        n = i === e.id;
       return (0, b.jsxs)(`div`, {
        className: `xm-sheet-row${t?` is-active`:``}`,
        children: [n ? (0, b.jsx)(`input`, {
         className: `xm-sheet-row__input`,
         value: o,
         onChange: e => s(e.target.value),
         onBlur: R,
         onKeyDown: e => {
          e.key === `Enter` ? (e.preventDefault(), de()) : e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), fe())
         },
         "aria-label": `Rename sheet ${e.name}`,
         autoFocus: !0
        }) : (0, b.jsxs)(`button`, {
         type: `button`,
         role: `menuitemradio`,
         "aria-checked": t,
         className: `xm-sheet-row__main`,
         onClick: () => ce(e.id),
         title: `Switch to ${e.name}`,
         "aria-label": `Switch to ${e.name}`,
         children: [(0, b.jsx)(`span`, {
          className: `xm-sheet-row__name`,
          children: e.name
         }), t ? (0, b.jsx)(Vp, {
          size: 13,
          "aria-hidden": `true`
         }) : null]
        }), (0, b.jsx)(`button`, {
         type: `button`,
         role: `menuitem`,
         className: `xm-sheet-row__action`,
         onClick: () => ue(e),
         title: `Rename sheet`,
         "aria-label": `Rename ${e.name}`,
         children: (0, b.jsx)(Th, {
          size: 13,
          "aria-hidden": `true`
         })
        }), (0, b.jsx)(`button`, {
         type: `button`,
         role: `menuitem`,
         className: `xm-sheet-row__action xm-sheet-row__action--danger`,
         onClick: () => z(e.id),
         disabled: ne.length <= 1,
         title: ne.length <= 1 ? `A map needs at least one sheet` : `Delete sheet`,
         "aria-label": `Delete ${e.name}`,
         children: (0, b.jsx)(xg, {
          size: 13,
          "aria-hidden": `true`
         })
        })]
       }, e.id)
      })
     }), (0, b.jsx)(`div`, {
      className: `xm-sheetmenu__divider`,
      "aria-hidden": `true`
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-sheetmenu__add`,
      onClick: le,
      title: `Add sheet`,
      "aria-label": `Add sheet`,
      children: [(0, b.jsx)(kh, {
       size: 14,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       children: `Add sheet`
      })]
     })]
    }) : null]
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-bottombar__btn`,
    onClick: () => N(),
    title: `Zoom out (Ctrl+-)`,
    "aria-label": `Zoom out`,
    children: (0, b.jsx)(hh, {
     size: 17,
     "aria-hidden": `true`
    })
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-bottombar__zoom`,
    onClick: () => j(1),
    title: `Reset zoom to 100%`,
    "aria-label": `Zoom ${I} percent, reset to 100 percent`,
    children: [I, `%`]
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-bottombar__btn`,
    onClick: () => M(),
    title: `Zoom in (Ctrl++)`,
    "aria-label": `Zoom in`,
    children: (0, b.jsx)(kh, {
     size: 17,
     "aria-hidden": `true`
    })
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-bottombar__btn`,
    onClick: () => D(),
    title: `Fit map to view`,
    "aria-label": `Fit map to view`,
    children: (0, b.jsx)(lh, {
     size: 17,
     "aria-hidden": `true`
    })
   })]
  }), (0, b.jsxs)(`div`, {
   className: `xm-bottombar__quick`,
   role: `toolbar`,
   "aria-label": `Insert`,
   children: [(0, b.jsx)(Dv, {
    icon: Zh,
    label: `Topic`,
    onClick: () => y()
   }), (0, b.jsx)(Dv, {
    icon: Fm,
    label: `Subtopic`,
    onClick: () => y(d ?? void 0)
   }), (0, b.jsx)(Dv, {
    icon: lm,
    label: `Sibling`,
    onClick: () => x()
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(Dv, {
    icon: rg,
    label: `Marker`,
    onClick: () => ae(`markers`),
    active: h === `markers`
   }), (0, b.jsx)(Dv, {
    icon: lg,
    label: `Label`,
    onClick: () => wv(`xm:add-label`)
   }), (0, b.jsx)(Dv, {
    icon: ag,
    label: `Note`,
    onClick: () => wv(`xm:add-note`)
   }), (0, b.jsx)(Dv, {
    icon: Yp,
    label: `Task`,
    onClick: () => wv(`xm:add-task`)
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(Dv, {
    icon: Yh,
    label: `Relationship`,
    onClick: () => S()
   }), (0, b.jsx)(Dv, {
    icon: Np,
    label: `Summary`,
    onClick: _e
   }), (0, b.jsx)(Dv, {
    icon: zh,
    label: `Boundary`,
    onClick: () => T({})
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsxs)(`span`, {
    className: `xm-insert`,
    ref: l,
    children: [(0, b.jsx)(Dv, {
     icon: kh,
     label: `Insert`,
     onClick: se,
     active: n,
     expanded: n
    }), n ? (0, b.jsxs)(`div`, {
     className: `xm-popover xm-insertmenu`,
     role: `menu`,
     "aria-label": `Insert`,
     children: [(0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      disabled: !0,
      title: `Not available`,
      "aria-label": `Insert image (not available)`,
      children: [(0, b.jsx)(Vm, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Image`
      })]
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      onClick: pe,
      title: `Add a callout to the selected topic`,
      "aria-label": `Insert callout`,
      children: [(0, b.jsx)(ph, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Callout`
      })]
     }), (0, b.jsx)(`div`, {
      className: `xm-menu-divider`,
      "aria-hidden": `true`
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      onClick: me,
      title: `Connect two topics with a relationship`,
      "aria-label": `Insert relationship`,
      children: [(0, b.jsx)(Yh, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Relationship`
      })]
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      onClick: he,
      title: `Summarise the selected topics`,
      "aria-label": `Insert summary`,
      children: [(0, b.jsx)(Np, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Summary`
      })]
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      onClick: ge,
      title: `Draw a boundary around the selected topics`,
      "aria-label": `Insert boundary`,
      children: [(0, b.jsx)(zh, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Boundary`
      })]
     }), (0, b.jsx)(`div`, {
      className: `xm-menu-divider`,
      "aria-hidden": `true`
     }), (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-menu-row`,
      role: `menuitem`,
      disabled: !0,
      title: `Not available`,
      "aria-label": `Insert floating topic (not available)`,
      children: [(0, b.jsx)($p, {
       size: 15,
       "aria-hidden": `true`
      }), (0, b.jsx)(`span`, {
       className: `xm-menu-row__label`,
       children: `Floating topic`
      })]
     })]
    }) : null]
   })]
  }), (0, b.jsxs)(`div`, {
   className: `xm-bottombar__pill xm-bottombar__pill--right`,
   role: `group`,
   "aria-label": `View options`,
   children: [(0, b.jsxs)(`span`, {
    className: `xm-bottombar__count`,
    title: `${f} topics in this map`,
    children: [`Topic: `, f]
   }), (0, b.jsx)(`span`, {
    className: `xm-bottombar__divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-bottombar__btn${h===`outliner`?` is-active`:``}`,
    onClick: () => ae(`outliner`),
    title: `Toggle outline panel`,
    "aria-label": `Toggle outline panel`,
    "aria-pressed": h === `outliner`,
    children: (0, b.jsx)(yh, {
     size: 17,
     "aria-hidden": `true`
    })
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--icon xm-bottombar__btn${g?` is-active`:``}`,
    onClick: () => A(g ? null : `style`),
    title: `Toggle format panel`,
    "aria-label": `Toggle format panel`,
    "aria-pressed": !!g,
    children: (0, b.jsx)(Ch, {
     size: 17,
     "aria-hidden": `true`
    })
   })]
  })]
 })
}
var kv = [{
 key: `auto`,
 label: `Theme default`
}, {
 key: `underline`,
 label: `Text only`
}, {
 key: `rounded`,
 label: `Rounded rectangle`
}, {
 key: `rect`,
 label: `Rectangle`
}, {
 key: `pill`,
 label: `Capsule`
}, {
 key: `ellipse`,
 label: `Ellipse`
}, {
 key: `circle`,
 label: `Circle`
}, {
 key: `diamond`,
 label: `Diamond`
}, {
 key: `parallelogram`,
 label: `Parallelogram`
}, {
 key: `hexagon`,
 label: `Hexagon`
}, {
 key: `octagon`,
 label: `Octagon`
}, {
 key: `shield`,
 label: `Shield`
}, {
 key: `bracket`,
 label: `Bracket`
}];
new Set(kv.map(e => e.key));

function Av(e, t = 0) {
 return Number.isFinite(Number(e)) ? Number(e) : t
}

function jv(e, t, n, r = 8) {
 let i = Math.max(1, Av(t, 1)),
  a = Math.max(1, Av(n, 1)),
  o = Math.max(0, Math.min(Av(r, 8), Math.min(i, a) / 2));
 switch (e) {
  case `rect`:
   return `M0 0H${i}V${a}H0Z`;
  case `rounded`:
   return Mv(i, a, o);
  case `pill`:
   return Mv(i, a, Math.min(i, a) / 2);
  case `ellipse`:
   return `M0 ${a/2}A${i/2} ${a/2} 0 1 1 ${i} ${a/2}A${i/2} ${a/2} 0 1 1 0 ${a/2}Z`;
  case `circle`: {
   let e = Math.min(i, a),
    t = i / 2,
    n = a / 2;
   return `M${t-e/2} ${n}a${e/2} ${e/2} 0 1 0 ${e} 0a${e/2} ${e/2} 0 1 0 ${-e} 0Z`
  }
  case `diamond`:
   return `M${i/2} 0L${i} ${a/2}L${i/2} ${a}L0 ${a/2}Z`;
  case `parallelogram`: {
   let e = Math.min(i * .18, a * .6);
   return `M${e} 0H${i}L${i-e} ${a}H0Z`
  }
  case `hexagon`: {
   let e = Math.min(i * .14, a / 2);
   return `M${e} 0H${i-e}L${i} ${a/2}L${i-e} ${a}H${e}L0 ${a/2}Z`
  }
  case `octagon`: {
   let e = Math.min(i * .12, a * .22);
   return `M${e} 0H${i-e}L${i} ${e}V${a-e}L${i-e} ${a}H${e}L0 ${a-e}V${e}Z`
  }
  case `shield`: {
   let e = Math.min(i * .18, a * .22);
   return `M${e} 0H${i-e}Q${i} 0 ${i} ${e}V${a*.6}Q${i} ${a} ${i/2} ${a}Q0 ${a} 0 ${a*.6}V${e}Q0 0 ${e} 0Z`
  }
  case `bracket`: {
   let e = Math.max(3, Math.min(i * .06, 6));
   return `M0 0H${i}V${e}H${e}V${a-e}H${i}V${a}H0Z`
  }
  default:
   return null
 }
}

function Mv(e, t, n) {
 return n <= .01 ? `M0 0H${e}V${t}H0Z` : [`M${n} 0`, `H${e-n}`, `A${n} ${n} 0 0 1 ${e} ${n}`, `V${t-n}`, `A${n} ${n} 0 0 1 ${e-n} ${t}`, `H${n}`, `A${n} ${n} 0 0 1 0 ${t-n}`, `V${n}`, `A${n} ${n} 0 0 1 ${n} 0`, `Z`].join(``)
}

function Nv({
 style: e = `curved`,
 taper: t = !1,
 x1: n = 0,
 y1: r = 0,
 x2: i = 0,
 y2: a = 0,
 width: o = 3,
 startWidth: s = null
}) {
 let c = Av(i) - Av(n),
  l = Av(a) - Av(r),
  u = Math.abs(c) >= Math.abs(l),
  d = Math.max(.6, Av(s, o)),
  f = Math.max(.6, Av(o, 2));
 if (e === `straight`) return {
  kind: t ? `fill` : `stroke`,
  d: t ? Pv(n, r, i, a, d, f, u) : `M${n} ${r}L${i} ${a}`,
  strokeWidth: f
 };
 if (e === `angled`) return {
  kind: `stroke`,
  d: `M${n} ${r}H${n+c*.5}V${a}H${i}`,
  strokeWidth: f
 };
 if (t && u) return {
  kind: `fill`,
  d: Pv(n, r, i, a, d, f, !0),
  strokeWidth: 0
 };
 if (u) {
  let e = c >= 0 ? 1 : -1;
  return {
   kind: `stroke`,
   d: `M${n} ${r}C${n+e*Math.abs(c)*.42} ${r} ${i-e*Math.abs(c)*.42} ${a} ${i} ${a}`,
   strokeWidth: f
  }
 }
 let p = l >= 0 ? 1 : -1;
 return {
  kind: `stroke`,
  d: `M${n} ${r}C${n} ${r+p*Math.abs(l)*.42} ${i} ${a-p*Math.abs(l)*.42} ${i} ${a}`,
  strokeWidth: f
 }
}

function Pv(e, t, n, r, i, a, o = !0) {
 if (o) {
  let o = e + (n >= e ? 1 : -1) * Math.abs(n - e) * .5;
  return [`M${e} ${t-i/2}`, `C${o} ${t-i/2} ${o} ${r-a/2} ${n} ${r-a/2}`, `L${n} ${r+a/2}`, `C${o} ${r+a/2} ${o} ${t+i/2} ${e} ${t+i/2}`, `Z`].join(``)
 }
 let s = t + (r >= t ? 1 : -1) * Math.abs(r - t) * .5;
 return [`M${e-i/2} ${t}`, `C${e-i/2} ${s} ${n-a/2} ${s} ${n-a/2} ${r}`, `L${n+a/2} ${r}`, `C${n+a/2} ${s} ${e+i/2} ${s} ${e+i/2} ${t}`, `Z`].join(``)
}
var Fv = [{
  id: `priority`,
  name: `Priority`,
  markers: [`#E5484D`, `#EE8B3D`, `#E5B93D`, `#12A150`, `#2F6BFF`, `#8C4DFF`, `#8A919D`].map((e, t) => {
   let n = t + 1;
   return {
    key: `priority-${n}`,
    label: `Priority ${n}`,
    kind: `number`,
    text: String(n),
    color: e
   }
  })
 }, {
  id: `progress`,
  name: `Progress`,
  markers: [{
   key: `progress-0`,
   label: `0%`,
   ratio: 0,
   color: `#8A919D`
  }, {
   key: `progress-25`,
   label: `25%`,
   ratio: .25,
   color: `#F2A33D`
  }, {
   key: `progress-50`,
   label: `50%`,
   ratio: .5,
   color: `#2F6BFF`
  }, {
   key: `progress-75`,
   label: `75%`,
   ratio: .75,
   color: `#12A150`
  }, {
   key: `progress-100`,
   label: `100%`,
   ratio: 1,
   color: `#12A150`
  }].map(({
   key: e,
   label: t,
   ratio: n,
   color: r
  }) => ({
   key: e,
   label: t,
   kind: `progress`,
   ratio: n,
   color: r
  }))
 }, {
  id: `flags`,
  name: `Flags`,
  markers: [{
   key: `flag-red`,
   label: `Red flag`,
   kind: `icon`,
   icon: `Flag`,
   color: `#E5484D`
  }, {
   key: `flag-yellow`,
   label: `Yellow flag`,
   kind: `icon`,
   icon: `Flag`,
   color: `#F2A33D`
  }, {
   key: `flag-blue`,
   label: `Blue flag`,
   kind: `icon`,
   icon: `Flag`,
   color: `#2F6BFF`
  }, {
   key: `flag-green`,
   label: `Green flag`,
   kind: `icon`,
   icon: `Flag`,
   color: `#12A150`
  }, {
   key: `flag-purple`,
   label: `Purple flag`,
   kind: `icon`,
   icon: `Flag`,
   color: `#8C4DFF`
  }]
 }, {
  id: `symbols`,
  name: `Symbols`,
  markers: [{
   key: `symbol-star`,
   label: `Star`,
   kind: `icon`,
   icon: `Star`,
   color: `#F2A33D`
  }, {
   key: `symbol-heart`,
   label: `Heart`,
   kind: `icon`,
   icon: `Heart`,
   color: `#E5484D`
  }, {
   key: `symbol-check`,
   label: `Check`,
   kind: `icon`,
   icon: `Check`,
   color: `#12A150`
  }, {
   key: `symbol-cross`,
   label: `Cross`,
   kind: `icon`,
   icon: `X`,
   color: `#8A919D`
  }, {
   key: `symbol-question`,
   label: `Question`,
   kind: `icon`,
   icon: `CircleQuestionMark`,
   color: `#2F6BFF`
  }, {
   key: `symbol-exclamation`,
   label: `Exclamation`,
   kind: `icon`,
   icon: `TriangleAlert`,
   color: `#F2A33D`
  }, {
   key: `symbol-lightbulb`,
   label: `Idea`,
   kind: `icon`,
   icon: `Lightbulb`,
   color: `#E5B93D`
  }, {
   key: `symbol-sparkles`,
   label: `Sparkles`,
   kind: `icon`,
   icon: `Sparkles`,
   color: `#8C4DFF`
  }]
 }, {
  id: `people`,
  name: `People`,
  markers: [{
   key: `people-user`,
   label: `Person`,
   kind: `icon`,
   icon: `User`,
   color: `#2F6BFF`
  }, {
   key: `people-users`,
   label: `Team`,
   kind: `icon`,
   icon: `Users`,
   color: `#12A150`
  }, {
   key: `people-crown`,
   label: `Leader`,
   kind: `icon`,
   icon: `Crown`,
   color: `#E5B93D`
  }, {
   key: `people-thumbs-up`,
   label: `Approve`,
   kind: `icon`,
   icon: `ThumbsUp`,
   color: `#2F6BFF`
  }]
 }, {
  id: `arrows`,
  name: `Arrows`,
  markers: [{
   key: `arrow-up`,
   label: `Up`,
   kind: `icon`,
   icon: `ArrowUp`,
   color: `#2F6BFF`
  }, {
   key: `arrow-right`,
   label: `Right`,
   kind: `icon`,
   icon: `ArrowRight`,
   color: `#2F6BFF`
  }, {
   key: `arrow-down`,
   label: `Down`,
   kind: `icon`,
   icon: `ArrowDown`,
   color: `#2F6BFF`
  }, {
   key: `arrow-left`,
   label: `Left`,
   kind: `icon`,
   icon: `ArrowLeft`,
   color: `#2F6BFF`
  }, {
   key: `arrow-trending-up`,
   label: `Trending up`,
   kind: `icon`,
   icon: `TrendingUp`,
   color: `#12A150`
  }, {
   key: `arrow-trending-down`,
   label: `Trending down`,
   kind: `icon`,
   icon: `TrendingDown`,
   color: `#E5484D`
  }]
 }, {
  id: `mood`,
  name: `Mood`,
  markers: [{
   key: `mood-smile`,
   label: `Smile`,
   kind: `icon`,
   icon: `FaceSlightlySmiling`,
   color: `#12A150`
  }, {
   key: `mood-meh`,
   label: `Meh`,
   kind: `icon`,
   icon: `FaceNeutral`,
   color: `#8A919D`
  }, {
   key: `mood-frown`,
   label: `Frown`,
   kind: `icon`,
   icon: `FaceSlightlyFrowning`,
   color: `#E5484D`
  }, {
   key: `mood-laugh`,
   label: `Laugh`,
   kind: `icon`,
   icon: `FaceGrinning`,
   color: `#F2A33D`
  }]
 }, {
  id: `business`,
  name: `Business`,
  markers: [{
   key: `business-target`,
   label: `Target`,
   kind: `icon`,
   icon: `Target`,
   color: `#E5484D`
  }, {
   key: `business-rocket`,
   label: `Rocket`,
   kind: `icon`,
   icon: `Rocket`,
   color: `#2F6BFF`
  }, {
   key: `business-briefcase`,
   label: `Briefcase`,
   kind: `icon`,
   icon: `Briefcase`,
   color: `#8A919D`
  }, {
   key: `business-calendar`,
   label: `Calendar`,
   kind: `icon`,
   icon: `Calendar`,
   color: `#12A150`
  }, {
   key: `business-clock`,
   label: `Clock`,
   kind: `icon`,
   icon: `Clock`,
   color: `#F2A33D`
  }, {
   key: `business-banknote`,
   label: `Banknote`,
   kind: `icon`,
   icon: `Banknote`,
   color: `#12A150`
  }, {
   key: `business-chart`,
   label: `Chart`,
   kind: `icon`,
   icon: `ChartColumn`,
   color: `#2F6BFF`
  }]
 }],
 Iv = Fv.flatMap(e => e.markers),
 Lv = Object.fromEntries(Iv.map(e => [e.key, e]));
Object.fromEntries(Fv.map(e => [e.id, e]));

function Rv(e) {
 return typeof e != `string` || !e ? null : Lv[e] ?? null
}
var zv = {
 ArrowDown: Cp,
 ArrowLeft: Tp,
 ArrowRight: Dp,
 ArrowUp: kp,
 Banknote: jp,
 Briefcase: Fp,
 Calendar: Lp,
 ChartColumn: zp,
 Check: Vp,
 CircleQuestionMark: rm,
 Clock: am,
 Crown: dm,
 FaceGrinning: hm,
 FaceNeutral: _m,
 FaceSlightlyFrowning: ym,
 FaceSlightlySmiling: xm,
 Flag: Nm,
 Heart: zm,
 Lightbulb: Zm,
 Rocket: Lh,
 Sparkles: qh,
 Star: tg,
 Target: dg,
 ThumbsUp: yg,
 TrendingDown: Cg,
 TrendingUp: Tg,
 TriangleAlert: Dg,
 User: Fg,
 Users: Lg,
 X: Vg
};

function Bv({
 name: e,
 size: t = 14,
 color: n,
 strokeWidth: r = 2.4
}) {
 let i = zv[e];
 return i ? (0, b.jsx)(i, {
  size: t,
  color: n,
  strokeWidth: r
 }) : null
}

function Vv({
 markerKey: e,
 size: t = 13,
 className: n = ``
}) {
 let r = Rv(e);
 if (!r) return null;
 if (r.kind === `number`) return (0, b.jsx)(`span`, {
  className: `xm-glyph xm-glyph--number ${n}`,
  style: {
   width: t,
   height: t,
   borderRadius: Math.max(2, t * .28),
   background: r.color,
   fontSize: Math.max(7, t * .64)
  },
  title: r.label,
  "aria-label": r.label,
  children: r.text
 });
 if (r.kind === `progress`) {
  let e = Math.max(0, Math.min(1, Number(r.ratio) || 0));
  return (0, b.jsx)(`span`, {
   className: `xm-glyph xm-glyph--progress ${n}`,
   style: {
    width: t,
    height: t,
    background: `conic-gradient(${r.color} ${e*360}deg, color-mix(in srgb, ${r.color} 18%, transparent) 0deg)`
   },
   title: r.label,
   "aria-label": r.label,
   children: (0, b.jsx)(`span`, {})
  })
 }
 return (0, b.jsx)(`span`, {
  className: `xm-glyph xm-glyph--icon ${n}`,
  style: {
   width: t,
   height: t,
   color: r.color
  },
  title: r.label,
  "aria-label": r.label,
  role: `img`,
  children: (0, b.jsx)(Bv, {
   name: r.icon,
   size: t,
   color: r.color
  })
 })
}

function Hv(e) {
 e.stopPropagation()
}
var Uv = [{
 type: `target`,
 position: H.Left,
 id: `target-left`
}, {
 type: `target`,
 position: H.Right,
 id: `target-right`
}, {
 type: `target`,
 position: H.Top,
 id: `target-top`
}, {
 type: `target`,
 position: H.Bottom,
 id: `target-bottom`
}, {
 type: `source`,
 position: H.Right,
 id: `source-right`
}, {
 type: `source`,
 position: H.Left,
 id: `source-left`
}, {
 type: `source`,
 position: H.Top,
 id: `source-top`
}, {
 type: `source`,
 position: H.Bottom,
 id: `source-bottom`
}];

function Wv({
 id: e,
 data: t
}) {
 let {
  label: n,
  level: r,
  side: i,
  isRoot: a,
  isFocusRoot: o,
  visual: s,
  width: c,
  height: l,
  childCount: u,
  collapsed: d,
  selected: f,
  multiSelected: p,
  isEditing: m,
  markers: h,
  labels: g,
  note: v,
  task: y,
  link: x,
  dimmed: S,
  presenting: C,
  linking: w,
  relationshipSource: T
 } = t, [E, D] = (0, _.useState)(n), O = (0, _.useRef)(null), k = (0, _.useRef)(!1), A = $(e => e.startEditing), j = $(e => e.selectNode), M = $(e => e.setNodeText), N = $(e => e.stopEditing), P = $(e => e.toggleCollapse), F = $(e => e.addChild), ee = $(e => e.addSibling), te = $(e => e.deleteNode), ne = $(e => e.beginRelationship);
 (0, _.useEffect)(() => {
  m && (k.current = !1, D(n))
 }, [m, n]), (0, _.useEffect)(() => {
  if (!m) return;
  let e = 0,
   t = 0,
   n = () => {
    let r = O.current;
    r && (t += 1, r.closest(`.react-flow__node`)?.style.visibility === `hidden` && t < 30 ? e = requestAnimationFrame(n) : (r.focus(), r.setSelectionRange(0, r.value.length)))
   };
  return e = requestAnimationFrame(n), () => cancelAnimationFrame(e)
 }, [m]), (0, _.useLayoutEffect)(() => {
  let e = O.current;
  m && e && (e.style.height = `0px`, e.style.height = `${e.scrollHeight}px`)
 }, [E, m]);
 let re = ({
   addChildAfter: t = !1
  } = {}) => {
   k.current ? k.current = !1 : (M(e, E), t && $.getState().addChild(e))
  },
  I = () => {
   k.current = !0, D(n), N()
  },
  ie = e => {
   e.repeat || (e.key === `Escape` ? (e.preventDefault(), I()) : e.key === `Enter` && !e.shiftKey ? (e.preventDefault(), re()) : e.key === `Tab` && (e.preventDefault(), re({
    addChildAfter: !0
   })))
  },
  L = t.shape || s.shape || `rounded`,
  ae = L === `underline` || L === `none`,
  oe = jv(L, c, l, s.radius ?? 8),
  se = y || v || x,
  ce = {
   fontSize: `${s.fontSize}px`,
   fontWeight: s.bold || a ? Math.max(700, s.weight) : s.weight,
   fontStyle: s.italic ? `italic` : `normal`,
   textDecorationLine: [s.underline ? `underline` : ``, s.strike ? `line-through` : ``].filter(Boolean).join(` `) || `none`,
   textAlign: s.align ?? (a ? `center` : `left`),
   color: s.text
  };
 return (0, b.jsxs)(`div`, {
  className: [`xm-topic`, `xm-topic--level-${Math.min(r,3)}`, `xm-topic--${i}`, ae ? `xm-topic--text` : `xm-topic--boxed`, a ? `xm-topic--root` : ``, o ? `xm-topic--focus-root` : ``, f ? `is-selected` : ``, m ? `is-editing` : ``, S ? `is-dimmed` : ``, C ? `is-presenting` : ``, w && !T ? `is-link-target` : ``, T ? `is-link-source` : ``, s.dark ? `is-dark` : ``].filter(Boolean).join(` `),
  style: {
   width: c,
   minHeight: l,
   "--xm-topic-line": s.line,
   "--xm-topic-text": s.text,
   "--xm-topic-ring": s.ring,
   "--xm-topic-soft": s.soft,
   "--xm-topic-bg": s.fill,
   "--xm-topic-border": s.border,
   "--xm-topic-font": s.fontFamily ?? void 0
  },
  "data-shape": L,
  onDoubleClick: t => {
   C || (t.stopPropagation(), A(e))
  },
  "aria-label": `${n}. ${a?`Central topic`:o?`Focused branch`:`Level ${r} topic`}.`,
  children: [Uv.map(e => (0, b.jsx)(Wu, {
   type: e.type,
   position: e.position,
   id: e.id,
   className: `xm-topic-handle`,
   isConnectable: !1
  }, e.id)), !ae && oe ? (0, b.jsx)(`svg`, {
   className: `xm-topic-shape`,
   width: c,
   height: l,
   viewBox: `0 0 ${c} ${l}`,
   "aria-hidden": `true`,
   preserveAspectRatio: `none`,
   children: (0, b.jsx)(`path`, {
    d: oe,
    fill: s.fill,
    stroke: s.border,
    strokeWidth: s.borderWidth ?? 1
   })
  }) : null, (0, b.jsxs)(`div`, {
   className: `xm-topic-body`,
   style: {
    paddingLeft: Math.max(2, s.paddingX),
    paddingRight: Math.max(2, s.paddingX),
    paddingTop: Math.max(1, s.paddingY),
    paddingBottom: Math.max(1, s.paddingY)
   },
   children: [h?.length ? (0, b.jsx)(`span`, {
    className: `xm-topic-markers`,
    children: h.map(e => (0, b.jsx)(Vv, {
     markerKey: e,
     size: 13
    }, e))
   }) : null, m ? (0, b.jsx)(`textarea`, {
    ref: O,
    className: `xm-topic-editor nodrag nopan`,
    value: E,
    rows: 1,
    draggable: !1,
    spellCheck: `true`,
    "aria-label": `Edit ${n}`,
    style: ce,
    onChange: e => D(e.target.value),
    onKeyDown: ie,
    onBlur: () => {
     $.getState().editingId === e && re()
    },
    onClick: Hv,
    onDoubleClick: Hv
   }) : (0, b.jsx)(`span`, {
    className: `xm-topic-label`,
    style: ae && !a ? {
     ...ce,
     width: `fit-content`,
     maxWidth: `100%`,
     alignSelf: s.align === `center` ? `center` : `flex-start`,
     borderBottom: `2.6px solid ${s.line}`,
     paddingBottom: 2
    } : ce,
    children: n
   }), g?.length ? (0, b.jsx)(`span`, {
    className: `xm-topic-labels`,
    children: g.map(e => (0, b.jsx)(`span`, {
     className: `xm-topic-label-chip`,
     style: {
      color: e.color,
      background: `color-mix(in srgb, ${e.color} 13%, transparent)`,
      borderColor: `color-mix(in srgb, ${e.color} 28%, transparent)`
     },
     children: e.text
    }, e.id))
   }) : null]
  }), se ? (0, b.jsxs)(`span`, {
   className: `xm-topic-badges`,
   children: [y ? (0, b.jsxs)(`span`, {
    className: `xm-topic-badge xm-topic-badge--task`,
    title: `${y.progress}% complete · ${y.priority}`,
    children: [(0, b.jsx)(Yp, {
     size: 11
    }), y.progress, `%`]
   }) : null, v ? (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-topic-badge xm-topic-badge--note nodrag nopan`,
    title: v,
    "aria-label": `Open note: ${v}`,
    onClick: t => {
     t.stopPropagation(), j(e), window.dispatchEvent(new CustomEvent(`xm:add-note`))
    },
    onDoubleClick: Hv,
    children: [(0, b.jsx)(km, {
     size: 11
    }), (0, b.jsx)(`span`, {
     className: `xm-topic-note-preview`,
     role: `tooltip`,
     children: v
    })]
   }) : null, x ? (0, b.jsx)(`a`, {
    className: `xm-topic-badge xm-topic-badge--link nodrag nopan`,
    href: /^https?:\/\//i.test(x) ? x : void 0,
    target: `_blank`,
    rel: `noreferrer`,
    title: x,
    "aria-label": `Open link: ${x}`,
    onClick: Hv,
    onDoubleClick: Hv,
    children: (0, b.jsx)(th, {
     size: 11
    })
   }) : null]
  }) : null, u > 0 ? (0, b.jsx)(`button`, {
   type: `button`,
   className: [`xm-topic-fold`, i === `left` ? `is-left` : `is-right`, d ? `is-collapsed` : ``].join(` `),
   onClick: t => {
    t.stopPropagation(), P(e)
   },
   onDoubleClick: Hv,
   title: d ? `Expand ${u} topics` : `Collapse branch`,
   "aria-label": d ? `Expand ${u} hidden topics` : `Collapse branch`,
   children: d ? (0, b.jsx)(`span`, {
    className: `xm-topic-fold-count`,
    children: u
   }) : (0, b.jsx)(hh, {
    size: 9,
    strokeWidth: 3
   })
  }) : null, (0, b.jsxs)(cp, {
   nodeId: e,
   isVisible: f && !m && !C && !p,
   position: H.Top,
   offset: 10,
   className: `xm-topic-toolbar`,
   role: `toolbar`,
   "aria-label": `Actions for ${n}`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-toolbar-btn nodrag nopan`,
    onClick: t => {
     t.stopPropagation(), F(e)
    },
    title: `Add subtopic (Tab)`,
    "aria-label": `Add subtopic`,
    children: (0, b.jsx)(kh, {
     size: 14
    })
   }), !a && !o ? (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-toolbar-btn nodrag nopan`,
    onClick: t => {
     t.stopPropagation(), ee(e)
    },
    title: `Add sibling topic (Enter)`,
    "aria-label": `Add sibling topic`,
    children: (0, b.jsx)(lm, {
     size: 14
    })
   }) : null, (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-toolbar-btn nodrag nopan ${T?`is-active`:``}`,
    onClick: t => {
     t.stopPropagation(), ne(e)
    },
    title: `Relationship`,
    "aria-label": `Create relationship`,
    children: (0, b.jsx)(Yh, {
     size: 14
    })
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-toolbar-btn nodrag nopan`,
    onClick: e => {
     e.stopPropagation(), window.dispatchEvent(new CustomEvent(`xm:add-label`))
    },
    title: `Label`,
    "aria-label": `Add label`,
    children: (0, b.jsx)(lg, {
     size: 14
    })
   }), !a && !o ? (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-toolbar-btn nodrag nopan is-danger`,
    onClick: t => {
     t.stopPropagation(), te(e)
    },
    title: `Delete topic (Delete)`,
    "aria-label": `Delete topic`,
    children: (0, b.jsx)(xg, {
     size: 14
    })
   }) : null]
  })]
 })
}

function Gv({
 id: e,
 sourceX: t,
 sourceY: n,
 targetX: r,
 targetY: i,
 sourcePosition: a,
 targetPosition: o,
 data: s
}) {
 let {
  color: c = `#333`,
  style: l = `curved`,
  taper: u = !1,
  strokeWidth: d = 2,
  startWidth: f = null,
  opacity: p = 1,
  dimmed: m = !1
 } = s ?? {}, h = Math.abs(r - t) >= Math.abs(i - n);
 if (l === `straight`) return (0, b.jsx)(xd, {
  id: e,
  path: `M${t} ${n}L${r} ${i}`,
  style: {
   stroke: c,
   strokeWidth: d,
   fill: `none`,
   opacity: m ? .22 : p,
   strokeLinecap: `round`,
   strokeLinejoin: `round`
  }
 });
 if (l === `angled`) {
  let [s] = Vs({
   sourceX: t,
   sourceY: n,
   targetX: r,
   targetY: i,
   sourcePosition: a,
   targetPosition: o,
   borderRadius: 0,
   offset: 14
  });
  return (0, b.jsx)(xd, {
   id: e,
   path: s,
   style: {
    stroke: c,
    strokeWidth: d,
    fill: `none`,
    opacity: m ? .22 : p,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
   }
  })
 }
 if (!h) {
  let [s] = Ds({
   sourceX: t,
   sourceY: n,
   sourcePosition: a,
   targetX: r,
   targetY: i,
   targetPosition: o,
   curvature: .42
  });
  return (0, b.jsx)(xd, {
   id: e,
   path: s,
   style: {
    stroke: c,
    strokeWidth: d,
    fill: `none`,
    opacity: m ? .22 : p,
    strokeLinecap: `round`
   }
  })
 }
 let g = Nv({
   style: l,
   taper: u,
   x1: t,
   y1: n,
   x2: r,
   y2: i,
   width: d,
   startWidth: f ?? d * 2.2
  }),
  _ = m ? .2 : p;
 return g.kind === `fill` ? (0, b.jsx)(`path`, {
  id: e,
  className: `xm-branch xm-branch--filled`,
  d: g.d,
  fill: c,
  opacity: _,
  stroke: `none`
 }) : (0, b.jsx)(xd, {
  id: e,
  path: g.d,
  style: {
   stroke: c,
   strokeWidth: g.strokeWidth || d,
   fill: `none`,
   opacity: _,
   strokeLinecap: `round`,
   strokeLinejoin: `round`
  }
 })
}
var Kv = (0, _.memo)(Gv);

function qv(e) {
 return {
  transform: `translate(-50%, -50%) translate(${e.x}px, ${e.y}px) translateY(-12px)`
 }
}

function Jv({
 id: e,
 sourceX: t,
 sourceY: n,
 targetX: r,
 targetY: i,
 sourcePosition: a,
 targetPosition: o,
 markerEnd: s,
 data: c
}) {
 let l = c?.relationshipId,
  u = c?.label,
  d = c?.color ?? `#94a3b8`,
  f = c?.strokeWidth ?? 2,
  p = !!c?.dimmed,
  m = p ? .12 : c?.opacity ?? .82,
  h = $(e => e.setRelationshipCurve),
  A = $(e => e.setRelationshipAnchor),
  R = $(e => e.editRelationship),
  {
   screenToFlowPosition: g
  } = _u(),
  [v, y] = (0, _.useState)(null),
  [x, S] = (0, _.useState)(null),
  [anchorDrag, setAnchorDrag] = (0, _.useState)(null),
  [anchorPreview, setAnchorPreview] = (0, _.useState)(null);
 let anchorPoint = (angle, cx, cy, w, h, fx, fy) => {
  if (!Number.isFinite(Number(angle)) || !Number.isFinite(Number(cx)) || !Number.isFinite(Number(cy))) return {
   x: fx,
   y: fy
  };
  let rad = Number(angle) * Math.PI / 180,
   cos = Math.cos(rad),
   sin = Math.sin(rad),
   hw = Math.max(1, Number(w) || 0) / 2,
   hh = Math.max(1, Number(h) || 0) / 2,
   sx = Math.abs(cos) < 1e-6 ? Infinity : hw / Math.abs(cos),
   sy = Math.abs(sin) < 1e-6 ? Infinity : hh / Math.abs(sin),
   scale = Math.min(sx, sy);
  return Number.isFinite(scale) ? {
   x: Number(cx) + cos * scale,
   y: Number(cy) + sin * scale
  } : {
   x: fx,
   y: fy
  }
 };
 let Q = (0, _.useMemo)(() => {
  let sp = anchorPoint(c?.sourceAnchor?.angle, c?.sourceCenterX, c?.sourceCenterY, c?.sourceWidth, c?.sourceHeight, t, n),
   tp = anchorPoint(c?.targetAnchor?.angle, c?.targetCenterX, c?.targetCenterY, c?.targetWidth, c?.targetHeight, r, i);
  return {
   sx: sp.x,
   sy: sp.y,
   tx: tp.x,
   ty: tp.y
  }
 }, [c?.sourceAnchor?.angle, c?.targetAnchor?.angle, c?.sourceCenterX, c?.sourceCenterY, c?.sourceWidth, c?.sourceHeight, c?.targetCenterX, c?.targetCenterY, c?.targetWidth, c?.targetHeight, t, n, r, i]);
 let preview = anchorPreview ? anchorPoint(anchorPreview.angle, anchorPreview.which === `source` ? c?.sourceCenterX : c?.targetCenterX, anchorPreview.which === `source` ? c?.sourceCenterY : c?.targetCenterY, anchorPreview.which === `source` ? c?.sourceWidth : c?.targetWidth, anchorPreview.which === `source` ? c?.sourceHeight : c?.targetHeight, anchorPreview.which === `source` ? t : r, anchorPreview.which === `source` ? n : i) : null,
  sx = anchorPreview?.which === `source` && preview ? preview.x : Q.sx,
  sy = anchorPreview?.which === `source` && preview ? preview.y : Q.sy,
  tx = anchorPreview?.which === `target` && preview ? preview.x : Q.tx,
  ty = anchorPreview?.which === `target` && preview ? preview.y : Q.ty,
  C = v ?? c?.curve ?? null,
  w = (0, _.useMemo)(() => {
   if (c?.style === `straight` && !C) {
    let [e, a, o] = Ps({
     sourceX: sx,
     sourceY: sy,
     targetX: tx,
     targetY: ty
    });
    return {
     path: e,
     labelX: a,
     labelY: o
    }
   }
   if (C) {
    let e = (sx + tx) / 2 + (C.x ?? 0),
     a = (sy + ty) / 2 + (C.y ?? 0);
    return {
     path: `M ${sx},${sy} Q ${e},${a} ${tx},${ty}`,
     labelX: (sx + 2 * e + tx) / 4,
     labelY: (sy + 2 * a + ty) / 4
    }
   }
   let [e, s, l] = Ds({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: a,
    targetX: tx,
    targetY: ty,
    targetPosition: o,
    curvature: .3
   });
   return {
    path: e,
    labelX: s,
    labelY: l
   }
  }, [C, c?.style, a, sx, sy, o, tx, ty]),
  T = (0, _.useCallback)(e => {
   if (!l) return;
   e.preventDefault(), e.stopPropagation();
   let t = g({
    x: e.clientX,
    y: e.clientY
   });
   S({
    pointerId: e.pointerId,
    startX: t.x,
    startY: t.y,
    baseX: c?.curve?.x ?? 0,
    baseY: c?.curve?.y ?? 0,
    moved: !1
   }), e.currentTarget.setPointerCapture?.(e.pointerId)
  }, [c?.curve?.x, c?.curve?.y, l, g]),
  E = (0, _.useCallback)(e => {
   if (!x || x.pointerId !== e.pointerId) return;
   e.preventDefault(), e.stopPropagation();
   let t = g({
     x: e.clientX,
     y: e.clientY
    }),
    n = x.baseX + (t.x - x.startX),
    r = x.baseY + (t.y - x.startY);
   !x.moved && Math.abs(n - x.baseX) < 1.5 && Math.abs(r - x.baseY) < 1.5 || (S(e => e && {
    ...e,
    moved: !0
   }), y({
    x: Math.round(n),
    y: Math.round(r)
   }))
  }, [x, g]),
  D = (0, _.useCallback)(e => {
   if (!x || x.pointerId !== e.pointerId) return;
   e.preventDefault(), e.stopPropagation();
   let t = v;
   S(null), y(null), l && x.moved && t && h(l, t)
  }, [v, x, l, h]),
  O = (0, _.useCallback)(e => {
   e.preventDefault(), e.stopPropagation(), y(null), S(null), l && h(l, null)
  }, [l, h]),
  edit = (0, _.useCallback)(e => {
   e && (e.preventDefault(), e.stopPropagation()), l && R && R(l)
  }, [l, R]),
  anchorDown = which => e => {
   if (!l) return;
   e.preventDefault(), e.stopPropagation();
   let cx = which === `source` ? c?.sourceCenterX : c?.targetCenterX,
    cy = which === `source` ? c?.sourceCenterY : c?.targetCenterY;
   if (!Number.isFinite(Number(cx)) || !Number.isFinite(Number(cy))) return;
   setAnchorDrag({
    which,
    pointerId: e.pointerId,
    cx: Number(cx),
    cy: Number(cy)
   }), e.currentTarget.setPointerCapture?.(e.pointerId)
  },
  anchorMove = e => {
   if (!anchorDrag || anchorDrag.pointerId !== e.pointerId) return;
   e.preventDefault(), e.stopPropagation();
   let p = g({
    x: e.clientX,
    y: e.clientY
   });
   setAnchorPreview({
    which: anchorDrag.which,
    angle: Math.round(Math.atan2(p.y - anchorDrag.cy, p.x - anchorDrag.cx) * 1800 / Math.PI) / 10
   })
  },
  anchorUp = e => {
   if (!anchorDrag || anchorDrag.pointerId !== e.pointerId) return;
   e.preventDefault(), e.stopPropagation();
   let a = anchorPreview;
   setAnchorDrag(null), setAnchorPreview(null), l && a && A && A(l, anchorDrag.which, {
    angle: a.angle
   })
  },
  anchorReset = which => e => {
   e.preventDefault(), e.stopPropagation(), l && A && A(l, which, null)
  },
  k = qv({
   x: w.labelX,
   y: w.labelY
  });
 let handle = (which, cx, cy) => (0, b.jsx)(`circle`, {
  cx,
  cy,
  r: 6.5,
  fill: `var(--xm-surface, #fff)`,
  stroke: d,
  strokeWidth: 2.4,
  className: `relationship-anchor nodrag nopan`,
  style: {
   cursor: `grab`,
   pointerEvents: `all`
  },
  onPointerDown: anchorDown(which),
  onPointerMove: anchorMove,
  onPointerUp: anchorUp,
  onPointerCancel: anchorUp,
  onDoubleClick: anchorReset(which),
  "aria-label": `Move ${which} connection point`,
  children: (0, b.jsx)(`title`, {
   children: `Drag to move the ${which} connection point · Double-click to reset`
  })
 }, which);
 return (0, b.jsxs)(b.Fragment, {
  children: [p ? null : (0, b.jsx)(`path`, {
   d: w.path,
   fill: `none`,
   stroke: d,
   strokeWidth: f + 4,
   strokeOpacity: .1,
   strokeLinecap: `round`,
   pointerEvents: `none`
  }), (0, b.jsx)(xd, {
   id: e,
   path: w.path,
   markerEnd: s,
   interactionWidth: 18,
   style: {
    stroke: d,
    strokeWidth: f,
    strokeOpacity: m,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeDasharray: `6 5`
   }
  }), p ? null : (0, b.jsx)(`path`, {
   d: w.path,
   fill: `none`,
   stroke: `transparent`,
   strokeWidth: 18,
   className: `relationship-hit nodrag nopan`,
   onDoubleClick: edit,
   onClick: e => e.stopPropagation(),
   children: (0, b.jsx)(`title`, {
    children: `Double-click to edit this relationship`
   })
  }), p || !l ? null : (0, b.jsxs)(b.Fragment, {
   children: [handle(`source`, sx, sy), handle(`target`, tx, ty)]
  }), u || !p && l ? (0, b.jsx)(Cf, {
   children: (0, b.jsx)(`div`, {
    className: `relationship-label nodrag nopan`,
    style: {
     ...k,
     borderColor: d,
     color: d,
     opacity: p ? .12 : 1,
     pointerEvents: p ? void 0 : `all`,
     cursor: p ? void 0 : `grab`
    },
    role: u ? void 0 : `button`,
    tabIndex: -1,
    "aria-label": u || `Drag relationship line to change its shape`,
    title: u ? `${u} · Drag to reshape · Double-click to reset` : `Drag the relationship line to reshape it · Double-click to reset`,
    onPointerDown: T,
    onPointerMove: E,
    onPointerUp: D,
    onPointerCancel: D,
    onDoubleClick: O,
    onClick: e => e.stopPropagation(),
    children: u || (0, b.jsx)(`span`, {
     className: `relationship-label-dot`,
     "aria-hidden": `true`
    })
   })
  }) : null]
 })
}
var Yv = (0, _.memo)(Jv);

function Xv() {
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(Wu, {
   type: `target`,
   position: H.Left,
   id: `target-left`,
   className: `xm-topic-handle`,
   isConnectable: !1
  }), (0, b.jsx)(Wu, {
   type: `source`,
   position: H.Right,
   id: `source-right`,
   className: `xm-topic-handle`,
   isConnectable: !1
  })]
 })
}

function Zv({
 id: e,
 data: t
}) {
 let n = (0, _.useMemo)(() => String(e).replace(/^zone-/, ``), [e]),
  r = $(e => e.deleteZone);
 return (0, b.jsxs)(`div`, {
  className: `xm-overlay xm-zone xm-zone--${t.shape??`rounded`}`,
  style: {
   width: t.width,
   height: t.height,
   "--xm-zone-color": t.color
  },
  children: [(0, b.jsx)(Xv, {}), (0, b.jsxs)(`span`, {
   className: `xm-zone-label`,
   children: [(0, b.jsx)(zh, {
    size: 11
   }), t.label]
  }), (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-overlay-remove nodrag nopan`,
   title: `Remove boundary`,
   "aria-label": `Remove boundary ${t.label}`,
   onClick: e => {
    e.stopPropagation(), r(n)
   },
   children: (0, b.jsx)($h, {
    size: 12
   })
  })]
 })
}

function Qv({
 id: e,
 data: t
}) {
 let n = (0, _.useMemo)(() => String(e).replace(/^summary-/, ``), [e]),
  r = $(e => e.deleteSummary),
  i = $(e => e.editSummary),
  width = Math.max(120, Math.min(560, Number(t.width) || 168)),
  height = Math.max(60, Math.min(800, Number(t.height) || 64));
 return (0, b.jsxs)(`div`, {
  className: `xm-overlay xm-summary xm-summary--${t.side??`right`}`,
  style: {
   "--xm-summary-color": t.color,
   width: width,
   height: height
  },
  title: `Double-click to edit this summary`,
  onDoubleClick: e => {
   e.stopPropagation(), i(n)
  },
  children: [(0, b.jsx)(Xv, {}), (0, b.jsx)(`span`, {
   className: `xm-summary-bracket`,
   "aria-hidden": `true`
  }), (0, b.jsxs)(`span`, {
   className: `xm-summary-label`,
   style: {
    width: `100%`,
    height: `100%`,
    boxSizing: `border-box`,
    display: `flex`,
    alignItems: `flex-start`,
    justifyContent: `flex-start`,
    whiteSpace: `pre-wrap`,
    wordBreak: `break-word`,
    overflow: `auto`,
    textAlign: `left`,
    lineHeight: 1.45,
    padding: `8px 12px 8px 16px`
   },
   children: [(0, b.jsx)(qh, {
    size: 11,
    style: {
     flexShrink: 0,
     marginTop: 2
    }
   }), (0, b.jsx)(`span`, {
    style: {
     whiteSpace: `pre-wrap`,
     wordBreak: `break-word`,
     minWidth: 0
    },
    children: t.label
   })]
  }), (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-overlay-remove nodrag nopan`,
   title: `Remove summary`,
   "aria-label": `Remove summary ${t.label}`,
   onClick: e => {
    e.stopPropagation(), r(n)
   },
   children: (0, b.jsx)($h, {
    size: 12
   })
  })]
 })
}

function $v({
 id: e,
 data: t
}) {
 let n = (0, _.useMemo)(() => String(e).replace(/^callout-/, ``), [e]),
  r = $(e => e.deleteCallout),
  save = $(e => e.updateCallout),
  [editing, setEditing] = (0, _.useState)(!1),
  [draft, setDraft] = (0, _.useState)(``);
 let startEdit = ev => {
   ev.stopPropagation(), setDraft(t.text ?? ``), setEditing(!0)
  },
  commit = () => {
   let v = draft.trim();
   v && v !== t.text && save(n, {
    text: v
   }), setEditing(!1)
  },
  cancel = () => setEditing(!1);
 return (0, b.jsxs)(`div`, {
  className: `xm-overlay xm-callout xm-callout--${t.side??`right`}`,
  style: {
   width: t.width,
   "--xm-callout-color": t.color
  },
  title: editing ? void 0 : `Double-click to edit this callout`,
  onDoubleClick: editing ? void 0 : startEdit,
  children: [(0, b.jsx)(Xv, {}), editing ? (0, b.jsx)(`textarea`, {
   className: `xm-callout-text xm-callout-textarea nodrag nopan`,
   value: draft,
   autoFocus: !0,
   rows: 3,
   "aria-label": `Edit callout text`,
   style: {
    width: `100%`,
    boxSizing: `border-box`,
    minHeight: 48,
    resize: `vertical`,
    background: `transparent`,
    border: `1px solid color-mix(in srgb, var(--xm-callout-color) 45%, var(--xm-line))`,
    borderRadius: 6,
    color: `inherit`,
    font: `inherit`,
    lineHeight: 1.5,
    padding: 4,
    whiteSpace: `pre-wrap`
   },
   onChange: ev => setDraft(ev.target.value),
   onBlur: commit,
   onKeyDown: ev => {
    ev.stopPropagation(), ev.key === `Escape` ? (ev.preventDefault(), cancel()) : ev.key === `Enter` && (ev.metaKey || ev.ctrlKey) && (ev.preventDefault(), commit())
   },
   onDoubleClick: ev => ev.stopPropagation()
  }) : (0, b.jsx)(`span`, {
   className: `xm-callout-text`,
   style: {
    whiteSpace: `pre-wrap`,
    wordBreak: `break-word`,
    cursor: `text`
   },
   children: t.text
  }), (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-overlay-remove nodrag nopan`,
   title: `Remove callout`,
   "aria-label": `Remove callout`,
   onClick: e => {
    e.stopPropagation(), r(n)
   },
   children: (0, b.jsx)($h, {
    size: 12
   })
  })]
 })
}
var ey = [`#F2545B`, `#F2994A`, `#4C9AFF`, `#2FBF71`, `#9B7BF0`, `#12B5C9`],
 ty = [{
  id: `snowbrush`,
  name: `Snowbrush`,
  description: `XMind signature: airy text topics and tapered colourful branches.`,
  dark: !1,
  canvas: `#FFFFFF`,
  canvasGrid: `none`,
  dot: `#EDEFF2`,
  accent: `#F2545B`,
  swatches: [`#26282C`, `#F2545B`, `#FFFFFF`],
  branch: {
   style: `tapered`,
   width: [7, 3.4, 2.4, 1.9],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 27,
   main: 16,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#FFFFFF`,
   text: `#1E2126`,
   border: `#D9DDE3`,
   line: `#26282C`,
   weight: 700
  },
  main: {
   fill: `#FFFFFF`,
   text: `#1E2126`,
   border: `#DFE3E9`,
   line: `#F2545B`,
   weight: 650
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#3B4048`,
   border: `#E4E7EC`,
   line: `#F2545B`,
   weight: 500
  },
  edgeOpacity: .95,
  edgeGlow: 0,
  preview: {
   rootFill: `#26282C`,
   branchColors: ey.slice(0, 4)
  }
 }, {
  id: `vanilla`,
  name: `Vanilla`,
  description: `Soft rounded cards, charcoal branches, calm and neutral.`,
  dark: !1,
  canvas: `#FBFBF9`,
  canvasGrid: `none`,
  dot: `#E7E7E1`,
  accent: `#3A3F4A`,
  swatches: [`#3A3F4A`, `#B9BDC6`, `#FBFBF9`],
  branch: {
   style: `curved`,
   width: [4.5, 2.6, 2, 1.6],
   taper: !1,
   opacity: .9
  },
  font: {
   root: 21,
   main: 15,
   sub: 13,
   deep: 12
  },
  shape: {
   root: `rounded`,
   main: `rounded`,
   sub: `rounded`,
   deep: `rounded`
  },
  root: {
   fill: `#2F343C`,
   text: `#FFFFFF`,
   border: `#2F343C`,
   line: `#3A3F4A`,
   weight: 650,
   paddingX: 22,
   paddingY: 13,
   radius: 12
  },
  main: {
   fill: `#FFFFFF`,
   text: `#2A2E36`,
   border: `#E2E4E8`,
   line: `#7D8492`,
   weight: 600,
   paddingX: 16,
   paddingY: 9,
   radius: 10
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#454B56`,
   border: `#E9EBEF`,
   line: `#B9BDC6`,
   weight: 500,
   paddingX: 13,
   paddingY: 7,
   radius: 9
  },
  edgeOpacity: .85,
  edgeGlow: 0,
  preview: {
   rootFill: `#2F343C`,
   branchColors: [`#7D8492`, `#A4A9B4`, `#C2C6CE`, `#8E94A0`]
  }
 }, {
  id: `classic`,
  name: `Classic`,
  description: `The XMind 8 look: bordered topic boxes on coloured branches.`,
  dark: !1,
  canvas: `#FFFFFF`,
  canvasGrid: `none`,
  dot: `#E9EBEF`,
  accent: `#2F6BFF`,
  swatches: [`#2F6BFF`, `#F5A623`, `#FFFFFF`],
  branch: {
   style: `curved`,
   width: [3.4, 2.4, 1.8, 1.5],
   taper: !1,
   opacity: .95
  },
  font: {
   root: 22,
   main: 15,
   sub: 13,
   deep: 12
  },
  shape: {
   root: `rounded`,
   main: `rounded`,
   sub: `rounded`,
   deep: `rounded`
  },
  root: {
   fill: `#FFFFFF`,
   text: `#1F2937`,
   border: `#1F2937`,
   line: `#1F2937`,
   weight: 700,
   borderWidth: 2,
   radius: 8,
   paddingX: 20,
   paddingY: 12
  },
  main: {
   fill: `#FFFFFF`,
   text: `#1F2937`,
   border: `#9AA4B2`,
   line: `#2F6BFF`,
   weight: 600,
   radius: 7,
   paddingX: 15,
   paddingY: 8
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#374151`,
   border: `#DDE2E8`,
   line: `#2F6BFF`,
   weight: 500,
   radius: 6,
   paddingX: 12,
   paddingY: 6
  },
  edgeOpacity: 1,
  edgeGlow: 0,
  preview: {
   rootFill: `#1F2937`,
   branchColors: [`#2F6BFF`, `#F5A623`, `#2FBF71`, `#F2545B`]
  }
 }, {
  id: `ink`,
  name: `Ink Wash`,
  description: `Brush-stroke branches, ink-black type, paper white canvas.`,
  dark: !1,
  canvas: `#FDFDFB`,
  canvasGrid: `none`,
  dot: `#EBEBE4`,
  accent: `#1B1B1B`,
  swatches: [`#1B1B1B`, `#8C6A46`, `#FDFDFB`],
  branch: {
   style: `tapered`,
   width: [8, 4, 2.8, 2.2],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 27,
   main: 16.5,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#FFFFFF`,
   text: `#111111`,
   border: `#DCDCD4`,
   line: `#1B1B1B`,
   weight: 800
  },
  main: {
   fill: `#FFFFFF`,
   text: `#111111`,
   border: `#E4E4DC`,
   line: `#6E6250`,
   weight: 650
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#3A362F`,
   border: `#EAEAE2`,
   line: `#8C8069`,
   weight: 500
  },
  edgeOpacity: .92,
  edgeGlow: 0,
  preview: {
   rootFill: `#111111`,
   branchColors: [`#1B1B1B`, `#6E6250`, `#8C8069`, `#B4AC9C`]
  }
 }, {
  id: `ocean`,
  name: `Ocean`,
  description: `Deep blue canvas with cyan and teal current lines.`,
  dark: !0,
  canvas: `#0B1622`,
  canvasGrid: `dots`,
  dot: `#1B2C3E`,
  accent: `#38BDF8`,
  swatches: [`#38BDF8`, `#22D3EE`, `#0B1622`],
  branch: {
   style: `tapered`,
   width: [7, 3.6, 2.4, 1.9],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 27,
   main: 16,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#0B1622`,
   text: `#E8F6FF`,
   border: `#1E3A52`,
   line: `#38BDF8`,
   weight: 750
  },
  main: {
   fill: `#0B1622`,
   text: `#E8F6FF`,
   border: `#1E3A52`,
   line: `#38BDF8`,
   weight: 650
  },
  sub: {
   fill: `#0B1622`,
   text: `#B7D3E6`,
   border: `#1B3045`,
   line: `#38BDF8`,
   weight: 500
  },
  edgeOpacity: 1,
  edgeGlow: .24,
  preview: {
   rootFill: `#38BDF8`,
   branchColors: [`#38BDF8`, `#22D3EE`, `#2DD4BF`, `#60A5FA`]
  }
 }, {
  id: `midnight`,
  name: `Midnight`,
  description: `Low-glare graphite surfaces with warm amber accents.`,
  dark: !0,
  canvas: `#14161A`,
  canvasGrid: `none`,
  dot: `#252932`,
  accent: `#F5A623`,
  swatches: [`#F5A623`, `#E8EAED`, `#14161A`],
  branch: {
   style: `curved`,
   width: [4.2, 2.6, 2, 1.6],
   taper: !1,
   opacity: .95
  },
  font: {
   root: 22,
   main: 15,
   sub: 13,
   deep: 12
  },
  shape: {
   root: `rounded`,
   main: `rounded`,
   sub: `rounded`,
   deep: `rounded`
  },
  root: {
   fill: `#22262E`,
   text: `#F5F6F8`,
   border: `#2F3540`,
   line: `#F5A623`,
   weight: 650,
   radius: 11,
   paddingX: 20,
   paddingY: 12
  },
  main: {
   fill: `#1A1D23`,
   text: `#EDEFF2`,
   border: `#2A303A`,
   line: `#F5A623`,
   weight: 600,
   radius: 10,
   paddingX: 15,
   paddingY: 8
  },
  sub: {
   fill: `#181B21`,
   text: `#C8CDD6`,
   border: `#262B34`,
   line: `#9A8055`,
   weight: 500,
   radius: 9,
   paddingX: 12,
   paddingY: 6
  },
  edgeOpacity: .9,
  edgeGlow: .12,
  preview: {
   rootFill: `#F5A623`,
   branchColors: [`#F5A623`, `#E0B978`, `#8C9AAE`, `#5C6675`]
  }
 }, {
  id: `forest`,
  name: `Forest`,
  description: `Mossy greens and cream paper for organic planning.`,
  dark: !1,
  canvas: `#F7FAF5`,
  canvasGrid: `none`,
  dot: `#E1E9DC`,
  accent: `#2F7D4F`,
  swatches: [`#2F7D4F`, `#8AAF7A`, `#F7FAF5`],
  branch: {
   style: `tapered`,
   width: [6.5, 3.4, 2.4, 1.9],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 26,
   main: 16,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#F7FAF5`,
   text: `#1E2D22`,
   border: `#CBDCC4`,
   line: `#2F7D4F`,
   weight: 750
  },
  main: {
   fill: `#F7FAF5`,
   text: `#1E2D22`,
   border: `#D5E3CF`,
   line: `#3F9762`,
   weight: 650
  },
  sub: {
   fill: `#F7FAF5`,
   text: `#38493C`,
   border: `#E0EADD`,
   line: `#4E9A66`,
   weight: 500
  },
  edgeOpacity: .95,
  edgeGlow: 0,
  preview: {
   rootFill: `#2F7D4F`,
   branchColors: [`#2F7D4F`, `#4E9A66`, `#7FB069`, `#A3C585`]
  }
 }, {
  id: `sunset`,
  name: `Sunset`,
  description: `Warm coral and apricot gradients on soft cream.`,
  dark: !1,
  canvas: `#FFF9F5`,
  canvasGrid: `none`,
  dot: `#F2E4D8`,
  accent: `#F2545B`,
  swatches: [`#F2545B`, `#F2994A`, `#FFF9F5`],
  branch: {
   style: `tapered`,
   width: [7.5, 3.8, 2.6, 2],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 27,
   main: 16,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#FFF9F5`,
   text: `#33221C`,
   border: `#F3D9C9`,
   line: `#F2545B`,
   weight: 750
  },
  main: {
   fill: `#FFF9F5`,
   text: `#33221C`,
   border: `#F7E2D4`,
   line: `#F2545B`,
   weight: 650
  },
  sub: {
   fill: `#FFF9F5`,
   text: `#4C3A31`,
   border: `#F9E9DE`,
   line: `#E8833F`,
   weight: 500
  },
  edgeOpacity: .96,
  edgeGlow: 0,
  preview: {
   rootFill: `#F2545B`,
   branchColors: [`#F2545B`, `#F2994A`, `#F2C14E`, `#E8833F`]
  }
 }, {
  id: `lavender`,
  name: `Lavender`,
  description: `Soft violet shadows for creative brainstorming.`,
  dark: !1,
  canvas: `#FBF9FF`,
  canvasGrid: `none`,
  dot: `#E9E4F5`,
  accent: `#7C5CFC`,
  swatches: [`#7C5CFC`, `#C4B5FD`, `#FBF9FF`],
  branch: {
   style: `tapered`,
   width: [6.5, 3.4, 2.4, 1.9],
   taper: !0,
   opacity: 1
  },
  font: {
   root: 26,
   main: 16,
   sub: 13.5,
   deep: 12.5
  },
  shape: {
   root: `underline`,
   main: `underline`,
   sub: `underline`,
   deep: `underline`
  },
  root: {
   fill: `#FBF9FF`,
   text: `#241E36`,
   border: `#E2DAF8`,
   line: `#7C5CFC`,
   weight: 750
  },
  main: {
   fill: `#FBF9FF`,
   text: `#241E36`,
   border: `#E6E0F8`,
   line: `#7C5CFC`,
   weight: 650
  },
  sub: {
   fill: `#FBF9FF`,
   text: `#3E3752`,
   border: `#EDE8FA`,
   line: `#9575F0`,
   weight: 500
  },
  edgeOpacity: .95,
  edgeGlow: 0,
  preview: {
   rootFill: `#7C5CFC`,
   branchColors: [`#7C5CFC`, `#9575F0`, `#B39BF7`, `#C4B5FD`]
  }
 }, {
  id: `mono`,
  name: `Mono`,
  description: `Pure greyscale for print and distraction-free thinking.`,
  dark: !1,
  canvas: `#FFFFFF`,
  canvasGrid: `none`,
  dot: `#ECECEC`,
  accent: `#444444`,
  swatches: [`#444444`, `#A3A3A3`, `#FFFFFF`],
  branch: {
   style: `curved`,
   width: [3.6, 2.4, 1.8, 1.5],
   taper: !1,
   opacity: 1
  },
  font: {
   root: 22,
   main: 15,
   sub: 13,
   deep: 12
  },
  shape: {
   root: `rounded`,
   main: `rounded`,
   sub: `rounded`,
   deep: `rounded`
  },
  root: {
   fill: `#1F1F1F`,
   text: `#FFFFFF`,
   border: `#1F1F1F`,
   line: `#1F1F1F`,
   weight: 650,
   radius: 10,
   paddingX: 20,
   paddingY: 12
  },
  main: {
   fill: `#FFFFFF`,
   text: `#1F1F1F`,
   border: `#C9C9C9`,
   line: `#4A4A4A`,
   weight: 600,
   radius: 9,
   paddingX: 15,
   paddingY: 8
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#3D3D3D`,
   border: `#E0E0E0`,
   line: `#8A8A8A`,
   weight: 500,
   radius: 8,
   paddingX: 12,
   paddingY: 6
  },
  edgeOpacity: 1,
  edgeGlow: 0,
  preview: {
   rootFill: `#1F1F1F`,
   branchColors: [`#4A4A4A`, `#767676`, `#A3A3A3`, `#C9C9C9`]
  }
 }, {
  id: `candy`,
  name: `Candy`,
  description: `Playful pastel cards with soft rounded borders.`,
  dark: !1,
  canvas: `#FFFDFE`,
  canvasGrid: `none`,
  dot: `#F6E9F0`,
  accent: `#E84C8B`,
  swatches: [`#E84C8B`, `#5AC8FA`, `#FFFDFE`],
  branch: {
   style: `curved`,
   width: [4.4, 2.8, 2.1, 1.7],
   taper: !1,
   opacity: .95
  },
  font: {
   root: 22,
   main: 15,
   sub: 13,
   deep: 12
  },
  shape: {
   root: `pill`,
   main: `pill`,
   sub: `pill`,
   deep: `pill`
  },
  root: {
   fill: `#FFE3EF`,
   text: `#8A1F4C`,
   border: `#F9B6D0`,
   line: `#E84C8B`,
   weight: 700,
   paddingX: 22,
   paddingY: 12
  },
  main: {
   fill: `#FFFFFF`,
   text: `#45223A`,
   border: `#F7D3E2`,
   line: `#E84C8B`,
   weight: 600,
   paddingX: 16,
   paddingY: 8
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#5A3A4C`,
   border: `#FBE4EE`,
   line: `#8FA7F5`,
   weight: 500,
   paddingX: 13,
   paddingY: 6
  },
  edgeOpacity: .9,
  edgeGlow: 0,
  preview: {
   rootFill: `#E84C8B`,
   branchColors: [`#E84C8B`, `#8FA7F5`, `#5AC8FA`, `#F5A623`]
  }
 }, {
  id: `tech`,
  name: `Tech`,
  description: `Blueprint blue on near-white with crisp technical lines.`,
  dark: !1,
  canvas: `#F8FAFF`,
  canvasGrid: `lines`,
  dot: `#DCE4F5`,
  accent: `#2F6BFF`,
  swatches: [`#2F6BFF`, `#7C5CFC`, `#F8FAFF`],
  branch: {
   style: `angled`,
   width: [3, 2.2, 1.8, 1.5],
   taper: !1,
   opacity: 1
  },
  font: {
   root: 21,
   main: 14.5,
   sub: 12.5,
   deep: 12
  },
  shape: {
   root: `rect`,
   main: `rect`,
   sub: `rect`,
   deep: `rect`
  },
  root: {
   fill: `#1E2A44`,
   text: `#FFFFFF`,
   border: `#1E2A44`,
   line: `#2F6BFF`,
   weight: 700,
   radius: 4,
   paddingX: 20,
   paddingY: 12
  },
  main: {
   fill: `#FFFFFF`,
   text: `#17233B`,
   border: `#C8D4EC`,
   line: `#2F6BFF`,
   weight: 600,
   radius: 4,
   paddingX: 14,
   paddingY: 7
  },
  sub: {
   fill: `#FFFFFF`,
   text: `#33425E`,
   border: `#DBE4F5`,
   line: `#7C8FB5`,
   weight: 500,
   radius: 3,
   paddingX: 11,
   paddingY: 6
  },
  edgeOpacity: 1,
  edgeGlow: .06,
  preview: {
   rootFill: `#1E2A44`,
   branchColors: [`#2F6BFF`, `#7C5CFC`, `#12B5C9`, `#2FBF71`]
  }
 }],
 ny = Object.fromEntries(ty.map(e => [e.id, e])),
 ry = {
  soft: `snowbrush`,
  cyberpunk: `ocean`,
  dark: `midnight`,
  minimal: `snowbrush`
 };

function iy(e) {
 return ry[e] ? ny[ry[e]] : ny[e] ?? ny.snowbrush
}
var ay = [`root`, `main`, `sub`, `deep`];

function oy(e) {
 return ay[Math.min(e, 3)]
}

function sy(e, t) {
 return ey[t % ey.length]
}

function cy(e, t, n, r = {}, i = null) {
 let a = iy(e),
  o = oy(n),
  s = a[o] ?? a.sub,
  c = n === 0,
  l = $g(t) ? t : a.accent,
  u = s.fill,
  d = s.text,
  f = s.border,
  p = o === `root` ? a.root.line ?? l : l;
 o === `root` && (p = s.line ?? l);
 let m = i ? O_(i) : null;
 m && (u = m.fill ?? s.fill, d = m.text ?? s.text, f = m.border ?? s.border, p = m.line ?? p), $g(r.fill) && (u = r_(r.fill), $g(r.text) || (d = s_(d, u))), $g(r.border) && (f = r_(r.border)), $g(r.text) && (d = r_(r.text)), $g(r.line) && (p = r_(r.line));
 let h = Number(r.fontSize) || Number(r.style?.fontSize) || a.font?.[o] || 13,
  g = Number(r.fontWeight) || Number(r.style?.fontWeight) || s.weight || 500,
  _ = r.shape || r.style?.shape || a.shape?.[o] || `rounded`,
  v = _ === `underline` || _ === `none`;
 if (v) {
  let e = m?.fill ?? ($g(r.fill) ? r.fill : null);
  e && (d = s_(e, (a.dark, a.canvas)), p = m?.line ?? e)
 }
 let y = Number(r.branchWidth) || Number(r.style?.branchWidth) || a.branch?.width?.[Math.min(n, 3)] || 2;
 return {
  level: n,
  tier: o,
  fill: v ? `transparent` : u,
  text: d,
  border: v ? `transparent` : f,
  borderWidth: s.borderWidth ?? 1,
  line: p,
  soft: i_(v ? a.canvas : u, p, v ? .1 : .14),
  muted: i_(d, a.canvas, .4),
  shadow: e_(`#101828`, a.dark ? .4 : .12),
  ring: e_(p, .55),
  accent: a.accent,
  shape: _,
  radius: s.radius ?? 8,
  paddingX: s.paddingX ?? (v ? 2 : 12),
  paddingY: s.paddingY ?? (v ? 2 : 6),
  fontSize: h,
  weight: g,
  bold: !!r.style?.bold,
  italic: !!r.style?.italic,
  underline: !!r.style?.underline,
  strike: !!r.style?.strike,
  align: r.style?.align ?? (c ? `center` : `left`),
  branchWidth: y,
  branchStyle: a.branch?.style ?? `curved`,
  branchTaper: !!a.branch?.taper,
  edgeOpacity: a.branch?.opacity ?? .95,
  edgeGlow: a.edgeGlow ?? 0,
  canvas: a.canvas,
  canvasGrid: a.canvasGrid ?? `none`,
  dot: a.dot,
  dark: !!a.dark,
  branchColors: ey,
  branchColorAt: e => sy(a, e)
 }
}
var ly = /[\u1100-\u11ff\u2e80-\u9fff\uac00-\ud7af\uf900-\ufaff\uff00-\uffef]/;

function uy(e) {
 return ly.test(e)
}

function dy(e, t = 14, n = 500) {
 let r = Array.from(String(e ?? ``)),
  i = n >= 650 ? .56 : n >= 550 ? .545 : .525,
  a = 0;
 for (let e of r) uy(e) ? a += t * 1.02 : e === ` ` ? a += t * .28 : /[ilI.,:;'!|]/.test(e) ? a += t * .3 : /[mwMW@%]/.test(e) ? a += t * .86 : /[A-Z]/.test(e) ? a += t * i + .6 : a += t * i;
 return a
}

function fy(e, t, n, r) {
 let i = String(e ?? ``).split(`
`);
 if (!r) return i.length;
 let a = 0;
 for (let e of i) {
  let i = dy(e, t, n);
  a += Math.max(1, Math.ceil(i / Math.max(24, r - 2)))
 }
 return a
}

function py(e, t = {}) {
 let {
  fontSize: n = 14,
  weight: r = 500,
  paddingX: i = 12,
  paddingY: a = 6,
  minWidth: o = 0,
  maxWidth: s = 320,
  lineHeight: c = 1.42,
  shape: l = `rounded`,
  prefix: u = 0,
  extraWidth: d = 0,
  extraHeight: f = 0
 } = t, p = String(e ?? ``), m = Math.max(40, s - i * 2), h = p.split(`
`).reduce((e, t) => Math.max(e, dy(t, n, r)), 0), g = fy(p, n, r, s - i * 2), _ = Math.min(h, m), v = l === `underline` || l === `none`, y = Math.max(o, Math.round(_ + 6 + i * 2 + u + d)), b = Math.round(g * n * c + a * 2 + f);
 return {
  width: v ? Math.round(y + 2) : y,
  height: b,
  lines: g,
  contentWidth: _,
  textHeight: g * n * c
 }
}
var my = 54,
 hy = 16,
 gy = 22,
 _y = 84,
 vy = 22,
 yy = 40,
 by = 52,
 xy = [`mindmap`, `logic`, `logicLeft`, `fishbone`, `org`, `timeline`, `matrix`, `treeTable`, `brace`];

function Sy(e) {
 return xy.includes(e) ? e : null
}
var Cy = {
 0: 420,
 1: 320,
 2: 280,
 3: 260
};

function wy(e) {
 let t = Array.isArray(e.markers) ? e.markers.length : 0;
 return t ? t * 15 + (t - 1) * 3 + 8 : 0
}

function Ty(e) {
 let t = Array.isArray(e.labels) ? e.labels : [];
 return t.length ? t.reduce((e, t) => e + py(t.text, {
  fontSize: 10.5,
  weight: 600,
  paddingX: 7,
  paddingY: 2,
  shape: `pill`,
  lineHeight: 1
 }).width + 4, 0) : 0
}

function Ey(e, t, n) {
 let r = cy(n, e.color ?? `#18212f`, t, { ...(e.overrides ?? {}), ...(e.style ? { style: e.style } : {}) }, e.preset ?? null),
  i = Cy[Math.min(t, 3)] ?? 260,
  a = wy(e),
  o = Ty(e),
  s = (Array.isArray(e.markers) && e.markers.length ? 1 : 0) + (Array.isArray(e.labels) && e.labels.length ? 1 : 0),
  c = !!(e.note || e.task || e.link),
  l = Math.min(Math.max(a, o) * .4, 46),
  u = py(e.text, {
   fontSize: r.fontSize,
   weight: r.weight,
   paddingX: r.paddingX,
   paddingY: r.paddingY,
   minWidth: t === 0 ? 96 : 0,
   maxWidth: i,
   lineHeight: 1.42,
   shape: r.shape,
   prefix: e.task ? 18 : 0,
   extraWidth: l,
   extraHeight: s * 16 + (c ? 12 : 0)
  });
 return {
  width: Math.max(48, e.widthOverride ? Number(e.widthOverride) : u.width),
  height: Math.max(t === 0 ? 40 : 26, u.height + (c ? 10 : 0)),
  visual: r,
  size: u
 }
}

function Dy(e, t) {
 return e === `mindmap` || e === `logic` || e === `logicLeft` ? t ?? `curved` : e === `org` || e === `treeTable` || e === `brace` ? `angled` : `straight`
}

function Oy(e) {
 return e === `timeline` || e === `fishbone` || e === `matrix` ? `org` : e
}

function ky(e, t, n, r) {
 let {
  width: i,
  height: a,
  visual: o
 } = Ey(e, t, r);
 return {
  item: e,
  level: t,
  width: i,
  height: a,
  visual: o,
  arrangement: n,
  children: [],
  bbox: {
   minX: -i / 2,
   maxX: i / 2,
   minY: -a / 2,
   maxY: a / 2
  }
 }
}

function Ay(e, t, n, r) {
 e.bbox.minX = Math.min(e.bbox.minX, t.bbox.minX + n), e.bbox.maxX = Math.max(e.bbox.maxX, t.bbox.maxX + n), e.bbox.minY = Math.min(e.bbox.minY, t.bbox.minY + r), e.bbox.maxY = Math.max(e.bbox.maxY, t.bbox.maxY + r)
}

function jy(e) {
 return e.bbox.maxX - e.bbox.minX
}

function My(e) {
 return e.bbox.maxY - e.bbox.minY
}

function Ny(e, t, n, r, i, a) {
 e.children.push({
  block: t,
  dx: n,
  dy: r,
  edgeDir: i,
  edgeStyle: a
 }), Ay(e, t, n, r)
}

function Py(e, t, n, r) {
 let i = -(t.reduce((e, t) => e + My(t), 0) + hy * Math.max(0, t.length - 1)) / 2,
  a = e.arrangement === `logic` || e.arrangement === `logicLeft` ? my * .9 : my;
 for (let o of t) {
  let t = i - o.bbox.minY;
  Ny(e, o, n > 0 ? e.width / 2 + a - o.bbox.minX : -(e.width / 2 + a) - o.bbox.maxX, t, n > 0 ? `right` : `left`, Dy(e.arrangement, r)), i += My(o) + hy
 }
}

function Fy(e, t, n) {
 let r = -(t.reduce((e, t) => e + jy(t), 0) + my * Math.max(0, t.length - 1)) / 2;
 for (let i of t) Ny(e, i, r - i.bbox.minX, e.height / 2 + hy + 12 - i.bbox.minY, `down`, Dy(e.arrangement, n)), r += jy(i) + my
}

function Iy(e, t, n) {
 let r = t.length <= 1 ? 1 : 2,
  i = Math.max(...t.map(e => jy(e))) + vy,
  a = Math.max(...t.map(e => My(e))) + vy,
  o = -(r * i - vy) / 2,
  s = e.height / 2 + hy + 10;
 t.forEach((t, c) => {
  let l = c % r,
   u = Math.floor(c / r),
   d = o + l * i,
   f = s + u * a;
  Ny(e, t, d + (i - vy - jy(t)) / 2 - t.bbox.minX, f + (a - vy - My(t)) / 2 - t.bbox.minY, `down`, n ?? `angled`)
 })
}

function Ly(e, t, n, r) {
 let i = n > 0 ? e.width / 2 + my : -(e.width / 2 + my);
 for (let a of t) Ny(e, a, n > 0 ? i - a.bbox.minX : i - a.bbox.maxX, 0, n > 0 ? `right` : `left`, r ?? `straight`), i += n * (jy(a) + my)
}

function Ry(e, t, n, r) {
 let i = n > 0 ? e.width / 2 + my : -(e.width / 2 + my);
 t.forEach((t, a) => {
  Ny(e, t, n > 0 ? i - t.bbox.minX : i - t.bbox.maxX, (a % 2 == 0 ? -1 : 1) * by, n > 0 ? `right` : `left`, r ?? `straight`), i += n * (jy(t) + my)
 })
}

function zy(e, t, n, r) {
 let i = e.height / 2 + hy + 8;
 for (let a of t) Ny(e, a, n >= 0 ? yy - a.bbox.minX : -40 - a.bbox.maxX, i - a.bbox.minY, `down`, r ?? `angled`), i += My(a) + hy
}

function By(e, t, n, r) {
 let i = e.height / 2 + hy + 12;
 for (let n of t) Ny(e, n, 34 - n.bbox.minX, i - n.bbox.minY, `down`, r ?? `angled`), i += My(n) + hy
}

function Vy(e, t, n, r, i) {
 let a = Sy(e.structure) ?? Sy(n) ?? `mindmap`,
  o = ky(e, t, a, i.themeId),
  s = (i.childrenByParent.get(e.id) ?? []).filter(e => i.visibleIds.has(e.id));
 if (e.collapsed || s.length === 0) return o;
 let c = Oy(a),
  l = s.map(e => Vy(e, t + 1, c, r, i)),
  u = o.visual.branchStyle;
 return a === `org` ? Fy(o, l, u) : a === `matrix` ? Iy(o, l, u) : a === `timeline` ? Ly(o, l, r, u) : a === `fishbone` ? Ry(o, l, r, u) : a === `treeTable` ? zy(o, l, r, u) : a === `brace` ? By(o, l, r, u) : Py(o, l, r, u), o
}

function Hy(e, t, n, r, i, a, o) {
 let {
  item: s,
  level: c,
  width: l,
  height: u,
  arrangement: d,
  visual: f
 } = e;
 o.set(s.id, {
  item: s,
  level: c,
  width: l,
  height: u,
  arrangement: d,
  visual: f,
  x: t,
  y: n,
  parentId: r,
  edgeDir: i,
  edgeStyle: a
 });
 for (let r of e.children) Hy(r.block, t + r.dx, n + r.dy, s.id, r.edgeDir, r.edgeStyle, o)
}

function Uy(e, t) {
 let n = new Map(e.map(e => [e.id, e])),
  r = new Map;
 for (let t of e) t.parentId && (r.has(t.parentId) || r.set(t.parentId, []), r.get(t.parentId).push(t));
 let i = new Set,
  a = new Map,
  o = n.get(t);
 if (!o) return {
  byId: n,
  childrenByParent: r,
  visibleIds: i,
  colors: a
 };
 a.set(o.id, o.color || `#18212f`);
 let s = [o.id];
 for (; s.length;) {
  let e = s.shift(),
   t = n.get(e);
  if (t && !i.has(e) && (i.add(e), !t.collapsed))
   for (let t of r.get(e) ?? []) a.has(t.id) || a.set(t.id, t.color || a.get(e) || `#18212f`), s.push(t.id)
 }
 return {
  byId: n,
  childrenByParent: r,
  visibleIds: i,
  colors: a
 }
}

function Wy(e, t, n, r) {
 let i = new Map(e.map(e => [e.id, e])),
  a = new Map,
  o = (e, r, s) => {
   let c = i.get(e);
   if (!c) return;
   let l = Number.isFinite(c.offset?.x) ? c.offset.x : 0,
    u = Number.isFinite(c.offset?.y) ? c.offset.y : 0,
    d = r + l,
    f = s + u;
   a.set(e, {
    x: d,
    y: f
   });
   for (let r of t.get(e) ?? []) n.has(r.id) && o(r.id, d, f)
  };
 return o(r, 0, 0), a
}

function Gy(e, t) {
 let n = t.x - e.x,
  r = t.y - e.y;
 return Math.abs(n) >= Math.abs(r) ? n >= 0 ? {
  sourceHandle: `source-right`,
  targetHandle: `target-left`
 } : {
  sourceHandle: `source-left`,
  targetHandle: `target-right`
 } : r >= 0 ? {
  sourceHandle: `source-bottom`,
  targetHandle: `target-top`
 } : {
  sourceHandle: `source-top`,
  targetHandle: `target-bottom`
 }
}

function Ky(e) {
 return e === `left` ? {
  sourceHandle: `source-left`,
  targetHandle: `target-right`
 } : e === `down` ? {
  sourceHandle: `source-bottom`,
  targetHandle: `target-top`
 } : e === `up` ? {
  sourceHandle: `source-top`,
  targetHandle: `target-bottom`
 } : {
  sourceHandle: `source-right`,
  targetHandle: `target-left`
 }
}

function qy(e) {
 let t = String(e ?? ``).split(`
`).reduce((e, t) => e + Math.max(1, Math.ceil(Array.from(t).length / 24)), 0);
 return Math.max(40, 24 + t * 18)
}

function Jy({
 records: e,
 presenting: t,
 zones: n,
 summaries: r,
 callouts: i
}) {
 if (t) return [];
 let a = [],
  o = t => e.get(t);
 for (let e of n) {
  let t = e.nodeIds.map(o).filter(Boolean);
  if (!t.length) continue;
  let n = Math.min(...t.map(e => e.x - e.width / 2)),
   r = Math.max(...t.map(e => e.x + e.width / 2)),
   i = Math.min(...t.map(e => e.y - e.height / 2)),
   s = Math.max(...t.map(e => e.y + e.height / 2)),
   c = r - n + 60,
   l = s - i + 54;
  a.push({
   id: `zone-${e.id}`,
   type: `zone`,
   position: {
    x: (n + r) / 2,
    y: (i + s) / 2 - 2
   },
   draggable: !1,
   selectable: !1,
   connectable: !1,
   deletable: !1,
   focusable: !1,
   style: {
    width: c,
    height: l,
    zIndex: -2
   },
   ariaLabel: `Boundary ${e.label}`,
   data: {
    label: e.label,
    color: e.color,
    shape: e.shape,
    width: c,
    height: l
   }
  })
 }
 for (let e of r) {
  let t = e.nodeIds.map(o).filter(Boolean);
  if (!t.length) continue;
  let n = Math.min(...t.map(e => e.x - e.width / 2)),
   r = Math.max(...t.map(e => e.x + e.width / 2)),
   i = Math.min(...t.map(e => e.y - e.height / 2)),
   s = Math.max(...t.map(e => e.y + e.height / 2)),
   c = (n + r) / 2 < 0 ? `left` : `right`,
   summaryWidth = Math.max(120, Math.min(560, Number(e.width) || 168)),
   l = Math.max(60, Math.min(800, Number(e.height) || Math.max(44, s - i + 12))),
   u = (c === `right` ? r + 26 + summaryWidth / 2 : n - 26 - summaryWidth / 2) + (Number(e.offset?.x) || 0),
   summaryY = (i + s) / 2 + (Number(e.offset?.y) || 0);
  a.push({
   id: `summary-${e.id}`,
   type: `summary`,
   position: {
    x: u,
    y: summaryY
   },
   draggable: !0,
   selectable: !1,
   connectable: !1,
   deletable: !1,
   focusable: !1,
   style: {
    width: summaryWidth,
    height: l,
    zIndex: 2
   },
   ariaLabel: `Summary ${e.label}`,
   data: {
    label: e.label,
    color: e.color,
    width: summaryWidth,
    height: l,
    side: c
   }
  })
 }
 for (let e of i) {
  let t = o(e.nodeId);
  if (!t) continue;
  let n = e.side === `left` || e.side === `right` ? e.side : t.x < 0 ? `left` : `right`,
   calloutWidth = Math.max(120, Math.min(520, Number(e.width) || 188)),
   r = Math.max(44, Number(e.height) || qy(e.text)),
   i = n === `right` ? 1 : -1,
   s = t.x + i * (t.width / 2 + 22 + calloutWidth / 2) + (Number(e.offset?.x) || 0),
   c = t.y - t.height / 2 - r / 2 - 4 + (Number(e.offset?.y) || 0);
  a.push({
   id: `callout-${e.id}`,
   type: `callout`,
   position: {
    x: s,
    y: c
   },
   draggable: !0,
   selectable: !1,
   connectable: !1,
   deletable: !1,
   focusable: !1,
   style: {
    width: calloutWidth,
    height: r,
    zIndex: 3
   },
   ariaLabel: `Callout ${e.text}`,
   data: {
    text: e.text,
    color: e.color,
    width: calloutWidth,
    height: r,
    side: n
   }
  })
 }
 return a
}

function Yy(e, t, {
 selectedId: n = null,
 selectedIds: r = [],
 editingId: i = null,
 theme: a = `snowbrush`,
 mapStructure: o = `mindmap`,
 focusId: s = null,
 zones: c = [],
 relationships: l = [],
 summaries: u = [],
 callouts: d = [],
 presenting: f = !1,
 slideIds: p = null,
 relationshipSourceId: m = null,
 lineStyle: h = null
} = {}) {
 let g = iy(a),
  _ = (s && e.some(e => e.id === s) ? s : null) ?? t,
  v = e.find(e => e.id === _);
 if (!v) return {
  nodes: [],
  edges: [],
  bounds: null
 };
 let {
  childrenByParent: y,
  visibleIds: b,
  colors: x
 } = Uy(e, _), S = new Map;
 for (let e of y.values()) e.forEach((e, t) => S.set(e.id, t));
 let C = h || g.branch?.style || `curved`,
  w = {
   byId: new Map(e.map(e => [e.id, e])),
   childrenByParent: y,
   visibleIds: b,
   themeId: a
  },
  T = new Map,
  E = Sy(v.structure) ?? o,
  D = Ey(v, 0, a),
  O = (y.get(_) ?? []).filter(e => b.has(e.id));
 if (E === `mindmap` && !v.collapsed && O.length) {
  T.set(_, {
   item: v,
   level: 0,
   width: D.width,
   height: D.height,
   visual: D.visual,
   arrangement: E,
   x: 0,
   y: 0,
   parentId: null,
   edgeDir: null,
   edgeStyle: null
  });
  for (let e of [`right`, `left`]) {
   let t = O.filter(t => e === `left` ? t.side === `left` : t.side !== `left`);
   if (!t.length) continue;
   let n = t.map(t => Vy(t, 1, Sy(t.structure) ?? E, e === `left` ? -1 : 1, w)),
    r = -(n.reduce((e, t) => e + My(t), 0) + gy * Math.max(0, n.length - 1)) / 2,
    i = e === `left` ? -1 : 1;
   for (let t of n) Hy(t, i > 0 ? D.width / 2 + _y - t.bbox.minX : -(D.width / 2 + _y) - t.bbox.maxX, r - t.bbox.minY, _, e, C, T), r += My(t) + gy
  }
 } else Hy(Vy(v, 0, E, E === `logicLeft` ? -1 : 1, w), 0, 0, null, null, null, T);
 let k = new Set(r.length ? r : n ? [n] : []),
  A = p ? new Set(p) : null,
  j = Wy(e, y, b, _);
 for (let [e, t] of T) {
  let n = j.get(e);
  n && (n.x || n.y) && (t.x += n.x, t.y += n.y)
 }
 let M = [];
 for (let e of T.values()) {
  let {
   item: n,
   level: r,
   width: a,
   height: o,
   x: s,
   y: c,
   visual: l
  } = e, u = n.id === t, d = n.id === _ && !u, p = x.get(n.id) ?? n.color ?? `#18212f`, h = (y.get(n.id) ?? []).length, g = k.has(n.id), v = f && A ? !A.has(n.id) : !1;
  M.push({
   id: n.id,
   type: `mindmap`,
   position: {
    x: s,
    y: c
   },
   draggable: !f && !m,
   selectable: !1,
   connectable: !1,
   deletable: !1,
   style: {
    width: a,
    minHeight: o,
    zIndex: g ? 2 : 1
   },
   ariaLabel: `${n.text}. ${u?`Central topic`:d?`Focused branch`:`Level ${r} topic`}.`,
   data: {
    label: n.text,
    level: r,
    side: s >= 0 ? `right` : `left`,
    isRoot: u,
    isFocusRoot: d,
    color: p,
    visual: l,
    width: a,
    height: o,
    childCount: h,
    collapsed: !!n.collapsed,
    selected: g,
    multiSelected: k.size > 1,
    isEditing: n.id === i,
    structure: e.arrangement,
    structureOverride: Sy(n.structure),
    siblingIndex: S.get(n.id) ?? 0,
    dimmed: v,
    presenting: f,
    linking: !!m && !f,
    relationshipSource: !!m && n.id === m,
    markers: n.markers ?? [],
    labels: n.labels ?? [],
    note: n.note ?? null,
    task: n.task ?? null,
    link: n.link ?? null,
    preset: n.preset ?? null,
    shape: n.shape ?? null,
    lineStyle: C
   }
  })
 }
 let N = new Map(M.map(e => [e.id, e])),
  P = [];
 for (let e of T.values()) {
  if (!e.parentId || !N.has(e.parentId)) continue;
  let t = N.get(e.item.id).data.visual,
   n = e.level,
   r = Ky(e.edgeDir),
   i = T.get(e.parentId),
   a = e.edgeStyle || C;
  P.push({
   id: `edge-${e.parentId}-${e.item.id}`,
   source: e.parentId,
   target: e.item.id,
   sourceHandle: r.sourceHandle,
   targetHandle: r.targetHandle,
   type: `branch`,
   focusable: !1,
   selectable: !1,
   zIndex: 0,
   data: {
    color: t.line,
    depth: n,
    style: a,
    taper: !!t.branchTaper || a === `tapered`,
    strokeWidth: t.branchWidth,
    startWidth: n === 1 ? Math.max(t.branchWidth, (i?.visual?.branchWidth ?? 6) * 1.5) : Math.max(1.6, t.branchWidth * 1.45),
    opacity: t.edgeOpacity,
    glow: t.edgeGlow,
    horizontal: e.edgeDir !== `down` && e.edgeDir !== `up`,
    dimmed: f && A ? !A.has(e.parentId) || !A.has(e.item.id) : !1
   }
  })
 }
 if (!f)
  for (let e of l) {
   let t = N.get(e.sourceId),
    n = N.get(e.targetId);
   if (!t || !n) continue;
   let r = Gy({
    x: t.position.x,
    y: t.position.y
   }, {
    x: n.position.x,
    y: n.position.y
   });
   P.push({
    id: `relationship-${e.id}`,
    source: e.sourceId,
    target: e.targetId,
    sourceHandle: r.sourceHandle,
    targetHandle: r.targetHandle,
    type: `relationship`,
    focusable: !1,
    selectable: !1,
    zIndex: 4,
    markerEnd: {
     type: `arrowclosed`,
     color: e.color,
     width: 16,
     height: 16
    },
    data: {
     relationshipId: e.id,
     label: e.label,
     color: e.color,
     style: e.style,
     curve: e.curve ?? null,
     sourceAnchor: e.sourceAnchor ?? null,
     targetAnchor: e.targetAnchor ?? null,
     sourceWidth: t.data.width,
     sourceHeight: t.data.height,
     sourceCenterX: t.position.x,
     sourceCenterY: t.position.y,
     targetWidth: n.data.width,
     targetHeight: n.data.height,
     targetCenterX: n.position.x,
     targetCenterY: n.position.y,
     strokeWidth: 1.8,
     dashed: !0
    }
   })
  }
 return {
  nodes: [...Jy({
   records: T,
   presenting: f,
   zones: c,
   summaries: u,
   callouts: d
  }), ...M],
  edges: P,
  bounds: null
 }
}

function Xy(e, t, n) {
 let r = e.find(e => e.id === t);
 if (!r || r.type !== `mindmap`) return null;
 let i = {
   x: r.position.x,
   y: r.position.y
  },
  a = {
   right: {
    x: 1,
    y: 0
   },
   left: {
    x: -1,
    y: 0
   },
   up: {
    x: 0,
    y: -1
   },
   down: {
    x: 0,
    y: 1
   }
  } [n];
 if (!a) return null;
 let o = null,
  s = 1 / 0;
 for (let n of e) {
  if (n.id === t || n.type !== `mindmap`) continue;
  let e = n.position.x - i.x,
   r = n.position.y - i.y,
   c = e * a.x + r * a.y;
  if (c <= 12) continue;
  let l = c + Math.abs(e * a.y - r * a.x) * .6;
  l < s && (s = l, o = n.id)
 }
 return o
}
var Zy = {
  mindmap: Wv,
  zone: Zv,
  summary: Qv,
  callout: $v
 },
 Qy = {
  branch: Kv,
  relationship: Yv
 };

function $y(e, t, n) {
 if (!Number.isFinite(e) || !Number.isFinite(t)) return null;
 let r = document.elementsFromPoint(e, t);
 for (let e of r) {
  let r = e.closest?.(`.react-flow__node-mindmap`);
  if (!r) continue;
  let i = r.getAttribute(`data-id`);
  if (!i || i === n) continue;
  let a = r.getBoundingClientRect();
  if (a.width <= 0 || a.height <= 0) continue;
  let o = (t - a.top) / a.height;
  return {
   id: i,
   mode: o < .26 ? `before` : o > .74 ? `after` : `child`,
   wrapper: r
  }
 }
 return null
}

function eb(e) {
 let t = e.current;
 t && (t.classList.remove(`is-drop-child`, `is-drop-before`, `is-drop-after`), e.current = null)
}

function tb(e, t) {
 if (!t) {
  eb(e);
  return
 }
 let n = t.wrapper.querySelector(`.xm-topic`);
 if (!n) return;
 let r = `is-drop-${t.mode}`;
 e.current === n && n.classList.contains(r) || (eb(e), n.classList.add(r), e.current = n)
}

function nb() {
 let e = $(e => e.nodes),
  t = $(e => e.rootId),
  n = $(e => e.selectedId),
  r = $(e => e.selectedIds),
  i = $(e => e.editingId),
  a = $(e => e.selectNode),
  o = $(e => e.fitRequest),
  s = $(e => e.focusRequest),
  c = $(e => e.zoomRequest),
  l = $(e => e.theme),
  u = $(e => e.mapStructure),
  d = $(e => e.lineStyle),
  f = $(e => e.focusId),
  p = $(e => e.zones),
  m = $(e => e.relationships),
  h = $(e => e.summaries),
  g = $(e => e.callouts),
  v = $(e => e.presentationActive),
  y = $(e => e.presentationIndex),
  x = $(e => e.presentationSlides),
  S = $(e => e.relationshipSourceId),
  C = $(e => e.completeRelationship),
  w = $(e => e.cancelRelationship),
  T = $(e => e.moveNode),
  E = $(e => e.moveNodeBy),
  D = $(e => e.notify),
  O = $(e => e.syncZoom),
  U = $(e => e.updateSummary),
  V = $(e => e.updateCallout),
  k = $(e => e.backgroundColor),
  {
   fitView: A,
   getNode: j,
   setCenter: M,
   getZoom: N,
   setViewport: P
  } = _u(),
  F = iy(l),
  ee = v ? x[y] ?? null : null,
  te = ee ? ee.nodeIds : null,
  ne = S ? e.find(e => e.id === S)?.text ?? `topic` : null,
  re = (0, _.useMemo)(() => Yy(e, t, {
   selectedId: v ? null : n,
   selectedIds: v ? [] : r,
   editingId: i,
   theme: l,
   mapStructure: u,
   lineStyle: d,
   focusId: f,
   zones: p,
   relationships: m,
   summaries: h,
   callouts: g,
   presenting: v,
   slideIds: te,
   relationshipSourceId: S
  }), [e, t, n, r, i, l, u, d, f, p, m, h, g, v, te, S]),
  [I, ie] = (0, _.useState)(re.nodes),
  L = (0, _.useRef)(!1),
  ae = (0, _.useRef)(null),
  oe = (0, _.useRef)(null);
 (0, _.useEffect)(() => {
  L.current || ie(re.nodes)
 }, [re.nodes]);
 let se = (0, _.useCallback)(e => {
   ie(t => eu(e, t))
  }, []),
  ce = (0, _.useCallback)((e, t) => {
   L.current = !0, eb(oe), ae.current = {
    id: t.id,
    x: t.position.x,
    y: t.position.y
   }
  }, []),
  le = (0, _.useCallback)((e, t) => {
   tb(oe, $y(e.clientX, e.clientY, t.id))
  }, []),
  ue = (0, _.useCallback)((e, t) => {
   eb(oe), L.current = !1;
   let n = ae.current;
   if (ae.current = null, !n || n.id !== t.id) return;
   let r = t.position.x - n.x,
    i = t.position.y - n.y;
   if (t.type === `summary` || t.type === `callout`) {
    if (Math.abs(r) < 1 && Math.abs(i) < 1) return;
    let id = String(t.id).replace(/^(summary|callout)-/, ``),
     st = window.__mindx.getState(),
     rec = t.type === `summary` ? st.summaries.find(x => x.id === id) : st.callouts.find(x => x.id === id);
    if (!rec) return;
    let offset = {
     x: Math.round((Number(rec.offset?.x) || 0) + r),
     y: Math.round((Number(rec.offset?.y) || 0) + i)
    };
    t.type === `summary` ? U(id, {
     offset
    }) : V(id, {
     offset
    }), D(`Position saved.`, `success`);
    return
   }
   let a = $y(e.clientX, e.clientY, t.id);
   a && T(t.id, a.id, a.mode) ? D(a.mode === `child` ? `Topic moved into this branch.` : `Topic reordered.`, `success`) : Math.abs(r) < 1 && Math.abs(i) < 1 || E(t.id, r, i) && D(`Topic moved. Use Arrange to restore the automatic layout.`, `info`)
  }, [T, E, D, U, V]);
 (0, _.useEffect)(() => {
  if (!o) return;
  let e = window.setTimeout(() => {
   A({
    padding: .22,
    duration: 420,
    maxZoom: 1.05
   })
  }, 80);
  return () => window.clearTimeout(e)
 }, [o, A]), (0, _.useEffect)(() => {
  if (!v || !te?.length) return;
  let e = window.setTimeout(() => {
   A({
    padding: .3,
    duration: 560,
    maxZoom: 1.25,
    nodes: te.map(e => ({
     id: e
    }))
   })
  }, 100);
  return () => window.clearTimeout(e)
 }, [v, y, te, A]), (0, _.useEffect)(() => {
  if (!s) return;
  let e = requestAnimationFrame(() => {
   let e = j(s.id);
   e && M(e.position.x, e.position.y, {
    zoom: Math.max(N(), .7),
    duration: 340
   })
  });
  return () => cancelAnimationFrame(e)
 }, [s, j, M, N]), (0, _.useEffect)(() => {
  if (!c) return;
  let e = N();
  if (Math.abs(e - c.zoom) < .002) return;
  let t = window.setTimeout(() => {
   P({
    zoom: c.zoom,
    duration: 180
   })
  }, 20);
  return () => window.clearTimeout(t)
 }, [c, N, P]);
 let de = {
  "--xm-canvas-bg": k || F.canvas,
  "--xm-canvas-dot": F.dot,
  "--xm-canvas-accent": F.accent
 };
 return (0, b.jsxs)(`div`, {
  className: [`xm-canvas`, F.dark ? `xm-canvas--dark` : ``, v ? `is-presenting` : ``].filter(Boolean).join(` `),
  style: de,
  "data-theme": F.id,
  "data-xm-dark": F.dark ? `true` : `false`,
  children: [(0, b.jsxs)(xf, {
   nodes: I,
   edges: re.edges,
   nodeTypes: Zy,
   edgeTypes: Qy,
   nodeOrigin: [.5, .5],
   fitView: !0,
   fitViewOptions: {
    padding: .22,
    maxZoom: 1.05
   },
   minZoom: .15,
   maxZoom: 2.4,
   nodesDraggable: !v,
   nodesConnectable: !1,
   elementsSelectable: !1,
   zoomOnDoubleClick: !1,
   selectionOnDrag: !1,
   elevateNodesOnSelect: !1,
   nodeDragThreshold: 4,
   proOptions: {
    hideAttribution: !0
   },
   onNodesChange: se,
   onNodeDragStart: ce,
   onNodeDrag: le,
   onNodeDragStop: ue,
   onMove: (e, t) => O(t.zoom),
   onNodeClick: (e, t) => {
    v || t.type !== `mindmap` || (S ? t.id === S ? w() : C(t.id) : a(t.id, {
     additive: e.shiftKey
    }))
   },
   onPaneClick: () => {
    v || (S ? w() : a(t))
   },
   className: `xm-flow`,
   children: [F.canvasGrid === `dots` ? (0, b.jsx)(Af, {
    variant: Ef.Dots,
    gap: 24,
    size: 1.1,
    color: F.dot
   }) : null, F.canvasGrid === `lines` ? (0, b.jsx)(Af, {
    variant: Ef.Lines,
    gap: 28,
    size: 1,
    color: F.dot
   }) : null, F.canvasGrid === `none` || !F.canvasGrid ? (0, b.jsx)(Af, {
    variant: Ef.Dots,
    gap: 26,
    size: .9,
    color: `transparent`
   }) : null]
  }), S && !v ? (0, b.jsxs)(`div`, {
   className: `xm-link-banner`,
   role: `status`,
   "aria-live": `polite`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-link-banner-icon`,
    "aria-hidden": `true`,
    children: (0, b.jsx)($m, {
     size: 15,
     strokeWidth: 2.4
    })
   }), (0, b.jsxs)(`span`, {
    children: [`Linking from `, (0, b.jsx)(`strong`, {
     children: ne
    }), `. Pick a second topic to connect.`]
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--sm`,
    onClick: w,
    children: [(0, b.jsx)(Vg, {
     size: 13
    }), `Cancel`]
   })]
  }) : null]
 })
}

function rb() {
 return (0, b.jsx)(nb, {})
}
var ib = [{
  key: `mindmap`,
  name: `Mind Map`
 }, {
  key: `logic`,
  name: `Logic Chart (Right)`
 }, {
  key: `logicLeft`,
  name: `Logic Chart (Left)`
 }, {
  key: `org`,
  name: `Org Chart`
 }, {
  key: `treeTable`,
  name: `Tree Table`
 }, {
  key: `timeline`,
  name: `Timeline`
 }, {
  key: `fishbone`,
  name: `Fishbone`
 }, {
  key: `brace`,
  name: `Brace Map`
 }],
 ab = [`underline`, `rounded`, `rect`, `pill`, `ellipse`, `diamond`, `parallelogram`, `hexagon`, `octagon`, `shield`, `bracket`, `circle`],
 ob = Object.fromEntries(kv.filter(e => e.key !== `auto`).map(e => [e.key, e.label])),
 sb = ab.map(e => ({
  key: e,
  name: ob[e] ?? e
 })),
 cb = {
  tapered: `Tapered`,
  curved: `Curved`,
  straight: `Straight`,
  angled: `Angled`
 },
 lb = [{
  key: `bold`,
  name: `Bold`,
  Icon: Ym
 }, {
  key: `italic`,
  name: `Italic`,
  Icon: Gm
 }, {
  key: `underline`,
  name: `Underline`,
  Icon: kg
 }, {
  key: `strike`,
  name: `Strikethrough`,
  Icon: sg
 }],
 ub = [{
  key: `left`,
  name: `Align left`,
  Icon: _g
 }, {
  key: `center`,
  name: `Align center`,
  Icon: pg
 }, {
  key: `right`,
  name: `Align right`,
  Icon: hg
 }],
 db = [10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32],
 fb = [1, 2, 3, 4, 5, 6, 7, 8],
 pb = [{
  key: `autoBalance`,
  name: `Auto balance`
 }, {
  key: `freePosition`,
  name: `Branch free positioning`
 }, {
  key: `flexibleFloating`,
  name: `Flexible floating topic`
 }];

function mb(e) {
 let t = e?.preview ?? {},
  n = e?.swatches ?? [],
  r = [e?.accent ?? `#2f6bff`, n[2] ?? `#12a150`, n[0] ?? `#8a919d`, n[1] ?? `#2f6bff`],
  i = Array.isArray(t.branchColors) && t.branchColors.length ? [0, 1, 2, 3].map(e => t.branchColors[e % t.branchColors.length]) : r;
 return {
  rootFill: t.rootFill ?? e?.root?.fill ?? r[0],
  surface: t.surface ?? e?.main?.fill ?? e?.sub?.fill ?? (e?.dark ? `#161a21` : `#ffffff`),
  branchColors: i
 }
}

function hb({
 theme: e
}) {
 let {
  rootFill: t,
  surface: n,
  branchColors: r
 } = mb(e), [i, a, o, s] = r;
 return (0, b.jsxs)(`svg`, {
  className: `xm-rp-theme-svg`,
  viewBox: `0 0 160 100`,
  preserveAspectRatio: `xMidYMid meet`,
  "aria-hidden": `true`,
  focusable: `false`,
  children: [(0, b.jsx)(`rect`, {
   x: `0`,
   y: `0`,
   width: `160`,
   height: `100`,
   fill: e.canvas ?? n
  }), (0, b.jsxs)(`g`, {
   fill: `none`,
   strokeWidth: `1.4`,
   strokeLinecap: `round`,
   children: [(0, b.jsx)(`path`, {
    d: `M62 46C54 46 50 31 41 31`,
    stroke: i
   }), (0, b.jsx)(`path`, {
    d: `M62 55C54 55 50 70 41 70`,
    stroke: a
   }), (0, b.jsx)(`path`, {
    d: `M98 46C106 46 110 31 119 31`,
    stroke: o
   }), (0, b.jsx)(`path`, {
    d: `M98 55C106 55 110 70 119 70`,
    stroke: s
   })]
  }), (0, b.jsx)(`rect`, {
   x: `62`,
   y: `43`,
   width: `36`,
   height: `15`,
   rx: `4`,
   fill: t
  }), (0, b.jsxs)(`g`, {
   strokeWidth: `1.2`,
   children: [(0, b.jsx)(`rect`, {
    x: `13`,
    y: `25`,
    width: `28`,
    height: `12`,
    rx: `3.5`,
    fill: n,
    stroke: i
   }), (0, b.jsx)(`rect`, {
    x: `13`,
    y: `64`,
    width: `28`,
    height: `12`,
    rx: `3.5`,
    fill: n,
    stroke: a
   }), (0, b.jsx)(`rect`, {
    x: `119`,
    y: `25`,
    width: `28`,
    height: `12`,
    rx: `3.5`,
    fill: n,
    stroke: o
   }), (0, b.jsx)(`rect`, {
    x: `119`,
    y: `64`,
    width: `28`,
    height: `12`,
    rx: `3.5`,
    fill: n,
    stroke: s
   })]
  })]
 })
}

function gb(e) {
 switch (e) {
  case `logic`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `1`,
     y: `5.4`,
     width: `4.4`,
     height: `5.2`,
     rx: `1.1`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M5.4 8H8.4M8.4 3.4V12.6M8.4 3.4H11M8.4 8H11M8.4 12.6H11`
    }), (0, b.jsx)(`rect`, {
     x: `11`,
     y: `1.9`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `11`,
     y: `6.5`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `11`,
     y: `11.1`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    })]
   });
  case `logicLeft`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `12.6`,
     y: `5.4`,
     width: `4.4`,
     height: `5.2`,
     rx: `1.1`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M12.6 8H9.6M9.6 3.4V12.6M9.6 3.4H7M9.6 8H7M9.6 12.6H7`
    }), (0, b.jsx)(`rect`, {
     x: `1`,
     y: `1.9`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `1`,
     y: `6.5`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `1`,
     y: `11.1`,
     width: `6`,
     height: `3`,
     rx: `0.9`
    })]
   });
  case `org`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `6.4`,
     y: `1.3`,
     width: `5.2`,
     height: `3.4`,
     rx: `0.9`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M9 4.7V7.2M2.4 7.2H15.6M4.4 7.2V11.6M9 7.2V11.6M13.6 7.2V11.6`
    }), (0, b.jsx)(`rect`, {
     x: `2`,
     y: `11.6`,
     width: `4.8`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `6.6`,
     y: `11.6`,
     width: `4.8`,
     height: `3`,
     rx: `0.9`
    }), (0, b.jsx)(`rect`, {
     x: `11.2`,
     y: `11.6`,
     width: `4.8`,
     height: `3`,
     rx: `0.9`
    })]
   });
  case `treeTable`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `0.8`,
     y: `5.6`,
     width: `4.4`,
     height: `4.8`,
     rx: `1`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M5.2 8H7.6`
    }), (0, b.jsx)(`rect`, {
     x: `7.6`,
     y: `2`,
     width: `9.6`,
     height: `12`,
     rx: `1.2`
    }), (0, b.jsx)(`path`, {
     d: `M7.6 6H17.2M7.6 10H17.2M12.4 2V14`
    })]
   });
  case `timeline`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`path`, {
     d: `M1 8H17`
    }), (0, b.jsx)(`circle`, {
     cx: `4.6`,
     cy: `8`,
     r: `1.3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`circle`, {
     cx: `9`,
     cy: `8`,
     r: `1.3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`circle`, {
     cx: `13.4`,
     cy: `8`,
     r: `1.3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M4.6 8V4.2M9 8V11.8M13.4 8V4.2`
    }), (0, b.jsx)(`rect`, {
     x: `2.4`,
     y: `1.6`,
     width: `4.4`,
     height: `2.6`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `6.8`,
     y: `11.8`,
     width: `4.4`,
     height: `2.6`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `11.2`,
     y: `1.6`,
     width: `4.4`,
     height: `2.6`,
     rx: `0.8`
    })]
   });
  case `fishbone`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`path`, {
     d: `M1 8H13.6`
    }), (0, b.jsx)(`rect`, {
     x: `13.6`,
     y: `5.4`,
     width: `3.6`,
     height: `5.2`,
     rx: `1`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M5.4 8L3.2 3.6M5.4 8L3.2 12.4M9.8 8L7.6 3.6M9.8 8L7.6 12.4`
    })]
   });
  case `brace`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `0.8`,
     y: `5.8`,
     width: `4`,
     height: `4.4`,
     rx: `0.9`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M4.8 8H7.4`
    }), (0, b.jsx)(`path`, {
     d: `M10.8 1.6H9.6C7.4 1.6 8.2 7 6.6 7.7C8.2 8.4 7.4 14.4 9.6 14.4H10.8M10.8 1.6H17M10.8 8H17M10.8 14.4H17`
    }), (0, b.jsx)(`rect`, {
     x: `12.4`,
     y: `1.2`,
     width: `4.6`,
     height: `2.8`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `12.4`,
     y: `6.6`,
     width: `4.6`,
     height: `2.8`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `12.4`,
     y: `12`,
     width: `4.6`,
     height: `2.8`,
     rx: `0.8`
    })]
   });
  default:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `6.6`,
     y: `5.6`,
     width: `4.8`,
     height: `4.8`,
     rx: `1.1`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M6.6 6.6C4.6 6.6 5 3.2 3.2 3.2M6.6 9.4C4.6 9.4 5 12.8 3.2 12.8`
    }), (0, b.jsx)(`path`, {
     d: `M11.4 6.6C13.4 6.6 13 3.2 14.8 3.2M11.4 9.4C13.4 9.4 13 12.8 14.8 12.8`
    }), (0, b.jsx)(`rect`, {
     x: `0.8`,
     y: `1.8`,
     width: `3.6`,
     height: `2.8`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `0.8`,
     y: `11.4`,
     width: `3.6`,
     height: `2.8`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `13.6`,
     y: `1.8`,
     width: `3.6`,
     height: `2.8`,
     rx: `0.8`
    }), (0, b.jsx)(`rect`, {
     x: `13.6`,
     y: `11.4`,
     width: `3.6`,
     height: `2.8`,
     rx: `0.8`
    })]
   })
 }
}

function _b(e) {
 switch (e) {
  case `rounded`:
   return (0, b.jsx)(`rect`, {
    x: `3`,
    y: `4.5`,
    width: `24`,
    height: `13`,
    rx: `4`
   });
  case `rect`:
   return (0, b.jsx)(`rect`, {
    x: `3`,
    y: `4.5`,
    width: `24`,
    height: `13`,
    rx: `1.5`
   });
  case `pill`:
   return (0, b.jsx)(`rect`, {
    x: `3`,
    y: `5.5`,
    width: `24`,
    height: `11`,
    rx: `5.5`
   });
  case `ellipse`:
   return (0, b.jsx)(`ellipse`, {
    cx: `15`,
    cy: `11`,
    rx: `12`,
    ry: `6.5`
   });
  case `diamond`:
   return (0, b.jsx)(`polygon`, {
    points: `15,3 27,11 15,19 3,11`
   });
  case `parallelogram`:
   return (0, b.jsx)(`polygon`, {
    points: `8,4 27,4 22,18 3,18`
   });
  case `hexagon`:
   return (0, b.jsx)(`polygon`, {
    points: `8,4 22,4 27,11 22,18 8,18 3,11`
   });
  case `octagon`:
   return (0, b.jsx)(`polygon`, {
    points: `8.5,3.5 21.5,3.5 26.5,8.5 26.5,13.5 21.5,18.5 8.5,18.5 3.5,13.5 3.5,8.5`
   });
  case `shield`:
   return (0, b.jsx)(`path`, {
    d: `M15 3L26 6.2V12C26 16 20.5 18.2 15 19.5C9.5 18.2 4 16 4 12V6.2Z`
   });
  case `bracket`:
   return (0, b.jsx)(`path`, {
    d: `M9 4H5.5V18H9M5.5 11H26`
   });
  case `circle`:
   return (0, b.jsx)(`circle`, {
    cx: `15`,
    cy: `11`,
    r: `8`
   });
  default:
   return (0, b.jsx)(`path`, {
    d: `M3 11H27`,
    strokeWidth: `2.4`
   })
 }
}

function vb(e) {
 switch (e) {
  case `straight`:
   return (0, b.jsx)(`path`, {
    d: `M2 12L26 4`
   });
  case `angled`:
   return (0, b.jsx)(`path`, {
    d: `M2 12H13L17 4H26`
   });
  case `curved`:
   return (0, b.jsx)(`path`, {
    d: `M2 12C10 12 18 4 26 4`
   });
  default:
   return (0, b.jsx)(`path`, {
    d: `M2 4C10 4 20 7 26 8C20 9 10 12 2 12Z`,
    fill: `currentColor`,
    stroke: `none`
   })
 }
}

function yb({
 label: e,
 action: t,
 children: n
}) {
 return (0, b.jsxs)(`section`, {
  className: `xm-rp-section`,
  children: [(0, b.jsxs)(`div`, {
   className: `xm-rp-section-head`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-section-label`,
    children: e
   }), t]
  }), n]
 })
}

function bb() {
 let e = $(e => e.rightPanel),
  t = $(e => e.selectedId),
  n = $(e => e.nodes),
  r = $(e => e.theme),
  i = $(e => e.palette),
  a = $(e => e.lineStyle),
  o = $(e => e.backgroundColor),
  s = $(e => e.layoutFlags),
  c = $(e => e.cjkFont),
  l = $(e => e.mapStructure),
  u = $(e => e.setRightPanel),
  d = $(e => e.setTheme),
  f = $(e => e.setBackground),
  p = $(e => e.setPaletteMode),
  m = $(e => e.setLineStyle),
  h = $(e => e.setLayoutFlag),
  g = $(e => e.setCjkFont),
  v = $(e => e.applyTopicPreset),
  y = $(e => e.setNodeShape),
  x = $(e => e.setNodeStyle),
  S = $(e => e.setNodeTextStyle),
  C = $(e => e.setNodeWidth),
  [w, T] = (0, _.useState)(null),
  E = (0, _.useRef)(null),
  D = (0, _.useRef)(null);
 if ((0, _.useEffect)(() => {
   if (!w) return;
   let e = e => {
     E.current?.contains(e.target) || T(null)
    },
    t = e => {
     e.key === `Escape` && T(null)
    };
   return document.addEventListener(`pointerdown`, e), document.addEventListener(`keydown`, t), () => {
    document.removeEventListener(`pointerdown`, e), document.removeEventListener(`keydown`, t)
   }
  }, [w]), (0, _.useEffect)(() => {
   T(null)
  }, [e, t]), (0, _.useEffect)(() => {
   let e = D.current;
   e && (e.scrollTop = 0)
  }, [e]), !e) return null;
 let O = e === `map` ? `map` : `style`,
  k = iy(r),
  A = n?.find(e => e.id === t) ?? null,
  j = A?.style ?? {},
  M = A?.overrides ?? {},
  N = D_[A?.preset && D_[A.preset] ? A.preset : `default`] ?? D_.default,
  P = N?.fill,
  F = N?.border,
  ee = A?.shape ?? `auto`,
  te = ee === `auto` ? {
   key: `auto`,
   name: `Theme default`
  } : sb.find(e => e.key === ee) ?? sb.find(e => e.key === `underline`) ?? sb[0],
  ne = ib.find(e => e.key === l) ?? ib[0],
  re = C_.includes(a) ? a : C_[0],
  I = i?.mode === `single` ? `single` : `multi`,
  ie = s ?? {},
  L = c ?? `system`,
  ae = j_.some(e => e.key === L),
  oe = Number(j.fontSize) || 14,
  se = [`left`, `center`, `right`].includes(j.align) ? j.align : `left`,
  ce = M.text ?? `#1E2126`,
  le = M.fill ?? P ?? `#FFFFFF`,
  ue = M.border ?? F ?? `#D9DDE3`,
  de = M.line ?? A?.color ?? k.accent ?? `#2F6BFF`,
  fe = Number(j.branchWidth) || 1,
  R = A?.widthOverride ?? ``,
  z = !!(M.fill || P),
  pe = !!(M.border || F),
  me = () => {
   A && x?.(t, z ? {
    fill: null
   } : {
    fill: le
   })
  },
  he = () => {
   A && x?.(t, pe ? {
    border: null
   } : {
    border: ue
   })
  },
  ge = e => {
   let n = e.target.value;
   if (n === ``) {
    C?.(t, null);
    return
   }
   let r = Number(n);
   Number.isFinite(r) && C?.(t, Math.max(72, Math.min(680, Math.round(r))))
  },
  _e = () => {
   T(null), window.dispatchEvent(new CustomEvent(`xm:open-structures`))
  },
  ve = () => {
   T(null), window.dispatchEvent(new CustomEvent(`xm:open-themes`))
  },
  ye = (0, b.jsx)(`div`, {
   className: `xm-rp-seg xm-rp-seg--icons`,
   role: `group`,
   "aria-label": `Branch line style`,
   children: C_.map(e => {
    let t = re === e;
    return (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-rp-seg-btn${t?` is-active`:``}`,
     title: `${cb[e]??e} line`,
     "aria-label": `${cb[e]??e} line style`,
     "aria-pressed": t,
     onClick: () => m?.(e),
     children: (0, b.jsx)(`svg`, {
      className: `xm-rp-line-glyph`,
      viewBox: `0 0 28 16`,
      width: `24`,
      height: `14`,
      "aria-hidden": `true`,
      focusable: `false`,
      children: (0, b.jsx)(`g`, {
       fill: `none`,
       stroke: `currentColor`,
       strokeWidth: `1.6`,
       strokeLinecap: `round`,
       strokeLinejoin: `round`,
       children: vb(e)
      })
     })
    }, e)
   })
  });
 return (0, b.jsxs)(`aside`, {
  className: `xm-rp`,
  "aria-label": `Style and map panel`,
  children: [(0, b.jsxs)(`header`, {
   className: `xm-rp-head`,
   children: [(0, b.jsxs)(`div`, {
    className: `xm-rp-tabs`,
    role: `tablist`,
    "aria-label": `Panel tabs`,
    children: [(0, b.jsx)(`button`, {
     id: `xm-rp-tab-style`,
     type: `button`,
     role: `tab`,
     "aria-selected": O === `style`,
     "aria-controls": `xm-rp-body`,
     className: `xm-rp-tab${O===`style`?` is-active`:``}`,
     title: `Style selected topic`,
     onClick: () => u?.(`style`),
     children: `Style`
    }), (0, b.jsx)(`button`, {
     id: `xm-rp-tab-map`,
     type: `button`,
     role: `tab`,
     "aria-selected": O === `map`,
     "aria-controls": `xm-rp-body`,
     className: `xm-rp-tab${O===`map`?` is-active`:``}`,
     title: `Map-wide settings`,
     onClick: () => u?.(`map`),
     children: `Map`
    })]
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-rp-close`,
    title: `Close panel`,
    "aria-label": `Close panel`,
    onClick: () => u?.(null),
    children: (0, b.jsx)(xh, {
     size: 16,
     "aria-hidden": `true`
    })
   })]
  }), (0, b.jsx)(`div`, {
   id: `xm-rp-body`,
   ref: D,
   role: `tabpanel`,
   "aria-labelledby": `xm-rp-tab-${O}`,
   className: `xm-scroll xm-rp-body`,
   children: O === `style` ? A ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsxs)(yb, {
     label: `Style`,
     children: [(0, b.jsxs)(`div`, {
      className: `xm-rp-preset`,
      ref: w === `preset` ? E : null,
      children: [(0, b.jsxs)(`button`, {
       type: `button`,
       className: `xm-rp-preset-btn${w===`preset`?` is-open`:``}`,
       title: `Topic preset`,
       "aria-label": `Topic preset: ${N.name}`,
       "aria-haspopup": `menu`,
       "aria-expanded": w === `preset`,
       onClick: () => T(w === `preset` ? null : `preset`),
       children: [(0, b.jsx)(`span`, {
        className: `xm-rp-preset-swatch`,
        style: {
         background: N.swatch
        },
        "aria-hidden": `true`
       }), (0, b.jsx)(`span`, {
        className: `xm-rp-preset-name`,
        children: N.name
       }), (0, b.jsx)(Up, {
        size: 14,
        className: `xm-rp-chevron`,
        "aria-hidden": `true`
       })]
      }), w === `preset` && (0, b.jsx)(`div`, {
       className: `xm-popover xm-rp-preset-menu`,
       role: `menu`,
       "aria-label": `Topic presets`,
       children: T_.map(e => {
        let n = e.key === N.key;
        return (0, b.jsxs)(`button`, {
         type: `button`,
         role: `menuitemradio`,
         "aria-checked": n,
         className: `xm-rp-menu-item${n?` is-active`:``}`,
         title: e.name,
         onClick: () => {
          v?.(t, e.key), T(null)
         },
         children: [(0, b.jsx)(`span`, {
          className: `xm-rp-preset-swatch`,
          style: {
           background: e.swatch
          },
          "aria-hidden": `true`
         }), (0, b.jsx)(`span`, {
          className: `xm-rp-menu-name`,
          children: e.name
         }), n && (0, b.jsx)(Vp, {
          size: 13,
          "aria-hidden": `true`
         })]
        }, e.key)
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Structure`
      }), (0, b.jsxs)(`button`, {
       type: `button`,
       className: `xm-rp-value`,
       title: `Change map structure`,
       "aria-label": `Map structure: ${ne.name}. Open structure gallery`,
       "aria-haspopup": `dialog`,
       onClick: _e,
       children: [(0, b.jsx)(`svg`, {
        className: `xm-rp-mini-glyph`,
        viewBox: `0 0 18 16`,
        width: `20`,
        height: `16`,
        "aria-hidden": `true`,
        focusable: `false`,
        children: (0, b.jsx)(`g`, {
         fill: `none`,
         stroke: `currentColor`,
         strokeWidth: `1.1`,
         strokeLinecap: `round`,
         strokeLinejoin: `round`,
         children: gb(ne.key)
        })
       }), (0, b.jsx)(`span`, {
        className: `xm-rp-value-label`,
        children: ne.name
       }), (0, b.jsx)(Up, {
        size: 13,
        className: `xm-rp-chevron`,
        "aria-hidden": `true`
       })]
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Shape`
      }), (0, b.jsxs)(`div`, {
       className: `xm-rp-menu-wrap`,
       ref: w === `shape` ? E : null,
       children: [(0, b.jsxs)(`button`, {
        type: `button`,
        className: `xm-rp-value xm-rp-value--shape${w===`shape`?` is-open`:``}`,
        title: `Choose topic shape`,
        "aria-label": `Topic shape: ${te.name}`,
        "aria-haspopup": `dialog`,
        "aria-expanded": w === `shape`,
        onClick: () => T(w === `shape` ? null : `shape`),
        children: [(0, b.jsx)(`svg`, {
         className: `xm-rp-shape-glyph`,
         viewBox: `0 0 30 22`,
         width: `26`,
         height: `18`,
         "aria-hidden": `true`,
         focusable: `false`,
         children: (0, b.jsx)(`g`, {
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: _b(te.key)
         })
        }), (0, b.jsx)(`span`, {
         className: `xm-rp-value-label`,
         children: te.name
        }), (0, b.jsx)(Up, {
         size: 13,
         className: `xm-rp-chevron`,
         "aria-hidden": `true`
        })]
       }), w === `shape` && (0, b.jsx)(`div`, {
        className: `xm-popover xm-rp-shape-menu`,
        role: `dialog`,
        "aria-label": `Choose topic shape`,
        children: (0, b.jsxs)(`div`, {
         className: `xm-rp-shape-grid`,
         children: [(0, b.jsxs)(`button`, {
          type: `button`,
          className: `xm-rp-shape-item xm-rp-shape-item--wide${ee===`auto`?` is-active`:``}`,
          title: `Theme default`,
          "aria-label": `Theme default shape`,
          "aria-pressed": ee === `auto`,
          onClick: () => {
           y?.(t, `auto`), T(null)
          },
          children: [(0, b.jsx)(`svg`, {
           viewBox: `0 0 30 22`,
           width: `30`,
           height: `22`,
           "aria-hidden": `true`,
           focusable: `false`,
           children: (0, b.jsx)(`g`, {
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.5`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            children: _b(`auto`)
           })
          }), (0, b.jsx)(`span`, {
           className: `xm-rp-shape-name`,
           children: `Theme default`
          })]
         }), sb.map(e => (0, b.jsx)(`button`, {
          type: `button`,
          className: `xm-rp-shape-item${e.key===ee?` is-active`:``}`,
          title: e.name,
          "aria-label": e.name,
          "aria-pressed": e.key === ee,
          onClick: () => {
           y?.(t, e.key), T(null)
          },
          children: (0, b.jsx)(`svg`, {
           viewBox: `0 0 30 22`,
           width: `30`,
           height: `22`,
           "aria-hidden": `true`,
           focusable: `false`,
           children: (0, b.jsx)(`g`, {
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `1.5`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            children: _b(e.key)
           })
          })
         }, e.key))]
        })
       })]
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-rp-check-row`,
      children: [(0, b.jsxs)(`label`, {
       className: `xm-check`,
       children: [(0, b.jsx)(`input`, {
        type: `checkbox`,
        checked: z,
        "aria-label": `Fill`,
        onChange: me
       }), (0, b.jsx)(`span`, {
        className: `xm-check-box`,
        "aria-hidden": `true`,
        children: (0, b.jsx)(Vp, {
         size: 10
        })
       }), (0, b.jsx)(`span`, {
        children: `Fill`
       })]
      }), (0, b.jsx)(`label`, {
       className: `xm-swatch xm-rp-swatch`,
       title: `Fill colour`,
       "aria-label": `Fill colour`,
       children: (0, b.jsx)(`input`, {
        type: `color`,
        value: le,
        "aria-label": `Fill colour`,
        onChange: e => x?.(t, {
         fill: e.target.value
        })
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-rp-check-row`,
      children: [(0, b.jsxs)(`label`, {
       className: `xm-check`,
       children: [(0, b.jsx)(`input`, {
        type: `checkbox`,
        checked: pe,
        "aria-label": `Border`,
        onChange: he
       }), (0, b.jsx)(`span`, {
        className: `xm-check-box`,
        "aria-hidden": `true`,
        children: (0, b.jsx)(Vp, {
         size: 10
        })
       }), (0, b.jsx)(`span`, {
        children: `Border`
       })]
      }), (0, b.jsx)(`label`, {
       className: `xm-swatch xm-rp-swatch`,
       title: `Border colour`,
       "aria-label": `Border colour`,
       children: (0, b.jsx)(`input`, {
        type: `color`,
        value: ue,
        "aria-label": `Border colour`,
        onChange: e => x?.(t, {
         border: e.target.value
        })
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`label`, {
       className: `xm-row-label`,
       htmlFor: `xm-rp-width`,
       children: `Width`
      }), (0, b.jsx)(`input`, {
       id: `xm-rp-width`,
       className: `xm-input xm-rp-num`,
       type: `number`,
       min: `72`,
       max: `680`,
       step: `1`,
       value: R,
       placeholder: `Auto`,
       title: `Topic width in pixels. Leave empty for automatic width.`,
       "aria-label": `Topic width in pixels`,
       onChange: ge
      })]
     })]
    }), (0, b.jsxs)(yb, {
     label: `Text`,
     children: [(0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Size`
      }), (0, b.jsxs)(`div`, {
       className: `xm-rp-inline`,
       children: [(0, b.jsxs)(`select`, {
        className: `xm-select xm-rp-select`,
        value: oe,
        title: `Font size`,
        "aria-label": `Font size`,
        onChange: e => S?.(t, {
         fontSize: Number(e.target.value)
        }),
        children: [db.map(e => (0, b.jsxs)(`option`, {
         value: e,
         children: [e, ` px`]
        }, e)), !db.includes(oe) && (0, b.jsxs)(`option`, {
         value: oe,
         children: [oe, ` px`]
        })]
       }), (0, b.jsx)(`label`, {
        className: `xm-swatch xm-rp-swatch`,
        title: `Text colour`,
        "aria-label": `Text colour`,
        children: (0, b.jsx)(`input`, {
         type: `color`,
         value: ce,
         "aria-label": `Text colour`,
         onChange: e => x?.(t, {
          text: e.target.value
         })
        })
       })]
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Format`
      }), (0, b.jsx)(`div`, {
       className: `xm-rp-tools`,
       role: `group`,
       "aria-label": `Text formatting`,
       children: lb.map(({
        key: e,
        name: n,
        Icon: r
       }) => {
        let i = !!j[e];
        return (0, b.jsx)(`button`, {
         type: `button`,
         className: `xm-rp-tool${i?` is-active`:``}`,
         title: n,
         "aria-label": n,
         "aria-pressed": i,
         onClick: () => S?.(t, {
          [e]: !i
         }),
         children: (0, b.jsx)(r, {
          size: 16,
          "aria-hidden": `true`
         })
        }, e)
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Align`
      }), (0, b.jsx)(`div`, {
       className: `xm-rp-seg`,
       role: `group`,
       "aria-label": `Text alignment`,
       children: ub.map(({
        key: e,
        name: n,
        Icon: r
       }) => {
        let i = se === e;
        return (0, b.jsx)(`button`, {
         type: `button`,
         className: `xm-rp-seg-btn${i?` is-active`:``}`,
         title: n,
         "aria-label": n,
         "aria-pressed": i,
         onClick: () => S?.(t, {
          align: e
         }),
         children: (0, b.jsx)(r, {
          size: 14,
          "aria-hidden": `true`
         })
        }, e)
       })
      })]
     })]
    }), (0, b.jsxs)(yb, {
     label: `Branch`,
     children: [(0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Colour`
      }), (0, b.jsx)(`label`, {
       className: `xm-swatch xm-rp-swatch`,
       title: `Branch colour`,
       "aria-label": `Branch colour`,
       children: (0, b.jsx)(`input`, {
        type: `color`,
        value: de,
        "aria-label": `Branch colour`,
        onChange: e => x?.(t, {
         line: e.target.value
        }, {
         subtree: !0
        })
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`label`, {
       className: `xm-row-label`,
       htmlFor: `xm-rp-line-width`,
       children: `Line width`
      }), (0, b.jsx)(`select`, {
       id: `xm-rp-line-width`,
       className: `xm-select xm-rp-select xm-rp-select--narrow`,
       value: fe,
       title: `Branch line width`,
       "aria-label": `Branch line width`,
       onChange: e => S?.(t, {
        branchWidth: Number(e.target.value)
       }),
       children: fb.map(e => (0, b.jsxs)(`option`, {
        value: e,
        children: [e, ` px`]
       }, e))
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Line style`
      }), ye]
     })]
    })]
   }) : (0, b.jsxs)(`div`, {
    className: `xm-rp-hint`,
    role: `status`,
    children: [(0, b.jsx)(Um, {
     size: 15,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     children: `Select a topic to style it.`
    })]
   }) : (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsx)(yb, {
     label: `Themes`,
     action: (0, b.jsx)(`button`, {
      type: `button`,
      className: `xm-rp-link`,
      title: `Browse all themes`,
      "aria-label": `Browse all themes`,
      onClick: ve,
      children: `Browse all`
     }),
     children: (0, b.jsx)(`div`, {
      className: `xm-rp-themes`,
      children: ty.slice(0, 8).map(e => {
       let t = e.id === r;
       return (0, b.jsxs)(`button`, {
        type: `button`,
        className: `xm-rp-theme${t?` is-active`:``}`,
        title: e.description ?? e.name,
        "aria-label": `Apply ${e.name} theme`,
        "aria-pressed": t,
        onClick: () => d?.(e.id),
        children: [(0, b.jsxs)(`span`, {
         className: `xm-rp-theme-thumb`,
         children: [(0, b.jsx)(hb, {
          theme: e
         }), t && (0, b.jsx)(`span`, {
          className: `xm-rp-theme-badge`,
          "aria-hidden": `true`,
          children: (0, b.jsx)(Vp, {
           size: 10
          })
         })]
        }), (0, b.jsx)(`span`, {
         className: `xm-rp-theme-name`,
         children: e.name
        })]
       }, e.id)
      })
     })
    }), (0, b.jsx)(yb, {
     label: `Background`,
     children: (0, b.jsxs)(`div`, {
      className: `xm-row xm-row--between xm-rp-row`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-row-label`,
       children: `Canvas`
      }), (0, b.jsxs)(`div`, {
       className: `xm-rp-inline`,
       children: [(0, b.jsx)(`label`, {
        className: `xm-swatch xm-rp-swatch`,
        title: `Background colour`,
        "aria-label": `Background colour`,
        children: (0, b.jsx)(`input`, {
         type: `color`,
         value: o ?? k.canvas ?? `#ffffff`,
         "aria-label": `Background colour`,
         onChange: e => f?.(e.target.value)
        })
       }), (0, b.jsx)(`button`, {
        type: `button`,
        className: `xm-rp-reset`,
        title: `Reset background to the theme default`,
        "aria-label": `Reset background colour`,
        disabled: !o,
        onClick: () => f?.(null),
        children: `Reset`
       })]
      })]
     })
    }), (0, b.jsx)(yb, {
     label: `Branch colour`,
     children: (0, b.jsxs)(`div`, {
      className: `xm-rp-seg`,
      role: `group`,
      "aria-label": `Branch colour mode`,
      children: [(0, b.jsx)(`button`, {
       type: `button`,
       className: `xm-rp-seg-btn${I===`multi`?` is-active`:``}`,
       title: `Every main branch gets its own colour`,
       "aria-pressed": I === `multi`,
       onClick: () => p?.(`multi`),
       children: `Multi-branch`
      }), (0, b.jsx)(`button`, {
       type: `button`,
       className: `xm-rp-seg-btn${I===`single`?` is-active`:``}`,
       title: `All branches share one colour`,
       "aria-pressed": I === `single`,
       onClick: () => p?.(`single`),
       children: `Single colour`
      })]
     })
    }), (0, b.jsx)(yb, {
     label: `Line style`,
     children: ye
    }), (0, b.jsx)(yb, {
     label: `Advanced layout`,
     children: (0, b.jsx)(`div`, {
      className: `xm-rp-checks`,
      children: pb.map(e => (0, b.jsxs)(`label`, {
       className: `xm-check xm-rp-check-line`,
       children: [(0, b.jsx)(`input`, {
        type: `checkbox`,
        checked: !!(ie[e.key] ?? k_[e.key]),
        "aria-label": e.name,
        onChange: t => h?.(e.key, t.target.checked)
       }), (0, b.jsx)(`span`, {
        className: `xm-check-box`,
        "aria-hidden": `true`,
        children: (0, b.jsx)(Vp, {
         size: 10
        })
       }), (0, b.jsx)(`span`, {
        className: `xm-rp-check-label`,
        children: e.name
       })]
      }, e.key))
     })
    }), (0, b.jsx)(yb, {
     label: `CJK font`,
     children: (0, b.jsxs)(`select`, {
      className: `xm-select xm-rp-select-full`,
      value: L,
      title: `Font used for Chinese, Japanese and Korean text`,
      "aria-label": `CJK font`,
      onChange: e => g?.(e.target.value),
      children: [j_.map(e => (0, b.jsx)(`option`, {
       value: e.key,
       children: e.key === `system` ? `System` : e.name
      }, e.key)), !ae && (0, b.jsx)(`option`, {
       value: L,
       children: L
      })]
     })
    })]
   })
  })]
 })
}
var xb = `a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])`;

function Sb(e) {
 return e ? Array.from(e.querySelectorAll(xb)).filter(e => e.getClientRects().length > 0) : []
}

function Cb({
 open: e,
 title: t,
 description: n,
 onClose: r,
 children: i,
 footer: a,
 width: o = 520,
 className: s = ``
}) {
 let c = (0, _.useRef)(null),
  l = (0, _.useId)(),
  u = (0, _.useId)(),
  d = (0, _.useRef)(r);
 if ((0, _.useEffect)(() => {
   d.current = r
  }, [r]), (0, _.useEffect)(() => {
   if (!e) return;
   let t = c.current,
    n = document.activeElement,
    r = document.body.style.overflow;
   document.body.style.overflow = `hidden`;
   let i = window.requestAnimationFrame(() => {
     if (!t) return;
     let e = document.activeElement;
     e instanceof HTMLElement && e !== t && t.contains(e) && e.getClientRects().length > 0 || (Sb(t)[0] ?? t).focus()
    }),
    a = e => {
     if (e.key === `Escape`) {
      e.preventDefault(), e.stopPropagation(), d.current?.();
      return
     }
     if (e.key !== `Tab`) return;
     let n = Sb(t);
     if (!n.length) {
      e.preventDefault(), t?.focus();
      return
     }
     let r = n[0],
      i = n[n.length - 1],
      a = document.activeElement,
      o = a !== t && !!t?.contains(a);
     e.shiftKey ? o && a !== r || (e.preventDefault(), i.focus()) : o && a !== i || (e.preventDefault(), r.focus())
    };
   return document.addEventListener(`keydown`, a), () => {
    window.cancelAnimationFrame(i), document.removeEventListener(`keydown`, a), document.body.style.overflow = r, n instanceof HTMLElement && n.isConnected && n.focus()
   }
  }, [e]), !e) return null;
 let f = Number(o),
  p = Number.isFinite(f) && f > 0 ? Math.round(f) : 520;
 return (0, b.jsx)(`div`, {
  className: `xm-modal-overlay`,
  onClick: e => {
   e.target === e.currentTarget && d.current?.()
  },
  children: (0, b.jsxs)(`div`, {
   ref: c,
   role: `dialog`,
   "aria-modal": `true`,
   "aria-labelledby": t ? l : void 0,
   "aria-label": t ? void 0 : `Dialog`,
   "aria-describedby": n ? u : void 0,
   tabIndex: -1,
   className: `xm-modal ${s}`.trim(),
   style: {
    "--xm-modal-w": `${p}px`
   },
   children: [(0, b.jsxs)(`header`, {
    className: `xm-modal-head`,
    children: [(0, b.jsxs)(`div`, {
     className: `xm-modal-heading`,
     children: [t ? (0, b.jsx)(`h2`, {
      id: l,
      className: `xm-modal-title`,
      children: t
     }) : null, n ? (0, b.jsx)(`p`, {
      id: u,
      className: `xm-modal-desc`,
      children: n
     }) : null]
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-modal-close`,
     onClick: () => d.current?.(),
     "aria-label": `Close dialog`,
     title: `Close dialog`,
     children: (0, b.jsx)(Vg, {
      size: 16,
      "aria-hidden": `true`
     })
    })]
   }), (0, b.jsx)(`div`, {
    className: `xm-modal-body xm-scroll`,
    children: i
   }), a ? (0, b.jsx)(`footer`, {
    className: `xm-modal-footer`,
    children: a
   }) : null]
  })
 })
}

function wb(e) {
 let t = e?.preview ?? {},
  n = e?.swatches ?? [],
  r = [e?.accent ?? `#2f6bff`, n[2] ?? `#12a150`, n[0] ?? `#8a919d`, n[1] ?? `#2f6bff`],
  i = Array.isArray(t.branchColors) && t.branchColors.length ? [0, 1, 2, 3].map(e => t.branchColors[e % t.branchColors.length]) : r;
 return {
  rootFill: t.rootFill ?? e?.root?.fill ?? r[0],
  surface: t.surface ?? e?.main?.fill ?? e?.sub?.fill ?? (e?.dark ? `#161a21` : `#ffffff`),
  branchColors: i
 }
}

function Tb({
 theme: e
}) {
 let {
  rootFill: t,
  surface: n,
  branchColors: r
 } = wb(e), [i, a, o, s] = r, c = e.canvas ?? n;
 return (0, b.jsxs)(`svg`, {
  className: `xm-tg-svg`,
  viewBox: `0 0 200 150`,
  preserveAspectRatio: `xMidYMid meet`,
  "aria-hidden": `true`,
  focusable: `false`,
  children: [(0, b.jsx)(`rect`, {
   x: `0`,
   y: `0`,
   width: `200`,
   height: `150`,
   fill: c
  }), (0, b.jsxs)(`g`, {
   fill: `none`,
   strokeWidth: `1.6`,
   strokeLinecap: `round`,
   opacity: `0.9`,
   children: [(0, b.jsx)(`path`, {
    d: `M76 68C64 68 62 40 70 33`,
    stroke: i
   }), (0, b.jsx)(`path`, {
    d: `M76 82C64 82 62 110 70 117`,
    stroke: a
   }), (0, b.jsx)(`path`, {
    d: `M124 68C136 68 138 40 130 33`,
    stroke: o
   }), (0, b.jsx)(`path`, {
    d: `M124 82C136 82 138 110 130 117`,
    stroke: s
   }), (0, b.jsx)(`path`, {
    d: `M32 30L28 19.5M32 34L28 30.5`,
    stroke: i
   }), (0, b.jsx)(`path`, {
    d: `M32 114L28 103.5M32 118L28 114.5`,
    stroke: a
   }), (0, b.jsx)(`path`, {
    d: `M168 30L172 19.5M168 34L172 30.5`,
    stroke: o
   }), (0, b.jsx)(`path`, {
    d: `M168 114L172 103.5M168 118L172 114.5`,
    stroke: s
   })]
  }), (0, b.jsx)(`g`, {
   strokeWidth: `1.1`,
   children: [{
    x: 6,
    y: 16,
    color: i
   }, {
    x: 6,
    y: 27,
    color: i
   }, {
    x: 6,
    y: 100,
    color: a
   }, {
    x: 6,
    y: 111,
    color: a
   }, {
    x: 172,
    y: 16,
    color: o
   }, {
    x: 172,
    y: 27,
    color: o
   }, {
    x: 172,
    y: 100,
    color: s
   }, {
    x: 172,
    y: 111,
    color: s
   }].map(e => (0, b.jsx)(`rect`, {
    x: e.x,
    y: e.y,
    width: `22`,
    height: `7`,
    rx: `2.4`,
    fill: e.color,
    fillOpacity: `0.24`,
    stroke: e.color,
    strokeOpacity: `0.65`
   }, `${e.x}-${e.y}`))
  }), (0, b.jsx)(`rect`, {
   x: `32`,
   y: `26`,
   width: `38`,
   height: `14`,
   rx: `4.5`,
   fill: i
  }), (0, b.jsx)(`rect`, {
   x: `32`,
   y: `110`,
   width: `38`,
   height: `14`,
   rx: `4.5`,
   fill: a
  }), (0, b.jsx)(`rect`, {
   x: `130`,
   y: `26`,
   width: `38`,
   height: `14`,
   rx: `4.5`,
   fill: o
  }), (0, b.jsx)(`rect`, {
   x: `130`,
   y: `110`,
   width: `38`,
   height: `14`,
   rx: `4.5`,
   fill: s
  }), (0, b.jsx)(`rect`, {
   x: `76`,
   y: `64`,
   width: `48`,
   height: `22`,
   rx: `6.5`,
   fill: t
  }), (0, b.jsx)(`rect`, {
   x: `84`,
   y: `71`,
   width: `32`,
   height: `3`,
   rx: `1.5`,
   fill: n,
   opacity: `0.55`
  }), (0, b.jsx)(`rect`, {
   x: `84`,
   y: `77`,
   width: `20`,
   height: `3`,
   rx: `1.5`,
   fill: n,
   opacity: `0.35`
  })]
 })
}

function Eb({
 open: e,
 onClose: t
}) {
 let n = $(e => e.theme),
  r = $(e => e.setTheme),
  [i, a] = (0, _.useState)(n);
 (0, _.useEffect)(() => {
  e && a($.getState().theme)
 }, [e]);
 let o = ty.find(e => e.id === n) ?? iy(n),
  s = () => {
   n !== i && r?.(i), t?.()
  },
  c = (0, b.jsxs)(`div`, {
   className: `xm-tg-footer`,
   children: [(0, b.jsxs)(`span`, {
    className: `xm-tg-footer-info`,
    children: [o?.name, o?.description ? ` — ${o.description}` : ``]
   }), (0, b.jsxs)(`div`, {
    className: `xm-tg-actions`,
    children: [(0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--solid`,
     title: `Cancel and restore the previous theme`,
     onClick: s,
     children: `Cancel`
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--primary`,
     title: `Apply the ${o?.name??`selected`} theme`,
     onClick: () => {
      t?.()
     },
     children: `Apply`
    })]
   })]
  });
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Themes`,
  description: `Pick a look for your map. Every theme previews instantly.`,
  onClose: s,
  footer: c,
  width: 720,
  children: (0, b.jsx)(`div`, {
   className: `xm-tg-body`,
   children: (0, b.jsx)(`div`, {
    className: `xm-tg-grid`,
    role: `group`,
    "aria-label": `Theme presets`,
    children: ty.map(e => {
     let t = e.id === n;
     return (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-tg-card${t?` is-active`:``}`,
      title: e.description ?? e.name,
      "aria-label": `Apply ${e.name} theme`,
      "aria-pressed": t,
      onClick: () => r?.(e.id),
      children: [(0, b.jsxs)(`span`, {
       className: `xm-tg-thumb`,
       children: [(0, b.jsx)(Tb, {
        theme: e
       }), t && (0, b.jsx)(`span`, {
        className: `xm-tg-check`,
        "aria-hidden": `true`,
        children: (0, b.jsx)(Vp, {
         size: 11
        })
       })]
      }), (0, b.jsx)(`span`, {
       className: `xm-tg-name`,
       children: e.name
      })]
     }, e.id)
    })
   })
  })
 })
}
var Db = [{
 key: `mindmap`,
 name: `Mind Map`,
 description: `Balanced branches radiating from both sides.`
}, {
 key: `logic`,
 name: `Logic Chart (Right)`,
 description: `Topics flow to the right of the root.`
}, {
 key: `logicLeft`,
 name: `Logic Chart (Left)`,
 description: `Topics flow to the left of the root.`
}, {
 key: `org`,
 name: `Org Chart`,
 description: `A top-down hierarchy of owners.`
}, {
 key: `treeTable`,
 name: `Tree Table`,
 description: `Topics arranged as rows and columns.`
}, {
 key: `timeline`,
 name: `Timeline`,
 description: `A chronological sequence of milestones.`
}, {
 key: `fishbone`,
 name: `Fishbone`,
 description: `Cause and effect analysis on a spine.`
}, {
 key: `brace`,
 name: `Brace Map`,
 description: `Parts grouped under a single brace.`
}];

function Ob(e) {
 switch (e) {
  case `logic`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `7`,
     y: `22`,
     width: `21`,
     height: `12`,
     rx: `3.5`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M28 28H46M46 14V42M46 14H56M46 28H56M46 42H56`
    }), (0, b.jsx)(`rect`, {
     x: `56`,
     y: `10.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `56`,
     y: `24.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `56`,
     y: `38.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    })]
   });
  case `logicLeft`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `68`,
     y: `22`,
     width: `21`,
     height: `12`,
     rx: `3.5`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M68 28H50M50 14V42M50 14H40M50 28H40M50 42H40`
    }), (0, b.jsx)(`rect`, {
     x: `8`,
     y: `10.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `8`,
     y: `24.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `8`,
     y: `38.5`,
     width: `32`,
     height: `7`,
     rx: `2`
    })]
   });
  case `org`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `37`,
     y: `5`,
     width: `22`,
     height: `10`,
     rx: `3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M48 15V24M24 24H72M24 24V40M48 24V40M72 24V40`
    }), (0, b.jsx)(`rect`, {
     x: `12`,
     y: `40`,
     width: `24`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `36`,
     y: `40`,
     width: `24`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `60`,
     y: `40`,
     width: `24`,
     height: `9`,
     rx: `2.5`
    })]
   });
  case `treeTable`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `6`,
     y: `22`,
     width: `20`,
     height: `12`,
     rx: `3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M26 28H36`
    }), (0, b.jsx)(`rect`, {
     x: `36`,
     y: `8`,
     width: `54`,
     height: `40`,
     rx: `3`
    }), (0, b.jsx)(`path`, {
     d: `M36 21.3H90M36 34.6H90M62 8V48`
    })]
   });
  case `timeline`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`path`, {
     d: `M8 28H88`
    }), (0, b.jsx)(`circle`, {
     cx: `22`,
     cy: `28`,
     r: `3.2`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`circle`, {
     cx: `48`,
     cy: `28`,
     r: `3.2`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`circle`, {
     cx: `74`,
     cy: `28`,
     r: `3.2`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M22 28V16M48 28V40M74 28V16`
    }), (0, b.jsx)(`rect`, {
     x: `13`,
     y: `8`,
     width: `18`,
     height: `8`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `39`,
     y: `40`,
     width: `18`,
     height: `8`,
     rx: `2`
    }), (0, b.jsx)(`rect`, {
     x: `65`,
     y: `8`,
     width: `18`,
     height: `8`,
     rx: `2`
    })]
   });
  case `fishbone`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`path`, {
     d: `M8 28H74`
    }), (0, b.jsx)(`rect`, {
     x: `74`,
     y: `21`,
     width: `16`,
     height: `14`,
     rx: `3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M26 28L18 14M26 28L18 42M46 28L38 14M46 28L38 42M66 28L58 14M66 28L58 42`
    })]
   });
  case `brace`:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `6`,
     y: `22`,
     width: `18`,
     height: `12`,
     rx: `3`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M24 28H34`
    }), (0, b.jsx)(`path`, {
     d: `M52 10H48C41 10 43 26 34 28C43 30 41 46 48 46H52`
    }), (0, b.jsx)(`path`, {
     d: `M52 10H60M52 28H60M52 46H60`
    }), (0, b.jsx)(`rect`, {
     x: `60`,
     y: `5.5`,
     width: `28`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `60`,
     y: `23.5`,
     width: `28`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `60`,
     y: `41.5`,
     width: `28`,
     height: `9`,
     rx: `2.5`
    })]
   });
  default:
   return (0, b.jsxs)(`g`, {
    children: [(0, b.jsx)(`rect`, {
     x: `37`,
     y: `22.5`,
     width: `22`,
     height: `11`,
     rx: `3.5`,
     fill: `currentColor`,
     stroke: `none`
    }), (0, b.jsx)(`path`, {
     d: `M37 27C31 27 33 14 27 14M37 30C31 30 33 43 27 43M59 27C65 27 63 14 69 14M59 30C65 30 63 43 69 43`
    }), (0, b.jsx)(`rect`, {
     x: `8`,
     y: `9.5`,
     width: `19`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `8`,
     y: `38.5`,
     width: `19`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `69`,
     y: `9.5`,
     width: `19`,
     height: `9`,
     rx: `2.5`
    }), (0, b.jsx)(`rect`, {
     x: `69`,
     y: `38.5`,
     width: `19`,
     height: `9`,
     rx: `2.5`
    })]
   })
 }
}

function kb({
 open: e,
 onClose: t
}) {
 let n = $(e => e.mapStructure),
  r = $(e => e.setMapStructure),
  i = e => {
   r?.(e), t?.()
  };
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Structure`,
  description: `Choose how topics branch out from the central topic.`,
  onClose: t,
  width: 640,
  children: (0, b.jsx)(`div`, {
   className: `xm-sg-body`,
   children: (0, b.jsx)(`div`, {
    className: `xm-sg-grid`,
    role: `group`,
    "aria-label": `Map structures`,
    children: Db.map(e => {
     let t = e.key === n;
     return (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-sg-card${t?` is-active`:``}`,
      title: `${e.name} — ${e.description}`,
      "aria-label": `${e.name}. ${e.description}`,
      "aria-pressed": t,
      onClick: () => i(e.key),
      children: [t && (0, b.jsx)(`span`, {
       className: `xm-sg-check`,
       "aria-hidden": `true`,
       children: (0, b.jsx)(Vp, {
        size: 11
       })
      }), (0, b.jsx)(`span`, {
       className: `xm-sg-glyph`,
       children: (0, b.jsx)(`svg`, {
        viewBox: `0 0 96 56`,
        width: `96`,
        height: `56`,
        "aria-hidden": `true`,
        focusable: `false`,
        children: (0, b.jsx)(`g`, {
         fill: `none`,
         stroke: `currentColor`,
         strokeWidth: `1.6`,
         strokeLinecap: `round`,
         strokeLinejoin: `round`,
         children: Ob(e.key)
        })
       })
      }), (0, b.jsx)(`span`, {
       className: `xm-sg-name`,
       children: e.name
      }), (0, b.jsx)(`span`, {
       className: `xm-sg-desc`,
       children: e.description
      })]
     }, e.key)
    })
   })
  })
 })
}
var Ab = [{
 id: `png`,
 title: `PNG image`,
 hint: `High-resolution image of the current view`,
 icon: Tm,
 tone: `accent`
}, {
 id: `svg`,
 title: `SVG vector`,
 hint: `Editable vector for design tools`,
 icon: Gh,
 tone: `brand`
}, {
 id: `pdf`,
 title: `PDF (beta)`,
 hint: `Print-ready document of the whole map`,
 icon: km,
 tone: `danger`
}, {
 id: `json`,
 title: `JSON backup`,
 hint: `Full map data — re-import it later`,
 icon: Cm,
 tone: `success`
}, {
 id: `md`,
 title: `Markdown`,
 hint: `Outline as a Markdown list`,
 icon: jm,
 tone: `neutral`
}, {
 id: `print`,
 title: `Print`,
 hint: `Open the browser print dialog`,
 icon: jh,
 tone: `muted`
}];

function jb({
 open: e,
 onClose: t
}) {
 if (!e) return null;
 let n = e => {
  window.dispatchEvent(new CustomEvent(`xm:export`, {
   detail: e
  })), t?.()
 };
 return (0, b.jsx)(Cb, {
  open: e,
  onClose: t,
  title: `Export map`,
  description: `Pick a format. Files are generated in your browser and downloaded right away.`,
  width: 560,
  footer: (0, b.jsxs)(`div`, {
   className: `xm-export__footer`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-export__note`,
    children: `The current theme and layout are included.`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--solid`,
    onClick: t,
    title: `Close without exporting`,
    "aria-label": `Cancel export`,
    children: `Cancel`
   })]
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-export__grid`,
   children: Ab.map(e => {
    let t = e.icon;
    return (0, b.jsxs)(`button`, {
     type: `button`,
     className: `xm-export__card`,
     onClick: () => n(e.id),
     title: `Export as ${e.title}`,
     "aria-label": `Export as ${e.title}`,
     children: [(0, b.jsx)(`span`, {
      className: `xm-export__tile xm-export__tile--${e.tone}`,
      "aria-hidden": `true`,
      children: (0, b.jsx)(t, {
       size: 21
      })
     }), (0, b.jsxs)(`span`, {
      className: `xm-export__text`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-export__title`,
       children: e.title
      }), (0, b.jsx)(`span`, {
       className: `xm-export__hint`,
       children: e.hint
      })]
     })]
    }, e.id)
   })
  })
 })
}
var Mb = [{
 label: `New map`,
 keys: [`Ctrl`, `N`]
}, {
 label: `Save now`,
 keys: [`Ctrl`, `S`]
}, {
 label: `Add subtopic`,
 keys: [`Tab`]
}, {
 label: `Add sibling topic`,
 keys: [`Enter`]
}, {
 label: `Rename topic`,
 keys: [`F2`]
}, {
 label: `Delete topic`,
 keys: [`Delete`]
}, {
 label: `Select all topics`,
 keys: [`Ctrl`, `A`]
}, {
 label: `Find in map`,
 keys: [`Ctrl`, `F`]
}, {
 label: `Undo`,
 keys: [`Ctrl`, `Z`]
}, {
 label: `Redo`,
 keys: [`Ctrl`, `Shift`, `Z`]
}, {
 label: `Move between topics`,
 keys: [`↑`, `↓`]
}, {
 label: `Zoom in`,
 keys: [`Ctrl`, `+`]
}, {
 label: `Zoom out`,
 keys: [`Ctrl`, `−`]
}, {
 label: `Reset zoom`,
 keys: [`Ctrl`, `0`]
}, {
 label: `Start presentation`,
 keys: [`F5`]
}, {
 label: `Close dialog / exit present`,
 keys: [`Esc`]
}];

function Nb({
 open: e,
 onClose: t
}) {
 return e ? (0, b.jsx)(Cb, {
  open: e,
  onClose: t,
  title: `Keyboard shortcuts`,
  description: `XMind-style defaults. Shortcuts pause while a dialog is open.`,
  width: 620,
  footer: (0, b.jsxs)(`div`, {
   className: `xm-shortcuts__footer`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-shortcuts__note`,
    children: `On macOS use ⌘ instead of Ctrl.`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--solid`,
    onClick: t,
    title: `Close shortcuts`,
    "aria-label": `Close shortcuts`,
    children: `Done`
   })]
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-shortcuts`,
   children: (0, b.jsx)(`div`, {
    className: `xm-shortcuts__grid`,
    children: Mb.map(e => (0, b.jsxs)(`div`, {
     className: `xm-shortcuts__row`,
     children: [(0, b.jsx)(`span`, {
      className: `xm-shortcuts__label`,
      children: e.label
     }), (0, b.jsx)(`span`, {
      className: `xm-shortcuts__keys`,
      children: e.keys.map(e => (0, b.jsx)(`kbd`, {
       className: `xm-kbd`,
       children: e
      }, e))
     })]
    }, e.label))
   })
  })
 }) : null
}

function Pb(e) {
 let t = new Map;
 for (let n of e) {
  if (!n.parentId) continue;
  let e = t.get(n.parentId);
  e ? e.push(n) : t.set(n.parentId, [n])
 }
 return t
}

function Fb({
 node: e,
 depth: t,
 byParent: n,
 selectedId: r,
 editingId: i,
 draft: a,
 selectedRowRef: o,
 onSelect: s,
 onToggle: c,
 onBeginEdit: l,
 onDraftChange: u,
 onCommit: d,
 onCancel: f
}) {
 let p = n.get(e.id) ?? [],
  m = p.length > 0,
  h = m && !e.collapsed,
  g = e.id === r,
  _ = e.id === i,
  v = [`xm-outliner-row`, g ? `is-selected` : ``, t === 0 ? `is-root` : ``].filter(Boolean).join(` `);
 return (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsxs)(`div`, {
   ref: g ? o : void 0,
   role: `treeitem`,
   "aria-level": t + 1,
   "aria-selected": g,
   "aria-expanded": m ? !e.collapsed : void 0,
   className: v,
   style: {
    paddingLeft: `${6+t*14}px`
   },
   onClick: () => s(e.id),
   onDoubleClick: () => l(e),
   children: [m ? (0, b.jsx)(`button`, {
    type: `button`,
    className: h ? `xm-outliner-caret is-open` : `xm-outliner-caret`,
    onClick: t => {
     t.stopPropagation(), c(e.id)
    },
    "aria-label": e.collapsed ? `Expand ${e.text}` : `Collapse ${e.text}`,
    "aria-expanded": !e.collapsed,
    title: e.collapsed ? `Expand branch` : `Collapse branch`,
    children: (0, b.jsx)(qp, {
     size: 12,
     "aria-hidden": `true`
    })
   }) : (0, b.jsx)(`span`, {
    className: `xm-outliner-spacer`,
    "aria-hidden": `true`
   }), _ ? (0, b.jsx)(`input`, {
    type: `text`,
    className: `xm-outliner-input`,
    value: a,
    autoFocus: !0,
    spellCheck: !1,
    "aria-label": `Rename ${e.text}`,
    title: `Rename topic`,
    onFocus: e => e.currentTarget.select(),
    onChange: e => u(e.target.value),
    onClick: e => e.stopPropagation(),
    onDoubleClick: e => e.stopPropagation(),
    onBlur: () => d(e),
    onKeyDown: e => {
     e.key === `Enter` ? (e.preventDefault(), e.stopPropagation(), e.currentTarget.blur()) : e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), f())
    }
   }) : (0, b.jsx)(`span`, {
    className: `xm-outliner-text`,
    title: e.text,
    children: e.text
   }), e.collapsed && m ? (0, b.jsx)(`span`, {
    className: `xm-outliner-badge`,
    title: `${p.length} ${p.length===1?`topic`:`topics`} hidden`,
    children: p.length
   }) : null]
  }), h ? p.map(e => (0, b.jsx)(Fb, {
   node: e,
   depth: t + 1,
   byParent: n,
   selectedId: r,
   editingId: i,
   draft: a,
   selectedRowRef: o,
   onSelect: s,
   onToggle: c,
   onBeginEdit: l,
   onDraftChange: u,
   onCommit: d,
   onCancel: f
  }, e.id)) : null]
 })
}

function Ib() {
 let e = $(e => e.nodes),
  t = $(e => e.rootId),
  n = $(e => e.selectedId),
  r = $(e => e.selectNode),
  i = $(e => e.toggleCollapse),
  a = $(e => e.setNodeText),
  o = $(e => e.addChild),
  [s, c] = (0, _.useState)(null),
  [l, u] = (0, _.useState)(``),
  d = (0, _.useRef)(null),
  f = (0, _.useRef)(!1),
  p = (0, _.useMemo)(() => Pb(e), [e]),
  m = (0, _.useMemo)(() => e.find(e => e.id === t) ?? null, [e, t]);
 return (0, _.useEffect)(() => {
  let e = d.current;
  e && typeof e.scrollIntoView == `function` && e.scrollIntoView({
   block: `nearest`
  })
 }, [n]), (0, b.jsxs)(`div`, {
  className: `xm-outliner`,
  children: [(0, b.jsxs)(`div`, {
   className: `xm-outliner-head`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-outliner-title`,
    children: `Outliner`
   }), (0, b.jsx)(`span`, {
    className: `xm-outliner-count`,
    title: `${e.length} ${e.length===1?`topic`:`topics`}`,
    "aria-label": `${e.length} ${e.length===1?`topic`:`topics`}`,
    children: e.length
   })]
  }), (0, b.jsx)(`div`, {
   className: `xm-outliner-body xm-scroll`,
   role: `tree`,
   "aria-label": `Mind map outliner`,
   children: m ? (0, b.jsx)(Fb, {
    node: m,
    depth: 0,
    byParent: p,
    selectedId: n,
    editingId: s,
    draft: l,
    selectedRowRef: d,
    onSelect: r,
    onToggle: i,
    onBeginEdit: e => {
     e && (f.current = !1, c(e.id), u(e.text ?? ``))
    },
    onDraftChange: u,
    onCommit: e => {
     if (!e) return;
     if (f.current) {
      f.current = !1;
      return
     }
     let t = l;
     c(t => t === e.id ? null : t), u(``), a(e.id, t)
    },
    onCancel: () => {
     f.current = !0, c(null), u(``)
    }
   }) : null
  }), (0, b.jsx)(`footer`, {
   className: `xm-outliner-foot`,
   children: (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-outliner-add`,
    onClick: () => {
     n ? o(n) : o()
    },
    "aria-label": `Add topic`,
    title: `Add topic`,
    children: [(0, b.jsx)(kh, {
     size: 14,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     children: `Add topic`
    })]
   })
  })]
 })
}
var Lb = [];

function Rb({
 marker: e
}) {
 if (e.kind === `number`) return (0, b.jsx)(`span`, {
  className: `xm-marker-glyph xm-marker-glyph--number`,
  style: {
   background: e.color
  },
  "aria-hidden": `true`,
  children: e.text
 });
 if (e.kind === `progress`) {
  let t = Math.max(0, Math.min(1, e.ratio ?? 0));
  return (0, b.jsx)(`span`, {
   className: `xm-marker-glyph xm-marker-glyph--progress`,
   style: {
    "--marker-color": e.color,
    "--marker-degrees": `${Math.round(t*360)}deg`
   },
   "aria-hidden": `true`,
   children: (0, b.jsxs)(`span`, {
    className: `xm-marker-glyph__centre`,
    children: [Math.round(t * 100), `%`]
   })
  })
 }
 return (0, b.jsx)(`span`, {
  "aria-hidden": `true`,
  children: (0, b.jsx)(Bv, {
   name: e.icon,
   size: 14,
   color: e.color
  })
 })
}

function zb({
 marker: e,
 active: t,
 disabled: n,
 onToggle: r
}) {
 let i = `${t?`Remove`:`Add`} ${e.label}`;
 return (0, b.jsx)(`button`, {
  type: `button`,
  className: [`xm-marker-btn`, t ? `is-active` : ``].filter(Boolean).join(` `),
  title: i,
  "aria-label": i,
  "aria-pressed": t,
  disabled: n,
  onClick: () => r(e.key),
  children: (0, b.jsx)(Rb, {
   marker: e
  })
 })
}

function Bb({
 mode: e = `panel`
}) {
 let t = (0, _.useId)(),
  n = $(e => e.selectedId),
  r = $(e => e.nodes.find(t => t.id === e.selectedId) ?? null),
  i = $(e => e.toggleNodeMarker),
  a = $(e => e.setNodeMarkers),
  o = r?.markers ?? Lb,
  s = new Set(o),
  c = !!r,
  l = e === `popover`,
  u = e => {
   n && i(n, e)
  },
  d = (0, b.jsxs)(b.Fragment, {
   children: [(0, b.jsxs)(`div`, {
    className: `xm-markers__head`,
    children: [(0, b.jsx)(`span`, {
     className: `xm-markers__title`,
     children: `Markers`
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--sm xm-markers__clear`,
     onClick: () => {
      n && a(n, [])
     },
     disabled: !c || o.length === 0,
     title: `Remove all markers from this topic`,
     "aria-label": `Remove all markers from this topic`,
     children: `Remove all`
    })]
   }), c ? (0, b.jsx)(`div`, {
    className: `xm-markers__body xm-scroll`,
    children: Fv.map(e => {
     let r = `${t}-${e.id}`;
     return (0, b.jsxs)(`section`, {
      className: `xm-markers__group`,
      "aria-labelledby": r,
      children: [(0, b.jsx)(`h3`, {
       className: `xm-section-label`,
       id: r,
       children: e.name
      }), (0, b.jsx)(`div`, {
       className: `xm-markers__grid`,
       children: e.markers.map(e => (0, b.jsx)(zb, {
        marker: e,
        active: s.has(e.key),
        disabled: !n,
        onToggle: u
       }, e.key))
      })]
     }, e.id)
    })
   }) : (0, b.jsx)(`p`, {
    className: `xm-markers__hint`,
    children: `Select a topic to add markers`
   })]
  });
 return l ? (0, b.jsx)(`div`, {
  className: `xm-popover xm-markers xm-markers--popover`,
  role: `dialog`,
  "aria-label": `Markers`,
  children: d
 }) : (0, b.jsx)(`div`, {
  className: `xm-markers xm-markers--panel`,
  "aria-label": `Markers`,
  children: d
 })
}
var Vb = 60;

function Hb(e) {
 let t = new Map;
 for (let n of e) t.set(n.id, n);
 return t
}

function Ub(e, t) {
 let n = [],
  r = new Set([e.id]),
  i = e.parentId;
 for (; i && !r.has(i);) {
  r.add(i);
  let e = t.get(i);
  if (!e) break;
  n.push(e.text), i = e.parentId
 }
 return n.reverse().join(` › `)
}

function Wb(e, t) {
 let n = t.trim();
 if (!n) return e;
 let r = e.toLowerCase(),
  i = n.toLowerCase(),
  a = [],
  o = 0,
  s = r.indexOf(i, o),
  c = 0;
 for (; s !== -1;) s > o && a.push(e.slice(o, s)), a.push((0, b.jsx)(`mark`, {
  className: `xm-search-mark`,
  children: e.slice(s, s + n.length)
 }, `match-${c}`)), c += 1, o = s + n.length, s = r.indexOf(i, o);
 return o < e.length && a.push(e.slice(o)), a
}

function Gb() {
 let e = $(e => e.nodes),
  t = $(e => e.revealNode),
  n = $(e => e.setLeftPanel),
  [r, i] = (0, _.useState)(``),
  a = (0, _.useMemo)(() => Hb(e), [e]),
  {
   results: o,
   total: s
  } = (0, _.useMemo)(() => {
   let t = r.trim().toLowerCase(),
    n = t ? e.filter(e => String(e.text ?? ``).toLowerCase().includes(t)) : e;
   return {
    results: n.slice(0, Vb),
    total: n.length
   }
  }, [e, r]),
  c = e => {
   t(e), n(null)
  },
  l = s === 0 ? `0 results` : s > Vb ? `Showing ${Vb} of ${s} results` : `${s} ${s===1?`result`:`results`}`;
 return (0, b.jsxs)(`div`, {
  className: `xm-search`,
  children: [(0, b.jsx)(`div`, {
   className: `xm-search-head`,
   children: (0, b.jsxs)(`div`, {
    className: `xm-search-field`,
    children: [(0, b.jsx)(Vh, {
     size: 14,
     className: `xm-search-icon`,
     "aria-hidden": `true`
    }), (0, b.jsx)(`input`, {
     type: `text`,
     className: `xm-input xm-search-input`,
     value: r,
     autoFocus: !0,
     spellCheck: !1,
     placeholder: `Find topics`,
     "aria-label": `Find topics`,
     title: `Find topics`,
     onChange: e => i(e.target.value)
    })]
   })
  }), (0, b.jsx)(`div`, {
   className: `xm-search-body xm-scroll`,
   children: o.length ? (0, b.jsx)(`div`, {
    className: `xm-search-list`,
    children: o.map(e => {
     let t = Ub(e, a);
     return (0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-search-result`,
      onClick: () => c(e.id),
      "aria-label": `Reveal ${e.text}${t?` under ${t}`:``}`,
      title: `Reveal "${e.text}"`,
      children: [(0, b.jsx)(`span`, {
       className: `xm-search-result-text`,
       children: Wb(String(e.text ?? ``), r)
      }), t ? (0, b.jsx)(`span`, {
       className: `xm-search-crumb`,
       children: t
      }) : null]
     }, e.id)
    })
   }) : (0, b.jsx)(`p`, {
    className: `xm-search-empty`,
    children: `No topics match`
   })
  }), (0, b.jsx)(`div`, {
   className: `xm-search-foot`,
   "aria-live": `polite`,
   children: l
  })]
 })
}
var Kb = [{
  value: `#E5484D`,
  name: `Red`
 }, {
  value: `#F2A33D`,
  name: `Orange`
 }, {
  value: `#12A150`,
  name: `Green`
 }, {
  value: `#2F6BFF`,
  name: `Blue`
 }, {
  value: `#8C4DFF`,
  name: `Purple`
 }, {
  value: `#8A919D`,
  name: `Grey`
 }],
 qb = Kb[3].value,
 Jb = [];

function Yb({
 open: e,
 onClose: t
}) {
 let n = $(e => e.selectedId),
  r = $(e => e.nodes.find(t => t.id === e.selectedId) ?? null),
  i = $(e => e.addNodeLabel),
  a = $(e => e.removeNodeLabel),
  updateLabel = $(e => e.updateNodeLabel),
  [o, s] = (0, _.useState)(``),
  [c, l] = (0, _.useState)(qb),
  [editingLabelId, setEditingLabelId] = (0, _.useState)(null),
  u = r?.labels ?? Jb,
  d = !!r;
 (0, _.useLayoutEffect)(() => {
  e && (s(``), l(qb), setEditingLabelId(null))
 }, [e, n]);
 let f = () => {
   let e = o.trim();
   e && n && (editingLabelId && u.some(t => t.id === editingLabelId) ? updateLabel(n, editingLabelId, {
    text: e,
    color: c
   }) : i(n, {
    text: e,
    color: c
   }), s(``), setEditingLabelId(null))
  },
  p = e => {
   n && a(n, e), editingLabelId === e && (setEditingLabelId(null), s(``))
  };
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Labels`,
  onClose: t,
  width: 360,
  footer: (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-btn xm-btn--primary`,
   onClick: t,
   title: `Close the label editor`,
   "aria-label": `Done`,
   children: `Done`
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-label-editor`,
   children: d ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsxs)(`div`, {
     className: `xm-label-editor__compose`,
     children: [(0, b.jsx)(`input`, {
      type: `text`,
      className: `xm-input xm-label-editor__input`,
      value: o,
      maxLength: 32,
      placeholder: editingLabelId ? `Edit the label and press Enter` : `Add a label and press Enter`,
      "aria-label": `Label text`,
      title: `Label text`,
      autoFocus: !0,
      onChange: e => s(e.target.value),
      onKeyDown: e => {
       e.key === `Enter` && (e.preventDefault(), f()), e.key === `Escape` && editingLabelId && (e.preventDefault(), setEditingLabelId(null), s(``), l(qb))
      }
     }), (0, b.jsx)(`div`, {
      className: `xm-label-editor__swatches`,
      role: `group`,
      "aria-label": `Label colour`,
      children: Kb.map(e => {
       let t = e.value === c;
       return (0, b.jsx)(`button`, {
        type: `button`,
        className: [`xm-label-swatch`, t ? `is-active` : ``].filter(Boolean).join(` `),
        style: {
         background: e.value
        },
        title: `${e.name} label colour`,
        "aria-label": `${e.name} label colour`,
        "aria-pressed": t,
        onClick: () => l(e.value)
       }, e.value)
      })
     })]
    }), u.length ? (0, b.jsx)(`ul`, {
     className: `xm-label-editor__list`,
     "aria-label": `Topic labels`,
     children: u.map(e => (0, b.jsx)(`li`, {
      className: `xm-label-editor__item`,
      children: (0, b.jsxs)(`span`, {
       className: `xm-label-chip`,
       style: {
        "--label-color": e.color,
        cursor: `pointer`
       },
       title: `Click to edit label ${e.text}`,
       onClick: () => {
        setEditingLabelId(e.id), s(e.text), l(e.color ?? qb)
       },
       children: [(0, b.jsx)(`span`, {
        className: `xm-label-chip__text`,
        children: e.text
       }), (0, b.jsx)(`button`, {
        type: `button`,
        className: `xm-label-chip__remove`,
        onClick: ev => {
         ev.stopPropagation(), p(e.id)
        },
        title: `Remove label ${e.text}`,
        "aria-label": `Remove label ${e.text}`,
        children: (0, b.jsx)(Vg, {
         size: 12,
         strokeWidth: 2.4,
         "aria-hidden": `true`
        })
       })]
      })
     }, e.id))
    }) : (0, b.jsx)(`p`, {
     className: `xm-label-editor__empty`,
     children: `No labels yet. Type one above and press Enter.`
    })]
   }) : (0, b.jsx)(`p`, {
    className: `xm-label-editor__empty`,
    children: `Select a topic to add labels.`
   })
  })
 })
}

function Xb({
 open: e,
 onClose: t
}) {
 let n = $(e => e.selectedId),
  r = $(e => e.nodes.find(t => t.id === e.selectedId)?.note ?? ``),
  i = $(e => e.setNodeNote),
  a = $(e => e.notify),
  [o, s] = (0, _.useState)(``);
 (0, _.useLayoutEffect)(() => {
  e && s(r)
 }, [e, n, r]);
 let c = !!n,
  l = () => {
   n && (i(n, o), a(o.trim() ? `Note saved.` : `Note cleared.`, `success`), t())
  };
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Notes`,
  onClose: t,
  width: 460,
  footer: (0, b.jsxs)(`div`, {
   className: `xm-editor-footer xm-editor-footer--between`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--ghost-danger`,
    onClick: () => {
     n && (i(n, ``), a(`Note removed.`, `info`), t())
    },
    disabled: !c || !r,
    title: `Remove this topic's note`,
    "aria-label": `Remove note`,
    children: `Remove note`
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--primary`,
    onClick: l,
    disabled: !c,
    title: `Save note (Ctrl/⌘ Enter)`,
    "aria-label": `Save note`,
    children: `Save`
   })]
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-note-editor`,
   children: c ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsx)(`textarea`, {
     className: `xm-note-editor__input`,
     rows: 6,
     value: o,
     placeholder: `Write a note for this topic…`,
     "aria-label": `Note text`,
     title: `Note text`,
     autoFocus: !0,
     spellCheck: `true`,
     onChange: e => s(e.target.value),
     onKeyDown: e => {
      e.key === `Enter` && (e.ctrlKey || e.metaKey) && (e.preventDefault(), l())
     }
    }), (0, b.jsxs)(`p`, {
     className: `xm-note-editor__hint`,
     children: [(0, b.jsx)(`span`, {
      className: `xm-kbd`,
      children: `Shift`
     }), (0, b.jsx)(`span`, {
      "aria-hidden": `true`,
      children: `+`
     }), (0, b.jsx)(`span`, {
      className: `xm-kbd`,
      children: `Enter`
     }), (0, b.jsx)(`span`, {
      children: `for a new line`
     })]
    })]
   }) : (0, b.jsx)(`p`, {
    className: `xm-note-editor__empty`,
    children: `Select a topic to add a note.`
   })
  })
 })
}
var Zb = [0, 25, 50, 75, 100],
 Qb = [`P1`, `P2`, `P3`, `P4`],
 $b = `P3`,
 ex = /^\d{4}-\d{2}-\d{2}$/;

function tx({
 open: e,
 onClose: t
}) {
 let n = (0, _.useId)(),
  r = $(e => e.selectedId),
  i = $(e => e.nodes.find(t => t.id === e.selectedId)?.task ?? null),
  a = $(e => e.setNodeTask),
  o = !!r,
  s = Number.isFinite(Number(i?.progress)) ? Number(i.progress) : 0,
  c = Zb.includes(s) ? Zb : [...Zb, s].sort((e, t) => e - t),
  l = Qb.includes(i?.priority) ? i.priority : $b,
  u = typeof i?.start == `string` && ex.test(i.start) ? i.start : ``,
  d = typeof i?.due == `string` && ex.test(i.due) ? i.due : ``,
  f = e => {
   r && a(r, {
    progress: s,
    priority: l,
    start: u,
    due: d,
    ...e
   })
  },
  p = () => {
   r && a(r, null)
  },
  m = `${n}-progress`,
  h = `${n}-priority`,
  g = `${n}-start`,
  v = `${n}-due`;
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Task info`,
  onClose: t,
  width: 420,
  footer: (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-btn xm-btn--primary`,
   onClick: t,
   title: `Close task info`,
   "aria-label": `Done`,
   children: `Done`
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-task-editor`,
   children: o ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsxs)(`div`, {
     className: `xm-task-field`,
     children: [(0, b.jsx)(`label`, {
      className: `xm-task-field__label`,
      htmlFor: m,
      children: `Progress`
     }), (0, b.jsx)(`select`, {
      id: m,
      className: `xm-select`,
      value: String(s),
      title: `Task progress`,
      autoFocus: !0,
      onChange: e => f({
       progress: Number(e.target.value)
      }),
      children: c.map(e => (0, b.jsxs)(`option`, {
       value: String(e),
       children: [e, `%`]
      }, e))
     })]
    }), (0, b.jsxs)(`div`, {
     className: `xm-task-field`,
     children: [(0, b.jsx)(`label`, {
      className: `xm-task-field__label`,
      htmlFor: h,
      children: `Priority`
     }), (0, b.jsx)(`select`, {
      id: h,
      className: `xm-select`,
      value: l,
      title: `Task priority`,
      onChange: e => f({
       priority: e.target.value
      }),
      children: Qb.map(e => (0, b.jsx)(`option`, {
       value: e,
       children: e
      }, e))
     })]
    }), (0, b.jsxs)(`div`, {
     className: `xm-task-editor__dates`,
     children: [(0, b.jsxs)(`div`, {
      className: `xm-task-field`,
      children: [(0, b.jsx)(`label`, {
       className: `xm-task-field__label`,
       htmlFor: g,
       children: `Start date`
      }), (0, b.jsx)(`input`, {
       id: g,
       type: `date`,
       className: `xm-input xm-task-field__date`,
       value: u,
       title: `Task start date`,
       onChange: e => f({
        start: e.target.value
       })
      })]
     }), (0, b.jsxs)(`div`, {
      className: `xm-task-field`,
      children: [(0, b.jsx)(`label`, {
       className: `xm-task-field__label`,
       htmlFor: v,
       children: `Due date`
      }), (0, b.jsx)(`input`, {
       id: v,
       type: `date`,
       className: `xm-input xm-task-field__date`,
       value: d,
       title: `Task due date`,
       onChange: e => f({
        due: e.target.value
       })
      })]
     })]
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--ghost-danger xm-task-editor__remove`,
     onClick: p,
     disabled: !i,
     title: `Remove all task info from this topic`,
     "aria-label": `Remove task info from this topic`,
     children: `Remove task info`
    })]
   }) : (0, b.jsx)(`p`, {
    className: `xm-task-editor__empty`,
    children: `Select a topic to edit its task info.`
   })
  })
 })
}
var nx = [{
  value: `#6366f1`,
  name: `Indigo`
 }, {
  value: `#2f6bff`,
  name: `Blue`
 }, {
  value: `#12a150`,
  name: `Green`
 }, {
  value: `#f2a33d`,
  name: `Orange`
 }, {
  value: `#e5484d`,
  name: `Red`
 }, {
  value: `#8a919d`,
  name: `Grey`
 }],
 rx = nx[0].value;

function ix({
 open: e,
 onClose: t
}) {
 let n = $(e => e.relationshipDraft),
  r = $(e => e.relationshipDraft ? e.relationships.find(t => t.id === e.relationshipDraft.id) ?? null : null),
  i = $(e => e.nodes),
  a = $(e => e.updateRelationship),
  o = $(e => e.deleteRelationship),
  s = $(e => e.clearRelationshipDraft),
  c = $(e => e.notify),
  [l, u] = (0, _.useState)(``),
  [d, f] = (0, _.useState)(rx),
  [p, m] = (0, _.useState)(`curved`);
 (0, _.useLayoutEffect)(() => {
  e && r && (u(r.label ?? ``), f(r.color ?? rx), m(r.style ?? `curved`))
 }, [e, r?.id, r?.label, r?.color, r?.style, r]);
 let h = i.find(e => e.id === n?.sourceId),
  g = i.find(e => e.id === n?.targetId),
  v = () => {
   r && (a(r.id, {
    label: l,
    color: d,
    style: p
   }), c(l.trim() ? `Relationship “${l.trim()}” saved.` : `Relationship saved.`, `success`), s()), t?.()
  };
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Relationship`,
  description: h && g ? `Connect “${h.text}” to “${g.text}”.` : `Connect two topics.`,
  onClose: () => {
   s(), t?.()
  },
  width: 420,
  footer: (0, b.jsxs)(`div`, {
   className: `xm-editor-footer xm-editor-footer--between`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--ghost-danger`,
    onClick: () => {
     r && o(r.id), s(), c(`Relationship removed.`, `info`), t?.()
    },
    disabled: !r,
    title: `Remove this relationship`,
    "aria-label": `Remove relationship`,
    children: `Remove`
   }), (0, b.jsxs)(`div`, {
    className: `xm-editor-footer__actions`,
    children: [(0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn`,
     onClick: () => {
      s(), t?.()
     },
     title: `Keep the relationship as it is`,
     "aria-label": `Cancel relationship edits`,
     children: `Cancel`
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--primary`,
     onClick: v,
     disabled: !r,
     title: `Save relationship`,
     "aria-label": `Save relationship`,
     children: `Save`
    })]
   })]
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-label-editor`,
   children: r ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsxs)(`label`, {
     className: `xm-task-field__label`,
     htmlFor: `xm-relationship-label`,
     children: [`Label `, (0, b.jsx)(`span`, {
      className: `xm-note-editor__hint`,
      children: `optional`
     })]
    }), (0, b.jsx)(`input`, {
     id: `xm-relationship-label`,
     type: `text`,
     className: `xm-input`,
     value: l,
     maxLength: 60,
     placeholder: `e.g. depends on, blocks, supports`,
     "aria-label": `Relationship label`,
     title: `Relationship label`,
     autoFocus: !0,
     onChange: e => u(e.target.value),
     onKeyDown: e => {
      e.key === `Enter` && (e.preventDefault(), v())
     }
    }), (0, b.jsxs)(`div`, {
     className: `xm-task-field`,
     children: [(0, b.jsx)(`label`, {
      className: `xm-task-field__label`,
      htmlFor: `xm-relationship-style`,
      children: `Line style`
     }), (0, b.jsxs)(`select`, {
      id: `xm-relationship-style`,
      className: `xm-select`,
      value: p,
      title: `Relationship line style`,
      onChange: e => m(e.target.value),
      children: [(0, b.jsx)(`option`, {
       value: `curved`,
       children: `Curved`
      }), (0, b.jsx)(`option`, {
       value: `straight`,
       children: `Straight`
      })]
     })]
    }), (0, b.jsx)(`div`, {
     className: `xm-label-editor__swatches`,
     role: `group`,
     "aria-label": `Relationship colour`,
     children: nx.map(e => {
      let t = e.value === d;
      return (0, b.jsx)(`button`, {
       type: `button`,
       className: [`xm-label-swatch`, t ? `is-active` : ``].filter(Boolean).join(` `),
       style: {
        background: e.value
       },
       title: `${e.name} relationship colour`,
       "aria-label": `${e.name} relationship colour`,
       "aria-pressed": t,
       onClick: () => f(e.value)
      }, e.value)
     })
    }), (0, b.jsx)(`p`, {
     className: `xm-note-editor__hint`,
     children: `You can drag the relationship line to reshape it.`
    })]
   }) : (0, b.jsx)(`p`, {
    className: `xm-label-editor__empty`,
    children: `This relationship no longer exists.`
   })
  })
 })
}
var ax = [{
  value: `#6366f1`,
  name: `Indigo`
 }, {
  value: `#2f6bff`,
  name: `Blue`
 }, {
  value: `#12a150`,
  name: `Green`
 }, {
  value: `#f2a33d`,
  name: `Orange`
 }, {
  value: `#e5484d`,
  name: `Red`
 }, {
  value: `#8a919d`,
  name: `Grey`
 }],
 ox = ax[0].value;

function sx({
 open: e,
 onClose: t
}) {
 let n = $(e => e.summaryDraft ? e.summaries.find(t => t.id === e.summaryDraft) ?? null : null),
  r = $(e => e.updateSummary),
  i = $(e => e.deleteSummary),
  a = $(e => e.closeSummaryEditor),
  o = $(e => e.notify),
  [s, c] = (0, _.useState)(``),
  [l, u] = (0, _.useState)(ox),
  [summaryWidth, setSummaryWidth] = (0, _.useState)(168),
  [summaryHeight, setSummaryHeight] = (0, _.useState)(64);
 (0, _.useLayoutEffect)(() => {
  e && n && (c(n.label ?? `Summary`), u(n.color ?? ox), setSummaryWidth(Number(n.width) || 168), setSummaryHeight(Number(n.height) || 64))
 }, [e, n?.id, n?.label, n?.color, n?.width, n?.height, n]);
 let d = () => {
  n && (r(n.id, {
   label: s,
   color: l,
   width: Math.max(120, Math.min(560, Math.round(Number(summaryWidth) || 168))),
   height: Math.max(60, Math.min(800, Math.round(Number(summaryHeight) || 64)))
  }), o(`Summary saved.`, `success`), a()), t?.()
 };
 return (0, b.jsx)(Cb, {
  open: e,
  title: `Summary`,
  description: n ? `Summarise ${n.nodeIds.length} selected ${n.nodeIds.length===1?`topic`:`topics`}.` : `Summarise the selected topics.`,
  onClose: () => {
   a(), t?.()
  },
  width: 420,
  footer: (0, b.jsxs)(`div`, {
   className: `xm-editor-footer xm-editor-footer--between`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--ghost-danger`,
    onClick: () => {
     n && i(n.id), o(`Summary removed.`, `info`), a(), t?.()
    },
    disabled: !n,
    title: `Remove this summary`,
    "aria-label": `Remove summary`,
    children: `Remove`
   }), (0, b.jsxs)(`div`, {
    className: `xm-editor-footer__actions`,
    children: [(0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn`,
     onClick: () => {
      a(), t?.()
     },
     title: `Keep the summary as it is`,
     "aria-label": `Cancel summary edits`,
     children: `Cancel`
    }), (0, b.jsx)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--primary`,
     onClick: d,
     disabled: !n,
     title: `Save summary`,
     "aria-label": `Save summary`,
     children: `Save`
    })]
   })]
  }),
  children: (0, b.jsx)(`div`, {
   className: `xm-label-editor`,
   children: n ? (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsx)(`label`, {
     className: `xm-task-field__label`,
     htmlFor: `xm-summary-label`,
     children: `Summary text`
    }), (0, b.jsx)(`textarea`, {
     id: `xm-summary-label`,
     className: `xm-input xm-summary-textarea`,
     value: s,
     maxLength: 4000,
     rows: 6,
     placeholder: `Write a longer summary…`,
     "aria-label": `Summary text`,
     title: `Summary text`,
     autoFocus: !0,
     style: {
      resize: `vertical`,
      minHeight: 120,
      lineHeight: 1.45,
      whiteSpace: `pre-wrap`
     },
     onChange: e => c(e.target.value),
     onKeyDown: e => {
      e.key === `Enter` && (e.metaKey || e.ctrlKey) && (e.preventDefault(), d())
     }
    }), (0, b.jsxs)(`div`, {
     className: `xm-task-field`,
     style: {
      display: `flex`,
      gap: 12,
      alignItems: `center`,
      flexWrap: `wrap`
     },
     children: [(0, b.jsxs)(`label`, {
      className: `xm-task-field__label`,
      style: {
       display: `flex`,
       alignItems: `center`,
       gap: 6,
       margin: 0
      },
      children: [`Width`, (0, b.jsx)(`input`, {
       type: `number`,
       className: `xm-input`,
       min: 120,
       max: 560,
       step: 8,
       value: summaryWidth,
       "aria-label": `Summary width`,
       title: `Summary width in pixels`,
       style: {
        width: 84
       },
       onChange: e => setSummaryWidth(e.target.value)
      })]
     }), (0, b.jsxs)(`label`, {
      className: `xm-task-field__label`,
      style: {
       display: `flex`,
       alignItems: `center`,
       gap: 6,
       margin: 0
      },
      children: [`Height`, (0, b.jsx)(`input`, {
       type: `number`,
       className: `xm-input`,
       min: 60,
       max: 800,
       step: 8,
       value: summaryHeight,
       "aria-label": `Summary height`,
       title: `Summary height in pixels`,
       style: {
        width: 84
       },
       onChange: e => setSummaryHeight(e.target.value)
      })]
     })]
    }), (0, b.jsx)(`div`, {
     className: `xm-label-editor__swatches`,
     role: `group`,
     "aria-label": `Summary colour`,
     children: ax.map(e => {
      let t = e.value === l;
      return (0, b.jsx)(`button`, {
       type: `button`,
       className: [`xm-label-swatch`, t ? `is-active` : ``].filter(Boolean).join(` `),
       style: {
        background: e.value
       },
       title: `${e.name} summary colour`,
       "aria-label": `${e.name} summary colour`,
       "aria-pressed": t,
       onClick: () => u(e.value)
      }, e.value)
     })
    })]
   }) : (0, b.jsx)(`p`, {
    className: `xm-label-editor__empty`,
    children: `This summary no longer exists.`
   })
  })
 })
}
var cx = `input, textarea, select, [contenteditable="true"]`;

function lx() {
 let e = $.getState().presentationSlides;
 return Array.isArray(e) ? e : []
}

function ux(e) {
 let t = $.getState(),
  n = lx();
 if (!n.length) return;
 let r = n.length - 1,
  i = Math.min(Math.max(e, 0), r),
  a = Math.min(Math.max(Number(t.presentationIndex) || 0, 0), r);
 typeof t.goToSlide == `function` ? t.goToSlide(i) : i > a && typeof t.nextSlide == `function` ? t.nextSlide() : i < a && typeof t.prevSlide == `function` && t.prevSlide()
}

function dx(e) {
 let t = $.getState(),
  n = lx();
 n.length && ux(Math.min(Math.max(Number(t.presentationIndex) || 0, 0), n.length - 1) + e)
}

function fx() {
 let e = $(e => e.presentationActive),
  t = $(e => e.presentationIndex),
  n = $(e => e.presentationSlides),
  r = $(e => e.requestFit),
  i = $(e => e.stopPresentation),
  a = Array.isArray(n) ? n.length : 0,
  o = a ? Math.min(Math.max(Number(t) || 0, 0), a - 1) : 0,
  s = a ? (o + 1) / a * 100 : 0,
  c = a === 0 || o <= 0,
  l = a === 0 || o >= a - 1;
 return (0, _.useEffect)(() => {
  if (!e) return;
  let t = e => {
   if (e.defaultPrevented || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
   let t = e.target;
   t instanceof HTMLElement && t.closest(cx) || e.key === ` ` && t instanceof HTMLElement && t.closest(`button, [role="button"]`) || (e.key === `Escape` ? (e.preventDefault(), i()) : e.key === `ArrowRight` || e.key === `ArrowDown` || e.key === `PageDown` || e.key === ` ` ? (e.preventDefault(), dx(1)) : e.key === `ArrowLeft` || e.key === `ArrowUp` || e.key === `PageUp` ? (e.preventDefault(), dx(-1)) : e.key === `Home` ? (e.preventDefault(), ux(0)) : e.key === `End` && (e.preventDefault(), ux(lx().length - 1)))
  };
  return window.addEventListener(`keydown`, t), () => window.removeEventListener(`keydown`, t)
 }, [e, i]), e ? (0, b.jsxs)(b.Fragment, {
  children: [(0, b.jsx)(`span`, {
   className: `xm-present-hint`,
   "aria-hidden": `true`,
   children: `Press Esc to exit`
  }), (0, b.jsxs)(`div`, {
   className: `xm-present-bar`,
   role: `toolbar`,
   "aria-label": `Presentation controls`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-present-btn`,
    onClick: () => ux(o - 1),
    disabled: c,
    "aria-label": `Previous slide`,
    title: `Previous slide (←)`,
    children: (0, b.jsx)(Gp, {
     size: 16,
     "aria-hidden": `true`
    })
   }), (0, b.jsxs)(`span`, {
    className: `xm-present-count`,
    "aria-live": `polite`,
    "aria-label": `Slide ${a?o+1:0} of ${a}`,
    children: [a ? o + 1 : 0, ` / `, a]
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-present-btn`,
    onClick: () => ux(o + 1),
    disabled: l,
    "aria-label": `Next slide`,
    title: `Next slide (→)`,
    children: (0, b.jsx)(qp, {
     size: 16,
     "aria-hidden": `true`
    })
   }), (0, b.jsx)(`span`, {
    className: `xm-present-divider`,
    "aria-hidden": `true`
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-present-btn xm-present-btn--text`,
    onClick: () => r(),
    "aria-label": `Fit map to screen`,
    title: `Fit map to screen`,
    children: [(0, b.jsx)(sh, {
     size: 14,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     children: `Fit`
    })]
   }), (0, b.jsx)(`span`, {
    className: `xm-present-divider`,
    "aria-hidden": `true`
   }), (0, b.jsx)(`span`, {
    className: `xm-present-progress`,
    role: `progressbar`,
    "aria-label": `Slide progress`,
    "aria-valuemin": 0,
    "aria-valuemax": a || 1,
    "aria-valuenow": a ? o + 1 : 0,
    children: (0, b.jsx)(`span`, {
     className: `xm-present-progress-fill`,
     style: {
      width: `${s}%`
     }
    })
   }), (0, b.jsx)(`span`, {
    className: `xm-present-divider`,
    "aria-hidden": `true`
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-present-btn xm-present-btn--text xm-present-exit`,
    onClick: () => i(),
    "aria-label": `Exit presentation`,
    title: `Exit presentation (Esc)`,
    children: [(0, b.jsx)(Vg, {
     size: 15,
     "aria-hidden": `true`
    }), (0, b.jsx)(`span`, {
     children: `Exit`
    })]
   })]
  })]
 }) : null
}
var px = 4;

function mx() {
 let e = cv(e => e.waitingVersion),
  t = cv(e => e.actions),
  n = $(e => e.editingId),
  r = $(e => e.saveStatus),
  [i, a] = (0, _.useState)(px),
  o = !!n || r === `saving`;
 return (0, _.useEffect)(() => {
  a(px)
 }, [e]), (0, _.useEffect)(() => {
  if (!e || o || i <= 0) return;
  let t = window.setTimeout(() => {
   a(e => Math.max(0, e - 1))
  }, 1e3);
  return () => window.clearTimeout(t)
 }, [e, o, i]), e ? (0, b.jsxs)(`div`, {
  className: `xm-update-banner`,
  role: `status`,
  "aria-live": `polite`,
  "data-paused": o ? `true` : `false`,
  children: [(0, b.jsx)(`span`, {
   className: `xm-update-banner__dot`,
   "aria-hidden": `true`
  }), (0, b.jsxs)(`span`, {
   className: `xm-update-banner__text`,
   children: [(0, b.jsxs)(`strong`, {
    children: [`Mindx v`, e]
   }), ` is ready`, o ? ` — it will update as soon as you finish editing.` : ` — updating automatically in ${Math.max(1,i)}s.`, (0, b.jsxs)(`span`, {
    className: `xm-update-banner__from`,
    children: [`You are on v`, lv, `.`]
   })]
  }), (0, b.jsxs)(`span`, {
   className: `xm-update-banner__actions`,
   children: [(0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--sm xm-btn--primary`,
    onClick: () => t?.applyUpdate?.(),
    title: `Reload into the new version now`,
    children: [(0, b.jsx)(pm, {
     size: 13
    }), `Update now`]
   }), (0, b.jsxs)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--sm`,
    onClick: () => t?.snoozeUpdate?.(),
    title: `Keep this version until the next launch`,
    children: [(0, b.jsx)(Vg, {
     size: 13
    }), `Later`]
   })]
  })]
 }) : null
}
var hx = {
 unsupported: `Not available in this context`,
 registering: `Installing…`,
 installed: `Installed`,
 ready: `Active`,
 error: `Registration failed`
};

function gx({
 icon: e,
 label: t,
 value: n,
 tone: r = `default`
}) {
 return (0, b.jsxs)(`div`, {
  className: `xm-about__row`,
  children: [(0, b.jsx)(`span`, {
   className: `xm-about__row-icon`,
   "aria-hidden": `true`,
   children: (0, b.jsx)(e, {
    size: 14
   })
  }), (0, b.jsx)(`span`, {
   className: `xm-about__row-label`,
   children: t
  }), (0, b.jsx)(`span`, {
   className: `xm-about__row-value ${r===`accent`?`is-accent`:``}`,
   children: n
  })]
 })
}

function _x({
 release: e,
 limit: t = 6
}) {
 let n = hv(e, t);
 return (0, b.jsx)(`ul`, {
  className: `xm-about__notes`,
  children: n.map(e => (0, b.jsxs)(`li`, {
   children: [(0, b.jsx)(qh, {
    size: 12,
    "aria-hidden": `true`
   }), (0, b.jsx)(`span`, {
    children: e
   })]
  }, e))
 })
}

function vx({
 open: e,
 onClose: t
}) {
 let n = cv(e => e.status),
  r = cv(e => e.activeVersion),
  i = cv(e => e.waitingVersion),
  a = cv(e => e.offlineReady),
  o = cv(e => e.lastCheckedAt),
  s = cv(e => e.actions),
  [c, l] = (0, _.useState)(!1),
  [u, d] = (0, _.useState)(null);
 (0, _.useEffect)(() => {
  e || (l(!1), d(null))
 }, [e]);
 let f = async () => {
  if (!s?.checkForUpdates) {
   d({
    updated: !1,
    version: lv,
    unavailable: !0
   });
   return
  }
  l(!0);
  let e = await s.checkForUpdates();
  l(!1), d(e)
 }, p = i ? `Update to v${i} ready` : r ? `${hx[n]??n} · v${r}` : hx[n] ?? n;
 return (0, b.jsx)(Cb, {
  open: e,
  title: `About Mindx`,
  onClose: t,
  width: 540,
  children: (0, b.jsxs)(`div`, {
   className: `xm-about`,
   children: [(0, b.jsxs)(`header`, {
    className: `xm-about__header`,
    children: [(0, b.jsx)(`span`, {
     className: `xm-about__mark`,
     "aria-hidden": `true`,
     children: (0, b.jsxs)(`svg`, {
      viewBox: `0 0 64 64`,
      width: `42`,
      height: `42`,
      role: `presentation`,
      children: [(0, b.jsx)(`defs`, {
       children: (0, b.jsxs)(`linearGradient`, {
        id: `xm-about-brand`,
        x1: `0`,
        y1: `0`,
        x2: `1`,
        y2: `1`,
        children: [(0, b.jsx)(`stop`, {
         offset: `0`,
         stopColor: `#FF7A45`
        }), (0, b.jsx)(`stop`, {
         offset: `1`,
         stopColor: `#FF4B2B`
        })]
       })
      }), (0, b.jsx)(`rect`, {
       x: `1`,
       y: `1`,
       width: `62`,
       height: `62`,
       rx: `16`,
       fill: `url(#xm-about-brand)`
      }), (0, b.jsxs)(`g`, {
       stroke: `#FFFFFF`,
       strokeWidth: `3.6`,
       strokeLinecap: `round`,
       children: [(0, b.jsx)(`path`, {
        d: `M32 32 15.4 13.4`
       }), (0, b.jsx)(`path`, {
        d: `M32 32 47.4 16.8`
       }), (0, b.jsx)(`path`, {
        d: `M32 32 21.2 48.6`
       }), (0, b.jsx)(`path`, {
        d: `M32 32 44.8 49`
       })]
      }), (0, b.jsxs)(`g`, {
       fill: `#FFFFFF`,
       children: [(0, b.jsx)(`circle`, {
        cx: `32`,
        cy: `32`,
        r: `6.4`
       }), (0, b.jsx)(`circle`, {
        cx: `15.4`,
        cy: `13.4`,
        r: `4.4`
       }), (0, b.jsx)(`circle`, {
        cx: `47.4`,
        cy: `16.8`,
        r: `4.4`
       }), (0, b.jsx)(`circle`, {
        cx: `21.2`,
        cy: `48.6`,
        r: `4.4`
       }), (0, b.jsx)(`circle`, {
        cx: `44.8`,
        cy: `49`,
        r: `4.4`
       })]
      })]
     })
    }), (0, b.jsxs)(`div`, {
     className: `xm-about__identity`,
     children: [(0, b.jsxs)(`div`, {
      className: `xm-about__name`,
      children: [`Mindx`, (0, b.jsxs)(`span`, {
       className: `xm-about__version`,
       children: [`v`, lv]
      })]
     }), (0, b.jsx)(`p`, {
      className: `xm-about__tagline`,
      children: `XMind-style mind mapping that never leaves this device.`
     })]
    })]
   }), (0, b.jsxs)(`section`, {
    className: `xm-about__info`,
    "aria-label": `Build information`,
    children: [(0, b.jsx)(gx, {
     icon: am,
     label: `Released`,
     value: fv?.date || `development build`
    }), (0, b.jsx)(gx, {
     icon: Lm,
     label: `Built`,
     value: mv(uv)
    }), (0, b.jsx)(gx, {
     icon: Uh,
     label: `Service worker`,
     value: p,
     tone: i ? `accent` : `default`
    }), (0, b.jsx)(gx, {
     icon: sm,
     label: `Offline ready`,
     value: a ? `Yes — cached for offline use` : `Caching on first visit`
    })]
   }), fv ? (0, b.jsxs)(`section`, {
    className: `xm-about__section`,
    "aria-label": `What's new`,
    children: [(0, b.jsxs)(`h3`, {
     className: `xm-about__section-title`,
     children: [`What's new in `, fv.version]
    }), (0, b.jsx)(_x, {
     release: fv
    })]
   }) : null, pv.length ? (0, b.jsxs)(`details`, {
    className: `xm-about__releases`,
    children: [(0, b.jsxs)(`summary`, {
     children: [`Release history (`, pv.length, ` earlier`, ` `, pv.length === 1 ? `release` : `releases`, `)`]
    }), (0, b.jsx)(`div`, {
     className: `xm-about__releases-body`,
     children: pv.slice(0, 5).map(e => (0, b.jsxs)(`article`, {
      className: `xm-about__release`,
      children: [(0, b.jsxs)(`header`, {
       children: [(0, b.jsxs)(`span`, {
        className: `xm-about__release-version`,
        children: [`v`, e.version]
       }), (0, b.jsx)(`span`, {
        className: `xm-about__release-date`,
        children: e.date
       })]
      }), (0, b.jsx)(_x, {
       release: e,
       limit: 3
      })]
     }, e.version))
    })]
   }) : null, (0, b.jsxs)(`div`, {
    className: `xm-about__footer`,
    children: [(0, b.jsxs)(`div`, {
     className: `xm-about__check`,
     children: [(0, b.jsxs)(`button`, {
      type: `button`,
      className: `xm-btn xm-btn--solid`,
      onClick: f,
      disabled: c,
      title: `Check whether a newer version has been deployed`,
      children: [(0, b.jsx)(Fh, {
       size: 14,
       className: c ? `xm-spin` : void 0
      }), c ? `Checking…` : `Check for updates`]
     }), u ? (0, b.jsx)(`span`, {
      className: `xm-about__check-result`,
      role: `status`,
      "aria-live": `polite`,
      children: u.unavailable ? `Updates need the installed PWA.` : u.updated ? `v${u.version} is ready — it applies automatically.` : `You're on the latest version (v${lv}).`
     }) : o ? (0, b.jsxs)(`span`, {
      className: `xm-about__check-result`,
      role: `status`,
      children: [`Last checked `, new Date(o).toLocaleTimeString()]
     }) : null]
    }), (0, b.jsxs)(`button`, {
     type: `button`,
     className: `xm-btn xm-btn--primary`,
     onClick: t,
     children: [(0, b.jsx)(Vp, {
      size: 14
     }), `Done`]
    })]
   })]
  })
 })
}

function yx({
 open: e,
 title: t,
 description: n,
 confirmLabel: r = `Confirm`,
 cancelLabel: i = `Cancel`,
 tone: a = `default`,
 onConfirm: o,
 onClose: s
}) {
 return (0, b.jsxs)(Cb, {
  open: e,
  title: t,
  description: n,
  onClose: s,
  width: 440,
  children: [(0, b.jsxs)(`div`, {
   className: `xm-confirm`,
   children: [(0, b.jsx)(`span`, {
    className: `xm-confirm__icon ${a===`danger`?`is-danger`:``}`,
    "aria-hidden": `true`,
    children: (0, b.jsx)(Dg, {
     size: 20
    })
   }), (0, b.jsx)(`div`, {
    className: `xm-confirm__body`,
    children: (0, b.jsx)(`p`, {
     className: `xm-confirm__hint`,
     children: `Nothing leaves this browser — the action is undoable with Ctrl/⌘ Z.`
    })
   })]
  }), (0, b.jsxs)(`div`, {
   className: `xm-confirm__actions`,
   children: [(0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--solid`,
    onClick: s,
    autoFocus: !0,
    children: i
   }), (0, b.jsx)(`button`, {
    type: `button`,
    className: `xm-btn xm-btn--primary`,
    onClick: o,
    children: r
   })]
  })]
 })
}
var bx = {
 success: Zp,
 error: tm,
 info: Um
};

function xx() {
 let e = $(e => e.notice),
  t = $(e => e.dismissNotice);
 if ((0, _.useEffect)(() => {
   if (!e) return;
   let n = window.setTimeout(() => t(e.id), 4200);
   return () => window.clearTimeout(n)
  }, [e, t]), !e) return null;
 let n = e.tone ?? `info`,
  r = bx[n] ?? Um;
 return (0, b.jsxs)(`div`, {
  className: `xm-toast xm-toast--${n}`,
  role: `status`,
  "aria-live": `polite`,
  children: [(0, b.jsx)(`span`, {
   className: `xm-toast__icon`,
   "aria-hidden": `true`,
   children: (0, b.jsx)(r, {
    size: 15,
    strokeWidth: 2.2
   })
  }), (0, b.jsx)(`span`, {
   className: `xm-toast__text`,
   children: e.message
  }), (0, b.jsx)(`button`, {
   type: `button`,
   className: `xm-toast__close`,
   onClick: () => t(e.id),
   "aria-label": `Dismiss notification`,
   title: `Dismiss`,
   children: (0, b.jsx)(Vg, {
    size: 13,
    strokeWidth: 2.4
   })
  })]
 }, e.id)
}
var Sx = new Set(j_.map(e => e.key)),
 Cx = 3e3,
 wx = 5e3,
 Tx = [`mindmap`, `logic`, `fishbone`, `org`, `timeline`, `matrix`, `treeTable`],
 Ex = [`rounded`, `rect`, `pill`, `dashed`];

function Dx(e) {
 return String(e ?? ``).replace(/\s+/g, ` `).trim()
}

function Ox(e) {
 return String(e ?? ``).replace(/!\[([^\]]*)\]\([^)]*\)/g, `$1`).replace(/\[([^\]]+)\]\([^)]*\)/g, `$1`).replace(/(\*\*|__)(.*?)\1/g, `$2`).replace(/(\*|_)(.*?)\1/g, `$2`).replace(/`([^`]+)`/g, `$1`).replace(/<[^>]+>/g, ``).replace(/\\([\\`*_{}[\]()#+\-.!])/g, `$1`).trim()
}

function kx(e, t = `Untitled topic`) {
 return String(e ?? ``).replace(/\r\n/g, `
`).trim().slice(0, wx) || t
}

function Ax(e) {
 return Array.isArray(e) ? e : e && typeof e == `object` ? Object.values(e) : null
}

function jx(e, t) {
 if (!e) throw Error(t)
}

function Mx(e) {
 if (!e || typeof e != `object`) return null;
 let t = {};
 for (let n of [`fill`, `border`, `text`, `line`]) $g(e[n]) && (t[n] = e[n].toLowerCase());
 return Object.keys(t).length ? t : null
}

function Nx(e) {
 if (!Array.isArray(e)) return null;
 let t = new Set,
  n = e.map(e => {
   if (!e || typeof e != `object`) return null;
   let n = Dx(e.text).slice(0, 80);
   if (!n) return null;
   let r = typeof e.id == `string` && e.id.trim() ? e.id.trim() : Qg();
   for (; t.has(r);) r = Qg();
   return t.add(r), {
    id: r,
    text: n,
    color: $g(e.color) ? e.color.toLowerCase() : `#6366f1`
   }
  }).filter(Boolean);
 return n.length ? n : null
}

function Px(e) {
 if (!Array.isArray(e)) return null;
 let t = [...new Set(e.filter(e => typeof e == `string` && e.trim()))];
 return t.length ? t.slice(0, 60) : null
}

function Fx(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.x),
  n = Number(e.y);
 if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
 let r = e => Math.max(-1e5, Math.min(1e5, e)),
  i = {
   x: Math.round(r(t)),
   y: Math.round(r(n))
  };
 return i.x === 0 && i.y === 0 ? null : i
}

function Ix(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.x),
  n = Number(e.y);
 if (!Number.isFinite(t) || !Number.isFinite(n)) return null;
 let r = e => Math.max(-1e4, Math.min(1e4, e)),
  i = {
   x: Math.round(r(t)),
   y: Math.round(r(n))
  };
 return i.x === 0 && i.y === 0 ? null : i
}

function Lx(e) {
 if (!e || typeof e != `object`) return null;
 let t = Number(e.angle);
 return Number.isFinite(t) ? {
  angle: Math.round((t % 360 + 360) % 360 * 10) / 10
 } : null
}

function Rx(e, t) {
 let n = typeof e == `string` && e.trim() ? e.trim() : Qg();
 for (; t.has(n);) n = Qg();
 return t.add(n), n
}

function zx(e, t) {
 return Array.isArray(e) ? [...new Set(e.filter(e => typeof e == `string` && t.has(e)))] : []
}

function Bx(e, t) {
 let n = new Set,
  r = Array.isArray(e.zones) ? e.zones.map(e => {
   if (!e || typeof e != `object`) return null;
   let r = zx(e.nodeIds, t);
   return r.length ? {
    id: Rx(e.id, n),
    label: Dx(e.label).slice(0, 120) || `Group`,
    color: $g(e.color) ? e.color.toLowerCase() : `#6366f1`,
    shape: Ex.includes(e.shape) ? e.shape : `rounded`,
    nodeIds: r
   } : null
  }).filter(Boolean) : [],
  i = new Set,
  a = Array.isArray(e.relationships) ? e.relationships.map(e => !e || typeof e != `object` || typeof e.sourceId != `string` || typeof e.targetId != `string` || e.sourceId === e.targetId || !t.has(e.sourceId) || !t.has(e.targetId) ? null : {
   id: Rx(e.id, i),
   sourceId: e.sourceId,
   targetId: e.targetId,
   label: Dx(e.label).slice(0, 240),
   color: $g(e.color) ? e.color.toLowerCase() : `#6366f1`,
   style: e.style === `straight` ? `straight` : `curved`,
   curve: Ix(e.curve),
   sourceAnchor: Lx(e.sourceAnchor),
   targetAnchor: Lx(e.targetAnchor)
  }).filter(Boolean) : [],
  o = new Set,
  s = Array.isArray(e.summaries) ? e.summaries.map(e => {
   if (!e || typeof e != `object`) return null;
   let n = zx(e.nodeIds, t);
   return n.length ? {
    id: Rx(e.id, o),
    label: kx(e.label, `Summary`).slice(0, 4000),
    color: $g(e.color) ? e.color.toLowerCase() : `#6366f1`,
    nodeIds: n,
    width: Math.max(120, Math.min(560, Number(e.width) || 168)),
    height: Math.max(60, Math.min(800, Number(e.height) || 64)),
    offset: rv(e.offset)
   } : null
  }).filter(Boolean) : [],
  c = new Set;
 return {
  zones: r,
  relationships: a,
  summaries: s,
  callouts: Array.isArray(e.callouts) ? e.callouts.map(e => !e || typeof e != `object` || typeof e.nodeId != `string` || !t.has(e.nodeId) ? null : {
   id: Rx(e.id, c),
   nodeId: e.nodeId,
   text: kx(e.text, `Callout`).slice(0, 4000),
   color: $g(e.color) ? e.color.toLowerCase() : `#f59e0b`,
   side: [`auto`, `left`, `right`].includes(e.side) ? e.side : `auto`,
   width: Math.max(120, Math.min(520, Number(e.width) || 188)),
   height: Number(e.height) ? Math.max(44, Math.min(800, Number(e.height))) : void 0,
   offset: rv(e.offset)
  }).filter(Boolean) : [],
  theme: iy(e.theme).id,
  palette: d_(e.palette),
  mapStructure: Tx.includes(e.mapStructure) ? e.mapStructure : `mindmap`,
  template: x_(e.template) ? e.template : y_,
  lineStyle: C_.includes(e.lineStyle) ? e.lineStyle : S_,
  backgroundColor: $g(e.backgroundColor) ? e.backgroundColor.toLowerCase() : null,
  layoutFlags: {
   autoBalance: typeof e.layoutFlags?.autoBalance == `boolean` ? e.layoutFlags.autoBalance : k_.autoBalance,
   freePosition: typeof e.layoutFlags?.freePosition == `boolean` ? e.layoutFlags.freePosition : k_.freePosition,
   flexibleFloating: typeof e.layoutFlags?.flexibleFloating == `boolean` ? e.layoutFlags.flexibleFloating : k_.flexibleFloating
  },
  cjkFont: Sx.has(e.cjkFont) ? e.cjkFont : `system`
 }
}

function Vx(e) {
 if (!Array.isArray(e) || !e.length) return null;
 let t = new Set,
  n = [];
 for (let [r, i] of e.entries()) {
  if (!i || typeof i != `object`) continue;
  let e = typeof i.id == `string` && i.id.trim() ? i.id.trim() : `sheet-${r+1}`;
  for (; t.has(e);) e = Qg();
  t.add(e);
  let a = Dx(i.name).slice(0, 60) || `Map ${r+1}`,
   o = i.document && typeof i.document == `object` ? i.document : Array.isArray(i.nodes) ? i : null,
   s = null;
  if (o) try {
   s = Hx({
    ...o,
    sheets: void 0
   })
  } catch {
   s = null
  }
  n.push({
   id: e,
   name: a,
   document: s
  })
 }
 return n.length ? n : null
}

function Hx(e) {
 jx(e && typeof e == `object`, `The file does not contain a mind map.`), jx(e.version === void 0 || Number(e.version) <= 2, `This map was created by a newer version of Mindx.`);
 let t = Ax(e.nodes ?? e.topics);
 jx(Array.isArray(t) && t.length > 0, `No topics were found.`), jx(t.length <= Cx, `This map has too many topics (maximum ${Cx}).`);
 let n = new Set,
  r = t.map((e, t) => {
   jx(e && typeof e == `object`, `Topic ${t+1} is invalid.`);
   let r = e.id ?? e.data?.id;
   typeof r == `string` && r.trim() || (r = `imported-${t}-${Qg()}`), jx(!n.has(r), `Duplicate topic id: ${r}`), n.add(r);
   let i = e.parentId ?? e.data?.parentId ?? null;
   return jx(i === null || typeof i == `string`, `Topic ${t+1} has an invalid parent.`), {
    id: r,
    parentId: i,
    text: kx(e.text ?? e.label ?? e.data?.label),
    side: e.side === `left` || e.side === `right` ? e.side : null,
    color: $g(e.color) ? e.color : null,
    collapsed: !!e.collapsed,
    structure: Tx.includes(e.structure) ? e.structure : null,
    overrides: Mx(e.overrides),
    offset: Fx(e.offset ?? e.data?.offset),
    markers: Px(e.markers),
    labels: Nx(e.labels),
    note: typeof e.note == `string` && e.note.trim() ? e.note.trim().slice(0, 4e3) : null,
    task: F_(e.task),
    link: typeof e.link == `string` && e.link.trim() ? e.link.trim().slice(0, 2e3) : null,
    preset: E_.has(e.preset) && e.preset !== "default" ? e.preset : null,
    shape: w_.includes(e.shape) && e.shape !== `auto` ? e.shape : null,
    style: P_(e.style),
    widthOverride: Number.isFinite(Number(e.widthOverride)) ? Math.max(72, Math.min(680, Math.round(Number(e.widthOverride)))) : null
   }
  }),
  i = new Map(r.map(e => [e.id, e])),
  a = r.filter(e => e.parentId === null);
 jx(a.length === 1, `A mind map must contain exactly one central topic.`);
 for (let e of r) e.parentId !== null && (jx(i.has(e.parentId), `Topic "${Dx(e.text)}" points to a missing parent.`), jx(e.parentId !== e.id, `A topic cannot be its own parent.`));
 let o = a[0],
  s = e.rootId;
 jx(!s || s === o.id, `The document root does not match the topic tree.`);
 let c = new Map;
 for (let e of r) e.parentId && (c.has(e.parentId) || c.set(e.parentId, []), c.get(e.parentId).push(e));
 let l = {
   left: 0,
   right: 0
  },
  u = new Map,
  d = new Set;
 o.side = `center`, o.color = Xg, o.parentId = null, u.set(o.id, o);
 let f = [o];
 for (; f.length;) {
  let e = f.shift(),
   t = c.get(e.id) ?? [];
  for (let n of t) {
   if (jx(!d.has(n.id), `The topic tree contains a cycle.`), d.add(n.id), e.id === o.id) {
    if (n.side !== `left` && n.side !== `right` && (n.side = l.right <= l.left ? `right` : `left`), l[n.side] += 1, !n.color) {
     let e = new Set(t.filter(e => e.color).map(e => e.color));
     n.color = Zg.find(t => !e.has(t)) ?? Zg[(l.right + l.left - 1) % Zg.length]
    }
   } else n.side = e.side === `left` ? `left` : `right`, n.color = e.color;
   u.set(n.id, n), f.push(n)
  }
 }
 jx(u.size === r.length, `The topic tree is disconnected or contains a cycle.`);
 let p = r.map(e => {
   let t = u.get(e.id),
    n = {
     id: t.id,
     parentId: t.parentId,
     text: t.text,
     side: t.side,
     color: t.color,
     collapsed: t.collapsed
    };
   return t.structure && (n.structure = t.structure), t.overrides && (n.overrides = {
    ...t.overrides
   }), t.offset && (n.offset = {
    ...t.offset
   }), t.markers && (n.markers = [...t.markers]), t.labels && (n.labels = t.labels.map(e => ({
    ...e
   }))), t.note && (n.note = t.note), t.task && (n.task = {
    ...t.task
   }), t.link && (n.link = t.link), t.preset && (n.preset = t.preset), t.shape && (n.shape = t.shape), t.style && (n.style = {
    ...t.style
   }), t.widthOverride && (n.widthOverride = t.widthOverride), n
  }),
  m = Vx(e.sheets),
  h = m && m.some(t => t.id === e.activeSheetId) ? e.activeSheetId : m?.[0]?.id;
 return {
  format: Jg,
  version: 2,
  rootId: o.id,
  nodes: p,
  ...Bx(e, i),
  ...m ? {
   sheets: m,
   activeSheetId: h
  } : {}
 }
}

function Ux(e, t = `Imported Mind Map`) {
 let n = String(e ?? ``).replace(/\r\n?/g, `
`).split(`
`),
  r = null,
  i = [];
 for (let e of n) {
  let t = e.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
  if (t && !r && i.length === 0) {
   r = Ox(t[1]);
   continue
  }
  let n = e.match(/^(\s*)(?:[-*+]|\d+[.)])\s+(.*)$/);
  if (!n) continue;
  let a = n[1].replace(/\t/g, `    `).length,
   o = Ox(n[2]);
  o && i.push({
   indent: a,
   text: o
  })
 }
 if (jx(i.length <= Cx, `This map has too many topics (maximum ${Cx}).`), !i.length) {
  let e = n.map(e => e.trim()).find(Boolean),
   i = r || Ox(e) || t;
  return Hx({
   nodes: [{
    id: Qg(),
    parentId: null,
    text: i,
    side: `center`
   }]
  })
 }
 let a = Math.min(...i.map(e => e.indent)),
  o = i.filter(e => e.indent === a),
  s = r,
  c = i;
 !s && o.length === 1 && (s = o[0].text, c = i.filter(e => e !== o[0])), s = s || t;
 let l = {
   id: Qg(),
   parentId: null,
   text: kx(s, t),
   side: `center`,
   color: Xg,
   collapsed: !1
  },
  u = [l],
  d = new Map([
   [l.id, []]
  ]),
  f = {
   left: 0,
   right: 0
  };
 if (c.length) {
  let e = [...new Set(c.map(e => e.indent))].sort((e, t) => e - t),
   t = new Map(e.map((e, t) => [e, t + 1])),
   n = [l];
  for (let e of c) {
   let r = t.get(e.indent) ?? 1;
   r = Math.min(r, n.length);
   let i = n[r - 1] ?? l,
    a = i.id === l.id,
    o = i.side,
    s = i.color;
   a && (o = f.right <= f.left ? `right` : `left`, f[o] += 1, s = Zg[(f.left + f.right - 1) % Zg.length]);
   let c = {
    id: Qg(),
    parentId: i.id,
    text: kx(e.text),
    side: o,
    color: s,
    collapsed: !1
   };
   u.push(c), d.has(i.id) || d.set(i.id, []), d.get(i.id).push(c), n[r] = c, n.length = r + 1
  }
 }
 return Hx({
  rootId: l.id,
  nodes: u
 })
}

function Wx(e, t = ``) {
 let n = String(e ?? ``).trim();
 if (/\.json$/i.test(t) || n.startsWith(`{`) || n.startsWith(`[`)) {
  let e;
  try {
   e = JSON.parse(n)
  } catch {
   throw Error(`That JSON file could not be parsed.`)
  }
  return Hx(e)
 }
 return Ux(n, t.replace(/\.[^.]+$/, ``) || void 0)
}

function Gx(e) {
 return {
  rootId: e.rootId,
  nodes: e.nodes,
  theme: e.theme ?? `classic`,
  palette: e.palette,
  mapStructure: e.mapStructure ?? `mindmap`,
  template: x_(e.template) ? e.template : y_,
  zones: e.zones ?? [],
  relationships: e.relationships ?? [],
  summaries: e.summaries ?? [],
  callouts: e.callouts ?? [],
  lineStyle: e.lineStyle ?? `tapered`,
  backgroundColor: e.backgroundColor ?? null,
  layoutFlags: {
   ...k_,
   ...e.layoutFlags ?? {}
  },
  cjkFont: e.cjkFont ?? `system`
 }
}

function Kx(e) {
 let t = e.activeSheetId ?? `sheet-1`,
  n = Gx(e),
  r = (e.sheets ?? []).map(r => ({
   id: r.id,
   name: r.name,
   document: r.id === t ? n : e.sheetDocs?.[r.id] ?? null
  }));
 return {
  format: Jg,
  version: 2,
  app: `Mindx`,
  exportedAt: new Date().toISOString(),
  ...n,
  sheets: r.length ? r : null,
  activeSheetId: t
 }
}

function qx(e, t) {
 let n = e.find(e => e.id === t);
 if (!n) return ``;
 let r = new Map;
 for (let t of e) t.parentId && (r.has(t.parentId) || r.set(t.parentId, []), r.get(t.parentId).push(t));
 let i = [`# ${Dx(n.text)}`],
  a = (e, t) => {
   for (let n of r.get(e) ?? []) i.push(`${`  `.repeat(t)}- ${Dx(n.text)}`), a(n.id, t + 1)
  };
 return a(t, 0), `${i.join(`
`)}\n`
}

function Jx(e, t = `mindx-map`) {
 return Array.from(Dx(e).toLowerCase()).filter(e => e.charCodeAt(0) >= 32).join(``).replace(/[<>:"/\\|?*]/g, ``).replace(/\s+/g, `-`).replace(/-+/g, `-`).replace(/^-|-$/g, ``).slice(0, 72) || t
}

function Yx(e, t) {
 let n = URL.createObjectURL(e),
  r = document.createElement(`a`);
 r.href = n, r.download = t, r.rel = `noopener`, document.body.appendChild(r), r.click(), r.remove(), window.setTimeout(() => URL.revokeObjectURL(n), 1e3)
}

function Xx(e, t, n) {
 Yx(new Blob([e], {
  type: `${n};charset=utf-8`
 }), t)
}

function Zx(e) {
 return new Promise((t, n) => {
  e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
 })
}

function Qx(e, t) {
 let n, r = () => {
  if (n) return n;
  let r = indexedDB.open(e);
  return r.onupgradeneeded = () => r.result.createObjectStore(t), n = Zx(r), n.then(e => {
   e.onclose = () => n = void 0
  }, () => {
   n = void 0
  }), n
 };
 return (e, n) => r().then(r => n(r.transaction(t, e).objectStore(t)))
}
var $x;

function eS() {
 return $x || ($x = Qx(`keyval-store`, `keyval`)), $x
}

function tS(e, t = eS()) {
 return t(`readonly`, t => Zx(t.get(e)))
}

function nS(e, t, n = eS()) {
 return n(`readwrite`, n => (n.put(t, e), Zx(n.transaction)))
}
async function rS() {
 let e = await tS(Yg);
 return e ? {
  document: Hx(e),
  savedAt: e.savedAt ?? e.exportedAt ?? null
 } : null
}
async function iS(e) {
 let t = new Date().toISOString();
 return await nS(Yg, {
  ...e,
  savedAt: t
 }), t
}

function aS() {
 let e = $(e => e.hydrated),
  t = (0, _.useRef)(null),
  n = (0, _.useRef)(!1),
  r = (0, _.useRef)(!1),
  i = (0, _.useRef)(!1);
 (0, _.useEffect)(() => {
  let e = !1;
  return (async () => {
   try {
    let t = await rS();
    if (e) return;
    t ? $.getState().hydrate(t.document, t.savedAt) : $.getState().markHydrated(), navigator.storage?.persist && navigator.storage.persist().catch(() => {})
   } catch {
    if (e) return;
    $.getState().markHydrated(), $.getState().setSaveStatus(`error`), $.getState().notify(`Local storage is unavailable. Your map will work, but it may not persist.`, `error`)
   }
  })(), () => {
   e = !0
  }
 }, []), (0, _.useEffect)(() => {
  if (!e) return;
  let a = $.getState(),
   o = async () => {
    if (t.current && (window.clearTimeout(t.current), t.current = null), r.current || !n.current) return;
    r.current = !0, n.current = !1;
    let e = $.getState().revision,
     a = !1;
    try {
     let t = await iS(Kx($.getState()));
     a = !0, i.current = !1, $.getState().revision === e && $.getState().setSaveStatus(`saved`, t)
    } catch {
     n.current = !0, $.getState().setSaveStatus(`error`), i.current || (i.current = !0, $.getState().notify(`Could not save locally. Check your browser storage settings.`, `error`))
    } finally {
     r.current = !1, a && n.current && s(120)
    }
   }, s = (e = 550) => {
    n.current = !0, $.getState().setSaveStatus(`saving`), t.current && window.clearTimeout(t.current), t.current = window.setTimeout(o, e)
   }, c = $.subscribe((e, t) => {
    e.revision !== t.revision && e.hydrated && s()
   }), l = () => {
    document.visibilityState === `hidden` && o()
   }, u = () => o();
  return window.addEventListener(`pagehide`, u), document.addEventListener(`visibilitychange`, l), s(a.revision ? 180 : 600), () => {
   c(), window.removeEventListener(`pagehide`, u), document.removeEventListener(`visibilitychange`, l), t.current && window.clearTimeout(t.current)
  }
 }, [e])
}

function oS(e) {
 return e instanceof HTMLElement ? e.isContentEditable || [`INPUT`, `TEXTAREA`, `SELECT`].includes(e.tagName) : !1
}

function sS(e) {
 return e instanceof HTMLElement && !!e.closest(`button, a, input, textarea, select, [contenteditable="true"], [role="button"], [role="menuitem"], [role="dialog"]`)
}

function cS(e, t) {
 if (!e.selectedId) return;
 let n = Xy(Yy(e.nodes, e.rootId, {
  selectedId: e.selectedId,
  selectedIds: e.selectedIds,
  theme: e.theme,
  mapStructure: e.mapStructure,
  focusId: e.focusId
 }).nodes, e.selectedId, t);
 n && e.selectNode(n)
}

function lS(e = !0) {
 (0, _.useEffect)(() => {
  if (!e) return;
  let t = e => {
   if (e.defaultPrevented || e.isComposing || e.repeat) return;
   let t = $.getState();
   if (t.editingId || oS(e.target)) return;
   let n = e.ctrlKey || e.metaKey;
   if (n && !e.altKey) {
    let n = e.key.toLowerCase();
    if (n === `z`) {
     e.preventDefault(), e.shiftKey ? t.redo() : t.undo();
     return
    }
    if (n === `y`) {
     e.preventDefault(), t.redo();
     return
    }
    if (n === `a`) {
     e.preventDefault(), t.selectNodes(t.nodes.map(e => e.id));
     return
    }
    if (n === `f`) {
     e.preventDefault(), t.setLeftPanel(`search`);
     return
    }
    if (n === `n`) {
     e.preventDefault(), window.dispatchEvent(new CustomEvent(`xm:new-map`));
     return
    }
    if (n === `s`) {
     e.preventDefault(), t.notify(`Your map saves automatically in this browser.`, `info`);
     return
    }
    if (n === `=` || n === `+`) {
     e.preventDefault(), t.zoomIn();
     return
    }
    if (n === `-` || n === `_`) {
     e.preventDefault(), t.zoomOut();
     return
    }
    if (n === `0`) {
     e.preventDefault(), t.setZoom(1);
     return
    }
   }
   if (e.key === `F5`) e.preventDefault(), t.presentationActive ? t.stopPresentation() : t.startPresentation();
   else if (!(n || e.altKey || sS(e.target))) switch (e.key) {
    case `Tab`:
     e.preventDefault(), t.addChild();
     break;
    case `Enter`:
     e.preventDefault(), t.addSibling();
     break;
    case `ArrowLeft`:
    case `ArrowRight`:
    case `ArrowUp`:
    case `ArrowDown`:
     e.preventDefault(), cS(t, e.key === `ArrowLeft` ? `left` : e.key === `ArrowRight` ? `right` : e.key === `ArrowUp` ? `up` : `down`);
     break;
    case `Delete`:
    case `Backspace`:
     e.preventDefault(), t.selectedIds.length > 1 ? t.deleteSelection() || t.notify(`The central topic cannot be deleted.`, `info`) : t.deleteNode() || t.notify(`The central topic cannot be deleted.`, `info`);
     break;
    case `F2`:
     e.preventDefault(), t.startEditing();
     break;
    case `f`:
     e.preventDefault(), t.focusId ? t.clearFocus() : t.selectedId && t.selectedId !== t.rootId && t.setFocus(t.selectedId);
     break;
    case `p`:
     e.preventDefault(), t.presentationActive ? t.stopPresentation() : t.startPresentation();
     break;
    case `Escape`:
     if (t.presentationActive) {
      e.preventDefault(), t.stopPresentation();
      return
     }
     if (t.leftPanel) {
      e.preventDefault(), t.setLeftPanel(null);
      return
     }
     if (t.relationshipSourceId) {
      e.preventDefault(), t.cancelRelationship();
      return
     }
     t.focusId ? t.clearFocus() : t.selectNode(t.rootId)
   }
  };
  return window.addEventListener(`keydown`, t), () => window.removeEventListener(`keydown`, t)
 }, [e])
}

function uS(e, t) {
 if (e.match(/^[a-z]+:\/\//i)) return e;
 if (e.match(/^\/\//)) return window.location.protocol + e;
 if (e.match(/^[a-z]+:/i)) return e;
 let n = document.implementation.createHTMLDocument(),
  r = n.createElement(`base`),
  i = n.createElement(`a`);
 return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href
}
var dS = (() => {
 let e = 0,
  t = () => `0000${(Math.random()*36**4|0).toString(36)}`.slice(-4);
 return () => (e += 1, `u${t()}${e}`)
})();

function fS(e) {
 let t = [];
 for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
 return t
}
var pS = null;

function mS(e = {}) {
 return pS || (e.includeStyleProperties ? (pS = e.includeStyleProperties, pS) : (pS = fS(window.getComputedStyle(document.documentElement)), pS))
}

function hS(e, t) {
 let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
 return n ? parseFloat(n.replace(`px`, ``)) : 0
}

function gS(e) {
 let t = hS(e, `border-left-width`),
  n = hS(e, `border-right-width`);
 return e.clientWidth + t + n
}

function _S(e) {
 let t = hS(e, `border-top-width`),
  n = hS(e, `border-bottom-width`);
 return e.clientHeight + t + n
}

function vS(e, t = {}) {
 return {
  width: t.width || gS(e),
  height: t.height || _S(e)
 }
}

function yS() {
 let e, t;
 try {
  t = process
 } catch {}
 let n = t && t.env ? t.env.devicePixelRatio : null;
 return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1
}
var bS = 16384;

function xS(e) {
 (e.width > bS || e.height > bS) && (e.width > bS && e.height > bS ? e.width > e.height ? (e.height *= bS / e.width, e.width = bS) : (e.width *= bS / e.height, e.height = bS) : e.width > bS ? (e.height *= bS / e.width, e.width = bS) : (e.width *= bS / e.height, e.height = bS))
}

function SS(e, t = {}) {
 return e.toBlob ? new Promise(n => {
  e.toBlob(n, t.type ? t.type : `image/png`, t.quality ? t.quality : 1)
 }) : new Promise(n => {
  let r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(`,`)[1]),
   i = r.length,
   a = new Uint8Array(i);
  for (let e = 0; e < i; e += 1) a[e] = r.charCodeAt(e);
  n(new Blob([a], {
   type: t.type ? t.type : `image/png`
  }))
 })
}

function CS(e) {
 return new Promise((t, n) => {
  let r = new Image;
  r.onload = () => {
   r.decode().then(() => {
    requestAnimationFrame(() => t(r))
   })
  }, r.onerror = n, r.crossOrigin = `anonymous`, r.decoding = `async`, r.src = e
 })
}
async function wS(e) {
 return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`)
}
async function TS(e, t, n) {
 let r = `http://www.w3.org/2000/svg`,
  i = document.createElementNS(r, `svg`),
  a = document.createElementNS(r, `foreignObject`);
 return i.setAttribute(`width`, `${t}`), i.setAttribute(`height`, `${n}`), i.setAttribute(`viewBox`, `0 0 ${t} ${n}`), a.setAttribute(`width`, `100%`), a.setAttribute(`height`, `100%`), a.setAttribute(`x`, `0`), a.setAttribute(`y`, `0`), a.setAttribute(`externalResourcesRequired`, `true`), i.appendChild(a), a.appendChild(e), wS(i)
}
var ES = (e, t) => {
 if (e instanceof t) return !0;
 let n = Object.getPrototypeOf(e);
 return n === null ? !1 : n.constructor.name === t.name || ES(n, t)
};

function DS(e) {
 let t = e.getPropertyValue(`content`);
 return `${e.cssText} content: '${t.replace(/'|"/g,``)}';`
}

function OS(e, t) {
 return mS(t).map(t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?` !important`:``};`).join(` `)
}

function kS(e, t, n, r) {
 let i = `.${e}:${t}`,
  a = n.cssText ? DS(n) : OS(n, r);
 return document.createTextNode(`${i}{${a}}`)
}

function AS(e, t, n, r) {
 let i = window.getComputedStyle(e, n),
  a = i.getPropertyValue(`content`);
 if (a === `` || a === `none`) return;
 let o = dS();
 try {
  t.className = `${t.className} ${o}`
 } catch {
  return
 }
 let s = document.createElement(`style`);
 s.appendChild(kS(o, n, i, r)), t.appendChild(s)
}

function jS(e, t, n) {
 AS(e, t, `:before`, n), AS(e, t, `:after`, n)
}
var MS = `application/font-woff`,
 NS = `image/jpeg`,
 PS = {
  woff: MS,
  woff2: MS,
  ttf: `application/font-truetype`,
  eot: `application/vnd.ms-fontobject`,
  png: `image/png`,
  jpg: NS,
  jpeg: NS,
  gif: `image/gif`,
  tiff: `image/tiff`,
  svg: `image/svg+xml`,
  webp: `image/webp`
 };

function FS(e) {
 let t = /\.([^./]*?)$/g.exec(e);
 return t ? t[1] : ``
}

function IS(e) {
 return PS[FS(e).toLowerCase()] || ``
}

function LS(e) {
 return e.split(/,/)[1]
}

function RS(e) {
 return e.search(/^(data:)/) !== -1
}

function zS(e, t) {
 return `data:${t};base64,${e}`
}
async function BS(e, t, n) {
 let r = await fetch(e, t);
 if (r.status === 404) throw Error(`Resource "${r.url}" not found`);
 let i = await r.blob();
 return new Promise((e, t) => {
  let a = new FileReader;
  a.onerror = t, a.onloadend = () => {
   try {
    e(n({
     res: r,
     result: a.result
    }))
   } catch (e) {
    t(e)
   }
  }, a.readAsDataURL(i)
 })
}
var VS = {};

function HS(e, t, n) {
 let r = e.replace(/\?.*/, ``);
 return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, ``)), t ? `[${t}]${r}` : r
}
async function US(e, t, n) {
 let r = HS(e, t, n.includeQueryParams);
 if (VS[r] != null) return VS[r];
 n.cacheBust && (e += (/\?/.test(e) ? `&` : `?`) + new Date().getTime());
 let i;
 try {
  i = zS(await BS(e, n.fetchRequestInit, ({
   res: e,
   result: n
  }) => (t || (t = e.headers.get(`Content-Type`) || ``), LS(n))), t)
 } catch (t) {
  i = n.imagePlaceholder || ``;
  let r = `Failed to fetch resource: ${e}`;
  t && (r = typeof t == `string` ? t : t.message), r && console.warn(r)
 }
 return VS[r] = i, i
}
async function WS(e) {
 let t = e.toDataURL();
 return t === `data:,` ? e.cloneNode(!1) : CS(t)
}
async function GS(e, t) {
 if (e.currentSrc) {
  let t = document.createElement(`canvas`),
   n = t.getContext(`2d`);
  return t.width = e.clientWidth, t.height = e.clientHeight, n?.drawImage(e, 0, 0, t.width, t.height), CS(t.toDataURL())
 }
 let n = e.poster;
 return CS(await US(n, IS(n), t))
}
async function KS(e, t) {
 try {
  if (e?.contentDocument?.body) return await nC(e.contentDocument.body, t, !0)
 } catch {}
 return e.cloneNode(!1)
}
async function qS(e, t) {
 return ES(e, HTMLCanvasElement) ? WS(e) : ES(e, HTMLVideoElement) ? GS(e, t) : ES(e, HTMLIFrameElement) ? KS(e, t) : e.cloneNode(YS(e))
}
var JS = e => e.tagName != null && e.tagName.toUpperCase() === `SLOT`,
 YS = e => e.tagName != null && e.tagName.toUpperCase() === `SVG`;
async function XS(e, t, n) {
 if (YS(t)) return t;
 let r = [];
 return r = JS(e) && e.assignedNodes ? fS(e.assignedNodes()) : ES(e, HTMLIFrameElement) && e.contentDocument?.body ? fS(e.contentDocument.body.childNodes) : fS((e.shadowRoot ?? e).childNodes), r.length === 0 || ES(e, HTMLVideoElement) || await r.reduce((e, r) => e.then(() => nC(r, n)).then(e => {
  e && t.appendChild(e)
 }), Promise.resolve()), t
}

function ZS(e, t, n) {
 let r = t.style;
 if (!r) return;
 let i = window.getComputedStyle(e);
 i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : mS(n).forEach(n => {
  let a = i.getPropertyValue(n);
  n === `font-size` && a.endsWith(`px`) && (a = `${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`), ES(e, HTMLIFrameElement) && n === `display` && a === `inline` && (a = `block`), n === `d` && t.getAttribute(`d`) && (a = `path(${t.getAttribute(`d`)})`), r.setProperty(n, a, i.getPropertyPriority(n))
 })
}

function QS(e, t) {
 ES(e, HTMLTextAreaElement) && (t.innerHTML = e.value), ES(e, HTMLInputElement) && t.setAttribute(`value`, e.value)
}

function $S(e, t) {
 if (ES(e, HTMLSelectElement)) {
  let n = t,
   r = Array.from(n.children).find(t => e.value === t.getAttribute(`value`));
  r && r.setAttribute(`selected`, ``)
 }
}

function eC(e, t, n) {
 return ES(t, Element) && (ZS(e, t, n), jS(e, t, n), QS(e, t), $S(e, t)), t
}
async function tC(e, t) {
 let n = e.querySelectorAll ? e.querySelectorAll(`use`) : [];
 if (n.length === 0) return e;
 let r = {};
 for (let i = 0; i < n.length; i++) {
  let a = n[i].getAttribute(`xlink:href`);
  if (a) {
   let n = e.querySelector(a),
    i = document.querySelector(a);
   !n && i && !r[a] && (r[a] = await nC(i, t, !0))
  }
 }
 let i = Object.values(r);
 if (i.length) {
  let t = `http://www.w3.org/1999/xhtml`,
   n = document.createElementNS(t, `svg`);
  n.setAttribute(`xmlns`, t), n.style.position = `absolute`, n.style.width = `0`, n.style.height = `0`, n.style.overflow = `hidden`, n.style.display = `none`;
  let r = document.createElementNS(t, `defs`);
  n.appendChild(r);
  for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
  e.appendChild(n)
 }
 return e
}
async function nC(e, t, n) {
 return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then(e => qS(e, t)).then(n => XS(e, n, t)).then(n => eC(e, n, t)).then(e => tC(e, t))
}
var rC = /url\((['"]?)([^'"]+?)\1\)/g,
 iC = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
 aC = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

function oC(e) {
 let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, `\\$1`);
 return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, `g`)
}

function sC(e) {
 let t = [];
 return e.replace(rC, (e, n, r) => (t.push(r), e)), t.filter(e => !RS(e))
}
async function cC(e, t, n, r, i) {
 try {
  let a = n ? uS(t, n) : t,
   o = IS(t),
   s;
  return s = i ? zS(await i(a), o) : await US(a, o, r), e.replace(oC(t), `$1${s}$3`)
 } catch {}
 return e
}

function lC(e, {
 preferredFontFormat: t
}) {
 return t ? e.replace(aC, e => {
  for (;;) {
   let [n, , r] = iC.exec(e) || [];
   if (!r) return ``;
   if (r === t) return `src: ${n};`
  }
 }) : e
}

function uC(e) {
 return e.search(rC) !== -1
}
async function dC(e, t, n) {
 if (!uC(e)) return e;
 let r = lC(e, n);
 return sC(r).reduce((e, r) => e.then(e => cC(e, r, t, n)), Promise.resolve(r))
}
async function fC(e, t, n) {
 let r = t.style?.getPropertyValue(e);
 if (r) {
  let i = await dC(r, null, n);
  return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0
 }
 return !1
}
async function pC(e, t) {
 await fC(`background`, e, t) || await fC(`background-image`, e, t), await fC(`mask`, e, t) || await fC(`-webkit-mask`, e, t) || await fC(`mask-image`, e, t) || await fC(`-webkit-mask-image`, e, t)
}
async function mC(e, t) {
 let n = ES(e, HTMLImageElement);
 if ((!n || RS(e.src)) && (!ES(e, SVGImageElement) || RS(e.href.baseVal))) return;
 let r = n ? e.src : e.href.baseVal,
  i = await US(r, IS(r), t);
 await new Promise((r, a) => {
  e.onload = r, e.onerror = t.onImageErrorHandler ? (...e) => {
   try {
    r(t.onImageErrorHandler(...e))
   } catch (e) {
    a(e)
   }
  } : a;
  let o = e;
  o.decode && (o.decode = r), o.loading === `lazy` && (o.loading = `eager`), n ? (e.srcset = ``, e.src = i) : e.href.baseVal = i
 })
}
async function hC(e, t) {
 let n = fS(e.childNodes).map(e => gC(e, t));
 await Promise.all(n).then(() => e)
}
async function gC(e, t) {
 ES(e, Element) && (await pC(e, t), await mC(e, t), await hC(e, t))
}

function _C(e, t) {
 let {
  style: n
 } = e;
 t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
 let r = t.style;
 return r != null && Object.keys(r).forEach(e => {
  n[e] = r[e]
 }), e
}
var vC = {};
async function yC(e) {
 let t = vC[e];
 return t ?? (t = {
  url: e,
  cssText: await (await fetch(e)).text()
 }, vC[e] = t), t
}
async function bC(e, t) {
 let n = e.cssText,
  r = /url\(["']?([^"')]+)["']?\)/g,
  i = (n.match(/url\([^)]+\)/g) || []).map(async i => {
   let a = i.replace(r, `$1`);
   return a.startsWith(`https://`) || (a = new URL(a, e.url).href), BS(a, t.fetchRequestInit, ({
    result: e
   }) => (n = n.replace(i, `url(${e})`), [i, e]))
  });
 return Promise.all(i).then(() => n)
}

function xC(e) {
 if (e == null) return [];
 let t = [],
  n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ``),
  r = RegExp(`((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})`, `gi`);
 for (;;) {
  let e = r.exec(n);
  if (e === null) break;
  t.push(e[0])
 }
 n = n.replace(r, ``);
 let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
  a = RegExp(`((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})`, `gi`);
 for (;;) {
  let e = i.exec(n);
  if (e === null) {
   if (e = a.exec(n), e === null) break;
   i.lastIndex = a.lastIndex
  } else a.lastIndex = i.lastIndex;
  t.push(e[0])
 }
 return t
}
async function SC(e, t) {
 let n = [],
  r = [];
 return e.forEach(n => {
  if (`cssRules` in n) try {
   fS(n.cssRules || []).forEach((e, i) => {
    if (e.type === CSSRule.IMPORT_RULE) {
     let a = i + 1,
      o = e.href,
      s = yC(o).then(e => bC(e, t)).then(e => xC(e).forEach(e => {
       try {
        n.insertRule(e, e.startsWith(`@import`) ? a += 1 : n.cssRules.length)
       } catch (t) {
        console.error(`Error inserting rule from remote css`, {
         rule: e,
         error: t
        })
       }
      })).catch(e => {
       console.error(`Error loading remote css`, e.toString())
      });
     r.push(s)
    }
   })
  } catch (i) {
   let a = e.find(e => e.href == null) || document.styleSheets[0];
   n.href != null && r.push(yC(n.href).then(e => bC(e, t)).then(e => xC(e).forEach(e => {
    a.insertRule(e, a.cssRules.length)
   })).catch(e => {
    console.error(`Error loading remote stylesheet`, e)
   })), console.error(`Error inlining remote css file`, i)
  }
 }), Promise.all(r).then(() => (e.forEach(e => {
  if (`cssRules` in e) try {
   fS(e.cssRules || []).forEach(e => {
    n.push(e)
   })
  } catch (t) {
   console.error(`Error while reading CSS rules from ${e.href}`, t)
  }
 }), n))
}

function CC(e) {
 return e.filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => uC(e.style.getPropertyValue(`src`)))
}
async function wC(e, t) {
 if (e.ownerDocument == null) throw Error(`Provided element is not within a Document`);
 return CC(await SC(fS(e.ownerDocument.styleSheets), t))
}

function TC(e) {
 return e.trim().replace(/["']/g, ``)
}

function EC(e) {
 let t = new Set;

 function n(e) {
  (e.style.fontFamily || getComputedStyle(e).fontFamily).split(`,`).forEach(e => {
   t.add(TC(e))
  }), Array.from(e.children).forEach(e => {
   e instanceof HTMLElement && n(e)
  })
 }
 return n(e), t
}
async function DC(e, t) {
 let n = await wC(e, t),
  r = EC(e);
 return (await Promise.all(n.filter(e => r.has(TC(e.style.fontFamily))).map(e => {
  let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
  return dC(e.cssText, n, t)
 }))).join(`
`)
}
async function OC(e, t) {
 let n = t.fontEmbedCSS == null ? t.skipFonts ? null : await DC(e, t) : t.fontEmbedCSS;
 if (n) {
  let t = document.createElement(`style`),
   r = document.createTextNode(n);
  t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
 }
}
async function kC(e, t = {}) {
 let {
  width: n,
  height: r
 } = vS(e, t), i = await nC(e, t, !0);
 return await OC(i, t), await gC(i, t), _C(i, t), await TS(i, n, r)
}
async function AC(e, t = {}) {
 let {
  width: n,
  height: r
 } = vS(e, t), i = await CS(await kC(e, t)), a = document.createElement(`canvas`), o = a.getContext(`2d`), s = t.pixelRatio || yS(), c = t.canvasWidth || n, l = t.canvasHeight || r;
 return a.width = c * s, a.height = l * s, t.skipAutoScale || xS(a), a.style.width = `${c}`, a.style.height = `${l}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(i, 0, 0, a.width, a.height), a
}
async function jC(e, t = {}) {
 return await SS(await AC(e, t))
}

function MC() {
 return new Promise(e => {
  requestAnimationFrame(() => requestAnimationFrame(e))
 })
}

function NC() {
 let {
  getNodes: e
 } = _u(), t = $(e => e.notify), [n, r] = (0, _.useState)(null), i = (0, _.useRef)(!1);
 return {
  exportImage: async (n = `png`) => {
   if (i.current) return;
   let a = $.getState(),
    o = a.nodes.find(e => e.id === a.rootId),
    s = a.selectedId,
    c = document.querySelector(`.react-flow__viewport`);
   if (!c) t(`The canvas is not ready yet. Try again in a moment.`, `error`);
   else {
    i.current = !0, r(n), a.selectNode(null), document.documentElement.classList.add(`is-exporting`);
    try {
     document.fonts?.ready && await document.fonts.ready, await MC();
     let r = e();
     if (!r.length) throw Error(`The map is empty.`);
     let i = jo(r),
      s = Math.max(i.width, 1) / Math.max(i.height, 1),
      l = 2400,
      u = Math.max(900, s >= 1 ? l : Math.round(l * s)),
      d = Math.max(650, s >= 1 ? Math.round(l / s) : l),
      f = os(i, u, d, .1, 2, .12),
      p = {
       backgroundColor: iy(a.theme).canvas,
       width: u,
       height: d,
       cacheBust: !0,
       style: {
        width: `${u}px`,
        height: `${d}px`,
        transform: `translate(${f.x}px, ${f.y}px) scale(${f.zoom})`,
        transformOrigin: `top left`
       }
      },
      m;
     if (n === `svg`) {
      let e = await kC(c, p);
      m = await (await fetch(e)).blob()
     } else m = await jC(c, {
      ...p,
      pixelRatio: 2
     });
     if (!m) throw Error(`The image could not be generated.`);
     let h = Jx(o?.text);
     Yx(m, `${h}.${n}`), t(`${n.toUpperCase()} exported successfully.`, `success`)
    } catch (e) {
     t(e?.message || `Could not export this map as ${n.toUpperCase()}.`, `error`)
    } finally {
     document.documentElement.classList.remove(`is-exporting`), $.getState().selectNode(s), i.current = !1, r(null)
    }
   }
  },
  exporting: n
 }
}
var PC = new URL(`sw.js`, new URL(`./`, window.location.href)).href,
 FC = new URL(`./`, window.location.href).pathname,
 IC = `mindx.offline-ready-shown`,
 LC = `mindx.update-snoozed`,
 RC = 18e5,
 zC = 6e5,
 BC = 4e3;

function VC(e) {
 return new Promise(t => {
  if (!e) {
   t(null);
   return
  }
  let n = new MessageChannel,
   r = window.setTimeout(() => t(null), 1500);
  n.port1.onmessage = e => {
   window.clearTimeout(r), t(e.data?.version ?? null)
  };
  try {
   e.postMessage({
    type: `GET_VERSION`
   }, [n.port2])
  } catch {
   window.clearTimeout(r), t(null)
  }
 })
}

function HC(e) {
 try {
  return sessionStorage.getItem(LC) === e
 } catch {
  return !1
 }
}

function UC(e) {
 try {
  sessionStorage.setItem(LC, e)
 } catch {}
}

function WC() {
 let e = (0, _.useRef)(null),
  t = (0, _.useRef)(!1),
  n = (0, _.useRef)(!1),
  r = $(e => e.editingId),
  i = $(e => e.saveStatus),
  a = $(e => e.selectedId),
  o = cv(e => e.waitingVersion),
  s = (0, _.useCallback)(async () => {
   let n = cv.getState();
   if (!(`serviceWorker` in navigator)) n.setStatus(`unsupported`);
   else {
    n.setStatus(`registering`);
    try {
     let n = await navigator.serviceWorker.register(PC, {
      scope: FC,
      updateViaCache: `none`
     });
     e.current = n;
     let r = async (e, {
      waiting: t = !1
     } = {}) => {
      let n = await VC(e);
      t && n && n !== `2.1.0` ? cv.getState().setWaitingVersion(n) : !t && n && cv.getState().setActiveVersion(n)
     };
     if (n.active && await r(n.active), n.waiting && navigator.serviceWorker.controller && await r(n.waiting, {
       waiting: !0
      }), n.addEventListener(`updatefound`, () => {
       let e = n.installing;
       e && e.addEventListener(`statechange`, async () => {
        e.state === `installed` && (navigator.serviceWorker.controller ? await r(e, {
         waiting: !0
        }) : await r(e))
       })
      }), await navigator.serviceWorker.ready, cv.getState().setStatus(`ready`), navigator.serviceWorker.controller) {
      await r(navigator.serviceWorker.controller);
      try {
       localStorage.getItem(IC) || (localStorage.setItem(IC, `1`), window.dispatchEvent(new Event(`mindx:offline-ready`)))
      } catch {}
      cv.getState().setOfflineReady(!0)
     }
     navigator.serviceWorker.addEventListener(`controllerchange`, () => {
      t.current && window.location.reload()
     }), cv.getState().setLastCheckedAt(new Date().toISOString())
    } catch (e) {
     cv.getState().setStatus(`error`), cv.getState().setError(e?.message ?? `Registration failed`)
    }
   }
  }, []),
  c = (0, _.useCallback)(async () => {
   let t = e.current;
   if (!t) return {
    updated: !1,
    version: lv
   };
   try {
    await t.update()
   } catch {}
   cv.getState().setLastCheckedAt(new Date().toISOString());
   let n = cv.getState().waitingVersion;
   return {
    updated: !!n,
    version: n ?? `2.1.0`
   }
  }, []),
  l = (0, _.useCallback)(() => {
   let r = e.current?.waiting;
   r ? (n.current = !0, t.current = !0, r.postMessage({
    type: `SKIP_WAITING`
   }), window.setTimeout(() => {
    t.current && window.location.reload()
   }, 4e3)) : window.location.reload()
  }, []),
  u = (0, _.useCallback)(() => {
   let e = cv.getState().waitingVersion;
   e && UC(e), cv.getState().setWaitingVersion(null)
  }, []);
 return (0, _.useEffect)(() => (cv.getState().setActions({
  checkForUpdates: c,
  applyUpdate: l,
  snoozeUpdate: u
 }), () => cv.getState().setActions(null)), [c, l, u]), (0, _.useEffect)(() => {
  s()
 }, [s]), (0, _.useEffect)(() => {
  if (!o || n.current || HC(o)) return;
  let e = typeof document < `u` && document.hidden,
   t = !r && i !== `saving`;
  if (e) {
   l();
   return
  }
  if (!t) return;
  let a = window.setTimeout(() => {
   l()
  }, BC);
  return () => window.clearTimeout(a)
 }, [o, r, i, a, l]), (0, _.useEffect)(() => {
  let e = () => {
   let {
    waitingVersion: e
   } = cv.getState();
   if (e && !n.current) {
    if (document.visibilityState === `hidden`) l();
    else {
     let e = cv.getState().lastCheckedAt;
     (!e || Date.now() - new Date(e).getTime() > zC) && c()
    }
   }
  };
  return document.addEventListener(`visibilitychange`, e), () => document.removeEventListener(`visibilitychange`, e)
 }, [l, c]), (0, _.useEffect)(() => {
  let e = window.setInterval(() => {
   document.visibilityState === `visible` && c()
  }, RC);
  return () => window.clearInterval(e)
 }, [c]), {
  applyUpdate: l,
  checkForUpdates: c,
  snoozeUpdate: u
 }
}

function GC({
 panel: e
}) {
 return e === `outliner` ? (0, b.jsx)(Ib, {}) : e === `markers` ? (0, b.jsx)(Bb, {
  mode: `panel`
 }) : e === `search` ? (0, b.jsx)(Gb, {}) : null
}

function KC() {
 let [e, t] = (0, _.useState)(!1), [n, r] = (0, _.useState)(!1), [i, a] = (0, _.useState)(!1), [o, s] = (0, _.useState)(!1), [c, l] = (0, _.useState)(!1), [u, d] = (0, _.useState)(() => typeof window < `u` && new URLSearchParams(window.location.search).has(`about`)), [f, p] = (0, _.useState)(!1), [m, h] = (0, _.useState)(!1), [g, v] = (0, _.useState)(!1), y = (0, _.useRef)(null), x = $(e => e.notify), S = $(e => e.theme), C = $(e => e.leftPanel), w = $(e => e.setLeftPanel), T = $(e => e.presentationActive), E = $(e => e.rightPanel), D = $(e => e.relationshipDraft), O = $(e => e.clearRelationshipDraft), k = $(e => e.summaryDraft), A = $(e => e.closeSummaryEditor), {
  exportImage: j
 } = NC(), M = iy(S), N = e || n || i || o || c || u || f || m || g || !!D || !!k;
 aS(), lS(!N && !T), WC(), (0, _.useEffect)(() => (document.body.dataset.xmTheme = M.id, document.body.dataset.xmDark = M.dark ? `true` : `false`, () => {
  delete document.body.dataset.xmTheme, delete document.body.dataset.xmDark
 }), [M.id, M.dark]), (0, _.useEffect)(() => {
  let e = () => t(!0),
   n = () => r(!0),
   i = () => a(!0),
   o = () => p(!0),
   c = () => h(!0),
   u = () => v(!0),
   f = () => l(!0),
   m = () => y.current?.click(),
   g = () => s(!0),
   _ = () => d(!0),
   b = e => {
    let t = e.detail;
    if (t === `json`) try {
     let e = $.getState(),
      t = e.nodes.find(t => t.id === e.rootId);
     Xx(`${JSON.stringify(Kx(e),null,2)}\n`, `${Jx(t?.text)}.json`, `application/json`), x(`JSON backup downloaded.`, `success`)
    } catch {
     x(`Could not export JSON.`, `error`)
    } else if (t === `md`) try {
     let e = $.getState(),
      t = e.nodes.find(t => t.id === e.rootId);
     Xx(qx(e.nodes, e.rootId), `${Jx(t?.text)}.md`, `text/markdown`), x(`Markdown outline downloaded.`, `success`)
    } catch {
     x(`Could not export Markdown.`, `error`)
    } else t === `pdf` || t === `print` ? window.print() : j(t === `svg` ? `svg` : `png`)
   };
  return window.addEventListener(`xm:open-shortcuts`, e), window.addEventListener(`xm:open-themes`, n), window.addEventListener(`xm:open-structures`, i), window.addEventListener(`xm:add-label`, o), window.addEventListener(`xm:add-note`, c), window.addEventListener(`xm:add-task`, u), window.addEventListener(`xm:new-map`, f), window.addEventListener(`xm:open-import`, m), window.addEventListener(`xm:export-menu`, g), window.addEventListener(`xm:about`, _), window.addEventListener(`xm:export`, b), () => {
   window.removeEventListener(`xm:open-shortcuts`, e), window.removeEventListener(`xm:open-themes`, n), window.removeEventListener(`xm:open-structures`, i), window.removeEventListener(`xm:add-label`, o), window.removeEventListener(`xm:add-note`, c), window.removeEventListener(`xm:add-task`, u), window.removeEventListener(`xm:new-map`, f), window.removeEventListener(`xm:open-import`, m), window.removeEventListener(`xm:export-menu`, g), window.removeEventListener(`xm:about`, _), window.removeEventListener(`xm:export`, b)
  }
 }, [j, x]), (0, _.useEffect)(() => {
  C === `themes` && (r(!0), w(null))
 }, [C, w]), (0, _.useEffect)(() => {
  D && (p(!1), h(!1), v(!1), A())
 }, [D, A]), (0, _.useEffect)(() => {
  k && (p(!1), h(!1), v(!1), O())
 }, [k, O]), (0, _.useEffect)(() => {
  T && (t(!1), r(!1), a(!1), s(!1), l(!1), d(!1), p(!1), h(!1), v(!1), w(null), O())
 }, [T, O, w]);
 let P = (0, _.useCallback)(() => {
  $.getState().newMap(), l(!1), x(`New map created. Press Ctrl/⌘ Z to restore the previous map.`, `info`)
 }, [x]);
 return (0, b.jsxs)(`div`, {
  className: `xm-app`,
  "data-xm-dark": M.dark ? `true` : `false`,
  children: [T ? null : (0, b.jsx)(bv, {}), (0, b.jsxs)(`main`, {
   className: [`xm-stage`, E && !T ? `has-right-panel` : ``, T ? `is-presenting` : ``].filter(Boolean).join(` `),
   children: [(0, b.jsx)(rb, {}), T ? null : (0, b.jsxs)(b.Fragment, {
    children: [(0, b.jsx)(Cv, {
     flyout: C ? (0, b.jsx)(GC, {
      panel: C
     }) : null
    }), (0, b.jsx)(bb, {}), (0, b.jsx)(Ov, {}), (0, b.jsx)(mx, {})]
   }), (0, b.jsx)(xx, {}), T ? (0, b.jsx)(fx, {}) : null]
  }), (0, b.jsx)(Nb, {
   open: e,
   onClose: () => t(!1)
  }), (0, b.jsx)(Eb, {
   open: n,
   onClose: () => r(!1)
  }), (0, b.jsx)(kb, {
   open: i,
   onClose: () => a(!1)
  }), (0, b.jsx)(jb, {
   open: o,
   onClose: () => s(!1)
  }), (0, b.jsx)(vx, {
   open: u,
   onClose: () => d(!1)
  }), (0, b.jsx)(Yb, {
   open: f,
   onClose: () => p(!1)
  }), (0, b.jsx)(Xb, {
   open: m,
   onClose: () => h(!1)
  }), (0, b.jsx)(tx, {
   open: g,
   onClose: () => v(!1)
  }), (0, b.jsx)(ix, {
   open: !!D,
   onClose: O
  }), (0, b.jsx)(sx, {
   open: !!k,
   onClose: A
  }), (0, b.jsx)(yx, {
   open: c,
   title: `Start a new map?`,
   description: `This creates a fresh central topic. Your current map stays in undo history and remains saved locally until replaced.`,
   confirmLabel: `Create new map`,
   onConfirm: P,
   onClose: () => l(!1)
  }), (0, b.jsx)(`input`, {
   ref: y,
   type: `file`,
   accept: `.json,.md,.markdown,application/json,text/markdown,text/plain`,
   className: `hidden`,
   onChange: async e => {
    let t = e.target.files?.[0];
    if (e.target.value = ``, t) try {
     let e = Wx(await t.text(), t.name);
     $.getState().replaceDocument(e), x(`Imported ${e.nodes.length} ${e.nodes.length===1?`topic`:`topics`} from ${t.name}.`, `success`)
    } catch (e) {
     x(e?.message || `That file could not be imported.`, `error`)
    }
   },
   "aria-label": `Import a JSON or Markdown mind map`
  })]
 })
}

function qC() {
 return (0, b.jsx)(_f, {
  children: (0, b.jsx)(KC, {})
 })
}
window.__mindx = $, window.__mindxVersion = lv, (0, v.createRoot)(document.getElementById(`root`)).render((0, b.jsx)(_.StrictMode, {
 children: (0, b.jsx)(qC, {})
}));