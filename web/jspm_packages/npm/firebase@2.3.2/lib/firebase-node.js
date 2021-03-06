/* */ 
(function(Buffer, process) {
  var g,
      aa = this;
  function n(a) {
    return void 0 !== a;
  }
  function ba() {}
  function ca(a) {
    a.sb = function() {
      return a.rf ? a.rf : a.rf = new a;
    };
  }
  function da(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)
          return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
          return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
          return "function";
      } else
        return "null";
    else if ("function" == b && "undefined" == typeof a.call)
      return "object";
    return b;
  }
  function ea(a) {
    return "array" == da(a);
  }
  function fa(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function p(a) {
    return "string" == typeof a;
  }
  function ga(a) {
    return "number" == typeof a;
  }
  function ha(a) {
    return "function" == da(a);
  }
  function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  }
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ka(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function q(a, b, c) {
    q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return q.apply(null, arguments);
  }
  var la = Date.now || function() {
    return +new Date;
  };
  function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.fh = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Zg = function(a, c, f) {
      for (var h = Array(arguments.length - 2),
          k = 2; k < arguments.length; k++)
        h[k - 2] = arguments[k];
      return b.prototype[c].apply(a, h);
    };
  }
  ;
  function t(a, b) {
    for (var c in a)
      b.call(void 0, a[c], c, a);
  }
  function na(a, b) {
    var c = {},
        d;
    for (d in a)
      c[d] = b.call(void 0, a[d], d, a);
    return c;
  }
  function oa(a, b) {
    for (var c in a)
      if (!b.call(void 0, a[c], c, a))
        return !1;
    return !0;
  }
  function pa(a) {
    var b = 0,
        c;
    for (c in a)
      b++;
    return b;
  }
  function qa(a) {
    for (var b in a)
      return b;
  }
  function ra(a) {
    var b = [],
        c = 0,
        d;
    for (d in a)
      b[c++] = a[d];
    return b;
  }
  function sa(a) {
    var b = [],
        c = 0,
        d;
    for (d in a)
      b[c++] = d;
    return b;
  }
  function ta(a, b) {
    for (var c in a)
      if (a[c] == b)
        return !0;
    return !1;
  }
  function ua(a, b, c) {
    for (var d in a)
      if (b.call(c, a[d], d, a))
        return d;
  }
  function va(a, b) {
    var c = ua(a, b, void 0);
    return c && a[c];
  }
  function wa(a) {
    for (var b in a)
      return !1;
    return !0;
  }
  function xa(a) {
    var b = {},
        c;
    for (c in a)
      b[c] = a[c];
    return b;
  }
  var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function za(a, b) {
    for (var c,
        d,
        e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < ya.length; f++)
        c = ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  function Aa(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }
  function Ba() {
    this.Qd = void 0;
  }
  function Ca(a, b, c) {
    switch (typeof b) {
      case "string":
        Da(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "undefined":
        c.push("null");
        break;
      case "object":
        if (null == b) {
          c.push("null");
          break;
        }
        if (ea(b)) {
          var d = b.length;
          c.push("[");
          for (var e = "",
              f = 0; f < d; f++)
            c.push(e), e = b[f], Ca(a, a.Qd ? a.Qd.call(b, String(f), e) : e, c), e = ",";
          c.push("]");
          break;
        }
        c.push("{");
        d = "";
        for (f in b)
          Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Da(f, c), c.push(":"), Ca(a, a.Qd ? a.Qd.call(b, f, e) : e, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var Ea = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  function Da(a, b) {
    b.push('"', a.replace(Fa, function(a) {
      if (a in Ea)
        return Ea[a];
      var b = a.charCodeAt(0),
          e = "\\u";
      16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
      return Ea[a] = e + b.toString(16);
    }), '"');
  }
  ;
  function Ga() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ la()).toString(36);
  }
  ;
  var Ha;
  a: {
    var Ia = aa.navigator;
    if (Ia) {
      var Ja = Ia.userAgent;
      if (Ja) {
        Ha = Ja;
        break a;
      }
    }
    Ha = "";
  }
  ;
  function Ka() {
    this.Ua = -1;
  }
  ;
  function La() {
    this.Ua = -1;
    this.Ua = 64;
    this.N = [];
    this.ie = [];
    this.Vf = [];
    this.Jd = [];
    this.Jd[0] = 128;
    for (var a = 1; a < this.Ua; ++a)
      this.Jd[a] = 0;
    this.ae = this.$b = 0;
    this.reset();
  }
  ma(La, Ka);
  La.prototype.reset = function() {
    this.N[0] = 1732584193;
    this.N[1] = 4023233417;
    this.N[2] = 2562383102;
    this.N[3] = 271733878;
    this.N[4] = 3285377520;
    this.ae = this.$b = 0;
  };
  function Ma(a, b, c) {
    c || (c = 0);
    var d = a.Vf;
    if (p(b))
      for (var e = 0; 16 > e; e++)
        d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
    else
      for (e = 0; 16 > e; e++)
        d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = (f << 1 | f >>> 31) & 4294967295;
    }
    b = a.N[0];
    c = a.N[1];
    for (var h = a.N[2],
        k = a.N[3],
        m = a.N[4],
        l,
        e = 0; 80 > e; e++)
      40 > e ? 20 > e ? (f = k ^ c & (h ^ k), l = 1518500249) : (f = c ^ h ^ k, l = 1859775393) : 60 > e ? (f = c & h | k & (c | h), l = 2400959708) : (f = c ^ h ^ k, l = 3395469782), f = (b << 5 | b >>> 27) + f + m + l + d[e] & 4294967295, m = k, k = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
    a.N[0] = a.N[0] + b & 4294967295;
    a.N[1] = a.N[1] + c & 4294967295;
    a.N[2] = a.N[2] + h & 4294967295;
    a.N[3] = a.N[3] + k & 4294967295;
    a.N[4] = a.N[4] + m & 4294967295;
  }
  La.prototype.update = function(a, b) {
    if (null != a) {
      n(b) || (b = a.length);
      for (var c = b - this.Ua,
          d = 0,
          e = this.ie,
          f = this.$b; d < b; ) {
        if (0 == f)
          for (; d <= c; )
            Ma(this, a, d), d += this.Ua;
        if (p(a))
          for (; d < b; ) {
            if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.Ua) {
              Ma(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (e[f] = a[d], ++f, ++d, f == this.Ua) {
              Ma(this, e);
              f = 0;
              break;
            }
      }
      this.$b = f;
      this.ae += b;
    }
  };
  var Na = Array.prototype,
      Oa = Na.indexOf ? function(a, b, c) {
        return Na.indexOf.call(a, b, c);
      } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a))
          return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
          if (c in a && a[c] === b)
            return c;
        return -1;
      },
      Pa = Na.forEach ? function(a, b, c) {
        Na.forEach.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = p(a) ? a.split("") : a,
            f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      },
      Qa = Na.filter ? function(a, b, c) {
        return Na.filter.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = [],
            f = 0,
            h = p(a) ? a.split("") : a,
            k = 0; k < d; k++)
          if (k in h) {
            var m = h[k];
            b.call(c, m, k, a) && (e[f++] = m);
          }
        return e;
      },
      Ra = Na.map ? function(a, b, c) {
        return Na.map.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = Array(d),
            f = p(a) ? a.split("") : a,
            h = 0; h < d; h++)
          h in f && (e[h] = b.call(c, f[h], h, a));
        return e;
      },
      Sa = Na.reduce ? function(a, b, c, d) {
        for (var e = [],
            f = 1,
            h = arguments.length; f < h; f++)
          e.push(arguments[f]);
        d && (e[0] = q(b, d));
        return Na.reduce.apply(a, e);
      } : function(a, b, c, d) {
        var e = c;
        Pa(a, function(c, h) {
          e = b.call(d, e, c, h, a);
        });
        return e;
      },
      Ta = Na.every ? function(a, b, c) {
        return Na.every.call(a, b, c);
      } : function(a, b, c) {
        for (var d = a.length,
            e = p(a) ? a.split("") : a,
            f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a))
            return !1;
        return !0;
      };
  function Ua(a, b) {
    var c = Va(a, b, void 0);
    return 0 > c ? null : p(a) ? a.charAt(c) : a[c];
  }
  function Va(a, b, c) {
    for (var d = a.length,
        e = p(a) ? a.split("") : a,
        f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a))
        return f;
    return -1;
  }
  function Wa(a, b) {
    var c = Oa(a, b);
    0 <= c && Na.splice.call(a, c, 1);
  }
  function Xa(a, b) {
    a.sort(b || Ya);
  }
  function Ya(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  var Za = -1 != Ha.indexOf("Opera") || -1 != Ha.indexOf("OPR"),
      $a = -1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE"),
      ab = -1 != Ha.indexOf("Gecko") && -1 == Ha.toLowerCase().indexOf("webkit") && !(-1 != Ha.indexOf("Trident") || -1 != Ha.indexOf("MSIE")),
      bb = -1 != Ha.toLowerCase().indexOf("webkit");
  (function() {
    var a = "",
        b;
    if (Za && aa.opera)
      return a = aa.opera.version, ha(a) ? a() : a;
    ab ? b = /rv\:([^\);]+)(\)|;)/ : $a ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : bb && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(Ha)) ? a[1] : "");
    return $a && (b = (b = aa.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a;
  })();
  var cb = null,
      db = null;
  function eb(a, b) {
    if (!fa(a))
      throw Error("encodeByteArray takes an array as a parameter");
    if (!cb) {
      cb = {};
      db = {};
      for (var c = 0; 65 > c; c++)
        cb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), db[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);
    }
    for (var c = b ? db : cb,
        d = [],
        e = 0; e < a.length; e += 3) {
      var f = a[e],
          h = e + 1 < a.length,
          k = h ? a[e + 1] : 0,
          m = e + 2 < a.length,
          l = m ? a[e + 2] : 0,
          r = f >> 2,
          f = (f & 3) << 4 | k >> 4,
          k = (k & 15) << 2 | l >> 6,
          l = l & 63;
      m || (l = 64, h || (k = 64));
      d.push(c[r], c[f], c[k], c[l]);
    }
    return d.join("");
  }
  ;
  var fb = fb || "2.3.2";
  function u(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function v(a, b) {
    if (Object.prototype.hasOwnProperty.call(a, b))
      return a[b];
  }
  function gb(a, b) {
    for (var c in a)
      Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function hb(a) {
    var b = {};
    gb(a, function(a, d) {
      b[a] = d;
    });
    return b;
  }
  ;
  function ib(a) {
    var b = [];
    gb(a, function(a, d) {
      ea(d) ? Pa(d, function(d) {
        b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d));
      }) : b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d));
    });
    return b.length ? "&" + b.join("&") : "";
  }
  function jb(a) {
    var b = {};
    a = a.replace(/^\?/, "").split("&");
    Pa(a, function(a) {
      a && (a = a.split("="), b[a[0]] = a[1]);
    });
    return b;
  }
  ;
  function w(a, b, c, d) {
    var e;
    d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
    if (e)
      throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".");
  }
  function y(a, b, c) {
    var d = "";
    switch (b) {
      case 1:
        d = c ? "first" : "First";
        break;
      case 2:
        d = c ? "second" : "Second";
        break;
      case 3:
        d = c ? "third" : "Third";
        break;
      case 4:
        d = c ? "fourth" : "Fourth";
        break;
      default:
        throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
    }
    return a = a + " failed: " + (d + " argument ");
  }
  function z(a, b, c, d) {
    if ((!d || n(c)) && !ha(c))
      throw Error(y(a, b, d) + "must be a valid function.");
  }
  function kb(a, b, c) {
    if (n(c) && (!ia(c) || null === c))
      throw Error(y(a, b, !0) + "must be a valid context object.");
  }
  ;
  function lb(a) {
    return "undefined" !== typeof JSON && n(JSON.parse) ? JSON.parse(a) : Aa(a);
  }
  function A(a) {
    if ("undefined" !== typeof JSON && n(JSON.stringify))
      a = JSON.stringify(a);
    else {
      var b = [];
      Ca(new Ba, a, b);
      a = b.join("");
    }
    return a;
  }
  ;
  function mb() {
    this.Ud = B;
  }
  mb.prototype.j = function(a) {
    return this.Ud.Q(a);
  };
  mb.prototype.toString = function() {
    return this.Ud.toString();
  };
  function nb() {}
  nb.prototype.nf = function() {
    return null;
  };
  nb.prototype.ue = function() {
    return null;
  };
  var ob = new nb;
  function pb(a, b, c) {
    this.Sf = a;
    this.Ja = b;
    this.Id = c;
  }
  pb.prototype.nf = function(a) {
    var b = this.Ja.O;
    if (qb(b, a))
      return b.j().R(a);
    b = null != this.Id ? new rb(this.Id, !0, !1) : this.Ja.w();
    return this.Sf.wc(a, b);
  };
  pb.prototype.ue = function(a, b, c) {
    var d = null != this.Id ? this.Id : sb(this.Ja);
    a = this.Sf.je(d, b, 1, c, a);
    return 0 === a.length ? null : a[0];
  };
  function tb() {
    this.rb = [];
  }
  function ub(a, b) {
    for (var c = null,
        d = 0; d < b.length; d++) {
      var e = b[d],
          f = e.Yb();
      null === c || f.ca(c.Yb()) || (a.rb.push(c), c = null);
      null === c && (c = new vb(f));
      c.add(e);
    }
    c && a.rb.push(c);
  }
  function wb(a, b, c) {
    ub(a, c);
    xb(a, function(a) {
      return a.ca(b);
    });
  }
  function yb(a, b, c) {
    ub(a, c);
    xb(a, function(a) {
      return a.contains(b) || b.contains(a);
    });
  }
  function xb(a, b) {
    for (var c = !0,
        d = 0; d < a.rb.length; d++) {
      var e = a.rb[d];
      if (e)
        if (e = e.Yb(), b(e)) {
          for (var e = a.rb[d],
              f = 0; f < e.sd.length; f++) {
            var h = e.sd[f];
            if (null !== h) {
              e.sd[f] = null;
              var k = h.Ub();
              zb && Ab("event: " + h.toString());
              Bb(k);
            }
          }
          a.rb[d] = null;
        } else
          c = !1;
    }
    c && (a.rb = []);
  }
  function vb(a) {
    this.ra = a;
    this.sd = [];
  }
  vb.prototype.add = function(a) {
    this.sd.push(a);
  };
  vb.prototype.Yb = function() {
    return this.ra;
  };
  function C(a, b, c, d) {
    this.type = a;
    this.Ia = b;
    this.Va = c;
    this.He = d;
    this.Od = void 0;
  }
  function Cb(a) {
    return new C(Db, a);
  }
  var Db = "value";
  function Eb(a, b, c, d) {
    this.qe = b;
    this.Wd = c;
    this.Od = d;
    this.rd = a;
  }
  Eb.prototype.Yb = function() {
    var a = this.Wd.Gb();
    return "value" === this.rd ? a.path : a.parent().path;
  };
  Eb.prototype.ve = function() {
    return this.rd;
  };
  Eb.prototype.Ub = function() {
    return this.qe.Ub(this);
  };
  Eb.prototype.toString = function() {
    return this.Yb().toString() + ":" + this.rd + ":" + A(this.Wd.jf());
  };
  function Fb(a, b, c) {
    this.qe = a;
    this.error = b;
    this.path = c;
  }
  Fb.prototype.Yb = function() {
    return this.path;
  };
  Fb.prototype.ve = function() {
    return "cancel";
  };
  Fb.prototype.Ub = function() {
    return this.qe.Ub(this);
  };
  Fb.prototype.toString = function() {
    return this.path.toString() + ":cancel";
  };
  function rb(a, b, c) {
    this.A = a;
    this.ea = b;
    this.Tb = c;
  }
  function Gb(a) {
    return a.ea;
  }
  function Hb(a) {
    return a.Tb;
  }
  function Ib(a, b) {
    return b.e() ? a.ea && !a.Tb : qb(a, D(b));
  }
  function qb(a, b) {
    return a.ea && !a.Tb || a.A.Da(b);
  }
  rb.prototype.j = function() {
    return this.A;
  };
  function Jb(a) {
    this.fg = a;
    this.Ad = null;
  }
  Jb.prototype.get = function() {
    var a = this.fg.get(),
        b = xa(a);
    if (this.Ad)
      for (var c in this.Ad)
        b[c] -= this.Ad[c];
    this.Ad = a;
    return b;
  };
  function Kb(a, b) {
    this.Nf = {};
    this.cd = new Jb(a);
    this.ba = b;
    var c = 1E4 + 2E4 * Math.random();
    setTimeout(q(this.Gf, this), Math.floor(c));
  }
  Kb.prototype.Gf = function() {
    var a = this.cd.get(),
        b = {},
        c = !1,
        d;
    for (d in a)
      0 < a[d] && u(this.Nf, d) && (b[d] = a[d], c = !0);
    c && this.ba.Re(b);
    setTimeout(q(this.Gf, this), Math.floor(6E5 * Math.random()));
  };
  function Lb() {
    this.Cc = {};
  }
  function Mb(a, b, c) {
    n(c) || (c = 1);
    u(a.Cc, b) || (a.Cc[b] = 0);
    a.Cc[b] += c;
  }
  Lb.prototype.get = function() {
    return xa(this.Cc);
  };
  var Nb = {},
      Ob = {};
  function Pb(a) {
    a = a.toString();
    Nb[a] || (Nb[a] = new Lb);
    return Nb[a];
  }
  function Qb(a, b) {
    var c = a.toString();
    Ob[c] || (Ob[c] = b());
    return Ob[c];
  }
  ;
  function E(a, b) {
    this.name = a;
    this.S = b;
  }
  function Rb(a, b) {
    return new E(a, b);
  }
  ;
  function Sb(a, b) {
    return Tb(a.name, b.name);
  }
  function Ub(a, b) {
    return Tb(a, b);
  }
  ;
  function Vb(a, b, c) {
    this.type = Wb;
    this.source = a;
    this.path = b;
    this.Fa = c;
  }
  Vb.prototype.Vc = function(a) {
    return this.path.e() ? new Vb(this.source, F, this.Fa.R(a)) : new Vb(this.source, G(this.path), this.Fa);
  };
  Vb.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " overwrite: " + this.Fa.toString() + ")";
  };
  function Xb(a, b) {
    this.type = Yb;
    this.source = a;
    this.path = b;
  }
  Xb.prototype.Vc = function() {
    return this.path.e() ? new Xb(this.source, F) : new Xb(this.source, G(this.path));
  };
  Xb.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " listen_complete)";
  };
  function Zb(a, b) {
    this.Ka = a;
    this.wa = b ? b : $b;
  }
  g = Zb.prototype;
  g.Na = function(a, b) {
    return new Zb(this.Ka, this.wa.Na(a, b, this.Ka).Y(null, null, !1, null, null));
  };
  g.remove = function(a) {
    return new Zb(this.Ka, this.wa.remove(a, this.Ka).Y(null, null, !1, null, null));
  };
  g.get = function(a) {
    for (var b,
        c = this.wa; !c.e(); ) {
      b = this.Ka(a, c.key);
      if (0 === b)
        return c.value;
      0 > b ? c = c.left : 0 < b && (c = c.right);
    }
    return null;
  };
  function ac(a, b) {
    for (var c,
        d = a.wa,
        e = null; !d.e(); ) {
      c = a.Ka(b, d.key);
      if (0 === c) {
        if (d.left.e())
          return e ? e.key : null;
        for (d = d.left; !d.right.e(); )
          d = d.right;
        return d.key;
      }
      0 > c ? d = d.left : 0 < c && (e = d, d = d.right);
    }
    throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  g.e = function() {
    return this.wa.e();
  };
  g.count = function() {
    return this.wa.count();
  };
  g.Qc = function() {
    return this.wa.Qc();
  };
  g.ec = function() {
    return this.wa.ec();
  };
  g.ia = function(a) {
    return this.wa.ia(a);
  };
  g.Wb = function(a) {
    return new bc(this.wa, null, this.Ka, !1, a);
  };
  g.Xb = function(a, b) {
    return new bc(this.wa, a, this.Ka, !1, b);
  };
  g.Zb = function(a, b) {
    return new bc(this.wa, a, this.Ka, !0, b);
  };
  g.pf = function(a) {
    return new bc(this.wa, null, this.Ka, !0, a);
  };
  function bc(a, b, c, d, e) {
    this.Sd = e || null;
    this.Be = d;
    this.Oa = [];
    for (e = 1; !a.e(); )
      if (e = b ? c(a.key, b) : 1, d && (e *= -1), 0 > e)
        a = this.Be ? a.left : a.right;
      else if (0 === e) {
        this.Oa.push(a);
        break;
      } else
        this.Oa.push(a), a = this.Be ? a.right : a.left;
  }
  function H(a) {
    if (0 === a.Oa.length)
      return null;
    var b = a.Oa.pop(),
        c;
    c = a.Sd ? a.Sd(b.key, b.value) : {
      key: b.key,
      value: b.value
    };
    if (a.Be)
      for (b = b.left; !b.e(); )
        a.Oa.push(b), b = b.right;
    else
      for (b = b.right; !b.e(); )
        a.Oa.push(b), b = b.left;
    return c;
  }
  function cc(a) {
    if (0 === a.Oa.length)
      return null;
    var b;
    b = a.Oa;
    b = b[b.length - 1];
    return a.Sd ? a.Sd(b.key, b.value) : {
      key: b.key,
      value: b.value
    };
  }
  function dc(a, b, c, d, e) {
    this.key = a;
    this.value = b;
    this.color = null != c ? c : !0;
    this.left = null != d ? d : $b;
    this.right = null != e ? e : $b;
  }
  g = dc.prototype;
  g.Y = function(a, b, c, d, e) {
    return new dc(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right);
  };
  g.count = function() {
    return this.left.count() + 1 + this.right.count();
  };
  g.e = function() {
    return !1;
  };
  g.ia = function(a) {
    return this.left.ia(a) || a(this.key, this.value) || this.right.ia(a);
  };
  function ec(a) {
    return a.left.e() ? a : ec(a.left);
  }
  g.Qc = function() {
    return ec(this).key;
  };
  g.ec = function() {
    return this.right.e() ? this.key : this.right.ec();
  };
  g.Na = function(a, b, c) {
    var d,
        e;
    e = this;
    d = c(a, e.key);
    e = 0 > d ? e.Y(null, null, null, e.left.Na(a, b, c), null) : 0 === d ? e.Y(null, b, null, null, null) : e.Y(null, null, null, null, e.right.Na(a, b, c));
    return fc(e);
  };
  function gc(a) {
    if (a.left.e())
      return $b;
    a.left.fa() || a.left.left.fa() || (a = hc(a));
    a = a.Y(null, null, null, gc(a.left), null);
    return fc(a);
  }
  g.remove = function(a, b) {
    var c,
        d;
    c = this;
    if (0 > b(a, c.key))
      c.left.e() || c.left.fa() || c.left.left.fa() || (c = hc(c)), c = c.Y(null, null, null, c.left.remove(a, b), null);
    else {
      c.left.fa() && (c = ic(c));
      c.right.e() || c.right.fa() || c.right.left.fa() || (c = jc(c), c.left.left.fa() && (c = ic(c), c = jc(c)));
      if (0 === b(a, c.key)) {
        if (c.right.e())
          return $b;
        d = ec(c.right);
        c = c.Y(d.key, d.value, null, null, gc(c.right));
      }
      c = c.Y(null, null, null, null, c.right.remove(a, b));
    }
    return fc(c);
  };
  g.fa = function() {
    return this.color;
  };
  function fc(a) {
    a.right.fa() && !a.left.fa() && (a = kc(a));
    a.left.fa() && a.left.left.fa() && (a = ic(a));
    a.left.fa() && a.right.fa() && (a = jc(a));
    return a;
  }
  function hc(a) {
    a = jc(a);
    a.right.left.fa() && (a = a.Y(null, null, null, null, ic(a.right)), a = kc(a), a = jc(a));
    return a;
  }
  function kc(a) {
    return a.right.Y(null, null, a.color, a.Y(null, null, !0, null, a.right.left), null);
  }
  function ic(a) {
    return a.left.Y(null, null, a.color, null, a.Y(null, null, !0, a.left.right, null));
  }
  function jc(a) {
    return a.Y(null, null, !a.color, a.left.Y(null, null, !a.left.color, null, null), a.right.Y(null, null, !a.right.color, null, null));
  }
  function lc() {}
  g = lc.prototype;
  g.Y = function() {
    return this;
  };
  g.Na = function(a, b) {
    return new dc(a, b, null);
  };
  g.remove = function() {
    return this;
  };
  g.count = function() {
    return 0;
  };
  g.e = function() {
    return !0;
  };
  g.ia = function() {
    return !1;
  };
  g.Qc = function() {
    return null;
  };
  g.ec = function() {
    return null;
  };
  g.fa = function() {
    return !1;
  };
  var $b = new lc;
  (function() {
    var a = process.version;
    if ("v0.10.22" === a || "v0.10.23" === a || "v0.10.24" === a) {
      var b = function(a, b, c) {
        this.chunk = a;
        this.encoding = b;
        this.callback = c;
      },
          c = function(a, c, d, e, l) {
            c.objectMode || !1 === c.decodeStrings || "string" !== typeof d || (d = new Buffer(d, e));
            Buffer.isBuffer(d) && (e = "buffer");
            var r = c.objectMode ? 1 : d.length;
            c.length += r;
            var x = c.length < c.highWaterMark;
            x || (c.needDrain = !0);
            c.writing ? c.buffer.push(new b(d, e, l)) : (c.writelen = r, c.writecb = l, c.writing = !0, c.sync = !0, a._write(d, e, c.onwrite), c.sync = !1);
            return x;
          },
          d = function(a, b, c, d) {
            var e = !0;
            if (!Buffer.isBuffer(c) && "string" !== typeof c && null !== c && void 0 !== c && !b.objectMode) {
              var r = new TypeError("Invalid non-string/buffer chunk");
              a.emit("error", r);
              process.nextTick(function() {
                d(r);
              });
              e = !1;
            }
            return e;
          },
          e = function(a, b) {
            var c = Error("write after end");
            a.emit("error", c);
            process.nextTick(function() {
              b(c);
            });
          },
          a = require('_stream_writable');
      a.prototype.write = function(a, b, k) {
        var m = this._writableState,
            l = !1;
        "function" === typeof b && (k = b, b = null);
        Buffer.isBuffer(a) ? b = "buffer" : b || (b = m.defaultEncoding);
        "function" !== typeof k && (k = function() {});
        m.ended ? e(this, k) : d(this, m, a, k) && (l = c(this, m, a, b, k));
        return l;
      };
      require('_stream_duplex').prototype.write = a.prototype.write;
    }
  })();
  function mc(a, b) {
    return a && "object" === typeof a ? (I(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a;
  }
  function nc(a, b) {
    var c = new oc;
    pc(a, new K(""), function(a, e) {
      c.mc(a, qc(e, b));
    });
    return c;
  }
  function qc(a, b) {
    var c = a.C().I(),
        c = mc(c, b),
        d;
    if (a.K()) {
      var e = mc(a.Ca(), b);
      return e !== a.Ca() || c !== a.C().I() ? new rc(e, L(c)) : a;
    }
    d = a;
    c !== a.C().I() && (d = d.ga(new rc(c)));
    a.P(M, function(a, c) {
      var e = qc(c, b);
      e !== c && (d = d.U(a, e));
    });
    return d;
  }
  ;
  function sc() {
    this.vc = {};
  }
  sc.prototype.set = function(a, b) {
    null == b ? delete this.vc[a] : this.vc[a] = b;
  };
  sc.prototype.get = function(a) {
    return u(this.vc, a) ? this.vc[a] : null;
  };
  sc.prototype.remove = function(a) {
    delete this.vc[a];
  };
  sc.prototype.sf = !0;
  function tc(a) {
    this.Dc = a;
    this.Nd = "firebase:";
  }
  g = tc.prototype;
  g.set = function(a, b) {
    null == b ? this.Dc.removeItem(this.Nd + a) : this.Dc.setItem(this.Nd + a, A(b));
  };
  g.get = function(a) {
    a = this.Dc.getItem(this.Nd + a);
    return null == a ? null : lb(a);
  };
  g.remove = function(a) {
    this.Dc.removeItem(this.Nd + a);
  };
  g.sf = !1;
  g.toString = function() {
    return this.Dc.toString();
  };
  function uc(a) {
    try {
      if ("undefined" !== typeof window && "undefined" !== typeof window[a]) {
        var b = window[a];
        b.setItem("firebase:sentinel", "cache");
        b.removeItem("firebase:sentinel");
        return new tc(b);
      }
    } catch (c) {}
    return new sc;
  }
  var vc = uc("localStorage"),
      wc = uc("sessionStorage");
  function xc(a, b, c, d, e) {
    this.host = a.toLowerCase();
    this.domain = this.host.substr(this.host.indexOf(".") + 1);
    this.ib = b;
    this.fc = c;
    this.Xg = d;
    this.Md = e || "";
    this.Xa = vc.get("host:" + a) || this.host;
  }
  function yc(a, b) {
    b !== a.Xa && (a.Xa = b, "s-" === a.Xa.substr(0, 2) && vc.set("host:" + a.host, a.Xa));
  }
  function zc(a, b, c) {
    I("string" === typeof b, "typeof type must == string");
    I("object" === typeof c, "typeof params must == object");
    if (b === Ac)
      b = (a.ib ? "wss://" : "ws://") + a.Xa + "/.ws?";
    else if (b === Bc)
      b = (a.ib ? "https://" : "http://") + a.Xa + "/.lp?";
    else
      throw Error("Unknown connection type: " + b);
    a.host !== a.Xa && (c.ns = a.fc);
    var d = [];
    t(c, function(a, b) {
      d.push(b + "=" + a);
    });
    return b + d.join("&");
  }
  xc.prototype.toString = function() {
    var a = (this.ib ? "https://" : "http://") + this.host;
    this.Md && (a += "<" + this.Md + ">");
    return a;
  };
  var Cc = function() {
    var a = 1;
    return function() {
      return a++;
    };
  }();
  function I(a, b) {
    if (!a)
      throw Dc(b);
  }
  function Dc(a) {
    return Error("Firebase (" + fb + ") INTERNAL ASSERT FAILED: " + a);
  }
  function Ec(a) {
    try {
      return (new Buffer(a, "base64")).toString("utf8");
    } catch (b) {
      Ab("base64Decode failed: ", b);
    }
    return null;
  }
  function Fc(a) {
    var b = Gc(a);
    a = new La;
    a.update(b);
    var b = [],
        c = 8 * a.ae;
    56 > a.$b ? a.update(a.Jd, 56 - a.$b) : a.update(a.Jd, a.Ua - (a.$b - 56));
    for (var d = a.Ua - 1; 56 <= d; d--)
      a.ie[d] = c & 255, c /= 256;
    Ma(a, a.ie);
    for (d = c = 0; 5 > d; d++)
      for (var e = 24; 0 <= e; e -= 8)
        b[c] = a.N[d] >> e & 255, ++c;
    return eb(b);
  }
  function Hc(a) {
    for (var b = "",
        c = 0; c < arguments.length; c++)
      b = fa(arguments[c]) ? b + Hc.apply(null, arguments[c]) : "object" === typeof arguments[c] ? b + A(arguments[c]) : b + arguments[c], b += " ";
    return b;
  }
  var zb = null,
      Ic = !0;
  function Ab(a) {
    !0 === Ic && (Ic = !1, null === zb && !0 === wc.get("logging_enabled") && Jc(!0));
    if (zb) {
      var b = Hc.apply(null, arguments);
      zb(b);
    }
  }
  function Kc(a) {
    return function() {
      Ab(a, arguments);
    };
  }
  function Lc(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE INTERNAL ERROR: " + Hc.apply(null, arguments);
      "undefined" !== typeof console.error ? console.error(b) : console.log(b);
    }
  }
  function Mc(a) {
    var b = Hc.apply(null, arguments);
    throw Error("FIREBASE FATAL ERROR: " + b);
  }
  function N(a) {
    if ("undefined" !== typeof console) {
      var b = "FIREBASE WARNING: " + Hc.apply(null, arguments);
      "undefined" !== typeof console.warn ? console.warn(b) : console.log(b);
    }
  }
  function Nc(a) {
    var b = "",
        c = "",
        d = "",
        e = "",
        f = !0,
        h = "https",
        k = 443;
    if (p(a)) {
      var m = a.indexOf("//");
      0 <= m && (h = a.substring(0, m - 1), a = a.substring(m + 2));
      m = a.indexOf("/");
      -1 === m && (m = a.length);
      b = a.substring(0, m);
      e = "";
      a = a.substring(m).split("/");
      for (m = 0; m < a.length; m++)
        if (0 < a[m].length) {
          var l = a[m];
          try {
            l = decodeURIComponent(l.replace(/\+/g, " "));
          } catch (r) {}
          e += "/" + l;
        }
      a = b.split(".");
      3 === a.length ? (c = a[1], d = a[0].toLowerCase()) : 2 === a.length && (c = a[0]);
      m = b.indexOf(":");
      0 <= m && (f = "https" === h || "wss" === h, k = b.substring(m + 1), isFinite(k) && (k = String(k)), k = p(k) ? /^\s*-?0x/i.test(k) ? parseInt(k, 16) : parseInt(k, 10) : NaN);
    }
    return {
      host: b,
      port: k,
      domain: c,
      Tg: d,
      ib: f,
      scheme: h,
      kc: e
    };
  }
  function Oc(a) {
    return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY);
  }
  function Pc(a) {
    a();
  }
  function Tb(a, b) {
    if (a === b)
      return 0;
    if ("[MIN_NAME]" === a || "[MAX_NAME]" === b)
      return -1;
    if ("[MIN_NAME]" === b || "[MAX_NAME]" === a)
      return 1;
    var c = Qc(a),
        d = Qc(b);
    return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : a < b ? -1 : 1;
  }
  function Rc(a, b) {
    if (b && a in b)
      return b[a];
    throw Error("Missing required key (" + a + ") in object: " + A(b));
  }
  function Sc(a) {
    if ("object" !== typeof a || null === a)
      return A(a);
    var b = [],
        c;
    for (c in a)
      b.push(c);
    b.sort();
    c = "{";
    for (var d = 0; d < b.length; d++)
      0 !== d && (c += ","), c += A(b[d]), c += ":", c += Sc(a[b[d]]);
    return c + "}";
  }
  function Tc(a, b) {
    if (a.length <= b)
      return [a];
    for (var c = [],
        d = 0; d < a.length; d += b)
      d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
    return c;
  }
  function Uc(a, b) {
    if (ea(a))
      for (var c = 0; c < a.length; ++c)
        b(c, a[c]);
    else
      t(a, b);
  }
  function Vc(a) {
    I(!Oc(a), "Invalid JSON number");
    var b,
        c,
        d,
        e;
    0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
    e = [];
    for (a = 52; a; --a)
      e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
    for (a = 11; a; --a)
      e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
    e.push(b ? 1 : 0);
    e.reverse();
    b = e.join("");
    c = "";
    for (a = 0; 64 > a; a += 8)
      d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
    return c.toLowerCase();
  }
  var Wc = /^-?\d{1,10}$/;
  function Qc(a) {
    return Wc.test(a) && (a = Number(a), -2147483648 <= a && 2147483647 >= a) ? a : null;
  }
  function Bb(a) {
    try {
      a();
    } catch (b) {
      setTimeout(function() {
        N("Exception was thrown by user callback.", b.stack || "");
        throw b;
      }, Math.floor(0));
    }
  }
  function O(a, b) {
    if (ha(a)) {
      var c = Array.prototype.slice.call(arguments, 1).slice();
      Bb(function() {
        a.apply(null, c);
      });
    }
  }
  ;
  function Gc(a) {
    for (var b = [],
        c = 0,
        d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      55296 <= e && 56319 >= e && (e -= 55296, d++, I(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  }
  function Xc(a) {
    for (var b = 0,
        c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b++ : 2048 > d ? b += 2 : 55296 <= d && 56319 >= d ? (b += 4, c++) : b += 3;
    }
    return b;
  }
  ;
  function Yc(a) {
    var b = {},
        c = {},
        d = {},
        e = "";
    try {
      var f = a.split("."),
          b = lb(Ec(f[0]) || ""),
          c = lb(Ec(f[1]) || ""),
          e = f[2],
          d = c.d || {};
      delete c.d;
    } catch (h) {}
    return {
      bh: b,
      Ac: c,
      data: d,
      Qg: e
    };
  }
  function Zc(a) {
    a = Yc(a).Ac;
    return "object" === typeof a && a.hasOwnProperty("iat") ? v(a, "iat") : null;
  }
  function $c(a) {
    a = Yc(a);
    var b = a.Ac;
    return !!a.Qg && !!b && "object" === typeof b && b.hasOwnProperty("iat");
  }
  ;
  function ad(a) {
    this.W = a;
    this.g = a.n.g;
  }
  function bd(a, b, c, d) {
    var e = [],
        f = [];
    Pa(b, function(b) {
      "child_changed" === b.type && a.g.xd(b.He, b.Ia) && f.push(new C("child_moved", b.Ia, b.Va));
    });
    cd(a, e, "child_removed", b, d, c);
    cd(a, e, "child_added", b, d, c);
    cd(a, e, "child_moved", f, d, c);
    cd(a, e, "child_changed", b, d, c);
    cd(a, e, Db, b, d, c);
    return e;
  }
  function cd(a, b, c, d, e, f) {
    d = Qa(d, function(a) {
      return a.type === c;
    });
    Xa(d, q(a.hg, a));
    Pa(d, function(c) {
      var d = dd(a, c, f);
      Pa(e, function(e) {
        e.If(c.type) && b.push(e.createEvent(d, a.W));
      });
    });
  }
  function dd(a, b, c) {
    "value" !== b.type && "child_removed" !== b.type && (b.Od = c.of(b.Va, b.Ia, a.g));
    return b;
  }
  ad.prototype.hg = function(a, b) {
    if (null == a.Va || null == b.Va)
      throw Dc("Should only compare child_ events.");
    return this.g.compare(new E(a.Va, a.Ia), new E(b.Va, b.Ia));
  };
  function ed() {
    this.ab = {};
  }
  function fd(a, b) {
    var c = b.type,
        d = b.Va;
    I("child_added" == c || "child_changed" == c || "child_removed" == c, "Only child changes supported for tracking");
    I(".priority" !== d, "Only non-priority child changes can be tracked.");
    var e = v(a.ab, d);
    if (e) {
      var f = e.type;
      if ("child_added" == c && "child_removed" == f)
        a.ab[d] = new C("child_changed", b.Ia, d, e.Ia);
      else if ("child_removed" == c && "child_added" == f)
        delete a.ab[d];
      else if ("child_removed" == c && "child_changed" == f)
        a.ab[d] = new C("child_removed", e.He, d);
      else if ("child_changed" == c && "child_added" == f)
        a.ab[d] = new C("child_added", b.Ia, d);
      else if ("child_changed" == c && "child_changed" == f)
        a.ab[d] = new C("child_changed", b.Ia, d, e.He);
      else
        throw Dc("Illegal combination of changes: " + b + " occurred after " + e);
    } else
      a.ab[d] = b;
  }
  ;
  function gd(a, b, c) {
    this.Pb = a;
    this.nb = b;
    this.pb = c || null;
  }
  g = gd.prototype;
  g.If = function(a) {
    return "value" === a;
  };
  g.createEvent = function(a, b) {
    var c = b.n.g;
    return new Eb("value", this, new P(a.Ia, b.Gb(), c));
  };
  g.Ub = function(a) {
    var b = this.pb;
    if ("cancel" === a.ve()) {
      I(this.nb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.nb;
      return function() {
        c.call(b, a.error);
      };
    }
    var d = this.Pb;
    return function() {
      d.call(b, a.Wd);
    };
  };
  g.df = function(a, b) {
    return this.nb ? new Fb(this, a, b) : null;
  };
  g.matches = function(a) {
    return a instanceof gd ? a.Pb && this.Pb ? a.Pb === this.Pb && a.pb === this.pb : !0 : !1;
  };
  g.qf = function() {
    return null !== this.Pb;
  };
  function hd(a, b, c) {
    this.ha = a;
    this.nb = b;
    this.pb = c;
  }
  g = hd.prototype;
  g.If = function(a) {
    a = "children_added" === a ? "child_added" : a;
    return ("children_removed" === a ? "child_removed" : a) in this.ha;
  };
  g.df = function(a, b) {
    return this.nb ? new Fb(this, a, b) : null;
  };
  g.createEvent = function(a, b) {
    I(null != a.Va, "Child events should have a childName.");
    var c = b.Gb().u(a.Va);
    return new Eb(a.type, this, new P(a.Ia, c, b.n.g), a.Od);
  };
  g.Ub = function(a) {
    var b = this.pb;
    if ("cancel" === a.ve()) {
      I(this.nb, "Raising a cancel event on a listener with no cancel callback");
      var c = this.nb;
      return function() {
        c.call(b, a.error);
      };
    }
    var d = this.ha[a.rd];
    return function() {
      d.call(b, a.Wd, a.Od);
    };
  };
  g.matches = function(a) {
    if (a instanceof hd) {
      if (!this.ha || !a.ha)
        return !0;
      if (this.pb === a.pb) {
        var b = pa(a.ha);
        if (b === pa(this.ha)) {
          if (1 === b) {
            var b = qa(a.ha),
                c = qa(this.ha);
            return c === b && (!a.ha[b] || !this.ha[c] || a.ha[b] === this.ha[c]);
          }
          return oa(this.ha, function(b, c) {
            return a.ha[c] === b;
          });
        }
      }
    }
    return !1;
  };
  g.qf = function() {
    return null !== this.ha;
  };
  function id(a) {
    this.g = a;
  }
  g = id.prototype;
  g.G = function(a, b, c, d, e, f) {
    I(a.Hc(this.g), "A node must be indexed if only a child is updated");
    e = a.R(b);
    if (e.Q(d).ca(c.Q(d)) && e.e() == c.e())
      return a;
    null != f && (c.e() ? a.Da(b) ? fd(f, new C("child_removed", e, b)) : I(a.K(), "A child remove without an old child only makes sense on a leaf node") : e.e() ? fd(f, new C("child_added", c, b)) : fd(f, new C("child_changed", c, b, e)));
    return a.K() && c.e() ? a : a.U(b, c).jb(this.g);
  };
  g.xa = function(a, b, c) {
    null != c && (a.K() || a.P(M, function(a, e) {
      b.Da(a) || fd(c, new C("child_removed", e, a));
    }), b.K() || b.P(M, function(b, e) {
      if (a.Da(b)) {
        var f = a.R(b);
        f.ca(e) || fd(c, new C("child_changed", e, b, f));
      } else
        fd(c, new C("child_added", e, b));
    }));
    return b.jb(this.g);
  };
  g.ga = function(a, b) {
    return a.e() ? B : a.ga(b);
  };
  g.Ma = function() {
    return !1;
  };
  g.Vb = function() {
    return this;
  };
  function jd(a) {
    this.xe = new id(a.g);
    this.g = a.g;
    var b;
    a.ma ? (b = kd(a), b = a.g.Nc(ld(a), b)) : b = a.g.Rc();
    this.bd = b;
    a.pa ? (b = md(a), a = a.g.Nc(nd(a), b)) : a = a.g.Oc();
    this.Ec = a;
  }
  g = jd.prototype;
  g.matches = function(a) {
    return 0 >= this.g.compare(this.bd, a) && 0 >= this.g.compare(a, this.Ec);
  };
  g.G = function(a, b, c, d, e, f) {
    this.matches(new E(b, c)) || (c = B);
    return this.xe.G(a, b, c, d, e, f);
  };
  g.xa = function(a, b, c) {
    b.K() && (b = B);
    var d = b.jb(this.g),
        d = d.ga(B),
        e = this;
    b.P(M, function(a, b) {
      e.matches(new E(a, b)) || (d = d.U(a, B));
    });
    return this.xe.xa(a, d, c);
  };
  g.ga = function(a) {
    return a;
  };
  g.Ma = function() {
    return !0;
  };
  g.Vb = function() {
    return this.xe;
  };
  function od(a) {
    this.sa = new jd(a);
    this.g = a.g;
    I(a.ja, "Only valid if limit has been set");
    this.ka = a.ka;
    this.Hb = !pd(a);
  }
  g = od.prototype;
  g.G = function(a, b, c, d, e, f) {
    this.sa.matches(new E(b, c)) || (c = B);
    return a.R(b).ca(c) ? a : a.Bb() < this.ka ? this.sa.Vb().G(a, b, c, d, e, f) : qd(this, a, b, c, e, f);
  };
  g.xa = function(a, b, c) {
    var d;
    if (b.K() || b.e())
      d = B.jb(this.g);
    else if (2 * this.ka < b.Bb() && b.Hc(this.g)) {
      d = B.jb(this.g);
      b = this.Hb ? b.Zb(this.sa.Ec, this.g) : b.Xb(this.sa.bd, this.g);
      for (var e = 0; 0 < b.Oa.length && e < this.ka; ) {
        var f = H(b),
            h;
        if (h = this.Hb ? 0 >= this.g.compare(this.sa.bd, f) : 0 >= this.g.compare(f, this.sa.Ec))
          d = d.U(f.name, f.S), e++;
        else
          break;
      }
    } else {
      d = b.jb(this.g);
      d = d.ga(B);
      var k,
          m,
          l;
      if (this.Hb) {
        b = d.pf(this.g);
        k = this.sa.Ec;
        m = this.sa.bd;
        var r = rd(this.g);
        l = function(a, b) {
          return r(b, a);
        };
      } else
        b = d.Wb(this.g), k = this.sa.bd, m = this.sa.Ec, l = rd(this.g);
      for (var e = 0,
          x = !1; 0 < b.Oa.length; )
        f = H(b), !x && 0 >= l(k, f) && (x = !0), (h = x && e < this.ka && 0 >= l(f, m)) ? e++ : d = d.U(f.name, B);
    }
    return this.sa.Vb().xa(a, d, c);
  };
  g.ga = function(a) {
    return a;
  };
  g.Ma = function() {
    return !0;
  };
  g.Vb = function() {
    return this.sa.Vb();
  };
  function qd(a, b, c, d, e, f) {
    var h;
    if (a.Hb) {
      var k = rd(a.g);
      h = function(a, b) {
        return k(b, a);
      };
    } else
      h = rd(a.g);
    I(b.Bb() == a.ka, "");
    var m = new E(c, d),
        l = a.Hb ? sd(b, a.g) : td(b, a.g),
        r = a.sa.matches(m);
    if (b.Da(c)) {
      for (var x = b.R(c),
          l = e.ue(a.g, l, a.Hb); null != l && (l.name == c || b.Da(l.name)); )
        l = e.ue(a.g, l, a.Hb);
      e = null == l ? 1 : h(l, m);
      if (r && !d.e() && 0 <= e)
        return null != f && fd(f, new C("child_changed", d, c, x)), b.U(c, d);
      null != f && fd(f, new C("child_removed", x, c));
      b = b.U(c, B);
      return null != l && a.sa.matches(l) ? (null != f && fd(f, new C("child_added", l.S, l.name)), b.U(l.name, l.S)) : b;
    }
    return d.e() ? b : r && 0 <= h(l, m) ? (null != f && (fd(f, new C("child_removed", l.S, l.name)), fd(f, new C("child_added", d, c))), b.U(c, d).U(l.name, B)) : b;
  }
  ;
  function ud(a, b) {
    this.fe = a;
    this.eg = b;
  }
  function wd(a) {
    this.V = a;
  }
  wd.prototype.$a = function(a, b, c, d) {
    var e = new ed,
        f;
    if (b.type === Wb)
      b.source.se ? c = xd(this, a, b.path, b.Fa, c, d, e) : (I(b.source.mf, "Unknown source."), f = b.source.Ye || Hb(a.w()) && !b.path.e(), c = yd(this, a, b.path, b.Fa, c, d, f, e));
    else if (b.type === zd)
      b.source.se ? c = Ad(this, a, b.path, b.children, c, d, e) : (I(b.source.mf, "Unknown source."), f = b.source.Ye || Hb(a.w()), c = Bd(this, a, b.path, b.children, c, d, f, e));
    else if (b.type === Cd)
      if (b.Td)
        if (b = b.path, null != c.sc(b))
          c = a;
        else {
          f = new pb(c, a, d);
          d = a.O.j();
          if (b.e() || ".priority" === D(b))
            Gb(a.w()) ? b = c.za(sb(a)) : (b = a.w().j(), I(b instanceof Q, "serverChildren would be complete if leaf node"), b = c.xc(b)), b = this.V.xa(d, b, e);
          else {
            var h = D(b),
                k = c.wc(h, a.w());
            null == k && qb(a.w(), h) && (k = d.R(h));
            b = null != k ? this.V.G(d, h, k, G(b), f, e) : a.O.j().Da(h) ? this.V.G(d, h, B, G(b), f, e) : d;
            b.e() && Gb(a.w()) && (d = c.za(sb(a)), d.K() && (b = this.V.xa(b, d, e)));
          }
          d = Gb(a.w()) || null != c.sc(F);
          c = Dd(a, b, d, this.V.Ma());
        }
      else
        c = Ed(this, a, b.path, b.Ob, c, d, e);
    else if (b.type === Yb)
      d = b.path, b = a.w(), f = b.j(), h = b.ea || d.e(), c = Fd(this, new Gd(a.O, new rb(f, h, b.Tb)), d, c, ob, e);
    else
      throw Dc("Unknown operation type: " + b.type);
    e = ra(e.ab);
    d = c;
    b = d.O;
    b.ea && (f = b.j().K() || b.j().e(), h = Hd(a), (0 < e.length || !a.O.ea || f && !b.j().ca(h) || !b.j().C().ca(h.C())) && e.push(Cb(Hd(d))));
    return new ud(c, e);
  };
  function Fd(a, b, c, d, e, f) {
    var h = b.O;
    if (null != d.sc(c))
      return b;
    var k;
    if (c.e())
      I(Gb(b.w()), "If change path is empty, we must have complete server data"), Hb(b.w()) ? (e = sb(b), d = d.xc(e instanceof Q ? e : B)) : d = d.za(sb(b)), f = a.V.xa(b.O.j(), d, f);
    else {
      var m = D(c);
      if (".priority" == m)
        I(1 == Id(c), "Can't have a priority with additional path components"), f = h.j(), k = b.w().j(), d = d.hd(c, f, k), f = null != d ? a.V.ga(f, d) : h.j();
      else {
        var l = G(c);
        qb(h, m) ? (k = b.w().j(), d = d.hd(c, h.j(), k), d = null != d ? h.j().R(m).G(l, d) : h.j().R(m)) : d = d.wc(m, b.w());
        f = null != d ? a.V.G(h.j(), m, d, l, e, f) : h.j();
      }
    }
    return Dd(b, f, h.ea || c.e(), a.V.Ma());
  }
  function yd(a, b, c, d, e, f, h, k) {
    var m = b.w();
    h = h ? a.V : a.V.Vb();
    if (c.e())
      d = h.xa(m.j(), d, null);
    else if (h.Ma() && !m.Tb)
      d = m.j().G(c, d), d = h.xa(m.j(), d, null);
    else {
      var l = D(c);
      if (!Ib(m, c) && 1 < Id(c))
        return b;
      var r = G(c);
      d = m.j().R(l).G(r, d);
      d = ".priority" == l ? h.ga(m.j(), d) : h.G(m.j(), l, d, r, ob, null);
    }
    m = m.ea || c.e();
    b = new Gd(b.O, new rb(d, m, h.Ma()));
    return Fd(a, b, c, e, new pb(e, b, f), k);
  }
  function xd(a, b, c, d, e, f, h) {
    var k = b.O;
    e = new pb(e, b, f);
    if (c.e())
      h = a.V.xa(b.O.j(), d, h), a = Dd(b, h, !0, a.V.Ma());
    else if (f = D(c), ".priority" === f)
      h = a.V.ga(b.O.j(), d), a = Dd(b, h, k.ea, k.Tb);
    else {
      c = G(c);
      var m = k.j().R(f);
      if (!c.e()) {
        var l = e.nf(f);
        d = null != l ? ".priority" === Jd(c) && l.Q(c.parent()).e() ? l : l.G(c, d) : B;
      }
      m.ca(d) ? a = b : (h = a.V.G(k.j(), f, d, c, e, h), a = Dd(b, h, k.ea, a.V.Ma()));
    }
    return a;
  }
  function Ad(a, b, c, d, e, f, h) {
    var k = b;
    Kd(d, function(d, l) {
      var r = c.u(d);
      qb(b.O, D(r)) && (k = xd(a, k, r, l, e, f, h));
    });
    Kd(d, function(d, l) {
      var r = c.u(d);
      qb(b.O, D(r)) || (k = xd(a, k, r, l, e, f, h));
    });
    return k;
  }
  function Ld(a, b) {
    Kd(b, function(b, d) {
      a = a.G(b, d);
    });
    return a;
  }
  function Bd(a, b, c, d, e, f, h, k) {
    if (b.w().j().e() && !Gb(b.w()))
      return b;
    var m = b;
    c = c.e() ? d : Md(Nd, c, d);
    var l = b.w().j();
    c.children.ia(function(c, d) {
      if (l.Da(c)) {
        var J = b.w().j().R(c),
            J = Ld(J, d);
        m = yd(a, m, new K(c), J, e, f, h, k);
      }
    });
    c.children.ia(function(c, d) {
      var J = !qb(b.w(), c) && null == d.value;
      l.Da(c) || J || (J = b.w().j().R(c), J = Ld(J, d), m = yd(a, m, new K(c), J, e, f, h, k));
    });
    return m;
  }
  function Ed(a, b, c, d, e, f, h) {
    if (null != e.sc(c))
      return b;
    var k = Hb(b.w()),
        m = b.w();
    if (null != d.value) {
      if (c.e() && m.ea || Ib(m, c))
        return yd(a, b, c, m.j().Q(c), e, f, k, h);
      if (c.e()) {
        var l = Nd;
        m.j().P(Od, function(a, b) {
          l = l.set(new K(a), b);
        });
        return Bd(a, b, c, l, e, f, k, h);
      }
      return b;
    }
    l = Nd;
    Kd(d, function(a) {
      var b = c.u(a);
      Ib(m, b) && (l = l.set(a, m.j().Q(b)));
    });
    return Bd(a, b, c, l, e, f, k, h);
  }
  ;
  function Pd() {}
  var Qd = {};
  function rd(a) {
    return q(a.compare, a);
  }
  Pd.prototype.xd = function(a, b) {
    return 0 !== this.compare(new E("[MIN_NAME]", a), new E("[MIN_NAME]", b));
  };
  Pd.prototype.Rc = function() {
    return Rd;
  };
  function Sd(a) {
    I(!a.e() && ".priority" !== D(a), "Can't create PathIndex with empty path or .priority key");
    this.bc = a;
  }
  ma(Sd, Pd);
  g = Sd.prototype;
  g.Gc = function(a) {
    return !a.Q(this.bc).e();
  };
  g.compare = function(a, b) {
    var c = a.S.Q(this.bc),
        d = b.S.Q(this.bc),
        c = c.Bc(d);
    return 0 === c ? Tb(a.name, b.name) : c;
  };
  g.Nc = function(a, b) {
    var c = L(a),
        c = B.G(this.bc, c);
    return new E(b, c);
  };
  g.Oc = function() {
    var a = B.G(this.bc, Td);
    return new E("[MAX_NAME]", a);
  };
  g.toString = function() {
    return this.bc.slice().join("/");
  };
  function Ud() {}
  ma(Ud, Pd);
  g = Ud.prototype;
  g.compare = function(a, b) {
    var c = a.S.C(),
        d = b.S.C(),
        c = c.Bc(d);
    return 0 === c ? Tb(a.name, b.name) : c;
  };
  g.Gc = function(a) {
    return !a.C().e();
  };
  g.xd = function(a, b) {
    return !a.C().ca(b.C());
  };
  g.Rc = function() {
    return Rd;
  };
  g.Oc = function() {
    return new E("[MAX_NAME]", new rc("[PRIORITY-POST]", Td));
  };
  g.Nc = function(a, b) {
    var c = L(a);
    return new E(b, new rc("[PRIORITY-POST]", c));
  };
  g.toString = function() {
    return ".priority";
  };
  var M = new Ud;
  function Vd() {}
  ma(Vd, Pd);
  g = Vd.prototype;
  g.compare = function(a, b) {
    return Tb(a.name, b.name);
  };
  g.Gc = function() {
    throw Dc("KeyIndex.isDefinedOn not expected to be called.");
  };
  g.xd = function() {
    return !1;
  };
  g.Rc = function() {
    return Rd;
  };
  g.Oc = function() {
    return new E("[MAX_NAME]", B);
  };
  g.Nc = function(a) {
    I(p(a), "KeyIndex indexValue must always be a string.");
    return new E(a, B);
  };
  g.toString = function() {
    return ".key";
  };
  var Od = new Vd;
  function Wd() {}
  ma(Wd, Pd);
  g = Wd.prototype;
  g.compare = function(a, b) {
    var c = a.S.Bc(b.S);
    return 0 === c ? Tb(a.name, b.name) : c;
  };
  g.Gc = function() {
    return !0;
  };
  g.xd = function(a, b) {
    return !a.ca(b);
  };
  g.Rc = function() {
    return Rd;
  };
  g.Oc = function() {
    return Xd;
  };
  g.Nc = function(a, b) {
    var c = L(a);
    return new E(b, c);
  };
  g.toString = function() {
    return ".value";
  };
  var Yd = new Wd;
  function Zd() {
    this.Sb = this.pa = this.Jb = this.ma = this.ja = !1;
    this.ka = 0;
    this.Lb = "";
    this.dc = null;
    this.vb = "";
    this.ac = null;
    this.tb = "";
    this.g = M;
  }
  var $d = new Zd;
  function pd(a) {
    return "" === a.Lb ? a.ma : "l" === a.Lb;
  }
  function ld(a) {
    I(a.ma, "Only valid if start has been set");
    return a.dc;
  }
  function kd(a) {
    I(a.ma, "Only valid if start has been set");
    return a.Jb ? a.vb : "[MIN_NAME]";
  }
  function nd(a) {
    I(a.pa, "Only valid if end has been set");
    return a.ac;
  }
  function md(a) {
    I(a.pa, "Only valid if end has been set");
    return a.Sb ? a.tb : "[MAX_NAME]";
  }
  function ae(a) {
    var b = new Zd;
    b.ja = a.ja;
    b.ka = a.ka;
    b.ma = a.ma;
    b.dc = a.dc;
    b.Jb = a.Jb;
    b.vb = a.vb;
    b.pa = a.pa;
    b.ac = a.ac;
    b.Sb = a.Sb;
    b.tb = a.tb;
    b.g = a.g;
    return b;
  }
  g = Zd.prototype;
  g.De = function(a) {
    var b = ae(this);
    b.ja = !0;
    b.ka = a;
    b.Lb = "";
    return b;
  };
  g.Ee = function(a) {
    var b = ae(this);
    b.ja = !0;
    b.ka = a;
    b.Lb = "l";
    return b;
  };
  g.Fe = function(a) {
    var b = ae(this);
    b.ja = !0;
    b.ka = a;
    b.Lb = "r";
    return b;
  };
  g.Xd = function(a, b) {
    var c = ae(this);
    c.ma = !0;
    n(a) || (a = null);
    c.dc = a;
    null != b ? (c.Jb = !0, c.vb = b) : (c.Jb = !1, c.vb = "");
    return c;
  };
  g.qd = function(a, b) {
    var c = ae(this);
    c.pa = !0;
    n(a) || (a = null);
    c.ac = a;
    n(b) ? (c.Sb = !0, c.tb = b) : (c.eh = !1, c.tb = "");
    return c;
  };
  function be(a, b) {
    var c = ae(a);
    c.g = b;
    return c;
  }
  function ce(a) {
    var b = {};
    a.ma && (b.sp = a.dc, a.Jb && (b.sn = a.vb));
    a.pa && (b.ep = a.ac, a.Sb && (b.en = a.tb));
    if (a.ja) {
      b.l = a.ka;
      var c = a.Lb;
      "" === c && (c = pd(a) ? "l" : "r");
      b.vf = c;
    }
    a.g !== M && (b.i = a.g.toString());
    return b;
  }
  function R(a) {
    return !(a.ma || a.pa || a.ja);
  }
  function de(a) {
    return R(a) && a.g == M;
  }
  function ee(a) {
    var b = {};
    if (de(a))
      return b;
    var c;
    a.g === M ? c = "$priority" : a.g === Yd ? c = "$value" : a.g === Od ? c = "$key" : (I(a.g instanceof Sd, "Unrecognized index type!"), c = a.g.toString());
    b.orderBy = A(c);
    a.ma && (b.startAt = A(a.dc), a.Jb && (b.startAt += "," + A(a.vb)));
    a.pa && (b.endAt = A(a.ac), a.Sb && (b.endAt += "," + A(a.tb)));
    a.ja && (pd(a) ? b.limitToFirst = a.ka : b.limitToLast = a.ka);
    return b;
  }
  g.toString = function() {
    return A(ce(this));
  };
  function fe(a, b) {
    this.yd = a;
    this.cc = b;
  }
  fe.prototype.get = function(a) {
    var b = v(this.yd, a);
    if (!b)
      throw Error("No index defined for " + a);
    return b === Qd ? null : b;
  };
  function ge(a, b, c) {
    var d = na(a.yd, function(d, f) {
      var h = v(a.cc, f);
      I(h, "Missing index implementation for " + f);
      if (d === Qd) {
        if (h.Gc(b.S)) {
          for (var k = [],
              m = c.Wb(Rb),
              l = H(m); l; )
            l.name != b.name && k.push(l), l = H(m);
          k.push(b);
          return he(k, rd(h));
        }
        return Qd;
      }
      h = c.get(b.name);
      k = d;
      h && (k = k.remove(new E(b.name, h)));
      return k.Na(b, b.S);
    });
    return new fe(d, a.cc);
  }
  function ie(a, b, c) {
    var d = na(a.yd, function(a) {
      if (a === Qd)
        return a;
      var d = c.get(b.name);
      return d ? a.remove(new E(b.name, d)) : a;
    });
    return new fe(d, a.cc);
  }
  var je = new fe({".priority": Qd}, {".priority": M});
  function rc(a, b) {
    this.B = a;
    I(n(this.B) && null !== this.B, "LeafNode shouldn't be created with null/undefined value.");
    this.aa = b || B;
    ke(this.aa);
    this.Ab = null;
  }
  var le = ["object", "boolean", "number", "string"];
  g = rc.prototype;
  g.K = function() {
    return !0;
  };
  g.C = function() {
    return this.aa;
  };
  g.ga = function(a) {
    return new rc(this.B, a);
  };
  g.R = function(a) {
    return ".priority" === a ? this.aa : B;
  };
  g.Q = function(a) {
    return a.e() ? this : ".priority" === D(a) ? this.aa : B;
  };
  g.Da = function() {
    return !1;
  };
  g.of = function() {
    return null;
  };
  g.U = function(a, b) {
    return ".priority" === a ? this.ga(b) : b.e() && ".priority" !== a ? this : B.U(a, b).ga(this.aa);
  };
  g.G = function(a, b) {
    var c = D(a);
    if (null === c)
      return b;
    if (b.e() && ".priority" !== c)
      return this;
    I(".priority" !== c || 1 === Id(a), ".priority must be the last token in a path");
    return this.U(c, B.G(G(a), b));
  };
  g.e = function() {
    return !1;
  };
  g.Bb = function() {
    return 0;
  };
  g.P = function() {
    return !1;
  };
  g.I = function(a) {
    return a && !this.C().e() ? {
      ".value": this.Ca(),
      ".priority": this.C().I()
    } : this.Ca();
  };
  g.hash = function() {
    if (null === this.Ab) {
      var a = "";
      this.aa.e() || (a += "priority:" + me(this.aa.I()) + ":");
      var b = typeof this.B,
          a = a + (b + ":"),
          a = "number" === b ? a + Vc(this.B) : a + this.B;
      this.Ab = Fc(a);
    }
    return this.Ab;
  };
  g.Ca = function() {
    return this.B;
  };
  g.Bc = function(a) {
    if (a === B)
      return 1;
    if (a instanceof Q)
      return -1;
    I(a.K(), "Unknown node type");
    var b = typeof a.B,
        c = typeof this.B,
        d = Oa(le, b),
        e = Oa(le, c);
    I(0 <= d, "Unknown leaf type: " + b);
    I(0 <= e, "Unknown leaf type: " + c);
    return d === e ? "object" === c ? 0 : this.B < a.B ? -1 : this.B === a.B ? 0 : 1 : e - d;
  };
  g.jb = function() {
    return this;
  };
  g.Hc = function() {
    return !0;
  };
  g.ca = function(a) {
    return a === this ? !0 : a.K() ? this.B === a.B && this.aa.ca(a.aa) : !1;
  };
  g.toString = function() {
    return A(this.I(!0));
  };
  function Q(a, b, c) {
    this.m = a;
    (this.aa = b) && ke(this.aa);
    a.e() && I(!this.aa || this.aa.e(), "An empty node cannot have a priority");
    this.ub = c;
    this.Ab = null;
  }
  g = Q.prototype;
  g.K = function() {
    return !1;
  };
  g.C = function() {
    return this.aa || B;
  };
  g.ga = function(a) {
    return this.m.e() ? this : new Q(this.m, a, this.ub);
  };
  g.R = function(a) {
    if (".priority" === a)
      return this.C();
    a = this.m.get(a);
    return null === a ? B : a;
  };
  g.Q = function(a) {
    var b = D(a);
    return null === b ? this : this.R(b).Q(G(a));
  };
  g.Da = function(a) {
    return null !== this.m.get(a);
  };
  g.U = function(a, b) {
    I(b, "We should always be passing snapshot nodes");
    if (".priority" === a)
      return this.ga(b);
    var c = new E(a, b),
        d,
        e;
    b.e() ? (d = this.m.remove(a), c = ie(this.ub, c, this.m)) : (d = this.m.Na(a, b), c = ge(this.ub, c, this.m));
    e = d.e() ? B : this.aa;
    return new Q(d, e, c);
  };
  g.G = function(a, b) {
    var c = D(a);
    if (null === c)
      return b;
    I(".priority" !== D(a) || 1 === Id(a), ".priority must be the last token in a path");
    var d = this.R(c).G(G(a), b);
    return this.U(c, d);
  };
  g.e = function() {
    return this.m.e();
  };
  g.Bb = function() {
    return this.m.count();
  };
  var ne = /^(0|[1-9]\d*)$/;
  g = Q.prototype;
  g.I = function(a) {
    if (this.e())
      return null;
    var b = {},
        c = 0,
        d = 0,
        e = !0;
    this.P(M, function(f, h) {
      b[f] = h.I(a);
      c++;
      e && ne.test(f) ? d = Math.max(d, Number(f)) : e = !1;
    });
    if (!a && e && d < 2 * c) {
      var f = [],
          h;
      for (h in b)
        f[h] = b[h];
      return f;
    }
    a && !this.C().e() && (b[".priority"] = this.C().I());
    return b;
  };
  g.hash = function() {
    if (null === this.Ab) {
      var a = "";
      this.C().e() || (a += "priority:" + me(this.C().I()) + ":");
      this.P(M, function(b, c) {
        var d = c.hash();
        "" !== d && (a += ":" + b + ":" + d);
      });
      this.Ab = "" === a ? "" : Fc(a);
    }
    return this.Ab;
  };
  g.of = function(a, b, c) {
    return (c = oe(this, c)) ? (a = ac(c, new E(a, b))) ? a.name : null : ac(this.m, a);
  };
  function sd(a, b) {
    var c;
    c = (c = oe(a, b)) ? (c = c.Qc()) && c.name : a.m.Qc();
    return c ? new E(c, a.m.get(c)) : null;
  }
  function td(a, b) {
    var c;
    c = (c = oe(a, b)) ? (c = c.ec()) && c.name : a.m.ec();
    return c ? new E(c, a.m.get(c)) : null;
  }
  g.P = function(a, b) {
    var c = oe(this, a);
    return c ? c.ia(function(a) {
      return b(a.name, a.S);
    }) : this.m.ia(b);
  };
  g.Wb = function(a) {
    return this.Xb(a.Rc(), a);
  };
  g.Xb = function(a, b) {
    var c = oe(this, b);
    if (c)
      return c.Xb(a, function(a) {
        return a;
      });
    for (var c = this.m.Xb(a.name, Rb),
        d = cc(c); null != d && 0 > b.compare(d, a); )
      H(c), d = cc(c);
    return c;
  };
  g.pf = function(a) {
    return this.Zb(a.Oc(), a);
  };
  g.Zb = function(a, b) {
    var c = oe(this, b);
    if (c)
      return c.Zb(a, function(a) {
        return a;
      });
    for (var c = this.m.Zb(a.name, Rb),
        d = cc(c); null != d && 0 < b.compare(d, a); )
      H(c), d = cc(c);
    return c;
  };
  g.Bc = function(a) {
    return this.e() ? a.e() ? 0 : -1 : a.K() || a.e() ? 1 : a === Td ? -1 : 0;
  };
  g.jb = function(a) {
    if (a === Od || ta(this.ub.cc, a.toString()))
      return this;
    var b = this.ub,
        c = this.m;
    I(a !== Od, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    for (var d = [],
        e = !1,
        c = c.Wb(Rb),
        f = H(c); f; )
      e = e || a.Gc(f.S), d.push(f), f = H(c);
    d = e ? he(d, rd(a)) : Qd;
    e = a.toString();
    c = xa(b.cc);
    c[e] = a;
    a = xa(b.yd);
    a[e] = d;
    return new Q(this.m, this.aa, new fe(a, c));
  };
  g.Hc = function(a) {
    return a === Od || ta(this.ub.cc, a.toString());
  };
  g.ca = function(a) {
    if (a === this)
      return !0;
    if (a.K())
      return !1;
    if (this.C().ca(a.C()) && this.m.count() === a.m.count()) {
      var b = this.Wb(M);
      a = a.Wb(M);
      for (var c = H(b),
          d = H(a); c && d; ) {
        if (c.name !== d.name || !c.S.ca(d.S))
          return !1;
        c = H(b);
        d = H(a);
      }
      return null === c && null === d;
    }
    return !1;
  };
  function oe(a, b) {
    return b === Od ? null : a.ub.get(b.toString());
  }
  g.toString = function() {
    return A(this.I(!0));
  };
  function L(a, b) {
    if (null === a)
      return B;
    var c = null;
    "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
    I(null === c || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c, "Invalid priority type found: " + typeof c);
    "object" === typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]);
    if ("object" !== typeof a || ".sv" in a)
      return new rc(a, L(c));
    if (a instanceof Array) {
      var d = B,
          e = a;
      t(e, function(a, b) {
        if (u(e, b) && "." !== b.substring(0, 1)) {
          var c = L(a);
          if (c.K() || !c.e())
            d = d.U(b, c);
        }
      });
      return d.ga(L(c));
    }
    var f = [],
        h = !1,
        k = a;
    gb(k, function(a) {
      if ("string" !== typeof a || "." !== a.substring(0, 1)) {
        var b = L(k[a]);
        b.e() || (h = h || !b.C().e(), f.push(new E(a, b)));
      }
    });
    if (0 == f.length)
      return B;
    var m = he(f, Sb, function(a) {
      return a.name;
    }, Ub);
    if (h) {
      var l = he(f, rd(M));
      return new Q(m, L(c), new fe({".priority": l}, {".priority": M}));
    }
    return new Q(m, L(c), je);
  }
  var pe = Math.log(2);
  function qe(a) {
    this.count = parseInt(Math.log(a + 1) / pe, 10);
    this.ff = this.count - 1;
    this.dg = a + 1 & parseInt(Array(this.count + 1).join("1"), 2);
  }
  function re(a) {
    var b = !(a.dg & 1 << a.ff);
    a.ff--;
    return b;
  }
  function he(a, b, c, d) {
    function e(b, d) {
      var f = d - b;
      if (0 == f)
        return null;
      if (1 == f) {
        var l = a[b],
            r = c ? c(l) : l;
        return new dc(r, l.S, !1, null, null);
      }
      var l = parseInt(f / 2, 10) + b,
          f = e(b, l),
          x = e(l + 1, d),
          l = a[l],
          r = c ? c(l) : l;
      return new dc(r, l.S, !1, f, x);
    }
    a.sort(b);
    var f = function(b) {
      function d(b, h) {
        var k = r - b,
            x = r;
        r -= b;
        var x = e(k + 1, x),
            k = a[k],
            J = c ? c(k) : k,
            x = new dc(J, k.S, h, null, x);
        f ? f.left = x : l = x;
        f = x;
      }
      for (var f = null,
          l = null,
          r = a.length,
          x = 0; x < b.count; ++x) {
        var J = re(b),
            vd = Math.pow(2, b.count - (x + 1));
        J ? d(vd, !1) : (d(vd, !1), d(vd, !0));
      }
      return l;
    }(new qe(a.length));
    return null !== f ? new Zb(d || b, f) : new Zb(d || b);
  }
  function me(a) {
    return "number" === typeof a ? "number:" + Vc(a) : "string:" + a;
  }
  function ke(a) {
    if (a.K()) {
      var b = a.I();
      I("string" === typeof b || "number" === typeof b || "object" === typeof b && u(b, ".sv"), "Priority must be a string or number.");
    } else
      I(a === Td || a.e(), "priority of unexpected type.");
    I(a === Td || a.C().e(), "Priority nodes can't have a priority of their own.");
  }
  var B = new Q(new Zb(Ub), null, je);
  function se() {
    Q.call(this, new Zb(Ub), B, je);
  }
  ma(se, Q);
  g = se.prototype;
  g.Bc = function(a) {
    return a === this ? 0 : 1;
  };
  g.ca = function(a) {
    return a === this;
  };
  g.C = function() {
    return this;
  };
  g.R = function() {
    return B;
  };
  g.e = function() {
    return !1;
  };
  var Td = new se,
      Rd = new E("[MIN_NAME]", B),
      Xd = new E("[MAX_NAME]", Td);
  function Gd(a, b) {
    this.O = a;
    this.Vd = b;
  }
  function Dd(a, b, c, d) {
    return new Gd(new rb(b, c, d), a.Vd);
  }
  function Hd(a) {
    return a.O.ea ? a.O.j() : null;
  }
  Gd.prototype.w = function() {
    return this.Vd;
  };
  function sb(a) {
    return a.Vd.ea ? a.Vd.j() : null;
  }
  ;
  function te(a, b) {
    this.W = a;
    var c = a.n,
        d = new id(c.g),
        c = R(c) ? new id(c.g) : c.ja ? new od(c) : new jd(c);
    this.Ff = new wd(c);
    var e = b.w(),
        f = b.O,
        h = d.xa(B, e.j(), null),
        k = c.xa(B, f.j(), null);
    this.Ja = new Gd(new rb(k, f.ea, c.Ma()), new rb(h, e.ea, d.Ma()));
    this.Wa = [];
    this.lg = new ad(a);
  }
  function ue(a) {
    return a.W;
  }
  g = te.prototype;
  g.w = function() {
    return this.Ja.w().j();
  };
  g.bb = function(a) {
    var b = sb(this.Ja);
    return b && (R(this.W.n) || !a.e() && !b.R(D(a)).e()) ? b.Q(a) : null;
  };
  g.e = function() {
    return 0 === this.Wa.length;
  };
  g.Nb = function(a) {
    this.Wa.push(a);
  };
  g.hb = function(a, b) {
    var c = [];
    if (b) {
      I(null == a, "A cancel should cancel all event registrations.");
      var d = this.W.path;
      Pa(this.Wa, function(a) {
        (a = a.df(b, d)) && c.push(a);
      });
    }
    if (a) {
      for (var e = [],
          f = 0; f < this.Wa.length; ++f) {
        var h = this.Wa[f];
        if (!h.matches(a))
          e.push(h);
        else if (a.qf()) {
          e = e.concat(this.Wa.slice(f + 1));
          break;
        }
      }
      this.Wa = e;
    } else
      this.Wa = [];
    return c;
  };
  g.$a = function(a, b, c) {
    a.type === zd && null !== a.source.Fb && (I(sb(this.Ja), "We should always have a full cache before handling merges"), I(Hd(this.Ja), "Missing event cache, even though we have a server cache"));
    var d = this.Ja;
    a = this.Ff.$a(d, a, b, c);
    b = this.Ff;
    c = a.fe;
    I(c.O.j().Hc(b.V.g), "Event snap not indexed");
    I(c.w().j().Hc(b.V.g), "Server snap not indexed");
    I(Gb(a.fe.w()) || !Gb(d.w()), "Once a server snap is complete, it should never go back");
    this.Ja = a.fe;
    return ve(this, a.eg, a.fe.O.j(), null);
  };
  function we(a, b) {
    var c = a.Ja.O,
        d = [];
    c.j().K() || c.j().P(M, function(a, b) {
      d.push(new C("child_added", b, a));
    });
    c.ea && d.push(Cb(c.j()));
    return ve(a, d, c.j(), b);
  }
  function ve(a, b, c, d) {
    return bd(a.lg, b, c, d ? [d] : a.Wa);
  }
  ;
  function xe(a, b, c) {
    this.type = zd;
    this.source = a;
    this.path = b;
    this.children = c;
  }
  xe.prototype.Vc = function(a) {
    if (this.path.e())
      return a = this.children.subtree(new K(a)), a.e() ? null : a.value ? new Vb(this.source, F, a.value) : new xe(this.source, F, a);
    I(D(this.path) === a, "Can't get a merge for a child not on the path of the operation");
    return new xe(this.source, G(this.path), this.children);
  };
  xe.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  };
  function ye(a, b) {
    this.f = Kc("p:rest:");
    this.F = a;
    this.Eb = b;
    this.Aa = null;
    this.$ = {};
  }
  function ze(a, b) {
    if (n(b))
      return "tag$" + b;
    I(de(a.n), "should have a tag if it's not a default query.");
    return a.path.toString();
  }
  g = ye.prototype;
  g.uf = function(a, b, c, d) {
    var e = a.path.toString();
    this.f("Listen called for " + e + " " + a.va());
    var f = ze(a, c),
        h = {};
    this.$[f] = h;
    a = ee(a.n);
    var k = this;
    Ae(this, e + ".json", a, function(a, b) {
      var r = b;
      404 === a && (a = r = null);
      null === a && k.Eb(e, r, !1, c);
      v(k.$, f) === h && d(a ? 401 == a ? "permission_denied" : "rest_error:" + a : "ok", null);
    });
  };
  g.Qf = function(a, b) {
    var c = ze(a, b);
    delete this.$[c];
  };
  g.M = function(a, b) {
    this.Aa = a;
    var c = Yc(a),
        d = c.data,
        c = c.Ac && c.Ac.exp;
    b && b("ok", {
      auth: d,
      expires: c
    });
  };
  g.de = function(a) {
    this.Aa = null;
    a("ok", null);
  };
  g.Je = function() {};
  g.Bf = function() {};
  g.Hd = function() {};
  g.put = function() {};
  g.wf = function() {};
  g.Re = function() {};
  function Ae(a, b, c, d) {
    c = c || {};
    c.format = "export";
    a.Aa && (c.auth = a.Aa);
    var e = (a.F.ib ? "https://" : "http://") + a.F.host + b + "?" + ib(c);
    a.f("Sending REST request for " + e);
    var f = new XMLHttpRequest;
    f.onreadystatechange = function() {
      if (d && 4 === f.readyState) {
        a.f("REST Response for " + e + " received. status:", f.status, "response:", f.responseText);
        var b = null;
        if (200 <= f.status && 300 > f.status) {
          try {
            b = lb(f.responseText);
          } catch (c) {
            N("Failed to parse JSON response for " + e + ": " + f.responseText);
          }
          d(null, b);
        } else
          401 !== f.status && 404 !== f.status && N("Got unsuccessful REST response for " + e + " Status: " + f.status), d(f.status);
        d = null;
      }
    };
    f.open("GET", e, !0);
    f.send();
  }
  ;
  function Be(a) {
    I(ea(a) && 0 < a.length, "Requires a non-empty array");
    this.Wf = a;
    this.Mc = {};
  }
  Be.prototype.ce = function(a, b) {
    var c;
    c = this.Mc[a] || [];
    var d = c.length;
    if (0 < d) {
      for (var e = Array(d),
          f = 0; f < d; f++)
        e[f] = c[f];
      c = e;
    } else
      c = [];
    for (d = 0; d < c.length; d++)
      c[d].yc.apply(c[d].La, Array.prototype.slice.call(arguments, 1));
  };
  Be.prototype.Cb = function(a, b, c) {
    Ce(this, a);
    this.Mc[a] = this.Mc[a] || [];
    this.Mc[a].push({
      yc: b,
      La: c
    });
    (a = this.we(a)) && b.apply(c, a);
  };
  Be.prototype.gc = function(a, b, c) {
    Ce(this, a);
    a = this.Mc[a] || [];
    for (var d = 0; d < a.length; d++)
      if (a[d].yc === b && (!c || c === a[d].La)) {
        a.splice(d, 1);
        break;
      }
  };
  function Ce(a, b) {
    I(Ua(a.Wf, function(a) {
      return a === b;
    }), "Unknown event: " + b);
  }
  ;
  var De = function() {
    var a = 0,
        b = [];
    return function(c) {
      var d = c === a;
      a = c;
      for (var e = Array(8),
          f = 7; 0 <= f; f--)
        e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
      I(0 === c, "Cannot push at time == 0");
      c = e.join("");
      if (d) {
        for (f = 11; 0 <= f && 63 === b[f]; f--)
          b[f] = 0;
        b[f]++;
      } else
        for (f = 0; 12 > f; f++)
          b[f] = Math.floor(64 * Math.random());
      for (f = 0; 12 > f; f++)
        c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
      I(20 === c.length, "nextPushId: Length should be 20.");
      return c;
    };
  }();
  function Ee() {
    Be.call(this, ["online"]);
    this.ic = !0;
    if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
      var a = this;
      window.addEventListener("online", function() {
        a.ic || (a.ic = !0, a.ce("online", !0));
      }, !1);
      window.addEventListener("offline", function() {
        a.ic && (a.ic = !1, a.ce("online", !1));
      }, !1);
    }
  }
  ma(Ee, Be);
  Ee.prototype.we = function(a) {
    I("online" === a, "Unknown event type: " + a);
    return [this.ic];
  };
  ca(Ee);
  function Fe() {
    Be.call(this, ["visible"]);
    var a,
        b;
    "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
    this.Mb = !0;
    if (b) {
      var c = this;
      document.addEventListener(b, function() {
        var b = !document[a];
        b !== c.Mb && (c.Mb = b, c.ce("visible", b));
      }, !1);
    }
  }
  ma(Fe, Be);
  Fe.prototype.we = function(a) {
    I("visible" === a, "Unknown event type: " + a);
    return [this.Mb];
  };
  ca(Fe);
  function K(a, b) {
    if (1 == arguments.length) {
      this.o = a.split("/");
      for (var c = 0,
          d = 0; d < this.o.length; d++)
        0 < this.o[d].length && (this.o[c] = this.o[d], c++);
      this.o.length = c;
      this.Z = 0;
    } else
      this.o = a, this.Z = b;
  }
  function S(a, b) {
    var c = D(a);
    if (null === c)
      return b;
    if (c === D(b))
      return S(G(a), G(b));
    throw Error("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")");
  }
  function Ge(a, b) {
    for (var c = a.slice(),
        d = b.slice(),
        e = 0; e < c.length && e < d.length; e++) {
      var f = Tb(c[e], d[e]);
      if (0 !== f)
        return f;
    }
    return c.length === d.length ? 0 : c.length < d.length ? -1 : 1;
  }
  function D(a) {
    return a.Z >= a.o.length ? null : a.o[a.Z];
  }
  function Id(a) {
    return a.o.length - a.Z;
  }
  function G(a) {
    var b = a.Z;
    b < a.o.length && b++;
    return new K(a.o, b);
  }
  function Jd(a) {
    return a.Z < a.o.length ? a.o[a.o.length - 1] : null;
  }
  g = K.prototype;
  g.toString = function() {
    for (var a = "",
        b = this.Z; b < this.o.length; b++)
      "" !== this.o[b] && (a += "/" + this.o[b]);
    return a || "/";
  };
  g.slice = function(a) {
    return this.o.slice(this.Z + (a || 0));
  };
  g.parent = function() {
    if (this.Z >= this.o.length)
      return null;
    for (var a = [],
        b = this.Z; b < this.o.length - 1; b++)
      a.push(this.o[b]);
    return new K(a, 0);
  };
  g.u = function(a) {
    for (var b = [],
        c = this.Z; c < this.o.length; c++)
      b.push(this.o[c]);
    if (a instanceof K)
      for (c = a.Z; c < a.o.length; c++)
        b.push(a.o[c]);
    else
      for (a = a.split("/"), c = 0; c < a.length; c++)
        0 < a[c].length && b.push(a[c]);
    return new K(b, 0);
  };
  g.e = function() {
    return this.Z >= this.o.length;
  };
  g.ca = function(a) {
    if (Id(this) !== Id(a))
      return !1;
    for (var b = this.Z,
        c = a.Z; b <= this.o.length; b++, c++)
      if (this.o[b] !== a.o[c])
        return !1;
    return !0;
  };
  g.contains = function(a) {
    var b = this.Z,
        c = a.Z;
    if (Id(this) > Id(a))
      return !1;
    for (; b < this.o.length; ) {
      if (this.o[b] !== a.o[c])
        return !1;
      ++b;
      ++c;
    }
    return !0;
  };
  var F = new K("");
  function He(a, b) {
    this.Pa = a.slice();
    this.Ga = Math.max(1, this.Pa.length);
    this.hf = b;
    for (var c = 0; c < this.Pa.length; c++)
      this.Ga += Xc(this.Pa[c]);
    Ie(this);
  }
  He.prototype.push = function(a) {
    0 < this.Pa.length && (this.Ga += 1);
    this.Pa.push(a);
    this.Ga += Xc(a);
    Ie(this);
  };
  He.prototype.pop = function() {
    var a = this.Pa.pop();
    this.Ga -= Xc(a);
    0 < this.Pa.length && --this.Ga;
  };
  function Ie(a) {
    if (768 < a.Ga)
      throw Error(a.hf + "has a key path longer than 768 bytes (" + a.Ga + ").");
    if (32 < a.Pa.length)
      throw Error(a.hf + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Je(a));
  }
  function Je(a) {
    return 0 == a.Pa.length ? "" : "in property '" + a.Pa.join(".") + "'";
  }
  ;
  function Ke(a, b) {
    this.value = a;
    this.children = b || Le;
  }
  var Le = new Zb(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  function Me(a) {
    var b = Nd;
    t(a, function(a, d) {
      b = b.set(new K(d), a);
    });
    return b;
  }
  g = Ke.prototype;
  g.e = function() {
    return null === this.value && this.children.e();
  };
  function Ne(a, b, c) {
    if (null != a.value && c(a.value))
      return {
        path: F,
        value: a.value
      };
    if (b.e())
      return null;
    var d = D(b);
    a = a.children.get(d);
    return null !== a ? (b = Ne(a, G(b), c), null != b ? {
      path: (new K(d)).u(b.path),
      value: b.value
    } : null) : null;
  }
  function Oe(a, b) {
    return Ne(a, b, function() {
      return !0;
    });
  }
  g.subtree = function(a) {
    if (a.e())
      return this;
    var b = this.children.get(D(a));
    return null !== b ? b.subtree(G(a)) : Nd;
  };
  g.set = function(a, b) {
    if (a.e())
      return new Ke(b, this.children);
    var c = D(a),
        d = (this.children.get(c) || Nd).set(G(a), b),
        c = this.children.Na(c, d);
    return new Ke(this.value, c);
  };
  g.remove = function(a) {
    if (a.e())
      return this.children.e() ? Nd : new Ke(null, this.children);
    var b = D(a),
        c = this.children.get(b);
    return c ? (a = c.remove(G(a)), b = a.e() ? this.children.remove(b) : this.children.Na(b, a), null === this.value && b.e() ? Nd : new Ke(this.value, b)) : this;
  };
  g.get = function(a) {
    if (a.e())
      return this.value;
    var b = this.children.get(D(a));
    return b ? b.get(G(a)) : null;
  };
  function Md(a, b, c) {
    if (b.e())
      return c;
    var d = D(b);
    b = Md(a.children.get(d) || Nd, G(b), c);
    d = b.e() ? a.children.remove(d) : a.children.Na(d, b);
    return new Ke(a.value, d);
  }
  function Pe(a, b) {
    return Qe(a, F, b);
  }
  function Qe(a, b, c) {
    var d = {};
    a.children.ia(function(a, f) {
      d[a] = Qe(f, b.u(a), c);
    });
    return c(b, a.value, d);
  }
  function Re(a, b, c) {
    return Se(a, b, F, c);
  }
  function Se(a, b, c, d) {
    var e = a.value ? d(c, a.value) : !1;
    if (e)
      return e;
    if (b.e())
      return null;
    e = D(b);
    return (a = a.children.get(e)) ? Se(a, G(b), c.u(e), d) : null;
  }
  function Te(a, b, c) {
    Ue(a, b, F, c);
  }
  function Ue(a, b, c, d) {
    if (b.e())
      return a;
    a.value && d(c, a.value);
    var e = D(b);
    return (a = a.children.get(e)) ? Ue(a, G(b), c.u(e), d) : Nd;
  }
  function Kd(a, b) {
    Ve(a, F, b);
  }
  function Ve(a, b, c) {
    a.children.ia(function(a, e) {
      Ve(e, b.u(a), c);
    });
    a.value && c(b, a.value);
  }
  function We(a, b) {
    a.children.ia(function(a, d) {
      d.value && b(a, d.value);
    });
  }
  var Nd = new Ke(null);
  Ke.prototype.toString = function() {
    var a = {};
    Kd(this, function(b, c) {
      a[b.toString()] = c.toString();
    });
    return A(a);
  };
  function Xe(a, b, c) {
    this.type = Cd;
    this.source = Ye;
    this.path = a;
    this.Ob = b;
    this.Td = c;
  }
  Xe.prototype.Vc = function(a) {
    if (this.path.e()) {
      if (null != this.Ob.value)
        return I(this.Ob.children.e(), "affectedTree should not have overlapping affected paths."), this;
      a = this.Ob.subtree(new K(a));
      return new Xe(F, a, this.Td);
    }
    I(D(this.path) === a, "operationForChild called for unrelated child.");
    return new Xe(G(this.path), this.Ob, this.Td);
  };
  Xe.prototype.toString = function() {
    return "Operation(" + this.path + ": " + this.source.toString() + " ack write revert=" + this.Td + " affectedTree=" + this.Ob + ")";
  };
  var Wb = 0,
      zd = 1,
      Cd = 2,
      Yb = 3;
  function Ze(a, b, c, d) {
    this.se = a;
    this.mf = b;
    this.Fb = c;
    this.Ye = d;
    I(!d || b, "Tagged queries must be from server.");
  }
  var Ye = new Ze(!0, !1, null, !1),
      $e = new Ze(!1, !0, null, !1);
  Ze.prototype.toString = function() {
    return this.se ? "user" : this.Ye ? "server(queryID=" + this.Fb + ")" : "server";
  };
  function af(a) {
    this.X = a;
  }
  var bf = new af(new Ke(null));
  function cf(a, b, c) {
    if (b.e())
      return new af(new Ke(c));
    var d = Oe(a.X, b);
    if (null != d) {
      var e = d.path,
          d = d.value;
      b = S(e, b);
      d = d.G(b, c);
      return new af(a.X.set(e, d));
    }
    a = Md(a.X, b, new Ke(c));
    return new af(a);
  }
  function df(a, b, c) {
    var d = a;
    gb(c, function(a, c) {
      d = cf(d, b.u(a), c);
    });
    return d;
  }
  af.prototype.Pd = function(a) {
    if (a.e())
      return bf;
    a = Md(this.X, a, Nd);
    return new af(a);
  };
  function ef(a, b) {
    var c = Oe(a.X, b);
    return null != c ? a.X.get(c.path).Q(S(c.path, b)) : null;
  }
  function ff(a) {
    var b = [],
        c = a.X.value;
    null != c ? c.K() || c.P(M, function(a, c) {
      b.push(new E(a, c));
    }) : a.X.children.ia(function(a, c) {
      null != c.value && b.push(new E(a, c.value));
    });
    return b;
  }
  function gf(a, b) {
    if (b.e())
      return a;
    var c = ef(a, b);
    return null != c ? new af(new Ke(c)) : new af(a.X.subtree(b));
  }
  af.prototype.e = function() {
    return this.X.e();
  };
  af.prototype.apply = function(a) {
    return hf(F, this.X, a);
  };
  function hf(a, b, c) {
    if (null != b.value)
      return c.G(a, b.value);
    var d = null;
    b.children.ia(function(b, f) {
      ".priority" === b ? (I(null !== f.value, "Priority writes must always be leaf nodes"), d = f.value) : c = hf(a.u(b), f, c);
    });
    c.Q(a).e() || null === d || (c = c.G(a.u(".priority"), d));
    return c;
  }
  ;
  function jf() {
    this.T = bf;
    this.na = [];
    this.Kc = -1;
  }
  function kf(a, b) {
    for (var c = 0; c < a.na.length; c++) {
      var d = a.na[c];
      if (d.gd === b)
        return d;
    }
    return null;
  }
  g = jf.prototype;
  g.Pd = function(a) {
    var b = Va(this.na, function(b) {
      return b.gd === a;
    });
    I(0 <= b, "removeWrite called with nonexistent writeId.");
    var c = this.na[b];
    this.na.splice(b, 1);
    for (var d = c.visible,
        e = !1,
        f = this.na.length - 1; d && 0 <= f; ) {
      var h = this.na[f];
      h.visible && (f >= b && lf(h, c.path) ? d = !1 : c.path.contains(h.path) && (e = !0));
      f--;
    }
    if (d) {
      if (e)
        this.T = mf(this.na, nf, F), this.Kc = 0 < this.na.length ? this.na[this.na.length - 1].gd : -1;
      else if (c.Fa)
        this.T = this.T.Pd(c.path);
      else {
        var k = this;
        t(c.children, function(a, b) {
          k.T = k.T.Pd(c.path.u(b));
        });
      }
      return !0;
    }
    return !1;
  };
  g.za = function(a, b, c, d) {
    if (c || d) {
      var e = gf(this.T, a);
      return !d && e.e() ? b : d || null != b || null != ef(e, F) ? (e = mf(this.na, function(b) {
        return (b.visible || d) && (!c || !(0 <= Oa(c, b.gd))) && (b.path.contains(a) || a.contains(b.path));
      }, a), b = b || B, e.apply(b)) : null;
    }
    e = ef(this.T, a);
    if (null != e)
      return e;
    e = gf(this.T, a);
    return e.e() ? b : null != b || null != ef(e, F) ? (b = b || B, e.apply(b)) : null;
  };
  g.xc = function(a, b) {
    var c = B,
        d = ef(this.T, a);
    if (d)
      d.K() || d.P(M, function(a, b) {
        c = c.U(a, b);
      });
    else if (b) {
      var e = gf(this.T, a);
      b.P(M, function(a, b) {
        var d = gf(e, new K(a)).apply(b);
        c = c.U(a, d);
      });
      Pa(ff(e), function(a) {
        c = c.U(a.name, a.S);
      });
    } else
      e = gf(this.T, a), Pa(ff(e), function(a) {
        c = c.U(a.name, a.S);
      });
    return c;
  };
  g.hd = function(a, b, c, d) {
    I(c || d, "Either existingEventSnap or existingServerSnap must exist");
    a = a.u(b);
    if (null != ef(this.T, a))
      return null;
    a = gf(this.T, a);
    return a.e() ? d.Q(b) : a.apply(d.Q(b));
  };
  g.wc = function(a, b, c) {
    a = a.u(b);
    var d = ef(this.T, a);
    return null != d ? d : qb(c, b) ? gf(this.T, a).apply(c.j().R(b)) : null;
  };
  g.sc = function(a) {
    return ef(this.T, a);
  };
  g.je = function(a, b, c, d, e, f) {
    var h;
    a = gf(this.T, a);
    h = ef(a, F);
    if (null == h)
      if (null != b)
        h = a.apply(b);
      else
        return [];
    h = h.jb(f);
    if (h.e() || h.K())
      return [];
    b = [];
    a = rd(f);
    e = e ? h.Zb(c, f) : h.Xb(c, f);
    for (f = H(e); f && b.length < d; )
      0 !== a(f, c) && b.push(f), f = H(e);
    return b;
  };
  function lf(a, b) {
    return a.Fa ? a.path.contains(b) : !!ua(a.children, function(c, d) {
      return a.path.u(d).contains(b);
    });
  }
  function nf(a) {
    return a.visible;
  }
  function mf(a, b, c) {
    for (var d = bf,
        e = 0; e < a.length; ++e) {
      var f = a[e];
      if (b(f)) {
        var h = f.path;
        if (f.Fa)
          c.contains(h) ? (h = S(c, h), d = cf(d, h, f.Fa)) : h.contains(c) && (h = S(h, c), d = cf(d, F, f.Fa.Q(h)));
        else if (f.children)
          if (c.contains(h))
            h = S(c, h), d = df(d, h, f.children);
          else {
            if (h.contains(c))
              if (h = S(h, c), h.e())
                d = df(d, F, f.children);
              else if (f = v(f.children, D(h)))
                f = f.Q(G(h)), d = cf(d, F, f);
          }
        else
          throw Dc("WriteRecord should have .snap or .children");
      }
    }
    return d;
  }
  function of(a, b) {
    this.Kb = a;
    this.X = b;
  }
  g = of.prototype;
  g.za = function(a, b, c) {
    return this.X.za(this.Kb, a, b, c);
  };
  g.xc = function(a) {
    return this.X.xc(this.Kb, a);
  };
  g.hd = function(a, b, c) {
    return this.X.hd(this.Kb, a, b, c);
  };
  g.sc = function(a) {
    return this.X.sc(this.Kb.u(a));
  };
  g.je = function(a, b, c, d, e) {
    return this.X.je(this.Kb, a, b, c, d, e);
  };
  g.wc = function(a, b) {
    return this.X.wc(this.Kb, a, b);
  };
  g.u = function(a) {
    return new of(this.Kb.u(a), this.X);
  };
  function pf() {
    this.ya = {};
  }
  g = pf.prototype;
  g.e = function() {
    return wa(this.ya);
  };
  g.$a = function(a, b, c) {
    var d = a.source.Fb;
    if (null !== d)
      return d = v(this.ya, d), I(null != d, "SyncTree gave us an op for an invalid query."), d.$a(a, b, c);
    var e = [];
    t(this.ya, function(d) {
      e = e.concat(d.$a(a, b, c));
    });
    return e;
  };
  g.Nb = function(a, b, c, d, e) {
    var f = a.va(),
        h = v(this.ya, f);
    if (!h) {
      var h = c.za(e ? d : null),
          k = !1;
      h ? k = !0 : (h = d instanceof Q ? c.xc(d) : B, k = !1);
      h = new te(a, new Gd(new rb(h, k, !1), new rb(d, e, !1)));
      this.ya[f] = h;
    }
    h.Nb(b);
    return we(h, b);
  };
  g.hb = function(a, b, c) {
    var d = a.va(),
        e = [],
        f = [],
        h = null != qf(this);
    if ("default" === d) {
      var k = this;
      t(this.ya, function(a, d) {
        f = f.concat(a.hb(b, c));
        a.e() && (delete k.ya[d], R(a.W.n) || e.push(a.W));
      });
    } else {
      var m = v(this.ya, d);
      m && (f = f.concat(m.hb(b, c)), m.e() && (delete this.ya[d], R(m.W.n) || e.push(m.W)));
    }
    h && null == qf(this) && e.push(new T(a.k, a.path));
    return {
      Kg: e,
      mg: f
    };
  };
  function rf(a) {
    return Qa(ra(a.ya), function(a) {
      return !R(a.W.n);
    });
  }
  g.bb = function(a) {
    var b = null;
    t(this.ya, function(c) {
      b = b || c.bb(a);
    });
    return b;
  };
  function sf(a, b) {
    if (R(b.n))
      return qf(a);
    var c = b.va();
    return v(a.ya, c);
  }
  function qf(a) {
    return va(a.ya, function(a) {
      return R(a.W.n);
    }) || null;
  }
  ;
  function tf(a) {
    this.ta = Nd;
    this.gb = new jf;
    this.Xe = {};
    this.lc = {};
    this.Lc = a;
  }
  function uf(a, b, c, d, e) {
    var f = a.gb,
        h = e;
    I(d > f.Kc, "Stacking an older write on top of newer ones");
    n(h) || (h = !0);
    f.na.push({
      path: b,
      Fa: c,
      gd: d,
      visible: h
    });
    h && (f.T = cf(f.T, b, c));
    f.Kc = d;
    return e ? vf(a, new Vb(Ye, b, c)) : [];
  }
  function wf(a, b, c, d) {
    var e = a.gb;
    I(d > e.Kc, "Stacking an older merge on top of newer ones");
    e.na.push({
      path: b,
      children: c,
      gd: d,
      visible: !0
    });
    e.T = df(e.T, b, c);
    e.Kc = d;
    c = Me(c);
    return vf(a, new xe(Ye, b, c));
  }
  function xf(a, b, c) {
    c = c || !1;
    var d = kf(a.gb, b);
    if (a.gb.Pd(b)) {
      var e = Nd;
      null != d.Fa ? e = e.set(F, !0) : gb(d.children, function(a, b) {
        e = e.set(new K(a), b);
      });
      return vf(a, new Xe(d.path, e, c));
    }
    return [];
  }
  function yf(a, b, c) {
    c = Me(c);
    return vf(a, new xe($e, b, c));
  }
  function zf(a, b, c, d) {
    d = Af(a, d);
    if (null != d) {
      var e = Bf(d);
      d = e.path;
      e = e.Fb;
      b = S(d, b);
      c = new Vb(new Ze(!1, !0, e, !0), b, c);
      return Cf(a, d, c);
    }
    return [];
  }
  function Df(a, b, c, d) {
    if (d = Af(a, d)) {
      var e = Bf(d);
      d = e.path;
      e = e.Fb;
      b = S(d, b);
      c = Me(c);
      c = new xe(new Ze(!1, !0, e, !0), b, c);
      return Cf(a, d, c);
    }
    return [];
  }
  tf.prototype.Nb = function(a, b) {
    var c = a.path,
        d = null,
        e = !1;
    Te(this.ta, c, function(a, b) {
      var f = S(a, c);
      d = d || b.bb(f);
      e = e || null != qf(b);
    });
    var f = this.ta.get(c);
    f ? (e = e || null != qf(f), d = d || f.bb(F)) : (f = new pf, this.ta = this.ta.set(c, f));
    var h;
    null != d ? h = !0 : (h = !1, d = B, We(this.ta.subtree(c), function(a, b) {
      var c = b.bb(F);
      c && (d = d.U(a, c));
    }));
    var k = null != sf(f, a);
    if (!k && !R(a.n)) {
      var m = Ef(a);
      I(!(m in this.lc), "View does not exist, but we have a tag");
      var l = Ff++;
      this.lc[m] = l;
      this.Xe["_" + l] = m;
    }
    h = f.Nb(a, b, new of(c, this.gb), d, h);
    k || e || (f = sf(f, a), h = h.concat(Gf(this, a, f)));
    return h;
  };
  tf.prototype.hb = function(a, b, c) {
    var d = a.path,
        e = this.ta.get(d),
        f = [];
    if (e && ("default" === a.va() || null != sf(e, a))) {
      f = e.hb(a, b, c);
      e.e() && (this.ta = this.ta.remove(d));
      e = f.Kg;
      f = f.mg;
      b = -1 !== Va(e, function(a) {
        return R(a.n);
      });
      var h = Re(this.ta, d, function(a, b) {
        return null != qf(b);
      });
      if (b && !h && (d = this.ta.subtree(d), !d.e()))
        for (var d = Hf(d),
            k = 0; k < d.length; ++k) {
          var m = d[k],
              l = m.W,
              m = If(this, m);
          this.Lc.Ue(Jf(l), Kf(this, l), m.ud, m.H);
        }
      if (!h && 0 < e.length && !c)
        if (b)
          this.Lc.Yd(Jf(a), null);
        else {
          var r = this;
          Pa(e, function(a) {
            a.va();
            var b = r.lc[Ef(a)];
            r.Lc.Yd(Jf(a), b);
          });
        }
      Lf(this, e);
    }
    return f;
  };
  tf.prototype.za = function(a, b) {
    var c = this.gb,
        d = Re(this.ta, a, function(b, c) {
          var d = S(b, a);
          if (d = c.bb(d))
            return d;
        });
    return c.za(a, d, b, !0);
  };
  function Hf(a) {
    return Pe(a, function(a, c, d) {
      if (c && null != qf(c))
        return [qf(c)];
      var e = [];
      c && (e = rf(c));
      t(d, function(a) {
        e = e.concat(a);
      });
      return e;
    });
  }
  function Lf(a, b) {
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (!R(d.n)) {
        var d = Ef(d),
            e = a.lc[d];
        delete a.lc[d];
        delete a.Xe["_" + e];
      }
    }
  }
  function Jf(a) {
    return R(a.n) && !de(a.n) ? a.Gb() : a;
  }
  function Gf(a, b, c) {
    var d = b.path,
        e = Kf(a, b);
    c = If(a, c);
    b = a.Lc.Ue(Jf(b), e, c.ud, c.H);
    d = a.ta.subtree(d);
    if (e)
      I(null == qf(d.value), "If we're adding a query, it shouldn't be shadowed");
    else
      for (e = Pe(d, function(a, b, c) {
        if (!a.e() && b && null != qf(b))
          return [ue(qf(b))];
        var d = [];
        b && (d = d.concat(Ra(rf(b), function(a) {
          return a.W;
        })));
        t(c, function(a) {
          d = d.concat(a);
        });
        return d;
      }), d = 0; d < e.length; ++d)
        c = e[d], a.Lc.Yd(Jf(c), Kf(a, c));
    return b;
  }
  function If(a, b) {
    var c = b.W,
        d = Kf(a, c);
    return {
      ud: function() {
        return (b.w() || B).hash();
      },
      H: function(b) {
        if ("ok" === b) {
          if (d) {
            var f = c.path;
            if (b = Af(a, d)) {
              var h = Bf(b);
              b = h.path;
              h = h.Fb;
              f = S(b, f);
              f = new Xb(new Ze(!1, !0, h, !0), f);
              b = Cf(a, b, f);
            } else
              b = [];
          } else
            b = vf(a, new Xb($e, c.path));
          return b;
        }
        f = "Unknown Error";
        "too_big" === b ? f = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == b ? f = "Client doesn't have permission to access the desired data." : "unavailable" == b && (f = "The service is unavailable");
        f = Error(b + ": " + f);
        f.code = b.toUpperCase();
        return a.hb(c, null, f);
      }
    };
  }
  function Ef(a) {
    return a.path.toString() + "$" + a.va();
  }
  function Bf(a) {
    var b = a.indexOf("$");
    I(-1 !== b && b < a.length - 1, "Bad queryKey.");
    return {
      Fb: a.substr(b + 1),
      path: new K(a.substr(0, b))
    };
  }
  function Af(a, b) {
    var c = a.Xe,
        d = "_" + b;
    return d in c ? c[d] : void 0;
  }
  function Kf(a, b) {
    var c = Ef(b);
    return v(a.lc, c);
  }
  var Ff = 1;
  function Cf(a, b, c) {
    var d = a.ta.get(b);
    I(d, "Missing sync point for query tag that we're tracking");
    return d.$a(c, new of(b, a.gb), null);
  }
  function vf(a, b) {
    return Mf(a, b, a.ta, null, new of(F, a.gb));
  }
  function Mf(a, b, c, d, e) {
    if (b.path.e())
      return Nf(a, b, c, d, e);
    var f = c.get(F);
    null == d && null != f && (d = f.bb(F));
    var h = [],
        k = D(b.path),
        m = b.Vc(k);
    if ((c = c.children.get(k)) && m)
      var l = d ? d.R(k) : null,
          k = e.u(k),
          h = h.concat(Mf(a, m, c, l, k));
    f && (h = h.concat(f.$a(b, e, d)));
    return h;
  }
  function Nf(a, b, c, d, e) {
    var f = c.get(F);
    null == d && null != f && (d = f.bb(F));
    var h = [];
    c.children.ia(function(c, f) {
      var l = d ? d.R(c) : null,
          r = e.u(c),
          x = b.Vc(c);
      x && (h = h.concat(Nf(a, x, f, l, r)));
    });
    f && (h = h.concat(f.$a(b, e, d)));
    return h;
  }
  ;
  function Of() {
    this.children = {};
    this.kd = 0;
    this.value = null;
  }
  function Pf(a, b, c) {
    this.Ed = a ? a : "";
    this.Xc = b ? b : null;
    this.A = c ? c : new Of;
  }
  function Qf(a, b) {
    for (var c = b instanceof K ? b : new K(b),
        d = a,
        e; null !== (e = D(c)); )
      d = new Pf(e, d, v(d.A.children, e) || new Of), c = G(c);
    return d;
  }
  g = Pf.prototype;
  g.Ca = function() {
    return this.A.value;
  };
  function Rf(a, b) {
    I("undefined" !== typeof b, "Cannot set value to undefined");
    a.A.value = b;
    Sf(a);
  }
  g.clear = function() {
    this.A.value = null;
    this.A.children = {};
    this.A.kd = 0;
    Sf(this);
  };
  g.td = function() {
    return 0 < this.A.kd;
  };
  g.e = function() {
    return null === this.Ca() && !this.td();
  };
  g.P = function(a) {
    var b = this;
    t(this.A.children, function(c, d) {
      a(new Pf(d, b, c));
    });
  };
  function Tf(a, b, c, d) {
    c && !d && b(a);
    a.P(function(a) {
      Tf(a, b, !0, d);
    });
    c && d && b(a);
  }
  function Uf(a, b) {
    for (var c = a.parent(); null !== c && !b(c); )
      c = c.parent();
  }
  g.path = function() {
    return new K(null === this.Xc ? this.Ed : this.Xc.path() + "/" + this.Ed);
  };
  g.name = function() {
    return this.Ed;
  };
  g.parent = function() {
    return this.Xc;
  };
  function Sf(a) {
    if (null !== a.Xc) {
      var b = a.Xc,
          c = a.Ed,
          d = a.e(),
          e = u(b.A.children, c);
      d && e ? (delete b.A.children[c], b.A.kd--, Sf(b)) : d || e || (b.A.children[c] = a.A, b.A.kd++, Sf(b));
    }
  }
  ;
  var Vf = /[\[\].#$\/\u0000-\u001F\u007F]/,
      Wf = /[\[\].#$\u0000-\u001F\u007F]/,
      Xf = /^[a-zA-Z][a-zA-Z._\-+]+$/;
  function Yf(a) {
    return p(a) && 0 !== a.length && !Vf.test(a);
  }
  function Zf(a) {
    return null === a || p(a) || ga(a) && !Oc(a) || ia(a) && u(a, ".sv");
  }
  function $f(a, b, c, d) {
    d && !n(b) || ag(y(a, 1, d), b, c);
  }
  function ag(a, b, c) {
    c instanceof K && (c = new He(c, a));
    if (!n(b))
      throw Error(a + "contains undefined " + Je(c));
    if (ha(b))
      throw Error(a + "contains a function " + Je(c) + " with contents: " + b.toString());
    if (Oc(b))
      throw Error(a + "contains " + b.toString() + " " + Je(c));
    if (p(b) && b.length > 10485760 / 3 && 10485760 < Xc(b))
      throw Error(a + "contains a string greater than 10485760 utf8 bytes " + Je(c) + " ('" + b.substring(0, 50) + "...')");
    if (ia(b)) {
      var d = !1,
          e = !1;
      gb(b, function(b, h) {
        if (".value" === b)
          d = !0;
        else if (".priority" !== b && ".sv" !== b && (e = !0, !Yf(b)))
          throw Error(a + " contains an invalid key (" + b + ") " + Je(c) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
        c.push(b);
        ag(a, h, c);
        c.pop();
      });
      if (d && e)
        throw Error(a + ' contains ".value" child ' + Je(c) + " in addition to actual children.");
    }
  }
  function bg(a, b) {
    var c,
        d;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      for (var e = d.slice(),
          f = 0; f < e.length; f++)
        if ((".priority" !== e[f] || f !== e.length - 1) && !Yf(e[f]))
          throw Error(a + "contains an invalid key (" + e[f] + ") in path " + d.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
    }
    b.sort(Ge);
    e = null;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      if (null !== e && e.contains(d))
        throw Error(a + "contains a path " + e.toString() + " that is ancestor of another path " + d.toString());
      e = d;
    }
  }
  function cg(a, b, c) {
    var d = y(a, 1, !1);
    if (!ia(b) || ea(b))
      throw Error(d + " must be an object containing the children to replace.");
    var e = [];
    gb(b, function(a, b) {
      var k = new K(a);
      ag(d, b, c.u(k));
      if (".priority" === Jd(k) && !Zf(b))
        throw Error(d + "contains an invalid value for '" + k.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
      e.push(k);
    });
    bg(d, e);
  }
  function dg(a, b, c) {
    if (Oc(c))
      throw Error(y(a, b, !1) + "is " + c.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
    if (!Zf(c))
      throw Error(y(a, b, !1) + "must be a valid Firebase priority (a string, finite number, server value, or null).");
  }
  function eg(a, b, c) {
    if (!c || n(b))
      switch (b) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
          break;
        default:
          throw Error(y(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');
      }
  }
  function fg(a, b) {
    if (n(b) && !Yf(b))
      throw Error(y(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
  }
  function gg(a, b) {
    if (!p(b) || 0 === b.length || Wf.test(b))
      throw Error(y(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
  }
  function hg(a, b) {
    if (".info" === D(b))
      throw Error(a + " failed: Can't modify data under /.info/");
  }
  function ig(a, b) {
    if (!p(b))
      throw Error(y(a, 1, !1) + "must be a valid credential (a string).");
  }
  function jg(a, b, c) {
    if (!p(c))
      throw Error(y(a, b, !1) + "must be a valid string.");
  }
  function kg(a, b) {
    jg(a, 1, b);
    if (!Xf.test(b))
      throw Error(y(a, 1, !1) + "'" + b + "' is not a valid authentication provider.");
  }
  function lg(a, b, c, d) {
    if (!d || n(c))
      if (!ia(c) || null === c)
        throw Error(y(a, b, d) + "must be a valid object.");
  }
  function mg(a, b, c) {
    if (!ia(b) || !u(b, c))
      throw Error(y(a, 1, !1) + 'must contain the key "' + c + '"');
    if (!p(v(b, c)))
      throw Error(y(a, 1, !1) + 'must contain the key "' + c + '" with type "string"');
  }
  ;
  function ng() {
    this.set = {};
  }
  g = ng.prototype;
  g.add = function(a, b) {
    this.set[a] = null !== b ? b : !0;
  };
  g.contains = function(a) {
    return u(this.set, a);
  };
  g.get = function(a) {
    return this.contains(a) ? this.set[a] : void 0;
  };
  g.remove = function(a) {
    delete this.set[a];
  };
  g.clear = function() {
    this.set = {};
  };
  g.e = function() {
    return wa(this.set);
  };
  g.count = function() {
    return pa(this.set);
  };
  function og(a, b) {
    t(a.set, function(a, d) {
      b(d, a);
    });
  }
  g.keys = function() {
    var a = [];
    t(this.set, function(b, c) {
      a.push(c);
    });
    return a;
  };
  function oc() {
    this.m = this.B = null;
  }
  oc.prototype.find = function(a) {
    if (null != this.B)
      return this.B.Q(a);
    if (a.e() || null == this.m)
      return null;
    var b = D(a);
    a = G(a);
    return this.m.contains(b) ? this.m.get(b).find(a) : null;
  };
  oc.prototype.mc = function(a, b) {
    if (a.e())
      this.B = b, this.m = null;
    else if (null !== this.B)
      this.B = this.B.G(a, b);
    else {
      null == this.m && (this.m = new ng);
      var c = D(a);
      this.m.contains(c) || this.m.add(c, new oc);
      c = this.m.get(c);
      a = G(a);
      c.mc(a, b);
    }
  };
  function pg(a, b) {
    if (b.e())
      return a.B = null, a.m = null, !0;
    if (null !== a.B) {
      if (a.B.K())
        return !1;
      var c = a.B;
      a.B = null;
      c.P(M, function(b, c) {
        a.mc(new K(b), c);
      });
      return pg(a, b);
    }
    return null !== a.m ? (c = D(b), b = G(b), a.m.contains(c) && pg(a.m.get(c), b) && a.m.remove(c), a.m.e() ? (a.m = null, !0) : !1) : !0;
  }
  function pc(a, b, c) {
    null !== a.B ? c(b, a.B) : a.P(function(a, e) {
      var f = new K(b.toString() + "/" + a);
      pc(e, f, c);
    });
  }
  oc.prototype.P = function(a) {
    null !== this.m && og(this.m, function(b, c) {
      a(b, c);
    });
  };
  var qg = "auth.firebase.com";
  function rg(a, b, c) {
    this.ld = a || {};
    this.be = b || {};
    this.Za = c || {};
    this.ld.remember || (this.ld.remember = "default");
  }
  var sg = ["remember", "redirectTo"];
  function tg(a) {
    var b = {},
        c = {};
    gb(a || {}, function(a, e) {
      0 <= Oa(sg, a) ? b[a] = e : c[a] = e;
    });
    return new rg(b, {}, c);
  }
  ;
  function ug(a, b) {
    this.Ne = ["session", a.Md, a.fc].join(":");
    this.Zd = b;
  }
  ug.prototype.set = function(a, b) {
    if (!b)
      if (this.Zd.length)
        b = this.Zd[0];
      else
        throw Error("fb.login.SessionManager : No storage options available!");
    b.set(this.Ne, a);
  };
  ug.prototype.get = function() {
    var a = Ra(this.Zd, q(this.qg, this)),
        a = Qa(a, function(a) {
          return null !== a;
        });
    Xa(a, function(a, c) {
      return Zc(c.token) - Zc(a.token);
    });
    return 0 < a.length ? a.shift() : null;
  };
  ug.prototype.qg = function(a) {
    try {
      var b = a.get(this.Ne);
      if (b && b.token)
        return b;
    } catch (c) {}
    return null;
  };
  ug.prototype.clear = function() {
    var a = this;
    Pa(this.Zd, function(b) {
      b.remove(a.Ne);
    });
  };
  function vg() {
    return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : "";
  }
  function wg() {
    var a = vg();
    if ("" === a)
      return !1;
    if ("Microsoft Internet Explorer" === navigator.appName) {
      if ((a = a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) && 1 < a.length)
        return 8 <= parseFloat(a[1]);
    } else if (-1 < a.indexOf("Trident") && (a = a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/)) && 1 < a.length)
      return 8 <= parseFloat(a[1]);
    return !1;
  }
  ;
  function xg() {
    var a = window.opener.frames,
        b;
    for (b = a.length - 1; 0 <= b; b--)
      try {
        if (a[b].location.protocol === window.location.protocol && a[b].location.host === window.location.host && "__winchan_relay_frame" === a[b].name)
          return a[b];
      } catch (c) {}
    return null;
  }
  function yg(a, b, c) {
    a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1);
  }
  function zg(a, b, c) {
    a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function Ag(a) {
    /^https?:\/\//.test(a) || (a = window.location.href);
    var b = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);
    return b ? b[1] : a;
  }
  function Bg(a) {
    var b = "";
    try {
      a = a.replace("#", "");
      var c = jb(a);
      c && u(c, "__firebase_request_key") && (b = v(c, "__firebase_request_key"));
    } catch (d) {}
    return b;
  }
  function Cg() {
    var a = Nc(qg);
    return a.scheme + "://" + a.host + "/v2";
  }
  function Dg(a) {
    return Cg() + "/" + a + "/auth/channel";
  }
  ;
  function Eg(a) {
    var b = this;
    this.zc = a;
    this.$d = "*";
    wg() ? this.Pc = this.wd = xg() : (this.Pc = window.opener, this.wd = window);
    if (!b.Pc)
      throw "Unable to find relay frame";
    yg(this.wd, "message", q(this.hc, this));
    yg(this.wd, "message", q(this.Af, this));
    try {
      Fg(this, {a: "ready"});
    } catch (c) {
      yg(this.Pc, "load", function() {
        Fg(b, {a: "ready"});
      });
    }
    yg(window, "unload", q(this.Ag, this));
  }
  function Fg(a, b) {
    b = A(b);
    wg() ? a.Pc.doPost(b, a.$d) : a.Pc.postMessage(b, a.$d);
  }
  Eg.prototype.hc = function(a) {
    var b = this,
        c;
    try {
      c = lb(a.data);
    } catch (d) {}
    c && "request" === c.a && (zg(window, "message", this.hc), this.$d = a.origin, this.zc && setTimeout(function() {
      b.zc(b.$d, c.d, function(a, c) {
        b.cg = !c;
        b.zc = void 0;
        Fg(b, {
          a: "response",
          d: a,
          forceKeepWindowOpen: c
        });
      });
    }, 0));
  };
  Eg.prototype.Ag = function() {
    try {
      zg(this.wd, "message", this.Af);
    } catch (a) {}
    this.zc && (Fg(this, {
      a: "error",
      d: "unknown closed window"
    }), this.zc = void 0);
    try {
      window.close();
    } catch (b) {}
  };
  Eg.prototype.Af = function(a) {
    if (this.cg && "die" === a.data)
      try {
        window.close();
      } catch (b) {}
  };
  function Gg(a) {
    this.oc = Ga() + Ga() + Ga();
    this.Df = a;
  }
  Gg.prototype.open = function(a, b) {
    wc.set("redirect_request_id", this.oc);
    wc.set("redirect_request_id", this.oc);
    b.requestId = this.oc;
    b.redirectTo = b.redirectTo || window.location.href;
    a += (/\?/.test(a) ? "" : "?") + ib(b);
    window.location = a;
  };
  Gg.isAvailable = function() {
    return !1;
  };
  Gg.prototype.Qb = function() {
    return "redirect";
  };
  var Hg = {
    NETWORK_ERROR: "Unable to contact the Firebase server.",
    SERVER_ERROR: "An unknown server error occurred.",
    TRANSPORT_UNAVAILABLE: "There are no login transports available for the requested method.",
    REQUEST_INTERRUPTED: "The browser redirected the page before the login request could complete.",
    USER_CANCELLED: "The user cancelled authentication."
  };
  function U(a) {
    var b = Error(v(Hg, a), a);
    b.code = a;
    return b;
  }
  ;
  function Ig(a) {
    var b;
    (b = !a.window_features) || (b = vg(), b = -1 !== b.indexOf("Fennec/") || -1 !== b.indexOf("Firefox/") && -1 !== b.indexOf("Android"));
    b && (a.window_features = void 0);
    a.window_name || (a.window_name = "_blank");
    this.options = a;
  }
  Ig.prototype.open = function(a, b, c) {
    function d(a) {
      h && (document.body.removeChild(h), h = void 0);
      r && (r = clearInterval(r));
      zg(window, "message", e);
      zg(window, "unload", d);
      if (l && !a)
        try {
          l.close();
        } catch (b) {
          k.postMessage("die", m);
        }
      l = k = void 0;
    }
    function e(a) {
      if (a.origin === m)
        try {
          var b = lb(a.data);
          "ready" === b.a ? k.postMessage(x, m) : "error" === b.a ? (d(!1), c && (c(b.d), c = null)) : "response" === b.a && (d(b.forceKeepWindowOpen), c && (c(null, b.d), c = null));
        } catch (e) {}
    }
    var f = wg(),
        h,
        k;
    if (!this.options.relay_url)
      return c(Error("invalid arguments: origin of url and relay_url must match"));
    var m = Ag(a);
    if (m !== Ag(this.options.relay_url))
      c && setTimeout(function() {
        c(Error("invalid arguments: origin of url and relay_url must match"));
      }, 0);
    else {
      f && (h = document.createElement("iframe"), h.setAttribute("src", this.options.relay_url), h.style.display = "none", h.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(h), k = h.contentWindow);
      a += (/\?/.test(a) ? "" : "?") + ib(b);
      var l = window.open(a, this.options.window_name, this.options.window_features);
      k || (k = l);
      var r = setInterval(function() {
        l && l.closed && (d(!1), c && (c(U("USER_CANCELLED")), c = null));
      }, 500),
          x = A({
            a: "request",
            d: b
          });
      yg(window, "unload", d);
      yg(window, "message", e);
    }
  };
  Ig.isAvailable = function() {
    return !1;
  };
  Ig.prototype.Qb = function() {
    return "popup";
  };
  function Jg(a) {
    a.method || (a.method = "GET");
    a.headers || (a.headers = {});
    a.headers.content_type || (a.headers.content_type = "application/json");
    a.headers.content_type = a.headers.content_type.toLowerCase();
    this.options = a;
  }
  Jg.prototype.open = function(a, b, c) {
    var d = Nc(a),
        e = "http" === d.scheme ? require('http') : require('https');
    a = this.options.method;
    var f,
        h = {Accept: "application/json;text/plain"};
    za(h, this.options.headers);
    d = {
      host: d.host.split(":")[0],
      port: d.port,
      path: d.kc,
      method: this.options.method.toUpperCase()
    };
    if ("GET" === a)
      d.path += (/\?/.test(d.path) ? "" : "?") + ib(b), f = null;
    else {
      var k = this.options.headers.content_type;
      "application/json" === k && (f = A(b));
      "application/x-www-form-urlencoded" === k && (f = ib(b));
      h["Content-Length"] = Buffer.byteLength(f, "utf8");
    }
    d.headers = h;
    b = e.request(d, function(a) {
      var b = "";
      a.setEncoding("utf8");
      a.on("data", function(a) {
        b += a;
      });
      a.on("end", function() {
        try {
          b = lb(b + "");
        } catch (a) {}
        c && (c(null, b), c = null);
      });
    });
    "GET" !== a && b.write(f);
    b.on("error", function(a) {
      a && a.code && ("ENOTFOUND" === a.code || "ENETDOWN" === a.code) ? c(U("NETWORK_ERROR")) : c(U("SERVER_ERROR"));
      c = null;
    });
    b.end();
  };
  Jg.isAvailable = function() {
    return !0;
  };
  Jg.prototype.Qb = function() {
    return "json";
  };
  function Kg(a) {
    a.method || (a.method = "GET");
    a.headers || (a.headers = {});
    a.headers.content_type || (a.headers.content_type = "application/json");
    a.headers.content_type = a.headers.content_type.toLowerCase();
    this.options = a;
  }
  Kg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("REQUEST_INTERRUPTED")), c = null);
    }
    var e = new XMLHttpRequest,
        f = this.options.method.toUpperCase(),
        h;
    yg(window, "beforeunload", d);
    e.onreadystatechange = function() {
      if (c && 4 === e.readyState) {
        var a;
        if (200 <= e.status && 300 > e.status) {
          try {
            a = lb(e.responseText);
          } catch (b) {}
          c(null, a);
        } else
          500 <= e.status && 600 > e.status ? c(U("SERVER_ERROR")) : c(U("NETWORK_ERROR"));
        c = null;
        zg(window, "beforeunload", d);
      }
    };
    if ("GET" === f)
      a += (/\?/.test(a) ? "" : "?") + ib(b), h = null;
    else {
      var k = this.options.headers.content_type;
      "application/json" === k && (h = A(b));
      "application/x-www-form-urlencoded" === k && (h = ib(b));
    }
    e.open(f, a, !0);
    a = {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json;text/plain"
    };
    za(a, this.options.headers);
    for (var m in a)
      e.setRequestHeader(m, a[m]);
    e.send(h);
  };
  Kg.isAvailable = function() {
    return !1;
  };
  Kg.prototype.Qb = function() {
    return "json";
  };
  function Lg(a) {
    this.oc = Ga() + Ga() + Ga();
    this.Df = a;
  }
  Lg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("USER_CANCELLED")), c = null);
    }
    var e = this,
        f = Nc(qg),
        h;
    b.requestId = this.oc;
    b.redirectTo = f.scheme + "://" + f.host + "/blank/page.html";
    a += /\?/.test(a) ? "" : "?";
    a += ib(b);
    (h = window.open(a, "_blank", "location=no")) && ha(h.addEventListener) ? (h.addEventListener("loadstart", function(a) {
      var b;
      if (b = a && a.url)
        a: {
          try {
            var l = document.createElement("a");
            l.href = a.url;
            b = l.host === f.host && "/blank/page.html" === l.pathname;
            break a;
          } catch (r) {}
          b = !1;
        }
      b && (a = Bg(a.url), h.removeEventListener("exit", d), h.close(), a = new rg(null, null, {
        requestId: e.oc,
        requestKey: a
      }), e.Df.requestWithCredential("/auth/session", a, c), c = null);
    }), h.addEventListener("exit", d)) : c(U("TRANSPORT_UNAVAILABLE"));
  };
  Lg.isAvailable = function() {
    return !1;
  };
  Lg.prototype.Qb = function() {
    return "redirect";
  };
  function Mg(a) {
    a.callback_parameter || (a.callback_parameter = "callback");
    this.options = a;
    window.__firebase_auth_jsonp = window.__firebase_auth_jsonp || {};
  }
  Mg.prototype.open = function(a, b, c) {
    function d() {
      c && (c(U("REQUEST_INTERRUPTED")), c = null);
    }
    function e() {
      setTimeout(function() {
        window.__firebase_auth_jsonp[f] = void 0;
        wa(window.__firebase_auth_jsonp) && (window.__firebase_auth_jsonp = void 0);
        try {
          var a = document.getElementById(f);
          a && a.parentNode.removeChild(a);
        } catch (b) {}
      }, 1);
      zg(window, "beforeunload", d);
    }
    var f = "fn" + (new Date).getTime() + Math.floor(99999 * Math.random());
    b[this.options.callback_parameter] = "__firebase_auth_jsonp." + f;
    a += (/\?/.test(a) ? "" : "?") + ib(b);
    yg(window, "beforeunload", d);
    window.__firebase_auth_jsonp[f] = function(a) {
      c && (c(null, a), c = null);
      e();
    };
    Ng(f, a, c);
  };
  function Ng(a, b, c) {
    setTimeout(function() {
      try {
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.id = a;
        d.async = !0;
        d.src = b;
        d.onerror = function() {
          var b = document.getElementById(a);
          null !== b && b.parentNode.removeChild(b);
          c && c(U("NETWORK_ERROR"));
        };
        var e = document.getElementsByTagName("head");
        (e && 0 != e.length ? e[0] : document.documentElement).appendChild(d);
      } catch (f) {
        c && c(U("NETWORK_ERROR"));
      }
    }, 0);
  }
  Mg.isAvailable = function() {
    return "undefined" !== typeof document && null != document.createElement;
  };
  Mg.prototype.Qb = function() {
    return "json";
  };
  function Og(a, b, c, d) {
    Be.call(this, ["auth_status"]);
    this.F = a;
    this.af = b;
    this.Vg = c;
    this.Ie = d;
    this.rc = new ug(a, [vc, wc]);
    this.kb = null;
    this.Pe = !1;
    Pg(this);
  }
  ma(Og, Be);
  g = Og.prototype;
  g.te = function() {
    return this.kb || null;
  };
  function Pg(a) {
    wc.get("redirect_request_id") && Qg(a);
    var b = a.rc.get();
    b && b.token ? (Rg(a, b), a.af(b.token, function(c, d) {
      Sg(a, c, d, !1, b.token, b);
    }, function(b, d) {
      Tg(a, "resumeSession()", b, d);
    })) : Rg(a, null);
  }
  function Ug(a, b, c, d, e, f) {
    "firebaseio-demo.com" === a.F.domain && N("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");
    a.af(b, function(f, k) {
      Sg(a, f, k, !0, b, c, d || {}, e);
    }, function(b, c) {
      Tg(a, "auth()", b, c, f);
    });
  }
  function Vg(a, b) {
    a.rc.clear();
    Rg(a, null);
    a.Vg(function(a, d) {
      if ("ok" === a)
        O(b, null);
      else {
        var e = (a || "error").toUpperCase(),
            f = e;
        d && (f += ": " + d);
        f = Error(f);
        f.code = e;
        O(b, f);
      }
    });
  }
  function Sg(a, b, c, d, e, f, h, k) {
    "ok" === b ? (d && (b = c.auth, f.auth = b, f.expires = c.expires, f.token = $c(e) ? e : "", c = null, b && u(b, "uid") ? c = v(b, "uid") : u(f, "uid") && (c = v(f, "uid")), f.uid = c, c = "custom", b && u(b, "provider") ? c = v(b, "provider") : u(f, "provider") && (c = v(f, "provider")), f.provider = c, a.rc.clear(), $c(e) && (h = h || {}, c = vc, "sessionOnly" === h.remember && (c = wc), "none" !== h.remember && a.rc.set(f, c)), Rg(a, f)), O(k, null, f)) : (a.rc.clear(), Rg(a, null), f = a = (b || "error").toUpperCase(), c && (f += ": " + c), f = Error(f), f.code = a, O(k, f));
  }
  function Tg(a, b, c, d, e) {
    N(b + " was canceled: " + d);
    a.rc.clear();
    Rg(a, null);
    a = Error(d);
    a.code = c.toUpperCase();
    O(e, a);
  }
  function Wg(a, b, c, d, e) {
    Xg(a);
    c = new rg(d || {}, {}, c || {});
    Yg(a, [Jg], "/auth/" + b, c, e);
  }
  function Zg(a, b, c, d) {
    Xg(a);
    var e = [Ig, Lg];
    c = tg(c);
    "anonymous" === b || "password" === b ? setTimeout(function() {
      O(d, U("TRANSPORT_UNAVAILABLE"));
    }, 0) : (c.be.window_features = "menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top=" + ("object" === typeof screen ? .5 * (screen.height - 625) : 0) + ",left=" + ("object" === typeof screen ? .5 * (screen.width - 625) : 0), c.be.relay_url = Dg(a.F.fc), c.be.requestWithCredential = q(a.pc, a), Yg(a, e, "/auth/" + b, c, d));
  }
  function Qg(a) {
    var b = wc.get("redirect_request_id");
    if (b) {
      var c = wc.get("redirect_client_options");
      wc.remove("redirect_request_id");
      wc.remove("redirect_client_options");
      var d = [Kg, Mg],
          b = {
            requestId: b,
            requestKey: Bg(document.location.hash)
          },
          c = new rg(c, {}, b);
      a.Pe = !0;
      try {
        document.location.hash = document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/, "");
      } catch (e) {}
      Yg(a, d, "/auth/session", c, function() {
        this.Pe = !1;
      }.bind(a));
    }
  }
  g.oe = function(a, b) {
    Xg(this);
    var c = tg(a);
    c.Za._method = "POST";
    this.pc("/users", c, function(a, c) {
      a ? O(b, a) : O(b, a, c);
    });
  };
  g.Qe = function(a, b) {
    var c = this;
    Xg(this);
    var d = "/users/" + encodeURIComponent(a.email),
        e = tg(a);
    e.Za._method = "DELETE";
    this.pc(d, e, function(a, d) {
      !a && d && d.uid && c.kb && c.kb.uid && c.kb.uid === d.uid && Vg(c);
      O(b, a);
    });
  };
  g.le = function(a, b) {
    Xg(this);
    var c = "/users/" + encodeURIComponent(a.email) + "/password",
        d = tg(a);
    d.Za._method = "PUT";
    d.Za.password = a.newPassword;
    this.pc(c, d, function(a) {
      O(b, a);
    });
  };
  g.ke = function(a, b) {
    Xg(this);
    var c = "/users/" + encodeURIComponent(a.oldEmail) + "/email",
        d = tg(a);
    d.Za._method = "PUT";
    d.Za.email = a.newEmail;
    d.Za.password = a.password;
    this.pc(c, d, function(a) {
      O(b, a);
    });
  };
  g.Se = function(a, b) {
    Xg(this);
    var c = "/users/" + encodeURIComponent(a.email) + "/password",
        d = tg(a);
    d.Za._method = "POST";
    this.pc(c, d, function(a) {
      O(b, a);
    });
  };
  g.pc = function(a, b, c) {
    $g(this, [Jg], a, b, c);
  };
  function Yg(a, b, c, d, e) {
    $g(a, b, c, d, function(b, c) {
      !b && c && c.token && c.uid ? Ug(a, c.token, c, d.ld, function(a, b) {
        a ? O(e, a) : O(e, null, b);
      }) : O(e, b || U("UNKNOWN_ERROR"));
    });
  }
  function $g(a, b, c, d, e) {
    b = Qa(b, function(a) {
      return "function" === typeof a.isAvailable && a.isAvailable();
    });
    0 === b.length ? setTimeout(function() {
      O(e, U("TRANSPORT_UNAVAILABLE"));
    }, 0) : (b = new (b.shift())(d.be), d = hb(d.Za), d.v = "node-" + fb, d.transport = b.Qb(), d.suppress_status_codes = !0, a = Cg() + "/" + a.F.fc + c, b.open(a, d, function(a, b) {
      if (a)
        O(e, a);
      else if (b && b.error) {
        var c = Error(b.error.message);
        c.code = b.error.code;
        c.details = b.error.details;
        O(e, c);
      } else
        O(e, null, b);
    }));
  }
  function Rg(a, b) {
    var c = null !== a.kb || null !== b;
    a.kb = b;
    c && a.ce("auth_status", b);
    a.Ie(null !== b);
  }
  g.we = function(a) {
    I("auth_status" === a, 'initial event must be of type "auth_status"');
    return this.Pe ? null : [this.kb];
  };
  function Xg(a) {
    var b = a.F;
    if ("firebaseio.com" !== b.domain && "firebaseio-demo.com" !== b.domain && "auth.firebase.com" === qg)
      throw Error("This custom Firebase server ('" + a.F.domain + "') does not support delegated login.");
  }
  ;
  var Ac = "websocket",
      Bc = "long_polling";
  function ah(a) {
    this.hc = a;
    this.Ld = [];
    this.Rb = 0;
    this.me = -1;
    this.Db = null;
  }
  function bh(a, b, c) {
    a.me = b;
    a.Db = c;
    a.me < a.Rb && (a.Db(), a.Db = null);
  }
  function ch(a, b, c) {
    for (a.Ld[b] = c; a.Ld[a.Rb]; ) {
      var d = a.Ld[a.Rb];
      delete a.Ld[a.Rb];
      for (var e = 0; e < d.length; ++e)
        if (d[e]) {
          var f = a;
          Bb(function() {
            f.hc(d[e]);
          });
        }
      if (a.Rb === a.me) {
        a.Db && (clearTimeout(a.Db), a.Db(), a.Db = null);
        break;
      }
      a.Rb++;
    }
  }
  ;
  function dh(a, b, c, d) {
    this.ne = a;
    this.f = Kc(a);
    this.lb = this.mb = 0;
    this.Ta = Pb(b);
    this.Pf = c;
    this.Fc = !1;
    this.zb = d;
    this.fd = function(a) {
      return zc(b, Bc, a);
    };
  }
  var eh,
      fh;
  dh.prototype.open = function(a, b) {
    this.ef = 0;
    this.la = b;
    this.zf = new ah(a);
    this.xb = !1;
    var c = this;
    this.ob = setTimeout(function() {
      c.f("Timed out trying to connect.");
      c.eb();
      c.ob = null;
    }, Math.floor(3E4));
    Pc(function() {
      if (!c.xb) {
        c.Ra = new gh(function(a, b, d, k, m) {
          hh(c, arguments);
          if (c.Ra)
            if (c.ob && (clearTimeout(c.ob), c.ob = null), c.Fc = !0, "start" == a)
              c.id = b, c.Hg = d;
            else if ("close" === a)
              b ? (c.Ra.Lf = !1, bh(c.zf, b, function() {
                c.eb();
              })) : c.eb();
            else
              throw Error("Unrecognized command received: " + a);
        }, function(a, b) {
          hh(c, arguments);
          ch(c.zf, a, b);
        }, function() {
          c.eb();
        }, c.fd);
        var a = {start: "t"};
        a.ser = Math.floor(1E8 * Math.random());
        c.Ra.Wg && (a.cb = c.Ra.Wg);
        a.v = "5";
        c.Pf && (a.s = c.Pf);
        c.zb && (a.ls = c.zb);
        a = c.fd(a);
        c.f("Connecting via long-poll to " + a);
        ih(c.Ra, a, function() {});
      }
    });
  };
  dh.prototype.start = function() {
    var a = this.Ra,
        b = this.Hg;
    a.Ge = this.id;
    a.yf = b;
    for (a.he = !0; jh(a); )
      ;
  };
  dh.isAvailable = function() {
    return eh || !fh && "undefined" !== typeof document && null != document.createElement && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Yg) && !1;
  };
  g = dh.prototype;
  g.Bd = function() {};
  g.ad = function() {
    this.xb = !0;
    this.Ra && (this.Ra.close(), this.Ra = null);
    this.xf && (document.body.removeChild(this.xf), this.xf = null);
    this.ob && (clearTimeout(this.ob), this.ob = null);
  };
  g.eb = function() {
    this.xb || (this.f("Longpoll is closing itself"), this.ad(), this.la && (this.la(this.Fc), this.la = null));
  };
  g.close = function() {
    this.xb || (this.f("Longpoll is being closed."), this.ad());
  };
  g.send = function(a) {
    a = A(a);
    this.mb += a.length;
    Mb(this.Ta, "bytes_sent", a.length);
    a = Gc(a);
    a = eb(a, !0);
    a = Tc(a, 1840);
    for (var b = 0; b < a.length; b++) {
      var c = this.Ra;
      c.Yc.push({
        Mg: this.ef,
        Ug: a.length,
        gf: a[b]
      });
      c.he && jh(c);
      this.ef++;
    }
  };
  function hh(a, b) {
    var c = A(b).length;
    a.lb += c;
    Mb(a.Ta, "bytes_received", c);
  }
  function gh(a, b, c, d) {
    this.fd = d;
    this.fb = c;
    this.Me = new ng;
    this.Yc = [];
    this.pe = Math.floor(1E8 * Math.random());
    this.Lf = !0;
    this.gg = a;
    this.yg = b;
  }
  gh.prototype.close = function() {
    this.he = !1;
    if (this.Dd) {
      this.Dd.$g.body.innerHTML = "";
      var a = this;
      setTimeout(function() {
        null !== a.Dd && (document.body.removeChild(a.Dd), a.Dd = null);
      }, Math.floor(0));
    }
    if (this.Ge) {
      var b = {disconn: "t"};
      b.id = this.Ge;
      b.pw = this.yf;
      b = this.fd(b);
      kh(b);
    }
    if (b = this.fb)
      this.fb = null, b();
  };
  function jh(a) {
    if (a.he && a.Lf && a.Me.count() < (0 < a.Yc.length ? 2 : 1)) {
      a.pe++;
      var b = {};
      b.id = a.Ge;
      b.pw = a.yf;
      b.ser = a.pe;
      for (var b = a.fd(b),
          c = "",
          d = 0; 0 < a.Yc.length; )
        if (1870 >= a.Yc[0].gf.length + 30 + c.length) {
          var e = a.Yc.shift(),
              c = c + "&seg" + d + "=" + e.Mg + "&ts" + d + "=" + e.Ug + "&d" + d + "=" + e.gf;
          d++;
        } else
          break;
      lh(a, b + c, a.pe);
      return !0;
    }
    return !1;
  }
  function lh(a, b, c) {
    function d() {
      a.Me.remove(c);
      jh(a);
    }
    a.Me.add(c, 1);
    var e = setTimeout(d, Math.floor(25E3));
    ih(a, b, function() {
      clearTimeout(e);
      d();
    });
  }
  function ih(a, b, c) {
    mh(a, b, c);
  }
  var nh = null;
  function kh(a, b) {
    nh || (nh = require('request'));
    nh(a, function(c, d, e) {
      if (c)
        throw "Rest request for " + a.url + " failed.";
      b && b(e);
    });
  }
  function mh(a, b, c) {
    kh({
      url: b,
      ah: !0
    }, function(b) {
      oh(a, b);
      c();
    });
  }
  function oh(a, b) {
    eval("var jsonpCB = function(pLPCommand, pRTLPCB) {" + b + "}");
    jsonpCB(a.gg, a.yg);
  }
  ;
  var ph = null,
      ph = require('faye-websocket').Client;
  function qh(a, b, c, d) {
    this.ne = a;
    this.f = Kc(this.ne);
    this.frames = this.Ic = null;
    this.lb = this.mb = this.Ze = 0;
    this.Ta = Pb(b);
    a = {v: "5"};
    c && (a.s = c);
    d && (a.ls = d);
    this.bf = zc(b, Ac, a);
  }
  var rh;
  qh.prototype.open = function(a, b) {
    this.fb = b;
    this.xg = a;
    this.f("Websocket connecting to " + this.bf);
    this.Fc = !1;
    vc.set("previous_websocket_failure", !0);
    try {
      this.ua = new ph(this.bf, [], {headers: {"User-Agent": "Firebase/5/" + fb + "/" + process.platform + "/Node"}});
    } catch (c) {
      this.f("Error instantiating WebSocket.");
      var d = c.message || c.data;
      d && this.f(d);
      this.eb();
      return;
    }
    var e = this;
    this.ua.onopen = function() {
      e.f("Websocket connected.");
      e.Fc = !0;
    };
    this.ua.onclose = function() {
      e.f("Websocket connection was disconnected.");
      e.ua = null;
      e.eb();
    };
    this.ua.onmessage = function(a) {
      if (null !== e.ua)
        if (a = a.data, e.lb += a.length, Mb(e.Ta, "bytes_received", a.length), sh(e), null !== e.frames)
          th(e, a);
        else {
          a: {
            I(null === e.frames, "We already have a frame buffer");
            if (6 >= a.length) {
              var b = Number(a);
              if (!isNaN(b)) {
                e.Ze = b;
                e.frames = [];
                a = null;
                break a;
              }
            }
            e.Ze = 1;
            e.frames = [];
          }
          null !== a && th(e, a);
        }
    };
    this.ua.onerror = function(a) {
      e.f("WebSocket error.  Closing connection.");
      (a = a.message || a.data) && e.f(a);
      e.eb();
    };
  };
  qh.prototype.start = function() {};
  qh.isAvailable = function() {
    var a = !1;
    if ("undefined" !== typeof navigator && navigator.userAgent) {
      var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
      b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0);
    }
    return !a && null !== ph && !rh;
  };
  qh.responsesRequiredToBeHealthy = 2;
  qh.healthyTimeout = 3E4;
  g = qh.prototype;
  g.Bd = function() {
    vc.remove("previous_websocket_failure");
  };
  function th(a, b) {
    a.frames.push(b);
    if (a.frames.length == a.Ze) {
      var c = a.frames.join("");
      a.frames = null;
      c = lb(c);
      a.xg(c);
    }
  }
  g.send = function(a) {
    sh(this);
    a = A(a);
    this.mb += a.length;
    Mb(this.Ta, "bytes_sent", a.length);
    a = Tc(a, 16384);
    1 < a.length && this.ua.send(String(a.length));
    for (var b = 0; b < a.length; b++)
      this.ua.send(a[b]);
  };
  g.ad = function() {
    this.xb = !0;
    this.Ic && (clearInterval(this.Ic), this.Ic = null);
    this.ua && (this.ua.close(), this.ua = null);
  };
  g.eb = function() {
    this.xb || (this.f("WebSocket is closing itself"), this.ad(), this.fb && (this.fb(this.Fc), this.fb = null));
  };
  g.close = function() {
    this.xb || (this.f("WebSocket is being closed"), this.ad());
  };
  function sh(a) {
    clearInterval(a.Ic);
    a.Ic = setInterval(function() {
      a.ua && a.ua.send("0");
      sh(a);
    }, Math.floor(45E3));
  }
  ;
  function uh(a) {
    vh(this, a);
  }
  var wh = [dh, qh];
  function vh(a, b) {
    var c = qh && qh.isAvailable(),
        d = c && !(vc.sf || !0 === vc.get("previous_websocket_failure"));
    b.Xg && (c || N("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0);
    if (d)
      a.dd = [qh];
    else {
      var e = a.dd = [];
      Uc(wh, function(a, b) {
        b && b.isAvailable() && e.push(b);
      });
    }
  }
  function xh(a) {
    if (0 < a.dd.length)
      return a.dd[0];
    throw Error("No transports available");
  }
  ;
  function yh(a, b, c, d, e, f, h) {
    this.id = a;
    this.f = Kc("c:" + this.id + ":");
    this.hc = c;
    this.Uc = d;
    this.la = e;
    this.Ke = f;
    this.F = b;
    this.Kd = [];
    this.cf = 0;
    this.Of = new uh(b);
    this.Sa = 0;
    this.zb = h;
    this.f("Connection created");
    zh(this);
  }
  function zh(a) {
    var b = xh(a.Of);
    a.J = new b("c:" + a.id + ":" + a.cf++, a.F, void 0, a.zb);
    a.Oe = b.responsesRequiredToBeHealthy || 0;
    var c = Ah(a, a.J),
        d = Bh(a, a.J);
    a.ed = a.J;
    a.$c = a.J;
    a.D = null;
    a.yb = !1;
    setTimeout(function() {
      a.J && a.J.open(c, d);
    }, Math.floor(0));
    b = b.healthyTimeout || 0;
    0 < b && (a.vd = setTimeout(function() {
      a.vd = null;
      a.yb || (a.J && 102400 < a.J.lb ? (a.f("Connection exceeded healthy timeout but has received " + a.J.lb + " bytes.  Marking connection healthy."), a.yb = !0, a.J.Bd()) : a.J && 10240 < a.J.mb ? a.f("Connection exceeded healthy timeout but has sent " + a.J.mb + " bytes.  Leaving connection alive.") : (a.f("Closing unhealthy connection after timeout."), a.close()));
    }, Math.floor(b)));
  }
  function Bh(a, b) {
    return function(c) {
      b === a.J ? (a.J = null, c || 0 !== a.Sa ? 1 === a.Sa && a.f("Realtime connection lost.") : (a.f("Realtime connection failed."), "s-" === a.F.Xa.substr(0, 2) && (vc.remove("host:" + a.F.host), a.F.Xa = a.F.host)), a.close()) : b === a.D ? (a.f("Secondary connection lost."), c = a.D, a.D = null, a.ed !== c && a.$c !== c || a.close()) : a.f("closing an old connection");
    };
  }
  function Ah(a, b) {
    return function(c) {
      if (2 != a.Sa)
        if (b === a.$c) {
          var d = Rc("t", c);
          c = Rc("d", c);
          if ("c" == d) {
            if (d = Rc("t", c), "d" in c)
              if (c = c.d, "h" === d) {
                var d = c.ts,
                    e = c.v,
                    f = c.h;
                a.Mf = c.s;
                yc(a.F, f);
                0 == a.Sa && (a.J.start(), Ch(a, a.J, d), "5" !== e && N("Protocol version mismatch detected"), c = a.Of, (c = 1 < c.dd.length ? c.dd[1] : null) && Dh(a, c));
              } else if ("n" === d) {
                a.f("recvd end transmission on primary");
                a.$c = a.D;
                for (c = 0; c < a.Kd.length; ++c)
                  a.Gd(a.Kd[c]);
                a.Kd = [];
                Eh(a);
              } else
                "s" === d ? (a.f("Connection shutdown command received. Shutting down..."), a.Ke && (a.Ke(c), a.Ke = null), a.la = null, a.close()) : "r" === d ? (a.f("Reset packet received.  New host: " + c), yc(a.F, c), 1 === a.Sa ? a.close() : (Fh(a), zh(a))) : "e" === d ? Lc("Server Error: " + c) : "o" === d ? (a.f("got pong on primary."), Gh(a), Hh(a)) : Lc("Unknown control packet command: " + d);
          } else
            "d" == d && a.Gd(c);
        } else if (b === a.D)
          if (d = Rc("t", c), c = Rc("d", c), "c" == d)
            "t" in c && (c = c.t, "a" === c ? Ih(a) : "r" === c ? (a.f("Got a reset on secondary, closing it"), a.D.close(), a.ed !== a.D && a.$c !== a.D || a.close()) : "o" === c && (a.f("got pong on secondary."), a.Kf--, Ih(a)));
          else if ("d" == d)
            a.Kd.push(c);
          else
            throw Error("Unknown protocol layer: " + d);
        else
          a.f("message on old connection");
    };
  }
  yh.prototype.Ea = function(a) {
    Jh(this, {
      t: "d",
      d: a
    });
  };
  function Eh(a) {
    a.ed === a.D && a.$c === a.D && (a.f("cleaning up and promoting a connection: " + a.D.ne), a.J = a.D, a.D = null);
  }
  function Ih(a) {
    0 >= a.Kf ? (a.f("Secondary connection is healthy."), a.yb = !0, a.D.Bd(), a.D.start(), a.f("sending client ack on secondary"), a.D.send({
      t: "c",
      d: {
        t: "a",
        d: {}
      }
    }), a.f("Ending transmission on primary"), a.J.send({
      t: "c",
      d: {
        t: "n",
        d: {}
      }
    }), a.ed = a.D, Eh(a)) : (a.f("sending ping on secondary."), a.D.send({
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }));
  }
  yh.prototype.Gd = function(a) {
    Gh(this);
    this.hc(a);
  };
  function Gh(a) {
    a.yb || (a.Oe--, 0 >= a.Oe && (a.f("Primary connection is healthy."), a.yb = !0, a.J.Bd()));
  }
  function Dh(a, b) {
    a.D = new b("c:" + a.id + ":" + a.cf++, a.F, a.Mf);
    a.Kf = b.responsesRequiredToBeHealthy || 0;
    a.D.open(Ah(a, a.D), Bh(a, a.D));
    setTimeout(function() {
      a.D && (a.f("Timed out trying to upgrade."), a.D.close());
    }, Math.floor(6E4));
  }
  function Ch(a, b, c) {
    a.f("Realtime connection established.");
    a.J = b;
    a.Sa = 1;
    a.Uc && (a.Uc(c, a.Mf), a.Uc = null);
    0 === a.Oe ? (a.f("Primary connection is healthy."), a.yb = !0) : setTimeout(function() {
      Hh(a);
    }, Math.floor(5E3));
  }
  function Hh(a) {
    a.yb || 1 !== a.Sa || (a.f("sending ping on primary."), Jh(a, {
      t: "c",
      d: {
        t: "p",
        d: {}
      }
    }));
  }
  function Jh(a, b) {
    if (1 !== a.Sa)
      throw "Connection is not connected";
    a.ed.send(b);
  }
  yh.prototype.close = function() {
    2 !== this.Sa && (this.f("Closing realtime connection."), this.Sa = 2, Fh(this), this.la && (this.la(), this.la = null));
  };
  function Fh(a) {
    a.f("Shutting down all connections");
    a.J && (a.J.close(), a.J = null);
    a.D && (a.D.close(), a.D = null);
    a.vd && (clearTimeout(a.vd), a.vd = null);
  }
  ;
  function Kh(a, b, c, d) {
    this.id = Lh++;
    this.f = Kc("p:" + this.id + ":");
    this.tf = this.Ae = !1;
    this.$ = {};
    this.qa = [];
    this.Wc = 0;
    this.Tc = [];
    this.oa = !1;
    this.Ya = 1E3;
    this.Cd = 3E5;
    this.Eb = b;
    this.Sc = c;
    this.Le = d;
    this.F = a;
    this.qb = this.Aa = this.Ha = this.zb = this.Te = null;
    this.Mb = !1;
    this.Rd = {};
    this.Lg = 0;
    this.kf = !0;
    this.Jc = this.Ce = null;
    Mh(this, 0);
    Fe.sb().Cb("visible", this.Bg, this);
    -1 === a.host.indexOf("fblocal") && Ee.sb().Cb("online", this.zg, this);
  }
  var Lh = 0,
      Nh = 0;
  g = Kh.prototype;
  g.Ea = function(a, b, c) {
    var d = ++this.Lg;
    a = {
      r: d,
      a: a,
      b: b
    };
    this.f(A(a));
    I(this.oa, "sendRequest call when we're not connected not allowed.");
    this.Ha.Ea(a);
    c && (this.Rd[d] = c);
  };
  g.uf = function(a, b, c, d) {
    var e = a.va(),
        f = a.path.toString();
    this.f("Listen called for " + f + " " + e);
    this.$[f] = this.$[f] || {};
    I(de(a.n) || !R(a.n), "listen() called for non-default but complete query");
    I(!this.$[f][e], "listen() called twice for same path/queryId.");
    a = {
      H: d,
      ud: b,
      Ig: a,
      tag: c
    };
    this.$[f][e] = a;
    this.oa && Oh(this, a);
  };
  function Oh(a, b) {
    var c = b.Ig,
        d = c.path.toString(),
        e = c.va();
    a.f("Listen on " + d + " for " + e);
    var f = {p: d};
    b.tag && (f.q = ce(c.n), f.t = b.tag);
    f.h = b.ud();
    a.Ea("q", f, function(f) {
      var k = f.d,
          m = f.s;
      if (k && "object" === typeof k && u(k, "w")) {
        var l = v(k, "w");
        ea(l) && 0 <= Oa(l, "no_index") && N("Using an unspecified index. Consider adding " + ('".indexOn": "' + c.n.g.toString() + '"') + " at " + c.path.toString() + " to your security rules for better performance");
      }
      (a.$[d] && a.$[d][e]) === b && (a.f("listen response", f), "ok" !== m && Ph(a, d, e), b.H && b.H(m, k));
    });
  }
  g.M = function(a, b, c) {
    this.Aa = {
      ig: a,
      lf: !1,
      yc: b,
      jd: c
    };
    this.f("Authenticating using credential: " + a);
    Qh(this);
    (b = 40 == a.length) || (a = Yc(a).Ac, b = "object" === typeof a && !0 === v(a, "admin"));
    b && (this.f("Admin auth credential detected.  Reducing max reconnect time."), this.Cd = 3E4);
  };
  g.de = function(a) {
    delete this.Aa;
    this.oa && this.Ea("unauth", {}, function(b) {
      a(b.s, b.d);
    });
  };
  function Qh(a) {
    var b = a.Aa;
    a.oa && b && a.Ea("auth", {cred: b.ig}, function(c) {
      var d = c.s;
      c = c.d || "error";
      "ok" !== d && a.Aa === b && delete a.Aa;
      b.lf ? "ok" !== d && b.jd && b.jd(d, c) : (b.lf = !0, b.yc && b.yc(d, c));
    });
  }
  g.Qf = function(a, b) {
    var c = a.path.toString(),
        d = a.va();
    this.f("Unlisten called for " + c + " " + d);
    I(de(a.n) || !R(a.n), "unlisten() called for non-default but complete query");
    if (Ph(this, c, d) && this.oa) {
      var e = ce(a.n);
      this.f("Unlisten on " + c + " for " + d);
      c = {p: c};
      b && (c.q = e, c.t = b);
      this.Ea("n", c);
    }
  };
  g.Je = function(a, b, c) {
    this.oa ? Rh(this, "o", a, b, c) : this.Tc.push({
      kc: a,
      action: "o",
      data: b,
      H: c
    });
  };
  g.Bf = function(a, b, c) {
    this.oa ? Rh(this, "om", a, b, c) : this.Tc.push({
      kc: a,
      action: "om",
      data: b,
      H: c
    });
  };
  g.Hd = function(a, b) {
    this.oa ? Rh(this, "oc", a, null, b) : this.Tc.push({
      kc: a,
      action: "oc",
      data: null,
      H: b
    });
  };
  function Rh(a, b, c, d, e) {
    c = {
      p: c,
      d: d
    };
    a.f("onDisconnect " + b, c);
    a.Ea(b, c, function(a) {
      e && setTimeout(function() {
        e(a.s, a.d);
      }, Math.floor(0));
    });
  }
  g.put = function(a, b, c, d) {
    Sh(this, "p", a, b, c, d);
  };
  g.wf = function(a, b, c, d) {
    Sh(this, "m", a, b, c, d);
  };
  function Sh(a, b, c, d, e, f) {
    d = {
      p: c,
      d: d
    };
    n(f) && (d.h = f);
    a.qa.push({
      action: b,
      Hf: d,
      H: e
    });
    a.Wc++;
    b = a.qa.length - 1;
    a.oa ? Th(a, b) : a.f("Buffering put: " + c);
  }
  function Th(a, b) {
    var c = a.qa[b].action,
        d = a.qa[b].Hf,
        e = a.qa[b].H;
    a.qa[b].Jg = a.oa;
    a.Ea(c, d, function(d) {
      a.f(c + " response", d);
      delete a.qa[b];
      a.Wc--;
      0 === a.Wc && (a.qa = []);
      e && e(d.s, d.d);
    });
  }
  g.Re = function(a) {
    this.oa && (a = {c: a}, this.f("reportStats", a), this.Ea("s", a, function(a) {
      "ok" !== a.s && this.f("reportStats", "Error sending stats: " + a.d);
    }));
  };
  g.Gd = function(a) {
    if ("r" in a) {
      this.f("from server: " + A(a));
      var b = a.r,
          c = this.Rd[b];
      c && (delete this.Rd[b], c(a.b));
    } else {
      if ("error" in a)
        throw "A server-side error has occurred: " + a.error;
      "a" in a && (b = a.a, c = a.b, this.f("handleServerMessage", b, c), "d" === b ? this.Eb(c.p, c.d, !1, c.t) : "m" === b ? this.Eb(c.p, c.d, !0, c.t) : "c" === b ? Uh(this, c.p, c.q) : "ac" === b ? (a = c.s, b = c.d, c = this.Aa, delete this.Aa, c && c.jd && c.jd(a, b)) : "sd" === b ? this.Te ? this.Te(c) : "msg" in c && "undefined" !== typeof console && console.log("FIREBASE: " + c.msg.replace("\n", "\nFIREBASE: ")) : Lc("Unrecognized action received from server: " + A(b) + "\nAre you using the latest client?"));
    }
  };
  g.Uc = function(a, b) {
    this.f("connection ready");
    this.oa = !0;
    this.Jc = (new Date).getTime();
    this.Le({serverTimeOffset: a - (new Date).getTime()});
    this.zb = b;
    if (this.kf) {
      var c = {};
      c["sdk.js." + fb.replace(/\./g, "-")] = 1;
      "undefined" !== typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vg()) && (c["framework.cordova"] = 1);
      this.Re(c);
    }
    Vh(this);
    this.kf = !1;
    this.Sc(!0);
  };
  function Mh(a, b) {
    I(!a.Ha, "Scheduling a connect when we're already connected/ing?");
    a.qb && clearTimeout(a.qb);
    a.qb = setTimeout(function() {
      a.qb = null;
      Wh(a);
    }, Math.floor(b));
  }
  g.Bg = function(a) {
    a && !this.Mb && this.Ya === this.Cd && (this.f("Window became visible.  Reducing delay."), this.Ya = 1E3, this.Ha || Mh(this, 0));
    this.Mb = a;
  };
  g.zg = function(a) {
    a ? (this.f("Browser went online."), this.Ya = 1E3, this.Ha || Mh(this, 0)) : (this.f("Browser went offline.  Killing connection."), this.Ha && this.Ha.close());
  };
  g.Cf = function() {
    this.f("data client disconnected");
    this.oa = !1;
    this.Ha = null;
    for (var a = 0; a < this.qa.length; a++) {
      var b = this.qa[a];
      b && "h" in b.Hf && b.Jg && (b.H && b.H("disconnect"), delete this.qa[a], this.Wc--);
    }
    0 === this.Wc && (this.qa = []);
    this.Rd = {};
    Xh(this) && (this.Mb ? this.Jc && (3E4 < (new Date).getTime() - this.Jc && (this.Ya = 1E3), this.Jc = null) : (this.f("Window isn't visible.  Delaying reconnect."), this.Ya = this.Cd, this.Ce = (new Date).getTime()), a = Math.max(0, this.Ya - ((new Date).getTime() - this.Ce)), a *= Math.random(), this.f("Trying to reconnect in " + a + "ms"), Mh(this, a), this.Ya = Math.min(this.Cd, 1.3 * this.Ya));
    this.Sc(!1);
  };
  function Wh(a) {
    if (Xh(a)) {
      a.f("Making a connection attempt");
      a.Ce = (new Date).getTime();
      a.Jc = null;
      var b = q(a.Gd, a),
          c = q(a.Uc, a),
          d = q(a.Cf, a),
          e = a.id + ":" + Nh++;
      a.Ha = new yh(e, a.F, b, c, d, function(b) {
        N(b + " (" + a.F.toString() + ")");
        a.tf = !0;
      }, a.zb);
    }
  }
  g.wb = function() {
    this.Ae = !0;
    this.Ha ? this.Ha.close() : (this.qb && (clearTimeout(this.qb), this.qb = null), this.oa && this.Cf());
  };
  g.qc = function() {
    this.Ae = !1;
    this.Ya = 1E3;
    this.Ha || Mh(this, 0);
  };
  function Uh(a, b, c) {
    c = c ? Ra(c, function(a) {
      return Sc(a);
    }).join("$") : "default";
    (a = Ph(a, b, c)) && a.H && a.H("permission_denied");
  }
  function Ph(a, b, c) {
    b = (new K(b)).toString();
    var d;
    n(a.$[b]) ? (d = a.$[b][c], delete a.$[b][c], 0 === pa(a.$[b]) && delete a.$[b]) : d = void 0;
    return d;
  }
  function Vh(a) {
    Qh(a);
    t(a.$, function(b) {
      t(b, function(b) {
        Oh(a, b);
      });
    });
    for (var b = 0; b < a.qa.length; b++)
      a.qa[b] && Th(a, b);
    for (; a.Tc.length; )
      b = a.Tc.shift(), Rh(a, b.action, b.kc, b.data, b.H);
  }
  function Xh(a) {
    var b;
    b = Ee.sb().ic;
    return !a.tf && !a.Ae && b;
  }
  ;
  var V = {og: function() {
      eh = rh = !0;
    }};
  V.forceLongPolling = V.og;
  V.pg = function() {
    fh = !0;
  };
  V.forceWebSockets = V.pg;
  V.Pg = function(a, b) {
    a.k.Qa.Te = b;
  };
  V.setSecurityDebugCallback = V.Pg;
  V.Ve = function(a, b) {
    a.k.Ve(b);
  };
  V.stats = V.Ve;
  V.We = function(a, b) {
    a.k.We(b);
  };
  V.statsIncrementCounter = V.We;
  V.pd = function(a) {
    return a.k.pd;
  };
  V.dataUpdateCount = V.pd;
  V.sg = function(a, b) {
    a.k.ze = b;
  };
  V.interceptServerData = V.sg;
  V.wg = function(a) {
    new Eg(a);
  };
  V.onPopupOpen = V.wg;
  V.Ng = function(a) {
    qg = a;
  };
  V.setAuthenticationServer = V.Ng;
  function P(a, b, c) {
    this.A = a;
    this.W = b;
    this.g = c;
  }
  P.prototype.I = function() {
    w("Firebase.DataSnapshot.val", 0, 0, arguments.length);
    return this.A.I();
  };
  P.prototype.val = P.prototype.I;
  P.prototype.jf = function() {
    w("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
    return this.A.I(!0);
  };
  P.prototype.exportVal = P.prototype.jf;
  P.prototype.ng = function() {
    w("Firebase.DataSnapshot.exists", 0, 0, arguments.length);
    return !this.A.e();
  };
  P.prototype.exists = P.prototype.ng;
  P.prototype.u = function(a) {
    w("Firebase.DataSnapshot.child", 0, 1, arguments.length);
    ga(a) && (a = String(a));
    gg("Firebase.DataSnapshot.child", a);
    var b = new K(a),
        c = this.W.u(b);
    return new P(this.A.Q(b), c, M);
  };
  P.prototype.child = P.prototype.u;
  P.prototype.Da = function(a) {
    w("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
    gg("Firebase.DataSnapshot.hasChild", a);
    var b = new K(a);
    return !this.A.Q(b).e();
  };
  P.prototype.hasChild = P.prototype.Da;
  P.prototype.C = function() {
    w("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
    return this.A.C().I();
  };
  P.prototype.getPriority = P.prototype.C;
  P.prototype.forEach = function(a) {
    w("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
    z("Firebase.DataSnapshot.forEach", 1, a, !1);
    if (this.A.K())
      return !1;
    var b = this;
    return !!this.A.P(this.g, function(c, d) {
      return a(new P(d, b.W.u(c), M));
    });
  };
  P.prototype.forEach = P.prototype.forEach;
  P.prototype.td = function() {
    w("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
    return this.A.K() ? !1 : !this.A.e();
  };
  P.prototype.hasChildren = P.prototype.td;
  P.prototype.name = function() {
    N("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");
    w("Firebase.DataSnapshot.name", 0, 0, arguments.length);
    return this.key();
  };
  P.prototype.name = P.prototype.name;
  P.prototype.key = function() {
    w("Firebase.DataSnapshot.key", 0, 0, arguments.length);
    return this.W.key();
  };
  P.prototype.key = P.prototype.key;
  P.prototype.Bb = function() {
    w("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
    return this.A.Bb();
  };
  P.prototype.numChildren = P.prototype.Bb;
  P.prototype.Gb = function() {
    w("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
    return this.W;
  };
  P.prototype.ref = P.prototype.Gb;
  function Yh(a, b) {
    this.F = a;
    this.Ta = Pb(a);
    this.cd = null;
    this.da = new tb;
    this.Fd = 1;
    this.Qa = null;
    b || 0 <= ("object" === typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) ? (this.ba = new ye(this.F, q(this.Eb, this)), setTimeout(q(this.Sc, this, !0), 0)) : this.ba = this.Qa = new Kh(this.F, q(this.Eb, this), q(this.Sc, this), q(this.Le, this));
    this.Sg = Qb(a, q(function() {
      return new Kb(this.Ta, this.ba);
    }, this));
    this.tc = new Pf;
    this.ye = new mb;
    var c = this;
    this.zd = new tf({
      Ue: function(a, b, f, h) {
        b = [];
        f = c.ye.j(a.path);
        f.e() || (b = vf(c.zd, new Vb($e, a.path, f)), setTimeout(function() {
          h("ok");
        }, 0));
        return b;
      },
      Yd: ba
    });
    Zh(this, "connected", !1);
    this.la = new oc;
    this.M = new Og(a, q(this.ba.M, this.ba), q(this.ba.de, this.ba), q(this.Ie, this));
    this.pd = 0;
    this.ze = null;
    this.L = new tf({
      Ue: function(a, b, f, h) {
        c.ba.uf(a, f, b, function(b, e) {
          var f = h(b, e);
          yb(c.da, a.path, f);
        });
        return [];
      },
      Yd: function(a, b) {
        c.ba.Qf(a, b);
      }
    });
  }
  g = Yh.prototype;
  g.toString = function() {
    return (this.F.ib ? "https://" : "http://") + this.F.host;
  };
  g.name = function() {
    return this.F.fc;
  };
  function $h(a) {
    a = a.ye.j(new K(".info/serverTimeOffset")).I() || 0;
    return (new Date).getTime() + a;
  }
  function ai(a) {
    a = a = {timestamp: $h(a)};
    a.timestamp = a.timestamp || (new Date).getTime();
    return a;
  }
  g.Eb = function(a, b, c, d) {
    this.pd++;
    var e = new K(a);
    b = this.ze ? this.ze(a, b) : b;
    a = [];
    d ? c ? (b = na(b, function(a) {
      return L(a);
    }), a = Df(this.L, e, b, d)) : (b = L(b), a = zf(this.L, e, b, d)) : c ? (d = na(b, function(a) {
      return L(a);
    }), a = yf(this.L, e, d)) : (d = L(b), a = vf(this.L, new Vb($e, e, d)));
    d = e;
    0 < a.length && (d = bi(this, e));
    yb(this.da, d, a);
  };
  g.Sc = function(a) {
    Zh(this, "connected", a);
    !1 === a && ci(this);
  };
  g.Le = function(a) {
    var b = this;
    Uc(a, function(a, d) {
      Zh(b, d, a);
    });
  };
  g.Ie = function(a) {
    Zh(this, "authenticated", a);
  };
  function Zh(a, b, c) {
    b = new K("/.info/" + b);
    c = L(c);
    var d = a.ye;
    d.Ud = d.Ud.G(b, c);
    c = vf(a.zd, new Vb($e, b, c));
    yb(a.da, b, c);
  }
  g.Ib = function(a, b, c, d) {
    this.f("set", {
      path: a.toString(),
      value: b,
      dh: c
    });
    var e = ai(this);
    b = L(b, c);
    var e = qc(b, e),
        f = this.Fd++,
        e = uf(this.L, a, e, f, !0);
    ub(this.da, e);
    var h = this;
    this.ba.put(a.toString(), b.I(!0), function(b, c) {
      var e = "ok" === b;
      e || N("set at " + a + " failed: " + b);
      e = xf(h.L, f, !e);
      yb(h.da, a, e);
      di(d, b, c);
    });
    e = ei(this, a);
    bi(this, e);
    yb(this.da, e, []);
  };
  g.update = function(a, b, c) {
    this.f("update", {
      path: a.toString(),
      value: b
    });
    var d = !0,
        e = ai(this),
        f = {};
    t(b, function(a, b) {
      d = !1;
      var c = L(a);
      f[b] = qc(c, e);
    });
    if (d)
      Ab("update() called with empty data.  Don't do anything."), di(c, "ok");
    else {
      var h = this.Fd++,
          k = wf(this.L, a, f, h);
      ub(this.da, k);
      var m = this;
      this.ba.wf(a.toString(), b, function(b, d) {
        var e = "ok" === b;
        e || N("update at " + a + " failed: " + b);
        var e = xf(m.L, h, !e),
            f = a;
        0 < e.length && (f = bi(m, a));
        yb(m.da, f, e);
        di(c, b, d);
      });
      b = ei(this, a);
      bi(this, b);
      yb(this.da, a, []);
    }
  };
  function ci(a) {
    a.f("onDisconnectEvents");
    var b = ai(a),
        c = [];
    pc(nc(a.la, b), F, function(b, e) {
      c = c.concat(vf(a.L, new Vb($e, b, e)));
      var f = ei(a, b);
      bi(a, f);
    });
    a.la = new oc;
    yb(a.da, F, c);
  }
  g.Hd = function(a, b) {
    var c = this;
    this.ba.Hd(a.toString(), function(d, e) {
      "ok" === d && pg(c.la, a);
      di(b, d, e);
    });
  };
  function fi(a, b, c, d) {
    var e = L(c);
    a.ba.Je(b.toString(), e.I(!0), function(c, h) {
      "ok" === c && a.la.mc(b, e);
      di(d, c, h);
    });
  }
  function gi(a, b, c, d, e) {
    var f = L(c, d);
    a.ba.Je(b.toString(), f.I(!0), function(c, d) {
      "ok" === c && a.la.mc(b, f);
      di(e, c, d);
    });
  }
  function hi(a, b, c, d) {
    var e = !0,
        f;
    for (f in c)
      e = !1;
    e ? (Ab("onDisconnect().update() called with empty data.  Don't do anything."), di(d, "ok")) : a.ba.Bf(b.toString(), c, function(e, f) {
      if ("ok" === e)
        for (var m in c) {
          var l = L(c[m]);
          a.la.mc(b.u(m), l);
        }
      di(d, e, f);
    });
  }
  function ii(a, b, c) {
    c = ".info" === D(b.path) ? a.zd.Nb(b, c) : a.L.Nb(b, c);
    wb(a.da, b.path, c);
  }
  g.wb = function() {
    this.Qa && this.Qa.wb();
  };
  g.qc = function() {
    this.Qa && this.Qa.qc();
  };
  g.Ve = function(a) {
    if ("undefined" !== typeof console) {
      a ? (this.cd || (this.cd = new Jb(this.Ta)), a = this.cd.get()) : a = this.Ta.get();
      var b = Sa(sa(a), function(a, b) {
        return Math.max(b.length, a);
      }, 0),
          c;
      for (c in a) {
        for (var d = a[c],
            e = c.length; e < b + 2; e++)
          c += " ";
        console.log(c + d);
      }
    }
  };
  g.We = function(a) {
    Mb(this.Ta, a);
    this.Sg.Nf[a] = !0;
  };
  g.f = function(a) {
    var b = "";
    this.Qa && (b = this.Qa.id + ":");
    Ab(b, arguments);
  };
  function di(a, b, c) {
    a && Bb(function() {
      if ("ok" == b)
        a(null);
      else {
        var d = (b || "error").toUpperCase(),
            e = d;
        c && (e += ": " + c);
        e = Error(e);
        e.code = d;
        a(e);
      }
    });
  }
  ;
  function ji(a, b, c, d, e) {
    function f() {}
    a.f("transaction on " + b);
    var h = new T(a, b);
    h.Cb("value", f);
    c = {
      path: b,
      update: c,
      H: d,
      status: null,
      Ef: Cc(),
      $e: e,
      Jf: 0,
      ee: function() {
        h.gc("value", f);
      },
      ge: null,
      Ba: null,
      md: null,
      nd: null,
      od: null
    };
    d = a.L.za(b, void 0) || B;
    c.md = d;
    d = c.update(d.I());
    if (n(d)) {
      ag("transaction failed: Data returned ", d, c.path);
      c.status = 1;
      e = Qf(a.tc, b);
      var k = e.Ca() || [];
      k.push(c);
      Rf(e, k);
      "object" === typeof d && null !== d && u(d, ".priority") ? (k = v(d, ".priority"), I(Zf(k), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : k = (a.L.za(b) || B).C().I();
      e = ai(a);
      d = L(d, k);
      e = qc(d, e);
      c.nd = d;
      c.od = e;
      c.Ba = a.Fd++;
      c = uf(a.L, b, e, c.Ba, c.$e);
      yb(a.da, b, c);
      ki(a);
    } else
      c.ee(), c.nd = null, c.od = null, c.H && (a = new P(c.md, new T(a, c.path), M), c.H(null, !1, a));
  }
  function ki(a, b) {
    var c = b || a.tc;
    b || li(a, c);
    if (null !== c.Ca()) {
      var d = mi(a, c);
      I(0 < d.length, "Sending zero length transaction queue");
      Ta(d, function(a) {
        return 1 === a.status;
      }) && ni(a, c.path(), d);
    } else
      c.td() && c.P(function(b) {
        ki(a, b);
      });
  }
  function ni(a, b, c) {
    for (var d = Ra(c, function(a) {
      return a.Ba;
    }),
        e = a.L.za(b, d) || B,
        d = e,
        e = e.hash(),
        f = 0; f < c.length; f++) {
      var h = c[f];
      I(1 === h.status, "tryToSendTransactionQueue_: items in queue should all be run.");
      h.status = 2;
      h.Jf++;
      var k = S(b, h.path),
          d = d.G(k, h.nd);
    }
    d = d.I(!0);
    a.ba.put(b.toString(), d, function(d) {
      a.f("transaction put response", {
        path: b.toString(),
        status: d
      });
      var e = [];
      if ("ok" === d) {
        d = [];
        for (f = 0; f < c.length; f++) {
          c[f].status = 3;
          e = e.concat(xf(a.L, c[f].Ba));
          if (c[f].H) {
            var h = c[f].od,
                k = new T(a, c[f].path);
            d.push(q(c[f].H, null, null, !0, new P(h, k, M)));
          }
          c[f].ee();
        }
        li(a, Qf(a.tc, b));
        ki(a);
        yb(a.da, b, e);
        for (f = 0; f < d.length; f++)
          Bb(d[f]);
      } else {
        if ("datastale" === d)
          for (f = 0; f < c.length; f++)
            c[f].status = 4 === c[f].status ? 5 : 1;
        else
          for (N("transaction at " + b.toString() + " failed: " + d), f = 0; f < c.length; f++)
            c[f].status = 5, c[f].ge = d;
        bi(a, b);
      }
    }, e);
  }
  function bi(a, b) {
    var c = oi(a, b),
        d = c.path(),
        c = mi(a, c);
    pi(a, c, d);
    return d;
  }
  function pi(a, b, c) {
    if (0 !== b.length) {
      for (var d = [],
          e = [],
          f = Ra(b, function(a) {
            return a.Ba;
          }),
          h = 0; h < b.length; h++) {
        var k = b[h],
            m = S(c, k.path),
            l = !1,
            r;
        I(null !== m, "rerunTransactionsUnderNode_: relativePath should not be null.");
        if (5 === k.status)
          l = !0, r = k.ge, e = e.concat(xf(a.L, k.Ba, !0));
        else if (1 === k.status)
          if (25 <= k.Jf)
            l = !0, r = "maxretry", e = e.concat(xf(a.L, k.Ba, !0));
          else {
            var x = a.L.za(k.path, f) || B;
            k.md = x;
            var J = b[h].update(x.I());
            n(J) ? (ag("transaction failed: Data returned ", J, k.path), m = L(J), "object" === typeof J && null != J && u(J, ".priority") || (m = m.ga(x.C())), x = k.Ba, J = ai(a), J = qc(m, J), k.nd = m, k.od = J, k.Ba = a.Fd++, Wa(f, x), e = e.concat(uf(a.L, k.path, J, k.Ba, k.$e)), e = e.concat(xf(a.L, x, !0))) : (l = !0, r = "nodata", e = e.concat(xf(a.L, k.Ba, !0)));
          }
        yb(a.da, c, e);
        e = [];
        l && (b[h].status = 3, setTimeout(b[h].ee, Math.floor(0)), b[h].H && ("nodata" === r ? (k = new T(a, b[h].path), d.push(q(b[h].H, null, null, !1, new P(b[h].md, k, M)))) : d.push(q(b[h].H, null, Error(r), !1, null))));
      }
      li(a, a.tc);
      for (h = 0; h < d.length; h++)
        Bb(d[h]);
      ki(a);
    }
  }
  function oi(a, b) {
    for (var c,
        d = a.tc; null !== (c = D(b)) && null === d.Ca(); )
      d = Qf(d, c), b = G(b);
    return d;
  }
  function mi(a, b) {
    var c = [];
    qi(a, b, c);
    c.sort(function(a, b) {
      return a.Ef - b.Ef;
    });
    return c;
  }
  function qi(a, b, c) {
    var d = b.Ca();
    if (null !== d)
      for (var e = 0; e < d.length; e++)
        c.push(d[e]);
    b.P(function(b) {
      qi(a, b, c);
    });
  }
  function li(a, b) {
    var c = b.Ca();
    if (c) {
      for (var d = 0,
          e = 0; e < c.length; e++)
        3 !== c[e].status && (c[d] = c[e], d++);
      c.length = d;
      Rf(b, 0 < c.length ? c : null);
    }
    b.P(function(b) {
      li(a, b);
    });
  }
  function ei(a, b) {
    var c = oi(a, b).path(),
        d = Qf(a.tc, b);
    Uf(d, function(b) {
      ri(a, b);
    });
    ri(a, d);
    Tf(d, function(b) {
      ri(a, b);
    });
    return c;
  }
  function ri(a, b) {
    var c = b.Ca();
    if (null !== c) {
      for (var d = [],
          e = [],
          f = -1,
          h = 0; h < c.length; h++)
        4 !== c[h].status && (2 === c[h].status ? (I(f === h - 1, "All SENT items should be at beginning of queue."), f = h, c[h].status = 4, c[h].ge = "set") : (I(1 === c[h].status, "Unexpected transaction status in abort"), c[h].ee(), e = e.concat(xf(a.L, c[h].Ba, !0)), c[h].H && d.push(q(c[h].H, null, Error("set"), !1, null))));
      -1 === f ? Rf(b, null) : c.length = f + 1;
      yb(a.da, b.path(), e);
      for (h = 0; h < d.length; h++)
        Bb(d[h]);
    }
  }
  ;
  function W() {
    this.nc = {};
    this.Rf = !1;
  }
  W.prototype.wb = function() {
    for (var a in this.nc)
      this.nc[a].wb();
  };
  W.prototype.qc = function() {
    for (var a in this.nc)
      this.nc[a].qc();
  };
  W.prototype.re = function() {
    this.Rf = !0;
  };
  ca(W);
  W.prototype.interrupt = W.prototype.wb;
  W.prototype.resume = W.prototype.qc;
  function X(a, b) {
    this.Zc = a;
    this.ra = b;
  }
  X.prototype.cancel = function(a) {
    w("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
    z("Firebase.onDisconnect().cancel", 1, a, !0);
    this.Zc.Hd(this.ra, a || null);
  };
  X.prototype.cancel = X.prototype.cancel;
  X.prototype.remove = function(a) {
    w("Firebase.onDisconnect().remove", 0, 1, arguments.length);
    hg("Firebase.onDisconnect().remove", this.ra);
    z("Firebase.onDisconnect().remove", 1, a, !0);
    fi(this.Zc, this.ra, null, a);
  };
  X.prototype.remove = X.prototype.remove;
  X.prototype.set = function(a, b) {
    w("Firebase.onDisconnect().set", 1, 2, arguments.length);
    hg("Firebase.onDisconnect().set", this.ra);
    $f("Firebase.onDisconnect().set", a, this.ra, !1);
    z("Firebase.onDisconnect().set", 2, b, !0);
    fi(this.Zc, this.ra, a, b);
  };
  X.prototype.set = X.prototype.set;
  X.prototype.Ib = function(a, b, c) {
    w("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
    hg("Firebase.onDisconnect().setWithPriority", this.ra);
    $f("Firebase.onDisconnect().setWithPriority", a, this.ra, !1);
    dg("Firebase.onDisconnect().setWithPriority", 2, b);
    z("Firebase.onDisconnect().setWithPriority", 3, c, !0);
    gi(this.Zc, this.ra, a, b, c);
  };
  X.prototype.setWithPriority = X.prototype.Ib;
  X.prototype.update = function(a, b) {
    w("Firebase.onDisconnect().update", 1, 2, arguments.length);
    hg("Firebase.onDisconnect().update", this.ra);
    if (ea(a)) {
      for (var c = {},
          d = 0; d < a.length; ++d)
        c["" + d] = a[d];
      a = c;
      N("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    cg("Firebase.onDisconnect().update", a, this.ra);
    z("Firebase.onDisconnect().update", 2, b, !0);
    hi(this.Zc, this.ra, a, b);
  };
  X.prototype.update = X.prototype.update;
  function Y(a, b, c, d) {
    this.k = a;
    this.path = b;
    this.n = c;
    this.jc = d;
  }
  function si(a) {
    var b = null,
        c = null;
    a.ma && (b = ld(a));
    a.pa && (c = nd(a));
    if (a.g === Od) {
      if (a.ma) {
        if ("[MIN_NAME]" != kd(a))
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !== typeof b)
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
      if (a.pa) {
        if ("[MAX_NAME]" != md(a))
          throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");
        if ("string" !== typeof c)
          throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");
      }
    } else if (a.g === M) {
      if (null != b && !Zf(b) || null != c && !Zf(c))
        throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else if (I(a.g instanceof Sd || a.g === Yd, "unknown index type."), null != b && "object" === typeof b || null != c && "object" === typeof c)
      throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
  }
  function ti(a) {
    if (a.ma && a.pa && a.ja && (!a.ja || "" === a.Lb))
      throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
  }
  function ui(a, b) {
    if (!0 === a.jc)
      throw Error(b + ": You can't combine multiple orderBy calls.");
  }
  g = Y.prototype;
  g.Gb = function() {
    w("Query.ref", 0, 0, arguments.length);
    return new T(this.k, this.path);
  };
  g.Cb = function(a, b, c, d) {
    w("Query.on", 2, 4, arguments.length);
    eg("Query.on", a, !1);
    z("Query.on", 2, b, !1);
    var e = vi("Query.on", c, d);
    if ("value" === a)
      ii(this.k, this, new gd(b, e.cancel || null, e.La || null));
    else {
      var f = {};
      f[a] = b;
      ii(this.k, this, new hd(f, e.cancel, e.La));
    }
    return b;
  };
  g.gc = function(a, b, c) {
    w("Query.off", 0, 3, arguments.length);
    eg("Query.off", a, !0);
    z("Query.off", 2, b, !0);
    kb("Query.off", 3, c);
    var d = null,
        e = null;
    "value" === a ? d = new gd(b || null, null, c || null) : a && (b && (e = {}, e[a] = b), d = new hd(e, null, c || null));
    e = this.k;
    d = ".info" === D(this.path) ? e.zd.hb(this, d) : e.L.hb(this, d);
    wb(e.da, this.path, d);
  };
  g.Cg = function(a, b) {
    function c(h) {
      f && (f = !1, e.gc(a, c), b.call(d.La, h));
    }
    w("Query.once", 2, 4, arguments.length);
    eg("Query.once", a, !1);
    z("Query.once", 2, b, !1);
    var d = vi("Query.once", arguments[2], arguments[3]),
        e = this,
        f = !0;
    this.Cb(a, c, function(b) {
      e.gc(a, c);
      d.cancel && d.cancel.call(d.La, b);
    });
  };
  g.De = function(a) {
    N("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");
    w("Query.limit", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limit: First argument must be a positive integer.");
    if (this.n.ja)
      throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");
    var b = this.n.De(a);
    ti(b);
    return new Y(this.k, this.path, b, this.jc);
  };
  g.Ee = function(a) {
    w("Query.limitToFirst", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limitToFirst: First argument must be a positive integer.");
    if (this.n.ja)
      throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new Y(this.k, this.path, this.n.Ee(a), this.jc);
  };
  g.Fe = function(a) {
    w("Query.limitToLast", 1, 1, arguments.length);
    if (!ga(a) || Math.floor(a) !== a || 0 >= a)
      throw Error("Query.limitToLast: First argument must be a positive integer.");
    if (this.n.ja)
      throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
    return new Y(this.k, this.path, this.n.Fe(a), this.jc);
  };
  g.Dg = function(a) {
    w("Query.orderByChild", 1, 1, arguments.length);
    if ("$key" === a)
      throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
    if ("$priority" === a)
      throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
    if ("$value" === a)
      throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
    gg("Query.orderByChild", a);
    ui(this, "Query.orderByChild");
    var b = new K(a);
    if (b.e())
      throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
    b = new Sd(b);
    b = be(this.n, b);
    si(b);
    return new Y(this.k, this.path, b, !0);
  };
  g.Eg = function() {
    w("Query.orderByKey", 0, 0, arguments.length);
    ui(this, "Query.orderByKey");
    var a = be(this.n, Od);
    si(a);
    return new Y(this.k, this.path, a, !0);
  };
  g.Fg = function() {
    w("Query.orderByPriority", 0, 0, arguments.length);
    ui(this, "Query.orderByPriority");
    var a = be(this.n, M);
    si(a);
    return new Y(this.k, this.path, a, !0);
  };
  g.Gg = function() {
    w("Query.orderByValue", 0, 0, arguments.length);
    ui(this, "Query.orderByValue");
    var a = be(this.n, Yd);
    si(a);
    return new Y(this.k, this.path, a, !0);
  };
  g.Xd = function(a, b) {
    w("Query.startAt", 0, 2, arguments.length);
    $f("Query.startAt", a, this.path, !0);
    fg("Query.startAt", b);
    var c = this.n.Xd(a, b);
    ti(c);
    si(c);
    if (this.n.ma)
      throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
    n(a) || (b = a = null);
    return new Y(this.k, this.path, c, this.jc);
  };
  g.qd = function(a, b) {
    w("Query.endAt", 0, 2, arguments.length);
    $f("Query.endAt", a, this.path, !0);
    fg("Query.endAt", b);
    var c = this.n.qd(a, b);
    ti(c);
    si(c);
    if (this.n.pa)
      throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
    return new Y(this.k, this.path, c, this.jc);
  };
  g.kg = function(a, b) {
    w("Query.equalTo", 1, 2, arguments.length);
    $f("Query.equalTo", a, this.path, !1);
    fg("Query.equalTo", b);
    if (this.n.ma)
      throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");
    if (this.n.pa)
      throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
    return this.Xd(a, b).qd(a, b);
  };
  g.toString = function() {
    w("Query.toString", 0, 0, arguments.length);
    for (var a = this.path,
        b = "",
        c = a.Z; c < a.o.length; c++)
      "" !== a.o[c] && (b += "/" + encodeURIComponent(String(a.o[c])));
    return this.k.toString() + (b || "/");
  };
  g.va = function() {
    var a = Sc(ce(this.n));
    return "{}" === a ? "default" : a;
  };
  function vi(a, b, c) {
    var d = {
      cancel: null,
      La: null
    };
    if (b && c)
      d.cancel = b, z(a, 3, d.cancel, !0), d.La = c, kb(a, 4, d.La);
    else if (b)
      if ("object" === typeof b && null !== b)
        d.La = b;
      else if ("function" === typeof b)
        d.cancel = b;
      else
        throw Error(y(a, 3, !0) + " must either be a cancel callback or a context object.");
    return d;
  }
  Y.prototype.ref = Y.prototype.Gb;
  Y.prototype.on = Y.prototype.Cb;
  Y.prototype.off = Y.prototype.gc;
  Y.prototype.once = Y.prototype.Cg;
  Y.prototype.limit = Y.prototype.De;
  Y.prototype.limitToFirst = Y.prototype.Ee;
  Y.prototype.limitToLast = Y.prototype.Fe;
  Y.prototype.orderByChild = Y.prototype.Dg;
  Y.prototype.orderByKey = Y.prototype.Eg;
  Y.prototype.orderByPriority = Y.prototype.Fg;
  Y.prototype.orderByValue = Y.prototype.Gg;
  Y.prototype.startAt = Y.prototype.Xd;
  Y.prototype.endAt = Y.prototype.qd;
  Y.prototype.equalTo = Y.prototype.kg;
  Y.prototype.toString = Y.prototype.toString;
  var Z = {};
  Z.uc = Kh;
  Z.DataConnection = Z.uc;
  Kh.prototype.Rg = function(a, b) {
    this.Ea("q", {p: a}, b);
  };
  Z.uc.prototype.simpleListen = Z.uc.prototype.Rg;
  Kh.prototype.jg = function(a, b) {
    this.Ea("echo", {d: a}, b);
  };
  Z.uc.prototype.echo = Z.uc.prototype.jg;
  Kh.prototype.interrupt = Kh.prototype.wb;
  Z.Uf = yh;
  Z.RealTimeConnection = Z.Uf;
  yh.prototype.sendRequest = yh.prototype.Ea;
  yh.prototype.close = yh.prototype.close;
  Z.rg = function(a) {
    var b = Kh.prototype.put;
    Kh.prototype.put = function(c, d, e, f) {
      n(f) && (f = a());
      b.call(this, c, d, e, f);
    };
    return function() {
      Kh.prototype.put = b;
    };
  };
  Z.hijackHash = Z.rg;
  Z.Tf = xc;
  Z.ConnectionTarget = Z.Tf;
  Z.va = function(a) {
    return a.va();
  };
  Z.queryIdentifier = Z.va;
  Z.tg = function(a) {
    return a.k.Qa.$;
  };
  Z.listens = Z.tg;
  Z.re = function(a) {
    a.re();
  };
  Z.forceRestClient = Z.re;
  function T(a, b) {
    var c,
        d,
        e;
    if (a instanceof Yh)
      c = a, d = b;
    else {
      w("new Firebase", 1, 2, arguments.length);
      d = Nc(arguments[0]);
      c = d.Tg;
      "firebase" === d.domain && Mc(d.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
      c && "undefined" != c || Mc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
      d.ib || "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && N("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
      c = new xc(d.host, d.ib, c, "ws" === d.scheme || "wss" === d.scheme);
      d = new K(d.kc);
      e = d.toString();
      var f;
      !(f = !p(c.host) || 0 === c.host.length || !Yf(c.fc)) && (f = 0 !== e.length) && (e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), f = !(p(e) && 0 !== e.length && !Wf.test(e)));
      if (f)
        throw Error(y("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
      if (b)
        if (b instanceof W)
          e = b;
        else if (p(b))
          e = W.sb(), c.Md = b;
        else
          throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
      else
        e = W.sb();
      f = c.toString();
      var h = v(e.nc, f);
      h || (h = new Yh(c, e.Rf), e.nc[f] = h);
      c = h;
    }
    Y.call(this, c, d, $d, !1);
  }
  ma(T, Y);
  var wi = T,
      xi = ["Firebase"],
      yi = aa;
  xi[0] in yi || !yi.execScript || yi.execScript("var " + xi[0]);
  for (var zi; xi.length && (zi = xi.shift()); )
    !xi.length && n(wi) ? yi[zi] = wi : yi = yi[zi] ? yi[zi] : yi[zi] = {};
  T.goOffline = function() {
    w("Firebase.goOffline", 0, 0, arguments.length);
    W.sb().wb();
  };
  T.goOnline = function() {
    w("Firebase.goOnline", 0, 0, arguments.length);
    W.sb().qc();
  };
  function Jc(a, b) {
    I(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently.");
    !0 === a ? ("undefined" !== typeof console && ("function" === typeof console.log ? zb = q(console.log, console) : "object" === typeof console.log && (zb = function(a) {
      console.log(a);
    })), b && wc.set("logging_enabled", !0)) : a ? zb = a : (zb = null, wc.remove("logging_enabled"));
  }
  T.enableLogging = Jc;
  T.ServerValue = {TIMESTAMP: {".sv": "timestamp"}};
  T.SDK_VERSION = fb;
  T.INTERNAL = V;
  T.Context = W;
  T.TEST_ACCESS = Z;
  T.prototype.name = function() {
    N("Firebase.name() being deprecated. Please use Firebase.key() instead.");
    w("Firebase.name", 0, 0, arguments.length);
    return this.key();
  };
  T.prototype.name = T.prototype.name;
  T.prototype.key = function() {
    w("Firebase.key", 0, 0, arguments.length);
    return this.path.e() ? null : Jd(this.path);
  };
  T.prototype.key = T.prototype.key;
  T.prototype.u = function(a) {
    w("Firebase.child", 1, 1, arguments.length);
    if (ga(a))
      a = String(a);
    else if (!(a instanceof K))
      if (null === D(this.path)) {
        var b = a;
        b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
        gg("Firebase.child", b);
      } else
        gg("Firebase.child", a);
    return new T(this.k, this.path.u(a));
  };
  T.prototype.child = T.prototype.u;
  T.prototype.parent = function() {
    w("Firebase.parent", 0, 0, arguments.length);
    var a = this.path.parent();
    return null === a ? null : new T(this.k, a);
  };
  T.prototype.parent = T.prototype.parent;
  T.prototype.root = function() {
    w("Firebase.ref", 0, 0, arguments.length);
    for (var a = this; null !== a.parent(); )
      a = a.parent();
    return a;
  };
  T.prototype.root = T.prototype.root;
  T.prototype.set = function(a, b) {
    w("Firebase.set", 1, 2, arguments.length);
    hg("Firebase.set", this.path);
    $f("Firebase.set", a, this.path, !1);
    z("Firebase.set", 2, b, !0);
    this.k.Ib(this.path, a, null, b || null);
  };
  T.prototype.set = T.prototype.set;
  T.prototype.update = function(a, b) {
    w("Firebase.update", 1, 2, arguments.length);
    hg("Firebase.update", this.path);
    if (ea(a)) {
      for (var c = {},
          d = 0; d < a.length; ++d)
        c["" + d] = a[d];
      a = c;
      N("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
    }
    cg("Firebase.update", a, this.path);
    z("Firebase.update", 2, b, !0);
    this.k.update(this.path, a, b || null);
  };
  T.prototype.update = T.prototype.update;
  T.prototype.Ib = function(a, b, c) {
    w("Firebase.setWithPriority", 2, 3, arguments.length);
    hg("Firebase.setWithPriority", this.path);
    $f("Firebase.setWithPriority", a, this.path, !1);
    dg("Firebase.setWithPriority", 2, b);
    z("Firebase.setWithPriority", 3, c, !0);
    if (".length" === this.key() || ".keys" === this.key())
      throw "Firebase.setWithPriority failed: " + this.key() + " is a read-only object.";
    this.k.Ib(this.path, a, b, c || null);
  };
  T.prototype.setWithPriority = T.prototype.Ib;
  T.prototype.remove = function(a) {
    w("Firebase.remove", 0, 1, arguments.length);
    hg("Firebase.remove", this.path);
    z("Firebase.remove", 1, a, !0);
    this.set(null, a);
  };
  T.prototype.remove = T.prototype.remove;
  T.prototype.transaction = function(a, b, c) {
    w("Firebase.transaction", 1, 3, arguments.length);
    hg("Firebase.transaction", this.path);
    z("Firebase.transaction", 1, a, !1);
    z("Firebase.transaction", 2, b, !0);
    if (n(c) && "boolean" != typeof c)
      throw Error(y("Firebase.transaction", 3, !0) + "must be a boolean.");
    if (".length" === this.key() || ".keys" === this.key())
      throw "Firebase.transaction failed: " + this.key() + " is a read-only object.";
    "undefined" === typeof c && (c = !0);
    ji(this.k, this.path, a, b || null, c);
  };
  T.prototype.transaction = T.prototype.transaction;
  T.prototype.Og = function(a, b) {
    w("Firebase.setPriority", 1, 2, arguments.length);
    hg("Firebase.setPriority", this.path);
    dg("Firebase.setPriority", 1, a);
    z("Firebase.setPriority", 2, b, !0);
    this.k.Ib(this.path.u(".priority"), a, null, b);
  };
  T.prototype.setPriority = T.prototype.Og;
  T.prototype.push = function(a, b) {
    w("Firebase.push", 0, 2, arguments.length);
    hg("Firebase.push", this.path);
    $f("Firebase.push", a, this.path, !0);
    z("Firebase.push", 2, b, !0);
    var c = $h(this.k),
        c = De(c),
        c = this.u(c);
    "undefined" !== typeof a && null !== a && c.set(a, b);
    return c;
  };
  T.prototype.push = T.prototype.push;
  T.prototype.fb = function() {
    hg("Firebase.onDisconnect", this.path);
    return new X(this.k, this.path);
  };
  T.prototype.onDisconnect = T.prototype.fb;
  T.prototype.M = function(a, b, c) {
    N("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");
    w("Firebase.auth", 1, 3, arguments.length);
    ig("Firebase.auth", a);
    z("Firebase.auth", 2, b, !0);
    z("Firebase.auth", 3, b, !0);
    Ug(this.k.M, a, {}, {remember: "none"}, b, c);
  };
  T.prototype.auth = T.prototype.M;
  T.prototype.de = function(a) {
    w("Firebase.unauth", 0, 1, arguments.length);
    z("Firebase.unauth", 1, a, !0);
    Vg(this.k.M, a);
  };
  T.prototype.unauth = T.prototype.de;
  T.prototype.te = function() {
    w("Firebase.getAuth", 0, 0, arguments.length);
    return this.k.M.te();
  };
  T.prototype.getAuth = T.prototype.te;
  T.prototype.vg = function(a, b) {
    w("Firebase.onAuth", 1, 2, arguments.length);
    z("Firebase.onAuth", 1, a, !1);
    kb("Firebase.onAuth", 2, b);
    this.k.M.Cb("auth_status", a, b);
  };
  T.prototype.onAuth = T.prototype.vg;
  T.prototype.ug = function(a, b) {
    w("Firebase.offAuth", 1, 2, arguments.length);
    z("Firebase.offAuth", 1, a, !1);
    kb("Firebase.offAuth", 2, b);
    this.k.M.gc("auth_status", a, b);
  };
  T.prototype.offAuth = T.prototype.ug;
  T.prototype.Yf = function(a, b, c) {
    w("Firebase.authWithCustomToken", 2, 3, arguments.length);
    ig("Firebase.authWithCustomToken", a);
    z("Firebase.authWithCustomToken", 2, b, !1);
    lg("Firebase.authWithCustomToken", 3, c, !0);
    Ug(this.k.M, a, {}, c || {}, b);
  };
  T.prototype.authWithCustomToken = T.prototype.Yf;
  T.prototype.Zf = function(a, b, c) {
    w("Firebase.authWithOAuthPopup", 2, 3, arguments.length);
    kg("Firebase.authWithOAuthPopup", a);
    z("Firebase.authWithOAuthPopup", 2, b, !1);
    lg("Firebase.authWithOAuthPopup", 3, c, !0);
    Zg(this.k.M, a, c, b);
  };
  T.prototype.authWithOAuthPopup = T.prototype.Zf;
  T.prototype.$f = function(a, b, c) {
    w("Firebase.authWithOAuthRedirect", 2, 3, arguments.length);
    kg("Firebase.authWithOAuthRedirect", a);
    z("Firebase.authWithOAuthRedirect", 2, b, !1);
    lg("Firebase.authWithOAuthRedirect", 3, c, !0);
    var d = this.k.M;
    Xg(d);
    var e = [Gg],
        f = tg(c);
    "anonymous" === a || "firebase" === a ? O(b, U("TRANSPORT_UNAVAILABLE")) : (wc.set("redirect_client_options", f.ld), Yg(d, e, "/auth/" + a, f, b));
  };
  T.prototype.authWithOAuthRedirect = T.prototype.$f;
  T.prototype.ag = function(a, b, c, d) {
    w("Firebase.authWithOAuthToken", 3, 4, arguments.length);
    kg("Firebase.authWithOAuthToken", a);
    z("Firebase.authWithOAuthToken", 3, c, !1);
    lg("Firebase.authWithOAuthToken", 4, d, !0);
    p(b) ? (jg("Firebase.authWithOAuthToken", 2, b), Wg(this.k.M, a + "/token", {access_token: b}, d, c)) : (lg("Firebase.authWithOAuthToken", 2, b, !1), Wg(this.k.M, a + "/token", b, d, c));
  };
  T.prototype.authWithOAuthToken = T.prototype.ag;
  T.prototype.Xf = function(a, b) {
    w("Firebase.authAnonymously", 1, 2, arguments.length);
    z("Firebase.authAnonymously", 1, a, !1);
    lg("Firebase.authAnonymously", 2, b, !0);
    Wg(this.k.M, "anonymous", {}, b, a);
  };
  T.prototype.authAnonymously = T.prototype.Xf;
  T.prototype.bg = function(a, b, c) {
    w("Firebase.authWithPassword", 2, 3, arguments.length);
    lg("Firebase.authWithPassword", 1, a, !1);
    mg("Firebase.authWithPassword", a, "email");
    mg("Firebase.authWithPassword", a, "password");
    z("Firebase.authWithPassword", 2, b, !1);
    lg("Firebase.authWithPassword", 3, c, !0);
    Wg(this.k.M, "password", a, c, b);
  };
  T.prototype.authWithPassword = T.prototype.bg;
  T.prototype.oe = function(a, b) {
    w("Firebase.createUser", 2, 2, arguments.length);
    lg("Firebase.createUser", 1, a, !1);
    mg("Firebase.createUser", a, "email");
    mg("Firebase.createUser", a, "password");
    z("Firebase.createUser", 2, b, !1);
    this.k.M.oe(a, b);
  };
  T.prototype.createUser = T.prototype.oe;
  T.prototype.Qe = function(a, b) {
    w("Firebase.removeUser", 2, 2, arguments.length);
    lg("Firebase.removeUser", 1, a, !1);
    mg("Firebase.removeUser", a, "email");
    mg("Firebase.removeUser", a, "password");
    z("Firebase.removeUser", 2, b, !1);
    this.k.M.Qe(a, b);
  };
  T.prototype.removeUser = T.prototype.Qe;
  T.prototype.le = function(a, b) {
    w("Firebase.changePassword", 2, 2, arguments.length);
    lg("Firebase.changePassword", 1, a, !1);
    mg("Firebase.changePassword", a, "email");
    mg("Firebase.changePassword", a, "oldPassword");
    mg("Firebase.changePassword", a, "newPassword");
    z("Firebase.changePassword", 2, b, !1);
    this.k.M.le(a, b);
  };
  T.prototype.changePassword = T.prototype.le;
  T.prototype.ke = function(a, b) {
    w("Firebase.changeEmail", 2, 2, arguments.length);
    lg("Firebase.changeEmail", 1, a, !1);
    mg("Firebase.changeEmail", a, "oldEmail");
    mg("Firebase.changeEmail", a, "newEmail");
    mg("Firebase.changeEmail", a, "password");
    z("Firebase.changeEmail", 2, b, !1);
    this.k.M.ke(a, b);
  };
  T.prototype.changeEmail = T.prototype.ke;
  T.prototype.Se = function(a, b) {
    w("Firebase.resetPassword", 2, 2, arguments.length);
    lg("Firebase.resetPassword", 1, a, !1);
    mg("Firebase.resetPassword", a, "email");
    z("Firebase.resetPassword", 2, b, !1);
    this.k.M.Se(a, b);
  };
  T.prototype.resetPassword = T.prototype.Se;
  module.exports = T;
})(require('buffer').Buffer, require('process'));
