var C, Xr = function(e) {
  function t(o) {
    return 48 > o ? o === 36 : 58 > o ? !0 : 65 > o ? !1 : 91 > o ? !0 : 97 > o ? o === 95 : 123 > o ? !0 : 170 <= o && Br.test(String.fromCharCode(o));
  }
  function n(o) {
    return 65 > o ? o === 36 : 91 > o ? !0 : 97 > o ? o === 95 : 123 > o ? !0 : 170 <= o && vr.test(String.fromCharCode(o));
  }
  function r(o, s) {
    for (var l = g, p = 1, w = 0; ; ) {
      He.lastIndex = w;
      var N = He.exec(l);
      if (N && N.index < o)
        ++p, w = N.index + N[0].length;
      else
        break;
    }
    throw l = {
      line: p,
      ab: o - w
    }, s += " (" + l.line + ":" + l.ab + ")", s = new SyntaxError(s), s.j = o, s.X = l, s.o = c, s;
  }
  function i(o) {
    o = o.split(" ");
    for (var s = /* @__PURE__ */ Object.create(null), l = 0; l < o.length; l++)
      s[o[l]] = !0;
    return function(p) {
      return s[p] || !1;
    };
  }
  function a() {
    this.line = oe, this.ab = c - J;
  }
  function u(o, s) {
    ue = c, x.C && (it = new a()), d = o, k(), X = s, xe = o.m;
  }
  function h() {
    for (var o = c, s = x.va && x.C && new a(), l = g.charCodeAt(c += 2); c < ae && l !== 10 && l !== 13 && l !== 8232 && l !== 8233; )
      ++c, l = g.charCodeAt(c);
    x.va && x.va(!1, g.slice(o + 2, c), o, c, s, x.C && new a());
  }
  function k() {
    for (; c < ae; ) {
      var o = g.charCodeAt(c);
      if (o === 32)
        ++c;
      else if (o === 13)
        ++c, o = g.charCodeAt(c), o === 10 && ++c, x.C && (++oe, J = c);
      else if (o === 10 || o === 8232 || o === 8233)
        ++c, x.C && (++oe, J = c);
      else if (8 < o && 14 > o)
        ++c;
      else if (o === 47)
        if (o = g.charCodeAt(c + 1), o === 42) {
          o = void 0;
          var s = x.va && x.C && new a(), l = c, p = g.indexOf("*/", c += 2);
          if (p === -1 && r(c - 2, "Unterminated comment"), c = p + 2, x.C)
            for (He.lastIndex = l; (o = He.exec(g)) && o.index < c; )
              ++oe, J = o.index + o[0].length;
          x.va && x.va(!0, g.slice(l + 2, p), l, c, s, x.C && new a());
        } else if (o === 47)
          h();
        else
          break;
      else if (o === 160)
        ++c;
      else if (5760 <= o && Lr.test(String.fromCharCode(o)))
        ++c;
      else
        break;
    }
  }
  function G(o) {
    switch (o) {
      case 46:
        o = g.charCodeAt(c + 1), 48 <= o && 57 >= o ? Ut(!0) : (++c, u(ar));
        return;
      case 40:
        return ++c, u(K);
      case 41:
        return ++c, u(W);
      case 59:
        return ++c, u($);
      case 44:
        return ++c, u(re);
      case 91:
        return ++c, u(gt);
      case 93:
        return ++c, u(vt);
      case 123:
        return ++c, u(ke);
      case 125:
        return ++c, u(ce);
      case 58:
        return ++c, u(Ce);
      case 63:
        return ++c, u(ur);
      case 48:
        if (o = g.charCodeAt(c + 1), o === 120 || o === 88) {
          c += 2, o = me(16), o === null && r(M + 2, "Expected hexadecimal number"), n(g.charCodeAt(c)) && r(c, "Identifier directly after number"), u(Se, o);
          return;
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return Ut(!1);
      case 34:
      case 39:
        c++;
        for (var s = ""; ; ) {
          c >= ae && r(M, "Unterminated string constant");
          var l = g.charCodeAt(c);
          if (l === o) {
            ++c, u(Ge, s);
            break;
          }
          if (l === 92) {
            l = g.charCodeAt(++c);
            var p = /^[0-7]+/.exec(g.slice(c, c + 3));
            for (p && (p = p[0]); p && 255 < parseInt(p, 8); )
              p = p.slice(0, -1);
            if (p === "0" && (p = null), ++c, p)
              B && r(c - 2, "Octal literal in strict mode"), s += String.fromCharCode(parseInt(p, 8)), c += p.length - 1;
            else
              switch (l) {
                case 110:
                  s += `
`;
                  break;
                case 114:
                  s += "\r";
                  break;
                case 120:
                  s += String.fromCharCode(_e(2));
                  break;
                case 117:
                  s += String.fromCharCode(_e(4));
                  break;
                case 85:
                  s += String.fromCharCode(_e(8));
                  break;
                case 116:
                  s += "	";
                  break;
                case 98:
                  s += "\b";
                  break;
                case 118:
                  s += "\v";
                  break;
                case 102:
                  s += "\f";
                  break;
                case 48:
                  s += "\0";
                  break;
                case 13:
                  g.charCodeAt(c) === 10 && ++c;
                case 10:
                  x.C && (J = c, ++oe);
                  break;
                default:
                  s += String.fromCharCode(l);
              }
          } else
            l !== 13 && l !== 10 && l !== 8232 && l !== 8233 || r(M, "Unterminated string constant"), s += String.fromCharCode(l), ++c;
        }
        return;
      case 47:
        o = g.charCodeAt(c + 1), xe ? (++c, Pt()) : o === 61 ? A(se, 2) : A(lr, 1);
        return;
      case 37:
      case 42:
        g.charCodeAt(c + 1) === 61 ? A(se, 2) : A(br, 1);
        return;
      case 124:
      case 38:
        s = g.charCodeAt(c + 1), s === o ? A(o === 124 ? fr : hr, 2) : s === 61 ? A(se, 2) : A(o === 124 ? Tr : Nr, 1);
        return;
      case 94:
        g.charCodeAt(c + 1) === 61 ? A(se, 2) : A(Mr, 1);
        return;
      case 43:
      case 45:
        s = g.charCodeAt(c + 1), s === o ? s === 45 && g.charCodeAt(c + 2) === 62 && We.test(g.slice(te, c)) ? (c += 3, h(), k(), D()) : A(Ir, 2) : s === 61 ? A(se, 2) : A(Dr, 1);
        return;
      case 60:
      case 62:
        s = g.charCodeAt(c + 1), l = 1, s === o ? (l = o === 62 && g.charCodeAt(c + 2) === 62 ? 3 : 2, g.charCodeAt(c + l) === 61 ? A(se, l + 1) : A(Ur, l)) : s === 33 && o === 60 && g.charCodeAt(c + 2) === 45 && g.charCodeAt(c + 3) === 45 ? (c += 4, h(), k(), D()) : (s === 61 && (l = g.charCodeAt(c + 2) === 61 ? 3 : 2), A(Pr, l));
        return;
      case 61:
      case 33:
        g.charCodeAt(c + 1) === 61 ? A(Rr, g.charCodeAt(c + 2) === 61 ? 3 : 2) : A(o === 61 ? cr : pr, 1);
        return;
      case 126:
        return A(pr, 1);
    }
    return !1;
  }
  function D(o) {
    if (o ? c = M + 1 : M = c, x.C && (nt = new a()), o)
      return Pt();
    if (c >= ae)
      return u(at);
    if (o = g.charCodeAt(c), n(o) || o === 92)
      return bt();
    if (G(o) === !1) {
      if (o = String.fromCharCode(o), o === "\\" || vr.test(o))
        return bt();
      r(c, "Unexpected character '" + o + "'");
    }
  }
  function A(o, s) {
    var l = g.slice(c, c + s);
    c += s, u(o, l);
  }
  function Pt() {
    for (var o, s, l = c; ; ) {
      c >= ae && r(l, "Unterminated regexp");
      var p = g.charAt(c);
      if (We.test(p) && r(l, "Unterminated regexp"), o)
        o = !1;
      else {
        if (p === "[")
          s = !0;
        else if (p === "]" && s)
          s = !1;
        else if (p === "/" && !s)
          break;
        o = p === "\\";
      }
      ++c;
    }
    o = g.slice(l, c), ++c, (s = Dt()) && !/^[gmi]*$/.test(s) && r(l, "Invalid regexp flag");
    try {
      var w = new RegExp(o, s);
    } catch (N) {
      throw N instanceof SyntaxError && r(l, N.message), N;
    }
    u(Xt, w);
  }
  function me(o, s) {
    for (var l = c, p = 0, w = s === void 0 ? 1 / 0 : s, N = 0; N < w; ++N) {
      var _ = g.charCodeAt(c);
      if (_ = 97 <= _ ? _ - 97 + 10 : 65 <= _ ? _ - 65 + 10 : 48 <= _ && 57 >= _ ? _ - 48 : 1 / 0, _ >= o)
        break;
      ++c, p = p * o + _;
    }
    return c === l || s !== void 0 && c - l !== s ? null : p;
  }
  function Ut(o) {
    var s = c, l = !1, p = g.charCodeAt(c) === 48;
    o || me(10) !== null || r(s, "Invalid number"), g.charCodeAt(c) === 46 && (++c, me(10), l = !0), o = g.charCodeAt(c), (o === 69 || o === 101) && (o = g.charCodeAt(++c), o !== 43 && o !== 45 || ++c, me(10) === null && r(s, "Invalid number"), l = !0), n(g.charCodeAt(c)) && r(c, "Identifier directly after number"), o = g.slice(s, c);
    var w;
    l ? w = parseFloat(o) : p && o.length !== 1 ? /[89]/.test(o) || B ? r(s, "Invalid number") : w = parseInt(o, 8) : w = parseInt(o, 10), u(Se, w);
  }
  function _e(o) {
    return o = me(16, o), o === null && r(M, "Bad character escape sequence"), o;
  }
  function Dt() {
    pe = !1;
    for (var o, s = !0, l = c; ; ) {
      var p = g.charCodeAt(c);
      if (t(p))
        pe && (o += g.charAt(c)), ++c;
      else if (p === 92) {
        pe || (o = g.slice(l, c)), pe = !0, g.charCodeAt(++c) !== 117 && r(c, "Expecting Unicode escape sequence \\uXXXX"), ++c, p = _e(4);
        var w = String.fromCharCode(p);
        w || r(c - 1, "Invalid Unicode escape"), (s ? n(p) : t(p)) || r(c - 4, "Invalid Unicode escape"), o += w;
      } else
        break;
      s = !1;
    }
    return pe ? o : g.slice(l, c);
  }
  function bt() {
    var o = Dt(), s = le;
    !pe && Fr(o) && (s = Ar[o]), u(s, o);
  }
  function S() {
    ot = M, te = ue, st = it, D();
  }
  function Ke(o) {
    if (B = o, c = M, x.C)
      for (; c < J; )
        J = g.lastIndexOf(`
`, J - 2) + 1, --oe;
    k(), D();
  }
  function _t() {
    this.type = null, this.start = M, this.end = null;
  }
  function Ft() {
    this.start = nt, this.end = null, rt && (this.source = rt);
  }
  function P() {
    var o = new _t();
    return x.C && (o.X = new Ft()), x.vb && (o.sourceFile = x.vb), x.Xa && (o.j = [M, 0]), o;
  }
  function ee(o) {
    var s = new _t();
    return s.start = o.start, x.C && (s.X = new Ft(), s.X.start = o.X.start), x.Xa && (s.j = [o.j[0], 0]), s;
  }
  function E(o, s) {
    return o.type = s, o.end = te, x.C && (o.X.end = st), x.Xa && (o.j[1] = te), o;
  }
  function $e(o) {
    return o.type === "ExpressionStatement" && o.la.type === "Literal" && o.la.value === "use strict";
  }
  function O(o) {
    return d === o ? (S(), !0) : !1;
  }
  function Fe() {
    return !x.fc && (d === at || d === ce || We.test(g.slice(te, M)));
  }
  function ie() {
    O($) || Fe() || H();
  }
  function I(o) {
    d === o ? S() : H();
  }
  function H() {
    r(M, "Unexpected token");
  }
  function Le(o) {
    o.type !== "Identifier" && o.type !== "MemberExpression" && r(o.start, "Assigning to rvalue"), B && o.type === "Identifier" && Ve(o.name) && r(o.start, "Assigning to " + o.name + " in strict mode");
  }
  function V() {
    (d === lr || d === se && X === "/=") && D(!0);
    var o = d, s = P();
    switch (o) {
      case ut:
      case Wt:
        S();
        var l = o === ut;
        O($) || Fe() ? s.label = null : d !== le ? H() : (s.label = Y(), ie());
        for (var p = 0; p < T.length; ++p) {
          var w = T[p];
          if ((s.label === null || w.name === s.label.name) && (w.kind !== null && (l || w.kind === "loop") || s.label && l))
            break;
        }
        return p === T.length && r(s.start, "Unsyntactic " + o.l), E(s, l ? "BreakStatement" : "ContinueStatement");
      case Ht:
        return S(), ie(), E(s, "DebuggerStatement");
      case Jt:
        return S(), T.push(yt), s.body = V(), T.pop(), I(ht), s.test = de(), ie(), E(s, "DoWhileStatement");
      case Zt:
        return S(), T.push(yt), I(K), d === $ ? Ze(s, null) : d === ft ? (o = P(), S(), Bt(o, !0), E(o, "VariableDeclaration"), o.fa.length === 1 && O(Xe) ? Lt(s, o) : Ze(s, o)) : (o = b(!1, !0), O(Xe) ? (Le(o), Lt(s, o)) : Ze(s, o));
      case ct:
        return S(), et(s, !0);
      case zt:
        return S(), s.test = de(), s.da = V(), s.alternate = O(Kt) ? V() : null, E(s, "IfStatement");
      case Qt:
        return je || x.Ib || r(M, "'return' outside of function"), S(), O($) || Fe() ? s.K = null : (s.K = b(), ie()), E(s, "ReturnStatement");
      case pt:
        for (S(), s.Qb = de(), s.tb = [], I(ke), T.push(Gr); d !== ce; )
          d === lt || d === Yt ? (o = d === lt, p && E(p, "SwitchCase"), s.tb.push(p = P()), p.da = [], S(), o ? p.test = b() : (l && r(ot, "Multiple default clauses"), l = !0, p.test = null), I(Ce)) : (p || H(), p.da.push(V()));
        return p && E(p, "SwitchCase"), S(), T.pop(), E(s, "SwitchStatement");
      case qt:
        return S(), We.test(g.slice(te, M)) && r(te, "Illegal newline after throw"), s.K = b(), ie(), E(s, "ThrowStatement");
      case er:
        return S(), s.block = we(), s.Ea = null, d === Vt && (o = P(), S(), I(K), o.Ua = Y(), B && Ve(o.Ua.name) && r(o.Ua.start, "Binding " + o.Ua.name + " in strict mode"), I(W), o.body = we(), s.Ea = E(o, "CatchClause")), s.fb = O($t) ? we() : null, s.Ea || s.fb || r(s.start, "Missing catch or finally clause"), E(s, "TryStatement");
      case ft:
        return S(), Bt(s), ie(), E(s, "VariableDeclaration");
      case ht:
        return S(), s.test = de(), T.push(yt), s.body = V(), T.pop(), E(s, "WhileStatement");
      case tr:
        return B && r(M, "'with' in strict mode"), S(), s.object = de(), s.body = V(), E(s, "WithStatement");
      case ke:
        return we();
      case $:
        return S(), E(s, "EmptyStatement");
      default:
        if (l = X, w = b(), o === le && w.type === "Identifier" && O(Ce)) {
          for (p = 0; p < T.length; ++p)
            T[p].name === l && r(w.start, "Label '" + l + "' is already declared");
          return T.push({
            name: l,
            kind: d.W ? "loop" : d === pt ? "switch" : null
          }), s.body = V(), T.pop(), s.label = w, E(s, "LabeledStatement");
        }
        return s.la = w, ie(), E(s, "ExpressionStatement");
    }
  }
  function de() {
    I(K);
    var o = b();
    return I(W), o;
  }
  function we(o) {
    var s = P(), l = !0, p = !1;
    for (s.body = [], I(ke); !O(ce); ) {
      var w = V();
      if (s.body.push(w), l && o && $e(w)) {
        var N = p;
        Ke(p = !0);
      }
      l = !1;
    }
    return p && !N && Ke(!1), E(s, "BlockStatement");
  }
  function Ze(o, s) {
    return o.ua = s, I($), o.test = d === $ ? null : b(), I($), o.update = d === W ? null : b(), I(W), o.body = V(), T.pop(), E(o, "ForStatement");
  }
  function Lt(o, s) {
    return o.left = s, o.right = b(), I(W), o.body = V(), T.pop(), E(o, "ForInStatement");
  }
  function Bt(o, s) {
    for (o.fa = [], o.kind = "var"; ; ) {
      var l = P();
      if (l.id = Y(), B && Ve(l.id.name) && r(l.id.start, "Binding " + l.id.name + " in strict mode"), l.ua = O(cr) ? b(!0, s) : null, o.fa.push(E(l, "VariableDeclarator")), !O(re))
        break;
    }
  }
  function b(o, s) {
    var l = ze(s);
    if (!o && d === re) {
      for (o = ee(l), o.xb = [l]; O(re); )
        o.xb.push(ze(s));
      return E(o, "SequenceExpression");
    }
    return l;
  }
  function ze(o) {
    var s = Qe(qe(), -1, o);
    if (O(ur)) {
      var l = ee(s);
      l.test = s, l.da = b(!0), I(Ce), l.alternate = b(!0, o), s = E(l, "ConditionalExpression");
    }
    return d.Cb ? (l = ee(s), l.operator = X, l.left = s, S(), l.right = ze(o), Le(s), E(l, "AssignmentExpression")) : s;
  }
  function Qe(o, s, l) {
    var p = d.L;
    if (p !== null && (!l || d !== Xe) && p > s) {
      var w = ee(o);
      return w.left = o, w.operator = X, o = d, S(), w.right = Qe(qe(), p, l), p = E(w, o === fr || o === hr ? "LogicalExpression" : "BinaryExpression"), Qe(p, s, l);
    }
    return o;
  }
  function qe() {
    if (d.prefix) {
      var o = P(), s = d.$b;
      return o.operator = X, xe = o.prefix = !0, S(), o.K = qe(), s ? Le(o.K) : B && o.operator === "delete" && o.K.type === "Identifier" && r(o.start, "Deleting local variable in strict mode"), E(o, s ? "UpdateExpression" : "UnaryExpression");
    }
    for (s = Ee(Be()); d.cc && !Fe(); )
      o = ee(s), o.operator = X, o.prefix = !1, o.K = s, Le(s), S(), s = E(o, "UpdateExpression");
    return s;
  }
  function Ee(o, s) {
    if (O(ar)) {
      var l = ee(o);
      return l.object = o, l.Wa = Y(!0), l.bb = !1, Ee(E(l, "MemberExpression"), s);
    }
    return O(gt) ? (l = ee(o), l.object = o, l.Wa = b(), l.bb = !0, I(vt), Ee(E(l, "MemberExpression"), s)) : !s && O(K) ? (l = ee(o), l.callee = o, l.arguments = tt(W, !1), Ee(E(l, "CallExpression"), s)) : o;
  }
  function Be() {
    switch (d) {
      case nr:
        var o = P();
        return S(), E(o, "ThisExpression");
      case le:
        return Y();
      case Se:
      case Ge:
      case Xt:
        return o = P(), o.value = X, o.raw = g.slice(M, ue), S(), E(o, "Literal");
      case ir:
      case or:
      case sr:
        return o = P(), o.value = d.$a, o.raw = d.l, S(), E(o, "Literal");
      case K:
        o = nt;
        var s = M;
        S();
        var l = b();
        return l.start = s, l.end = ue, x.C && (l.X.start = o, l.X.end = it), x.Xa && (l.j = [s, ue]), I(W), l;
      case gt:
        return o = P(), S(), o.elements = tt(vt, !0, !0), E(o, "ArrayExpression");
      case ke:
        for (o = P(), s = !0, l = !1, o.h = [], S(); !O(ce); ) {
          if (s)
            s = !1;
          else if (I(re), x.sb && O(ce))
            break;
          var p = {
            key: d === Se || d === Ge ? Be() : Y(!0)
          }, w = !1;
          if (O(Ce)) {
            p.value = b(!0);
            var N = p.kind = "init";
          } else
            p.key.type !== "Identifier" || p.key.name !== "get" && p.key.name !== "set" ? H() : (w = l = !0, N = p.kind = p.key.name, p.key = d === Se || d === Ge ? Be() : Y(!0), d !== K && H(), p.value = et(P(), !1));
          if (p.key.type === "Identifier" && (B || l))
            for (var _ = 0; _ < o.h.length; ++_) {
              var fe = o.h[_];
              if (fe.key.name === p.key.name) {
                var mt = N === fe.kind || w && fe.kind === "init" || N === "init" && (fe.kind === "get" || fe.kind === "set");
                mt && !B && N === "init" && fe.kind === "init" && (mt = !1), mt && r(p.key.start, "Redefinition of property");
              }
            }
          o.h.push(p);
        }
        return E(o, "ObjectExpression");
      case ct:
        return o = P(), S(), et(o, !1);
      case rr:
        return o = P(), S(), o.callee = Ee(Be(), !0), o.arguments = O(K) ? tt(W, !1) : Or, E(o, "NewExpression");
    }
    H();
  }
  function et(o, s) {
    d === le ? o.id = Y() : s ? H() : o.id = null, o.oa = [];
    var l = !0;
    for (I(K); !O(W); )
      l ? l = !1 : I(re), o.oa.push(Y());
    l = je;
    var p = T;
    if (je = !0, T = [], o.body = we(!0), je = l, T = p, B || o.body.body.length && $e(o.body.body[0])) {
      for (l = o.id ? -1 : 0; l < o.oa.length; ++l)
        if (p = 0 > l ? o.id : o.oa[l], (gr(p.name) || Ve(p.name)) && r(p.start, "Defining '" + p.name + "' in strict mode"), 0 <= l)
          for (var w = 0; w < l; ++w)
            p.name === o.oa[w].name && r(p.start, "Argument name clash in strict mode");
    }
    return E(o, s ? "FunctionDeclaration" : "FunctionExpression");
  }
  function tt(o, s, l) {
    for (var p = [], w = !0; !O(o); ) {
      if (w)
        w = !1;
      else if (I(re), s && x.sb && O(o))
        break;
      p.push(l && d === re ? null : b(!0));
    }
    return p;
  }
  function Y(o) {
    var s = P();
    return o && x.yb === "everywhere" && (o = !1), d === le ? (!o && (x.yb && _r(X) || B && gr(X)) && g.slice(M, ue).indexOf("\\") === -1 && r(M, "The keyword '" + X + "' is reserved"), s.name = X) : o && d.l ? s.name = d.l : H(), xe = !1, S(), E(s, "Identifier");
  }
  e.version = "0.5.0";
  var x, g = "", ae, rt;
  e.parse = function(o, s) {
    g = String(o), ae = g.length, x = s || {};
    for (var l in Gt)
      Object.prototype.hasOwnProperty.call(x, l) || (x[l] = Gt[l]);
    for (rt = x.sourceFile, oe = 1, c = J = 0, xe = !0, k(), l = x.dc, ot = te = c, x.C && (st = new a()), je = B = !1, T = [], D(), o = l || P(), s = !0, l || (o.body = []); d !== at; )
      l = V(), o.body.push(l), s && $e(l) && Ke(!0), s = !1;
    return E(o, "Program");
  };
  var Gt = {
    fc: !1,
    sb: !0,
    yb: !1,
    Ib: !1,
    C: !1,
    va: null,
    Xa: !1,
    dc: null,
    sourceFile: null,
    vb: null
  }, c = 0, M = 0, ue = 0, nt, it, d, X, xe, oe, J, ot = 0, te = 0, st, je, T, B, Or = [], Se = {
    type: "num"
  }, Xt = {
    type: "regexp"
  }, Ge = {
    type: "string"
  }, le = {
    type: "name"
  }, at = {
    type: "eof"
  }, ut = {
    l: "break"
  }, lt = {
    l: "case",
    m: !0
  }, Vt = {
    l: "catch"
  }, Wt = {
    l: "continue"
  }, Ht = {
    l: "debugger"
  }, Yt = {
    l: "default"
  }, Jt = {
    l: "do",
    W: !0
  }, Kt = {
    l: "else",
    m: !0
  }, $t = {
    l: "finally"
  }, Zt = {
    l: "for",
    W: !0
  }, ct = {
    l: "function"
  }, zt = {
    l: "if"
  }, Qt = {
    l: "return",
    m: !0
  }, pt = {
    l: "switch"
  }, qt = {
    l: "throw",
    m: !0
  }, er = {
    l: "try"
  }, ft = {
    l: "var"
  }, ht = {
    l: "while",
    W: !0
  }, tr = {
    l: "with"
  }, rr = {
    l: "new",
    m: !0
  }, nr = {
    l: "this"
  }, ir = {
    l: "null",
    $a: null
  }, or = {
    l: "true",
    $a: !0
  }, sr = {
    l: "false",
    $a: !1
  }, Xe = {
    l: "in",
    L: 7,
    m: !0
  }, Ar = {
    break: ut,
    case: lt,
    catch: Vt,
    continue: Wt,
    debugger: Ht,
    default: Yt,
    do: Jt,
    else: Kt,
    finally: $t,
    for: Zt,
    function: ct,
    if: zt,
    return: Qt,
    switch: pt,
    throw: qt,
    try: er,
    var: ft,
    while: ht,
    with: tr,
    null: ir,
    true: or,
    false: sr,
    new: rr,
    in: Xe,
    instanceof: {
      l: "instanceof",
      L: 7,
      m: !0
    },
    this: nr,
    typeof: {
      l: "typeof",
      prefix: !0,
      m: !0
    },
    void: {
      l: "void",
      prefix: !0,
      m: !0
    },
    delete: {
      l: "delete",
      prefix: !0,
      m: !0
    }
  }, gt = {
    type: "[",
    m: !0
  }, vt = {
    type: "]"
  }, ke = {
    type: "{",
    m: !0
  }, ce = {
    type: "}"
  }, K = {
    type: "(",
    m: !0
  }, W = {
    type: ")"
  }, re = {
    type: ",",
    m: !0
  }, $ = {
    type: ";",
    m: !0
  }, Ce = {
    type: ":",
    m: !0
  }, ar = {
    type: "."
  }, ur = {
    type: "?",
    m: !0
  }, lr = {
    L: 10,
    m: !0
  }, cr = {
    Cb: !0,
    m: !0
  }, se = {
    Cb: !0,
    m: !0
  }, Ir = {
    cc: !0,
    prefix: !0,
    $b: !0
  }, pr = {
    prefix: !0,
    m: !0
  }, fr = {
    L: 1,
    m: !0
  }, hr = {
    L: 2,
    m: !0
  }, Tr = {
    L: 3,
    m: !0
  }, Mr = {
    L: 4,
    m: !0
  }, Nr = {
    L: 5,
    m: !0
  }, Rr = {
    L: 6,
    m: !0
  }, Pr = {
    L: 7,
    m: !0
  }, Ur = {
    L: 8,
    m: !0
  }, Dr = {
    L: 9,
    prefix: !0,
    m: !0
  }, br = {
    L: 10,
    m: !0
  }, _r = i("class enum extends super const export import"), gr = i("implements interface let package private protected public static yield"), Ve = i("eval arguments"), Fr = i("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), Lr = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, vr = RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"), Br = RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"), We = /[\n\r\u2028\u2029]/, He = /\r\n|[\n\r\u2028\u2029]/g, pe, yt = {
    kind: "loop"
  }, Gr = {
    kind: "switch"
  };
}, wt = wt = typeof globalThis > "u" ? void 0 : globalThis;
Xr(wt.j || (wt.j = {}));
function f(e, t) {
  typeof e == "string" && (e = ge(e, "code"));
  var n = e.constructor;
  this.ya = function() {
    return new n({
      options: {}
    });
  };
  var r = this.ya(), i;
  for (i in e)
    r[i] = i === "body" ? e[i].slice() : e[i];
  this.ra = r, this.ca = [], this.qb = t, this.za = !1, this.ba = [], this.Ya = 0, this.rb = /* @__PURE__ */ Object.create(null), e = /^step([A-Z]\w*)$/;
  var a, u;
  for (u in this)
    typeof this[u] == "function" && (a = u.match(e)) && (this.rb[a[1]] = this[u].bind(this));
  this.N = xt(this, this.ra, null), this.Na = this.N.object, this.ra = ge(this.ba.join(`
`), "polyfills"), this.ba = void 0, Ye(this.ra), a = new y(this.ra, this.N), a.done = !1, this.o = [a], this.Eb(), this.value = void 0, this.ra = r, a = new y(this.ra, this.N), a.done = !1, this.o.length = 0, this.o[0] = a;
}
var yr = {
  C: !0,
  kc: 5
}, jt = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, v = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, L = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, Oe = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, mr = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, xr = {
  STEP_ERROR: !0
}, ye = {
  SCOPE_REFERENCE: !0
}, Pe = {
  VALUE_IN_DESCRIPTOR: !0
}, he = {
  REGEXP_TIMEOUT: !0
}, dr = [], z = null, Ne = null, ne = typeof globalThis > "u" ? void 0 : globalThis, Vr = ["onmessage = function(e) {", "var result;", "var data = e.data;", "switch (data[0]) {", "case 'split':", "result = data[1].split(data[2], data[3]);", "break;", "case 'match':", "result = data[1].match(data[2]);", "break;", "case 'search':", "result = data[1].search(data[2]);", "break;", "case 'replace':", "result = data[1].replace(data[2], data[3]);", "break;", "case 'exec':", "var regexp = data[1];", "regexp.lastIndex = data[2];", "result = [regexp.exec(data[3]), data[1].lastIndex];", "break;", "default:", "throw Error('Unknown RegExp operation: ' + data[0]);", "}", "postMessage(result);", "close();", "};"];
function St(e) {
  var t = e >>> 0;
  return t === Number(e) ? t : NaN;
}
function Re(e) {
  var t = e >>> 0;
  return String(t) === String(e) && t !== 4294967295 ? t : NaN;
}
function Ye(e, t, n) {
  t ? e.start = t : delete e.start, n ? e.end = n : delete e.end;
  for (var r in e)
    if (r !== "loc" && e.hasOwnProperty(r)) {
      var i = e[r];
      i && typeof i == "object" && Ye(i, t, n);
    }
}
f.prototype.REGEXP_MODE = 2;
f.prototype.REGEXP_THREAD_TIMEOUT = 1e3;
f.prototype.POLYFILL_TIMEOUT = 1e3;
C = f.prototype;
C.P = !1;
C.Ka = !1;
C.Kb = 0;
C.ic = 0;
function ge(e, t) {
  var n = {}, r;
  for (r in yr)
    n[r] = yr[r];
  return n.sourceFile = t, ne.j.parse(e, n);
}
C.Jb = function(e) {
  var t = this.o[0];
  if (!t || t.node.type !== "Program")
    throw Error("Expecting original AST to start with a Program node");
  if (typeof e == "string" && (e = ge(e, "appendCode" + this.Kb++)), !e || e.type !== "Program")
    throw Error("Expecting new AST to start with a Program node");
  Ue(this, e, t.scope), Array.prototype.push.apply(t.node.body, e.body), t.node.body.jb = null, t.done = !1;
};
C.lb = function() {
  var e = this.o, t;
  do {
    var n = e[e.length - 1];
    if (this.za)
      break;
    if (!n || n.node.type === "Program" && n.done) {
      if (!this.ca.length)
        return !1;
      if (n = this.ca[0], !n || n.time > Date.now())
        n = null;
      else {
        this.ca.shift(), 0 <= n.interval && kr(this, n, n.interval);
        var r = new y(n.node, n.scope);
        n.zb && (r.ia = 2, r.B = this.Na, r.U = n.zb, r.Qa = !0, r.F = n.Lb), n = r;
      }
      if (!n)
        break;
    }
    r = n.node;
    var i = Ne;
    Ne = this;
    try {
      var a = this.rb[r.type](e, n, r);
    } catch (u) {
      if (u !== xr)
        throw this.value !== u && (this.value = void 0), u;
    } finally {
      Ne = i;
    }
    if (a && e.push(a), this.P)
      throw this.value = void 0, Error("Getter not supported in this context");
    if (this.Ka)
      throw this.value = void 0, Error("Setter not supported in this context");
    t || r.end || (t = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!r.end && t > Date.now());
  return !0;
};
C.Eb = function() {
  for (; !this.za && this.lb(); )
    ;
  return this.za;
};
function Wr(e, t) {
  e.g(t, "NaN", NaN, Oe), e.g(t, "Infinity", 1 / 0, Oe), e.g(t, "undefined", void 0, Oe), e.g(t, "window", t, jt), e.g(t, "this", t, Oe), e.g(t, "self", t), e.M = new j(null), e.Z = new j(e.M), Hr(e, t), Yr(e, t), t.xa = e.M, e.g(t, "constructor", e.v, v), Jr(e, t), Kr(e, t), $r(e, t), Zr(e, t), zr(e, t), Qr(e, t), qr(e, t), en(e, t), tn(e, t);
  var n = e.i(function() {
    throw EvalError("Can't happen");
  }, !1);
  n.eval = !0, e.g(t, "eval", n, v), e.g(t, "parseInt", e.i(parseInt, !1), v), e.g(t, "parseFloat", e.i(parseFloat, !1), v), e.g(t, "isNaN", e.i(isNaN, !1), v), e.g(t, "isFinite", e.i(isFinite, !1), v);
  for (var r = [[escape, "escape"], [unescape, "unescape"], [decodeURI, "decodeURI"], [decodeURIComponent, "decodeURIComponent"], [encodeURI, "encodeURI"], [encodeURIComponent, "encodeURIComponent"]], i = 0; i < r.length; i++)
    n = function(a) {
      return function(u) {
        try {
          return a(u);
        } catch (h) {
          m(e, e.Gb, h.message);
        }
      };
    }(r[i][0]), e.g(t, r[i][1], e.i(n, !1), v);
  n = function(a) {
    return wr(e, !1, arguments);
  }, e.g(t, "setTimeout", e.i(n, !1), v), n = function(a) {
    return wr(e, !0, arguments);
  }, e.g(t, "setInterval", e.i(n, !1), v), n = function(a) {
    Er(e, a);
  }, e.g(t, "clearTimeout", e.i(n, !1), v), n = function(a) {
    Er(e, a);
  }, e.g(t, "clearInterval", e.i(n, !1), v), e.OBJECT = e.v, e.OBJECT_PROTO = e.M, e.FUNCTION = e.O, e.FUNCTION_PROTO = e.Z, e.ARRAY = e.qa, e.ARRAY_PROTO = e.La, e.REGEXP = e.I, e.REGEXP_PROTO = e.Ma, e.DATE = e.$, e.DATE_PROTO = e.nb, e.qb && e.qb(e, t);
}
C.Wb = 0;
function Hr(e, t) {
  var n = /^[A-Za-z_$][\w$]*$/, r = function(i) {
    var a = arguments.length ? String(arguments[arguments.length - 1]) : "", u = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
    if (u) {
      u = u.split(/\s*,\s*/);
      for (var h = 0; h < u.length; h++) {
        var k = u[h];
        n.test(k) || m(e, e.T, "Invalid function argument: " + k);
      }
      u = u.join(", ");
    }
    try {
      var G = ge("(function(" + u + ") {" + a + "})", "function" + e.Wb++);
    } catch (D) {
      m(e, e.T, "Invalid code: " + D.message);
    }
    return G.body.length !== 1 && m(e, e.T, "Invalid code in function body"), Ot(e, G.body[0].la, e.N, "anonymous");
  };
  e.O = e.i(r, !0), e.g(t, "Function", e.O, v), e.g(e.O, "prototype", e.Z, v), e.g(e.Z, "constructor", e.O, v), e.Z.Ta = function() {
  }, e.Z.Ta.id = e.Ya++, e.Z.Ab = !0, e.g(e.Z, "length", 0, L), e.Z.H = "Function", r = function(i, a) {
    var u = e.o[e.o.length - 1];
    u.U = this, u.B = i, u.F = [], a != null && (a instanceof j ? u.F = jr(e, a) : m(e, e.j, "CreateListFromArrayLike called on non-object")), u.eb = !1;
  }, R(e, e.O, "apply", r), r = function(i) {
    var a = e.o[e.o.length - 1];
    a.U = this, a.B = i, a.F = [];
    for (var u = 1; u < arguments.length; u++)
      a.F.push(arguments[u]);
    a.eb = !1;
  }, R(e, e.O, "call", r), e.ba.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function bind(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", ""), r = function() {
    return String(this);
  }, R(e, e.O, "toString", r), e.g(e.O, "toString", e.i(r, !1), v), r = function() {
    return this.valueOf();
  }, R(e, e.O, "valueOf", r), e.g(e.O, "valueOf", e.i(r, !1), v);
}
function Yr(e, t) {
  function n(i) {
    i != null || m(e, e.j, "Cannot convert '" + i + "' to object");
  }
  var r = function(i) {
    if (i == null)
      return q(e) ? this : e.s(e.M);
    if (!(i instanceof j)) {
      var a = e.s(Q(e, i));
      return a.data = i, a;
    }
    return i;
  };
  e.v = e.i(r, !0), e.g(e.v, "prototype", e.M, v), e.g(e.M, "constructor", e.v, v), e.g(t, "Object", e.v, v), r = function(i) {
    return n(i), Z(e, Object.getOwnPropertyNames(i instanceof j ? i.h : i));
  }, e.g(e.v, "getOwnPropertyNames", e.i(r, !1), v), r = function(i) {
    return n(i), i instanceof j && (i = i.h), Z(e, Object.keys(i));
  }, e.g(e.v, "keys", e.i(r, !1), v), r = function(i) {
    return i === null ? e.s(null) : (i instanceof j || m(e, e.j, "Object prototype may only be an Object or null, not " + i), e.s(i));
  }, e.g(e.v, "create", e.i(r, !1), v), e.ba.push("(function() {", "var create_ = Object.create;", "Object.create = function create(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", ""), r = function(i, a, u) {
    return a = String(a), i instanceof j || m(e, e.j, "Object.defineProperty called on non-object: " + i), u instanceof j || m(e, e.j, "Property description must be an object"), !i.preventExtensions || a in i.h || m(e, e.j, "Can't define property '" + a + "', object is not extensible"), e.g(i, a, Pe, u.h), i;
  }, e.g(e.v, "defineProperty", e.i(r, !1), v), e.ba.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function defineProperty(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function defineProperties(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", ""), r = function(i, a) {
    if (i instanceof j || m(e, e.j, "Object.getOwnPropertyDescriptor called on non-object: " + i), a = String(a), a in i.h) {
      var u = Object.getOwnPropertyDescriptor(i.h, a), h = i.V[a];
      return i = i.Y[a], a = e.s(e.M), h || i ? (e.g(a, "get", h), e.g(a, "set", i)) : (e.g(a, "value", u.value), e.g(a, "writable", u.writable)), e.g(a, "configurable", u.configurable), e.g(a, "enumerable", u.enumerable), a;
    }
  }, e.g(e.v, "getOwnPropertyDescriptor", e.i(r, !1), v), r = function(i) {
    return n(i), Q(e, i);
  }, e.g(e.v, "getPrototypeOf", e.i(r, !1), v), r = function(i) {
    return !!i && !i.preventExtensions;
  }, e.g(e.v, "isExtensible", e.i(r, !1), v), r = function(i) {
    return i instanceof j && (i.preventExtensions = !0), i;
  }, e.g(e.v, "preventExtensions", e.i(r, !1), v), R(e, e.v, "toString", j.prototype.toString), R(e, e.v, "toLocaleString", j.prototype.toString), R(e, e.v, "valueOf", j.prototype.valueOf), r = function(i) {
    return n(this), this instanceof j ? String(i) in this.h : this.hasOwnProperty(i);
  }, R(e, e.v, "hasOwnProperty", r), r = function(i) {
    return n(this), this instanceof j ? Object.prototype.propertyIsEnumerable.call(this.h, i) : this.propertyIsEnumerable(i);
  }, R(e, e.v, "propertyIsEnumerable", r), r = function(i) {
    for (; ; ) {
      if (i = Q(e, i), !i)
        return !1;
      if (i === this)
        return !0;
    }
  }, R(e, e.v, "isPrototypeOf", r);
}
function Jr(e, t) {
  var n = function(r) {
    var i = q(e) ? this : ve(e), a = arguments[0];
    if (arguments.length === 1 && typeof a == "number")
      isNaN(St(a)) && m(e, e.ob, "Invalid array length: " + a), i.h.length = a;
    else {
      for (a = 0; a < arguments.length; a++)
        i.h[a] = arguments[a];
      i.h.length = a;
    }
    return i;
  };
  e.qa = e.i(n, !0), e.La = e.qa.h.prototype, e.g(t, "Array", e.qa, v), n = function(r) {
    return r && r.H === "Array";
  }, e.g(e.qa, "isArray", e.i(n, !1), v), e.g(e.La, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), e.La.H = "Array", e.ba.push("(function() {", "function createArrayMethod_(f) {", "Object.defineProperty(Array.prototype, f.name,", "{configurable: true, writable: true, value: f});", "}", "createArrayMethod_(", "function pop() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "len--;", "var x = o[len];", "delete o[len];", "o.length = len;", "return x;", "}", ");", "createArrayMethod_(", "function push(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "for (var i = 0; i < arguments.length; i++) {", "o[len] = arguments[i];", "len++;", "}", "o.length = len;", "return len;", "}", ");", "createArrayMethod_(", "function shift() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "var value = o[0];", "for (var i = 0; i < len - 1; i++) {", "if ((i + 1) in o) {", "o[i] = o[i + 1];", "} else {", "delete o[i];", "}", "}", "delete o[i];", "o.length = len - 1;", "return value;", "}", ");", "createArrayMethod_(", "function unshift(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "len = 0;", "}", "for (var i = len - 1; i >= 0; i--) {", "if (i in o) {", "o[i + arguments.length] = o[i];", "} else {", "delete o[i + arguments.length];", "}", "}", "for (var i = 0; i < arguments.length; i++) {", "o[i] = arguments[i];", "}", "return (o.length = len + arguments.length);", "}", ");", "createArrayMethod_(", "function reverse() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 2) {", "return o;", "}", "for (var i = 0; i < len / 2 - 0.5; i++) {", "var x = o[i];", "var hasX = i in o;", "if ((len - i - 1) in o) {", "o[i] = o[len - i - 1];", "} else {", "delete o[i];", "}", "if (hasX) {", "o[len - i - 1] = x;", "} else {", "delete o[len - i - 1];", "}", "}", "return o;", "}", ");", "createArrayMethod_(", "function indexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var n = fromIndex | 0;", "if (!len || n >= len) {", "return -1;", "}", "var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);", "while (i < len) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i++;", "}", "return -1;", "}", ");", "createArrayMethod_(", "function lastIndexOf(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len) {", "return -1;", "}", "var n = len - 1;", "if (arguments.length > 1) {", "n = fromIndex | 0;", "if (n) {", "n = (n > 0 || -1) * Math.floor(Math.abs(n));", "}", "}", "var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);", "while (i >= 0) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i--;", "}", "return -1;", "}", ");", "createArrayMethod_(", "function slice(start, end) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "start = (start >= 0) ? start : Math.max(0, len + start);", "if (typeof end !== 'undefined') {", "if (end !== Infinity) {", "end |= 0;", "}", "if (end < 0) {", "end = len + end;", "} else {", "end = Math.min(end, len);", "}", "} else {", "end = len;", "}", "var size = end - start;", "var cloned = new Array(size);", "for (var i = 0; i < size; i++) {", "if ((start + i) in o) {", "cloned[i] = o[start + i];", "}", "}", "return cloned;", "}", ");", "createArrayMethod_(", "function splice(start, deleteCount, var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "if (start < 0) {", "start = Math.max(len + start, 0);", "} else {", "start = Math.min(start, len);", "}", "if (arguments.length < 1) {", "deleteCount = len - start;", "} else {", "deleteCount |= 0;", "deleteCount = Math.max(0, Math.min(deleteCount, len - start));", "}", "var removed = [];", "for (var i = start; i < start + deleteCount; i++) {", "if (i in o) {", "removed.push(o[i]);", "} else {", "removed.length++;", "}", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = start + deleteCount; i < len - deleteCount; i++) {", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = len - deleteCount; i < len; i++) {", "delete o[i];", "}", "len -= deleteCount;", "var arl = arguments.length - 2;", "for (var i = len - 1; i >= start; i--) {", "if (i in o) {", "o[i + arl] = o[i];", "} else {", "delete o[i + arl];", "}", "}", "len += arl;", "for (var i = 2; i < arguments.length; i++) {", "o[start + i - 2] = arguments[i];", "}", "o.length = len;", "return removed;", "}", ");", "createArrayMethod_(", "function concat(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var cloned = [];", "for (var i = -1; i < arguments.length; i++) {", "var value = (i === -1) ? o : arguments[i];", "if (Array.isArray(value)) {", "for (var j = 0, l = value.length; j < l; j++) {", "if (j in value) {", "cloned.push(value[j]);", "} else {", "cloned.length++;", "}", "}", "} else {", "cloned.push(value);", "}", "}", "return cloned;", "}", ");", "createArrayMethod_(", "function join(opt_separator) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var sep = typeof opt_separator === 'undefined' ?", "',' : ('' + opt_separator);", "var str = '';", "for (var i = 0; i < len; i++) {", "if (i && sep) str += sep;", "str += (o[i] === null || o[i] === undefined) ? '' : o[i];", "}", "return str;", "}", ");", "createArrayMethod_(", "function every(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o && !callbackfn.call(t, o[k], k, o)) return false;", "k++;", "}", "return true;", "}", ");", "createArrayMethod_(", "function filter(fun, var_args) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o) {", "var val = o[i];", "if (fun.call(thisArg, val, i, o)) res.push(val);", "}", "}", "return res;", "}", ");", "createArrayMethod_(", "function forEach(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o) callback.call(t, o[k], k, o);", "k++;", "}", "}", ");", "createArrayMethod_(", "function map(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "var a = new Array(len);", "while (k < len) {", "if (k in o) a[k] = callback.call(t, o[k], k, o);", "k++;", "}", "return a;", "}", ");", "createArrayMethod_(", "function reduce(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in o)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k++];", "}", "for (; k < len; k++) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_(", "function reduceRight(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in o)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k--];", "}", "for (; k >= 0; k--) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_(", "function some(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o && fun.call(thisArg, o[i], i, o)) return true;", "}", "return false;", "}", ");", "createArrayMethod_(", "function sort(opt_comp) {", "if (!this) throw TypeError();", "if (typeof opt_comp !== 'function') {", "opt_comp = undefined;", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :", "(String(this[j]) > String(this[j + 1]))) {", "var swap = this[j];", "var hasSwap = j in this;", "if ((j + 1) in this) {", "this[j] = this[j + 1];", "} else {", "delete this[j];", "}", "if (hasSwap) {", "this[j + 1] = swap;", "} else {", "delete this[j + 1];", "}", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "}", ");", "createArrayMethod_(", "function toLocaleString() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var out = [];", "for (var i = 0; i < len; i++) {", "out[i] = (o[i] === null || o[i] === undefined) ? '' : o[i].toLocaleString();", "}", "return out.join(',');", "}", ");", "})();", "");
}
function Kr(e, t) {
  var n = function(r) {
    return r = arguments.length ? ne.String(r) : "", q(e) ? (this.data = r, this) : r;
  };
  for (e.J = e.i(n, !0), e.g(t, "String", e.J, v), e.g(e.J, "fromCharCode", e.i(String.fromCharCode, !1), v), t = "charAt charCodeAt concat indexOf lastIndexOf slice substr substring toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase trim".split(" "), n = 0; n < t.length; n++)
    R(e, e.J, t[n], String.prototype[t[n]]);
  n = function(r, i, a) {
    i = e.R(i), a = e.R(a);
    try {
      return String(this).localeCompare(r, i, a);
    } catch (u) {
      m(e, e.D, "localeCompare: " + u.message);
    }
  }, R(e, e.J, "localeCompare", n), n = function(r, i, a) {
    var u = String(this);
    if (i = i ? Number(i) : void 0, U(e, r, e.I) && (r = r.data, Ie(e, r, a), e.REGEXP_MODE === 2)) {
      if (z)
        r = Ae(e, "string.split(separator, limit)", {
          string: u,
          separator: r,
          limit: i
        }, r, a), r !== he && a(Z(e, r));
      else {
        var h = e.ha(), k = Te(e, r, h, a);
        h.onmessage = function(G) {
          clearTimeout(k), a(Z(e, G.data));
        }, h.postMessage(["split", u, r, i]);
      }
      return;
    }
    r = u.split(r, i), a(Z(e, r));
  }, Me(e, e.J, "split", n), n = function(r, i) {
    var a = String(this);
    if (r = U(e, r, e.I) ? r.data : new RegExp(r), Ie(e, r, i), e.REGEXP_MODE === 2)
      if (z)
        r = Ae(e, "string.match(regexp)", {
          string: a,
          regexp: r
        }, r, i), r !== he && i(r && Z(e, r));
      else {
        var u = e.ha(), h = Te(e, r, u, i);
        u.onmessage = function(k) {
          clearTimeout(h), i(k.data && Z(e, k.data));
        }, u.postMessage(["match", a, r]);
      }
    else
      r = a.match(r), i(r && Z(e, r));
  }, Me(e, e.J, "match", n), n = function(r, i) {
    var a = String(this);
    if (U(e, r, e.I) ? r = r.data : r = new RegExp(r), Ie(e, r, i), e.REGEXP_MODE === 2)
      if (z)
        r = Ae(e, "string.search(regexp)", {
          string: a,
          regexp: r
        }, r, i), r !== he && i(r);
      else {
        var u = e.ha(), h = Te(e, r, u, i);
        u.onmessage = function(k) {
          clearTimeout(h), i(k.data);
        }, u.postMessage(["search", a, r]);
      }
    else
      i(a.search(r));
  }, Me(e, e.J, "search", n), n = function(r, i, a) {
    var u = String(this);
    if (i = String(i), U(e, r, e.I) && (r = r.data, Ie(e, r, a), e.REGEXP_MODE === 2)) {
      if (z)
        r = Ae(e, "string.replace(substr, newSubstr)", {
          string: u,
          substr: r,
          newSubstr: i
        }, r, a), r !== he && a(r);
      else {
        var h = e.ha(), k = Te(e, r, h, a);
        h.onmessage = function(G) {
          clearTimeout(k), a(G.data);
        }, h.postMessage(["replace", u, r, i]);
      }
      return;
    }
    a(u.replace(r, i));
  }, Me(e, e.J, "replace", n), e.ba.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function replace(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "");
}
function $r(e, t) {
  e.mb = e.i(function(n) {
    return n = ne.Boolean(n), q(e) ? (this.data = n, this) : n;
  }, !0), e.g(t, "Boolean", e.mb, v);
}
function Zr(e, t) {
  var n = function(r) {
    return r = arguments.length ? ne.Number(r) : 0, q(e) ? (this.data = r, this) : r;
  };
  for (e.aa = e.i(n, !0), e.g(t, "Number", e.aa, v), t = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"], n = 0; n < t.length; n++)
    e.g(e.aa, t[n], Number[t[n]], Oe);
  n = function(r) {
    try {
      return Number(this).toExponential(r);
    } catch (i) {
      m(e, e.D, i.message);
    }
  }, R(e, e.aa, "toExponential", n), n = function(r) {
    try {
      return Number(this).toFixed(r);
    } catch (i) {
      m(e, e.D, i.message);
    }
  }, R(e, e.aa, "toFixed", n), n = function(r) {
    try {
      return Number(this).toPrecision(r);
    } catch (i) {
      m(e, e.D, i.message);
    }
  }, R(e, e.aa, "toPrecision", n), n = function(r) {
    try {
      return Number(this).toString(r);
    } catch (i) {
      m(e, e.D, i.message);
    }
  }, R(e, e.aa, "toString", n), n = function(r, i) {
    r = r ? e.R(r) : void 0, i = i ? e.R(i) : void 0;
    try {
      return Number(this).toLocaleString(r, i);
    } catch (a) {
      m(e, e.D, "toLocaleString: " + a.message);
    }
  }, R(e, e.aa, "toLocaleString", n);
}
function zr(e, t) {
  var n = function(i, a) {
    if (!q(e))
      return ne.Date();
    var u = [null].concat(Array.from(arguments));
    return this.data = new (Function.prototype.bind.apply(ne.Date, u))(), this;
  };
  e.$ = e.i(n, !0), e.nb = e.$.h.prototype, e.g(t, "Date", e.$, v), e.g(e.$, "now", e.i(Date.now, !1), v), e.g(e.$, "parse", e.i(Date.parse, !1), v), e.g(e.$, "UTC", e.i(Date.UTC, !1), v), t = "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toISOString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(" ");
  for (var r = 0; r < t.length; r++)
    n = function(i) {
      return function(a) {
        var u = this.data;
        u instanceof Date || m(e, e.j, i + " not called on a Date");
        for (var h = [], k = 0; k < arguments.length; k++)
          h[k] = e.R(arguments[k]);
        return u[i].apply(u, h);
      };
    }(t[r]), R(e, e.$, t[r], n);
}
function Qr(e, t) {
  var n = function(r, i) {
    if (q(e))
      var a = this;
    else {
      if (i === void 0 && U(e, r, e.I))
        return r;
      a = e.s(e.Ma);
    }
    r = r === void 0 ? "" : String(r), i = i ? String(i) : "", /^[gmi]*$/.test(i) || m(e, e.T, "Invalid regexp flag: " + i);
    try {
      var u = new ne.RegExp(r, i);
    } catch (h) {
      m(e, e.T, h.message);
    }
    return kt(e, a, u), a;
  };
  e.I = e.i(n, !0), e.Ma = e.I.h.prototype, e.g(t, "RegExp", e.I, v), e.g(e.I.h.prototype, "global", void 0, L), e.g(e.I.h.prototype, "ignoreCase", void 0, L), e.g(e.I.h.prototype, "multiline", void 0, L), e.g(e.I.h.prototype, "source", "(?:)", L), e.ba.push("Object.defineProperty(RegExp.prototype, 'test',", "{configurable: true, writable: true, value:", "function test(str) {", "return !!this.exec(str);", "}", "});"), n = function(r, i) {
    function a(D) {
      if (D) {
        var A = Z(e, D);
        return e.g(A, "index", D.index), e.g(A, "input", D.input), A;
      }
      return null;
    }
    var u = this.data;
    if (r = String(r), u.lastIndex = Number(e.G(this, "lastIndex")), Ie(e, u, i), e.REGEXP_MODE === 2)
      if (z)
        r = Ae(e, "regexp.exec(string)", {
          string: r,
          regexp: u
        }, u, i), r !== he && (e.g(this, "lastIndex", u.lastIndex), i(a(r)));
      else {
        var h = e.ha(), k = Te(e, u, h, i), G = this;
        h.onmessage = function(D) {
          clearTimeout(k), e.g(G, "lastIndex", D.data[1]), i(a(D.data[0]));
        }, h.postMessage(["exec", u, u.lastIndex, r]);
      }
    else
      r = u.exec(r), e.g(this, "lastIndex", u.lastIndex), i(a(r));
  }, Me(e, e.I, "exec", n);
}
function qr(e, t) {
  function n(r) {
    var i = e.i(function(a) {
      var u = q(e) ? this : e.Aa(i);
      return Et(e, u, a), u;
    }, !0);
    return e.g(i, "prototype", e.Aa(e.D), v), e.g(i.h.prototype, "name", r, v), e.g(t, r, i, v), i;
  }
  e.D = e.i(function(r) {
    var i = q(e) ? this : e.Aa(e.D);
    return Et(e, i, r), i;
  }, !0), e.g(t, "Error", e.D, v), e.g(e.D.h.prototype, "message", "", v), e.g(e.D.h.prototype, "name", "Error", v), n("EvalError"), e.ob = n("RangeError"), e.pb = n("ReferenceError"), e.T = n("SyntaxError"), e.j = n("TypeError"), e.Gb = n("URIError");
}
function en(e, t) {
  var n = e.s(e.M);
  e.g(t, "Math", n, v);
  var r = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" ");
  for (t = 0; t < r.length; t++)
    e.g(n, r[t], Math[r[t]], L);
  for (r = "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(" "), t = 0; t < r.length; t++)
    e.g(n, r[t], e.i(Math[r[t]], !1), v);
}
function tn(e, t) {
  var n = e.s(e.M);
  e.g(t, "JSON", n, v), t = function(r) {
    try {
      var i = JSON.parse(String(r));
    } catch (a) {
      m(e, e.T, a.message);
    }
    return e.Ia(i);
  }, e.g(n, "parse", e.i(t, !1)), t = function(r, i, a) {
    i && i.H === "Function" ? m(e, e.j, "Function replacer on JSON.stringify not supported") : i && i.H === "Array" ? (i = jr(e, i), i = i.filter(function(h) {
      return typeof h == "string" || typeof h == "number";
    })) : i = null, typeof a != "string" && typeof a != "number" && (a = void 0), r = e.R(r);
    try {
      var u = JSON.stringify(r, i, a);
    } catch (h) {
      m(e, e.j, h.message);
    }
    return u;
  }, e.g(n, "stringify", e.i(t, !1));
}
function U(e, t, n) {
  if (t == null || !n)
    return !1;
  if (n = n.h.prototype, t === n)
    return !0;
  for (t = Q(e, t); t; ) {
    if (t === n)
      return !0;
    t = t.xa;
  }
  return !1;
}
function kt(e, t, n) {
  t.data = new RegExp(n.source, n.flags), e.g(t, "lastIndex", n.lastIndex, v), e.g(t, "source", n.source, L), e.g(t, "global", n.global, L), e.g(t, "ignoreCase", n.ignoreCase, L), e.g(t, "multiline", n.multiline, L);
}
function Et(e, t, n) {
  n && e.g(t, "message", String(n), v), n = [];
  for (var r = e.o.length - 1; 0 <= r; r--) {
    var i = e.o[r], a = i.node;
    a.type === "CallExpression" && (i = i.U) && n.length && (n[n.length - 1].Ob = e.G(i, "name")), !a.X || n.length && a.type !== "CallExpression" || n.push({
      Nb: a.X
    });
  }
  for (r = String(e.G(t, "name")), a = String(e.G(t, "message")), a = r + ": " + a + `
`, r = 0; r < n.length; r++) {
    var u = n[r].Nb;
    i = n[r].Ob, u = u.source + ":" + u.start.line + ":" + u.start.ab, a = i ? a + ("  at " + i + " (" + u + `)
`) : a + ("  at " + u + `
`);
  }
  e.g(t, "stack", a.trim(), v);
}
C.ha = function() {
  var e = this.ha.Mb;
  return e || (e = new Blob([Vr.join(`
`)], {
    type: "application/javascript"
  }), this.ha.Mb = e), new Worker(URL.createObjectURL(e));
};
function Ae(e, t, n, r, i) {
  var a = {
    timeout: e.REGEXP_THREAD_TIMEOUT
  };
  try {
    return z.runInNewContext(t, n, a);
  } catch {
    i(null), m(e, e.D, "RegExp Timeout: " + r);
  }
  return he;
}
function Ie(e, t, n) {
  if (e.REGEXP_MODE === 0)
    var r = !1;
  else if (e.REGEXP_MODE === 1)
    r = !0;
  else if (z)
    r = !0;
  else if (typeof Worker == "function" && typeof URL == "function")
    r = !0;
  else if (typeof require == "function") {
    try {
      z = require("vm");
    } catch {
    }
    r = !!z;
  } else
    r = !1;
  r || (n(null), m(e, e.D, "Regular expressions not supported: " + t));
}
function Te(e, t, n, r) {
  return setTimeout(function() {
    n.terminate(), r(null);
    try {
      m(e, e.D, "RegExp Timeout: " + t);
    } catch {
    }
  }, e.REGEXP_THREAD_TIMEOUT);
}
C.Aa = function(e) {
  return this.s(e && e.h.prototype);
};
C.s = function(e) {
  if (typeof e != "object")
    throw Error("Non object prototype");
  return e = new j(e), U(this, e, this.D) && (e.H = "Error"), e;
};
function ve(e) {
  var t = e.s(e.La);
  return e.g(t, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), t.H = "Array", t;
}
function Ct(e, t, n) {
  var r = e.s(e.Z);
  return n ? (n = e.s(e.M), e.g(r, "prototype", n, v), e.g(n, "constructor", r, v)) : r.Ab = !0, e.g(r, "length", t, L), r.H = "Function", r;
}
function Ot(e, t, n, r) {
  var i = Ct(e, t.oa.length, !0);
  return i.Va = n, i.node = t, e.g(i, "name", t.id ? String(t.id.name) : r || "", L), i;
}
C.i = function(e, t) {
  return t = Ct(this, e.length, t), t.Ta = e, e.id = this.Ya++, this.g(t, "name", e.name, L), t;
};
C.ub = function(e) {
  var t = Ct(this, e.length, !0);
  return t.Za = e, e.id = this.Ya++, this.g(t, "name", e.name, L), t;
};
C.Ia = function(e) {
  if (e instanceof j)
    throw Error("Object is already pseudo");
  if (e == null || e === !0 || e === !1 || typeof e == "string" || typeof e == "number")
    return e;
  if (e instanceof RegExp) {
    var t = this.s(this.Ma);
    return kt(this, t, e), t;
  }
  if (e instanceof Date)
    return t = this.s(this.nb), t.data = new Date(e.valueOf()), t;
  if (typeof e == "function") {
    var n = this;
    return t = Object.getOwnPropertyDescriptor(e, "prototype"), this.i(function() {
      var i = Array.prototype.slice.call(arguments).map(function(a) {
        return n.R(a);
      });
      return i = e.apply(n, i), n.Ia(i);
    }, !!t);
  }
  if (Array.isArray(e)) {
    t = ve(this);
    for (var r = 0; r < e.length; r++)
      r in e && this.g(t, r, this.Ia(e[r]));
    return t;
  }
  t = this.s(this.M);
  for (r in e)
    this.g(t, r, this.Ia(e[r]));
  return t;
};
C.R = function(e, t) {
  if (typeof e != "object" && typeof e != "function" || e === null)
    return e;
  if (!(e instanceof j))
    throw Error("Object is not pseudo");
  if (U(this, e, this.I))
    return t = new RegExp(e.data.source, e.data.flags), t.lastIndex = e.data.lastIndex, t;
  if (U(this, e, this.$))
    return new Date(e.data.valueOf());
  t = t || {
    hb: [],
    Sa: []
  };
  var n = t.hb.indexOf(e);
  if (n !== -1)
    return t.Sa[n];
  if (t.hb.push(e), U(this, e, this.qa)) {
    n = [], t.Sa.push(n);
    for (var r = this.G(e, "length"), i = 0; i < r; i++)
      Je(this, e, i) && (n[i] = this.R(this.G(e, i), t));
  } else
    for (r in n = {}, t.Sa.push(n), e.h)
      i = this.R(e.h[r], t), Object.defineProperty(n, r, {
        value: i,
        writable: !0,
        enumerable: !0,
        configurable: !0
      });
  return t.hb.pop(), t.Sa.pop(), n;
};
function Z(e, t) {
  for (var n = ve(e), r = Object.getOwnPropertyNames(t), i = 0; i < r.length; i++)
    e.g(n, r[i], t[r[i]]);
  return n;
}
function jr(e, t) {
  var n = [], r;
  for (r in t.h)
    n[r] = e.G(t, r);
  return n.length = St(e.G(t, "length")) || 0, n;
}
function Q(e, t) {
  switch (typeof t) {
    case "number":
      return e.aa.h.prototype;
    case "boolean":
      return e.mb.h.prototype;
    case "string":
      return e.J.h.prototype;
  }
  return t ? t.xa : null;
}
C.G = function(e, t) {
  if (this.P)
    throw Error("Getter not supported in that context");
  if (t = String(t), e != null || m(this, this.j, "Cannot read property '" + t + "' of " + e), typeof e == "object" && !(e instanceof j))
    throw TypeError("Expecting native value or pseudo object");
  if (t === "length") {
    if (U(this, e, this.J))
      return String(e).length;
  } else if (64 > t.charCodeAt(0) && U(this, e, this.J)) {
    var n = Re(t);
    if (!isNaN(n) && n < String(e).length)
      return String(e)[n];
  }
  do
    if (e.h && t in e.h)
      return (n = e.V[t]) ? (this.P = !0, n) : e.h[t];
  while (e = Q(this, e));
};
function Je(e, t, n) {
  if (!(t instanceof j))
    throw TypeError("Primitive data type has no properties");
  if (n = String(n), n === "length" && U(e, t, e.J))
    return !0;
  if (U(e, t, e.J)) {
    var r = Re(n);
    if (!isNaN(r) && r < String(t).length)
      return !0;
  }
  do
    if (t.h && n in t.h)
      return !0;
  while (t = Q(e, t));
  return !1;
}
C.g = function(e, t, n, r) {
  if (this.Ka)
    throw Error("Setter not supported in that context");
  if (t = String(t), e != null || m(this, this.j, "Cannot set property '" + t + "' of " + e), typeof e == "object" && !(e instanceof j))
    throw TypeError("Expecting native value or pseudo object");
  r && ("get" in r || "set" in r) && ("value" in r || "writable" in r) && m(this, this.j, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  var i = !this.o || At(this).S;
  if (e instanceof j) {
    if (U(this, e, this.J)) {
      var a = Re(t);
      if (t === "length" || !isNaN(a) && a < String(e).length) {
        i && m(this, this.j, "Cannot assign to read only property '" + t + "' of String '" + e.data + "'");
        return;
      }
    }
    if (e.H === "Array")
      if (a = e.h.length, t === "length") {
        if (r) {
          if (!("value" in r))
            return;
          n = r.value;
        }
        if (n = St(n), isNaN(n) && m(this, this.ob, "Invalid array length"), n < a)
          for (u in e.h) {
            var u = Re(u);
            !isNaN(u) && n <= u && delete e.h[u];
          }
      } else
        isNaN(u = Re(t)) || (e.h.length = Math.max(a, u + 1));
    if (!e.preventExtensions || t in e.h)
      if (r) {
        i = {}, "get" in r && r.get && (e.V[t] = r.get, i.get = this.g.ac), "set" in r && r.set && (e.Y[t] = r.set, i.set = this.g.bc), "configurable" in r && (i.configurable = r.configurable), "enumerable" in r && (i.enumerable = r.enumerable), "writable" in r && (i.writable = r.writable, delete e.V[t], delete e.Y[t]), "value" in r ? (i.value = r.value, delete e.V[t], delete e.Y[t]) : n !== Pe && (i.value = n, delete e.V[t], delete e.Y[t]);
        try {
          Object.defineProperty(e.h, t, i);
        } catch {
          m(this, this.j, "Cannot redefine property: " + t);
        }
        "get" in r && !r.get && delete e.V[t], "set" in r && !r.set && delete e.Y[t];
      } else {
        if (n === Pe)
          throw ReferenceError("Value not specified");
        for (r = e; !(t in r.h); )
          if (r = Q(this, r), !r) {
            r = e;
            break;
          }
        if (r.Y && r.Y[t])
          return this.Ka = !0, r.Y[t];
        if (r.V && r.V[t])
          i && m(this, this.j, "Cannot set property '" + t + "' of object '" + e + "' which only has a getter");
        else
          try {
            e.h[t] = n;
          } catch {
            i && m(this, this.j, "Cannot assign to read only property '" + t + "' of object '" + e + "'");
          }
      }
    else
      i && m(this, this.j, "Can't add property '" + t + "', object is not extensible");
  } else
    i && m(this, this.j, "Can't create property '" + t + "' on '" + e + "'");
};
C.g.ac = function() {
  throw Error("Placeholder getter");
};
C.g.bc = function() {
  throw Error("Placeholder setter");
};
function R(e, t, n, r) {
  e.g(t.h.prototype, n, e.i(r, !1), v);
}
function Me(e, t, n, r) {
  e.g(t.h.prototype, n, e.ub(r), v);
}
function At(e) {
  if (e = e.o[e.o.length - 1].scope, !e)
    throw Error("No scope found");
  return e;
}
function xt(e, t, n) {
  var r = !1;
  if (n && n.S)
    r = !0;
  else {
    var i = t.body && t.body[0];
    i && i.la && i.la.type === "Literal" && i.la.value === "use strict" && (r = !0);
  }
  return i = e.s(null), r = new Cr(n, r, i), n || Wr(e, r.object), Ue(e, t, r), r;
}
function It(e, t, n) {
  if (!t)
    throw Error("parentScope required");
  return e = n || e.s(null), new Cr(t, t.S, e);
}
function Tt(e, t) {
  for (var n = At(e); n && n !== e.N; ) {
    if (t in n.object.h)
      return n.object.h[t];
    n = n.Va;
  }
  if (n === e.N && Je(e, n.object, t))
    return e.G(n.object, t);
  n = e.o[e.o.length - 1].node, n.type === "UnaryExpression" && n.operator === "typeof" || m(e, e.pb, t + " is not defined");
}
function Sr(e, t, n) {
  for (var r = At(e), i = r.S; r && r !== e.N; ) {
    if (t in r.object.h) {
      try {
        r.object.h[t] = n;
      } catch {
        i && m(e, e.j, "Cannot assign to read only variable '" + t + "'");
      }
      return;
    }
    r = r.Va;
  }
  if (r === e.N && (!i || Je(e, r.object, t)))
    return e.g(r.object, t, n);
  m(e, e.pb, t + " is not defined");
}
function Ue(e, t, n) {
  if (t.jb)
    var r = t.jb;
  else {
    switch (r = /* @__PURE__ */ Object.create(null), t.type) {
      case "VariableDeclaration":
        for (var i = 0; i < t.fa.length; i++)
          r[t.fa[i].id.name] = !0;
        break;
      case "FunctionDeclaration":
        r[t.id.name] = t;
        break;
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "Program":
      case "SwitchCase":
      case "SwitchStatement":
      case "TryStatement":
      case "WithStatement":
      case "WhileStatement":
        var a = t.constructor, u;
        for (u in t)
          if (u !== "loc") {
            var h = t[u];
            if (h && typeof h == "object") {
              if (Array.isArray(h)) {
                for (i = 0; i < h.length; i++)
                  if (h[i] && h[i].constructor === a) {
                    var k = Ue(e, h[i], n);
                    for (u in k)
                      r[u] = k[u];
                  }
              } else if (h.constructor === a)
                for (u in k = Ue(e, h, n), k)
                  r[u] = k[u];
            }
          }
    }
    t.jb = r;
  }
  for (u in r)
    r[u] === !0 ? e.g(n.object, u, void 0, mr) : e.g(n.object, u, Ot(e, r[u], n), mr);
  return r;
}
function q(e) {
  return e.o[e.o.length - 1].isConstructor;
}
function Mt(e, t) {
  return t[0] === ye ? Tt(e, t[1]) : e.G(t[0], t[1]);
}
function Nt(e, t, n) {
  return t[0] === ye ? Sr(e, t[1], n) : e.g(t[0], t[1], n);
}
function m(e, t, n) {
  throw e.N ? (n !== void 0 && t instanceof j && (t = e.Aa(t), Et(e, t, n)), De(e, 4, t), xr) : n === void 0 ? t : n;
}
function De(e, t, n, r) {
  if (t === 0)
    throw TypeError("Should not unwind for NORMAL completions");
  var i = e.o;
  e:
    for (; 0 < i.length; i.pop()) {
      var a = i[i.length - 1];
      switch (a.node.type) {
        case "TryStatement":
          a.ea = {
            type: t,
            value: n,
            label: r
          };
          return;
        case "CallExpression":
        case "NewExpression":
          if (t === 3) {
            a.value = n;
            return;
          }
          if (t !== 4)
            throw Error("Unsynatctic break/continue not rejected by Acorn");
          break;
        case "Program":
          a.done = !0;
          break e;
      }
      if (t === 1) {
        if (r ? a.labels && a.labels.indexOf(r) !== -1 : a.W || a.Zb) {
          i.pop();
          return;
        }
      } else if (t === 2 && (r ? a.labels && a.labels.indexOf(r) !== -1 : a.W))
        return;
    }
  throw U(e, n, e.D) ? (t = {
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
  }, r = String(e.G(n, "name")), i = e.G(n, "message").valueOf(), t = (t[r] || Error)(i), t.stack = String(e.G(n, "stack"))) : t = String(n), e.value = t, t;
}
function F(e, t) {
  switch (t.type) {
    case "ArrayExpression":
      return "[...]";
    case "BinaryExpression":
    case "LogicalExpression":
      return F(e, t.left) + " " + t.operator + " " + F(e, t.right);
    case "CallExpression":
      return F(e, t.callee) + "(...)";
    case "ConditionalExpression":
      return F(e, t.test) + " ? " + F(e, t.da) + " : " + F(e, t.alternate);
    case "Identifier":
      return t.name;
    case "Literal":
      return t.raw;
    case "MemberExpression":
      var n = F(e, t.object);
      return e = F(e, t.Wa), t.bb ? n + "[" + e + "]" : n + "." + e;
    case "NewExpression":
      return "new " + F(e, t.callee) + "(...)";
    case "ObjectExpression":
      return "{...}";
    case "ThisExpression":
      return "this";
    case "UnaryExpression":
      return t.operator + " " + F(e, t.K);
    case "UpdateExpression":
      return n = F(e, t.K), t.prefix ? t.operator + n : n + t.operator;
  }
  return "???";
}
function wr(e, t, n) {
  var r = e.o[e.o.length - 1], i = Array.from(n), a = i.shift();
  n = Math.max(Number(i.shift() || 0), 0);
  var u = e.ya();
  if (a instanceof j && a.H === "Function") {
    var h = a;
    u.type = "CallExpression", r = r.scope;
  } else {
    try {
      var k = ge(String(a), "taskCode" + e.ic++);
    } catch (G) {
      m(e, e.T, "Invalid code: " + G.message);
    }
    u.type = "EvalProgram_", u.body = k.body, r = r.node.arguments[0], Ye(u, r ? r.start : void 0, r ? r.end : void 0), r = e.N, i.length = 0;
  }
  return t = new rn(h, i, r, u, t ? n : -1), kr(e, t, n), t.Db;
}
function kr(e, t, n) {
  t.time = Date.now() + n, e.ca.push(t), e.ca.sort(function(r, i) {
    return r.time - i.time;
  });
}
function Er(e, t) {
  for (var n = 0; n < e.ca.length; n++)
    if (e.ca[n].Db == t) {
      e.ca.splice(n, 1);
      break;
    }
}
function be(e, t, n) {
  if (!e.P)
    throw Error("Unexpected call to createGetter");
  e.P = !1, n = Array.isArray(n) ? n[0] : n;
  var r = e.ya();
  return r.type = "CallExpression", e = new y(r, e.o[e.o.length - 1].scope), e.ia = 2, e.B = n, e.U = t, e.Qa = !0, e.F = [], e;
}
function Rt(e, t, n, r) {
  if (!e.Ka)
    throw Error("Unexpected call to createSetter");
  e.Ka = !1, n = Array.isArray(n) ? n[0] : e.Na;
  var i = e.ya();
  return i.type = "CallExpression", e = new y(i, e.o[e.o.length - 1].scope), e.ia = 2, e.B = n, e.U = t, e.Qa = !0, e.F = [r], e;
}
function dt(e, t) {
  return t == null ? e.Na : t instanceof j ? t : (e = e.s(Q(e, t)), e.data = t, e);
}
C.Xb = function() {
  return this.N;
};
C.Yb = function() {
  return this.o;
};
C.ec = function(e) {
  this.o = e;
};
function y(e, t) {
  this.node = e, this.scope = t;
}
function Cr(e, t, n) {
  this.Va = e, this.S = t, this.object = n;
}
function j(e) {
  this.V = /* @__PURE__ */ Object.create(null), this.Y = /* @__PURE__ */ Object.create(null), this.h = /* @__PURE__ */ Object.create(null), this.xa = e;
}
C = j.prototype;
C.xa = null;
C.H = "Object";
C.data = null;
C.toString = function() {
  if (!Ne)
    return "[object Interpreter.Object]";
  if (!(this instanceof j))
    return String(this);
  if (this.H === "Array") {
    var e = dr;
    e.push(this);
    try {
      var t = [], n = this.h.length, r = !1;
      1024 < n && (n = 1e3, r = !0);
      for (var i = 0; i < n; i++) {
        var a = this.h[i];
        t[i] = a instanceof j && e.indexOf(a) !== -1 ? "..." : a;
      }
      r && t.push("...");
    } finally {
      e.pop();
    }
    return t.join(",");
  }
  if (this.H === "Error") {
    if (e = dr, e.indexOf(this) !== -1)
      return "[object Error]";
    n = this;
    do
      if ("name" in n.h) {
        t = n.h.name;
        break;
      }
    while (n = n.xa);
    n = this;
    do
      if ("message" in n.h) {
        r = n.h.message;
        break;
      }
    while (n = n.xa);
    e.push(this);
    try {
      t = t && String(t), r = r && String(r);
    } finally {
      e.pop();
    }
    return r ? t + ": " + r : String(t);
  }
  return this.data !== null ? String(this.data) : "[object " + this.H + "]";
};
C.valueOf = function() {
  return !Ne || this.data === void 0 || this.data === null || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
};
function rn(e, t, n, r, i) {
  this.zb = e, this.Lb = t, this.scope = n, this.node = r, this.interval = i, this.Db = ++nn, this.time = 0;
}
var nn = 0;
f.prototype.stepArrayExpression = function(e, t, n) {
  n = n.elements;
  var r = t.A || 0;
  for (t.Oa ? (this.g(t.Oa, r, t.value), r++) : (t.Oa = ve(this), t.Oa.h.length = n.length); r < n.length; ) {
    if (n[r])
      return t.A = r, new y(n[r], t.scope);
    r++;
  }
  e.pop(), e[e.length - 1].value = t.Oa;
};
f.prototype.stepAssignmentExpression = function(e, t, n) {
  if (!t.ja)
    return t.ja = !0, t = new y(n.left, t.scope), t.sa = !0, t;
  if (!t.Da)
    return t.Fa || (t.Fa = t.value), t.Ba && (t.ma = t.value), !t.Ba && n.operator !== "=" && (e = Mt(this, t.Fa), t.ma = e, this.P) ? (t.Ba = !0, be(this, e, t.Fa)) : (t.Da = !0, n.operator === "=" && n.left.type === "Identifier" && (t.Pa = n.left.name), new y(n.right, t.scope));
  if (t.ta)
    e.pop(), e[e.length - 1].value = t.ib;
  else {
    var r = t.ma, i = t.value;
    switch (n.operator) {
      case "=":
        r = i;
        break;
      case "+=":
        r += i;
        break;
      case "-=":
        r -= i;
        break;
      case "*=":
        r *= i;
        break;
      case "/=":
        r /= i;
        break;
      case "%=":
        r %= i;
        break;
      case "<<=":
        r <<= i;
        break;
      case ">>=":
        r >>= i;
        break;
      case ">>>=":
        r >>>= i;
        break;
      case "&=":
        r &= i;
        break;
      case "^=":
        r ^= i;
        break;
      case "|=":
        r |= i;
        break;
      default:
        throw SyntaxError("Unknown assignment expression: " + n.operator);
    }
    if (n = Nt(this, t.Fa, r))
      return t.ta = !0, t.ib = r, Rt(this, n, t.Fa, r);
    e.pop(), e[e.length - 1].value = r;
  }
};
f.prototype.stepBinaryExpression = function(e, t, n) {
  if (!t.ja)
    return t.ja = !0, new y(n.left, t.scope);
  if (!t.Da)
    return t.Da = !0, t.ma = t.value, new y(n.right, t.scope);
  e.pop();
  var r = t.ma;
  switch (t = t.value, n.operator) {
    case "==":
      n = r == t;
      break;
    case "!=":
      n = r != t;
      break;
    case "===":
      n = r === t;
      break;
    case "!==":
      n = r !== t;
      break;
    case ">":
      n = r > t;
      break;
    case ">=":
      n = r >= t;
      break;
    case "<":
      n = r < t;
      break;
    case "<=":
      n = r <= t;
      break;
    case "+":
      n = r + t;
      break;
    case "-":
      n = r - t;
      break;
    case "*":
      n = r * t;
      break;
    case "/":
      n = r / t;
      break;
    case "%":
      n = r % t;
      break;
    case "&":
      n = r & t;
      break;
    case "|":
      n = r | t;
      break;
    case "^":
      n = r ^ t;
      break;
    case "<<":
      n = r << t;
      break;
    case ">>":
      n = r >> t;
      break;
    case ">>>":
      n = r >>> t;
      break;
    case "in":
      t instanceof j || m(this, this.j, "'in' expects an object, not '" + t + "'"), n = Je(this, t, r);
      break;
    case "instanceof":
      U(this, t, this.O) || m(this, this.j, "'instanceof' expects an object, not '" + t + "'"), n = r instanceof j ? U(this, r, t) : !1;
      break;
    default:
      throw SyntaxError("Unknown binary operator: " + n.operator);
  }
  e[e.length - 1].value = n;
};
f.prototype.stepBlockStatement = function(e, t, n) {
  var r = t.A || 0;
  if (n = n.body[r])
    return t.A = r + 1, new y(n, t.scope);
  e.pop();
};
f.prototype.stepBreakStatement = function(e, t, n) {
  De(this, 1, void 0, n.label && n.label.name);
};
f.prototype.Hb = 0;
f.prototype.stepCallExpression = function(e, t, n) {
  if (!t.ia) {
    t.ia = 1;
    var r = new y(n.callee, t.scope);
    return r.sa = !0, r;
  }
  if (t.ia === 1) {
    t.ia = 2;
    var i = t.value;
    if (Array.isArray(i)) {
      if (t.U = Mt(this, i), i[0] === ye ? t.Pb = i[1] === "eval" : t.B = i[0], i = t.U, this.P)
        return t.ia = 1, be(this, i, t.value);
    } else
      t.U = i;
    t.F = [], t.A = 0;
  }
  if (i = t.U, !t.Qa) {
    if (t.A !== 0 && t.F.push(t.value), n.arguments[t.A])
      return new y(n.arguments[t.A++], t.scope);
    if (n.type === "NewExpression") {
      if (i instanceof j && !i.Ab || m(this, this.j, F(this, n.callee) + " is not a constructor"), i === this.qa)
        t.B = ve(this);
      else {
        var a = i.h.prototype;
        (typeof a != "object" || a === null) && (a = this.M), t.B = this.s(a);
      }
      t.isConstructor = !0;
    }
    t.Qa = !0;
  }
  if (t.eb)
    e.pop(), e[e.length - 1].value = t.isConstructor && typeof t.value != "object" ? t.B : t.value;
  else {
    if (t.eb = !0, i instanceof j || m(this, this.j, F(this, n.callee) + " is not a function"), e = i.node) {
      for (n = xt(this, e.body, i.Va), r = ve(this), i = 0; i < t.F.length; i++)
        this.g(r, i, t.F[i]);
      for (this.g(n.object, "arguments", r), i = 0; i < e.oa.length; i++)
        this.g(n.object, e.oa[i].name, t.F.length > i ? t.F[i] : void 0);
      return n.S || (t.B = dt(this, t.B)), this.g(n.object, "this", t.B, jt), t.value = void 0, new y(e.body, n);
    }
    if (i.eval)
      if (i = t.F[0], typeof i != "string")
        t.value = i;
      else {
        try {
          r = ge(String(i), "eval" + this.Hb++);
        } catch (h) {
          m(this, this.T, "Invalid code: " + h.message);
        }
        return i = this.ya(), i.type = "EvalProgram_", i.body = r.body, Ye(i, n.start, n.end), n = t.Pb ? t.scope : this.N, n.S ? n = xt(this, r, n) : Ue(this, r, n), this.value = void 0, new y(i, n);
      }
    else if (i.Ta)
      t.scope.S || (t.B = dt(this, t.B)), t.value = i.Ta.apply(t.B, t.F);
    else if (i.Za) {
      var u = this;
      r = i.Za.length - 1, r = t.F.concat(Array(r)).slice(0, r), r.push(function(h) {
        t.value = h, u.za = !1;
      }), this.za = !0, t.scope.S || (t.B = dt(this, t.B)), i.Za.apply(t.B, r);
    } else
      m(this, this.j, F(this, n.callee) + " is not callable");
  }
};
f.prototype.stepConditionalExpression = function(e, t, n) {
  var r = t.na || 0;
  if (r === 0)
    return t.na = 1, new y(n.test, t.scope);
  if (r === 1) {
    if (t.na = 2, (r = !!t.value) && n.da)
      return new y(n.da, t.scope);
    if (!r && n.alternate)
      return new y(n.alternate, t.scope);
    this.value = void 0;
  }
  e.pop(), n.type === "ConditionalExpression" && (e[e.length - 1].value = t.value);
};
f.prototype.stepContinueStatement = function(e, t, n) {
  De(this, 2, void 0, n.label && n.label.name);
};
f.prototype.stepDebuggerStatement = function(e) {
  e.pop();
};
f.prototype.stepDoWhileStatement = function(e, t, n) {
  if (n.type === "DoWhileStatement" && t.ga === void 0 && (t.value = !0, t.ga = !0), !t.ga)
    return t.ga = !0, new y(n.test, t.scope);
  if (!t.value)
    e.pop();
  else if (n.body)
    return t.ga = !1, t.W = !0, new y(n.body, t.scope);
};
f.prototype.stepEmptyStatement = function(e) {
  e.pop();
};
f.prototype.stepEvalProgram_ = function(e, t, n) {
  var r = t.A || 0;
  if (n = n.body[r])
    return t.A = r + 1, new y(n, t.scope);
  e.pop(), e[e.length - 1].value = this.value;
};
f.prototype.stepExpressionStatement = function(e, t, n) {
  if (!t.ka)
    return this.value = void 0, t.ka = !0, new y(n.la, t.scope);
  e.pop(), this.value = t.value;
};
f.prototype.stepForInStatement = function(e, t, n) {
  if (!t.Ub && (t.Ub = !0, n.left.fa && n.left.fa[0].ua))
    return t.scope.S && m(this, this.T, "for-in loop variable declaration may not have an initializer"), new y(n.left, t.scope);
  if (!t.Ca)
    return t.Ca = !0, t.pa || (t.pa = t.value), new y(n.right, t.scope);
  if (t.W || (t.W = !0, t.u = t.value, t.kb = /* @__PURE__ */ Object.create(null)), t.Ra === void 0)
    e:
      for (; ; ) {
        if (t.u instanceof j)
          for (t.wa || (t.wa = Object.getOwnPropertyNames(t.u.h)); ; ) {
            var r = t.wa.shift();
            if (r === void 0)
              break;
            if (Object.prototype.hasOwnProperty.call(t.u.h, r) && !t.kb[r] && (t.kb[r] = !0, Object.prototype.propertyIsEnumerable.call(t.u.h, r))) {
              t.Ra = r;
              break e;
            }
          }
        else if (t.u !== null && t.u !== void 0) {
          for (t.wa || (t.wa = Object.getOwnPropertyNames(t.u)); r = t.wa.shift(), r !== void 0; )
            if (t.kb[r] = !0, Object.prototype.propertyIsEnumerable.call(t.u, r)) {
              t.Ra = r;
              break e;
            }
        }
        if (t.u = Q(this, t.u), t.wa = null, t.u === null) {
          e.pop();
          return;
        }
      }
  if (!t.wb)
    if (t.wb = !0, e = n.left, e.type === "VariableDeclaration")
      t.pa = [ye, e.fa[0].id.name];
    else
      return t.pa = null, t = new y(e, t.scope), t.sa = !0, t;
  if (t.pa || (t.pa = t.value), !t.ta && (t.ta = !0, e = t.Ra, r = Nt(this, t.pa, e)))
    return Rt(this, r, t.pa, e);
  if (t.Ra = void 0, t.wb = !1, t.ta = !1, n.body)
    return new y(n.body, t.scope);
};
f.prototype.stepForStatement = function(e, t, n) {
  switch (t.na) {
    default:
      if (t.na = 1, n.ua)
        return new y(n.ua, t.scope);
      break;
    case 1:
      if (t.na = 2, n.test)
        return new y(n.test, t.scope);
      break;
    case 2:
      if (t.na = 3, n.test && !t.value)
        e.pop();
      else
        return t.W = !0, new y(n.body, t.scope);
      break;
    case 3:
      if (t.na = 1, n.update)
        return new y(n.update, t.scope);
  }
};
f.prototype.stepFunctionDeclaration = function(e) {
  e.pop();
};
f.prototype.stepFunctionExpression = function(e, t, n) {
  e.pop(), t = e[e.length - 1], e = t.scope, n.id && (e = It(this, e)), t.value = Ot(this, n, e, t.Pa), n.id && this.g(e.object, n.id.name, t.value, jt);
};
f.prototype.stepIdentifier = function(e, t, n) {
  if (e.pop(), t.sa)
    e[e.length - 1].value = [ye, n.name];
  else {
    if (t = Tt(this, n.name), this.P)
      return be(this, t, this.Na);
    e[e.length - 1].value = t;
  }
};
f.prototype.stepIfStatement = f.prototype.stepConditionalExpression;
f.prototype.stepLabeledStatement = function(e, t, n) {
  return e.pop(), e = t.labels || [], e.push(n.label.name), t = new y(n.body, t.scope), t.labels = e, t;
};
f.prototype.stepLiteral = function(e, t, n) {
  e.pop(), t = n.value, t instanceof RegExp && (n = this.s(this.Ma), kt(this, n, t), t = n), e[e.length - 1].value = t;
};
f.prototype.stepLogicalExpression = function(e, t, n) {
  if (n.operator !== "&&" && n.operator !== "||")
    throw SyntaxError("Unknown logical operator: " + n.operator);
  if (!t.ja)
    return t.ja = !0, new y(n.left, t.scope);
  if (t.Da)
    e.pop(), e[e.length - 1].value = t.value;
  else if (n.operator === "&&" && !t.value || n.operator === "||" && t.value)
    e.pop(), e[e.length - 1].value = t.value;
  else
    return t.Da = !0, new y(n.right, t.scope);
};
f.prototype.stepMemberExpression = function(e, t, n) {
  if (!t.Ca)
    return t.Ca = !0, new y(n.object, t.scope);
  if (n.bb)
    if (t.Vb)
      n = t.value;
    else
      return t.u = t.value, t.Vb = !0, new y(n.Wa, t.scope);
  else
    t.u = t.value, n = n.Wa.name;
  if (e.pop(), t.sa)
    e[e.length - 1].value = [t.u, n];
  else {
    if (n = this.G(t.u, n), this.P)
      return be(this, n, t.u);
    e[e.length - 1].value = n;
  }
};
f.prototype.stepNewExpression = f.prototype.stepCallExpression;
f.prototype.stepObjectExpression = function(e, t, n) {
  var r = t.A || 0, i = n.h[r];
  if (t.u) {
    var a = t.Pa;
    t.Ja[a] || (t.Ja[a] = {}), t.Ja[a][i.kind] = t.value, t.A = ++r, i = n.h[r];
  } else
    t.u = this.s(this.M), t.Ja = /* @__PURE__ */ Object.create(null);
  if (i) {
    var u = i.key;
    if (u.type === "Identifier")
      a = u.name;
    else if (u.type === "Literal")
      a = u.value;
    else
      throw SyntaxError("Unknown object structure: " + u.type);
    return t.Pa = a, new y(i.value, t.scope);
  }
  for (u in t.Ja)
    n = t.Ja[u], "get" in n || "set" in n ? this.g(t.u, u, Pe, {
      configurable: !0,
      enumerable: !0,
      get: n.get,
      set: n.set
    }) : this.g(t.u, u, n.init);
  e.pop(), e[e.length - 1].value = t.u;
};
f.prototype.stepProgram = function(e, t, n) {
  if (e = n.body.shift())
    return t.done = !1, new y(e, t.scope);
  t.done = !0;
};
f.prototype.stepReturnStatement = function(e, t, n) {
  if (n.K && !t.ka)
    return t.ka = !0, new y(n.K, t.scope);
  De(this, 3, t.value);
};
f.prototype.stepSequenceExpression = function(e, t, n) {
  var r = t.A || 0;
  if (n = n.xb[r])
    return t.A = r + 1, new y(n, t.scope);
  e.pop(), e[e.length - 1].value = t.value;
};
f.prototype.stepSwitchStatement = function(e, t, n) {
  if (!t.ga)
    return t.ga = 1, new y(n.Qb, t.scope);
  for (t.ga === 1 && (t.ga = 2, t.hc = t.value, t.cb = -1); ; ) {
    var r = t.gb || 0, i = n.tb[r];
    if (t.Ha || !i || i.test)
      if (i || t.Ha || t.cb === -1)
        if (i) {
          if (!t.Ha && !t.Fb && i.test)
            return t.Fb = !0, new y(i.test, t.scope);
          if (t.Ha || t.value === t.hc) {
            t.Ha = !0;
            var a = t.A || 0;
            if (i.da[a])
              return t.Zb = !0, t.A = a + 1, new y(i.da[a], t.scope);
          }
          t.Fb = !1, t.A = 0, t.gb = r + 1;
        } else {
          e.pop();
          break;
        }
      else
        t.Ha = !0, t.gb = t.cb;
    else
      t.cb = r, t.gb = r + 1;
  }
};
f.prototype.stepThisExpression = function(e) {
  e.pop(), e[e.length - 1].value = Tt(this, "this");
};
f.prototype.stepThrowStatement = function(e, t, n) {
  if (t.ka)
    m(this, t.value);
  else
    return t.ka = !0, new y(n.K, t.scope);
};
f.prototype.stepTryStatement = function(e, t, n) {
  if (!t.Rb)
    return t.Rb = !0, new y(n.block, t.scope);
  if (t.ea && t.ea.type === 4 && !t.Tb && n.Ea)
    return t.Tb = !0, e = It(this, t.scope), this.g(e.object, n.Ea.Ua.name, t.ea.value), t.ea = void 0, new y(n.Ea.body, e);
  if (!t.Sb && n.fb)
    return t.Sb = !0, new y(n.fb, t.scope);
  e.pop(), t.ea && De(this, t.ea.type, t.ea.value, t.ea.label);
};
f.prototype.stepUnaryExpression = function(e, t, n) {
  if (!t.ka)
    return t.ka = !0, e = new y(n.K, t.scope), e.sa = n.operator === "delete", e;
  e.pop();
  var r = t.value;
  switch (n.operator) {
    case "-":
      r = -r;
      break;
    case "+":
      r = +r;
      break;
    case "!":
      r = !r;
      break;
    case "~":
      r = ~r;
      break;
    case "delete":
      if (n = !0, Array.isArray(r)) {
        var i = r[0];
        i === ye && (i = t.scope), r = String(r[1]);
        try {
          delete i.h[r];
        } catch {
          t.scope.S ? m(this, this.j, "Cannot delete property '" + r + "' of '" + i + "'") : n = !1;
        }
      }
      r = n;
      break;
    case "typeof":
      r = r && r.H === "Function" ? "function" : typeof r;
      break;
    case "void":
      r = void 0;
      break;
    default:
      throw SyntaxError("Unknown unary operator: " + n.operator);
  }
  e[e.length - 1].value = r;
};
f.prototype.stepUpdateExpression = function(e, t, n) {
  if (!t.ja)
    return t.ja = !0, e = new y(n.K, t.scope), e.sa = !0, e;
  if (t.Ga || (t.Ga = t.value), t.Ba && (t.ma = t.value), !t.Ba) {
    var r = Mt(this, t.Ga);
    if (t.ma = r, this.P)
      return t.Ba = !0, be(this, r, t.Ga);
  }
  if (t.ta)
    e.pop(), e[e.length - 1].value = t.ib;
  else {
    if (r = Number(t.ma), n.operator === "++")
      var i = r + 1;
    else if (n.operator === "--")
      i = r - 1;
    else
      throw SyntaxError("Unknown update expression: " + n.operator);
    if (n = n.prefix ? i : r, r = Nt(this, t.Ga, i))
      return t.ta = !0, t.ib = n, Rt(this, r, t.Ga, i);
    e.pop(), e[e.length - 1].value = n;
  }
};
f.prototype.stepVariableDeclaration = function(e, t, n) {
  n = n.fa;
  var r = t.A || 0, i = n[r];
  for (t.Bb && i && (Sr(this, i.id.name, t.value), t.Bb = !1, i = n[++r]); i; ) {
    if (i.ua)
      return t.A = r, t.Bb = !0, t.Pa = i.id.name, new y(i.ua, t.scope);
    i = n[++r];
  }
  e.pop();
};
f.prototype.stepWithStatement = function(e, t, n) {
  return t.Ca ? (e.pop(), e = It(this, t.scope, t.value), new y(n.body, e)) : (t.Ca = !0, new y(n.object, t.scope));
};
f.prototype.stepWhileStatement = f.prototype.stepDoWhileStatement;
ne.Interpreter = f;
f.prototype.step = f.prototype.lb;
f.prototype.run = f.prototype.Eb;
f.prototype.appendCode = f.prototype.Jb;
f.prototype.createObject = f.prototype.Aa;
f.prototype.createObjectProto = f.prototype.s;
f.prototype.createAsyncFunction = f.prototype.ub;
f.prototype.createNativeFunction = f.prototype.i;
f.prototype.getProperty = f.prototype.G;
f.prototype.setProperty = f.prototype.g;
f.prototype.nativeToPseudo = f.prototype.Ia;
f.prototype.pseudoToNative = f.prototype.R;
f.prototype.getGlobalScope = f.prototype.Xb;
f.prototype.getStateStack = f.prototype.Yb;
f.prototype.setStateStack = f.prototype.ec;
f.VALUE_IN_DESCRIPTOR = Pe;
const on = (e) => {
  const t = `
function theFunction() {
  ${e}
}
theFunction();
`, n = new f(t);
  return n.run(), n.pseudoToNative(n.value);
};
function sn(e) {
  return on(e);
}
export {
  sn as evaluate
};
