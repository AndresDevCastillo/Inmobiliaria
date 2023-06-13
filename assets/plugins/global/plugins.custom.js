/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
  "use strict";
  var n = [],
    i = Object.getPrototypeOf,
    a = n.slice,
    r = n.flat ? function (e) {
      return n.flat.call(e)
    } : function (e) {
      return n.concat.apply([], e)
    },
    o = n.push,
    s = n.indexOf,
    l = {},
    c = l.toString,
    u = l.hasOwnProperty,
    d = u.toString,
    h = d.call(Object),
    f = {},
    p = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    m = function (e) {
      return null != e && e === e.window
    },
    g = e.document,
    v = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function y(e, t, n) {
    var i, a, r = (n = n || g).createElement("script");
    if (r.text = e, t)
      for (i in v)(a = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, a);
    n.head.appendChild(r).parentNode.removeChild(r)
  }

  function b(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var x = "3.6.0",
    _ = function (e, t) {
      return new _.fn.init(e, t)
    };

  function w(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return !p(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  _.fn = _.prototype = {
    jquery: x,
    constructor: _,
    length: 0,
    toArray: function () {
      return a.call(this)
    },
    get: function (e) {
      return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = _.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return _.each(this, e)
    },
    map: function (e) {
      return this.pushStack(_.map(this, (function (t, n) {
        return e.call(t, n, t)
      })))
    },
    slice: function () {
      return this.pushStack(a.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    even: function () {
      return this.pushStack(_.grep(this, (function (e, t) {
        return (t + 1) % 2
      })))
    },
    odd: function () {
      return this.pushStack(_.grep(this, (function (e, t) {
        return t % 2
      })))
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: o,
    sort: n.sort,
    splice: n.splice
  }, _.extend = _.fn.extend = function () {
    var e, t, n, i, a, r, o = arguments[0] || {},
      s = 1,
      l = arguments.length,
      c = !1;
    for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || p(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
      if (null != (e = arguments[s]))
        for (t in e) i = e[t], "__proto__" !== t && o !== i && (c && i && (_.isPlainObject(i) || (a = Array.isArray(i))) ? (n = o[t], r = a && !Array.isArray(n) ? [] : a || _.isPlainObject(n) ? n : {}, a = !1, o[t] = _.extend(c, r, i)) : void 0 !== i && (o[t] = i));
    return o
  }, _.extend({
    expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = u.call(t, "constructor") && t.constructor) && d.call(n) === h)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t, n) {
      y(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function (e, t) {
      var n, i = 0;
      if (w(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (w(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : s.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, a = e.length; i < n; i++) e[a++] = t[i];
      return e.length = a, e
    },
    grep: function (e, t, n) {
      for (var i = [], a = 0, r = e.length, o = !n; a < r; a++) !t(e[a], a) !== o && i.push(e[a]);
      return i
    },
    map: function (e, t, n) {
      var i, a, o = 0,
        s = [];
      if (w(e))
        for (i = e.length; o < i; o++) null != (a = t(e[o], o, n)) && s.push(a);
      else
        for (o in e) null != (a = t(e[o], o, n)) && s.push(a);
      return r(s)
    },
    guid: 1,
    support: f
  }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase()
  }));
  var k =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    function (e) {
      var t, n, i, a, r, o, s, l, c, u, d, h, f, p, m, g, v, y, b, x = "sizzle" + 1 * new Date,
        _ = e.document,
        w = 0,
        k = 0,
        M = le(),
        L = le(),
        S = le(),
        A = le(),
        T = function (e, t) {
          return e === t && (d = !0), 0
        },
        D = {}.hasOwnProperty,
        C = [],
        E = C.pop,
        O = C.push,
        Y = C.push,
        P = C.slice,
        I = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        N = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        F = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + N + "*\\]",
        R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        z = new RegExp(N + "+", "g"),
        B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
        W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
        V = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
        q = new RegExp(N + "|>"),
        U = new RegExp(R),
        X = new RegExp("^" + H + "$"),
        $ = {
          ID: new RegExp("^#(" + H + ")"),
          CLASS: new RegExp("^\\.(" + H + ")"),
          TAG: new RegExp("^(" + H + "|[*])"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + R),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
          bool: new RegExp("^(?:" + j + ")$", "i"),
          needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        G = /HTML$/i,
        Z = /^(?:input|select|textarea|button)$/i,
        K = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        },
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ae = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        re = function () {
          h()
        },
        oe = xe((function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }), {
          dir: "parentNode",
          next: "legend"
        });
      try {
        Y.apply(C = P.call(_.childNodes), _.childNodes), C[_.childNodes.length].nodeType
      } catch (e) {
        Y = {
          apply: C.length ? function (e, t) {
            O.apply(e, P.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }

      function se(e, t, i, a) {
        var r, s, c, u, d, p, v, y = t && t.ownerDocument,
          _ = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return i;
        if (!a && (h(t), t = t || f, m)) {
          if (11 !== _ && (d = Q.exec(e)))
            if (r = d[1]) {
              if (9 === _) {
                if (!(c = t.getElementById(r))) return i;
                if (c.id === r) return i.push(c), i
              } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
            } else {
              if (d[2]) return Y.apply(i, t.getElementsByTagName(e)), i;
              if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return Y.apply(i, t.getElementsByClassName(r)), i
            } if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === _ && (q.test(e) || V.test(e))) {
              for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, ae) : t.setAttribute("id", u = x)), s = (p = o(e)).length; s--;) p[s] = (u ? "#" + u : ":scope") + " " + be(p[s]);
              v = p.join(",")
            }
            try {
              return Y.apply(i, y.querySelectorAll(v)), i
            } catch (t) {
              A(e, !0)
            } finally {
              u === x && t.removeAttribute("id")
            }
          }
        }
        return l(e.replace(B, "$1"), t, i, a)
      }

      function le() {
        var e = [];
        return function t(n, a) {
          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = a
        }
      }

      function ce(e) {
        return e[x] = !0, e
      }

      function ue(e) {
        var t = f.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function de(e, t) {
        for (var n = e.split("|"), a = n.length; a--;) i.attrHandle[n[a]] = t
      }

      function he(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function me(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function ge(e) {
        return ce((function (t) {
          return t = +t, ce((function (n, i) {
            for (var a, r = e([], n.length, t), o = r.length; o--;) n[a = r[o]] && (n[a] = !(i[a] = n[a]))
          }))
        }))
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in n = se.support = {}, r = se.isXML = function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !G.test(t || n && n.nodeName || "HTML")
        }, h = se.setDocument = function (e) {
          var t, a, o = e ? e.ownerDocument || e : _;
          return o != f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, m = !r(f), _ != f && (a = f.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", re, !1) : a.attachEvent && a.attachEvent("onunload", re)), n.scope = ue((function (e) {
            return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
          })), n.attributes = ue((function (e) {
            return e.className = "i", !e.getAttribute("className")
          })), n.getElementsByTagName = ue((function (e) {
            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
          })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue((function (e) {
            return p.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
          })), n.getById ? (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && m) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && m) {
              var n, i, a, r = t.getElementById(e);
              if (r) {
                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                for (a = t.getElementsByName(e), i = 0; r = a[i++];)
                  if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
              }
              return []
            }
          }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function (e, t) {
            var n, i = [],
              a = 0,
              r = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = r[a++];) 1 === n.nodeType && i.push(n);
              return i
            }
            return r
          }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
          }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ue((function (e) {
            var t;
            p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
          })), ue((function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = f.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
          }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
          })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
          } : function (e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, T = t ? function (e, t) {
            if (e === t) return d = !0, 0;
            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == _ && b(_, e) ? -1 : t == f || t.ownerDocument == _ && b(_, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
          } : function (e, t) {
            if (e === t) return d = !0, 0;
            var n, i = 0,
              a = e.parentNode,
              r = t.parentNode,
              o = [e],
              s = [t];
            if (!a || !r) return e == f ? -1 : t == f ? 1 : a ? -1 : r ? 1 : u ? I(u, e) - I(u, t) : 0;
            if (a === r) return he(e, t);
            for (n = e; n = n.parentNode;) o.unshift(n);
            for (n = t; n = n.parentNode;) s.unshift(n);
            for (; o[i] === s[i];) i++;
            return i ? he(o[i], s[i]) : o[i] == _ ? -1 : s[i] == _ ? 1 : 0
          }, f) : f
        }, se.matches = function (e, t) {
          return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
          if (h(e), n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
            var i = y.call(e, t);
            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
          } catch (e) {
            A(t, !0)
          }
          return se(t, f, null, [e]).length > 0
        }, se.contains = function (e, t) {
          return (e.ownerDocument || e) != f && h(e), b(e, t)
        }, se.attr = function (e, t) {
          (e.ownerDocument || e) != f && h(e);
          var a = i.attrHandle[t.toLowerCase()],
            r = a && D.call(i.attrHandle, t.toLowerCase()) ? a(e, t, !m) : void 0;
          return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
          return (e + "").replace(ie, ae)
        }, se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
          var t, i = [],
            a = 0,
            r = 0;
          if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(T), d) {
            for (; t = e[r++];) t === e[r] && (a = i.push(r));
            for (; a--;) e.splice(i[a], 1)
          }
          return u = null, e
        }, a = se.getText = function (e) {
          var t, n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
            } else if (3 === r || 4 === r) return e.nodeValue
          } else
            for (; t = e[i++];) n += a(t);
          return n
        }, (i = se.selectors = {
          cacheLength: 50,
          createPseudo: ce,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
            },
            PSEUDO: function (e) {
              var t, n = !e[6] && e[2];
              return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function (e) {
              var t = M[e + " "];
              return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + N + "|$)")) && M(e, (function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              }))
            },
            ATTR: function (e, t, n) {
              return function (i) {
                var a = se.attr(i, e);
                return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function (e, t, n, i, a) {
              var r = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === i && 0 === a ? function (e) {
                return !!e.parentNode
              } : function (t, n, l) {
                var c, u, d, h, f, p, m = r !== o ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;
                if (g) {
                  if (r) {
                    for (; m;) {
                      for (h = t; h = h[m];)
                        if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = m = "only" === e && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [o ? g.firstChild : g.lastChild], o && y) {
                    for (b = (f = (c = (u = (d = (h = g)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
                      if (1 === h.nodeType && ++b && h === t) {
                        u[e] = [w, f, b];
                        break
                      }
                  } else if (y && (b = f = (c = (u = (d = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === b)
                    for (;
                      (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [w, b]), h !== t)););
                  return (b -= a) === i || b % i == 0 && b / i >= 0
                }
              }
            },
            PSEUDO: function (e, t) {
              var n, a = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return a[x] ? a(t) : a.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                for (var i, r = a(e, t), o = r.length; o--;) e[i = I(e, r[o])] = !(n[i] = r[o])
              })) : function (e) {
                return a(e, 0, n)
              }) : a
            }
          },
          pseudos: {
            not: ce((function (e) {
              var t = [],
                n = [],
                i = s(e.replace(B, "$1"));
              return i[x] ? ce((function (e, t, n, a) {
                for (var r, o = i(e, null, a, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
              })) : function (e, a, r) {
                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
              }
            })),
            has: ce((function (e) {
              return function (t) {
                return se(e, t).length > 0
              }
            })),
            contains: ce((function (e) {
              return e = e.replace(te, ne),
                function (t) {
                  return (t.textContent || a(t)).indexOf(e) > -1
                }
            })),
            lang: ce((function (e) {
              return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                function (t) {
                  var n;
                  do {
                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            })),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function (e) {
              return e === p
            },
            focus: function (e) {
              return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function (e) {
              return !i.pseudos.empty(e)
            },
            header: function (e) {
              return K.test(e.nodeName)
            },
            input: function (e) {
              return Z.test(e.nodeName)
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: ge((function () {
              return [0]
            })),
            last: ge((function (e, t) {
              return [t - 1]
            })),
            eq: ge((function (e, t, n) {
              return [n < 0 ? n + t : n]
            })),
            even: ge((function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            })),
            odd: ge((function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            })),
            lt: ge((function (e, t, n) {
              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
              return e
            })),
            gt: ge((function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e
            }))
          }
        }).pseudos.nth = i.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) i.pseudos[t] = fe(t);
      for (t in {
          submit: !0,
          reset: !0
        }) i.pseudos[t] = pe(t);

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function xe(e, t, n) {
        var i = t.dir,
          a = t.next,
          r = a || i,
          o = n && "parentNode" === r,
          s = k++;
        return t.first ? function (t, n, a) {
          for (; t = t[i];)
            if (1 === t.nodeType || o) return e(t, n, a);
          return !1
        } : function (t, n, l) {
          var c, u, d, h = [w, s];
          if (l) {
            for (; t = t[i];)
              if ((1 === t.nodeType || o) && e(t, n, l)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || o)
                if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[i] || t;
                else {
                  if ((c = u[r]) && c[0] === w && c[1] === s) return h[2] = c[2];
                  if (u[r] = h, h[2] = e(t, n, l)) return !0
                } return !1
        }
      }

      function _e(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var a = e.length; a--;)
            if (!e[a](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function we(e, t, n, i, a) {
        for (var r, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, a) || (o.push(r), c && t.push(s)));
        return o
      }

      function ke(e, t, n, i, a, r) {
        return i && !i[x] && (i = ke(i)), a && !a[x] && (a = ke(a, r)), ce((function (r, o, s, l) {
          var c, u, d, h = [],
            f = [],
            p = o.length,
            m = r || function (e, t, n) {
              for (var i = 0, a = t.length; i < a; i++) se(e, t[i], n);
              return n
            }(t || "*", s.nodeType ? [s] : s, []),
            g = !e || !r && t ? m : we(m, h, e, s, l),
            v = n ? a || (r ? e : p || i) ? [] : o : g;
          if (n && n(g, v, s, l), i)
            for (c = we(v, f), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
          if (r) {
            if (a || e) {
              if (a) {
                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                a(null, v = [], c, l)
              }
              for (u = v.length; u--;)(d = v[u]) && (c = a ? I(r, d) : h[u]) > -1 && (r[c] = !(o[c] = d))
            }
          } else v = we(v === o ? v.splice(p, v.length) : v), a ? a(null, o, v, l) : Y.apply(o, v)
        }))
      }

      function Me(e) {
        for (var t, n, a, r = e.length, o = i.relative[e[0].type], s = o || i.relative[" "], l = o ? 1 : 0, u = xe((function (e) {
            return e === t
          }), s, !0), d = xe((function (e) {
            return I(t, e) > -1
          }), s, !0), h = [function (e, n, i) {
            var a = !o && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
            return t = null, a
          }]; l < r; l++)
          if (n = i.relative[e[l].type]) h = [xe(_e(h), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
              for (a = ++l; a < r && !i.relative[e[a].type]; a++);
              return ke(l > 1 && _e(h), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(B, "$1"), n, l < a && Me(e.slice(l, a)), a < r && Me(e = e.slice(a)), a < r && be(e))
            }
            h.push(n)
          } return _e(h)
      }
      return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, o = se.tokenize = function (e, t) {
        var n, a, r, o, s, l, c, u = L[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (s = e, l = [], c = i.preFilter; s;) {
          for (o in n && !(a = W.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(r = [])), n = !1, (a = V.exec(s)) && (n = a.shift(), r.push({
              value: n,
              type: a[0].replace(B, " ")
            }), s = s.slice(n.length)), i.filter) !(a = $[o].exec(s)) || c[o] && !(a = c[o](a)) || (n = a.shift(), r.push({
            value: n,
            type: o,
            matches: a
          }), s = s.slice(n.length));
          if (!n) break
        }
        return t ? s.length : s ? se.error(e) : L(e, l).slice(0)
      }, s = se.compile = function (e, t) {
        var n, a = [],
          r = [],
          s = S[e + " "];
        if (!s) {
          for (t || (t = o(e)), n = t.length; n--;)(s = Me(t[n]))[x] ? a.push(s) : r.push(s);
          (s = S(e, function (e, t) {
            var n = t.length > 0,
              a = e.length > 0,
              r = function (r, o, s, l, u) {
                var d, p, g, v = 0,
                  y = "0",
                  b = r && [],
                  x = [],
                  _ = c,
                  k = r || a && i.find.TAG("*", u),
                  M = w += null == _ ? 1 : Math.random() || .1,
                  L = k.length;
                for (u && (c = o == f || o || u); y !== L && null != (d = k[y]); y++) {
                  if (a && d) {
                    for (p = 0, o || d.ownerDocument == f || (h(d), s = !m); g = e[p++];)
                      if (g(d, o || f, s)) {
                        l.push(d);
                        break
                      } u && (w = M)
                  }
                  n && ((d = !g && d) && v--, r && b.push(d))
                }
                if (v += y, n && y !== v) {
                  for (p = 0; g = t[p++];) g(b, x, o, s);
                  if (r) {
                    if (v > 0)
                      for (; y--;) b[y] || x[y] || (x[y] = E.call(l));
                    x = we(x)
                  }
                  Y.apply(l, x), u && !r && x.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                }
                return u && (w = M, c = _), b
              };
            return n ? ce(r) : r
          }(r, a))).selector = e
        }
        return s
      }, l = se.select = function (e, t, n, a) {
        var r, l, c, u, d, h = "function" == typeof e && e,
          f = !a && o(e = h.selector || e);
        if (n = n || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
            h && (t = t.parentNode), e = e.slice(l.shift().value.length)
          }
          for (r = $.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
            if ((d = i.find[u]) && (a = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
              if (l.splice(r, 1), !(e = a.length && be(l))) return Y.apply(n, a), n;
              break
            }
        }
        return (h || s(e, f))(a, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
      }, n.sortStable = x.split("").sort(T).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = ue((function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
      })), ue((function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      })) || de("type|href|height|width", (function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      })), n.attributes && ue((function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      })) || de("value", (function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      })), ue((function (e) {
        return null == e.getAttribute("disabled")
      })) || de(j, (function (e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      })), se
    }(e);
  _.find = k, _.expr = k.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = k.uniqueSort, _.text = k.getText, _.isXMLDoc = k.isXML, _.contains = k.contains, _.escapeSelector = k.escape;
  var M = function (e, t, n) {
      for (var i = [], a = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (a && _(e).is(n)) break;
          i.push(e)
        } return i
    },
    L = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    S = _.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, t, n) {
    return p(t) ? _.grep(e, (function (e, i) {
      return !!t.call(e, i, e) !== n
    })) : t.nodeType ? _.grep(e, (function (e) {
      return e === t !== n
    })) : "string" != typeof t ? _.grep(e, (function (e) {
      return s.call(t, e) > -1 !== n
    })) : _.filter(t, e, n)
  }
  _.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, (function (e) {
      return 1 === e.nodeType
    })))
  }, _.fn.extend({
    find: function (e) {
      var t, n, i = this.length,
        a = this;
      if ("string" != typeof e) return this.pushStack(_(e).filter((function () {
        for (t = 0; t < i; t++)
          if (_.contains(a[t], this)) return !0
      })));
      for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, a[t], n);
      return i > 1 ? _.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0))
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && S.test(e) ? _(e) : e || [], !1).length
    }
  });
  var C, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (_.fn.init = function (e, t, n) {
    var i, a;
    if (!e) return this;
    if (n = n || C, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), T.test(i[1]) && _.isPlainObject(t))
          for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (a = g.getElementById(i[2])) && (this[0] = a, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
  }).prototype = _.fn, C = _(g);
  var O = /^(?:parents|prev(?:Until|All))/,
    Y = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function P(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  _.fn.extend({
    has: function (e) {
      var t = _(e, this),
        n = t.length;
      return this.filter((function () {
        for (var e = 0; e < n; e++)
          if (_.contains(this, t[e])) return !0
      }))
    },
    closest: function (e, t) {
      var n, i = 0,
        a = this.length,
        r = [],
        o = "string" != typeof e && _(e);
      if (!S.test(e))
        for (; i < a; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
              r.push(n);
              break
            } return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r)
    },
    index: function (e) {
      return e ? "string" == typeof e ? s.call(_(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), _.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return M(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return M(e, "parentNode", n)
    },
    next: function (e) {
      return P(e, "nextSibling")
    },
    prev: function (e) {
      return P(e, "previousSibling")
    },
    nextAll: function (e) {
      return M(e, "nextSibling")
    },
    prevAll: function (e) {
      return M(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return M(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return M(e, "previousSibling", n)
    },
    siblings: function (e) {
      return L((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return L(e.firstChild)
    },
    contents: function (e) {
      return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
    }
  }, (function (e, t) {
    _.fn[e] = function (n, i) {
      var a = _.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = _.filter(i, a)), this.length > 1 && (Y[e] || _.uniqueSort(a), O.test(e) && a.reverse()), this.pushStack(a)
    }
  }));
  var I = /[^\x20\t\r\n\f]+/g;

  function j(e) {
    return e
  }

  function N(e) {
    throw e
  }

  function H(e, t, n, i) {
    var a;
    try {
      e && p(a = e.promise) ? a.call(e).done(t).fail(n) : e && p(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  _.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};
      return _.each(e.match(I) || [], (function (e, n) {
        t[n] = !0
      })), t
    }(e) : _.extend({}, e);
    var t, n, i, a, r = [],
      o = [],
      s = -1,
      l = function () {
        for (a = a || e.once, i = t = !0; o.length; s = -1)
          for (n = o.shift(); ++s < r.length;) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
        e.memory || (n = !1), t = !1, a && (r = n ? [] : "")
      },
      c = {
        add: function () {
          return r && (n && !t && (s = r.length - 1, o.push(n)), function t(n) {
            _.each(n, (function (n, i) {
              p(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i)
            }))
          }(arguments), n && !t && l()), this
        },
        remove: function () {
          return _.each(arguments, (function (e, t) {
            for (var n;
              (n = _.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= s && s--
          })), this
        },
        has: function (e) {
          return e ? _.inArray(e, r) > -1 : r.length > 0
        },
        empty: function () {
          return r && (r = []), this
        },
        disable: function () {
          return a = o = [], r = n = "", this
        },
        disabled: function () {
          return !r
        },
        lock: function () {
          return a = o = [], n || t || (r = n = ""), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, n) {
          return a || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
        },
        fire: function () {
          return c.fireWith(this, arguments), this
        },
        fired: function () {
          return !!i
        }
      };
    return c
  }, _.extend({
    Deferred: function (t) {
      var n = [
          ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
          ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        a = {
          state: function () {
            return i
          },
          always: function () {
            return r.done(arguments).fail(arguments), this
          },
          catch: function (e) {
            return a.then(null, e)
          },
          pipe: function () {
            var e = arguments;
            return _.Deferred((function (t) {
              _.each(n, (function (n, i) {
                var a = p(e[i[4]]) && e[i[4]];
                r[i[1]]((function () {
                  var e = a && a.apply(this, arguments);
                  e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [e] : arguments)
                }))
              })), e = null
            })).promise()
          },
          then: function (t, i, a) {
            var r = 0;

            function o(t, n, i, a) {
              return function () {
                var s = this,
                  l = arguments,
                  c = function () {
                    var e, c;
                    if (!(t < r)) {
                      if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      c = e && ("object" == typeof e || "function" == typeof e) && e.then, p(c) ? a ? c.call(e, o(r, n, j, a), o(r, n, N, a)) : (r++, c.call(e, o(r, n, j, a), o(r, n, N, a), o(r, n, j, n.notifyWith))) : (i !== j && (s = void 0, l = [e]), (a || n.resolveWith)(s, l))
                    }
                  },
                  u = a ? c : function () {
                    try {
                      c()
                    } catch (e) {
                      _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (i !== N && (s = void 0, l = [e]), n.rejectWith(s, l))
                    }
                  };
                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
              }
            }
            return _.Deferred((function (e) {
              n[0][3].add(o(0, e, p(a) ? a : j, e.notifyWith)), n[1][3].add(o(0, e, p(t) ? t : j)), n[2][3].add(o(0, e, p(i) ? i : N))
            })).promise()
          },
          promise: function (e) {
            return null != e ? _.extend(e, a) : a
          }
        },
        r = {};
      return _.each(n, (function (e, t) {
        var o = t[2],
          s = t[5];
        a[t[1]] = o.add, s && o.add((function () {
          i = s
        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
        }, r[t[0] + "With"] = o.fireWith
      })), a.promise(r), t && t.call(r, r), r
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        i = Array(n),
        r = a.call(arguments),
        o = _.Deferred(),
        s = function (e) {
          return function (n) {
            i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(i, r)
          }
        };
      if (t <= 1 && (H(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || p(r[n] && r[n].then))) return o.then();
      for (; n--;) H(r[n], s(n), o.reject);
      return o.promise()
    }
  });
  var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  _.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, _.readyException = function (t) {
    e.setTimeout((function () {
      throw t
    }))
  };
  var R = _.Deferred();

  function z() {
    g.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), _.ready()
  }
  _.fn.ready = function (e) {
    return R.then(e).catch((function (e) {
      _.readyException(e)
    })), this
  }, _.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || R.resolveWith(g, [_]))
    }
  }), _.ready.then = R.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(_.ready) : (g.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
  var B = function (e, t, n, i, a, r, o) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (s in a = !0, n) B(e, t, s, n[s], !0, r, o);
      else if (void 0 !== i && (a = !0, p(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(_(e), n)
        })), t))
        for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
      return a ? e : c ? t.call(e) : l ? t(e[0], n) : r
    },
    W = /^-ms-/,
    V = /-([a-z])/g;

  function q(e, t) {
    return t.toUpperCase()
  }

  function U(e) {
    return e.replace(W, "ms-").replace(V, q)
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function $() {
    this.expando = _.expando + $.uid++
  }
  $.uid = 1, $.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var i, a = this.cache(e);
      if ("string" == typeof t) a[U(t)] = n;
      else
        for (i in t) a[U(i)] = t[i];
      return a
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(I) || []).length;
          for (; n--;) delete i[t[n]]
        }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !_.isEmptyObject(t)
    }
  };
  var G = new $,
    Z = new $,
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;

  function Q(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
          }(n)
        } catch (e) {}
        Z.set(e, t, n)
      } else n = void 0;
    return n
  }
  _.extend({
    hasData: function (e) {
      return Z.hasData(e) || G.hasData(e)
    },
    data: function (e, t, n) {
      return Z.access(e, t, n)
    },
    removeData: function (e, t) {
      Z.remove(e, t)
    },
    _data: function (e, t, n) {
      return G.access(e, t, n)
    },
    _removeData: function (e, t) {
      G.remove(e, t)
    }
  }), _.fn.extend({
    data: function (e, t) {
      var n, i, a, r = this[0],
        o = r && r.attributes;
      if (void 0 === e) {
        if (this.length && (a = Z.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
          for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = U(i.slice(5)), Q(r, i, a[i]));
          G.set(r, "hasDataAttrs", !0)
        }
        return a
      }
      return "object" == typeof e ? this.each((function () {
        Z.set(this, e)
      })) : B(this, (function (t) {
        var n;
        if (r && void 0 === t) return void 0 !== (n = Z.get(r, e)) || void 0 !== (n = Q(r, e)) ? n : void 0;
        this.each((function () {
          Z.set(this, e, t)
        }))
      }), null, t, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each((function () {
        Z.remove(this, e)
      }))
    }
  }), _.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, _.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = _.queue(e, t),
        i = n.length,
        a = n.shift(),
        r = _._queueHooks(e, t);
      "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, (function () {
        _.dequeue(e, t)
      }), r)), !i && r && r.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return G.get(e, n) || G.access(e, n, {
        empty: _.Callbacks("once memory").add((function () {
          G.remove(e, [t + "queue", n])
        }))
      })
    }
  }), _.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each((function () {
        var n = _.queue(this, e, t);
        _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
      }))
    },
    dequeue: function (e) {
      return this.each((function () {
        _.dequeue(this, e)
      }))
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, i = 1,
        a = _.Deferred(),
        r = this,
        o = this.length,
        s = function () {
          --i || a.resolveWith(r, [r])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = G.get(r[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      return s(), a.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    ie = g.documentElement,
    ae = function (e) {
      return _.contains(e.ownerDocument, e)
    },
    re = {
      composed: !0
    };
  ie.getRootNode && (ae = function (e) {
    return _.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
  });
  var oe = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === _.css(e, "display")
  };

  function se(e, t, n, i) {
    var a, r, o = 20,
      s = i ? function () {
        return i.cur()
      } : function () {
        return _.css(e, t, "")
      },
      l = s(),
      c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
      u = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && te.exec(_.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; o--;) _.style(e, t, u + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (o = 0), u /= r;
      u *= 2, _.style(e, t, u + c), n = n || []
    }
    return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = a)), a
  }
  var le = {};

  function ce(e) {
    var t, n = e.ownerDocument,
      i = e.nodeName,
      a = le[i];
    return a || (t = n.body.appendChild(n.createElement(i)), a = _.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), le[i] = a, a)
  }

  function ue(e, t) {
    for (var n, i, a = [], r = 0, o = e.length; r < o; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (a[r] = G.get(i, "display") || null, a[r] || (i.style.display = "")), "" === i.style.display && oe(i) && (a[r] = ce(i))) : "none" !== n && (a[r] = "none", G.set(i, "display", n)));
    for (r = 0; r < o; r++) null != a[r] && (e[r].style.display = a[r]);
    return e
  }
  _.fn.extend({
    show: function () {
      return ue(this, !0)
    },
    hide: function () {
      return ue(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
        oe(this) ? _(this).show() : _(this).hide()
      }))
    }
  });
  var de, he, fe = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    me = /^$|^module$|\/(?:java|ecma)script/i;
  de = g.createDocumentFragment().appendChild(g.createElement("div")), (he = g.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), de.appendChild(he), f.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", f.option = !!de.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var be = /<|&#?\w+;/;

  function xe(e, t, n, i, a) {
    for (var r, o, s, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
      if ((r = e[f]) || 0 === r)
        if ("object" === b(r)) _.merge(h, r.nodeType ? [r] : r);
        else if (be.test(r)) {
      for (o = o || d.appendChild(t.createElement("div")), s = (pe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, o.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
      _.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
    } else h.push(t.createTextNode(r));
    for (d.textContent = "", f = 0; r = h[f++];)
      if (i && _.inArray(r, i) > -1) a && a.push(r);
      else if (c = ae(r), o = ve(d.appendChild(r), "script"), c && ye(o), n)
      for (u = 0; r = o[u++];) me.test(r.type || "") && n.push(r);
    return d
  }
  var _e = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0
  }

  function ke() {
    return !1
  }

  function Me(e, t) {
    return e === function () {
      try {
        return g.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }

  function Le(e, t, n, i, a, r) {
    var o, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), t) Le(e, s, n, i, t[s], r);
      return e
    }
    if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = ke;
    else if (!a) return e;
    return 1 === r && (o = a, (a = function (e) {
      return _().off(e), o.apply(this, arguments)
    }).guid = o.guid || (o.guid = _.guid++)), e.each((function () {
      _.event.add(this, t, a, i, n)
    }))
  }

  function Se(e, t, n) {
    n ? (G.set(e, t, !1), _.event.add(e, t, {
      namespace: !1,
      handler: function (e) {
        var i, r, o = G.get(this, t);
        if (1 & e.isTrigger && this[t]) {
          if (o.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
          else if (o = a.call(arguments), G.set(this, t, o), i = n(this, t), this[t](), o !== (r = G.get(this, t)) || i ? G.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
        } else o.length && (G.set(this, t, {
          value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === G.get(e, t) && _.event.add(e, t, we)
  }
  _.event = {
    global: {},
    add: function (e, t, n, i, a) {
      var r, o, s, l, c, u, d, h, f, p, m, g = G.get(e);
      if (X(e))
        for (n.handler && (n = (r = n).handler, a = r.selector), a && _.find.matchesSelector(ie, a), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function (t) {
            return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
          }), c = (t = (t || "").match(I) || [""]).length; c--;) f = m = (s = _e.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (a ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, u = _.extend({
          type: f,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: a,
          needsContext: a && _.expr.match.needsContext.test(a),
          namespace: p.join(".")
        }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[f] = !0)
    },
    remove: function (e, t, n, i, a) {
      var r, o, s, l, c, u, d, h, f, p, m, g = G.hasData(e) && G.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(I) || [""]).length; c--;)
          if (f = m = (s = _e.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
            for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = h.length; r--;) u = h[r], !a && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
            o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || _.removeEvent(e, f, g.handle), delete l[f])
          } else
            for (f in l) _.event.remove(e, f + t[c], n, i, !0);
        _.isEmptyObject(l) && G.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, i, a, r, o, s = new Array(arguments.length),
        l = _.event.fix(e),
        c = (G.get(this, "events") || Object.create(null))[l.type] || [],
        u = _.event.special[l.type] || {};
      for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
        for (o = _.event.handlers.call(this, l, c), t = 0;
          (a = o[t++]) && !l.isPropagationStopped();)
          for (l.currentTarget = a.elem, n = 0;
            (r = a.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, l), l.result
      }
    },
    handlers: function (e, t) {
      var n, i, a, r, o, s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], o = {}, n = 0; n < l; n++) void 0 === o[a = (i = t[n]).selector + " "] && (o[a] = i.needsContext ? _(a, this).index(c) > -1 : _.find(a, this, null, [c]).length), o[a] && r.push(i);
            r.length && s.push({
              elem: c,
              handlers: r
            })
          } return c = this, l < t.length && s.push({
        elem: c,
        handlers: t.slice(l)
      }), s
    },
    addProp: function (e, t) {
      Object.defineProperty(_.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: p(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function (e) {
      return e[_.expando] ? e : new _.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return fe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
        },
        trigger: function (e) {
          var t = this || e;
          return fe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
        },
        _default: function (e) {
          var t = e.target;
          return fe.test(t.type) && t.click && A(t, "input") && G.get(t, "click") || A(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, _.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, _.Event = function (e, t) {
    if (!(this instanceof _.Event)) return new _.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
  }, _.Event.prototype = {
    constructor: _.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, _.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, _.event.addProp), _.each({
    focus: "focusin",
    blur: "focusout"
  }, (function (e, t) {
    _.event.special[e] = {
      setup: function () {
        return Se(this, e, Me), !1
      },
      trigger: function () {
        return Se(this, e), !0
      },
      _default: function () {
        return !0
      },
      delegateType: t
    }
  })), _.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, (function (e, t) {
    _.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, i = this,
          a = e.relatedTarget,
          r = e.handleObj;
        return a && (a === i || _.contains(i, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
      }
    }
  })), _.fn.extend({
    on: function (e, t, n, i) {
      return Le(this, e, t, n, i)
    },
    one: function (e, t, n, i) {
      return Le(this, e, t, n, i, 1)
    },
    off: function (e, t, n) {
      var i, a;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (a in e) this.off(a, t, e[a]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function () {
        _.event.remove(this, e, n, t)
      }))
    }
  });
  var Ae = /<script|<style|<link/i,
    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ce(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
  }

  function Ee(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Ye(e, t) {
    var n, i, a, r, o, s;
    if (1 === t.nodeType) {
      if (G.hasData(e) && (s = G.get(e).events))
        for (a in G.remove(t, "handle events"), s)
          for (n = 0, i = s[a].length; n < i; n++) _.event.add(t, a, s[a][n]);
      Z.hasData(e) && (r = Z.access(e), o = _.extend({}, r), Z.set(t, o))
    }
  }

  function Pe(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Ie(e, t, n, i) {
    t = r(t);
    var a, o, s, l, c, u, d = 0,
      h = e.length,
      m = h - 1,
      g = t[0],
      v = p(g);
    if (v || h > 1 && "string" == typeof g && !f.checkClone && Te.test(g)) return e.each((function (a) {
      var r = e.eq(a);
      v && (t[0] = g.call(this, a, r.html())), Ie(r, t, n, i)
    }));
    if (h && (o = (a = xe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === a.childNodes.length && (a = o), o || i)) {
      for (l = (s = _.map(ve(a, "script"), Ee)).length; d < h; d++) c = a, d !== m && (c = _.clone(c, !0, !0), l && _.merge(s, ve(c, "script"))), n.call(e[d], c, d);
      if (l)
        for (u = s[s.length - 1].ownerDocument, _.map(s, Oe), d = 0; d < l; d++) c = s[d], me.test(c.type || "") && !G.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
          nonce: c.nonce || c.getAttribute("nonce")
        }, u) : y(c.textContent.replace(De, ""), c, u))
    }
    return e
  }

  function je(e, t, n) {
    for (var i, a = t ? _.filter(t, e) : e, r = 0; null != (i = a[r]); r++) n || 1 !== i.nodeType || _.cleanData(ve(i)), i.parentNode && (n && ae(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));
    return e
  }
  _.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var i, a, r, o, s = e.cloneNode(!0),
        l = ae(e);
      if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
        for (o = ve(s), i = 0, a = (r = ve(e)).length; i < a; i++) Pe(r[i], o[i]);
      if (t)
        if (n)
          for (r = r || ve(e), o = o || ve(s), i = 0, a = r.length; i < a; i++) Ye(r[i], o[i]);
        else Ye(e, s);
      return (o = ve(s, "script")).length > 0 && ye(o, !l && ve(e, "script")), s
    },
    cleanData: function (e) {
      for (var t, n, i, a = _.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (X(n)) {
          if (t = n[G.expando]) {
            if (t.events)
              for (i in t.events) a[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
            n[G.expando] = void 0
          }
          n[Z.expando] && (n[Z.expando] = void 0)
        }
    }
  }), _.fn.extend({
    detach: function (e) {
      return je(this, e, !0)
    },
    remove: function (e) {
      return je(this, e)
    },
    text: function (e) {
      return B(this, (function (e) {
        return void 0 === e ? _.text(this) : this.empty().each((function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        }))
      }), null, e, arguments.length)
    },
    append: function () {
      return Ie(this, arguments, (function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ce(this, e).appendChild(e)
      }))
    },
    prepend: function () {
      return Ie(this, arguments, (function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ce(this, e);
          t.insertBefore(e, t.firstChild)
        }
      }))
    },
    before: function () {
      return Ie(this, arguments, (function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      }))
    },
    after: function () {
      return Ie(this, arguments, (function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      }))
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(ve(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map((function () {
        return _.clone(this, e, t)
      }))
    },
    html: function (e) {
      return B(this, (function (e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ae.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = _.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }), null, e, arguments.length)
    },
    replaceWith: function () {
      var e = [];
      return Ie(this, arguments, (function (t) {
        var n = this.parentNode;
        _.inArray(this, e) < 0 && (_.cleanData(ve(this)), n && n.replaceChild(t, this))
      }), e)
    }
  }), _.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, (function (e, t) {
    _.fn[e] = function (e) {
      for (var n, i = [], a = _(e), r = a.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), _(a[s])[t](n), o.apply(i, n.get());
      return this.pushStack(i)
    }
  }));
  var Ne = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    },
    Fe = function (e, t, n) {
      var i, a, r = {};
      for (a in t) r[a] = e.style[a], e.style[a] = t[a];
      for (a in i = n.call(e), t) e.style[a] = r[a];
      return i
    },
    Re = new RegExp(ne.join("|"), "i");

  function ze(e, t, n) {
    var i, a, r, o, s = e.style;
    return (n = n || He(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ae(e) || (o = _.style(e, t)), !f.pixelBoxStyles() && Ne.test(o) && Re.test(t) && (i = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = a, s.maxWidth = r)), void 0 !== o ? o + "" : o
  }

  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", o = 36 === n(t.right), a = 36 === n(t.width), u.style.position = "absolute", r = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
      }
    }

    function n(e) {
      return Math.round(parseFloat(e))
    }
    var i, a, r, o, s, l, c = g.createElement("div"),
      u = g.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(f, {
      boxSizingReliable: function () {
        return t(), a
      },
      pixelBoxStyles: function () {
        return t(), o
      },
      pixelPosition: function () {
        return t(), i
      },
      reliableMarginLeft: function () {
        return t(), l
      },
      scrollboxSize: function () {
        return t(), r
      },
      reliableTrDimensions: function () {
        var t, n, i, a;
        return null == s && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), a = e.getComputedStyle(n), s = parseInt(a.height, 10) + parseInt(a.borderTopWidth, 10) + parseInt(a.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), s
      }
    }))
  }();
  var We = ["Webkit", "Moz", "ms"],
    Ve = g.createElement("div").style,
    qe = {};

  function Ue(e) {
    var t = _.cssProps[e] || qe[e];
    return t || (e in Ve ? e : qe[e] = function (e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
        if ((e = We[n] + t) in Ve) return e
    }(e) || e)
  }
  var Xe = /^(none|table(?!-c[ea]).+)/,
    $e = /^--/,
    Ge = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ze = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function Ke(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Je(e, t, n, i, a, r) {
    var o = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; o < 4; o += 2) "margin" === n && (l += _.css(e, n + ne[o], !0, a)), i ? ("content" === n && (l -= _.css(e, "padding" + ne[o], !0, a)), "margin" !== n && (l -= _.css(e, "border" + ne[o] + "Width", !0, a))) : (l += _.css(e, "padding" + ne[o], !0, a), "padding" !== n ? l += _.css(e, "border" + ne[o] + "Width", !0, a) : s += _.css(e, "border" + ne[o] + "Width", !0, a));
    return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0), l
  }

  function Qe(e, t, n) {
    var i = He(e),
      a = (!f.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
      r = a,
      o = ze(e, t, i),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ne.test(o)) {
      if (!n) return o;
      o = "auto"
    }
    return (!f.boxSizingReliable() && a || !f.reliableTrDimensions() && A(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (a = "border-box" === _.css(e, "boxSizing", !1, i), (r = s in e) && (o = e[s])), (o = parseFloat(o) || 0) + Je(e, t, n || (a ? "border" : "content"), r, i, o) + "px"
  }

  function et(e, t, n, i, a) {
    return new et.prototype.init(e, t, n, i, a)
  }
  _.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ze(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a, r, o, s = U(t),
          l = $e.test(t),
          c = e.style;
        if (l || (t = Ue(s)), o = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (a = o.get(e, !1, i)) ? a : c[t];
        "string" === (r = typeof n) && (a = te.exec(n)) && a[1] && (n = se(e, t, a), r = "number"), null != n && n == n && ("number" !== r || l || (n += a && a[3] || (_.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var a, r, o, s = U(t);
      return $e.test(t) || (t = Ue(s)), (o = _.cssHooks[t] || _.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = ze(e, t, i)), "normal" === a && t in Ze && (a = Ze[t]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a
    }
  }), _.each(["height", "width"], (function (e, t) {
    _.cssHooks[t] = {
      get: function (e, n, i) {
        if (n) return !Xe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, i) : Fe(e, Ge, (function () {
          return Qe(e, t, i)
        }))
      },
      set: function (e, n, i) {
        var a, r = He(e),
          o = !f.scrollboxSize() && "absolute" === r.position,
          s = (o || i) && "border-box" === _.css(e, "boxSizing", !1, r),
          l = i ? Je(e, t, i, s, r) : 0;
        return s && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Je(e, t, "border", !1, r) - .5)), l && (a = te.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ke(0, n, l)
      }
    }
  })), _.cssHooks.marginLeft = Be(f.reliableMarginLeft, (function (e, t) {
    if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
      marginLeft: 0
    }, (function () {
      return e.getBoundingClientRect().left
    }))) + "px"
  })), _.each({
    margin: "",
    padding: "",
    border: "Width"
  }, (function (e, t) {
    _.cssHooks[e + t] = {
      expand: function (n) {
        for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) a[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
        return a
      }
    }, "margin" !== e && (_.cssHooks[e + t].set = Ke)
  })), _.fn.extend({
    css: function (e, t) {
      return B(this, (function (e, t, n) {
        var i, a, r = {},
          o = 0;
        if (Array.isArray(t)) {
          for (i = He(e), a = t.length; o < a; o++) r[t[o]] = _.css(e, t[o], !1, i);
          return r
        }
        return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
      }), e, t, arguments.length > 1)
    }
  }), _.Tween = et, et.prototype = {
    constructor: et,
    init: function (e, t, n, i, a, r) {
      this.elem = e, this.prop = n, this.easing = a || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
    }
  }, et.prototype.init.prototype = et.prototype, et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, _.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, _.fx = et.prototype.init, _.fx.step = {};
  var tt, nt, it = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;

  function rt() {
    nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, _.fx.interval), _.fx.tick())
  }

  function ot() {
    return e.setTimeout((function () {
      tt = void 0
    })), tt = Date.now()
  }

  function st(e, t) {
    var n, i = 0,
      a = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) a["margin" + (n = ne[i])] = a["padding" + n] = e;
    return t && (a.opacity = a.width = e), a
  }

  function lt(e, t, n) {
    for (var i, a = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), r = 0, o = a.length; r < o; r++)
      if (i = a[r].call(n, t, e)) return i
  }

  function ct(e, t, n) {
    var i, a, r = 0,
      o = ct.prefilters.length,
      s = _.Deferred().always((function () {
        delete l.elem
      })),
      l = function () {
        if (a) return !1;
        for (var t = tt || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(i);
        return s.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
      },
      c = s.promise({
        elem: e,
        props: _.extend({}, t),
        opts: _.extend(!0, {
          specialEasing: {},
          easing: _.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tt || ot(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (a) return this;
          for (a = !0; n < i; n++) c.tweens[n].run(1);
          return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
        }
      }),
      u = c.props;
    for (! function (e, t) {
        var n, i, a, r, o;
        for (n in e)
          if (a = t[i = U(n)], r = e[n], Array.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (o = _.cssHooks[i]) && "expand" in o)
            for (n in r = o.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = a);
          else t[i] = a
      }(u, c.opts.specialEasing); r < o; r++)
      if (i = ct.prefilters[r].call(c, e, u, c.opts)) return p(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    return _.map(u, lt, c), p(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c
  }
  _.Animation = _.extend(ct, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n
        }]
      },
      tweener: function (e, t) {
        p(e) ? (t = e, e = ["*"]) : e = e.match(I);
        for (var n, i = 0, a = e.length; i < a; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
      },
      prefilters: [function (e, t, n) {
        var i, a, r, o, s, l, c, u, d = "width" in t || "height" in t,
          h = this,
          f = {},
          p = e.style,
          m = e.nodeType && oe(e),
          g = G.get(e, "fxshow");
        for (i in n.queue || (null == (o = _._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function () {
            o.unqueued || s()
          }), o.unqueued++, h.always((function () {
            h.always((function () {
              o.unqueued--, _.queue(e, "fx").length || o.empty.fire()
            }))
          }))), t)
          if (a = t[i], it.test(a)) {
            if (delete t[i], r = r || "toggle" === a, a === (m ? "hide" : "show")) {
              if ("show" !== a || !g || void 0 === g[i]) continue;
              m = !0
            }
            f[i] = g && g[i] || _.style(e, i)
          } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
          for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (ue([e], !0), c = e.style.display || c, u = _.css(e, "display"), ue([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done((function () {
              p.display = c
            })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function () {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
            display: c
          }), r && (g.hidden = !m), m && ue([e], !0), h.done((function () {
            for (i in m || ue([e]), G.remove(e, "fxshow"), f) _.style(e, i, f[i])
          }))), l = lt(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
      }],
      prefilter: function (e, t) {
        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
      }
    }), _.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? _.extend({}, e) : {
        complete: n || !n && t || p(e) && e,
        duration: e,
        easing: n && t || t && !p(t) && t
      };
      return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        p(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
      }, i
    }, _.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(oe).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i)
      },
      animate: function (e, t, n, i) {
        var a = _.isEmptyObject(e),
          r = _.speed(t, n, i),
          o = function () {
            var t = ct(this, _.extend({}, e), r);
            (a || G.get(this, "finish")) && t.stop(!0)
          };
        return o.finish = o, a || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
          var t = !0,
            a = null != e && e + "queueHooks",
            r = _.timers,
            o = G.get(this);
          if (a) o[a] && o[a].stop && i(o[a]);
          else
            for (a in o) o[a] && o[a].stop && at.test(a) && i(o[a]);
          for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));
          !t && n || _.dequeue(this, e)
        }))
      },
      finish: function (e) {
        return !1 !== e && (e = e || "fx"), this.each((function () {
          var t, n = G.get(this),
            i = n[e + "queue"],
            a = n[e + "queueHooks"],
            r = _.timers,
            o = i ? i.length : 0;
          for (n.finish = !0, _.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        }))
      }
    }), _.each(["toggle", "show", "hide"], (function (e, t) {
      var n = _.fn[t];
      _.fn[t] = function (e, i, a) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, a)
      }
    })), _.each({
      slideDown: st("show"),
      slideUp: st("hide"),
      slideToggle: st("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, (function (e, t) {
      _.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    })), _.timers = [], _.fx.tick = function () {
      var e, t = 0,
        n = _.timers;
      for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || _.fx.stop(), tt = void 0
    }, _.fx.timer = function (e) {
      _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
      nt || (nt = !0, rt())
    }, _.fx.stop = function () {
      nt = null
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fn.delay = function (t, n) {
      return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
        var a = e.setTimeout(n, t);
        i.stop = function () {
          e.clearTimeout(a)
        }
      }))
    },
    function () {
      var e = g.createElement("input"),
        t = g.createElement("select").appendChild(g.createElement("option"));
      e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
    }();
  var ut, dt = _.expr.attrHandle;
  _.fn.extend({
    attr: function (e, t) {
      return B(this, _.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each((function () {
        _.removeAttr(this, e)
      }))
    }
  }), _.extend({
    attr: function (e, t, n) {
      var i, a, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === r && _.isXMLDoc(e) || (a = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!f.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, i = 0,
        a = t && t.match(I);
      if (a && 1 === e.nodeType)
        for (; n = a[i++];) e.removeAttribute(n)
    }
  }), ut = {
    set: function (e, t, n) {
      return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, _.each(_.expr.match.bool.source.match(/\w+/g), (function (e, t) {
    var n = dt[t] || _.find.attr;
    dt[t] = function (e, t, i) {
      var a, r, o = t.toLowerCase();
      return i || (r = dt[o], dt[o] = a, a = null != n(e, t, i) ? o : null, dt[o] = r), a
    }
  }));
  var ht = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;

  function pt(e) {
    return (e.match(I) || []).join(" ")
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function gt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
  }
  _.fn.extend({
    prop: function (e, t) {
      return B(this, _.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each((function () {
        delete this[_.propFix[e] || e]
      }))
    }
  }), _.extend({
    prop: function (e, t, n) {
      var i, a, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(e) || (t = _.propFix[t] || t, a = _.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = _.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), f.optSelected || (_.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
    _.propFix[this.toLowerCase()] = this
  })), _.fn.extend({
    addClass: function (e) {
      var t, n, i, a, r, o, s, l = 0;
      if (p(e)) return this.each((function (t) {
        _(this).addClass(e.call(this, t, mt(this)))
      }));
      if ((t = gt(e)).length)
        for (; n = this[l++];)
          if (a = mt(n), i = 1 === n.nodeType && " " + pt(a) + " ") {
            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            a !== (s = pt(i)) && n.setAttribute("class", s)
          } return this
    },
    removeClass: function (e) {
      var t, n, i, a, r, o, s, l = 0;
      if (p(e)) return this.each((function (t) {
        _(this).removeClass(e.call(this, t, mt(this)))
      }));
      if (!arguments.length) return this.attr("class", "");
      if ((t = gt(e)).length)
        for (; n = this[l++];)
          if (a = mt(n), i = 1 === n.nodeType && " " + pt(a) + " ") {
            for (o = 0; r = t[o++];)
              for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
            a !== (s = pt(i)) && n.setAttribute("class", s)
          } return this
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        i = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function (n) {
        _(this).toggleClass(e.call(this, n, mt(this), t), t)
      })) : this.each((function () {
        var t, a, r, o;
        if (i)
          for (a = 0, r = _(this), o = gt(e); t = o[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else void 0 !== e && "boolean" !== n || ((t = mt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
      }))
    },
    hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && (" " + pt(mt(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var vt = /\r/g;
  _.fn.extend({
    val: function (e) {
      var t, n, i, a = this[0];
      return arguments.length ? (i = p(e), this.each((function (n) {
        var a;
        1 === this.nodeType && (null == (a = i ? e.call(this, n, _(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = _.map(a, (function (e) {
          return null == e ? "" : e + ""
        }))), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
      }))) : a ? (t = _.valHooks[a.type] || _.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof (n = a.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
    }
  }), _.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = _.find.attr(e, "value");
          return null != t ? t : pt(_.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, i, a = e.options,
            r = e.selectedIndex,
            o = "select-one" === e.type,
            s = o ? null : [],
            l = o ? r + 1 : a.length;
          for (i = r < 0 ? l : o ? r : 0; i < l; i++)
            if (((n = a[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = _(n).val(), o) return t;
              s.push(t)
            } return s
        },
        set: function (e, t) {
          for (var n, i, a = e.options, r = _.makeArray(t), o = a.length; o--;)((i = a[o]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), _.each(["radio", "checkbox"], (function () {
    _.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
      }
    }, f.checkOn || (_.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  })), f.focusin = "onfocusin" in e;
  var yt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (e) {
      e.stopPropagation()
    };
  _.extend(_.event, {
    trigger: function (t, n, i, a) {
      var r, o, s, l, c, d, h, f, v = [i || g],
        y = u.call(t, "type") ? t.type : t,
        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
      if (o = f = s = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : _.makeArray(n, [t]), h = _.event.special[y] || {}, a || !h.trigger || !1 !== h.trigger.apply(i, n))) {
        if (!a && !h.noBubble && !m(i)) {
          for (l = h.delegateType || y, yt.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), s = o;
          s === (i.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e)
        }
        for (r = 0;
          (o = v[r++]) && !t.isPropagationStopped();) f = o, t.type = r > 1 ? l : h.bindType || y, (d = (G.get(o, "events") || Object.create(null))[t.type] && G.get(o, "handle")) && d.apply(o, n), (d = c && o[c]) && d.apply && X(o) && (t.result = d.apply(o, n), !1 === t.result && t.preventDefault());
        return t.type = y, a || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !X(i) || c && p(i[y]) && !m(i) && ((s = i[c]) && (i[c] = null), _.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), i[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), _.event.triggered = void 0, s && (i[c] = s)), t.result
      }
    },
    simulate: function (e, t, n) {
      var i = _.extend(new _.Event, n, {
        type: e,
        isSimulated: !0
      });
      _.event.trigger(i, null, t)
    }
  }), _.fn.extend({
    trigger: function (e, t) {
      return this.each((function () {
        _.event.trigger(e, t, this)
      }))
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return _.event.trigger(e, t, n, !0)
    }
  }), f.focusin || _.each({
    focus: "focusin",
    blur: "focusout"
  }, (function (e, t) {
    var n = function (e) {
      _.event.simulate(t, e.target, _.event.fix(e))
    };
    _.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this.document || this,
          a = G.access(i, t);
        a || i.addEventListener(e, n, !0), G.access(i, t, (a || 0) + 1)
      },
      teardown: function () {
        var i = this.ownerDocument || this.document || this,
          a = G.access(i, t) - 1;
        a ? G.access(i, t, a) : (i.removeEventListener(e, n, !0), G.remove(i, t))
      }
    }
  }));
  var xt = e.location,
    _t = {
      guid: Date.now()
    },
    wt = /\?/;
  _.parseXML = function (t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {}
    return i = n && n.getElementsByTagName("parsererror")[0], n && !i || _.error("Invalid XML: " + (i ? _.map(i.childNodes, (function (e) {
      return e.textContent
    })).join("\n") : t)), n
  };
  var kt = /\[\]$/,
    Mt = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;

  function At(e, t, n, i) {
    var a;
    if (Array.isArray(t)) _.each(t, (function (t, a) {
      n || kt.test(e) ? i(e, a) : At(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
    }));
    else if (n || "object" !== b(t)) i(e, t);
    else
      for (a in t) At(e + "[" + a + "]", t[a], n, i)
  }
  _.param = function (e, t) {
    var n, i = [],
      a = function (e, t) {
        var n = p(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, (function () {
      a(this.name, this.value)
    }));
    else
      for (n in e) At(n, e[n], t, a);
    return i.join("&")
  }, _.fn.extend({
    serialize: function () {
      return _.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map((function () {
        var e = _.prop(this, "elements");
        return e ? _.makeArray(e) : this
      })).filter((function () {
        var e = this.type;
        return this.name && !_(this).is(":disabled") && St.test(this.nodeName) && !Lt.test(e) && (this.checked || !fe.test(e))
      })).map((function (e, t) {
        var n = _(this).val();
        return null == n ? null : Array.isArray(n) ? _.map(n, (function (e) {
          return {
            name: t.name,
            value: e.replace(Mt, "\r\n")
          }
        })) : {
          name: t.name,
          value: n.replace(Mt, "\r\n")
        }
      })).get()
    }
  });
  var Tt = /%20/g,
    Dt = /#.*$/,
    Ct = /([?&])_=[^&]*/,
    Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Yt = /^\/\//,
    Pt = {},
    It = {},
    jt = "*/".concat("*"),
    Nt = g.createElement("a");

  function Ht(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, a = 0,
        r = t.toLowerCase().match(I) || [];
      if (p(n))
        for (; i = r[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function Ft(e, t, n, i) {
    var a = {},
      r = e === It;

    function o(s) {
      var l;
      return a[s] = !0, _.each(e[s] || [], (function (e, s) {
        var c = s(t, n, i);
        return "string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
      })), l
    }
    return o(t.dataTypes[0]) || !a["*"] && o("*")
  }

  function Rt(e, t) {
    var n, i, a = _.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
    return i && _.extend(!0, e, i), e
  }
  Nt.href = xt.href, _.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": jt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": _.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Rt(Rt(e, _.ajaxSettings), t) : Rt(_.ajaxSettings, e)
    },
    ajaxPrefilter: Ht(Pt),
    ajaxTransport: Ht(It),
    ajax: function (t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, a, r, o, s, l, c, u, d, h, f = _.ajaxSetup({}, n),
        p = f.context || f,
        m = f.context && (p.nodeType || p.jquery) ? _(p) : _.event,
        v = _.Deferred(),
        y = _.Callbacks("once memory"),
        b = f.statusCode || {},
        x = {},
        w = {},
        k = "canceled",
        M = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!o)
                for (o = {}; t = Et.exec(r);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
              t = o[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function () {
            return c ? r : null
          },
          setRequestHeader: function (e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == c && (f.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) M.always(e[M.status]);
              else
                for (t in e) b[t] = [b[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || k;
            return i && i.abort(t), L(0, t), this
          }
        };
      if (v.promise(M), f.url = ((t || f.url || xt.href) + "").replace(Yt, xt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""], null == f.crossDomain) {
        l = g.createElement("a");
        try {
          l.href = f.url, l.href = l.href, f.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host
        } catch (e) {
          f.crossDomain = !0
        }
      }
      if (f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), Ft(Pt, f, n, M), c) return M;
      for (d in (u = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), a = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Tt, "+")) : (h = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (wt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Ct, "$1"), h = (wt.test(a) ? "&" : "?") + "_=" + _t.guid++ + h), f.url = a + h), f.ifModified && (_.lastModified[a] && M.setRequestHeader("If-Modified-Since", _.lastModified[a]), _.etag[a] && M.setRequestHeader("If-None-Match", _.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && M.setRequestHeader("Content-Type", f.contentType), M.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : f.accepts["*"]), f.headers) M.setRequestHeader(d, f.headers[d]);
      if (f.beforeSend && (!1 === f.beforeSend.call(p, M, f) || c)) return M.abort();
      if (k = "abort", y.add(f.complete), M.done(f.success), M.fail(f.error), i = Ft(It, f, n, M)) {
        if (M.readyState = 1, u && m.trigger("ajaxSend", [M, f]), c) return M;
        f.async && f.timeout > 0 && (s = e.setTimeout((function () {
          M.abort("timeout")
        }), f.timeout));
        try {
          c = !1, i.send(x, L)
        } catch (e) {
          if (c) throw e;
          L(-1, e)
        }
      } else L(-1, "No Transport");

      function L(t, n, o, l) {
        var d, h, g, x, w, k = n;
        c || (c = !0, s && e.clearTimeout(s), i = void 0, r = l || "", M.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, o && (x = function (e, t, n) {
          for (var i, a, r, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (a in s)
              if (s[a] && s[a].test(i)) {
                l.unshift(a);
                break
              } if (l[0] in n) r = l[0];
          else {
            for (a in n) {
              if (!l[0] || e.converters[a + " " + l[0]]) {
                r = a;
                break
              }
              o || (o = a)
            }
            r = r || o
          }
          if (r) return r !== l[0] && l.unshift(r), n[r]
        }(f, M, o)), !d && _.inArray("script", f.dataTypes) > -1 && _.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), x = function (e, t, n, i) {
          var a, r, o, s, l, c = {},
            u = e.dataTypes.slice();
          if (u[1])
            for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
          for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
              if ("*" === r) r = l;
              else if ("*" !== l && l !== r) {
            if (!(o = c[l + " " + r] || c["* " + r]))
              for (a in c)
                if ((s = a.split(" "))[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                  !0 === o ? o = c[a] : !0 !== c[a] && (r = s[0], u.unshift(s[1]));
                  break
                } if (!0 !== o)
              if (o && e.throws) t = o(t);
              else try {
                t = o(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: o ? e : "No conversion from " + l + " to " + r
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(f, x, M, d), d ? (f.ifModified && ((w = M.getResponseHeader("Last-Modified")) && (_.lastModified[a] = w), (w = M.getResponseHeader("etag")) && (_.etag[a] = w)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, h = x.data, d = !(g = x.error))) : (g = k, !t && k || (k = "error", t < 0 && (t = 0))), M.status = t, M.statusText = (n || k) + "", d ? v.resolveWith(p, [h, k, M]) : v.rejectWith(p, [M, k, g]), M.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [M, f, d ? h : g]), y.fireWith(p, [M, k]), u && (m.trigger("ajaxComplete", [M, f]), --_.active || _.event.trigger("ajaxStop")))
      }
      return M
    },
    getJSON: function (e, t, n) {
      return _.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return _.get(e, void 0, t, "script")
    }
  }), _.each(["get", "post"], (function (e, t) {
    _[t] = function (e, n, i, a) {
      return p(n) && (a = a || i, i = n, n = void 0), _.ajax(_.extend({
        url: e,
        type: t,
        dataType: a,
        data: n,
        success: i
      }, _.isPlainObject(e) && e))
    }
  })), _.ajaxPrefilter((function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  })), _._evalUrl = function (e, t, n) {
    return _.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        _.globalEval(e, t, n)
      }
    })
  }, _.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (p(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      })).append(this)), this
    },
    wrapInner: function (e) {
      return p(e) ? this.each((function (t) {
        _(this).wrapInner(e.call(this, t))
      })) : this.each((function () {
        var t = _(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      }))
    },
    wrap: function (e) {
      var t = p(e);
      return this.each((function (n) {
        _(this).wrapAll(t ? e.call(this, n) : e)
      }))
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each((function () {
        _(this).replaceWith(this.childNodes)
      })), this
    }
  }), _.expr.pseudos.hidden = function (e) {
    return !_.expr.pseudos.visible(e)
  }, _.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, _.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var zt = {
      0: 200,
      1223: 204
    },
    Bt = _.ajaxSettings.xhr();
  f.cors = !!Bt && "withCredentials" in Bt, f.ajax = Bt = !!Bt, _.ajaxTransport((function (t) {
    var n, i;
    if (f.cors || Bt && !t.crossDomain) return {
      send: function (a, r) {
        var o, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (o in t.xhrFields) s[o] = t.xhrFields[o];
        for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) s.setRequestHeader(o, a[o]);
        n = function (e) {
          return function () {
            n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout((function () {
            n && i()
          }))
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function () {
        n && n()
      }
    }
  })), _.ajaxPrefilter((function (e) {
    e.crossDomain && (e.contents.script = !1)
  })), _.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return _.globalEval(e), e
      }
    }
  }), _.ajaxPrefilter("script", (function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  })), _.ajaxTransport("script", (function (e) {
    var t, n;
    if (e.crossDomain || e.scriptAttrs) return {
      send: function (i, a) {
        t = _("<script>").attr(e.scriptAttrs || {}).prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function (e) {
          t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
        }), g.head.appendChild(t[0])
      },
      abort: function () {
        n && n()
      }
    }
  }));
  var Wt, Vt = [],
    qt = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Vt.pop() || _.expando + "_" + _t.guid++;
      return this[e] = !0, e
    }
  }), _.ajaxPrefilter("json jsonp", (function (t, n, i) {
    var a, r, o, s = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + a) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function () {
      return o || _.error(a + " was not called"), o[0]
    }, t.dataTypes[0] = "json", r = e[a], e[a] = function () {
      o = arguments
    }, i.always((function () {
      void 0 === r ? _(e).removeProp(a) : e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, Vt.push(a)), o && p(r) && r(o[0]), o = r = void 0
    })), "script"
  })), f.createHTMLDocument = ((Wt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), _.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), r = !n && [], (a = T.exec(e)) ? [t.createElement(a[1])] : (a = xe([e], t, r), r && r.length && _(r).remove(), _.merge([], a.childNodes)));
    var i, a, r
  }, _.fn.load = function (e, t, n) {
    var i, a, r, o = this,
      s = e.indexOf(" ");
    return s > -1 && (i = pt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && _.ajax({
      url: e,
      type: a || "GET",
      dataType: "html",
      data: t
    }).done((function (e) {
      r = arguments, o.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
    })).always(n && function (e, t) {
      o.each((function () {
        n.apply(this, r || [e.responseText, t, e])
      }))
    }), this
  }, _.expr.pseudos.animated = function (e) {
    return _.grep(_.timers, (function (t) {
      return e === t.elem
    })).length
  }, _.offset = {
    setOffset: function (e, t, n) {
      var i, a, r, o, s, l, c = _.css(e, "position"),
        u = _(e),
        d = {};
      "static" === c && (e.style.position = "relative"), s = u.offset(), r = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (o = (i = u.position()).top, a = i.left) : (o = parseFloat(r) || 0, a = parseFloat(l) || 0), p(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, _.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each((function (t) {
        _.offset.setOffset(this, e, t)
      }));
      var t, n, i = this[0];
      return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, i = this[0],
          a = {
            top: 0,
            left: 0
          };
        if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
        else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((a = _(e).offset()).top += _.css(e, "borderTopWidth", !0), a.left += _.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - a.top - _.css(i, "marginTop", !0),
          left: t.left - a.left - _.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map((function () {
        for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
        return e || ie
      }))
    }
  }), _.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, (function (e, t) {
    var n = "pageYOffset" === t;
    _.fn[e] = function (i) {
      return B(this, (function (e, i, a) {
        var r;
        if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === a) return r ? r[t] : e[i];
        r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[i] = a
      }), e, i, arguments.length)
    }
  })), _.each(["top", "left"], (function (e, t) {
    _.cssHooks[t] = Be(f.pixelPosition, (function (e, n) {
      if (n) return n = ze(e, t), Ne.test(n) ? _(e).position()[t] + "px" : n
    }))
  })), _.each({
    Height: "height",
    Width: "width"
  }, (function (e, t) {
    _.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, (function (n, i) {
      _.fn[i] = function (a, r) {
        var o = arguments.length && (n || "boolean" != typeof a),
          s = n || (!0 === a || !0 === r ? "margin" : "border");
        return B(this, (function (t, n, a) {
          var r;
          return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? _.css(t, n, s) : _.style(t, n, a, s)
        }), t, o ? a : void 0, o)
      }
    }))
  })), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
    _.fn[t] = function (e) {
      return this.on(t, e)
    }
  })), _.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
    _.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }));
  var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  _.proxy = function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = a.call(arguments, 2), (r = function () {
      return e.apply(t || this, i.concat(a.call(arguments)))
    }).guid = e.guid = e.guid || _.guid++, r
  }, _.holdReady = function (e) {
    e ? _.readyWait++ : _.ready(!0)
  }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = p, _.isWindow = m, _.camelCase = U, _.type = b, _.now = Date.now, _.isNumeric = function (e) {
    var t = _.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, _.trim = function (e) {
    return null == e ? "" : (e + "").replace(Ut, "")
  }, "function" == typeof define && define.amd && define("jquery", [], (function () {
    return _
  }));
  var Xt = e.jQuery,
    $t = e.$;
  return _.noConflict = function (t) {
    return e.$ === _ && (e.$ = $t), t && e.jQuery === _ && (e.jQuery = Xt), _
  }, void 0 === t && (e.jQuery = e.$ = _), _
})),
function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function (e) {
  "use strict";

  function t(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return t && t.defaultView || window
    }
    return e
  }

  function n(e) {
    return e instanceof t(e).Element || e instanceof Element
  }

  function i(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement
  }

  function a(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
  }
  var r = Math.round;

  function o(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      a = 1,
      o = 1;
    if (i(e) && t) {
      var s = e.offsetHeight,
        l = e.offsetWidth;
      l > 0 && (a = n.width / l || 1), s > 0 && (o = n.height / s || 1)
    }
    return {
      width: r(n.width / a),
      height: r(n.height / o),
      top: r(n.top / o),
      right: r(n.right / a),
      bottom: r(n.bottom / o),
      left: r(n.left / a),
      x: r(n.left / a),
      y: r(n.top / o)
    }
  }

  function s(e) {
    var n = t(e);
    return {
      scrollLeft: n.pageXOffset,
      scrollTop: n.pageYOffset
    }
  }

  function l(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
  }

  function c(e) {
    return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }

  function u(e) {
    return o(c(e)).left + s(e).scrollLeft
  }

  function d(e) {
    return t(e).getComputedStyle(e)
  }

  function h(e) {
    var t = d(e),
      n = t.overflow,
      i = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + i)
  }

  function f(e, n, a) {
    void 0 === a && (a = !1);
    var r, d, f = i(n),
      p = i(n) && function (e) {
        var t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          i = t.height / e.offsetHeight || 1;
        return 1 !== n || 1 !== i
      }(n),
      m = c(n),
      g = o(e, p),
      v = {
        scrollLeft: 0,
        scrollTop: 0
      },
      y = {
        x: 0,
        y: 0
      };
    return (f || !f && !a) && (("body" !== l(n) || h(m)) && (v = (r = n) !== t(r) && i(r) ? {
      scrollLeft: (d = r).scrollLeft,
      scrollTop: d.scrollTop
    } : s(r)), i(n) ? ((y = o(n, !0)).x += n.clientLeft, y.y += n.clientTop) : m && (y.x = u(m))), {
      x: g.left + v.scrollLeft - y.x,
      y: g.top + v.scrollTop - y.y,
      width: g.width,
      height: g.height
    }
  }

  function p(e) {
    var t = o(e),
      n = e.offsetWidth,
      i = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: i
    }
  }

  function m(e) {
    return "html" === l(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || c(e)
  }

  function g(e) {
    return ["html", "body", "#document"].indexOf(l(e)) >= 0 ? e.ownerDocument.body : i(e) && h(e) ? e : g(m(e))
  }

  function v(e, n) {
    var i;
    void 0 === n && (n = []);
    var a = g(e),
      r = a === (null == (i = e.ownerDocument) ? void 0 : i.body),
      o = t(a),
      s = r ? [o].concat(o.visualViewport || [], h(a) ? a : []) : a,
      l = n.concat(s);
    return r ? l : l.concat(v(m(s)))
  }

  function y(e) {
    return ["table", "td", "th"].indexOf(l(e)) >= 0
  }

  function b(e) {
    return i(e) && "fixed" !== d(e).position ? e.offsetParent : null
  }

  function x(e) {
    for (var n = t(e), a = b(e); a && y(a) && "static" === d(a).position;) a = b(a);
    return a && ("html" === l(a) || "body" === l(a) && "static" === d(a).position) ? n : a || function (e) {
      var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && i(e) && "fixed" === d(e).position) return null;
      for (var n = m(e); i(n) && ["html", "body"].indexOf(l(n)) < 0;) {
        var a = d(n);
        if ("none" !== a.transform || "none" !== a.perspective || "paint" === a.contain || -1 !== ["transform", "perspective"].indexOf(a.willChange) || t && "filter" === a.willChange || t && a.filter && "none" !== a.filter) return n;
        n = n.parentNode
      }
      return null
    }(e) || n
  }
  var _ = "top",
    w = "bottom",
    k = "right",
    M = "left",
    L = "auto",
    S = [_, w, k, M],
    A = "start",
    T = "end",
    D = "viewport",
    C = "popper",
    E = S.reduce((function (e, t) {
      return e.concat([t + "-" + A, t + "-" + T])
    }), []),
    O = [].concat(S, [L]).reduce((function (e, t) {
      return e.concat([t, t + "-" + A, t + "-" + T])
    }), []),
    Y = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function P(e) {
    var t = new Map,
      n = new Set,
      i = [];

    function a(e) {
      n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
        if (!n.has(e)) {
          var i = t.get(e);
          i && a(i)
        }
      })), i.push(e)
    }
    return e.forEach((function (e) {
      t.set(e.name, e)
    })), e.forEach((function (e) {
      n.has(e.name) || a(e)
    })), i
  }

  function I(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return [].concat(n).reduce((function (e, t) {
      return e.replace(/%s/, t)
    }), e)
  }
  var j = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    N = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

  function H(e) {
    return e.split("-")[0]
  }
  var F = Math.max,
    R = Math.min,
    z = Math.round;

  function B(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host
      } while (i)
    }
    return !1
  }

  function W(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }

  function V(e, n) {
    return n === D ? W(function (e) {
      var n = t(e),
        i = c(e),
        a = n.visualViewport,
        r = i.clientWidth,
        o = i.clientHeight,
        s = 0,
        l = 0;
      return a && (r = a.width, o = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = a.offsetLeft, l = a.offsetTop)), {
        width: r,
        height: o,
        x: s + u(e),
        y: l
      }
    }(e)) : i(n) ? function (e) {
      var t = o(e);
      return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
    }(n) : W(function (e) {
      var t, n = c(e),
        i = s(e),
        a = null == (t = e.ownerDocument) ? void 0 : t.body,
        r = F(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        o = F(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        l = -i.scrollLeft + u(e),
        h = -i.scrollTop;
      return "rtl" === d(a || n).direction && (l += F(n.clientWidth, a ? a.clientWidth : 0) - r), {
        width: r,
        height: o,
        x: l,
        y: h
      }
    }(c(e)))
  }

  function q(e, t, a) {
    var r = "clippingParents" === t ? function (e) {
        var t = v(m(e)),
          a = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && i(e) ? x(e) : e;
        return n(a) ? t.filter((function (e) {
          return n(e) && B(e, a) && "body" !== l(e)
        })) : []
      }(e) : [].concat(t),
      o = [].concat(r, [a]),
      s = o[0],
      c = o.reduce((function (t, n) {
        var i = V(e, n);
        return t.top = F(i.top, t.top), t.right = R(i.right, t.right), t.bottom = R(i.bottom, t.bottom), t.left = F(i.left, t.left), t
      }), V(e, s));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
  }

  function U(e) {
    return e.split("-")[1]
  }

  function X(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
  }

  function $(e) {
    var t, n = e.reference,
      i = e.element,
      a = e.placement,
      r = a ? H(a) : null,
      o = a ? U(a) : null,
      s = n.x + n.width / 2 - i.width / 2,
      l = n.y + n.height / 2 - i.height / 2;
    switch (r) {
      case _:
        t = {
          x: s,
          y: n.y - i.height
        };
        break;
      case w:
        t = {
          x: s,
          y: n.y + n.height
        };
        break;
      case k:
        t = {
          x: n.x + n.width,
          y: l
        };
        break;
      case M:
        t = {
          x: n.x - i.width,
          y: l
        };
        break;
      default:
        t = {
          x: n.x,
          y: n.y
        }
    }
    var c = r ? X(r) : null;
    if (null != c) {
      var u = "y" === c ? "height" : "width";
      switch (o) {
        case A:
          t[c] = t[c] - (n[u] / 2 - i[u] / 2);
          break;
        case T:
          t[c] = t[c] + (n[u] / 2 - i[u] / 2)
      }
    }
    return t
  }

  function G(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e)
  }

  function Z(e, t) {
    return t.reduce((function (t, n) {
      return t[n] = e, t
    }), {})
  }

  function K(e, t) {
    void 0 === t && (t = {});
    var i = t,
      a = i.placement,
      r = void 0 === a ? e.placement : a,
      s = i.boundary,
      l = void 0 === s ? "clippingParents" : s,
      u = i.rootBoundary,
      d = void 0 === u ? D : u,
      h = i.elementContext,
      f = void 0 === h ? C : h,
      p = i.altBoundary,
      m = void 0 !== p && p,
      g = i.padding,
      v = void 0 === g ? 0 : g,
      y = G("number" != typeof v ? v : Z(v, S)),
      b = f === C ? "reference" : C,
      x = e.rects.popper,
      M = e.elements[m ? b : f],
      L = q(n(M) ? M : M.contextElement || c(e.elements.popper), l, d),
      A = o(e.elements.reference),
      T = $({
        reference: A,
        element: x,
        strategy: "absolute",
        placement: r
      }),
      E = W(Object.assign({}, x, T)),
      O = f === C ? E : A,
      Y = {
        top: L.top - O.top + y.top,
        bottom: O.bottom - L.bottom + y.bottom,
        left: L.left - O.left + y.left,
        right: O.right - L.right + y.right
      },
      P = e.modifiersData.offset;
    if (f === C && P) {
      var I = P[r];
      Object.keys(Y).forEach((function (e) {
        var t = [k, w].indexOf(e) >= 0 ? 1 : -1,
          n = [_, w].indexOf(e) >= 0 ? "y" : "x";
        Y[e] += I[n] * t
      }))
    }
    return Y
  }
  var J = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
    Q = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };

  function ee() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some((function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect)
    }))
  }

  function te(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      a = void 0 === i ? [] : i,
      r = t.defaultOptions,
      o = void 0 === r ? Q : r;
    return function (e, t, i) {
      void 0 === i && (i = o);
      var r, s, l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Q, o),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
        c = [],
        u = !1,
        h = {
          state: l,
          setOptions: function (i) {
            var r = "function" == typeof i ? i(l.options) : i;
            m(), l.options = Object.assign({}, o, l.options, r), l.scrollParents = {
              reference: n(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
              popper: v(t)
            };
            var s = function (e) {
              var t = P(e);
              return Y.reduce((function (e, n) {
                return e.concat(t.filter((function (e) {
                  return e.phase === n
                })))
              }), [])
            }(function (e) {
              var t = e.reduce((function (e, t) {
                var n = e[t.name];
                return e[t.name] = n ? Object.assign({}, n, t, {
                  options: Object.assign({}, n.options, t.options),
                  data: Object.assign({}, n.data, t.data)
                }) : t, e
              }), {});
              return Object.keys(t).map((function (e) {
                return t[e]
              }))
            }([].concat(a, l.options.modifiers)));
            (l.orderedModifiers = s.filter((function (e) {
              return e.enabled
            })), function (e) {
              e.forEach((function (t) {
                [].concat(Object.keys(t), N).filter((function (e, t, n) {
                  return n.indexOf(e) === t
                })).forEach((function (n) {
                  switch (n) {
                    case "name":
                      "string" != typeof t.name && console.error(I(j, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                      break;
                    case "enabled":
                      "boolean" != typeof t.enabled && console.error(I(j, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                      break;
                    case "phase":
                      Y.indexOf(t.phase) < 0 && console.error(I(j, t.name, '"phase"', "either " + Y.join(", "), '"' + String(t.phase) + '"'));
                      break;
                    case "fn":
                      "function" != typeof t.fn && console.error(I(j, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                      break;
                    case "effect":
                      null != t.effect && "function" != typeof t.effect && console.error(I(j, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                      break;
                    case "requires":
                      null == t.requires || Array.isArray(t.requires) || console.error(I(j, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                      break;
                    case "requiresIfExists":
                      Array.isArray(t.requiresIfExists) || console.error(I(j, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                      break;
                    case "options":
                    case "data":
                      break;
                    default:
                      console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + N.map((function (e) {
                        return '"' + e + '"'
                      })).join(", ") + '; but "' + n + '" was provided.')
                  }
                  t.requires && t.requires.forEach((function (n) {
                    null == e.find((function (e) {
                      return e.name === n
                    })) && console.error(I('Popper: modifier "%s" requires "%s", but "%s" modifier is not available', String(t.name), n, n))
                  }))
                }))
              }))
            }((u = [].concat(s, l.options.modifiers), f = function (e) {
              return e.name
            }, p = new Set, u.filter((function (e) {
              var t = f(e);
              if (!p.has(t)) return p.add(t), !0
            })))), H(l.options.placement) === L) && (l.orderedModifiers.find((function (e) {
              return "flip" === e.name
            })) || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" ")));
            var u, f, p, g = d(t);
            return [g.marginTop, g.marginRight, g.marginBottom, g.marginLeft].some((function (e) {
              return parseFloat(e)
            })) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" ")), l.orderedModifiers.forEach((function (e) {
              var t = e.name,
                n = e.options,
                i = void 0 === n ? {} : n,
                a = e.effect;
              if ("function" == typeof a) {
                var r = a({
                    state: l,
                    name: t,
                    instance: h,
                    options: i
                  }),
                  o = function () {};
                c.push(r || o)
              }
            })), h.update()
          },
          forceUpdate: function () {
            if (!u) {
              var e = l.elements,
                t = e.reference,
                n = e.popper;
              if (ee(t, n)) {
                l.rects = {
                  reference: f(t, x(n), "fixed" === l.options.strategy),
                  popper: p(n)
                }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function (e) {
                  return l.modifiersData[e.name] = Object.assign({}, e.data)
                }));
                for (var i = 0, a = 0; a < l.orderedModifiers.length; a++) {
                  if ((i += 1) > 100) {
                    console.error("Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.");
                    break
                  }
                  if (!0 !== l.reset) {
                    var r = l.orderedModifiers[a],
                      o = r.fn,
                      s = r.options,
                      c = void 0 === s ? {} : s,
                      d = r.name;
                    "function" == typeof o && (l = o({
                      state: l,
                      options: c,
                      name: d,
                      instance: h
                    }) || l)
                  } else l.reset = !1, a = -1
                }
              } else console.error(J)
            }
          },
          update: (r = function () {
            return new Promise((function (e) {
              h.forceUpdate(), e(l)
            }))
          }, function () {
            return s || (s = new Promise((function (e) {
              Promise.resolve().then((function () {
                s = void 0, e(r())
              }))
            }))), s
          }),
          destroy: function () {
            m(), u = !0
          }
        };
      if (!ee(e, t)) return console.error(J), h;

      function m() {
        c.forEach((function (e) {
          return e()
        })), c = []
      }
      return h.setOptions(i).then((function (e) {
        !u && i.onFirstUpdate && i.onFirstUpdate(e)
      })), h
    }
  }
  var ne = {
    passive: !0
  };
  var ie = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var n = e.state,
        i = e.instance,
        a = e.options,
        r = a.scroll,
        o = void 0 === r || r,
        s = a.resize,
        l = void 0 === s || s,
        c = t(n.elements.popper),
        u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      return o && u.forEach((function (e) {
          e.addEventListener("scroll", i.update, ne)
        })), l && c.addEventListener("resize", i.update, ne),
        function () {
          o && u.forEach((function (e) {
            e.removeEventListener("scroll", i.update, ne)
          })), l && c.removeEventListener("resize", i.update, ne)
        }
    },
    data: {}
  };
  var ae = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          n = e.name;
        t.modifiersData[n] = $({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement
        })
      },
      data: {}
    },
    re = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };

  function oe(e) {
    var n, i = e.popper,
      a = e.popperRect,
      r = e.placement,
      o = e.variation,
      s = e.offsets,
      l = e.position,
      u = e.gpuAcceleration,
      h = e.adaptive,
      f = e.roundOffsets,
      p = !0 === f ? function (e) {
        var t = e.x,
          n = e.y,
          i = window.devicePixelRatio || 1;
        return {
          x: z(z(t * i) / i) || 0,
          y: z(z(n * i) / i) || 0
        }
      }(s) : "function" == typeof f ? f(s) : s,
      m = p.x,
      g = void 0 === m ? 0 : m,
      v = p.y,
      y = void 0 === v ? 0 : v,
      b = s.hasOwnProperty("x"),
      L = s.hasOwnProperty("y"),
      S = M,
      A = _,
      D = window;
    if (h) {
      var C = x(i),
        E = "clientHeight",
        O = "clientWidth";
      C === t(i) && "static" !== d(C = c(i)).position && "absolute" === l && (E = "scrollHeight", O = "scrollWidth"), C = C, r !== _ && (r !== M && r !== k || o !== T) || (A = w, y -= C[E] - a.height, y *= u ? 1 : -1), r !== M && (r !== _ && r !== w || o !== T) || (S = k, g -= C[O] - a.width, g *= u ? 1 : -1)
    }
    var Y, P = Object.assign({
      position: l
    }, h && re);
    return u ? Object.assign({}, P, ((Y = {})[A] = L ? "0" : "", Y[S] = b ? "0" : "", Y.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + y + "px)" : "translate3d(" + g + "px, " + y + "px, 0)", Y)) : Object.assign({}, P, ((n = {})[A] = L ? y + "px" : "", n[S] = b ? g + "px" : "", n.transform = "", n))
  }
  var se = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = n.gpuAcceleration,
        a = void 0 === i || i,
        r = n.adaptive,
        o = void 0 === r || r,
        s = n.roundOffsets,
        l = void 0 === s || s,
        c = d(t.elements.popper).transitionProperty || "";
      o && ["transform", "top", "right", "bottom", "left"].some((function (e) {
        return c.indexOf(e) >= 0
      })) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
      var u = {
        placement: H(t.placement),
        variation: U(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: a
      };
      null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, oe(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: l
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, oe(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      })
    },
    data: {}
  };
  var le = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach((function (e) {
        var n = t.styles[e] || {},
          a = t.attributes[e] || {},
          r = t.elements[e];
        i(r) && l(r) && (Object.assign(r.style, n), Object.keys(a).forEach((function (e) {
          var t = a[e];
          !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
        })))
      }))
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach((function (e) {
            var a = t.elements[e],
              r = t.attributes[e] || {},
              o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                return e[t] = "", e
              }), {});
            i(a) && l(a) && (Object.assign(a.style, o), Object.keys(r).forEach((function (e) {
              a.removeAttribute(e)
            })))
          }))
        }
    },
    requires: ["computeStyles"]
  };
  var ce = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name,
          a = n.offset,
          r = void 0 === a ? [0, 0] : a,
          o = O.reduce((function (e, n) {
            return e[n] = function (e, t, n) {
              var i = H(e),
                a = [M, _].indexOf(i) >= 0 ? -1 : 1,
                r = "function" == typeof n ? n(Object.assign({}, t, {
                  placement: e
                })) : n,
                o = r[0],
                s = r[1];
              return o = o || 0, s = (s || 0) * a, [M, k].indexOf(i) >= 0 ? {
                x: s,
                y: o
              } : {
                x: o,
                y: s
              }
            }(n, t.rects, r), e
          }), {}),
          s = o[t.placement],
          l = s.x,
          c = s.y;
        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = o
      }
    },
    ue = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };

  function de(e) {
    return e.replace(/left|right|bottom|top/g, (function (e) {
      return ue[e]
    }))
  }
  var he = {
    start: "end",
    end: "start"
  };

  function fe(e) {
    return e.replace(/start|end/g, (function (e) {
      return he[e]
    }))
  }

  function pe(e, t) {
    void 0 === t && (t = {});
    var n = t,
      i = n.placement,
      a = n.boundary,
      r = n.rootBoundary,
      o = n.padding,
      s = n.flipVariations,
      l = n.allowedAutoPlacements,
      c = void 0 === l ? O : l,
      u = U(i),
      d = u ? s ? E : E.filter((function (e) {
        return U(e) === u
      })) : S,
      h = d.filter((function (e) {
        return c.indexOf(e) >= 0
      }));
    0 === h.length && (h = d, console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
    var f = h.reduce((function (t, n) {
      return t[n] = K(e, {
        placement: n,
        boundary: a,
        rootBoundary: r,
        padding: o
      })[H(n)], t
    }), {});
    return Object.keys(f).sort((function (e, t) {
      return f[e] - f[t]
    }))
  }
  var me = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name;
      if (!t.modifiersData[i]._skip) {
        for (var a = n.mainAxis, r = void 0 === a || a, o = n.altAxis, s = void 0 === o || o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, h = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, m = n.allowedAutoPlacements, g = t.options.placement, v = H(g), y = l || (v === g || !p ? [de(g)] : function (e) {
            if (H(e) === L) return [];
            var t = de(e);
            return [fe(e), t, fe(t)]
          }(g)), b = [g].concat(y).reduce((function (e, n) {
            return e.concat(H(n) === L ? pe(t, {
              placement: n,
              boundary: u,
              rootBoundary: d,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: m
            }) : n)
          }), []), x = t.rects.reference, S = t.rects.popper, T = new Map, D = !0, C = b[0], E = 0; E < b.length; E++) {
          var O = b[E],
            Y = H(O),
            P = U(O) === A,
            I = [_, w].indexOf(Y) >= 0,
            j = I ? "width" : "height",
            N = K(t, {
              placement: O,
              boundary: u,
              rootBoundary: d,
              altBoundary: h,
              padding: c
            }),
            F = I ? P ? k : M : P ? w : _;
          x[j] > S[j] && (F = de(F));
          var R = de(F),
            z = [];
          if (r && z.push(N[Y] <= 0), s && z.push(N[F] <= 0, N[R] <= 0), z.every((function (e) {
              return e
            }))) {
            C = O, D = !1;
            break
          }
          T.set(O, z)
        }
        if (D)
          for (var B = function (e) {
              var t = b.find((function (t) {
                var n = T.get(t);
                if (n) return n.slice(0, e).every((function (e) {
                  return e
                }))
              }));
              if (t) return C = t, "break"
            }, W = p ? 3 : 1; W > 0; W--) {
            if ("break" === B(W)) break
          }
        t.placement !== C && (t.modifiersData[i]._skip = !0, t.placement = C, t.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function ge(e, t, n) {
    return F(e, R(t, n))
  }
  var ve = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        a = n.mainAxis,
        r = void 0 === a || a,
        o = n.altAxis,
        s = void 0 !== o && o,
        l = n.boundary,
        c = n.rootBoundary,
        u = n.altBoundary,
        d = n.padding,
        h = n.tether,
        f = void 0 === h || h,
        m = n.tetherOffset,
        g = void 0 === m ? 0 : m,
        v = K(t, {
          boundary: l,
          rootBoundary: c,
          padding: d,
          altBoundary: u
        }),
        y = H(t.placement),
        b = U(t.placement),
        L = !b,
        S = X(y),
        T = "x" === S ? "y" : "x",
        D = t.modifiersData.popperOffsets,
        C = t.rects.reference,
        E = t.rects.popper,
        O = "function" == typeof g ? g(Object.assign({}, t.rects, {
          placement: t.placement
        })) : g,
        Y = {
          x: 0,
          y: 0
        };
      if (D) {
        if (r || s) {
          var P = "y" === S ? _ : M,
            I = "y" === S ? w : k,
            j = "y" === S ? "height" : "width",
            N = D[S],
            z = D[S] + v[P],
            B = D[S] - v[I],
            W = f ? -E[j] / 2 : 0,
            V = b === A ? C[j] : E[j],
            q = b === A ? -E[j] : -C[j],
            $ = t.elements.arrow,
            G = f && $ ? p($) : {
              width: 0,
              height: 0
            },
            Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            J = Z[P],
            Q = Z[I],
            ee = ge(0, C[j], G[j]),
            te = L ? C[j] / 2 - W - ee - J - O : V - ee - J - O,
            ne = L ? -C[j] / 2 + W + ee + Q + O : q + ee + Q + O,
            ie = t.elements.arrow && x(t.elements.arrow),
            ae = ie ? "y" === S ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
            re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
            oe = D[S] + te - re - ae,
            se = D[S] + ne - re;
          if (r) {
            var le = ge(f ? R(z, oe) : z, N, f ? F(B, se) : B);
            D[S] = le, Y[S] = le - N
          }
          if (s) {
            var ce = "x" === S ? _ : M,
              ue = "x" === S ? w : k,
              de = D[T],
              he = de + v[ce],
              fe = de - v[ue],
              pe = ge(f ? R(he, oe) : he, de, f ? F(fe, se) : fe);
            D[T] = pe, Y[T] = pe - de
          }
        }
        t.modifiersData[i] = Y
      }
    },
    requiresIfExists: ["offset"]
  };
  var ye = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t, n = e.state,
        i = e.name,
        a = e.options,
        r = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        s = H(n.placement),
        l = X(s),
        c = [M, k].indexOf(s) >= 0 ? "height" : "width";
      if (r && o) {
        var u = function (e, t) {
            return G("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
              placement: t.placement
            })) : e) ? e : Z(e, S))
          }(a.padding, n),
          d = p(r),
          h = "y" === l ? _ : M,
          f = "y" === l ? w : k,
          m = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
          g = o[l] - n.rects.reference[l],
          v = x(r),
          y = v ? "y" === l ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
          b = m / 2 - g / 2,
          L = u[h],
          A = y - d[c] - u[f],
          T = y / 2 - d[c] / 2 + b,
          D = ge(L, T, A),
          C = l;
        n.modifiersData[i] = ((t = {})[C] = D, t.centerOffset = D - T, t)
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        a = void 0 === n ? "[data-popper-arrow]" : n;
      null != a && ("string" != typeof a || (a = t.elements.popper.querySelector(a))) && (i(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" ")), B(t.elements.popper, a) ? t.elements.arrow = a : console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" ")))
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function be(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  }

  function xe(e) {
    return [_, k, w, M].some((function (t) {
      return e[t] >= 0
    }))
  }
  var _e = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          i = t.rects.reference,
          a = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          o = K(t, {
            elementContext: "reference"
          }),
          s = K(t, {
            altBoundary: !0
          }),
          l = be(o, i),
          c = be(s, a, r),
          u = xe(l),
          d = xe(c);
        t.modifiersData[n] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: u,
          hasPopperEscaped: d
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": u,
          "data-popper-escaped": d
        })
      }
    },
    we = te({
      defaultModifiers: [ie, ae, se, le]
    }),
    ke = [ie, ae, se, le, ce, me, ve, ye, _e],
    Me = te({
      defaultModifiers: ke
    });
  e.applyStyles = le, e.arrow = ye, e.computeStyles = se, e.createPopper = Me, e.createPopperLite = we, e.defaultModifiers = ke, e.detectOverflow = K, e.eventListeners = ie, e.flip = me, e.hide = _e, e.offset = ce, e.popperGenerator = te, e.popperOffsets = ae, e.preventOverflow = ve, Object.defineProperty(e, "__esModule", {
    value: !0
  })
})),
function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, (function (e) {
  "use strict";
  var t = function (e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return e && Object.keys(e).forEach((function (n) {
      if ("default" !== n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, i.get ? i : {
          enumerable: !0,
          get: function () {
            return e[n]
          }
        })
      }
    })), t.default = e, Object.freeze(t)
  }(e);
  const n = e => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let n = e.getAttribute("href");
        if (!n || !n.includes("#") && !n.startsWith(".")) return null;
        n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null
      }
      return t
    },
    i = e => {
      const t = n(e);
      return t && document.querySelector(t) ? t : null
    },
    a = e => {
      const t = n(e);
      return t ? document.querySelector(t) : null
    },
    r = e => {
      e.dispatchEvent(new Event("transitionend"))
    },
    o = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    s = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
    l = (e, t, n) => {
      Object.keys(n).forEach((i => {
        const a = n[i],
          r = t[i],
          s = r && o(r) ? "element" : null == (l = r) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
        var l;
        if (!new RegExp(a).test(s)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${a}".`)
      }))
    },
    c = e => !(!o(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    u = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    d = e => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        const t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null
      }
      return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null
    },
    h = () => {},
    f = e => {
      e.offsetHeight
    },
    p = () => {
      const {
        jQuery: e
      } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
    },
    m = [],
    g = () => "rtl" === document.documentElement.dir,
    v = e => {
      var t;
      t = () => {
        const t = p();
        if (t) {
          const n = e.NAME,
            i = t.fn[n];
          t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
        }
      }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => {
        m.forEach((e => e()))
      })), m.push(t)) : t()
    },
    y = e => {
      "function" == typeof e && e()
    },
    b = (e, t, n = !0) => {
      if (!n) return void y(e);
      const i = (e => {
        if (!e) return 0;
        let {
          transitionDuration: t,
          transitionDelay: n
        } = window.getComputedStyle(e);
        const i = Number.parseFloat(t),
          a = Number.parseFloat(n);
        return i || a ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
      })(t) + 5;
      let a = !1;
      const o = ({
        target: n
      }) => {
        n === t && (a = !0, t.removeEventListener("transitionend", o), y(e))
      };
      t.addEventListener("transitionend", o), setTimeout((() => {
        a || r(t)
      }), i)
    },
    x = (e, t, n, i) => {
      let a = e.indexOf(t);
      if (-1 === a) return e[!n && i ? e.length - 1 : 0];
      const r = e.length;
      return a += n ? 1 : -1, i && (a = (a + r) % r), e[Math.max(0, Math.min(a, r - 1))]
    },
    _ = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    k = /::\d+$/,
    M = {};
  let L = 1;
  const S = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    A = /^(mouseenter|mouseleave)/i,
    T = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(e, t) {
    return t && `${t}::${L++}` || e.uidEvent || L++
  }

  function C(e) {
    const t = D(e);
    return e.uidEvent = t, M[t] = M[t] || {}, M[t]
  }

  function E(e, t, n = null) {
    const i = Object.keys(e);
    for (let a = 0, r = i.length; a < r; a++) {
      const r = e[i[a]];
      if (r.originalHandler === t && r.delegationSelector === n) return r
    }
    return null
  }

  function O(e, t, n) {
    const i = "string" == typeof t,
      a = i ? n : t;
    let r = I(e);
    return T.has(r) || (r = e), [i, a, r]
  }

  function Y(e, t, n, i, a) {
    if ("string" != typeof t || !e) return;
    if (n || (n = i, i = null), A.test(t)) {
      const e = e => function (t) {
        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
      };
      i ? i = e(i) : n = e(n)
    }
    const [r, o, s] = O(t, n, i), l = C(e), c = l[s] || (l[s] = {}), u = E(c, o, r ? n : null);
    if (u) return void(u.oneOff = u.oneOff && a);
    const d = D(o, t.replace(_, "")),
      h = r ? function (e, t, n) {
        return function i(a) {
          const r = e.querySelectorAll(t);
          for (let {
              target: o
            } = a; o && o !== this; o = o.parentNode)
            for (let s = r.length; s--;)
              if (r[s] === o) return a.delegateTarget = o, i.oneOff && j.off(e, a.type, t, n), n.apply(o, [a]);
          return null
        }
      }(e, n, i) : function (e, t) {
        return function n(i) {
          return i.delegateTarget = e, n.oneOff && j.off(e, i.type, t), t.apply(e, [i])
        }
      }(e, n);
    h.delegationSelector = r ? n : null, h.originalHandler = o, h.oneOff = a, h.uidEvent = d, c[d] = h, e.addEventListener(s, h, r)
  }

  function P(e, t, n, i, a) {
    const r = E(t[n], i, a);
    r && (e.removeEventListener(n, r, Boolean(a)), delete t[n][r.uidEvent])
  }

  function I(e) {
    return e = e.replace(w, ""), S[e] || e
  }
  const j = {
      on(e, t, n, i) {
        Y(e, t, n, i, !1)
      },
      one(e, t, n, i) {
        Y(e, t, n, i, !0)
      },
      off(e, t, n, i) {
        if ("string" != typeof t || !e) return;
        const [a, r, o] = O(t, n, i), s = o !== t, l = C(e), c = t.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          return void P(e, l, o, r, a ? n : null)
        }
        c && Object.keys(l).forEach((n => {
          ! function (e, t, n, i) {
            const a = t[n] || {};
            Object.keys(a).forEach((r => {
              if (r.includes(i)) {
                const i = a[r];
                P(e, t, n, i.originalHandler, i.delegationSelector)
              }
            }))
          }(e, l, n, t.slice(1))
        }));
        const u = l[o] || {};
        Object.keys(u).forEach((n => {
          const i = n.replace(k, "");
          if (!s || t.includes(i)) {
            const t = u[n];
            P(e, l, o, t.originalHandler, t.delegationSelector)
          }
        }))
      },
      trigger(e, t, n) {
        if ("string" != typeof t || !e) return null;
        const i = p(),
          a = I(t),
          r = t !== a,
          o = T.has(a);
        let s, l = !0,
          c = !0,
          u = !1,
          d = null;
        return r && i && (s = i.Event(t, n), i(e).trigger(s), l = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), u = s.isDefaultPrevented()), o ? (d = document.createEvent("HTMLEvents"), d.initEvent(a, l, !0)) : d = new CustomEvent(t, {
          bubbles: l,
          cancelable: !0
        }), void 0 !== n && Object.keys(n).forEach((e => {
          Object.defineProperty(d, e, {
            get: () => n[e]
          })
        })), u && d.preventDefault(), c && e.dispatchEvent(d), d.defaultPrevented && void 0 !== s && s.preventDefault(), d
      }
    },
    N = new Map;
  var H = {
    set(e, t, n) {
      N.has(e) || N.set(e, new Map);
      const i = N.get(e);
      i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
    },
    get: (e, t) => N.has(e) && N.get(e).get(t) || null,
    remove(e, t) {
      if (!N.has(e)) return;
      const n = N.get(e);
      n.delete(t), 0 === n.size && N.delete(e)
    }
  };
  class F {
    constructor(e) {
      (e = s(e)) && (this._element = e, H.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
        this[e] = null
      }))
    }
    _queueCallback(e, t, n = !0) {
      b(e, t, n)
    }
    static getInstance(e) {
      return H.get(s(e), this.DATA_KEY)
    }
    static getOrCreateInstance(e, t = {}) {
      return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
    }
    static get VERSION() {
      return "5.1.1"
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }
    static get DATA_KEY() {
      return "bs." + this.NAME
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY
    }
  }
  const R = (e, t = "hide") => {
    const n = "click.dismiss" + e.EVENT_KEY,
      i = e.NAME;
    j.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), u(this)) return;
      const r = a(this) || this.closest("." + i);
      e.getOrCreateInstance(r)[t]()
    }))
  };
  class z extends F {
    static get NAME() {
      return "alert"
    }
    close() {
      if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const e = this._element.classList.contains("fade");
      this._queueCallback((() => this._destroyElement()), this._element, e)
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose()
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = z.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
          t[e](this)
        }
      }))
    }
  }
  R(z, "close"), v(z);
  class B extends F {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = B.getOrCreateInstance(this);
        "toggle" === e && t[e]()
      }))
    }
  }

  function W(e) {
    return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
  }

  function V(e) {
    return e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()))
  }
  j.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (e => {
    e.preventDefault();
    const t = e.target.closest('[data-bs-toggle="button"]');
    B.getOrCreateInstance(t).toggle()
  })), v(B);
  const q = {
      setDataAttribute(e, t, n) {
        e.setAttribute("data-bs-" + V(t), n)
      },
      removeDataAttribute(e, t) {
        e.removeAttribute("data-bs-" + V(t))
      },
      getDataAttributes(e) {
        if (!e) return {};
        const t = {};
        return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((n => {
          let i = n.replace(/^bs/, "");
          i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = W(e.dataset[n])
        })), t
      },
      getDataAttribute: (e, t) => W(e.getAttribute("data-bs-" + V(t))),
      offset(e) {
        const t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset
        }
      },
      position: e => ({
        top: e.offsetTop,
        left: e.offsetLeft
      })
    },
    U = {
      find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
      parents(e, t) {
        const n = [];
        let i = e.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(t) && n.push(i), i = i.parentNode;
        return n
      },
      prev(e, t) {
        let n = e.previousElementSibling;
        for (; n;) {
          if (n.matches(t)) return [n];
          n = n.previousElementSibling
        }
        return []
      },
      next(e, t) {
        let n = e.nextElementSibling;
        for (; n;) {
          if (n.matches(t)) return [n];
          n = n.nextElementSibling
        }
        return []
      },
      focusableChildren(e) {
        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => e + ':not([tabindex^="-"])')).join(", ");
        return this.find(t, e).filter((e => !u(e) && c(e)))
      }
    },
    X = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    $ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    G = "next",
    Z = "prev",
    K = "left",
    J = "right",
    Q = {
      ArrowLeft: J,
      ArrowRight: K
    };
  class ee extends F {
    constructor(e, t) {
      super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
    }
    static get Default() {
      return X
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(G)
    }
    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next()
    }
    prev() {
      this._slide(Z)
    }
    pause(e) {
      e || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
    }
    cycle(e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    to(e) {
      this._activeElement = U.findOne(".active.carousel-item", this._element);
      const t = this._getItemIndex(this._activeElement);
      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding) return void j.one(this._element, "slid.bs.carousel", (() => this.to(e)));
      if (t === e) return this.pause(), void this.cycle();
      const n = e > t ? G : Z;
      this._slide(n, this._items[e])
    }
    _getConfig(e) {
      return e = {
        ...X,
        ...q.getDataAttributes(this._element),
        ..."object" == typeof e ? e : {}
      }, l("carousel", e, $), e
    }
    _handleSwipe() {
      const e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      const t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? J : K)
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", (e => this.pause(e))), j.on(this._element, "mouseleave.bs.carousel", (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      const e = e => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
        t = t => {
          e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
        },
        n = e => {
          this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
        },
        i = t => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
        };
      U.find(".carousel-item img", this._element).forEach((e => {
        j.on(e, "dragstart.bs.carousel", (e => e.preventDefault()))
      })), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", (e => t(e))), j.on(this._element, "pointerup.bs.carousel", (e => i(e))), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", (e => t(e))), j.on(this._element, "touchmove.bs.carousel", (e => n(e))), j.on(this._element, "touchend.bs.carousel", (e => i(e))))
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      const t = Q[e.key];
      t && (e.preventDefault(), this._slide(t))
    }
    _getItemIndex(e) {
      return this._items = e && e.parentNode ? U.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
    }
    _getItemByOrder(e, t) {
      const n = e === G;
      return x(this._items, t, n, this._config.wrap)
    }
    _triggerSlideEvent(e, t) {
      const n = this._getItemIndex(e),
        i = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
      return j.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      })
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        const t = U.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        const n = U.find("[data-bs-target]", this._indicatorsElement);
        for (let t = 0; t < n.length; t++)
          if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
            break
          }
      }
    }
    _updateInterval() {
      const e = this._activeElement || U.findOne(".active.carousel-item", this._element);
      if (!e) return;
      const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
    }
    _slide(e, t) {
      const n = this._directionToOrder(e),
        i = U.findOne(".active.carousel-item", this._element),
        a = this._getItemIndex(i),
        r = t || this._getItemByOrder(n, i),
        o = this._getItemIndex(r),
        s = Boolean(this._interval),
        l = n === G,
        c = l ? "carousel-item-start" : "carousel-item-end",
        u = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(n);
      if (r && r.classList.contains("active")) return void(this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, d).defaultPrevented) return;
      if (!i || !r) return;
      this._isSliding = !0, s && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
      const h = () => {
        j.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: d,
          from: a,
          to: o
        })
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(u), f(r), i.classList.add(c), r.classList.add(c);
        const e = () => {
          r.classList.remove(c, u), r.classList.add("active"), i.classList.remove("active", u, c), this._isSliding = !1, setTimeout(h, 0)
        };
        this._queueCallback(e, i, !0)
      } else i.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, h();
      s && this.cycle()
    }
    _directionToOrder(e) {
      return [J, K].includes(e) ? g() ? e === K ? Z : G : e === K ? G : Z : e
    }
    _orderToDirection(e) {
      return [G, Z].includes(e) ? g() ? e === Z ? K : J : e === Z ? J : K : e
    }
    static carouselInterface(e, t) {
      const n = ee.getOrCreateInstance(e, t);
      let {
        _config: i
      } = n;
      "object" == typeof t && (i = {
        ...i,
        ...t
      });
      const a = "string" == typeof t ? t : i.slide;
      if ("number" == typeof t) n.to(t);
      else if ("string" == typeof a) {
        if (void 0 === n[a]) throw new TypeError(`No method named "${a}"`);
        n[a]()
      } else i.interval && i.ride && (n.pause(), n.cycle())
    }
    static jQueryInterface(e) {
      return this.each((function () {
        ee.carouselInterface(this, e)
      }))
    }
    static dataApiClickHandler(e) {
      const t = a(this);
      if (!t || !t.classList.contains("carousel")) return;
      const n = {
          ...q.getDataAttributes(t),
          ...q.getDataAttributes(this)
        },
        i = this.getAttribute("data-bs-slide-to");
      i && (n.interval = !1), ee.carouselInterface(t, n), i && ee.getInstance(t).to(i), e.preventDefault()
    }
  }
  j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", ee.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", (() => {
    const e = U.find('[data-bs-ride="carousel"]');
    for (let t = 0, n = e.length; t < n; t++) ee.carouselInterface(e[t], ee.getInstance(e[t]))
  })), v(ee);
  const te = {
      toggle: !0,
      parent: null
    },
    ne = {
      toggle: "boolean",
      parent: "(null|element)"
    };
  class ie extends F {
    constructor(e, t) {
      super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
      const n = U.find('[data-bs-toggle="collapse"]');
      for (let e = 0, t = n.length; e < t; e++) {
        const t = n[e],
          a = i(t),
          r = U.find(a).filter((e => e === this._element));
        null !== a && r.length && (this._selector = a, this._triggerArray.push(t))
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }
    static get Default() {
      return te
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e, t = [];
      if (this._config.parent) {
        const e = U.find(".collapse .collapse", this._config.parent);
        t = U.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t => !e.includes(t)))
      }
      const n = U.findOne(this._selector);
      if (t.length) {
        const i = t.find((e => n !== e));
        if (e = i ? ie.getInstance(i) : null, e && e._isTransitioning) return
      }
      if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t.forEach((t => {
        n !== t && ie.getOrCreateInstance(t, {
          toggle: !1
        }).hide(), e || H.set(t, "bs.collapse", null)
      }));
      const i = this._getDimension();
      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      const a = "scroll" + (i[0].toUpperCase() + i.slice(1));
      this._queueCallback((() => {
        this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[i] = "", j.trigger(this._element, "shown.bs.collapse")
      }), this._element, !0), this._element.style[i] = this._element[a] + "px"
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const e = this._getDimension();
      this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      const t = this._triggerArray.length;
      for (let e = 0; e < t; e++) {
        const t = this._triggerArray[e],
          n = a(t);
        n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1)
      }
      this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
        this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), j.trigger(this._element, "hidden.bs.collapse")
      }), this._element, !0)
    }
    _isShown(e = this._element) {
      return e.classList.contains("show")
    }
    _getConfig(e) {
      return (e = {
        ...te,
        ...q.getDataAttributes(this._element),
        ...e
      }).toggle = Boolean(e.toggle), e.parent = s(e.parent), l("collapse", e, ne), e
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const e = U.find(".collapse .collapse", this._config.parent);
      U.find('[data-bs-toggle="collapse"]', this._config.parent).filter((t => !e.includes(t))).forEach((e => {
        const t = a(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t))
      }))
    }
    _addAriaAndCollapsedClass(e, t) {
      e.length && e.forEach((e => {
        t ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", t)
      }))
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        const n = ie.getOrCreateInstance(this, t);
        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
          n[e]()
        }
      }))
    }
  }
  j.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    const t = i(this);
    U.find(t).forEach((e => {
      ie.getOrCreateInstance(e, {
        toggle: !1
      }).toggle()
    }))
  })), v(ie);
  const ae = new RegExp("ArrowUp|ArrowDown|Escape"),
    re = g() ? "top-end" : "top-start",
    oe = g() ? "top-start" : "top-end",
    se = g() ? "bottom-end" : "bottom-start",
    le = g() ? "bottom-start" : "bottom-end",
    ce = g() ? "left-start" : "right-start",
    ue = g() ? "right-start" : "left-start",
    de = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    },
    he = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };
  class fe extends F {
    constructor(e, t) {
      super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
    }
    static get Default() {
      return de
    }
    static get DefaultType() {
      return he
    }
    static get NAME() {
      return "dropdown"
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (u(this._element) || this._isShown(this._menu)) return;
      const e = {
        relatedTarget: this._element
      };
      if (j.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
      const t = fe.getParentFromElement(this._element);
      this._inNavbar ? q.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => j.on(e, "mouseover", h))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), j.trigger(this._element, "shown.bs.dropdown", e)
    }
    hide() {
      if (u(this._element) || !this._isShown(this._menu)) return;
      const e = {
        relatedTarget: this._element
      };
      this._completeHide(e)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }
    _completeHide(e) {
      j.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => j.off(e, "mouseover", h))), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), q.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", e))
    }
    _getConfig(e) {
      if (e = {
          ...this.constructor.Default,
          ...q.getDataAttributes(this._element),
          ...e
        }, l("dropdown", e, this.constructor.DefaultType), "object" == typeof e.reference && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return e
    }
    _createPopper(e) {
      if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let n = this._element;
      "parent" === this._config.reference ? n = e : o(this._config.reference) ? n = s(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
      const i = this._getPopperConfig(),
        a = i.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
      this._popper = t.createPopper(n, this._menu, i), a && q.setDataAttribute(this._menu, "popper", "static")
    }
    _isShown(e = this._element) {
      return e.classList.contains("show")
    }
    _getMenuElement() {
      return U.next(this._element, ".dropdown-menu")[0]
    }
    _getPlacement() {
      const e = this._element.parentNode;
      if (e.classList.contains("dropend")) return ce;
      if (e.classList.contains("dropstart")) return ue;
      const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? oe : re : t ? le : se
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const {
        offset: e
      } = this._config;
      return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
    }
    _getPopperConfig() {
      const e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), {
        ...e,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
      }
    }
    _selectMenuItem({
      key: e,
      target: t
    }) {
      const n = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
      n.length && x(n, t, "ArrowDown" === e, !n.includes(t)).focus()
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = fe.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]()
        }
      }))
    }
    static clearMenus(e) {
      if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
      const t = U.find('[data-bs-toggle="dropdown"]');
      for (let n = 0, i = t.length; n < i; n++) {
        const i = fe.getInstance(t[n]);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._isShown()) continue;
        const a = {
          relatedTarget: i._element
        };
        if (e) {
          const t = e.composedPath(),
            n = t.includes(i._menu);
          if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
          if (i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
          "click" === e.type && (a.clickEvent = e)
        }
        i._completeHide(a)
      }
    }
    static getParentFromElement(e) {
      return a(e) || e.parentNode
    }
    static dataApiKeydownHandler(e) {
      if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !ae.test(e.key)) return;
      const t = this.classList.contains("show");
      if (!t && "Escape" === e.key) return;
      if (e.preventDefault(), e.stopPropagation(), u(this)) return;
      const n = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0],
        i = fe.getOrCreateInstance(n);
      if ("Escape" !== e.key) return "ArrowUp" === e.key || "ArrowDown" === e.key ? (t || i.show(), void i._selectMenuItem(e)) : void(t && "Space" !== e.key || fe.clearMenus());
      i.hide()
    }
  }
  j.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', fe.dataApiKeydownHandler), j.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", fe.dataApiKeydownHandler), j.on(document, "click.bs.dropdown.data-api", fe.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", fe.clearMenus), j.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (e) {
    e.preventDefault(), fe.getOrCreateInstance(this).toggle()
  })), v(fe);
  class pe {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e)
    }
    hide() {
      const e = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (t => t + e)), this._setElementAttributes(".sticky-top", "marginRight", (t => t - e))
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }
    _setElementAttributes(e, t, n) {
      const i = this.getWidth();
      this._applyManipulationCallback(e, (e => {
        if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
        this._saveInitialAttribute(e, t);
        const a = window.getComputedStyle(e)[t];
        e.style[t] = n(Number.parseFloat(a)) + "px"
      }))
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
    }
    _saveInitialAttribute(e, t) {
      const n = e.style[t];
      n && q.setDataAttribute(e, t, n)
    }
    _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, (e => {
        const n = q.getDataAttribute(e, t);
        void 0 === n ? e.style.removeProperty(t) : (q.removeDataAttribute(e, t), e.style[t] = n)
      }))
    }
    _applyManipulationCallback(e, t) {
      o(e) ? t(e) : U.find(e, this._element).forEach(t)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
  }
  const me = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null
    },
    ge = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)"
    };
  class ve {
    constructor(e) {
      this._config = this._getConfig(e), this._isAppended = !1, this._element = null
    }
    show(e) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation((() => {
        y(e)
      }))) : y(e)
    }
    hide(e) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation((() => {
        this.dispose(), y(e)
      }))) : y(e)
    }
    _getElement() {
      if (!this._element) {
        const e = document.createElement("div");
        e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
      }
      return this._element
    }
    _getConfig(e) {
      return (e = {
        ...me,
        ..."object" == typeof e ? e : {}
      }).rootElement = s(e.rootElement), l("backdrop", e, ge), e
    }
    _append() {
      this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), "mousedown.bs.backdrop", (() => {
        y(this._config.clickCallback)
      })), this._isAppended = !0)
    }
    dispose() {
      this._isAppended && (j.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
    }
    _emulateAnimation(e) {
      b(e, this._getElement(), this._config.isAnimated)
    }
  }
  const ye = {
      trapElement: null,
      autofocus: !0
    },
    be = {
      trapElement: "element",
      autofocus: "boolean"
    };
  class xe {
    constructor(e) {
      this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
    }
    activate() {
      const {
        trapElement: e,
        autofocus: t
      } = this._config;
      this._isActive || (t && e.focus(), j.off(document, ".bs.focustrap"), j.on(document, "focusin.bs.focustrap", (e => this._handleFocusin(e))), j.on(document, "keydown.tab.bs.focustrap", (e => this._handleKeydown(e))), this._isActive = !0)
    }
    deactivate() {
      this._isActive && (this._isActive = !1, j.off(document, ".bs.focustrap"))
    }
    _handleFocusin(e) {
      const {
        target: t
      } = e, {
        trapElement: n
      } = this._config;
      if (t === document || t === n || n.contains(t)) return;
      const i = U.focusableChildren(n);
      0 === i.length ? n.focus() : "backward" === this._lastTabNavDirection ? i[i.length - 1].focus() : i[0].focus()
    }
    _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward")
    }
    _getConfig(e) {
      return e = {
        ...ye,
        ..."object" == typeof e ? e : {}
      }, l("focustrap", e, be), e
    }
  }
  const _e = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
    we = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    };
  class ke extends F {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new pe
    }
    static get Default() {
      return _e
    }
    static get NAME() {
      return "modal"
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e)
    }
    show(e) {
      this._isShown || this._isTransitioning || j.trigger(this._element, "show.bs.modal", {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, "mousedown.dismiss.bs.modal", (() => {
        j.one(this._element, "mouseup.dismiss.bs.modal", (e => {
          e.target === this._element && (this._ignoreBackdropClick = !0)
        }))
      })), this._showBackdrop((() => this._showElement(e))))
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), j.off(this._element, "click.dismiss.bs.modal"), j.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback((() => this._hideModal()), this._element, e)
    }
    dispose() {
      [window, this._dialog].forEach((e => j.off(e, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new ve({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      })
    }
    _initializeFocusTrap() {
      return new xe({
        trapElement: this._element
      })
    }
    _getConfig(e) {
      return e = {
        ..._e,
        ...q.getDataAttributes(this._element),
        ..."object" == typeof e ? e : {}
      }, l("modal", e, we), e
    }
    _showElement(e) {
      const t = this._isAnimated(),
        n = U.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && f(this._element), this._element.classList.add("show"), this._queueCallback((() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, "shown.bs.modal", {
          relatedTarget: e
        })
      }), this._dialog, t)
    }
    _setEscapeEvent() {
      this._isShown ? j.on(this._element, "keydown.dismiss.bs.modal", (e => {
        this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
      })) : j.off(this._element, "keydown.dismiss.bs.modal")
    }
    _setResizeEvent() {
      this._isShown ? j.on(window, "resize.bs.modal", (() => this._adjustDialog())) : j.off(window, "resize.bs.modal")
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
        document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, "hidden.bs.modal")
      }))
    }
    _showBackdrop(e) {
      j.on(this._element, "click.dismiss.bs.modal", (e => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
      })), this._backdrop.show(e)
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const {
        classList: e,
        scrollHeight: t,
        style: n
      } = this._element, i = t > document.documentElement.clientHeight;
      !i && "hidden" === n.overflowY || e.contains("modal-static") || (i || (n.overflowY = "hidden"), e.add("modal-static"), this._queueCallback((() => {
        e.remove("modal-static"), i || this._queueCallback((() => {
          n.overflowY = ""
        }), this._dialog)
      }), this._dialog), this._element.focus())
    }
    _adjustDialog() {
      const e = this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        n = t > 0;
      (!n && e && !g() || n && !e && g()) && (this._element.style.paddingLeft = t + "px"), (n && !e && !g() || !n && e && g()) && (this._element.style.paddingRight = t + "px")
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }
    static jQueryInterface(e, t) {
      return this.each((function () {
        const n = ke.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
          n[e](t)
        }
      }))
    }
  }
  j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (e) {
    const t = a(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), j.one(t, "show.bs.modal", (e => {
      e.defaultPrevented || j.one(t, "hidden.bs.modal", (() => {
        c(this) && this.focus()
      }))
    }));
    const n = U.findOne(".modal.show");
    n && ke.getInstance(n).hide(), ke.getOrCreateInstance(t).toggle(this)
  })), R(ke), v(ke);
  const Me = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    Le = {
      backdrop: "boolean",
      keyboard: "boolean",
      scroll: "boolean"
    };
  class Se extends F {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }
    static get NAME() {
      return "offcanvas"
    }
    static get Default() {
      return Me
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e)
    }
    show(e) {
      this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new pe).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback((() => {
        this._config.scroll || this._focustrap.activate(), j.trigger(this._element, "shown.bs.offcanvas", {
          relatedTarget: e
        })
      }), this._element, !0))
    }
    hide() {
      this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback((() => {
        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new pe).reset(), j.trigger(this._element, "hidden.bs.offcanvas")
      }), this._element, !0)))
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _getConfig(e) {
      return e = {
        ...Me,
        ...q.getDataAttributes(this._element),
        ..."object" == typeof e ? e : {}
      }, l("offcanvas", e, Le), e
    }
    _initializeBackDrop() {
      return new ve({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      })
    }
    _initializeFocusTrap() {
      return new xe({
        trapElement: this._element
      })
    }
    _addEventListeners() {
      j.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
        this._config.keyboard && "Escape" === e.key && this.hide()
      }))
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = Se.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
          t[e](this)
        }
      }))
    }
  }
  j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (e) {
    const t = a(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
    j.one(t, "hidden.bs.offcanvas", (() => {
      c(this) && this.focus()
    }));
    const n = U.findOne(".offcanvas.show");
    n && n !== t && Se.getInstance(n).hide(), Se.getOrCreateInstance(t).toggle(this)
  })), j.on(window, "load.bs.offcanvas.data-api", (() => U.find(".offcanvas.show").forEach((e => Se.getOrCreateInstance(e).show())))), R(Se), v(Se);
  const Ae = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Te = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ce = (e, t) => {
      const n = e.nodeName.toLowerCase();
      if (t.includes(n)) return !Ae.has(n) || Boolean(Te.test(e.nodeValue) || De.test(e.nodeValue));
      const i = t.filter((e => e instanceof RegExp));
      for (let e = 0, t = i.length; e < t; e++)
        if (i[e].test(n)) return !0;
      return !1
    };

  function Ee(e, t, n) {
    if (!e.length) return e;
    if (n && "function" == typeof n) return n(e);
    const i = (new window.DOMParser).parseFromString(e, "text/html"),
      a = Object.keys(t),
      r = [].concat(...i.body.querySelectorAll("*"));
    for (let e = 0, n = r.length; e < n; e++) {
      const n = r[e],
        i = n.nodeName.toLowerCase();
      if (!a.includes(i)) {
        n.remove();
        continue
      }
      const o = [].concat(...n.attributes),
        s = [].concat(t["*"] || [], t[i] || []);
      o.forEach((e => {
        Ce(e, s) || n.removeAttribute(e.nodeName)
      }))
    }
    return i.body.innerHTML
  }
  const Oe = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ye = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
    Pe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left"
    },
    Ie = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
    je = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    };
  class Ne extends F {
    constructor(e, n) {
      if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(n), this.tip = null, this._setListeners()
    }
    static get Default() {
      return Ie
    }
    static get NAME() {
      return "tooltip"
    }
    static get Event() {
      return je
    }
    static get DefaultType() {
      return Ye
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle(e) {
      if (this._isEnabled)
        if (e) {
          const t = this._initializeOnDelegatedTarget(e);
          t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
          this._enter(null, this)
        }
    }
    dispose() {
      clearTimeout(this._timeout), j.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const e = j.trigger(this._element, this.constructor.Event.SHOW),
        n = d(this._element),
        i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
      if (e.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      const a = this.getTipElement(),
        r = (e => {
          do {
            e += Math.floor(1e6 * Math.random())
          } while (document.getElementById(e));
          return e
        })(this.constructor.NAME);
      a.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && a.classList.add("fade");
      const o = "function" == typeof this._config.placement ? this._config.placement.call(this, a, this._element) : this._config.placement,
        s = this._getAttachment(o);
      this._addAttachmentClass(s);
      const {
        container: l
      } = this._config;
      H.set(a, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(a), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = t.createPopper(this._element, a, this._getPopperConfig(s)), a.classList.add("show");
      const c = this._resolvePossibleFunction(this._config.customClass);
      c && a.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
        j.on(e, "mouseover", h)
      }));
      const u = this.tip.classList.contains("fade");
      this._queueCallback((() => {
        const e = this._hoverState;
        this._hoverState = null, j.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this)
      }), this.tip, u)
    }
    hide() {
      if (!this._popper) return;
      const e = this.getTipElement();
      if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      e.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => j.off(e, "mouseover", h))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      const t = this.tip.classList.contains("fade");
      this._queueCallback((() => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
      }), this.tip, t), this._hoverState = ""
    }
    update() {
      null !== this._popper && this._popper.update()
    }
    isWithContent() {
      return Boolean(this.getTitle())
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const e = document.createElement("div");
      e.innerHTML = this._config.template;
      const t = e.children[0];
      return this.setContent(t), t.classList.remove("fade", "show"), this.tip = t, this.tip
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner")
    }
    _sanitizeAndSetContent(e, t, n) {
      const i = U.findOne(n, e);
      t || !i ? this.setElementContent(i, t) : i.remove()
    }
    setElementContent(e, t) {
      if (null !== e) return o(t) ? (t = s(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = Ee(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
    }
    getTitle() {
      const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(e)
    }
    updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e
    }
    _initializeOnDelegatedTarget(e, t) {
      return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
    }
    _getOffset() {
      const {
        offset: e
      } = this._config;
      return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
    }
    _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e
    }
    _getPopperConfig(e) {
      const t = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: e => this._handlePopperPlacementChange(e)
        }],
        onFirstUpdate: e => {
          e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
        }
      };
      return {
        ...t,
        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
      }
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
    }
    _getAttachment(e) {
      return Pe[e.toUpperCase()]
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e => {
        if ("click" === e) j.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
        else if ("manual" !== e) {
          const t = "hover" === e ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
            n = "hover" === e ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          j.on(this._element, t, this._config.selector, (e => this._enter(e))), j.on(this._element, n, this._config.selector, (e => this._leave(e)))
        }
      })), this._hideModalHandler = () => {
        this._element && this.hide()
      }, j.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
        ...this._config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle()
    }
    _fixTitle() {
      const e = this._element.getAttribute("title"),
        t = typeof this._element.getAttribute("data-bs-original-title");
      (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
    }
    _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
        "show" === t._hoverState && t.show()
      }), t._config.delay.show) : t.show())
    }
    _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
        "out" === t._hoverState && t.hide()
      }), t._config.delay.hide) : t.hide())
    }
    _isWithActiveTrigger() {
      for (const e in this._activeTrigger)
        if (this._activeTrigger[e]) return !0;
      return !1
    }
    _getConfig(e) {
      const t = q.getDataAttributes(this._element);
      return Object.keys(t).forEach((e => {
        Oe.has(e) && delete t[e]
      })), (e = {
        ...this.constructor.Default,
        ...t,
        ..."object" == typeof e && e ? e : {}
      }).container = !1 === e.container ? document.body : s(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l("tooltip", e, this.constructor.DefaultType), e.sanitize && (e.template = Ee(e.template, e.allowList, e.sanitizeFn)), e
    }
    _getDelegateConfig() {
      const e = {};
      for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      return e
    }
    _cleanTipClass() {
      const e = this.getTipElement(),
        t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        n = e.getAttribute("class").match(t);
      null !== n && n.length > 0 && n.map((e => e.trim())).forEach((t => e.classList.remove(t)))
    }
    _getBasicClassPrefix() {
      return "bs-tooltip"
    }
    _handlePopperPlacementChange(e) {
      const {
        state: t
      } = e;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null)
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = Ne.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]()
        }
      }))
    }
  }
  v(Ne);
  const He = {
      ...Ne.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    },
    Fe = {
      ...Ne.DefaultType,
      content: "(string|element|function)"
    },
    Re = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    };
  class ze extends Ne {
    static get Default() {
      return He
    }
    static get NAME() {
      return "popover"
    }
    static get Event() {
      return Re
    }
    static get DefaultType() {
      return Fe
    }
    isWithContent() {
      return this.getTitle() || this._getContent()
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    _getBasicClassPrefix() {
      return "bs-popover"
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = ze.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]()
        }
      }))
    }
  }
  v(ze);
  const Be = {
      offset: 10,
      method: "auto",
      target: ""
    },
    We = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    Ve = ".nav-link, .list-group-item, .dropdown-item";
  class qe extends F {
    constructor(e, t) {
      super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
    }
    static get Default() {
      return Be
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
        t = "auto" === this._config.method ? e : this._config.method,
        n = "position" === t ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(Ve, this._config.target).map((e => {
        const a = i(e),
          r = a ? U.findOne(a) : null;
        if (r) {
          const e = r.getBoundingClientRect();
          if (e.width || e.height) return [q[t](r).top + n, a]
        }
        return null
      })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
        this._offsets.push(e[0]), this._targets.push(e[1])
      }))
    }
    dispose() {
      j.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
    }
    _getConfig(e) {
      return (e = {
        ...Be,
        ...q.getDataAttributes(this._element),
        ..."object" == typeof e && e ? e : {}
      }).target = s(e.target) || document.documentElement, l("scrollspy", e, We), e
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    _process() {
      const e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        n = this._config.offset + t - this._getOffsetHeight();
      if (this._scrollHeight !== t && this.refresh(), e >= n) {
        const e = this._targets[this._targets.length - 1];
        this._activeTarget !== e && this._activate(e)
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
      }
    }
    _activate(e) {
      this._activeTarget = e, this._clear();
      const t = Ve.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
        n = U.findOne(t.join(","), this._config.target);
      n.classList.add("active"), n.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active") : U.parents(n, ".nav, .list-group").forEach((e => {
        U.prev(e, ".nav-link, .list-group-item").forEach((e => e.classList.add("active"))), U.prev(e, ".nav-item").forEach((e => {
          U.children(e, ".nav-link").forEach((e => e.classList.add("active")))
        }))
      })), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: e
      })
    }
    _clear() {
      U.find(Ve, this._config.target).filter((e => e.classList.contains("active"))).forEach((e => e.classList.remove("active")))
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = qe.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]()
        }
      }))
    }
  }
  j.on(window, "load.bs.scrollspy.data-api", (() => {
    U.find('[data-bs-spy="scroll"]').forEach((e => new qe(e)))
  })), v(qe);
  class Ue extends F {
    static get NAME() {
      return "tab"
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      let e;
      const t = a(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const t = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
        e = U.find(t, n), e = e[e.length - 1]
      }
      const i = e ? j.trigger(e, "hide.bs.tab", {
        relatedTarget: this._element
      }) : null;
      if (j.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== i && i.defaultPrevented) return;
      this._activate(this._element, n);
      const r = () => {
        j.trigger(e, "hidden.bs.tab", {
          relatedTarget: this._element
        }), j.trigger(this._element, "shown.bs.tab", {
          relatedTarget: e
        })
      };
      t ? this._activate(t, t.parentNode, r) : r()
    }
    _activate(e, t, n) {
      const i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? U.children(t, ".active") : U.find(":scope > li > .active", t))[0],
        a = n && i && i.classList.contains("fade"),
        r = () => this._transitionComplete(e, i, n);
      i && a ? (i.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
    }
    _transitionComplete(e, t, n) {
      if (t) {
        t.classList.remove("active");
        const e = U.findOne(":scope > .dropdown-menu .active", t.parentNode);
        e && e.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
      }
      e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
      let i = e.parentNode;
      if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
        const t = e.closest(".dropdown");
        t && U.find(".dropdown-toggle", t).forEach((e => e.classList.add("active"))), e.setAttribute("aria-expanded", !0)
      }
      n && n()
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = Ue.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e]()
        }
      }))
    }
  }
  j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this) || Ue.getOrCreateInstance(this).show()
  })), v(Ue);
  const Xe = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    $e = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  class Ge extends F {
    constructor(e, t) {
      super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get DefaultType() {
      return Xe
    }
    static get Default() {
      return $e
    }
    static get NAME() {
      return "toast"
    }
    show() {
      j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback((() => {
        this._element.classList.remove("showing"), j.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
      }), this._element, this._config.animation))
    }
    hide() {
      this._element.classList.contains("show") && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback((() => {
        this._element.classList.add("hide"), this._element.classList.remove("showing"), this._element.classList.remove("show"), j.trigger(this._element, "hidden.bs.toast")
      }), this._element, this._config.animation)))
    }
    dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
    }
    _getConfig(e) {
      return e = {
        ...$e,
        ...q.getDataAttributes(this._element),
        ..."object" == typeof e && e ? e : {}
      }, l("toast", e, this.constructor.DefaultType), e
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
        this.hide()
      }), this._config.delay)))
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t
      }
      if (t) return void this._clearTimeout();
      const n = e.relatedTarget;
      this._element === n || this._element.contains(n) || this._maybeScheduleHide()
    }
    _setListeners() {
      j.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), j.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), j.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), j.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(e) {
      return this.each((function () {
        const t = Ge.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
          t[e](this)
        }
      }))
    }
  }
  return R(Ge), v(Ge), {
    Alert: z,
    Button: B,
    Carousel: ee,
    Collapse: ie,
    Dropdown: fe,
    Modal: ke,
    Offcanvas: Se,
    Popover: ze,
    ScrollSpy: qe,
    Tab: Ue,
    Toast: Ge,
    Tooltip: Ne
  }
})),
function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, (function () {
  "use strict";
  var e, t;

  function n() {
    return e.apply(null, arguments)
  }

  function i(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
  }

  function a(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e)
  }

  function r(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }

  function o(e) {
    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
    for (var t in e)
      if (r(e, t)) return;
    return 1
  }

  function s(e) {
    return void 0 === e
  }

  function l(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
  }

  function c(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
  }

  function u(e, t) {
    for (var n = [], i = 0; i < e.length; ++i) n.push(t(e[i], i));
    return n
  }

  function d(e, t) {
    for (var n in t) r(t, n) && (e[n] = t[n]);
    return r(t, "toString") && (e.toString = t.toString), r(t, "valueOf") && (e.valueOf = t.valueOf), e
  }

  function h(e, t, n, i) {
    return vt(e, t, n, i, !0).utc()
  }

  function f(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf
  }

  function p(e) {
    if (null == e._isValid) {
      var n = f(e),
        i = t.call(n.parsedDateParts, (function (e) {
          return null != e
        })),
        a = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);
      if (e._strict && (a = a && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
      e._isValid = a
    }
    return e._isValid
  }

  function m(e) {
    var t = h(NaN);
    return null != e ? d(f(t), e) : f(t).userInvalidated = !0, t
  }
  t = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
      if (i in t && e.call(this, t[i], i, t)) return !0;
    return !1
  };
  var g = n.momentProperties = [],
    v = !1;

  function y(e, t) {
    var n, i, a;
    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = f(t)), s(t._locale) || (e._locale = t._locale), 0 < g.length)
      for (n = 0; n < g.length; n++) s(a = t[i = g[n]]) || (e[i] = a);
    return e
  }

  function b(e) {
    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, n.updateOffset(this), v = !1)
  }

  function x(e) {
    return e instanceof b || null != e && null != e._isAMomentObject
  }

  function _(e) {
    !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }

  function w(e, t) {
    var i = !0;
    return d((function () {
      if (null != n.deprecationHandler && n.deprecationHandler(null, e), i) {
        for (var a, o, s = [], l = 0; l < arguments.length; l++) {
          if (a = "", "object" == typeof arguments[l]) {
            for (o in a += "\n[" + l + "] ", arguments[0]) r(arguments[0], o) && (a += o + ": " + arguments[0][o] + ", ");
            a = a.slice(0, -2)
          } else a = arguments[l];
          s.push(a)
        }
        _(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), i = !1
      }
      return t.apply(this, arguments)
    }), t)
  }
  var k, M = {};

  function L(e, t) {
    null != n.deprecationHandler && n.deprecationHandler(e, t), M[e] || (_(t), M[e] = !0)
  }

  function S(e) {
    return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
  }

  function A(e, t) {
    var n, i = d({}, e);
    for (n in t) r(t, n) && (a(e[n]) && a(t[n]) ? (i[n] = {}, d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
    for (n in e) r(e, n) && !r(t, n) && a(e[n]) && (i[n] = d({}, i[n]));
    return i
  }

  function T(e) {
    null != e && this.set(e)
  }

  function D(e, t, n) {
    var i = "" + Math.abs(e),
      a = t - i.length;
    return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
  }
  n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, k = Object.keys ? Object.keys : function (e) {
    var t, n = [];
    for (t in e) r(e, t) && n.push(t);
    return n
  };
  var C = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    O = {},
    Y = {};

  function P(e, t, n, i) {
    var a = "string" == typeof i ? function () {
      return this[i]()
    } : i;
    e && (Y[e] = a), t && (Y[t[0]] = function () {
      return D(a.apply(this, arguments), t[1], t[2])
    }), n && (Y[n] = function () {
      return this.localeData().ordinal(a.apply(this, arguments), e)
    })
  }

  function I(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), O[t] = O[t] || function (e) {
      for (var t, n = e.match(C), i = 0, a = n.length; i < a; i++) Y[n[i]] ? n[i] = Y[n[i]] : n[i] = (t = n[i]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
      return function (t) {
        for (var i = "", r = 0; r < a; r++) i += S(n[r]) ? n[r].call(t, e) : n[r];
        return i
      }
    }(t), O[t](e)) : e.localeData().invalidDate()
  }

  function j(e, t) {
    var n = 5;

    function i(e) {
      return t.longDateFormat(e) || e
    }
    for (E.lastIndex = 0; 0 <= n && E.test(e);) e = e.replace(E, i), E.lastIndex = 0, --n;
    return e
  }
  var N = {};

  function H(e, t) {
    var n = e.toLowerCase();
    N[n] = N[n + "s"] = N[t] = e
  }

  function F(e) {
    return "string" == typeof e ? N[e] || N[e.toLowerCase()] : void 0
  }

  function R(e) {
    var t, n, i = {};
    for (n in e) r(e, n) && (t = F(n)) && (i[t] = e[n]);
    return i
  }
  var z = {};

  function B(e, t) {
    z[e] = t
  }

  function W(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
  }

  function V(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }

  function q(e) {
    var t = +e,
      n = 0;
    return 0 != t && isFinite(t) && (n = V(t)), n
  }

  function U(e, t) {
    return function (i) {
      return null != i ? ($(this, e, i), n.updateOffset(this, t), this) : X(this, e)
    }
  }

  function X(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
  }

  function $(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && W(e.year()) && 1 === e.month() && 29 === e.date() ? (n = q(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), be(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
  }
  var G, Z = /\d/,
    K = /\d\d/,
    J = /\d{3}/,
    Q = /\d{4}/,
    ee = /[+-]?\d{6}/,
    te = /\d\d?/,
    ne = /\d\d\d\d?/,
    ie = /\d\d\d\d\d\d?/,
    ae = /\d{1,3}/,
    re = /\d{1,4}/,
    oe = /[+-]?\d{1,6}/,
    se = /\d+/,
    le = /[+-]?\d+/,
    ce = /Z|[+-]\d\d:?\d\d/gi,
    ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
    de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

  function he(e, t, n) {
    G[e] = S(t) ? t : function (e, i) {
      return e && n ? n : t
    }
  }

  function fe(e, t) {
    return r(G, e) ? G[e](t._strict, t._locale) : new RegExp(pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, t, n, i, a) {
      return t || n || i || a
    }))))
  }

  function pe(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  G = {};
  var me = {};

  function ge(e, t) {
    var n, i = t;
    for ("string" == typeof e && (e = [e]), l(t) && (i = function (e, n) {
        n[t] = q(e)
      }), n = 0; n < e.length; n++) me[e[n]] = i
  }

  function ve(e, t) {
    ge(e, (function (e, n, i, a) {
      i._w = i._w || {}, t(e, i._w, i, a)
    }))
  }
  var ye;

  function be(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = (t % 12 + 12) % 12;
    return e += (t - n) / 12, 1 == n ? W(e) ? 29 : 28 : 31 - n % 7 % 2
  }
  ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    for (var t = 0; t < this.length; ++t)
      if (this[t] === e) return t;
    return -1
  }, P("M", ["MM", 2], "Mo", (function () {
    return this.month() + 1
  })), P("MMM", 0, 0, (function (e) {
    return this.localeData().monthsShort(this, e)
  })), P("MMMM", 0, 0, (function (e) {
    return this.localeData().months(this, e)
  })), H("month", "M"), B("month", 8), he("M", te), he("MM", te, K), he("MMM", (function (e, t) {
    return t.monthsShortRegex(e)
  })), he("MMMM", (function (e, t) {
    return t.monthsRegex(e)
  })), ge(["M", "MM"], (function (e, t) {
    t[1] = q(e) - 1
  })), ge(["MMM", "MMMM"], (function (e, t, n, i) {
    var a = n._locale.monthsParse(e, i, n._strict);
    null != a ? t[1] = a : f(n).invalidMonth = e
  }));
  var xe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    _e = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    we = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    ke = de,
    Me = de;

  function Le(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t)
      if (/^\d+$/.test(t)) t = q(t);
      else if (!l(t = e.localeData().monthsParse(t))) return e;
    return n = Math.min(e.date(), be(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
  }

  function Se(e) {
    return null != e ? (Le(this, e), n.updateOffset(this, !0), this) : X(this, "Month")
  }

  function Ae() {
    function e(e, t) {
      return t.length - e.length
    }
    for (var t, n = [], i = [], a = [], r = 0; r < 12; r++) t = h([2e3, r]), n.push(this.monthsShort(t, "")), i.push(this.months(t, "")), a.push(this.months(t, "")), a.push(this.monthsShort(t, ""));
    for (n.sort(e), i.sort(e), a.sort(e), r = 0; r < 12; r++) n[r] = pe(n[r]), i[r] = pe(i[r]);
    for (r = 0; r < 24; r++) a[r] = pe(a[r]);
    this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
  }

  function Te(e) {
    return W(e) ? 366 : 365
  }
  P("Y", 0, 0, (function () {
    var e = this.year();
    return e <= 9999 ? D(e, 4) : "+" + e
  })), P(0, ["YY", 2], 0, (function () {
    return this.year() % 100
  })), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), H("year", "y"), B("year", 1), he("Y", le), he("YY", te, K), he("YYYY", re, Q), he("YYYYY", oe, ee), he("YYYYYY", oe, ee), ge(["YYYYY", "YYYYYY"], 0), ge("YYYY", (function (e, t) {
    t[0] = 2 === e.length ? n.parseTwoDigitYear(e) : q(e)
  })), ge("YY", (function (e, t) {
    t[0] = n.parseTwoDigitYear(e)
  })), ge("Y", (function (e, t) {
    t[0] = parseInt(e, 10)
  })), n.parseTwoDigitYear = function (e) {
    return q(e) + (68 < q(e) ? 1900 : 2e3)
  };
  var De = U("FullYear", !0);

  function Ce(e) {
    var t, n;
    return e < 100 && 0 <= e ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
  }

  function Ee(e, t, n) {
    var i = 7 + t - n;
    return i - (7 + Ce(e, 0, i).getUTCDay() - t) % 7 - 1
  }

  function Oe(e, t, n, i, a) {
    var r, o = 1 + 7 * (t - 1) + (7 + n - i) % 7 + Ee(e, i, a),
      s = o <= 0 ? Te(r = e - 1) + o : o > Te(e) ? (r = e + 1, o - Te(e)) : (r = e, o);
    return {
      year: r,
      dayOfYear: s
    }
  }

  function Ye(e, t, n) {
    var i, a, r = Ee(e.year(), t, n),
      o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return o < 1 ? i = o + Pe(a = e.year() - 1, t, n) : o > Pe(e.year(), t, n) ? (i = o - Pe(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = o), {
      week: i,
      year: a
    }
  }

  function Pe(e, t, n) {
    var i = Ee(e, t, n),
      a = Ee(e + 1, t, n);
    return (Te(e) - i + a) / 7
  }

  function Ie(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
  }
  P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), H("week", "w"), H("isoWeek", "W"), B("week", 5), B("isoWeek", 5), he("w", te), he("ww", te, K), he("W", te), he("WW", te, K), ve(["w", "ww", "W", "WW"], (function (e, t, n, i) {
    t[i.substr(0, 1)] = q(e)
  })), P("d", 0, "do", "day"), P("dd", 0, 0, (function (e) {
    return this.localeData().weekdaysMin(this, e)
  })), P("ddd", 0, 0, (function (e) {
    return this.localeData().weekdaysShort(this, e)
  })), P("dddd", 0, 0, (function (e) {
    return this.localeData().weekdays(this, e)
  })), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), H("day", "d"), H("weekday", "e"), H("isoWeekday", "E"), B("day", 11), B("weekday", 11), B("isoWeekday", 11), he("d", te), he("e", te), he("E", te), he("dd", (function (e, t) {
    return t.weekdaysMinRegex(e)
  })), he("ddd", (function (e, t) {
    return t.weekdaysShortRegex(e)
  })), he("dddd", (function (e, t) {
    return t.weekdaysRegex(e)
  })), ve(["dd", "ddd", "dddd"], (function (e, t, n, i) {
    var a = n._locale.weekdaysParse(e, i, n._strict);
    null != a ? t.d = a : f(n).invalidWeekday = e
  })), ve(["d", "e", "E"], (function (e, t, n, i) {
    t[i] = q(e)
  }));
  var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    He = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Fe = de,
    Re = de,
    ze = de;

  function Be() {
    function e(e, t) {
      return t.length - e.length
    }
    for (var t, n, i, a, r = [], o = [], s = [], l = [], c = 0; c < 7; c++) t = h([2e3, 1]).day(c), n = pe(this.weekdaysMin(t, "")), i = pe(this.weekdaysShort(t, "")), a = pe(this.weekdays(t, "")), r.push(n), o.push(i), s.push(a), l.push(n), l.push(i), l.push(a);
    r.sort(e), o.sort(e), s.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
  }

  function We() {
    return this.hours() % 12 || 12
  }

  function Ve(e, t) {
    P(e, 0, 0, (function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    }))
  }

  function qe(e, t) {
    return t._meridiemParse
  }
  P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, We), P("k", ["kk", 2], 0, (function () {
    return this.hours() || 24
  })), P("hmm", 0, 0, (function () {
    return "" + We.apply(this) + D(this.minutes(), 2)
  })), P("hmmss", 0, 0, (function () {
    return "" + We.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
  })), P("Hmm", 0, 0, (function () {
    return "" + this.hours() + D(this.minutes(), 2)
  })), P("Hmmss", 0, 0, (function () {
    return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
  })), Ve("a", !0), Ve("A", !1), H("hour", "h"), B("hour", 13), he("a", qe), he("A", qe), he("H", te), he("h", te), he("k", te), he("HH", te, K), he("hh", te, K), he("kk", te, K), he("hmm", ne), he("hmmss", ie), he("Hmm", ne), he("Hmmss", ie), ge(["H", "HH"], 3), ge(["k", "kk"], (function (e, t, n) {
    var i = q(e);
    t[3] = 24 === i ? 0 : i
  })), ge(["a", "A"], (function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e
  })), ge(["h", "hh"], (function (e, t, n) {
    t[3] = q(e), f(n).bigHour = !0
  })), ge("hmm", (function (e, t, n) {
    var i = e.length - 2;
    t[3] = q(e.substr(0, i)), t[4] = q(e.substr(i)), f(n).bigHour = !0
  })), ge("hmmss", (function (e, t, n) {
    var i = e.length - 4,
      a = e.length - 2;
    t[3] = q(e.substr(0, i)), t[4] = q(e.substr(i, 2)), t[5] = q(e.substr(a)), f(n).bigHour = !0
  })), ge("Hmm", (function (e, t, n) {
    var i = e.length - 2;
    t[3] = q(e.substr(0, i)), t[4] = q(e.substr(i))
  })), ge("Hmmss", (function (e, t, n) {
    var i = e.length - 4,
      a = e.length - 2;
    t[3] = q(e.substr(0, i)), t[4] = q(e.substr(i, 2)), t[5] = q(e.substr(a))
  }));
  var Ue, Xe = U("Hours", !0),
    $e = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      months: xe,
      monthsShort: _e,
      week: {
        dow: 0,
        doy: 6
      },
      weekdays: je,
      weekdaysMin: He,
      weekdaysShort: Ne,
      meridiemParse: /[ap]\.?m?\.?/i
    },
    Ge = {},
    Ze = {};

  function Ke(e) {
    return e ? e.toLowerCase().replace("_", "-") : e
  }

  function Je(e) {
    var t;
    if (void 0 === Ge[e] && "undefined" != typeof module && module && module.exports) try {
      t = Ue._abbr, require("./locale/" + e), Qe(t)
    } catch (t) {
      Ge[e] = null
    }
    return Ge[e]
  }

  function Qe(e, t) {
    var n;
    return e && ((n = s(t) ? tt(e) : et(e, t)) ? Ue = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ue._abbr
  }

  function et(e, t) {
    if (null === t) return delete Ge[e], null;
    var n, i = $e;
    if (t.abbr = e, null != Ge[e]) L("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Ge[e]._config;
    else if (null != t.parentLocale)
      if (null != Ge[t.parentLocale]) i = Ge[t.parentLocale]._config;
      else {
        if (null == (n = Je(t.parentLocale))) return Ze[t.parentLocale] || (Ze[t.parentLocale] = []), Ze[t.parentLocale].push({
          name: e,
          config: t
        }), null;
        i = n._config
      } return Ge[e] = new T(A(i, t)), Ze[e] && Ze[e].forEach((function (e) {
      et(e.name, e.config)
    })), Qe(e), Ge[e]
  }

  function tt(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ue;
    if (!i(e)) {
      if (t = Je(e)) return t;
      e = [e]
    }
    return function (e) {
      for (var t, n, i, a, r = 0; r < e.length;) {
        for (t = (a = Ke(e[r]).split("-")).length, n = (n = Ke(e[r + 1])) ? n.split("-") : null; 0 < t;) {
          if (i = Je(a.slice(0, t).join("-"))) return i;
          if (n && n.length >= t && function (e, t) {
              for (var n = Math.min(e.length, t.length), i = 0; i < n; i += 1)
                if (e[i] !== t[i]) return i;
              return n
            }(a, n) >= t - 1) break;
          t--
        }
        r++
      }
      return Ue
    }(e)
  }

  function nt(e) {
    var t, n = e._a;
    return n && -2 === f(e).overflow && (t = n[1] < 0 || 11 < n[1] ? 1 : n[2] < 1 || n[2] > be(n[0], n[1]) ? 2 : n[3] < 0 || 24 < n[3] || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || 59 < n[4] ? 4 : n[5] < 0 || 59 < n[5] ? 5 : n[6] < 0 || 999 < n[6] ? 6 : -1, f(e)._overflowDayOfYear && (t < 0 || 2 < t) && (t = 2), f(e)._overflowWeeks && -1 === t && (t = 7), f(e)._overflowWeekday && -1 === t && (t = 8), f(e).overflow = t), e
  }
  var it = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    at = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    rt = /Z|[+-]\d\d(?::?\d\d)?/,
    ot = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1]
    ],
    st = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    lt = /^\/?Date\((-?\d+)/i,
    ct = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    ut = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };

  function dt(e) {
    var t, n, i, a, r, o, s = e._i,
      l = it.exec(s) || at.exec(s);
    if (l) {
      for (f(e).iso = !0, t = 0, n = ot.length; t < n; t++)
        if (ot[t][1].exec(l[1])) {
          a = ot[t][0], i = !1 !== ot[t][2];
          break
        } if (null == a) return void(e._isValid = !1);
      if (l[3]) {
        for (t = 0, n = st.length; t < n; t++)
          if (st[t][1].exec(l[3])) {
            r = (l[2] || " ") + st[t][0];
            break
          } if (null == r) return void(e._isValid = !1)
      }
      if (!i && null != r) return void(e._isValid = !1);
      if (l[4]) {
        if (!rt.exec(l[4])) return void(e._isValid = !1);
        o = "Z"
      }
      e._f = a + (r || "") + (o || ""), mt(e)
    } else e._isValid = !1
  }

  function ht(e) {
    var t, n, i, a, r = ct.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
    if (r) {
      if (i = t = function (e, t, n, i, a, r) {
          var o = [function (e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
          }(e), _e.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(a, 10)];
          return r && o.push(parseInt(r, 10)), o
        }(r[4], r[3], r[2], r[5], r[6], r[7]), a = e, (n = r[1]) && Ne.indexOf(n) !== new Date(i[0], i[1], i[2]).getDay() && (f(a).weekdayMismatch = !0, !void(a._isValid = !1))) return;
      e._a = t, e._tzm = function (e, t, n) {
        if (e) return ut[e];
        if (t) return 0;
        var i = parseInt(n, 10),
          a = i % 100;
        return (i - a) / 100 * 60 + a
      }(r[8], r[9], r[10]), e._d = Ce.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
    } else e._isValid = !1
  }

  function ft(e, t, n) {
    return null != e ? e : null != t ? t : n
  }

  function pt(e) {
    var t, i, a, r, o, s, l, c = [];
    if (!e._d) {
      for (s = e, l = new Date(n.now()), a = s._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[2] && null == e._a[1] && function (e) {
          var t, n, i, a, r, o, s, l, c;
          null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, o = 4, n = ft(t.GG, e._a[0], Ye(yt(), 1, 4).year), i = ft(t.W, 1), ((a = ft(t.E, 1)) < 1 || 7 < a) && (l = !0)) : (r = e._locale._week.dow, o = e._locale._week.doy, c = Ye(yt(), r, o), n = ft(t.gg, e._a[0], c.year), i = ft(t.w, c.week), null != t.d ? ((a = t.d) < 0 || 6 < a) && (l = !0) : null != t.e ? (a = t.e + r, (t.e < 0 || 6 < t.e) && (l = !0)) : a = r), i < 1 || i > Pe(n, r, o) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (s = Oe(n, i, a, r, o), e._a[0] = s.year, e._dayOfYear = s.dayOfYear)
        }(e), null != e._dayOfYear && (o = ft(e._a[0], a[0]), (e._dayOfYear > Te(o) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), i = Ce(o, 0, e._dayOfYear), e._a[1] = i.getUTCMonth(), e._a[2] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = c[t] = a[t];
      for (; t < 7; t++) e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ce : function (e, t, n, i, a, r, o) {
        var s;
        return e < 100 && 0 <= e ? (s = new Date(e + 400, t, n, i, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, i, a, r, o), s
      }).apply(null, c), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
    }
  }

  function mt(e) {
    if (e._f !== n.ISO_8601)
      if (e._f !== n.RFC_2822) {
        e._a = [], f(e).empty = !0;
        for (var t, i, a, o, s, l, c, u = "" + e._i, d = u.length, h = 0, p = j(e._f, e._locale).match(C) || [], m = 0; m < p.length; m++) i = p[m], (t = (u.match(fe(i, e)) || [])[0]) && (0 < (a = u.substr(0, u.indexOf(t))).length && f(e).unusedInput.push(a), u = u.slice(u.indexOf(t) + t.length), h += t.length), Y[i] ? (t ? f(e).empty = !1 : f(e).unusedTokens.push(i), s = i, c = e, null != (l = t) && r(me, s) && me[s](l, c._a, c, s)) : e._strict && !t && f(e).unusedTokens.push(i);
        f(e).charsLeftOver = d - h, 0 < u.length && f(e).unusedInput.push(u), e._a[3] <= 12 && !0 === f(e).bigHour && 0 < e._a[3] && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[3] = function (e, t, n) {
          var i;
          return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0)), t)
        }(e._locale, e._a[3], e._meridiem), null !== (o = f(e).era) && (e._a[0] = e._locale.erasConvertYear(o, e._a[0])), pt(e), nt(e)
      } else ht(e);
    else dt(e)
  }

  function gt(e) {
    var t, r, o = e._i,
      h = e._f;
    return e._locale = e._locale || tt(e._l), null === o || void 0 === h && "" === o ? m({
      nullInput: !0
    }) : ("string" == typeof o && (e._i = o = e._locale.preparse(o)), x(o) ? new b(nt(o)) : (c(o) ? e._d = o : i(h) ? function (e) {
      var t, n, i, a, r, o, s = !1;
      if (0 === e._f.length) return f(e).invalidFormat = !0, e._d = new Date(NaN);
      for (a = 0; a < e._f.length; a++) r = 0, o = !1, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], mt(t), p(t) && (o = !0), r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, s ? r < i && (i = r, n = t) : (null == i || r < i || o) && (i = r, n = t, o && (s = !0));
      d(e, n || t)
    }(e) : h ? mt(e) : s(r = (t = e)._i) ? t._d = new Date(n.now()) : c(r) ? t._d = new Date(r.valueOf()) : "string" == typeof r ? function (e) {
      var t = lt.exec(e._i);
      null === t ? (dt(e), !1 === e._isValid && (delete e._isValid, ht(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : n.createFromInputFallback(e)))) : e._d = new Date(+t[1])
    }(t) : i(r) ? (t._a = u(r.slice(0), (function (e) {
      return parseInt(e, 10)
    })), pt(t)) : a(r) ? function (e) {
      var t, n;
      e._d || (n = void 0 === (t = R(e._i)).day ? t.date : t.day, e._a = u([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function (e) {
        return e && parseInt(e, 10)
      })), pt(e))
    }(t) : l(r) ? t._d = new Date(r) : n.createFromInputFallback(t), p(e) || (e._d = null), e))
  }

  function vt(e, t, n, r, s) {
    var l, c = {};
    return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== n && !1 !== n || (r = n, n = void 0), (a(e) && o(e) || i(e) && 0 === e.length) && (e = void 0), c._isAMomentObject = !0, c._useUTC = c._isUTC = s, c._l = n, c._i = e, c._f = t, c._strict = r, (l = new b(nt(gt(c))))._nextDay && (l.add(1, "d"), l._nextDay = void 0), l
  }

  function yt(e, t, n, i) {
    return vt(e, t, n, i, !1)
  }
  n.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
  })), n.ISO_8601 = function () {}, n.RFC_2822 = function () {};
  var bt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
      var e = yt.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : m()
    })),
    xt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
      var e = yt.apply(null, arguments);
      return this.isValid() && e.isValid() ? this < e ? this : e : m()
    }));

  function _t(e, t) {
    var n, a;
    if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return yt();
    for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
    return n
  }
  var wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function kt(e) {
    var t = R(e),
      n = t.year || 0,
      i = t.quarter || 0,
      a = t.month || 0,
      o = t.week || t.isoWeek || 0,
      s = t.day || 0,
      l = t.hour || 0,
      c = t.minute || 0,
      u = t.second || 0,
      d = t.millisecond || 0;
    this._isValid = function (e) {
      var t, n, i = !1;
      for (t in e)
        if (r(e, t) && (-1 === ye.call(wt, t) || null != e[t] && isNaN(e[t]))) return !1;
      for (n = 0; n < wt.length; ++n)
        if (e[wt[n]]) {
          if (i) return !1;
          parseFloat(e[wt[n]]) !== q(e[wt[n]]) && (i = !0)
        } return !0
    }(t), this._milliseconds = +d + 1e3 * u + 6e4 * c + 1e3 * l * 60 * 60, this._days = +s + 7 * o, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = tt(), this._bubble()
  }

  function Mt(e) {
    return e instanceof kt
  }

  function Lt(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
  }

  function St(e, t) {
    P(e, 0, 0, (function () {
      var e = this.utcOffset(),
        n = "+";
      return e < 0 && (e = -e, n = "-"), n + D(~~(e / 60), 2) + t + D(~~e % 60, 2)
    }))
  }
  St("Z", ":"), St("ZZ", ""), he("Z", ue), he("ZZ", ue), ge(["Z", "ZZ"], (function (e, t, n) {
    n._useUTC = !0, n._tzm = Tt(ue, e)
  }));
  var At = /([\+\-]|\d\d)/gi;

  function Tt(e, t) {
    var n, i, a = (t || "").match(e);
    return null === a ? null : 0 === (i = 60 * (n = ((a[a.length - 1] || []) + "").match(At) || ["-", 0, 0])[1] + q(n[2])) ? 0 : "+" === n[0] ? i : -i
  }

  function Dt(e, t) {
    var i, a;
    return t._isUTC ? (i = t.clone(), a = (x(e) || c(e) ? e.valueOf() : yt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), n.updateOffset(i, !1), i) : yt(e).local()
  }

  function Ct(e) {
    return -Math.round(e._d.getTimezoneOffset())
  }

  function Et() {
    return !!this.isValid() && this._isUTC && 0 === this._offset
  }
  n.updateOffset = function () {};
  var Ot = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Yt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function Pt(e, t) {
    var n, i, a, o = e,
      s = null;
    return Mt(e) ? o = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : l(e) || !isNaN(+e) ? (o = {}, t ? o[t] = +e : o.milliseconds = +e) : (s = Ot.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
      y: 0,
      d: q(s[2]) * n,
      h: q(s[3]) * n,
      m: q(s[4]) * n,
      s: q(s[5]) * n,
      ms: q(Lt(1e3 * s[6])) * n
    }) : (s = Yt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
      y: It(s[2], n),
      M: It(s[3], n),
      w: It(s[4], n),
      d: It(s[5], n),
      h: It(s[6], n),
      m: It(s[7], n),
      s: It(s[8], n)
    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = function (e, t) {
      var n;
      return e.isValid() && t.isValid() ? (t = Dt(t, e), e.isBefore(t) ? n = jt(e, t) : ((n = jt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
        milliseconds: 0,
        months: 0
      }
    }(yt(o.from), yt(o.to)), (o = {}).ms = a.milliseconds, o.M = a.months), i = new kt(o), Mt(e) && r(e, "_locale") && (i._locale = e._locale), Mt(e) && r(e, "_isValid") && (i._isValid = e._isValid), i
  }

  function It(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t
  }

  function jt(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = t - e.clone().add(n.months, "M"), n
  }

  function Nt(e, t) {
    return function (n, i) {
      var a;
      return null === i || isNaN(+i) || (L(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = i, i = a), Ht(this, Pt(n, i), e), this
    }
  }

  function Ht(e, t, i, a) {
    var r = t._milliseconds,
      o = Lt(t._days),
      s = Lt(t._months);
    e.isValid() && (a = null == a || a, s && Le(e, X(e, "Month") + s * i), o && $(e, "Date", X(e, "Date") + o * i), r && e._d.setTime(e._d.valueOf() + r * i), a && n.updateOffset(e, o || s))
  }
  Pt.fn = kt.prototype, Pt.invalid = function () {
    return Pt(NaN)
  };
  var Ft = Nt(1, "add"),
    Rt = Nt(-1, "subtract");

  function zt(e) {
    return "string" == typeof e || e instanceof String
  }

  function Bt(e) {
    return x(e) || c(e) || zt(e) || l(e) || function (e) {
      var t = i(e),
        n = !1;
      return t && (n = 0 === e.filter((function (t) {
        return !l(t) && zt(e)
      })).length), t && n
    }(e) || function (e) {
      var t, n = a(e) && !o(e),
        i = !1,
        s = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
      for (t = 0; t < s.length; t += 1) i = i || r(e, s[t]);
      return n && i
    }(e) || null == e
  }

  function Wt(e, t) {
    if (e.date() < t.date()) return -Wt(t, e);
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      i = e.clone().add(n, "months");
    return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(1 + n, "months") - i))) || 0
  }

  function Vt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = tt(e)) && (this._locale = t), this)
  }
  n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var qt = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
    return void 0 === e ? this.localeData() : this.locale(e)
  }));

  function Ut() {
    return this._locale
  }
  var Xt = 126227808e5;

  function $t(e, t) {
    return (e % t + t) % t
  }

  function Gt(e, t, n) {
    return e < 100 && 0 <= e ? new Date(e + 400, t, n) - Xt : new Date(e, t, n).valueOf()
  }

  function Zt(e, t, n) {
    return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - Xt : Date.UTC(e, t, n)
  }

  function Kt(e, t) {
    return t.erasAbbrRegex(e)
  }

  function Jt() {
    for (var e = [], t = [], n = [], i = [], a = this.eras(), r = 0, o = a.length; r < o; ++r) t.push(pe(a[r].name)), e.push(pe(a[r].abbr)), n.push(pe(a[r].narrow)), i.push(pe(a[r].name)), i.push(pe(a[r].abbr)), i.push(pe(a[r].narrow));
    this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
  }

  function Qt(e, t) {
    P(0, [e, e.length], 0, t)
  }

  function en(e, t, n, i, a) {
    var r;
    return null == e ? Ye(this, i, a).year : ((r = Pe(e, i, a)) < t && (t = r), function (e, t, n, i, a) {
      var r = Oe(e, t, n, i, a),
        o = Ce(r.year, 0, r.dayOfYear);
      return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
    }.call(this, e, t, n, i, a))
  }
  P("N", 0, 0, "eraAbbr"), P("NN", 0, 0, "eraAbbr"), P("NNN", 0, 0, "eraAbbr"), P("NNNN", 0, 0, "eraName"), P("NNNNN", 0, 0, "eraNarrow"), P("y", ["y", 1], "yo", "eraYear"), P("y", ["yy", 2], 0, "eraYear"), P("y", ["yyy", 3], 0, "eraYear"), P("y", ["yyyy", 4], 0, "eraYear"), he("N", Kt), he("NN", Kt), he("NNN", Kt), he("NNNN", (function (e, t) {
    return t.erasNameRegex(e)
  })), he("NNNNN", (function (e, t) {
    return t.erasNarrowRegex(e)
  })), ge(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (e, t, n, i) {
    var a = n._locale.erasParse(e, i, n._strict);
    a ? f(n).era = a : f(n).invalidEra = e
  })), he("y", se), he("yy", se), he("yyy", se), he("yyyy", se), he("yo", (function (e, t) {
    return t._eraYearOrdinalRegex || se
  })), ge(["y", "yy", "yyy", "yyyy"], 0), ge(["yo"], (function (e, t, n, i) {
    var a;
    n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[0] = n._locale.eraYearOrdinalParse(e, a) : t[0] = parseInt(e, 10)
  })), P(0, ["gg", 2], 0, (function () {
    return this.weekYear() % 100
  })), P(0, ["GG", 2], 0, (function () {
    return this.isoWeekYear() % 100
  })), Qt("gggg", "weekYear"), Qt("ggggg", "weekYear"), Qt("GGGG", "isoWeekYear"), Qt("GGGGG", "isoWeekYear"), H("weekYear", "gg"), H("isoWeekYear", "GG"), B("weekYear", 1), B("isoWeekYear", 1), he("G", le), he("g", le), he("GG", te, K), he("gg", te, K), he("GGGG", re, Q), he("gggg", re, Q), he("GGGGG", oe, ee), he("ggggg", oe, ee), ve(["gggg", "ggggg", "GGGG", "GGGGG"], (function (e, t, n, i) {
    t[i.substr(0, 2)] = q(e)
  })), ve(["gg", "GG"], (function (e, t, i, a) {
    t[a] = n.parseTwoDigitYear(e)
  })), P("Q", 0, "Qo", "quarter"), H("quarter", "Q"), B("quarter", 7), he("Q", Z), ge("Q", (function (e, t) {
    t[1] = 3 * (q(e) - 1)
  })), P("D", ["DD", 2], "Do", "date"), H("date", "D"), B("date", 9), he("D", te), he("DD", te, K), he("Do", (function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
  })), ge(["D", "DD"], 2), ge("Do", (function (e, t) {
    t[2] = q(e.match(te)[0])
  }));
  var tn = U("Date", !0);
  P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), H("dayOfYear", "DDD"), B("dayOfYear", 4), he("DDD", ae), he("DDDD", J), ge(["DDD", "DDDD"], (function (e, t, n) {
    n._dayOfYear = q(e)
  })), P("m", ["mm", 2], 0, "minute"), H("minute", "m"), B("minute", 14), he("m", te), he("mm", te, K), ge(["m", "mm"], 4);
  var nn = U("Minutes", !1);
  P("s", ["ss", 2], 0, "second"), H("second", "s"), B("second", 15), he("s", te), he("ss", te, K), ge(["s", "ss"], 5);
  var an, rn, on = U("Seconds", !1);
  for (P("S", 0, 0, (function () {
      return ~~(this.millisecond() / 100)
    })), P(0, ["SS", 2], 0, (function () {
      return ~~(this.millisecond() / 10)
    })), P(0, ["SSS", 3], 0, "millisecond"), P(0, ["SSSS", 4], 0, (function () {
      return 10 * this.millisecond()
    })), P(0, ["SSSSS", 5], 0, (function () {
      return 100 * this.millisecond()
    })), P(0, ["SSSSSS", 6], 0, (function () {
      return 1e3 * this.millisecond()
    })), P(0, ["SSSSSSS", 7], 0, (function () {
      return 1e4 * this.millisecond()
    })), P(0, ["SSSSSSSS", 8], 0, (function () {
      return 1e5 * this.millisecond()
    })), P(0, ["SSSSSSSSS", 9], 0, (function () {
      return 1e6 * this.millisecond()
    })), H("millisecond", "ms"), B("millisecond", 16), he("S", ae, Z), he("SS", ae, K), he("SSS", ae, J), an = "SSSS"; an.length <= 9; an += "S") he(an, se);

  function sn(e, t) {
    t[6] = q(1e3 * ("0." + e))
  }
  for (an = "S"; an.length <= 9; an += "S") ge(an, sn);
  rn = U("Milliseconds", !1), P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName");
  var ln = b.prototype;

  function cn(e) {
    return e
  }
  ln.add = Ft, ln.calendar = function (e, t) {
    1 === arguments.length && (arguments[0] ? Bt(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) {
      for (var t = a(e) && !o(e), n = !1, i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], s = 0; s < i.length; s += 1) n = n || r(e, i[s]);
      return t && n
    }(arguments[0]) && (t = arguments[0], e = void 0) : t = e = void 0);
    var i = e || yt(),
      s = Dt(i, this).startOf("day"),
      l = n.calendarFormat(this, s) || "sameElse",
      c = t && (S(t[l]) ? t[l].call(this, i) : t[l]);
    return this.format(c || this.localeData().calendar(l, this, yt(i)))
  }, ln.clone = function () {
    return new b(this)
  }, ln.diff = function (e, t, n) {
    var i, a, r;
    if (!this.isValid()) return NaN;
    if (!(i = Dt(e, this)).isValid()) return NaN;
    switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = F(t)) {
      case "year":
        r = Wt(this, i) / 12;
        break;
      case "month":
        r = Wt(this, i);
        break;
      case "quarter":
        r = Wt(this, i) / 3;
        break;
      case "second":
        r = (this - i) / 1e3;
        break;
      case "minute":
        r = (this - i) / 6e4;
        break;
      case "hour":
        r = (this - i) / 36e5;
        break;
      case "day":
        r = (this - i - a) / 864e5;
        break;
      case "week":
        r = (this - i - a) / 6048e5;
        break;
      default:
        r = this - i
    }
    return n ? r : V(r)
  }, ln.endOf = function (e) {
    var t, i;
    if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid()) return this;
    switch (i = this._isUTC ? Zt : Gt, e) {
      case "year":
        t = i(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        t = i(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        t = i(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += 36e5 - $t(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += 6e4 - $t(t, 6e4) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += 1e3 - $t(t, 1e3) - 1
    }
    return this._d.setTime(t), n.updateOffset(this, !0), this
  }, ln.format = function (e) {
    var t = I(this, e = e || (this.isUtc() ? n.defaultFormatUtc : n.defaultFormat));
    return this.localeData().postformat(t)
  }, ln.from = function (e, t) {
    return this.isValid() && (x(e) && e.isValid() || yt(e).isValid()) ? Pt({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, ln.fromNow = function (e) {
    return this.from(yt(), e)
  }, ln.to = function (e, t) {
    return this.isValid() && (x(e) && e.isValid() || yt(e).isValid()) ? Pt({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, ln.toNow = function (e) {
    return this.to(yt(), e)
  }, ln.get = function (e) {
    return S(this[e = F(e)]) ? this[e]() : this
  }, ln.invalidAt = function () {
    return f(this).overflow
  }, ln.isAfter = function (e, t) {
    var n = x(e) ? e : yt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
  }, ln.isBefore = function (e, t) {
    var n = x(e) ? e : yt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
  }, ln.isBetween = function (e, t, n, i) {
    var a = x(e) ? e : yt(e),
      r = x(t) ? t : yt(t);
    return !!(this.isValid() && a.isValid() && r.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
  }, ln.isSame = function (e, t) {
    var n, i = x(e) ? e : yt(e);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
  }, ln.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }, ln.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }, ln.isValid = function () {
    return p(this)
  }, ln.lang = qt, ln.locale = Vt, ln.localeData = Ut, ln.max = xt, ln.min = bt, ln.parsingFlags = function () {
    return d({}, f(this))
  }, ln.set = function (e, t) {
    if ("object" == typeof e)
      for (var n = function (e) {
          var t, n = [];
          for (t in e) r(e, t) && n.push({
            unit: t,
            priority: z[t]
          });
          return n.sort((function (e, t) {
            return e.priority - t.priority
          })), n
        }(e = R(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
    else if (S(this[e = F(e)])) return this[e](t);
    return this
  }, ln.startOf = function (e) {
    var t, i;
    if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid()) return this;
    switch (i = this._isUTC ? Zt : Gt, e) {
      case "year":
        t = i(this.year(), 0, 1);
        break;
      case "quarter":
        t = i(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        t = i(this.year(), this.month(), 1);
        break;
      case "week":
        t = i(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = i(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= $t(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
        break;
      case "minute":
        t = this._d.valueOf(), t -= $t(t, 6e4);
        break;
      case "second":
        t = this._d.valueOf(), t -= $t(t, 1e3)
    }
    return this._d.setTime(t), n.updateOffset(this, !0), this
  }, ln.subtract = Rt, ln.toArray = function () {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }, ln.toObject = function () {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    }
  }, ln.toDate = function () {
    return new Date(this.valueOf())
  }, ln.toISOString = function (e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
      n = t ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? I(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(n, "Z")) : I(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
  }, ln.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e, t, n, i = "moment",
      a = "";
    return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z"), e = "[" + i + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = a + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
  }, "undefined" != typeof Symbol && null != Symbol.for && (ln[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">"
  }), ln.toJSON = function () {
    return this.isValid() ? this.toISOString() : null
  }, ln.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }, ln.unix = function () {
    return Math.floor(this.valueOf() / 1e3)
  }, ln.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }, ln.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }, ln.eraName = function () {
    for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
      if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].name;
      if (t[n].until <= e && e <= t[n].since) return t[n].name
    }
    return ""
  }, ln.eraNarrow = function () {
    for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
      if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].narrow;
      if (t[n].until <= e && e <= t[n].since) return t[n].narrow
    }
    return ""
  }, ln.eraAbbr = function () {
    for (var e, t = this.localeData().eras(), n = 0, i = t.length; n < i; ++n) {
      if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].abbr;
      if (t[n].until <= e && e <= t[n].since) return t[n].abbr
    }
    return ""
  }, ln.eraYear = function () {
    for (var e, t, i = this.localeData().eras(), a = 0, r = i.length; a < r; ++a)
      if (e = i[a].since <= i[a].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), i[a].since <= t && t <= i[a].until || i[a].until <= t && t <= i[a].since) return (this.year() - n(i[a].since).year()) * e + i[a].offset;
    return this.year()
  }, ln.year = De, ln.isLeapYear = function () {
    return W(this.year())
  }, ln.weekYear = function (e) {
    return en.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }, ln.isoWeekYear = function (e) {
    return en.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }, ln.quarter = ln.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
  }, ln.month = Se, ln.daysInMonth = function () {
    return be(this.year(), this.month())
  }, ln.week = ln.weeks = function (e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d")
  }, ln.isoWeek = ln.isoWeeks = function (e) {
    var t = Ye(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d")
  }, ln.weeksInYear = function () {
    var e = this.localeData()._week;
    return Pe(this.year(), e.dow, e.doy)
  }, ln.weeksInWeekYear = function () {
    var e = this.localeData()._week;
    return Pe(this.weekYear(), e.dow, e.doy)
  }, ln.isoWeeksInYear = function () {
    return Pe(this.year(), 1, 4)
  }, ln.isoWeeksInISOWeekYear = function () {
    return Pe(this.isoWeekYear(), 1, 4)
  }, ln.date = tn, ln.day = ln.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i
  }, ln.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d")
  }, ln.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this.day() || 7;
    var t, n, i = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
    return this.day(this.day() % 7 ? i : i - 7)
  }, ln.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d")
  }, ln.hour = ln.hours = Xe, ln.minute = ln.minutes = nn, ln.second = ln.seconds = on, ln.millisecond = ln.milliseconds = rn, ln.utcOffset = function (e, t, i) {
    var a, r = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this._isUTC ? r : Ct(this);
    if ("string" == typeof e) {
      if (null === (e = Tt(ue, e))) return this
    } else Math.abs(e) < 16 && !i && (e *= 60);
    return !this._isUTC && t && (a = Ct(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ht(this, Pt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
  }, ln.utc = function (e) {
    return this.utcOffset(0, e)
  }, ln.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ct(this), "m")), this
  }, ln.parseZone = function () {
    var e;
    return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Tt(ce, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
  }, ln.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? yt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
  }, ln.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }, ln.isLocal = function () {
    return !!this.isValid() && !this._isUTC
  }, ln.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC
  }, ln.isUtc = Et, ln.isUTC = Et, ln.zoneAbbr = function () {
    return this._isUTC ? "UTC" : ""
  }, ln.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }, ln.dates = w("dates accessor is deprecated. Use date instead.", tn), ln.months = w("months accessor is deprecated. Use month instead", Se), ln.years = w("years accessor is deprecated. Use year instead", De), ln.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
  })), ln.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function () {
    if (!s(this._isDSTShifted)) return this._isDSTShifted;
    var e, t = {};
    return y(t, this), (t = gt(t))._a ? (e = (t._isUTC ? h : yt)(t._a), this._isDSTShifted = this.isValid() && 0 < function (e, t, n) {
      for (var i = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), r = 0, o = 0; o < i; o++) q(e[o]) !== q(t[o]) && r++;
      return r + a
    }(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
  }));
  var un = T.prototype;

  function dn(e, t, n, i) {
    var a = tt(),
      r = h().set(i, t);
    return a[n](r, e)
  }

  function hn(e, t, n) {
    if (l(e) && (t = e, e = void 0), e = e || "", null != t) return dn(e, t, n, "month");
    for (var i = [], a = 0; a < 12; a++) i[a] = dn(e, a, n, "month");
    return i
  }

  function fn(e, t, n, i) {
    "boolean" == typeof e ? l(t) && (n = t, t = void 0) : (t = e, e = !1, l(n = t) && (n = t, t = void 0)), t = t || "";
    var a, r = tt(),
      o = e ? r._week.dow : 0,
      s = [];
    if (null != n) return dn(t, (n + o) % 7, i, "day");
    for (a = 0; a < 7; a++) s[a] = dn(t, (a + o) % 7, i, "day");
    return s
  }
  un.calendar = function (e, t, n) {
    var i = this._calendar[e] || this._calendar.sameElse;
    return S(i) ? i.call(t, n) : i
  }, un.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(C).map((function (e) {
      return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
    })).join(""), this._longDateFormat[e])
  }, un.invalidDate = function () {
    return this._invalidDate
  }, un.ordinal = function (e) {
    return this._ordinal.replace("%d", e)
  }, un.preparse = cn, un.postformat = cn, un.relativeTime = function (e, t, n, i) {
    var a = this._relativeTime[n];
    return S(a) ? a(e, t, n, i) : a.replace(/%d/i, e)
  }, un.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];
    return S(n) ? n(t) : n.replace(/%s/i, t)
  }, un.set = function (e) {
    var t, n;
    for (n in e) r(e, n) && (S(t = e[n]) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }, un.eras = function (e, t) {
    for (var i, a = this._eras || tt("en")._eras, r = 0, o = a.length; r < o; ++r) {
      switch (typeof a[r].since) {
        case "string":
          i = n(a[r].since).startOf("day"), a[r].since = i.valueOf()
      }
      switch (typeof a[r].until) {
        case "undefined":
          a[r].until = 1 / 0;
          break;
        case "string":
          i = n(a[r].until).startOf("day").valueOf(), a[r].until = i.valueOf()
      }
    }
    return a
  }, un.erasParse = function (e, t, n) {
    var i, a, r, o, s, l = this.eras();
    for (e = e.toUpperCase(), i = 0, a = l.length; i < a; ++i)
      if (r = l[i].name.toUpperCase(), o = l[i].abbr.toUpperCase(), s = l[i].narrow.toUpperCase(), n) switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e) return l[i];
          break;
        case "NNNN":
          if (r === e) return l[i];
          break;
        case "NNNNN":
          if (s === e) return l[i]
      } else if (0 <= [r, o, s].indexOf(e)) return l[i]
  }, un.erasConvertYear = function (e, t) {
    var i = e.since <= e.until ? 1 : -1;
    return void 0 === t ? n(e.since).year() : n(e.since).year() + (t - e.offset) * i
  }, un.erasAbbrRegex = function (e) {
    return r(this, "_erasAbbrRegex") || Jt.call(this), e ? this._erasAbbrRegex : this._erasRegex
  }, un.erasNameRegex = function (e) {
    return r(this, "_erasNameRegex") || Jt.call(this), e ? this._erasNameRegex : this._erasRegex
  }, un.erasNarrowRegex = function (e) {
    return r(this, "_erasNarrowRegex") || Jt.call(this), e ? this._erasNarrowRegex : this._erasRegex
  }, un.months = function (e, t) {
    return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || we).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
  }, un.monthsShort = function (e, t) {
    return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[we.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }, un.monthsParse = function (e, t, n) {
    var i, a, r;
    if (this._monthsParseExact) return function (e, t, n) {
      var i, a, r, o = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = h([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
      return n ? "MMM" === t ? -1 !== (a = ye.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = ye.call(this._longMonthsParse, o)) ? a : null : "MMM" === t ? -1 !== (a = ye.call(this._shortMonthsParse, o)) || -1 !== (a = ye.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = ye.call(this._longMonthsParse, o)) || -1 !== (a = ye.call(this._shortMonthsParse, o)) ? a : null
    }.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
      if (a = h([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
      if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
      if (!n && this._monthsParse[i].test(e)) return i
    }
  }, un.monthsRegex = function (e) {
    return this._monthsParseExact ? (r(this, "_monthsRegex") || Ae.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (r(this, "_monthsRegex") || (this._monthsRegex = Me), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }, un.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (r(this, "_monthsRegex") || Ae.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (r(this, "_monthsShortRegex") || (this._monthsShortRegex = ke), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }, un.week = function (e) {
    return Ye(e, this._week.dow, this._week.doy).week
  }, un.firstDayOfYear = function () {
    return this._week.doy
  }, un.firstDayOfWeek = function () {
    return this._week.dow
  }, un.weekdays = function (e, t) {
    var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return !0 === e ? Ie(n, this._week.dow) : e ? n[e.day()] : n
  }, un.weekdaysMin = function (e) {
    return !0 === e ? Ie(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
  }, un.weekdaysShort = function (e) {
    return !0 === e ? Ie(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
  }, un.weekdaysParse = function (e, t, n) {
    var i, a, r;
    if (this._weekdaysParseExact) return function (e, t, n) {
      var i, a, r, o = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = h([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
      return n ? "dddd" === t ? -1 !== (a = ye.call(this._weekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = ye.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = ye.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === t ? -1 !== (a = ye.call(this._weekdaysParse, o)) || -1 !== (a = ye.call(this._shortWeekdaysParse, o)) || -1 !== (a = ye.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = ye.call(this._shortWeekdaysParse, o)) || -1 !== (a = ye.call(this._weekdaysParse, o)) || -1 !== (a = ye.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = ye.call(this._minWeekdaysParse, o)) || -1 !== (a = ye.call(this._weekdaysParse, o)) || -1 !== (a = ye.call(this._shortWeekdaysParse, o)) ? a : null
    }.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
      if (a = h([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
      if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
      if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
      if (!n && this._weekdaysParse[i].test(e)) return i
    }
  }, un.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (r(this, "_weekdaysRegex") || (this._weekdaysRegex = Fe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }, un.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (r(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Re), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }, un.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (r(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }, un.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0)
  }, un.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
  }, Qe("en", {
    eras: [{
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    }, {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 === q(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    }
  }), n.lang = w("moment.lang is deprecated. Use moment.locale instead.", Qe), n.langData = w("moment.langData is deprecated. Use moment.localeData instead.", tt);
  var pn = Math.abs;

  function mn(e, t, n, i) {
    var a = Pt(t, n);
    return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble()
  }

  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }

  function vn(e) {
    return 4800 * e / 146097
  }

  function yn(e) {
    return 146097 * e / 4800
  }

  function bn(e) {
    return function () {
      return this.as(e)
    }
  }
  var xn = bn("ms"),
    _n = bn("s"),
    wn = bn("m"),
    kn = bn("h"),
    Mn = bn("d"),
    Ln = bn("w"),
    Sn = bn("M"),
    An = bn("Q"),
    Tn = bn("y");

  function Dn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var Cn = Dn("milliseconds"),
    En = Dn("seconds"),
    On = Dn("minutes"),
    Yn = Dn("hours"),
    Pn = Dn("days"),
    In = Dn("months"),
    jn = Dn("years"),
    Nn = Math.round,
    Hn = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      w: null,
      M: 11
    };
  var Fn = Math.abs;

  function Rn(e) {
    return (0 < e) - (e < 0) || +e
  }

  function zn() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e, t, n, i, a, r, o, s, l = Fn(this._milliseconds) / 1e3,
      c = Fn(this._days),
      u = Fn(this._months),
      d = this.asSeconds();
    return d ? (e = V(l / 60), t = V(e / 60), l %= 60, e %= 60, n = V(u / 12), u %= 12, i = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", a = d < 0 ? "-" : "", r = Rn(this._months) !== Rn(d) ? "-" : "", o = Rn(this._days) !== Rn(d) ? "-" : "", s = Rn(this._milliseconds) !== Rn(d) ? "-" : "", a + "P" + (n ? r + n + "Y" : "") + (u ? r + u + "M" : "") + (c ? o + c + "D" : "") + (t || e || l ? "T" : "") + (t ? s + t + "H" : "") + (e ? s + e + "M" : "") + (l ? s + i + "S" : "")) : "P0D"
  }
  var Bn = kt.prototype;

  function Wn(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
  }

  function Vn(e) {
    return function (t, n, i, a) {
      var r = Wn(t),
        o = qn[e][Wn(t)];
      return 2 === r && (o = o[n ? 0 : 1]), o.replace(/%d/i, t)
    }
  }
  Bn.isValid = function () {
    return this._isValid
  }, Bn.abs = function () {
    var e = this._data;
    return this._milliseconds = pn(this._milliseconds), this._days = pn(this._days), this._months = pn(this._months), e.milliseconds = pn(e.milliseconds), e.seconds = pn(e.seconds), e.minutes = pn(e.minutes), e.hours = pn(e.hours), e.months = pn(e.months), e.years = pn(e.years), this
  }, Bn.add = function (e, t) {
    return mn(this, e, t, 1)
  }, Bn.subtract = function (e, t) {
    return mn(this, e, t, -1)
  }, Bn.as = function (e) {
    if (!this.isValid()) return NaN;
    var t, n, i = this._milliseconds;
    if ("month" === (e = F(e)) || "quarter" === e || "year" === e) switch (t = this._days + i / 864e5, n = this._months + vn(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12
    } else switch (t = this._days + Math.round(yn(this._months)), e) {
      case "week":
        return t / 7 + i / 6048e5;
      case "day":
        return t + i / 864e5;
      case "hour":
        return 24 * t + i / 36e5;
      case "minute":
        return 1440 * t + i / 6e4;
      case "second":
        return 86400 * t + i / 1e3;
      case "millisecond":
        return Math.floor(864e5 * t) + i;
      default:
        throw new Error("Unknown unit " + e)
    }
  }, Bn.asMilliseconds = xn, Bn.asSeconds = _n, Bn.asMinutes = wn, Bn.asHours = kn, Bn.asDays = Mn, Bn.asWeeks = Ln, Bn.asMonths = Sn, Bn.asQuarters = An, Bn.asYears = Tn, Bn.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12) : NaN
  }, Bn._bubble = function () {
    var e, t, n, i, a, r = this._milliseconds,
      o = this._days,
      s = this._months,
      l = this._data;
    return 0 <= r && 0 <= o && 0 <= s || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * gn(yn(s) + o), s = o = 0), l.milliseconds = r % 1e3, e = V(r / 1e3), l.seconds = e % 60, t = V(e / 60), l.minutes = t % 60, n = V(t / 60), l.hours = n % 24, o += V(n / 24), s += a = V(vn(o)), o -= gn(yn(a)), i = V(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this
  }, Bn.clone = function () {
    return Pt(this)
  }, Bn.get = function (e) {
    return e = F(e), this.isValid() ? this[e + "s"]() : NaN
  }, Bn.milliseconds = Cn, Bn.seconds = En, Bn.minutes = On, Bn.hours = Yn, Bn.days = Pn, Bn.weeks = function () {
    return V(this.days() / 7)
  }, Bn.months = In, Bn.years = jn, Bn.humanize = function (e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n, i, a = !1,
      r = Hn;
    return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (a = e), "object" == typeof t && (r = Object.assign({}, Hn, t), null != t.s && null == t.ss && (r.ss = t.s - 1)), i = function (e, t, n, i) {
      var a = Pt(e).abs(),
        r = Nn(a.as("s")),
        o = Nn(a.as("m")),
        s = Nn(a.as("h")),
        l = Nn(a.as("d")),
        c = Nn(a.as("M")),
        u = Nn(a.as("w")),
        d = Nn(a.as("y")),
        h = (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) || o <= 1 && ["m"] || o < n.m && ["mm", o] || s <= 1 && ["h"] || s < n.h && ["hh", s] || l <= 1 && ["d"] || l < n.d && ["dd", l];
      return null != n.w && (h = h || u <= 1 && ["w"] || u < n.w && ["ww", u]), (h = h || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d])[2] = t, h[3] = 0 < +e, h[4] = i,
        function (e, t, n, i, a) {
          return a.relativeTime(t || 1, !!n, e, i)
        }.apply(null, h)
    }(this, !a, r, n = this.localeData()), a && (i = n.pastFuture(+this, i)), n.postformat(i)
  }, Bn.toISOString = zn, Bn.toString = zn, Bn.toJSON = zn, Bn.locale = Vt, Bn.localeData = Ut, Bn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zn), Bn.lang = qt, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), he("x", le), he("X", /[+-]?\d+(\.\d{1,3})?/), ge("X", (function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e))
  })), ge("x", (function (e, t, n) {
    n._d = new Date(q(e))
  })), n.version = "2.29.1", e = yt, n.fn = ln, n.min = function () {
    return _t("isBefore", [].slice.call(arguments, 0))
  }, n.max = function () {
    return _t("isAfter", [].slice.call(arguments, 0))
  }, n.now = function () {
    return Date.now ? Date.now() : +new Date
  }, n.utc = h, n.unix = function (e) {
    return yt(1e3 * e)
  }, n.months = function (e, t) {
    return hn(e, t, "months")
  }, n.isDate = c, n.locale = Qe, n.invalid = m, n.duration = Pt, n.isMoment = x, n.weekdays = function (e, t, n) {
    return fn(e, t, n, "weekdays")
  }, n.parseZone = function () {
    return yt.apply(null, arguments).parseZone()
  }, n.localeData = tt, n.isDuration = Mt, n.monthsShort = function (e, t) {
    return hn(e, t, "monthsShort")
  }, n.weekdaysMin = function (e, t, n) {
    return fn(e, t, n, "weekdaysMin")
  }, n.defineLocale = et, n.updateLocale = function (e, t) {
    var n, i, a;
    return null != t ? (a = $e, null != Ge[e] && null != Ge[e].parentLocale ? Ge[e].set(A(Ge[e]._config, t)) : (null != (i = Je(e)) && (a = i._config), t = A(a, t), null == i && (t.abbr = e), (n = new T(t)).parentLocale = Ge[e], Ge[e] = n), Qe(e)) : null != Ge[e] && (null != Ge[e].parentLocale ? (Ge[e] = Ge[e].parentLocale, e === Qe() && Qe(e)) : null != Ge[e] && delete Ge[e]), Ge[e]
  }, n.locales = function () {
    return k(Ge)
  }, n.weekdaysShort = function (e, t, n) {
    return fn(e, t, n, "weekdaysShort")
  }, n.normalizeUnits = F, n.relativeTimeRounding = function (e) {
    return void 0 === e ? Nn : "function" == typeof e && (Nn = e, !0)
  }, n.relativeTimeThreshold = function (e, t) {
    return void 0 !== Hn[e] && (void 0 === t ? Hn[e] : (Hn[e] = t, "s" === e && (Hn.ss = t - 1), !0))
  }, n.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
  }, n.prototype = ln, n.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  }, n.defineLocale("af", {
    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
    monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
    meridiemParse: /vm|nm/i,
    isPM: function (e) {
      return /^nm$/i.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Vandag om] LT",
      nextDay: "[Môre om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[Gister om] LT",
      lastWeek: "[Laas] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "oor %s",
      past: "%s gelede",
      s: "'n paar sekondes",
      ss: "%d sekondes",
      m: "'n minuut",
      mm: "%d minute",
      h: "'n uur",
      hh: "%d ure",
      d: "'n dag",
      dd: "%d dae",
      M: "'n maand",
      MM: "%d maande",
      y: "'n jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var qn = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    },
    Un = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

  function Xn(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
  }

  function $n(e) {
    return function (t, n, i, a) {
      var r = Xn(t),
        o = Zn[e][Xn(t)];
      return 2 === r && (o = o[n ? 0 : 1]), o.replace(/%d/i, t)
    }
  }
  n.defineLocale("ar-dz", {
    months: Un,
    monthsShort: Un,
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/‏M/‏YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function (e) {
      return "م" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ص" : "م"
    },
    calendar: {
      sameDay: "[اليوم عند الساعة] LT",
      nextDay: "[غدًا عند الساعة] LT",
      nextWeek: "dddd [عند الساعة] LT",
      lastDay: "[أمس عند الساعة] LT",
      lastWeek: "dddd [عند الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "بعد %s",
      past: "منذ %s",
      s: Vn("s"),
      ss: Vn("s"),
      m: Vn("m"),
      mm: Vn("m"),
      h: Vn("h"),
      hh: Vn("h"),
      d: Vn("d"),
      dd: Vn("d"),
      M: Vn("M"),
      MM: Vn("M"),
      y: Vn("y"),
      yy: Vn("y")
    },
    postformat: function (e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 0,
      doy: 4
    }
  }), n.defineLocale("ar-kw", {
    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[اليوم على الساعة] LT",
      nextDay: "[غدا على الساعة] LT",
      nextWeek: "dddd [على الساعة] LT",
      lastDay: "[أمس على الساعة] LT",
      lastWeek: "dddd [على الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "في %s",
      past: "منذ %s",
      s: "ثوان",
      ss: "%d ثانية",
      m: "دقيقة",
      mm: "%d دقائق",
      h: "ساعة",
      hh: "%d ساعات",
      d: "يوم",
      dd: "%d أيام",
      M: "شهر",
      MM: "%d أشهر",
      y: "سنة",
      yy: "%d سنوات"
    },
    week: {
      dow: 0,
      doy: 12
    }
  });
  var Gn = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      0: "0"
    },
    Zn = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    },
    Kn = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  n.defineLocale("ar-ly", {
    months: Kn,
    monthsShort: Kn,
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/‏M/‏YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function (e) {
      return "م" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ص" : "م"
    },
    calendar: {
      sameDay: "[اليوم عند الساعة] LT",
      nextDay: "[غدًا عند الساعة] LT",
      nextWeek: "dddd [عند الساعة] LT",
      lastDay: "[أمس عند الساعة] LT",
      lastWeek: "dddd [عند الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "بعد %s",
      past: "منذ %s",
      s: $n("s"),
      ss: $n("s"),
      m: $n("m"),
      mm: $n("m"),
      h: $n("h"),
      hh: $n("h"),
      d: $n("d"),
      dd: $n("d"),
      M: $n("M"),
      MM: $n("M"),
      y: $n("y"),
      yy: $n("y")
    },
    preparse: function (e) {
      return e.replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Gn[e]
      })).replace(/,/g, "،")
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), n.defineLocale("ar-ma", {
    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[اليوم على الساعة] LT",
      nextDay: "[غدا على الساعة] LT",
      nextWeek: "dddd [على الساعة] LT",
      lastDay: "[أمس على الساعة] LT",
      lastWeek: "dddd [على الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "في %s",
      past: "منذ %s",
      s: "ثوان",
      ss: "%d ثانية",
      m: "دقيقة",
      mm: "%d دقائق",
      h: "ساعة",
      hh: "%d ساعات",
      d: "يوم",
      dd: "%d أيام",
      M: "شهر",
      MM: "%d أشهر",
      y: "سنة",
      yy: "%d سنوات"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Jn = {
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
      0: "٠"
    },
    Qn = {
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "٠": "0"
    };

  function ei(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
  }

  function ti(e) {
    return function (t, n, i, a) {
      var r = ei(t),
        o = ai[e][ei(t)];
      return 2 === r && (o = o[n ? 0 : 1]), o.replace(/%d/i, t)
    }
  }
  n.defineLocale("ar-sa", {
    months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
    monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function (e) {
      return "م" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ص" : "م"
    },
    calendar: {
      sameDay: "[اليوم على الساعة] LT",
      nextDay: "[غدا على الساعة] LT",
      nextWeek: "dddd [على الساعة] LT",
      lastDay: "[أمس على الساعة] LT",
      lastWeek: "dddd [على الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "في %s",
      past: "منذ %s",
      s: "ثوان",
      ss: "%d ثانية",
      m: "دقيقة",
      mm: "%d دقائق",
      h: "ساعة",
      hh: "%d ساعات",
      d: "يوم",
      dd: "%d أيام",
      M: "شهر",
      MM: "%d أشهر",
      y: "سنة",
      yy: "%d سنوات"
    },
    preparse: function (e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, (function (e) {
        return Qn[e]
      })).replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Jn[e]
      })).replace(/,/g, "،")
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("ar-tn", {
    months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
    monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[اليوم على الساعة] LT",
      nextDay: "[غدا على الساعة] LT",
      nextWeek: "dddd [على الساعة] LT",
      lastDay: "[أمس على الساعة] LT",
      lastWeek: "dddd [على الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "في %s",
      past: "منذ %s",
      s: "ثوان",
      ss: "%d ثانية",
      m: "دقيقة",
      mm: "%d دقائق",
      h: "ساعة",
      hh: "%d ساعات",
      d: "يوم",
      dd: "%d أيام",
      M: "شهر",
      MM: "%d أشهر",
      y: "سنة",
      yy: "%d سنوات"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var ni = {
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
      0: "٠"
    },
    ii = {
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "٠": "0"
    },
    ai = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    },
    ri = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  n.defineLocale("ar", {
    months: ri,
    monthsShort: ri,
    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/‏M/‏YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635|\u0645/,
    isPM: function (e) {
      return "م" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ص" : "م"
    },
    calendar: {
      sameDay: "[اليوم عند الساعة] LT",
      nextDay: "[غدًا عند الساعة] LT",
      nextWeek: "dddd [عند الساعة] LT",
      lastDay: "[أمس عند الساعة] LT",
      lastWeek: "dddd [عند الساعة] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "بعد %s",
      past: "منذ %s",
      s: ti("s"),
      ss: ti("s"),
      m: ti("m"),
      mm: ti("m"),
      h: ti("h"),
      hh: ti("h"),
      d: ti("d"),
      dd: ti("d"),
      M: ti("M"),
      MM: ti("M"),
      y: ti("y"),
      yy: ti("y")
    },
    preparse: function (e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, (function (e) {
        return ii[e]
      })).replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return ni[e]
      })).replace(/,/g, "،")
    },
    week: {
      dow: 6,
      doy: 12
    }
  });
  var oi = {
    1: "-inci",
    5: "-inci",
    8: "-inci",
    70: "-inci",
    80: "-inci",
    2: "-nci",
    7: "-nci",
    20: "-nci",
    50: "-nci",
    3: "-üncü",
    4: "-üncü",
    100: "-üncü",
    6: "-ncı",
    9: "-uncu",
    10: "-uncu",
    30: "-uncu",
    60: "-ıncı",
    90: "-ıncı"
  };

  function si(e, t, n) {
    var i, a;
    return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (i = +e, a = {
      ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
      mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
      hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
      dd: "дзень_дні_дзён",
      MM: "месяц_месяцы_месяцаў",
      yy: "год_гады_гадоў"
    } [n].split("_"), i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
  }
  n.defineLocale("az", {
    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
    weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
    weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
    weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[bugün saat] LT",
      nextDay: "[sabah saat] LT",
      nextWeek: "[gələn həftə] dddd [saat] LT",
      lastDay: "[dünən] LT",
      lastWeek: "[keçən həftə] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s sonra",
      past: "%s əvvəl",
      s: "bir neçə saniyə",
      ss: "%d saniyə",
      m: "bir dəqiqə",
      mm: "%d dəqiqə",
      h: "bir saat",
      hh: "%d saat",
      d: "bir gün",
      dd: "%d gün",
      M: "bir ay",
      MM: "%d ay",
      y: "bir il",
      yy: "%d il"
    },
    meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
    isPM: function (e) {
      return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
    ordinal: function (e) {
      if (0 === e) return e + "-ıncı";
      var t = e % 10;
      return e + (oi[t] || oi[e % 100 - t] || oi[100 <= e ? 100 : null])
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("be", {
    months: {
      format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
      standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
    },
    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
    weekdays: {
      format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
      standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
      isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
    },
    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY г.",
      LLL: "D MMMM YYYY г., HH:mm",
      LLLL: "dddd, D MMMM YYYY г., HH:mm"
    },
    calendar: {
      sameDay: "[Сёння ў] LT",
      nextDay: "[Заўтра ў] LT",
      lastDay: "[Учора ў] LT",
      nextWeek: function () {
        return "[У] dddd [ў] LT"
      },
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return "[У мінулую] dddd [ў] LT";
          case 1:
          case 2:
          case 4:
            return "[У мінулы] dddd [ў] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "праз %s",
      past: "%s таму",
      s: "некалькі секунд",
      m: si,
      mm: si,
      h: si,
      hh: si,
      d: "дзень",
      dd: si,
      M: "месяц",
      MM: si,
      y: "год",
      yy: si
    },
    meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
    isPM: function (e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
    ordinal: function (e, t) {
      switch (t) {
        case "M":
        case "d":
        case "DDD":
        case "w":
        case "W":
          return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
        case "D":
          return e + "-га";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("bg", {
    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
    monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[Днес в] LT",
      nextDay: "[Утре в] LT",
      nextWeek: "dddd [в] LT",
      lastDay: "[Вчера в] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return "[Миналата] dddd [в] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[Миналия] dddd [в] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "след %s",
      past: "преди %s",
      s: "няколко секунди",
      ss: "%d секунди",
      m: "минута",
      mm: "%d минути",
      h: "час",
      hh: "%d часа",
      d: "ден",
      dd: "%d дена",
      w: "седмица",
      ww: "%d седмици",
      M: "месец",
      MM: "%d месеца",
      y: "година",
      yy: "%d години"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
    ordinal: function (e) {
      var t = e % 10,
        n = e % 100;
      return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("bm", {
    months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
    monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
    weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
    weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
    weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "MMMM [tile] D [san] YYYY",
      LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
      LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
    },
    calendar: {
      sameDay: "[Bi lɛrɛ] LT",
      nextDay: "[Sini lɛrɛ] LT",
      nextWeek: "dddd [don lɛrɛ] LT",
      lastDay: "[Kunu lɛrɛ] LT",
      lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s kɔnɔ",
      past: "a bɛ %s bɔ",
      s: "sanga dama dama",
      ss: "sekondi %d",
      m: "miniti kelen",
      mm: "miniti %d",
      h: "lɛrɛ kelen",
      hh: "lɛrɛ %d",
      d: "tile kelen",
      dd: "tile %d",
      M: "kalo kelen",
      MM: "kalo %d",
      y: "san kelen",
      yy: "san %d"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var li = {
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
      0: "০"
    },
    ci = {
      "১": "1",
      "২": "2",
      "৩": "3",
      "৪": "4",
      "৫": "5",
      "৬": "6",
      "৭": "7",
      "৮": "8",
      "৯": "9",
      "০": "0"
    };
  n.defineLocale("bn-bd", {
    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
    longDateFormat: {
      LT: "A h:mm সময়",
      LTS: "A h:mm:ss সময়",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm সময়",
      LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
    },
    calendar: {
      sameDay: "[আজ] LT",
      nextDay: "[আগামীকাল] LT",
      nextWeek: "dddd, LT",
      lastDay: "[গতকাল] LT",
      lastWeek: "[গত] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s পরে",
      past: "%s আগে",
      s: "কয়েক সেকেন্ড",
      ss: "%d সেকেন্ড",
      m: "এক মিনিট",
      mm: "%d মিনিট",
      h: "এক ঘন্টা",
      hh: "%d ঘন্টা",
      d: "এক দিন",
      dd: "%d দিন",
      M: "এক মাস",
      MM: "%d মাস",
      y: "এক বছর",
      yy: "%d বছর"
    },
    preparse: function (e) {
      return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, (function (e) {
        return ci[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return li[e]
      }))
    },
    meridiemParse: /\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "রাত" === t ? e < 4 ? e : e + 12 : "ভোর" === t || "সকাল" === t ? e : "দুপুর" === t ? 3 <= e ? e : e + 12 : "বিকাল" === t || "সন্ধ্যা" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var ui = {
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
      0: "০"
    },
    di = {
      "১": "1",
      "২": "2",
      "৩": "3",
      "৪": "4",
      "৫": "5",
      "৬": "6",
      "৭": "7",
      "৮": "8",
      "৯": "9",
      "০": "0"
    };
  n.defineLocale("bn", {
    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
    longDateFormat: {
      LT: "A h:mm সময়",
      LTS: "A h:mm:ss সময়",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm সময়",
      LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
    },
    calendar: {
      sameDay: "[আজ] LT",
      nextDay: "[আগামীকাল] LT",
      nextWeek: "dddd, LT",
      lastDay: "[গতকাল] LT",
      lastWeek: "[গত] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s পরে",
      past: "%s আগে",
      s: "কয়েক সেকেন্ড",
      ss: "%d সেকেন্ড",
      m: "এক মিনিট",
      mm: "%d মিনিট",
      h: "এক ঘন্টা",
      hh: "%d ঘন্টা",
      d: "এক দিন",
      dd: "%d দিন",
      M: "এক মাস",
      MM: "%d মাস",
      y: "এক বছর",
      yy: "%d বছর"
    },
    preparse: function (e) {
      return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, (function (e) {
        return di[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return ui[e]
      }))
    },
    meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "রাত" === t && 4 <= e || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var hi = {
      1: "༡",
      2: "༢",
      3: "༣",
      4: "༤",
      5: "༥",
      6: "༦",
      7: "༧",
      8: "༨",
      9: "༩",
      0: "༠"
    },
    fi = {
      "༡": "1",
      "༢": "2",
      "༣": "3",
      "༤": "4",
      "༥": "5",
      "༦": "6",
      "༧": "7",
      "༨": "8",
      "༩": "9",
      "༠": "0"
    };

  function pi(e, t, n) {
    var i;
    return e + " " + (i = {
      mm: "munutenn",
      MM: "miz",
      dd: "devezh"
    } [n], 2 !== e ? i : function (e) {
      var t = {
        m: "v",
        b: "v",
        d: "z"
      };
      return void 0 !== t[e.charAt(0)] ? t[e.charAt(0)] + e.substring(1) : e
    }(i))
  }
  n.defineLocale("bo", {
    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
    monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
    monthsShortRegex: /^(\u0f5f\u0fb3\u0f0b\d{1,2})/,
    monthsParseExact: !0,
    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
    weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[དི་རིང] LT",
      nextDay: "[སང་ཉིན] LT",
      nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
      lastDay: "[ཁ་སང] LT",
      lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ལ་",
      past: "%s སྔན་ལ",
      s: "ལམ་སང",
      ss: "%d སྐར་ཆ།",
      m: "སྐར་མ་གཅིག",
      mm: "%d སྐར་མ",
      h: "ཆུ་ཚོད་གཅིག",
      hh: "%d ཆུ་ཚོད",
      d: "ཉིན་གཅིག",
      dd: "%d ཉིན་",
      M: "ཟླ་བ་གཅིག",
      MM: "%d ཟླ་བ",
      y: "ལོ་གཅིག",
      yy: "%d ལོ"
    },
    preparse: function (e) {
      return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, (function (e) {
        return fi[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return hi[e]
      }))
    },
    meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "མཚན་མོ" === t && 4 <= e || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var mi = [/^gen/i, /^c[\u02bc\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
    gi = /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
    vi = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];

  function yi(e, t, n) {
    var i = e + " ";
    switch (n) {
      case "ss":
        return i + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
      case "m":
        return t ? "jedna minuta" : "jedne minute";
      case "mm":
        return i + (1 === e || 2 !== e && 3 !== e && 4 !== e ? "minuta" : "minute");
      case "h":
        return t ? "jedan sat" : "jednog sata";
      case "hh":
        return i + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
      case "dd":
        return i + (1 === e ? "dan" : "dana");
      case "MM":
        return i + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
      case "yy":
        return i + (1 === e || 2 !== e && 3 !== e && 4 !== e ? "godina" : "godine")
    }
  }
  n.defineLocale("br", {
    months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
    monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
    weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
    weekdaysParse: vi,
    fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[\u02bc\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
    shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
    minWeekdaysParse: vi,
    monthsRegex: gi,
    monthsShortRegex: gi,
    monthsStrictRegex: /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
    monthsShortStrictRegex: /^(gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
    monthsParse: mi,
    longMonthsParse: mi,
    shortMonthsParse: mi,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [a viz] MMMM YYYY",
      LLL: "D [a viz] MMMM YYYY HH:mm",
      LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Hiziv da] LT",
      nextDay: "[Warcʼhoazh da] LT",
      nextWeek: "dddd [da] LT",
      lastDay: "[Decʼh da] LT",
      lastWeek: "dddd [paset da] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "a-benn %s",
      past: "%s ʼzo",
      s: "un nebeud segondennoù",
      ss: "%d eilenn",
      m: "ur vunutenn",
      mm: pi,
      h: "un eur",
      hh: "%d eur",
      d: "un devezh",
      dd: pi,
      M: "ur miz",
      MM: pi,
      y: "ur bloaz",
      yy: function (e) {
        switch (function e(t) {
          return 9 < t ? e(t % 10) : t
        }(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + " bloaz";
          default:
            return e + " vloaz"
        }
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
    ordinal: function (e) {
      return e + (1 === e ? "añ" : "vet")
    },
    week: {
      dow: 1,
      doy: 4
    },
    meridiemParse: /a.m.|g.m./,
    isPM: function (e) {
      return "g.m." === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "a.m." : "g.m."
    }
  }), n.defineLocale("bs", {
    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";
          case 3:
            return "[u] [srijedu] [u] LT";
          case 6:
            return "[u] [subotu] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT"
        }
      },
      lastDay: "[jučer u] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
            return "[prošlu] dddd [u] LT";
          case 6:
            return "[prošle] [subote] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[prošli] dddd [u] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "par sekundi",
      ss: yi,
      m: yi,
      mm: yi,
      h: yi,
      hh: yi,
      d: "dan",
      dd: yi,
      M: "mjesec",
      MM: yi,
      y: "godinu",
      yy: yi
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("ca", {
    months: {
      standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
      format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
    monthsParseExact: !0,
    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
    weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM [de] YYYY",
      ll: "D MMM YYYY",
      LLL: "D MMMM [de] YYYY [a les] H:mm",
      lll: "D MMM YYYY, H:mm",
      LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
      llll: "ddd D MMM YYYY, H:mm"
    },
    calendar: {
      sameDay: function () {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
      },
      nextDay: function () {
        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
      },
      nextWeek: function () {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
      },
      lastDay: function () {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
      },
      lastWeek: function () {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "d'aquí %s",
      past: "fa %s",
      s: "uns segons",
      ss: "%d segons",
      m: "un minut",
      mm: "%d minuts",
      h: "una hora",
      hh: "%d hores",
      d: "un dia",
      dd: "%d dies",
      M: "un mes",
      MM: "%d mesos",
      y: "un any",
      yy: "%d anys"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
    ordinal: function (e, t) {
      return e + ("w" !== t && "W" !== t ? 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è" : "a")
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var bi = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
    xi = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
    _i = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
    wi = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;

  function ki(e) {
    return 1 < e && e < 5 && 1 != ~~(e / 10)
  }

  function Mi(e, t, n, i) {
    var a = e + " ";
    switch (n) {
      case "s":
        return t || i ? "pár sekund" : "pár sekundami";
      case "ss":
        return t || i ? a + (ki(e) ? "sekundy" : "sekund") : a + "sekundami";
      case "m":
        return t ? "minuta" : i ? "minutu" : "minutou";
      case "mm":
        return t || i ? a + (ki(e) ? "minuty" : "minut") : a + "minutami";
      case "h":
        return t ? "hodina" : i ? "hodinu" : "hodinou";
      case "hh":
        return t || i ? a + (ki(e) ? "hodiny" : "hodin") : a + "hodinami";
      case "d":
        return t || i ? "den" : "dnem";
      case "dd":
        return t || i ? a + (ki(e) ? "dny" : "dní") : a + "dny";
      case "M":
        return t || i ? "měsíc" : "měsícem";
      case "MM":
        return t || i ? a + (ki(e) ? "měsíce" : "měsíců") : a + "měsíci";
      case "y":
        return t || i ? "rok" : "rokem";
      case "yy":
        return t || i ? a + (ki(e) ? "roky" : "let") : a + "lety"
    }
  }

  function Li(e, t, n, i) {
    var a = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      w: ["eine Woche", "einer Woche"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return t ? a[n][0] : a[n][1]
  }

  function Si(e, t, n, i) {
    var a = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      w: ["eine Woche", "einer Woche"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return t ? a[n][0] : a[n][1]
  }

  function Ai(e, t, n, i) {
    var a = {
      m: ["eine Minute", "einer Minute"],
      h: ["eine Stunde", "einer Stunde"],
      d: ["ein Tag", "einem Tag"],
      dd: [e + " Tage", e + " Tagen"],
      w: ["eine Woche", "einer Woche"],
      M: ["ein Monat", "einem Monat"],
      MM: [e + " Monate", e + " Monaten"],
      y: ["ein Jahr", "einem Jahr"],
      yy: [e + " Jahre", e + " Jahren"]
    };
    return t ? a[n][0] : a[n][1]
  }
  n.defineLocale("cs", {
    months: bi,
    monthsShort: xi,
    monthsRegex: wi,
    monthsShortRegex: wi,
    monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
    monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
    monthsParse: _i,
    longMonthsParse: _i,
    shortMonthsParse: _i,
    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm",
      l: "D. M. YYYY"
    },
    calendar: {
      sameDay: "[dnes v] LT",
      nextDay: "[zítra v] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[v neděli v] LT";
          case 1:
          case 2:
            return "[v] dddd [v] LT";
          case 3:
            return "[ve středu v] LT";
          case 4:
            return "[ve čtvrtek v] LT";
          case 5:
            return "[v pátek v] LT";
          case 6:
            return "[v sobotu v] LT"
        }
      },
      lastDay: "[včera v] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[minulou neděli v] LT";
          case 1:
          case 2:
            return "[minulé] dddd [v] LT";
          case 3:
            return "[minulou středu v] LT";
          case 4:
          case 5:
            return "[minulý] dddd [v] LT";
          case 6:
            return "[minulou sobotu v] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "před %s",
      s: Mi,
      ss: Mi,
      m: Mi,
      mm: Mi,
      h: Mi,
      hh: Mi,
      d: Mi,
      dd: Mi,
      M: Mi,
      MM: Mi,
      y: Mi,
      yy: Mi
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("cv", {
    months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
    monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
    weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
    weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
    weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
      LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
      LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
    },
    calendar: {
      sameDay: "[Паян] LT [сехетре]",
      nextDay: "[Ыран] LT [сехетре]",
      lastDay: "[Ӗнер] LT [сехетре]",
      nextWeek: "[Ҫитес] dddd LT [сехетре]",
      lastWeek: "[Иртнӗ] dddd LT [сехетре]",
      sameElse: "L"
    },
    relativeTime: {
      future: function (e) {
        return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "рен" : /\u04ab\u0443\u043b$/i.exec(e) ? "тан" : "ран")
      },
      past: "%s каялла",
      s: "пӗр-ик ҫеккунт",
      ss: "%d ҫеккунт",
      m: "пӗр минут",
      mm: "%d минут",
      h: "пӗр сехет",
      hh: "%d сехет",
      d: "пӗр кун",
      dd: "%d кун",
      M: "пӗр уйӑх",
      MM: "%d уйӑх",
      y: "пӗр ҫул",
      yy: "%d ҫул"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
    ordinal: "%d-мӗш",
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("cy", {
    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Heddiw am] LT",
      nextDay: "[Yfory am] LT",
      nextWeek: "dddd [am] LT",
      lastDay: "[Ddoe am] LT",
      lastWeek: "dddd [diwethaf am] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "mewn %s",
      past: "%s yn ôl",
      s: "ychydig eiliadau",
      ss: "%d eiliad",
      m: "munud",
      mm: "%d munud",
      h: "awr",
      hh: "%d awr",
      d: "diwrnod",
      dd: "%d diwrnod",
      M: "mis",
      MM: "%d mis",
      y: "blwyddyn",
      yy: "%d flynedd"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    ordinal: function (e) {
      var t = "";
      return 20 < e ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("da", {
    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[i dag kl.] LT",
      nextDay: "[i morgen kl.] LT",
      nextWeek: "på dddd [kl.] LT",
      lastDay: "[i går kl.] LT",
      lastWeek: "[i] dddd[s kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s siden",
      s: "få sekunder",
      ss: "%d sekunder",
      m: "et minut",
      mm: "%d minutter",
      h: "en time",
      hh: "%d timer",
      d: "en dag",
      dd: "%d dage",
      M: "en måned",
      MM: "%d måneder",
      y: "et år",
      yy: "%d år"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("de-at", {
    months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: Li,
      mm: "%d Minuten",
      h: Li,
      hh: "%d Stunden",
      d: Li,
      dd: Li,
      w: Li,
      ww: "%d Wochen",
      M: Li,
      MM: Li,
      y: Li,
      yy: Li
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("de-ch", {
    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: Si,
      mm: "%d Minuten",
      h: Si,
      hh: "%d Stunden",
      d: Si,
      dd: Si,
      w: Si,
      ww: "%d Wochen",
      M: Si,
      MM: Si,
      y: Si,
      yy: Si
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("de", {
    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[heute um] LT [Uhr]",
      sameElse: "L",
      nextDay: "[morgen um] LT [Uhr]",
      nextWeek: "dddd [um] LT [Uhr]",
      lastDay: "[gestern um] LT [Uhr]",
      lastWeek: "[letzten] dddd [um] LT [Uhr]"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: "ein paar Sekunden",
      ss: "%d Sekunden",
      m: Ai,
      mm: "%d Minuten",
      h: Ai,
      hh: "%d Stunden",
      d: Ai,
      dd: Ai,
      w: Ai,
      ww: "%d Wochen",
      M: Ai,
      MM: Ai,
      y: Ai,
      yy: Ai
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ti = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
    Di = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
  n.defineLocale("dv", {
    months: Ti,
    monthsShort: Ti,
    weekdays: Di,
    weekdaysShort: Di,
    weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "D/M/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0789\u0786|\u0789\u078a/,
    isPM: function (e) {
      return "މފ" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "މކ" : "މފ"
    },
    calendar: {
      sameDay: "[މިއަދު] LT",
      nextDay: "[މާދަމާ] LT",
      nextWeek: "dddd LT",
      lastDay: "[އިއްޔެ] LT",
      lastWeek: "[ފާއިތުވި] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ތެރޭގައި %s",
      past: "ކުރިން %s",
      s: "ސިކުންތުކޮޅެއް",
      ss: "d% ސިކުންތު",
      m: "މިނިޓެއް",
      mm: "މިނިޓު %d",
      h: "ގަޑިއިރެއް",
      hh: "ގަޑިއިރު %d",
      d: "ދުވަހެއް",
      dd: "ދުވަސް %d",
      M: "މަހެއް",
      MM: "މަސް %d",
      y: "އަހަރެއް",
      yy: "އަހަރު %d"
    },
    preparse: function (e) {
      return e.replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 7,
      doy: 12
    }
  }), n.defineLocale("el", {
    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
    months: function (e, t) {
      return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
    },
    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
    meridiem: function (e, t, n) {
      return 11 < e ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
    },
    isPM: function (e) {
      return "μ" === (e + "").toLowerCase()[0]
    },
    meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendarEl: {
      sameDay: "[Σήμερα {}] LT",
      nextDay: "[Αύριο {}] LT",
      nextWeek: "dddd [{}] LT",
      lastDay: "[Χθες {}] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 6:
            return "[το προηγούμενο] dddd [{}] LT";
          default:
            return "[την προηγούμενη] dddd [{}] LT"
        }
      },
      sameElse: "L"
    },
    calendar: function (e, t) {
      var n, i = this._calendarEl[e],
        a = t && t.hours();
      return n = i, ("undefined" != typeof Function && n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (i = i.apply(t)), i.replace("{}", a % 12 == 1 ? "στη" : "στις")
    },
    relativeTime: {
      future: "σε %s",
      past: "%s πριν",
      s: "λίγα δευτερόλεπτα",
      ss: "%d δευτερόλεπτα",
      m: "ένα λεπτό",
      mm: "%d λεπτά",
      h: "μία ώρα",
      hh: "%d ώρες",
      d: "μία μέρα",
      dd: "%d μέρες",
      M: "ένας μήνας",
      MM: "%d μήνες",
      y: "ένας χρόνος",
      yy: "%d χρόνια"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
    ordinal: "%dη",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("en-au", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 0,
      doy: 4
    }
  }), n.defineLocale("en-ca", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "YYYY-MM-DD",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    }
  }), n.defineLocale("en-gb", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("en-ie", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("en-il", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    }
  }), n.defineLocale("en-in", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("en-nz", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("en-sg", {
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("eo", {
    months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
    monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
    weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
    weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
    weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "[la] D[-an de] MMMM, YYYY",
      LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
      LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
      llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function (e) {
      return "p" === e.charAt(0).toLowerCase()
    },
    meridiem: function (e, t, n) {
      return 11 < e ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
    },
    calendar: {
      sameDay: "[Hodiaŭ je] LT",
      nextDay: "[Morgaŭ je] LT",
      nextWeek: "dddd[n je] LT",
      lastDay: "[Hieraŭ je] LT",
      lastWeek: "[pasintan] dddd[n je] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "post %s",
      past: "antaŭ %s",
      s: "kelkaj sekundoj",
      ss: "%d sekundoj",
      m: "unu minuto",
      mm: "%d minutoj",
      h: "unu horo",
      hh: "%d horoj",
      d: "unu tago",
      dd: "%d tagoj",
      M: "unu monato",
      MM: "%d monatoj",
      y: "unu jaro",
      yy: "%d jaroj"
    },
    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal: "%da",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Ci = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    Ei = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
    Oi = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    Yi = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  n.defineLocale("es-do", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? Ei[e.month()] : Ci[e.month()] : Ci
    },
    monthsRegex: Yi,
    monthsShortRegex: Yi,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: Oi,
    longMonthsParse: Oi,
    shortMonthsParse: Oi,
    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY h:mm A",
      LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
    },
    calendar: {
      sameDay: function () {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextDay: function () {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextWeek: function () {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastDay: function () {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastWeek: function () {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      w: "una semana",
      ww: "%d semanas",
      M: "un mes",
      MM: "%d meses",
      y: "un año",
      yy: "%d años"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Pi = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    Ii = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
    ji = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    Ni = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  n.defineLocale("es-mx", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? Ii[e.month()] : Pi[e.month()] : Pi
    },
    monthsRegex: Ni,
    monthsShortRegex: Ni,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: ji,
    longMonthsParse: ji,
    shortMonthsParse: ji,
    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
    },
    calendar: {
      sameDay: function () {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextDay: function () {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextWeek: function () {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastDay: function () {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastWeek: function () {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      w: "una semana",
      ww: "%d semanas",
      M: "un mes",
      MM: "%d meses",
      y: "un año",
      yy: "%d años"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 0,
      doy: 4
    },
    invalidDate: "Fecha inválida"
  });
  var Hi = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    Fi = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
    Ri = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    zi = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  n.defineLocale("es-us", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? Fi[e.month()] : Hi[e.month()] : Hi
    },
    monthsRegex: zi,
    monthsShortRegex: zi,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: Ri,
    longMonthsParse: Ri,
    shortMonthsParse: Ri,
    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY h:mm A",
      LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
    },
    calendar: {
      sameDay: function () {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextDay: function () {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextWeek: function () {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastDay: function () {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastWeek: function () {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      w: "una semana",
      ww: "%d semanas",
      M: "un mes",
      MM: "%d meses",
      y: "un año",
      yy: "%d años"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 0,
      doy: 6
    }
  });
  var Bi = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    Wi = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
    Vi = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    qi = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

  function Ui(e, t, n, i) {
    var a = {
      s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
      ss: [e + "sekundi", e + "sekundit"],
      m: ["ühe minuti", "üks minut"],
      mm: [e + " minuti", e + " minutit"],
      h: ["ühe tunni", "tund aega", "üks tund"],
      hh: [e + " tunni", e + " tundi"],
      d: ["ühe päeva", "üks päev"],
      M: ["kuu aja", "kuu aega", "üks kuu"],
      MM: [e + " kuu", e + " kuud"],
      y: ["ühe aasta", "aasta", "üks aasta"],
      yy: [e + " aasta", e + " aastat"]
    };
    return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
  }
  n.defineLocale("es", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? Wi[e.month()] : Bi[e.month()] : Bi
    },
    monthsRegex: qi,
    monthsShortRegex: qi,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: Vi,
    longMonthsParse: Vi,
    shortMonthsParse: Vi,
    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
    },
    calendar: {
      sameDay: function () {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextDay: function () {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextWeek: function () {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastDay: function () {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastWeek: function () {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      w: "una semana",
      ww: "%d semanas",
      M: "un mes",
      MM: "%d meses",
      y: "un año",
      yy: "%d años"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    },
    invalidDate: "Fecha inválida"
  }), n.defineLocale("et", {
    months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
    monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
    weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[Täna,] LT",
      nextDay: "[Homme,] LT",
      nextWeek: "[Järgmine] dddd LT",
      lastDay: "[Eile,] LT",
      lastWeek: "[Eelmine] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s pärast",
      past: "%s tagasi",
      s: Ui,
      ss: Ui,
      m: Ui,
      mm: Ui,
      h: Ui,
      hh: Ui,
      d: Ui,
      dd: "%d päeva",
      M: Ui,
      MM: Ui,
      y: Ui,
      yy: Ui
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("eu", {
    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
    monthsParseExact: !0,
    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY[ko] MMMM[ren] D[a]",
      LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
      LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
      l: "YYYY-M-D",
      ll: "YYYY[ko] MMM D[a]",
      lll: "YYYY[ko] MMM D[a] HH:mm",
      llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
    },
    calendar: {
      sameDay: "[gaur] LT[etan]",
      nextDay: "[bihar] LT[etan]",
      nextWeek: "dddd LT[etan]",
      lastDay: "[atzo] LT[etan]",
      lastWeek: "[aurreko] dddd LT[etan]",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s barru",
      past: "duela %s",
      s: "segundo batzuk",
      ss: "%d segundo",
      m: "minutu bat",
      mm: "%d minutu",
      h: "ordu bat",
      hh: "%d ordu",
      d: "egun bat",
      dd: "%d egun",
      M: "hilabete bat",
      MM: "%d hilabete",
      y: "urte bat",
      yy: "%d urte"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Xi = {
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
      0: "۰"
    },
    $i = {
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
      "۰": "0"
    };
  n.defineLocale("fa", {
    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
    isPM: function (e) {
      return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
    },
    calendar: {
      sameDay: "[امروز ساعت] LT",
      nextDay: "[فردا ساعت] LT",
      nextWeek: "dddd [ساعت] LT",
      lastDay: "[دیروز ساعت] LT",
      lastWeek: "dddd [پیش] [ساعت] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "در %s",
      past: "%s پیش",
      s: "چند ثانیه",
      ss: "%d ثانیه",
      m: "یک دقیقه",
      mm: "%d دقیقه",
      h: "یک ساعت",
      hh: "%d ساعت",
      d: "یک روز",
      dd: "%d روز",
      M: "یک ماه",
      MM: "%d ماه",
      y: "یک سال",
      yy: "%d سال"
    },
    preparse: function (e) {
      return e.replace(/[\u06f0-\u06f9]/g, (function (e) {
        return $i[e]
      })).replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Xi[e]
      })).replace(/,/g, "،")
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
    ordinal: "%dم",
    week: {
      dow: 6,
      doy: 12
    }
  });
  var Gi = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
    Zi = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Gi[7], Gi[8], Gi[9]];

  function Ki(e, t, n, i) {
    var a, r = "";
    switch (n) {
      case "s":
        return i ? "muutaman sekunnin" : "muutama sekunti";
      case "ss":
        r = i ? "sekunnin" : "sekuntia";
        break;
      case "m":
        return i ? "minuutin" : "minuutti";
      case "mm":
        r = i ? "minuutin" : "minuuttia";
        break;
      case "h":
        return i ? "tunnin" : "tunti";
      case "hh":
        r = i ? "tunnin" : "tuntia";
        break;
      case "d":
        return i ? "päivän" : "päivä";
      case "dd":
        r = i ? "päivän" : "päivää";
        break;
      case "M":
        return i ? "kuukauden" : "kuukausi";
      case "MM":
        r = i ? "kuukauden" : "kuukautta";
        break;
      case "y":
        return i ? "vuoden" : "vuosi";
      case "yy":
        r = i ? "vuoden" : "vuotta"
    }
    return ((a = e) < 10 ? i ? Zi[a] : Gi[a] : a) + " " + r
  }
  n.defineLocale("fi", {
    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD.MM.YYYY",
      LL: "Do MMMM[ta] YYYY",
      LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
      LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
      l: "D.M.YYYY",
      ll: "Do MMM YYYY",
      lll: "Do MMM YYYY, [klo] HH.mm",
      llll: "ddd, Do MMM YYYY, [klo] HH.mm"
    },
    calendar: {
      sameDay: "[tänään] [klo] LT",
      nextDay: "[huomenna] [klo] LT",
      nextWeek: "dddd [klo] LT",
      lastDay: "[eilen] [klo] LT",
      lastWeek: "[viime] dddd[na] [klo] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s päästä",
      past: "%s sitten",
      s: Ki,
      ss: Ki,
      m: Ki,
      mm: Ki,
      h: Ki,
      hh: Ki,
      d: Ki,
      dd: Ki,
      M: Ki,
      MM: Ki,
      y: Ki,
      yy: Ki
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("fil", {
    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "MM/D/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY HH:mm",
      LLLL: "dddd, MMMM DD, YYYY HH:mm"
    },
    calendar: {
      sameDay: "LT [ngayong araw]",
      nextDay: "[Bukas ng] LT",
      nextWeek: "LT [sa susunod na] dddd",
      lastDay: "LT [kahapon]",
      lastWeek: "LT [noong nakaraang] dddd",
      sameElse: "L"
    },
    relativeTime: {
      future: "sa loob ng %s",
      past: "%s ang nakalipas",
      s: "ilang segundo",
      ss: "%d segundo",
      m: "isang minuto",
      mm: "%d minuto",
      h: "isang oras",
      hh: "%d oras",
      d: "isang araw",
      dd: "%d araw",
      M: "isang buwan",
      MM: "%d buwan",
      y: "isang taon",
      yy: "%d taon"
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (e) {
      return e
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("fo", {
    months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
    weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
    weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D. MMMM, YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Í dag kl.] LT",
      nextDay: "[Í morgin kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[Í gjár kl.] LT",
      lastWeek: "[síðstu] dddd [kl] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "um %s",
      past: "%s síðani",
      s: "fá sekund",
      ss: "%d sekundir",
      m: "ein minuttur",
      mm: "%d minuttir",
      h: "ein tími",
      hh: "%d tímar",
      d: "ein dagur",
      dd: "%d dagar",
      M: "ein mánaður",
      MM: "%d mánaðir",
      y: "eitt ár",
      yy: "%d ár"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("fr-ca", {
    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd’hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (e, t) {
      switch (t) {
        default:
        case "M":
        case "Q":
        case "D":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");
        case "w":
        case "W":
          return e + (1 === e ? "re" : "e")
      }
    }
  }), n.defineLocale("fr-ch", {
    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd’hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (e, t) {
      switch (t) {
        default:
        case "M":
        case "Q":
        case "D":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");
        case "w":
        case "W":
          return e + (1 === e ? "re" : "e")
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ji = /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
    Qi = [/^janv/i, /^f\xe9vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^ao\xfbt/i, /^sept/i, /^oct/i, /^nov/i, /^d\xe9c/i];
  n.defineLocale("fr", {
    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    monthsRegex: Ji,
    monthsShortRegex: Ji,
    monthsStrictRegex: /^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
    monthsShortStrictRegex: /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,
    monthsParse: Qi,
    longMonthsParse: Qi,
    shortMonthsParse: Qi,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Aujourd’hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      ss: "%d secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      w: "une semaine",
      ww: "%d semaines",
      M: "un mois",
      MM: "%d mois",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function (e, t) {
      switch (t) {
        case "D":
          return e + (1 === e ? "er" : "");
        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
          return e + (1 === e ? "er" : "e");
        case "w":
        case "W":
          return e + (1 === e ? "re" : "e")
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var ea = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
    ta = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");

  function na(e, t, n, i) {
    var a = {
      s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
      ss: [e + " सॅकंडांनी", e + " सॅकंड"],
      m: ["एका मिणटान", "एक मिनूट"],
      mm: [e + " मिणटांनी", e + " मिणटां"],
      h: ["एका वरान", "एक वर"],
      hh: [e + " वरांनी", e + " वरां"],
      d: ["एका दिसान", "एक दीस"],
      dd: [e + " दिसांनी", e + " दीस"],
      M: ["एका म्हयन्यान", "एक म्हयनो"],
      MM: [e + " म्हयन्यानी", e + " म्हयने"],
      y: ["एका वर्सान", "एक वर्स"],
      yy: [e + " वर्सांनी", e + " वर्सां"]
    };
    return i ? a[n][0] : a[n][1]
  }

  function ia(e, t, n, i) {
    var a = {
      s: ["thoddea sekondamni", "thodde sekond"],
      ss: [e + " sekondamni", e + " sekond"],
      m: ["eka mintan", "ek minut"],
      mm: [e + " mintamni", e + " mintam"],
      h: ["eka voran", "ek vor"],
      hh: [e + " voramni", e + " voram"],
      d: ["eka disan", "ek dis"],
      dd: [e + " disamni", e + " dis"],
      M: ["eka mhoinean", "ek mhoino"],
      MM: [e + " mhoineamni", e + " mhoine"],
      y: ["eka vorsan", "ek voros"],
      yy: [e + " vorsamni", e + " vorsam"]
    };
    return i ? a[n][0] : a[n][1]
  }
  n.defineLocale("fy", {
    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? ta[e.month()] : ea[e.month()] : ea
    },
    monthsParseExact: !0,
    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[hjoed om] LT",
      nextDay: "[moarn om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[juster om] LT",
      lastWeek: "[ôfrûne] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "oer %s",
      past: "%s lyn",
      s: "in pear sekonden",
      ss: "%d sekonden",
      m: "ien minút",
      mm: "%d minuten",
      h: "ien oere",
      hh: "%d oeren",
      d: "ien dei",
      dd: "%d dagen",
      M: "ien moanne",
      MM: "%d moannen",
      y: "ien jier",
      yy: "%d jierren"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("ga", {
    months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
    monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
    monthsParseExact: !0,
    weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
    weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
    weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Inniu ag] LT",
      nextDay: "[Amárach ag] LT",
      nextWeek: "dddd [ag] LT",
      lastDay: "[Inné ag] LT",
      lastWeek: "dddd [seo caite] [ag] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "i %s",
      past: "%s ó shin",
      s: "cúpla soicind",
      ss: "%d soicind",
      m: "nóiméad",
      mm: "%d nóiméad",
      h: "uair an chloig",
      hh: "%d uair an chloig",
      d: "lá",
      dd: "%d lá",
      M: "mí",
      MM: "%d míonna",
      y: "bliain",
      yy: "%d bliain"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function (e) {
      return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("gd", {
    months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
    monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
    monthsParseExact: !0,
    weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
    weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
    weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[An-diugh aig] LT",
      nextDay: "[A-màireach aig] LT",
      nextWeek: "dddd [aig] LT",
      lastDay: "[An-dè aig] LT",
      lastWeek: "dddd [seo chaidh] [aig] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ann an %s",
      past: "bho chionn %s",
      s: "beagan diogan",
      ss: "%d diogan",
      m: "mionaid",
      mm: "%d mionaidean",
      h: "uair",
      hh: "%d uairean",
      d: "latha",
      dd: "%d latha",
      M: "mìos",
      MM: "%d mìosan",
      y: "bliadhna",
      yy: "%d bliadhna"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function (e) {
      return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("gl", {
    months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
    monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
    weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY H:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
    },
    calendar: {
      sameDay: function () {
        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
      },
      nextDay: function () {
        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
      },
      nextWeek: function () {
        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
      },
      lastDay: function () {
        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
      },
      lastWeek: function () {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: function (e) {
        return 0 === e.indexOf("un") ? "n" + e : "en " + e
      },
      past: "hai %s",
      s: "uns segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "unha hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      M: "un mes",
      MM: "%d meses",
      y: "un ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("gom-deva", {
    months: {
      standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
      format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
      isFormat: /MMMM(\s)+D[oD]?/
    },
    monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
    monthsParseExact: !0,
    weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
    weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
    weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "A h:mm [वाजतां]",
      LTS: "A h:mm:ss [वाजतां]",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY A h:mm [वाजतां]",
      LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
      llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
    },
    calendar: {
      sameDay: "[आयज] LT",
      nextDay: "[फाल्यां] LT",
      nextWeek: "[फुडलो] dddd[,] LT",
      lastDay: "[काल] LT",
      lastWeek: "[फाटलो] dddd[,] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s",
      past: "%s आदीं",
      s: na,
      ss: na,
      m: na,
      mm: na,
      h: na,
      hh: na,
      d: na,
      dd: na,
      M: na,
      MM: na,
      y: na,
      yy: na
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u0935\u0947\u0930)/,
    ordinal: function (e, t) {
      switch (t) {
        case "D":
          return e + "वेर";
        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
        case "w":
        case "W":
          return e
      }
    },
    week: {
      dow: 0,
      doy: 3
    },
    meridiemParse: /\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? 12 < e ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
    }
  }), n.defineLocale("gom-latn", {
    months: {
      standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
      format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
      isFormat: /MMMM(\s)+D[oD]?/
    },
    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "A h:mm [vazta]",
      LTS: "A h:mm:ss [vazta]",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY A h:mm [vazta]",
      LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
      llll: "ddd, D MMM YYYY, A h:mm [vazta]"
    },
    calendar: {
      sameDay: "[Aiz] LT",
      nextDay: "[Faleam] LT",
      nextWeek: "[Fuddlo] dddd[,] LT",
      lastDay: "[Kal] LT",
      lastWeek: "[Fattlo] dddd[,] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s",
      past: "%s adim",
      s: ia,
      ss: ia,
      m: ia,
      mm: ia,
      h: ia,
      hh: ia,
      d: ia,
      dd: ia,
      M: ia,
      MM: ia,
      y: ia,
      yy: ia
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function (e, t) {
      switch (t) {
        case "D":
          return e + "er";
        default:
        case "M":
        case "Q":
        case "DDD":
        case "d":
        case "w":
        case "W":
          return e
      }
    },
    week: {
      dow: 0,
      doy: 3
    },
    meridiemParse: /rati|sokallim|donparam|sanje/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? 12 < e ? e : e + 12 : "sanje" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
    }
  });
  var aa = {
      1: "૧",
      2: "૨",
      3: "૩",
      4: "૪",
      5: "૫",
      6: "૬",
      7: "૭",
      8: "૮",
      9: "૯",
      0: "૦"
    },
    ra = {
      "૧": "1",
      "૨": "2",
      "૩": "3",
      "૪": "4",
      "૫": "5",
      "૬": "6",
      "૭": "7",
      "૮": "8",
      "૯": "9",
      "૦": "0"
    };
  n.defineLocale("gu", {
    months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
    monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
    monthsParseExact: !0,
    weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
    weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
    weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
    longDateFormat: {
      LT: "A h:mm વાગ્યે",
      LTS: "A h:mm:ss વાગ્યે",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm વાગ્યે",
      LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
    },
    calendar: {
      sameDay: "[આજ] LT",
      nextDay: "[કાલે] LT",
      nextWeek: "dddd, LT",
      lastDay: "[ગઇકાલે] LT",
      lastWeek: "[પાછલા] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s મા",
      past: "%s પહેલા",
      s: "અમુક પળો",
      ss: "%d સેકંડ",
      m: "એક મિનિટ",
      mm: "%d મિનિટ",
      h: "એક કલાક",
      hh: "%d કલાક",
      d: "એક દિવસ",
      dd: "%d દિવસ",
      M: "એક મહિનો",
      MM: "%d મહિનો",
      y: "એક વર્ષ",
      yy: "%d વર્ષ"
    },
    preparse: function (e) {
      return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, (function (e) {
        return ra[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return aa[e]
      }))
    },
    meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? 10 <= e ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("he", {
    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
    monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
    weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [ב]MMMM YYYY",
      LLL: "D [ב]MMMM YYYY HH:mm",
      LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
      l: "D/M/YYYY",
      ll: "D MMM YYYY",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd, D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[היום ב־]LT",
      nextDay: "[מחר ב־]LT",
      nextWeek: "dddd [בשעה] LT",
      lastDay: "[אתמול ב־]LT",
      lastWeek: "[ביום] dddd [האחרון בשעה] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "בעוד %s",
      past: "לפני %s",
      s: "מספר שניות",
      ss: "%d שניות",
      m: "דקה",
      mm: "%d דקות",
      h: "שעה",
      hh: function (e) {
        return 2 === e ? "שעתיים" : e + " שעות"
      },
      d: "יום",
      dd: function (e) {
        return 2 === e ? "יומיים" : e + " ימים"
      },
      M: "חודש",
      MM: function (e) {
        return 2 === e ? "חודשיים" : e + " חודשים"
      },
      y: "שנה",
      yy: function (e) {
        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
      }
    },
    meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
    isPM: function (e) {
      return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
    }
  });
  var oa = {
      1: "१",
      2: "२",
      3: "३",
      4: "४",
      5: "५",
      6: "६",
      7: "७",
      8: "८",
      9: "९",
      0: "०"
    },
    sa = {
      "१": "1",
      "२": "2",
      "३": "3",
      "४": "4",
      "५": "5",
      "६": "6",
      "७": "7",
      "८": "8",
      "९": "9",
      "०": "0"
    },
    la = [/^\u091c\u0928/i, /^\u092b\u093c\u0930|\u092b\u0930/i, /^\u092e\u093e\u0930\u094d\u091a/i, /^\u0905\u092a\u094d\u0930\u0948/i, /^\u092e\u0908/i, /^\u091c\u0942\u0928/i, /^\u091c\u0941\u0932/i, /^\u0905\u0917/i, /^\u0938\u093f\u0924\u0902|\u0938\u093f\u0924/i, /^\u0905\u0915\u094d\u091f\u0942/i, /^\u0928\u0935|\u0928\u0935\u0902/i, /^\u0926\u093f\u0938\u0902|\u0926\u093f\u0938/i];

  function ca(e, t, n) {
    var i = e + " ";
    switch (n) {
      case "ss":
        return i + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
      case "m":
        return t ? "jedna minuta" : "jedne minute";
      case "mm":
        return i + (1 === e || 2 !== e && 3 !== e && 4 !== e ? "minuta" : "minute");
      case "h":
        return t ? "jedan sat" : "jednog sata";
      case "hh":
        return i + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
      case "dd":
        return i + (1 === e ? "dan" : "dana");
      case "MM":
        return i + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
      case "yy":
        return i + (1 === e || 2 !== e && 3 !== e && 4 !== e ? "godina" : "godine")
    }
  }
  n.defineLocale("hi", {
    months: {
      format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
      standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
    },
    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
    longDateFormat: {
      LT: "A h:mm बजे",
      LTS: "A h:mm:ss बजे",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm बजे",
      LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
    },
    monthsParse: la,
    longMonthsParse: la,
    shortMonthsParse: [/^\u091c\u0928/i, /^\u092b\u093c\u0930/i, /^\u092e\u093e\u0930\u094d\u091a/i, /^\u0905\u092a\u094d\u0930\u0948/i, /^\u092e\u0908/i, /^\u091c\u0942\u0928/i, /^\u091c\u0941\u0932/i, /^\u0905\u0917/i, /^\u0938\u093f\u0924/i, /^\u0905\u0915\u094d\u091f\u0942/i, /^\u0928\u0935/i, /^\u0926\u093f\u0938/i],
    monthsRegex: /^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,
    monthsShortRegex: /^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,
    monthsStrictRegex: /^(\u091c\u0928\u0935\u0930\u0940?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908?|\u0905\u0917\u0938\u094d\u0924?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924?\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930?)/i,
    monthsShortStrictRegex: /^(\u091c\u0928\.?|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\.?|\u0905\u0917\.?|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\.?|\u0926\u093f\u0938\.?)/i,
    calendar: {
      sameDay: "[आज] LT",
      nextDay: "[कल] LT",
      nextWeek: "dddd, LT",
      lastDay: "[कल] LT",
      lastWeek: "[पिछले] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s में",
      past: "%s पहले",
      s: "कुछ ही क्षण",
      ss: "%d सेकंड",
      m: "एक मिनट",
      mm: "%d मिनट",
      h: "एक घंटा",
      hh: "%d घंटे",
      d: "एक दिन",
      dd: "%d दिन",
      M: "एक महीने",
      MM: "%d महीने",
      y: "एक वर्ष",
      yy: "%d वर्ष"
    },
    preparse: function (e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, (function (e) {
        return sa[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return oa[e]
      }))
    },
    meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? 10 <= e ? e : e + 12 : "शाम" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("hr", {
    months: {
      format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
      standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
    },
    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "Do MMMM YYYY",
      LLL: "Do MMMM YYYY H:mm",
      LLLL: "dddd, Do MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";
          case 3:
            return "[u] [srijedu] [u] LT";
          case 6:
            return "[u] [subotu] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT"
        }
      },
      lastDay: "[jučer u] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[prošlu] [nedjelju] [u] LT";
          case 3:
            return "[prošlu] [srijedu] [u] LT";
          case 6:
            return "[prošle] [subote] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[prošli] dddd [u] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "par sekundi",
      ss: ca,
      m: ca,
      mm: ca,
      h: ca,
      hh: ca,
      d: "dan",
      dd: ca,
      M: "mjesec",
      MM: ca,
      y: "godinu",
      yy: ca
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var ua = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

  function da(e, t, n, i) {
    var a = e;
    switch (n) {
      case "s":
        return i || t ? "néhány másodperc" : "néhány másodperce";
      case "ss":
        return a + (i || t) ? " másodperc" : " másodperce";
      case "m":
        return "egy" + (i || t ? " perc" : " perce");
      case "mm":
        return a + (i || t ? " perc" : " perce");
      case "h":
        return "egy" + (i || t ? " óra" : " órája");
      case "hh":
        return a + (i || t ? " óra" : " órája");
      case "d":
        return "egy" + (i || t ? " nap" : " napja");
      case "dd":
        return a + (i || t ? " nap" : " napja");
      case "M":
        return "egy" + (i || t ? " hónap" : " hónapja");
      case "MM":
        return a + (i || t ? " hónap" : " hónapja");
      case "y":
        return "egy" + (i || t ? " év" : " éve");
      case "yy":
        return a + (i || t ? " év" : " éve")
    }
    return ""
  }

  function ha(e) {
    return (e ? "" : "[múlt] ") + "[" + ua[this.day()] + "] LT[-kor]"
  }

  function fa(e) {
    return e % 100 == 11 || e % 10 != 1
  }

  function pa(e, t, n, i) {
    var a = e + " ";
    switch (n) {
      case "s":
        return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
      case "ss":
        return fa(e) ? a + (t || i ? "sekúndur" : "sekúndum") : a + "sekúnda";
      case "m":
        return t ? "mínúta" : "mínútu";
      case "mm":
        return fa(e) ? a + (t || i ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
      case "hh":
        return fa(e) ? a + (t || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
      case "d":
        return t ? "dagur" : i ? "dag" : "degi";
      case "dd":
        return fa(e) ? t ? a + "dagar" : a + (i ? "daga" : "dögum") : t ? a + "dagur" : a + (i ? "dag" : "degi");
      case "M":
        return t ? "mánuður" : i ? "mánuð" : "mánuði";
      case "MM":
        return fa(e) ? t ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
      case "y":
        return t || i ? "ár" : "ári";
      case "yy":
        return fa(e) ? a + (t || i ? "ár" : "árum") : a + (t || i ? "ár" : "ári")
    }
  }
  n.defineLocale("hu", {
    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
    monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY. MMMM D.",
      LLL: "YYYY. MMMM D. H:mm",
      LLLL: "YYYY. MMMM D., dddd H:mm"
    },
    meridiemParse: /de|du/i,
    isPM: function (e) {
      return "u" === e.charAt(1).toLowerCase()
    },
    meridiem: function (e, t, n) {
      return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
    },
    calendar: {
      sameDay: "[ma] LT[-kor]",
      nextDay: "[holnap] LT[-kor]",
      nextWeek: function () {
        return ha.call(this, !0)
      },
      lastDay: "[tegnap] LT[-kor]",
      lastWeek: function () {
        return ha.call(this, !1)
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "%s múlva",
      past: "%s",
      s: da,
      ss: da,
      m: da,
      mm: da,
      h: da,
      hh: da,
      d: da,
      dd: da,
      M: da,
      MM: da,
      y: da,
      yy: da
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("hy-am", {
    months: {
      format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
      standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
    },
    monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
    weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY թ.",
      LLL: "D MMMM YYYY թ., HH:mm",
      LLLL: "dddd, D MMMM YYYY թ., HH:mm"
    },
    calendar: {
      sameDay: "[այսօր] LT",
      nextDay: "[վաղը] LT",
      lastDay: "[երեկ] LT",
      nextWeek: function () {
        return "dddd [օրը ժամը] LT"
      },
      lastWeek: function () {
        return "[անցած] dddd [օրը ժամը] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "%s հետո",
      past: "%s առաջ",
      s: "մի քանի վայրկյան",
      ss: "%d վայրկյան",
      m: "րոպե",
      mm: "%d րոպե",
      h: "ժամ",
      hh: "%d ժամ",
      d: "օր",
      dd: "%d օր",
      M: "ամիս",
      MM: "%d ամիս",
      y: "տարի",
      yy: "%d տարի"
    },
    meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
    isPM: function (e) {
      return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
    },
    meridiem: function (e) {
      return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
    ordinal: function (e, t) {
      switch (t) {
        case "DDD":
        case "w":
        case "W":
        case "DDDo":
          return 1 === e ? e + "-ին" : e + "-րդ";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("id", {
    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Besok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kemarin pukul] LT",
      lastWeek: "dddd [lalu pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lalu",
      s: "beberapa detik",
      ss: "%d detik",
      m: "semenit",
      mm: "%d menit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("is", {
    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] H:mm",
      LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
    },
    calendar: {
      sameDay: "[í dag kl.] LT",
      nextDay: "[á morgun kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[í gær kl.] LT",
      lastWeek: "[síðasta] dddd [kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "eftir %s",
      past: "fyrir %s síðan",
      s: pa,
      ss: pa,
      m: pa,
      mm: pa,
      h: "klukkustund",
      hh: pa,
      d: pa,
      dd: pa,
      M: pa,
      MM: pa,
      y: pa,
      yy: pa
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("it-ch", {
    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Oggi alle] LT",
      nextDay: "[Domani alle] LT",
      nextWeek: "dddd [alle] LT",
      lastDay: "[Ieri alle] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[la scorsa] dddd [alle] LT";
          default:
            return "[lo scorso] dddd [alle] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: function (e) {
        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
      },
      past: "%s fa",
      s: "alcuni secondi",
      ss: "%d secondi",
      m: "un minuto",
      mm: "%d minuti",
      h: "un'ora",
      hh: "%d ore",
      d: "un giorno",
      dd: "%d giorni",
      M: "un mese",
      MM: "%d mesi",
      y: "un anno",
      yy: "%d anni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("it", {
    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: function () {
        return "[Oggi a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
      },
      nextDay: function () {
        return "[Domani a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
      },
      nextWeek: function () {
        return "dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
      },
      lastDay: function () {
        return "[Ieri a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
      },
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[La scorsa] dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
          default:
            return "[Lo scorso] dddd [a" + (1 < this.hours() ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "tra %s",
      past: "%s fa",
      s: "alcuni secondi",
      ss: "%d secondi",
      m: "un minuto",
      mm: "%d minuti",
      h: "un'ora",
      hh: "%d ore",
      d: "un giorno",
      dd: "%d giorni",
      w: "una settimana",
      ww: "%d settimane",
      M: "un mese",
      MM: "%d mesi",
      y: "un anno",
      yy: "%d anni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("ja", {
    eras: [{
      since: "2019-05-01",
      offset: 1,
      name: "令和",
      narrow: "㋿",
      abbr: "R"
    }, {
      since: "1989-01-08",
      until: "2019-04-30",
      offset: 1,
      name: "平成",
      narrow: "㍻",
      abbr: "H"
    }, {
      since: "1926-12-25",
      until: "1989-01-07",
      offset: 1,
      name: "昭和",
      narrow: "㍼",
      abbr: "S"
    }, {
      since: "1912-07-30",
      until: "1926-12-24",
      offset: 1,
      name: "大正",
      narrow: "㍽",
      abbr: "T"
    }, {
      since: "1873-01-01",
      until: "1912-07-29",
      offset: 6,
      name: "明治",
      narrow: "㍾",
      abbr: "M"
    }, {
      since: "0001-01-01",
      until: "1873-12-31",
      offset: 1,
      name: "西暦",
      narrow: "AD",
      abbr: "AD"
    }, {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "紀元前",
      narrow: "BC",
      abbr: "BC"
    }],
    eraYearOrdinalRegex: /(\u5143|\d+)\u5e74/,
    eraYearOrdinalParse: function (e, t) {
      return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
    },
    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日 dddd HH:mm",
      l: "YYYY/MM/DD",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日(ddd) HH:mm"
    },
    meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
    isPM: function (e) {
      return "午後" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "午前" : "午後"
    },
    calendar: {
      sameDay: "[今日] LT",
      nextDay: "[明日] LT",
      nextWeek: function (e) {
        return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
      },
      lastDay: "[昨日] LT",
      lastWeek: function (e) {
        return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
      },
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
    ordinal: function (e, t) {
      switch (t) {
        case "y":
          return 1 === e ? "元年" : e + "年";
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "数秒",
      ss: "%d秒",
      m: "1分",
      mm: "%d分",
      h: "1時間",
      hh: "%d時間",
      d: "1日",
      dd: "%d日",
      M: "1ヶ月",
      MM: "%dヶ月",
      y: "1年",
      yy: "%d年"
    }
  }), n.defineLocale("jv", {
    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
    weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
    weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? 11 <= e ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
    },
    calendar: {
      sameDay: "[Dinten puniko pukul] LT",
      nextDay: "[Mbenjang pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kala wingi pukul] LT",
      lastWeek: "dddd [kepengker pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "wonten ing %s",
      past: "%s ingkang kepengker",
      s: "sawetawis detik",
      ss: "%d detik",
      m: "setunggal menit",
      mm: "%d menit",
      h: "setunggal jam",
      hh: "%d jam",
      d: "sedinten",
      dd: "%d dinten",
      M: "sewulan",
      MM: "%d wulan",
      y: "setaun",
      yy: "%d taun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("ka", {
    months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
    monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
    weekdays: {
      standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
      format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
      isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
    },
    weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
    weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[დღეს] LT[-ზე]",
      nextDay: "[ხვალ] LT[-ზე]",
      lastDay: "[გუშინ] LT[-ზე]",
      nextWeek: "[შემდეგ] dddd LT[-ზე]",
      lastWeek: "[წინა] dddd LT-ზე",
      sameElse: "L"
    },
    relativeTime: {
      future: function (e) {
        return e.replace(/(\u10ec\u10d0\u10db|\u10ec\u10e3\u10d7|\u10e1\u10d0\u10d0\u10d7|\u10ec\u10d4\u10da|\u10d3\u10e6|\u10d7\u10d5)(\u10d8|\u10d4)/, (function (e, t, n) {
          return "ი" === n ? t + "ში" : t + n + "ში"
        }))
      },
      past: function (e) {
        return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "ის წინ") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "წლის წინ") : e
      },
      s: "რამდენიმე წამი",
      ss: "%d წამი",
      m: "წუთი",
      mm: "%d წუთი",
      h: "საათი",
      hh: "%d საათი",
      d: "დღე",
      dd: "%d დღე",
      M: "თვე",
      MM: "%d თვე",
      y: "წელი",
      yy: "%d წელი"
    },
    dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
    ordinal: function (e) {
      return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var ma = {
    0: "-ші",
    1: "-ші",
    2: "-ші",
    3: "-ші",
    4: "-ші",
    5: "-ші",
    6: "-шы",
    7: "-ші",
    8: "-ші",
    9: "-шы",
    10: "-шы",
    20: "-шы",
    30: "-шы",
    40: "-шы",
    50: "-ші",
    60: "-шы",
    70: "-ші",
    80: "-ші",
    90: "-шы",
    100: "-ші"
  };
  n.defineLocale("kk", {
    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Бүгін сағат] LT",
      nextDay: "[Ертең сағат] LT",
      nextWeek: "dddd [сағат] LT",
      lastDay: "[Кеше сағат] LT",
      lastWeek: "[Өткен аптаның] dddd [сағат] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ішінде",
      past: "%s бұрын",
      s: "бірнеше секунд",
      ss: "%d секунд",
      m: "бір минут",
      mm: "%d минут",
      h: "бір сағат",
      hh: "%d сағат",
      d: "бір күн",
      dd: "%d күн",
      M: "бір ай",
      MM: "%d ай",
      y: "бір жыл",
      yy: "%d жыл"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
    ordinal: function (e) {
      return e + (ma[e] || ma[e % 10] || ma[100 <= e ? 100 : null])
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var ga = {
      1: "១",
      2: "២",
      3: "៣",
      4: "៤",
      5: "៥",
      6: "៦",
      7: "៧",
      8: "៨",
      9: "៩",
      0: "០"
    },
    va = {
      "១": "1",
      "២": "2",
      "៣": "3",
      "៤": "4",
      "៥": "5",
      "៦": "6",
      "៧": "7",
      "៨": "8",
      "៩": "9",
      "០": "0"
    };
  n.defineLocale("km", {
    months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
    isPM: function (e) {
      return "ល្ងាច" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ព្រឹក" : "ល្ងាច"
    },
    calendar: {
      sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
      nextDay: "[ស្អែក ម៉ោង] LT",
      nextWeek: "dddd [ម៉ោង] LT",
      lastDay: "[ម្សិលមិញ ម៉ោង] LT",
      lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%sទៀត",
      past: "%sមុន",
      s: "ប៉ុន្មានវិនាទី",
      ss: "%d វិនាទី",
      m: "មួយនាទី",
      mm: "%d នាទី",
      h: "មួយម៉ោង",
      hh: "%d ម៉ោង",
      d: "មួយថ្ងៃ",
      dd: "%d ថ្ងៃ",
      M: "មួយខែ",
      MM: "%d ខែ",
      y: "មួយឆ្នាំ",
      yy: "%d ឆ្នាំ"
    },
    dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
    ordinal: "ទី%d",
    preparse: function (e) {
      return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, (function (e) {
        return va[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return ga[e]
      }))
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var ya = {
      1: "೧",
      2: "೨",
      3: "೩",
      4: "೪",
      5: "೫",
      6: "೬",
      7: "೭",
      8: "೮",
      9: "೯",
      0: "೦"
    },
    ba = {
      "೧": "1",
      "೨": "2",
      "೩": "3",
      "೪": "4",
      "೫": "5",
      "೬": "6",
      "೭": "7",
      "೮": "8",
      "೯": "9",
      "೦": "0"
    };
  n.defineLocale("kn", {
    months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
    monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
    monthsParseExact: !0,
    weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
    weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
    weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[ಇಂದು] LT",
      nextDay: "[ನಾಳೆ] LT",
      nextWeek: "dddd, LT",
      lastDay: "[ನಿನ್ನೆ] LT",
      lastWeek: "[ಕೊನೆಯ] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ನಂತರ",
      past: "%s ಹಿಂದೆ",
      s: "ಕೆಲವು ಕ್ಷಣಗಳು",
      ss: "%d ಸೆಕೆಂಡುಗಳು",
      m: "ಒಂದು ನಿಮಿಷ",
      mm: "%d ನಿಮಿಷ",
      h: "ಒಂದು ಗಂಟೆ",
      hh: "%d ಗಂಟೆ",
      d: "ಒಂದು ದಿನ",
      dd: "%d ದಿನ",
      M: "ಒಂದು ತಿಂಗಳು",
      MM: "%d ತಿಂಗಳು",
      y: "ಒಂದು ವರ್ಷ",
      yy: "%d ವರ್ಷ"
    },
    preparse: function (e) {
      return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, (function (e) {
        return ba[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return ya[e]
      }))
    },
    meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? 10 <= e ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
    ordinal: function (e) {
      return e + "ನೇ"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("ko", {
    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY년 MMMM D일",
      LLL: "YYYY년 MMMM D일 A h:mm",
      LLLL: "YYYY년 MMMM D일 dddd A h:mm",
      l: "YYYY.MM.DD.",
      ll: "YYYY년 MMMM D일",
      lll: "YYYY년 MMMM D일 A h:mm",
      llll: "YYYY년 MMMM D일 dddd A h:mm"
    },
    calendar: {
      sameDay: "오늘 LT",
      nextDay: "내일 LT",
      nextWeek: "dddd LT",
      lastDay: "어제 LT",
      lastWeek: "지난주 dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s 후",
      past: "%s 전",
      s: "몇 초",
      ss: "%d초",
      m: "1분",
      mm: "%d분",
      h: "한 시간",
      hh: "%d시간",
      d: "하루",
      dd: "%d일",
      M: "한 달",
      MM: "%d달",
      y: "일 년",
      yy: "%d년"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "일";
        case "M":
          return e + "월";
        case "w":
        case "W":
          return e + "주";
        default:
          return e
      }
    },
    meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
    isPM: function (e) {
      return "오후" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "오전" : "오후"
    }
  });
  var xa = {
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
      0: "٠"
    },
    _a = {
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "٠": "0"
    },
    wa = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
  n.defineLocale("ku", {
    months: wa,
    monthsShort: wa,
    weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
    weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
    weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
    isPM: function (e) {
      return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "به‌یانی" : "ئێواره‌"
    },
    calendar: {
      sameDay: "[ئه‌مرۆ كاتژمێر] LT",
      nextDay: "[به‌یانی كاتژمێر] LT",
      nextWeek: "dddd [كاتژمێر] LT",
      lastDay: "[دوێنێ كاتژمێر] LT",
      lastWeek: "dddd [كاتژمێر] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "له‌ %s",
      past: "%s",
      s: "چه‌ند چركه‌یه‌ك",
      ss: "چركه‌ %d",
      m: "یه‌ك خوله‌ك",
      mm: "%d خوله‌ك",
      h: "یه‌ك كاتژمێر",
      hh: "%d كاتژمێر",
      d: "یه‌ك ڕۆژ",
      dd: "%d ڕۆژ",
      M: "یه‌ك مانگ",
      MM: "%d مانگ",
      y: "یه‌ك ساڵ",
      yy: "%d ساڵ"
    },
    preparse: function (e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, (function (e) {
        return _a[e]
      })).replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return xa[e]
      })).replace(/,/g, "،")
    },
    week: {
      dow: 6,
      doy: 12
    }
  });
  var ka = {
    0: "-чү",
    1: "-чи",
    2: "-чи",
    3: "-чү",
    4: "-чү",
    5: "-чи",
    6: "-чы",
    7: "-чи",
    8: "-чи",
    9: "-чу",
    10: "-чу",
    20: "-чы",
    30: "-чу",
    40: "-чы",
    50: "-чү",
    60: "-чы",
    70: "-чи",
    80: "-чи",
    90: "-чу",
    100: "-чү"
  };

  function Ma(e, t, n, i) {
    var a = {
      m: ["eng Minutt", "enger Minutt"],
      h: ["eng Stonn", "enger Stonn"],
      d: ["een Dag", "engem Dag"],
      M: ["ee Mount", "engem Mount"],
      y: ["ee Joer", "engem Joer"]
    };
    return t ? a[n][0] : a[n][1]
  }

  function La(e) {
    if (e = parseInt(e, 10), isNaN(e)) return !1;
    if (e < 0) return !0;
    if (e < 10) return 4 <= e && e <= 7;
    if (e < 100) {
      var t = e % 10;
      return La(0 == t ? e / 10 : t)
    }
    if (e < 1e4) {
      for (; 10 <= e;) e /= 10;
      return La(e)
    }
    return La(e /= 1e3)
  }
  n.defineLocale("ky", {
    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Бүгүн саат] LT",
      nextDay: "[Эртең саат] LT",
      nextWeek: "dddd [саат] LT",
      lastDay: "[Кечээ саат] LT",
      lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ичинде",
      past: "%s мурун",
      s: "бирнече секунд",
      ss: "%d секунд",
      m: "бир мүнөт",
      mm: "%d мүнөт",
      h: "бир саат",
      hh: "%d саат",
      d: "бир күн",
      dd: "%d күн",
      M: "бир ай",
      MM: "%d ай",
      y: "бир жыл",
      yy: "%d жыл"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
    ordinal: function (e) {
      return e + (ka[e] || ka[e % 10] || ka[100 <= e ? 100 : null])
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("lb", {
    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    monthsParseExact: !0,
    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm [Auer]",
      LTS: "H:mm:ss [Auer]",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm [Auer]",
      LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
    },
    calendar: {
      sameDay: "[Haut um] LT",
      sameElse: "L",
      nextDay: "[Muer um] LT",
      nextWeek: "dddd [um] LT",
      lastDay: "[Gëschter um] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 2:
          case 4:
            return "[Leschten] dddd [um] LT";
          default:
            return "[Leschte] dddd [um] LT"
        }
      }
    },
    relativeTime: {
      future: function (e) {
        return La(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
      },
      past: function (e) {
        return La(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
      },
      s: "e puer Sekonnen",
      ss: "%d Sekonnen",
      m: Ma,
      mm: "%d Minutten",
      h: Ma,
      hh: "%d Stonnen",
      d: Ma,
      dd: "%d Deeg",
      M: Ma,
      MM: "%d Méint",
      y: Ma,
      yy: "%d Joer"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("lo", {
    months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
    monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
    weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
    weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
    weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "ວັນdddd D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
    isPM: function (e) {
      return "ຕອນແລງ" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
    },
    calendar: {
      sameDay: "[ມື້ນີ້ເວລາ] LT",
      nextDay: "[ມື້ອື່ນເວລາ] LT",
      nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
      lastDay: "[ມື້ວານນີ້ເວລາ] LT",
      lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ອີກ %s",
      past: "%sຜ່ານມາ",
      s: "ບໍ່ເທົ່າໃດວິນາທີ",
      ss: "%d ວິນາທີ",
      m: "1 ນາທີ",
      mm: "%d ນາທີ",
      h: "1 ຊົ່ວໂມງ",
      hh: "%d ຊົ່ວໂມງ",
      d: "1 ມື້",
      dd: "%d ມື້",
      M: "1 ເດືອນ",
      MM: "%d ເດືອນ",
      y: "1 ປີ",
      yy: "%d ປີ"
    },
    dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
    ordinal: function (e) {
      return "ທີ່" + e
    }
  });
  var Sa = {
    ss: "sekundė_sekundžių_sekundes",
    m: "minutė_minutės_minutę",
    mm: "minutės_minučių_minutes",
    h: "valanda_valandos_valandą",
    hh: "valandos_valandų_valandas",
    d: "diena_dienos_dieną",
    dd: "dienos_dienų_dienas",
    M: "mėnuo_mėnesio_mėnesį",
    MM: "mėnesiai_mėnesių_mėnesius",
    y: "metai_metų_metus",
    yy: "metai_metų_metus"
  };

  function Aa(e, t, n, i) {
    return t ? Da(n)[0] : i ? Da(n)[1] : Da(n)[2]
  }

  function Ta(e) {
    return e % 10 == 0 || 10 < e && e < 20
  }

  function Da(e) {
    return Sa[e].split("_")
  }

  function Ca(e, t, n, i) {
    var a = e + " ";
    return 1 === e ? a + Aa(0, t, n[0], i) : t ? a + (Ta(e) ? Da(n)[1] : Da(n)[0]) : i ? a + Da(n)[1] : a + (Ta(e) ? Da(n)[1] : Da(n)[2])
  }
  n.defineLocale("lt", {
    months: {
      format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
      standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
    weekdays: {
      format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
      standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
      isFormat: /dddd HH:mm/
    },
    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY [m.] MMMM D [d.]",
      LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
      LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
      l: "YYYY-MM-DD",
      ll: "YYYY [m.] MMMM D [d.]",
      lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
      llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
    },
    calendar: {
      sameDay: "[Šiandien] LT",
      nextDay: "[Rytoj] LT",
      nextWeek: "dddd LT",
      lastDay: "[Vakar] LT",
      lastWeek: "[Praėjusį] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "po %s",
      past: "prieš %s",
      s: function (e, t, n, i) {
        return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
      },
      ss: Ca,
      m: Aa,
      mm: Ca,
      h: Aa,
      hh: Ca,
      d: Aa,
      dd: Ca,
      M: Aa,
      MM: Ca,
      y: Aa,
      yy: Ca
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function (e) {
      return e + "-oji"
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ea = {
    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
    h: "stundas_stundām_stunda_stundas".split("_"),
    hh: "stundas_stundām_stunda_stundas".split("_"),
    d: "dienas_dienām_diena_dienas".split("_"),
    dd: "dienas_dienām_diena_dienas".split("_"),
    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
    y: "gada_gadiem_gads_gadi".split("_"),
    yy: "gada_gadiem_gads_gadi".split("_")
  };

  function Oa(e, t, n) {
    return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
  }

  function Ya(e, t, n) {
    return e + " " + Oa(Ea[n], e, t)
  }

  function Pa(e, t, n) {
    return Oa(Ea[n], e, t)
  }
  n.defineLocale("lv", {
    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY.",
      LL: "YYYY. [gada] D. MMMM",
      LLL: "YYYY. [gada] D. MMMM, HH:mm",
      LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
    },
    calendar: {
      sameDay: "[Šodien pulksten] LT",
      nextDay: "[Rīt pulksten] LT",
      nextWeek: "dddd [pulksten] LT",
      lastDay: "[Vakar pulksten] LT",
      lastWeek: "[Pagājušā] dddd [pulksten] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "pēc %s",
      past: "pirms %s",
      s: function (e, t) {
        return t ? "dažas sekundes" : "dažām sekundēm"
      },
      ss: Ya,
      m: Pa,
      mm: Ya,
      h: Pa,
      hh: Ya,
      d: Pa,
      dd: Ya,
      M: Pa,
      MM: Ya,
      y: Pa,
      yy: Ya
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ia = {
    words: {
      ss: ["sekund", "sekunda", "sekundi"],
      m: ["jedan minut", "jednog minuta"],
      mm: ["minut", "minuta", "minuta"],
      h: ["jedan sat", "jednog sata"],
      hh: ["sat", "sata", "sati"],
      dd: ["dan", "dana", "dana"],
      MM: ["mjesec", "mjeseca", "mjeseci"],
      yy: ["godina", "godine", "godina"]
    },
    correctGrammaticalCase: function (e, t) {
      return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
    },
    translate: function (e, t, n) {
      var i = Ia.words[n];
      return 1 === n.length ? t ? i[0] : i[1] : e + " " + Ia.correctGrammaticalCase(e, i)
    }
  };

  function ja(e, t, n, i) {
    switch (n) {
      case "s":
        return t ? "хэдхэн секунд" : "хэдхэн секундын";
      case "ss":
        return e + (t ? " секунд" : " секундын");
      case "m":
      case "mm":
        return e + (t ? " минут" : " минутын");
      case "h":
      case "hh":
        return e + (t ? " цаг" : " цагийн");
      case "d":
      case "dd":
        return e + (t ? " өдөр" : " өдрийн");
      case "M":
      case "MM":
        return e + (t ? " сар" : " сарын");
      case "y":
      case "yy":
        return e + (t ? " жил" : " жилийн");
      default:
        return e
    }
  }
  n.defineLocale("me", {
    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sjutra u] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[u] [nedjelju] [u] LT";
          case 3:
            return "[u] [srijedu] [u] LT";
          case 6:
            return "[u] [subotu] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT"
        }
      },
      lastDay: "[juče u] LT",
      lastWeek: function () {
        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "prije %s",
      s: "nekoliko sekundi",
      ss: Ia.translate,
      m: Ia.translate,
      mm: Ia.translate,
      h: Ia.translate,
      hh: Ia.translate,
      d: "dan",
      dd: Ia.translate,
      M: "mjesec",
      MM: Ia.translate,
      y: "godinu",
      yy: Ia.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("mi", {
    months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
    monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
    weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
    weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [i] HH:mm",
      LLLL: "dddd, D MMMM YYYY [i] HH:mm"
    },
    calendar: {
      sameDay: "[i teie mahana, i] LT",
      nextDay: "[apopo i] LT",
      nextWeek: "dddd [i] LT",
      lastDay: "[inanahi i] LT",
      lastWeek: "dddd [whakamutunga i] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "i roto i %s",
      past: "%s i mua",
      s: "te hēkona ruarua",
      ss: "%d hēkona",
      m: "he meneti",
      mm: "%d meneti",
      h: "te haora",
      hh: "%d haora",
      d: "he ra",
      dd: "%d ra",
      M: "he marama",
      MM: "%d marama",
      y: "he tau",
      yy: "%d tau"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("mk", {
    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[Денес во] LT",
      nextDay: "[Утре во] LT",
      nextWeek: "[Во] dddd [во] LT",
      lastDay: "[Вчера во] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return "[Изминатата] dddd [во] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[Изминатиот] dddd [во] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "за %s",
      past: "пред %s",
      s: "неколку секунди",
      ss: "%d секунди",
      m: "една минута",
      mm: "%d минути",
      h: "еден час",
      hh: "%d часа",
      d: "еден ден",
      dd: "%d дена",
      M: "еден месец",
      MM: "%d месеци",
      y: "една година",
      yy: "%d години"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
    ordinal: function (e) {
      var t = e % 10,
        n = e % 100;
      return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("ml", {
    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
    monthsParseExact: !0,
    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
    longDateFormat: {
      LT: "A h:mm -നു",
      LTS: "A h:mm:ss -നു",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm -നു",
      LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
    },
    calendar: {
      sameDay: "[ഇന്ന്] LT",
      nextDay: "[നാളെ] LT",
      nextWeek: "dddd, LT",
      lastDay: "[ഇന്നലെ] LT",
      lastWeek: "[കഴിഞ്ഞ] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s കഴിഞ്ഞ്",
      past: "%s മുൻപ്",
      s: "അൽപ നിമിഷങ്ങൾ",
      ss: "%d സെക്കൻഡ്",
      m: "ഒരു മിനിറ്റ്",
      mm: "%d മിനിറ്റ്",
      h: "ഒരു മണിക്കൂർ",
      hh: "%d മണിക്കൂർ",
      d: "ഒരു ദിവസം",
      dd: "%d ദിവസം",
      M: "ഒരു മാസം",
      MM: "%d മാസം",
      y: "ഒരു വർഷം",
      yy: "%d വർഷം"
    },
    meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "രാത്രി" === t && 4 <= e || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
    }
  }), n.defineLocale("mn", {
    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
    monthsParseExact: !0,
    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY оны MMMMын D",
      LLL: "YYYY оны MMMMын D HH:mm",
      LLLL: "dddd, YYYY оны MMMMын D HH:mm"
    },
    meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
    isPM: function (e) {
      return "ҮХ" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ҮӨ" : "ҮХ"
    },
    calendar: {
      sameDay: "[Өнөөдөр] LT",
      nextDay: "[Маргааш] LT",
      nextWeek: "[Ирэх] dddd LT",
      lastDay: "[Өчигдөр] LT",
      lastWeek: "[Өнгөрсөн] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s дараа",
      past: "%s өмнө",
      s: ja,
      ss: ja,
      m: ja,
      mm: ja,
      h: ja,
      hh: ja,
      d: ja,
      dd: ja,
      M: ja,
      MM: ja,
      y: ja,
      yy: ja
    },
    dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + " өдөр";
        default:
          return e
      }
    }
  });
  var Na = {
      1: "१",
      2: "२",
      3: "३",
      4: "४",
      5: "५",
      6: "६",
      7: "७",
      8: "८",
      9: "९",
      0: "०"
    },
    Ha = {
      "१": "1",
      "२": "2",
      "३": "3",
      "४": "4",
      "५": "5",
      "६": "6",
      "७": "7",
      "८": "8",
      "९": "9",
      "०": "0"
    };

  function Fa(e, t, n, i) {
    var a = "";
    if (t) switch (n) {
      case "s":
        a = "काही सेकंद";
        break;
      case "ss":
        a = "%d सेकंद";
        break;
      case "m":
        a = "एक मिनिट";
        break;
      case "mm":
        a = "%d मिनिटे";
        break;
      case "h":
        a = "एक तास";
        break;
      case "hh":
        a = "%d तास";
        break;
      case "d":
        a = "एक दिवस";
        break;
      case "dd":
        a = "%d दिवस";
        break;
      case "M":
        a = "एक महिना";
        break;
      case "MM":
        a = "%d महिने";
        break;
      case "y":
        a = "एक वर्ष";
        break;
      case "yy":
        a = "%d वर्षे"
    } else switch (n) {
      case "s":
        a = "काही सेकंदां";
        break;
      case "ss":
        a = "%d सेकंदां";
        break;
      case "m":
        a = "एका मिनिटा";
        break;
      case "mm":
        a = "%d मिनिटां";
        break;
      case "h":
        a = "एका तासा";
        break;
      case "hh":
        a = "%d तासां";
        break;
      case "d":
        a = "एका दिवसा";
        break;
      case "dd":
        a = "%d दिवसां";
        break;
      case "M":
        a = "एका महिन्या";
        break;
      case "MM":
        a = "%d महिन्यां";
        break;
      case "y":
        a = "एका वर्षा";
        break;
      case "yy":
        a = "%d वर्षां"
    }
    return a.replace(/%d/i, e)
  }
  n.defineLocale("mr", {
    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
    monthsParseExact: !0,
    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
    longDateFormat: {
      LT: "A h:mm वाजता",
      LTS: "A h:mm:ss वाजता",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm वाजता",
      LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
    },
    calendar: {
      sameDay: "[आज] LT",
      nextDay: "[उद्या] LT",
      nextWeek: "dddd, LT",
      lastDay: "[काल] LT",
      lastWeek: "[मागील] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%sमध्ये",
      past: "%sपूर्वी",
      s: Fa,
      ss: Fa,
      m: Fa,
      mm: Fa,
      h: Fa,
      hh: Fa,
      d: Fa,
      dd: Fa,
      M: Fa,
      MM: Fa,
      y: Fa,
      yy: Fa
    },
    preparse: function (e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, (function (e) {
        return Ha[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Na[e]
      }))
    },
    meridiemParse: /\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? 12 <= e ? e : e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return 0 <= e && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("ms-my", {
    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Esok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kelmarin pukul] LT",
      lastWeek: "dddd [lepas pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lepas",
      s: "beberapa saat",
      ss: "%d saat",
      m: "seminit",
      mm: "%d minit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("ms", {
    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH.mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Esok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kelmarin pukul] LT",
      lastWeek: "dddd [lepas pukul] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lepas",
      s: "beberapa saat",
      ss: "%d saat",
      m: "seminit",
      mm: "%d minit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("mt", {
    months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
    monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
    weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
    weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
    weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Illum fil-]LT",
      nextDay: "[Għada fil-]LT",
      nextWeek: "dddd [fil-]LT",
      lastDay: "[Il-bieraħ fil-]LT",
      lastWeek: "dddd [li għadda] [fil-]LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "f’ %s",
      past: "%s ilu",
      s: "ftit sekondi",
      ss: "%d sekondi",
      m: "minuta",
      mm: "%d minuti",
      h: "siegħa",
      hh: "%d siegħat",
      d: "ġurnata",
      dd: "%d ġranet",
      M: "xahar",
      MM: "%d xhur",
      y: "sena",
      yy: "%d sni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ra = {
      1: "၁",
      2: "၂",
      3: "၃",
      4: "၄",
      5: "၅",
      6: "၆",
      7: "၇",
      8: "၈",
      9: "၉",
      0: "၀"
    },
    za = {
      "၁": "1",
      "၂": "2",
      "၃": "3",
      "၄": "4",
      "၅": "5",
      "၆": "6",
      "၇": "7",
      "၈": "8",
      "၉": "9",
      "၀": "0"
    };
  n.defineLocale("my", {
    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
    weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
    weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[ယနေ.] LT [မှာ]",
      nextDay: "[မနက်ဖြန်] LT [မှာ]",
      nextWeek: "dddd LT [မှာ]",
      lastDay: "[မနေ.က] LT [မှာ]",
      lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
      sameElse: "L"
    },
    relativeTime: {
      future: "လာမည့် %s မှာ",
      past: "လွန်ခဲ့သော %s က",
      s: "စက္ကန်.အနည်းငယ်",
      ss: "%d စက္ကန့်",
      m: "တစ်မိနစ်",
      mm: "%d မိနစ်",
      h: "တစ်နာရီ",
      hh: "%d နာရီ",
      d: "တစ်ရက်",
      dd: "%d ရက်",
      M: "တစ်လ",
      MM: "%d လ",
      y: "တစ်နှစ်",
      yy: "%d နှစ်"
    },
    preparse: function (e) {
      return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, (function (e) {
        return za[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Ra[e]
      }))
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("nb", {
    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
    monthsParseExact: !0,
    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] HH:mm",
      LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[i dag kl.] LT",
      nextDay: "[i morgen kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[i går kl.] LT",
      lastWeek: "[forrige] dddd [kl.] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s siden",
      s: "noen sekunder",
      ss: "%d sekunder",
      m: "ett minutt",
      mm: "%d minutter",
      h: "en time",
      hh: "%d timer",
      d: "en dag",
      dd: "%d dager",
      w: "en uke",
      ww: "%d uker",
      M: "en måned",
      MM: "%d måneder",
      y: "ett år",
      yy: "%d år"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ba = {
      1: "१",
      2: "२",
      3: "३",
      4: "४",
      5: "५",
      6: "६",
      7: "७",
      8: "८",
      9: "९",
      0: "०"
    },
    Wa = {
      "१": "1",
      "२": "2",
      "३": "3",
      "४": "4",
      "५": "5",
      "६": "6",
      "७": "7",
      "८": "8",
      "९": "9",
      "०": "0"
    };
  n.defineLocale("ne", {
    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
    monthsParseExact: !0,
    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
    weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "Aको h:mm बजे",
      LTS: "Aको h:mm:ss बजे",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, Aको h:mm बजे",
      LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
    },
    preparse: function (e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, (function (e) {
        return Wa[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Ba[e]
      }))
    },
    meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? 10 <= e ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
    },
    calendar: {
      sameDay: "[आज] LT",
      nextDay: "[भोलि] LT",
      nextWeek: "[आउँदो] dddd[,] LT",
      lastDay: "[हिजो] LT",
      lastWeek: "[गएको] dddd[,] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%sमा",
      past: "%s अगाडि",
      s: "केही क्षण",
      ss: "%d सेकेण्ड",
      m: "एक मिनेट",
      mm: "%d मिनेट",
      h: "एक घण्टा",
      hh: "%d घण्टा",
      d: "एक दिन",
      dd: "%d दिन",
      M: "एक महिना",
      MM: "%d महिना",
      y: "एक बर्ष",
      yy: "%d बर्ष"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var Va = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
    qa = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
    Ua = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    Xa = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  n.defineLocale("nl-be", {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? qa[e.month()] : Va[e.month()] : Va
    },
    monthsRegex: Xa,
    monthsShortRegex: Xa,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: Ua,
    longMonthsParse: Ua,
    shortMonthsParse: Ua,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "één minuut",
      mm: "%d minuten",
      h: "één uur",
      hh: "%d uur",
      d: "één dag",
      dd: "%d dagen",
      M: "één maand",
      MM: "%d maanden",
      y: "één jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var $a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
    Ga = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
    Za = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    Ka = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  n.defineLocale("nl", {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort: function (e, t) {
      return e ? /-MMM-/.test(t) ? Ga[e.month()] : $a[e.month()] : $a
    },
    monthsRegex: Ka,
    monthsShortRegex: Ka,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: Za,
    longMonthsParse: Za,
    shortMonthsParse: Za,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD-MM-YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[vandaag om] LT",
      nextDay: "[morgen om] LT",
      nextWeek: "dddd [om] LT",
      lastDay: "[gisteren om] LT",
      lastWeek: "[afgelopen] dddd [om] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "over %s",
      past: "%s geleden",
      s: "een paar seconden",
      ss: "%d seconden",
      m: "één minuut",
      mm: "%d minuten",
      h: "één uur",
      hh: "%d uur",
      d: "één dag",
      dd: "%d dagen",
      w: "één week",
      ww: "%d weken",
      M: "één maand",
      MM: "%d maanden",
      y: "één jaar",
      yy: "%d jaar"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("nn", {
    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
    monthsParseExact: !0,
    weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
    weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
    weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY [kl.] H:mm",
      LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
    },
    calendar: {
      sameDay: "[I dag klokka] LT",
      nextDay: "[I morgon klokka] LT",
      nextWeek: "dddd [klokka] LT",
      lastDay: "[I går klokka] LT",
      lastWeek: "[Føregåande] dddd [klokka] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "%s sidan",
      s: "nokre sekund",
      ss: "%d sekund",
      m: "eit minutt",
      mm: "%d minutt",
      h: "ein time",
      hh: "%d timar",
      d: "ein dag",
      dd: "%d dagar",
      w: "ei veke",
      ww: "%d veker",
      M: "ein månad",
      MM: "%d månader",
      y: "eit år",
      yy: "%d år"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("oc-lnc", {
    months: {
      standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
      format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
    weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
    weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM [de] YYYY",
      ll: "D MMM YYYY",
      LLL: "D MMMM [de] YYYY [a] H:mm",
      lll: "D MMM YYYY, H:mm",
      LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
      llll: "ddd D MMM YYYY, H:mm"
    },
    calendar: {
      sameDay: "[uèi a] LT",
      nextDay: "[deman a] LT",
      nextWeek: "dddd [a] LT",
      lastDay: "[ièr a] LT",
      lastWeek: "dddd [passat a] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "d'aquí %s",
      past: "fa %s",
      s: "unas segondas",
      ss: "%d segondas",
      m: "una minuta",
      mm: "%d minutas",
      h: "una ora",
      hh: "%d oras",
      d: "un jorn",
      dd: "%d jorns",
      M: "un mes",
      MM: "%d meses",
      y: "un an",
      yy: "%d ans"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
    ordinal: function (e, t) {
      return e + ("w" !== t && "W" !== t ? 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è" : "a")
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var Ja = {
      1: "੧",
      2: "੨",
      3: "੩",
      4: "੪",
      5: "੫",
      6: "੬",
      7: "੭",
      8: "੮",
      9: "੯",
      0: "੦"
    },
    Qa = {
      "੧": "1",
      "੨": "2",
      "੩": "3",
      "੪": "4",
      "੫": "5",
      "੬": "6",
      "੭": "7",
      "੮": "8",
      "੯": "9",
      "੦": "0"
    };
  n.defineLocale("pa-in", {
    months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
    monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
    weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
    weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
    weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
    longDateFormat: {
      LT: "A h:mm ਵਜੇ",
      LTS: "A h:mm:ss ਵਜੇ",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
      LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
    },
    calendar: {
      sameDay: "[ਅਜ] LT",
      nextDay: "[ਕਲ] LT",
      nextWeek: "[ਅਗਲਾ] dddd, LT",
      lastDay: "[ਕਲ] LT",
      lastWeek: "[ਪਿਛਲੇ] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ਵਿੱਚ",
      past: "%s ਪਿਛਲੇ",
      s: "ਕੁਝ ਸਕਿੰਟ",
      ss: "%d ਸਕਿੰਟ",
      m: "ਇਕ ਮਿੰਟ",
      mm: "%d ਮਿੰਟ",
      h: "ਇੱਕ ਘੰਟਾ",
      hh: "%d ਘੰਟੇ",
      d: "ਇੱਕ ਦਿਨ",
      dd: "%d ਦਿਨ",
      M: "ਇੱਕ ਮਹੀਨਾ",
      MM: "%d ਮਹੀਨੇ",
      y: "ਇੱਕ ਸਾਲ",
      yy: "%d ਸਾਲ"
    },
    preparse: function (e) {
      return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, (function (e) {
        return Qa[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return Ja[e]
      }))
    },
    meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? 10 <= e ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
    },
    week: {
      dow: 0,
      doy: 6
    }
  });
  var er = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
    tr = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
    nr = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^pa\u017a/i, /^lis/i, /^gru/i];

  function ir(e) {
    return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1
  }

  function ar(e, t, n) {
    var i = e + " ";
    switch (n) {
      case "ss":
        return i + (ir(e) ? "sekundy" : "sekund");
      case "m":
        return t ? "minuta" : "minutę";
      case "mm":
        return i + (ir(e) ? "minuty" : "minut");
      case "h":
        return t ? "godzina" : "godzinę";
      case "hh":
        return i + (ir(e) ? "godziny" : "godzin");
      case "ww":
        return i + (ir(e) ? "tygodnie" : "tygodni");
      case "MM":
        return i + (ir(e) ? "miesiące" : "miesięcy");
      case "yy":
        return i + (ir(e) ? "lata" : "lat")
    }
  }

  function rr(e, t, n) {
    return e + (20 <= e % 100 || 100 <= e && e % 100 == 0 ? " de " : " ") + {
      ss: "secunde",
      mm: "minute",
      hh: "ore",
      dd: "zile",
      ww: "săptămâni",
      MM: "luni",
      yy: "ani"
    } [n]
  }

  function or(e, t, n) {
    var i, a;
    return "m" === n ? t ? "минута" : "минуту" : e + " " + (i = +e, a = {
      ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
      mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
      hh: "час_часа_часов",
      dd: "день_дня_дней",
      ww: "неделя_недели_недель",
      MM: "месяц_месяца_месяцев",
      yy: "год_года_лет"
    } [n].split("_"), i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
  }
  n.defineLocale("pl", {
    months: function (e, t) {
      return e ? /D MMMM/.test(t) ? tr[e.month()] : er[e.month()] : er
    },
    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
    monthsParse: nr,
    longMonthsParse: nr,
    shortMonthsParse: nr,
    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
    weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Dziś o] LT",
      nextDay: "[Jutro o] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[W niedzielę o] LT";
          case 2:
            return "[We wtorek o] LT";
          case 3:
            return "[W środę o] LT";
          case 6:
            return "[W sobotę o] LT";
          default:
            return "[W] dddd [o] LT"
        }
      },
      lastDay: "[Wczoraj o] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[W zeszłą niedzielę o] LT";
          case 3:
            return "[W zeszłą środę o] LT";
          case 6:
            return "[W zeszłą sobotę o] LT";
          default:
            return "[W zeszły] dddd [o] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "%s temu",
      s: "kilka sekund",
      ss: ar,
      m: ar,
      mm: ar,
      h: ar,
      hh: ar,
      d: "1 dzień",
      dd: "%d dni",
      w: "tydzień",
      ww: ar,
      M: "miesiąc",
      MM: ar,
      y: "rok",
      yy: ar
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("pt-br", {
    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
    weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
    weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
    weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
    },
    calendar: {
      sameDay: "[Hoje às] LT",
      nextDay: "[Amanhã às] LT",
      nextWeek: "dddd [às] LT",
      lastDay: "[Ontem às] LT",
      lastWeek: function () {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "em %s",
      past: "há %s",
      s: "poucos segundos",
      ss: "%d segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      M: "um mês",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    invalidDate: "Data inválida"
  }), n.defineLocale("pt", {
    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
    weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Hoje às] LT",
      nextDay: "[Amanhã às] LT",
      nextWeek: "dddd [às] LT",
      lastDay: "[Ontem às] LT",
      lastWeek: function () {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "em %s",
      past: "há %s",
      s: "segundos",
      ss: "%d segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      w: "uma semana",
      ww: "%d semanas",
      M: "um mês",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
    ordinal: "%dº",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("ro", {
    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
    monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[azi la] LT",
      nextDay: "[mâine la] LT",
      nextWeek: "dddd [la] LT",
      lastDay: "[ieri la] LT",
      lastWeek: "[fosta] dddd [la] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "peste %s",
      past: "%s în urmă",
      s: "câteva secunde",
      ss: rr,
      m: "un minut",
      mm: rr,
      h: "o oră",
      hh: rr,
      d: "o zi",
      dd: rr,
      w: "o săptămână",
      ww: rr,
      M: "o lună",
      MM: rr,
      y: "un an",
      yy: rr
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var sr = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
  n.defineLocale("ru", {
    months: {
      format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
      standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
    },
    monthsShort: {
      format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
      standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
    },
    weekdays: {
      standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
      format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
      isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?] ?dddd/
    },
    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
    monthsParse: sr,
    longMonthsParse: sr,
    shortMonthsParse: sr,
    monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
    monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
    monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
    monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY г.",
      LLL: "D MMMM YYYY г., H:mm",
      LLLL: "dddd, D MMMM YYYY г., H:mm"
    },
    calendar: {
      sameDay: "[Сегодня, в] LT",
      nextDay: "[Завтра, в] LT",
      lastDay: "[Вчера, в] LT",
      nextWeek: function (e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
        switch (this.day()) {
          case 0:
            return "[В следующее] dddd, [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В следующий] dddd, [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В следующую] dddd, [в] LT"
        }
      },
      lastWeek: function (e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
        switch (this.day()) {
          case 0:
            return "[В прошлое] dddd, [в] LT";
          case 1:
          case 2:
          case 4:
            return "[В прошлый] dddd, [в] LT";
          case 3:
          case 5:
          case 6:
            return "[В прошлую] dddd, [в] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "через %s",
      past: "%s назад",
      s: "несколько секунд",
      ss: or,
      m: or,
      mm: or,
      h: "час",
      hh: or,
      d: "день",
      dd: or,
      w: "неделя",
      ww: or,
      M: "месяц",
      MM: or,
      y: "год",
      yy: or
    },
    meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
    isPM: function (e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
    ordinal: function (e, t) {
      switch (t) {
        case "M":
        case "d":
        case "DDD":
          return e + "-й";
        case "D":
          return e + "-го";
        case "w":
        case "W":
          return e + "-я";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var lr = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
    cr = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
  n.defineLocale("sd", {
    months: lr,
    monthsShort: lr,
    weekdays: cr,
    weekdaysShort: cr,
    weekdaysMin: cr,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd، D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
    isPM: function (e) {
      return "شام" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "صبح" : "شام"
    },
    calendar: {
      sameDay: "[اڄ] LT",
      nextDay: "[سڀاڻي] LT",
      nextWeek: "dddd [اڳين هفتي تي] LT",
      lastDay: "[ڪالهه] LT",
      lastWeek: "[گزريل هفتي] dddd [تي] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s پوء",
      past: "%s اڳ",
      s: "چند سيڪنڊ",
      ss: "%d سيڪنڊ",
      m: "هڪ منٽ",
      mm: "%d منٽ",
      h: "هڪ ڪلاڪ",
      hh: "%d ڪلاڪ",
      d: "هڪ ڏينهن",
      dd: "%d ڏينهن",
      M: "هڪ مهينو",
      MM: "%d مهينا",
      y: "هڪ سال",
      yy: "%d سال"
    },
    preparse: function (e) {
      return e.replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("se", {
    months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
    monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
    weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
    weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
    weekdaysMin: "s_v_m_g_d_b_L".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "MMMM D. [b.] YYYY",
      LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
      LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
    },
    calendar: {
      sameDay: "[otne ti] LT",
      nextDay: "[ihttin ti] LT",
      nextWeek: "dddd [ti] LT",
      lastDay: "[ikte ti] LT",
      lastWeek: "[ovddit] dddd [ti] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s geažes",
      past: "maŋit %s",
      s: "moadde sekunddat",
      ss: "%d sekunddat",
      m: "okta minuhta",
      mm: "%d minuhtat",
      h: "okta diimmu",
      hh: "%d diimmut",
      d: "okta beaivi",
      dd: "%d beaivvit",
      M: "okta mánnu",
      MM: "%d mánut",
      y: "okta jahki",
      yy: "%d jagit"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("si", {
    months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
    monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
    weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
    weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
    weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "a h:mm",
      LTS: "a h:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY MMMM D",
      LLL: "YYYY MMMM D, a h:mm",
      LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
    },
    calendar: {
      sameDay: "[අද] LT[ට]",
      nextDay: "[හෙට] LT[ට]",
      nextWeek: "dddd LT[ට]",
      lastDay: "[ඊයේ] LT[ට]",
      lastWeek: "[පසුගිය] dddd LT[ට]",
      sameElse: "L"
    },
    relativeTime: {
      future: "%sකින්",
      past: "%sකට පෙර",
      s: "තත්පර කිහිපය",
      ss: "තත්පර %d",
      m: "මිනිත්තුව",
      mm: "මිනිත්තු %d",
      h: "පැය",
      hh: "පැය %d",
      d: "දිනය",
      dd: "දින %d",
      M: "මාසය",
      MM: "මාස %d",
      y: "වසර",
      yy: "වසර %d"
    },
    dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
    ordinal: function (e) {
      return e + " වැනි"
    },
    meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
    isPM: function (e) {
      return "ප.ව." === e || "පස් වරු" === e
    },
    meridiem: function (e, t, n) {
      return 11 < e ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
    }
  });
  var ur = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
    dr = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

  function hr(e) {
    return 1 < e && e < 5
  }

  function fr(e, t, n, i) {
    var a = e + " ";
    switch (n) {
      case "s":
        return t || i ? "pár sekúnd" : "pár sekundami";
      case "ss":
        return t || i ? a + (hr(e) ? "sekundy" : "sekúnd") : a + "sekundami";
      case "m":
        return t ? "minúta" : i ? "minútu" : "minútou";
      case "mm":
        return t || i ? a + (hr(e) ? "minúty" : "minút") : a + "minútami";
      case "h":
        return t ? "hodina" : i ? "hodinu" : "hodinou";
      case "hh":
        return t || i ? a + (hr(e) ? "hodiny" : "hodín") : a + "hodinami";
      case "d":
        return t || i ? "deň" : "dňom";
      case "dd":
        return t || i ? a + (hr(e) ? "dni" : "dní") : a + "dňami";
      case "M":
        return t || i ? "mesiac" : "mesiacom";
      case "MM":
        return t || i ? a + (hr(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
      case "y":
        return t || i ? "rok" : "rokom";
      case "yy":
        return t || i ? a + (hr(e) ? "roky" : "rokov") : a + "rokmi"
    }
  }

  function pr(e, t, n, i) {
    var a = e + " ";
    switch (n) {
      case "s":
        return t || i ? "nekaj sekund" : "nekaj sekundami";
      case "ss":
        return a + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || i ? "sekundi" : "sekundah" : e < 5 ? t || i ? "sekunde" : "sekundah" : "sekund");
      case "m":
        return t ? "ena minuta" : "eno minuto";
      case "mm":
        return a + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : e < 5 ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami");
      case "h":
        return t ? "ena ura" : "eno uro";
      case "hh":
        return a + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : e < 5 ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami");
      case "d":
        return t || i ? "en dan" : "enim dnem";
      case "dd":
        return a + (1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi");
      case "M":
        return t || i ? "en mesec" : "enim mesecem";
      case "MM":
        return a + (1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : e < 5 ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci");
      case "y":
        return t || i ? "eno leto" : "enim letom";
      case "yy":
        return a + (1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : e < 5 ? t || i ? "leta" : "leti" : t || i ? "let" : "leti")
    }
  }
  n.defineLocale("sk", {
    months: ur,
    monthsShort: dr,
    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[dnes o] LT",
      nextDay: "[zajtra o] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[v nedeľu o] LT";
          case 1:
          case 2:
            return "[v] dddd [o] LT";
          case 3:
            return "[v stredu o] LT";
          case 4:
            return "[vo štvrtok o] LT";
          case 5:
            return "[v piatok o] LT";
          case 6:
            return "[v sobotu o] LT"
        }
      },
      lastDay: "[včera o] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[minulú nedeľu o] LT";
          case 1:
          case 2:
            return "[minulý] dddd [o] LT";
          case 3:
            return "[minulú stredu o] LT";
          case 4:
          case 5:
            return "[minulý] dddd [o] LT";
          case 6:
            return "[minulú sobotu o] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "pred %s",
      s: fr,
      ss: fr,
      m: fr,
      mm: fr,
      h: fr,
      hh: fr,
      d: fr,
      dd: fr,
      M: fr,
      MM: fr,
      y: fr,
      yy: fr
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("sl", {
    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD. MM. YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danes ob] LT",
      nextDay: "[jutri ob] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[v] [nedeljo] [ob] LT";
          case 3:
            return "[v] [sredo] [ob] LT";
          case 6:
            return "[v] [soboto] [ob] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[v] dddd [ob] LT"
        }
      },
      lastDay: "[včeraj ob] LT",
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return "[prejšnjo] [nedeljo] [ob] LT";
          case 3:
            return "[prejšnjo] [sredo] [ob] LT";
          case 6:
            return "[prejšnjo] [soboto] [ob] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[prejšnji] dddd [ob] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "čez %s",
      past: "pred %s",
      s: pr,
      ss: pr,
      m: pr,
      mm: pr,
      h: pr,
      hh: pr,
      d: pr,
      dd: pr,
      M: pr,
      MM: pr,
      y: pr,
      yy: pr
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("sq", {
    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
    weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
    weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
    weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
    weekdaysParseExact: !0,
    meridiemParse: /PD|MD/,
    isPM: function (e) {
      return "M" === e.charAt(0)
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "PD" : "MD"
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Sot në] LT",
      nextDay: "[Nesër në] LT",
      nextWeek: "dddd [në] LT",
      lastDay: "[Dje në] LT",
      lastWeek: "dddd [e kaluar në] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "në %s",
      past: "%s më parë",
      s: "disa sekonda",
      ss: "%d sekonda",
      m: "një minutë",
      mm: "%d minuta",
      h: "një orë",
      hh: "%d orë",
      d: "një ditë",
      dd: "%d ditë",
      M: "një muaj",
      MM: "%d muaj",
      y: "një vit",
      yy: "%d vite"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var mr = {
    words: {
      ss: ["секунда", "секунде", "секунди"],
      m: ["један минут", "једне минуте"],
      mm: ["минут", "минуте", "минута"],
      h: ["један сат", "једног сата"],
      hh: ["сат", "сата", "сати"],
      dd: ["дан", "дана", "дана"],
      MM: ["месец", "месеца", "месеци"],
      yy: ["година", "године", "година"]
    },
    correctGrammaticalCase: function (e, t) {
      return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
    },
    translate: function (e, t, n) {
      var i = mr.words[n];
      return 1 === n.length ? t ? i[0] : i[1] : e + " " + mr.correctGrammaticalCase(e, i)
    }
  };
  n.defineLocale("sr-cyrl", {
    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
    monthsParseExact: !0,
    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D. M. YYYY.",
      LL: "D. MMMM YYYY.",
      LLL: "D. MMMM YYYY. H:mm",
      LLLL: "dddd, D. MMMM YYYY. H:mm"
    },
    calendar: {
      sameDay: "[данас у] LT",
      nextDay: "[сутра у] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[у] [недељу] [у] LT";
          case 3:
            return "[у] [среду] [у] LT";
          case 6:
            return "[у] [суботу] [у] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[у] dddd [у] LT"
        }
      },
      lastDay: "[јуче у] LT",
      lastWeek: function () {
        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "за %s",
      past: "пре %s",
      s: "неколико секунди",
      ss: mr.translate,
      m: mr.translate,
      mm: mr.translate,
      h: mr.translate,
      hh: mr.translate,
      d: "дан",
      dd: mr.translate,
      M: "месец",
      MM: mr.translate,
      y: "годину",
      yy: mr.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  });
  var gr = {
    words: {
      ss: ["sekunda", "sekunde", "sekundi"],
      m: ["jedan minut", "jedne minute"],
      mm: ["minut", "minute", "minuta"],
      h: ["jedan sat", "jednog sata"],
      hh: ["sat", "sata", "sati"],
      dd: ["dan", "dana", "dana"],
      MM: ["mesec", "meseca", "meseci"],
      yy: ["godina", "godine", "godina"]
    },
    correctGrammaticalCase: function (e, t) {
      return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
    },
    translate: function (e, t, n) {
      var i = gr.words[n];
      return 1 === n.length ? t ? i[0] : i[1] : e + " " + gr.correctGrammaticalCase(e, i)
    }
  };
  n.defineLocale("sr", {
    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "D. M. YYYY.",
      LL: "D. MMMM YYYY.",
      LLL: "D. MMMM YYYY. H:mm",
      LLLL: "dddd, D. MMMM YYYY. H:mm"
    },
    calendar: {
      sameDay: "[danas u] LT",
      nextDay: "[sutra u] LT",
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return "[u] [nedelju] [u] LT";
          case 3:
            return "[u] [sredu] [u] LT";
          case 6:
            return "[u] [subotu] [u] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[u] dddd [u] LT"
        }
      },
      lastDay: "[juče u] LT",
      lastWeek: function () {
        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "pre %s",
      s: "nekoliko sekundi",
      ss: gr.translate,
      m: gr.translate,
      mm: gr.translate,
      h: gr.translate,
      hh: gr.translate,
      d: "dan",
      dd: gr.translate,
      M: "mesec",
      MM: gr.translate,
      y: "godinu",
      yy: gr.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("ss", {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
    monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
    weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
    weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
    weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Namuhla nga] LT",
      nextDay: "[Kusasa nga] LT",
      nextWeek: "dddd [nga] LT",
      lastDay: "[Itolo nga] LT",
      lastWeek: "dddd [leliphelile] [nga] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "nga %s",
      past: "wenteka nga %s",
      s: "emizuzwana lomcane",
      ss: "%d mzuzwana",
      m: "umzuzu",
      mm: "%d emizuzu",
      h: "lihora",
      hh: "%d emahora",
      d: "lilanga",
      dd: "%d emalanga",
      M: "inyanga",
      MM: "%d tinyanga",
      y: "umnyaka",
      yy: "%d iminyaka"
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function (e, t, n) {
      return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
    },
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? 11 <= e ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: "%d",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("sv", {
    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
    weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
    weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [kl.] HH:mm",
      LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Idag] LT",
      nextDay: "[Imorgon] LT",
      lastDay: "[Igår] LT",
      nextWeek: "[På] dddd LT",
      lastWeek: "[I] dddd[s] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "om %s",
      past: "för %s sedan",
      s: "några sekunder",
      ss: "%d sekunder",
      m: "en minut",
      mm: "%d minuter",
      h: "en timme",
      hh: "%d timmar",
      d: "en dag",
      dd: "%d dagar",
      M: "en månad",
      MM: "%d månader",
      y: "ett år",
      yy: "%d år"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) || 1 != t && 2 != t ? ":e" : ":a")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("sw", {
    months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
    weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
    weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "hh:mm A",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[leo saa] LT",
      nextDay: "[kesho saa] LT",
      nextWeek: "[wiki ijayo] dddd [saat] LT",
      lastDay: "[jana] LT",
      lastWeek: "[wiki iliyopita] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s baadaye",
      past: "tokea %s",
      s: "hivi punde",
      ss: "sekunde %d",
      m: "dakika moja",
      mm: "dakika %d",
      h: "saa limoja",
      hh: "masaa %d",
      d: "siku moja",
      dd: "siku %d",
      M: "mwezi mmoja",
      MM: "miezi %d",
      y: "mwaka mmoja",
      yy: "miaka %d"
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var vr = {
      1: "௧",
      2: "௨",
      3: "௩",
      4: "௪",
      5: "௫",
      6: "௬",
      7: "௭",
      8: "௮",
      9: "௯",
      0: "௦"
    },
    yr = {
      "௧": "1",
      "௨": "2",
      "௩": "3",
      "௪": "4",
      "௫": "5",
      "௬": "6",
      "௭": "7",
      "௮": "8",
      "௯": "9",
      "௦": "0"
    };
  n.defineLocale("ta", {
    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, HH:mm",
      LLLL: "dddd, D MMMM YYYY, HH:mm"
    },
    calendar: {
      sameDay: "[இன்று] LT",
      nextDay: "[நாளை] LT",
      nextWeek: "dddd, LT",
      lastDay: "[நேற்று] LT",
      lastWeek: "[கடந்த வாரம்] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s இல்",
      past: "%s முன்",
      s: "ஒரு சில விநாடிகள்",
      ss: "%d விநாடிகள்",
      m: "ஒரு நிமிடம்",
      mm: "%d நிமிடங்கள்",
      h: "ஒரு மணி நேரம்",
      hh: "%d மணி நேரம்",
      d: "ஒரு நாள்",
      dd: "%d நாட்கள்",
      M: "ஒரு மாதம்",
      MM: "%d மாதங்கள்",
      y: "ஒரு வருடம்",
      yy: "%d ஆண்டுகள்"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
    ordinal: function (e) {
      return e + "வது"
    },
    preparse: function (e) {
      return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, (function (e) {
        return yr[e]
      }))
    },
    postformat: function (e) {
      return e.replace(/\d/g, (function (e) {
        return vr[e]
      }))
    },
    meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
    meridiem: function (e, t, n) {
      return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
    },
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && 10 <= e ? e : e + 12
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("te", {
    months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
    monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
    monthsParseExact: !0,
    weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
    weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
    weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[నేడు] LT",
      nextDay: "[రేపు] LT",
      nextWeek: "dddd, LT",
      lastDay: "[నిన్న] LT",
      lastWeek: "[గత] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s లో",
      past: "%s క్రితం",
      s: "కొన్ని క్షణాలు",
      ss: "%d సెకన్లు",
      m: "ఒక నిమిషం",
      mm: "%d నిమిషాలు",
      h: "ఒక గంట",
      hh: "%d గంటలు",
      d: "ఒక రోజు",
      dd: "%d రోజులు",
      M: "ఒక నెల",
      MM: "%d నెలలు",
      y: "ఒక సంవత్సరం",
      yy: "%d సంవత్సరాలు"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
    ordinal: "%dవ",
    meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? 10 <= e ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), n.defineLocale("tet", {
    months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
    weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
    weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
    weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Ohin iha] LT",
      nextDay: "[Aban iha] LT",
      nextWeek: "dddd [iha] LT",
      lastDay: "[Horiseik iha] LT",
      lastWeek: "dddd [semana kotuk] [iha] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "iha %s",
      past: "%s liuba",
      s: "segundu balun",
      ss: "segundu %d",
      m: "minutu ida",
      mm: "minutu %d",
      h: "oras ida",
      hh: "oras %d",
      d: "loron ida",
      dd: "loron %d",
      M: "fulan ida",
      MM: "fulan %d",
      y: "tinan ida",
      yy: "tinan %d"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var br = {
    0: "-ум",
    1: "-ум",
    2: "-юм",
    3: "-юм",
    4: "-ум",
    5: "-ум",
    6: "-ум",
    7: "-ум",
    8: "-ум",
    9: "-ум",
    10: "-ум",
    12: "-ум",
    13: "-ум",
    20: "-ум",
    30: "-юм",
    40: "-ум",
    50: "-ум",
    60: "-ум",
    70: "-ум",
    80: "-ум",
    90: "-ум",
    100: "-ум"
  };
  n.defineLocale("tg", {
    months: {
      format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
      standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
    },
    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
    weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
    weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
    weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Имрӯз соати] LT",
      nextDay: "[Фардо соати] LT",
      lastDay: "[Дирӯз соати] LT",
      nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
      lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "баъди %s",
      past: "%s пеш",
      s: "якчанд сония",
      m: "як дақиқа",
      mm: "%d дақиқа",
      h: "як соат",
      hh: "%d соат",
      d: "як рӯз",
      dd: "%d рӯз",
      M: "як моҳ",
      MM: "%d моҳ",
      y: "як сол",
      yy: "%d сол"
    },
    meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? 11 <= e ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
    ordinal: function (e) {
      return e + (br[e] || br[e % 10] || br[100 <= e ? 100 : null])
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("th", {
    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
    monthsParseExact: !0,
    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY เวลา H:mm",
      LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
    },
    meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
    isPM: function (e) {
      return "หลังเที่ยง" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
    },
    calendar: {
      sameDay: "[วันนี้ เวลา] LT",
      nextDay: "[พรุ่งนี้ เวลา] LT",
      nextWeek: "dddd[หน้า เวลา] LT",
      lastDay: "[เมื่อวานนี้ เวลา] LT",
      lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "อีก %s",
      past: "%sที่แล้ว",
      s: "ไม่กี่วินาที",
      ss: "%d วินาที",
      m: "1 นาที",
      mm: "%d นาที",
      h: "1 ชั่วโมง",
      hh: "%d ชั่วโมง",
      d: "1 วัน",
      dd: "%d วัน",
      w: "1 สัปดาห์",
      ww: "%d สัปดาห์",
      M: "1 เดือน",
      MM: "%d เดือน",
      y: "1 ปี",
      yy: "%d ปี"
    }
  });
  var xr = {
    1: "'inji",
    5: "'inji",
    8: "'inji",
    70: "'inji",
    80: "'inji",
    2: "'nji",
    7: "'nji",
    20: "'nji",
    50: "'nji",
    3: "'ünji",
    4: "'ünji",
    100: "'ünji",
    6: "'njy",
    9: "'unjy",
    10: "'unjy",
    30: "'unjy",
    60: "'ynjy",
    90: "'ynjy"
  };
  n.defineLocale("tk", {
    months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
    monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
    weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
    weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
    weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[bugün sagat] LT",
      nextDay: "[ertir sagat] LT",
      nextWeek: "[indiki] dddd [sagat] LT",
      lastDay: "[düýn] LT",
      lastWeek: "[geçen] dddd [sagat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s soň",
      past: "%s öň",
      s: "birnäçe sekunt",
      m: "bir minut",
      mm: "%d minut",
      h: "bir sagat",
      hh: "%d sagat",
      d: "bir gün",
      dd: "%d gün",
      M: "bir aý",
      MM: "%d aý",
      y: "bir ýyl",
      yy: "%d ýyl"
    },
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "Do":
        case "DD":
          return e;
        default:
          if (0 === e) return e + "'unjy";
          var n = e % 10;
          return e + (xr[n] || xr[e % 100 - n] || xr[100 <= e ? 100 : null])
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("tl-ph", {
    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "MM/D/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY HH:mm",
      LLLL: "dddd, MMMM DD, YYYY HH:mm"
    },
    calendar: {
      sameDay: "LT [ngayong araw]",
      nextDay: "[Bukas ng] LT",
      nextWeek: "LT [sa susunod na] dddd",
      lastDay: "LT [kahapon]",
      lastWeek: "LT [noong nakaraang] dddd",
      sameElse: "L"
    },
    relativeTime: {
      future: "sa loob ng %s",
      past: "%s ang nakalipas",
      s: "ilang segundo",
      ss: "%d segundo",
      m: "isang minuto",
      mm: "%d minuto",
      h: "isang oras",
      hh: "%d oras",
      d: "isang araw",
      dd: "%d araw",
      M: "isang buwan",
      MM: "%d buwan",
      y: "isang taon",
      yy: "%d taon"
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (e) {
      return e
    },
    week: {
      dow: 1,
      doy: 4
    }
  });
  var _r = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

  function wr(e, t, n, i) {
    var a = function (e) {
      var t = Math.floor(e % 1e3 / 100),
        n = Math.floor(e % 100 / 10),
        i = e % 10,
        a = "";
      return 0 < t && (a += _r[t] + "vatlh"), 0 < n && (a += ("" !== a ? " " : "") + _r[n] + "maH"), 0 < i && (a += ("" !== a ? " " : "") + _r[i]), "" === a ? "pagh" : a
    }(e);
    switch (n) {
      case "ss":
        return a + " lup";
      case "mm":
        return a + " tup";
      case "hh":
        return a + " rep";
      case "dd":
        return a + " jaj";
      case "MM":
        return a + " jar";
      case "yy":
        return a + " DIS"
    }
  }
  n.defineLocale("tlh", {
    months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
    monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
    monthsParseExact: !0,
    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[DaHjaj] LT",
      nextDay: "[wa’leS] LT",
      nextWeek: "LLL",
      lastDay: "[wa’Hu’] LT",
      lastWeek: "LLL",
      sameElse: "L"
    },
    relativeTime: {
      future: function (e) {
        var t = e;
        return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
      },
      past: function (e) {
        var t = e;
        return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
      },
      s: "puS lup",
      ss: wr,
      m: "wa’ tup",
      mm: wr,
      h: "wa’ rep",
      hh: wr,
      d: "wa’ jaj",
      dd: wr,
      M: "wa’ jar",
      MM: wr,
      y: "wa’ DIS",
      yy: wr
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  });
  var kr = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'üncü",
    4: "'üncü",
    100: "'üncü",
    6: "'ncı",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'ıncı",
    90: "'ıncı"
  };

  function Mr(e, t, n, i) {
    var a = {
      s: ["viensas secunds", "'iensas secunds"],
      ss: [e + " secunds", e + " secunds"],
      m: ["'n míut", "'iens míut"],
      mm: [e + " míuts", e + " míuts"],
      h: ["'n þora", "'iensa þora"],
      hh: [e + " þoras", e + " þoras"],
      d: ["'n ziua", "'iensa ziua"],
      dd: [e + " ziuas", e + " ziuas"],
      M: ["'n mes", "'iens mes"],
      MM: [e + " mesen", e + " mesen"],
      y: ["'n ar", "'iens ar"],
      yy: [e + " ars", e + " ars"]
    };
    return i || t ? a[n][0] : a[n][1]
  }

  function Lr(e, t, n) {
    var i, a;
    return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (i = +e, a = {
      ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
      mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
      hh: t ? "година_години_годин" : "годину_години_годин",
      dd: "день_дні_днів",
      MM: "місяць_місяці_місяців",
      yy: "рік_роки_років"
    } [n].split("_"), i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
  }

  function Sr(e) {
    return function () {
      return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
    }
  }
  n.defineLocale("tr", {
    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
    meridiem: function (e, t, n) {
      return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
    },
    meridiemParse: /\xf6\xf6|\xd6\xd6|\xf6s|\xd6S/,
    isPM: function (e) {
      return "ös" === e || "ÖS" === e
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[bugün saat] LT",
      nextDay: "[yarın saat] LT",
      nextWeek: "[gelecek] dddd [saat] LT",
      lastDay: "[dün] LT",
      lastWeek: "[geçen] dddd [saat] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s sonra",
      past: "%s önce",
      s: "birkaç saniye",
      ss: "%d saniye",
      m: "bir dakika",
      mm: "%d dakika",
      h: "bir saat",
      hh: "%d saat",
      d: "bir gün",
      dd: "%d gün",
      w: "bir hafta",
      ww: "%d hafta",
      M: "bir ay",
      MM: "%d ay",
      y: "bir yıl",
      yy: "%d yıl"
    },
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "Do":
        case "DD":
          return e;
        default:
          if (0 === e) return e + "'ıncı";
          var n = e % 10;
          return e + (kr[n] || kr[e % 100 - n] || kr[100 <= e ? 100 : null])
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("tzl", {
    months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
    monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
    weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
    weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
    weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM [dallas] YYYY",
      LLL: "D. MMMM [dallas] YYYY HH.mm",
      LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function (e) {
      return "d'o" === e.toLowerCase()
    },
    meridiem: function (e, t, n) {
      return 11 < e ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
    },
    calendar: {
      sameDay: "[oxhi à] LT",
      nextDay: "[demà à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[ieiri à] LT",
      lastWeek: "[sür el] dddd [lasteu à] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "osprei %s",
      past: "ja%s",
      s: Mr,
      ss: Mr,
      m: Mr,
      mm: Mr,
      h: Mr,
      hh: Mr,
      d: Mr,
      dd: Mr,
      M: Mr,
      MM: Mr,
      y: Mr,
      yy: Mr
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("tzm-latn", {
    months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
    monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[asdkh g] LT",
      nextDay: "[aska g] LT",
      nextWeek: "dddd [g] LT",
      lastDay: "[assant g] LT",
      lastWeek: "dddd [g] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "dadkh s yan %s",
      past: "yan %s",
      s: "imik",
      ss: "%d imik",
      m: "minuḍ",
      mm: "%d minuḍ",
      h: "saɛa",
      hh: "%d tassaɛin",
      d: "ass",
      dd: "%d ossan",
      M: "ayowr",
      MM: "%d iyyirn",
      y: "asgas",
      yy: "%d isgasn"
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), n.defineLocale("tzm", {
    months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
    monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
    weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
    weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
    weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
      nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
      nextWeek: "dddd [ⴴ] LT",
      lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
      lastWeek: "dddd [ⴴ] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
      past: "ⵢⴰⵏ %s",
      s: "ⵉⵎⵉⴽ",
      ss: "%d ⵉⵎⵉⴽ",
      m: "ⵎⵉⵏⵓⴺ",
      mm: "%d ⵎⵉⵏⵓⴺ",
      h: "ⵙⴰⵄⴰ",
      hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
      d: "ⴰⵙⵙ",
      dd: "%d oⵙⵙⴰⵏ",
      M: "ⴰⵢoⵓⵔ",
      MM: "%d ⵉⵢⵢⵉⵔⵏ",
      y: "ⴰⵙⴳⴰⵙ",
      yy: "%d ⵉⵙⴳⴰⵙⵏ"
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), n.defineLocale("ug-cn", {
    months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
    monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
    weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
    weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
    weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
      LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
      LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
    },
    meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t || "چۈشتىن كېيىن" !== t && "كەچ" !== t && 11 <= e ? e : e + 12
    },
    meridiem: function (e, t, n) {
      var i = 100 * e + t;
      return i < 600 ? "يېرىم كېچە" : i < 900 ? "سەھەر" : i < 1130 ? "چۈشتىن بۇرۇن" : i < 1230 ? "چۈش" : i < 1800 ? "چۈشتىن كېيىن" : "كەچ"
    },
    calendar: {
      sameDay: "[بۈگۈن سائەت] LT",
      nextDay: "[ئەتە سائەت] LT",
      nextWeek: "[كېلەركى] dddd [سائەت] LT",
      lastDay: "[تۆنۈگۈن] LT",
      lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s كېيىن",
      past: "%s بۇرۇن",
      s: "نەچچە سېكونت",
      ss: "%d سېكونت",
      m: "بىر مىنۇت",
      mm: "%d مىنۇت",
      h: "بىر سائەت",
      hh: "%d سائەت",
      d: "بىر كۈن",
      dd: "%d كۈن",
      M: "بىر ئاي",
      MM: "%d ئاي",
      y: "بىر يىل",
      yy: "%d يىل"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "-كۈنى";
        case "w":
        case "W":
          return e + "-ھەپتە";
        default:
          return e
      }
    },
    preparse: function (e) {
      return e.replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("uk", {
    months: {
      format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
      standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
    },
    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
    weekdays: function (e, t) {
      var n = {
        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
      };
      return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
    },
    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY р.",
      LLL: "D MMMM YYYY р., HH:mm",
      LLLL: "dddd, D MMMM YYYY р., HH:mm"
    },
    calendar: {
      sameDay: Sr("[Сьогодні "),
      nextDay: Sr("[Завтра "),
      lastDay: Sr("[Вчора "),
      nextWeek: Sr("[У] dddd ["),
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return Sr("[Минулої] dddd [").call(this);
          case 1:
          case 2:
          case 4:
            return Sr("[Минулого] dddd [").call(this)
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "за %s",
      past: "%s тому",
      s: "декілька секунд",
      ss: Lr,
      m: Lr,
      mm: Lr,
      h: "годину",
      hh: Lr,
      d: "день",
      dd: Lr,
      M: "місяць",
      MM: Lr,
      y: "рік",
      yy: Lr
    },
    meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
    isPM: function (e) {
      return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
    ordinal: function (e, t) {
      switch (t) {
        case "M":
        case "d":
        case "DDD":
        case "w":
        case "W":
          return e + "-й";
        case "D":
          return e + "-го";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  var Ar = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    Tr = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  return n.defineLocale("ur", {
    months: Ar,
    monthsShort: Ar,
    weekdays: Tr,
    weekdaysShort: Tr,
    weekdaysMin: Tr,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd، D MMMM YYYY HH:mm"
    },
    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
    isPM: function (e) {
      return "شام" === e
    },
    meridiem: function (e, t, n) {
      return e < 12 ? "صبح" : "شام"
    },
    calendar: {
      sameDay: "[آج بوقت] LT",
      nextDay: "[کل بوقت] LT",
      nextWeek: "dddd [بوقت] LT",
      lastDay: "[گذشتہ روز بوقت] LT",
      lastWeek: "[گذشتہ] dddd [بوقت] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s بعد",
      past: "%s قبل",
      s: "چند سیکنڈ",
      ss: "%d سیکنڈ",
      m: "ایک منٹ",
      mm: "%d منٹ",
      h: "ایک گھنٹہ",
      hh: "%d گھنٹے",
      d: "ایک دن",
      dd: "%d دن",
      M: "ایک ماہ",
      MM: "%d ماہ",
      y: "ایک سال",
      yy: "%d سال"
    },
    preparse: function (e) {
      return e.replace(/\u060c/g, ",")
    },
    postformat: function (e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("uz-latn", {
    months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
    monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
    weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
    weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
    weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "D MMMM YYYY, dddd HH:mm"
    },
    calendar: {
      sameDay: "[Bugun soat] LT [da]",
      nextDay: "[Ertaga] LT [da]",
      nextWeek: "dddd [kuni soat] LT [da]",
      lastDay: "[Kecha soat] LT [da]",
      lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
      sameElse: "L"
    },
    relativeTime: {
      future: "Yaqin %s ichida",
      past: "Bir necha %s oldin",
      s: "soniya",
      ss: "%d soniya",
      m: "bir daqiqa",
      mm: "%d daqiqa",
      h: "bir soat",
      hh: "%d soat",
      d: "bir kun",
      dd: "%d kun",
      M: "bir oy",
      MM: "%d oy",
      y: "bir yil",
      yy: "%d yil"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("uz", {
    months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
    weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
    weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
    weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "D MMMM YYYY, dddd HH:mm"
    },
    calendar: {
      sameDay: "[Бугун соат] LT [да]",
      nextDay: "[Эртага] LT [да]",
      nextWeek: "dddd [куни соат] LT [да]",
      lastDay: "[Кеча соат] LT [да]",
      lastWeek: "[Утган] dddd [куни соат] LT [да]",
      sameElse: "L"
    },
    relativeTime: {
      future: "Якин %s ичида",
      past: "Бир неча %s олдин",
      s: "фурсат",
      ss: "%d фурсат",
      m: "бир дакика",
      mm: "%d дакика",
      h: "бир соат",
      hh: "%d соат",
      d: "бир кун",
      dd: "%d кун",
      M: "бир ой",
      MM: "%d ой",
      y: "бир йил",
      yy: "%d йил"
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), n.defineLocale("vi", {
    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
    monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
    monthsParseExact: !0,
    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysParseExact: !0,
    meridiemParse: /sa|ch/i,
    isPM: function (e) {
      return /^ch$/i.test(e)
    },
    meridiem: function (e, t, n) {
      return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
    },
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM [năm] YYYY",
      LLL: "D MMMM [năm] YYYY HH:mm",
      LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
      l: "DD/M/YYYY",
      ll: "D MMM YYYY",
      lll: "D MMM YYYY HH:mm",
      llll: "ddd, D MMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Hôm nay lúc] LT",
      nextDay: "[Ngày mai lúc] LT",
      nextWeek: "dddd [tuần tới lúc] LT",
      lastDay: "[Hôm qua lúc] LT",
      lastWeek: "dddd [tuần trước lúc] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s tới",
      past: "%s trước",
      s: "vài giây",
      ss: "%d giây",
      m: "một phút",
      mm: "%d phút",
      h: "một giờ",
      hh: "%d giờ",
      d: "một ngày",
      dd: "%d ngày",
      w: "một tuần",
      ww: "%d tuần",
      M: "một tháng",
      MM: "%d tháng",
      y: "một năm",
      yy: "%d năm"
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (e) {
      return e
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("x-pseudo", {
    months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
    monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
    monthsParseExact: !0,
    weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
    weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
    weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[T~ódá~ý át] LT",
      nextDay: "[T~ómó~rró~w át] LT",
      nextWeek: "dddd [át] LT",
      lastDay: "[Ý~ést~érdá~ý át] LT",
      lastWeek: "[L~ást] dddd [át] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "í~ñ %s",
      past: "%s á~gó",
      s: "á ~féw ~sécó~ñds",
      ss: "%d s~écóñ~ds",
      m: "á ~míñ~úté",
      mm: "%d m~íñú~tés",
      h: "á~ñ hó~úr",
      hh: "%d h~óúrs",
      d: "á ~dáý",
      dd: "%d d~áýs",
      M: "á ~móñ~th",
      MM: "%d m~óñt~hs",
      y: "á ~ýéár",
      yy: "%d ý~éárs"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10;
      return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("yo", {
    months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
    monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
    weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
    weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
    weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendar: {
      sameDay: "[Ònì ni] LT",
      nextDay: "[Ọ̀la ni] LT",
      nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
      lastDay: "[Àna ni] LT",
      lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "ní %s",
      past: "%s kọjá",
      s: "ìsẹjú aayá die",
      ss: "aayá %d",
      m: "ìsẹjú kan",
      mm: "ìsẹjú %d",
      h: "wákati kan",
      hh: "wákati %d",
      d: "ọjọ́ kan",
      dd: "ọjọ́ %d",
      M: "osù kan",
      MM: "osù %d",
      y: "ọdún kan",
      yy: "ọdún %d"
    },
    dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
    ordinal: "ọjọ́ %d",
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("zh-cn", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日Ah点mm分",
      LLLL: "YYYY年M月D日ddddAh点mm分",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t || "下午" !== t && "晚上" !== t && 11 <= e ? e : e + 12
    },
    meridiem: function (e, t, n) {
      var i = 100 * e + t;
      return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
    },
    calendar: {
      sameDay: "[今天]LT",
      nextDay: "[明天]LT",
      nextWeek: function (e) {
        return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
      },
      lastDay: "[昨天]LT",
      lastWeek: function (e) {
        return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
      },
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        case "M":
          return e + "月";
        case "w":
        case "W":
          return e + "周";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s后",
      past: "%s前",
      s: "几秒",
      ss: "%d 秒",
      m: "1 分钟",
      mm: "%d 分钟",
      h: "1 小时",
      hh: "%d 小时",
      d: "1 天",
      dd: "%d 天",
      w: "1 周",
      ww: "%d 周",
      M: "1 个月",
      MM: "%d 个月",
      y: "1 年",
      yy: "%d 年"
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), n.defineLocale("zh-hk", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日dddd HH:mm",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      var i = 100 * e + t;
      return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1200 ? "上午" : 1200 === i ? "中午" : i < 1800 ? "下午" : "晚上"
    },
    calendar: {
      sameDay: "[今天]LT",
      nextDay: "[明天]LT",
      nextWeek: "[下]ddddLT",
      lastDay: "[昨天]LT",
      lastWeek: "[上]ddddLT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        case "M":
          return e + "月";
        case "w":
        case "W":
          return e + "週";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "幾秒",
      ss: "%d 秒",
      m: "1 分鐘",
      mm: "%d 分鐘",
      h: "1 小時",
      hh: "%d 小時",
      d: "1 天",
      dd: "%d 天",
      M: "1 個月",
      MM: "%d 個月",
      y: "1 年",
      yy: "%d 年"
    }
  }), n.defineLocale("zh-mo", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日dddd HH:mm",
      l: "D/M/YYYY",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      var i = 100 * e + t;
      return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
    },
    calendar: {
      sameDay: "[今天] LT",
      nextDay: "[明天] LT",
      nextWeek: "[下]dddd LT",
      lastDay: "[昨天] LT",
      lastWeek: "[上]dddd LT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        case "M":
          return e + "月";
        case "w":
        case "W":
          return e + "週";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s內",
      past: "%s前",
      s: "幾秒",
      ss: "%d 秒",
      m: "1 分鐘",
      mm: "%d 分鐘",
      h: "1 小時",
      hh: "%d 小時",
      d: "1 天",
      dd: "%d 天",
      M: "1 個月",
      MM: "%d 個月",
      y: "1 年",
      yy: "%d 年"
    }
  }), n.defineLocale("zh-tw", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日dddd HH:mm",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function (e, t) {
      return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
    },
    meridiem: function (e, t, n) {
      var i = 100 * e + t;
      return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
    },
    calendar: {
      sameDay: "[今天] LT",
      nextDay: "[明天] LT",
      nextWeek: "[下]dddd LT",
      lastDay: "[昨天] LT",
      lastWeek: "[上]dddd LT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function (e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        case "M":
          return e + "月";
        case "w":
        case "W":
          return e + "週";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "幾秒",
      ss: "%d 秒",
      m: "1 分鐘",
      mm: "%d 分鐘",
      h: "1 小時",
      hh: "%d 小時",
      d: "1 天",
      dd: "%d 天",
      M: "1 個月",
      MM: "%d 個月",
      y: "1 年",
      yy: "%d 年"
    }
  }), n.locale("en"), n
})),
function (e) {
  "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e()
}((function () {
  "use strict";
  var e = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

  function t(e) {
    return e.split("").reverse().join("")
  }

  function n(e, t) {
    return e.substring(0, t.length) === t
  }

  function i(e, t, n) {
    if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
  }

  function a(e) {
    return "number" == typeof e && isFinite(e)
  }

  function r(e, n, i, r, o, s, l, c, u, d, h, f) {
    var p, m, g, v, y, b = f,
      x = "",
      _ = "";
    return s && (f = s(f)), !!a(f) && (!1 !== e && 0 === parseFloat(f.toFixed(e)) && (f = 0), f < 0 && (p = !0, f = Math.abs(f)), !1 !== e && (y = e, v = (v = f).toString().split("e"), f = (+((v = (v = Math.round(+(v[0] + "e" + (v[1] ? +v[1] + y : y)))).toString().split("e"))[0] + "e" + (v[1] ? +v[1] - y : -y))).toFixed(y)), -1 !== (f = f.toString()).indexOf(".") ? (g = (m = f.split("."))[0], i && (x = i + m[1])) : g = f, n && (g = t(g).match(/.{1,3}/g), g = t(g.join(t(n)))), p && c && (_ += c), r && (_ += r), p && u && (_ += u), _ += g, _ += x, o && (_ += o), d && (_ = d(_, b)), _)
  }

  function o(e, t, i, r, o, s, l, c, u, d, h, f) {
    var p, m = "";
    return h && (f = h(f)), !(!f || "string" != typeof f) && (c && n(f, c) && (f = f.replace(c, ""), p = !0), r && n(f, r) && (f = f.replace(r, "")), u && n(f, u) && (f = f.replace(u, ""), p = !0), o && function (e, t) {
      return e.slice(-1 * t.length) === t
    }(f, o) && (f = f.slice(0, -1 * o.length)), t && (f = f.split(t).join("")), i && (f = f.replace(i, ".")), p && (m += "-"), "" !== (m = (m += f).replace(/[^0-9\.\-.]/g, "")) && (m = Number(m), l && (m = l(m)), !!a(m) && m))
  }

  function s(t, n, i) {
    var a, r = [];
    for (a = 0; a < e.length; a += 1) r.push(t[e[a]]);
    return r.push(i), n.apply("", r)
  }
  return function t(n) {
    if (!(this instanceof t)) return new t(n);
    "object" == typeof n && (n = function (t) {
      var n, a, r, o = {};
      for (void 0 === t.suffix && (t.suffix = t.postfix), n = 0; n < e.length; n += 1)
        if (void 0 === (r = t[a = e[n]])) "negative" !== a || o.negativeBefore ? "mark" === a && "." !== o.thousand ? o[a] = "." : o[a] = !1 : o[a] = "-";
        else if ("decimals" === a) {
        if (!(r >= 0 && r < 8)) throw new Error(a);
        o[a] = r
      } else if ("encoder" === a || "decoder" === a || "edit" === a || "undo" === a) {
        if ("function" != typeof r) throw new Error(a);
        o[a] = r
      } else {
        if ("string" != typeof r) throw new Error(a);
        o[a] = r
      }
      return i(o, "mark", "thousand"), i(o, "prefix", "negative"), i(o, "prefix", "negativeBefore"), o
    }(n), this.to = function (e) {
      return s(n, r, e)
    }, this.from = function (e) {
      return s(n, o, e)
    })
  }
})),
function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {
    return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
  } : e(jQuery)
}((function (e) {
  var t = function () {
      if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
      var n;
      return function () {
          /**
           * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
           * Released under MIT license, http://github.com/requirejs/almond/LICENSE
           */
          var e, n, i;
          t && t.requirejs || (t ? n = t : t = {}, function (t) {
            var a, r, o, s, l = {},
              c = {},
              u = {},
              d = {},
              h = Object.prototype.hasOwnProperty,
              f = [].slice,
              p = /\.js$/;

            function m(e, t) {
              return h.call(e, t)
            }

            function g(e, t) {
              var n, i, a, r, o, s, l, c, d, h, f, m = t && t.split("/"),
                g = u.map,
                v = g && g["*"] || {};
              if (e) {
                for (o = (e = e.split("/")).length - 1, u.nodeIdCompat && p.test(e[o]) && (e[o] = e[o].replace(p, "")), "." === e[0].charAt(0) && m && (e = m.slice(0, m.length - 1).concat(e)), d = 0; d < e.length; d++)
                  if ("." === (f = e[d])) e.splice(d, 1), d -= 1;
                  else if (".." === f) {
                  if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                  d > 0 && (e.splice(d - 1, 2), d -= 2)
                }
                e = e.join("/")
              }
              if ((m || v) && g) {
                for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                  if (i = n.slice(0, d).join("/"), m)
                    for (h = m.length; h > 0; h -= 1)
                      if ((a = g[m.slice(0, h).join("/")]) && (a = a[i])) {
                        r = a, s = d;
                        break
                      } if (r) break;
                  !l && v && v[i] && (l = v[i], c = d)
                }!r && l && (r = l, s = c), r && (n.splice(0, s, r), e = n.join("/"))
              }
              return e
            }

            function v(e, n) {
              return function () {
                var i = f.call(arguments, 0);
                return "string" != typeof i[0] && 1 === i.length && i.push(null), r.apply(t, i.concat([e, n]))
              }
            }

            function y(e) {
              return function (t) {
                l[e] = t
              }
            }

            function b(e) {
              if (m(c, e)) {
                var n = c[e];
                delete c[e], d[e] = !0, a.apply(t, n)
              }
              if (!m(l, e) && !m(d, e)) throw new Error("No " + e);
              return l[e]
            }

            function x(e) {
              var t, n = e ? e.indexOf("!") : -1;
              return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function _(e) {
              return e ? x(e) : []
            }

            function w(e) {
              return function () {
                return u && u.config && u.config[e] || {}
              }
            }
            o = function (e, t) {
              var n, i, a = x(e),
                r = a[0],
                o = t[1];
              return e = a[1], r && (n = b(r = g(r, o))), r ? e = n && n.normalize ? n.normalize(e, (i = o, function (e) {
                return g(e, i)
              })) : g(e, o) : (r = (a = x(e = g(e, o)))[0], e = a[1], r && (n = b(r))), {
                f: r ? r + "!" + e : e,
                n: e,
                pr: r,
                p: n
              }
            }, s = {
              require: function (e) {
                return v(e)
              },
              exports: function (e) {
                var t = l[e];
                return void 0 !== t ? t : l[e] = {}
              },
              module: function (e) {
                return {
                  id: e,
                  uri: "",
                  exports: l[e],
                  config: w(e)
                }
              }
            }, a = function (e, n, i, a) {
              var r, u, h, f, p, g, x, w = [],
                k = typeof i;
              if (g = _(a = a || e), "undefined" === k || "function" === k) {
                for (n = !n.length && i.length ? ["require", "exports", "module"] : n, p = 0; p < n.length; p += 1)
                  if ("require" === (u = (f = o(n[p], g)).f)) w[p] = s.require(e);
                  else if ("exports" === u) w[p] = s.exports(e), x = !0;
                else if ("module" === u) r = w[p] = s.module(e);
                else if (m(l, u) || m(c, u) || m(d, u)) w[p] = b(u);
                else {
                  if (!f.p) throw new Error(e + " missing " + u);
                  f.p.load(f.n, v(a, !0), y(u), {}), w[p] = l[u]
                }
                h = i ? i.apply(l[e], w) : void 0, e && (r && r.exports !== t && r.exports !== l[e] ? l[e] = r.exports : h === t && x || (l[e] = h))
              } else e && (l[e] = i)
            }, e = n = r = function (e, n, i, l, c) {
              if ("string" == typeof e) return s[e] ? s[e](n) : b(o(e, _(n)).f);
              if (!e.splice) {
                if ((u = e).deps && r(u.deps, u.callback), !n) return;
                n.splice ? (e = n, n = i, i = null) : e = t
              }
              return n = n || function () {}, "function" == typeof i && (i = l, l = c), l ? a(t, e, n, i) : setTimeout((function () {
                a(t, e, n, i)
              }), 4), r
            }, r.config = function (e) {
              return r(e)
            }, e._defined = l, (i = function (e, t, n) {
              if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
              t.splice || (n = t, t = []), m(l, e) || m(c, e) || (c[e] = [e, t, n])
            }).amd = {
              jQuery: !0
            }
          }(), t.requirejs = e, t.require = n, t.define = i)
        }(), t.define("almond", (function () {})), t.define("jquery", [], (function () {
          var t = e || $;
          return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        })), t.define("select2/utils", ["jquery"], (function (e) {
          var t = {};

          function n(e) {
            var t = e.prototype,
              n = [];
            for (var i in t) {
              "function" == typeof t[i] && ("constructor" !== i && n.push(i))
            }
            return n
          }
          t.Extend = function (e, t) {
            var n = {}.hasOwnProperty;

            function i() {
              this.constructor = e
            }
            for (var a in t) n.call(t, a) && (e[a] = t[a]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
          }, t.Decorate = function (e, t) {
            var i = n(t),
              a = n(e);

            function r() {
              var n = Array.prototype.unshift,
                i = t.prototype.constructor.length,
                a = e.prototype.constructor;
              i > 0 && (n.call(arguments, e.prototype.constructor), a = t.prototype.constructor), a.apply(this, arguments)
            }
            t.displayName = e.displayName, r.prototype = new function () {
              this.constructor = r
            };
            for (var o = 0; o < a.length; o++) {
              var s = a[o];
              r.prototype[s] = e.prototype[s]
            }
            for (var l = function (e) {
                var n = function () {};
                e in r.prototype && (n = r.prototype[e]);
                var i = t.prototype[e];
                return function () {
                  var e = Array.prototype.unshift;
                  return e.call(arguments, n), i.apply(this, arguments)
                }
              }, c = 0; c < i.length; c++) {
              var u = i[c];
              r.prototype[u] = l(u)
            }
            return r
          };
          var i = function () {
            this.listeners = {}
          };
          i.prototype.on = function (e, t) {
            this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
          }, i.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
          }, i.prototype.invoke = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
          }, t.Observable = i, t.generateChars = function (e) {
            for (var t = "", n = 0; n < e; n++) {
              t += Math.floor(36 * Math.random()).toString(36)
            }
            return t
          }, t.bind = function (e, t) {
            return function () {
              e.apply(t, arguments)
            }
          }, t._convertData = function (e) {
            for (var t in e) {
              var n = t.split("-"),
                i = e;
              if (1 !== n.length) {
                for (var a = 0; a < n.length; a++) {
                  var r = n[a];
                  (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), a == n.length - 1 && (i[r] = e[t]), i = i[r]
                }
                delete e[t]
              }
            }
            return e
          }, t.hasScroll = function (t, n) {
            var i = e(n),
              a = n.style.overflowX,
              r = n.style.overflowY;
            return (a !== r || "hidden" !== r && "visible" !== r) && ("scroll" === a || "scroll" === r || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
          }, t.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;"
            };
            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function (e) {
              return t[e]
            }))
          }, t.__cache = {};
          var a = 0;
          return t.GetUniqueElementId = function (e) {
            var n = e.getAttribute("data-select2-id");
            return null != n || (n = e.id ? "select2-data-" + e.id : "select2-data-" + (++a).toString() + "-" + t.generateChars(4), e.setAttribute("data-select2-id", n)), n
          }, t.StoreData = function (e, n, i) {
            var a = t.GetUniqueElementId(e);
            t.__cache[a] || (t.__cache[a] = {}), t.__cache[a][n] = i
          }, t.GetData = function (n, i) {
            var a = t.GetUniqueElementId(n);
            return i ? t.__cache[a] && null != t.__cache[a][i] ? t.__cache[a][i] : e(n).data(i) : t.__cache[a]
          }, t.RemoveData = function (e) {
            var n = t.GetUniqueElementId(e);
            null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id")
          }, t.copyNonInternalCssClasses = function (e, t) {
            var n = e.getAttribute("class").trim().split(/\s+/);
            n = n.filter((function (e) {
              return 0 === e.indexOf("select2-")
            }));
            var i = t.getAttribute("class").trim().split(/\s+/);
            i = i.filter((function (e) {
              return 0 !== e.indexOf("select2-")
            }));
            var a = n.concat(i);
            e.setAttribute("class", a.join(" "))
          }, t
        })), t.define("select2/results", ["jquery", "./utils"], (function (e, t) {
          function n(e, t, i) {
            this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
          }
          return t.Extend(n, t.Observable), n.prototype.render = function () {
            var t = e('<ul class="select2-results__options" role="listbox"></ul>');
            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
          }, n.prototype.clear = function () {
            this.$results.empty()
          }, n.prototype.displayMessage = function (t) {
            var n = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
              a = this.options.get("translations").get(t.message);
            i.append(n(a(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
          }, n.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove()
          }, n.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var i = e.results[n],
                  a = this.option(i);
                t.push(a)
              }
              this.$results.append(t)
            } else 0 === this.$results.children().length && this.trigger("results:message", {
              message: "noResults"
            })
          }, n.prototype.position = function (e, t) {
            t.find(".select2-results").append(e)
          }, n.prototype.sort = function (e) {
            return this.options.get("sorter")(e)
          }, n.prototype.highlightFirstItem = function () {
            var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
            t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
          }, n.prototype.setClasses = function () {
            var n = this;
            this.data.current((function (i) {
              var a = i.map((function (e) {
                return e.id.toString()
              }));
              n.$results.find(".select2-results__option--selectable").each((function () {
                var n = e(this),
                  i = t.GetData(this, "data"),
                  r = "" + i.id;
                null != i.element && i.element.selected || null == i.element && a.indexOf(r) > -1 ? (this.classList.add("select2-results__option--selected"), n.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), n.attr("aria-selected", "false"))
              }))
            }))
          }, n.prototype.showLoading = function (e) {
            this.hideLoading();
            var t = {
                disabled: !0,
                loading: !0,
                text: this.options.get("translations").get("searching")(e)
              },
              n = this.option(t);
            n.className += " loading-results", this.$results.prepend(n)
          }, n.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove()
          }, n.prototype.option = function (n) {
            var i = document.createElement("li");
            i.classList.add("select2-results__option"), i.classList.add("select2-results__option--selectable");
            var a = {
                role: "option"
              },
              r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
            for (var o in (null != n.element && r.call(n.element, ":disabled") || null == n.element && n.disabled) && (a["aria-disabled"] = "true", i.classList.remove("select2-results__option--selectable"), i.classList.add("select2-results__option--disabled")), null == n.id && i.classList.remove("select2-results__option--selectable"), null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (a.role = "group", a["aria-label"] = n.text, i.classList.remove("select2-results__option--selectable"), i.classList.add("select2-results__option--group")), a) {
              var s = a[o];
              i.setAttribute(o, s)
            }
            if (n.children) {
              var l = e(i),
                c = document.createElement("strong");
              c.className = "select2-results__group", this.template(n, c);
              for (var u = [], d = 0; d < n.children.length; d++) {
                var h = n.children[d],
                  f = this.option(h);
                u.push(f)
              }
              var p = e("<ul></ul>", {
                class: "select2-results__options select2-results__options--nested",
                role: "none"
              });
              p.append(u), l.append(c), l.append(p)
            } else this.template(n, i);
            return t.StoreData(i, "data", n), i
          }, n.prototype.bind = function (n, i) {
            var a = this,
              r = n.id + "-results";
            this.$results.attr("id", r), n.on("results:all", (function (e) {
              a.clear(), a.append(e.data), n.isOpen() && (a.setClasses(), a.highlightFirstItem())
            })), n.on("results:append", (function (e) {
              a.append(e.data), n.isOpen() && a.setClasses()
            })), n.on("query", (function (e) {
              a.hideMessages(), a.showLoading(e)
            })), n.on("select", (function () {
              n.isOpen() && (a.setClasses(), a.options.get("scrollAfterSelect") && a.highlightFirstItem())
            })), n.on("unselect", (function () {
              n.isOpen() && (a.setClasses(), a.options.get("scrollAfterSelect") && a.highlightFirstItem())
            })), n.on("open", (function () {
              a.$results.attr("aria-expanded", "true"), a.$results.attr("aria-hidden", "false"), a.setClasses(), a.ensureHighlightVisible()
            })), n.on("close", (function () {
              a.$results.attr("aria-expanded", "false"), a.$results.attr("aria-hidden", "true"), a.$results.removeAttr("aria-activedescendant")
            })), n.on("results:toggle", (function () {
              var e = a.getHighlightedResults();
              0 !== e.length && e.trigger("mouseup")
            })), n.on("results:select", (function () {
              var e = a.getHighlightedResults();
              if (0 !== e.length) {
                var n = t.GetData(e[0], "data");
                e.hasClass("select2-results__option--selected") ? a.trigger("close", {}) : a.trigger("select", {
                  data: n
                })
              }
            })), n.on("results:previous", (function () {
              var e = a.getHighlightedResults(),
                t = a.$results.find(".select2-results__option--selectable"),
                n = t.index(e);
              if (!(n <= 0)) {
                var i = n - 1;
                0 === e.length && (i = 0);
                var r = t.eq(i);
                r.trigger("mouseenter");
                var o = a.$results.offset().top,
                  s = r.offset().top,
                  l = a.$results.scrollTop() + (s - o);
                0 === i ? a.$results.scrollTop(0) : s - o < 0 && a.$results.scrollTop(l)
              }
            })), n.on("results:next", (function () {
              var e = a.getHighlightedResults(),
                t = a.$results.find(".select2-results__option--selectable"),
                n = t.index(e) + 1;
              if (!(n >= t.length)) {
                var i = t.eq(n);
                i.trigger("mouseenter");
                var r = a.$results.offset().top + a.$results.outerHeight(!1),
                  o = i.offset().top + i.outerHeight(!1),
                  s = a.$results.scrollTop() + o - r;
                0 === n ? a.$results.scrollTop(0) : o > r && a.$results.scrollTop(s)
              }
            })), n.on("results:focus", (function (e) {
              e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true")
            })), n.on("results:message", (function (e) {
              a.displayMessage(e)
            })), e.fn.mousewheel && this.$results.on("mousewheel", (function (e) {
              var t = a.$results.scrollTop(),
                n = a.$results.get(0).scrollHeight - t + e.deltaY,
                i = e.deltaY > 0 && t - e.deltaY <= 0,
                r = e.deltaY < 0 && n <= a.$results.height();
              i ? (a.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (a.$results.scrollTop(a.$results.get(0).scrollHeight - a.$results.height()), e.preventDefault(), e.stopPropagation())
            })), this.$results.on("mouseup", ".select2-results__option--selectable", (function (n) {
              var i = e(this),
                r = t.GetData(this, "data");
              i.hasClass("select2-results__option--selected") ? a.options.get("multiple") ? a.trigger("unselect", {
                originalEvent: n,
                data: r
              }) : a.trigger("close", {}) : a.trigger("select", {
                originalEvent: n,
                data: r
              })
            })), this.$results.on("mouseenter", ".select2-results__option--selectable", (function (n) {
              var i = t.GetData(this, "data");
              a.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), a.trigger("results:focus", {
                data: i,
                element: e(this)
              })
            }))
          }, n.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted")
          }, n.prototype.destroy = function () {
            this.$results.remove()
          }, n.prototype.ensureHighlightVisible = function () {
            var e = this.getHighlightedResults();
            if (0 !== e.length) {
              var t = this.$results.find(".select2-results__option--selectable").index(e),
                n = this.$results.offset().top,
                i = e.offset().top,
                a = this.$results.scrollTop() + (i - n),
                r = i - n;
              a -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(a)
            }
          }, n.prototype.template = function (t, n) {
            var i = this.options.get("templateResult"),
              a = this.options.get("escapeMarkup"),
              r = i(t, n);
            null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = a(r) : e(n).append(r)
          }, n
        })), t.define("select2/keys", [], (function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }
        })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function (e, t, n) {
          function i(e, t) {
            this.$element = e, this.options = t, i.__super__.constructor.call(this)
          }
          return t.Extend(i, t.Observable), i.prototype.render = function () {
            var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
            return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n
          }, i.prototype.bind = function (e, t) {
            var i = this,
              a = e.id + "-results";
            this.container = e, this.$selection.on("focus", (function (e) {
              i.trigger("focus", e)
            })), this.$selection.on("blur", (function (e) {
              i._handleBlur(e)
            })), this.$selection.on("keydown", (function (e) {
              i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
            })), e.on("results:focus", (function (e) {
              i.$selection.attr("aria-activedescendant", e.data._resultId)
            })), e.on("selection:update", (function (e) {
              i.update(e.data)
            })), e.on("open", (function () {
              i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", a), i._attachCloseHandler(e)
            })), e.on("close", (function () {
              i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e)
            })), e.on("enable", (function () {
              i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false")
            })), e.on("disable", (function () {
              i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true")
            }))
          }, i.prototype._handleBlur = function (t) {
            var n = this;
            window.setTimeout((function () {
              document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
            }), 1)
          }, i.prototype._attachCloseHandler = function (n) {
            e(document.body).on("mousedown.select2." + n.id, (function (n) {
              var i = e(n.target).closest(".select2");
              e(".select2.select2-container--open").each((function () {
                this != i[0] && t.GetData(this, "element").select2("close")
              }))
            }))
          }, i.prototype._detachCloseHandler = function (t) {
            e(document.body).off("mousedown.select2." + t.id)
          }, i.prototype.position = function (e, t) {
            t.find(".selection").append(e)
          }, i.prototype.destroy = function () {
            this._detachCloseHandler(this.container)
          }, i.prototype.update = function (e) {
            throw new Error("The `update` method must be defined in child classes.")
          }, i.prototype.isEnabled = function () {
            return !this.isDisabled()
          }, i.prototype.isDisabled = function () {
            return this.options.get("disabled")
          }, i
        })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function (e, t, n, i) {
          function a() {
            a.__super__.constructor.apply(this, arguments)
          }
          return n.Extend(a, t), a.prototype.render = function () {
            var e = a.__super__.render.call(this);
            return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
          }, a.prototype.bind = function (e, t) {
            var n = this;
            a.__super__.bind.apply(this, arguments);
            var i = e.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.attr("aria-controls", i), this.$selection.on("mousedown", (function (e) {
              1 === e.which && n.trigger("toggle", {
                originalEvent: e
              })
            })), this.$selection.on("focus", (function (e) {})), this.$selection.on("blur", (function (e) {})), e.on("focus", (function (t) {
              e.isOpen() || n.$selection.trigger("focus")
            }))
          }, a.prototype.clear = function () {
            var e = this.$selection.find(".select2-selection__rendered");
            e.empty(), e.removeAttr("title")
          }, a.prototype.display = function (e, t) {
            var n = this.options.get("templateSelection");
            return this.options.get("escapeMarkup")(n(e, t))
          }, a.prototype.selectionContainer = function () {
            return e("<span></span>")
          }, a.prototype.update = function (e) {
            if (0 !== e.length) {
              var t = e[0],
                n = this.$selection.find(".select2-selection__rendered"),
                i = this.display(t, n);
              n.empty().append(i);
              var a = t.title || t.text;
              a ? n.attr("title", a) : n.removeAttr("title")
            } else this.clear()
          }, a
        })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function (e, t, n) {
          function i(e, t) {
            i.__super__.constructor.apply(this, arguments)
          }
          return n.Extend(i, t), i.prototype.render = function () {
            var e = i.__super__.render.call(this);
            return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
          }, i.prototype.bind = function (t, a) {
            var r = this;
            i.__super__.bind.apply(this, arguments);
            var o = t.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", o), this.$selection.on("click", (function (e) {
              r.trigger("toggle", {
                originalEvent: e
              })
            })), this.$selection.on("click", ".select2-selection__choice__remove", (function (t) {
              if (!r.isDisabled()) {
                var i = e(this).parent(),
                  a = n.GetData(i[0], "data");
                r.trigger("unselect", {
                  originalEvent: t,
                  data: a
                })
              }
            })), this.$selection.on("keydown", ".select2-selection__choice__remove", (function (e) {
              r.isDisabled() || e.stopPropagation()
            }))
          }, i.prototype.clear = function () {
            var e = this.$selection.find(".select2-selection__rendered");
            e.empty(), e.removeAttr("title")
          }, i.prototype.display = function (e, t) {
            var n = this.options.get("templateSelection");
            return this.options.get("escapeMarkup")(n(e, t))
          }, i.prototype.selectionContainer = function () {
            return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')
          }, i.prototype.update = function (e) {
            if (this.clear(), 0 !== e.length) {
              for (var t = [], i = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", a = 0; a < e.length; a++) {
                var r = e[a],
                  o = this.selectionContainer(),
                  s = this.display(r, o),
                  l = i + n.generateChars(4) + "-";
                r.id ? l += r.id : l += n.generateChars(4), o.find(".select2-selection__choice__display").append(s).attr("id", l);
                var c = r.title || r.text;
                c && o.attr("title", c);
                var u = this.options.get("translations").get("removeItem"),
                  d = o.find(".select2-selection__choice__remove");
                d.attr("title", u()), d.attr("aria-label", u()), d.attr("aria-describedby", l), n.StoreData(o[0], "data", r), t.push(o)
              }
              this.$selection.find(".select2-selection__rendered").append(t)
            }
          }, i
        })), t.define("select2/selection/placeholder", [], (function () {
          function e(e, t, n) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
          }
          return e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = {
              id: "",
              text: t
            }), t
          }, e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice");
            var i = t.title || t.text || n.text();
            return this.$selection.find(".select2-selection__rendered").attr("title", i), n
          }, e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (t.length > 1 || n) return e.call(this, t);
            this.clear();
            var i = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(i)
          }, e
        })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function (e, t, n) {
          function i() {}
          return i.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function (e) {
              i._handleClear(e)
            })), t.on("keypress", (function (e) {
              i._handleKeyboardClear(e, t)
            }))
          }, i.prototype._handleClear = function (e, t) {
            if (!this.isDisabled()) {
              var i = this.$selection.find(".select2-selection__clear");
              if (0 !== i.length) {
                t.stopPropagation();
                var a = n.GetData(i[0], "data"),
                  r = this.$element.val();
                this.$element.val(this.placeholder.id);
                var o = {
                  data: a
                };
                if (this.trigger("clear", o), o.prevented) this.$element.val(r);
                else {
                  for (var s = 0; s < a.length; s++)
                    if (o = {
                        data: a[s]
                      }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                  this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                }
              }
            }
          }, i.prototype._handleKeyboardClear = function (e, n, i) {
            i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
          }, i.prototype.update = function (t, i) {
            if (t.call(this, i), this.$selection.find(".select2-selection__clear").remove(), this.$selection[0].classList.remove("select2-selection--clearable"), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
              var a = this.$selection.find(".select2-selection__rendered").attr("id"),
                r = this.options.get("translations").get("removeAllItems"),
                o = e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
              o.attr("title", r()), o.attr("aria-label", r()), o.attr("aria-describedby", a), n.StoreData(o[0], "data", i), this.$selection.prepend(o), this.$selection[0].classList.add("select2-selection--clearable")
            }
          }, i
        })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function (e, t, n) {
          function i(e, t, n) {
            e.call(this, t, n)
          }
          return i.prototype.render = function (t) {
            var n = this.options.get("translations").get("search"),
              i = e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
            this.$searchContainer = i, this.$search = i.find("textarea"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", n());
            var a = t.call(this);
            return this._transferTabIndex(), a.append(this.$searchContainer), a
          }, i.prototype.bind = function (e, i, a) {
            var r = this,
              o = i.id + "-results",
              s = i.id + "-container";
            e.call(this, i, a), r.$search.attr("aria-describedby", s), i.on("open", (function () {
              r.$search.attr("aria-controls", o), r.$search.trigger("focus")
            })), i.on("close", (function () {
              r.$search.val(""), r.resizeSearch(), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
            })), i.on("enable", (function () {
              r.$search.prop("disabled", !1), r._transferTabIndex()
            })), i.on("disable", (function () {
              r.$search.prop("disabled", !0)
            })), i.on("focus", (function (e) {
              r.$search.trigger("focus")
            })), i.on("results:focus", (function (e) {
              e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
            })), this.$selection.on("focusin", ".select2-search--inline", (function (e) {
              r.trigger("focus", e)
            })), this.$selection.on("focusout", ".select2-search--inline", (function (e) {
              r._handleBlur(e)
            })), this.$selection.on("keydown", ".select2-search--inline", (function (e) {
              if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) {
                var i = r.$selection.find(".select2-selection__choice").last();
                if (i.length > 0) {
                  var a = t.GetData(i[0], "data");
                  r.searchRemoveChoice(a), e.preventDefault()
                }
              }
            })), this.$selection.on("click", ".select2-search--inline", (function (e) {
              r.$search.val() && e.stopPropagation()
            }));
            var l = document.documentMode,
              c = l && l <= 11;
            this.$selection.on("input.searchcheck", ".select2-search--inline", (function (e) {
              c ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search")
            })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function (e) {
              if (c && "input" === e.type) r.$selection.off("input.search input.searchcheck");
              else {
                var t = e.which;
                t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
              }
            }))
          }, i.prototype._transferTabIndex = function (e) {
            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
          }, i.prototype.createPlaceholder = function (e, t) {
            this.$search.attr("placeholder", t.text)
          }, i.prototype.update = function (e, t) {
            var n = this.$search[0] == document.activeElement;
            this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus")
          }, i.prototype.handleSearch = function () {
            if (this.resizeSearch(), !this._keyUpPrevented) {
              var e = this.$search.val();
              this.trigger("query", {
                term: e
              })
            }
            this._keyUpPrevented = !1
          }, i.prototype.searchRemoveChoice = function (e, t) {
            this.trigger("unselect", {
              data: t
            }), this.$search.val(t.text), this.handleSearch()
          }, i.prototype.resizeSearch = function () {
            this.$search.css("width", "25px");
            var e = "100%";
            "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em");
            this.$search.css("width", e)
          }, i
        })), t.define("select2/selection/selectionCss", ["../utils"], (function (e) {
          function t() {}
          return t.prototype.render = function (t) {
            var n = t.call(this),
              i = this.options.get("selectionCssClass") || "";
            return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""), e.copyNonInternalCssClasses(n[0], this.$element[0])), n.addClass(i), n
          }, t
        })), t.define("select2/selection/eventRelay", ["jquery"], (function (e) {
          function t() {}
          return t.prototype.bind = function (t, n, i) {
            var a = this,
              r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
              o = ["opening", "closing", "selecting", "unselecting", "clearing"];
            t.call(this, n, i), n.on("*", (function (t, n) {
              if (-1 !== r.indexOf(t)) {
                n = n || {};
                var i = e.Event("select2:" + t, {
                  params: n
                });
                a.$element.trigger(i), -1 !== o.indexOf(t) && (n.prevented = i.isDefaultPrevented())
              }
            }))
          }, t
        })), t.define("select2/translation", ["jquery", "require"], (function (e, t) {
          function n(e) {
            this.dict = e || {}
          }
          return n.prototype.all = function () {
            return this.dict
          }, n.prototype.get = function (e) {
            return this.dict[e]
          }, n.prototype.extend = function (t) {
            this.dict = e.extend({}, t.all(), this.dict)
          }, n._cache = {}, n.loadPath = function (e) {
            if (!(e in n._cache)) {
              var i = t(e);
              n._cache[e] = i
            }
            return new n(n._cache[e])
          }, n
        })), t.define("select2/diacritics", [], (function () {
          return {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Œ": "OE",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "œ": "oe",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z",
            "Ά": "Α",
            "Έ": "Ε",
            "Ή": "Η",
            "Ί": "Ι",
            "Ϊ": "Ι",
            "Ό": "Ο",
            "Ύ": "Υ",
            "Ϋ": "Υ",
            "Ώ": "Ω",
            "ά": "α",
            "έ": "ε",
            "ή": "η",
            "ί": "ι",
            "ϊ": "ι",
            "ΐ": "ι",
            "ό": "ο",
            "ύ": "υ",
            "ϋ": "υ",
            "ΰ": "υ",
            "ώ": "ω",
            "ς": "σ",
            "’": "'"
          }
        })), t.define("select2/data/base", ["../utils"], (function (e) {
          function t(e, n) {
            t.__super__.constructor.call(this)
          }
          return e.Extend(t, e.Observable), t.prototype.current = function (e) {
            throw new Error("The `current` method must be defined in child classes.")
          }, t.prototype.query = function (e, t) {
            throw new Error("The `query` method must be defined in child classes.")
          }, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n) {
            var i = t.id + "-result-";
            return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
          }, t
        })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function (e, t, n) {
          function i(e, t) {
            this.$element = e, this.options = t, i.__super__.constructor.call(this)
          }
          return t.Extend(i, e), i.prototype.current = function (e) {
            var t = this;
            e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), (function (e) {
              return t.item(n(e))
            })))
          }, i.prototype.select = function (e) {
            var t = this;
            if (e.selected = !0, null != e.element && "option" === e.element.tagName.toLowerCase()) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
            if (this.$element.prop("multiple")) this.current((function (n) {
              var i = [];
              (e = [e]).push.apply(e, n);
              for (var a = 0; a < e.length; a++) {
                var r = e[a].id; - 1 === i.indexOf(r) && i.push(r)
              }
              t.$element.val(i), t.$element.trigger("input").trigger("change")
            }));
            else {
              var n = e.id;
              this.$element.val(n), this.$element.trigger("input").trigger("change")
            }
          }, i.prototype.unselect = function (e) {
            var t = this;
            if (this.$element.prop("multiple")) {
              if (e.selected = !1, null != e.element && "option" === e.element.tagName.toLowerCase()) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
              this.current((function (n) {
                for (var i = [], a = 0; a < n.length; a++) {
                  var r = n[a].id;
                  r !== e.id && -1 === i.indexOf(r) && i.push(r)
                }
                t.$element.val(i), t.$element.trigger("input").trigger("change")
              }))
            }
          }, i.prototype.bind = function (e, t) {
            var n = this;
            this.container = e, e.on("select", (function (e) {
              n.select(e.data)
            })), e.on("unselect", (function (e) {
              n.unselect(e.data)
            }))
          }, i.prototype.destroy = function () {
            this.$element.find("*").each((function () {
              t.RemoveData(this)
            }))
          }, i.prototype.query = function (e, t) {
            var i = [],
              a = this;
            this.$element.children().each((function () {
              if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                var t = n(this),
                  r = a.item(t),
                  o = a.matches(e, r);
                null !== o && i.push(o)
              }
            })), t({
              results: i
            })
          }, i.prototype.addOptions = function (e) {
            this.$element.append(e)
          }, i.prototype.option = function (e) {
            var i;
            e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
            var a = this._normalizeItem(e);
            return a.element = i, t.StoreData(i, "data", a), n(i)
          }, i.prototype.item = function (e) {
            var i = {};
            if (null != (i = t.GetData(e[0], "data"))) return i;
            var a = e[0];
            if ("option" === a.tagName.toLowerCase()) i = {
              id: e.val(),
              text: e.text(),
              disabled: e.prop("disabled"),
              selected: e.prop("selected"),
              title: e.prop("title")
            };
            else if ("optgroup" === a.tagName.toLowerCase()) {
              i = {
                text: e.prop("label"),
                children: [],
                title: e.prop("title")
              };
              for (var r = e.children("option"), o = [], s = 0; s < r.length; s++) {
                var l = n(r[s]),
                  c = this.item(l);
                o.push(c)
              }
              i.children = o
            }
            return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
          }, i.prototype._normalizeItem = function (e) {
            e !== Object(e) && (e = {
              id: e,
              text: e
            });
            return null != (e = n.extend({}, {
              text: ""
            }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
              selected: !1,
              disabled: !1
            }, e)
          }, i.prototype.matches = function (e, t) {
            return this.options.get("matcher")(e, t)
          }, i
        })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function (e, t, n) {
          function i(e, t) {
            this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t)
          }
          return t.Extend(i, e), i.prototype.bind = function (e, t) {
            i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
          }, i.prototype.select = function (e) {
            var t = this.$element.find("option").filter((function (t, n) {
              return n.value == e.id.toString()
            }));
            0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
          }, i.prototype.convertToOptions = function (e) {
            var t = this,
              i = this.$element.find("option"),
              a = i.map((function () {
                return t.item(n(this)).id
              })).get(),
              r = [];

            function o(e) {
              return function () {
                return n(this).val() == e.id
              }
            }
            for (var s = 0; s < e.length; s++) {
              var l = this._normalizeItem(e[s]);
              if (a.indexOf(l.id) >= 0) {
                var c = i.filter(o(l)),
                  u = this.item(c),
                  d = n.extend(!0, {}, l, u),
                  h = this.option(d);
                c.replaceWith(h)
              } else {
                var f = this.option(l);
                if (l.children) {
                  var p = this.convertToOptions(l.children);
                  f.append(p)
                }
                r.push(f)
              }
            }
            return r
          }, i
        })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function (e, t, n) {
          function i(e, t) {
            this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
          }
          return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
            var t = {
              data: function (e) {
                return n.extend({}, e, {
                  q: e.term
                })
              },
              transport: function (e, t, i) {
                var a = n.ajax(e);
                return a.then(t), a.fail(i), a
              }
            };
            return n.extend({}, t, e, !0)
          }, i.prototype.processResults = function (e) {
            return e
          }, i.prototype.query = function (e, t) {
            var i = this;
            null != this._request && ("function" == typeof this._request.abort && this._request.abort(), this._request = null);
            var a = n.extend({
              type: "GET"
            }, this.ajaxOptions);

            function r() {
              var n = a.transport(a, (function (n) {
                var a = i.processResults(n, e);
                i.options.get("debug") && window.console && console.error && (a && a.results && Array.isArray(a.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(a)
              }), (function () {
                (!("status" in n) || 0 !== n.status && "0" !== n.status) && i.trigger("results:message", {
                  message: "errorLoading"
                })
              }));
              i._request = n
            }
            "function" == typeof a.url && (a.url = a.url.call(this.$element, e)), "function" == typeof a.data && (a.data = a.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
          }, i
        })), t.define("select2/data/tags", ["jquery"], (function (e) {
          function t(e, t, n) {
            var i = n.get("tags"),
              a = n.get("createTag");
            void 0 !== a && (this.createTag = a);
            var r = n.get("insertTag");
            if (void 0 !== r && (this.insertTag = r), e.call(this, t, n), Array.isArray(i))
              for (var o = 0; o < i.length; o++) {
                var s = i[o],
                  l = this._normalizeItem(s),
                  c = this.option(l);
                this.$element.append(c)
              }
          }
          return t.prototype.query = function (e, t, n) {
            var i = this;
            this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(a, r) {
              for (var o = a.results, s = 0; s < o.length; s++) {
                var l = o[s],
                  c = null != l.children && !e({
                    results: l.children
                  }, !0);
                if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !r && (a.data = o, void n(a))
              }
              if (r) return !0;
              var u = i.createTag(t);
              if (null != u) {
                var d = i.option(u);
                d.attr("data-select2-tag", "true"), i.addOptions([d]), i.insertTag(o, u)
              }
              a.results = o, n(a)
            })) : e.call(this, t, n)
          }, t.prototype.createTag = function (e, t) {
            if (null == t.term) return null;
            var n = t.term.trim();
            return "" === n ? null : {
              id: n,
              text: n
            }
          }, t.prototype.insertTag = function (e, t, n) {
            t.unshift(n)
          }, t.prototype._removeOldTags = function (t) {
            this.$element.find("option[data-select2-tag]").each((function () {
              this.selected || e(this).remove()
            }))
          }, t
        })), t.define("select2/data/tokenizer", ["jquery"], (function (e) {
          function t(e, t, n) {
            var i = n.get("tokenizer");
            void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
          }
          return t.prototype.bind = function (e, t, n) {
            e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
          }, t.prototype.query = function (t, n, i) {
            var a = this;
            n.term = n.term || "";
            var r = this.tokenizer(n, this.options, (function (t) {
              var n = a._normalizeItem(t);
              if (!a.$element.find("option").filter((function () {
                  return e(this).val() === n.id
                })).length) {
                var i = a.option(n);
                i.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([i])
              }! function (e) {
                a.trigger("select", {
                  data: e
                })
              }(n)
            }));
            r.term !== n.term && (this.$search.length && (this.$search.val(r.term), this.$search.trigger("focus")), n.term = r.term), t.call(this, n, i)
          }, t.prototype.tokenizer = function (t, n, i, a) {
            for (var r = i.get("tokenSeparators") || [], o = n.term, s = 0, l = this.createTag || function (e) {
                return {
                  id: e.term,
                  text: e.term
                }
              }; s < o.length;) {
              var c = o[s];
              if (-1 !== r.indexOf(c)) {
                var u = o.substr(0, s),
                  d = l(e.extend({}, n, {
                    term: u
                  }));
                null != d ? (a(d), o = o.substr(s + 1) || "", s = 0) : s++
              } else s++
            }
            return {
              term: o
            }
          }, t
        })), t.define("select2/data/minimumInputLength", [], (function () {
          function e(e, t, n) {
            this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
          }
          return e.prototype.query = function (e, t, n) {
            t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
              message: "inputTooShort",
              args: {
                minimum: this.minimumInputLength,
                input: t.term,
                params: t
              }
            }) : e.call(this, t, n)
          }, e
        })), t.define("select2/data/maximumInputLength", [], (function () {
          function e(e, t, n) {
            this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
          }
          return e.prototype.query = function (e, t, n) {
            t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
              message: "inputTooLong",
              args: {
                maximum: this.maximumInputLength,
                input: t.term,
                params: t
              }
            }) : e.call(this, t, n)
          }, e
        })), t.define("select2/data/maximumSelectionLength", [], (function () {
          function e(e, t, n) {
            this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
          }
          return e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), t.on("select", (function () {
              i._checkIfMaximumSelected()
            }))
          }, e.prototype.query = function (e, t, n) {
            var i = this;
            this._checkIfMaximumSelected((function () {
              e.call(i, t, n)
            }))
          }, e.prototype._checkIfMaximumSelected = function (e, t) {
            var n = this;
            this.current((function (e) {
              var i = null != e ? e.length : 0;
              n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                message: "maximumSelected",
                args: {
                  maximum: n.maximumSelectionLength
                }
              }) : t && t()
            }))
          }, e
        })), t.define("select2/dropdown", ["jquery", "./utils"], (function (e, t) {
          function n(e, t) {
            this.$element = e, this.options = t, n.__super__.constructor.call(this)
          }
          return t.Extend(n, t.Observable), n.prototype.render = function () {
            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
            return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
          }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
            this.$dropdown.remove()
          }, n
        })), t.define("select2/dropdown/search", ["jquery"], (function (e) {
          function t() {}
          return t.prototype.render = function (t) {
            var n = t.call(this),
              i = this.options.get("translations").get("search"),
              a = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
            return this.$searchContainer = a, this.$search = a.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", i()), n.prepend(a), n
          }, t.prototype.bind = function (t, n, i) {
            var a = this,
              r = n.id + "-results";
            t.call(this, n, i), this.$search.on("keydown", (function (e) {
              a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented()
            })), this.$search.on("input", (function (t) {
              e(this).off("keyup")
            })), this.$search.on("keyup input", (function (e) {
              a.handleSearch(e)
            })), n.on("open", (function () {
              a.$search.attr("tabindex", 0), a.$search.attr("aria-controls", r), a.$search.trigger("focus"), window.setTimeout((function () {
                a.$search.trigger("focus")
              }), 0)
            })), n.on("close", (function () {
              a.$search.attr("tabindex", -1), a.$search.removeAttr("aria-controls"), a.$search.removeAttr("aria-activedescendant"), a.$search.val(""), a.$search.trigger("blur")
            })), n.on("focus", (function () {
              n.isOpen() || a.$search.trigger("focus")
            })), n.on("results:all", (function (e) {
              null != e.query.term && "" !== e.query.term || (a.showSearch(e) ? a.$searchContainer[0].classList.remove("select2-search--hide") : a.$searchContainer[0].classList.add("select2-search--hide"))
            })), n.on("results:focus", (function (e) {
              e.data._resultId ? a.$search.attr("aria-activedescendant", e.data._resultId) : a.$search.removeAttr("aria-activedescendant")
            }))
          }, t.prototype.handleSearch = function (e) {
            if (!this._keyUpPrevented) {
              var t = this.$search.val();
              this.trigger("query", {
                term: t
              })
            }
            this._keyUpPrevented = !1
          }, t.prototype.showSearch = function (e, t) {
            return !0
          }, t
        })), t.define("select2/dropdown/hidePlaceholder", [], (function () {
          function e(e, t, n, i) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
          }
          return e.prototype.append = function (e, t) {
            t.results = this.removePlaceholder(t.results), e.call(this, t)
          }, e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t && (t = {
              id: "",
              text: t
            }), t
          }, e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
              var a = t[i];
              this.placeholder.id === a.id && n.splice(i, 1)
            }
            return n
          }, e
        })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function (e) {
          function t(e, t, n, i) {
            this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
          }
          return t.prototype.append = function (e, t) {
            this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
          }, t.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), t.on("query", (function (e) {
              i.lastParams = e, i.loading = !0
            })), t.on("query:append", (function (e) {
              i.lastParams = e, i.loading = !0
            })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
          }, t.prototype.loadMoreIfNeeded = function () {
            var t = e.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading && t && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore())
          }, t.prototype.loadMore = function () {
            this.loading = !0;
            var t = e.extend({}, {
              page: 1
            }, this.lastParams);
            t.page++, this.trigger("query:append", t)
          }, t.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more
          }, t.prototype.createLoadingMore = function () {
            var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
              n = this.options.get("translations").get("loadingMore");
            return t.html(n(this.lastParams)), t
          }, t
        })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function (e, t) {
          function n(t, n, i) {
            this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i)
          }
          return n.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), t.on("open", (function () {
              i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t)
            })), t.on("close", (function () {
              i._hideDropdown(), i._detachPositioningHandler(t)
            })), this.$dropdownContainer.on("mousedown", (function (e) {
              e.stopPropagation()
            }))
          }, n.prototype.destroy = function (e) {
            e.call(this), this.$dropdownContainer.remove()
          }, n.prototype.position = function (e, t, n) {
            t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({
              position: "absolute",
              top: -999999
            }), this.$container = n
          }, n.prototype.render = function (t) {
            var n = e("<span></span>"),
              i = t.call(this);
            return n.append(i), this.$dropdownContainer = n, n
          }, n.prototype._hideDropdown = function (e) {
            this.$dropdownContainer.detach()
          }, n.prototype._bindContainerResultHandlers = function (e, t) {
            if (!this._containerResultsHandlersBound) {
              var n = this;
              t.on("results:all", (function () {
                n._positionDropdown(), n._resizeDropdown()
              })), t.on("results:append", (function () {
                n._positionDropdown(), n._resizeDropdown()
              })), t.on("results:message", (function () {
                n._positionDropdown(), n._resizeDropdown()
              })), t.on("select", (function () {
                n._positionDropdown(), n._resizeDropdown()
              })), t.on("unselect", (function () {
                n._positionDropdown(), n._resizeDropdown()
              })), this._containerResultsHandlersBound = !0
            }
          }, n.prototype._attachPositioningHandler = function (n, i) {
            var a = this,
              r = "scroll.select2." + i.id,
              o = "resize.select2." + i.id,
              s = "orientationchange.select2." + i.id,
              l = this.$container.parents().filter(t.hasScroll);
            l.each((function () {
              t.StoreData(this, "select2-scroll-position", {
                x: e(this).scrollLeft(),
                y: e(this).scrollTop()
              })
            })), l.on(r, (function (n) {
              var i = t.GetData(this, "select2-scroll-position");
              e(this).scrollTop(i.y)
            })), e(window).on(r + " " + o + " " + s, (function (e) {
              a._positionDropdown(), a._resizeDropdown()
            }))
          }, n.prototype._detachPositioningHandler = function (n, i) {
            var a = "scroll.select2." + i.id,
              r = "resize.select2." + i.id,
              o = "orientationchange.select2." + i.id;
            this.$container.parents().filter(t.hasScroll).off(a), e(window).off(a + " " + r + " " + o)
          }, n.prototype._positionDropdown = function () {
            var t = e(window),
              n = this.$dropdown[0].classList.contains("select2-dropdown--above"),
              i = this.$dropdown[0].classList.contains("select2-dropdown--below"),
              a = null,
              r = this.$container.offset();
            r.bottom = r.top + this.$container.outerHeight(!1);
            var o = {
              height: this.$container.outerHeight(!1)
            };
            o.top = r.top, o.bottom = r.top + o.height;
            var s = this.$dropdown.outerHeight(!1),
              l = t.scrollTop(),
              c = t.scrollTop() + t.height(),
              u = l < r.top - s,
              d = c > r.bottom + s,
              h = {
                left: r.left,
                top: o.bottom
              },
              f = this.$dropdownParent;
            "static" === f.css("position") && (f = f.offsetParent());
            var p = {
              top: 0,
              left: 0
            };
            (e.contains(document.body, f[0]) || f[0].isConnected) && (p = f.offset()), h.top -= p.top, h.left -= p.left, n || i || (a = "below"), d || !u || n ? !u && d && n && (a = "below") : a = "above", ("above" == a || n && "below" !== a) && (h.top = o.top - p.top - s), null != a && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + a), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + a)), this.$dropdownContainer.css(h)
          }, n.prototype._resizeDropdown = function () {
            var e = {
              width: this.$container.outerWidth(!1) + "px"
            };
            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
          }, n.prototype._showDropdown = function (e) {
            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
          }, n
        })), t.define("select2/dropdown/minimumResultsForSearch", [], (function () {
          function e(t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var a = t[i];
              a.children ? n += e(a.children) : n++
            }
            return n
          }

          function t(e, t, n, i) {
            this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
          }
          return t.prototype.showSearch = function (t, n) {
            return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
          }, t
        })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function (e) {
          function t() {}
          return t.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), t.on("close", (function (e) {
              i._handleSelectOnClose(e)
            }))
          }, t.prototype._handleSelectOnClose = function (t, n) {
            if (n && null != n.originalSelect2Event) {
              var i = n.originalSelect2Event;
              if ("select" === i._type || "unselect" === i._type) return
            }
            var a = this.getHighlightedResults();
            if (!(a.length < 1)) {
              var r = e.GetData(a[0], "data");
              null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                data: r
              })
            }
          }, t
        })), t.define("select2/dropdown/closeOnSelect", [], (function () {
          function e() {}
          return e.prototype.bind = function (e, t, n) {
            var i = this;
            e.call(this, t, n), t.on("select", (function (e) {
              i._selectTriggered(e)
            })), t.on("unselect", (function (e) {
              i._selectTriggered(e)
            }))
          }, e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
              originalEvent: n,
              originalSelect2Event: t
            })
          }, e
        })), t.define("select2/dropdown/dropdownCss", ["../utils"], (function (e) {
          function t() {}
          return t.prototype.render = function (t) {
            var n = t.call(this),
              i = this.options.get("dropdownCssClass") || "";
            return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""), e.copyNonInternalCssClasses(n[0], this.$element[0])), n.addClass(i), n
          }, t
        })), t.define("select2/dropdown/tagsSearchHighlight", ["../utils"], (function (e) {
          function t() {}
          return t.prototype.highlightFirstItem = function (t) {
            var n = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
            if (n.length > 0) {
              var i = n.first(),
                a = e.GetData(i[0], "data").element;
              if (a && a.getAttribute && "true" === a.getAttribute("data-select2-tag")) return void i.trigger("mouseenter")
            }
            t.call(this)
          }, t
        })), t.define("select2/i18n/en", [], (function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded."
            },
            inputTooLong: function (e) {
              var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
              return 1 != t && (n += "s"), n
            },
            inputTooShort: function (e) {
              return "Please enter " + (e.minimum - e.input.length) + " or more characters"
            },
            loadingMore: function () {
              return "Loading more results…"
            },
            maximumSelected: function (e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t
            },
            noResults: function () {
              return "No results found"
            },
            searching: function () {
              return "Searching…"
            },
            removeAllItems: function () {
              return "Remove all items"
            },
            removeItem: function () {
              return "Remove item"
            },
            search: function () {
              return "Search"
            }
          }
        })), t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], (function (e, t, n, i, a, r, o, s, l, c, u, d, h, f, p, m, g, v, y, b, x, _, w, k, M, L, S, A, T, D, C) {
          function E() {
            this.reset()
          }
          return E.prototype.apply = function (u) {
            if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter && (null != u.ajax ? u.dataAdapter = p : null != u.data ? u.dataAdapter = f : u.dataAdapter = h, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, g))), null == u.resultsAdapter && (u.resultsAdapter = t, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, w)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S)), u.tags && (u.resultsAdapter = c.Decorate(u.resultsAdapter, D))), null == u.dropdownAdapter) {
              if (u.multiple) u.dropdownAdapter = x;
              else {
                var d = c.Decorate(x, _);
                u.dropdownAdapter = d
              }
              0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, L)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A)), null != u.dropdownCssClass && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)), u.dropdownAdapter = c.Decorate(u.dropdownAdapter, M)
            }
            null == u.selectionAdapter && (u.multiple ? u.selectionAdapter = i : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), null != u.selectionCssClass && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.selectionAdapter = c.Decorate(u.selectionAdapter, l)), u.language = this._resolveLanguage(u.language), u.language.push("en");
            for (var C = [], E = 0; E < u.language.length; E++) {
              var O = u.language[E]; - 1 === C.indexOf(O) && C.push(O)
            }
            return u.language = C, u.translations = this._processTranslations(u.language, u.debug), u
          }, E.prototype.reset = function () {
            function t(e) {
              return e.replace(/[^\u0000-\u007E]/g, (function (e) {
                return d[e] || e
              }))
            }
            this.defaults = {
              amdLanguageBase: "./i18n/",
              autocomplete: "off",
              closeOnSelect: !0,
              debug: !1,
              dropdownAutoWidth: !1,
              escapeMarkup: c.escapeMarkup,
              language: {},
              matcher: function n(i, a) {
                if (null == i.term || "" === i.term.trim()) return a;
                if (a.children && a.children.length > 0) {
                  for (var r = e.extend(!0, {}, a), o = a.children.length - 1; o >= 0; o--) {
                    null == n(i, a.children[o]) && r.children.splice(o, 1)
                  }
                  return r.children.length > 0 ? r : n(i, r)
                }
                var s = t(a.text).toUpperCase(),
                  l = t(i.term).toUpperCase();
                return s.indexOf(l) > -1 ? a : null
              },
              minimumInputLength: 0,
              maximumInputLength: 0,
              maximumSelectionLength: 0,
              minimumResultsForSearch: 0,
              selectOnClose: !1,
              scrollAfterSelect: !1,
              sorter: function (e) {
                return e
              },
              templateResult: function (e) {
                return e.text
              },
              templateSelection: function (e) {
                return e.text
              },
              theme: "default",
              width: "resolve"
            }
          }, E.prototype.applyFromElement = function (e, t) {
            var n = e.language,
              i = this.defaults.language,
              a = t.prop("lang"),
              r = t.closest("[lang]").prop("lang"),
              o = Array.prototype.concat.call(this._resolveLanguage(a), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(r));
            return e.language = o, e
          }, E.prototype._resolveLanguage = function (t) {
            if (!t) return [];
            if (e.isEmptyObject(t)) return [];
            if (e.isPlainObject(t)) return [t];
            var n;
            n = Array.isArray(t) ? t : [t];
            for (var i = [], a = 0; a < n.length; a++)
              if (i.push(n[a]), "string" == typeof n[a] && n[a].indexOf("-") > 0) {
                var r = n[a].split("-")[0];
                i.push(r)
              } return i
          }, E.prototype._processTranslations = function (t, n) {
            for (var i = new u, a = 0; a < t.length; a++) {
              var r = new u,
                o = t[a];
              if ("string" == typeof o) try {
                r = u.loadPath(o)
              } catch (e) {
                try {
                  o = this.defaults.amdLanguageBase + o, r = u.loadPath(o)
                } catch (e) {
                  n && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.')
                }
              } else r = e.isPlainObject(o) ? new u(o) : o;
              i.extend(r)
            }
            return i
          }, E.prototype.set = function (t, n) {
            var i = {};
            i[e.camelCase(t)] = n;
            var a = c._convertData(i);
            e.extend(!0, this.defaults, a)
          }, new E
        })), t.define("select2/options", ["jquery", "./defaults", "./utils"], (function (e, t, n) {
          function i(e, n) {
            this.options = e, null != n && this.fromElement(n), null != n && (this.options = t.applyFromElement(this.options, n)), this.options = t.apply(this.options)
          }
          return i.prototype.fromElement = function (t) {
            var i = ["select2"];
            null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), n.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")), n.StoreData(t[0], "tags", !0)), n.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")), n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
            var a = {};

            function r(e, t) {
              return t.toUpperCase()
            }
            for (var o = 0; o < t[0].attributes.length; o++) {
              var s = t[0].attributes[o].name,
                l = "data-";
              if (s.substr(0, l.length) == l) {
                var c = s.substring(l.length),
                  u = n.GetData(t[0], c);
                a[c.replace(/-([a-z])/g, r)] = u
              }
            }
            e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (a = e.extend(!0, {}, t[0].dataset, a));
            var d = e.extend(!0, {}, n.GetData(t[0]), a);
            for (var h in d = n._convertData(d)) i.indexOf(h) > -1 || (e.isPlainObject(this.options[h]) ? e.extend(this.options[h], d[h]) : this.options[h] = d[h]);
            return this
          }, i.prototype.get = function (e) {
            return this.options[e]
          }, i.prototype.set = function (e, t) {
            this.options[e] = t
          }, i
        })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function (e, t, n, i) {
          var a = function (e, i) {
            null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), a.__super__.constructor.call(this);
            var r = e.attr("tabindex") || 0;
            n.StoreData(e[0], "old-tabindex", r), e.attr("tabindex", "-1");
            var o = this.options.get("dataAdapter");
            this.dataAdapter = new o(e, this.options);
            var s = this.render();
            this._placeContainer(s);
            var l = this.options.get("selectionAdapter");
            this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
            var c = this.options.get("dropdownAdapter");
            this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
            var u = this.options.get("resultsAdapter");
            this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
            var d = this;
            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function (e) {
              d.trigger("selection:update", {
                data: e
              })
            })), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
          };
          return n.Extend(a, n.Observable), a.prototype._generateId = function (e) {
            return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
          }, a.prototype._placeContainer = function (e) {
            e.insertAfter(this.$element);
            var t = this._resolveWidth(this.$element, this.options.get("width"));
            null != t && e.css("width", t)
          }, a.prototype._resolveWidth = function (e, t) {
            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
            if ("resolve" == t) {
              var i = this._resolveWidth(e, "style");
              return null != i ? i : this._resolveWidth(e, "element")
            }
            if ("element" == t) {
              var a = e.outerWidth(!1);
              return a <= 0 ? "auto" : a + "px"
            }
            if ("style" == t) {
              var r = e.attr("style");
              if ("string" != typeof r) return null;
              for (var o = r.split(";"), s = 0, l = o.length; s < l; s += 1) {
                var c = o[s].replace(/\s/g, "").match(n);
                if (null !== c && c.length >= 1) return c[1]
              }
              return null
            }
            return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
          }, a.prototype._bindAdapters = function () {
            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
          }, a.prototype._registerDomEvents = function () {
            var e = this;
            this.$element.on("change.select2", (function () {
              e.dataAdapter.current((function (t) {
                e.trigger("selection:update", {
                  data: t
                })
              }))
            })), this.$element.on("focus.select2", (function (t) {
              e.trigger("focus", t)
            })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this._observer = new window.MutationObserver((function (t) {
              e._syncA(), e._syncS(t)
            })), this._observer.observe(this.$element[0], {
              attributes: !0,
              childList: !0,
              subtree: !1
            })
          }, a.prototype._registerDataEvents = function () {
            var e = this;
            this.dataAdapter.on("*", (function (t, n) {
              e.trigger(t, n)
            }))
          }, a.prototype._registerSelectionEvents = function () {
            var e = this,
              t = ["toggle", "focus"];
            this.selection.on("toggle", (function () {
              e.toggleDropdown()
            })), this.selection.on("focus", (function (t) {
              e.focus(t)
            })), this.selection.on("*", (function (n, i) {
              -1 === t.indexOf(n) && e.trigger(n, i)
            }))
          }, a.prototype._registerDropdownEvents = function () {
            var e = this;
            this.dropdown.on("*", (function (t, n) {
              e.trigger(t, n)
            }))
          }, a.prototype._registerResultsEvents = function () {
            var e = this;
            this.results.on("*", (function (t, n) {
              e.trigger(t, n)
            }))
          }, a.prototype._registerEvents = function () {
            var e = this;
            this.on("open", (function () {
              e.$container[0].classList.add("select2-container--open")
            })), this.on("close", (function () {
              e.$container[0].classList.remove("select2-container--open")
            })), this.on("enable", (function () {
              e.$container[0].classList.remove("select2-container--disabled")
            })), this.on("disable", (function () {
              e.$container[0].classList.add("select2-container--disabled")
            })), this.on("blur", (function () {
              e.$container[0].classList.remove("select2-container--focus")
            })), this.on("query", (function (t) {
              e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function (n) {
                e.trigger("results:all", {
                  data: n,
                  query: t
                })
              }))
            })), this.on("query:append", (function (t) {
              this.dataAdapter.query(t, (function (n) {
                e.trigger("results:append", {
                  data: n,
                  query: t
                })
              }))
            })), this.on("keypress", (function (t) {
              var n = t.which;
              e.isOpen() ? n === i.ESC || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER || n === i.TAB ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
            }))
          }, a.prototype._syncAttributes = function () {
            this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
          }, a.prototype._isChangeMutation = function (e) {
            var t = this;
            if (e.addedNodes && e.addedNodes.length > 0)
              for (var n = 0; n < e.addedNodes.length; n++) {
                if (e.addedNodes[n].selected) return !0
              } else {
                if (e.removedNodes && e.removedNodes.length > 0) return !0;
                if (Array.isArray(e)) return e.some((function (e) {
                  return t._isChangeMutation(e)
                }))
              }
            return !1
          }, a.prototype._syncSubtree = function (e) {
            var t = this._isChangeMutation(e),
              n = this;
            t && this.dataAdapter.current((function (e) {
              n.trigger("selection:update", {
                data: e
              })
            }))
          }, a.prototype.trigger = function (e, t) {
            var n = a.__super__.trigger,
              i = {
                open: "opening",
                close: "closing",
                select: "selecting",
                unselect: "unselecting",
                clear: "clearing"
              };
            if (void 0 === t && (t = {}), e in i) {
              var r = i[e],
                o = {
                  prevented: !1,
                  name: e,
                  args: t
                };
              if (n.call(this, r, o), o.prevented) return void(t.prevented = !0)
            }
            n.call(this, e, t)
          }, a.prototype.toggleDropdown = function () {
            this.isDisabled() || (this.isOpen() ? this.close() : this.open())
          }, a.prototype.open = function () {
            this.isOpen() || this.isDisabled() || this.trigger("query", {})
          }, a.prototype.close = function (e) {
            this.isOpen() && this.trigger("close", {
              originalEvent: e
            })
          }, a.prototype.isEnabled = function () {
            return !this.isDisabled()
          }, a.prototype.isDisabled = function () {
            return this.options.get("disabled")
          }, a.prototype.isOpen = function () {
            return this.$container[0].classList.contains("select2-container--open")
          }, a.prototype.hasFocus = function () {
            return this.$container[0].classList.contains("select2-container--focus")
          }, a.prototype.focus = function (e) {
            this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}))
          }, a.prototype.enable = function (e) {
            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
            var t = !e[0];
            this.$element.prop("disabled", t)
          }, a.prototype.data = function () {
            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
            var e = [];
            return this.dataAdapter.current((function (t) {
              e = t
            })), e
          }, a.prototype.val = function (e) {
            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
            var t = e[0];
            Array.isArray(t) && (t = t.map((function (e) {
              return e.toString()
            }))), this.$element.val(t).trigger("input").trigger("change")
          }, a.prototype.destroy = function () {
            n.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
          }, a.prototype.render = function () {
            var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
            return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
          }, a
        })), t.define("select2/dropdown/attachContainer", [], (function () {
          function e(e, t, n) {
            e.call(this, t, n)
          }
          return e.prototype.position = function (e, t, n) {
            n.find(".dropdown-wrapper").append(t), t[0].classList.add("select2-dropdown--below"), n[0].classList.add("select2-container--below")
          }, e
        })), t.define("select2/dropdown/stopPropagation", [], (function () {
          function e() {}
          return e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (e) {
              e.stopPropagation()
            }))
          }, e
        })), t.define("select2/selection/stopPropagation", [], (function () {
          function e() {}
          return e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function (e) {
              e.stopPropagation()
            }))
          }, e
        })),
        /*!
         * jQuery Mousewheel 3.1.13
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         */
        n = function (e) {
          var t, n, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            r = Array.prototype.slice;
          if (e.event.fixHooks)
            for (var o = i.length; o;) e.event.fixHooks[i[--o]] = e.event.mouseHooks;
          var s = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
              if (this.addEventListener)
                for (var t = a.length; t;) this.addEventListener(a[--t], l, !1);
              else this.onmousewheel = l;
              e.data(this, "mousewheel-line-height", s.getLineHeight(this)), e.data(this, "mousewheel-page-height", s.getPageHeight(this))
            },
            teardown: function () {
              if (this.removeEventListener)
                for (var t = a.length; t;) this.removeEventListener(a[--t], l, !1);
              else this.onmousewheel = null;
              e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function (t) {
              var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
              return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function (t) {
              return e(t).height()
            },
            settings: {
              adjustOldDeltas: !0,
              normalizeOffset: !0
            }
          };

          function l(i) {
            var a = i || window.event,
              o = r.call(arguments, 1),
              l = 0,
              d = 0,
              h = 0,
              f = 0,
              p = 0,
              m = 0;
            if ((i = e.event.fix(a)).type = "mousewheel", "detail" in a && (h = -1 * a.detail), "wheelDelta" in a && (h = a.wheelDelta), "wheelDeltaY" in a && (h = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * h, h = 0), l = 0 === h ? d : h, "deltaY" in a && (l = h = -1 * a.deltaY), "deltaX" in a && (d = a.deltaX, 0 === h && (l = -1 * d)), 0 !== h || 0 !== d) {
              if (1 === a.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                l *= g, h *= g, d *= g
              } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                l *= v, h *= v, d *= v
              }
              if (f = Math.max(Math.abs(h), Math.abs(d)), (!n || f < n) && (n = f, u(a, f) && (n /= 40)), u(a, f) && (l /= 40, d /= 40, h /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / n), d = Math[d >= 1 ? "floor" : "ceil"](d / n), h = Math[h >= 1 ? "floor" : "ceil"](h / n), s.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                p = i.clientX - y.left, m = i.clientY - y.top
              }
              return i.deltaX = d, i.deltaY = h, i.deltaFactor = n, i.offsetX = p, i.offsetY = m, i.deltaMode = 0, o.unshift(i, l, d, h), t && clearTimeout(t), t = setTimeout(c, 200), (e.event.dispatch || e.event.handle).apply(this, o)
            }
          }

          function c() {
            n = null
          }

          function u(e, t) {
            return s.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
          }
          e.fn.extend({
            mousewheel: function (e) {
              return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function (e) {
              return this.unbind("mousewheel", e)
            }
          })
        }, "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(e), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function (e, t, n, i, a) {
          if (null == e.fn.select2) {
            var r = ["open", "close", "destroy"];
            e.fn.select2 = function (t) {
              if ("object" == typeof (t = t || {})) return this.each((function () {
                var i = e.extend(!0, {}, t);
                new n(e(this), i)
              })), this;
              if ("string" == typeof t) {
                var i, o = Array.prototype.slice.call(arguments, 1);
                return this.each((function () {
                  var e = a.GetData(this, "select2");
                  null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, o)
                })), r.indexOf(t) > -1 ? this : i
              }
              throw new Error("Invalid arguments for Select2: " + t)
            }
          }
          return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
        })), {
          define: t.define,
          require: t.require
        }
    }(),
    n = t.require("jquery.select2");
  return e.fn.select2.amd = t, n
}))